import { b as Yw, s as Xw, i as Qw, h as Jt, k as xt, n as Vb, r as Te, T as gt, d as Dr, j as ae, F as Nh, e as Zw, R as ex, P as tx, m as rx, f as nx, g as ix } from "./ThemeStyles.913963d7.js";
import { s as sx, J as Cb, K as Mb, L as Ff, M as kb, e as Nb, z as ox, i as ax, N as Db, P as cx, h as lx, l as ux, u as fx, $ as Lb, x as Dm, k as px, Q as hx, S as dx, T as Bb, U as Qn, R as mx, A as yx, C as vx, D as Ub, B as gx, E as bx, F as $x, V as Ox, W as Sx, G as wx, X as qb, H as xx, Y as Ex, Z as Px, I as Ax } from "./Response.cd82ec9f.js";
import { s as jx, c as Tx, d as _x, u as Ix, F as Rx, l as Fx } from "./TrashCan.1f959ccc.js";
import { _ as Dh, s as Et } from "./styled-components.browser.esm.f0e51c1d.js";
import { u as Vx } from "./useDispatch.091a853c.js";
import "./index.17036a89.js";
const Hb = Yw(), In = Hb.startListening;
function Cx(e, t) {
  const r = {
    sendHttpRequest: () => In({
      actionCreator: Cb,
      effect: async (n, i) => {
        e.postMessage({ command: "sendHttpRequest", payload: n.payload.request });
      }
    }),
    createSchema: () => In({
      actionCreator: Mb,
      effect: async (n, i) => {
        e.postMessage({ command: "createSchema", payload: n.payload.response });
      }
    }),
    saveConfig: () => In({
      actionCreator: Ff,
      effect: async (n, i) => {
        const s = i.getState();
        e.postMessage({ command: "saveConfig", payload: s.tryit.tryitConfig });
      }
    }),
    savePrefs: () => In({
      matcher: Qw(kb, Nb),
      effect: async (n, i) => {
        const { prefs: s } = i.getState();
        e.postMessage({
          command: "savePrefs",
          payload: s
        });
      }
    }),
    showEnvWindow: () => In({
      actionCreator: jx,
      effect: async (n, i) => {
        e.postMessage({ command: "showEnvWindow", payload: void 0 });
      }
    })
  };
  return sx(In, t), Xw(r), Hb;
}
var Vf = {}, Mx = {
  get exports() {
    return Vf;
  },
  set exports(e) {
    Vf = e;
  }
}, Cf = {}, kx = {
  get exports() {
    return Cf;
  },
  set exports(e) {
    Cf = e;
  }
}, Co = function(e) {
  return e && e.Math == Math && e;
}, Pt = (
  // eslint-disable-next-line es/no-global-this -- safe
  Co(typeof globalThis == "object" && globalThis) || Co(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  Co(typeof self == "object" && self) || Co(typeof Jt == "object" && Jt) || // eslint-disable-next-line no-new-func -- fallback
  function() {
    return this;
  }() || Function("return this")()
), Ie = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, Nx = Ie, Za = !Nx(function() {
  var e = function() {
  }.bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
}), Dx = Za, Kb = Function.prototype, Lm = Kb.apply, Bm = Kb.call, Gb = typeof Reflect == "object" && Reflect.apply || (Dx ? Bm.bind(Lm) : function() {
  return Bm.apply(Lm, arguments);
}), Jb = Za, Wb = Function.prototype, Mf = Wb.call, Lx = Jb && Wb.bind.bind(Mf, Mf), Re = Jb ? Lx : function(e) {
  return function() {
    return Mf.apply(e, arguments);
  };
}, zb = Re, Bx = zb({}.toString), Ux = zb("".slice), Si = function(e) {
  return Ux(Bx(e), 8, -1);
}, qx = Si, Hx = Re, Lh = function(e) {
  if (qx(e) === "Function")
    return Hx(e);
}, kf = typeof document == "object" && document.all, Kx = typeof kf > "u" && kf !== void 0, Yb = {
  all: kf,
  IS_HTMLDDA: Kx
}, Xb = Yb, Gx = Xb.all, ze = Xb.IS_HTMLDDA ? function(e) {
  return typeof e == "function" || e === Gx;
} : function(e) {
  return typeof e == "function";
}, Ts = {}, Jx = Ie, At = !Jx(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
}), Wx = Za, Mo = Function.prototype.call, Pn = Wx ? Mo.bind(Mo) : function() {
  return Mo.apply(Mo, arguments);
}, Bh = {}, Qb = {}.propertyIsEnumerable, Zb = Object.getOwnPropertyDescriptor, zx = Zb && !Qb.call({ 1: 2 }, 1);
Bh.f = zx ? function(t) {
  var r = Zb(this, t);
  return !!r && r.enumerable;
} : Qb;
var _s = function(e, t) {
  return {
    enumerable: !(e & 1),
    configurable: !(e & 2),
    writable: !(e & 4),
    value: t
  };
}, Yx = Re, Xx = Ie, Qx = Si, Pu = Object, Zx = Yx("".split), e$ = Xx(function() {
  return !Pu("z").propertyIsEnumerable(0);
}) ? function(e) {
  return Qx(e) == "String" ? Zx(e, "") : Pu(e);
} : Pu, t$ = function(e) {
  return e == null;
}, eE = t$, tE = TypeError, Uh = function(e) {
  if (eE(e))
    throw tE("Can't call method on " + e);
  return e;
}, rE = e$, nE = Uh, mr = function(e) {
  return rE(nE(e));
}, Um = ze, r$ = Yb, iE = r$.all, Kr = r$.IS_HTMLDDA ? function(e) {
  return typeof e == "object" ? e !== null : Um(e) || e === iE;
} : function(e) {
  return typeof e == "object" ? e !== null : Um(e);
}, Nt = {}, Au = Nt, ju = Pt, sE = ze, qm = function(e) {
  return sE(e) ? e : void 0;
}, Zt = function(e, t) {
  return arguments.length < 2 ? qm(Au[e]) || qm(ju[e]) : Au[e] && Au[e][t] || ju[e] && ju[e][t];
}, oE = Re, Is = oE({}.isPrototypeOf), aE = typeof navigator < "u" && String(navigator.userAgent) || "", n$ = Pt, Tu = aE, Hm = n$.process, Km = n$.Deno, Gm = Hm && Hm.versions || Km && Km.version, Jm = Gm && Gm.v8, Rt, da;
Jm && (Rt = Jm.split("."), da = Rt[0] > 0 && Rt[0] < 4 ? 1 : +(Rt[0] + Rt[1]));
!da && Tu && (Rt = Tu.match(/Edge\/(\d+)/), (!Rt || Rt[1] >= 74) && (Rt = Tu.match(/Chrome\/(\d+)/), Rt && (da = +Rt[1])));
var qh = da, Wm = qh, cE = Ie, wi = !!Object.getOwnPropertySymbols && !cE(function() {
  var e = Symbol();
  return !String(e) || !(Object(e) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Wm && Wm < 41;
}), lE = wi, i$ = lE && !Symbol.sham && typeof Symbol.iterator == "symbol", uE = Zt, fE = ze, pE = Is, hE = i$, dE = Object, Rs = hE ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  var t = uE("Symbol");
  return fE(t) && pE(t.prototype, dE(e));
}, mE = String, s$ = function(e) {
  try {
    return mE(e);
  } catch {
    return "Object";
  }
}, yE = ze, vE = s$, gE = TypeError, o$ = function(e) {
  if (yE(e))
    return e;
  throw gE(vE(e) + " is not a function");
}, bE = o$, $E = t$, OE = function(e, t) {
  var r = e[t];
  return $E(r) ? void 0 : bE(r);
}, _u = Pn, Iu = ze, Ru = Kr, SE = TypeError, wE = function(e, t) {
  var r, n;
  if (t === "string" && Iu(r = e.toString) && !Ru(n = _u(r, e)) || Iu(r = e.valueOf) && !Ru(n = _u(r, e)) || t !== "string" && Iu(r = e.toString) && !Ru(n = _u(r, e)))
    return n;
  throw SE("Can't convert object to primitive value");
}, Lr = {}, xE = {
  get exports() {
    return Lr;
  },
  set exports(e) {
    Lr = e;
  }
}, zm = Pt, EE = Object.defineProperty, PE = function(e, t) {
  try {
    EE(zm, e, { value: t, configurable: !0, writable: !0 });
  } catch {
    zm[e] = t;
  }
  return t;
}, AE = Pt, jE = PE, Ym = "__core-js_shared__", TE = AE[Ym] || jE(Ym, {}), Hh = TE, Xm = Hh;
(xE.exports = function(e, t) {
  return Xm[e] || (Xm[e] = t !== void 0 ? t : {});
})("versions", []).push({
  version: "3.29.1",
  mode: "pure",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var _E = Uh, IE = Object, xi = function(e) {
  return IE(_E(e));
}, RE = Re, FE = xi, VE = RE({}.hasOwnProperty), pt = Object.hasOwn || function(t, r) {
  return VE(FE(t), r);
}, CE = Re, ME = 0, kE = Math.random(), NE = CE(1 .toString), Kh = function(e) {
  return "Symbol(" + (e === void 0 ? "" : e) + ")_" + NE(++ME + kE, 36);
}, DE = Pt, LE = Lr, Qm = pt, BE = Kh, UE = wi, qE = i$, Hn = DE.Symbol, Fu = LE("wks"), HE = qE ? Hn.for || Hn : Hn && Hn.withoutSetter || BE, rt = function(e) {
  return Qm(Fu, e) || (Fu[e] = UE && Qm(Hn, e) ? Hn[e] : HE("Symbol." + e)), Fu[e];
}, KE = Pn, Zm = Kr, ey = Rs, GE = OE, JE = wE, WE = rt, zE = TypeError, YE = WE("toPrimitive"), XE = function(e, t) {
  if (!Zm(e) || ey(e))
    return e;
  var r = GE(e, YE), n;
  if (r) {
    if (t === void 0 && (t = "default"), n = KE(r, e, t), !Zm(n) || ey(n))
      return n;
    throw zE("Can't convert object to primitive value");
  }
  return t === void 0 && (t = "number"), JE(e, t);
}, QE = XE, ZE = Rs, ec = function(e) {
  var t = QE(e, "string");
  return ZE(t) ? t : t + "";
}, eP = Pt, ty = Kr, Nf = eP.document, tP = ty(Nf) && ty(Nf.createElement), a$ = function(e) {
  return tP ? Nf.createElement(e) : {};
}, rP = At, nP = Ie, iP = a$, c$ = !rP && !nP(function() {
  return Object.defineProperty(iP("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
}), sP = At, oP = Pn, aP = Bh, cP = _s, lP = mr, uP = ec, fP = pt, pP = c$, ry = Object.getOwnPropertyDescriptor;
Ts.f = sP ? ry : function(t, r) {
  if (t = lP(t), r = uP(r), pP)
    try {
      return ry(t, r);
    } catch {
    }
  if (fP(t, r))
    return cP(!oP(aP.f, t, r), t[r]);
};
var hP = Ie, dP = ze, mP = /#|\.prototype\./, Fs = function(e, t) {
  var r = vP[yP(e)];
  return r == bP ? !0 : r == gP ? !1 : dP(t) ? hP(t) : !!t;
}, yP = Fs.normalize = function(e) {
  return String(e).replace(mP, ".").toLowerCase();
}, vP = Fs.data = {}, gP = Fs.NATIVE = "N", bP = Fs.POLYFILL = "P", $P = Fs, ny = Lh, OP = o$, SP = Za, wP = ny(ny.bind), l$ = function(e, t) {
  return OP(e), t === void 0 ? e : SP ? wP(e, t) : function() {
    return e.apply(t, arguments);
  };
}, er = {}, xP = At, EP = Ie, u$ = xP && EP(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype != 42;
}), PP = Kr, AP = String, jP = TypeError, Vs = function(e) {
  if (PP(e))
    return e;
  throw jP(AP(e) + " is not an object");
}, TP = At, _P = c$, IP = u$, ko = Vs, iy = ec, RP = TypeError, Vu = Object.defineProperty, FP = Object.getOwnPropertyDescriptor, Cu = "enumerable", Mu = "configurable", ku = "writable";
er.f = TP ? IP ? function(t, r, n) {
  if (ko(t), r = iy(r), ko(n), typeof t == "function" && r === "prototype" && "value" in n && ku in n && !n[ku]) {
    var i = FP(t, r);
    i && i[ku] && (t[r] = n.value, n = {
      configurable: Mu in n ? n[Mu] : i[Mu],
      enumerable: Cu in n ? n[Cu] : i[Cu],
      writable: !1
    });
  }
  return Vu(t, r, n);
} : Vu : function(t, r, n) {
  if (ko(t), r = iy(r), ko(n), _P)
    try {
      return Vu(t, r, n);
    } catch {
    }
  if ("get" in n || "set" in n)
    throw RP("Accessors not supported");
  return "value" in n && (t[r] = n.value), t;
};
var VP = At, CP = er, MP = _s, Cs = VP ? function(e, t, r) {
  return CP.f(e, t, MP(1, r));
} : function(e, t, r) {
  return e[t] = r, e;
}, No = Pt, kP = Gb, NP = Lh, DP = ze, LP = Ts.f, BP = $P, Rn = Nt, UP = l$, Fn = Cs, sy = pt, qP = function(e) {
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
    return kP(e, this, arguments);
  };
  return t.prototype = e.prototype, t;
}, Ne = function(e, t) {
  var r = e.target, n = e.global, i = e.stat, s = e.proto, o = n ? No : i ? No[r] : (No[r] || {}).prototype, a = n ? Rn : Rn[r] || Fn(Rn, r, {})[r], c = a.prototype, l, u, f, p, h, d, m, y, g;
  for (p in t)
    l = BP(n ? p : r + (i ? "." : "#") + p, e.forced), u = !l && o && sy(o, p), d = a[p], u && (e.dontCallGetSet ? (g = LP(o, p), m = g && g.value) : m = o[p]), h = u && m ? m : t[p], !(u && typeof d == typeof h) && (e.bind && u ? y = UP(h, No) : e.wrap && u ? y = qP(h) : s && DP(h) ? y = NP(h) : y = h, (e.sham || h && h.sham || d && d.sham) && Fn(y, "sham", !0), Fn(a, p, y), s && (f = r + "Prototype", sy(Rn, f) || Fn(Rn, f, {}), Fn(Rn[f], p, h), e.real && c && (l || !c[p]) && Fn(c, p, h)));
}, HP = Math.ceil, KP = Math.floor, GP = Math.trunc || function(t) {
  var r = +t;
  return (r > 0 ? KP : HP)(r);
}, JP = GP, Gh = function(e) {
  var t = +e;
  return t !== t || t === 0 ? 0 : JP(t);
}, WP = Gh, zP = Math.max, YP = Math.min, f$ = function(e, t) {
  var r = WP(e);
  return r < 0 ? zP(r + t, 0) : YP(r, t);
}, XP = Gh, QP = Math.min, ZP = function(e) {
  return e > 0 ? QP(XP(e), 9007199254740991) : 0;
}, eA = ZP, tc = function(e) {
  return eA(e.length);
}, tA = mr, rA = f$, nA = tc, oy = function(e) {
  return function(t, r, n) {
    var i = tA(t), s = nA(i), o = rA(n, s), a;
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
}, p$ = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: oy(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: oy(!1)
}, rc = {}, iA = Re, Nu = pt, sA = mr, oA = p$.indexOf, aA = rc, ay = iA([].push), h$ = function(e, t) {
  var r = sA(e), n = 0, i = [], s;
  for (s in r)
    !Nu(aA, s) && Nu(r, s) && ay(i, s);
  for (; t.length > n; )
    Nu(r, s = t[n++]) && (~oA(i, s) || ay(i, s));
  return i;
}, Jh = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], cA = h$, lA = Jh, Wh = Object.keys || function(t) {
  return cA(t, lA);
}, uA = Ne, fA = xi, d$ = Wh, pA = Ie, hA = pA(function() {
  d$(1);
});
uA({ target: "Object", stat: !0, forced: hA }, {
  keys: function(t) {
    return d$(fA(t));
  }
});
var dA = Nt, mA = dA.Object.keys, yA = mA, vA = yA, gA = vA, bA = gA, $A = bA, OA = $A;
(function(e) {
  e.exports = OA;
})(kx);
(function(e) {
  e.exports = Cf;
})(Mx);
const m$ = /* @__PURE__ */ xt(Vf);
var Df = {}, SA = {
  get exports() {
    return Df;
  },
  set exports(e) {
    Df = e;
  }
}, Lf = {}, wA = {
  get exports() {
    return Lf;
  },
  set exports(e) {
    Lf = e;
  }
}, xA = rt, EA = xA("toStringTag"), y$ = {};
y$[EA] = "z";
var zh = String(y$) === "[object z]", PA = zh, AA = ze, ta = Si, jA = rt, TA = jA("toStringTag"), _A = Object, IA = ta(function() {
  return arguments;
}()) == "Arguments", RA = function(e, t) {
  try {
    return e[t];
  } catch {
  }
}, Ms = PA ? ta : function(e) {
  var t, r, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = RA(t = _A(e), TA)) == "string" ? r : IA ? ta(t) : (n = ta(t)) == "Object" && AA(t.callee) ? "Arguments" : n;
}, FA = Ms, VA = String, ks = function(e) {
  if (FA(e) === "Symbol")
    throw TypeError("Cannot convert a Symbol value to a string");
  return VA(e);
}, nc = {}, CA = At, MA = u$, kA = er, NA = Vs, DA = mr, LA = Wh;
nc.f = CA && !MA ? Object.defineProperties : function(t, r) {
  NA(t);
  for (var n = DA(r), i = LA(r), s = i.length, o = 0, a; s > o; )
    kA.f(t, a = i[o++], n[a]);
  return t;
};
var BA = Zt, UA = BA("document", "documentElement"), qA = Lr, HA = Kh, cy = qA("keys"), ic = function(e) {
  return cy[e] || (cy[e] = HA(e));
}, KA = Vs, GA = nc, ly = Jh, JA = rc, WA = UA, zA = a$, YA = ic, uy = ">", fy = "<", Bf = "prototype", Uf = "script", v$ = YA("IE_PROTO"), Du = function() {
}, g$ = function(e) {
  return fy + Uf + uy + e + fy + "/" + Uf + uy;
}, py = function(e) {
  e.write(g$("")), e.close();
  var t = e.parentWindow.Object;
  return e = null, t;
}, XA = function() {
  var e = zA("iframe"), t = "java" + Uf + ":", r;
  return e.style.display = "none", WA.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(g$("document.F=Object")), r.close(), r.F;
}, Do, ra = function() {
  try {
    Do = new ActiveXObject("htmlfile");
  } catch {
  }
  ra = typeof document < "u" ? document.domain && Do ? py(Do) : XA() : py(Do);
  for (var e = ly.length; e--; )
    delete ra[Bf][ly[e]];
  return ra();
};
JA[v$] = !0;
var Yh = Object.create || function(t, r) {
  var n;
  return t !== null ? (Du[Bf] = KA(t), n = new Du(), Du[Bf] = null, n[v$] = t) : n = ra(), r === void 0 ? n : GA.f(n, r);
}, sc = {}, QA = h$, ZA = Jh, ej = ZA.concat("length", "prototype");
sc.f = Object.getOwnPropertyNames || function(t) {
  return QA(t, ej);
};
var b$ = {}, tj = ec, rj = er, nj = _s, Xh = function(e, t, r) {
  var n = tj(t);
  n in e ? rj.f(e, n, nj(0, r)) : e[n] = r;
}, hy = f$, ij = tc, sj = Xh, oj = Array, aj = Math.max, cj = function(e, t, r) {
  for (var n = ij(e), i = hy(t, n), s = hy(r === void 0 ? n : r, n), o = oj(aj(s - i, 0)), a = 0; i < s; i++, a++)
    sj(o, a, e[i]);
  return o.length = a, o;
}, lj = Si, uj = mr, $$ = sc.f, fj = cj, O$ = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], pj = function(e) {
  try {
    return $$(e);
  } catch {
    return fj(O$);
  }
};
b$.f = function(t) {
  return O$ && lj(t) == "Window" ? pj(t) : $$(uj(t));
};
var oc = {};
oc.f = Object.getOwnPropertySymbols;
var hj = Cs, ac = function(e, t, r, n) {
  return n && n.enumerable ? e[t] = r : hj(e, t, r), e;
}, dj = er, mj = function(e, t, r) {
  return dj.f(e, t, r);
}, Ns = {}, yj = rt;
Ns.f = yj;
var dy = Nt, vj = pt, gj = Ns, bj = er.f, be = function(e) {
  var t = dy.Symbol || (dy.Symbol = {});
  vj(t, e) || bj(t, e, {
    value: gj.f(e)
  });
}, $j = Pn, Oj = Zt, Sj = rt, wj = ac, S$ = function() {
  var e = Oj("Symbol"), t = e && e.prototype, r = t && t.valueOf, n = Sj("toPrimitive");
  t && !t[n] && wj(t, n, function(i) {
    return $j(r, this);
  }, { arity: 1 });
}, xj = zh, Ej = Ms, Pj = xj ? {}.toString : function() {
  return "[object " + Ej(this) + "]";
}, Aj = zh, jj = er.f, Tj = Cs, _j = pt, Ij = Pj, Rj = rt, my = Rj("toStringTag"), Ds = function(e, t, r, n) {
  if (e) {
    var i = r ? e : e.prototype;
    _j(i, my) || jj(i, my, { configurable: !0, value: t }), n && !Aj && Tj(i, "toString", Ij);
  }
}, Fj = Pt, Vj = ze, yy = Fj.WeakMap, Cj = Vj(yy) && /native code/.test(String(yy)), Mj = Cj, w$ = Pt, kj = Kr, Nj = Cs, Lu = pt, Bu = Hh, Dj = ic, Lj = rc, vy = "Object already initialized", qf = w$.TypeError, Bj = w$.WeakMap, ma, us, ya, Uj = function(e) {
  return ya(e) ? us(e) : ma(e, {});
}, qj = function(e) {
  return function(t) {
    var r;
    if (!kj(t) || (r = us(t)).type !== e)
      throw qf("Incompatible receiver, " + e + " required");
    return r;
  };
};
if (Mj || Bu.state) {
  var Lt = Bu.state || (Bu.state = new Bj());
  Lt.get = Lt.get, Lt.has = Lt.has, Lt.set = Lt.set, ma = function(e, t) {
    if (Lt.has(e))
      throw qf(vy);
    return t.facade = e, Lt.set(e, t), t;
  }, us = function(e) {
    return Lt.get(e) || {};
  }, ya = function(e) {
    return Lt.has(e);
  };
} else {
  var Vn = Dj("state");
  Lj[Vn] = !0, ma = function(e, t) {
    if (Lu(e, Vn))
      throw qf(vy);
    return t.facade = e, Nj(e, Vn, t), t;
  }, us = function(e) {
    return Lu(e, Vn) ? e[Vn] : {};
  }, ya = function(e) {
    return Lu(e, Vn);
  };
}
var Qh = {
  set: ma,
  get: us,
  has: ya,
  enforce: Uj,
  getterFor: qj
}, Hj = Si, Zh = Array.isArray || function(t) {
  return Hj(t) == "Array";
}, Kj = Re, Gj = ze, Hf = Hh, Jj = Kj(Function.toString);
Gj(Hf.inspectSource) || (Hf.inspectSource = function(e) {
  return Jj(e);
});
var Wj = Hf.inspectSource, zj = Re, Yj = Ie, x$ = ze, Xj = Ms, Qj = Zt, Zj = Wj, E$ = function() {
}, eT = [], P$ = Qj("Reflect", "construct"), ed = /^\s*(?:class|function)\b/, tT = zj(ed.exec), rT = !ed.exec(E$), Ki = function(t) {
  if (!x$(t))
    return !1;
  try {
    return P$(E$, eT, t), !0;
  } catch {
    return !1;
  }
}, A$ = function(t) {
  if (!x$(t))
    return !1;
  switch (Xj(t)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return rT || !!tT(ed, Zj(t));
  } catch {
    return !0;
  }
};
A$.sham = !0;
var nT = !P$ || Yj(function() {
  var e;
  return Ki(Ki.call) || !Ki(Object) || !Ki(function() {
    e = !0;
  }) || e;
}) ? A$ : Ki, gy = Zh, iT = nT, sT = Kr, oT = rt, aT = oT("species"), by = Array, cT = function(e) {
  var t;
  return gy(e) && (t = e.constructor, iT(t) && (t === by || gy(t.prototype)) ? t = void 0 : sT(t) && (t = t[aT], t === null && (t = void 0))), t === void 0 ? by : t;
}, lT = cT, j$ = function(e, t) {
  return new (lT(e))(t === 0 ? 0 : t);
}, uT = l$, fT = Re, pT = e$, hT = xi, dT = tc, mT = j$, $y = fT([].push), Er = function(e) {
  var t = e == 1, r = e == 2, n = e == 3, i = e == 4, s = e == 6, o = e == 7, a = e == 5 || s;
  return function(c, l, u, f) {
    for (var p = hT(c), h = pT(p), d = uT(l, u), m = dT(h), y = 0, g = f || mT, S = t ? g(c, m) : r || o ? g(c, 0) : void 0, $, w; m > y; y++)
      if ((a || y in h) && ($ = h[y], w = d($, y, p), e))
        if (t)
          S[y] = w;
        else if (w)
          switch (e) {
            case 3:
              return !0;
            case 5:
              return $;
            case 6:
              return y;
            case 2:
              $y(S, $);
          }
        else
          switch (e) {
            case 4:
              return !1;
            case 7:
              $y(S, $);
          }
    return s ? -1 : n || i ? i : S;
  };
}, td = {
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
}, cc = Ne, rd = Pt, nd = Pn, yT = Re, ri = At, ni = wi, vT = Ie, _e = pt, gT = Is, Kf = Vs, lc = mr, id = ec, bT = ks, Gf = _s, fs = Yh, T$ = Wh, $T = sc, _$ = b$, OT = oc, I$ = Ts, R$ = er, ST = nc, F$ = Bh, Oy = ac, wT = mj, sd = Lr, xT = ic, V$ = rc, Sy = Kh, ET = rt, PT = Ns, AT = be, jT = S$, TT = Ds, C$ = Qh, uc = td.forEach, Xe = xT("hidden"), fc = "Symbol", ps = "prototype", _T = C$.set, wy = C$.getterFor(fc), Ft = Object[ps], hn = rd.Symbol, Xi = hn && hn[ps], IT = rd.TypeError, Uu = rd.QObject, M$ = I$.f, cn = R$.f, k$ = _$.f, RT = F$.f, N$ = yT([].push), ur = sd("symbols"), Ls = sd("op-symbols"), FT = sd("wks"), Jf = !Uu || !Uu[ps] || !Uu[ps].findChild, Wf = ri && vT(function() {
  return fs(cn({}, "a", {
    get: function() {
      return cn(this, "a", { value: 7 }).a;
    }
  })).a != 7;
}) ? function(e, t, r) {
  var n = M$(Ft, t);
  n && delete Ft[t], cn(e, t, r), n && e !== Ft && cn(Ft, t, n);
} : cn, qu = function(e, t) {
  var r = ur[e] = fs(Xi);
  return _T(r, {
    type: fc,
    tag: e,
    description: t
  }), ri || (r.description = t), r;
}, pc = function(t, r, n) {
  t === Ft && pc(Ls, r, n), Kf(t);
  var i = id(r);
  return Kf(n), _e(ur, i) ? (n.enumerable ? (_e(t, Xe) && t[Xe][i] && (t[Xe][i] = !1), n = fs(n, { enumerable: Gf(0, !1) })) : (_e(t, Xe) || cn(t, Xe, Gf(1, {})), t[Xe][i] = !0), Wf(t, i, n)) : cn(t, i, n);
}, od = function(t, r) {
  Kf(t);
  var n = lc(r), i = T$(n).concat(U$(n));
  return uc(i, function(s) {
    (!ri || nd(D$, n, s)) && pc(t, s, n[s]);
  }), t;
}, VT = function(t, r) {
  return r === void 0 ? fs(t) : od(fs(t), r);
}, D$ = function(t) {
  var r = id(t), n = nd(RT, this, r);
  return this === Ft && _e(ur, r) && !_e(Ls, r) ? !1 : n || !_e(this, r) || !_e(ur, r) || _e(this, Xe) && this[Xe][r] ? n : !0;
}, L$ = function(t, r) {
  var n = lc(t), i = id(r);
  if (!(n === Ft && _e(ur, i) && !_e(Ls, i))) {
    var s = M$(n, i);
    return s && _e(ur, i) && !(_e(n, Xe) && n[Xe][i]) && (s.enumerable = !0), s;
  }
}, B$ = function(t) {
  var r = k$(lc(t)), n = [];
  return uc(r, function(i) {
    !_e(ur, i) && !_e(V$, i) && N$(n, i);
  }), n;
}, U$ = function(e) {
  var t = e === Ft, r = k$(t ? Ls : lc(e)), n = [];
  return uc(r, function(i) {
    _e(ur, i) && (!t || _e(Ft, i)) && N$(n, ur[i]);
  }), n;
};
ni || (hn = function() {
  if (gT(Xi, this))
    throw IT("Symbol is not a constructor");
  var t = !arguments.length || arguments[0] === void 0 ? void 0 : bT(arguments[0]), r = Sy(t), n = function(i) {
    this === Ft && nd(n, Ls, i), _e(this, Xe) && _e(this[Xe], r) && (this[Xe][r] = !1), Wf(this, r, Gf(1, i));
  };
  return ri && Jf && Wf(Ft, r, { configurable: !0, set: n }), qu(r, t);
}, Xi = hn[ps], Oy(Xi, "toString", function() {
  return wy(this).tag;
}), Oy(hn, "withoutSetter", function(e) {
  return qu(Sy(e), e);
}), F$.f = D$, R$.f = pc, ST.f = od, I$.f = L$, $T.f = _$.f = B$, OT.f = U$, PT.f = function(e) {
  return qu(ET(e), e);
}, ri && wT(Xi, "description", {
  configurable: !0,
  get: function() {
    return wy(this).description;
  }
}));
cc({ global: !0, constructor: !0, wrap: !0, forced: !ni, sham: !ni }, {
  Symbol: hn
});
uc(T$(FT), function(e) {
  AT(e);
});
cc({ target: fc, stat: !0, forced: !ni }, {
  useSetter: function() {
    Jf = !0;
  },
  useSimple: function() {
    Jf = !1;
  }
});
cc({ target: "Object", stat: !0, forced: !ni, sham: !ri }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: VT,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: pc,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: od,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: L$
});
cc({ target: "Object", stat: !0, forced: !ni }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: B$
});
jT();
TT(hn, fc);
V$[Xe] = !0;
var CT = wi, q$ = CT && !!Symbol.for && !!Symbol.keyFor, MT = Ne, kT = Zt, NT = pt, DT = ks, H$ = Lr, LT = q$, Hu = H$("string-to-symbol-registry"), BT = H$("symbol-to-string-registry");
MT({ target: "Symbol", stat: !0, forced: !LT }, {
  for: function(e) {
    var t = DT(e);
    if (NT(Hu, t))
      return Hu[t];
    var r = kT("Symbol")(t);
    return Hu[t] = r, BT[r] = t, r;
  }
});
var UT = Ne, qT = pt, HT = Rs, KT = s$, GT = Lr, JT = q$, xy = GT("symbol-to-string-registry");
UT({ target: "Symbol", stat: !0, forced: !JT }, {
  keyFor: function(t) {
    if (!HT(t))
      throw TypeError(KT(t) + " is not a symbol");
    if (qT(xy, t))
      return xy[t];
  }
});
var WT = Re, zT = WT([].slice), YT = Re, Ey = Zh, XT = ze, Py = Si, QT = ks, Ay = YT([].push), ZT = function(e) {
  if (XT(e))
    return e;
  if (Ey(e)) {
    for (var t = e.length, r = [], n = 0; n < t; n++) {
      var i = e[n];
      typeof i == "string" ? Ay(r, i) : (typeof i == "number" || Py(i) == "Number" || Py(i) == "String") && Ay(r, QT(i));
    }
    var s = r.length, o = !0;
    return function(a, c) {
      if (o)
        return o = !1, c;
      if (Ey(this))
        return c;
      for (var l = 0; l < s; l++)
        if (r[l] === a)
          return c;
    };
  }
}, e_ = Ne, K$ = Zt, G$ = Gb, t_ = Pn, Bs = Re, J$ = Ie, jy = ze, Ty = Rs, W$ = zT, r_ = ZT, n_ = wi, i_ = String, Vr = K$("JSON", "stringify"), Lo = Bs(/./.exec), _y = Bs("".charAt), s_ = Bs("".charCodeAt), o_ = Bs("".replace), a_ = Bs(1 .toString), c_ = /[\uD800-\uDFFF]/g, Iy = /^[\uD800-\uDBFF]$/, Ry = /^[\uDC00-\uDFFF]$/, Fy = !n_ || J$(function() {
  var e = K$("Symbol")();
  return Vr([e]) != "[null]" || Vr({ a: e }) != "{}" || Vr(Object(e)) != "{}";
}), Vy = J$(function() {
  return Vr("\uDF06\uD834") !== '"\\udf06\\ud834"' || Vr("\uDEAD") !== '"\\udead"';
}), l_ = function(e, t) {
  var r = W$(arguments), n = r_(t);
  if (!(!jy(n) && (e === void 0 || Ty(e))))
    return r[1] = function(i, s) {
      if (jy(n) && (s = t_(n, this, i_(i), s)), !Ty(s))
        return s;
    }, G$(Vr, null, r);
}, u_ = function(e, t, r) {
  var n = _y(r, t - 1), i = _y(r, t + 1);
  return Lo(Iy, e) && !Lo(Ry, i) || Lo(Ry, e) && !Lo(Iy, n) ? "\\u" + a_(s_(e, 0), 16) : e;
};
Vr && e_({ target: "JSON", stat: !0, arity: 3, forced: Fy || Vy }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  stringify: function(t, r, n) {
    var i = W$(arguments), s = G$(Fy ? l_ : Vr, null, i);
    return Vy && typeof s == "string" ? o_(s, c_, u_) : s;
  }
});
var f_ = Ne, p_ = wi, h_ = Ie, z$ = oc, d_ = xi, m_ = !p_ || h_(function() {
  z$.f(1);
});
f_({ target: "Object", stat: !0, forced: m_ }, {
  getOwnPropertySymbols: function(t) {
    var r = z$.f;
    return r ? r(d_(t)) : [];
  }
});
var y_ = Nt, v_ = y_.Object.getOwnPropertySymbols, g_ = v_, b_ = g_, $_ = b_, O_ = $_, S_ = O_, w_ = S_;
(function(e) {
  e.exports = w_;
})(wA);
(function(e) {
  e.exports = Lf;
})(SA);
const va = /* @__PURE__ */ xt(Df);
var zf = {}, x_ = {
  get exports() {
    return zf;
  },
  set exports(e) {
    zf = e;
  }
}, Yf = {}, E_ = {
  get exports() {
    return Yf;
  },
  set exports(e) {
    Yf = e;
  }
}, P_ = Ie, A_ = rt, j_ = qh, T_ = A_("species"), Y$ = function(e) {
  return j_ >= 51 || !P_(function() {
    var t = [], r = t.constructor = {};
    return r[T_] = function() {
      return { foo: 1 };
    }, t[e](Boolean).foo !== 1;
  });
}, __ = Ne, I_ = td.filter, R_ = Y$, F_ = R_("filter");
__({ target: "Array", proto: !0, forced: !F_ }, {
  filter: function(t) {
    return I_(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var V_ = Nt, ad = function(e) {
  return V_[e + "Prototype"];
}, C_ = ad, M_ = C_("Array").filter, k_ = Is, N_ = M_, Ku = Array.prototype, D_ = function(e) {
  var t = e.filter;
  return e === Ku || k_(Ku, e) && t === Ku.filter ? N_ : t;
}, L_ = D_, B_ = L_, U_ = B_, q_ = U_, H_ = q_, K_ = H_;
(function(e) {
  e.exports = K_;
})(E_);
(function(e) {
  e.exports = Yf;
})(x_);
const G_ = /* @__PURE__ */ xt(zf);
var Xf = {}, J_ = {
  get exports() {
    return Xf;
  },
  set exports(e) {
    Xf = e;
  }
}, Qf = {}, W_ = {
  get exports() {
    return Qf;
  },
  set exports(e) {
    Qf = e;
  }
}, Zf = {}, z_ = {
  get exports() {
    return Zf;
  },
  set exports(e) {
    Zf = e;
  }
}, Y_ = Ne, X_ = Ie, Q_ = mr, X$ = Ts.f, Q$ = At, Z_ = !Q$ || X_(function() {
  X$(1);
});
Y_({ target: "Object", stat: !0, forced: Z_, sham: !Q$ }, {
  getOwnPropertyDescriptor: function(t, r) {
    return X$(Q_(t), r);
  }
});
var eI = Nt, Z$ = eI.Object, tI = z_.exports = function(t, r) {
  return Z$.getOwnPropertyDescriptor(t, r);
};
Z$.getOwnPropertyDescriptor.sham && (tI.sham = !0);
var rI = Zf, nI = rI, iI = nI, sI = iI, oI = sI, aI = oI;
(function(e) {
  e.exports = aI;
})(W_);
(function(e) {
  e.exports = Qf;
})(J_);
const eO = /* @__PURE__ */ xt(Xf);
var ep = {}, cI = {
  get exports() {
    return ep;
  },
  set exports(e) {
    ep = e;
  }
}, tp = {}, lI = {
  get exports() {
    return tp;
  },
  set exports(e) {
    tp = e;
  }
}, hc = {}, rp = At, uI = pt, tO = Function.prototype, fI = rp && Object.getOwnPropertyDescriptor, cd = uI(tO, "name"), pI = cd && function() {
}.name === "something", hI = cd && (!rp || rp && fI(tO, "name").configurable), dI = {
  EXISTS: cd,
  PROPER: pI,
  CONFIGURABLE: hI
}, mI = Ie, yI = !mI(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), vI = pt, gI = ze, bI = xi, $I = ic, OI = yI, Cy = $I("IE_PROTO"), np = Object, SI = np.prototype, rO = OI ? np.getPrototypeOf : function(e) {
  var t = bI(e);
  if (vI(t, Cy))
    return t[Cy];
  var r = t.constructor;
  return gI(r) && t instanceof r ? r.prototype : t instanceof np ? SI : null;
}, wI = Ie, xI = ze, EI = Kr, PI = Yh, My = rO, AI = ac, jI = rt, ip = jI("iterator"), nO = !1, ar, Gu, Ju;
[].keys && (Ju = [].keys(), "next" in Ju ? (Gu = My(My(Ju)), Gu !== Object.prototype && (ar = Gu)) : nO = !0);
var TI = !EI(ar) || wI(function() {
  var e = {};
  return ar[ip].call(e) !== e;
});
TI ? ar = {} : ar = PI(ar);
xI(ar[ip]) || AI(ar, ip, function() {
  return this;
});
var iO = {
  IteratorPrototype: ar,
  BUGGY_SAFARI_ITERATORS: nO
}, _I = iO.IteratorPrototype, II = Yh, RI = _s, FI = Ds, VI = hc, CI = function() {
  return this;
}, MI = function(e, t, r, n) {
  var i = t + " Iterator";
  return e.prototype = II(_I, { next: RI(+!n, r) }), FI(e, i, !1, !0), VI[i] = CI, e;
}, kI = Ne, NI = Pn, DI = dI, LI = MI, BI = rO, UI = Ds, ky = ac, qI = rt, Ny = hc, HI = iO, KI = DI.PROPER, Bo = HI.BUGGY_SAFARI_ITERATORS, Wu = qI("iterator"), Dy = "keys", Uo = "values", Ly = "entries", GI = function() {
  return this;
}, sO = function(e, t, r, n, i, s, o) {
  LI(r, t, n);
  var a = function(g) {
    if (g === i && p)
      return p;
    if (!Bo && g in u)
      return u[g];
    switch (g) {
      case Dy:
        return function() {
          return new r(this, g);
        };
      case Uo:
        return function() {
          return new r(this, g);
        };
      case Ly:
        return function() {
          return new r(this, g);
        };
    }
    return function() {
      return new r(this);
    };
  }, c = t + " Iterator", l = !1, u = e.prototype, f = u[Wu] || u["@@iterator"] || i && u[i], p = !Bo && f || a(i), h = t == "Array" && u.entries || f, d, m, y;
  if (h && (d = BI(h.call(new e())), d !== Object.prototype && d.next && (UI(d, c, !0, !0), Ny[c] = GI)), KI && i == Uo && f && f.name !== Uo && (l = !0, p = function() {
    return NI(f, this);
  }), i)
    if (m = {
      values: a(Uo),
      keys: s ? p : a(Dy),
      entries: a(Ly)
    }, o)
      for (y in m)
        (Bo || l || !(y in u)) && ky(u, y, m[y]);
    else
      kI({ target: t, proto: !0, forced: Bo || l }, m);
  return o && u[Wu] !== p && ky(u, Wu, p, { name: i }), Ny[t] = p, m;
}, oO = function(e, t) {
  return { value: e, done: t };
}, JI = mr, By = hc, aO = Qh;
er.f;
var WI = sO, qo = oO, cO = "Array Iterator", zI = aO.set, YI = aO.getterFor(cO);
WI(Array, "Array", function(e, t) {
  zI(this, {
    type: cO,
    target: JI(e),
    // target
    index: 0,
    // next index
    kind: t
    // kind
  });
}, function() {
  var e = YI(this), t = e.target, r = e.kind, n = e.index++;
  return !t || n >= t.length ? (e.target = void 0, qo(void 0, !0)) : r == "keys" ? qo(n, !1) : r == "values" ? qo(t[n], !1) : qo([n, t[n]], !1);
}, "values");
By.Arguments = By.Array;
var XI = {
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
}, QI = XI, ZI = Pt, eR = Ms, tR = Cs, Uy = hc, rR = rt, qy = rR("toStringTag");
for (var zu in QI) {
  var Hy = ZI[zu], Yu = Hy && Hy.prototype;
  Yu && eR(Yu) !== qy && tR(Yu, qy, zu), Uy[zu] = Uy.Array;
}
var nR = Ie, lO = function(e, t) {
  var r = [][e];
  return !!r && nR(function() {
    r.call(null, t || function() {
      return 1;
    }, 1);
  });
}, iR = td.forEach, sR = lO, oR = sR("forEach"), aR = oR ? [].forEach : function(t) {
  return iR(this, t, arguments.length > 1 ? arguments[1] : void 0);
}, cR = Ne, Ky = aR;
cR({ target: "Array", proto: !0, forced: [].forEach != Ky }, {
  forEach: Ky
});
var lR = ad, uR = lR("Array").forEach, fR = uR, pR = fR, hR = Ms, dR = pt, mR = Is, yR = pR, Xu = Array.prototype, vR = {
  DOMTokenList: !0,
  NodeList: !0
}, gR = function(e) {
  var t = e.forEach;
  return e === Xu || mR(Xu, e) && t === Xu.forEach || dR(vR, hR(e)) ? yR : t;
}, bR = gR, $R = bR, OR = $R, SR = OR;
(function(e) {
  e.exports = SR;
})(lI);
(function(e) {
  e.exports = tp;
})(cI);
const Gy = /* @__PURE__ */ xt(ep);
var sp = {}, wR = {
  get exports() {
    return sp;
  },
  set exports(e) {
    sp = e;
  }
}, op = {}, xR = {
  get exports() {
    return op;
  },
  set exports(e) {
    op = e;
  }
}, ER = Zt, PR = Re, AR = sc, jR = oc, TR = Vs, _R = PR([].concat), IR = ER("Reflect", "ownKeys") || function(t) {
  var r = AR.f(TR(t)), n = jR.f;
  return n ? _R(r, n(t)) : r;
}, RR = Ne, FR = At, VR = IR, CR = mr, MR = Ts, kR = Xh;
RR({ target: "Object", stat: !0, sham: !FR }, {
  getOwnPropertyDescriptors: function(t) {
    for (var r = CR(t), n = MR.f, i = VR(r), s = {}, o = 0, a, c; i.length > o; )
      c = n(r, a = i[o++]), c !== void 0 && kR(s, a, c);
    return s;
  }
});
var NR = Nt, DR = NR.Object.getOwnPropertyDescriptors, LR = DR, BR = LR, UR = BR, qR = UR, HR = qR, KR = HR;
(function(e) {
  e.exports = KR;
})(xR);
(function(e) {
  e.exports = op;
})(wR);
const Jy = /* @__PURE__ */ xt(sp);
var ap = {}, GR = {
  get exports() {
    return ap;
  },
  set exports(e) {
    ap = e;
  }
}, cp = {}, JR = {
  get exports() {
    return cp;
  },
  set exports(e) {
    cp = e;
  }
}, lp = {}, WR = {
  get exports() {
    return lp;
  },
  set exports(e) {
    lp = e;
  }
}, zR = Ne, YR = At, Wy = nc.f;
zR({ target: "Object", stat: !0, forced: Object.defineProperties !== Wy, sham: !YR }, {
  defineProperties: Wy
});
var XR = Nt, uO = XR.Object, QR = WR.exports = function(t, r) {
  return uO.defineProperties(t, r);
};
uO.defineProperties.sham && (QR.sham = !0);
var ZR = lp, eF = ZR, tF = eF, rF = tF, nF = rF, iF = nF;
(function(e) {
  e.exports = iF;
})(JR);
(function(e) {
  e.exports = cp;
})(GR);
const sF = /* @__PURE__ */ xt(ap);
var up = {}, oF = {
  get exports() {
    return up;
  },
  set exports(e) {
    up = e;
  }
}, fp = {}, aF = {
  get exports() {
    return fp;
  },
  set exports(e) {
    fp = e;
  }
}, pp = {}, cF = {
  get exports() {
    return pp;
  },
  set exports(e) {
    pp = e;
  }
}, lF = Ne, uF = At, zy = er.f;
lF({ target: "Object", stat: !0, forced: Object.defineProperty !== zy, sham: !uF }, {
  defineProperty: zy
});
var fF = Nt, fO = fF.Object, pF = cF.exports = function(t, r, n) {
  return fO.defineProperty(t, r, n);
};
fO.defineProperty.sham && (pF.sham = !0);
var hF = pp, dF = hF, mF = dF, yF = mF, vF = yF, gF = vF;
(function(e) {
  e.exports = gF;
})(aF);
(function(e) {
  e.exports = fp;
})(oF);
const pO = /* @__PURE__ */ xt(up);
var hp = {}, bF = {
  get exports() {
    return hp;
  },
  set exports(e) {
    hp = e;
  }
}, dp = {}, $F = {
  get exports() {
    return dp;
  },
  set exports(e) {
    dp = e;
  }
}, OF = TypeError, SF = 9007199254740991, wF = function(e) {
  if (e > SF)
    throw OF("Maximum allowed index exceeded");
  return e;
}, xF = Ne, EF = Ie, PF = Zh, AF = Kr, jF = xi, TF = tc, Yy = wF, Xy = Xh, _F = j$, IF = Y$, RF = rt, FF = qh, hO = RF("isConcatSpreadable"), VF = FF >= 51 || !EF(function() {
  var e = [];
  return e[hO] = !1, e.concat()[0] !== e;
}), CF = function(e) {
  if (!AF(e))
    return !1;
  var t = e[hO];
  return t !== void 0 ? !!t : PF(e);
}, MF = !VF || !IF("concat");
xF({ target: "Array", proto: !0, arity: 1, forced: MF }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(t) {
    var r = jF(this), n = _F(r, 0), i = 0, s, o, a, c, l;
    for (s = -1, a = arguments.length; s < a; s++)
      if (l = s === -1 ? r : arguments[s], CF(l))
        for (c = TF(l), Yy(i + c), o = 0; o < c; o++, i++)
          o in l && Xy(n, i, l[o]);
      else
        Yy(i + 1), Xy(n, i++, l);
    return n.length = i, n;
  }
});
var kF = be;
kF("asyncIterator");
var NF = be;
NF("hasInstance");
var DF = be;
DF("isConcatSpreadable");
var LF = be;
LF("iterator");
var BF = be;
BF("match");
var UF = be;
UF("matchAll");
var qF = be;
qF("replace");
var HF = be;
HF("search");
var KF = be;
KF("species");
var GF = be;
GF("split");
var JF = be, WF = S$;
JF("toPrimitive");
WF();
var zF = Zt, YF = be, XF = Ds;
YF("toStringTag");
XF(zF("Symbol"), "Symbol");
var QF = be;
QF("unscopables");
var ZF = Pt, eV = Ds;
eV(ZF.JSON, "JSON", !0);
var tV = Nt, rV = tV.Symbol, nV = rV, iV = nV, sV = be;
sV("dispose");
var oV = iV, aV = oV, cV = be;
cV("asyncDispose");
var lV = Ne, uV = Zt, fV = Re, dO = uV("Symbol"), pV = dO.keyFor, hV = fV(dO.prototype.valueOf);
lV({ target: "Symbol", stat: !0 }, {
  isRegistered: function(t) {
    try {
      return pV(hV(t)) !== void 0;
    } catch {
      return !1;
    }
  }
});
var dV = Ne, mV = Lr, mO = Zt, yV = Re, vV = Rs, gV = rt, ga = mO("Symbol"), Qy = ga.isWellKnown, yO = mO("Object", "getOwnPropertyNames"), bV = yV(ga.prototype.valueOf), Zy = mV("wks");
for (var Qu = 0, ev = yO(ga), $V = ev.length; Qu < $V; Qu++)
  try {
    var tv = ev[Qu];
    vV(ga[tv]) && gV(tv);
  } catch {
  }
dV({ target: "Symbol", stat: !0, forced: !0 }, {
  isWellKnown: function(t) {
    if (Qy && Qy(t))
      return !0;
    try {
      for (var r = bV(t), n = 0, i = yO(Zy), s = i.length; n < s; n++)
        if (Zy[i[n]] == r)
          return !0;
    } catch {
    }
    return !1;
  }
});
var OV = be;
OV("matcher");
var SV = be;
SV("metadataKey");
var wV = be;
wV("observable");
var xV = be;
xV("metadata");
var EV = be;
EV("patternMatch");
var PV = be;
PV("replaceAll");
var AV = aV, jV = AV;
(function(e) {
  e.exports = jV;
})($F);
(function(e) {
  e.exports = dp;
})(bF);
const Ho = /* @__PURE__ */ xt(hp);
var mp = {}, TV = {
  get exports() {
    return mp;
  },
  set exports(e) {
    mp = e;
  }
}, yp = {}, _V = {
  get exports() {
    return yp;
  },
  set exports(e) {
    yp = e;
  }
}, ld = Re, IV = Gh, RV = ks, FV = Uh, VV = ld("".charAt), rv = ld("".charCodeAt), CV = ld("".slice), nv = function(e) {
  return function(t, r) {
    var n = RV(FV(t)), i = IV(r), s = n.length, o, a;
    return i < 0 || i >= s ? e ? "" : void 0 : (o = rv(n, i), o < 55296 || o > 56319 || i + 1 === s || (a = rv(n, i + 1)) < 56320 || a > 57343 ? e ? VV(n, i) : o : e ? CV(n, i, i + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
  };
}, MV = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: nv(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: nv(!0)
}, kV = MV.charAt, NV = ks, vO = Qh, DV = sO, iv = oO, gO = "String Iterator", LV = vO.set, BV = vO.getterFor(gO);
DV(String, "String", function(e) {
  LV(this, {
    type: gO,
    string: NV(e),
    index: 0
  });
}, function() {
  var t = BV(this), r = t.string, n = t.index, i;
  return n >= r.length ? iv(void 0, !0) : (i = kV(r, n), t.index += i.length, iv(i, !1));
});
var UV = Ns, qV = UV.f("iterator"), HV = qV, KV = HV, GV = KV, JV = GV, WV = JV, zV = WV;
(function(e) {
  e.exports = zV;
})(_V);
(function(e) {
  e.exports = yp;
})(TV);
const YV = /* @__PURE__ */ xt(mp);
function hs(e) {
  return hs = typeof Ho == "function" && typeof YV == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Ho == "function" && t.constructor === Ho && t !== Ho.prototype ? "symbol" : typeof t;
  }, hs(e);
}
var vp = {}, XV = {
  get exports() {
    return vp;
  },
  set exports(e) {
    vp = e;
  }
}, gp = {}, QV = {
  get exports() {
    return gp;
  },
  set exports(e) {
    gp = e;
  }
}, ZV = Ns, eC = ZV.f("toPrimitive"), tC = eC, rC = tC, nC = rC, iC = nC, sC = iC, oC = sC;
(function(e) {
  e.exports = oC;
})(QV);
(function(e) {
  e.exports = gp;
})(XV);
const aC = /* @__PURE__ */ xt(vp);
function cC(e, t) {
  if (hs(e) !== "object" || e === null)
    return e;
  var r = e[aC];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (hs(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lC(e) {
  var t = cC(e, "string");
  return hs(t) === "symbol" ? t : String(t);
}
function M(e, t, r) {
  return t = lC(t), t in e ? pO(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function sv(e, t) {
  var r = m$(e);
  if (va) {
    var n = va(e);
    t && (n = G_(n).call(n, function(i) {
      return eO(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r, n, i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gy(r = sv(Object(i), !0)).call(r, function(s) {
      M(e, s, i[s]);
    }) : Jy ? sF(e, Jy(i)) : Gy(n = sv(Object(i))).call(n, function(s) {
      pO(e, s, eO(i, s));
    });
  }
  return e;
}
var at = {}, ba = {}, uC = {
  get exports() {
    return ba;
  },
  set exports(e) {
    ba = e;
  }
};
/*! https://mths.be/punycode v1.3.2 by @mathias */
(function(e, t) {
  (function(r) {
    var n = t && !t.nodeType && t, i = e && !e.nodeType && e, s = typeof Jt == "object" && Jt;
    (s.global === s || s.window === s || s.self === s) && (r = s);
    var o, a = 2147483647, c = 36, l = 1, u = 26, f = 38, p = 700, h = 72, d = 128, m = "-", y = /^xn--/, g = /[^\x20-\x7E]/, S = /[\x2E\u3002\uFF0E\uFF61]/g, $ = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, w = c - l, x = Math.floor, j = String.fromCharCode, P;
    function C(_) {
      throw RangeError($[_]);
    }
    function v(_, I) {
      for (var D = _.length, q = []; D--; )
        q[D] = I(_[D]);
      return q;
    }
    function A(_, I) {
      var D = _.split("@"), q = "";
      D.length > 1 && (q = D[0] + "@", _ = D[1]), _ = _.replace(S, ".");
      var Q = _.split("."), ee = v(Q, I).join(".");
      return q + ee;
    }
    function T(_) {
      for (var I = [], D = 0, q = _.length, Q, ee; D < q; )
        Q = _.charCodeAt(D++), Q >= 55296 && Q <= 56319 && D < q ? (ee = _.charCodeAt(D++), (ee & 64512) == 56320 ? I.push(((Q & 1023) << 10) + (ee & 1023) + 65536) : (I.push(Q), D--)) : I.push(Q);
      return I;
    }
    function R(_) {
      return v(_, function(I) {
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
      for (_ = D ? x(_ / p) : _ >> 1, _ += x(_ / I); _ > w * u >> 1; q += c)
        _ = x(_ / w);
      return x(q + (w + 1) * _ / (_ + f));
    }
    function ve(_) {
      var I = [], D = _.length, q, Q = 0, ee = d, fe = h, Ae, st, Ve, nr, De, dt, Tt, xr, rn;
      for (Ae = _.lastIndexOf(m), Ae < 0 && (Ae = 0), st = 0; st < Ae; ++st)
        _.charCodeAt(st) >= 128 && C("not-basic"), I.push(_.charCodeAt(st));
      for (Ve = Ae > 0 ? Ae + 1 : 0; Ve < D; ) {
        for (nr = Q, De = 1, dt = c; Ve >= D && C("invalid-input"), Tt = k(_.charCodeAt(Ve++)), (Tt >= c || Tt > x((a - Q) / De)) && C("overflow"), Q += Tt * De, xr = dt <= fe ? l : dt >= fe + u ? u : dt - fe, !(Tt < xr); dt += c)
          rn = c - xr, De > x(a / rn) && C("overflow"), De *= rn;
        q = I.length + 1, fe = de(Q - nr, q, nr == 0), x(Q / q) > a - ee && C("overflow"), ee += x(Q / q), Q %= q, I.splice(Q++, 0, ee);
      }
      return R(I);
    }
    function ne(_) {
      var I, D, q, Q, ee, fe, Ae, st, Ve, nr, De, dt = [], Tt, xr, rn, Eu;
      for (_ = T(_), Tt = _.length, I = d, D = 0, ee = h, fe = 0; fe < Tt; ++fe)
        De = _[fe], De < 128 && dt.push(j(De));
      for (q = Q = dt.length, Q && dt.push(m); q < Tt; ) {
        for (Ae = a, fe = 0; fe < Tt; ++fe)
          De = _[fe], De >= I && De < Ae && (Ae = De);
        for (xr = q + 1, Ae - I > x((a - D) / xr) && C("overflow"), D += (Ae - I) * xr, I = Ae, fe = 0; fe < Tt; ++fe)
          if (De = _[fe], De < I && ++D > a && C("overflow"), De == I) {
            for (st = D, Ve = c; nr = Ve <= ee ? l : Ve >= ee + u ? u : Ve - ee, !(st < nr); Ve += c)
              Eu = st - nr, rn = c - nr, dt.push(
                j(H(nr + Eu % rn, 0))
              ), st = x(Eu / rn);
            dt.push(j(H(st, 0))), ee = de(D, xr, q == Q), D = 0, ++q;
          }
        ++D, ++I;
      }
      return dt.join("");
    }
    function it(_) {
      return A(_, function(I) {
        return y.test(I) ? ve(I.slice(4).toLowerCase()) : I;
      });
    }
    function Y(_) {
      return A(_, function(I) {
        return g.test(I) ? "xn--" + ne(I) : I;
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
      encode: ne,
      toASCII: Y,
      toUnicode: it
    }, n && i)
      if (e.exports == n)
        i.exports = o;
      else
        for (P in o)
          o.hasOwnProperty(P) && (n[P] = o[P]);
    else
      r.punycode = o;
  })(Jt);
})(uC, ba);
var fC = {
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
}, ds = {};
function pC(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var hC = function(e, t, r, n) {
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
    u >= 0 ? (f = l.substr(0, u), p = l.substr(u + 1)) : (f = l, p = ""), h = decodeURIComponent(f), d = decodeURIComponent(p), pC(i, h) ? Array.isArray(i[h]) ? i[h].push(d) : i[h] = [i[h], d] : i[h] = d;
  }
  return i;
}, Gi = function(e) {
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
}, dC = function(e, t, r, n) {
  return t = t || "&", r = r || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(i) {
    var s = encodeURIComponent(Gi(i)) + r;
    return Array.isArray(e[i]) ? e[i].map(function(o) {
      return s + encodeURIComponent(Gi(o));
    }).join(t) : s + encodeURIComponent(Gi(e[i]));
  }).join(t) : n ? encodeURIComponent(Gi(n)) + r + encodeURIComponent(Gi(e)) : "";
};
ds.decode = ds.parse = hC;
ds.encode = ds.stringify = dC;
var mC = ba, Ht = fC;
at.parse = Us;
at.resolve = EC;
at.resolveObject = PC;
at.format = xC;
at.Url = bt;
function bt() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var yC = /^([a-z0-9.+-]+:)/i, vC = /:[0-9]*$/, gC = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, bC = ["<", ">", '"', "`", " ", "\r", `
`, "	"], $C = ["{", "}", "|", "\\", "^", "`"].concat(bC), bp = ["'"].concat($C), ov = ["%", "/", "?", ";", "#"].concat(bp), av = ["/", "?", "#"], OC = 255, cv = /^[+a-z0-9A-Z_-]{0,63}$/, SC = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, wC = {
  javascript: !0,
  "javascript:": !0
}, $p = {
  javascript: !0,
  "javascript:": !0
}, Zn = {
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
}, Op = ds;
function Us(e, t, r) {
  if (e && Ht.isObject(e) && e instanceof bt)
    return e;
  var n = new bt();
  return n.parse(e, t, r), n;
}
bt.prototype.parse = function(e, t, r) {
  if (!Ht.isString(e))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var n = e.indexOf("?"), i = n !== -1 && n < e.indexOf("#") ? "?" : "#", s = e.split(i), o = /\\/g;
  s[0] = s[0].replace(o, "/"), e = s.join(i);
  var a = e;
  if (a = a.trim(), !r && e.split("#").length === 1) {
    var c = gC.exec(a);
    if (c)
      return this.path = a, this.href = a, this.pathname = c[1], c[2] ? (this.search = c[2], t ? this.query = Op.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
  }
  var l = yC.exec(a);
  if (l) {
    l = l[0];
    var u = l.toLowerCase();
    this.protocol = u, a = a.substr(l.length);
  }
  if (r || l || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var f = a.substr(0, 2) === "//";
    f && !(l && $p[l]) && (a = a.substr(2), this.slashes = !0);
  }
  if (!$p[l] && (f || l && !Zn[l])) {
    for (var p = -1, h = 0; h < av.length; h++) {
      var d = a.indexOf(av[h]);
      d !== -1 && (p === -1 || d < p) && (p = d);
    }
    var m, y;
    p === -1 ? y = a.lastIndexOf("@") : y = a.lastIndexOf("@", p), y !== -1 && (m = a.slice(0, y), a = a.slice(y + 1), this.auth = decodeURIComponent(m)), p = -1;
    for (var h = 0; h < ov.length; h++) {
      var d = a.indexOf(ov[h]);
      d !== -1 && (p === -1 || d < p) && (p = d);
    }
    p === -1 && (p = a.length), this.host = a.slice(0, p), a = a.slice(p), this.parseHost(), this.hostname = this.hostname || "";
    var g = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!g)
      for (var S = this.hostname.split(/\./), h = 0, $ = S.length; h < $; h++) {
        var w = S[h];
        if (w && !w.match(cv)) {
          for (var x = "", j = 0, P = w.length; j < P; j++)
            w.charCodeAt(j) > 127 ? x += "x" : x += w[j];
          if (!x.match(cv)) {
            var C = S.slice(0, h), v = S.slice(h + 1), A = w.match(SC);
            A && (C.push(A[1]), v.unshift(A[2])), v.length && (a = "/" + v.join(".") + a), this.hostname = C.join(".");
            break;
          }
        }
      }
    this.hostname.length > OC ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), g || (this.hostname = mC.toASCII(this.hostname));
    var T = this.port ? ":" + this.port : "", R = this.hostname || "";
    this.host = R + T, this.href += this.host, g && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), a[0] !== "/" && (a = "/" + a));
  }
  if (!wC[u])
    for (var h = 0, $ = bp.length; h < $; h++) {
      var k = bp[h];
      if (a.indexOf(k) !== -1) {
        var H = encodeURIComponent(k);
        H === k && (H = escape(k)), a = a.split(k).join(H);
      }
    }
  var de = a.indexOf("#");
  de !== -1 && (this.hash = a.substr(de), a = a.slice(0, de));
  var ve = a.indexOf("?");
  if (ve !== -1 ? (this.search = a.substr(ve), this.query = a.substr(ve + 1), t && (this.query = Op.parse(this.query)), a = a.slice(0, ve)) : t && (this.search = "", this.query = {}), a && (this.pathname = a), Zn[u] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var T = this.pathname || "", ne = this.search || "";
    this.path = T + ne;
  }
  return this.href = this.format(), this;
};
function xC(e) {
  return Ht.isString(e) && (e = Us(e)), e instanceof bt ? e.format() : bt.prototype.format.call(e);
}
bt.prototype.format = function() {
  var e = this.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var t = this.protocol || "", r = this.pathname || "", n = this.hash || "", i = !1, s = "";
  this.host ? i = e + this.host : this.hostname && (i = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && Ht.isObject(this.query) && Object.keys(this.query).length && (s = Op.stringify(this.query));
  var o = this.search || s && "?" + s || "";
  return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || Zn[t]) && i !== !1 ? (i = "//" + (i || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : i || (i = ""), n && n.charAt(0) !== "#" && (n = "#" + n), o && o.charAt(0) !== "?" && (o = "?" + o), r = r.replace(/[?#]/g, function(a) {
    return encodeURIComponent(a);
  }), o = o.replace("#", "%23"), t + i + r + o + n;
};
function EC(e, t) {
  return Us(e, !1, !0).resolve(t);
}
bt.prototype.resolve = function(e) {
  return this.resolveObject(Us(e, !1, !0)).format();
};
function PC(e, t) {
  return e ? Us(e, !1, !0).resolveObject(t) : t;
}
bt.prototype.resolveObject = function(e) {
  if (Ht.isString(e)) {
    var t = new bt();
    t.parse(e, !1, !0), e = t;
  }
  for (var r = new bt(), n = Object.keys(this), i = 0; i < n.length; i++) {
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
    return Zn[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
  }
  if (e.protocol && e.protocol !== r.protocol) {
    if (!Zn[e.protocol]) {
      for (var l = Object.keys(e), u = 0; u < l.length; u++) {
        var f = l[u];
        r[f] = e[f];
      }
      return r.href = r.format(), r;
    }
    if (r.protocol = e.protocol, !e.host && !$p[e.protocol]) {
      for (var $ = (e.pathname || "").split("/"); $.length && !(e.host = $.shift()); )
        ;
      e.host || (e.host = ""), e.hostname || (e.hostname = ""), $[0] !== "" && $.unshift(""), $.length < 2 && $.unshift(""), r.pathname = $.join("/");
    } else
      r.pathname = e.pathname;
    if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
      var p = r.pathname || "", h = r.search || "";
      r.path = p + h;
    }
    return r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
  }
  var d = r.pathname && r.pathname.charAt(0) === "/", m = e.host || e.pathname && e.pathname.charAt(0) === "/", y = m || d || r.host && e.pathname, g = y, S = r.pathname && r.pathname.split("/") || [], $ = e.pathname && e.pathname.split("/") || [], w = r.protocol && !Zn[r.protocol];
  if (w && (r.hostname = "", r.port = null, r.host && (S[0] === "" ? S[0] = r.host : S.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ($[0] === "" ? $[0] = e.host : $.unshift(e.host)), e.host = null), y = y && ($[0] === "" || S[0] === "")), m)
    r.host = e.host || e.host === "" ? e.host : r.host, r.hostname = e.hostname || e.hostname === "" ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, S = $;
  else if ($.length)
    S || (S = []), S.pop(), S = S.concat($), r.search = e.search, r.query = e.query;
  else if (!Ht.isNullOrUndefined(e.search)) {
    if (w) {
      r.hostname = r.host = S.shift();
      var x = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
      x && (r.auth = x.shift(), r.host = r.hostname = x.shift());
    }
    return r.search = e.search, r.query = e.query, (!Ht.isNull(r.pathname) || !Ht.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
  }
  if (!S.length)
    return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
  for (var j = S.slice(-1)[0], P = (r.host || e.host || S.length > 1) && (j === "." || j === "..") || j === "", C = 0, v = S.length; v >= 0; v--)
    j = S[v], j === "." ? S.splice(v, 1) : j === ".." ? (S.splice(v, 1), C++) : C && (S.splice(v, 1), C--);
  if (!y && !g)
    for (; C--; C)
      S.unshift("..");
  y && S[0] !== "" && (!S[0] || S[0].charAt(0) !== "/") && S.unshift(""), P && S.join("/").substr(-1) !== "/" && S.push("");
  var A = S[0] === "" || S[0] && S[0].charAt(0) === "/";
  if (w) {
    r.hostname = r.host = A ? "" : S.length ? S.shift() : "";
    var x = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
    x && (r.auth = x.shift(), r.host = r.hostname = x.shift());
  }
  return y = y || r.host && S.length, y && !A && S.unshift(""), S.length ? r.pathname = S.join("/") : (r.pathname = null, r.path = null), (!Ht.isNull(r.pathname) || !Ht.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
};
bt.prototype.parseHost = function() {
  var e = this.host, t = vC.exec(e);
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
      function n(v) {
        return v && DataView.prototype.isPrototypeOf(v);
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
        ], s = ArrayBuffer.isView || function(v) {
          return v && i.indexOf(Object.prototype.toString.call(v)) > -1;
        };
      function o(v) {
        if (typeof v != "string" && (v = String(v)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(v))
          throw new TypeError("Invalid character in header field name");
        return v.toLowerCase();
      }
      function a(v) {
        return typeof v != "string" && (v = String(v)), v;
      }
      function c(v) {
        var A = {
          next: function() {
            var T = v.shift();
            return { done: T === void 0, value: T };
          }
        };
        return r.iterable && (A[Symbol.iterator] = function() {
          return A;
        }), A;
      }
      function l(v) {
        this.map = {}, v instanceof l ? v.forEach(function(A, T) {
          this.append(T, A);
        }, this) : Array.isArray(v) ? v.forEach(function(A) {
          this.append(A[0], A[1]);
        }, this) : v && Object.getOwnPropertyNames(v).forEach(function(A) {
          this.append(A, v[A]);
        }, this);
      }
      l.prototype.append = function(v, A) {
        v = o(v), A = a(A);
        var T = this.map[v];
        this.map[v] = T ? T + ", " + A : A;
      }, l.prototype.delete = function(v) {
        delete this.map[o(v)];
      }, l.prototype.get = function(v) {
        return v = o(v), this.has(v) ? this.map[v] : null;
      }, l.prototype.has = function(v) {
        return this.map.hasOwnProperty(o(v));
      }, l.prototype.set = function(v, A) {
        this.map[o(v)] = a(A);
      }, l.prototype.forEach = function(v, A) {
        for (var T in this.map)
          this.map.hasOwnProperty(T) && v.call(A, this.map[T], T, this);
      }, l.prototype.keys = function() {
        var v = [];
        return this.forEach(function(A, T) {
          v.push(T);
        }), c(v);
      }, l.prototype.values = function() {
        var v = [];
        return this.forEach(function(A) {
          v.push(A);
        }), c(v);
      }, l.prototype.entries = function() {
        var v = [];
        return this.forEach(function(A, T) {
          v.push([T, A]);
        }), c(v);
      }, r.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
      function u(v) {
        if (v.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        v.bodyUsed = !0;
      }
      function f(v) {
        return new Promise(function(A, T) {
          v.onload = function() {
            A(v.result);
          }, v.onerror = function() {
            T(v.error);
          };
        });
      }
      function p(v) {
        var A = new FileReader(), T = f(A);
        return A.readAsArrayBuffer(v), T;
      }
      function h(v) {
        var A = new FileReader(), T = f(A);
        return A.readAsText(v), T;
      }
      function d(v) {
        for (var A = new Uint8Array(v), T = new Array(A.length), R = 0; R < A.length; R++)
          T[R] = String.fromCharCode(A[R]);
        return T.join("");
      }
      function m(v) {
        if (v.slice)
          return v.slice(0);
        var A = new Uint8Array(v.byteLength);
        return A.set(new Uint8Array(v)), A.buffer;
      }
      function y() {
        return this.bodyUsed = !1, this._initBody = function(v) {
          this._bodyInit = v, v ? typeof v == "string" ? this._bodyText = v : r.blob && Blob.prototype.isPrototypeOf(v) ? this._bodyBlob = v : r.formData && FormData.prototype.isPrototypeOf(v) ? this._bodyFormData = v : r.searchParams && URLSearchParams.prototype.isPrototypeOf(v) ? this._bodyText = v.toString() : r.arrayBuffer && r.blob && n(v) ? (this._bodyArrayBuffer = m(v.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : r.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(v) || s(v)) ? this._bodyArrayBuffer = m(v) : this._bodyText = v = Object.prototype.toString.call(v) : this._bodyText = "", this.headers.get("content-type") || (typeof v == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r.searchParams && URLSearchParams.prototype.isPrototypeOf(v) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, r.blob && (this.blob = function() {
          var v = u(this);
          if (v)
            return v;
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
          var v = u(this);
          if (v)
            return v;
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
      var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function S(v) {
        var A = v.toUpperCase();
        return g.indexOf(A) > -1 ? A : v;
      }
      function $(v, A) {
        A = A || {};
        var T = A.body;
        if (v instanceof $) {
          if (v.bodyUsed)
            throw new TypeError("Already read");
          this.url = v.url, this.credentials = v.credentials, A.headers || (this.headers = new l(v.headers)), this.method = v.method, this.mode = v.mode, this.signal = v.signal, !T && v._bodyInit != null && (T = v._bodyInit, v.bodyUsed = !0);
        } else
          this.url = String(v);
        if (this.credentials = A.credentials || this.credentials || "same-origin", (A.headers || !this.headers) && (this.headers = new l(A.headers)), this.method = S(A.method || this.method || "GET"), this.mode = A.mode || this.mode || null, this.signal = A.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && T)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(T);
      }
      $.prototype.clone = function() {
        return new $(this, { body: this._bodyInit });
      };
      function w(v) {
        var A = new FormData();
        return v.trim().split("&").forEach(function(T) {
          if (T) {
            var R = T.split("="), k = R.shift().replace(/\+/g, " "), H = R.join("=").replace(/\+/g, " ");
            A.append(decodeURIComponent(k), decodeURIComponent(H));
          }
        }), A;
      }
      function x(v) {
        var A = new l(), T = v.replace(/\r?\n[\t ]+/g, " ");
        return T.split(/\r?\n/).forEach(function(R) {
          var k = R.split(":"), H = k.shift().trim();
          if (H) {
            var de = k.join(":").trim();
            A.append(H, de);
          }
        }), A;
      }
      y.call($.prototype);
      function j(v, A) {
        A || (A = {}), this.type = "default", this.status = A.status === void 0 ? 200 : A.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in A ? A.statusText : "OK", this.headers = new l(A.headers), this.url = A.url || "", this._initBody(v);
      }
      y.call(j.prototype), j.prototype.clone = function() {
        return new j(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new l(this.headers),
          url: this.url
        });
      }, j.error = function() {
        var v = new j(null, { status: 0, statusText: "" });
        return v.type = "error", v;
      };
      var P = [301, 302, 303, 307, 308];
      j.redirect = function(v, A) {
        if (P.indexOf(A) === -1)
          throw new RangeError("Invalid status code");
        return new j(null, { status: A, headers: { location: v } });
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
      function C(v, A) {
        return new Promise(function(T, R) {
          var k = new $(v, A);
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
              headers: x(H.getAllResponseHeaders() || "")
            };
            ve.url = "responseURL" in H ? H.responseURL : ve.headers.get("X-Request-URL");
            var ne = "response" in H ? H.response : H.responseText;
            T(new j(ne, ve));
          }, H.onerror = function() {
            R(new TypeError("Network request failed"));
          }, H.ontimeout = function() {
            R(new TypeError("Network request failed"));
          }, H.onabort = function() {
            R(new t.DOMException("Aborted", "AbortError"));
          }, H.open(k.method, k.url, !0), k.credentials === "include" ? H.withCredentials = !0 : k.credentials === "omit" && (H.withCredentials = !1), "responseType" in H && r.blob && (H.responseType = "blob"), k.headers.forEach(function(ve, ne) {
            H.setRequestHeader(ne, ve);
          }), k.signal && (k.signal.addEventListener("abort", de), H.onreadystatechange = function() {
            H.readyState === 4 && k.signal.removeEventListener("abort", de);
          }), H.send(typeof k._bodyInit > "u" ? null : k._bodyInit);
        });
      }
      return C.polyfill = !0, e.fetch || (e.fetch = C, e.Headers = l, e.Request = $, e.Response = j), t.Headers = l, t.Request = $, t.Response = j, t.fetch = C, Object.defineProperty(t, "__esModule", { value: !0 }), t;
    })({});
  })(typeof self < "u" ? self : Jt);
})();
var AC = function() {
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
}, lv = typeof Symbol < "u" && Symbol, jC = AC, TC = function() {
  return typeof lv != "function" || typeof Symbol != "function" || typeof lv("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : jC();
}, _C = "Function.prototype.bind called on incompatible ", Zu = Array.prototype.slice, IC = Object.prototype.toString, RC = "[object Function]", FC = function(t) {
  var r = this;
  if (typeof r != "function" || IC.call(r) !== RC)
    throw new TypeError(_C + r);
  for (var n = Zu.call(arguments, 1), i, s = function() {
    if (this instanceof i) {
      var u = r.apply(
        this,
        n.concat(Zu.call(arguments))
      );
      return Object(u) === u ? u : this;
    } else
      return r.apply(
        t,
        n.concat(Zu.call(arguments))
      );
  }, o = Math.max(0, r.length - n.length), a = [], c = 0; c < o; c++)
    a.push("$" + c);
  if (i = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(s), r.prototype) {
    var l = function() {
    };
    l.prototype = r.prototype, i.prototype = new l(), l.prototype = null;
  }
  return i;
}, VC = FC, ud = Function.prototype.bind || VC, CC = ud, MC = CC.call(Function.call, Object.prototype.hasOwnProperty), X, ii = SyntaxError, bO = Function, ei = TypeError, ef = function(e) {
  try {
    return bO('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, dn = Object.getOwnPropertyDescriptor;
if (dn)
  try {
    dn({}, "");
  } catch {
    dn = null;
  }
var tf = function() {
  throw new ei();
}, kC = dn ? function() {
  try {
    return arguments.callee, tf;
  } catch {
    try {
      return dn(arguments, "callee").get;
    } catch {
      return tf;
    }
  }
}() : tf, Cn = TC(), Kt = Object.getPrototypeOf || function(e) {
  return e.__proto__;
}, Un = {}, NC = typeof Uint8Array > "u" ? X : Kt(Uint8Array), mn = {
  "%AggregateError%": typeof AggregateError > "u" ? X : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? X : ArrayBuffer,
  "%ArrayIteratorPrototype%": Cn ? Kt([][Symbol.iterator]()) : X,
  "%AsyncFromSyncIteratorPrototype%": X,
  "%AsyncFunction%": Un,
  "%AsyncGenerator%": Un,
  "%AsyncGeneratorFunction%": Un,
  "%AsyncIteratorPrototype%": Un,
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
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? X : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? X : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? X : FinalizationRegistry,
  "%Function%": bO,
  "%GeneratorFunction%": Un,
  "%Int8Array%": typeof Int8Array > "u" ? X : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? X : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? X : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Cn ? Kt(Kt([][Symbol.iterator]())) : X,
  "%JSON%": typeof JSON == "object" ? JSON : X,
  "%Map%": typeof Map > "u" ? X : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Cn ? X : Kt((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? X : Promise,
  "%Proxy%": typeof Proxy > "u" ? X : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? X : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? X : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Cn ? X : Kt((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? X : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Cn ? Kt(""[Symbol.iterator]()) : X,
  "%Symbol%": Cn ? Symbol : X,
  "%SyntaxError%": ii,
  "%ThrowTypeError%": kC,
  "%TypedArray%": NC,
  "%TypeError%": ei,
  "%Uint8Array%": typeof Uint8Array > "u" ? X : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? X : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? X : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? X : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? X : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? X : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? X : WeakSet
};
try {
  null.error;
} catch (e) {
  var DC = Kt(Kt(e));
  mn["%Error.prototype%"] = DC;
}
var LC = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = ef("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = ef("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = ef("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && (r = Kt(i.prototype));
  }
  return mn[t] = r, r;
}, uv = {
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
}, qs = ud, $a = MC, BC = qs.call(Function.call, Array.prototype.concat), UC = qs.call(Function.apply, Array.prototype.splice), fv = qs.call(Function.call, String.prototype.replace), Oa = qs.call(Function.call, String.prototype.slice), qC = qs.call(Function.call, RegExp.prototype.exec), HC = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, KC = /\\(\\)?/g, GC = function(t) {
  var r = Oa(t, 0, 1), n = Oa(t, -1);
  if (r === "%" && n !== "%")
    throw new ii("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new ii("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return fv(t, HC, function(s, o, a, c) {
    i[i.length] = a ? fv(c, KC, "$1") : o || s;
  }), i;
}, JC = function(t, r) {
  var n = t, i;
  if ($a(uv, n) && (i = uv[n], n = "%" + i[0] + "%"), $a(mn, n)) {
    var s = mn[n];
    if (s === Un && (s = LC(n)), typeof s > "u" && !r)
      throw new ei("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: s
    };
  }
  throw new ii("intrinsic " + t + " does not exist!");
}, fd = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new ei("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new ei('"allowMissing" argument must be a boolean');
  if (qC(/^%?[^%]*%?$/, t) === null)
    throw new ii("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = GC(t), i = n.length > 0 ? n[0] : "", s = JC("%" + i + "%", r), o = s.name, a = s.value, c = !1, l = s.alias;
  l && (i = l[0], UC(n, BC([0, 1], l)));
  for (var u = 1, f = !0; u < n.length; u += 1) {
    var p = n[u], h = Oa(p, 0, 1), d = Oa(p, -1);
    if ((h === '"' || h === "'" || h === "`" || d === '"' || d === "'" || d === "`") && h !== d)
      throw new ii("property names with quotes must have matching quotes");
    if ((p === "constructor" || !f) && (c = !0), i += "." + p, o = "%" + i + "%", $a(mn, o))
      a = mn[o];
    else if (a != null) {
      if (!(p in a)) {
        if (!r)
          throw new ei("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (dn && u + 1 >= n.length) {
        var m = dn(a, p);
        f = !!m, f && "get" in m && !("originalValue" in m.get) ? a = m.get : a = a[p];
      } else
        f = $a(a, p), a = a[p];
      f && !c && (mn[o] = a);
    }
  }
  return a;
}, Sp = {}, WC = {
  get exports() {
    return Sp;
  },
  set exports(e) {
    Sp = e;
  }
};
(function(e) {
  var t = ud, r = fd, n = r("%Function.prototype.apply%"), i = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || t.call(i, n), o = r("%Object.getOwnPropertyDescriptor%", !0), a = r("%Object.defineProperty%", !0), c = r("%Math.max%");
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
})(WC);
var $O = fd, OO = Sp, zC = OO($O("String.prototype.indexOf")), YC = function(t, r) {
  var n = $O(t, !!r);
  return typeof n == "function" && zC(t, ".prototype.") > -1 ? OO(n) : n;
};
const XC = {}, QC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: XC
}, Symbol.toStringTag, { value: "Module" })), ZC = /* @__PURE__ */ Vb(QC);
var pd = typeof Map == "function" && Map.prototype, rf = Object.getOwnPropertyDescriptor && pd ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Sa = pd && rf && typeof rf.get == "function" ? rf.get : null, pv = pd && Map.prototype.forEach, hd = typeof Set == "function" && Set.prototype, nf = Object.getOwnPropertyDescriptor && hd ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, wa = hd && nf && typeof nf.get == "function" ? nf.get : null, hv = hd && Set.prototype.forEach, eM = typeof WeakMap == "function" && WeakMap.prototype, es = eM ? WeakMap.prototype.has : null, tM = typeof WeakSet == "function" && WeakSet.prototype, ts = tM ? WeakSet.prototype.has : null, rM = typeof WeakRef == "function" && WeakRef.prototype, dv = rM ? WeakRef.prototype.deref : null, nM = Boolean.prototype.valueOf, iM = Object.prototype.toString, sM = Function.prototype.toString, oM = String.prototype.match, dd = String.prototype.slice, Rr = String.prototype.replace, aM = String.prototype.toUpperCase, mv = String.prototype.toLowerCase, SO = RegExp.prototype.test, yv = Array.prototype.concat, Gt = Array.prototype.join, cM = Array.prototype.slice, vv = Math.floor, wp = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, sf = Object.getOwnPropertySymbols, xp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, si = typeof Symbol == "function" && typeof Symbol.iterator == "object", Ue = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === si || "symbol") ? Symbol.toStringTag : null, wO = Object.prototype.propertyIsEnumerable, gv = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function bv(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || SO.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -vv(-e) : vv(e);
    if (n !== e) {
      var i = String(n), s = dd.call(t, i.length + 1);
      return Rr.call(i, r, "$&_") + "." + Rr.call(Rr.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Rr.call(t, r, "$&_");
}
var Ep = ZC, $v = Ep.custom, Ov = EO($v) ? $v : null, lM = function e(t, r, n, i) {
  var s = r || {};
  if (jr(s, "quoteStyle") && s.quoteStyle !== "single" && s.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (jr(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = jr(s, "customInspect") ? s.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (jr(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (jr(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = s.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return AO(t, s);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var c = String(t);
    return a ? bv(t, c) : c;
  }
  if (typeof t == "bigint") {
    var l = String(t) + "n";
    return a ? bv(t, l) : l;
  }
  var u = typeof s.depth > "u" ? 5 : s.depth;
  if (typeof n > "u" && (n = 0), n >= u && u > 0 && typeof t == "object")
    return Pp(t) ? "[Array]" : "[Object]";
  var f = AM(s, n);
  if (typeof i > "u")
    i = [];
  else if (PO(i, t) >= 0)
    return "[Circular]";
  function p(k, H, de) {
    if (H && (i = cM.call(i), i.push(H)), de) {
      var ve = {
        depth: s.depth
      };
      return jr(s, "quoteStyle") && (ve.quoteStyle = s.quoteStyle), e(k, ve, n + 1, i);
    }
    return e(k, s, n + 1, i);
  }
  if (typeof t == "function" && !Sv(t)) {
    var h = gM(t), d = Ko(t, p);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (d.length > 0 ? " { " + Gt.call(d, ", ") + " }" : "");
  }
  if (EO(t)) {
    var m = si ? Rr.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : xp.call(t);
    return typeof t == "object" && !si ? Ji(m) : m;
  }
  if (xM(t)) {
    for (var y = "<" + mv.call(String(t.nodeName)), g = t.attributes || [], S = 0; S < g.length; S++)
      y += " " + g[S].name + "=" + xO(uM(g[S].value), "double", s);
    return y += ">", t.childNodes && t.childNodes.length && (y += "..."), y += "</" + mv.call(String(t.nodeName)) + ">", y;
  }
  if (Pp(t)) {
    if (t.length === 0)
      return "[]";
    var $ = Ko(t, p);
    return f && !PM($) ? "[" + Ap($, f) + "]" : "[ " + Gt.call($, ", ") + " ]";
  }
  if (pM(t)) {
    var w = Ko(t, p);
    return !("cause" in Error.prototype) && "cause" in t && !wO.call(t, "cause") ? "{ [" + String(t) + "] " + Gt.call(yv.call("[cause]: " + p(t.cause), w), ", ") + " }" : w.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Gt.call(w, ", ") + " }";
  }
  if (typeof t == "object" && o) {
    if (Ov && typeof t[Ov] == "function" && Ep)
      return Ep(t, { depth: u - n });
    if (o !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (bM(t)) {
    var x = [];
    return pv && pv.call(t, function(k, H) {
      x.push(p(H, t, !0) + " => " + p(k, t));
    }), wv("Map", Sa.call(t), x, f);
  }
  if (SM(t)) {
    var j = [];
    return hv && hv.call(t, function(k) {
      j.push(p(k, t));
    }), wv("Set", wa.call(t), j, f);
  }
  if ($M(t))
    return of("WeakMap");
  if (wM(t))
    return of("WeakSet");
  if (OM(t))
    return of("WeakRef");
  if (dM(t))
    return Ji(p(Number(t)));
  if (yM(t))
    return Ji(p(wp.call(t)));
  if (mM(t))
    return Ji(nM.call(t));
  if (hM(t))
    return Ji(p(String(t)));
  if (!fM(t) && !Sv(t)) {
    var P = Ko(t, p), C = gv ? gv(t) === Object.prototype : t instanceof Object || t.constructor === Object, v = t instanceof Object ? "" : "null prototype", A = !C && Ue && Object(t) === t && Ue in t ? dd.call(Gr(t), 8, -1) : v ? "Object" : "", T = C || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", R = T + (A || v ? "[" + Gt.call(yv.call([], A || [], v || []), ": ") + "] " : "");
    return P.length === 0 ? R + "{}" : f ? R + "{" + Ap(P, f) + "}" : R + "{ " + Gt.call(P, ", ") + " }";
  }
  return String(t);
};
function xO(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function uM(e) {
  return Rr.call(String(e), /"/g, "&quot;");
}
function Pp(e) {
  return Gr(e) === "[object Array]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function fM(e) {
  return Gr(e) === "[object Date]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function Sv(e) {
  return Gr(e) === "[object RegExp]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function pM(e) {
  return Gr(e) === "[object Error]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function hM(e) {
  return Gr(e) === "[object String]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function dM(e) {
  return Gr(e) === "[object Number]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function mM(e) {
  return Gr(e) === "[object Boolean]" && (!Ue || !(typeof e == "object" && Ue in e));
}
function EO(e) {
  if (si)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !xp)
    return !1;
  try {
    return xp.call(e), !0;
  } catch {
  }
  return !1;
}
function yM(e) {
  if (!e || typeof e != "object" || !wp)
    return !1;
  try {
    return wp.call(e), !0;
  } catch {
  }
  return !1;
}
var vM = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function jr(e, t) {
  return vM.call(e, t);
}
function Gr(e) {
  return iM.call(e);
}
function gM(e) {
  if (e.name)
    return e.name;
  var t = oM.call(sM.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function PO(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function bM(e) {
  if (!Sa || !e || typeof e != "object")
    return !1;
  try {
    Sa.call(e);
    try {
      wa.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function $M(e) {
  if (!es || !e || typeof e != "object")
    return !1;
  try {
    es.call(e, es);
    try {
      ts.call(e, ts);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function OM(e) {
  if (!dv || !e || typeof e != "object")
    return !1;
  try {
    return dv.call(e), !0;
  } catch {
  }
  return !1;
}
function SM(e) {
  if (!wa || !e || typeof e != "object")
    return !1;
  try {
    wa.call(e);
    try {
      Sa.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function wM(e) {
  if (!ts || !e || typeof e != "object")
    return !1;
  try {
    ts.call(e, ts);
    try {
      es.call(e, es);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function xM(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function AO(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return AO(dd.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = Rr.call(Rr.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, EM);
  return xO(i, "single", t);
}
function EM(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + aM.call(t.toString(16));
}
function Ji(e) {
  return "Object(" + e + ")";
}
function of(e) {
  return e + " { ? }";
}
function wv(e, t, r, n) {
  var i = n ? Ap(r, n) : Gt.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function PM(e) {
  for (var t = 0; t < e.length; t++)
    if (PO(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function AM(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = Gt.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: Gt.call(Array(t + 1), r)
  };
}
function Ap(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + Gt.call(e, "," + r) + `
` + t.prev;
}
function Ko(e, t) {
  var r = Pp(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = jr(e, i) ? t(e[i], e) : "";
  }
  var s = typeof sf == "function" ? sf(e) : [], o;
  if (si) {
    o = {};
    for (var a = 0; a < s.length; a++)
      o["$" + s[a]] = s[a];
  }
  for (var c in e)
    jr(e, c) && (r && String(Number(c)) === c && c < e.length || si && o["$" + c] instanceof Symbol || (SO.call(/[^\w$]/, c) ? n.push(t(c, e) + ": " + t(e[c], e)) : n.push(c + ": " + t(e[c], e))));
  if (typeof sf == "function")
    for (var l = 0; l < s.length; l++)
      wO.call(e, s[l]) && n.push("[" + t(s[l]) + "]: " + t(e[s[l]], e));
  return n;
}
var md = fd, Ei = YC, jM = lM, TM = md("%TypeError%"), Go = md("%WeakMap%", !0), Jo = md("%Map%", !0), _M = Ei("WeakMap.prototype.get", !0), IM = Ei("WeakMap.prototype.set", !0), RM = Ei("WeakMap.prototype.has", !0), FM = Ei("Map.prototype.get", !0), VM = Ei("Map.prototype.set", !0), CM = Ei("Map.prototype.has", !0), yd = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = e.next, e.next = n, n;
}, MM = function(e, t) {
  var r = yd(e, t);
  return r && r.value;
}, kM = function(e, t, r) {
  var n = yd(e, t);
  n ? n.value = r : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: r
  };
}, NM = function(e, t) {
  return !!yd(e, t);
}, DM = function() {
  var t, r, n, i = {
    assert: function(s) {
      if (!i.has(s))
        throw new TM("Side channel does not contain " + jM(s));
    },
    get: function(s) {
      if (Go && s && (typeof s == "object" || typeof s == "function")) {
        if (t)
          return _M(t, s);
      } else if (Jo) {
        if (r)
          return FM(r, s);
      } else if (n)
        return MM(n, s);
    },
    has: function(s) {
      if (Go && s && (typeof s == "object" || typeof s == "function")) {
        if (t)
          return RM(t, s);
      } else if (Jo) {
        if (r)
          return CM(r, s);
      } else if (n)
        return NM(n, s);
      return !1;
    },
    set: function(s, o) {
      Go && s && (typeof s == "object" || typeof s == "function") ? (t || (t = new Go()), IM(t, s, o)) : Jo ? (r || (r = new Jo()), VM(r, s, o)) : (n || (n = { key: {}, next: null }), kM(n, s, o));
    }
  };
  return i;
}, LM = String.prototype.replace, BM = /%20/g, af = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, vd = {
  default: af.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return LM.call(e, BM, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: af.RFC1738,
  RFC3986: af.RFC3986
}, UM = vd, cf = Object.prototype.hasOwnProperty, ln = Array.isArray, Bt = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), qM = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (ln(n)) {
      for (var i = [], s = 0; s < n.length; ++s)
        typeof n[s] < "u" && i.push(n[s]);
      r.obj[r.prop] = i;
    }
  }
}, jO = function(t, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, HM = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (ln(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !cf.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return ln(t) && !ln(r) && (i = jO(t, n)), ln(t) && ln(r) ? (r.forEach(function(s, o) {
    if (cf.call(t, o)) {
      var a = t[o];
      a && typeof a == "object" && s && typeof s == "object" ? t[o] = e(a, s, n) : t.push(s);
    } else
      t[o] = s;
  }), t) : Object.keys(r).reduce(function(s, o) {
    var a = r[o];
    return cf.call(s, o) ? s[o] = e(s[o], a, n) : s[o] = a, s;
  }, i);
}, KM = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, GM = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, JM = function(t, r, n, i, s) {
  if (t.length === 0)
    return t;
  var o = t;
  if (typeof t == "symbol" ? o = Symbol.prototype.toString.call(t) : typeof t != "string" && (o = String(t)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(u) {
      return "%26%23" + parseInt(u.slice(2), 16) + "%3B";
    });
  for (var a = "", c = 0; c < o.length; ++c) {
    var l = o.charCodeAt(c);
    if (l === 45 || l === 46 || l === 95 || l === 126 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || s === UM.RFC1738 && (l === 40 || l === 41)) {
      a += o.charAt(c);
      continue;
    }
    if (l < 128) {
      a = a + Bt[l];
      continue;
    }
    if (l < 2048) {
      a = a + (Bt[192 | l >> 6] + Bt[128 | l & 63]);
      continue;
    }
    if (l < 55296 || l >= 57344) {
      a = a + (Bt[224 | l >> 12] + Bt[128 | l >> 6 & 63] + Bt[128 | l & 63]);
      continue;
    }
    c += 1, l = 65536 + ((l & 1023) << 10 | o.charCodeAt(c) & 1023), a += Bt[240 | l >> 18] + Bt[128 | l >> 12 & 63] + Bt[128 | l >> 6 & 63] + Bt[128 | l & 63];
  }
  return a;
}, WM = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var s = r[i], o = s.obj[s.prop], a = Object.keys(o), c = 0; c < a.length; ++c) {
      var l = a[c], u = o[l];
      typeof u == "object" && u !== null && n.indexOf(u) === -1 && (r.push({ obj: o, prop: l }), n.push(u));
    }
  return qM(r), t;
}, zM = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, YM = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, XM = function(t, r) {
  return [].concat(t, r);
}, QM = function(t, r) {
  if (ln(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, TO = {
  arrayToObject: jO,
  assign: KM,
  combine: XM,
  compact: WM,
  decode: GM,
  encode: JM,
  isBuffer: YM,
  isRegExp: zM,
  maybeMap: QM,
  merge: HM
}, _O = DM, na = TO, rs = vd, ZM = Object.prototype.hasOwnProperty, xv = {
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
}, ir = Array.isArray, ek = Array.prototype.push, IO = function(e, t) {
  ek.apply(e, ir(t) ? t : [t]);
}, tk = Date.prototype.toISOString, Ev = rs.default, Le = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: na.encode,
  encodeValuesOnly: !1,
  format: Ev,
  formatter: rs.formatters[Ev],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return tk.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, rk = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, lf = {}, nk = function e(t, r, n, i, s, o, a, c, l, u, f, p, h, d, m, y) {
  for (var g = t, S = y, $ = 0, w = !1; (S = S.get(lf)) !== void 0 && !w; ) {
    var x = S.get(t);
    if ($ += 1, typeof x < "u") {
      if (x === $)
        throw new RangeError("Cyclic object value");
      w = !0;
    }
    typeof S.get(lf) > "u" && ($ = 0);
  }
  if (typeof c == "function" ? g = c(r, g) : g instanceof Date ? g = f(g) : n === "comma" && ir(g) && (g = na.maybeMap(g, function(ve) {
    return ve instanceof Date ? f(ve) : ve;
  })), g === null) {
    if (s)
      return a && !d ? a(r, Le.encoder, m, "key", p) : r;
    g = "";
  }
  if (rk(g) || na.isBuffer(g)) {
    if (a) {
      var j = d ? r : a(r, Le.encoder, m, "key", p);
      return [h(j) + "=" + h(a(g, Le.encoder, m, "value", p))];
    }
    return [h(r) + "=" + h(String(g))];
  }
  var P = [];
  if (typeof g > "u")
    return P;
  var C;
  if (n === "comma" && ir(g))
    d && a && (g = na.maybeMap(g, a)), C = [{ value: g.length > 0 ? g.join(",") || null : void 0 }];
  else if (ir(c))
    C = c;
  else {
    var v = Object.keys(g);
    C = l ? v.sort(l) : v;
  }
  for (var A = i && ir(g) && g.length === 1 ? r + "[]" : r, T = 0; T < C.length; ++T) {
    var R = C[T], k = typeof R == "object" && typeof R.value < "u" ? R.value : g[R];
    if (!(o && k === null)) {
      var H = ir(g) ? typeof n == "function" ? n(A, R) : A : A + (u ? "." + R : "[" + R + "]");
      y.set(t, $);
      var de = _O();
      de.set(lf, y), IO(P, e(
        k,
        H,
        n,
        i,
        s,
        o,
        n === "comma" && d && ir(g) ? null : a,
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
}, ik = function(t) {
  if (!t)
    return Le;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || Le.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = rs.default;
  if (typeof t.format < "u") {
    if (!ZM.call(rs.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = rs.formatters[n], s = Le.filter;
  return (typeof t.filter == "function" || ir(t.filter)) && (s = t.filter), {
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
}, sk = function(e, t) {
  var r = e, n = ik(t), i, s;
  typeof n.filter == "function" ? (s = n.filter, r = s("", r)) : ir(n.filter) && (s = n.filter, i = s);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var a;
  t && t.arrayFormat in xv ? a = t.arrayFormat : t && "indices" in t ? a = t.indices ? "indices" : "repeat" : a = "indices";
  var c = xv[a];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var l = c === "comma" && t && t.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var u = _O(), f = 0; f < i.length; ++f) {
    var p = i[f];
    n.skipNulls && r[p] === null || IO(o, nk(
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
}, oi = TO, jp = Object.prototype.hasOwnProperty, ok = Array.isArray, je = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: oi.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, ak = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, RO = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, ck = "utf8=%26%2310003%3B", lk = "utf8=%E2%9C%93", uk = function(t, r) {
  var n = {}, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, s = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, s), a = -1, c, l = r.charset;
  if (r.charsetSentinel)
    for (c = 0; c < o.length; ++c)
      o[c].indexOf("utf8=") === 0 && (o[c] === lk ? l = "utf-8" : o[c] === ck && (l = "iso-8859-1"), a = c, c = o.length);
  for (c = 0; c < o.length; ++c)
    if (c !== a) {
      var u = o[c], f = u.indexOf("]="), p = f === -1 ? u.indexOf("=") : f + 1, h, d;
      p === -1 ? (h = r.decoder(u, je.decoder, l, "key"), d = r.strictNullHandling ? null : "") : (h = r.decoder(u.slice(0, p), je.decoder, l, "key"), d = oi.maybeMap(
        RO(u.slice(p + 1), r),
        function(m) {
          return r.decoder(m, je.decoder, l, "value");
        }
      )), d && r.interpretNumericEntities && l === "iso-8859-1" && (d = ak(d)), u.indexOf("[]=") > -1 && (d = ok(d) ? [d] : d), jp.call(n, h) ? n[h] = oi.combine(n[h], d) : n[h] = d;
    }
  return n;
}, fk = function(e, t, r, n) {
  for (var i = n ? t : RO(t, r), s = e.length - 1; s >= 0; --s) {
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
}, pk = function(t, r, n, i) {
  if (t) {
    var s = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, c = n.depth > 0 && o.exec(s), l = c ? s.slice(0, c.index) : s, u = [];
    if (l) {
      if (!n.plainObjects && jp.call(Object.prototype, l) && !n.allowPrototypes)
        return;
      u.push(l);
    }
    for (var f = 0; n.depth > 0 && (c = a.exec(s)) !== null && f < n.depth; ) {
      if (f += 1, !n.plainObjects && jp.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      u.push(c[1]);
    }
    return c && u.push("[" + s.slice(c.index) + "]"), fk(u, r, n, i);
  }
}, hk = function(t) {
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
    delimiter: typeof t.delimiter == "string" || oi.isRegExp(t.delimiter) ? t.delimiter : je.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : je.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : je.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : je.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : je.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : je.strictNullHandling
  };
}, dk = function(e, t) {
  var r = hk(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? uk(e, r) : e, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = Object.keys(n), o = 0; o < s.length; ++o) {
    var a = s[o], c = pk(a, n[a], r, typeof e == "string");
    i = oi.merge(i, c, r);
  }
  return r.allowSparse === !0 ? i : oi.compact(i);
}, mk = sk, yk = dk, vk = vd, Tp = {
  formats: vk,
  parse: yk,
  stringify: mk
};
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function FO(e) {
  return typeof e > "u" || e === null;
}
function gk(e) {
  return typeof e == "object" && e !== null;
}
function bk(e) {
  return Array.isArray(e) ? e : FO(e) ? [] : [e];
}
function $k(e, t) {
  var r, n, i, s;
  if (t)
    for (s = Object.keys(t), r = 0, n = s.length; r < n; r += 1)
      i = s[r], e[i] = t[i];
  return e;
}
function Ok(e, t) {
  var r = "", n;
  for (n = 0; n < t; n += 1)
    r += e;
  return r;
}
function Sk(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
var wk = FO, xk = gk, Ek = bk, Pk = Ok, Ak = Sk, jk = $k, Ee = {
  isNothing: wk,
  isObject: xk,
  toArray: Ek,
  repeat: Pk,
  isNegativeZero: Ak,
  extend: jk
};
function VO(e, t) {
  var r = "", n = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), n + " " + r) : n;
}
function ms(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = VO(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
ms.prototype = Object.create(Error.prototype);
ms.prototype.constructor = ms;
ms.prototype.toString = function(t) {
  return this.name + ": " + VO(this, t);
};
var Ge = ms;
function uf(e, t, r, n, i) {
  var s = "", o = "", a = Math.floor(i / 2) - 1;
  return n - t > a && (s = " ... ", t = n - a + s.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: s + e.slice(t, r).replace(/\t/g, "→") + o,
    pos: n - t + s.length
    // relative position
  };
}
function ff(e, t) {
  return Ee.repeat(" ", t - e.length) + e;
}
function Tk(e, t) {
  if (t = Object.create(t || null), !e.buffer)
    return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], i = [], s, o = -1; s = r.exec(e.buffer); )
    i.push(s.index), n.push(s.index + s[0].length), e.position <= s.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, l, u = Math.min(e.line + t.linesAfter, i.length).toString().length, f = t.maxLength - (t.indent + u + 3);
  for (c = 1; c <= t.linesBefore && !(o - c < 0); c++)
    l = uf(
      e.buffer,
      n[o - c],
      i[o - c],
      e.position - (n[o] - n[o - c]),
      f
    ), a = Ee.repeat(" ", t.indent) + ff((e.line - c + 1).toString(), u) + " | " + l.str + `
` + a;
  for (l = uf(e.buffer, n[o], i[o], e.position, f), a += Ee.repeat(" ", t.indent) + ff((e.line + 1).toString(), u) + " | " + l.str + `
`, a += Ee.repeat("-", t.indent + u + 3 + l.pos) + `^
`, c = 1; c <= t.linesAfter && !(o + c >= i.length); c++)
    l = uf(
      e.buffer,
      n[o + c],
      i[o + c],
      e.position - (n[o] - n[o + c]),
      f
    ), a += Ee.repeat(" ", t.indent) + ff((e.line + c + 1).toString(), u) + " | " + l.str + `
`;
  return a.replace(/\n$/, "");
}
var _k = Tk, Ik = [
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
], Rk = [
  "scalar",
  "sequence",
  "mapping"
];
function Fk(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(n) {
      t[String(n)] = r;
    });
  }), t;
}
function Vk(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if (Ik.indexOf(r) === -1)
      throw new Ge('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = Fk(t.styleAliases || null), Rk.indexOf(this.kind) === -1)
    throw new Ge('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
var ke = Vk;
function Pv(e, t) {
  var r = [];
  return e[t].forEach(function(n) {
    var i = r.length;
    r.forEach(function(s, o) {
      s.tag === n.tag && s.kind === n.kind && s.multi === n.multi && (i = o);
    }), r[i] = n;
  }), r;
}
function Ck() {
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
function _p(e) {
  return this.extend(e);
}
_p.prototype.extend = function(t) {
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
  var i = Object.create(_p.prototype);
  return i.implicit = (this.implicit || []).concat(r), i.explicit = (this.explicit || []).concat(n), i.compiledImplicit = Pv(i, "implicit"), i.compiledExplicit = Pv(i, "explicit"), i.compiledTypeMap = Ck(i.compiledImplicit, i.compiledExplicit), i;
};
var CO = _p, MO = new ke("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(e) {
    return e !== null ? e : "";
  }
}), kO = new ke("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(e) {
    return e !== null ? e : [];
  }
}), NO = new ke("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(e) {
    return e !== null ? e : {};
  }
}), DO = new CO({
  explicit: [
    MO,
    kO,
    NO
  ]
});
function Mk(e) {
  if (e === null)
    return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
function kk() {
  return null;
}
function Nk(e) {
  return e === null;
}
var LO = new ke("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Mk,
  construct: kk,
  predicate: Nk,
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
function Dk(e) {
  if (e === null)
    return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
function Lk(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
function Bk(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
var BO = new ke("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Dk,
  construct: Lk,
  predicate: Bk,
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
function Uk(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function qk(e) {
  return 48 <= e && e <= 55;
}
function Hk(e) {
  return 48 <= e && e <= 57;
}
function Kk(e) {
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
          if (!Uk(e.charCodeAt(r)))
            return !1;
          n = !0;
        }
      return n && i !== "_";
    }
    if (i === "o") {
      for (r++; r < t; r++)
        if (i = e[r], i !== "_") {
          if (!qk(e.charCodeAt(r)))
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
      if (!Hk(e.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || i === "_");
}
function Gk(e) {
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
function Jk(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !Ee.isNegativeZero(e);
}
var UO = new ke("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Kk,
  construct: Gk,
  predicate: Jk,
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
}), Wk = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function zk(e) {
  return !(e === null || !Wk.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
function Yk(e) {
  var t, r;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
var Xk = /^[-+]?[0-9]+e/;
function Qk(e, t) {
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
  return r = e.toString(10), Xk.test(r) ? r.replace("e", ".e") : r;
}
function Zk(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || Ee.isNegativeZero(e));
}
var qO = new ke("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: zk,
  construct: Yk,
  predicate: Zk,
  represent: Qk,
  defaultStyle: "lowercase"
}), HO = DO.extend({
  implicit: [
    LO,
    BO,
    UO,
    qO
  ]
}), KO = HO, GO = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), JO = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function eN(e) {
  return e === null ? !1 : GO.exec(e) !== null || JO.exec(e) !== null;
}
function tN(e) {
  var t, r, n, i, s, o, a, c = 0, l = null, u, f, p;
  if (t = GO.exec(e), t === null && (t = JO.exec(e)), t === null)
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
function rN(e) {
  return e.toISOString();
}
var WO = new ke("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: eN,
  construct: tN,
  instanceOf: Date,
  represent: rN
});
function nN(e) {
  return e === "<<" || e === null;
}
var zO = new ke("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: nN
}), gd = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function iN(e) {
  if (e === null)
    return !1;
  var t, r, n = 0, i = e.length, s = gd;
  for (r = 0; r < i; r++)
    if (t = s.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0)
        return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function sN(e) {
  var t, r, n = e.replace(/[\r\n=]/g, ""), i = n.length, s = gd, o = 0, a = [];
  for (t = 0; t < i; t++)
    t % 4 === 0 && t && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | s.indexOf(n.charAt(t));
  return r = i % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function oN(e) {
  var t = "", r = 0, n, i, s = e.length, o = gd;
  for (n = 0; n < s; n++)
    n % 3 === 0 && n && (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]), r = (r << 8) + e[n];
  return i = s % 3, i === 0 ? (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]) : i === 2 ? (t += o[r >> 10 & 63], t += o[r >> 4 & 63], t += o[r << 2 & 63], t += o[64]) : i === 1 && (t += o[r >> 2 & 63], t += o[r << 4 & 63], t += o[64], t += o[64]), t;
}
function aN(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
var YO = new ke("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: iN,
  construct: sN,
  predicate: aN,
  represent: oN
}), cN = Object.prototype.hasOwnProperty, lN = Object.prototype.toString;
function uN(e) {
  if (e === null)
    return !0;
  var t = [], r, n, i, s, o, a = e;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (i = a[r], o = !1, lN.call(i) !== "[object Object]")
      return !1;
    for (s in i)
      if (cN.call(i, s))
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
function fN(e) {
  return e !== null ? e : [];
}
var XO = new ke("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: uN,
  construct: fN
}), pN = Object.prototype.toString;
function hN(e) {
  if (e === null)
    return !0;
  var t, r, n, i, s, o = e;
  for (s = new Array(o.length), t = 0, r = o.length; t < r; t += 1) {
    if (n = o[t], pN.call(n) !== "[object Object]" || (i = Object.keys(n), i.length !== 1))
      return !1;
    s[t] = [i[0], n[i[0]]];
  }
  return !0;
}
function dN(e) {
  if (e === null)
    return [];
  var t, r, n, i, s, o = e;
  for (s = new Array(o.length), t = 0, r = o.length; t < r; t += 1)
    n = o[t], i = Object.keys(n), s[t] = [i[0], n[i[0]]];
  return s;
}
var QO = new ke("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: hN,
  construct: dN
}), mN = Object.prototype.hasOwnProperty;
function yN(e) {
  if (e === null)
    return !0;
  var t, r = e;
  for (t in r)
    if (mN.call(r, t) && r[t] !== null)
      return !1;
  return !0;
}
function vN(e) {
  return e !== null ? e : {};
}
var ZO = new ke("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: yN,
  construct: vN
}), bd = KO.extend({
  implicit: [
    WO,
    zO
  ],
  explicit: [
    YO,
    XO,
    QO,
    ZO
  ]
}), Br = Object.prototype.hasOwnProperty, xa = 1, e0 = 2, t0 = 3, Ea = 4, pf = 1, gN = 2, Av = 3, bN = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, $N = /[\x85\u2028\u2029]/, ON = /[,\[\]\{\}]/, r0 = /^(?:!|!!|![a-z\-]+!)$/i, n0 = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function jv(e) {
  return Object.prototype.toString.call(e);
}
function Wt(e) {
  return e === 10 || e === 13;
}
function yn(e) {
  return e === 9 || e === 32;
}
function Qe(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function Kn(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function SN(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
function wN(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function xN(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
function Tv(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function EN(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
var i0 = new Array(256), s0 = new Array(256);
for (var Mn = 0; Mn < 256; Mn++)
  i0[Mn] = Tv(Mn) ? 1 : 0, s0[Mn] = Tv(Mn);
function PN(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || bd, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function o0(e, t) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = _k(r), new Ge(t, r);
}
function L(e, t) {
  throw o0(e, t);
}
function Pa(e, t) {
  e.onWarning && e.onWarning.call(null, o0(e, t));
}
var _v = {
  YAML: function(t, r, n) {
    var i, s, o;
    t.version !== null && L(t, "duplication of %YAML directive"), n.length !== 1 && L(t, "YAML directive accepts exactly one argument"), i = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), i === null && L(t, "ill-formed argument of the YAML directive"), s = parseInt(i[1], 10), o = parseInt(i[2], 10), s !== 1 && L(t, "unacceptable YAML version of the document"), t.version = n[0], t.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Pa(t, "unsupported YAML version of the document");
  },
  TAG: function(t, r, n) {
    var i, s;
    n.length !== 2 && L(t, "TAG directive accepts exactly two arguments"), i = n[0], s = n[1], r0.test(i) || L(t, "ill-formed tag handle (first argument) of the TAG directive"), Br.call(t.tagMap, i) && L(t, 'there is a previously declared suffix for "' + i + '" tag handle'), n0.test(s) || L(t, "ill-formed tag prefix (second argument) of the TAG directive");
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
      bN.test(a) && L(e, "the stream contains non-printable characters");
    e.result += a;
  }
}
function Iv(e, t, r, n) {
  var i, s, o, a;
  for (Ee.isObject(r) || L(e, "cannot merge mappings; the provided source object is unacceptable"), i = Object.keys(r), o = 0, a = i.length; o < a; o += 1)
    s = i[o], Br.call(t, s) || (t[s] = r[s], n[s] = !0);
}
function Gn(e, t, r, n, i, s, o, a, c) {
  var l, u;
  if (Array.isArray(i))
    for (i = Array.prototype.slice.call(i), l = 0, u = i.length; l < u; l += 1)
      Array.isArray(i[l]) && L(e, "nested arrays are not supported inside keys"), typeof i == "object" && jv(i[l]) === "[object Object]" && (i[l] = "[object Object]");
  if (typeof i == "object" && jv(i) === "[object Object]" && (i = "[object Object]"), i = String(i), t === null && (t = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(s))
      for (l = 0, u = s.length; l < u; l += 1)
        Iv(e, t, s[l], r);
    else
      Iv(e, t, s, r);
  else
    !e.json && !Br.call(r, i) && Br.call(t, i) && (e.line = o || e.line, e.lineStart = a || e.lineStart, e.position = c || e.position, L(e, "duplicated mapping key")), i === "__proto__" ? Object.defineProperty(t, i, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: s
    }) : t[i] = s, delete r[i];
  return t;
}
function $d(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : L(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
function Se(e, t, r) {
  for (var n = 0, i = e.input.charCodeAt(e.position); i !== 0; ) {
    for (; yn(i); )
      i === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), i = e.input.charCodeAt(++e.position);
    if (t && i === 35)
      do
        i = e.input.charCodeAt(++e.position);
      while (i !== 10 && i !== 13 && i !== 0);
    if (Wt(i))
      for ($d(e), i = e.input.charCodeAt(e.position), n++, e.lineIndent = 0; i === 32; )
        e.lineIndent++, i = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && e.lineIndent < r && Pa(e, "deficient indentation"), n;
}
function dc(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || Qe(r)));
}
function Od(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += Ee.repeat(`
`, t - 1));
}
function AN(e, t, r) {
  var n, i, s, o, a, c, l, u, f = e.kind, p = e.result, h;
  if (h = e.input.charCodeAt(e.position), Qe(h) || Kn(h) || h === 35 || h === 38 || h === 42 || h === 33 || h === 124 || h === 62 || h === 39 || h === 34 || h === 37 || h === 64 || h === 96 || (h === 63 || h === 45) && (i = e.input.charCodeAt(e.position + 1), Qe(i) || r && Kn(i)))
    return !1;
  for (e.kind = "scalar", e.result = "", s = o = e.position, a = !1; h !== 0; ) {
    if (h === 58) {
      if (i = e.input.charCodeAt(e.position + 1), Qe(i) || r && Kn(i))
        break;
    } else if (h === 35) {
      if (n = e.input.charCodeAt(e.position - 1), Qe(n))
        break;
    } else {
      if (e.position === e.lineStart && dc(e) || r && Kn(h))
        break;
      if (Wt(h))
        if (c = e.line, l = e.lineStart, u = e.lineIndent, Se(e, !1, -1), e.lineIndent >= t) {
          a = !0, h = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = o, e.line = c, e.lineStart = l, e.lineIndent = u;
          break;
        }
    }
    a && (Cr(e, s, o, !1), Od(e, e.line - c), s = o = e.position, a = !1), yn(h) || (o = e.position + 1), h = e.input.charCodeAt(++e.position);
  }
  return Cr(e, s, o, !1), e.result ? !0 : (e.kind = f, e.result = p, !1);
}
function jN(e, t) {
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
      Wt(r) ? (Cr(e, n, i, !0), Od(e, Se(e, !1, t)), n = i = e.position) : e.position === e.lineStart && dc(e) ? L(e, "unexpected end of the document within a single quoted scalar") : (e.position++, i = e.position);
  L(e, "unexpected end of the stream within a single quoted scalar");
}
function TN(e, t) {
  var r, n, i, s, o, a;
  if (a = e.input.charCodeAt(e.position), a !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = n = e.position; (a = e.input.charCodeAt(e.position)) !== 0; ) {
    if (a === 34)
      return Cr(e, r, e.position, !0), e.position++, !0;
    if (a === 92) {
      if (Cr(e, r, e.position, !0), a = e.input.charCodeAt(++e.position), Wt(a))
        Se(e, !1, t);
      else if (a < 256 && i0[a])
        e.result += s0[a], e.position++;
      else if ((o = wN(a)) > 0) {
        for (i = o, s = 0; i > 0; i--)
          a = e.input.charCodeAt(++e.position), (o = SN(a)) >= 0 ? s = (s << 4) + o : L(e, "expected hexadecimal character");
        e.result += EN(s), e.position++;
      } else
        L(e, "unknown escape sequence");
      r = n = e.position;
    } else
      Wt(a) ? (Cr(e, r, n, !0), Od(e, Se(e, !1, t)), r = n = e.position) : e.position === e.lineStart && dc(e) ? L(e, "unexpected end of the document within a double quoted scalar") : (e.position++, n = e.position);
  }
  L(e, "unexpected end of the stream within a double quoted scalar");
}
function _N(e, t) {
  var r = !0, n, i, s, o = e.tag, a, c = e.anchor, l, u, f, p, h, d = /* @__PURE__ */ Object.create(null), m, y, g, S;
  if (S = e.input.charCodeAt(e.position), S === 91)
    u = 93, h = !1, a = [];
  else if (S === 123)
    u = 125, h = !0, a = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = a), S = e.input.charCodeAt(++e.position); S !== 0; ) {
    if (Se(e, !0, t), S = e.input.charCodeAt(e.position), S === u)
      return e.position++, e.tag = o, e.anchor = c, e.kind = h ? "mapping" : "sequence", e.result = a, !0;
    r ? S === 44 && L(e, "expected the node content, but found ','") : L(e, "missed comma between flow collection entries"), y = m = g = null, f = p = !1, S === 63 && (l = e.input.charCodeAt(e.position + 1), Qe(l) && (f = p = !0, e.position++, Se(e, !0, t))), n = e.line, i = e.lineStart, s = e.position, ai(e, t, xa, !1, !0), y = e.tag, m = e.result, Se(e, !0, t), S = e.input.charCodeAt(e.position), (p || e.line === n) && S === 58 && (f = !0, S = e.input.charCodeAt(++e.position), Se(e, !0, t), ai(e, t, xa, !1, !0), g = e.result), h ? Gn(e, a, d, y, m, g, n, i, s) : f ? a.push(Gn(e, null, d, y, m, g, n, i, s)) : a.push(m), Se(e, !0, t), S = e.input.charCodeAt(e.position), S === 44 ? (r = !0, S = e.input.charCodeAt(++e.position)) : r = !1;
  }
  L(e, "unexpected end of the stream within a flow collection");
}
function IN(e, t) {
  var r, n, i = pf, s = !1, o = !1, a = t, c = 0, l = !1, u, f;
  if (f = e.input.charCodeAt(e.position), f === 124)
    n = !1;
  else if (f === 62)
    n = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; f !== 0; )
    if (f = e.input.charCodeAt(++e.position), f === 43 || f === 45)
      pf === i ? i = f === 43 ? Av : gN : L(e, "repeat of a chomping mode identifier");
    else if ((u = xN(f)) >= 0)
      u === 0 ? L(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? L(e, "repeat of an indentation width identifier") : (a = t + u - 1, o = !0);
    else
      break;
  if (yn(f)) {
    do
      f = e.input.charCodeAt(++e.position);
    while (yn(f));
    if (f === 35)
      do
        f = e.input.charCodeAt(++e.position);
      while (!Wt(f) && f !== 0);
  }
  for (; f !== 0; ) {
    for ($d(e), e.lineIndent = 0, f = e.input.charCodeAt(e.position); (!o || e.lineIndent < a) && f === 32; )
      e.lineIndent++, f = e.input.charCodeAt(++e.position);
    if (!o && e.lineIndent > a && (a = e.lineIndent), Wt(f)) {
      c++;
      continue;
    }
    if (e.lineIndent < a) {
      i === Av ? e.result += Ee.repeat(`
`, s ? 1 + c : c) : i === pf && s && (e.result += `
`);
      break;
    }
    for (n ? yn(f) ? (l = !0, e.result += Ee.repeat(`
`, s ? 1 + c : c)) : l ? (l = !1, e.result += Ee.repeat(`
`, c + 1)) : c === 0 ? s && (e.result += " ") : e.result += Ee.repeat(`
`, c) : e.result += Ee.repeat(`
`, s ? 1 + c : c), s = !0, o = !0, c = 0, r = e.position; !Wt(f) && f !== 0; )
      f = e.input.charCodeAt(++e.position);
    Cr(e, r, e.position, !1);
  }
  return !0;
}
function Rv(e, t) {
  var r, n = e.tag, i = e.anchor, s = [], o, a = !1, c;
  if (e.firstTabInLine !== -1)
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = s), c = e.input.charCodeAt(e.position); c !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, L(e, "tab characters must not be used in indentation")), !(c !== 45 || (o = e.input.charCodeAt(e.position + 1), !Qe(o)))); ) {
    if (a = !0, e.position++, Se(e, !0, -1) && e.lineIndent <= t) {
      s.push(null), c = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, ai(e, t, t0, !1, !0), s.push(e.result), Se(e, !0, -1), c = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && c !== 0)
      L(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return a ? (e.tag = n, e.anchor = i, e.kind = "sequence", e.result = s, !0) : !1;
}
function RN(e, t, r) {
  var n, i, s, o, a, c, l = e.tag, u = e.anchor, f = {}, p = /* @__PURE__ */ Object.create(null), h = null, d = null, m = null, y = !1, g = !1, S;
  if (e.firstTabInLine !== -1)
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = f), S = e.input.charCodeAt(e.position); S !== 0; ) {
    if (!y && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, L(e, "tab characters must not be used in indentation")), n = e.input.charCodeAt(e.position + 1), s = e.line, (S === 63 || S === 58) && Qe(n))
      S === 63 ? (y && (Gn(e, f, p, h, d, null, o, a, c), h = d = m = null), g = !0, y = !0, i = !0) : y ? (y = !1, i = !0) : L(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, S = n;
    else {
      if (o = e.line, a = e.lineStart, c = e.position, !ai(e, r, e0, !1, !0))
        break;
      if (e.line === s) {
        for (S = e.input.charCodeAt(e.position); yn(S); )
          S = e.input.charCodeAt(++e.position);
        if (S === 58)
          S = e.input.charCodeAt(++e.position), Qe(S) || L(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (Gn(e, f, p, h, d, null, o, a, c), h = d = m = null), g = !0, y = !1, i = !1, h = e.tag, d = e.result;
        else if (g)
          L(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = l, e.anchor = u, !0;
      } else if (g)
        L(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = l, e.anchor = u, !0;
    }
    if ((e.line === s || e.lineIndent > t) && (y && (o = e.line, a = e.lineStart, c = e.position), ai(e, t, Ea, !0, i) && (y ? d = e.result : m = e.result), y || (Gn(e, f, p, h, d, m, o, a, c), h = d = m = null), Se(e, !0, -1), S = e.input.charCodeAt(e.position)), (e.line === s || e.lineIndent > t) && S !== 0)
      L(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return y && Gn(e, f, p, h, d, null, o, a, c), g && (e.tag = l, e.anchor = u, e.kind = "mapping", e.result = f), g;
}
function FN(e) {
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
      o === 33 && (n ? L(e, "tag suffix cannot contain exclamation marks") : (i = e.input.slice(t - 1, e.position + 1), r0.test(i) || L(e, "named tag handle cannot contain such characters"), n = !0, t = e.position + 1)), o = e.input.charCodeAt(++e.position);
    s = e.input.slice(t, e.position), ON.test(s) && L(e, "tag suffix cannot contain flow indicator characters");
  }
  s && !n0.test(s) && L(e, "tag name cannot contain such characters: " + s);
  try {
    s = decodeURIComponent(s);
  } catch {
    L(e, "tag name is malformed: " + s);
  }
  return r ? e.tag = s : Br.call(e.tagMap, i) ? e.tag = e.tagMap[i] + s : i === "!" ? e.tag = "!" + s : i === "!!" ? e.tag = "tag:yaml.org,2002:" + s : L(e, 'undeclared tag handle "' + i + '"'), !0;
}
function VN(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38)
    return !1;
  for (e.anchor !== null && L(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Qe(r) && !Kn(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && L(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
function CN(e) {
  var t, r, n;
  if (n = e.input.charCodeAt(e.position), n !== 42)
    return !1;
  for (n = e.input.charCodeAt(++e.position), t = e.position; n !== 0 && !Qe(n) && !Kn(n); )
    n = e.input.charCodeAt(++e.position);
  return e.position === t && L(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), Br.call(e.anchorMap, r) || L(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], Se(e, !0, -1), !0;
}
function ai(e, t, r, n, i) {
  var s, o, a, c = 1, l = !1, u = !1, f, p, h, d, m, y;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, s = o = a = Ea === r || t0 === r, n && Se(e, !0, -1) && (l = !0, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1)), c === 1)
    for (; FN(e) || VN(e); )
      Se(e, !0, -1) ? (l = !0, a = s, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1)) : a = !1;
  if (a && (a = l || i), (c === 1 || Ea === r) && (xa === r || e0 === r ? m = t : m = t + 1, y = e.position - e.lineStart, c === 1 ? a && (Rv(e, y) || RN(e, y, m)) || _N(e, m) ? u = !0 : (o && IN(e, m) || jN(e, m) || TN(e, m) ? u = !0 : CN(e) ? (u = !0, (e.tag !== null || e.anchor !== null) && L(e, "alias node should not have any properties")) : AN(e, m, xa === r) && (u = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : c === 0 && (u = a && Rv(e, y))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && L(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), f = 0, p = e.implicitTypes.length; f < p; f += 1)
      if (d = e.implicitTypes[f], d.resolve(e.result)) {
        e.result = d.construct(e.result), e.tag = d.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (Br.call(e.typeMap[e.kind || "fallback"], e.tag))
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
function MN(e) {
  var t = e.position, r, n, i, s = !1, o;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (o = e.input.charCodeAt(e.position)) !== 0 && (Se(e, !0, -1), o = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || o !== 37)); ) {
    for (s = !0, o = e.input.charCodeAt(++e.position), r = e.position; o !== 0 && !Qe(o); )
      o = e.input.charCodeAt(++e.position);
    for (n = e.input.slice(r, e.position), i = [], n.length < 1 && L(e, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; yn(o); )
        o = e.input.charCodeAt(++e.position);
      if (o === 35) {
        do
          o = e.input.charCodeAt(++e.position);
        while (o !== 0 && !Wt(o));
        break;
      }
      if (Wt(o))
        break;
      for (r = e.position; o !== 0 && !Qe(o); )
        o = e.input.charCodeAt(++e.position);
      i.push(e.input.slice(r, e.position));
    }
    o !== 0 && $d(e), Br.call(_v, n) ? _v[n](e, n, i) : Pa(e, 'unknown document directive "' + n + '"');
  }
  if (Se(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, Se(e, !0, -1)) : s && L(e, "directives end mark is expected"), ai(e, e.lineIndent - 1, Ea, !1, !0), Se(e, !0, -1), e.checkLineBreaks && $N.test(e.input.slice(t, e.position)) && Pa(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && dc(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, Se(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    L(e, "end of the stream or a document separator is expected");
  else
    return;
}
function a0(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new PN(e, t), n = e.indexOf("\0");
  for (n !== -1 && (r.position = n, L(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    MN(r);
  return r.documents;
}
function kN(e, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var n = a0(e, r);
  if (typeof t != "function")
    return n;
  for (var i = 0, s = n.length; i < s; i += 1)
    t(n[i]);
}
function NN(e, t) {
  var r = a0(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Ge("expected a single document in the stream, but found more");
  }
}
var DN = kN, LN = NN, c0 = {
  loadAll: DN,
  load: LN
}, l0 = Object.prototype.toString, u0 = Object.prototype.hasOwnProperty, Sd = 65279, BN = 9, ys = 10, UN = 13, qN = 32, HN = 33, KN = 34, Ip = 35, GN = 37, JN = 38, WN = 39, zN = 42, f0 = 44, YN = 45, Aa = 58, XN = 61, QN = 62, ZN = 63, e2 = 64, p0 = 91, h0 = 93, t2 = 96, d0 = 123, r2 = 124, m0 = 125, qe = {};
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
var n2 = [
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
], i2 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function s2(e, t) {
  var r, n, i, s, o, a, c;
  if (t === null)
    return {};
  for (r = {}, n = Object.keys(t), i = 0, s = n.length; i < s; i += 1)
    o = n[i], a = String(t[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = e.compiledTypeMap.fallback[o], c && u0.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function o2(e) {
  var t, r, n;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", n = 2;
  else if (e <= 65535)
    r = "u", n = 4;
  else if (e <= 4294967295)
    r = "U", n = 8;
  else
    throw new Ge("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Ee.repeat("0", n - t.length) + t;
}
var a2 = 1, vs = 2;
function c2(e) {
  this.schema = e.schema || bd, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = Ee.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = s2(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? vs : a2, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function Fv(e, t) {
  for (var r = Ee.repeat(" ", t), n = 0, i = -1, s = "", o, a = e.length; n < a; )
    i = e.indexOf(`
`, n), i === -1 ? (o = e.slice(n), n = a) : (o = e.slice(n, i + 1), n = i + 1), o.length && o !== `
` && (s += r), s += o;
  return s;
}
function Rp(e, t) {
  return `
` + Ee.repeat(" ", e.indent * t);
}
function l2(e, t) {
  var r, n, i;
  for (r = 0, n = e.implicitTypes.length; r < n; r += 1)
    if (i = e.implicitTypes[r], i.resolve(t))
      return !0;
  return !1;
}
function ja(e) {
  return e === qN || e === BN;
}
function gs(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== Sd || 65536 <= e && e <= 1114111;
}
function Vv(e) {
  return gs(e) && e !== Sd && e !== UN && e !== ys;
}
function Cv(e, t, r) {
  var n = Vv(e), i = n && !ja(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && e !== f0 && e !== p0 && e !== h0 && e !== d0 && e !== m0) && e !== Ip && !(t === Aa && !i) || Vv(t) && !ja(t) && e === Ip || t === Aa && i
  );
}
function u2(e) {
  return gs(e) && e !== Sd && !ja(e) && e !== YN && e !== ZN && e !== Aa && e !== f0 && e !== p0 && e !== h0 && e !== d0 && e !== m0 && e !== Ip && e !== JN && e !== zN && e !== HN && e !== r2 && e !== XN && e !== QN && e !== WN && e !== KN && e !== GN && e !== e2 && e !== t2;
}
function f2(e) {
  return !ja(e) && e !== Aa;
}
function Qi(e, t) {
  var r = e.charCodeAt(t), n;
  return r >= 55296 && r <= 56319 && t + 1 < e.length && (n = e.charCodeAt(t + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function y0(e) {
  var t = /^\n* /;
  return t.test(e);
}
var v0 = 1, Fp = 2, g0 = 3, b0 = 4, qn = 5;
function p2(e, t, r, n, i, s, o, a) {
  var c, l = 0, u = null, f = !1, p = !1, h = n !== -1, d = -1, m = u2(Qi(e, 0)) && f2(Qi(e, e.length - 1));
  if (t || o)
    for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
      if (l = Qi(e, c), !gs(l))
        return qn;
      m = m && Cv(l, u, a), u = l;
    }
  else {
    for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
      if (l = Qi(e, c), l === ys)
        f = !0, h && (p = p || // Foldable line = too long, and not more-indented.
        c - d - 1 > n && e[d + 1] !== " ", d = c);
      else if (!gs(l))
        return qn;
      m = m && Cv(l, u, a), u = l;
    }
    p = p || h && c - d - 1 > n && e[d + 1] !== " ";
  }
  return !f && !p ? m && !o && !i(e) ? v0 : s === vs ? qn : Fp : r > 9 && y0(e) ? qn : o ? s === vs ? qn : Fp : p ? b0 : g0;
}
function h2(e, t, r, n, i) {
  e.dump = function() {
    if (t.length === 0)
      return e.quotingType === vs ? '""' : "''";
    if (!e.noCompatMode && (n2.indexOf(t) !== -1 || i2.test(t)))
      return e.quotingType === vs ? '"' + t + '"' : "'" + t + "'";
    var s = e.indent * Math.max(1, r), o = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - s), a = n || e.flowLevel > -1 && r >= e.flowLevel;
    function c(l) {
      return l2(e, l);
    }
    switch (p2(
      t,
      a,
      e.indent,
      o,
      c,
      e.quotingType,
      e.forceQuotes && !n,
      i
    )) {
      case v0:
        return t;
      case Fp:
        return "'" + t.replace(/'/g, "''") + "'";
      case g0:
        return "|" + Mv(t, e.indent) + kv(Fv(t, s));
      case b0:
        return ">" + Mv(t, e.indent) + kv(Fv(d2(t, o), s));
      case qn:
        return '"' + m2(t) + '"';
      default:
        throw new Ge("impossible error: invalid scalar style");
    }
  }();
}
function Mv(e, t) {
  var r = y0(e) ? String(t) : "", n = e[e.length - 1] === `
`, i = n && (e[e.length - 2] === `
` || e === `
`), s = i ? "+" : n ? "" : "-";
  return r + s + `
`;
}
function kv(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
function d2(e, t) {
  for (var r = /(\n+)([^\n]*)/g, n = function() {
    var l = e.indexOf(`
`);
    return l = l !== -1 ? l : e.length, r.lastIndex = l, Nv(e.slice(0, l), t);
  }(), i = e[0] === `
` || e[0] === " ", s, o; o = r.exec(e); ) {
    var a = o[1], c = o[2];
    s = c[0] === " ", n += a + (!i && !s && c !== "" ? `
` : "") + Nv(c, t), i = s;
  }
  return n;
}
function Nv(e, t) {
  if (e === "" || e[0] === " ")
    return e;
  for (var r = / [^ ]/g, n, i = 0, s, o = 0, a = 0, c = ""; n = r.exec(e); )
    a = n.index, a - i > t && (s = o > i ? o : a, c += `
` + e.slice(i, s), i = s + 1), o = a;
  return c += `
`, e.length - i > t && o > i ? c += e.slice(i, o) + `
` + e.slice(o + 1) : c += e.slice(i), c.slice(1);
}
function m2(e) {
  for (var t = "", r = 0, n, i = 0; i < e.length; r >= 65536 ? i += 2 : i++)
    r = Qi(e, i), n = qe[r], !n && gs(r) ? (t += e[i], r >= 65536 && (t += e[i + 1])) : t += n || o2(r);
  return t;
}
function y2(e, t, r) {
  var n = "", i = e.tag, s, o, a;
  for (s = 0, o = r.length; s < o; s += 1)
    a = r[s], e.replacer && (a = e.replacer.call(r, String(s), a)), (fr(e, t, a, !1, !1) || typeof a > "u" && fr(e, t, null, !1, !1)) && (n !== "" && (n += "," + (e.condenseFlow ? "" : " ")), n += e.dump);
  e.tag = i, e.dump = "[" + n + "]";
}
function Dv(e, t, r, n) {
  var i = "", s = e.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], e.replacer && (c = e.replacer.call(r, String(o), c)), (fr(e, t + 1, c, !0, !0, !1, !0) || typeof c > "u" && fr(e, t + 1, null, !0, !0, !1, !0)) && ((!n || i !== "") && (i += Rp(e, t)), e.dump && ys === e.dump.charCodeAt(0) ? i += "-" : i += "- ", i += e.dump);
  e.tag = s, e.dump = i || "[]";
}
function v2(e, t, r) {
  var n = "", i = e.tag, s = Object.keys(r), o, a, c, l, u;
  for (o = 0, a = s.length; o < a; o += 1)
    u = "", n !== "" && (u += ", "), e.condenseFlow && (u += '"'), c = s[o], l = r[c], e.replacer && (l = e.replacer.call(r, c, l)), fr(e, t, c, !1, !1) && (e.dump.length > 1024 && (u += "? "), u += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), fr(e, t, l, !1, !1) && (u += e.dump, n += u));
  e.tag = i, e.dump = "{" + n + "}";
}
function g2(e, t, r, n) {
  var i = "", s = e.tag, o = Object.keys(r), a, c, l, u, f, p;
  if (e.sortKeys === !0)
    o.sort();
  else if (typeof e.sortKeys == "function")
    o.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new Ge("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    p = "", (!n || i !== "") && (p += Rp(e, t)), l = o[a], u = r[l], e.replacer && (u = e.replacer.call(r, l, u)), fr(e, t + 1, l, !0, !0, !0) && (f = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, f && (e.dump && ys === e.dump.charCodeAt(0) ? p += "?" : p += "? "), p += e.dump, f && (p += Rp(e, t)), fr(e, t + 1, u, !0, f) && (e.dump && ys === e.dump.charCodeAt(0) ? p += ":" : p += ": ", p += e.dump, i += p));
  e.tag = s, e.dump = i || "{}";
}
function Lv(e, t, r) {
  var n, i, s, o, a, c;
  for (i = r ? e.explicitTypes : e.implicitTypes, s = 0, o = i.length; s < o; s += 1)
    if (a = i[s], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof t == "object" && t instanceof a.instanceOf) && (!a.predicate || a.predicate(t))) {
      if (r ? a.multi && a.representName ? e.tag = a.representName(t) : e.tag = a.tag : e.tag = "?", a.represent) {
        if (c = e.styleMap[a.tag] || a.defaultStyle, l0.call(a.represent) === "[object Function]")
          n = a.represent(t, c);
        else if (u0.call(a.represent, c))
          n = a.represent[c](t, c);
        else
          throw new Ge("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        e.dump = n;
      }
      return !0;
    }
  return !1;
}
function fr(e, t, r, n, i, s, o) {
  e.tag = null, e.dump = r, Lv(e, r, !1) || Lv(e, r, !0);
  var a = l0.call(e.dump), c = n, l;
  n && (n = e.flowLevel < 0 || e.flowLevel > t);
  var u = a === "[object Object]" || a === "[object Array]", f, p;
  if (u && (f = e.duplicates.indexOf(r), p = f !== -1), (e.tag !== null && e.tag !== "?" || p || e.indent !== 2 && t > 0) && (i = !1), p && e.usedDuplicates[f])
    e.dump = "*ref_" + f;
  else {
    if (u && p && !e.usedDuplicates[f] && (e.usedDuplicates[f] = !0), a === "[object Object]")
      n && Object.keys(e.dump).length !== 0 ? (g2(e, t, e.dump, i), p && (e.dump = "&ref_" + f + e.dump)) : (v2(e, t, e.dump), p && (e.dump = "&ref_" + f + " " + e.dump));
    else if (a === "[object Array]")
      n && e.dump.length !== 0 ? (e.noArrayIndent && !o && t > 0 ? Dv(e, t - 1, e.dump, i) : Dv(e, t, e.dump, i), p && (e.dump = "&ref_" + f + e.dump)) : (y2(e, t, e.dump), p && (e.dump = "&ref_" + f + " " + e.dump));
    else if (a === "[object String]")
      e.tag !== "?" && h2(e, e.dump, t, s, c);
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
function b2(e, t) {
  var r = [], n = [], i, s;
  for (Vp(e, r, n), i = 0, s = n.length; i < s; i += 1)
    t.duplicates.push(r[n[i]]);
  t.usedDuplicates = new Array(s);
}
function Vp(e, t, r) {
  var n, i, s;
  if (e !== null && typeof e == "object")
    if (i = t.indexOf(e), i !== -1)
      r.indexOf(i) === -1 && r.push(i);
    else if (t.push(e), Array.isArray(e))
      for (i = 0, s = e.length; i < s; i += 1)
        Vp(e[i], t, r);
    else
      for (n = Object.keys(e), i = 0, s = n.length; i < s; i += 1)
        Vp(e[n[i]], t, r);
}
function $2(e, t) {
  t = t || {};
  var r = new c2(t);
  r.noRefs || b2(e, r);
  var n = e;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), fr(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var O2 = $2, S2 = {
  dump: O2
};
function wd(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
var w2 = ke, x2 = CO, E2 = DO, Ta = HO, P2 = KO, A2 = bd, j2 = c0.load, T2 = c0.loadAll, _2 = S2.dump, I2 = Ge, R2 = {
  binary: YO,
  float: qO,
  map: NO,
  null: LO,
  pairs: QO,
  set: ZO,
  timestamp: WO,
  bool: BO,
  int: UO,
  merge: zO,
  omap: XO,
  seq: kO,
  str: MO
}, F2 = wd("safeLoad", "load"), V2 = wd("safeLoadAll", "loadAll"), C2 = wd("safeDump", "dump"), ci = {
  Type: w2,
  Schema: x2,
  FAILSAFE_SCHEMA: E2,
  JSON_SCHEMA: Ta,
  CORE_SCHEMA: P2,
  DEFAULT_SCHEMA: A2,
  load: j2,
  loadAll: T2,
  dump: _2,
  YAMLException: I2,
  types: R2,
  safeLoad: F2,
  safeLoadAll: V2,
  safeDump: C2
};
const M2 = function() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window;
}(), { FormData: $0, Blob: _a, File: Bv } = M2, k2 = (e) => ":/?#[]@!$&'()*+,;=".indexOf(e) > -1, N2 = (e) => /^[a-z0-9\-._~]+$/i.test(e);
function li(e) {
  let {
    escape: t
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "number" && (e = e.toString()), typeof e != "string" || !e.length || !t ? e : r ? JSON.parse(e) : [...e].map((n) => {
    if (N2(n) || k2(n) && t === "unsafe")
      return n;
    const i = new TextEncoder();
    return Array.from(i.encode(n)).map((o) => `0${o.toString(16).toUpperCase()}`.slice(-2)).map((o) => `%${o}`).join("");
  }).join("");
}
function xd(e) {
  const {
    value: t
  } = e;
  return Array.isArray(t) ? D2(e) : typeof t == "object" ? L2(e) : B2(e);
}
function D2(e) {
  let {
    key: t,
    value: r,
    style: n,
    explode: i,
    escape: s
  } = e;
  const o = (a) => li(a, {
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
function L2(e) {
  let {
    key: t,
    value: r,
    style: n,
    explode: i,
    escape: s
  } = e;
  const o = (c) => li(c, {
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
function B2(e) {
  let {
    key: t,
    value: r,
    style: n,
    escape: i
  } = e;
  const s = (o) => li(o, {
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
const U2 = (e, t) => {
  t.body = e;
}, Cp = {
  serializeRes: O0,
  mergeInQueryOrForm: E0
};
async function Hs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  typeof e == "object" && (t = e, e = t.url), t.headers = t.headers || {}, Cp.mergeInQueryOrForm(t), t.headers && Object.keys(t.headers).forEach((i) => {
    const s = t.headers[i];
    typeof s == "string" && (t.headers[i] = s.replace(/\n+/g, " "));
  }), t.requestInterceptor && (t = await t.requestInterceptor(t) || t);
  const r = t.headers["content-type"] || t.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && t.body instanceof $0 && (delete t.headers["content-type"], delete t.headers["Content-Type"]);
  let n;
  try {
    n = await (t.userFetch || fetch)(t.url, t), n = await Cp.serializeRes(n, e, t), t.responseInterceptor && (n = await t.responseInterceptor(n) || n);
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
const q2 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return /(json|xml|yaml|text)\b/.test(e);
};
function H2(e, t) {
  return t && (t.indexOf("application/json") === 0 || t.indexOf("+json") > 0) ? JSON.parse(e) : ci.load(e);
}
function O0(e, t) {
  let {
    loadSpec: r = !1
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const n = {
    ok: e.ok,
    url: e.url || t,
    status: e.status,
    statusText: e.statusText,
    headers: S0(e.headers)
  }, i = n.headers["content-type"], s = r || q2(i);
  return (s ? e.text : e.blob || e.buffer).call(e).then((a) => {
    if (n.text = a, n.data = a, s)
      try {
        const c = H2(a, i);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
function K2(e) {
  return e.includes(", ") ? e.split(", ") : e;
}
function S0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return typeof e.entries != "function" ? {} : Array.from(e.entries()).reduce((t, r) => {
    let [n, i] = r;
    return t[n] = K2(i), t;
  }, {});
}
function Ed(e, t) {
  return !t && typeof navigator < "u" && (t = navigator), t && t.product === "ReactNative" ? !!(e && typeof e == "object" && typeof e.uri == "string") : typeof Bv < "u" && e instanceof Bv || typeof _a < "u" && e instanceof _a || ArrayBuffer.isView(e) ? !0 : e !== null && typeof e == "object" && typeof e.pipe == "function";
}
function w0(e, t) {
  return Array.isArray(e) && e.some((r) => Ed(r, t));
}
const G2 = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, J2 = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
function x0(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const {
    collectionFormat: n,
    allowEmptyValue: i,
    serializationOption: s,
    encoding: o
  } = t, a = typeof t == "object" && !Array.isArray(t) ? t.value : t, c = r ? (u) => u.toString() : (u) => encodeURIComponent(u), l = c(e);
  if (typeof a > "u" && i)
    return [[l, ""]];
  if (Ed(a) || w0(a))
    return [[l, a]];
  if (s)
    return Uv(e, a, r, s);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((u) => u !== "undefined")) {
      const {
        style: u,
        explode: f,
        allowReserved: p
      } = o;
      return Uv(e, a, r, {
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
  return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) ? n === "multi" ? [[l, a.map(c)]] : [[l, a.map(c).join(J2[n || "csv"])]] : [[l, ""]];
}
function Uv(e, t, r, n) {
  const i = n.style || "form", s = typeof n.explode > "u" ? i === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (l) => li(l, {
    escape: o
  }), c = r ? (l) => l : (l) => li(l, {
    escape: o
  });
  return typeof t != "object" ? [[c(e), a(t)]] : Array.isArray(t) ? s ? [[c(e), t.map(a)]] : [[c(e), t.map(a).join(G2[i])]] : i === "deepObject" ? Object.keys(t).map((l) => [c(`${e}[${l}]`), a(t[l])]) : s ? Object.keys(t).map((l) => [c(l), a(t[l])]) : [[c(e), Object.keys(t).map((l) => [`${c(l)},${a(t[l])}`]).join(",")]];
}
function W2(e) {
  return Object.entries(e).reduce((t, r) => {
    let [n, i] = r;
    for (const [s, o] of x0(n, i, !0))
      if (Array.isArray(o))
        for (const a of o)
          if (ArrayBuffer.isView(a)) {
            const c = new _a([a]);
            t.append(s, c);
          } else
            t.append(s, a);
      else if (ArrayBuffer.isView(o)) {
        const a = new _a([o]);
        t.append(s, a);
      } else
        t.append(s, o);
    return t;
  }, new $0());
}
function qv(e) {
  const t = Object.keys(e).reduce((r, n) => {
    for (const [i, s] of x0(n, e[n]))
      r[i] = s;
    return r;
  }, {});
  return Tp.stringify(t, {
    encode: !1,
    indices: !1
  }) || "";
}
function E0() {
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
      return Ed(c) || w0(c);
    }), o = e.headers["content-type"] || e.headers["Content-Type"];
    if (s || /multipart\/form-data/i.test(o)) {
      const a = W2(e.form);
      U2(a, e);
    } else
      e.body = qv(n);
    delete e.form;
  }
  if (r) {
    const [s, o] = t.split("?");
    let a = "";
    if (o) {
      const l = Tp.parse(o);
      Object.keys(r).forEach((f) => delete l[f]), a = Tp.stringify(l, {
        encode: !0
      });
    }
    const c = i(a, qv(r));
    e.url = s + c, delete e.query;
  }
  return e;
}
function z2(e, t, r) {
  return r = r || ((n) => n), t = t || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), Cp.mergeInQueryOrForm(n), n = t(n), r(e(n)));
}
const P0 = "application/json, application/yaml";
function A0(e) {
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
      Accept: P0
    },
    credentials: i
  }).then((o) => o.body);
}
const Pd = (e) => {
  const {
    baseDoc: t,
    url: r
  } = e;
  return t || r;
}, j0 = (e) => {
  const {
    fetch: t,
    http: r
  } = e;
  return t || r || Hs;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var Y2 = globalThis && globalThis.__extends || function() {
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
}(), X2 = Object.prototype.hasOwnProperty;
function Mp(e, t) {
  return X2.call(e, t);
}
function kp(e) {
  if (Array.isArray(e)) {
    for (var t = new Array(e.length), r = 0; r < t.length; r++)
      t[r] = "" + r;
    return t;
  }
  if (Object.keys)
    return Object.keys(e);
  var n = [];
  for (var i in e)
    Mp(e, i) && n.push(i);
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
function Np(e) {
  for (var t = 0, r = e.length, n; t < r; ) {
    if (n = e.charCodeAt(t), n >= 48 && n <= 57) {
      t++;
      continue;
    }
    return !1;
  }
  return !0;
}
function sn(e) {
  return e.indexOf("/") === -1 && e.indexOf("~") === -1 ? e : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function T0(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
function Dp(e) {
  if (e === void 0)
    return !0;
  if (e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = e.length; t < r; t++)
        if (Dp(e[t]))
          return !0;
    } else if (typeof e == "object") {
      for (var n = kp(e), i = n.length, s = 0; s < i; s++)
        if (Dp(e[n[s]]))
          return !0;
    }
  }
  return !1;
}
function Hv(e, t) {
  var r = [e];
  for (var n in t) {
    var i = typeof t[n] == "object" ? JSON.stringify(t[n], null, 2) : t[n];
    typeof i < "u" && r.push(n + ": " + i);
  }
  return r.join(`
`);
}
var _0 = (
  /** @class */
  function(e) {
    Y2(t, e);
    function t(r, n, i, s, o) {
      var a = this.constructor, c = e.call(this, Hv(r, { name: n, index: i, operation: s, tree: o })) || this;
      return c.name = n, c.index = i, c.operation = s, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = Hv(r, { name: n, index: i, operation: s, tree: o }), c;
    }
    return t;
  }(Error)
), ge = _0, Q2 = ct, Jn = {
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
    var n = bs(r, this.path);
    n && (n = ct(n));
    var i = vn(r, { op: "remove", path: this.from }).removed;
    return vn(r, { op: "add", path: this.path, value: i }), { newDocument: r, removed: n };
  },
  copy: function(e, t, r) {
    var n = bs(r, this.from);
    return vn(r, { op: "add", path: this.path, value: ct(n) }), { newDocument: r };
  },
  test: function(e, t, r) {
    return { newDocument: r, test: $s(e[t], this.value) };
  },
  _get: function(e, t, r) {
    return this.value = e[t], { newDocument: r };
  }
}, Z2 = {
  add: function(e, t, r) {
    return Np(t) ? e.splice(t, 0, this.value) : e[t] = this.value, { newDocument: r, index: t };
  },
  remove: function(e, t, r) {
    var n = e.splice(t, 1);
    return { newDocument: r, removed: n[0] };
  },
  replace: function(e, t, r) {
    var n = e[t];
    return e[t] = this.value, { newDocument: r, removed: n };
  },
  move: Jn.move,
  copy: Jn.copy,
  test: Jn.test,
  _get: Jn._get
};
function bs(e, t) {
  if (t == "")
    return e;
  var r = { op: "_get", path: t };
  return vn(e, r), r.value;
}
function vn(e, t, r, n, i, s) {
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), i === void 0 && (i = !0), s === void 0 && (s = 0), r && (typeof r == "function" ? r(t, 0, e, t.path) : Ia(t, 0)), t.path === "") {
    var o = { newDocument: e };
    if (t.op === "add")
      return o.newDocument = t.value, o;
    if (t.op === "replace")
      return o.newDocument = t.value, o.removed = e, o;
    if (t.op === "move" || t.op === "copy")
      return o.newDocument = bs(e, t.from), t.op === "move" && (o.removed = e), o;
    if (t.op === "test") {
      if (o.test = $s(e, t.value), o.test === !1)
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
    for (typeof r == "function" ? d = r : d = Ia; ; ) {
      if (h = c[u], h && h.indexOf("~") != -1 && (h = T0(h)), i && (h == "__proto__" || h == "prototype" && u > 0 && c[u - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && p === void 0 && (l[h] === void 0 ? p = c.slice(0, u).join("/") : u == f - 1 && (p = t.path), p !== void 0 && d(t, 0, e, p)), u++, Array.isArray(l)) {
        if (h === "-")
          h = l.length;
        else {
          if (r && !Np(h))
            throw new ge("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", s, t, e);
          Np(h) && (h = ~~h);
        }
        if (u >= f) {
          if (r && t.op === "add" && h > l.length)
            throw new ge("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", s, t, e);
          var o = Z2[t.op].call(t, l, h, e);
          if (o.test === !1)
            throw new ge("Test operation failed", "TEST_OPERATION_FAILED", s, t, e);
          return o;
        }
      } else if (u >= f) {
        var o = Jn[t.op].call(t, l, h, e);
        if (o.test === !1)
          throw new ge("Test operation failed", "TEST_OPERATION_FAILED", s, t, e);
        return o;
      }
      if (l = l[h], r && u < f && (!l || typeof l != "object"))
        throw new ge("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", s, t, e);
    }
  }
}
function Tr(e, t, r, n, i) {
  if (n === void 0 && (n = !0), i === void 0 && (i = !0), r && !Array.isArray(t))
    throw new ge("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n || (e = ct(e));
  for (var s = new Array(t.length), o = 0, a = t.length; o < a; o++)
    s[o] = vn(e, t[o], r, !0, i, o), e = s[o].newDocument;
  return s.newDocument = e, s;
}
function eD(e, t, r) {
  var n = vn(e, t);
  if (n.test === !1)
    throw new ge("Test operation failed", "TEST_OPERATION_FAILED", r, t, e);
  return n.newDocument;
}
function Ia(e, t, r, n) {
  if (typeof e != "object" || e === null || Array.isArray(e))
    throw new ge("Operation is not an object", "OPERATION_NOT_AN_OBJECT", t, e, r);
  if (Jn[e.op]) {
    if (typeof e.path != "string")
      throw new ge("Operation `path` property is not a string", "OPERATION_PATH_INVALID", t, e, r);
    if (e.path.indexOf("/") !== 0 && e.path.length > 0)
      throw new ge('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", t, e, r);
    if ((e.op === "move" || e.op === "copy") && typeof e.from != "string")
      throw new ge("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", t, e, r);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && e.value === void 0)
      throw new ge("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", t, e, r);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && Dp(e.value))
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
        var o = { op: "_get", path: e.from, value: void 0 }, a = I0([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new ge("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", t, e, r);
      }
    }
  } else
    throw new ge("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", t, e, r);
}
function I0(e, t, r) {
  try {
    if (!Array.isArray(e))
      throw new ge("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (t)
      Tr(ct(t), ct(e), r || !0);
    else {
      r = r || Ia;
      for (var n = 0; n < e.length; n++)
        r(e[n], n, t, void 0);
    }
  } catch (i) {
    if (i instanceof ge)
      return i;
    throw i;
  }
}
function $s(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    var r = Array.isArray(e), n = Array.isArray(t), i, s, o;
    if (r && n) {
      if (s = e.length, s != t.length)
        return !1;
      for (i = s; i-- !== 0; )
        if (!$s(e[i], t[i]))
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
      if (o = a[i], !$s(e[o], t[o]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
const tD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: ge,
  _areEquals: $s,
  applyOperation: vn,
  applyPatch: Tr,
  applyReducer: eD,
  deepClone: Q2,
  getValueByPointer: bs,
  validate: I0,
  validator: Ia
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var Ad = /* @__PURE__ */ new WeakMap(), rD = (
  /** @class */
  function() {
    function e(t) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = t;
    }
    return e;
  }()
), nD = (
  /** @class */
  function() {
    function e(t, r) {
      this.callback = t, this.observer = r;
    }
    return e;
  }()
);
function iD(e) {
  return Ad.get(e);
}
function sD(e, t) {
  return e.observers.get(t);
}
function oD(e, t) {
  e.observers.delete(t.callback);
}
function aD(e, t) {
  t.unobserve();
}
function cD(e, t) {
  var r = [], n, i = iD(e);
  if (!i)
    i = new rD(e), Ad.set(e, i);
  else {
    var s = sD(i, t);
    n = s && s.observer;
  }
  if (n)
    return n;
  if (n = {}, i.value = ct(e), t) {
    n.callback = t, n.next = null;
    var o = function() {
      Lp(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = e, n.unobserve = function() {
    Lp(n), clearTimeout(n.next), oD(i, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, i.observers.set(t, new nD(t, n)), n;
}
function Lp(e, t) {
  t === void 0 && (t = !1);
  var r = Ad.get(e.object);
  jd(r.value, e.object, e.patches, "", t), e.patches.length && Tr(r.value, e.patches);
  var n = e.patches;
  return n.length > 0 && (e.patches = [], e.callback && e.callback(n)), n;
}
function jd(e, t, r, n, i) {
  if (t !== e) {
    typeof t.toJSON == "function" && (t = t.toJSON());
    for (var s = kp(t), o = kp(e), a = !1, c = o.length - 1; c >= 0; c--) {
      var l = o[c], u = e[l];
      if (Mp(t, l) && !(t[l] === void 0 && u !== void 0 && Array.isArray(t) === !1)) {
        var f = t[l];
        typeof u == "object" && u != null && typeof f == "object" && f != null && Array.isArray(u) === Array.isArray(f) ? jd(u, f, r, n + "/" + sn(l), i) : u !== f && (i && r.push({ op: "test", path: n + "/" + sn(l), value: ct(u) }), r.push({ op: "replace", path: n + "/" + sn(l), value: ct(f) }));
      } else
        Array.isArray(e) === Array.isArray(t) ? (i && r.push({ op: "test", path: n + "/" + sn(l), value: ct(u) }), r.push({ op: "remove", path: n + "/" + sn(l) }), a = !0) : (i && r.push({ op: "test", path: n, value: e }), r.push({ op: "replace", path: n, value: t }));
    }
    if (!(!a && s.length == o.length))
      for (var c = 0; c < s.length; c++) {
        var l = s[c];
        !Mp(e, l) && t[l] !== void 0 && r.push({ op: "add", path: n + "/" + sn(l), value: ct(t[l]) });
      }
  }
}
function lD(e, t, r) {
  r === void 0 && (r = !1);
  var n = [];
  return jd(e, t, n, "", r), n;
}
const uD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: lD,
  generate: Lp,
  observe: cD,
  unobserve: aD
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, tD, uD, {
  JsonPatchError: _0,
  deepClone: ct,
  escapePathComponent: sn,
  unescapePathComponent: T0
});
var fD = function(t) {
  return pD(t) && !hD(t);
};
function pD(e) {
  return !!e && typeof e == "object";
}
function hD(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || yD(e);
}
var dD = typeof Symbol == "function" && Symbol.for, mD = dD ? Symbol.for("react.element") : 60103;
function yD(e) {
  return e.$$typeof === mD;
}
function vD(e) {
  return Array.isArray(e) ? [] : {};
}
function Os(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? ui(vD(e), e, t) : e;
}
function gD(e, t, r) {
  return e.concat(t).map(function(n) {
    return Os(n, r);
  });
}
function bD(e, t) {
  if (!t.customMerge)
    return ui;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : ui;
}
function $D(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function Kv(e) {
  return Object.keys(e).concat($D(e));
}
function R0(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function OD(e, t) {
  return R0(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function SD(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Kv(e).forEach(function(i) {
    n[i] = Os(e[i], r);
  }), Kv(t).forEach(function(i) {
    OD(e, i) || (R0(e, i) && r.isMergeableObject(t[i]) ? n[i] = bD(i, r)(e[i], t[i], r) : n[i] = Os(t[i], r));
  }), n;
}
function ui(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || gD, r.isMergeableObject = r.isMergeableObject || fD, r.cloneUnlessOtherwiseSpecified = Os;
  var n = Array.isArray(t), i = Array.isArray(e), s = n === i;
  return s ? n ? r.arrayMerge(e, t, r) : SD(e, t, r) : Os(t, r);
}
ui.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, i) {
    return ui(n, i, r);
  }, {});
};
var wD = ui, xD = wD;
const oe = {
  add: PD,
  replace: ia,
  remove: AD,
  merge: jD,
  mergeDeep: TD,
  context: _D,
  getIn: VD,
  applyPatch: ED,
  parentPathMatch: FD,
  flatten: Ks,
  fullyNormalizeArray: CD,
  normalizeArray: V0,
  isPromise: MD,
  forEachNew: ID,
  forEachNewPrimitive: RD,
  isJsonPatch: k0,
  isContextPatch: DD,
  isPatch: mc,
  isMutation: N0,
  isAdditiveMutation: Ra,
  isGenerator: ND,
  isFunction: M0,
  isObject: gn,
  isError: kD
};
function ED(e, t, r) {
  if (r = r || {}, t = ie(ie({}, t), {}, {
    path: t.path && Gv(t.path)
  }), t.op === "merge") {
    const n = hf(e, t.path);
    Object.assign(n, t.value), Tr(e, [ia(t.path, n)]);
  } else if (t.op === "mergeDeep") {
    const n = hf(e, t.path), i = xD(n, t.value);
    e = Tr(e, [ia(t.path, i)]).newDocument;
  } else if (t.op === "add" && t.path === "" && gn(t.value)) {
    const n = Object.keys(t.value).reduce((i, s) => (i.push({
      op: "add",
      path: `/${Gv(s)}`,
      value: t.value[s]
    }), i), []);
    Tr(e, n);
  } else if (t.op === "replace" && t.path === "") {
    let {
      value: n
    } = t;
    r.allowMetaPatches && t.meta && Ra(t) && (Array.isArray(t.value) || gn(t.value)) && (n = ie(ie({}, n), t.meta)), e = n;
  } else if (Tr(e, [t]), r.allowMetaPatches && t.meta && Ra(t) && (Array.isArray(t.value) || gn(t.value))) {
    const n = hf(e, t.path), i = ie(ie({}, n), t.meta);
    Tr(e, [ia(t.path, i)]);
  }
  return e;
}
function Gv(e) {
  return Array.isArray(e) ? e.length < 1 ? "" : `/${e.map(
    (t) => (
      // eslint-disable-line prefer-template
      (t + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : e;
}
function PD(e, t) {
  return {
    op: "add",
    path: e,
    value: t
  };
}
function ia(e, t, r) {
  return {
    op: "replace",
    path: e,
    value: t,
    meta: r
  };
}
function AD(e) {
  return {
    op: "remove",
    path: e
  };
}
function jD(e, t) {
  return {
    type: "mutation",
    op: "merge",
    path: e,
    value: t
  };
}
function TD(e, t) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: e,
    value: t
  };
}
function _D(e, t) {
  return {
    type: "context",
    path: e,
    value: t
  };
}
function ID(e, t) {
  try {
    return F0(e, Up, t);
  } catch (r) {
    return r;
  }
}
function RD(e, t) {
  try {
    return F0(e, Bp, t);
  } catch (r) {
    return r;
  }
}
function F0(e, t, r) {
  const n = e.filter(Ra).map((o) => t(o.value, r, o.path)) || [], i = Ks(n);
  return C0(i);
}
function Bp(e, t, r) {
  return r = r || [], Array.isArray(e) ? e.map((n, i) => Bp(n, t, r.concat(i))) : gn(e) ? Object.keys(e).map((n) => Bp(e[n], t, r.concat(n))) : t(e, r[r.length - 1], r);
}
function Up(e, t, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const i = t(e, r[r.length - 1], r);
    i && (n = n.concat(i));
  }
  if (Array.isArray(e)) {
    const i = e.map((s, o) => Up(s, t, r.concat(o)));
    i && (n = n.concat(i));
  } else if (gn(e)) {
    const i = Object.keys(e).map((s) => Up(e[s], t, r.concat(s)));
    i && (n = n.concat(i));
  }
  return n = Ks(n), n;
}
function FD(e, t) {
  if (!Array.isArray(t))
    return !1;
  for (let r = 0, n = t.length; r < n; r += 1)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function VD(e, t) {
  return t.reduce((r, n) => typeof n < "u" && r ? r[n] : r, e);
}
function CD(e) {
  return C0(Ks(V0(e)));
}
function V0(e) {
  return Array.isArray(e) ? e : [e];
}
function Ks(e) {
  return [].concat(...e.map((t) => Array.isArray(t) ? Ks(t) : t));
}
function C0(e) {
  return e.filter((t) => typeof t < "u");
}
function gn(e) {
  return e && typeof e == "object";
}
function MD(e) {
  return gn(e) && M0(e.then);
}
function M0(e) {
  return e && typeof e == "function";
}
function kD(e) {
  return e instanceof Error;
}
function k0(e) {
  if (mc(e)) {
    const {
      op: t
    } = e;
    return t === "add" || t === "remove" || t === "replace";
  }
  return !1;
}
function ND(e) {
  return Object.prototype.toString.call(e) === "[object GeneratorFunction]";
}
function N0(e) {
  return k0(e) || mc(e) && e.type === "mutation";
}
function Ra(e) {
  return N0(e) && (e.op === "add" || e.op === "replace" || e.op === "merge" || e.op === "mergeDeep");
}
function DD(e) {
  return mc(e) && e.type === "context";
}
function mc(e) {
  return e && typeof e == "object";
}
function hf(e, t) {
  try {
    return bs(e, t);
  } catch (r) {
    return console.error(r), {};
  }
}
function Td(e, t) {
  function r() {
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack;
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    [this.message] = i, t && t.apply(this, i);
  }
  return r.prototype = new Error(), r.prototype.name = e, r.prototype.constructor = r, r;
}
function Pi(e) {
  return Object.prototype.toString.call(e);
}
function LD(e) {
  return Pi(e) === "[object Date]";
}
function BD(e) {
  return Pi(e) === "[object RegExp]";
}
function UD(e) {
  return Pi(e) === "[object Error]";
}
function qD(e) {
  return Pi(e) === "[object Boolean]";
}
function HD(e) {
  return Pi(e) === "[object Number]";
}
function KD(e) {
  return Pi(e) === "[object String]";
}
var D0 = Array.isArray || function(t) {
  return Object.prototype.toString.call(t) === "[object Array]";
};
function yc(e, t) {
  if (e.forEach)
    return e.forEach(t);
  for (var r = 0; r < e.length; r++)
    t(e[r], r, e);
}
var vc = Object.keys || function(t) {
  var r = [];
  for (var n in t)
    r.push(n);
  return r;
}, gc = Object.prototype.hasOwnProperty || function(e, t) {
  return t in e;
};
function L0(e) {
  if (typeof e == "object" && e !== null) {
    var t;
    if (D0(e))
      t = [];
    else if (LD(e))
      t = new Date(e.getTime ? e.getTime() : e);
    else if (BD(e))
      t = new RegExp(e);
    else if (UD(e))
      t = { message: e.message };
    else if (qD(e) || HD(e) || KD(e))
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
    return yc(vc(e), function(i) {
      t[i] = e[i];
    }), t;
  }
  return e;
}
function B0(e, t, r) {
  var n = [], i = [], s = !0;
  return function o(a) {
    var c = r ? L0(a) : a, l = {}, u = !0, f = {
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
        D0(f.parent.node) ? f.parent.node.splice(f.key, 1) : delete f.parent.node[f.key], d && (u = !1);
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
        (!f.keys || f.node_ !== f.node) && (f.keys = vc(f.node)), f.isLeaf = f.keys.length === 0;
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
    return h !== void 0 && f.update && f.update(h), l.before && l.before.call(f, f.node), u && (typeof f.node == "object" && f.node !== null && !f.circular && (i.push(f), p(), yc(f.keys, function(d, m) {
      n.push(d), l.pre && l.pre.call(f, f.node[d], d);
      var y = o(f.node[d]);
      r && gc.call(f.node, d) && (f.node[d] = y.node), y.isLast = m === f.keys.length - 1, y.isFirst = m === 0, l.post && l.post.call(f, y), n.pop();
    }), i.pop()), l.after && l.after.call(f, f.node)), f;
  }(e).node;
}
function Ot(e) {
  this.value = e;
}
Ot.prototype.get = function(e) {
  for (var t = this.value, r = 0; r < e.length; r++) {
    var n = e[r];
    if (!t || !gc.call(t, n))
      return;
    t = t[n];
  }
  return t;
};
Ot.prototype.has = function(e) {
  for (var t = this.value, r = 0; r < e.length; r++) {
    var n = e[r];
    if (!t || !gc.call(t, n))
      return !1;
    t = t[n];
  }
  return !0;
};
Ot.prototype.set = function(e, t) {
  for (var r = this.value, n = 0; n < e.length - 1; n++) {
    var i = e[n];
    gc.call(r, i) || (r[i] = {}), r = r[i];
  }
  return r[e[n]] = t, t;
};
Ot.prototype.map = function(e) {
  return B0(this.value, e, !0);
};
Ot.prototype.forEach = function(e) {
  return this.value = B0(this.value, e, !1), this.value;
};
Ot.prototype.reduce = function(e, t) {
  var r = arguments.length === 1, n = r ? this.value : t;
  return this.forEach(function(i) {
    (!this.isRoot || !r) && (n = e.call(this, n, i));
  }), n;
};
Ot.prototype.paths = function() {
  var e = [];
  return this.forEach(function() {
    e.push(this.path);
  }), e;
};
Ot.prototype.nodes = function() {
  var e = [];
  return this.forEach(function() {
    e.push(this.node);
  }), e;
};
Ot.prototype.clone = function() {
  var e = [], t = [];
  return function r(n) {
    for (var i = 0; i < e.length; i++)
      if (e[i] === n)
        return t[i];
    if (typeof n == "object" && n !== null) {
      var s = L0(n);
      return e.push(n), t.push(s), yc(vc(n), function(o) {
        s[o] = r(n[o]);
      }), e.pop(), t.pop(), s;
    }
    return n;
  }(this.value);
};
function U0(e) {
  return new Ot(e);
}
yc(vc(Ot.prototype), function(e) {
  U0[e] = function(t) {
    var r = [].slice.call(arguments, 1), n = new Ot(t);
    return n[e].apply(n, r);
  };
});
var GD = U0;
const JD = ["properties"], WD = ["properties"], zD = [
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
], YD = ["schema/example", "items/example"];
function q0(e) {
  const t = e[e.length - 1], r = e[e.length - 2], n = e.join("/");
  return (
    // eslint-disable-next-line max-len
    JD.indexOf(t) > -1 && WD.indexOf(r) === -1 || zD.indexOf(n) > -1 || YD.some((i) => n.indexOf(i) > -1)
  );
}
function XD(e, t) {
  let {
    specmap: r,
    getBaseUrlForNodePath: n = (o) => r.getContext([...t, ...o]).baseDoc,
    targetKeys: i = ["$ref", "$$ref"]
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const s = [];
  return GD(e).forEach(function() {
    if (i.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = t.concat(this.path), l = qp(this.node, n(a));
      s.push(r.replace(c, l));
    }
  }), s;
}
function qp(e, t) {
  const [r, n] = e.split("#"), i = at.resolve(r || "", t || "");
  return n ? `${i}#${n}` : i;
}
const QD = /^([a-z]+:\/\/|\/\/)/i, fi = Td("JSONRefError", function(t, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), sr = {}, Jv = /* @__PURE__ */ new WeakMap(), ZD = [
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
], eL = (e) => ZD.some((t) => t(e)), tL = {
  key: "$ref",
  plugin: (e, t, r, n) => {
    const i = n.getInstance(), s = r.slice(0, -1);
    if (q0(s) || eL(s))
      return;
    const {
      baseDoc: o
    } = n.getContext(r);
    if (typeof e != "string")
      return new fi("$ref: must be a string (JSON-Ref)", {
        $ref: e,
        baseDoc: o,
        fullPath: r
      });
    const a = K0(e), c = a[0], l = a[1] || "";
    let u;
    try {
      u = o || c ? H0(c, o) : null;
    } catch (m) {
      return Hp(m, {
        pointer: l,
        $ref: e,
        basePath: u,
        fullPath: r
      });
    }
    let f, p;
    if (oL(l, u, s, n) && !i.useCircularStructures) {
      const m = qp(e, u);
      return e === m ? null : oe.replace(r, m);
    }
    if (u == null ? (p = Id(l), f = n.get(p), typeof f > "u" && (f = new fi(`Could not resolve reference: ${e}`, {
      pointer: l,
      $ref: e,
      baseDoc: o,
      fullPath: r
    }))) : (f = G0(u, l), f.__value != null ? f = f.__value : f = f.catch((m) => {
      throw Hp(m, {
        pointer: l,
        $ref: e,
        baseDoc: o,
        fullPath: r
      });
    })), f instanceof Error)
      return [oe.remove(r), f];
    const h = qp(e, u), d = oe.replace(s, f, {
      $$ref: h
    });
    if (u && u !== o)
      return [d, oe.context(s, {
        baseDoc: u
      })];
    try {
      if (!aL(n.state, d) || i.useCircularStructures)
        return d;
    } catch {
      return null;
    }
  }
}, _d = Object.assign(tL, {
  docCache: sr,
  absoluteify: H0,
  clearCache: rL,
  JSONRefError: fi,
  wrapError: Hp,
  getDoc: J0,
  split: K0,
  extractFromDoc: G0,
  fetchJSON: nL,
  extract: Kp,
  jsonPointerToArray: Id,
  unescapeJsonPointerToken: W0
});
function H0(e, t) {
  if (!QD.test(e)) {
    if (!t)
      throw new fi(`Tried to resolve a relative URL, without having a basePath. path: '${e}' basePath: '${t}'`);
    return at.resolve(t, e);
  }
  return e;
}
function Hp(e, t) {
  let r;
  return e && e.response && e.response.body ? r = `${e.response.body.code} ${e.response.body.message}` : r = e.message, new fi(`Could not resolve reference: ${r}`, t, e);
}
function K0(e) {
  return (e + "").split("#");
}
function G0(e, t) {
  const r = sr[e];
  if (r && !oe.isPromise(r))
    try {
      const n = Kp(t, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return J0(e).then((n) => Kp(t, n));
}
function rL(e) {
  typeof e < "u" ? delete sr[e] : Object.keys(sr).forEach((t) => {
    delete sr[t];
  });
}
function J0(e) {
  const t = sr[e];
  return t ? oe.isPromise(t) ? t : Promise.resolve(t) : (sr[e] = _d.fetchJSON(e).then((r) => (sr[e] = r, r)), sr[e]);
}
function nL(e) {
  return fetch(e, {
    headers: {
      Accept: P0
    },
    loadSpec: !0
  }).then((t) => t.text()).then((t) => ci.load(t));
}
function Kp(e, t) {
  const r = Id(e);
  if (r.length < 1)
    return t;
  const n = oe.getIn(t, r);
  if (typeof n > "u")
    throw new fi(`Could not resolve pointer: ${e} does not exist in document`, {
      pointer: e
    });
  return n;
}
function Id(e) {
  if (typeof e != "string")
    throw new TypeError(`Expected a string, got a ${typeof e}`);
  return e[0] === "/" && (e = e.substr(1)), e === "" ? [] : e.split("/").map(W0);
}
function W0(e) {
  return typeof e != "string" ? e : new URLSearchParams(`=${e.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function z0(e) {
  return new URLSearchParams([["", e.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function iL(e) {
  return e.length === 0 ? "" : `/${e.map(z0).join("/")}`;
}
const sL = (e) => !e || e === "/" || e === "#";
function df(e, t) {
  if (sL(t))
    return !0;
  const r = e.charAt(t.length), n = t.slice(-1);
  return e.indexOf(t) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function oL(e, t, r, n) {
  let i = Jv.get(n);
  i || (i = {}, Jv.set(n, i));
  const s = iL(r), o = `${t || "<specmap-base>"}#${e}`, a = s.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (t === c && df(a, e))
    return !0;
  let l = "";
  if (r.some((f) => (l = `${l}/${z0(f)}`, i[l] && i[l].some((p) => df(p, o) || df(o, p)))))
    return !0;
  i[a] = (i[a] || []).concat(o);
}
function aL(e, t) {
  const r = [e];
  return t.path.reduce((i, s) => (r.push(i[s]), i[s]), e), n(t.value);
  function n(i) {
    return oe.isObject(i) && (r.indexOf(i) >= 0 || Object.keys(i).some((s) => n(i[s])));
  }
}
const cL = {
  key: "allOf",
  plugin: (e, t, r, n, i) => {
    if (i.meta && i.meta.$$ref)
      return;
    const s = r.slice(0, -1);
    if (q0(s))
      return;
    if (!Array.isArray(e)) {
      const l = new TypeError("allOf must be an array");
      return l.fullPath = r, l;
    }
    let o = !1, a = i.value;
    if (s.forEach((l) => {
      a && (a = a[l]);
    }), a = ie({}, a), Object.keys(a).length === 0)
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
      const f = r.slice(0, -1), p = XD(l, f, {
        getBaseUrlForNodePath: (h) => n.getContext([...r, u, ...h]).baseDoc,
        specmap: n
      });
      c.push(...p);
    }), a.example && c.push(n.remove([].concat(s, "example"))), c.push(n.mergeDeep(s, a)), a.$$ref || c.push(n.remove([].concat(s, "$$ref"))), c;
  }
}, lL = {
  key: "parameters",
  plugin: (e, t, r, n) => {
    if (Array.isArray(e) && e.length) {
      const i = Object.assign([], e), s = r.slice(0, -1), o = ie({}, oe.getIn(n.spec, s));
      for (let a = 0; a < e.length; a += 1) {
        const c = e[a];
        try {
          i[a].default = n.parameterMacro(o, c);
        } catch (l) {
          const u = new Error(l);
          return u.fullPath = r, u;
        }
      }
      return oe.replace(r, i);
    }
    return oe.replace(r, e);
  }
}, uL = {
  key: "properties",
  plugin: (e, t, r, n) => {
    const i = ie({}, e);
    for (const o in e)
      try {
        i[o].default = n.modelPropertyMacro(i[o]);
      } catch (a) {
        const c = new Error(a);
        return c.fullPath = r, c;
      }
    return oe.replace(r, i);
  }
};
class fL {
  constructor(t) {
    this.root = mf(t || {});
  }
  set(t, r) {
    const n = this.getParent(t, !0);
    if (!n) {
      Fa(this.root, r, null);
      return;
    }
    const i = t[t.length - 1], {
      children: s
    } = n;
    if (s[i]) {
      Fa(s[i], r, n);
      return;
    }
    s[i] = mf(r, n);
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
      return !s[i] && r && (s[i] = mf(null, n)), s[i];
    }, this.root);
  }
}
function mf(e, t) {
  return Fa({
    children: {}
  }, e, t);
}
function Fa(e, t, r) {
  return e.value = t || {}, e.protoValue = r ? ie(ie({}, r.protoValue), e.value) : e.value, Object.keys(e.children).forEach((n) => {
    const i = e.children[n];
    e.children[n] = Fa(i, i.value, e);
  }), e;
}
const Wv = 100, zv = () => {
};
class pL {
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
      contextTree: new fL(),
      showDebug: !1,
      allPatches: [],
      // only populated if showDebug is true
      pluginProp: "specMap",
      libMethods: Object.assign(Object.create(this), oe, {
        getInstance: () => this
      }),
      allowMetaPatches: !1
    }, t), this.get = this._get.bind(this), this.getContext = this._getContext.bind(this), this.hasRun = this._hasRun.bind(this), this.wrappedPlugins = this.plugins.map(this.wrapPlugin.bind(this)).filter(oe.isFunction), this.patches.push(oe.add([], this.spec)), this.patches.push(oe.context([], this.context)), this.updatePatches(this.patches);
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
    return t[this.pluginProp] ? (i = t, s = t[this.pluginProp]) : oe.isFunction(t) ? s = t : oe.isObject(t) && (s = o(t)), Object.assign(s.bind(i), {
      pluginName: t.name || r,
      isGenerator: oe.isGenerator(s)
    });
    function o(a) {
      const c = (l, u) => Array.isArray(l) ? l.every((f, p) => f === u[p]) : !0;
      return function* (u, f) {
        const p = {};
        for (const d of u.filter(oe.isAdditiveMutation))
          yield* h(d.value, d.path, d);
        function* h(d, m, y) {
          if (!oe.isObject(d))
            a.key === m[m.length - 1] && (yield a.plugin(d, a.key, m, f));
          else {
            const g = m.length - 1, S = m[g], $ = m.indexOf("properties"), w = S === "properties" && g === $, x = f.allowMetaPatches && p[d.$$ref];
            for (const j of Object.keys(d)) {
              const P = d[j], C = m.concat(j), v = oe.isObject(P), A = d.$$ref;
              if (x || v && (f.allowMetaPatches && A && (p[A] = !0), yield* h(P, C, y)), !w && j === a.key) {
                const T = c(n, m);
                (!n || T) && (yield a.plugin(P, j, C, f, y));
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
    oe.normalizeArray(t).forEach((r) => {
      if (r instanceof Error) {
        this.errors.push(r);
        return;
      }
      try {
        if (!oe.isObject(r)) {
          this.debug("updatePatches", "Got a non-object patch", r);
          return;
        }
        if (this.showDebug && this.allPatches.push(r), oe.isPromise(r.value)) {
          this.promisedPatches.push(r), this.promisedPatchThen(r);
          return;
        }
        if (oe.isContextPatch(r)) {
          this.setContext(r.path, r.value);
          return;
        }
        if (oe.isMutation(r)) {
          this.updateMutations(r);
          return;
        }
      } catch (n) {
        console.error(n), this.errors.push(n);
      }
    });
  }
  updateMutations(t) {
    typeof t.value == "object" && !Array.isArray(t.value) && this.allowMetaPatches && (t.value = ie({}, t.value));
    const r = oe.applyPatch(this.state, t, {
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
      const n = ie(ie({}, t), {}, {
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
    return oe.getIn(this.state, t);
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
    if (t.pluginCount = t.pluginCount || {}, t.pluginCount[r] = (t.pluginCount[r] || 0) + 1, t.pluginCount[r] > Wv)
      return Promise.resolve({
        spec: t.state,
        errors: t.errors.concat(new Error(`We've reached a hard limit of ${Wv} plugin runs`))
      });
    if (r !== this.currentPlugin && this.promisedPatches.length) {
      const s = this.promisedPatches.map((o) => o.value);
      return Promise.all(s.map((o) => o.then(zv, zv))).then(() => this.dispatch());
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
      s && (s = oe.fullyNormalizeArray(s), t.updatePatches(s, r));
    }
  }
}
function hL(e) {
  return new pL(e).dispatch();
}
const on = {
  refs: _d,
  allOf: cL,
  parameters: lL,
  properties: uL
}, Y0 = (e) => e.replace(/\W/gi, "_");
function dL(e, t) {
  let {
    v2OperationIdCompatibilityMode: r
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (r) {
    let n = `${t.toLowerCase()}_${e}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${e.substring(1)}_${t}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${t.toLowerCase()}${Y0(e)}`;
}
function Gs(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", {
    v2OperationIdCompatibilityMode: n
  } = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  return !e || typeof e != "object" ? null : (e.operationId || "").replace(/\s/g, "").length ? Y0(e.operationId) : dL(t, r, {
    v2OperationIdCompatibilityMode: n
  });
}
function bc(e) {
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
      const l = Gs(c, i, a);
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
async function Rd(e) {
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
  } = e, f = Pd(e), p = j0(e);
  return h(t);
  function h(d) {
    f && (on.refs.docCache[f] = d), on.refs.fetchJSON = A0(p, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const m = [on.refs];
    return typeof o == "function" && m.push(on.parameters), typeof s == "function" && m.push(on.properties), r !== "strict" && m.push(on.allOf), hL({
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
    }).then(l ? async (y) => y : bc);
  }
}
function mL() {
  on.refs.clearCache();
}
const X0 = {
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
    } = bc({
      spec: t
    });
    return r;
  },
  async resolve(e) {
    return Rd(e);
  }
};
async function yL(e) {
  return Rd(e);
}
const vL = (e) => {
  try {
    const {
      swagger: t
    } = e;
    return t === "2.0";
  } catch {
    return !1;
  }
}, Q0 = (e) => {
  try {
    const {
      openapi: t
    } = e;
    return typeof t == "string" && /^3\.0\.([0123])(?:-rc[012])?$/.test(t);
  } catch {
    return !1;
  }
}, Z0 = (e) => {
  try {
    const {
      openapi: t
    } = e;
    return typeof t == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(t);
  } catch {
    return !1;
  }
}, eS = (e) => Q0(e) || Z0(e), tS = {
  name: "openapi-2",
  match(e) {
    let {
      spec: t
    } = e;
    return vL(t);
  },
  normalize(e) {
    let {
      spec: t
    } = e;
    const {
      spec: r
    } = bc({
      spec: t
    });
    return r;
  },
  async resolve(e) {
    return yL(e);
  }
};
async function gL(e) {
  return Rd(e);
}
const rS = {
  name: "openapi-3-0",
  match(e) {
    let {
      spec: t
    } = e;
    return Q0(t);
  },
  normalize(e) {
    let {
      spec: t
    } = e;
    const {
      spec: r
    } = bc({
      spec: t
    });
    return r;
  },
  async resolve(e) {
    return gL(e);
  }
}, bL = async (e) => {
  const {
    spec: t,
    requestInterceptor: r,
    responseInterceptor: n
  } = e, i = Pd(e), s = j0(e), o = t || await A0(s, {
    requestInterceptor: r,
    responseInterceptor: n
  })(i), a = ie(ie({}, e), {}, {
    spec: o
  });
  return e.strategies.find((l) => l.match(a)).resolve(a);
}, nS = (e) => async (t) => {
  const r = ie(ie({}, e), t);
  return bL(r);
}, $L = nS({
  strategies: [rS, tS, X0]
});
var OL = Array.isArray, An = OL, SL = typeof Jt == "object" && Jt && Jt.Object === Object && Jt, iS = SL, wL = iS, xL = typeof self == "object" && self && self.Object === Object && self, EL = wL || xL || Function("return this")(), yr = EL, PL = yr, AL = PL.Symbol, $c = AL, Yv = $c, sS = Object.prototype, jL = sS.hasOwnProperty, TL = sS.toString, Wi = Yv ? Yv.toStringTag : void 0;
function _L(e) {
  var t = jL.call(e, Wi), r = e[Wi];
  try {
    e[Wi] = void 0;
    var n = !0;
  } catch {
  }
  var i = TL.call(e);
  return n && (t ? e[Wi] = r : delete e[Wi]), i;
}
var IL = _L, RL = Object.prototype, FL = RL.toString;
function VL(e) {
  return FL.call(e);
}
var CL = VL, Xv = $c, ML = IL, kL = CL, NL = "[object Null]", DL = "[object Undefined]", Qv = Xv ? Xv.toStringTag : void 0;
function LL(e) {
  return e == null ? e === void 0 ? DL : NL : Qv && Qv in Object(e) ? ML(e) : kL(e);
}
var Jr = LL;
function BL(e) {
  return e != null && typeof e == "object";
}
var Wr = BL, UL = Jr, qL = Wr, HL = "[object Symbol]";
function KL(e) {
  return typeof e == "symbol" || qL(e) && UL(e) == HL;
}
var Fd = KL, GL = An, JL = Fd, WL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zL = /^\w*$/;
function YL(e, t) {
  if (GL(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || JL(e) ? !0 : zL.test(e) || !WL.test(e) || t != null && e in Object(t);
}
var XL = YL;
function QL(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Oc = QL, ZL = Jr, eB = Oc, tB = "[object AsyncFunction]", rB = "[object Function]", nB = "[object GeneratorFunction]", iB = "[object Proxy]";
function sB(e) {
  if (!eB(e))
    return !1;
  var t = ZL(e);
  return t == rB || t == nB || t == tB || t == iB;
}
var oS = sB, oB = yr, aB = oB["__core-js_shared__"], cB = aB, yf = cB, Zv = function() {
  var e = /[^.]+$/.exec(yf && yf.keys && yf.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function lB(e) {
  return !!Zv && Zv in e;
}
var uB = lB, fB = Function.prototype, pB = fB.toString;
function hB(e) {
  if (e != null) {
    try {
      return pB.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var aS = hB, dB = oS, mB = uB, yB = Oc, vB = aS, gB = /[\\^$.*+?()[\]{}|]/g, bB = /^\[object .+?Constructor\]$/, $B = Function.prototype, OB = Object.prototype, SB = $B.toString, wB = OB.hasOwnProperty, xB = RegExp(
  "^" + SB.call(wB).replace(gB, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function EB(e) {
  if (!yB(e) || mB(e))
    return !1;
  var t = dB(e) ? xB : bB;
  return t.test(vB(e));
}
var PB = EB;
function AB(e, t) {
  return e == null ? void 0 : e[t];
}
var jB = AB, TB = PB, _B = jB;
function IB(e, t) {
  var r = _B(e, t);
  return TB(r) ? r : void 0;
}
var Ai = IB, RB = Ai, FB = RB(Object, "create"), Sc = FB, eg = Sc;
function VB() {
  this.__data__ = eg ? eg(null) : {}, this.size = 0;
}
var CB = VB;
function MB(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var kB = MB, NB = Sc, DB = "__lodash_hash_undefined__", LB = Object.prototype, BB = LB.hasOwnProperty;
function UB(e) {
  var t = this.__data__;
  if (NB) {
    var r = t[e];
    return r === DB ? void 0 : r;
  }
  return BB.call(t, e) ? t[e] : void 0;
}
var qB = UB, HB = Sc, KB = Object.prototype, GB = KB.hasOwnProperty;
function JB(e) {
  var t = this.__data__;
  return HB ? t[e] !== void 0 : GB.call(t, e);
}
var WB = JB, zB = Sc, YB = "__lodash_hash_undefined__";
function XB(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = zB && t === void 0 ? YB : t, this;
}
var QB = XB, ZB = CB, e3 = kB, t3 = qB, r3 = WB, n3 = QB;
function ji(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ji.prototype.clear = ZB;
ji.prototype.delete = e3;
ji.prototype.get = t3;
ji.prototype.has = r3;
ji.prototype.set = n3;
var i3 = ji;
function s3() {
  this.__data__ = [], this.size = 0;
}
var o3 = s3;
function a3(e, t) {
  return e === t || e !== e && t !== t;
}
var cS = a3, c3 = cS;
function l3(e, t) {
  for (var r = e.length; r--; )
    if (c3(e[r][0], t))
      return r;
  return -1;
}
var wc = l3, u3 = wc, f3 = Array.prototype, p3 = f3.splice;
function h3(e) {
  var t = this.__data__, r = u3(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : p3.call(t, r, 1), --this.size, !0;
}
var d3 = h3, m3 = wc;
function y3(e) {
  var t = this.__data__, r = m3(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var v3 = y3, g3 = wc;
function b3(e) {
  return g3(this.__data__, e) > -1;
}
var $3 = b3, O3 = wc;
function S3(e, t) {
  var r = this.__data__, n = O3(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var w3 = S3, x3 = o3, E3 = d3, P3 = v3, A3 = $3, j3 = w3;
function Ti(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ti.prototype.clear = x3;
Ti.prototype.delete = E3;
Ti.prototype.get = P3;
Ti.prototype.has = A3;
Ti.prototype.set = j3;
var xc = Ti, T3 = Ai, _3 = yr, I3 = T3(_3, "Map"), Vd = I3, tg = i3, R3 = xc, F3 = Vd;
function V3() {
  this.size = 0, this.__data__ = {
    hash: new tg(),
    map: new (F3 || R3)(),
    string: new tg()
  };
}
var C3 = V3;
function M3(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var k3 = M3, N3 = k3;
function D3(e, t) {
  var r = e.__data__;
  return N3(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Ec = D3, L3 = Ec;
function B3(e) {
  var t = L3(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var U3 = B3, q3 = Ec;
function H3(e) {
  return q3(this, e).get(e);
}
var K3 = H3, G3 = Ec;
function J3(e) {
  return G3(this, e).has(e);
}
var W3 = J3, z3 = Ec;
function Y3(e, t) {
  var r = z3(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var X3 = Y3, Q3 = C3, Z3 = U3, eU = K3, tU = W3, rU = X3;
function _i(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_i.prototype.clear = Q3;
_i.prototype.delete = Z3;
_i.prototype.get = eU;
_i.prototype.has = tU;
_i.prototype.set = rU;
var Cd = _i, lS = Cd, nU = "Expected a function";
function Md(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(nU);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var o = e.apply(this, n);
    return r.cache = s.set(i, o) || s, o;
  };
  return r.cache = new (Md.Cache || lS)(), r;
}
Md.Cache = lS;
var iU = Md, sU = iU, oU = 500;
function aU(e) {
  var t = sU(e, function(n) {
    return r.size === oU && r.clear(), n;
  }), r = t.cache;
  return t;
}
var cU = aU, lU = cU, uU = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, fU = /\\(\\)?/g, pU = lU(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(uU, function(r, n, i, s) {
    t.push(i ? s.replace(fU, "$1") : n || r);
  }), t;
}), hU = pU;
function dU(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var mU = dU, rg = $c, yU = mU, vU = An, gU = Fd, bU = 1 / 0, ng = rg ? rg.prototype : void 0, ig = ng ? ng.toString : void 0;
function uS(e) {
  if (typeof e == "string")
    return e;
  if (vU(e))
    return yU(e, uS) + "";
  if (gU(e))
    return ig ? ig.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -bU ? "-0" : t;
}
var $U = uS, OU = $U;
function SU(e) {
  return e == null ? "" : OU(e);
}
var wU = SU, xU = An, EU = XL, PU = hU, AU = wU;
function jU(e, t) {
  return xU(e) ? e : EU(e, t) ? [e] : PU(AU(e));
}
var TU = jU, _U = Fd, IU = 1 / 0;
function RU(e) {
  if (typeof e == "string" || _U(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -IU ? "-0" : t;
}
var FU = RU, VU = TU, CU = FU;
function MU(e, t) {
  t = VU(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[CU(t[r++])];
  return r && r == n ? e : void 0;
}
var kU = MU, NU = kU;
function DU(e, t, r) {
  var n = e == null ? void 0 : NU(e, t);
  return n === void 0 ? r : n;
}
var ns = DU;
const LU = async function(e, t) {
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
  }, h = u.find((m) => m.match(f)).normalize(f), d = await $L(ie(ie({}, f), {}, {
    spec: h,
    allowMetaPatches: !0,
    skipNormalization: !0
  }));
  return !n && Array.isArray(t) && t.length && (d.spec = ns(d.spec, t) || null), d;
}, BU = (e) => async function(t, r) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = ie(ie({}, e), n);
  return LU(t, r, i);
};
var UU = function() {
  return !1;
};
const kd = UU;
var qU = function() {
  return !0;
};
const zr = qU;
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
function HU(e, t) {
  e = e || [], t = t || [];
  var r, n = e.length, i = t.length, s = [];
  for (r = 0; r < n; )
    s[s.length] = e[r], r += 1;
  for (r = 0; r < i; )
    s[s.length] = t[r], r += 1;
  return s;
}
function Pc(e, t) {
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
function Ac(e, t, r) {
  return function() {
    for (var n = [], i = 0, s = e, o = 0; o < t.length || i < arguments.length; ) {
      var a;
      o < t.length && (!me(t[o]) || i >= arguments.length) ? a = t[o] : (a = arguments[i], i += 1), n[o] = a, me(a) || (s -= 1), o += 1;
    }
    return s <= 0 ? r.apply(this, n) : Pc(s, Ac(e, n, r));
  };
}
var KU = /* @__PURE__ */ B(function(t, r) {
  return t === 1 ? ce(r) : Pc(t, Ac(t, [], r));
});
const le = KU;
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
const Js = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function GU(e) {
  return e != null && typeof e["@@transducer/step"] == "function";
}
function Yr(e, t, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!Js(n)) {
      for (var i = 0; i < e.length; ) {
        if (typeof n[e[i]] == "function")
          return n[e[i]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        i += 1;
      }
      if (GU(n)) {
        var s = t.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return s(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function jc(e) {
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
var JU = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t, this.all = !0;
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = function(t) {
    return this.all && (t = this.xf["@@transducer/step"](t, !0)), this.xf["@@transducer/result"](t);
  }, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(r) || (this.all = !1, t = jc(this.xf["@@transducer/step"](t, !1))), t;
  }, e;
}(), WU = /* @__PURE__ */ B(function(t, r) {
  return new JU(t, r);
});
const zU = WU;
var YU = /* @__PURE__ */ B(
  /* @__PURE__ */ Yr(["all"], zU, function(t, r) {
    for (var n = 0; n < r.length; ) {
      if (!t(r[n]))
        return !1;
      n += 1;
    }
    return !0;
  })
);
const Nd = YU;
var XU = /* @__PURE__ */ B(function(t, r) {
  return r > t ? r : t;
});
const Dd = XU;
function is(e, t) {
  for (var r = 0, n = t.length, i = Array(n); r < n; )
    i[r] = e(t[r]), r += 1;
  return i;
}
function Ld(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
var QU = /* @__PURE__ */ ce(function(t) {
  return Js(t) ? !0 : !t || typeof t != "object" || Ld(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
});
const ZU = QU;
var eq = /* @__PURE__ */ function() {
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
function tq(e) {
  return new eq(e);
}
var rq = /* @__PURE__ */ B(function(t, r) {
  return Pc(t.length, function() {
    return t.apply(r, arguments);
  });
});
const Ws = rq;
function nq(e, t, r) {
  for (var n = 0, i = r.length; n < i; ) {
    if (t = e["@@transducer/step"](t, r[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
function sg(e, t, r) {
  for (var n = r.next(); !n.done; ) {
    if (t = e["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return e["@@transducer/result"](t);
}
function og(e, t, r, n) {
  return e["@@transducer/result"](r[n](Ws(e["@@transducer/step"], e), t));
}
var ag = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function Xr(e, t, r) {
  if (typeof e == "function" && (e = tq(e)), ZU(r))
    return nq(e, t, r);
  if (typeof r["fantasy-land/reduce"] == "function")
    return og(e, t, r, "fantasy-land/reduce");
  if (r[ag] != null)
    return sg(e, t, r[ag]());
  if (typeof r.next == "function")
    return sg(e, t, r);
  if (typeof r.reduce == "function")
    return og(e, t, r, "reduce");
  throw new TypeError("reduce: list must be array or iterable");
}
var iq = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t;
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = ft.result, e.prototype["@@transducer/step"] = function(t, r) {
    return this.xf["@@transducer/step"](t, this.f(r));
  }, e;
}(), sq = /* @__PURE__ */ B(function(t, r) {
  return new iq(t, r);
});
const oq = sq;
function yt(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var cg = Object.prototype.toString, aq = /* @__PURE__ */ function() {
  return cg.call(arguments) === "[object Arguments]" ? function(t) {
    return cg.call(t) === "[object Arguments]";
  } : function(t) {
    return yt("callee", t);
  };
}();
const fS = aq;
var cq = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), lg = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], ug = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), lq = function(t, r) {
  for (var n = 0; n < t.length; ) {
    if (t[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, uq = /* @__PURE__ */ ce(typeof Object.keys == "function" && !ug ? function(t) {
  return Object(t) !== t ? [] : Object.keys(t);
} : function(t) {
  if (Object(t) !== t)
    return [];
  var r, n, i = [], s = ug && fS(t);
  for (r in t)
    yt(r, t) && (!s || r !== "length") && (i[i.length] = r);
  if (cq)
    for (n = lg.length - 1; n >= 0; )
      r = lg[n], yt(r, t) && !lq(i, r) && (i[i.length] = r), n -= 1;
  return i;
});
const Yt = uq;
var fq = /* @__PURE__ */ B(
  /* @__PURE__ */ Yr(["fantasy-land/map", "map"], oq, function(t, r) {
    switch (Object.prototype.toString.call(r)) {
      case "[object Function]":
        return le(r.length, function() {
          return t.call(this, r.apply(this, arguments));
        });
      case "[object Object]":
        return Xr(function(n, i) {
          return n[i] = t(r[i]), n;
        }, {}, Yt(r));
      default:
        return is(t, r);
    }
  })
);
const zs = fq, Tc = Number.isInteger || function(t) {
  return t << 0 === t;
};
var pq = /* @__PURE__ */ B(function(t, r) {
  var n = t < 0 ? r.length + t : t;
  return Ld(r) ? r.charAt(n) : r[n];
});
const _c = pq;
var hq = /* @__PURE__ */ B(function(t, r) {
  if (r != null)
    return Tc(t) ? _c(t, r) : r[t];
});
const Ys = hq;
var dq = /* @__PURE__ */ B(function(t, r) {
  return zs(Ys(t), r);
});
const Bd = dq;
var mq = /* @__PURE__ */ nt(Xr);
const jn = mq;
var yq = /* @__PURE__ */ ce(function(t) {
  return le(jn(Dd, 0, Bd("length", t)), function() {
    for (var r = 0, n = t.length; r < n; ) {
      if (!t[r].apply(this, arguments))
        return !1;
      r += 1;
    }
    return !0;
  });
});
const vq = yq;
var gq = /* @__PURE__ */ ce(function(t) {
  return function() {
    return t;
  };
});
const U = gq;
var bq = /* @__PURE__ */ B(function(t, r) {
  return t && r;
});
const $q = bq;
var Oq = /* @__PURE__ */ ce(function(t) {
  return le(jn(Dd, 0, Bd("length", t)), function() {
    for (var r = 0, n = t.length; r < n; ) {
      if (t[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
const Sq = Oq;
var wq = /* @__PURE__ */ B(function(t, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](t) : typeof t.ap == "function" ? t.ap(r) : typeof t == "function" ? function(n) {
    return t(n)(r(n));
  } : Xr(function(n, i) {
    return HU(n, zs(i, r));
  }, [], t);
});
const xq = wq;
var Eq = /* @__PURE__ */ B(function(t, r) {
  return t.apply(this, r);
});
const Pq = Eq;
var Aq = /* @__PURE__ */ ce(function(t) {
  for (var r = Yt(t), n = r.length, i = [], s = 0; s < n; )
    i[s] = t[r[s]], s += 1;
  return i;
});
const jq = Aq;
function Tq(e, t, r) {
  if (Tc(e) && Js(r)) {
    var n = [].concat(r);
    return n[e] = t, n;
  }
  var i = {};
  for (var s in r)
    i[s] = r[s];
  return i[e] = t, i;
}
var _q = /* @__PURE__ */ ce(function(t) {
  return t == null;
});
const Ss = _q;
var Iq = /* @__PURE__ */ nt(function e(t, r, n) {
  if (t.length === 0)
    return r;
  var i = t[0];
  if (t.length > 1) {
    var s = !Ss(n) && yt(i, n) ? n[i] : Tc(t[1]) ? [] : {};
    r = e(Array.prototype.slice.call(t, 1), r, s);
  }
  return Tq(i, r, n);
});
const Rq = Iq;
function Ud(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object Function]" || t === "[object AsyncFunction]" || t === "[object GeneratorFunction]" || t === "[object AsyncGeneratorFunction]";
}
var Fq = /* @__PURE__ */ B(function(t, r) {
  var n = le(t, r);
  return le(t, function() {
    return Xr(xq, zs(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
const Vq = Fq;
var Cq = /* @__PURE__ */ ce(function(t) {
  return Vq(t.length, t);
});
const qd = Cq;
var Mq = /* @__PURE__ */ B(function(t, r) {
  return Ud(t) ? function() {
    return t.apply(this, arguments) && r.apply(this, arguments);
  } : qd($q)(t, r);
});
const Tn = Mq;
function pS(e) {
  return new RegExp(e.source, (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : ""));
}
var kq = /* @__PURE__ */ ce(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
const St = kq;
function hS(e, t, r, n) {
  var i = function(o) {
    for (var a = t.length, c = 0; c < a; ) {
      if (e === t[c])
        return r[c];
      c += 1;
    }
    t[c] = e, r[c] = o;
    for (var l in e)
      e.hasOwnProperty(l) && (o[l] = n ? hS(e[l], t, r, !0) : e[l]);
    return o;
  };
  switch (St(e)) {
    case "Object":
      return i(Object.create(Object.getPrototypeOf(e)));
    case "Array":
      return i([]);
    case "Date":
      return new Date(e.valueOf());
    case "RegExp":
      return pS(e);
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
var Nq = /* @__PURE__ */ ce(function(t) {
  return function(r, n) {
    return t(r, n) ? -1 : t(n, r) ? 1 : 0;
  };
});
const Dq = Nq;
var Lq = /* @__PURE__ */ ce(function(t) {
  return !t;
});
const Bq = Lq;
var Uq = /* @__PURE__ */ qd(Bq);
const Ii = Uq;
function qq(e, t) {
  return function() {
    return t.call(this, e.apply(this, arguments));
  };
}
function Hd(e, t) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return t();
    var n = arguments[r - 1];
    return Js(n) || typeof n[e] != "function" ? t.apply(this, arguments) : n[e].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var Hq = /* @__PURE__ */ nt(
  /* @__PURE__ */ Hd("slice", function(t, r, n) {
    return Array.prototype.slice.call(n, t, r);
  })
);
const Xs = Hq;
var Kq = /* @__PURE__ */ ce(
  /* @__PURE__ */ Hd(
    "tail",
    /* @__PURE__ */ Xs(1, 1 / 0)
  )
);
const dS = Kq;
function xe() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return Pc(arguments[0].length, jn(qq, arguments[0], dS(arguments)));
}
var Gq = /* @__PURE__ */ _c(0);
const Jq = Gq;
function Wq(e) {
  return e;
}
var zq = /* @__PURE__ */ ce(Wq);
const Yq = zq;
function fg(e) {
  for (var t = [], r; !(r = e.next()).done; )
    t.push(r.value);
  return t;
}
function Va(e, t, r) {
  for (var n = 0, i = r.length; n < i; ) {
    if (e(t, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function Xq(e) {
  var t = String(e).match(/^function (\w*)/);
  return t == null ? "" : t[1];
}
function Qq(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
const sa = typeof Object.is == "function" ? Object.is : Qq;
function pg(e, t, r, n) {
  var i = fg(e), s = fg(t);
  function o(a, c) {
    return Kd(a, c, r.slice(), n.slice());
  }
  return !Va(function(a, c) {
    return !Va(o, c, a);
  }, s, i);
}
function Kd(e, t, r, n) {
  if (sa(e, t))
    return !0;
  var i = St(e);
  if (i !== St(t))
    return !1;
  if (typeof e["fantasy-land/equals"] == "function" || typeof t["fantasy-land/equals"] == "function")
    return typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t) && typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e);
  if (typeof e.equals == "function" || typeof t.equals == "function")
    return typeof e.equals == "function" && e.equals(t) && typeof t.equals == "function" && t.equals(e);
  switch (i) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof e.constructor == "function" && Xq(e.constructor) === "Promise")
        return e === t;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof e == typeof t && sa(e.valueOf(), t.valueOf())))
        return !1;
      break;
    case "Date":
      if (!sa(e.valueOf(), t.valueOf()))
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
      return e.size !== t.size ? !1 : pg(e.entries(), t.entries(), r.concat([e]), n.concat([t]));
    case "Set":
      return e.size !== t.size ? !1 : pg(e.values(), t.values(), r.concat([e]), n.concat([t]));
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
  var o = Yt(e);
  if (o.length !== Yt(t).length)
    return !1;
  var a = r.concat([e]), c = n.concat([t]);
  for (s = o.length - 1; s >= 0; ) {
    var l = o[s];
    if (!(yt(l, t) && Kd(t[l], e[l], a, c)))
      return !1;
    s -= 1;
  }
  return !0;
}
var Zq = /* @__PURE__ */ B(function(t, r) {
  return Kd(t, r, [], []);
});
const vr = Zq;
function e4(e, t, r) {
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
    if (vr(e[r], t))
      return r;
    r += 1;
  }
  return -1;
}
function Ca(e, t) {
  return e4(t, e, 0) >= 0;
}
function vf(e) {
  var t = e.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + t.replace(/"/g, '\\"') + '"';
}
var zi = function(t) {
  return (t < 10 ? "0" : "") + t;
}, t4 = typeof Date.prototype.toISOString == "function" ? function(t) {
  return t.toISOString();
} : function(t) {
  return t.getUTCFullYear() + "-" + zi(t.getUTCMonth() + 1) + "-" + zi(t.getUTCDate()) + "T" + zi(t.getUTCHours()) + ":" + zi(t.getUTCMinutes()) + ":" + zi(t.getUTCSeconds()) + "." + (t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
const r4 = t4;
function mS(e) {
  return function() {
    return !e.apply(this, arguments);
  };
}
function n4(e, t) {
  for (var r = 0, n = t.length, i = []; r < n; )
    e(t[r]) && (i[i.length] = t[r]), r += 1;
  return i;
}
function Ma(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
var i4 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t;
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = ft.result, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(r) ? this.xf["@@transducer/step"](t, r) : t;
  }, e;
}(), s4 = /* @__PURE__ */ B(function(t, r) {
  return new i4(t, r);
});
const o4 = s4;
var a4 = /* @__PURE__ */ B(
  /* @__PURE__ */ Yr(["fantasy-land/filter", "filter"], o4, function(e, t) {
    return Ma(t) ? Xr(function(r, n) {
      return e(t[n]) && (r[n] = t[n]), r;
    }, {}, Yt(t)) : (
      // else
      n4(e, t)
    );
  })
);
const c4 = a4;
var l4 = /* @__PURE__ */ B(function(t, r) {
  return c4(mS(t), r);
});
const u4 = l4;
function yS(e, t) {
  var r = function(o) {
    var a = t.concat([e]);
    return Ca(o, a) ? "<Circular>" : yS(o, a);
  }, n = function(s, o) {
    return is(function(a) {
      return vf(a) + ": " + r(s[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(e)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + is(r, e).join(", ") + "))";
    case "[object Array]":
      return "[" + is(r, e).concat(n(e, u4(function(s) {
        return /^\d+$/.test(s);
      }, Yt(e)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof e == "object" ? "new Boolean(" + r(e.valueOf()) + ")" : e.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(e.valueOf()) ? r(NaN) : vf(r4(e))) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof e == "object" ? "new Number(" + r(e.valueOf()) + ")" : 1 / e === -1 / 0 ? "-0" : e.toString(10);
    case "[object String]":
      return typeof e == "object" ? "new String(" + r(e.valueOf()) + ")" : vf(e);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof e.toString == "function") {
        var i = e.toString();
        if (i !== "[object Object]")
          return i;
      }
      return "{" + n(e, Yt(e)).join(", ") + "}";
  }
}
var f4 = /* @__PURE__ */ ce(function(t) {
  return yS(t, []);
});
const ka = f4;
var p4 = /* @__PURE__ */ ce(function(t) {
  return le(t.length, t);
});
const Ic = p4;
var h4 = /* @__PURE__ */ B(function(t, r) {
  return le(jn(Dd, 0, Bd("length", r)), function() {
    var n = arguments, i = this;
    return t.apply(i, is(function(s) {
      return s.apply(i, n);
    }, r));
  });
});
const d4 = h4;
var m4 = /* @__PURE__ */ function() {
  function e(t, r, n, i) {
    this.valueFn = t, this.valueAcc = r, this.keyFn = n, this.xf = i, this.inputs = {};
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = function(t) {
    var r;
    for (r in this.inputs)
      if (yt(r, this.inputs) && (t = this.xf["@@transducer/step"](t, this.inputs[r]), t["@@transducer/reduced"])) {
        t = t["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](t);
  }, e.prototype["@@transducer/step"] = function(t, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, this.valueAcc], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), t;
  }, e;
}(), y4 = /* @__PURE__ */ Ac(4, [], function(t, r, n, i) {
  return new m4(t, r, n, i);
});
const v4 = y4;
var g4 = /* @__PURE__ */ Ac(
  4,
  [],
  /* @__PURE__ */ Yr([], v4, function(t, r, n, i) {
    return Xr(function(s, o) {
      var a = n(o), c = t(yt(a, s) ? s[a] : hS(r, [], [], !1), o);
      return c && c["@@transducer/reduced"] ? jc(s) : (s[a] = c, s);
    }, {}, i);
  })
);
const b4 = g4;
var $4 = /* @__PURE__ */ B(function(t, r) {
  return r == null || r !== r ? t : r;
});
const On = $4;
var O4 = /* @__PURE__ */ function() {
  function e() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return e.prototype.add = function(t) {
    return !hg(t, !0, this);
  }, e.prototype.has = function(t) {
    return hg(t, !1, this);
  }, e;
}();
function hg(e, t, r) {
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
      return r._nativeSet !== null ? t ? (i = r._nativeSet.size, r._nativeSet.add(e), s = r._nativeSet.size, s === i) : r._nativeSet.has(e) : n in r._items ? Ca(e, r._items[n]) ? !0 : (t && r._items[n].push(e), !1) : (t && (r._items[n] = [e]), !1);
    case "undefined":
      return r._items[n] ? !0 : (t && (r._items[n] = !0), !1);
    case "object":
      if (e === null)
        return r._items.null ? !0 : (t && (r._items.null = !0), !1);
    default:
      return n = Object.prototype.toString.call(e), n in r._items ? Ca(e, r._items[n]) ? !0 : (t && r._items[n].push(e), !1) : (t && (r._items[n] = [e]), !1);
  }
}
const S4 = O4;
var w4 = /* @__PURE__ */ B(function(t, r) {
  for (var n = [], i = 0, s = t.length, o = r.length, a = new S4(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; i < s; )
    a.add(t[i]) && (n[n.length] = t[i]), i += 1;
  return n;
});
const x4 = w4;
var E4 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.n = t, this.i = 0;
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = ft.result, e.prototype["@@transducer/step"] = function(t, r) {
    this.i += 1;
    var n = this.n === 0 ? t : this.xf["@@transducer/step"](t, r);
    return this.n >= 0 && this.i >= this.n ? jc(n) : n;
  }, e;
}(), P4 = /* @__PURE__ */ B(function(t, r) {
  return new E4(t, r);
});
const A4 = P4;
var j4 = /* @__PURE__ */ B(
  /* @__PURE__ */ Yr(["take"], A4, function(t, r) {
    return Xs(0, t < 0 ? 1 / 0 : t, r);
  })
);
const T4 = j4;
function _4(e, t) {
  for (var r = t.length - 1; r >= 0 && e(t[r]); )
    r -= 1;
  return Xs(0, r + 1, t);
}
var I4 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.f = t, this.retained = [], this.xf = r;
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = function(t) {
    return this.retained = null, this.xf["@@transducer/result"](t);
  }, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(r) ? this.retain(t, r) : this.flush(t, r);
  }, e.prototype.flush = function(t, r) {
    return t = Xr(this.xf["@@transducer/step"], t, this.retained), this.retained = [], this.xf["@@transducer/step"](t, r);
  }, e.prototype.retain = function(t, r) {
    return this.retained.push(r), t;
  }, e;
}(), R4 = /* @__PURE__ */ B(function(t, r) {
  return new I4(t, r);
});
const F4 = R4;
var V4 = /* @__PURE__ */ B(
  /* @__PURE__ */ Yr([], F4, _4)
);
const C4 = V4;
var M4 = /* @__PURE__ */ _c(-1);
const Qs = M4;
var k4 = /* @__PURE__ */ function() {
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
}(), N4 = /* @__PURE__ */ B(function(t, r) {
  return new k4(t, r);
});
const D4 = N4;
var L4 = /* @__PURE__ */ B(
  /* @__PURE__ */ Yr(["dropWhile"], D4, function(t, r) {
    for (var n = 0, i = r.length; n < i && t(r[n]); )
      n += 1;
    return Xs(n, 1 / 0, r);
  })
);
const B4 = L4;
var U4 = /* @__PURE__ */ B(function(t, r) {
  return t || r;
});
const q4 = U4;
var H4 = /* @__PURE__ */ B(function(t, r) {
  return Ud(t) ? function() {
    return t.apply(this, arguments) || r.apply(this, arguments);
  } : qd(q4)(t, r);
});
const K4 = H4;
function G4(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object Uint8ClampedArray]" || t === "[object Int8Array]" || t === "[object Uint8Array]" || t === "[object Int16Array]" || t === "[object Uint16Array]" || t === "[object Int32Array]" || t === "[object Uint32Array]" || t === "[object Float32Array]" || t === "[object Float64Array]" || t === "[object BigInt64Array]" || t === "[object BigUint64Array]";
}
var J4 = /* @__PURE__ */ ce(function(t) {
  return t != null && typeof t["fantasy-land/empty"] == "function" ? t["fantasy-land/empty"]() : t != null && t.constructor != null && typeof t.constructor["fantasy-land/empty"] == "function" ? t.constructor["fantasy-land/empty"]() : t != null && typeof t.empty == "function" ? t.empty() : t != null && t.constructor != null && typeof t.constructor.empty == "function" ? t.constructor.empty() : Js(t) ? [] : Ld(t) ? "" : Ma(t) ? {} : fS(t) ? function() {
    return arguments;
  }() : G4(t) ? t.constructor.from("") : void 0;
});
const W4 = J4;
var z4 = /* @__PURE__ */ ce(function(t) {
  return le(t.length, function(r, n) {
    var i = Array.prototype.slice.call(arguments, 0);
    return i[0] = n, i[1] = r, t.apply(this, i);
  });
});
const Y4 = z4;
var X4 = /* @__PURE__ */ B(
  /* @__PURE__ */ Hd(
    "groupBy",
    /* @__PURE__ */ b4(function(e, t) {
      return e.push(t), e;
    }, [])
  )
);
const Q4 = X4;
var Z4 = /* @__PURE__ */ B(function(t, r) {
  if (t.length === 0 || Ss(r))
    return !1;
  for (var n = r, i = 0; i < t.length; )
    if (!Ss(n) && yt(t[i], n))
      n = n[t[i]], i += 1;
    else
      return !1;
  return !0;
});
const e6 = Z4;
var t6 = /* @__PURE__ */ B(function(t, r) {
  return e6([t], r);
});
const un = t6;
var r6 = /* @__PURE__ */ B(function(t, r) {
  return Ss(r) ? !1 : t in r;
});
const ss = r6;
var n6 = /* @__PURE__ */ B(sa);
const Qr = n6;
var i6 = /* @__PURE__ */ nt(function(t, r, n) {
  return le(Math.max(t.length, r.length, n.length), function() {
    return t.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
});
const Gd = i6;
var s6 = /* @__PURE__ */ B(Ca);
const o6 = s6;
var a6 = /* @__PURE__ */ Xs(0, -1);
const c6 = a6;
var l6 = /* @__PURE__ */ B(function(t, r) {
  return le(t + 1, function() {
    var n = arguments[t];
    if (n != null && Ud(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, t));
    throw new TypeError(ka(n) + ' does not have a method named "' + r + '"');
  });
});
const Jd = l6;
var u6 = /* @__PURE__ */ ce(function(t) {
  return t != null && vr(t, W4(t));
});
const Zs = u6;
var f6 = /* @__PURE__ */ Jd(1, "join");
const vS = f6;
function dg(e) {
  return Object.prototype.toString.call(e) === "[object Number]";
}
var p6 = /* @__PURE__ */ B(function(t, r) {
  return function(n) {
    return function(i) {
      return zs(function(s) {
        return r(s, i);
      }, n(t(i)));
    };
  };
});
const h6 = p6;
var d6 = /* @__PURE__ */ B(function(t, r) {
  return t.map(function(n) {
    for (var i = r, s = 0, o; s < n.length; ) {
      if (i == null)
        return;
      o = n[s], i = Tc(o) ? _c(o, i) : i[o], s += 1;
    }
    return i;
  });
});
const m6 = d6;
var y6 = /* @__PURE__ */ B(function(t, r) {
  return m6([t], r)[0];
});
const lt = y6;
var v6 = /* @__PURE__ */ B(function(t, r) {
  return Xr(function(n, i) {
    return n[i] = t(r[i], i, r), n;
  }, {}, Yt(r));
});
const g6 = v6;
var b6 = /* @__PURE__ */ nt(function(t, r, n) {
  var i = {}, s;
  for (s in r)
    yt(s, r) && (i[s] = yt(s, n) ? t(s, r[s], n[s]) : r[s]);
  for (s in n)
    yt(s, n) && !yt(s, i) && (i[s] = n[s]);
  return i;
});
const $6 = b6;
var O6 = /* @__PURE__ */ nt(function e(t, r, n) {
  return $6(function(i, s, o) {
    return Ma(s) && Ma(o) ? e(t, s, o) : t(i, s, o);
  }, r, n);
});
const S6 = O6;
var w6 = /* @__PURE__ */ B(function(t, r) {
  return S6(function(n, i, s) {
    return s;
  }, t, r);
});
const x6 = w6;
var E6 = /* @__PURE__ */ B(function(t, r) {
  return Nd(mS(t), r);
});
const Gp = E6;
var gS = function(e) {
  return {
    value: e,
    map: function(t) {
      return gS(t(e));
    }
  };
}, P6 = /* @__PURE__ */ nt(function(t, r, n) {
  return t(function(i) {
    return gS(r(i));
  })(n).value;
});
const A6 = P6;
var j6 = /* @__PURE__ */ nt(function(t, r, n) {
  return On(t, lt(r, n));
});
const bS = j6;
var T6 = /* @__PURE__ */ nt(function(t, r, n) {
  return t(lt(r, n));
});
const pi = T6;
var _6 = /* @__PURE__ */ B(function(t, r) {
  for (var n = {}, i = 0; i < t.length; )
    t[i] in r && (n[t[i]] = r[t[i]]), i += 1;
  return n;
});
const $S = _6;
var I6 = /* @__PURE__ */ nt(function(t, r, n) {
  return vr(r, Ys(t, n));
});
const Rc = I6;
var R6 = /* @__PURE__ */ nt(function(t, r, n) {
  return On(t, Ys(r, n));
});
const Wn = R6;
var F6 = /* @__PURE__ */ nt(function(t, r, n) {
  return t(Ys(r, n));
});
const V6 = F6;
var C6 = /* @__PURE__ */ B(function(t, r) {
  if (!(dg(t) && dg(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = [], i = t; i < r; )
    n.push(i), i += 1;
  return n;
});
const M6 = C6;
var k6 = /* @__PURE__ */ ce(jc);
const N6 = k6;
var D6 = /* @__PURE__ */ nt(function(t, r, n) {
  return n.replace(t, r);
});
const hi = D6;
var L6 = /* @__PURE__ */ B(function(t, r) {
  return Array.prototype.slice.call(r, 0).sort(t);
});
const B6 = L6;
var U6 = /* @__PURE__ */ Jd(1, "split");
const Wd = U6;
var q6 = /* @__PURE__ */ B(function(e, t) {
  return vr(T4(e.length, t), e);
});
const OS = q6;
function H6(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
var K6 = /* @__PURE__ */ B(function(t, r) {
  if (!H6(t))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + ka(t));
  return pS(t).test(r);
});
const Fc = K6;
var G6 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.pred = t, this.items = [];
  }
  return e.prototype["@@transducer/init"] = ft.init, e.prototype["@@transducer/result"] = ft.result, e.prototype["@@transducer/step"] = function(t, r) {
    return Va(this.pred, r, this.items) ? t : (this.items.push(r), this.xf["@@transducer/step"](t, r));
  }, e;
}(), J6 = /* @__PURE__ */ B(function(t, r) {
  return new G6(t, r);
});
const W6 = J6;
var z6 = /* @__PURE__ */ B(
  /* @__PURE__ */ Yr([], W6, function(e, t) {
    for (var r = 0, n = t.length, i = [], s; r < n; )
      s = t[r], Va(e, s, i) || (i[i.length] = s), r += 1;
    return i;
  })
);
const Y6 = z6;
var X6 = /* @__PURE__ */ nt(function(t, r, n) {
  return t(n) ? r(n) : n;
});
const Q6 = X6;
var Z6 = U(void 0);
const eo = Z6;
var e8 = vr(eo());
const gr = e8;
var t8 = Ii(gr);
const Na = t8;
var r8 = vr(null);
const zd = r8;
var n8 = Ii(zd);
const SS = n8;
var i8 = Ii(Ss);
const s8 = i8;
var o8 = le(1, xe(St, Qr("GeneratorFunction")));
const a8 = o8;
var c8 = le(1, xe(St, Qr("AsyncFunction")));
const l8 = c8;
var u8 = Sq([xe(St, Qr("Function")), a8, l8]);
const br = u8;
var f8 = le(1, br(Array.isArray) ? Array.isArray : xe(St, Qr("Array")));
const wS = f8;
var p8 = Tn(wS, Zs);
const h8 = p8;
var d8 = Ii(Zs);
const xS = d8;
var m8 = Tn(wS, xS);
const y8 = m8;
var v8 = le(1, xe(St, Qr("String")));
const _n = v8;
var g8 = vr("");
const ES = g8;
function Jp(e) {
  return Jp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jp(e);
}
var b8 = function(t) {
  return Jp(t) === "object";
};
const PS = b8;
var $8 = le(1, Tn(SS, K4(PS, br)));
const O8 = $8;
var S8 = Ii(O8);
const w8 = S8;
var x8 = vq([_n, w8, xS]);
const Yd = x8;
var E8 = Ii(br);
const P8 = E8;
var A8 = le(1, Tn(SS, PS));
const j8 = A8;
var T8 = xe(St, Qr("Object")), _8 = xe(ka, vr(ka(Object))), I8 = pi(Tn(br, _8), ["constructor"]), R8 = le(1, function(e) {
  if (!j8(e) || !T8(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  return zd(t) ? !0 : I8(t);
});
const ws = R8;
var F8 = le(1, xe(St, Qr("Number")));
const V8 = F8;
var C8 = Tn(V8, isFinite);
const M8 = C8;
var k8 = le(1, M8), N8 = br(Number.isFinite) ? le(1, Ws(Number.isFinite, Number)) : k8;
const D8 = N8;
var L8 = Tn(D8, d4(vr, [Math.floor, Yq]));
const B8 = L8;
var U8 = le(1, B8), q8 = br(Number.isInteger) ? le(1, Ws(Number.isInteger, Number)) : U8;
const H8 = q8;
var K8 = le(1, xe(St, Qr("RegExp")));
const G8 = K8;
var J8 = U(eo());
const di = J8;
var W8 = le(1, Ws(Promise.all, Promise));
const z8 = W8;
function Y8(e) {
  return eH(e) || Z8(e) || Q8(e) || X8();
}
function X8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q8(e, t) {
  if (e) {
    if (typeof e == "string")
      return Wp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Wp(e, t);
  }
}
function Z8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function eH(e) {
  if (Array.isArray(e))
    return Wp(e);
}
function Wp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var tH = Dq(function(e, t) {
  return e.length > t.length;
}), rH = xe(B6(tH), Jq, Ys("length")), nH = Ic(function(e, t, r) {
  var n = r.apply(void 0, Y8(e));
  return s8(n) ? N6(n) : t;
}), iH = function(t) {
  var r = rH(t);
  return le(r, function() {
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return jn(nH(i), void 0, t);
  });
}, sH = Gd(y8, iH, eo);
const AS = sH;
var oH = Y4(o6);
const Vc = oH;
var aH = le(3, function(e, t, r) {
  var n = lt(e, r), i = lt(c6(e), r);
  if (!P8(n) && !h8(e)) {
    var s = Ws(n, i);
    return Pq(s, t);
  }
});
const mi = aH;
var cH = Q6(_n, hi(/[.*+?^${}()|[\]\\-]/g, "\\$&"));
const lH = cH;
var uH = function(t, r, n) {
  if (n == null || t == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, mg = function(t, r) {
  if (typeof t != "string" && !(t instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, fH = function(t) {
  if (typeof t != "string" && !(t instanceof String) && !(t instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, pH = function(t, r, n) {
  uH(t, r, n), mg(n, "str"), mg(r, "replaceValue"), fH(t);
  var i = new RegExp(G8(t) ? t : lH(t), "g");
  return hi(i, r, n);
};
const hH = pH;
var dH = le(3, hH), mH = Jd(2, "replaceAll"), yH = br(String.prototype.replaceAll) ? mH : dH;
const vH = yH;
var gH = Ic(function(e, t) {
  return xe(Wd(""), C4(Vc(e)), vS(""))(t);
});
const bH = gH;
var $H = Ic(function(e, t) {
  return xe(Wd(""), B4(Vc(e)), vS(""))(t);
});
const Xd = $H;
function OH(e) {
  return e === null;
}
var SH = OH, wH = Jr, xH = An, EH = Wr, PH = "[object String]";
function AH(e) {
  return typeof e == "string" || !xH(e) && EH(e) && wH(e) == PH;
}
var jH = AH, TH = Jr, _H = Wr, IH = "[object Number]";
function RH(e) {
  return typeof e == "number" || _H(e) && TH(e) == IH;
}
var FH = RH, VH = Jr, CH = Wr, MH = "[object Boolean]";
function kH(e) {
  return e === !0 || e === !1 || CH(e) && VH(e) == MH;
}
var NH = kH;
let DH = class {
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
var LH = DH, BH = xc;
function UH() {
  this.__data__ = new BH(), this.size = 0;
}
var qH = UH;
function HH(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var KH = HH;
function GH(e) {
  return this.__data__.get(e);
}
var JH = GH;
function WH(e) {
  return this.__data__.has(e);
}
var zH = WH, YH = xc, XH = Vd, QH = Cd, ZH = 200;
function e9(e, t) {
  var r = this.__data__;
  if (r instanceof YH) {
    var n = r.__data__;
    if (!XH || n.length < ZH - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new QH(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var t9 = e9, r9 = xc, n9 = qH, i9 = KH, s9 = JH, o9 = zH, a9 = t9;
function Ri(e) {
  var t = this.__data__ = new r9(e);
  this.size = t.size;
}
Ri.prototype.clear = n9;
Ri.prototype.delete = i9;
Ri.prototype.get = s9;
Ri.prototype.has = o9;
Ri.prototype.set = a9;
var c9 = Ri, l9 = "__lodash_hash_undefined__";
function u9(e) {
  return this.__data__.set(e, l9), this;
}
var f9 = u9;
function p9(e) {
  return this.__data__.has(e);
}
var h9 = p9, d9 = Cd, m9 = f9, y9 = h9;
function Da(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new d9(); ++t < r; )
    this.add(e[t]);
}
Da.prototype.add = Da.prototype.push = m9;
Da.prototype.has = y9;
var v9 = Da;
function g9(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var b9 = g9;
function $9(e, t) {
  return e.has(t);
}
var O9 = $9, S9 = v9, w9 = b9, x9 = O9, E9 = 1, P9 = 2;
function A9(e, t, r, n, i, s) {
  var o = r & E9, a = e.length, c = t.length;
  if (a != c && !(o && c > a))
    return !1;
  var l = s.get(e), u = s.get(t);
  if (l && u)
    return l == t && u == e;
  var f = -1, p = !0, h = r & P9 ? new S9() : void 0;
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
      if (!w9(t, function(g, S) {
        if (!x9(h, S) && (d === g || i(d, g, r, n, s)))
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
var jS = A9, j9 = yr, T9 = j9.Uint8Array, _9 = T9;
function I9(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var R9 = I9;
function F9(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var V9 = F9, yg = $c, vg = _9, C9 = cS, M9 = jS, k9 = R9, N9 = V9, D9 = 1, L9 = 2, B9 = "[object Boolean]", U9 = "[object Date]", q9 = "[object Error]", H9 = "[object Map]", K9 = "[object Number]", G9 = "[object RegExp]", J9 = "[object Set]", W9 = "[object String]", z9 = "[object Symbol]", Y9 = "[object ArrayBuffer]", X9 = "[object DataView]", gg = yg ? yg.prototype : void 0, gf = gg ? gg.valueOf : void 0;
function Q9(e, t, r, n, i, s, o) {
  switch (r) {
    case X9:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Y9:
      return !(e.byteLength != t.byteLength || !s(new vg(e), new vg(t)));
    case B9:
    case U9:
    case K9:
      return C9(+e, +t);
    case q9:
      return e.name == t.name && e.message == t.message;
    case G9:
    case W9:
      return e == t + "";
    case H9:
      var a = k9;
    case J9:
      var c = n & D9;
      if (a || (a = N9), e.size != t.size && !c)
        return !1;
      var l = o.get(e);
      if (l)
        return l == t;
      n |= L9, o.set(e, t);
      var u = M9(a(e), a(t), n, i, s, o);
      return o.delete(e), u;
    case z9:
      if (gf)
        return gf.call(e) == gf.call(t);
  }
  return !1;
}
var Z9 = Q9;
function e5(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var t5 = e5, r5 = t5, n5 = An;
function i5(e, t, r) {
  var n = t(e);
  return n5(e) ? n : r5(n, r(e));
}
var s5 = i5;
function o5(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (s[i++] = o);
  }
  return s;
}
var a5 = o5;
function c5() {
  return [];
}
var l5 = c5, u5 = a5, f5 = l5, p5 = Object.prototype, h5 = p5.propertyIsEnumerable, bg = Object.getOwnPropertySymbols, d5 = bg ? function(e) {
  return e == null ? [] : (e = Object(e), u5(bg(e), function(t) {
    return h5.call(e, t);
  }));
} : f5, m5 = d5;
function y5(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var v5 = y5, g5 = Jr, b5 = Wr, $5 = "[object Arguments]";
function O5(e) {
  return b5(e) && g5(e) == $5;
}
var S5 = O5, $g = S5, w5 = Wr, TS = Object.prototype, x5 = TS.hasOwnProperty, E5 = TS.propertyIsEnumerable, P5 = $g(function() {
  return arguments;
}()) ? $g : function(e) {
  return w5(e) && x5.call(e, "callee") && !E5.call(e, "callee");
}, A5 = P5, xs = {}, j5 = {
  get exports() {
    return xs;
  },
  set exports(e) {
    xs = e;
  }
};
function T5() {
  return !1;
}
var _5 = T5;
(function(e, t) {
  var r = yr, n = _5, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, o = s && s.exports === i, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, l = c || n;
  e.exports = l;
})(j5, xs);
var I5 = 9007199254740991, R5 = /^(?:0|[1-9]\d*)$/;
function F5(e, t) {
  var r = typeof e;
  return t = t ?? I5, !!t && (r == "number" || r != "symbol" && R5.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var V5 = F5, C5 = 9007199254740991;
function M5(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= C5;
}
var _S = M5, k5 = Jr, N5 = _S, D5 = Wr, L5 = "[object Arguments]", B5 = "[object Array]", U5 = "[object Boolean]", q5 = "[object Date]", H5 = "[object Error]", K5 = "[object Function]", G5 = "[object Map]", J5 = "[object Number]", W5 = "[object Object]", z5 = "[object RegExp]", Y5 = "[object Set]", X5 = "[object String]", Q5 = "[object WeakMap]", Z5 = "[object ArrayBuffer]", eK = "[object DataView]", tK = "[object Float32Array]", rK = "[object Float64Array]", nK = "[object Int8Array]", iK = "[object Int16Array]", sK = "[object Int32Array]", oK = "[object Uint8Array]", aK = "[object Uint8ClampedArray]", cK = "[object Uint16Array]", lK = "[object Uint32Array]", ye = {};
ye[tK] = ye[rK] = ye[nK] = ye[iK] = ye[sK] = ye[oK] = ye[aK] = ye[cK] = ye[lK] = !0;
ye[L5] = ye[B5] = ye[Z5] = ye[U5] = ye[eK] = ye[q5] = ye[H5] = ye[K5] = ye[G5] = ye[J5] = ye[W5] = ye[z5] = ye[Y5] = ye[X5] = ye[Q5] = !1;
function uK(e) {
  return D5(e) && N5(e.length) && !!ye[k5(e)];
}
var fK = uK;
function pK(e) {
  return function(t) {
    return e(t);
  };
}
var hK = pK, La = {}, dK = {
  get exports() {
    return La;
  },
  set exports(e) {
    La = e;
  }
};
(function(e, t) {
  var r = iS, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, o = s && r.process, a = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = a;
})(dK, La);
var mK = fK, yK = hK, Og = La, Sg = Og && Og.isTypedArray, vK = Sg ? yK(Sg) : mK, IS = vK, gK = v5, bK = A5, $K = An, OK = xs, SK = V5, wK = IS, xK = Object.prototype, EK = xK.hasOwnProperty;
function PK(e, t) {
  var r = $K(e), n = !r && bK(e), i = !r && !n && OK(e), s = !r && !n && !i && wK(e), o = r || n || i || s, a = o ? gK(e.length, String) : [], c = a.length;
  for (var l in e)
    (t || EK.call(e, l)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    SK(l, c))) && a.push(l);
  return a;
}
var AK = PK, jK = Object.prototype;
function TK(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || jK;
  return e === r;
}
var _K = TK;
function IK(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var RK = IK, FK = RK, VK = FK(Object.keys, Object), CK = VK, MK = _K, kK = CK, NK = Object.prototype, DK = NK.hasOwnProperty;
function LK(e) {
  if (!MK(e))
    return kK(e);
  var t = [];
  for (var r in Object(e))
    DK.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var BK = LK, UK = oS, qK = _S;
function HK(e) {
  return e != null && qK(e.length) && !UK(e);
}
var KK = HK, GK = AK, JK = BK, WK = KK;
function zK(e) {
  return WK(e) ? GK(e) : JK(e);
}
var YK = zK, XK = s5, QK = m5, ZK = YK;
function eG(e) {
  return XK(e, ZK, QK);
}
var tG = eG, wg = tG, rG = 1, nG = Object.prototype, iG = nG.hasOwnProperty;
function sG(e, t, r, n, i, s) {
  var o = r & rG, a = wg(e), c = a.length, l = wg(t), u = l.length;
  if (c != u && !o)
    return !1;
  for (var f = c; f--; ) {
    var p = a[f];
    if (!(o ? p in t : iG.call(t, p)))
      return !1;
  }
  var h = s.get(e), d = s.get(t);
  if (h && d)
    return h == t && d == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var y = o; ++f < c; ) {
    p = a[f];
    var g = e[p], S = t[p];
    if (n)
      var $ = o ? n(S, g, p, t, e, s) : n(g, S, p, e, t, s);
    if (!($ === void 0 ? g === S || i(g, S, r, n, s) : $)) {
      m = !1;
      break;
    }
    y || (y = p == "constructor");
  }
  if (m && !y) {
    var w = e.constructor, x = t.constructor;
    w != x && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof x == "function" && x instanceof x) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var oG = sG, aG = Ai, cG = yr, lG = aG(cG, "DataView"), uG = lG, fG = Ai, pG = yr, hG = fG(pG, "Promise"), dG = hG, mG = Ai, yG = yr, vG = mG(yG, "Set"), gG = vG, bG = Ai, $G = yr, OG = bG($G, "WeakMap"), SG = OG, zp = uG, Yp = Vd, Xp = dG, Qp = gG, Zp = SG, RS = Jr, Fi = aS, xg = "[object Map]", wG = "[object Object]", Eg = "[object Promise]", Pg = "[object Set]", Ag = "[object WeakMap]", jg = "[object DataView]", xG = Fi(zp), EG = Fi(Yp), PG = Fi(Xp), AG = Fi(Qp), jG = Fi(Zp), an = RS;
(zp && an(new zp(new ArrayBuffer(1))) != jg || Yp && an(new Yp()) != xg || Xp && an(Xp.resolve()) != Eg || Qp && an(new Qp()) != Pg || Zp && an(new Zp()) != Ag) && (an = function(e) {
  var t = RS(e), r = t == wG ? e.constructor : void 0, n = r ? Fi(r) : "";
  if (n)
    switch (n) {
      case xG:
        return jg;
      case EG:
        return xg;
      case PG:
        return Eg;
      case AG:
        return Pg;
      case jG:
        return Ag;
    }
  return t;
});
var TG = an, bf = c9, _G = jS, IG = Z9, RG = oG, Tg = TG, _g = An, Ig = xs, FG = IS, VG = 1, Rg = "[object Arguments]", Fg = "[object Array]", Wo = "[object Object]", CG = Object.prototype, Vg = CG.hasOwnProperty;
function MG(e, t, r, n, i, s) {
  var o = _g(e), a = _g(t), c = o ? Fg : Tg(e), l = a ? Fg : Tg(t);
  c = c == Rg ? Wo : c, l = l == Rg ? Wo : l;
  var u = c == Wo, f = l == Wo, p = c == l;
  if (p && Ig(e)) {
    if (!Ig(t))
      return !1;
    o = !0, u = !1;
  }
  if (p && !u)
    return s || (s = new bf()), o || FG(e) ? _G(e, t, r, n, i, s) : IG(e, t, c, r, n, i, s);
  if (!(r & VG)) {
    var h = u && Vg.call(e, "__wrapped__"), d = f && Vg.call(t, "__wrapped__");
    if (h || d) {
      var m = h ? e.value() : e, y = d ? t.value() : t;
      return s || (s = new bf()), i(m, y, r, n, s);
    }
  }
  return p ? (s || (s = new bf()), RG(e, t, r, n, i, s)) : !1;
}
var kG = MG, NG = kG, Cg = Wr;
function FS(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Cg(e) && !Cg(t) ? e !== e && t !== t : NG(e, t, r, n, FS, i);
}
var DG = FS, LG = DG;
function BG(e, t) {
  return LG(e, t);
}
var UG = BG;
let qG = class VS {
  constructor(t, r) {
    this.key = t, this.value = r;
  }
  /**
   * @returns {KeyValuePair}
   */
  clone() {
    const t = new VS();
    return this.key && (t.key = this.key.clone()), this.value && (t.value = this.value.clone()), t;
  }
};
var Qd = qG, HG = "Expected a function";
function KG(e) {
  if (typeof e != "function")
    throw new TypeError(HG);
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
var Cc = KG;
const GG = Cc;
function $f(e) {
  return typeof e == "string" ? (t) => t.element === e : e.constructor && e.extend ? (t) => t instanceof e : e;
}
let CS = class eh {
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
    return t = $f(t), new eh(this.elements.filter(t, r));
  }
  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  reject(t, r) {
    return t = $f(t), new eh(this.elements.filter(GG(t), r));
  }
  /**
   * Returns the first element in the array that satisfies the given value
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  find(t, r) {
    return t = $f(t), this.elements.find(t, r);
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
typeof Symbol < "u" && (CS.prototype[Symbol.iterator] = function() {
  return this.elements[Symbol.iterator]();
});
var Mc = CS;
const JG = UG, zo = Qd, Pr = Mc;
let WG = class oa {
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
    return this.content instanceof oa ? this.content.toValue() : this.content instanceof zo ? {
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
    let n = new Pr();
    const i = (o, a) => (o.push(a), o), s = (o, a) => {
      a.element === r && o.push(a);
      const c = a.findRecursive(r);
      return c && c.reduce(i, o), a.content instanceof zo && (a.content.key && s(o, a.content.key), a.content.value && s(o, a.content.value)), o;
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
    return JG(this.toValue(), t);
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
    if (t instanceof oa)
      this._content = t;
    else if (t instanceof Pr)
      this.content = t.elements;
    else if (typeof t == "string" || typeof t == "number" || typeof t == "boolean" || t === "null" || t == null)
      this._content = t;
    else if (t instanceof zo)
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
    const r = new Pr();
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
      return new Pr(this.content);
    if (this.content instanceof zo) {
      const t = new Pr([this.content.key]);
      return this.content.value && t.push(this.content.value), t;
    }
    return this.content instanceof oa ? new Pr([this.content]) : new Pr();
  }
  /**
  * Returns all of the children elements found within the element recursively.
  * @type ArraySlice
  * @see children
  */
  get recursiveChildren() {
    const t = new Pr();
    return this.children.forEach((r) => {
      t.push(r), r.recursiveChildren.forEach((n) => {
        t.push(n);
      });
    }), t;
  }
};
var $r = WG;
const zG = $r;
let YG = class extends zG {
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
var XG = YG;
const QG = $r;
var ZG = class extends QG {
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
const eJ = $r;
var tJ = class extends eJ {
  constructor(t, r, n) {
    super(t, r, n), this.element = "number";
  }
  primitive() {
    return "number";
  }
};
const rJ = $r;
var nJ = class extends rJ {
  constructor(t, r, n) {
    super(t, r, n), this.element = "boolean";
  }
  primitive() {
    return "boolean";
  }
};
const iJ = Cc, sJ = $r, Mg = Mc;
let Es = class extends sJ {
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
    return new Mg(this.content.filter(t, r));
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  reject(t, r) {
    return this.filter(iJ(t), r);
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
    return new Mg(this.findElements(t, { recursive: !0 }));
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
Es.empty = function() {
  return new this();
};
Es["fantasy-land/empty"] = Es.empty;
typeof Symbol < "u" && (Es.prototype[Symbol.iterator] = function() {
  return this.content[Symbol.iterator]();
});
var MS = Es;
const oJ = Qd, aJ = $r;
var kS = class extends aJ {
  constructor(t, r, n, i) {
    super(new oJ(), n, i), this.element = "member", this.key = t, this.value = r;
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
const cJ = Cc, lJ = Mc;
let uJ = class NS extends lJ {
  map(t, r) {
    return this.elements.map((n) => t.bind(r)(n.value, n.key, n));
  }
  filter(t, r) {
    return new NS(this.elements.filter((n) => t.bind(r)(n.value, n.key, n)));
  }
  reject(t, r) {
    return this.filter(cJ(t.bind(r)));
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
var DS = uJ;
const fJ = Cc, pJ = Oc, hJ = MS, dJ = kS, mJ = DS;
let yJ = class extends hJ {
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
    if (pJ(t))
      return Object.keys(t).forEach((s) => {
        this.set(s, t[s]);
      }), this;
    const n = t, i = this.getMember(n);
    return i ? i.value = r : this.content.push(new dJ(n, r)), this;
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
    return new mJ(this.content).filter(t, r);
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
    return this.filter(fJ(t), r);
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
var vJ = yJ;
const gJ = $r;
var bJ = class extends gJ {
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
const $J = $r;
var OJ = class extends $J {
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
const Vi = $r, LS = XG, BS = ZG, US = tJ, qS = nJ, HS = MS, KS = kS, Zd = vJ, SJ = bJ, GS = OJ, JS = Mc, wJ = DS, xJ = Qd;
function kc(e) {
  return e instanceof Vi ? e : typeof e == "string" ? new BS(e) : typeof e == "number" ? new US(e) : typeof e == "boolean" ? new qS(e) : e === null ? new LS() : Array.isArray(e) ? new HS(e.map(kc)) : typeof e == "object" ? new Zd(e) : e;
}
Vi.prototype.ObjectElement = Zd;
Vi.prototype.RefElement = GS;
Vi.prototype.MemberElement = KS;
Vi.prototype.refract = kc;
JS.prototype.refract = kc;
var WS = {
  Element: Vi,
  NullElement: LS,
  StringElement: BS,
  NumberElement: US,
  BooleanElement: qS,
  ArrayElement: HS,
  MemberElement: KS,
  ObjectElement: Zd,
  LinkElement: SJ,
  RefElement: GS,
  refract: kc,
  ArraySlice: JS,
  ObjectSlice: wJ,
  KeyValuePair: xJ
};
const EJ = SH, PJ = jH, AJ = FH, jJ = NH, TJ = Oc, zS = LH, Ce = WS;
let YS = class {
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
    return this.register("null", Ce.NullElement).register("string", Ce.StringElement).register("number", Ce.NumberElement).register("boolean", Ce.BooleanElement).register("array", Ce.ArrayElement).register("object", Ce.ObjectElement).register("member", Ce.MemberElement).register("ref", Ce.RefElement).register("link", Ce.LinkElement), this.detect(EJ, Ce.NullElement, !1).detect(PJ, Ce.StringElement, !1).detect(AJ, Ce.NumberElement, !1).detect(jJ, Ce.BooleanElement, !1).detect(Array.isArray, Ce.ArrayElement, !1).detect(TJ, Ce.ObjectElement, !1), this;
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
    return new zS(this);
  }
};
zS.prototype.Namespace = YS;
var _J = YS;
const IJ = _J, Dt = WS;
var RJ = IJ, FJ = Dt.Element, Ur = Dt.StringElement, th = Dt.NumberElement, pr = Dt.BooleanElement, rh = Dt.NullElement, pe = Dt.ArrayElement, F = Dt.ObjectElement, Ci = Dt.MemberElement, nh = Dt.RefElement, ih = Dt.LinkElement, em = Dt.refract;
class VJ extends Ur {
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
const Ba = VJ;
class CJ extends Ur {
  constructor(t, r, n) {
    super(t, r, n), this.element = "comment";
  }
}
const Ua = CJ;
class MJ extends pe {
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
    if (gr(r))
      return !1;
    const n = this.content.findIndex((i) => i === r);
    return n === -1 ? !1 : (this.content[n] = t, !0);
  }
}
const kt = MJ;
class kJ extends pe {
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
const qa = kJ;
class XS extends RJ {
  constructor() {
    super(), this.register("annotation", Ba), this.register("comment", Ua), this.register("parseResult", kt), this.register("sourceMap", qa);
  }
}
const QS = new XS(), Mi = (e) => {
  const t = new XS();
  return ws(e) && t.use(e), t;
};
var sh = {}, NJ = {
  get exports() {
    return sh;
  },
  set exports(e) {
    sh = e;
  }
};
(function(e) {
  (function() {
    var t, r, n, i, s, o = "properties", a = "deepProperties", c = "propertyDescriptors", l = "staticProperties", u = "staticDeepProperties", f = "staticPropertyDescriptors", p = "configuration", h = "deepConfiguration", d = "deepProps", m = "deepStatics", y = "deepConf", g = "initializers", S = "methods", $ = "composers", w = "compose";
    function x(Y) {
      return Object.getOwnPropertyNames(Y).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(Y) : []);
    }
    function j(Y, _) {
      return Array.prototype.slice.call(arguments, 2).reduce(Y, _);
    }
    var P = j.bind(0, function(_, I) {
      if (I)
        for (var D = x(I), q = 0; q < D.length; q += 1)
          Object.defineProperty(_, D[q], Object.getOwnPropertyDescriptor(I, D[q]));
      return _;
    });
    function C(Y) {
      return typeof Y == "function";
    }
    function v(Y) {
      return Y && typeof Y == "object" || C(Y);
    }
    function A(Y) {
      return Y && typeof Y == "object" && Y.__proto__ == Object.prototype;
    }
    var T = j.bind(0, function Y(_, I) {
      if (I === t)
        return _;
      if (Array.isArray(I))
        return (Array.isArray(_) ? _ : []).concat(I);
      if (!A(I))
        return I;
      for (var D, q, Q = x(I), ee = 0; ee < Q.length; )
        D = Q[ee++], (q = Object.getOwnPropertyDescriptor(I, D)).hasOwnProperty("value") ? q.value !== t && (_[D] = Y(A(_[D]) || Array.isArray(I[D]) ? _[D] : {}, I[D])) : Object.defineProperty(_, D, q);
      return _;
    });
    function R() {
      return (r = Array.prototype.concat.apply([], arguments).filter(function(Y, _, I) {
        return C(Y) && I.indexOf(Y) === _;
      })).length ? r : t;
    }
    function k(Y) {
      return r = function() {
        return function I(D) {
          var q, Q, ee = I[w] || {}, fe = { __proto__: ee[S] }, Ae = ee[g], st = Array.prototype.slice.apply(arguments), Ve = ee[a];
          if (Ve && T(fe, Ve), (Ve = ee[o]) && P(fe, Ve), (Ve = ee[c]) && Object.defineProperties(fe, Ve), !Ae || !Ae.length)
            return fe;
          for (D === t && (D = {}), ee = 0; ee < Ae.length; )
            C(q = Ae[ee++]) && (fe = (Q = q.call(fe, D, { instance: fe, stamp: I, args: st })) === t ? fe : Q);
          return fe;
        };
      }(), (n = Y[u]) && T(r, n), (n = Y[l]) && P(r, n), (n = Y[f]) && Object.defineProperties(r, n), n = C(r[w]) ? r[w] : de, P(r[w] = function() {
        return n.apply(this, arguments);
      }, Y), r;
    }
    function H(Y, _) {
      function I(q, Q) {
        v(_[q]) && (v(Y[q]) || (Y[q] = {}), (Q || P)(Y[q], _[q]));
      }
      function D(q) {
        (r = R(Y[q], _[q])) && (Y[q] = r);
      }
      return _ && v(_ = _[w] || _) && (I(S), I(o), I(a, T), I(c), I(l), I(u, T), I(f), I(p), I(h, T), D(g), D($)), Y;
    }
    function de() {
      return k(Array.prototype.concat.apply([this], arguments).reduce(H, {}));
    }
    function ve(Y) {
      return C(Y) && C(Y[w]);
    }
    var ne = {};
    function it(Y, _) {
      return function() {
        return (i = {})[Y] = _.apply(t, Array.prototype.concat.apply([{}], arguments)), ((r = this) && r[w] || n).call(r, i);
      };
    }
    ne[S] = it(S, P), ne[o] = ne.props = it(o, P), ne[g] = ne.init = it(g, R), ne[$] = it($, R), ne[a] = ne[d] = it(a, T), ne[l] = ne.statics = it(l, P), ne[u] = ne[m] = it(u, T), ne[p] = ne.conf = it(p, P), ne[h] = ne[y] = it(h, T), ne[c] = it(c, P), ne[f] = it(f, P), n = ne[w] = P(function() {
      for (var _, I, D = 0, q = [], Q = arguments, ee = this; D < Q.length; )
        v(_ = Q[D++]) && q.push(ve(_) ? _ : ((i = {})[S] = (I = _)[S] || t, n = I.props, i[o] = v((r = I[o]) || n) ? P({}, n, r) : t, i[g] = R(I.init, I[g]), i[$] = R(I[$]), n = I[d], i[a] = v((r = I[a]) || n) ? T({}, n, r) : t, i[c] = I[c], n = I.statics, i[l] = v((r = I[l]) || n) ? P({}, n, r) : t, n = I[m], i[u] = v((r = I[u]) || n) ? T({}, n, r) : t, r = I[f], i[f] = v((n = I.name && { name: { value: I.name } }) || r) ? P({}, r, n) : t, n = I.conf, i[p] = v((r = I[p]) || n) ? P({}, n, r) : t, n = I[y], i[h] = v((r = I[h]) || n) ? T({}, n, r) : t, i));
      if (_ = de.apply(ee || s, q), ee && q.unshift(ee), Array.isArray(Q = _[w][$]))
        for (D = 0; D < Q.length; )
          _ = ve(ee = Q[D++]({ stamp: _, composables: q })) ? ee : _;
      return _;
    }, ne), ne.create = function() {
      return this.apply(t, arguments);
    }, (i = {})[l] = ne, s = de(i), n[w] = n.bind(), n.version = "4.3.2", e.exports = n;
  })();
})(NJ);
const O = sh;
var oh = {}, DJ = {
  get exports() {
    return oh;
  },
  set exports(e) {
    oh = e;
  }
}, ah = {}, LJ = {
  get exports() {
    return ah;
  },
  set exports(e) {
    ah = e;
  }
}, BJ = Ne, UJ = Lh, qJ = p$.indexOf, HJ = lO, ch = UJ([].indexOf), ZS = !!ch && 1 / ch([1], 1, -0) < 0, KJ = ZS || !HJ("indexOf");
BJ({ target: "Array", proto: !0, forced: KJ }, {
  indexOf: function(t) {
    var r = arguments.length > 1 ? arguments[1] : void 0;
    return ZS ? ch(this, t, r) || 0 : qJ(this, t, r);
  }
});
var GJ = ad, JJ = GJ("Array").indexOf, WJ = Is, zJ = JJ, Of = Array.prototype, YJ = function(e) {
  var t = e.indexOf;
  return e === Of || WJ(Of, e) && t === Of.indexOf ? zJ : t;
}, XJ = YJ, QJ = XJ, ZJ = QJ, e7 = ZJ, t7 = e7, r7 = t7;
(function(e) {
  e.exports = r7;
})(LJ);
(function(e) {
  e.exports = ah;
})(DJ);
const e1 = /* @__PURE__ */ xt(oh);
function n7(e, t) {
  if (e == null)
    return {};
  var r = {}, n = m$(e), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(e1(t).call(t, i) >= 0) && (r[i] = e[i]);
  return r;
}
function to(e, t) {
  if (e == null)
    return {};
  var r = n7(e, t), n, i;
  if (va) {
    var s = va(e);
    for (i = 0; i < s.length; i++)
      n = s[i], !(e1(t).call(t, n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
const tm = (e, t, r) => {
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
}, N = {}, Nc = (e) => e == null ? void 0 : e.type, t1 = (e) => typeof Nc(e) == "string", r1 = (e, {
  visitFnGetter: t = tm,
  nodeTypeGetter: r = Nc
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
}, rm = (e, t, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: i = N,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = tm,
  nodeTypeGetter: c = Nc,
  nodePredicate: l = t1,
  detectCycles: u = !0
} = {}) => {
  const f = r || {};
  let p, h = Array.isArray(e), d = [e], m = -1, y, g = [];
  const S = [], $ = [];
  let w = e;
  do {
    m += 1;
    const x = m === d.length;
    let j, P;
    const C = x && g.length !== 0;
    if (x) {
      if (j = $.length === 0 ? void 0 : S.pop(), P = y, y = $.pop(), C) {
        h ? P = P.slice() : P = Object.create(Object.getPrototypeOf(P), Object.getOwnPropertyDescriptors(P));
        let A = 0;
        for (let T = 0; T < g.length; T += 1) {
          let R = g[T][0];
          const k = g[T][1];
          h && (R -= A), h && k === s ? (P.splice(R, 1), A += 1) : P[R] = k;
        }
      }
      m = p.index, d = p.keys, g = p.edits, h = p.inArray, p = p.prev;
    } else {
      if (j = y ? h ? m : d[m] : void 0, P = y ? y[j] : w, P === s || P === void 0)
        continue;
      y && S.push(j);
    }
    if ($.includes(P))
      continue;
    let v;
    if (!Array.isArray(P)) {
      if (!l(P))
        throw new Error(`Invalid AST Node:  ${JSON.stringify(P)}`);
      if (u && $.includes(P)) {
        S.pop();
        continue;
      }
      const A = a(t, c(P), x);
      if (A) {
        for (const [T, R] of Object.entries(n))
          t[T] = R;
        if (v = A.call(t, P, j, y, S, $), v === i)
          break;
        if (v === o) {
          if (!x) {
            S.pop();
            continue;
          }
        } else if (v !== void 0 && (g.push([j, v]), !x))
          if (l(v))
            P = v;
          else {
            S.pop();
            continue;
          }
      }
    }
    v === void 0 && C && g.push([j, P]), x || (p = {
      inArray: h,
      index: m,
      keys: d,
      edits: g,
      prev: p
    }, h = Array.isArray(P), d = h ? P : f[c(P)] || [], m = -1, g = [], y && $.push(y), y = P);
  } while (p !== void 0);
  return g.length !== 0 && ([, w] = g[g.length - 1]), w;
};
rm[Symbol.for("nodejs.util.promisify.custom")] = async (e, t, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: i = N,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = tm,
  nodeTypeGetter: c = Nc,
  nodePredicate: l = t1,
  detectCycles: u = !0
} = {}) => {
  const f = r || {};
  let p, h = Array.isArray(e), d = [e], m = -1, y, g = [];
  const S = [], $ = [];
  let w = e;
  do {
    m += 1;
    const x = m === d.length;
    let j, P;
    const C = x && g.length !== 0;
    if (x) {
      if (j = $.length === 0 ? void 0 : S.pop(), P = y, y = $.pop(), C) {
        h ? P = P.slice() : P = Object.create(Object.getPrototypeOf(P), Object.getOwnPropertyDescriptors(P));
        let A = 0;
        for (let T = 0; T < g.length; T += 1) {
          let R = g[T][0];
          const k = g[T][1];
          h && (R -= A), h && k === s ? (P.splice(R, 1), A += 1) : P[R] = k;
        }
      }
      m = p.index, d = p.keys, g = p.edits, h = p.inArray, p = p.prev;
    } else {
      if (j = y ? h ? m : d[m] : void 0, P = y ? y[j] : w, P === s || P === void 0)
        continue;
      y && S.push(j);
    }
    let v;
    if (!Array.isArray(P)) {
      if (!l(P))
        throw new Error(`Invalid AST Node:  ${JSON.stringify(P)}`);
      if (u && $.includes(P)) {
        S.pop();
        continue;
      }
      const A = a(t, c(P), x);
      if (A) {
        for (const [T, R] of Object.entries(n))
          t[T] = R;
        if (v = await A.call(t, P, j, y, S, $), v === i)
          break;
        if (v === o) {
          if (!x) {
            S.pop();
            continue;
          }
        } else if (v !== void 0 && (g.push([j, v]), !x))
          if (l(v))
            P = v;
          else {
            S.pop();
            continue;
          }
      }
    }
    v === void 0 && C && g.push([j, P]), x || (p = {
      inArray: h,
      index: m,
      keys: d,
      edits: g,
      prev: p
    }, h = Array.isArray(P), d = h ? P : f[c(P)] || [], m = -1, g = [], y && $.push(y), y = P);
  } while (p !== void 0);
  return g.length !== 0 && ([, w] = g[g.length - 1]), w;
};
const i7 = (e, t) => typeof (t == null ? void 0 : t[e]) == "function", s7 = (e) => e != null && Object.prototype.hasOwnProperty.call(e, "_storedElement") && Object.prototype.hasOwnProperty.call(e, "_content"), o7 = (e, t) => {
  var r;
  return (t == null || (r = t.primitive) === null || r === void 0 ? void 0 : r.call(t)) === e;
}, a7 = (e, t) => {
  var r, n;
  return (t == null || (r = t.classes) === null || r === void 0 || (n = r.includes) === null || n === void 0 ? void 0 : n.call(r, e)) || !1;
}, Ar = (e, t) => (t == null ? void 0 : t.element) === e, c7 = (e) => e({
  hasMethod: i7,
  hasBasicElementProps: s7,
  primitiveEq: o7,
  isElementType: Ar,
  hasClass: a7
}), V = c7, Dc = V(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof FJ || e(r) && t(void 0, r)), K = V(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof Ur || e(r) && t("string", r)), n1 = V(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof th || e(r) && t("number", r)), i1 = V(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof rh || e(r) && t("null", r)), Lc = V(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof pr || e(r) && t("boolean", r)), te = V(({
  hasBasicElementProps: e,
  primitiveEq: t,
  hasMethod: r
}) => (n) => n instanceof F || e(n) && t("object", n) && r("keys", n) && r("values", n) && r("items", n)), $t = V(({
  hasBasicElementProps: e,
  primitiveEq: t,
  hasMethod: r
}) => (n) => n instanceof pe && !(n instanceof F) || e(n) && t("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), ki = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ci || e(n) && t("member", n) && r(void 0, n)), s1 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ih || e(n) && t("link", n) && r(void 0, n)), o1 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof nh || e(n) && t("ref", n) && r(void 0, n)), l7 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ba || e(n) && t("annotation", n) && r("array", n)), u7 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ua || e(n) && t("comment", n) && r("string", n)), a1 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof kt || e(n) && t("parseResult", n) && r("array", n)), c1 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof qa || e(n) && t("sourceMap", n) && r("array", n)), cr = (e) => Ar("object", e) || Ar("array", e) || Ar("boolean", e) || Ar("number", e) || Ar("string", e) || Ar("null", e) || Ar("member", e), nm = (e) => {
  var t, r;
  return c1(e == null || (t = e.meta) === null || t === void 0 || (r = t.get) === null || r === void 0 ? void 0 : r.call(t, "sourceMap"));
}, f7 = (e, t) => {
  if (e.length === 0)
    return !0;
  const r = t.attributes.get("symbols");
  return $t(r) ? Nd(Vc(r.toValue()), e) : !1;
}, os = (e, t) => e.length === 0 ? !0 : Nd(Vc(t.classes.toValue()), e), p7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: nm,
  includesClasses: os,
  includesSymbols: f7,
  isAnnotationElement: l7,
  isArrayElement: $t,
  isBooleanElement: Lc,
  isCommentElement: u7,
  isElement: Dc,
  isLinkElement: s1,
  isMemberElement: ki,
  isNullElement: i1,
  isNumberElement: n1,
  isObjectElement: te,
  isParseResultElement: a1,
  isPrimitiveElement: cr,
  isRefElement: o1,
  isSourceMapElement: c1,
  isStringElement: K
}, Symbol.toStringTag, { value: "Module" })), h7 = ["keyMap"], d7 = ["keyMap"];
function kg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function l1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kg(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Ni = (e) => te(e) ? "ObjectElement" : $t(e) ? "ArrayElement" : ki(e) ? "MemberElement" : K(e) ? "StringElement" : Lc(e) ? "BooleanElement" : n1(e) ? "NumberElement" : i1(e) ? "NullElement" : s1(e) ? "LinkElement" : o1(e) ? "RefElement" : void 0, u1 = le(1, xe(Ni, _n)), Di = {
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
}, m7 = O({
  props: {
    result: [],
    predicate: kd,
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
    keyMap: n = Di
  } = r, i = to(r, h7);
  return rm(e, t, l1({
    // @ts-ignore
    keyMap: n,
    // @ts-ignore
    nodeTypeGetter: Ni,
    nodePredicate: u1
  }, i));
};
He[Symbol.for("nodejs.util.promisify.custom")] = async (e, t, r = {}) => {
  let {
    keyMap: n = Di
  } = r, i = to(r, d7);
  return rm[Symbol.for("nodejs.util.promisify.custom")](e, t, l1({
    // @ts-ignore
    keyMap: n,
    // @ts-ignore
    nodeTypeGetter: Ni,
    nodePredicate: u1
  }, i));
};
const y7 = ["keyMap"], v7 = ["keyMap"];
function Ng(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function im(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ng(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ng(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const f1 = (e) => typeof (e == null ? void 0 : e.type) == "string" ? e.type : Ni(e), p1 = im({
  EphemeralObject: ["content"],
  EphemeralArray: ["content"]
}, Di), h1 = (e, t, r = {}) => {
  let {
    keyMap: n = p1
  } = r, i = to(r, y7);
  return He(e, t, im({
    keyMap: n,
    // @ts-ignore
    nodeTypeGetter: f1,
    nodePredicate: zr,
    detectCycles: !1,
    deleteNodeSymbol: Symbol.for("delete-node"),
    skipVisitingNodeSymbol: Symbol.for("skip-visiting-node")
  }, i));
};
h1[Symbol.for("nodejs.util.promisify.custom")] = async (e, t = {}) => {
  let {
    keyMap: r = p1
  } = t, n = to(t, v7);
  return He[Symbol.for("nodejs.util.promisify.custom")](e, visitor, im({
    keyMap: r,
    nodeTypeGetter: f1,
    nodePredicate: zr,
    detectCycles: !1,
    deleteNodeSymbol: Symbol.for("delete-node"),
    skipVisitingNodeSymbol: Symbol.for("skip-visiting-node")
  }, n));
};
class g7 {
  constructor(t) {
    M(this, "type", "EphemeralArray"), M(this, "content", []), M(this, "reference", void 0), this.content = t, this.reference = [];
  }
  toReference() {
    return this.reference;
  }
  toArray() {
    return this.reference.push(...this.content), this.reference;
  }
}
const b7 = g7;
class $7 {
  constructor(t) {
    M(this, "type", "EphemeralObject"), M(this, "content", []), M(this, "reference", void 0), this.content = t, this.reference = {};
  }
  toReference() {
    return this.reference;
  }
  toObject() {
    return Object.assign(this.reference, Object.fromEntries(this.content));
  }
}
const O7 = $7, S7 = O.init(function() {
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
      const n = new O7(r.content);
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
      const n = new b7(r.content);
      return t.set(r, n), n;
    }
  }, this.EphemeralArray = {
    leave(r) {
      return r.toArray();
    }
  };
}), w7 = (e) => h1(e, S7()), x7 = w7;
function Dg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function E7(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dg(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const P7 = () => ({
  predicates: E7({}, p7),
  namespace: QS
}), d1 = P7, ro = (e, t, r = {}) => {
  if (t.length === 0)
    return e;
  const n = Wn(d1, "toolboxCreator", r), i = Wn({}, "visitorOptions", r), s = Wn(Ni, "nodeTypeGetter", i), o = n(), a = t.map((u) => u(o)), c = r1(a.map(Wn({}, "visitor")), {
    nodeTypeGetter: s
  });
  a.forEach(mi(["pre"], []));
  const l = He(e, c, i);
  return a.forEach(mi(["post"], [])), l;
};
class A7 extends Array {
  constructor(...t) {
    super(...t), M(this, "unknownMediaType", "application/octet-stream");
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
const j7 = A7;
function Lg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lg(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const T7 = (e, {
  Type: t,
  plugins: r = []
}) => {
  const n = new t(e);
  return ro(n, r, {
    toolboxCreator: d1,
    visitorOptions: {
      nodeTypeGetter: Ni
    }
  });
}, jt = (e) => (t, r = {}) => T7(t, Bg(Bg({}, r), {}, {
  Type: e
}));
F.refract = jt(F);
pe.refract = jt(pe);
Ur.refract = jt(Ur);
pr.refract = jt(pr);
rh.refract = jt(rh);
th.refract = jt(th);
ih.refract = jt(ih);
nh.refract = jt(nh);
Ba.refract = jt(Ba);
Ua.refract = jt(Ua);
kt.refract = jt(kt);
qa.refract = jt(qa);
const _7 = Ic((e, t) => {
  const r = m7({
    predicate: e,
    returnOnTrue: N
  });
  return He(t, r), bS(void 0, [0], r.result);
}), sm = _7, aa = (e, t = /* @__PURE__ */ new WeakMap()) => (ki(e) ? (t.set(e.key, e), aa(e.key, t), t.set(e.value, e), aa(e.value, t)) : e.children.forEach((r) => {
  t.set(r, e), aa(r, t);
}), t), I7 = (e, t, r) => {
  const n = r.get(e);
  ki(n) && (n.key === e && (n.key = t, r.delete(e), r.set(t, n)), n.value === e && (n.value = t, r.delete(e), r.set(t, n)));
}, R7 = (e, t, r) => {
  const n = r.get(e);
  te(n) && (n.content = n.map((i, s, o) => o === e ? (r.delete(e), r.set(t, n), t) : o));
}, F7 = (e, t, r) => {
  const n = r.get(e);
  $t(n) && (n.content = n.map((i) => i === e ? (r.delete(e), r.set(t, n), t) : i));
}, V7 = O.init(function({
  element: t
}) {
  let r;
  this.transclude = function(i, s) {
    var o;
    if (i === t)
      return s;
    if (i === s)
      return t;
    r = (o = r) !== null && o !== void 0 ? o : aa(t);
    const a = r.get(i);
    if (!gr(a))
      return te(a) ? R7(i, s, r) : $t(a) ? F7(i, s, r) : ki(a) && I7(i, s, r), t;
  };
}), C7 = V7, M7 = (e, t, r) => C7({
  element: r
}).transclude(e, t), Bc = (e, t) => {
  const r = On(e, t);
  return g6((n) => {
    if (ws(n) && un("$ref", n) && V6(_n, "$ref", n)) {
      const i = lt(["$ref"], n), s = Xd("#/", i);
      return lt(s.split("/"), r);
    }
    return ws(n) ? Bc(n, r) : n;
  }, e);
};
function Ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ug(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Ha = (e) => {
  const t = e.meta.clone(), r = e.attributes.clone();
  return new e.constructor(void 0, t, r);
}, Sf = (e) => new Ci(e.key, e.value, e.meta.clone(), e.attributes.clone()), Ka = (e, t) => t.clone && t.isMergeableElement(e) ? yi(Ha(e), e, t) : e, k7 = (e, t) => {
  if (typeof t.customMerge != "function")
    return yi;
  const r = t.customMerge(e, t);
  return typeof r == "function" ? r : yi;
}, N7 = (e, t, r) => e.concat(t)["fantasy-land/map"]((n) => Ka(n, r)), D7 = (e, t, r) => {
  const n = te(e) ? Ha(e) : Ha(t);
  return te(e) && e.forEach((i, s, o) => {
    const a = Sf(o);
    a.value = Ka(i, r), n.content.push(a);
  }), t.forEach((i, s, o) => {
    const a = s.toValue();
    let c;
    if (te(e) && e.hasKey(a) && r.isMergeableElement(i)) {
      const l = e.get(a);
      c = Sf(o), c.value = k7(s, r)(l, i);
    } else
      c = Sf(o), c.value = Ka(i, r);
    n.remove(a), n.content.push(c);
  }), n;
};
function yi(e, t, r) {
  var n, i, s;
  const o = {
    clone: !0,
    isMergeableElement: (f) => te(f) || $t(f),
    arrayElementMerge: N7,
    objectElementMerge: D7,
    customMerge: void 0
  }, a = qg(qg({}, o), r);
  a.isMergeableElement = (n = a.isMergeableElement) !== null && n !== void 0 ? n : o.isMergeableElement, a.arrayElementMerge = (i = a.arrayElementMerge) !== null && i !== void 0 ? i : o.arrayElementMerge, a.objectElementMerge = (s = a.objectElementMerge) !== null && s !== void 0 ? s : o.objectElementMerge;
  const c = $t(t), l = $t(e);
  return c === l ? c && typeof a.arrayElementMerge == "function" ? a.arrayElementMerge(e, t, a) : a.objectElementMerge(e, t, a) : Ka(t, a);
}
yi.all = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.length === 0 ? new F() : e.reduce((r, n) => yi(r, n, t), Ha(e[0]));
};
const m1 = (e, t = QS) => {
  if (_n(e))
    try {
      return t.fromRefract(JSON.parse(e));
    } catch {
    }
  return ws(e) && un("element", e) ? t.fromRefract(e) : t.toElement(e);
}, Ke = x7;
class ca extends Error {
  constructor(t) {
    super(t), this.name = this.constructor.name, this.message = t, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(t).stack;
  }
}
class y1 extends Error {
  constructor(t) {
    super(`Invalid $ref pointer "${t}". Pointers must begin with "/"`), this.name = this.constructor.name, this.message = `Invalid $ref pointer "${t}". Pointers must begin with "/"`, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(`Invalid $ref pointer "${t}". Pointers must begin with "/"`).stack;
  }
}
const L7 = (e) => {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, B7 = xe(hi(/~/g, "~0"), hi(/\//g, "~1"), encodeURIComponent), U7 = xe(hi(/~1/g, "/"), hi(/~0/g, "~"), L7), q7 = (e) => {
  if (ES(e))
    return [];
  if (!OS("/", e))
    throw new y1(e);
  const t = xe(Wd("/"), zs(U7))(e);
  return dS(t);
}, H7 = (e) => e.length === 0 ? "" : `/${e.map(B7).join("/")}`, Je = (e, t) => q7(e).reduce((n, i) => {
  if (te(n)) {
    if (!n.hasKey(i))
      throw new ca(`Evaluation failed on token: "${i}"`);
    return n.get(i);
  }
  if ($t(n)) {
    if (!(i in n.content) || !H8(Number(i)))
      throw new ca(`Evaluation failed on token: "${i}"`);
    return n.get(Number(i));
  }
  throw new ca(`Evaluation failed on token: "${i}"`);
}, t), K7 = (e) => {
  const t = e.indexOf("#");
  return t !== -1 ? e.substring(t) : "#";
}, Be = (e) => {
  const t = K7(e);
  return Xd("#", t);
};
class om extends j7 {
  filterByFormat(t = "generic") {
    const r = t === "generic" ? "openapi;version" : t;
    return this.filter((n) => n.includes(r));
  }
  findBy(t = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${t}` : `vnd.oai.openapi+${r};version=${t}`;
    return this.find((s) => s.includes(n)) || this.unknownMediaType;
  }
  latest(t = "generic") {
    return Qs(this.filterByFormat(t));
  }
}
const G7 = new om("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0"), Sn = G7;
let J7 = class extends F {
  constructor(t, r, n) {
    super(t, r, n), this.element = "callback";
  }
};
const no = J7;
let W7 = class extends F {
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
const io = W7;
let z7 = class extends F {
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
const so = z7;
let Y7 = class extends F {
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
const Uc = Y7;
let X7 = class extends F {
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
const qc = X7;
let Q7 = class extends F {
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
const oo = Q7;
let Z7 = class extends F {
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
const ao = Z7;
let v1 = class extends F {
  constructor(t, r, n) {
    super(t, r, n), this.element = "header";
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new pr(!1);
  }
  set required(t) {
    this.set("required", t);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new pr(!1);
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
Object.defineProperty(v1.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(e) {
    this.set("description", e);
  },
  enumerable: !0
});
const co = v1;
let eW = class extends F {
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
const lo = eW;
let tW = class extends F {
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
const uo = tW;
let rW = class extends F {
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
const fo = rW;
let nW = class extends F {
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
const po = nW;
let iW = class extends F {
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
const Hc = iW;
let sW = class extends F {
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
const Kc = sW;
let oW = class extends Ur {
  constructor(t, r, n) {
    super(t, r, n), this.element = "openapi", this.classes.push("spec-version"), this.classes.push("version");
  }
};
const ho = oW;
class aW extends F {
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
const Gc = aW;
let cW = class extends F {
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
    return this.hasKey("deprecated") ? this.get("deprecated") : new pr(!1);
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
const mo = cW;
let g1 = class extends F {
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
    return this.hasKey("required") ? this.get("required") : new pr(!1);
  }
  set required(t) {
    this.set("required", t);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new pr(!1);
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
Object.defineProperty(g1.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(e) {
    this.set("description", e);
  },
  enumerable: !0
});
const yo = g1;
let lW = class extends F {
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
const vo = lW;
let uW = class extends F {
  constructor(t, r, n) {
    super(t, r, n), this.element = "paths";
  }
};
const go = uW;
let fW = class extends F {
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
const bo = fW;
let pW = class extends F {
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
    return this.hasKey("required") ? this.get("required") : new pr(!1);
  }
  set required(t) {
    this.set("required", t);
  }
};
const $o = pW;
let hW = class extends F {
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
const Oo = hW;
let dW = class extends F {
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
const So = dW;
class mW extends F {
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
const wo = mW;
class yW extends F {
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
const Jc = yW;
class vW extends F {
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
const Wc = vW;
class gW extends F {
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
const zc = gW, bW = {
  namespace: (e) => {
    const {
      base: t
    } = e;
    return t.register("jSONSchemaDraft4", wo), t.register("jSONReference", Jc), t.register("media", Wc), t.register("linkDescription", zc), t;
  }
}, $W = bW;
function Hg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function OW(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hg(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const b1 = (e) => {
  if (Dc(e))
    return `${e.element.charAt(0).toUpperCase() + e.element.slice(1)}Element`;
}, $1 = OW({
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"]
}, Di), SW = O({
  props: {
    element: null
  },
  // @ts-ignore
  methods: {
    copyMetaAndAttributes(e, t) {
      nm(e) && t.meta.set("sourceMap", e.meta.get("sourceMap"));
    }
  }
}), O1 = SW, wW = O(O1, {
  methods: {
    enter(e) {
      return this.element = e.clone(), N;
    }
  }
}), J = wW;
function Kg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kg(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const xW = O(O1, {
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
      return $S(this.passingOptionsNames, this);
    },
    retrieveFixedFields(e) {
      return xe(lt(["visitors", ...e, "fixedFields"]), Yt)(this.specObj);
    },
    retrieveVisitor(e) {
      return pi(br, ["visitors", ...e], this.specObj) ? lt(["visitors", ...e], this.specObj) : lt(["visitors", ...e, "$visitor"], this.specObj);
    },
    retrieveVisitorInstance(e, t = {}) {
      const r = this.retrievePassingOptions();
      return this.retrieveVisitor(e)(wf(wf({}, r), t));
    },
    toRefractedElement(e, t, r = {}) {
      const n = this.retrieveVisitorInstance(e, r), i = Object.getPrototypeOf(n);
      return gr(this.fallbackVisitorPrototype) && (this.fallbackVisitorPrototype = Object.getPrototypeOf(this.retrieveVisitorInstance(["value"]))), this.fallbackVisitorPrototype === i ? t.clone() : (He(t, n, wf({
        keyMap: $1,
        nodeTypeGetter: b1
      }, r)), n.element);
    }
  }
}), Zr = xW, EW = O(Zr, {
  props: {
    specPath: di,
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
          const o = this.toRefractedElement([...t, "fixedFields", i.toValue()], n), a = new Ci(i.clone(), o);
          this.copyMetaAndAttributes(s, a), a.classes.push("fixed-field"), this.element.content.push(a);
        } else
          this.ignoredFields.includes(i.toValue()) || this.element.content.push(s.clone());
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), Ps = EW, PW = O(Ps, J, {
  props: {
    specPath: U(["document", "objects", "JSONSchema"])
  },
  init() {
    this.element = new wo();
  }
}), AW = PW, jW = J, TW = jW, _W = J, IW = _W, RW = J, FW = RW, VW = J, CW = VW, MW = J, kW = MW, NW = J, DW = NW, LW = J, BW = LW, UW = J, qW = UW, HW = J, KW = HW, GW = J, JW = GW, WW = O({
  props: {
    parent: null
  },
  // @ts-ignore
  init({
    parent: e = this.parent
  }) {
    this.parent = e, this.passingOptionsNames = [...this.passingOptionsNames, "parent"];
  }
}), Or = WW, Xt = (e) => te(e) && e.hasKey("$ref"), zW = O(Zr, Or, J, {
  methods: {
    ObjectElement(e) {
      const t = Xt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
      return this.element = this.toRefractedElement(t, e), N;
    },
    ArrayElement(e) {
      return this.element = new pe(), this.element.classes.push("json-schema-items"), e.forEach((t) => {
        const r = Xt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), YW = zW, XW = J, QW = XW, ZW = J, ez = ZW, tz = J, rz = tz, nz = J, iz = nz, sz = J, oz = sz, az = O(J, {
  methods: {
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-required"), N;
    }
  }
}), cz = az, lz = O(Zr, {
  props: {
    fieldPatternPredicate: kd,
    specPath: di,
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
          const i = this.specPath(t), s = this.toRefractedElement(i, t), o = new Ci(r.clone(), s);
          this.copyMetaAndAttributes(n, o), o.classes.push("patterned-field"), this.element.content.push(o);
        } else
          this.ignoredFields.includes(r.toValue()) || this.element.content.push(n.clone());
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), uz = lz, fz = O(uz, {
  props: {
    fieldPatternPredicate: Yd
  }
}), Yc = fz, pz = O(Yc, Or, J, {
  props: {
    specPath: (e) => Xt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-properties");
  }
}), hz = pz, dz = O(Yc, Or, J, {
  props: {
    specPath: (e) => Xt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-patternProperties");
  }
}), mz = dz, yz = O(Yc, Or, J, {
  props: {
    specPath: (e) => Xt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-dependencies");
  }
}), vz = yz, gz = O(J, {
  methods: {
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-enum"), N;
    }
  }
}), bz = gz, $z = O(J, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-type"), N;
    },
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-type"), N;
    }
  }
}), Oz = $z, Sz = O(Zr, Or, J, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-allOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = Xt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), wz = Sz, xz = O(Zr, Or, J, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-anyOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = Xt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), Ez = xz, Pz = O(Zr, Or, J, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-oneOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = Xt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), Az = Pz, jz = O(Yc, Or, J, {
  props: {
    specPath: (e) => Xt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-definitions");
  }
}), Tz = jz, _z = J, Iz = _z, Rz = J, Fz = Rz, Vz = J, Cz = Vz, Mz = J, kz = Mz, Nz = J, Dz = Nz, Lz = O(Zr, Or, J, {
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
}), Bz = Lz, Uz = J, qz = Uz, Hz = O(Ps, J, {
  props: {
    specPath: U(["document", "objects", "JSONReference"])
  },
  init() {
    this.element = new Jc();
  },
  methods: {
    ObjectElement(e) {
      const t = Ps.compose.methods.ObjectElement.call(this, e);
      return K(this.element.$ref) && this.element.classes.push("reference-element"), t;
    }
  }
}), Kz = Hz, Gz = O(J, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), Jz = Gz, Wz = O(Zr, {
  props: {
    alternator: []
  },
  methods: {
    enter(e) {
      const t = this.alternator.map(({
        predicate: n,
        specPath: i
      }) => Gd(n, U(i), eo)), r = AS(t)(e);
      return this.element = this.toRefractedElement(r, e), N;
    }
  }
}), zz = Wz, Yz = O(zz, {
  props: {
    alternator: [{
      predicate: Xt,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: zr,
      specPath: ["document", "objects", "JSONSchema"]
    }]
  }
}), kn = Yz, Xz = O(Ps, J, {
  props: {
    specPath: U(["document", "objects", "Media"])
  },
  init() {
    this.element = new Wc();
  }
}), Qz = Xz, Zz = J, eY = Zz, tY = J, rY = tY, nY = O(Ps, J, {
  props: {
    specPath: U(["document", "objects", "LinkDescription"])
  },
  init() {
    this.element = new zc();
  }
}), iY = nY, sY = J, oY = sY, aY = J, cY = aY, lY = J, uY = lY, fY = J, pY = fY, hY = J, dY = hY, mY = J, yY = mY, vY = {
  visitors: {
    value: J,
    JSONSchemaOrJSONReferenceVisitor: kn,
    document: {
      objects: {
        JSONSchema: {
          $visitor: AW,
          fixedFields: {
            // core vocabulary
            id: TW,
            $schema: IW,
            // validation vocabulary
            // validation keywords for numeric instances (number and integer)
            multipleOf: FW,
            maximum: CW,
            exclusiveMaximum: kW,
            minimum: DW,
            exclusiveMinimum: BW,
            // validation keywords for strings
            maxLength: qW,
            minLength: KW,
            pattern: JW,
            // validation keywords for arrays
            additionalItems: kn,
            items: YW,
            maxItems: QW,
            minItems: ez,
            uniqueItems: rz,
            // validation keywords for objects
            maxProperties: iz,
            minProperties: oz,
            required: cz,
            properties: hz,
            additionalProperties: kn,
            patternProperties: mz,
            dependencies: vz,
            // validation keywords for any instance type
            enum: bz,
            type: Oz,
            allOf: wz,
            anyOf: Ez,
            oneOf: Az,
            not: kn,
            definitions: Tz,
            // metadata keywords
            title: Iz,
            description: Fz,
            default: Cz,
            // semantic validation with "format"
            format: kz,
            // JSON Hyper-Schema
            base: Dz,
            links: Bz,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: qz
          }
        },
        JSONReference: {
          $visitor: Kz,
          fixedFields: {
            $ref: Jz
          }
        },
        Media: {
          $visitor: Qz,
          fixedFields: {
            binaryEncoding: eY,
            type: rY
          }
        },
        LinkDescription: {
          $visitor: iY,
          fixedFields: {
            href: oY,
            rel: cY,
            title: uY,
            targetSchema: kn,
            mediaType: pY,
            method: dY,
            encType: yY,
            schema: kn
          }
        }
      }
    }
  }
}, hr = vY, gY = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof wo || e(n) && t("JSONSchemaDraft4", n) && r("object", n)), bY = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Jc || e(n) && t("JSONReference", n) && r("object", n)), $Y = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Wc || e(n) && t("media", n) && r("object", n)), OY = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof zc || e(n) && t("linkDescription", n) && r("object", n)), SY = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: bY,
  isJSONSchemaElement: gY,
  isLinkDescriptionElement: OY,
  isMediaElement: $Y
}, Symbol.toStringTag, { value: "Module" }));
function Gg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gg(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const wY = () => {
  const e = Mi($W);
  return {
    predicates: Jg(Jg({}, SY), {}, {
      isStringElement: K
    }),
    namespace: e
  };
}, xY = wY;
function Wg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function EY(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wg(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const PY = (e, {
  specPath: t = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = hr
} = {}) => {
  const i = em(e), s = Bc(n), o = mi(t, [], s);
  return He(i, o, {
    state: {
      specObj: s
    }
  }), ro(o.element, r, {
    toolboxCreator: xY,
    visitorOptions: {
      keyMap: $1,
      nodeTypeGetter: b1
    }
  });
}, Xc = (e) => (t, r = {}) => PY(t, EY({
  specPath: e
}, r));
wo.refract = Xc(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Jc.refract = Xc(["visitors", "document", "objects", "JSONReference", "$visitor"]);
Wc.refract = Xc(["visitors", "document", "objects", "Media", "$visitor"]);
zc.refract = Xc(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let AY = class extends wo {
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
const Qc = AY;
let jY = class extends F {
  constructor(t, r, n) {
    super(t, r, n), this.element = "securityRequirement";
  }
};
const xo = jY;
let TY = class extends F {
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
const Zc = TY;
let _Y = class extends F {
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
const Eo = _Y;
let IY = class extends F {
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
const Po = IY;
let RY = class extends F {
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
const el = RY;
let FY = class extends F {
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
const tl = FY, VY = {
  namespace: (e) => {
    const {
      base: t
    } = e;
    return t.register("callback", no), t.register("components", io), t.register("contact", so), t.register("discriminator", Uc), t.register("encoding", qc), t.register("example", oo), t.register("externalDocumentation", ao), t.register("header", co), t.register("info", lo), t.register("license", uo), t.register("link", fo), t.register("mediaType", po), t.register("oAuthFlow", Hc), t.register("oAuthFlows", Kc), t.register("openapi", ho), t.register("openApi3_0", Gc), t.register("operation", mo), t.register("parameter", yo), t.register("pathItem", vo), t.register("paths", go), t.register("reference", bo), t.register("requestBody", $o), t.register("response", Oo), t.register("responses", So), t.register("schema", Qc), t.register("securityRequirement", xo), t.register("securityScheme", Zc), t.register("server", Eo), t.register("serverVariable", Po), t.register("tag", el), t.register("xml", tl), t;
  }
}, CY = VY;
class rl extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(rl.primaryClass);
  }
}
M(rl, "primaryClass", "servers");
const MY = rl;
class nl extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(nl.primaryClass);
  }
}
M(nl, "primaryClass", "security");
const kY = nl;
class il extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(il.primaryClass);
  }
}
M(il, "primaryClass", "tags");
const NY = il;
class sl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(sl.primaryClass);
  }
}
M(sl, "primaryClass", "server-variables");
const DY = sl;
class ol extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(ol.primaryClass);
  }
}
M(ol, "primaryClass", "components-schemas");
const S1 = ol;
class al extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(al.primaryClass);
  }
}
M(al, "primaryClass", "components-responses");
const LY = al;
class cl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(cl.primaryClass), this.classes.push("parameters");
  }
}
M(cl, "primaryClass", "components-parameters");
const BY = cl;
class ll extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(ll.primaryClass), this.classes.push("examples");
  }
}
M(ll, "primaryClass", "components-examples");
const UY = ll;
class ul extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(ul.primaryClass);
  }
}
M(ul, "primaryClass", "components-request-bodies");
const qY = ul;
class fl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(fl.primaryClass);
  }
}
M(fl, "primaryClass", "components-headers");
const HY = fl;
class pl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(pl.primaryClass);
  }
}
M(pl, "primaryClass", "components-security-schemes");
const KY = pl;
class hl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(hl.primaryClass);
  }
}
M(hl, "primaryClass", "components-links");
const GY = hl;
class dl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(dl.primaryClass);
  }
}
M(dl, "primaryClass", "components-callbacks");
const JY = dl;
class ml extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(ml.primaryClass), this.classes.push("servers");
  }
}
M(ml, "primaryClass", "path-item-servers");
const w1 = ml;
class yl extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(yl.primaryClass), this.classes.push("parameters");
  }
}
M(yl, "primaryClass", "path-item-parameters");
const WY = yl;
class vl extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(vl.primaryClass), this.classes.push("parameters");
  }
}
M(vl, "primaryClass", "operation-parameters");
const x1 = vl;
class gl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(gl.primaryClass), this.classes.push("examples");
  }
}
M(gl, "primaryClass", "parameter-examples");
const zY = gl;
class bl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(bl.primaryClass), this.classes.push("content");
  }
}
M(bl, "primaryClass", "parameter-content");
const YY = bl;
class $l extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push($l.primaryClass);
  }
}
M($l, "primaryClass", "operation-tags");
const XY = $l;
class Ol extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Ol.primaryClass);
  }
}
M(Ol, "primaryClass", "operation-callbacks");
const QY = Ol;
class Sl extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Sl.primaryClass), this.classes.push("security");
  }
}
M(Sl, "primaryClass", "operation-security");
const E1 = Sl;
class wl extends pe {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(wl.primaryClass), this.classes.push("servers");
  }
}
M(wl, "primaryClass", "operation-servers");
const P1 = wl;
class xl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(xl.primaryClass), this.classes.push("content");
  }
}
M(xl, "primaryClass", "request-body-content");
const ZY = xl;
class El extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(El.primaryClass), this.classes.push("examples");
  }
}
M(El, "primaryClass", "media-type-examples");
const eX = El;
class Pl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Pl.primaryClass);
  }
}
M(Pl, "primaryClass", "media-type-encoding");
const tX = Pl;
class Al extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Al.primaryClass);
  }
}
M(Al, "primaryClass", "encoding-headers");
const rX = Al;
class jl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(jl.primaryClass);
  }
}
M(jl, "primaryClass", "response-headers");
const nX = jl;
class Tl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Tl.primaryClass), this.classes.push("content");
  }
}
M(Tl, "primaryClass", "response-content");
const iX = Tl;
class _l extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(_l.primaryClass);
  }
}
M(_l, "primaryClass", "response-links");
const sX = _l;
class Il extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Il.primaryClass);
  }
}
M(Il, "primaryClass", "discriminator-mapping");
const oX = Il;
class Rl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Rl.primaryClass);
  }
}
M(Rl, "primaryClass", "oauth-flow-scopes");
const aX = Rl;
class Fl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Fl.primaryClass);
  }
}
M(Fl, "primaryClass", "link-parameters");
const cX = Fl;
class Vl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Vl.primaryClass), this.classes.push("examples");
  }
}
M(Vl, "primaryClass", "header-examples");
const lX = Vl;
class Cl extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Cl.primaryClass), this.classes.push("content");
  }
}
M(Cl, "primaryClass", "header-content");
const uX = Cl;
function zg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fX(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zg(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const A1 = (e) => {
  if (Dc(e))
    return `${e.element.charAt(0).toUpperCase() + e.element.slice(1)}Element`;
}, j1 = fX({
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
}, Di), pX = O({
  props: {
    element: null
  },
  // @ts-ignore
  methods: {
    copyMetaAndAttributes(e, t) {
      nm(e) && t.meta.set("sourceMap", e.meta.get("sourceMap"));
    }
  }
}), T1 = pX;
function Yg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yg(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const hX = O(T1, {
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
      return $S(this.passingOptionsNames, this);
    },
    retrieveFixedFields(e) {
      return xe(lt(["visitors", ...e, "fixedFields"]), Yt)(this.specObj);
    },
    retrieveVisitor(e) {
      return pi(br, ["visitors", ...e], this.specObj) ? lt(["visitors", ...e], this.specObj) : lt(["visitors", ...e, "$visitor"], this.specObj);
    },
    retrieveVisitorInstance(e, t = {}) {
      const r = this.retrievePassingOptions();
      return this.retrieveVisitor(e)(xf(xf({}, r), t));
    },
    toRefractedElement(e, t, r = {}) {
      const n = this.retrieveVisitorInstance(e, r), i = Object.getPrototypeOf(n);
      return gr(this.fallbackVisitorPrototype) && (this.fallbackVisitorPrototype = Object.getPrototypeOf(this.retrieveVisitorInstance(["value"]))), this.fallbackVisitorPrototype === i ? t.clone() : (He(t, n, xf({
        keyMap: j1,
        nodeTypeGetter: A1
      }, r)), n.element);
    }
  }
}), Ye = hX, dX = (e) => te(e) && e.hasKey("openapi") && e.hasKey("info"), mX = (e) => te(e) && e.hasKey("name") && e.hasKey("in"), ue = (e) => te(e) && e.hasKey("$ref"), yX = (e) => te(e) && e.hasKey("content"), vX = (e) => te(e) && e.hasKey("description"), _1 = te, I1 = te, am = (e) => K(e.key) && OS("x-", e.key.toValue()), gX = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isOpenApi3_0LikeElement: dX,
  isOpenApiExtension: am,
  isParameterLikeElement: mX,
  isReferenceLikeElement: ue,
  isRequestBodyLikeElement: yX,
  isResponseLikeElement: vX,
  isServerLikeElement: _1,
  isTagLikeElement: I1
}, Symbol.toStringTag, { value: "Module" })), bX = O(Ye, {
  props: {
    specPath: di,
    ignoredFields: [],
    canSupportSpecificationExtensions: !0,
    specificationExtensionPredicate: am
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
          const o = this.toRefractedElement([...t, "fixedFields", i.toValue()], n), a = new Ci(i.clone(), o);
          this.copyMetaAndAttributes(s, a), a.classes.push("fixed-field"), this.element.content.push(a);
        } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(s)) {
          const o = this.toRefractedElement(["document", "extension"], s);
          this.element.content.push(o);
        } else
          this.ignoredFields.includes(i.toValue()) || this.element.content.push(s.clone());
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), z = bX, $X = O(T1, {
  methods: {
    enter(e) {
      return this.element = e.clone(), N;
    }
  }
}), b = $X, OX = O(z, b, {
  props: {
    specPath: U(["document", "objects", "OpenApi"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Gc();
  },
  methods: {
    ObjectElement(e) {
      return this.unrefractedElement = e, z.compose.methods.ObjectElement.call(this, e);
    }
  }
}), SX = OX, wX = O(Ye, b, {
  methods: {
    StringElement(e) {
      const t = new ho(e.toValue());
      return this.copyMetaAndAttributes(e, t), this.element = t, N;
    }
  }
}), xX = wX, EX = O(Ye, {
  methods: {
    MemberElement(e) {
      return this.element = e.clone(), this.element.classes.push("specification-extension"), N;
    }
  }
}), PX = EX, AX = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Info"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new lo();
  }
}), jX = AX, TX = b, _X = TX, IX = b, RX = IX, FX = b, VX = FX, CX = O(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("api-version"), this.element.classes.push("version"), N;
    }
  }
}), MX = CX, kX = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Contact"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new so();
  }
}), NX = kX, DX = b, LX = DX, BX = b, UX = BX, qX = b, HX = qX, KX = O(z, b, {
  props: {
    specPath: U(["document", "objects", "License"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new uo();
  }
}), GX = KX, JX = b, WX = JX, zX = b, YX = zX, XX = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Link"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new fo();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return (K(this.element.operationId) || K(this.element.operationRef)) && this.element.classes.push("reference-element"), t;
    }
  }
}), QX = XX, ZX = O(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), eQ = ZX, tQ = O(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), rQ = tQ, nQ = O(Ye, {
  props: {
    fieldPatternPredicate: kd,
    specPath: di,
    ignoredFields: [],
    canSupportSpecificationExtensions: !1,
    specificationExtensionPredicate: am
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
          const i = this.specPath(t), s = this.toRefractedElement(i, t), o = new Ci(r.clone(), s);
          this.copyMetaAndAttributes(n, o), o.classes.push("patterned-field"), this.element.content.push(o);
        } else
          this.ignoredFields.includes(r.toValue()) || this.element.content.push(n.clone());
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), vi = nQ, iQ = O(vi, {
  props: {
    fieldPatternPredicate: Yd
  }
}), W = iQ, sQ = O(W, b, {
  props: {
    specPath: U(["value"])
  },
  init() {
    this.element = new cX();
  }
}), oQ = sQ, aQ = b, cQ = aQ, lQ = b, uQ = lQ, fQ = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Server"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Eo();
  }
}), pQ = fQ, hQ = O(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("server-url"), N;
    }
  }
}), dQ = hQ, mQ = b, yQ = mQ, vQ = O(Ye, b, {
  init() {
    this.element = new MY();
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = _1(t) ? ["document", "objects", "Server"] : ["value"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), cm = vQ, gQ = O(z, b, {
  props: {
    specPath: U(["document", "objects", "ServerVariable"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Po();
  }
}), bQ = gQ, $Q = b, OQ = $Q, SQ = b, wQ = SQ, xQ = b, EQ = xQ, PQ = O(W, b, {
  props: {
    specPath: U(["document", "objects", "ServerVariable"])
  },
  init() {
    this.element = new DY();
  }
}), AQ = PQ, jQ = O(z, b, {
  props: {
    specPath: U(["document", "objects", "MediaType"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new po();
  }
}), TQ = jQ, _Q = O(Ye, {
  props: {
    alternator: []
  },
  methods: {
    enter(e) {
      const t = this.alternator.map(({
        predicate: n,
        specPath: i
      }) => Gd(n, U(i), eo)), r = AS(t)(e);
      return this.element = this.toRefractedElement(r, e), N;
    }
  }
}), Qt = _Q, IQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof no || e(n) && t("callback", n) && r("object", n)), RQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof io || e(n) && t("components", n) && r("object", n)), FQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof so || e(n) && t("contact", n) && r("object", n)), VQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof oo || e(n) && t("example", n) && r("object", n)), CQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ao || e(n) && t("externalDocumentation", n) && r("object", n)), Li = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof co || e(n) && t("header", n) && r("object", n)), MQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof lo || e(n) && t("info", n) && r("object", n)), kQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof uo || e(n) && t("license", n) && r("object", n)), R1 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof fo || e(n) && t("link", n) && r("object", n)), NQ = (e) => {
  if (!R1(e) || !K(e.operationRef))
    return !1;
  const t = e.operationRef.toValue();
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, DQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ho || e(n) && t("openapi", n) && r("string", n)), LQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r,
  hasClass: n
}) => (i) => i instanceof Gc || e(i) && t("openApi3_0", i) && r("object", i) && n("api", i)), F1 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof mo || e(n) && t("operation", n) && r("object", n)), BQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof yo || e(n) && t("parameter", n) && r("object", n)), Ml = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof vo || e(n) && t("pathItem", n) && r("object", n)), UQ = (e) => {
  if (!Ml(e) || !K(e.$ref))
    return !1;
  const t = e.$ref.toValue();
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, qQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof go || e(n) && t("paths", n) && r("object", n)), he = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof bo || e(n) && t("reference", n) && r("object", n)), HQ = (e) => {
  if (!he(e) || !K(e.$ref))
    return !1;
  const t = e.$ref.toValue();
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, KQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof $o || e(n) && t("requestBody", n) && r("object", n)), kl = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Oo || e(n) && t("response", n) && r("object", n)), GQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof So || e(n) && t("responses", n) && r("object", n)), JQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Qc || e(n) && t("schema", n) && r("object", n)), WQ = (e) => Lc(e) && e.classes.includes("boolean-json-schema"), zQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof xo || e(n) && t("securityRequirement", n) && r("object", n)), YQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Eo || e(n) && t("server", n) && r("object", n)), XQ = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Po || e(n) && t("serverVariable", n) && r("object", n)), Nl = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof po || e(n) && t("mediaType", n) && r("object", n)), QQ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: WQ,
  isCallbackElement: IQ,
  isComponentsElement: RQ,
  isContactElement: FQ,
  isExampleElement: VQ,
  isExternalDocumentationElement: CQ,
  isHeaderElement: Li,
  isInfoElement: MQ,
  isLicenseElement: kQ,
  isLinkElement: R1,
  isLinkElementExternal: NQ,
  isMediaTypeElement: Nl,
  isOpenApi3_0Element: LQ,
  isOpenapiElement: DQ,
  isOperationElement: F1,
  isParameterElement: BQ,
  isPathItemElement: Ml,
  isPathItemElementExternal: UQ,
  isPathsElement: qQ,
  isReferenceElement: he,
  isReferenceElementExternal: HQ,
  isRequestBodyElement: KQ,
  isResponseElement: kl,
  isResponsesElement: GQ,
  isSchemaElement: JQ,
  isSecurityRequirementElement: zQ,
  isServerElement: YQ,
  isServerVariableElement: XQ
}, Symbol.toStringTag, { value: "Module" })), ZQ = O(Qt, b, {
  props: {
    alternator: [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: zr,
      specPath: ["document", "objects", "Schema"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = Qt.compose.methods.enter.call(this, e);
      return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    }
  }
}), eZ = ZQ, tZ = b, rZ = tZ, nZ = O(W, b, {
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
}), lm = nZ, iZ = O(lm, {
  init() {
    this.element = new eX();
  }
}), sZ = iZ, oZ = O(W, b, {
  props: {
    specPath: U(["document", "objects", "Encoding"])
  },
  init() {
    this.element = new tX();
  }
}), aZ = oZ, cZ = O(W, b, {
  props: {
    specPath: U(["value"])
  },
  init() {
    this.element = new xo();
  }
}), lZ = cZ, uZ = O(Ye, b, {
  init() {
    this.element = new kY();
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (te(t)) {
          const r = this.toRefractedElement(["document", "objects", "SecurityRequirement"], t);
          this.element.push(r);
        } else
          this.element.push(t.clone());
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), fZ = uZ, pZ = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Components"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new io();
  }
}), hZ = pZ, dZ = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Tag"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new el();
  }
}), mZ = dZ, yZ = b, vZ = yZ, gZ = b, bZ = gZ, $Z = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Reference"]),
    canSupportSpecificationExtensions: !1
  },
  init() {
    this.element = new bo();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return K(this.element.$ref) && this.element.classes.push("reference-element"), t;
    }
  }
}), OZ = $Z, SZ = O(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), wZ = SZ, xZ = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Parameter"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new yo();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return te(this.element.contentProp) && this.element.contentProp.filter(Nl).forEach((r, n) => {
        r.setMetaProperty("media-type", n.toValue());
      }), t;
    }
  }
}), EZ = xZ, PZ = b, AZ = PZ, jZ = b, TZ = jZ, _Z = b, IZ = _Z, RZ = b, FZ = RZ, VZ = b, CZ = VZ, MZ = b, kZ = MZ, NZ = b, DZ = NZ, LZ = b, BZ = LZ, UZ = b, qZ = UZ, HZ = O(Qt, b, {
  props: {
    alternator: [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: zr,
      specPath: ["document", "objects", "Schema"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = Qt.compose.methods.enter.call(this, e);
      return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    }
  }
}), KZ = HZ, GZ = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Header"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new co();
  }
}), JZ = GZ, WZ = b, zZ = WZ, YZ = b, XZ = YZ, QZ = b, ZZ = QZ, eee = b, tee = eee, ree = b, nee = ree, iee = b, see = iee, oee = b, aee = oee, cee = O(Qt, b, {
  props: {
    alternator: [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: zr,
      specPath: ["document", "objects", "Schema"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = Qt.compose.methods.enter.call(this, e);
      return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    }
  }
}), lee = cee, uee = b, fee = uee, pee = O(lm, {
  init() {
    this.element = new lX();
  }
}), hee = pee, dee = O(W, b, {
  props: {
    specPath: U(["document", "objects", "MediaType"])
  },
  init() {
    this.element = new F(), this.element.classes.push("content");
  }
}), Dl = dee, mee = O(Dl, {
  init() {
    this.element = new uX();
  }
}), yee = mee, vee = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Schema"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Qc();
  }
}), gee = vee, {
  items: Xg
} = hr.visitors.document.objects.JSONSchema.fixedFields, bee = O(Xg, {
  methods: {
    ObjectElement(e) {
      const t = Xg.compose.methods.ObjectElement.call(this, e);
      return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    },
    ArrayElement(e) {
      return this.element = e.clone(), N;
    }
  }
}), $ee = bee, {
  properties: Qg
} = hr.visitors.document.objects.JSONSchema.fixedFields, Oee = O(Qg, {
  methods: {
    ObjectElement(e) {
      const t = Qg.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "schema");
      }), t;
    }
  }
}), See = Oee, {
  type: wee
} = hr.visitors.document.objects.JSONSchema.fixedFields, xee = O(wee, {
  methods: {
    ArrayElement(e) {
      return this.element = e.clone(), N;
    }
  }
}), Eee = xee, Pee = b, Aee = Pee, jee = b, Tee = jee, _ee = b, Iee = _ee, Ree = b, Fee = Ree, {
  JSONSchemaOrJSONReferenceVisitor: Zg
} = hr.visitors, Vee = O(Zg, {
  methods: {
    ObjectElement(e) {
      const t = Zg.compose.methods.enter.call(this, e);
      return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    }
  }
}), Cee = Vee, Mee = Object.fromEntries(Object.entries(hr.visitors.document.objects.JSONSchema.fixedFields).map(([e, t]) => t === hr.visitors.JSONSchemaOrJSONReferenceVisitor ? [e, Cee] : [e, t])), kee = Mee, Nee = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Discriminator"]),
    canSupportSpecificationExtensions: !1
  },
  init() {
    this.element = new Uc();
  }
}), Dee = Nee, Lee = b, Bee = Lee, Uee = O(W, b, {
  props: {
    specPath: U(["value"])
  },
  init() {
    this.element = new oX();
  }
}), qee = Uee, Hee = O(z, b, {
  props: {
    specPath: U(["document", "objects", "XML"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new tl();
  }
}), Kee = Hee, Gee = b, Jee = Gee, Wee = b, zee = Wee, Yee = b, Xee = Yee, Qee = b, Zee = Qee, ete = b, tte = ete, rte = b, nte = rte, ite = O(lm, {
  init() {
    this.element = new zY();
  }
}), ste = ite, ote = O(Dl, {
  init() {
    this.element = new YY();
  }
}), ate = ote, cte = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"]
  },
  init() {
    this.element = new S1();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "schema");
      }), t;
    }
  }
}), lte = cte, ute = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"]
  },
  init() {
    this.element = new LY();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "response");
      }), this.element.filter(kl).forEach((r, n) => {
        r.setMetaProperty("http-status-code", n.toValue());
      }), t;
    }
  }
}), fte = ute, pte = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"]
  },
  init() {
    this.element = new BY();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "parameter");
      }), t;
    }
  }
}), hte = pte, dte = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"]
  },
  init() {
    this.element = new UY();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "example");
      }), t;
    }
  }
}), mte = dte, yte = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"]
  },
  init() {
    this.element = new qY();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "requestBody");
      }), t;
    }
  }
}), vte = yte, gte = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"]
  },
  init() {
    this.element = new HY();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "header");
      }), this.element.filter(Li).forEach((r, n) => {
        r.setMetaProperty("header-name", n.toValue());
      }), t;
    }
  }
}), bte = gte, $te = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"]
  },
  init() {
    this.element = new KY();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "securityScheme");
      }), t;
    }
  }
}), Ote = $te, Ste = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"]
  },
  init() {
    this.element = new GY();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "link");
      }), t;
    }
  }
}), wte = Ste, xte = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"]
  },
  init() {
    this.element = new JY();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "callback");
      }), t;
    }
  }
}), Ete = xte, Pte = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Example"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new oo();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return K(this.element.externalValue) && this.element.classes.push("reference-element"), t;
    }
  }
}), Ate = Pte, jte = b, Tte = jte, _te = b, Ite = _te, Rte = b, Fte = Rte, Vte = O(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), Cte = Vte, Mte = O(z, b, {
  props: {
    specPath: U(["document", "objects", "ExternalDocumentation"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new ao();
  }
}), kte = Mte, Nte = b, Dte = Nte, Lte = b, Bte = Lte, Ute = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Encoding"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new qc();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return te(this.element.headers) && this.element.headers.filter(Li).forEach((r, n) => {
        r.setMetaProperty("header-name", n.toValue());
      }), t;
    }
  }
}), qte = Ute, Hte = b, Kte = Hte, Gte = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"]
  },
  init() {
    this.element = new rX();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "header");
      }), this.element.forEach((r, n) => {
        if (!Li(r))
          return;
        const i = n.toValue();
        r.setMetaProperty("headerName", i);
      }), t;
    }
  }
}), Jte = Gte, Wte = b, zte = Wte, Yte = b, Xte = Yte, Qte = b, Zte = Qte, ere = O(vi, b, {
  props: {
    fieldPatternPredicate: Fc(/^\/(?<path>.*)$/),
    specPath: U(["document", "objects", "PathItem"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new go();
  },
  methods: {
    ObjectElement(e) {
      const t = vi.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(Ml).forEach((r, n) => {
        r.setMetaProperty("path", n.clone());
      }), t;
    }
  }
}), tre = ere, rre = O(z, b, {
  props: {
    specPath: U(["document", "objects", "RequestBody"])
  },
  init() {
    this.element = new $o();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return te(this.element.contentProp) && this.element.contentProp.filter(Nl).forEach((r, n) => {
        r.setMetaProperty("media-type", n.toValue());
      }), t;
    }
  }
}), nre = rre, ire = b, sre = ire, ore = O(Dl, {
  init() {
    this.element = new ZY();
  }
}), are = ore, cre = b, lre = cre, ure = O(vi, b, {
  props: {
    fieldPatternPredicate: Fc(/{(?<expression>.*)}/),
    specPath: U(["document", "objects", "PathItem"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new no();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(Ml).forEach((r, n) => {
        r.setMetaProperty("runtime-expression", n.toValue());
      }), t;
    }
  }
}), fre = ure, pre = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Response"])
  },
  init() {
    this.element = new Oo();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return te(this.element.contentProp) && this.element.contentProp.filter(Nl).forEach((r, n) => {
        r.setMetaProperty("media-type", n.toValue());
      }), te(this.element.headers) && this.element.headers.filter(Li).forEach((r, n) => {
        r.setMetaProperty("header-name", n.toValue());
      }), t;
    }
  }
}), hre = pre, dre = b, mre = dre, yre = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"]
  },
  init() {
    this.element = new nX();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "header");
      }), this.element.forEach((r, n) => {
        if (!Li(r))
          return;
        const i = n.toValue();
        r.setMetaProperty("header-name", i);
      }), t;
    }
  }
}), vre = yre, gre = O(Dl, {
  init() {
    this.element = new iX();
  }
}), bre = gre, $re = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"]
  },
  init() {
    this.element = new sX();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "link");
      }), t;
    }
  }
}), Ore = $re, Sre = O(z, vi, {
  props: {
    specPathFixedFields: di,
    specPathPatternedFields: di
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
        this.ignoredFields = [...r, ...x4(e.keys(), n)], z.compose.methods.ObjectElement.call(this, e), this.specPath = this.specPathPatternedFields, this.ignoredFields = n, vi.compose.methods.ObjectElement.call(this, e);
      } catch (n) {
        throw this.specPath = t, n;
      }
      return N;
    }
  }
}), eb = Sre, wre = O(eb, b, {
  props: {
    specPathFixedFields: U(["document", "objects", "Responses"]),
    specPathPatternedFields: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"],
    fieldPatternPredicate: Fc(new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${M6(100, 600).join("|")})$`)),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new So();
  },
  methods: {
    ObjectElement(e) {
      const t = eb.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "response");
      }), this.element.filter(kl).forEach((r, n) => {
        const i = n.clone();
        this.fieldPatternPredicate(i.toValue()) && r.setMetaProperty("http-status-code", i);
      }), t;
    }
  }
}), xre = wre, Ere = O(Qt, b, {
  props: {
    alternator: [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: zr,
      specPath: ["document", "objects", "Response"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = Qt.compose.methods.enter.call(this, e);
      return he(this.element) ? this.element.setMetaProperty("referenced-element", "response") : kl(this.element) && this.element.setMetaProperty("http-status-code", "default"), t;
    }
  }
}), Pre = Ere, Are = O(z, b, {
  props: {
    specPath: U(["document", "objects", "Operation"])
  },
  init() {
    this.element = new mo();
  }
}), jre = Are, Tre = O(b, {
  init() {
    this.element = new XY();
  },
  methods: {
    ArrayElement(e) {
      return this.element = this.element.concat(e.clone()), N;
    }
  }
}), _re = Tre, Ire = b, Rre = Ire, Fre = b, Vre = Fre, Cre = b, Mre = Cre, kre = O(Ye, b, {
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
}), V1 = kre, Nre = O(V1, {
  init() {
    this.element = new x1();
  }
}), Dre = Nre, Lre = O(Qt, {
  props: {
    alternator: [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: zr,
      specPath: ["document", "objects", "RequestBody"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = Qt.compose.methods.enter.call(this, e);
      return he(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), t;
    }
  }
}), Bre = Lre, Ure = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"]
  },
  init() {
    this.element = new QY();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(he).forEach((r) => {
        r.setMetaProperty("referenced-element", "callback");
      }), t;
    }
  }
}), qre = Ure, Hre = b, Kre = Hre, Gre = O(Ye, b, {
  init() {
    this.element = new E1();
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = te(t) ? ["document", "objects", "SecurityRequirement"] : ["value"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), Jre = Gre, Wre = O(cm, {
  init() {
    this.element = new P1();
  }
}), zre = Wre, Yre = O(z, b, {
  props: {
    specPath: U(["document", "objects", "PathItem"])
  },
  init() {
    this.element = new vo();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(F1).forEach((r, n) => {
        const i = n.clone();
        i.content = i.toValue().toUpperCase(), r.setMetaProperty("http-method", i);
      }), K(this.element.$ref) && this.element.classes.push("reference-element"), t;
    }
  }
}), Xre = Yre, Qre = O(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), Zre = Qre, ene = b, tne = ene, rne = b, nne = rne, ine = O(cm, {
  init() {
    this.element = new w1();
  }
}), sne = ine, one = O(V1, {
  init() {
    this.element = new WY();
  }
}), ane = one, cne = O(z, b, {
  props: {
    specPath: U(["document", "objects", "SecurityScheme"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Zc();
  }
}), lne = cne, une = b, fne = une, pne = b, hne = pne, dne = b, mne = dne, yne = b, vne = yne, gne = b, bne = gne, $ne = b, One = $ne, Sne = b, wne = Sne, xne = O(z, b, {
  props: {
    specPath: U(["document", "objects", "OAuthFlows"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Kc();
  }
}), Ene = xne, Pne = O(z, b, {
  props: {
    specPath: U(["document", "objects", "OAuthFlow"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Hc();
  }
}), Ane = Pne, jne = b, Tne = jne, _ne = b, Ine = _ne, Rne = b, Fne = Rne, Vne = O(W, b, {
  props: {
    specPath: U(["value"])
  },
  init() {
    this.element = new aX();
  }
}), Cne = Vne, Mne = O(Ye, b, {
  init() {
    this.element = new NY();
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = I1(t) ? ["document", "objects", "Tag"] : ["value"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), kne = Mne;
function tb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tb(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const nb = {
  $visitor: OZ,
  fixedFields: {
    $ref: wZ
  }
}, ib = {
  $visitor: gee,
  fixedFields: rb(rb({}, kee), {}, {
    // validation vocabulary
    // validation keywords for arrays
    items: $ee,
    // Validation keywords for objects
    properties: See,
    // validation keywords for any instance type
    type: Eee,
    // OpenAPI vocabulary
    nullable: Aee,
    discriminator: {
      $ref: "#/visitors/document/objects/Discriminator"
    },
    writeOnly: Tee,
    xml: {
      $ref: "#/visitors/document/objects/XML"
    },
    externalDocs: {
      $ref: "#/visitors/document/objects/ExternalDocumentation"
    },
    example: Iee,
    deprecated: Fee
  })
}, Nne = {
  visitors: {
    value: b,
    document: {
      objects: {
        OpenApi: {
          $visitor: SX,
          fixedFields: {
            openapi: xX,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            servers: cm,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: fZ,
            tags: kne,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: jX,
          fixedFields: {
            title: _X,
            description: RX,
            termsOfService: VX,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: MX
          }
        },
        Contact: {
          $visitor: NX,
          fixedFields: {
            name: LX,
            url: UX,
            email: HX
          }
        },
        License: {
          $visitor: GX,
          fixedFields: {
            name: WX,
            url: YX
          }
        },
        Server: {
          $visitor: pQ,
          fixedFields: {
            url: dQ,
            description: yQ,
            variables: AQ
          }
        },
        ServerVariable: {
          $visitor: bQ,
          fixedFields: {
            enum: OQ,
            default: wQ,
            description: EQ
          }
        },
        Components: {
          $visitor: hZ,
          fixedFields: {
            schemas: lte,
            responses: fte,
            parameters: hte,
            examples: mte,
            requestBodies: vte,
            headers: bte,
            securitySchemes: Ote,
            links: wte,
            callbacks: Ete
          }
        },
        Paths: {
          $visitor: tre
        },
        PathItem: {
          $visitor: Xre,
          fixedFields: {
            $ref: Zre,
            summary: tne,
            description: nne,
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
            servers: sne,
            parameters: ane
          }
        },
        Operation: {
          $visitor: jre,
          fixedFields: {
            tags: _re,
            summary: Rre,
            description: Vre,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: Mre,
            parameters: Dre,
            requestBody: Bre,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: qre,
            deprecated: Kre,
            security: Jre,
            servers: zre
          }
        },
        ExternalDocumentation: {
          $visitor: kte,
          fixedFields: {
            description: Dte,
            url: Bte
          }
        },
        Parameter: {
          $visitor: EZ,
          fixedFields: {
            name: AZ,
            in: TZ,
            description: IZ,
            required: FZ,
            deprecated: CZ,
            allowEmptyValue: kZ,
            style: DZ,
            explode: BZ,
            allowReserved: qZ,
            schema: KZ,
            example: nte,
            examples: ste,
            content: ate
          }
        },
        RequestBody: {
          $visitor: nre,
          fixedFields: {
            description: sre,
            content: are,
            required: lre
          }
        },
        MediaType: {
          $visitor: TQ,
          fixedFields: {
            schema: eZ,
            example: rZ,
            examples: sZ,
            encoding: aZ
          }
        },
        Encoding: {
          $visitor: qte,
          fixedFields: {
            contentType: Kte,
            headers: Jte,
            style: zte,
            explode: Xte,
            allowReserved: Zte
          }
        },
        Responses: {
          $visitor: xre,
          fixedFields: {
            default: Pre
          }
        },
        Response: {
          $visitor: hre,
          fixedFields: {
            description: mre,
            headers: vre,
            content: bre,
            links: Ore
          }
        },
        Callback: {
          $visitor: fre
        },
        Example: {
          $visitor: Ate,
          fixedFields: {
            summary: Tte,
            description: Ite,
            value: Fte,
            externalValue: Cte
          }
        },
        Link: {
          $visitor: QX,
          fixedFields: {
            operationRef: eQ,
            operationId: rQ,
            parameters: oQ,
            requestBody: cQ,
            description: uQ,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: JZ,
          fixedFields: {
            description: zZ,
            required: XZ,
            deprecated: ZZ,
            allowEmptyValue: tee,
            style: nee,
            explode: see,
            allowReserved: aee,
            schema: lee,
            example: fee,
            examples: hee,
            content: yee
          }
        },
        Tag: {
          $visitor: mZ,
          fixedFields: {
            name: vZ,
            description: bZ,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        JSONReference: nb,
        Reference: nb,
        JSONSchema: ib,
        Schema: ib,
        LinkDescription: hr.visitors.document.objects.LinkDescription,
        Media: hr.visitors.document.objects.Media,
        Discriminator: {
          $visitor: Dee,
          fixedFields: {
            propertyName: Bee,
            mapping: qee
          }
        },
        XML: {
          $visitor: Kee,
          fixedFields: {
            name: Jee,
            namespace: zee,
            prefix: Xee,
            attribute: Zee,
            wrapped: tte
          }
        },
        SecurityScheme: {
          $visitor: lne,
          fixedFields: {
            type: fne,
            description: hne,
            name: mne,
            in: vne,
            scheme: bne,
            bearerFormat: One,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: wne
          }
        },
        OAuthFlows: {
          $visitor: Ene,
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
          $visitor: Ane,
          fixedFields: {
            authorizationUrl: Tne,
            tokenUrl: Ine,
            refreshUrl: Fne,
            scopes: Cne
          }
        },
        SecurityRequirement: {
          $visitor: lZ
        }
      },
      extension: {
        $visitor: PX
      }
    }
  }
}, E = Nne;
function sb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sb(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Dne = () => {
  const e = Mi(CY);
  return {
    predicates: Ef(Ef(Ef({}, gX), QQ), {}, {
      isStringElement: K
    }),
    namespace: e
  };
}, Lne = Dne;
function ob(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ob(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ob(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Une = (e, {
  specPath: t = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = em(e), i = Bc(E), s = mi(t, [], i);
  return He(n, s, {
    state: {
      specObj: i
    }
  }), ro(s.element, r, {
    toolboxCreator: Lne,
    visitorOptions: {
      keyMap: j1,
      nodeTypeGetter: A1
    }
  });
}, se = (e) => (t, r = {}) => Une(t, Bne({
  specPath: e
}, r));
no.refract = se(["visitors", "document", "objects", "Callback", "$visitor"]);
io.refract = se(["visitors", "document", "objects", "Components", "$visitor"]);
so.refract = se(["visitors", "document", "objects", "Contact", "$visitor"]);
oo.refract = se(["visitors", "document", "objects", "Example", "$visitor"]);
Uc.refract = se(["visitors", "document", "objects", "Discriminator", "$visitor"]);
qc.refract = se(["visitors", "document", "objects", "Encoding", "$visitor"]);
ao.refract = se(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
co.refract = se(["visitors", "document", "objects", "Header", "$visitor"]);
lo.refract = se(["visitors", "document", "objects", "Info", "$visitor"]);
uo.refract = se(["visitors", "document", "objects", "License", "$visitor"]);
fo.refract = se(["visitors", "document", "objects", "Link", "$visitor"]);
po.refract = se(["visitors", "document", "objects", "MediaType", "$visitor"]);
Hc.refract = se(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Kc.refract = se(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
ho.refract = se(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
Gc.refract = se(["visitors", "document", "objects", "OpenApi", "$visitor"]);
mo.refract = se(["visitors", "document", "objects", "Operation", "$visitor"]);
yo.refract = se(["visitors", "document", "objects", "Parameter", "$visitor"]);
vo.refract = se(["visitors", "document", "objects", "PathItem", "$visitor"]);
go.refract = se(["visitors", "document", "objects", "Paths", "$visitor"]);
bo.refract = se(["visitors", "document", "objects", "Reference", "$visitor"]);
$o.refract = se(["visitors", "document", "objects", "RequestBody", "$visitor"]);
Oo.refract = se(["visitors", "document", "objects", "Response", "$visitor"]);
So.refract = se(["visitors", "document", "objects", "Responses", "$visitor"]);
Qc.refract = se(["visitors", "document", "objects", "Schema", "$visitor"]);
xo.refract = se(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
Zc.refract = se(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
Eo.refract = se(["visitors", "document", "objects", "Server", "$visitor"]);
Po.refract = se(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
el.refract = se(["visitors", "document", "objects", "Tag", "$visitor"]);
tl.refract = se(["visitors", "document", "objects", "XML", "$visitor"]);
class qne extends no {
}
const Ll = qne;
class Hne extends io {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(t) {
    this.set("pathItems", t);
  }
}
const Bl = Hne;
class Kne extends so {
}
const Ul = Kne;
class Gne extends Uc {
}
const um = Gne;
class Jne extends qc {
}
const fm = Jne;
class Wne extends oo {
}
const ql = Wne;
class zne extends ao {
}
const Hl = zne;
class Yne extends co {
  get schema() {
    return this.get("schema");
  }
  set schema(t) {
    this.set("schema", t);
  }
}
const Kl = Yne;
class Xne extends lo {
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
const Gl = Xne;
class lh extends Ur {
  constructor(t, r, n) {
    super(t, r, n), this.element = "jsonSchemaDialect";
  }
}
M(lh, "default", new lh("https://spec.openapis.org/oas/3.1/dialect/base"));
const Ao = lh;
class Qne extends uo {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(t) {
    this.set("identifier", t);
  }
}
const Jl = Qne;
class Zne extends fo {
}
const Wl = Zne;
class eie extends po {
  get schema() {
    return this.get("schema");
  }
  set schema(t) {
    this.set("schema", t);
  }
}
const zl = eie;
class tie extends Hc {
}
const pm = tie;
class rie extends Kc {
}
const hm = rie;
class nie extends ho {
}
const dm = nie;
class iie extends F {
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
const en = iie;
class sie extends mo {
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(t) {
    this.set("requestBody", t);
  }
}
const gi = sie;
class oie extends yo {
  get schema() {
    return this.get("schema");
  }
  set schema(t) {
    this.set("schema", t);
  }
}
const Yl = oie;
class aie extends vo {
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
const zt = aie;
class cie extends go {
}
const Xl = cie;
let mm = class extends bo {
};
Object.defineProperty(mm.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(e) {
    this.set("description", e);
  },
  enumerable: !0
});
Object.defineProperty(mm.prototype, "summary", {
  get() {
    return this.get("summary");
  },
  set(e) {
    this.set("summary", e);
  },
  enumerable: !0
});
const qr = mm;
class lie extends $o {
}
const Ql = lie;
let uie = class extends Oo {
};
const Zl = uie;
class fie extends So {
}
const eu = fie;
let pie = class extends F {
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
const dr = pie;
class hie extends xo {
}
const tu = hie;
class die extends Zc {
}
const ym = die;
class mie extends Eo {
}
const ru = mie;
class yie extends Po {
}
const nu = yie;
class vie extends el {
}
const vm = vie;
class gie extends tl {
}
const gm = gie, bie = {
  namespace: (e) => {
    const {
      base: t
    } = e;
    return t.register("callback", Ll), t.register("components", Bl), t.register("contact", Ul), t.register("discriminator", um), t.register("encoding", fm), t.register("example", ql), t.register("externalDocumentation", Hl), t.register("header", Kl), t.register("info", Gl), t.register("jsonSchemaDialect", Ao), t.register("license", Jl), t.register("link", Wl), t.register("mediaType", zl), t.register("oAuthFlow", pm), t.register("oAuthFlows", hm), t.register("openapi", dm), t.register("openApi3_1", en), t.register("operation", gi), t.register("parameter", Yl), t.register("pathItem", zt), t.register("paths", Xl), t.register("reference", qr), t.register("requestBody", Ql), t.register("response", Zl), t.register("responses", eu), t.register("schema", dr), t.register("securityRequirement", tu), t.register("securityScheme", ym), t.register("server", ru), t.register("serverVariable", nu), t.register("tag", vm), t.register("xml", gm), t;
  }
}, iu = bie;
class su extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(su.primaryClass);
  }
}
M(su, "primaryClass", "components-path-items");
const $ie = su;
class ou extends F {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(ou.primaryClass);
  }
}
M(ou, "primaryClass", "webhooks");
const Oie = ou;
function ab(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ab(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ab(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const We = (e) => {
  if (Dc(e))
    return `${e.element.charAt(0).toUpperCase() + e.element.slice(1)}Element`;
}, et = Sie({
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
}, Di), wie = () => ({
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
          const i = Qs(r);
          if (!Array.isArray(i) || i.length === 0)
            return;
          const s = bS([], ["parameters", "content"], n), o = Y6(t, [...s, ...i]);
          n.parameters = new x1(o);
        }
      }
    }
  };
}, xie = wie, Eie = () => ({
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
            r.security = new E1((l = t) === null || l === void 0 ? void 0 : l.content);
          }
        }
      }
    }
  };
}, Pie = Eie, Aie = () => ({
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
          typeof n.servers > "u" && typeof t < "u" && (n.servers = new w1(t));
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
          const i = Qs(r);
          typeof i > "u" || e.isArrayElement(n.servers) || (n.servers = new P1(i));
        }
      }
    }
  };
}, jie = Aie, uh = (e) => e.replace(/\s/g, ""), fh = (e) => e.replace(/\W/gi, "_"), Tie = (e, t) => {
  const r = fh(uh(t.toLowerCase())), n = fh(uh(e));
  return `${r}${n}`;
}, _ie = (e, t, r) => {
  const n = uh(e);
  return n.length > 0 ? fh(n) : Tie(t, r);
}, Iie = ({
  operationIdNormalizer: e = _ie
} = {}) => ({
  predicates: t,
  namespace: r
}) => {
  const n = [], i = [], s = [];
  return {
    visitor: {
      OpenApi3_1Element: {
        leave() {
          const o = Q4((a) => Ke(a.operationId), i);
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
          const a = On("path", Ke(o.meta.get("path")));
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
          const a = String(Ke(o.operationId)), c = Qs(n), l = On("method", Ke(o.meta.get("http-method"))), u = e(a, c, l);
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
}, Rie = Iie, Fie = () => ({
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
}), Vie = Fie, Cie = () => ({
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
}), Mie = Cie, kie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ll || e(n) && t("callback", n) && r("object", n)), Nie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Bl || e(n) && t("components", n) && r("object", n)), Die = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ul || e(n) && t("contact", n) && r("object", n)), Lie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ql || e(n) && t("example", n) && r("object", n)), Bie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Hl || e(n) && t("externalDocumentation", n) && r("object", n)), Uie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Kl || e(n) && t("header", n) && r("object", n)), qie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Gl || e(n) && t("info", n) && r("object", n)), C1 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ao || e(n) && t("jsonSchemaDialect", n) && r("string", n)), Hie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Jl || e(n) && t("license", n) && r("object", n)), M1 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Wl || e(n) && t("link", n) && r("object", n)), Ga = (e) => {
  if (!M1(e) || !K(e.operationRef))
    return !1;
  const t = e.operationRef.toValue();
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, Kie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof dm || e(n) && t("openapi", n) && r("string", n)), bm = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r,
  hasClass: n
}) => (i) => i instanceof en || e(i) && t("openApi3_1", i) && r("object", i) && n("api", i)), k1 = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof gi || e(n) && t("operation", n) && r("object", n)), Gie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Yl || e(n) && t("parameter", n) && r("object", n)), au = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof zt || e(n) && t("pathItem", n) && r("object", n)), cu = (e) => {
  if (!au(e) || !K(e.$ref))
    return !1;
  const t = e.$ref.toValue();
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, Jie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Xl || e(n) && t("paths", n) && r("object", n)), Bi = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof qr || e(n) && t("reference", n) && r("object", n)), lu = (e) => {
  if (!Bi(e) || !K(e.$ref))
    return !1;
  const t = e.$ref.toValue();
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, Wie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ql || e(n) && t("requestBody", n) && r("object", n)), zie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Zl || e(n) && t("response", n) && r("object", n)), Yie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof eu || e(n) && t("responses", n) && r("object", n)), Ui = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof dr || e(n) && t("schema", n) && r("object", n)), $m = (e) => Lc(e) && e.classes.includes("boolean-json-schema"), Xie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof tu || e(n) && t("securityRequirement", n) && r("object", n)), Qie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ru || e(n) && t("server", n) && r("object", n)), Zie = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof nu || e(n) && t("serverVariable", n) && r("object", n)), ese = V(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof zl || e(n) && t("mediaType", n) && r("object", n)), tse = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: $m,
  isCallbackElement: kie,
  isComponentsElement: Nie,
  isContactElement: Die,
  isExampleElement: Lie,
  isExternalDocumentationElement: Bie,
  isHeaderElement: Uie,
  isInfoElement: qie,
  isJsonSchemaDialectElement: C1,
  isLicenseElement: Hie,
  isLinkElement: M1,
  isLinkElementExternal: Ga,
  isMediaTypeElement: ese,
  isOpenApi3_1Element: bm,
  isOpenapiElement: Kie,
  isOperationElement: k1,
  isParameterElement: Gie,
  isPathItemElement: au,
  isPathItemElementExternal: cu,
  isPathsElement: Jie,
  isReferenceElement: Bi,
  isReferenceElementExternal: lu,
  isRequestBodyElement: Wie,
  isResponseElement: zie,
  isResponsesElement: Yie,
  isSchemaElement: Ui,
  isSecurityRequirementElement: Xie,
  isServerElement: Qie,
  isServerVariableElement: Zie
}, Symbol.toStringTag, { value: "Module" }));
function cb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cb(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const rse = () => {
  const e = Mi(iu);
  return {
    predicates: lb(lb({}, tse), {}, {
      isStringElement: K,
      isArrayElement: $t,
      isObjectElement: te,
      includesClasses: os
    }),
    namespace: e
  };
}, N1 = rse, nse = O(z, b, {
  props: {
    specPath: U(["document", "objects", "OpenApi"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new en(), this.openApiSemanticElement = this.element;
  },
  methods: {
    ObjectElement(e) {
      return this.openApiGenericElement = e, z.compose.methods.ObjectElement.call(this, e);
    }
  }
}), ise = nse, {
  visitors: {
    document: {
      objects: {
        Info: {
          $visitor: sse
        }
      }
    }
  }
} = E, ose = O(sse, {
  init() {
    this.element = new Gl();
  }
}), ase = ose, cse = b, lse = cse, {
  visitors: {
    document: {
      objects: {
        Contact: {
          $visitor: use
        }
      }
    }
  }
} = E, fse = O(use, {
  init() {
    this.element = new Ul();
  }
}), pse = fse, {
  visitors: {
    document: {
      objects: {
        License: {
          $visitor: hse
        }
      }
    }
  }
} = E, dse = O(hse, {
  init() {
    this.element = new Jl();
  }
}), mse = dse, yse = b, vse = yse, {
  visitors: {
    document: {
      objects: {
        Link: {
          $visitor: gse
        }
      }
    }
  }
} = E, bse = O(gse, {
  init() {
    this.element = new Wl();
  }
}), $se = bse, Ose = O(Ye, b, {
  methods: {
    StringElement(e) {
      const t = new Ao(e.toValue());
      return this.copyMetaAndAttributes(e, t), this.element = t, N;
    }
  }
}), Sse = Ose, {
  visitors: {
    document: {
      objects: {
        Server: {
          $visitor: wse
        }
      }
    }
  }
} = E, xse = O(wse, {
  init() {
    this.element = new ru();
  }
}), Ese = xse, {
  visitors: {
    document: {
      objects: {
        ServerVariable: {
          $visitor: Pse
        }
      }
    }
  }
} = E, Ase = O(Pse, {
  init() {
    this.element = new nu();
  }
}), jse = Ase, {
  visitors: {
    document: {
      objects: {
        MediaType: {
          $visitor: Tse
        }
      }
    }
  }
} = E, _se = O(Tse, {
  init() {
    this.element = new zl();
  }
}), Ise = _se, {
  visitors: {
    document: {
      objects: {
        SecurityRequirement: {
          $visitor: Rse
        }
      }
    }
  }
} = E, Fse = O(Rse, {
  init() {
    this.element = new tu();
  }
}), Vse = Fse, {
  visitors: {
    document: {
      objects: {
        Components: {
          $visitor: Cse
        }
      }
    }
  }
} = E, Mse = O(Cse, {
  init() {
    this.element = new Bl();
  }
}), kse = Mse, {
  visitors: {
    document: {
      objects: {
        Tag: {
          $visitor: Nse
        }
      }
    }
  }
} = E, Dse = O(Nse, {
  init() {
    this.element = new vm();
  }
}), Lse = Dse, {
  visitors: {
    document: {
      objects: {
        Reference: {
          $visitor: Bse
        }
      }
    }
  }
} = E, Use = O(Bse, {
  init() {
    this.element = new qr();
  }
}), qse = Use, Hse = b, Kse = Hse, Gse = b, Jse = Gse, {
  visitors: {
    document: {
      objects: {
        Parameter: {
          $visitor: Wse
        }
      }
    }
  }
} = E, zse = O(Wse, {
  init() {
    this.element = new Yl();
  }
}), Yse = zse, {
  visitors: {
    document: {
      objects: {
        Header: {
          $visitor: Xse
        }
      }
    }
  }
} = E, Qse = O(Xse, {
  init() {
    this.element = new Kl();
  }
}), Zse = Qse, eoe = O({
  props: {
    parent: null
  },
  // @ts-ignore
  init({
    parent: e = this.parent
  }) {
    this.parent = e, this.passingOptionsNames = [...this.passingOptionsNames, "parent"];
  }
}), Sr = eoe, toe = O(z, Sr, b, {
  props: {
    specPath: U(["document", "objects", "Schema"]),
    canSupportSpecificationExtensions: !0
  },
  // @ts-ignore
  init() {
    const e = () => {
      let n;
      return this.openApiSemanticElement !== null && C1(this.openApiSemanticElement.jsonSchemaDialect) ? n = this.openApiSemanticElement.jsonSchemaDialect.toValue() : this.openApiGenericElement !== null && K(this.openApiGenericElement.get("jsonSchemaDialect")) ? n = this.openApiGenericElement.get("jsonSchemaDialect").toValue() : n = Ao.default.toValue(), n;
    }, t = (n) => {
      if (zd(this.parent) && !K(n.get("$schema")))
        this.element.setMetaProperty("inherited$schema", e());
      else if (Ui(this.parent) && !K(n.get("$schema"))) {
        var i, s;
        const o = On((i = this.parent.meta.get("inherited$schema")) === null || i === void 0 ? void 0 : i.toValue(), (s = this.parent.$schema) === null || s === void 0 ? void 0 : s.toValue());
        this.element.setMetaProperty("inherited$schema", o);
      }
    }, r = (n) => {
      var i;
      const s = this.parent !== null ? this.parent.getMetaProperty("inherited$id", []).clone() : new pe(), o = (i = n.get("$id")) === null || i === void 0 ? void 0 : i.toValue();
      Yd(o) && s.push(o), this.element.setMetaProperty("inherited$id", s);
    };
    this.ObjectElement = function(i) {
      this.element = new dr(), t(i), r(i), this.parent = this.element;
      const s = z.compose.methods.ObjectElement.call(this, i);
      return K(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), s;
    }, this.BooleanElement = function(i) {
      return this.element = i.clone(), this.element.classes.push("boolean-json-schema"), N;
    };
  }
}), roe = toe, noe = b, ioe = noe, soe = O(b, {
  methods: {
    ObjectElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-$vocabulary"), N;
    }
  }
}), ooe = soe, aoe = b, coe = aoe, loe = b, uoe = loe, foe = b, poe = foe, hoe = b, doe = hoe, moe = O(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("reference-value"), N;
    }
  }
}), yoe = moe, voe = O(W, Sr, b, {
  props: {
    specPath: U(["document", "objects", "Schema"])
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-$defs");
  }
}), goe = voe, boe = b, $oe = boe, Ooe = O(Ye, Sr, b, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-allOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (te(t)) {
          const r = this.toRefractedElement(["document", "objects", "Schema"], t);
          this.element.push(r);
        } else {
          const r = t.clone();
          this.element.push(r);
        }
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), Soe = Ooe, woe = O(Ye, Sr, b, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-anyOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (te(t)) {
          const r = this.toRefractedElement(["document", "objects", "Schema"], t);
          this.element.push(r);
        } else {
          const r = t.clone();
          this.element.push(r);
        }
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), xoe = woe, Eoe = O(Ye, Sr, b, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-oneOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (te(t)) {
          const r = this.toRefractedElement(["document", "objects", "Schema"], t);
          this.element.push(r);
        } else {
          const r = t.clone();
          this.element.push(r);
        }
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), Poe = Eoe, Aoe = O(W, Sr, b, {
  props: {
    specPath: U(["document", "objects", "Schema"])
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-dependentSchemas");
  }
}), joe = Aoe, Toe = O(Ye, Sr, b, {
  init() {
    this.element = new pe(), this.element.classes.push("json-schema-prefixItems");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (te(t)) {
          const r = this.toRefractedElement(["document", "objects", "Schema"], t);
          this.element.push(r);
        } else {
          const r = t.clone();
          this.element.push(r);
        }
      }), this.copyMetaAndAttributes(e, this.element), N;
    }
  }
}), _oe = Toe, Ioe = O(W, Sr, b, {
  props: {
    specPath: U(["document", "objects", "Schema"])
  },
  // @ts-ignore
  init() {
    this.element = new F(), this.element.classes.push("json-schema-properties");
  }
}), Roe = Ioe, Foe = O(W, Sr, b, {
  props: {
    specPath: U(["document", "objects", "Schema"])
  },
  init() {
    this.element = new F(), this.element.classes.push("json-schema-patternProperties");
  }
}), Voe = Foe, Coe = O(b, {
  methods: {
    StringElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-type"), N;
    },
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-type"), N;
    }
  }
}), Moe = Coe, koe = O(b, {
  methods: {
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-enum"), N;
    }
  }
}), Noe = koe, Doe = b, Loe = Doe, Boe = b, Uoe = Boe, qoe = b, Hoe = qoe, Koe = b, Goe = Koe, Joe = b, Woe = Joe, zoe = b, Yoe = zoe, Xoe = b, Qoe = Xoe, Zoe = b, eae = Zoe, tae = b, rae = tae, nae = b, iae = nae, sae = b, oae = sae, aae = b, cae = aae, lae = b, uae = lae, fae = b, pae = fae, hae = b, dae = hae, mae = b, yae = mae, vae = O(b, {
  methods: {
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-required"), N;
    }
  }
}), gae = vae, bae = O(b, {
  methods: {
    ObjectElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-dependentRequired"), N;
    }
  }
}), $ae = bae, Oae = b, Sae = Oae, wae = b, xae = wae, Eae = b, Pae = Eae, Aae = b, jae = Aae, Tae = b, _ae = Tae, Iae = b, Rae = Iae, Fae = O(b, {
  methods: {
    ArrayElement(e) {
      return this.element = e.clone(), this.element.classes.push("json-schema-examples"), N;
    }
  }
}), Vae = Fae, Cae = b, Mae = Cae, kae = b, Nae = kae, Dae = b, Lae = Dae, Bae = b, Uae = Bae, {
  visitors: {
    document: {
      objects: {
        Discriminator: {
          $visitor: qae
        }
      }
    }
  }
} = E, Hae = O(qae, {
  props: {
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new um();
  }
}), Kae = Hae, {
  visitors: {
    document: {
      objects: {
        XML: {
          $visitor: Gae
        }
      }
    }
  }
} = E, Jae = O(Gae, {
  init() {
    this.element = new gm();
  }
}), Wae = Jae, zae = O(W, b, {
  props: {
    specPath: U(["document", "objects", "Schema"])
  },
  init() {
    this.element = new S1();
  }
}), Yae = zae, Xae = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"]
  },
  init() {
    this.element = new $ie();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(Bi).forEach((r) => {
        r.setMetaProperty("referenced-element", "pathItem");
      }), t;
    }
  }
}), Qae = Xae, {
  visitors: {
    document: {
      objects: {
        Example: {
          $visitor: Zae
        }
      }
    }
  }
} = E, ece = O(Zae, {
  init() {
    this.element = new ql();
  }
}), tce = ece, {
  visitors: {
    document: {
      objects: {
        ExternalDocumentation: {
          $visitor: rce
        }
      }
    }
  }
} = E, nce = O(rce, {
  init() {
    this.element = new Hl();
  }
}), ice = nce, {
  visitors: {
    document: {
      objects: {
        Encoding: {
          $visitor: sce
        }
      }
    }
  }
} = E, oce = O(sce, {
  init() {
    this.element = new fm();
  }
}), ace = oce, {
  visitors: {
    document: {
      objects: {
        Paths: {
          $visitor: cce
        }
      }
    }
  }
} = E, lce = O(cce, {
  init() {
    this.element = new Xl();
  }
}), uce = lce, {
  visitors: {
    document: {
      objects: {
        RequestBody: {
          $visitor: fce
        }
      }
    }
  }
} = E, pce = O(fce, {
  init() {
    this.element = new Ql();
  }
}), hce = pce, {
  visitors: {
    document: {
      objects: {
        Callback: {
          $visitor: ub
        }
      }
    }
  }
} = E, dce = O(ub, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"]
  },
  init() {
    this.element = new Ll();
  },
  methods: {
    ObjectElement(e) {
      const t = ub.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(Bi).forEach((r) => {
        r.setMetaProperty("referenced-element", "pathItem");
      }), t;
    }
  }
}), mce = dce, {
  visitors: {
    document: {
      objects: {
        Response: {
          $visitor: yce
        }
      }
    }
  }
} = E, vce = O(yce, {
  init() {
    this.element = new Zl();
  }
}), gce = vce, {
  visitors: {
    document: {
      objects: {
        Responses: {
          $visitor: bce
        }
      }
    }
  }
} = E, $ce = O(bce, {
  init() {
    this.element = new eu();
  }
}), Oce = $ce, {
  visitors: {
    document: {
      objects: {
        Operation: {
          $visitor: Sce
        }
      }
    }
  }
} = E, wce = O(Sce, {
  init() {
    this.element = new gi();
  }
}), xce = wce, {
  visitors: {
    document: {
      objects: {
        PathItem: {
          $visitor: Ece
        }
      }
    }
  }
} = E, Pce = O(Ece, {
  init() {
    this.element = new zt();
  }
}), Ace = Pce, {
  visitors: {
    document: {
      objects: {
        SecurityScheme: {
          $visitor: jce
        }
      }
    }
  }
} = E, Tce = O(jce, {
  init() {
    this.element = new ym();
  }
}), _ce = Tce, {
  visitors: {
    document: {
      objects: {
        OAuthFlows: {
          $visitor: Ice
        }
      }
    }
  }
} = E, Rce = O(Ice, {
  init() {
    this.element = new hm();
  }
}), Fce = Rce, {
  visitors: {
    document: {
      objects: {
        OAuthFlow: {
          $visitor: Vce
        }
      }
    }
  }
} = E, Cce = O(Vce, {
  init() {
    this.element = new pm();
  }
}), Mce = Cce, kce = O(W, b, {
  props: {
    specPath: (e) => ue(e) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"]
  },
  init() {
    this.element = new Oie();
  },
  methods: {
    ObjectElement(e) {
      const t = W.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(Bi).forEach((r) => {
        r.setMetaProperty("referenced-element", "pathItem");
      }), this.element.filter(au).forEach((r, n) => {
        r.setMetaProperty("webhook-name", n.toValue());
      }), t;
    }
  }
}), Nce = kce, Dce = {
  visitors: {
    value: E.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: ise,
          fixedFields: {
            openapi: E.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: Sse,
            servers: E.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: Nce,
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: E.visitors.document.objects.OpenApi.fixedFields.security,
            tags: E.visitors.document.objects.OpenApi.fixedFields.tags,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: ase,
          fixedFields: {
            title: E.visitors.document.objects.Info.fixedFields.title,
            description: E.visitors.document.objects.Info.fixedFields.description,
            summary: lse,
            termsOfService: E.visitors.document.objects.Info.fixedFields.termsOfService,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: E.visitors.document.objects.Info.fixedFields.version
          }
        },
        Contact: {
          $visitor: pse,
          fixedFields: {
            name: E.visitors.document.objects.Contact.fixedFields.name,
            url: E.visitors.document.objects.Contact.fixedFields.url,
            email: E.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: mse,
          fixedFields: {
            name: E.visitors.document.objects.License.fixedFields.name,
            identifier: vse,
            url: E.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: Ese,
          fixedFields: {
            url: E.visitors.document.objects.Server.fixedFields.url,
            description: E.visitors.document.objects.Server.fixedFields.description,
            variables: E.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: jse,
          fixedFields: {
            enum: E.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: E.visitors.document.objects.ServerVariable.fixedFields.default,
            description: E.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: kse,
          fixedFields: {
            schemas: Yae,
            responses: E.visitors.document.objects.Components.fixedFields.responses,
            parameters: E.visitors.document.objects.Components.fixedFields.parameters,
            examples: E.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: E.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: E.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: E.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: E.visitors.document.objects.Components.fixedFields.links,
            callbacks: E.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: Qae
          }
        },
        Paths: {
          $visitor: uce
        },
        PathItem: {
          $visitor: Ace,
          fixedFields: {
            $ref: E.visitors.document.objects.PathItem.fixedFields.$ref,
            summary: E.visitors.document.objects.PathItem.fixedFields.summary,
            description: E.visitors.document.objects.PathItem.fixedFields.description,
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
            servers: E.visitors.document.objects.PathItem.fixedFields.servers,
            parameters: E.visitors.document.objects.PathItem.fixedFields.parameters
          }
        },
        Operation: {
          $visitor: xce,
          fixedFields: {
            tags: E.visitors.document.objects.Operation.fixedFields.tags,
            summary: E.visitors.document.objects.Operation.fixedFields.summary,
            description: E.visitors.document.objects.Operation.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: E.visitors.document.objects.Operation.fixedFields.operationId,
            parameters: E.visitors.document.objects.Operation.fixedFields.parameters,
            requestBody: E.visitors.document.objects.Operation.fixedFields.requestBody,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: E.visitors.document.objects.Operation.fixedFields.callbacks,
            deprecated: E.visitors.document.objects.Operation.fixedFields.deprecated,
            security: E.visitors.document.objects.Operation.fixedFields.security,
            servers: E.visitors.document.objects.Operation.fixedFields.servers
          }
        },
        ExternalDocumentation: {
          $visitor: ice,
          fixedFields: {
            description: E.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: E.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: Yse,
          fixedFields: {
            name: E.visitors.document.objects.Parameter.fixedFields.name,
            in: E.visitors.document.objects.Parameter.fixedFields.in,
            description: E.visitors.document.objects.Parameter.fixedFields.description,
            required: E.visitors.document.objects.Parameter.fixedFields.required,
            deprecated: E.visitors.document.objects.Parameter.fixedFields.deprecated,
            allowEmptyValue: E.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,
            style: E.visitors.document.objects.Parameter.fixedFields.style,
            explode: E.visitors.document.objects.Parameter.fixedFields.explode,
            allowReserved: E.visitors.document.objects.Parameter.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: E.visitors.document.objects.Parameter.fixedFields.example,
            examples: E.visitors.document.objects.Parameter.fixedFields.examples,
            content: E.visitors.document.objects.Parameter.fixedFields.content
          }
        },
        RequestBody: {
          $visitor: hce,
          fixedFields: {
            description: E.visitors.document.objects.RequestBody.fixedFields.description,
            content: E.visitors.document.objects.RequestBody.fixedFields.content,
            required: E.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: Ise,
          fixedFields: {
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: E.visitors.document.objects.MediaType.fixedFields.example,
            examples: E.visitors.document.objects.MediaType.fixedFields.examples,
            encoding: E.visitors.document.objects.MediaType.fixedFields.encoding
          }
        },
        Encoding: {
          $visitor: ace,
          fixedFields: {
            contentType: E.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: E.visitors.document.objects.Encoding.fixedFields.headers,
            style: E.visitors.document.objects.Encoding.fixedFields.style,
            explode: E.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: E.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: Oce,
          fixedFields: {
            default: E.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: gce,
          fixedFields: {
            description: E.visitors.document.objects.Response.fixedFields.description,
            headers: E.visitors.document.objects.Response.fixedFields.headers,
            content: E.visitors.document.objects.Response.fixedFields.content,
            links: E.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: mce
        },
        Example: {
          $visitor: tce,
          fixedFields: {
            summary: E.visitors.document.objects.Example.fixedFields.summary,
            description: E.visitors.document.objects.Example.fixedFields.description,
            value: E.visitors.document.objects.Example.fixedFields.value,
            externalValue: E.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: $se,
          fixedFields: {
            operationRef: E.visitors.document.objects.Link.fixedFields.operationRef,
            operationId: E.visitors.document.objects.Link.fixedFields.operationId,
            parameters: E.visitors.document.objects.Link.fixedFields.parameters,
            requestBody: E.visitors.document.objects.Link.fixedFields.requestBody,
            description: E.visitors.document.objects.Link.fixedFields.description,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: Zse,
          fixedFields: {
            description: E.visitors.document.objects.Header.fixedFields.description,
            required: E.visitors.document.objects.Header.fixedFields.required,
            deprecated: E.visitors.document.objects.Header.fixedFields.deprecated,
            allowEmptyValue: E.visitors.document.objects.Header.fixedFields.allowEmptyValue,
            style: E.visitors.document.objects.Header.fixedFields.style,
            explode: E.visitors.document.objects.Header.fixedFields.explode,
            allowReserved: E.visitors.document.objects.Header.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: E.visitors.document.objects.Header.fixedFields.example,
            examples: E.visitors.document.objects.Header.fixedFields.examples,
            content: E.visitors.document.objects.Header.fixedFields.content
          }
        },
        Tag: {
          $visitor: Lse,
          fixedFields: {
            name: E.visitors.document.objects.Tag.fixedFields.name,
            description: E.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: qse,
          fixedFields: {
            $ref: E.visitors.document.objects.Reference.fixedFields.$ref,
            summary: Kse,
            description: Jse
          }
        },
        Schema: {
          $visitor: roe,
          fixedFields: {
            // core vocabulary
            $schema: ioe,
            $vocabulary: ooe,
            $id: coe,
            $anchor: uoe,
            $dynamicAnchor: poe,
            $dynamicRef: doe,
            $ref: yoe,
            $defs: goe,
            $comment: $oe,
            // applicator vocabulary
            allOf: Soe,
            anyOf: xoe,
            oneOf: Poe,
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
            dependentSchemas: joe,
            prefixItems: _oe,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: Roe,
            patternProperties: Voe,
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
            type: Moe,
            enum: Noe,
            const: Loe,
            // validation Keywords for Numeric Instances (number and integer)
            multipleOf: Uoe,
            maximum: Hoe,
            exclusiveMaximum: Goe,
            minimum: Woe,
            exclusiveMinimum: Yoe,
            // validation Keywords for Strings
            maxLength: Qoe,
            minLength: eae,
            pattern: rae,
            // validation Keywords for Arrays
            maxItems: iae,
            minItems: oae,
            uniqueItems: cae,
            maxContains: uae,
            minContains: pae,
            // validation Keywords for Objects
            maxProperties: dae,
            minProperties: yae,
            required: gae,
            dependentRequired: $ae,
            // basic Meta-Data Annotations vocabulary
            title: Sae,
            description: xae,
            default: Pae,
            deprecated: jae,
            readOnly: _ae,
            writeOnly: Rae,
            examples: Vae,
            // semantic Content With "format" vocabulary
            format: Mae,
            // contents of String-Encoded Data vocabulary
            contentEncoding: Nae,
            contentMediaType: Lae,
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
            example: Uae
          }
        },
        Discriminator: {
          $visitor: Kae,
          fixedFields: {
            propertyName: E.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: E.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: Wae,
          fixedFields: {
            name: E.visitors.document.objects.XML.fixedFields.name,
            namespace: E.visitors.document.objects.XML.fixedFields.namespace,
            prefix: E.visitors.document.objects.XML.fixedFields.prefix,
            attribute: E.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: E.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: _ce,
          fixedFields: {
            type: E.visitors.document.objects.SecurityScheme.fixedFields.type,
            description: E.visitors.document.objects.SecurityScheme.fixedFields.description,
            name: E.visitors.document.objects.SecurityScheme.fixedFields.name,
            in: E.visitors.document.objects.SecurityScheme.fixedFields.in,
            scheme: E.visitors.document.objects.SecurityScheme.fixedFields.scheme,
            bearerFormat: E.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: E.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl
          }
        },
        OAuthFlows: {
          $visitor: Fce,
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
          $visitor: Mce,
          fixedFields: {
            authorizationUrl: E.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: E.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: E.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: E.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: Vse
        }
      },
      extension: {
        $visitor: E.visitors.document.extension.$visitor
      }
    }
  }
}, Lce = Dce;
function fb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fb(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Uce = (e, {
  specPath: t = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = em(e), i = Bc(Lce), s = mi(t, [], i);
  return He(n, s, {
    state: {
      specObj: i
    }
  }), ro(s.element, r, {
    toolboxCreator: N1,
    visitorOptions: {
      keyMap: et,
      nodeTypeGetter: We
    }
  });
}, re = (e) => (t, r = {}) => Uce(t, Bce({
  specPath: e
}, r));
Ll.refract = re(["visitors", "document", "objects", "Callback", "$visitor"]);
Bl.refract = re(["visitors", "document", "objects", "Components", "$visitor"]);
Ul.refract = re(["visitors", "document", "objects", "Contact", "$visitor"]);
ql.refract = re(["visitors", "document", "objects", "Example", "$visitor"]);
um.refract = re(["visitors", "document", "objects", "Discriminator", "$visitor"]);
fm.refract = re(["visitors", "document", "objects", "Encoding", "$visitor"]);
Hl.refract = re(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Kl.refract = re(["visitors", "document", "objects", "Header", "$visitor"]);
Gl.refract = re(["visitors", "document", "objects", "Info", "$visitor"]);
Ao.refract = re(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
Jl.refract = re(["visitors", "document", "objects", "License", "$visitor"]);
Wl.refract = re(["visitors", "document", "objects", "Link", "$visitor"]);
zl.refract = re(["visitors", "document", "objects", "MediaType", "$visitor"]);
pm.refract = re(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
hm.refract = re(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
dm.refract = re(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
en.refract = re(["visitors", "document", "objects", "OpenApi", "$visitor"]);
gi.refract = re(["visitors", "document", "objects", "Operation", "$visitor"]);
Yl.refract = re(["visitors", "document", "objects", "Parameter", "$visitor"]);
zt.refract = re(["visitors", "document", "objects", "PathItem", "$visitor"]);
Xl.refract = re(["visitors", "document", "objects", "Paths", "$visitor"]);
qr.refract = re(["visitors", "document", "objects", "Reference", "$visitor"]);
Ql.refract = re(["visitors", "document", "objects", "RequestBody", "$visitor"]);
Zl.refract = re(["visitors", "document", "objects", "Response", "$visitor"]);
eu.refract = re(["visitors", "document", "objects", "Responses", "$visitor"]);
dr.refract = re(["visitors", "document", "objects", "Schema", "$visitor"]);
tu.refract = re(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
ym.refract = re(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
ru.refract = re(["visitors", "document", "objects", "Server", "$visitor"]);
nu.refract = re(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
vm.refract = re(["visitors", "document", "objects", "Tag", "$visitor"]);
gm.refract = re(["visitors", "document", "objects", "XML", "$visitor"]);
var bi = {}, qce = {
  get exports() {
    return bi;
  },
  set exports(e) {
    bi = e;
  }
}, $e = qce.exports = {}, Ut, qt;
function ph() {
  throw new Error("setTimeout has not been defined");
}
function hh() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Ut = setTimeout : Ut = ph;
  } catch {
    Ut = ph;
  }
  try {
    typeof clearTimeout == "function" ? qt = clearTimeout : qt = hh;
  } catch {
    qt = hh;
  }
})();
function D1(e) {
  if (Ut === setTimeout)
    return setTimeout(e, 0);
  if ((Ut === ph || !Ut) && setTimeout)
    return Ut = setTimeout, setTimeout(e, 0);
  try {
    return Ut(e, 0);
  } catch {
    try {
      return Ut.call(null, e, 0);
    } catch {
      return Ut.call(this, e, 0);
    }
  }
}
function Hce(e) {
  if (qt === clearTimeout)
    return clearTimeout(e);
  if ((qt === hh || !qt) && clearTimeout)
    return qt = clearTimeout, clearTimeout(e);
  try {
    return qt(e);
  } catch {
    try {
      return qt.call(null, e);
    } catch {
      return qt.call(this, e);
    }
  }
}
var or = [], ti = !1, fn, la = -1;
function Kce() {
  !ti || !fn || (ti = !1, fn.length ? or = fn.concat(or) : la = -1, or.length && L1());
}
function L1() {
  if (!ti) {
    var e = D1(Kce);
    ti = !0;
    for (var t = or.length; t; ) {
      for (fn = or, or = []; ++la < t; )
        fn && fn[la].run();
      la = -1, t = or.length;
    }
    fn = null, ti = !1, Hce(e);
  }
}
$e.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  or.push(new B1(e, t)), or.length === 1 && !ti && D1(L1);
};
function B1(e, t) {
  this.fun = e, this.array = t;
}
B1.prototype.run = function() {
  this.fun.apply(null, this.array);
};
$e.title = "browser";
$e.browser = !0;
$e.env = {};
$e.argv = [];
$e.version = "";
$e.versions = {};
function wr() {
}
$e.on = wr;
$e.addListener = wr;
$e.once = wr;
$e.off = wr;
$e.removeListener = wr;
$e.removeAllListeners = wr;
$e.emit = wr;
$e.prependListener = wr;
$e.prependOnceListener = wr;
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
const Om = () => pi(Fc(/^win/), ["platform"], bi), Sm = (e) => {
  try {
    const t = new URL(e);
    return bH(":", t.protocol);
  } catch {
    return;
  }
};
xe(Sm, Na);
const Gce = (e) => {
  const t = e.lastIndexOf(".");
  return t >= 0 ? e.substr(t).toLowerCase() : "";
}, as = (e) => {
  if (bi.browser)
    return !1;
  const t = Sm(e);
  return gr(t) || t === "file" || /^[a-zA-Z]$/.test(t);
}, cs = (e) => {
  const t = Sm(e);
  return t === "http" || t === "https";
}, U1 = (e, t) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], n = Wn(!1, "keepFileProtocol", t), i = Wn(Om, "isWindows", t);
  let s = decodeURI(e);
  for (let a = 0; a < r.length; a += 2)
    s = s.replace(r[a], r[a + 1]);
  let o = s.substr(0, 7).toLowerCase() === "file://";
  return o && (s = s[7] === "/" ? s.substr(8) : s.substr(7), i() && s[1] === "/" && (s = `${s[0]}:${s.substr(1)}`), n ? s = `file:///${s}` : (o = !1, s = i() ? s : `/${s}`)), i() && !o && (s = vH("/", "\\", s), s.substr(1, 2) === ":\\" && (s = s[0].toUpperCase() + s.substr(1))), s;
}, Jce = (e) => {
  const t = [/\?/g, "%3F", /#/g, "%23"];
  let r = e;
  Om() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let n = 0; n < t.length; n += 2)
    r = r.replace(t[n], t[n + 1]);
  return r;
}, q1 = (e) => {
  const t = e.indexOf("#");
  return t !== -1 ? e.substr(t) : "#";
}, Ct = (e) => {
  const t = e.indexOf("#");
  let r = e;
  return t >= 0 && (r = e.substr(0, t)), r;
}, H1 = () => {
  if (bi.browser)
    return Ct(globalThis.location.href);
  const e = bi.cwd(), t = Qs(e);
  return ["/", "\\"].includes(t) ? e : e + (Om() ? "\\" : "/");
}, mt = (e, t) => {
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
}, jo = (e) => as(e) ? Jce(U1(e)) : encodeURI(decodeURI(e)).replace(/%5B/g, "[").replace(/%5D/g, "]"), ot = (e) => as(e) ? U1(e) : decodeURI(e), Wce = O({
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
      return _n(this.uri) ? Gce(this.uri) : "";
    },
    toString() {
      return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(St(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
    }
  }
}), wn = Wce, zce = {
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
}, Yce = zce, Xce = h6(lt(["resolve", "baseURI"]), Rq(["resolve", "baseURI"])), Qce = (e) => ES(e) ? H1() : e, Zce = (e, t) => {
  const r = x6(e, t);
  return A6(Xce, Qce, r);
};
class ele extends Error {
  constructor(t, r) {
    if (super(t), this.name = this.constructor.name, this.message = t, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(t).stack, ws(r) && ss("cause", r) && !ss("cause", this)) {
      const {
        cause: n
      } = r;
      this.cause = n, ss("stack", n) && (this.stack = `${this.stack}
CAUSE: ${n == null ? void 0 : n.stack}`);
    }
  }
}
const qi = ele;
class tle extends qi {
  constructor(t = "Not Implemented", r) {
    super(t, r);
  }
}
const xn = tle;
class rle extends qi {
}
const uu = rle;
class nle extends uu {
}
const K1 = nle;
class ile extends qi {
}
const wt = ile;
class sle extends qi {
  constructor(t, r) {
    super(t, {
      cause: r.cause
    }), M(this, "plugin", void 0), this.plugin = r.plugin;
  }
}
const ole = sle;
class ale extends qi {
}
const cle = ale;
class lle extends uu {
}
const G1 = lle;
class ule extends qi {
}
const J1 = ule;
class fle extends wt {
}
const ple = fle;
class hle extends J1 {
}
const lr = hle, wm = async (e, t, r) => {
  const n = await Promise.all(r.map(mi([e], [t])));
  return r.filter((i, s) => n[s]);
}, xm = async (e, t, r) => {
  let n;
  for (const i of r)
    try {
      const s = await i[e].call(i, ...t);
      return {
        plugin: i,
        result: s
      };
    } catch (s) {
      n = new ole("Error while running plugin", {
        cause: s,
        plugin: i
      });
    }
  return Promise.reject(n);
}, dle = async (e, t) => {
  const r = t.resolve.resolvers.map((i) => {
    const s = Object.create(i);
    return Object.assign(s, t.resolve.resolverOpts);
  }), n = await wm("canRead", e, r);
  if (Zs(n))
    throw new K1(e.uri);
  try {
    const {
      result: i
    } = await xm("read", [e], n);
    return i;
  } catch (i) {
    throw new uu(`Error while reading file "${e.uri}"`, {
      cause: i
    });
  }
};
function pb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pb(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const mle = async (e, t) => {
  const r = t.parse.parsers.map((i) => {
    const s = Object.create(i);
    return Object.assign(s, t.parse.parserOpts);
  }), n = await wm("canParse", e, r);
  if (Zs(n))
    throw new K1(e.uri);
  try {
    const {
      plugin: i,
      result: s
    } = await xm("parse", [e], n);
    return !i.allowEmpty && s.isEmpty ? Promise.reject(new wt(`Error while parsing file "${e.uri}". File is empty.`)) : s;
  } catch (i) {
    throw new wt(`Error while parsing file "${e.uri}"`, {
      cause: i
    });
  }
}, yle = async (e, t) => {
  const r = wn({
    uri: jo(Ct(e)),
    mediaType: t.parse.mediaType
  }), n = await dle(r, t);
  return mle(wn(hb(hb({}, r), {}, {
    data: n
  })), t);
}, W1 = yle, vle = async (e, t) => {
  let r = e, n = !1;
  if (!a1(e)) {
    const o = new e.constructor(e.content, e.meta.clone(), e.attributes);
    o.classes.push("result"), r = new kt([o]), n = !0;
  }
  const i = wn({
    uri: t.resolve.baseURI,
    parseResult: r,
    mediaType: t.parse.mediaType
  }), s = await wm("canDereference", i, t.dereference.strategies);
  if (Zs(s))
    throw new ple(i.uri);
  try {
    const {
      result: o
    } = await xm("dereference", [i, t], s);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new J1(`Error while dereferencing file "${i.uri}"`, {
      cause: o
    });
  }
}, gle = O({
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
      throw new xn();
    },
    async parse() {
      throw new xn();
    }
  }
}), To = gle, ble = O({
  props: {
    name: null
  },
  methods: {
    canRead() {
      return !1;
    },
    async read() {
      throw new xn();
    }
  }
}), $le = ble, Ole = O($le, {
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
      return cs(e.uri);
    },
    async read() {
      throw new xn();
    },
    getHttpClient() {
      throw new xn();
    }
  }
}), Sle = Ole, wle = O({
  props: {
    name: null
  },
  methods: {
    canResolve() {
      return !1;
    },
    async resolve() {
      throw new xn();
    }
  }
}), xle = wle, Ele = O({
  props: {
    name: null
  },
  methods: {
    canDereference() {
      return !1;
    },
    async dereference() {
      throw new xn();
    }
  }
}), Ple = Ele, Ale = O({
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
}), Hi = Ale, jle = O({
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
      const t = _n(e) ? e : e.uri;
      return Na(this.find(Rc("uri", t)));
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
}), fu = jle, Tle = async (e, t = {}) => {
  const r = Zce(Yce, t);
  return vle(e, r);
}, _le = O(To, {
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
          const i = new Ur(r);
          i.classes.push("result"), n.push(i);
        }
        return n;
      } catch (t) {
        throw new wt(`Error parsing "${e.uri}"`, {
          cause: t
        });
      }
    }
  }
}), Ile = _le;
class As extends Error {
  constructor(t) {
    super(t), this.name = this.constructor.name, this.message = t, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(t).stack;
  }
}
class Rle extends Error {
  constructor(t) {
    super(t), this.name = this.constructor.name, this.message = t, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(t).stack;
  }
}
class Fle extends cle {
  constructor(t) {
    super(`Invalid JSON Schema $anchor "${t}".`);
  }
}
const _o = (e) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(e), Hr = (e) => {
  const t = q1(e);
  return Xd("#", t);
}, Vle = (e) => {
  if (!_o(e))
    throw new Fle(e);
  return e;
}, pu = (e, t) => {
  const r = Vle(e), n = sm((i) => {
    var s;
    return Ui(i) && ((s = i.$anchor) === null || s === void 0 ? void 0 : s.toValue()) === r;
  }, t);
  if (gr(n))
    throw new Rle(`Evaluation failed on token: "${r}"`);
  return n;
}, Ja = (e, t) => {
  if (typeof t.$ref > "u")
    return;
  const r = q1(t.$ref.toValue()), n = t.meta.get("inherited$id").toValue();
  return `${jn((s, o) => mt(s, jo(Ct(o))), e, [...n, t.$ref.toValue()])}${r === "#" ? "" : r}`;
}, Cle = (e, t) => {
  if (typeof t.$id > "u")
    return;
  const r = t.meta.get("inherited$id").toValue();
  return jn((n, i) => mt(n, jo(Ct(i))), e, [...r, t.$id.toValue()]);
}, ls = (e) => {
  if (ls.cache.has(e))
    return ls.cache.get(e);
  const t = dr.refract(e);
  return ls.cache.set(e, t), t;
};
ls.cache = /* @__PURE__ */ new WeakMap();
const vt = (e) => cr(e) ? ls(e) : e, Em = (e, t) => {
  const r = Ct(e), n = sm(
    // @ts-ignore
    (o) => !Ui(o) || typeof o.$id > "u" ? !1 : Cle(r, o) === r,
    t
  );
  if (gr(n))
    throw new As(`Evaluation failed on URI: "${e}"`);
  let i, s;
  return _o(Hr(e)) ? (i = pu, s = Hr(e)) : (i = Je, s = Be(e)), i(s, n);
};
function db(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? db(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : db(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Pf = He[Symbol.for("nodejs.util.promisify.custom")], ua = O({
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
      return mt(this.reference.uri, jo(Ct(e)));
    },
    async toReference(e) {
      if (this.reference.depth >= this.options.resolve.maxDepth)
        throw new G1(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
      const t = this.toBaseURI(e), {
        refSet: r
      } = this.reference;
      if (r.has(t))
        return r.find(Rc("uri", t));
      const n = await W1(ot(t), Yo(Yo({}, this.options), {}, {
        parse: Yo(Yo({}, this.options.parse), {}, {
          mediaType: "text/plain"
        })
      })), i = Hi({
        uri: t,
        value: n,
        depth: this.reference.depth + 1
      });
      return r.add(i), i;
    },
    ReferenceElement(e) {
      var t;
      if (!this.options.resolve.external && lu(e))
        return !1;
      const r = (t = e.$ref) === null || t === void 0 ? void 0 : t.toValue(), n = this.toBaseURI(r);
      un(n, this.crawlingMap) || (this.crawlingMap[n] = this.toReference(r)), this.crawledElements.push(e);
    },
    PathItemElement(e) {
      var t;
      if (!K(e.$ref) || !this.options.resolve.external && cu(e))
        return;
      const r = (t = e.$ref) === null || t === void 0 ? void 0 : t.toValue(), n = this.toBaseURI(r);
      un(n, this.crawlingMap) || (this.crawlingMap[n] = this.toReference(r)), this.crawledElements.push(e);
    },
    LinkElement(e) {
      if (!(!K(e.operationRef) && !K(e.operationId)) && !(!this.options.resolve.external && Ga(e))) {
        if (K(e.operationRef) && K(e.operationId))
          throw new Error("LinkElement operationRef and operationId are mutually exclusive.");
        if (Ga(e)) {
          var t;
          const r = (t = e.operationRef) === null || t === void 0 ? void 0 : t.toValue(), n = this.toBaseURI(r);
          un(n, this.crawlingMap) || (this.crawlingMap[n] = this.toReference(r));
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
      un(n, this.crawlingMap) || (this.crawlingMap[n] = this.toReference(r));
    },
    SchemaElement(e) {
      if (this.visited.has(e))
        return !1;
      if (!K(e.$ref)) {
        this.visited.add(e);
        return;
      }
      const t = this.reference.uri, r = Ja(t, e), n = Ct(r), i = wn({
        uri: n
      }), s = Gp((c) => c.canRead(i), this.options.resolve.resolvers), o = !s, a = !s && this.reference.uri !== n;
      if (!this.options.resolve.external && a) {
        this.visited.add(e);
        return;
      }
      if (!un(n, this.crawlingMap))
        try {
          s || o ? this.crawlingMap[n] = this.reference : this.crawlingMap[n] = this.toReference(ot(r));
        } catch (c) {
          if (o && c instanceof As)
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
      if (cr(i)) {
        const o = e.meta.get("referenced-element").toValue();
        ue(i) ? (i = qr.refract(i), i.setMetaProperty("referenced-element", o)) : i = this.namespace.getElementClass(o).refract(i);
      }
      if (this.indirections.includes(i))
        throw new Error("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new lr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      const s = ua({
        reference: r,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options
      });
      await Pf(i, s, {
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
      if (cr(i) && (i = zt.refract(i)), this.indirections.includes(i))
        throw new Error("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new lr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      const s = ua({
        reference: r,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options
      });
      await Pf(i, s, {
        keyMap: et,
        nodeTypeGetter: We
      }), await s.crawl(), this.indirections.pop();
    },
    async crawlSchemaElement(e) {
      const t = this.reference.uri, r = Ja(t, e), n = Ct(r), i = wn({
        uri: n
      }), s = Gp((u) => u.canRead(i), this.options.resolve.resolvers), o = !s;
      this.indirections.push(e);
      let a, c;
      try {
        if (s || o)
          a = this.reference, c = Em(
            r,
            // @ts-ignore
            vt(a.value.result)
          );
        else {
          a = await this.toReference(ot(r));
          const u = Be(r);
          c = vt(
            // @ts-ignore
            Je(u, a.value.result)
          );
        }
      } catch (u) {
        if (o && u instanceof As)
          if (_o(Hr(r))) {
            a = await this.toReference(ot(r));
            const f = Hr(r);
            c = pu(
              f,
              // @ts-ignore
              vt(a.value.result)
            );
          } else {
            a = await this.toReference(ot(r));
            const f = Be(r);
            c = vt(
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
        throw new lr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      const l = ua({
        reference: a,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        visited: this.visited
      });
      await Pf(c, l, {
        keyMap: et,
        nodeTypeGetter: We
      }), await l.crawl(), this.indirections.pop();
    },
    async crawl() {
      await xe(jq, z8)(this.crawlingMap), this.crawlingMap = null;
      for (const e of this.crawledElements)
        Bi(e) ? await this.crawlReferenceElement(e) : Ui(e) ? await this.crawlSchemaElement(e) : au(e) && await this.crawlPathItemElement(e);
    }
  }
}), Mle = ua, kle = He[Symbol.for("nodejs.util.promisify.custom")], Nle = O(xle, {
  init() {
    this.name = "openapi-3-1";
  },
  methods: {
    canResolve(e) {
      var t;
      return e.mediaType !== "text/plain" ? Sn.includes(e.mediaType) : bm((t = e.parseResult) === null || t === void 0 ? void 0 : t.result);
    },
    async resolve(e, t) {
      const r = Mi(iu), n = Hi({
        uri: e.uri,
        value: e.parseResult
      }), i = Mle({
        reference: n,
        namespace: r,
        options: t
      }), s = fu();
      return s.add(n), await kle(s.rootRef.value, i, {
        keyMap: et,
        nodeTypeGetter: We
      }), await i.crawl(), s;
    }
  }
}), Dle = Nle, z1 = (e) => {
  if (!te(e) || e.hasKey("$$normalized"))
    return e;
  const t = [Rie({
    operationIdNormalizer: (n, i, s) => Gs({
      operationId: n
    }, i, s, {
      v2OperationIdCompatibilityMode: !1
    })
  }), xie(), Pie(), jie(), Vie(), Mie()], r = ro(e, t, {
    toolboxCreator: N1,
    visitorOptions: {
      keyMap: et,
      nodeTypeGetter: We
    }
  });
  return r.set("$$normalized", !0), r;
}, Lle = (e) => (t) => {
  if (t != null && t.$$normalized)
    return t;
  const r = en.refract(t), n = e(r);
  return Ke(n);
}, Y1 = Sle.compose({
  props: {
    name: "http-swagger-client",
    swaggerHTTPClient: Hs,
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
        return (await t(ie({
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
        throw new uu(`Error downloading "${e.uri}"`, {
          cause: c
        });
      } finally {
        clearTimeout(i);
      }
    }
  }
}), X1 = To.compose({
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
        throw new wt("json-swagger-client parser plugin doesn't support sourceMaps option");
      const t = new kt(), r = e.toString();
      if (this.allowEmpty && r.trim() === "")
        return t;
      try {
        const n = m1(JSON.parse(r));
        return n.classes.push("result"), t.push(n), t;
      } catch (n) {
        throw new wt(`Error parsing "${e.uri}"`, {
          cause: n
        });
      }
    }
  }
}), Q1 = To.compose({
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
          return ci.load(e.toString(), {
            schema: Ta
          }), !0;
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(e) {
      if (this.sourceMap)
        throw new wt("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
      const t = new kt(), r = e.toString();
      try {
        const n = ci.load(r, {
          schema: Ta
        });
        if (this.allowEmpty && typeof n > "u")
          return t;
        const i = m1(n);
        return i.classes.push("result"), t.push(i), t;
      } catch (n) {
        throw new wt(`Error parsing "${e.uri}"`, {
          cause: n
        });
      }
    }
  }
}), Z1 = To.compose({
  props: {
    name: "openapi-json-3-1-swagger-client",
    fileExtensions: [".json"],
    mediaTypes: new om(...Sn.filterByFormat("generic"), ...Sn.filterByFormat("json")),
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
        throw new wt("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
      const t = new kt(), r = e.toString();
      if (this.allowEmpty && r.trim() === "")
        return t;
      try {
        const n = JSON.parse(r), i = en.refract(n, this.refractorOpts);
        return i.classes.push("result"), t.push(i), t;
      } catch (n) {
        throw new wt(`Error parsing "${e.uri}"`, {
          cause: n
        });
      }
    }
  }
}), ew = To.compose({
  props: {
    name: "openapi-yaml-3-1-swagger-client",
    fileExtensions: [".yaml", ".yml"],
    mediaTypes: new om(...Sn.filterByFormat("generic"), ...Sn.filterByFormat("yaml")),
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
          return ci.load(n), this.detectionRegExp.test(n);
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(e) {
      if (this.sourceMap)
        throw new wt("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
      const t = new kt(), r = e.toString();
      try {
        const n = ci.load(r, {
          schema: Ta
        });
        if (this.allowEmpty && typeof n > "u")
          return t;
        const i = en.refract(n, this.refractorOpts);
        return i.classes.push("result"), t.push(i), t;
      } catch (n) {
        throw new wt(`Error parsing "${e.uri}"`, {
          cause: n
        });
      }
    }
  }
});
function mb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mb(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Af = He[Symbol.for("nodejs.util.promisify.custom")], fa = O({
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
      return mt(this.reference.uri, jo(Ct(e)));
    },
    toAncestorLineage(e) {
      const t = new WeakSet(e.flat());
      return [[...this.ancestors, t], t];
    },
    async toReference(e) {
      if (this.reference.depth >= this.options.resolve.maxDepth)
        throw new G1(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
      const t = this.toBaseURI(e), {
        refSet: r
      } = this.reference;
      if (r.has(t))
        return r.find(Rc("uri", t));
      const n = await W1(ot(t), Xo(Xo({}, this.options), {}, {
        parse: Xo(Xo({}, this.options.parse), {}, {
          mediaType: "text/plain"
        })
      })), i = Hi({
        uri: t,
        value: n,
        depth: this.reference.depth + 1
      });
      return r.add(i), i;
    },
    async ReferenceElement(e, t, r, n, i) {
      var s, o, a, c, l;
      const [u, f] = this.toAncestorLineage(i);
      if (u.some((w) => w.has(e)) || !this.options.resolve.external && lu(e))
        return !1;
      const p = await this.toReference((s = e.$ref) === null || s === void 0 ? void 0 : s.toValue()), h = p.uri, d = mt(h, (o = e.$ref) === null || o === void 0 ? void 0 : o.toValue());
      this.indirections.push(e);
      const m = Be(d);
      let y = Je(m, p.value.result);
      if (cr(y)) {
        const w = e.meta.get("referenced-element").toValue();
        ue(y) ? (y = qr.refract(y), y.setMetaProperty("referenced-element", w)) : y = this.namespace.getElementClass(w).refract(y);
      }
      if (this.indirections.includes(y))
        throw new Error("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new lr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      f.add(e);
      const g = fa({
        reference: p,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        ancestors: u
      });
      y = await Af(y, g, {
        keyMap: et,
        nodeTypeGetter: We
      }), f.delete(e), this.indirections.pop(), y = y.clone(), y.setMetaProperty("ref-fields", {
        $ref: (a = e.$ref) === null || a === void 0 ? void 0 : a.toValue(),
        // @ts-ignore
        description: (c = e.description) === null || c === void 0 ? void 0 : c.toValue(),
        // @ts-ignore
        summary: (l = e.summary) === null || l === void 0 ? void 0 : l.toValue()
      }), y.setMetaProperty("ref-origin", p.uri);
      const S = pi(Na, ["description"], e), $ = pi(Na, ["summary"], e);
      return S && ss("description", y) && (y.description = e.description), $ && ss("summary", y) && (y.summary = e.summary), this.indirections.pop(), y;
    },
    async PathItemElement(e, t, r, n, i) {
      var s, o, a;
      const [c, l] = this.toAncestorLineage(i);
      if (!K(e.$ref))
        return;
      if (c.some((g) => g.has(e)))
        return !1;
      if (!this.options.resolve.external && cu(e))
        return;
      const u = await this.toReference((s = e.$ref) === null || s === void 0 ? void 0 : s.toValue()), f = u.uri, p = mt(f, (o = e.$ref) === null || o === void 0 ? void 0 : o.toValue());
      this.indirections.push(e);
      const h = Be(p);
      let d = Je(h, u.value.result);
      if (cr(d) && (d = zt.refract(d)), this.indirections.includes(d))
        throw new Error("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new lr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      l.add(e);
      const m = fa({
        reference: u,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        ancestors: c
      });
      d = await Af(d, m, {
        keyMap: et,
        nodeTypeGetter: We
      }), l.delete(e), this.indirections.pop();
      const y = new zt(
        // @ts-ignore
        [...d.content],
        d.meta.clone(),
        d.attributes.clone()
      );
      return e.forEach((g, S, $) => {
        y.remove(S.toValue()), y.content.push($);
      }), y.remove("$ref"), y.setMetaProperty("ref-fields", {
        $ref: (a = e.$ref) === null || a === void 0 ? void 0 : a.toValue()
      }), y.setMetaProperty("ref-origin", u.uri), y;
    },
    async LinkElement(e) {
      if (!K(e.operationRef) && !K(e.operationId) || !this.options.resolve.external && Ga(e))
        return;
      if (K(e.operationRef) && K(e.operationId))
        throw new Error("LinkElement operationRef and operationId fields are mutually exclusive.");
      let t;
      if (K(e.operationRef)) {
        var r, n, i;
        const a = Be((r = e.operationRef) === null || r === void 0 ? void 0 : r.toValue()), c = await this.toReference((n = e.operationRef) === null || n === void 0 ? void 0 : n.toValue());
        t = Je(a, c.value.result), cr(t) && (t = gi.refract(t)), t = new gi(
          // @ts-ignore
          [...t.content],
          t.meta.clone(),
          t.attributes.clone()
        ), t.setMetaProperty("ref-origin", c.uri), (i = e.operationRef) === null || i === void 0 || i.meta.set("operation", t);
      } else if (K(e.operationId)) {
        var s, o;
        const a = (s = e.operationId) === null || s === void 0 ? void 0 : s.toValue();
        if (t = sm((c) => k1(c) && c.operationId.equals(a), this.reference.value.result), gr(t))
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
      const u = Ja(l, e), f = Ct(u), p = wn({
        uri: f
      }), h = Gp((w) => w.canRead(p), this.options.resolve.resolvers), d = !h, m = d && l !== f;
      if (!this.options.resolve.external && m)
        return;
      this.indirections.push(e);
      let y;
      try {
        if (h || d)
          y = Em(
            u,
            // @ts-ignore
            vt(c.value.result)
          );
        else {
          c = await this.toReference(ot(u));
          const w = Be(u);
          y = vt(
            // @ts-ignore
            Je(w, c.value.result)
          );
        }
      } catch (w) {
        if (d && w instanceof As)
          if (_o(Hr(u))) {
            c = await this.toReference(ot(u)), l = c.uri;
            const x = Hr(u);
            y = pu(
              x,
              // @ts-ignore
              vt(c.value.result)
            );
          } else {
            c = await this.toReference(ot(u)), l = c.uri;
            const x = Be(u);
            y = vt(
              // @ts-ignore
              Je(x, c.value.result)
            );
          }
        else
          throw w;
      }
      if (this.indirections.includes(y))
        throw new Error("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new lr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      a.add(e);
      const g = fa({
        reference: c,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        ancestors: o
      });
      if (y = await Af(y, g, {
        keyMap: et,
        nodeTypeGetter: We
      }), a.delete(e), this.indirections.pop(), $m(y)) {
        var S;
        const w = y.clone();
        return w.setMetaProperty("ref-fields", {
          $ref: (S = e.$ref) === null || S === void 0 ? void 0 : S.toValue()
        }), w.setMetaProperty("ref-origin", c.uri), w;
      }
      const $ = new dr(
        // @ts-ignore
        [...y.content],
        y.meta.clone(),
        y.attributes.clone()
      );
      return e.forEach((w, x, j) => {
        $.remove(x.toValue()), $.content.push(j);
      }), $.remove("$ref"), $.setMetaProperty("ref-fields", {
        $ref: (s = e.$ref) === null || s === void 0 ? void 0 : s.toValue()
      }), $.setMetaProperty("ref-origin", c.uri), $;
    }
  }
}), dh = fa, Ble = He[Symbol.for("nodejs.util.promisify.custom")], Ule = O(Ple, {
  init() {
    this.name = "openapi-3-1";
  },
  methods: {
    canDereference(e) {
      var t;
      return e.mediaType !== "text/plain" ? Sn.includes(e.mediaType) : bm((t = e.parseResult) === null || t === void 0 ? void 0 : t.result);
    },
    async dereference(e, t) {
      const r = Mi(iu), n = On(fu(), t.dereference.refSet);
      let i;
      n.has(e.uri) ? i = n.find(Rc("uri", e.uri)) : (i = Hi({
        uri: e.uri,
        value: e.parseResult
      }), n.add(i));
      const s = dh({
        reference: i,
        namespace: r,
        options: t
      }), o = await Ble(n.rootRef.value, s, {
        keyMap: et,
        nodeTypeGetter: We
      });
      return t.dereference.refSet === null && n.clean(), o;
    }
  }
}), tw = Ule, qle = (e) => e.slice(2), It = (e) => {
  const t = qle(e);
  return t.reduce((r, n, i) => {
    if (ki(n)) {
      const s = String(n.key.toValue());
      r.push(s);
    } else if ($t(t[i - 2])) {
      const s = t[i - 2].content.indexOf(n);
      r.push(s);
    }
    return r;
  }, []);
}, Qo = (e) => {
  if (e.cause == null)
    return e;
  let {
    cause: t
  } = e;
  for (; t.cause != null; )
    t = t.cause;
  return t;
}, Hle = Td("SchemaRefError", function(t, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), {
  wrapError: jf
} = _d, Tf = He[Symbol.for("nodejs.util.promisify.custom")], pa = dh.compose({
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
        if (os(["cycle"], e.$ref) || f.some((x) => x.has(e)) || !this.options.resolve.external && lu(e))
          return !1;
        const h = await this.toReference(e.$ref.toValue()), d = h.uri, m = mt(d, e.$ref.toValue());
        this.indirections.push(e);
        const y = Be(m);
        let g = Je(y, h.value.result);
        if (cr(g)) {
          const x = e.meta.get("referenced-element").toValue();
          ue(g) ? (g = qr.refract(g), g.setMetaProperty("referenced-element", x)) : g = this.namespace.getElementClass(x).refract(g);
        }
        if (this.indirections.includes(g))
          throw new Error("Recursive JSON Pointer detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new lr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        p.add(e);
        const S = pa({
          reference: h,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: f,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: this.basePath ?? [...It([...i, r, e]), "$ref"]
        });
        if (g = await Tf(g, S, {
          keyMap: et,
          nodeTypeGetter: We
        }), p.delete(e), this.indirections.pop(), !this.useCircularStructures && f.some((j) => j.has(g))) {
          if (cs(d) || as(d)) {
            const j = new qr({
              $ref: m
            }, e.meta.clone(), e.attributes.clone());
            return j.get("$ref").classes.push("cycle"), j;
          }
          return !1;
        }
        g = g.clone(), g.setMetaProperty("ref-fields", {
          $ref: (s = e.$ref) == null ? void 0 : s.toValue(),
          description: (o = e.description) == null ? void 0 : o.toValue(),
          summary: (a = e.summary) == null ? void 0 : a.toValue()
        }), g.setMetaProperty("ref-origin", h.uri);
        const $ = typeof e.description < "u", w = typeof e.summary < "u";
        if ($ && "description" in g && (g.description = e.description), w && "summary" in g && (g.summary = e.summary), this.allowMetaPatches && te(g)) {
          const x = g;
          if (typeof x.get("$$ref") > "u") {
            const j = mt(d, m);
            x.set("$$ref", j);
          }
        }
        return g;
      } catch (f) {
        const p = Qo(f), h = jf(p, {
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
        if (os(["cycle"], e.$ref) || l.some((S) => S.has(e)))
          return !1;
        if (!this.options.resolve.external && cu(e))
          return;
        const f = await this.toReference(e.$ref.toValue()), p = f.uri, h = mt(p, e.$ref.toValue());
        this.indirections.push(e);
        const d = Be(h);
        let m = Je(d, f.value.result);
        if (cr(m) && (m = zt.refract(m)), this.indirections.includes(m))
          throw new Error("Recursive JSON Pointer detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new lr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        u.add(e);
        const y = pa({
          reference: f,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: l,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: this.basePath ?? [...It([...i, r, e]), "$ref"]
        });
        if (m = await Tf(m, y, {
          keyMap: et,
          nodeTypeGetter: We
        }), u.delete(e), this.indirections.pop(), !this.useCircularStructures && l.some(($) => $.has(m))) {
          if (cs(p) || as(p)) {
            const $ = new zt({
              $ref: h
            }, e.meta.clone(), e.attributes.clone());
            return $.get("$ref").classes.push("cycle"), $;
          }
          return !1;
        }
        const g = new zt([...m.content], m.meta.clone(), m.attributes.clone());
        if (e.forEach((S, $, w) => {
          g.remove($.toValue()), g.content.push(w);
        }), g.remove("$ref"), g.setMetaProperty("ref-fields", {
          $ref: (s = e.$ref) == null ? void 0 : s.toValue()
        }), g.setMetaProperty("ref-origin", f.uri), this.allowMetaPatches && typeof g.get("$$ref") > "u") {
          const S = mt(p, h);
          g.set("$$ref", S);
        }
        return g;
      } catch (l) {
        const u = Qo(l), f = jf(u, {
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
        if (os(["cycle"], e.$ref) || u.some((P) => P.has(e)))
          return !1;
        let {
          reference: p
        } = this, {
          uri: h
        } = p;
        const d = Ja(h, e), m = Ct(d), y = wn({
          uri: m
        }), g = !this.options.resolve.resolvers.some((P) => P.canRead(y)), S = !g, $ = S && h !== m;
        if (!this.options.resolve.external && $)
          return;
        this.indirections.push(e);
        let w;
        try {
          if (g || S)
            w = Em(d, vt(p.value.result));
          else {
            p = await this.toReference(ot(d)), h = p.uri;
            const P = Be(d);
            w = vt(Je(P, p.value.result));
          }
        } catch (P) {
          if (S && P instanceof As)
            if (_o(Hr(d))) {
              p = await this.toReference(ot(d)), h = p.uri;
              const C = Hr(d);
              w = pu(C, vt(p.value.result));
            } else {
              p = await this.toReference(ot(d)), h = p.uri;
              const C = Be(d);
              w = vt(Je(C, p.value.result));
            }
          else
            throw P;
        }
        if (this.indirections.includes(w))
          throw new Error("Recursive Schema Object reference detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new lr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        f.add(e);
        const x = pa({
          reference: p,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: u,
          basePath: this.basePath ?? [...It([...i, r, e]), "$ref"]
        });
        if (w = await Tf(w, x, {
          keyMap: et,
          nodeTypeGetter: We
        }), f.delete(e), this.indirections.pop(), $m(w)) {
          const P = w.clone();
          return P.setMetaProperty("ref-fields", {
            $ref: (s = e.$ref) == null ? void 0 : s.toValue()
          }), P.setMetaProperty("ref-origin", h), P;
        }
        if (!this.useCircularStructures && u.some((C) => C.has(w))) {
          if (cs(h) || as(h)) {
            const C = mt(h, d), v = new dr({
              $ref: C
            }, e.meta.clone(), e.attributes.clone());
            return v.get("$ref").classes.push("cycle"), v;
          }
          return !1;
        }
        const j = new dr([...w.content], w.meta.clone(), w.attributes.clone());
        if (e.forEach((P, C, v) => {
          j.remove(C.toValue()), j.content.push(v);
        }), j.remove("$ref"), j.setMetaProperty("ref-fields", {
          $ref: (o = e.$ref) == null ? void 0 : o.toValue()
        }), j.setMetaProperty("ref-origin", h), this.allowMetaPatches && typeof j.get("$$ref") > "u") {
          const P = mt(h, d);
          j.set("$$ref", P);
        }
        return j;
      } catch (u) {
        const f = Qo(u), p = new Hle(`Could not resolve reference: ${f.message}`, {
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
        return await dh.compose.methods.ExampleElement.call(this, e, t, r, n, i);
      } catch (l) {
        const u = Qo(l), f = jf(u, {
          baseDoc: this.reference.uri,
          externalValue: (s = e.externalValue) == null ? void 0 : s.toValue(),
          fullPath: this.basePath ?? [...It([...i, r, e]), "externalValue"]
        });
        (c = (a = (o = this.options.dereference.dereferenceOpts) == null ? void 0 : o.errors) == null ? void 0 : a.push) == null || c.call(a, f);
        return;
      }
    }
  }
}), Pm = tw.compose.bind(), Kle = Pm({
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
}), Gle = Pm({
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
        typeof e.properties > "u" || te(e.properties) && e.properties.forEach((s) => {
          var o, a, c;
          if (te(s))
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
}), Jle = Pm({
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
        if (!$t(e.allOf)) {
          const h = new TypeError("allOf must be an array");
          h.fullPath = [...It([...i, r, e]), "allOf"], (l = (c = (a = this.options.dereference.dereferenceOpts) == null ? void 0 : a.errors) == null ? void 0 : c.push) == null || l.call(c, h);
          return;
        }
        if (e.allOf.isEmpty)
          return new dr(e.content.filter((h) => h.key.toValue() !== "allOf"), e.meta.clone(), e.attributes.clone());
        if (!e.allOf.content.every(Ui)) {
          const h = new TypeError("Elements in allOf must be objects");
          h.fullPath = [...It([...i, r, e]), "allOf"], (p = (f = (u = this.options.dereference.dereferenceOpts) == null ? void 0 : u.errors) == null ? void 0 : f.push) == null || p.call(f, h);
          return;
        }
        const o = yi.all([...e.allOf.content, e]);
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
}), Wle = He[Symbol.for("nodejs.util.promisify.custom")], rw = tw.compose({
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
      const r = [], n = Mi(iu), i = t.dereference.refSet ?? fu();
      let s;
      i.has(e.uri) ? s = i.find((l) => l.uri === e.uri) : (s = Hi({
        uri: e.uri,
        value: e.parseResult
      }), i.add(s));
      const o = pa({
        reference: s,
        namespace: n,
        options: t,
        useCircularStructures: this.useCircularStructures,
        allowMetaPatches: this.allowMetaPatches
      });
      if (r.push(o), typeof this.parameterMacro == "function") {
        const l = Kle({
          parameterMacro: this.parameterMacro,
          options: t
        });
        r.push(l);
      }
      if (typeof this.modelPropertyMacro == "function") {
        const l = Gle({
          modelPropertyMacro: this.modelPropertyMacro,
          options: t
        });
        r.push(l);
      }
      if (this.mode !== "strict") {
        const l = Jle({
          options: t
        });
        r.push(l);
      }
      const a = r1(r, {
        nodeTypeGetter: We
      }), c = await Wle(i.rootRef.value, a, {
        keyMap: et,
        nodeTypeGetter: We
      });
      return t.dereference.refSet === null && i.clean(), c;
    }
  }
}), zle = async (e) => {
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
    const h = "https://smartbear.com/", d = Pd(e) ?? H1(), m = cs(d) ? d : h, y = en.refract(t);
    y.classes.push("result");
    const g = new kt([y]), S = H7(o), $ = S === "" ? "" : `#${S}`, w = Je(S, y), x = Hi({
      uri: m,
      value: g
    }), j = fu({
      refs: [x]
    });
    S !== "" && (j.rootRef = null);
    const P = [], C = await Tle(w, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${m}${$}`,
        resolvers: [Y1({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: i,
            responseInterceptor: s
          }
        },
        strategies: [Dle()]
      },
      parse: {
        mediaType: Sn.latest(),
        parsers: [Z1({
          allowEmpty: !1,
          sourceMap: !1
        }), ew({
          allowEmpty: !1,
          sourceMap: !1
        }), X1({
          allowEmpty: !1,
          sourceMap: !1
        }), Q1({
          allowEmpty: !1,
          sourceMap: !1
        }), Ile({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [rw({
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
    }), v = M7(w, C, y), A = l ? v : z1(v);
    return {
      spec: Ke(A),
      errors: P
    };
  } catch (h) {
    if (h instanceof y1 || h instanceof ca)
      return {
        spec: null,
        errors: []
      };
    throw h;
  }
}, Yle = {
  name: "openapi-3-1-apidom",
  match(e) {
    let {
      spec: t
    } = e;
    return Z0(t);
  },
  normalize(e) {
    let {
      spec: t
    } = e;
    return Lle(z1)(t);
  },
  async resolve(e) {
    return zle(e);
  }
};
function nw(e, t, r) {
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
function Xle(e, t) {
  return nw(e, t, !0) || null;
}
function iw(e, t) {
  return `${t.toLowerCase()}-${e}`;
}
function Qle(e, t) {
  return !e || !e.paths ? null : Xle(e, (r) => {
    let {
      pathName: n,
      method: i,
      operation: s
    } = r;
    if (!s || typeof s != "object")
      return !1;
    const o = s.operationId, a = Gs(s, n, i), c = iw(n, i);
    return [a, c, o].some((l) => l && l === t);
  });
}
const Zle = () => null, eue = (e) => Array.isArray(e) ? e : [e], yb = {
  mapTagOperations: nue,
  makeExecute: tue
};
function tue() {
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
      return e.execute(ie({
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
function rue() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = yb.makeExecute(e);
  return {
    apis: yb.mapTagOperations({
      v2OperationIdCompatibilityMode: e.v2OperationIdCompatibilityMode,
      spec: e.spec,
      cb: t
    })
  };
}
function nue(e) {
  let {
    spec: t,
    cb: r = Zle,
    defaultTag: n = "default",
    v2OperationIdCompatibilityMode: i
  } = e;
  const s = {}, o = {};
  return nw(t, (a) => {
    let {
      pathName: c,
      method: l,
      operation: u
    } = a;
    (u.tags ? eue(u.tags) : [n]).forEach((p) => {
      if (typeof p != "string")
        return;
      o[p] = o[p] || {};
      const h = o[p], d = Gs(u, c, l, {
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
        const g = h[d];
        delete h[d], h[`${d}${y}`] = g;
      } else
        h[d] = m;
    });
  }), o;
}
var Am = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
Am.parse = sue;
Am.serialize = oue;
var iue = Object.prototype.toString, Zo = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function sue(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var r = {}, n = t || {}, i = n.decode || aue, s = 0; s < e.length; ) {
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
      l.charCodeAt(0) === 34 && (l = l.slice(1, -1)), r[c] = uue(l, i);
    }
    s = a + 1;
  }
  return r;
}
function oue(e, t, r) {
  var n = r || {}, i = n.encode || cue;
  if (typeof i != "function")
    throw new TypeError("option encode is invalid");
  if (!Zo.test(e))
    throw new TypeError("argument name is invalid");
  var s = i(t);
  if (s && !Zo.test(s))
    throw new TypeError("argument val is invalid");
  var o = e + "=" + s;
  if (n.maxAge != null) {
    var a = n.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(a);
  }
  if (n.domain) {
    if (!Zo.test(n.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!Zo.test(n.path))
      throw new TypeError("option path is invalid");
    o += "; Path=" + n.path;
  }
  if (n.expires) {
    var c = n.expires;
    if (!lue(c) || isNaN(c.valueOf()))
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
function aue(e) {
  return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
}
function cue(e) {
  return encodeURIComponent(e);
}
function lue(e) {
  return iue.call(e) === "[object Date]" || e instanceof Date;
}
function uue(e, t) {
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
function vb(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function sw(e) {
  var t, r;
  return vb(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(vb(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
const fue = {
  body: pue,
  header: due,
  query: yue,
  path: mue,
  formData: hue
};
function pue(e) {
  let {
    req: t,
    value: r
  } = e;
  t.body = r;
}
function hue(e) {
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
function due(e) {
  let {
    req: t,
    parameter: r,
    value: n
  } = e;
  t.headers = t.headers || {}, typeof n < "u" && (t.headers[r.name] = n);
}
function mue(e) {
  let {
    req: t,
    value: r,
    parameter: n
  } = e;
  t.url = t.url.split(`{${n.name}}`).join(encodeURIComponent(r));
}
function yue(e) {
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
function hu(e, t) {
  return t.includes("application/json") ? typeof e == "string" ? e : JSON.stringify(e) : e.toString();
}
function vue(e) {
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
    t.url = t.url.split(`{${i}}`).join(li(hu(r, l), {
      escape: !0
    }));
    return;
  }
  const c = xd({
    key: n.name,
    value: r,
    style: s || "simple",
    explode: o || !1,
    escape: !0
  });
  t.url = t.url.split(`{${i}}`).join(c);
}
function gue(e) {
  let {
    req: t,
    value: r,
    parameter: n
  } = e;
  if (t.query = t.query || {}, n.content) {
    const i = Object.keys(n.content)[0], s = hu(r, i);
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
const bue = ["accept", "authorization", "content-type"];
function $ue(e) {
  let {
    req: t,
    parameter: r,
    value: n
  } = e;
  if (t.headers = t.headers || {}, !(bue.indexOf(r.name.toLowerCase()) > -1)) {
    if (r.content) {
      const i = Object.keys(r.content)[0];
      t.headers[r.name] = hu(n, i);
      return;
    }
    typeof n < "u" && (t.headers[r.name] = xd({
      key: r.name,
      value: n,
      style: r.style || "simple",
      explode: typeof r.explode > "u" ? !1 : r.explode,
      escape: !1
    }));
  }
}
function Oue(e) {
  let {
    req: t,
    parameter: r,
    value: n
  } = e;
  t.headers = t.headers || {};
  const i = typeof n;
  if (r.content) {
    const s = Object.keys(r.content)[0];
    t.headers.Cookie = `${r.name}=${hu(n, s)}`;
    return;
  }
  if (i !== "undefined") {
    const s = i === "object" && !Array.isArray(n) && r.explode ? "" : `${r.name}=`;
    t.headers.Cookie = s + xd({
      key: r.name,
      value: n,
      escape: !1,
      style: r.style || "form",
      explode: typeof r.explode > "u" ? !1 : r.explode
    });
  }
}
const Sue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: Oue,
  header: $ue,
  path: vue,
  query: gue
}, Symbol.toStringTag, { value: "Module" })), wue = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window)(), {
  btoa: ow
} = wue;
function xue(e, t) {
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
  t = Eue({
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
      return m >= 200 && m < 300 && sw(d.content);
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
function Eue(e) {
  let {
    request: t,
    securities: r = {},
    operation: n = {},
    spec: i
  } = e;
  const s = ie({}, t), {
    authorized: o = {}
  } = r, a = n.security || i.security || [], c = o && !!Object.keys(o).length, l = ns(i, ["components", "securitySchemes"]) || {};
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
            const y = d.username || "", g = d.password || "", S = ow(`${y}:${g}`);
            s.headers.Authorization = `Basic ${S}`;
          }
          /^bearer$/i.test(h.scheme) && (s.headers.Authorization = `Bearer ${d}`);
        } else if (m === "oauth2" || m === "openIdConnect") {
          const y = p.token || {}, g = h["x-tokenName"] || "access_token", S = y[g];
          let $ = y.token_type;
          (!$ || $.toLowerCase() === "bearer") && ($ = "Bearer"), s.headers.Authorization = `${$} ${S}`;
        }
      }
    });
  }), s);
}
function Pue(e, t) {
  const {
    spec: r,
    operation: n,
    securities: i,
    requestContentType: s,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = e;
  if (t = Aue({
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
function Aue(e) {
  let {
    request: t,
    securities: r = {},
    operation: n = {},
    spec: i
  } = e;
  const s = ie({}, t), {
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
        type: g
      } = y, S = y["x-tokenName"] || "access_token", $ = d && d[S];
      let w = d && d.token_type;
      if (h)
        if (g === "apiKey") {
          const x = y.in === "query" ? "query" : "headers";
          s[x] = s[x] || {}, s[x][y.name] = m;
        } else if (g === "basic")
          if (m.header)
            s.headers.authorization = m.header;
          else {
            const x = m.username || "", j = m.password || "";
            m.base64 = ow(`${x}:${j}`), s.headers.authorization = `Basic ${m.base64}`;
          }
        else
          g === "oauth2" && $ && (w = !w || w.toLowerCase() === "bearer" ? "Bearer" : w, s.headers.authorization = `${w} ${$}`);
    });
  }), s);
}
const jue = ["http", "fetch", "spec", "operationId", "pathName", "method", "parameters", "securities"], gb = (e) => Array.isArray(e) ? e : [], Tue = Td("OperationNotFoundError", function(t, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), _ue = (e, t) => t.filter((r) => r.name === e), Iue = (e) => {
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
}, Rue = {
  buildRequest: aw
};
function Fue(e) {
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
  } = e, l = to(e, jue);
  const u = t || r || Hs;
  s && o && !i && (i = iw(s, o));
  const f = Rue.buildRequest(ie({
    spec: n,
    operationId: i,
    parameters: a,
    securities: c,
    http: u
  }, l));
  return f.body && (sw(f.body) || Array.isArray(f.body)) && (f.body = JSON.stringify(f.body)), u(f);
}
function aw(e) {
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
  const m = eS(t);
  d || (m ? d = Sue : d = fue);
  let g = {
    url: "",
    credentials: f && f.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  p && (g.signal = p), s && (g.requestInterceptor = s), o && (g.responseInterceptor = o), c && (g.userFetch = c);
  const S = Qle(t, r);
  if (!S)
    throw new Tue(`Operation ${r} not found`);
  const {
    operation: $ = {},
    method: w,
    pathName: x
  } = S;
  if (g.url += cw({
    spec: t,
    scheme: i,
    contextUrl: a,
    server: l,
    serverVariables: u,
    pathName: x,
    method: w
  }), !r)
    return delete g.cookies, g;
  g.url += x, g.method = `${w}`.toUpperCase(), h = h || {};
  const j = t.paths[x] || {};
  n && (g.headers.accept = n);
  const P = Iue([].concat(gb($.parameters)).concat(gb(j.parameters)));
  P.forEach((v) => {
    const A = d[v.in];
    let T;
    if (v.in === "body" && v.schema && v.schema.properties && (T = h), T = v && v.name && h[v.name], typeof T > "u" ? T = v && v.name && h[`${v.in}.${v.name}`] : _ue(v.name, P).length > 1 && console.warn(`Parameter '${v.name}' is ambiguous because the defined spec has more than one parameter with the name: '${v.name}' and the passed-in parameter values did not define an 'in' value.`), T !== null) {
      if (typeof v.default < "u" && typeof T > "u" && (T = v.default), typeof T > "u" && v.required && !v.allowEmptyValue)
        throw new Error(`Required parameter ${v.name} is not provided`);
      if (m && v.schema && v.schema.type === "object" && typeof T == "string")
        try {
          T = JSON.parse(T);
        } catch {
          throw new Error("Could not parse object parameter value string as JSON");
        }
      A && A({
        req: g,
        parameter: v,
        value: T,
        operation: $,
        spec: t
      });
    }
  });
  const C = ie(ie({}, e), {}, {
    operation: $
  });
  if (m ? g = xue(C, g) : g = Pue(C, g), g.cookies && Object.keys(g.cookies).length) {
    const v = Object.keys(g.cookies).reduce((A, T) => {
      const R = g.cookies[T], k = A ? "&" : "", H = Am.serialize(T, R);
      return A + k + H;
    }, "");
    g.headers.Cookie = v;
  }
  return g.cookies && delete g.cookies, E0(g), g;
}
const mh = (e) => e ? e.replace(/\W/g, "") : null;
function cw(e) {
  return eS(e.spec) ? Vue(e) : kue(e);
}
function Vue(e) {
  let {
    spec: t,
    pathName: r,
    method: n,
    server: i,
    contextUrl: s,
    serverVariables: o = {}
  } = e;
  const a = ns(t, ["paths", r, (n || "").toLowerCase(), "servers"]) || ns(t, ["paths", r, "servers"]) || ns(t, ["servers"]);
  let c = "", l = null;
  if (i && a && a.length) {
    const u = a.map((f) => f.url);
    u.indexOf(i) > -1 && (c = i, l = a[u.indexOf(i)]);
  }
  return !c && a && a.length && (c = a[0].url, [l] = a), c.indexOf("{") > -1 && Mue(c).forEach((f) => {
    if (l.variables && l.variables[f]) {
      const p = l.variables[f], h = o[f] || p.default, d = new RegExp(`{${f}}`, "g");
      c = c.replace(d, h);
    }
  }), Cue(c, s);
}
function Cue() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const r = e && t ? at.parse(at.resolve(t, e)) : at.parse(e), n = at.parse(t), i = mh(r.protocol) || mh(n.protocol) || "", s = r.host || n.host, o = r.pathname || "";
  let a;
  return i && s ? a = `${i}://${s + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function Mue(e) {
  const t = [], r = /{([^}]+)}/g;
  let n;
  for (; n = r.exec(e); )
    t.push(n[1]);
  return t;
}
function kue(e) {
  let {
    spec: t,
    scheme: r,
    contextUrl: n = ""
  } = e;
  const i = at.parse(n), s = Array.isArray(t.schemes) ? t.schemes[0] : null, o = r || s || mh(i.protocol) || "http", a = t.host || i.host || "", c = t.basePath || "";
  let l;
  return o && a ? l = `${o}://${a + c}` : l = c, l[l.length - 1] === "/" ? l.slice(0, -1) : l;
}
Z.http = Hs;
Z.makeHttp = z2.bind(null, Z.http);
Z.resolveStrategies = {
  "openapi-3-1-apidom": Yle,
  "openapi-3-0": rS,
  "openapi-2-0": tS,
  generic: X0
};
Z.resolve = nS({
  strategies: [Z.resolveStrategies["openapi-3-1-apidom"], Z.resolveStrategies["openapi-3-0"], Z.resolveStrategies["openapi-2-0"], Z.resolveStrategies.generic]
});
Z.resolveSubtree = BU({
  strategies: [Z.resolveStrategies["openapi-3-1-apidom"], Z.resolveStrategies["openapi-3-0"], Z.resolveStrategies["openapi-2-0"], Z.resolveStrategies.generic]
});
Z.execute = Fue;
Z.serializeRes = O0;
Z.serializeHeaders = S0;
Z.clearCache = mL;
Z.makeApisTagOperation = rue;
Z.buildRequest = aw;
Z.helpers = {
  opId: Gs
};
Z.getBaseUrl = cw;
Z.apidom = {
  resolve: {
    resolvers: {
      HttpResolverSwaggerClient: Y1
    }
  },
  parse: {
    parsers: {
      JsonParser: X1,
      YamlParser: Q1,
      OpenApiJson3_1Parser: Z1,
      OpenApiYaml3_1Parser: ew
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: rw
    }
  }
};
function Z(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof e == "string" ? t.url = e : t = e, !(this instanceof Z))
    return new Z(t);
  Object.assign(this, t);
  const r = this.resolve().then(() => (this.disableInterfaces || Object.assign(this, Z.makeApisTagOperation(this)), this));
  return r.client = this, r;
}
Z.prototype = {
  http: Hs,
  execute(e) {
    return this.applyDefaults(), Z.execute(ie({
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
    return Z.resolve(ie({
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
Z.prototype.applyDefaults = function() {
  const {
    spec: t
  } = this, r = this.url;
  if (r && r.startsWith("http")) {
    const n = at.parse(r);
    t.host || (t.host = n.host), t.schemes || (t.schemes = [n.protocol.replace(":", "")]), t.basePath || (t.basePath = "/");
  }
};
var lw = {}, du = {}, Io = {}, Oe = {}, Mr = {};
Object.defineProperty(Mr, "__esModule", { value: !0 });
Mr.preserveLocationKey = Mr.preserveFormattingKey = Mr.preserveRootRangeKey = void 0;
Mr.preserveRootRangeKey = Symbol("preserve-root-location");
Mr.preserveFormattingKey = Symbol("preserve-formatting");
Mr.preserveLocationKey = Symbol("preserve-location");
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.copyPreservedValues = Oe.setPreservedRootRange = Oe.getPreservedRootRange = Oe.setPreservedLocation = Oe.getPreservedLocation = Oe.setPreservedValue = Oe.getPreservedValue = void 0;
const ut = Mr;
function Nue(e, t) {
  var r;
  return (r = e == null ? void 0 : e[ut.preserveFormattingKey]) === null || r === void 0 ? void 0 : r[t];
}
Oe.getPreservedValue = Nue;
function Due(e, t, r) {
  e[ut.preserveFormattingKey] === void 0 && Object.defineProperty(e, ut.preserveFormattingKey, { enumerable: !1, value: {} }), e[ut.preserveFormattingKey][t] = r;
}
Oe.setPreservedValue = Due;
function Lue(e, t) {
  var r;
  return (r = e == null ? void 0 : e[ut.preserveLocationKey]) === null || r === void 0 ? void 0 : r[t];
}
Oe.getPreservedLocation = Lue;
function Bue(e, t, r) {
  e[ut.preserveLocationKey] === void 0 && Object.defineProperty(e, ut.preserveLocationKey, { enumerable: !1, value: {} }), e[ut.preserveLocationKey][t] = r;
}
Oe.setPreservedLocation = Bue;
function Uue(e) {
  return e[ut.preserveRootRangeKey];
}
Oe.getPreservedRootRange = Uue;
function que(e, t) {
  Object.defineProperty(e, ut.preserveRootRangeKey, { enumerable: !1, value: t });
}
Oe.setPreservedRootRange = que;
function Hue(e, t) {
  e && e[ut.preserveFormattingKey] !== void 0 && Object.defineProperty(t, ut.preserveFormattingKey, {
    enumerable: !1,
    value: e[ut.preserveFormattingKey]
  });
}
Oe.copyPreservedValues = Hue;
Object.defineProperty(Io, "__esModule", { value: !0 });
Io.visitObject = void 0;
const ea = Oe;
function yh(e, t, r, n) {
  const i = Kue(r);
  if (i === "object") {
    n.onObjectStart(e, t, r, (0, ea.getPreservedLocation)(e, t));
    for (const s in r)
      yh(r, s, r[s], n);
    n.onObjectEnd();
  } else
    i === "array" ? (n.onArrayStart(e, t, r, (0, ea.getPreservedLocation)(e, t)), r.forEach((s, o) => {
      yh(r, o, s, n);
    }), n.onArrayEnd()) : n.onValue(e, t, r, (0, ea.getPreservedValue)(e, t), (0, ea.getPreservedLocation)(e, t));
}
Io.visitObject = yh;
function Kue(e) {
  return typeof e == "object" ? e === null || e instanceof Number || e instanceof String || e instanceof Boolean ? "value" : e instanceof Array ? "array" : "object" : "value";
}
Object.defineProperty(du, "__esModule", { value: !0 });
du.simpleClone = void 0;
const Gue = Io, bb = Oe;
function Jue(e, t) {
  let r = {};
  const n = [r];
  return (0, Gue.visitObject)(void 0, "fakeroot", e, {
    onObjectStart: (i, s, o) => {
      n.push(r), r = r[s] = {}, (0, bb.copyPreservedValues)(o, r);
    },
    onObjectEnd: () => {
      r = n.pop();
    },
    onArrayStart: (i, s, o) => {
      n.push(r), r = r[s] = [], (0, bb.copyPreservedValues)(o, r);
    },
    onArrayEnd: () => {
      r = n.pop();
    },
    onValue: (i, s, o, a) => {
      r[s] = t ? t(o) : o;
    }
  }), n[0].fakeroot;
}
du.simpleClone = Jue;
var $i = {}, mu = {}, jm = {}, tr = {}, rr = {};
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
        const m = d.key, y = d.value, g = h.mappings.find((S) => c(m, S.key));
        if (g) {
          if (!c(y, g.value))
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
})(rr);
var ht = {};
Object.defineProperty(ht, "__esModule", { value: !0 });
function uw(e) {
  return typeof e > "u" || e === null;
}
ht.isNothing = uw;
function Wue(e) {
  return typeof e == "object" && e !== null;
}
ht.isObject = Wue;
function zue(e) {
  return Array.isArray(e) ? e : uw(e) ? [] : [e];
}
ht.toArray = zue;
function Yue(e, t) {
  var r, n, i, s;
  if (t)
    for (s = Object.keys(t), r = 0, n = s.length; r < n; r += 1)
      i = s[r], e[i] = t[i];
  return e;
}
ht.extend = Yue;
function Xue(e, t) {
  var r = "", n;
  for (n = 0; n < t; n += 1)
    r += e;
  return r;
}
ht.repeat = Xue;
function Que(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
ht.isNegativeZero = Que;
let fw = class vh {
  constructor(t, r = null, n = !1) {
    this.name = "YAMLException", this.reason = t, this.mark = r, this.message = this.toString(!1), this.isWarning = n;
  }
  static isInstance(t) {
    if (t != null && t.getClassIdentifier && typeof t.getClassIdentifier == "function") {
      for (let r of t.getClassIdentifier())
        if (r == vh.CLASS_IDENTIFIER)
          return !0;
    }
    return !1;
  }
  getClassIdentifier() {
    var t = [];
    return t.concat(vh.CLASS_IDENTIFIER);
  }
  toString(t = !1) {
    var r;
    return r = "JS-YAML: " + (this.reason || "(unknown reason)"), !t && this.mark && (r += " " + this.mark.toString()), r;
  }
};
fw.CLASS_IDENTIFIER = "yaml-ast-parser.YAMLException";
var Ro = fw;
const $b = ht;
let Zue = class {
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
    return a = this.buffer.slice(i, o), $b.repeat(" ", t) + n + a + s + `
` + $b.repeat(" ", t + this.position - i + n.length) + "^";
  }
  toString(t = !0) {
    var r, n = "";
    return this.name && (n += 'in "' + this.name + '" '), n += "at line " + (this.line + 1) + ", column " + (this.column + 1), t || (r = this.getSnippet(), r && (n += `:
` + r)), n;
  }
};
var efe = Zue, tn = {}, Pe = {};
Object.defineProperty(Pe, "__esModule", { value: !0 });
const Ob = Ro;
var tfe = [
  "kind",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "defaultStyle",
  "styleAliases"
], rfe = [
  "scalar",
  "sequence",
  "mapping"
];
function nfe(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(n) {
      t[String(n)] = r;
    });
  }), t;
}
class ife {
  constructor(t, r) {
    if (r = r || {}, Object.keys(r).forEach(function(n) {
      if (tfe.indexOf(n) === -1)
        throw new Ob('Unknown option "' + n + '" is met in definition of "' + t + '" YAML type.');
    }), this.tag = t, this.kind = r.kind || null, this.resolve = r.resolve || function() {
      return !0;
    }, this.construct = r.construct || function(n) {
      return n;
    }, this.instanceOf = r.instanceOf || null, this.predicate = r.predicate || null, this.represent = r.represent || null, this.defaultStyle = r.defaultStyle || null, this.styleAliases = nfe(r.styleAliases || null), rfe.indexOf(this.kind) === -1)
      throw new Ob('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
  }
}
Pe.Type = ife;
Object.defineProperty(tn, "__esModule", { value: !0 });
const Sb = ht, ha = Ro, sfe = Pe;
function gh(e, t, r) {
  var n = [];
  return e.include.forEach(function(i) {
    r = gh(i, t, r);
  }), e[t].forEach(function(i) {
    r.forEach(function(s, o) {
      s.tag === i.tag && n.push(o);
    }), r.push(i);
  }), r.filter(function(i, s) {
    return n.indexOf(s) === -1;
  });
}
function ofe() {
  var e = {}, t, r;
  function n(i) {
    e[i.tag] = i;
  }
  for (t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(n);
  return e;
}
class zn {
  constructor(t) {
    this.include = t.include || [], this.implicit = t.implicit || [], this.explicit = t.explicit || [], this.implicit.forEach(function(r) {
      if (r.loadKind && r.loadKind !== "scalar")
        throw new ha("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }), this.compiledImplicit = gh(this, "implicit", []), this.compiledExplicit = gh(this, "explicit", []), this.compiledTypeMap = ofe(this.compiledImplicit, this.compiledExplicit);
  }
}
zn.DEFAULT = null;
zn.create = function(...t) {
  var r, n;
  switch (t.length) {
    case 1:
      r = zn.DEFAULT, n = t[0];
      break;
    case 2:
      r = t[0], n = t[1];
      break;
    default:
      throw new ha("Wrong number of arguments for Schema.create function");
  }
  if (r = Sb.toArray(r), n = Sb.toArray(n), !r.every(function(i) {
    return i instanceof zn;
  }))
    throw new ha("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
  if (!n.every(function(i) {
    return i instanceof sfe.Type;
  }))
    throw new ha("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  return new zn({
    include: r,
    explicit: n
  });
};
tn.Schema = zn;
const afe = Pe;
var cfe = new afe.Type("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(e) {
    return e !== null ? e : "";
  }
});
const lfe = Pe;
var ufe = new lfe.Type("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(e) {
    return e !== null ? e : [];
  }
});
const ffe = Pe;
var pfe = new ffe.Type("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(e) {
    return e !== null ? e : {};
  }
});
const hfe = tn;
var dfe = new hfe.Schema({
  explicit: [
    cfe,
    ufe,
    pfe
  ]
});
const mfe = Pe, pw = rr;
function yfe(e) {
  const t = pw.isYAMLNode(e) ? e.value : e;
  if (t === null)
    return !0;
  var r = t.length;
  return r === 1 && t === "~" || r === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function vfe(e) {
  return pw.isYAMLNode(e) ? e : null;
}
function gfe(e) {
  return e === null;
}
var bfe = new mfe.Type("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: yfe,
  construct: vfe,
  predicate: gfe,
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
const $fe = Pe, hw = rr;
function Ofe(e) {
  const t = hw.isYAMLNode(e) ? e.value : e;
  if (t === null)
    return !1;
  var r = t.length;
  return r === 4 && (t === "true" || t === "True" || t === "TRUE") || r === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function Sfe(e) {
  return hw.isYAMLNode(e) ? e : e === "true" || e === "True" || e === "TRUE";
}
function wfe(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
var xfe = new $fe.Type("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Ofe,
  construct: Sfe,
  predicate: wfe,
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
const Efe = ht, Pfe = Pe, dw = rr;
function Afe(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function jfe(e) {
  return 48 <= e && e <= 55;
}
function Tfe(e) {
  return 48 <= e && e <= 57;
}
function _fe(e) {
  const t = dw.isYAMLNode(e) ? e.value : e;
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
          if (!Afe(t.charCodeAt(n)))
            return !1;
          i = !0;
        }
      return i;
    }
    for (; n < r; n++)
      if (s = t[n], s !== "_") {
        if (!jfe(t.charCodeAt(n)))
          return !1;
        i = !0;
      }
    return i;
  }
  for (; n < r; n++)
    if (s = t[n], s !== "_") {
      if (s === ":")
        break;
      if (!Tfe(t.charCodeAt(n)))
        return !1;
      i = !0;
    }
  return i ? s !== ":" ? !0 : /^(:[0-5]?[0-9])+$/.test(t.slice(n)) : !1;
}
function Ife(e) {
  if (dw.isYAMLNode(e))
    return e;
  var t = e, r = 1, n, i, s = [];
  return t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), n = t[0], (n === "-" || n === "+") && (n === "-" && (r = -1), t = t.slice(1), n = t[0]), t === "0" ? 0 : n === "0" ? t[1] === "b" ? r * parseInt(t.slice(2), 2) : t[1] === "x" ? r * parseInt(t, 16) : r * parseInt(t, 8) : t.indexOf(":") !== -1 ? (t.split(":").forEach(function(o) {
    s.unshift(parseInt(o, 10));
  }), t = 0, i = 1, s.forEach(function(o) {
    t += o * i, i *= 60;
  }), r * t) : r * parseInt(t, 10);
}
function Rfe(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !Efe.isNegativeZero(e);
}
var Ffe = new Pfe.Type("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: _fe,
  construct: Ife,
  predicate: Rfe,
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
const mw = ht, Vfe = Pe, yw = rr;
var Cfe = new RegExp("-?(0|[1-9][0-9]*)(.[0-9]*)?([eE][-+]?[0-9]+)?|^0$|^[-+]?.(inf|Inf|INF)$|^.(nan|NaN|NAN)$");
function Mfe(e) {
  const t = yw.isYAMLNode(e) ? e.value : e;
  return !(t === null || !Cfe.test(t));
}
function kfe(e) {
  if (yw.isYAMLNode(e))
    return e;
  var t, r, n, i;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, i = [], 0 <= "+-".indexOf(t[0]) && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : 0 <= t.indexOf(":") ? (t.split(":").forEach(function(s) {
    i.unshift(parseFloat(s, 10));
  }), t = 0, n = 1, i.forEach(function(s) {
    t += s * n, n *= 60;
  }), r * t) : r * parseFloat(t, 10);
}
function Nfe(e, t) {
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
  else if (mw.isNegativeZero(e))
    return "-0.0";
  return e.toString(10);
}
function Dfe(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || mw.isNegativeZero(e));
}
var Lfe = new Vfe.Type("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Mfe,
  construct: kfe,
  predicate: Dfe,
  represent: Nfe,
  defaultStyle: "lowercase"
});
const Bfe = tn;
var Ufe = new Bfe.Schema({
  include: [
    dfe
  ],
  implicit: [
    bfe,
    xfe,
    Ffe,
    Lfe
  ]
});
const qfe = tn;
var Hfe = new qfe.Schema({
  include: [
    Ufe
  ]
});
const Kfe = Pe;
var vw = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?)?$");
function Gfe(e) {
  if (e === null)
    return !1;
  var t;
  return t = vw.exec(e), t !== null;
}
function Jfe(e) {
  var t, r, n, i, s, o, a, c = 0, l = null, u, f, p;
  if (t = vw.exec(e), t === null)
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
function Wfe(e) {
  return e.toISOString();
}
var zfe = new Kfe.Type("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Gfe,
  construct: Jfe,
  instanceOf: Date,
  represent: Wfe
});
const Yfe = Pe;
function Xfe(e) {
  return e === "<<" || e === null;
}
var Qfe = new Yfe.Type("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Xfe
}), Wa = ox.Buffer;
const Zfe = Pe, epe = rr;
var Tm = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function tpe(e) {
  if (e === null)
    return !1;
  var t, r, n = 0, i = e.length, s = Tm;
  for (r = 0; r < i; r++)
    if (t = s.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0)
        return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function rpe(e) {
  if (epe.isYAMLNode(e))
    return e;
  var t, r, n = e.replace(/[\r\n=]/g, ""), i = n.length, s = Tm, o = 0, a = [];
  for (t = 0; t < i; t++)
    t % 4 === 0 && t && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | s.indexOf(n.charAt(t));
  return r = i % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), Wa ? new Wa(a) : a;
}
function npe(e) {
  var t = "", r = 0, n, i, s = e.length, o = Tm;
  for (n = 0; n < s; n++)
    n % 3 === 0 && n && (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]), r = (r << 8) + e[n];
  return i = s % 3, i === 0 ? (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]) : i === 2 ? (t += o[r >> 10 & 63], t += o[r >> 4 & 63], t += o[r << 2 & 63], t += o[64]) : i === 1 && (t += o[r >> 2 & 63], t += o[r << 4 & 63], t += o[64], t += o[64]), t;
}
function ipe(e) {
  return Wa && Wa.isBuffer(e);
}
var spe = new Zfe.Type("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: tpe,
  construct: rpe,
  predicate: ipe,
  represent: npe
});
const ope = Pe;
var ape = Object.prototype.hasOwnProperty, cpe = Object.prototype.toString;
function lpe(e) {
  if (e === null)
    return !0;
  var t = [], r, n, i, s, o, a = e;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (i = a[r], o = !1, cpe.call(i) !== "[object Object]")
      return !1;
    for (s in i)
      if (ape.call(i, s))
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
function upe(e) {
  return e !== null ? e : [];
}
var fpe = new ope.Type("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: lpe,
  construct: upe
});
const ppe = Pe, bh = rr;
var hpe = Object.prototype.toString;
function dpe(e) {
  if (e === null)
    return !0;
  if (e.kind != bh.Kind.SEQ)
    return !1;
  var t, r, n, i = e.items;
  for (t = 0, r = i.length; t < r; t += 1)
    if (n = i[t], hpe.call(n) !== "[object Object]" || !Array.isArray(n.mappings) || n.mappings.length !== 1)
      return !1;
  return !0;
}
function mpe(e) {
  if (e === null || !Array.isArray(e.items))
    return [];
  let t, r, n, i = e.items;
  for (n = bh.newItems(), n.parent = e.parent, n.startPosition = e.startPosition, n.endPosition = e.endPosition, t = 0, r = i.length; t < r; t += 1) {
    let o = i[t].mappings[0], a = bh.newItems();
    a.parent = n, a.startPosition = o.key.startPosition, a.endPosition = o.value.startPosition, o.key.parent = a, o.value.parent = a, a.items = [o.key, o.value], n.items.push(a);
  }
  return n;
}
var ype = new ppe.Type("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: dpe,
  construct: mpe
});
const vpe = Pe, gpe = rr;
function bpe(e) {
  return e === null ? !0 : e.kind == gpe.Kind.MAP;
}
function $pe(e) {
  return e !== null ? e : {};
}
var Ope = new vpe.Type("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: bpe,
  construct: $pe
});
const Spe = tn;
var wpe = new Spe.Schema({
  include: [
    Hfe
  ],
  implicit: [
    zfe,
    Qfe
  ],
  explicit: [
    spe,
    fpe,
    ype,
    Ope
  ]
}), yu = wpe;
const xpe = Pe;
function Epe() {
  return !0;
}
function Ppe() {
}
function Ape() {
  return "";
}
function jpe(e) {
  return typeof e > "u";
}
var Tpe = new xpe.Type("tag:yaml.org,2002:js/undefined", {
  kind: "scalar",
  resolve: Epe,
  construct: Ppe,
  predicate: jpe,
  represent: Ape
});
const _pe = Pe;
function Ipe(e) {
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
function Rpe(e) {
  var t = e, r = /\/([gim]*)$/.exec(e), n = "";
  return t[0] === "/" && (r && (n = r[1]), t = t.slice(1, t.length - n.length - 1)), new RegExp(t, n);
}
function Fpe(e) {
  var t = "/" + e.source + "/";
  return e.global && (t += "g"), e.multiline && (t += "m"), e.ignoreCase && (t += "i"), t;
}
function Vpe(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
var Cpe = new _pe.Type("tag:yaml.org,2002:js/regexp", {
  kind: "scalar",
  resolve: Ipe,
  construct: Rpe,
  predicate: Vpe,
  represent: Fpe
});
const gw = tn;
var bw = new gw.Schema({
  include: [
    yu
  ],
  explicit: [
    Tpe,
    Cpe
  ]
});
gw.Schema.DEFAULT = bw;
var $w = bw;
Object.defineProperty(tr, "__esModule", { value: !0 });
const tt = rr, _r = ht, _m = Ro, Im = efe, Ow = yu, Mpe = $w;
var vu = Object.prototype.hasOwnProperty, za = 1, Sw = 2, ww = 3, Ya = 4, _f = 1, kpe = 2, wb = 3, Npe = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Dpe = /[\x85\u2028\u2029]/, Lpe = /[,\[\]\{\}]/, xw = /^(?:!|!!|![a-z\-]+!)$/i, Ew = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Mt(e) {
  return e === 10 || e === 13;
}
function bn(e) {
  return e === 9 || e === 32;
}
function Ze(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function Yn(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function Bpe(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
function Upe(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function qpe(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
function Hpe(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function Kpe(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
}
var $h = new Array(256), Oh = new Array(256), Pw = new Array(256), Sh = new Array(256);
for (var _t = 0; _t < 256; _t++)
  Sh[_t] = Oh[_t] = Hpe(_t), $h[_t] = Oh[_t] ? 1 : 0, Pw[_t] = 1, $h[_t] || (Sh[_t] = "\\" + String.fromCharCode(_t));
let Gpe = class {
  constructor(t, r) {
    this.errorMap = {}, this.errors = [], this.lines = [], this.input = t, this.filename = r.filename || null, this.schema = r.schema || Mpe, this.onWarning = r.onWarning || null, this.legacy = r.legacy || !1, this.allowAnyEscape = r.allowAnyEscape || !1, this.ignoreDuplicateKeys = r.ignoreDuplicateKeys || !1, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.documents = [];
  }
};
function Rm(e, t, r = !1) {
  return new _m(t, new Im(e.filename, e.input, e.position, e.line, e.position - e.lineStart), r);
}
function wh(e, t, r, n = !1, i = !1) {
  var s = Jpe(e, t);
  if (s) {
    var o = r + t;
    if (!e.errorMap[o]) {
      var a = new Im(e.filename, e.input, t, s.line, t - s.start);
      i && (a.toLineEnd = !0);
      var c = new _m(r, a, n);
      e.errors.push(c);
    }
  }
}
function G(e, t) {
  var r = Rm(e, t), n = r.message + r.mark.position;
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
function xh(e, t) {
  var r = Rm(e, t);
  e.onWarning && e.onWarning.call(null, r);
}
var xb = {
  YAML: function(t, r, n) {
    var i, s, o;
    t.version !== null && G(t, "duplication of %YAML directive"), n.length !== 1 && G(t, "YAML directive accepts exactly one argument"), i = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), i === null && G(t, "ill-formed argument of the YAML directive"), s = parseInt(i[1], 10), o = parseInt(i[2], 10), s !== 1 && G(t, "found incompatible YAML document (version 1.2 is required)"), t.version = n[0], t.checkLineBreaks = o < 2, o !== 2 && G(t, "found incompatible YAML document (version 1.2 is required)");
  },
  TAG: function(t, r, n) {
    var i, s;
    n.length !== 2 && G(t, "TAG directive accepts exactly two arguments"), i = n[0], s = n[1], xw.test(i) || G(t, "ill-formed tag handle (first argument) of the TAG directive"), vu.call(t.tagMap, i) && G(t, 'there is a previously declared suffix for "' + i + '" tag handle'), Ew.test(s) || G(t, "ill-formed tag prefix (second argument) of the TAG directive"), t.tagMap[i] = s;
  }
};
function kr(e, t, r, n) {
  var i, s, o, a, c = e.result;
  if (c.startPosition == -1 && (c.startPosition = t), t <= r) {
    if (a = e.input.slice(t, r), n)
      for (i = 0, s = a.length; i < s; i += 1)
        o = a.charCodeAt(i), o === 9 || 32 <= o && o <= 1114111 || G(e, "expected valid JSON character");
    else
      Npe.test(a) && G(e, "the stream contains non-printable characters");
    c.value += a, c.endPosition = r;
  }
}
function Xn(e, t, r, n, i) {
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
      tt.isNodesEqual(o, s) && (wh(e, s.key.startPosition, "duplicate key"), wh(e, o.key.startPosition, "duplicate key"));
    }), t.mappings.push(s), t.endPosition = i ? i.endPosition : n.endPosition + 1, t;
  }
}
function Fm(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : G(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.lines.push({
    start: e.lineStart,
    line: e.line
  });
}
function Jpe(e, t) {
  for (var r, n = 0; n < e.lines.length && !(e.lines[n].start > t); n++)
    r = e.lines[n];
  return r || {
    start: 0,
    line: 0
  };
}
function we(e, t, r) {
  for (var n = 0, i = e.input.charCodeAt(e.position); i !== 0; ) {
    for (; bn(i); )
      i === 9 && e.errors.push(Rm(e, "Using tabs can lead to unpredictable results", !0)), i = e.input.charCodeAt(++e.position);
    if (t && i === 35)
      do
        i = e.input.charCodeAt(++e.position);
      while (i !== 10 && i !== 13 && i !== 0);
    if (Mt(i))
      for (Fm(e), i = e.input.charCodeAt(e.position), n++, e.lineIndent = 0; i === 32; )
        e.lineIndent++, i = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && e.lineIndent < r && xh(e, "deficient indentation"), n;
}
function Fo(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && e.input.charCodeAt(t + 1) === r && e.input.charCodeAt(t + 2) === r && (t += 3, r = e.input.charCodeAt(t), r === 0 || Ze(r)));
}
function Vm(e, t, r) {
  r === 1 ? t.value += " " : r > 1 && (t.value += _r.repeat(`
`, r - 1));
}
function Wpe(e, t, r) {
  var n, i, s, o, a, c, l, u, f = e.kind, p = e.result, h, d = tt.newScalar();
  if (d.plainScalar = !0, e.result = d, h = e.input.charCodeAt(e.position), Ze(h) || Yn(h) || h === 35 || h === 38 || h === 42 || h === 33 || h === 124 || h === 62 || h === 39 || h === 34 || h === 37 || h === 64 || h === 96)
    return e.result.startPosition = e.position - 1, e.result.endPosition = e.position - 1, !1;
  if ((h === 63 || h === 45) && (i = e.input.charCodeAt(e.position + 1), Ze(i) || r && Yn(i)))
    return !1;
  for (e.kind = "scalar", s = o = e.position, a = !1; h !== 0; ) {
    if (h === 58) {
      if (i = e.input.charCodeAt(e.position + 1), Ze(i) || r && Yn(i))
        break;
    } else if (h === 35) {
      if (n = e.input.charCodeAt(e.position - 1), Ze(n))
        break;
    } else {
      if (e.position === e.lineStart && Fo(e) || r && Yn(h))
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
    if (a && (kr(e, s, o, !1), Vm(e, d, e.line - c), s = o = e.position, a = !1), bn(h) || (o = e.position + 1), h = e.input.charCodeAt(++e.position), e.position >= e.input.length)
      return !1;
  }
  return kr(e, s, o, !1), e.result.startPosition != -1 ? (d.rawValue = e.input.substring(d.startPosition, d.endPosition), !0) : (e.kind = f, e.result = p, !1);
}
function zpe(e, t) {
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
      Mt(r) ? (kr(e, n, i, !0), Vm(e, s, we(e, !1, t)), n = i = e.position) : e.position === e.lineStart && Fo(e) ? G(e, "unexpected end of the document within a single quoted scalar") : (e.position++, i = e.position, s.endPosition = e.position);
  G(e, "unexpected end of the stream within a single quoted scalar");
}
function Ype(e, t) {
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
      else if (a < 256 && (e.allowAnyEscape ? Pw[a] : $h[a]))
        c.value += e.allowAnyEscape ? Sh[a] : Oh[a], e.position++;
      else if ((o = Upe(a)) > 0) {
        for (i = o, s = 0; i > 0; i--)
          a = e.input.charCodeAt(++e.position), (o = Bpe(a)) >= 0 ? s = (s << 4) + o : G(e, "expected hexadecimal character");
        c.value += Kpe(s), e.position++;
      } else
        G(e, "unknown escape sequence");
      r = n = e.position;
    } else
      Mt(a) ? (kr(e, r, n, !0), Vm(e, c, we(e, !1, t)), r = n = e.position) : e.position === e.lineStart && Fo(e) ? G(e, "unexpected end of the document within a double quoted scalar") : (e.position++, n = e.position);
  }
  G(e, "unexpected end of the stream within a double quoted scalar");
}
function Xpe(e, t) {
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
    if (h = p = d = null, l = u = !1, m === 63 && (a = e.input.charCodeAt(e.position + 1), Ze(a) && (l = u = !0, e.position++, we(e, !0, t))), n = e.line, Oi(e, t, za, !1, !0), h = e.tag, p = e.result, we(e, !0, t), m = e.input.charCodeAt(e.position), (u || e.line === n) && m === 58 && (l = !0, m = e.input.charCodeAt(++e.position), we(e, !0, t), Oi(e, t, za, !1, !0), d = e.result), f)
      Xn(e, s, h, p, d);
    else if (l) {
      var g = Xn(e, null, h, p, d);
      g.parent = s, s.items.push(g);
    } else
      p && (p.parent = s), s.items.push(p);
    s.endPosition = e.position + 1, we(e, !0, t), m = e.input.charCodeAt(e.position), m === 44 ? (r = !0, m = e.input.charCodeAt(++e.position)) : r = !1;
  }
  G(e, "unexpected end of the stream within a flow collection");
}
function Qpe(e, t) {
  var r, n, i = _f, s = !1, o = t, a = 0, c = !1, l, u;
  if (u = e.input.charCodeAt(e.position), u === 124)
    n = !1;
  else if (u === 62)
    n = !0;
  else
    return !1;
  var f = tt.newScalar();
  for (e.kind = "scalar", e.result = f, f.startPosition = e.position; u !== 0; )
    if (u = e.input.charCodeAt(++e.position), u === 43 || u === 45)
      _f === i ? i = u === 43 ? wb : kpe : G(e, "repeat of a chomping mode identifier");
    else if ((l = qpe(u)) >= 0)
      l === 0 ? G(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? G(e, "repeat of an indentation width identifier") : (o = t + l - 1, s = !0);
    else
      break;
  if (bn(u)) {
    do
      u = e.input.charCodeAt(++e.position);
    while (bn(u));
    if (u === 35)
      do
        u = e.input.charCodeAt(++e.position);
      while (!Mt(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (Fm(e), e.lineIndent = 0, u = e.input.charCodeAt(e.position); (!s || e.lineIndent < o) && u === 32; )
      e.lineIndent++, u = e.input.charCodeAt(++e.position);
    if (!s && e.lineIndent > o && (o = e.lineIndent), Mt(u)) {
      a++;
      continue;
    }
    if (e.lineIndent < o) {
      i === wb ? f.value += _r.repeat(`
`, a) : i === _f && s && (f.value += `
`);
      break;
    }
    for (n ? bn(u) ? (c = !0, f.value += _r.repeat(`
`, a + 1)) : c ? (c = !1, f.value += _r.repeat(`
`, a + 1)) : a === 0 ? s && (f.value += " ") : f.value += _r.repeat(`
`, a) : s && (f.value += _r.repeat(`
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
function Eb(e, t) {
  var r, n = e.tag, i = e.anchor, s = tt.newItems(), o, a = !1, c;
  for (e.anchor !== null && (s.anchorId = e.anchor, e.anchorMap[e.anchor] = s), s.startPosition = e.position, c = e.input.charCodeAt(e.position); c !== 0 && !(c !== 45 || (o = e.input.charCodeAt(e.position + 1), !Ze(o))); ) {
    if (a = !0, e.position++, we(e, !0, -1) && e.lineIndent <= t) {
      s.items.push(null), c = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, Oi(e, t, ww, !1, !0), e.result && (e.result.parent = s, s.items.push(e.result)), we(e, !0, -1), c = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && c !== 0)
      G(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return s.endPosition = e.position, a ? (e.tag = n, e.anchor = i, e.kind = "sequence", e.result = s, s.endPosition = e.position, !0) : !1;
}
function Zpe(e, t, r) {
  var n, i, s, o = e.tag, a = e.anchor, c = tt.newMap(), l = null, u = null, f = null, p = !1, h = !1, d;
  for (c.startPosition = e.position, e.anchor !== null && (c.anchorId = e.anchor, e.anchorMap[e.anchor] = c), d = e.input.charCodeAt(e.position); d !== 0; ) {
    if (n = e.input.charCodeAt(e.position + 1), s = e.line, (d === 63 || d === 58) && Ze(n))
      d === 63 ? (p && (Xn(e, c, l, u, null), l = u = f = null), h = !0, p = !0, i = !0) : p ? (p = !1, i = !0) : G(e, "incomplete explicit mapping pair; a key node is missed"), e.position += 1, d = n;
    else if (Oi(e, r, Sw, !1, !0))
      if (e.line === s) {
        for (d = e.input.charCodeAt(e.position); bn(d); )
          d = e.input.charCodeAt(++e.position);
        if (d === 58)
          d = e.input.charCodeAt(++e.position), Ze(d) || G(e, "a whitespace character is expected after the key-value separator within a block mapping"), p && (Xn(e, c, l, u, null), l = u = f = null), h = !0, p = !1, i = !1, l = e.tag, u = e.result;
        else {
          if (e.position == e.lineStart && Fo(e))
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
    if ((e.line === s || e.lineIndent > t) && (Oi(e, t, Ya, !0, i) && (p ? u = e.result : f = e.result), p || (Xn(e, c, l, u, f), l = u = f = null), we(e, !0, -1), d = e.input.charCodeAt(e.position)), e.lineIndent > t && d !== 0)
      G(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return p && Xn(e, c, l, u, null), h && (e.tag = o, e.anchor = a, e.kind = "mapping", e.result = c), h;
}
function ehe(e) {
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
      o === 33 && (n ? G(e, "tag suffix cannot contain exclamation marks") : (i = e.input.slice(t - 1, e.position + 1), xw.test(i) || G(e, "named tag handle cannot contain such characters"), n = !0, t = e.position + 1)), o = e.input.charCodeAt(++e.position);
    s = e.input.slice(t, e.position), Lpe.test(s) && G(e, "tag suffix cannot contain flow indicator characters");
  }
  return s && !Ew.test(s) && G(e, "tag name cannot contain such characters: " + s), r ? e.tag = s : vu.call(e.tagMap, i) ? e.tag = e.tagMap[i] + s : i === "!" ? e.tag = "!" + s : i === "!!" ? e.tag = "tag:yaml.org,2002:" + s : G(e, 'undeclared tag handle "' + i + '"'), !0;
}
function the(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38)
    return !1;
  for (e.anchor !== null && G(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Ze(r) && !Yn(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && G(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
function rhe(e) {
  var t, r;
  e.length, e.input;
  var n;
  if (n = e.input.charCodeAt(e.position), n !== 42)
    return !1;
  for (n = e.input.charCodeAt(++e.position), t = e.position; n !== 0 && !Ze(n) && !Yn(n); )
    n = e.input.charCodeAt(++e.position);
  return e.position <= t && (G(e, "name of an alias node must contain at least one character"), e.position = t + 1), r = e.input.slice(t, e.position), e.anchorMap.hasOwnProperty(r) || (G(e, 'unidentified alias "' + r + '"'), e.position <= t && (e.position = t + 1)), e.result = tt.newAnchorRef(r, t, e.position, e.anchorMap[r]), we(e, !0, -1), !0;
}
function Oi(e, t, r, n, i) {
  var s, o, a, c = 1, l = !1, u = !1, f, p, h, d, m;
  e.tag = null, e.anchor = null, e.kind = null, e.result = null, s = o = a = Ya === r || ww === r, n && we(e, !0, -1) && (l = !0, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1));
  let y = e.position;
  if (e.position - e.lineStart, c === 1)
    for (; ehe(e) || the(e); )
      we(e, !0, -1) ? (l = !0, a = s, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1)) : a = !1;
  if (a && (a = l || i), (c === 1 || Ya === r) && (za === r || Sw === r ? d = t : d = t + 1, m = e.position - e.lineStart, c === 1 ? a && (Eb(e, m) || Zpe(e, m, d)) || Xpe(e, d) ? u = !0 : (o && Qpe(e, d) || zpe(e, d) || Ype(e, d) ? u = !0 : rhe(e) ? (u = !0, (e.tag !== null || e.anchor !== null) && G(e, "alias node should not have any properties")) : Wpe(e, d, za === r) && (u = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result, e.result.anchorId = e.anchor)) : c === 0 && (u = a && Eb(e, m))), e.tag !== null && e.tag !== "!")
    if (e.tag == "!include")
      e.result || (e.result = tt.newScalar(), e.result.startPosition = e.position, e.result.endPosition = e.position, G(e, "!include without value")), e.result.kind = tt.Kind.INCLUDE_REF;
    else if (e.tag === "?")
      for (f = 0, p = e.implicitTypes.length; f < p; f += 1) {
        h = e.implicitTypes[f];
        var g = e.result.value;
        if (h.resolve(g)) {
          e.result.valueObject = h.construct(e.result.value), e.tag = h.tag, e.anchor !== null && (e.result.anchorId = e.anchor, e.anchorMap[e.anchor] = e.result);
          break;
        }
      }
    else
      vu.call(e.typeMap, e.tag) ? (h = e.typeMap[e.tag], e.result !== null && h.kind !== e.kind && (!h.additionalKinds || h.additionalKinds && h.additionalKinds.indexOf(e.kind) === -1) && G(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + h.kind + '", not "' + e.kind + '"'), h.resolve(e.result) ? (e.result = h.construct(e.result), e.anchor !== null && (e.result.anchorId = e.anchor, e.anchorMap[e.anchor] = e.result)) : G(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")) : wh(e, y, "unknown tag <" + e.tag + ">", !1, !0);
  return e.tag !== null || e.anchor !== null || u;
}
function nhe(e) {
  var t = e.position, r, n, i, s = !1, o;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = {}, e.anchorMap = {}; (o = e.input.charCodeAt(e.position)) !== 0 && (we(e, !0, -1), o = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || o !== 37)); ) {
    for (s = !0, o = e.input.charCodeAt(++e.position), r = e.position; o !== 0 && !Ze(o); )
      o = e.input.charCodeAt(++e.position);
    for (n = e.input.slice(r, e.position), i = [], n.length < 1 && G(e, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; bn(o); )
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
    o !== 0 && Fm(e), vu.call(xb, n) ? xb[n](e, n, i) : (xh(e, 'unknown document directive "' + n + '"'), e.position++);
  }
  if (we(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, we(e, !0, -1)) : s && G(e, "directives end mark is expected"), Oi(e, e.lineIndent - 1, Ya, !1, !0), we(e, !0, -1), e.checkLineBreaks && Dpe.test(e.input.slice(t, e.position)) && xh(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Fo(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, we(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    G(e, "end of the stream or a document separator is expected");
  else
    return;
}
function Aw(e, t) {
  e = String(e), t = t || {};
  let r = e.length;
  r !== 0 && (e.charCodeAt(r - 1) !== 10 && e.charCodeAt(r - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var n = new Gpe(e, t);
  for (n.input += "\0"; n.input.charCodeAt(n.position) === 32; )
    n.lineIndent += 1, n.position += 1;
  for (; n.position < n.length - 1; ) {
    var i = n.position;
    if (nhe(n), n.position <= i)
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
function Cm(e, t, r = {}) {
  var n = Aw(e, r), i, s;
  for (i = 0, s = n.length; i < s; i += 1)
    t(n[i]);
}
tr.loadAll = Cm;
function Mm(e, t = {}) {
  var r = Aw(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    var n = new _m("expected a single document in the stream, but found more");
    return n.mark = new Im("", "", 0, 0, 0), n.mark.position = r[0].endPosition, r[0].errors.push(n), r[0];
  }
}
tr.load = Mm;
function jw(e, t, r = {}) {
  Cm(e, t, _r.extend({ schema: Ow }, r));
}
tr.safeLoadAll = jw;
function Tw(e, t = {}) {
  return Mm(e, _r.extend({ schema: Ow }, t));
}
tr.safeLoad = Tw;
tr.loadAll = Cm;
tr.load = Mm;
tr.safeLoadAll = jw;
tr.safeLoad = Tw;
var gu = {};
Object.defineProperty(gu, "__esModule", { value: !0 });
var Vo = ht, km = Ro, ihe = $w, she = yu, Nm = Object.prototype.toString, _w = Object.prototype.hasOwnProperty, ohe = 9, pn = 10, ahe = 13, If = 32, che = 33, Eh = 34, lhe = 35, uhe = 37, fhe = 38, Ph = 39, phe = 42, hhe = 44, dhe = 45, mhe = 58, yhe = 62, vhe = 63, ghe = 64, bhe = 91, $he = 93, Ohe = 96, She = 123, whe = 124, xhe = 125, Fe = {};
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
var Ehe = [
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
function Phe(e, t) {
  var r, n, i, s, o, a, c;
  if (t === null)
    return {};
  for (r = {}, n = Object.keys(t), i = 0, s = n.length; i < s; i += 1)
    o = n[i], a = String(t[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = e.compiledTypeMap[o], c && _w.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function Ahe(e) {
  var t, r, n;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", n = 2;
  else if (e <= 65535)
    r = "u", n = 4;
  else if (e <= 4294967295)
    r = "U", n = 8;
  else
    throw new km("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Vo.repeat("0", n - t.length) + t;
}
function jhe(e) {
  this.schema = e.schema || ihe, this.indent = Math.max(1, e.indent || 2), this.skipInvalid = e.skipInvalid || !1, this.flowLevel = Vo.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = Phe(this.schema, e.styles || null), this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function Pb(e, t) {
  for (var r = Vo.repeat(" ", t), n = 0, i = -1, s = "", o, a = e.length; n < a; )
    i = e.indexOf(`
`, n), i === -1 ? (o = e.slice(n), n = a) : (o = e.slice(n, i + 1), n = i + 1), o.length && o !== `
` && (s += r), s += o;
  return s;
}
function Ah(e, t) {
  return `
` + Vo.repeat(" ", e.indent * t);
}
function The(e, t) {
  var r, n, i;
  for (r = 0, n = e.implicitTypes.length; r < n; r += 1)
    if (i = e.implicitTypes[r], i.resolve(t))
      return !0;
  return !1;
}
function bu(e) {
  this.source = e, this.result = "", this.checkpoint = 0;
}
bu.prototype.takeUpTo = function(e) {
  var t;
  if (e < this.checkpoint)
    throw t = new Error("position should be > checkpoint"), t.position = e, t.checkpoint = this.checkpoint, t;
  return this.result += this.source.slice(this.checkpoint, e), this.checkpoint = e, this;
};
bu.prototype.escapeChar = function() {
  var e, t;
  return e = this.source.charCodeAt(this.checkpoint), t = Fe[e] || Ahe(e), this.result += t, this.checkpoint += 1, this;
};
bu.prototype.finish = function() {
  this.source.length > this.checkpoint && this.takeUpTo(this.source.length);
};
function _he(e, t, r) {
  var n, i, s, o, a, c, l, u, f, p, h, d, m, y, g, S, $, w, x, j, P;
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
  if (Ehe.indexOf(t) !== -1) {
    e.dump = "'" + t + "'";
    return;
  }
  for (n = !0, i = t.length ? t.charCodeAt(0) : 0, s = If === i || If === t.charCodeAt(t.length - 1), (dhe === i || vhe === i || ghe === i || Ohe === i) && (n = !1), s ? (n = !1, o = !1, a = !1) : (o = !0, a = !0), c = !0, l = new bu(t), u = !1, f = 0, p = 0, h = e.indent * r, d = 80, h < 40 ? d -= h : d = 40, y = 0; y < t.length; y++) {
    if (m = t.charCodeAt(y), n)
      if (!Rhe(m))
        n = !1;
      else
        continue;
    c && m === Ph && (c = !1), g = Fe[m], S = Iw(m), !(!g && !S) && (m !== pn && m !== Eh && m !== Ph ? (o = !1, a = !1) : m === pn && (u = !0, c = !1, y > 0 && ($ = t.charCodeAt(y - 1), $ === If && (a = !1, o = !1)), o && (w = y - f, f = y, w > p && (p = w))), m !== Eh && (c = !1), l.takeUpTo(y), l.escapeChar());
  }
  if (n && The(e, t) && (n = !1), x = "", (o || a) && (j = 0, t.charCodeAt(t.length - 1) === pn && (j += 1, t.charCodeAt(t.length - 2) === pn && (j += 1)), j === 0 ? x = "-" : j === 2 && (x = "+")), a && p < d && (o = !1), u || (a = !1), n)
    e.dump = t;
  else if (c)
    e.dump = "'" + t + "'";
  else if (o)
    P = Ihe(t, d), e.dump = ">" + x + `
` + Pb(P, h);
  else if (a)
    x || (t = t.replace(/\n$/, "")), e.dump = "|" + x + `
` + Pb(t, h);
  else if (l)
    l.finish(), e.dump = '"' + l.result + '"';
  else
    throw new Error("Failed to dump scalar value");
}
function Ihe(e, t) {
  var r = "", n = 0, i = e.length, s = /\n+$/.exec(e), o;
  for (s && (i = s.index + 1); n < i; )
    o = e.indexOf(`
`, n), o > i || o === -1 ? (r && (r += `

`), r += Ab(e.slice(n, i), t), n = i) : (r && (r += `

`), r += Ab(e.slice(n, o), t), n = o + 1);
  return s && s[0] !== `
` && (r += s[0]), r;
}
function Ab(e, t) {
  if (e === "")
    return e;
  for (var r = /[^\s] [^\s]/g, n = "", i = 0, s = 0, o = r.exec(e), a, c, l; o; )
    a = o.index, a - s > t && (i !== s ? c = i : c = a, n && (n += `
`), l = e.slice(s, c), n += l, s = c + 1), i = a + 1, o = r.exec(e);
  return n && (n += `
`), s !== i && e.length - s > t ? n += e.slice(s, i) + `
` + e.slice(i + 1) : n += e.slice(s), n;
}
function Rhe(e) {
  return ohe !== e && pn !== e && ahe !== e && hhe !== e && bhe !== e && $he !== e && She !== e && xhe !== e && lhe !== e && fhe !== e && phe !== e && che !== e && whe !== e && yhe !== e && Ph !== e && Eh !== e && uhe !== e && mhe !== e && !Fe[e] && !Iw(e);
}
function Iw(e) {
  return !(32 <= e && e <= 126 || e === 133 || 160 <= e && e <= 55295 || 57344 <= e && e <= 65533 || 65536 <= e && e <= 1114111);
}
function Fhe(e, t, r) {
  var n = "", i = e.tag, s, o;
  for (s = 0, o = r.length; s < o; s += 1)
    En(e, t, r[s], !1, !1) && (s !== 0 && (n += ", "), n += e.dump);
  e.tag = i, e.dump = "[" + n + "]";
}
function Vhe(e, t, r, n) {
  var i = "", s = e.tag, o, a;
  for (o = 0, a = r.length; o < a; o += 1)
    En(e, t + 1, r[o], !0, !0) && ((!n || o !== 0) && (i += Ah(e, t)), i += "- " + e.dump);
  e.tag = s, e.dump = i || "[]";
}
function Che(e, t, r) {
  var n = "", i = e.tag, s = Object.keys(r), o, a, c, l, u;
  for (o = 0, a = s.length; o < a; o += 1)
    u = "", o !== 0 && (u += ", "), c = s[o], l = r[c], En(e, t, c, !1, !1) && (e.dump.length > 1024 && (u += "? "), u += e.dump + ": ", En(e, t, l, !1, !1) && (u += e.dump, n += u));
  e.tag = i, e.dump = "{" + n + "}";
}
function Mhe(e, t, r, n) {
  var i = "", s = e.tag, o = Object.keys(r), a, c, l, u, f, p;
  for (a = 0, c = o.length; a < c; a += 1)
    p = "", (!n || a !== 0) && (p += Ah(e, t)), l = o[a], u = r[l], En(e, t + 1, l, !0, !0) && (f = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, f && (e.dump && pn === e.dump.charCodeAt(0) ? p += "?" : p += "? "), p += e.dump, f && (p += Ah(e, t)), En(e, t + 1, u, !0, f) && (e.dump && pn === e.dump.charCodeAt(0) ? p += ":" : p += ": ", p += e.dump, i += p));
  e.tag = s, e.dump = i || "{}";
}
function jb(e, t, r) {
  var n, i, s, o, a, c;
  for (i = r ? e.explicitTypes : e.implicitTypes, s = 0, o = i.length; s < o; s += 1)
    if (a = i[s], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof t == "object" && t instanceof a.instanceOf) && (!a.predicate || a.predicate(t))) {
      if (e.tag = r ? a.tag : "?", a.represent) {
        if (c = e.styleMap[a.tag] || a.defaultStyle, Nm.call(a.represent) === "[object Function]")
          n = a.represent(t, c);
        else if (_w.call(a.represent, c))
          n = a.represent[c](t, c);
        else
          throw new km("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        e.dump = n;
      }
      return !0;
    }
  return !1;
}
function En(e, t, r, n, i) {
  e.tag = null, e.dump = r, jb(e, r, !1) || jb(e, r, !0);
  var s = Nm.call(e.dump);
  n && (n = 0 > e.flowLevel || e.flowLevel > t), (e.tag !== null && e.tag !== "?" || e.indent !== 2 && t > 0) && (i = !1);
  var o = s === "[object Object]" || s === "[object Array]", a, c;
  if (o && (a = e.duplicates.indexOf(r), c = a !== -1), c && e.usedDuplicates[a])
    e.dump = "*ref_" + a;
  else {
    if (o && c && !e.usedDuplicates[a] && (e.usedDuplicates[a] = !0), s === "[object Object]")
      n && Object.keys(e.dump).length !== 0 ? (Mhe(e, t, e.dump, i), c && (e.dump = "&ref_" + a + (t === 0 ? `
` : "") + e.dump)) : (Che(e, t, e.dump), c && (e.dump = "&ref_" + a + " " + e.dump));
    else if (s === "[object Array]")
      n && e.dump.length !== 0 ? (Vhe(e, t, e.dump, i), c && (e.dump = "&ref_" + a + (t === 0 ? `
` : "") + e.dump)) : (Fhe(e, t, e.dump), c && (e.dump = "&ref_" + a + " " + e.dump));
    else if (s === "[object String]")
      e.tag !== "?" && _he(e, e.dump, t);
    else {
      if (e.skipInvalid)
        return !1;
      throw new km("unacceptable kind of an object to dump " + s);
    }
    e.tag !== null && e.tag !== "?" && (e.dump = "!<" + e.tag + "> " + e.dump);
  }
  return !0;
}
function khe(e, t) {
  var r = [], n = [], i, s;
  for (jh(e, r, n), i = 0, s = n.length; i < s; i += 1)
    t.duplicates.push(r[n[i]]);
  t.usedDuplicates = new Array(s);
}
function jh(e, t, r) {
  Nm.call(e);
  var n, i, s;
  if (e !== null && typeof e == "object")
    if (i = t.indexOf(e), i !== -1)
      r.indexOf(i) === -1 && r.push(i);
    else if (t.push(e), Array.isArray(e))
      for (i = 0, s = e.length; i < s; i += 1)
        jh(e[i], t, r);
    else
      for (n = Object.keys(e), i = 0, s = n.length; i < s; i += 1)
        jh(e[n[i]], t, r);
}
function Rw(e, t) {
  t = t || {};
  var r = new jhe(t);
  return khe(e, r), En(r, 0, e, !0, !0) ? r.dump + `
` : "";
}
gu.dump = Rw;
function Nhe(e, t) {
  return Rw(e, Vo.extend({ schema: she }, t));
}
gu.safeDump = Nhe;
var Fw = {};
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
})(Fw);
(function(e) {
  function t(i) {
    for (var s in i)
      e.hasOwnProperty(s) || (e[s] = i[s]);
  }
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = tr;
  e.load = r.load, e.loadAll = r.loadAll, e.safeLoad = r.safeLoad, e.safeLoadAll = r.safeLoadAll;
  var n = gu;
  e.dump = n.dump, e.safeDump = n.safeDump, e.YAMLException = Ro, t(rr), t(Fw);
})(jm);
Object.defineProperty(mu, "__esModule", { value: !0 });
mu.visitYaml = void 0;
const Me = jm;
function Zi(e, t, r, n) {
  const i = Lhe(e, r);
  if (r == null) {
    n.onValue(e, t, r, void 0, i);
    return;
  }
  if (r.kind === Me.Kind.MAP) {
    n.onObjectStart(e, t, r, i);
    for (const s of r.mappings)
      Zi(s, s.key.value, s.value, n);
    n.onObjectEnd();
  } else if (r.kind === Me.Kind.SEQ)
    n.onArrayStart(e, t, r, i), r.items.forEach((s, o) => {
      Zi(r, o, s, n);
    }), n.onArrayEnd();
  else if (r.kind === Me.Kind.ANCHOR_REF)
    Zi(e, t, r.value, n);
  else if (r.kind === Me.Kind.MAPPING)
    Zi(e, t, r.value, n);
  else if (r.kind === Me.Kind.SCALAR) {
    const [s, o] = Dhe(r), a = Bhe(s, r.value, o);
    n.onValue(e, t, o, a, i);
  }
}
mu.visitYaml = Zi;
function Dhe(e) {
  const t = (0, Me.determineScalarType)(e);
  return t === Me.ScalarType.int ? [t, (0, Me.parseYamlInteger)(e.value)] : t === Me.ScalarType.float ? [t, (0, Me.parseYamlFloat)(e.value)] : t === Me.ScalarType.bool ? [t, (0, Me.parseYamlBoolean)(e.value)] : t == Me.ScalarType.null ? [t, null] : [t, e.value];
}
function Lhe(e, t) {
  const r = e && e.kind === Me.Kind.MAPPING ? { start: e.key.startPosition, end: e.key.endPosition } : void 0;
  return t ? { key: r, value: { start: t.startPosition, end: t.endPosition } } : e && e.kind === Me.Kind.MAPPING ? { key: r, value: { start: e.key.endPosition, end: e.key.endPosition } } : { key: r, value: { start: 0, end: 0 } };
}
function Bhe(e, t, r) {
  return e === Me.ScalarType.int ? Uhe(t) : e === Me.ScalarType.float ? qhe(r) : t;
}
function Uhe(e) {
  e.indexOf("_") !== -1 && (e = e.replace(/_/g, ""));
  let t = BigInt(1);
  return (e[0] === "-" || e[0] === "+") && (e[0] === "-" && (t = BigInt(-1)), e = e.slice(1)), (t * BigInt(e)).toString();
}
function qhe(e) {
  const t = JSON.stringify(e);
  return t.includes("null") || t.includes("e") || t.includes("E") || t.includes(".") ? t : t + ".0";
}
var $u = {};
Object.defineProperty($u, "__esModule", { value: !0 });
$u.visitJson = void 0;
function Th(e, t, r, n) {
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
      Th(s, o.value, a, n);
    }
    n.onObjectEnd();
  } else
    r.type === "array" ? (n.onArrayStart(e, t, r, i), r.children.forEach((s, o) => {
      Th(r, o, s, n);
    }), n.onArrayEnd()) : n.onValue(e, t, r.value, r.rawValue, i);
}
$u.visitJson = Th;
var Ou = {};
function Su(e, t = !1) {
  const r = e.length;
  let n = 0, i = "", s = 0, o = 16, a = 0, c = 0, l = 0, u = 0, f = 0;
  function p($, w) {
    let x = 0, j = 0;
    for (; x < $ || !w; ) {
      let P = e.charCodeAt(n);
      if (P >= 48 && P <= 57)
        j = j * 16 + P - 48;
      else if (P >= 65 && P <= 70)
        j = j * 16 + P - 65 + 10;
      else if (P >= 97 && P <= 102)
        j = j * 16 + P - 97 + 10;
      else
        break;
      n++, x++;
    }
    return x < $ && (j = -1), j;
  }
  function h($) {
    n = $, i = "", s = 0, o = 16, f = 0;
  }
  function d() {
    let $ = n;
    if (e.charCodeAt(n) === 48)
      n++;
    else
      for (n++; n < e.length && Nn(e.charCodeAt(n)); )
        n++;
    if (n < e.length && e.charCodeAt(n) === 46)
      if (n++, n < e.length && Nn(e.charCodeAt(n)))
        for (n++; n < e.length && Nn(e.charCodeAt(n)); )
          n++;
      else
        return f = 3, e.substring($, n);
    let w = n;
    if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101))
      if (n++, (n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) && n++, n < e.length && Nn(e.charCodeAt(n))) {
        for (n++; n < e.length && Nn(e.charCodeAt(n)); )
          n++;
        w = n;
      } else
        f = 3;
    return e.substring($, w);
  }
  function m() {
    let $ = "", w = n;
    for (; ; ) {
      if (n >= r) {
        $ += e.substring(w, n), f = 2;
        break;
      }
      const x = e.charCodeAt(n);
      if (x === 34) {
        $ += e.substring(w, n), n++;
        break;
      }
      if (x === 92) {
        if ($ += e.substring(w, n), n++, n >= r) {
          f = 2;
          break;
        }
        switch (e.charCodeAt(n++)) {
          case 34:
            $ += '"';
            break;
          case 92:
            $ += "\\";
            break;
          case 47:
            $ += "/";
            break;
          case 98:
            $ += "\b";
            break;
          case 102:
            $ += "\f";
            break;
          case 110:
            $ += `
`;
            break;
          case 114:
            $ += "\r";
            break;
          case 116:
            $ += "	";
            break;
          case 117:
            const P = p(4, !0);
            P >= 0 ? $ += String.fromCharCode(P) : f = 4;
            break;
          default:
            f = 5;
        }
        w = n;
        continue;
      }
      if (x >= 0 && x <= 31)
        if (Yi(x)) {
          $ += e.substring(w, n), f = 2;
          break;
        } else
          f = 6;
      n++;
    }
    return $;
  }
  function y() {
    if (i = "", f = 0, s = n, c = a, u = l, n >= r)
      return s = r, o = 17;
    let $ = e.charCodeAt(n);
    if (Rf($)) {
      do
        n++, i += String.fromCharCode($), $ = e.charCodeAt(n);
      while (Rf($));
      return o = 15;
    }
    if (Yi($))
      return n++, i += String.fromCharCode($), $ === 13 && e.charCodeAt(n) === 10 && (n++, i += `
`), a++, l = n, o = 14;
    switch ($) {
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
          for (n += 2; n < r && !Yi(e.charCodeAt(n)); )
            n++;
          return i = e.substring(w, n), o = 12;
        }
        if (e.charCodeAt(n + 1) === 42) {
          n += 2;
          const x = r - 1;
          let j = !1;
          for (; n < x; ) {
            const P = e.charCodeAt(n);
            if (P === 42 && e.charCodeAt(n + 1) === 47) {
              n += 2, j = !0;
              break;
            }
            n++, Yi(P) && (P === 13 && e.charCodeAt(n) === 10 && n++, a++, l = n);
          }
          return j || (n++, f = 1), i = e.substring(w, n), o = 13;
        }
        return i += String.fromCharCode($), n++, o = 16;
      case 45:
        if (i += String.fromCharCode($), n++, n === r || !Nn(e.charCodeAt(n)))
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
        for (; n < r && g($); )
          n++, $ = e.charCodeAt(n);
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
        return i += String.fromCharCode($), n++, o = 16;
    }
  }
  function g($) {
    if (Rf($) || Yi($))
      return !1;
    switch ($) {
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
    let $;
    do
      $ = y();
    while ($ >= 12 && $ <= 15);
    return $;
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
function Rf(e) {
  return e === 32 || e === 9;
}
function Yi(e) {
  return e === 10 || e === 13;
}
function Nn(e) {
  return e >= 48 && e <= 57;
}
var Tb;
(function(e) {
  e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})(Tb || (Tb = {}));
function Vw(e, t, r) {
  let n, i, s, o, a;
  if (t) {
    for (o = t.offset, a = o + t.length, s = o; s > 0 && !Xa(e, s - 1); )
      s--;
    let $ = a;
    for (; $ < e.length && !Xa(e, $); )
      $++;
    i = e.substring(s, $), n = Hhe(i, r);
  } else
    i = e, n = 0, s = 0, o = 0, a = e.length;
  const c = Khe(r, e);
  let l = 0, u = 0, f;
  r.insertSpaces ? f = Dn(" ", r.tabSize || 4) : f = "	";
  let p = Su(i, !1), h = !1;
  function d() {
    return l > 1 ? Dn(c, l) + Dn(f, n + u) : c + Dn(f, n + u);
  }
  function m() {
    let $ = p.scan();
    for (l = 0; $ === 15 || $ === 14; )
      $ === 14 && r.keepLines ? l += 1 : $ === 14 && (l = 1), $ = p.scan();
    return h = $ === 16 || p.getTokenError() !== 0, $;
  }
  const y = [];
  function g($, w, x) {
    !h && (!t || w < a && x > o) && e.substring(w, x) !== $ && y.push({ offset: w, length: x - w, content: $ });
  }
  let S = m();
  if (r.keepLines && l > 0 && g(Dn(c, l), 0, 0), S !== 17) {
    let $ = p.getTokenOffset() + s, w = Dn(f, n);
    g(w, s, $);
  }
  for (; S !== 17; ) {
    let $ = p.getTokenOffset() + p.getTokenLength() + s, w = m(), x = "", j = !1;
    for (; l === 0 && (w === 12 || w === 13); ) {
      let C = p.getTokenOffset() + s;
      g(" ", $, C), $ = p.getTokenOffset() + p.getTokenLength() + s, j = w === 12, x = j ? d() : "", w = m();
    }
    if (w === 2)
      S !== 1 && u--, r.keepLines && l > 0 || !r.keepLines && S !== 1 ? x = d() : r.keepLines && (x = " ");
    else if (w === 4)
      S !== 3 && u--, r.keepLines && l > 0 || !r.keepLines && S !== 3 ? x = d() : r.keepLines && (x = " ");
    else {
      switch (S) {
        case 3:
        case 1:
          u++, r.keepLines && l > 0 || !r.keepLines ? x = d() : x = " ";
          break;
        case 5:
          r.keepLines && l > 0 || !r.keepLines ? x = d() : x = " ";
          break;
        case 12:
          x = d();
          break;
        case 13:
          l > 0 ? x = d() : j || (x = " ");
          break;
        case 6:
          r.keepLines && l > 0 ? x = d() : j || (x = " ");
          break;
        case 10:
          r.keepLines && l > 0 ? x = d() : w === 6 && !j && (x = "");
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          r.keepLines && l > 0 ? x = d() : (w === 12 || w === 13) && !j ? x = " " : w !== 5 && w !== 17 && (h = !0);
          break;
        case 16:
          h = !0;
          break;
      }
      l > 0 && (w === 12 || w === 13) && (x = d());
    }
    w === 17 && (r.keepLines && l > 0 ? x = d() : x = r.insertFinalNewline ? c : "");
    const P = p.getTokenOffset() + s;
    g(x, $, P), S = w;
  }
  return y;
}
function Dn(e, t) {
  let r = "";
  for (let n = 0; n < t; n++)
    r += e;
  return r;
}
function Hhe(e, t) {
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
function Khe(e, t) {
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
function Xa(e, t) {
  return `\r
`.indexOf(e.charAt(t)) !== -1;
}
var js;
(function(e) {
  e.DEFAULT = {
    allowTrailingComma: !1
  };
})(js || (js = {}));
function Ghe(e, t) {
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
    wu(e, {
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
        if (t < l || (a(c, l, u, Nw(c)), t <= l + u))
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
function Jhe(e, t = [], r = js.DEFAULT) {
  let n = null, i = [];
  const s = [];
  function o(c) {
    Array.isArray(i) ? i.push(c) : n !== null && (i[n] = c);
  }
  return wu(e, {
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
function Cw(e, t = [], r = js.DEFAULT) {
  let n = { type: "array", offset: -1, length: -1, children: [], parent: void 0 };
  function i(c) {
    n.type === "property" && (n.length = c - n.offset, n = n.parent);
  }
  function s(c) {
    return n.children.push(c), c;
  }
  wu(e, {
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
      s({ type: Nw(c), offset: l, length: u, parent: n, value: c }), i(l + u);
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
function _h(e, t) {
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
function Mw(e) {
  if (!e.parent || !e.parent.children)
    return [];
  const t = Mw(e.parent);
  if (e.parent.type === "property") {
    const r = e.parent.children[0].value;
    t.push(r);
  } else if (e.parent.type === "array") {
    const r = e.parent.children.indexOf(e);
    r !== -1 && t.push(r);
  }
  return t;
}
function Ih(e) {
  switch (e.type) {
    case "array":
      return e.children.map(Ih);
    case "object":
      const t = /* @__PURE__ */ Object.create(null);
      for (let r of e.children) {
        const n = r.children[1];
        n && (t[r.children[0].value] = Ih(n));
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
function Whe(e, t, r = !1) {
  return t >= e.offset && t < e.offset + e.length || r && t === e.offset + e.length;
}
function kw(e, t, r = !1) {
  if (Whe(e, t, r)) {
    const n = e.children;
    if (Array.isArray(n))
      for (let i = 0; i < n.length && n[i].offset <= t; i++) {
        const s = kw(n[i], t, r);
        if (s)
          return s;
      }
    return e;
  }
}
function wu(e, t, r = js.DEFAULT) {
  const n = Su(e, !1), i = [];
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
  const l = o(t.onObjectBegin), u = c(t.onObjectProperty), f = s(t.onObjectEnd), p = o(t.onArrayBegin), h = s(t.onArrayEnd), d = c(t.onLiteralValue), m = a(t.onSeparator), y = s(t.onComment), g = a(t.onError), S = r && r.disallowComments, $ = r && r.allowTrailingComma;
  function w() {
    for (; ; ) {
      const R = n.scan();
      switch (n.getTokenError()) {
        case 4:
          x(
            14
            /* ParseErrorCode.InvalidUnicode */
          );
          break;
        case 5:
          x(
            15
            /* ParseErrorCode.InvalidEscapeCharacter */
          );
          break;
        case 3:
          x(
            13
            /* ParseErrorCode.UnexpectedEndOfNumber */
          );
          break;
        case 1:
          S || x(
            11
            /* ParseErrorCode.UnexpectedEndOfComment */
          );
          break;
        case 2:
          x(
            12
            /* ParseErrorCode.UnexpectedEndOfString */
          );
          break;
        case 6:
          x(
            16
            /* ParseErrorCode.InvalidCharacter */
          );
          break;
      }
      switch (R) {
        case 12:
        case 13:
          S ? x(
            10
            /* ParseErrorCode.InvalidCommentToken */
          ) : y();
          break;
        case 16:
          x(
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
  function x(R, k = [], H = []) {
    if (g(R), k.length + H.length > 0) {
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
        isNaN(k) && (x(
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
  function C() {
    return n.getToken() !== 10 ? (x(3, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), !1) : (j(!1), n.getToken() === 6 ? (m(":"), w(), T() || x(4, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ])) : x(5, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), i.pop(), !0);
  }
  function v() {
    l(), w();
    let R = !1;
    for (; n.getToken() !== 2 && n.getToken() !== 17; ) {
      if (n.getToken() === 5) {
        if (R || x(4, [], []), m(","), w(), n.getToken() === 2 && $)
          break;
      } else
        R && x(6, [], []);
      C() || x(4, [], [
        2,
        5
        /* SyntaxKind.CommaToken */
      ]), R = !0;
    }
    return f(), n.getToken() !== 2 ? x(7, [
      2
      /* SyntaxKind.CloseBraceToken */
    ], []) : w(), !0;
  }
  function A() {
    p(), w();
    let R = !0, k = !1;
    for (; n.getToken() !== 4 && n.getToken() !== 17; ) {
      if (n.getToken() === 5) {
        if (k || x(4, [], []), m(","), w(), n.getToken() === 4 && $)
          break;
      } else
        k && x(6, [], []);
      R ? (i.push(0), R = !1) : i[i.length - 1]++, T() || x(4, [], [
        4,
        5
        /* SyntaxKind.CommaToken */
      ]), k = !0;
    }
    return h(), R || i.pop(), n.getToken() !== 4 ? x(8, [
      4
      /* SyntaxKind.CloseBracketToken */
    ], []) : w(), !0;
  }
  function T() {
    switch (n.getToken()) {
      case 3:
        return A();
      case 1:
        return v();
      case 10:
        return j(!0);
      default:
        return P();
    }
  }
  return w(), n.getToken() === 17 ? r.allowEmptyContent ? !0 : (x(4, [], []), !1) : T() ? (n.getToken() !== 17 && x(9, [], []), !0) : (x(4, [], []), !1);
}
function zhe(e, t) {
  let r = Su(e), n = [], i, s = 0, o;
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
function Nw(e) {
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
function Yhe(e, t, r, n) {
  const i = t.slice(), o = Cw(e, []);
  let a, c;
  for (; i.length > 0 && (c = i.pop(), a = _h(o, i), a === void 0 && r !== void 0); )
    typeof c == "string" ? r = { [c]: r } : r = [r];
  if (a)
    if (a.type === "object" && typeof c == "string" && Array.isArray(a.children)) {
      const l = _h(a, [c]);
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
          return nn(e, { offset: f, length: p - f, content: "" }, n);
        } else
          return nn(e, { offset: l.offset, length: l.length, content: JSON.stringify(r) }, n);
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
        return nn(e, p, n);
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
        return nn(e, f, n);
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
        return nn(e, p, n);
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
        return nn(e, u, n);
      } else
        throw new Error(`Can not ${r === void 0 ? "remove" : n.isArrayInsertion ? "insert" : "modify"} Array index ${l} as length is not sufficient`);
    } else
      throw new Error(`Can not add ${typeof c != "number" ? "index" : "property"} to parent of type ${a.type}`);
  else {
    if (r === void 0)
      throw new Error("Can not delete in empty document");
    return nn(e, { offset: o ? o.offset : 0, length: o ? o.length : 0, content: JSON.stringify(r) }, n);
  }
}
function nn(e, t, r) {
  if (!r.formattingOptions)
    return [t];
  let n = Rh(e, t), i = t.offset, s = t.offset + t.content.length;
  if (t.length === 0 || t.content.length === 0) {
    for (; i > 0 && !Xa(n, i - 1); )
      i--;
    for (; s < n.length && !Xa(n, s); )
      s++;
  }
  const o = Vw(n, { offset: i, length: s - i }, { ...r.formattingOptions, keepLines: !1 });
  for (let c = o.length - 1; c >= 0; c--) {
    const l = o[c];
    n = Rh(n, l), i = Math.min(i, l.offset), s = Math.max(s, l.offset + l.length), s += l.content.length - l.length;
  }
  const a = e.length - (n.length - s) - i;
  return [{ offset: i, length: a, content: n.substring(i, s) }];
}
function Rh(e, t) {
  return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
}
const Xhe = Su;
var Fh;
(function(e) {
  e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(Fh || (Fh = {}));
var Vh;
(function(e) {
  e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(Vh || (Vh = {}));
const Qhe = Ghe, Zhe = Jhe, ede = Cw, tde = _h, rde = kw, nde = Mw, ide = Ih, sde = wu, ode = zhe;
var Ch;
(function(e) {
  e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(Ch || (Ch = {}));
function ade(e) {
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
function cde(e, t, r) {
  return Vw(e, t, r);
}
function lde(e, t, r, n) {
  return Yhe(e, t, r, n);
}
function ude(e, t) {
  let r = t.slice(0).sort((i, s) => {
    const o = i.offset - s.offset;
    return o === 0 ? i.length - s.length : o;
  }), n = e.length;
  for (let i = r.length - 1; i >= 0; i--) {
    let s = r[i];
    if (s.offset + s.length <= n)
      e = Rh(e, s);
    else
      throw new Error("Overlapping edit");
    n = s.offset;
  }
  return e;
}
const fde = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ParseErrorCode() {
    return Ch;
  },
  get ScanError() {
    return Fh;
  },
  get SyntaxKind() {
    return Vh;
  },
  applyEdits: ude,
  createScanner: Xhe,
  findNodeAtLocation: tde,
  findNodeAtOffset: rde,
  format: cde,
  getLocation: Qhe,
  getNodePath: nde,
  getNodeValue: ide,
  modify: lde,
  parse: Zhe,
  parseTree: ede,
  printParseErrorCode: ade,
  stripComments: ode,
  visit: sde
}, Symbol.toStringTag, { value: "Module" })), Dw = /* @__PURE__ */ Vb(fde);
Object.defineProperty(Ou, "__esModule", { value: !0 });
Ou.parseTree = void 0;
const pde = Dw;
var Mh;
(function(e) {
  e.DEFAULT = {
    allowTrailingComma: !1
  };
})(Mh || (Mh = {}));
function hde(e) {
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
function dde(e) {
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
function mde(e, t = [], r = Mh.DEFAULT) {
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
        const u = dde(n.children);
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
        type: hde(c),
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
  (0, pde.visit)(e, o, r);
  const a = n.children[0];
  return a && delete a.parent, a;
}
Ou.parseTree = mde;
Object.defineProperty($i, "__esModule", { value: !0 });
$i.parseYaml = $i.parseJson = void 0;
const yde = mu, vde = $u, Ln = Oe, gde = Ou, bde = Dw, $de = jm, Ode = tn, Sde = Pe, _b = yu;
function wde(e) {
  return e.extendedError ? e.extendedError === 1 ? "DuplicateKey" : "<unknown ExtendedErrorCode>" : bde.printParseErrorCode(e.error);
}
function xde(e) {
  const t = [], r = (0, gde.parseTree)(e, t, {
    disallowComments: !0,
    allowTrailingComma: !1,
    allowEmptyContent: !1
  }), n = t.map((i) => ({
    message: wde(i),
    offset: i.offset,
    length: i.length
  }));
  return r ? [Lw(vde.visitJson, r), n] : [void 0, n];
}
$i.parseJson = xde;
function Ede(e, t) {
  const r = [];
  if ($de.loadAll(e, (i) => {
    r.push(i);
  }, { schema: Pde(t) }), r.length !== 1)
    return [void 0, []];
  const n = r[0].errors.map((i) => ({
    message: i.message,
    offset: i.mark ? i.mark.position : 0
  }));
  return r[0] ? [Lw(yde.visitYaml, r[0]), n] : [void 0, n];
}
$i.parseYaml = Ede;
function Pde(e) {
  if (!e)
    return _b;
  const t = Object.entries(e).map(([r, n]) => new Sde.Type(r, { kind: n }));
  return Ode.Schema.create(_b, t);
}
function Lw(e, t) {
  var r;
  let n = {};
  const i = [n];
  if (e(null, "fakeroot", t, {
    onObjectStart: (o, a, c, l) => {
      l && (0, Ln.setPreservedLocation)(n, a, l), i.push(n), n = n[a] = {};
    },
    onObjectEnd: () => {
      n = i.pop();
    },
    onArrayStart: (o, a, c, l) => {
      l && (0, Ln.setPreservedLocation)(n, a, l), i.push(n), n = n[a] = [];
    },
    onArrayEnd: () => {
      n = i.pop();
    },
    onValue: (o, a, c, l, u) => {
      n[a] = c, typeof c == "number" && l !== void 0 && (0, Ln.setPreservedValue)(n, a, l), u && (0, Ln.setPreservedLocation)(n, a, u);
    }
  }), typeof i[0].fakeroot != "object")
    return;
  const s = (r = (0, Ln.getPreservedLocation)(i[0], "fakeroot")) === null || r === void 0 ? void 0 : r.value;
  return (0, Ln.setPreservedRootRange)(i[0].fakeroot, s), i[0].fakeroot;
}
var xu = {};
Object.defineProperty(xu, "__esModule", { value: !0 });
xu.stringify = void 0;
const Bw = Io;
function Ade(e, t = 0) {
  return t === 0 ? jde(e) : Tde(e, t);
}
xu.stringify = Ade;
function jde(e) {
  if (!e)
    return JSON.stringify(e);
  const t = [];
  return (0, Bw.visitObject)(void 0, "fakeroot", e, {
    onObjectStart: (r, n, i) => {
      t.push(Fr(n, "{"));
    },
    onObjectEnd: () => {
      t[t.length - 1].endsWith(",") && Ir(t, 1), t.push("},");
    },
    onArrayStart: (r, n, i) => {
      t.push(Fr(n, "["));
    },
    onArrayEnd: () => {
      t[t.length - 1].endsWith(",") && Ir(t, 1), t.push("],");
    },
    onValue: (r, n, i, s) => {
      s !== void 0 ? t.push(Fr(n, s) + ",") : t.push(Fr(n, JSON.stringify(i)) + ",");
    }
  }), t[0] = t[0].slice(11), Ir(t, 1), t.join("");
}
function Tde(e, t) {
  if (!e)
    return JSON.stringify(e);
  const r = [];
  let n = 0;
  const i = [!0];
  return (0, Bw.visitObject)(void 0, "fakeroot", e, {
    onObjectStart: (s, o, a) => {
      r.push(Bn(t, n) + Fr(o, `{
`, !1)), i[i.length - 1] = !1, i.push(!0), n++;
    },
    onObjectEnd: () => {
      n--, i.pop() ? (Ir(r, 1), r.push(`},
`)) : (Ir(r, 2), r.push(`
` + Bn(t, n) + `},
`));
    },
    onArrayStart: (s, o, a) => {
      r.push(Bn(t, n) + Fr(o, `[
`, !1)), i[i.length - 1] = !1, i.push(!0), n++;
    },
    onArrayEnd: () => {
      n--, i.pop() ? (Ir(r, 1), r.push(`],
`)) : (Ir(r, 2), r.push(`
` + Bn(t, n) + `],
`));
    },
    onValue: (s, o, a, c) => {
      i[i.length - 1] = !1, c !== void 0 ? r.push(Bn(t, n) + Fr(o, c, !1) + `,
`) : r.push(Bn(t, n) + Fr(o, JSON.stringify(a), !1) + `,
`);
    }
  }), r[0] = r[0].slice(12), Ir(r, 2), r.join("");
}
function Ir(e, t) {
  const r = e.length - 1;
  e[r] = e[r].slice(0, -t);
}
function Fr(e, t, r = !0) {
  const n = r ? ":" : ": ";
  return typeof e == "string" ? JSON.stringify(e) + n + t : t;
}
function Bn(e, t) {
  return " ".repeat(e * t);
}
var Nr = {}, Vt = {};
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.find = Vt.findByPath = Vt.parseJsonPointer = Vt.joinJsonPointer = void 0;
const _de = /\//g, Ide = /~/g;
function Rde(e) {
  return typeof e == "number" ? String(e) : e.replace(Ide, "~0").replace(_de, "~1");
}
function Fde(e) {
  return e.length == 0 ? "" : "/" + e.map((t) => Rde(t)).join("/");
}
Vt.joinJsonPointer = Fde;
function Uw(e) {
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
Vt.parseJsonPointer = Uw;
function qw(e, t) {
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
Vt.findByPath = qw;
function Vde(e, t) {
  return qw(e, Uw(t));
}
Vt.find = Vde;
Object.defineProperty(Nr, "__esModule", { value: !0 });
Nr.findLocationForJsonPointer = Nr.findLocationForPath = Nr.findNodeAtOffset = void 0;
const Qa = Oe, Cde = Vt;
function Mde(e, t) {
  return t >= e.start && t <= e.end;
}
function kde(e, t) {
  const r = { value: (0, Qa.getPreservedRootRange)(e) };
  return Hw(e, t, [], r);
}
Nr.findNodeAtOffset = kde;
function Hw(e, t, r, n) {
  const i = Array.isArray(e) ? e.keys() : Object.keys(e);
  for (const s of i) {
    const o = (0, Qa.getPreservedLocation)(e, s);
    if (o && Mde(o.value, t)) {
      const a = e[s];
      return r.push(s), a !== null && typeof a == "object" ? Hw(a, t, r, o) : [a, r, o];
    }
  }
  return [e, r, n];
}
function Kw(e, t) {
  if (t.length === 0)
    return { value: (0, Qa.getPreservedRootRange)(e) };
  let r = e, n = 0;
  for (; n < t.length - 1 && r; )
    r = r[t[n]], n++;
  if (r)
    return (0, Qa.getPreservedLocation)(r, t[n]);
}
Nr.findLocationForPath = Kw;
function Nde(e, t) {
  return Kw(e, (0, Cde.parseJsonPointer)(t));
}
Nr.findLocationForJsonPointer = Nde;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.parseJsonPointer = e.joinJsonPointer = e.findLocationForPath = e.findByPath = e.findLocationForJsonPointer = e.find = e.findNodeAtOffset = e.getRootRange = e.getLocation = e.simpleClone = e.stringify = e.parseYaml = e.parseJson = e.parse = void 0;
  const t = du;
  Object.defineProperty(e, "simpleClone", { enumerable: !0, get: function() {
    return t.simpleClone;
  } });
  const r = $i;
  Object.defineProperty(e, "parseJson", { enumerable: !0, get: function() {
    return r.parseJson;
  } }), Object.defineProperty(e, "parseYaml", { enumerable: !0, get: function() {
    return r.parseYaml;
  } });
  const n = xu;
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
})(lw);
const Dde = /{{([\w.]+)}}/g, Ib = "secrets.";
function kh(e, t) {
  return e.replace(Dde, (r, n) => {
    if (n.startsWith(Ib)) {
      const i = n.substring(Ib.length, n.length);
      return t.secrets.hasOwnProperty(i) ? t.secrets[i] : r;
    }
    return t.default.hasOwnProperty(n) ? t.default[n] : r;
  });
}
async function Lde(e, t, r, n, i, s) {
  var f, p, h;
  const o = `${r}-${n}`, a = ax(t) ? Z.buildRequest({
    spec: await Bde(t, n, r, i),
    operationId: o,
    parameters: Kde(i.parameters),
    securities: Jde(
      ((f = t == null ? void 0 : t.components) == null ? void 0 : f.securitySchemes) || {},
      i.security,
      i.securityIndex,
      s
    ),
    requestContentType: (p = i.body) == null ? void 0 : p.mediaType,
    requestBody: Jw((h = i.body) == null ? void 0 : h.value, s)
  }) : Z.buildRequest({
    spec: await Ude(t),
    operationId: o,
    parameters: Gde(t, n, r, i, s),
    securities: Wde(
      (t == null ? void 0 : t.securityDefinitions) || {},
      i.security,
      i.securityIndex,
      s
    )
  }), [c, l] = Db(a.url), u = c && !e.insecureSslHostnames.includes(l);
  return {
    method: r,
    url: a.url,
    headers: a.headers,
    body: qde(a.body),
    config: {
      https: {
        rejectUnauthorized: u
      }
    }
  };
}
async function Bde(e, t, r, n, i) {
  const s = Hde(e.servers || [{ url: "http://localhost/" }], n.server), { spec: o, errors: a } = await Z.resolve({
    spec: JSON.parse(JSON.stringify({ ...e, servers: s }))
  });
  return o;
}
async function Ude(e, t, r, n, i) {
  const s = e.host || "localhost", { spec: o, errors: a } = await Z.resolve({
    spec: JSON.parse(JSON.stringify({ ...e, host: s }))
  });
  return o;
}
function qde(e) {
  return typeof e == "string" ? e : e instanceof FormData ? Array.from(e.entries()) : JSON.stringify(e);
}
function Hde(e, t) {
  return e.filter((r) => r.url === t);
}
function Kde(e) {
  const t = ["query", "header", "path", "cookie"], r = {};
  for (const n of t)
    for (const [i, s] of Object.entries(e[n] ?? {}))
      r[`${n}.${i}`] = s;
  return r;
}
function Gde(e, t, r, n, i) {
  var l;
  const s = ["query", "header", "path"], o = {};
  for (const u of s)
    for (const [f, p] of Object.entries(n.parameters[u] ?? {}))
      o[`${u}.${f}`] = p;
  const a = cx(e, t, r), c = Object.keys(a.body);
  if (c.length > 0) {
    const u = c[0];
    o[`body.${u}`] = Jw((l = n.body) == null ? void 0 : l.value, i);
  }
  return o;
}
function Jde(e, t, r, n) {
  const i = t[r];
  if (!i)
    return;
  const s = {};
  for (const o of Object.keys(i)) {
    const a = e[o], c = Gw(i[o], n);
    (a == null ? void 0 : a.type) === "oauth2" || (a == null ? void 0 : a.type) === "openIdConnect" ? s[o] = { token: { access_token: c } } : s[o] = c;
  }
  return { authorized: s };
}
function Wde(e, t, r, n) {
  const i = t[r];
  if (!i)
    return;
  const s = {};
  for (const o of Object.keys(i)) {
    const a = e[o], c = Gw(i[o], n);
    (a == null ? void 0 : a.type) === "oauth" ? s[o] = { token: { access_token: c } } : s[o] = c;
  }
  return { authorized: s };
}
function Gw(e, t) {
  return typeof e == "string" ? kh(e, t) : e;
}
function Jw(e, t) {
  return typeof e == "string" ? kh(e, t) : typeof e == "object" ? lw.simpleClone(e, (r) => typeof r == "string" ? kh(r, t) : r) : e;
}
function zde(e) {
  const t = Te.useRef({
    value: e,
    previous: e
  });
  return Te.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const Ww = "Checkbox", [Yde, Pye] = lx(Ww), [Xde, Qde] = Yde(Ww), Zde = /* @__PURE__ */ Te.forwardRef((e, t) => {
  const { __scopeCheckbox: r, name: n, checked: i, defaultChecked: s, required: o, disabled: a, value: c = "on", onCheckedChange: l, ...u } = e, [f, p] = Te.useState(null), h = ux(
    t,
    ($) => p($)
  ), d = Te.useRef(!1), m = f ? !!f.closest("form") : !0, [y = !1, g] = fx({
    prop: i,
    defaultProp: s,
    onChange: l
  }), S = Te.useRef(y);
  return Te.useEffect(() => {
    const $ = f == null ? void 0 : f.form;
    if ($) {
      const w = () => g(S.current);
      return $.addEventListener("reset", w), () => $.removeEventListener("reset", w);
    }
  }, [
    f,
    g
  ]), /* @__PURE__ */ Te.createElement(Xde, {
    scope: r,
    state: y,
    disabled: a
  }, /* @__PURE__ */ Te.createElement(Lb.button, Dh({
    type: "button",
    role: "checkbox",
    "aria-checked": $n(y) ? "mixed" : y,
    "aria-required": o,
    "data-state": zw(y),
    "data-disabled": a ? "" : void 0,
    disabled: a,
    value: c
  }, u, {
    ref: h,
    onKeyDown: Dm(e.onKeyDown, ($) => {
      $.key === "Enter" && $.preventDefault();
    }),
    onClick: Dm(e.onClick, ($) => {
      g(
        (w) => $n(w) ? !0 : !w
      ), m && (d.current = $.isPropagationStopped(), d.current || $.stopPropagation());
    })
  })), m && /* @__PURE__ */ Te.createElement(rme, {
    control: f,
    bubbles: !d.current,
    name: n,
    value: c,
    checked: y,
    required: o,
    disabled: a,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), eme = "CheckboxIndicator", tme = /* @__PURE__ */ Te.forwardRef((e, t) => {
  const { __scopeCheckbox: r, forceMount: n, ...i } = e, s = Qde(eme, r);
  return /* @__PURE__ */ Te.createElement(px, {
    present: n || $n(s.state) || s.state === !0
  }, /* @__PURE__ */ Te.createElement(Lb.span, Dh({
    "data-state": zw(s.state),
    "data-disabled": s.disabled ? "" : void 0
  }, i, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), rme = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...i } = e, s = Te.useRef(null), o = zde(r), a = hx(t);
  return Te.useEffect(() => {
    const c = s.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (o !== r && f) {
      const p = new Event("click", {
        bubbles: n
      });
      c.indeterminate = $n(r), f.call(c, $n(r) ? !1 : r), c.dispatchEvent(p);
    }
  }, [
    o,
    r,
    n
  ]), /* @__PURE__ */ Te.createElement("input", Dh({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: $n(r) ? !1 : r
  }, i, {
    tabIndex: -1,
    ref: s,
    style: {
      ...e.style,
      ...a,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $n(e) {
  return e === "indeterminate";
}
function zw(e) {
  return $n(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const nme = Zde, ime = tme;
function sme({ config: e }) {
  const t = Vx(), { control: r } = Tx(), n = _x({
    control: r,
    name: "server"
  }), [i, s] = Db(n), o = e.insecureSslHostnames.includes(s);
  return /* @__PURE__ */ Dr(cme, { children: [
    /* @__PURE__ */ ae("h4", { children: "SSL Settings" }),
    i && /* @__PURE__ */ Dr(Rb, { children: [
      /* @__PURE__ */ ae(
        ome,
        {
          checked: o,
          onCheckedChange: (a) => {
            t(a ? Ff({ type: "configSslIgnoreAdd", hostname: s }) : Ff({ type: "configSslIgnoreRemove", hostname: s }));
          },
          children: /* @__PURE__ */ ae(ame, { children: /* @__PURE__ */ ae(dx, {}) })
        }
      ),
      'Ignore SSL errors for "',
      s,
      '"'
    ] }),
    !i && /* @__PURE__ */ ae(Rb, { children: "SSL Settings are not available" })
  ] });
}
const ome = Et(nme)`
  margin-right: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${gt.checkboxBackground});
  border-radius: 4px;
  border-color: var(${gt.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, ame = Et(ime)`
  fill: var(${gt.checkboxForeground});
`, cme = Et.div`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`, Rb = Et.div`
  display: flex;
`;
function lme({ response: e }) {
  const t = Bb(), r = pme(e);
  return /* @__PURE__ */ ae(Nh, { children: /* @__PURE__ */ Dr(ume, { children: [
    /* @__PURE__ */ ae("h4", { children: "Modify OpenAPI file based on the response contents" }),
    /* @__PURE__ */ Dr(fme, { "aria-disabled": !r, children: [
      "Use response contents to generate JSON Schema",
      " ",
      /* @__PURE__ */ ae(
        hme,
        {
          disabled: !r,
          onClick: (n) => {
            n.preventDefault(), n.stopPropagation(), t(Mb({ response: JSON.parse(e.body) }));
          },
          children: "Generate schema"
        }
      )
    ] })
  ] }) });
}
const ume = Et.div`
  padding: 8px;
`, fme = Et.div.attrs((e) => ({
  color: e["aria-disabled"] ? `var(${gt.disabledForeground})` : "inherit"
}))`
  color: ${(e) => e.color};
`;
function pme(e) {
  for (const [t, r] of e.headers)
    if (t.toLowerCase() === "content-type" && r.includes("json") && e.body !== "")
      return !0;
  return !1;
}
const hme = Et.button`
  cursor: pointer;
  background-color: var(${gt.buttonBackground});
  color: var(${gt.buttonForeground});
  border: none;
  padding: 0.25rem 0.5rem;
  font-size: small;
`;
function dme() {
  const e = Qn((t) => t.tryit.response);
  return /* @__PURE__ */ ae(mme, { children: /* @__PURE__ */ ae(mx, { title: "Response", response: e, tools: /* @__PURE__ */ ae(lme, { response: e }) }) });
}
const mme = Et.div`
  margin: 8px;
  padding: 4px;
`;
function yme() {
  const e = Qn((t) => t.tryit.error);
  return e ? /* @__PURE__ */ Dr(gme, { children: [
    /* @__PURE__ */ ae(vme, { children: e.message }),
    e.sslError && /* @__PURE__ */ ae("div", { children: "Failed to establish secure connection. Try disabling SSL validation in Settings" })
  ] }) : null;
}
const vme = Et.div`
  border: 1px solid var(${gt.errorBorder});
  color: var(${gt.errorForeground});
  background-color: var(${gt.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
`, gme = Et.div`
  padding: 8px;
`;
function bme() {
  const e = Qn((t) => t.tryit.gerror);
  return e ? /* @__PURE__ */ ae(Ome, { children: /* @__PURE__ */ ae($me, { children: e.message }) }) : null;
}
const $me = Et.div`
  border: 1px solid var(${gt.errorBorder});
  color: var(${gt.errorForeground});
  background-color: var(${gt.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
`, Ome = Et.div`
  padding: 8px;
`;
function Sme() {
  const e = Bb(), { path: t, method: r, oas: n, defaultValues: i, tryitConfig: s, response: o, waiting: a } = Qn(
    (w) => w.tryit
  ), c = Qn((w) => w.prefs), l = Qn((w) => w.env.data), u = xme(n, c.tryitServer, i.server), f = {
    ...i,
    server: u,
    security: wme(i.security, c.security)
  }, p = yx(f), h = async (w) => {
    const x = $x(w);
    try {
      const j = await Lde(s, n, r, t, x, l), P = x.security[x.securityIndex];
      if (P)
        for (const [C, v] of Object.entries(P))
          typeof v == "string" && v.startsWith("{{") && v.endsWith("}}") && e(Nb({ scheme: C, secret: v }));
      e(kb(x.server)), e(Cb({ defaultValues: x, request: j }));
    } catch (j) {
      e(
        Ox({
          message: `Failed to build HTTP Request: ${j}`
        })
      );
    }
  }, [d, m] = Te.useState(!1);
  Te.useEffect(() => {
    m(o !== void 0);
  }, [o]);
  const y = Ix({
    reValidateMode: "onChange",
    values: p
  }), { handleSubmit: g, formState: S } = y, $ = Object.keys(S.errors || {}).length > 0;
  return /* @__PURE__ */ Dr(Nh, { children: [
    /* @__PURE__ */ Dr(Rx, { ...y, children: [
      /* @__PURE__ */ ae(
        vx,
        {
          method: r,
          path: t,
          servers: Ub(n),
          onSubmit: g(h),
          buttonText: "Send",
          waiting: a,
          submitDisabled: $
        }
      ),
      /* @__PURE__ */ ae(
        gx,
        {
          collapsed: d,
          title: "Request",
          onExpand: () => m(!1),
          children: /* @__PURE__ */ ae(
            bx,
            {
              oas: n,
              settings: /* @__PURE__ */ ae(sme, { config: s }),
              path: t,
              method: r
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ ae(yme, {}),
    /* @__PURE__ */ ae(bme, {}),
    o && /* @__PURE__ */ ae(dme, {})
  ] });
}
function wme(e, t) {
  const r = [];
  for (const n of e) {
    const i = {};
    for (const [s, o] of Object.entries(n))
      t[s] && typeof o == "string" ? i[s] = t[s] : i[s] = o;
    r.push(i);
  }
  return r;
}
function xme(e, t, r) {
  const i = Ub(e).some((s) => s === t);
  return t !== void 0 && t !== "" && i ? t : r;
}
const Fb = [
  {
    id: "tryit",
    title: "Try It",
    element: /* @__PURE__ */ ae(Sme, {}),
    when: qb
  }
], Eme = {
  changeTheme: ix,
  tryOperation: qb,
  showHttpResponse: Ex,
  showHttpError: Px,
  loadEnv: Fx,
  loadPrefs: Ax
};
function Pme() {
  return /* @__PURE__ */ Dr(Nh, { children: [
    /* @__PURE__ */ ae(nx, {}),
    /* @__PURE__ */ ae(xx, {})
  ] });
}
function Ame(e, t) {
  const r = Sx(Cx(e, Fb), t);
  Zw(document.getElementById("root")).render(
    /* @__PURE__ */ ae(ex.StrictMode, { children: /* @__PURE__ */ ae(tx, { store: r, children: /* @__PURE__ */ ae(wx.Provider, { value: Fb, children: /* @__PURE__ */ ae(Pme, {}) }) }) })
  ), window.addEventListener("message", rx(r, Eme));
}
window.renderWebView = Ame;
