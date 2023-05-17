import { b as S1, s as w1, i as E1, g as Gt, h as _e, k as Zg, T as bt, j as z, r as im, d as x1, R as P1, P as A1, m as j1, e as T1, f as _1 } from "./ThemeStyles.c0d84d2f.js";
import { s as I1, A as eb, B as tb, C as rb, e as nb, q as R1, i as F1, D as ib, E as V1, F as sb, G as Fr, R as C1, w as M1, O as k1, t as ob, S as N1, u as D1, v as L1, H as B1, I as U1, x as q1, J as ab, y as H1, K as K1, L as G1, z as J1 } from "./Response.895d496e.js";
import { s as W1, l as z1 } from "./TrashCan.5b3df73f.js";
import { o as Y1, $ as X1, a as Q1 } from "./index.module.6cde501d.js";
import { i as Z1, r as eE, S as tE, l as rE } from "./index.module.a5a23f10.js";
import { a as nE, b as iE, u as sE, F as oE } from "./index.esm.97fc0c41.js";
import { s as xt } from "./styled-components.browser.esm.5667ec00.js";
import { u as aE } from "./useDispatch.43a2a81a.js";
import "./AngleDown.23d22323.js";
const cb = S1(), jn = cb.startListening;
function cE(e, t) {
  const r = {
    sendHttpRequest: () => jn({
      actionCreator: eb,
      effect: async (n, i) => {
        e.postMessage({ command: "sendHttpRequest", payload: n.payload.request });
      }
    }),
    createSchema: () => jn({
      actionCreator: tb,
      effect: async (n, i) => {
        e.postMessage({ command: "createSchema", payload: n.payload.response });
      }
    }),
    savePrefs: () => jn({
      matcher: E1(rb, nb),
      effect: async (n, i) => {
        const { prefs: s } = i.getState();
        e.postMessage({
          command: "savePrefs",
          payload: s
        });
      }
    }),
    showEnvWindow: () => jn({
      actionCreator: W1,
      effect: async (n, i) => {
        e.postMessage({ command: "showEnvWindow", payload: void 0 });
      }
    }),
    saveConfig: Y1(jn, e)
  };
  return I1(jn, t), w1(r), cb;
}
var _o = function(e) {
  return e && e.Math == Math && e;
}, Pt = (
  // eslint-disable-next-line es/no-global-this -- safe
  _o(typeof globalThis == "object" && globalThis) || _o(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  _o(typeof self == "object" && self) || _o(typeof Gt == "object" && Gt) || // eslint-disable-next-line no-new-func -- fallback
  function() {
    return this;
  }() || Function("return this")()
), Ie = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, lE = Ie, Ya = !lE(function() {
  var e = function() {
  }.bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
}), uE = Ya, lb = Function.prototype, sm = lb.apply, om = lb.call, ub = typeof Reflect == "object" && Reflect.apply || (uE ? om.bind(sm) : function() {
  return om.apply(sm, arguments);
}), fb = Ya, pb = Function.prototype, _f = pb.call, fE = fb && pb.bind.bind(_f, _f), Re = fb ? fE : function(e) {
  return function() {
    return _f.apply(e, arguments);
  };
}, hb = Re, pE = hb({}.toString), hE = hb("".slice), vi = function(e) {
  return hE(pE(e), 8, -1);
}, dE = vi, mE = Re, sh = function(e) {
  if (dE(e) === "Function")
    return mE(e);
}, If = typeof document == "object" && document.all, yE = typeof If > "u" && If !== void 0, db = {
  all: If,
  IS_HTMLDDA: yE
}, mb = db, vE = mb.all, ze = mb.IS_HTMLDDA ? function(e) {
  return typeof e == "function" || e === vE;
} : function(e) {
  return typeof e == "function";
}, Es = {}, gE = Ie, At = !gE(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
}), bE = Ya, Io = Function.prototype.call, wn = bE ? Io.bind(Io) : function() {
  return Io.apply(Io, arguments);
}, oh = {}, yb = {}.propertyIsEnumerable, vb = Object.getOwnPropertyDescriptor, $E = vb && !yb.call({ 1: 2 }, 1);
oh.f = $E ? function(t) {
  var r = vb(this, t);
  return !!r && r.enumerable;
} : yb;
var xs = function(e, t) {
  return {
    enumerable: !(e & 1),
    configurable: !(e & 2),
    writable: !(e & 4),
    value: t
  };
}, OE = Re, SE = Ie, wE = vi, wu = Object, EE = OE("".split), gb = SE(function() {
  return !wu("z").propertyIsEnumerable(0);
}) ? function(e) {
  return wE(e) == "String" ? EE(e, "") : wu(e);
} : wu, bb = function(e) {
  return e == null;
}, xE = bb, PE = TypeError, ah = function(e) {
  if (xE(e))
    throw PE("Can't call method on " + e);
  return e;
}, AE = gb, jE = ah, dr = function(e) {
  return AE(jE(e));
}, am = ze, $b = db, TE = $b.all, qr = $b.IS_HTMLDDA ? function(e) {
  return typeof e == "object" ? e !== null : am(e) || e === TE;
} : function(e) {
  return typeof e == "object" ? e !== null : am(e);
}, Nt = {}, Eu = Nt, xu = Pt, _E = ze, cm = function(e) {
  return _E(e) ? e : void 0;
}, Qt = function(e, t) {
  return arguments.length < 2 ? cm(Eu[e]) || cm(xu[e]) : Eu[e] && Eu[e][t] || xu[e] && xu[e][t];
}, IE = Re, Ps = IE({}.isPrototypeOf), RE = typeof navigator < "u" && String(navigator.userAgent) || "", Ob = Pt, Pu = RE, lm = Ob.process, um = Ob.Deno, fm = lm && lm.versions || um && um.version, pm = fm && fm.v8, Rt, la;
pm && (Rt = pm.split("."), la = Rt[0] > 0 && Rt[0] < 4 ? 1 : +(Rt[0] + Rt[1]));
!la && Pu && (Rt = Pu.match(/Edge\/(\d+)/), (!Rt || Rt[1] >= 74) && (Rt = Pu.match(/Chrome\/(\d+)/), Rt && (la = +Rt[1])));
var ch = la, hm = ch, FE = Ie, gi = !!Object.getOwnPropertySymbols && !FE(function() {
  var e = Symbol();
  return !String(e) || !(Object(e) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && hm && hm < 41;
}), VE = gi, Sb = VE && !Symbol.sham && typeof Symbol.iterator == "symbol", CE = Qt, ME = ze, kE = Ps, NE = Sb, DE = Object, As = NE ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  var t = CE("Symbol");
  return ME(t) && kE(t.prototype, DE(e));
}, LE = String, wb = function(e) {
  try {
    return LE(e);
  } catch {
    return "Object";
  }
}, BE = ze, UE = wb, qE = TypeError, Eb = function(e) {
  if (BE(e))
    return e;
  throw qE(UE(e) + " is not a function");
}, HE = Eb, KE = bb, GE = function(e, t) {
  var r = e[t];
  return KE(r) ? void 0 : HE(r);
}, Au = wn, ju = ze, Tu = qr, JE = TypeError, WE = function(e, t) {
  var r, n;
  if (t === "string" && ju(r = e.toString) && !Tu(n = Au(r, e)) || ju(r = e.valueOf) && !Tu(n = Au(r, e)) || t !== "string" && ju(r = e.toString) && !Tu(n = Au(r, e)))
    return n;
  throw JE("Can't convert object to primitive value");
}, xb = { exports: {} }, dm = Pt, zE = Object.defineProperty, YE = function(e, t) {
  try {
    zE(dm, e, { value: t, configurable: !0, writable: !0 });
  } catch {
    dm[e] = t;
  }
  return t;
}, XE = Pt, QE = YE, mm = "__core-js_shared__", ZE = XE[mm] || QE(mm, {}), lh = ZE, ym = lh;
(xb.exports = function(e, t) {
  return ym[e] || (ym[e] = t !== void 0 ? t : {});
})("versions", []).push({
  version: "3.29.1",
  mode: "pure",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var bi = xb.exports, ex = ah, tx = Object, $i = function(e) {
  return tx(ex(e));
}, rx = Re, nx = $i, ix = rx({}.hasOwnProperty), pt = Object.hasOwn || function(t, r) {
  return ix(nx(t), r);
}, sx = Re, ox = 0, ax = Math.random(), cx = sx(1 .toString), uh = function(e) {
  return "Symbol(" + (e === void 0 ? "" : e) + ")_" + cx(++ox + ax, 36);
}, lx = Pt, ux = bi, vm = pt, fx = uh, px = gi, hx = Sb, Bn = lx.Symbol, _u = ux("wks"), dx = hx ? Bn.for || Bn : Bn && Bn.withoutSetter || fx, rt = function(e) {
  return vm(_u, e) || (_u[e] = px && vm(Bn, e) ? Bn[e] : dx("Symbol." + e)), _u[e];
}, mx = wn, gm = qr, bm = As, yx = GE, vx = WE, gx = rt, bx = TypeError, $x = gx("toPrimitive"), Ox = function(e, t) {
  if (!gm(e) || bm(e))
    return e;
  var r = yx(e, $x), n;
  if (r) {
    if (t === void 0 && (t = "default"), n = mx(r, e, t), !gm(n) || bm(n))
      return n;
    throw bx("Can't convert object to primitive value");
  }
  return t === void 0 && (t = "number"), vx(e, t);
}, Sx = Ox, wx = As, Xa = function(e) {
  var t = Sx(e, "string");
  return wx(t) ? t : t + "";
}, Ex = Pt, $m = qr, Rf = Ex.document, xx = $m(Rf) && $m(Rf.createElement), Pb = function(e) {
  return xx ? Rf.createElement(e) : {};
}, Px = At, Ax = Ie, jx = Pb, Ab = !Px && !Ax(function() {
  return Object.defineProperty(jx("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
}), Tx = At, _x = wn, Ix = oh, Rx = xs, Fx = dr, Vx = Xa, Cx = pt, Mx = Ab, Om = Object.getOwnPropertyDescriptor;
Es.f = Tx ? Om : function(t, r) {
  if (t = Fx(t), r = Vx(r), Mx)
    try {
      return Om(t, r);
    } catch {
    }
  if (Cx(t, r))
    return Rx(!_x(Ix.f, t, r), t[r]);
};
var kx = Ie, Nx = ze, Dx = /#|\.prototype\./, js = function(e, t) {
  var r = Bx[Lx(e)];
  return r == qx ? !0 : r == Ux ? !1 : Nx(t) ? kx(t) : !!t;
}, Lx = js.normalize = function(e) {
  return String(e).replace(Dx, ".").toLowerCase();
}, Bx = js.data = {}, Ux = js.NATIVE = "N", qx = js.POLYFILL = "P", Hx = js, Sm = sh, Kx = Eb, Gx = Ya, Jx = Sm(Sm.bind), jb = function(e, t) {
  return Kx(e), t === void 0 ? e : Gx ? Jx(e, t) : function() {
    return e.apply(t, arguments);
  };
}, Zt = {}, Wx = At, zx = Ie, Tb = Wx && zx(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype != 42;
}), Yx = qr, Xx = String, Qx = TypeError, Ts = function(e) {
  if (Yx(e))
    return e;
  throw Qx(Xx(e) + " is not an object");
}, Zx = At, eP = Ab, tP = Tb, Ro = Ts, wm = Xa, rP = TypeError, Iu = Object.defineProperty, nP = Object.getOwnPropertyDescriptor, Ru = "enumerable", Fu = "configurable", Vu = "writable";
Zt.f = Zx ? tP ? function(t, r, n) {
  if (Ro(t), r = wm(r), Ro(n), typeof t == "function" && r === "prototype" && "value" in n && Vu in n && !n[Vu]) {
    var i = nP(t, r);
    i && i[Vu] && (t[r] = n.value, n = {
      configurable: Fu in n ? n[Fu] : i[Fu],
      enumerable: Ru in n ? n[Ru] : i[Ru],
      writable: !1
    });
  }
  return Iu(t, r, n);
} : Iu : function(t, r, n) {
  if (Ro(t), r = wm(r), Ro(n), eP)
    try {
      return Iu(t, r, n);
    } catch {
    }
  if ("get" in n || "set" in n)
    throw rP("Accessors not supported");
  return "value" in n && (t[r] = n.value), t;
};
var iP = At, sP = Zt, oP = xs, _s = iP ? function(e, t, r) {
  return sP.f(e, t, oP(1, r));
} : function(e, t, r) {
  return e[t] = r, e;
}, Fo = Pt, aP = ub, cP = sh, lP = ze, uP = Es.f, fP = Hx, Tn = Nt, pP = jb, _n = _s, Em = pt, hP = function(e) {
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
    return aP(e, this, arguments);
  };
  return t.prototype = e.prototype, t;
}, Ne = function(e, t) {
  var r = e.target, n = e.global, i = e.stat, s = e.proto, o = n ? Fo : i ? Fo[r] : (Fo[r] || {}).prototype, a = n ? Tn : Tn[r] || _n(Tn, r, {})[r], c = a.prototype, l, u, f, p, h, d, m, y, v;
  for (p in t)
    l = fP(n ? p : r + (i ? "." : "#") + p, e.forced), u = !l && o && Em(o, p), d = a[p], u && (e.dontCallGetSet ? (v = uP(o, p), m = v && v.value) : m = o[p]), h = u && m ? m : t[p], !(u && typeof d == typeof h) && (e.bind && u ? y = pP(h, Fo) : e.wrap && u ? y = hP(h) : s && lP(h) ? y = cP(h) : y = h, (e.sham || h && h.sham || d && d.sham) && _n(y, "sham", !0), _n(a, p, y), s && (f = r + "Prototype", Em(Tn, f) || _n(Tn, f, {}), _n(Tn[f], p, h), e.real && c && (l || !c[p]) && _n(c, p, h)));
}, dP = Math.ceil, mP = Math.floor, yP = Math.trunc || function(t) {
  var r = +t;
  return (r > 0 ? mP : dP)(r);
}, vP = yP, fh = function(e) {
  var t = +e;
  return t !== t || t === 0 ? 0 : vP(t);
}, gP = fh, bP = Math.max, $P = Math.min, _b = function(e, t) {
  var r = gP(e);
  return r < 0 ? bP(r + t, 0) : $P(r, t);
}, OP = fh, SP = Math.min, wP = function(e) {
  return e > 0 ? SP(OP(e), 9007199254740991) : 0;
}, EP = wP, Qa = function(e) {
  return EP(e.length);
}, xP = dr, PP = _b, AP = Qa, xm = function(e) {
  return function(t, r, n) {
    var i = xP(t), s = AP(i), o = PP(n, s), a;
    if (e && r != r) {
      for (; s > o; )
        if (a = i[o++], a != a)
          return !0;
    } else
      for (; s > o; o++)
        if ((e || o in i) && i[o] === r)
          return e || o || 0;
    return !e && -1;
  };
}, Ib = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: xm(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: xm(!1)
}, Za = {}, jP = Re, Cu = pt, TP = dr, _P = Ib.indexOf, IP = Za, Pm = jP([].push), Rb = function(e, t) {
  var r = TP(e), n = 0, i = [], s;
  for (s in r)
    !Cu(IP, s) && Cu(r, s) && Pm(i, s);
  for (; t.length > n; )
    Cu(r, s = t[n++]) && (~_P(i, s) || Pm(i, s));
  return i;
}, ph = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], RP = Rb, FP = ph, hh = Object.keys || function(t) {
  return RP(t, FP);
}, VP = Ne, CP = $i, Fb = hh, MP = Ie, kP = MP(function() {
  Fb(1);
});
VP({ target: "Object", stat: !0, forced: kP }, {
  keys: function(t) {
    return Fb(CP(t));
  }
});
var NP = Nt, DP = NP.Object.keys, LP = DP, BP = LP, UP = BP, qP = UP, HP = qP, KP = HP, GP = KP, JP = GP;
const Vb = /* @__PURE__ */ _e(JP);
var WP = rt, zP = WP("toStringTag"), Cb = {};
Cb[zP] = "z";
var dh = String(Cb) === "[object z]", YP = dh, XP = ze, Yo = vi, QP = rt, ZP = QP("toStringTag"), eA = Object, tA = Yo(function() {
  return arguments;
}()) == "Arguments", rA = function(e, t) {
  try {
    return e[t];
  } catch {
  }
}, Is = YP ? Yo : function(e) {
  var t, r, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = rA(t = eA(e), ZP)) == "string" ? r : tA ? Yo(t) : (n = Yo(t)) == "Object" && XP(t.callee) ? "Arguments" : n;
}, nA = Is, iA = String, Rs = function(e) {
  if (nA(e) === "Symbol")
    throw TypeError("Cannot convert a Symbol value to a string");
  return iA(e);
}, ec = {}, sA = At, oA = Tb, aA = Zt, cA = Ts, lA = dr, uA = hh;
ec.f = sA && !oA ? Object.defineProperties : function(t, r) {
  cA(t);
  for (var n = lA(r), i = uA(r), s = i.length, o = 0, a; s > o; )
    aA.f(t, a = i[o++], n[a]);
  return t;
};
var fA = Qt, pA = fA("document", "documentElement"), hA = bi, dA = uh, Am = hA("keys"), tc = function(e) {
  return Am[e] || (Am[e] = dA(e));
}, mA = Ts, yA = ec, jm = ph, vA = Za, gA = pA, bA = Pb, $A = tc, Tm = ">", _m = "<", Ff = "prototype", Vf = "script", Mb = $A("IE_PROTO"), Mu = function() {
}, kb = function(e) {
  return _m + Vf + Tm + e + _m + "/" + Vf + Tm;
}, Im = function(e) {
  e.write(kb("")), e.close();
  var t = e.parentWindow.Object;
  return e = null, t;
}, OA = function() {
  var e = bA("iframe"), t = "java" + Vf + ":", r;
  return e.style.display = "none", gA.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(kb("document.F=Object")), r.close(), r.F;
}, Vo, Xo = function() {
  try {
    Vo = new ActiveXObject("htmlfile");
  } catch {
  }
  Xo = typeof document < "u" ? document.domain && Vo ? Im(Vo) : OA() : Im(Vo);
  for (var e = jm.length; e--; )
    delete Xo[Ff][jm[e]];
  return Xo();
};
vA[Mb] = !0;
var mh = Object.create || function(t, r) {
  var n;
  return t !== null ? (Mu[Ff] = mA(t), n = new Mu(), Mu[Ff] = null, n[Mb] = t) : n = Xo(), r === void 0 ? n : yA.f(n, r);
}, rc = {}, SA = Rb, wA = ph, EA = wA.concat("length", "prototype");
rc.f = Object.getOwnPropertyNames || function(t) {
  return SA(t, EA);
};
var Nb = {}, xA = Xa, PA = Zt, AA = xs, yh = function(e, t, r) {
  var n = xA(t);
  n in e ? PA.f(e, n, AA(0, r)) : e[n] = r;
}, Rm = _b, jA = Qa, TA = yh, _A = Array, IA = Math.max, RA = function(e, t, r) {
  for (var n = jA(e), i = Rm(t, n), s = Rm(r === void 0 ? n : r, n), o = _A(IA(s - i, 0)), a = 0; i < s; i++, a++)
    TA(o, a, e[i]);
  return o.length = a, o;
}, FA = vi, VA = dr, Db = rc.f, CA = RA, Lb = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], MA = function(e) {
  try {
    return Db(e);
  } catch {
    return CA(Lb);
  }
};
Nb.f = function(t) {
  return Lb && FA(t) == "Window" ? MA(t) : Db(VA(t));
};
var nc = {};
nc.f = Object.getOwnPropertySymbols;
var kA = _s, ic = function(e, t, r, n) {
  return n && n.enumerable ? e[t] = r : kA(e, t, r), e;
}, NA = Zt, DA = function(e, t, r) {
  return NA.f(e, t, r);
}, Fs = {}, LA = rt;
Fs.f = LA;
var Fm = Nt, BA = pt, UA = Fs, qA = Zt.f, be = function(e) {
  var t = Fm.Symbol || (Fm.Symbol = {});
  BA(t, e) || qA(t, e, {
    value: UA.f(e)
  });
}, HA = wn, KA = Qt, GA = rt, JA = ic, Bb = function() {
  var e = KA("Symbol"), t = e && e.prototype, r = t && t.valueOf, n = GA("toPrimitive");
  t && !t[n] && JA(t, n, function(i) {
    return HA(r, this);
  }, { arity: 1 });
}, WA = dh, zA = Is, YA = WA ? {}.toString : function() {
  return "[object " + zA(this) + "]";
}, XA = dh, QA = Zt.f, ZA = _s, ej = pt, tj = YA, rj = rt, Vm = rj("toStringTag"), Vs = function(e, t, r, n) {
  if (e) {
    var i = r ? e : e.prototype;
    ej(i, Vm) || QA(i, Vm, { configurable: !0, value: t }), n && !XA && ZA(i, "toString", tj);
  }
}, nj = Pt, ij = ze, Cm = nj.WeakMap, sj = ij(Cm) && /native code/.test(String(Cm)), oj = sj, Ub = Pt, aj = qr, cj = _s, ku = pt, Nu = lh, lj = tc, uj = Za, Mm = "Object already initialized", Cf = Ub.TypeError, fj = Ub.WeakMap, ua, os, fa, pj = function(e) {
  return fa(e) ? os(e) : ua(e, {});
}, hj = function(e) {
  return function(t) {
    var r;
    if (!aj(t) || (r = os(t)).type !== e)
      throw Cf("Incompatible receiver, " + e + " required");
    return r;
  };
};
if (oj || Nu.state) {
  var Dt = Nu.state || (Nu.state = new fj());
  Dt.get = Dt.get, Dt.has = Dt.has, Dt.set = Dt.set, ua = function(e, t) {
    if (Dt.has(e))
      throw Cf(Mm);
    return t.facade = e, Dt.set(e, t), t;
  }, os = function(e) {
    return Dt.get(e) || {};
  }, fa = function(e) {
    return Dt.has(e);
  };
} else {
  var In = lj("state");
  uj[In] = !0, ua = function(e, t) {
    if (ku(e, In))
      throw Cf(Mm);
    return t.facade = e, cj(e, In, t), t;
  }, os = function(e) {
    return ku(e, In) ? e[In] : {};
  }, fa = function(e) {
    return ku(e, In);
  };
}
var vh = {
  set: ua,
  get: os,
  has: fa,
  enforce: pj,
  getterFor: hj
}, dj = vi, gh = Array.isArray || function(t) {
  return dj(t) == "Array";
}, mj = Re, yj = ze, Mf = lh, vj = mj(Function.toString);
yj(Mf.inspectSource) || (Mf.inspectSource = function(e) {
  return vj(e);
});
var gj = Mf.inspectSource, bj = Re, $j = Ie, qb = ze, Oj = Is, Sj = Qt, wj = gj, Hb = function() {
}, Ej = [], Kb = Sj("Reflect", "construct"), bh = /^\s*(?:class|function)\b/, xj = bj(bh.exec), Pj = !bh.exec(Hb), Bi = function(t) {
  if (!qb(t))
    return !1;
  try {
    return Kb(Hb, Ej, t), !0;
  } catch {
    return !1;
  }
}, Gb = function(t) {
  if (!qb(t))
    return !1;
  switch (Oj(t)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return Pj || !!xj(bh, wj(t));
  } catch {
    return !0;
  }
};
Gb.sham = !0;
var Aj = !Kb || $j(function() {
  var e;
  return Bi(Bi.call) || !Bi(Object) || !Bi(function() {
    e = !0;
  }) || e;
}) ? Gb : Bi, km = gh, jj = Aj, Tj = qr, _j = rt, Ij = _j("species"), Nm = Array, Rj = function(e) {
  var t;
  return km(e) && (t = e.constructor, jj(t) && (t === Nm || km(t.prototype)) ? t = void 0 : Tj(t) && (t = t[Ij], t === null && (t = void 0))), t === void 0 ? Nm : t;
}, Fj = Rj, Jb = function(e, t) {
  return new (Fj(e))(t === 0 ? 0 : t);
}, Vj = jb, Cj = Re, Mj = gb, kj = $i, Nj = Qa, Dj = Jb, Dm = Cj([].push), Er = function(e) {
  var t = e == 1, r = e == 2, n = e == 3, i = e == 4, s = e == 6, o = e == 7, a = e == 5 || s;
  return function(c, l, u, f) {
    for (var p = kj(c), h = Mj(p), d = Vj(l, u), m = Nj(h), y = 0, v = f || Dj, S = t ? v(c, m) : r || o ? v(c, 0) : void 0, O, w; m > y; y++)
      if ((a || y in h) && (O = h[y], w = d(O, y, p), e))
        if (t)
          S[y] = w;
        else if (w)
          switch (e) {
            case 3:
              return !0;
            case 5:
              return O;
            case 6:
              return y;
            case 2:
              Dm(S, O);
          }
        else
          switch (e) {
            case 4:
              return !1;
            case 7:
              Dm(S, O);
          }
    return s ? -1 : n || i ? i : S;
  };
}, $h = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: Er(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: Er(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: Er(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: Er(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: Er(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: Er(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: Er(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: Er(7)
}, sc = Ne, Oh = Pt, Sh = wn, Lj = Re, Qn = At, Zn = gi, Bj = Ie, Te = pt, Uj = Ps, kf = Ts, oc = dr, wh = Xa, qj = Rs, Nf = xs, as = mh, Wb = hh, Hj = rc, zb = Nb, Kj = nc, Yb = Es, Xb = Zt, Gj = ec, Qb = oh, Lm = ic, Jj = DA, Eh = bi, Wj = tc, Zb = Za, Bm = uh, zj = rt, Yj = Fs, Xj = be, Qj = Bb, Zj = Vs, e$ = vh, ac = $h.forEach, Xe = Wj("hidden"), cc = "Symbol", cs = "prototype", eT = e$.set, Um = e$.getterFor(cc), Ft = Object[cs], fn = Oh.Symbol, Ji = fn && fn[cs], tT = Oh.TypeError, Du = Oh.QObject, t$ = Yb.f, on = Xb.f, r$ = zb.f, rT = Qb.f, n$ = Lj([].push), lr = Eh("symbols"), Cs = Eh("op-symbols"), nT = Eh("wks"), Df = !Du || !Du[cs] || !Du[cs].findChild, Lf = Qn && Bj(function() {
  return as(on({}, "a", {
    get: function() {
      return on(this, "a", { value: 7 }).a;
    }
  })).a != 7;
}) ? function(e, t, r) {
  var n = t$(Ft, t);
  n && delete Ft[t], on(e, t, r), n && e !== Ft && on(Ft, t, n);
} : on, Lu = function(e, t) {
  var r = lr[e] = as(Ji);
  return eT(r, {
    type: cc,
    tag: e,
    description: t
  }), Qn || (r.description = t), r;
}, lc = function(t, r, n) {
  t === Ft && lc(Cs, r, n), kf(t);
  var i = wh(r);
  return kf(n), Te(lr, i) ? (n.enumerable ? (Te(t, Xe) && t[Xe][i] && (t[Xe][i] = !1), n = as(n, { enumerable: Nf(0, !1) })) : (Te(t, Xe) || on(t, Xe, Nf(1, {})), t[Xe][i] = !0), Lf(t, i, n)) : on(t, i, n);
}, xh = function(t, r) {
  kf(t);
  var n = oc(r), i = Wb(n).concat(a$(n));
  return ac(i, function(s) {
    (!Qn || Sh(i$, n, s)) && lc(t, s, n[s]);
  }), t;
}, iT = function(t, r) {
  return r === void 0 ? as(t) : xh(as(t), r);
}, i$ = function(t) {
  var r = wh(t), n = Sh(rT, this, r);
  return this === Ft && Te(lr, r) && !Te(Cs, r) ? !1 : n || !Te(this, r) || !Te(lr, r) || Te(this, Xe) && this[Xe][r] ? n : !0;
}, s$ = function(t, r) {
  var n = oc(t), i = wh(r);
  if (!(n === Ft && Te(lr, i) && !Te(Cs, i))) {
    var s = t$(n, i);
    return s && Te(lr, i) && !(Te(n, Xe) && n[Xe][i]) && (s.enumerable = !0), s;
  }
}, o$ = function(t) {
  var r = r$(oc(t)), n = [];
  return ac(r, function(i) {
    !Te(lr, i) && !Te(Zb, i) && n$(n, i);
  }), n;
}, a$ = function(e) {
  var t = e === Ft, r = r$(t ? Cs : oc(e)), n = [];
  return ac(r, function(i) {
    Te(lr, i) && (!t || Te(Ft, i)) && n$(n, lr[i]);
  }), n;
};
Zn || (fn = function() {
  if (Uj(Ji, this))
    throw tT("Symbol is not a constructor");
  var t = !arguments.length || arguments[0] === void 0 ? void 0 : qj(arguments[0]), r = Bm(t), n = function(i) {
    this === Ft && Sh(n, Cs, i), Te(this, Xe) && Te(this[Xe], r) && (this[Xe][r] = !1), Lf(this, r, Nf(1, i));
  };
  return Qn && Df && Lf(Ft, r, { configurable: !0, set: n }), Lu(r, t);
}, Ji = fn[cs], Lm(Ji, "toString", function() {
  return Um(this).tag;
}), Lm(fn, "withoutSetter", function(e) {
  return Lu(Bm(e), e);
}), Qb.f = i$, Xb.f = lc, Gj.f = xh, Yb.f = s$, Hj.f = zb.f = o$, Kj.f = a$, Yj.f = function(e) {
  return Lu(zj(e), e);
}, Qn && Jj(Ji, "description", {
  configurable: !0,
  get: function() {
    return Um(this).description;
  }
}));
sc({ global: !0, constructor: !0, wrap: !0, forced: !Zn, sham: !Zn }, {
  Symbol: fn
});
ac(Wb(nT), function(e) {
  Xj(e);
});
sc({ target: cc, stat: !0, forced: !Zn }, {
  useSetter: function() {
    Df = !0;
  },
  useSimple: function() {
    Df = !1;
  }
});
sc({ target: "Object", stat: !0, forced: !Zn, sham: !Qn }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: iT,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: lc,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: xh,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: s$
});
sc({ target: "Object", stat: !0, forced: !Zn }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: o$
});
Qj();
Zj(fn, cc);
Zb[Xe] = !0;
var sT = gi, c$ = sT && !!Symbol.for && !!Symbol.keyFor, oT = Ne, aT = Qt, cT = pt, lT = Rs, l$ = bi, uT = c$, Bu = l$("string-to-symbol-registry"), fT = l$("symbol-to-string-registry");
oT({ target: "Symbol", stat: !0, forced: !uT }, {
  for: function(e) {
    var t = lT(e);
    if (cT(Bu, t))
      return Bu[t];
    var r = aT("Symbol")(t);
    return Bu[t] = r, fT[r] = t, r;
  }
});
var pT = Ne, hT = pt, dT = As, mT = wb, yT = bi, vT = c$, qm = yT("symbol-to-string-registry");
pT({ target: "Symbol", stat: !0, forced: !vT }, {
  keyFor: function(t) {
    if (!dT(t))
      throw TypeError(mT(t) + " is not a symbol");
    if (hT(qm, t))
      return qm[t];
  }
});
var gT = Re, bT = gT([].slice), $T = Re, Hm = gh, OT = ze, Km = vi, ST = Rs, Gm = $T([].push), wT = function(e) {
  if (OT(e))
    return e;
  if (Hm(e)) {
    for (var t = e.length, r = [], n = 0; n < t; n++) {
      var i = e[n];
      typeof i == "string" ? Gm(r, i) : (typeof i == "number" || Km(i) == "Number" || Km(i) == "String") && Gm(r, ST(i));
    }
    var s = r.length, o = !0;
    return function(a, c) {
      if (o)
        return o = !1, c;
      if (Hm(this))
        return c;
      for (var l = 0; l < s; l++)
        if (r[l] === a)
          return c;
    };
  }
}, ET = Ne, u$ = Qt, f$ = ub, xT = wn, Ms = Re, p$ = Ie, Jm = ze, Wm = As, h$ = bT, PT = wT, AT = gi, jT = String, Vr = u$("JSON", "stringify"), Co = Ms(/./.exec), zm = Ms("".charAt), TT = Ms("".charCodeAt), _T = Ms("".replace), IT = Ms(1 .toString), RT = /[\uD800-\uDFFF]/g, Ym = /^[\uD800-\uDBFF]$/, Xm = /^[\uDC00-\uDFFF]$/, Qm = !AT || p$(function() {
  var e = u$("Symbol")();
  return Vr([e]) != "[null]" || Vr({ a: e }) != "{}" || Vr(Object(e)) != "{}";
}), Zm = p$(function() {
  return Vr("\uDF06\uD834") !== '"\\udf06\\ud834"' || Vr("\uDEAD") !== '"\\udead"';
}), FT = function(e, t) {
  var r = h$(arguments), n = PT(t);
  if (!(!Jm(n) && (e === void 0 || Wm(e))))
    return r[1] = function(i, s) {
      if (Jm(n) && (s = xT(n, this, jT(i), s)), !Wm(s))
        return s;
    }, f$(Vr, null, r);
}, VT = function(e, t, r) {
  var n = zm(r, t - 1), i = zm(r, t + 1);
  return Co(Ym, e) && !Co(Xm, i) || Co(Xm, e) && !Co(Ym, n) ? "\\u" + IT(TT(e, 0), 16) : e;
};
Vr && ET({ target: "JSON", stat: !0, arity: 3, forced: Qm || Zm }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  stringify: function(t, r, n) {
    var i = h$(arguments), s = f$(Qm ? FT : Vr, null, i);
    return Zm && typeof s == "string" ? _T(s, RT, VT) : s;
  }
});
var CT = Ne, MT = gi, kT = Ie, d$ = nc, NT = $i, DT = !MT || kT(function() {
  d$.f(1);
});
CT({ target: "Object", stat: !0, forced: DT }, {
  getOwnPropertySymbols: function(t) {
    var r = d$.f;
    return r ? r(NT(t)) : [];
  }
});
var LT = Nt, BT = LT.Object.getOwnPropertySymbols, UT = BT, qT = UT, HT = qT, KT = HT, GT = KT, JT = GT, WT = JT, zT = WT;
const pa = /* @__PURE__ */ _e(zT);
var YT = Ie, XT = rt, QT = ch, ZT = XT("species"), m$ = function(e) {
  return QT >= 51 || !YT(function() {
    var t = [], r = t.constructor = {};
    return r[ZT] = function() {
      return { foo: 1 };
    }, t[e](Boolean).foo !== 1;
  });
}, e_ = Ne, t_ = $h.filter, r_ = m$, n_ = r_("filter");
e_({ target: "Array", proto: !0, forced: !n_ }, {
  filter: function(t) {
    return t_(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var i_ = Nt, Ph = function(e) {
  return i_[e + "Prototype"];
}, s_ = Ph, o_ = s_("Array").filter, a_ = Ps, c_ = o_, Uu = Array.prototype, l_ = function(e) {
  var t = e.filter;
  return e === Uu || a_(Uu, e) && t === Uu.filter ? c_ : t;
}, u_ = l_, f_ = u_, p_ = f_, h_ = p_, d_ = h_, m_ = d_, y_ = m_, v_ = y_;
const g_ = /* @__PURE__ */ _e(v_);
var y$ = { exports: {} }, b_ = Ne, $_ = Ie, O_ = dr, v$ = Es.f, g$ = At, S_ = !g$ || $_(function() {
  v$(1);
});
b_({ target: "Object", stat: !0, forced: S_, sham: !g$ }, {
  getOwnPropertyDescriptor: function(t, r) {
    return v$(O_(t), r);
  }
});
var w_ = Nt, b$ = w_.Object, E_ = y$.exports = function(t, r) {
  return b$.getOwnPropertyDescriptor(t, r);
};
b$.getOwnPropertyDescriptor.sham && (E_.sham = !0);
var x_ = y$.exports, P_ = x_, A_ = P_, j_ = A_, T_ = j_, __ = T_, I_ = __, R_ = I_, F_ = R_;
const $$ = /* @__PURE__ */ _e(F_);
var uc = {}, Bf = At, V_ = pt, O$ = Function.prototype, C_ = Bf && Object.getOwnPropertyDescriptor, Ah = V_(O$, "name"), M_ = Ah && function() {
}.name === "something", k_ = Ah && (!Bf || Bf && C_(O$, "name").configurable), N_ = {
  EXISTS: Ah,
  PROPER: M_,
  CONFIGURABLE: k_
}, D_ = Ie, L_ = !D_(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), B_ = pt, U_ = ze, q_ = $i, H_ = tc, K_ = L_, ey = H_("IE_PROTO"), Uf = Object, G_ = Uf.prototype, S$ = K_ ? Uf.getPrototypeOf : function(e) {
  var t = q_(e);
  if (B_(t, ey))
    return t[ey];
  var r = t.constructor;
  return U_(r) && t instanceof r ? r.prototype : t instanceof Uf ? G_ : null;
}, J_ = Ie, W_ = ze, z_ = qr, Y_ = mh, ty = S$, X_ = ic, Q_ = rt, qf = Q_("iterator"), w$ = !1, or, qu, Hu;
[].keys && (Hu = [].keys(), "next" in Hu ? (qu = ty(ty(Hu)), qu !== Object.prototype && (or = qu)) : w$ = !0);
var Z_ = !z_(or) || J_(function() {
  var e = {};
  return or[qf].call(e) !== e;
});
Z_ ? or = {} : or = Y_(or);
W_(or[qf]) || X_(or, qf, function() {
  return this;
});
var E$ = {
  IteratorPrototype: or,
  BUGGY_SAFARI_ITERATORS: w$
}, eI = E$.IteratorPrototype, tI = mh, rI = xs, nI = Vs, iI = uc, sI = function() {
  return this;
}, oI = function(e, t, r, n) {
  var i = t + " Iterator";
  return e.prototype = tI(eI, { next: rI(+!n, r) }), nI(e, i, !1, !0), iI[i] = sI, e;
}, aI = Ne, cI = wn, x$ = N_, lI = oI, uI = S$, fI = Vs, ry = ic, pI = rt, ny = uc, P$ = E$, hI = x$.PROPER;
x$.CONFIGURABLE;
P$.IteratorPrototype;
var Mo = P$.BUGGY_SAFARI_ITERATORS, Ku = pI("iterator"), iy = "keys", ko = "values", sy = "entries", dI = function() {
  return this;
}, A$ = function(e, t, r, n, i, s, o) {
  lI(r, t, n);
  var a = function(v) {
    if (v === i && p)
      return p;
    if (!Mo && v in u)
      return u[v];
    switch (v) {
      case iy:
        return function() {
          return new r(this, v);
        };
      case ko:
        return function() {
          return new r(this, v);
        };
      case sy:
        return function() {
          return new r(this, v);
        };
    }
    return function() {
      return new r(this);
    };
  }, c = t + " Iterator", l = !1, u = e.prototype, f = u[Ku] || u["@@iterator"] || i && u[i], p = !Mo && f || a(i), h = t == "Array" && u.entries || f, d, m, y;
  if (h && (d = uI(h.call(new e())), d !== Object.prototype && d.next && (fI(d, c, !0, !0), ny[c] = dI)), hI && i == ko && f && f.name !== ko && (l = !0, p = function() {
    return cI(f, this);
  }), i)
    if (m = {
      values: a(ko),
      keys: s ? p : a(iy),
      entries: a(sy)
    }, o)
      for (y in m)
        (Mo || l || !(y in u)) && ry(u, y, m[y]);
    else
      aI({ target: t, proto: !0, forced: Mo || l }, m);
  return o && u[Ku] !== p && ry(u, Ku, p, { name: i }), ny[t] = p, m;
}, j$ = function(e, t) {
  return { value: e, done: t };
}, mI = dr, oy = uc, T$ = vh;
Zt.f;
var yI = A$, No = j$, _$ = "Array Iterator", vI = T$.set, gI = T$.getterFor(_$);
yI(Array, "Array", function(e, t) {
  vI(this, {
    type: _$,
    target: mI(e),
    // target
    index: 0,
    // next index
    kind: t
    // kind
  });
}, function() {
  var e = gI(this), t = e.target, r = e.kind, n = e.index++;
  return !t || n >= t.length ? (e.target = void 0, No(void 0, !0)) : r == "keys" ? No(n, !1) : r == "values" ? No(t[n], !1) : No([n, t[n]], !1);
}, "values");
oy.Arguments = oy.Array;
var bI = {
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
}, $I = bI, OI = Pt, SI = Is, wI = _s, ay = uc, EI = rt, cy = EI("toStringTag");
for (var Gu in $I) {
  var ly = OI[Gu], Ju = ly && ly.prototype;
  Ju && SI(Ju) !== cy && wI(Ju, cy, Gu), ay[Gu] = ay.Array;
}
var xI = Ie, I$ = function(e, t) {
  var r = [][e];
  return !!r && xI(function() {
    r.call(null, t || function() {
      return 1;
    }, 1);
  });
}, PI = $h.forEach, AI = I$, jI = AI("forEach"), TI = jI ? [].forEach : function(t) {
  return PI(this, t, arguments.length > 1 ? arguments[1] : void 0);
}, _I = Ne, uy = TI;
_I({ target: "Array", proto: !0, forced: [].forEach != uy }, {
  forEach: uy
});
var II = Ph, RI = II("Array").forEach, FI = RI, VI = FI, CI = Is, MI = pt, kI = Ps, NI = VI, Wu = Array.prototype, DI = {
  DOMTokenList: !0,
  NodeList: !0
}, LI = function(e) {
  var t = e.forEach;
  return e === Wu || kI(Wu, e) && t === Wu.forEach || MI(DI, CI(e)) ? NI : t;
}, BI = LI, UI = BI, qI = UI, HI = qI, KI = HI, GI = KI;
const fy = /* @__PURE__ */ _e(GI);
var JI = Qt, WI = Re, zI = rc, YI = nc, XI = Ts, QI = WI([].concat), ZI = JI("Reflect", "ownKeys") || function(t) {
  var r = zI.f(XI(t)), n = YI.f;
  return n ? QI(r, n(t)) : r;
}, eR = Ne, tR = At, rR = ZI, nR = dr, iR = Es, sR = yh;
eR({ target: "Object", stat: !0, sham: !tR }, {
  getOwnPropertyDescriptors: function(t) {
    for (var r = nR(t), n = iR.f, i = rR(r), s = {}, o = 0, a, c; i.length > o; )
      c = n(r, a = i[o++]), c !== void 0 && sR(s, a, c);
    return s;
  }
});
var oR = Nt, aR = oR.Object.getOwnPropertyDescriptors, cR = aR, lR = cR, uR = lR, fR = uR, pR = fR, hR = pR, dR = hR, mR = dR;
const py = /* @__PURE__ */ _e(mR);
var R$ = { exports: {} }, yR = Ne, vR = At, hy = ec.f;
yR({ target: "Object", stat: !0, forced: Object.defineProperties !== hy, sham: !vR }, {
  defineProperties: hy
});
var gR = Nt, F$ = gR.Object, bR = R$.exports = function(t, r) {
  return F$.defineProperties(t, r);
};
F$.defineProperties.sham && (bR.sham = !0);
var $R = R$.exports, OR = $R, SR = OR, wR = SR, ER = wR, xR = ER, PR = xR, AR = PR, jR = AR;
const TR = /* @__PURE__ */ _e(jR);
var V$ = { exports: {} }, _R = Ne, IR = At, dy = Zt.f;
_R({ target: "Object", stat: !0, forced: Object.defineProperty !== dy, sham: !IR }, {
  defineProperty: dy
});
var RR = Nt, C$ = RR.Object, FR = V$.exports = function(t, r, n) {
  return C$.defineProperty(t, r, n);
};
C$.defineProperty.sham && (FR.sham = !0);
var VR = V$.exports, CR = VR, MR = CR, kR = MR, NR = kR, DR = NR, LR = DR, BR = LR, UR = BR;
const M$ = /* @__PURE__ */ _e(UR);
var qR = TypeError, HR = 9007199254740991, KR = function(e) {
  if (e > HR)
    throw qR("Maximum allowed index exceeded");
  return e;
}, GR = Ne, JR = Ie, WR = gh, zR = qr, YR = $i, XR = Qa, my = KR, yy = yh, QR = Jb, ZR = m$, eF = rt, tF = ch, k$ = eF("isConcatSpreadable"), rF = tF >= 51 || !JR(function() {
  var e = [];
  return e[k$] = !1, e.concat()[0] !== e;
}), nF = function(e) {
  if (!zR(e))
    return !1;
  var t = e[k$];
  return t !== void 0 ? !!t : WR(e);
}, iF = !rF || !ZR("concat");
GR({ target: "Array", proto: !0, arity: 1, forced: iF }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(t) {
    var r = YR(this), n = QR(r, 0), i = 0, s, o, a, c, l;
    for (s = -1, a = arguments.length; s < a; s++)
      if (l = s === -1 ? r : arguments[s], nF(l))
        for (c = XR(l), my(i + c), o = 0; o < c; o++, i++)
          o in l && yy(n, i, l[o]);
      else
        my(i + 1), yy(n, i++, l);
    return n.length = i, n;
  }
});
var sF = be;
sF("asyncIterator");
var oF = be;
oF("hasInstance");
var aF = be;
aF("isConcatSpreadable");
var cF = be;
cF("iterator");
var lF = be;
lF("match");
var uF = be;
uF("matchAll");
var fF = be;
fF("replace");
var pF = be;
pF("search");
var hF = be;
hF("species");
var dF = be;
dF("split");
var mF = be, yF = Bb;
mF("toPrimitive");
yF();
var vF = Qt, gF = be, bF = Vs;
gF("toStringTag");
bF(vF("Symbol"), "Symbol");
var $F = be;
$F("unscopables");
var OF = Pt, SF = Vs;
SF(OF.JSON, "JSON", !0);
var wF = Nt, EF = wF.Symbol, xF = EF, PF = xF, AF = be;
AF("dispose");
var jF = PF, TF = jF, _F = be;
_F("asyncDispose");
var IF = Ne, RF = Qt, FF = Re, N$ = RF("Symbol"), VF = N$.keyFor, CF = FF(N$.prototype.valueOf);
IF({ target: "Symbol", stat: !0 }, {
  isRegistered: function(t) {
    try {
      return VF(CF(t)) !== void 0;
    } catch {
      return !1;
    }
  }
});
var MF = Ne, kF = bi, D$ = Qt, NF = Re, DF = As, LF = rt, ha = D$("Symbol"), vy = ha.isWellKnown, L$ = D$("Object", "getOwnPropertyNames"), BF = NF(ha.prototype.valueOf), gy = kF("wks");
for (var zu = 0, by = L$(ha), UF = by.length; zu < UF; zu++)
  try {
    var $y = by[zu];
    DF(ha[$y]) && LF($y);
  } catch {
  }
MF({ target: "Symbol", stat: !0, forced: !0 }, {
  isWellKnown: function(t) {
    if (vy && vy(t))
      return !0;
    try {
      for (var r = BF(t), n = 0, i = L$(gy), s = i.length; n < s; n++)
        if (gy[i[n]] == r)
          return !0;
    } catch {
    }
    return !1;
  }
});
var qF = be;
qF("matcher");
var HF = be;
HF("metadataKey");
var KF = be;
KF("observable");
var GF = be;
GF("metadata");
var JF = be;
JF("patternMatch");
var WF = be;
WF("replaceAll");
var zF = TF, YF = zF, XF = YF, QF = XF;
const Do = /* @__PURE__ */ _e(QF);
var jh = Re, ZF = fh, eV = Rs, tV = ah, rV = jh("".charAt), Oy = jh("".charCodeAt), nV = jh("".slice), Sy = function(e) {
  return function(t, r) {
    var n = eV(tV(t)), i = ZF(r), s = n.length, o, a;
    return i < 0 || i >= s ? e ? "" : void 0 : (o = Oy(n, i), o < 55296 || o > 56319 || i + 1 === s || (a = Oy(n, i + 1)) < 56320 || a > 57343 ? e ? rV(n, i) : o : e ? nV(n, i, i + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
  };
}, iV = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Sy(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Sy(!0)
}, sV = iV.charAt, oV = Rs, B$ = vh, aV = A$, wy = j$, U$ = "String Iterator", cV = B$.set, lV = B$.getterFor(U$);
aV(String, "String", function(e) {
  cV(this, {
    type: U$,
    string: oV(e),
    index: 0
  });
}, function() {
  var t = lV(this), r = t.string, n = t.index, i;
  return n >= r.length ? wy(void 0, !0) : (i = sV(r, n), t.index += i.length, wy(i, !1));
});
var uV = Fs, fV = uV.f("iterator"), pV = fV, hV = pV, dV = hV, mV = dV, yV = mV, vV = yV, gV = vV, bV = gV;
const $V = /* @__PURE__ */ _e(bV);
function ls(e) {
  return ls = typeof Do == "function" && typeof $V == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Do == "function" && t.constructor === Do && t !== Do.prototype ? "symbol" : typeof t;
  }, ls(e);
}
var OV = Fs, SV = OV.f("toPrimitive"), wV = SV, EV = wV, xV = EV, PV = xV, AV = PV, jV = AV, TV = jV, _V = TV;
const IV = /* @__PURE__ */ _e(_V);
function RV(e, t) {
  if (ls(e) !== "object" || e === null)
    return e;
  var r = e[IV];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ls(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function FV(e) {
  var t = RV(e, "string");
  return ls(t) === "symbol" ? t : String(t);
}
function C(e, t, r) {
  return t = FV(t), t in e ? M$(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ey(e, t) {
  var r = Vb(e);
  if (pa) {
    var n = pa(e);
    t && (n = g_(n).call(n, function(i) {
      return $$(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r, n, i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fy(r = Ey(Object(i), !0)).call(r, function(s) {
      C(e, s, i[s]);
    }) : py ? TR(e, py(i)) : fy(n = Ey(Object(i))).call(n, function(s) {
      M$(e, s, $$(i, s));
    });
  }
  return e;
}
var at = {}, da = { exports: {} };
/*! https://mths.be/punycode v1.3.2 by @mathias */
da.exports;
(function(e, t) {
  (function(r) {
    var n = t && !t.nodeType && t, i = e && !e.nodeType && e, s = typeof Gt == "object" && Gt;
    (s.global === s || s.window === s || s.self === s) && (r = s);
    var o, a = 2147483647, c = 36, l = 1, u = 26, f = 38, p = 700, h = 72, d = 128, m = "-", y = /^xn--/, v = /[^\x20-\x7E]/, S = /[\x2E\u3002\uFF0E\uFF61]/g, O = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, w = c - l, E = Math.floor, j = String.fromCharCode, P;
    function M(_) {
      throw RangeError(O[_]);
    }
    function g(_, I) {
      for (var D = _.length, q = []; D--; )
        q[D] = I(_[D]);
      return q;
    }
    function A(_, I) {
      var D = _.split("@"), q = "";
      D.length > 1 && (q = D[0] + "@", _ = D[1]), _ = _.replace(S, ".");
      var Z = _.split("."), te = g(Z, I).join(".");
      return q + te;
    }
    function T(_) {
      for (var I = [], D = 0, q = _.length, Z, te; D < q; )
        Z = _.charCodeAt(D++), Z >= 55296 && Z <= 56319 && D < q ? (te = _.charCodeAt(D++), (te & 64512) == 56320 ? I.push(((Z & 1023) << 10) + (te & 1023) + 65536) : (I.push(Z), D--)) : I.push(Z);
      return I;
    }
    function R(_) {
      return g(_, function(I) {
        var D = "";
        return I > 65535 && (I -= 65536, D += j(I >>> 10 & 1023 | 55296), I = 56320 | I & 1023), D += j(I), D;
      }).join("");
    }
    function k(_) {
      return _ - 48 < 10 ? _ - 22 : _ - 65 < 26 ? _ - 65 : _ - 97 < 26 ? _ - 97 : c;
    }
    function H(_, I) {
      return _ + 22 + 75 * (_ < 26) - ((I != 0) << 5);
    }
    function de(_, I, D) {
      var q = 0;
      for (_ = D ? E(_ / p) : _ >> 1, _ += E(_ / I); _ > w * u >> 1; q += c)
        _ = E(_ / w);
      return E(q + (w + 1) * _ / (_ + f));
    }
    function ve(_) {
      var I = [], D = _.length, q, Z = 0, te = d, fe = h, Ae, st, Ve, rr, De, mt, Tt, wr, en;
      for (Ae = _.lastIndexOf(m), Ae < 0 && (Ae = 0), st = 0; st < Ae; ++st)
        _.charCodeAt(st) >= 128 && M("not-basic"), I.push(_.charCodeAt(st));
      for (Ve = Ae > 0 ? Ae + 1 : 0; Ve < D; ) {
        for (rr = Z, De = 1, mt = c; Ve >= D && M("invalid-input"), Tt = k(_.charCodeAt(Ve++)), (Tt >= c || Tt > E((a - Z) / De)) && M("overflow"), Z += Tt * De, wr = mt <= fe ? l : mt >= fe + u ? u : mt - fe, !(Tt < wr); mt += c)
          en = c - wr, De > E(a / en) && M("overflow"), De *= en;
        q = I.length + 1, fe = de(Z - rr, q, rr == 0), E(Z / q) > a - te && M("overflow"), te += E(Z / q), Z %= q, I.splice(Z++, 0, te);
      }
      return R(I);
    }
    function ie(_) {
      var I, D, q, Z, te, fe, Ae, st, Ve, rr, De, mt = [], Tt, wr, en, Su;
      for (_ = T(_), Tt = _.length, I = d, D = 0, te = h, fe = 0; fe < Tt; ++fe)
        De = _[fe], De < 128 && mt.push(j(De));
      for (q = Z = mt.length, Z && mt.push(m); q < Tt; ) {
        for (Ae = a, fe = 0; fe < Tt; ++fe)
          De = _[fe], De >= I && De < Ae && (Ae = De);
        for (wr = q + 1, Ae - I > E((a - D) / wr) && M("overflow"), D += (Ae - I) * wr, I = Ae, fe = 0; fe < Tt; ++fe)
          if (De = _[fe], De < I && ++D > a && M("overflow"), De == I) {
            for (st = D, Ve = c; rr = Ve <= te ? l : Ve >= te + u ? u : Ve - te, !(st < rr); Ve += c)
              Su = st - rr, en = c - rr, mt.push(
                j(H(rr + Su % en, 0))
              ), st = E(Su / en);
            mt.push(j(H(st, 0))), te = de(D, wr, q == Z), D = 0, ++q;
          }
        ++D, ++I;
      }
      return mt.join("");
    }
    function it(_) {
      return A(_, function(I) {
        return y.test(I) ? ve(I.slice(4).toLowerCase()) : I;
      });
    }
    function X(_) {
      return A(_, function(I) {
        return v.test(I) ? "xn--" + ie(I) : I;
      });
    }
    if (o = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "1.3.2",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: T,
        encode: R
      },
      decode: ve,
      encode: ie,
      toASCII: X,
      toUnicode: it
    }, n && i)
      if (e.exports == n)
        i.exports = o;
      else
        for (P in o)
          o.hasOwnProperty(P) && (n[P] = o[P]);
    else
      r.punycode = o;
  })(Gt);
})(da, da.exports);
var VV = da.exports, CV = {
  isString: function(e) {
    return typeof e == "string";
  },
  isObject: function(e) {
    return typeof e == "object" && e !== null;
  },
  isNull: function(e) {
    return e === null;
  },
  isNullOrUndefined: function(e) {
    return e == null;
  }
}, us = {};
function MV(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var kV = function(e, t, r, n) {
  t = t || "&", r = r || "=";
  var i = {};
  if (typeof e != "string" || e.length === 0)
    return i;
  var s = /\+/g;
  e = e.split(t);
  var o = 1e3;
  n && typeof n.maxKeys == "number" && (o = n.maxKeys);
  var a = e.length;
  o > 0 && a > o && (a = o);
  for (var c = 0; c < a; ++c) {
    var l = e[c].replace(s, "%20"), u = l.indexOf(r), f, p, h, d;
    u >= 0 ? (f = l.substr(0, u), p = l.substr(u + 1)) : (f = l, p = ""), h = decodeURIComponent(f), d = decodeURIComponent(p), MV(i, h) ? Array.isArray(i[h]) ? i[h].push(d) : i[h] = [i[h], d] : i[h] = d;
  }
  return i;
}, Ui = function(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "true" : "false";
    case "number":
      return isFinite(e) ? e : "";
    default:
      return "";
  }
}, NV = function(e, t, r, n) {
  return t = t || "&", r = r || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(i) {
    var s = encodeURIComponent(Ui(i)) + r;
    return Array.isArray(e[i]) ? e[i].map(function(o) {
      return s + encodeURIComponent(Ui(o));
    }).join(t) : s + encodeURIComponent(Ui(e[i]));
  }).join(t) : n ? encodeURIComponent(Ui(n)) + r + encodeURIComponent(Ui(e)) : "";
};
us.decode = us.parse = kV;
us.encode = us.stringify = NV;
var DV = VV, qt = CV;
at.parse = ks;
at.resolve = zV;
at.resolveObject = YV;
at.format = WV;
at.Url = $t;
function $t() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var LV = /^([a-z0-9.+-]+:)/i, BV = /:[0-9]*$/, UV = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, qV = ["<", ">", '"', "`", " ", "\r", `
`, "	"], HV = ["{", "}", "|", "\\", "^", "`"].concat(qV), Hf = ["'"].concat(HV), xy = ["%", "/", "?", ";", "#"].concat(Hf), Py = ["/", "?", "#"], KV = 255, Ay = /^[+a-z0-9A-Z_-]{0,63}$/, GV = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, JV = {
  javascript: !0,
  "javascript:": !0
}, Kf = {
  javascript: !0,
  "javascript:": !0
}, zn = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
}, Gf = us;
function ks(e, t, r) {
  if (e && qt.isObject(e) && e instanceof $t)
    return e;
  var n = new $t();
  return n.parse(e, t, r), n;
}
$t.prototype.parse = function(e, t, r) {
  if (!qt.isString(e))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var n = e.indexOf("?"), i = n !== -1 && n < e.indexOf("#") ? "?" : "#", s = e.split(i), o = /\\/g;
  s[0] = s[0].replace(o, "/"), e = s.join(i);
  var a = e;
  if (a = a.trim(), !r && e.split("#").length === 1) {
    var c = UV.exec(a);
    if (c)
      return this.path = a, this.href = a, this.pathname = c[1], c[2] ? (this.search = c[2], t ? this.query = Gf.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
  }
  var l = LV.exec(a);
  if (l) {
    l = l[0];
    var u = l.toLowerCase();
    this.protocol = u, a = a.substr(l.length);
  }
  if (r || l || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var f = a.substr(0, 2) === "//";
    f && !(l && Kf[l]) && (a = a.substr(2), this.slashes = !0);
  }
  if (!Kf[l] && (f || l && !zn[l])) {
    for (var p = -1, h = 0; h < Py.length; h++) {
      var d = a.indexOf(Py[h]);
      d !== -1 && (p === -1 || d < p) && (p = d);
    }
    var m, y;
    p === -1 ? y = a.lastIndexOf("@") : y = a.lastIndexOf("@", p), y !== -1 && (m = a.slice(0, y), a = a.slice(y + 1), this.auth = decodeURIComponent(m)), p = -1;
    for (var h = 0; h < xy.length; h++) {
      var d = a.indexOf(xy[h]);
      d !== -1 && (p === -1 || d < p) && (p = d);
    }
    p === -1 && (p = a.length), this.host = a.slice(0, p), a = a.slice(p), this.parseHost(), this.hostname = this.hostname || "";
    var v = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!v)
      for (var S = this.hostname.split(/\./), h = 0, O = S.length; h < O; h++) {
        var w = S[h];
        if (w && !w.match(Ay)) {
          for (var E = "", j = 0, P = w.length; j < P; j++)
            w.charCodeAt(j) > 127 ? E += "x" : E += w[j];
          if (!E.match(Ay)) {
            var M = S.slice(0, h), g = S.slice(h + 1), A = w.match(GV);
            A && (M.push(A[1]), g.unshift(A[2])), g.length && (a = "/" + g.join(".") + a), this.hostname = M.join(".");
            break;
          }
        }
      }
    this.hostname.length > KV ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), v || (this.hostname = DV.toASCII(this.hostname));
    var T = this.port ? ":" + this.port : "", R = this.hostname || "";
    this.host = R + T, this.href += this.host, v && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), a[0] !== "/" && (a = "/" + a));
  }
  if (!JV[u])
    for (var h = 0, O = Hf.length; h < O; h++) {
      var k = Hf[h];
      if (a.indexOf(k) !== -1) {
        var H = encodeURIComponent(k);
        H === k && (H = escape(k)), a = a.split(k).join(H);
      }
    }
  var de = a.indexOf("#");
  de !== -1 && (this.hash = a.substr(de), a = a.slice(0, de));
  var ve = a.indexOf("?");
  if (ve !== -1 ? (this.search = a.substr(ve), this.query = a.substr(ve + 1), t && (this.query = Gf.parse(this.query)), a = a.slice(0, ve)) : t && (this.search = "", this.query = {}), a && (this.pathname = a), zn[u] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var T = this.pathname || "", ie = this.search || "";
    this.path = T + ie;
  }
  return this.href = this.format(), this;
};
function WV(e) {
  return qt.isString(e) && (e = ks(e)), e instanceof $t ? e.format() : $t.prototype.format.call(e);
}
$t.prototype.format = function() {
  var e = this.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var t = this.protocol || "", r = this.pathname || "", n = this.hash || "", i = !1, s = "";
  this.host ? i = e + this.host : this.hostname && (i = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && qt.isObject(this.query) && Object.keys(this.query).length && (s = Gf.stringify(this.query));
  var o = this.search || s && "?" + s || "";
  return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || zn[t]) && i !== !1 ? (i = "//" + (i || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : i || (i = ""), n && n.charAt(0) !== "#" && (n = "#" + n), o && o.charAt(0) !== "?" && (o = "?" + o), r = r.replace(/[?#]/g, function(a) {
    return encodeURIComponent(a);
  }), o = o.replace("#", "%23"), t + i + r + o + n;
};
function zV(e, t) {
  return ks(e, !1, !0).resolve(t);
}
$t.prototype.resolve = function(e) {
  return this.resolveObject(ks(e, !1, !0)).format();
};
function YV(e, t) {
  return e ? ks(e, !1, !0).resolveObject(t) : t;
}
$t.prototype.resolveObject = function(e) {
  if (qt.isString(e)) {
    var t = new $t();
    t.parse(e, !1, !0), e = t;
  }
  for (var r = new $t(), n = Object.keys(this), i = 0; i < n.length; i++) {
    var s = n[i];
    r[s] = this[s];
  }
  if (r.hash = e.hash, e.href === "")
    return r.href = r.format(), r;
  if (e.slashes && !e.protocol) {
    for (var o = Object.keys(e), a = 0; a < o.length; a++) {
      var c = o[a];
      c !== "protocol" && (r[c] = e[c]);
    }
    return zn[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
  }
  if (e.protocol && e.protocol !== r.protocol) {
    if (!zn[e.protocol]) {
      for (var l = Object.keys(e), u = 0; u < l.length; u++) {
        var f = l[u];
        r[f] = e[f];
      }
      return r.href = r.format(), r;
    }
    if (r.protocol = e.protocol, !e.host && !Kf[e.protocol]) {
      for (var O = (e.pathname || "").split("/"); O.length && !(e.host = O.shift()); )
        ;
      e.host || (e.host = ""), e.hostname || (e.hostname = ""), O[0] !== "" && O.unshift(""), O.length < 2 && O.unshift(""), r.pathname = O.join("/");
    } else
      r.pathname = e.pathname;
    if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
      var p = r.pathname || "", h = r.search || "";
      r.path = p + h;
    }
    return r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
  }
  var d = r.pathname && r.pathname.charAt(0) === "/", m = e.host || e.pathname && e.pathname.charAt(0) === "/", y = m || d || r.host && e.pathname, v = y, S = r.pathname && r.pathname.split("/") || [], O = e.pathname && e.pathname.split("/") || [], w = r.protocol && !zn[r.protocol];
  if (w && (r.hostname = "", r.port = null, r.host && (S[0] === "" ? S[0] = r.host : S.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (O[0] === "" ? O[0] = e.host : O.unshift(e.host)), e.host = null), y = y && (O[0] === "" || S[0] === "")), m)
    r.host = e.host || e.host === "" ? e.host : r.host, r.hostname = e.hostname || e.hostname === "" ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, S = O;
  else if (O.length)
    S || (S = []), S.pop(), S = S.concat(O), r.search = e.search, r.query = e.query;
  else if (!qt.isNullOrUndefined(e.search)) {
    if (w) {
      r.hostname = r.host = S.shift();
      var E = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
      E && (r.auth = E.shift(), r.host = r.hostname = E.shift());
    }
    return r.search = e.search, r.query = e.query, (!qt.isNull(r.pathname) || !qt.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
  }
  if (!S.length)
    return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
  for (var j = S.slice(-1)[0], P = (r.host || e.host || S.length > 1) && (j === "." || j === "..") || j === "", M = 0, g = S.length; g >= 0; g--)
    j = S[g], j === "." ? S.splice(g, 1) : j === ".." ? (S.splice(g, 1), M++) : M && (S.splice(g, 1), M--);
  if (!y && !v)
    for (; M--; M)
      S.unshift("..");
  y && S[0] !== "" && (!S[0] || S[0].charAt(0) !== "/") && S.unshift(""), P && S.join("/").substr(-1) !== "/" && S.push("");
  var A = S[0] === "" || S[0] && S[0].charAt(0) === "/";
  if (w) {
    r.hostname = r.host = A ? "" : S.length ? S.shift() : "";
    var E = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
    E && (r.auth = E.shift(), r.host = r.hostname = E.shift());
  }
  return y = y || r.host && S.length, y && !A && S.unshift(""), S.length ? r.pathname = S.join("/") : (r.pathname = null, r.path = null), (!qt.isNull(r.pathname) || !qt.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
};
$t.prototype.parseHost = function() {
  var e = this.host, t = BV.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
(function() {
  (function(e) {
    (function(t) {
      var r = {
        searchParams: "URLSearchParams" in e,
        iterable: "Symbol" in e && "iterator" in Symbol,
        blob: "FileReader" in e && "Blob" in e && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in e,
        arrayBuffer: "ArrayBuffer" in e
      };
      function n(g) {
        return g && DataView.prototype.isPrototypeOf(g);
      }
      if (r.arrayBuffer)
        var i = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], s = ArrayBuffer.isView || function(g) {
          return g && i.indexOf(Object.prototype.toString.call(g)) > -1;
        };
      function o(g) {
        if (typeof g != "string" && (g = String(g)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(g))
          throw new TypeError("Invalid character in header field name");
        return g.toLowerCase();
      }
      function a(g) {
        return typeof g != "string" && (g = String(g)), g;
      }
      function c(g) {
        var A = {
          next: function() {
            var T = g.shift();
            return { done: T === void 0, value: T };
          }
        };
        return r.iterable && (A[Symbol.iterator] = function() {
          return A;
        }), A;
      }
      function l(g) {
        this.map = {}, g instanceof l ? g.forEach(function(A, T) {
          this.append(T, A);
        }, this) : Array.isArray(g) ? g.forEach(function(A) {
          this.append(A[0], A[1]);
        }, this) : g && Object.getOwnPropertyNames(g).forEach(function(A) {
          this.append(A, g[A]);
        }, this);
      }
      l.prototype.append = function(g, A) {
        g = o(g), A = a(A);
        var T = this.map[g];
        this.map[g] = T ? T + ", " + A : A;
      }, l.prototype.delete = function(g) {
        delete this.map[o(g)];
      }, l.prototype.get = function(g) {
        return g = o(g), this.has(g) ? this.map[g] : null;
      }, l.prototype.has = function(g) {
        return this.map.hasOwnProperty(o(g));
      }, l.prototype.set = function(g, A) {
        this.map[o(g)] = a(A);
      }, l.prototype.forEach = function(g, A) {
        for (var T in this.map)
          this.map.hasOwnProperty(T) && g.call(A, this.map[T], T, this);
      }, l.prototype.keys = function() {
        var g = [];
        return this.forEach(function(A, T) {
          g.push(T);
        }), c(g);
      }, l.prototype.values = function() {
        var g = [];
        return this.forEach(function(A) {
          g.push(A);
        }), c(g);
      }, l.prototype.entries = function() {
        var g = [];
        return this.forEach(function(A, T) {
          g.push([T, A]);
        }), c(g);
      }, r.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
      function u(g) {
        if (g.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        g.bodyUsed = !0;
      }
      function f(g) {
        return new Promise(function(A, T) {
          g.onload = function() {
            A(g.result);
          }, g.onerror = function() {
            T(g.error);
          };
        });
      }
      function p(g) {
        var A = new FileReader(), T = f(A);
        return A.readAsArrayBuffer(g), T;
      }
      function h(g) {
        var A = new FileReader(), T = f(A);
        return A.readAsText(g), T;
      }
      function d(g) {
        for (var A = new Uint8Array(g), T = new Array(A.length), R = 0; R < A.length; R++)
          T[R] = String.fromCharCode(A[R]);
        return T.join("");
      }
      function m(g) {
        if (g.slice)
          return g.slice(0);
        var A = new Uint8Array(g.byteLength);
        return A.set(new Uint8Array(g)), A.buffer;
      }
      function y() {
        return this.bodyUsed = !1, this._initBody = function(g) {
          this._bodyInit = g, g ? typeof g == "string" ? this._bodyText = g : r.blob && Blob.prototype.isPrototypeOf(g) ? this._bodyBlob = g : r.formData && FormData.prototype.isPrototypeOf(g) ? this._bodyFormData = g : r.searchParams && URLSearchParams.prototype.isPrototypeOf(g) ? this._bodyText = g.toString() : r.arrayBuffer && r.blob && n(g) ? (this._bodyArrayBuffer = m(g.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : r.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(g) || s(g)) ? this._bodyArrayBuffer = m(g) : this._bodyText = g = Object.prototype.toString.call(g) : this._bodyText = "", this.headers.get("content-type") || (typeof g == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r.searchParams && URLSearchParams.prototype.isPrototypeOf(g) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, r.blob && (this.blob = function() {
          var g = u(this);
          if (g)
            return g;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? u(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p);
        }), this.text = function() {
          var g = u(this);
          if (g)
            return g;
          if (this._bodyBlob)
            return h(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(d(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, r.formData && (this.formData = function() {
          return this.text().then(w);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function S(g) {
        var A = g.toUpperCase();
        return v.indexOf(A) > -1 ? A : g;
      }
      function O(g, A) {
        A = A || {};
        var T = A.body;
        if (g instanceof O) {
          if (g.bodyUsed)
            throw new TypeError("Already read");
          this.url = g.url, this.credentials = g.credentials, A.headers || (this.headers = new l(g.headers)), this.method = g.method, this.mode = g.mode, this.signal = g.signal, !T && g._bodyInit != null && (T = g._bodyInit, g.bodyUsed = !0);
        } else
          this.url = String(g);
        if (this.credentials = A.credentials || this.credentials || "same-origin", (A.headers || !this.headers) && (this.headers = new l(A.headers)), this.method = S(A.method || this.method || "GET"), this.mode = A.mode || this.mode || null, this.signal = A.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && T)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(T);
      }
      O.prototype.clone = function() {
        return new O(this, { body: this._bodyInit });
      };
      function w(g) {
        var A = new FormData();
        return g.trim().split("&").forEach(function(T) {
          if (T) {
            var R = T.split("="), k = R.shift().replace(/\+/g, " "), H = R.join("=").replace(/\+/g, " ");
            A.append(decodeURIComponent(k), decodeURIComponent(H));
          }
        }), A;
      }
      function E(g) {
        var A = new l(), T = g.replace(/\r?\n[\t ]+/g, " ");
        return T.split(/\r?\n/).forEach(function(R) {
          var k = R.split(":"), H = k.shift().trim();
          if (H) {
            var de = k.join(":").trim();
            A.append(H, de);
          }
        }), A;
      }
      y.call(O.prototype);
      function j(g, A) {
        A || (A = {}), this.type = "default", this.status = A.status === void 0 ? 200 : A.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in A ? A.statusText : "OK", this.headers = new l(A.headers), this.url = A.url || "", this._initBody(g);
      }
      y.call(j.prototype), j.prototype.clone = function() {
        return new j(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new l(this.headers),
          url: this.url
        });
      }, j.error = function() {
        var g = new j(null, { status: 0, statusText: "" });
        return g.type = "error", g;
      };
      var P = [301, 302, 303, 307, 308];
      j.redirect = function(g, A) {
        if (P.indexOf(A) === -1)
          throw new RangeError("Invalid status code");
        return new j(null, { status: A, headers: { location: g } });
      }, t.DOMException = e.DOMException;
      try {
        new t.DOMException();
      } catch {
        t.DOMException = function(A, T) {
          this.message = A, this.name = T;
          var R = Error(A);
          this.stack = R.stack;
        }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException;
      }
      function M(g, A) {
        return new Promise(function(T, R) {
          var k = new O(g, A);
          if (k.signal && k.signal.aborted)
            return R(new t.DOMException("Aborted", "AbortError"));
          var H = new XMLHttpRequest();
          function de() {
            H.abort();
          }
          H.onload = function() {
            var ve = {
              status: H.status,
              statusText: H.statusText,
              headers: E(H.getAllResponseHeaders() || "")
            };
            ve.url = "responseURL" in H ? H.responseURL : ve.headers.get("X-Request-URL");
            var ie = "response" in H ? H.response : H.responseText;
            T(new j(ie, ve));
          }, H.onerror = function() {
            R(new TypeError("Network request failed"));
          }, H.ontimeout = function() {
            R(new TypeError("Network request failed"));
          }, H.onabort = function() {
            R(new t.DOMException("Aborted", "AbortError"));
          }, H.open(k.method, k.url, !0), k.credentials === "include" ? H.withCredentials = !0 : k.credentials === "omit" && (H.withCredentials = !1), "responseType" in H && r.blob && (H.responseType = "blob"), k.headers.forEach(function(ve, ie) {
            H.setRequestHeader(ie, ve);
          }), k.signal && (k.signal.addEventListener("abort", de), H.onreadystatechange = function() {
            H.readyState === 4 && k.signal.removeEventListener("abort", de);
          }), H.send(typeof k._bodyInit > "u" ? null : k._bodyInit);
        });
      }
      return M.polyfill = !0, e.fetch || (e.fetch = M, e.Headers = l, e.Request = O, e.Response = j), t.Headers = l, t.Request = O, t.Response = j, t.fetch = M, Object.defineProperty(t, "__esModule", { value: !0 }), t;
    })({});
  })(typeof self < "u" ? self : Gt);
})();
var XV = function() {
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
}, jy = typeof Symbol < "u" && Symbol, QV = XV, ZV = function() {
  return typeof jy != "function" || typeof Symbol != "function" || typeof jy("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : QV();
}, eC = "Function.prototype.bind called on incompatible ", Yu = Array.prototype.slice, tC = Object.prototype.toString, rC = "[object Function]", nC = function(t) {
  var r = this;
  if (typeof r != "function" || tC.call(r) !== rC)
    throw new TypeError(eC + r);
  for (var n = Yu.call(arguments, 1), i, s = function() {
    if (this instanceof i) {
      var u = r.apply(
        this,
        n.concat(Yu.call(arguments))
      );
      return Object(u) === u ? u : this;
    } else
      return r.apply(
        t,
        n.concat(Yu.call(arguments))
      );
  }, o = Math.max(0, r.length - n.length), a = [], c = 0; c < o; c++)
    a.push("$" + c);
  if (i = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(s), r.prototype) {
    var l = function() {
    };
    l.prototype = r.prototype, i.prototype = new l(), l.prototype = null;
  }
  return i;
}, iC = nC, Th = Function.prototype.bind || iC, sC = Th, oC = sC.call(Function.call, Object.prototype.hasOwnProperty), Q, ei = SyntaxError, q$ = Function, Yn = TypeError, Xu = function(e) {
  try {
    return q$('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, pn = Object.getOwnPropertyDescriptor;
if (pn)
  try {
    pn({}, "");
  } catch {
    pn = null;
  }
var Qu = function() {
  throw new Yn();
}, aC = pn ? function() {
  try {
    return arguments.callee, Qu;
  } catch {
    try {
      return pn(arguments, "callee").get;
    } catch {
      return Qu;
    }
  }
}() : Qu, Rn = ZV(), Ht = Object.getPrototypeOf || function(e) {
  return e.__proto__;
}, Dn = {}, cC = typeof Uint8Array > "u" ? Q : Ht(Uint8Array), hn = {
  "%AggregateError%": typeof AggregateError > "u" ? Q : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Q : ArrayBuffer,
  "%ArrayIteratorPrototype%": Rn ? Ht([][Symbol.iterator]()) : Q,
  "%AsyncFromSyncIteratorPrototype%": Q,
  "%AsyncFunction%": Dn,
  "%AsyncGenerator%": Dn,
  "%AsyncGeneratorFunction%": Dn,
  "%AsyncIteratorPrototype%": Dn,
  "%Atomics%": typeof Atomics > "u" ? Q : Atomics,
  "%BigInt%": typeof BigInt > "u" ? Q : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? Q : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? Q : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? Q : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? Q : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? Q : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Q : FinalizationRegistry,
  "%Function%": q$,
  "%GeneratorFunction%": Dn,
  "%Int8Array%": typeof Int8Array > "u" ? Q : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? Q : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? Q : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Rn ? Ht(Ht([][Symbol.iterator]())) : Q,
  "%JSON%": typeof JSON == "object" ? JSON : Q,
  "%Map%": typeof Map > "u" ? Q : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Rn ? Q : Ht((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? Q : Promise,
  "%Proxy%": typeof Proxy > "u" ? Q : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? Q : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? Q : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Rn ? Q : Ht((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Q : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Rn ? Ht(""[Symbol.iterator]()) : Q,
  "%Symbol%": Rn ? Symbol : Q,
  "%SyntaxError%": ei,
  "%ThrowTypeError%": aC,
  "%TypedArray%": cC,
  "%TypeError%": Yn,
  "%Uint8Array%": typeof Uint8Array > "u" ? Q : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Q : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? Q : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? Q : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? Q : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? Q : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? Q : WeakSet
};
try {
  null.error;
} catch (e) {
  var lC = Ht(Ht(e));
  hn["%Error.prototype%"] = lC;
}
var uC = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Xu("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Xu("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Xu("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && (r = Ht(i.prototype));
  }
  return hn[t] = r, r;
}, Ty = {
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
}, Ns = Th, ma = oC, fC = Ns.call(Function.call, Array.prototype.concat), pC = Ns.call(Function.apply, Array.prototype.splice), _y = Ns.call(Function.call, String.prototype.replace), ya = Ns.call(Function.call, String.prototype.slice), hC = Ns.call(Function.call, RegExp.prototype.exec), dC = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, mC = /\\(\\)?/g, yC = function(t) {
  var r = ya(t, 0, 1), n = ya(t, -1);
  if (r === "%" && n !== "%")
    throw new ei("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new ei("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return _y(t, dC, function(s, o, a, c) {
    i[i.length] = a ? _y(c, mC, "$1") : o || s;
  }), i;
}, vC = function(t, r) {
  var n = t, i;
  if (ma(Ty, n) && (i = Ty[n], n = "%" + i[0] + "%"), ma(hn, n)) {
    var s = hn[n];
    if (s === Dn && (s = uC(n)), typeof s > "u" && !r)
      throw new Yn("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: s
    };
  }
  throw new ei("intrinsic " + t + " does not exist!");
}, _h = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new Yn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Yn('"allowMissing" argument must be a boolean');
  if (hC(/^%?[^%]*%?$/, t) === null)
    throw new ei("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = yC(t), i = n.length > 0 ? n[0] : "", s = vC("%" + i + "%", r), o = s.name, a = s.value, c = !1, l = s.alias;
  l && (i = l[0], pC(n, fC([0, 1], l)));
  for (var u = 1, f = !0; u < n.length; u += 1) {
    var p = n[u], h = ya(p, 0, 1), d = ya(p, -1);
    if ((h === '"' || h === "'" || h === "`" || d === '"' || d === "'" || d === "`") && h !== d)
      throw new ei("property names with quotes must have matching quotes");
    if ((p === "constructor" || !f) && (c = !0), i += "." + p, o = "%" + i + "%", ma(hn, o))
      a = hn[o];
    else if (a != null) {
      if (!(p in a)) {
        if (!r)
          throw new Yn("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (pn && u + 1 >= n.length) {
        var m = pn(a, p);
        f = !!m, f && "get" in m && !("originalValue" in m.get) ? a = m.get : a = a[p];
      } else
        f = ma(a, p), a = a[p];
      f && !c && (hn[o] = a);
    }
  }
  return a;
}, H$ = { exports: {} };
(function(e) {
  var t = Th, r = _h, n = r("%Function.prototype.apply%"), i = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || t.call(i, n), o = r("%Object.getOwnPropertyDescriptor%", !0), a = r("%Object.defineProperty%", !0), c = r("%Math.max%");
  if (a)
    try {
      a({}, "a", { value: 1 });
    } catch {
      a = null;
    }
  e.exports = function(f) {
    var p = s(t, i, arguments);
    if (o && a) {
      var h = o(p, "length");
      h.configurable && a(
        p,
        "length",
        { value: 1 + c(0, f.length - (arguments.length - 1)) }
      );
    }
    return p;
  };
  var l = function() {
    return s(t, n, arguments);
  };
  a ? a(e.exports, "apply", { value: l }) : e.exports.apply = l;
})(H$);
var gC = H$.exports, K$ = _h, G$ = gC, bC = G$(K$("String.prototype.indexOf")), $C = function(t, r) {
  var n = K$(t, !!r);
  return typeof n == "function" && bC(t, ".prototype.") > -1 ? G$(n) : n;
};
const OC = {}, SC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OC
}, Symbol.toStringTag, { value: "Module" })), wC = /* @__PURE__ */ Zg(SC);
var Ih = typeof Map == "function" && Map.prototype, Zu = Object.getOwnPropertyDescriptor && Ih ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, va = Ih && Zu && typeof Zu.get == "function" ? Zu.get : null, Iy = Ih && Map.prototype.forEach, Rh = typeof Set == "function" && Set.prototype, ef = Object.getOwnPropertyDescriptor && Rh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ga = Rh && ef && typeof ef.get == "function" ? ef.get : null, Ry = Rh && Set.prototype.forEach, EC = typeof WeakMap == "function" && WeakMap.prototype, Yi = EC ? WeakMap.prototype.has : null, xC = typeof WeakSet == "function" && WeakSet.prototype, Xi = xC ? WeakSet.prototype.has : null, PC = typeof WeakRef == "function" && WeakRef.prototype, Fy = PC ? WeakRef.prototype.deref : null, AC = Boolean.prototype.valueOf, jC = Object.prototype.toString, TC = Function.prototype.toString, _C = String.prototype.match, Fh = String.prototype.slice, Ir = String.prototype.replace, IC = String.prototype.toUpperCase, Vy = String.prototype.toLowerCase, J$ = RegExp.prototype.test, Cy = Array.prototype.concat, Kt = Array.prototype.join, RC = Array.prototype.slice, My = Math.floor, Jf = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, tf = Object.getOwnPropertySymbols, Wf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ti = typeof Symbol == "function" && typeof Symbol.iterator == "object", Ue = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ti || "symbol") ? Symbol.toStringTag : null, W$ = Object.prototype.propertyIsEnumerable, ky = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Ny(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || J$.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -My(-e) : My(e);
    if (n !== e) {
      var i = String(n), s = Fh.call(t, i.length + 1);
      return Ir.call(i, r, "$&_") + "." + Ir.call(Ir.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Ir.call(t, r, "$&_");
}
var zf = wC, Dy = zf.custom, Ly = Y$(Dy) ? Dy : null, FC = function e(t, r, n, i) {
  var s = r || {};
  if (Ar(s, "quoteStyle") && s.quoteStyle !== "single" && s.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Ar(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = Ar(s, "customInspect") ? s.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Ar(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Ar(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = s.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return Q$(t, s);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var c = String(t);
    return a ? Ny(t, c) : c;
  }
  if (typeof t == "bigint") {
    var l = String(t) + "n";
    return a ? Ny(t, l) : l;
  }
  var u = typeof s.depth > "u" ? 5 : s.depth;
  if (typeof n > "u" && (n = 0), n >= u && u > 0 && typeof t == "object")
    return Yf(t) ? "[Array]" : "[Object]";
  var f = XC(s, n);
  if (typeof i > "u")
    i = [];
  else if (X$(i, t) >= 0)
    return "[Circular]";
  function p(k, H, de) {
    if (H && (i = RC.call(i), i.push(H)), de) {
      var ve = {
        depth: s.depth
      };
      return Ar(s, "quoteStyle") && (ve.quoteStyle = s.quoteStyle), e(k, ve, n + 1, i);
    }
    return e(k, s, n + 1, i);
  }
  if (typeof t == "function" && !By(t)) {
    var h = UC(t), d = Lo(t, p);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (d.length > 0 ? " { " + Kt.call(d, ", ") + " }" : "");
  }
  if (Y$(t)) {
    var m = ti ? Ir.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Wf.call(t);
    return typeof t == "object" && !ti ? qi(m) : m;
  }
  if (WC(t)) {
    for (var y = "<" + Vy.call(String(t.nodeName)), v = t.attributes || [], S = 0; S < v.length; S++)
      y += " " + v[S].name + "=" + z$(VC(v[S].value), "double", s);
    return y += ">", t.childNodes && t.childNodes.length && (y += "..."), y += "</" + Vy.call(String(t.nodeName)) + ">", y;
  }
  if (Yf(t)) {
    if (t.length === 0)
      return "[]";
    var O = Lo(t, p);
    return f && !YC(O) ? "[" + Xf(O, f) + "]" : "[ " + Kt.call(O, ", ") + " ]";
  }
  if (MC(t)) {
    var w = Lo(t, p);
    return !("cause" in Error.prototype) && "cause" in t && !W$.call(t, "cause") ? "{ [" + String(t) + "] " + Kt.call(Cy.call("[cause]: " + p(t.cause), w), ", ") + " }" : w.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Kt.call(w, ", ") + " }";
  }
  if (typeof t == "object" && o) {
    if (Ly && typeof t[Ly] == "function" && zf)
      return zf(t, { depth: u - n });
    if (o !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (qC(t)) {
    var E = [];
    return Iy && Iy.call(t, function(k, H) {
      E.push(p(H, t, !0) + " => " + p(k, t));
    }), Uy("Map", va.call(t), E, f);
  }
  if (GC(t)) {
    var j = [];
    return Ry && Ry.call(t, function(k) {
      j.push(p(k, t));
    }), Uy("Set", ga.call(t), j, f);
  }
  if (HC(t))
    return rf("WeakMap");
  if (JC(t))
    return rf("WeakSet");
  if (KC(t))
    return rf("WeakRef");
  if (NC(t))
    return qi(p(Number(t)));
  if (LC(t))
    return qi(p(Jf.call(t)));
  if (DC(t))
    return qi(AC.call(t));
  if (kC(t))
    return qi(p(String(t)));
  if (!CC(t) && !By(t)) {
    var P = Lo(t, p), M = ky ? ky(t) === Object.prototype : t instanceof Object || t.constructor === Object, g = t instanceof Object ? "" : "null prototype", A = !M && Ue && Object(t) === t && Ue in t ? Fh.call(Hr(t), 8, -1) : g ? "Object" : "", T = M || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", R = T + (A || g ? "[" + Kt.call(Cy.call([], A || [], g || []), ": ") + "] " : "");
    return P.length === 0 ? R + "{}" : f ? R + "{" + Xf(P, f) + "}" : R + "{ " + Kt.call(P, ", ") + " }";
  }
  return String(t);
};
function z$(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function VC(e) {
  return Ir.call(String(e), /"/g, "&quot;");
}
function Yf(e) {
  return Hr(e) === "[object Array]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function CC(e) {
  return Hr(e) === "[object Date]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function By(e) {
  return Hr(e) === "[object RegExp]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function MC(e) {
  return Hr(e) === "[object Error]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function kC(e) {
  return Hr(e) === "[object String]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function NC(e) {
  return Hr(e) === "[object Number]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function DC(e) {
  return Hr(e) === "[object Boolean]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function Y$(e) {
  if (ti)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !Wf)
    return !1;
  try {
    return Wf.call(e), !0;
  } catch {
  }
  return !1;
}
function LC(e) {
  if (!e || typeof e != "object" || !Jf)
    return !1;
  try {
    return Jf.call(e), !0;
  } catch {
  }
  return !1;
}
var BC = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function Ar(e, t) {
  return BC.call(e, t);
}
function Hr(e) {
  return jC.call(e);
}
function UC(e) {
  if (e.name)
    return e.name;
  var t = _C.call(TC.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function X$(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function qC(e) {
  if (!va || !e || typeof e != "object")
    return !1;
  try {
    va.call(e);
    try {
      ga.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function HC(e) {
  if (!Yi || !e || typeof e != "object")
    return !1;
  try {
    Yi.call(e, Yi);
    try {
      Xi.call(e, Xi);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function KC(e) {
  if (!Fy || !e || typeof e != "object")
    return !1;
  try {
    return Fy.call(e), !0;
  } catch {
  }
  return !1;
}
function GC(e) {
  if (!ga || !e || typeof e != "object")
    return !1;
  try {
    ga.call(e);
    try {
      va.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function JC(e) {
  if (!Xi || !e || typeof e != "object")
    return !1;
  try {
    Xi.call(e, Xi);
    try {
      Yi.call(e, Yi);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function WC(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Q$(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Q$(Fh.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = Ir.call(Ir.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, zC);
  return z$(i, "single", t);
}
function zC(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + IC.call(t.toString(16));
}
function qi(e) {
  return "Object(" + e + ")";
}
function rf(e) {
  return e + " { ? }";
}
function Uy(e, t, r, n) {
  var i = n ? Xf(r, n) : Kt.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function YC(e) {
  for (var t = 0; t < e.length; t++)
    if (X$(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function XC(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = Kt.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: Kt.call(Array(t + 1), r)
  };
}
function Xf(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + Kt.call(e, "," + r) + `
` + t.prev;
}
function Lo(e, t) {
  var r = Yf(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = Ar(e, i) ? t(e[i], e) : "";
  }
  var s = typeof tf == "function" ? tf(e) : [], o;
  if (ti) {
    o = {};
    for (var a = 0; a < s.length; a++)
      o["$" + s[a]] = s[a];
  }
  for (var c in e)
    Ar(e, c) && (r && String(Number(c)) === c && c < e.length || ti && o["$" + c] instanceof Symbol || (J$.call(/[^\w$]/, c) ? n.push(t(c, e) + ": " + t(e[c], e)) : n.push(c + ": " + t(e[c], e))));
  if (typeof tf == "function")
    for (var l = 0; l < s.length; l++)
      W$.call(e, s[l]) && n.push("[" + t(s[l]) + "]: " + t(e[s[l]], e));
  return n;
}
var Vh = _h, Oi = $C, QC = FC, ZC = Vh("%TypeError%"), Bo = Vh("%WeakMap%", !0), Uo = Vh("%Map%", !0), eM = Oi("WeakMap.prototype.get", !0), tM = Oi("WeakMap.prototype.set", !0), rM = Oi("WeakMap.prototype.has", !0), nM = Oi("Map.prototype.get", !0), iM = Oi("Map.prototype.set", !0), sM = Oi("Map.prototype.has", !0), Ch = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = e.next, e.next = n, n;
}, oM = function(e, t) {
  var r = Ch(e, t);
  return r && r.value;
}, aM = function(e, t, r) {
  var n = Ch(e, t);
  n ? n.value = r : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: r
  };
}, cM = function(e, t) {
  return !!Ch(e, t);
}, lM = function() {
  var t, r, n, i = {
    assert: function(s) {
      if (!i.has(s))
        throw new ZC("Side channel does not contain " + QC(s));
    },
    get: function(s) {
      if (Bo && s && (typeof s == "object" || typeof s == "function")) {
        if (t)
          return eM(t, s);
      } else if (Uo) {
        if (r)
          return nM(r, s);
      } else if (n)
        return oM(n, s);
    },
    has: function(s) {
      if (Bo && s && (typeof s == "object" || typeof s == "function")) {
        if (t)
          return rM(t, s);
      } else if (Uo) {
        if (r)
          return sM(r, s);
      } else if (n)
        return cM(n, s);
      return !1;
    },
    set: function(s, o) {
      Bo && s && (typeof s == "object" || typeof s == "function") ? (t || (t = new Bo()), tM(t, s, o)) : Uo ? (r || (r = new Uo()), iM(r, s, o)) : (n || (n = { key: {}, next: null }), aM(n, s, o));
    }
  };
  return i;
}, uM = String.prototype.replace, fM = /%20/g, nf = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Mh = {
  default: nf.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return uM.call(e, fM, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: nf.RFC1738,
  RFC3986: nf.RFC3986
}, pM = Mh, sf = Object.prototype.hasOwnProperty, an = Array.isArray, Lt = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), hM = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (an(n)) {
      for (var i = [], s = 0; s < n.length; ++s)
        typeof n[s] < "u" && i.push(n[s]);
      r.obj[r.prop] = i;
    }
  }
}, Z$ = function(t, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, dM = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (an(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !sf.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return an(t) && !an(r) && (i = Z$(t, n)), an(t) && an(r) ? (r.forEach(function(s, o) {
    if (sf.call(t, o)) {
      var a = t[o];
      a && typeof a == "object" && s && typeof s == "object" ? t[o] = e(a, s, n) : t.push(s);
    } else
      t[o] = s;
  }), t) : Object.keys(r).reduce(function(s, o) {
    var a = r[o];
    return sf.call(s, o) ? s[o] = e(s[o], a, n) : s[o] = a, s;
  }, i);
}, mM = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, yM = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, vM = function(t, r, n, i, s) {
  if (t.length === 0)
    return t;
  var o = t;
  if (typeof t == "symbol" ? o = Symbol.prototype.toString.call(t) : typeof t != "string" && (o = String(t)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(u) {
      return "%26%23" + parseInt(u.slice(2), 16) + "%3B";
    });
  for (var a = "", c = 0; c < o.length; ++c) {
    var l = o.charCodeAt(c);
    if (l === 45 || l === 46 || l === 95 || l === 126 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || s === pM.RFC1738 && (l === 40 || l === 41)) {
      a += o.charAt(c);
      continue;
    }
    if (l < 128) {
      a = a + Lt[l];
      continue;
    }
    if (l < 2048) {
      a = a + (Lt[192 | l >> 6] + Lt[128 | l & 63]);
      continue;
    }
    if (l < 55296 || l >= 57344) {
      a = a + (Lt[224 | l >> 12] + Lt[128 | l >> 6 & 63] + Lt[128 | l & 63]);
      continue;
    }
    c += 1, l = 65536 + ((l & 1023) << 10 | o.charCodeAt(c) & 1023), a += Lt[240 | l >> 18] + Lt[128 | l >> 12 & 63] + Lt[128 | l >> 6 & 63] + Lt[128 | l & 63];
  }
  return a;
}, gM = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var s = r[i], o = s.obj[s.prop], a = Object.keys(o), c = 0; c < a.length; ++c) {
      var l = a[c], u = o[l];
      typeof u == "object" && u !== null && n.indexOf(u) === -1 && (r.push({ obj: o, prop: l }), n.push(u));
    }
  return hM(r), t;
}, bM = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, $M = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, OM = function(t, r) {
  return [].concat(t, r);
}, SM = function(t, r) {
  if (an(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, eO = {
  arrayToObject: Z$,
  assign: mM,
  combine: OM,
  compact: gM,
  decode: yM,
  encode: vM,
  isBuffer: $M,
  isRegExp: bM,
  maybeMap: SM,
  merge: dM
}, tO = lM, Qo = eO, Qi = Mh, wM = Object.prototype.hasOwnProperty, qy = {
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
}, nr = Array.isArray, EM = Array.prototype.push, rO = function(e, t) {
  EM.apply(e, nr(t) ? t : [t]);
}, xM = Date.prototype.toISOString, Hy = Qi.default, Le = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: Qo.encode,
  encodeValuesOnly: !1,
  format: Hy,
  formatter: Qi.formatters[Hy],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return xM.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, PM = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, of = {}, AM = function e(t, r, n, i, s, o, a, c, l, u, f, p, h, d, m, y) {
  for (var v = t, S = y, O = 0, w = !1; (S = S.get(of)) !== void 0 && !w; ) {
    var E = S.get(t);
    if (O += 1, typeof E < "u") {
      if (E === O)
        throw new RangeError("Cyclic object value");
      w = !0;
    }
    typeof S.get(of) > "u" && (O = 0);
  }
  if (typeof c == "function" ? v = c(r, v) : v instanceof Date ? v = f(v) : n === "comma" && nr(v) && (v = Qo.maybeMap(v, function(ve) {
    return ve instanceof Date ? f(ve) : ve;
  })), v === null) {
    if (s)
      return a && !d ? a(r, Le.encoder, m, "key", p) : r;
    v = "";
  }
  if (PM(v) || Qo.isBuffer(v)) {
    if (a) {
      var j = d ? r : a(r, Le.encoder, m, "key", p);
      return [h(j) + "=" + h(a(v, Le.encoder, m, "value", p))];
    }
    return [h(r) + "=" + h(String(v))];
  }
  var P = [];
  if (typeof v > "u")
    return P;
  var M;
  if (n === "comma" && nr(v))
    d && a && (v = Qo.maybeMap(v, a)), M = [{ value: v.length > 0 ? v.join(",") || null : void 0 }];
  else if (nr(c))
    M = c;
  else {
    var g = Object.keys(v);
    M = l ? g.sort(l) : g;
  }
  for (var A = i && nr(v) && v.length === 1 ? r + "[]" : r, T = 0; T < M.length; ++T) {
    var R = M[T], k = typeof R == "object" && typeof R.value < "u" ? R.value : v[R];
    if (!(o && k === null)) {
      var H = nr(v) ? typeof n == "function" ? n(A, R) : A : A + (u ? "." + R : "[" + R + "]");
      y.set(t, O);
      var de = tO();
      de.set(of, y), rO(P, e(
        k,
        H,
        n,
        i,
        s,
        o,
        n === "comma" && d && nr(v) ? null : a,
        c,
        l,
        u,
        f,
        p,
        h,
        d,
        m,
        de
      ));
    }
  }
  return P;
}, jM = function(t) {
  if (!t)
    return Le;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || Le.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Qi.default;
  if (typeof t.format < "u") {
    if (!wM.call(Qi.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = Qi.formatters[n], s = Le.filter;
  return (typeof t.filter == "function" || nr(t.filter)) && (s = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : Le.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? Le.allowDots : !!t.allowDots,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Le.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? Le.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : Le.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : Le.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : Le.encodeValuesOnly,
    filter: s,
    format: n,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : Le.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Le.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Le.strictNullHandling
  };
}, TM = function(e, t) {
  var r = e, n = jM(t), i, s;
  typeof n.filter == "function" ? (s = n.filter, r = s("", r)) : nr(n.filter) && (s = n.filter, i = s);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var a;
  t && t.arrayFormat in qy ? a = t.arrayFormat : t && "indices" in t ? a = t.indices ? "indices" : "repeat" : a = "indices";
  var c = qy[a];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var l = c === "comma" && t && t.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var u = tO(), f = 0; f < i.length; ++f) {
    var p = i[f];
    n.skipNulls && r[p] === null || rO(o, AM(
      r[p],
      p,
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
      u
    ));
  }
  var h = o.join(n.delimiter), d = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? d += "utf8=%26%2310003%3B&" : d += "utf8=%E2%9C%93&"), h.length > 0 ? d + h : "";
}, ri = eO, Qf = Object.prototype.hasOwnProperty, _M = Array.isArray, je = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: ri.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, IM = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, nO = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, RM = "utf8=%26%2310003%3B", FM = "utf8=%E2%9C%93", VM = function(t, r) {
  var n = {}, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, s = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, s), a = -1, c, l = r.charset;
  if (r.charsetSentinel)
    for (c = 0; c < o.length; ++c)
      o[c].indexOf("utf8=") === 0 && (o[c] === FM ? l = "utf-8" : o[c] === RM && (l = "iso-8859-1"), a = c, c = o.length);
  for (c = 0; c < o.length; ++c)
    if (c !== a) {
      var u = o[c], f = u.indexOf("]="), p = f === -1 ? u.indexOf("=") : f + 1, h, d;
      p === -1 ? (h = r.decoder(u, je.decoder, l, "key"), d = r.strictNullHandling ? null : "") : (h = r.decoder(u.slice(0, p), je.decoder, l, "key"), d = ri.maybeMap(
        nO(u.slice(p + 1), r),
        function(m) {
          return r.decoder(m, je.decoder, l, "value");
        }
      )), d && r.interpretNumericEntities && l === "iso-8859-1" && (d = IM(d)), u.indexOf("[]=") > -1 && (d = _M(d) ? [d] : d), Qf.call(n, h) ? n[h] = ri.combine(n[h], d) : n[h] = d;
    }
  return n;
}, CM = function(e, t, r, n) {
  for (var i = n ? t : nO(t, r), s = e.length - 1; s >= 0; --s) {
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
}, MM = function(t, r, n, i) {
  if (t) {
    var s = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, c = n.depth > 0 && o.exec(s), l = c ? s.slice(0, c.index) : s, u = [];
    if (l) {
      if (!n.plainObjects && Qf.call(Object.prototype, l) && !n.allowPrototypes)
        return;
      u.push(l);
    }
    for (var f = 0; n.depth > 0 && (c = a.exec(s)) !== null && f < n.depth; ) {
      if (f += 1, !n.plainObjects && Qf.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      u.push(c[1]);
    }
    return c && u.push("[" + s.slice(c.index) + "]"), CM(u, r, n, i);
  }
}, kM = function(t) {
  if (!t)
    return je;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof t.charset > "u" ? je.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? je.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : je.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : je.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : je.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : je.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : je.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : je.decoder,
    delimiter: typeof t.delimiter == "string" || ri.isRegExp(t.delimiter) ? t.delimiter : je.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : je.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : je.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : je.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : je.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : je.strictNullHandling
  };
}, NM = function(e, t) {
  var r = kM(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? VM(e, r) : e, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = Object.keys(n), o = 0; o < s.length; ++o) {
    var a = s[o], c = MM(a, n[a], r, typeof e == "string");
    i = ri.merge(i, c, r);
  }
  return r.allowSparse === !0 ? i : ri.compact(i);
}, DM = TM, LM = NM, BM = Mh, UM = {
  formats: BM,
  parse: LM,
  stringify: DM
};
const Zf = /* @__PURE__ */ _e(UM);
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function iO(e) {
  return typeof e > "u" || e === null;
}
function qM(e) {
  return typeof e == "object" && e !== null;
}
function HM(e) {
  return Array.isArray(e) ? e : iO(e) ? [] : [e];
}
function KM(e, t) {
  var r, n, i, s;
  if (t)
    for (s = Object.keys(t), r = 0, n = s.length; r < n; r += 1)
      i = s[r], e[i] = t[i];
  return e;
}
function GM(e, t) {
  var r = "", n;
  for (n = 0; n < t; n += 1)
    r += e;
  return r;
}
function JM(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
var WM = iO, zM = qM, YM = HM, XM = GM, QM = JM, ZM = KM, xe = {
  isNothing: WM,
  isObject: zM,
  toArray: YM,
  repeat: XM,
  isNegativeZero: QM,
  extend: ZM
};
function sO(e, t) {
  var r = "", n = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), n + " " + r) : n;
}
function fs(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = sO(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
fs.prototype = Object.create(Error.prototype);
fs.prototype.constructor = fs;
fs.prototype.toString = function(t) {
  return this.name + ": " + sO(this, t);
};
var Ge = fs;
function af(e, t, r, n, i) {
  var s = "", o = "", a = Math.floor(i / 2) - 1;
  return n - t > a && (s = " ... ", t = n - a + s.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: s + e.slice(t, r).replace(/\t/g, "→") + o,
    pos: n - t + s.length
    // relative position
  };
}
function cf(e, t) {
  return xe.repeat(" ", t - e.length) + e;
}
function ek(e, t) {
  if (t = Object.create(t || null), !e.buffer)
    return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], i = [], s, o = -1; s = r.exec(e.buffer); )
    i.push(s.index), n.push(s.index + s[0].length), e.position <= s.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, l, u = Math.min(e.line + t.linesAfter, i.length).toString().length, f = t.maxLength - (t.indent + u + 3);
  for (c = 1; c <= t.linesBefore && !(o - c < 0); c++)
    l = af(
      e.buffer,
      n[o - c],
      i[o - c],
      e.position - (n[o] - n[o - c]),
      f
    ), a = xe.repeat(" ", t.indent) + cf((e.line - c + 1).toString(), u) + " | " + l.str + `
` + a;
  for (l = af(e.buffer, n[o], i[o], e.position, f), a += xe.repeat(" ", t.indent) + cf((e.line + 1).toString(), u) + " | " + l.str + `
`, a += xe.repeat("-", t.indent + u + 3 + l.pos) + `^
`, c = 1; c <= t.linesAfter && !(o + c >= i.length); c++)
    l = af(
      e.buffer,
      n[o + c],
      i[o + c],
      e.position - (n[o] - n[o + c]),
      f
    ), a += xe.repeat(" ", t.indent) + cf((e.line + c + 1).toString(), u) + " | " + l.str + `
`;
  return a.replace(/\n$/, "");
}
var tk = ek, rk = [
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
], nk = [
  "scalar",
  "sequence",
  "mapping"
];
function ik(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(n) {
      t[String(n)] = r;
    });
  }), t;
}
function sk(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if (rk.indexOf(r) === -1)
      throw new Ge('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = ik(t.styleAliases || null), nk.indexOf(this.kind) === -1)
    throw new Ge('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
var ke = sk;
function Ky(e, t) {
  var r = [];
  return e[t].forEach(function(n) {
    var i = r.length;
    r.forEach(function(s, o) {
      s.tag === n.tag && s.kind === n.kind && s.multi === n.multi && (i = o);
    }), r[i] = n;
  }), r;
}
function ok() {
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
function ep(e) {
  return this.extend(e);
}
ep.prototype.extend = function(t) {
  var r = [], n = [];
  if (t instanceof ke)
    n.push(t);
  else if (Array.isArray(t))
    n = n.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r = r.concat(t.implicit)), t.explicit && (n = n.concat(t.explicit));
  else
    throw new Ge("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(s) {
    if (!(s instanceof ke))
      throw new Ge("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (s.loadKind && s.loadKind !== "scalar")
      throw new Ge("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (s.multi)
      throw new Ge("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(s) {
    if (!(s instanceof ke))
      throw new Ge("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var i = Object.create(ep.prototype);
  return i.implicit = (this.implicit || []).concat(r), i.explicit = (this.explicit || []).concat(n), i.compiledImplicit = Ky(i, "implicit"), i.compiledExplicit = Ky(i, "explicit"), i.compiledTypeMap = ok(i.compiledImplicit, i.compiledExplicit), i;
};
var oO = ep, aO = new ke("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(e) {
    return e !== null ? e : "";
  }
}), cO = new ke("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(e) {
    return e !== null ? e : [];
  }
}), lO = new ke("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(e) {
    return e !== null ? e : {};
  }
}), uO = new oO({
  explicit: [
    aO,
    cO,
    lO
  ]
});
function ak(e) {
  if (e === null)
    return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
function ck() {
  return null;
}
function lk(e) {
  return e === null;
}
var fO = new ke("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: ak,
  construct: ck,
  predicate: lk,
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
function uk(e) {
  if (e === null)
    return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
function fk(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
function pk(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
var pO = new ke("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: uk,
  construct: fk,
  predicate: pk,
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
function hk(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function dk(e) {
  return 48 <= e && e <= 55;
}
function mk(e) {
  return 48 <= e && e <= 57;
}
function yk(e) {
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
          if (!hk(e.charCodeAt(r)))
            return !1;
          n = !0;
        }
      return n && i !== "_";
    }
    if (i === "o") {
      for (r++; r < t; r++)
        if (i = e[r], i !== "_") {
          if (!dk(e.charCodeAt(r)))
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
      if (!mk(e.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || i === "_");
}
function vk(e) {
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
function gk(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !xe.isNegativeZero(e);
}
var hO = new ke("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: yk,
  construct: vk,
  predicate: gk,
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
}), bk = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function $k(e) {
  return !(e === null || !bk.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
function Ok(e) {
  var t, r;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
var Sk = /^[-+]?[0-9]+e/;
function wk(e, t) {
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
  else if (xe.isNegativeZero(e))
    return "-0.0";
  return r = e.toString(10), Sk.test(r) ? r.replace("e", ".e") : r;
}
function Ek(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || xe.isNegativeZero(e));
}
var dO = new ke("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: $k,
  construct: Ok,
  predicate: Ek,
  represent: wk,
  defaultStyle: "lowercase"
}), mO = uO.extend({
  implicit: [
    fO,
    pO,
    hO,
    dO
  ]
}), yO = mO, vO = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), gO = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function xk(e) {
  return e === null ? !1 : vO.exec(e) !== null || gO.exec(e) !== null;
}
function Pk(e) {
  var t, r, n, i, s, o, a, c = 0, l = null, u, f, p;
  if (t = vO.exec(e), t === null && (t = gO.exec(e)), t === null)
    throw new Error("Date resolve error");
  if (r = +t[1], n = +t[2] - 1, i = +t[3], !t[4])
    return new Date(Date.UTC(r, n, i));
  if (s = +t[4], o = +t[5], a = +t[6], t[7]) {
    for (c = t[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return t[9] && (u = +t[10], f = +(t[11] || 0), l = (u * 60 + f) * 6e4, t[9] === "-" && (l = -l)), p = new Date(Date.UTC(r, n, i, s, o, a, c)), l && p.setTime(p.getTime() - l), p;
}
function Ak(e) {
  return e.toISOString();
}
var bO = new ke("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: xk,
  construct: Pk,
  instanceOf: Date,
  represent: Ak
});
function jk(e) {
  return e === "<<" || e === null;
}
var $O = new ke("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: jk
}), kh = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Tk(e) {
  if (e === null)
    return !1;
  var t, r, n = 0, i = e.length, s = kh;
  for (r = 0; r < i; r++)
    if (t = s.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0)
        return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function _k(e) {
  var t, r, n = e.replace(/[\r\n=]/g, ""), i = n.length, s = kh, o = 0, a = [];
  for (t = 0; t < i; t++)
    t % 4 === 0 && t && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | s.indexOf(n.charAt(t));
  return r = i % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function Ik(e) {
  var t = "", r = 0, n, i, s = e.length, o = kh;
  for (n = 0; n < s; n++)
    n % 3 === 0 && n && (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]), r = (r << 8) + e[n];
  return i = s % 3, i === 0 ? (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]) : i === 2 ? (t += o[r >> 10 & 63], t += o[r >> 4 & 63], t += o[r << 2 & 63], t += o[64]) : i === 1 && (t += o[r >> 2 & 63], t += o[r << 4 & 63], t += o[64], t += o[64]), t;
}
function Rk(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
var OO = new ke("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Tk,
  construct: _k,
  predicate: Rk,
  represent: Ik
}), Fk = Object.prototype.hasOwnProperty, Vk = Object.prototype.toString;
function Ck(e) {
  if (e === null)
    return !0;
  var t = [], r, n, i, s, o, a = e;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (i = a[r], o = !1, Vk.call(i) !== "[object Object]")
      return !1;
    for (s in i)
      if (Fk.call(i, s))
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
function Mk(e) {
  return e !== null ? e : [];
}
var SO = new ke("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Ck,
  construct: Mk
}), kk = Object.prototype.toString;
function Nk(e) {
  if (e === null)
    return !0;
  var t, r, n, i, s, o = e;
  for (s = new Array(o.length), t = 0, r = o.length; t < r; t += 1) {
    if (n = o[t], kk.call(n) !== "[object Object]" || (i = Object.keys(n), i.length !== 1))
      return !1;
    s[t] = [i[0], n[i[0]]];
  }
  return !0;
}
function Dk(e) {
  if (e === null)
    return [];
  var t, r, n, i, s, o = e;
  for (s = new Array(o.length), t = 0, r = o.length; t < r; t += 1)
    n = o[t], i = Object.keys(n), s[t] = [i[0], n[i[0]]];
  return s;
}
var wO = new ke("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Nk,
  construct: Dk
}), Lk = Object.prototype.hasOwnProperty;
function Bk(e) {
  if (e === null)
    return !0;
  var t, r = e;
  for (t in r)
    if (Lk.call(r, t) && r[t] !== null)
      return !1;
  return !0;
}
function Uk(e) {
  return e !== null ? e : {};
}
var EO = new ke("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: Bk,
  construct: Uk
}), Nh = yO.extend({
  implicit: [
    bO,
    $O
  ],
  explicit: [
    OO,
    SO,
    wO,
    EO
  ]
}), Dr = Object.prototype.hasOwnProperty, ba = 1, xO = 2, PO = 3, $a = 4, lf = 1, qk = 2, Gy = 3, Hk = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Kk = /[\x85\u2028\u2029]/, Gk = /[,\[\]\{\}]/, AO = /^(?:!|!!|![a-z\-]+!)$/i, jO = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Jy(e) {
  return Object.prototype.toString.call(e);
}
function Jt(e) {
  return e === 10 || e === 13;
}
function dn(e) {
  return e === 9 || e === 32;
}
function Qe(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function Un(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function Jk(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
function Wk(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function zk(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
function Wy(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function Yk(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
var TO = new Array(256), _O = new Array(256);
for (var Fn = 0; Fn < 256; Fn++)
  TO[Fn] = Wy(Fn) ? 1 : 0, _O[Fn] = Wy(Fn);
function Xk(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || Nh, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function IO(e, t) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = tk(r), new Ge(t, r);
}
function L(e, t) {
  throw IO(e, t);
}
function Oa(e, t) {
  e.onWarning && e.onWarning.call(null, IO(e, t));
}
var zy = {
  YAML: function(t, r, n) {
    var i, s, o;
    t.version !== null && L(t, "duplication of %YAML directive"), n.length !== 1 && L(t, "YAML directive accepts exactly one argument"), i = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), i === null && L(t, "ill-formed argument of the YAML directive"), s = parseInt(i[1], 10), o = parseInt(i[2], 10), s !== 1 && L(t, "unacceptable YAML version of the document"), t.version = n[0], t.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Oa(t, "unsupported YAML version of the document");
  },
  TAG: function(t, r, n) {
    var i, s;
    n.length !== 2 && L(t, "TAG directive accepts exactly two arguments"), i = n[0], s = n[1], AO.test(i) || L(t, "ill-formed tag handle (first argument) of the TAG directive"), Dr.call(t.tagMap, i) && L(t, 'there is a previously declared suffix for "' + i + '" tag handle'), jO.test(s) || L(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      s = decodeURIComponent(s);
    } catch {
      L(t, "tag prefix is malformed: " + s);
    }
    t.tagMap[i] = s;
  }
};
function Cr(e, t, r, n) {
  var i, s, o, a;
  if (t < r) {
    if (a = e.input.slice(t, r), n)
      for (i = 0, s = a.length; i < s; i += 1)
        o = a.charCodeAt(i), o === 9 || 32 <= o && o <= 1114111 || L(e, "expected valid JSON character");
    else
      Hk.test(a) && L(e, "the stream contains non-printable characters");
    e.result += a;
  }
}
function Yy(e, t, r, n) {
  var i, s, o, a;
  for (xe.isObject(r) || L(e, "cannot merge mappings; the provided source object is unacceptable"), i = Object.keys(r), o = 0, a = i.length; o < a; o += 1)
    s = i[o], Dr.call(t, s) || (t[s] = r[s], n[s] = !0);
}
function qn(e, t, r, n, i, s, o, a, c) {
  var l, u;
  if (Array.isArray(i))
    for (i = Array.prototype.slice.call(i), l = 0, u = i.length; l < u; l += 1)
      Array.isArray(i[l]) && L(e, "nested arrays are not supported inside keys"), typeof i == "object" && Jy(i[l]) === "[object Object]" && (i[l] = "[object Object]");
  if (typeof i == "object" && Jy(i) === "[object Object]" && (i = "[object Object]"), i = String(i), t === null && (t = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(s))
      for (l = 0, u = s.length; l < u; l += 1)
        Yy(e, t, s[l], r);
    else
      Yy(e, t, s, r);
  else
    !e.json && !Dr.call(r, i) && Dr.call(t, i) && (e.line = o || e.line, e.lineStart = a || e.lineStart, e.position = c || e.position, L(e, "duplicated mapping key")), i === "__proto__" ? Object.defineProperty(t, i, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: s
    }) : t[i] = s, delete r[i];
  return t;
}
function Dh(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : L(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
function Se(e, t, r) {
  for (var n = 0, i = e.input.charCodeAt(e.position); i !== 0; ) {
    for (; dn(i); )
      i === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), i = e.input.charCodeAt(++e.position);
    if (t && i === 35)
      do
        i = e.input.charCodeAt(++e.position);
      while (i !== 10 && i !== 13 && i !== 0);
    if (Jt(i))
      for (Dh(e), i = e.input.charCodeAt(e.position), n++, e.lineIndent = 0; i === 32; )
        e.lineIndent++, i = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && e.lineIndent < r && Oa(e, "deficient indentation"), n;
}
function fc(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || Qe(r)));
}
function Lh(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += xe.repeat(`
`, t - 1));
}
function Qk(e, t, r) {
  var n, i, s, o, a, c, l, u, f = e.kind, p = e.result, h;
  if (h = e.input.charCodeAt(e.position), Qe(h) || Un(h) || h === 35 || h === 38 || h === 42 || h === 33 || h === 124 || h === 62 || h === 39 || h === 34 || h === 37 || h === 64 || h === 96 || (h === 63 || h === 45) && (i = e.input.charCodeAt(e.position + 1), Qe(i) || r && Un(i)))
    return !1;
  for (e.kind = "scalar", e.result = "", s = o = e.position, a = !1; h !== 0; ) {
    if (h === 58) {
      if (i = e.input.charCodeAt(e.position + 1), Qe(i) || r && Un(i))
        break;
    } else if (h === 35) {
      if (n = e.input.charCodeAt(e.position - 1), Qe(n))
        break;
    } else {
      if (e.position === e.lineStart && fc(e) || r && Un(h))
        break;
      if (Jt(h))
        if (c = e.line, l = e.lineStart, u = e.lineIndent, Se(e, !1, -1), e.lineIndent >= t) {
          a = !0, h = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = o, e.line = c, e.lineStart = l, e.lineIndent = u;
          break;
        }
    }
    a && (Cr(e, s, o, !1), Lh(e, e.line - c), s = o = e.position, a = !1), dn(h) || (o = e.position + 1), h = e.input.charCodeAt(++e.position);
  }
  return Cr(e, s, o, !1), e.result ? !0 : (e.kind = f, e.result = p, !1);
}
function Zk(e, t) {
  var r, n, i;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, n = i = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (Cr(e, n, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39)
        n = e.position, e.position++, i = e.position;
      else
        return !0;
    else
      Jt(r) ? (Cr(e, n, i, !0), Lh(e, Se(e, !1, t)), n = i = e.position) : e.position === e.lineStart && fc(e) ? L(e, "unexpected end of the document within a single quoted scalar") : (e.position++, i = e.position);
  L(e, "unexpected end of the stream within a single quoted scalar");
}
function eN(e, t) {
  var r, n, i, s, o, a;
  if (a = e.input.charCodeAt(e.position), a !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = n = e.position; (a = e.input.charCodeAt(e.position)) !== 0; ) {
    if (a === 34)
      return Cr(e, r, e.position, !0), e.position++, !0;
    if (a === 92) {
      if (Cr(e, r, e.position, !0), a = e.input.charCodeAt(++e.position), Jt(a))
        Se(e, !1, t);
      else if (a < 256 && TO[a])
        e.result += _O[a], e.position++;
      else if ((o = Wk(a)) > 0) {
        for (i = o, s = 0; i > 0; i--)
          a = e.input.charCodeAt(++e.position), (o = Jk(a)) >= 0 ? s = (s << 4) + o : L(e, "expected hexadecimal character");
        e.result += Yk(s), e.position++;
      } else
        L(e, "unknown escape sequence");
      r = n = e.position;
    } else
      Jt(a) ? (Cr(e, r, n, !0), Lh(e, Se(e, !1, t)), r = n = e.position) : e.position === e.lineStart && fc(e) ? L(e, "unexpected end of the document within a double quoted scalar") : (e.position++, n = e.position);
  }
  L(e, "unexpected end of the stream within a double quoted scalar");
}
function tN(e, t) {
  var r = !0, n, i, s, o = e.tag, a, c = e.anchor, l, u, f, p, h, d = /* @__PURE__ */ Object.create(null), m, y, v, S;
  if (S = e.input.charCodeAt(e.position), S === 91)
    u = 93, h = !1, a = [];
  else if (S === 123)
    u = 125, h = !0, a = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = a), S = e.input.charCodeAt(++e.position); S !== 0; ) {
    if (Se(e, !0, t), S = e.input.charCodeAt(e.position), S === u)
      return e.position++, e.tag = o, e.anchor = c, e.kind = h ? "mapping" : "sequence", e.result = a, !0;
    r ? S === 44 && L(e, "expected the node content, but found ','") : L(e, "missed comma between flow collection entries"), y = m = v = null, f = p = !1, S === 63 && (l = e.input.charCodeAt(e.position + 1), Qe(l) && (f = p = !0, e.position++, Se(e, !0, t))), n = e.line, i = e.lineStart, s = e.position, ni(e, t, ba, !1, !0), y = e.tag, m = e.result, Se(e, !0, t), S = e.input.charCodeAt(e.position), (p || e.line === n) && S === 58 && (f = !0, S = e.input.charCodeAt(++e.position), Se(e, !0, t), ni(e, t, ba, !1, !0), v = e.result), h ? qn(e, a, d, y, m, v, n, i, s) : f ? a.push(qn(e, null, d, y, m, v, n, i, s)) : a.push(m), Se(e, !0, t), S = e.input.charCodeAt(e.position), S === 44 ? (r = !0, S = e.input.charCodeAt(++e.position)) : r = !1;
  }
  L(e, "unexpected end of the stream within a flow collection");
}
function rN(e, t) {
  var r, n, i = lf, s = !1, o = !1, a = t, c = 0, l = !1, u, f;
  if (f = e.input.charCodeAt(e.position), f === 124)
    n = !1;
  else if (f === 62)
    n = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; f !== 0; )
    if (f = e.input.charCodeAt(++e.position), f === 43 || f === 45)
      lf === i ? i = f === 43 ? Gy : qk : L(e, "repeat of a chomping mode identifier");
    else if ((u = zk(f)) >= 0)
      u === 0 ? L(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? L(e, "repeat of an indentation width identifier") : (a = t + u - 1, o = !0);
    else
      break;
  if (dn(f)) {
    do
      f = e.input.charCodeAt(++e.position);
    while (dn(f));
    if (f === 35)
      do
        f = e.input.charCodeAt(++e.position);
      while (!Jt(f) && f !== 0);
  }
  for (; f !== 0; ) {
    for (Dh(e), e.lineIndent = 0, f = e.input.charCodeAt(e.position); (!o || e.lineIndent < a) && f === 32; )
      e.lineIndent++, f = e.input.charCodeAt(++e.position);
    if (!o && e.lineIndent > a && (a = e.lineIndent), Jt(f)) {
      c++;
      continue;
    }
    if (e.lineIndent < a) {
      i === Gy ? e.result += xe.repeat(`
`, s ? 1 + c : c) : i === lf && s && (e.result += `
`);
      break;
    }
    for (n ? dn(f) ? (l = !0, e.result += xe.repeat(`
`, s ? 1 + c : c)) : l ? (l = !1, e.result += xe.repeat(`
`, c + 1)) : c === 0 ? s && (e.result += " ") : e.result += xe.repeat(`
`, c) : e.result += xe.repeat(`
`, s ? 1 + c : c), s = !0, o = !0, c = 0, r = e.position; !Jt(f) && f !== 0; )
      f = e.input.charCodeAt(++e.position);
    Cr(e, r, e.position, !1);
  }
  return !0;
}
function Xy(e, t) {
  var r, n = e.tag, i = e.anchor, s = [], o, a = !1, c;
  if (e.firstTabInLine !== -1)
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = s), c = e.input.charCodeAt(e.position); c !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, L(e, "tab characters must not be used in indentation")), !(c !== 45 || (o = e.input.charCodeAt(e.position + 1), !Qe(o)))); ) {
    if (a = !0, e.position++, Se(e, !0, -1) && e.lineIndent <= t) {
      s.push(null), c = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, ni(e, t, PO, !1, !0), s.push(e.result), Se(e, !0, -1), c = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && c !== 0)
      L(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return a ? (e.tag = n, e.anchor = i, e.kind = "sequence", e.result = s, !0) : !1;
}
function nN(e, t, r) {
  var n, i, s, o, a, c, l = e.tag, u = e.anchor, f = {}, p = /* @__PURE__ */ Object.create(null), h = null, d = null, m = null, y = !1, v = !1, S;
  if (e.firstTabInLine !== -1)
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = f), S = e.input.charCodeAt(e.position); S !== 0; ) {
    if (!y && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, L(e, "tab characters must not be used in indentation")), n = e.input.charCodeAt(e.position + 1), s = e.line, (S === 63 || S === 58) && Qe(n))
      S === 63 ? (y && (qn(e, f, p, h, d, null, o, a, c), h = d = m = null), v = !0, y = !0, i = !0) : y ? (y = !1, i = !0) : L(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, S = n;
    else {
      if (o = e.line, a = e.lineStart, c = e.position, !ni(e, r, xO, !1, !0))
        break;
      if (e.line === s) {
        for (S = e.input.charCodeAt(e.position); dn(S); )
          S = e.input.charCodeAt(++e.position);
        if (S === 58)
          S = e.input.charCodeAt(++e.position), Qe(S) || L(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (qn(e, f, p, h, d, null, o, a, c), h = d = m = null), v = !0, y = !1, i = !1, h = e.tag, d = e.result;
        else if (v)
          L(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = l, e.anchor = u, !0;
      } else if (v)
        L(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = l, e.anchor = u, !0;
    }
    if ((e.line === s || e.lineIndent > t) && (y && (o = e.line, a = e.lineStart, c = e.position), ni(e, t, $a, !0, i) && (y ? d = e.result : m = e.result), y || (qn(e, f, p, h, d, m, o, a, c), h = d = m = null), Se(e, !0, -1), S = e.input.charCodeAt(e.position)), (e.line === s || e.lineIndent > t) && S !== 0)
      L(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return y && qn(e, f, p, h, d, null, o, a, c), v && (e.tag = l, e.anchor = u, e.kind = "mapping", e.result = f), v;
}
function iN(e) {
  var t, r = !1, n = !1, i, s, o;
  if (o = e.input.charCodeAt(e.position), o !== 33)
    return !1;
  if (e.tag !== null && L(e, "duplication of a tag property"), o = e.input.charCodeAt(++e.position), o === 60 ? (r = !0, o = e.input.charCodeAt(++e.position)) : o === 33 ? (n = !0, i = "!!", o = e.input.charCodeAt(++e.position)) : i = "!", t = e.position, r) {
    do
      o = e.input.charCodeAt(++e.position);
    while (o !== 0 && o !== 62);
    e.position < e.length ? (s = e.input.slice(t, e.position), o = e.input.charCodeAt(++e.position)) : L(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Qe(o); )
      o === 33 && (n ? L(e, "tag suffix cannot contain exclamation marks") : (i = e.input.slice(t - 1, e.position + 1), AO.test(i) || L(e, "named tag handle cannot contain such characters"), n = !0, t = e.position + 1)), o = e.input.charCodeAt(++e.position);
    s = e.input.slice(t, e.position), Gk.test(s) && L(e, "tag suffix cannot contain flow indicator characters");
  }
  s && !jO.test(s) && L(e, "tag name cannot contain such characters: " + s);
  try {
    s = decodeURIComponent(s);
  } catch {
    L(e, "tag name is malformed: " + s);
  }
  return r ? e.tag = s : Dr.call(e.tagMap, i) ? e.tag = e.tagMap[i] + s : i === "!" ? e.tag = "!" + s : i === "!!" ? e.tag = "tag:yaml.org,2002:" + s : L(e, 'undeclared tag handle "' + i + '"'), !0;
}
function sN(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38)
    return !1;
  for (e.anchor !== null && L(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Qe(r) && !Un(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && L(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
function oN(e) {
  var t, r, n;
  if (n = e.input.charCodeAt(e.position), n !== 42)
    return !1;
  for (n = e.input.charCodeAt(++e.position), t = e.position; n !== 0 && !Qe(n) && !Un(n); )
    n = e.input.charCodeAt(++e.position);
  return e.position === t && L(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), Dr.call(e.anchorMap, r) || L(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], Se(e, !0, -1), !0;
}
function ni(e, t, r, n, i) {
  var s, o, a, c = 1, l = !1, u = !1, f, p, h, d, m, y;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, s = o = a = $a === r || PO === r, n && Se(e, !0, -1) && (l = !0, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1)), c === 1)
    for (; iN(e) || sN(e); )
      Se(e, !0, -1) ? (l = !0, a = s, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1)) : a = !1;
  if (a && (a = l || i), (c === 1 || $a === r) && (ba === r || xO === r ? m = t : m = t + 1, y = e.position - e.lineStart, c === 1 ? a && (Xy(e, y) || nN(e, y, m)) || tN(e, m) ? u = !0 : (o && rN(e, m) || Zk(e, m) || eN(e, m) ? u = !0 : oN(e) ? (u = !0, (e.tag !== null || e.anchor !== null) && L(e, "alias node should not have any properties")) : Qk(e, m, ba === r) && (u = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : c === 0 && (u = a && Xy(e, y))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && L(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), f = 0, p = e.implicitTypes.length; f < p; f += 1)
      if (d = e.implicitTypes[f], d.resolve(e.result)) {
        e.result = d.construct(e.result), e.tag = d.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (Dr.call(e.typeMap[e.kind || "fallback"], e.tag))
      d = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (d = null, h = e.typeMap.multi[e.kind || "fallback"], f = 0, p = h.length; f < p; f += 1)
        if (e.tag.slice(0, h[f].tag.length) === h[f].tag) {
          d = h[f];
          break;
        }
    d || L(e, "unknown tag !<" + e.tag + ">"), e.result !== null && d.kind !== e.kind && L(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + d.kind + '", not "' + e.kind + '"'), d.resolve(e.result, e.tag) ? (e.result = d.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : L(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || u;
}
function aN(e) {
  var t = e.position, r, n, i, s = !1, o;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (o = e.input.charCodeAt(e.position)) !== 0 && (Se(e, !0, -1), o = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || o !== 37)); ) {
    for (s = !0, o = e.input.charCodeAt(++e.position), r = e.position; o !== 0 && !Qe(o); )
      o = e.input.charCodeAt(++e.position);
    for (n = e.input.slice(r, e.position), i = [], n.length < 1 && L(e, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; dn(o); )
        o = e.input.charCodeAt(++e.position);
      if (o === 35) {
        do
          o = e.input.charCodeAt(++e.position);
        while (o !== 0 && !Jt(o));
        break;
      }
      if (Jt(o))
        break;
      for (r = e.position; o !== 0 && !Qe(o); )
        o = e.input.charCodeAt(++e.position);
      i.push(e.input.slice(r, e.position));
    }
    o !== 0 && Dh(e), Dr.call(zy, n) ? zy[n](e, n, i) : Oa(e, 'unknown document directive "' + n + '"');
  }
  if (Se(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, Se(e, !0, -1)) : s && L(e, "directives end mark is expected"), ni(e, e.lineIndent - 1, $a, !1, !0), Se(e, !0, -1), e.checkLineBreaks && Kk.test(e.input.slice(t, e.position)) && Oa(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && fc(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, Se(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    L(e, "end of the stream or a document separator is expected");
  else
    return;
}
function RO(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new Xk(e, t), n = e.indexOf("\0");
  for (n !== -1 && (r.position = n, L(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    aN(r);
  return r.documents;
}
function cN(e, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var n = RO(e, r);
  if (typeof t != "function")
    return n;
  for (var i = 0, s = n.length; i < s; i += 1)
    t(n[i]);
}
function lN(e, t) {
  var r = RO(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Ge("expected a single document in the stream, but found more");
  }
}
var uN = cN, fN = lN, FO = {
  loadAll: uN,
  load: fN
}, VO = Object.prototype.toString, CO = Object.prototype.hasOwnProperty, Bh = 65279, pN = 9, ps = 10, hN = 13, dN = 32, mN = 33, yN = 34, tp = 35, vN = 37, gN = 38, bN = 39, $N = 42, MO = 44, ON = 45, Sa = 58, SN = 61, wN = 62, EN = 63, xN = 64, kO = 91, NO = 93, PN = 96, DO = 123, AN = 124, LO = 125, qe = {};
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
var jN = [
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
], TN = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function _N(e, t) {
  var r, n, i, s, o, a, c;
  if (t === null)
    return {};
  for (r = {}, n = Object.keys(t), i = 0, s = n.length; i < s; i += 1)
    o = n[i], a = String(t[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = e.compiledTypeMap.fallback[o], c && CO.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function IN(e) {
  var t, r, n;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", n = 2;
  else if (e <= 65535)
    r = "u", n = 4;
  else if (e <= 4294967295)
    r = "U", n = 8;
  else
    throw new Ge("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + xe.repeat("0", n - t.length) + t;
}
var RN = 1, hs = 2;
function FN(e) {
  this.schema = e.schema || Nh, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = xe.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = _N(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? hs : RN, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function Qy(e, t) {
  for (var r = xe.repeat(" ", t), n = 0, i = -1, s = "", o, a = e.length; n < a; )
    i = e.indexOf(`
`, n), i === -1 ? (o = e.slice(n), n = a) : (o = e.slice(n, i + 1), n = i + 1), o.length && o !== `
` && (s += r), s += o;
  return s;
}
function rp(e, t) {
  return `
` + xe.repeat(" ", e.indent * t);
}
function VN(e, t) {
  var r, n, i;
  for (r = 0, n = e.implicitTypes.length; r < n; r += 1)
    if (i = e.implicitTypes[r], i.resolve(t))
      return !0;
  return !1;
}
function wa(e) {
  return e === dN || e === pN;
}
function ds(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== Bh || 65536 <= e && e <= 1114111;
}
function Zy(e) {
  return ds(e) && e !== Bh && e !== hN && e !== ps;
}
function ev(e, t, r) {
  var n = Zy(e), i = n && !wa(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && e !== MO && e !== kO && e !== NO && e !== DO && e !== LO) && e !== tp && !(t === Sa && !i) || Zy(t) && !wa(t) && e === tp || t === Sa && i
  );
}
function CN(e) {
  return ds(e) && e !== Bh && !wa(e) && e !== ON && e !== EN && e !== Sa && e !== MO && e !== kO && e !== NO && e !== DO && e !== LO && e !== tp && e !== gN && e !== $N && e !== mN && e !== AN && e !== SN && e !== wN && e !== bN && e !== yN && e !== vN && e !== xN && e !== PN;
}
function MN(e) {
  return !wa(e) && e !== Sa;
}
function Wi(e, t) {
  var r = e.charCodeAt(t), n;
  return r >= 55296 && r <= 56319 && t + 1 < e.length && (n = e.charCodeAt(t + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function BO(e) {
  var t = /^\n* /;
  return t.test(e);
}
var UO = 1, np = 2, qO = 3, HO = 4, Ln = 5;
function kN(e, t, r, n, i, s, o, a) {
  var c, l = 0, u = null, f = !1, p = !1, h = n !== -1, d = -1, m = CN(Wi(e, 0)) && MN(Wi(e, e.length - 1));
  if (t || o)
    for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
      if (l = Wi(e, c), !ds(l))
        return Ln;
      m = m && ev(l, u, a), u = l;
    }
  else {
    for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
      if (l = Wi(e, c), l === ps)
        f = !0, h && (p = p || // Foldable line = too long, and not more-indented.
        c - d - 1 > n && e[d + 1] !== " ", d = c);
      else if (!ds(l))
        return Ln;
      m = m && ev(l, u, a), u = l;
    }
    p = p || h && c - d - 1 > n && e[d + 1] !== " ";
  }
  return !f && !p ? m && !o && !i(e) ? UO : s === hs ? Ln : np : r > 9 && BO(e) ? Ln : o ? s === hs ? Ln : np : p ? HO : qO;
}
function NN(e, t, r, n, i) {
  e.dump = function() {
    if (t.length === 0)
      return e.quotingType === hs ? '""' : "''";
    if (!e.noCompatMode && (jN.indexOf(t) !== -1 || TN.test(t)))
      return e.quotingType === hs ? '"' + t + '"' : "'" + t + "'";
    var s = e.indent * Math.max(1, r), o = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - s), a = n || e.flowLevel > -1 && r >= e.flowLevel;
    function c(l) {
      return VN(e, l);
    }
    switch (kN(
      t,
      a,
      e.indent,
      o,
      c,
      e.quotingType,
      e.forceQuotes && !n,
      i
    )) {
      case UO:
        return t;
      case np:
        return "'" + t.replace(/'/g, "''") + "'";
      case qO:
        return "|" + tv(t, e.indent) + rv(Qy(t, s));
      case HO:
        return ">" + tv(t, e.indent) + rv(Qy(DN(t, o), s));
      case Ln:
        return '"' + LN(t) + '"';
      default:
        throw new Ge("impossible error: invalid scalar style");
    }
  }();
}
function tv(e, t) {
  var r = BO(e) ? String(t) : "", n = e[e.length - 1] === `
`, i = n && (e[e.length - 2] === `
` || e === `
`), s = i ? "+" : n ? "" : "-";
  return r + s + `
`;
}
function rv(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
function DN(e, t) {
  for (var r = /(\n+)([^\n]*)/g, n = function() {
    var l = e.indexOf(`
`);
    return l = l !== -1 ? l : e.length, r.lastIndex = l, nv(e.slice(0, l), t);
  }(), i = e[0] === `
` || e[0] === " ", s, o; o = r.exec(e); ) {
    var a = o[1], c = o[2];
    s = c[0] === " ", n += a + (!i && !s && c !== "" ? `
` : "") + nv(c, t), i = s;
  }
  return n;
}
function nv(e, t) {
  if (e === "" || e[0] === " ")
    return e;
  for (var r = / [^ ]/g, n, i = 0, s, o = 0, a = 0, c = ""; n = r.exec(e); )
    a = n.index, a - i > t && (s = o > i ? o : a, c += `
` + e.slice(i, s), i = s + 1), o = a;
  return c += `
`, e.length - i > t && o > i ? c += e.slice(i, o) + `
` + e.slice(o + 1) : c += e.slice(i), c.slice(1);
}
function LN(e) {
  for (var t = "", r = 0, n, i = 0; i < e.length; r >= 65536 ? i += 2 : i++)
    r = Wi(e, i), n = qe[r], !n && ds(r) ? (t += e[i], r >= 65536 && (t += e[i + 1])) : t += n || IN(r);
  return t;
}
function BN(e, t, r) {
  var n = "", i = e.tag, s, o, a;
  for (s = 0, o = r.length; s < o; s += 1)
    a = r[s], e.replacer && (a = e.replacer.call(r, String(s), a)), (ur(e, t, a, !1, !1) || typeof a > "u" && ur(e, t, null, !1, !1)) && (n !== "" && (n += "," + (e.condenseFlow ? "" : " ")), n += e.dump);
  e.tag = i, e.dump = "[" + n + "]";
}
function iv(e, t, r, n) {
  var i = "", s = e.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], e.replacer && (c = e.replacer.call(r, String(o), c)), (ur(e, t + 1, c, !0, !0, !1, !0) || typeof c > "u" && ur(e, t + 1, null, !0, !0, !1, !0)) && ((!n || i !== "") && (i += rp(e, t)), e.dump && ps === e.dump.charCodeAt(0) ? i += "-" : i += "- ", i += e.dump);
  e.tag = s, e.dump = i || "[]";
}
function UN(e, t, r) {
  var n = "", i = e.tag, s = Object.keys(r), o, a, c, l, u;
  for (o = 0, a = s.length; o < a; o += 1)
    u = "", n !== "" && (u += ", "), e.condenseFlow && (u += '"'), c = s[o], l = r[c], e.replacer && (l = e.replacer.call(r, c, l)), ur(e, t, c, !1, !1) && (e.dump.length > 1024 && (u += "? "), u += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), ur(e, t, l, !1, !1) && (u += e.dump, n += u));
  e.tag = i, e.dump = "{" + n + "}";
}
function qN(e, t, r, n) {
  var i = "", s = e.tag, o = Object.keys(r), a, c, l, u, f, p;
  if (e.sortKeys === !0)
    o.sort();
  else if (typeof e.sortKeys == "function")
    o.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new Ge("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    p = "", (!n || i !== "") && (p += rp(e, t)), l = o[a], u = r[l], e.replacer && (u = e.replacer.call(r, l, u)), ur(e, t + 1, l, !0, !0, !0) && (f = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, f && (e.dump && ps === e.dump.charCodeAt(0) ? p += "?" : p += "? "), p += e.dump, f && (p += rp(e, t)), ur(e, t + 1, u, !0, f) && (e.dump && ps === e.dump.charCodeAt(0) ? p += ":" : p += ": ", p += e.dump, i += p));
  e.tag = s, e.dump = i || "{}";
}
function sv(e, t, r) {
  var n, i, s, o, a, c;
  for (i = r ? e.explicitTypes : e.implicitTypes, s = 0, o = i.length; s < o; s += 1)
    if (a = i[s], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof t == "object" && t instanceof a.instanceOf) && (!a.predicate || a.predicate(t))) {
      if (r ? a.multi && a.representName ? e.tag = a.representName(t) : e.tag = a.tag : e.tag = "?", a.represent) {
        if (c = e.styleMap[a.tag] || a.defaultStyle, VO.call(a.represent) === "[object Function]")
          n = a.represent(t, c);
        else if (CO.call(a.represent, c))
          n = a.represent[c](t, c);
        else
          throw new Ge("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        e.dump = n;
      }
      return !0;
    }
  return !1;
}
function ur(e, t, r, n, i, s, o) {
  e.tag = null, e.dump = r, sv(e, r, !1) || sv(e, r, !0);
  var a = VO.call(e.dump), c = n, l;
  n && (n = e.flowLevel < 0 || e.flowLevel > t);
  var u = a === "[object Object]" || a === "[object Array]", f, p;
  if (u && (f = e.duplicates.indexOf(r), p = f !== -1), (e.tag !== null && e.tag !== "?" || p || e.indent !== 2 && t > 0) && (i = !1), p && e.usedDuplicates[f])
    e.dump = "*ref_" + f;
  else {
    if (u && p && !e.usedDuplicates[f] && (e.usedDuplicates[f] = !0), a === "[object Object]")
      n && Object.keys(e.dump).length !== 0 ? (qN(e, t, e.dump, i), p && (e.dump = "&ref_" + f + e.dump)) : (UN(e, t, e.dump), p && (e.dump = "&ref_" + f + " " + e.dump));
    else if (a === "[object Array]")
      n && e.dump.length !== 0 ? (e.noArrayIndent && !o && t > 0 ? iv(e, t - 1, e.dump, i) : iv(e, t, e.dump, i), p && (e.dump = "&ref_" + f + e.dump)) : (BN(e, t, e.dump), p && (e.dump = "&ref_" + f + " " + e.dump));
    else if (a === "[object String]")
      e.tag !== "?" && NN(e, e.dump, t, s, c);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (e.skipInvalid)
        return !1;
      throw new Ge("unacceptable kind of an object to dump " + a);
    }
    e.tag !== null && e.tag !== "?" && (l = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? l = "!" + l : l.slice(0, 18) === "tag:yaml.org,2002:" ? l = "!!" + l.slice(18) : l = "!<" + l + ">", e.dump = l + " " + e.dump);
  }
  return !0;
}
function HN(e, t) {
  var r = [], n = [], i, s;
  for (ip(e, r, n), i = 0, s = n.length; i < s; i += 1)
    t.duplicates.push(r[n[i]]);
  t.usedDuplicates = new Array(s);
}
function ip(e, t, r) {
  var n, i, s;
  if (e !== null && typeof e == "object")
    if (i = t.indexOf(e), i !== -1)
      r.indexOf(i) === -1 && r.push(i);
    else if (t.push(e), Array.isArray(e))
      for (i = 0, s = e.length; i < s; i += 1)
        ip(e[i], t, r);
    else
      for (n = Object.keys(e), i = 0, s = n.length; i < s; i += 1)
        ip(e[n[i]], t, r);
}
function KN(e, t) {
  t = t || {};
  var r = new FN(t);
  r.noRefs || HN(e, r);
  var n = e;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), ur(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var GN = KN, JN = {
  dump: GN
};
function Uh(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
var WN = ke, zN = oO, YN = uO, Ea = mO, XN = yO, QN = Nh, ZN = FO.load, eD = FO.loadAll, tD = JN.dump, rD = Ge, nD = {
  binary: OO,
  float: dO,
  map: lO,
  null: fO,
  pairs: wO,
  set: EO,
  timestamp: bO,
  bool: pO,
  int: hO,
  merge: $O,
  omap: SO,
  seq: cO,
  str: aO
}, iD = Uh("safeLoad", "load"), sD = Uh("safeLoadAll", "loadAll"), oD = Uh("safeDump", "dump"), ii = {
  Type: WN,
  Schema: zN,
  FAILSAFE_SCHEMA: YN,
  JSON_SCHEMA: Ea,
  CORE_SCHEMA: XN,
  DEFAULT_SCHEMA: QN,
  load: ZN,
  loadAll: eD,
  dump: tD,
  YAMLException: rD,
  types: nD,
  safeLoad: iD,
  safeLoadAll: sD,
  safeDump: oD
};
const aD = function() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window;
}(), { FormData: KO, Blob: xa, File: ov } = aD, cD = (e) => ":/?#[]@!$&'()*+,;=".indexOf(e) > -1, lD = (e) => /^[a-z0-9\-._~]+$/i.test(e);
function si(e) {
  let {
    escape: t
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "number" && (e = e.toString()), typeof e != "string" || !e.length || !t ? e : r ? JSON.parse(e) : [...e].map((n) => {
    if (lD(n) || cD(n) && t === "unsafe")
      return n;
    const i = new TextEncoder();
    return Array.from(i.encode(n)).map((o) => `0${o.toString(16).toUpperCase()}`.slice(-2)).map((o) => `%${o}`).join("");
  }).join("");
}
function qh(e) {
  const {
    value: t
  } = e;
  return Array.isArray(t) ? uD(e) : typeof t == "object" ? fD(e) : pD(e);
}
function uD(e) {
  let {
    key: t,
    value: r,
    style: n,
    explode: i,
    escape: s
  } = e;
  const o = (a) => si(a, {
    escape: s
  });
  if (n === "simple")
    return r.map((a) => o(a)).join(",");
  if (n === "label")
    return `.${r.map((a) => o(a)).join(".")}`;
  if (n === "matrix")
    return r.map((a) => o(a)).reduce((a, c) => !a || i ? `${a || ""};${t}=${c}` : `${a},${c}`, "");
  if (n === "form") {
    const a = i ? `&${t}=` : ",";
    return r.map((c) => o(c)).join(a);
  }
  if (n === "spaceDelimited") {
    const a = i ? `${t}=` : "";
    return r.map((c) => o(c)).join(` ${a}`);
  }
  if (n === "pipeDelimited") {
    const a = i ? `${t}=` : "";
    return r.map((c) => o(c)).join(`|${a}`);
  }
}
function fD(e) {
  let {
    key: t,
    value: r,
    style: n,
    explode: i,
    escape: s
  } = e;
  const o = (c) => si(c, {
    escape: s
  }), a = Object.keys(r);
  if (n === "simple")
    return a.reduce((c, l) => {
      const u = o(r[l]), f = i ? "=" : ",";
      return `${c ? `${c},` : ""}${l}${f}${u}`;
    }, "");
  if (n === "label")
    return a.reduce((c, l) => {
      const u = o(r[l]), f = i ? "=" : ".";
      return `${c ? `${c}.` : "."}${l}${f}${u}`;
    }, "");
  if (n === "matrix" && i)
    return a.reduce((c, l) => {
      const u = o(r[l]);
      return `${c ? `${c};` : ";"}${l}=${u}`;
    }, "");
  if (n === "matrix")
    return a.reduce((c, l) => {
      const u = o(r[l]);
      return `${c ? `${c},` : `;${t}=`}${l},${u}`;
    }, "");
  if (n === "form")
    return a.reduce((c, l) => {
      const u = o(r[l]);
      return `${c ? `${c}${i ? "&" : ","}` : ""}${l}${i ? "=" : ","}${u}`;
    }, "");
}
function pD(e) {
  let {
    key: t,
    value: r,
    style: n,
    escape: i
  } = e;
  const s = (o) => si(o, {
    escape: i
  });
  if (n === "simple")
    return s(r);
  if (n === "label")
    return `.${s(r)}`;
  if (n === "matrix")
    return `;${t}=${s(r)}`;
  if (n === "form" || n === "deepObject")
    return s(r);
}
const hD = (e, t) => {
  t.body = e;
}, sp = {
  serializeRes: GO,
  mergeInQueryOrForm: YO
};
async function Ds(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  typeof e == "object" && (t = e, e = t.url), t.headers = t.headers || {}, sp.mergeInQueryOrForm(t), t.headers && Object.keys(t.headers).forEach((i) => {
    const s = t.headers[i];
    typeof s == "string" && (t.headers[i] = s.replace(/\n+/g, " "));
  }), t.requestInterceptor && (t = await t.requestInterceptor(t) || t);
  const r = t.headers["content-type"] || t.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && t.body instanceof KO && (delete t.headers["content-type"], delete t.headers["Content-Type"]);
  let n;
  try {
    n = await (t.userFetch || fetch)(t.url, t), n = await sp.serializeRes(n, e, t), t.responseInterceptor && (n = await t.responseInterceptor(n) || n);
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
const dD = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return /(json|xml|yaml|text)\b/.test(e);
};
function mD(e, t) {
  return t && (t.indexOf("application/json") === 0 || t.indexOf("+json") > 0) ? JSON.parse(e) : ii.load(e);
}
function GO(e, t) {
  let {
    loadSpec: r = !1
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const n = {
    ok: e.ok,
    url: e.url || t,
    status: e.status,
    statusText: e.statusText,
    headers: JO(e.headers)
  }, i = n.headers["content-type"], s = r || dD(i);
  return (s ? e.text : e.blob || e.buffer).call(e).then((a) => {
    if (n.text = a, n.data = a, s)
      try {
        const c = mD(a, i);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
function yD(e) {
  return e.includes(", ") ? e.split(", ") : e;
}
function JO() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return typeof e.entries != "function" ? {} : Array.from(e.entries()).reduce((t, r) => {
    let [n, i] = r;
    return t[n] = yD(i), t;
  }, {});
}
function Hh(e, t) {
  return !t && typeof navigator < "u" && (t = navigator), t && t.product === "ReactNative" ? !!(e && typeof e == "object" && typeof e.uri == "string") : typeof ov < "u" && e instanceof ov || typeof xa < "u" && e instanceof xa || ArrayBuffer.isView(e) ? !0 : e !== null && typeof e == "object" && typeof e.pipe == "function";
}
function WO(e, t) {
  return Array.isArray(e) && e.some((r) => Hh(r, t));
}
const vD = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, gD = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
function zO(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const {
    collectionFormat: n,
    allowEmptyValue: i,
    serializationOption: s,
    encoding: o
  } = t, a = typeof t == "object" && !Array.isArray(t) ? t.value : t, c = r ? (u) => u.toString() : (u) => encodeURIComponent(u), l = c(e);
  if (typeof a > "u" && i)
    return [[l, ""]];
  if (Hh(a) || WO(a))
    return [[l, a]];
  if (s)
    return av(e, a, r, s);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((u) => u !== "undefined")) {
      const {
        style: u,
        explode: f,
        allowReserved: p
      } = o;
      return av(e, a, r, {
        style: u,
        explode: f,
        allowReserved: p
      });
    }
    if (o.contentType) {
      if (o.contentType === "application/json") {
        const u = typeof a == "string" ? a : JSON.stringify(a);
        return [[l, c(u)]];
      }
      return [[l, c(a.toString())]];
    }
    return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) && a.every((u) => typeof u != "object") ? [[l, a.map(c).join(",")]] : [[l, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) ? n === "multi" ? [[l, a.map(c)]] : [[l, a.map(c).join(gD[n || "csv"])]] : [[l, ""]];
}
function av(e, t, r, n) {
  const i = n.style || "form", s = typeof n.explode > "u" ? i === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (l) => si(l, {
    escape: o
  }), c = r ? (l) => l : (l) => si(l, {
    escape: o
  });
  return typeof t != "object" ? [[c(e), a(t)]] : Array.isArray(t) ? s ? [[c(e), t.map(a)]] : [[c(e), t.map(a).join(vD[i])]] : i === "deepObject" ? Object.keys(t).map((l) => [c(`${e}[${l}]`), a(t[l])]) : s ? Object.keys(t).map((l) => [c(l), a(t[l])]) : [[c(e), Object.keys(t).map((l) => [`${c(l)},${a(t[l])}`]).join(",")]];
}
function bD(e) {
  return Object.entries(e).reduce((t, r) => {
    let [n, i] = r;
    for (const [s, o] of zO(n, i, !0))
      if (Array.isArray(o))
        for (const a of o)
          if (ArrayBuffer.isView(a)) {
            const c = new xa([a]);
            t.append(s, c);
          } else
            t.append(s, a);
      else if (ArrayBuffer.isView(o)) {
        const a = new xa([o]);
        t.append(s, a);
      } else
        t.append(s, o);
    return t;
  }, new KO());
}
function cv(e) {
  const t = Object.keys(e).reduce((r, n) => {
    for (const [i, s] of zO(n, e[n]))
      r[i] = s;
    return r;
  }, {});
  return Zf.stringify(t, {
    encode: !1,
    indices: !1
  }) || "";
}
function YO() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    url: t = "",
    query: r,
    form: n
  } = e, i = function() {
    for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
      o[a] = arguments[a];
    const c = o.filter((l) => l).join("&");
    return c ? `?${c}` : "";
  };
  if (n) {
    const s = Object.keys(n).some((a) => {
      const {
        value: c
      } = n[a];
      return Hh(c) || WO(c);
    }), o = e.headers["content-type"] || e.headers["Content-Type"];
    if (s || /multipart\/form-data/i.test(o)) {
      const a = bD(e.form);
      hD(a, e);
    } else
      e.body = cv(n);
    delete e.form;
  }
  if (r) {
    const [s, o] = t.split("?");
    let a = "";
    if (o) {
      const l = Zf.parse(o);
      Object.keys(r).forEach((f) => delete l[f]), a = Zf.stringify(l, {
        encode: !0
      });
    }
    const c = i(a, cv(r));
    e.url = s + c, delete e.query;
  }
  return e;
}
function $D(e, t, r) {
  return r = r || ((n) => n), t = t || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), sp.mergeInQueryOrForm(n), n = t(n), r(e(n)));
}
const XO = "application/json, application/yaml";
function QO(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
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
      Accept: XO
    },
    credentials: i
  }).then((o) => o.body);
}
const Kh = (e) => {
  const {
    baseDoc: t,
    url: r
  } = e;
  return t || r;
}, ZO = (e) => {
  const {
    fetch: t,
    http: r
  } = e;
  return t || r || Ds;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var OD = globalThis && globalThis.__extends || function() {
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
}(), SD = Object.prototype.hasOwnProperty;
function op(e, t) {
  return SD.call(e, t);
}
function ap(e) {
  if (Array.isArray(e)) {
    for (var t = new Array(e.length), r = 0; r < t.length; r++)
      t[r] = "" + r;
    return t;
  }
  if (Object.keys)
    return Object.keys(e);
  var n = [];
  for (var i in e)
    op(e, i) && n.push(i);
  return n;
}
function ct(e) {
  switch (typeof e) {
    case "object":
      return JSON.parse(JSON.stringify(e));
    case "undefined":
      return null;
    default:
      return e;
  }
}
function cp(e) {
  for (var t = 0, r = e.length, n; t < r; ) {
    if (n = e.charCodeAt(t), n >= 48 && n <= 57) {
      t++;
      continue;
    }
    return !1;
  }
  return !0;
}
function rn(e) {
  return e.indexOf("/") === -1 && e.indexOf("~") === -1 ? e : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function e0(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
function lp(e) {
  if (e === void 0)
    return !0;
  if (e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = e.length; t < r; t++)
        if (lp(e[t]))
          return !0;
    } else if (typeof e == "object") {
      for (var n = ap(e), i = n.length, s = 0; s < i; s++)
        if (lp(e[n[s]]))
          return !0;
    }
  }
  return !1;
}
function lv(e, t) {
  var r = [e];
  for (var n in t) {
    var i = typeof t[n] == "object" ? JSON.stringify(t[n], null, 2) : t[n];
    typeof i < "u" && r.push(n + ": " + i);
  }
  return r.join(`
`);
}
var t0 = (
  /** @class */
  function(e) {
    OD(t, e);
    function t(r, n, i, s, o) {
      var a = this.constructor, c = e.call(this, lv(r, { name: n, index: i, operation: s, tree: o })) || this;
      return c.name = n, c.index = i, c.operation = s, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = lv(r, { name: n, index: i, operation: s, tree: o }), c;
    }
    return t;
  }(Error)
), ge = t0, wD = ct, Hn = {
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
    var n = ms(r, this.path);
    n && (n = ct(n));
    var i = mn(r, { op: "remove", path: this.from }).removed;
    return mn(r, { op: "add", path: this.path, value: i }), { newDocument: r, removed: n };
  },
  copy: function(e, t, r) {
    var n = ms(r, this.from);
    return mn(r, { op: "add", path: this.path, value: ct(n) }), { newDocument: r };
  },
  test: function(e, t, r) {
    return { newDocument: r, test: ys(e[t], this.value) };
  },
  _get: function(e, t, r) {
    return this.value = e[t], { newDocument: r };
  }
}, ED = {
  add: function(e, t, r) {
    return cp(t) ? e.splice(t, 0, this.value) : e[t] = this.value, { newDocument: r, index: t };
  },
  remove: function(e, t, r) {
    var n = e.splice(t, 1);
    return { newDocument: r, removed: n[0] };
  },
  replace: function(e, t, r) {
    var n = e[t];
    return e[t] = this.value, { newDocument: r, removed: n };
  },
  move: Hn.move,
  copy: Hn.copy,
  test: Hn.test,
  _get: Hn._get
};
function ms(e, t) {
  if (t == "")
    return e;
  var r = { op: "_get", path: t };
  return mn(e, r), r.value;
}
function mn(e, t, r, n, i, s) {
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), i === void 0 && (i = !0), s === void 0 && (s = 0), r && (typeof r == "function" ? r(t, 0, e, t.path) : Pa(t, 0)), t.path === "") {
    var o = { newDocument: e };
    if (t.op === "add")
      return o.newDocument = t.value, o;
    if (t.op === "replace")
      return o.newDocument = t.value, o.removed = e, o;
    if (t.op === "move" || t.op === "copy")
      return o.newDocument = ms(e, t.from), t.op === "move" && (o.removed = e), o;
    if (t.op === "test") {
      if (o.test = ys(e, t.value), o.test === !1)
        throw new ge("Test operation failed", "TEST_OPERATION_FAILED", s, t, e);
      return o.newDocument = e, o;
    } else {
      if (t.op === "remove")
        return o.removed = e, o.newDocument = null, o;
      if (t.op === "_get")
        return t.value = e, o;
      if (r)
        throw new ge("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", s, t, e);
      return o;
    }
  } else {
    n || (e = ct(e));
    var a = t.path || "", c = a.split("/"), l = e, u = 1, f = c.length, p = void 0, h = void 0, d = void 0;
    for (typeof r == "function" ? d = r : d = Pa; ; ) {
      if (h = c[u], h && h.indexOf("~") != -1 && (h = e0(h)), i && (h == "__proto__" || h == "prototype" && u > 0 && c[u - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && p === void 0 && (l[h] === void 0 ? p = c.slice(0, u).join("/") : u == f - 1 && (p = t.path), p !== void 0 && d(t, 0, e, p)), u++, Array.isArray(l)) {
        if (h === "-")
          h = l.length;
        else {
          if (r && !cp(h))
            throw new ge("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", s, t, e);
          cp(h) && (h = ~~h);
        }
        if (u >= f) {
          if (r && t.op === "add" && h > l.length)
            throw new ge("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", s, t, e);
          var o = ED[t.op].call(t, l, h, e);
          if (o.test === !1)
            throw new ge("Test operation failed", "TEST_OPERATION_FAILED", s, t, e);
          return o;
        }
      } else if (u >= f) {
        var o = Hn[t.op].call(t, l, h, e);
        if (o.test === !1)
          throw new ge("Test operation failed", "TEST_OPERATION_FAILED", s, t, e);
        return o;
      }
      if (l = l[h], r && u < f && (!l || typeof l != "object"))
        throw new ge("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", s, t, e);
    }
  }
}
function jr(e, t, r, n, i) {
  if (n === void 0 && (n = !0), i === void 0 && (i = !0), r && !Array.isArray(t))
    throw new ge("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n || (e = ct(e));
  for (var s = new Array(t.length), o = 0, a = t.length; o < a; o++)
    s[o] = mn(e, t[o], r, !0, i, o), e = s[o].newDocument;
  return s.newDocument = e, s;
}
function xD(e, t, r) {
  var n = mn(e, t);
  if (n.test === !1)
    throw new ge("Test operation failed", "TEST_OPERATION_FAILED", r, t, e);
  return n.newDocument;
}
function Pa(e, t, r, n) {
  if (typeof e != "object" || e === null || Array.isArray(e))
    throw new ge("Operation is not an object", "OPERATION_NOT_AN_OBJECT", t, e, r);
  if (Hn[e.op]) {
    if (typeof e.path != "string")
      throw new ge("Operation `path` property is not a string", "OPERATION_PATH_INVALID", t, e, r);
    if (e.path.indexOf("/") !== 0 && e.path.length > 0)
      throw new ge('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", t, e, r);
    if ((e.op === "move" || e.op === "copy") && typeof e.from != "string")
      throw new ge("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", t, e, r);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && e.value === void 0)
      throw new ge("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", t, e, r);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && lp(e.value))
      throw new ge("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", t, e, r);
    if (r) {
      if (e.op == "add") {
        var i = e.path.split("/").length, s = n.split("/").length;
        if (i !== s + 1 && i !== s)
          throw new ge("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", t, e, r);
      } else if (e.op === "replace" || e.op === "remove" || e.op === "_get") {
        if (e.path !== n)
          throw new ge("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", t, e, r);
      } else if (e.op === "move" || e.op === "copy") {
        var o = { op: "_get", path: e.from, value: void 0 }, a = r0([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new ge("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", t, e, r);
      }
    }
  } else
    throw new ge("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", t, e, r);
}
function r0(e, t, r) {
  try {
    if (!Array.isArray(e))
      throw new ge("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (t)
      jr(ct(t), ct(e), r || !0);
    else {
      r = r || Pa;
      for (var n = 0; n < e.length; n++)
        r(e[n], n, t, void 0);
    }
  } catch (i) {
    if (i instanceof ge)
      return i;
    throw i;
  }
}
function ys(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    var r = Array.isArray(e), n = Array.isArray(t), i, s, o;
    if (r && n) {
      if (s = e.length, s != t.length)
        return !1;
      for (i = s; i-- !== 0; )
        if (!ys(e[i], t[i]))
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
      if (o = a[i], !ys(e[o], t[o]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
const PD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: ge,
  _areEquals: ys,
  applyOperation: mn,
  applyPatch: jr,
  applyReducer: xD,
  deepClone: wD,
  getValueByPointer: ms,
  validate: r0,
  validator: Pa
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var Gh = /* @__PURE__ */ new WeakMap(), AD = (
  /** @class */
  function() {
    function e(t) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = t;
    }
    return e;
  }()
), jD = (
  /** @class */
  function() {
    function e(t, r) {
      this.callback = t, this.observer = r;
    }
    return e;
  }()
);
function TD(e) {
  return Gh.get(e);
}
function _D(e, t) {
  return e.observers.get(t);
}
function ID(e, t) {
  e.observers.delete(t.callback);
}
function RD(e, t) {
  t.unobserve();
}
function FD(e, t) {
  var r = [], n, i = TD(e);
  if (!i)
    i = new AD(e), Gh.set(e, i);
  else {
    var s = _D(i, t);
    n = s && s.observer;
  }
  if (n)
    return n;
  if (n = {}, i.value = ct(e), t) {
    n.callback = t, n.next = null;
    var o = function() {
      up(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = e, n.unobserve = function() {
    up(n), clearTimeout(n.next), ID(i, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, i.observers.set(t, new jD(t, n)), n;
}
function up(e, t) {
  t === void 0 && (t = !1);
  var r = Gh.get(e.object);
  Jh(r.value, e.object, e.patches, "", t), e.patches.length && jr(r.value, e.patches);
  var n = e.patches;
  return n.length > 0 && (e.patches = [], e.callback && e.callback(n)), n;
}
function Jh(e, t, r, n, i) {
  if (t !== e) {
    typeof t.toJSON == "function" && (t = t.toJSON());
    for (var s = ap(t), o = ap(e), a = !1, c = o.length - 1; c >= 0; c--) {
      var l = o[c], u = e[l];
      if (op(t, l) && !(t[l] === void 0 && u !== void 0 && Array.isArray(t) === !1)) {
        var f = t[l];
        typeof u == "object" && u != null && typeof f == "object" && f != null && Array.isArray(u) === Array.isArray(f) ? Jh(u, f, r, n + "/" + rn(l), i) : u !== f && (i && r.push({ op: "test", path: n + "/" + rn(l), value: ct(u) }), r.push({ op: "replace", path: n + "/" + rn(l), value: ct(f) }));
      } else
        Array.isArray(e) === Array.isArray(t) ? (i && r.push({ op: "test", path: n + "/" + rn(l), value: ct(u) }), r.push({ op: "remove", path: n + "/" + rn(l) }), a = !0) : (i && r.push({ op: "test", path: n, value: e }), r.push({ op: "replace", path: n, value: t }));
    }
    if (!(!a && s.length == o.length))
      for (var c = 0; c < s.length; c++) {
        var l = s[c];
        !op(e, l) && t[l] !== void 0 && r.push({ op: "add", path: n + "/" + rn(l), value: ct(t[l]) });
      }
  }
}
function VD(e, t, r) {
  r === void 0 && (r = !1);
  var n = [];
  return Jh(e, t, n, "", r), n;
}
const CD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: VD,
  generate: up,
  observe: FD,
  unobserve: RD
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, PD, CD, {
  JsonPatchError: t0,
  deepClone: ct,
  escapePathComponent: rn,
  unescapePathComponent: e0
});
var MD = function(t) {
  return kD(t) && !ND(t);
};
function kD(e) {
  return !!e && typeof e == "object";
}
function ND(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || BD(e);
}
var DD = typeof Symbol == "function" && Symbol.for, LD = DD ? Symbol.for("react.element") : 60103;
function BD(e) {
  return e.$$typeof === LD;
}
function UD(e) {
  return Array.isArray(e) ? [] : {};
}
function vs(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? oi(UD(e), e, t) : e;
}
function qD(e, t, r) {
  return e.concat(t).map(function(n) {
    return vs(n, r);
  });
}
function HD(e, t) {
  if (!t.customMerge)
    return oi;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : oi;
}
function KD(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function uv(e) {
  return Object.keys(e).concat(KD(e));
}
function n0(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function GD(e, t) {
  return n0(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function JD(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && uv(e).forEach(function(i) {
    n[i] = vs(e[i], r);
  }), uv(t).forEach(function(i) {
    GD(e, i) || (n0(e, i) && r.isMergeableObject(t[i]) ? n[i] = HD(i, r)(e[i], t[i], r) : n[i] = vs(t[i], r));
  }), n;
}
function oi(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || qD, r.isMergeableObject = r.isMergeableObject || MD, r.cloneUnlessOtherwiseSpecified = vs;
  var n = Array.isArray(t), i = Array.isArray(e), s = n === i;
  return s ? n ? r.arrayMerge(e, t, r) : JD(e, t, r) : vs(t, r);
}
oi.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, i) {
    return oi(n, i, r);
  }, {});
};
var WD = oi, zD = WD;
const YD = /* @__PURE__ */ _e(zD), ae = {
  add: QD,
  replace: Zo,
  remove: ZD,
  merge: e2,
  mergeDeep: t2,
  context: r2,
  getIn: o2,
  applyPatch: XD,
  parentPathMatch: s2,
  flatten: Ls,
  fullyNormalizeArray: a2,
  normalizeArray: s0,
  isPromise: c2,
  forEachNew: n2,
  forEachNewPrimitive: i2,
  isJsonPatch: c0,
  isContextPatch: f2,
  isPatch: pc,
  isMutation: l0,
  isAdditiveMutation: Aa,
  isGenerator: u2,
  isFunction: a0,
  isObject: yn,
  isError: l2
};
function XD(e, t, r) {
  if (r = r || {}, t = se(se({}, t), {}, {
    path: t.path && fv(t.path)
  }), t.op === "merge") {
    const n = uf(e, t.path);
    Object.assign(n, t.value), jr(e, [Zo(t.path, n)]);
  } else if (t.op === "mergeDeep") {
    const n = uf(e, t.path), i = YD(n, t.value);
    e = jr(e, [Zo(t.path, i)]).newDocument;
  } else if (t.op === "add" && t.path === "" && yn(t.value)) {
    const n = Object.keys(t.value).reduce((i, s) => (i.push({
      op: "add",
      path: `/${fv(s)}`,
      value: t.value[s]
    }), i), []);
    jr(e, n);
  } else if (t.op === "replace" && t.path === "") {
    let {
      value: n
    } = t;
    r.allowMetaPatches && t.meta && Aa(t) && (Array.isArray(t.value) || yn(t.value)) && (n = se(se({}, n), t.meta)), e = n;
  } else if (jr(e, [t]), r.allowMetaPatches && t.meta && Aa(t) && (Array.isArray(t.value) || yn(t.value))) {
    const n = uf(e, t.path), i = se(se({}, n), t.meta);
    jr(e, [Zo(t.path, i)]);
  }
  return e;
}
function fv(e) {
  return Array.isArray(e) ? e.length < 1 ? "" : `/${e.map(
    (t) => (
      // eslint-disable-line prefer-template
      (t + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : e;
}
function QD(e, t) {
  return {
    op: "add",
    path: e,
    value: t
  };
}
function Zo(e, t, r) {
  return {
    op: "replace",
    path: e,
    value: t,
    meta: r
  };
}
function ZD(e) {
  return {
    op: "remove",
    path: e
  };
}
function e2(e, t) {
  return {
    type: "mutation",
    op: "merge",
    path: e,
    value: t
  };
}
function t2(e, t) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: e,
    value: t
  };
}
function r2(e, t) {
  return {
    type: "context",
    path: e,
    value: t
  };
}
function n2(e, t) {
  try {
    return i0(e, pp, t);
  } catch (r) {
    return r;
  }
}
function i2(e, t) {
  try {
    return i0(e, fp, t);
  } catch (r) {
    return r;
  }
}
function i0(e, t, r) {
  const n = e.filter(Aa).map((o) => t(o.value, r, o.path)) || [], i = Ls(n);
  return o0(i);
}
function fp(e, t, r) {
  return r = r || [], Array.isArray(e) ? e.map((n, i) => fp(n, t, r.concat(i))) : yn(e) ? Object.keys(e).map((n) => fp(e[n], t, r.concat(n))) : t(e, r[r.length - 1], r);
}
function pp(e, t, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const i = t(e, r[r.length - 1], r);
    i && (n = n.concat(i));
  }
  if (Array.isArray(e)) {
    const i = e.map((s, o) => pp(s, t, r.concat(o)));
    i && (n = n.concat(i));
  } else if (yn(e)) {
    const i = Object.keys(e).map((s) => pp(e[s], t, r.concat(s)));
    i && (n = n.concat(i));
  }
  return n = Ls(n), n;
}
function s2(e, t) {
  if (!Array.isArray(t))
    return !1;
  for (let r = 0, n = t.length; r < n; r += 1)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function o2(e, t) {
  return t.reduce((r, n) => typeof n < "u" && r ? r[n] : r, e);
}
function a2(e) {
  return o0(Ls(s0(e)));
}
function s0(e) {
  return Array.isArray(e) ? e : [e];
}
function Ls(e) {
  return [].concat(...e.map((t) => Array.isArray(t) ? Ls(t) : t));
}
function o0(e) {
  return e.filter((t) => typeof t < "u");
}
function yn(e) {
  return e && typeof e == "object";
}
function c2(e) {
  return yn(e) && a0(e.then);
}
function a0(e) {
  return e && typeof e == "function";
}
function l2(e) {
  return e instanceof Error;
}
function c0(e) {
  if (pc(e)) {
    const {
      op: t
    } = e;
    return t === "add" || t === "remove" || t === "replace";
  }
  return !1;
}
function u2(e) {
  return Object.prototype.toString.call(e) === "[object GeneratorFunction]";
}
function l0(e) {
  return c0(e) || pc(e) && e.type === "mutation";
}
function Aa(e) {
  return l0(e) && (e.op === "add" || e.op === "replace" || e.op === "merge" || e.op === "mergeDeep");
}
function f2(e) {
  return pc(e) && e.type === "context";
}
function pc(e) {
  return e && typeof e == "object";
}
function uf(e, t) {
  try {
    return ms(e, t);
  } catch (r) {
    return console.error(r), {};
  }
}
function Wh(e, t) {
  function r() {
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack;
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    [this.message] = i, t && t.apply(this, i);
  }
  return r.prototype = new Error(), r.prototype.name = e, r.prototype.constructor = r, r;
}
function Si(e) {
  return Object.prototype.toString.call(e);
}
function p2(e) {
  return Si(e) === "[object Date]";
}
function h2(e) {
  return Si(e) === "[object RegExp]";
}
function d2(e) {
  return Si(e) === "[object Error]";
}
function m2(e) {
  return Si(e) === "[object Boolean]";
}
function y2(e) {
  return Si(e) === "[object Number]";
}
function v2(e) {
  return Si(e) === "[object String]";
}
var u0 = Array.isArray || function(t) {
  return Object.prototype.toString.call(t) === "[object Array]";
};
function hc(e, t) {
  if (e.forEach)
    return e.forEach(t);
  for (var r = 0; r < e.length; r++)
    t(e[r], r, e);
}
var dc = Object.keys || function(t) {
  var r = [];
  for (var n in t)
    r.push(n);
  return r;
}, mc = Object.prototype.hasOwnProperty || function(e, t) {
  return t in e;
};
function f0(e) {
  if (typeof e == "object" && e !== null) {
    var t;
    if (u0(e))
      t = [];
    else if (p2(e))
      t = new Date(e.getTime ? e.getTime() : e);
    else if (h2(e))
      t = new RegExp(e);
    else if (d2(e))
      t = { message: e.message };
    else if (m2(e) || y2(e) || v2(e))
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
    return hc(dc(e), function(i) {
      t[i] = e[i];
    }), t;
  }
  return e;
}
function p0(e, t, r) {
  var n = [], i = [], s = !0;
  return function o(a) {
    var c = r ? f0(a) : a, l = {}, u = !0, f = {
      node: c,
      node_: a,
      path: [].concat(n),
      parent: i[i.length - 1],
      parents: i,
      key: n[n.length - 1],
      isRoot: n.length === 0,
      level: n.length,
      circular: null,
      update: function(d, m) {
        f.isRoot || (f.parent.node[f.key] = d), f.node = d, m && (u = !1);
      },
      delete: function(d) {
        delete f.parent.node[f.key], d && (u = !1);
      },
      remove: function(d) {
        u0(f.parent.node) ? f.parent.node.splice(f.key, 1) : delete f.parent.node[f.key], d && (u = !1);
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
        u = !1;
      }
    };
    if (!s)
      return f;
    function p() {
      if (typeof f.node == "object" && f.node !== null) {
        (!f.keys || f.node_ !== f.node) && (f.keys = dc(f.node)), f.isLeaf = f.keys.length === 0;
        for (var d = 0; d < i.length; d++)
          if (i[d].node_ === a) {
            f.circular = i[d];
            break;
          }
      } else
        f.isLeaf = !0, f.keys = null;
      f.notLeaf = !f.isLeaf, f.notRoot = !f.isRoot;
    }
    p();
    var h = t.call(f, f.node);
    return h !== void 0 && f.update && f.update(h), l.before && l.before.call(f, f.node), u && (typeof f.node == "object" && f.node !== null && !f.circular && (i.push(f), p(), hc(f.keys, function(d, m) {
      n.push(d), l.pre && l.pre.call(f, f.node[d], d);
      var y = o(f.node[d]);
      r && mc.call(f.node, d) && (f.node[d] = y.node), y.isLast = m === f.keys.length - 1, y.isFirst = m === 0, l.post && l.post.call(f, y), n.pop();
    }), i.pop()), l.after && l.after.call(f, f.node)), f;
  }(e).node;
}
function St(e) {
  this.value = e;
}
St.prototype.get = function(e) {
  for (var t = this.value, r = 0; r < e.length; r++) {
    var n = e[r];
    if (!t || !mc.call(t, n))
      return;
    t = t[n];
  }
  return t;
};
St.prototype.has = function(e) {
  for (var t = this.value, r = 0; r < e.length; r++) {
    var n = e[r];
    if (!t || !mc.call(t, n))
      return !1;
    t = t[n];
  }
  return !0;
};
St.prototype.set = function(e, t) {
  for (var r = this.value, n = 0; n < e.length - 1; n++) {
    var i = e[n];
    mc.call(r, i) || (r[i] = {}), r = r[i];
  }
  return r[e[n]] = t, t;
};
St.prototype.map = function(e) {
  return p0(this.value, e, !0);
};
St.prototype.forEach = function(e) {
  return this.value = p0(this.value, e, !1), this.value;
};
St.prototype.reduce = function(e, t) {
  var r = arguments.length === 1, n = r ? this.value : t;
  return this.forEach(function(i) {
    (!this.isRoot || !r) && (n = e.call(this, n, i));
  }), n;
};
St.prototype.paths = function() {
  var e = [];
  return this.forEach(function() {
    e.push(this.path);
  }), e;
};
St.prototype.nodes = function() {
  var e = [];
  return this.forEach(function() {
    e.push(this.node);
  }), e;
};
St.prototype.clone = function() {
  var e = [], t = [];
  return function r(n) {
    for (var i = 0; i < e.length; i++)
      if (e[i] === n)
        return t[i];
    if (typeof n == "object" && n !== null) {
      var s = f0(n);
      return e.push(n), t.push(s), hc(dc(n), function(o) {
        s[o] = r(n[o]);
      }), e.pop(), t.pop(), s;
    }
    return n;
  }(this.value);
};
function h0(e) {
  return new St(e);
}
hc(dc(St.prototype), function(e) {
  h0[e] = function(t) {
    var r = [].slice.call(arguments, 1), n = new St(t);
    return n[e].apply(n, r);
  };
});
var g2 = h0;
const b2 = /* @__PURE__ */ _e(g2), $2 = ["properties"], O2 = ["properties"], S2 = [
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
], w2 = ["schema/example", "items/example"];
function d0(e) {
  const t = e[e.length - 1], r = e[e.length - 2], n = e.join("/");
  return (
    // eslint-disable-next-line max-len
    $2.indexOf(t) > -1 && O2.indexOf(r) === -1 || S2.indexOf(n) > -1 || w2.some((i) => n.indexOf(i) > -1)
  );
}
function E2(e, t) {
  let {
    specmap: r,
    getBaseUrlForNodePath: n = (o) => r.getContext([...t, ...o]).baseDoc,
    targetKeys: i = ["$ref", "$$ref"]
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const s = [];
  return b2(e).forEach(function() {
    if (i.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = t.concat(this.path), l = hp(this.node, n(a));
      s.push(r.replace(c, l));
    }
  }), s;
}
function hp(e, t) {
  const [r, n] = e.split("#"), i = at.resolve(r || "", t || "");
  return n ? `${i}#${n}` : i;
}
const x2 = /^([a-z]+:\/\/|\/\/)/i, ai = Wh("JSONRefError", function(t, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), ir = {}, pv = /* @__PURE__ */ new WeakMap(), P2 = [
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
], A2 = (e) => P2.some((t) => t(e)), j2 = {
  key: "$ref",
  plugin: (e, t, r, n) => {
    const i = n.getInstance(), s = r.slice(0, -1);
    if (d0(s) || A2(s))
      return;
    const {
      baseDoc: o
    } = n.getContext(r);
    if (typeof e != "string")
      return new ai("$ref: must be a string (JSON-Ref)", {
        $ref: e,
        baseDoc: o,
        fullPath: r
      });
    const a = y0(e), c = a[0], l = a[1] || "";
    let u;
    try {
      u = o || c ? m0(c, o) : null;
    } catch (m) {
      return dp(m, {
        pointer: l,
        $ref: e,
        basePath: u,
        fullPath: r
      });
    }
    let f, p;
    if (F2(l, u, s, n) && !i.useCircularStructures) {
      const m = hp(e, u);
      return e === m ? null : ae.replace(r, m);
    }
    if (u == null ? (p = Yh(l), f = n.get(p), typeof f > "u" && (f = new ai(`Could not resolve reference: ${e}`, {
      pointer: l,
      $ref: e,
      baseDoc: o,
      fullPath: r
    }))) : (f = v0(u, l), f.__value != null ? f = f.__value : f = f.catch((m) => {
      throw dp(m, {
        pointer: l,
        $ref: e,
        baseDoc: o,
        fullPath: r
      });
    })), f instanceof Error)
      return [ae.remove(r), f];
    const h = hp(e, u), d = ae.replace(s, f, {
      $$ref: h
    });
    if (u && u !== o)
      return [d, ae.context(s, {
        baseDoc: u
      })];
    try {
      if (!V2(n.state, d) || i.useCircularStructures)
        return d;
    } catch {
      return null;
    }
  }
}, zh = Object.assign(j2, {
  docCache: ir,
  absoluteify: m0,
  clearCache: T2,
  JSONRefError: ai,
  wrapError: dp,
  getDoc: g0,
  split: y0,
  extractFromDoc: v0,
  fetchJSON: _2,
  extract: mp,
  jsonPointerToArray: Yh,
  unescapeJsonPointerToken: b0
});
function m0(e, t) {
  if (!x2.test(e)) {
    if (!t)
      throw new ai(`Tried to resolve a relative URL, without having a basePath. path: '${e}' basePath: '${t}'`);
    return at.resolve(t, e);
  }
  return e;
}
function dp(e, t) {
  let r;
  return e && e.response && e.response.body ? r = `${e.response.body.code} ${e.response.body.message}` : r = e.message, new ai(`Could not resolve reference: ${r}`, t, e);
}
function y0(e) {
  return (e + "").split("#");
}
function v0(e, t) {
  const r = ir[e];
  if (r && !ae.isPromise(r))
    try {
      const n = mp(t, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return g0(e).then((n) => mp(t, n));
}
function T2(e) {
  typeof e < "u" ? delete ir[e] : Object.keys(ir).forEach((t) => {
    delete ir[t];
  });
}
function g0(e) {
  const t = ir[e];
  return t ? ae.isPromise(t) ? t : Promise.resolve(t) : (ir[e] = zh.fetchJSON(e).then((r) => (ir[e] = r, r)), ir[e]);
}
function _2(e) {
  return fetch(e, {
    headers: {
      Accept: XO
    },
    loadSpec: !0
  }).then((t) => t.text()).then((t) => ii.load(t));
}
function mp(e, t) {
  const r = Yh(e);
  if (r.length < 1)
    return t;
  const n = ae.getIn(t, r);
  if (typeof n > "u")
    throw new ai(`Could not resolve pointer: ${e} does not exist in document`, {
      pointer: e
    });
  return n;
}
function Yh(e) {
  if (typeof e != "string")
    throw new TypeError(`Expected a string, got a ${typeof e}`);
  return e[0] === "/" && (e = e.substr(1)), e === "" ? [] : e.split("/").map(b0);
}
function b0(e) {
  return typeof e != "string" ? e : new URLSearchParams(`=${e.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function $0(e) {
  return new URLSearchParams([["", e.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function I2(e) {
  return e.length === 0 ? "" : `/${e.map($0).join("/")}`;
}
const R2 = (e) => !e || e === "/" || e === "#";
function ff(e, t) {
  if (R2(t))
    return !0;
  const r = e.charAt(t.length), n = t.slice(-1);
  return e.indexOf(t) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function F2(e, t, r, n) {
  let i = pv.get(n);
  i || (i = {}, pv.set(n, i));
  const s = I2(r), o = `${t || "<specmap-base>"}#${e}`, a = s.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (t === c && ff(a, e))
    return !0;
  let l = "";
  if (r.some((f) => (l = `${l}/${$0(f)}`, i[l] && i[l].some((p) => ff(p, o) || ff(o, p)))))
    return !0;
  i[a] = (i[a] || []).concat(o);
}
function V2(e, t) {
  const r = [e];
  return t.path.reduce((i, s) => (r.push(i[s]), i[s]), e), n(t.value);
  function n(i) {
    return ae.isObject(i) && (r.indexOf(i) >= 0 || Object.keys(i).some((s) => n(i[s])));
  }
}
const C2 = {
  key: "allOf",
  plugin: (e, t, r, n, i) => {
    if (i.meta && i.meta.$$ref)
      return;
    const s = r.slice(0, -1);
    if (d0(s))
      return;
    if (!Array.isArray(e)) {
      const l = new TypeError("allOf must be an array");
      return l.fullPath = r, l;
    }
    let o = !1, a = i.value;
    if (s.forEach((l) => {
      a && (a = a[l]);
    }), a = se({}, a), Object.keys(a).length === 0)
      return;
    delete a.allOf;
    const c = [];
    return c.push(n.replace(s, {})), e.forEach((l, u) => {
      if (!n.isObject(l)) {
        if (o)
          return null;
        o = !0;
        const h = new TypeError("Elements in allOf must be objects");
        return h.fullPath = r, c.push(h);
      }
      c.push(n.mergeDeep(s, l));
      const f = r.slice(0, -1), p = E2(l, f, {
        getBaseUrlForNodePath: (h) => n.getContext([...r, u, ...h]).baseDoc,
        specmap: n
      });
      c.push(...p);
    }), a.example && c.push(n.remove([].concat(s, "example"))), c.push(n.mergeDeep(s, a)), a.$$ref || c.push(n.remove([].concat(s, "$$ref"))), c;
  }
}, M2 = {
  key: "parameters",
  plugin: (e, t, r, n) => {
    if (Array.isArray(e) && e.length) {
      const i = Object.assign([], e), s = r.slice(0, -1), o = se({}, ae.getIn(n.spec, s));
      for (let a = 0; a < e.length; a += 1) {
        const c = e[a];
        try {
          i[a].default = n.parameterMacro(o, c);
        } catch (l) {
          const u = new Error(l);
          return u.fullPath = r, u;
        }
      }
      return ae.replace(r, i);
    }
    return ae.replace(r, e);
  }
}, k2 = {
  key: "properties",
  plugin: (e, t, r, n) => {
    const i = se({}, e);
    for (const o in e)
      try {
        i[o].default = n.modelPropertyMacro(i[o]);
      } catch (a) {
        const c = new Error(a);
        return c.fullPath = r, c;
      }
    return ae.replace(r, i);
  }
};
class N2 {
  constructor(t) {
    this.root = pf(t || {});
  }
  set(t, r) {
    const n = this.getParent(t, !0);
    if (!n) {
      ja(this.root, r, null);
      return;
    }
    const i = t[t.length - 1], {
      children: s
    } = n;
    if (s[i]) {
      ja(s[i], r, n);
      return;
    }
    s[i] = pf(r, n);
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
      return !s[i] && r && (s[i] = pf(null, n)), s[i];
    }, this.root);
  }
}
function pf(e, t) {
  return ja({
    children: {}
  }, e, t);
}
function ja(e, t, r) {
  return e.value = t || {}, e.protoValue = r ? se(se({}, r.protoValue), e.value) : e.value, Object.keys(e.children).forEach((n) => {
    const i = e.children[n];
    e.children[n] = ja(i, i.value, e);
  }), e;
}
const hv = 100, dv = () => {
};
class D2 {
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
      contextTree: new N2(),
      showDebug: !1,
      allPatches: [],
      // only populated if showDebug is true
      pluginProp: "specMap",
      libMethods: Object.assign(Object.create(this), ae, {
        getInstance: () => this
      }),
      allowMetaPatches: !1
    }, t), this.get = this._get.bind(this), this.getContext = this._getContext.bind(this), this.hasRun = this._hasRun.bind(this), this.wrappedPlugins = this.plugins.map(this.wrapPlugin.bind(this)).filter(ae.isFunction), this.patches.push(ae.add([], this.spec)), this.patches.push(ae.context([], this.context)), this.updatePatches(this.patches);
  }
  debug(t) {
    if (this.debugLevel === t) {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
        n[i - 1] = arguments[i];
      console.log(...n);
    }
  }
  verbose(t) {
    if (this.debugLevel === "verbose") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
        n[i - 1] = arguments[i];
      console.log(`[${t}]   `, ...n);
    }
  }
  wrapPlugin(t, r) {
    const {
      pathDiscriminator: n
    } = this;
    let i = null, s;
    return t[this.pluginProp] ? (i = t, s = t[this.pluginProp]) : ae.isFunction(t) ? s = t : ae.isObject(t) && (s = o(t)), Object.assign(s.bind(i), {
      pluginName: t.name || r,
      isGenerator: ae.isGenerator(s)
    });
    function o(a) {
      const c = (l, u) => Array.isArray(l) ? l.every((f, p) => f === u[p]) : !0;
      return function* (u, f) {
        const p = {};
        for (const d of u.filter(ae.isAdditiveMutation))
          yield* h(d.value, d.path, d);
        function* h(d, m, y) {
          if (!ae.isObject(d))
            a.key === m[m.length - 1] && (yield a.plugin(d, a.key, m, f));
          else {
            const v = m.length - 1, S = m[v], O = m.indexOf("properties"), w = S === "properties" && v === O, E = f.allowMetaPatches && p[d.$$ref];
            for (const j of Object.keys(d)) {
              const P = d[j], M = m.concat(j), g = ae.isObject(P), A = d.$$ref;
              if (E || g && (f.allowMetaPatches && A && (p[A] = !0), yield* h(P, M, y)), !w && j === a.key) {
                const T = c(n, m);
                (!n || T) && (yield a.plugin(P, j, M, f, y));
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
    ae.normalizeArray(t).forEach((r) => {
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
        if (ae.isMutation(r)) {
          this.updateMutations(r);
          return;
        }
      } catch (n) {
        console.error(n), this.errors.push(n);
      }
    });
  }
  updateMutations(t) {
    typeof t.value == "object" && !Array.isArray(t.value) && this.allowMetaPatches && (t.value = se({}, t.value));
    const r = ae.applyPatch(this.state, t, {
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
      const n = se(se({}, t), {}, {
        value: r
      });
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
    return ae.getIn(this.state, t);
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
    if (t.pluginCount = t.pluginCount || {}, t.pluginCount[r] = (t.pluginCount[r] || 0) + 1, t.pluginCount[r] > hv)
      return Promise.resolve({
        spec: t.state,
        errors: t.errors.concat(new Error(`We've reached a hard limit of ${hv} plugin runs`))
      });
    if (r !== this.currentPlugin && this.promisedPatches.length) {
      const s = this.promisedPatches.map((o) => o.value);
      return Promise.all(s.map((o) => o.then(dv, dv))).then(() => this.dispatch());
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
      s && (s = ae.fullyNormalizeArray(s), t.updatePatches(s, r));
    }
  }
}
function L2(e) {
  return new D2(e).dispatch();
}
const nn = {
  refs: zh,
  allOf: C2,
  parameters: M2,
  properties: k2
}, O0 = (e) => e.replace(/\W/gi, "_");
function B2(e, t) {
  let {
    v2OperationIdCompatibilityMode: r
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (r) {
    let n = `${t.toLowerCase()}_${e}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${e.substring(1)}_${t}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${t.toLowerCase()}${O0(e)}`;
}
function Bs(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", {
    v2OperationIdCompatibilityMode: n
  } = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  return !e || typeof e != "object" ? null : (e.operationId || "").replace(/\s/g, "").length ? O0(e.operationId) : B2(t, r, {
    v2OperationIdCompatibilityMode: n
  });
}
function yc(e) {
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
      const l = Bs(c, i, a);
      if (l) {
        n[l] ? n[l].push(c) : n[l] = [c];
        const u = n[l];
        if (u.length > 1)
          u.forEach((f, p) => {
            f.__originalOperationId = f.__originalOperationId || f.operationId, f.operationId = `${l}${p + 1}`;
          });
        else if (typeof c.operationId < "u") {
          const f = u[0];
          f.__originalOperationId = f.__originalOperationId || c.operationId, f.operationId = l;
        }
      }
      if (a !== "parameters") {
        const u = [], f = {};
        for (const p in t)
          (p === "produces" || p === "consumes" || p === "security") && (f[p] = t[p], u.push(f));
        if (o && (f.parameters = o, u.push(f)), u.length) {
          for (const p of u)
            for (const h in p)
              if (!c[h])
                c[h] = p[h];
              else if (h === "parameters")
                for (const d of p[h])
                  c[h].some((y) => y.name && y.name === d.name || y.$ref && y.$ref === d.$ref || y.$$ref && y.$$ref === d.$$ref || y === d) || c[h].push(d);
        }
      }
    }
  }
  return t.$$normalized = !0, e;
}
async function Xh(e) {
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
    useCircularStructures: u
  } = e, f = Kh(e), p = ZO(e);
  return h(t);
  function h(d) {
    f && (nn.refs.docCache[f] = d), nn.refs.fetchJSON = QO(p, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const m = [nn.refs];
    return typeof o == "function" && m.push(nn.parameters), typeof s == "function" && m.push(nn.properties), r !== "strict" && m.push(nn.allOf), L2({
      spec: d,
      context: {
        baseDoc: f
      },
      plugins: m,
      allowMetaPatches: n,
      // allows adding .meta patches, which include adding `$$ref`s to the spec
      pathDiscriminator: i,
      // for lazy resolution
      parameterMacro: o,
      modelPropertyMacro: s,
      useCircularStructures: u
      // eslint-disable-next-line camelcase
    }).then(l ? async (y) => y : yc);
  }
}
function U2() {
  nn.refs.clearCache();
}
const S0 = {
  name: "generic",
  match() {
    return !0;
  },
  normalize(e) {
    let {
      spec: t
    } = e;
    const {
      spec: r
    } = yc({
      spec: t
    });
    return r;
  },
  async resolve(e) {
    return Xh(e);
  }
};
async function q2(e) {
  return Xh(e);
}
const H2 = (e) => {
  try {
    const {
      swagger: t
    } = e;
    return t === "2.0";
  } catch {
    return !1;
  }
}, w0 = (e) => {
  try {
    const {
      openapi: t
    } = e;
    return typeof t == "string" && /^3\.0\.([0123])(?:-rc[012])?$/.test(t);
  } catch {
    return !1;
  }
}, E0 = (e) => {
  try {
    const {
      openapi: t
    } = e;
    return typeof t == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(t);
  } catch {
    return !1;
  }
}, x0 = (e) => w0(e) || E0(e), P0 = {
  name: "openapi-2",
  match(e) {
    let {
      spec: t
    } = e;
    return H2(t);
  },
  normalize(e) {
    let {
      spec: t
    } = e;
    const {
      spec: r
    } = yc({
      spec: t
    });
    return r;
  },
  async resolve(e) {
    return q2(e);
  }
};
async function K2(e) {
  return Xh(e);
}
const A0 = {
  name: "openapi-3-0",
  match(e) {
    let {
      spec: t
    } = e;
    return w0(t);
  },
  normalize(e) {
    let {
      spec: t
    } = e;
    const {
      spec: r
    } = yc({
      spec: t
    });
    return r;
  },
  async resolve(e) {
    return K2(e);
  }
}, G2 = async (e) => {
  const {
    spec: t,
    requestInterceptor: r,
    responseInterceptor: n
  } = e, i = Kh(e), s = ZO(e), o = t || await QO(s, {
    requestInterceptor: r,
    responseInterceptor: n
  })(i), a = se(se({}, e), {}, {
    spec: o
  });
  return e.strategies.find((l) => l.match(a)).resolve(a);
}, j0 = (e) => async (t) => {
  const r = se(se({}, e), t);
  return G2(r);
}, J2 = j0({
  strategies: [A0, P0, S0]
});
var W2 = Array.isArray, En = W2, z2 = typeof Gt == "object" && Gt && Gt.Object === Object && Gt, T0 = z2, Y2 = T0, X2 = typeof self == "object" && self && self.Object === Object && self, Q2 = Y2 || X2 || Function("return this")(), mr = Q2, Z2 = mr, eL = Z2.Symbol, vc = eL, mv = vc, _0 = Object.prototype, tL = _0.hasOwnProperty, rL = _0.toString, Hi = mv ? mv.toStringTag : void 0;
function nL(e) {
  var t = tL.call(e, Hi), r = e[Hi];
  try {
    e[Hi] = void 0;
    var n = !0;
  } catch {
  }
  var i = rL.call(e);
  return n && (t ? e[Hi] = r : delete e[Hi]), i;
}
var iL = nL, sL = Object.prototype, oL = sL.toString;
function aL(e) {
  return oL.call(e);
}
var cL = aL, yv = vc, lL = iL, uL = cL, fL = "[object Null]", pL = "[object Undefined]", vv = yv ? yv.toStringTag : void 0;
function hL(e) {
  return e == null ? e === void 0 ? pL : fL : vv && vv in Object(e) ? lL(e) : uL(e);
}
var Kr = hL;
function dL(e) {
  return e != null && typeof e == "object";
}
var Gr = dL, mL = Kr, yL = Gr, vL = "[object Symbol]";
function gL(e) {
  return typeof e == "symbol" || yL(e) && mL(e) == vL;
}
var Qh = gL, bL = En, $L = Qh, OL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, SL = /^\w*$/;
function wL(e, t) {
  if (bL(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || $L(e) ? !0 : SL.test(e) || !OL.test(e) || t != null && e in Object(t);
}
var EL = wL;
function xL(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var gc = xL, PL = Kr, AL = gc, jL = "[object AsyncFunction]", TL = "[object Function]", _L = "[object GeneratorFunction]", IL = "[object Proxy]";
function RL(e) {
  if (!AL(e))
    return !1;
  var t = PL(e);
  return t == TL || t == _L || t == jL || t == IL;
}
var I0 = RL, FL = mr, VL = FL["__core-js_shared__"], CL = VL, hf = CL, gv = function() {
  var e = /[^.]+$/.exec(hf && hf.keys && hf.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ML(e) {
  return !!gv && gv in e;
}
var kL = ML, NL = Function.prototype, DL = NL.toString;
function LL(e) {
  if (e != null) {
    try {
      return DL.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var R0 = LL, BL = I0, UL = kL, qL = gc, HL = R0, KL = /[\\^$.*+?()[\]{}|]/g, GL = /^\[object .+?Constructor\]$/, JL = Function.prototype, WL = Object.prototype, zL = JL.toString, YL = WL.hasOwnProperty, XL = RegExp(
  "^" + zL.call(YL).replace(KL, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function QL(e) {
  if (!qL(e) || UL(e))
    return !1;
  var t = BL(e) ? XL : GL;
  return t.test(HL(e));
}
var ZL = QL;
function eB(e, t) {
  return e == null ? void 0 : e[t];
}
var tB = eB, rB = ZL, nB = tB;
function iB(e, t) {
  var r = nB(e, t);
  return rB(r) ? r : void 0;
}
var wi = iB, sB = wi, oB = sB(Object, "create"), bc = oB, bv = bc;
function aB() {
  this.__data__ = bv ? bv(null) : {}, this.size = 0;
}
var cB = aB;
function lB(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var uB = lB, fB = bc, pB = "__lodash_hash_undefined__", hB = Object.prototype, dB = hB.hasOwnProperty;
function mB(e) {
  var t = this.__data__;
  if (fB) {
    var r = t[e];
    return r === pB ? void 0 : r;
  }
  return dB.call(t, e) ? t[e] : void 0;
}
var yB = mB, vB = bc, gB = Object.prototype, bB = gB.hasOwnProperty;
function $B(e) {
  var t = this.__data__;
  return vB ? t[e] !== void 0 : bB.call(t, e);
}
var OB = $B, SB = bc, wB = "__lodash_hash_undefined__";
function EB(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = SB && t === void 0 ? wB : t, this;
}
var xB = EB, PB = cB, AB = uB, jB = yB, TB = OB, _B = xB;
function Ei(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ei.prototype.clear = PB;
Ei.prototype.delete = AB;
Ei.prototype.get = jB;
Ei.prototype.has = TB;
Ei.prototype.set = _B;
var IB = Ei;
function RB() {
  this.__data__ = [], this.size = 0;
}
var FB = RB;
function VB(e, t) {
  return e === t || e !== e && t !== t;
}
var F0 = VB, CB = F0;
function MB(e, t) {
  for (var r = e.length; r--; )
    if (CB(e[r][0], t))
      return r;
  return -1;
}
var $c = MB, kB = $c, NB = Array.prototype, DB = NB.splice;
function LB(e) {
  var t = this.__data__, r = kB(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : DB.call(t, r, 1), --this.size, !0;
}
var BB = LB, UB = $c;
function qB(e) {
  var t = this.__data__, r = UB(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var HB = qB, KB = $c;
function GB(e) {
  return KB(this.__data__, e) > -1;
}
var JB = GB, WB = $c;
function zB(e, t) {
  var r = this.__data__, n = WB(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var YB = zB, XB = FB, QB = BB, ZB = HB, e3 = JB, t3 = YB;
function xi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
xi.prototype.clear = XB;
xi.prototype.delete = QB;
xi.prototype.get = ZB;
xi.prototype.has = e3;
xi.prototype.set = t3;
var Oc = xi, r3 = wi, n3 = mr, i3 = r3(n3, "Map"), Zh = i3, $v = IB, s3 = Oc, o3 = Zh;
function a3() {
  this.size = 0, this.__data__ = {
    hash: new $v(),
    map: new (o3 || s3)(),
    string: new $v()
  };
}
var c3 = a3;
function l3(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var u3 = l3, f3 = u3;
function p3(e, t) {
  var r = e.__data__;
  return f3(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Sc = p3, h3 = Sc;
function d3(e) {
  var t = h3(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var m3 = d3, y3 = Sc;
function v3(e) {
  return y3(this, e).get(e);
}
var g3 = v3, b3 = Sc;
function $3(e) {
  return b3(this, e).has(e);
}
var O3 = $3, S3 = Sc;
function w3(e, t) {
  var r = S3(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var E3 = w3, x3 = c3, P3 = m3, A3 = g3, j3 = O3, T3 = E3;
function Pi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Pi.prototype.clear = x3;
Pi.prototype.delete = P3;
Pi.prototype.get = A3;
Pi.prototype.has = j3;
Pi.prototype.set = T3;
var ed = Pi, V0 = ed, _3 = "Expected a function";
function td(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(_3);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var o = e.apply(this, n);
    return r.cache = s.set(i, o) || s, o;
  };
  return r.cache = new (td.Cache || V0)(), r;
}
td.Cache = V0;
var I3 = td, R3 = I3, F3 = 500;
function V3(e) {
  var t = R3(e, function(n) {
    return r.size === F3 && r.clear(), n;
  }), r = t.cache;
  return t;
}
var C3 = V3, M3 = C3, k3 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, N3 = /\\(\\)?/g, D3 = M3(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(k3, function(r, n, i, s) {
    t.push(i ? s.replace(N3, "$1") : n || r);
  }), t;
}), L3 = D3;
function B3(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var U3 = B3, Ov = vc, q3 = U3, H3 = En, K3 = Qh, G3 = 1 / 0, Sv = Ov ? Ov.prototype : void 0, wv = Sv ? Sv.toString : void 0;
function C0(e) {
  if (typeof e == "string")
    return e;
  if (H3(e))
    return q3(e, C0) + "";
  if (K3(e))
    return wv ? wv.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -G3 ? "-0" : t;
}
var J3 = C0, W3 = J3;
function z3(e) {
  return e == null ? "" : W3(e);
}
var Y3 = z3, X3 = En, Q3 = EL, Z3 = L3, eU = Y3;
function tU(e, t) {
  return X3(e) ? e : Q3(e, t) ? [e] : Z3(eU(e));
}
var rU = tU, nU = Qh, iU = 1 / 0;
function sU(e) {
  if (typeof e == "string" || nU(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -iU ? "-0" : t;
}
var oU = sU, aU = rU, cU = oU;
function lU(e, t) {
  t = aU(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[cU(t[r++])];
  return r && r == n ? e : void 0;
}
var uU = lU, fU = uU;
function pU(e, t, r) {
  var n = e == null ? void 0 : fU(e, t);
  return n === void 0 ? r : n;
}
var hU = pU;
const Zi = /* @__PURE__ */ _e(hU), dU = async function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    returnEntireTree: n,
    baseDoc: i,
    requestInterceptor: s,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: l,
    strategies: u
  } = r, f = {
    spec: e,
    pathDiscriminator: t,
    baseDoc: i,
    requestInterceptor: s,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: l,
    strategies: u
  }, h = u.find((m) => m.match(f)).normalize(f), d = await J2(se(se({}, f), {}, {
    spec: h,
    allowMetaPatches: !0,
    skipNormalization: !0
  }));
  return !n && Array.isArray(t) && t.length && (d.spec = Zi(d.spec, t) || null), d;
}, mU = (e) => async function(t, r) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = se(se({}, e), n);
  return dU(t, r, i);
};
var yU = function() {
  return !1;
};
const rd = yU;
var vU = function() {
  return !0;
};
const Jr = vU;
function me(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function ce(e) {
  return function t(r) {
    return arguments.length === 0 || me(r) ? t : e.apply(this, arguments);
  };
}
function B(e) {
  return function t(r, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return me(r) ? t : ce(function(i) {
          return e(r, i);
        });
      default:
        return me(r) && me(n) ? t : me(r) ? ce(function(i) {
          return e(i, n);
        }) : me(n) ? ce(function(i) {
          return e(r, i);
        }) : e(r, n);
    }
  };
}
function gU(e, t) {
  e = e || [], t = t || [];
  var r, n = e.length, i = t.length, s = [];
  for (r = 0; r < n; )
    s[s.length] = e[r], r += 1;
  for (r = 0; r < i; )
    s[s.length] = t[r], r += 1;
  return s;
}
function wc(e, t) {
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
      return function(r, n, i, s, o, a, c, l, u) {
        return t.apply(this, arguments);
      };
    case 10:
      return function(r, n, i, s, o, a, c, l, u, f) {
        return t.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function Ec(e, t, r) {
  return function() {
    for (var n = [], i = 0, s = e, o = 0; o < t.length || i < arguments.length; ) {
      var a;
      o < t.length && (!me(t[o]) || i >= arguments.length) ? a = t[o] : (a = arguments[i], i += 1), n[o] = a, me(a) || (s -= 1), o += 1;
    }
    return s <= 0 ? r.apply(this, n) : wc(s, Ec(e, n, r));
  };
}
var bU = /* @__PURE__ */ B(function(t, r) {
  return t === 1 ? ce(r) : wc(t, Ec(t, [], r));
});
const le = bU;
function nt(e) {
  return function t(r, n, i) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return me(r) ? t : B(function(s, o) {
          return e(r, s, o);
        });
      case 2:
        return me(r) && me(n) ? t : me(r) ? B(function(s, o) {
          return e(s, n, o);
        }) : me(n) ? B(function(s, o) {
          return e(r, s, o);
        }) : ce(function(s) {
          return e(r, n, s);
        });
      default:
        return me(r) && me(n) && me(i) ? t : me(r) && me(n) ? B(function(s, o) {
          return e(s, o, i);
        }) : me(r) && me(i) ? B(function(s, o) {
          return e(s, n, o);
        }) : me(n) && me(i) ? B(function(s, o) {
          return e(r, s, o);
        }) : me(r) ? ce(function(s) {
          return e(s, n, i);
        }) : me(n) ? ce(function(s) {
          return e(r, s, i);
        }) : me(i) ? ce(function(s) {
          return e(r, n, s);
        }) : e(r, n, i);
    }
  };
}
const Us = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function $U(e) {
  return e != null && typeof e["@@transducer/step"] == "function";
}
function Wr(e, t, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!Us(n)) {
      for (var i = 0; i < e.length; ) {
        if (typeof n[e[i]] == "function")
          return n[e[i]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        i += 1;
      }
      if ($U(n)) {
        var s = t.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return s(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function xc(e) {
  return e && e["@@transducer/reduced"] ? e : {
    "@@transducer/value": e,
    "@@transducer/reduced": !0
  };
}
const ft = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(e) {
    return this.xf["@@transducer/result"](e);
  }
};
var OU = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t, this.all = !0;
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = function(t) {
    return this.all && (t = this.xf["@@transducer/step"](t, !0)), this.xf["@@transducer/result"](t);
  }, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(r) || (this.all = !1, t = xc(this.xf["@@transducer/step"](t, !1))), t;
  }, e;
}(), SU = /* @__PURE__ */ B(function(t, r) {
  return new OU(t, r);
}), wU = /* @__PURE__ */ B(
  /* @__PURE__ */ Wr(["all"], SU, function(t, r) {
    for (var n = 0; n < r.length; ) {
      if (!t(r[n]))
        return !1;
      n += 1;
    }
    return !0;
  })
);
const nd = wU;
var id = /* @__PURE__ */ B(function(t, r) {
  return r > t ? r : t;
});
function es(e, t) {
  for (var r = 0, n = t.length, i = Array(n); r < n; )
    i[r] = e(t[r]), r += 1;
  return i;
}
function sd(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
var EU = /* @__PURE__ */ ce(function(t) {
  return Us(t) ? !0 : !t || typeof t != "object" || sd(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
}), xU = /* @__PURE__ */ function() {
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
function PU(e) {
  return new xU(e);
}
var qs = /* @__PURE__ */ B(function(t, r) {
  return wc(t.length, function() {
    return t.apply(r, arguments);
  });
});
function AU(e, t, r) {
  for (var n = 0, i = r.length; n < i; ) {
    if (t = e["@@transducer/step"](t, r[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
function Ev(e, t, r) {
  for (var n = r.next(); !n.done; ) {
    if (t = e["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return e["@@transducer/result"](t);
}
function xv(e, t, r, n) {
  return e["@@transducer/result"](r[n](qs(e["@@transducer/step"], e), t));
}
var Pv = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function zr(e, t, r) {
  if (typeof e == "function" && (e = PU(e)), EU(r))
    return AU(e, t, r);
  if (typeof r["fantasy-land/reduce"] == "function")
    return xv(e, t, r, "fantasy-land/reduce");
  if (r[Pv] != null)
    return Ev(e, t, r[Pv]());
  if (typeof r.next == "function")
    return Ev(e, t, r);
  if (typeof r.reduce == "function")
    return xv(e, t, r, "reduce");
  throw new TypeError("reduce: list must be array or iterable");
}
var jU = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t;
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = ft.result, e.prototype["@@transducer/step"] = function(t, r) {
    return this.xf["@@transducer/step"](t, this.f(r));
  }, e;
}(), TU = /* @__PURE__ */ B(function(t, r) {
  return new jU(t, r);
});
function vt(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var Av = Object.prototype.toString, M0 = /* @__PURE__ */ function() {
  return Av.call(arguments) === "[object Arguments]" ? function(t) {
    return Av.call(t) === "[object Arguments]";
  } : function(t) {
    return vt("callee", t);
  };
}(), _U = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), jv = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Tv = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), IU = function(t, r) {
  for (var n = 0; n < t.length; ) {
    if (t[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, zt = /* @__PURE__ */ ce(typeof Object.keys == "function" && !Tv ? function(t) {
  return Object(t) !== t ? [] : Object.keys(t);
} : function(t) {
  if (Object(t) !== t)
    return [];
  var r, n, i = [], s = Tv && M0(t);
  for (r in t)
    vt(r, t) && (!s || r !== "length") && (i[i.length] = r);
  if (_U)
    for (n = jv.length - 1; n >= 0; )
      r = jv[n], vt(r, t) && !IU(i, r) && (i[i.length] = r), n -= 1;
  return i;
}), RU = /* @__PURE__ */ B(
  /* @__PURE__ */ Wr(["fantasy-land/map", "map"], TU, function(t, r) {
    switch (Object.prototype.toString.call(r)) {
      case "[object Function]":
        return le(r.length, function() {
          return t.call(this, r.apply(this, arguments));
        });
      case "[object Object]":
        return zr(function(n, i) {
          return n[i] = t(r[i]), n;
        }, {}, zt(r));
      default:
        return es(t, r);
    }
  })
);
const Hs = RU, Pc = Number.isInteger || function(t) {
  return t << 0 === t;
};
var FU = /* @__PURE__ */ B(function(t, r) {
  var n = t < 0 ? r.length + t : t;
  return sd(r) ? r.charAt(n) : r[n];
});
const Ac = FU;
var Ks = /* @__PURE__ */ B(function(t, r) {
  if (r != null)
    return Pc(t) ? Ac(t, r) : r[t];
}), od = /* @__PURE__ */ B(function(t, r) {
  return Hs(Ks(t), r);
}), VU = /* @__PURE__ */ nt(zr);
const xn = VU;
var CU = /* @__PURE__ */ ce(function(t) {
  return le(xn(id, 0, od("length", t)), function() {
    for (var r = 0, n = t.length; r < n; ) {
      if (!t[r].apply(this, arguments))
        return !1;
      r += 1;
    }
    return !0;
  });
});
const MU = CU;
var kU = /* @__PURE__ */ ce(function(t) {
  return function() {
    return t;
  };
});
const U = kU;
var NU = /* @__PURE__ */ B(function(t, r) {
  return t && r;
}), DU = /* @__PURE__ */ ce(function(t) {
  return le(xn(id, 0, od("length", t)), function() {
    for (var r = 0, n = t.length; r < n; ) {
      if (t[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
const LU = DU;
var BU = /* @__PURE__ */ B(function(t, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](t) : typeof t.ap == "function" ? t.ap(r) : typeof t == "function" ? function(n) {
    return t(n)(r(n));
  } : zr(function(n, i) {
    return gU(n, Hs(i, r));
  }, [], t);
}), UU = /* @__PURE__ */ B(function(t, r) {
  return t.apply(this, r);
});
const qU = UU;
var HU = /* @__PURE__ */ ce(function(t) {
  for (var r = zt(t), n = r.length, i = [], s = 0; s < n; )
    i[s] = t[r[s]], s += 1;
  return i;
});
const KU = HU;
function GU(e, t, r) {
  if (Pc(e) && Us(r)) {
    var n = [].concat(r);
    return n[e] = t, n;
  }
  var i = {};
  for (var s in r)
    i[s] = r[s];
  return i[e] = t, i;
}
var gs = /* @__PURE__ */ ce(function(t) {
  return t == null;
}), JU = /* @__PURE__ */ nt(function e(t, r, n) {
  if (t.length === 0)
    return r;
  var i = t[0];
  if (t.length > 1) {
    var s = !gs(n) && vt(i, n) ? n[i] : Pc(t[1]) ? [] : {};
    r = e(Array.prototype.slice.call(t, 1), r, s);
  }
  return GU(i, r, n);
});
const WU = JU;
function ad(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object Function]" || t === "[object AsyncFunction]" || t === "[object GeneratorFunction]" || t === "[object AsyncGeneratorFunction]";
}
var zU = /* @__PURE__ */ B(function(t, r) {
  var n = le(t, r);
  return le(t, function() {
    return zr(BU, Hs(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}), YU = /* @__PURE__ */ ce(function(t) {
  return zU(t.length, t);
});
const cd = YU;
var XU = /* @__PURE__ */ B(function(t, r) {
  return ad(t) ? function() {
    return t.apply(this, arguments) && r.apply(this, arguments);
  } : cd(NU)(t, r);
});
const Pn = XU;
function k0(e) {
  return new RegExp(e.source, (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : ""));
}
var QU = /* @__PURE__ */ ce(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
const wt = QU;
function N0(e, t, r, n) {
  var i = function(o) {
    for (var a = t.length, c = 0; c < a; ) {
      if (e === t[c])
        return r[c];
      c += 1;
    }
    t[c] = e, r[c] = o;
    for (var l in e)
      e.hasOwnProperty(l) && (o[l] = n ? N0(e[l], t, r, !0) : e[l]);
    return o;
  };
  switch (wt(e)) {
    case "Object":
      return i(Object.create(Object.getPrototypeOf(e)));
    case "Array":
      return i([]);
    case "Date":
      return new Date(e.valueOf());
    case "RegExp":
      return k0(e);
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
var ZU = /* @__PURE__ */ ce(function(t) {
  return function(r, n) {
    return t(r, n) ? -1 : t(n, r) ? 1 : 0;
  };
});
const eq = ZU;
var tq = /* @__PURE__ */ ce(function(t) {
  return !t;
}), rq = /* @__PURE__ */ cd(tq);
const Ai = rq;
function nq(e, t) {
  return function() {
    return t.call(this, e.apply(this, arguments));
  };
}
function ld(e, t) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return t();
    var n = arguments[r - 1];
    return Us(n) || typeof n[e] != "function" ? t.apply(this, arguments) : n[e].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var Gs = /* @__PURE__ */ nt(
  /* @__PURE__ */ ld("slice", function(t, r, n) {
    return Array.prototype.slice.call(n, t, r);
  })
), iq = /* @__PURE__ */ ce(
  /* @__PURE__ */ ld(
    "tail",
    /* @__PURE__ */ Gs(1, 1 / 0)
  )
);
const D0 = iq;
function Ee() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return wc(arguments[0].length, xn(nq, arguments[0], D0(arguments)));
}
var sq = /* @__PURE__ */ Ac(0);
const oq = sq;
function aq(e) {
  return e;
}
var cq = /* @__PURE__ */ ce(aq);
const lq = cq;
function _v(e) {
  for (var t = [], r; !(r = e.next()).done; )
    t.push(r.value);
  return t;
}
function Ta(e, t, r) {
  for (var n = 0, i = r.length; n < i; ) {
    if (e(t, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function uq(e) {
  var t = String(e).match(/^function (\w*)/);
  return t == null ? "" : t[1];
}
function fq(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
const ea = typeof Object.is == "function" ? Object.is : fq;
function Iv(e, t, r, n) {
  var i = _v(e), s = _v(t);
  function o(a, c) {
    return ud(a, c, r.slice(), n.slice());
  }
  return !Ta(function(a, c) {
    return !Ta(o, c, a);
  }, s, i);
}
function ud(e, t, r, n) {
  if (ea(e, t))
    return !0;
  var i = wt(e);
  if (i !== wt(t))
    return !1;
  if (typeof e["fantasy-land/equals"] == "function" || typeof t["fantasy-land/equals"] == "function")
    return typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t) && typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e);
  if (typeof e.equals == "function" || typeof t.equals == "function")
    return typeof e.equals == "function" && e.equals(t) && typeof t.equals == "function" && t.equals(e);
  switch (i) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof e.constructor == "function" && uq(e.constructor) === "Promise")
        return e === t;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof e == typeof t && ea(e.valueOf(), t.valueOf())))
        return !1;
      break;
    case "Date":
      if (!ea(e.valueOf(), t.valueOf()))
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
      return e.size !== t.size ? !1 : Iv(e.entries(), t.entries(), r.concat([e]), n.concat([t]));
    case "Set":
      return e.size !== t.size ? !1 : Iv(e.values(), t.values(), r.concat([e]), n.concat([t]));
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
  var o = zt(e);
  if (o.length !== zt(t).length)
    return !1;
  var a = r.concat([e]), c = n.concat([t]);
  for (s = o.length - 1; s >= 0; ) {
    var l = o[s];
    if (!(vt(l, t) && ud(t[l], e[l], a, c)))
      return !1;
    s -= 1;
  }
  return !0;
}
var pq = /* @__PURE__ */ B(function(t, r) {
  return ud(t, r, [], []);
});
const yr = pq;
function hq(e, t, r) {
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
    if (yr(e[r], t))
      return r;
    r += 1;
  }
  return -1;
}
function _a(e, t) {
  return hq(t, e, 0) >= 0;
}
function df(e) {
  var t = e.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + t.replace(/"/g, '\\"') + '"';
}
var Ki = function(t) {
  return (t < 10 ? "0" : "") + t;
}, dq = typeof Date.prototype.toISOString == "function" ? function(t) {
  return t.toISOString();
} : function(t) {
  return t.getUTCFullYear() + "-" + Ki(t.getUTCMonth() + 1) + "-" + Ki(t.getUTCDate()) + "T" + Ki(t.getUTCHours()) + ":" + Ki(t.getUTCMinutes()) + ":" + Ki(t.getUTCSeconds()) + "." + (t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function L0(e) {
  return function() {
    return !e.apply(this, arguments);
  };
}
function mq(e, t) {
  for (var r = 0, n = t.length, i = []; r < n; )
    e(t[r]) && (i[i.length] = t[r]), r += 1;
  return i;
}
function Ia(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
var yq = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t;
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = ft.result, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(r) ? this.xf["@@transducer/step"](t, r) : t;
  }, e;
}(), vq = /* @__PURE__ */ B(function(t, r) {
  return new yq(t, r);
}), gq = /* @__PURE__ */ B(
  /* @__PURE__ */ Wr(["fantasy-land/filter", "filter"], vq, function(e, t) {
    return Ia(t) ? zr(function(r, n) {
      return e(t[n]) && (r[n] = t[n]), r;
    }, {}, zt(t)) : (
      // else
      mq(e, t)
    );
  })
), bq = /* @__PURE__ */ B(function(t, r) {
  return gq(L0(t), r);
});
function B0(e, t) {
  var r = function(o) {
    var a = t.concat([e]);
    return _a(o, a) ? "<Circular>" : B0(o, a);
  }, n = function(s, o) {
    return es(function(a) {
      return df(a) + ": " + r(s[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(e)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + es(r, e).join(", ") + "))";
    case "[object Array]":
      return "[" + es(r, e).concat(n(e, bq(function(s) {
        return /^\d+$/.test(s);
      }, zt(e)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof e == "object" ? "new Boolean(" + r(e.valueOf()) + ")" : e.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(e.valueOf()) ? r(NaN) : df(dq(e))) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof e == "object" ? "new Number(" + r(e.valueOf()) + ")" : 1 / e === -1 / 0 ? "-0" : e.toString(10);
    case "[object String]":
      return typeof e == "object" ? "new String(" + r(e.valueOf()) + ")" : df(e);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof e.toString == "function") {
        var i = e.toString();
        if (i !== "[object Object]")
          return i;
      }
      return "{" + n(e, zt(e)).join(", ") + "}";
  }
}
var $q = /* @__PURE__ */ ce(function(t) {
  return B0(t, []);
});
const Ra = $q;
var Oq = /* @__PURE__ */ ce(function(t) {
  return le(t.length, t);
});
const jc = Oq;
var Sq = /* @__PURE__ */ B(function(t, r) {
  return le(xn(id, 0, od("length", r)), function() {
    var n = arguments, i = this;
    return t.apply(i, es(function(s) {
      return s.apply(i, n);
    }, r));
  });
});
const wq = Sq;
var Eq = /* @__PURE__ */ function() {
  function e(t, r, n, i) {
    this.valueFn = t, this.valueAcc = r, this.keyFn = n, this.xf = i, this.inputs = {};
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = function(t) {
    var r;
    for (r in this.inputs)
      if (vt(r, this.inputs) && (t = this.xf["@@transducer/step"](t, this.inputs[r]), t["@@transducer/reduced"])) {
        t = t["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](t);
  }, e.prototype["@@transducer/step"] = function(t, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, this.valueAcc], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), t;
  }, e;
}(), xq = /* @__PURE__ */ Ec(4, [], function(t, r, n, i) {
  return new Eq(t, r, n, i);
}), Pq = /* @__PURE__ */ Ec(
  4,
  [],
  /* @__PURE__ */ Wr([], xq, function(t, r, n, i) {
    return zr(function(s, o) {
      var a = n(o), c = t(vt(a, s) ? s[a] : N0(r, [], [], !1), o);
      return c && c["@@transducer/reduced"] ? xc(s) : (s[a] = c, s);
    }, {}, i);
  })
), Aq = /* @__PURE__ */ B(function(t, r) {
  return r == null || r !== r ? t : r;
});
const gn = Aq;
var jq = /* @__PURE__ */ function() {
  function e() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return e.prototype.add = function(t) {
    return !Rv(t, !0, this);
  }, e.prototype.has = function(t) {
    return Rv(t, !1, this);
  }, e;
}();
function Rv(e, t, r) {
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
      return r._nativeSet !== null ? t ? (i = r._nativeSet.size, r._nativeSet.add(e), s = r._nativeSet.size, s === i) : r._nativeSet.has(e) : n in r._items ? _a(e, r._items[n]) ? !0 : (t && r._items[n].push(e), !1) : (t && (r._items[n] = [e]), !1);
    case "undefined":
      return r._items[n] ? !0 : (t && (r._items[n] = !0), !1);
    case "object":
      if (e === null)
        return r._items.null ? !0 : (t && (r._items.null = !0), !1);
    default:
      return n = Object.prototype.toString.call(e), n in r._items ? _a(e, r._items[n]) ? !0 : (t && r._items[n].push(e), !1) : (t && (r._items[n] = [e]), !1);
  }
}
var Tq = /* @__PURE__ */ B(function(t, r) {
  for (var n = [], i = 0, s = t.length, o = r.length, a = new jq(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; i < s; )
    a.add(t[i]) && (n[n.length] = t[i]), i += 1;
  return n;
});
const _q = Tq;
var Iq = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.n = t, this.i = 0;
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = ft.result, e.prototype["@@transducer/step"] = function(t, r) {
    this.i += 1;
    var n = this.n === 0 ? t : this.xf["@@transducer/step"](t, r);
    return this.n >= 0 && this.i >= this.n ? xc(n) : n;
  }, e;
}(), Rq = /* @__PURE__ */ B(function(t, r) {
  return new Iq(t, r);
}), Fq = /* @__PURE__ */ B(
  /* @__PURE__ */ Wr(["take"], Rq, function(t, r) {
    return Gs(0, t < 0 ? 1 / 0 : t, r);
  })
);
function Vq(e, t) {
  for (var r = t.length - 1; r >= 0 && e(t[r]); )
    r -= 1;
  return Gs(0, r + 1, t);
}
var Cq = /* @__PURE__ */ function() {
  function e(t, r) {
    this.f = t, this.retained = [], this.xf = r;
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = function(t) {
    return this.retained = null, this.xf["@@transducer/result"](t);
  }, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(r) ? this.retain(t, r) : this.flush(t, r);
  }, e.prototype.flush = function(t, r) {
    return t = zr(this.xf["@@transducer/step"], t, this.retained), this.retained = [], this.xf["@@transducer/step"](t, r);
  }, e.prototype.retain = function(t, r) {
    return this.retained.push(r), t;
  }, e;
}(), Mq = /* @__PURE__ */ B(function(t, r) {
  return new Cq(t, r);
}), kq = /* @__PURE__ */ B(
  /* @__PURE__ */ Wr([], Mq, Vq)
);
const Nq = kq;
var Dq = /* @__PURE__ */ Ac(-1);
const Js = Dq;
var Lq = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t;
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = ft.result, e.prototype["@@transducer/step"] = function(t, r) {
    if (this.f) {
      if (this.f(r))
        return t;
      this.f = null;
    }
    return this.xf["@@transducer/step"](t, r);
  }, e;
}(), Bq = /* @__PURE__ */ B(function(t, r) {
  return new Lq(t, r);
}), Uq = /* @__PURE__ */ B(
  /* @__PURE__ */ Wr(["dropWhile"], Bq, function(t, r) {
    for (var n = 0, i = r.length; n < i && t(r[n]); )
      n += 1;
    return Gs(n, 1 / 0, r);
  })
);
const qq = Uq;
var Hq = /* @__PURE__ */ B(function(t, r) {
  return t || r;
}), Kq = /* @__PURE__ */ B(function(t, r) {
  return ad(t) ? function() {
    return t.apply(this, arguments) || r.apply(this, arguments);
  } : cd(Hq)(t, r);
});
const Gq = Kq;
function Jq(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object Uint8ClampedArray]" || t === "[object Int8Array]" || t === "[object Uint8Array]" || t === "[object Int16Array]" || t === "[object Uint16Array]" || t === "[object Int32Array]" || t === "[object Uint32Array]" || t === "[object Float32Array]" || t === "[object Float64Array]" || t === "[object BigInt64Array]" || t === "[object BigUint64Array]";
}
var Wq = /* @__PURE__ */ ce(function(t) {
  return t != null && typeof t["fantasy-land/empty"] == "function" ? t["fantasy-land/empty"]() : t != null && t.constructor != null && typeof t.constructor["fantasy-land/empty"] == "function" ? t.constructor["fantasy-land/empty"]() : t != null && typeof t.empty == "function" ? t.empty() : t != null && t.constructor != null && typeof t.constructor.empty == "function" ? t.constructor.empty() : Us(t) ? [] : sd(t) ? "" : Ia(t) ? {} : M0(t) ? function() {
    return arguments;
  }() : Jq(t) ? t.constructor.from("") : void 0;
}), zq = /* @__PURE__ */ ce(function(t) {
  return le(t.length, function(r, n) {
    var i = Array.prototype.slice.call(arguments, 0);
    return i[0] = n, i[1] = r, t.apply(this, i);
  });
});
const Yq = zq;
var Xq = /* @__PURE__ */ B(
  /* @__PURE__ */ ld(
    "groupBy",
    /* @__PURE__ */ Pq(function(e, t) {
      return e.push(t), e;
    }, [])
  )
);
const Qq = Xq;
var Zq = /* @__PURE__ */ B(function(t, r) {
  if (t.length === 0 || gs(r))
    return !1;
  for (var n = r, i = 0; i < t.length; )
    if (!gs(n) && vt(t[i], n))
      n = n[t[i]], i += 1;
    else
      return !1;
  return !0;
}), e4 = /* @__PURE__ */ B(function(t, r) {
  return Zq([t], r);
});
const cn = e4;
var t4 = /* @__PURE__ */ B(function(t, r) {
  return gs(r) ? !1 : t in r;
});
const ts = t4;
var r4 = /* @__PURE__ */ B(ea);
const Yr = r4;
var n4 = /* @__PURE__ */ nt(function(t, r, n) {
  return le(Math.max(t.length, r.length, n.length), function() {
    return t.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
});
const fd = n4;
var i4 = /* @__PURE__ */ B(_a);
const s4 = i4;
var o4 = /* @__PURE__ */ Gs(0, -1);
const a4 = o4;
var c4 = /* @__PURE__ */ B(function(t, r) {
  return le(t + 1, function() {
    var n = arguments[t];
    if (n != null && ad(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, t));
    throw new TypeError(Ra(n) + ' does not have a method named "' + r + '"');
  });
});
const pd = c4;
var l4 = /* @__PURE__ */ ce(function(t) {
  return t != null && yr(t, Wq(t));
});
const Ws = l4;
var u4 = /* @__PURE__ */ pd(1, "join");
const U0 = u4;
function Fv(e) {
  return Object.prototype.toString.call(e) === "[object Number]";
}
var f4 = /* @__PURE__ */ B(function(t, r) {
  return function(n) {
    return function(i) {
      return Hs(function(s) {
        return r(s, i);
      }, n(t(i)));
    };
  };
});
const p4 = f4;
var h4 = /* @__PURE__ */ B(function(t, r) {
  return t.map(function(n) {
    for (var i = r, s = 0, o; s < n.length; ) {
      if (i == null)
        return;
      o = n[s], i = Pc(o) ? Ac(o, i) : i[o], s += 1;
    }
    return i;
  });
}), lt = /* @__PURE__ */ B(function(t, r) {
  return h4([t], r)[0];
}), d4 = /* @__PURE__ */ B(function(t, r) {
  return zr(function(n, i) {
    return n[i] = t(r[i], i, r), n;
  }, {}, zt(r));
});
const m4 = d4;
var y4 = /* @__PURE__ */ nt(function(t, r, n) {
  var i = {}, s;
  for (s in r)
    vt(s, r) && (i[s] = vt(s, n) ? t(s, r[s], n[s]) : r[s]);
  for (s in n)
    vt(s, n) && !vt(s, i) && (i[s] = n[s]);
  return i;
}), v4 = /* @__PURE__ */ nt(function e(t, r, n) {
  return y4(function(i, s, o) {
    return Ia(s) && Ia(o) ? e(t, s, o) : t(i, s, o);
  }, r, n);
}), g4 = /* @__PURE__ */ B(function(t, r) {
  return v4(function(n, i, s) {
    return s;
  }, t, r);
});
const b4 = g4;
var $4 = /* @__PURE__ */ B(function(t, r) {
  return nd(L0(t), r);
});
const yp = $4;
var q0 = function(e) {
  return {
    value: e,
    map: function(t) {
      return q0(t(e));
    }
  };
}, O4 = /* @__PURE__ */ nt(function(t, r, n) {
  return t(function(i) {
    return q0(r(i));
  })(n).value;
});
const S4 = O4;
var w4 = /* @__PURE__ */ nt(function(t, r, n) {
  return gn(t, lt(r, n));
});
const H0 = w4;
var E4 = /* @__PURE__ */ nt(function(t, r, n) {
  return t(lt(r, n));
});
const ci = E4;
var x4 = /* @__PURE__ */ B(function(t, r) {
  for (var n = {}, i = 0; i < t.length; )
    t[i] in r && (n[t[i]] = r[t[i]]), i += 1;
  return n;
});
const K0 = x4;
var P4 = /* @__PURE__ */ nt(function(t, r, n) {
  return yr(r, Ks(t, n));
});
const Tc = P4;
var A4 = /* @__PURE__ */ nt(function(t, r, n) {
  return gn(t, Ks(r, n));
});
const Kn = A4;
var j4 = /* @__PURE__ */ nt(function(t, r, n) {
  return t(Ks(r, n));
});
const T4 = j4;
var _4 = /* @__PURE__ */ B(function(t, r) {
  if (!(Fv(t) && Fv(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = [], i = t; i < r; )
    n.push(i), i += 1;
  return n;
});
const I4 = _4;
var R4 = /* @__PURE__ */ ce(xc);
const F4 = R4;
var V4 = /* @__PURE__ */ nt(function(t, r, n) {
  return n.replace(t, r);
});
const li = V4;
var C4 = /* @__PURE__ */ B(function(t, r) {
  return Array.prototype.slice.call(r, 0).sort(t);
});
const M4 = C4;
var k4 = /* @__PURE__ */ pd(1, "split");
const hd = k4;
var N4 = /* @__PURE__ */ B(function(e, t) {
  return yr(Fq(e.length, t), e);
});
const G0 = N4;
function D4(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
var L4 = /* @__PURE__ */ B(function(t, r) {
  if (!D4(t))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + Ra(t));
  return k0(t).test(r);
});
const _c = L4;
var B4 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.pred = t, this.items = [];
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = ft.result, e.prototype["@@transducer/step"] = function(t, r) {
    return Ta(this.pred, r, this.items) ? t : (this.items.push(r), this.xf["@@transducer/step"](t, r));
  }, e;
}(), U4 = /* @__PURE__ */ B(function(t, r) {
  return new B4(t, r);
}), q4 = /* @__PURE__ */ B(
  /* @__PURE__ */ Wr([], U4, function(e, t) {
    for (var r = 0, n = t.length, i = [], s; r < n; )
      s = t[r], Ta(e, s, i) || (i[i.length] = s), r += 1;
    return i;
  })
);
const H4 = q4;
var K4 = /* @__PURE__ */ nt(function(t, r, n) {
  return t(n) ? r(n) : n;
});
const G4 = K4;
var J4 = U(void 0);
const zs = J4;
var W4 = yr(zs());
const vr = W4;
var z4 = Ai(vr);
const Fa = z4;
var Y4 = yr(null);
const dd = Y4;
var X4 = Ai(dd);
const J0 = X4;
var Q4 = Ai(gs);
const Z4 = Q4;
var eH = le(1, Ee(wt, Yr("GeneratorFunction")));
const tH = eH;
var rH = le(1, Ee(wt, Yr("AsyncFunction")));
const nH = rH;
var iH = LU([Ee(wt, Yr("Function")), tH, nH]);
const gr = iH;
var sH = le(1, gr(Array.isArray) ? Array.isArray : Ee(wt, Yr("Array")));
const W0 = sH;
var oH = Pn(W0, Ws);
const aH = oH;
var cH = Ai(Ws);
const z0 = cH;
var lH = Pn(W0, z0);
const uH = lH;
var fH = le(1, Ee(wt, Yr("String")));
const An = fH;
var pH = yr("");
const Y0 = pH;
function vp(e) {
  return vp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vp(e);
}
var hH = function(t) {
  return vp(t) === "object";
};
const X0 = hH;
var dH = le(1, Pn(J0, Gq(X0, gr)));
const mH = dH;
var yH = Ai(mH);
const vH = yH;
var gH = MU([An, vH, z0]);
const md = gH;
var bH = Ai(gr);
const $H = bH;
var OH = le(1, Pn(J0, X0));
const SH = OH;
var wH = Ee(wt, Yr("Object")), EH = Ee(Ra, yr(Ra(Object))), xH = ci(Pn(gr, EH), ["constructor"]), PH = le(1, function(e) {
  if (!SH(e) || !wH(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  return dd(t) ? !0 : xH(t);
});
const bs = PH;
var AH = le(1, Ee(wt, Yr("Number")));
const jH = AH;
var TH = Pn(jH, isFinite);
const _H = TH;
var IH = le(1, _H), RH = gr(Number.isFinite) ? le(1, qs(Number.isFinite, Number)) : IH;
const FH = RH;
var VH = Pn(FH, wq(yr, [Math.floor, lq]));
const CH = VH;
var MH = le(1, CH), kH = gr(Number.isInteger) ? le(1, qs(Number.isInteger, Number)) : MH;
const NH = kH;
var DH = le(1, Ee(wt, Yr("RegExp")));
const LH = DH;
var BH = U(zs());
const ui = BH;
var UH = le(1, qs(Promise.all, Promise));
const qH = UH;
function HH(e) {
  return WH(e) || JH(e) || GH(e) || KH();
}
function KH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GH(e, t) {
  if (e) {
    if (typeof e == "string")
      return gp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gp(e, t);
  }
}
function JH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function WH(e) {
  if (Array.isArray(e))
    return gp(e);
}
function gp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var zH = eq(function(e, t) {
  return e.length > t.length;
}), YH = Ee(M4(zH), oq, Ks("length")), XH = jc(function(e, t, r) {
  var n = r.apply(void 0, HH(e));
  return Z4(n) ? F4(n) : t;
}), QH = function(t) {
  var r = YH(t);
  return le(r, function() {
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return xn(XH(i), void 0, t);
  });
}, ZH = fd(uH, QH, zs);
const Q0 = ZH;
var e6 = Yq(s4);
const Ic = e6;
var t6 = le(3, function(e, t, r) {
  var n = lt(e, r), i = lt(a4(e), r);
  if (!$H(n) && !aH(e)) {
    var s = qs(n, i);
    return qU(s, t);
  }
});
const fi = t6;
var r6 = G4(An, li(/[.*+?^${}()|[\]\\-]/g, "\\$&"));
const n6 = r6;
var i6 = function(t, r, n) {
  if (n == null || t == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, Vv = function(t, r) {
  if (typeof t != "string" && !(t instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, s6 = function(t) {
  if (typeof t != "string" && !(t instanceof String) && !(t instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, o6 = function(t, r, n) {
  i6(t, r, n), Vv(n, "str"), Vv(r, "replaceValue"), s6(t);
  var i = new RegExp(LH(t) ? t : n6(t), "g");
  return li(i, r, n);
};
const a6 = o6;
var c6 = le(3, a6), l6 = pd(2, "replaceAll"), u6 = gr(String.prototype.replaceAll) ? l6 : c6;
const f6 = u6;
var p6 = jc(function(e, t) {
  return Ee(hd(""), Nq(Ic(e)), U0(""))(t);
});
const h6 = p6;
var d6 = jc(function(e, t) {
  return Ee(hd(""), qq(Ic(e)), U0(""))(t);
});
const yd = d6;
function m6(e) {
  return e === null;
}
var y6 = m6, v6 = Kr, g6 = En, b6 = Gr, $6 = "[object String]";
function O6(e) {
  return typeof e == "string" || !g6(e) && b6(e) && v6(e) == $6;
}
var S6 = O6, w6 = Kr, E6 = Gr, x6 = "[object Number]";
function P6(e) {
  return typeof e == "number" || E6(e) && w6(e) == x6;
}
var A6 = P6, j6 = Kr, T6 = Gr, _6 = "[object Boolean]";
function I6(e) {
  return e === !0 || e === !1 || T6(e) && j6(e) == _6;
}
var R6 = I6;
let F6 = class {
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
var V6 = F6, C6 = Oc;
function M6() {
  this.__data__ = new C6(), this.size = 0;
}
var k6 = M6;
function N6(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var D6 = N6;
function L6(e) {
  return this.__data__.get(e);
}
var B6 = L6;
function U6(e) {
  return this.__data__.has(e);
}
var q6 = U6, H6 = Oc, K6 = Zh, G6 = ed, J6 = 200;
function W6(e, t) {
  var r = this.__data__;
  if (r instanceof H6) {
    var n = r.__data__;
    if (!K6 || n.length < J6 - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new G6(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var z6 = W6, Y6 = Oc, X6 = k6, Q6 = D6, Z6 = B6, e8 = q6, t8 = z6;
function ji(e) {
  var t = this.__data__ = new Y6(e);
  this.size = t.size;
}
ji.prototype.clear = X6;
ji.prototype.delete = Q6;
ji.prototype.get = Z6;
ji.prototype.has = e8;
ji.prototype.set = t8;
var r8 = ji, n8 = "__lodash_hash_undefined__";
function i8(e) {
  return this.__data__.set(e, n8), this;
}
var s8 = i8;
function o8(e) {
  return this.__data__.has(e);
}
var a8 = o8, c8 = ed, l8 = s8, u8 = a8;
function Va(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new c8(); ++t < r; )
    this.add(e[t]);
}
Va.prototype.add = Va.prototype.push = l8;
Va.prototype.has = u8;
var f8 = Va;
function p8(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var h8 = p8;
function d8(e, t) {
  return e.has(t);
}
var m8 = d8, y8 = f8, v8 = h8, g8 = m8, b8 = 1, $8 = 2;
function O8(e, t, r, n, i, s) {
  var o = r & b8, a = e.length, c = t.length;
  if (a != c && !(o && c > a))
    return !1;
  var l = s.get(e), u = s.get(t);
  if (l && u)
    return l == t && u == e;
  var f = -1, p = !0, h = r & $8 ? new y8() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < a; ) {
    var d = e[f], m = t[f];
    if (n)
      var y = o ? n(m, d, f, t, e, s) : n(d, m, f, e, t, s);
    if (y !== void 0) {
      if (y)
        continue;
      p = !1;
      break;
    }
    if (h) {
      if (!v8(t, function(v, S) {
        if (!g8(h, S) && (d === v || i(d, v, r, n, s)))
          return h.push(S);
      })) {
        p = !1;
        break;
      }
    } else if (!(d === m || i(d, m, r, n, s))) {
      p = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), p;
}
var Z0 = O8, S8 = mr, w8 = S8.Uint8Array, E8 = w8;
function x8(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var P8 = x8;
function A8(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var j8 = A8, Cv = vc, Mv = E8, T8 = F0, _8 = Z0, I8 = P8, R8 = j8, F8 = 1, V8 = 2, C8 = "[object Boolean]", M8 = "[object Date]", k8 = "[object Error]", N8 = "[object Map]", D8 = "[object Number]", L8 = "[object RegExp]", B8 = "[object Set]", U8 = "[object String]", q8 = "[object Symbol]", H8 = "[object ArrayBuffer]", K8 = "[object DataView]", kv = Cv ? Cv.prototype : void 0, mf = kv ? kv.valueOf : void 0;
function G8(e, t, r, n, i, s, o) {
  switch (r) {
    case K8:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case H8:
      return !(e.byteLength != t.byteLength || !s(new Mv(e), new Mv(t)));
    case C8:
    case M8:
    case D8:
      return T8(+e, +t);
    case k8:
      return e.name == t.name && e.message == t.message;
    case L8:
    case U8:
      return e == t + "";
    case N8:
      var a = I8;
    case B8:
      var c = n & F8;
      if (a || (a = R8), e.size != t.size && !c)
        return !1;
      var l = o.get(e);
      if (l)
        return l == t;
      n |= V8, o.set(e, t);
      var u = _8(a(e), a(t), n, i, s, o);
      return o.delete(e), u;
    case q8:
      if (mf)
        return mf.call(e) == mf.call(t);
  }
  return !1;
}
var J8 = G8;
function W8(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var z8 = W8, Y8 = z8, X8 = En;
function Q8(e, t, r) {
  var n = t(e);
  return X8(e) ? n : Y8(n, r(e));
}
var Z8 = Q8;
function e5(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (s[i++] = o);
  }
  return s;
}
var t5 = e5;
function r5() {
  return [];
}
var n5 = r5, i5 = t5, s5 = n5, o5 = Object.prototype, a5 = o5.propertyIsEnumerable, Nv = Object.getOwnPropertySymbols, c5 = Nv ? function(e) {
  return e == null ? [] : (e = Object(e), i5(Nv(e), function(t) {
    return a5.call(e, t);
  }));
} : s5, l5 = c5;
function u5(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var f5 = u5, p5 = Kr, h5 = Gr, d5 = "[object Arguments]";
function m5(e) {
  return h5(e) && p5(e) == d5;
}
var y5 = m5, Dv = y5, v5 = Gr, eS = Object.prototype, g5 = eS.hasOwnProperty, b5 = eS.propertyIsEnumerable, $5 = Dv(function() {
  return arguments;
}()) ? Dv : function(e) {
  return v5(e) && g5.call(e, "callee") && !b5.call(e, "callee");
}, O5 = $5, Ca = { exports: {} };
function S5() {
  return !1;
}
var w5 = S5;
Ca.exports;
(function(e, t) {
  var r = mr, n = w5, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, o = s && s.exports === i, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, l = c || n;
  e.exports = l;
})(Ca, Ca.exports);
var tS = Ca.exports, E5 = 9007199254740991, x5 = /^(?:0|[1-9]\d*)$/;
function P5(e, t) {
  var r = typeof e;
  return t = t ?? E5, !!t && (r == "number" || r != "symbol" && x5.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var A5 = P5, j5 = 9007199254740991;
function T5(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= j5;
}
var rS = T5, _5 = Kr, I5 = rS, R5 = Gr, F5 = "[object Arguments]", V5 = "[object Array]", C5 = "[object Boolean]", M5 = "[object Date]", k5 = "[object Error]", N5 = "[object Function]", D5 = "[object Map]", L5 = "[object Number]", B5 = "[object Object]", U5 = "[object RegExp]", q5 = "[object Set]", H5 = "[object String]", K5 = "[object WeakMap]", G5 = "[object ArrayBuffer]", J5 = "[object DataView]", W5 = "[object Float32Array]", z5 = "[object Float64Array]", Y5 = "[object Int8Array]", X5 = "[object Int16Array]", Q5 = "[object Int32Array]", Z5 = "[object Uint8Array]", eK = "[object Uint8ClampedArray]", tK = "[object Uint16Array]", rK = "[object Uint32Array]", ye = {};
ye[W5] = ye[z5] = ye[Y5] = ye[X5] = ye[Q5] = ye[Z5] = ye[eK] = ye[tK] = ye[rK] = !0;
ye[F5] = ye[V5] = ye[G5] = ye[C5] = ye[J5] = ye[M5] = ye[k5] = ye[N5] = ye[D5] = ye[L5] = ye[B5] = ye[U5] = ye[q5] = ye[H5] = ye[K5] = !1;
function nK(e) {
  return R5(e) && I5(e.length) && !!ye[_5(e)];
}
var iK = nK;
function sK(e) {
  return function(t) {
    return e(t);
  };
}
var oK = sK, Ma = { exports: {} };
Ma.exports;
(function(e, t) {
  var r = T0, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, o = s && r.process, a = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = a;
})(Ma, Ma.exports);
var aK = Ma.exports, cK = iK, lK = oK, Lv = aK, Bv = Lv && Lv.isTypedArray, uK = Bv ? lK(Bv) : cK, nS = uK, fK = f5, pK = O5, hK = En, dK = tS, mK = A5, yK = nS, vK = Object.prototype, gK = vK.hasOwnProperty;
function bK(e, t) {
  var r = hK(e), n = !r && pK(e), i = !r && !n && dK(e), s = !r && !n && !i && yK(e), o = r || n || i || s, a = o ? fK(e.length, String) : [], c = a.length;
  for (var l in e)
    (t || gK.call(e, l)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    mK(l, c))) && a.push(l);
  return a;
}
var $K = bK, OK = Object.prototype;
function SK(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || OK;
  return e === r;
}
var wK = SK;
function EK(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var xK = EK, PK = xK, AK = PK(Object.keys, Object), jK = AK, TK = wK, _K = jK, IK = Object.prototype, RK = IK.hasOwnProperty;
function FK(e) {
  if (!TK(e))
    return _K(e);
  var t = [];
  for (var r in Object(e))
    RK.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var VK = FK, CK = I0, MK = rS;
function kK(e) {
  return e != null && MK(e.length) && !CK(e);
}
var NK = kK, DK = $K, LK = VK, BK = NK;
function UK(e) {
  return BK(e) ? DK(e) : LK(e);
}
var qK = UK, HK = Z8, KK = l5, GK = qK;
function JK(e) {
  return HK(e, GK, KK);
}
var WK = JK, Uv = WK, zK = 1, YK = Object.prototype, XK = YK.hasOwnProperty;
function QK(e, t, r, n, i, s) {
  var o = r & zK, a = Uv(e), c = a.length, l = Uv(t), u = l.length;
  if (c != u && !o)
    return !1;
  for (var f = c; f--; ) {
    var p = a[f];
    if (!(o ? p in t : XK.call(t, p)))
      return !1;
  }
  var h = s.get(e), d = s.get(t);
  if (h && d)
    return h == t && d == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var y = o; ++f < c; ) {
    p = a[f];
    var v = e[p], S = t[p];
    if (n)
      var O = o ? n(S, v, p, t, e, s) : n(v, S, p, e, t, s);
    if (!(O === void 0 ? v === S || i(v, S, r, n, s) : O)) {
      m = !1;
      break;
    }
    y || (y = p == "constructor");
  }
  if (m && !y) {
    var w = e.constructor, E = t.constructor;
    w != E && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof E == "function" && E instanceof E) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var ZK = QK, e9 = wi, t9 = mr, r9 = e9(t9, "DataView"), n9 = r9, i9 = wi, s9 = mr, o9 = i9(s9, "Promise"), a9 = o9, c9 = wi, l9 = mr, u9 = c9(l9, "Set"), f9 = u9, p9 = wi, h9 = mr, d9 = p9(h9, "WeakMap"), m9 = d9, bp = n9, $p = Zh, Op = a9, Sp = f9, wp = m9, iS = Kr, Ti = R0, qv = "[object Map]", y9 = "[object Object]", Hv = "[object Promise]", Kv = "[object Set]", Gv = "[object WeakMap]", Jv = "[object DataView]", v9 = Ti(bp), g9 = Ti($p), b9 = Ti(Op), $9 = Ti(Sp), O9 = Ti(wp), sn = iS;
(bp && sn(new bp(new ArrayBuffer(1))) != Jv || $p && sn(new $p()) != qv || Op && sn(Op.resolve()) != Hv || Sp && sn(new Sp()) != Kv || wp && sn(new wp()) != Gv) && (sn = function(e) {
  var t = iS(e), r = t == y9 ? e.constructor : void 0, n = r ? Ti(r) : "";
  if (n)
    switch (n) {
      case v9:
        return Jv;
      case g9:
        return qv;
      case b9:
        return Hv;
      case $9:
        return Kv;
      case O9:
        return Gv;
    }
  return t;
});
var S9 = sn, yf = r8, w9 = Z0, E9 = J8, x9 = ZK, Wv = S9, zv = En, Yv = tS, P9 = nS, A9 = 1, Xv = "[object Arguments]", Qv = "[object Array]", qo = "[object Object]", j9 = Object.prototype, Zv = j9.hasOwnProperty;
function T9(e, t, r, n, i, s) {
  var o = zv(e), a = zv(t), c = o ? Qv : Wv(e), l = a ? Qv : Wv(t);
  c = c == Xv ? qo : c, l = l == Xv ? qo : l;
  var u = c == qo, f = l == qo, p = c == l;
  if (p && Yv(e)) {
    if (!Yv(t))
      return !1;
    o = !0, u = !1;
  }
  if (p && !u)
    return s || (s = new yf()), o || P9(e) ? w9(e, t, r, n, i, s) : E9(e, t, c, r, n, i, s);
  if (!(r & A9)) {
    var h = u && Zv.call(e, "__wrapped__"), d = f && Zv.call(t, "__wrapped__");
    if (h || d) {
      var m = h ? e.value() : e, y = d ? t.value() : t;
      return s || (s = new yf()), i(m, y, r, n, s);
    }
  }
  return p ? (s || (s = new yf()), x9(e, t, r, n, i, s)) : !1;
}
var _9 = T9, I9 = _9, eg = Gr;
function sS(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !eg(e) && !eg(t) ? e !== e && t !== t : I9(e, t, r, n, sS, i);
}
var R9 = sS, F9 = R9;
function V9(e, t) {
  return F9(e, t);
}
var C9 = V9;
let M9 = class oS {
  constructor(t, r) {
    this.key = t, this.value = r;
  }
  /**
   * @returns {KeyValuePair}
   */
  clone() {
    const t = new oS();
    return this.key && (t.key = this.key.clone()), this.value && (t.value = this.value.clone()), t;
  }
};
var vd = M9, k9 = "Expected a function";
function N9(e) {
  if (typeof e != "function")
    throw new TypeError(k9);
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
var Rc = N9;
const D9 = Rc;
function vf(e) {
  return typeof e == "string" ? (t) => t.element === e : e.constructor && e.extend ? (t) => t instanceof e : e;
}
let aS = class Ep {
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
    return t = vf(t), new Ep(this.elements.filter(t, r));
  }
  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  reject(t, r) {
    return t = vf(t), new Ep(this.elements.filter(D9(t), r));
  }
  /**
   * Returns the first element in the array that satisfies the given value
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  find(t, r) {
    return t = vf(t), this.elements.find(t, r);
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
typeof Symbol < "u" && (aS.prototype[Symbol.iterator] = function() {
  return this.elements[Symbol.iterator]();
});
var Fc = aS;
const L9 = C9, Ho = vd, xr = Fc;
let B9 = class ta {
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
    return this.content instanceof ta ? this.content.toValue() : this.content instanceof Ho ? {
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
    let n = new xr();
    const i = (o, a) => (o.push(a), o), s = (o, a) => {
      a.element === r && o.push(a);
      const c = a.findRecursive(r);
      return c && c.reduce(i, o), a.content instanceof Ho && (a.content.key && s(o, a.content.key), a.content.value && s(o, a.content.value)), o;
    };
    return this.content && (this.content.element && s(n, this.content), Array.isArray(this.content) && this.content.reduce(s, n)), t.isEmpty || (n = n.filter((o) => {
      let a = o.parents.map((c) => c.element);
      for (const c in t) {
        const l = t[c], u = a.indexOf(l);
        if (u !== -1)
          a = a.splice(0, u);
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
    return L9(this.toValue(), t);
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
    if (t instanceof ta)
      this._content = t;
    else if (t instanceof xr)
      this.content = t.elements;
    else if (typeof t == "string" || typeof t == "number" || typeof t == "boolean" || t === "null" || t == null)
      this._content = t;
    else if (t instanceof Ho)
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
    const r = new xr();
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
      return new xr(this.content);
    if (this.content instanceof Ho) {
      const t = new xr([this.content.key]);
      return this.content.value && t.push(this.content.value), t;
    }
    return this.content instanceof ta ? new xr([this.content]) : new xr();
  }
  /**
  * Returns all of the children elements found within the element recursively.
  * @type ArraySlice
  * @see children
  */
  get recursiveChildren() {
    const t = new xr();
    return this.children.forEach((r) => {
      t.push(r), r.recursiveChildren.forEach((n) => {
        t.push(n);
      });
    }), t;
  }
};
var br = B9;
const U9 = br;
let q9 = class extends U9 {
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
var H9 = q9;
const K9 = br;
var G9 = class extends K9 {
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
const J9 = br;
var W9 = class extends J9 {
  constructor(t, r, n) {
    super(t, r, n), this.element = "number";
  }
  primitive() {
    return "number";
  }
};
const z9 = br;
var Y9 = class extends z9 {
  constructor(t, r, n) {
    super(t, r, n), this.element = "boolean";
  }
  primitive() {
    return "boolean";
  }
};
const X9 = Rc, Q9 = br, tg = Fc;
let $s = class extends Q9 {
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
    return new tg(this.content.filter(t, r));
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  reject(t, r) {
    return this.filter(X9(t), r);
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
    return new tg(this.findElements(t, { recursive: !0 }));
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
$s.empty = function() {
  return new this();
};
$s["fantasy-land/empty"] = $s.empty;
typeof Symbol < "u" && ($s.prototype[Symbol.iterator] = function() {
  return this.content[Symbol.iterator]();
});
var cS = $s;
const Z9 = vd, eG = br;
var lS = class extends eG {
  constructor(t, r, n, i) {
    super(new Z9(), n, i), this.element = "member", this.key = t, this.value = r;
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
const tG = Rc, rG = Fc;
let nG = class uS extends rG {
  map(t, r) {
    return this.elements.map((n) => t.bind(r)(n.value, n.key, n));
  }
  filter(t, r) {
    return new uS(this.elements.filter((n) => t.bind(r)(n.value, n.key, n)));
  }
  reject(t, r) {
    return this.filter(tG(t.bind(r)));
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
var fS = nG;
const iG = Rc, sG = gc, oG = cS, aG = lS, cG = fS;
let lG = class extends oG {
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
    if (sG(t))
      return Object.keys(t).forEach((s) => {
        this.set(s, t[s]);
      }), this;
    const n = t, i = this.getMember(n);
    return i ? i.value = r : this.content.push(new aG(n, r)), this;
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
    return new cG(this.content).filter(t, r);
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
    return this.filter(iG(t), r);
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
var uG = lG;
const fG = br;
var pG = class extends fG {
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
const hG = br;
var dG = class extends hG {
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
const _i = br, pS = H9, hS = G9, dS = W9, mS = Y9, yS = cS, vS = lS, gd = uG, mG = pG, gS = dG, bS = Fc, yG = fS, vG = vd;
function Vc(e) {
  return e instanceof _i ? e : typeof e == "string" ? new hS(e) : typeof e == "number" ? new dS(e) : typeof e == "boolean" ? new mS(e) : e === null ? new pS() : Array.isArray(e) ? new yS(e.map(Vc)) : typeof e == "object" ? new gd(e) : e;
}
_i.prototype.ObjectElement = gd;
_i.prototype.RefElement = gS;
_i.prototype.MemberElement = vS;
_i.prototype.refract = Vc;
bS.prototype.refract = Vc;
var $S = {
  Element: _i,
  NullElement: pS,
  StringElement: hS,
  NumberElement: dS,
  BooleanElement: mS,
  ArrayElement: yS,
  MemberElement: vS,
  ObjectElement: gd,
  LinkElement: mG,
  RefElement: gS,
  refract: Vc,
  ArraySlice: bS,
  ObjectSlice: yG,
  KeyValuePair: vG
};
const gG = y6, bG = S6, $G = A6, OG = R6, SG = gc, OS = V6, Ce = $S;
let SS = class {
  constructor(t) {
    this.elementMap = {}, this.elementDetection = [], this.Element = Ce.Element, this.KeyValuePair = Ce.KeyValuePair, (!t || !t.noDefault) && this.useDefault(), this._attributeElementKeys = [], this._attributeElementArrayKeys = [];
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
    return this.register("null", Ce.NullElement).register("string", Ce.StringElement).register("number", Ce.NumberElement).register("boolean", Ce.BooleanElement).register("array", Ce.ArrayElement).register("object", Ce.ObjectElement).register("member", Ce.MemberElement).register("ref", Ce.RefElement).register("link", Ce.LinkElement), this.detect(gG, Ce.NullElement, !1).detect(bG, Ce.StringElement, !1).detect($G, Ce.NumberElement, !1).detect(OG, Ce.BooleanElement, !1).detect(Array.isArray, Ce.ArrayElement, !1).detect(SG, Ce.ObjectElement, !1), this;
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
    return new OS(this);
  }
};
OS.prototype.Namespace = SS;
var wG = SS;
const EG = wG, ht = $S;
var xG = EG;
ht.ArraySlice;
ht.ObjectSlice;
var PG = ht.Element, Lr = ht.StringElement, xp = ht.NumberElement, fr = ht.BooleanElement, Pp = ht.NullElement, pe = ht.ArrayElement, F = ht.ObjectElement, Ii = ht.MemberElement, Ap = ht.RefElement, jp = ht.LinkElement, bd = ht.refract;
class AG extends Lr {
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
const ka = AG;
class jG extends Lr {
  constructor(t, r, n) {
    super(t, r, n), this.element = "comment";
  }
}
const Na = jG;
class TG extends pe {
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
    if (vr(r))
      return !1;
    const n = this.content.findIndex((i) => i === r);
    return n === -1 ? !1 : (this.content[n] = t, !0);
  }
}
const kt = TG;
class _G extends pe {
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
    const r = new pe([t.start.row, t.start.column, t.start.char]), n = new pe([t.end.row, t.end.column, t.end.char]);
    r.classes.push("position"), n.classes.push("position"), this.push(r).push(n);
  }
}
const Da = _G;
class wS extends xG {
  constructor() {
    super(), this.register("annotation", ka), this.register("comment", Na), this.register("parseResult", kt), this.register("sourceMap", Da);
  }
}
const ES = new wS(), Ri = (e) => {
  const t = new wS();
  return bs(e) && t.use(e), t;
};
var xS = { exports: {} };
(function(e) {
  (function() {
    var t, r, n, i, s, o = "properties", a = "deepProperties", c = "propertyDescriptors", l = "staticProperties", u = "staticDeepProperties", f = "staticPropertyDescriptors", p = "configuration", h = "deepConfiguration", d = "deepProps", m = "deepStatics", y = "deepConf", v = "initializers", S = "methods", O = "composers", w = "compose";
    function E(X) {
      return Object.getOwnPropertyNames(X).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(X) : []);
    }
    function j(X, _) {
      return Array.prototype.slice.call(arguments, 2).reduce(X, _);
    }
    var P = j.bind(0, function(_, I) {
      if (I)
        for (var D = E(I), q = 0; q < D.length; q += 1)
          Object.defineProperty(_, D[q], Object.getOwnPropertyDescriptor(I, D[q]));
      return _;
    });
    function M(X) {
      return typeof X == "function";
    }
    function g(X) {
      return X && typeof X == "object" || M(X);
    }
    function A(X) {
      return X && typeof X == "object" && X.__proto__ == Object.prototype;
    }
    var T = j.bind(0, function X(_, I) {
      if (I === t)
        return _;
      if (Array.isArray(I))
        return (Array.isArray(_) ? _ : []).concat(I);
      if (!A(I))
        return I;
      for (var D, q, Z = E(I), te = 0; te < Z.length; )
        D = Z[te++], (q = Object.getOwnPropertyDescriptor(I, D)).hasOwnProperty("value") ? q.value !== t && (_[D] = X(A(_[D]) || Array.isArray(I[D]) ? _[D] : {}, I[D])) : Object.defineProperty(_, D, q);
      return _;
    });
    function R() {
      return (r = Array.prototype.concat.apply([], arguments).filter(function(X, _, I) {
        return M(X) && I.indexOf(X) === _;
      })).length ? r : t;
    }
    function k(X) {
      return r = function() {
        return function I(D) {
          var q, Z, te = I[w] || {}, fe = { __proto__: te[S] }, Ae = te[v], st = Array.prototype.slice.apply(arguments), Ve = te[a];
          if (Ve && T(fe, Ve), (Ve = te[o]) && P(fe, Ve), (Ve = te[c]) && Object.defineProperties(fe, Ve), !Ae || !Ae.length)
            return fe;
          for (D === t && (D = {}), te = 0; te < Ae.length; )
            M(q = Ae[te++]) && (fe = (Z = q.call(fe, D, { instance: fe, stamp: I, args: st })) === t ? fe : Z);
          return fe;
        };
      }(), (n = X[u]) && T(r, n), (n = X[l]) && P(r, n), (n = X[f]) && Object.defineProperties(r, n), n = M(r[w]) ? r[w] : de, P(r[w] = function() {
        return n.apply(this, arguments);
      }, X), r;
    }
    function H(X, _) {
      function I(q, Z) {
        g(_[q]) && (g(X[q]) || (X[q] = {}), (Z || P)(X[q], _[q]));
      }
      function D(q) {
        (r = R(X[q], _[q])) && (X[q] = r);
      }
      return _ && g(_ = _[w] || _) && (I(S), I(o), I(a, T), I(c), I(l), I(u, T), I(f), I(p), I(h, T), D(v), D(O)), X;
    }
    function de() {
      return k(Array.prototype.concat.apply([this], arguments).reduce(H, {}));
    }
    function ve(X) {
      return M(X) && M(X[w]);
    }
    var ie = {};
    function it(X, _) {
      return function() {
        return (i = {})[X] = _.apply(t, Array.prototype.concat.apply([{}], arguments)), ((r = this) && r[w] || n).call(r, i);
      };
    }
    ie[S] = it(S, P), ie[o] = ie.props = it(o, P), ie[v] = ie.init = it(v, R), ie[O] = it(O, R), ie[a] = ie[d] = it(a, T), ie[l] = ie.statics = it(l, P), ie[u] = ie[m] = it(u, T), ie[p] = ie.conf = it(p, P), ie[h] = ie[y] = it(h, T), ie[c] = it(c, P), ie[f] = it(f, P), n = ie[w] = P(function() {
      for (var _, I, D = 0, q = [], Z = arguments, te = this; D < Z.length; )
        g(_ = Z[D++]) && q.push(ve(_) ? _ : ((i = {})[S] = (I = _)[S] || t, n = I.props, i[o] = g((r = I[o]) || n) ? P({}, n, r) : t, i[v] = R(I.init, I[v]), i[O] = R(I[O]), n = I[d], i[a] = g((r = I[a]) || n) ? T({}, n, r) : t, i[c] = I[c], n = I.statics, i[l] = g((r = I[l]) || n) ? P({}, n, r) : t, n = I[m], i[u] = g((r = I[u]) || n) ? T({}, n, r) : t, r = I[f], i[f] = g((n = I.name && { name: { value: I.name } }) || r) ? P({}, r, n) : t, n = I.conf, i[p] = g((r = I[p]) || n) ? P({}, n, r) : t, n = I[y], i[h] = g((r = I[h]) || n) ? T({}, n, r) : t, i));
      if (_ = de.apply(te || s, q), te && q.unshift(te), Array.isArray(Z = _[w][O]))
        for (D = 0; D < Z.length; )
          _ = ve(te = Z[D++]({ stamp: _, composables: q })) ? te : _;
      return _;
    }, ie), ie.create = function() {
      return this.apply(t, arguments);
    }, (i = {})[l] = ie, s = de(i), n[w] = n.bind(), n.version = "4.3.2", e.exports = n;
  })();
})(xS);
var IG = xS.exports;
const $ = /* @__PURE__ */ _e(IG);
var RG = Ne, FG = sh, VG = Ib.indexOf, CG = I$, Tp = FG([].indexOf), PS = !!Tp && 1 / Tp([1], 1, -0) < 0, MG = PS || !CG("indexOf");
RG({ target: "Array", proto: !0, forced: MG }, {
  indexOf: function(t) {
    var r = arguments.length > 1 ? arguments[1] : void 0;
    return PS ? Tp(this, t, r) || 0 : VG(this, t, r);
  }
});
var kG = Ph, NG = kG("Array").indexOf, DG = Ps, LG = NG, gf = Array.prototype, BG = function(e) {
  var t = e.indexOf;
  return e === gf || DG(gf, e) && t === gf.indexOf ? LG : t;
}, UG = BG, qG = UG, HG = qG, KG = HG, GG = KG, JG = GG, WG = JG, zG = WG;
const AS = /* @__PURE__ */ _e(zG);
function YG(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Vb(e), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(AS(t).call(t, i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ys(e, t) {
  if (e == null)
    return {};
  var r = YG(e, t), n, i;
  if (pa) {
    var s = pa(e);
    for (i = 0; i < s.length; i++)
      n = s[i], !(AS(t).call(t, n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
const $d = (e, t, r) => {
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
}, N = {}, Cc = (e) => e == null ? void 0 : e.type, jS = (e) => typeof Cc(e) == "string", TS = (e, {
  visitFnGetter: t = $d,
  nodeTypeGetter: r = Cc
} = {}) => {
  const n = new Array(e.length);
  return {
    enter(i, ...s) {
      for (let o = 0; o < e.length; o += 1)
        if (n[o] == null) {
          const a = t(
            e[o],
            r(i),
            /* isLeaving */
            !1
          );
          if (typeof a == "function") {
            const c = a.call(e[o], i, ...s);
            if (c === !1)
              n[o] = i;
            else if (c === N)
              n[o] = N;
            else if (c !== void 0)
              return c;
          }
        }
    },
    leave(i, ...s) {
      for (let o = 0; o < e.length; o += 1)
        if (n[o] == null) {
          const a = t(
            e[o],
            r(i),
            /* isLeaving */
            !0
          );
          if (typeof a == "function") {
            const c = a.call(e[o], i, ...s);
            if (c === N)
              n[o] = N;
            else if (c !== void 0 && c !== !1)
              return c;
          }
        } else
          n[o] === i && (n[o] = null);
    }
  };
}, Od = (e, t, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: i = N,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = $d,
  nodeTypeGetter: c = Cc,
  nodePredicate: l = jS,
  detectCycles: u = !0
} = {}) => {
  const f = r || {};
  let p, h = Array.isArray(e), d = [e], m = -1, y, v = [];
  const S = [], O = [];
  let w = e;
  do {
    m += 1;
    const E = m === d.length;
    let j, P;
    const M = E && v.length !== 0;
    if (E) {
      if (j = O.length === 0 ? void 0 : S.pop(), P = y, y = O.pop(), M) {
        h ? P = P.slice() : P = Object.create(Object.getPrototypeOf(P), Object.getOwnPropertyDescriptors(P));
        let A = 0;
        for (let T = 0; T < v.length; T += 1) {
          let R = v[T][0];
          const k = v[T][1];
          h && (R -= A), h && k === s ? (P.splice(R, 1), A += 1) : P[R] = k;
        }
      }
      m = p.index, d = p.keys, v = p.edits, h = p.inArray, p = p.prev;
    } else {
      if (j = y ? h ? m : d[m] : void 0, P = y ? y[j] : w, P === s || P === void 0)
        continue;
      y && S.push(j);
    }
    if (O.includes(P))
      continue;
    let g;
    if (!Array.isArray(P)) {
      if (!l(P))
        throw new Error(`Invalid AST Node:  ${JSON.stringify(P)}`);
      if (u && O.includes(P)) {
        S.pop();
        continue;
      }
      const A = a(t, c(P), E);
      if (A) {
        for (const [T, R] of Object.entries(n))
          t[T] = R;
        if (g = A.call(t, P, j, y, S, O), g === i)
          break;
        if (g === o) {
          if (!E) {
            S.pop();
            continue;
          }
        } else if (g !== void 0 && (v.push([j, g]), !E))
          if (l(g))
            P = g;
          else {
            S.pop();
            continue;
          }
      }
    }
    g === void 0 && M && v.push([j, P]), E || (p = {
      inArray: h,
      index: m,
      keys: d,
      edits: v,
      prev: p
    }, h = Array.isArray(P), d = h ? P : f[c(P)] || [], m = -1, v = [], y && O.push(y), y = P);
  } while (p !== void 0);
  return v.length !== 0 && ([, w] = v[v.length - 1]), w;
};
Od[Symbol.for("nodejs.util.promisify.custom")] = async (e, t, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: i = N,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = $d,
  nodeTypeGetter: c = Cc,
  nodePredicate: l = jS,
  detectCycles: u = !0
} = {}) => {
  const f = r || {};
  let p, h = Array.isArray(e), d = [e], m = -1, y, v = [];
  const S = [], O = [];
  let w = e;
  do {
    m += 1;
    const E = m === d.length;
    let j, P;
    const M = E && v.length !== 0;
    if (E) {
      if (j = O.length === 0 ? void 0 : S.pop(), P = y, y = O.pop(), M) {
        h ? P = P.slice() : P = Object.create(Object.getPrototypeOf(P), Object.getOwnPropertyDescriptors(P));
        let A = 0;
        for (let T = 0; T < v.length; T += 1) {
          let R = v[T][0];
          const k = v[T][1];
          h && (R -= A), h && k === s ? (P.splice(R, 1), A += 1) : P[R] = k;
        }
      }
      m = p.index, d = p.keys, v = p.edits, h = p.inArray, p = p.prev;
    } else {
      if (j = y ? h ? m : d[m] : void 0, P = y ? y[j] : w, P === s || P === void 0)
        continue;
      y && S.push(j);
    }
    let g;
    if (!Array.isArray(P)) {
      if (!l(P))
        throw new Error(`Invalid AST Node:  ${JSON.stringify(P)}`);
      if (u && O.includes(P)) {
        S.pop();
        continue;
      }
      const A = a(t, c(P), E);
      if (A) {
        for (const [T, R] of Object.entries(n))
          t[T] = R;
        if (g = await A.call(t, P, j, y, S, O), g === i)
          break;
        if (g === o) {
          if (!E) {
            S.pop();
            continue;
          }
        } else if (g !== void 0 && (v.push([j, g]), !E))
          if (l(g))
            P = g;
          else {
            S.pop();
            continue;
          }
      }
    }
    g === void 0 && M && v.push([j, P]), E || (p = {
      inArray: h,
      index: m,
      keys: d,
      edits: v,
      prev: p
    }, h = Array.isArray(P), d = h ? P : f[c(P)] || [], m = -1, v = [], y && O.push(y), y = P);
  } while (p !== void 0);
  return v.length !== 0 && ([, w] = v[v.length - 1]), w;
};
const XG = (e, t) => typeof (t == null ? void 0 : t[e]) == "function", QG = (e) => e != null && Object.prototype.hasOwnProperty.call(e, "_storedElement") && Object.prototype.hasOwnProperty.call(e, "_content"), ZG = (e, t) => {
  var r;
  return (t == null || (r = t.primitive) === null || r === void 0 ? void 0 : r.call(t)) === e;
}, eJ = (e, t) => {
  var r, n;
  return (t == null || (r = t.classes) === null || r === void 0 || (n = r.includes) === null || n === void 0 ? void 0 : n.call(r, e)) || !1;
}, Pr = (e, t) => (t == null ? void 0 : t.element) === e, tJ = (e) => e({
  hasMethod: XG,
  hasBasicElementProps: QG,
  primitiveEq: ZG,
  isElementType: Pr,
  hasClass: eJ
}), V = tJ, Mc = V(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof PG || e(r) && t(void 0, r)), K = V(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof Lr || e(r) && t("string", r)), _S = V(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof xp || e(r) && t("number", r)), IS = V(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof Pp || e(r) && t("null", r)), kc = V(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof fr || e(r) && t("boolean", r)), re = V(({
  hasBasicElementProps: e,
  primitiveEq: t,
  hasMethod: r
}) => (n) => n instanceof F || e(n) && t("object", n) && r("keys", n) && r("values", n) && r("items", n)), Ot = V(({
  hasBasicElementProps: e,
  primitiveEq: t,
  hasMethod: r
}) => (n) => n instanceof pe && !(n instanceof F) || e(n) && t("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), Fi = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ii || e(n) && t("member", n) && r(void 0, n)), RS = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof jp || e(n) && t("link", n) && r(void 0, n)), FS = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ap || e(n) && t("ref", n) && r(void 0, n)), rJ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ka || e(n) && t("annotation", n) && r("array", n)), nJ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Na || e(n) && t("comment", n) && r("string", n)), VS = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof kt || e(n) && t("parseResult", n) && r("array", n)), CS = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Da || e(n) && t("sourceMap", n) && r("array", n)), ar = (e) => Pr("object", e) || Pr("array", e) || Pr("boolean", e) || Pr("number", e) || Pr("string", e) || Pr("null", e) || Pr("member", e), Sd = (e) => {
  var t, r;
  return CS(e == null || (t = e.meta) === null || t === void 0 || (r = t.get) === null || r === void 0 ? void 0 : r.call(t, "sourceMap"));
}, iJ = (e, t) => {
  if (e.length === 0)
    return !0;
  const r = t.attributes.get("symbols");
  return Ot(r) ? nd(Ic(r.toValue()), e) : !1;
}, rs = (e, t) => e.length === 0 ? !0 : nd(Ic(t.classes.toValue()), e), sJ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: Sd,
  includesClasses: rs,
  includesSymbols: iJ,
  isAnnotationElement: rJ,
  isArrayElement: Ot,
  isBooleanElement: kc,
  isCommentElement: nJ,
  isElement: Mc,
  isLinkElement: RS,
  isMemberElement: Fi,
  isNullElement: IS,
  isNumberElement: _S,
  isObjectElement: re,
  isParseResultElement: VS,
  isPrimitiveElement: ar,
  isRefElement: FS,
  isSourceMapElement: CS,
  isStringElement: K
}, Symbol.toStringTag, { value: "Module" })), oJ = ["keyMap"], aJ = ["keyMap"];
function rg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function MS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rg(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Vi = (e) => re(e) ? "ObjectElement" : Ot(e) ? "ArrayElement" : Fi(e) ? "MemberElement" : K(e) ? "StringElement" : kc(e) ? "BooleanElement" : _S(e) ? "NumberElement" : IS(e) ? "NullElement" : RS(e) ? "LinkElement" : FS(e) ? "RefElement" : void 0, kS = le(1, Ee(Vi, An)), Ci = {
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
}, cJ = $({
  props: {
    result: [],
    predicate: rd,
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
}), He = (e, t, r = {}) => {
  let {
    keyMap: n = Ci
  } = r, i = Ys(r, oJ);
  return Od(e, t, MS({
    // @ts-ignore
    keyMap: n,
    // @ts-ignore
    nodeTypeGetter: Vi,
    nodePredicate: kS
  }, i));
};
He[Symbol.for("nodejs.util.promisify.custom")] = async (e, t, r = {}) => {
  let {
    keyMap: n = Ci
  } = r, i = Ys(r, aJ);
  return Od[Symbol.for("nodejs.util.promisify.custom")](e, t, MS({
    // @ts-ignore
    keyMap: n,
    // @ts-ignore
    nodeTypeGetter: Vi,
    nodePredicate: kS
  }, i));
};
const lJ = ["keyMap"], uJ = ["keyMap"];
function ng(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ng(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ng(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const NS = (e) => typeof (e == null ? void 0 : e.type) == "string" ? e.type : Vi(e), DS = wd({
  EphemeralObject: ["content"],
  EphemeralArray: ["content"]
}, Ci), LS = (e, t, r = {}) => {
  let {
    keyMap: n = DS
  } = r, i = Ys(r, lJ);
  return He(e, t, wd({
    keyMap: n,
    // @ts-ignore
    nodeTypeGetter: NS,
    nodePredicate: Jr,
    detectCycles: !1,
    deleteNodeSymbol: Symbol.for("delete-node"),
    skipVisitingNodeSymbol: Symbol.for("skip-visiting-node")
  }, i));
};
LS[Symbol.for("nodejs.util.promisify.custom")] = async (e, t = {}) => {
  let {
    keyMap: r = DS
  } = t, n = Ys(t, uJ);
  return He[Symbol.for("nodejs.util.promisify.custom")](e, visitor, wd({
    keyMap: r,
    nodeTypeGetter: NS,
    nodePredicate: Jr,
    detectCycles: !1,
    deleteNodeSymbol: Symbol.for("delete-node"),
    skipVisitingNodeSymbol: Symbol.for("skip-visiting-node")
  }, n));
};
class fJ {
  constructor(t) {
    C(this, "type", "EphemeralArray"), C(this, "content", []), C(this, "reference", void 0), this.content = t, this.reference = [];
  }
  toReference() {
    return this.reference;
  }
  toArray() {
    return this.reference.push(...this.content), this.reference;
  }
}
const pJ = fJ;
class hJ {
  constructor(t) {
    C(this, "type", "EphemeralObject"), C(this, "content", []), C(this, "reference", void 0), this.content = t, this.reference = {};
  }
  toReference() {
    return this.reference;
  }
  toObject() {
    return Object.assign(this.reference, Object.fromEntries(this.content));
  }
}
const dJ = hJ, mJ = $.init(function() {
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
      const n = new dJ(r.content);
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
      const n = new pJ(r.content);
      return t.set(r, n), n;
    }
  }, this.EphemeralArray = {
    leave(r) {
      return r.toArray();
    }
  };
}), yJ = (e) => LS(e, mJ()), vJ = yJ;
function ig(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gJ(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ig(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const bJ = () => ({
  predicates: gJ({}, sJ),
  namespace: ES
}), BS = bJ, Xs = (e, t, r = {}) => {
  if (t.length === 0)
    return e;
  const n = Kn(BS, "toolboxCreator", r), i = Kn({}, "visitorOptions", r), s = Kn(Vi, "nodeTypeGetter", i), o = n(), a = t.map((u) => u(o)), c = TS(a.map(Kn({}, "visitor")), {
    nodeTypeGetter: s
  });
  a.forEach(fi(["pre"], []));
  const l = He(e, c, i);
  return a.forEach(fi(["post"], [])), l;
};
class $J extends Array {
  constructor(...t) {
    super(...t), C(this, "unknownMediaType", "application/octet-stream");
  }
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new Error("Not implemented!");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new Error("Not implemented");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new Error("Not implemented!");
  }
}
const OJ = $J;
function sg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function og(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sg(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const SJ = (e, {
  Type: t,
  plugins: r = []
}) => {
  const n = new t(e);
  return Xs(n, r, {
    toolboxCreator: BS,
    visitorOptions: {
      nodeTypeGetter: Vi
    }
  });
}, jt = (e) => (t, r = {}) => SJ(t, og(og({}, r), {}, {
  Type: e
}));
F.refract = jt(F);
pe.refract = jt(pe);
Lr.refract = jt(Lr);
fr.refract = jt(fr);
Pp.refract = jt(Pp);
xp.refract = jt(xp);
jp.refract = jt(jp);
Ap.refract = jt(Ap);
ka.refract = jt(ka);
Na.refract = jt(Na);
kt.refract = jt(kt);
Da.refract = jt(Da);
const wJ = jc((e, t) => {
  const r = cJ({
    predicate: e,
    returnOnTrue: N
  });
  return He(t, r), H0(void 0, [0], r.result);
}), Ed = wJ, ra = (e, t = /* @__PURE__ */ new WeakMap()) => (Fi(e) ? (t.set(e.key, e), ra(e.key, t), t.set(e.value, e), ra(e.value, t)) : e.children.forEach((r) => {
  t.set(r, e), ra(r, t);
}), t), EJ = (e, t, r) => {
  const n = r.get(e);
  Fi(n) && (n.key === e && (n.key = t, r.delete(e), r.set(t, n)), n.value === e && (n.value = t, r.delete(e), r.set(t, n)));
}, xJ = (e, t, r) => {
  const n = r.get(e);
  re(n) && (n.content = n.map((i, s, o) => o === e ? (r.delete(e), r.set(t, n), t) : o));
}, PJ = (e, t, r) => {
  const n = r.get(e);
  Ot(n) && (n.content = n.map((i) => i === e ? (r.delete(e), r.set(t, n), t) : i));
}, AJ = $.init(function({
  element: t
}) {
  let r;
  this.transclude = function(i, s) {
    var o;
    if (i === t)
      return s;
    if (i === s)
      return t;
    r = (o = r) !== null && o !== void 0 ? o : ra(t);
    const a = r.get(i);
    if (!vr(a))
      return re(a) ? xJ(i, s, r) : Ot(a) ? PJ(i, s, r) : Fi(a) && EJ(i, s, r), t;
  };
}), jJ = AJ, TJ = (e, t, r) => jJ({
  element: r
}).transclude(e, t), Nc = (e, t) => {
  const r = gn(e, t);
  return m4((n) => {
    if (bs(n) && cn("$ref", n) && T4(An, "$ref", n)) {
      const i = lt(["$ref"], n), s = yd("#/", i);
      return lt(s.split("/"), r);
    }
    return bs(n) ? Nc(n, r) : n;
  }, e);
};
function ag(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ag(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ag(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const La = (e) => {
  const t = e.meta.clone(), r = e.attributes.clone();
  return new e.constructor(void 0, t, r);
}, bf = (e) => new Ii(e.key, e.value, e.meta.clone(), e.attributes.clone()), Ba = (e, t) => t.clone && t.isMergeableElement(e) ? pi(La(e), e, t) : e, _J = (e, t) => {
  if (typeof t.customMerge != "function")
    return pi;
  const r = t.customMerge(e, t);
  return typeof r == "function" ? r : pi;
}, IJ = (e, t, r) => e.concat(t)["fantasy-land/map"]((n) => Ba(n, r)), RJ = (e, t, r) => {
  const n = re(e) ? La(e) : La(t);
  return re(e) && e.forEach((i, s, o) => {
    const a = bf(o);
    a.value = Ba(i, r), n.content.push(a);
  }), t.forEach((i, s, o) => {
    const a = s.toValue();
    let c;
    if (re(e) && e.hasKey(a) && r.isMergeableElement(i)) {
      const l = e.get(a);
      c = bf(o), c.value = _J(s, r)(l, i);
    } else
      c = bf(o), c.value = Ba(i, r);
    n.remove(a), n.content.push(c);
  }), n;
};
function pi(e, t, r) {
  var n, i, s;
  const o = {
    clone: !0,
    isMergeableElement: (f) => re(f) || Ot(f),
    arrayElementMerge: IJ,
    objectElementMerge: RJ,
    customMerge: void 0
  }, a = cg(cg({}, o), r);
  a.isMergeableElement = (n = a.isMergeableElement) !== null && n !== void 0 ? n : o.isMergeableElement, a.arrayElementMerge = (i = a.arrayElementMerge) !== null && i !== void 0 ? i : o.arrayElementMerge, a.objectElementMerge = (s = a.objectElementMerge) !== null && s !== void 0 ? s : o.objectElementMerge;
  const c = Ot(t), l = Ot(e);
  return c === l ? c && typeof a.arrayElementMerge == "function" ? a.arrayElementMerge(e, t, a) : a.objectElementMerge(e, t, a) : Ba(t, a);
}
pi.all = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.length === 0 ? new F() : e.reduce((r, n) => pi(r, n, t), La(e[0]));
};
const US = (e, t = ES) => {
  if (An(e))
    try {
      return t.fromRefract(JSON.parse(e));
    } catch {
    }
  return bs(e) && cn("element", e) ? t.fromRefract(e) : t.toElement(e);
}, Ke = vJ;
class na extends Error {
  constructor(t) {
    super(t), this.name = this.constructor.name, this.message = t, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(t).stack;
  }
}
class qS extends Error {
  constructor(t) {
    super(`Invalid $ref pointer "${t}". Pointers must begin with "/"`), this.name = this.constructor.name, this.message = `Invalid $ref pointer "${t}". Pointers must begin with "/"`, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(`Invalid $ref pointer "${t}". Pointers must begin with "/"`).stack;
  }
}
const FJ = (e) => {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, VJ = Ee(li(/~/g, "~0"), li(/\//g, "~1"), encodeURIComponent), CJ = Ee(li(/~1/g, "/"), li(/~0/g, "~"), FJ), MJ = (e) => {
  if (Y0(e))
    return [];
  if (!G0("/", e))
    throw new qS(e);
  const t = Ee(hd("/"), Hs(CJ))(e);
  return D0(t);
}, kJ = (e) => e.length === 0 ? "" : `/${e.map(VJ).join("/")}`, Je = (e, t) => MJ(e).reduce((n, i) => {
  if (re(n)) {
    if (!n.hasKey(i))
      throw new na(`Evaluation failed on token: "${i}"`);
    return n.get(i);
  }
  if (Ot(n)) {
    if (!(i in n.content) || !NH(Number(i)))
      throw new na(`Evaluation failed on token: "${i}"`);
    return n.get(Number(i));
  }
  throw new na(`Evaluation failed on token: "${i}"`);
}, t), NJ = (e) => {
  const t = e.indexOf("#");
  return t !== -1 ? e.substring(t) : "#";
}, Be = (e) => {
  const t = NJ(e);
  return yd("#", t);
};
class xd extends OJ {
  filterByFormat(t = "generic") {
    const r = t === "generic" ? "openapi;version" : t;
    return this.filter((n) => n.includes(r));
  }
  findBy(t = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${t}` : `vnd.oai.openapi+${r};version=${t}`;
    return this.find((s) => s.includes(n)) || this.unknownMediaType;
  }
  latest(t = "generic") {
    return Js(this.filterByFormat(t));
  }
}
const DJ = new xd("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0"), bn = DJ;
let LJ = class extends F {
  constructor(t, r, n) {
    super(t, r, n), this.element = "callback";
  }
};
const Qs = LJ;
let BJ = class extends F {
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
const Zs = BJ;
let UJ = class extends F {
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
const eo = UJ;
let qJ = class extends F {
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
const Dc = qJ;
let HJ = class extends F {
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
const Lc = HJ;
let KJ = class extends F {
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
const to = KJ;
let GJ = class extends F {
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
const ro = GJ;
let HS = class extends F {
  constructor(t, r, n) {
    super(t, r, n), this.element = "header";
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new fr(!1);
  }
  set required(t) {
    this.set("required", t);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new fr(!1);
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
Object.defineProperty(HS.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(e) {
    this.set("description", e);
  },
  enumerable: !0
});
const no = HS;
let JJ = class extends F {
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
const io = JJ;
let WJ = class extends F {
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
const so = WJ;
let zJ = class extends F {
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
    if (K(this.operationRef)) {
      var t;
      return (t = this.operationRef) === null || t === void 0 ? void 0 : t.meta.get("operation");
    }
    if (K(this.operationId)) {
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
const oo = zJ;
let YJ = class extends F {
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
const ao = YJ;
let XJ = class extends F {
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
const Bc = XJ;
let QJ = class extends F {
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
const Uc = QJ;
let ZJ = class extends Lr {
  constructor(t, r, n) {
    super(t, r, n), this.element = "openapi", this.classes.push("spec-version"), this.classes.push("version");
  }
};
const co = ZJ;
class eW extends F {
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
const qc = eW;
let tW = class extends F {
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
    return this.hasKey("deprecated") ? this.get("deprecated") : new fr(!1);
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
const lo = tW;
let KS = class extends F {
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
    return this.hasKey("required") ? this.get("required") : new fr(!1);
  }
  set required(t) {
    this.set("required", t);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new fr(!1);
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
Object.defineProperty(KS.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(e) {
    this.set("description", e);
  },
  enumerable: !0
});
const uo = KS;
let rW = class extends F {
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
const fo = rW;
let nW = class extends F {
  constructor(t, r, n) {
    super(t, r, n), this.element = "paths";
  }
};
const po = nW;
let iW = class extends F {
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
const ho = iW;
let sW = class extends F {
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
    return this.hasKey("required") ? this.get("required") : new fr(!1);
  }
  set required(t) {
    this.set("required", t);
  }
};
const mo = sW;
let oW = class extends F {
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
const yo = oW;
let aW = class extends F {
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
const vo = aW;
class cW extends F {
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
    this.set("idProp", t);
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
const go = cW;
class lW extends F {
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
const Hc = lW;
class uW extends F {
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
const Kc = uW;
class fW extends F {
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
const Gc = fW, pW = {
  namespace: (e) => {
    const {
      base: t
    } = e;
    return t.register("jSONSchemaDraft4", go), t.register("jSONReference", Hc), t.register("media", Kc), t.register("linkDescription", Gc), t;
  }
}, hW = pW;
function lg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dW(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lg(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const GS = (e) => {
  if (Mc(e))
    return `${e.element.charAt(0).toUpperCase() + e.element.slice(1)}Element`;
}, JS = dW({
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"]
}, Ci), mW = $({
  props: {
    element: null
  },
  // @ts-ignore
  methods: {
    copyMetaAndAttributes(e, t) {
      Sd(e) && t.meta.set("sourceMap", e.meta.get("sourceMap"));
    }
  }
}), WS = mW, yW = $(WS, {
  methods: {
    enter(e) {
      return this.element = e.clone(), N;
    }
  }
}), J = yW;
function ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ug(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const vW = $(WS, {
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
      return K0(this.passingOptionsNames, this);
    },
    retrieveFixedFields(e) {
      return Ee(lt(["visitors", ...e, "fixedFields"]), zt)(this.specObj);
    },
    retrieveVisitor(e) {
      return ci(gr, ["visitors", ...e], this.specObj) ? lt(["visitors", ...e], this.specObj) : lt(["visitors", ...e, "$visitor"], this.specObj);
    },
    retrieveVisitorInstance(e, t = {}) {
      const r = this.retrievePassingOptions();
      return this.retrieveVisitor(e)($f($f({}, r), t));
    },
    toRefractedElement(e, t, r = {}) {
      const n = this.retrieveVisitorInstance(e, r), i = Object.getPrototypeOf(n);
      return vr(this.fallbackVisitorPrototype) && (this.fallbackVisitorPrototype = Object.getPrototypeOf(this.retrieveVisitorInstance(["value"]))), this.fallbackVisitorPrototype === i ? t.clone() : (He(t, n, $f({
        keyMap: JS,
        nodeTypeGetter: GS
      }, r)), n.element);
    }
  }
}), Xr = vW, gW = $(Xr, {
  props: {
    specPath: ui,
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
        if (K(i) && r.includes(i.toValue()) && !this.ignoredFields.includes(i.toValue())) {
          const o = this.toRefractedElement([...t, "fixedFields", i.toValue()], n), a = new Ii(i.clone(), o);
          this.copyMetaAndAttributes(s, a), a.classes.push("fixed-field"), this.element.content.push(a);
        } else
          this.ignoredFields.includes(i.toValue()) || this.element.content.push(s.clone());
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), Os = gW, bW = $(Os, J, {
  props: {
    specPath: U(["document", "objects", "JSONSchema"])
  },
  init() {
    this.element = new go();
  }
}), $W = bW, OW = J, SW = OW, wW = J, EW = wW, xW = J, PW = xW, AW = J, jW = AW, TW = J, _W = TW, IW = J, RW = IW, FW = J, VW = FW, CW = J, MW = CW, kW = J, NW = kW, DW = J, LW = DW, BW = $({
  props: {
    parent: null
  },
  // @ts-ignore
  init({
    parent: e = this.parent
  }) {
    this.parent = e, this.passingOptionsNames = [...this.passingOptionsNames, "parent"];
  }
}), $r = BW, Yt = (e) => re(e) && e.hasKey("$ref"), UW = $(Xr, $r, J, {
  methods: {
    ObjectElement(e) {
      const t = Yt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
      return this.element = this.toRefractedElement(t, e), N;
    },
    ArrayElement(e) {
      return this.element = new pe(), this.element.classes.push("json-schema-items"), e.forEach((t) => {
        const r = Yt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), qW = UW, HW = J, KW = HW, GW = J, JW = GW, WW = J, zW = WW, YW = J, XW = YW, QW = J, ZW = QW, ez = $(J, {
  methods: {
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-required"), N;
    }
  }
}), tz = ez, rz = $(Xr, {
  props: {
    fieldPatternPredicate: rd,
    specPath: ui,
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
        if (!this.ignoredFields.includes(r.toValue()) && this.fieldPatternPredicate(r.toValue())) {
          const i = this.specPath(t), s = this.toRefractedElement(i, t), o = new Ii(r.clone(), s);
          this.copyMetaAndAttributes(n, o), o.classes.push("patterned-field"), this.element.content.push(o);
        } else
          this.ignoredFields.includes(r.toValue()) || this.element.content.push(n.clone());
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), nz = rz, iz = $(nz, {
  props: {
    fieldPatternPredicate: md
  }
}), Jc = iz, sz = $(Jc, $r, J, {
  props: {
    specPath: (e) => Yt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-properties");
  }
}), oz = sz, az = $(Jc, $r, J, {
  props: {
    specPath: (e) => Yt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-patternProperties");
  }
}), cz = az, lz = $(Jc, $r, J, {
  props: {
    specPath: (e) => Yt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-dependencies");
  }
}), uz = lz, fz = $(J, {
  methods: {
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-enum"), N;
    }
  }
}), pz = fz, hz = $(J, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-type"), N;
    },
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-type"), N;
    }
  }
}), dz = hz, mz = $(Xr, $r, J, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-allOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = Yt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), yz = mz, vz = $(Xr, $r, J, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-anyOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = Yt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), gz = vz, bz = $(Xr, $r, J, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-oneOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = Yt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), $z = bz, Oz = $(Jc, $r, J, {
  props: {
    specPath: (e) => Yt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-definitions");
  }
}), Sz = Oz, wz = J, Ez = wz, xz = J, Pz = xz, Az = J, jz = Az, Tz = J, _z = Tz, Iz = J, Rz = Iz, Fz = $(Xr, $r, J, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-links");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = this.toRefractedElement(["document", "objects", "LinkDescription"], t);
        this.element.push(r);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), Vz = Fz, Cz = J, Mz = Cz, kz = $(Os, J, {
  props: {
    specPath: U(["document", "objects", "JSONReference"])
  },
  init() {
    this.element = new Hc();
  },
  methods: {
    ObjectElement(e) {
      const t = Os.compose.methods.ObjectElement.call(this, e);
      return K(this.element.$ref) && this.element.classes.push("reference-element"), t;
    }
  }
}), Nz = kz, Dz = $(J, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), Lz = Dz, Bz = $(Xr, {
  props: {
    alternator: []
  },
  methods: {
    enter(e) {
      const t = this.alternator.map(({
        predicate: n,
        specPath: i
      }) => fd(n, U(i), zs)), r = Q0(t)(e);
      return this.element = this.toRefractedElement(r, e), N;
    }
  }
}), Uz = Bz, qz = $(Uz, {
  props: {
    alternator: [{
      predicate: Yt,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: Jr,
      specPath: ["document", "objects", "JSONSchema"]
    }]
  }
}), Vn = qz, Hz = $(Os, J, {
  props: {
    specPath: U(["document", "objects", "Media"])
  },
  init() {
    this.element = new Kc();
  }
}), Kz = Hz, Gz = J, Jz = Gz, Wz = J, zz = Wz, Yz = $(Os, J, {
  props: {
    specPath: U(["document", "objects", "LinkDescription"])
  },
  init() {
    this.element = new Gc();
  }
}), Xz = Yz, Qz = J, Zz = Qz, e7 = J, t7 = e7, r7 = J, n7 = r7, i7 = J, s7 = i7, o7 = J, a7 = o7, c7 = J, l7 = c7, u7 = {
  visitors: {
    value: J,
    JSONSchemaOrJSONReferenceVisitor: Vn,
    document: {
      objects: {
        JSONSchema: {
          $visitor: $W,
          fixedFields: {
            // core vocabulary
            id: SW,
            $schema: EW,
            // validation vocabulary
            // validation keywords for numeric instances (number and integer)
            multipleOf: PW,
            maximum: jW,
            exclusiveMaximum: _W,
            minimum: RW,
            exclusiveMinimum: VW,
            // validation keywords for strings
            maxLength: MW,
            minLength: NW,
            pattern: LW,
            // validation keywords for arrays
            additionalItems: Vn,
            items: qW,
            maxItems: KW,
            minItems: JW,
            uniqueItems: zW,
            // validation keywords for objects
            maxProperties: XW,
            minProperties: ZW,
            required: tz,
            properties: oz,
            additionalProperties: Vn,
            patternProperties: cz,
            dependencies: uz,
            // validation keywords for any instance type
            enum: pz,
            type: dz,
            allOf: yz,
            anyOf: gz,
            oneOf: $z,
            not: Vn,
            definitions: Sz,
            // metadata keywords
            title: Ez,
            description: Pz,
            default: jz,
            // semantic validation with "format"
            format: _z,
            // JSON Hyper-Schema
            base: Rz,
            links: Vz,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: Mz
          }
        },
        JSONReference: {
          $visitor: Nz,
          fixedFields: {
            $ref: Lz
          }
        },
        Media: {
          $visitor: Kz,
          fixedFields: {
            binaryEncoding: Jz,
            type: zz
          }
        },
        LinkDescription: {
          $visitor: Xz,
          fixedFields: {
            href: Zz,
            rel: t7,
            title: n7,
            targetSchema: Vn,
            mediaType: s7,
            method: a7,
            encType: l7,
            schema: Vn
          }
        }
      }
    }
  }
}, pr = u7, f7 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof go || e(n) && t("JSONSchemaDraft4", n) && r("object", n)), p7 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Hc || e(n) && t("JSONReference", n) && r("object", n)), h7 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Kc || e(n) && t("media", n) && r("object", n)), d7 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Gc || e(n) && t("linkDescription", n) && r("object", n)), m7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: p7,
  isJSONSchemaElement: f7,
  isLinkDescriptionElement: d7,
  isMediaElement: h7
}, Symbol.toStringTag, { value: "Module" }));
function fg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fg(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const y7 = () => {
  const e = Ri(hW);
  return {
    predicates: pg(pg({}, m7), {}, {
      isStringElement: K
    }),
    namespace: e
  };
}, v7 = y7;
function hg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function g7(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hg(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const b7 = (e, {
  specPath: t = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = pr
} = {}) => {
  const i = bd(e), s = Nc(n), o = fi(t, [], s);
  return He(i, o, {
    state: {
      specObj: s
    }
  }), Xs(o.element, r, {
    toolboxCreator: v7,
    visitorOptions: {
      keyMap: JS,
      nodeTypeGetter: GS
    }
  });
}, Wc = (e) => (t, r = {}) => b7(t, g7({
  specPath: e
}, r));
go.refract = Wc(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Hc.refract = Wc(["visitors", "document", "objects", "JSONReference", "$visitor"]);
Kc.refract = Wc(["visitors", "document", "objects", "Media", "$visitor"]);
Gc.refract = Wc(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let $7 = class extends go {
  constructor(t, r, n) {
    super(t, r, n), this.element = "schema", this.classes.push("json-schema-draft-4");
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
const zc = $7;
let O7 = class extends F {
  constructor(t, r, n) {
    super(t, r, n), this.element = "securityRequirement";
  }
};
const bo = O7;
let S7 = class extends F {
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
const Yc = S7;
let w7 = class extends F {
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
const $o = w7;
let E7 = class extends F {
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
const Oo = E7;
let x7 = class extends F {
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
const Xc = x7;
let P7 = class extends F {
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
const Qc = P7, A7 = {
  namespace: (e) => {
    const {
      base: t
    } = e;
    return t.register("callback", Qs), t.register("components", Zs), t.register("contact", eo), t.register("discriminator", Dc), t.register("encoding", Lc), t.register("example", to), t.register("externalDocumentation", ro), t.register("header", no), t.register("info", io), t.register("license", so), t.register("link", oo), t.register("mediaType", ao), t.register("oAuthFlow", Bc), t.register("oAuthFlows", Uc), t.register("openapi", co), t.register("openApi3_0", qc), t.register("operation", lo), t.register("parameter", uo), t.register("pathItem", fo), t.register("paths", po), t.register("reference", ho), t.register("requestBody", mo), t.register("response", yo), t.register("responses", vo), t.register("schema", zc), t.register("securityRequirement", bo), t.register("securityScheme", Yc), t.register("server", $o), t.register("serverVariable", Oo), t.register("tag", Xc), t.register("xml", Qc), t;
  }
}, j7 = A7;
class Zc extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Zc.primaryClass);
  }
}
C(Zc, "primaryClass", "servers");
const T7 = Zc;
class el extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(el.primaryClass);
  }
}
C(el, "primaryClass", "security");
const _7 = el;
class tl extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(tl.primaryClass);
  }
}
C(tl, "primaryClass", "tags");
const I7 = tl;
class rl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(rl.primaryClass);
  }
}
C(rl, "primaryClass", "server-variables");
const R7 = rl;
class nl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(nl.primaryClass);
  }
}
C(nl, "primaryClass", "components-schemas");
const zS = nl;
class il extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(il.primaryClass);
  }
}
C(il, "primaryClass", "components-responses");
const F7 = il;
class sl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(sl.primaryClass), this.classes.push("parameters");
  }
}
C(sl, "primaryClass", "components-parameters");
const V7 = sl;
class ol extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(ol.primaryClass), this.classes.push("examples");
  }
}
C(ol, "primaryClass", "components-examples");
const C7 = ol;
class al extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(al.primaryClass);
  }
}
C(al, "primaryClass", "components-request-bodies");
const M7 = al;
class cl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(cl.primaryClass);
  }
}
C(cl, "primaryClass", "components-headers");
const k7 = cl;
class ll extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(ll.primaryClass);
  }
}
C(ll, "primaryClass", "components-security-schemes");
const N7 = ll;
class ul extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(ul.primaryClass);
  }
}
C(ul, "primaryClass", "components-links");
const D7 = ul;
class fl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(fl.primaryClass);
  }
}
C(fl, "primaryClass", "components-callbacks");
const L7 = fl;
class pl extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(pl.primaryClass), this.classes.push("servers");
  }
}
C(pl, "primaryClass", "path-item-servers");
const YS = pl;
class hl extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(hl.primaryClass), this.classes.push("parameters");
  }
}
C(hl, "primaryClass", "path-item-parameters");
const B7 = hl;
class dl extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(dl.primaryClass), this.classes.push("parameters");
  }
}
C(dl, "primaryClass", "operation-parameters");
const XS = dl;
class ml extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(ml.primaryClass), this.classes.push("examples");
  }
}
C(ml, "primaryClass", "parameter-examples");
const U7 = ml;
class yl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(yl.primaryClass), this.classes.push("content");
  }
}
C(yl, "primaryClass", "parameter-content");
const q7 = yl;
class vl extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(vl.primaryClass);
  }
}
C(vl, "primaryClass", "operation-tags");
const H7 = vl;
class gl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(gl.primaryClass);
  }
}
C(gl, "primaryClass", "operation-callbacks");
const K7 = gl;
class bl extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(bl.primaryClass), this.classes.push("security");
  }
}
C(bl, "primaryClass", "operation-security");
const QS = bl;
class $l extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push($l.primaryClass), this.classes.push("servers");
  }
}
C($l, "primaryClass", "operation-servers");
const ZS = $l;
class Ol extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Ol.primaryClass), this.classes.push("content");
  }
}
C(Ol, "primaryClass", "request-body-content");
const G7 = Ol;
class Sl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Sl.primaryClass), this.classes.push("examples");
  }
}
C(Sl, "primaryClass", "media-type-examples");
const J7 = Sl;
class wl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(wl.primaryClass);
  }
}
C(wl, "primaryClass", "media-type-encoding");
const W7 = wl;
class El extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(El.primaryClass);
  }
}
C(El, "primaryClass", "encoding-headers");
const z7 = El;
class xl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(xl.primaryClass);
  }
}
C(xl, "primaryClass", "response-headers");
const Y7 = xl;
class Pl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Pl.primaryClass), this.classes.push("content");
  }
}
C(Pl, "primaryClass", "response-content");
const X7 = Pl;
class Al extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Al.primaryClass);
  }
}
C(Al, "primaryClass", "response-links");
const Q7 = Al;
class jl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(jl.primaryClass);
  }
}
C(jl, "primaryClass", "discriminator-mapping");
const Z7 = jl;
class Tl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Tl.primaryClass);
  }
}
C(Tl, "primaryClass", "oauth-flow-scopes");
const eY = Tl;
class _l extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(_l.primaryClass);
  }
}
C(_l, "primaryClass", "link-parameters");
const tY = _l;
class Il extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Il.primaryClass), this.classes.push("examples");
  }
}
C(Il, "primaryClass", "header-examples");
const rY = Il;
class Rl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Rl.primaryClass), this.classes.push("content");
  }
}
C(Rl, "primaryClass", "header-content");
const nY = Rl;
function dg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function iY(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dg(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const ew = (e) => {
  if (Mc(e))
    return `${e.element.charAt(0).toUpperCase() + e.element.slice(1)}Element`;
}, tw = iY({
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
  TagElement: ["content"]
}, Ci), sY = $({
  props: {
    element: null
  },
  // @ts-ignore
  methods: {
    copyMetaAndAttributes(e, t) {
      Sd(e) && t.meta.set("sourceMap", e.meta.get("sourceMap"));
    }
  }
}), rw = sY;
function mg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Of(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mg(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const oY = $(rw, {
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
      return K0(this.passingOptionsNames, this);
    },
    retrieveFixedFields(e) {
      return Ee(lt(["visitors", ...e, "fixedFields"]), zt)(this.specObj);
    },
    retrieveVisitor(e) {
      return ci(gr, ["visitors", ...e], this.specObj) ? lt(["visitors", ...e], this.specObj) : lt(["visitors", ...e, "$visitor"], this.specObj);
    },
    retrieveVisitorInstance(e, t = {}) {
      const r = this.retrievePassingOptions();
      return this.retrieveVisitor(e)(Of(Of({}, r), t));
    },
    toRefractedElement(e, t, r = {}) {
      const n = this.retrieveVisitorInstance(e, r), i = Object.getPrototypeOf(n);
      return vr(this.fallbackVisitorPrototype) && (this.fallbackVisitorPrototype = Object.getPrototypeOf(this.retrieveVisitorInstance(["value"]))), this.fallbackVisitorPrototype === i ? t.clone() : (He(t, n, Of({
        keyMap: tw,
        nodeTypeGetter: ew
      }, r)), n.element);
    }
  }
}), Ye = oY, aY = (e) => re(e) && e.hasKey("openapi") && e.hasKey("info"), cY = (e) => re(e) && e.hasKey("name") && e.hasKey("in"), ue = (e) => re(e) && e.hasKey("$ref"), lY = (e) => re(e) && e.hasKey("content"), uY = (e) => re(e) && e.hasKey("description"), nw = re, iw = re, Pd = (e) => K(e.key) && G0("x-", e.key.toValue()), fY = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isOpenApi3_0LikeElement: aY,
  isOpenApiExtension: Pd,
  isParameterLikeElement: cY,
  isReferenceLikeElement: ue,
  isRequestBodyLikeElement: lY,
  isResponseLikeElement: uY,
  isServerLikeElement: nw,
  isTagLikeElement: iw
}, Symbol.toStringTag, { value: "Module" })), pY = $(Ye, {
  props: {
    specPath: ui,
    ignoredFields: [],
    canSupportSpecificationExtensions: !0,
    specificationExtensionPredicate: Pd
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
        if (K(i) && r.includes(i.toValue()) && !this.ignoredFields.includes(i.toValue())) {
          const o = this.toRefractedElement([...t, "fixedFields", i.toValue()], n), a = new Ii(i.clone(), o);
          this.copyMetaAndAttributes(s, a), a.classes.push("fixed-field"), this.element.content.push(a);
        } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(s)) {
          const o = this.toRefractedElement(["document", "extension"], s);
          this.element.content.push(o);
        } else
          this.ignoredFields.includes(i.toValue()) || this.element.content.push(s.clone());
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), Y = pY, hY = $(rw, {
  methods: {
    enter(e) {
      return this.element = e.clone(), N;
    }
  }
}), b = hY, dY = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "OpenApi"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new qc();
  },
  methods: {
    ObjectElement(e) {
      return this.unrefractedElement = e, Y.compose.methods.ObjectElement.call(this, e);
    }
  }
}), mY = dY, yY = $(Ye, b, {
  methods: {
    StringElement(e) {
      const t = new co(e.toValue());
      return this.copyMetaAndAttributes(e, t), this.element = t, N;
    }
  }
}), vY = yY, gY = $(Ye, {
  methods: {
    MemberElement(e) {
      return this.element = e.clone(), this.element.classes.push("specification-extension"), N;
    }
  }
}), bY = gY, $Y = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Info"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new io();
  }
}), OY = $Y, SY = b, wY = SY, EY = b, xY = EY, PY = b, AY = PY, jY = $(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("api-version"), this.element.classes.push("version"), N;
    }
  }
}), TY = jY, _Y = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Contact"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new eo();
  }
}), IY = _Y, RY = b, FY = RY, VY = b, CY = VY, MY = b, kY = MY, NY = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "License"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new so();
  }
}), DY = NY, LY = b, BY = LY, UY = b, qY = UY, HY = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Link"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new oo();
  },
  methods: {
    ObjectElement(e) {
      const t = Y.compose.methods.ObjectElement.call(this, e);
      return (K(this.element.operationId) || K(this.element.operationRef)) && this.element.classes.push("reference-element"), t;
    }
  }
}), KY = HY, GY = $(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), JY = GY, WY = $(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), zY = WY, YY = $(Ye, {
  props: {
    fieldPatternPredicate: rd,
    specPath: ui,
    ignoredFields: [],
    canSupportSpecificationExtensions: !1,
    specificationExtensionPredicate: Pd
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
        } else if (!this.ignoredFields.includes(r.toValue()) && this.fieldPatternPredicate(r.toValue())) {
          const i = this.specPath(t), s = this.toRefractedElement(i, t), o = new Ii(r.clone(), s);
          this.copyMetaAndAttributes(n, o), o.classes.push("patterned-field"), this.element.content.push(o);
        } else
          this.ignoredFields.includes(r.toValue()) || this.element.content.push(n.clone());
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), hi = YY, XY = $(hi, {
  props: {
    fieldPatternPredicate: md
  }
}), W = XY, QY = $(W, b, {
  props: {
    specPath: U(["value"])
  },
  init() {
    this.element = new tY();
  }
}), ZY = QY, eX = b, tX = eX, rX = b, nX = rX, iX = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Server"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new $o();
  }
}), sX = iX, oX = $(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("server-url"), N;
    }
  }
}), aX = oX, cX = b, lX = cX, uX = $(Ye, b, {
  init() {
    this.element = new T7();
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = nw(t) ? ["document", "objects", "Server"] : ["value"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), Ad = uX, fX = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "ServerVariable"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Oo();
  }
}), pX = fX, hX = b, dX = hX, mX = b, yX = mX, vX = b, gX = vX, bX = $(W, b, {
  props: {
    specPath: U(["document", "objects", "ServerVariable"])
  },
  init() {
    this.element = new R7();
  }
}), $X = bX, OX = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "MediaType"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new ao();
  }
}), SX = OX, wX = $(Ye, {
  props: {
    alternator: []
  },
  methods: {
    enter(e) {
      const t = this.alternator.map(({
        predicate: n,
        specPath: i
      }) => fd(n, U(i), zs)), r = Q0(t)(e);
      return this.element = this.toRefractedElement(r, e), N;
    }
  }
}), Xt = wX, EX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Qs || e(n) && t("callback", n) && r("object", n)), xX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Zs || e(n) && t("components", n) && r("object", n)), PX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof eo || e(n) && t("contact", n) && r("object", n)), AX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof to || e(n) && t("example", n) && r("object", n)), jX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ro || e(n) && t("externalDocumentation", n) && r("object", n)), Mi = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof no || e(n) && t("header", n) && r("object", n)), TX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof io || e(n) && t("info", n) && r("object", n)), _X = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof so || e(n) && t("license", n) && r("object", n)), sw = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof oo || e(n) && t("link", n) && r("object", n)), IX = (e) => {
  if (!sw(e) || !K(e.operationRef))
    return !1;
  const t = e.operationRef.toValue();
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, RX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof co || e(n) && t("openapi", n) && r("string", n)), FX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r,
  hasClass: n
}) => (i) => i instanceof qc || e(i) && t("openApi3_0", i) && r("object", i) && n("api", i)), ow = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof lo || e(n) && t("operation", n) && r("object", n)), VX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof uo || e(n) && t("parameter", n) && r("object", n)), Fl = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof fo || e(n) && t("pathItem", n) && r("object", n)), CX = (e) => {
  if (!Fl(e) || !K(e.$ref))
    return !1;
  const t = e.$ref.toValue();
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, MX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof po || e(n) && t("paths", n) && r("object", n)), he = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ho || e(n) && t("reference", n) && r("object", n)), kX = (e) => {
  if (!he(e) || !K(e.$ref))
    return !1;
  const t = e.$ref.toValue();
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, NX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof mo || e(n) && t("requestBody", n) && r("object", n)), Vl = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof yo || e(n) && t("response", n) && r("object", n)), DX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof vo || e(n) && t("responses", n) && r("object", n)), LX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof zc || e(n) && t("schema", n) && r("object", n)), BX = (e) => kc(e) && e.classes.includes("boolean-json-schema"), UX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof bo || e(n) && t("securityRequirement", n) && r("object", n)), qX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof $o || e(n) && t("server", n) && r("object", n)), HX = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Oo || e(n) && t("serverVariable", n) && r("object", n)), Cl = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ao || e(n) && t("mediaType", n) && r("object", n)), KX = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: BX,
  isCallbackElement: EX,
  isComponentsElement: xX,
  isContactElement: PX,
  isExampleElement: AX,
  isExternalDocumentationElement: jX,
  isHeaderElement: Mi,
  isInfoElement: TX,
  isLicenseElement: _X,
  isLinkElement: sw,
  isLinkElementExternal: IX,
  isMediaTypeElement: Cl,
  isOpenApi3_0Element: FX,
  isOpenapiElement: RX,
  isOperationElement: ow,
  isParameterElement: VX,
  isPathItemElement: Fl,
  isPathItemElementExternal: CX,
  isPathsElement: MX,
  isReferenceElement: he,
  isReferenceElementExternal: kX,
  isRequestBodyElement: NX,
  isResponseElement: Vl,
  isResponsesElement: DX,
  isSchemaElement: LX,
  isSecurityRequirementElement: UX,
  isServerElement: qX,
  isServerVariableElement: HX
}, Symbol.toStringTag, { value: "Module" })), GX = $(Xt, b, {
  props: {
    alternator: [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Jr,
      specPath: ["document", "objects", "Schema"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = Xt.compose.methods.enter.call(this, e);
      return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    }
  }
}), JX = GX, WX = b, zX = WX, YX = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"],
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new F(), this.element.classes.push("examples");
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "example");
      }), t;
    }
  }
}), jd = YX, XX = $(jd, {
  init() {
    this.element = new J7();
  }
}), QX = XX, ZX = $(W, b, {
  props: {
    specPath: U(["document", "objects", "Encoding"])
  },
  init() {
    this.element = new W7();
  }
}), eQ = ZX, tQ = $(W, b, {
  props: {
    specPath: U(["value"])
  },
  init() {
    this.element = new bo();
  }
}), rQ = tQ, nQ = $(Ye, b, {
  init() {
    this.element = new _7();
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (re(t)) {
          const r = this.toRefractedElement(["document", "objects", "SecurityRequirement"], t);
          this.element.push(r);
        } else
          this.element.push(t.clone());
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), iQ = nQ, sQ = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Components"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Zs();
  }
}), oQ = sQ, aQ = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Tag"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Xc();
  }
}), cQ = aQ, lQ = b, uQ = lQ, fQ = b, pQ = fQ, hQ = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Reference"]),
    canSupportSpecificationExtensions: !1
  },
  init() {
    this.element = new ho();
  },
  methods: {
    ObjectElement(e) {
      const t = Y.compose.methods.ObjectElement.call(this, e);
      return K(this.element.$ref) && this.element.classes.push("reference-element"), t;
    }
  }
}), dQ = hQ, mQ = $(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), yQ = mQ, vQ = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Parameter"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new uo();
  },
  methods: {
    ObjectElement(e) {
      const t = Y.compose.methods.ObjectElement.call(this, e);
      return re(this.element.contentProp) && this.element.contentProp.filter(Cl).forEach((r, n) => {
        r.setMetaProperty("media-type", n.toValue());
      }), t;
    }
  }
}), gQ = vQ, bQ = b, $Q = bQ, OQ = b, SQ = OQ, wQ = b, EQ = wQ, xQ = b, PQ = xQ, AQ = b, jQ = AQ, TQ = b, _Q = TQ, IQ = b, RQ = IQ, FQ = b, VQ = FQ, CQ = b, MQ = CQ, kQ = $(Xt, b, {
  props: {
    alternator: [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Jr,
      specPath: ["document", "objects", "Schema"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = Xt.compose.methods.enter.call(this, e);
      return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    }
  }
}), NQ = kQ, DQ = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Header"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new no();
  }
}), LQ = DQ, BQ = b, UQ = BQ, qQ = b, HQ = qQ, KQ = b, GQ = KQ, JQ = b, WQ = JQ, zQ = b, YQ = zQ, XQ = b, QQ = XQ, ZQ = b, eZ = ZQ, tZ = $(Xt, b, {
  props: {
    alternator: [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Jr,
      specPath: ["document", "objects", "Schema"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = Xt.compose.methods.enter.call(this, e);
      return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    }
  }
}), rZ = tZ, nZ = b, iZ = nZ, sZ = $(jd, {
  init() {
    this.element = new rY();
  }
}), oZ = sZ, aZ = $(W, b, {
  props: {
    specPath: U(["document", "objects", "MediaType"])
  },
  init() {
    this.element = new F(), this.element.classes.push("content");
  }
}), Ml = aZ, cZ = $(Ml, {
  init() {
    this.element = new nY();
  }
}), lZ = cZ, uZ = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Schema"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new zc();
  }
}), fZ = uZ, {
  items: yg
} = pr.visitors.document.objects.JSONSchema.fixedFields, pZ = $(yg, {
  methods: {
    ObjectElement(e) {
      const t = yg.compose.methods.ObjectElement.call(this, e);
      return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    },
    ArrayElement(e) {
      return this.element = e.clone(), N;
    }
  }
}), hZ = pZ, {
  properties: vg
} = pr.visitors.document.objects.JSONSchema.fixedFields, dZ = $(vg, {
  methods: {
    ObjectElement(e) {
      const t = vg.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "schema");
      }), t;
    }
  }
}), mZ = dZ, {
  type: yZ
} = pr.visitors.document.objects.JSONSchema.fixedFields, vZ = $(yZ, {
  methods: {
    ArrayElement(e) {
      return this.element = e.clone(), N;
    }
  }
}), gZ = vZ, bZ = b, $Z = bZ, OZ = b, SZ = OZ, wZ = b, EZ = wZ, xZ = b, PZ = xZ, {
  JSONSchemaOrJSONReferenceVisitor: gg
} = pr.visitors, AZ = $(gg, {
  methods: {
    ObjectElement(e) {
      const t = gg.compose.methods.enter.call(this, e);
      return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    }
  }
}), jZ = AZ, TZ = Object.fromEntries(Object.entries(pr.visitors.document.objects.JSONSchema.fixedFields).map(([e, t]) => t === pr.visitors.JSONSchemaOrJSONReferenceVisitor ? [e, jZ] : [e, t])), _Z = TZ, IZ = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Discriminator"]),
    canSupportSpecificationExtensions: !1
  },
  init() {
    this.element = new Dc();
  }
}), RZ = IZ, FZ = b, VZ = FZ, CZ = $(W, b, {
  props: {
    specPath: U(["value"])
  },
  init() {
    this.element = new Z7();
  }
}), MZ = CZ, kZ = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "XML"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Qc();
  }
}), NZ = kZ, DZ = b, LZ = DZ, BZ = b, UZ = BZ, qZ = b, HZ = qZ, KZ = b, GZ = KZ, JZ = b, WZ = JZ, zZ = b, YZ = zZ, XZ = $(jd, {
  init() {
    this.element = new U7();
  }
}), QZ = XZ, ZZ = $(Ml, {
  init() {
    this.element = new q7();
  }
}), eee = ZZ, tee = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"]
  },
  init() {
    this.element = new zS();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "schema");
      }), t;
    }
  }
}), ree = tee, nee = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"]
  },
  init() {
    this.element = new F7();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "response");
      }), this.element.filter(Vl).forEach((r, n) => {
        r.setMetaProperty("http-status-code", n.toValue());
      }), t;
    }
  }
}), iee = nee, see = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"]
  },
  init() {
    this.element = new V7();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "parameter");
      }), t;
    }
  }
}), oee = see, aee = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"]
  },
  init() {
    this.element = new C7();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "example");
      }), t;
    }
  }
}), cee = aee, lee = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"]
  },
  init() {
    this.element = new M7();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "requestBody");
      }), t;
    }
  }
}), uee = lee, fee = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"]
  },
  init() {
    this.element = new k7();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "header");
      }), this.element.filter(Mi).forEach((r, n) => {
        r.setMetaProperty("header-name", n.toValue());
      }), t;
    }
  }
}), pee = fee, hee = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"]
  },
  init() {
    this.element = new N7();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "securityScheme");
      }), t;
    }
  }
}), dee = hee, mee = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"]
  },
  init() {
    this.element = new D7();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "link");
      }), t;
    }
  }
}), yee = mee, vee = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"]
  },
  init() {
    this.element = new L7();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "callback");
      }), t;
    }
  }
}), gee = vee, bee = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Example"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new to();
  },
  methods: {
    ObjectElement(e) {
      const t = Y.compose.methods.ObjectElement.call(this, e);
      return K(this.element.externalValue) && this.element.classes.push("reference-element"), t;
    }
  }
}), $ee = bee, Oee = b, See = Oee, wee = b, Eee = wee, xee = b, Pee = xee, Aee = $(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), jee = Aee, Tee = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "ExternalDocumentation"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new ro();
  }
}), _ee = Tee, Iee = b, Ree = Iee, Fee = b, Vee = Fee, Cee = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Encoding"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Lc();
  },
  methods: {
    ObjectElement(e) {
      const t = Y.compose.methods.ObjectElement.call(this, e);
      return re(this.element.headers) && this.element.headers.filter(Mi).forEach((r, n) => {
        r.setMetaProperty("header-name", n.toValue());
      }), t;
    }
  }
}), Mee = Cee, kee = b, Nee = kee, Dee = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"]
  },
  init() {
    this.element = new z7();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "header");
      }), this.element.forEach((r, n) => {
        if (!Mi(r))
          return;
        const i = n.toValue();
        r.setMetaProperty("headerName", i);
      }), t;
    }
  }
}), Lee = Dee, Bee = b, Uee = Bee, qee = b, Hee = qee, Kee = b, Gee = Kee, Jee = $(hi, b, {
  props: {
    fieldPatternPredicate: _c(/^\/(?<path>.*)$/),
    specPath: U(["document", "objects", "PathItem"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new po();
  },
  methods: {
    ObjectElement(e) {
      const t = hi.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(Fl).forEach((r, n) => {
        r.setMetaProperty("path", n.clone());
      }), t;
    }
  }
}), Wee = Jee, zee = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "RequestBody"])
  },
  init() {
    this.element = new mo();
  },
  methods: {
    ObjectElement(e) {
      const t = Y.compose.methods.ObjectElement.call(this, e);
      return re(this.element.contentProp) && this.element.contentProp.filter(Cl).forEach((r, n) => {
        r.setMetaProperty("media-type", n.toValue());
      }), t;
    }
  }
}), Yee = zee, Xee = b, Qee = Xee, Zee = $(Ml, {
  init() {
    this.element = new G7();
  }
}), ete = Zee, tte = b, rte = tte, nte = $(hi, b, {
  props: {
    fieldPatternPredicate: _c(/{(?<expression>.*)}/),
    specPath: U(["document", "objects", "PathItem"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Qs();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(Fl).forEach((r, n) => {
        r.setMetaProperty("runtime-expression", n.toValue());
      }), t;
    }
  }
}), ite = nte, ste = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Response"])
  },
  init() {
    this.element = new yo();
  },
  methods: {
    ObjectElement(e) {
      const t = Y.compose.methods.ObjectElement.call(this, e);
      return re(this.element.contentProp) && this.element.contentProp.filter(Cl).forEach((r, n) => {
        r.setMetaProperty("media-type", n.toValue());
      }), re(this.element.headers) && this.element.headers.filter(Mi).forEach((r, n) => {
        r.setMetaProperty("header-name", n.toValue());
      }), t;
    }
  }
}), ote = ste, ate = b, cte = ate, lte = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"]
  },
  init() {
    this.element = new Y7();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "header");
      }), this.element.forEach((r, n) => {
        if (!Mi(r))
          return;
        const i = n.toValue();
        r.setMetaProperty("header-name", i);
      }), t;
    }
  }
}), ute = lte, fte = $(Ml, {
  init() {
    this.element = new X7();
  }
}), pte = fte, hte = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"]
  },
  init() {
    this.element = new Q7();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "link");
      }), t;
    }
  }
}), dte = hte, mte = $(Y, hi, {
  props: {
    specPathFixedFields: ui,
    specPathPatternedFields: ui
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
        this.ignoredFields = [...r, ..._q(e.keys(), n)], Y.compose.methods.ObjectElement.call(this, e), this.specPath = this.specPathPatternedFields, this.ignoredFields = n, hi.compose.methods.ObjectElement.call(this, e);
      } catch (n) {
        throw this.specPath = t, n;
      }
      return N;
    }
  }
}), bg = mte, yte = $(bg, b, {
  props: {
    specPathFixedFields: U(["document", "objects", "Responses"]),
    specPathPatternedFields: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"],
    fieldPatternPredicate: _c(new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${I4(100, 600).join("|")})$`)),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new vo();
  },
  methods: {
    ObjectElement(e) {
      const t = bg.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "response");
      }), this.element.filter(Vl).forEach((r, n) => {
        const i = n.clone();
        this.fieldPatternPredicate(i.toValue()) && r.setMetaProperty("http-status-code", i);
      }), t;
    }
  }
}), vte = yte, gte = $(Xt, b, {
  props: {
    alternator: [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Jr,
      specPath: ["document", "objects", "Response"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = Xt.compose.methods.enter.call(this, e);
      return he(this.element) ? this.element.setMetaProperty("referenced-element", "response") : Vl(this.element) && this.element.setMetaProperty("http-status-code", "default"), t;
    }
  }
}), bte = gte, $te = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "Operation"])
  },
  init() {
    this.element = new lo();
  }
}), Ote = $te, Ste = $(b, {
  init() {
    this.element = new H7();
  },
  methods: {
    ArrayElement(e) {
      return this.element = this.element.concat(e.clone()), N;
    }
  }
}), wte = Ste, Ete = b, xte = Ete, Pte = b, Ate = Pte, jte = b, Tte = jte, _te = $(Ye, b, {
  init() {
    this.element = new pe(), this.element.classes.push("parameters");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = ue(t) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], n = this.toRefractedElement(r, t);
        he(n) && n.setMetaProperty("referenced-element", "parameter"), this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), aw = _te, Ite = $(aw, {
  init() {
    this.element = new XS();
  }
}), Rte = Ite, Fte = $(Xt, {
  props: {
    alternator: [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Jr,
      specPath: ["document", "objects", "RequestBody"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = Xt.compose.methods.enter.call(this, e);
      return he(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), t;
    }
  }
}), Vte = Fte, Cte = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"]
  },
  init() {
    this.element = new K7();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "callback");
      }), t;
    }
  }
}), Mte = Cte, kte = b, Nte = kte, Dte = $(Ye, b, {
  init() {
    this.element = new QS();
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = re(t) ? ["document", "objects", "SecurityRequirement"] : ["value"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), Lte = Dte, Bte = $(Ad, {
  init() {
    this.element = new ZS();
  }
}), Ute = Bte, qte = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "PathItem"])
  },
  init() {
    this.element = new fo();
  },
  methods: {
    ObjectElement(e) {
      const t = Y.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(ow).forEach((r, n) => {
        const i = n.clone();
        i.content = i.toValue().toUpperCase(), r.setMetaProperty("http-method", i);
      }), K(this.element.$ref) && this.element.classes.push("reference-element"), t;
    }
  }
}), Hte = qte, Kte = $(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), Gte = Kte, Jte = b, Wte = Jte, zte = b, Yte = zte, Xte = $(Ad, {
  init() {
    this.element = new YS();
  }
}), Qte = Xte, Zte = $(aw, {
  init() {
    this.element = new B7();
  }
}), ere = Zte, tre = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "SecurityScheme"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Yc();
  }
}), rre = tre, nre = b, ire = nre, sre = b, ore = sre, are = b, cre = are, lre = b, ure = lre, fre = b, pre = fre, hre = b, dre = hre, mre = b, yre = mre, vre = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "OAuthFlows"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Uc();
  }
}), gre = vre, bre = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "OAuthFlow"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Bc();
  }
}), $re = bre, Ore = b, Sre = Ore, wre = b, Ere = wre, xre = b, Pre = xre, Are = $(W, b, {
  props: {
    specPath: U(["value"])
  },
  init() {
    this.element = new eY();
  }
}), jre = Are, Tre = $(Ye, b, {
  init() {
    this.element = new I7();
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = iw(t) ? ["document", "objects", "Tag"] : ["value"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), _re = Tre;
function $g(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Og(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $g(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $g(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Sg = {
  $visitor: dQ,
  fixedFields: {
    $ref: yQ
  }
}, wg = {
  $visitor: fZ,
  fixedFields: Og(Og({}, _Z), {}, {
    // validation vocabulary
    // validation keywords for arrays
    items: hZ,
    // Validation keywords for objects
    properties: mZ,
    // validation keywords for any instance type
    type: gZ,
    // OpenAPI vocabulary
    nullable: $Z,
    discriminator: {
      $ref: "#/visitors/document/objects/Discriminator"
    },
    writeOnly: SZ,
    xml: {
      $ref: "#/visitors/document/objects/XML"
    },
    externalDocs: {
      $ref: "#/visitors/document/objects/ExternalDocumentation"
    },
    example: EZ,
    deprecated: PZ
  })
}, Ire = {
  visitors: {
    value: b,
    document: {
      objects: {
        OpenApi: {
          $visitor: mY,
          fixedFields: {
            openapi: vY,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            servers: Ad,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: iQ,
            tags: _re,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: OY,
          fixedFields: {
            title: wY,
            description: xY,
            termsOfService: AY,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: TY
          }
        },
        Contact: {
          $visitor: IY,
          fixedFields: {
            name: FY,
            url: CY,
            email: kY
          }
        },
        License: {
          $visitor: DY,
          fixedFields: {
            name: BY,
            url: qY
          }
        },
        Server: {
          $visitor: sX,
          fixedFields: {
            url: aX,
            description: lX,
            variables: $X
          }
        },
        ServerVariable: {
          $visitor: pX,
          fixedFields: {
            enum: dX,
            default: yX,
            description: gX
          }
        },
        Components: {
          $visitor: oQ,
          fixedFields: {
            schemas: ree,
            responses: iee,
            parameters: oee,
            examples: cee,
            requestBodies: uee,
            headers: pee,
            securitySchemes: dee,
            links: yee,
            callbacks: gee
          }
        },
        Paths: {
          $visitor: Wee
        },
        PathItem: {
          $visitor: Hte,
          fixedFields: {
            $ref: Gte,
            summary: Wte,
            description: Yte,
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
            servers: Qte,
            parameters: ere
          }
        },
        Operation: {
          $visitor: Ote,
          fixedFields: {
            tags: wte,
            summary: xte,
            description: Ate,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: Tte,
            parameters: Rte,
            requestBody: Vte,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: Mte,
            deprecated: Nte,
            security: Lte,
            servers: Ute
          }
        },
        ExternalDocumentation: {
          $visitor: _ee,
          fixedFields: {
            description: Ree,
            url: Vee
          }
        },
        Parameter: {
          $visitor: gQ,
          fixedFields: {
            name: $Q,
            in: SQ,
            description: EQ,
            required: PQ,
            deprecated: jQ,
            allowEmptyValue: _Q,
            style: RQ,
            explode: VQ,
            allowReserved: MQ,
            schema: NQ,
            example: YZ,
            examples: QZ,
            content: eee
          }
        },
        RequestBody: {
          $visitor: Yee,
          fixedFields: {
            description: Qee,
            content: ete,
            required: rte
          }
        },
        MediaType: {
          $visitor: SX,
          fixedFields: {
            schema: JX,
            example: zX,
            examples: QX,
            encoding: eQ
          }
        },
        Encoding: {
          $visitor: Mee,
          fixedFields: {
            contentType: Nee,
            headers: Lee,
            style: Uee,
            explode: Hee,
            allowReserved: Gee
          }
        },
        Responses: {
          $visitor: vte,
          fixedFields: {
            default: bte
          }
        },
        Response: {
          $visitor: ote,
          fixedFields: {
            description: cte,
            headers: ute,
            content: pte,
            links: dte
          }
        },
        Callback: {
          $visitor: ite
        },
        Example: {
          $visitor: $ee,
          fixedFields: {
            summary: See,
            description: Eee,
            value: Pee,
            externalValue: jee
          }
        },
        Link: {
          $visitor: KY,
          fixedFields: {
            operationRef: JY,
            operationId: zY,
            parameters: ZY,
            requestBody: tX,
            description: nX,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: LQ,
          fixedFields: {
            description: UQ,
            required: HQ,
            deprecated: GQ,
            allowEmptyValue: WQ,
            style: YQ,
            explode: QQ,
            allowReserved: eZ,
            schema: rZ,
            example: iZ,
            examples: oZ,
            content: lZ
          }
        },
        Tag: {
          $visitor: cQ,
          fixedFields: {
            name: uQ,
            description: pQ,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        JSONReference: Sg,
        Reference: Sg,
        JSONSchema: wg,
        Schema: wg,
        LinkDescription: pr.visitors.document.objects.LinkDescription,
        Media: pr.visitors.document.objects.Media,
        Discriminator: {
          $visitor: RZ,
          fixedFields: {
            propertyName: VZ,
            mapping: MZ
          }
        },
        XML: {
          $visitor: NZ,
          fixedFields: {
            name: LZ,
            namespace: UZ,
            prefix: HZ,
            attribute: GZ,
            wrapped: WZ
          }
        },
        SecurityScheme: {
          $visitor: rre,
          fixedFields: {
            type: ire,
            description: ore,
            name: cre,
            in: ure,
            scheme: pre,
            bearerFormat: dre,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: yre
          }
        },
        OAuthFlows: {
          $visitor: gre,
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
          $visitor: $re,
          fixedFields: {
            authorizationUrl: Sre,
            tokenUrl: Ere,
            refreshUrl: Pre,
            scopes: jre
          }
        },
        SecurityRequirement: {
          $visitor: rQ
        }
      },
      extension: {
        $visitor: bY
      }
    }
  }
}, x = Ire;
function Eg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eg(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Rre = () => {
  const e = Ri(j7);
  return {
    predicates: Sf(Sf(Sf({}, fY), KX), {}, {
      isStringElement: K
    }),
    namespace: e
  };
}, Fre = Rre;
function xg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vre(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xg(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Cre = (e, {
  specPath: t = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = bd(e), i = Nc(x), s = fi(t, [], i);
  return He(n, s, {
    state: {
      specObj: i
    }
  }), Xs(s.element, r, {
    toolboxCreator: Fre,
    visitorOptions: {
      keyMap: tw,
      nodeTypeGetter: ew
    }
  });
}, oe = (e) => (t, r = {}) => Cre(t, Vre({
  specPath: e
}, r));
Qs.refract = oe(["visitors", "document", "objects", "Callback", "$visitor"]);
Zs.refract = oe(["visitors", "document", "objects", "Components", "$visitor"]);
eo.refract = oe(["visitors", "document", "objects", "Contact", "$visitor"]);
to.refract = oe(["visitors", "document", "objects", "Example", "$visitor"]);
Dc.refract = oe(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Lc.refract = oe(["visitors", "document", "objects", "Encoding", "$visitor"]);
ro.refract = oe(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
no.refract = oe(["visitors", "document", "objects", "Header", "$visitor"]);
io.refract = oe(["visitors", "document", "objects", "Info", "$visitor"]);
so.refract = oe(["visitors", "document", "objects", "License", "$visitor"]);
oo.refract = oe(["visitors", "document", "objects", "Link", "$visitor"]);
ao.refract = oe(["visitors", "document", "objects", "MediaType", "$visitor"]);
Bc.refract = oe(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Uc.refract = oe(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
co.refract = oe(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
qc.refract = oe(["visitors", "document", "objects", "OpenApi", "$visitor"]);
lo.refract = oe(["visitors", "document", "objects", "Operation", "$visitor"]);
uo.refract = oe(["visitors", "document", "objects", "Parameter", "$visitor"]);
fo.refract = oe(["visitors", "document", "objects", "PathItem", "$visitor"]);
po.refract = oe(["visitors", "document", "objects", "Paths", "$visitor"]);
ho.refract = oe(["visitors", "document", "objects", "Reference", "$visitor"]);
mo.refract = oe(["visitors", "document", "objects", "RequestBody", "$visitor"]);
yo.refract = oe(["visitors", "document", "objects", "Response", "$visitor"]);
vo.refract = oe(["visitors", "document", "objects", "Responses", "$visitor"]);
zc.refract = oe(["visitors", "document", "objects", "Schema", "$visitor"]);
bo.refract = oe(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
Yc.refract = oe(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
$o.refract = oe(["visitors", "document", "objects", "Server", "$visitor"]);
Oo.refract = oe(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Xc.refract = oe(["visitors", "document", "objects", "Tag", "$visitor"]);
Qc.refract = oe(["visitors", "document", "objects", "XML", "$visitor"]);
class Mre extends Qs {
}
const kl = Mre;
class kre extends Zs {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(t) {
    this.set("pathItems", t);
  }
}
const Nl = kre;
class Nre extends eo {
}
const Dl = Nre;
class Dre extends Dc {
}
const Td = Dre;
class Lre extends Lc {
}
const _d = Lre;
class Bre extends to {
}
const Ll = Bre;
class Ure extends ro {
}
const Bl = Ure;
class qre extends no {
  get schema() {
    return this.get("schema");
  }
  set schema(t) {
    this.set("schema", t);
  }
}
const Ul = qre;
class Hre extends io {
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
const ql = Hre;
class _p extends Lr {
  constructor(t, r, n) {
    super(t, r, n), this.element = "jsonSchemaDialect";
  }
}
C(_p, "default", new _p("https://spec.openapis.org/oas/3.1/dialect/base"));
const So = _p;
class Kre extends so {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(t) {
    this.set("identifier", t);
  }
}
const Hl = Kre;
class Gre extends oo {
}
const Kl = Gre;
class Jre extends ao {
  get schema() {
    return this.get("schema");
  }
  set schema(t) {
    this.set("schema", t);
  }
}
const Gl = Jre;
class Wre extends Bc {
}
const Id = Wre;
class zre extends Uc {
}
const Rd = zre;
class Yre extends co {
}
const Fd = Yre;
class Xre extends F {
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
const Qr = Xre;
class Qre extends lo {
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(t) {
    this.set("requestBody", t);
  }
}
const di = Qre;
class Zre extends uo {
  get schema() {
    return this.get("schema");
  }
  set schema(t) {
    this.set("schema", t);
  }
}
const Jl = Zre;
class ene extends fo {
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
const Wt = ene;
class tne extends po {
}
const Wl = tne;
let Vd = class extends ho {
};
Object.defineProperty(Vd.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(e) {
    this.set("description", e);
  },
  enumerable: !0
});
Object.defineProperty(Vd.prototype, "summary", {
  get() {
    return this.get("summary");
  },
  set(e) {
    this.set("summary", e);
  },
  enumerable: !0
});
const Br = Vd;
class rne extends mo {
}
const zl = rne;
let nne = class extends yo {
};
const Yl = nne;
class ine extends vo {
}
const Xl = ine;
let sne = class extends F {
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
  set example(t) {
    this.set("example", t);
  }
};
const hr = sne;
class one extends bo {
}
const Ql = one;
class ane extends Yc {
}
const Cd = ane;
class cne extends $o {
}
const Zl = cne;
class lne extends Oo {
}
const eu = lne;
class une extends Xc {
}
const Md = une;
class fne extends Qc {
}
const kd = fne, pne = {
  namespace: (e) => {
    const {
      base: t
    } = e;
    return t.register("callback", kl), t.register("components", Nl), t.register("contact", Dl), t.register("discriminator", Td), t.register("encoding", _d), t.register("example", Ll), t.register("externalDocumentation", Bl), t.register("header", Ul), t.register("info", ql), t.register("jsonSchemaDialect", So), t.register("license", Hl), t.register("link", Kl), t.register("mediaType", Gl), t.register("oAuthFlow", Id), t.register("oAuthFlows", Rd), t.register("openapi", Fd), t.register("openApi3_1", Qr), t.register("operation", di), t.register("parameter", Jl), t.register("pathItem", Wt), t.register("paths", Wl), t.register("reference", Br), t.register("requestBody", zl), t.register("response", Yl), t.register("responses", Xl), t.register("schema", hr), t.register("securityRequirement", Ql), t.register("securityScheme", Cd), t.register("server", Zl), t.register("serverVariable", eu), t.register("tag", Md), t.register("xml", kd), t;
  }
}, tu = pne;
class ru extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(ru.primaryClass);
  }
}
C(ru, "primaryClass", "components-path-items");
const hne = ru;
class nu extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(nu.primaryClass);
  }
}
C(nu, "primaryClass", "webhooks");
const dne = nu;
function Pg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pg(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const We = (e) => {
  if (Mc(e))
    return `${e.element.charAt(0).toUpperCase() + e.element.slice(1)}Element`;
}, et = mne({
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
  TagElement: ["content"]
}, Ci), yne = () => ({
  predicates: e
}) => {
  const t = (n, i) => !e.isParameterElement(n) || !e.isParameterElement(i) || !e.isStringElement(n.name) || !e.isStringElement(n.in) || !e.isStringElement(i.name) || !e.isStringElement(i.in) ? !1 : Ke(n.name) === Ke(i.name) && Ke(n.in) === Ke(i.in), r = [];
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
          const i = Js(r);
          if (!Array.isArray(i) || i.length === 0)
            return;
          const s = H0([], ["parameters", "content"], n), o = H4(t, [...s, ...i]);
          n.parameters = new XS(o);
        }
      }
    }
  };
}, vne = yne, gne = () => ({
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
            r.security = new QS((l = t) === null || l === void 0 ? void 0 : l.content);
          }
        }
      }
    }
  };
}, bne = gne, $ne = () => ({
  predicates: e
}) => {
  let t;
  const r = [];
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(n) {
          if (e.isArrayElement(n.servers)) {
            var i;
            t = (i = n.servers) === null || i === void 0 ? void 0 : i.content;
          }
        },
        leave() {
          t = void 0;
        }
      },
      PathItemElement: {
        enter(n, i, s, o, a) {
          if (a.some(e.isComponentsElement))
            return;
          typeof n.servers > "u" && typeof t < "u" && (n.servers = new YS(t));
          const {
            servers: c
          } = n;
          typeof c < "u" && e.isArrayElement(c) ? r.push([...c.content]) : r.push(void 0);
        },
        leave() {
          r.pop();
        }
      },
      OperationElement: {
        enter(n) {
          const i = Js(r);
          typeof i > "u" || e.isArrayElement(n.servers) || (n.servers = new ZS(i));
        }
      }
    }
  };
}, One = $ne, Ip = (e) => e.replace(/\s/g, ""), Rp = (e) => e.replace(/\W/gi, "_"), Sne = (e, t) => {
  const r = Rp(Ip(t.toLowerCase())), n = Rp(Ip(e));
  return `${r}${n}`;
}, wne = (e, t, r) => {
  const n = Ip(e);
  return n.length > 0 ? Rp(n) : Sne(t, r);
}, Ene = ({
  operationIdNormalizer: e = wne
} = {}) => ({
  predicates: t,
  namespace: r
}) => {
  const n = [], i = [], s = [];
  return {
    visitor: {
      OpenApi3_1Element: {
        leave() {
          const o = Qq((a) => Ke(a.operationId), i);
          Object.entries(o).forEach(([a, c]) => {
            c.length <= 1 || c.forEach((l, u) => {
              const f = `${a}${u + 1}`;
              l.operationId = new r.elements.String(f);
            });
          }), s.forEach((a) => {
            var c;
            if (typeof a.operationId > "u")
              return;
            const l = String(Ke(a.operationId)), u = i.find((f) => Ke(f.meta.get("originalOperationId")) === l);
            typeof u > "u" || (a.operationId = (c = u.operationId) === null || c === void 0 ? void 0 : c.clone(), a.meta.set("originalOperationId", l), a.set("__originalOperationId", l));
          }), i.length = 0, s.length = 0;
        }
      },
      PathItemElement: {
        enter(o) {
          const a = gn("path", Ke(o.meta.get("path")));
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
          const a = String(Ke(o.operationId)), c = Js(n), l = gn("method", Ke(o.meta.get("http-method"))), u = e(a, c, l);
          a !== u && (o.operationId = new r.elements.String(u), o.set("__originalOperationId", a), o.meta.set("originalOperationId", a), i.push(o));
        }
      },
      LinkElement: {
        leave(o) {
          t.isLinkElement(o) && (typeof o.operationId > "u" || s.push(o));
        }
      }
    }
  };
}, xne = Ene, Pne = () => ({
  predicates: e
}) => ({
  visitor: {
    ParameterElement: {
      leave(t, r, n, i, s) {
        var o, a;
        if (!s.some(e.isComponentsElement) && !(typeof t.schema > "u" || !e.isSchemaElement(t.schema)) && !(typeof ((o = t.schema) === null || o === void 0 ? void 0 : o.example) > "u" && typeof ((a = t.schema) === null || a === void 0 ? void 0 : a.examples) > "u")) {
          if (typeof t.examples < "u" && e.isObjectElement(t.examples)) {
            const c = t.examples.map((l) => {
              var u;
              return (u = l.value) === null || u === void 0 ? void 0 : u.clone();
            });
            typeof t.schema.examples < "u" && t.schema.set("examples", c), typeof t.schema.example < "u" && t.schema.set("example", c);
            return;
          }
          typeof t.example < "u" && (typeof t.schema.examples < "u" && t.schema.set("examples", [t.example.clone()]), typeof t.schema.example < "u" && t.schema.set("example", t.example.clone()));
        }
      }
    }
  }
}), Ane = Pne, jne = () => ({
  predicates: e
}) => ({
  visitor: {
    HeaderElement: {
      leave(t, r, n, i, s) {
        var o, a;
        if (!s.some(e.isComponentsElement) && !(typeof t.schema > "u" || !e.isSchemaElement(t.schema)) && !(typeof ((o = t.schema) === null || o === void 0 ? void 0 : o.example) > "u" && typeof ((a = t.schema) === null || a === void 0 ? void 0 : a.examples) > "u")) {
          if (typeof t.examples < "u" && e.isObjectElement(t.examples)) {
            const c = t.examples.map((l) => {
              var u;
              return (u = l.value) === null || u === void 0 ? void 0 : u.clone();
            });
            typeof t.schema.examples < "u" && t.schema.set("examples", c), typeof t.schema.example < "u" && t.schema.set("example", c);
            return;
          }
          typeof t.example < "u" && (typeof t.schema.examples < "u" && t.schema.set("examples", [t.example.clone()]), typeof t.schema.example < "u" && t.schema.set("example", t.example.clone()));
        }
      }
    }
  }
}), Tne = jne, _ne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof kl || e(n) && t("callback", n) && r("object", n)), Ine = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Nl || e(n) && t("components", n) && r("object", n)), Rne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Dl || e(n) && t("contact", n) && r("object", n)), Fne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ll || e(n) && t("example", n) && r("object", n)), Vne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Bl || e(n) && t("externalDocumentation", n) && r("object", n)), Cne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ul || e(n) && t("header", n) && r("object", n)), Mne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ql || e(n) && t("info", n) && r("object", n)), cw = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof So || e(n) && t("jsonSchemaDialect", n) && r("string", n)), kne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Hl || e(n) && t("license", n) && r("object", n)), lw = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Kl || e(n) && t("link", n) && r("object", n)), Ua = (e) => {
  if (!lw(e) || !K(e.operationRef))
    return !1;
  const t = e.operationRef.toValue();
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, Nne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Fd || e(n) && t("openapi", n) && r("string", n)), Nd = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r,
  hasClass: n
}) => (i) => i instanceof Qr || e(i) && t("openApi3_1", i) && r("object", i) && n("api", i)), uw = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof di || e(n) && t("operation", n) && r("object", n)), Dne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Jl || e(n) && t("parameter", n) && r("object", n)), iu = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Wt || e(n) && t("pathItem", n) && r("object", n)), su = (e) => {
  if (!iu(e) || !K(e.$ref))
    return !1;
  const t = e.$ref.toValue();
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, Lne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Wl || e(n) && t("paths", n) && r("object", n)), ki = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Br || e(n) && t("reference", n) && r("object", n)), ou = (e) => {
  if (!ki(e) || !K(e.$ref))
    return !1;
  const t = e.$ref.toValue();
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, Bne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof zl || e(n) && t("requestBody", n) && r("object", n)), Une = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Yl || e(n) && t("response", n) && r("object", n)), qne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Xl || e(n) && t("responses", n) && r("object", n)), Ni = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof hr || e(n) && t("schema", n) && r("object", n)), Dd = (e) => kc(e) && e.classes.includes("boolean-json-schema"), Hne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ql || e(n) && t("securityRequirement", n) && r("object", n)), Kne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Zl || e(n) && t("server", n) && r("object", n)), Gne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof eu || e(n) && t("serverVariable", n) && r("object", n)), Jne = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Gl || e(n) && t("mediaType", n) && r("object", n)), Wne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: Dd,
  isCallbackElement: _ne,
  isComponentsElement: Ine,
  isContactElement: Rne,
  isExampleElement: Fne,
  isExternalDocumentationElement: Vne,
  isHeaderElement: Cne,
  isInfoElement: Mne,
  isJsonSchemaDialectElement: cw,
  isLicenseElement: kne,
  isLinkElement: lw,
  isLinkElementExternal: Ua,
  isMediaTypeElement: Jne,
  isOpenApi3_1Element: Nd,
  isOpenapiElement: Nne,
  isOperationElement: uw,
  isParameterElement: Dne,
  isPathItemElement: iu,
  isPathItemElementExternal: su,
  isPathsElement: Lne,
  isReferenceElement: ki,
  isReferenceElementExternal: ou,
  isRequestBodyElement: Bne,
  isResponseElement: Une,
  isResponsesElement: qne,
  isSchemaElement: Ni,
  isSecurityRequirementElement: Hne,
  isServerElement: Kne,
  isServerVariableElement: Gne
}, Symbol.toStringTag, { value: "Module" }));
function Ag(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ag(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ag(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const zne = () => {
  const e = Ri(tu);
  return {
    predicates: jg(jg({}, Wne), {}, {
      isStringElement: K,
      isArrayElement: Ot,
      isObjectElement: re,
      includesClasses: rs
    }),
    namespace: e
  };
}, fw = zne, Yne = $(Y, b, {
  props: {
    specPath: U(["document", "objects", "OpenApi"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Qr(), this.openApiSemanticElement = this.element;
  },
  methods: {
    ObjectElement(e) {
      return this.openApiGenericElement = e, Y.compose.methods.ObjectElement.call(this, e);
    }
  }
}), Xne = Yne, {
  visitors: {
    document: {
      objects: {
        Info: {
          $visitor: Qne
        }
      }
    }
  }
} = x, Zne = $(Qne, {
  init() {
    this.element = new ql();
  }
}), eie = Zne, tie = b, rie = tie, {
  visitors: {
    document: {
      objects: {
        Contact: {
          $visitor: nie
        }
      }
    }
  }
} = x, iie = $(nie, {
  init() {
    this.element = new Dl();
  }
}), sie = iie, {
  visitors: {
    document: {
      objects: {
        License: {
          $visitor: oie
        }
      }
    }
  }
} = x, aie = $(oie, {
  init() {
    this.element = new Hl();
  }
}), cie = aie, lie = b, uie = lie, {
  visitors: {
    document: {
      objects: {
        Link: {
          $visitor: fie
        }
      }
    }
  }
} = x, pie = $(fie, {
  init() {
    this.element = new Kl();
  }
}), hie = pie, die = $(Ye, b, {
  methods: {
    StringElement(e) {
      const t = new So(e.toValue());
      return this.copyMetaAndAttributes(e, t), this.element = t, N;
    }
  }
}), mie = die, {
  visitors: {
    document: {
      objects: {
        Server: {
          $visitor: yie
        }
      }
    }
  }
} = x, vie = $(yie, {
  init() {
    this.element = new Zl();
  }
}), gie = vie, {
  visitors: {
    document: {
      objects: {
        ServerVariable: {
          $visitor: bie
        }
      }
    }
  }
} = x, $ie = $(bie, {
  init() {
    this.element = new eu();
  }
}), Oie = $ie, {
  visitors: {
    document: {
      objects: {
        MediaType: {
          $visitor: Sie
        }
      }
    }
  }
} = x, wie = $(Sie, {
  init() {
    this.element = new Gl();
  }
}), Eie = wie, {
  visitors: {
    document: {
      objects: {
        SecurityRequirement: {
          $visitor: xie
        }
      }
    }
  }
} = x, Pie = $(xie, {
  init() {
    this.element = new Ql();
  }
}), Aie = Pie, {
  visitors: {
    document: {
      objects: {
        Components: {
          $visitor: jie
        }
      }
    }
  }
} = x, Tie = $(jie, {
  init() {
    this.element = new Nl();
  }
}), _ie = Tie, {
  visitors: {
    document: {
      objects: {
        Tag: {
          $visitor: Iie
        }
      }
    }
  }
} = x, Rie = $(Iie, {
  init() {
    this.element = new Md();
  }
}), Fie = Rie, {
  visitors: {
    document: {
      objects: {
        Reference: {
          $visitor: Vie
        }
      }
    }
  }
} = x, Cie = $(Vie, {
  init() {
    this.element = new Br();
  }
}), Mie = Cie, kie = b, Nie = kie, Die = b, Lie = Die, {
  visitors: {
    document: {
      objects: {
        Parameter: {
          $visitor: Bie
        }
      }
    }
  }
} = x, Uie = $(Bie, {
  init() {
    this.element = new Jl();
  }
}), qie = Uie, {
  visitors: {
    document: {
      objects: {
        Header: {
          $visitor: Hie
        }
      }
    }
  }
} = x, Kie = $(Hie, {
  init() {
    this.element = new Ul();
  }
}), Gie = Kie, Jie = $({
  props: {
    parent: null
  },
  // @ts-ignore
  init({
    parent: e = this.parent
  }) {
    this.parent = e, this.passingOptionsNames = [...this.passingOptionsNames, "parent"];
  }
}), Or = Jie, Wie = $(Y, Or, b, {
  props: {
    specPath: U(["document", "objects", "Schema"]),
    canSupportSpecificationExtensions: !0
  },
  // @ts-ignore
  init() {
    const e = () => {
      let n;
      return this.openApiSemanticElement !== null && cw(this.openApiSemanticElement.jsonSchemaDialect) ? n = this.openApiSemanticElement.jsonSchemaDialect.toValue() : this.openApiGenericElement !== null && K(this.openApiGenericElement.get("jsonSchemaDialect")) ? n = this.openApiGenericElement.get("jsonSchemaDialect").toValue() : n = So.default.toValue(), n;
    }, t = (n) => {
      if (dd(this.parent) && !K(n.get("$schema")))
        this.element.setMetaProperty("inherited$schema", e());
      else if (Ni(this.parent) && !K(n.get("$schema"))) {
        var i, s;
        const o = gn((i = this.parent.meta.get("inherited$schema")) === null || i === void 0 ? void 0 : i.toValue(), (s = this.parent.$schema) === null || s === void 0 ? void 0 : s.toValue());
        this.element.setMetaProperty("inherited$schema", o);
      }
    }, r = (n) => {
      var i;
      const s = this.parent !== null ? this.parent.getMetaProperty("inherited$id", []).clone() : new pe(), o = (i = n.get("$id")) === null || i === void 0 ? void 0 : i.toValue();
      md(o) && s.push(o), this.element.setMetaProperty("inherited$id", s);
    };
    this.ObjectElement = function(i) {
      this.element = new hr(), t(i), r(i), this.parent = this.element;
      const s = Y.compose.methods.ObjectElement.call(this, i);
      return K(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), s;
    }, this.BooleanElement = function(i) {
      return this.element = i.clone(), this.element.classes.push("boolean-json-schema"), N;
    };
  }
}), zie = Wie, Yie = b, Xie = Yie, Qie = $(b, {
  methods: {
    ObjectElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-$vocabulary"), N;
    }
  }
}), Zie = Qie, ese = b, tse = ese, rse = b, nse = rse, ise = b, sse = ise, ose = b, ase = ose, cse = $(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), lse = cse, use = $(W, Or, b, {
  props: {
    specPath: U(["document", "objects", "Schema"])
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-$defs");
  }
}), fse = use, pse = b, hse = pse, dse = $(Ye, Or, b, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-allOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (re(t)) {
          const r = this.toRefractedElement(["document", "objects", "Schema"], t);
          this.element.push(r);
        } else {
          const r = t.clone();
          this.element.push(r);
        }
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), mse = dse, yse = $(Ye, Or, b, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-anyOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (re(t)) {
          const r = this.toRefractedElement(["document", "objects", "Schema"], t);
          this.element.push(r);
        } else {
          const r = t.clone();
          this.element.push(r);
        }
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), vse = yse, gse = $(Ye, Or, b, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-oneOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (re(t)) {
          const r = this.toRefractedElement(["document", "objects", "Schema"], t);
          this.element.push(r);
        } else {
          const r = t.clone();
          this.element.push(r);
        }
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), bse = gse, $se = $(W, Or, b, {
  props: {
    specPath: U(["document", "objects", "Schema"])
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-dependentSchemas");
  }
}), Ose = $se, Sse = $(Ye, Or, b, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-prefixItems");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (re(t)) {
          const r = this.toRefractedElement(["document", "objects", "Schema"], t);
          this.element.push(r);
        } else {
          const r = t.clone();
          this.element.push(r);
        }
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), wse = Sse, Ese = $(W, Or, b, {
  props: {
    specPath: U(["document", "objects", "Schema"])
  },
  // @ts-ignore
  init() {
    this.element = new F(), this.element.classes.push("json-schema-properties");
  }
}), xse = Ese, Pse = $(W, Or, b, {
  props: {
    specPath: U(["document", "objects", "Schema"])
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-patternProperties");
  }
}), Ase = Pse, jse = $(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-type"), N;
    },
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-type"), N;
    }
  }
}), Tse = jse, _se = $(b, {
  methods: {
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-enum"), N;
    }
  }
}), Ise = _se, Rse = b, Fse = Rse, Vse = b, Cse = Vse, Mse = b, kse = Mse, Nse = b, Dse = Nse, Lse = b, Bse = Lse, Use = b, qse = Use, Hse = b, Kse = Hse, Gse = b, Jse = Gse, Wse = b, zse = Wse, Yse = b, Xse = Yse, Qse = b, Zse = Qse, eoe = b, toe = eoe, roe = b, noe = roe, ioe = b, soe = ioe, ooe = b, aoe = ooe, coe = b, loe = coe, uoe = $(b, {
  methods: {
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-required"), N;
    }
  }
}), foe = uoe, poe = $(b, {
  methods: {
    ObjectElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-dependentRequired"), N;
    }
  }
}), hoe = poe, doe = b, moe = doe, yoe = b, voe = yoe, goe = b, boe = goe, $oe = b, Ooe = $oe, Soe = b, woe = Soe, Eoe = b, xoe = Eoe, Poe = $(b, {
  methods: {
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-examples"), N;
    }
  }
}), Aoe = Poe, joe = b, Toe = joe, _oe = b, Ioe = _oe, Roe = b, Foe = Roe, Voe = b, Coe = Voe, {
  visitors: {
    document: {
      objects: {
        Discriminator: {
          $visitor: Moe
        }
      }
    }
  }
} = x, koe = $(Moe, {
  props: {
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Td();
  }
}), Noe = koe, {
  visitors: {
    document: {
      objects: {
        XML: {
          $visitor: Doe
        }
      }
    }
  }
} = x, Loe = $(Doe, {
  init() {
    this.element = new kd();
  }
}), Boe = Loe, Uoe = $(W, b, {
  props: {
    specPath: U(["document", "objects", "Schema"])
  },
  init() {
    this.element = new zS();
  }
}), qoe = Uoe, Hoe = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"]
  },
  init() {
    this.element = new hne();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(ki).forEach((r) => {
        r.setMetaProperty("referenced-element", "pathItem");
      }), t;
    }
  }
}), Koe = Hoe, {
  visitors: {
    document: {
      objects: {
        Example: {
          $visitor: Goe
        }
      }
    }
  }
} = x, Joe = $(Goe, {
  init() {
    this.element = new Ll();
  }
}), Woe = Joe, {
  visitors: {
    document: {
      objects: {
        ExternalDocumentation: {
          $visitor: zoe
        }
      }
    }
  }
} = x, Yoe = $(zoe, {
  init() {
    this.element = new Bl();
  }
}), Xoe = Yoe, {
  visitors: {
    document: {
      objects: {
        Encoding: {
          $visitor: Qoe
        }
      }
    }
  }
} = x, Zoe = $(Qoe, {
  init() {
    this.element = new _d();
  }
}), eae = Zoe, {
  visitors: {
    document: {
      objects: {
        Paths: {
          $visitor: tae
        }
      }
    }
  }
} = x, rae = $(tae, {
  init() {
    this.element = new Wl();
  }
}), nae = rae, {
  visitors: {
    document: {
      objects: {
        RequestBody: {
          $visitor: iae
        }
      }
    }
  }
} = x, sae = $(iae, {
  init() {
    this.element = new zl();
  }
}), oae = sae, {
  visitors: {
    document: {
      objects: {
        Callback: {
          $visitor: Tg
        }
      }
    }
  }
} = x, aae = $(Tg, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"]
  },
  init() {
    this.element = new kl();
  },
  methods: {
    ObjectElement(e) {
      const t = Tg.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(ki).forEach((r) => {
        r.setMetaProperty("referenced-element", "pathItem");
      }), t;
    }
  }
}), cae = aae, {
  visitors: {
    document: {
      objects: {
        Response: {
          $visitor: lae
        }
      }
    }
  }
} = x, uae = $(lae, {
  init() {
    this.element = new Yl();
  }
}), fae = uae, {
  visitors: {
    document: {
      objects: {
        Responses: {
          $visitor: pae
        }
      }
    }
  }
} = x, hae = $(pae, {
  init() {
    this.element = new Xl();
  }
}), dae = hae, {
  visitors: {
    document: {
      objects: {
        Operation: {
          $visitor: mae
        }
      }
    }
  }
} = x, yae = $(mae, {
  init() {
    this.element = new di();
  }
}), vae = yae, {
  visitors: {
    document: {
      objects: {
        PathItem: {
          $visitor: gae
        }
      }
    }
  }
} = x, bae = $(gae, {
  init() {
    this.element = new Wt();
  }
}), $ae = bae, {
  visitors: {
    document: {
      objects: {
        SecurityScheme: {
          $visitor: Oae
        }
      }
    }
  }
} = x, Sae = $(Oae, {
  init() {
    this.element = new Cd();
  }
}), wae = Sae, {
  visitors: {
    document: {
      objects: {
        OAuthFlows: {
          $visitor: Eae
        }
      }
    }
  }
} = x, xae = $(Eae, {
  init() {
    this.element = new Rd();
  }
}), Pae = xae, {
  visitors: {
    document: {
      objects: {
        OAuthFlow: {
          $visitor: Aae
        }
      }
    }
  }
} = x, jae = $(Aae, {
  init() {
    this.element = new Id();
  }
}), Tae = jae, _ae = $(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"]
  },
  init() {
    this.element = new dne();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(ki).forEach((r) => {
        r.setMetaProperty("referenced-element", "pathItem");
      }), this.element.filter(iu).forEach((r, n) => {
        r.setMetaProperty("webhook-name", n.toValue());
      }), t;
    }
  }
}), Iae = _ae, Rae = {
  visitors: {
    value: x.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: Xne,
          fixedFields: {
            openapi: x.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: mie,
            servers: x.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: Iae,
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: x.visitors.document.objects.OpenApi.fixedFields.security,
            tags: x.visitors.document.objects.OpenApi.fixedFields.tags,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: eie,
          fixedFields: {
            title: x.visitors.document.objects.Info.fixedFields.title,
            description: x.visitors.document.objects.Info.fixedFields.description,
            summary: rie,
            termsOfService: x.visitors.document.objects.Info.fixedFields.termsOfService,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: x.visitors.document.objects.Info.fixedFields.version
          }
        },
        Contact: {
          $visitor: sie,
          fixedFields: {
            name: x.visitors.document.objects.Contact.fixedFields.name,
            url: x.visitors.document.objects.Contact.fixedFields.url,
            email: x.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: cie,
          fixedFields: {
            name: x.visitors.document.objects.License.fixedFields.name,
            identifier: uie,
            url: x.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: gie,
          fixedFields: {
            url: x.visitors.document.objects.Server.fixedFields.url,
            description: x.visitors.document.objects.Server.fixedFields.description,
            variables: x.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: Oie,
          fixedFields: {
            enum: x.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: x.visitors.document.objects.ServerVariable.fixedFields.default,
            description: x.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: _ie,
          fixedFields: {
            schemas: qoe,
            responses: x.visitors.document.objects.Components.fixedFields.responses,
            parameters: x.visitors.document.objects.Components.fixedFields.parameters,
            examples: x.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: x.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: x.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: x.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: x.visitors.document.objects.Components.fixedFields.links,
            callbacks: x.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: Koe
          }
        },
        Paths: {
          $visitor: nae
        },
        PathItem: {
          $visitor: $ae,
          fixedFields: {
            $ref: x.visitors.document.objects.PathItem.fixedFields.$ref,
            summary: x.visitors.document.objects.PathItem.fixedFields.summary,
            description: x.visitors.document.objects.PathItem.fixedFields.description,
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
            servers: x.visitors.document.objects.PathItem.fixedFields.servers,
            parameters: x.visitors.document.objects.PathItem.fixedFields.parameters
          }
        },
        Operation: {
          $visitor: vae,
          fixedFields: {
            tags: x.visitors.document.objects.Operation.fixedFields.tags,
            summary: x.visitors.document.objects.Operation.fixedFields.summary,
            description: x.visitors.document.objects.Operation.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: x.visitors.document.objects.Operation.fixedFields.operationId,
            parameters: x.visitors.document.objects.Operation.fixedFields.parameters,
            requestBody: x.visitors.document.objects.Operation.fixedFields.requestBody,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: x.visitors.document.objects.Operation.fixedFields.callbacks,
            deprecated: x.visitors.document.objects.Operation.fixedFields.deprecated,
            security: x.visitors.document.objects.Operation.fixedFields.security,
            servers: x.visitors.document.objects.Operation.fixedFields.servers
          }
        },
        ExternalDocumentation: {
          $visitor: Xoe,
          fixedFields: {
            description: x.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: x.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: qie,
          fixedFields: {
            name: x.visitors.document.objects.Parameter.fixedFields.name,
            in: x.visitors.document.objects.Parameter.fixedFields.in,
            description: x.visitors.document.objects.Parameter.fixedFields.description,
            required: x.visitors.document.objects.Parameter.fixedFields.required,
            deprecated: x.visitors.document.objects.Parameter.fixedFields.deprecated,
            allowEmptyValue: x.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,
            style: x.visitors.document.objects.Parameter.fixedFields.style,
            explode: x.visitors.document.objects.Parameter.fixedFields.explode,
            allowReserved: x.visitors.document.objects.Parameter.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: x.visitors.document.objects.Parameter.fixedFields.example,
            examples: x.visitors.document.objects.Parameter.fixedFields.examples,
            content: x.visitors.document.objects.Parameter.fixedFields.content
          }
        },
        RequestBody: {
          $visitor: oae,
          fixedFields: {
            description: x.visitors.document.objects.RequestBody.fixedFields.description,
            content: x.visitors.document.objects.RequestBody.fixedFields.content,
            required: x.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: Eie,
          fixedFields: {
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: x.visitors.document.objects.MediaType.fixedFields.example,
            examples: x.visitors.document.objects.MediaType.fixedFields.examples,
            encoding: x.visitors.document.objects.MediaType.fixedFields.encoding
          }
        },
        Encoding: {
          $visitor: eae,
          fixedFields: {
            contentType: x.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: x.visitors.document.objects.Encoding.fixedFields.headers,
            style: x.visitors.document.objects.Encoding.fixedFields.style,
            explode: x.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: x.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: dae,
          fixedFields: {
            default: x.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: fae,
          fixedFields: {
            description: x.visitors.document.objects.Response.fixedFields.description,
            headers: x.visitors.document.objects.Response.fixedFields.headers,
            content: x.visitors.document.objects.Response.fixedFields.content,
            links: x.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: cae
        },
        Example: {
          $visitor: Woe,
          fixedFields: {
            summary: x.visitors.document.objects.Example.fixedFields.summary,
            description: x.visitors.document.objects.Example.fixedFields.description,
            value: x.visitors.document.objects.Example.fixedFields.value,
            externalValue: x.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: hie,
          fixedFields: {
            operationRef: x.visitors.document.objects.Link.fixedFields.operationRef,
            operationId: x.visitors.document.objects.Link.fixedFields.operationId,
            parameters: x.visitors.document.objects.Link.fixedFields.parameters,
            requestBody: x.visitors.document.objects.Link.fixedFields.requestBody,
            description: x.visitors.document.objects.Link.fixedFields.description,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: Gie,
          fixedFields: {
            description: x.visitors.document.objects.Header.fixedFields.description,
            required: x.visitors.document.objects.Header.fixedFields.required,
            deprecated: x.visitors.document.objects.Header.fixedFields.deprecated,
            allowEmptyValue: x.visitors.document.objects.Header.fixedFields.allowEmptyValue,
            style: x.visitors.document.objects.Header.fixedFields.style,
            explode: x.visitors.document.objects.Header.fixedFields.explode,
            allowReserved: x.visitors.document.objects.Header.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: x.visitors.document.objects.Header.fixedFields.example,
            examples: x.visitors.document.objects.Header.fixedFields.examples,
            content: x.visitors.document.objects.Header.fixedFields.content
          }
        },
        Tag: {
          $visitor: Fie,
          fixedFields: {
            name: x.visitors.document.objects.Tag.fixedFields.name,
            description: x.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: Mie,
          fixedFields: {
            $ref: x.visitors.document.objects.Reference.fixedFields.$ref,
            summary: Nie,
            description: Lie
          }
        },
        Schema: {
          $visitor: zie,
          fixedFields: {
            // core vocabulary
            $schema: Xie,
            $vocabulary: Zie,
            $id: tse,
            $anchor: nse,
            $dynamicAnchor: sse,
            $dynamicRef: ase,
            $ref: lse,
            $defs: fse,
            $comment: hse,
            // applicator vocabulary
            allOf: mse,
            anyOf: vse,
            oneOf: bse,
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
            dependentSchemas: Ose,
            prefixItems: wse,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: xse,
            patternProperties: Ase,
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
            type: Tse,
            enum: Ise,
            const: Fse,
            // validation Keywords for Numeric Instances (number and integer)
            multipleOf: Cse,
            maximum: kse,
            exclusiveMaximum: Dse,
            minimum: Bse,
            exclusiveMinimum: qse,
            // validation Keywords for Strings
            maxLength: Kse,
            minLength: Jse,
            pattern: zse,
            // validation Keywords for Arrays
            maxItems: Xse,
            minItems: Zse,
            uniqueItems: toe,
            maxContains: noe,
            minContains: soe,
            // validation Keywords for Objects
            maxProperties: aoe,
            minProperties: loe,
            required: foe,
            dependentRequired: hoe,
            // basic Meta-Data Annotations vocabulary
            title: moe,
            description: voe,
            default: boe,
            deprecated: Ooe,
            readOnly: woe,
            writeOnly: xoe,
            examples: Aoe,
            // semantic Content With "format" vocabulary
            format: Toe,
            // contents of String-Encoded Data vocabulary
            contentEncoding: Ioe,
            contentMediaType: Foe,
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
            example: Coe
          }
        },
        Discriminator: {
          $visitor: Noe,
          fixedFields: {
            propertyName: x.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: x.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: Boe,
          fixedFields: {
            name: x.visitors.document.objects.XML.fixedFields.name,
            namespace: x.visitors.document.objects.XML.fixedFields.namespace,
            prefix: x.visitors.document.objects.XML.fixedFields.prefix,
            attribute: x.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: x.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: wae,
          fixedFields: {
            type: x.visitors.document.objects.SecurityScheme.fixedFields.type,
            description: x.visitors.document.objects.SecurityScheme.fixedFields.description,
            name: x.visitors.document.objects.SecurityScheme.fixedFields.name,
            in: x.visitors.document.objects.SecurityScheme.fixedFields.in,
            scheme: x.visitors.document.objects.SecurityScheme.fixedFields.scheme,
            bearerFormat: x.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: x.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl
          }
        },
        OAuthFlows: {
          $visitor: Pae,
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
          $visitor: Tae,
          fixedFields: {
            authorizationUrl: x.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: x.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: x.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: x.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: Aie
        }
      },
      extension: {
        $visitor: x.visitors.document.extension.$visitor
      }
    }
  }
}, Fae = Rae;
function _g(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _g(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _g(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Cae = (e, {
  specPath: t = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = bd(e), i = Nc(Fae), s = fi(t, [], i);
  return He(n, s, {
    state: {
      specObj: i
    }
  }), Xs(s.element, r, {
    toolboxCreator: fw,
    visitorOptions: {
      keyMap: et,
      nodeTypeGetter: We
    }
  });
}, ne = (e) => (t, r = {}) => Cae(t, Vae({
  specPath: e
}, r));
kl.refract = ne(["visitors", "document", "objects", "Callback", "$visitor"]);
Nl.refract = ne(["visitors", "document", "objects", "Components", "$visitor"]);
Dl.refract = ne(["visitors", "document", "objects", "Contact", "$visitor"]);
Ll.refract = ne(["visitors", "document", "objects", "Example", "$visitor"]);
Td.refract = ne(["visitors", "document", "objects", "Discriminator", "$visitor"]);
_d.refract = ne(["visitors", "document", "objects", "Encoding", "$visitor"]);
Bl.refract = ne(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Ul.refract = ne(["visitors", "document", "objects", "Header", "$visitor"]);
ql.refract = ne(["visitors", "document", "objects", "Info", "$visitor"]);
So.refract = ne(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
Hl.refract = ne(["visitors", "document", "objects", "License", "$visitor"]);
Kl.refract = ne(["visitors", "document", "objects", "Link", "$visitor"]);
Gl.refract = ne(["visitors", "document", "objects", "MediaType", "$visitor"]);
Id.refract = ne(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Rd.refract = ne(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Fd.refract = ne(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
Qr.refract = ne(["visitors", "document", "objects", "OpenApi", "$visitor"]);
di.refract = ne(["visitors", "document", "objects", "Operation", "$visitor"]);
Jl.refract = ne(["visitors", "document", "objects", "Parameter", "$visitor"]);
Wt.refract = ne(["visitors", "document", "objects", "PathItem", "$visitor"]);
Wl.refract = ne(["visitors", "document", "objects", "Paths", "$visitor"]);
Br.refract = ne(["visitors", "document", "objects", "Reference", "$visitor"]);
zl.refract = ne(["visitors", "document", "objects", "RequestBody", "$visitor"]);
Yl.refract = ne(["visitors", "document", "objects", "Response", "$visitor"]);
Xl.refract = ne(["visitors", "document", "objects", "Responses", "$visitor"]);
hr.refract = ne(["visitors", "document", "objects", "Schema", "$visitor"]);
Ql.refract = ne(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
Cd.refract = ne(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
Zl.refract = ne(["visitors", "document", "objects", "Server", "$visitor"]);
eu.refract = ne(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Md.refract = ne(["visitors", "document", "objects", "Tag", "$visitor"]);
kd.refract = ne(["visitors", "document", "objects", "XML", "$visitor"]);
var pw = { exports: {} }, $e = pw.exports = {}, Bt, Ut;
function Fp() {
  throw new Error("setTimeout has not been defined");
}
function Vp() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Bt = setTimeout : Bt = Fp;
  } catch {
    Bt = Fp;
  }
  try {
    typeof clearTimeout == "function" ? Ut = clearTimeout : Ut = Vp;
  } catch {
    Ut = Vp;
  }
})();
function hw(e) {
  if (Bt === setTimeout)
    return setTimeout(e, 0);
  if ((Bt === Fp || !Bt) && setTimeout)
    return Bt = setTimeout, setTimeout(e, 0);
  try {
    return Bt(e, 0);
  } catch {
    try {
      return Bt.call(null, e, 0);
    } catch {
      return Bt.call(this, e, 0);
    }
  }
}
function Mae(e) {
  if (Ut === clearTimeout)
    return clearTimeout(e);
  if ((Ut === Vp || !Ut) && clearTimeout)
    return Ut = clearTimeout, clearTimeout(e);
  try {
    return Ut(e);
  } catch {
    try {
      return Ut.call(null, e);
    } catch {
      return Ut.call(this, e);
    }
  }
}
var sr = [], Xn = !1, ln, ia = -1;
function kae() {
  !Xn || !ln || (Xn = !1, ln.length ? sr = ln.concat(sr) : ia = -1, sr.length && dw());
}
function dw() {
  if (!Xn) {
    var e = hw(kae);
    Xn = !0;
    for (var t = sr.length; t; ) {
      for (ln = sr, sr = []; ++ia < t; )
        ln && ln[ia].run();
      ia = -1, t = sr.length;
    }
    ln = null, Xn = !1, Mae(e);
  }
}
$e.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  sr.push(new mw(e, t)), sr.length === 1 && !Xn && hw(dw);
};
function mw(e, t) {
  this.fun = e, this.array = t;
}
mw.prototype.run = function() {
  this.fun.apply(null, this.array);
};
$e.title = "browser";
$e.browser = !0;
$e.env = {};
$e.argv = [];
$e.version = "";
$e.versions = {};
function Sr() {
}
$e.on = Sr;
$e.addListener = Sr;
$e.once = Sr;
$e.off = Sr;
$e.removeListener = Sr;
$e.removeAllListeners = Sr;
$e.emit = Sr;
$e.prependListener = Sr;
$e.prependOnceListener = Sr;
$e.listeners = function(e) {
  return [];
};
$e.binding = function(e) {
  throw new Error("process.binding is not supported");
};
$e.cwd = function() {
  return "/";
};
$e.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
$e.umask = function() {
  return 0;
};
var Nae = pw.exports;
const qa = /* @__PURE__ */ _e(Nae), Ld = () => ci(_c(/^win/), ["platform"], qa), Bd = (e) => {
  try {
    const t = new URL(e);
    return h6(":", t.protocol);
  } catch {
    return;
  }
};
Ee(Bd, Fa);
const Dae = (e) => {
  const t = e.lastIndexOf(".");
  return t >= 0 ? e.substr(t).toLowerCase() : "";
}, ns = (e) => {
  if (qa.browser)
    return !1;
  const t = Bd(e);
  return vr(t) || t === "file" || /^[a-zA-Z]$/.test(t);
}, is = (e) => {
  const t = Bd(e);
  return t === "http" || t === "https";
}, yw = (e, t) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], n = Kn(!1, "keepFileProtocol", t), i = Kn(Ld, "isWindows", t);
  let s = decodeURI(e);
  for (let a = 0; a < r.length; a += 2)
    s = s.replace(r[a], r[a + 1]);
  let o = s.substr(0, 7).toLowerCase() === "file://";
  return o && (s = s[7] === "/" ? s.substr(8) : s.substr(7), i() && s[1] === "/" && (s = `${s[0]}:${s.substr(1)}`), n ? s = `file:///${s}` : (o = !1, s = i() ? s : `/${s}`)), i() && !o && (s = f6("/", "\\", s), s.substr(1, 2) === ":\\" && (s = s[0].toUpperCase() + s.substr(1))), s;
}, Lae = (e) => {
  const t = [/\?/g, "%3F", /#/g, "%23"];
  let r = e;
  Ld() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let n = 0; n < t.length; n += 2)
    r = r.replace(t[n], t[n + 1]);
  return r;
}, vw = (e) => {
  const t = e.indexOf("#");
  return t !== -1 ? e.substr(t) : "#";
}, Ct = (e) => {
  const t = e.indexOf("#");
  let r = e;
  return t >= 0 && (r = e.substr(0, t)), r;
}, gw = () => {
  if (qa.browser)
    return Ct(globalThis.location.href);
  const e = qa.cwd(), t = Js(e);
  return ["/", "\\"].includes(t) ? e : e + (Ld() ? "\\" : "/");
}, yt = (e, t) => {
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
}, wo = (e) => ns(e) ? Lae(yw(e)) : encodeURI(decodeURI(e)).replace(/%5B/g, "[").replace(/%5D/g, "]"), ot = (e) => ns(e) ? yw(e) : decodeURI(e), Bae = $({
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
      return An(this.uri) ? Dae(this.uri) : "";
    },
    toString() {
      return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(wt(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
    }
  }
}), $n = Bae, Uae = {
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
  }
}, qae = Uae, Hae = p4(lt(["resolve", "baseURI"]), WU(["resolve", "baseURI"])), Kae = (e) => Y0(e) ? gw() : e, Gae = (e, t) => {
  const r = b4(e, t);
  return S4(Hae, Kae, r);
};
class Jae extends Error {
  constructor(t, r) {
    if (super(t), this.name = this.constructor.name, this.message = t, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(t).stack, bs(r) && ts("cause", r) && !ts("cause", this)) {
      const {
        cause: n
      } = r;
      this.cause = n, ts("stack", n) && (this.stack = `${this.stack}
CAUSE: ${n == null ? void 0 : n.stack}`);
    }
  }
}
const Di = Jae;
class Wae extends Di {
  constructor(t = "Not Implemented", r) {
    super(t, r);
  }
}
const On = Wae;
class zae extends Di {
}
const au = zae;
class Yae extends au {
}
const bw = Yae;
class Xae extends Di {
}
const Et = Xae;
class Qae extends Di {
  constructor(t, r) {
    super(t, {
      cause: r.cause
    }), C(this, "plugin", void 0), this.plugin = r.plugin;
  }
}
const Zae = Qae;
class ece extends Di {
}
const tce = ece;
class rce extends au {
}
const $w = rce;
class nce extends Di {
}
const Ow = nce;
class ice extends Et {
}
const sce = ice;
class oce extends Ow {
}
const cr = oce, Ud = async (e, t, r) => {
  const n = await Promise.all(r.map(fi([e], [t])));
  return r.filter((i, s) => n[s]);
}, qd = async (e, t, r) => {
  let n;
  for (const i of r)
    try {
      const s = await i[e].call(i, ...t);
      return {
        plugin: i,
        result: s
      };
    } catch (s) {
      n = new Zae("Error while running plugin", {
        cause: s,
        plugin: i
      });
    }
  return Promise.reject(n);
}, ace = async (e, t) => {
  const r = t.resolve.resolvers.map((i) => {
    const s = Object.create(i);
    return Object.assign(s, t.resolve.resolverOpts);
  }), n = await Ud("canRead", e, r);
  if (Ws(n))
    throw new bw(e.uri);
  try {
    const {
      result: i
    } = await qd("read", [e], n);
    return i;
  } catch (i) {
    throw new au(`Error while reading file "${e.uri}"`, {
      cause: i
    });
  }
};
function Ig(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ig(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const cce = async (e, t) => {
  const r = t.parse.parsers.map((i) => {
    const s = Object.create(i);
    return Object.assign(s, t.parse.parserOpts);
  }), n = await Ud("canParse", e, r);
  if (Ws(n))
    throw new bw(e.uri);
  try {
    const {
      plugin: i,
      result: s
    } = await qd("parse", [e], n);
    return !i.allowEmpty && s.isEmpty ? Promise.reject(new Et(`Error while parsing file "${e.uri}". File is empty.`)) : s;
  } catch (i) {
    throw new Et(`Error while parsing file "${e.uri}"`, {
      cause: i
    });
  }
}, lce = async (e, t) => {
  const r = $n({
    uri: wo(Ct(e)),
    mediaType: t.parse.mediaType
  }), n = await ace(r, t);
  return cce($n(Rg(Rg({}, r), {}, {
    data: n
  })), t);
}, Sw = lce, uce = async (e, t) => {
  let r = e, n = !1;
  if (!VS(e)) {
    const o = new e.constructor(e.content, e.meta.clone(), e.attributes);
    o.classes.push("result"), r = new kt([o]), n = !0;
  }
  const i = $n({
    uri: t.resolve.baseURI,
    parseResult: r,
    mediaType: t.parse.mediaType
  }), s = await Ud("canDereference", i, t.dereference.strategies);
  if (Ws(s))
    throw new sce(i.uri);
  try {
    const {
      result: o
    } = await qd("dereference", [i, t], s);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new Ow(`Error while dereferencing file "${i.uri}"`, {
      cause: o
    });
  }
}, fce = $({
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
      throw new On();
    },
    async parse() {
      throw new On();
    }
  }
}), Eo = fce, pce = $({
  props: {
    name: null
  },
  methods: {
    canRead() {
      return !1;
    },
    async read() {
      throw new On();
    }
  }
}), hce = pce, dce = $(hce, {
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
      return is(e.uri);
    },
    async read() {
      throw new On();
    },
    getHttpClient() {
      throw new On();
    }
  }
}), mce = dce, yce = $({
  props: {
    name: null
  },
  methods: {
    canResolve() {
      return !1;
    },
    async resolve() {
      throw new On();
    }
  }
}), vce = yce, gce = $({
  props: {
    name: null
  },
  methods: {
    canDereference() {
      return !1;
    },
    async dereference() {
      throw new On();
    }
  }
}), bce = gce, $ce = $({
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
}), Li = $ce, Oce = $({
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
      const t = An(e) ? e : e.uri;
      return Fa(this.find(Tc("uri", t)));
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
}), cu = Oce, Sce = async (e, t = {}) => {
  const r = Gae(qae, t);
  return uce(e, r);
}, wce = $(Eo, {
  props: {
    name: "binary"
  },
  methods: {
    async canParse(e) {
      return this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension);
    },
    async parse(e) {
      try {
        const t = unescape(encodeURIComponent(e.toString())), r = btoa(t), n = new kt();
        if (r.length !== 0) {
          const i = new Lr(r);
          i.classes.push("result"), n.push(i);
        }
        return n;
      } catch (t) {
        throw new Et(`Error parsing "${e.uri}"`, {
          cause: t
        });
      }
    }
  }
}), Ece = wce;
class Ss extends Error {
  constructor(t) {
    super(t), this.name = this.constructor.name, this.message = t, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(t).stack;
  }
}
class xce extends Error {
  constructor(t) {
    super(t), this.name = this.constructor.name, this.message = t, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(t).stack;
  }
}
class Pce extends tce {
  constructor(t) {
    super(`Invalid JSON Schema $anchor "${t}".`);
  }
}
const xo = (e) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(e), Ur = (e) => {
  const t = vw(e);
  return yd("#", t);
}, Ace = (e) => {
  if (!xo(e))
    throw new Pce(e);
  return e;
}, lu = (e, t) => {
  const r = Ace(e), n = Ed((i) => {
    var s;
    return Ni(i) && ((s = i.$anchor) === null || s === void 0 ? void 0 : s.toValue()) === r;
  }, t);
  if (vr(n))
    throw new xce(`Evaluation failed on token: "${r}"`);
  return n;
}, Ha = (e, t) => {
  if (typeof t.$ref > "u")
    return;
  const r = vw(t.$ref.toValue()), n = t.meta.get("inherited$id").toValue();
  return `${xn((s, o) => yt(s, wo(Ct(o))), e, [...n, t.$ref.toValue()])}${r === "#" ? "" : r}`;
}, jce = (e, t) => {
  if (typeof t.$id > "u")
    return;
  const r = t.meta.get("inherited$id").toValue();
  return xn((n, i) => yt(n, wo(Ct(i))), e, [...r, t.$id.toValue()]);
}, ss = (e) => {
  if (ss.cache.has(e))
    return ss.cache.get(e);
  const t = hr.refract(e);
  return ss.cache.set(e, t), t;
};
ss.cache = /* @__PURE__ */ new WeakMap();
const gt = (e) => ar(e) ? ss(e) : e, Hd = (e, t) => {
  const r = Ct(e), n = Ed(
    // @ts-ignore
    (o) => !Ni(o) || typeof o.$id > "u" ? !1 : jce(r, o) === r,
    t
  );
  if (vr(n))
    throw new Ss(`Evaluation failed on URI: "${e}"`);
  let i, s;
  return xo(Ur(e)) ? (i = lu, s = Ur(e)) : (i = Je, s = Be(e)), i(s, n);
};
function Fg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fg(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const wf = He[Symbol.for("nodejs.util.promisify.custom")], sa = $({
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
      return yt(this.reference.uri, wo(Ct(e)));
    },
    async toReference(e) {
      if (this.reference.depth >= this.options.resolve.maxDepth)
        throw new $w(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
      const t = this.toBaseURI(e), {
        refSet: r
      } = this.reference;
      if (r.has(t))
        return r.find(Tc("uri", t));
      const n = await Sw(ot(t), Ko(Ko({}, this.options), {}, {
        parse: Ko(Ko({}, this.options.parse), {}, {
          mediaType: "text/plain"
        })
      })), i = Li({
        uri: t,
        value: n,
        depth: this.reference.depth + 1
      });
      return r.add(i), i;
    },
    ReferenceElement(e) {
      var t;
      if (!this.options.resolve.external && ou(e))
        return !1;
      const r = (t = e.$ref) === null || t === void 0 ? void 0 : t.toValue(), n = this.toBaseURI(r);
      cn(n, this.crawlingMap) || (this.crawlingMap[n] = this.toReference(r)), this.crawledElements.push(e);
    },
    PathItemElement(e) {
      var t;
      if (!K(e.$ref) || !this.options.resolve.external && su(e))
        return;
      const r = (t = e.$ref) === null || t === void 0 ? void 0 : t.toValue(), n = this.toBaseURI(r);
      cn(n, this.crawlingMap) || (this.crawlingMap[n] = this.toReference(r)), this.crawledElements.push(e);
    },
    LinkElement(e) {
      if (!(!K(e.operationRef) && !K(e.operationId)) && !(!this.options.resolve.external && Ua(e))) {
        if (K(e.operationRef) && K(e.operationId))
          throw new Error("LinkElement operationRef and operationId are mutually exclusive.");
        if (Ua(e)) {
          var t;
          const r = (t = e.operationRef) === null || t === void 0 ? void 0 : t.toValue(), n = this.toBaseURI(r);
          cn(n, this.crawlingMap) || (this.crawlingMap[n] = this.toReference(r));
        }
      }
    },
    ExampleElement(e) {
      var t;
      if (!K(e.externalValue) || !this.options.resolve.external && K(e.externalValue))
        return;
      if (e.hasKey("value") && K(e.externalValue))
        throw new Error("ExampleElement value and externalValue fields are mutually exclusive.");
      const r = (t = e.externalValue) === null || t === void 0 ? void 0 : t.toValue(), n = this.toBaseURI(r);
      cn(n, this.crawlingMap) || (this.crawlingMap[n] = this.toReference(r));
    },
    SchemaElement(e) {
      if (this.visited.has(e))
        return !1;
      if (!K(e.$ref)) {
        this.visited.add(e);
        return;
      }
      const t = this.reference.uri, r = Ha(t, e), n = Ct(r), i = $n({
        uri: n
      }), s = yp((c) => c.canRead(i), this.options.resolve.resolvers), o = !s, a = !s && this.reference.uri !== n;
      if (!this.options.resolve.external && a) {
        this.visited.add(e);
        return;
      }
      if (!cn(n, this.crawlingMap))
        try {
          s || o ? this.crawlingMap[n] = this.reference : this.crawlingMap[n] = this.toReference(ot(r));
        } catch (c) {
          if (o && c instanceof Ss)
            this.crawlingMap[n] = this.toReference(ot(r));
          else
            throw c;
        }
      this.crawledElements.push(e);
    },
    async crawlReferenceElement(e) {
      var t;
      const r = await this.toReference(e.$ref.toValue());
      this.indirections.push(e);
      const n = Be((t = e.$ref) === null || t === void 0 ? void 0 : t.toValue());
      let i = Je(n, r.value.result);
      if (ar(i)) {
        const o = e.meta.get("referenced-element").toValue();
        ue(i) ? (i = Br.refract(i), i.setMetaProperty("referenced-element", o)) : i = this.namespace.getElementClass(o).refract(i);
      }
      if (this.indirections.includes(i))
        throw new Error("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new cr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      const s = sa({
        reference: r,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options
      });
      await wf(i, s, {
        keyMap: et,
        nodeTypeGetter: We
      }), await s.crawl(), this.indirections.pop();
    },
    async crawlPathItemElement(e) {
      var t;
      const r = await this.toReference(e.$ref.toValue());
      this.indirections.push(e);
      const n = Be((t = e.$ref) === null || t === void 0 ? void 0 : t.toValue());
      let i = Je(n, r.value.result);
      if (ar(i) && (i = Wt.refract(i)), this.indirections.includes(i))
        throw new Error("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new cr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      const s = sa({
        reference: r,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options
      });
      await wf(i, s, {
        keyMap: et,
        nodeTypeGetter: We
      }), await s.crawl(), this.indirections.pop();
    },
    async crawlSchemaElement(e) {
      const t = this.reference.uri, r = Ha(t, e), n = Ct(r), i = $n({
        uri: n
      }), s = yp((u) => u.canRead(i), this.options.resolve.resolvers), o = !s;
      this.indirections.push(e);
      let a, c;
      try {
        if (s || o)
          a = this.reference, c = Hd(
            r,
            // @ts-ignore
            gt(a.value.result)
          );
        else {
          a = await this.toReference(ot(r));
          const u = Be(r);
          c = gt(
            // @ts-ignore
            Je(u, a.value.result)
          );
        }
      } catch (u) {
        if (o && u instanceof Ss)
          if (xo(Ur(r))) {
            a = await this.toReference(ot(r));
            const f = Ur(r);
            c = lu(
              f,
              // @ts-ignore
              gt(a.value.result)
            );
          } else {
            a = await this.toReference(ot(r));
            const f = Be(r);
            c = gt(
              // @ts-ignore
              Je(f, a.value.result)
            );
          }
        else
          throw u;
      }
      if (this.visited.add(e), this.indirections.includes(c))
        throw new Error("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new cr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      const l = sa({
        reference: a,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        visited: this.visited
      });
      await wf(c, l, {
        keyMap: et,
        nodeTypeGetter: We
      }), await l.crawl(), this.indirections.pop();
    },
    async crawl() {
      await Ee(KU, qH)(this.crawlingMap), this.crawlingMap = null;
      for (const e of this.crawledElements)
        ki(e) ? await this.crawlReferenceElement(e) : Ni(e) ? await this.crawlSchemaElement(e) : iu(e) && await this.crawlPathItemElement(e);
    }
  }
}), Tce = sa, _ce = He[Symbol.for("nodejs.util.promisify.custom")], Ice = $(vce, {
  init() {
    this.name = "openapi-3-1";
  },
  methods: {
    canResolve(e) {
      var t;
      return e.mediaType !== "text/plain" ? bn.includes(e.mediaType) : Nd((t = e.parseResult) === null || t === void 0 ? void 0 : t.result);
    },
    async resolve(e, t) {
      const r = Ri(tu), n = Li({
        uri: e.uri,
        value: e.parseResult
      }), i = Tce({
        reference: n,
        namespace: r,
        options: t
      }), s = cu();
      return s.add(n), await _ce(s.rootRef.value, i, {
        keyMap: et,
        nodeTypeGetter: We
      }), await i.crawl(), s;
    }
  }
}), Rce = Ice, ww = (e) => {
  if (!re(e) || e.hasKey("$$normalized"))
    return e;
  const t = [xne({
    operationIdNormalizer: (n, i, s) => Bs({
      operationId: n
    }, i, s, {
      v2OperationIdCompatibilityMode: !1
    })
  }), vne(), bne(), One(), Ane(), Tne()], r = Xs(e, t, {
    toolboxCreator: fw,
    visitorOptions: {
      keyMap: et,
      nodeTypeGetter: We
    }
  });
  return r.set("$$normalized", !0), r;
}, Fce = (e) => (t) => {
  if (t != null && t.$$normalized)
    return t;
  const r = Qr.refract(t), n = e(r);
  return Ke(n);
}, Ew = mce.compose({
  props: {
    name: "http-swagger-client",
    swaggerHTTPClient: Ds,
    swaggerHTTPClientConfig: {}
  },
  init() {
    let {
      swaggerHTTPClient: e = this.swaggerHTTPClient
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
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
        return (await t(se({
          url: e.uri,
          signal: n,
          userFetch: async (l, u) => {
            const f = await fetch(l, u);
            return f.headers.delete("Content-Type"), f;
          },
          credentials: s,
          redirects: o,
          follow: a
        }, this.swaggerHTTPClientConfig))).text.arrayBuffer();
      } catch (c) {
        throw new au(`Error downloading "${e.uri}"`, {
          cause: c
        });
      } finally {
        clearTimeout(i);
      }
    }
  }
}), xw = Eo.compose({
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
        throw new Et("json-swagger-client parser plugin doesn't support sourceMaps option");
      const t = new kt(), r = e.toString();
      if (this.allowEmpty && r.trim() === "")
        return t;
      try {
        const n = US(JSON.parse(r));
        return n.classes.push("result"), t.push(n), t;
      } catch (n) {
        throw new Et(`Error parsing "${e.uri}"`, {
          cause: n
        });
      }
    }
  }
}), Pw = Eo.compose({
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
          return ii.load(e.toString(), {
            schema: Ea
          }), !0;
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(e) {
      if (this.sourceMap)
        throw new Et("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
      const t = new kt(), r = e.toString();
      try {
        const n = ii.load(r, {
          schema: Ea
        });
        if (this.allowEmpty && typeof n > "u")
          return t;
        const i = US(n);
        return i.classes.push("result"), t.push(i), t;
      } catch (n) {
        throw new Et(`Error parsing "${e.uri}"`, {
          cause: n
        });
      }
    }
  }
}), Aw = Eo.compose({
  props: {
    name: "openapi-json-3-1-swagger-client",
    fileExtensions: [".json"],
    mediaTypes: new xd(...bn.filterByFormat("generic"), ...bn.filterByFormat("json")),
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
        throw new Et("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
      const t = new kt(), r = e.toString();
      if (this.allowEmpty && r.trim() === "")
        return t;
      try {
        const n = JSON.parse(r), i = Qr.refract(n, this.refractorOpts);
        return i.classes.push("result"), t.push(i), t;
      } catch (n) {
        throw new Et(`Error parsing "${e.uri}"`, {
          cause: n
        });
      }
    }
  }
}), jw = Eo.compose({
  props: {
    name: "openapi-yaml-3-1-swagger-client",
    fileExtensions: [".yaml", ".yml"],
    mediaTypes: new xd(...bn.filterByFormat("generic"), ...bn.filterByFormat("yaml")),
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
          return ii.load(n), this.detectionRegExp.test(n);
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(e) {
      if (this.sourceMap)
        throw new Et("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
      const t = new kt(), r = e.toString();
      try {
        const n = ii.load(r, {
          schema: Ea
        });
        if (this.allowEmpty && typeof n > "u")
          return t;
        const i = Qr.refract(n, this.refractorOpts);
        return i.classes.push("result"), t.push(i), t;
      } catch (n) {
        throw new Et(`Error parsing "${e.uri}"`, {
          cause: n
        });
      }
    }
  }
});
function Vg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Go(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vg(Object(r), !0).forEach(function(n) {
      C(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Ef = He[Symbol.for("nodejs.util.promisify.custom")], oa = $({
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
    ancestors: i = []
  }) {
    this.indirections = e, this.namespace = r, this.reference = t, this.options = n, this.ancestors = [...i];
  },
  methods: {
    toBaseURI(e) {
      return yt(this.reference.uri, wo(Ct(e)));
    },
    toAncestorLineage(e) {
      const t = new WeakSet(e.flat());
      return [[...this.ancestors, t], t];
    },
    async toReference(e) {
      if (this.reference.depth >= this.options.resolve.maxDepth)
        throw new $w(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
      const t = this.toBaseURI(e), {
        refSet: r
      } = this.reference;
      if (r.has(t))
        return r.find(Tc("uri", t));
      const n = await Sw(ot(t), Go(Go({}, this.options), {}, {
        parse: Go(Go({}, this.options.parse), {}, {
          mediaType: "text/plain"
        })
      })), i = Li({
        uri: t,
        value: n,
        depth: this.reference.depth + 1
      });
      return r.add(i), i;
    },
    async ReferenceElement(e, t, r, n, i) {
      var s, o, a, c, l;
      const [u, f] = this.toAncestorLineage(i);
      if (u.some((w) => w.has(e)) || !this.options.resolve.external && ou(e))
        return !1;
      const p = await this.toReference((s = e.$ref) === null || s === void 0 ? void 0 : s.toValue()), h = p.uri, d = yt(h, (o = e.$ref) === null || o === void 0 ? void 0 : o.toValue());
      this.indirections.push(e);
      const m = Be(d);
      let y = Je(m, p.value.result);
      if (ar(y)) {
        const w = e.meta.get("referenced-element").toValue();
        ue(y) ? (y = Br.refract(y), y.setMetaProperty("referenced-element", w)) : y = this.namespace.getElementClass(w).refract(y);
      }
      if (this.indirections.includes(y))
        throw new Error("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new cr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      f.add(e);
      const v = oa({
        reference: p,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        ancestors: u
      });
      y = await Ef(y, v, {
        keyMap: et,
        nodeTypeGetter: We
      }), f.delete(e), this.indirections.pop(), y = y.clone(), y.setMetaProperty("ref-fields", {
        $ref: (a = e.$ref) === null || a === void 0 ? void 0 : a.toValue(),
        // @ts-ignore
        description: (c = e.description) === null || c === void 0 ? void 0 : c.toValue(),
        // @ts-ignore
        summary: (l = e.summary) === null || l === void 0 ? void 0 : l.toValue()
      }), y.setMetaProperty("ref-origin", p.uri);
      const S = ci(Fa, ["description"], e), O = ci(Fa, ["summary"], e);
      return S && ts("description", y) && (y.description = e.description), O && ts("summary", y) && (y.summary = e.summary), this.indirections.pop(), y;
    },
    async PathItemElement(e, t, r, n, i) {
      var s, o, a;
      const [c, l] = this.toAncestorLineage(i);
      if (!K(e.$ref))
        return;
      if (c.some((v) => v.has(e)))
        return !1;
      if (!this.options.resolve.external && su(e))
        return;
      const u = await this.toReference((s = e.$ref) === null || s === void 0 ? void 0 : s.toValue()), f = u.uri, p = yt(f, (o = e.$ref) === null || o === void 0 ? void 0 : o.toValue());
      this.indirections.push(e);
      const h = Be(p);
      let d = Je(h, u.value.result);
      if (ar(d) && (d = Wt.refract(d)), this.indirections.includes(d))
        throw new Error("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new cr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      l.add(e);
      const m = oa({
        reference: u,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        ancestors: c
      });
      d = await Ef(d, m, {
        keyMap: et,
        nodeTypeGetter: We
      }), l.delete(e), this.indirections.pop();
      const y = new Wt(
        // @ts-ignore
        [...d.content],
        d.meta.clone(),
        d.attributes.clone()
      );
      return e.forEach((v, S, O) => {
        y.remove(S.toValue()), y.content.push(O);
      }), y.remove("$ref"), y.setMetaProperty("ref-fields", {
        $ref: (a = e.$ref) === null || a === void 0 ? void 0 : a.toValue()
      }), y.setMetaProperty("ref-origin", u.uri), y;
    },
    async LinkElement(e) {
      if (!K(e.operationRef) && !K(e.operationId) || !this.options.resolve.external && Ua(e))
        return;
      if (K(e.operationRef) && K(e.operationId))
        throw new Error("LinkElement operationRef and operationId fields are mutually exclusive.");
      let t;
      if (K(e.operationRef)) {
        var r, n, i;
        const a = Be((r = e.operationRef) === null || r === void 0 ? void 0 : r.toValue()), c = await this.toReference((n = e.operationRef) === null || n === void 0 ? void 0 : n.toValue());
        t = Je(a, c.value.result), ar(t) && (t = di.refract(t)), t = new di(
          // @ts-ignore
          [...t.content],
          t.meta.clone(),
          t.attributes.clone()
        ), t.setMetaProperty("ref-origin", c.uri), (i = e.operationRef) === null || i === void 0 || i.meta.set("operation", t);
      } else if (K(e.operationId)) {
        var s, o;
        const a = (s = e.operationId) === null || s === void 0 ? void 0 : s.toValue();
        if (t = Ed((c) => uw(c) && c.operationId.equals(a), this.reference.value.result), vr(t))
          throw new Error(`OperationElement(operationId=${a}) not found.`);
        (o = e.operationId) === null || o === void 0 || o.meta.set("operation", t);
      }
    },
    async ExampleElement(e) {
      var t;
      if (!K(e.externalValue) || !this.options.resolve.external && K(e.externalValue))
        return;
      if (e.hasKey("value") && K(e.externalValue))
        throw new Error("ExampleElement value and externalValue fields are mutually exclusive.");
      const r = await this.toReference((t = e.externalValue) === null || t === void 0 ? void 0 : t.toValue()), n = new r.value.result.constructor(r.value.result.content, r.value.result.meta.clone(), r.value.result.attributes.clone());
      n.setMetaProperty("ref-origin", r.uri), e.value = n;
    },
    async SchemaElement(e, t, r, n, i) {
      var s;
      const [o, a] = this.toAncestorLineage(i);
      if (!K(e.$ref))
        return;
      if (o.some((w) => w.has(e)))
        return !1;
      let {
        reference: c
      } = this, {
        uri: l
      } = c;
      const u = Ha(l, e), f = Ct(u), p = $n({
        uri: f
      }), h = yp((w) => w.canRead(p), this.options.resolve.resolvers), d = !h, m = d && l !== f;
      if (!this.options.resolve.external && m)
        return;
      this.indirections.push(e);
      let y;
      try {
        if (h || d)
          y = Hd(
            u,
            // @ts-ignore
            gt(c.value.result)
          );
        else {
          c = await this.toReference(ot(u));
          const w = Be(u);
          y = gt(
            // @ts-ignore
            Je(w, c.value.result)
          );
        }
      } catch (w) {
        if (d && w instanceof Ss)
          if (xo(Ur(u))) {
            c = await this.toReference(ot(u)), l = c.uri;
            const E = Ur(u);
            y = lu(
              E,
              // @ts-ignore
              gt(c.value.result)
            );
          } else {
            c = await this.toReference(ot(u)), l = c.uri;
            const E = Be(u);
            y = gt(
              // @ts-ignore
              Je(E, c.value.result)
            );
          }
        else
          throw w;
      }
      if (this.indirections.includes(y))
        throw new Error("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new cr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      a.add(e);
      const v = oa({
        reference: c,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        ancestors: o
      });
      if (y = await Ef(y, v, {
        keyMap: et,
        nodeTypeGetter: We
      }), a.delete(e), this.indirections.pop(), Dd(y)) {
        var S;
        const w = y.clone();
        return w.setMetaProperty("ref-fields", {
          $ref: (S = e.$ref) === null || S === void 0 ? void 0 : S.toValue()
        }), w.setMetaProperty("ref-origin", c.uri), w;
      }
      const O = new hr(
        // @ts-ignore
        [...y.content],
        y.meta.clone(),
        y.attributes.clone()
      );
      return e.forEach((w, E, j) => {
        O.remove(E.toValue()), O.content.push(j);
      }), O.remove("$ref"), O.setMetaProperty("ref-fields", {
        $ref: (s = e.$ref) === null || s === void 0 ? void 0 : s.toValue()
      }), O.setMetaProperty("ref-origin", c.uri), O;
    }
  }
}), Cp = oa, Vce = He[Symbol.for("nodejs.util.promisify.custom")], Cce = $(bce, {
  init() {
    this.name = "openapi-3-1";
  },
  methods: {
    canDereference(e) {
      var t;
      return e.mediaType !== "text/plain" ? bn.includes(e.mediaType) : Nd((t = e.parseResult) === null || t === void 0 ? void 0 : t.result);
    },
    async dereference(e, t) {
      const r = Ri(tu), n = gn(cu(), t.dereference.refSet);
      let i;
      n.has(e.uri) ? i = n.find(Tc("uri", e.uri)) : (i = Li({
        uri: e.uri,
        value: e.parseResult
      }), n.add(i));
      const s = Cp({
        reference: i,
        namespace: r,
        options: t
      }), o = await Vce(n.rootRef.value, s, {
        keyMap: et,
        nodeTypeGetter: We
      });
      return t.dereference.refSet === null && n.clean(), o;
    }
  }
}), Tw = Cce, Mce = (e) => e.slice(2), It = (e) => {
  const t = Mce(e);
  return t.reduce((r, n, i) => {
    if (Fi(n)) {
      const s = String(n.key.toValue());
      r.push(s);
    } else if (Ot(t[i - 2])) {
      const s = t[i - 2].content.indexOf(n);
      r.push(s);
    }
    return r;
  }, []);
}, Jo = (e) => {
  if (e.cause == null)
    return e;
  let {
    cause: t
  } = e;
  for (; t.cause != null; )
    t = t.cause;
  return t;
}, kce = Wh("SchemaRefError", function(t, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), {
  wrapError: xf
} = zh, Pf = He[Symbol.for("nodejs.util.promisify.custom")], aa = Cp.compose({
  props: {
    useCircularStructures: !0,
    allowMetaPatches: !1,
    basePath: null
  },
  init(e) {
    let {
      allowMetaPatches: t = this.allowMetaPatches,
      useCircularStructures: r = this.useCircularStructures,
      basePath: n = this.basePath
    } = e;
    this.allowMetaPatches = t, this.useCircularStructures = r, this.basePath = n;
  },
  methods: {
    async ReferenceElement(e, t, r, n, i) {
      var s, o, a, c, l, u;
      try {
        const [f, p] = this.toAncestorLineage(i);
        if (rs(["cycle"], e.$ref) || f.some((E) => E.has(e)) || !this.options.resolve.external && ou(e))
          return !1;
        const h = await this.toReference(e.$ref.toValue()), d = h.uri, m = yt(d, e.$ref.toValue());
        this.indirections.push(e);
        const y = Be(m);
        let v = Je(y, h.value.result);
        if (ar(v)) {
          const E = e.meta.get("referenced-element").toValue();
          ue(v) ? (v = Br.refract(v), v.setMetaProperty("referenced-element", E)) : v = this.namespace.getElementClass(E).refract(v);
        }
        if (this.indirections.includes(v))
          throw new Error("Recursive JSON Pointer detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new cr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        p.add(e);
        const S = aa({
          reference: h,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: f,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: this.basePath ?? [...It([...i, r, e]), "$ref"]
        });
        if (v = await Pf(v, S, {
          keyMap: et,
          nodeTypeGetter: We
        }), p.delete(e), this.indirections.pop(), !this.useCircularStructures && f.some((j) => j.has(v))) {
          if (is(d) || ns(d)) {
            const j = new Br({
              $ref: m
            }, e.meta.clone(), e.attributes.clone());
            return j.get("$ref").classes.push("cycle"), j;
          }
          return !1;
        }
        v = v.clone(), v.setMetaProperty("ref-fields", {
          $ref: (s = e.$ref) == null ? void 0 : s.toValue(),
          description: (o = e.description) == null ? void 0 : o.toValue(),
          summary: (a = e.summary) == null ? void 0 : a.toValue()
        }), v.setMetaProperty("ref-origin", h.uri);
        const O = typeof e.description < "u", w = typeof e.summary < "u";
        if (O && "description" in v && (v.description = e.description), w && "summary" in v && (v.summary = e.summary), this.allowMetaPatches && re(v)) {
          const E = v;
          if (typeof E.get("$$ref") > "u") {
            const j = yt(d, m);
            E.set("$$ref", j);
          }
        }
        return v;
      } catch (f) {
        const p = Jo(f), h = xf(p, {
          baseDoc: this.reference.uri,
          $ref: e.$ref.toValue(),
          pointer: Be(e.$ref.toValue()),
          fullPath: this.basePath ?? [...It([...i, r, e]), "$ref"]
        });
        (u = (l = (c = this.options.dereference.dereferenceOpts) == null ? void 0 : c.errors) == null ? void 0 : l.push) == null || u.call(l, h);
        return;
      }
    },
    async PathItemElement(e, t, r, n, i) {
      var s, o, a, c;
      try {
        const [l, u] = this.toAncestorLineage(i);
        if (!K(e.$ref))
          return;
        if (rs(["cycle"], e.$ref) || l.some((S) => S.has(e)))
          return !1;
        if (!this.options.resolve.external && su(e))
          return;
        const f = await this.toReference(e.$ref.toValue()), p = f.uri, h = yt(p, e.$ref.toValue());
        this.indirections.push(e);
        const d = Be(h);
        let m = Je(d, f.value.result);
        if (ar(m) && (m = Wt.refract(m)), this.indirections.includes(m))
          throw new Error("Recursive JSON Pointer detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new cr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        u.add(e);
        const y = aa({
          reference: f,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: l,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: this.basePath ?? [...It([...i, r, e]), "$ref"]
        });
        if (m = await Pf(m, y, {
          keyMap: et,
          nodeTypeGetter: We
        }), u.delete(e), this.indirections.pop(), !this.useCircularStructures && l.some((O) => O.has(m))) {
          if (is(p) || ns(p)) {
            const O = new Wt({
              $ref: h
            }, e.meta.clone(), e.attributes.clone());
            return O.get("$ref").classes.push("cycle"), O;
          }
          return !1;
        }
        const v = new Wt([...m.content], m.meta.clone(), m.attributes.clone());
        if (e.forEach((S, O, w) => {
          v.remove(O.toValue()), v.content.push(w);
        }), v.remove("$ref"), v.setMetaProperty("ref-fields", {
          $ref: (s = e.$ref) == null ? void 0 : s.toValue()
        }), v.setMetaProperty("ref-origin", f.uri), this.allowMetaPatches && typeof v.get("$$ref") > "u") {
          const S = yt(p, h);
          v.set("$$ref", S);
        }
        return v;
      } catch (l) {
        const u = Jo(l), f = xf(u, {
          baseDoc: this.reference.uri,
          $ref: e.$ref.toValue(),
          pointer: Be(e.$ref.toValue()),
          fullPath: this.basePath ?? [...It([...i, r, e]), "$ref"]
        });
        (c = (a = (o = this.options.dereference.dereferenceOpts) == null ? void 0 : o.errors) == null ? void 0 : a.push) == null || c.call(a, f);
        return;
      }
    },
    async SchemaElement(e, t, r, n, i) {
      var s, o, a, c, l;
      try {
        const [u, f] = this.toAncestorLineage(i);
        if (!K(e.$ref))
          return;
        if (rs(["cycle"], e.$ref) || u.some((P) => P.has(e)))
          return !1;
        let {
          reference: p
        } = this, {
          uri: h
        } = p;
        const d = Ha(h, e), m = Ct(d), y = $n({
          uri: m
        }), v = !this.options.resolve.resolvers.some((P) => P.canRead(y)), S = !v, O = S && h !== m;
        if (!this.options.resolve.external && O)
          return;
        this.indirections.push(e);
        let w;
        try {
          if (v || S)
            w = Hd(d, gt(p.value.result));
          else {
            p = await this.toReference(ot(d)), h = p.uri;
            const P = Be(d);
            w = gt(Je(P, p.value.result));
          }
        } catch (P) {
          if (S && P instanceof Ss)
            if (xo(Ur(d))) {
              p = await this.toReference(ot(d)), h = p.uri;
              const M = Ur(d);
              w = lu(M, gt(p.value.result));
            } else {
              p = await this.toReference(ot(d)), h = p.uri;
              const M = Be(d);
              w = gt(Je(M, p.value.result));
            }
          else
            throw P;
        }
        if (this.indirections.includes(w))
          throw new Error("Recursive Schema Object reference detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new cr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        f.add(e);
        const E = aa({
          reference: p,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: u,
          basePath: this.basePath ?? [...It([...i, r, e]), "$ref"]
        });
        if (w = await Pf(w, E, {
          keyMap: et,
          nodeTypeGetter: We
        }), f.delete(e), this.indirections.pop(), Dd(w)) {
          const P = w.clone();
          return P.setMetaProperty("ref-fields", {
            $ref: (s = e.$ref) == null ? void 0 : s.toValue()
          }), P.setMetaProperty("ref-origin", h), P;
        }
        if (!this.useCircularStructures && u.some((M) => M.has(w))) {
          if (is(h) || ns(h)) {
            const M = yt(h, d), g = new hr({
              $ref: M
            }, e.meta.clone(), e.attributes.clone());
            return g.get("$ref").classes.push("cycle"), g;
          }
          return !1;
        }
        const j = new hr([...w.content], w.meta.clone(), w.attributes.clone());
        if (e.forEach((P, M, g) => {
          j.remove(M.toValue()), j.content.push(g);
        }), j.remove("$ref"), j.setMetaProperty("ref-fields", {
          $ref: (o = e.$ref) == null ? void 0 : o.toValue()
        }), j.setMetaProperty("ref-origin", h), this.allowMetaPatches && typeof j.get("$$ref") > "u") {
          const P = yt(h, d);
          j.set("$$ref", P);
        }
        return j;
      } catch (u) {
        const f = Jo(u), p = new kce(`Could not resolve reference: ${f.message}`, {
          baseDoc: this.reference.uri,
          $ref: e.$ref.toValue(),
          fullPath: this.basePath ?? [...It([...i, r, e]), "$ref"]
        }, f);
        (l = (c = (a = this.options.dereference.dereferenceOpts) == null ? void 0 : a.errors) == null ? void 0 : c.push) == null || l.call(c, p);
        return;
      }
    },
    async LinkElement() {
    },
    async ExampleElement(e, t, r, n, i) {
      var s, o, a, c;
      try {
        return await Cp.compose.methods.ExampleElement.call(this, e, t, r, n, i);
      } catch (l) {
        const u = Jo(l), f = xf(u, {
          baseDoc: this.reference.uri,
          externalValue: (s = e.externalValue) == null ? void 0 : s.toValue(),
          fullPath: this.basePath ?? [...It([...i, r, e]), "externalValue"]
        });
        (c = (a = (o = this.options.dereference.dereferenceOpts) == null ? void 0 : o.errors) == null ? void 0 : a.push) == null || c.call(a, f);
        return;
      }
    }
  }
}), Kd = Tw.compose.bind(), Nce = Kd({
  init(e) {
    let {
      parameterMacro: t,
      options: r
    } = e;
    this.parameterMacro = t, this.options = r;
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
        var a, c, l;
        const s = this.macroOperation === null ? null : Ke(this.macroOperation), o = Ke(e);
        try {
          const u = this.parameterMacro(s, o);
          e.set("default", u);
        } catch (u) {
          const f = new Error(u, {
            cause: u
          });
          f.fullPath = It([...i, r]), (l = (c = (a = this.options.dereference.dereferenceOpts) == null ? void 0 : a.errors) == null ? void 0 : c.push) == null || l.call(c, f);
        }
      }
    }
  }
}), Dce = Kd({
  init(e) {
    let {
      modelPropertyMacro: t,
      options: r
    } = e;
    this.modelPropertyMacro = t, this.options = r;
  },
  props: {
    modelPropertyMacro: null,
    options: null,
    SchemaElement: {
      leave(e, t, r, n, i) {
        typeof e.properties > "u" || re(e.properties) && e.properties.forEach((s) => {
          var o, a, c;
          if (re(s))
            try {
              const l = this.modelPropertyMacro(Ke(s));
              s.set("default", l);
            } catch (l) {
              const u = new Error(l, {
                cause: l
              });
              u.fullPath = [...It([...i, r, e]), "properties"], (c = (a = (o = this.options.dereference.dereferenceOpts) == null ? void 0 : o.errors) == null ? void 0 : a.push) == null || c.call(a, u);
            }
        });
      }
    }
  }
}), Lce = Kd({
  init(e) {
    let {
      options: t
    } = e;
    this.options = t;
  },
  props: {
    options: null,
    SchemaElement: {
      leave(e, t, r, n, i) {
        var a, c, l, u, f, p;
        if (typeof e.allOf > "u")
          return;
        if (!Ot(e.allOf)) {
          const h = new TypeError("allOf must be an array");
          h.fullPath = [...It([...i, r, e]), "allOf"], (l = (c = (a = this.options.dereference.dereferenceOpts) == null ? void 0 : a.errors) == null ? void 0 : c.push) == null || l.call(c, h);
          return;
        }
        if (e.allOf.isEmpty)
          return new hr(e.content.filter((h) => h.key.toValue() !== "allOf"), e.meta.clone(), e.attributes.clone());
        if (!e.allOf.content.every(Ni)) {
          const h = new TypeError("Elements in allOf must be objects");
          h.fullPath = [...It([...i, r, e]), "allOf"], (p = (f = (u = this.options.dereference.dereferenceOpts) == null ? void 0 : u.errors) == null ? void 0 : f.push) == null || p.call(f, h);
          return;
        }
        const o = pi.all([...e.allOf.content, e]);
        if (e.hasKey("$$ref") || o.remove("$$ref"), e.hasKey("example")) {
          const h = o.getMember("example");
          h.value = e.get("example");
        }
        if (e.hasKey("examples")) {
          const h = o.getMember("examples");
          h.value = e.get("examples");
        }
        return o.remove("allOf"), o;
      }
    }
  }
}), Bce = He[Symbol.for("nodejs.util.promisify.custom")], _w = Tw.compose({
  props: {
    useCircularStructures: !0,
    allowMetaPatches: !1,
    parameterMacro: null,
    modelPropertyMacro: null,
    mode: "non-strict"
  },
  init() {
    let {
      useCircularStructures: e = this.useCircularStructures,
      allowMetaPatches: t = this.allowMetaPatches,
      parameterMacro: r = this.parameterMacro,
      modelPropertyMacro: n = this.modelPropertyMacro,
      mode: i = this.mode
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.name = "openapi-3-1-swagger-client", this.useCircularStructures = e, this.allowMetaPatches = t, this.parameterMacro = r, this.modelPropertyMacro = n, this.mode = i;
  },
  methods: {
    async dereference(e, t) {
      const r = [], n = Ri(tu), i = t.dereference.refSet ?? cu();
      let s;
      i.has(e.uri) ? s = i.find((l) => l.uri === e.uri) : (s = Li({
        uri: e.uri,
        value: e.parseResult
      }), i.add(s));
      const o = aa({
        reference: s,
        namespace: n,
        options: t,
        useCircularStructures: this.useCircularStructures,
        allowMetaPatches: this.allowMetaPatches
      });
      if (r.push(o), typeof this.parameterMacro == "function") {
        const l = Nce({
          parameterMacro: this.parameterMacro,
          options: t
        });
        r.push(l);
      }
      if (typeof this.modelPropertyMacro == "function") {
        const l = Dce({
          modelPropertyMacro: this.modelPropertyMacro,
          options: t
        });
        r.push(l);
      }
      if (this.mode !== "strict") {
        const l = Lce({
          options: t
        });
        r.push(l);
      }
      const a = TS(r, {
        nodeTypeGetter: We
      }), c = await Bce(i.rootRef.value, a, {
        keyMap: et,
        nodeTypeGetter: We
      });
      return t.dereference.refSet === null && i.clean(), c;
    }
  }
}), Uce = async (e) => {
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
    parameterMacro: u = null,
    modelPropertyMacro: f = null,
    mode: p = "non-strict"
  } = e;
  try {
    const h = "https://smartbear.com/", d = Kh(e) ?? gw(), m = is(d) ? d : h, y = Qr.refract(t);
    y.classes.push("result");
    const v = new kt([y]), S = kJ(o), O = S === "" ? "" : `#${S}`, w = Je(S, y), E = Li({
      uri: m,
      value: v
    }), j = cu({
      refs: [E]
    });
    S !== "" && (j.rootRef = null);
    const P = [], M = await Sce(w, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${m}${O}`,
        resolvers: [Ew({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: i,
            responseInterceptor: s
          }
        },
        strategies: [Rce()]
      },
      parse: {
        mediaType: bn.latest(),
        parsers: [Aw({
          allowEmpty: !1,
          sourceMap: !1
        }), jw({
          allowEmpty: !1,
          sourceMap: !1
        }), xw({
          allowEmpty: !1,
          sourceMap: !1
        }), Pw({
          allowEmpty: !1,
          sourceMap: !1
        }), Ece({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [_w({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: u,
          modelPropertyMacro: f,
          mode: p
        })],
        refSet: j,
        dereferenceOpts: {
          errors: P
        }
      }
    }), g = TJ(w, M, y), A = l ? g : ww(g);
    return {
      spec: Ke(A),
      errors: P
    };
  } catch (h) {
    if (h instanceof qS || h instanceof na)
      return {
        spec: null,
        errors: []
      };
    throw h;
  }
}, qce = {
  name: "openapi-3-1-apidom",
  match(e) {
    let {
      spec: t
    } = e;
    return E0(t);
  },
  normalize(e) {
    let {
      spec: t
    } = e;
    return Fce(ww)(t);
  },
  async resolve(e) {
    return Uce(e);
  }
};
function Iw(e, t, r) {
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
function Hce(e, t) {
  return Iw(e, t, !0) || null;
}
function Rw(e, t) {
  return `${t.toLowerCase()}-${e}`;
}
function Kce(e, t) {
  return !e || !e.paths ? null : Hce(e, (r) => {
    let {
      pathName: n,
      method: i,
      operation: s
    } = r;
    if (!s || typeof s != "object")
      return !1;
    const o = s.operationId, a = Bs(s, n, i), c = Rw(n, i);
    return [a, c, o].some((l) => l && l === t);
  });
}
const Gce = () => null, Jce = (e) => Array.isArray(e) ? e : [e], Cg = {
  mapTagOperations: Yce,
  makeExecute: Wce
};
function Wce() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return (t) => {
    let {
      pathName: r,
      method: n,
      operationId: i
    } = t;
    return function(s) {
      let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const {
        requestInterceptor: a,
        responseInterceptor: c,
        userFetch: l
      } = e;
      return e.execute(se({
        spec: e.spec,
        requestInterceptor: a,
        responseInterceptor: c,
        userFetch: l,
        pathName: r,
        method: n,
        parameters: s,
        operationId: i
      }, o));
    };
  };
}
function zce() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = Cg.makeExecute(e);
  return {
    apis: Cg.mapTagOperations({
      v2OperationIdCompatibilityMode: e.v2OperationIdCompatibilityMode,
      spec: e.spec,
      cb: t
    })
  };
}
function Yce(e) {
  let {
    spec: t,
    cb: r = Gce,
    defaultTag: n = "default",
    v2OperationIdCompatibilityMode: i
  } = e;
  const s = {}, o = {};
  return Iw(t, (a) => {
    let {
      pathName: c,
      method: l,
      operation: u
    } = a;
    (u.tags ? Jce(u.tags) : [n]).forEach((p) => {
      if (typeof p != "string")
        return;
      o[p] = o[p] || {};
      const h = o[p], d = Bs(u, c, l, {
        v2OperationIdCompatibilityMode: i
      }), m = r({
        spec: t,
        pathName: c,
        method: l,
        operation: u,
        operationId: d
      });
      if (s[d])
        s[d] += 1, h[`${d}${s[d]}`] = m;
      else if (typeof h[d] < "u") {
        const y = s[d] || 1;
        s[d] = y + 1, h[`${d}${s[d]}`] = m;
        const v = h[d];
        delete h[d], h[`${d}${y}`] = v;
      } else
        h[d] = m;
    });
  }), o;
}
var Gd = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
Gd.parse = Qce;
Gd.serialize = Zce;
var Xce = Object.prototype.toString, Wo = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function Qce(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var r = {}, n = t || {}, i = n.decode || ele, s = 0; s < e.length; ) {
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
      l.charCodeAt(0) === 34 && (l = l.slice(1, -1)), r[c] = nle(l, i);
    }
    s = a + 1;
  }
  return r;
}
function Zce(e, t, r) {
  var n = r || {}, i = n.encode || tle;
  if (typeof i != "function")
    throw new TypeError("option encode is invalid");
  if (!Wo.test(e))
    throw new TypeError("argument name is invalid");
  var s = i(t);
  if (s && !Wo.test(s))
    throw new TypeError("argument val is invalid");
  var o = e + "=" + s;
  if (n.maxAge != null) {
    var a = n.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(a);
  }
  if (n.domain) {
    if (!Wo.test(n.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!Wo.test(n.path))
      throw new TypeError("option path is invalid");
    o += "; Path=" + n.path;
  }
  if (n.expires) {
    var c = n.expires;
    if (!rle(c) || isNaN(c.valueOf()))
      throw new TypeError("option expires is invalid");
    o += "; Expires=" + c.toUTCString();
  }
  if (n.httpOnly && (o += "; HttpOnly"), n.secure && (o += "; Secure"), n.priority) {
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
    var u = typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite;
    switch (u) {
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
function ele(e) {
  return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
}
function tle(e) {
  return encodeURIComponent(e);
}
function rle(e) {
  return Xce.call(e) === "[object Date]" || e instanceof Date;
}
function nle(e, t) {
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
function Mg(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Fw(e) {
  var t, r;
  return Mg(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(Mg(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
const ile = {
  body: sle,
  header: ale,
  query: lle,
  path: cle,
  formData: ole
};
function sle(e) {
  let {
    req: t,
    value: r
  } = e;
  t.body = r;
}
function ole(e) {
  let {
    req: t,
    value: r,
    parameter: n
  } = e;
  (r || n.allowEmptyValue) && (t.form = t.form || {}, t.form[n.name] = {
    value: r,
    allowEmptyValue: n.allowEmptyValue,
    collectionFormat: n.collectionFormat
  });
}
function ale(e) {
  let {
    req: t,
    parameter: r,
    value: n
  } = e;
  t.headers = t.headers || {}, typeof n < "u" && (t.headers[r.name] = n);
}
function cle(e) {
  let {
    req: t,
    value: r,
    parameter: n
  } = e;
  t.url = t.url.split(`{${n.name}}`).join(encodeURIComponent(r));
}
function lle(e) {
  let {
    req: t,
    value: r,
    parameter: n
  } = e;
  if (t.query = t.query || {}, r === !1 && n.type === "boolean" && (r = "false"), r === 0 && ["number", "integer"].indexOf(n.type) > -1 && (r = "0"), r)
    t.query[n.name] = {
      collectionFormat: n.collectionFormat,
      value: r
    };
  else if (n.allowEmptyValue && r !== void 0) {
    const i = n.name;
    t.query[i] = t.query[i] || {}, t.query[i].allowEmptyValue = !0;
  }
}
function uu(e, t) {
  return t.includes("application/json") ? typeof e == "string" ? e : JSON.stringify(e) : e.toString();
}
function ule(e) {
  let {
    req: t,
    value: r,
    parameter: n
  } = e;
  const {
    name: i,
    style: s,
    explode: o,
    content: a
  } = n;
  if (a) {
    const l = Object.keys(a)[0];
    t.url = t.url.split(`{${i}}`).join(si(uu(r, l), {
      escape: !0
    }));
    return;
  }
  const c = qh({
    key: n.name,
    value: r,
    style: s || "simple",
    explode: o || !1,
    escape: !0
  });
  t.url = t.url.split(`{${i}}`).join(c);
}
function fle(e) {
  let {
    req: t,
    value: r,
    parameter: n
  } = e;
  if (t.query = t.query || {}, n.content) {
    const i = Object.keys(n.content)[0], s = uu(r, i);
    if (s)
      t.query[n.name] = s;
    else if (n.allowEmptyValue && r !== void 0) {
      const o = n.name;
      t.query[o] = t.query[o] || {}, t.query[o].allowEmptyValue = !0;
    }
    return;
  }
  if (r === !1 && (r = "false"), r === 0 && (r = "0"), r) {
    const {
      style: i,
      explode: s,
      allowReserved: o
    } = n;
    t.query[n.name] = {
      value: r,
      serializationOption: {
        style: i,
        explode: s,
        allowReserved: o
      }
    };
  } else if (n.allowEmptyValue && r !== void 0) {
    const i = n.name;
    t.query[i] = t.query[i] || {}, t.query[i].allowEmptyValue = !0;
  }
}
const ple = ["accept", "authorization", "content-type"];
function hle(e) {
  let {
    req: t,
    parameter: r,
    value: n
  } = e;
  if (t.headers = t.headers || {}, !(ple.indexOf(r.name.toLowerCase()) > -1)) {
    if (r.content) {
      const i = Object.keys(r.content)[0];
      t.headers[r.name] = uu(n, i);
      return;
    }
    typeof n < "u" && (t.headers[r.name] = qh({
      key: r.name,
      value: n,
      style: r.style || "simple",
      explode: typeof r.explode > "u" ? !1 : r.explode,
      escape: !1
    }));
  }
}
function dle(e) {
  let {
    req: t,
    parameter: r,
    value: n
  } = e;
  t.headers = t.headers || {};
  const i = typeof n;
  if (r.content) {
    const s = Object.keys(r.content)[0];
    t.headers.Cookie = `${r.name}=${uu(n, s)}`;
    return;
  }
  if (i !== "undefined") {
    const s = i === "object" && !Array.isArray(n) && r.explode ? "" : `${r.name}=`;
    t.headers.Cookie = s + qh({
      key: r.name,
      value: n,
      escape: !1,
      style: r.style || "form",
      explode: typeof r.explode > "u" ? !1 : r.explode
    });
  }
}
const mle = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: dle,
  header: hle,
  path: ule,
  query: fle
}, Symbol.toStringTag, { value: "Module" })), yle = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window)(), {
  btoa: Vw
} = yle;
function vle(e, t) {
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
  t = gle({
    request: t,
    securities: i,
    operation: r,
    spec: s
  });
  const c = r.requestBody || {}, l = Object.keys(c.content || {}), u = a && l.indexOf(a) > -1;
  if (n || o) {
    if (a && u)
      t.headers["Content-Type"] = a;
    else if (!a) {
      const f = l[0];
      f && (t.headers["Content-Type"] = f, a = f);
    }
  } else
    a && u && (t.headers["Content-Type"] = a);
  if (!e.responseContentType && r.responses) {
    const f = Object.entries(r.responses).filter((p) => {
      let [h, d] = p;
      const m = parseInt(h, 10);
      return m >= 200 && m < 300 && Fw(d.content);
    }).reduce((p, h) => {
      let [, d] = h;
      return p.concat(Object.keys(d.content));
    }, []);
    f.length > 0 && (t.headers.accept = f.join(", "));
  }
  if (n)
    if (a) {
      if (l.indexOf(a) > -1)
        if (a === "application/x-www-form-urlencoded" || a === "multipart/form-data")
          if (typeof n == "object") {
            const f = (c.content[a] || {}).encoding || {};
            t.form = {}, Object.keys(n).forEach((p) => {
              t.form[p] = {
                value: n[p],
                encoding: f[p] || {}
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
function gle(e) {
  let {
    request: t,
    securities: r = {},
    operation: n = {},
    spec: i
  } = e;
  const s = se({}, t), {
    authorized: o = {}
  } = r, a = n.security || i.security || [], c = o && !!Object.keys(o).length, l = Zi(i, ["components", "securitySchemes"]) || {};
  return s.headers = s.headers || {}, s.query = s.query || {}, !Object.keys(r).length || !c || !a || Array.isArray(n.security) && !n.security.length ? t : (a.forEach((u) => {
    Object.keys(u).forEach((f) => {
      const p = o[f], h = l[f];
      if (!p)
        return;
      const d = p.value || p, {
        type: m
      } = h;
      if (p) {
        if (m === "apiKey")
          h.in === "query" && (s.query[h.name] = d), h.in === "header" && (s.headers[h.name] = d), h.in === "cookie" && (s.cookies[h.name] = d);
        else if (m === "http") {
          if (/^basic$/i.test(h.scheme)) {
            const y = d.username || "", v = d.password || "", S = Vw(`${y}:${v}`);
            s.headers.Authorization = `Basic ${S}`;
          }
          /^bearer$/i.test(h.scheme) && (s.headers.Authorization = `Bearer ${d}`);
        } else if (m === "oauth2" || m === "openIdConnect") {
          const y = p.token || {}, v = h["x-tokenName"] || "access_token", S = y[v];
          let O = y.token_type;
          (!O || O.toLowerCase() === "bearer") && (O = "Bearer"), s.headers.Authorization = `${O} ${S}`;
        }
      }
    });
  }), s);
}
function ble(e, t) {
  const {
    spec: r,
    operation: n,
    securities: i,
    requestContentType: s,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = e;
  if (t = $le({
    request: t,
    securities: i,
    operation: n,
    spec: r
  }), t.body || t.form || a)
    s ? t.headers["Content-Type"] = s : Array.isArray(n.consumes) ? [t.headers["Content-Type"]] = n.consumes : Array.isArray(r.consumes) ? [t.headers["Content-Type"]] = r.consumes : n.parameters && n.parameters.filter((c) => c.type === "file").length ? t.headers["Content-Type"] = "multipart/form-data" : n.parameters && n.parameters.filter((c) => c.in === "formData").length && (t.headers["Content-Type"] = "application/x-www-form-urlencoded");
  else if (s) {
    const c = n.parameters && n.parameters.filter((u) => u.in === "body").length > 0, l = n.parameters && n.parameters.filter((u) => u.in === "formData").length > 0;
    (c || l) && (t.headers["Content-Type"] = s);
  }
  return !o && Array.isArray(n.produces) && n.produces.length > 0 && (t.headers.accept = n.produces.join(", ")), t;
}
function $le(e) {
  let {
    request: t,
    securities: r = {},
    operation: n = {},
    spec: i
  } = e;
  const s = se({}, t), {
    authorized: o = {},
    specSecurity: a = []
  } = r, c = n.security || a, l = o && !!Object.keys(o).length, u = i.securityDefinitions;
  return s.headers = s.headers || {}, s.query = s.query || {}, !Object.keys(r).length || !l || !c || Array.isArray(n.security) && !n.security.length ? t : (c.forEach((f) => {
    Object.keys(f).forEach((p) => {
      const h = o[p];
      if (!h)
        return;
      const {
        token: d
      } = h, m = h.value || h, y = u[p], {
        type: v
      } = y, S = y["x-tokenName"] || "access_token", O = d && d[S];
      let w = d && d.token_type;
      if (h)
        if (v === "apiKey") {
          const E = y.in === "query" ? "query" : "headers";
          s[E] = s[E] || {}, s[E][y.name] = m;
        } else if (v === "basic")
          if (m.header)
            s.headers.authorization = m.header;
          else {
            const E = m.username || "", j = m.password || "";
            m.base64 = Vw(`${E}:${j}`), s.headers.authorization = `Basic ${m.base64}`;
          }
        else
          v === "oauth2" && O && (w = !w || w.toLowerCase() === "bearer" ? "Bearer" : w, s.headers.authorization = `${w} ${O}`);
    });
  }), s);
}
const Ole = ["http", "fetch", "spec", "operationId", "pathName", "method", "parameters", "securities"], kg = (e) => Array.isArray(e) ? e : [], Sle = Wh("OperationNotFoundError", function(t, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), wle = (e, t) => t.filter((r) => r.name === e), Ele = (e) => {
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
}, xle = {
  buildRequest: Cw
};
function Ple(e) {
  let {
    http: t,
    fetch: r,
    // This is legacy
    spec: n,
    operationId: i,
    pathName: s,
    method: o,
    parameters: a,
    securities: c
  } = e, l = Ys(e, Ole);
  const u = t || r || Ds;
  s && o && !i && (i = Rw(s, o));
  const f = xle.buildRequest(se({
    spec: n,
    operationId: i,
    parameters: a,
    securities: c,
    http: u
  }, l));
  return f.body && (Fw(f.body) || Array.isArray(f.body)) && (f.body = JSON.stringify(f.body)), u(f);
}
function Cw(e) {
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
    serverVariables: u,
    http: f,
    signal: p
  } = e;
  let {
    parameters: h,
    parameterBuilders: d
  } = e;
  const m = x0(t);
  d || (m ? d = mle : d = ile);
  let v = {
    url: "",
    credentials: f && f.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  p && (v.signal = p), s && (v.requestInterceptor = s), o && (v.responseInterceptor = o), c && (v.userFetch = c);
  const S = Kce(t, r);
  if (!S)
    throw new Sle(`Operation ${r} not found`);
  const {
    operation: O = {},
    method: w,
    pathName: E
  } = S;
  if (v.url += Mw({
    spec: t,
    scheme: i,
    contextUrl: a,
    server: l,
    serverVariables: u,
    pathName: E,
    method: w
  }), !r)
    return delete v.cookies, v;
  v.url += E, v.method = `${w}`.toUpperCase(), h = h || {};
  const j = t.paths[E] || {};
  n && (v.headers.accept = n);
  const P = Ele([].concat(kg(O.parameters)).concat(kg(j.parameters)));
  P.forEach((g) => {
    const A = d[g.in];
    let T;
    if (g.in === "body" && g.schema && g.schema.properties && (T = h), T = g && g.name && h[g.name], typeof T > "u" ? T = g && g.name && h[`${g.in}.${g.name}`] : wle(g.name, P).length > 1 && console.warn(`Parameter '${g.name}' is ambiguous because the defined spec has more than one parameter with the name: '${g.name}' and the passed-in parameter values did not define an 'in' value.`), T !== null) {
      if (typeof g.default < "u" && typeof T > "u" && (T = g.default), typeof T > "u" && g.required && !g.allowEmptyValue)
        throw new Error(`Required parameter ${g.name} is not provided`);
      if (m && g.schema && g.schema.type === "object" && typeof T == "string")
        try {
          T = JSON.parse(T);
        } catch {
          throw new Error("Could not parse object parameter value string as JSON");
        }
      A && A({
        req: v,
        parameter: g,
        value: T,
        operation: O,
        spec: t
      });
    }
  });
  const M = se(se({}, e), {}, {
    operation: O
  });
  if (m ? v = vle(M, v) : v = ble(M, v), v.cookies && Object.keys(v.cookies).length) {
    const g = Object.keys(v.cookies).reduce((A, T) => {
      const R = v.cookies[T], k = A ? "&" : "", H = Gd.serialize(T, R);
      return A + k + H;
    }, "");
    v.headers.Cookie = g;
  }
  return v.cookies && delete v.cookies, YO(v), v;
}
const Mp = (e) => e ? e.replace(/\W/g, "") : null;
function Mw(e) {
  return x0(e.spec) ? Ale(e) : _le(e);
}
function Ale(e) {
  let {
    spec: t,
    pathName: r,
    method: n,
    server: i,
    contextUrl: s,
    serverVariables: o = {}
  } = e;
  const a = Zi(t, ["paths", r, (n || "").toLowerCase(), "servers"]) || Zi(t, ["paths", r, "servers"]) || Zi(t, ["servers"]);
  let c = "", l = null;
  if (i && a && a.length) {
    const u = a.map((f) => f.url);
    u.indexOf(i) > -1 && (c = i, l = a[u.indexOf(i)]);
  }
  return !c && a && a.length && (c = a[0].url, [l] = a), c.indexOf("{") > -1 && Tle(c).forEach((f) => {
    if (l.variables && l.variables[f]) {
      const p = l.variables[f], h = o[f] || p.default, d = new RegExp(`{${f}}`, "g");
      c = c.replace(d, h);
    }
  }), jle(c, s);
}
function jle() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const r = e && t ? at.parse(at.resolve(t, e)) : at.parse(e), n = at.parse(t), i = Mp(r.protocol) || Mp(n.protocol) || "", s = r.host || n.host, o = r.pathname || "";
  let a;
  return i && s ? a = `${i}://${s + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function Tle(e) {
  const t = [], r = /{([^}]+)}/g;
  let n;
  for (; n = r.exec(e); )
    t.push(n[1]);
  return t;
}
function _le(e) {
  let {
    spec: t,
    scheme: r,
    contextUrl: n = ""
  } = e;
  const i = at.parse(n), s = Array.isArray(t.schemes) ? t.schemes[0] : null, o = r || s || Mp(i.protocol) || "http", a = t.host || i.host || "", c = t.basePath || "";
  let l;
  return o && a ? l = `${o}://${a + c}` : l = c, l[l.length - 1] === "/" ? l.slice(0, -1) : l;
}
ee.http = Ds;
ee.makeHttp = $D.bind(null, ee.http);
ee.resolveStrategies = {
  "openapi-3-1-apidom": qce,
  "openapi-3-0": A0,
  "openapi-2-0": P0,
  generic: S0
};
ee.resolve = j0({
  strategies: [ee.resolveStrategies["openapi-3-1-apidom"], ee.resolveStrategies["openapi-3-0"], ee.resolveStrategies["openapi-2-0"], ee.resolveStrategies.generic]
});
ee.resolveSubtree = mU({
  strategies: [ee.resolveStrategies["openapi-3-1-apidom"], ee.resolveStrategies["openapi-3-0"], ee.resolveStrategies["openapi-2-0"], ee.resolveStrategies.generic]
});
ee.execute = Ple;
ee.serializeRes = GO;
ee.serializeHeaders = JO;
ee.clearCache = U2;
ee.makeApisTagOperation = zce;
ee.buildRequest = Cw;
ee.helpers = {
  opId: Bs
};
ee.getBaseUrl = Mw;
ee.apidom = {
  resolve: {
    resolvers: {
      HttpResolverSwaggerClient: Ew
    }
  },
  parse: {
    parsers: {
      JsonParser: xw,
      YamlParser: Pw,
      OpenApiJson3_1Parser: Aw,
      OpenApiYaml3_1Parser: jw
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: _w
    }
  }
};
function ee(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof e == "string" ? t.url = e : t = e, !(this instanceof ee))
    return new ee(t);
  Object.assign(this, t);
  const r = this.resolve().then(() => (this.disableInterfaces || Object.assign(this, ee.makeApisTagOperation(this)), this));
  return r.client = this, r;
}
ee.prototype = {
  http: Ds,
  execute(e) {
    return this.applyDefaults(), ee.execute(se({
      spec: this.spec,
      http: this.http,
      securities: {
        authorized: this.authorizations
      },
      contextUrl: typeof this.url == "string" ? this.url : void 0,
      requestInterceptor: this.requestInterceptor || null,
      responseInterceptor: this.responseInterceptor || null
    }, e));
  },
  resolve() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ee.resolve(se({
      spec: this.spec,
      url: this.url,
      http: this.http || this.fetch,
      allowMetaPatches: this.allowMetaPatches,
      useCircularStructures: this.useCircularStructures,
      requestInterceptor: this.requestInterceptor || null,
      responseInterceptor: this.responseInterceptor || null,
      skipNormalization: this.skipNormalization || !1
    }, e)).then((t) => (this.originalSpec = this.spec, this.spec = t.spec, this.errors = t.errors, this));
  }
};
ee.prototype.applyDefaults = function() {
  const {
    spec: t
  } = this, r = this.url;
  if (r && r.startsWith("http")) {
    const n = at.parse(r);
    t.host || (t.host = n.host), t.schemes || (t.schemes = [n.protocol.replace(":", "")]), t.basePath || (t.basePath = "/");
  }
};
var kw = {}, fu = {}, Po = {}, Oe = {}, Mr = {};
Object.defineProperty(Mr, "__esModule", { value: !0 });
Mr.preserveLocationKey = Mr.preserveFormattingKey = Mr.preserveRootRangeKey = void 0;
Mr.preserveRootRangeKey = Symbol("preserve-root-location");
Mr.preserveFormattingKey = Symbol("preserve-formatting");
Mr.preserveLocationKey = Symbol("preserve-location");
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.copyPreservedValues = Oe.setPreservedRootRange = Oe.getPreservedRootRange = Oe.setPreservedLocation = Oe.getPreservedLocation = Oe.setPreservedValue = Oe.getPreservedValue = void 0;
const ut = Mr;
function Ile(e, t) {
  var r;
  return (r = e == null ? void 0 : e[ut.preserveFormattingKey]) === null || r === void 0 ? void 0 : r[t];
}
Oe.getPreservedValue = Ile;
function Rle(e, t, r) {
  e[ut.preserveFormattingKey] === void 0 && Object.defineProperty(e, ut.preserveFormattingKey, { enumerable: !1, value: {} }), e[ut.preserveFormattingKey][t] = r;
}
Oe.setPreservedValue = Rle;
function Fle(e, t) {
  var r;
  return (r = e == null ? void 0 : e[ut.preserveLocationKey]) === null || r === void 0 ? void 0 : r[t];
}
Oe.getPreservedLocation = Fle;
function Vle(e, t, r) {
  e[ut.preserveLocationKey] === void 0 && Object.defineProperty(e, ut.preserveLocationKey, { enumerable: !1, value: {} }), e[ut.preserveLocationKey][t] = r;
}
Oe.setPreservedLocation = Vle;
function Cle(e) {
  return e[ut.preserveRootRangeKey];
}
Oe.getPreservedRootRange = Cle;
function Mle(e, t) {
  Object.defineProperty(e, ut.preserveRootRangeKey, { enumerable: !1, value: t });
}
Oe.setPreservedRootRange = Mle;
function kle(e, t) {
  e && e[ut.preserveFormattingKey] !== void 0 && Object.defineProperty(t, ut.preserveFormattingKey, {
    enumerable: !1,
    value: e[ut.preserveFormattingKey]
  });
}
Oe.copyPreservedValues = kle;
Object.defineProperty(Po, "__esModule", { value: !0 });
Po.visitObject = void 0;
const zo = Oe;
function kp(e, t, r, n) {
  const i = Nle(r);
  if (i === "object") {
    n.onObjectStart(e, t, r, (0, zo.getPreservedLocation)(e, t));
    for (const s in r)
      kp(r, s, r[s], n);
    n.onObjectEnd();
  } else
    i === "array" ? (n.onArrayStart(e, t, r, (0, zo.getPreservedLocation)(e, t)), r.forEach((s, o) => {
      kp(r, o, s, n);
    }), n.onArrayEnd()) : n.onValue(e, t, r, (0, zo.getPreservedValue)(e, t), (0, zo.getPreservedLocation)(e, t));
}
Po.visitObject = kp;
function Nle(e) {
  return typeof e == "object" ? e === null || e instanceof Number || e instanceof String || e instanceof Boolean ? "value" : e instanceof Array ? "array" : "object" : "value";
}
Object.defineProperty(fu, "__esModule", { value: !0 });
fu.simpleClone = void 0;
const Dle = Po, Ng = Oe;
function Lle(e, t) {
  let r = {};
  const n = [r];
  return (0, Dle.visitObject)(void 0, "fakeroot", e, {
    onObjectStart: (i, s, o) => {
      n.push(r), r = r[s] = {}, (0, Ng.copyPreservedValues)(o, r);
    },
    onObjectEnd: () => {
      r = n.pop();
    },
    onArrayStart: (i, s, o) => {
      n.push(r), r = r[s] = [], (0, Ng.copyPreservedValues)(o, r);
    },
    onArrayEnd: () => {
      r = n.pop();
    },
    onValue: (i, s, o, a) => {
      r[s] = t ? t(o) : o;
    }
  }), n[0].fakeroot;
}
fu.simpleClone = Lle;
var mi = {}, pu = {}, Jd = {}, er = {}, tr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t;
  (function(u) {
    u[u.SCALAR = 0] = "SCALAR", u[u.MAPPING = 1] = "MAPPING", u[u.MAP = 2] = "MAP", u[u.SEQ = 3] = "SEQ", u[u.ANCHOR_REF = 4] = "ANCHOR_REF", u[u.INCLUDE_REF = 5] = "INCLUDE_REF";
  })(t = e.Kind || (e.Kind = {}));
  function r(u, f) {
    var p = f ? f.endPosition : u.endPosition + 1, h = {
      key: u,
      value: f,
      startPosition: u.startPosition,
      endPosition: p,
      kind: t.MAPPING,
      parent: null,
      errors: []
    };
    return h;
  }
  e.newMapping = r;
  function n(u, f, p, h) {
    return {
      errors: [],
      referencesAnchor: u,
      value: h,
      startPosition: f,
      endPosition: p,
      kind: t.ANCHOR_REF,
      parent: null
    };
  }
  e.newAnchorRef = n;
  function i(u = "") {
    const f = {
      errors: [],
      startPosition: -1,
      endPosition: -1,
      value: "" + u,
      kind: t.SCALAR,
      parent: null,
      doubleQuoted: !1,
      rawValue: "" + u
    };
    return typeof u != "string" && (f.valueObject = u), f;
  }
  e.newScalar = i;
  function s() {
    return {
      errors: [],
      startPosition: -1,
      endPosition: -1,
      items: [],
      kind: t.SEQ,
      parent: null
    };
  }
  e.newItems = s;
  function o() {
    return s();
  }
  e.newSeq = o;
  function a(u) {
    return {
      errors: [],
      startPosition: -1,
      endPosition: -1,
      mappings: u || [],
      kind: t.MAP,
      parent: null
    };
  }
  e.newMap = a;
  function c(u, f) {
    if (!u || !f || u.kind !== f.kind)
      return !1;
    if (u.kind === t.SCALAR)
      return u.value === f.value;
    if (u.kind === t.SEQ) {
      const p = u, h = f;
      if (p.items.length !== h.items.length)
        return !1;
      for (let d = 0; d < p.items.length; d++) {
        const m = p.items[d], y = h.items[d];
        if (!c(m, y))
          return !1;
      }
      return !0;
    }
    if (u.kind === t.MAP) {
      const p = u, h = f;
      if (p.mappings.length !== h.mappings.length)
        return !1;
      for (const d of p.mappings) {
        const m = d.key, y = d.value, v = h.mappings.find((S) => c(m, S.key));
        if (v) {
          if (!c(y, v.value))
            return !1;
        } else
          return !1;
      }
      return !0;
    }
    if (t.MAPPING === u.kind) {
      const p = u, h = f;
      return c(p.key, h.key);
    }
    return !1;
  }
  e.isNodesEqual = c;
  function l(u) {
    return u.startPosition !== void 0 && u.endPosition !== void 0 && u.kind !== void 0;
  }
  e.isYAMLNode = l;
})(tr);
var dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
function Nw(e) {
  return typeof e > "u" || e === null;
}
dt.isNothing = Nw;
function Ble(e) {
  return typeof e == "object" && e !== null;
}
dt.isObject = Ble;
function Ule(e) {
  return Array.isArray(e) ? e : Nw(e) ? [] : [e];
}
dt.toArray = Ule;
function qle(e, t) {
  var r, n, i, s;
  if (t)
    for (s = Object.keys(t), r = 0, n = s.length; r < n; r += 1)
      i = s[r], e[i] = t[i];
  return e;
}
dt.extend = qle;
function Hle(e, t) {
  var r = "", n;
  for (n = 0; n < t; n += 1)
    r += e;
  return r;
}
dt.repeat = Hle;
function Kle(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
dt.isNegativeZero = Kle;
let Dw = class Np {
  constructor(t, r = null, n = !1) {
    this.name = "YAMLException", this.reason = t, this.mark = r, this.message = this.toString(!1), this.isWarning = n;
  }
  static isInstance(t) {
    if (t != null && t.getClassIdentifier && typeof t.getClassIdentifier == "function") {
      for (let r of t.getClassIdentifier())
        if (r == Np.CLASS_IDENTIFIER)
          return !0;
    }
    return !1;
  }
  getClassIdentifier() {
    var t = [];
    return t.concat(Np.CLASS_IDENTIFIER);
  }
  toString(t = !1) {
    var r;
    return r = "JS-YAML: " + (this.reason || "(unknown reason)"), !t && this.mark && (r += " " + this.mark.toString()), r;
  }
};
Dw.CLASS_IDENTIFIER = "yaml-ast-parser.YAMLException";
var Ao = Dw;
const Dg = dt;
let Gle = class {
  constructor(t, r, n, i, s) {
    this.name = t, this.buffer = r, this.position = n, this.line = i, this.column = s;
  }
  getSnippet(t = 0, r = 75) {
    var n, i, s, o, a;
    if (!this.buffer)
      return null;
    for (t = t || 4, r = r || 75, n = "", i = this.position; i > 0 && `\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(i - 1)) === -1; )
      if (i -= 1, this.position - i > r / 2 - 1) {
        n = " ... ", i += 5;
        break;
      }
    for (s = "", o = this.position; o < this.buffer.length && `\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(o)) === -1; )
      if (o += 1, o - this.position > r / 2 - 1) {
        s = " ... ", o -= 5;
        break;
      }
    return a = this.buffer.slice(i, o), Dg.repeat(" ", t) + n + a + s + `
` + Dg.repeat(" ", t + this.position - i + n.length) + "^";
  }
  toString(t = !0) {
    var r, n = "";
    return this.name && (n += 'in "' + this.name + '" '), n += "at line " + (this.line + 1) + ", column " + (this.column + 1), t || (r = this.getSnippet(), r && (n += `:
` + r)), n;
  }
};
var Jle = Gle, Zr = {}, Pe = {};
Object.defineProperty(Pe, "__esModule", { value: !0 });
const Lg = Ao;
var Wle = [
  "kind",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "defaultStyle",
  "styleAliases"
], zle = [
  "scalar",
  "sequence",
  "mapping"
];
function Yle(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(n) {
      t[String(n)] = r;
    });
  }), t;
}
class Xle {
  constructor(t, r) {
    if (r = r || {}, Object.keys(r).forEach(function(n) {
      if (Wle.indexOf(n) === -1)
        throw new Lg('Unknown option "' + n + '" is met in definition of "' + t + '" YAML type.');
    }), this.tag = t, this.kind = r.kind || null, this.resolve = r.resolve || function() {
      return !0;
    }, this.construct = r.construct || function(n) {
      return n;
    }, this.instanceOf = r.instanceOf || null, this.predicate = r.predicate || null, this.represent = r.represent || null, this.defaultStyle = r.defaultStyle || null, this.styleAliases = Yle(r.styleAliases || null), zle.indexOf(this.kind) === -1)
      throw new Lg('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
  }
}
Pe.Type = Xle;
Object.defineProperty(Zr, "__esModule", { value: !0 });
const Bg = dt, ca = Ao, Qle = Pe;
function Dp(e, t, r) {
  var n = [];
  return e.include.forEach(function(i) {
    r = Dp(i, t, r);
  }), e[t].forEach(function(i) {
    r.forEach(function(s, o) {
      s.tag === i.tag && n.push(o);
    }), r.push(i);
  }), r.filter(function(i, s) {
    return n.indexOf(s) === -1;
  });
}
function Zle() {
  var e = {}, t, r;
  function n(i) {
    e[i.tag] = i;
  }
  for (t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(n);
  return e;
}
class Gn {
  constructor(t) {
    this.include = t.include || [], this.implicit = t.implicit || [], this.explicit = t.explicit || [], this.implicit.forEach(function(r) {
      if (r.loadKind && r.loadKind !== "scalar")
        throw new ca("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }), this.compiledImplicit = Dp(this, "implicit", []), this.compiledExplicit = Dp(this, "explicit", []), this.compiledTypeMap = Zle(this.compiledImplicit, this.compiledExplicit);
  }
}
Gn.DEFAULT = null;
Gn.create = function(...t) {
  var r, n;
  switch (t.length) {
    case 1:
      r = Gn.DEFAULT, n = t[0];
      break;
    case 2:
      r = t[0], n = t[1];
      break;
    default:
      throw new ca("Wrong number of arguments for Schema.create function");
  }
  if (r = Bg.toArray(r), n = Bg.toArray(n), !r.every(function(i) {
    return i instanceof Gn;
  }))
    throw new ca("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
  if (!n.every(function(i) {
    return i instanceof Qle.Type;
  }))
    throw new ca("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  return new Gn({
    include: r,
    explicit: n
  });
};
Zr.Schema = Gn;
const eue = Pe;
var tue = new eue.Type("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(e) {
    return e !== null ? e : "";
  }
});
const rue = Pe;
var nue = new rue.Type("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(e) {
    return e !== null ? e : [];
  }
});
const iue = Pe;
var sue = new iue.Type("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(e) {
    return e !== null ? e : {};
  }
});
const oue = Zr;
var aue = new oue.Schema({
  explicit: [
    tue,
    nue,
    sue
  ]
});
const cue = Pe, Lw = tr;
function lue(e) {
  const t = Lw.isYAMLNode(e) ? e.value : e;
  if (t === null)
    return !0;
  var r = t.length;
  return r === 1 && t === "~" || r === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function uue(e) {
  return Lw.isYAMLNode(e) ? e : null;
}
function fue(e) {
  return e === null;
}
var pue = new cue.Type("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: lue,
  construct: uue,
  predicate: fue,
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
    }
  },
  defaultStyle: "lowercase"
});
const hue = Pe, Bw = tr;
function due(e) {
  const t = Bw.isYAMLNode(e) ? e.value : e;
  if (t === null)
    return !1;
  var r = t.length;
  return r === 4 && (t === "true" || t === "True" || t === "TRUE") || r === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function mue(e) {
  return Bw.isYAMLNode(e) ? e : e === "true" || e === "True" || e === "TRUE";
}
function yue(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
var vue = new hue.Type("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: due,
  construct: mue,
  predicate: yue,
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
const gue = dt, bue = Pe, Uw = tr;
function $ue(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function Oue(e) {
  return 48 <= e && e <= 55;
}
function Sue(e) {
  return 48 <= e && e <= 57;
}
function wue(e) {
  const t = Uw.isYAMLNode(e) ? e.value : e;
  if (t === null)
    return !1;
  var r = t.length, n = 0, i = !1, s;
  if (!r)
    return !1;
  if (s = t[n], (s === "-" || s === "+") && (s = t[++n]), s === "0") {
    if (n + 1 === r)
      return !0;
    if (s = t[++n], s === "b") {
      for (n++; n < r; n++)
        if (s = t[n], s !== "_") {
          if (s !== "0" && s !== "1")
            return !1;
          i = !0;
        }
      return i;
    }
    if (s === "x") {
      for (n++; n < r; n++)
        if (s = t[n], s !== "_") {
          if (!$ue(t.charCodeAt(n)))
            return !1;
          i = !0;
        }
      return i;
    }
    for (; n < r; n++)
      if (s = t[n], s !== "_") {
        if (!Oue(t.charCodeAt(n)))
          return !1;
        i = !0;
      }
    return i;
  }
  for (; n < r; n++)
    if (s = t[n], s !== "_") {
      if (s === ":")
        break;
      if (!Sue(t.charCodeAt(n)))
        return !1;
      i = !0;
    }
  return i ? s !== ":" ? !0 : /^(:[0-5]?[0-9])+$/.test(t.slice(n)) : !1;
}
function Eue(e) {
  if (Uw.isYAMLNode(e))
    return e;
  var t = e, r = 1, n, i, s = [];
  return t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), n = t[0], (n === "-" || n === "+") && (n === "-" && (r = -1), t = t.slice(1), n = t[0]), t === "0" ? 0 : n === "0" ? t[1] === "b" ? r * parseInt(t.slice(2), 2) : t[1] === "x" ? r * parseInt(t, 16) : r * parseInt(t, 8) : t.indexOf(":") !== -1 ? (t.split(":").forEach(function(o) {
    s.unshift(parseInt(o, 10));
  }), t = 0, i = 1, s.forEach(function(o) {
    t += o * i, i *= 60;
  }), r * t) : r * parseInt(t, 10);
}
function xue(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !gue.isNegativeZero(e);
}
var Pue = new bue.Type("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: wue,
  construct: Eue,
  predicate: xue,
  represent: {
    binary: function(e) {
      return "0b" + e.toString(2);
    },
    octal: function(e) {
      return "0" + e.toString(8);
    },
    decimal: function(e) {
      return e.toString(10);
    },
    hexadecimal: function(e) {
      return "0x" + e.toString(16).toUpperCase();
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
const qw = dt, Aue = Pe, Hw = tr;
var jue = new RegExp("-?(0|[1-9][0-9]*)(.[0-9]*)?([eE][-+]?[0-9]+)?|^0$|^[-+]?.(inf|Inf|INF)$|^.(nan|NaN|NAN)$");
function Tue(e) {
  const t = Hw.isYAMLNode(e) ? e.value : e;
  return !(t === null || !jue.test(t));
}
function _ue(e) {
  if (Hw.isYAMLNode(e))
    return e;
  var t, r, n, i;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, i = [], 0 <= "+-".indexOf(t[0]) && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : 0 <= t.indexOf(":") ? (t.split(":").forEach(function(s) {
    i.unshift(parseFloat(s, 10));
  }), t = 0, n = 1, i.forEach(function(s) {
    t += s * n, n *= 60;
  }), r * t) : r * parseFloat(t, 10);
}
function Iue(e, t) {
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
  else if (qw.isNegativeZero(e))
    return "-0.0";
  return e.toString(10);
}
function Rue(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || qw.isNegativeZero(e));
}
var Fue = new Aue.Type("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Tue,
  construct: _ue,
  predicate: Rue,
  represent: Iue,
  defaultStyle: "lowercase"
});
const Vue = Zr;
var Cue = new Vue.Schema({
  include: [
    aue
  ],
  implicit: [
    pue,
    vue,
    Pue,
    Fue
  ]
});
const Mue = Zr;
var kue = new Mue.Schema({
  include: [
    Cue
  ]
});
const Nue = Pe;
var Kw = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?)?$");
function Due(e) {
  if (e === null)
    return !1;
  var t;
  return t = Kw.exec(e), t !== null;
}
function Lue(e) {
  var t, r, n, i, s, o, a, c = 0, l = null, u, f, p;
  if (t = Kw.exec(e), t === null)
    throw new Error("Date resolve error");
  if (r = +t[1], n = +t[2] - 1, i = +t[3], !t[4])
    return new Date(Date.UTC(r, n, i));
  if (s = +t[4], o = +t[5], a = +t[6], t[7]) {
    for (c = t[7].slice(0, 3); c.length < 3; )
      c = c + "0";
    c = +c;
  }
  return t[9] && (u = +t[10], f = +(t[11] || 0), l = (u * 60 + f) * 6e4, t[9] === "-" && (l = -l)), p = new Date(Date.UTC(r, n, i, s, o, a, c)), l && p.setTime(p.getTime() - l), p;
}
function Bue(e) {
  return e.toISOString();
}
var Uue = new Nue.Type("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Due,
  construct: Lue,
  instanceOf: Date,
  represent: Bue
});
const que = Pe;
function Hue(e) {
  return e === "<<" || e === null;
}
var Kue = new que.Type("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Hue
}), Ka = R1.Buffer;
const Gue = Pe, Jue = tr;
var Wd = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Wue(e) {
  if (e === null)
    return !1;
  var t, r, n = 0, i = e.length, s = Wd;
  for (r = 0; r < i; r++)
    if (t = s.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0)
        return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function zue(e) {
  if (Jue.isYAMLNode(e))
    return e;
  var t, r, n = e.replace(/[\r\n=]/g, ""), i = n.length, s = Wd, o = 0, a = [];
  for (t = 0; t < i; t++)
    t % 4 === 0 && t && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | s.indexOf(n.charAt(t));
  return r = i % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), Ka ? new Ka(a) : a;
}
function Yue(e) {
  var t = "", r = 0, n, i, s = e.length, o = Wd;
  for (n = 0; n < s; n++)
    n % 3 === 0 && n && (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]), r = (r << 8) + e[n];
  return i = s % 3, i === 0 ? (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]) : i === 2 ? (t += o[r >> 10 & 63], t += o[r >> 4 & 63], t += o[r << 2 & 63], t += o[64]) : i === 1 && (t += o[r >> 2 & 63], t += o[r << 4 & 63], t += o[64], t += o[64]), t;
}
function Xue(e) {
  return Ka && Ka.isBuffer(e);
}
var Que = new Gue.Type("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Wue,
  construct: zue,
  predicate: Xue,
  represent: Yue
});
const Zue = Pe;
var efe = Object.prototype.hasOwnProperty, tfe = Object.prototype.toString;
function rfe(e) {
  if (e === null)
    return !0;
  var t = [], r, n, i, s, o, a = e;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (i = a[r], o = !1, tfe.call(i) !== "[object Object]")
      return !1;
    for (s in i)
      if (efe.call(i, s))
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
function nfe(e) {
  return e !== null ? e : [];
}
var ife = new Zue.Type("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: rfe,
  construct: nfe
});
const sfe = Pe, Lp = tr;
var ofe = Object.prototype.toString;
function afe(e) {
  if (e === null)
    return !0;
  if (e.kind != Lp.Kind.SEQ)
    return !1;
  var t, r, n, i = e.items;
  for (t = 0, r = i.length; t < r; t += 1)
    if (n = i[t], ofe.call(n) !== "[object Object]" || !Array.isArray(n.mappings) || n.mappings.length !== 1)
      return !1;
  return !0;
}
function cfe(e) {
  if (e === null || !Array.isArray(e.items))
    return [];
  let t, r, n, i = e.items;
  for (n = Lp.newItems(), n.parent = e.parent, n.startPosition = e.startPosition, n.endPosition = e.endPosition, t = 0, r = i.length; t < r; t += 1) {
    let o = i[t].mappings[0], a = Lp.newItems();
    a.parent = n, a.startPosition = o.key.startPosition, a.endPosition = o.value.startPosition, o.key.parent = a, o.value.parent = a, a.items = [o.key, o.value], n.items.push(a);
  }
  return n;
}
var lfe = new sfe.Type("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: afe,
  construct: cfe
});
const ufe = Pe, ffe = tr;
function pfe(e) {
  return e === null ? !0 : e.kind == ffe.Kind.MAP;
}
function hfe(e) {
  return e !== null ? e : {};
}
var dfe = new ufe.Type("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: pfe,
  construct: hfe
});
const mfe = Zr;
var yfe = new mfe.Schema({
  include: [
    kue
  ],
  implicit: [
    Uue,
    Kue
  ],
  explicit: [
    Que,
    ife,
    lfe,
    dfe
  ]
}), hu = yfe;
const vfe = Pe;
function gfe() {
  return !0;
}
function bfe() {
}
function $fe() {
  return "";
}
function Ofe(e) {
  return typeof e > "u";
}
var Sfe = new vfe.Type("tag:yaml.org,2002:js/undefined", {
  kind: "scalar",
  resolve: gfe,
  construct: bfe,
  predicate: Ofe,
  represent: $fe
});
const wfe = Pe;
function Efe(e) {
  if (e === null || e.length === 0)
    return !1;
  var t = e, r = /\/([gim]*)$/.exec(e), n = "";
  if (t[0] === "/") {
    if (r && (n = r[1]), n.length > 3 || t[t.length - n.length - 1] !== "/")
      return !1;
    t = t.slice(1, t.length - n.length - 1);
  }
  try {
    var i = new RegExp(t, n);
    return !0;
  } catch {
    return !1;
  }
}
function xfe(e) {
  var t = e, r = /\/([gim]*)$/.exec(e), n = "";
  return t[0] === "/" && (r && (n = r[1]), t = t.slice(1, t.length - n.length - 1)), new RegExp(t, n);
}
function Pfe(e) {
  var t = "/" + e.source + "/";
  return e.global && (t += "g"), e.multiline && (t += "m"), e.ignoreCase && (t += "i"), t;
}
function Afe(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
var jfe = new wfe.Type("tag:yaml.org,2002:js/regexp", {
  kind: "scalar",
  resolve: Efe,
  construct: xfe,
  predicate: Afe,
  represent: Pfe
});
const Gw = Zr;
var Jw = new Gw.Schema({
  include: [
    hu
  ],
  explicit: [
    Sfe,
    jfe
  ]
});
Gw.Schema.DEFAULT = Jw;
var Ww = Jw;
Object.defineProperty(er, "__esModule", { value: !0 });
const tt = tr, Tr = dt, zd = Ao, Yd = Jle, zw = hu, Tfe = Ww;
var du = Object.prototype.hasOwnProperty, Ga = 1, Yw = 2, Xw = 3, Ja = 4, Af = 1, _fe = 2, Ug = 3, Ife = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Rfe = /[\x85\u2028\u2029]/, Ffe = /[,\[\]\{\}]/, Qw = /^(?:!|!!|![a-z\-]+!)$/i, Zw = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Mt(e) {
  return e === 10 || e === 13;
}
function vn(e) {
  return e === 9 || e === 32;
}
function Ze(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function Jn(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function Vfe(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
function Cfe(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function Mfe(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
function kfe(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function Nfe(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
}
var Bp = new Array(256), Up = new Array(256), e1 = new Array(256), qp = new Array(256);
for (var _t = 0; _t < 256; _t++)
  qp[_t] = Up[_t] = kfe(_t), Bp[_t] = Up[_t] ? 1 : 0, e1[_t] = 1, Bp[_t] || (qp[_t] = "\\" + String.fromCharCode(_t));
let Dfe = class {
  constructor(t, r) {
    this.errorMap = {}, this.errors = [], this.lines = [], this.input = t, this.filename = r.filename || null, this.schema = r.schema || Tfe, this.onWarning = r.onWarning || null, this.legacy = r.legacy || !1, this.allowAnyEscape = r.allowAnyEscape || !1, this.ignoreDuplicateKeys = r.ignoreDuplicateKeys || !1, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.documents = [];
  }
};
function Xd(e, t, r = !1) {
  return new zd(t, new Yd(e.filename, e.input, e.position, e.line, e.position - e.lineStart), r);
}
function Hp(e, t, r, n = !1, i = !1) {
  var s = Lfe(e, t);
  if (s) {
    var o = r + t;
    if (!e.errorMap[o]) {
      var a = new Yd(e.filename, e.input, t, s.line, t - s.start);
      i && (a.toLineEnd = !0);
      var c = new zd(r, a, n);
      e.errors.push(c);
    }
  }
}
function G(e, t) {
  var r = Xd(e, t), n = r.message + r.mark.position;
  if (!e.errorMap[n]) {
    e.errors.push(r), e.errorMap[n] = 1;
    for (var i = e.position; ; ) {
      if (e.position >= e.input.length - 1)
        return;
      var s = e.input.charAt(e.position);
      if (s == `
`) {
        e.position--, e.position == i && (e.position += 1);
        return;
      }
      if (s == "\r") {
        e.position--, e.position == i && (e.position += 1);
        return;
      }
      e.position++;
    }
  }
}
function Kp(e, t) {
  var r = Xd(e, t);
  e.onWarning && e.onWarning.call(null, r);
}
var qg = {
  YAML: function(t, r, n) {
    var i, s, o;
    t.version !== null && G(t, "duplication of %YAML directive"), n.length !== 1 && G(t, "YAML directive accepts exactly one argument"), i = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), i === null && G(t, "ill-formed argument of the YAML directive"), s = parseInt(i[1], 10), o = parseInt(i[2], 10), s !== 1 && G(t, "found incompatible YAML document (version 1.2 is required)"), t.version = n[0], t.checkLineBreaks = o < 2, o !== 2 && G(t, "found incompatible YAML document (version 1.2 is required)");
  },
  TAG: function(t, r, n) {
    var i, s;
    n.length !== 2 && G(t, "TAG directive accepts exactly two arguments"), i = n[0], s = n[1], Qw.test(i) || G(t, "ill-formed tag handle (first argument) of the TAG directive"), du.call(t.tagMap, i) && G(t, 'there is a previously declared suffix for "' + i + '" tag handle'), Zw.test(s) || G(t, "ill-formed tag prefix (second argument) of the TAG directive"), t.tagMap[i] = s;
  }
};
function kr(e, t, r, n) {
  var i, s, o, a, c = e.result;
  if (c.startPosition == -1 && (c.startPosition = t), t <= r) {
    if (a = e.input.slice(t, r), n)
      for (i = 0, s = a.length; i < s; i += 1)
        o = a.charCodeAt(i), o === 9 || 32 <= o && o <= 1114111 || G(e, "expected valid JSON character");
    else
      Ife.test(a) && G(e, "the stream contains non-printable characters");
    c.value += a, c.endPosition = r;
  }
}
function Wn(e, t, r, n, i) {
  if (n != null) {
    t === null && (t = {
      startPosition: n.startPosition,
      endPosition: i.endPosition,
      parent: null,
      errors: [],
      mappings: [],
      kind: tt.Kind.MAP
    });
    var s = tt.newMapping(n, i);
    return s.parent = t, n.parent = s, i != null && (i.parent = s), !e.ignoreDuplicateKeys && t.mappings.forEach((o) => {
      tt.isNodesEqual(o, s) && (Hp(e, s.key.startPosition, "duplicate key"), Hp(e, o.key.startPosition, "duplicate key"));
    }), t.mappings.push(s), t.endPosition = i ? i.endPosition : n.endPosition + 1, t;
  }
}
function Qd(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : G(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.lines.push({
    start: e.lineStart,
    line: e.line
  });
}
function Lfe(e, t) {
  for (var r, n = 0; n < e.lines.length && !(e.lines[n].start > t); n++)
    r = e.lines[n];
  return r || {
    start: 0,
    line: 0
  };
}
function we(e, t, r) {
  for (var n = 0, i = e.input.charCodeAt(e.position); i !== 0; ) {
    for (; vn(i); )
      i === 9 && e.errors.push(Xd(e, "Using tabs can lead to unpredictable results", !0)), i = e.input.charCodeAt(++e.position);
    if (t && i === 35)
      do
        i = e.input.charCodeAt(++e.position);
      while (i !== 10 && i !== 13 && i !== 0);
    if (Mt(i))
      for (Qd(e), i = e.input.charCodeAt(e.position), n++, e.lineIndent = 0; i === 32; )
        e.lineIndent++, i = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && e.lineIndent < r && Kp(e, "deficient indentation"), n;
}
function jo(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && e.input.charCodeAt(t + 1) === r && e.input.charCodeAt(t + 2) === r && (t += 3, r = e.input.charCodeAt(t), r === 0 || Ze(r)));
}
function Zd(e, t, r) {
  r === 1 ? t.value += " " : r > 1 && (t.value += Tr.repeat(`
`, r - 1));
}
function Bfe(e, t, r) {
  var n, i, s, o, a, c, l, u, f = e.kind, p = e.result, h, d = tt.newScalar();
  if (d.plainScalar = !0, e.result = d, h = e.input.charCodeAt(e.position), Ze(h) || Jn(h) || h === 35 || h === 38 || h === 42 || h === 33 || h === 124 || h === 62 || h === 39 || h === 34 || h === 37 || h === 64 || h === 96)
    return e.result.startPosition = e.position - 1, e.result.endPosition = e.position - 1, !1;
  if ((h === 63 || h === 45) && (i = e.input.charCodeAt(e.position + 1), Ze(i) || r && Jn(i)))
    return !1;
  for (e.kind = "scalar", s = o = e.position, a = !1; h !== 0; ) {
    if (h === 58) {
      if (i = e.input.charCodeAt(e.position + 1), Ze(i) || r && Jn(i))
        break;
    } else if (h === 35) {
      if (n = e.input.charCodeAt(e.position - 1), Ze(n))
        break;
    } else {
      if (e.position === e.lineStart && jo(e) || r && Jn(h))
        break;
      if (Mt(h))
        if (c = e.line, l = e.lineStart, u = e.lineIndent, we(e, !1, -1), e.lineIndent >= t) {
          a = !0, h = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = o, e.line = c, e.lineStart = l, e.lineIndent = u;
          break;
        }
    }
    if (a && (kr(e, s, o, !1), Zd(e, d, e.line - c), s = o = e.position, a = !1), vn(h) || (o = e.position + 1), h = e.input.charCodeAt(++e.position), e.position >= e.input.length)
      return !1;
  }
  return kr(e, s, o, !1), e.result.startPosition != -1 ? (d.rawValue = e.input.substring(d.startPosition, d.endPosition), !0) : (e.kind = f, e.result = p, !1);
}
function Ufe(e, t) {
  var r, n, i;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  var s = tt.newScalar();
  for (s.singleQuoted = !0, e.kind = "scalar", e.result = s, s.startPosition = e.position, e.position++, n = i = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (kr(e, n, e.position, !0), r = e.input.charCodeAt(++e.position), s.endPosition = e.position, r === 39)
        n = i = e.position, e.position++;
      else
        return !0;
    else
      Mt(r) ? (kr(e, n, i, !0), Zd(e, s, we(e, !1, t)), n = i = e.position) : e.position === e.lineStart && jo(e) ? G(e, "unexpected end of the document within a single quoted scalar") : (e.position++, i = e.position, s.endPosition = e.position);
  G(e, "unexpected end of the stream within a single quoted scalar");
}
function qfe(e, t) {
  var r, n, i, s, o, a;
  if (a = e.input.charCodeAt(e.position), a !== 34)
    return !1;
  e.kind = "scalar";
  var c = tt.newScalar();
  for (c.doubleQuoted = !0, e.result = c, c.startPosition = e.position, e.position++, r = n = e.position; (a = e.input.charCodeAt(e.position)) !== 0; ) {
    if (a === 34)
      return kr(e, r, e.position, !0), e.position++, c.endPosition = e.position, c.rawValue = e.input.substring(c.startPosition, c.endPosition), !0;
    if (a === 92) {
      if (kr(e, r, e.position, !0), a = e.input.charCodeAt(++e.position), Mt(a))
        we(e, !1, t);
      else if (a < 256 && (e.allowAnyEscape ? e1[a] : Bp[a]))
        c.value += e.allowAnyEscape ? qp[a] : Up[a], e.position++;
      else if ((o = Cfe(a)) > 0) {
        for (i = o, s = 0; i > 0; i--)
          a = e.input.charCodeAt(++e.position), (o = Vfe(a)) >= 0 ? s = (s << 4) + o : G(e, "expected hexadecimal character");
        c.value += Nfe(s), e.position++;
      } else
        G(e, "unknown escape sequence");
      r = n = e.position;
    } else
      Mt(a) ? (kr(e, r, n, !0), Zd(e, c, we(e, !1, t)), r = n = e.position) : e.position === e.lineStart && jo(e) ? G(e, "unexpected end of the document within a double quoted scalar") : (e.position++, n = e.position);
  }
  G(e, "unexpected end of the stream within a double quoted scalar");
}
function Hfe(e, t) {
  var r = !0, n, i = e.tag, s, o = e.anchor, a, c, l, u, f, p, h, d, m;
  if (m = e.input.charCodeAt(e.position), m === 91)
    c = 93, f = !1, s = tt.newItems(), s.startPosition = e.position;
  else if (m === 123)
    c = 125, f = !0, s = tt.newMap(), s.startPosition = e.position;
  else
    return !1;
  for (e.anchor !== null && (s.anchorId = e.anchor, e.anchorMap[e.anchor] = s), m = e.input.charCodeAt(++e.position); m !== 0; ) {
    if (we(e, !0, t), m = e.input.charCodeAt(e.position), m === c)
      return e.position++, e.tag = i, e.anchor = o, e.kind = f ? "mapping" : "sequence", e.result = s, s.endPosition = e.position, !0;
    if (!r) {
      var y = e.position;
      G(e, "missed comma between flow collection entries"), e.position = y + 1;
    }
    if (h = p = d = null, l = u = !1, m === 63 && (a = e.input.charCodeAt(e.position + 1), Ze(a) && (l = u = !0, e.position++, we(e, !0, t))), n = e.line, yi(e, t, Ga, !1, !0), h = e.tag, p = e.result, we(e, !0, t), m = e.input.charCodeAt(e.position), (u || e.line === n) && m === 58 && (l = !0, m = e.input.charCodeAt(++e.position), we(e, !0, t), yi(e, t, Ga, !1, !0), d = e.result), f)
      Wn(e, s, h, p, d);
    else if (l) {
      var v = Wn(e, null, h, p, d);
      v.parent = s, s.items.push(v);
    } else
      p && (p.parent = s), s.items.push(p);
    s.endPosition = e.position + 1, we(e, !0, t), m = e.input.charCodeAt(e.position), m === 44 ? (r = !0, m = e.input.charCodeAt(++e.position)) : r = !1;
  }
  G(e, "unexpected end of the stream within a flow collection");
}
function Kfe(e, t) {
  var r, n, i = Af, s = !1, o = t, a = 0, c = !1, l, u;
  if (u = e.input.charCodeAt(e.position), u === 124)
    n = !1;
  else if (u === 62)
    n = !0;
  else
    return !1;
  var f = tt.newScalar();
  for (e.kind = "scalar", e.result = f, f.startPosition = e.position; u !== 0; )
    if (u = e.input.charCodeAt(++e.position), u === 43 || u === 45)
      Af === i ? i = u === 43 ? Ug : _fe : G(e, "repeat of a chomping mode identifier");
    else if ((l = Mfe(u)) >= 0)
      l === 0 ? G(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? G(e, "repeat of an indentation width identifier") : (o = t + l - 1, s = !0);
    else
      break;
  if (vn(u)) {
    do
      u = e.input.charCodeAt(++e.position);
    while (vn(u));
    if (u === 35)
      do
        u = e.input.charCodeAt(++e.position);
      while (!Mt(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (Qd(e), e.lineIndent = 0, u = e.input.charCodeAt(e.position); (!s || e.lineIndent < o) && u === 32; )
      e.lineIndent++, u = e.input.charCodeAt(++e.position);
    if (!s && e.lineIndent > o && (o = e.lineIndent), Mt(u)) {
      a++;
      continue;
    }
    if (e.lineIndent < o) {
      i === Ug ? f.value += Tr.repeat(`
`, a) : i === Af && s && (f.value += `
`);
      break;
    }
    for (n ? vn(u) ? (c = !0, f.value += Tr.repeat(`
`, a + 1)) : c ? (c = !1, f.value += Tr.repeat(`
`, a + 1)) : a === 0 ? s && (f.value += " ") : f.value += Tr.repeat(`
`, a) : s && (f.value += Tr.repeat(`
`, a + 1)), s = !0, a = 0, r = e.position; !Mt(u) && u !== 0; )
      u = e.input.charCodeAt(++e.position);
    kr(e, r, e.position, !1);
  }
  f.endPosition = e.position;
  for (var p = e.position - 1; ; ) {
    var h = e.input[p];
    if (h == "\r" || h == `
` || h != " " && h != "	")
      break;
    p--;
  }
  return f.endPosition = p, f.rawValue = e.input.substring(f.startPosition, f.endPosition), !0;
}
function Hg(e, t) {
  var r, n = e.tag, i = e.anchor, s = tt.newItems(), o, a = !1, c;
  for (e.anchor !== null && (s.anchorId = e.anchor, e.anchorMap[e.anchor] = s), s.startPosition = e.position, c = e.input.charCodeAt(e.position); c !== 0 && !(c !== 45 || (o = e.input.charCodeAt(e.position + 1), !Ze(o))); ) {
    if (a = !0, e.position++, we(e, !0, -1) && e.lineIndent <= t) {
      s.items.push(null), c = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, yi(e, t, Xw, !1, !0), e.result && (e.result.parent = s, s.items.push(e.result)), we(e, !0, -1), c = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && c !== 0)
      G(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return s.endPosition = e.position, a ? (e.tag = n, e.anchor = i, e.kind = "sequence", e.result = s, s.endPosition = e.position, !0) : !1;
}
function Gfe(e, t, r) {
  var n, i, s, o = e.tag, a = e.anchor, c = tt.newMap(), l = null, u = null, f = null, p = !1, h = !1, d;
  for (c.startPosition = e.position, e.anchor !== null && (c.anchorId = e.anchor, e.anchorMap[e.anchor] = c), d = e.input.charCodeAt(e.position); d !== 0; ) {
    if (n = e.input.charCodeAt(e.position + 1), s = e.line, (d === 63 || d === 58) && Ze(n))
      d === 63 ? (p && (Wn(e, c, l, u, null), l = u = f = null), h = !0, p = !0, i = !0) : p ? (p = !1, i = !0) : G(e, "incomplete explicit mapping pair; a key node is missed"), e.position += 1, d = n;
    else if (yi(e, r, Yw, !1, !0))
      if (e.line === s) {
        for (d = e.input.charCodeAt(e.position); vn(d); )
          d = e.input.charCodeAt(++e.position);
        if (d === 58)
          d = e.input.charCodeAt(++e.position), Ze(d) || G(e, "a whitespace character is expected after the key-value separator within a block mapping"), p && (Wn(e, c, l, u, null), l = u = f = null), h = !0, p = !1, i = !1, l = e.tag, u = e.result;
        else {
          if (e.position == e.lineStart && jo(e))
            break;
          if (h)
            G(e, "can not read an implicit mapping pair; a colon is missed");
          else
            return e.tag = o, e.anchor = a, !0;
        }
      } else if (h) {
        for (G(e, "can not read a block mapping entry; a multiline key may not be an implicit key"); e.position > 0; )
          if (d = e.input.charCodeAt(--e.position), Mt(d)) {
            e.position++;
            break;
          }
      } else
        return e.tag = o, e.anchor = a, !0;
    else
      break;
    if ((e.line === s || e.lineIndent > t) && (yi(e, t, Ja, !0, i) && (p ? u = e.result : f = e.result), p || (Wn(e, c, l, u, f), l = u = f = null), we(e, !0, -1), d = e.input.charCodeAt(e.position)), e.lineIndent > t && d !== 0)
      G(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return p && Wn(e, c, l, u, null), h && (e.tag = o, e.anchor = a, e.kind = "mapping", e.result = c), h;
}
function Jfe(e) {
  var t, r = !1, n = !1, i, s, o;
  if (o = e.input.charCodeAt(e.position), o !== 33)
    return !1;
  if (e.tag !== null && G(e, "duplication of a tag property"), o = e.input.charCodeAt(++e.position), o === 60 ? (r = !0, o = e.input.charCodeAt(++e.position)) : o === 33 ? (n = !0, i = "!!", o = e.input.charCodeAt(++e.position)) : i = "!", t = e.position, r) {
    do
      o = e.input.charCodeAt(++e.position);
    while (o !== 0 && o !== 62);
    e.position < e.length ? (s = e.input.slice(t, e.position), o = e.input.charCodeAt(++e.position)) : G(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Ze(o); )
      o === 33 && (n ? G(e, "tag suffix cannot contain exclamation marks") : (i = e.input.slice(t - 1, e.position + 1), Qw.test(i) || G(e, "named tag handle cannot contain such characters"), n = !0, t = e.position + 1)), o = e.input.charCodeAt(++e.position);
    s = e.input.slice(t, e.position), Ffe.test(s) && G(e, "tag suffix cannot contain flow indicator characters");
  }
  return s && !Zw.test(s) && G(e, "tag name cannot contain such characters: " + s), r ? e.tag = s : du.call(e.tagMap, i) ? e.tag = e.tagMap[i] + s : i === "!" ? e.tag = "!" + s : i === "!!" ? e.tag = "tag:yaml.org,2002:" + s : G(e, 'undeclared tag handle "' + i + '"'), !0;
}
function Wfe(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38)
    return !1;
  for (e.anchor !== null && G(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Ze(r) && !Jn(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && G(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
function zfe(e) {
  var t, r;
  e.length, e.input;
  var n;
  if (n = e.input.charCodeAt(e.position), n !== 42)
    return !1;
  for (n = e.input.charCodeAt(++e.position), t = e.position; n !== 0 && !Ze(n) && !Jn(n); )
    n = e.input.charCodeAt(++e.position);
  return e.position <= t && (G(e, "name of an alias node must contain at least one character"), e.position = t + 1), r = e.input.slice(t, e.position), e.anchorMap.hasOwnProperty(r) || (G(e, 'unidentified alias "' + r + '"'), e.position <= t && (e.position = t + 1)), e.result = tt.newAnchorRef(r, t, e.position, e.anchorMap[r]), we(e, !0, -1), !0;
}
function yi(e, t, r, n, i) {
  var s, o, a, c = 1, l = !1, u = !1, f, p, h, d, m;
  e.tag = null, e.anchor = null, e.kind = null, e.result = null, s = o = a = Ja === r || Xw === r, n && we(e, !0, -1) && (l = !0, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1));
  let y = e.position;
  if (e.position - e.lineStart, c === 1)
    for (; Jfe(e) || Wfe(e); )
      we(e, !0, -1) ? (l = !0, a = s, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1)) : a = !1;
  if (a && (a = l || i), (c === 1 || Ja === r) && (Ga === r || Yw === r ? d = t : d = t + 1, m = e.position - e.lineStart, c === 1 ? a && (Hg(e, m) || Gfe(e, m, d)) || Hfe(e, d) ? u = !0 : (o && Kfe(e, d) || Ufe(e, d) || qfe(e, d) ? u = !0 : zfe(e) ? (u = !0, (e.tag !== null || e.anchor !== null) && G(e, "alias node should not have any properties")) : Bfe(e, d, Ga === r) && (u = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result, e.result.anchorId = e.anchor)) : c === 0 && (u = a && Hg(e, m))), e.tag !== null && e.tag !== "!")
    if (e.tag == "!include")
      e.result || (e.result = tt.newScalar(), e.result.startPosition = e.position, e.result.endPosition = e.position, G(e, "!include without value")), e.result.kind = tt.Kind.INCLUDE_REF;
    else if (e.tag === "?")
      for (f = 0, p = e.implicitTypes.length; f < p; f += 1) {
        h = e.implicitTypes[f];
        var v = e.result.value;
        if (h.resolve(v)) {
          e.result.valueObject = h.construct(e.result.value), e.tag = h.tag, e.anchor !== null && (e.result.anchorId = e.anchor, e.anchorMap[e.anchor] = e.result);
          break;
        }
      }
    else
      du.call(e.typeMap, e.tag) ? (h = e.typeMap[e.tag], e.result !== null && h.kind !== e.kind && (!h.additionalKinds || h.additionalKinds && h.additionalKinds.indexOf(e.kind) === -1) && G(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + h.kind + '", not "' + e.kind + '"'), h.resolve(e.result) ? (e.result = h.construct(e.result), e.anchor !== null && (e.result.anchorId = e.anchor, e.anchorMap[e.anchor] = e.result)) : G(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")) : Hp(e, y, "unknown tag <" + e.tag + ">", !1, !0);
  return e.tag !== null || e.anchor !== null || u;
}
function Yfe(e) {
  var t = e.position, r, n, i, s = !1, o;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = {}, e.anchorMap = {}; (o = e.input.charCodeAt(e.position)) !== 0 && (we(e, !0, -1), o = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || o !== 37)); ) {
    for (s = !0, o = e.input.charCodeAt(++e.position), r = e.position; o !== 0 && !Ze(o); )
      o = e.input.charCodeAt(++e.position);
    for (n = e.input.slice(r, e.position), i = [], n.length < 1 && G(e, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; vn(o); )
        o = e.input.charCodeAt(++e.position);
      if (o === 35) {
        do
          o = e.input.charCodeAt(++e.position);
        while (o !== 0 && !Mt(o));
        break;
      }
      if (Mt(o))
        break;
      for (r = e.position; o !== 0 && !Ze(o); )
        o = e.input.charCodeAt(++e.position);
      i.push(e.input.slice(r, e.position));
    }
    o !== 0 && Qd(e), du.call(qg, n) ? qg[n](e, n, i) : (Kp(e, 'unknown document directive "' + n + '"'), e.position++);
  }
  if (we(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, we(e, !0, -1)) : s && G(e, "directives end mark is expected"), yi(e, e.lineIndent - 1, Ja, !1, !0), we(e, !0, -1), e.checkLineBreaks && Rfe.test(e.input.slice(t, e.position)) && Kp(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && jo(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, we(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    G(e, "end of the stream or a document separator is expected");
  else
    return;
}
function t1(e, t) {
  e = String(e), t = t || {};
  let r = e.length;
  r !== 0 && (e.charCodeAt(r - 1) !== 10 && e.charCodeAt(r - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var n = new Dfe(e, t);
  for (n.input += "\0"; n.input.charCodeAt(n.position) === 32; )
    n.lineIndent += 1, n.position += 1;
  for (; n.position < n.length - 1; ) {
    var i = n.position;
    if (Yfe(n), n.position <= i)
      for (; n.position < n.length - 1; n.position++) {
        var s = n.input.charAt(n.position);
        if (s == `
`)
          break;
      }
  }
  let o = n.documents, a = o.length;
  a > 0 && (o[a - 1].endPosition = r);
  for (let c of o)
    c.errors = n.errors, c.startPosition > c.endPosition && (c.startPosition = c.endPosition);
  return o;
}
function em(e, t, r = {}) {
  var n = t1(e, r), i, s;
  for (i = 0, s = n.length; i < s; i += 1)
    t(n[i]);
}
er.loadAll = em;
function tm(e, t = {}) {
  var r = t1(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    var n = new zd("expected a single document in the stream, but found more");
    return n.mark = new Yd("", "", 0, 0, 0), n.mark.position = r[0].endPosition, r[0].errors.push(n), r[0];
  }
}
er.load = tm;
function r1(e, t, r = {}) {
  em(e, t, Tr.extend({ schema: zw }, r));
}
er.safeLoadAll = r1;
function n1(e, t = {}) {
  return tm(e, Tr.extend({ schema: zw }, t));
}
er.safeLoad = n1;
er.loadAll = em;
er.load = tm;
er.safeLoadAll = r1;
er.safeLoad = n1;
var mu = {};
Object.defineProperty(mu, "__esModule", { value: !0 });
var To = dt, rm = Ao, Xfe = Ww, Qfe = hu, nm = Object.prototype.toString, i1 = Object.prototype.hasOwnProperty, Zfe = 9, un = 10, epe = 13, jf = 32, tpe = 33, Gp = 34, rpe = 35, npe = 37, ipe = 38, Jp = 39, spe = 42, ope = 44, ape = 45, cpe = 58, lpe = 62, upe = 63, fpe = 64, ppe = 91, hpe = 93, dpe = 96, mpe = 123, ype = 124, vpe = 125, Fe = {};
Fe[0] = "\\0";
Fe[7] = "\\a";
Fe[8] = "\\b";
Fe[9] = "\\t";
Fe[10] = "\\n";
Fe[11] = "\\v";
Fe[12] = "\\f";
Fe[13] = "\\r";
Fe[27] = "\\e";
Fe[34] = '\\"';
Fe[92] = "\\\\";
Fe[133] = "\\N";
Fe[160] = "\\_";
Fe[8232] = "\\L";
Fe[8233] = "\\P";
var gpe = [
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
];
function bpe(e, t) {
  var r, n, i, s, o, a, c;
  if (t === null)
    return {};
  for (r = {}, n = Object.keys(t), i = 0, s = n.length; i < s; i += 1)
    o = n[i], a = String(t[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = e.compiledTypeMap[o], c && i1.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function $pe(e) {
  var t, r, n;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", n = 2;
  else if (e <= 65535)
    r = "u", n = 4;
  else if (e <= 4294967295)
    r = "U", n = 8;
  else
    throw new rm("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + To.repeat("0", n - t.length) + t;
}
function Ope(e) {
  this.schema = e.schema || Xfe, this.indent = Math.max(1, e.indent || 2), this.skipInvalid = e.skipInvalid || !1, this.flowLevel = To.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = bpe(this.schema, e.styles || null), this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function Kg(e, t) {
  for (var r = To.repeat(" ", t), n = 0, i = -1, s = "", o, a = e.length; n < a; )
    i = e.indexOf(`
`, n), i === -1 ? (o = e.slice(n), n = a) : (o = e.slice(n, i + 1), n = i + 1), o.length && o !== `
` && (s += r), s += o;
  return s;
}
function Wp(e, t) {
  return `
` + To.repeat(" ", e.indent * t);
}
function Spe(e, t) {
  var r, n, i;
  for (r = 0, n = e.implicitTypes.length; r < n; r += 1)
    if (i = e.implicitTypes[r], i.resolve(t))
      return !0;
  return !1;
}
function yu(e) {
  this.source = e, this.result = "", this.checkpoint = 0;
}
yu.prototype.takeUpTo = function(e) {
  var t;
  if (e < this.checkpoint)
    throw t = new Error("position should be > checkpoint"), t.position = e, t.checkpoint = this.checkpoint, t;
  return this.result += this.source.slice(this.checkpoint, e), this.checkpoint = e, this;
};
yu.prototype.escapeChar = function() {
  var e, t;
  return e = this.source.charCodeAt(this.checkpoint), t = Fe[e] || $pe(e), this.result += t, this.checkpoint += 1, this;
};
yu.prototype.finish = function() {
  this.source.length > this.checkpoint && this.takeUpTo(this.source.length);
};
function wpe(e, t, r) {
  var n, i, s, o, a, c, l, u, f, p, h, d, m, y, v, S, O, w, E, j, P;
  if (t.length === 0) {
    e.dump = "''";
    return;
  }
  if (t.indexOf("!include") == 0) {
    e.dump = "" + t;
    return;
  }
  if (t.indexOf("!$$$novalue") == 0) {
    e.dump = "";
    return;
  }
  if (gpe.indexOf(t) !== -1) {
    e.dump = "'" + t + "'";
    return;
  }
  for (n = !0, i = t.length ? t.charCodeAt(0) : 0, s = jf === i || jf === t.charCodeAt(t.length - 1), (ape === i || upe === i || fpe === i || dpe === i) && (n = !1), s ? (n = !1, o = !1, a = !1) : (o = !0, a = !0), c = !0, l = new yu(t), u = !1, f = 0, p = 0, h = e.indent * r, d = 80, h < 40 ? d -= h : d = 40, y = 0; y < t.length; y++) {
    if (m = t.charCodeAt(y), n)
      if (!xpe(m))
        n = !1;
      else
        continue;
    c && m === Jp && (c = !1), v = Fe[m], S = s1(m), !(!v && !S) && (m !== un && m !== Gp && m !== Jp ? (o = !1, a = !1) : m === un && (u = !0, c = !1, y > 0 && (O = t.charCodeAt(y - 1), O === jf && (a = !1, o = !1)), o && (w = y - f, f = y, w > p && (p = w))), m !== Gp && (c = !1), l.takeUpTo(y), l.escapeChar());
  }
  if (n && Spe(e, t) && (n = !1), E = "", (o || a) && (j = 0, t.charCodeAt(t.length - 1) === un && (j += 1, t.charCodeAt(t.length - 2) === un && (j += 1)), j === 0 ? E = "-" : j === 2 && (E = "+")), a && p < d && (o = !1), u || (a = !1), n)
    e.dump = t;
  else if (c)
    e.dump = "'" + t + "'";
  else if (o)
    P = Epe(t, d), e.dump = ">" + E + `
` + Kg(P, h);
  else if (a)
    E || (t = t.replace(/\n$/, "")), e.dump = "|" + E + `
` + Kg(t, h);
  else if (l)
    l.finish(), e.dump = '"' + l.result + '"';
  else
    throw new Error("Failed to dump scalar value");
}
function Epe(e, t) {
  var r = "", n = 0, i = e.length, s = /\n+$/.exec(e), o;
  for (s && (i = s.index + 1); n < i; )
    o = e.indexOf(`
`, n), o > i || o === -1 ? (r && (r += `

`), r += Gg(e.slice(n, i), t), n = i) : (r && (r += `

`), r += Gg(e.slice(n, o), t), n = o + 1);
  return s && s[0] !== `
` && (r += s[0]), r;
}
function Gg(e, t) {
  if (e === "")
    return e;
  for (var r = /[^\s] [^\s]/g, n = "", i = 0, s = 0, o = r.exec(e), a, c, l; o; )
    a = o.index, a - s > t && (i !== s ? c = i : c = a, n && (n += `
`), l = e.slice(s, c), n += l, s = c + 1), i = a + 1, o = r.exec(e);
  return n && (n += `
`), s !== i && e.length - s > t ? n += e.slice(s, i) + `
` + e.slice(i + 1) : n += e.slice(s), n;
}
function xpe(e) {
  return Zfe !== e && un !== e && epe !== e && ope !== e && ppe !== e && hpe !== e && mpe !== e && vpe !== e && rpe !== e && ipe !== e && spe !== e && tpe !== e && ype !== e && lpe !== e && Jp !== e && Gp !== e && npe !== e && cpe !== e && !Fe[e] && !s1(e);
}
function s1(e) {
  return !(32 <= e && e <= 126 || e === 133 || 160 <= e && e <= 55295 || 57344 <= e && e <= 65533 || 65536 <= e && e <= 1114111);
}
function Ppe(e, t, r) {
  var n = "", i = e.tag, s, o;
  for (s = 0, o = r.length; s < o; s += 1)
    Sn(e, t, r[s], !1, !1) && (s !== 0 && (n += ", "), n += e.dump);
  e.tag = i, e.dump = "[" + n + "]";
}
function Ape(e, t, r, n) {
  var i = "", s = e.tag, o, a;
  for (o = 0, a = r.length; o < a; o += 1)
    Sn(e, t + 1, r[o], !0, !0) && ((!n || o !== 0) && (i += Wp(e, t)), i += "- " + e.dump);
  e.tag = s, e.dump = i || "[]";
}
function jpe(e, t, r) {
  var n = "", i = e.tag, s = Object.keys(r), o, a, c, l, u;
  for (o = 0, a = s.length; o < a; o += 1)
    u = "", o !== 0 && (u += ", "), c = s[o], l = r[c], Sn(e, t, c, !1, !1) && (e.dump.length > 1024 && (u += "? "), u += e.dump + ": ", Sn(e, t, l, !1, !1) && (u += e.dump, n += u));
  e.tag = i, e.dump = "{" + n + "}";
}
function Tpe(e, t, r, n) {
  var i = "", s = e.tag, o = Object.keys(r), a, c, l, u, f, p;
  for (a = 0, c = o.length; a < c; a += 1)
    p = "", (!n || a !== 0) && (p += Wp(e, t)), l = o[a], u = r[l], Sn(e, t + 1, l, !0, !0) && (f = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, f && (e.dump && un === e.dump.charCodeAt(0) ? p += "?" : p += "? "), p += e.dump, f && (p += Wp(e, t)), Sn(e, t + 1, u, !0, f) && (e.dump && un === e.dump.charCodeAt(0) ? p += ":" : p += ": ", p += e.dump, i += p));
  e.tag = s, e.dump = i || "{}";
}
function Jg(e, t, r) {
  var n, i, s, o, a, c;
  for (i = r ? e.explicitTypes : e.implicitTypes, s = 0, o = i.length; s < o; s += 1)
    if (a = i[s], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof t == "object" && t instanceof a.instanceOf) && (!a.predicate || a.predicate(t))) {
      if (e.tag = r ? a.tag : "?", a.represent) {
        if (c = e.styleMap[a.tag] || a.defaultStyle, nm.call(a.represent) === "[object Function]")
          n = a.represent(t, c);
        else if (i1.call(a.represent, c))
          n = a.represent[c](t, c);
        else
          throw new rm("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        e.dump = n;
      }
      return !0;
    }
  return !1;
}
function Sn(e, t, r, n, i) {
  e.tag = null, e.dump = r, Jg(e, r, !1) || Jg(e, r, !0);
  var s = nm.call(e.dump);
  n && (n = 0 > e.flowLevel || e.flowLevel > t), (e.tag !== null && e.tag !== "?" || e.indent !== 2 && t > 0) && (i = !1);
  var o = s === "[object Object]" || s === "[object Array]", a, c;
  if (o && (a = e.duplicates.indexOf(r), c = a !== -1), c && e.usedDuplicates[a])
    e.dump = "*ref_" + a;
  else {
    if (o && c && !e.usedDuplicates[a] && (e.usedDuplicates[a] = !0), s === "[object Object]")
      n && Object.keys(e.dump).length !== 0 ? (Tpe(e, t, e.dump, i), c && (e.dump = "&ref_" + a + (t === 0 ? `
` : "") + e.dump)) : (jpe(e, t, e.dump), c && (e.dump = "&ref_" + a + " " + e.dump));
    else if (s === "[object Array]")
      n && e.dump.length !== 0 ? (Ape(e, t, e.dump, i), c && (e.dump = "&ref_" + a + (t === 0 ? `
` : "") + e.dump)) : (Ppe(e, t, e.dump), c && (e.dump = "&ref_" + a + " " + e.dump));
    else if (s === "[object String]")
      e.tag !== "?" && wpe(e, e.dump, t);
    else {
      if (e.skipInvalid)
        return !1;
      throw new rm("unacceptable kind of an object to dump " + s);
    }
    e.tag !== null && e.tag !== "?" && (e.dump = "!<" + e.tag + "> " + e.dump);
  }
  return !0;
}
function _pe(e, t) {
  var r = [], n = [], i, s;
  for (zp(e, r, n), i = 0, s = n.length; i < s; i += 1)
    t.duplicates.push(r[n[i]]);
  t.usedDuplicates = new Array(s);
}
function zp(e, t, r) {
  nm.call(e);
  var n, i, s;
  if (e !== null && typeof e == "object")
    if (i = t.indexOf(e), i !== -1)
      r.indexOf(i) === -1 && r.push(i);
    else if (t.push(e), Array.isArray(e))
      for (i = 0, s = e.length; i < s; i += 1)
        zp(e[i], t, r);
    else
      for (n = Object.keys(e), i = 0, s = n.length; i < s; i += 1)
        zp(e[n[i]], t, r);
}
function o1(e, t) {
  t = t || {};
  var r = new Ope(t);
  return _pe(e, r), Sn(r, 0, e, !0, !0) ? r.dump + `
` : "";
}
mu.dump = o1;
function Ipe(e, t) {
  return o1(e, To.extend({ schema: Qfe }, t));
}
mu.safeDump = Ipe;
var a1 = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(a) {
    if (["true", "True", "TRUE"].lastIndexOf(a) >= 0)
      return !0;
    if (["false", "False", "FALSE"].lastIndexOf(a) >= 0)
      return !1;
    throw `Invalid boolean "${a}"`;
  }
  e.parseYamlBoolean = t;
  function r(a) {
    return a.lastIndexOf("0o", 0) === 0 ? parseInt(a.substring(2), 8) : parseInt(a);
  }
  function n(a) {
    const c = r(a);
    if (isNaN(c))
      throw `Invalid integer "${a}"`;
    return c;
  }
  e.parseYamlInteger = n;
  function i(a) {
    if ([".nan", ".NaN", ".NAN"].lastIndexOf(a) >= 0)
      return NaN;
    const l = /^([-+])?(?:\.inf|\.Inf|\.INF)$/.exec(a);
    if (l)
      return l[1] === "-" ? -1 / 0 : 1 / 0;
    const u = parseFloat(a);
    if (!isNaN(u))
      return u;
    throw `Invalid float "${a}"`;
  }
  e.parseYamlFloat = i;
  var s;
  (function(a) {
    a[a.null = 0] = "null", a[a.bool = 1] = "bool", a[a.int = 2] = "int", a[a.float = 3] = "float", a[a.string = 4] = "string";
  })(s = e.ScalarType || (e.ScalarType = {}));
  function o(a) {
    if (a === void 0)
      return s.null;
    if (a.doubleQuoted || !a.plainScalar || a.singleQuoted)
      return s.string;
    const c = a.value;
    if (["null", "Null", "NULL", "~", ""].indexOf(c) >= 0 || c == null)
      return s.null;
    if (["true", "True", "TRUE", "false", "False", "FALSE"].indexOf(c) >= 0)
      return s.bool;
    const l = /^[-+]?[0-9]+$/, u = /^0o[0-7]+$/, f = /^0x[0-9a-fA-F]+$/;
    if (l.test(c) || u.test(c) || f.test(c))
      return s.int;
    const p = /^[-+]?(\.[0-9]+|[0-9]+(\.[0-9]*)?)([eE][-+]?[0-9]+)?$/, h = /^[-+]?(\.inf|\.Inf|\.INF)$/;
    return p.test(c) || h.test(c) || [".nan", ".NaN", ".NAN"].indexOf(c) >= 0 ? s.float : s.string;
  }
  e.determineScalarType = o;
})(a1);
(function(e) {
  function t(i) {
    for (var s in i)
      e.hasOwnProperty(s) || (e[s] = i[s]);
  }
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = er;
  e.load = r.load, e.loadAll = r.loadAll, e.safeLoad = r.safeLoad, e.safeLoadAll = r.safeLoadAll;
  var n = mu;
  e.dump = n.dump, e.safeDump = n.safeDump, e.YAMLException = Ao, t(tr), t(a1);
})(Jd);
Object.defineProperty(pu, "__esModule", { value: !0 });
pu.visitYaml = void 0;
const Me = Jd;
function zi(e, t, r, n) {
  const i = Fpe(e, r);
  if (r == null) {
    n.onValue(e, t, r, void 0, i);
    return;
  }
  if (r.kind === Me.Kind.MAP) {
    n.onObjectStart(e, t, r, i);
    for (const s of r.mappings)
      zi(s, s.key.value, s.value, n);
    n.onObjectEnd();
  } else if (r.kind === Me.Kind.SEQ)
    n.onArrayStart(e, t, r, i), r.items.forEach((s, o) => {
      zi(r, o, s, n);
    }), n.onArrayEnd();
  else if (r.kind === Me.Kind.ANCHOR_REF)
    zi(e, t, r.value, n);
  else if (r.kind === Me.Kind.MAPPING)
    zi(e, t, r.value, n);
  else if (r.kind === Me.Kind.SCALAR) {
    const [s, o] = Rpe(r), a = Vpe(s, r.value, o);
    n.onValue(e, t, o, a, i);
  }
}
pu.visitYaml = zi;
function Rpe(e) {
  const t = (0, Me.determineScalarType)(e);
  return t === Me.ScalarType.int ? [t, (0, Me.parseYamlInteger)(e.value)] : t === Me.ScalarType.float ? [t, (0, Me.parseYamlFloat)(e.value)] : t === Me.ScalarType.bool ? [t, (0, Me.parseYamlBoolean)(e.value)] : t == Me.ScalarType.null ? [t, null] : [t, e.value];
}
function Fpe(e, t) {
  const r = e && e.kind === Me.Kind.MAPPING ? { start: e.key.startPosition, end: e.key.endPosition } : void 0;
  return t ? { key: r, value: { start: t.startPosition, end: t.endPosition } } : e && e.kind === Me.Kind.MAPPING ? { key: r, value: { start: e.key.endPosition, end: e.key.endPosition } } : { key: r, value: { start: 0, end: 0 } };
}
function Vpe(e, t, r) {
  return e === Me.ScalarType.int ? Cpe(t) : e === Me.ScalarType.float ? Mpe(r) : t;
}
function Cpe(e) {
  e.indexOf("_") !== -1 && (e = e.replace(/_/g, ""));
  let t = BigInt(1);
  return (e[0] === "-" || e[0] === "+") && (e[0] === "-" && (t = BigInt(-1)), e = e.slice(1)), (t * BigInt(e)).toString();
}
function Mpe(e) {
  const t = JSON.stringify(e);
  return t.includes("null") || t.includes("e") || t.includes("E") || t.includes(".") ? t : t + ".0";
}
var vu = {};
Object.defineProperty(vu, "__esModule", { value: !0 });
vu.visitJson = void 0;
function Yp(e, t, r, n) {
  if (r === void 0) {
    n.onValue(e, t, null, void 0, { value: { start: 0, end: 0 } });
    return;
  }
  const i = { value: { start: r.offset, end: r.offset + r.length } };
  if (e && e.type === "property") {
    const s = e.children[0];
    i.key = { start: s.offset, end: s.offset + s.length };
  }
  if (r.type === "object") {
    n.onObjectStart(e, t, r, i);
    for (const s of r.children) {
      const [o, a] = s.children;
      Yp(s, o.value, a, n);
    }
    n.onObjectEnd();
  } else
    r.type === "array" ? (n.onArrayStart(e, t, r, i), r.children.forEach((s, o) => {
      Yp(r, o, s, n);
    }), n.onArrayEnd()) : n.onValue(e, t, r.value, r.rawValue, i);
}
vu.visitJson = Yp;
var gu = {};
function bu(e, t = !1) {
  const r = e.length;
  let n = 0, i = "", s = 0, o = 16, a = 0, c = 0, l = 0, u = 0, f = 0;
  function p(O, w) {
    let E = 0, j = 0;
    for (; E < O || !w; ) {
      let P = e.charCodeAt(n);
      if (P >= 48 && P <= 57)
        j = j * 16 + P - 48;
      else if (P >= 65 && P <= 70)
        j = j * 16 + P - 65 + 10;
      else if (P >= 97 && P <= 102)
        j = j * 16 + P - 97 + 10;
      else
        break;
      n++, E++;
    }
    return E < O && (j = -1), j;
  }
  function h(O) {
    n = O, i = "", s = 0, o = 16, f = 0;
  }
  function d() {
    let O = n;
    if (e.charCodeAt(n) === 48)
      n++;
    else
      for (n++; n < e.length && Cn(e.charCodeAt(n)); )
        n++;
    if (n < e.length && e.charCodeAt(n) === 46)
      if (n++, n < e.length && Cn(e.charCodeAt(n)))
        for (n++; n < e.length && Cn(e.charCodeAt(n)); )
          n++;
      else
        return f = 3, e.substring(O, n);
    let w = n;
    if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101))
      if (n++, (n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) && n++, n < e.length && Cn(e.charCodeAt(n))) {
        for (n++; n < e.length && Cn(e.charCodeAt(n)); )
          n++;
        w = n;
      } else
        f = 3;
    return e.substring(O, w);
  }
  function m() {
    let O = "", w = n;
    for (; ; ) {
      if (n >= r) {
        O += e.substring(w, n), f = 2;
        break;
      }
      const E = e.charCodeAt(n);
      if (E === 34) {
        O += e.substring(w, n), n++;
        break;
      }
      if (E === 92) {
        if (O += e.substring(w, n), n++, n >= r) {
          f = 2;
          break;
        }
        switch (e.charCodeAt(n++)) {
          case 34:
            O += '"';
            break;
          case 92:
            O += "\\";
            break;
          case 47:
            O += "/";
            break;
          case 98:
            O += "\b";
            break;
          case 102:
            O += "\f";
            break;
          case 110:
            O += `
`;
            break;
          case 114:
            O += "\r";
            break;
          case 116:
            O += "	";
            break;
          case 117:
            const P = p(4, !0);
            P >= 0 ? O += String.fromCharCode(P) : f = 4;
            break;
          default:
            f = 5;
        }
        w = n;
        continue;
      }
      if (E >= 0 && E <= 31)
        if (Gi(E)) {
          O += e.substring(w, n), f = 2;
          break;
        } else
          f = 6;
      n++;
    }
    return O;
  }
  function y() {
    if (i = "", f = 0, s = n, c = a, u = l, n >= r)
      return s = r, o = 17;
    let O = e.charCodeAt(n);
    if (Tf(O)) {
      do
        n++, i += String.fromCharCode(O), O = e.charCodeAt(n);
      while (Tf(O));
      return o = 15;
    }
    if (Gi(O))
      return n++, i += String.fromCharCode(O), O === 13 && e.charCodeAt(n) === 10 && (n++, i += `
`), a++, l = n, o = 14;
    switch (O) {
      case 123:
        return n++, o = 1;
      case 125:
        return n++, o = 2;
      case 91:
        return n++, o = 3;
      case 93:
        return n++, o = 4;
      case 58:
        return n++, o = 6;
      case 44:
        return n++, o = 5;
      case 34:
        return n++, i = m(), o = 10;
      case 47:
        const w = n - 1;
        if (e.charCodeAt(n + 1) === 47) {
          for (n += 2; n < r && !Gi(e.charCodeAt(n)); )
            n++;
          return i = e.substring(w, n), o = 12;
        }
        if (e.charCodeAt(n + 1) === 42) {
          n += 2;
          const E = r - 1;
          let j = !1;
          for (; n < E; ) {
            const P = e.charCodeAt(n);
            if (P === 42 && e.charCodeAt(n + 1) === 47) {
              n += 2, j = !0;
              break;
            }
            n++, Gi(P) && (P === 13 && e.charCodeAt(n) === 10 && n++, a++, l = n);
          }
          return j || (n++, f = 1), i = e.substring(w, n), o = 13;
        }
        return i += String.fromCharCode(O), n++, o = 16;
      case 45:
        if (i += String.fromCharCode(O), n++, n === r || !Cn(e.charCodeAt(n)))
          return o = 16;
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return i += d(), o = 11;
      default:
        for (; n < r && v(O); )
          n++, O = e.charCodeAt(n);
        if (s !== n) {
          switch (i = e.substring(s, n), i) {
            case "true":
              return o = 8;
            case "false":
              return o = 9;
            case "null":
              return o = 7;
          }
          return o = 16;
        }
        return i += String.fromCharCode(O), n++, o = 16;
    }
  }
  function v(O) {
    if (Tf(O) || Gi(O))
      return !1;
    switch (O) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return !1;
    }
    return !0;
  }
  function S() {
    let O;
    do
      O = y();
    while (O >= 12 && O <= 15);
    return O;
  }
  return {
    setPosition: h,
    getPosition: () => n,
    scan: t ? S : y,
    getToken: () => o,
    getTokenValue: () => i,
    getTokenOffset: () => s,
    getTokenLength: () => n - s,
    getTokenStartLine: () => c,
    getTokenStartCharacter: () => s - u,
    getTokenError: () => f
  };
}
function Tf(e) {
  return e === 32 || e === 9;
}
function Gi(e) {
  return e === 10 || e === 13;
}
function Cn(e) {
  return e >= 48 && e <= 57;
}
var Wg;
(function(e) {
  e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})(Wg || (Wg = {}));
function c1(e, t, r) {
  let n, i, s, o, a;
  if (t) {
    for (o = t.offset, a = o + t.length, s = o; s > 0 && !Wa(e, s - 1); )
      s--;
    let O = a;
    for (; O < e.length && !Wa(e, O); )
      O++;
    i = e.substring(s, O), n = kpe(i, r);
  } else
    i = e, n = 0, s = 0, o = 0, a = e.length;
  const c = Npe(r, e);
  let l = 0, u = 0, f;
  r.insertSpaces ? f = Mn(" ", r.tabSize || 4) : f = "	";
  let p = bu(i, !1), h = !1;
  function d() {
    return l > 1 ? Mn(c, l) + Mn(f, n + u) : c + Mn(f, n + u);
  }
  function m() {
    let O = p.scan();
    for (l = 0; O === 15 || O === 14; )
      O === 14 && r.keepLines ? l += 1 : O === 14 && (l = 1), O = p.scan();
    return h = O === 16 || p.getTokenError() !== 0, O;
  }
  const y = [];
  function v(O, w, E) {
    !h && (!t || w < a && E > o) && e.substring(w, E) !== O && y.push({ offset: w, length: E - w, content: O });
  }
  let S = m();
  if (r.keepLines && l > 0 && v(Mn(c, l), 0, 0), S !== 17) {
    let O = p.getTokenOffset() + s, w = Mn(f, n);
    v(w, s, O);
  }
  for (; S !== 17; ) {
    let O = p.getTokenOffset() + p.getTokenLength() + s, w = m(), E = "", j = !1;
    for (; l === 0 && (w === 12 || w === 13); ) {
      let M = p.getTokenOffset() + s;
      v(" ", O, M), O = p.getTokenOffset() + p.getTokenLength() + s, j = w === 12, E = j ? d() : "", w = m();
    }
    if (w === 2)
      S !== 1 && u--, r.keepLines && l > 0 || !r.keepLines && S !== 1 ? E = d() : r.keepLines && (E = " ");
    else if (w === 4)
      S !== 3 && u--, r.keepLines && l > 0 || !r.keepLines && S !== 3 ? E = d() : r.keepLines && (E = " ");
    else {
      switch (S) {
        case 3:
        case 1:
          u++, r.keepLines && l > 0 || !r.keepLines ? E = d() : E = " ";
          break;
        case 5:
          r.keepLines && l > 0 || !r.keepLines ? E = d() : E = " ";
          break;
        case 12:
          E = d();
          break;
        case 13:
          l > 0 ? E = d() : j || (E = " ");
          break;
        case 6:
          r.keepLines && l > 0 ? E = d() : j || (E = " ");
          break;
        case 10:
          r.keepLines && l > 0 ? E = d() : w === 6 && !j && (E = "");
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          r.keepLines && l > 0 ? E = d() : (w === 12 || w === 13) && !j ? E = " " : w !== 5 && w !== 17 && (h = !0);
          break;
        case 16:
          h = !0;
          break;
      }
      l > 0 && (w === 12 || w === 13) && (E = d());
    }
    w === 17 && (r.keepLines && l > 0 ? E = d() : E = r.insertFinalNewline ? c : "");
    const P = p.getTokenOffset() + s;
    v(E, O, P), S = w;
  }
  return y;
}
function Mn(e, t) {
  let r = "";
  for (let n = 0; n < t; n++)
    r += e;
  return r;
}
function kpe(e, t) {
  let r = 0, n = 0;
  const i = t.tabSize || 4;
  for (; r < e.length; ) {
    let s = e.charAt(r);
    if (s === " ")
      n++;
    else if (s === "	")
      n += i;
    else
      break;
    r++;
  }
  return Math.floor(n / i);
}
function Npe(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t.charAt(r);
    if (n === "\r")
      return r + 1 < t.length && t.charAt(r + 1) === `
` ? `\r
` : "\r";
    if (n === `
`)
      return `
`;
  }
  return e && e.eol || `
`;
}
function Wa(e, t) {
  return `\r
`.indexOf(e.charAt(t)) !== -1;
}
var ws;
(function(e) {
  e.DEFAULT = {
    allowTrailingComma: !1
  };
})(ws || (ws = {}));
function Dpe(e, t) {
  const r = [], n = new Object();
  let i;
  const s = {
    value: {},
    offset: 0,
    length: 0,
    type: "object",
    parent: void 0
  };
  let o = !1;
  function a(c, l, u, f) {
    s.value = c, s.offset = l, s.length = u, s.type = f, s.colonOffset = void 0, i = s;
  }
  try {
    $u(e, {
      onObjectBegin: (c, l) => {
        if (t <= c)
          throw n;
        i = void 0, o = t > c, r.push("");
      },
      onObjectProperty: (c, l, u) => {
        if (t < l || (a(c, l, u, "property"), r[r.length - 1] = c, t <= l + u))
          throw n;
      },
      onObjectEnd: (c, l) => {
        if (t <= c)
          throw n;
        i = void 0, r.pop();
      },
      onArrayBegin: (c, l) => {
        if (t <= c)
          throw n;
        i = void 0, r.push(0);
      },
      onArrayEnd: (c, l) => {
        if (t <= c)
          throw n;
        i = void 0, r.pop();
      },
      onLiteralValue: (c, l, u) => {
        if (t < l || (a(c, l, u, p1(c)), t <= l + u))
          throw n;
      },
      onSeparator: (c, l, u) => {
        if (t <= l)
          throw n;
        if (c === ":" && i && i.type === "property")
          i.colonOffset = l, o = !1, i = void 0;
        else if (c === ",") {
          const f = r[r.length - 1];
          typeof f == "number" ? r[r.length - 1] = f + 1 : (o = !0, r[r.length - 1] = ""), i = void 0;
        }
      }
    });
  } catch (c) {
    if (c !== n)
      throw c;
  }
  return {
    path: r,
    previousNode: i,
    isAtPropertyKey: o,
    matches: (c) => {
      let l = 0;
      for (let u = 0; l < c.length && u < r.length; u++)
        if (c[l] === r[u] || c[l] === "*")
          l++;
        else if (c[l] !== "**")
          return !1;
      return l === c.length;
    }
  };
}
function Lpe(e, t = [], r = ws.DEFAULT) {
  let n = null, i = [];
  const s = [];
  function o(c) {
    Array.isArray(i) ? i.push(c) : n !== null && (i[n] = c);
  }
  return $u(e, {
    onObjectBegin: () => {
      const c = {};
      o(c), s.push(i), i = c, n = null;
    },
    onObjectProperty: (c) => {
      n = c;
    },
    onObjectEnd: () => {
      i = s.pop();
    },
    onArrayBegin: () => {
      const c = [];
      o(c), s.push(i), i = c, n = null;
    },
    onArrayEnd: () => {
      i = s.pop();
    },
    onLiteralValue: o,
    onError: (c, l, u) => {
      t.push({ error: c, offset: l, length: u });
    }
  }, r), i[0];
}
function l1(e, t = [], r = ws.DEFAULT) {
  let n = { type: "array", offset: -1, length: -1, children: [], parent: void 0 };
  function i(c) {
    n.type === "property" && (n.length = c - n.offset, n = n.parent);
  }
  function s(c) {
    return n.children.push(c), c;
  }
  $u(e, {
    onObjectBegin: (c) => {
      n = s({ type: "object", offset: c, length: -1, parent: n, children: [] });
    },
    onObjectProperty: (c, l, u) => {
      n = s({ type: "property", offset: l, length: -1, parent: n, children: [] }), n.children.push({ type: "string", value: c, offset: l, length: u, parent: n });
    },
    onObjectEnd: (c, l) => {
      i(c + l), n.length = c + l - n.offset, n = n.parent, i(c + l);
    },
    onArrayBegin: (c, l) => {
      n = s({ type: "array", offset: c, length: -1, parent: n, children: [] });
    },
    onArrayEnd: (c, l) => {
      n.length = c + l - n.offset, n = n.parent, i(c + l);
    },
    onLiteralValue: (c, l, u) => {
      s({ type: p1(c), offset: l, length: u, parent: n, value: c }), i(l + u);
    },
    onSeparator: (c, l, u) => {
      n.type === "property" && (c === ":" ? n.colonOffset = l : c === "," && i(l));
    },
    onError: (c, l, u) => {
      t.push({ error: c, offset: l, length: u });
    }
  }, r);
  const a = n.children[0];
  return a && delete a.parent, a;
}
function Xp(e, t) {
  if (!e)
    return;
  let r = e;
  for (let n of t)
    if (typeof n == "string") {
      if (r.type !== "object" || !Array.isArray(r.children))
        return;
      let i = !1;
      for (const s of r.children)
        if (Array.isArray(s.children) && s.children[0].value === n && s.children.length === 2) {
          r = s.children[1], i = !0;
          break;
        }
      if (!i)
        return;
    } else {
      const i = n;
      if (r.type !== "array" || i < 0 || !Array.isArray(r.children) || i >= r.children.length)
        return;
      r = r.children[i];
    }
  return r;
}
function u1(e) {
  if (!e.parent || !e.parent.children)
    return [];
  const t = u1(e.parent);
  if (e.parent.type === "property") {
    const r = e.parent.children[0].value;
    t.push(r);
  } else if (e.parent.type === "array") {
    const r = e.parent.children.indexOf(e);
    r !== -1 && t.push(r);
  }
  return t;
}
function Qp(e) {
  switch (e.type) {
    case "array":
      return e.children.map(Qp);
    case "object":
      const t = /* @__PURE__ */ Object.create(null);
      for (let r of e.children) {
        const n = r.children[1];
        n && (t[r.children[0].value] = Qp(n));
      }
      return t;
    case "null":
    case "string":
    case "number":
    case "boolean":
      return e.value;
    default:
      return;
  }
}
function Bpe(e, t, r = !1) {
  return t >= e.offset && t < e.offset + e.length || r && t === e.offset + e.length;
}
function f1(e, t, r = !1) {
  if (Bpe(e, t, r)) {
    const n = e.children;
    if (Array.isArray(n))
      for (let i = 0; i < n.length && n[i].offset <= t; i++) {
        const s = f1(n[i], t, r);
        if (s)
          return s;
      }
    return e;
  }
}
function $u(e, t, r = ws.DEFAULT) {
  const n = bu(e, !1), i = [];
  function s(R) {
    return R ? () => R(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : () => !0;
  }
  function o(R) {
    return R ? () => R(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), () => i.slice()) : () => !0;
  }
  function a(R) {
    return R ? (k) => R(k, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : () => !0;
  }
  function c(R) {
    return R ? (k) => R(k, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), () => i.slice()) : () => !0;
  }
  const l = o(t.onObjectBegin), u = c(t.onObjectProperty), f = s(t.onObjectEnd), p = o(t.onArrayBegin), h = s(t.onArrayEnd), d = c(t.onLiteralValue), m = a(t.onSeparator), y = s(t.onComment), v = a(t.onError), S = r && r.disallowComments, O = r && r.allowTrailingComma;
  function w() {
    for (; ; ) {
      const R = n.scan();
      switch (n.getTokenError()) {
        case 4:
          E(
            14
            /* ParseErrorCode.InvalidUnicode */
          );
          break;
        case 5:
          E(
            15
            /* ParseErrorCode.InvalidEscapeCharacter */
          );
          break;
        case 3:
          E(
            13
            /* ParseErrorCode.UnexpectedEndOfNumber */
          );
          break;
        case 1:
          S || E(
            11
            /* ParseErrorCode.UnexpectedEndOfComment */
          );
          break;
        case 2:
          E(
            12
            /* ParseErrorCode.UnexpectedEndOfString */
          );
          break;
        case 6:
          E(
            16
            /* ParseErrorCode.InvalidCharacter */
          );
          break;
      }
      switch (R) {
        case 12:
        case 13:
          S ? E(
            10
            /* ParseErrorCode.InvalidCommentToken */
          ) : y();
          break;
        case 16:
          E(
            1
            /* ParseErrorCode.InvalidSymbol */
          );
          break;
        case 15:
        case 14:
          break;
        default:
          return R;
      }
    }
  }
  function E(R, k = [], H = []) {
    if (v(R), k.length + H.length > 0) {
      let de = n.getToken();
      for (; de !== 17; ) {
        if (k.indexOf(de) !== -1) {
          w();
          break;
        } else if (H.indexOf(de) !== -1)
          break;
        de = w();
      }
    }
  }
  function j(R) {
    const k = n.getTokenValue();
    return R ? d(k) : (u(k), i.push(k)), w(), !0;
  }
  function P() {
    switch (n.getToken()) {
      case 11:
        const R = n.getTokenValue();
        let k = Number(R);
        isNaN(k) && (E(
          2
          /* ParseErrorCode.InvalidNumberFormat */
        ), k = 0), d(k);
        break;
      case 7:
        d(null);
        break;
      case 8:
        d(!0);
        break;
      case 9:
        d(!1);
        break;
      default:
        return !1;
    }
    return w(), !0;
  }
  function M() {
    return n.getToken() !== 10 ? (E(3, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), !1) : (j(!1), n.getToken() === 6 ? (m(":"), w(), T() || E(4, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ])) : E(5, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), i.pop(), !0);
  }
  function g() {
    l(), w();
    let R = !1;
    for (; n.getToken() !== 2 && n.getToken() !== 17; ) {
      if (n.getToken() === 5) {
        if (R || E(4, [], []), m(","), w(), n.getToken() === 2 && O)
          break;
      } else
        R && E(6, [], []);
      M() || E(4, [], [
        2,
        5
        /* SyntaxKind.CommaToken */
      ]), R = !0;
    }
    return f(), n.getToken() !== 2 ? E(7, [
      2
      /* SyntaxKind.CloseBraceToken */
    ], []) : w(), !0;
  }
  function A() {
    p(), w();
    let R = !0, k = !1;
    for (; n.getToken() !== 4 && n.getToken() !== 17; ) {
      if (n.getToken() === 5) {
        if (k || E(4, [], []), m(","), w(), n.getToken() === 4 && O)
          break;
      } else
        k && E(6, [], []);
      R ? (i.push(0), R = !1) : i[i.length - 1]++, T() || E(4, [], [
        4,
        5
        /* SyntaxKind.CommaToken */
      ]), k = !0;
    }
    return h(), R || i.pop(), n.getToken() !== 4 ? E(8, [
      4
      /* SyntaxKind.CloseBracketToken */
    ], []) : w(), !0;
  }
  function T() {
    switch (n.getToken()) {
      case 3:
        return A();
      case 1:
        return g();
      case 10:
        return j(!0);
      default:
        return P();
    }
  }
  return w(), n.getToken() === 17 ? r.allowEmptyContent ? !0 : (E(4, [], []), !1) : T() ? (n.getToken() !== 17 && E(9, [], []), !0) : (E(4, [], []), !1);
}
function Upe(e, t) {
  let r = bu(e), n = [], i, s = 0, o;
  do
    switch (o = r.getPosition(), i = r.scan(), i) {
      case 12:
      case 13:
      case 17:
        s !== o && n.push(e.substring(s, o)), t !== void 0 && n.push(r.getTokenValue().replace(/[^\r\n]/g, t)), s = r.getPosition();
        break;
    }
  while (i !== 17);
  return n.join("");
}
function p1(e) {
  switch (typeof e) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object": {
      if (e) {
        if (Array.isArray(e))
          return "array";
      } else
        return "null";
      return "object";
    }
    default:
      return "null";
  }
}
function qpe(e, t, r, n) {
  const i = t.slice(), o = l1(e, []);
  let a, c;
  for (; i.length > 0 && (c = i.pop(), a = Xp(o, i), a === void 0 && r !== void 0); )
    typeof c == "string" ? r = { [c]: r } : r = [r];
  if (a)
    if (a.type === "object" && typeof c == "string" && Array.isArray(a.children)) {
      const l = Xp(a, [c]);
      if (l !== void 0)
        if (r === void 0) {
          if (!l.parent)
            throw new Error("Malformed AST");
          const u = a.children.indexOf(l.parent);
          let f, p = l.parent.offset + l.parent.length;
          if (u > 0) {
            let h = a.children[u - 1];
            f = h.offset + h.length;
          } else
            f = a.offset + 1, a.children.length > 1 && (p = a.children[1].offset);
          return tn(e, { offset: f, length: p - f, content: "" }, n);
        } else
          return tn(e, { offset: l.offset, length: l.length, content: JSON.stringify(r) }, n);
      else {
        if (r === void 0)
          return [];
        const u = `${JSON.stringify(c)}: ${JSON.stringify(r)}`, f = n.getInsertionIndex ? n.getInsertionIndex(a.children.map((h) => h.children[0].value)) : a.children.length;
        let p;
        if (f > 0) {
          let h = a.children[f - 1];
          p = { offset: h.offset + h.length, length: 0, content: "," + u };
        } else
          a.children.length === 0 ? p = { offset: a.offset + 1, length: 0, content: u } : p = { offset: a.offset + 1, length: 0, content: u + "," };
        return tn(e, p, n);
      }
    } else if (a.type === "array" && typeof c == "number" && Array.isArray(a.children)) {
      const l = c;
      if (l === -1) {
        const u = `${JSON.stringify(r)}`;
        let f;
        if (a.children.length === 0)
          f = { offset: a.offset + 1, length: 0, content: u };
        else {
          const p = a.children[a.children.length - 1];
          f = { offset: p.offset + p.length, length: 0, content: "," + u };
        }
        return tn(e, f, n);
      } else if (r === void 0 && a.children.length >= 0) {
        const u = c, f = a.children[u];
        let p;
        if (a.children.length === 1)
          p = { offset: a.offset + 1, length: a.length - 2, content: "" };
        else if (a.children.length - 1 === u) {
          let h = a.children[u - 1], d = h.offset + h.length, m = a.offset + a.length;
          p = { offset: d, length: m - 2 - d, content: "" };
        } else
          p = { offset: f.offset, length: a.children[u + 1].offset - f.offset, content: "" };
        return tn(e, p, n);
      } else if (r !== void 0) {
        let u;
        const f = `${JSON.stringify(r)}`;
        if (!n.isArrayInsertion && a.children.length > c) {
          const p = a.children[c];
          u = { offset: p.offset, length: p.length, content: f };
        } else if (a.children.length === 0 || c === 0)
          u = { offset: a.offset + 1, length: 0, content: a.children.length === 0 ? f : f + "," };
        else {
          const p = c > a.children.length ? a.children.length : c, h = a.children[p - 1];
          u = { offset: h.offset + h.length, length: 0, content: "," + f };
        }
        return tn(e, u, n);
      } else
        throw new Error(`Can not ${r === void 0 ? "remove" : n.isArrayInsertion ? "insert" : "modify"} Array index ${l} as length is not sufficient`);
    } else
      throw new Error(`Can not add ${typeof c != "number" ? "index" : "property"} to parent of type ${a.type}`);
  else {
    if (r === void 0)
      throw new Error("Can not delete in empty document");
    return tn(e, { offset: o ? o.offset : 0, length: o ? o.length : 0, content: JSON.stringify(r) }, n);
  }
}
function tn(e, t, r) {
  if (!r.formattingOptions)
    return [t];
  let n = Zp(e, t), i = t.offset, s = t.offset + t.content.length;
  if (t.length === 0 || t.content.length === 0) {
    for (; i > 0 && !Wa(n, i - 1); )
      i--;
    for (; s < n.length && !Wa(n, s); )
      s++;
  }
  const o = c1(n, { offset: i, length: s - i }, { ...r.formattingOptions, keepLines: !1 });
  for (let c = o.length - 1; c >= 0; c--) {
    const l = o[c];
    n = Zp(n, l), i = Math.min(i, l.offset), s = Math.max(s, l.offset + l.length), s += l.content.length - l.length;
  }
  const a = e.length - (n.length - s) - i;
  return [{ offset: i, length: a, content: n.substring(i, s) }];
}
function Zp(e, t) {
  return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
}
const Hpe = bu;
var eh;
(function(e) {
  e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(eh || (eh = {}));
var th;
(function(e) {
  e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(th || (th = {}));
const Kpe = Dpe, Gpe = Lpe, Jpe = l1, Wpe = Xp, zpe = f1, Ype = u1, Xpe = Qp, Qpe = $u, Zpe = Upe;
var rh;
(function(e) {
  e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(rh || (rh = {}));
function ehe(e) {
  switch (e) {
    case 1:
      return "InvalidSymbol";
    case 2:
      return "InvalidNumberFormat";
    case 3:
      return "PropertyNameExpected";
    case 4:
      return "ValueExpected";
    case 5:
      return "ColonExpected";
    case 6:
      return "CommaExpected";
    case 7:
      return "CloseBraceExpected";
    case 8:
      return "CloseBracketExpected";
    case 9:
      return "EndOfFileExpected";
    case 10:
      return "InvalidCommentToken";
    case 11:
      return "UnexpectedEndOfComment";
    case 12:
      return "UnexpectedEndOfString";
    case 13:
      return "UnexpectedEndOfNumber";
    case 14:
      return "InvalidUnicode";
    case 15:
      return "InvalidEscapeCharacter";
    case 16:
      return "InvalidCharacter";
  }
  return "<unknown ParseErrorCode>";
}
function the(e, t, r) {
  return c1(e, t, r);
}
function rhe(e, t, r, n) {
  return qpe(e, t, r, n);
}
function nhe(e, t) {
  let r = t.slice(0).sort((i, s) => {
    const o = i.offset - s.offset;
    return o === 0 ? i.length - s.length : o;
  }), n = e.length;
  for (let i = r.length - 1; i >= 0; i--) {
    let s = r[i];
    if (s.offset + s.length <= n)
      e = Zp(e, s);
    else
      throw new Error("Overlapping edit");
    n = s.offset;
  }
  return e;
}
const ihe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ParseErrorCode() {
    return rh;
  },
  get ScanError() {
    return eh;
  },
  get SyntaxKind() {
    return th;
  },
  applyEdits: nhe,
  createScanner: Hpe,
  findNodeAtLocation: Wpe,
  findNodeAtOffset: zpe,
  format: the,
  getLocation: Kpe,
  getNodePath: Ype,
  getNodeValue: Xpe,
  modify: rhe,
  parse: Gpe,
  parseTree: Jpe,
  printParseErrorCode: ehe,
  stripComments: Zpe,
  visit: Qpe
}, Symbol.toStringTag, { value: "Module" })), h1 = /* @__PURE__ */ Zg(ihe);
Object.defineProperty(gu, "__esModule", { value: !0 });
gu.parseTree = void 0;
const she = h1;
var nh;
(function(e) {
  e.DEFAULT = {
    allowTrailingComma: !1
  };
})(nh || (nh = {}));
function ohe(e) {
  switch (typeof e) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object": {
      if (e) {
        if (Array.isArray(e))
          return "array";
      } else
        return "null";
      return "object";
    }
    default:
      return "null";
  }
}
function ahe(e) {
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    if (n.type === "property")
      for (let i = 0; i < e.length; i++) {
        const s = e[i];
        s.type === "property" && n.children[0].value === s.children[0].value && r !== i && t.push(e[r].children[0]);
      }
  }
  return t;
}
function che(e, t = [], r = nh.DEFAULT) {
  let n = {
    type: "array",
    offset: -1,
    length: -1,
    children: [],
    parent: void 0
  };
  function i(c) {
    n.type === "property" && (n.length = c - n.offset, n = n.parent);
  }
  function s(c) {
    return n.children.push(c), c;
  }
  const o = {
    onObjectBegin: (c) => {
      n = s({
        type: "object",
        offset: c,
        length: -1,
        parent: n,
        children: []
      });
    },
    onObjectProperty: (c, l, u) => {
      n = s({
        type: "property",
        offset: l,
        length: -1,
        parent: n,
        children: []
      }), n.children.push({
        type: "string",
        value: c,
        offset: l,
        length: u,
        parent: n
      });
    },
    onObjectEnd: (c, l) => {
      if (i(c + l), n.type === "object" && n.children && n.children.length > 1) {
        const u = ahe(n.children);
        for (const { offset: f, length: p } of u)
          t.push({
            error: 0,
            extendedError: 1,
            offset: f,
            length: p
          });
      }
      n.length = c + l - n.offset, n = n.parent, i(c + l);
    },
    onArrayBegin: (c, l) => {
      n = s({
        type: "array",
        offset: c,
        length: -1,
        parent: n,
        children: []
      });
    },
    onArrayEnd: (c, l) => {
      n.length = c + l - n.offset, n = n.parent, i(c + l);
    },
    onLiteralValue: (c, l, u) => {
      s({
        type: ohe(c),
        offset: l,
        length: u,
        parent: n,
        value: c,
        rawValue: e.substring(l, l + u)
      }), i(l + u);
    },
    onSeparator: (c, l, u) => {
      n.type === "property" && (c === ":" ? n.colonOffset = l : c === "," && i(l));
    },
    onError: (c, l, u) => {
      t.push({ error: c, offset: l, length: u });
    }
  };
  (0, she.visit)(e, o, r);
  const a = n.children[0];
  return a && delete a.parent, a;
}
gu.parseTree = che;
Object.defineProperty(mi, "__esModule", { value: !0 });
mi.parseYaml = mi.parseJson = void 0;
const lhe = pu, uhe = vu, kn = Oe, fhe = gu, phe = h1, hhe = Jd, dhe = Zr, mhe = Pe, zg = hu;
function yhe(e) {
  return e.extendedError ? e.extendedError === 1 ? "DuplicateKey" : "<unknown ExtendedErrorCode>" : phe.printParseErrorCode(e.error);
}
function vhe(e) {
  const t = [], r = (0, fhe.parseTree)(e, t, {
    disallowComments: !0,
    allowTrailingComma: !1,
    allowEmptyContent: !1
  }), n = t.map((i) => ({
    message: yhe(i),
    offset: i.offset,
    length: i.length
  }));
  return r ? [d1(uhe.visitJson, r), n] : [void 0, n];
}
mi.parseJson = vhe;
function ghe(e, t) {
  const r = [];
  if (hhe.loadAll(e, (i) => {
    r.push(i);
  }, { schema: bhe(t) }), r.length !== 1)
    return [void 0, []];
  const n = r[0].errors.map((i) => ({
    message: i.message,
    offset: i.mark ? i.mark.position : 0
  }));
  return r[0] ? [d1(lhe.visitYaml, r[0]), n] : [void 0, n];
}
mi.parseYaml = ghe;
function bhe(e) {
  if (!e)
    return zg;
  const t = Object.entries(e).map(([r, n]) => new mhe.Type(r, { kind: n }));
  return dhe.Schema.create(zg, t);
}
function d1(e, t) {
  var r;
  let n = {};
  const i = [n];
  if (e(null, "fakeroot", t, {
    onObjectStart: (o, a, c, l) => {
      l && (0, kn.setPreservedLocation)(n, a, l), i.push(n), n = n[a] = {};
    },
    onObjectEnd: () => {
      n = i.pop();
    },
    onArrayStart: (o, a, c, l) => {
      l && (0, kn.setPreservedLocation)(n, a, l), i.push(n), n = n[a] = [];
    },
    onArrayEnd: () => {
      n = i.pop();
    },
    onValue: (o, a, c, l, u) => {
      n[a] = c, typeof c == "number" && l !== void 0 && (0, kn.setPreservedValue)(n, a, l), u && (0, kn.setPreservedLocation)(n, a, u);
    }
  }), typeof i[0].fakeroot != "object")
    return;
  const s = (r = (0, kn.getPreservedLocation)(i[0], "fakeroot")) === null || r === void 0 ? void 0 : r.value;
  return (0, kn.setPreservedRootRange)(i[0].fakeroot, s), i[0].fakeroot;
}
var Ou = {};
Object.defineProperty(Ou, "__esModule", { value: !0 });
Ou.stringify = void 0;
const m1 = Po;
function $he(e, t = 0) {
  return t === 0 ? Ohe(e) : She(e, t);
}
Ou.stringify = $he;
function Ohe(e) {
  if (!e)
    return JSON.stringify(e);
  const t = [];
  return (0, m1.visitObject)(void 0, "fakeroot", e, {
    onObjectStart: (r, n, i) => {
      t.push(Rr(n, "{"));
    },
    onObjectEnd: () => {
      t[t.length - 1].endsWith(",") && _r(t, 1), t.push("},");
    },
    onArrayStart: (r, n, i) => {
      t.push(Rr(n, "["));
    },
    onArrayEnd: () => {
      t[t.length - 1].endsWith(",") && _r(t, 1), t.push("],");
    },
    onValue: (r, n, i, s) => {
      s !== void 0 ? t.push(Rr(n, s) + ",") : t.push(Rr(n, JSON.stringify(i)) + ",");
    }
  }), t[0] = t[0].slice(11), _r(t, 1), t.join("");
}
function She(e, t) {
  if (!e)
    return JSON.stringify(e);
  const r = [];
  let n = 0;
  const i = [!0];
  return (0, m1.visitObject)(void 0, "fakeroot", e, {
    onObjectStart: (s, o, a) => {
      r.push(Nn(t, n) + Rr(o, `{
`, !1)), i[i.length - 1] = !1, i.push(!0), n++;
    },
    onObjectEnd: () => {
      n--, i.pop() ? (_r(r, 1), r.push(`},
`)) : (_r(r, 2), r.push(`
` + Nn(t, n) + `},
`));
    },
    onArrayStart: (s, o, a) => {
      r.push(Nn(t, n) + Rr(o, `[
`, !1)), i[i.length - 1] = !1, i.push(!0), n++;
    },
    onArrayEnd: () => {
      n--, i.pop() ? (_r(r, 1), r.push(`],
`)) : (_r(r, 2), r.push(`
` + Nn(t, n) + `],
`));
    },
    onValue: (s, o, a, c) => {
      i[i.length - 1] = !1, c !== void 0 ? r.push(Nn(t, n) + Rr(o, c, !1) + `,
`) : r.push(Nn(t, n) + Rr(o, JSON.stringify(a), !1) + `,
`);
    }
  }), r[0] = r[0].slice(12), _r(r, 2), r.join("");
}
function _r(e, t) {
  const r = e.length - 1;
  e[r] = e[r].slice(0, -t);
}
function Rr(e, t, r = !0) {
  const n = r ? ":" : ": ";
  return typeof e == "string" ? JSON.stringify(e) + n + t : t;
}
function Nn(e, t) {
  return " ".repeat(e * t);
}
var Nr = {}, Vt = {};
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.find = Vt.findByPath = Vt.parseJsonPointer = Vt.joinJsonPointer = void 0;
const whe = /\//g, Ehe = /~/g;
function xhe(e) {
  return typeof e == "number" ? String(e) : e.replace(Ehe, "~0").replace(whe, "~1");
}
function Phe(e) {
  return e.length == 0 ? "" : "/" + e.map((t) => xhe(t)).join("/");
}
Vt.joinJsonPointer = Phe;
function y1(e) {
  const t = /~/, r = /~[01]/g;
  function n(s) {
    switch (s) {
      case "~1":
        return "/";
      case "~0":
        return "~";
    }
    throw new Error("Invalid tilde escape: " + s);
  }
  function i(s) {
    return t.test(s) ? s.replace(r, n) : s;
  }
  return e.split("/").slice(1).map(i).map(decodeURIComponent);
}
Vt.parseJsonPointer = y1;
function v1(e, t) {
  let r = e;
  for (const n of t)
    if (typeof r == "object" && r !== null)
      if (Array.isArray(r)) {
        const i = typeof n == "string" ? parseInt(n, 10) : n;
        if (isNaN(i))
          return;
        r = r[i];
      } else if (r.hasOwnProperty(n))
        r = r[n];
      else
        return;
    else
      return;
  return r;
}
Vt.findByPath = v1;
function Ahe(e, t) {
  return v1(e, y1(t));
}
Vt.find = Ahe;
Object.defineProperty(Nr, "__esModule", { value: !0 });
Nr.findLocationForJsonPointer = Nr.findLocationForPath = Nr.findNodeAtOffset = void 0;
const za = Oe, jhe = Vt;
function The(e, t) {
  return t >= e.start && t <= e.end;
}
function _he(e, t) {
  const r = { value: (0, za.getPreservedRootRange)(e) };
  return g1(e, t, [], r);
}
Nr.findNodeAtOffset = _he;
function g1(e, t, r, n) {
  const i = Array.isArray(e) ? e.keys() : Object.keys(e);
  for (const s of i) {
    const o = (0, za.getPreservedLocation)(e, s);
    if (o && The(o.value, t)) {
      const a = e[s];
      return r.push(s), a !== null && typeof a == "object" ? g1(a, t, r, o) : [a, r, o];
    }
  }
  return [e, r, n];
}
function b1(e, t) {
  if (t.length === 0)
    return { value: (0, za.getPreservedRootRange)(e) };
  let r = e, n = 0;
  for (; n < t.length - 1 && r; )
    r = r[t[n]], n++;
  if (r)
    return (0, za.getPreservedLocation)(r, t[n]);
}
Nr.findLocationForPath = b1;
function Ihe(e, t) {
  return b1(e, (0, jhe.parseJsonPointer)(t));
}
Nr.findLocationForJsonPointer = Ihe;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.parseJsonPointer = e.joinJsonPointer = e.findLocationForPath = e.findByPath = e.findLocationForJsonPointer = e.find = e.findNodeAtOffset = e.getRootRange = e.getLocation = e.simpleClone = e.stringify = e.parseYaml = e.parseJson = e.parse = void 0;
  const t = fu;
  Object.defineProperty(e, "simpleClone", { enumerable: !0, get: function() {
    return t.simpleClone;
  } });
  const r = mi;
  Object.defineProperty(e, "parseJson", { enumerable: !0, get: function() {
    return r.parseJson;
  } }), Object.defineProperty(e, "parseYaml", { enumerable: !0, get: function() {
    return r.parseYaml;
  } });
  const n = Ou;
  Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return n.stringify;
  } });
  const i = Oe;
  Object.defineProperty(e, "getLocation", { enumerable: !0, get: function() {
    return i.getPreservedLocation;
  } }), Object.defineProperty(e, "getRootRange", { enumerable: !0, get: function() {
    return i.getPreservedRootRange;
  } });
  const s = Nr;
  Object.defineProperty(e, "findLocationForJsonPointer", { enumerable: !0, get: function() {
    return s.findLocationForJsonPointer;
  } }), Object.defineProperty(e, "findLocationForPath", { enumerable: !0, get: function() {
    return s.findLocationForPath;
  } }), Object.defineProperty(e, "findNodeAtOffset", { enumerable: !0, get: function() {
    return s.findNodeAtOffset;
  } });
  const o = Vt;
  Object.defineProperty(e, "find", { enumerable: !0, get: function() {
    return o.find;
  } }), Object.defineProperty(e, "joinJsonPointer", { enumerable: !0, get: function() {
    return o.joinJsonPointer;
  } }), Object.defineProperty(e, "parseJsonPointer", { enumerable: !0, get: function() {
    return o.parseJsonPointer;
  } }), Object.defineProperty(e, "findByPath", { enumerable: !0, get: function() {
    return o.findByPath;
  } });
  function a(c, l, u) {
    var f;
    return l === "yaml" ? (0, r.parseYaml)(c, (f = u == null ? void 0 : u.yaml) === null || f === void 0 ? void 0 : f.customTags) : (0, r.parseJson)(c);
  }
  e.parse = a;
})(kw);
const Rhe = /{{([\w.]+)}}/g, Yg = "secrets.";
function ih(e, t) {
  return e.replace(Rhe, (r, n) => {
    if (n.startsWith(Yg)) {
      const i = n.substring(Yg.length, n.length);
      return t.secrets.hasOwnProperty(i) ? t.secrets[i] : r;
    }
    return t.default.hasOwnProperty(n) ? t.default[n] : r;
  });
}
async function Fhe(e, t, r, n, i, s) {
  var f, p, h;
  const o = `${r}-${n}`, a = F1(t) ? ee.buildRequest({
    spec: await Vhe(t, n, r, i),
    operationId: o,
    parameters: Nhe(i.parameters),
    securities: Lhe(
      ((f = t == null ? void 0 : t.components) == null ? void 0 : f.securitySchemes) || {},
      i.security,
      i.securityIndex,
      s
    ),
    requestContentType: (p = i.body) == null ? void 0 : p.mediaType,
    requestBody: O1((h = i.body) == null ? void 0 : h.value, s)
  }) : ee.buildRequest({
    spec: await Che(t),
    operationId: o,
    parameters: Dhe(t, n, r, i, s),
    securities: Bhe(
      (t == null ? void 0 : t.securityDefinitions) || {},
      i.security,
      i.securityIndex,
      s
    )
  }), [c, l] = ib(a.url), u = c && !e.insecureSslHostnames.includes(l);
  return {
    method: r,
    url: a.url,
    headers: a.headers,
    body: Mhe(a.body),
    config: {
      https: {
        rejectUnauthorized: u
      }
    }
  };
}
async function Vhe(e, t, r, n, i) {
  const s = khe(e.servers || [{ url: "http://localhost/" }], n.server), { spec: o, errors: a } = await ee.resolve({
    spec: JSON.parse(JSON.stringify({ ...e, servers: s }))
  });
  return o;
}
async function Che(e, t, r, n, i) {
  const s = e.host || "localhost", { spec: o, errors: a } = await ee.resolve({
    spec: JSON.parse(JSON.stringify({ ...e, host: s }))
  });
  return o;
}
function Mhe(e) {
  return typeof e == "string" ? e : e instanceof FormData ? Array.from(e.entries()) : JSON.stringify(e);
}
function khe(e, t) {
  return e.filter((r) => r.url === t);
}
function Nhe(e) {
  const t = ["query", "header", "path", "cookie"], r = {};
  for (const n of t)
    for (const [i, s] of Object.entries(e[n] ?? {}))
      r[`${n}.${i}`] = s;
  return r;
}
function Dhe(e, t, r, n, i) {
  var l;
  const s = ["query", "header", "path"], o = {};
  for (const u of s)
    for (const [f, p] of Object.entries(n.parameters[u] ?? {}))
      o[`${u}.${f}`] = p;
  const a = V1(e, t, r), c = Object.keys(a.body);
  if (c.length > 0) {
    const u = c[0];
    o[`body.${u}`] = O1((l = n.body) == null ? void 0 : l.value, i);
  }
  return o;
}
function Lhe(e, t, r, n) {
  const i = t[r];
  if (!i)
    return;
  const s = {};
  for (const o of Object.keys(i)) {
    const a = e[o], c = $1(i[o], n);
    (a == null ? void 0 : a.type) === "oauth2" || (a == null ? void 0 : a.type) === "openIdConnect" ? s[o] = { token: { access_token: c } } : s[o] = c;
  }
  return { authorized: s };
}
function Bhe(e, t, r, n) {
  const i = t[r];
  if (!i)
    return;
  const s = {};
  for (const o of Object.keys(i)) {
    const a = e[o], c = $1(i[o], n);
    (a == null ? void 0 : a.type) === "oauth" ? s[o] = { token: { access_token: c } } : s[o] = c;
  }
  return { authorized: s };
}
function $1(e, t) {
  return typeof e == "string" ? ih(e, t) : e;
}
function O1(e, t) {
  return typeof e == "string" ? ih(e, t) : typeof e == "object" ? kw.simpleClone(e, (r) => typeof r == "string" ? ih(r, t) : r) : e;
}
function Uhe({ config: e }) {
  const t = aE(), { control: r } = nE(), n = iE({
    control: r,
    name: "server"
  }), [i, s] = ib(n), o = e.insecureSslHostnames.includes(s);
  return /* @__PURE__ */ z.jsxs(Khe, { children: [
    /* @__PURE__ */ z.jsx("h4", { children: "SSL Settings" }),
    i && /* @__PURE__ */ z.jsxs(Xg, { children: [
      /* @__PURE__ */ z.jsx(
        qhe,
        {
          checked: o,
          onCheckedChange: (a) => {
            t(a ? Z1(s) : eE(s));
          },
          children: /* @__PURE__ */ z.jsx(Hhe, { children: /* @__PURE__ */ z.jsx(tE, {}) })
        }
      ),
      'Ignore SSL errors for "',
      s,
      '"'
    ] }),
    !i && /* @__PURE__ */ z.jsx(Xg, { children: "SSL Settings are not available" })
  ] });
}
const qhe = xt(X1)`
  margin-right: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${bt.checkboxBackground});
  border-radius: 4px;
  border-color: var(${bt.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, Hhe = xt(Q1)`
  fill: var(${bt.checkboxForeground});
`, Khe = xt.div`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`, Xg = xt.div`
  display: flex;
`;
function Ghe({ response: e }) {
  const t = sb(), r = zhe(e);
  return /* @__PURE__ */ z.jsx(z.Fragment, { children: /* @__PURE__ */ z.jsxs(Jhe, { children: [
    /* @__PURE__ */ z.jsx("h4", { children: "Modify OpenAPI file based on the response contents" }),
    /* @__PURE__ */ z.jsxs(Whe, { "aria-disabled": !r, children: [
      "Use response contents to generate JSON Schema",
      " ",
      /* @__PURE__ */ z.jsx(
        Yhe,
        {
          disabled: !r,
          onClick: (n) => {
            n.preventDefault(), n.stopPropagation(), t(tb({ response: JSON.parse(e.body) }));
          },
          children: "Generate schema"
        }
      )
    ] })
  ] }) });
}
const Jhe = xt.div`
  padding: 8px;
`, Whe = xt.div.attrs((e) => ({
  color: e["aria-disabled"] ? `var(${bt.disabledForeground})` : "inherit"
}))`
  color: ${(e) => e.color};
`;
function zhe(e) {
  for (const [t, r] of e.headers)
    if (t.toLowerCase() === "content-type" && r.includes("json") && e.body !== "")
      return !0;
  return !1;
}
const Yhe = xt.button`
  cursor: pointer;
  background-color: var(${bt.buttonBackground});
  color: var(${bt.buttonForeground});
  border: none;
  padding: 0.25rem 0.5rem;
  font-size: small;
`;
function Xhe() {
  const e = Fr((t) => t.tryit.response);
  return /* @__PURE__ */ z.jsx(Qhe, { children: /* @__PURE__ */ z.jsx(C1, { title: "Response", response: e, tools: /* @__PURE__ */ z.jsx(Ghe, { response: e }) }) });
}
const Qhe = xt.div`
  margin: 8px;
  padding: 4px;
`;
function Zhe() {
  const e = Fr((t) => t.tryit.error);
  return e ? /* @__PURE__ */ z.jsxs(tde, { children: [
    /* @__PURE__ */ z.jsx(ede, { children: e.message }),
    e.sslError && /* @__PURE__ */ z.jsx("div", { children: "Failed to establish secure connection. Try disabling SSL validation in Settings" })
  ] }) : null;
}
const ede = xt.div`
  border: 1px solid var(${bt.errorBorder});
  color: var(${bt.errorForeground});
  background-color: var(${bt.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
`, tde = xt.div`
  padding: 8px;
`;
function rde() {
  const e = Fr((t) => t.tryit.gerror);
  return e ? /* @__PURE__ */ z.jsx(ide, { children: /* @__PURE__ */ z.jsx(nde, { children: e.message }) }) : null;
}
const nde = xt.div`
  border: 1px solid var(${bt.errorBorder});
  color: var(${bt.errorForeground});
  background-color: var(${bt.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
`, ide = xt.div`
  padding: 8px;
`;
function sde() {
  const { path: e, method: t, oas: r, defaultValues: n } = Fr((c) => c.tryit), i = Fr((c) => c.prefs), s = cde(r, i.tryitServer, n.server), o = {
    ...n,
    server: s,
    security: ade(n.security, i.security)
  }, a = M1(o);
  return /* @__PURE__ */ z.jsx(ode, { oas: r, method: t, path: e, values: a });
}
function ode({
  oas: e,
  method: t,
  path: r,
  values: n
}) {
  const i = sb(), s = Fr((y) => y.env.data), { response: o, waiting: a } = Fr((y) => y.tryit), c = Fr((y) => y.config.data), [l, u] = im.useState(!1);
  im.useEffect(() => {
    u(o !== void 0);
  }, [o]);
  const f = async (y) => {
    const v = L1(y);
    try {
      const S = await Fhe(c, e, t, r, v, s), O = v.security[v.securityIndex];
      if (O)
        for (const [w, E] of Object.entries(O))
          typeof E == "string" && E.startsWith("{{") && E.endsWith("}}") && i(nb({ scheme: w, secret: E }));
      i(rb(v.server)), i(eb({ defaultValues: v, request: S }));
    } catch (S) {
      i(
        B1({
          message: `Failed to build HTTP Request: ${S}`
        })
      );
    }
  }, p = sE({
    reValidateMode: "onChange",
    values: n
  }), { handleSubmit: h, formState: d } = p, m = Object.keys(d.errors || {}).length > 0;
  return /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    /* @__PURE__ */ z.jsxs(oE, { ...p, children: [
      /* @__PURE__ */ z.jsx(
        k1,
        {
          method: t,
          path: r,
          servers: ob(e),
          onSubmit: h(f),
          buttonText: "Send",
          waiting: a,
          submitDisabled: m
        }
      ),
      /* @__PURE__ */ z.jsx(
        N1,
        {
          collapsed: l,
          title: "Request",
          onExpand: () => u(!1),
          children: /* @__PURE__ */ z.jsx(
            D1,
            {
              oas: e,
              settings: /* @__PURE__ */ z.jsx(Uhe, { config: c }),
              path: r,
              method: t
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ z.jsx(Zhe, {}),
    /* @__PURE__ */ z.jsx(rde, {}),
    o && /* @__PURE__ */ z.jsx(Xhe, {})
  ] });
}
function ade(e, t) {
  const r = [];
  for (const n of e) {
    const i = {};
    for (const [s, o] of Object.entries(n))
      t[s] && typeof o == "string" ? i[s] = t[s] : i[s] = o;
    r.push(i);
  }
  return r;
}
function cde(e, t, r) {
  const i = ob(e).some((s) => s === t);
  return t !== void 0 && t !== "" && i ? t : r;
}
const Qg = [
  {
    id: "tryit",
    title: "Try It",
    element: /* @__PURE__ */ z.jsx(sde, {}),
    when: ab
  }
], lde = {
  changeTheme: _1,
  tryOperation: ab,
  showHttpResponse: K1,
  showHttpError: G1,
  loadEnv: z1,
  loadPrefs: J1,
  loadConfig: rE
};
function ude() {
  return /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    /* @__PURE__ */ z.jsx(T1, {}),
    /* @__PURE__ */ z.jsx(H1, {})
  ] });
}
function fde(e, t) {
  const r = U1(cE(e, Qg), t);
  x1(document.getElementById("root")).render(
    /* @__PURE__ */ z.jsx(P1.StrictMode, { children: /* @__PURE__ */ z.jsx(A1, { store: r, children: /* @__PURE__ */ z.jsx(q1.Provider, { value: Qg, children: /* @__PURE__ */ z.jsx(ude, {}) }) }) })
  ), window.addEventListener("message", j1(r, lde));
}
window.renderWebView = fde;
