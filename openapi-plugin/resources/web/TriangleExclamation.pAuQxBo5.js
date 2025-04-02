var gv = Object.defineProperty;
var yv = (e, t, n) => t in e ? gv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Lr = (e, t, n) => yv(e, typeof t != "symbol" ? t + "" : t, n);
function wv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function OE(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
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
var ad = { exports: {} }, dl = {}, cd = { exports: {} }, b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To = Symbol.for("react.element"), Sv = Symbol.for("react.portal"), Ev = Symbol.for("react.fragment"), kv = Symbol.for("react.strict_mode"), xv = Symbol.for("react.profiler"), Cv = Symbol.for("react.provider"), _v = Symbol.for("react.context"), Pv = Symbol.for("react.forward_ref"), Nv = Symbol.for("react.suspense"), Rv = Symbol.for("react.memo"), Ov = Symbol.for("react.lazy"), fc = Symbol.iterator;
function Tv(e) {
  return e === null || typeof e != "object" ? null : (e = fc && e[fc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, dd = Object.assign, pd = {};
function Pr(e, t, n) {
  this.props = e, this.context = t, this.refs = pd, this.updater = n || fd;
}
Pr.prototype.isReactComponent = {};
Pr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hd() {
}
hd.prototype = Pr.prototype;
function Zs(e, t, n) {
  this.props = e, this.context = t, this.refs = pd, this.updater = n || fd;
}
var Js = Zs.prototype = new hd();
Js.constructor = Zs;
dd(Js, Pr.prototype);
Js.isPureReactComponent = !0;
var dc = Array.isArray, md = Object.prototype.hasOwnProperty, qs = { current: null }, vd = { key: !0, ref: !0, __self: !0, __source: !0 };
function gd(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) md.call(t, r) && !vd.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: To, type: e, key: i, ref: l, props: o, _owner: qs.current };
}
function Dv(e, t) {
  return { $$typeof: To, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ea(e) {
  return typeof e == "object" && e !== null && e.$$typeof === To;
}
function Av(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var pc = /\/+/g;
function Ql(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Av("" + e.key) : t.toString(36);
}
function di(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (i) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case To:
        case Sv:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + Ql(l, 0) : r, dc(o) ? (n = "", e != null && (n = e.replace(pc, "$&/") + "/"), di(o, t, n, "", function(a) {
    return a;
  })) : o != null && (ea(o) && (o = Dv(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(pc, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", dc(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Ql(i, u);
    l += di(i, t, n, s, o);
  }
  else if (s = Tv(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Ql(i, u++), l += di(i, t, n, s, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Uo(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return di(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Lv(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null }, pi = { transition: null }, Mv = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: pi, ReactCurrentOwner: qs };
function yd() {
  throw Error("act(...) is not supported in production builds of React.");
}
b.Children = { map: Uo, forEach: function(e, t, n) {
  Uo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Uo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Uo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ea(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
b.Component = Pr;
b.Fragment = Ev;
b.Profiler = xv;
b.PureComponent = Zs;
b.StrictMode = kv;
b.Suspense = Nv;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mv;
b.act = yd;
b.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = dd({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = qs.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) md.call(t, s) && !vd.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: To, type: e.type, key: o, ref: i, props: r, _owner: l };
};
b.createContext = function(e) {
  return e = { $$typeof: _v, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Cv, _context: e }, e.Consumer = e;
};
b.createElement = gd;
b.createFactory = function(e) {
  var t = gd.bind(null, e);
  return t.type = e, t;
};
b.createRef = function() {
  return { current: null };
};
b.forwardRef = function(e) {
  return { $$typeof: Pv, render: e };
};
b.isValidElement = ea;
b.lazy = function(e) {
  return { $$typeof: Ov, _payload: { _status: -1, _result: e }, _init: Lv };
};
b.memo = function(e, t) {
  return { $$typeof: Rv, type: e, compare: t === void 0 ? null : t };
};
b.startTransition = function(e) {
  var t = pi.transition;
  pi.transition = {};
  try {
    e();
  } finally {
    pi.transition = t;
  }
};
b.unstable_act = yd;
b.useCallback = function(e, t) {
  return Te.current.useCallback(e, t);
};
b.useContext = function(e) {
  return Te.current.useContext(e);
};
b.useDebugValue = function() {
};
b.useDeferredValue = function(e) {
  return Te.current.useDeferredValue(e);
};
b.useEffect = function(e, t) {
  return Te.current.useEffect(e, t);
};
b.useId = function() {
  return Te.current.useId();
};
b.useImperativeHandle = function(e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
b.useInsertionEffect = function(e, t) {
  return Te.current.useInsertionEffect(e, t);
};
b.useLayoutEffect = function(e, t) {
  return Te.current.useLayoutEffect(e, t);
};
b.useMemo = function(e, t) {
  return Te.current.useMemo(e, t);
};
b.useReducer = function(e, t, n) {
  return Te.current.useReducer(e, t, n);
};
b.useRef = function(e) {
  return Te.current.useRef(e);
};
b.useState = function(e) {
  return Te.current.useState(e);
};
b.useSyncExternalStore = function(e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
b.useTransition = function() {
  return Te.current.useTransition();
};
b.version = "18.3.1";
cd.exports = b;
var C = cd.exports;
const At = /* @__PURE__ */ Xs(C), ju = /* @__PURE__ */ wv({
  __proto__: null,
  default: At
}, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Iv = C, jv = Symbol.for("react.element"), Fv = Symbol.for("react.fragment"), zv = Object.prototype.hasOwnProperty, $v = Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Bv = { key: !0, ref: !0, __self: !0, __source: !0 };
function wd(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) zv.call(t, r) && !Bv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: jv, type: e, key: i, ref: l, props: o, _owner: $v.current };
}
dl.Fragment = Fv;
dl.jsx = wd;
dl.jsxs = wd;
ad.exports = dl;
var A = ad.exports, Sd = { exports: {} }, He = {}, Ed = { exports: {} }, kd = {};
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
  function t(D, I) {
    var $ = D.length;
    D.push(I);
    e: for (; 0 < $; ) {
      var S = $ - 1 >>> 1, x = D[S];
      if (0 < o(x, I)) D[S] = I, D[$] = x, $ = S;
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var I = D[0], $ = D.pop();
    if ($ !== I) {
      D[0] = $;
      e: for (var S = 0, x = D.length, k = x >>> 1; S < k; ) {
        var T = 2 * (S + 1) - 1, M = D[T], F = T + 1, B = D[F];
        if (0 > o(M, $)) F < x && 0 > o(B, M) ? (D[S] = B, D[F] = $, S = F) : (D[S] = M, D[T] = $, S = T);
        else if (F < x && 0 > o(B, $)) D[S] = B, D[F] = $, S = F;
        else break e;
      }
    }
    return I;
  }
  function o(D, I) {
    var $ = D.sortIndex - I.sortIndex;
    return $ !== 0 ? $ : D.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, u = l.now();
    e.unstable_now = function() {
      return l.now() - u;
    };
  }
  var s = [], a = [], c = 1, m = null, f = 3, v = !1, w = !1, g = !1, P = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(D) {
    for (var I = n(a); I !== null; ) {
      if (I.callback === null) r(a);
      else if (I.startTime <= D) r(a), I.sortIndex = I.expirationTime, t(s, I);
      else break;
      I = n(a);
    }
  }
  function y(D) {
    if (g = !1, p(D), !w) if (n(s) !== null) w = !0, Bt(_);
    else {
      var I = n(a);
      I !== null && Ge(y, I.startTime - D);
    }
  }
  function _(D, I) {
    w = !1, g && (g = !1, h(R), R = -1), v = !0;
    var $ = f;
    try {
      for (p(I), m = n(s); m !== null && (!(m.expirationTime > I) || D && !me()); ) {
        var S = m.callback;
        if (typeof S == "function") {
          m.callback = null, f = m.priorityLevel;
          var x = S(m.expirationTime <= I);
          I = e.unstable_now(), typeof x == "function" ? m.callback = x : m === n(s) && r(s), p(I);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var k = !0;
      else {
        var T = n(a);
        T !== null && Ge(y, T.startTime - I), k = !1;
      }
      return k;
    } finally {
      m = null, f = $, v = !1;
    }
  }
  var N = !1, E = null, R = -1, z = 5, j = -1;
  function me() {
    return !(e.unstable_now() - j < z);
  }
  function Ke() {
    if (E !== null) {
      var D = e.unstable_now();
      j = D;
      var I = !0;
      try {
        I = E(!0, D);
      } finally {
        I ? xt() : (N = !1, E = null);
      }
    } else N = !1;
  }
  var xt;
  if (typeof d == "function") xt = function() {
    d(Ke);
  };
  else if (typeof MessageChannel < "u") {
    var dn = new MessageChannel(), pt = dn.port2;
    dn.port1.onmessage = Ke, xt = function() {
      pt.postMessage(null);
    };
  } else xt = function() {
    P(Ke, 0);
  };
  function Bt(D) {
    E = D, N || (N = !0, xt());
  }
  function Ge(D, I) {
    R = P(function() {
      D(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    w || v || (w = !0, Bt(_));
  }, e.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < D ? Math.floor(1e3 / D) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(D) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = f;
    }
    var $ = f;
    f = I;
    try {
      return D();
    } finally {
      f = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(D, I) {
    switch (D) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        D = 3;
    }
    var $ = f;
    f = D;
    try {
      return I();
    } finally {
      f = $;
    }
  }, e.unstable_scheduleCallback = function(D, I, $) {
    var S = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? S + $ : S) : $ = S, D) {
      case 1:
        var x = -1;
        break;
      case 2:
        x = 250;
        break;
      case 5:
        x = 1073741823;
        break;
      case 4:
        x = 1e4;
        break;
      default:
        x = 5e3;
    }
    return x = $ + x, D = { id: c++, callback: I, priorityLevel: D, startTime: $, expirationTime: x, sortIndex: -1 }, $ > S ? (D.sortIndex = $, t(a, D), n(s) === null && D === n(a) && (g ? (h(R), R = -1) : g = !0, Ge(y, $ - S))) : (D.sortIndex = x, t(s, D), w || v || (w = !0, Bt(_))), D;
  }, e.unstable_shouldYield = me, e.unstable_wrapCallback = function(D) {
    var I = f;
    return function() {
      var $ = f;
      f = I;
      try {
        return D.apply(this, arguments);
      } finally {
        f = $;
      }
    };
  };
})(kd);
Ed.exports = kd;
var Uv = Ed.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wv = C, be = Uv;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var xd = /* @__PURE__ */ new Set(), lo = {};
function zn(e, t) {
  hr(e, t), hr(e + "Capture", t);
}
function hr(e, t) {
  for (lo[e] = t, e = 0; e < t.length; e++) xd.add(t[e]);
}
var Lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fu = Object.prototype.hasOwnProperty, bv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, hc = {}, mc = {};
function Vv(e) {
  return Fu.call(mc, e) ? !0 : Fu.call(hc, e) ? !1 : bv.test(e) ? mc[e] = !0 : (hc[e] = !0, !1);
}
function Hv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
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
function Qv(e, t, n, r) {
  if (t === null || typeof t > "u" || Hv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
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
function De(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ee[e] = new De(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ee[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ee[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ee[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ee[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ee[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ee[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ee[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ee[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ta = /[\-:]([a-z])/g;
function na(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ta,
    na
  );
  Ee[t] = new De(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ta, na);
  Ee[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ta, na);
  Ee[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ee[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ee[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ra(e, t, n, r) {
  var o = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Qv(t, n, o, r) && (n = null), r || o === null ? Vv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zt = Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Wo = Symbol.for("react.element"), Kn = Symbol.for("react.portal"), Gn = Symbol.for("react.fragment"), oa = Symbol.for("react.strict_mode"), zu = Symbol.for("react.profiler"), Cd = Symbol.for("react.provider"), _d = Symbol.for("react.context"), ia = Symbol.for("react.forward_ref"), $u = Symbol.for("react.suspense"), Bu = Symbol.for("react.suspense_list"), la = Symbol.for("react.memo"), Vt = Symbol.for("react.lazy"), Pd = Symbol.for("react.offscreen"), vc = Symbol.iterator;
function Ir(e) {
  return e === null || typeof e != "object" ? null : (e = vc && e[vc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ne = Object.assign, Kl;
function br(e) {
  if (Kl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Kl = t && t[1] || "";
  }
  return `
` + Kl + e;
}
var Gl = !1;
function Yl(e, t) {
  if (!e || Gl) return "";
  Gl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (a) {
        var r = a;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (a) {
        r = a;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var o = a.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, u = i.length - 1; 1 <= l && 0 <= u && o[l] !== i[u]; ) u--;
      for (; 1 <= l && 0 <= u; l--, u--) if (o[l] !== i[u]) {
        if (l !== 1 || u !== 1)
          do
            if (l--, u--, 0 > u || o[l] !== i[u]) {
              var s = `
` + o[l].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    Gl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? br(e) : "";
}
function Kv(e) {
  switch (e.tag) {
    case 5:
      return br(e.type);
    case 16:
      return br("Lazy");
    case 13:
      return br("Suspense");
    case 19:
      return br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Yl(e.type, !1), e;
    case 11:
      return e = Yl(e.type.render, !1), e;
    case 1:
      return e = Yl(e.type, !0), e;
    default:
      return "";
  }
}
function Uu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gn:
      return "Fragment";
    case Kn:
      return "Portal";
    case zu:
      return "Profiler";
    case oa:
      return "StrictMode";
    case $u:
      return "Suspense";
    case Bu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case _d:
      return (e.displayName || "Context") + ".Consumer";
    case Cd:
      return (e._context.displayName || "Context") + ".Provider";
    case ia:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case la:
      return t = e.displayName || null, t !== null ? t : Uu(e.type) || "Memo";
    case Vt:
      t = e._payload, e = e._init;
      try {
        return Uu(e(t));
      } catch {
      }
  }
  return null;
}
function Gv(e) {
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
      return Uu(t);
    case 8:
      return t === oa ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ln(e) {
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
function Nd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Yv(e) {
  var t = Nd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function bo(e) {
  e._valueTracker || (e._valueTracker = Yv(e));
}
function Rd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Nd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Di(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wu(e, t) {
  var n = t.checked;
  return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function gc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ln(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Od(e, t) {
  t = t.checked, t != null && ra(e, "checked", t, !1);
}
function bu(e, t) {
  Od(e, t);
  var n = ln(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Vu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vu(e, t.type, ln(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function yc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Vu(e, t, n) {
  (t !== "number" || Di(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vr = Array.isArray;
function lr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ln(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function wc(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(O(92));
      if (Vr(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ln(n) };
}
function Td(e, t) {
  var n = ln(t.value), r = ln(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Sc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Dd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Dd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Vo, Ad = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Vo = Vo || document.createElement("div"), Vo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Vo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function uo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yr = {
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
}, Xv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yr).forEach(function(e) {
  Xv.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Yr[t] = Yr[e];
  });
});
function Ld(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Yr.hasOwnProperty(e) && Yr[e] ? ("" + t).trim() : t + "px";
}
function Md(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Ld(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Zv = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ku(e, t) {
  if (t) {
    if (Zv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Gu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Yu = null;
function ua(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Xu = null, ur = null, sr = null;
function Ec(e) {
  if (e = Lo(e)) {
    if (typeof Xu != "function") throw Error(O(280));
    var t = e.stateNode;
    t && (t = gl(t), Xu(e.stateNode, e.type, t));
  }
}
function Id(e) {
  ur ? sr ? sr.push(e) : sr = [e] : ur = e;
}
function jd() {
  if (ur) {
    var e = ur, t = sr;
    if (sr = ur = null, Ec(e), t) for (e = 0; e < t.length; e++) Ec(t[e]);
  }
}
function Fd(e, t) {
  return e(t);
}
function zd() {
}
var Xl = !1;
function $d(e, t, n) {
  if (Xl) return e(t, n);
  Xl = !0;
  try {
    return Fd(e, t, n);
  } finally {
    Xl = !1, (ur !== null || sr !== null) && (zd(), jd());
  }
}
function so(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = gl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Zu = !1;
if (Lt) try {
  var jr = {};
  Object.defineProperty(jr, "passive", { get: function() {
    Zu = !0;
  } }), window.addEventListener("test", jr, jr), window.removeEventListener("test", jr, jr);
} catch {
  Zu = !1;
}
function Jv(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Xr = !1, Ai = null, Li = !1, Ju = null, qv = { onError: function(e) {
  Xr = !0, Ai = e;
} };
function eg(e, t, n, r, o, i, l, u, s) {
  Xr = !1, Ai = null, Jv.apply(qv, arguments);
}
function tg(e, t, n, r, o, i, l, u, s) {
  if (eg.apply(this, arguments), Xr) {
    if (Xr) {
      var a = Ai;
      Xr = !1, Ai = null;
    } else throw Error(O(198));
    Li || (Li = !0, Ju = a);
  }
}
function $n(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Bd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function kc(e) {
  if ($n(e) !== e) throw Error(O(188));
}
function ng(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $n(e), t === null) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return kc(o), e;
        if (i === r) return kc(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          l = !0, n = o, r = i;
          break;
        }
        if (u === r) {
          l = !0, r = o, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (u === r) {
            l = !0, r = i, n = o;
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Ud(e) {
  return e = ng(e), e !== null ? Wd(e) : null;
}
function Wd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bd = be.unstable_scheduleCallback, xc = be.unstable_cancelCallback, rg = be.unstable_shouldYield, og = be.unstable_requestPaint, ie = be.unstable_now, ig = be.unstable_getCurrentPriorityLevel, sa = be.unstable_ImmediatePriority, Vd = be.unstable_UserBlockingPriority, Mi = be.unstable_NormalPriority, lg = be.unstable_LowPriority, Hd = be.unstable_IdlePriority, pl = null, St = null;
function ug(e) {
  if (St && typeof St.onCommitFiberRoot == "function") try {
    St.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ut = Math.clz32 ? Math.clz32 : cg, sg = Math.log, ag = Math.LN2;
function cg(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (sg(e) / ag | 0) | 0;
}
var Ho = 64, Qo = 4194304;
function Hr(e) {
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
function Ii(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? r = Hr(u) : (i &= l, i !== 0 && (r = Hr(i)));
  } else l = n & ~o, l !== 0 ? r = Hr(l) : i !== 0 && (r = Hr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ut(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function fg(e, t) {
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
function dg(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - ut(i), u = 1 << l, s = o[l];
    s === -1 ? (!(u & n) || u & r) && (o[l] = fg(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function qu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Qd() {
  var e = Ho;
  return Ho <<= 1, !(Ho & 4194240) && (Ho = 64), e;
}
function Zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Do(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ut(t), e[t] = n;
}
function pg(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ut(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function aa(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Q = 0;
function Kd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Gd, ca, Yd, Xd, Zd, es = !1, Ko = [], Xt = null, Zt = null, Jt = null, ao = /* @__PURE__ */ new Map(), co = /* @__PURE__ */ new Map(), Qt = [], hg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Cc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Zt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      ao.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      co.delete(t.pointerId);
  }
}
function Fr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Lo(t), t !== null && ca(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function mg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Xt = Fr(Xt, e, t, n, r, o), !0;
    case "dragenter":
      return Zt = Fr(Zt, e, t, n, r, o), !0;
    case "mouseover":
      return Jt = Fr(Jt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return ao.set(i, Fr(ao.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, co.set(i, Fr(co.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Jd(e) {
  var t = yn(e.target);
  if (t !== null) {
    var n = $n(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Bd(n), t !== null) {
          e.blockedOn = t, Zd(e.priority, function() {
            Yd(n);
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
function hi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ts(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Yu = r, n.target.dispatchEvent(r), Yu = null;
    } else return t = Lo(n), t !== null && ca(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function _c(e, t, n) {
  hi(e) && n.delete(t);
}
function vg() {
  es = !1, Xt !== null && hi(Xt) && (Xt = null), Zt !== null && hi(Zt) && (Zt = null), Jt !== null && hi(Jt) && (Jt = null), ao.forEach(_c), co.forEach(_c);
}
function zr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, es || (es = !0, be.unstable_scheduleCallback(be.unstable_NormalPriority, vg)));
}
function fo(e) {
  function t(o) {
    return zr(o, e);
  }
  if (0 < Ko.length) {
    zr(Ko[0], e);
    for (var n = 1; n < Ko.length; n++) {
      var r = Ko[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Xt !== null && zr(Xt, e), Zt !== null && zr(Zt, e), Jt !== null && zr(Jt, e), ao.forEach(t), co.forEach(t), n = 0; n < Qt.length; n++) r = Qt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qt.length && (n = Qt[0], n.blockedOn === null); ) Jd(n), n.blockedOn === null && Qt.shift();
}
var ar = zt.ReactCurrentBatchConfig, ji = !0;
function gg(e, t, n, r) {
  var o = Q, i = ar.transition;
  ar.transition = null;
  try {
    Q = 1, fa(e, t, n, r);
  } finally {
    Q = o, ar.transition = i;
  }
}
function yg(e, t, n, r) {
  var o = Q, i = ar.transition;
  ar.transition = null;
  try {
    Q = 4, fa(e, t, n, r);
  } finally {
    Q = o, ar.transition = i;
  }
}
function fa(e, t, n, r) {
  if (ji) {
    var o = ts(e, t, n, r);
    if (o === null) uu(e, t, r, Fi, n), Cc(e, r);
    else if (mg(o, e, t, n, r)) r.stopPropagation();
    else if (Cc(e, r), t & 4 && -1 < hg.indexOf(e)) {
      for (; o !== null; ) {
        var i = Lo(o);
        if (i !== null && Gd(i), i = ts(e, t, n, r), i === null && uu(e, t, r, Fi, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else uu(e, t, r, null, n);
  }
}
var Fi = null;
function ts(e, t, n, r) {
  if (Fi = null, e = ua(r), e = yn(e), e !== null) if (t = $n(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Bd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Fi = e, null;
}
function qd(e) {
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
      switch (ig()) {
        case sa:
          return 1;
        case Vd:
          return 4;
        case Mi:
        case lg:
          return 16;
        case Hd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gt = null, da = null, mi = null;
function ep() {
  if (mi) return mi;
  var e, t = da, n = t.length, r, o = "value" in Gt ? Gt.value : Gt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return mi = o.slice(e, 1 < r ? 1 - r : void 0);
}
function vi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Go() {
  return !0;
}
function Pc() {
  return !1;
}
function Qe(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Go : Pc, this.isPropagationStopped = Pc, this;
  }
  return ne(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Go);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Go);
  }, persist: function() {
  }, isPersistent: Go }), t;
}
var Nr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, pa = Qe(Nr), Ao = ne({}, Nr, { view: 0, detail: 0 }), wg = Qe(Ao), Jl, ql, $r, hl = ne({}, Ao, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ha, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== $r && ($r && e.type === "mousemove" ? (Jl = e.screenX - $r.screenX, ql = e.screenY - $r.screenY) : ql = Jl = 0, $r = e), Jl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ql;
} }), Nc = Qe(hl), Sg = ne({}, hl, { dataTransfer: 0 }), Eg = Qe(Sg), kg = ne({}, Ao, { relatedTarget: 0 }), eu = Qe(kg), xg = ne({}, Nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cg = Qe(xg), _g = ne({}, Nr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Pg = Qe(_g), Ng = ne({}, Nr, { data: 0 }), Rc = Qe(Ng), Rg = {
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
}, Og = {
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
}, Tg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Dg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tg[e]) ? !!t[e] : !1;
}
function ha() {
  return Dg;
}
var Ag = ne({}, Ao, { key: function(e) {
  if (e.key) {
    var t = Rg[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = vi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Og[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ha, charCode: function(e) {
  return e.type === "keypress" ? vi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Lg = Qe(Ag), Mg = ne({}, hl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Oc = Qe(Mg), Ig = ne({}, Ao, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ha }), jg = Qe(Ig), Fg = ne({}, Nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zg = Qe(Fg), $g = ne({}, hl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Bg = Qe($g), Ug = [9, 13, 27, 32], ma = Lt && "CompositionEvent" in window, Zr = null;
Lt && "documentMode" in document && (Zr = document.documentMode);
var Wg = Lt && "TextEvent" in window && !Zr, tp = Lt && (!ma || Zr && 8 < Zr && 11 >= Zr), Tc = " ", Dc = !1;
function np(e, t) {
  switch (e) {
    case "keyup":
      return Ug.indexOf(t.keyCode) !== -1;
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
function rp(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Yn = !1;
function bg(e, t) {
  switch (e) {
    case "compositionend":
      return rp(t);
    case "keypress":
      return t.which !== 32 ? null : (Dc = !0, Tc);
    case "textInput":
      return e = t.data, e === Tc && Dc ? null : e;
    default:
      return null;
  }
}
function Vg(e, t) {
  if (Yn) return e === "compositionend" || !ma && np(e, t) ? (e = ep(), mi = da = Gt = null, Yn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return tp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Hg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ac(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Hg[e.type] : t === "textarea";
}
function op(e, t, n, r) {
  Id(r), t = zi(t, "onChange"), 0 < t.length && (n = new pa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Jr = null, po = null;
function Qg(e) {
  mp(e, 0);
}
function ml(e) {
  var t = Jn(e);
  if (Rd(t)) return e;
}
function Kg(e, t) {
  if (e === "change") return t;
}
var ip = !1;
if (Lt) {
  var tu;
  if (Lt) {
    var nu = "oninput" in document;
    if (!nu) {
      var Lc = document.createElement("div");
      Lc.setAttribute("oninput", "return;"), nu = typeof Lc.oninput == "function";
    }
    tu = nu;
  } else tu = !1;
  ip = tu && (!document.documentMode || 9 < document.documentMode);
}
function Mc() {
  Jr && (Jr.detachEvent("onpropertychange", lp), po = Jr = null);
}
function lp(e) {
  if (e.propertyName === "value" && ml(po)) {
    var t = [];
    op(t, po, e, ua(e)), $d(Qg, t);
  }
}
function Gg(e, t, n) {
  e === "focusin" ? (Mc(), Jr = t, po = n, Jr.attachEvent("onpropertychange", lp)) : e === "focusout" && Mc();
}
function Yg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ml(po);
}
function Xg(e, t) {
  if (e === "click") return ml(t);
}
function Zg(e, t) {
  if (e === "input" || e === "change") return ml(t);
}
function Jg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ct = typeof Object.is == "function" ? Object.is : Jg;
function ho(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Fu.call(t, o) || !ct(e[o], t[o])) return !1;
  }
  return !0;
}
function Ic(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function jc(e, t) {
  var n = Ic(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
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
    n = Ic(n);
  }
}
function up(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? up(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function sp() {
  for (var e = window, t = Di(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Di(e.document);
  }
  return t;
}
function va(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function qg(e) {
  var t = sp(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && up(n.ownerDocument.documentElement, n)) {
    if (r !== null && va(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = jc(n, i);
        var l = jc(
          n,
          r
        );
        o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var ey = Lt && "documentMode" in document && 11 >= document.documentMode, Xn = null, ns = null, qr = null, rs = !1;
function Fc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  rs || Xn == null || Xn !== Di(r) || (r = Xn, "selectionStart" in r && va(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), qr && ho(qr, r) || (qr = r, r = zi(ns, "onSelect"), 0 < r.length && (t = new pa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Xn)));
}
function Yo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Zn = { animationend: Yo("Animation", "AnimationEnd"), animationiteration: Yo("Animation", "AnimationIteration"), animationstart: Yo("Animation", "AnimationStart"), transitionend: Yo("Transition", "TransitionEnd") }, ru = {}, ap = {};
Lt && (ap = document.createElement("div").style, "AnimationEvent" in window || (delete Zn.animationend.animation, delete Zn.animationiteration.animation, delete Zn.animationstart.animation), "TransitionEvent" in window || delete Zn.transitionend.transition);
function vl(e) {
  if (ru[e]) return ru[e];
  if (!Zn[e]) return e;
  var t = Zn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ap) return ru[e] = t[n];
  return e;
}
var cp = vl("animationend"), fp = vl("animationiteration"), dp = vl("animationstart"), pp = vl("transitionend"), hp = /* @__PURE__ */ new Map(), zc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function an(e, t) {
  hp.set(e, t), zn(t, [e]);
}
for (var ou = 0; ou < zc.length; ou++) {
  var iu = zc[ou], ty = iu.toLowerCase(), ny = iu[0].toUpperCase() + iu.slice(1);
  an(ty, "on" + ny);
}
an(cp, "onAnimationEnd");
an(fp, "onAnimationIteration");
an(dp, "onAnimationStart");
an("dblclick", "onDoubleClick");
an("focusin", "onFocus");
an("focusout", "onBlur");
an(pp, "onTransitionEnd");
hr("onMouseEnter", ["mouseout", "mouseover"]);
hr("onMouseLeave", ["mouseout", "mouseover"]);
hr("onPointerEnter", ["pointerout", "pointerover"]);
hr("onPointerLeave", ["pointerout", "pointerover"]);
zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Qr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ry = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));
function $c(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, tg(r, t, void 0, e), e.currentTarget = null;
}
function mp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, a = u.currentTarget;
        if (u = u.listener, s !== i && o.isPropagationStopped()) break e;
        $c(o, u, a), i = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== i && o.isPropagationStopped()) break e;
        $c(o, u, a), i = s;
      }
    }
  }
  if (Li) throw e = Ju, Li = !1, Ju = null, e;
}
function Y(e, t) {
  var n = t[ss];
  n === void 0 && (n = t[ss] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (vp(t, e, 2, !1), n.add(r));
}
function lu(e, t, n) {
  var r = 0;
  t && (r |= 4), vp(n, e, r, t);
}
var Xo = "_reactListening" + Math.random().toString(36).slice(2);
function mo(e) {
  if (!e[Xo]) {
    e[Xo] = !0, xd.forEach(function(n) {
      n !== "selectionchange" && (ry.has(n) || lu(n, !1, e), lu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xo] || (t[Xo] = !0, lu("selectionchange", !1, t));
  }
}
function vp(e, t, n, r) {
  switch (qd(t)) {
    case 1:
      var o = gg;
      break;
    case 4:
      o = yg;
      break;
    default:
      o = fa;
  }
  n = o.bind(null, t, n, e), o = void 0, !Zu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function uu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var u = r.stateNode.containerInfo;
      if (u === o || u.nodeType === 8 && u.parentNode === o) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var s = l.tag;
        if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo, s === o || s.nodeType === 8 && s.parentNode === o)) return;
        l = l.return;
      }
      for (; u !== null; ) {
        if (l = yn(u), l === null) return;
        if (s = l.tag, s === 5 || s === 6) {
          r = i = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  $d(function() {
    var a = i, c = ua(n), m = [];
    e: {
      var f = hp.get(e);
      if (f !== void 0) {
        var v = pa, w = e;
        switch (e) {
          case "keypress":
            if (vi(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Lg;
            break;
          case "focusin":
            w = "focus", v = eu;
            break;
          case "focusout":
            w = "blur", v = eu;
            break;
          case "beforeblur":
          case "afterblur":
            v = eu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Nc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Eg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = jg;
            break;
          case cp:
          case fp:
          case dp:
            v = Cg;
            break;
          case pp:
            v = zg;
            break;
          case "scroll":
            v = wg;
            break;
          case "wheel":
            v = Bg;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Pg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Oc;
        }
        var g = (t & 4) !== 0, P = !g && e === "scroll", h = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var d = a, p; d !== null; ) {
          p = d;
          var y = p.stateNode;
          if (p.tag === 5 && y !== null && (p = y, h !== null && (y = so(d, h), y != null && g.push(vo(d, y, p)))), P) break;
          d = d.return;
        }
        0 < g.length && (f = new v(f, w, null, n, c), m.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", f && n !== Yu && (w = n.relatedTarget || n.fromElement) && (yn(w) || w[Mt])) break e;
        if ((v || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, v ? (w = n.relatedTarget || n.toElement, v = a, w = w ? yn(w) : null, w !== null && (P = $n(w), w !== P || w.tag !== 5 && w.tag !== 6) && (w = null)) : (v = null, w = a), v !== w)) {
          if (g = Nc, y = "onMouseLeave", h = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (g = Oc, y = "onPointerLeave", h = "onPointerEnter", d = "pointer"), P = v == null ? f : Jn(v), p = w == null ? f : Jn(w), f = new g(y, d + "leave", v, n, c), f.target = P, f.relatedTarget = p, y = null, yn(c) === a && (g = new g(h, d + "enter", w, n, c), g.target = p, g.relatedTarget = P, y = g), P = y, v && w) t: {
            for (g = v, h = w, d = 0, p = g; p; p = Wn(p)) d++;
            for (p = 0, y = h; y; y = Wn(y)) p++;
            for (; 0 < d - p; ) g = Wn(g), d--;
            for (; 0 < p - d; ) h = Wn(h), p--;
            for (; d--; ) {
              if (g === h || h !== null && g === h.alternate) break t;
              g = Wn(g), h = Wn(h);
            }
            g = null;
          }
          else g = null;
          v !== null && Bc(m, f, v, g, !1), w !== null && P !== null && Bc(m, P, w, g, !0);
        }
      }
      e: {
        if (f = a ? Jn(a) : window, v = f.nodeName && f.nodeName.toLowerCase(), v === "select" || v === "input" && f.type === "file") var _ = Kg;
        else if (Ac(f)) if (ip) _ = Zg;
        else {
          _ = Yg;
          var N = Gg;
        }
        else (v = f.nodeName) && v.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (_ = Xg);
        if (_ && (_ = _(e, a))) {
          op(m, _, n, c);
          break e;
        }
        N && N(e, f, a), e === "focusout" && (N = f._wrapperState) && N.controlled && f.type === "number" && Vu(f, "number", f.value);
      }
      switch (N = a ? Jn(a) : window, e) {
        case "focusin":
          (Ac(N) || N.contentEditable === "true") && (Xn = N, ns = a, qr = null);
          break;
        case "focusout":
          qr = ns = Xn = null;
          break;
        case "mousedown":
          rs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          rs = !1, Fc(m, n, c);
          break;
        case "selectionchange":
          if (ey) break;
        case "keydown":
        case "keyup":
          Fc(m, n, c);
      }
      var E;
      if (ma) e: {
        switch (e) {
          case "compositionstart":
            var R = "onCompositionStart";
            break e;
          case "compositionend":
            R = "onCompositionEnd";
            break e;
          case "compositionupdate":
            R = "onCompositionUpdate";
            break e;
        }
        R = void 0;
      }
      else Yn ? np(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (tp && n.locale !== "ko" && (Yn || R !== "onCompositionStart" ? R === "onCompositionEnd" && Yn && (E = ep()) : (Gt = c, da = "value" in Gt ? Gt.value : Gt.textContent, Yn = !0)), N = zi(a, R), 0 < N.length && (R = new Rc(R, e, null, n, c), m.push({ event: R, listeners: N }), E ? R.data = E : (E = rp(n), E !== null && (R.data = E)))), (E = Wg ? bg(e, n) : Vg(e, n)) && (a = zi(a, "onBeforeInput"), 0 < a.length && (c = new Rc("onBeforeInput", "beforeinput", null, n, c), m.push({ event: c, listeners: a }), c.data = E));
    }
    mp(m, t);
  });
}
function vo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function zi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = so(e, n), i != null && r.unshift(vo(e, i, o)), i = so(e, t), i != null && r.push(vo(e, i, o))), e = e.return;
  }
  return r;
}
function Wn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && a !== null && (u = a, o ? (s = so(n, i), s != null && l.unshift(vo(n, s, u))) : o || (s = so(n, i), s != null && l.push(vo(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var oy = /\r\n?/g, iy = /\u0000|\uFFFD/g;
function Uc(e) {
  return (typeof e == "string" ? e : "" + e).replace(oy, `
`).replace(iy, "");
}
function Zo(e, t, n) {
  if (t = Uc(t), Uc(e) !== t && n) throw Error(O(425));
}
function $i() {
}
var os = null, is = null;
function ls(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var us = typeof setTimeout == "function" ? setTimeout : void 0, ly = typeof clearTimeout == "function" ? clearTimeout : void 0, Wc = typeof Promise == "function" ? Promise : void 0, uy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wc < "u" ? function(e) {
  return Wc.resolve(null).then(e).catch(sy);
} : us;
function sy(e) {
  setTimeout(function() {
    throw e;
  });
}
function su(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), fo(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  fo(t);
}
function qt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function bc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Rr = Math.random().toString(36).slice(2), yt = "__reactFiber$" + Rr, go = "__reactProps$" + Rr, Mt = "__reactContainer$" + Rr, ss = "__reactEvents$" + Rr, ay = "__reactListeners$" + Rr, cy = "__reactHandles$" + Rr;
function yn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Mt] || n[yt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = bc(e); e !== null; ) {
        if (n = e[yt]) return n;
        e = bc(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Lo(e) {
  return e = e[yt] || e[Mt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function gl(e) {
  return e[go] || null;
}
var as = [], qn = -1;
function cn(e) {
  return { current: e };
}
function Z(e) {
  0 > qn || (e.current = as[qn], as[qn] = null, qn--);
}
function G(e, t) {
  qn++, as[qn] = e.current, e.current = t;
}
var un = {}, _e = cn(un), Ie = cn(!1), Rn = un;
function mr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function je(e) {
  return e = e.childContextTypes, e != null;
}
function Bi() {
  Z(Ie), Z(_e);
}
function Vc(e, t, n) {
  if (_e.current !== un) throw Error(O(168));
  G(_e, t), G(Ie, n);
}
function gp(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(O(108, Gv(e) || "Unknown", o));
  return ne({}, n, r);
}
function Ui(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, Rn = _e.current, G(_e, e), G(Ie, Ie.current), !0;
}
function Hc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n ? (e = gp(e, t, Rn), r.__reactInternalMemoizedMergedChildContext = e, Z(Ie), Z(_e), G(_e, e)) : Z(Ie), G(Ie, n);
}
var Nt = null, yl = !1, au = !1;
function yp(e) {
  Nt === null ? Nt = [e] : Nt.push(e);
}
function fy(e) {
  yl = !0, yp(e);
}
function fn() {
  if (!au && Nt !== null) {
    au = !0;
    var e = 0, t = Q;
    try {
      var n = Nt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Nt = null, yl = !1;
    } catch (o) {
      throw Nt !== null && (Nt = Nt.slice(e + 1)), bd(sa, fn), o;
    } finally {
      Q = t, au = !1;
    }
  }
  return null;
}
var er = [], tr = 0, Wi = null, bi = 0, Ye = [], Xe = 0, On = null, Rt = 1, Ot = "";
function mn(e, t) {
  er[tr++] = bi, er[tr++] = Wi, Wi = e, bi = t;
}
function wp(e, t, n) {
  Ye[Xe++] = Rt, Ye[Xe++] = Ot, Ye[Xe++] = On, On = e;
  var r = Rt;
  e = Ot;
  var o = 32 - ut(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - ut(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Rt = 1 << 32 - ut(t) + o | n << o | r, Ot = i + e;
  } else Rt = 1 << i | n << o | r, Ot = e;
}
function ga(e) {
  e.return !== null && (mn(e, 1), wp(e, 1, 0));
}
function ya(e) {
  for (; e === Wi; ) Wi = er[--tr], er[tr] = null, bi = er[--tr], er[tr] = null;
  for (; e === On; ) On = Ye[--Xe], Ye[Xe] = null, Ot = Ye[--Xe], Ye[Xe] = null, Rt = Ye[--Xe], Ye[Xe] = null;
}
var We = null, Be = null, q = !1, lt = null;
function Sp(e, t) {
  var n = Ze(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Qc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, We = e, Be = qt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, We = e, Be = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = On !== null ? { id: Rt, overflow: Ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, We = e, Be = null, !0) : !1;
    default:
      return !1;
  }
}
function cs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fs(e) {
  if (q) {
    var t = Be;
    if (t) {
      var n = t;
      if (!Qc(e, t)) {
        if (cs(e)) throw Error(O(418));
        t = qt(n.nextSibling);
        var r = We;
        t && Qc(e, t) ? Sp(r, n) : (e.flags = e.flags & -4097 | 2, q = !1, We = e);
      }
    } else {
      if (cs(e)) throw Error(O(418));
      e.flags = e.flags & -4097 | 2, q = !1, We = e;
    }
  }
}
function Kc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  We = e;
}
function Jo(e) {
  if (e !== We) return !1;
  if (!q) return Kc(e), q = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ls(e.type, e.memoizedProps)), t && (t = Be)) {
    if (cs(e)) throw Ep(), Error(O(418));
    for (; t; ) Sp(e, t), t = qt(t.nextSibling);
  }
  if (Kc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = qt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = We ? qt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ep() {
  for (var e = Be; e; ) e = qt(e.nextSibling);
}
function vr() {
  Be = We = null, q = !1;
}
function wa(e) {
  lt === null ? lt = [e] : lt.push(e);
}
var dy = zt.ReactCurrentBatchConfig;
function Br(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var u = o.refs;
        l === null ? delete u[i] : u[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function qo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Gc(e) {
  var t = e._init;
  return t(e._payload);
}
function kp(e) {
  function t(h, d) {
    if (e) {
      var p = h.deletions;
      p === null ? (h.deletions = [d], h.flags |= 16) : p.push(d);
    }
  }
  function n(h, d) {
    if (!e) return null;
    for (; d !== null; ) t(h, d), d = d.sibling;
    return null;
  }
  function r(h, d) {
    for (h = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? h.set(d.key, d) : h.set(d.index, d), d = d.sibling;
    return h;
  }
  function o(h, d) {
    return h = rn(h, d), h.index = 0, h.sibling = null, h;
  }
  function i(h, d, p) {
    return h.index = p, e ? (p = h.alternate, p !== null ? (p = p.index, p < d ? (h.flags |= 2, d) : p) : (h.flags |= 2, d)) : (h.flags |= 1048576, d);
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function u(h, d, p, y) {
    return d === null || d.tag !== 6 ? (d = vu(p, h.mode, y), d.return = h, d) : (d = o(d, p), d.return = h, d);
  }
  function s(h, d, p, y) {
    var _ = p.type;
    return _ === Gn ? c(h, d, p.props.children, y, p.key) : d !== null && (d.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Vt && Gc(_) === d.type) ? (y = o(d, p.props), y.ref = Br(h, d, p), y.return = h, y) : (y = xi(p.type, p.key, p.props, null, h.mode, y), y.ref = Br(h, d, p), y.return = h, y);
  }
  function a(h, d, p, y) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = gu(p, h.mode, y), d.return = h, d) : (d = o(d, p.children || []), d.return = h, d);
  }
  function c(h, d, p, y, _) {
    return d === null || d.tag !== 7 ? (d = xn(p, h.mode, y, _), d.return = h, d) : (d = o(d, p), d.return = h, d);
  }
  function m(h, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = vu("" + d, h.mode, p), d.return = h, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Wo:
          return p = xi(d.type, d.key, d.props, null, h.mode, p), p.ref = Br(h, null, d), p.return = h, p;
        case Kn:
          return d = gu(d, h.mode, p), d.return = h, d;
        case Vt:
          var y = d._init;
          return m(h, y(d._payload), p);
      }
      if (Vr(d) || Ir(d)) return d = xn(d, h.mode, p, null), d.return = h, d;
      qo(h, d);
    }
    return null;
  }
  function f(h, d, p, y) {
    var _ = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return _ !== null ? null : u(h, d, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Wo:
          return p.key === _ ? s(h, d, p, y) : null;
        case Kn:
          return p.key === _ ? a(h, d, p, y) : null;
        case Vt:
          return _ = p._init, f(
            h,
            d,
            _(p._payload),
            y
          );
      }
      if (Vr(p) || Ir(p)) return _ !== null ? null : c(h, d, p, y, null);
      qo(h, p);
    }
    return null;
  }
  function v(h, d, p, y, _) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return h = h.get(p) || null, u(d, h, "" + y, _);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Wo:
          return h = h.get(y.key === null ? p : y.key) || null, s(d, h, y, _);
        case Kn:
          return h = h.get(y.key === null ? p : y.key) || null, a(d, h, y, _);
        case Vt:
          var N = y._init;
          return v(h, d, p, N(y._payload), _);
      }
      if (Vr(y) || Ir(y)) return h = h.get(p) || null, c(d, h, y, _, null);
      qo(d, y);
    }
    return null;
  }
  function w(h, d, p, y) {
    for (var _ = null, N = null, E = d, R = d = 0, z = null; E !== null && R < p.length; R++) {
      E.index > R ? (z = E, E = null) : z = E.sibling;
      var j = f(h, E, p[R], y);
      if (j === null) {
        E === null && (E = z);
        break;
      }
      e && E && j.alternate === null && t(h, E), d = i(j, d, R), N === null ? _ = j : N.sibling = j, N = j, E = z;
    }
    if (R === p.length) return n(h, E), q && mn(h, R), _;
    if (E === null) {
      for (; R < p.length; R++) E = m(h, p[R], y), E !== null && (d = i(E, d, R), N === null ? _ = E : N.sibling = E, N = E);
      return q && mn(h, R), _;
    }
    for (E = r(h, E); R < p.length; R++) z = v(E, h, R, p[R], y), z !== null && (e && z.alternate !== null && E.delete(z.key === null ? R : z.key), d = i(z, d, R), N === null ? _ = z : N.sibling = z, N = z);
    return e && E.forEach(function(me) {
      return t(h, me);
    }), q && mn(h, R), _;
  }
  function g(h, d, p, y) {
    var _ = Ir(p);
    if (typeof _ != "function") throw Error(O(150));
    if (p = _.call(p), p == null) throw Error(O(151));
    for (var N = _ = null, E = d, R = d = 0, z = null, j = p.next(); E !== null && !j.done; R++, j = p.next()) {
      E.index > R ? (z = E, E = null) : z = E.sibling;
      var me = f(h, E, j.value, y);
      if (me === null) {
        E === null && (E = z);
        break;
      }
      e && E && me.alternate === null && t(h, E), d = i(me, d, R), N === null ? _ = me : N.sibling = me, N = me, E = z;
    }
    if (j.done) return n(
      h,
      E
    ), q && mn(h, R), _;
    if (E === null) {
      for (; !j.done; R++, j = p.next()) j = m(h, j.value, y), j !== null && (d = i(j, d, R), N === null ? _ = j : N.sibling = j, N = j);
      return q && mn(h, R), _;
    }
    for (E = r(h, E); !j.done; R++, j = p.next()) j = v(E, h, R, j.value, y), j !== null && (e && j.alternate !== null && E.delete(j.key === null ? R : j.key), d = i(j, d, R), N === null ? _ = j : N.sibling = j, N = j);
    return e && E.forEach(function(Ke) {
      return t(h, Ke);
    }), q && mn(h, R), _;
  }
  function P(h, d, p, y) {
    if (typeof p == "object" && p !== null && p.type === Gn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Wo:
          e: {
            for (var _ = p.key, N = d; N !== null; ) {
              if (N.key === _) {
                if (_ = p.type, _ === Gn) {
                  if (N.tag === 7) {
                    n(h, N.sibling), d = o(N, p.props.children), d.return = h, h = d;
                    break e;
                  }
                } else if (N.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Vt && Gc(_) === N.type) {
                  n(h, N.sibling), d = o(N, p.props), d.ref = Br(h, N, p), d.return = h, h = d;
                  break e;
                }
                n(h, N);
                break;
              } else t(h, N);
              N = N.sibling;
            }
            p.type === Gn ? (d = xn(p.props.children, h.mode, y, p.key), d.return = h, h = d) : (y = xi(p.type, p.key, p.props, null, h.mode, y), y.ref = Br(h, d, p), y.return = h, h = y);
          }
          return l(h);
        case Kn:
          e: {
            for (N = p.key; d !== null; ) {
              if (d.key === N) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(h, d.sibling), d = o(d, p.children || []), d.return = h, h = d;
                break e;
              } else {
                n(h, d);
                break;
              }
              else t(h, d);
              d = d.sibling;
            }
            d = gu(p, h.mode, y), d.return = h, h = d;
          }
          return l(h);
        case Vt:
          return N = p._init, P(h, d, N(p._payload), y);
      }
      if (Vr(p)) return w(h, d, p, y);
      if (Ir(p)) return g(h, d, p, y);
      qo(h, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(h, d.sibling), d = o(d, p), d.return = h, h = d) : (n(h, d), d = vu(p, h.mode, y), d.return = h, h = d), l(h)) : n(h, d);
  }
  return P;
}
var gr = kp(!0), xp = kp(!1), Vi = cn(null), Hi = null, nr = null, Sa = null;
function Ea() {
  Sa = nr = Hi = null;
}
function ka(e) {
  var t = Vi.current;
  Z(Vi), e._currentValue = t;
}
function ds(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function cr(e, t) {
  Hi = e, Sa = nr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Le = !0), e.firstContext = null);
}
function qe(e) {
  var t = e._currentValue;
  if (Sa !== e) if (e = { context: e, memoizedValue: t, next: null }, nr === null) {
    if (Hi === null) throw Error(O(308));
    nr = e, Hi.dependencies = { lanes: 0, firstContext: e };
  } else nr = nr.next = e;
  return t;
}
var wn = null;
function xa(e) {
  wn === null ? wn = [e] : wn.push(e);
}
function Cp(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, xa(t)) : (n.next = o.next, o.next = n), t.interleaved = n, It(e, r);
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ht = !1;
function Ca(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function _p(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Tt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function en(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, V & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, It(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, xa(r)) : (t.next = o.next, o.next = t), r.interleaved = t, It(e, n);
}
function gi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, aa(e, n);
  }
}
function Yc(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Qi(e, t, n, r) {
  var o = e.updateQueue;
  Ht = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, l === null ? i = a : l.next = a, l = s;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, u = c.lastBaseUpdate, u !== l && (u === null ? c.firstBaseUpdate = a : u.next = a, c.lastBaseUpdate = s));
  }
  if (i !== null) {
    var m = o.baseState;
    l = 0, c = a = s = null, u = i;
    do {
      var f = u.lane, v = u.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: v,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, g = u;
          switch (f = t, v = n, g.tag) {
            case 1:
              if (w = g.payload, typeof w == "function") {
                m = w.call(v, m, f);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = g.payload, f = typeof w == "function" ? w.call(v, m, f) : w, f == null) break e;
              m = ne({}, m, f);
              break e;
            case 2:
              Ht = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [u] : f.push(u));
      } else v = { eventTime: v, lane: f, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, c === null ? (a = c = v, s = m) : c = c.next = v, l |= f;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null) break;
        f = u, u = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (s = m), o.baseState = s, o.firstBaseUpdate = a, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Dn |= l, e.lanes = l, e.memoizedState = m;
  }
}
function Xc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(O(191, o));
      o.call(r);
    }
  }
}
var Mo = {}, Et = cn(Mo), yo = cn(Mo), wo = cn(Mo);
function Sn(e) {
  if (e === Mo) throw Error(O(174));
  return e;
}
function _a(e, t) {
  switch (G(wo, t), G(yo, e), G(Et, Mo), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qu(t, e);
  }
  Z(Et), G(Et, t);
}
function yr() {
  Z(Et), Z(yo), Z(wo);
}
function Pp(e) {
  Sn(wo.current);
  var t = Sn(Et.current), n = Qu(t, e.type);
  t !== n && (G(yo, e), G(Et, n));
}
function Pa(e) {
  yo.current === e && (Z(Et), Z(yo));
}
var ee = cn(0);
function Ki(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var cu = [];
function Na() {
  for (var e = 0; e < cu.length; e++) cu[e]._workInProgressVersionPrimary = null;
  cu.length = 0;
}
var yi = zt.ReactCurrentDispatcher, fu = zt.ReactCurrentBatchConfig, Tn = 0, te = null, ae = null, de = null, Gi = !1, eo = !1, So = 0, py = 0;
function ke() {
  throw Error(O(321));
}
function Ra(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ct(e[n], t[n])) return !1;
  return !0;
}
function Oa(e, t, n, r, o, i) {
  if (Tn = i, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, yi.current = e === null || e.memoizedState === null ? gy : yy, e = n(r, o), eo) {
    i = 0;
    do {
      if (eo = !1, So = 0, 25 <= i) throw Error(O(301));
      i += 1, de = ae = null, t.updateQueue = null, yi.current = wy, e = n(r, o);
    } while (eo);
  }
  if (yi.current = Yi, t = ae !== null && ae.next !== null, Tn = 0, de = ae = te = null, Gi = !1, t) throw Error(O(300));
  return e;
}
function Ta() {
  var e = So !== 0;
  return So = 0, e;
}
function vt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return de === null ? te.memoizedState = de = e : de = de.next = e, de;
}
function et() {
  if (ae === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = de === null ? te.memoizedState : de.next;
  if (t !== null) de = t, ae = e;
  else {
    if (e === null) throw Error(O(310));
    ae = e, e = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, de === null ? te.memoizedState = de = e : de = de.next = e;
  }
  return de;
}
function Eo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function du(e) {
  var t = et(), n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = ae, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var u = l = null, s = null, a = i;
    do {
      var c = a.lane;
      if ((Tn & c) === c) s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var m = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = m, l = r) : s = s.next = m, te.lanes |= c, Dn |= c;
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? l = r : s.next = u, ct(r, t.memoizedState) || (Le = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, te.lanes |= i, Dn |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function pu(e) {
  var t = et(), n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    ct(i, t.memoizedState) || (Le = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Np() {
}
function Rp(e, t) {
  var n = te, r = et(), o = t(), i = !ct(r.memoizedState, o);
  if (i && (r.memoizedState = o, Le = !0), r = r.queue, Da(Dp.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || de !== null && de.memoizedState.tag & 1) {
    if (n.flags |= 2048, ko(9, Tp.bind(null, n, r, o, t), void 0, null), he === null) throw Error(O(349));
    Tn & 30 || Op(n, t, o);
  }
  return o;
}
function Op(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Tp(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ap(t) && Lp(e);
}
function Dp(e, t, n) {
  return n(function() {
    Ap(t) && Lp(e);
  });
}
function Ap(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ct(e, n);
  } catch {
    return !0;
  }
}
function Lp(e) {
  var t = It(e, 1);
  t !== null && st(t, e, 1, -1);
}
function Zc(e) {
  var t = vt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Eo, lastRenderedState: e }, t.queue = e, e = e.dispatch = vy.bind(null, te, e), [t.memoizedState, e];
}
function ko(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Mp() {
  return et().memoizedState;
}
function wi(e, t, n, r) {
  var o = vt();
  te.flags |= e, o.memoizedState = ko(1 | t, n, void 0, r === void 0 ? null : r);
}
function wl(e, t, n, r) {
  var o = et();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ae !== null) {
    var l = ae.memoizedState;
    if (i = l.destroy, r !== null && Ra(r, l.deps)) {
      o.memoizedState = ko(t, n, i, r);
      return;
    }
  }
  te.flags |= e, o.memoizedState = ko(1 | t, n, i, r);
}
function Jc(e, t) {
  return wi(8390656, 8, e, t);
}
function Da(e, t) {
  return wl(2048, 8, e, t);
}
function Ip(e, t) {
  return wl(4, 2, e, t);
}
function jp(e, t) {
  return wl(4, 4, e, t);
}
function Fp(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function zp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, wl(4, 4, Fp.bind(null, t, e), n);
}
function Aa() {
}
function $p(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ra(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Bp(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ra(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Up(e, t, n) {
  return Tn & 21 ? (ct(n, t) || (n = Qd(), te.lanes |= n, Dn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Le = !0), e.memoizedState = n);
}
function hy(e, t) {
  var n = Q;
  Q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = fu.transition;
  fu.transition = {};
  try {
    e(!1), t();
  } finally {
    Q = n, fu.transition = r;
  }
}
function Wp() {
  return et().memoizedState;
}
function my(e, t, n) {
  var r = nn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, bp(e)) Vp(t, n);
  else if (n = Cp(e, t, n, r), n !== null) {
    var o = Re();
    st(n, e, r, o), Hp(n, t, r);
  }
}
function vy(e, t, n) {
  var r = nn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bp(e)) Vp(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, u = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = u, ct(u, l)) {
        var s = t.interleaved;
        s === null ? (o.next = o, xa(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Cp(e, t, o, r), n !== null && (o = Re(), st(n, e, r, o), Hp(n, t, r));
  }
}
function bp(e) {
  var t = e.alternate;
  return e === te || t !== null && t === te;
}
function Vp(e, t) {
  eo = Gi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Hp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, aa(e, n);
  }
}
var Yi = { readContext: qe, useCallback: ke, useContext: ke, useEffect: ke, useImperativeHandle: ke, useInsertionEffect: ke, useLayoutEffect: ke, useMemo: ke, useReducer: ke, useRef: ke, useState: ke, useDebugValue: ke, useDeferredValue: ke, useTransition: ke, useMutableSource: ke, useSyncExternalStore: ke, useId: ke, unstable_isNewReconciler: !1 }, gy = { readContext: qe, useCallback: function(e, t) {
  return vt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qe, useEffect: Jc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, wi(
    4194308,
    4,
    Fp.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return wi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return wi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = vt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = vt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = my.bind(null, te, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = vt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Zc, useDebugValue: Aa, useDeferredValue: function(e) {
  return vt().memoizedState = e;
}, useTransition: function() {
  var e = Zc(!1), t = e[0];
  return e = hy.bind(null, e[1]), vt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = te, o = vt();
  if (q) {
    if (n === void 0) throw Error(O(407));
    n = n();
  } else {
    if (n = t(), he === null) throw Error(O(349));
    Tn & 30 || Op(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Jc(Dp.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ko(9, Tp.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = vt(), t = he.identifierPrefix;
  if (q) {
    var n = Ot, r = Rt;
    n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = So++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = py++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, yy = {
  readContext: qe,
  useCallback: $p,
  useContext: qe,
  useEffect: Da,
  useImperativeHandle: zp,
  useInsertionEffect: Ip,
  useLayoutEffect: jp,
  useMemo: Bp,
  useReducer: du,
  useRef: Mp,
  useState: function() {
    return du(Eo);
  },
  useDebugValue: Aa,
  useDeferredValue: function(e) {
    var t = et();
    return Up(t, ae.memoizedState, e);
  },
  useTransition: function() {
    var e = du(Eo)[0], t = et().memoizedState;
    return [e, t];
  },
  useMutableSource: Np,
  useSyncExternalStore: Rp,
  useId: Wp,
  unstable_isNewReconciler: !1
}, wy = { readContext: qe, useCallback: $p, useContext: qe, useEffect: Da, useImperativeHandle: zp, useInsertionEffect: Ip, useLayoutEffect: jp, useMemo: Bp, useReducer: pu, useRef: Mp, useState: function() {
  return pu(Eo);
}, useDebugValue: Aa, useDeferredValue: function(e) {
  var t = et();
  return ae === null ? t.memoizedState = e : Up(t, ae.memoizedState, e);
}, useTransition: function() {
  var e = pu(Eo)[0], t = et().memoizedState;
  return [e, t];
}, useMutableSource: Np, useSyncExternalStore: Rp, useId: Wp, unstable_isNewReconciler: !1 };
function ot(e, t) {
  if (e && e.defaultProps) {
    t = ne({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ps(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Sl = { isMounted: function(e) {
  return (e = e._reactInternals) ? $n(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), o = nn(e), i = Tt(r, o);
  i.payload = t, n != null && (i.callback = n), t = en(e, i, o), t !== null && (st(t, e, o, r), gi(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), o = nn(e), i = Tt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = en(e, i, o), t !== null && (st(t, e, o, r), gi(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Re(), r = nn(e), o = Tt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = en(e, o, r), t !== null && (st(t, e, r, n), gi(t, e, r));
} };
function qc(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !ho(n, r) || !ho(o, i) : !0;
}
function Qp(e, t, n) {
  var r = !1, o = un, i = t.contextType;
  return typeof i == "object" && i !== null ? i = qe(i) : (o = je(t) ? Rn : _e.current, r = t.contextTypes, i = (r = r != null) ? mr(e, o) : un), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Sl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ef(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Sl.enqueueReplaceState(t, t.state, null);
}
function hs(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Ca(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = qe(i) : (i = je(t) ? Rn : _e.current, o.context = mr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ps(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Sl.enqueueReplaceState(o, o.state, null), Qi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Kv(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function hu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ms(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Sy = typeof WeakMap == "function" ? WeakMap : Map;
function Kp(e, t, n) {
  n = Tt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Zi || (Zi = !0, _s = r), ms(e, t);
  }, n;
}
function Gp(e, t, n) {
  n = Tt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      ms(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    ms(e, t), typeof r != "function" && (tn === null ? tn = /* @__PURE__ */ new Set([this]) : tn.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function tf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sy();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = My.bind(null, e, t, n), t.then(e, e));
}
function nf(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rf(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tt(-1, 1), t.tag = 2, en(n, t, 1))), n.lanes |= 1), e);
}
var Ey = zt.ReactCurrentOwner, Le = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? xp(t, null, n, r) : gr(t, e.child, n, r);
}
function of(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return cr(t, o), r = Oa(e, t, n, r, i, o), n = Ta(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (q && n && ga(t), t.flags |= 1, Ne(e, t, r, o), t.child);
}
function lf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Ba(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Yp(e, t, i, r, o)) : (e = xi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ho, n(l, r) && e.ref === t.ref) return jt(e, t, o);
  }
  return t.flags |= 1, e = rn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Yp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ho(i, r) && e.ref === t.ref) if (Le = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Le = !0);
    else return t.lanes = e.lanes, jt(e, t, o);
  }
  return vs(e, t, n, r, o);
}
function Xp(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(or, $e), $e |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(or, $e), $e |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, G(or, $e), $e |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, G(or, $e), $e |= r;
  return Ne(e, t, o, n), t.child;
}
function Zp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function vs(e, t, n, r, o) {
  var i = je(n) ? Rn : _e.current;
  return i = mr(t, i), cr(t, o), n = Oa(e, t, n, r, i, o), r = Ta(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (q && r && ga(t), t.flags |= 1, Ne(e, t, n, o), t.child);
}
function uf(e, t, n, r, o) {
  if (je(n)) {
    var i = !0;
    Ui(t);
  } else i = !1;
  if (cr(t, o), t.stateNode === null) Si(e, t), Qp(t, n, r), hs(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = qe(a) : (a = je(n) ? Rn : _e.current, a = mr(t, a));
    var c = n.getDerivedStateFromProps, m = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && ef(t, l, r, a), Ht = !1;
    var f = t.memoizedState;
    l.state = f, Qi(t, r, l, o), s = t.memoizedState, u !== r || f !== s || Ie.current || Ht ? (typeof c == "function" && (ps(t, n, c, r), s = t.memoizedState), (u = Ht || qc(t, n, u, r, f, s, a)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, _p(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : ot(t.type, u), l.props = a, m = t.pendingProps, f = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = qe(s) : (s = je(n) ? Rn : _e.current, s = mr(t, s));
    var v = n.getDerivedStateFromProps;
    (c = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== m || f !== s) && ef(t, l, r, s), Ht = !1, f = t.memoizedState, l.state = f, Qi(t, r, l, o);
    var w = t.memoizedState;
    u !== m || f !== w || Ie.current || Ht ? (typeof v == "function" && (ps(t, n, v, r), w = t.memoizedState), (a = Ht || qc(t, n, a, r, f, w, s) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, w, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, w, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), l.props = r, l.state = w, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return gs(e, t, n, r, i, o);
}
function gs(e, t, n, r, o, i) {
  Zp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Hc(t, n, !1), jt(e, t, i);
  r = t.stateNode, Ey.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = gr(t, e.child, null, i), t.child = gr(t, null, u, i)) : Ne(e, t, u, i), t.memoizedState = r.state, o && Hc(t, n, !0), t.child;
}
function Jp(e) {
  var t = e.stateNode;
  t.pendingContext ? Vc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vc(e, t.context, !1), _a(e, t.containerInfo);
}
function sf(e, t, n, r, o) {
  return vr(), wa(o), t.flags |= 256, Ne(e, t, n, r), t.child;
}
var ys = { dehydrated: null, treeContext: null, retryLane: 0 };
function ws(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qp(e, t, n) {
  var r = t.pendingProps, o = ee.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), G(ee, o & 1), e === null)
    return fs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = xl(l, r, 0, null), e = xn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ws(n), t.memoizedState = ys, e) : La(t, l));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null)) return ky(e, t, l, r, u, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = rn(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? i = rn(u, i) : (i = xn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? ws(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = ys, r;
  }
  return i = e.child, e = i.sibling, r = rn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function La(e, t) {
  return t = xl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ei(e, t, n, r) {
  return r !== null && wa(r), gr(t, e.child, null, n), e = La(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ky(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = hu(Error(O(422))), ei(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = xl({ mode: "visible", children: r.children }, o, 0, null), i = xn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && gr(t, e.child, null, l), t.child.memoizedState = ws(l), t.memoizedState = ys, i);
  if (!(t.mode & 1)) return ei(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(O(419)), r = hu(i, r, void 0), ei(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, Le || u) {
    if (r = he, r !== null) {
      switch (l & -l) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, It(e, o), st(r, e, o, -1));
    }
    return $a(), r = hu(Error(O(421))), ei(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Iy.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Be = qt(o.nextSibling), We = t, q = !0, lt = null, e !== null && (Ye[Xe++] = Rt, Ye[Xe++] = Ot, Ye[Xe++] = On, Rt = e.id, Ot = e.overflow, On = t), t = La(t, r.children), t.flags |= 4096, t);
}
function af(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ds(e.return, t, n);
}
function mu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function eh(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Ne(e, t, r.children, n), r = ee.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && af(e, n, t);
      else if (e.tag === 19) af(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (G(ee, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ki(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), mu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ki(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      mu(t, !0, n, null, i);
      break;
    case "together":
      mu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Si(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function jt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Dn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = rn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function xy(e, t, n) {
  switch (t.tag) {
    case 3:
      Jp(t), vr();
      break;
    case 5:
      Pp(t);
      break;
    case 1:
      je(t.type) && Ui(t);
      break;
    case 4:
      _a(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      G(Vi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (G(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? qp(e, t, n) : (G(ee, ee.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
      G(ee, ee.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return eh(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), G(ee, ee.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Xp(e, t, n);
  }
  return jt(e, t, n);
}
var th, Ss, nh, rh;
th = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Ss = function() {
};
nh = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Sn(Et.current);
    var i = null;
    switch (n) {
      case "input":
        o = Wu(e, o), r = Wu(e, r), i = [];
        break;
      case "select":
        o = ne({}, o, { value: void 0 }), r = ne({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Hu(e, o), r = Hu(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $i);
    }
    Ku(n, r);
    var l;
    n = null;
    for (a in o) if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
      var u = o[a];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (lo.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = o != null ? o[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (i || (i = []), i.push(
        a,
        n
      )), n = s;
      else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (lo.hasOwnProperty(a) ? (s != null && a === "onScroll" && Y("scroll", e), i || u === s || (i = [])) : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
rh = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ur(e, t) {
  if (!q) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Cy(e, t, n) {
  var r = t.pendingProps;
  switch (ya(t), t.tag) {
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
      return xe(t), null;
    case 1:
      return je(t.type) && Bi(), xe(t), null;
    case 3:
      return r = t.stateNode, yr(), Z(Ie), Z(_e), Na(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Jo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, lt !== null && (Rs(lt), lt = null))), Ss(e, t), xe(t), null;
    case 5:
      Pa(t);
      var o = Sn(wo.current);
      if (n = t.type, e !== null && t.stateNode != null) nh(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return xe(t), null;
        }
        if (e = Sn(Et.current), Jo(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[yt] = t, r[go] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < Qr.length; o++) Y(Qr[o], r);
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
              gc(r, i), Y("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Y("invalid", r);
              break;
            case "textarea":
              wc(r, i), Y("invalid", r);
          }
          Ku(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var u = i[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Zo(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Zo(
              r.textContent,
              u,
              e
            ), o = ["children", "" + u]) : lo.hasOwnProperty(l) && u != null && l === "onScroll" && Y("scroll", r);
          }
          switch (n) {
            case "input":
              bo(r), yc(r, i, !0);
              break;
            case "textarea":
              bo(r), Sc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = $i);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Dd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[yt] = t, e[go] = r, th(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Gu(n, r), n) {
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
                for (o = 0; o < Qr.length; o++) Y(Qr[o], e);
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
                gc(e, r), o = Wu(e, r), Y("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ne({}, r, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                wc(e, r), o = Hu(e, r), Y("invalid", e);
                break;
              default:
                o = r;
            }
            Ku(n, o), u = o;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? Md(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ad(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && uo(e, s) : typeof s == "number" && uo(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (lo.hasOwnProperty(i) ? s != null && i === "onScroll" && Y("scroll", e) : s != null && ra(e, i, s, l));
            }
            switch (n) {
              case "input":
                bo(e), yc(e, r, !1);
                break;
              case "textarea":
                bo(e), Sc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ln(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? lr(e, !!r.multiple, i, !1) : r.defaultValue != null && lr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = $i);
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
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) rh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (n = Sn(wo.current), Sn(Et.current), Jo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[yt] = t, (i = r.nodeValue !== n) && (e = We, e !== null)) switch (e.tag) {
            case 3:
              Zo(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Zo(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yt] = t, t.stateNode = r;
      }
      return xe(t), null;
    case 13:
      if (Z(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (q && Be !== null && t.mode & 1 && !(t.flags & 128)) Ep(), vr(), t.flags |= 98560, i = !1;
        else if (i = Jo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(O(317));
            i[yt] = t;
          } else vr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), i = !1;
        } else lt !== null && (Rs(lt), lt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? ce === 0 && (ce = 3) : $a())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return yr(), Ss(e, t), e === null && mo(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return ka(t.type._context), xe(t), null;
    case 17:
      return je(t.type) && Bi(), xe(t), null;
    case 19:
      if (Z(ee), i = t.memoizedState, i === null) return xe(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) Ur(i, !1);
      else {
        if (ce !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Ki(e), l !== null) {
            for (t.flags |= 128, Ur(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return G(ee, ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ie() > Sr && (t.flags |= 128, r = !0, Ur(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ki(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ur(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !q) return xe(t), null;
        } else 2 * ie() - i.renderingStartTime > Sr && n !== 1073741824 && (t.flags |= 128, r = !0, Ur(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ie(), t.sibling = null, n = ee.current, G(ee, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return za(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? $e & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function _y(e, t) {
  switch (ya(t), t.tag) {
    case 1:
      return je(t.type) && Bi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return yr(), Z(Ie), Z(_e), Na(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Pa(t), null;
    case 13:
      if (Z(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(O(340));
        vr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(ee), null;
    case 4:
      return yr(), null;
    case 10:
      return ka(t.type._context), null;
    case 22:
    case 23:
      return za(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ti = !1, Ce = !1, Py = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function rr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    re(e, t, r);
  }
  else n.current = null;
}
function Es(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var cf = !1;
function Ny(e, t) {
  if (os = ji, e = sp(), va(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, u = -1, s = -1, a = 0, c = 0, m = e, f = null;
        t: for (; ; ) {
          for (var v; m !== n || o !== 0 && m.nodeType !== 3 || (u = l + o), m !== i || r !== 0 && m.nodeType !== 3 || (s = l + r), m.nodeType === 3 && (l += m.nodeValue.length), (v = m.firstChild) !== null; )
            f = m, m = v;
          for (; ; ) {
            if (m === e) break t;
            if (f === n && ++a === o && (u = l), f === i && ++c === r && (s = l), (v = m.nextSibling) !== null) break;
            m = f, f = m.parentNode;
          }
          m = v;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (is = { focusedElem: e, selectionRange: n }, ji = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
  else for (; L !== null; ) {
    t = L;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var g = w.memoizedProps, P = w.memoizedState, h = t.stateNode, d = h.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ot(t.type, g), P);
            h.__reactInternalSnapshotBeforeUpdate = d;
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
          throw Error(O(163));
      }
    } catch (y) {
      re(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, L = e;
      break;
    }
    L = t.return;
  }
  return w = cf, cf = !1, w;
}
function to(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Es(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function El(e, t) {
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
function ks(e) {
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
function oh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, oh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yt], delete t[go], delete t[ss], delete t[ay], delete t[cy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ih(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ff(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ih(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function xs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $i));
  else if (r !== 4 && (e = e.child, e !== null)) for (xs(e, t, n), e = e.sibling; e !== null; ) xs(e, t, n), e = e.sibling;
}
function Cs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Cs(e, t, n), e = e.sibling; e !== null; ) Cs(e, t, n), e = e.sibling;
}
var ge = null, it = !1;
function Ut(e, t, n) {
  for (n = n.child; n !== null; ) lh(e, t, n), n = n.sibling;
}
function lh(e, t, n) {
  if (St && typeof St.onCommitFiberUnmount == "function") try {
    St.onCommitFiberUnmount(pl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ce || rr(n, t);
    case 6:
      var r = ge, o = it;
      ge = null, Ut(e, t, n), ge = r, it = o, ge !== null && (it ? (e = ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null && (it ? (e = ge, n = n.stateNode, e.nodeType === 8 ? su(e.parentNode, n) : e.nodeType === 1 && su(e, n), fo(e)) : su(ge, n.stateNode));
      break;
    case 4:
      r = ge, o = it, ge = n.stateNode.containerInfo, it = !0, Ut(e, t, n), ge = r, it = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && Es(n, t, l), o = o.next;
        } while (o !== r);
      }
      Ut(e, t, n);
      break;
    case 1:
      if (!Ce && (rr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        re(n, t, u);
      }
      Ut(e, t, n);
      break;
    case 21:
      Ut(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ce = (r = Ce) || n.memoizedState !== null, Ut(e, t, n), Ce = r) : Ut(e, t, n);
      break;
    default:
      Ut(e, t, n);
  }
}
function df(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Py()), t.forEach(function(r) {
      var o = jy.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function rt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ge = u.stateNode, it = !1;
            break e;
          case 3:
            ge = u.stateNode.containerInfo, it = !0;
            break e;
          case 4:
            ge = u.stateNode.containerInfo, it = !0;
            break e;
        }
        u = u.return;
      }
      if (ge === null) throw Error(O(160));
      lh(i, l, o), ge = null, it = !1;
      var s = o.alternate;
      s !== null && (s.return = null), o.return = null;
    } catch (a) {
      re(o, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) uh(t, e), t = t.sibling;
}
function uh(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (rt(t, e), mt(e), r & 4) {
        try {
          to(3, e, e.return), El(3, e);
        } catch (g) {
          re(e, e.return, g);
        }
        try {
          to(5, e, e.return);
        } catch (g) {
          re(e, e.return, g);
        }
      }
      break;
    case 1:
      rt(t, e), mt(e), r & 512 && n !== null && rr(n, n.return);
      break;
    case 5:
      if (rt(t, e), mt(e), r & 512 && n !== null && rr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          uo(o, "");
        } catch (g) {
          re(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && Od(o, i), Gu(u, l);
          var a = Gu(u, i);
          for (l = 0; l < s.length; l += 2) {
            var c = s[l], m = s[l + 1];
            c === "style" ? Md(o, m) : c === "dangerouslySetInnerHTML" ? Ad(o, m) : c === "children" ? uo(o, m) : ra(o, c, m, a);
          }
          switch (u) {
            case "input":
              bu(o, i);
              break;
            case "textarea":
              Td(o, i);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var v = i.value;
              v != null ? lr(o, !!i.multiple, v, !1) : f !== !!i.multiple && (i.defaultValue != null ? lr(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : lr(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[go] = i;
        } catch (g) {
          re(e, e.return, g);
        }
      }
      break;
    case 6:
      if (rt(t, e), mt(e), r & 4) {
        if (e.stateNode === null) throw Error(O(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (g) {
          re(e, e.return, g);
        }
      }
      break;
    case 3:
      if (rt(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        fo(t.containerInfo);
      } catch (g) {
        re(e, e.return, g);
      }
      break;
    case 4:
      rt(t, e), mt(e);
      break;
    case 13:
      rt(t, e), mt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (ja = ie())), r & 4 && df(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ce = (a = Ce) || c, rt(t, e), Ce = a) : rt(t, e), mt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !c && e.mode & 1) for (L = e, c = e.child; c !== null; ) {
          for (m = L = c; L !== null; ) {
            switch (f = L, v = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                to(4, f, f.return);
                break;
              case 1:
                rr(f, f.return);
                var w = f.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (g) {
                    re(r, n, g);
                  }
                }
                break;
              case 5:
                rr(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  hf(m);
                  continue;
                }
            }
            v !== null ? (v.return = f, L = v) : hf(m);
          }
          c = c.sibling;
        }
        e: for (c = null, m = e; ; ) {
          if (m.tag === 5) {
            if (c === null) {
              c = m;
              try {
                o = m.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ld("display", l));
              } catch (g) {
                re(e, e.return, g);
              }
            }
          } else if (m.tag === 6) {
            if (c === null) try {
              m.stateNode.nodeValue = a ? "" : m.memoizedProps;
            } catch (g) {
              re(e, e.return, g);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            c === m && (c = null), m = m.return;
          }
          c === m && (c = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      rt(t, e), mt(e), r & 4 && df(e);
      break;
    case 21:
      break;
    default:
      rt(
        t,
        e
      ), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ih(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (uo(o, ""), r.flags &= -33);
          var i = ff(e);
          Cs(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = ff(e);
          xs(e, u, l);
          break;
        default:
          throw Error(O(161));
      }
    } catch (s) {
      re(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ry(e, t, n) {
  L = e, sh(e);
}
function sh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ti;
      if (!l) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || Ce;
        u = ti;
        var a = Ce;
        if (ti = l, (Ce = s) && !a) for (L = o; L !== null; ) l = L, s = l.child, l.tag === 22 && l.memoizedState !== null ? mf(o) : s !== null ? (s.return = l, L = s) : mf(o);
        for (; i !== null; ) L = i, sh(i), i = i.sibling;
        L = o, ti = u, Ce = a;
      }
      pf(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, L = i) : pf(e);
  }
}
function pf(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ce || El(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ce) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : ot(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Xc(t, i, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Xc(t, l, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
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
              var a = t.alternate;
              if (a !== null) {
                var c = a.memoizedState;
                if (c !== null) {
                  var m = c.dehydrated;
                  m !== null && fo(m);
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
            throw Error(O(163));
        }
        Ce || t.flags & 512 && ks(t);
      } catch (f) {
        re(t, t.return, f);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, L = n;
      break;
    }
    L = t.return;
  }
}
function hf(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, L = n;
      break;
    }
    L = t.return;
  }
}
function mf(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            El(4, t);
          } catch (s) {
            re(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              re(t, o, s);
            }
          }
          var i = t.return;
          try {
            ks(t);
          } catch (s) {
            re(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ks(t);
          } catch (s) {
            re(t, l, s);
          }
      }
    } catch (s) {
      re(t, t.return, s);
    }
    if (t === e) {
      L = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, L = u;
      break;
    }
    L = t.return;
  }
}
var Oy = Math.ceil, Xi = zt.ReactCurrentDispatcher, Ma = zt.ReactCurrentOwner, Je = zt.ReactCurrentBatchConfig, V = 0, he = null, se = null, Se = 0, $e = 0, or = cn(0), ce = 0, xo = null, Dn = 0, kl = 0, Ia = 0, no = null, Ae = null, ja = 0, Sr = 1 / 0, _t = null, Zi = !1, _s = null, tn = null, ni = !1, Yt = null, Ji = 0, ro = 0, Ps = null, Ei = -1, ki = 0;
function Re() {
  return V & 6 ? ie() : Ei !== -1 ? Ei : Ei = ie();
}
function nn(e) {
  return e.mode & 1 ? V & 2 && Se !== 0 ? Se & -Se : dy.transition !== null ? (ki === 0 && (ki = Qd()), ki) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : qd(e.type)), e) : 1;
}
function st(e, t, n, r) {
  if (50 < ro) throw ro = 0, Ps = null, Error(O(185));
  Do(e, n, r), (!(V & 2) || e !== he) && (e === he && (!(V & 2) && (kl |= n), ce === 4 && Kt(e, Se)), Fe(e, r), n === 1 && V === 0 && !(t.mode & 1) && (Sr = ie() + 500, yl && fn()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  dg(e, t);
  var r = Ii(e, e === he ? Se : 0);
  if (r === 0) n !== null && xc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && xc(n), t === 1) e.tag === 0 ? fy(vf.bind(null, e)) : yp(vf.bind(null, e)), uy(function() {
      !(V & 6) && fn();
    }), n = null;
    else {
      switch (Kd(r)) {
        case 1:
          n = sa;
          break;
        case 4:
          n = Vd;
          break;
        case 16:
          n = Mi;
          break;
        case 536870912:
          n = Hd;
          break;
        default:
          n = Mi;
      }
      n = vh(n, ah.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ah(e, t) {
  if (Ei = -1, ki = 0, V & 6) throw Error(O(327));
  var n = e.callbackNode;
  if (fr() && e.callbackNode !== n) return null;
  var r = Ii(e, e === he ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = qi(e, r);
  else {
    t = r;
    var o = V;
    V |= 2;
    var i = fh();
    (he !== e || Se !== t) && (_t = null, Sr = ie() + 500, kn(e, t));
    do
      try {
        Ay();
        break;
      } catch (u) {
        ch(e, u);
      }
    while (!0);
    Ea(), Xi.current = i, V = o, se !== null ? t = 0 : (he = null, Se = 0, t = ce);
  }
  if (t !== 0) {
    if (t === 2 && (o = qu(e), o !== 0 && (r = o, t = Ns(e, o))), t === 1) throw n = xo, kn(e, 0), Kt(e, r), Fe(e, ie()), n;
    if (t === 6) Kt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Ty(o) && (t = qi(e, r), t === 2 && (i = qu(e), i !== 0 && (r = i, t = Ns(e, i))), t === 1)) throw n = xo, kn(e, 0), Kt(e, r), Fe(e, ie()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          vn(e, Ae, _t);
          break;
        case 3:
          if (Kt(e, r), (r & 130023424) === r && (t = ja + 500 - ie(), 10 < t)) {
            if (Ii(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Re(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = us(vn.bind(null, e, Ae, _t), t);
            break;
          }
          vn(e, Ae, _t);
          break;
        case 4:
          if (Kt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - ut(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Oy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = us(vn.bind(null, e, Ae, _t), r);
            break;
          }
          vn(e, Ae, _t);
          break;
        case 5:
          vn(e, Ae, _t);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Fe(e, ie()), e.callbackNode === n ? ah.bind(null, e) : null;
}
function Ns(e, t) {
  var n = no;
  return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256), e = qi(e, t), e !== 2 && (t = Ae, Ae = n, t !== null && Rs(t)), e;
}
function Rs(e) {
  Ae === null ? Ae = e : Ae.push.apply(Ae, e);
}
function Ty(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!ct(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Kt(e, t) {
  for (t &= ~Ia, t &= ~kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ut(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function vf(e) {
  if (V & 6) throw Error(O(327));
  fr();
  var t = Ii(e, 0);
  if (!(t & 1)) return Fe(e, ie()), null;
  var n = qi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = qu(e);
    r !== 0 && (t = r, n = Ns(e, r));
  }
  if (n === 1) throw n = xo, kn(e, 0), Kt(e, t), Fe(e, ie()), n;
  if (n === 6) throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, vn(e, Ae, _t), Fe(e, ie()), null;
}
function Fa(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    V = n, V === 0 && (Sr = ie() + 500, yl && fn());
  }
}
function An(e) {
  Yt !== null && Yt.tag === 0 && !(V & 6) && fr();
  var t = V;
  V |= 1;
  var n = Je.transition, r = Q;
  try {
    if (Je.transition = null, Q = 1, e) return e();
  } finally {
    Q = r, Je.transition = n, V = t, !(V & 6) && fn();
  }
}
function za() {
  $e = or.current, Z(or);
}
function kn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ly(n)), se !== null) for (n = se.return; n !== null; ) {
    var r = n;
    switch (ya(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Bi();
        break;
      case 3:
        yr(), Z(Ie), Z(_e), Na();
        break;
      case 5:
        Pa(r);
        break;
      case 4:
        yr();
        break;
      case 13:
        Z(ee);
        break;
      case 19:
        Z(ee);
        break;
      case 10:
        ka(r.type._context);
        break;
      case 22:
      case 23:
        za();
    }
    n = n.return;
  }
  if (he = e, se = e = rn(e.current, null), Se = $e = t, ce = 0, xo = null, Ia = kl = Dn = 0, Ae = no = null, wn !== null) {
    for (t = 0; t < wn.length; t++) if (n = wn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    wn = null;
  }
  return e;
}
function ch(e, t) {
  do {
    var n = se;
    try {
      if (Ea(), yi.current = Yi, Gi) {
        for (var r = te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Gi = !1;
      }
      if (Tn = 0, de = ae = te = null, eo = !1, So = 0, Ma.current = null, n === null || n.return === null) {
        ce = 1, xo = t, se = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = Se, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, c = u, m = c.tag;
          if (!(c.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var v = nf(l);
          if (v !== null) {
            v.flags &= -257, rf(v, l, u, i, t), v.mode & 1 && tf(i, a, t), t = v, s = a;
            var w = t.updateQueue;
            if (w === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(s), t.updateQueue = g;
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              tf(i, a, t), $a();
              break e;
            }
            s = Error(O(426));
          }
        } else if (q && u.mode & 1) {
          var P = nf(l);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), rf(P, l, u, i, t), wa(wr(s, u));
            break e;
          }
        }
        i = s = wr(s, u), ce !== 4 && (ce = 2), no === null ? no = [i] : no.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = Kp(i, s, t);
              Yc(i, h);
              break e;
            case 1:
              u = s;
              var d = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (tn === null || !tn.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = Gp(i, u, t);
                Yc(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ph(n);
    } catch (_) {
      t = _, se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function fh() {
  var e = Xi.current;
  return Xi.current = Yi, e === null ? Yi : e;
}
function $a() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4), he === null || !(Dn & 268435455) && !(kl & 268435455) || Kt(he, Se);
}
function qi(e, t) {
  var n = V;
  V |= 2;
  var r = fh();
  (he !== e || Se !== t) && (_t = null, kn(e, t));
  do
    try {
      Dy();
      break;
    } catch (o) {
      ch(e, o);
    }
  while (!0);
  if (Ea(), V = n, Xi.current = r, se !== null) throw Error(O(261));
  return he = null, Se = 0, ce;
}
function Dy() {
  for (; se !== null; ) dh(se);
}
function Ay() {
  for (; se !== null && !rg(); ) dh(se);
}
function dh(e) {
  var t = mh(e.alternate, e, $e);
  e.memoizedProps = e.pendingProps, t === null ? ph(e) : se = t, Ma.current = null;
}
function ph(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = _y(n, t), n !== null) {
        n.flags &= 32767, se = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ce = 6, se = null;
        return;
      }
    } else if (n = Cy(n, t, $e), n !== null) {
      se = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function vn(e, t, n) {
  var r = Q, o = Je.transition;
  try {
    Je.transition = null, Q = 1, Ly(e, t, n, r);
  } finally {
    Je.transition = o, Q = r;
  }
  return null;
}
function Ly(e, t, n, r) {
  do
    fr();
  while (Yt !== null);
  if (V & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (pg(e, i), e === he && (se = he = null, Se = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ni || (ni = !0, vh(Mi, function() {
    return fr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Je.transition, Je.transition = null;
    var l = Q;
    Q = 1;
    var u = V;
    V |= 4, Ma.current = null, Ny(e, n), uh(n, e), qg(is), ji = !!os, is = os = null, e.current = n, Ry(n), og(), V = u, Q = l, Je.transition = i;
  } else e.current = n;
  if (ni && (ni = !1, Yt = e, Ji = o), i = e.pendingLanes, i === 0 && (tn = null), ug(n.stateNode), Fe(e, ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Zi) throw Zi = !1, e = _s, _s = null, e;
  return Ji & 1 && e.tag !== 0 && fr(), i = e.pendingLanes, i & 1 ? e === Ps ? ro++ : (ro = 0, Ps = e) : ro = 0, fn(), null;
}
function fr() {
  if (Yt !== null) {
    var e = Kd(Ji), t = Je.transition, n = Q;
    try {
      if (Je.transition = null, Q = 16 > e ? 16 : e, Yt === null) var r = !1;
      else {
        if (e = Yt, Yt = null, Ji = 0, V & 6) throw Error(O(331));
        var o = V;
        for (V |= 4, L = e.current; L !== null; ) {
          var i = L, l = i.child;
          if (L.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (L = a; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      to(8, c, i);
                  }
                  var m = c.child;
                  if (m !== null) m.return = c, L = m;
                  else for (; L !== null; ) {
                    c = L;
                    var f = c.sibling, v = c.return;
                    if (oh(c), c === a) {
                      L = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = v, L = f;
                      break;
                    }
                    L = v;
                  }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var P = g.sibling;
                    g.sibling = null, g = P;
                  } while (g !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, L = l;
          else e: for (; L !== null; ) {
            if (i = L, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                to(9, i, i.return);
            }
            var h = i.sibling;
            if (h !== null) {
              h.return = i.return, L = h;
              break e;
            }
            L = i.return;
          }
        }
        var d = e.current;
        for (L = d; L !== null; ) {
          l = L;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) p.return = l, L = p;
          else e: for (l = d; L !== null; ) {
            if (u = L, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  El(9, u);
              }
            } catch (_) {
              re(u, u.return, _);
            }
            if (u === l) {
              L = null;
              break e;
            }
            var y = u.sibling;
            if (y !== null) {
              y.return = u.return, L = y;
              break e;
            }
            L = u.return;
          }
        }
        if (V = o, fn(), St && typeof St.onPostCommitFiberRoot == "function") try {
          St.onPostCommitFiberRoot(pl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Q = n, Je.transition = t;
    }
  }
  return !1;
}
function gf(e, t, n) {
  t = wr(n, t), t = Kp(e, t, 1), e = en(e, t, 1), t = Re(), e !== null && (Do(e, 1, t), Fe(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) gf(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      gf(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tn === null || !tn.has(r))) {
        e = wr(n, e), e = Gp(t, e, 1), t = en(t, e, 1), e = Re(), t !== null && (Do(t, 1, e), Fe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function My(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Re(), e.pingedLanes |= e.suspendedLanes & n, he === e && (Se & n) === n && (ce === 4 || ce === 3 && (Se & 130023424) === Se && 500 > ie() - ja ? kn(e, 0) : Ia |= n), Fe(e, t);
}
function hh(e, t) {
  t === 0 && (e.mode & 1 ? (t = Qo, Qo <<= 1, !(Qo & 130023424) && (Qo = 4194304)) : t = 1);
  var n = Re();
  e = It(e, t), e !== null && (Do(e, t, n), Fe(e, n));
}
function Iy(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), hh(e, n);
}
function jy(e, t) {
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
      throw Error(O(314));
  }
  r !== null && r.delete(t), hh(e, n);
}
var mh;
mh = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ie.current) Le = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Le = !1, xy(e, t, n);
    Le = !!(e.flags & 131072);
  }
  else Le = !1, q && t.flags & 1048576 && wp(t, bi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Si(e, t), e = t.pendingProps;
      var o = mr(t, _e.current);
      cr(t, n), o = Oa(null, t, r, e, o, n);
      var i = Ta();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, je(r) ? (i = !0, Ui(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ca(t), o.updater = Sl, t.stateNode = o, o._reactInternals = t, hs(t, r, e, n), t = gs(null, t, r, !0, i, n)) : (t.tag = 0, q && i && ga(t), Ne(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Si(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = zy(r), e = ot(r, e), o) {
          case 0:
            t = vs(null, t, r, e, n);
            break e;
          case 1:
            t = uf(null, t, r, e, n);
            break e;
          case 11:
            t = of(null, t, r, e, n);
            break e;
          case 14:
            t = lf(null, t, r, ot(r.type, e), n);
            break e;
        }
        throw Error(O(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ot(r, o), vs(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ot(r, o), uf(e, t, r, o, n);
    case 3:
      e: {
        if (Jp(t), e === null) throw Error(O(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, _p(e, t), Qi(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = wr(Error(O(423)), t), t = sf(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = wr(Error(O(424)), t), t = sf(e, t, r, n, o);
          break e;
        } else for (Be = qt(t.stateNode.containerInfo.firstChild), We = t, q = !0, lt = null, n = xp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (vr(), r === o) {
            t = jt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Pp(t), e === null && fs(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, ls(r, o) ? l = null : i !== null && ls(r, i) && (t.flags |= 32), Zp(e, t), Ne(e, t, l, n), t.child;
    case 6:
      return e === null && fs(t), null;
    case 13:
      return qp(e, t, n);
    case 4:
      return _a(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = gr(t, null, r, n) : Ne(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ot(r, o), of(e, t, r, o, n);
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, G(Vi, r._currentValue), r._currentValue = l, i !== null) if (ct(i.value, l)) {
          if (i.children === o.children && !Ie.current) {
            t = jt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            l = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = Tt(-1, n & -n), s.tag = 2;
                  var a = i.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var c = a.pending;
                    c === null ? s.next = s : (s.next = c.next, c.next = s), a.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), ds(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (l = i.return, l === null) throw Error(O(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), ds(l, n, t), l = i.sibling;
          } else l = i.child;
          if (l !== null) l.return = i;
          else for (l = i; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (i = l.sibling, i !== null) {
              i.return = l.return, l = i;
              break;
            }
            l = l.return;
          }
          i = l;
        }
        Ne(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, cr(t, n), o = qe(o), r = r(o), t.flags |= 1, Ne(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = ot(r, t.pendingProps), o = ot(r.type, o), lf(e, t, r, o, n);
    case 15:
      return Yp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ot(r, o), Si(e, t), t.tag = 1, je(r) ? (e = !0, Ui(t)) : e = !1, cr(t, n), Qp(t, r, o), hs(t, r, o, n), gs(null, t, r, !0, e, n);
    case 19:
      return eh(e, t, n);
    case 22:
      return Xp(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function vh(e, t) {
  return bd(e, t);
}
function Fy(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ze(e, t, n, r) {
  return new Fy(e, t, n, r);
}
function Ba(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function zy(e) {
  if (typeof e == "function") return Ba(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ia) return 11;
    if (e === la) return 14;
  }
  return 2;
}
function rn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function xi(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") Ba(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Gn:
      return xn(n.children, o, i, t);
    case oa:
      l = 8, o |= 8;
      break;
    case zu:
      return e = Ze(12, n, t, o | 2), e.elementType = zu, e.lanes = i, e;
    case $u:
      return e = Ze(13, n, t, o), e.elementType = $u, e.lanes = i, e;
    case Bu:
      return e = Ze(19, n, t, o), e.elementType = Bu, e.lanes = i, e;
    case Pd:
      return xl(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Cd:
          l = 10;
          break e;
        case _d:
          l = 9;
          break e;
        case ia:
          l = 11;
          break e;
        case la:
          l = 14;
          break e;
        case Vt:
          l = 16, r = null;
          break e;
      }
      throw Error(O(130, e == null ? e : typeof e, ""));
  }
  return t = Ze(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function xn(e, t, n, r) {
  return e = Ze(7, e, r, t), e.lanes = n, e;
}
function xl(e, t, n, r) {
  return e = Ze(22, e, r, t), e.elementType = Pd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function vu(e, t, n) {
  return e = Ze(6, e, null, t), e.lanes = n, e;
}
function gu(e, t, n) {
  return t = Ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function $y(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zl(0), this.expirationTimes = Zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Ua(e, t, n, r, o, i, l, u, s) {
  return e = new $y(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ze(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ca(i), e;
}
function By(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Kn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function gh(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if ($n(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (je(n)) return gp(e, n, t);
  }
  return t;
}
function yh(e, t, n, r, o, i, l, u, s) {
  return e = Ua(n, r, !0, e, o, i, l, u, s), e.context = gh(null), n = e.current, r = Re(), o = nn(n), i = Tt(r, o), i.callback = t ?? null, en(n, i, o), e.current.lanes = o, Do(e, o, r), Fe(e, r), e;
}
function Cl(e, t, n, r) {
  var o = t.current, i = Re(), l = nn(o);
  return n = gh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Tt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = en(o, t, l), e !== null && (st(e, o, l, i), gi(e, o, l)), l;
}
function el(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function yf(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wa(e, t) {
  yf(e, t), (e = e.alternate) && yf(e, t);
}
function Uy() {
  return null;
}
var wh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ba(e) {
  this._internalRoot = e;
}
_l.prototype.render = ba.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Cl(e, t, null, null);
};
_l.prototype.unmount = ba.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    An(function() {
      Cl(null, e, null, null);
    }), t[Mt] = null;
  }
};
function _l(e) {
  this._internalRoot = e;
}
_l.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Xd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++) ;
    Qt.splice(n, 0, e), n === 0 && Jd(e);
  }
};
function Va(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Pl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function wf() {
}
function Wy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = el(l);
        i.call(a);
      };
    }
    var l = yh(t, r, e, 0, null, !1, !1, "", wf);
    return e._reactRootContainer = l, e[Mt] = l.current, mo(e.nodeType === 8 ? e.parentNode : e), An(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = el(s);
      u.call(a);
    };
  }
  var s = Ua(e, 0, !1, null, null, !1, !1, "", wf);
  return e._reactRootContainer = s, e[Mt] = s.current, mo(e.nodeType === 8 ? e.parentNode : e), An(function() {
    Cl(t, s, n, r);
  }), s;
}
function Nl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var s = el(l);
        u.call(s);
      };
    }
    Cl(t, l, e, o);
  } else l = Wy(n, t, e, o, r);
  return el(l);
}
Gd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hr(t.pendingLanes);
        n !== 0 && (aa(t, n | 1), Fe(t, ie()), !(V & 6) && (Sr = ie() + 500, fn()));
      }
      break;
    case 13:
      An(function() {
        var r = It(e, 1);
        if (r !== null) {
          var o = Re();
          st(r, e, 1, o);
        }
      }), Wa(e, 1);
  }
};
ca = function(e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = Re();
      st(t, e, 134217728, n);
    }
    Wa(e, 134217728);
  }
};
Yd = function(e) {
  if (e.tag === 13) {
    var t = nn(e), n = It(e, t);
    if (n !== null) {
      var r = Re();
      st(n, e, t, r);
    }
    Wa(e, t);
  }
};
Xd = function() {
  return Q;
};
Zd = function(e, t) {
  var n = Q;
  try {
    return Q = e, t();
  } finally {
    Q = n;
  }
};
Xu = function(e, t, n) {
  switch (t) {
    case "input":
      if (bu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = gl(r);
            if (!o) throw Error(O(90));
            Rd(r), bu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Td(e, n);
      break;
    case "select":
      t = n.value, t != null && lr(e, !!n.multiple, t, !1);
  }
};
Fd = Fa;
zd = An;
var by = { usingClientEntryPoint: !1, Events: [Lo, Jn, gl, Id, jd, Fa] }, Wr = { findFiberByHostInstance: yn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vy = { bundleType: Wr.bundleType, version: Wr.version, rendererPackageName: Wr.rendererPackageName, rendererConfig: Wr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: zt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ud(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Wr.findFiberByHostInstance || Uy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ri.isDisabled && ri.supportsFiber) try {
    pl = ri.inject(Vy), St = ri;
  } catch {
  }
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = by;
He.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Va(t)) throw Error(O(200));
  return By(e, t, null, n);
};
He.createRoot = function(e, t) {
  if (!Va(e)) throw Error(O(299));
  var n = !1, r = "", o = wh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ua(e, 1, !1, null, null, n, !1, r, o), e[Mt] = t.current, mo(e.nodeType === 8 ? e.parentNode : e), new ba(t);
};
He.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = Ud(t), e = e === null ? null : e.stateNode, e;
};
He.flushSync = function(e) {
  return An(e);
};
He.hydrate = function(e, t, n) {
  if (!Pl(t)) throw Error(O(200));
  return Nl(null, e, t, !0, n);
};
He.hydrateRoot = function(e, t, n) {
  if (!Va(e)) throw Error(O(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = wh;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = yh(t, null, e, 1, n ?? null, o, !1, i, l), e[Mt] = t.current, mo(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new _l(t);
};
He.render = function(e, t, n) {
  if (!Pl(t)) throw Error(O(200));
  return Nl(null, e, t, !1, n);
};
He.unmountComponentAtNode = function(e) {
  if (!Pl(e)) throw Error(O(40));
  return e._reactRootContainer ? (An(function() {
    Nl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Mt] = null;
    });
  }), !0) : !1;
};
He.unstable_batchedUpdates = Fa;
He.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Pl(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Nl(e, t, n, !1, r);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function Sh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sh);
    } catch (e) {
      console.error(e);
    }
}
Sh(), Sd.exports = He;
var Rl = Sd.exports;
const Hy = /* @__PURE__ */ Xs(Rl);
var Qy, Sf = Rl;
Qy = Sf.createRoot, Sf.hydrateRoot;
var Eh = { exports: {} }, kh = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Io = C;
function Ky(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Gy = typeof Object.is == "function" ? Object.is : Ky, Yy = Io.useSyncExternalStore, Xy = Io.useRef, Zy = Io.useEffect, Jy = Io.useMemo, qy = Io.useDebugValue;
kh.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = Xy(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else l = i.current;
  i = Jy(function() {
    function s(v) {
      if (!a) {
        if (a = !0, c = v, v = r(v), o !== void 0 && l.hasValue) {
          var w = l.value;
          if (o(w, v)) return m = w;
        }
        return m = v;
      }
      if (w = m, Gy(c, v)) return w;
      var g = r(v);
      return o !== void 0 && o(w, g) ? w : (c = v, m = g);
    }
    var a = !1, c, m, f = n === void 0 ? null : n;
    return [function() {
      return s(t());
    }, f === null ? void 0 : function() {
      return s(f());
    }];
  }, [t, n, r, o]);
  var u = Yy(e, i[0], i[1]);
  return Zy(function() {
    l.hasValue = !0, l.value = u;
  }, [u]), qy(u), u;
};
Eh.exports = kh;
var e0 = Eh.exports, Ue = (
  // prettier-ignore
  // @ts-ignore
  "default" in ju ? At : ju
), Ef = Symbol.for("react-redux-context"), kf = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function t0() {
  if (!Ue.createContext)
    return {};
  const e = kf[Ef] ?? (kf[Ef] = /* @__PURE__ */ new Map());
  let t = e.get(Ue.createContext);
  return t || (t = Ue.createContext(
    null
  ), e.set(Ue.createContext, t)), t;
}
var sn = /* @__PURE__ */ t0(), n0 = () => {
  throw new Error("uSES not initialized!");
};
function Ha(e = sn) {
  return function() {
    return Ue.useContext(e);
  };
}
var xh = /* @__PURE__ */ Ha(), Ch = n0, r0 = (e) => {
  Ch = e;
}, o0 = (e, t) => e === t;
function i0(e = sn) {
  const t = e === sn ? xh : Ha(e), n = (r, o = {}) => {
    const { equalityFn: i = o0, devModeChecks: l = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: u,
      subscription: s,
      getServerState: a,
      stabilityCheck: c,
      identityFunctionCheck: m
    } = t();
    Ue.useRef(!0);
    const f = Ue.useCallback(
      {
        [r.name](w) {
          return r(w);
        }
      }[r.name],
      [r, c, l.stabilityCheck]
    ), v = Ch(
      s.addNestedSub,
      u.getState,
      a || u.getState,
      f,
      i
    );
    return Ue.useDebugValue(v), v;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Qa = /* @__PURE__ */ i0();
function _h(e) {
  e();
}
function l0() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      _h(() => {
        let n = e;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; )
        n.push(r), r = r.next;
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = t = {
        callback: n,
        next: null,
        prev: t
      };
      return o.prev ? o.prev.next = o : e = o, function() {
        !r || e === null || (r = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : e = o.next);
      };
    }
  };
}
var xf = {
  notify() {
  },
  get: () => []
};
function u0(e, t) {
  let n, r = xf, o = 0, i = !1;
  function l(g) {
    c();
    const P = r.subscribe(g);
    let h = !1;
    return () => {
      h || (h = !0, P(), m());
    };
  }
  function u() {
    r.notify();
  }
  function s() {
    w.onStateChange && w.onStateChange();
  }
  function a() {
    return i;
  }
  function c() {
    o++, n || (n = e.subscribe(s), r = l0());
  }
  function m() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = xf);
  }
  function f() {
    i || (i = !0, c());
  }
  function v() {
    i && (i = !1, m());
  }
  const w = {
    addNestedSub: l,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: f,
    tryUnsubscribe: v,
    getListeners: () => r
  };
  return w;
}
var s0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", a0 = typeof navigator < "u" && navigator.product === "ReactNative", c0 = s0 || a0 ? Ue.useLayoutEffect : Ue.useEffect;
function Cf(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function TE(e, t) {
  if (Cf(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Cf(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
function f0({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const l = Ue.useMemo(() => {
    const a = u0(e);
    return {
      store: e,
      subscription: a,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), u = Ue.useMemo(() => e.getState(), [e]);
  c0(() => {
    const { subscription: a } = l;
    return a.onStateChange = a.notifyNestedSubs, a.trySubscribe(), u !== e.getState() && a.notifyNestedSubs(), () => {
      a.tryUnsubscribe(), a.onStateChange = void 0;
    };
  }, [l, u]);
  const s = t || sn;
  return /* @__PURE__ */ Ue.createElement(s.Provider, { value: l }, n);
}
var DE = f0;
function Ph(e = sn) {
  const t = e === sn ? xh : (
    // @ts-ignore
    Ha(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var d0 = /* @__PURE__ */ Ph();
function p0(e = sn) {
  const t = e === sn ? d0 : Ph(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Nh = /* @__PURE__ */ p0(), AE = _h;
r0(e0.useSyncExternalStoreWithSelector);
function ve(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var h0 = typeof Symbol == "function" && Symbol.observable || "@@observable", _f = h0, yu = () => Math.random().toString(36).substring(7).split("").join("."), m0 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ yu()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ yu()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${yu()}`
}, tl = m0;
function Ka(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Rh(e, t, n) {
  if (typeof e != "function")
    throw new Error(ve(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(ve(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(ve(1));
    return n(Rh)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), l = i, u = 0, s = !1;
  function a() {
    l === i && (l = /* @__PURE__ */ new Map(), i.forEach((P, h) => {
      l.set(h, P);
    }));
  }
  function c() {
    if (s)
      throw new Error(ve(3));
    return o;
  }
  function m(P) {
    if (typeof P != "function")
      throw new Error(ve(4));
    if (s)
      throw new Error(ve(5));
    let h = !0;
    a();
    const d = u++;
    return l.set(d, P), function() {
      if (h) {
        if (s)
          throw new Error(ve(6));
        h = !1, a(), l.delete(d), i = null;
      }
    };
  }
  function f(P) {
    if (!Ka(P))
      throw new Error(ve(7));
    if (typeof P.type > "u")
      throw new Error(ve(8));
    if (typeof P.type != "string")
      throw new Error(ve(17));
    if (s)
      throw new Error(ve(9));
    try {
      s = !0, o = r(o, P);
    } finally {
      s = !1;
    }
    return (i = l).forEach((d) => {
      d();
    }), P;
  }
  function v(P) {
    if (typeof P != "function")
      throw new Error(ve(10));
    r = P, f({
      type: tl.REPLACE
    });
  }
  function w() {
    const P = m;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(h) {
        if (typeof h != "object" || h === null)
          throw new Error(ve(11));
        function d() {
          const y = h;
          y.next && y.next(c());
        }
        return d(), {
          unsubscribe: P(d)
        };
      },
      [_f]() {
        return this;
      }
    };
  }
  return f({
    type: tl.INIT
  }), {
    dispatch: f,
    subscribe: m,
    getState: c,
    replaceReducer: v,
    [_f]: w
  };
}
function v0(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: tl.INIT
    }) > "u")
      throw new Error(ve(12));
    if (typeof n(void 0, {
      type: tl.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ve(13));
  });
}
function g0(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const l = t[i];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  const r = Object.keys(n);
  let o;
  try {
    v0(n);
  } catch (i) {
    o = i;
  }
  return function(l = {}, u) {
    if (o)
      throw o;
    let s = !1;
    const a = {};
    for (let c = 0; c < r.length; c++) {
      const m = r[c], f = n[m], v = l[m], w = f(v, u);
      if (typeof w > "u")
        throw u && u.type, new Error(ve(14));
      a[m] = w, s = s || w !== v;
    }
    return s = s || r.length !== Object.keys(l).length, s ? a : l;
  };
}
function nl(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function y0(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(ve(15));
    };
    const l = {
      getState: o.getState,
      dispatch: (s, ...a) => i(s, ...a)
    }, u = e.map((s) => s(l));
    return i = nl(...u)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function Oh(e) {
  return Ka(e) && "type" in e && typeof e.type == "string";
}
var Ga = Symbol.for("immer-nothing"), oo = Symbol.for("immer-draftable"), ze = Symbol.for("immer-state");
function ye(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Ln = Object.getPrototypeOf;
function Ft(e) {
  return !!e && !!e[ze];
}
function kt(e) {
  var t;
  return e ? Th(e) || Array.isArray(e) || !!e[oo] || !!((t = e.constructor) != null && t[oo]) || jo(e) || Fo(e) : !1;
}
var w0 = Object.prototype.constructor.toString();
function Th(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Ln(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === w0;
}
function LE(e) {
  return Ft(e) || ye(15, e), e[ze].base_;
}
function Co(e, t) {
  Mn(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Mn(e) {
  const t = e[ze];
  return t ? t.type_ : Array.isArray(e) ? 1 : jo(e) ? 2 : Fo(e) ? 3 : 0;
}
function _o(e, t) {
  return Mn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function wu(e, t) {
  return Mn(e) === 2 ? e.get(t) : e[t];
}
function Dh(e, t, n) {
  const r = Mn(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function S0(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function jo(e) {
  return e instanceof Map;
}
function Fo(e) {
  return e instanceof Set;
}
function gn(e) {
  return e.copy_ || e.base_;
}
function Os(e, t) {
  if (jo(e))
    return new Map(e);
  if (Fo(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Th(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[ze];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const l = o[i], u = r[l];
      u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (r[l] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: u.enumerable,
        value: e[l]
      });
    }
    return Object.create(Ln(e), r);
  } else {
    const r = Ln(e);
    if (r !== null && n)
      return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function Ya(e, t = !1) {
  return Ol(e) || Ft(e) || !kt(e) || (Mn(e) > 1 && (e.set = e.add = e.clear = e.delete = E0), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Ya(r, !0))), e;
}
function E0() {
  ye(2);
}
function Ol(e) {
  return Object.isFrozen(e);
}
var Ts = {};
function In(e) {
  const t = Ts[e];
  return t || ye(0, e), t;
}
function k0(e, t) {
  Ts[e] || (Ts[e] = t);
}
var Po;
function Ah() {
  return Po;
}
function x0(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Pf(e, t) {
  t && (In("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ds(e) {
  As(e), e.drafts_.forEach(C0), e.drafts_ = null;
}
function As(e) {
  e === Po && (Po = e.parent_);
}
function Nf(e) {
  return Po = x0(Po, e);
}
function C0(e) {
  const t = e[ze];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Rf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[ze].modified_ && (Ds(t), ye(4)), kt(e) && (e = rl(t, e), t.parent_ || ol(t, e)), t.patches_ && In("Patches").generateReplacementPatches_(
    n[ze].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = rl(t, n, []), Ds(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Ga ? e : void 0;
}
function rl(e, t, n) {
  if (Ol(t))
    return t;
  const r = t[ze];
  if (!r)
    return Co(
      t,
      (o, i) => Of(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return ol(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, l = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), l = !0), Co(
      i,
      (u, s) => Of(e, r, o, u, s, n, l)
    ), ol(e, o, !1), n && e.patches_ && In("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Of(e, t, n, r, o, i, l) {
  if (Ft(o)) {
    const u = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !_o(t.assigned_, r) ? i.concat(r) : void 0, s = rl(e, o, u);
    if (Dh(n, r, s), Ft(s))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else l && n.add(o);
  if (kt(o) && !Ol(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    rl(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && ol(e, o);
  }
}
function ol(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ya(t, n);
}
function _0(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Ah(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = r, i = Xa;
  n && (o = [r], i = No);
  const { revoke: l, proxy: u } = Proxy.revocable(o, i);
  return r.draft_ = u, r.revoke_ = l, u;
}
var Xa = {
  get(e, t) {
    if (t === ze)
      return e;
    const n = gn(e);
    if (!_o(n, t))
      return P0(e, n, t);
    const r = n[t];
    return e.finalized_ || !kt(r) ? r : r === Su(e.base_, t) ? (Eu(e), e.copy_[t] = Ms(r, e)) : r;
  },
  has(e, t) {
    return t in gn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(gn(e));
  },
  set(e, t, n) {
    const r = Lh(gn(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Su(gn(e), t), i = o == null ? void 0 : o[ze];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (S0(n, o) && (n !== void 0 || _o(e.base_, t)))
        return !0;
      Eu(e), Ls(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Su(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Eu(e), Ls(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = gn(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    ye(11);
  },
  getPrototypeOf(e) {
    return Ln(e.base_);
  },
  setPrototypeOf() {
    ye(12);
  }
}, No = {};
Co(Xa, (e, t) => {
  No[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
No.deleteProperty = function(e, t) {
  return No.set.call(this, e, t, void 0);
};
No.set = function(e, t, n) {
  return Xa.set.call(this, e[0], t, n, e[0]);
};
function Su(e, t) {
  const n = e[ze];
  return (n ? gn(n) : e)[t];
}
function P0(e, t, n) {
  var o;
  const r = Lh(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Lh(e, t) {
  if (!(t in e))
    return;
  let n = Ln(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = Ln(n);
  }
}
function Ls(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ls(e.parent_));
}
function Eu(e) {
  e.copy_ || (e.copy_ = Os(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var N0 = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const l = this;
        return function(s = i, ...a) {
          return l.produce(s, (c) => n.call(this, c, ...a));
        };
      }
      typeof n != "function" && ye(6), r !== void 0 && typeof r != "function" && ye(7);
      let o;
      if (kt(t)) {
        const i = Nf(this), l = Ms(t, void 0);
        let u = !0;
        try {
          o = n(l), u = !1;
        } finally {
          u ? Ds(i) : As(i);
        }
        return Pf(i, r), Rf(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Ga && (o = void 0), this.autoFreeze_ && Ya(o, !0), r) {
          const i = [], l = [];
          In("Patches").generateReplacementPatches_(t, o, i, l), r(i, l);
        }
        return o;
      } else
        ye(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (l, ...u) => this.produceWithPatches(l, (s) => t(s, ...u));
      let r, o;
      return [this.produce(t, n, (l, u) => {
        r = l, o = u;
      }), r, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    kt(e) || ye(8), Ft(e) && (e = R0(e));
    const t = Nf(this), n = Ms(e, void 0);
    return n[ze].isManual_ = !0, As(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[ze];
    (!n || !n.isManual_) && ye(9);
    const { scope_: r } = n;
    return Pf(r, t), Rf(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = In("Patches").applyPatches_;
    return Ft(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function Ms(e, t) {
  const n = jo(e) ? In("MapSet").proxyMap_(e, t) : Fo(e) ? In("MapSet").proxySet_(e, t) : _0(e, t);
  return (t ? t.scope_ : Ah()).drafts_.push(n), n;
}
function R0(e) {
  return Ft(e) || ye(10, e), Mh(e);
}
function Mh(e) {
  if (!kt(e) || Ol(e))
    return e;
  const t = e[ze];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Os(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Os(e, !0);
  return Co(n, (r, o) => {
    Dh(n, r, Mh(o));
  }), t && (t.finalized_ = !1), n;
}
function ME() {
  const t = "replace", n = "add", r = "remove";
  function o(f, v, w, g) {
    switch (f.type_) {
      case 0:
      case 2:
        return l(
          f,
          v,
          w,
          g
        );
      case 1:
        return i(f, v, w, g);
      case 3:
        return u(
          f,
          v,
          w,
          g
        );
    }
  }
  function i(f, v, w, g) {
    let { base_: P, assigned_: h } = f, d = f.copy_;
    d.length < P.length && ([P, d] = [d, P], [w, g] = [g, w]);
    for (let p = 0; p < P.length; p++)
      if (h[p] && d[p] !== P[p]) {
        const y = v.concat([p]);
        w.push({
          op: t,
          path: y,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: m(d[p])
        }), g.push({
          op: t,
          path: y,
          value: m(P[p])
        });
      }
    for (let p = P.length; p < d.length; p++) {
      const y = v.concat([p]);
      w.push({
        op: n,
        path: y,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: m(d[p])
      });
    }
    for (let p = d.length - 1; P.length <= p; --p) {
      const y = v.concat([p]);
      g.push({
        op: r,
        path: y
      });
    }
  }
  function l(f, v, w, g) {
    const { base_: P, copy_: h } = f;
    Co(f.assigned_, (d, p) => {
      const y = wu(P, d), _ = wu(h, d), N = p ? _o(P, d) ? t : n : r;
      if (y === _ && N === t)
        return;
      const E = v.concat(d);
      w.push(N === r ? { op: N, path: E } : { op: N, path: E, value: _ }), g.push(
        N === n ? { op: r, path: E } : N === r ? { op: n, path: E, value: m(y) } : { op: t, path: E, value: m(y) }
      );
    });
  }
  function u(f, v, w, g) {
    let { base_: P, copy_: h } = f, d = 0;
    P.forEach((p) => {
      if (!h.has(p)) {
        const y = v.concat([d]);
        w.push({
          op: r,
          path: y,
          value: p
        }), g.unshift({
          op: n,
          path: y,
          value: p
        });
      }
      d++;
    }), d = 0, h.forEach((p) => {
      if (!P.has(p)) {
        const y = v.concat([d]);
        w.push({
          op: n,
          path: y,
          value: p
        }), g.unshift({
          op: r,
          path: y,
          value: p
        });
      }
      d++;
    });
  }
  function s(f, v, w, g) {
    w.push({
      op: t,
      path: [],
      value: v === Ga ? void 0 : v
    }), g.push({
      op: t,
      path: [],
      value: f
    });
  }
  function a(f, v) {
    return v.forEach((w) => {
      const { path: g, op: P } = w;
      let h = f;
      for (let _ = 0; _ < g.length - 1; _++) {
        const N = Mn(h);
        let E = g[_];
        typeof E != "string" && typeof E != "number" && (E = "" + E), (N === 0 || N === 1) && (E === "__proto__" || E === "constructor") && ye(19), typeof h == "function" && E === "prototype" && ye(19), h = wu(h, E), typeof h != "object" && ye(18, g.join("/"));
      }
      const d = Mn(h), p = c(w.value), y = g[g.length - 1];
      switch (P) {
        case t:
          switch (d) {
            case 2:
              return h.set(y, p);
            case 3:
              ye(16);
            default:
              return h[y] = p;
          }
        case n:
          switch (d) {
            case 1:
              return y === "-" ? h.push(p) : h.splice(y, 0, p);
            case 2:
              return h.set(y, p);
            case 3:
              return h.add(p);
            default:
              return h[y] = p;
          }
        case r:
          switch (d) {
            case 1:
              return h.splice(y, 1);
            case 2:
              return h.delete(y);
            case 3:
              return h.delete(w.value);
            default:
              return delete h[y];
          }
        default:
          ye(17, P);
      }
    }), f;
  }
  function c(f) {
    if (!kt(f))
      return f;
    if (Array.isArray(f))
      return f.map(c);
    if (jo(f))
      return new Map(
        Array.from(f.entries()).map(([w, g]) => [w, c(g)])
      );
    if (Fo(f))
      return new Set(Array.from(f).map(c));
    const v = Object.create(Ln(f));
    for (const w in f)
      v[w] = c(f[w]);
    return _o(f, oo) && (v[oo] = f[oo]), v;
  }
  function m(f) {
    return Ft(f) ? c(f) : f;
  }
  k0("Patches", {
    applyPatches_: a,
    generatePatches_: o,
    generateReplacementPatches_: s
  });
}
var Ve = new N0(), Ih = Ve.produce, IE = Ve.produceWithPatches.bind(
  Ve
);
Ve.setAutoFreeze.bind(Ve);
Ve.setUseStrictShallowCopy.bind(Ve);
var jE = Ve.applyPatches.bind(Ve);
Ve.createDraft.bind(Ve);
Ve.finishDraft.bind(Ve);
function jh(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var O0 = jh(), T0 = jh, D0 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? nl : nl.apply(null, arguments);
}, A0 = (e) => e && typeof e.match == "function";
function Dt(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(Oe(0));
      return {
        type: e,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: e,
      payload: r[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => Oh(r) && r.type === e, n;
}
function Tf(e, t) {
  for (const n of e)
    if (t(n))
      return n;
}
var Fh = class Kr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Kr.prototype);
  }
  static get [Symbol.species]() {
    return Kr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Kr(...t[0].concat(this)) : new Kr(...t.concat(this));
  }
};
function Df(e) {
  return kt(e) ? Ih(e, () => {
  }) : e;
}
function Af(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(Oe(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function L0(e) {
  return typeof e == "boolean";
}
var M0 = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let l = new Fh();
  return n && (L0(n) ? l.push(O0) : l.push(T0(n.extraArgument))), l;
}, zh = "RTK_autoBatch", FE = () => (e) => ({
  payload: e,
  meta: {
    [zh]: !0
  }
}), $h = (e) => (t) => {
  setTimeout(t, e);
}, I0 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : $h(10), j0 = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, l = !1;
  const u = /* @__PURE__ */ new Set(), s = e.type === "tick" ? queueMicrotask : e.type === "raf" ? I0 : e.type === "callback" ? e.queueNotification : $h(e.timeout), a = () => {
    l = !1, i && (i = !1, u.forEach((c) => c()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(c) {
      const m = () => o && c(), f = r.subscribe(m);
      return u.add(c), () => {
        f(), u.delete(c);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(c) {
      var m;
      try {
        return o = !((m = c == null ? void 0 : c.meta) != null && m[zh]), i = !o, i && (l || (l = !0, s(a))), r.dispatch(c);
      } finally {
        o = !0;
      }
    }
  });
}, F0 = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Fh(e);
  return r && o.push(j0(typeof r == "object" ? r : void 0)), o;
};
function zE(e) {
  const t = M0(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: l = void 0
  } = e || {};
  let u;
  if (typeof n == "function")
    u = n;
  else if (Ka(n))
    u = g0(n);
  else
    throw new Error(Oe(1));
  let s;
  typeof r == "function" ? s = r(t) : s = t();
  let a = nl;
  o && (a = D0({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof o == "object" && o
  }));
  const c = y0(...s), m = F0(c);
  let f = typeof l == "function" ? l(m) : m();
  const v = a(...f);
  return Rh(u, i, v);
}
function Bh(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, l) {
      const u = typeof i == "string" ? i : i.type;
      if (!u)
        throw new Error(Oe(28));
      if (u in t)
        throw new Error(Oe(29));
      return t[u] = l, o;
    },
    addMatcher(i, l) {
      return n.push({
        matcher: i,
        reducer: l
      }), o;
    },
    addDefaultCase(i) {
      return r = i, o;
    }
  };
  return e(o), [t, n, r];
}
function z0(e) {
  return typeof e == "function";
}
function $0(e, t) {
  let [n, r, o] = Bh(t), i;
  if (z0(e))
    i = () => Df(e());
  else {
    const u = Df(e);
    i = () => u;
  }
  function l(u = i(), s) {
    let a = [n[s.type], ...r.filter(({
      matcher: c
    }) => c(s)).map(({
      reducer: c
    }) => c)];
    return a.filter((c) => !!c).length === 0 && (a = [o]), a.reduce((c, m) => {
      if (m)
        if (Ft(c)) {
          const v = m(c, s);
          return v === void 0 ? c : v;
        } else {
          if (kt(c))
            return Ih(c, (f) => m(f, s));
          {
            const f = m(c, s);
            if (f === void 0) {
              if (c === null)
                return c;
              throw new Error(Oe(9));
            }
            return f;
          }
        }
      return c;
    }, u);
  }
  return l.getInitialState = i, l;
}
var Uh = (e, t) => A0(e) ? e.match(t) : e(t);
function zo(...e) {
  return (t) => e.some((n) => Uh(n, t));
}
function Lf(...e) {
  return (t) => e.every((n) => Uh(n, t));
}
function Tl(e, t) {
  if (!e || !e.meta) return !1;
  const n = typeof e.meta.requestId == "string", r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function $o(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function B0(...e) {
  return e.length === 0 ? (t) => Tl(t, ["pending"]) : $o(e) ? zo(...e.map((t) => t.pending)) : B0()(e[0]);
}
function Is(...e) {
  return e.length === 0 ? (t) => Tl(t, ["rejected"]) : $o(e) ? zo(...e.map((t) => t.rejected)) : Is()(e[0]);
}
function U0(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0 ? Lf(Is(...e), t) : $o(e) ? Lf(Is(...e), t) : U0()(e[0]);
}
function W0(...e) {
  return e.length === 0 ? (t) => Tl(t, ["fulfilled"]) : $o(e) ? zo(...e.map((t) => t.fulfilled)) : W0()(e[0]);
}
function b0(...e) {
  return e.length === 0 ? (t) => Tl(t, ["pending", "fulfilled", "rejected"]) : $o(e) ? zo(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : b0()(e[0]);
}
var V0 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Wh = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += V0[Math.random() * 64 | 0];
  return t;
}, H0 = ["name", "message", "stack", "code"], ku = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Lr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Mf = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Lr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Q0 = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of H0)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, $E = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = Dt(t + "/fulfilled", (s, a, c, m) => ({
      payload: s,
      meta: {
        ...m || {},
        arg: c,
        requestId: a,
        requestStatus: "fulfilled"
      }
    })), i = Dt(t + "/pending", (s, a, c) => ({
      payload: void 0,
      meta: {
        ...c || {},
        arg: a,
        requestId: s,
        requestStatus: "pending"
      }
    })), l = Dt(t + "/rejected", (s, a, c, m, f) => ({
      payload: m,
      error: (r && r.serializeError || Q0)(s || "Rejected"),
      meta: {
        ...f || {},
        arg: c,
        requestId: a,
        rejectedWithValue: !!m,
        requestStatus: "rejected",
        aborted: (s == null ? void 0 : s.name) === "AbortError",
        condition: (s == null ? void 0 : s.name) === "ConditionError"
      }
    }));
    function u(s) {
      return (a, c, m) => {
        const f = r != null && r.idGenerator ? r.idGenerator(s) : Wh(), v = new AbortController();
        let w, g;
        function P(d) {
          g = d, v.abort();
        }
        const h = async function() {
          var y, _;
          let d;
          try {
            let N = (y = r == null ? void 0 : r.condition) == null ? void 0 : y.call(r, s, {
              getState: c,
              extra: m
            });
            if (G0(N) && (N = await N), N === !1 || v.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const E = new Promise((R, z) => {
              w = () => {
                z({
                  name: "AbortError",
                  message: g || "Aborted"
                });
              }, v.signal.addEventListener("abort", w);
            });
            a(i(f, s, (_ = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : _.call(r, {
              requestId: f,
              arg: s
            }, {
              getState: c,
              extra: m
            }))), d = await Promise.race([E, Promise.resolve(n(s, {
              dispatch: a,
              getState: c,
              extra: m,
              requestId: f,
              signal: v.signal,
              abort: P,
              rejectWithValue: (R, z) => new ku(R, z),
              fulfillWithValue: (R, z) => new Mf(R, z)
            })).then((R) => {
              if (R instanceof ku)
                throw R;
              return R instanceof Mf ? o(R.payload, f, s, R.meta) : o(R, f, s);
            })]);
          } catch (N) {
            d = N instanceof ku ? l(null, f, s, N.payload, N.meta) : l(N, f, s);
          } finally {
            w && v.signal.removeEventListener("abort", w);
          }
          return r && !r.dispatchConditionRejection && l.match(d) && d.meta.condition || a(d), d;
        }();
        return Object.assign(h, {
          abort: P,
          requestId: f,
          arg: s,
          unwrap() {
            return h.then(K0);
          }
        });
      };
    }
    return Object.assign(u, {
      pending: i,
      rejected: l,
      fulfilled: o,
      settled: zo(l, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function K0(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function G0(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Y0 = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function X0(e, t) {
  return `${e}/${t}`;
}
function Z0({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Y0];
  return function(o) {
    const {
      name: i,
      reducerPath: l = i
    } = o;
    if (!i)
      throw new Error(Oe(11));
    typeof process < "u";
    const u = (typeof o.reducers == "function" ? o.reducers(q0()) : o.reducers) || {}, s = Object.keys(u), a = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, c = {
      addCase(p, y) {
        const _ = typeof p == "string" ? p : p.type;
        if (!_)
          throw new Error(Oe(12));
        if (_ in a.sliceCaseReducersByType)
          throw new Error(Oe(13));
        return a.sliceCaseReducersByType[_] = y, c;
      },
      addMatcher(p, y) {
        return a.sliceMatchers.push({
          matcher: p,
          reducer: y
        }), c;
      },
      exposeAction(p, y) {
        return a.actionCreators[p] = y, c;
      },
      exposeCaseReducer(p, y) {
        return a.sliceCaseReducersByName[p] = y, c;
      }
    };
    s.forEach((p) => {
      const y = u[p], _ = {
        reducerName: p,
        type: X0(i, p),
        createNotation: typeof o.reducers == "function"
      };
      t1(y) ? r1(_, y, c, t) : e1(_, y, c);
    });
    function m() {
      const [p = {}, y = [], _ = void 0] = typeof o.extraReducers == "function" ? Bh(o.extraReducers) : [o.extraReducers], N = {
        ...p,
        ...a.sliceCaseReducersByType
      };
      return $0(o.initialState, (E) => {
        for (let R in N)
          E.addCase(R, N[R]);
        for (let R of a.sliceMatchers)
          E.addMatcher(R.matcher, R.reducer);
        for (let R of y)
          E.addMatcher(R.matcher, R.reducer);
        _ && E.addDefaultCase(_);
      });
    }
    const f = (p) => p, v = /* @__PURE__ */ new Map();
    let w;
    function g(p, y) {
      return w || (w = m()), w(p, y);
    }
    function P() {
      return w || (w = m()), w.getInitialState();
    }
    function h(p, y = !1) {
      function _(E) {
        let R = E[p];
        return typeof R > "u" && y && (R = P()), R;
      }
      function N(E = f) {
        const R = Af(v, y, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Af(R, E, {
          insert: () => {
            const z = {};
            for (const [j, me] of Object.entries(o.selectors ?? {}))
              z[j] = J0(me, E, P, y);
            return z;
          }
        });
      }
      return {
        reducerPath: p,
        getSelectors: N,
        get selectors() {
          return N(_);
        },
        selectSlice: _
      };
    }
    const d = {
      name: i,
      reducer: g,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: P,
      ...h(l),
      injectInto(p, {
        reducerPath: y,
        ..._
      } = {}) {
        const N = y ?? l;
        return p.inject({
          reducerPath: N,
          reducer: g
        }, _), {
          ...d,
          ...h(N, !0)
        };
      }
    };
    return d;
  };
}
function J0(e, t, n, r) {
  function o(i, ...l) {
    let u = t(i);
    return typeof u > "u" && r && (u = n()), e(u, ...l);
  }
  return o.unwrapped = e, o;
}
var Za = /* @__PURE__ */ Z0();
function q0() {
  function e(t, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...n) {
          return t(...n);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function e1({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, l;
  if ("reducer" in r) {
    if (n && !n1(r))
      throw new Error(Oe(17));
    i = r.reducer, l = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, l ? Dt(e, l) : Dt(e));
}
function t1(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function n1(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function r1({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(Oe(18));
  const {
    payloadCreator: i,
    fulfilled: l,
    pending: u,
    rejected: s,
    settled: a,
    options: c
  } = n, m = o(e, i, c);
  r.exposeAction(t, m), l && r.addCase(m.fulfilled, l), u && r.addCase(m.pending, u), s && r.addCase(m.rejected, s), a && r.addMatcher(m.settled, a), r.exposeCaseReducer(t, {
    fulfilled: l || oi,
    pending: u || oi,
    rejected: s || oi,
    settled: a || oi
  });
}
function oi() {
}
var o1 = "task", bh = "listener", Vh = "completed", Ja = "cancelled", i1 = `task-${Ja}`, l1 = `task-${Vh}`, js = `${bh}-${Ja}`, u1 = `${bh}-${Vh}`, Dl = class {
  constructor(e) {
    Lr(this, "name", "TaskAbortError");
    Lr(this, "message");
    this.code = e, this.message = `${o1} ${Ja} (reason: ${e})`;
  }
}, qa = (e, t) => {
  if (typeof e != "function")
    throw new Error(Oe(32));
}, il = () => {
}, Hh = (e, t = il) => (e.catch(t), e), Qh = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), Cn = (e, t) => {
  const n = e.signal;
  n.aborted || ("reason" in n || Object.defineProperty(n, "reason", {
    enumerable: !0,
    value: t,
    configurable: !0,
    writable: !0
  }), e.abort(t));
}, _n = (e) => {
  if (e.aborted) {
    const {
      reason: t
    } = e;
    throw new Dl(t);
  }
};
function Kh(e, t) {
  let n = il;
  return new Promise((r, o) => {
    const i = () => o(new Dl(e.reason));
    if (e.aborted) {
      i();
      return;
    }
    n = Qh(e, i), t.finally(() => n()).then(r, o);
  }).finally(() => {
    n = il;
  });
}
var s1 = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (n) {
    return {
      status: n instanceof Dl ? "cancelled" : "rejected",
      error: n
    };
  } finally {
    t == null || t();
  }
}, ll = (e) => (t) => Hh(Kh(e, t).then((n) => (_n(e), n))), Gh = (e) => {
  const t = ll(e);
  return (n) => t(new Promise((r) => setTimeout(r, n)));
}, {
  assign: dr
} = Object, If = {}, Al = "listenerMiddleware", a1 = (e, t) => {
  const n = (r) => Qh(e, () => Cn(r, e.reason));
  return (r, o) => {
    qa(r);
    const i = new AbortController();
    n(i);
    const l = s1(async () => {
      _n(e), _n(i.signal);
      const u = await r({
        pause: ll(i.signal),
        delay: Gh(i.signal),
        signal: i.signal
      });
      return _n(i.signal), u;
    }, () => Cn(i, l1));
    return o != null && o.autoJoin && t.push(l.catch(il)), {
      result: ll(e)(l),
      cancel() {
        Cn(i, i1);
      }
    };
  };
}, c1 = (e, t) => {
  const n = async (r, o) => {
    _n(t);
    let i = () => {
    };
    const u = [new Promise((s, a) => {
      let c = e({
        predicate: r,
        effect: (m, f) => {
          f.unsubscribe(), s([m, f.getState(), f.getOriginalState()]);
        }
      });
      i = () => {
        c(), a();
      };
    })];
    o != null && u.push(new Promise((s) => setTimeout(s, o, null)));
    try {
      const s = await Kh(t, Promise.race(u));
      return _n(t), s;
    } finally {
      i();
    }
  };
  return (r, o) => Hh(n(r, o));
}, Yh = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = Dt(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o) throw new Error(Oe(21));
  return qa(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, Xh = /* @__PURE__ */ dr((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = Yh(e);
  return {
    id: Wh(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Oe(22));
    }
  };
}, {
  withTypes: () => Xh
}), Fs = (e) => {
  e.pending.forEach((t) => {
    Cn(t, js);
  });
}, f1 = (e) => () => {
  e.forEach(Fs), e.clear();
}, jf = (e, t, n) => {
  try {
    e(t, n);
  } catch (r) {
    setTimeout(() => {
      throw r;
    }, 0);
  }
}, Zh = /* @__PURE__ */ dr(/* @__PURE__ */ Dt(`${Al}/add`), {
  withTypes: () => Zh
}), d1 = /* @__PURE__ */ Dt(`${Al}/removeAll`), Jh = /* @__PURE__ */ dr(/* @__PURE__ */ Dt(`${Al}/remove`), {
  withTypes: () => Jh
}), p1 = (...e) => {
  console.error(`${Al}/error`, ...e);
}, BE = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), {
    extra: n,
    onError: r = p1
  } = e;
  qa(r);
  const o = (c) => (c.unsubscribe = () => t.delete(c.id), t.set(c.id, c), (m) => {
    c.unsubscribe(), m != null && m.cancelActive && Fs(c);
  }), i = (c) => {
    let m = Tf(Array.from(t.values()), (f) => f.effect === c.effect);
    return m || (m = Xh(c)), o(m);
  };
  dr(i, {
    withTypes: () => i
  });
  const l = (c) => {
    const {
      type: m,
      effect: f,
      predicate: v
    } = Yh(c), w = Tf(Array.from(t.values()), (g) => (typeof m == "string" ? g.type === m : g.predicate === v) && g.effect === f);
    return w && (w.unsubscribe(), c.cancelActive && Fs(w)), !!w;
  };
  dr(l, {
    withTypes: () => l
  });
  const u = async (c, m, f, v) => {
    const w = new AbortController(), g = c1(i, w.signal), P = [];
    try {
      c.pending.add(w), await Promise.resolve(c.effect(
        m,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        dr({}, f, {
          getOriginalState: v,
          condition: (h, d) => g(h, d).then(Boolean),
          take: g,
          delay: Gh(w.signal),
          pause: ll(w.signal),
          extra: n,
          signal: w.signal,
          fork: a1(w.signal, P),
          unsubscribe: c.unsubscribe,
          subscribe: () => {
            t.set(c.id, c);
          },
          cancelActiveListeners: () => {
            c.pending.forEach((h, d, p) => {
              h !== w && (Cn(h, js), p.delete(h));
            });
          },
          cancel: () => {
            Cn(w, js), c.pending.delete(w);
          },
          throwIfCancelled: () => {
            _n(w.signal);
          }
        })
      ));
    } catch (h) {
      h instanceof Dl || jf(r, h, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(P), Cn(w, u1), c.pending.delete(w);
    }
  }, s = f1(t);
  return {
    middleware: (c) => (m) => (f) => {
      if (!Oh(f))
        return m(f);
      if (Zh.match(f))
        return i(f.payload);
      if (d1.match(f)) {
        s();
        return;
      }
      if (Jh.match(f))
        return l(f.payload);
      let v = c.getState();
      const w = () => {
        if (v === If)
          throw new Error(Oe(23));
        return v;
      };
      let g;
      try {
        if (g = m(f), t.size > 0) {
          const P = c.getState(), h = Array.from(t.values());
          for (const d of h) {
            let p = !1;
            try {
              p = d.predicate(f, P, v);
            } catch (y) {
              p = !1, jf(r, y, {
                raisedBy: "predicate"
              });
            }
            p && u(d, f, c, w);
          }
        }
      } finally {
        v = If;
      }
      return g;
    },
    startListening: i,
    stopListening: l,
    clearListeners: s
  };
};
function Oe(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var zs = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(t);
  })(Mr, function(n) {
    function r(S, x) {
      S.super_ = x, S.prototype = Object.create(x.prototype, { constructor: { value: S, enumerable: !1, writable: !0, configurable: !0 } });
    }
    function o(S, x) {
      Object.defineProperty(this, "kind", { value: S, enumerable: !0 }), x && x.length && Object.defineProperty(this, "path", { value: x, enumerable: !0 });
    }
    function i(S, x, k) {
      i.super_.call(this, "E", S), Object.defineProperty(this, "lhs", { value: x, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: k, enumerable: !0 });
    }
    function l(S, x) {
      l.super_.call(this, "N", S), Object.defineProperty(this, "rhs", { value: x, enumerable: !0 });
    }
    function u(S, x) {
      u.super_.call(this, "D", S), Object.defineProperty(this, "lhs", { value: x, enumerable: !0 });
    }
    function s(S, x, k) {
      s.super_.call(this, "A", S), Object.defineProperty(this, "index", { value: x, enumerable: !0 }), Object.defineProperty(this, "item", { value: k, enumerable: !0 });
    }
    function a(S, x, k) {
      var T = S.slice(x + 1 || S.length);
      return S.length = x < 0 ? S.length + x : x, S.push.apply(S, T), S;
    }
    function c(S) {
      var x = typeof S > "u" ? "undefined" : pt(S);
      return x !== "object" ? x : S === Math ? "math" : S === null ? "null" : Array.isArray(S) ? "array" : Object.prototype.toString.call(S) === "[object Date]" ? "date" : typeof S.toString == "function" && /^\/.*\//.test(S.toString()) ? "regexp" : "object";
    }
    function m(S, x, k, T, M, F, B) {
      M = M || [], B = B || [];
      var U = M.slice(0);
      if (typeof F < "u") {
        if (T) {
          if (typeof T == "function" && T(U, F)) return;
          if ((typeof T > "u" ? "undefined" : pt(T)) === "object") {
            if (T.prefilter && T.prefilter(U, F)) return;
            if (T.normalize) {
              var le = T.normalize(U, F, S, x);
              le && (S = le[0], x = le[1]);
            }
          }
        }
        U.push(F);
      }
      c(S) === "regexp" && c(x) === "regexp" && (S = S.toString(), x = x.toString());
      var Pe = typeof S > "u" ? "undefined" : pt(S), fe = typeof x > "u" ? "undefined" : pt(x), J = Pe !== "undefined" || B && B[B.length - 1].lhs && B[B.length - 1].lhs.hasOwnProperty(F), nt = fe !== "undefined" || B && B[B.length - 1].rhs && B[B.length - 1].rhs.hasOwnProperty(F);
      if (!J && nt) k(new l(U, x));
      else if (!nt && J) k(new u(U, S));
      else if (c(S) !== c(x)) k(new i(U, S, x));
      else if (c(S) === "date" && S - x !== 0) k(new i(U, S, x));
      else if (Pe === "object" && S !== null && x !== null) if (B.filter(function(oe) {
        return oe.lhs === S;
      }).length) S !== x && k(new i(U, S, x));
      else {
        if (B.push({ lhs: S, rhs: x }), Array.isArray(S)) {
          var K;
          for (S.length, K = 0; K < S.length; K++) K >= x.length ? k(new s(U, K, new u(void 0, S[K]))) : m(S[K], x[K], k, T, U, K, B);
          for (; K < x.length; ) k(new s(U, K, new l(void 0, x[K++])));
        } else {
          var pn = Object.keys(S), Ct = Object.keys(x);
          pn.forEach(function(oe, Un) {
            var Tr = Ct.indexOf(oe);
            Tr >= 0 ? (m(S[oe], x[oe], k, T, U, oe, B), Ct = a(Ct, Tr)) : m(S[oe], void 0, k, T, U, oe, B);
          }), Ct.forEach(function(oe) {
            m(void 0, x[oe], k, T, U, oe, B);
          });
        }
        B.length = B.length - 1;
      }
      else S !== x && (Pe === "number" && isNaN(S) && isNaN(x) || k(new i(U, S, x)));
    }
    function f(S, x, k, T) {
      return T = T || [], m(S, x, function(M) {
        M && T.push(M);
      }, k), T.length ? T : void 0;
    }
    function v(S, x, k) {
      if (k.path && k.path.length) {
        var T, M = S[x], F = k.path.length - 1;
        for (T = 0; T < F; T++) M = M[k.path[T]];
        switch (k.kind) {
          case "A":
            v(M[k.path[T]], k.index, k.item);
            break;
          case "D":
            delete M[k.path[T]];
            break;
          case "E":
          case "N":
            M[k.path[T]] = k.rhs;
        }
      } else switch (k.kind) {
        case "A":
          v(S[x], k.index, k.item);
          break;
        case "D":
          S = a(S, x);
          break;
        case "E":
        case "N":
          S[x] = k.rhs;
      }
      return S;
    }
    function w(S, x, k) {
      if (S && x && k && k.kind) {
        for (var T = S, M = -1, F = k.path ? k.path.length - 1 : 0; ++M < F; ) typeof T[k.path[M]] > "u" && (T[k.path[M]] = typeof k.path[M] == "number" ? [] : {}), T = T[k.path[M]];
        switch (k.kind) {
          case "A":
            v(k.path ? T[k.path[M]] : T, k.index, k.item);
            break;
          case "D":
            delete T[k.path[M]];
            break;
          case "E":
          case "N":
            T[k.path[M]] = k.rhs;
        }
      }
    }
    function g(S, x, k) {
      if (k.path && k.path.length) {
        var T, M = S[x], F = k.path.length - 1;
        for (T = 0; T < F; T++) M = M[k.path[T]];
        switch (k.kind) {
          case "A":
            g(M[k.path[T]], k.index, k.item);
            break;
          case "D":
            M[k.path[T]] = k.lhs;
            break;
          case "E":
            M[k.path[T]] = k.lhs;
            break;
          case "N":
            delete M[k.path[T]];
        }
      } else switch (k.kind) {
        case "A":
          g(S[x], k.index, k.item);
          break;
        case "D":
          S[x] = k.lhs;
          break;
        case "E":
          S[x] = k.lhs;
          break;
        case "N":
          S = a(S, x);
      }
      return S;
    }
    function P(S, x, k) {
      if (S && x && k && k.kind) {
        var T, M, F = S;
        for (M = k.path.length - 1, T = 0; T < M; T++) typeof F[k.path[T]] > "u" && (F[k.path[T]] = {}), F = F[k.path[T]];
        switch (k.kind) {
          case "A":
            g(F[k.path[T]], k.index, k.item);
            break;
          case "D":
            F[k.path[T]] = k.lhs;
            break;
          case "E":
            F[k.path[T]] = k.lhs;
            break;
          case "N":
            delete F[k.path[T]];
        }
      }
    }
    function h(S, x, k) {
      if (S && x) {
        var T = function(M) {
          k && !k(S, x, M) || w(S, x, M);
        };
        m(S, x, T);
      }
    }
    function d(S) {
      return "color: " + D[S].color + "; font-weight: bold";
    }
    function p(S) {
      var x = S.kind, k = S.path, T = S.lhs, M = S.rhs, F = S.index, B = S.item;
      switch (x) {
        case "E":
          return [k.join("."), T, "→", M];
        case "N":
          return [k.join("."), M];
        case "D":
          return [k.join(".")];
        case "A":
          return [k.join(".") + "[" + F + "]", B];
        default:
          return [];
      }
    }
    function y(S, x, k, T) {
      var M = f(S, x);
      try {
        T ? k.groupCollapsed("diff") : k.group("diff");
      } catch {
        k.log("diff");
      }
      M ? M.forEach(function(F) {
        var B = F.kind, U = p(F);
        k.log.apply(k, ["%c " + D[B].text, d(B)].concat(Bt(U)));
      }) : k.log("—— no diff ——");
      try {
        k.groupEnd();
      } catch {
        k.log("—— diff end —— ");
      }
    }
    function _(S, x, k, T) {
      switch (typeof S > "u" ? "undefined" : pt(S)) {
        case "object":
          return typeof S[T] == "function" ? S[T].apply(S, Bt(k)) : S[T];
        case "function":
          return S(x);
        default:
          return S;
      }
    }
    function N(S) {
      var x = S.timestamp, k = S.duration;
      return function(T, M, F) {
        var B = ["action"];
        return B.push("%c" + String(T.type)), x && B.push("%c@ " + M), k && B.push("%c(in " + F.toFixed(2) + " ms)"), B.join(" ");
      };
    }
    function E(S, x) {
      var k = x.logger, T = x.actionTransformer, M = x.titleFormatter, F = M === void 0 ? N(x) : M, B = x.collapsed, U = x.colors, le = x.level, Pe = x.diff, fe = typeof x.titleFormatter > "u";
      S.forEach(function(J, nt) {
        var K = J.started, pn = J.startedTime, Ct = J.action, oe = J.prevState, Un = J.error, Tr = J.took, hn = J.nextState, Ul = S[nt + 1];
        Ul && (hn = Ul.prevState, Tr = Ul.started - K);
        var ht = T(Ct), cc = typeof B == "function" ? B(function() {
          return hn;
        }, Ct, J) : B, cv = xt(pn), fv = U.title ? "color: " + U.title(ht) + ";" : "", Dr = ["color: gray; font-weight: lighter;"];
        Dr.push(fv), x.timestamp && Dr.push("color: gray; font-weight: lighter;"), x.duration && Dr.push("color: gray; font-weight: lighter;");
        var Ar = F(ht, cv, Tr);
        try {
          cc ? U.title && fe ? k.groupCollapsed.apply(k, ["%c " + Ar].concat(Dr)) : k.groupCollapsed(Ar) : U.title && fe ? k.group.apply(k, ["%c " + Ar].concat(Dr)) : k.group(Ar);
        } catch {
          k.log(Ar);
        }
        var Wl = _(le, ht, [oe], "prevState"), bl = _(le, ht, [ht], "action"), Vl = _(le, ht, [Un, oe], "error"), Hl = _(le, ht, [hn], "nextState");
        if (Wl) if (U.prevState) {
          var dv = "color: " + U.prevState(oe) + "; font-weight: bold";
          k[Wl]("%c prev state", dv, oe);
        } else k[Wl]("prev state", oe);
        if (bl) if (U.action) {
          var pv = "color: " + U.action(ht) + "; font-weight: bold";
          k[bl]("%c action    ", pv, ht);
        } else k[bl]("action    ", ht);
        if (Un && Vl) if (U.error) {
          var hv = "color: " + U.error(Un, oe) + "; font-weight: bold;";
          k[Vl]("%c error     ", hv, Un);
        } else k[Vl]("error     ", Un);
        if (Hl) if (U.nextState) {
          var mv = "color: " + U.nextState(hn) + "; font-weight: bold";
          k[Hl]("%c next state", mv, hn);
        } else k[Hl]("next state", hn);
        Pe && y(oe, hn, k, cc);
        try {
          k.groupEnd();
        } catch {
          k.log("—— log end ——");
        }
      });
    }
    function R() {
      var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, x = Object.assign({}, I, S), k = x.logger, T = x.stateTransformer, M = x.errorTransformer, F = x.predicate, B = x.logErrors, U = x.diffPredicate;
      if (typeof k > "u") return function() {
        return function(Pe) {
          return function(fe) {
            return Pe(fe);
          };
        };
      };
      if (S.getState && S.dispatch) return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
        return function(Pe) {
          return function(fe) {
            return Pe(fe);
          };
        };
      };
      var le = [];
      return function(Pe) {
        var fe = Pe.getState;
        return function(J) {
          return function(nt) {
            if (typeof F == "function" && !F(fe, nt)) return J(nt);
            var K = {};
            le.push(K), K.started = dn.now(), K.startedTime = /* @__PURE__ */ new Date(), K.prevState = T(fe()), K.action = nt;
            var pn = void 0;
            if (B) try {
              pn = J(nt);
            } catch (oe) {
              K.error = M(oe);
            }
            else pn = J(nt);
            K.took = dn.now() - K.started, K.nextState = T(fe());
            var Ct = x.diff && typeof U == "function" ? U(fe, nt) : x.diff;
            if (E(le, Object.assign({}, x, { diff: Ct })), le.length = 0, K.error) throw K.error;
            return pn;
          };
        };
      };
    }
    var z, j, me = function(S, x) {
      return new Array(x + 1).join(S);
    }, Ke = function(S, x) {
      return me("0", x - S.toString().length) + S;
    }, xt = function(S) {
      return Ke(S.getHours(), 2) + ":" + Ke(S.getMinutes(), 2) + ":" + Ke(S.getSeconds(), 2) + "." + Ke(S.getMilliseconds(), 3);
    }, dn = typeof performance < "u" && performance !== null && typeof performance.now == "function" ? performance : Date, pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
      return typeof S;
    } : function(S) {
      return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
    }, Bt = function(S) {
      if (Array.isArray(S)) {
        for (var x = 0, k = Array(S.length); x < S.length; x++) k[x] = S[x];
        return k;
      }
      return Array.from(S);
    }, Ge = [];
    z = (typeof Mr > "u" ? "undefined" : pt(Mr)) === "object" && Mr ? Mr : typeof window < "u" ? window : {}, j = z.DeepDiff, j && Ge.push(function() {
      typeof j < "u" && z.DeepDiff === f && (z.DeepDiff = j, j = void 0);
    }), r(i, o), r(l, o), r(u, o), r(s, o), Object.defineProperties(f, { diff: { value: f, enumerable: !0 }, observableDiff: { value: m, enumerable: !0 }, applyDiff: { value: h, enumerable: !0 }, applyChange: { value: w, enumerable: !0 }, revertChange: { value: P, enumerable: !0 }, isConflict: { value: function() {
      return typeof j < "u";
    }, enumerable: !0 }, noConflict: { value: function() {
      return Ge && (Ge.forEach(function(S) {
        S();
      }), Ge = null), f;
    }, enumerable: !0 } });
    var D = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } }, I = { level: "log", logger: console, logErrors: !0, collapsed: void 0, predicate: void 0, duration: !1, timestamp: !0, stateTransformer: function(S) {
      return S;
    }, actionTransformer: function(S) {
      return S;
    }, errorTransformer: function(S) {
      return S;
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
    } }, diff: !1, diffPredicate: void 0, transformer: void 0 }, $ = function() {
      var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, x = S.dispatch, k = S.getState;
      return typeof x == "function" || typeof k == "function" ? R()({ dispatch: x, getState: k }) : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
    };
    n.defaults = I, n.createLogger = R, n.logger = $, n.default = $, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(zs, zs.exports);
var h1 = zs.exports;
const UE = /* @__PURE__ */ Xs(h1), m1 = {
  theme: void 0,
  kind: void 0
}, qh = Za({
  name: "theme",
  initialState: m1,
  reducers: {
    changeTheme: (e, t) => {
      e.kind = t.payload.kind, e.theme = { ...e.theme, ...t.payload.theme ?? {} }, e.kind === "light" ? (e.theme.computedOne = "rgba(0, 0, 0, 0.05)", e.theme.computedTwo = "rgba(0, 0, 0, 0.1)") : e.kind === "dark" ? (e.theme.computedOne = "rgba(255, 255, 255, 0.05)", e.theme.computedTwo = "rgba(255, 255, 255, 0.1)") : (e.theme.computedOne = "transparent", e.theme.computedTwo = "transparent");
    }
  }
}), v1 = Qa, { changeTheme: WE } = qh.actions, bE = qh.reducer, g1 = {
  current: ["starting"],
  history: []
}, em = Za({
  name: "router",
  initialState: g1,
  reducers: {
    goTo: (e, t) => {
      e.history.push(e.current), e.current = t.payload;
    },
    openLink: (e, t) => {
    },
    goBack: (e) => {
      e.history.length > 0 && (e.current = e.history.pop());
    }
  }
}), { goTo: y1, goBack: VE, openLink: w1 } = em.actions, S1 = Nh, tm = Qa, HE = em.reducer;
var Me = function() {
  return Me = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Me.apply(this, arguments);
};
function Ro(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var X = "-ms-", io = "-moz-", H = "-webkit-", nm = "comm", Ll = "rule", ec = "decl", E1 = "@import", rm = "@keyframes", k1 = "@layer", om = Math.abs, tc = String.fromCharCode, $s = Object.assign;
function x1(e, t) {
  return pe(e, 0) ^ 45 ? (((t << 2 ^ pe(e, 0)) << 2 ^ pe(e, 1)) << 2 ^ pe(e, 2)) << 2 ^ pe(e, 3) : 0;
}
function im(e) {
  return e.trim();
}
function Pt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function W(e, t, n) {
  return e.replace(t, n);
}
function Ci(e, t, n) {
  return e.indexOf(t, n);
}
function pe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Er(e, t, n) {
  return e.slice(t, n);
}
function gt(e) {
  return e.length;
}
function lm(e) {
  return e.length;
}
function Gr(e, t) {
  return t.push(e), e;
}
function C1(e, t) {
  return e.map(t).join("");
}
function Ff(e, t) {
  return e.filter(function(n) {
    return !Pt(n, t);
  });
}
var Ml = 1, kr = 1, um = 0, tt = 0, ue = 0, Or = "";
function Il(e, t, n, r, o, i, l, u) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ml, column: kr, length: l, return: "", siblings: u };
}
function Wt(e, t) {
  return $s(Il("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function bn(e) {
  for (; e.root; )
    e = Wt(e.root, { children: [e] });
  Gr(e, e.siblings);
}
function _1() {
  return ue;
}
function P1() {
  return ue = tt > 0 ? pe(Or, --tt) : 0, kr--, ue === 10 && (kr = 1, Ml--), ue;
}
function at() {
  return ue = tt < um ? pe(Or, tt++) : 0, kr++, ue === 10 && (kr = 1, Ml++), ue;
}
function Pn() {
  return pe(Or, tt);
}
function _i() {
  return tt;
}
function jl(e, t) {
  return Er(Or, e, t);
}
function Bs(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function N1(e) {
  return Ml = kr = 1, um = gt(Or = e), tt = 0, [];
}
function R1(e) {
  return Or = "", e;
}
function xu(e) {
  return im(jl(tt - 1, Us(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function O1(e) {
  for (; (ue = Pn()) && ue < 33; )
    at();
  return Bs(e) > 2 || Bs(ue) > 3 ? "" : " ";
}
function T1(e, t) {
  for (; --t && at() && !(ue < 48 || ue > 102 || ue > 57 && ue < 65 || ue > 70 && ue < 97); )
    ;
  return jl(e, _i() + (t < 6 && Pn() == 32 && at() == 32));
}
function Us(e) {
  for (; at(); )
    switch (ue) {
      case e:
        return tt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Us(ue);
        break;
      case 40:
        e === 41 && Us(e);
        break;
      case 92:
        at();
        break;
    }
  return tt;
}
function D1(e, t) {
  for (; at() && e + ue !== 57; )
    if (e + ue === 84 && Pn() === 47)
      break;
  return "/*" + jl(t, tt - 1) + "*" + tc(e === 47 ? e : at());
}
function A1(e) {
  for (; !Bs(Pn()); )
    at();
  return jl(e, tt);
}
function L1(e) {
  return R1(Pi("", null, null, null, [""], e = N1(e), 0, [0], e));
}
function Pi(e, t, n, r, o, i, l, u, s) {
  for (var a = 0, c = 0, m = l, f = 0, v = 0, w = 0, g = 1, P = 1, h = 1, d = 0, p = "", y = o, _ = i, N = r, E = p; P; )
    switch (w = d, d = at()) {
      case 40:
        if (w != 108 && pe(E, m - 1) == 58) {
          Ci(E += W(xu(d), "&", "&\f"), "&\f", om(a ? u[a - 1] : 0)) != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += xu(d);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += O1(w);
        break;
      case 92:
        E += T1(_i() - 1, 7);
        continue;
      case 47:
        switch (Pn()) {
          case 42:
          case 47:
            Gr(M1(D1(at(), _i()), t, n, s), s);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * g:
        u[a++] = gt(E) * h;
      case 125 * g:
      case 59:
      case 0:
        switch (d) {
          case 0:
          case 125:
            P = 0;
          case 59 + c:
            h == -1 && (E = W(E, /\f/g, "")), v > 0 && gt(E) - m && Gr(v > 32 ? $f(E + ";", r, n, m - 1, s) : $f(W(E, " ", "") + ";", r, n, m - 2, s), s);
            break;
          case 59:
            E += ";";
          default:
            if (Gr(N = zf(E, t, n, a, c, o, u, p, y = [], _ = [], m, i), i), d === 123)
              if (c === 0)
                Pi(E, t, N, N, y, i, m, u, _);
              else
                switch (f === 99 && pe(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Pi(e, N, N, r && Gr(zf(e, N, N, 0, 0, o, u, p, o, y = [], m, _), _), o, _, m, u, r ? y : _);
                    break;
                  default:
                    Pi(E, N, N, N, [""], _, 0, u, _);
                }
        }
        a = c = v = 0, g = h = 1, p = E = "", m = l;
        break;
      case 58:
        m = 1 + gt(E), v = w;
      default:
        if (g < 1) {
          if (d == 123)
            --g;
          else if (d == 125 && g++ == 0 && P1() == 125)
            continue;
        }
        switch (E += tc(d), d * g) {
          case 38:
            h = c > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            u[a++] = (gt(E) - 1) * h, h = 1;
            break;
          case 64:
            Pn() === 45 && (E += xu(at())), f = Pn(), c = m = gt(p = E += A1(_i())), d++;
            break;
          case 45:
            w === 45 && gt(E) == 2 && (g = 0);
        }
    }
  return i;
}
function zf(e, t, n, r, o, i, l, u, s, a, c, m) {
  for (var f = o - 1, v = o === 0 ? i : [""], w = lm(v), g = 0, P = 0, h = 0; g < r; ++g)
    for (var d = 0, p = Er(e, f + 1, f = om(P = l[g])), y = e; d < w; ++d)
      (y = im(P > 0 ? v[d] + " " + p : W(p, /&\f/g, v[d]))) && (s[h++] = y);
  return Il(e, t, n, o === 0 ? Ll : u, s, a, c, m);
}
function M1(e, t, n, r) {
  return Il(e, t, n, nm, tc(_1()), Er(e, 2, -2), 0, r);
}
function $f(e, t, n, r, o) {
  return Il(e, t, n, ec, Er(e, 0, r), Er(e, r + 1, -1), r, o);
}
function sm(e, t, n) {
  switch (x1(e, t)) {
    case 5103:
      return H + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return H + e + e;
    case 4789:
      return io + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return H + e + io + e + X + e + e;
    case 5936:
      switch (pe(e, t + 11)) {
        case 114:
          return H + e + X + W(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return H + e + X + W(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return H + e + X + W(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return H + e + X + e + e;
    case 6165:
      return H + e + X + "flex-" + e + e;
    case 5187:
      return H + e + W(e, /(\w+).+(:[^]+)/, H + "box-$1$2" + X + "flex-$1$2") + e;
    case 5443:
      return H + e + X + "flex-item-" + W(e, /flex-|-self/g, "") + (Pt(e, /flex-|baseline/) ? "" : X + "grid-row-" + W(e, /flex-|-self/g, "")) + e;
    case 4675:
      return H + e + X + "flex-line-pack" + W(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return H + e + X + W(e, "shrink", "negative") + e;
    case 5292:
      return H + e + X + W(e, "basis", "preferred-size") + e;
    case 6060:
      return H + "box-" + W(e, "-grow", "") + H + e + X + W(e, "grow", "positive") + e;
    case 4554:
      return H + W(e, /([^-])(transform)/g, "$1" + H + "$2") + e;
    case 6187:
      return W(W(W(e, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return W(e, /(image-set\([^]*)/, H + "$1$`$1");
    case 4968:
      return W(W(e, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + X + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + H + e + e;
    case 4200:
      if (!Pt(e, /flex-|baseline/)) return X + "grid-column-align" + Er(e, t) + e;
      break;
    case 2592:
    case 3360:
      return X + W(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Pt(r.props, /grid-\w+-end/);
      }) ? ~Ci(e + (n = n[t].value), "span", 0) ? e : X + W(e, "-start", "") + e + X + "grid-row-span:" + (~Ci(n, "span", 0) ? Pt(n, /\d+/) : +Pt(n, /\d+/) - +Pt(e, /\d+/)) + ";" : X + W(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Pt(r.props, /grid-\w+-start/);
      }) ? e : X + W(W(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(e, /(.+)-inline(.+)/, H + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (gt(e) - 1 - t > 6)
        switch (pe(e, t + 1)) {
          case 109:
            if (pe(e, t + 4) !== 45)
              break;
          case 102:
            return W(e, /(.+:)(.+)-([^]+)/, "$1" + H + "$2-$3$1" + io + (pe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ci(e, "stretch", 0) ? sm(W(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return W(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, l, u, s, a) {
        return X + o + ":" + i + a + (l ? X + o + "-span:" + (u ? s : +s - +i) + a : "") + e;
      });
    case 4949:
      if (pe(e, t + 6) === 121)
        return W(e, ":", ":" + H) + e;
      break;
    case 6444:
      switch (pe(e, pe(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return W(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + H + (pe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + H + "$2$3$1" + X + "$2box$3") + e;
        case 100:
          return W(e, ":", ":" + X) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return W(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function ul(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function I1(e, t, n, r) {
  switch (e.type) {
    case k1:
      if (e.children.length) break;
    case E1:
    case ec:
      return e.return = e.return || e.value;
    case nm:
      return "";
    case rm:
      return e.return = e.value + "{" + ul(e.children, r) + "}";
    case Ll:
      if (!gt(e.value = e.props.join(","))) return "";
  }
  return gt(n = ul(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function j1(e) {
  var t = lm(e);
  return function(n, r, o, i) {
    for (var l = "", u = 0; u < t; u++)
      l += e[u](n, r, o, i) || "";
    return l;
  };
}
function F1(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function z1(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ec:
        e.return = sm(e.value, e.length, n);
        return;
      case rm:
        return ul([Wt(e, { value: W(e.value, "@", "@" + H) })], r);
      case Ll:
        if (e.length)
          return C1(n = e.props, function(o) {
            switch (Pt(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                bn(Wt(e, { props: [W(o, /:(read-\w+)/, ":" + io + "$1")] })), bn(Wt(e, { props: [o] })), $s(e, { props: Ff(n, r) });
                break;
              case "::placeholder":
                bn(Wt(e, { props: [W(o, /:(plac\w+)/, ":" + H + "input-$1")] })), bn(Wt(e, { props: [W(o, /:(plac\w+)/, ":" + io + "$1")] })), bn(Wt(e, { props: [W(o, /:(plac\w+)/, X + "input-$1")] })), bn(Wt(e, { props: [o] })), $s(e, { props: Ff(n, r) });
                break;
            }
            return "";
          });
    }
}
var $1 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, xr = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", am = "active", cm = "data-styled-version", Fl = "6.1.16", nc = `/*!sc*/
`, sl = typeof window < "u" && "HTMLElement" in window, B1 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), zl = Object.freeze([]), Cr = Object.freeze({});
function U1(e, t, n) {
  return n === void 0 && (n = Cr), e.theme !== n.theme && e.theme || t || n.theme;
}
var fm = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), W1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, b1 = /(^-|-$)/g;
function Bf(e) {
  return e.replace(W1, "-").replace(b1, "");
}
var V1 = /(a)(d)/gi, ii = 52, Uf = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ws(e) {
  var t, n = "";
  for (t = Math.abs(e); t > ii; t = t / ii | 0) n = Uf(t % ii) + n;
  return (Uf(t % ii) + n).replace(V1, "$1-$2");
}
var Cu, dm = 5381, ir = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, pm = function(e) {
  return ir(dm, e);
};
function hm(e) {
  return Ws(pm(e) >>> 0);
}
function H1(e) {
  return e.displayName || e.name || "Component";
}
function _u(e) {
  return typeof e == "string" && !0;
}
var mm = typeof Symbol == "function" && Symbol.for, vm = mm ? Symbol.for("react.memo") : 60115, Q1 = mm ? Symbol.for("react.forward_ref") : 60112, K1 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, G1 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, gm = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Y1 = ((Cu = {})[Q1] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Cu[vm] = gm, Cu);
function Wf(e) {
  return ("type" in (t = e) && t.type.$$typeof) === vm ? gm : "$$typeof" in e ? Y1[e.$$typeof] : K1;
  var t;
}
var X1 = Object.defineProperty, Z1 = Object.getOwnPropertyNames, bf = Object.getOwnPropertySymbols, J1 = Object.getOwnPropertyDescriptor, q1 = Object.getPrototypeOf, Vf = Object.prototype;
function ym(e, t, n) {
  if (typeof t != "string") {
    if (Vf) {
      var r = q1(t);
      r && r !== Vf && ym(e, r, n);
    }
    var o = Z1(t);
    bf && (o = o.concat(bf(t)));
    for (var i = Wf(e), l = Wf(t), u = 0; u < o.length; ++u) {
      var s = o[u];
      if (!(s in G1 || n && n[s] || l && s in l || i && s in i)) {
        var a = J1(t, s);
        try {
          X1(e, s, a);
        } catch {
        }
      }
    }
  }
  return e;
}
function _r(e) {
  return typeof e == "function";
}
function rc(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function En(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function bs(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Oo(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Vs(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Oo(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Vs(e[r], t[r]);
  else if (Oo(t)) for (var r in t) e[r] = Vs(e[r], t[r]);
  return e;
}
function oc(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Bo(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""));
}
var ew = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Bo(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var l = o; l < i; l++) this.groupSizes[l] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), s = (l = 0, n.length); l < s; l++) this.tag.insertRule(u, n[l]) && (this.groupSizes[t]++, u++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, l = o; l < i; l++) n += "".concat(this.tag.getRule(l)).concat(nc);
    return n;
  }, e;
}(), Ni = /* @__PURE__ */ new Map(), al = /* @__PURE__ */ new Map(), Ri = 1, li = function(e) {
  if (Ni.has(e)) return Ni.get(e);
  for (; al.has(Ri); ) Ri++;
  var t = Ri++;
  return Ni.set(e, t), al.set(t, e), t;
}, tw = function(e, t) {
  Ri = t + 1, Ni.set(e, t), al.set(t, e);
}, nw = "style[".concat(xr, "][").concat(cm, '="').concat(Fl, '"]'), rw = new RegExp("^".concat(xr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ow = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, l = o.length; i < l; i++) (r = o[i]) && e.registerName(t, r);
}, iw = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(nc), o = [], i = 0, l = r.length; i < l; i++) {
    var u = r[i].trim();
    if (u) {
      var s = u.match(rw);
      if (s) {
        var a = 0 | parseInt(s[1], 10), c = s[2];
        a !== 0 && (tw(c, a), ow(e, c, s[3]), e.getTag().insertRules(a, o)), o.length = 0;
      } else o.push(u);
    }
  }
}, Hf = function(e) {
  for (var t = document.querySelectorAll(nw), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(xr) !== am && (iw(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function lw() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var wm = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(u) {
    var s = Array.from(u.querySelectorAll("style[".concat(xr, "]")));
    return s[s.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(xr, am), r.setAttribute(cm, Fl);
  var l = lw();
  return l && r.setAttribute("nonce", l), n.insertBefore(r, i), r;
}, uw = function() {
  function e(t) {
    this.element = wm(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var l = r[o];
        if (l.ownerNode === n) return l;
      }
      throw Bo(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), sw = function() {
  function e(t) {
    this.element = wm(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), aw = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Qf = sl, cw = { isServer: !sl, useCSSOMInjection: !B1 }, Sm = function() {
  function e(t, n, r) {
    t === void 0 && (t = Cr), n === void 0 && (n = {});
    var o = this;
    this.options = Me(Me({}, cw), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && sl && Qf && (Qf = !1, Hf(this)), oc(this, function() {
      return function(i) {
        for (var l = i.getTag(), u = l.length, s = "", a = function(m) {
          var f = function(h) {
            return al.get(h);
          }(m);
          if (f === void 0) return "continue";
          var v = i.names.get(f), w = l.getGroup(m);
          if (v === void 0 || !v.size || w.length === 0) return "continue";
          var g = "".concat(xr, ".g").concat(m, '[id="').concat(f, '"]'), P = "";
          v !== void 0 && v.forEach(function(h) {
            h.length > 0 && (P += "".concat(h, ","));
          }), s += "".concat(w).concat(g, '{content:"').concat(P, '"}').concat(nc);
        }, c = 0; c < u; c++) a(c);
        return s;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return li(t);
  }, e.prototype.rehydrate = function() {
    !this.server && sl && Hf(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Me(Me({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new aw(o) : r ? new uw(o) : new sw(o);
    }(this.options), new ew(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (li(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(li(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(li(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), fw = /&/g, dw = /^\s*\/\/.*$/gm;
function Em(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Em(n.children, t)), n;
  });
}
function pw(e) {
  var t, n, r, o = Cr, i = o.options, l = i === void 0 ? Cr : i, u = o.plugins, s = u === void 0 ? zl : u, a = function(f, v, w) {
    return w.startsWith(n) && w.endsWith(n) && w.replaceAll(n, "").length > 0 ? ".".concat(t) : f;
  }, c = s.slice();
  c.push(function(f) {
    f.type === Ll && f.value.includes("&") && (f.props[0] = f.props[0].replace(fw, n).replace(r, a));
  }), l.prefix && c.push(z1), c.push(I1);
  var m = function(f, v, w, g) {
    v === void 0 && (v = ""), w === void 0 && (w = ""), g === void 0 && (g = "&"), t = g, n = v, r = new RegExp("\\".concat(n, "\\b"), "g");
    var P = f.replace(dw, ""), h = L1(w || v ? "".concat(w, " ").concat(v, " { ").concat(P, " }") : P);
    l.namespace && (h = Em(h, l.namespace));
    var d = [];
    return ul(h, j1(c.concat(F1(function(p) {
      return d.push(p);
    })))), d;
  };
  return m.hash = s.length ? s.reduce(function(f, v) {
    return v.name || Bo(15), ir(f, v.name);
  }, dm).toString() : "", m;
}
var hw = new Sm(), Hs = pw(), km = At.createContext({ shouldForwardProp: void 0, styleSheet: hw, stylis: Hs });
km.Consumer;
At.createContext(void 0);
function Kf() {
  return C.useContext(km);
}
var xm = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Hs);
      var l = r.name + i.hash;
      o.hasNameForId(r.id, l) || o.insertRules(r.id, l, i(r.rules, l, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, oc(this, function() {
      throw Bo(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Hs), this.name + t.hash;
  }, e;
}(), mw = function(e) {
  return e >= "A" && e <= "Z";
};
function Gf(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    mw(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Cm = function(e) {
  return e == null || e === !1 || e === "";
}, _m = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Cm(i) && (Array.isArray(i) && i.isCss || _r(i) ? r.push("".concat(Gf(o), ":"), i, ";") : Oo(i) ? r.push.apply(r, Ro(Ro(["".concat(o, " {")], _m(i), !1), ["}"], !1)) : r.push("".concat(Gf(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in $1 || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function Nn(e, t, n, r) {
  if (Cm(e)) return [];
  if (rc(e)) return [".".concat(e.styledComponentId)];
  if (_r(e)) {
    if (!_r(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return Nn(o, t, n, r);
  }
  var i;
  return e instanceof xm ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Oo(e) ? _m(e) : Array.isArray(e) ? Array.prototype.concat.apply(zl, e.map(function(l) {
    return Nn(l, t, n, r);
  })) : [e.toString()];
}
function vw(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (_r(n) && !rc(n)) return !1;
  }
  return !0;
}
var gw = pm(Fl), yw = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && vw(t), this.componentId = n, this.baseHash = ir(gw, n), this.baseStyle = r, Sm.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = En(o, this.staticRulesId);
    else {
      var i = bs(Nn(this.rules, t, n, r)), l = Ws(ir(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, l)) {
        var u = r(i, ".".concat(l), void 0, this.componentId);
        n.insertRules(this.componentId, l, u);
      }
      o = En(o, l), this.staticRulesId = l;
    }
    else {
      for (var s = ir(this.baseHash, r.hash), a = "", c = 0; c < this.rules.length; c++) {
        var m = this.rules[c];
        if (typeof m == "string") a += m;
        else if (m) {
          var f = bs(Nn(m, t, n, r));
          s = ir(s, f + c), a += f;
        }
      }
      if (a) {
        var v = Ws(s >>> 0);
        n.hasNameForId(this.componentId, v) || n.insertRules(this.componentId, v, r(a, ".".concat(v), void 0, this.componentId)), o = En(o, v);
      }
    }
    return o;
  }, e;
}(), Pm = At.createContext(void 0);
Pm.Consumer;
var Pu = {};
function ww(e, t, n) {
  var r = rc(e), o = e, i = !_u(e), l = t.attrs, u = l === void 0 ? zl : l, s = t.componentId, a = s === void 0 ? function(y, _) {
    var N = typeof y != "string" ? "sc" : Bf(y);
    Pu[N] = (Pu[N] || 0) + 1;
    var E = "".concat(N, "-").concat(hm(Fl + N + Pu[N]));
    return _ ? "".concat(_, "-").concat(E) : E;
  }(t.displayName, t.parentComponentId) : s, c = t.displayName, m = c === void 0 ? function(y) {
    return _u(y) ? "styled.".concat(y) : "Styled(".concat(H1(y), ")");
  }(e) : c, f = t.displayName && t.componentId ? "".concat(Bf(t.displayName), "-").concat(t.componentId) : t.componentId || a, v = r && o.attrs ? o.attrs.concat(u).filter(Boolean) : u, w = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var P = t.shouldForwardProp;
      w = function(y, _) {
        return g(y, _) && P(y, _);
      };
    } else w = g;
  }
  var h = new yw(n, f, r ? o.componentStyle : void 0);
  function d(y, _) {
    return function(N, E, R) {
      var z = N.attrs, j = N.componentStyle, me = N.defaultProps, Ke = N.foldedComponentIds, xt = N.styledComponentId, dn = N.target, pt = At.useContext(Pm), Bt = Kf(), Ge = N.shouldForwardProp || Bt.shouldForwardProp, D = U1(E, pt, me) || Cr, I = function(M, F, B) {
        for (var U, le = Me(Me({}, F), { className: void 0, theme: B }), Pe = 0; Pe < M.length; Pe += 1) {
          var fe = _r(U = M[Pe]) ? U(le) : U;
          for (var J in fe) le[J] = J === "className" ? En(le[J], fe[J]) : J === "style" ? Me(Me({}, le[J]), fe[J]) : fe[J];
        }
        return F.className && (le.className = En(le.className, F.className)), le;
      }(z, E, D), $ = I.as || dn, S = {};
      for (var x in I) I[x] === void 0 || x[0] === "$" || x === "as" || x === "theme" && I.theme === D || (x === "forwardedAs" ? S.as = I.forwardedAs : Ge && !Ge(x, $) || (S[x] = I[x]));
      var k = function(M, F) {
        var B = Kf(), U = M.generateAndInjectStyles(F, B.styleSheet, B.stylis);
        return U;
      }(j, I), T = En(Ke, xt);
      return k && (T += " " + k), I.className && (T += " " + I.className), S[_u($) && !fm.has($) ? "class" : "className"] = T, R && (S.ref = R), C.createElement($, S);
    }(p, y, _);
  }
  d.displayName = m;
  var p = At.forwardRef(d);
  return p.attrs = v, p.componentStyle = h, p.displayName = m, p.shouldForwardProp = w, p.foldedComponentIds = r ? En(o.foldedComponentIds, o.styledComponentId) : "", p.styledComponentId = f, p.target = r ? o.target : e, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(y) {
    this._foldedDefaultProps = r ? function(_) {
      for (var N = [], E = 1; E < arguments.length; E++) N[E - 1] = arguments[E];
      for (var R = 0, z = N; R < z.length; R++) Vs(_, z[R], !0);
      return _;
    }({}, o.defaultProps, y) : y;
  } }), oc(p, function() {
    return ".".concat(p.styledComponentId);
  }), i && ym(p, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), p;
}
function Yf(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var Xf = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Nm(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (_r(e) || Oo(e)) return Xf(Nn(Yf(zl, Ro([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? Nn(r) : Xf(Nn(Yf(r, t)));
}
function Qs(e, t, n) {
  if (n === void 0 && (n = Cr), !t) throw Bo(1, t);
  var r = function(o) {
    for (var i = [], l = 1; l < arguments.length; l++) i[l - 1] = arguments[l];
    return e(t, n, Nm.apply(void 0, Ro([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Qs(e, t, Me(Me({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Qs(e, t, Me(Me({}, n), o));
  }, r;
}
var Rm = function(e) {
  return Qs(ww, e);
}, ft = Rm;
fm.forEach(function(e) {
  ft[e] = Rm(e);
});
function QE(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = bs(Nm.apply(void 0, Ro([e], t, !1))), o = hm(r);
  return new xm(o, r);
}
const Sw = C.createContext(null), Nu = {
  didCatch: !1,
  error: null
};
class Ew extends C.Component {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Nu;
  }
  static getDerivedStateFromError(t) {
    return {
      didCatch: !0,
      error: t
    };
  }
  resetErrorBoundary() {
    const {
      error: t
    } = this.state;
    if (t !== null) {
      for (var n, r, o = arguments.length, i = new Array(o), l = 0; l < o; l++)
        i[l] = arguments[l];
      (n = (r = this.props).onReset) === null || n === void 0 || n.call(r, {
        args: i,
        reason: "imperative-api"
      }), this.setState(Nu);
    }
  }
  componentDidCatch(t, n) {
    var r, o;
    (r = (o = this.props).onError) === null || r === void 0 || r.call(o, t, n);
  }
  componentDidUpdate(t, n) {
    const {
      didCatch: r
    } = this.state, {
      resetKeys: o
    } = this.props;
    if (r && n.error !== null && kw(t.resetKeys, o)) {
      var i, l;
      (i = (l = this.props).onReset) === null || i === void 0 || i.call(l, {
        next: o,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState(Nu);
    }
  }
  render() {
    const {
      children: t,
      fallbackRender: n,
      FallbackComponent: r,
      fallback: o
    } = this.props, {
      didCatch: i,
      error: l
    } = this.state;
    let u = t;
    if (i) {
      const s = {
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof n == "function")
        u = n(s);
      else if (r)
        u = C.createElement(r, s);
      else if (o === null || C.isValidElement(o))
        u = o;
      else
        throw l;
    }
    return C.createElement(Sw.Provider, {
      value: {
        didCatch: i,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, u);
  }
}
function kw() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((n, r) => !Object.is(n, t[r]));
}
const xw = [
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
  "notificationsBorder",
  "fontSize"
], we = {
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
  notificationsBorder: "--xliic-notificationsBorder",
  fontSize: "--xliic-fontSize"
};
function Cw() {
  const e = v1((t) => t.theme);
  return /* @__PURE__ */ A.jsxs("style", { children: [
    Pw(e.theme),
    _w()
  ] });
}
function _w() {
  return `
  body {
    padding: 0;
    margin: 0;
    background-color: var(--xliic-background);
    color: var(--xliic-foreground);
    }`;
}
function Pw(e) {
  const t = [];
  if (e !== void 0)
    for (const n of xw)
      e[n] && t.push(`${we[n]}: ${e[n]};`);
  return `:root {
    ${t.join(`
`)}
  }`;
}
const Om = At.createContext([
  {
    id: "starting",
    title: "Starting",
    element: At.createElement("div", {}, "Empty starting route")
  }
]);
function Tm(e, t) {
  if (t.length === 0)
    return;
  const [n, ...r] = t;
  for (const o of e)
    if (o.id === n)
      return r.length === 0 ? o : o.children ? Tm(o.children, r) : void 0;
}
function Nw() {
  return /* @__PURE__ */ A.jsx(Om.Consumer, { children: (e) => /* @__PURE__ */ A.jsx(Rw, { routes: e }) });
}
function Rw({ routes: e }) {
  const t = tm((r) => r.router.current), n = Tm(e, t);
  return !n || n.link ? /* @__PURE__ */ A.jsx("div", {}) : n.element;
}
function Ow() {
  return /* @__PURE__ */ A.jsx(Om.Consumer, { children: (e) => /* @__PURE__ */ A.jsx(Tw, { routes: e }) });
}
function Tw({ routes: e }) {
  var u;
  const t = S1(), r = tm((s) => s.router.current).slice(0, 2), o = r.slice(0, 1), i = r.length > 1 ? (u = e.find((s) => s.id === r[0])) == null ? void 0 : u.children : e, l = i == null ? void 0 : i.find((s) => s.id === r[r.length - 1]);
  return i ? (l == null ? void 0 : l.navigation) === !1 ? l.title !== "" ? /* @__PURE__ */ A.jsx(Aw, { children: /* @__PURE__ */ A.jsx(Mw, { children: l.title }) }) : null : /* @__PURE__ */ A.jsx(Dw, { children: i.map(({ id: s, title: a, link: c }) => /* @__PURE__ */ A.jsx(
    Lw,
    {
      $active: s === r[r.length - 1],
      onClick: () => {
        t(c ? w1(c) : y1([...o, s]));
      },
      children: typeof a == "string" ? /* @__PURE__ */ A.jsx("div", { children: a }) : a
    },
    s
  )) }) : null;
}
const Dw = ft.nav`
  height: 28px;
  display: flex;
  padding: 0px 16px;
  padding-top: 6px;
  justify-content: space-between;
  font-size: 14px;
  border-bottom: 1px solid var(${we.border});
`, Aw = ft.div`
  height: 35px;
  display: flex;
  padding: 0px 16px;
  border-bottom: 1px solid var(${we.border});
`, Lw = ft.div`
  padding: 0 1em;
  display: flex;
  align-items: center;
  ${({ $active: e }) => e ? `border-bottom: 3px solid var(${we.buttonBackground});` : "opacity: 0.7; border-bottom: 3px solid transparent; cursor: pointer;"};
  > div {
    border: ${({ $active: e }) => e && we.contrastActiveBorder ? `1px solid var(${we.contrastActiveBorder})` : "none"};
  }
`, Mw = ft.div`
  place-self: center;
  font-size: 16px;
  font-weight: 500;
  display: flex;
`;
function on(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Iw(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Dm(...e) {
  return (t) => e.forEach((n) => Iw(n, t));
}
function Bn(...e) {
  return C.useCallback(Dm(...e), e);
}
function jw(e, t) {
  const n = C.createContext(t);
  function r(i) {
    const { children: l, ...u } = i, s = C.useMemo(() => u, Object.values(u));
    return /* @__PURE__ */ A.jsx(n.Provider, { value: s, children: l });
  }
  function o(i) {
    const l = C.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [r, o];
}
function Fw(e, t = []) {
  let n = [];
  function r(i, l) {
    const u = C.createContext(l), s = n.length;
    n = [...n, l];
    function a(m) {
      const { scope: f, children: v, ...w } = m, g = (f == null ? void 0 : f[e][s]) || u, P = C.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ A.jsx(g.Provider, { value: P, children: v });
    }
    function c(m, f) {
      const v = (f == null ? void 0 : f[e][s]) || u, w = C.useContext(v);
      if (w) return w;
      if (l !== void 0) return l;
      throw new Error(`\`${m}\` must be used within \`${i}\``);
    }
    return a.displayName = i + "Provider", [a, c];
  }
  const o = () => {
    const i = n.map((l) => C.createContext(l));
    return function(u) {
      const s = (u == null ? void 0 : u[e]) || i;
      return C.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: s } }),
        [u, s]
      );
    };
  };
  return o.scopeName = e, [r, zw(o, ...t)];
}
function zw(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const l = r.reduce((u, { useScope: s, scopeName: a }) => {
        const m = s(i)[`__scope${a}`];
        return { ...u, ...m };
      }, {});
      return C.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var cl = globalThis != null && globalThis.document ? C.useLayoutEffect : () => {
}, $w = ju.useId || (() => {
}), Bw = 0;
function Ru(e) {
  const [t, n] = C.useState($w());
  return cl(() => {
    e || n((r) => r ?? String(Bw++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function jn(e) {
  const t = C.useRef(e);
  return C.useEffect(() => {
    t.current = e;
  }), C.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Uw({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = Ww({ defaultProp: t, onChange: n }), i = e !== void 0, l = i ? e : r, u = jn(n), s = C.useCallback(
    (a) => {
      if (i) {
        const m = typeof a == "function" ? a(e) : a;
        m !== e && u(m);
      } else
        o(a);
    },
    [i, e, o, u]
  );
  return [l, s];
}
function Ww({
  defaultProp: e,
  onChange: t
}) {
  const n = C.useState(e), [r] = n, o = C.useRef(r), i = jn(t);
  return C.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
var ic = C.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = C.Children.toArray(n), i = o.find(Vw);
  if (i) {
    const l = i.props.children, u = o.map((s) => s === i ? C.Children.count(l) > 1 ? C.Children.only(null) : C.isValidElement(l) ? l.props.children : null : s);
    return /* @__PURE__ */ A.jsx(Ks, { ...r, ref: t, children: C.isValidElement(l) ? C.cloneElement(l, void 0, u) : null });
  }
  return /* @__PURE__ */ A.jsx(Ks, { ...r, ref: t, children: n });
});
ic.displayName = "Slot";
var Ks = C.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (C.isValidElement(n)) {
    const o = Qw(n);
    return C.cloneElement(n, {
      ...Hw(r, n.props),
      // @ts-ignore
      ref: t ? Dm(t, o) : o
    });
  }
  return C.Children.count(n) > 1 ? C.Children.only(null) : null;
});
Ks.displayName = "SlotClone";
var bw = ({ children: e }) => /* @__PURE__ */ A.jsx(A.Fragment, { children: e });
function Vw(e) {
  return C.isValidElement(e) && e.type === bw;
}
function Hw(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...u) => {
      i(...u), o(...u);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Qw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Kw = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], $t = Kw.reduce((e, t) => {
  const n = C.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, u = i ? ic : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ A.jsx(u, { ...l, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Gw(e, t) {
  e && Rl.flushSync(() => e.dispatchEvent(t));
}
function Yw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = jn(e);
  C.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Xw = "DismissableLayer", Gs = "dismissableLayer.update", Zw = "dismissableLayer.pointerDownOutside", Jw = "dismissableLayer.focusOutside", Zf, Am = C.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Lm = C.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: l,
      onDismiss: u,
      ...s
    } = e, a = C.useContext(Am), [c, m] = C.useState(null), f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = C.useState({}), w = Bn(t, (E) => m(E)), g = Array.from(a.layers), [P] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1), h = g.indexOf(P), d = c ? g.indexOf(c) : -1, p = a.layersWithOutsidePointerEventsDisabled.size > 0, y = d >= h, _ = tS((E) => {
      const R = E.target, z = [...a.branches].some((j) => j.contains(R));
      !y || z || (o == null || o(E), l == null || l(E), E.defaultPrevented || u == null || u());
    }, f), N = nS((E) => {
      const R = E.target;
      [...a.branches].some((j) => j.contains(R)) || (i == null || i(E), l == null || l(E), E.defaultPrevented || u == null || u());
    }, f);
    return Yw((E) => {
      d === a.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && u && (E.preventDefault(), u()));
    }, f), C.useEffect(() => {
      if (c)
        return n && (a.layersWithOutsidePointerEventsDisabled.size === 0 && (Zf = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), a.layersWithOutsidePointerEventsDisabled.add(c)), a.layers.add(c), Jf(), () => {
          n && a.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Zf);
        };
    }, [c, f, n, a]), C.useEffect(() => () => {
      c && (a.layers.delete(c), a.layersWithOutsidePointerEventsDisabled.delete(c), Jf());
    }, [c, a]), C.useEffect(() => {
      const E = () => v({});
      return document.addEventListener(Gs, E), () => document.removeEventListener(Gs, E);
    }, []), /* @__PURE__ */ A.jsx(
      $t.div,
      {
        ...s,
        ref: w,
        style: {
          pointerEvents: p ? y ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: on(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: on(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: on(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
Lm.displayName = Xw;
var qw = "DismissableLayerBranch", eS = C.forwardRef((e, t) => {
  const n = C.useContext(Am), r = C.useRef(null), o = Bn(t, r);
  return C.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ A.jsx($t.div, { ...e, ref: o });
});
eS.displayName = qw;
function tS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = jn(e), r = C.useRef(!1), o = C.useRef(() => {
  });
  return C.useEffect(() => {
    const i = (u) => {
      if (u.target && !r.current) {
        let s = function() {
          Mm(
            Zw,
            n,
            a,
            { discrete: !0 }
          );
        };
        const a = { originalEvent: u };
        u.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = s, t.addEventListener("click", o.current, { once: !0 })) : s();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function nS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = jn(e), r = C.useRef(!1);
  return C.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Mm(Jw, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Jf() {
  const e = new CustomEvent(Gs);
  document.dispatchEvent(e);
}
function Mm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Gw(o, i) : o.dispatchEvent(i);
}
var Ou = "focusScope.autoFocusOnMount", Tu = "focusScope.autoFocusOnUnmount", qf = { bubbles: !1, cancelable: !0 }, rS = "FocusScope", Im = C.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...l
  } = e, [u, s] = C.useState(null), a = jn(o), c = jn(i), m = C.useRef(null), f = Bn(t, (g) => s(g)), v = C.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  C.useEffect(() => {
    if (r) {
      let g = function(p) {
        if (v.paused || !u) return;
        const y = p.target;
        u.contains(y) ? m.current = y : bt(m.current, { select: !0 });
      }, P = function(p) {
        if (v.paused || !u) return;
        const y = p.relatedTarget;
        y !== null && (u.contains(y) || bt(m.current, { select: !0 }));
      }, h = function(p) {
        if (document.activeElement === document.body)
          for (const _ of p)
            _.removedNodes.length > 0 && bt(u);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", P);
      const d = new MutationObserver(h);
      return u && d.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", P), d.disconnect();
      };
    }
  }, [r, u, v.paused]), C.useEffect(() => {
    if (u) {
      td.add(v);
      const g = document.activeElement;
      if (!u.contains(g)) {
        const h = new CustomEvent(Ou, qf);
        u.addEventListener(Ou, a), u.dispatchEvent(h), h.defaultPrevented || (oS(aS(jm(u)), { select: !0 }), document.activeElement === g && bt(u));
      }
      return () => {
        u.removeEventListener(Ou, a), setTimeout(() => {
          const h = new CustomEvent(Tu, qf);
          u.addEventListener(Tu, c), u.dispatchEvent(h), h.defaultPrevented || bt(g ?? document.body, { select: !0 }), u.removeEventListener(Tu, c), td.remove(v);
        }, 0);
      };
    }
  }, [u, a, c, v]);
  const w = C.useCallback(
    (g) => {
      if (!n && !r || v.paused) return;
      const P = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, h = document.activeElement;
      if (P && h) {
        const d = g.currentTarget, [p, y] = iS(d);
        p && y ? !g.shiftKey && h === y ? (g.preventDefault(), n && bt(p, { select: !0 })) : g.shiftKey && h === p && (g.preventDefault(), n && bt(y, { select: !0 })) : h === d && g.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ A.jsx($t.div, { tabIndex: -1, ...l, ref: f, onKeyDown: w });
});
Im.displayName = rS;
function oS(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (bt(r, { select: t }), document.activeElement !== n) return;
}
function iS(e) {
  const t = jm(e), n = ed(t, e), r = ed(t.reverse(), e);
  return [n, r];
}
function jm(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ed(e, t) {
  for (const n of e)
    if (!lS(n, { upTo: t })) return n;
}
function lS(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function uS(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function bt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && uS(e) && t && e.select();
  }
}
var td = sS();
function sS() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = nd(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = nd(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function nd(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function aS(e) {
  return e.filter((t) => t.tagName !== "A");
}
var cS = "Portal", Fm = C.forwardRef((e, t) => {
  var u;
  const { container: n, ...r } = e, [o, i] = C.useState(!1);
  cl(() => i(!0), []);
  const l = n || o && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? Hy.createPortal(/* @__PURE__ */ A.jsx($t.div, { ...r, ref: t }), l) : null;
});
Fm.displayName = cS;
function fS(e, t) {
  return C.useReducer((n, r) => t[n][r] ?? n, e);
}
var $l = (e) => {
  const { present: t, children: n } = e, r = dS(t), o = typeof n == "function" ? n({ present: r.isPresent }) : C.Children.only(n), i = Bn(r.ref, pS(o));
  return typeof n == "function" || r.isPresent ? C.cloneElement(o, { ref: i }) : null;
};
$l.displayName = "Presence";
function dS(e) {
  const [t, n] = C.useState(), r = C.useRef({}), o = C.useRef(e), i = C.useRef("none"), l = e ? "mounted" : "unmounted", [u, s] = fS(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return C.useEffect(() => {
    const a = ui(r.current);
    i.current = u === "mounted" ? a : "none";
  }, [u]), cl(() => {
    const a = r.current, c = o.current;
    if (c !== e) {
      const f = i.current, v = ui(a);
      e ? s("MOUNT") : v === "none" || (a == null ? void 0 : a.display) === "none" ? s("UNMOUNT") : s(c && f !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, s]), cl(() => {
    if (t) {
      const a = (m) => {
        const v = ui(r.current).includes(m.animationName);
        m.target === t && v && Rl.flushSync(() => s("ANIMATION_END"));
      }, c = (m) => {
        m.target === t && (i.current = ui(r.current));
      };
      return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
        t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a);
      };
    } else
      s("ANIMATION_END");
  }, [t, s]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: C.useCallback((a) => {
      a && (r.current = getComputedStyle(a)), n(a);
    }, [])
  };
}
function ui(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function pS(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Du = 0;
function hS() {
  C.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? rd()), document.body.insertAdjacentElement("beforeend", e[1] ?? rd()), Du++, () => {
      Du === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Du--;
    };
  }, []);
}
function rd() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var wt = function() {
  return wt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, wt.apply(this, arguments);
};
function zm(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function mS(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Oi = "right-scroll-bar-position", Ti = "width-before-scroll-bar", vS = "with-scroll-bars-hidden", gS = "--removed-body-scroll-bar-size";
function Au(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function yS(e, t) {
  var n = C.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var wS = typeof window < "u" ? C.useLayoutEffect : C.useEffect, od = /* @__PURE__ */ new WeakMap();
function SS(e, t) {
  var n = yS(null, function(r) {
    return e.forEach(function(o) {
      return Au(o, r);
    });
  });
  return wS(function() {
    var r = od.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), l = n.current;
      o.forEach(function(u) {
        i.has(u) || Au(u, null);
      }), i.forEach(function(u) {
        o.has(u) || Au(u, l);
      });
    }
    od.set(n, e);
  }, [e]), n;
}
function ES(e) {
  return e;
}
function kS(e, t) {
  t === void 0 && (t = ES);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var l = t(i, r);
      return n.push(l), function() {
        n = n.filter(function(u) {
          return u !== l;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var l = n;
        n = [], l.forEach(i);
      }
      n = {
        push: function(u) {
          return i(u);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var l = [];
      if (n.length) {
        var u = n;
        n = [], u.forEach(i), l = n;
      }
      var s = function() {
        var c = l;
        l = [], c.forEach(i);
      }, a = function() {
        return Promise.resolve().then(s);
      };
      a(), n = {
        push: function(c) {
          l.push(c), a();
        },
        filter: function(c) {
          return l = l.filter(c), n;
        }
      };
    }
  };
  return o;
}
function xS(e) {
  e === void 0 && (e = {});
  var t = kS(null);
  return t.options = wt({ async: !0, ssr: !1 }, e), t;
}
var $m = function(e) {
  var t = e.sideCar, n = zm(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, wt({}, n));
};
$m.isSideCarExport = !0;
function CS(e, t) {
  return e.useMedium(t), $m;
}
var Bm = xS(), Lu = function() {
}, Bl = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Lu,
    onWheelCapture: Lu,
    onTouchMoveCapture: Lu
  }), o = r[0], i = r[1], l = e.forwardProps, u = e.children, s = e.className, a = e.removeScrollBar, c = e.enabled, m = e.shards, f = e.sideCar, v = e.noIsolation, w = e.inert, g = e.allowPinchZoom, P = e.as, h = P === void 0 ? "div" : P, d = e.gapMode, p = zm(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), y = f, _ = SS([n, t]), N = wt(wt({}, p), o);
  return C.createElement(
    C.Fragment,
    null,
    c && C.createElement(y, { sideCar: Bm, removeScrollBar: a, shards: m, noIsolation: v, inert: w, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: d }),
    l ? C.cloneElement(C.Children.only(u), wt(wt({}, N), { ref: _ })) : C.createElement(h, wt({}, N, { className: s, ref: _ }), u)
  );
});
Bl.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Bl.classNames = {
  fullWidth: Ti,
  zeroRight: Oi
};
var _S = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function PS() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = _S();
  return t && e.setAttribute("nonce", t), e;
}
function NS(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function RS(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var OS = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = PS()) && (NS(t, n), RS(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, TS = function() {
  var e = OS();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Um = function() {
  var e = TS(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, DS = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Mu = function(e) {
  return parseInt(e || "", 10) || 0;
}, AS = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Mu(n), Mu(r), Mu(o)];
}, LS = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return DS;
  var t = AS(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, MS = Um(), pr = "data-scroll-locked", IS = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(vS, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(u, "px ").concat(r, `;
  }
  body[`).concat(pr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(u, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Oi, ` {
    right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(Ti, ` {
    margin-right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(Oi, " .").concat(Oi, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ti, " .").concat(Ti, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(pr, `] {
    `).concat(gS, ": ").concat(u, `px;
  }
`);
}, id = function() {
  var e = parseInt(document.body.getAttribute(pr) || "0", 10);
  return isFinite(e) ? e : 0;
}, jS = function() {
  C.useEffect(function() {
    return document.body.setAttribute(pr, (id() + 1).toString()), function() {
      var e = id() - 1;
      e <= 0 ? document.body.removeAttribute(pr) : document.body.setAttribute(pr, e.toString());
    };
  }, []);
}, FS = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  jS();
  var i = C.useMemo(function() {
    return LS(o);
  }, [o]);
  return C.createElement(MS, { styles: IS(i, !t, o, n ? "" : "!important") });
}, Ys = !1;
if (typeof window < "u")
  try {
    var si = Object.defineProperty({}, "passive", {
      get: function() {
        return Ys = !0, !0;
      }
    });
    window.addEventListener("test", si, si), window.removeEventListener("test", si, si);
  } catch {
    Ys = !1;
  }
var Vn = Ys ? { passive: !1 } : !1, zS = function(e) {
  return e.tagName === "TEXTAREA";
}, Wm = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !zS(e) && n[t] === "visible")
  );
}, $S = function(e) {
  return Wm(e, "overflowY");
}, BS = function(e) {
  return Wm(e, "overflowX");
}, ld = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = bm(e, r);
    if (o) {
      var i = Vm(e, r), l = i[1], u = i[2];
      if (l > u)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, US = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, WS = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, bm = function(e, t) {
  return e === "v" ? $S(t) : BS(t);
}, Vm = function(e, t) {
  return e === "v" ? US(t) : WS(t);
}, bS = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, VS = function(e, t, n, r, o) {
  var i = bS(e, window.getComputedStyle(t).direction), l = i * r, u = n.target, s = t.contains(u), a = !1, c = l > 0, m = 0, f = 0;
  do {
    var v = Vm(e, u), w = v[0], g = v[1], P = v[2], h = g - P - i * w;
    (w || h) && bm(e, u) && (m += h, f += w), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !s && u !== document.body || // self content
    s && (t.contains(u) || t === u)
  );
  return (c && (Math.abs(m) < 1 || !o) || !c && (Math.abs(f) < 1 || !o)) && (a = !0), a;
}, ai = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ud = function(e) {
  return [e.deltaX, e.deltaY];
}, sd = function(e) {
  return e && "current" in e ? e.current : e;
}, HS = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, QS = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, KS = 0, Hn = [];
function GS(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(KS++)[0], i = C.useState(Um)[0], l = C.useRef(e);
  C.useEffect(function() {
    l.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = mS([e.lockRef.current], (e.shards || []).map(sd), !0).filter(Boolean);
      return g.forEach(function(P) {
        return P.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(P) {
          return P.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = C.useCallback(function(g, P) {
    if ("touches" in g && g.touches.length === 2)
      return !l.current.allowPinchZoom;
    var h = ai(g), d = n.current, p = "deltaX" in g ? g.deltaX : d[0] - h[0], y = "deltaY" in g ? g.deltaY : d[1] - h[1], _, N = g.target, E = Math.abs(p) > Math.abs(y) ? "h" : "v";
    if ("touches" in g && E === "h" && N.type === "range")
      return !1;
    var R = ld(E, N);
    if (!R)
      return !0;
    if (R ? _ = E : (_ = E === "v" ? "h" : "v", R = ld(E, N)), !R)
      return !1;
    if (!r.current && "changedTouches" in g && (p || y) && (r.current = _), !_)
      return !0;
    var z = r.current || _;
    return VS(z, P, g, z === "h" ? p : y, !0);
  }, []), s = C.useCallback(function(g) {
    var P = g;
    if (!(!Hn.length || Hn[Hn.length - 1] !== i)) {
      var h = "deltaY" in P ? ud(P) : ai(P), d = t.current.filter(function(_) {
        return _.name === P.type && (_.target === P.target || P.target === _.shadowParent) && HS(_.delta, h);
      })[0];
      if (d && d.should) {
        P.cancelable && P.preventDefault();
        return;
      }
      if (!d) {
        var p = (l.current.shards || []).map(sd).filter(Boolean).filter(function(_) {
          return _.contains(P.target);
        }), y = p.length > 0 ? u(P, p[0]) : !l.current.noIsolation;
        y && P.cancelable && P.preventDefault();
      }
    }
  }, []), a = C.useCallback(function(g, P, h, d) {
    var p = { name: g, delta: P, target: h, should: d, shadowParent: YS(h) };
    t.current.push(p), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== p;
      });
    }, 1);
  }, []), c = C.useCallback(function(g) {
    n.current = ai(g), r.current = void 0;
  }, []), m = C.useCallback(function(g) {
    a(g.type, ud(g), g.target, u(g, e.lockRef.current));
  }, []), f = C.useCallback(function(g) {
    a(g.type, ai(g), g.target, u(g, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Hn.push(i), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", s, Vn), document.addEventListener("touchmove", s, Vn), document.addEventListener("touchstart", c, Vn), function() {
      Hn = Hn.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", s, Vn), document.removeEventListener("touchmove", s, Vn), document.removeEventListener("touchstart", c, Vn);
    };
  }, []);
  var v = e.removeScrollBar, w = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    w ? C.createElement(i, { styles: QS(o) }) : null,
    v ? C.createElement(FS, { gapMode: e.gapMode }) : null
  );
}
function YS(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const XS = CS(Bm, GS);
var Hm = C.forwardRef(function(e, t) {
  return C.createElement(Bl, wt({}, e, { ref: t, sideCar: XS }));
});
Hm.classNames = Bl.classNames;
var ZS = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Qn = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), fi = {}, Iu = 0, Qm = function(e) {
  return e && (e.host || Qm(e.parentNode));
}, JS = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Qm(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, qS = function(e, t, n, r) {
  var o = JS(t, Array.isArray(e) ? e : [e]);
  fi[n] || (fi[n] = /* @__PURE__ */ new WeakMap());
  var i = fi[n], l = [], u = /* @__PURE__ */ new Set(), s = new Set(o), a = function(m) {
    !m || u.has(m) || (u.add(m), a(m.parentNode));
  };
  o.forEach(a);
  var c = function(m) {
    !m || s.has(m) || Array.prototype.forEach.call(m.children, function(f) {
      if (u.has(f))
        c(f);
      else
        try {
          var v = f.getAttribute(r), w = v !== null && v !== "false", g = (Qn.get(f) || 0) + 1, P = (i.get(f) || 0) + 1;
          Qn.set(f, g), i.set(f, P), l.push(f), g === 1 && w && ci.set(f, !0), P === 1 && f.setAttribute(n, "true"), w || f.setAttribute(r, "true");
        } catch (h) {
          console.error("aria-hidden: cannot operate on ", f, h);
        }
    });
  };
  return c(t), u.clear(), Iu++, function() {
    l.forEach(function(m) {
      var f = Qn.get(m) - 1, v = i.get(m) - 1;
      Qn.set(m, f), i.set(m, v), f || (ci.has(m) || m.removeAttribute(r), ci.delete(m)), v || m.removeAttribute(n);
    }), Iu--, Iu || (Qn = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), fi = {});
  };
}, eE = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = ZS(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), qS(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, lc = "Dialog", [Km, KE] = Fw(lc), [tE, dt] = Km(lc), Gm = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: l = !0
  } = e, u = C.useRef(null), s = C.useRef(null), [a = !1, c] = Uw({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ A.jsx(
    tE,
    {
      scope: t,
      triggerRef: u,
      contentRef: s,
      contentId: Ru(),
      titleId: Ru(),
      descriptionId: Ru(),
      open: a,
      onOpenChange: c,
      onOpenToggle: C.useCallback(() => c((m) => !m), [c]),
      modal: l,
      children: n
    }
  );
};
Gm.displayName = lc;
var Ym = "DialogTrigger", Xm = C.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dt(Ym, n), i = Bn(t, o.triggerRef);
    return /* @__PURE__ */ A.jsx(
      $t.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ac(o.open),
        ...r,
        ref: i,
        onClick: on(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Xm.displayName = Ym;
var uc = "DialogPortal", [nE, Zm] = Km(uc, {
  forceMount: void 0
}), Jm = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = dt(uc, t);
  return /* @__PURE__ */ A.jsx(nE, { scope: t, forceMount: n, children: C.Children.map(r, (l) => /* @__PURE__ */ A.jsx($l, { present: n || i.open, children: /* @__PURE__ */ A.jsx(Fm, { asChild: !0, container: o, children: l }) })) });
};
Jm.displayName = uc;
var fl = "DialogOverlay", qm = C.forwardRef(
  (e, t) => {
    const n = Zm(fl, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = dt(fl, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ A.jsx($l, { present: r || i.open, children: /* @__PURE__ */ A.jsx(rE, { ...o, ref: t }) }) : null;
  }
);
qm.displayName = fl;
var rE = C.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dt(fl, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ A.jsx(Hm, { as: ic, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ A.jsx(
        $t.div,
        {
          "data-state": ac(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Fn = "DialogContent", ev = C.forwardRef(
  (e, t) => {
    const n = Zm(Fn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = dt(Fn, e.__scopeDialog);
    return /* @__PURE__ */ A.jsx($l, { present: r || i.open, children: i.modal ? /* @__PURE__ */ A.jsx(oE, { ...o, ref: t }) : /* @__PURE__ */ A.jsx(iE, { ...o, ref: t }) });
  }
);
ev.displayName = Fn;
var oE = C.forwardRef(
  (e, t) => {
    const n = dt(Fn, e.__scopeDialog), r = C.useRef(null), o = Bn(t, n.contentRef, r);
    return C.useEffect(() => {
      const i = r.current;
      if (i) return eE(i);
    }, []), /* @__PURE__ */ A.jsx(
      tv,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: on(e.onCloseAutoFocus, (i) => {
          var l;
          i.preventDefault(), (l = n.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: on(e.onPointerDownOutside, (i) => {
          const l = i.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || u) && i.preventDefault();
        }),
        onFocusOutside: on(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), iE = C.forwardRef(
  (e, t) => {
    const n = dt(Fn, e.__scopeDialog), r = C.useRef(!1), o = C.useRef(!1);
    return /* @__PURE__ */ A.jsx(
      tv,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var l, u;
          (l = e.onCloseAutoFocus) == null || l.call(e, i), i.defaultPrevented || (r.current || (u = n.triggerRef.current) == null || u.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var s, a;
          (s = e.onInteractOutside) == null || s.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const l = i.target;
          ((a = n.triggerRef.current) == null ? void 0 : a.contains(l)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), tv = C.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, u = dt(Fn, n), s = C.useRef(null), a = Bn(t, s);
    return hS(), /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      /* @__PURE__ */ A.jsx(
        Im,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ A.jsx(
            Lm,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": ac(u.open),
              ...l,
              ref: a,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx(lE, { titleId: u.titleId }),
        /* @__PURE__ */ A.jsx(sE, { contentRef: s, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), sc = "DialogTitle", nv = C.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dt(sc, n);
    return /* @__PURE__ */ A.jsx($t.h2, { id: o.titleId, ...r, ref: t });
  }
);
nv.displayName = sc;
var rv = "DialogDescription", ov = C.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dt(rv, n);
    return /* @__PURE__ */ A.jsx($t.p, { id: o.descriptionId, ...r, ref: t });
  }
);
ov.displayName = rv;
var iv = "DialogClose", lv = C.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dt(iv, n);
    return /* @__PURE__ */ A.jsx(
      $t.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: on(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
lv.displayName = iv;
function ac(e) {
  return e ? "open" : "closed";
}
var uv = "DialogTitleWarning", [GE, sv] = jw(uv, {
  contentName: Fn,
  titleName: sc,
  docsSlug: "dialog"
}), lE = ({ titleId: e }) => {
  const t = sv(uv), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return C.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, uE = "DialogDescriptionWarning", sE = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${sv(uE).contentName}}.`;
  return C.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, aE = Gm, YE = Xm, cE = Jm, fE = qm, dE = ev, pE = nv, hE = ov, XE = lv;
const mE = ft.button`
  cursor: pointer;
  background-color: var(${we.buttonSecondaryBackground});
  color: var(${we.buttonSecondaryForeground});
  border: 1px solid var(${we.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    background-color: var(${we.buttonSecondaryHoverBackground});
  }
`, vE = ft.button`
  cursor: pointer;
  background-color: var(${we.buttonBackground});
  color: var(${we.buttonForeground});
  border: 1px solid var(${we.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${we.focusBorder});
  }
`, gE = {
  open: !1,
  title: "",
  message: "",
  actions: []
}, av = Za({
  name: "confirmationDialog",
  initialState: gE,
  reducers: {
    requestConfirmation: (e, {
      payload: { title: t, message: n, actions: r }
    }) => {
      e.open = !0, e.message = n, e.title = t, e.actions = r;
    },
    accept: (e) => {
      e.open = !1, e.title = "", e.message = "", e.actions = [];
    },
    reject: (e) => {
      e.open = !1, e.title = "", e.message = "", e.actions = [];
    }
  }
}), { requestConfirmation: ZE, accept: yE, reject: wE } = av.actions, SE = Nh, EE = Qa, JE = av.reducer;
function kE() {
  const e = SE(), t = () => e(yE()), n = () => e(wE()), { open: r, title: o, message: i } = EE((l) => l.confirmationDialog);
  return /* @__PURE__ */ A.jsx(aE, { open: r, children: /* @__PURE__ */ A.jsxs(cE, { children: [
    /* @__PURE__ */ A.jsx(xE, {}),
    /* @__PURE__ */ A.jsxs(CE, { onEscapeKeyDown: n, children: [
      /* @__PURE__ */ A.jsx(pE, { children: o }),
      /* @__PURE__ */ A.jsx(hE, { children: i }),
      /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
        /* @__PURE__ */ A.jsx(mE, { onClick: n, children: "Cancel" }),
        /* @__PURE__ */ A.jsx(vE, { onClick: t, children: "Confirm" })
      ] })
    ] })
  ] }) });
}
const xE = ft(fE)`
  background-color: var(${we.computedTwo});
  position: fixed;
  inset: 0;
`, CE = ft(dE)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  background-color: var(${we.background});
  color: var(${we.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;
function qE(e, t) {
  return function(r) {
    const { command: o, payload: i } = r.data;
    if (o) {
      const l = t[o];
      if (l) {
        const u = l(i);
        u ? e.dispatch(u) : console.log(`Skipping dispatch for command: ${o}`);
      } else
        console.error(`Unable to find handler for command: ${o}`);
    } else
      console.error("Received message with unknown command", r.data);
  };
}
function ek(e) {
  const t = Object.keys(e);
  for (const n of t)
    e[n] ? (console.log("starting listener for: ", n), e[n]()) : console.log("skipping listener for: ", n);
}
function _E({ error: e }) {
  return /* @__PURE__ */ A.jsxs("div", { children: [
    /* @__PURE__ */ A.jsx("p", { children: "Unexpected error:" }),
    /* @__PURE__ */ A.jsx("pre", { children: e.message })
  ] });
}
function tk() {
  return /* @__PURE__ */ A.jsxs(Ew, { FallbackComponent: _E, children: [
    /* @__PURE__ */ A.jsx(Cw, {}),
    /* @__PURE__ */ A.jsx(kE, {}),
    /* @__PURE__ */ A.jsx(PE, { children: /* @__PURE__ */ A.jsx(Ow, {}) }),
    /* @__PURE__ */ A.jsx(NE, { children: /* @__PURE__ */ A.jsx(Nw, {}) })
  ] });
}
const PE = ft.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 35px;
`, NE = ft.div`
  position: fixed;
  top: 35px;
  left: 0;
  right: 0;
  bottom: 0;
`, nk = (e) => /* @__PURE__ */ A.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ A.jsx("path", { d: "M506.3 417 293 53c-8.2-14-22.6-21-37-21-14.4 0-28.8 7-37.9 21L4.9 417c-15.49 27.9 4.951 63 37.84 63h426.6c32.76 0 53.26-35 36.96-63zM52.58 432 255.1 84.8 459.4 432H52.58zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44s14.11 31.44 31.48 31.44 31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1zM232 184v96c0 13.3 10.8 24 24 24s24-10.75 24-24v-96c0-13.2-10.7-24-24-24s-24 10.8-24 24z" }) });
export {
  Im as $,
  jn as A,
  vE as B,
  aE as C,
  YE as D,
  cE as E,
  pE as F,
  hE as G,
  XE as H,
  mE as I,
  dE as J,
  Rl as K,
  y1 as L,
  yE as M,
  OE as N,
  fE as O,
  DE as P,
  Mr as Q,
  At as R,
  nk as S,
  we as T,
  ZE as U,
  w1 as V,
  tk as W,
  $l as X,
  Bn as Y,
  eE as Z,
  hS as _,
  zE as a,
  Lm as a0,
  Dm as a1,
  Hm as a2,
  ic as a3,
  Gw as a4,
  Fm as a5,
  Uw as a6,
  Ru as a7,
  ju as a8,
  Wh as a9,
  Oe as aa,
  $E as ab,
  zh as ac,
  FE as ad,
  U0 as ae,
  W0 as af,
  jE as ag,
  g0 as ah,
  Ka as ai,
  ME as aj,
  kt as ak,
  IE as al,
  Lf as am,
  B0 as an,
  Is as ao,
  Ih as ap,
  Ft as aq,
  LE as ar,
  Oh as as,
  b0 as at,
  AE as au,
  d0 as av,
  TE as aw,
  wt as ax,
  bw as ay,
  cl as az,
  Qa as b,
  Za as c,
  BE as d,
  ft as e,
  C as f,
  Qy as g,
  Om as h,
  zo as i,
  A as j,
  qE as k,
  UE as l,
  QE as m,
  Cw as n,
  Nw as o,
  WE as p,
  Xs as q,
  HE as r,
  ek as s,
  bE as t,
  Nh as u,
  Dt as v,
  JE as w,
  Fw as x,
  $t as y,
  on as z
};
