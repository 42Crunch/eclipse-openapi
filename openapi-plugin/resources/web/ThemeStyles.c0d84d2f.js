function yp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l && Object.defineProperty(e, o, l.get ? l : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var nr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ul(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ky(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var o = [null];
        o.push.apply(o, arguments);
        var l = Function.bind.apply(t, o);
        return new l();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var gc = { exports: {} }, al = {}, wc = { exports: {} }, A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr = Symbol.for("react.element"), gp = Symbol.for("react.portal"), wp = Symbol.for("react.fragment"), Sp = Symbol.for("react.strict_mode"), kp = Symbol.for("react.profiler"), Ep = Symbol.for("react.provider"), xp = Symbol.for("react.context"), Pp = Symbol.for("react.forward_ref"), Cp = Symbol.for("react.suspense"), _p = Symbol.for("react.memo"), Op = Symbol.for("react.lazy"), Va = Symbol.iterator;
function Np(e) {
  return e === null || typeof e != "object" ? null : (e = Va && e[Va] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Sc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, kc = Object.assign, Ec = {};
function Yn(e, t, n) {
  this.props = e, this.context = t, this.refs = Ec, this.updater = n || Sc;
}
Yn.prototype.isReactComponent = {};
Yn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Yn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xc() {
}
xc.prototype = Yn.prototype;
function ju(e, t, n) {
  this.props = e, this.context = t, this.refs = Ec, this.updater = n || Sc;
}
var zu = ju.prototype = new xc();
zu.constructor = ju;
kc(zu, Yn.prototype);
zu.isPureReactComponent = !0;
var Wa = Array.isArray, Pc = Object.prototype.hasOwnProperty, Lu = { current: null }, Cc = { key: !0, ref: !0, __self: !0, __source: !0 };
function _c(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)
      Pc.call(t, r) && !Cc.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    o.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++)
      a[s] = arguments[s + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: Kr, type: e, key: l, ref: i, props: o, _owner: Lu.current };
}
function Tp(e, t) {
  return { $$typeof: Kr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ru(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kr;
}
function $p(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ha = /\/+/g;
function Zl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? $p("" + e.key) : t.toString(36);
}
function go(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Kr:
          case gp:
            i = !0;
        }
    }
  if (i)
    return i = e, o = o(i), e = r === "" ? "." + Zl(i, 0) : r, Wa(o) ? (n = "", e != null && (n = e.replace(Ha, "$&/") + "/"), go(o, t, n, "", function(s) {
      return s;
    })) : o != null && (Ru(o) && (o = Tp(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Ha, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Wa(e))
    for (var u = 0; u < e.length; u++) {
      l = e[u];
      var a = r + Zl(l, u);
      i += go(l, t, n, a, o);
    }
  else if (a = Np(e), typeof a == "function")
    for (e = a.call(e), u = 0; !(l = e.next()).done; )
      l = l.value, a = r + Zl(l, u++), i += go(l, t, n, a, o);
  else if (l === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function eo(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return go(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function jp(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var Ee = { current: null }, wo = { transition: null }, zp = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: wo, ReactCurrentOwner: Lu };
A.Children = { map: eo, forEach: function(e, t, n) {
  eo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return eo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return eo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ru(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
A.Component = Yn;
A.Fragment = wp;
A.Profiler = kp;
A.PureComponent = ju;
A.StrictMode = Sp;
A.Suspense = Cp;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zp;
A.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = kc({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = Lu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (a in t)
      Pc.call(t, a) && !Cc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1)
    r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++)
      u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: Kr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
A.createContext = function(e) {
  return e = { $$typeof: xp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ep, _context: e }, e.Consumer = e;
};
A.createElement = _c;
A.createFactory = function(e) {
  var t = _c.bind(null, e);
  return t.type = e, t;
};
A.createRef = function() {
  return { current: null };
};
A.forwardRef = function(e) {
  return { $$typeof: Pp, render: e };
};
A.isValidElement = Ru;
A.lazy = function(e) {
  return { $$typeof: Op, _payload: { _status: -1, _result: e }, _init: jp };
};
A.memo = function(e, t) {
  return { $$typeof: _p, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function(e) {
  var t = wo.transition;
  wo.transition = {};
  try {
    e();
  } finally {
    wo.transition = t;
  }
};
A.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
A.useCallback = function(e, t) {
  return Ee.current.useCallback(e, t);
};
A.useContext = function(e) {
  return Ee.current.useContext(e);
};
A.useDebugValue = function() {
};
A.useDeferredValue = function(e) {
  return Ee.current.useDeferredValue(e);
};
A.useEffect = function(e, t) {
  return Ee.current.useEffect(e, t);
};
A.useId = function() {
  return Ee.current.useId();
};
A.useImperativeHandle = function(e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function(e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function(e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
A.useMemo = function(e, t) {
  return Ee.current.useMemo(e, t);
};
A.useReducer = function(e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
A.useRef = function(e) {
  return Ee.current.useRef(e);
};
A.useState = function(e) {
  return Ee.current.useState(e);
};
A.useSyncExternalStore = function(e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function() {
  return Ee.current.useTransition();
};
A.version = "18.2.0";
wc.exports = A;
var Te = wc.exports;
const Oc = /* @__PURE__ */ ul(Te), by = /* @__PURE__ */ yp({
  __proto__: null,
  default: Oc
}, [Te]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lp = Te, Rp = Symbol.for("react.element"), Fp = Symbol.for("react.fragment"), Dp = Object.prototype.hasOwnProperty, Mp = Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ap = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nc(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    Dp.call(t, r) && !Ap.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Rp, type: e, key: l, ref: i, props: o, _owner: Mp.current };
}
al.Fragment = Fp;
al.jsx = Nc;
al.jsxs = Nc;
gc.exports = al;
var Ip = gc.exports, Tc = { exports: {} }, De = {}, $c = { exports: {} }, jc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(T, R) {
    var D = T.length;
    T.push(R);
    e:
      for (; 0 < D; ) {
        var m = D - 1 >>> 1, k = T[m];
        if (0 < o(k, R))
          T[m] = R, T[D] = k, D = m;
        else
          break e;
      }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0)
      return null;
    var R = T[0], D = T.pop();
    if (D !== R) {
      T[0] = D;
      e:
        for (var m = 0, k = T.length, S = k >>> 1; m < S; ) {
          var C = 2 * (m + 1) - 1, L = T[C], F = C + 1, M = T[F];
          if (0 > o(L, D))
            F < k && 0 > o(M, L) ? (T[m] = M, T[F] = D, m = F) : (T[m] = L, T[C] = D, m = C);
          else if (F < k && 0 > o(M, D))
            T[m] = M, T[F] = D, m = F;
          else
            break e;
        }
    }
    return R;
  }
  function o(T, R) {
    var D = T.sortIndex - R.sortIndex;
    return D !== 0 ? D : T.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function() {
      return l.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var a = [], s = [], d = 1, h = null, v = 3, y = !1, g = !1, w = !1, _ = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var R = n(s); R !== null; ) {
      if (R.callback === null)
        r(s);
      else if (R.startTime <= T)
        r(s), R.sortIndex = R.expirationTime, t(a, R);
      else
        break;
      R = n(s);
    }
  }
  function E(T) {
    if (w = !1, p(T), !g)
      if (n(a) !== null)
        g = !0, hn(P);
      else {
        var R = n(s);
        R !== null && Ct(E, R.startTime - T);
      }
  }
  function P(T, R) {
    g = !1, w && (w = !1, f(j), j = -1), y = !0;
    var D = v;
    try {
      for (p(R), h = n(a); h !== null && (!(h.expirationTime > R) || T && !le()); ) {
        var m = h.callback;
        if (typeof m == "function") {
          h.callback = null, v = h.priorityLevel;
          var k = m(h.expirationTime <= R);
          R = e.unstable_now(), typeof k == "function" ? h.callback = k : h === n(a) && r(a), p(R);
        } else
          r(a);
        h = n(a);
      }
      if (h !== null)
        var S = !0;
      else {
        var C = n(s);
        C !== null && Ct(E, C.startTime - R), S = !1;
      }
      return S;
    } finally {
      h = null, v = D, y = !1;
    }
  }
  var O = !1, N = null, j = -1, I = 5, z = -1;
  function le() {
    return !(e.unstable_now() - z < I);
  }
  function rt() {
    if (N !== null) {
      var T = e.unstable_now();
      z = T;
      var R = !0;
      try {
        R = N(!0, T);
      } finally {
        R ? Xt() : (O = !1, N = null);
      }
    } else
      O = !1;
  }
  var Xt;
  if (typeof c == "function")
    Xt = function() {
      c(rt);
    };
  else if (typeof MessageChannel < "u") {
    var Jn = new MessageChannel(), Pt = Jn.port2;
    Jn.port1.onmessage = rt, Xt = function() {
      Pt.postMessage(null);
    };
  } else
    Xt = function() {
      _(rt, 0);
    };
  function hn(T) {
    N = T, O || (O = !0, Xt());
  }
  function Ct(T, R) {
    j = _(function() {
      T(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    g || y || (g = !0, hn(P));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(T) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = v;
    }
    var D = v;
    v = R;
    try {
      return T();
    } finally {
      v = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, R) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var D = v;
    v = T;
    try {
      return R();
    } finally {
      v = D;
    }
  }, e.unstable_scheduleCallback = function(T, R, D) {
    var m = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? m + D : m) : D = m, T) {
      case 1:
        var k = -1;
        break;
      case 2:
        k = 250;
        break;
      case 5:
        k = 1073741823;
        break;
      case 4:
        k = 1e4;
        break;
      default:
        k = 5e3;
    }
    return k = D + k, T = { id: d++, callback: R, priorityLevel: T, startTime: D, expirationTime: k, sortIndex: -1 }, D > m ? (T.sortIndex = D, t(s, T), n(a) === null && T === n(s) && (w ? (f(j), j = -1) : w = !0, Ct(E, D - m))) : (T.sortIndex = k, t(a, T), g || y || (g = !0, hn(P))), T;
  }, e.unstable_shouldYield = le, e.unstable_wrapCallback = function(T) {
    var R = v;
    return function() {
      var D = v;
      v = R;
      try {
        return T.apply(this, arguments);
      } finally {
        v = D;
      }
    };
  };
})(jc);
$c.exports = jc;
var Bp = $c.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zc = Te, Re = Bp;
function x(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Lc = /* @__PURE__ */ new Set(), Cr = {};
function pn(e, t) {
  Bn(e, t), Bn(e + "Capture", t);
}
function Bn(e, t) {
  for (Cr[e] = t, e = 0; e < t.length; e++)
    Lc.add(t[e]);
}
var gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ji = Object.prototype.hasOwnProperty, Up = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Qa = {}, Ka = {};
function Vp(e) {
  return ji.call(Ka, e) ? !0 : ji.call(Qa, e) ? !1 : Up.test(e) ? Ka[e] = !0 : (Qa[e] = !0, !1);
}
function Wp(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hp(e, t, n, r) {
  if (t === null || typeof t > "u" || Wp(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function xe(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  pe[e] = new xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  pe[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  pe[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  pe[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  pe[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  pe[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  pe[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  pe[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  pe[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fu = /[\-:]([a-z])/g;
function Du(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Fu,
    Du
  );
  pe[t] = new xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Fu, Du);
  pe[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Fu, Du);
  pe[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  pe[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  pe[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mu(e, t, n, r) {
  var o = pe.hasOwnProperty(t) ? pe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Hp(t, n, o, r) && (n = null), r || o === null ? Vp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xt = zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, to = Symbol.for("react.element"), gn = Symbol.for("react.portal"), wn = Symbol.for("react.fragment"), Au = Symbol.for("react.strict_mode"), zi = Symbol.for("react.profiler"), Rc = Symbol.for("react.provider"), Fc = Symbol.for("react.context"), Iu = Symbol.for("react.forward_ref"), Li = Symbol.for("react.suspense"), Ri = Symbol.for("react.suspense_list"), Bu = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Dc = Symbol.for("react.offscreen"), ba = Symbol.iterator;
function rr(e) {
  return e === null || typeof e != "object" ? null : (e = ba && e[ba] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ee = Object.assign, Jl;
function fr(e) {
  if (Jl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Jl = t && t[1] || "";
    }
  return `
` + Jl + e;
}
var ql = !1;
function ei(e, t) {
  if (!e || ql)
    return "";
  ql = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (var o = s.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, u = l.length - 1; 1 <= i && 0 <= u && o[i] !== l[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (o[i] !== l[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || o[i] !== l[u]) {
                var a = `
` + o[i].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    ql = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? fr(e) : "";
}
function Qp(e) {
  switch (e.tag) {
    case 5:
      return fr(e.type);
    case 16:
      return fr("Lazy");
    case 13:
      return fr("Suspense");
    case 19:
      return fr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ei(e.type, !1), e;
    case 11:
      return e = ei(e.type.render, !1), e;
    case 1:
      return e = ei(e.type, !0), e;
    default:
      return "";
  }
}
function Fi(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case wn:
      return "Fragment";
    case gn:
      return "Portal";
    case zi:
      return "Profiler";
    case Au:
      return "StrictMode";
    case Li:
      return "Suspense";
    case Ri:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Fc:
        return (e.displayName || "Context") + ".Consumer";
      case Rc:
        return (e._context.displayName || "Context") + ".Provider";
      case Iu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Bu:
        return t = e.displayName || null, t !== null ? t : Fi(e.type) || "Memo";
      case Ot:
        t = e._payload, e = e._init;
        try {
          return Fi(e(t));
        } catch {
        }
    }
  return null;
}
function Kp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Fi(t);
    case 8:
      return t === Au ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function Wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Mc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function bp(e) {
  var t = Mc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(i) {
      r = "" + i, l.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function no(e) {
  e._valueTracker || (e._valueTracker = bp(e));
}
function Ac(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Mc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function $o(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Di(e, t) {
  var n = t.checked;
  return ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ya(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Wt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ic(e, t) {
  t = t.checked, t != null && Mu(e, "checked", t, !1);
}
function Mi(e, t) {
  Ic(e, t);
  var n = Wt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ai(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ai(e, t.type, Wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Xa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ai(e, t, n) {
  (t !== "number" || $o(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var dr = Array.isArray;
function $n(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ii(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(x(91));
  return ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ga(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(x(92));
      if (dr(n)) {
        if (1 < n.length)
          throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function Bc(e, t) {
  var n = Wt(t.value), r = Wt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Za(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Uc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Uc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ro, Vc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (ro = ro || document.createElement("div"), ro.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ro.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function _r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Yp = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function(e) {
  Yp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), mr[t] = mr[e];
  });
});
function Wc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mr.hasOwnProperty(e) && mr[e] ? ("" + t).trim() : t + "px";
}
function Hc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Wc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var Xp = ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ui(e, t) {
  if (t) {
    if (Xp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(x(62));
  }
}
function Vi(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Wi = null;
function Uu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Hi = null, jn = null, zn = null;
function Ja(e) {
  if (e = Xr(e)) {
    if (typeof Hi != "function")
      throw Error(x(280));
    var t = e.stateNode;
    t && (t = pl(t), Hi(e.stateNode, e.type, t));
  }
}
function Qc(e) {
  jn ? zn ? zn.push(e) : zn = [e] : jn = e;
}
function Kc() {
  if (jn) {
    var e = jn, t = zn;
    if (zn = jn = null, Ja(e), t)
      for (e = 0; e < t.length; e++)
        Ja(t[e]);
  }
}
function bc(e, t) {
  return e(t);
}
function Yc() {
}
var ti = !1;
function Xc(e, t, n) {
  if (ti)
    return e(t, n);
  ti = !0;
  try {
    return bc(e, t, n);
  } finally {
    ti = !1, (jn !== null || zn !== null) && (Yc(), Kc());
  }
}
function Or(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = pl(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(x(231, t, typeof n));
  return n;
}
var Qi = !1;
if (gt)
  try {
    var or = {};
    Object.defineProperty(or, "passive", { get: function() {
      Qi = !0;
    } }), window.addEventListener("test", or, or), window.removeEventListener("test", or, or);
  } catch {
    Qi = !1;
  }
function Gp(e, t, n, r, o, l, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (d) {
    this.onError(d);
  }
}
var yr = !1, jo = null, zo = !1, Ki = null, Zp = { onError: function(e) {
  yr = !0, jo = e;
} };
function Jp(e, t, n, r, o, l, i, u, a) {
  yr = !1, jo = null, Gp.apply(Zp, arguments);
}
function qp(e, t, n, r, o, l, i, u, a) {
  if (Jp.apply(this, arguments), yr) {
    if (yr) {
      var s = jo;
      yr = !1, jo = null;
    } else
      throw Error(x(198));
    zo || (zo = !0, Ki = s);
  }
}
function vn(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function qa(e) {
  if (vn(e) !== e)
    throw Error(x(188));
}
function ev(e) {
  var t = e.alternate;
  if (!t) {
    if (t = vn(e), t === null)
      throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var l = o.alternate;
    if (l === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n)
          return qa(o), e;
        if (l === r)
          return qa(o), t;
        l = l.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return)
      n = o, r = l;
    else {
      for (var i = !1, u = o.child; u; ) {
        if (u === n) {
          i = !0, n = o, r = l;
          break;
        }
        if (u === r) {
          i = !0, r = o, n = l;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = l.child; u; ) {
          if (u === n) {
            i = !0, n = l, r = o;
            break;
          }
          if (u === r) {
            i = !0, r = l, n = o;
            break;
          }
          u = u.sibling;
        }
        if (!i)
          throw Error(x(189));
      }
    }
    if (n.alternate !== r)
      throw Error(x(190));
  }
  if (n.tag !== 3)
    throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Zc(e) {
  return e = ev(e), e !== null ? Jc(e) : null;
}
function Jc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Jc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var qc = Re.unstable_scheduleCallback, es = Re.unstable_cancelCallback, tv = Re.unstable_shouldYield, nv = Re.unstable_requestPaint, re = Re.unstable_now, rv = Re.unstable_getCurrentPriorityLevel, Vu = Re.unstable_ImmediatePriority, ef = Re.unstable_UserBlockingPriority, Lo = Re.unstable_NormalPriority, ov = Re.unstable_LowPriority, tf = Re.unstable_IdlePriority, sl = null, at = null;
function lv(e) {
  if (at && typeof at.onCommitFiberRoot == "function")
    try {
      at.onCommitFiberRoot(sl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var et = Math.clz32 ? Math.clz32 : av, iv = Math.log, uv = Math.LN2;
function av(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (iv(e) / uv | 0) | 0;
}
var oo = 64, lo = 4194304;
function pr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ro(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? r = pr(u) : (l &= i, l !== 0 && (r = pr(l)));
  } else
    i = n & ~o, i !== 0 ? r = pr(i) : l !== 0 && (r = pr(l));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - et(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function sv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function cv(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - et(l), u = 1 << i, a = o[i];
    a === -1 ? (!(u & n) || u & r) && (o[i] = sv(u, t)) : a <= t && (e.expiredLanes |= u), l &= ~u;
  }
}
function bi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function nf() {
  var e = oo;
  return oo <<= 1, !(oo & 4194240) && (oo = 64), e;
}
function ni(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function br(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n;
}
function fv(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - et(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function Wu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var V = 0;
function rf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var of, Hu, lf, uf, af, Yi = !1, io = [], Rt = null, Ft = null, Dt = null, Nr = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map(), Tt = [], dv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ts(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Rt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ft = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
      break;
    case "pointerover":
    case "pointerout":
      Nr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Tr.delete(t.pointerId);
  }
}
function lr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Xr(t), t !== null && Hu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function pv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Rt = lr(Rt, e, t, n, r, o), !0;
    case "dragenter":
      return Ft = lr(Ft, e, t, n, r, o), !0;
    case "mouseover":
      return Dt = lr(Dt, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return Nr.set(l, lr(Nr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, Tr.set(l, lr(Tr.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function sf(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Gc(n), t !== null) {
          e.blockedOn = t, af(e.priority, function() {
            lf(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function So(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Wi = r, n.target.dispatchEvent(r), Wi = null;
    } else
      return t = Xr(n), t !== null && Hu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ns(e, t, n) {
  So(e) && n.delete(t);
}
function vv() {
  Yi = !1, Rt !== null && So(Rt) && (Rt = null), Ft !== null && So(Ft) && (Ft = null), Dt !== null && So(Dt) && (Dt = null), Nr.forEach(ns), Tr.forEach(ns);
}
function ir(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Yi || (Yi = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, vv)));
}
function $r(e) {
  function t(o) {
    return ir(o, e);
  }
  if (0 < io.length) {
    ir(io[0], e);
    for (var n = 1; n < io.length; n++) {
      var r = io[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Rt !== null && ir(Rt, e), Ft !== null && ir(Ft, e), Dt !== null && ir(Dt, e), Nr.forEach(t), Tr.forEach(t), n = 0; n < Tt.length; n++)
    r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); )
    sf(n), n.blockedOn === null && Tt.shift();
}
var Ln = xt.ReactCurrentBatchConfig, Fo = !0;
function hv(e, t, n, r) {
  var o = V, l = Ln.transition;
  Ln.transition = null;
  try {
    V = 1, Qu(e, t, n, r);
  } finally {
    V = o, Ln.transition = l;
  }
}
function mv(e, t, n, r) {
  var o = V, l = Ln.transition;
  Ln.transition = null;
  try {
    V = 4, Qu(e, t, n, r);
  } finally {
    V = o, Ln.transition = l;
  }
}
function Qu(e, t, n, r) {
  if (Fo) {
    var o = Xi(e, t, n, r);
    if (o === null)
      di(e, t, r, Do, n), ts(e, r);
    else if (pv(o, e, t, n, r))
      r.stopPropagation();
    else if (ts(e, r), t & 4 && -1 < dv.indexOf(e)) {
      for (; o !== null; ) {
        var l = Xr(o);
        if (l !== null && of(l), l = Xi(e, t, n, r), l === null && di(e, t, r, Do, n), l === o)
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else
      di(e, t, r, null, n);
  }
}
var Do = null;
function Xi(e, t, n, r) {
  if (Do = null, e = Uu(r), e = tn(e), e !== null)
    if (t = vn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Gc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Do = e, null;
}
function cf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (rv()) {
        case Vu:
          return 1;
        case ef:
          return 4;
        case Lo:
        case ov:
          return 16;
        case tf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zt = null, Ku = null, ko = null;
function ff() {
  if (ko)
    return ko;
  var e, t = Ku, n = t.length, r, o = "value" in zt ? zt.value : zt.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++)
    ;
  return ko = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Eo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function uo() {
  return !0;
}
function rs() {
  return !1;
}
function Me(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(l) : l[u]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? uo : rs, this.isPropagationStopped = rs, this;
  }
  return ee(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = uo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = uo);
  }, persist: function() {
  }, isPersistent: uo }), t;
}
var Xn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, bu = Me(Xn), Yr = ee({}, Xn, { view: 0, detail: 0 }), yv = Me(Yr), ri, oi, ur, cl = ee({}, Yr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Yu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ur && (ur && e.type === "mousemove" ? (ri = e.screenX - ur.screenX, oi = e.screenY - ur.screenY) : oi = ri = 0, ur = e), ri);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : oi;
} }), os = Me(cl), gv = ee({}, cl, { dataTransfer: 0 }), wv = Me(gv), Sv = ee({}, Yr, { relatedTarget: 0 }), li = Me(Sv), kv = ee({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ev = Me(kv), xv = ee({}, Xn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Pv = Me(xv), Cv = ee({}, Xn, { data: 0 }), ls = Me(Cv), _v = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Ov = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Nv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Tv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Nv[e]) ? !!t[e] : !1;
}
function Yu() {
  return Tv;
}
var $v = ee({}, Yr, { key: function(e) {
  if (e.key) {
    var t = _v[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Eo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ov[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Yu, charCode: function(e) {
  return e.type === "keypress" ? Eo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Eo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), jv = Me($v), zv = ee({}, cl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), is = Me(zv), Lv = ee({}, Yr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yu }), Rv = Me(Lv), Fv = ee({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Dv = Me(Fv), Mv = ee({}, cl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Av = Me(Mv), Iv = [9, 13, 27, 32], Xu = gt && "CompositionEvent" in window, gr = null;
gt && "documentMode" in document && (gr = document.documentMode);
var Bv = gt && "TextEvent" in window && !gr, df = gt && (!Xu || gr && 8 < gr && 11 >= gr), us = String.fromCharCode(32), as = !1;
function pf(e, t) {
  switch (e) {
    case "keyup":
      return Iv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function vf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Sn = !1;
function Uv(e, t) {
  switch (e) {
    case "compositionend":
      return vf(t);
    case "keypress":
      return t.which !== 32 ? null : (as = !0, us);
    case "textInput":
      return e = t.data, e === us && as ? null : e;
    default:
      return null;
  }
}
function Vv(e, t) {
  if (Sn)
    return e === "compositionend" || !Xu && pf(e, t) ? (e = ff(), ko = Ku = zt = null, Sn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return df && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ss(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wv[e.type] : t === "textarea";
}
function hf(e, t, n, r) {
  Qc(r), t = Mo(t, "onChange"), 0 < t.length && (n = new bu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var wr = null, jr = null;
function Hv(e) {
  _f(e, 0);
}
function fl(e) {
  var t = xn(e);
  if (Ac(t))
    return e;
}
function Qv(e, t) {
  if (e === "change")
    return t;
}
var mf = !1;
if (gt) {
  var ii;
  if (gt) {
    var ui = "oninput" in document;
    if (!ui) {
      var cs = document.createElement("div");
      cs.setAttribute("oninput", "return;"), ui = typeof cs.oninput == "function";
    }
    ii = ui;
  } else
    ii = !1;
  mf = ii && (!document.documentMode || 9 < document.documentMode);
}
function fs() {
  wr && (wr.detachEvent("onpropertychange", yf), jr = wr = null);
}
function yf(e) {
  if (e.propertyName === "value" && fl(jr)) {
    var t = [];
    hf(t, jr, e, Uu(e)), Xc(Hv, t);
  }
}
function Kv(e, t, n) {
  e === "focusin" ? (fs(), wr = t, jr = n, wr.attachEvent("onpropertychange", yf)) : e === "focusout" && fs();
}
function bv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fl(jr);
}
function Yv(e, t) {
  if (e === "click")
    return fl(t);
}
function Xv(e, t) {
  if (e === "input" || e === "change")
    return fl(t);
}
function Gv(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nt = typeof Object.is == "function" ? Object.is : Gv;
function zr(e, t) {
  if (nt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ji.call(t, o) || !nt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function ds(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function ps(e, t) {
  var n = ds(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ds(n);
  }
}
function gf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function wf() {
  for (var e = window, t = $o(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = $o(e.document);
  }
  return t;
}
function Gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Zv(e) {
  var t = wf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && gf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Gu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = ps(n, l);
        var i = ps(
          n,
          r
        );
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Jv = gt && "documentMode" in document && 11 >= document.documentMode, kn = null, Gi = null, Sr = null, Zi = !1;
function vs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zi || kn == null || kn !== $o(r) || (r = kn, "selectionStart" in r && Gu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Sr && zr(Sr, r) || (Sr = r, r = Mo(Gi, "onSelect"), 0 < r.length && (t = new bu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = kn)));
}
function ao(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var En = { animationend: ao("Animation", "AnimationEnd"), animationiteration: ao("Animation", "AnimationIteration"), animationstart: ao("Animation", "AnimationStart"), transitionend: ao("Transition", "TransitionEnd") }, ai = {}, Sf = {};
gt && (Sf = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
function dl(e) {
  if (ai[e])
    return ai[e];
  if (!En[e])
    return e;
  var t = En[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Sf)
      return ai[e] = t[n];
  return e;
}
var kf = dl("animationend"), Ef = dl("animationiteration"), xf = dl("animationstart"), Pf = dl("transitionend"), Cf = /* @__PURE__ */ new Map(), hs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Kt(e, t) {
  Cf.set(e, t), pn(t, [e]);
}
for (var si = 0; si < hs.length; si++) {
  var ci = hs[si], qv = ci.toLowerCase(), eh = ci[0].toUpperCase() + ci.slice(1);
  Kt(qv, "on" + eh);
}
Kt(kf, "onAnimationEnd");
Kt(Ef, "onAnimationIteration");
Kt(xf, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(Pf, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
pn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
pn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
pn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
pn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), th = new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));
function ms(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, qp(r, t, void 0, e), e.currentTarget = null;
}
function _f(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], a = u.instance, s = u.currentTarget;
          if (u = u.listener, a !== l && o.isPropagationStopped())
            break e;
          ms(o, u, s), l = a;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], a = u.instance, s = u.currentTarget, u = u.listener, a !== l && o.isPropagationStopped())
            break e;
          ms(o, u, s), l = a;
        }
    }
  }
  if (zo)
    throw e = Ki, zo = !1, Ki = null, e;
}
function Y(e, t) {
  var n = t[nu];
  n === void 0 && (n = t[nu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Of(t, e, 2, !1), n.add(r));
}
function fi(e, t, n) {
  var r = 0;
  t && (r |= 4), Of(n, e, r, t);
}
var so = "_reactListening" + Math.random().toString(36).slice(2);
function Lr(e) {
  if (!e[so]) {
    e[so] = !0, Lc.forEach(function(n) {
      n !== "selectionchange" && (th.has(n) || fi(n, !1, e), fi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[so] || (t[so] = !0, fi("selectionchange", !1, t));
  }
}
function Of(e, t, n, r) {
  switch (cf(t)) {
    case 1:
      var o = hv;
      break;
    case 4:
      o = mv;
      break;
    default:
      o = Qu;
  }
  n = o.bind(null, t, n, e), o = void 0, !Qi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function di(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === o || u.nodeType === 8 && u.parentNode === o)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var a = i.tag;
              if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = tn(u), i === null)
              return;
            if (a = i.tag, a === 5 || a === 6) {
              r = l = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  Xc(function() {
    var s = l, d = Uu(n), h = [];
    e: {
      var v = Cf.get(e);
      if (v !== void 0) {
        var y = bu, g = e;
        switch (e) {
          case "keypress":
            if (Eo(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = jv;
            break;
          case "focusin":
            g = "focus", y = li;
            break;
          case "focusout":
            g = "blur", y = li;
            break;
          case "beforeblur":
          case "afterblur":
            y = li;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = os;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = wv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Rv;
            break;
          case kf:
          case Ef:
          case xf:
            y = Ev;
            break;
          case Pf:
            y = Dv;
            break;
          case "scroll":
            y = yv;
            break;
          case "wheel":
            y = Av;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Pv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = is;
        }
        var w = (t & 4) !== 0, _ = !w && e === "scroll", f = w ? v !== null ? v + "Capture" : null : v;
        w = [];
        for (var c = s, p; c !== null; ) {
          p = c;
          var E = p.stateNode;
          if (p.tag === 5 && E !== null && (p = E, f !== null && (E = Or(c, f), E != null && w.push(Rr(c, E, p)))), _)
            break;
          c = c.return;
        }
        0 < w.length && (v = new y(v, g, null, n, d), h.push({ event: v, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", v && n !== Wi && (g = n.relatedTarget || n.fromElement) && (tn(g) || g[wt]))
          break e;
        if ((y || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = s, g = g ? tn(g) : null, g !== null && (_ = vn(g), g !== _ || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = s), y !== g)) {
          if (w = os, E = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = is, E = "onPointerLeave", f = "onPointerEnter", c = "pointer"), _ = y == null ? v : xn(y), p = g == null ? v : xn(g), v = new w(E, c + "leave", y, n, d), v.target = _, v.relatedTarget = p, E = null, tn(d) === s && (w = new w(f, c + "enter", g, n, d), w.target = p, w.relatedTarget = _, E = w), _ = E, y && g)
            t: {
              for (w = y, f = g, c = 0, p = w; p; p = yn(p))
                c++;
              for (p = 0, E = f; E; E = yn(E))
                p++;
              for (; 0 < c - p; )
                w = yn(w), c--;
              for (; 0 < p - c; )
                f = yn(f), p--;
              for (; c--; ) {
                if (w === f || f !== null && w === f.alternate)
                  break t;
                w = yn(w), f = yn(f);
              }
              w = null;
            }
          else
            w = null;
          y !== null && ys(h, v, y, w, !1), g !== null && _ !== null && ys(h, _, g, w, !0);
        }
      }
      e: {
        if (v = s ? xn(s) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file")
          var P = Qv;
        else if (ss(v))
          if (mf)
            P = Xv;
          else {
            P = bv;
            var O = Kv;
          }
        else
          (y = v.nodeName) && y.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (P = Yv);
        if (P && (P = P(e, s))) {
          hf(h, P, n, d);
          break e;
        }
        O && O(e, v, s), e === "focusout" && (O = v._wrapperState) && O.controlled && v.type === "number" && Ai(v, "number", v.value);
      }
      switch (O = s ? xn(s) : window, e) {
        case "focusin":
          (ss(O) || O.contentEditable === "true") && (kn = O, Gi = s, Sr = null);
          break;
        case "focusout":
          Sr = Gi = kn = null;
          break;
        case "mousedown":
          Zi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Zi = !1, vs(h, n, d);
          break;
        case "selectionchange":
          if (Jv)
            break;
        case "keydown":
        case "keyup":
          vs(h, n, d);
      }
      var N;
      if (Xu)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Sn ? pf(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j && (df && n.locale !== "ko" && (Sn || j !== "onCompositionStart" ? j === "onCompositionEnd" && Sn && (N = ff()) : (zt = d, Ku = "value" in zt ? zt.value : zt.textContent, Sn = !0)), O = Mo(s, j), 0 < O.length && (j = new ls(j, e, null, n, d), h.push({ event: j, listeners: O }), N ? j.data = N : (N = vf(n), N !== null && (j.data = N)))), (N = Bv ? Uv(e, n) : Vv(e, n)) && (s = Mo(s, "onBeforeInput"), 0 < s.length && (d = new ls("onBeforeInput", "beforeinput", null, n, d), h.push({ event: d, listeners: s }), d.data = N));
    }
    _f(h, t);
  });
}
function Rr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Mo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = Or(e, n), l != null && r.unshift(Rr(e, l, o)), l = Or(e, t), l != null && r.push(Rr(e, l, o))), e = e.return;
  }
  return r;
}
function yn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ys(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, s = u.stateNode;
    if (a !== null && a === r)
      break;
    u.tag === 5 && s !== null && (u = s, o ? (a = Or(n, l), a != null && i.unshift(Rr(n, a, u))) : o || (a = Or(n, l), a != null && i.push(Rr(n, a, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var nh = /\r\n?/g, rh = /\u0000|\uFFFD/g;
function gs(e) {
  return (typeof e == "string" ? e : "" + e).replace(nh, `
`).replace(rh, "");
}
function co(e, t, n) {
  if (t = gs(t), gs(e) !== t && n)
    throw Error(x(425));
}
function Ao() {
}
var Ji = null, qi = null;
function eu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var tu = typeof setTimeout == "function" ? setTimeout : void 0, oh = typeof clearTimeout == "function" ? clearTimeout : void 0, ws = typeof Promise == "function" ? Promise : void 0, lh = typeof queueMicrotask == "function" ? queueMicrotask : typeof ws < "u" ? function(e) {
  return ws.resolve(null).then(e).catch(ih);
} : tu;
function ih(e) {
  setTimeout(function() {
    throw e;
  });
}
function pi(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), $r(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  $r(t);
}
function Mt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function Ss(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gn = Math.random().toString(36).slice(2), ut = "__reactFiber$" + Gn, Fr = "__reactProps$" + Gn, wt = "__reactContainer$" + Gn, nu = "__reactEvents$" + Gn, uh = "__reactListeners$" + Gn, ah = "__reactHandles$" + Gn;
function tn(e) {
  var t = e[ut];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wt] || n[ut]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Ss(e); e !== null; ) {
          if (n = e[ut])
            return n;
          e = Ss(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Xr(e) {
  return e = e[ut] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function xn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(x(33));
}
function pl(e) {
  return e[Fr] || null;
}
var ru = [], Pn = -1;
function bt(e) {
  return { current: e };
}
function X(e) {
  0 > Pn || (e.current = ru[Pn], ru[Pn] = null, Pn--);
}
function b(e, t) {
  Pn++, ru[Pn] = e.current, e.current = t;
}
var Ht = {}, ge = bt(Ht), _e = bt(!1), un = Ht;
function Un(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n)
    o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Oe(e) {
  return e = e.childContextTypes, e != null;
}
function Io() {
  X(_e), X(ge);
}
function ks(e, t, n) {
  if (ge.current !== Ht)
    throw Error(x(168));
  b(ge, t), b(_e, n);
}
function Nf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(x(108, Kp(e) || "Unknown", o));
  return ee({}, n, r);
}
function Bo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ht, un = ge.current, b(ge, e), b(_e, _e.current), !0;
}
function Es(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(x(169));
  n ? (e = Nf(e, t, un), r.__reactInternalMemoizedMergedChildContext = e, X(_e), X(ge), b(ge, e)) : X(_e), b(_e, n);
}
var pt = null, vl = !1, vi = !1;
function Tf(e) {
  pt === null ? pt = [e] : pt.push(e);
}
function sh(e) {
  vl = !0, Tf(e);
}
function Yt() {
  if (!vi && pt !== null) {
    vi = !0;
    var e = 0, t = V;
    try {
      var n = pt;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      pt = null, vl = !1;
    } catch (o) {
      throw pt !== null && (pt = pt.slice(e + 1)), qc(Vu, Yt), o;
    } finally {
      V = t, vi = !1;
    }
  }
  return null;
}
var Cn = [], _n = 0, Uo = null, Vo = 0, Be = [], Ue = 0, an = null, vt = 1, ht = "";
function Jt(e, t) {
  Cn[_n++] = Vo, Cn[_n++] = Uo, Uo = e, Vo = t;
}
function $f(e, t, n) {
  Be[Ue++] = vt, Be[Ue++] = ht, Be[Ue++] = an, an = e;
  var r = vt;
  e = ht;
  var o = 32 - et(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - et(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, vt = 1 << 32 - et(t) + o | n << o | r, ht = l + e;
  } else
    vt = 1 << l | n << o | r, ht = e;
}
function Zu(e) {
  e.return !== null && (Jt(e, 1), $f(e, 1, 0));
}
function Ju(e) {
  for (; e === Uo; )
    Uo = Cn[--_n], Cn[_n] = null, Vo = Cn[--_n], Cn[_n] = null;
  for (; e === an; )
    an = Be[--Ue], Be[Ue] = null, ht = Be[--Ue], Be[Ue] = null, vt = Be[--Ue], Be[Ue] = null;
}
var Le = null, ze = null, Z = !1, Je = null;
function jf(e, t) {
  var n = Ve(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function xs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Le = e, ze = Mt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Le = e, ze = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = an !== null ? { id: vt, overflow: ht } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ve(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Le = e, ze = null, !0) : !1;
    default:
      return !1;
  }
}
function ou(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function lu(e) {
  if (Z) {
    var t = ze;
    if (t) {
      var n = t;
      if (!xs(e, t)) {
        if (ou(e))
          throw Error(x(418));
        t = Mt(n.nextSibling);
        var r = Le;
        t && xs(e, t) ? jf(r, n) : (e.flags = e.flags & -4097 | 2, Z = !1, Le = e);
      }
    } else {
      if (ou(e))
        throw Error(x(418));
      e.flags = e.flags & -4097 | 2, Z = !1, Le = e;
    }
  }
}
function Ps(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Le = e;
}
function fo(e) {
  if (e !== Le)
    return !1;
  if (!Z)
    return Ps(e), Z = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !eu(e.type, e.memoizedProps)), t && (t = ze)) {
    if (ou(e))
      throw zf(), Error(x(418));
    for (; t; )
      jf(e, t), t = Mt(t.nextSibling);
  }
  if (Ps(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ze = Mt(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ze = null;
    }
  } else
    ze = Le ? Mt(e.stateNode.nextSibling) : null;
  return !0;
}
function zf() {
  for (var e = ze; e; )
    e = Mt(e.nextSibling);
}
function Vn() {
  ze = Le = null, Z = !1;
}
function qu(e) {
  Je === null ? Je = [e] : Je.push(e);
}
var ch = xt.ReactCurrentBatchConfig;
function Ge(e, t) {
  if (e && e.defaultProps) {
    t = ee({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Wo = bt(null), Ho = null, On = null, ea = null;
function ta() {
  ea = On = Ho = null;
}
function na(e) {
  var t = Wo.current;
  X(Wo), e._currentValue = t;
}
function iu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Rn(e, t) {
  Ho = e, ea = On = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null);
}
function He(e) {
  var t = e._currentValue;
  if (ea !== e)
    if (e = { context: e, memoizedValue: t, next: null }, On === null) {
      if (Ho === null)
        throw Error(x(308));
      On = e, Ho.dependencies = { lanes: 0, firstContext: e };
    } else
      On = On.next = e;
  return t;
}
var nn = null;
function ra(e) {
  nn === null ? nn = [e] : nn.push(e);
}
function Lf(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ra(t)) : (n.next = o.next, o.next = n), t.interleaved = n, St(e, r);
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Nt = !1;
function oa(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Rf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function mt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function At(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, U & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, St(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, ra(r)) : (t.next = o.next, o.next = t), r.interleaved = t, St(e, n);
}
function xo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Wu(e, n);
  }
}
function Cs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? o = l = i : l = l.next = i, n = n.next;
      } while (n !== null);
      l === null ? o = l = t : l = l.next = t;
    } else
      o = l = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Qo(e, t, n, r) {
  var o = e.updateQueue;
  Nt = !1;
  var l = o.firstBaseUpdate, i = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var a = u, s = a.next;
    a.next = null, i === null ? l = s : i.next = s, i = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, u = d.lastBaseUpdate, u !== i && (u === null ? d.firstBaseUpdate = s : u.next = s, d.lastBaseUpdate = a));
  }
  if (l !== null) {
    var h = o.baseState;
    i = 0, d = s = a = null, u = l;
    do {
      var v = u.lane, y = u.eventTime;
      if ((r & v) === v) {
        d !== null && (d = d.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var g = e, w = u;
          switch (v = t, y = n, w.tag) {
            case 1:
              if (g = w.payload, typeof g == "function") {
                h = g.call(y, h, v);
                break e;
              }
              h = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = w.payload, v = typeof g == "function" ? g.call(y, h, v) : g, v == null)
                break e;
              h = ee({}, h, v);
              break e;
            case 2:
              Nt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = o.effects, v === null ? o.effects = [u] : v.push(u));
      } else
        y = { eventTime: y, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, d === null ? (s = d = y, a = h) : d = d.next = y, i |= v;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null)
          break;
        v = u, u = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null;
      }
    } while (1);
    if (d === null && (a = h), o.baseState = a, o.firstBaseUpdate = s, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else
      l === null && (o.shared.lanes = 0);
    cn |= i, e.lanes = i, e.memoizedState = h;
  }
}
function _s(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(x(191, o));
        o.call(r);
      }
    }
}
var Ff = new zc.Component().refs;
function uu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = { isMounted: function(e) {
  return (e = e._reactInternals) ? vn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), o = Bt(e), l = mt(r, o);
  l.payload = t, n != null && (l.callback = n), t = At(e, l, o), t !== null && (tt(t, e, o, r), xo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), o = Bt(e), l = mt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = At(e, l, o), t !== null && (tt(t, e, o, r), xo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ke(), r = Bt(e), o = mt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = At(e, o, r), t !== null && (tt(t, e, r, n), xo(t, e, r));
} };
function Os(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(o, l) : !0;
}
function Df(e, t, n) {
  var r = !1, o = Ht, l = t.contextType;
  return typeof l == "object" && l !== null ? l = He(l) : (o = Oe(t) ? un : ge.current, r = t.contextTypes, l = (r = r != null) ? Un(e, o) : Ht), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function Ns(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function au(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Ff, oa(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = He(l) : (l = Oe(t) ? un : ge.current, o.context = Un(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (uu(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && hl.enqueueReplaceState(o, o.state, null), Qo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ar(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(x(147, e));
      var o = r, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
        var u = o.refs;
        u === Ff && (u = o.refs = {}), i === null ? delete u[l] : u[l] = i;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string")
      throw Error(x(284));
    if (!n._owner)
      throw Error(x(290, e));
  }
  return e;
}
function po(e, t) {
  throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ts(e) {
  var t = e._init;
  return t(e._payload);
}
function Mf(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e)
      return null;
    for (; c !== null; )
      t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function o(f, c) {
    return f = Ut(f, c), f.index = 0, f.sibling = null, f;
  }
  function l(f, c, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, E) {
    return c === null || c.tag !== 6 ? (c = ki(p, f.mode, E), c.return = f, c) : (c = o(c, p), c.return = f, c);
  }
  function a(f, c, p, E) {
    var P = p.type;
    return P === wn ? d(f, c, p.props.children, E, p.key) : c !== null && (c.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Ot && Ts(P) === c.type) ? (E = o(c, p.props), E.ref = ar(f, c, p), E.return = f, E) : (E = To(p.type, p.key, p.props, null, f.mode, E), E.ref = ar(f, c, p), E.return = f, E);
  }
  function s(f, c, p, E) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Ei(p, f.mode, E), c.return = f, c) : (c = o(c, p.children || []), c.return = f, c);
  }
  function d(f, c, p, E, P) {
    return c === null || c.tag !== 7 ? (c = ln(p, f.mode, E, P), c.return = f, c) : (c = o(c, p), c.return = f, c);
  }
  function h(f, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = ki("" + c, f.mode, p), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case to:
          return p = To(c.type, c.key, c.props, null, f.mode, p), p.ref = ar(f, null, c), p.return = f, p;
        case gn:
          return c = Ei(c, f.mode, p), c.return = f, c;
        case Ot:
          var E = c._init;
          return h(f, E(c._payload), p);
      }
      if (dr(c) || rr(c))
        return c = ln(c, f.mode, p, null), c.return = f, c;
      po(f, c);
    }
    return null;
  }
  function v(f, c, p, E) {
    var P = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return P !== null ? null : u(f, c, "" + p, E);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case to:
          return p.key === P ? a(f, c, p, E) : null;
        case gn:
          return p.key === P ? s(f, c, p, E) : null;
        case Ot:
          return P = p._init, v(
            f,
            c,
            P(p._payload),
            E
          );
      }
      if (dr(p) || rr(p))
        return P !== null ? null : d(f, c, p, E, null);
      po(f, p);
    }
    return null;
  }
  function y(f, c, p, E, P) {
    if (typeof E == "string" && E !== "" || typeof E == "number")
      return f = f.get(p) || null, u(c, f, "" + E, P);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case to:
          return f = f.get(E.key === null ? p : E.key) || null, a(c, f, E, P);
        case gn:
          return f = f.get(E.key === null ? p : E.key) || null, s(c, f, E, P);
        case Ot:
          var O = E._init;
          return y(f, c, p, O(E._payload), P);
      }
      if (dr(E) || rr(E))
        return f = f.get(p) || null, d(c, f, E, P, null);
      po(c, E);
    }
    return null;
  }
  function g(f, c, p, E) {
    for (var P = null, O = null, N = c, j = c = 0, I = null; N !== null && j < p.length; j++) {
      N.index > j ? (I = N, N = null) : I = N.sibling;
      var z = v(f, N, p[j], E);
      if (z === null) {
        N === null && (N = I);
        break;
      }
      e && N && z.alternate === null && t(f, N), c = l(z, c, j), O === null ? P = z : O.sibling = z, O = z, N = I;
    }
    if (j === p.length)
      return n(f, N), Z && Jt(f, j), P;
    if (N === null) {
      for (; j < p.length; j++)
        N = h(f, p[j], E), N !== null && (c = l(N, c, j), O === null ? P = N : O.sibling = N, O = N);
      return Z && Jt(f, j), P;
    }
    for (N = r(f, N); j < p.length; j++)
      I = y(N, f, j, p[j], E), I !== null && (e && I.alternate !== null && N.delete(I.key === null ? j : I.key), c = l(I, c, j), O === null ? P = I : O.sibling = I, O = I);
    return e && N.forEach(function(le) {
      return t(f, le);
    }), Z && Jt(f, j), P;
  }
  function w(f, c, p, E) {
    var P = rr(p);
    if (typeof P != "function")
      throw Error(x(150));
    if (p = P.call(p), p == null)
      throw Error(x(151));
    for (var O = P = null, N = c, j = c = 0, I = null, z = p.next(); N !== null && !z.done; j++, z = p.next()) {
      N.index > j ? (I = N, N = null) : I = N.sibling;
      var le = v(f, N, z.value, E);
      if (le === null) {
        N === null && (N = I);
        break;
      }
      e && N && le.alternate === null && t(f, N), c = l(le, c, j), O === null ? P = le : O.sibling = le, O = le, N = I;
    }
    if (z.done)
      return n(
        f,
        N
      ), Z && Jt(f, j), P;
    if (N === null) {
      for (; !z.done; j++, z = p.next())
        z = h(f, z.value, E), z !== null && (c = l(z, c, j), O === null ? P = z : O.sibling = z, O = z);
      return Z && Jt(f, j), P;
    }
    for (N = r(f, N); !z.done; j++, z = p.next())
      z = y(N, f, j, z.value, E), z !== null && (e && z.alternate !== null && N.delete(z.key === null ? j : z.key), c = l(z, c, j), O === null ? P = z : O.sibling = z, O = z);
    return e && N.forEach(function(rt) {
      return t(f, rt);
    }), Z && Jt(f, j), P;
  }
  function _(f, c, p, E) {
    if (typeof p == "object" && p !== null && p.type === wn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case to:
          e: {
            for (var P = p.key, O = c; O !== null; ) {
              if (O.key === P) {
                if (P = p.type, P === wn) {
                  if (O.tag === 7) {
                    n(f, O.sibling), c = o(O, p.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (O.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Ot && Ts(P) === O.type) {
                  n(f, O.sibling), c = o(O, p.props), c.ref = ar(f, O, p), c.return = f, f = c;
                  break e;
                }
                n(f, O);
                break;
              } else
                t(f, O);
              O = O.sibling;
            }
            p.type === wn ? (c = ln(p.props.children, f.mode, E, p.key), c.return = f, f = c) : (E = To(p.type, p.key, p.props, null, f.mode, E), E.ref = ar(f, c, p), E.return = f, f = E);
          }
          return i(f);
        case gn:
          e: {
            for (O = p.key; c !== null; ) {
              if (c.key === O)
                if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                  n(f, c.sibling), c = o(c, p.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else
                t(f, c);
              c = c.sibling;
            }
            c = Ei(p, f.mode, E), c.return = f, f = c;
          }
          return i(f);
        case Ot:
          return O = p._init, _(f, c, O(p._payload), E);
      }
      if (dr(p))
        return g(f, c, p, E);
      if (rr(p))
        return w(f, c, p, E);
      po(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, p), c.return = f, f = c) : (n(f, c), c = ki(p, f.mode, E), c.return = f, f = c), i(f)) : n(f, c);
  }
  return _;
}
var Wn = Mf(!0), Af = Mf(!1), Gr = {}, st = bt(Gr), Dr = bt(Gr), Mr = bt(Gr);
function rn(e) {
  if (e === Gr)
    throw Error(x(174));
  return e;
}
function la(e, t) {
  switch (b(Mr, t), b(Dr, e), b(st, Gr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bi(t, e);
  }
  X(st), b(st, t);
}
function Hn() {
  X(st), X(Dr), X(Mr);
}
function If(e) {
  rn(Mr.current);
  var t = rn(st.current), n = Bi(t, e.type);
  t !== n && (b(Dr, e), b(st, n));
}
function ia(e) {
  Dr.current === e && (X(st), X(Dr));
}
var J = bt(0);
function Ko(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var hi = [];
function ua() {
  for (var e = 0; e < hi.length; e++)
    hi[e]._workInProgressVersionPrimary = null;
  hi.length = 0;
}
var Po = xt.ReactCurrentDispatcher, mi = xt.ReactCurrentBatchConfig, sn = 0, q = null, ie = null, ae = null, bo = !1, kr = !1, Ar = 0, fh = 0;
function ve() {
  throw Error(x(321));
}
function aa(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!nt(e[n], t[n]))
      return !1;
  return !0;
}
function sa(e, t, n, r, o, l) {
  if (sn = l, q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Po.current = e === null || e.memoizedState === null ? hh : mh, e = n(r, o), kr) {
    l = 0;
    do {
      if (kr = !1, Ar = 0, 25 <= l)
        throw Error(x(301));
      l += 1, ae = ie = null, t.updateQueue = null, Po.current = yh, e = n(r, o);
    } while (kr);
  }
  if (Po.current = Yo, t = ie !== null && ie.next !== null, sn = 0, ae = ie = q = null, bo = !1, t)
    throw Error(x(300));
  return e;
}
function ca() {
  var e = Ar !== 0;
  return Ar = 0, e;
}
function it() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ae === null ? q.memoizedState = ae = e : ae = ae.next = e, ae;
}
function Qe() {
  if (ie === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = ie.next;
  var t = ae === null ? q.memoizedState : ae.next;
  if (t !== null)
    ae = t, ie = e;
  else {
    if (e === null)
      throw Error(x(310));
    ie = e, e = { memoizedState: ie.memoizedState, baseState: ie.baseState, baseQueue: ie.baseQueue, queue: ie.queue, next: null }, ae === null ? q.memoizedState = ae = e : ae = ae.next = e;
  }
  return ae;
}
function Ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yi(e) {
  var t = Qe(), n = t.queue;
  if (n === null)
    throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = ie, o = r.baseQueue, l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = l.next, l.next = i;
    }
    r.baseQueue = o = l, n.pending = null;
  }
  if (o !== null) {
    l = o.next, r = r.baseState;
    var u = i = null, a = null, s = l;
    do {
      var d = s.lane;
      if ((sn & d) === d)
        a !== null && (a = a.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var h = {
          lane: d,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        a === null ? (u = a = h, i = r) : a = a.next = h, q.lanes |= d, cn |= d;
      }
      s = s.next;
    } while (s !== null && s !== l);
    a === null ? i = r : a.next = u, nt(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, q.lanes |= l, cn |= l, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function gi(e) {
  var t = Qe(), n = t.queue;
  if (n === null)
    throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      l = e(l, i.action), i = i.next;
    while (i !== o);
    nt(l, t.memoizedState) || (Ce = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function Bf() {
}
function Uf(e, t) {
  var n = q, r = Qe(), o = t(), l = !nt(r.memoizedState, o);
  if (l && (r.memoizedState = o, Ce = !0), r = r.queue, fa(Hf.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || ae !== null && ae.memoizedState.tag & 1) {
    if (n.flags |= 2048, Br(9, Wf.bind(null, n, r, o, t), void 0, null), se === null)
      throw Error(x(349));
    sn & 30 || Vf(n, t, o);
  }
  return o;
}
function Vf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Wf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Qf(t) && Kf(e);
}
function Hf(e, t, n) {
  return n(function() {
    Qf(t) && Kf(e);
  });
}
function Qf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function Kf(e) {
  var t = St(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function $s(e) {
  var t = it();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ir, lastRenderedState: e }, t.queue = e, e = e.dispatch = vh.bind(null, q, e), [t.memoizedState, e];
}
function Br(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function bf() {
  return Qe().memoizedState;
}
function Co(e, t, n, r) {
  var o = it();
  q.flags |= e, o.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r);
}
function ml(e, t, n, r) {
  var o = Qe();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ie !== null) {
    var i = ie.memoizedState;
    if (l = i.destroy, r !== null && aa(r, i.deps)) {
      o.memoizedState = Br(t, n, l, r);
      return;
    }
  }
  q.flags |= e, o.memoizedState = Br(1 | t, n, l, r);
}
function js(e, t) {
  return Co(8390656, 8, e, t);
}
function fa(e, t) {
  return ml(2048, 8, e, t);
}
function Yf(e, t) {
  return ml(4, 2, e, t);
}
function Xf(e, t) {
  return ml(4, 4, e, t);
}
function Gf(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Zf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ml(4, 4, Gf.bind(null, t, e), n);
}
function da() {
}
function Jf(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && aa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function qf(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && aa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ed(e, t, n) {
  return sn & 21 ? (nt(n, t) || (n = nf(), q.lanes |= n, cn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n);
}
function dh(e, t) {
  var n = V;
  V = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = mi.transition;
  mi.transition = {};
  try {
    e(!1), t();
  } finally {
    V = n, mi.transition = r;
  }
}
function td() {
  return Qe().memoizedState;
}
function ph(e, t, n) {
  var r = Bt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, nd(e))
    rd(t, n);
  else if (n = Lf(e, t, n, r), n !== null) {
    var o = ke();
    tt(n, e, r, o), od(n, t, r);
  }
}
function vh(e, t, n) {
  var r = Bt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nd(e))
    rd(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
      try {
        var i = t.lastRenderedState, u = l(i, n);
        if (o.hasEagerState = !0, o.eagerState = u, nt(u, i)) {
          var a = t.interleaved;
          a === null ? (o.next = o, ra(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Lf(e, t, o, r), n !== null && (o = ke(), tt(n, e, r, o), od(n, t, r));
  }
}
function nd(e) {
  var t = e.alternate;
  return e === q || t !== null && t === q;
}
function rd(e, t) {
  kr = bo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function od(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Wu(e, n);
  }
}
var Yo = { readContext: He, useCallback: ve, useContext: ve, useEffect: ve, useImperativeHandle: ve, useInsertionEffect: ve, useLayoutEffect: ve, useMemo: ve, useReducer: ve, useRef: ve, useState: ve, useDebugValue: ve, useDeferredValue: ve, useTransition: ve, useMutableSource: ve, useSyncExternalStore: ve, useId: ve, unstable_isNewReconciler: !1 }, hh = { readContext: He, useCallback: function(e, t) {
  return it().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: He, useEffect: js, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Co(
    4194308,
    4,
    Gf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Co(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Co(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = it();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = it();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ph.bind(null, q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = it();
  return e = { current: e }, t.memoizedState = e;
}, useState: $s, useDebugValue: da, useDeferredValue: function(e) {
  return it().memoizedState = e;
}, useTransition: function() {
  var e = $s(!1), t = e[0];
  return e = dh.bind(null, e[1]), it().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = q, o = it();
  if (Z) {
    if (n === void 0)
      throw Error(x(407));
    n = n();
  } else {
    if (n = t(), se === null)
      throw Error(x(349));
    sn & 30 || Vf(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, js(Hf.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, Br(9, Wf.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = it(), t = se.identifierPrefix;
  if (Z) {
    var n = ht, r = vt;
    n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ar++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = fh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, mh = {
  readContext: He,
  useCallback: Jf,
  useContext: He,
  useEffect: fa,
  useImperativeHandle: Zf,
  useInsertionEffect: Yf,
  useLayoutEffect: Xf,
  useMemo: qf,
  useReducer: yi,
  useRef: bf,
  useState: function() {
    return yi(Ir);
  },
  useDebugValue: da,
  useDeferredValue: function(e) {
    var t = Qe();
    return ed(t, ie.memoizedState, e);
  },
  useTransition: function() {
    var e = yi(Ir)[0], t = Qe().memoizedState;
    return [e, t];
  },
  useMutableSource: Bf,
  useSyncExternalStore: Uf,
  useId: td,
  unstable_isNewReconciler: !1
}, yh = { readContext: He, useCallback: Jf, useContext: He, useEffect: fa, useImperativeHandle: Zf, useInsertionEffect: Yf, useLayoutEffect: Xf, useMemo: qf, useReducer: gi, useRef: bf, useState: function() {
  return gi(Ir);
}, useDebugValue: da, useDeferredValue: function(e) {
  var t = Qe();
  return ie === null ? t.memoizedState = e : ed(t, ie.memoizedState, e);
}, useTransition: function() {
  var e = gi(Ir)[0], t = Qe().memoizedState;
  return [e, t];
}, useMutableSource: Bf, useSyncExternalStore: Uf, useId: td, unstable_isNewReconciler: !1 };
function Qn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Qp(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function wi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function su(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var gh = typeof WeakMap == "function" ? WeakMap : Map;
function ld(e, t, n) {
  n = mt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Go || (Go = !0, wu = r), su(e, t);
  }, n;
}
function id(e, t, n) {
  n = mt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      su(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    su(e, t), typeof r != "function" && (It === null ? It = /* @__PURE__ */ new Set([this]) : It.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function zs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gh();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = zh.bind(null, e, t, n), t.then(e, e));
}
function Ls(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Rs(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = mt(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e);
}
var wh = xt.ReactCurrentOwner, Ce = !1;
function Se(e, t, n, r) {
  t.child = e === null ? Af(t, null, n, r) : Wn(t, e.child, n, r);
}
function Fs(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return Rn(t, o), r = sa(e, t, n, r, l, o), n = ca(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (Z && n && Zu(t), t.flags |= 1, Se(e, t, r, o), t.child);
}
function Ds(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !Sa(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, ud(e, t, l, r, o)) : (e = To(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : zr, n(i, r) && e.ref === t.ref)
      return kt(e, t, o);
  }
  return t.flags |= 1, e = Ut(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ud(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (zr(l, r) && e.ref === t.ref)
      if (Ce = !1, t.pendingProps = r = l, (e.lanes & o) !== 0)
        e.flags & 131072 && (Ce = !0);
      else
        return t.lanes = e.lanes, kt(e, t, o);
  }
  return cu(e, t, n, r, o);
}
function ad(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, b(Tn, je), je |= n;
    else {
      if (!(n & 1073741824))
        return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, b(Tn, je), je |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, b(Tn, je), je |= r;
    }
  else
    l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, b(Tn, je), je |= r;
  return Se(e, t, o, n), t.child;
}
function sd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function cu(e, t, n, r, o) {
  var l = Oe(n) ? un : ge.current;
  return l = Un(t, l), Rn(t, o), n = sa(e, t, n, r, l, o), r = ca(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (Z && r && Zu(t), t.flags |= 1, Se(e, t, n, o), t.child);
}
function Ms(e, t, n, r, o) {
  if (Oe(n)) {
    var l = !0;
    Bo(t);
  } else
    l = !1;
  if (Rn(t, o), t.stateNode === null)
    _o(e, t), Df(t, n, r), au(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var a = i.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = He(s) : (s = Oe(n) ? un : ge.current, s = Un(t, s));
    var d = n.getDerivedStateFromProps, h = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== s) && Ns(t, i, r, s), Nt = !1;
    var v = t.memoizedState;
    i.state = v, Qo(t, r, i, o), a = t.memoizedState, u !== r || v !== a || _e.current || Nt ? (typeof d == "function" && (uu(t, n, d, r), a = t.memoizedState), (u = Nt || Os(t, n, u, r, v, a, s)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = s, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Rf(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : Ge(t.type, u), i.props = s, h = t.pendingProps, v = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = He(a) : (a = Oe(n) ? un : ge.current, a = Un(t, a));
    var y = n.getDerivedStateFromProps;
    (d = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || v !== a) && Ns(t, i, r, a), Nt = !1, v = t.memoizedState, i.state = v, Qo(t, r, i, o);
    var g = t.memoizedState;
    u !== h || v !== g || _e.current || Nt ? (typeof y == "function" && (uu(t, n, y, r), g = t.memoizedState), (s = Nt || Os(t, n, s, r, v, g, a) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = a, r = s) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return fu(e, t, n, r, l, o);
}
function fu(e, t, n, r, o, l) {
  sd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return o && Es(t, n, !1), kt(e, t, l);
  r = t.stateNode, wh.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Wn(t, e.child, null, l), t.child = Wn(t, null, u, l)) : Se(e, t, u, l), t.memoizedState = r.state, o && Es(t, n, !0), t.child;
}
function cd(e) {
  var t = e.stateNode;
  t.pendingContext ? ks(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ks(e, t.context, !1), la(e, t.containerInfo);
}
function As(e, t, n, r, o) {
  return Vn(), qu(o), t.flags |= 256, Se(e, t, n, r), t.child;
}
var du = { dehydrated: null, treeContext: null, retryLane: 0 };
function pu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fd(e, t, n) {
  var r = t.pendingProps, o = J.current, l = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), b(J, o & 1), e === null)
    return lu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = wl(i, r, 0, null), e = ln(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = pu(n), t.memoizedState = du, e) : pa(t, i));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null))
    return Sh(e, t, i, r, u, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, u = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Ut(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? l = Ut(u, l) : (l = ln(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? pu(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = du, r;
  }
  return l = e.child, e = l.sibling, r = Ut(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function pa(e, t) {
  return t = wl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function vo(e, t, n, r) {
  return r !== null && qu(r), Wn(t, e.child, null, n), e = pa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Sh(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = wi(Error(x(422))), vo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = wl({ mode: "visible", children: r.children }, o, 0, null), l = ln(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Wn(t, e.child, null, i), t.child.memoizedState = pu(i), t.memoizedState = du, l);
  if (!(t.mode & 1))
    return vo(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, l = Error(x(419)), r = wi(l, r, void 0), vo(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Ce || u) {
    if (r = se, r !== null) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, St(e, o), tt(r, e, o, -1));
    }
    return wa(), r = wi(Error(x(421))), vo(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Lh.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, ze = Mt(o.nextSibling), Le = t, Z = !0, Je = null, e !== null && (Be[Ue++] = vt, Be[Ue++] = ht, Be[Ue++] = an, vt = e.id, ht = e.overflow, an = t), t = pa(t, r.children), t.flags |= 4096, t);
}
function Is(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), iu(e.return, t, n);
}
function Si(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function dd(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (Se(e, t, r.children, n), r = J.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Is(e, n, t);
          else if (e.tag === 19)
            Is(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (b(J, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Ko(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Si(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Ko(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Si(t, !0, n, null, l);
        break;
      case "together":
        Si(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _o(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), cn |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Ut(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function kh(e, t, n) {
  switch (t.tag) {
    case 3:
      cd(t), Vn();
      break;
    case 5:
      If(t);
      break;
    case 1:
      Oe(t.type) && Bo(t);
      break;
    case 4:
      la(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      b(Wo, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (b(J, J.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? fd(e, t, n) : (b(J, J.current & 1), e = kt(e, t, n), e !== null ? e.sibling : null);
      b(J, J.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return dd(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), b(J, J.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ad(e, t, n);
  }
  return kt(e, t, n);
}
var pd, vu, vd, hd;
pd = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
vu = function() {
};
vd = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, rn(st.current);
    var l = null;
    switch (n) {
      case "input":
        o = Di(e, o), r = Di(e, r), l = [];
        break;
      case "select":
        o = ee({}, o, { value: void 0 }), r = ee({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = Ii(e, o), r = Ii(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ao);
    }
    Ui(n, r);
    var i;
    n = null;
    for (s in o)
      if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
        if (s === "style") {
          var u = o[s];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Cr.hasOwnProperty(s) ? l || (l = []) : (l = l || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (u = o != null ? o[s] : void 0, r.hasOwnProperty(s) && a !== u && (a != null || u != null))
        if (s === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in a)
              a.hasOwnProperty(i) && u[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
          } else
            n || (l || (l = []), l.push(
              s,
              n
            )), n = a;
        else
          s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (l = l || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Cr.hasOwnProperty(s) ? (a != null && s === "onScroll" && Y("scroll", e), l || u === a || (l = [])) : (l = l || []).push(s, a));
    }
    n && (l = l || []).push("style", n);
    var s = l;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
hd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function sr(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Eh(e, t, n) {
  var r = t.pendingProps;
  switch (Ju(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return he(t), null;
    case 1:
      return Oe(t.type) && Io(), he(t), null;
    case 3:
      return r = t.stateNode, Hn(), X(_e), X(ge), ua(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (fo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Je !== null && (Eu(Je), Je = null))), vu(e, t), he(t), null;
    case 5:
      ia(t);
      var o = rn(Mr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        vd(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(x(166));
          return he(t), null;
        }
        if (e = rn(st.current), fo(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[ut] = t, r[Fr] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < vr.length; o++)
                Y(vr[o], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y(
                "error",
                r
              ), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              Ya(r, l), Y("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, Y("invalid", r);
              break;
            case "textarea":
              Ga(r, l), Y("invalid", r);
          }
          Ui(n, l), o = null;
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && co(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && co(
                r.textContent,
                u,
                e
              ), o = ["children", "" + u]) : Cr.hasOwnProperty(i) && u != null && i === "onScroll" && Y("scroll", r);
            }
          switch (n) {
            case "input":
              no(r), Xa(r, l, !0);
              break;
            case "textarea":
              no(r), Za(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Ao);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Uc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ut] = t, e[Fr] = r, pd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Vi(n, r), n) {
              case "dialog":
                Y("cancel", e), Y("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < vr.length; o++)
                  Y(vr[o], e);
                o = r;
                break;
              case "source":
                Y("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Y(
                  "error",
                  e
                ), Y("load", e), o = r;
                break;
              case "details":
                Y("toggle", e), o = r;
                break;
              case "input":
                Ya(e, r), o = Di(e, r), Y("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ee({}, r, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                Ga(e, r), o = Ii(e, r), Y("invalid", e);
                break;
              default:
                o = r;
            }
            Ui(n, o), u = o;
            for (l in u)
              if (u.hasOwnProperty(l)) {
                var a = u[l];
                l === "style" ? Hc(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Vc(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && _r(e, a) : typeof a == "number" && _r(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Cr.hasOwnProperty(l) ? a != null && l === "onScroll" && Y("scroll", e) : a != null && Mu(e, l, a, i));
              }
            switch (n) {
              case "input":
                no(e), Xa(e, r, !1);
                break;
              case "textarea":
                no(e), Za(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? $n(e, !!r.multiple, l, !1) : r.defaultValue != null && $n(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ao);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null)
        hd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(x(166));
        if (n = rn(Mr.current), rn(st.current), fo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ut] = t, (l = r.nodeValue !== n) && (e = Le, e !== null))
            switch (e.tag) {
              case 3:
                co(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && co(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ut] = t, t.stateNode = r;
      }
      return he(t), null;
    case 13:
      if (X(J), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Z && ze !== null && t.mode & 1 && !(t.flags & 128))
          zf(), Vn(), t.flags |= 98560, l = !1;
        else if (l = fo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l)
              throw Error(x(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
              throw Error(x(317));
            l[ut] = t;
          } else
            Vn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          he(t), l = !1;
        } else
          Je !== null && (Eu(Je), Je = null), l = !0;
        if (!l)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || J.current & 1 ? ue === 0 && (ue = 3) : wa())), t.updateQueue !== null && (t.flags |= 4), he(t), null);
    case 4:
      return Hn(), vu(e, t), e === null && Lr(t.stateNode.containerInfo), he(t), null;
    case 10:
      return na(t.type._context), he(t), null;
    case 17:
      return Oe(t.type) && Io(), he(t), null;
    case 19:
      if (X(J), l = t.memoizedState, l === null)
        return he(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null)
        if (r)
          sr(l, !1);
        else {
          if (ue !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = Ko(e), i !== null) {
                for (t.flags |= 128, sr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return b(J, J.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null && re() > Kn && (t.flags |= 128, r = !0, sr(l, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Ko(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), sr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !Z)
              return he(t), null;
          } else
            2 * re() - l.renderingStartTime > Kn && n !== 1073741824 && (t.flags |= 128, r = !0, sr(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = re(), t.sibling = null, n = J.current, b(J, r ? n & 1 | 2 : n & 1), t) : (he(t), null);
    case 22:
    case 23:
      return ga(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? je & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function xh(e, t) {
  switch (Ju(t), t.tag) {
    case 1:
      return Oe(t.type) && Io(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Hn(), X(_e), X(ge), ua(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ia(t), null;
    case 13:
      if (X(J), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(x(340));
        Vn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return X(J), null;
    case 4:
      return Hn(), null;
    case 10:
      return na(t.type._context), null;
    case 22:
    case 23:
      return ga(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ho = !1, ye = !1, Ph = typeof WeakSet == "function" ? WeakSet : Set, $ = null;
function Nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        te(e, t, r);
      }
    else
      n.current = null;
}
function hu(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var Bs = !1;
function Ch(e, t) {
  if (Ji = Fo, e = wf(), Gu(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, a = -1, s = 0, d = 0, h = e, v = null;
          t:
            for (; ; ) {
              for (var y; h !== n || o !== 0 && h.nodeType !== 3 || (u = i + o), h !== l || r !== 0 && h.nodeType !== 3 || (a = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (y = h.firstChild) !== null; )
                v = h, h = y;
              for (; ; ) {
                if (h === e)
                  break t;
                if (v === n && ++s === o && (u = i), v === l && ++d === r && (a = i), (y = h.nextSibling) !== null)
                  break;
                h = v, v = h.parentNode;
              }
              h = y;
            }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (qi = { focusedElem: e, selectionRange: n }, Fo = !1, $ = t; $ !== null; )
    if (t = $, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, $ = e;
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps, _ = g.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ge(t.type, w), _);
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (E) {
          te(t, t.return, E);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, $ = e;
          break;
        }
        $ = t.return;
      }
  return g = Bs, Bs = !1, g;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && hu(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function yl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function mu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function md(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, md(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ut], delete t[Fr], delete t[nu], delete t[uh], delete t[ah])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function yd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Us(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || yd(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function yu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ao));
  else if (r !== 4 && (e = e.child, e !== null))
    for (yu(e, t, n), e = e.sibling; e !== null; )
      yu(e, t, n), e = e.sibling;
}
function gu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (gu(e, t, n), e = e.sibling; e !== null; )
      gu(e, t, n), e = e.sibling;
}
var fe = null, Ze = !1;
function _t(e, t, n) {
  for (n = n.child; n !== null; )
    gd(e, t, n), n = n.sibling;
}
function gd(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == "function")
    try {
      at.onCommitFiberUnmount(sl, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ye || Nn(n, t);
    case 6:
      var r = fe, o = Ze;
      fe = null, _t(e, t, n), fe = r, Ze = o, fe !== null && (Ze ? (e = fe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null && (Ze ? (e = fe, n = n.stateNode, e.nodeType === 8 ? pi(e.parentNode, n) : e.nodeType === 1 && pi(e, n), $r(e)) : pi(fe, n.stateNode));
      break;
    case 4:
      r = fe, o = Ze, fe = n.stateNode.containerInfo, Ze = !0, _t(e, t, n), fe = r, Ze = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && hu(n, t, i), o = o.next;
        } while (o !== r);
      }
      _t(e, t, n);
      break;
    case 1:
      if (!ye && (Nn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          te(n, t, u);
        }
      _t(e, t, n);
      break;
    case 21:
      _t(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null, _t(e, t, n), ye = r) : _t(e, t, n);
      break;
    default:
      _t(e, t, n);
  }
}
function Vs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ph()), t.forEach(function(r) {
      var o = Rh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Xe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e, i = t, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                fe = u.stateNode, Ze = !1;
                break e;
              case 3:
                fe = u.stateNode.containerInfo, Ze = !0;
                break e;
              case 4:
                fe = u.stateNode.containerInfo, Ze = !0;
                break e;
            }
            u = u.return;
          }
        if (fe === null)
          throw Error(x(160));
        gd(l, i, o), fe = null, Ze = !1;
        var a = o.alternate;
        a !== null && (a.return = null), o.return = null;
      } catch (s) {
        te(o, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      wd(t, e), t = t.sibling;
}
function wd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Xe(t, e), lt(e), r & 4) {
        try {
          Er(3, e, e.return), yl(3, e);
        } catch (w) {
          te(e, e.return, w);
        }
        try {
          Er(5, e, e.return);
        } catch (w) {
          te(e, e.return, w);
        }
      }
      break;
    case 1:
      Xe(t, e), lt(e), r & 512 && n !== null && Nn(n, n.return);
      break;
    case 5:
      if (Xe(t, e), lt(e), r & 512 && n !== null && Nn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          _r(o, "");
        } catch (w) {
          te(e, e.return, w);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            u === "input" && l.type === "radio" && l.name != null && Ic(o, l), Vi(u, i);
            var s = Vi(u, l);
            for (i = 0; i < a.length; i += 2) {
              var d = a[i], h = a[i + 1];
              d === "style" ? Hc(o, h) : d === "dangerouslySetInnerHTML" ? Vc(o, h) : d === "children" ? _r(o, h) : Mu(o, d, h, s);
            }
            switch (u) {
              case "input":
                Mi(o, l);
                break;
              case "textarea":
                Bc(o, l);
                break;
              case "select":
                var v = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var y = l.value;
                y != null ? $n(o, !!l.multiple, y, !1) : v !== !!l.multiple && (l.defaultValue != null ? $n(
                  o,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : $n(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Fr] = l;
          } catch (w) {
            te(e, e.return, w);
          }
      }
      break;
    case 6:
      if (Xe(t, e), lt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(x(162));
        o = e.stateNode, l = e.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (w) {
          te(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Xe(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          $r(t.containerInfo);
        } catch (w) {
          te(e, e.return, w);
        }
      break;
    case 4:
      Xe(t, e), lt(e);
      break;
    case 13:
      Xe(t, e), lt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (ma = re())), r & 4 && Vs(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (s = ye) || d, Xe(t, e), ye = s) : Xe(t, e), lt(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !d && e.mode & 1)
          for ($ = e, d = e.child; d !== null; ) {
            for (h = $ = d; $ !== null; ) {
              switch (v = $, y = v.child, v.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, v, v.return);
                  break;
                case 1:
                  Nn(v, v.return);
                  var g = v.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = v, n = v.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (w) {
                      te(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Nn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Hs(h);
                    continue;
                  }
              }
              y !== null ? (y.return = v, $ = y) : Hs(h);
            }
            d = d.sibling;
          }
        e:
          for (d = null, h = e; ; ) {
            if (h.tag === 5) {
              if (d === null) {
                d = h;
                try {
                  o = h.stateNode, s ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (u = h.stateNode, a = h.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Wc("display", i));
                } catch (w) {
                  te(e, e.return, w);
                }
              }
            } else if (h.tag === 6) {
              if (d === null)
                try {
                  h.stateNode.nodeValue = s ? "" : h.memoizedProps;
                } catch (w) {
                  te(e, e.return, w);
                }
            } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
              h.child.return = h, h = h.child;
              continue;
            }
            if (h === e)
              break e;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === e)
                break e;
              d === h && (d = null), h = h.return;
            }
            d === h && (d = null), h.sibling.return = h.return, h = h.sibling;
          }
      }
      break;
    case 19:
      Xe(t, e), lt(e), r & 4 && Vs(e);
      break;
    case 21:
      break;
    default:
      Xe(
        t,
        e
      ), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (_r(o, ""), r.flags &= -33);
          var l = Us(e);
          gu(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Us(e);
          yu(e, u, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (a) {
      te(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function _h(e, t, n) {
  $ = e, Sd(e);
}
function Sd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var o = $, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || ho;
      if (!i) {
        var u = o.alternate, a = u !== null && u.memoizedState !== null || ye;
        u = ho;
        var s = ye;
        if (ho = i, (ye = a) && !s)
          for ($ = o; $ !== null; )
            i = $, a = i.child, i.tag === 22 && i.memoizedState !== null ? Qs(o) : a !== null ? (a.return = i, $ = a) : Qs(o);
        for (; l !== null; )
          $ = l, Sd(l), l = l.sibling;
        $ = o, ho = u, ye = s;
      }
      Ws(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? (l.return = o, $ = l) : Ws(e);
  }
}
function Ws(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || yl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ye)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var l = t.updateQueue;
              l !== null && _s(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                _s(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var d = s.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && $r(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        ye || t.flags & 512 && mu(t);
      } catch (v) {
        te(t, t.return, v);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function Hs(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function Qs(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yl(4, t);
          } catch (a) {
            te(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              te(t, o, a);
            }
          }
          var l = t.return;
          try {
            mu(t);
          } catch (a) {
            te(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            mu(t);
          } catch (a) {
            te(t, i, a);
          }
      }
    } catch (a) {
      te(t, t.return, a);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, $ = u;
      break;
    }
    $ = t.return;
  }
}
var Oh = Math.ceil, Xo = xt.ReactCurrentDispatcher, va = xt.ReactCurrentOwner, We = xt.ReactCurrentBatchConfig, U = 0, se = null, oe = null, de = 0, je = 0, Tn = bt(0), ue = 0, Ur = null, cn = 0, gl = 0, ha = 0, xr = null, Pe = null, ma = 0, Kn = 1 / 0, dt = null, Go = !1, wu = null, It = null, mo = !1, Lt = null, Zo = 0, Pr = 0, Su = null, Oo = -1, No = 0;
function ke() {
  return U & 6 ? re() : Oo !== -1 ? Oo : Oo = re();
}
function Bt(e) {
  return e.mode & 1 ? U & 2 && de !== 0 ? de & -de : ch.transition !== null ? (No === 0 && (No = nf()), No) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : cf(e.type)), e) : 1;
}
function tt(e, t, n, r) {
  if (50 < Pr)
    throw Pr = 0, Su = null, Error(x(185));
  br(e, n, r), (!(U & 2) || e !== se) && (e === se && (!(U & 2) && (gl |= n), ue === 4 && $t(e, de)), Ne(e, r), n === 1 && U === 0 && !(t.mode & 1) && (Kn = re() + 500, vl && Yt()));
}
function Ne(e, t) {
  var n = e.callbackNode;
  cv(e, t);
  var r = Ro(e, e === se ? de : 0);
  if (r === 0)
    n !== null && es(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && es(n), t === 1)
      e.tag === 0 ? sh(Ks.bind(null, e)) : Tf(Ks.bind(null, e)), lh(function() {
        !(U & 6) && Yt();
      }), n = null;
    else {
      switch (rf(r)) {
        case 1:
          n = Vu;
          break;
        case 4:
          n = ef;
          break;
        case 16:
          n = Lo;
          break;
        case 536870912:
          n = tf;
          break;
        default:
          n = Lo;
      }
      n = Nd(n, kd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function kd(e, t) {
  if (Oo = -1, No = 0, U & 6)
    throw Error(x(327));
  var n = e.callbackNode;
  if (Fn() && e.callbackNode !== n)
    return null;
  var r = Ro(e, e === se ? de : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Jo(e, r);
  else {
    t = r;
    var o = U;
    U |= 2;
    var l = xd();
    (se !== e || de !== t) && (dt = null, Kn = re() + 500, on(e, t));
    do
      try {
        $h();
        break;
      } catch (u) {
        Ed(e, u);
      }
    while (1);
    ta(), Xo.current = l, U = o, oe !== null ? t = 0 : (se = null, de = 0, t = ue);
  }
  if (t !== 0) {
    if (t === 2 && (o = bi(e), o !== 0 && (r = o, t = ku(e, o))), t === 1)
      throw n = Ur, on(e, 0), $t(e, r), Ne(e, re()), n;
    if (t === 6)
      $t(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Nh(o) && (t = Jo(e, r), t === 2 && (l = bi(e), l !== 0 && (r = l, t = ku(e, l))), t === 1))
        throw n = Ur, on(e, 0), $t(e, r), Ne(e, re()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          qt(e, Pe, dt);
          break;
        case 3:
          if ($t(e, r), (r & 130023424) === r && (t = ma + 500 - re(), 10 < t)) {
            if (Ro(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              ke(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = tu(qt.bind(null, e, Pe, dt), t);
            break;
          }
          qt(e, Pe, dt);
          break;
        case 4:
          if ($t(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - et(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Oh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = tu(qt.bind(null, e, Pe, dt), r);
            break;
          }
          qt(e, Pe, dt);
          break;
        case 5:
          qt(e, Pe, dt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Ne(e, re()), e.callbackNode === n ? kd.bind(null, e) : null;
}
function ku(e, t) {
  var n = xr;
  return e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256), e = Jo(e, t), e !== 2 && (t = Pe, Pe = n, t !== null && Eu(t)), e;
}
function Eu(e) {
  Pe === null ? Pe = e : Pe.push.apply(Pe, e);
}
function Nh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], l = o.getSnapshot;
          o = o.value;
          try {
            if (!nt(l(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function $t(e, t) {
  for (t &= ~ha, t &= ~gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - et(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ks(e) {
  if (U & 6)
    throw Error(x(327));
  Fn();
  var t = Ro(e, 0);
  if (!(t & 1))
    return Ne(e, re()), null;
  var n = Jo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bi(e);
    r !== 0 && (t = r, n = ku(e, r));
  }
  if (n === 1)
    throw n = Ur, on(e, 0), $t(e, t), Ne(e, re()), n;
  if (n === 6)
    throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, qt(e, Pe, dt), Ne(e, re()), null;
}
function ya(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    U = n, U === 0 && (Kn = re() + 500, vl && Yt());
  }
}
function fn(e) {
  Lt !== null && Lt.tag === 0 && !(U & 6) && Fn();
  var t = U;
  U |= 1;
  var n = We.transition, r = V;
  try {
    if (We.transition = null, V = 1, e)
      return e();
  } finally {
    V = r, We.transition = n, U = t, !(U & 6) && Yt();
  }
}
function ga() {
  je = Tn.current, X(Tn);
}
function on(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, oh(n)), oe !== null)
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch (Ju(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Io();
          break;
        case 3:
          Hn(), X(_e), X(ge), ua();
          break;
        case 5:
          ia(r);
          break;
        case 4:
          Hn();
          break;
        case 13:
          X(J);
          break;
        case 19:
          X(J);
          break;
        case 10:
          na(r.type._context);
          break;
        case 22:
        case 23:
          ga();
      }
      n = n.return;
    }
  if (se = e, oe = e = Ut(e.current, null), de = je = t, ue = 0, Ur = null, ha = gl = cn = 0, Pe = xr = null, nn !== null) {
    for (t = 0; t < nn.length; t++)
      if (n = nn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, l = n.pending;
        if (l !== null) {
          var i = l.next;
          l.next = o, r.next = i;
        }
        n.pending = r;
      }
    nn = null;
  }
  return e;
}
function Ed(e, t) {
  do {
    var n = oe;
    try {
      if (ta(), Po.current = Yo, bo) {
        for (var r = q.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        bo = !1;
      }
      if (sn = 0, ae = ie = q = null, kr = !1, Ar = 0, va.current = null, n === null || n.return === null) {
        ue = 1, Ur = t, oe = null;
        break;
      }
      e: {
        var l = e, i = n.return, u = n, a = t;
        if (t = de, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var s = a, d = u, h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = d.alternate;
            v ? (d.updateQueue = v.updateQueue, d.memoizedState = v.memoizedState, d.lanes = v.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var y = Ls(i);
          if (y !== null) {
            y.flags &= -257, Rs(y, i, u, l, t), y.mode & 1 && zs(l, s, t), t = y, a = s;
            var g = t.updateQueue;
            if (g === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else
              g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              zs(l, s, t), wa();
              break e;
            }
            a = Error(x(426));
          }
        } else if (Z && u.mode & 1) {
          var _ = Ls(i);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), Rs(_, i, u, l, t), qu(Qn(a, u));
            break e;
          }
        }
        l = a = Qn(a, u), ue !== 4 && (ue = 2), xr === null ? xr = [l] : xr.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var f = ld(l, a, t);
              Cs(l, f);
              break e;
            case 1:
              u = a;
              var c = l.type, p = l.stateNode;
              if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (It === null || !It.has(p)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var E = id(l, u, t);
                Cs(l, E);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Cd(n);
    } catch (P) {
      t = P, oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function xd() {
  var e = Xo.current;
  return Xo.current = Yo, e === null ? Yo : e;
}
function wa() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4), se === null || !(cn & 268435455) && !(gl & 268435455) || $t(se, de);
}
function Jo(e, t) {
  var n = U;
  U |= 2;
  var r = xd();
  (se !== e || de !== t) && (dt = null, on(e, t));
  do
    try {
      Th();
      break;
    } catch (o) {
      Ed(e, o);
    }
  while (1);
  if (ta(), U = n, Xo.current = r, oe !== null)
    throw Error(x(261));
  return se = null, de = 0, ue;
}
function Th() {
  for (; oe !== null; )
    Pd(oe);
}
function $h() {
  for (; oe !== null && !tv(); )
    Pd(oe);
}
function Pd(e) {
  var t = Od(e.alternate, e, je);
  e.memoizedProps = e.pendingProps, t === null ? Cd(e) : oe = t, va.current = null;
}
function Cd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = xh(n, t), n !== null) {
        n.flags &= 32767, oe = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ue = 6, oe = null;
        return;
      }
    } else if (n = Eh(n, t, je), n !== null) {
      oe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function qt(e, t, n) {
  var r = V, o = We.transition;
  try {
    We.transition = null, V = 1, jh(e, t, n, r);
  } finally {
    We.transition = o, V = r;
  }
  return null;
}
function jh(e, t, n, r) {
  do
    Fn();
  while (Lt !== null);
  if (U & 6)
    throw Error(x(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (fv(e, l), e === se && (oe = se = null, de = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || mo || (mo = !0, Nd(Lo, function() {
    return Fn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = We.transition, We.transition = null;
    var i = V;
    V = 1;
    var u = U;
    U |= 4, va.current = null, Ch(e, n), wd(n, e), Zv(qi), Fo = !!Ji, qi = Ji = null, e.current = n, _h(n), nv(), U = u, V = i, We.transition = l;
  } else
    e.current = n;
  if (mo && (mo = !1, Lt = e, Zo = o), l = e.pendingLanes, l === 0 && (It = null), lv(n.stateNode), Ne(e, re()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Go)
    throw Go = !1, e = wu, wu = null, e;
  return Zo & 1 && e.tag !== 0 && Fn(), l = e.pendingLanes, l & 1 ? e === Su ? Pr++ : (Pr = 0, Su = e) : Pr = 0, Yt(), null;
}
function Fn() {
  if (Lt !== null) {
    var e = rf(Zo), t = We.transition, n = V;
    try {
      if (We.transition = null, V = 16 > e ? 16 : e, Lt === null)
        var r = !1;
      else {
        if (e = Lt, Lt = null, Zo = 0, U & 6)
          throw Error(x(331));
        var o = U;
        for (U |= 4, $ = e.current; $ !== null; ) {
          var l = $, i = l.child;
          if ($.flags & 16) {
            var u = l.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for ($ = s; $ !== null; ) {
                  var d = $;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, d, l);
                  }
                  var h = d.child;
                  if (h !== null)
                    h.return = d, $ = h;
                  else
                    for (; $ !== null; ) {
                      d = $;
                      var v = d.sibling, y = d.return;
                      if (md(d), d === s) {
                        $ = null;
                        break;
                      }
                      if (v !== null) {
                        v.return = y, $ = v;
                        break;
                      }
                      $ = y;
                    }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var _ = w.sibling;
                    w.sibling = null, w = _;
                  } while (w !== null);
                }
              }
              $ = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null)
            i.return = l, $ = i;
          else
            e:
              for (; $ !== null; ) {
                if (l = $, l.flags & 2048)
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(9, l, l.return);
                  }
                var f = l.sibling;
                if (f !== null) {
                  f.return = l.return, $ = f;
                  break e;
                }
                $ = l.return;
              }
        }
        var c = e.current;
        for ($ = c; $ !== null; ) {
          i = $;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null)
            p.return = i, $ = p;
          else
            e:
              for (i = c; $ !== null; ) {
                if (u = $, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yl(9, u);
                    }
                  } catch (P) {
                    te(u, u.return, P);
                  }
                if (u === i) {
                  $ = null;
                  break e;
                }
                var E = u.sibling;
                if (E !== null) {
                  E.return = u.return, $ = E;
                  break e;
                }
                $ = u.return;
              }
        }
        if (U = o, Yt(), at && typeof at.onPostCommitFiberRoot == "function")
          try {
            at.onPostCommitFiberRoot(sl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      V = n, We.transition = t;
    }
  }
  return !1;
}
function bs(e, t, n) {
  t = Qn(n, t), t = ld(e, t, 1), e = At(e, t, 1), t = ke(), e !== null && (br(e, 1, t), Ne(e, t));
}
function te(e, t, n) {
  if (e.tag === 3)
    bs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        bs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (It === null || !It.has(r))) {
          e = Qn(n, e), e = id(t, e, 1), t = At(t, e, 1), e = ke(), t !== null && (br(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ke(), e.pingedLanes |= e.suspendedLanes & n, se === e && (de & n) === n && (ue === 4 || ue === 3 && (de & 130023424) === de && 500 > re() - ma ? on(e, 0) : ha |= n), Ne(e, t);
}
function _d(e, t) {
  t === 0 && (e.mode & 1 ? (t = lo, lo <<= 1, !(lo & 130023424) && (lo = 4194304)) : t = 1);
  var n = ke();
  e = St(e, t), e !== null && (br(e, t, n), Ne(e, n));
}
function Lh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), _d(e, n);
}
function Rh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), _d(e, n);
}
var Od;
Od = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current)
      Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ce = !1, kh(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else
    Ce = !1, Z && t.flags & 1048576 && $f(t, Vo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      _o(e, t), e = t.pendingProps;
      var o = Un(t, ge.current);
      Rn(t, n), o = sa(null, t, r, e, o, n);
      var l = ca();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r) ? (l = !0, Bo(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, oa(t), o.updater = hl, t.stateNode = o, o._reactInternals = t, au(t, r, e, n), t = fu(null, t, r, !0, l, n)) : (t.tag = 0, Z && l && Zu(t), Se(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (_o(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Dh(r), e = Ge(r, e), o) {
          case 0:
            t = cu(null, t, r, e, n);
            break e;
          case 1:
            t = Ms(null, t, r, e, n);
            break e;
          case 11:
            t = Fs(null, t, r, e, n);
            break e;
          case 14:
            t = Ds(null, t, r, Ge(r.type, e), n);
            break e;
        }
        throw Error(x(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ge(r, o), cu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ge(r, o), Ms(e, t, r, o, n);
    case 3:
      e: {
        if (cd(t), e === null)
          throw Error(x(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, Rf(e, t), Qo(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated)
          if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            o = Qn(Error(x(423)), t), t = As(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Qn(Error(x(424)), t), t = As(e, t, r, n, o);
            break e;
          } else
            for (ze = Mt(t.stateNode.containerInfo.firstChild), Le = t, Z = !0, Je = null, n = Af(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Vn(), r === o) {
            t = kt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return If(t), e === null && lu(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, eu(r, o) ? i = null : l !== null && eu(r, l) && (t.flags |= 32), sd(e, t), Se(e, t, i, n), t.child;
    case 6:
      return e === null && lu(t), null;
    case 13:
      return fd(e, t, n);
    case 4:
      return la(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wn(t, null, r, n) : Se(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ge(r, o), Fs(e, t, r, o, n);
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, b(Wo, r._currentValue), r._currentValue = i, l !== null)
          if (nt(l.value, i)) {
            if (l.children === o.children && !_e.current) {
              t = kt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var u = l.dependencies;
              if (u !== null) {
                i = l.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      a = mt(-1, n & -n), a.tag = 2;
                      var s = l.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var d = s.pending;
                        d === null ? a.next = a : (a.next = d.next, d.next = a), s.pending = a;
                      }
                    }
                    l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), iu(
                      l.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10)
                i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (i = l.return, i === null)
                  throw Error(x(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), iu(i, n, t), i = l.sibling;
              } else
                i = l.child;
              if (i !== null)
                i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (l = i.sibling, l !== null) {
                    l.return = i.return, i = l;
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Se(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Rn(t, n), o = He(o), r = r(o), t.flags |= 1, Se(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Ge(r, t.pendingProps), o = Ge(r.type, o), Ds(e, t, r, o, n);
    case 15:
      return ud(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ge(r, o), _o(e, t), t.tag = 1, Oe(r) ? (e = !0, Bo(t)) : e = !1, Rn(t, n), Df(t, r, o), au(t, r, o, n), fu(null, t, r, !0, e, n);
    case 19:
      return dd(e, t, n);
    case 22:
      return ad(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Nd(e, t) {
  return qc(e, t);
}
function Fh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ve(e, t, n, r) {
  return new Fh(e, t, n, r);
}
function Sa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Dh(e) {
  if (typeof e == "function")
    return Sa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Iu)
      return 11;
    if (e === Bu)
      return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ve(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function To(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function")
    Sa(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case wn:
          return ln(n.children, o, l, t);
        case Au:
          i = 8, o |= 8;
          break;
        case zi:
          return e = Ve(12, n, t, o | 2), e.elementType = zi, e.lanes = l, e;
        case Li:
          return e = Ve(13, n, t, o), e.elementType = Li, e.lanes = l, e;
        case Ri:
          return e = Ve(19, n, t, o), e.elementType = Ri, e.lanes = l, e;
        case Dc:
          return wl(n, o, l, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Rc:
                i = 10;
                break e;
              case Fc:
                i = 9;
                break e;
              case Iu:
                i = 11;
                break e;
              case Bu:
                i = 14;
                break e;
              case Ot:
                i = 16, r = null;
                break e;
            }
          throw Error(x(130, e == null ? e : typeof e, ""));
      }
  return t = Ve(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function ln(e, t, n, r) {
  return e = Ve(7, e, r, t), e.lanes = n, e;
}
function wl(e, t, n, r) {
  return e = Ve(22, e, r, t), e.elementType = Dc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ki(e, t, n) {
  return e = Ve(6, e, null, t), e.lanes = n, e;
}
function Ei(e, t, n) {
  return t = Ve(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Mh(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ni(0), this.expirationTimes = ni(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ni(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ka(e, t, n, r, o, l, i, u, a) {
  return e = new Mh(e, t, n, u, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Ve(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, oa(l), e;
}
function Ah(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: gn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Td(e) {
  if (!e)
    return Ht;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1)
      throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n))
      return Nf(e, n, t);
  }
  return t;
}
function $d(e, t, n, r, o, l, i, u, a) {
  return e = ka(n, r, !0, e, o, l, i, u, a), e.context = Td(null), n = e.current, r = ke(), o = Bt(n), l = mt(r, o), l.callback = t ?? null, At(n, l, o), e.current.lanes = o, br(e, o, r), Ne(e, r), e;
}
function Sl(e, t, n, r) {
  var o = t.current, l = ke(), i = Bt(o);
  return n = Td(n), t.context === null ? t.context = n : t.pendingContext = n, t = mt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(o, t, i), e !== null && (tt(e, o, i, l), xo(e, o, i)), i;
}
function qo(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ys(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ea(e, t) {
  Ys(e, t), (e = e.alternate) && Ys(e, t);
}
function Ih() {
  return null;
}
var jd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function xa(e) {
  this._internalRoot = e;
}
kl.prototype.render = xa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(x(409));
  Sl(e, t, null, null);
};
kl.prototype.unmount = xa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fn(function() {
      Sl(null, e, null, null);
    }), t[wt] = null;
  }
};
function kl(e) {
  this._internalRoot = e;
}
kl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = uf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++)
      ;
    Tt.splice(n, 0, e), n === 0 && sf(e);
  }
};
function Pa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function El(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Xs() {
}
function Bh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var s = qo(i);
        l.call(s);
      };
    }
    var i = $d(t, r, e, 0, null, !1, !1, "", Xs);
    return e._reactRootContainer = i, e[wt] = i.current, Lr(e.nodeType === 8 ? e.parentNode : e), fn(), i;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var s = qo(a);
      u.call(s);
    };
  }
  var a = ka(e, 0, !1, null, null, !1, !1, "", Xs);
  return e._reactRootContainer = a, e[wt] = a.current, Lr(e.nodeType === 8 ? e.parentNode : e), fn(function() {
    Sl(t, a, n, r);
  }), a;
}
function xl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var a = qo(i);
        u.call(a);
      };
    }
    Sl(t, i, e, o);
  } else
    i = Bh(n, t, e, o, r);
  return qo(i);
}
of = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pr(t.pendingLanes);
        n !== 0 && (Wu(t, n | 1), Ne(t, re()), !(U & 6) && (Kn = re() + 500, Yt()));
      }
      break;
    case 13:
      fn(function() {
        var r = St(e, 1);
        if (r !== null) {
          var o = ke();
          tt(r, e, 1, o);
        }
      }), Ea(e, 1);
  }
};
Hu = function(e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = ke();
      tt(t, e, 134217728, n);
    }
    Ea(e, 134217728);
  }
};
lf = function(e) {
  if (e.tag === 13) {
    var t = Bt(e), n = St(e, t);
    if (n !== null) {
      var r = ke();
      tt(n, e, t, r);
    }
    Ea(e, t);
  }
};
uf = function() {
  return V;
};
af = function(e, t) {
  var n = V;
  try {
    return V = e, t();
  } finally {
    V = n;
  }
};
Hi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Mi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = pl(r);
            if (!o)
              throw Error(x(90));
            Ac(r), Mi(r, o);
          }
        }
      }
      break;
    case "textarea":
      Bc(e, n);
      break;
    case "select":
      t = n.value, t != null && $n(e, !!n.multiple, t, !1);
  }
};
bc = ya;
Yc = fn;
var Uh = { usingClientEntryPoint: !1, Events: [Xr, xn, pl, Qc, Kc, ya] }, cr = { findFiberByHostInstance: tn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Vh = { bundleType: cr.bundleType, version: cr.version, rendererPackageName: cr.rendererPackageName, rendererConfig: cr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: xt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Zc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: cr.findFiberByHostInstance || Ih, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yo.isDisabled && yo.supportsFiber)
    try {
      sl = yo.inject(Vh), at = yo;
    } catch {
    }
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uh;
De.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pa(t))
    throw Error(x(200));
  return Ah(e, t, null, n);
};
De.createRoot = function(e, t) {
  if (!Pa(e))
    throw Error(x(299));
  var n = !1, r = "", o = jd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ka(e, 1, !1, null, null, n, !1, r, o), e[wt] = t.current, Lr(e.nodeType === 8 ? e.parentNode : e), new xa(t);
};
De.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = Zc(t), e = e === null ? null : e.stateNode, e;
};
De.flushSync = function(e) {
  return fn(e);
};
De.hydrate = function(e, t, n) {
  if (!El(t))
    throw Error(x(200));
  return xl(null, e, t, !0, n);
};
De.hydrateRoot = function(e, t, n) {
  if (!Pa(e))
    throw Error(x(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = jd;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = $d(t, null, e, 1, n ?? null, o, !1, l, i), e[wt] = t.current, Lr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new kl(t);
};
De.render = function(e, t, n) {
  if (!El(t))
    throw Error(x(200));
  return xl(null, e, t, !1, n);
};
De.unmountComponentAtNode = function(e) {
  if (!El(e))
    throw Error(x(40));
  return e._reactRootContainer ? (fn(function() {
    xl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wt] = null;
    });
  }), !0) : !1;
};
De.unstable_batchedUpdates = ya;
De.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!El(n))
    throw Error(x(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(x(38));
  return xl(e, t, n, !1, r);
};
De.version = "18.2.0-next-9e3b772b8-20220608";
function zd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zd);
    } catch (e) {
      console.error(e);
    }
}
zd(), Tc.exports = De;
var Ca = Tc.exports;
const Yy = /* @__PURE__ */ ul(Ca);
var Wh, Gs = Ca;
Wh = Gs.createRoot, Gs.hydrateRoot;
var Ld = { exports: {} }, Rd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn = Te;
function Hh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Qh = typeof Object.is == "function" ? Object.is : Hh, Kh = bn.useState, bh = bn.useEffect, Yh = bn.useLayoutEffect, Xh = bn.useDebugValue;
function Gh(e, t) {
  var n = t(), r = Kh({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, l = r[1];
  return Yh(function() {
    o.value = n, o.getSnapshot = t, xi(o) && l({ inst: o });
  }, [e, n, t]), bh(function() {
    return xi(o) && l({ inst: o }), e(function() {
      xi(o) && l({ inst: o });
    });
  }, [e]), Xh(n), n;
}
function xi(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qh(e, n);
  } catch {
    return !0;
  }
}
function Zh(e, t) {
  return t();
}
var Jh = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Zh : Gh;
Rd.useSyncExternalStore = bn.useSyncExternalStore !== void 0 ? bn.useSyncExternalStore : Jh;
Ld.exports = Rd;
var qh = Ld.exports, Fd = { exports: {} }, Dd = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pl = Te, em = qh;
function tm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nm = typeof Object.is == "function" ? Object.is : tm, rm = em.useSyncExternalStore, om = Pl.useRef, lm = Pl.useEffect, im = Pl.useMemo, um = Pl.useDebugValue;
Dd.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var l = om(null);
  if (l.current === null) {
    var i = { hasValue: !1, value: null };
    l.current = i;
  } else
    i = l.current;
  l = im(function() {
    function a(y) {
      if (!s) {
        if (s = !0, d = y, y = r(y), o !== void 0 && i.hasValue) {
          var g = i.value;
          if (o(g, y))
            return h = g;
        }
        return h = y;
      }
      if (g = h, nm(d, y))
        return g;
      var w = r(y);
      return o !== void 0 && o(g, w) ? g : (d = y, h = w);
    }
    var s = !1, d, h, v = n === void 0 ? null : n;
    return [function() {
      return a(t());
    }, v === null ? void 0 : function() {
      return a(v());
    }];
  }, [t, n, r, o]);
  var u = rm(e, l[0], l[1]);
  return lm(function() {
    i.hasValue = !0, i.value = u;
  }, [u]), um(u), u;
};
Fd.exports = Dd;
var am = Fd.exports;
function sm(e) {
  e();
}
let Md = sm;
const cm = (e) => Md = e, fm = () => Md, el = /* @__PURE__ */ Te.createContext(null);
function dm() {
  return Te.useContext(el);
}
const pm = () => {
  throw new Error("uSES not initialized!");
};
let Ad = pm;
const vm = (e) => {
  Ad = e;
}, hm = (e, t) => e === t;
function mm(e = el) {
  const t = e === el ? dm : () => Te.useContext(e);
  return function(r, o = hm) {
    const {
      store: l,
      subscription: i,
      getServerState: u
    } = t(), a = Ad(i.addNestedSub, l.getState, u || l.getState, r, o);
    return Te.useDebugValue(a), a;
  };
}
const ym = /* @__PURE__ */ mm();
var Id = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce = typeof Symbol == "function" && Symbol.for, _a = ce ? Symbol.for("react.element") : 60103, Oa = ce ? Symbol.for("react.portal") : 60106, Cl = ce ? Symbol.for("react.fragment") : 60107, _l = ce ? Symbol.for("react.strict_mode") : 60108, Ol = ce ? Symbol.for("react.profiler") : 60114, Nl = ce ? Symbol.for("react.provider") : 60109, Tl = ce ? Symbol.for("react.context") : 60110, Na = ce ? Symbol.for("react.async_mode") : 60111, $l = ce ? Symbol.for("react.concurrent_mode") : 60111, jl = ce ? Symbol.for("react.forward_ref") : 60112, zl = ce ? Symbol.for("react.suspense") : 60113, gm = ce ? Symbol.for("react.suspense_list") : 60120, Ll = ce ? Symbol.for("react.memo") : 60115, Rl = ce ? Symbol.for("react.lazy") : 60116, wm = ce ? Symbol.for("react.block") : 60121, Sm = ce ? Symbol.for("react.fundamental") : 60117, km = ce ? Symbol.for("react.responder") : 60118, Em = ce ? Symbol.for("react.scope") : 60119;
function Ae(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case _a:
        switch (e = e.type, e) {
          case Na:
          case $l:
          case Cl:
          case Ol:
          case _l:
          case zl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Tl:
              case jl:
              case Rl:
              case Ll:
              case Nl:
                return e;
              default:
                return t;
            }
        }
      case Oa:
        return t;
    }
  }
}
function Bd(e) {
  return Ae(e) === $l;
}
W.AsyncMode = Na;
W.ConcurrentMode = $l;
W.ContextConsumer = Tl;
W.ContextProvider = Nl;
W.Element = _a;
W.ForwardRef = jl;
W.Fragment = Cl;
W.Lazy = Rl;
W.Memo = Ll;
W.Portal = Oa;
W.Profiler = Ol;
W.StrictMode = _l;
W.Suspense = zl;
W.isAsyncMode = function(e) {
  return Bd(e) || Ae(e) === Na;
};
W.isConcurrentMode = Bd;
W.isContextConsumer = function(e) {
  return Ae(e) === Tl;
};
W.isContextProvider = function(e) {
  return Ae(e) === Nl;
};
W.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _a;
};
W.isForwardRef = function(e) {
  return Ae(e) === jl;
};
W.isFragment = function(e) {
  return Ae(e) === Cl;
};
W.isLazy = function(e) {
  return Ae(e) === Rl;
};
W.isMemo = function(e) {
  return Ae(e) === Ll;
};
W.isPortal = function(e) {
  return Ae(e) === Oa;
};
W.isProfiler = function(e) {
  return Ae(e) === Ol;
};
W.isStrictMode = function(e) {
  return Ae(e) === _l;
};
W.isSuspense = function(e) {
  return Ae(e) === zl;
};
W.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Cl || e === $l || e === Ol || e === _l || e === zl || e === gm || typeof e == "object" && e !== null && (e.$$typeof === Rl || e.$$typeof === Ll || e.$$typeof === Nl || e.$$typeof === Tl || e.$$typeof === jl || e.$$typeof === Sm || e.$$typeof === km || e.$$typeof === Em || e.$$typeof === wm);
};
W.typeOf = Ae;
Id.exports = W;
var xm = Id.exports, Ta = xm, Pm = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, Cm = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, _m = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ud = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, $a = {};
$a[Ta.ForwardRef] = _m;
$a[Ta.Memo] = Ud;
function Zs(e) {
  return Ta.isMemo(e) ? Ud : $a[e.$$typeof] || Pm;
}
var Om = Object.defineProperty, Nm = Object.getOwnPropertyNames, Js = Object.getOwnPropertySymbols, Tm = Object.getOwnPropertyDescriptor, $m = Object.getPrototypeOf, qs = Object.prototype;
function Vd(e, t, n) {
  if (typeof t != "string") {
    if (qs) {
      var r = $m(t);
      r && r !== qs && Vd(e, r, n);
    }
    var o = Nm(t);
    Js && (o = o.concat(Js(t)));
    for (var l = Zs(e), i = Zs(t), u = 0; u < o.length; ++u) {
      var a = o[u];
      if (!Cm[a] && !(n && n[a]) && !(i && i[a]) && !(l && l[a])) {
        var s = Tm(t, a);
        try {
          Om(e, a, s);
        } catch {
        }
      }
    }
  }
  return e;
}
var jm = Vd;
const Xy = /* @__PURE__ */ ul(jm);
var Wd = { exports: {} }, H = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ja = Symbol.for("react.element"), za = Symbol.for("react.portal"), Fl = Symbol.for("react.fragment"), Dl = Symbol.for("react.strict_mode"), Ml = Symbol.for("react.profiler"), Al = Symbol.for("react.provider"), Il = Symbol.for("react.context"), zm = Symbol.for("react.server_context"), Bl = Symbol.for("react.forward_ref"), Ul = Symbol.for("react.suspense"), Vl = Symbol.for("react.suspense_list"), Wl = Symbol.for("react.memo"), Hl = Symbol.for("react.lazy"), Lm = Symbol.for("react.offscreen"), Hd;
Hd = Symbol.for("react.module.reference");
function Ke(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ja:
        switch (e = e.type, e) {
          case Fl:
          case Ml:
          case Dl:
          case Ul:
          case Vl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case zm:
              case Il:
              case Bl:
              case Hl:
              case Wl:
              case Al:
                return e;
              default:
                return t;
            }
        }
      case za:
        return t;
    }
  }
}
H.ContextConsumer = Il;
H.ContextProvider = Al;
H.Element = ja;
H.ForwardRef = Bl;
H.Fragment = Fl;
H.Lazy = Hl;
H.Memo = Wl;
H.Portal = za;
H.Profiler = Ml;
H.StrictMode = Dl;
H.Suspense = Ul;
H.SuspenseList = Vl;
H.isAsyncMode = function() {
  return !1;
};
H.isConcurrentMode = function() {
  return !1;
};
H.isContextConsumer = function(e) {
  return Ke(e) === Il;
};
H.isContextProvider = function(e) {
  return Ke(e) === Al;
};
H.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ja;
};
H.isForwardRef = function(e) {
  return Ke(e) === Bl;
};
H.isFragment = function(e) {
  return Ke(e) === Fl;
};
H.isLazy = function(e) {
  return Ke(e) === Hl;
};
H.isMemo = function(e) {
  return Ke(e) === Wl;
};
H.isPortal = function(e) {
  return Ke(e) === za;
};
H.isProfiler = function(e) {
  return Ke(e) === Ml;
};
H.isStrictMode = function(e) {
  return Ke(e) === Dl;
};
H.isSuspense = function(e) {
  return Ke(e) === Ul;
};
H.isSuspenseList = function(e) {
  return Ke(e) === Vl;
};
H.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Fl || e === Ml || e === Dl || e === Ul || e === Vl || e === Lm || typeof e == "object" && e !== null && (e.$$typeof === Hl || e.$$typeof === Wl || e.$$typeof === Al || e.$$typeof === Il || e.$$typeof === Bl || e.$$typeof === Hd || e.getModuleId !== void 0);
};
H.typeOf = Ke;
Wd.exports = H;
var Gy = Wd.exports;
function Rm() {
  const e = fm();
  let t = null, n = null;
  return {
    clear() {
      t = null, n = null;
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      let r = [], o = t;
      for (; o; )
        r.push(o), o = o.next;
      return r;
    },
    subscribe(r) {
      let o = !0, l = n = {
        callback: r,
        next: null,
        prev: n
      };
      return l.prev ? l.prev.next = l : t = l, function() {
        !o || t === null || (o = !1, l.next ? l.next.prev = l.prev : n = l.prev, l.prev ? l.prev.next = l.next : t = l.next);
      };
    }
  };
}
const ec = {
  notify() {
  },
  get: () => []
};
function Fm(e, t) {
  let n, r = ec;
  function o(h) {
    return a(), r.subscribe(h);
  }
  function l() {
    r.notify();
  }
  function i() {
    d.onStateChange && d.onStateChange();
  }
  function u() {
    return !!n;
  }
  function a() {
    n || (n = t ? t.addNestedSub(i) : e.subscribe(i), r = Rm());
  }
  function s() {
    n && (n(), n = void 0, r.clear(), r = ec);
  }
  const d = {
    addNestedSub: o,
    notifyNestedSubs: l,
    handleChangeWrapper: i,
    isSubscribed: u,
    trySubscribe: a,
    tryUnsubscribe: s,
    getListeners: () => r
  };
  return d;
}
const Dm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Mm = Dm ? Te.useLayoutEffect : Te.useEffect;
function Zy({
  store: e,
  context: t,
  children: n,
  serverState: r
}) {
  const o = Te.useMemo(() => {
    const u = Fm(e);
    return {
      store: e,
      subscription: u,
      getServerState: r ? () => r : void 0
    };
  }, [e, r]), l = Te.useMemo(() => e.getState(), [e]);
  Mm(() => {
    const {
      subscription: u
    } = o;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), l !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [o, l]);
  const i = t || el;
  return /* @__PURE__ */ Oc.createElement(i.Provider, {
    value: o
  }, n);
}
vm(am.useSyncExternalStoreWithSelector);
cm(Ca.unstable_batchedUpdates);
function qe(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(o) {
    return "'" + o + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Qt(e) {
  return !!e && !!e[G];
}
function Et(e) {
  var t;
  return !!e && (function(n) {
    if (!n || typeof n != "object")
      return !1;
    var r = Object.getPrototypeOf(n);
    if (r === null)
      return !0;
    var o = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
    return o === Object || typeof o == "function" && Function.toString.call(o) === Km;
  }(e) || Array.isArray(e) || !!e[uc] || !!(!((t = e.constructor) === null || t === void 0) && t[uc]) || La(e) || Ra(e));
}
function dn(e, t, n) {
  n === void 0 && (n = !1), Zn(e) === 0 ? (n ? Object.keys : Mn)(e).forEach(function(r) {
    n && typeof r == "symbol" || t(r, e[r], e);
  }) : e.forEach(function(r, o) {
    return t(o, r, e);
  });
}
function Zn(e) {
  var t = e[G];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : La(e) ? 2 : Ra(e) ? 3 : 0;
}
function Dn(e, t) {
  return Zn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Am(e, t) {
  return Zn(e) === 2 ? e.get(t) : e[t];
}
function Qd(e, t, n) {
  var r = Zn(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function Kd(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function La(e) {
  return Hm && e instanceof Map;
}
function Ra(e) {
  return Qm && e instanceof Set;
}
function en(e) {
  return e.o || e.t;
}
function Fa(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = Yd(e);
  delete t[G];
  for (var n = Mn(t), r = 0; r < n.length; r++) {
    var o = n[r], l = t[o];
    l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (t[o] = { configurable: !0, writable: !0, enumerable: l.enumerable, value: e[o] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Da(e, t) {
  return t === void 0 && (t = !1), Ma(e) || Qt(e) || !Et(e) || (Zn(e) > 1 && (e.set = e.add = e.clear = e.delete = Im), Object.freeze(e), t && dn(e, function(n, r) {
    return Da(r, !0);
  }, !0)), e;
}
function Im() {
  qe(2);
}
function Ma(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function ct(e) {
  var t = _u[e];
  return t || qe(18, e), t;
}
function Bm(e, t) {
  _u[e] || (_u[e] = t);
}
function xu() {
  return Vr;
}
function Pi(e, t) {
  t && (ct("Patches"), e.u = [], e.s = [], e.v = t);
}
function tl(e) {
  Pu(e), e.p.forEach(Um), e.p = null;
}
function Pu(e) {
  e === Vr && (Vr = e.l);
}
function tc(e) {
  return Vr = { p: [], l: Vr, h: e, m: !0, _: 0 };
}
function Um(e) {
  var t = e[G];
  t.i === 0 || t.i === 1 ? t.j() : t.O = !0;
}
function Ci(e, t) {
  t._ = t.p.length;
  var n = t.p[0], r = e !== void 0 && e !== n;
  return t.h.g || ct("ES5").S(t, e, r), r ? (n[G].P && (tl(t), qe(4)), Et(e) && (e = nl(t, e), t.l || rl(t, e)), t.u && ct("Patches").M(n[G].t, e, t.u, t.s)) : e = nl(t, n, []), tl(t), t.u && t.v(t.u, t.s), e !== bd ? e : void 0;
}
function nl(e, t, n) {
  if (Ma(t))
    return t;
  var r = t[G];
  if (!r)
    return dn(t, function(u, a) {
      return nc(e, r, t, u, a, n);
    }, !0), t;
  if (r.A !== e)
    return t;
  if (!r.P)
    return rl(e, r.t, !0), r.t;
  if (!r.I) {
    r.I = !0, r.A._--;
    var o = r.i === 4 || r.i === 5 ? r.o = Fa(r.k) : r.o, l = o, i = !1;
    r.i === 3 && (l = new Set(o), o.clear(), i = !0), dn(l, function(u, a) {
      return nc(e, r, o, u, a, n, i);
    }), rl(e, o, !1), n && e.u && ct("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function nc(e, t, n, r, o, l, i) {
  if (Qt(o)) {
    var u = nl(e, o, l && t && t.i !== 3 && !Dn(t.R, r) ? l.concat(r) : void 0);
    if (Qd(n, r, u), !Qt(u))
      return;
    e.m = !1;
  } else
    i && n.add(o);
  if (Et(o) && !Ma(o)) {
    if (!e.h.D && e._ < 1)
      return;
    nl(e, o), t && t.A.l || rl(e, o);
  }
}
function rl(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && Da(t, n);
}
function _i(e, t) {
  var n = e[G];
  return (n ? en(n) : e)[t];
}
function rc(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r)
        return r;
      n = Object.getPrototypeOf(n);
    }
}
function jt(e) {
  e.P || (e.P = !0, e.l && jt(e.l));
}
function Oi(e) {
  e.o || (e.o = Fa(e.t));
}
function Cu(e, t, n) {
  var r = La(t) ? ct("MapSet").F(t, n) : Ra(t) ? ct("MapSet").T(t, n) : e.g ? function(o, l) {
    var i = Array.isArray(o), u = { i: i ? 1 : 0, A: l ? l.A : xu(), P: !1, I: !1, R: {}, l, t: o, k: null, o: null, j: null, C: !1 }, a = u, s = Wr;
    i && (a = [u], s = hr);
    var d = Proxy.revocable(a, s), h = d.revoke, v = d.proxy;
    return u.k = v, u.j = h, v;
  }(t, n) : ct("ES5").J(t, n);
  return (n ? n.A : xu()).p.push(r), r;
}
function Vm(e) {
  return Qt(e) || qe(22, e), function t(n) {
    if (!Et(n))
      return n;
    var r, o = n[G], l = Zn(n);
    if (o) {
      if (!o.P && (o.i < 4 || !ct("ES5").K(o)))
        return o.t;
      o.I = !0, r = oc(n, l), o.I = !1;
    } else
      r = oc(n, l);
    return dn(r, function(i, u) {
      o && Am(o.t, i) === u || Qd(r, i, t(u));
    }), l === 3 ? new Set(r) : r;
  }(e);
}
function oc(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Fa(e);
}
function Wm() {
  function e(l, i) {
    var u = o[l];
    return u ? u.enumerable = i : o[l] = u = { configurable: !0, enumerable: i, get: function() {
      var a = this[G];
      return Wr.get(a, l);
    }, set: function(a) {
      var s = this[G];
      Wr.set(s, l, a);
    } }, u;
  }
  function t(l) {
    for (var i = l.length - 1; i >= 0; i--) {
      var u = l[i][G];
      if (!u.P)
        switch (u.i) {
          case 5:
            r(u) && jt(u);
            break;
          case 4:
            n(u) && jt(u);
        }
    }
  }
  function n(l) {
    for (var i = l.t, u = l.k, a = Mn(u), s = a.length - 1; s >= 0; s--) {
      var d = a[s];
      if (d !== G) {
        var h = i[d];
        if (h === void 0 && !Dn(i, d))
          return !0;
        var v = u[d], y = v && v[G];
        if (y ? y.t !== h : !Kd(v, h))
          return !0;
      }
    }
    var g = !!i[G];
    return a.length !== Mn(i).length + (g ? 0 : 1);
  }
  function r(l) {
    var i = l.k;
    if (i.length !== l.t.length)
      return !0;
    var u = Object.getOwnPropertyDescriptor(i, i.length - 1);
    if (u && !u.get)
      return !0;
    for (var a = 0; a < i.length; a++)
      if (!i.hasOwnProperty(a))
        return !0;
    return !1;
  }
  var o = {};
  Bm("ES5", { J: function(l, i) {
    var u = Array.isArray(l), a = function(d, h) {
      if (d) {
        for (var v = Array(h.length), y = 0; y < h.length; y++)
          Object.defineProperty(v, "" + y, e(y, !0));
        return v;
      }
      var g = Yd(h);
      delete g[G];
      for (var w = Mn(g), _ = 0; _ < w.length; _++) {
        var f = w[_];
        g[f] = e(f, d || !!g[f].enumerable);
      }
      return Object.create(Object.getPrototypeOf(h), g);
    }(u, l), s = { i: u ? 5 : 4, A: i ? i.A : xu(), P: !1, I: !1, R: {}, l: i, t: l, k: a, o: null, O: !1, C: !1 };
    return Object.defineProperty(a, G, { value: s, writable: !0 }), a;
  }, S: function(l, i, u) {
    u ? Qt(i) && i[G].A === l && t(l.p) : (l.u && function a(s) {
      if (s && typeof s == "object") {
        var d = s[G];
        if (d) {
          var h = d.t, v = d.k, y = d.R, g = d.i;
          if (g === 4)
            dn(v, function(p) {
              p !== G && (h[p] !== void 0 || Dn(h, p) ? y[p] || a(v[p]) : (y[p] = !0, jt(d)));
            }), dn(h, function(p) {
              v[p] !== void 0 || Dn(v, p) || (y[p] = !1, jt(d));
            });
          else if (g === 5) {
            if (r(d) && (jt(d), y.length = !0), v.length < h.length)
              for (var w = v.length; w < h.length; w++)
                y[w] = !1;
            else
              for (var _ = h.length; _ < v.length; _++)
                y[_] = !0;
            for (var f = Math.min(v.length, h.length), c = 0; c < f; c++)
              v.hasOwnProperty(c) || (y[c] = !0), y[c] === void 0 && a(v[c]);
          }
        }
      }
    }(l.p[0]), t(l.p));
  }, K: function(l) {
    return l.i === 4 ? n(l) : r(l);
  } });
}
var lc, Vr, Aa = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Hm = typeof Map < "u", Qm = typeof Set < "u", ic = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", bd = Aa ? Symbol.for("immer-nothing") : ((lc = {})["immer-nothing"] = !0, lc), uc = Aa ? Symbol.for("immer-draftable") : "__$immer_draftable", G = Aa ? Symbol.for("immer-state") : "__$immer_state", Km = "" + Object.prototype.constructor, Mn = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, Yd = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return Mn(e).forEach(function(n) {
    t[n] = Object.getOwnPropertyDescriptor(e, n);
  }), t;
}, _u = {}, Wr = { get: function(e, t) {
  if (t === G)
    return e;
  var n = en(e);
  if (!Dn(n, t))
    return function(o, l, i) {
      var u, a = rc(l, i);
      return a ? "value" in a ? a.value : (u = a.get) === null || u === void 0 ? void 0 : u.call(o.k) : void 0;
    }(e, n, t);
  var r = n[t];
  return e.I || !Et(r) ? r : r === _i(e.t, t) ? (Oi(e), e.o[t] = Cu(e.A.h, r, e)) : r;
}, has: function(e, t) {
  return t in en(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(en(e));
}, set: function(e, t, n) {
  var r = rc(en(e), t);
  if (r != null && r.set)
    return r.set.call(e.k, n), !0;
  if (!e.P) {
    var o = _i(en(e), t), l = o == null ? void 0 : o[G];
    if (l && l.t === n)
      return e.o[t] = n, e.R[t] = !1, !0;
    if (Kd(n, o) && (n !== void 0 || Dn(e.t, t)))
      return !0;
    Oi(e), jt(e);
  }
  return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return _i(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, Oi(e), jt(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var n = en(e), r = Reflect.getOwnPropertyDescriptor(n, t);
  return r && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: r.enumerable, value: n[t] };
}, defineProperty: function() {
  qe(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  qe(12);
} }, hr = {};
dn(Wr, function(e, t) {
  hr[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), hr.deleteProperty = function(e, t) {
  return hr.set.call(this, e, t, void 0);
}, hr.set = function(e, t, n) {
  return Wr.set.call(this, e[0], t, n, e[0]);
};
var bm = function() {
  function e(n) {
    var r = this;
    this.g = ic, this.D = !0, this.produce = function(o, l, i) {
      if (typeof o == "function" && typeof l != "function") {
        var u = l;
        l = o;
        var a = r;
        return function(w) {
          var _ = this;
          w === void 0 && (w = u);
          for (var f = arguments.length, c = Array(f > 1 ? f - 1 : 0), p = 1; p < f; p++)
            c[p - 1] = arguments[p];
          return a.produce(w, function(E) {
            var P;
            return (P = l).call.apply(P, [_, E].concat(c));
          });
        };
      }
      var s;
      if (typeof l != "function" && qe(6), i !== void 0 && typeof i != "function" && qe(7), Et(o)) {
        var d = tc(r), h = Cu(r, o, void 0), v = !0;
        try {
          s = l(h), v = !1;
        } finally {
          v ? tl(d) : Pu(d);
        }
        return typeof Promise < "u" && s instanceof Promise ? s.then(function(w) {
          return Pi(d, i), Ci(w, d);
        }, function(w) {
          throw tl(d), w;
        }) : (Pi(d, i), Ci(s, d));
      }
      if (!o || typeof o != "object") {
        if ((s = l(o)) === void 0 && (s = o), s === bd && (s = void 0), r.D && Da(s, !0), i) {
          var y = [], g = [];
          ct("Patches").M(o, s, y, g), i(y, g);
        }
        return s;
      }
      qe(21, o);
    }, this.produceWithPatches = function(o, l) {
      if (typeof o == "function")
        return function(s) {
          for (var d = arguments.length, h = Array(d > 1 ? d - 1 : 0), v = 1; v < d; v++)
            h[v - 1] = arguments[v];
          return r.produceWithPatches(s, function(y) {
            return o.apply(void 0, [y].concat(h));
          });
        };
      var i, u, a = r.produce(o, l, function(s, d) {
        i = s, u = d;
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then(function(s) {
        return [s, i, u];
      }) : [a, i, u];
    }, typeof (n == null ? void 0 : n.useProxies) == "boolean" && this.setUseProxies(n.useProxies), typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(n) {
    Et(n) || qe(8), Qt(n) && (n = Vm(n));
    var r = tc(this), o = Cu(this, n, void 0);
    return o[G].C = !0, Pu(r), o;
  }, t.finishDraft = function(n, r) {
    var o = n && n[G], l = o.A;
    return Pi(l, r), Ci(void 0, l);
  }, t.setAutoFreeze = function(n) {
    this.D = n;
  }, t.setUseProxies = function(n) {
    n && !ic && qe(20), this.g = n;
  }, t.applyPatches = function(n, r) {
    var o;
    for (o = r.length - 1; o >= 0; o--) {
      var l = r[o];
      if (l.path.length === 0 && l.op === "replace") {
        n = l.value;
        break;
      }
    }
    o > -1 && (r = r.slice(o + 1));
    var i = ct("Patches").$;
    return Qt(n) ? i(n, r) : this.produce(n, function(u) {
      return i(u, r);
    });
  }, e;
}(), Fe = new bm(), Xd = Fe.produce;
Fe.produceWithPatches.bind(Fe);
Fe.setAutoFreeze.bind(Fe);
Fe.setUseProxies.bind(Fe);
Fe.applyPatches.bind(Fe);
Fe.createDraft.bind(Fe);
Fe.finishDraft.bind(Fe);
function Hr(e) {
  return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hr(e);
}
function Ym(e, t) {
  if (Hr(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Hr(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xm(e) {
  var t = Ym(e, "string");
  return Hr(t) === "symbol" ? t : String(t);
}
function Gm(e, t, n) {
  return t = Xm(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ac(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function sc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ac(Object(n), !0).forEach(function(r) {
      Gm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ac(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function me(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var cc = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Ni = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, ol = {
  INIT: "@@redux/INIT" + Ni(),
  REPLACE: "@@redux/REPLACE" + Ni(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Ni();
  }
};
function Zm(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Gd(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(me(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(me(1));
    return n(Gd)(e, t);
  }
  if (typeof e != "function")
    throw new Error(me(2));
  var o = e, l = t, i = [], u = i, a = !1;
  function s() {
    u === i && (u = i.slice());
  }
  function d() {
    if (a)
      throw new Error(me(3));
    return l;
  }
  function h(w) {
    if (typeof w != "function")
      throw new Error(me(4));
    if (a)
      throw new Error(me(5));
    var _ = !0;
    return s(), u.push(w), function() {
      if (_) {
        if (a)
          throw new Error(me(6));
        _ = !1, s();
        var c = u.indexOf(w);
        u.splice(c, 1), i = null;
      }
    };
  }
  function v(w) {
    if (!Zm(w))
      throw new Error(me(7));
    if (typeof w.type > "u")
      throw new Error(me(8));
    if (a)
      throw new Error(me(9));
    try {
      a = !0, l = o(l, w);
    } finally {
      a = !1;
    }
    for (var _ = i = u, f = 0; f < _.length; f++) {
      var c = _[f];
      c();
    }
    return w;
  }
  function y(w) {
    if (typeof w != "function")
      throw new Error(me(10));
    o = w, v({
      type: ol.REPLACE
    });
  }
  function g() {
    var w, _ = h;
    return w = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(c) {
        if (typeof c != "object" || c === null)
          throw new Error(me(11));
        function p() {
          c.next && c.next(d());
        }
        p();
        var E = _(p);
        return {
          unsubscribe: E
        };
      }
    }, w[cc] = function() {
      return this;
    }, w;
  }
  return v({
    type: ol.INIT
  }), r = {
    dispatch: v,
    subscribe: h,
    getState: d,
    replaceReducer: y
  }, r[cc] = g, r;
}
function Jm(e) {
  Object.keys(e).forEach(function(t) {
    var n = e[t], r = n(void 0, {
      type: ol.INIT
    });
    if (typeof r > "u")
      throw new Error(me(12));
    if (typeof n(void 0, {
      type: ol.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(me(13));
  });
}
function qm(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  var l = Object.keys(n), i;
  try {
    Jm(n);
  } catch (u) {
    i = u;
  }
  return function(a, s) {
    if (a === void 0 && (a = {}), i)
      throw i;
    for (var d = !1, h = {}, v = 0; v < l.length; v++) {
      var y = l[v], g = n[y], w = a[y], _ = g(w, s);
      if (typeof _ > "u")
        throw s && s.type, new Error(me(14));
      h[y] = _, d = d || _ !== w;
    }
    return d = d || l.length !== Object.keys(a).length, d ? h : a;
  };
}
function ll() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0 ? function(r) {
    return r;
  } : t.length === 1 ? t[0] : t.reduce(function(r, o) {
    return function() {
      return r(o.apply(void 0, arguments));
    };
  });
}
function ey() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), l = function() {
        throw new Error(me(15));
      }, i = {
        getState: o.getState,
        dispatch: function() {
          return l.apply(void 0, arguments);
        }
      }, u = t.map(function(a) {
        return a(i);
      });
      return l = ll.apply(void 0, u)(o.dispatch), sc(sc({}, o), {}, {
        dispatch: l
      });
    };
  };
}
function Zd(e) {
  var t = function(r) {
    var o = r.dispatch, l = r.getState;
    return function(i) {
      return function(u) {
        return typeof u == "function" ? u(o, l, e) : i(u);
      };
    };
  };
  return t;
}
var Jd = Zd();
Jd.withExtraArgument = Zd;
const fc = Jd;
var ty = globalThis && globalThis.__extends || function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
      r.__proto__ = o;
    } || function(r, o) {
      for (var l in o)
        Object.prototype.hasOwnProperty.call(o, l) && (r[l] = o[l]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Zr = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (l[0] & 1)
      throw l[1];
    return l[1];
  }, trys: [], ops: [] }, r, o, l, i;
  return i = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function u(s) {
    return function(d) {
      return a([s, d]);
    };
  }
  function a(s) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, o && (l = s[0] & 2 ? o.return : s[0] ? o.throw || ((l = o.return) && l.call(o), 0) : o.next) && !(l = l.call(o, s[1])).done)
          return l;
        switch (o = 0, l && (s = [s[0] & 2, l.value]), s[0]) {
          case 0:
          case 1:
            l = s;
            break;
          case 4:
            return n.label++, { value: s[1], done: !1 };
          case 5:
            n.label++, o = s[1], s = [0];
            continue;
          case 7:
            s = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (l = n.trys, !(l = l.length > 0 && l[l.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              n = 0;
              continue;
            }
            if (s[0] === 3 && (!l || s[1] > l[0] && s[1] < l[3])) {
              n.label = s[1];
              break;
            }
            if (s[0] === 6 && n.label < l[1]) {
              n.label = l[1], l = s;
              break;
            }
            if (l && n.label < l[2]) {
              n.label = l[2], n.ops.push(s);
              break;
            }
            l[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        s = t.call(e, n);
      } catch (d) {
        s = [6, d], o = 0;
      } finally {
        r = l = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, Qr = globalThis && globalThis.__spreadArray || function(e, t) {
  for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
    e[o] = t[n];
  return e;
}, ny = Object.defineProperty, ry = Object.defineProperties, oy = Object.getOwnPropertyDescriptors, dc = Object.getOwnPropertySymbols, ly = Object.prototype.hasOwnProperty, iy = Object.prototype.propertyIsEnumerable, pc = function(e, t, n) {
  return t in e ? ny(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
}, Vt = function(e, t) {
  for (var n in t || (t = {}))
    ly.call(t, n) && pc(e, n, t[n]);
  if (dc)
    for (var r = 0, o = dc(t); r < o.length; r++) {
      var n = o[r];
      iy.call(t, n) && pc(e, n, t[n]);
    }
  return e;
}, Ti = function(e, t) {
  return ry(e, oy(t));
}, Jr = function(e, t, n) {
  return new Promise(function(r, o) {
    var l = function(a) {
      try {
        u(n.next(a));
      } catch (s) {
        o(s);
      }
    }, i = function(a) {
      try {
        u(n.throw(a));
      } catch (s) {
        o(s);
      }
    }, u = function(a) {
      return a.done ? r(a.value) : Promise.resolve(a.value).then(l, i);
    };
    u((n = n.apply(e, t)).next());
  });
}, uy = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? ll : ll.apply(null, arguments);
};
function ay(e) {
  if (typeof e != "object" || e === null)
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null)
    return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var sy = (
  /** @class */
  function(e) {
    ty(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      var o = e.apply(this, n) || this;
      return Object.setPrototypeOf(o, t.prototype), o;
    }
    return Object.defineProperty(t, Symbol.species, {
      get: function() {
        return t;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.concat = function() {
      for (var n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return e.prototype.concat.apply(this, n);
    }, t.prototype.prepend = function() {
      for (var n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return n.length === 1 && Array.isArray(n[0]) ? new (t.bind.apply(t, Qr([void 0], n[0].concat(this))))() : new (t.bind.apply(t, Qr([void 0], n.concat(this))))();
    }, t;
  }(Array)
);
function Ou(e) {
  return Et(e) ? Xd(e, function() {
  }) : e;
}
function cy(e) {
  return typeof e == "boolean";
}
function fy() {
  return function(t) {
    return dy(t);
  };
}
function dy(e) {
  e === void 0 && (e = {});
  var t = e.thunk, n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new sy();
  return n && (cy(n) ? r.push(fc) : r.push(fc.withExtraArgument(n.extraArgument))), r;
}
var py = !0;
function Jy(e) {
  var t = fy(), n = e || {}, r = n.reducer, o = r === void 0 ? void 0 : r, l = n.middleware, i = l === void 0 ? t() : l, u = n.devTools, a = u === void 0 ? !0 : u, s = n.preloadedState, d = s === void 0 ? void 0 : s, h = n.enhancers, v = h === void 0 ? void 0 : h, y;
  if (typeof o == "function")
    y = o;
  else if (ay(o))
    y = qm(o);
  else
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  var g = i;
  typeof g == "function" && (g = g(t));
  var w = ey.apply(void 0, g), _ = ll;
  a && (_ = uy(Vt({
    trace: !py
  }, typeof a == "object" && a)));
  var f = [w];
  Array.isArray(v) ? f = Qr([w], v) : typeof v == "function" && (f = v(f));
  var c = _.apply(void 0, f);
  return Gd(y, d, c);
}
function yt(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++)
      r[o] = arguments[o];
    if (t) {
      var l = t.apply(void 0, r);
      if (!l)
        throw new Error("prepareAction did not return an object");
      return Vt(Vt({
        type: e,
        payload: l.payload
      }, "meta" in l && { meta: l.meta }), "error" in l && { error: l.error });
    }
    return { type: e, payload: r[0] };
  }
  return n.toString = function() {
    return "" + e;
  }, n.type = e, n.match = function(r) {
    return r.type === e;
  }, n;
}
function qd(e) {
  var t = {}, n = [], r, o = {
    addCase: function(l, i) {
      var u = typeof l == "string" ? l : l.type;
      if (u in t)
        throw new Error("addCase cannot be called with two reducers for the same action type");
      return t[u] = i, o;
    },
    addMatcher: function(l, i) {
      return n.push({ matcher: l, reducer: i }), o;
    },
    addDefaultCase: function(l) {
      return r = l, o;
    }
  };
  return e(o), [t, n, r];
}
function vy(e) {
  return typeof e == "function";
}
function hy(e, t, n, r) {
  n === void 0 && (n = []);
  var o = typeof t == "function" ? qd(t) : [t, n, r], l = o[0], i = o[1], u = o[2], a;
  if (vy(e))
    a = function() {
      return Ou(e());
    };
  else {
    var s = Ou(e);
    a = function() {
      return s;
    };
  }
  function d(h, v) {
    h === void 0 && (h = a());
    var y = Qr([
      l[v.type]
    ], i.filter(function(g) {
      var w = g.matcher;
      return w(v);
    }).map(function(g) {
      var w = g.reducer;
      return w;
    }));
    return y.filter(function(g) {
      return !!g;
    }).length === 0 && (y = [u]), y.reduce(function(g, w) {
      if (w)
        if (Qt(g)) {
          var _ = g, f = w(_, v);
          return f === void 0 ? g : f;
        } else {
          if (Et(g))
            return Xd(g, function(c) {
              return w(c, v);
            });
          var f = w(g, v);
          if (f === void 0) {
            if (g === null)
              return g;
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return f;
        }
      return g;
    }, h);
  }
  return d.getInitialState = a, d;
}
function my(e, t) {
  return e + "/" + t;
}
function yy(e) {
  var t = e.name;
  if (!t)
    throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n = typeof e.initialState == "function" ? e.initialState : Ou(e.initialState), r = e.reducers || {}, o = Object.keys(r), l = {}, i = {}, u = {};
  o.forEach(function(d) {
    var h = r[d], v = my(t, d), y, g;
    "reducer" in h ? (y = h.reducer, g = h.prepare) : y = h, l[d] = y, i[v] = y, u[d] = g ? yt(v, g) : yt(v);
  });
  function a() {
    var d = typeof e.extraReducers == "function" ? qd(e.extraReducers) : [e.extraReducers], h = d[0], v = h === void 0 ? {} : h, y = d[1], g = y === void 0 ? [] : y, w = d[2], _ = w === void 0 ? void 0 : w, f = Vt(Vt({}, v), i);
    return hy(n, function(c) {
      for (var p in f)
        c.addCase(p, f[p]);
      for (var E = 0, P = g; E < P.length; E++) {
        var O = P[E];
        c.addMatcher(O.matcher, O.reducer);
      }
      _ && c.addDefaultCase(_);
    });
  }
  var s;
  return {
    name: t,
    reducer: function(d, h) {
      return s || (s = a()), s(d, h);
    },
    actions: u,
    caseReducers: l,
    getInitialState: function() {
      return s || (s = a()), s.getInitialState();
    }
  };
}
var gy = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", ep = function(e) {
  e === void 0 && (e = 21);
  for (var t = "", n = e; n--; )
    t += gy[Math.random() * 64 | 0];
  return t;
}, wy = [
  "name",
  "message",
  "stack",
  "code"
], $i = (
  /** @class */
  function() {
    function e(t, n) {
      this.payload = t, this.meta = n;
    }
    return e;
  }()
), vc = (
  /** @class */
  function() {
    function e(t, n) {
      this.payload = t, this.meta = n;
    }
    return e;
  }()
), Sy = function(e) {
  if (typeof e == "object" && e !== null) {
    for (var t = {}, n = 0, r = wy; n < r.length; n++) {
      var o = r[n];
      typeof e[o] == "string" && (t[o] = e[o]);
    }
    return t;
  }
  return { message: String(e) };
};
(function() {
  function e(t, n, r) {
    var o = yt(t + "/fulfilled", function(s, d, h, v) {
      return {
        payload: s,
        meta: Ti(Vt({}, v || {}), {
          arg: h,
          requestId: d,
          requestStatus: "fulfilled"
        })
      };
    }), l = yt(t + "/pending", function(s, d, h) {
      return {
        payload: void 0,
        meta: Ti(Vt({}, h || {}), {
          arg: d,
          requestId: s,
          requestStatus: "pending"
        })
      };
    }), i = yt(t + "/rejected", function(s, d, h, v, y) {
      return {
        payload: v,
        error: (r && r.serializeError || Sy)(s || "Rejected"),
        meta: Ti(Vt({}, y || {}), {
          arg: h,
          requestId: d,
          rejectedWithValue: !!v,
          requestStatus: "rejected",
          aborted: (s == null ? void 0 : s.name) === "AbortError",
          condition: (s == null ? void 0 : s.name) === "ConditionError"
        })
      };
    }), u = typeof AbortController < "u" ? AbortController : (
      /** @class */
      function() {
        function s() {
          this.signal = {
            aborted: !1,
            addEventListener: function() {
            },
            dispatchEvent: function() {
              return !1;
            },
            onabort: function() {
            },
            removeEventListener: function() {
            },
            reason: void 0,
            throwIfAborted: function() {
            }
          };
        }
        return s.prototype.abort = function() {
        }, s;
      }()
    );
    function a(s) {
      return function(d, h, v) {
        var y = r != null && r.idGenerator ? r.idGenerator(s) : ep(), g = new u(), w;
        function _(c) {
          w = c, g.abort();
        }
        var f = function() {
          return Jr(this, null, function() {
            var c, p, E, P, O, N, j;
            return Zr(this, function(I) {
              switch (I.label) {
                case 0:
                  return I.trys.push([0, 4, , 5]), P = (c = r == null ? void 0 : r.condition) == null ? void 0 : c.call(r, s, { getState: h, extra: v }), Ey(P) ? [4, P] : [3, 2];
                case 1:
                  P = I.sent(), I.label = 2;
                case 2:
                  if (P === !1 || g.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  return O = new Promise(function(z, le) {
                    return g.signal.addEventListener("abort", function() {
                      return le({
                        name: "AbortError",
                        message: w || "Aborted"
                      });
                    });
                  }), d(l(y, s, (p = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : p.call(r, { requestId: y, arg: s }, { getState: h, extra: v }))), [4, Promise.race([
                    O,
                    Promise.resolve(n(s, {
                      dispatch: d,
                      getState: h,
                      extra: v,
                      requestId: y,
                      signal: g.signal,
                      abort: _,
                      rejectWithValue: function(z, le) {
                        return new $i(z, le);
                      },
                      fulfillWithValue: function(z, le) {
                        return new vc(z, le);
                      }
                    })).then(function(z) {
                      if (z instanceof $i)
                        throw z;
                      return z instanceof vc ? o(z.payload, y, s, z.meta) : o(z, y, s);
                    })
                  ])];
                case 3:
                  return E = I.sent(), [3, 5];
                case 4:
                  return N = I.sent(), E = N instanceof $i ? i(null, y, s, N.payload, N.meta) : i(N, y, s), [3, 5];
                case 5:
                  return j = r && !r.dispatchConditionRejection && i.match(E) && E.meta.condition, j || d(E), [2, E];
              }
            });
          });
        }();
        return Object.assign(f, {
          abort: _,
          requestId: y,
          arg: s,
          unwrap: function() {
            return f.then(ky);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: l,
      rejected: i,
      fulfilled: o,
      typePrefix: t
    });
  }
  return e.withTypes = function() {
    return e;
  }, e;
})();
function ky(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Ey(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var xy = function(e) {
  return e && typeof e.match == "function";
}, Py = function(e, t) {
  return xy(e) ? e.match(t) : e(t);
};
function qy() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(n) {
    return e.some(function(r) {
      return Py(r, n);
    });
  };
}
var Ia = function(e, t) {
  if (typeof e != "function")
    throw new TypeError(t + " is not a function");
}, Nu = function() {
}, tp = function(e, t) {
  return t === void 0 && (t = Nu), e.catch(t), e;
}, np = function(e, t) {
  return e.addEventListener("abort", t, { once: !0 }), function() {
    return e.removeEventListener("abort", t);
  };
}, An = function(e, t) {
  var n = e.signal;
  n.aborted || ("reason" in n || Object.defineProperty(n, "reason", {
    enumerable: !0,
    value: t,
    configurable: !0,
    writable: !0
  }), e.abort(t));
}, Cy = "task", rp = "listener", op = "completed", Ba = "cancelled", _y = "task-" + Ba, Oy = "task-" + op, lp = rp + "-" + Ba, Ny = rp + "-" + op, Ql = (
  /** @class */
  function() {
    function e(t) {
      this.code = t, this.name = "TaskAbortError", this.message = Cy + " " + Ba + " (reason: " + t + ")";
    }
    return e;
  }()
), In = function(e) {
  if (e.aborted)
    throw new Ql(e.reason);
};
function ip(e, t) {
  var n = Nu;
  return new Promise(function(r, o) {
    var l = function() {
      return o(new Ql(e.reason));
    };
    if (e.aborted) {
      l();
      return;
    }
    n = np(e, l), t.finally(function() {
      return n();
    }).then(r, o);
  }).finally(function() {
    n = Nu;
  });
}
var Ty = function(e, t) {
  return Jr(void 0, null, function() {
    var n, r;
    return Zr(this, function(o) {
      switch (o.label) {
        case 0:
          return o.trys.push([0, 3, 4, 5]), [4, Promise.resolve()];
        case 1:
          return o.sent(), [4, e()];
        case 2:
          return n = o.sent(), [2, {
            status: "ok",
            value: n
          }];
        case 3:
          return r = o.sent(), [2, {
            status: r instanceof Ql ? "cancelled" : "rejected",
            error: r
          }];
        case 4:
          return t == null || t(), [
            7
            /*endfinally*/
          ];
        case 5:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}, il = function(e) {
  return function(t) {
    return tp(ip(e, t).then(function(n) {
      return In(e), n;
    }));
  };
}, up = function(e) {
  var t = il(e);
  return function(n) {
    return t(new Promise(function(r) {
      return setTimeout(r, n);
    }));
  };
}, $y = Object.assign, hc = {}, qr = "listenerMiddleware", jy = function(e) {
  var t = function(n) {
    return np(e, function() {
      return An(n, e.reason);
    });
  };
  return function(n) {
    Ia(n, "taskExecutor");
    var r = new AbortController();
    t(r);
    var o = Ty(function() {
      return Jr(void 0, null, function() {
        var l;
        return Zr(this, function(i) {
          switch (i.label) {
            case 0:
              return In(e), In(r.signal), [4, n({
                pause: il(r.signal),
                delay: up(r.signal),
                signal: r.signal
              })];
            case 1:
              return l = i.sent(), In(r.signal), [2, l];
          }
        });
      });
    }, function() {
      return An(r, Oy);
    });
    return {
      result: il(e)(o),
      cancel: function() {
        An(r, _y);
      }
    };
  };
}, zy = function(e, t) {
  var n = function(r, o) {
    return Jr(void 0, null, function() {
      var l, i, u, a;
      return Zr(this, function(s) {
        switch (s.label) {
          case 0:
            In(t), l = function() {
            }, i = new Promise(function(d, h) {
              var v = e({
                predicate: r,
                effect: function(y, g) {
                  g.unsubscribe(), d([
                    y,
                    g.getState(),
                    g.getOriginalState()
                  ]);
                }
              });
              l = function() {
                v(), h();
              };
            }), u = [
              i
            ], o != null && u.push(new Promise(function(d) {
              return setTimeout(d, o, null);
            })), s.label = 1;
          case 1:
            return s.trys.push([1, , 3, 4]), [4, ip(t, Promise.race(u))];
          case 2:
            return a = s.sent(), In(t), [2, a];
          case 3:
            return l(), [
              7
              /*endfinally*/
            ];
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  return function(r, o) {
    return tp(n(r, o));
  };
}, ap = function(e) {
  var t = e.type, n = e.actionCreator, r = e.matcher, o = e.predicate, l = e.effect;
  if (t)
    o = yt(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error("Creating or removing a listener requires one of the known fields for matching an action");
  return Ia(l, "options.listener"), { predicate: o, type: t, effect: l };
}, Ly = function(e) {
  var t = ap(e), n = t.type, r = t.predicate, o = t.effect, l = ep(), i = {
    id: l,
    effect: o,
    type: n,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: function() {
      throw new Error("Unsubscribe not initialized");
    }
  };
  return i;
}, Tu = function(e) {
  e.pending.forEach(function(t) {
    An(t, lp);
  });
}, Ry = function(e) {
  return function() {
    e.forEach(Tu), e.clear();
  };
}, mc = function(e, t, n) {
  try {
    e(t, n);
  } catch (r) {
    setTimeout(function() {
      throw r;
    }, 0);
  }
}, Fy = yt(qr + "/add"), Dy = yt(qr + "/removeAll"), My = yt(qr + "/remove"), Ay = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  console.error.apply(console, Qr([qr + "/error"], e));
};
function eg(e) {
  var t = this;
  e === void 0 && (e = {});
  var n = /* @__PURE__ */ new Map(), r = e.extra, o = e.onError, l = o === void 0 ? Ay : o;
  Ia(l, "onError");
  var i = function(y) {
    return y.unsubscribe = function() {
      return n.delete(y.id);
    }, n.set(y.id, y), function(g) {
      y.unsubscribe(), g != null && g.cancelActive && Tu(y);
    };
  }, u = function(y) {
    for (var g = 0, w = Array.from(n.values()); g < w.length; g++) {
      var _ = w[g];
      if (y(_))
        return _;
    }
  }, a = function(y) {
    var g = u(function(w) {
      return w.effect === y.effect;
    });
    return g || (g = Ly(y)), i(g);
  }, s = function(y) {
    var g = ap(y), w = g.type, _ = g.effect, f = g.predicate, c = u(function(p) {
      var E = typeof w == "string" ? p.type === w : p.predicate === f;
      return E && p.effect === _;
    });
    return c && (c.unsubscribe(), y.cancelActive && Tu(c)), !!c;
  }, d = function(y, g, w, _) {
    return Jr(t, null, function() {
      var f, c, p;
      return Zr(this, function(E) {
        switch (E.label) {
          case 0:
            f = new AbortController(), c = zy(a, f.signal), E.label = 1;
          case 1:
            return E.trys.push([1, 3, 4, 5]), y.pending.add(f), [4, Promise.resolve(y.effect(g, $y({}, w, {
              getOriginalState: _,
              condition: function(P, O) {
                return c(P, O).then(Boolean);
              },
              take: c,
              delay: up(f.signal),
              pause: il(f.signal),
              extra: r,
              signal: f.signal,
              fork: jy(f.signal),
              unsubscribe: y.unsubscribe,
              subscribe: function() {
                n.set(y.id, y);
              },
              cancelActiveListeners: function() {
                y.pending.forEach(function(P, O, N) {
                  P !== f && (An(P, lp), N.delete(P));
                });
              }
            })))];
          case 2:
            return E.sent(), [3, 5];
          case 3:
            return p = E.sent(), p instanceof Ql || mc(l, p, {
              raisedBy: "effect"
            }), [3, 5];
          case 4:
            return An(f, Ny), y.pending.delete(f), [
              7
              /*endfinally*/
            ];
          case 5:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, h = Ry(n), v = function(y) {
    return function(g) {
      return function(w) {
        if (Fy.match(w))
          return a(w.payload);
        if (Dy.match(w)) {
          h();
          return;
        }
        if (My.match(w))
          return s(w.payload);
        var _ = y.getState(), f = function() {
          if (_ === hc)
            throw new Error(qr + ": getOriginalState can only be called synchronously");
          return _;
        }, c;
        try {
          if (c = g(w), n.size > 0)
            for (var p = y.getState(), E = Array.from(n.values()), P = 0, O = E; P < O.length; P++) {
              var N = O[P], j = !1;
              try {
                j = N.predicate(w, p, _);
              } catch (I) {
                j = !1, mc(l, I, {
                  raisedBy: "predicate"
                });
              }
              j && d(N, w, y, f);
            }
        } finally {
          _ = hc;
        }
        return c;
      };
    };
  };
  return {
    middleware: v,
    startListening: a,
    stopListening: s,
    clearListeners: h
  };
}
var yc;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
Wm();
var $u = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(t);
  })(nr, function(n) {
    function r(m, k) {
      m.super_ = k, m.prototype = Object.create(k.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } });
    }
    function o(m, k) {
      Object.defineProperty(this, "kind", { value: m, enumerable: !0 }), k && k.length && Object.defineProperty(this, "path", { value: k, enumerable: !0 });
    }
    function l(m, k, S) {
      l.super_.call(this, "E", m), Object.defineProperty(this, "lhs", { value: k, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: S, enumerable: !0 });
    }
    function i(m, k) {
      i.super_.call(this, "N", m), Object.defineProperty(this, "rhs", { value: k, enumerable: !0 });
    }
    function u(m, k) {
      u.super_.call(this, "D", m), Object.defineProperty(this, "lhs", { value: k, enumerable: !0 });
    }
    function a(m, k, S) {
      a.super_.call(this, "A", m), Object.defineProperty(this, "index", { value: k, enumerable: !0 }), Object.defineProperty(this, "item", { value: S, enumerable: !0 });
    }
    function s(m, k, S) {
      var C = m.slice((S || k) + 1 || m.length);
      return m.length = k < 0 ? m.length + k : k, m.push.apply(m, C), m;
    }
    function d(m) {
      var k = typeof m > "u" ? "undefined" : Pt(m);
      return k !== "object" ? k : m === Math ? "math" : m === null ? "null" : Array.isArray(m) ? "array" : Object.prototype.toString.call(m) === "[object Date]" ? "date" : typeof m.toString == "function" && /^\/.*\//.test(m.toString()) ? "regexp" : "object";
    }
    function h(m, k, S, C, L, F, M) {
      L = L || [], M = M || [];
      var B = L.slice(0);
      if (typeof F < "u") {
        if (C) {
          if (typeof C == "function" && C(B, F))
            return;
          if ((typeof C > "u" ? "undefined" : Pt(C)) === "object") {
            if (C.prefilter && C.prefilter(B, F))
              return;
            if (C.normalize) {
              var Ie = C.normalize(B, F, m, k);
              Ie && (m = Ie[0], k = Ie[1]);
            }
          }
        }
        B.push(F);
      }
      d(m) === "regexp" && d(k) === "regexp" && (m = m.toString(), k = k.toString());
      var be = typeof m > "u" ? "undefined" : Pt(m), $e = typeof k > "u" ? "undefined" : Pt(k), we = be !== "undefined" || M && M[M.length - 1].lhs && M[M.length - 1].lhs.hasOwnProperty(F), Ye = $e !== "undefined" || M && M[M.length - 1].rhs && M[M.length - 1].rhs.hasOwnProperty(F);
      if (!we && Ye)
        S(new i(B, k));
      else if (!Ye && we)
        S(new u(B, m));
      else if (d(m) !== d(k))
        S(new l(B, m, k));
      else if (d(m) === "date" && m - k !== 0)
        S(new l(B, m, k));
      else if (be === "object" && m !== null && k !== null)
        if (M.filter(function(ne) {
          return ne.lhs === m;
        }).length)
          m !== k && S(new l(B, m, k));
        else {
          if (M.push({ lhs: m, rhs: k }), Array.isArray(m)) {
            var K;
            for (m.length, K = 0; K < m.length; K++)
              K >= k.length ? S(new a(B, K, new u(void 0, m[K]))) : h(m[K], k[K], S, C, B, K, M);
            for (; K < k.length; )
              S(new a(B, K, new i(void 0, k[K++])));
          } else {
            var Gt = Object.keys(m), ft = Object.keys(k);
            Gt.forEach(function(ne, mn) {
              var qn = ft.indexOf(ne);
              qn >= 0 ? (h(m[ne], k[ne], S, C, B, ne, M), ft = s(ft, qn)) : h(m[ne], void 0, S, C, B, ne, M);
            }), ft.forEach(function(ne) {
              h(void 0, k[ne], S, C, B, ne, M);
            });
          }
          M.length = M.length - 1;
        }
      else
        m !== k && (be === "number" && isNaN(m) && isNaN(k) || S(new l(B, m, k)));
    }
    function v(m, k, S, C) {
      return C = C || [], h(m, k, function(L) {
        L && C.push(L);
      }, S), C.length ? C : void 0;
    }
    function y(m, k, S) {
      if (S.path && S.path.length) {
        var C, L = m[k], F = S.path.length - 1;
        for (C = 0; C < F; C++)
          L = L[S.path[C]];
        switch (S.kind) {
          case "A":
            y(L[S.path[C]], S.index, S.item);
            break;
          case "D":
            delete L[S.path[C]];
            break;
          case "E":
          case "N":
            L[S.path[C]] = S.rhs;
        }
      } else
        switch (S.kind) {
          case "A":
            y(m[k], S.index, S.item);
            break;
          case "D":
            m = s(m, k);
            break;
          case "E":
          case "N":
            m[k] = S.rhs;
        }
      return m;
    }
    function g(m, k, S) {
      if (m && k && S && S.kind) {
        for (var C = m, L = -1, F = S.path ? S.path.length - 1 : 0; ++L < F; )
          typeof C[S.path[L]] > "u" && (C[S.path[L]] = typeof S.path[L] == "number" ? [] : {}), C = C[S.path[L]];
        switch (S.kind) {
          case "A":
            y(S.path ? C[S.path[L]] : C, S.index, S.item);
            break;
          case "D":
            delete C[S.path[L]];
            break;
          case "E":
          case "N":
            C[S.path[L]] = S.rhs;
        }
      }
    }
    function w(m, k, S) {
      if (S.path && S.path.length) {
        var C, L = m[k], F = S.path.length - 1;
        for (C = 0; C < F; C++)
          L = L[S.path[C]];
        switch (S.kind) {
          case "A":
            w(L[S.path[C]], S.index, S.item);
            break;
          case "D":
            L[S.path[C]] = S.lhs;
            break;
          case "E":
            L[S.path[C]] = S.lhs;
            break;
          case "N":
            delete L[S.path[C]];
        }
      } else
        switch (S.kind) {
          case "A":
            w(m[k], S.index, S.item);
            break;
          case "D":
            m[k] = S.lhs;
            break;
          case "E":
            m[k] = S.lhs;
            break;
          case "N":
            m = s(m, k);
        }
      return m;
    }
    function _(m, k, S) {
      if (m && k && S && S.kind) {
        var C, L, F = m;
        for (L = S.path.length - 1, C = 0; C < L; C++)
          typeof F[S.path[C]] > "u" && (F[S.path[C]] = {}), F = F[S.path[C]];
        switch (S.kind) {
          case "A":
            w(F[S.path[C]], S.index, S.item);
            break;
          case "D":
            F[S.path[C]] = S.lhs;
            break;
          case "E":
            F[S.path[C]] = S.lhs;
            break;
          case "N":
            delete F[S.path[C]];
        }
      }
    }
    function f(m, k, S) {
      if (m && k) {
        var C = function(L) {
          S && !S(m, k, L) || g(m, k, L);
        };
        h(m, k, C);
      }
    }
    function c(m) {
      return "color: " + T[m].color + "; font-weight: bold";
    }
    function p(m) {
      var k = m.kind, S = m.path, C = m.lhs, L = m.rhs, F = m.index, M = m.item;
      switch (k) {
        case "E":
          return [S.join("."), C, "→", L];
        case "N":
          return [S.join("."), L];
        case "D":
          return [S.join(".")];
        case "A":
          return [S.join(".") + "[" + F + "]", M];
        default:
          return [];
      }
    }
    function E(m, k, S, C) {
      var L = v(m, k);
      try {
        C ? S.groupCollapsed("diff") : S.group("diff");
      } catch {
        S.log("diff");
      }
      L ? L.forEach(function(F) {
        var M = F.kind, B = p(F);
        S.log.apply(S, ["%c " + T[M].text, c(M)].concat(hn(B)));
      }) : S.log("—— no diff ——");
      try {
        S.groupEnd();
      } catch {
        S.log("—— diff end —— ");
      }
    }
    function P(m, k, S, C) {
      switch (typeof m > "u" ? "undefined" : Pt(m)) {
        case "object":
          return typeof m[C] == "function" ? m[C].apply(m, hn(S)) : m[C];
        case "function":
          return m(k);
        default:
          return m;
      }
    }
    function O(m) {
      var k = m.timestamp, S = m.duration;
      return function(C, L, F) {
        var M = ["action"];
        return M.push("%c" + String(C.type)), k && M.push("%c@ " + L), S && M.push("%c(in " + F.toFixed(2) + " ms)"), M.join(" ");
      };
    }
    function N(m, k) {
      var S = k.logger, C = k.actionTransformer, L = k.titleFormatter, F = L === void 0 ? O(k) : L, M = k.collapsed, B = k.colors, Ie = k.level, be = k.diff, $e = typeof k.titleFormatter > "u";
      m.forEach(function(we, Ye) {
        var K = we.started, Gt = we.startedTime, ft = we.action, ne = we.prevState, mn = we.error, qn = we.took, Zt = we.nextState, Kl = m[Ye + 1];
        Kl && (Zt = Kl.prevState, qn = Kl.started - K);
        var ot = C(ft), Ua = typeof M == "function" ? M(function() {
          return Zt;
        }, ft, we) : M, cp = Xt(Gt), fp = B.title ? "color: " + B.title(ot) + ";" : "", er = ["color: gray; font-weight: lighter;"];
        er.push(fp), k.timestamp && er.push("color: gray; font-weight: lighter;"), k.duration && er.push("color: gray; font-weight: lighter;");
        var tr = F(ot, cp, qn);
        try {
          Ua ? B.title && $e ? S.groupCollapsed.apply(S, ["%c " + tr].concat(er)) : S.groupCollapsed(tr) : B.title && $e ? S.group.apply(S, ["%c " + tr].concat(er)) : S.group(tr);
        } catch {
          S.log(tr);
        }
        var bl = P(Ie, ot, [ne], "prevState"), Yl = P(Ie, ot, [ot], "action"), Xl = P(Ie, ot, [mn, ne], "error"), Gl = P(Ie, ot, [Zt], "nextState");
        if (bl)
          if (B.prevState) {
            var dp = "color: " + B.prevState(ne) + "; font-weight: bold";
            S[bl]("%c prev state", dp, ne);
          } else
            S[bl]("prev state", ne);
        if (Yl)
          if (B.action) {
            var pp = "color: " + B.action(ot) + "; font-weight: bold";
            S[Yl]("%c action    ", pp, ot);
          } else
            S[Yl]("action    ", ot);
        if (mn && Xl)
          if (B.error) {
            var vp = "color: " + B.error(mn, ne) + "; font-weight: bold;";
            S[Xl]("%c error     ", vp, mn);
          } else
            S[Xl]("error     ", mn);
        if (Gl)
          if (B.nextState) {
            var hp = "color: " + B.nextState(Zt) + "; font-weight: bold";
            S[Gl]("%c next state", hp, Zt);
          } else
            S[Gl]("next state", Zt);
        be && E(ne, Zt, S, Ua);
        try {
          S.groupEnd();
        } catch {
          S.log("—— log end ——");
        }
      });
    }
    function j() {
      var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = Object.assign({}, R, m), S = k.logger, C = k.stateTransformer, L = k.errorTransformer, F = k.predicate, M = k.logErrors, B = k.diffPredicate;
      if (typeof S > "u")
        return function() {
          return function(be) {
            return function($e) {
              return be($e);
            };
          };
        };
      if (m.getState && m.dispatch)
        return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`), function() {
          return function(be) {
            return function($e) {
              return be($e);
            };
          };
        };
      var Ie = [];
      return function(be) {
        var $e = be.getState;
        return function(we) {
          return function(Ye) {
            if (typeof F == "function" && !F($e, Ye))
              return we(Ye);
            var K = {};
            Ie.push(K), K.started = Jn.now(), K.startedTime = /* @__PURE__ */ new Date(), K.prevState = C($e()), K.action = Ye;
            var Gt = void 0;
            if (M)
              try {
                Gt = we(Ye);
              } catch (ne) {
                K.error = L(ne);
              }
            else
              Gt = we(Ye);
            K.took = Jn.now() - K.started, K.nextState = C($e());
            var ft = k.diff && typeof B == "function" ? B($e, Ye) : k.diff;
            if (N(Ie, Object.assign({}, k, { diff: ft })), Ie.length = 0, K.error)
              throw K.error;
            return Gt;
          };
        };
      };
    }
    var I, z, le = function(m, k) {
      return new Array(k + 1).join(m);
    }, rt = function(m, k) {
      return le("0", k - m.toString().length) + m;
    }, Xt = function(m) {
      return rt(m.getHours(), 2) + ":" + rt(m.getMinutes(), 2) + ":" + rt(m.getSeconds(), 2) + "." + rt(m.getMilliseconds(), 3);
    }, Jn = typeof performance < "u" && performance !== null && typeof performance.now == "function" ? performance : Date, Pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
      return typeof m;
    } : function(m) {
      return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
    }, hn = function(m) {
      if (Array.isArray(m)) {
        for (var k = 0, S = Array(m.length); k < m.length; k++)
          S[k] = m[k];
        return S;
      }
      return Array.from(m);
    }, Ct = [];
    I = (typeof nr > "u" ? "undefined" : Pt(nr)) === "object" && nr ? nr : typeof window < "u" ? window : {}, z = I.DeepDiff, z && Ct.push(function() {
      typeof z < "u" && I.DeepDiff === v && (I.DeepDiff = z, z = void 0);
    }), r(l, o), r(i, o), r(u, o), r(a, o), Object.defineProperties(v, { diff: { value: v, enumerable: !0 }, observableDiff: { value: h, enumerable: !0 }, applyDiff: { value: f, enumerable: !0 }, applyChange: { value: g, enumerable: !0 }, revertChange: { value: _, enumerable: !0 }, isConflict: { value: function() {
      return typeof z < "u";
    }, enumerable: !0 }, noConflict: { value: function() {
      return Ct && (Ct.forEach(function(m) {
        m();
      }), Ct = null), v;
    }, enumerable: !0 } });
    var T = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } }, R = { level: "log", logger: console, logErrors: !0, collapsed: void 0, predicate: void 0, duration: !1, timestamp: !0, stateTransformer: function(m) {
      return m;
    }, actionTransformer: function(m) {
      return m;
    }, errorTransformer: function(m) {
      return m;
    }, colors: { title: function() {
      return "inherit";
    }, prevState: function() {
      return "#9E9E9E";
    }, action: function() {
      return "#03A9F4";
    }, nextState: function() {
      return "#4CAF50";
    }, error: function() {
      return "#F20404";
    } }, diff: !1, diffPredicate: void 0, transformer: void 0 }, D = function() {
      var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = m.dispatch, S = m.getState;
      return typeof k == "function" || typeof S == "function" ? j()({ dispatch: k, getState: S }) : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
    };
    n.defaults = R, n.createLogger = j, n.logger = D, n.default = D, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})($u, $u.exports);
var Iy = $u.exports;
const tg = /* @__PURE__ */ ul(Iy), By = {
  theme: void 0,
  kind: void 0
}, sp = yy({
  name: "theme",
  initialState: By,
  reducers: {
    changeTheme: (e, t) => {
      e.kind = t.payload.kind, e.theme = { ...e.theme, ...t.payload.theme ?? {} }, e.kind === "light" ? (e.theme.computedOne = "rgba(0, 0, 0, 0.05)", e.theme.computedTwo = "rgba(0, 0, 0, 0.1)") : e.kind === "dark" ? (e.theme.computedOne = "rgba(255, 255, 255, 0.05)", e.theme.computedTwo = "rgba(255, 255, 255, 0.1)") : (e.theme.computedOne = "transparent", e.theme.computedTwo = "transparent");
    }
  }
}), Uy = ym, { changeTheme: ng } = sp.actions, rg = sp.reducer;
function og(e, t) {
  return function(r) {
    const { command: o, payload: l } = r.data;
    if (o) {
      const i = t[o];
      i ? e.dispatch(i(l)) : console.error(`Unable to find handler for command: ${o}`);
    } else
      console.error("Received message with unknown command", r.data);
  };
}
function lg(e) {
  const t = Object.keys(e);
  for (const n of t)
    console.log("starting listener for: ", n), e[n]();
}
const Vy = [
  "foreground",
  "disabledForeground",
  "background",
  "border",
  "focusBorder",
  "buttonBorder",
  "buttonBackground",
  "buttonForeground",
  "buttonHoverBackground",
  "buttonSecondaryBackground",
  "buttonSecondaryForeground",
  "buttonSecondaryHoverBackground",
  "inputBackground",
  "inputForeground",
  "inputBorder",
  "inputPlaceholderForeground",
  "tabBorder",
  "tabActiveBackground",
  "tabActiveForeground",
  "tabInactiveBackground",
  "tabInactiveForeground",
  "dropdownBackground",
  "dropdownBorder",
  "dropdownForeground",
  "checkboxBackground",
  "checkboxBorder",
  "checkboxForeground",
  "errorForeground",
  "errorBackground",
  "errorBorder",
  "listActiveSelectionBackground",
  "listActiveSelectionForeground",
  "listHoverBackground",
  "contrastActiveBorder",
  "linkForeground",
  "linkActiveForeground",
  "computedOne",
  "computedTwo",
  "badgeForeground",
  "badgeBackground",
  "notificationsForeground",
  "notificationsBackground",
  "notificationsBorder"
], Q = {
  foreground: "--xliic-foreground",
  disabledForeground: "--xliic-disabledForeground",
  background: "--xliic-background",
  border: "--xliic-border",
  focusBorder: "--xliic-focusBorder",
  buttonBorder: "--xliic-buttonBorder",
  buttonBackground: "--xliic-buttonBackground",
  buttonForeground: "--xliic-buttonForeground",
  buttonHoverBackground: "--xliic-buttonHoverBackground",
  buttonSecondaryBackground: "--xliic-buttonSecondaryBackground",
  buttonSecondaryForeground: "--xliic-buttonSecondaryForeground",
  buttonSecondaryHoverBackground: "--xliic-buttonSecondaryHoverBackground",
  inputBackground: "--xliic-inputBackground",
  inputForeground: "--xliic-inputForeground",
  inputBorder: "--xliic-inputBorder",
  inputPlaceholderForeground: "--xliic-inputPlaceholderForeground",
  tabBorder: "--xliic-tabBorder",
  tabActiveBackground: "--xliic-tabActiveBackground",
  tabActiveForeground: "--xliic-tabActiveForeground",
  tabInactiveBackground: "--xliic-tabInactiveBackground",
  tabInactiveForeground: "--xliic-tabInactiveForeground",
  dropdownBackground: "--xliic-dropdownBackground",
  dropdownBorder: "--xliic-dropdownBorder",
  dropdownForeground: "--xliic-dropdownForeground",
  checkboxBackground: "--xliic-checkboxBackground",
  checkboxBorder: "--xliic-checkboxBorder",
  checkboxForeground: "--xliic-checkboxForeground",
  errorForeground: "--xliic-errorForeground",
  errorBackground: "--xliic-errorBackground",
  errorBorder: "--xliic-errorBorder",
  listActiveSelectionBackground: "--xliic-listActiveSelectionBackground",
  listActiveSelectionForeground: "--xliic-listActiveSelectionForeground",
  listHoverBackground: "--xliic-listHoverBackground",
  contrastActiveBorder: "--xliic-contrastActiveBorder",
  linkForeground: "--xliic-linkForeground",
  linkActiveForeground: "--xliic-linkActiveForeground",
  computedOne: "--xliic-computedOne",
  computedTwo: "--xliic-computedTwo",
  badgeForeground: "--xliic-badgeForeground",
  badgeBackground: "--xliic-badgeBackground",
  notificationsForeground: "--xliic-notificationsForeground",
  notificationsBackground: "--xliic-notificationsBackground",
  notificationsBorder: "--xliic-notificationsBorder"
};
function ig() {
  const e = Uy((t) => t.theme);
  return /* @__PURE__ */ Ip.jsxs("style", { children: [
    Hy(e.theme),
    Wy(),
    Qy()
  ] });
}
function Wy() {
  return `
  body {
    padding: 0;
    margin: 0;
    background-color: var(--xliic-background);
    color: var(--xliic-foreground);
    }`;
}
function Hy(e) {
  const t = [];
  if (e !== void 0)
    for (const n of Vy)
      e[n] && t.push(`${Q[n]}: ${e[n]};`);
  return `:root {
    ${t.join(`
`)}
  }`;
}
function Qy() {
  return `#root .btn-primary {
    --bs-btn-color: var(${Q.buttonForeground});
    --bs-btn-bg: var(${Q.buttonBackground});
    --bs-btn-border-color: var(${Q.buttonBorder});
    --bs-btn-hover-color: var(${Q.buttonForeground});
    --bs-btn-hover-bg: var(${Q.buttonHoverBackground});
    --bs-btn-hover-border-color: var(${Q.buttonHoverBackground});
    --bs-btn-disabled-color: var(${Q.disabledForeground});
    --bs-btn-disabled-bg: var(${Q.buttonBackground});
    --bs-btn-disabled-border-color: var(${Q.buttonBorder});
  }

  #root .btn-secondary {
    --bs-btn-color: var(${Q.buttonSecondaryForeground});
    --bs-btn-bg: var(${Q.buttonSecondaryBackground});
    --bs-btn-border-color: var(${Q.buttonBorder});
    --bs-btn-hover-color: var(${Q.buttonSecondaryForeground});
    --bs-btn-hover-bg: var(${Q.buttonSecondaryHoverBackground});
    --bs-btn-hover-border-color: var(${Q.buttonSecondaryHoverBackground});
    --bs-btn-disabled-color: var(${Q.buttonSecondaryForeground});
    --bs-btn-disabled-bg: var(${Q.buttonSecondaryBackground});
    --bs-btn-disabled-border-color: var(${Q.buttonBorder});
  }

  #root .dropdown-menu {
    --bs-dropdown-border-color: var(${Q.dropdownBorder});
    --bs-dropdown-bg: var(${Q.dropdownBackground});
    --bs-dropdown-link-color: var(${Q.dropdownForeground});
  }

  #root .form-control, #root .form-select {
    color: var(${Q.inputForeground});
    background-color: var(${Q.inputBackground});
    border: 1px solid var(${Q.border});
  }

  #root .form-control:focus, #root .form-select:focus {
    box-shadow: 0 0 0 0.25rem var(${Q.focusBorder});
  }

  #root .invalid-feedback {
    color: var(${Q.errorForeground});
  }

  // #root :focus-visible {
  //   outline-color: var(${Q.focusBorder});
  //   outline-width: medium;
  //   outline-style: solid;
  // }

  #root .form-control::placeholder {
    opacity: 0.5;
  }
  `;
}
export {
  by as $,
  Zy as P,
  Oc as R,
  Q as T,
  Jy as a,
  eg as b,
  yy as c,
  Wh as d,
  ig as e,
  ng as f,
  nr as g,
  ul as h,
  qy as i,
  Ip as j,
  Ky as k,
  tg as l,
  og as m,
  Ca as n,
  Yy as o,
  el as p,
  dm as q,
  Te as r,
  lg as s,
  rg as t,
  ym as u,
  Gy as v,
  Xy as y
};
