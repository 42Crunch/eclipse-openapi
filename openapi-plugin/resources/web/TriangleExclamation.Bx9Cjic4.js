var Jm = Object.defineProperty;
var qm = (e, t, n) => t in e ? Jm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Pr = (e, t, n) => qm(e, typeof t != "symbol" ? t + "" : t, n);
function ev(e, t) {
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
var Nr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ji(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ck(e) {
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
var td = { exports: {} }, qi = {}, nd = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko = Symbol.for("react.element"), tv = Symbol.for("react.portal"), nv = Symbol.for("react.fragment"), rv = Symbol.for("react.strict_mode"), ov = Symbol.for("react.profiler"), iv = Symbol.for("react.provider"), lv = Symbol.for("react.context"), uv = Symbol.for("react.forward_ref"), av = Symbol.for("react.suspense"), sv = Symbol.for("react.memo"), cv = Symbol.for("react.lazy"), lc = Symbol.iterator;
function fv(e) {
  return e === null || typeof e != "object" ? null : (e = lc && e[lc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var rd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, od = Object.assign, id = {};
function xr(e, t, n) {
  this.props = e, this.context = t, this.refs = id, this.updater = n || rd;
}
xr.prototype.isReactComponent = {};
xr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
xr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ld() {
}
ld.prototype = xr.prototype;
function Wa(e, t, n) {
  this.props = e, this.context = t, this.refs = id, this.updater = n || rd;
}
var Va = Wa.prototype = new ld();
Va.constructor = Wa;
od(Va, xr.prototype);
Va.isPureReactComponent = !0;
var uc = Array.isArray, ud = Object.prototype.hasOwnProperty, Ha = { current: null }, ad = { key: !0, ref: !0, __self: !0, __source: !0 };
function sd(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) ud.call(t, r) && !ad.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: ko, type: e, key: i, ref: l, props: o, _owner: Ha.current };
}
function dv(e, t) {
  return { $$typeof: ko, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ko;
}
function pv(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ac = /\/+/g;
function Hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? pv("" + e.key) : t.toString(36);
}
function ri(e, t, n, r, o) {
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
        case ko:
        case tv:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + Hl(l, 0) : r, uc(o) ? (n = "", e != null && (n = e.replace(ac, "$&/") + "/"), ri(o, t, n, "", function(s) {
    return s;
  })) : o != null && (Qa(o) && (o = dv(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(ac, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", uc(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var a = r + Hl(i, u);
    l += ri(i, t, n, a, o);
  }
  else if (a = fv(e), typeof a == "function") for (e = a.call(e), u = 0; !(i = e.next()).done; ) i = i.value, a = r + Hl(i, u++), l += ri(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Do(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return ri(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function hv(e) {
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
var be = { current: null }, oi = { transition: null }, mv = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: oi, ReactCurrentOwner: Ha };
function cd() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: Do, forEach: function(e, t, n) {
  Do(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Do(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Do(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Qa(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = xr;
G.Fragment = nv;
G.Profiler = ov;
G.PureComponent = Wa;
G.StrictMode = rv;
G.Suspense = av;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mv;
G.act = cd;
G.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = od({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Ha.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) ud.call(t, a) && !ad.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: ko, type: e.type, key: o, ref: i, props: r, _owner: l };
};
G.createContext = function(e) {
  return e = { $$typeof: lv, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: iv, _context: e }, e.Consumer = e;
};
G.createElement = sd;
G.createFactory = function(e) {
  var t = sd.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: uv, render: e };
};
G.isValidElement = Qa;
G.lazy = function(e) {
  return { $$typeof: cv, _payload: { _status: -1, _result: e }, _init: hv };
};
G.memo = function(e, t) {
  return { $$typeof: sv, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = oi.transition;
  oi.transition = {};
  try {
    e();
  } finally {
    oi.transition = t;
  }
};
G.unstable_act = cd;
G.useCallback = function(e, t) {
  return be.current.useCallback(e, t);
};
G.useContext = function(e) {
  return be.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return be.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return be.current.useEffect(e, t);
};
G.useId = function() {
  return be.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return be.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return be.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return be.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return be.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return be.current.useRef(e);
};
G.useState = function(e) {
  return be.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return be.current.useTransition();
};
G.version = "18.3.1";
nd.exports = G;
var _ = nd.exports;
const pn = /* @__PURE__ */ Ji(_), Lu = /* @__PURE__ */ ev({
  __proto__: null,
  default: pn
}, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vv = _, gv = Symbol.for("react.element"), yv = Symbol.for("react.fragment"), wv = Object.prototype.hasOwnProperty, Sv = vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, kv = { key: !0, ref: !0, __self: !0, __source: !0 };
function fd(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) wv.call(t, r) && !kv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: gv, type: e, key: i, ref: l, props: o, _owner: Sv.current };
}
qi.Fragment = yv;
qi.jsx = fd;
qi.jsxs = fd;
td.exports = qi;
var j = td.exports, dd = { exports: {} }, nt = {}, pd = { exports: {} }, hd = {};
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
  function t(M, U) {
    var W = M.length;
    M.push(U);
    e: for (; 0 < W; ) {
      var E = W - 1 >>> 1, k = M[E];
      if (0 < o(k, U)) M[E] = U, M[W] = k, W = E;
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var U = M[0], W = M.pop();
    if (W !== U) {
      M[0] = W;
      e: for (var E = 0, k = M.length, y = k >>> 1; E < y; ) {
        var P = 2 * (E + 1) - 1, D = M[P], x = P + 1, $ = M[x];
        if (0 > o(D, W)) x < k && 0 > o($, D) ? (M[E] = $, M[x] = W, E = x) : (M[E] = D, M[P] = W, E = P);
        else if (x < k && 0 > o($, W)) M[E] = $, M[x] = W, E = x;
        else break e;
      }
    }
    return U;
  }
  function o(M, U) {
    var W = M.sortIndex - U.sortIndex;
    return W !== 0 ? W : M.id - U.id;
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
  var a = [], s = [], f = 1, m = null, d = 3, S = !1, g = !1, v = !1, C = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(M) {
    for (var U = n(s); U !== null; ) {
      if (U.callback === null) r(s);
      else if (U.startTime <= M) r(s), U.sortIndex = U.expirationTime, t(a, U);
      else break;
      U = n(s);
    }
  }
  function w(M) {
    if (v = !1, h(M), !g) if (n(a) !== null) g = !0, it(N);
    else {
      var U = n(s);
      U !== null && ye(w, U.startTime - M);
    }
  }
  function N(M, U) {
    g = !1, v && (v = !1, p(T), T = -1), S = !0;
    var W = d;
    try {
      for (h(U), m = n(a); m !== null && (!(m.expirationTime > U) || M && !me()); ) {
        var E = m.callback;
        if (typeof E == "function") {
          m.callback = null, d = m.priorityLevel;
          var k = E(m.expirationTime <= U);
          U = e.unstable_now(), typeof k == "function" ? m.callback = k : m === n(a) && r(a), h(U);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var y = !0;
      else {
        var P = n(s);
        P !== null && ye(w, P.startTime - U), y = !1;
      }
      return y;
    } finally {
      m = null, d = W, S = !1;
    }
  }
  var R = !1, A = null, T = -1, B = 5, F = -1;
  function me() {
    return !(e.unstable_now() - F < B);
  }
  function ue() {
    if (A !== null) {
      var M = e.unstable_now();
      F = M;
      var U = !0;
      try {
        U = A(!0, M);
      } finally {
        U ? Se() : (R = !1, A = null);
      }
    } else R = !1;
  }
  var Se;
  if (typeof c == "function") Se = function() {
    c(ue);
  };
  else if (typeof MessageChannel < "u") {
    var De = new MessageChannel(), ce = De.port2;
    De.port1.onmessage = ue, Se = function() {
      ce.postMessage(null);
    };
  } else Se = function() {
    C(ue, 0);
  };
  function it(M) {
    A = M, R || (R = !0, Se());
  }
  function ye(M, U) {
    T = C(function() {
      M(e.unstable_now());
    }, U);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    g || S || (g = !0, it(N));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(M) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var U = 3;
        break;
      default:
        U = d;
    }
    var W = d;
    d = U;
    try {
      return M();
    } finally {
      d = W;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, U) {
    switch (M) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        M = 3;
    }
    var W = d;
    d = M;
    try {
      return U();
    } finally {
      d = W;
    }
  }, e.unstable_scheduleCallback = function(M, U, W) {
    var E = e.unstable_now();
    switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? E + W : E) : W = E, M) {
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
    return k = W + k, M = { id: f++, callback: U, priorityLevel: M, startTime: W, expirationTime: k, sortIndex: -1 }, W > E ? (M.sortIndex = W, t(s, M), n(a) === null && M === n(s) && (v ? (p(T), T = -1) : v = !0, ye(w, W - E))) : (M.sortIndex = k, t(a, M), g || S || (g = !0, it(N))), M;
  }, e.unstable_shouldYield = me, e.unstable_wrapCallback = function(M) {
    var U = d;
    return function() {
      var W = d;
      d = U;
      try {
        return M.apply(this, arguments);
      } finally {
        d = W;
      }
    };
  };
})(hd);
pd.exports = hd;
var Ev = pd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xv = _, et = Ev;
function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var md = /* @__PURE__ */ new Set(), Jr = {};
function Bn(e, t) {
  hr(e, t), hr(e + "Capture", t);
}
function hr(e, t) {
  for (Jr[e] = t, e = 0; e < t.length; e++) md.add(t[e]);
}
var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Mu = Object.prototype.hasOwnProperty, Cv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, sc = {}, cc = {};
function _v(e) {
  return Mu.call(cc, e) ? !0 : Mu.call(sc, e) ? !1 : Cv.test(e) ? cc[e] = !0 : (sc[e] = !0, !1);
}
function Pv(e, t, n, r) {
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
function Nv(e, t, n, r) {
  if (t === null || typeof t > "u" || Pv(e, t, n, r)) return !0;
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
function Ue(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Te[e] = new Ue(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Te[t] = new Ue(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Te[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Te[e] = new Ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Te[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Te[e] = new Ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Te[e] = new Ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Te[e] = new Ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Te[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ka = /[\-:]([a-z])/g;
function Ya(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ka,
    Ya
  );
  Te[t] = new Ue(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ka, Ya);
  Te[t] = new Ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ka, Ya);
  Te[t] = new Ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Te[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new Ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Te[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ga(e, t, n, r) {
  var o = Te.hasOwnProperty(t) ? Te[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Nv(t, n, o, r) && (n = null), r || o === null ? _v(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ht = xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Lo = Symbol.for("react.element"), Kn = Symbol.for("react.portal"), Yn = Symbol.for("react.fragment"), Xa = Symbol.for("react.strict_mode"), $u = Symbol.for("react.profiler"), vd = Symbol.for("react.provider"), gd = Symbol.for("react.context"), Za = Symbol.for("react.forward_ref"), ju = Symbol.for("react.suspense"), Iu = Symbol.for("react.suspense_list"), Ja = Symbol.for("react.memo"), Xt = Symbol.for("react.lazy"), yd = Symbol.for("react.offscreen"), fc = Symbol.iterator;
function Ar(e) {
  return e === null || typeof e != "object" ? null : (e = fc && e[fc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var he = Object.assign, Ql;
function jr(e) {
  if (Ql === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ql = t && t[1] || "";
  }
  return `
` + Ql + e;
}
var Kl = !1;
function Yl(e, t) {
  if (!e || Kl) return "";
  Kl = !0;
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
`), i = r.stack.split(`
`), l = o.length - 1, u = i.length - 1; 1 <= l && 0 <= u && o[l] !== i[u]; ) u--;
      for (; 1 <= l && 0 <= u; l--, u--) if (o[l] !== i[u]) {
        if (l !== 1 || u !== 1)
          do
            if (l--, u--, 0 > u || o[l] !== i[u]) {
              var a = `
` + o[l].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    Kl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? jr(e) : "";
}
function Av(e) {
  switch (e.tag) {
    case 5:
      return jr(e.type);
    case 16:
      return jr("Lazy");
    case 13:
      return jr("Suspense");
    case 19:
      return jr("SuspenseList");
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
function Fu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yn:
      return "Fragment";
    case Kn:
      return "Portal";
    case $u:
      return "Profiler";
    case Xa:
      return "StrictMode";
    case ju:
      return "Suspense";
    case Iu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case gd:
      return (e.displayName || "Context") + ".Consumer";
    case vd:
      return (e._context.displayName || "Context") + ".Provider";
    case Za:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ja:
      return t = e.displayName || null, t !== null ? t : Fu(e.type) || "Memo";
    case Xt:
      t = e._payload, e = e._init;
      try {
        return Fu(e(t));
      } catch {
      }
  }
  return null;
}
function Ov(e) {
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
      return Fu(t);
    case 8:
      return t === Xa ? "StrictMode" : "Mode";
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
function hn(e) {
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
function wd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Rv(e) {
  var t = wd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Mo(e) {
  e._valueTracker || (e._valueTracker = Rv(e));
}
function Sd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = wd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function yi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zu(e, t) {
  var n = t.checked;
  return he({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function dc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = hn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function kd(e, t) {
  t = t.checked, t != null && Ga(e, "checked", t, !1);
}
function Bu(e, t) {
  kd(e, t);
  var n = hn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? bu(e, t.type, n) : t.hasOwnProperty("defaultValue") && bu(e, t.type, hn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function pc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function bu(e, t, n) {
  (t !== "number" || yi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ir = Array.isArray;
function lr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + hn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Uu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return he({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function hc(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(L(92));
      if (Ir(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: hn(n) };
}
function Ed(e, t) {
  var n = hn(t.value), r = hn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function mc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var $o, Cd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for ($o = $o || document.createElement("div"), $o.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = $o.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var br = {
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
}, Tv = ["Webkit", "ms", "Moz", "O"];
Object.keys(br).forEach(function(e) {
  Tv.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), br[t] = br[e];
  });
});
function _d(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || br.hasOwnProperty(e) && br[e] ? ("" + t).trim() : t + "px";
}
function Pd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = _d(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Dv = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Vu(e, t) {
  if (t) {
    if (Dv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Hu(e, t) {
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
var Qu = null;
function qa(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ku = null, ur = null, ar = null;
function vc(e) {
  if (e = Co(e)) {
    if (typeof Ku != "function") throw Error(L(280));
    var t = e.stateNode;
    t && (t = ol(t), Ku(e.stateNode, e.type, t));
  }
}
function Nd(e) {
  ur ? ar ? ar.push(e) : ar = [e] : ur = e;
}
function Ad() {
  if (ur) {
    var e = ur, t = ar;
    if (ar = ur = null, vc(e), t) for (e = 0; e < t.length; e++) vc(t[e]);
  }
}
function Od(e, t) {
  return e(t);
}
function Rd() {
}
var Gl = !1;
function Td(e, t, n) {
  if (Gl) return e(t, n);
  Gl = !0;
  try {
    return Od(e, t, n);
  } finally {
    Gl = !1, (ur !== null || ar !== null) && (Rd(), Ad());
  }
}
function eo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ol(n);
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
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Yu = !1;
if (Bt) try {
  var Or = {};
  Object.defineProperty(Or, "passive", { get: function() {
    Yu = !0;
  } }), window.addEventListener("test", Or, Or), window.removeEventListener("test", Or, Or);
} catch {
  Yu = !1;
}
function Lv(e, t, n, r, o, i, l, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var Ur = !1, wi = null, Si = !1, Gu = null, Mv = { onError: function(e) {
  Ur = !0, wi = e;
} };
function $v(e, t, n, r, o, i, l, u, a) {
  Ur = !1, wi = null, Lv.apply(Mv, arguments);
}
function jv(e, t, n, r, o, i, l, u, a) {
  if ($v.apply(this, arguments), Ur) {
    if (Ur) {
      var s = wi;
      Ur = !1, wi = null;
    } else throw Error(L(198));
    Si || (Si = !0, Gu = s);
  }
}
function bn(e) {
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
function Dd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function gc(e) {
  if (bn(e) !== e) throw Error(L(188));
}
function Iv(e) {
  var t = e.alternate;
  if (!t) {
    if (t = bn(e), t === null) throw Error(L(188));
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
        if (i === n) return gc(o), e;
        if (i === r) return gc(o), t;
        i = i.sibling;
      }
      throw Error(L(188));
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
        if (!l) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Ld(e) {
  return e = Iv(e), e !== null ? Md(e) : null;
}
function Md(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Md(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $d = et.unstable_scheduleCallback, yc = et.unstable_cancelCallback, Fv = et.unstable_shouldYield, zv = et.unstable_requestPaint, ge = et.unstable_now, Bv = et.unstable_getCurrentPriorityLevel, es = et.unstable_ImmediatePriority, jd = et.unstable_UserBlockingPriority, ki = et.unstable_NormalPriority, bv = et.unstable_LowPriority, Id = et.unstable_IdlePriority, el = null, At = null;
function Uv(e) {
  if (At && typeof At.onCommitFiberRoot == "function") try {
    At.onCommitFiberRoot(el, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var St = Math.clz32 ? Math.clz32 : Hv, Wv = Math.log, Vv = Math.LN2;
function Hv(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Wv(e) / Vv | 0) | 0;
}
var jo = 64, Io = 4194304;
function Fr(e) {
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
function Ei(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? r = Fr(u) : (i &= l, i !== 0 && (r = Fr(i)));
  } else l = n & ~o, l !== 0 ? r = Fr(l) : i !== 0 && (r = Fr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - St(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Qv(e, t) {
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
function Kv(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - St(i), u = 1 << l, a = o[l];
    a === -1 ? (!(u & n) || u & r) && (o[l] = Qv(u, t)) : a <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Xu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Fd() {
  var e = jo;
  return jo <<= 1, !(jo & 4194240) && (jo = 64), e;
}
function Xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Eo(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
}
function Yv(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - St(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function ts(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var q = 0;
function zd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Bd, ns, bd, Ud, Wd, Zu = !1, Fo = [], nn = null, rn = null, on = null, to = /* @__PURE__ */ new Map(), no = /* @__PURE__ */ new Map(), Jt = [], Gv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function wc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      to.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      no.delete(t.pointerId);
  }
}
function Rr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Co(t), t !== null && ns(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Xv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return nn = Rr(nn, e, t, n, r, o), !0;
    case "dragenter":
      return rn = Rr(rn, e, t, n, r, o), !0;
    case "mouseover":
      return on = Rr(on, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return to.set(i, Rr(to.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, no.set(i, Rr(no.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Vd(e) {
  var t = xn(e.target);
  if (t !== null) {
    var n = bn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Dd(n), t !== null) {
          e.blockedOn = t, Wd(e.priority, function() {
            bd(n);
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
function ii(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ju(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Qu = r, n.target.dispatchEvent(r), Qu = null;
    } else return t = Co(n), t !== null && ns(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Sc(e, t, n) {
  ii(e) && n.delete(t);
}
function Zv() {
  Zu = !1, nn !== null && ii(nn) && (nn = null), rn !== null && ii(rn) && (rn = null), on !== null && ii(on) && (on = null), to.forEach(Sc), no.forEach(Sc);
}
function Tr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Zu || (Zu = !0, et.unstable_scheduleCallback(et.unstable_NormalPriority, Zv)));
}
function ro(e) {
  function t(o) {
    return Tr(o, e);
  }
  if (0 < Fo.length) {
    Tr(Fo[0], e);
    for (var n = 1; n < Fo.length; n++) {
      var r = Fo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (nn !== null && Tr(nn, e), rn !== null && Tr(rn, e), on !== null && Tr(on, e), to.forEach(t), no.forEach(t), n = 0; n < Jt.length; n++) r = Jt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Jt.length && (n = Jt[0], n.blockedOn === null); ) Vd(n), n.blockedOn === null && Jt.shift();
}
var sr = Ht.ReactCurrentBatchConfig, xi = !0;
function Jv(e, t, n, r) {
  var o = q, i = sr.transition;
  sr.transition = null;
  try {
    q = 1, rs(e, t, n, r);
  } finally {
    q = o, sr.transition = i;
  }
}
function qv(e, t, n, r) {
  var o = q, i = sr.transition;
  sr.transition = null;
  try {
    q = 4, rs(e, t, n, r);
  } finally {
    q = o, sr.transition = i;
  }
}
function rs(e, t, n, r) {
  if (xi) {
    var o = Ju(e, t, n, r);
    if (o === null) lu(e, t, r, Ci, n), wc(e, r);
    else if (Xv(o, e, t, n, r)) r.stopPropagation();
    else if (wc(e, r), t & 4 && -1 < Gv.indexOf(e)) {
      for (; o !== null; ) {
        var i = Co(o);
        if (i !== null && Bd(i), i = Ju(e, t, n, r), i === null && lu(e, t, r, Ci, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else lu(e, t, r, null, n);
  }
}
var Ci = null;
function Ju(e, t, n, r) {
  if (Ci = null, e = qa(r), e = xn(e), e !== null) if (t = bn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Dd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ci = e, null;
}
function Hd(e) {
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
      switch (Bv()) {
        case es:
          return 1;
        case jd:
          return 4;
        case ki:
        case bv:
          return 16;
        case Id:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null, os = null, li = null;
function Qd() {
  if (li) return li;
  var e, t = os, n = t.length, r, o = "value" in en ? en.value : en.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return li = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ui(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function zo() {
  return !0;
}
function kc() {
  return !1;
}
function rt(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? zo : kc, this.isPropagationStopped = kc, this;
  }
  return he(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = zo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = zo);
  }, persist: function() {
  }, isPersistent: zo }), t;
}
var Cr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, is = rt(Cr), xo = he({}, Cr, { view: 0, detail: 0 }), eg = rt(xo), Zl, Jl, Dr, tl = he({}, xo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ls, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Dr && (Dr && e.type === "mousemove" ? (Zl = e.screenX - Dr.screenX, Jl = e.screenY - Dr.screenY) : Jl = Zl = 0, Dr = e), Zl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Jl;
} }), Ec = rt(tl), tg = he({}, tl, { dataTransfer: 0 }), ng = rt(tg), rg = he({}, xo, { relatedTarget: 0 }), ql = rt(rg), og = he({}, Cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ig = rt(og), lg = he({}, Cr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ug = rt(lg), ag = he({}, Cr, { data: 0 }), xc = rt(ag), sg = {
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
}, cg = {
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
}, fg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function dg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = fg[e]) ? !!t[e] : !1;
}
function ls() {
  return dg;
}
var pg = he({}, xo, { key: function(e) {
  if (e.key) {
    var t = sg[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ui(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cg[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ls, charCode: function(e) {
  return e.type === "keypress" ? ui(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ui(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), hg = rt(pg), mg = he({}, tl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cc = rt(mg), vg = he({}, xo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ls }), gg = rt(vg), yg = he({}, Cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wg = rt(yg), Sg = he({}, tl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), kg = rt(Sg), Eg = [9, 13, 27, 32], us = Bt && "CompositionEvent" in window, Wr = null;
Bt && "documentMode" in document && (Wr = document.documentMode);
var xg = Bt && "TextEvent" in window && !Wr, Kd = Bt && (!us || Wr && 8 < Wr && 11 >= Wr), _c = " ", Pc = !1;
function Yd(e, t) {
  switch (e) {
    case "keyup":
      return Eg.indexOf(t.keyCode) !== -1;
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
function Gd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Gn = !1;
function Cg(e, t) {
  switch (e) {
    case "compositionend":
      return Gd(t);
    case "keypress":
      return t.which !== 32 ? null : (Pc = !0, _c);
    case "textInput":
      return e = t.data, e === _c && Pc ? null : e;
    default:
      return null;
  }
}
function _g(e, t) {
  if (Gn) return e === "compositionend" || !us && Yd(e, t) ? (e = Qd(), li = os = en = null, Gn = !1, e) : null;
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
      return Kd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Nc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pg[e.type] : t === "textarea";
}
function Xd(e, t, n, r) {
  Nd(r), t = _i(t, "onChange"), 0 < t.length && (n = new is("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Vr = null, oo = null;
function Ng(e) {
  up(e, 0);
}
function nl(e) {
  var t = Jn(e);
  if (Sd(t)) return e;
}
function Ag(e, t) {
  if (e === "change") return t;
}
var Zd = !1;
if (Bt) {
  var eu;
  if (Bt) {
    var tu = "oninput" in document;
    if (!tu) {
      var Ac = document.createElement("div");
      Ac.setAttribute("oninput", "return;"), tu = typeof Ac.oninput == "function";
    }
    eu = tu;
  } else eu = !1;
  Zd = eu && (!document.documentMode || 9 < document.documentMode);
}
function Oc() {
  Vr && (Vr.detachEvent("onpropertychange", Jd), oo = Vr = null);
}
function Jd(e) {
  if (e.propertyName === "value" && nl(oo)) {
    var t = [];
    Xd(t, oo, e, qa(e)), Td(Ng, t);
  }
}
function Og(e, t, n) {
  e === "focusin" ? (Oc(), Vr = t, oo = n, Vr.attachEvent("onpropertychange", Jd)) : e === "focusout" && Oc();
}
function Rg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return nl(oo);
}
function Tg(e, t) {
  if (e === "click") return nl(t);
}
function Dg(e, t) {
  if (e === "input" || e === "change") return nl(t);
}
function Lg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Et = typeof Object.is == "function" ? Object.is : Lg;
function io(e, t) {
  if (Et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Mu.call(t, o) || !Et(e[o], t[o])) return !1;
  }
  return !0;
}
function Rc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tc(e, t) {
  var n = Rc(e);
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
    n = Rc(n);
  }
}
function qd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ep() {
  for (var e = window, t = yi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = yi(e.document);
  }
  return t;
}
function as(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Mg(e) {
  var t = ep(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && qd(n.ownerDocument.documentElement, n)) {
    if (r !== null && as(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Tc(n, i);
        var l = Tc(
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
var $g = Bt && "documentMode" in document && 11 >= document.documentMode, Xn = null, qu = null, Hr = null, ea = !1;
function Dc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ea || Xn == null || Xn !== yi(r) || (r = Xn, "selectionStart" in r && as(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Hr && io(Hr, r) || (Hr = r, r = _i(qu, "onSelect"), 0 < r.length && (t = new is("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Xn)));
}
function Bo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Zn = { animationend: Bo("Animation", "AnimationEnd"), animationiteration: Bo("Animation", "AnimationIteration"), animationstart: Bo("Animation", "AnimationStart"), transitionend: Bo("Transition", "TransitionEnd") }, nu = {}, tp = {};
Bt && (tp = document.createElement("div").style, "AnimationEvent" in window || (delete Zn.animationend.animation, delete Zn.animationiteration.animation, delete Zn.animationstart.animation), "TransitionEvent" in window || delete Zn.transitionend.transition);
function rl(e) {
  if (nu[e]) return nu[e];
  if (!Zn[e]) return e;
  var t = Zn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in tp) return nu[e] = t[n];
  return e;
}
var np = rl("animationend"), rp = rl("animationiteration"), op = rl("animationstart"), ip = rl("transitionend"), lp = /* @__PURE__ */ new Map(), Lc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gn(e, t) {
  lp.set(e, t), Bn(t, [e]);
}
for (var ru = 0; ru < Lc.length; ru++) {
  var ou = Lc[ru], jg = ou.toLowerCase(), Ig = ou[0].toUpperCase() + ou.slice(1);
  gn(jg, "on" + Ig);
}
gn(np, "onAnimationEnd");
gn(rp, "onAnimationIteration");
gn(op, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(ip, "onTransitionEnd");
hr("onMouseEnter", ["mouseout", "mouseover"]);
hr("onMouseLeave", ["mouseout", "mouseover"]);
hr("onPointerEnter", ["pointerout", "pointerover"]);
hr("onPointerLeave", ["pointerout", "pointerover"]);
Bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fg = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));
function Mc(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, jv(r, t, void 0, e), e.currentTarget = null;
}
function up(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], a = u.instance, s = u.currentTarget;
        if (u = u.listener, a !== i && o.isPropagationStopped()) break e;
        Mc(o, u, s), i = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], a = u.instance, s = u.currentTarget, u = u.listener, a !== i && o.isPropagationStopped()) break e;
        Mc(o, u, s), i = a;
      }
    }
  }
  if (Si) throw e = Gu, Si = !1, Gu = null, e;
}
function ie(e, t) {
  var n = t[ia];
  n === void 0 && (n = t[ia] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ap(t, e, 2, !1), n.add(r));
}
function iu(e, t, n) {
  var r = 0;
  t && (r |= 4), ap(n, e, r, t);
}
var bo = "_reactListening" + Math.random().toString(36).slice(2);
function lo(e) {
  if (!e[bo]) {
    e[bo] = !0, md.forEach(function(n) {
      n !== "selectionchange" && (Fg.has(n) || iu(n, !1, e), iu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[bo] || (t[bo] = !0, iu("selectionchange", !1, t));
  }
}
function ap(e, t, n, r) {
  switch (Hd(t)) {
    case 1:
      var o = Jv;
      break;
    case 4:
      o = qv;
      break;
    default:
      o = rs;
  }
  n = o.bind(null, t, n, e), o = void 0, !Yu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function lu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var u = r.stateNode.containerInfo;
      if (u === o || u.nodeType === 8 && u.parentNode === o) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var a = l.tag;
        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
        l = l.return;
      }
      for (; u !== null; ) {
        if (l = xn(u), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = i = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Td(function() {
    var s = i, f = qa(n), m = [];
    e: {
      var d = lp.get(e);
      if (d !== void 0) {
        var S = is, g = e;
        switch (e) {
          case "keypress":
            if (ui(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = hg;
            break;
          case "focusin":
            g = "focus", S = ql;
            break;
          case "focusout":
            g = "blur", S = ql;
            break;
          case "beforeblur":
          case "afterblur":
            S = ql;
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
            S = Ec;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = ng;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = gg;
            break;
          case np:
          case rp:
          case op:
            S = ig;
            break;
          case ip:
            S = wg;
            break;
          case "scroll":
            S = eg;
            break;
          case "wheel":
            S = kg;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = ug;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Cc;
        }
        var v = (t & 4) !== 0, C = !v && e === "scroll", p = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var c = s, h; c !== null; ) {
          h = c;
          var w = h.stateNode;
          if (h.tag === 5 && w !== null && (h = w, p !== null && (w = eo(c, p), w != null && v.push(uo(c, w, h)))), C) break;
          c = c.return;
        }
        0 < v.length && (d = new S(d, g, null, n, f), m.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", d && n !== Qu && (g = n.relatedTarget || n.fromElement) && (xn(g) || g[bt])) break e;
        if ((S || d) && (d = f.window === f ? f : (d = f.ownerDocument) ? d.defaultView || d.parentWindow : window, S ? (g = n.relatedTarget || n.toElement, S = s, g = g ? xn(g) : null, g !== null && (C = bn(g), g !== C || g.tag !== 5 && g.tag !== 6) && (g = null)) : (S = null, g = s), S !== g)) {
          if (v = Ec, w = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (v = Cc, w = "onPointerLeave", p = "onPointerEnter", c = "pointer"), C = S == null ? d : Jn(S), h = g == null ? d : Jn(g), d = new v(w, c + "leave", S, n, f), d.target = C, d.relatedTarget = h, w = null, xn(f) === s && (v = new v(p, c + "enter", g, n, f), v.target = h, v.relatedTarget = C, w = v), C = w, S && g) t: {
            for (v = S, p = g, c = 0, h = v; h; h = Wn(h)) c++;
            for (h = 0, w = p; w; w = Wn(w)) h++;
            for (; 0 < c - h; ) v = Wn(v), c--;
            for (; 0 < h - c; ) p = Wn(p), h--;
            for (; c--; ) {
              if (v === p || p !== null && v === p.alternate) break t;
              v = Wn(v), p = Wn(p);
            }
            v = null;
          }
          else v = null;
          S !== null && $c(m, d, S, v, !1), g !== null && C !== null && $c(m, C, g, v, !0);
        }
      }
      e: {
        if (d = s ? Jn(s) : window, S = d.nodeName && d.nodeName.toLowerCase(), S === "select" || S === "input" && d.type === "file") var N = Ag;
        else if (Nc(d)) if (Zd) N = Dg;
        else {
          N = Rg;
          var R = Og;
        }
        else (S = d.nodeName) && S.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (N = Tg);
        if (N && (N = N(e, s))) {
          Xd(m, N, n, f);
          break e;
        }
        R && R(e, d, s), e === "focusout" && (R = d._wrapperState) && R.controlled && d.type === "number" && bu(d, "number", d.value);
      }
      switch (R = s ? Jn(s) : window, e) {
        case "focusin":
          (Nc(R) || R.contentEditable === "true") && (Xn = R, qu = s, Hr = null);
          break;
        case "focusout":
          Hr = qu = Xn = null;
          break;
        case "mousedown":
          ea = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ea = !1, Dc(m, n, f);
          break;
        case "selectionchange":
          if ($g) break;
        case "keydown":
        case "keyup":
          Dc(m, n, f);
      }
      var A;
      if (us) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else Gn ? Yd(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Kd && n.locale !== "ko" && (Gn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Gn && (A = Qd()) : (en = f, os = "value" in en ? en.value : en.textContent, Gn = !0)), R = _i(s, T), 0 < R.length && (T = new xc(T, e, null, n, f), m.push({ event: T, listeners: R }), A ? T.data = A : (A = Gd(n), A !== null && (T.data = A)))), (A = xg ? Cg(e, n) : _g(e, n)) && (s = _i(s, "onBeforeInput"), 0 < s.length && (f = new xc("onBeforeInput", "beforeinput", null, n, f), m.push({ event: f, listeners: s }), f.data = A));
    }
    up(m, t);
  });
}
function uo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _i(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = eo(e, n), i != null && r.unshift(uo(e, i, o)), i = eo(e, t), i != null && r.push(uo(e, i, o))), e = e.return;
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
function $c(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && s !== null && (u = s, o ? (a = eo(n, i), a != null && l.unshift(uo(n, a, u))) : o || (a = eo(n, i), a != null && l.push(uo(n, a, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var zg = /\r\n?/g, Bg = /\u0000|\uFFFD/g;
function jc(e) {
  return (typeof e == "string" ? e : "" + e).replace(zg, `
`).replace(Bg, "");
}
function Uo(e, t, n) {
  if (t = jc(t), jc(e) !== t && n) throw Error(L(425));
}
function Pi() {
}
var ta = null, na = null;
function ra(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var oa = typeof setTimeout == "function" ? setTimeout : void 0, bg = typeof clearTimeout == "function" ? clearTimeout : void 0, Ic = typeof Promise == "function" ? Promise : void 0, Ug = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ic < "u" ? function(e) {
  return Ic.resolve(null).then(e).catch(Wg);
} : oa;
function Wg(e) {
  setTimeout(function() {
    throw e;
  });
}
function uu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), ro(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ro(t);
}
function ln(e) {
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
function Fc(e) {
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
var _r = Math.random().toString(36).slice(2), Pt = "__reactFiber$" + _r, ao = "__reactProps$" + _r, bt = "__reactContainer$" + _r, ia = "__reactEvents$" + _r, Vg = "__reactListeners$" + _r, Hg = "__reactHandles$" + _r;
function xn(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[bt] || n[Pt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Fc(e); e !== null; ) {
        if (n = e[Pt]) return n;
        e = Fc(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Co(e) {
  return e = e[Pt] || e[bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function ol(e) {
  return e[ao] || null;
}
var la = [], qn = -1;
function yn(e) {
  return { current: e };
}
function le(e) {
  0 > qn || (e.current = la[qn], la[qn] = null, qn--);
}
function re(e, t) {
  qn++, la[qn] = e.current, e.current = t;
}
var mn = {}, Ie = yn(mn), Qe = yn(!1), Rn = mn;
function mr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ke(e) {
  return e = e.childContextTypes, e != null;
}
function Ni() {
  le(Qe), le(Ie);
}
function zc(e, t, n) {
  if (Ie.current !== mn) throw Error(L(168));
  re(Ie, t), re(Qe, n);
}
function sp(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, Ov(e) || "Unknown", o));
  return he({}, n, r);
}
function Ai(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mn, Rn = Ie.current, re(Ie, e), re(Qe, Qe.current), !0;
}
function Bc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n ? (e = sp(e, t, Rn), r.__reactInternalMemoizedMergedChildContext = e, le(Qe), le(Ie), re(Ie, e)) : le(Qe), re(Qe, n);
}
var Mt = null, il = !1, au = !1;
function cp(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function Qg(e) {
  il = !0, cp(e);
}
function wn() {
  if (!au && Mt !== null) {
    au = !0;
    var e = 0, t = q;
    try {
      var n = Mt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Mt = null, il = !1;
    } catch (o) {
      throw Mt !== null && (Mt = Mt.slice(e + 1)), $d(es, wn), o;
    } finally {
      q = t, au = !1;
    }
  }
  return null;
}
var er = [], tr = 0, Oi = null, Ri = 0, ut = [], at = 0, Tn = null, $t = 1, jt = "";
function Sn(e, t) {
  er[tr++] = Ri, er[tr++] = Oi, Oi = e, Ri = t;
}
function fp(e, t, n) {
  ut[at++] = $t, ut[at++] = jt, ut[at++] = Tn, Tn = e;
  var r = $t;
  e = jt;
  var o = 32 - St(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - St(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, $t = 1 << 32 - St(t) + o | n << o | r, jt = i + e;
  } else $t = 1 << i | n << o | r, jt = e;
}
function ss(e) {
  e.return !== null && (Sn(e, 1), fp(e, 1, 0));
}
function cs(e) {
  for (; e === Oi; ) Oi = er[--tr], er[tr] = null, Ri = er[--tr], er[tr] = null;
  for (; e === Tn; ) Tn = ut[--at], ut[at] = null, jt = ut[--at], ut[at] = null, $t = ut[--at], ut[at] = null;
}
var qe = null, Ze = null, se = !1, wt = null;
function dp(e, t) {
  var n = st(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function bc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qe = e, Ze = ln(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qe = e, Ze = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tn !== null ? { id: $t, overflow: jt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = st(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qe = e, Ze = null, !0) : !1;
    default:
      return !1;
  }
}
function ua(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function aa(e) {
  if (se) {
    var t = Ze;
    if (t) {
      var n = t;
      if (!bc(e, t)) {
        if (ua(e)) throw Error(L(418));
        t = ln(n.nextSibling);
        var r = qe;
        t && bc(e, t) ? dp(r, n) : (e.flags = e.flags & -4097 | 2, se = !1, qe = e);
      }
    } else {
      if (ua(e)) throw Error(L(418));
      e.flags = e.flags & -4097 | 2, se = !1, qe = e;
    }
  }
}
function Uc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  qe = e;
}
function Wo(e) {
  if (e !== qe) return !1;
  if (!se) return Uc(e), se = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ra(e.type, e.memoizedProps)), t && (t = Ze)) {
    if (ua(e)) throw pp(), Error(L(418));
    for (; t; ) dp(e, t), t = ln(t.nextSibling);
  }
  if (Uc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ze = ln(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ze = null;
    }
  } else Ze = qe ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function pp() {
  for (var e = Ze; e; ) e = ln(e.nextSibling);
}
function vr() {
  Ze = qe = null, se = !1;
}
function fs(e) {
  wt === null ? wt = [e] : wt.push(e);
}
var Kg = Ht.ReactCurrentBatchConfig;
function Lr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var u = o.refs;
        l === null ? delete u[i] : u[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Vo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Wc(e) {
  var t = e._init;
  return t(e._payload);
}
function hp(e) {
  function t(p, c) {
    if (e) {
      var h = p.deletions;
      h === null ? (p.deletions = [c], p.flags |= 16) : h.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), c = c.sibling;
    return null;
  }
  function r(p, c) {
    for (p = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? p.set(c.key, c) : p.set(c.index, c), c = c.sibling;
    return p;
  }
  function o(p, c) {
    return p = cn(p, c), p.index = 0, p.sibling = null, p;
  }
  function i(p, c, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < c ? (p.flags |= 2, c) : h) : (p.flags |= 2, c)) : (p.flags |= 1048576, c);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, c, h, w) {
    return c === null || c.tag !== 6 ? (c = mu(h, p.mode, w), c.return = p, c) : (c = o(c, h), c.return = p, c);
  }
  function a(p, c, h, w) {
    var N = h.type;
    return N === Yn ? f(p, c, h.props.children, w, h.key) : c !== null && (c.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Xt && Wc(N) === c.type) ? (w = o(c, h.props), w.ref = Lr(p, c, h), w.return = p, w) : (w = hi(h.type, h.key, h.props, null, p.mode, w), w.ref = Lr(p, c, h), w.return = p, w);
  }
  function s(p, c, h, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = vu(h, p.mode, w), c.return = p, c) : (c = o(c, h.children || []), c.return = p, c);
  }
  function f(p, c, h, w, N) {
    return c === null || c.tag !== 7 ? (c = Nn(h, p.mode, w, N), c.return = p, c) : (c = o(c, h), c.return = p, c);
  }
  function m(p, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = mu("" + c, p.mode, h), c.return = p, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Lo:
          return h = hi(c.type, c.key, c.props, null, p.mode, h), h.ref = Lr(p, null, c), h.return = p, h;
        case Kn:
          return c = vu(c, p.mode, h), c.return = p, c;
        case Xt:
          var w = c._init;
          return m(p, w(c._payload), h);
      }
      if (Ir(c) || Ar(c)) return c = Nn(c, p.mode, h, null), c.return = p, c;
      Vo(p, c);
    }
    return null;
  }
  function d(p, c, h, w) {
    var N = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return N !== null ? null : u(p, c, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Lo:
          return h.key === N ? a(p, c, h, w) : null;
        case Kn:
          return h.key === N ? s(p, c, h, w) : null;
        case Xt:
          return N = h._init, d(
            p,
            c,
            N(h._payload),
            w
          );
      }
      if (Ir(h) || Ar(h)) return N !== null ? null : f(p, c, h, w, null);
      Vo(p, h);
    }
    return null;
  }
  function S(p, c, h, w, N) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(h) || null, u(c, p, "" + w, N);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Lo:
          return p = p.get(w.key === null ? h : w.key) || null, a(c, p, w, N);
        case Kn:
          return p = p.get(w.key === null ? h : w.key) || null, s(c, p, w, N);
        case Xt:
          var R = w._init;
          return S(p, c, h, R(w._payload), N);
      }
      if (Ir(w) || Ar(w)) return p = p.get(h) || null, f(c, p, w, N, null);
      Vo(c, w);
    }
    return null;
  }
  function g(p, c, h, w) {
    for (var N = null, R = null, A = c, T = c = 0, B = null; A !== null && T < h.length; T++) {
      A.index > T ? (B = A, A = null) : B = A.sibling;
      var F = d(p, A, h[T], w);
      if (F === null) {
        A === null && (A = B);
        break;
      }
      e && A && F.alternate === null && t(p, A), c = i(F, c, T), R === null ? N = F : R.sibling = F, R = F, A = B;
    }
    if (T === h.length) return n(p, A), se && Sn(p, T), N;
    if (A === null) {
      for (; T < h.length; T++) A = m(p, h[T], w), A !== null && (c = i(A, c, T), R === null ? N = A : R.sibling = A, R = A);
      return se && Sn(p, T), N;
    }
    for (A = r(p, A); T < h.length; T++) B = S(A, p, T, h[T], w), B !== null && (e && B.alternate !== null && A.delete(B.key === null ? T : B.key), c = i(B, c, T), R === null ? N = B : R.sibling = B, R = B);
    return e && A.forEach(function(me) {
      return t(p, me);
    }), se && Sn(p, T), N;
  }
  function v(p, c, h, w) {
    var N = Ar(h);
    if (typeof N != "function") throw Error(L(150));
    if (h = N.call(h), h == null) throw Error(L(151));
    for (var R = N = null, A = c, T = c = 0, B = null, F = h.next(); A !== null && !F.done; T++, F = h.next()) {
      A.index > T ? (B = A, A = null) : B = A.sibling;
      var me = d(p, A, F.value, w);
      if (me === null) {
        A === null && (A = B);
        break;
      }
      e && A && me.alternate === null && t(p, A), c = i(me, c, T), R === null ? N = me : R.sibling = me, R = me, A = B;
    }
    if (F.done) return n(
      p,
      A
    ), se && Sn(p, T), N;
    if (A === null) {
      for (; !F.done; T++, F = h.next()) F = m(p, F.value, w), F !== null && (c = i(F, c, T), R === null ? N = F : R.sibling = F, R = F);
      return se && Sn(p, T), N;
    }
    for (A = r(p, A); !F.done; T++, F = h.next()) F = S(A, p, T, F.value, w), F !== null && (e && F.alternate !== null && A.delete(F.key === null ? T : F.key), c = i(F, c, T), R === null ? N = F : R.sibling = F, R = F);
    return e && A.forEach(function(ue) {
      return t(p, ue);
    }), se && Sn(p, T), N;
  }
  function C(p, c, h, w) {
    if (typeof h == "object" && h !== null && h.type === Yn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Lo:
          e: {
            for (var N = h.key, R = c; R !== null; ) {
              if (R.key === N) {
                if (N = h.type, N === Yn) {
                  if (R.tag === 7) {
                    n(p, R.sibling), c = o(R, h.props.children), c.return = p, p = c;
                    break e;
                  }
                } else if (R.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Xt && Wc(N) === R.type) {
                  n(p, R.sibling), c = o(R, h.props), c.ref = Lr(p, R, h), c.return = p, p = c;
                  break e;
                }
                n(p, R);
                break;
              } else t(p, R);
              R = R.sibling;
            }
            h.type === Yn ? (c = Nn(h.props.children, p.mode, w, h.key), c.return = p, p = c) : (w = hi(h.type, h.key, h.props, null, p.mode, w), w.ref = Lr(p, c, h), w.return = p, p = w);
          }
          return l(p);
        case Kn:
          e: {
            for (R = h.key; c !== null; ) {
              if (c.key === R) if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                n(p, c.sibling), c = o(c, h.children || []), c.return = p, p = c;
                break e;
              } else {
                n(p, c);
                break;
              }
              else t(p, c);
              c = c.sibling;
            }
            c = vu(h, p.mode, w), c.return = p, p = c;
          }
          return l(p);
        case Xt:
          return R = h._init, C(p, c, R(h._payload), w);
      }
      if (Ir(h)) return g(p, c, h, w);
      if (Ar(h)) return v(p, c, h, w);
      Vo(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(p, c.sibling), c = o(c, h), c.return = p, p = c) : (n(p, c), c = mu(h, p.mode, w), c.return = p, p = c), l(p)) : n(p, c);
  }
  return C;
}
var gr = hp(!0), mp = hp(!1), Ti = yn(null), Di = null, nr = null, ds = null;
function ps() {
  ds = nr = Di = null;
}
function hs(e) {
  var t = Ti.current;
  le(Ti), e._currentValue = t;
}
function sa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function cr(e, t) {
  Di = e, ds = nr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (He = !0), e.firstContext = null);
}
function ft(e) {
  var t = e._currentValue;
  if (ds !== e) if (e = { context: e, memoizedValue: t, next: null }, nr === null) {
    if (Di === null) throw Error(L(308));
    nr = e, Di.dependencies = { lanes: 0, firstContext: e };
  } else nr = nr.next = e;
  return t;
}
var Cn = null;
function ms(e) {
  Cn === null ? Cn = [e] : Cn.push(e);
}
function vp(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ms(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ut(e, r);
}
function Ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Zt = !1;
function vs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function gp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ft(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Z & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ut(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, ms(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ut(e, n);
}
function ai(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ts(e, n);
  }
}
function Vc(e, t) {
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
function Li(e, t, n, r) {
  var o = e.updateQueue;
  Zt = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var a = u, s = a.next;
    a.next = null, l === null ? i = s : l.next = s, l = a;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, u = f.lastBaseUpdate, u !== l && (u === null ? f.firstBaseUpdate = s : u.next = s, f.lastBaseUpdate = a));
  }
  if (i !== null) {
    var m = o.baseState;
    l = 0, f = s = a = null, u = i;
    do {
      var d = u.lane, S = u.eventTime;
      if ((r & d) === d) {
        f !== null && (f = f.next = {
          eventTime: S,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var g = e, v = u;
          switch (d = t, S = n, v.tag) {
            case 1:
              if (g = v.payload, typeof g == "function") {
                m = g.call(S, m, d);
                break e;
              }
              m = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = v.payload, d = typeof g == "function" ? g.call(S, m, d) : g, d == null) break e;
              m = he({}, m, d);
              break e;
            case 2:
              Zt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [u] : d.push(u));
      } else S = { eventTime: S, lane: d, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, f === null ? (s = f = S, a = m) : f = f.next = S, l |= d;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null) break;
        d = u, u = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
      }
    } while (!0);
    if (f === null && (a = m), o.baseState = a, o.firstBaseUpdate = s, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Ln |= l, e.lanes = l, e.memoizedState = m;
  }
}
function Hc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(L(191, o));
      o.call(r);
    }
  }
}
var _o = {}, Ot = yn(_o), so = yn(_o), co = yn(_o);
function _n(e) {
  if (e === _o) throw Error(L(174));
  return e;
}
function gs(e, t) {
  switch (re(co, t), re(so, e), re(Ot, _o), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Wu(t, e);
  }
  le(Ot), re(Ot, t);
}
function yr() {
  le(Ot), le(so), le(co);
}
function yp(e) {
  _n(co.current);
  var t = _n(Ot.current), n = Wu(t, e.type);
  t !== n && (re(so, e), re(Ot, n));
}
function ys(e) {
  so.current === e && (le(Ot), le(so));
}
var de = yn(0);
function Mi(e) {
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
var su = [];
function ws() {
  for (var e = 0; e < su.length; e++) su[e]._workInProgressVersionPrimary = null;
  su.length = 0;
}
var si = Ht.ReactCurrentDispatcher, cu = Ht.ReactCurrentBatchConfig, Dn = 0, pe = null, ke = null, xe = null, $i = !1, Qr = !1, fo = 0, Yg = 0;
function Me() {
  throw Error(L(321));
}
function Ss(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Et(e[n], t[n])) return !1;
  return !0;
}
function ks(e, t, n, r, o, i) {
  if (Dn = i, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, si.current = e === null || e.memoizedState === null ? Jg : qg, e = n(r, o), Qr) {
    i = 0;
    do {
      if (Qr = !1, fo = 0, 25 <= i) throw Error(L(301));
      i += 1, xe = ke = null, t.updateQueue = null, si.current = ey, e = n(r, o);
    } while (Qr);
  }
  if (si.current = ji, t = ke !== null && ke.next !== null, Dn = 0, xe = ke = pe = null, $i = !1, t) throw Error(L(300));
  return e;
}
function Es() {
  var e = fo !== 0;
  return fo = 0, e;
}
function _t() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return xe === null ? pe.memoizedState = xe = e : xe = xe.next = e, xe;
}
function dt() {
  if (ke === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = xe === null ? pe.memoizedState : xe.next;
  if (t !== null) xe = t, ke = e;
  else {
    if (e === null) throw Error(L(310));
    ke = e, e = { memoizedState: ke.memoizedState, baseState: ke.baseState, baseQueue: ke.baseQueue, queue: ke.queue, next: null }, xe === null ? pe.memoizedState = xe = e : xe = xe.next = e;
  }
  return xe;
}
function po(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fu(e) {
  var t = dt(), n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = ke, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var u = l = null, a = null, s = i;
    do {
      var f = s.lane;
      if ((Dn & f) === f) a !== null && (a = a.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var m = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        a === null ? (u = a = m, l = r) : a = a.next = m, pe.lanes |= f, Ln |= f;
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? l = r : a.next = u, Et(r, t.memoizedState) || (He = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, pe.lanes |= i, Ln |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function du(e) {
  var t = dt(), n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    Et(i, t.memoizedState) || (He = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function wp() {
}
function Sp(e, t) {
  var n = pe, r = dt(), o = t(), i = !Et(r.memoizedState, o);
  if (i && (r.memoizedState = o, He = !0), r = r.queue, xs(xp.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || xe !== null && xe.memoizedState.tag & 1) {
    if (n.flags |= 2048, ho(9, Ep.bind(null, n, r, o, t), void 0, null), Ce === null) throw Error(L(349));
    Dn & 30 || kp(n, t, o);
  }
  return o;
}
function kp(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ep(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Cp(t) && _p(e);
}
function xp(e, t, n) {
  return n(function() {
    Cp(t) && _p(e);
  });
}
function Cp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Et(e, n);
  } catch {
    return !0;
  }
}
function _p(e) {
  var t = Ut(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function Qc(e) {
  var t = _t();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: po, lastRenderedState: e }, t.queue = e, e = e.dispatch = Zg.bind(null, pe, e), [t.memoizedState, e];
}
function ho(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Pp() {
  return dt().memoizedState;
}
function ci(e, t, n, r) {
  var o = _t();
  pe.flags |= e, o.memoizedState = ho(1 | t, n, void 0, r === void 0 ? null : r);
}
function ll(e, t, n, r) {
  var o = dt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ke !== null) {
    var l = ke.memoizedState;
    if (i = l.destroy, r !== null && Ss(r, l.deps)) {
      o.memoizedState = ho(t, n, i, r);
      return;
    }
  }
  pe.flags |= e, o.memoizedState = ho(1 | t, n, i, r);
}
function Kc(e, t) {
  return ci(8390656, 8, e, t);
}
function xs(e, t) {
  return ll(2048, 8, e, t);
}
function Np(e, t) {
  return ll(4, 2, e, t);
}
function Ap(e, t) {
  return ll(4, 4, e, t);
}
function Op(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Rp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ll(4, 4, Op.bind(null, t, e), n);
}
function Cs() {
}
function Tp(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ss(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Dp(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ss(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Lp(e, t, n) {
  return Dn & 21 ? (Et(n, t) || (n = Fd(), pe.lanes |= n, Ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, He = !0), e.memoizedState = n);
}
function Gg(e, t) {
  var n = q;
  q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = cu.transition;
  cu.transition = {};
  try {
    e(!1), t();
  } finally {
    q = n, cu.transition = r;
  }
}
function Mp() {
  return dt().memoizedState;
}
function Xg(e, t, n) {
  var r = sn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $p(e)) jp(t, n);
  else if (n = vp(e, t, n, r), n !== null) {
    var o = ze();
    kt(n, e, r, o), Ip(n, t, r);
  }
}
function Zg(e, t, n) {
  var r = sn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($p(e)) jp(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, u = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = u, Et(u, l)) {
        var a = t.interleaved;
        a === null ? (o.next = o, ms(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = vp(e, t, o, r), n !== null && (o = ze(), kt(n, e, r, o), Ip(n, t, r));
  }
}
function $p(e) {
  var t = e.alternate;
  return e === pe || t !== null && t === pe;
}
function jp(e, t) {
  Qr = $i = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ip(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ts(e, n);
  }
}
var ji = { readContext: ft, useCallback: Me, useContext: Me, useEffect: Me, useImperativeHandle: Me, useInsertionEffect: Me, useLayoutEffect: Me, useMemo: Me, useReducer: Me, useRef: Me, useState: Me, useDebugValue: Me, useDeferredValue: Me, useTransition: Me, useMutableSource: Me, useSyncExternalStore: Me, useId: Me, unstable_isNewReconciler: !1 }, Jg = { readContext: ft, useCallback: function(e, t) {
  return _t().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ft, useEffect: Kc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ci(
    4194308,
    4,
    Op.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ci(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ci(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = _t();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = _t();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Xg.bind(null, pe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = _t();
  return e = { current: e }, t.memoizedState = e;
}, useState: Qc, useDebugValue: Cs, useDeferredValue: function(e) {
  return _t().memoizedState = e;
}, useTransition: function() {
  var e = Qc(!1), t = e[0];
  return e = Gg.bind(null, e[1]), _t().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = pe, o = _t();
  if (se) {
    if (n === void 0) throw Error(L(407));
    n = n();
  } else {
    if (n = t(), Ce === null) throw Error(L(349));
    Dn & 30 || kp(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Kc(xp.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ho(9, Ep.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = _t(), t = Ce.identifierPrefix;
  if (se) {
    var n = jt, r = $t;
    n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = fo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Yg++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, qg = {
  readContext: ft,
  useCallback: Tp,
  useContext: ft,
  useEffect: xs,
  useImperativeHandle: Rp,
  useInsertionEffect: Np,
  useLayoutEffect: Ap,
  useMemo: Dp,
  useReducer: fu,
  useRef: Pp,
  useState: function() {
    return fu(po);
  },
  useDebugValue: Cs,
  useDeferredValue: function(e) {
    var t = dt();
    return Lp(t, ke.memoizedState, e);
  },
  useTransition: function() {
    var e = fu(po)[0], t = dt().memoizedState;
    return [e, t];
  },
  useMutableSource: wp,
  useSyncExternalStore: Sp,
  useId: Mp,
  unstable_isNewReconciler: !1
}, ey = { readContext: ft, useCallback: Tp, useContext: ft, useEffect: xs, useImperativeHandle: Rp, useInsertionEffect: Np, useLayoutEffect: Ap, useMemo: Dp, useReducer: du, useRef: Pp, useState: function() {
  return du(po);
}, useDebugValue: Cs, useDeferredValue: function(e) {
  var t = dt();
  return ke === null ? t.memoizedState = e : Lp(t, ke.memoizedState, e);
}, useTransition: function() {
  var e = du(po)[0], t = dt().memoizedState;
  return [e, t];
}, useMutableSource: wp, useSyncExternalStore: Sp, useId: Mp, unstable_isNewReconciler: !1 };
function gt(e, t) {
  if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ca(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ul = { isMounted: function(e) {
  return (e = e._reactInternals) ? bn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ze(), o = sn(e), i = Ft(r, o);
  i.payload = t, n != null && (i.callback = n), t = un(e, i, o), t !== null && (kt(t, e, o, r), ai(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ze(), o = sn(e), i = Ft(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = un(e, i, o), t !== null && (kt(t, e, o, r), ai(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ze(), r = sn(e), o = Ft(n, r);
  o.tag = 2, t != null && (o.callback = t), t = un(e, o, r), t !== null && (kt(t, e, r, n), ai(t, e, r));
} };
function Yc(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !io(n, r) || !io(o, i) : !0;
}
function Fp(e, t, n) {
  var r = !1, o = mn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ft(i) : (o = Ke(t) ? Rn : Ie.current, r = t.contextTypes, i = (r = r != null) ? mr(e, o) : mn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ul, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Gc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ul.enqueueReplaceState(t, t.state, null);
}
function fa(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, vs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = ft(i) : (i = Ke(t) ? Rn : Ie.current, o.context = mr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ca(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ul.enqueueReplaceState(o, o.state, null), Li(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Av(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function pu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function da(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ty = typeof WeakMap == "function" ? WeakMap : Map;
function zp(e, t, n) {
  n = Ft(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Fi || (Fi = !0, Ea = r), da(e, t);
  }, n;
}
function Bp(e, t, n) {
  n = Ft(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      da(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    da(e, t), typeof r != "function" && (an === null ? an = /* @__PURE__ */ new Set([this]) : an.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Xc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ty();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = my.bind(null, e, t, n), t.then(e, e));
}
function Zc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Jc(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ft(-1, 1), t.tag = 2, un(n, t, 1))), n.lanes |= 1), e);
}
var ny = Ht.ReactCurrentOwner, He = !1;
function Fe(e, t, n, r) {
  t.child = e === null ? mp(t, null, n, r) : gr(t, e.child, n, r);
}
function qc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return cr(t, o), r = ks(e, t, n, r, i, o), n = Es(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Wt(e, t, o)) : (se && n && ss(t), t.flags |= 1, Fe(e, t, r, o), t.child);
}
function ef(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Ds(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, bp(e, t, i, r, o)) : (e = hi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : io, n(l, r) && e.ref === t.ref) return Wt(e, t, o);
  }
  return t.flags |= 1, e = cn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function bp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (io(i, r) && e.ref === t.ref) if (He = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (He = !0);
    else return t.lanes = e.lanes, Wt(e, t, o);
  }
  return pa(e, t, n, r, o);
}
function Up(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, re(or, Xe), Xe |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, re(or, Xe), Xe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, re(or, Xe), Xe |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, re(or, Xe), Xe |= r;
  return Fe(e, t, o, n), t.child;
}
function Wp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function pa(e, t, n, r, o) {
  var i = Ke(n) ? Rn : Ie.current;
  return i = mr(t, i), cr(t, o), n = ks(e, t, n, r, i, o), r = Es(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Wt(e, t, o)) : (se && r && ss(t), t.flags |= 1, Fe(e, t, n, o), t.child);
}
function tf(e, t, n, r, o) {
  if (Ke(n)) {
    var i = !0;
    Ai(t);
  } else i = !1;
  if (cr(t, o), t.stateNode === null) fi(e, t), Fp(t, n, r), fa(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var a = l.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = ft(s) : (s = Ke(n) ? Rn : Ie.current, s = mr(t, s));
    var f = n.getDerivedStateFromProps, m = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || a !== s) && Gc(t, l, r, s), Zt = !1;
    var d = t.memoizedState;
    l.state = d, Li(t, r, l, o), a = t.memoizedState, u !== r || d !== a || Qe.current || Zt ? (typeof f == "function" && (ca(t, n, f, r), a = t.memoizedState), (u = Zt || Yc(t, n, u, r, d, a, s)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = s, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, gp(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : gt(t.type, u), l.props = s, m = t.pendingProps, d = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = ft(a) : (a = Ke(n) ? Rn : Ie.current, a = mr(t, a));
    var S = n.getDerivedStateFromProps;
    (f = typeof S == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== m || d !== a) && Gc(t, l, r, a), Zt = !1, d = t.memoizedState, l.state = d, Li(t, r, l, o);
    var g = t.memoizedState;
    u !== m || d !== g || Qe.current || Zt ? (typeof S == "function" && (ca(t, n, S, r), g = t.memoizedState), (s = Zt || Yc(t, n, s, r, d, g, a) || !1) ? (f || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), l.props = r, l.state = g, l.context = a, r = s) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ha(e, t, n, r, i, o);
}
function ha(e, t, n, r, o, i) {
  Wp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Bc(t, n, !1), Wt(e, t, i);
  r = t.stateNode, ny.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = gr(t, e.child, null, i), t.child = gr(t, null, u, i)) : Fe(e, t, u, i), t.memoizedState = r.state, o && Bc(t, n, !0), t.child;
}
function Vp(e) {
  var t = e.stateNode;
  t.pendingContext ? zc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && zc(e, t.context, !1), gs(e, t.containerInfo);
}
function nf(e, t, n, r, o) {
  return vr(), fs(o), t.flags |= 256, Fe(e, t, n, r), t.child;
}
var ma = { dehydrated: null, treeContext: null, retryLane: 0 };
function va(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hp(e, t, n) {
  var r = t.pendingProps, o = de.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), re(de, o & 1), e === null)
    return aa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = cl(l, r, 0, null), e = Nn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = va(n), t.memoizedState = ma, e) : _s(t, l));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null)) return ry(e, t, l, r, u, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, u = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = cn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? i = cn(u, i) : (i = Nn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? va(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = ma, r;
  }
  return i = e.child, e = i.sibling, r = cn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function _s(e, t) {
  return t = cl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ho(e, t, n, r) {
  return r !== null && fs(r), gr(t, e.child, null, n), e = _s(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ry(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = pu(Error(L(422))), Ho(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = cl({ mode: "visible", children: r.children }, o, 0, null), i = Nn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && gr(t, e.child, null, l), t.child.memoizedState = va(l), t.memoizedState = ma, i);
  if (!(t.mode & 1)) return Ho(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(L(419)), r = pu(i, r, void 0), Ho(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, He || u) {
    if (r = Ce, r !== null) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Ut(e, o), kt(r, e, o, -1));
    }
    return Ts(), r = pu(Error(L(421))), Ho(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = vy.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ze = ln(o.nextSibling), qe = t, se = !0, wt = null, e !== null && (ut[at++] = $t, ut[at++] = jt, ut[at++] = Tn, $t = e.id, jt = e.overflow, Tn = t), t = _s(t, r.children), t.flags |= 4096, t);
}
function rf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), sa(e.return, t, n);
}
function hu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Qp(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Fe(e, t, r.children, n), r = de.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && rf(e, n, t);
      else if (e.tag === 19) rf(e, n, t);
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
  if (re(de, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Mi(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), hu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Mi(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      hu(t, !0, n, null, i);
      break;
    case "together":
      hu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function fi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Wt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = cn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function oy(e, t, n) {
  switch (t.tag) {
    case 3:
      Vp(t), vr();
      break;
    case 5:
      yp(t);
      break;
    case 1:
      Ke(t.type) && Ai(t);
      break;
    case 4:
      gs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      re(Ti, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (re(de, de.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Hp(e, t, n) : (re(de, de.current & 1), e = Wt(e, t, n), e !== null ? e.sibling : null);
      re(de, de.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Qp(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), re(de, de.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Up(e, t, n);
  }
  return Wt(e, t, n);
}
var Kp, ga, Yp, Gp;
Kp = function(e, t) {
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
ga = function() {
};
Yp = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, _n(Ot.current);
    var i = null;
    switch (n) {
      case "input":
        o = zu(e, o), r = zu(e, r), i = [];
        break;
      case "select":
        o = he({}, o, { value: void 0 }), r = he({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Uu(e, o), r = Uu(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Pi);
    }
    Vu(n, r);
    var l;
    n = null;
    for (s in o) if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null) if (s === "style") {
      var u = o[s];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Jr.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (u = o != null ? o[s] : void 0, r.hasOwnProperty(s) && a !== u && (a != null || u != null)) if (s === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && u[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (i || (i = []), i.push(
        s,
        n
      )), n = a;
      else s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Jr.hasOwnProperty(s) ? (a != null && s === "onScroll" && ie("scroll", e), i || u === a || (i = [])) : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Gp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mr(e, t) {
  if (!se) switch (e.tailMode) {
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
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function iy(e, t, n) {
  var r = t.pendingProps;
  switch (cs(t), t.tag) {
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
      return $e(t), null;
    case 1:
      return Ke(t.type) && Ni(), $e(t), null;
    case 3:
      return r = t.stateNode, yr(), le(Qe), le(Ie), ws(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Wo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (_a(wt), wt = null))), ga(e, t), $e(t), null;
    case 5:
      ys(t);
      var o = _n(co.current);
      if (n = t.type, e !== null && t.stateNode != null) Yp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return $e(t), null;
        }
        if (e = _n(Ot.current), Wo(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Pt] = t, r[ao] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < zr.length; o++) ie(zr[o], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie(
                "error",
                r
              ), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              dc(r, i), ie("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ie("invalid", r);
              break;
            case "textarea":
              hc(r, i), ie("invalid", r);
          }
          Vu(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var u = i[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Uo(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Uo(
              r.textContent,
              u,
              e
            ), o = ["children", "" + u]) : Jr.hasOwnProperty(l) && u != null && l === "onScroll" && ie("scroll", r);
          }
          switch (n) {
            case "input":
              Mo(r), pc(r, i, !0);
              break;
            case "textarea":
              Mo(r), mc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Pi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Pt] = t, e[ao] = r, Kp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Hu(n, r), n) {
              case "dialog":
                ie("cancel", e), ie("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < zr.length; o++) ie(zr[o], e);
                o = r;
                break;
              case "source":
                ie("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ie(
                  "error",
                  e
                ), ie("load", e), o = r;
                break;
              case "details":
                ie("toggle", e), o = r;
                break;
              case "input":
                dc(e, r), o = zu(e, r), ie("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = he({}, r, { value: void 0 }), ie("invalid", e);
                break;
              case "textarea":
                hc(e, r), o = Uu(e, r), ie("invalid", e);
                break;
              default:
                o = r;
            }
            Vu(n, o), u = o;
            for (i in u) if (u.hasOwnProperty(i)) {
              var a = u[i];
              i === "style" ? Pd(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Cd(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && qr(e, a) : typeof a == "number" && qr(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Jr.hasOwnProperty(i) ? a != null && i === "onScroll" && ie("scroll", e) : a != null && Ga(e, i, a, l));
            }
            switch (n) {
              case "input":
                Mo(e), pc(e, r, !1);
                break;
              case "textarea":
                Mo(e), mc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hn(r.value));
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
                typeof o.onClick == "function" && (e.onclick = Pi);
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
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) Gp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (n = _n(co.current), _n(Ot.current), Wo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Pt] = t, (i = r.nodeValue !== n) && (e = qe, e !== null)) switch (e.tag) {
            case 3:
              Uo(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Uo(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Pt] = t, t.stateNode = r;
      }
      return $e(t), null;
    case 13:
      if (le(de), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (se && Ze !== null && t.mode & 1 && !(t.flags & 128)) pp(), vr(), t.flags |= 98560, i = !1;
        else if (i = Wo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(L(317));
            i[Pt] = t;
          } else vr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), i = !1;
        } else wt !== null && (_a(wt), wt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || de.current & 1 ? Ee === 0 && (Ee = 3) : Ts())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return yr(), ga(e, t), e === null && lo(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return hs(t.type._context), $e(t), null;
    case 17:
      return Ke(t.type) && Ni(), $e(t), null;
    case 19:
      if (le(de), i = t.memoizedState, i === null) return $e(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) Mr(i, !1);
      else {
        if (Ee !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Mi(e), l !== null) {
            for (t.flags |= 128, Mr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return re(de, de.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ge() > Sr && (t.flags |= 128, r = !0, Mr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Mi(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Mr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !se) return $e(t), null;
        } else 2 * ge() - i.renderingStartTime > Sr && n !== 1073741824 && (t.flags |= 128, r = !0, Mr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ge(), t.sibling = null, n = de.current, re(de, r ? n & 1 | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return Rs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Xe & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function ly(e, t) {
  switch (cs(t), t.tag) {
    case 1:
      return Ke(t.type) && Ni(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return yr(), le(Qe), le(Ie), ws(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ys(t), null;
    case 13:
      if (le(de), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(L(340));
        vr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return le(de), null;
    case 4:
      return yr(), null;
    case 10:
      return hs(t.type._context), null;
    case 22:
    case 23:
      return Rs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Qo = !1, je = !1, uy = typeof WeakSet == "function" ? WeakSet : Set, I = null;
function rr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ve(e, t, r);
  }
  else n.current = null;
}
function ya(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var of = !1;
function ay(e, t) {
  if (ta = xi, e = ep(), as(e)) {
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
        var l = 0, u = -1, a = -1, s = 0, f = 0, m = e, d = null;
        t: for (; ; ) {
          for (var S; m !== n || o !== 0 && m.nodeType !== 3 || (u = l + o), m !== i || r !== 0 && m.nodeType !== 3 || (a = l + r), m.nodeType === 3 && (l += m.nodeValue.length), (S = m.firstChild) !== null; )
            d = m, m = S;
          for (; ; ) {
            if (m === e) break t;
            if (d === n && ++s === o && (u = l), d === i && ++f === r && (a = l), (S = m.nextSibling) !== null) break;
            m = d, d = m.parentNode;
          }
          m = S;
        }
        n = u === -1 || a === -1 ? null : { start: u, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (na = { focusedElem: e, selectionRange: n }, xi = !1, I = t; I !== null; ) if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
  else for (; I !== null; ) {
    t = I;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var v = g.memoizedProps, C = g.memoizedState, p = t.stateNode, c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : gt(t.type, v), C);
            p.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(L(163));
      }
    } catch (w) {
      ve(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, I = e;
      break;
    }
    I = t.return;
  }
  return g = of, of = !1, g;
}
function Kr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && ya(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function al(e, t) {
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
function wa(e) {
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
function Xp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Xp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Pt], delete t[ao], delete t[ia], delete t[Vg], delete t[Hg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Zp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lf(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Pi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Sa(e, t, n), e = e.sibling; e !== null; ) Sa(e, t, n), e = e.sibling;
}
function ka(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ka(e, t, n), e = e.sibling; e !== null; ) ka(e, t, n), e = e.sibling;
}
var Ne = null, yt = !1;
function Yt(e, t, n) {
  for (n = n.child; n !== null; ) Jp(e, t, n), n = n.sibling;
}
function Jp(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == "function") try {
    At.onCommitFiberUnmount(el, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      je || rr(n, t);
    case 6:
      var r = Ne, o = yt;
      Ne = null, Yt(e, t, n), Ne = r, yt = o, Ne !== null && (yt ? (e = Ne, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null && (yt ? (e = Ne, n = n.stateNode, e.nodeType === 8 ? uu(e.parentNode, n) : e.nodeType === 1 && uu(e, n), ro(e)) : uu(Ne, n.stateNode));
      break;
    case 4:
      r = Ne, o = yt, Ne = n.stateNode.containerInfo, yt = !0, Yt(e, t, n), Ne = r, yt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!je && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && ya(n, t, l), o = o.next;
        } while (o !== r);
      }
      Yt(e, t, n);
      break;
    case 1:
      if (!je && (rr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        ve(n, t, u);
      }
      Yt(e, t, n);
      break;
    case 21:
      Yt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (je = (r = je) || n.memoizedState !== null, Yt(e, t, n), je = r) : Yt(e, t, n);
      break;
    default:
      Yt(e, t, n);
  }
}
function uf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new uy()), t.forEach(function(r) {
      var o = gy.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function vt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            Ne = u.stateNode, yt = !1;
            break e;
          case 3:
            Ne = u.stateNode.containerInfo, yt = !0;
            break e;
          case 4:
            Ne = u.stateNode.containerInfo, yt = !0;
            break e;
        }
        u = u.return;
      }
      if (Ne === null) throw Error(L(160));
      Jp(i, l, o), Ne = null, yt = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (s) {
      ve(o, t, s);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) qp(t, e), t = t.sibling;
}
function qp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (vt(t, e), Ct(e), r & 4) {
        try {
          Kr(3, e, e.return), al(3, e);
        } catch (v) {
          ve(e, e.return, v);
        }
        try {
          Kr(5, e, e.return);
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      break;
    case 1:
      vt(t, e), Ct(e), r & 512 && n !== null && rr(n, n.return);
      break;
    case 5:
      if (vt(t, e), Ct(e), r & 512 && n !== null && rr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          qr(o, "");
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && i.type === "radio" && i.name != null && kd(o, i), Hu(u, l);
          var s = Hu(u, i);
          for (l = 0; l < a.length; l += 2) {
            var f = a[l], m = a[l + 1];
            f === "style" ? Pd(o, m) : f === "dangerouslySetInnerHTML" ? Cd(o, m) : f === "children" ? qr(o, m) : Ga(o, f, m, s);
          }
          switch (u) {
            case "input":
              Bu(o, i);
              break;
            case "textarea":
              Ed(o, i);
              break;
            case "select":
              var d = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var S = i.value;
              S != null ? lr(o, !!i.multiple, S, !1) : d !== !!i.multiple && (i.defaultValue != null ? lr(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : lr(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[ao] = i;
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      break;
    case 6:
      if (vt(t, e), Ct(e), r & 4) {
        if (e.stateNode === null) throw Error(L(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      break;
    case 3:
      if (vt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ro(t.containerInfo);
      } catch (v) {
        ve(e, e.return, v);
      }
      break;
    case 4:
      vt(t, e), Ct(e);
      break;
    case 13:
      vt(t, e), Ct(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (As = ge())), r & 4 && uf(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (je = (s = je) || f, vt(t, e), je = s) : vt(t, e), Ct(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !f && e.mode & 1) for (I = e, f = e.child; f !== null; ) {
          for (m = I = f; I !== null; ) {
            switch (d = I, S = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Kr(4, d, d.return);
                break;
              case 1:
                rr(d, d.return);
                var g = d.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (v) {
                    ve(r, n, v);
                  }
                }
                break;
              case 5:
                rr(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  sf(m);
                  continue;
                }
            }
            S !== null ? (S.return = d, I = S) : sf(m);
          }
          f = f.sibling;
        }
        e: for (f = null, m = e; ; ) {
          if (m.tag === 5) {
            if (f === null) {
              f = m;
              try {
                o = m.stateNode, s ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, a = m.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = _d("display", l));
              } catch (v) {
                ve(e, e.return, v);
              }
            }
          } else if (m.tag === 6) {
            if (f === null) try {
              m.stateNode.nodeValue = s ? "" : m.memoizedProps;
            } catch (v) {
              ve(e, e.return, v);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            f === m && (f = null), m = m.return;
          }
          f === m && (f = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      vt(t, e), Ct(e), r & 4 && uf(e);
      break;
    case 21:
      break;
    default:
      vt(
        t,
        e
      ), Ct(e);
  }
}
function Ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (qr(o, ""), r.flags &= -33);
          var i = lf(e);
          ka(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = lf(e);
          Sa(e, u, l);
          break;
        default:
          throw Error(L(161));
      }
    } catch (a) {
      ve(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sy(e, t, n) {
  I = e, eh(e);
}
function eh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Qo;
      if (!l) {
        var u = o.alternate, a = u !== null && u.memoizedState !== null || je;
        u = Qo;
        var s = je;
        if (Qo = l, (je = a) && !s) for (I = o; I !== null; ) l = I, a = l.child, l.tag === 22 && l.memoizedState !== null ? cf(o) : a !== null ? (a.return = l, I = a) : cf(o);
        for (; i !== null; ) I = i, eh(i), i = i.sibling;
        I = o, Qo = u, je = s;
      }
      af(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, I = i) : af(e);
  }
}
function af(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            je || al(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !je) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Hc(t, i, r);
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
              Hc(t, l, n);
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
                var f = s.memoizedState;
                if (f !== null) {
                  var m = f.dehydrated;
                  m !== null && ro(m);
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
            throw Error(L(163));
        }
        je || t.flags & 512 && wa(t);
      } catch (d) {
        ve(t, t.return, d);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function sf(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function cf(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            al(4, t);
          } catch (a) {
            ve(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ve(t, o, a);
            }
          }
          var i = t.return;
          try {
            wa(t);
          } catch (a) {
            ve(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            wa(t);
          } catch (a) {
            ve(t, l, a);
          }
      }
    } catch (a) {
      ve(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, I = u;
      break;
    }
    I = t.return;
  }
}
var cy = Math.ceil, Ii = Ht.ReactCurrentDispatcher, Ps = Ht.ReactCurrentOwner, ct = Ht.ReactCurrentBatchConfig, Z = 0, Ce = null, we = null, Re = 0, Xe = 0, or = yn(0), Ee = 0, mo = null, Ln = 0, sl = 0, Ns = 0, Yr = null, Ve = null, As = 0, Sr = 1 / 0, Lt = null, Fi = !1, Ea = null, an = null, Ko = !1, tn = null, zi = 0, Gr = 0, xa = null, di = -1, pi = 0;
function ze() {
  return Z & 6 ? ge() : di !== -1 ? di : di = ge();
}
function sn(e) {
  return e.mode & 1 ? Z & 2 && Re !== 0 ? Re & -Re : Kg.transition !== null ? (pi === 0 && (pi = Fd()), pi) : (e = q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hd(e.type)), e) : 1;
}
function kt(e, t, n, r) {
  if (50 < Gr) throw Gr = 0, xa = null, Error(L(185));
  Eo(e, n, r), (!(Z & 2) || e !== Ce) && (e === Ce && (!(Z & 2) && (sl |= n), Ee === 4 && qt(e, Re)), Ye(e, r), n === 1 && Z === 0 && !(t.mode & 1) && (Sr = ge() + 500, il && wn()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  Kv(e, t);
  var r = Ei(e, e === Ce ? Re : 0);
  if (r === 0) n !== null && yc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && yc(n), t === 1) e.tag === 0 ? Qg(ff.bind(null, e)) : cp(ff.bind(null, e)), Ug(function() {
      !(Z & 6) && wn();
    }), n = null;
    else {
      switch (zd(r)) {
        case 1:
          n = es;
          break;
        case 4:
          n = jd;
          break;
        case 16:
          n = ki;
          break;
        case 536870912:
          n = Id;
          break;
        default:
          n = ki;
      }
      n = ah(n, th.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function th(e, t) {
  if (di = -1, pi = 0, Z & 6) throw Error(L(327));
  var n = e.callbackNode;
  if (fr() && e.callbackNode !== n) return null;
  var r = Ei(e, e === Ce ? Re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Bi(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var i = rh();
    (Ce !== e || Re !== t) && (Lt = null, Sr = ge() + 500, Pn(e, t));
    do
      try {
        py();
        break;
      } catch (u) {
        nh(e, u);
      }
    while (!0);
    ps(), Ii.current = i, Z = o, we !== null ? t = 0 : (Ce = null, Re = 0, t = Ee);
  }
  if (t !== 0) {
    if (t === 2 && (o = Xu(e), o !== 0 && (r = o, t = Ca(e, o))), t === 1) throw n = mo, Pn(e, 0), qt(e, r), Ye(e, ge()), n;
    if (t === 6) qt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !fy(o) && (t = Bi(e, r), t === 2 && (i = Xu(e), i !== 0 && (r = i, t = Ca(e, i))), t === 1)) throw n = mo, Pn(e, 0), qt(e, r), Ye(e, ge()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          kn(e, Ve, Lt);
          break;
        case 3:
          if (qt(e, r), (r & 130023424) === r && (t = As + 500 - ge(), 10 < t)) {
            if (Ei(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              ze(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = oa(kn.bind(null, e, Ve, Lt), t);
            break;
          }
          kn(e, Ve, Lt);
          break;
        case 4:
          if (qt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - St(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = oa(kn.bind(null, e, Ve, Lt), r);
            break;
          }
          kn(e, Ve, Lt);
          break;
        case 5:
          kn(e, Ve, Lt);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Ye(e, ge()), e.callbackNode === n ? th.bind(null, e) : null;
}
function Ca(e, t) {
  var n = Yr;
  return e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256), e = Bi(e, t), e !== 2 && (t = Ve, Ve = n, t !== null && _a(t)), e;
}
function _a(e) {
  Ve === null ? Ve = e : Ve.push.apply(Ve, e);
}
function fy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Et(i(), o)) return !1;
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
function qt(e, t) {
  for (t &= ~Ns, t &= ~sl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - St(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ff(e) {
  if (Z & 6) throw Error(L(327));
  fr();
  var t = Ei(e, 0);
  if (!(t & 1)) return Ye(e, ge()), null;
  var n = Bi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xu(e);
    r !== 0 && (t = r, n = Ca(e, r));
  }
  if (n === 1) throw n = mo, Pn(e, 0), qt(e, t), Ye(e, ge()), n;
  if (n === 6) throw Error(L(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, kn(e, Ve, Lt), Ye(e, ge()), null;
}
function Os(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    Z = n, Z === 0 && (Sr = ge() + 500, il && wn());
  }
}
function Mn(e) {
  tn !== null && tn.tag === 0 && !(Z & 6) && fr();
  var t = Z;
  Z |= 1;
  var n = ct.transition, r = q;
  try {
    if (ct.transition = null, q = 1, e) return e();
  } finally {
    q = r, ct.transition = n, Z = t, !(Z & 6) && wn();
  }
}
function Rs() {
  Xe = or.current, le(or);
}
function Pn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, bg(n)), we !== null) for (n = we.return; n !== null; ) {
    var r = n;
    switch (cs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ni();
        break;
      case 3:
        yr(), le(Qe), le(Ie), ws();
        break;
      case 5:
        ys(r);
        break;
      case 4:
        yr();
        break;
      case 13:
        le(de);
        break;
      case 19:
        le(de);
        break;
      case 10:
        hs(r.type._context);
        break;
      case 22:
      case 23:
        Rs();
    }
    n = n.return;
  }
  if (Ce = e, we = e = cn(e.current, null), Re = Xe = t, Ee = 0, mo = null, Ns = sl = Ln = 0, Ve = Yr = null, Cn !== null) {
    for (t = 0; t < Cn.length; t++) if (n = Cn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    Cn = null;
  }
  return e;
}
function nh(e, t) {
  do {
    var n = we;
    try {
      if (ps(), si.current = ji, $i) {
        for (var r = pe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        $i = !1;
      }
      if (Dn = 0, xe = ke = pe = null, Qr = !1, fo = 0, Ps.current = null, n === null || n.return === null) {
        Ee = 1, mo = t, we = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, a = t;
        if (t = Re, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var s = a, f = u, m = f.tag;
          if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var d = f.alternate;
            d ? (f.updateQueue = d.updateQueue, f.memoizedState = d.memoizedState, f.lanes = d.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var S = Zc(l);
          if (S !== null) {
            S.flags &= -257, Jc(S, l, u, i, t), S.mode & 1 && Xc(i, s, t), t = S, a = s;
            var g = t.updateQueue;
            if (g === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Xc(i, s, t), Ts();
              break e;
            }
            a = Error(L(426));
          }
        } else if (se && u.mode & 1) {
          var C = Zc(l);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Jc(C, l, u, i, t), fs(wr(a, u));
            break e;
          }
        }
        i = a = wr(a, u), Ee !== 4 && (Ee = 2), Yr === null ? Yr = [i] : Yr.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = zp(i, a, t);
              Vc(i, p);
              break e;
            case 1:
              u = a;
              var c = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (an === null || !an.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Bp(i, u, t);
                Vc(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ih(n);
    } catch (N) {
      t = N, we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function rh() {
  var e = Ii.current;
  return Ii.current = ji, e === null ? ji : e;
}
function Ts() {
  (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4), Ce === null || !(Ln & 268435455) && !(sl & 268435455) || qt(Ce, Re);
}
function Bi(e, t) {
  var n = Z;
  Z |= 2;
  var r = rh();
  (Ce !== e || Re !== t) && (Lt = null, Pn(e, t));
  do
    try {
      dy();
      break;
    } catch (o) {
      nh(e, o);
    }
  while (!0);
  if (ps(), Z = n, Ii.current = r, we !== null) throw Error(L(261));
  return Ce = null, Re = 0, Ee;
}
function dy() {
  for (; we !== null; ) oh(we);
}
function py() {
  for (; we !== null && !Fv(); ) oh(we);
}
function oh(e) {
  var t = uh(e.alternate, e, Xe);
  e.memoizedProps = e.pendingProps, t === null ? ih(e) : we = t, Ps.current = null;
}
function ih(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = ly(n, t), n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ee = 6, we = null;
        return;
      }
    } else if (n = iy(n, t, Xe), n !== null) {
      we = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function kn(e, t, n) {
  var r = q, o = ct.transition;
  try {
    ct.transition = null, q = 1, hy(e, t, n, r);
  } finally {
    ct.transition = o, q = r;
  }
  return null;
}
function hy(e, t, n, r) {
  do
    fr();
  while (tn !== null);
  if (Z & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(L(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Yv(e, i), e === Ce && (we = Ce = null, Re = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ko || (Ko = !0, ah(ki, function() {
    return fr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = ct.transition, ct.transition = null;
    var l = q;
    q = 1;
    var u = Z;
    Z |= 4, Ps.current = null, ay(e, n), qp(n, e), Mg(na), xi = !!ta, na = ta = null, e.current = n, sy(n), zv(), Z = u, q = l, ct.transition = i;
  } else e.current = n;
  if (Ko && (Ko = !1, tn = e, zi = o), i = e.pendingLanes, i === 0 && (an = null), Uv(n.stateNode), Ye(e, ge()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Fi) throw Fi = !1, e = Ea, Ea = null, e;
  return zi & 1 && e.tag !== 0 && fr(), i = e.pendingLanes, i & 1 ? e === xa ? Gr++ : (Gr = 0, xa = e) : Gr = 0, wn(), null;
}
function fr() {
  if (tn !== null) {
    var e = zd(zi), t = ct.transition, n = q;
    try {
      if (ct.transition = null, q = 16 > e ? 16 : e, tn === null) var r = !1;
      else {
        if (e = tn, tn = null, zi = 0, Z & 6) throw Error(L(331));
        var o = Z;
        for (Z |= 4, I = e.current; I !== null; ) {
          var i = I, l = i.child;
          if (I.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (I = s; I !== null; ) {
                  var f = I;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kr(8, f, i);
                  }
                  var m = f.child;
                  if (m !== null) m.return = f, I = m;
                  else for (; I !== null; ) {
                    f = I;
                    var d = f.sibling, S = f.return;
                    if (Xp(f), f === s) {
                      I = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = S, I = d;
                      break;
                    }
                    I = S;
                  }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var C = v.sibling;
                    v.sibling = null, v = C;
                  } while (v !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, I = l;
          else e: for (; I !== null; ) {
            if (i = I, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Kr(9, i, i.return);
            }
            var p = i.sibling;
            if (p !== null) {
              p.return = i.return, I = p;
              break e;
            }
            I = i.return;
          }
        }
        var c = e.current;
        for (I = c; I !== null; ) {
          l = I;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) h.return = l, I = h;
          else e: for (l = c; I !== null; ) {
            if (u = I, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  al(9, u);
              }
            } catch (N) {
              ve(u, u.return, N);
            }
            if (u === l) {
              I = null;
              break e;
            }
            var w = u.sibling;
            if (w !== null) {
              w.return = u.return, I = w;
              break e;
            }
            I = u.return;
          }
        }
        if (Z = o, wn(), At && typeof At.onPostCommitFiberRoot == "function") try {
          At.onPostCommitFiberRoot(el, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      q = n, ct.transition = t;
    }
  }
  return !1;
}
function df(e, t, n) {
  t = wr(n, t), t = zp(e, t, 1), e = un(e, t, 1), t = ze(), e !== null && (Eo(e, 1, t), Ye(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) df(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      df(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (an === null || !an.has(r))) {
        e = wr(n, e), e = Bp(t, e, 1), t = un(t, e, 1), e = ze(), t !== null && (Eo(t, 1, e), Ye(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function my(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ze(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (Re & n) === n && (Ee === 4 || Ee === 3 && (Re & 130023424) === Re && 500 > ge() - As ? Pn(e, 0) : Ns |= n), Ye(e, t);
}
function lh(e, t) {
  t === 0 && (e.mode & 1 ? (t = Io, Io <<= 1, !(Io & 130023424) && (Io = 4194304)) : t = 1);
  var n = ze();
  e = Ut(e, t), e !== null && (Eo(e, t, n), Ye(e, n));
}
function vy(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), lh(e, n);
}
function gy(e, t) {
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
      throw Error(L(314));
  }
  r !== null && r.delete(t), lh(e, n);
}
var uh;
uh = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Qe.current) He = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return He = !1, oy(e, t, n);
    He = !!(e.flags & 131072);
  }
  else He = !1, se && t.flags & 1048576 && fp(t, Ri, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      fi(e, t), e = t.pendingProps;
      var o = mr(t, Ie.current);
      cr(t, n), o = ks(null, t, r, e, o, n);
      var i = Es();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (i = !0, Ai(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, vs(t), o.updater = ul, t.stateNode = o, o._reactInternals = t, fa(t, r, e, n), t = ha(null, t, r, !0, i, n)) : (t.tag = 0, se && i && ss(t), Fe(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (fi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = wy(r), e = gt(r, e), o) {
          case 0:
            t = pa(null, t, r, e, n);
            break e;
          case 1:
            t = tf(null, t, r, e, n);
            break e;
          case 11:
            t = qc(null, t, r, e, n);
            break e;
          case 14:
            t = ef(null, t, r, gt(r.type, e), n);
            break e;
        }
        throw Error(L(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : gt(r, o), pa(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : gt(r, o), tf(e, t, r, o, n);
    case 3:
      e: {
        if (Vp(t), e === null) throw Error(L(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, gp(e, t), Li(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = wr(Error(L(423)), t), t = nf(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = wr(Error(L(424)), t), t = nf(e, t, r, n, o);
          break e;
        } else for (Ze = ln(t.stateNode.containerInfo.firstChild), qe = t, se = !0, wt = null, n = mp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (vr(), r === o) {
            t = Wt(e, t, n);
            break e;
          }
          Fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return yp(t), e === null && aa(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, ra(r, o) ? l = null : i !== null && ra(r, i) && (t.flags |= 32), Wp(e, t), Fe(e, t, l, n), t.child;
    case 6:
      return e === null && aa(t), null;
    case 13:
      return Hp(e, t, n);
    case 4:
      return gs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = gr(t, null, r, n) : Fe(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : gt(r, o), qc(e, t, r, o, n);
    case 7:
      return Fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, re(Ti, r._currentValue), r._currentValue = l, i !== null) if (Et(i.value, l)) {
          if (i.children === o.children && !Qe.current) {
            t = Wt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            l = i.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Ft(-1, n & -n), a.tag = 2;
                  var s = i.updateQueue;
                  if (s !== null) {
                    s = s.shared;
                    var f = s.pending;
                    f === null ? a.next = a : (a.next = f.next, f.next = a), s.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), sa(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (l = i.return, l === null) throw Error(L(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), sa(l, n, t), l = i.sibling;
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
        Fe(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, cr(t, n), o = ft(o), r = r(o), t.flags |= 1, Fe(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = gt(r, t.pendingProps), o = gt(r.type, o), ef(e, t, r, o, n);
    case 15:
      return bp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : gt(r, o), fi(e, t), t.tag = 1, Ke(r) ? (e = !0, Ai(t)) : e = !1, cr(t, n), Fp(t, r, o), fa(t, r, o, n), ha(null, t, r, !0, e, n);
    case 19:
      return Qp(e, t, n);
    case 22:
      return Up(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function ah(e, t) {
  return $d(e, t);
}
function yy(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function st(e, t, n, r) {
  return new yy(e, t, n, r);
}
function Ds(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function wy(e) {
  if (typeof e == "function") return Ds(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Za) return 11;
    if (e === Ja) return 14;
  }
  return 2;
}
function cn(e, t) {
  var n = e.alternate;
  return n === null ? (n = st(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function hi(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") Ds(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Yn:
      return Nn(n.children, o, i, t);
    case Xa:
      l = 8, o |= 8;
      break;
    case $u:
      return e = st(12, n, t, o | 2), e.elementType = $u, e.lanes = i, e;
    case ju:
      return e = st(13, n, t, o), e.elementType = ju, e.lanes = i, e;
    case Iu:
      return e = st(19, n, t, o), e.elementType = Iu, e.lanes = i, e;
    case yd:
      return cl(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case vd:
          l = 10;
          break e;
        case gd:
          l = 9;
          break e;
        case Za:
          l = 11;
          break e;
        case Ja:
          l = 14;
          break e;
        case Xt:
          l = 16, r = null;
          break e;
      }
      throw Error(L(130, e == null ? e : typeof e, ""));
  }
  return t = st(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Nn(e, t, n, r) {
  return e = st(7, e, r, t), e.lanes = n, e;
}
function cl(e, t, n, r) {
  return e = st(22, e, r, t), e.elementType = yd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function mu(e, t, n) {
  return e = st(6, e, null, t), e.lanes = n, e;
}
function vu(e, t, n) {
  return t = st(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Sy(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xl(0), this.expirationTimes = Xl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Ls(e, t, n, r, o, i, l, u, a) {
  return e = new Sy(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = st(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, vs(i), e;
}
function ky(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Kn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function sh(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (bn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n)) return sp(e, n, t);
  }
  return t;
}
function ch(e, t, n, r, o, i, l, u, a) {
  return e = Ls(n, r, !0, e, o, i, l, u, a), e.context = sh(null), n = e.current, r = ze(), o = sn(n), i = Ft(r, o), i.callback = t ?? null, un(n, i, o), e.current.lanes = o, Eo(e, o, r), Ye(e, r), e;
}
function fl(e, t, n, r) {
  var o = t.current, i = ze(), l = sn(o);
  return n = sh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ft(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = un(o, t, l), e !== null && (kt(e, o, l, i), ai(e, o, l)), l;
}
function bi(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pf(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ms(e, t) {
  pf(e, t), (e = e.alternate) && pf(e, t);
}
function Ey() {
  return null;
}
var fh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function $s(e) {
  this._internalRoot = e;
}
dl.prototype.render = $s.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  fl(e, t, null, null);
};
dl.prototype.unmount = $s.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mn(function() {
      fl(null, e, null, null);
    }), t[bt] = null;
  }
};
function dl(e) {
  this._internalRoot = e;
}
dl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ud();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++) ;
    Jt.splice(n, 0, e), n === 0 && Vd(e);
  }
};
function js(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function pl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function hf() {
}
function xy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var s = bi(l);
        i.call(s);
      };
    }
    var l = ch(t, r, e, 0, null, !1, !1, "", hf);
    return e._reactRootContainer = l, e[bt] = l.current, lo(e.nodeType === 8 ? e.parentNode : e), Mn(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var s = bi(a);
      u.call(s);
    };
  }
  var a = Ls(e, 0, !1, null, null, !1, !1, "", hf);
  return e._reactRootContainer = a, e[bt] = a.current, lo(e.nodeType === 8 ? e.parentNode : e), Mn(function() {
    fl(t, a, n, r);
  }), a;
}
function hl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var a = bi(l);
        u.call(a);
      };
    }
    fl(t, l, e, o);
  } else l = xy(n, t, e, o, r);
  return bi(l);
}
Bd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fr(t.pendingLanes);
        n !== 0 && (ts(t, n | 1), Ye(t, ge()), !(Z & 6) && (Sr = ge() + 500, wn()));
      }
      break;
    case 13:
      Mn(function() {
        var r = Ut(e, 1);
        if (r !== null) {
          var o = ze();
          kt(r, e, 1, o);
        }
      }), Ms(e, 1);
  }
};
ns = function(e) {
  if (e.tag === 13) {
    var t = Ut(e, 134217728);
    if (t !== null) {
      var n = ze();
      kt(t, e, 134217728, n);
    }
    Ms(e, 134217728);
  }
};
bd = function(e) {
  if (e.tag === 13) {
    var t = sn(e), n = Ut(e, t);
    if (n !== null) {
      var r = ze();
      kt(n, e, t, r);
    }
    Ms(e, t);
  }
};
Ud = function() {
  return q;
};
Wd = function(e, t) {
  var n = q;
  try {
    return q = e, t();
  } finally {
    q = n;
  }
};
Ku = function(e, t, n) {
  switch (t) {
    case "input":
      if (Bu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ol(r);
            if (!o) throw Error(L(90));
            Sd(r), Bu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ed(e, n);
      break;
    case "select":
      t = n.value, t != null && lr(e, !!n.multiple, t, !1);
  }
};
Od = Os;
Rd = Mn;
var Cy = { usingClientEntryPoint: !1, Events: [Co, Jn, ol, Nd, Ad, Os] }, $r = { findFiberByHostInstance: xn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _y = { bundleType: $r.bundleType, version: $r.version, rendererPackageName: $r.rendererPackageName, rendererConfig: $r.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ht.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ld(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: $r.findFiberByHostInstance || Ey, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yo.isDisabled && Yo.supportsFiber) try {
    el = Yo.inject(_y), At = Yo;
  } catch {
  }
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cy;
nt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!js(t)) throw Error(L(200));
  return ky(e, t, null, n);
};
nt.createRoot = function(e, t) {
  if (!js(e)) throw Error(L(299));
  var n = !1, r = "", o = fh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ls(e, 1, !1, null, null, n, !1, r, o), e[bt] = t.current, lo(e.nodeType === 8 ? e.parentNode : e), new $s(t);
};
nt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(L(188)) : (e = Object.keys(e).join(","), Error(L(268, e)));
  return e = Ld(t), e = e === null ? null : e.stateNode, e;
};
nt.flushSync = function(e) {
  return Mn(e);
};
nt.hydrate = function(e, t, n) {
  if (!pl(t)) throw Error(L(200));
  return hl(null, e, t, !0, n);
};
nt.hydrateRoot = function(e, t, n) {
  if (!js(e)) throw Error(L(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = fh;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = ch(t, null, e, 1, n ?? null, o, !1, i, l), e[bt] = t.current, lo(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new dl(t);
};
nt.render = function(e, t, n) {
  if (!pl(t)) throw Error(L(200));
  return hl(null, e, t, !1, n);
};
nt.unmountComponentAtNode = function(e) {
  if (!pl(e)) throw Error(L(40));
  return e._reactRootContainer ? (Mn(function() {
    hl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[bt] = null;
    });
  }), !0) : !1;
};
nt.unstable_batchedUpdates = Os;
nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!pl(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return hl(e, t, n, !1, r);
};
nt.version = "18.3.1-next-f1338f8080-20240426";
function dh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dh);
    } catch (e) {
      console.error(e);
    }
}
dh(), dd.exports = nt;
var ml = dd.exports;
const Py = /* @__PURE__ */ Ji(ml);
var Ny, mf = ml;
Ny = mf.createRoot, mf.hydrateRoot;
var ph = { exports: {} }, hh = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Po = _;
function Ay(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Oy = typeof Object.is == "function" ? Object.is : Ay, Ry = Po.useSyncExternalStore, Ty = Po.useRef, Dy = Po.useEffect, Ly = Po.useMemo, My = Po.useDebugValue;
hh.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = Ty(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else l = i.current;
  i = Ly(function() {
    function a(S) {
      if (!s) {
        if (s = !0, f = S, S = r(S), o !== void 0 && l.hasValue) {
          var g = l.value;
          if (o(g, S)) return m = g;
        }
        return m = S;
      }
      if (g = m, Oy(f, S)) return g;
      var v = r(S);
      return o !== void 0 && o(g, v) ? g : (f = S, m = v);
    }
    var s = !1, f, m, d = n === void 0 ? null : n;
    return [function() {
      return a(t());
    }, d === null ? void 0 : function() {
      return a(d());
    }];
  }, [t, n, r, o]);
  var u = Ry(e, i[0], i[1]);
  return Dy(function() {
    l.hasValue = !0, l.value = u;
  }, [u]), My(u), u;
};
ph.exports = hh;
var $y = ph.exports, Je = (
  // prettier-ignore
  // @ts-ignore
  "default" in Lu ? pn : Lu
), vf = Symbol.for("react-redux-context"), gf = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function jy() {
  if (!Je.createContext)
    return {};
  const e = gf[vf] ?? (gf[vf] = /* @__PURE__ */ new Map());
  let t = e.get(Je.createContext);
  return t || (t = Je.createContext(
    null
  ), e.set(Je.createContext, t)), t;
}
var vn = /* @__PURE__ */ jy(), Iy = () => {
  throw new Error("uSES not initialized!");
};
function Is(e = vn) {
  return function() {
    return Je.useContext(e);
  };
}
var mh = /* @__PURE__ */ Is(), vh = Iy, Fy = (e) => {
  vh = e;
}, zy = (e, t) => e === t;
function By(e = vn) {
  const t = e === vn ? mh : Is(e), n = (r, o = {}) => {
    const { equalityFn: i = zy, devModeChecks: l = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: u,
      subscription: a,
      getServerState: s,
      stabilityCheck: f,
      identityFunctionCheck: m
    } = t();
    Je.useRef(!0);
    const d = Je.useCallback(
      {
        [r.name](g) {
          return r(g);
        }
      }[r.name],
      [r, f, l.stabilityCheck]
    ), S = vh(
      a.addNestedSub,
      u.getState,
      s || u.getState,
      d,
      i
    );
    return Je.useDebugValue(S), S;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Fs = /* @__PURE__ */ By();
function gh(e) {
  e();
}
function by() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      gh(() => {
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
var yf = {
  notify() {
  },
  get: () => []
};
function Uy(e, t) {
  let n, r = yf, o = 0, i = !1;
  function l(v) {
    f();
    const C = r.subscribe(v);
    let p = !1;
    return () => {
      p || (p = !0, C(), m());
    };
  }
  function u() {
    r.notify();
  }
  function a() {
    g.onStateChange && g.onStateChange();
  }
  function s() {
    return i;
  }
  function f() {
    o++, n || (n = e.subscribe(a), r = by());
  }
  function m() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = yf);
  }
  function d() {
    i || (i = !0, f());
  }
  function S() {
    i && (i = !1, m());
  }
  const g = {
    addNestedSub: l,
    notifyNestedSubs: u,
    handleChangeWrapper: a,
    isSubscribed: s,
    trySubscribe: d,
    tryUnsubscribe: S,
    getListeners: () => r
  };
  return g;
}
var Wy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Vy = typeof navigator < "u" && navigator.product === "ReactNative", Hy = Wy || Vy ? Je.useLayoutEffect : Je.useEffect;
function wf(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function fk(e, t) {
  if (wf(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !wf(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
function Qy({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const l = Je.useMemo(() => {
    const s = Uy(e);
    return {
      store: e,
      subscription: s,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), u = Je.useMemo(() => e.getState(), [e]);
  Hy(() => {
    const { subscription: s } = l;
    return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), u !== e.getState() && s.notifyNestedSubs(), () => {
      s.tryUnsubscribe(), s.onStateChange = void 0;
    };
  }, [l, u]);
  const a = t || vn;
  return /* @__PURE__ */ Je.createElement(a.Provider, { value: l }, n);
}
var dk = Qy;
function yh(e = vn) {
  const t = e === vn ? mh : (
    // @ts-ignore
    Is(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Ky = /* @__PURE__ */ yh();
function Yy(e = vn) {
  const t = e === vn ? Ky : yh(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var wh = /* @__PURE__ */ Yy(), pk = gh;
Fy($y.useSyncExternalStoreWithSelector);
function Pe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Gy = typeof Symbol == "function" && Symbol.observable || "@@observable", Sf = Gy, gu = () => Math.random().toString(36).substring(7).split("").join("."), Xy = {
  INIT: `@@redux/INIT${/* @__PURE__ */ gu()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ gu()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${gu()}`
}, Ui = Xy;
function zs(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Sh(e, t, n) {
  if (typeof e != "function")
    throw new Error(Pe(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Pe(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Pe(1));
    return n(Sh)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), l = i, u = 0, a = !1;
  function s() {
    l === i && (l = /* @__PURE__ */ new Map(), i.forEach((C, p) => {
      l.set(p, C);
    }));
  }
  function f() {
    if (a)
      throw new Error(Pe(3));
    return o;
  }
  function m(C) {
    if (typeof C != "function")
      throw new Error(Pe(4));
    if (a)
      throw new Error(Pe(5));
    let p = !0;
    s();
    const c = u++;
    return l.set(c, C), function() {
      if (p) {
        if (a)
          throw new Error(Pe(6));
        p = !1, s(), l.delete(c), i = null;
      }
    };
  }
  function d(C) {
    if (!zs(C))
      throw new Error(Pe(7));
    if (typeof C.type > "u")
      throw new Error(Pe(8));
    if (typeof C.type != "string")
      throw new Error(Pe(17));
    if (a)
      throw new Error(Pe(9));
    try {
      a = !0, o = r(o, C);
    } finally {
      a = !1;
    }
    return (i = l).forEach((c) => {
      c();
    }), C;
  }
  function S(C) {
    if (typeof C != "function")
      throw new Error(Pe(10));
    r = C, d({
      type: Ui.REPLACE
    });
  }
  function g() {
    const C = m;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(p) {
        if (typeof p != "object" || p === null)
          throw new Error(Pe(11));
        function c() {
          const w = p;
          w.next && w.next(f());
        }
        return c(), {
          unsubscribe: C(c)
        };
      },
      [Sf]() {
        return this;
      }
    };
  }
  return d({
    type: Ui.INIT
  }), {
    dispatch: d,
    subscribe: m,
    getState: f,
    replaceReducer: S,
    [Sf]: g
  };
}
function Zy(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Ui.INIT
    }) > "u")
      throw new Error(Pe(12));
    if (typeof n(void 0, {
      type: Ui.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Pe(13));
  });
}
function Jy(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const l = t[i];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  const r = Object.keys(n);
  let o;
  try {
    Zy(n);
  } catch (i) {
    o = i;
  }
  return function(l = {}, u) {
    if (o)
      throw o;
    let a = !1;
    const s = {};
    for (let f = 0; f < r.length; f++) {
      const m = r[f], d = n[m], S = l[m], g = d(S, u);
      if (typeof g > "u")
        throw u && u.type, new Error(Pe(14));
      s[m] = g, a = a || g !== S;
    }
    return a = a || r.length !== Object.keys(l).length, a ? s : l;
  };
}
function Wi(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function qy(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(Pe(15));
    };
    const l = {
      getState: o.getState,
      dispatch: (a, ...s) => i(a, ...s)
    }, u = e.map((a) => a(l));
    return i = Wi(...u)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function kh(e) {
  return zs(e) && "type" in e && typeof e.type == "string";
}
var Bs = Symbol.for("immer-nothing"), Xr = Symbol.for("immer-draftable"), Ge = Symbol.for("immer-state");
function Ae(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var $n = Object.getPrototypeOf;
function Vt(e) {
  return !!e && !!e[Ge];
}
function Rt(e) {
  var t;
  return e ? Eh(e) || Array.isArray(e) || !!e[Xr] || !!((t = e.constructor) != null && t[Xr]) || No(e) || Ao(e) : !1;
}
var e0 = Object.prototype.constructor.toString();
function Eh(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = $n(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === e0;
}
function hk(e) {
  return Vt(e) || Ae(15, e), e[Ge].base_;
}
function vo(e, t) {
  jn(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function jn(e) {
  const t = e[Ge];
  return t ? t.type_ : Array.isArray(e) ? 1 : No(e) ? 2 : Ao(e) ? 3 : 0;
}
function go(e, t) {
  return jn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function yu(e, t) {
  return jn(e) === 2 ? e.get(t) : e[t];
}
function xh(e, t, n) {
  const r = jn(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function t0(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function No(e) {
  return e instanceof Map;
}
function Ao(e) {
  return e instanceof Set;
}
function En(e) {
  return e.copy_ || e.base_;
}
function Pa(e, t) {
  if (No(e))
    return new Map(e);
  if (Ao(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Eh(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Ge];
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
    return Object.create($n(e), r);
  } else {
    const r = $n(e);
    if (r !== null && n)
      return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function bs(e, t = !1) {
  return vl(e) || Vt(e) || !Rt(e) || (jn(e) > 1 && (e.set = e.add = e.clear = e.delete = n0), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => bs(r, !0))), e;
}
function n0() {
  Ae(2);
}
function vl(e) {
  return Object.isFrozen(e);
}
var Na = {};
function In(e) {
  const t = Na[e];
  return t || Ae(0, e), t;
}
function r0(e, t) {
  Na[e] || (Na[e] = t);
}
var yo;
function Ch() {
  return yo;
}
function o0(e, t) {
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
function kf(e, t) {
  t && (In("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Aa(e) {
  Oa(e), e.drafts_.forEach(i0), e.drafts_ = null;
}
function Oa(e) {
  e === yo && (yo = e.parent_);
}
function Ef(e) {
  return yo = o0(yo, e);
}
function i0(e) {
  const t = e[Ge];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function xf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Ge].modified_ && (Aa(t), Ae(4)), Rt(e) && (e = Vi(t, e), t.parent_ || Hi(t, e)), t.patches_ && In("Patches").generateReplacementPatches_(
    n[Ge].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Vi(t, n, []), Aa(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Bs ? e : void 0;
}
function Vi(e, t, n) {
  if (vl(t))
    return t;
  const r = t[Ge];
  if (!r)
    return vo(
      t,
      (o, i) => Cf(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Hi(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, l = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), l = !0), vo(
      i,
      (u, a) => Cf(e, r, o, u, a, n, l)
    ), Hi(e, o, !1), n && e.patches_ && In("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Cf(e, t, n, r, o, i, l) {
  if (Vt(o)) {
    const u = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !go(t.assigned_, r) ? i.concat(r) : void 0, a = Vi(e, o, u);
    if (xh(n, r, a), Vt(a))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else l && n.add(o);
  if (Rt(o) && !vl(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Vi(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Hi(e, o);
  }
}
function Hi(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && bs(t, n);
}
function l0(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Ch(),
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
  let o = r, i = Us;
  n && (o = [r], i = wo);
  const { revoke: l, proxy: u } = Proxy.revocable(o, i);
  return r.draft_ = u, r.revoke_ = l, u;
}
var Us = {
  get(e, t) {
    if (t === Ge)
      return e;
    const n = En(e);
    if (!go(n, t))
      return u0(e, n, t);
    const r = n[t];
    return e.finalized_ || !Rt(r) ? r : r === wu(e.base_, t) ? (Su(e), e.copy_[t] = Ta(r, e)) : r;
  },
  has(e, t) {
    return t in En(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(En(e));
  },
  set(e, t, n) {
    const r = _h(En(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = wu(En(e), t), i = o == null ? void 0 : o[Ge];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (t0(n, o) && (n !== void 0 || go(e.base_, t)))
        return !0;
      Su(e), Ra(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return wu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Su(e), Ra(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = En(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    Ae(11);
  },
  getPrototypeOf(e) {
    return $n(e.base_);
  },
  setPrototypeOf() {
    Ae(12);
  }
}, wo = {};
vo(Us, (e, t) => {
  wo[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
wo.deleteProperty = function(e, t) {
  return wo.set.call(this, e, t, void 0);
};
wo.set = function(e, t, n) {
  return Us.set.call(this, e[0], t, n, e[0]);
};
function wu(e, t) {
  const n = e[Ge];
  return (n ? En(n) : e)[t];
}
function u0(e, t, n) {
  var o;
  const r = _h(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function _h(e, t) {
  if (!(t in e))
    return;
  let n = $n(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = $n(n);
  }
}
function Ra(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ra(e.parent_));
}
function Su(e) {
  e.copy_ || (e.copy_ = Pa(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var a0 = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const l = this;
        return function(a = i, ...s) {
          return l.produce(a, (f) => n.call(this, f, ...s));
        };
      }
      typeof n != "function" && Ae(6), r !== void 0 && typeof r != "function" && Ae(7);
      let o;
      if (Rt(t)) {
        const i = Ef(this), l = Ta(t, void 0);
        let u = !0;
        try {
          o = n(l), u = !1;
        } finally {
          u ? Aa(i) : Oa(i);
        }
        return kf(i, r), xf(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Bs && (o = void 0), this.autoFreeze_ && bs(o, !0), r) {
          const i = [], l = [];
          In("Patches").generateReplacementPatches_(t, o, i, l), r(i, l);
        }
        return o;
      } else
        Ae(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (l, ...u) => this.produceWithPatches(l, (a) => t(a, ...u));
      let r, o;
      return [this.produce(t, n, (l, u) => {
        r = l, o = u;
      }), r, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Rt(e) || Ae(8), Vt(e) && (e = s0(e));
    const t = Ef(this), n = Ta(e, void 0);
    return n[Ge].isManual_ = !0, Oa(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ge];
    (!n || !n.isManual_) && Ae(9);
    const { scope_: r } = n;
    return kf(r, t), xf(void 0, r);
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
    return Vt(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function Ta(e, t) {
  const n = No(e) ? In("MapSet").proxyMap_(e, t) : Ao(e) ? In("MapSet").proxySet_(e, t) : l0(e, t);
  return (t ? t.scope_ : Ch()).drafts_.push(n), n;
}
function s0(e) {
  return Vt(e) || Ae(10, e), Ph(e);
}
function Ph(e) {
  if (!Rt(e) || vl(e))
    return e;
  const t = e[Ge];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Pa(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Pa(e, !0);
  return vo(n, (r, o) => {
    xh(n, r, Ph(o));
  }), t && (t.finalized_ = !1), n;
}
function mk() {
  const t = "replace", n = "add", r = "remove";
  function o(d, S, g, v) {
    switch (d.type_) {
      case 0:
      case 2:
        return l(
          d,
          S,
          g,
          v
        );
      case 1:
        return i(d, S, g, v);
      case 3:
        return u(
          d,
          S,
          g,
          v
        );
    }
  }
  function i(d, S, g, v) {
    let { base_: C, assigned_: p } = d, c = d.copy_;
    c.length < C.length && ([C, c] = [c, C], [g, v] = [v, g]);
    for (let h = 0; h < C.length; h++)
      if (p[h] && c[h] !== C[h]) {
        const w = S.concat([h]);
        g.push({
          op: t,
          path: w,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: m(c[h])
        }), v.push({
          op: t,
          path: w,
          value: m(C[h])
        });
      }
    for (let h = C.length; h < c.length; h++) {
      const w = S.concat([h]);
      g.push({
        op: n,
        path: w,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: m(c[h])
      });
    }
    for (let h = c.length - 1; C.length <= h; --h) {
      const w = S.concat([h]);
      v.push({
        op: r,
        path: w
      });
    }
  }
  function l(d, S, g, v) {
    const { base_: C, copy_: p } = d;
    vo(d.assigned_, (c, h) => {
      const w = yu(C, c), N = yu(p, c), R = h ? go(C, c) ? t : n : r;
      if (w === N && R === t)
        return;
      const A = S.concat(c);
      g.push(R === r ? { op: R, path: A } : { op: R, path: A, value: N }), v.push(
        R === n ? { op: r, path: A } : R === r ? { op: n, path: A, value: m(w) } : { op: t, path: A, value: m(w) }
      );
    });
  }
  function u(d, S, g, v) {
    let { base_: C, copy_: p } = d, c = 0;
    C.forEach((h) => {
      if (!p.has(h)) {
        const w = S.concat([c]);
        g.push({
          op: r,
          path: w,
          value: h
        }), v.unshift({
          op: n,
          path: w,
          value: h
        });
      }
      c++;
    }), c = 0, p.forEach((h) => {
      if (!C.has(h)) {
        const w = S.concat([c]);
        g.push({
          op: n,
          path: w,
          value: h
        }), v.unshift({
          op: r,
          path: w,
          value: h
        });
      }
      c++;
    });
  }
  function a(d, S, g, v) {
    g.push({
      op: t,
      path: [],
      value: S === Bs ? void 0 : S
    }), v.push({
      op: t,
      path: [],
      value: d
    });
  }
  function s(d, S) {
    return S.forEach((g) => {
      const { path: v, op: C } = g;
      let p = d;
      for (let N = 0; N < v.length - 1; N++) {
        const R = jn(p);
        let A = v[N];
        typeof A != "string" && typeof A != "number" && (A = "" + A), (R === 0 || R === 1) && (A === "__proto__" || A === "constructor") && Ae(19), typeof p == "function" && A === "prototype" && Ae(19), p = yu(p, A), typeof p != "object" && Ae(18, v.join("/"));
      }
      const c = jn(p), h = f(g.value), w = v[v.length - 1];
      switch (C) {
        case t:
          switch (c) {
            case 2:
              return p.set(w, h);
            case 3:
              Ae(16);
            default:
              return p[w] = h;
          }
        case n:
          switch (c) {
            case 1:
              return w === "-" ? p.push(h) : p.splice(w, 0, h);
            case 2:
              return p.set(w, h);
            case 3:
              return p.add(h);
            default:
              return p[w] = h;
          }
        case r:
          switch (c) {
            case 1:
              return p.splice(w, 1);
            case 2:
              return p.delete(w);
            case 3:
              return p.delete(g.value);
            default:
              return delete p[w];
          }
        default:
          Ae(17, C);
      }
    }), d;
  }
  function f(d) {
    if (!Rt(d))
      return d;
    if (Array.isArray(d))
      return d.map(f);
    if (No(d))
      return new Map(
        Array.from(d.entries()).map(([g, v]) => [g, f(v)])
      );
    if (Ao(d))
      return new Set(Array.from(d).map(f));
    const S = Object.create($n(d));
    for (const g in d)
      S[g] = f(d[g]);
    return go(d, Xr) && (S[Xr] = d[Xr]), S;
  }
  function m(d) {
    return Vt(d) ? f(d) : d;
  }
  r0("Patches", {
    applyPatches_: s,
    generatePatches_: o,
    generateReplacementPatches_: a
  });
}
var tt = new a0(), Nh = tt.produce, vk = tt.produceWithPatches.bind(
  tt
);
tt.setAutoFreeze.bind(tt);
tt.setUseStrictShallowCopy.bind(tt);
var gk = tt.applyPatches.bind(tt);
tt.createDraft.bind(tt);
tt.finishDraft.bind(tt);
function Ah(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var c0 = Ah(), f0 = Ah, d0 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Wi : Wi.apply(null, arguments);
}, p0 = (e) => e && typeof e.match == "function";
function zt(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(Be(0));
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => kh(r) && r.type === e, n;
}
function _f(e, t) {
  for (const n of e)
    if (t(n))
      return n;
}
var Oh = class Br extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Br.prototype);
  }
  static get [Symbol.species]() {
    return Br;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Br(...t[0].concat(this)) : new Br(...t.concat(this));
  }
};
function Pf(e) {
  return Rt(e) ? Nh(e, () => {
  }) : e;
}
function Nf(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(Be(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function h0(e) {
  return typeof e == "boolean";
}
var m0 = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let l = new Oh();
  return n && (h0(n) ? l.push(c0) : l.push(f0(n.extraArgument))), l;
}, Rh = "RTK_autoBatch", yk = () => (e) => ({
  payload: e,
  meta: {
    [Rh]: !0
  }
}), Th = (e) => (t) => {
  setTimeout(t, e);
}, v0 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Th(10), g0 = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, l = !1;
  const u = /* @__PURE__ */ new Set(), a = e.type === "tick" ? queueMicrotask : e.type === "raf" ? v0 : e.type === "callback" ? e.queueNotification : Th(e.timeout), s = () => {
    l = !1, i && (i = !1, u.forEach((f) => f()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(f) {
      const m = () => o && f(), d = r.subscribe(m);
      return u.add(f), () => {
        d(), u.delete(f);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(f) {
      var m;
      try {
        return o = !((m = f == null ? void 0 : f.meta) != null && m[Rh]), i = !o, i && (l || (l = !0, a(s))), r.dispatch(f);
      } finally {
        o = !0;
      }
    }
  });
}, y0 = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Oh(e);
  return r && o.push(g0(typeof r == "object" ? r : void 0)), o;
};
function wk(e) {
  const t = m0(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: l = void 0
  } = e || {};
  let u;
  if (typeof n == "function")
    u = n;
  else if (zs(n))
    u = Jy(n);
  else
    throw new Error(Be(1));
  let a;
  typeof r == "function" ? a = r(t) : a = t();
  let s = Wi;
  o && (s = d0({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof o == "object" && o
  }));
  const f = qy(...a), m = y0(f);
  let d = typeof l == "function" ? l(m) : m();
  const S = s(...d);
  return Sh(u, i, S);
}
function Dh(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, l) {
      const u = typeof i == "string" ? i : i.type;
      if (!u)
        throw new Error(Be(28));
      if (u in t)
        throw new Error(Be(29));
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
function w0(e) {
  return typeof e == "function";
}
function S0(e, t) {
  let [n, r, o] = Dh(t), i;
  if (w0(e))
    i = () => Pf(e());
  else {
    const u = Pf(e);
    i = () => u;
  }
  function l(u = i(), a) {
    let s = [n[a.type], ...r.filter(({
      matcher: f
    }) => f(a)).map(({
      reducer: f
    }) => f)];
    return s.filter((f) => !!f).length === 0 && (s = [o]), s.reduce((f, m) => {
      if (m)
        if (Vt(f)) {
          const S = m(f, a);
          return S === void 0 ? f : S;
        } else {
          if (Rt(f))
            return Nh(f, (d) => m(d, a));
          {
            const d = m(f, a);
            if (d === void 0) {
              if (f === null)
                return f;
              throw new Error(Be(9));
            }
            return d;
          }
        }
      return f;
    }, u);
  }
  return l.getInitialState = i, l;
}
var Lh = (e, t) => p0(e) ? e.match(t) : e(t);
function Oo(...e) {
  return (t) => e.some((n) => Lh(n, t));
}
function Af(...e) {
  return (t) => e.every((n) => Lh(n, t));
}
function gl(e, t) {
  if (!e || !e.meta) return !1;
  const n = typeof e.meta.requestId == "string", r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function Ro(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function k0(...e) {
  return e.length === 0 ? (t) => gl(t, ["pending"]) : Ro(e) ? Oo(...e.map((t) => t.pending)) : k0()(e[0]);
}
function Da(...e) {
  return e.length === 0 ? (t) => gl(t, ["rejected"]) : Ro(e) ? Oo(...e.map((t) => t.rejected)) : Da()(e[0]);
}
function E0(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0 ? Af(Da(...e), t) : Ro(e) ? Af(Da(...e), t) : E0()(e[0]);
}
function x0(...e) {
  return e.length === 0 ? (t) => gl(t, ["fulfilled"]) : Ro(e) ? Oo(...e.map((t) => t.fulfilled)) : x0()(e[0]);
}
function C0(...e) {
  return e.length === 0 ? (t) => gl(t, ["pending", "fulfilled", "rejected"]) : Ro(e) ? Oo(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : C0()(e[0]);
}
var _0 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Mh = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += _0[Math.random() * 64 | 0];
  return t;
}, P0 = ["name", "message", "stack", "code"], ku = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Pr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Of = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Pr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, N0 = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of P0)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, Sk = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = zt(t + "/fulfilled", (a, s, f, m) => ({
      payload: a,
      meta: {
        ...m || {},
        arg: f,
        requestId: s,
        requestStatus: "fulfilled"
      }
    })), i = zt(t + "/pending", (a, s, f) => ({
      payload: void 0,
      meta: {
        ...f || {},
        arg: s,
        requestId: a,
        requestStatus: "pending"
      }
    })), l = zt(t + "/rejected", (a, s, f, m, d) => ({
      payload: m,
      error: (r && r.serializeError || N0)(a || "Rejected"),
      meta: {
        ...d || {},
        arg: f,
        requestId: s,
        rejectedWithValue: !!m,
        requestStatus: "rejected",
        aborted: (a == null ? void 0 : a.name) === "AbortError",
        condition: (a == null ? void 0 : a.name) === "ConditionError"
      }
    }));
    function u(a) {
      return (s, f, m) => {
        const d = r != null && r.idGenerator ? r.idGenerator(a) : Mh(), S = new AbortController();
        let g, v;
        function C(c) {
          v = c, S.abort();
        }
        const p = async function() {
          var w, N;
          let c;
          try {
            let R = (w = r == null ? void 0 : r.condition) == null ? void 0 : w.call(r, a, {
              getState: f,
              extra: m
            });
            if (O0(R) && (R = await R), R === !1 || S.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const A = new Promise((T, B) => {
              g = () => {
                B({
                  name: "AbortError",
                  message: v || "Aborted"
                });
              }, S.signal.addEventListener("abort", g);
            });
            s(i(d, a, (N = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : N.call(r, {
              requestId: d,
              arg: a
            }, {
              getState: f,
              extra: m
            }))), c = await Promise.race([A, Promise.resolve(n(a, {
              dispatch: s,
              getState: f,
              extra: m,
              requestId: d,
              signal: S.signal,
              abort: C,
              rejectWithValue: (T, B) => new ku(T, B),
              fulfillWithValue: (T, B) => new Of(T, B)
            })).then((T) => {
              if (T instanceof ku)
                throw T;
              return T instanceof Of ? o(T.payload, d, a, T.meta) : o(T, d, a);
            })]);
          } catch (R) {
            c = R instanceof ku ? l(null, d, a, R.payload, R.meta) : l(R, d, a);
          } finally {
            g && S.signal.removeEventListener("abort", g);
          }
          return r && !r.dispatchConditionRejection && l.match(c) && c.meta.condition || s(c), c;
        }();
        return Object.assign(p, {
          abort: C,
          requestId: d,
          arg: a,
          unwrap() {
            return p.then(A0);
          }
        });
      };
    }
    return Object.assign(u, {
      pending: i,
      rejected: l,
      fulfilled: o,
      settled: Oo(l, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function A0(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function O0(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var R0 = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function T0(e, t) {
  return `${e}/${t}`;
}
function D0({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[R0];
  return function(o) {
    const {
      name: i,
      reducerPath: l = i
    } = o;
    if (!i)
      throw new Error(Be(11));
    typeof process < "u";
    const u = (typeof o.reducers == "function" ? o.reducers(M0()) : o.reducers) || {}, a = Object.keys(u), s = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(h, w) {
        const N = typeof h == "string" ? h : h.type;
        if (!N)
          throw new Error(Be(12));
        if (N in s.sliceCaseReducersByType)
          throw new Error(Be(13));
        return s.sliceCaseReducersByType[N] = w, f;
      },
      addMatcher(h, w) {
        return s.sliceMatchers.push({
          matcher: h,
          reducer: w
        }), f;
      },
      exposeAction(h, w) {
        return s.actionCreators[h] = w, f;
      },
      exposeCaseReducer(h, w) {
        return s.sliceCaseReducersByName[h] = w, f;
      }
    };
    a.forEach((h) => {
      const w = u[h], N = {
        reducerName: h,
        type: T0(i, h),
        createNotation: typeof o.reducers == "function"
      };
      j0(w) ? F0(N, w, f, t) : $0(N, w, f);
    });
    function m() {
      const [h = {}, w = [], N = void 0] = typeof o.extraReducers == "function" ? Dh(o.extraReducers) : [o.extraReducers], R = {
        ...h,
        ...s.sliceCaseReducersByType
      };
      return S0(o.initialState, (A) => {
        for (let T in R)
          A.addCase(T, R[T]);
        for (let T of s.sliceMatchers)
          A.addMatcher(T.matcher, T.reducer);
        for (let T of w)
          A.addMatcher(T.matcher, T.reducer);
        N && A.addDefaultCase(N);
      });
    }
    const d = (h) => h, S = /* @__PURE__ */ new Map();
    let g;
    function v(h, w) {
      return g || (g = m()), g(h, w);
    }
    function C() {
      return g || (g = m()), g.getInitialState();
    }
    function p(h, w = !1) {
      function N(A) {
        let T = A[h];
        return typeof T > "u" && w && (T = C()), T;
      }
      function R(A = d) {
        const T = Nf(S, w, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Nf(T, A, {
          insert: () => {
            const B = {};
            for (const [F, me] of Object.entries(o.selectors ?? {}))
              B[F] = L0(me, A, C, w);
            return B;
          }
        });
      }
      return {
        reducerPath: h,
        getSelectors: R,
        get selectors() {
          return R(N);
        },
        selectSlice: N
      };
    }
    const c = {
      name: i,
      reducer: v,
      actions: s.actionCreators,
      caseReducers: s.sliceCaseReducersByName,
      getInitialState: C,
      ...p(l),
      injectInto(h, {
        reducerPath: w,
        ...N
      } = {}) {
        const R = w ?? l;
        return h.inject({
          reducerPath: R,
          reducer: v
        }, N), {
          ...c,
          ...p(R, !0)
        };
      }
    };
    return c;
  };
}
function L0(e, t, n, r) {
  function o(i, ...l) {
    let u = t(i);
    return typeof u > "u" && r && (u = n()), e(u, ...l);
  }
  return o.unwrapped = e, o;
}
var Ws = /* @__PURE__ */ D0();
function M0() {
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
function $0({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, l;
  if ("reducer" in r) {
    if (n && !I0(r))
      throw new Error(Be(17));
    i = r.reducer, l = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, l ? zt(e, l) : zt(e));
}
function j0(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function I0(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function F0({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(Be(18));
  const {
    payloadCreator: i,
    fulfilled: l,
    pending: u,
    rejected: a,
    settled: s,
    options: f
  } = n, m = o(e, i, f);
  r.exposeAction(t, m), l && r.addCase(m.fulfilled, l), u && r.addCase(m.pending, u), a && r.addCase(m.rejected, a), s && r.addMatcher(m.settled, s), r.exposeCaseReducer(t, {
    fulfilled: l || Go,
    pending: u || Go,
    rejected: a || Go,
    settled: s || Go
  });
}
function Go() {
}
var z0 = "task", $h = "listener", jh = "completed", Vs = "cancelled", B0 = `task-${Vs}`, b0 = `task-${jh}`, La = `${$h}-${Vs}`, U0 = `${$h}-${jh}`, yl = class {
  constructor(e) {
    Pr(this, "name", "TaskAbortError");
    Pr(this, "message");
    this.code = e, this.message = `${z0} ${Vs} (reason: ${e})`;
  }
}, Hs = (e, t) => {
  if (typeof e != "function")
    throw new Error(Be(32));
}, Qi = () => {
}, Ih = (e, t = Qi) => (e.catch(t), e), Fh = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), An = (e, t) => {
  const n = e.signal;
  n.aborted || ("reason" in n || Object.defineProperty(n, "reason", {
    enumerable: !0,
    value: t,
    configurable: !0,
    writable: !0
  }), e.abort(t));
}, On = (e) => {
  if (e.aborted) {
    const {
      reason: t
    } = e;
    throw new yl(t);
  }
};
function zh(e, t) {
  let n = Qi;
  return new Promise((r, o) => {
    const i = () => o(new yl(e.reason));
    if (e.aborted) {
      i();
      return;
    }
    n = Fh(e, i), t.finally(() => n()).then(r, o);
  }).finally(() => {
    n = Qi;
  });
}
var W0 = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (n) {
    return {
      status: n instanceof yl ? "cancelled" : "rejected",
      error: n
    };
  } finally {
    t == null || t();
  }
}, Ki = (e) => (t) => Ih(zh(e, t).then((n) => (On(e), n))), Bh = (e) => {
  const t = Ki(e);
  return (n) => t(new Promise((r) => setTimeout(r, n)));
}, {
  assign: dr
} = Object, Rf = {}, wl = "listenerMiddleware", V0 = (e, t) => {
  const n = (r) => Fh(e, () => An(r, e.reason));
  return (r, o) => {
    Hs(r);
    const i = new AbortController();
    n(i);
    const l = W0(async () => {
      On(e), On(i.signal);
      const u = await r({
        pause: Ki(i.signal),
        delay: Bh(i.signal),
        signal: i.signal
      });
      return On(i.signal), u;
    }, () => An(i, b0));
    return o != null && o.autoJoin && t.push(l.catch(Qi)), {
      result: Ki(e)(l),
      cancel() {
        An(i, B0);
      }
    };
  };
}, H0 = (e, t) => {
  const n = async (r, o) => {
    On(t);
    let i = () => {
    };
    const u = [new Promise((a, s) => {
      let f = e({
        predicate: r,
        effect: (m, d) => {
          d.unsubscribe(), a([m, d.getState(), d.getOriginalState()]);
        }
      });
      i = () => {
        f(), s();
      };
    })];
    o != null && u.push(new Promise((a) => setTimeout(a, o, null)));
    try {
      const a = await zh(t, Promise.race(u));
      return On(t), a;
    } finally {
      i();
    }
  };
  return (r, o) => Ih(n(r, o));
}, bh = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = zt(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o) throw new Error(Be(21));
  return Hs(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, Uh = /* @__PURE__ */ dr((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = bh(e);
  return {
    id: Mh(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Be(22));
    }
  };
}, {
  withTypes: () => Uh
}), Ma = (e) => {
  e.pending.forEach((t) => {
    An(t, La);
  });
}, Q0 = (e) => () => {
  e.forEach(Ma), e.clear();
}, Tf = (e, t, n) => {
  try {
    e(t, n);
  } catch (r) {
    setTimeout(() => {
      throw r;
    }, 0);
  }
}, Wh = /* @__PURE__ */ dr(/* @__PURE__ */ zt(`${wl}/add`), {
  withTypes: () => Wh
}), K0 = /* @__PURE__ */ zt(`${wl}/removeAll`), Vh = /* @__PURE__ */ dr(/* @__PURE__ */ zt(`${wl}/remove`), {
  withTypes: () => Vh
}), Y0 = (...e) => {
  console.error(`${wl}/error`, ...e);
}, kk = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), {
    extra: n,
    onError: r = Y0
  } = e;
  Hs(r);
  const o = (f) => (f.unsubscribe = () => t.delete(f.id), t.set(f.id, f), (m) => {
    f.unsubscribe(), m != null && m.cancelActive && Ma(f);
  }), i = (f) => {
    let m = _f(Array.from(t.values()), (d) => d.effect === f.effect);
    return m || (m = Uh(f)), o(m);
  };
  dr(i, {
    withTypes: () => i
  });
  const l = (f) => {
    const {
      type: m,
      effect: d,
      predicate: S
    } = bh(f), g = _f(Array.from(t.values()), (v) => (typeof m == "string" ? v.type === m : v.predicate === S) && v.effect === d);
    return g && (g.unsubscribe(), f.cancelActive && Ma(g)), !!g;
  };
  dr(l, {
    withTypes: () => l
  });
  const u = async (f, m, d, S) => {
    const g = new AbortController(), v = H0(i, g.signal), C = [];
    try {
      f.pending.add(g), await Promise.resolve(f.effect(
        m,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        dr({}, d, {
          getOriginalState: S,
          condition: (p, c) => v(p, c).then(Boolean),
          take: v,
          delay: Bh(g.signal),
          pause: Ki(g.signal),
          extra: n,
          signal: g.signal,
          fork: V0(g.signal, C),
          unsubscribe: f.unsubscribe,
          subscribe: () => {
            t.set(f.id, f);
          },
          cancelActiveListeners: () => {
            f.pending.forEach((p, c, h) => {
              p !== g && (An(p, La), h.delete(p));
            });
          },
          cancel: () => {
            An(g, La), f.pending.delete(g);
          },
          throwIfCancelled: () => {
            On(g.signal);
          }
        })
      ));
    } catch (p) {
      p instanceof yl || Tf(r, p, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(C), An(g, U0), f.pending.delete(g);
    }
  }, a = Q0(t);
  return {
    middleware: (f) => (m) => (d) => {
      if (!kh(d))
        return m(d);
      if (Wh.match(d))
        return i(d.payload);
      if (K0.match(d)) {
        a();
        return;
      }
      if (Vh.match(d))
        return l(d.payload);
      let S = f.getState();
      const g = () => {
        if (S === Rf)
          throw new Error(Be(23));
        return S;
      };
      let v;
      try {
        if (v = m(d), t.size > 0) {
          const C = f.getState(), p = Array.from(t.values());
          for (const c of p) {
            let h = !1;
            try {
              h = c.predicate(d, C, S);
            } catch (w) {
              h = !1, Tf(r, w, {
                raisedBy: "predicate"
              });
            }
            h && u(c, d, f, g);
          }
        }
      } finally {
        S = Rf;
      }
      return v;
    },
    startListening: i,
    stopListening: l,
    clearListeners: a
  };
};
function Be(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var $a = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(t);
  })(Nr, function(n) {
    function r(E, k) {
      E.super_ = k, E.prototype = Object.create(k.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } });
    }
    function o(E, k) {
      Object.defineProperty(this, "kind", { value: E, enumerable: !0 }), k && k.length && Object.defineProperty(this, "path", { value: k, enumerable: !0 });
    }
    function i(E, k, y) {
      i.super_.call(this, "E", E), Object.defineProperty(this, "lhs", { value: k, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: y, enumerable: !0 });
    }
    function l(E, k) {
      l.super_.call(this, "N", E), Object.defineProperty(this, "rhs", { value: k, enumerable: !0 });
    }
    function u(E, k) {
      u.super_.call(this, "D", E), Object.defineProperty(this, "lhs", { value: k, enumerable: !0 });
    }
    function a(E, k, y) {
      a.super_.call(this, "A", E), Object.defineProperty(this, "index", { value: k, enumerable: !0 }), Object.defineProperty(this, "item", { value: y, enumerable: !0 });
    }
    function s(E, k, y) {
      var P = E.slice(k + 1 || E.length);
      return E.length = k < 0 ? E.length + k : k, E.push.apply(E, P), E;
    }
    function f(E) {
      var k = typeof E > "u" ? "undefined" : ce(E);
      return k !== "object" ? k : E === Math ? "math" : E === null ? "null" : Array.isArray(E) ? "array" : Object.prototype.toString.call(E) === "[object Date]" ? "date" : typeof E.toString == "function" && /^\/.*\//.test(E.toString()) ? "regexp" : "object";
    }
    function m(E, k, y, P, D, x, $) {
      D = D || [], $ = $ || [];
      var O = D.slice(0);
      if (typeof x < "u") {
        if (P) {
          if (typeof P == "function" && P(O, x)) return;
          if ((typeof P > "u" ? "undefined" : ce(P)) === "object") {
            if (P.prefilter && P.prefilter(O, x)) return;
            if (P.normalize) {
              var X = P.normalize(O, x, E, k);
              X && (E = X[0], k = X[1]);
            }
          }
        }
        O.push(x);
      }
      f(E) === "regexp" && f(k) === "regexp" && (E = E.toString(), k = k.toString());
      var Q = typeof E > "u" ? "undefined" : ce(E), H = typeof k > "u" ? "undefined" : ce(k), z = Q !== "undefined" || $ && $[$.length - 1].lhs && $[$.length - 1].lhs.hasOwnProperty(x), J = H !== "undefined" || $ && $[$.length - 1].rhs && $[$.length - 1].rhs.hasOwnProperty(x);
      if (!z && J) y(new l(O, k));
      else if (!J && z) y(new u(O, E));
      else if (f(E) !== f(k)) y(new i(O, E, k));
      else if (f(E) === "date" && E - k !== 0) y(new i(O, E, k));
      else if (Q === "object" && E !== null && k !== null) if ($.filter(function(b) {
        return b.lhs === E;
      }).length) E !== k && y(new i(O, E, k));
      else {
        if ($.push({ lhs: E, rhs: k }), Array.isArray(E)) {
          var K;
          for (E.length, K = 0; K < E.length; K++) K >= k.length ? y(new a(O, K, new u(void 0, E[K]))) : m(E[K], k[K], y, P, O, K, $);
          for (; K < k.length; ) y(new a(O, K, new l(void 0, k[K++])));
        } else {
          var Y = Object.keys(E), ne = Object.keys(k);
          Y.forEach(function(b, ae) {
            var mt = ne.indexOf(b);
            mt >= 0 ? (m(E[b], k[b], y, P, O, b, $), ne = s(ne, mt)) : m(E[b], void 0, y, P, O, b, $);
          }), ne.forEach(function(b) {
            m(void 0, k[b], y, P, O, b, $);
          });
        }
        $.length = $.length - 1;
      }
      else E !== k && (Q === "number" && isNaN(E) && isNaN(k) || y(new i(O, E, k)));
    }
    function d(E, k, y, P) {
      return P = P || [], m(E, k, function(D) {
        D && P.push(D);
      }, y), P.length ? P : void 0;
    }
    function S(E, k, y) {
      if (y.path && y.path.length) {
        var P, D = E[k], x = y.path.length - 1;
        for (P = 0; P < x; P++) D = D[y.path[P]];
        switch (y.kind) {
          case "A":
            S(D[y.path[P]], y.index, y.item);
            break;
          case "D":
            delete D[y.path[P]];
            break;
          case "E":
          case "N":
            D[y.path[P]] = y.rhs;
        }
      } else switch (y.kind) {
        case "A":
          S(E[k], y.index, y.item);
          break;
        case "D":
          E = s(E, k);
          break;
        case "E":
        case "N":
          E[k] = y.rhs;
      }
      return E;
    }
    function g(E, k, y) {
      if (E && k && y && y.kind) {
        for (var P = E, D = -1, x = y.path ? y.path.length - 1 : 0; ++D < x; ) typeof P[y.path[D]] > "u" && (P[y.path[D]] = typeof y.path[D] == "number" ? [] : {}), P = P[y.path[D]];
        switch (y.kind) {
          case "A":
            S(y.path ? P[y.path[D]] : P, y.index, y.item);
            break;
          case "D":
            delete P[y.path[D]];
            break;
          case "E":
          case "N":
            P[y.path[D]] = y.rhs;
        }
      }
    }
    function v(E, k, y) {
      if (y.path && y.path.length) {
        var P, D = E[k], x = y.path.length - 1;
        for (P = 0; P < x; P++) D = D[y.path[P]];
        switch (y.kind) {
          case "A":
            v(D[y.path[P]], y.index, y.item);
            break;
          case "D":
            D[y.path[P]] = y.lhs;
            break;
          case "E":
            D[y.path[P]] = y.lhs;
            break;
          case "N":
            delete D[y.path[P]];
        }
      } else switch (y.kind) {
        case "A":
          v(E[k], y.index, y.item);
          break;
        case "D":
          E[k] = y.lhs;
          break;
        case "E":
          E[k] = y.lhs;
          break;
        case "N":
          E = s(E, k);
      }
      return E;
    }
    function C(E, k, y) {
      if (E && k && y && y.kind) {
        var P, D, x = E;
        for (D = y.path.length - 1, P = 0; P < D; P++) typeof x[y.path[P]] > "u" && (x[y.path[P]] = {}), x = x[y.path[P]];
        switch (y.kind) {
          case "A":
            v(x[y.path[P]], y.index, y.item);
            break;
          case "D":
            x[y.path[P]] = y.lhs;
            break;
          case "E":
            x[y.path[P]] = y.lhs;
            break;
          case "N":
            delete x[y.path[P]];
        }
      }
    }
    function p(E, k, y) {
      if (E && k) {
        var P = function(D) {
          y && !y(E, k, D) || g(E, k, D);
        };
        m(E, k, P);
      }
    }
    function c(E) {
      return "color: " + M[E].color + "; font-weight: bold";
    }
    function h(E) {
      var k = E.kind, y = E.path, P = E.lhs, D = E.rhs, x = E.index, $ = E.item;
      switch (k) {
        case "E":
          return [y.join("."), P, "→", D];
        case "N":
          return [y.join("."), D];
        case "D":
          return [y.join(".")];
        case "A":
          return [y.join(".") + "[" + x + "]", $];
        default:
          return [];
      }
    }
    function w(E, k, y, P) {
      var D = d(E, k);
      try {
        P ? y.groupCollapsed("diff") : y.group("diff");
      } catch {
        y.log("diff");
      }
      D ? D.forEach(function(x) {
        var $ = x.kind, O = h(x);
        y.log.apply(y, ["%c " + M[$].text, c($)].concat(it(O)));
      }) : y.log("—— no diff ——");
      try {
        y.groupEnd();
      } catch {
        y.log("—— diff end —— ");
      }
    }
    function N(E, k, y, P) {
      switch (typeof E > "u" ? "undefined" : ce(E)) {
        case "object":
          return typeof E[P] == "function" ? E[P].apply(E, it(y)) : E[P];
        case "function":
          return E(k);
        default:
          return E;
      }
    }
    function R(E) {
      var k = E.timestamp, y = E.duration;
      return function(P, D, x) {
        var $ = ["action"];
        return $.push("%c" + String(P.type)), k && $.push("%c@ " + D), y && $.push("%c(in " + x.toFixed(2) + " ms)"), $.join(" ");
      };
    }
    function A(E, k) {
      var y = k.logger, P = k.actionTransformer, D = k.titleFormatter, x = D === void 0 ? R(k) : D, $ = k.collapsed, O = k.colors, X = k.level, Q = k.diff, H = typeof k.titleFormatter > "u";
      E.forEach(function(z, J) {
        var K = z.started, Y = z.startedTime, ne = z.action, b = z.prevState, ae = z.error, mt = z.took, oe = z.nextState, Kt = E[J + 1];
        Kt && (oe = Kt.prevState, mt = Kt.started - K);
        var Le = P(ne), We = typeof $ == "function" ? $(function() {
          return oe;
        }, ne, z) : $, V = Se(Y), fe = O.title ? "color: " + O.title(Le) + ";" : "", Tt = ["color: gray; font-weight: lighter;"];
        Tt.push(fe), k.timestamp && Tt.push("color: gray; font-weight: lighter;"), k.duration && Tt.push("color: gray; font-weight: lighter;");
        var Dt = x(Le, V, mt);
        try {
          We ? O.title && H ? y.groupCollapsed.apply(y, ["%c " + Dt].concat(Tt)) : y.groupCollapsed(Dt) : O.title && H ? y.group.apply(y, ["%c " + Dt].concat(Tt)) : y.group(Dt);
        } catch {
          y.log(Dt);
        }
        var lt = N(X, Le, [b], "prevState"), Ul = N(X, Le, [Le], "action"), Wl = N(X, Le, [ae, b], "error"), Vl = N(X, Le, [oe], "nextState");
        if (lt) if (O.prevState) {
          var Km = "color: " + O.prevState(b) + "; font-weight: bold";
          y[lt]("%c prev state", Km, b);
        } else y[lt]("prev state", b);
        if (Ul) if (O.action) {
          var Ym = "color: " + O.action(Le) + "; font-weight: bold";
          y[Ul]("%c action    ", Ym, Le);
        } else y[Ul]("action    ", Le);
        if (ae && Wl) if (O.error) {
          var Gm = "color: " + O.error(ae, b) + "; font-weight: bold;";
          y[Wl]("%c error     ", Gm, ae);
        } else y[Wl]("error     ", ae);
        if (Vl) if (O.nextState) {
          var Xm = "color: " + O.nextState(oe) + "; font-weight: bold";
          y[Vl]("%c next state", Xm, oe);
        } else y[Vl]("next state", oe);
        Q && w(b, oe, y, We);
        try {
          y.groupEnd();
        } catch {
          y.log("—— log end ——");
        }
      });
    }
    function T() {
      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = Object.assign({}, U, E), y = k.logger, P = k.stateTransformer, D = k.errorTransformer, x = k.predicate, $ = k.logErrors, O = k.diffPredicate;
      if (typeof y > "u") return function() {
        return function(Q) {
          return function(H) {
            return Q(H);
          };
        };
      };
      if (E.getState && E.dispatch) return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
        return function(Q) {
          return function(H) {
            return Q(H);
          };
        };
      };
      var X = [];
      return function(Q) {
        var H = Q.getState;
        return function(z) {
          return function(J) {
            if (typeof x == "function" && !x(H, J)) return z(J);
            var K = {};
            X.push(K), K.started = De.now(), K.startedTime = /* @__PURE__ */ new Date(), K.prevState = P(H()), K.action = J;
            var Y = void 0;
            if ($) try {
              Y = z(J);
            } catch (b) {
              K.error = D(b);
            }
            else Y = z(J);
            K.took = De.now() - K.started, K.nextState = P(H());
            var ne = k.diff && typeof O == "function" ? O(H, J) : k.diff;
            if (A(X, Object.assign({}, k, { diff: ne })), X.length = 0, K.error) throw K.error;
            return Y;
          };
        };
      };
    }
    var B, F, me = function(E, k) {
      return new Array(k + 1).join(E);
    }, ue = function(E, k) {
      return me("0", k - E.toString().length) + E;
    }, Se = function(E) {
      return ue(E.getHours(), 2) + ":" + ue(E.getMinutes(), 2) + ":" + ue(E.getSeconds(), 2) + "." + ue(E.getMilliseconds(), 3);
    }, De = typeof performance < "u" && performance !== null && typeof performance.now == "function" ? performance : Date, ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(E) {
      return typeof E;
    } : function(E) {
      return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E;
    }, it = function(E) {
      if (Array.isArray(E)) {
        for (var k = 0, y = Array(E.length); k < E.length; k++) y[k] = E[k];
        return y;
      }
      return Array.from(E);
    }, ye = [];
    B = (typeof Nr > "u" ? "undefined" : ce(Nr)) === "object" && Nr ? Nr : typeof window < "u" ? window : {}, F = B.DeepDiff, F && ye.push(function() {
      typeof F < "u" && B.DeepDiff === d && (B.DeepDiff = F, F = void 0);
    }), r(i, o), r(l, o), r(u, o), r(a, o), Object.defineProperties(d, { diff: { value: d, enumerable: !0 }, observableDiff: { value: m, enumerable: !0 }, applyDiff: { value: p, enumerable: !0 }, applyChange: { value: g, enumerable: !0 }, revertChange: { value: C, enumerable: !0 }, isConflict: { value: function() {
      return typeof F < "u";
    }, enumerable: !0 }, noConflict: { value: function() {
      return ye && (ye.forEach(function(E) {
        E();
      }), ye = null), d;
    }, enumerable: !0 } });
    var M = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } }, U = { level: "log", logger: console, logErrors: !0, collapsed: void 0, predicate: void 0, duration: !1, timestamp: !0, stateTransformer: function(E) {
      return E;
    }, actionTransformer: function(E) {
      return E;
    }, errorTransformer: function(E) {
      return E;
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
    } }, diff: !1, diffPredicate: void 0, transformer: void 0 }, W = function() {
      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = E.dispatch, y = E.getState;
      return typeof k == "function" || typeof y == "function" ? T()({ dispatch: k, getState: y }) : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
    };
    n.defaults = U, n.createLogger = T, n.logger = W, n.default = W, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})($a, $a.exports);
var G0 = $a.exports;
const Ek = /* @__PURE__ */ Ji(G0), X0 = {
  theme: void 0,
  kind: void 0
}, Hh = Ws({
  name: "theme",
  initialState: X0,
  reducers: {
    changeTheme: (e, t) => {
      e.kind = t.payload.kind, e.theme = { ...e.theme, ...t.payload.theme ?? {} }, e.kind === "light" ? (e.theme.computedOne = "rgba(0, 0, 0, 0.05)", e.theme.computedTwo = "rgba(0, 0, 0, 0.1)") : e.kind === "dark" ? (e.theme.computedOne = "rgba(255, 255, 255, 0.05)", e.theme.computedTwo = "rgba(255, 255, 255, 0.1)") : (e.theme.computedOne = "transparent", e.theme.computedTwo = "transparent");
    }
  }
}), Z0 = Fs, { changeTheme: xk } = Hh.actions, Ck = Hh.reducer, J0 = {
  current: ["starting"],
  history: []
}, Qh = Ws({
  name: "router",
  initialState: J0,
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
}), { goTo: q0, goBack: _k, openLink: e1 } = Qh.actions, t1 = wh, Kh = Fs, Pk = Qh.reducer;
var Yh = { exports: {} }, ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs = Symbol.for("react.element"), Ks = Symbol.for("react.portal"), Sl = Symbol.for("react.fragment"), kl = Symbol.for("react.strict_mode"), El = Symbol.for("react.profiler"), xl = Symbol.for("react.provider"), Cl = Symbol.for("react.context"), n1 = Symbol.for("react.server_context"), _l = Symbol.for("react.forward_ref"), Pl = Symbol.for("react.suspense"), Nl = Symbol.for("react.suspense_list"), Al = Symbol.for("react.memo"), Ol = Symbol.for("react.lazy"), r1 = Symbol.for("react.offscreen"), Gh;
Gh = Symbol.for("react.module.reference");
function ht(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Qs:
        switch (e = e.type, e) {
          case Sl:
          case El:
          case kl:
          case Pl:
          case Nl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case n1:
              case Cl:
              case _l:
              case Ol:
              case Al:
              case xl:
                return e;
              default:
                return t;
            }
        }
      case Ks:
        return t;
    }
  }
}
ee.ContextConsumer = Cl;
ee.ContextProvider = xl;
ee.Element = Qs;
ee.ForwardRef = _l;
ee.Fragment = Sl;
ee.Lazy = Ol;
ee.Memo = Al;
ee.Portal = Ks;
ee.Profiler = El;
ee.StrictMode = kl;
ee.Suspense = Pl;
ee.SuspenseList = Nl;
ee.isAsyncMode = function() {
  return !1;
};
ee.isConcurrentMode = function() {
  return !1;
};
ee.isContextConsumer = function(e) {
  return ht(e) === Cl;
};
ee.isContextProvider = function(e) {
  return ht(e) === xl;
};
ee.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qs;
};
ee.isForwardRef = function(e) {
  return ht(e) === _l;
};
ee.isFragment = function(e) {
  return ht(e) === Sl;
};
ee.isLazy = function(e) {
  return ht(e) === Ol;
};
ee.isMemo = function(e) {
  return ht(e) === Al;
};
ee.isPortal = function(e) {
  return ht(e) === Ks;
};
ee.isProfiler = function(e) {
  return ht(e) === El;
};
ee.isStrictMode = function(e) {
  return ht(e) === kl;
};
ee.isSuspense = function(e) {
  return ht(e) === Pl;
};
ee.isSuspenseList = function(e) {
  return ht(e) === Nl;
};
ee.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Sl || e === El || e === kl || e === Pl || e === Nl || e === r1 || typeof e == "object" && e !== null && (e.$$typeof === Ol || e.$$typeof === Al || e.$$typeof === xl || e.$$typeof === Cl || e.$$typeof === _l || e.$$typeof === Gh || e.getModuleId !== void 0);
};
ee.typeOf = ht;
Yh.exports = ee;
var Xh = Yh.exports;
function o1(e) {
  function t(k, y, P, D, x) {
    for (var $ = 0, O = 0, X = 0, Q = 0, H, z, J = 0, K = 0, Y, ne = Y = H = 0, b = 0, ae = 0, mt = 0, oe = 0, Kt = P.length, Le = Kt - 1, We, V = "", fe = "", Tt = "", Dt = "", lt; b < Kt; ) {
      if (z = P.charCodeAt(b), b === Le && O + Q + X + $ !== 0 && (O !== 0 && (z = O === 47 ? 10 : 47), Q = X = $ = 0, Kt++, Le++), O + Q + X + $ === 0) {
        if (b === Le && (0 < ae && (V = V.replace(d, "")), 0 < V.trim().length)) {
          switch (z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              V += P.charAt(b);
          }
          z = 59;
        }
        switch (z) {
          case 123:
            for (V = V.trim(), H = V.charCodeAt(0), Y = 1, oe = ++b; b < Kt; ) {
              switch (z = P.charCodeAt(b)) {
                case 123:
                  Y++;
                  break;
                case 125:
                  Y--;
                  break;
                case 47:
                  switch (z = P.charCodeAt(b + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ne = b + 1; ne < Le; ++ne)
                          switch (P.charCodeAt(ne)) {
                            case 47:
                              if (z === 42 && P.charCodeAt(ne - 1) === 42 && b + 2 !== ne) {
                                b = ne + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (z === 47) {
                                b = ne + 1;
                                break e;
                              }
                          }
                        b = ne;
                      }
                  }
                  break;
                case 91:
                  z++;
                case 40:
                  z++;
                case 34:
                case 39:
                  for (; b++ < Le && P.charCodeAt(b) !== z; )
                    ;
              }
              if (Y === 0) break;
              b++;
            }
            switch (Y = P.substring(oe, b), H === 0 && (H = (V = V.replace(m, "").trim()).charCodeAt(0)), H) {
              case 64:
                switch (0 < ae && (V = V.replace(d, "")), z = V.charCodeAt(1), z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ae = y;
                    break;
                  default:
                    ae = it;
                }
                if (Y = t(y, ae, Y, z, x + 1), oe = Y.length, 0 < M && (ae = n(it, V, mt), lt = u(3, Y, ae, y, Se, ue, oe, z, x, D), V = ae.join(""), lt !== void 0 && (oe = (Y = lt.trim()).length) === 0 && (z = 0, Y = "")), 0 < oe) switch (z) {
                  case 115:
                    V = V.replace(R, l);
                  case 100:
                  case 109:
                  case 45:
                    Y = V + "{" + Y + "}";
                    break;
                  case 107:
                    V = V.replace(c, "$1 $2"), Y = V + "{" + Y + "}", Y = ce === 1 || ce === 2 && i("@" + Y, 3) ? "@-webkit-" + Y + "@" + Y : "@" + Y;
                    break;
                  default:
                    Y = V + Y, D === 112 && (Y = (fe += Y, ""));
                }
                else Y = "";
                break;
              default:
                Y = t(y, n(y, V, mt), Y, D, x + 1);
            }
            Tt += Y, Y = mt = ae = ne = H = 0, V = "", z = P.charCodeAt(++b);
            break;
          case 125:
          case 59:
            if (V = (0 < ae ? V.replace(d, "") : V).trim(), 1 < (oe = V.length)) switch (ne === 0 && (H = V.charCodeAt(0), H === 45 || 96 < H && 123 > H) && (oe = (V = V.replace(" ", ":")).length), 0 < M && (lt = u(1, V, y, k, Se, ue, fe.length, D, x, D)) !== void 0 && (oe = (V = lt.trim()).length) === 0 && (V = "\0\0"), H = V.charCodeAt(0), z = V.charCodeAt(1), H) {
              case 0:
                break;
              case 64:
                if (z === 105 || z === 99) {
                  Dt += V + P.charAt(b);
                  break;
                }
              default:
                V.charCodeAt(oe - 1) !== 58 && (fe += o(V, H, z, V.charCodeAt(2)));
            }
            mt = ae = ne = H = 0, V = "", z = P.charCodeAt(++b);
        }
      }
      switch (z) {
        case 13:
        case 10:
          O === 47 ? O = 0 : 1 + H === 0 && D !== 107 && 0 < V.length && (ae = 1, V += "\0"), 0 < M * W && u(0, V, y, k, Se, ue, fe.length, D, x, D), ue = 1, Se++;
          break;
        case 59:
        case 125:
          if (O + Q + X + $ === 0) {
            ue++;
            break;
          }
        default:
          switch (ue++, We = P.charAt(b), z) {
            case 9:
            case 32:
              if (Q + $ + O === 0) switch (J) {
                case 44:
                case 58:
                case 9:
                case 32:
                  We = "";
                  break;
                default:
                  z !== 32 && (We = " ");
              }
              break;
            case 0:
              We = "\\0";
              break;
            case 12:
              We = "\\f";
              break;
            case 11:
              We = "\\v";
              break;
            case 38:
              Q + O + $ === 0 && (ae = mt = 1, We = "\f" + We);
              break;
            case 108:
              if (Q + O + $ + De === 0 && 0 < ne) switch (b - ne) {
                case 2:
                  J === 112 && P.charCodeAt(b - 3) === 58 && (De = J);
                case 8:
                  K === 111 && (De = K);
              }
              break;
            case 58:
              Q + O + $ === 0 && (ne = b);
              break;
            case 44:
              O + X + Q + $ === 0 && (ae = 1, We += "\r");
              break;
            case 34:
            case 39:
              O === 0 && (Q = Q === z ? 0 : Q === 0 ? z : Q);
              break;
            case 91:
              Q + O + X === 0 && $++;
              break;
            case 93:
              Q + O + X === 0 && $--;
              break;
            case 41:
              Q + O + $ === 0 && X--;
              break;
            case 40:
              if (Q + O + $ === 0) {
                if (H === 0) switch (2 * J + 3 * K) {
                  case 533:
                    break;
                  default:
                    H = 1;
                }
                X++;
              }
              break;
            case 64:
              O + X + Q + $ + ne + Y === 0 && (Y = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + $ + X)) switch (O) {
                case 0:
                  switch (2 * z + 3 * P.charCodeAt(b + 1)) {
                    case 235:
                      O = 47;
                      break;
                    case 220:
                      oe = b, O = 42;
                  }
                  break;
                case 42:
                  z === 47 && J === 42 && oe + 2 !== b && (P.charCodeAt(oe + 2) === 33 && (fe += P.substring(oe, b + 1)), We = "", O = 0);
              }
          }
          O === 0 && (V += We);
      }
      K = J, J = z, b++;
    }
    if (oe = fe.length, 0 < oe) {
      if (ae = y, 0 < M && (lt = u(2, fe, ae, k, Se, ue, oe, D, x, D), lt !== void 0 && (fe = lt).length === 0)) return Dt + fe + Tt;
      if (fe = ae.join(",") + "{" + fe + "}", ce * De !== 0) {
        switch (ce !== 2 || i(fe, 2) || (De = 0), De) {
          case 111:
            fe = fe.replace(w, ":-moz-$1") + fe;
            break;
          case 112:
            fe = fe.replace(h, "::-webkit-input-$1") + fe.replace(h, "::-moz-$1") + fe.replace(h, ":-ms-input-$1") + fe;
        }
        De = 0;
      }
    }
    return Dt + fe + Tt;
  }
  function n(k, y, P) {
    var D = y.trim().split(C);
    y = D;
    var x = D.length, $ = k.length;
    switch ($) {
      case 0:
      case 1:
        var O = 0;
        for (k = $ === 0 ? "" : k[0] + " "; O < x; ++O)
          y[O] = r(k, y[O], P).trim();
        break;
      default:
        var X = O = 0;
        for (y = []; O < x; ++O)
          for (var Q = 0; Q < $; ++Q)
            y[X++] = r(k[Q] + " ", D[O], P).trim();
    }
    return y;
  }
  function r(k, y, P) {
    var D = y.charCodeAt(0);
    switch (33 > D && (D = (y = y.trim()).charCodeAt(0)), D) {
      case 38:
        return y.replace(p, "$1" + k.trim());
      case 58:
        return k.trim() + y.replace(p, "$1" + k.trim());
      default:
        if (0 < 1 * P && 0 < y.indexOf("\f")) return y.replace(p, (k.charCodeAt(0) === 58 ? "" : "$1") + k.trim());
    }
    return k + y;
  }
  function o(k, y, P, D) {
    var x = k + ";", $ = 2 * y + 3 * P + 4 * D;
    if ($ === 944) {
      k = x.indexOf(":", 9) + 1;
      var O = x.substring(k, x.length - 1).trim();
      return O = x.substring(0, k).trim() + O + ";", ce === 1 || ce === 2 && i(O, 1) ? "-webkit-" + O + O : O;
    }
    if (ce === 0 || ce === 2 && !i(x, 1)) return x;
    switch ($) {
      case 1015:
        return x.charCodeAt(10) === 97 ? "-webkit-" + x + x : x;
      case 951:
        return x.charCodeAt(3) === 116 ? "-webkit-" + x + x : x;
      case 963:
        return x.charCodeAt(5) === 110 ? "-webkit-" + x + x : x;
      case 1009:
        if (x.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + x + x;
      case 978:
        return "-webkit-" + x + "-moz-" + x + x;
      case 1019:
      case 983:
        return "-webkit-" + x + "-moz-" + x + "-ms-" + x + x;
      case 883:
        if (x.charCodeAt(8) === 45) return "-webkit-" + x + x;
        if (0 < x.indexOf("image-set(", 11)) return x.replace(me, "$1-webkit-$2") + x;
        break;
      case 932:
        if (x.charCodeAt(4) === 45) switch (x.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + x.replace("-grow", "") + "-webkit-" + x + "-ms-" + x.replace("grow", "positive") + x;
          case 115:
            return "-webkit-" + x + "-ms-" + x.replace("shrink", "negative") + x;
          case 98:
            return "-webkit-" + x + "-ms-" + x.replace("basis", "preferred-size") + x;
        }
        return "-webkit-" + x + "-ms-" + x + x;
      case 964:
        return "-webkit-" + x + "-ms-flex-" + x + x;
      case 1023:
        if (x.charCodeAt(8) !== 99) break;
        return O = x.substring(x.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + O + "-webkit-" + x + "-ms-flex-pack" + O + x;
      case 1005:
        return g.test(x) ? x.replace(S, ":-webkit-") + x.replace(S, ":-moz-") + x : x;
      case 1e3:
        switch (O = x.substring(13).trim(), y = O.indexOf("-") + 1, O.charCodeAt(0) + O.charCodeAt(y)) {
          case 226:
            O = x.replace(N, "tb");
            break;
          case 232:
            O = x.replace(N, "tb-rl");
            break;
          case 220:
            O = x.replace(N, "lr");
            break;
          default:
            return x;
        }
        return "-webkit-" + x + "-ms-" + O + x;
      case 1017:
        if (x.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (y = (x = k).length - 10, O = (x.charCodeAt(y) === 33 ? x.substring(0, y) : x).substring(k.indexOf(":", 7) + 1).trim(), $ = O.charCodeAt(0) + (O.charCodeAt(7) | 0)) {
          case 203:
            if (111 > O.charCodeAt(8)) break;
          case 115:
            x = x.replace(O, "-webkit-" + O) + ";" + x;
            break;
          case 207:
          case 102:
            x = x.replace(O, "-webkit-" + (102 < $ ? "inline-" : "") + "box") + ";" + x.replace(O, "-webkit-" + O) + ";" + x.replace(O, "-ms-" + O + "box") + ";" + x;
        }
        return x + ";";
      case 938:
        if (x.charCodeAt(5) === 45) switch (x.charCodeAt(6)) {
          case 105:
            return O = x.replace("-items", ""), "-webkit-" + x + "-webkit-box-" + O + "-ms-flex-" + O + x;
          case 115:
            return "-webkit-" + x + "-ms-flex-item-" + x.replace(T, "") + x;
          default:
            return "-webkit-" + x + "-ms-flex-line-pack" + x.replace("align-content", "").replace(T, "") + x;
        }
        break;
      case 973:
      case 989:
        if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (F.test(k) === !0) return (O = k.substring(k.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(k.replace("stretch", "fill-available"), y, P, D).replace(":fill-available", ":stretch") : x.replace(O, "-webkit-" + O) + x.replace(O, "-moz-" + O.replace("fill-", "")) + x;
        break;
      case 962:
        if (x = "-webkit-" + x + (x.charCodeAt(5) === 102 ? "-ms-" + x : "") + x, P + D === 211 && x.charCodeAt(13) === 105 && 0 < x.indexOf("transform", 10)) return x.substring(0, x.indexOf(";", 27) + 1).replace(v, "$1-webkit-$2") + x;
    }
    return x;
  }
  function i(k, y) {
    var P = k.indexOf(y === 1 ? ":" : "{"), D = k.substring(0, y !== 3 ? P : 10);
    return P = k.substring(P + 1, k.length - 1), U(y !== 2 ? D : D.replace(B, "$1"), P, y);
  }
  function l(k, y) {
    var P = o(y, y.charCodeAt(0), y.charCodeAt(1), y.charCodeAt(2));
    return P !== y + ";" ? P.replace(A, " or ($1)").substring(4) : "(" + y + ")";
  }
  function u(k, y, P, D, x, $, O, X, Q, H) {
    for (var z = 0, J = y, K; z < M; ++z)
      switch (K = ye[z].call(f, k, J, P, D, x, $, O, X, Q, H)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          J = K;
      }
    if (J !== y) return J;
  }
  function a(k) {
    switch (k) {
      case void 0:
      case null:
        M = ye.length = 0;
        break;
      default:
        if (typeof k == "function") ye[M++] = k;
        else if (typeof k == "object") for (var y = 0, P = k.length; y < P; ++y)
          a(k[y]);
        else W = !!k | 0;
    }
    return a;
  }
  function s(k) {
    return k = k.prefix, k !== void 0 && (U = null, k ? typeof k != "function" ? ce = 1 : (ce = 2, U = k) : ce = 0), s;
  }
  function f(k, y) {
    var P = k;
    if (33 > P.charCodeAt(0) && (P = P.trim()), E = P, P = [E], 0 < M) {
      var D = u(-1, y, P, P, Se, ue, 0, 0, 0, 0);
      D !== void 0 && typeof D == "string" && (y = D);
    }
    var x = t(it, P, y, 0, 0);
    return 0 < M && (D = u(-2, x, P, P, Se, ue, x.length, 0, 0, 0), D !== void 0 && (x = D)), E = "", De = 0, ue = Se = 1, x;
  }
  var m = /^\0+/g, d = /[\0\r\f]/g, S = /: */g, g = /zoo|gra/, v = /([,: ])(transform)/g, C = /,\r+?/g, p = /([\t\r\n ])*\f?&/g, c = /@(k\w+)\s*(\S*)\s*/, h = /::(place)/g, w = /:(read-only)/g, N = /[svh]\w+-[tblr]{2}/, R = /\(\s*(.*)\s*\)/g, A = /([\s\S]*?);/g, T = /-self|flex-/g, B = /[^]*?(:[rp][el]a[\w-]+)[^]*/, F = /stretch|:\s*\w+\-(?:conte|avail)/, me = /([^-])(image-set\()/, ue = 1, Se = 1, De = 0, ce = 1, it = [], ye = [], M = 0, U = null, W = 0, E = "";
  return f.use = a, f.set = s, e !== void 0 && s(e), f;
}
var i1 = {
  animationIterationCount: 1,
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
};
function l1(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var u1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Df = /* @__PURE__ */ l1(
  function(e) {
    return u1.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Zh = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e = typeof Symbol == "function" && Symbol.for, Ys = _e ? Symbol.for("react.element") : 60103, Gs = _e ? Symbol.for("react.portal") : 60106, Rl = _e ? Symbol.for("react.fragment") : 60107, Tl = _e ? Symbol.for("react.strict_mode") : 60108, Dl = _e ? Symbol.for("react.profiler") : 60114, Ll = _e ? Symbol.for("react.provider") : 60109, Ml = _e ? Symbol.for("react.context") : 60110, Xs = _e ? Symbol.for("react.async_mode") : 60111, $l = _e ? Symbol.for("react.concurrent_mode") : 60111, jl = _e ? Symbol.for("react.forward_ref") : 60112, Il = _e ? Symbol.for("react.suspense") : 60113, a1 = _e ? Symbol.for("react.suspense_list") : 60120, Fl = _e ? Symbol.for("react.memo") : 60115, zl = _e ? Symbol.for("react.lazy") : 60116, s1 = _e ? Symbol.for("react.block") : 60121, c1 = _e ? Symbol.for("react.fundamental") : 60117, f1 = _e ? Symbol.for("react.responder") : 60118, d1 = _e ? Symbol.for("react.scope") : 60119;
function ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ys:
        switch (e = e.type, e) {
          case Xs:
          case $l:
          case Rl:
          case Dl:
          case Tl:
          case Il:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ml:
              case jl:
              case zl:
              case Fl:
              case Ll:
                return e;
              default:
                return t;
            }
        }
      case Gs:
        return t;
    }
  }
}
function Jh(e) {
  return ot(e) === $l;
}
te.AsyncMode = Xs;
te.ConcurrentMode = $l;
te.ContextConsumer = Ml;
te.ContextProvider = Ll;
te.Element = Ys;
te.ForwardRef = jl;
te.Fragment = Rl;
te.Lazy = zl;
te.Memo = Fl;
te.Portal = Gs;
te.Profiler = Dl;
te.StrictMode = Tl;
te.Suspense = Il;
te.isAsyncMode = function(e) {
  return Jh(e) || ot(e) === Xs;
};
te.isConcurrentMode = Jh;
te.isContextConsumer = function(e) {
  return ot(e) === Ml;
};
te.isContextProvider = function(e) {
  return ot(e) === Ll;
};
te.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ys;
};
te.isForwardRef = function(e) {
  return ot(e) === jl;
};
te.isFragment = function(e) {
  return ot(e) === Rl;
};
te.isLazy = function(e) {
  return ot(e) === zl;
};
te.isMemo = function(e) {
  return ot(e) === Fl;
};
te.isPortal = function(e) {
  return ot(e) === Gs;
};
te.isProfiler = function(e) {
  return ot(e) === Dl;
};
te.isStrictMode = function(e) {
  return ot(e) === Tl;
};
te.isSuspense = function(e) {
  return ot(e) === Il;
};
te.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Rl || e === $l || e === Dl || e === Tl || e === Il || e === a1 || typeof e == "object" && e !== null && (e.$$typeof === zl || e.$$typeof === Fl || e.$$typeof === Ll || e.$$typeof === Ml || e.$$typeof === jl || e.$$typeof === c1 || e.$$typeof === f1 || e.$$typeof === d1 || e.$$typeof === s1);
};
te.typeOf = ot;
Zh.exports = te;
var p1 = Zh.exports, Zs = p1, h1 = {
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
}, m1 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, v1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, qh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Js = {};
Js[Zs.ForwardRef] = v1;
Js[Zs.Memo] = qh;
function Lf(e) {
  return Zs.isMemo(e) ? qh : Js[e.$$typeof] || h1;
}
var g1 = Object.defineProperty, y1 = Object.getOwnPropertyNames, Mf = Object.getOwnPropertySymbols, w1 = Object.getOwnPropertyDescriptor, S1 = Object.getPrototypeOf, $f = Object.prototype;
function em(e, t, n) {
  if (typeof t != "string") {
    if ($f) {
      var r = S1(t);
      r && r !== $f && em(e, r, n);
    }
    var o = y1(t);
    Mf && (o = o.concat(Mf(t)));
    for (var i = Lf(e), l = Lf(t), u = 0; u < o.length; ++u) {
      var a = o[u];
      if (!m1[a] && !(n && n[a]) && !(l && l[a]) && !(i && i[a])) {
        var s = w1(t, a);
        try {
          g1(e, a, s);
        } catch {
        }
      }
    }
  }
  return e;
}
var k1 = em;
const E1 = /* @__PURE__ */ Ji(k1);
function It() {
  return (It = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var jf = function(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}, ja = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Xh.typeOf(e);
}, Yi = Object.freeze([]), fn = Object.freeze({});
function So(e) {
  return typeof e == "function";
}
function If(e) {
  return e.displayName || e.name || "Component";
}
function qs(e) {
  return e && typeof e.styledComponentId == "string";
}
var kr = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ec = typeof window < "u" && "HTMLElement" in window, x1 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY));
function To(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
}
var C1 = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(n) {
    for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
    return r;
  }, t.insertRules = function(n, r) {
    if (n >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, l = i; n >= l; ) (l <<= 1) < 0 && To(16, "" + n);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(o), this.length = l;
      for (var u = i; u < l; u++) this.groupSizes[u] = 0;
    }
    for (var a = this.indexOfGroup(n + 1), s = 0, f = r.length; s < f; s++) this.tag.insertRule(a, r[s]) && (this.groupSizes[n]++, a++);
  }, t.clearGroup = function(n) {
    if (n < this.length) {
      var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r;
      this.groupSizes[n] = 0;
      for (var l = o; l < i; l++) this.tag.deleteRule(o);
    }
  }, t.getGroup = function(n) {
    var r = "";
    if (n >= this.length || this.groupSizes[n] === 0) return r;
    for (var o = this.groupSizes[n], i = this.indexOfGroup(n), l = i + o, u = i; u < l; u++) r += this.tag.getRule(u) + `/*!sc*/
`;
    return r;
  }, e;
}(), mi = /* @__PURE__ */ new Map(), Gi = /* @__PURE__ */ new Map(), Zr = 1, Xo = function(e) {
  if (mi.has(e)) return mi.get(e);
  for (; Gi.has(Zr); ) Zr++;
  var t = Zr++;
  return mi.set(e, t), Gi.set(t, e), t;
}, _1 = function(e) {
  return Gi.get(e);
}, P1 = function(e, t) {
  t >= Zr && (Zr = t + 1), mi.set(e, t), Gi.set(t, e);
}, N1 = "style[" + kr + '][data-styled-version="5.3.11"]', A1 = new RegExp("^" + kr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), O1 = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, l = o.length; i < l; i++) (r = o[i]) && e.registerName(t, r);
}, R1 = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = n.length; o < i; o++) {
    var l = n[o].trim();
    if (l) {
      var u = l.match(A1);
      if (u) {
        var a = 0 | parseInt(u[1], 10), s = u[2];
        a !== 0 && (P1(s, a), O1(e, s, u[3]), e.getTag().insertRules(a, r)), r.length = 0;
      } else r.push(l);
    }
  }
}, T1 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, tm = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(u) {
    for (var a = u.childNodes, s = a.length; s >= 0; s--) {
      var f = a[s];
      if (f && f.nodeType === 1 && f.hasAttribute(kr)) return f;
    }
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(kr, "active"), r.setAttribute("data-styled-version", "5.3.11");
  var l = T1();
  return l && r.setAttribute("nonce", l), n.insertBefore(r, i), r;
}, D1 = function() {
  function e(n) {
    var r = this.element = tm(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var i = document.styleSheets, l = 0, u = i.length; l < u; l++) {
        var a = i[l];
        if (a.ownerNode === o) return a;
      }
      To(17);
    }(r), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    try {
      return this.sheet.insertRule(r, n), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(n) {
    this.sheet.deleteRule(n), this.length--;
  }, t.getRule = function(n) {
    var r = this.sheet.cssRules[n];
    return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
  }, e;
}(), L1 = function() {
  function e(n) {
    var r = this.element = tm(n);
    this.nodes = r.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    if (n <= this.length && n >= 0) {
      var o = document.createTextNode(r), i = this.nodes[n];
      return this.element.insertBefore(o, i || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, t.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, e;
}(), M1 = function() {
  function e(n) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    return n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0);
  }, t.deleteRule = function(n) {
    this.rules.splice(n, 1), this.length--;
  }, t.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, e;
}(), Ff = ec, $1 = { isServer: !ec, useCSSOMInjection: !x1 }, nm = function() {
  function e(n, r, o) {
    n === void 0 && (n = fn), r === void 0 && (r = {}), this.options = It({}, $1, {}, n), this.gs = r, this.names = new Map(o), this.server = !!n.isServer, !this.server && ec && Ff && (Ff = !1, function(i) {
      for (var l = document.querySelectorAll(N1), u = 0, a = l.length; u < a; u++) {
        var s = l[u];
        s && s.getAttribute(kr) !== "active" && (R1(i, s), s.parentNode && s.parentNode.removeChild(s));
      }
    }(this));
  }
  e.registerId = function(n) {
    return Xo(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(It({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, l = r.target, n = o ? new M1(l) : i ? new D1(l) : new L1(l), new C1(n)));
    var n, r, o, i, l;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (Xo(n), this.names.has(n)) this.names.get(n).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(n, o);
    }
  }, t.insertRules = function(n, r, o) {
    this.registerName(n, r), this.getTag().insertRules(Xo(n), o);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(Xo(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), o = r.length, i = "", l = 0; l < o; l++) {
        var u = _1(l);
        if (u !== void 0) {
          var a = n.names.get(u), s = r.getGroup(l);
          if (a && s && a.size) {
            var f = kr + ".g" + l + '[id="' + u + '"]', m = "";
            a !== void 0 && a.forEach(function(d) {
              d.length > 0 && (m += d + ",");
            }), i += "" + s + f + '{content:"' + m + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), j1 = /(a)(d)/gi, zf = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ia(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = zf(t % 52) + n;
  return (zf(t % 52) + n).replace(j1, "$1-$2");
}
var ir = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, rm = function(e) {
  return ir(5381, e);
};
function I1(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (So(n) && !qs(n)) return !1;
  }
  return !0;
}
var F1 = rm("5.3.11"), z1 = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && I1(t), this.componentId = n, this.baseHash = ir(F1, n), this.baseStyle = r, nm.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var l = Er(this.rules, t, n, r).join(""), u = Ia(ir(this.baseHash, l) >>> 0);
      if (!n.hasNameForId(o, u)) {
        var a = r(l, "." + u, void 0, o);
        n.insertRules(o, u, a);
      }
      i.push(u), this.staticRulesId = u;
    }
    else {
      for (var s = this.rules.length, f = ir(this.baseHash, r.hash), m = "", d = 0; d < s; d++) {
        var S = this.rules[d];
        if (typeof S == "string") m += S;
        else if (S) {
          var g = Er(S, t, n, r), v = Array.isArray(g) ? g.join("") : g;
          f = ir(f, v + d), m += v;
        }
      }
      if (m) {
        var C = Ia(f >>> 0);
        if (!n.hasNameForId(o, C)) {
          var p = r(m, "." + C, void 0, o);
          n.insertRules(o, C, p);
        }
        i.push(C);
      }
    }
    return i.join(" ");
  }, e;
}(), B1 = /^\s*\/\/.*$/gm, b1 = [":", "[", ".", "#"];
function U1(e) {
  var t, n, r, o, i = fn, l = i.options, u = l === void 0 ? fn : l, a = i.plugins, s = a === void 0 ? Yi : a, f = new o1(u), m = [], d = /* @__PURE__ */ function(v) {
    function C(p) {
      if (p) try {
        v(p + "}");
      } catch {
      }
    }
    return function(p, c, h, w, N, R, A, T, B, F) {
      switch (p) {
        case 1:
          if (B === 0 && c.charCodeAt(0) === 64) return v(c + ";"), "";
          break;
        case 2:
          if (T === 0) return c + "/*|*/";
          break;
        case 3:
          switch (T) {
            case 102:
            case 112:
              return v(h[0] + c), "";
            default:
              return c + (F === 0 ? "/*|*/" : "");
          }
        case -2:
          c.split("/*|*/}").forEach(C);
      }
    };
  }(function(v) {
    m.push(v);
  }), S = function(v, C, p) {
    return C === 0 && b1.indexOf(p[n.length]) !== -1 || p.match(o) ? v : "." + t;
  };
  function g(v, C, p, c) {
    c === void 0 && (c = "&");
    var h = v.replace(B1, ""), w = C && p ? p + " " + C + " { " + h + " }" : h;
    return t = c, n = C, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), f(p || !C ? "" : C, w);
  }
  return f.use([].concat(s, [function(v, C, p) {
    v === 2 && p.length && p[0].lastIndexOf(n) > 0 && (p[0] = p[0].replace(r, S));
  }, d, function(v) {
    if (v === -2) {
      var C = m;
      return m = [], C;
    }
  }])), g.hash = s.length ? s.reduce(function(v, C) {
    return C.name || To(15), ir(v, C.name);
  }, 5381).toString() : "", g;
}
var om = pn.createContext();
om.Consumer;
var im = pn.createContext(), W1 = (im.Consumer, new nm()), Fa = U1();
function V1() {
  return _.useContext(om) || W1;
}
function H1() {
  return _.useContext(im) || Fa;
}
var lm = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Fa);
      var l = r.name + i.hash;
      o.hasNameForId(r.id, l) || o.insertRules(r.id, l, i(r.rules, l, "@keyframes"));
    }, this.toString = function() {
      return To(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Fa), this.name + t.hash;
  }, e;
}(), Q1 = /([A-Z])/, K1 = /([A-Z])/g, Y1 = /^ms-/, G1 = function(e) {
  return "-" + e.toLowerCase();
};
function Bf(e) {
  return Q1.test(e) ? e.replace(K1, G1).replace(Y1, "-ms-") : e;
}
var bf = function(e) {
  return e == null || e === !1 || e === "";
};
function Er(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], l = 0, u = e.length; l < u; l += 1) (o = Er(e[l], t, n, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (bf(e)) return "";
  if (qs(e)) return "." + e.styledComponentId;
  if (So(e)) {
    if (typeof (s = e) != "function" || s.prototype && s.prototype.isReactComponent || !t) return e;
    var a = e(t);
    return Er(a, t, n, r);
  }
  var s;
  return e instanceof lm ? n ? (e.inject(n, r), e.getName(r)) : e : ja(e) ? function f(m, d) {
    var S, g, v = [];
    for (var C in m) m.hasOwnProperty(C) && !bf(m[C]) && (Array.isArray(m[C]) && m[C].isCss || So(m[C]) ? v.push(Bf(C) + ":", m[C], ";") : ja(m[C]) ? v.push.apply(v, f(m[C], C)) : v.push(Bf(C) + ": " + (S = C, (g = m[C]) == null || typeof g == "boolean" || g === "" ? "" : typeof g != "number" || g === 0 || S in i1 || S.startsWith("--") ? String(g).trim() : g + "px") + ";"));
    return d ? [d + " {"].concat(v, ["}"]) : v;
  }(e) : e.toString();
}
var Uf = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function um(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return So(e) || ja(e) ? Uf(Er(jf(Yi, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Uf(Er(jf(e, n)));
}
var X1 = function(e, t, n) {
  return n === void 0 && (n = fn), e.theme !== n.theme && e.theme || t || n.theme;
}, Z1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, J1 = /(^-|-$)/g;
function Eu(e) {
  return e.replace(Z1, "-").replace(J1, "");
}
var am = function(e) {
  return Ia(rm(e) >>> 0);
};
function Zo(e) {
  return typeof e == "string" && !0;
}
var za = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, q1 = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ew(e, t, n) {
  var r = e[n];
  za(t) && za(r) ? sm(r, t) : e[n] = t;
}
function sm(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var l = i[o];
    if (za(l)) for (var u in l) q1(u) && ew(e, l[u], u);
  }
  return e;
}
var cm = pn.createContext();
cm.Consumer;
var xu = {};
function fm(e, t, n) {
  var r = qs(e), o = !Zo(e), i = t.attrs, l = i === void 0 ? Yi : i, u = t.componentId, a = u === void 0 ? function(c, h) {
    var w = typeof c != "string" ? "sc" : Eu(c);
    xu[w] = (xu[w] || 0) + 1;
    var N = w + "-" + am("5.3.11" + w + xu[w]);
    return h ? h + "-" + N : N;
  }(t.displayName, t.parentComponentId) : u, s = t.displayName, f = s === void 0 ? function(c) {
    return Zo(c) ? "styled." + c : "Styled(" + If(c) + ")";
  }(e) : s, m = t.displayName && t.componentId ? Eu(t.displayName) + "-" + t.componentId : t.componentId || a, d = r && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, S = t.shouldForwardProp;
  r && e.shouldForwardProp && (S = t.shouldForwardProp ? function(c, h, w) {
    return e.shouldForwardProp(c, h, w) && t.shouldForwardProp(c, h, w);
  } : e.shouldForwardProp);
  var g, v = new z1(n, m, r ? e.componentStyle : void 0), C = v.isStatic && l.length === 0, p = function(c, h) {
    return function(w, N, R, A) {
      var T = w.attrs, B = w.componentStyle, F = w.defaultProps, me = w.foldedComponentIds, ue = w.shouldForwardProp, Se = w.styledComponentId, De = w.target, ce = function(D, x, $) {
        D === void 0 && (D = fn);
        var O = It({}, x, { theme: D }), X = {};
        return $.forEach(function(Q) {
          var H, z, J, K = Q;
          for (H in So(K) && (K = K(O)), K) O[H] = X[H] = H === "className" ? (z = X[H], J = K[H], z && J ? z + " " + J : z || J) : K[H];
        }), [O, X];
      }(X1(N, _.useContext(cm), F) || fn, N, T), it = ce[0], ye = ce[1], M = function(D, x, $, O) {
        var X = V1(), Q = H1(), H = x ? D.generateAndInjectStyles(fn, X, Q) : D.generateAndInjectStyles($, X, Q);
        return H;
      }(B, A, it), U = R, W = ye.$as || N.$as || ye.as || N.as || De, E = Zo(W), k = ye !== N ? It({}, N, {}, ye) : N, y = {};
      for (var P in k) P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? y.as = k[P] : (ue ? ue(P, Df, W) : !E || Df(P)) && (y[P] = k[P]));
      return N.style && ye.style !== N.style && (y.style = It({}, N.style, {}, ye.style)), y.className = Array.prototype.concat(me, Se, M !== Se ? M : null, N.className, ye.className).filter(Boolean).join(" "), y.ref = U, _.createElement(W, y);
    }(g, c, h, C);
  };
  return p.displayName = f, (g = pn.forwardRef(p)).attrs = d, g.componentStyle = v, g.displayName = f, g.shouldForwardProp = S, g.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Yi, g.styledComponentId = m, g.target = r ? e.target : e, g.withComponent = function(c) {
    var h = t.componentId, w = function(R, A) {
      if (R == null) return {};
      var T, B, F = {}, me = Object.keys(R);
      for (B = 0; B < me.length; B++) T = me[B], A.indexOf(T) >= 0 || (F[T] = R[T]);
      return F;
    }(t, ["componentId"]), N = h && h + "-" + (Zo(c) ? c : Eu(If(c)));
    return fm(c, It({}, w, { attrs: d, componentId: N }), n);
  }, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(c) {
    this._foldedDefaultProps = r ? sm({}, e.defaultProps, c) : c;
  } }), Object.defineProperty(g, "toString", { value: function() {
    return "." + g.styledComponentId;
  } }), o && E1(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), g;
}
var pt = function(e) {
  return function t(n, r, o) {
    if (o === void 0 && (o = fn), !Xh.isValidElementType(r)) return To(1, String(r));
    var i = function() {
      return n(r, o, um.apply(void 0, arguments));
    };
    return i.withConfig = function(l) {
      return t(n, r, It({}, o, {}, l));
    }, i.attrs = function(l) {
      return t(n, r, It({}, o, { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
    }, i;
  }(fm, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  pt[e] = pt(e);
});
function Nk(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var o = um.apply(void 0, [e].concat(n)).join(""), i = am(o);
  return new lm(i, o);
}
const tw = _.createContext(null), Cu = {
  didCatch: !1,
  error: null
};
class nw extends _.Component {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Cu;
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
      }), this.setState(Cu);
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
    if (r && n.error !== null && rw(t.resetKeys, o)) {
      var i, l;
      (i = (l = this.props).onReset) === null || i === void 0 || i.call(l, {
        next: o,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState(Cu);
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
      const a = {
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof n == "function")
        u = n(a);
      else if (r)
        u = _.createElement(r, a);
      else if (o === null || _.isValidElement(o))
        u = o;
      else
        throw l;
    }
    return _.createElement(tw.Provider, {
      value: {
        didCatch: i,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, u);
  }
}
function rw() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((n, r) => !Object.is(n, t[r]));
}
const ow = [
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
], Oe = {
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
function iw() {
  const e = Z0((t) => t.theme);
  return /* @__PURE__ */ j.jsxs("style", { children: [
    uw(e.theme),
    lw()
  ] });
}
function lw() {
  return `
  body {
    padding: 0;
    margin: 0;
    background-color: var(--xliic-background);
    color: var(--xliic-foreground);
    }`;
}
function uw(e) {
  const t = [];
  if (e !== void 0)
    for (const n of ow)
      e[n] && t.push(`${Oe[n]}: ${e[n]};`);
  return `:root {
    ${t.join(`
`)}
  }`;
}
const dm = pn.createContext([
  {
    id: "starting",
    title: "Starting",
    element: pn.createElement("div", {}, "Empty starting route")
  }
]);
function pm(e, t) {
  if (t.length === 0)
    return;
  const [n, ...r] = t;
  for (const o of e)
    if (o.id === n)
      return r.length === 0 ? o : o.children ? pm(o.children, r) : void 0;
}
function aw() {
  return /* @__PURE__ */ j.jsx(dm.Consumer, { children: (e) => /* @__PURE__ */ j.jsx(sw, { routes: e }) });
}
function sw({ routes: e }) {
  const t = Kh((r) => r.router.current), n = pm(e, t);
  return !n || n.link ? /* @__PURE__ */ j.jsx("div", {}) : n.element;
}
function cw() {
  return /* @__PURE__ */ j.jsx(dm.Consumer, { children: (e) => /* @__PURE__ */ j.jsx(fw, { routes: e }) });
}
function fw({ routes: e }) {
  var u;
  const t = t1(), r = Kh((a) => a.router.current).slice(0, 2), o = r.slice(0, 1), i = r.length > 1 ? (u = e.find((a) => a.id === r[0])) == null ? void 0 : u.children : e, l = i == null ? void 0 : i.find((a) => a.id === r[r.length - 1]);
  return i ? (l == null ? void 0 : l.navigation) === !1 ? l.title !== "" ? /* @__PURE__ */ j.jsx(pw, { children: /* @__PURE__ */ j.jsx(mw, { children: l.title }) }) : null : /* @__PURE__ */ j.jsx(dw, { children: i.map(({ id: a, title: s, link: f }) => /* @__PURE__ */ j.jsx(
    hw,
    {
      active: a === r[r.length - 1],
      onClick: () => {
        t(f ? e1(f) : q0([...o, a]));
      },
      children: typeof s == "string" ? /* @__PURE__ */ j.jsx("div", { children: s }) : s
    },
    a
  )) }) : null;
}
const dw = pt.nav`
  height: 28px;
  display: flex;
  padding: 0px 16px;
  padding-top: 6px;
  justify-content: space-between;
  font-size: 14px;
  border-bottom: 1px solid var(${Oe.border});
`, pw = pt.div`
  height: 35px;
  display: flex;
  padding: 0px 16px;
  border-bottom: 1px solid var(${Oe.border});
`, hw = pt.div`
  padding: 0 1em;
  display: flex;
  align-items: center;
  ${(e) => e.active ? `border-bottom: 3px solid var(${Oe.buttonBackground});` : "opacity: 0.7; border-bottom: 3px solid transparent; cursor: pointer;"};
  > div {
    border: ${(e) => e.active && Oe.contrastActiveBorder ? `1px solid var(${Oe.contrastActiveBorder})` : "none"};
  }
`, mw = pt.div`
  place-self: center;
  font-size: 16px;
  font-weight: 500;
  display: flex;
`;
function dn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function vw(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function hm(...e) {
  return (t) => e.forEach((n) => vw(n, t));
}
function Un(...e) {
  return _.useCallback(hm(...e), e);
}
function gw(e, t) {
  const n = _.createContext(t);
  function r(i) {
    const { children: l, ...u } = i, a = _.useMemo(() => u, Object.values(u));
    return /* @__PURE__ */ j.jsx(n.Provider, { value: a, children: l });
  }
  function o(i) {
    const l = _.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [r, o];
}
function yw(e, t = []) {
  let n = [];
  function r(i, l) {
    const u = _.createContext(l), a = n.length;
    n = [...n, l];
    function s(m) {
      const { scope: d, children: S, ...g } = m, v = (d == null ? void 0 : d[e][a]) || u, C = _.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ j.jsx(v.Provider, { value: C, children: S });
    }
    function f(m, d) {
      const S = (d == null ? void 0 : d[e][a]) || u, g = _.useContext(S);
      if (g) return g;
      if (l !== void 0) return l;
      throw new Error(`\`${m}\` must be used within \`${i}\``);
    }
    return s.displayName = i + "Provider", [s, f];
  }
  const o = () => {
    const i = n.map((l) => _.createContext(l));
    return function(u) {
      const a = (u == null ? void 0 : u[e]) || i;
      return _.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: a } }),
        [u, a]
      );
    };
  };
  return o.scopeName = e, [r, ww(o, ...t)];
}
function ww(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const l = r.reduce((u, { useScope: a, scopeName: s }) => {
        const m = a(i)[`__scope${s}`];
        return { ...u, ...m };
      }, {});
      return _.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Xi = globalThis != null && globalThis.document ? _.useLayoutEffect : () => {
}, Sw = Lu.useId || (() => {
}), kw = 0;
function _u(e) {
  const [t, n] = _.useState(Sw());
  return Xi(() => {
    n((r) => r ?? String(kw++));
  }, [e]), t ? `radix-${t}` : "";
}
function Fn(e) {
  const t = _.useRef(e);
  return _.useEffect(() => {
    t.current = e;
  }), _.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Ew({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = xw({ defaultProp: t, onChange: n }), i = e !== void 0, l = i ? e : r, u = Fn(n), a = _.useCallback(
    (s) => {
      if (i) {
        const m = typeof s == "function" ? s(e) : s;
        m !== e && u(m);
      } else
        o(s);
    },
    [i, e, o, u]
  );
  return [l, a];
}
function xw({
  defaultProp: e,
  onChange: t
}) {
  const n = _.useState(e), [r] = n, o = _.useRef(r), i = Fn(t);
  return _.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
var tc = _.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = _.Children.toArray(n), i = o.find(_w);
  if (i) {
    const l = i.props.children, u = o.map((a) => a === i ? _.Children.count(l) > 1 ? _.Children.only(null) : _.isValidElement(l) ? l.props.children : null : a);
    return /* @__PURE__ */ j.jsx(Ba, { ...r, ref: t, children: _.isValidElement(l) ? _.cloneElement(l, void 0, u) : null });
  }
  return /* @__PURE__ */ j.jsx(Ba, { ...r, ref: t, children: n });
});
tc.displayName = "Slot";
var Ba = _.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (_.isValidElement(n)) {
    const o = Nw(n);
    return _.cloneElement(n, {
      ...Pw(r, n.props),
      // @ts-ignore
      ref: t ? hm(t, o) : o
    });
  }
  return _.Children.count(n) > 1 ? _.Children.only(null) : null;
});
Ba.displayName = "SlotClone";
var Cw = ({ children: e }) => /* @__PURE__ */ j.jsx(j.Fragment, { children: e });
function _w(e) {
  return _.isValidElement(e) && e.type === Cw;
}
function Pw(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...u) => {
      i(...u), o(...u);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Nw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Aw = [
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
], Qt = Aw.reduce((e, t) => {
  const n = _.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, u = i ? tc : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ j.jsx(u, { ...l, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Ow(e, t) {
  e && ml.flushSync(() => e.dispatchEvent(t));
}
function Rw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Fn(e);
  _.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Tw = "DismissableLayer", ba = "dismissableLayer.update", Dw = "dismissableLayer.pointerDownOutside", Lw = "dismissableLayer.focusOutside", Wf, mm = _.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), vm = _.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: l,
      onDismiss: u,
      ...a
    } = e, s = _.useContext(mm), [f, m] = _.useState(null), d = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, S] = _.useState({}), g = Un(t, (A) => m(A)), v = Array.from(s.layers), [C] = [...s.layersWithOutsidePointerEventsDisabled].slice(-1), p = v.indexOf(C), c = f ? v.indexOf(f) : -1, h = s.layersWithOutsidePointerEventsDisabled.size > 0, w = c >= p, N = jw((A) => {
      const T = A.target, B = [...s.branches].some((F) => F.contains(T));
      !w || B || (o == null || o(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, d), R = Iw((A) => {
      const T = A.target;
      [...s.branches].some((F) => F.contains(T)) || (i == null || i(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, d);
    return Rw((A) => {
      c === s.layers.size - 1 && (r == null || r(A), !A.defaultPrevented && u && (A.preventDefault(), u()));
    }, d), _.useEffect(() => {
      if (f)
        return n && (s.layersWithOutsidePointerEventsDisabled.size === 0 && (Wf = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), s.layersWithOutsidePointerEventsDisabled.add(f)), s.layers.add(f), Vf(), () => {
          n && s.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Wf);
        };
    }, [f, d, n, s]), _.useEffect(() => () => {
      f && (s.layers.delete(f), s.layersWithOutsidePointerEventsDisabled.delete(f), Vf());
    }, [f, s]), _.useEffect(() => {
      const A = () => S({});
      return document.addEventListener(ba, A), () => document.removeEventListener(ba, A);
    }, []), /* @__PURE__ */ j.jsx(
      Qt.div,
      {
        ...a,
        ref: g,
        style: {
          pointerEvents: h ? w ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: dn(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: dn(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: dn(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
vm.displayName = Tw;
var Mw = "DismissableLayerBranch", $w = _.forwardRef((e, t) => {
  const n = _.useContext(mm), r = _.useRef(null), o = Un(t, r);
  return _.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ j.jsx(Qt.div, { ...e, ref: o });
});
$w.displayName = Mw;
function jw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Fn(e), r = _.useRef(!1), o = _.useRef(() => {
  });
  return _.useEffect(() => {
    const i = (u) => {
      if (u.target && !r.current) {
        let a = function() {
          gm(
            Dw,
            n,
            s,
            { discrete: !0 }
          );
        };
        const s = { originalEvent: u };
        u.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, { once: !0 })) : a();
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
function Iw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Fn(e), r = _.useRef(!1);
  return _.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && gm(Lw, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Vf() {
  const e = new CustomEvent(ba);
  document.dispatchEvent(e);
}
function gm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ow(o, i) : o.dispatchEvent(i);
}
var Pu = "focusScope.autoFocusOnMount", Nu = "focusScope.autoFocusOnUnmount", Hf = { bubbles: !1, cancelable: !0 }, Fw = "FocusScope", ym = _.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...l
  } = e, [u, a] = _.useState(null), s = Fn(o), f = Fn(i), m = _.useRef(null), d = Un(t, (v) => a(v)), S = _.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  _.useEffect(() => {
    if (r) {
      let v = function(h) {
        if (S.paused || !u) return;
        const w = h.target;
        u.contains(w) ? m.current = w : Gt(m.current, { select: !0 });
      }, C = function(h) {
        if (S.paused || !u) return;
        const w = h.relatedTarget;
        w !== null && (u.contains(w) || Gt(m.current, { select: !0 }));
      }, p = function(h) {
        if (document.activeElement === document.body)
          for (const N of h)
            N.removedNodes.length > 0 && Gt(u);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", C);
      const c = new MutationObserver(p);
      return u && c.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", C), c.disconnect();
      };
    }
  }, [r, u, S.paused]), _.useEffect(() => {
    if (u) {
      Kf.add(S);
      const v = document.activeElement;
      if (!u.contains(v)) {
        const p = new CustomEvent(Pu, Hf);
        u.addEventListener(Pu, s), u.dispatchEvent(p), p.defaultPrevented || (zw(Vw(wm(u)), { select: !0 }), document.activeElement === v && Gt(u));
      }
      return () => {
        u.removeEventListener(Pu, s), setTimeout(() => {
          const p = new CustomEvent(Nu, Hf);
          u.addEventListener(Nu, f), u.dispatchEvent(p), p.defaultPrevented || Gt(v ?? document.body, { select: !0 }), u.removeEventListener(Nu, f), Kf.remove(S);
        }, 0);
      };
    }
  }, [u, s, f, S]);
  const g = _.useCallback(
    (v) => {
      if (!n && !r || S.paused) return;
      const C = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, p = document.activeElement;
      if (C && p) {
        const c = v.currentTarget, [h, w] = Bw(c);
        h && w ? !v.shiftKey && p === w ? (v.preventDefault(), n && Gt(h, { select: !0 })) : v.shiftKey && p === h && (v.preventDefault(), n && Gt(w, { select: !0 })) : p === c && v.preventDefault();
      }
    },
    [n, r, S.paused]
  );
  return /* @__PURE__ */ j.jsx(Qt.div, { tabIndex: -1, ...l, ref: d, onKeyDown: g });
});
ym.displayName = Fw;
function zw(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Gt(r, { select: t }), document.activeElement !== n) return;
}
function Bw(e) {
  const t = wm(e), n = Qf(t, e), r = Qf(t.reverse(), e);
  return [n, r];
}
function wm(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Qf(e, t) {
  for (const n of e)
    if (!bw(n, { upTo: t })) return n;
}
function bw(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Uw(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Gt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Uw(e) && t && e.select();
  }
}
var Kf = Ww();
function Ww() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Yf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Yf(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Yf(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Vw(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Hw = "Portal", Sm = _.forwardRef((e, t) => {
  var u;
  const { container: n, ...r } = e, [o, i] = _.useState(!1);
  Xi(() => i(!0), []);
  const l = n || o && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? Py.createPortal(/* @__PURE__ */ j.jsx(Qt.div, { ...r, ref: t }), l) : null;
});
Sm.displayName = Hw;
function Qw(e, t) {
  return _.useReducer((n, r) => t[n][r] ?? n, e);
}
var Bl = (e) => {
  const { present: t, children: n } = e, r = Kw(t), o = typeof n == "function" ? n({ present: r.isPresent }) : _.Children.only(n), i = Un(r.ref, Yw(o));
  return typeof n == "function" || r.isPresent ? _.cloneElement(o, { ref: i }) : null;
};
Bl.displayName = "Presence";
function Kw(e) {
  const [t, n] = _.useState(), r = _.useRef({}), o = _.useRef(e), i = _.useRef("none"), l = e ? "mounted" : "unmounted", [u, a] = Qw(l, {
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
  return _.useEffect(() => {
    const s = Jo(r.current);
    i.current = u === "mounted" ? s : "none";
  }, [u]), Xi(() => {
    const s = r.current, f = o.current;
    if (f !== e) {
      const d = i.current, S = Jo(s);
      e ? a("MOUNT") : S === "none" || (s == null ? void 0 : s.display) === "none" ? a("UNMOUNT") : a(f && d !== S ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, a]), Xi(() => {
    if (t) {
      const s = (m) => {
        const S = Jo(r.current).includes(m.animationName);
        m.target === t && S && ml.flushSync(() => a("ANIMATION_END"));
      }, f = (m) => {
        m.target === t && (i.current = Jo(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
        t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s);
      };
    } else
      a("ANIMATION_END");
  }, [t, a]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: _.useCallback((s) => {
      s && (r.current = getComputedStyle(s)), n(s);
    }, [])
  };
}
function Jo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Yw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Au = 0;
function Gw() {
  _.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Gf()), document.body.insertAdjacentElement("beforeend", e[1] ?? Gf()), Au++, () => {
      Au === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Au--;
    };
  }, []);
}
function Gf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Nt = function() {
  return Nt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Nt.apply(this, arguments);
};
function km(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Xw(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var vi = "right-scroll-bar-position", gi = "width-before-scroll-bar", Zw = "with-scroll-bars-hidden", Jw = "--removed-body-scroll-bar-size";
function Ou(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function qw(e, t) {
  var n = _.useState(function() {
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
var eS = typeof window < "u" ? _.useLayoutEffect : _.useEffect, Xf = /* @__PURE__ */ new WeakMap();
function tS(e, t) {
  var n = qw(null, function(r) {
    return e.forEach(function(o) {
      return Ou(o, r);
    });
  });
  return eS(function() {
    var r = Xf.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), l = n.current;
      o.forEach(function(u) {
        i.has(u) || Ou(u, null);
      }), i.forEach(function(u) {
        o.has(u) || Ou(u, l);
      });
    }
    Xf.set(n, e);
  }, [e]), n;
}
function nS(e) {
  return e;
}
function rS(e, t) {
  t === void 0 && (t = nS);
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
      var a = function() {
        var f = l;
        l = [], f.forEach(i);
      }, s = function() {
        return Promise.resolve().then(a);
      };
      s(), n = {
        push: function(f) {
          l.push(f), s();
        },
        filter: function(f) {
          return l = l.filter(f), n;
        }
      };
    }
  };
  return o;
}
function oS(e) {
  e === void 0 && (e = {});
  var t = rS(null);
  return t.options = Nt({ async: !0, ssr: !1 }, e), t;
}
var Em = function(e) {
  var t = e.sideCar, n = km(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return _.createElement(r, Nt({}, n));
};
Em.isSideCarExport = !0;
function iS(e, t) {
  return e.useMedium(t), Em;
}
var xm = oS(), Ru = function() {
}, bl = _.forwardRef(function(e, t) {
  var n = _.useRef(null), r = _.useState({
    onScrollCapture: Ru,
    onWheelCapture: Ru,
    onTouchMoveCapture: Ru
  }), o = r[0], i = r[1], l = e.forwardProps, u = e.children, a = e.className, s = e.removeScrollBar, f = e.enabled, m = e.shards, d = e.sideCar, S = e.noIsolation, g = e.inert, v = e.allowPinchZoom, C = e.as, p = C === void 0 ? "div" : C, c = e.gapMode, h = km(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = d, N = tS([n, t]), R = Nt(Nt({}, h), o);
  return _.createElement(
    _.Fragment,
    null,
    f && _.createElement(w, { sideCar: xm, removeScrollBar: s, shards: m, noIsolation: S, inert: g, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: c }),
    l ? _.cloneElement(_.Children.only(u), Nt(Nt({}, R), { ref: N })) : _.createElement(p, Nt({}, R, { className: a, ref: N }), u)
  );
});
bl.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
bl.classNames = {
  fullWidth: gi,
  zeroRight: vi
};
var lS = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function uS() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = lS();
  return t && e.setAttribute("nonce", t), e;
}
function aS(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function sS(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var cS = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = uS()) && (aS(t, n), sS(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, fS = function() {
  var e = cS();
  return function(t, n) {
    _.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Cm = function() {
  var e = fS(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, dS = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Tu = function(e) {
  return parseInt(e || "", 10) || 0;
}, pS = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Tu(n), Tu(r), Tu(o)];
}, hS = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return dS;
  var t = pS(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, mS = Cm(), pr = "data-scroll-locked", vS = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Zw, ` {
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
  
  .`).concat(vi, ` {
    right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(gi, ` {
    margin-right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(vi, " .").concat(vi, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(gi, " .").concat(gi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(pr, `] {
    `).concat(Jw, ": ").concat(u, `px;
  }
`);
}, Zf = function() {
  var e = parseInt(document.body.getAttribute(pr) || "0", 10);
  return isFinite(e) ? e : 0;
}, gS = function() {
  _.useEffect(function() {
    return document.body.setAttribute(pr, (Zf() + 1).toString()), function() {
      var e = Zf() - 1;
      e <= 0 ? document.body.removeAttribute(pr) : document.body.setAttribute(pr, e.toString());
    };
  }, []);
}, yS = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  gS();
  var i = _.useMemo(function() {
    return hS(o);
  }, [o]);
  return _.createElement(mS, { styles: vS(i, !t, o, n ? "" : "!important") });
}, Ua = !1;
if (typeof window < "u")
  try {
    var qo = Object.defineProperty({}, "passive", {
      get: function() {
        return Ua = !0, !0;
      }
    });
    window.addEventListener("test", qo, qo), window.removeEventListener("test", qo, qo);
  } catch {
    Ua = !1;
  }
var Vn = Ua ? { passive: !1 } : !1, wS = function(e) {
  return e.tagName === "TEXTAREA";
}, _m = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !wS(e) && n[t] === "visible")
  );
}, SS = function(e) {
  return _m(e, "overflowY");
}, kS = function(e) {
  return _m(e, "overflowX");
}, Jf = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Pm(e, r);
    if (o) {
      var i = Nm(e, r), l = i[1], u = i[2];
      if (l > u)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, ES = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, xS = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Pm = function(e, t) {
  return e === "v" ? SS(t) : kS(t);
}, Nm = function(e, t) {
  return e === "v" ? ES(t) : xS(t);
}, CS = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, _S = function(e, t, n, r, o) {
  var i = CS(e, window.getComputedStyle(t).direction), l = i * r, u = n.target, a = t.contains(u), s = !1, f = l > 0, m = 0, d = 0;
  do {
    var S = Nm(e, u), g = S[0], v = S[1], C = S[2], p = v - C - i * g;
    (g || p) && Pm(e, u) && (m += p, d += g), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !a && u !== document.body || // self content
    a && (t.contains(u) || t === u)
  );
  return (f && (Math.abs(m) < 1 || !o) || !f && (Math.abs(d) < 1 || !o)) && (s = !0), s;
}, ei = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, qf = function(e) {
  return [e.deltaX, e.deltaY];
}, ed = function(e) {
  return e && "current" in e ? e.current : e;
}, PS = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, NS = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, AS = 0, Hn = [];
function OS(e) {
  var t = _.useRef([]), n = _.useRef([0, 0]), r = _.useRef(), o = _.useState(AS++)[0], i = _.useState(Cm)[0], l = _.useRef(e);
  _.useEffect(function() {
    l.current = e;
  }, [e]), _.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Xw([e.lockRef.current], (e.shards || []).map(ed), !0).filter(Boolean);
      return v.forEach(function(C) {
        return C.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(C) {
          return C.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = _.useCallback(function(v, C) {
    if ("touches" in v && v.touches.length === 2)
      return !l.current.allowPinchZoom;
    var p = ei(v), c = n.current, h = "deltaX" in v ? v.deltaX : c[0] - p[0], w = "deltaY" in v ? v.deltaY : c[1] - p[1], N, R = v.target, A = Math.abs(h) > Math.abs(w) ? "h" : "v";
    if ("touches" in v && A === "h" && R.type === "range")
      return !1;
    var T = Jf(A, R);
    if (!T)
      return !0;
    if (T ? N = A : (N = A === "v" ? "h" : "v", T = Jf(A, R)), !T)
      return !1;
    if (!r.current && "changedTouches" in v && (h || w) && (r.current = N), !N)
      return !0;
    var B = r.current || N;
    return _S(B, C, v, B === "h" ? h : w, !0);
  }, []), a = _.useCallback(function(v) {
    var C = v;
    if (!(!Hn.length || Hn[Hn.length - 1] !== i)) {
      var p = "deltaY" in C ? qf(C) : ei(C), c = t.current.filter(function(N) {
        return N.name === C.type && (N.target === C.target || C.target === N.shadowParent) && PS(N.delta, p);
      })[0];
      if (c && c.should) {
        C.cancelable && C.preventDefault();
        return;
      }
      if (!c) {
        var h = (l.current.shards || []).map(ed).filter(Boolean).filter(function(N) {
          return N.contains(C.target);
        }), w = h.length > 0 ? u(C, h[0]) : !l.current.noIsolation;
        w && C.cancelable && C.preventDefault();
      }
    }
  }, []), s = _.useCallback(function(v, C, p, c) {
    var h = { name: v, delta: C, target: p, should: c, shadowParent: RS(p) };
    t.current.push(h), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== h;
      });
    }, 1);
  }, []), f = _.useCallback(function(v) {
    n.current = ei(v), r.current = void 0;
  }, []), m = _.useCallback(function(v) {
    s(v.type, qf(v), v.target, u(v, e.lockRef.current));
  }, []), d = _.useCallback(function(v) {
    s(v.type, ei(v), v.target, u(v, e.lockRef.current));
  }, []);
  _.useEffect(function() {
    return Hn.push(i), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", a, Vn), document.addEventListener("touchmove", a, Vn), document.addEventListener("touchstart", f, Vn), function() {
      Hn = Hn.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", a, Vn), document.removeEventListener("touchmove", a, Vn), document.removeEventListener("touchstart", f, Vn);
    };
  }, []);
  var S = e.removeScrollBar, g = e.inert;
  return _.createElement(
    _.Fragment,
    null,
    g ? _.createElement(i, { styles: NS(o) }) : null,
    S ? _.createElement(yS, { gapMode: e.gapMode }) : null
  );
}
function RS(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const TS = iS(xm, OS);
var Am = _.forwardRef(function(e, t) {
  return _.createElement(bl, Nt({}, e, { ref: t, sideCar: TS }));
});
Am.classNames = bl.classNames;
var DS = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Qn = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), ni = {}, Du = 0, Om = function(e) {
  return e && (e.host || Om(e.parentNode));
}, LS = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Om(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, MS = function(e, t, n, r) {
  var o = LS(t, Array.isArray(e) ? e : [e]);
  ni[n] || (ni[n] = /* @__PURE__ */ new WeakMap());
  var i = ni[n], l = [], u = /* @__PURE__ */ new Set(), a = new Set(o), s = function(m) {
    !m || u.has(m) || (u.add(m), s(m.parentNode));
  };
  o.forEach(s);
  var f = function(m) {
    !m || a.has(m) || Array.prototype.forEach.call(m.children, function(d) {
      if (u.has(d))
        f(d);
      else
        try {
          var S = d.getAttribute(r), g = S !== null && S !== "false", v = (Qn.get(d) || 0) + 1, C = (i.get(d) || 0) + 1;
          Qn.set(d, v), i.set(d, C), l.push(d), v === 1 && g && ti.set(d, !0), C === 1 && d.setAttribute(n, "true"), g || d.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", d, p);
        }
    });
  };
  return f(t), u.clear(), Du++, function() {
    l.forEach(function(m) {
      var d = Qn.get(m) - 1, S = i.get(m) - 1;
      Qn.set(m, d), i.set(m, S), d || (ti.has(m) || m.removeAttribute(r), ti.delete(m)), S || m.removeAttribute(n);
    }), Du--, Du || (Qn = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), ni = {});
  };
}, $S = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = DS(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), MS(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, nc = "Dialog", [Rm, Ak] = yw(nc), [jS, xt] = Rm(nc), Tm = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: l = !0
  } = e, u = _.useRef(null), a = _.useRef(null), [s = !1, f] = Ew({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ j.jsx(
    jS,
    {
      scope: t,
      triggerRef: u,
      contentRef: a,
      contentId: _u(),
      titleId: _u(),
      descriptionId: _u(),
      open: s,
      onOpenChange: f,
      onOpenToggle: _.useCallback(() => f((m) => !m), [f]),
      modal: l,
      children: n
    }
  );
};
Tm.displayName = nc;
var Dm = "DialogTrigger", Lm = _.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = xt(Dm, n), i = Un(t, o.triggerRef);
    return /* @__PURE__ */ j.jsx(
      Qt.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ic(o.open),
        ...r,
        ref: i,
        onClick: dn(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Lm.displayName = Dm;
var rc = "DialogPortal", [IS, Mm] = Rm(rc, {
  forceMount: void 0
}), $m = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = xt(rc, t);
  return /* @__PURE__ */ j.jsx(IS, { scope: t, forceMount: n, children: _.Children.map(r, (l) => /* @__PURE__ */ j.jsx(Bl, { present: n || i.open, children: /* @__PURE__ */ j.jsx(Sm, { asChild: !0, container: o, children: l }) })) });
};
$m.displayName = rc;
var Zi = "DialogOverlay", jm = _.forwardRef(
  (e, t) => {
    const n = Mm(Zi, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = xt(Zi, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ j.jsx(Bl, { present: r || i.open, children: /* @__PURE__ */ j.jsx(FS, { ...o, ref: t }) }) : null;
  }
);
jm.displayName = Zi;
var FS = _.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = xt(Zi, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ j.jsx(Am, { as: tc, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ j.jsx(
        Qt.div,
        {
          "data-state": ic(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), zn = "DialogContent", Im = _.forwardRef(
  (e, t) => {
    const n = Mm(zn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = xt(zn, e.__scopeDialog);
    return /* @__PURE__ */ j.jsx(Bl, { present: r || i.open, children: i.modal ? /* @__PURE__ */ j.jsx(zS, { ...o, ref: t }) : /* @__PURE__ */ j.jsx(BS, { ...o, ref: t }) });
  }
);
Im.displayName = zn;
var zS = _.forwardRef(
  (e, t) => {
    const n = xt(zn, e.__scopeDialog), r = _.useRef(null), o = Un(t, n.contentRef, r);
    return _.useEffect(() => {
      const i = r.current;
      if (i) return $S(i);
    }, []), /* @__PURE__ */ j.jsx(
      Fm,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: dn(e.onCloseAutoFocus, (i) => {
          var l;
          i.preventDefault(), (l = n.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: dn(e.onPointerDownOutside, (i) => {
          const l = i.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || u) && i.preventDefault();
        }),
        onFocusOutside: dn(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), BS = _.forwardRef(
  (e, t) => {
    const n = xt(zn, e.__scopeDialog), r = _.useRef(!1), o = _.useRef(!1);
    return /* @__PURE__ */ j.jsx(
      Fm,
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
          var a, s;
          (a = e.onInteractOutside) == null || a.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const l = i.target;
          ((s = n.triggerRef.current) == null ? void 0 : s.contains(l)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), Fm = _.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, u = xt(zn, n), a = _.useRef(null), s = Un(t, a);
    return Gw(), /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
      /* @__PURE__ */ j.jsx(
        ym,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ j.jsx(
            vm,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": ic(u.open),
              ...l,
              ref: s,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
        /* @__PURE__ */ j.jsx(bS, { titleId: u.titleId }),
        /* @__PURE__ */ j.jsx(WS, { contentRef: a, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), oc = "DialogTitle", zm = _.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = xt(oc, n);
    return /* @__PURE__ */ j.jsx(Qt.h2, { id: o.titleId, ...r, ref: t });
  }
);
zm.displayName = oc;
var Bm = "DialogDescription", bm = _.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = xt(Bm, n);
    return /* @__PURE__ */ j.jsx(Qt.p, { id: o.descriptionId, ...r, ref: t });
  }
);
bm.displayName = Bm;
var Um = "DialogClose", Wm = _.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = xt(Um, n);
    return /* @__PURE__ */ j.jsx(
      Qt.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: dn(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Wm.displayName = Um;
function ic(e) {
  return e ? "open" : "closed";
}
var Vm = "DialogTitleWarning", [Ok, Hm] = gw(Vm, {
  contentName: zn,
  titleName: oc,
  docsSlug: "dialog"
}), bS = ({ titleId: e }) => {
  const t = Hm(Vm), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return _.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, US = "DialogDescriptionWarning", WS = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Hm(US).contentName}}.`;
  return _.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, VS = Tm, Rk = Lm, HS = $m, QS = jm, KS = Im, YS = zm, GS = bm, Tk = Wm;
const XS = pt.button`
  cursor: pointer;
  background-color: var(${Oe.buttonSecondaryBackground});
  color: var(${Oe.buttonSecondaryForeground});
  border: 1px solid var(${Oe.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    background-color: var(${Oe.buttonSecondaryHoverBackground});
  }
`, ZS = pt.button`
  cursor: pointer;
  background-color: var(${Oe.buttonBackground});
  color: var(${Oe.buttonForeground});
  border: 1px solid var(${Oe.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${Oe.focusBorder});
  }
`, JS = {
  open: !1,
  title: "",
  message: "",
  actions: []
}, Qm = Ws({
  name: "confirmationDialog",
  initialState: JS,
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
}), { requestConfirmation: Dk, accept: qS, reject: ek } = Qm.actions, tk = wh, nk = Fs, Lk = Qm.reducer;
function rk() {
  const e = tk(), t = () => e(qS()), n = () => e(ek()), { open: r, title: o, message: i } = nk((l) => l.confirmationDialog);
  return /* @__PURE__ */ j.jsx(VS, { open: r, children: /* @__PURE__ */ j.jsxs(HS, { children: [
    /* @__PURE__ */ j.jsx(ok, {}),
    /* @__PURE__ */ j.jsxs(ik, { onEscapeKeyDown: n, children: [
      /* @__PURE__ */ j.jsx(YS, { children: o }),
      /* @__PURE__ */ j.jsx(GS, { children: i }),
      /* @__PURE__ */ j.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
        /* @__PURE__ */ j.jsx(XS, { onClick: n, children: "Cancel" }),
        /* @__PURE__ */ j.jsx(ZS, { onClick: t, children: "Confirm" })
      ] })
    ] })
  ] }) });
}
const ok = pt(QS)`
  background-color: var(${Oe.computedTwo});
  position: fixed;
  inset: 0;
`, ik = pt(KS)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  background-color: var(${Oe.background});
  color: var(${Oe.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;
function Mk(e, t) {
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
function $k(e) {
  const t = Object.keys(e);
  for (const n of t)
    e[n] ? (console.log("starting listener for: ", n), e[n]()) : console.log("skipping listener for: ", n);
}
function lk({ error: e }) {
  return /* @__PURE__ */ j.jsxs("div", { children: [
    /* @__PURE__ */ j.jsx("p", { children: "Unexpected error:" }),
    /* @__PURE__ */ j.jsx("pre", { children: e.message })
  ] });
}
function jk() {
  return /* @__PURE__ */ j.jsxs(nw, { FallbackComponent: lk, children: [
    /* @__PURE__ */ j.jsx(iw, {}),
    /* @__PURE__ */ j.jsx(rk, {}),
    /* @__PURE__ */ j.jsx(uk, { children: /* @__PURE__ */ j.jsx(cw, {}) }),
    /* @__PURE__ */ j.jsx(ak, { children: /* @__PURE__ */ j.jsx(aw, {}) })
  ] });
}
const uk = pt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 35px;
`, ak = pt.div`
  position: fixed;
  top: 35px;
  left: 0;
  right: 0;
  bottom: 0;
`, Ik = (e) => /* @__PURE__ */ j.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ j.jsx("path", { d: "M506.3 417 293 53c-8.2-14-22.6-21-37-21-14.4 0-28.8 7-37.9 21L4.9 417c-15.49 27.9 4.951 63 37.84 63h426.6c32.76 0 53.26-35 36.96-63zM52.58 432 255.1 84.8 459.4 432H52.58zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44s14.11 31.44 31.48 31.44 31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1zM232 184v96c0 13.3 10.8 24 24 24s24-10.75 24-24v-96c0-13.2-10.7-24-24-24s-24 10.8-24 24z" }) });
export {
  ym as $,
  VS as A,
  ZS as B,
  KS as C,
  Rk as D,
  HS as E,
  YS as F,
  GS as G,
  Tk as H,
  XS as I,
  ml as J,
  q0 as K,
  qS as L,
  ck as M,
  Nr as N,
  QS as O,
  dk as P,
  Dk as Q,
  pn as R,
  Ik as S,
  Oe as T,
  e1 as U,
  jk as V,
  Nk as W,
  Bl as X,
  Un as Y,
  $S as Z,
  Gw as _,
  wk as a,
  vm as a0,
  hm as a1,
  Am as a2,
  tc as a3,
  Ow as a4,
  Sm as a5,
  Ew as a6,
  _u as a7,
  Lu as a8,
  Mh as a9,
  Be as aa,
  Sk as ab,
  Rh as ac,
  yk as ad,
  E0 as ae,
  x0 as af,
  gk as ag,
  Jy as ah,
  zs as ai,
  mk as aj,
  Rt as ak,
  vk as al,
  Af as am,
  k0 as an,
  Da as ao,
  Nh as ap,
  Vt as aq,
  hk as ar,
  kh as as,
  C0 as at,
  pk as au,
  Ky as av,
  fk as aw,
  Nt as ax,
  Cw as ay,
  Xi as az,
  Fs as b,
  Ws as c,
  kk as d,
  _ as e,
  Ny as f,
  dm as g,
  iw as h,
  Oo as i,
  j,
  aw as k,
  Ek as l,
  Mk as m,
  xk as n,
  Ji as o,
  zt as p,
  pt as q,
  Pk as r,
  $k as s,
  Ck as t,
  wh as u,
  Lk as v,
  yw as w,
  Qt as x,
  dn as y,
  Fn as z
};
