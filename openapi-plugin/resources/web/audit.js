var Ng = Object.defineProperty;
var Mg = (e, t, n) => t in e ? Ng(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Zl = (e, t, n) => Mg(e, typeof t != "symbol" ? t + "" : t, n);
function Dg(e, t) {
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
var Pr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ol(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bf = { exports: {} }, il = {}, _f = { exports: {} }, ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Io = Symbol.for("react.element"), Lg = Symbol.for("react.portal"), zg = Symbol.for("react.fragment"), Fg = Symbol.for("react.strict_mode"), Bg = Symbol.for("react.profiler"), Hg = Symbol.for("react.provider"), Vg = Symbol.for("react.context"), Ug = Symbol.for("react.forward_ref"), Wg = Symbol.for("react.suspense"), Kg = Symbol.for("react.memo"), Gg = Symbol.for("react.lazy"), Pc = Symbol.iterator;
function Qg(e) {
  return e === null || typeof e != "object" ? null : (e = Pc && e[Pc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Tf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Pf = Object.assign, jf = {};
function Ir(e, t, n) {
  this.props = e, this.context = t, this.refs = jf, this.updater = n || Tf;
}
Ir.prototype.isReactComponent = {};
Ir.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ir.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Rf() {
}
Rf.prototype = Ir.prototype;
function Xs(e, t, n) {
  this.props = e, this.context = t, this.refs = jf, this.updater = n || Tf;
}
var Zs = Xs.prototype = new Rf();
Zs.constructor = Xs;
Pf(Zs, Ir.prototype);
Zs.isPureReactComponent = !0;
var jc = Array.isArray, Af = Object.prototype.hasOwnProperty, qs = { current: null }, Of = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nf(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) Af.call(t, r) && !Of.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: Io, type: e, key: i, ref: l, props: o, _owner: qs.current };
}
function Yg(e, t) {
  return { $$typeof: Io, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Js(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Io;
}
function Xg(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Rc = /\/+/g;
function ql(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Xg("" + e.key) : t.toString(36);
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
        case Io:
        case Lg:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + ql(l, 0) : r, jc(o) ? (n = "", e != null && (n = e.replace(Rc, "$&/") + "/"), ri(o, t, n, "", function(a) {
    return a;
  })) : o != null && (Js(o) && (o = Yg(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Rc, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", jc(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + ql(i, u);
    l += ri(i, t, n, s, o);
  }
  else if (s = Qg(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + ql(i, u++), l += ri(i, t, n, s, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Ao(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return ri(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Zg(e) {
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
var Xe = { current: null }, oi = { transition: null }, qg = { ReactCurrentDispatcher: Xe, ReactCurrentBatchConfig: oi, ReactCurrentOwner: qs };
function Mf() {
  throw Error("act(...) is not supported in production builds of React.");
}
ne.Children = { map: Ao, forEach: function(e, t, n) {
  Ao(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ao(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ao(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Js(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ne.Component = Ir;
ne.Fragment = zg;
ne.Profiler = Bg;
ne.PureComponent = Xs;
ne.StrictMode = Fg;
ne.Suspense = Wg;
ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qg;
ne.act = Mf;
ne.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Pf({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = qs.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) Af.call(t, s) && !Of.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: Io, type: e.type, key: o, ref: i, props: r, _owner: l };
};
ne.createContext = function(e) {
  return e = { $$typeof: Vg, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Hg, _context: e }, e.Consumer = e;
};
ne.createElement = Nf;
ne.createFactory = function(e) {
  var t = Nf.bind(null, e);
  return t.type = e, t;
};
ne.createRef = function() {
  return { current: null };
};
ne.forwardRef = function(e) {
  return { $$typeof: Ug, render: e };
};
ne.isValidElement = Js;
ne.lazy = function(e) {
  return { $$typeof: Gg, _payload: { _status: -1, _result: e }, _init: Zg };
};
ne.memo = function(e, t) {
  return { $$typeof: Kg, type: e, compare: t === void 0 ? null : t };
};
ne.startTransition = function(e) {
  var t = oi.transition;
  oi.transition = {};
  try {
    e();
  } finally {
    oi.transition = t;
  }
};
ne.unstable_act = Mf;
ne.useCallback = function(e, t) {
  return Xe.current.useCallback(e, t);
};
ne.useContext = function(e) {
  return Xe.current.useContext(e);
};
ne.useDebugValue = function() {
};
ne.useDeferredValue = function(e) {
  return Xe.current.useDeferredValue(e);
};
ne.useEffect = function(e, t) {
  return Xe.current.useEffect(e, t);
};
ne.useId = function() {
  return Xe.current.useId();
};
ne.useImperativeHandle = function(e, t, n) {
  return Xe.current.useImperativeHandle(e, t, n);
};
ne.useInsertionEffect = function(e, t) {
  return Xe.current.useInsertionEffect(e, t);
};
ne.useLayoutEffect = function(e, t) {
  return Xe.current.useLayoutEffect(e, t);
};
ne.useMemo = function(e, t) {
  return Xe.current.useMemo(e, t);
};
ne.useReducer = function(e, t, n) {
  return Xe.current.useReducer(e, t, n);
};
ne.useRef = function(e) {
  return Xe.current.useRef(e);
};
ne.useState = function(e) {
  return Xe.current.useState(e);
};
ne.useSyncExternalStore = function(e, t, n) {
  return Xe.current.useSyncExternalStore(e, t, n);
};
ne.useTransition = function() {
  return Xe.current.useTransition();
};
ne.version = "18.3.1";
_f.exports = ne;
var b = _f.exports;
const Se = /* @__PURE__ */ ol(b), Ou = /* @__PURE__ */ Dg({
  __proto__: null,
  default: Se
}, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jg = b, em = Symbol.for("react.element"), tm = Symbol.for("react.fragment"), nm = Object.prototype.hasOwnProperty, rm = Jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, om = { key: !0, ref: !0, __self: !0, __source: !0 };
function Df(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) nm.call(t, r) && !om.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: em, type: e, key: i, ref: l, props: o, _owner: rm.current };
}
il.Fragment = tm;
il.jsx = Df;
il.jsxs = Df;
bf.exports = il;
var p = bf.exports, Lf = { exports: {} }, pt = {}, zf = { exports: {} }, Ff = {};
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
  function t(N, V) {
    var K = N.length;
    N.push(V);
    e: for (; 0 < K; ) {
      var S = K - 1 >>> 1, w = N[S];
      if (0 < o(w, V)) N[S] = V, N[K] = w, K = S;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var V = N[0], K = N.pop();
    if (K !== V) {
      N[0] = K;
      e: for (var S = 0, w = N.length, m = w >>> 1; S < m; ) {
        var C = 2 * (S + 1) - 1, I = N[C], x = C + 1, D = N[x];
        if (0 > o(I, K)) x < w && 0 > o(D, I) ? (N[S] = D, N[x] = K, S = x) : (N[S] = I, N[C] = K, S = C);
        else if (x < w && 0 > o(D, K)) N[S] = D, N[x] = K, S = x;
        else break e;
      }
    }
    return V;
  }
  function o(N, V) {
    var K = N.sortIndex - V.sortIndex;
    return K !== 0 ? K : N.id - V.id;
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
  var s = [], a = [], c = 1, f = null, g = 3, k = !1, y = !1, $ = !1, _ = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(N) {
    for (var V = n(a); V !== null; ) {
      if (V.callback === null) r(a);
      else if (V.startTime <= N) r(a), V.sortIndex = V.expirationTime, t(s, V);
      else break;
      V = n(a);
    }
  }
  function E(N) {
    if ($ = !1, v(N), !y) if (n(s) !== null) y = !0, $e(T);
    else {
      var V = n(a);
      V !== null && J(E, V.startTime - N);
    }
  }
  function T(N, V) {
    y = !1, $ && ($ = !1, h(R), R = -1), k = !0;
    var K = g;
    try {
      for (v(V), f = n(s); f !== null && (!(f.expirationTime > V) || N && !se()); ) {
        var S = f.callback;
        if (typeof S == "function") {
          f.callback = null, g = f.priorityLevel;
          var w = S(f.expirationTime <= V);
          V = e.unstable_now(), typeof w == "function" ? f.callback = w : f === n(s) && r(s), v(V);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var m = !0;
      else {
        var C = n(a);
        C !== null && J(E, C.startTime - V), m = !1;
      }
      return m;
    } finally {
      f = null, g = K, k = !1;
    }
  }
  var j = !1, M = null, R = -1, X = 5, B = -1;
  function se() {
    return !(e.unstable_now() - B < X);
  }
  function ue() {
    if (M !== null) {
      var N = e.unstable_now();
      B = N;
      var V = !0;
      try {
        V = M(!0, N);
      } finally {
        V ? te() : (j = !1, M = null);
      }
    } else j = !1;
  }
  var te;
  if (typeof d == "function") te = function() {
    d(ue);
  };
  else if (typeof MessageChannel < "u") {
    var ae = new MessageChannel(), ce = ae.port2;
    ae.port1.onmessage = ue, te = function() {
      ce.postMessage(null);
    };
  } else te = function() {
    _(ue, 0);
  };
  function $e(N) {
    M = N, j || (j = !0, te());
  }
  function J(N, V) {
    R = _(function() {
      N(e.unstable_now());
    }, V);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    y || k || (y = !0, $e(T));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(N) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var V = 3;
        break;
      default:
        V = g;
    }
    var K = g;
    g = V;
    try {
      return N();
    } finally {
      g = K;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, V) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var K = g;
    g = N;
    try {
      return V();
    } finally {
      g = K;
    }
  }, e.unstable_scheduleCallback = function(N, V, K) {
    var S = e.unstable_now();
    switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? S + K : S) : K = S, N) {
      case 1:
        var w = -1;
        break;
      case 2:
        w = 250;
        break;
      case 5:
        w = 1073741823;
        break;
      case 4:
        w = 1e4;
        break;
      default:
        w = 5e3;
    }
    return w = K + w, N = { id: c++, callback: V, priorityLevel: N, startTime: K, expirationTime: w, sortIndex: -1 }, K > S ? (N.sortIndex = K, t(a, N), n(s) === null && N === n(a) && ($ ? (h(R), R = -1) : $ = !0, J(E, K - S))) : (N.sortIndex = w, t(s, N), y || k || (y = !0, $e(T))), N;
  }, e.unstable_shouldYield = se, e.unstable_wrapCallback = function(N) {
    var V = g;
    return function() {
      var K = g;
      g = V;
      try {
        return N.apply(this, arguments);
      } finally {
        g = K;
      }
    };
  };
})(Ff);
zf.exports = Ff;
var im = zf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lm = b, ct = im;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Bf = /* @__PURE__ */ new Set(), oo = {};
function Hn(e, t) {
  hr(e, t), hr(e + "Capture", t);
}
function hr(e, t) {
  for (oo[e] = t, e = 0; e < t.length; e++) Bf.add(t[e]);
}
var Gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Nu = Object.prototype.hasOwnProperty, um = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ac = {}, Oc = {};
function sm(e) {
  return Nu.call(Oc, e) ? !0 : Nu.call(Ac, e) ? !1 : um.test(e) ? Oc[e] = !0 : (Ac[e] = !0, !1);
}
function am(e, t, n, r) {
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
function cm(e, t, n, r) {
  if (t === null || typeof t > "u" || am(e, t, n, r)) return !0;
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
function Ze(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Fe[e] = new Ze(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Fe[t] = new Ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Fe[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Fe[e] = new Ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Fe[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Fe[e] = new Ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Fe[e] = new Ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Fe[e] = new Ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Fe[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ea = /[\-:]([a-z])/g;
function ta(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ea,
    ta
  );
  Fe[t] = new Ze(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ea, ta);
  Fe[t] = new Ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ea, ta);
  Fe[t] = new Ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Fe[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Fe[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function na(e, t, n, r) {
  var o = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (cm(t, n, o, r) && (n = null), r || o === null ? sm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qt = lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oo = Symbol.for("react.element"), Kn = Symbol.for("react.portal"), Gn = Symbol.for("react.fragment"), ra = Symbol.for("react.strict_mode"), Mu = Symbol.for("react.profiler"), Hf = Symbol.for("react.provider"), Vf = Symbol.for("react.context"), oa = Symbol.for("react.forward_ref"), Du = Symbol.for("react.suspense"), Lu = Symbol.for("react.suspense_list"), ia = Symbol.for("react.memo"), nn = Symbol.for("react.lazy"), Uf = Symbol.for("react.offscreen"), Nc = Symbol.iterator;
function jr(e) {
  return e === null || typeof e != "object" ? null : (e = Nc && e[Nc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ee = Object.assign, Jl;
function Br(e) {
  if (Jl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Jl = t && t[1] || "";
  }
  return `
` + Jl + e;
}
var eu = !1;
function tu(e, t) {
  if (!e || eu) return "";
  eu = !0;
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
    eu = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Br(e) : "";
}
function dm(e) {
  switch (e.tag) {
    case 5:
      return Br(e.type);
    case 16:
      return Br("Lazy");
    case 13:
      return Br("Suspense");
    case 19:
      return Br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = tu(e.type, !1), e;
    case 11:
      return e = tu(e.type.render, !1), e;
    case 1:
      return e = tu(e.type, !0), e;
    default:
      return "";
  }
}
function zu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gn:
      return "Fragment";
    case Kn:
      return "Portal";
    case Mu:
      return "Profiler";
    case ra:
      return "StrictMode";
    case Du:
      return "Suspense";
    case Lu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Vf:
      return (e.displayName || "Context") + ".Consumer";
    case Hf:
      return (e._context.displayName || "Context") + ".Provider";
    case oa:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ia:
      return t = e.displayName || null, t !== null ? t : zu(e.type) || "Memo";
    case nn:
      t = e._payload, e = e._init;
      try {
        return zu(e(t));
      } catch {
      }
  }
  return null;
}
function fm(e) {
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
      return zu(t);
    case 8:
      return t === ra ? "StrictMode" : "Mode";
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
function xn(e) {
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
function Wf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function pm(e) {
  var t = Wf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function No(e) {
  e._valueTracker || (e._valueTracker = pm(e));
}
function Kf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Wf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function mi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fu(e, t) {
  var n = t.checked;
  return Ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Mc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = xn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Gf(e, t) {
  t = t.checked, t != null && na(e, "checked", t, !1);
}
function Bu(e, t) {
  Gf(e, t);
  var n = xn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Hu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Hu(e, t.type, xn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Dc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Hu(e, t, n) {
  (t !== "number" || mi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Hr = Array.isArray;
function ur(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Vu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return Ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Lc(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (Hr(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: xn(n) };
}
function Qf(e, t) {
  var n = xn(t.value), r = xn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function zc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Uu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Yf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Mo, Xf = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Mo = Mo || document.createElement("div"), Mo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Mo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function io(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Qr = {
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
}, hm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qr).forEach(function(e) {
  hm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Qr[t] = Qr[e];
  });
});
function Zf(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Qr.hasOwnProperty(e) && Qr[e] ? ("" + t).trim() : t + "px";
}
function qf(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Zf(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var vm = Ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Wu(e, t) {
  if (t) {
    if (vm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function Ku(e, t) {
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
var Gu = null;
function la(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Qu = null, sr = null, ar = null;
function Fc(e) {
  if (e = To(e)) {
    if (typeof Qu != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = cl(t), Qu(e.stateNode, e.type, t));
  }
}
function Jf(e) {
  sr ? ar ? ar.push(e) : ar = [e] : sr = e;
}
function ep() {
  if (sr) {
    var e = sr, t = ar;
    if (ar = sr = null, Fc(e), t) for (e = 0; e < t.length; e++) Fc(t[e]);
  }
}
function tp(e, t) {
  return e(t);
}
function np() {
}
var nu = !1;
function rp(e, t, n) {
  if (nu) return e(t, n);
  nu = !0;
  try {
    return tp(e, t, n);
  } finally {
    nu = !1, (sr !== null || ar !== null) && (np(), ep());
  }
}
function lo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = cl(n);
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
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var Yu = !1;
if (Gt) try {
  var Rr = {};
  Object.defineProperty(Rr, "passive", { get: function() {
    Yu = !0;
  } }), window.addEventListener("test", Rr, Rr), window.removeEventListener("test", Rr, Rr);
} catch {
  Yu = !1;
}
function gm(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Yr = !1, yi = null, xi = !1, Xu = null, mm = { onError: function(e) {
  Yr = !0, yi = e;
} };
function ym(e, t, n, r, o, i, l, u, s) {
  Yr = !1, yi = null, gm.apply(mm, arguments);
}
function xm(e, t, n, r, o, i, l, u, s) {
  if (ym.apply(this, arguments), Yr) {
    if (Yr) {
      var a = yi;
      Yr = !1, yi = null;
    } else throw Error(A(198));
    xi || (xi = !0, Xu = a);
  }
}
function Vn(e) {
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
function op(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Bc(e) {
  if (Vn(e) !== e) throw Error(A(188));
}
function wm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Vn(e), t === null) throw Error(A(188));
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
        if (i === n) return Bc(o), e;
        if (i === r) return Bc(o), t;
        i = i.sibling;
      }
      throw Error(A(188));
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
        if (!l) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function ip(e) {
  return e = wm(e), e !== null ? lp(e) : null;
}
function lp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = lp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var up = ct.unstable_scheduleCallback, Hc = ct.unstable_cancelCallback, Sm = ct.unstable_shouldYield, km = ct.unstable_requestPaint, be = ct.unstable_now, Cm = ct.unstable_getCurrentPriorityLevel, ua = ct.unstable_ImmediatePriority, sp = ct.unstable_UserBlockingPriority, wi = ct.unstable_NormalPriority, Em = ct.unstable_LowPriority, ap = ct.unstable_IdlePriority, ll = null, Dt = null;
function $m(e) {
  if (Dt && typeof Dt.onCommitFiberRoot == "function") try {
    Dt.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var jt = Math.clz32 ? Math.clz32 : _m, Im = Math.log, bm = Math.LN2;
function _m(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Im(e) / bm | 0) | 0;
}
var Do = 64, Lo = 4194304;
function Vr(e) {
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
function Si(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? r = Vr(u) : (i &= l, i !== 0 && (r = Vr(i)));
  } else l = n & ~o, l !== 0 ? r = Vr(l) : i !== 0 && (r = Vr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - jt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Tm(e, t) {
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
function Pm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - jt(i), u = 1 << l, s = o[l];
    s === -1 ? (!(u & n) || u & r) && (o[l] = Tm(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Zu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function cp() {
  var e = Do;
  return Do <<= 1, !(Do & 4194240) && (Do = 64), e;
}
function ru(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bo(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - jt(t), e[t] = n;
}
function jm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - jt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function sa(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - jt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var fe = 0;
function dp(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var fp, aa, pp, hp, vp, qu = !1, zo = [], an = null, cn = null, dn = null, uo = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map(), on = [], Rm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Vc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      an = null;
      break;
    case "dragenter":
    case "dragleave":
      cn = null;
      break;
    case "mouseover":
    case "mouseout":
      dn = null;
      break;
    case "pointerover":
    case "pointerout":
      uo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      so.delete(t.pointerId);
  }
}
function Ar(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = To(t), t !== null && aa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Am(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return an = Ar(an, e, t, n, r, o), !0;
    case "dragenter":
      return cn = Ar(cn, e, t, n, r, o), !0;
    case "mouseover":
      return dn = Ar(dn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return uo.set(i, Ar(uo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, so.set(i, Ar(so.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function gp(e) {
  var t = _n(e.target);
  if (t !== null) {
    var n = Vn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = op(n), t !== null) {
          e.blockedOn = t, vp(e.priority, function() {
            pp(n);
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
      Gu = r, n.target.dispatchEvent(r), Gu = null;
    } else return t = To(n), t !== null && aa(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Uc(e, t, n) {
  ii(e) && n.delete(t);
}
function Om() {
  qu = !1, an !== null && ii(an) && (an = null), cn !== null && ii(cn) && (cn = null), dn !== null && ii(dn) && (dn = null), uo.forEach(Uc), so.forEach(Uc);
}
function Or(e, t) {
  e.blockedOn === t && (e.blockedOn = null, qu || (qu = !0, ct.unstable_scheduleCallback(ct.unstable_NormalPriority, Om)));
}
function ao(e) {
  function t(o) {
    return Or(o, e);
  }
  if (0 < zo.length) {
    Or(zo[0], e);
    for (var n = 1; n < zo.length; n++) {
      var r = zo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (an !== null && Or(an, e), cn !== null && Or(cn, e), dn !== null && Or(dn, e), uo.forEach(t), so.forEach(t), n = 0; n < on.length; n++) r = on[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < on.length && (n = on[0], n.blockedOn === null); ) gp(n), n.blockedOn === null && on.shift();
}
var cr = qt.ReactCurrentBatchConfig, ki = !0;
function Nm(e, t, n, r) {
  var o = fe, i = cr.transition;
  cr.transition = null;
  try {
    fe = 1, ca(e, t, n, r);
  } finally {
    fe = o, cr.transition = i;
  }
}
function Mm(e, t, n, r) {
  var o = fe, i = cr.transition;
  cr.transition = null;
  try {
    fe = 4, ca(e, t, n, r);
  } finally {
    fe = o, cr.transition = i;
  }
}
function ca(e, t, n, r) {
  if (ki) {
    var o = Ju(e, t, n, r);
    if (o === null) pu(e, t, r, Ci, n), Vc(e, r);
    else if (Am(o, e, t, n, r)) r.stopPropagation();
    else if (Vc(e, r), t & 4 && -1 < Rm.indexOf(e)) {
      for (; o !== null; ) {
        var i = To(o);
        if (i !== null && fp(i), i = Ju(e, t, n, r), i === null && pu(e, t, r, Ci, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else pu(e, t, r, null, n);
  }
}
var Ci = null;
function Ju(e, t, n, r) {
  if (Ci = null, e = la(r), e = _n(e), e !== null) if (t = Vn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = op(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ci = e, null;
}
function mp(e) {
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
      switch (Cm()) {
        case ua:
          return 1;
        case sp:
          return 4;
        case wi:
        case Em:
          return 16;
        case ap:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var un = null, da = null, li = null;
function yp() {
  if (li) return li;
  var e, t = da, n = t.length, r, o = "value" in un ? un.value : un.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return li = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ui(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Fo() {
  return !0;
}
function Wc() {
  return !1;
}
function ht(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Fo : Wc, this.isPropagationStopped = Wc, this;
  }
  return Ee(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fo);
  }, persist: function() {
  }, isPersistent: Fo }), t;
}
var br = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, fa = ht(br), _o = Ee({}, br, { view: 0, detail: 0 }), Dm = ht(_o), ou, iu, Nr, ul = Ee({}, _o, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pa, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Nr && (Nr && e.type === "mousemove" ? (ou = e.screenX - Nr.screenX, iu = e.screenY - Nr.screenY) : iu = ou = 0, Nr = e), ou);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : iu;
} }), Kc = ht(ul), Lm = Ee({}, ul, { dataTransfer: 0 }), zm = ht(Lm), Fm = Ee({}, _o, { relatedTarget: 0 }), lu = ht(Fm), Bm = Ee({}, br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hm = ht(Bm), Vm = Ee({}, br, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Um = ht(Vm), Wm = Ee({}, br, { data: 0 }), Gc = ht(Wm), Km = {
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
}, Gm = {
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
}, Qm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ym(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qm[e]) ? !!t[e] : !1;
}
function pa() {
  return Ym;
}
var Xm = Ee({}, _o, { key: function(e) {
  if (e.key) {
    var t = Km[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ui(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pa, charCode: function(e) {
  return e.type === "keypress" ? ui(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ui(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Zm = ht(Xm), qm = Ee({}, ul, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Qc = ht(qm), Jm = Ee({}, _o, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pa }), e0 = ht(Jm), t0 = Ee({}, br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), n0 = ht(t0), r0 = Ee({}, ul, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), o0 = ht(r0), i0 = [9, 13, 27, 32], ha = Gt && "CompositionEvent" in window, Xr = null;
Gt && "documentMode" in document && (Xr = document.documentMode);
var l0 = Gt && "TextEvent" in window && !Xr, xp = Gt && (!ha || Xr && 8 < Xr && 11 >= Xr), Yc = " ", Xc = !1;
function wp(e, t) {
  switch (e) {
    case "keyup":
      return i0.indexOf(t.keyCode) !== -1;
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
function Sp(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Qn = !1;
function u0(e, t) {
  switch (e) {
    case "compositionend":
      return Sp(t);
    case "keypress":
      return t.which !== 32 ? null : (Xc = !0, Yc);
    case "textInput":
      return e = t.data, e === Yc && Xc ? null : e;
    default:
      return null;
  }
}
function s0(e, t) {
  if (Qn) return e === "compositionend" || !ha && wp(e, t) ? (e = yp(), li = da = un = null, Qn = !1, e) : null;
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
      return xp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var a0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Zc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!a0[e.type] : t === "textarea";
}
function kp(e, t, n, r) {
  Jf(r), t = Ei(t, "onChange"), 0 < t.length && (n = new fa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Zr = null, co = null;
function c0(e) {
  Ap(e, 0);
}
function sl(e) {
  var t = Zn(e);
  if (Kf(t)) return e;
}
function d0(e, t) {
  if (e === "change") return t;
}
var Cp = !1;
if (Gt) {
  var uu;
  if (Gt) {
    var su = "oninput" in document;
    if (!su) {
      var qc = document.createElement("div");
      qc.setAttribute("oninput", "return;"), su = typeof qc.oninput == "function";
    }
    uu = su;
  } else uu = !1;
  Cp = uu && (!document.documentMode || 9 < document.documentMode);
}
function Jc() {
  Zr && (Zr.detachEvent("onpropertychange", Ep), co = Zr = null);
}
function Ep(e) {
  if (e.propertyName === "value" && sl(co)) {
    var t = [];
    kp(t, co, e, la(e)), rp(c0, t);
  }
}
function f0(e, t, n) {
  e === "focusin" ? (Jc(), Zr = t, co = n, Zr.attachEvent("onpropertychange", Ep)) : e === "focusout" && Jc();
}
function p0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return sl(co);
}
function h0(e, t) {
  if (e === "click") return sl(t);
}
function v0(e, t) {
  if (e === "input" || e === "change") return sl(t);
}
function g0(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var At = typeof Object.is == "function" ? Object.is : g0;
function fo(e, t) {
  if (At(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Nu.call(t, o) || !At(e[o], t[o])) return !1;
  }
  return !0;
}
function ed(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function td(e, t) {
  var n = ed(e);
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
    n = ed(n);
  }
}
function $p(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $p(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ip() {
  for (var e = window, t = mi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = mi(e.document);
  }
  return t;
}
function va(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function m0(e) {
  var t = Ip(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && $p(n.ownerDocument.documentElement, n)) {
    if (r !== null && va(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = td(n, i);
        var l = td(
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
var y0 = Gt && "documentMode" in document && 11 >= document.documentMode, Yn = null, es = null, qr = null, ts = !1;
function nd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ts || Yn == null || Yn !== mi(r) || (r = Yn, "selectionStart" in r && va(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), qr && fo(qr, r) || (qr = r, r = Ei(es, "onSelect"), 0 < r.length && (t = new fa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yn)));
}
function Bo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xn = { animationend: Bo("Animation", "AnimationEnd"), animationiteration: Bo("Animation", "AnimationIteration"), animationstart: Bo("Animation", "AnimationStart"), transitionend: Bo("Transition", "TransitionEnd") }, au = {}, bp = {};
Gt && (bp = document.createElement("div").style, "AnimationEvent" in window || (delete Xn.animationend.animation, delete Xn.animationiteration.animation, delete Xn.animationstart.animation), "TransitionEvent" in window || delete Xn.transitionend.transition);
function al(e) {
  if (au[e]) return au[e];
  if (!Xn[e]) return e;
  var t = Xn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in bp) return au[e] = t[n];
  return e;
}
var _p = al("animationend"), Tp = al("animationiteration"), Pp = al("animationstart"), jp = al("transitionend"), Rp = /* @__PURE__ */ new Map(), rd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function kn(e, t) {
  Rp.set(e, t), Hn(t, [e]);
}
for (var cu = 0; cu < rd.length; cu++) {
  var du = rd[cu], x0 = du.toLowerCase(), w0 = du[0].toUpperCase() + du.slice(1);
  kn(x0, "on" + w0);
}
kn(_p, "onAnimationEnd");
kn(Tp, "onAnimationIteration");
kn(Pp, "onAnimationStart");
kn("dblclick", "onDoubleClick");
kn("focusin", "onFocus");
kn("focusout", "onBlur");
kn(jp, "onTransitionEnd");
hr("onMouseEnter", ["mouseout", "mouseover"]);
hr("onMouseLeave", ["mouseout", "mouseover"]);
hr("onPointerEnter", ["pointerout", "pointerover"]);
hr("onPointerLeave", ["pointerout", "pointerover"]);
Hn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Hn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Hn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Hn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Hn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), S0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));
function od(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, xm(r, t, void 0, e), e.currentTarget = null;
}
function Ap(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, a = u.currentTarget;
        if (u = u.listener, s !== i && o.isPropagationStopped()) break e;
        od(o, u, a), i = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== i && o.isPropagationStopped()) break e;
        od(o, u, a), i = s;
      }
    }
  }
  if (xi) throw e = Xu, xi = !1, Xu = null, e;
}
function ye(e, t) {
  var n = t[ls];
  n === void 0 && (n = t[ls] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Op(t, e, 2, !1), n.add(r));
}
function fu(e, t, n) {
  var r = 0;
  t && (r |= 4), Op(n, e, r, t);
}
var Ho = "_reactListening" + Math.random().toString(36).slice(2);
function po(e) {
  if (!e[Ho]) {
    e[Ho] = !0, Bf.forEach(function(n) {
      n !== "selectionchange" && (S0.has(n) || fu(n, !1, e), fu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ho] || (t[Ho] = !0, fu("selectionchange", !1, t));
  }
}
function Op(e, t, n, r) {
  switch (mp(t)) {
    case 1:
      var o = Nm;
      break;
    case 4:
      o = Mm;
      break;
    default:
      o = ca;
  }
  n = o.bind(null, t, n, e), o = void 0, !Yu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function pu(e, t, n, r, o) {
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
        if (l = _n(u), l === null) return;
        if (s = l.tag, s === 5 || s === 6) {
          r = i = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  rp(function() {
    var a = i, c = la(n), f = [];
    e: {
      var g = Rp.get(e);
      if (g !== void 0) {
        var k = fa, y = e;
        switch (e) {
          case "keypress":
            if (ui(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Zm;
            break;
          case "focusin":
            y = "focus", k = lu;
            break;
          case "focusout":
            y = "blur", k = lu;
            break;
          case "beforeblur":
          case "afterblur":
            k = lu;
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
            k = Kc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = zm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = e0;
            break;
          case _p:
          case Tp:
          case Pp:
            k = Hm;
            break;
          case jp:
            k = n0;
            break;
          case "scroll":
            k = Dm;
            break;
          case "wheel":
            k = o0;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Um;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Qc;
        }
        var $ = (t & 4) !== 0, _ = !$ && e === "scroll", h = $ ? g !== null ? g + "Capture" : null : g;
        $ = [];
        for (var d = a, v; d !== null; ) {
          v = d;
          var E = v.stateNode;
          if (v.tag === 5 && E !== null && (v = E, h !== null && (E = lo(d, h), E != null && $.push(ho(d, E, v)))), _) break;
          d = d.return;
        }
        0 < $.length && (g = new k(g, y, null, n, c), f.push({ event: g, listeners: $ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", g && n !== Gu && (y = n.relatedTarget || n.fromElement) && (_n(y) || y[Qt])) break e;
        if ((k || g) && (g = c.window === c ? c : (g = c.ownerDocument) ? g.defaultView || g.parentWindow : window, k ? (y = n.relatedTarget || n.toElement, k = a, y = y ? _n(y) : null, y !== null && (_ = Vn(y), y !== _ || y.tag !== 5 && y.tag !== 6) && (y = null)) : (k = null, y = a), k !== y)) {
          if ($ = Kc, E = "onMouseLeave", h = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && ($ = Qc, E = "onPointerLeave", h = "onPointerEnter", d = "pointer"), _ = k == null ? g : Zn(k), v = y == null ? g : Zn(y), g = new $(E, d + "leave", k, n, c), g.target = _, g.relatedTarget = v, E = null, _n(c) === a && ($ = new $(h, d + "enter", y, n, c), $.target = v, $.relatedTarget = _, E = $), _ = E, k && y) t: {
            for ($ = k, h = y, d = 0, v = $; v; v = Un(v)) d++;
            for (v = 0, E = h; E; E = Un(E)) v++;
            for (; 0 < d - v; ) $ = Un($), d--;
            for (; 0 < v - d; ) h = Un(h), v--;
            for (; d--; ) {
              if ($ === h || h !== null && $ === h.alternate) break t;
              $ = Un($), h = Un(h);
            }
            $ = null;
          }
          else $ = null;
          k !== null && id(f, g, k, $, !1), y !== null && _ !== null && id(f, _, y, $, !0);
        }
      }
      e: {
        if (g = a ? Zn(a) : window, k = g.nodeName && g.nodeName.toLowerCase(), k === "select" || k === "input" && g.type === "file") var T = d0;
        else if (Zc(g)) if (Cp) T = v0;
        else {
          T = p0;
          var j = f0;
        }
        else (k = g.nodeName) && k.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (T = h0);
        if (T && (T = T(e, a))) {
          kp(f, T, n, c);
          break e;
        }
        j && j(e, g, a), e === "focusout" && (j = g._wrapperState) && j.controlled && g.type === "number" && Hu(g, "number", g.value);
      }
      switch (j = a ? Zn(a) : window, e) {
        case "focusin":
          (Zc(j) || j.contentEditable === "true") && (Yn = j, es = a, qr = null);
          break;
        case "focusout":
          qr = es = Yn = null;
          break;
        case "mousedown":
          ts = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ts = !1, nd(f, n, c);
          break;
        case "selectionchange":
          if (y0) break;
        case "keydown":
        case "keyup":
          nd(f, n, c);
      }
      var M;
      if (ha) e: {
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
      else Qn ? wp(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (xp && n.locale !== "ko" && (Qn || R !== "onCompositionStart" ? R === "onCompositionEnd" && Qn && (M = yp()) : (un = c, da = "value" in un ? un.value : un.textContent, Qn = !0)), j = Ei(a, R), 0 < j.length && (R = new Gc(R, e, null, n, c), f.push({ event: R, listeners: j }), M ? R.data = M : (M = Sp(n), M !== null && (R.data = M)))), (M = l0 ? u0(e, n) : s0(e, n)) && (a = Ei(a, "onBeforeInput"), 0 < a.length && (c = new Gc("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: a }), c.data = M));
    }
    Ap(f, t);
  });
}
function ho(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ei(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = lo(e, n), i != null && r.unshift(ho(e, i, o)), i = lo(e, t), i != null && r.push(ho(e, i, o))), e = e.return;
  }
  return r;
}
function Un(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function id(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && a !== null && (u = a, o ? (s = lo(n, i), s != null && l.unshift(ho(n, s, u))) : o || (s = lo(n, i), s != null && l.push(ho(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var k0 = /\r\n?/g, C0 = /\u0000|\uFFFD/g;
function ld(e) {
  return (typeof e == "string" ? e : "" + e).replace(k0, `
`).replace(C0, "");
}
function Vo(e, t, n) {
  if (t = ld(t), ld(e) !== t && n) throw Error(A(425));
}
function $i() {
}
var ns = null, rs = null;
function os(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var is = typeof setTimeout == "function" ? setTimeout : void 0, E0 = typeof clearTimeout == "function" ? clearTimeout : void 0, ud = typeof Promise == "function" ? Promise : void 0, $0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ud < "u" ? function(e) {
  return ud.resolve(null).then(e).catch(I0);
} : is;
function I0(e) {
  setTimeout(function() {
    throw e;
  });
}
function hu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), ao(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ao(t);
}
function fn(e) {
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
function sd(e) {
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
var _r = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + _r, vo = "__reactProps$" + _r, Qt = "__reactContainer$" + _r, ls = "__reactEvents$" + _r, b0 = "__reactListeners$" + _r, _0 = "__reactHandles$" + _r;
function _n(e) {
  var t = e[Mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Qt] || n[Mt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = sd(e); e !== null; ) {
        if (n = e[Mt]) return n;
        e = sd(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function To(e) {
  return e = e[Mt] || e[Qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function cl(e) {
  return e[vo] || null;
}
var us = [], qn = -1;
function Cn(e) {
  return { current: e };
}
function xe(e) {
  0 > qn || (e.current = us[qn], us[qn] = null, qn--);
}
function ge(e, t) {
  qn++, us[qn] = e.current, e.current = t;
}
var wn = {}, We = Cn(wn), nt = Cn(!1), Nn = wn;
function vr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function rt(e) {
  return e = e.childContextTypes, e != null;
}
function Ii() {
  xe(nt), xe(We);
}
function ad(e, t, n) {
  if (We.current !== wn) throw Error(A(168));
  ge(We, t), ge(nt, n);
}
function Np(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, fm(e) || "Unknown", o));
  return Ee({}, n, r);
}
function bi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wn, Nn = We.current, ge(We, e), ge(nt, nt.current), !0;
}
function cd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = Np(e, t, Nn), r.__reactInternalMemoizedMergedChildContext = e, xe(nt), xe(We), ge(We, e)) : xe(nt), ge(nt, n);
}
var Ft = null, dl = !1, vu = !1;
function Mp(e) {
  Ft === null ? Ft = [e] : Ft.push(e);
}
function T0(e) {
  dl = !0, Mp(e);
}
function En() {
  if (!vu && Ft !== null) {
    vu = !0;
    var e = 0, t = fe;
    try {
      var n = Ft;
      for (fe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ft = null, dl = !1;
    } catch (o) {
      throw Ft !== null && (Ft = Ft.slice(e + 1)), up(ua, En), o;
    } finally {
      fe = t, vu = !1;
    }
  }
  return null;
}
var Jn = [], er = 0, _i = null, Ti = 0, gt = [], mt = 0, Mn = null, Bt = 1, Ht = "";
function $n(e, t) {
  Jn[er++] = Ti, Jn[er++] = _i, _i = e, Ti = t;
}
function Dp(e, t, n) {
  gt[mt++] = Bt, gt[mt++] = Ht, gt[mt++] = Mn, Mn = e;
  var r = Bt;
  e = Ht;
  var o = 32 - jt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - jt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Bt = 1 << 32 - jt(t) + o | n << o | r, Ht = i + e;
  } else Bt = 1 << i | n << o | r, Ht = e;
}
function ga(e) {
  e.return !== null && ($n(e, 1), Dp(e, 1, 0));
}
function ma(e) {
  for (; e === _i; ) _i = Jn[--er], Jn[er] = null, Ti = Jn[--er], Jn[er] = null;
  for (; e === Mn; ) Mn = gt[--mt], gt[mt] = null, Ht = gt[--mt], gt[mt] = null, Bt = gt[--mt], gt[mt] = null;
}
var at = null, ut = null, we = !1, _t = null;
function Lp(e, t) {
  var n = yt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function dd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, at = e, ut = fn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, at = e, ut = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mn !== null ? { id: Bt, overflow: Ht } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = yt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, at = e, ut = null, !0) : !1;
    default:
      return !1;
  }
}
function ss(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function as(e) {
  if (we) {
    var t = ut;
    if (t) {
      var n = t;
      if (!dd(e, t)) {
        if (ss(e)) throw Error(A(418));
        t = fn(n.nextSibling);
        var r = at;
        t && dd(e, t) ? Lp(r, n) : (e.flags = e.flags & -4097 | 2, we = !1, at = e);
      }
    } else {
      if (ss(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, we = !1, at = e;
    }
  }
}
function fd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  at = e;
}
function Uo(e) {
  if (e !== at) return !1;
  if (!we) return fd(e), we = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !os(e.type, e.memoizedProps)), t && (t = ut)) {
    if (ss(e)) throw zp(), Error(A(418));
    for (; t; ) Lp(e, t), t = fn(t.nextSibling);
  }
  if (fd(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ut = fn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ut = null;
    }
  } else ut = at ? fn(e.stateNode.nextSibling) : null;
  return !0;
}
function zp() {
  for (var e = ut; e; ) e = fn(e.nextSibling);
}
function gr() {
  ut = at = null, we = !1;
}
function ya(e) {
  _t === null ? _t = [e] : _t.push(e);
}
var P0 = qt.ReactCurrentBatchConfig;
function Mr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var u = o.refs;
        l === null ? delete u[i] : u[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Wo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function pd(e) {
  var t = e._init;
  return t(e._payload);
}
function Fp(e) {
  function t(h, d) {
    if (e) {
      var v = h.deletions;
      v === null ? (h.deletions = [d], h.flags |= 16) : v.push(d);
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
    return h = gn(h, d), h.index = 0, h.sibling = null, h;
  }
  function i(h, d, v) {
    return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < d ? (h.flags |= 2, d) : v) : (h.flags |= 2, d)) : (h.flags |= 1048576, d);
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function u(h, d, v, E) {
    return d === null || d.tag !== 6 ? (d = ku(v, h.mode, E), d.return = h, d) : (d = o(d, v), d.return = h, d);
  }
  function s(h, d, v, E) {
    var T = v.type;
    return T === Gn ? c(h, d, v.props.children, E, v.key) : d !== null && (d.elementType === T || typeof T == "object" && T !== null && T.$$typeof === nn && pd(T) === d.type) ? (E = o(d, v.props), E.ref = Mr(h, d, v), E.return = h, E) : (E = hi(v.type, v.key, v.props, null, h.mode, E), E.ref = Mr(h, d, v), E.return = h, E);
  }
  function a(h, d, v, E) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== v.containerInfo || d.stateNode.implementation !== v.implementation ? (d = Cu(v, h.mode, E), d.return = h, d) : (d = o(d, v.children || []), d.return = h, d);
  }
  function c(h, d, v, E, T) {
    return d === null || d.tag !== 7 ? (d = Rn(v, h.mode, E, T), d.return = h, d) : (d = o(d, v), d.return = h, d);
  }
  function f(h, d, v) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = ku("" + d, h.mode, v), d.return = h, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Oo:
          return v = hi(d.type, d.key, d.props, null, h.mode, v), v.ref = Mr(h, null, d), v.return = h, v;
        case Kn:
          return d = Cu(d, h.mode, v), d.return = h, d;
        case nn:
          var E = d._init;
          return f(h, E(d._payload), v);
      }
      if (Hr(d) || jr(d)) return d = Rn(d, h.mode, v, null), d.return = h, d;
      Wo(h, d);
    }
    return null;
  }
  function g(h, d, v, E) {
    var T = d !== null ? d.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return T !== null ? null : u(h, d, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Oo:
          return v.key === T ? s(h, d, v, E) : null;
        case Kn:
          return v.key === T ? a(h, d, v, E) : null;
        case nn:
          return T = v._init, g(
            h,
            d,
            T(v._payload),
            E
          );
      }
      if (Hr(v) || jr(v)) return T !== null ? null : c(h, d, v, E, null);
      Wo(h, v);
    }
    return null;
  }
  function k(h, d, v, E, T) {
    if (typeof E == "string" && E !== "" || typeof E == "number") return h = h.get(v) || null, u(d, h, "" + E, T);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Oo:
          return h = h.get(E.key === null ? v : E.key) || null, s(d, h, E, T);
        case Kn:
          return h = h.get(E.key === null ? v : E.key) || null, a(d, h, E, T);
        case nn:
          var j = E._init;
          return k(h, d, v, j(E._payload), T);
      }
      if (Hr(E) || jr(E)) return h = h.get(v) || null, c(d, h, E, T, null);
      Wo(d, E);
    }
    return null;
  }
  function y(h, d, v, E) {
    for (var T = null, j = null, M = d, R = d = 0, X = null; M !== null && R < v.length; R++) {
      M.index > R ? (X = M, M = null) : X = M.sibling;
      var B = g(h, M, v[R], E);
      if (B === null) {
        M === null && (M = X);
        break;
      }
      e && M && B.alternate === null && t(h, M), d = i(B, d, R), j === null ? T = B : j.sibling = B, j = B, M = X;
    }
    if (R === v.length) return n(h, M), we && $n(h, R), T;
    if (M === null) {
      for (; R < v.length; R++) M = f(h, v[R], E), M !== null && (d = i(M, d, R), j === null ? T = M : j.sibling = M, j = M);
      return we && $n(h, R), T;
    }
    for (M = r(h, M); R < v.length; R++) X = k(M, h, R, v[R], E), X !== null && (e && X.alternate !== null && M.delete(X.key === null ? R : X.key), d = i(X, d, R), j === null ? T = X : j.sibling = X, j = X);
    return e && M.forEach(function(se) {
      return t(h, se);
    }), we && $n(h, R), T;
  }
  function $(h, d, v, E) {
    var T = jr(v);
    if (typeof T != "function") throw Error(A(150));
    if (v = T.call(v), v == null) throw Error(A(151));
    for (var j = T = null, M = d, R = d = 0, X = null, B = v.next(); M !== null && !B.done; R++, B = v.next()) {
      M.index > R ? (X = M, M = null) : X = M.sibling;
      var se = g(h, M, B.value, E);
      if (se === null) {
        M === null && (M = X);
        break;
      }
      e && M && se.alternate === null && t(h, M), d = i(se, d, R), j === null ? T = se : j.sibling = se, j = se, M = X;
    }
    if (B.done) return n(
      h,
      M
    ), we && $n(h, R), T;
    if (M === null) {
      for (; !B.done; R++, B = v.next()) B = f(h, B.value, E), B !== null && (d = i(B, d, R), j === null ? T = B : j.sibling = B, j = B);
      return we && $n(h, R), T;
    }
    for (M = r(h, M); !B.done; R++, B = v.next()) B = k(M, h, R, B.value, E), B !== null && (e && B.alternate !== null && M.delete(B.key === null ? R : B.key), d = i(B, d, R), j === null ? T = B : j.sibling = B, j = B);
    return e && M.forEach(function(ue) {
      return t(h, ue);
    }), we && $n(h, R), T;
  }
  function _(h, d, v, E) {
    if (typeof v == "object" && v !== null && v.type === Gn && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Oo:
          e: {
            for (var T = v.key, j = d; j !== null; ) {
              if (j.key === T) {
                if (T = v.type, T === Gn) {
                  if (j.tag === 7) {
                    n(h, j.sibling), d = o(j, v.props.children), d.return = h, h = d;
                    break e;
                  }
                } else if (j.elementType === T || typeof T == "object" && T !== null && T.$$typeof === nn && pd(T) === j.type) {
                  n(h, j.sibling), d = o(j, v.props), d.ref = Mr(h, j, v), d.return = h, h = d;
                  break e;
                }
                n(h, j);
                break;
              } else t(h, j);
              j = j.sibling;
            }
            v.type === Gn ? (d = Rn(v.props.children, h.mode, E, v.key), d.return = h, h = d) : (E = hi(v.type, v.key, v.props, null, h.mode, E), E.ref = Mr(h, d, v), E.return = h, h = E);
          }
          return l(h);
        case Kn:
          e: {
            for (j = v.key; d !== null; ) {
              if (d.key === j) if (d.tag === 4 && d.stateNode.containerInfo === v.containerInfo && d.stateNode.implementation === v.implementation) {
                n(h, d.sibling), d = o(d, v.children || []), d.return = h, h = d;
                break e;
              } else {
                n(h, d);
                break;
              }
              else t(h, d);
              d = d.sibling;
            }
            d = Cu(v, h.mode, E), d.return = h, h = d;
          }
          return l(h);
        case nn:
          return j = v._init, _(h, d, j(v._payload), E);
      }
      if (Hr(v)) return y(h, d, v, E);
      if (jr(v)) return $(h, d, v, E);
      Wo(h, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, d !== null && d.tag === 6 ? (n(h, d.sibling), d = o(d, v), d.return = h, h = d) : (n(h, d), d = ku(v, h.mode, E), d.return = h, h = d), l(h)) : n(h, d);
  }
  return _;
}
var mr = Fp(!0), Bp = Fp(!1), Pi = Cn(null), ji = null, tr = null, xa = null;
function wa() {
  xa = tr = ji = null;
}
function Sa(e) {
  var t = Pi.current;
  xe(Pi), e._currentValue = t;
}
function cs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function dr(e, t) {
  ji = e, xa = tr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (tt = !0), e.firstContext = null);
}
function St(e) {
  var t = e._currentValue;
  if (xa !== e) if (e = { context: e, memoizedValue: t, next: null }, tr === null) {
    if (ji === null) throw Error(A(308));
    tr = e, ji.dependencies = { lanes: 0, firstContext: e };
  } else tr = tr.next = e;
  return t;
}
var Tn = null;
function ka(e) {
  Tn === null ? Tn = [e] : Tn.push(e);
}
function Hp(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ka(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Yt(e, r);
}
function Yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var rn = !1;
function Ca(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Vp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Wt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function pn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, le & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Yt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, ka(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Yt(e, n);
}
function si(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, sa(e, n);
  }
}
function hd(e, t) {
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
function Ri(e, t, n, r) {
  var o = e.updateQueue;
  rn = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, l === null ? i = a : l.next = a, l = s;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, u = c.lastBaseUpdate, u !== l && (u === null ? c.firstBaseUpdate = a : u.next = a, c.lastBaseUpdate = s));
  }
  if (i !== null) {
    var f = o.baseState;
    l = 0, c = a = s = null, u = i;
    do {
      var g = u.lane, k = u.eventTime;
      if ((r & g) === g) {
        c !== null && (c = c.next = {
          eventTime: k,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var y = e, $ = u;
          switch (g = t, k = n, $.tag) {
            case 1:
              if (y = $.payload, typeof y == "function") {
                f = y.call(k, f, g);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = $.payload, g = typeof y == "function" ? y.call(k, f, g) : y, g == null) break e;
              f = Ee({}, f, g);
              break e;
            case 2:
              rn = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, g = o.effects, g === null ? o.effects = [u] : g.push(u));
      } else k = { eventTime: k, lane: g, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, c === null ? (a = c = k, s = f) : c = c.next = k, l |= g;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null) break;
        g = u, u = g.next, g.next = null, o.lastBaseUpdate = g, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (s = f), o.baseState = s, o.firstBaseUpdate = a, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Ln |= l, e.lanes = l, e.memoizedState = f;
  }
}
function vd(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(A(191, o));
      o.call(r);
    }
  }
}
var Po = {}, Lt = Cn(Po), go = Cn(Po), mo = Cn(Po);
function Pn(e) {
  if (e === Po) throw Error(A(174));
  return e;
}
function Ea(e, t) {
  switch (ge(mo, t), ge(go, e), ge(Lt, Po), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Uu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Uu(t, e);
  }
  xe(Lt), ge(Lt, t);
}
function yr() {
  xe(Lt), xe(go), xe(mo);
}
function Up(e) {
  Pn(mo.current);
  var t = Pn(Lt.current), n = Uu(t, e.type);
  t !== n && (ge(go, e), ge(Lt, n));
}
function $a(e) {
  go.current === e && (xe(Lt), xe(go));
}
var ke = Cn(0);
function Ai(e) {
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
var gu = [];
function Ia() {
  for (var e = 0; e < gu.length; e++) gu[e]._workInProgressVersionPrimary = null;
  gu.length = 0;
}
var ai = qt.ReactCurrentDispatcher, mu = qt.ReactCurrentBatchConfig, Dn = 0, Ce = null, Te = null, Ae = null, Oi = !1, Jr = !1, yo = 0, j0 = 0;
function He() {
  throw Error(A(321));
}
function ba(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!At(e[n], t[n])) return !1;
  return !0;
}
function _a(e, t, n, r, o, i) {
  if (Dn = i, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ai.current = e === null || e.memoizedState === null ? N0 : M0, e = n(r, o), Jr) {
    i = 0;
    do {
      if (Jr = !1, yo = 0, 25 <= i) throw Error(A(301));
      i += 1, Ae = Te = null, t.updateQueue = null, ai.current = D0, e = n(r, o);
    } while (Jr);
  }
  if (ai.current = Ni, t = Te !== null && Te.next !== null, Dn = 0, Ae = Te = Ce = null, Oi = !1, t) throw Error(A(300));
  return e;
}
function Ta() {
  var e = yo !== 0;
  return yo = 0, e;
}
function Nt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ae === null ? Ce.memoizedState = Ae = e : Ae = Ae.next = e, Ae;
}
function kt() {
  if (Te === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = Ae === null ? Ce.memoizedState : Ae.next;
  if (t !== null) Ae = t, Te = e;
  else {
    if (e === null) throw Error(A(310));
    Te = e, e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }, Ae === null ? Ce.memoizedState = Ae = e : Ae = Ae.next = e;
  }
  return Ae;
}
function xo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yu(e) {
  var t = kt(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Te, o = r.baseQueue, i = n.pending;
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
      if ((Dn & c) === c) s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var f = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = f, l = r) : s = s.next = f, Ce.lanes |= c, Ln |= c;
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? l = r : s.next = u, At(r, t.memoizedState) || (tt = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ce.lanes |= i, Ln |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xu(e) {
  var t = kt(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    At(i, t.memoizedState) || (tt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Wp() {
}
function Kp(e, t) {
  var n = Ce, r = kt(), o = t(), i = !At(r.memoizedState, o);
  if (i && (r.memoizedState = o, tt = !0), r = r.queue, Pa(Yp.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ae !== null && Ae.memoizedState.tag & 1) {
    if (n.flags |= 2048, wo(9, Qp.bind(null, n, r, o, t), void 0, null), Oe === null) throw Error(A(349));
    Dn & 30 || Gp(n, t, o);
  }
  return o;
}
function Gp(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Qp(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Xp(t) && Zp(e);
}
function Yp(e, t, n) {
  return n(function() {
    Xp(t) && Zp(e);
  });
}
function Xp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !At(e, n);
  } catch {
    return !0;
  }
}
function Zp(e) {
  var t = Yt(e, 1);
  t !== null && Rt(t, e, 1, -1);
}
function gd(e) {
  var t = Nt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: xo, lastRenderedState: e }, t.queue = e, e = e.dispatch = O0.bind(null, Ce, e), [t.memoizedState, e];
}
function wo(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function qp() {
  return kt().memoizedState;
}
function ci(e, t, n, r) {
  var o = Nt();
  Ce.flags |= e, o.memoizedState = wo(1 | t, n, void 0, r === void 0 ? null : r);
}
function fl(e, t, n, r) {
  var o = kt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Te !== null) {
    var l = Te.memoizedState;
    if (i = l.destroy, r !== null && ba(r, l.deps)) {
      o.memoizedState = wo(t, n, i, r);
      return;
    }
  }
  Ce.flags |= e, o.memoizedState = wo(1 | t, n, i, r);
}
function md(e, t) {
  return ci(8390656, 8, e, t);
}
function Pa(e, t) {
  return fl(2048, 8, e, t);
}
function Jp(e, t) {
  return fl(4, 2, e, t);
}
function eh(e, t) {
  return fl(4, 4, e, t);
}
function th(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function nh(e, t, n) {
  return n = n != null ? n.concat([e]) : null, fl(4, 4, th.bind(null, t, e), n);
}
function ja() {
}
function rh(e, t) {
  var n = kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ba(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function oh(e, t) {
  var n = kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ba(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ih(e, t, n) {
  return Dn & 21 ? (At(n, t) || (n = cp(), Ce.lanes |= n, Ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, tt = !0), e.memoizedState = n);
}
function R0(e, t) {
  var n = fe;
  fe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = mu.transition;
  mu.transition = {};
  try {
    e(!1), t();
  } finally {
    fe = n, mu.transition = r;
  }
}
function lh() {
  return kt().memoizedState;
}
function A0(e, t, n) {
  var r = vn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, uh(e)) sh(t, n);
  else if (n = Hp(e, t, n, r), n !== null) {
    var o = Qe();
    Rt(n, e, r, o), ah(n, t, r);
  }
}
function O0(e, t, n) {
  var r = vn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (uh(e)) sh(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, u = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = u, At(u, l)) {
        var s = t.interleaved;
        s === null ? (o.next = o, ka(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Hp(e, t, o, r), n !== null && (o = Qe(), Rt(n, e, r, o), ah(n, t, r));
  }
}
function uh(e) {
  var t = e.alternate;
  return e === Ce || t !== null && t === Ce;
}
function sh(e, t) {
  Jr = Oi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ah(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, sa(e, n);
  }
}
var Ni = { readContext: St, useCallback: He, useContext: He, useEffect: He, useImperativeHandle: He, useInsertionEffect: He, useLayoutEffect: He, useMemo: He, useReducer: He, useRef: He, useState: He, useDebugValue: He, useDeferredValue: He, useTransition: He, useMutableSource: He, useSyncExternalStore: He, useId: He, unstable_isNewReconciler: !1 }, N0 = { readContext: St, useCallback: function(e, t) {
  return Nt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: St, useEffect: md, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ci(
    4194308,
    4,
    th.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ci(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ci(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Nt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Nt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = A0.bind(null, Ce, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Nt();
  return e = { current: e }, t.memoizedState = e;
}, useState: gd, useDebugValue: ja, useDeferredValue: function(e) {
  return Nt().memoizedState = e;
}, useTransition: function() {
  var e = gd(!1), t = e[0];
  return e = R0.bind(null, e[1]), Nt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ce, o = Nt();
  if (we) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), Oe === null) throw Error(A(349));
    Dn & 30 || Gp(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, md(Yp.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, wo(9, Qp.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Nt(), t = Oe.identifierPrefix;
  if (we) {
    var n = Ht, r = Bt;
    n = (r & ~(1 << 32 - jt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = yo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = j0++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, M0 = {
  readContext: St,
  useCallback: rh,
  useContext: St,
  useEffect: Pa,
  useImperativeHandle: nh,
  useInsertionEffect: Jp,
  useLayoutEffect: eh,
  useMemo: oh,
  useReducer: yu,
  useRef: qp,
  useState: function() {
    return yu(xo);
  },
  useDebugValue: ja,
  useDeferredValue: function(e) {
    var t = kt();
    return ih(t, Te.memoizedState, e);
  },
  useTransition: function() {
    var e = yu(xo)[0], t = kt().memoizedState;
    return [e, t];
  },
  useMutableSource: Wp,
  useSyncExternalStore: Kp,
  useId: lh,
  unstable_isNewReconciler: !1
}, D0 = { readContext: St, useCallback: rh, useContext: St, useEffect: Pa, useImperativeHandle: nh, useInsertionEffect: Jp, useLayoutEffect: eh, useMemo: oh, useReducer: xu, useRef: qp, useState: function() {
  return xu(xo);
}, useDebugValue: ja, useDeferredValue: function(e) {
  var t = kt();
  return Te === null ? t.memoizedState = e : ih(t, Te.memoizedState, e);
}, useTransition: function() {
  var e = xu(xo)[0], t = kt().memoizedState;
  return [e, t];
}, useMutableSource: Wp, useSyncExternalStore: Kp, useId: lh, unstable_isNewReconciler: !1 };
function $t(e, t) {
  if (e && e.defaultProps) {
    t = Ee({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ds(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Vn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), o = vn(e), i = Wt(r, o);
  i.payload = t, n != null && (i.callback = n), t = pn(e, i, o), t !== null && (Rt(t, e, o, r), si(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), o = vn(e), i = Wt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = pn(e, i, o), t !== null && (Rt(t, e, o, r), si(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qe(), r = vn(e), o = Wt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = pn(e, o, r), t !== null && (Rt(t, e, r, n), si(t, e, r));
} };
function yd(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !fo(n, r) || !fo(o, i) : !0;
}
function ch(e, t, n) {
  var r = !1, o = wn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = St(i) : (o = rt(t) ? Nn : We.current, r = t.contextTypes, i = (r = r != null) ? vr(e, o) : wn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = pl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function xd(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && pl.enqueueReplaceState(t, t.state, null);
}
function fs(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Ca(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = St(i) : (i = rt(t) ? Nn : We.current, o.context = vr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ds(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && pl.enqueueReplaceState(o, o.state, null), Ri(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function xr(e, t) {
  try {
    var n = "", r = t;
    do
      n += dm(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function wu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ps(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var L0 = typeof WeakMap == "function" ? WeakMap : Map;
function dh(e, t, n) {
  n = Wt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Di || (Di = !0, Cs = r), ps(e, t);
  }, n;
}
function fh(e, t, n) {
  n = Wt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      ps(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    ps(e, t), typeof r != "function" && (hn === null ? hn = /* @__PURE__ */ new Set([this]) : hn.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function wd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new L0();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = q0.bind(null, e, t, n), t.then(e, e));
}
function Sd(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function kd(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Wt(-1, 1), t.tag = 2, pn(n, t, 1))), n.lanes |= 1), e);
}
var z0 = qt.ReactCurrentOwner, tt = !1;
function Ge(e, t, n, r) {
  t.child = e === null ? Bp(t, null, n, r) : mr(t, e.child, n, r);
}
function Cd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return dr(t, o), r = _a(e, t, n, r, i, o), n = Ta(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Xt(e, t, o)) : (we && n && ga(t), t.flags |= 1, Ge(e, t, r, o), t.child);
}
function Ed(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !za(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, ph(e, t, i, r, o)) : (e = hi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : fo, n(l, r) && e.ref === t.ref) return Xt(e, t, o);
  }
  return t.flags |= 1, e = gn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ph(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (fo(i, r) && e.ref === t.ref) if (tt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (tt = !0);
    else return t.lanes = e.lanes, Xt(e, t, o);
  }
  return hs(e, t, n, r, o);
}
function hh(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ge(rr, lt), lt |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ge(rr, lt), lt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ge(rr, lt), lt |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ge(rr, lt), lt |= r;
  return Ge(e, t, o, n), t.child;
}
function vh(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function hs(e, t, n, r, o) {
  var i = rt(n) ? Nn : We.current;
  return i = vr(t, i), dr(t, o), n = _a(e, t, n, r, i, o), r = Ta(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Xt(e, t, o)) : (we && r && ga(t), t.flags |= 1, Ge(e, t, n, o), t.child);
}
function $d(e, t, n, r, o) {
  if (rt(n)) {
    var i = !0;
    bi(t);
  } else i = !1;
  if (dr(t, o), t.stateNode === null) di(e, t), ch(t, n, r), fs(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = St(a) : (a = rt(n) ? Nn : We.current, a = vr(t, a));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && xd(t, l, r, a), rn = !1;
    var g = t.memoizedState;
    l.state = g, Ri(t, r, l, o), s = t.memoizedState, u !== r || g !== s || nt.current || rn ? (typeof c == "function" && (ds(t, n, c, r), s = t.memoizedState), (u = rn || yd(t, n, u, r, g, s, a)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Vp(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : $t(t.type, u), l.props = a, f = t.pendingProps, g = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = St(s) : (s = rt(n) ? Nn : We.current, s = vr(t, s));
    var k = n.getDerivedStateFromProps;
    (c = typeof k == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== f || g !== s) && xd(t, l, r, s), rn = !1, g = t.memoizedState, l.state = g, Ri(t, r, l, o);
    var y = t.memoizedState;
    u !== f || g !== y || nt.current || rn ? (typeof k == "function" && (ds(t, n, k, r), y = t.memoizedState), (a = rn || yd(t, n, a, r, g, y, s) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, y, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, y, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), l.props = r, l.state = y, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return vs(e, t, n, r, i, o);
}
function vs(e, t, n, r, o, i) {
  vh(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && cd(t, n, !1), Xt(e, t, i);
  r = t.stateNode, z0.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = mr(t, e.child, null, i), t.child = mr(t, null, u, i)) : Ge(e, t, u, i), t.memoizedState = r.state, o && cd(t, n, !0), t.child;
}
function gh(e) {
  var t = e.stateNode;
  t.pendingContext ? ad(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ad(e, t.context, !1), Ea(e, t.containerInfo);
}
function Id(e, t, n, r, o) {
  return gr(), ya(o), t.flags |= 256, Ge(e, t, n, r), t.child;
}
var gs = { dehydrated: null, treeContext: null, retryLane: 0 };
function ms(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function mh(e, t, n) {
  var r = t.pendingProps, o = ke.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ge(ke, o & 1), e === null)
    return as(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = gl(l, r, 0, null), e = Rn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ms(n), t.memoizedState = gs, e) : Ra(t, l));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null)) return F0(e, t, l, r, u, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = gn(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? i = gn(u, i) : (i = Rn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? ms(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = gs, r;
  }
  return i = e.child, e = i.sibling, r = gn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ra(e, t) {
  return t = gl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ko(e, t, n, r) {
  return r !== null && ya(r), mr(t, e.child, null, n), e = Ra(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function F0(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = wu(Error(A(422))), Ko(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = gl({ mode: "visible", children: r.children }, o, 0, null), i = Rn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && mr(t, e.child, null, l), t.child.memoizedState = ms(l), t.memoizedState = gs, i);
  if (!(t.mode & 1)) return Ko(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(A(419)), r = wu(i, r, void 0), Ko(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, tt || u) {
    if (r = Oe, r !== null) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Yt(e, o), Rt(r, e, o, -1));
    }
    return La(), r = wu(Error(A(421))), Ko(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = J0.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, ut = fn(o.nextSibling), at = t, we = !0, _t = null, e !== null && (gt[mt++] = Bt, gt[mt++] = Ht, gt[mt++] = Mn, Bt = e.id, Ht = e.overflow, Mn = t), t = Ra(t, r.children), t.flags |= 4096, t);
}
function bd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cs(e.return, t, n);
}
function Su(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function yh(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Ge(e, t, r.children, n), r = ke.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && bd(e, n, t);
      else if (e.tag === 19) bd(e, n, t);
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
  if (ge(ke, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ai(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Su(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ai(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Su(t, !0, n, null, i);
      break;
    case "together":
      Su(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function di(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Xt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = gn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function B0(e, t, n) {
  switch (t.tag) {
    case 3:
      gh(t), gr();
      break;
    case 5:
      Up(t);
      break;
    case 1:
      rt(t.type) && bi(t);
      break;
    case 4:
      Ea(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ge(Pi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ge(ke, ke.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? mh(e, t, n) : (ge(ke, ke.current & 1), e = Xt(e, t, n), e !== null ? e.sibling : null);
      ge(ke, ke.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return yh(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ge(ke, ke.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, hh(e, t, n);
  }
  return Xt(e, t, n);
}
var xh, ys, wh, Sh;
xh = function(e, t) {
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
ys = function() {
};
wh = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Pn(Lt.current);
    var i = null;
    switch (n) {
      case "input":
        o = Fu(e, o), r = Fu(e, r), i = [];
        break;
      case "select":
        o = Ee({}, o, { value: void 0 }), r = Ee({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Vu(e, o), r = Vu(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $i);
    }
    Wu(n, r);
    var l;
    n = null;
    for (a in o) if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
      var u = o[a];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (oo.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = o != null ? o[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (i || (i = []), i.push(
        a,
        n
      )), n = s;
      else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (oo.hasOwnProperty(a) ? (s != null && a === "onScroll" && ye("scroll", e), i || u === s || (i = [])) : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Sh = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Dr(e, t) {
  if (!we) switch (e.tailMode) {
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
function Ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function H0(e, t, n) {
  var r = t.pendingProps;
  switch (ma(t), t.tag) {
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
      return Ve(t), null;
    case 1:
      return rt(t.type) && Ii(), Ve(t), null;
    case 3:
      return r = t.stateNode, yr(), xe(nt), xe(We), Ia(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Uo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, _t !== null && (Is(_t), _t = null))), ys(e, t), Ve(t), null;
    case 5:
      $a(t);
      var o = Pn(mo.current);
      if (n = t.type, e !== null && t.stateNode != null) wh(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Ve(t), null;
        }
        if (e = Pn(Lt.current), Uo(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Mt] = t, r[vo] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ye("cancel", r), ye("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ye("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ur.length; o++) ye(Ur[o], r);
              break;
            case "source":
              ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ye(
                "error",
                r
              ), ye("load", r);
              break;
            case "details":
              ye("toggle", r);
              break;
            case "input":
              Mc(r, i), ye("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ye("invalid", r);
              break;
            case "textarea":
              Lc(r, i), ye("invalid", r);
          }
          Wu(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var u = i[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Vo(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Vo(
              r.textContent,
              u,
              e
            ), o = ["children", "" + u]) : oo.hasOwnProperty(l) && u != null && l === "onScroll" && ye("scroll", r);
          }
          switch (n) {
            case "input":
              No(r), Dc(r, i, !0);
              break;
            case "textarea":
              No(r), zc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = $i);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Yf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Mt] = t, e[vo] = r, xh(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Ku(n, r), n) {
              case "dialog":
                ye("cancel", e), ye("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ur.length; o++) ye(Ur[o], e);
                o = r;
                break;
              case "source":
                ye("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ye(
                  "error",
                  e
                ), ye("load", e), o = r;
                break;
              case "details":
                ye("toggle", e), o = r;
                break;
              case "input":
                Mc(e, r), o = Fu(e, r), ye("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ee({}, r, { value: void 0 }), ye("invalid", e);
                break;
              case "textarea":
                Lc(e, r), o = Vu(e, r), ye("invalid", e);
                break;
              default:
                o = r;
            }
            Wu(n, o), u = o;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? qf(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Xf(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && io(e, s) : typeof s == "number" && io(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (oo.hasOwnProperty(i) ? s != null && i === "onScroll" && ye("scroll", e) : s != null && na(e, i, s, l));
            }
            switch (n) {
              case "input":
                No(e), Dc(e, r, !1);
                break;
              case "textarea":
                No(e), zc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ur(e, !!r.multiple, i, !1) : r.defaultValue != null && ur(
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
      return Ve(t), null;
    case 6:
      if (e && t.stateNode != null) Sh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = Pn(mo.current), Pn(Lt.current), Uo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Mt] = t, (i = r.nodeValue !== n) && (e = at, e !== null)) switch (e.tag) {
            case 3:
              Vo(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Vo(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Mt] = t, t.stateNode = r;
      }
      return Ve(t), null;
    case 13:
      if (xe(ke), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (we && ut !== null && t.mode & 1 && !(t.flags & 128)) zp(), gr(), t.flags |= 98560, i = !1;
        else if (i = Uo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(A(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(A(317));
            i[Mt] = t;
          } else gr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ve(t), i = !1;
        } else _t !== null && (Is(_t), _t = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ke.current & 1 ? Pe === 0 && (Pe = 3) : La())), t.updateQueue !== null && (t.flags |= 4), Ve(t), null);
    case 4:
      return yr(), ys(e, t), e === null && po(t.stateNode.containerInfo), Ve(t), null;
    case 10:
      return Sa(t.type._context), Ve(t), null;
    case 17:
      return rt(t.type) && Ii(), Ve(t), null;
    case 19:
      if (xe(ke), i = t.memoizedState, i === null) return Ve(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) Dr(i, !1);
      else {
        if (Pe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Ai(e), l !== null) {
            for (t.flags |= 128, Dr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ge(ke, ke.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && be() > wr && (t.flags |= 128, r = !0, Dr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ai(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Dr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !we) return Ve(t), null;
        } else 2 * be() - i.renderingStartTime > wr && n !== 1073741824 && (t.flags |= 128, r = !0, Dr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = be(), t.sibling = null, n = ke.current, ge(ke, r ? n & 1 | 2 : n & 1), t) : (Ve(t), null);
    case 22:
    case 23:
      return Da(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? lt & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function V0(e, t) {
  switch (ma(t), t.tag) {
    case 1:
      return rt(t.type) && Ii(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return yr(), xe(nt), xe(We), Ia(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return $a(t), null;
    case 13:
      if (xe(ke), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        gr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return xe(ke), null;
    case 4:
      return yr(), null;
    case 10:
      return Sa(t.type._context), null;
    case 22:
    case 23:
      return Da(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Go = !1, Ue = !1, U0 = typeof WeakSet == "function" ? WeakSet : Set, F = null;
function nr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ie(e, t, r);
  }
  else n.current = null;
}
function xs(e, t, n) {
  try {
    n();
  } catch (r) {
    Ie(e, t, r);
  }
}
var _d = !1;
function W0(e, t) {
  if (ns = ki, e = Ip(), va(e)) {
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
        var l = 0, u = -1, s = -1, a = 0, c = 0, f = e, g = null;
        t: for (; ; ) {
          for (var k; f !== n || o !== 0 && f.nodeType !== 3 || (u = l + o), f !== i || r !== 0 && f.nodeType !== 3 || (s = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (k = f.firstChild) !== null; )
            g = f, f = k;
          for (; ; ) {
            if (f === e) break t;
            if (g === n && ++a === o && (u = l), g === i && ++c === r && (s = l), (k = f.nextSibling) !== null) break;
            f = g, g = f.parentNode;
          }
          f = k;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (rs = { focusedElem: e, selectionRange: n }, ki = !1, F = t; F !== null; ) if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e;
  else for (; F !== null; ) {
    t = F;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var $ = y.memoizedProps, _ = y.memoizedState, h = t.stateNode, d = h.getSnapshotBeforeUpdate(t.elementType === t.type ? $ : $t(t.type, $), _);
            h.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var v = t.stateNode.containerInfo;
          v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(A(163));
      }
    } catch (E) {
      Ie(t, t.return, E);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, F = e;
      break;
    }
    F = t.return;
  }
  return y = _d, _d = !1, y;
}
function eo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && xs(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function hl(e, t) {
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
function ws(e) {
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
function kh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, kh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mt], delete t[vo], delete t[ls], delete t[b0], delete t[_0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ch(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Td(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ch(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ss(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $i));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ss(e, t, n), e = e.sibling; e !== null; ) Ss(e, t, n), e = e.sibling;
}
function ks(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ks(e, t, n), e = e.sibling; e !== null; ) ks(e, t, n), e = e.sibling;
}
var De = null, It = !1;
function Jt(e, t, n) {
  for (n = n.child; n !== null; ) Eh(e, t, n), n = n.sibling;
}
function Eh(e, t, n) {
  if (Dt && typeof Dt.onCommitFiberUnmount == "function") try {
    Dt.onCommitFiberUnmount(ll, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ue || nr(n, t);
    case 6:
      var r = De, o = It;
      De = null, Jt(e, t, n), De = r, It = o, De !== null && (It ? (e = De, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : De.removeChild(n.stateNode));
      break;
    case 18:
      De !== null && (It ? (e = De, n = n.stateNode, e.nodeType === 8 ? hu(e.parentNode, n) : e.nodeType === 1 && hu(e, n), ao(e)) : hu(De, n.stateNode));
      break;
    case 4:
      r = De, o = It, De = n.stateNode.containerInfo, It = !0, Jt(e, t, n), De = r, It = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && xs(n, t, l), o = o.next;
        } while (o !== r);
      }
      Jt(e, t, n);
      break;
    case 1:
      if (!Ue && (nr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Ie(n, t, u);
      }
      Jt(e, t, n);
      break;
    case 21:
      Jt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null, Jt(e, t, n), Ue = r) : Jt(e, t, n);
      break;
    default:
      Jt(e, t, n);
  }
}
function Pd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new U0()), t.forEach(function(r) {
      var o = e1.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Et(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            De = u.stateNode, It = !1;
            break e;
          case 3:
            De = u.stateNode.containerInfo, It = !0;
            break e;
          case 4:
            De = u.stateNode.containerInfo, It = !0;
            break e;
        }
        u = u.return;
      }
      if (De === null) throw Error(A(160));
      Eh(i, l, o), De = null, It = !1;
      var s = o.alternate;
      s !== null && (s.return = null), o.return = null;
    } catch (a) {
      Ie(o, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) $h(t, e), t = t.sibling;
}
function $h(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Et(t, e), Ot(e), r & 4) {
        try {
          eo(3, e, e.return), hl(3, e);
        } catch ($) {
          Ie(e, e.return, $);
        }
        try {
          eo(5, e, e.return);
        } catch ($) {
          Ie(e, e.return, $);
        }
      }
      break;
    case 1:
      Et(t, e), Ot(e), r & 512 && n !== null && nr(n, n.return);
      break;
    case 5:
      if (Et(t, e), Ot(e), r & 512 && n !== null && nr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          io(o, "");
        } catch ($) {
          Ie(e, e.return, $);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && Gf(o, i), Ku(u, l);
          var a = Ku(u, i);
          for (l = 0; l < s.length; l += 2) {
            var c = s[l], f = s[l + 1];
            c === "style" ? qf(o, f) : c === "dangerouslySetInnerHTML" ? Xf(o, f) : c === "children" ? io(o, f) : na(o, c, f, a);
          }
          switch (u) {
            case "input":
              Bu(o, i);
              break;
            case "textarea":
              Qf(o, i);
              break;
            case "select":
              var g = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var k = i.value;
              k != null ? ur(o, !!i.multiple, k, !1) : g !== !!i.multiple && (i.defaultValue != null ? ur(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : ur(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[vo] = i;
        } catch ($) {
          Ie(e, e.return, $);
        }
      }
      break;
    case 6:
      if (Et(t, e), Ot(e), r & 4) {
        if (e.stateNode === null) throw Error(A(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch ($) {
          Ie(e, e.return, $);
        }
      }
      break;
    case 3:
      if (Et(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ao(t.containerInfo);
      } catch ($) {
        Ie(e, e.return, $);
      }
      break;
    case 4:
      Et(t, e), Ot(e);
      break;
    case 13:
      Et(t, e), Ot(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Na = be())), r & 4 && Pd(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (a = Ue) || c, Et(t, e), Ue = a) : Et(t, e), Ot(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !c && e.mode & 1) for (F = e, c = e.child; c !== null; ) {
          for (f = F = c; F !== null; ) {
            switch (g = F, k = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                eo(4, g, g.return);
                break;
              case 1:
                nr(g, g.return);
                var y = g.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch ($) {
                    Ie(r, n, $);
                  }
                }
                break;
              case 5:
                nr(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  Rd(f);
                  continue;
                }
            }
            k !== null ? (k.return = g, F = k) : Rd(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                o = f.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = f.stateNode, s = f.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Zf("display", l));
              } catch ($) {
                Ie(e, e.return, $);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = a ? "" : f.memoizedProps;
            } catch ($) {
              Ie(e, e.return, $);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      Et(t, e), Ot(e), r & 4 && Pd(e);
      break;
    case 21:
      break;
    default:
      Et(
        t,
        e
      ), Ot(e);
  }
}
function Ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ch(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (io(o, ""), r.flags &= -33);
          var i = Td(e);
          ks(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = Td(e);
          Ss(e, u, l);
          break;
        default:
          throw Error(A(161));
      }
    } catch (s) {
      Ie(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function K0(e, t, n) {
  F = e, Ih(e);
}
function Ih(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Go;
      if (!l) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || Ue;
        u = Go;
        var a = Ue;
        if (Go = l, (Ue = s) && !a) for (F = o; F !== null; ) l = F, s = l.child, l.tag === 22 && l.memoizedState !== null ? Ad(o) : s !== null ? (s.return = l, F = s) : Ad(o);
        for (; i !== null; ) F = i, Ih(i), i = i.sibling;
        F = o, Go = u, Ue = a;
      }
      jd(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, F = i) : jd(e);
  }
}
function jd(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ue || hl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ue) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : $t(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && vd(t, i, r);
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
              vd(t, l, n);
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
                  var f = c.dehydrated;
                  f !== null && ao(f);
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
            throw Error(A(163));
        }
        Ue || t.flags & 512 && ws(t);
      } catch (g) {
        Ie(t, t.return, g);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function Rd(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function Ad(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hl(4, t);
          } catch (s) {
            Ie(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Ie(t, o, s);
            }
          }
          var i = t.return;
          try {
            ws(t);
          } catch (s) {
            Ie(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ws(t);
          } catch (s) {
            Ie(t, l, s);
          }
      }
    } catch (s) {
      Ie(t, t.return, s);
    }
    if (t === e) {
      F = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, F = u;
      break;
    }
    F = t.return;
  }
}
var G0 = Math.ceil, Mi = qt.ReactCurrentDispatcher, Aa = qt.ReactCurrentOwner, xt = qt.ReactCurrentBatchConfig, le = 0, Oe = null, _e = null, Le = 0, lt = 0, rr = Cn(0), Pe = 0, So = null, Ln = 0, vl = 0, Oa = 0, to = null, et = null, Na = 0, wr = 1 / 0, zt = null, Di = !1, Cs = null, hn = null, Qo = !1, sn = null, Li = 0, no = 0, Es = null, fi = -1, pi = 0;
function Qe() {
  return le & 6 ? be() : fi !== -1 ? fi : fi = be();
}
function vn(e) {
  return e.mode & 1 ? le & 2 && Le !== 0 ? Le & -Le : P0.transition !== null ? (pi === 0 && (pi = cp()), pi) : (e = fe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mp(e.type)), e) : 1;
}
function Rt(e, t, n, r) {
  if (50 < no) throw no = 0, Es = null, Error(A(185));
  bo(e, n, r), (!(le & 2) || e !== Oe) && (e === Oe && (!(le & 2) && (vl |= n), Pe === 4 && ln(e, Le)), ot(e, r), n === 1 && le === 0 && !(t.mode & 1) && (wr = be() + 500, dl && En()));
}
function ot(e, t) {
  var n = e.callbackNode;
  Pm(e, t);
  var r = Si(e, e === Oe ? Le : 0);
  if (r === 0) n !== null && Hc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Hc(n), t === 1) e.tag === 0 ? T0(Od.bind(null, e)) : Mp(Od.bind(null, e)), $0(function() {
      !(le & 6) && En();
    }), n = null;
    else {
      switch (dp(r)) {
        case 1:
          n = ua;
          break;
        case 4:
          n = sp;
          break;
        case 16:
          n = wi;
          break;
        case 536870912:
          n = ap;
          break;
        default:
          n = wi;
      }
      n = Oh(n, bh.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function bh(e, t) {
  if (fi = -1, pi = 0, le & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (fr() && e.callbackNode !== n) return null;
  var r = Si(e, e === Oe ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zi(e, r);
  else {
    t = r;
    var o = le;
    le |= 2;
    var i = Th();
    (Oe !== e || Le !== t) && (zt = null, wr = be() + 500, jn(e, t));
    do
      try {
        X0();
        break;
      } catch (u) {
        _h(e, u);
      }
    while (!0);
    wa(), Mi.current = i, le = o, _e !== null ? t = 0 : (Oe = null, Le = 0, t = Pe);
  }
  if (t !== 0) {
    if (t === 2 && (o = Zu(e), o !== 0 && (r = o, t = $s(e, o))), t === 1) throw n = So, jn(e, 0), ln(e, r), ot(e, be()), n;
    if (t === 6) ln(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Q0(o) && (t = zi(e, r), t === 2 && (i = Zu(e), i !== 0 && (r = i, t = $s(e, i))), t === 1)) throw n = So, jn(e, 0), ln(e, r), ot(e, be()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          In(e, et, zt);
          break;
        case 3:
          if (ln(e, r), (r & 130023424) === r && (t = Na + 500 - be(), 10 < t)) {
            if (Si(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Qe(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = is(In.bind(null, e, et, zt), t);
            break;
          }
          In(e, et, zt);
          break;
        case 4:
          if (ln(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - jt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = be() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * G0(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = is(In.bind(null, e, et, zt), r);
            break;
          }
          In(e, et, zt);
          break;
        case 5:
          In(e, et, zt);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return ot(e, be()), e.callbackNode === n ? bh.bind(null, e) : null;
}
function $s(e, t) {
  var n = to;
  return e.current.memoizedState.isDehydrated && (jn(e, t).flags |= 256), e = zi(e, t), e !== 2 && (t = et, et = n, t !== null && Is(t)), e;
}
function Is(e) {
  et === null ? et = e : et.push.apply(et, e);
}
function Q0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!At(i(), o)) return !1;
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
function ln(e, t) {
  for (t &= ~Oa, t &= ~vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - jt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Od(e) {
  if (le & 6) throw Error(A(327));
  fr();
  var t = Si(e, 0);
  if (!(t & 1)) return ot(e, be()), null;
  var n = zi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zu(e);
    r !== 0 && (t = r, n = $s(e, r));
  }
  if (n === 1) throw n = So, jn(e, 0), ln(e, t), ot(e, be()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, In(e, et, zt), ot(e, be()), null;
}
function Ma(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    le = n, le === 0 && (wr = be() + 500, dl && En());
  }
}
function zn(e) {
  sn !== null && sn.tag === 0 && !(le & 6) && fr();
  var t = le;
  le |= 1;
  var n = xt.transition, r = fe;
  try {
    if (xt.transition = null, fe = 1, e) return e();
  } finally {
    fe = r, xt.transition = n, le = t, !(le & 6) && En();
  }
}
function Da() {
  lt = rr.current, xe(rr);
}
function jn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, E0(n)), _e !== null) for (n = _e.return; n !== null; ) {
    var r = n;
    switch (ma(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ii();
        break;
      case 3:
        yr(), xe(nt), xe(We), Ia();
        break;
      case 5:
        $a(r);
        break;
      case 4:
        yr();
        break;
      case 13:
        xe(ke);
        break;
      case 19:
        xe(ke);
        break;
      case 10:
        Sa(r.type._context);
        break;
      case 22:
      case 23:
        Da();
    }
    n = n.return;
  }
  if (Oe = e, _e = e = gn(e.current, null), Le = lt = t, Pe = 0, So = null, Oa = vl = Ln = 0, et = to = null, Tn !== null) {
    for (t = 0; t < Tn.length; t++) if (n = Tn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    Tn = null;
  }
  return e;
}
function _h(e, t) {
  do {
    var n = _e;
    try {
      if (wa(), ai.current = Ni, Oi) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Oi = !1;
      }
      if (Dn = 0, Ae = Te = Ce = null, Jr = !1, yo = 0, Aa.current = null, n === null || n.return === null) {
        Pe = 1, So = t, _e = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = Le, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, c = u, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var g = c.alternate;
            g ? (c.updateQueue = g.updateQueue, c.memoizedState = g.memoizedState, c.lanes = g.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var k = Sd(l);
          if (k !== null) {
            k.flags &= -257, kd(k, l, u, i, t), k.mode & 1 && wd(i, a, t), t = k, s = a;
            var y = t.updateQueue;
            if (y === null) {
              var $ = /* @__PURE__ */ new Set();
              $.add(s), t.updateQueue = $;
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              wd(i, a, t), La();
              break e;
            }
            s = Error(A(426));
          }
        } else if (we && u.mode & 1) {
          var _ = Sd(l);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), kd(_, l, u, i, t), ya(xr(s, u));
            break e;
          }
        }
        i = s = xr(s, u), Pe !== 4 && (Pe = 2), to === null ? to = [i] : to.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = dh(i, s, t);
              hd(i, h);
              break e;
            case 1:
              u = s;
              var d = i.type, v = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (hn === null || !hn.has(v)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var E = fh(i, u, t);
                hd(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      jh(n);
    } catch (T) {
      t = T, _e === n && n !== null && (_e = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Th() {
  var e = Mi.current;
  return Mi.current = Ni, e === null ? Ni : e;
}
function La() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4), Oe === null || !(Ln & 268435455) && !(vl & 268435455) || ln(Oe, Le);
}
function zi(e, t) {
  var n = le;
  le |= 2;
  var r = Th();
  (Oe !== e || Le !== t) && (zt = null, jn(e, t));
  do
    try {
      Y0();
      break;
    } catch (o) {
      _h(e, o);
    }
  while (!0);
  if (wa(), le = n, Mi.current = r, _e !== null) throw Error(A(261));
  return Oe = null, Le = 0, Pe;
}
function Y0() {
  for (; _e !== null; ) Ph(_e);
}
function X0() {
  for (; _e !== null && !Sm(); ) Ph(_e);
}
function Ph(e) {
  var t = Ah(e.alternate, e, lt);
  e.memoizedProps = e.pendingProps, t === null ? jh(e) : _e = t, Aa.current = null;
}
function jh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = V0(n, t), n !== null) {
        n.flags &= 32767, _e = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Pe = 6, _e = null;
        return;
      }
    } else if (n = H0(n, t, lt), n !== null) {
      _e = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      _e = t;
      return;
    }
    _e = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function In(e, t, n) {
  var r = fe, o = xt.transition;
  try {
    xt.transition = null, fe = 1, Z0(e, t, n, r);
  } finally {
    xt.transition = o, fe = r;
  }
  return null;
}
function Z0(e, t, n, r) {
  do
    fr();
  while (sn !== null);
  if (le & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (jm(e, i), e === Oe && (_e = Oe = null, Le = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Qo || (Qo = !0, Oh(wi, function() {
    return fr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = xt.transition, xt.transition = null;
    var l = fe;
    fe = 1;
    var u = le;
    le |= 4, Aa.current = null, W0(e, n), $h(n, e), m0(rs), ki = !!ns, rs = ns = null, e.current = n, K0(n), km(), le = u, fe = l, xt.transition = i;
  } else e.current = n;
  if (Qo && (Qo = !1, sn = e, Li = o), i = e.pendingLanes, i === 0 && (hn = null), $m(n.stateNode), ot(e, be()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Di) throw Di = !1, e = Cs, Cs = null, e;
  return Li & 1 && e.tag !== 0 && fr(), i = e.pendingLanes, i & 1 ? e === Es ? no++ : (no = 0, Es = e) : no = 0, En(), null;
}
function fr() {
  if (sn !== null) {
    var e = dp(Li), t = xt.transition, n = fe;
    try {
      if (xt.transition = null, fe = 16 > e ? 16 : e, sn === null) var r = !1;
      else {
        if (e = sn, sn = null, Li = 0, le & 6) throw Error(A(331));
        var o = le;
        for (le |= 4, F = e.current; F !== null; ) {
          var i = F, l = i.child;
          if (F.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (F = a; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      eo(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, F = f;
                  else for (; F !== null; ) {
                    c = F;
                    var g = c.sibling, k = c.return;
                    if (kh(c), c === a) {
                      F = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = k, F = g;
                      break;
                    }
                    F = k;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var $ = y.child;
                if ($ !== null) {
                  y.child = null;
                  do {
                    var _ = $.sibling;
                    $.sibling = null, $ = _;
                  } while ($ !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, F = l;
          else e: for (; F !== null; ) {
            if (i = F, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                eo(9, i, i.return);
            }
            var h = i.sibling;
            if (h !== null) {
              h.return = i.return, F = h;
              break e;
            }
            F = i.return;
          }
        }
        var d = e.current;
        for (F = d; F !== null; ) {
          l = F;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) v.return = l, F = v;
          else e: for (l = d; F !== null; ) {
            if (u = F, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  hl(9, u);
              }
            } catch (T) {
              Ie(u, u.return, T);
            }
            if (u === l) {
              F = null;
              break e;
            }
            var E = u.sibling;
            if (E !== null) {
              E.return = u.return, F = E;
              break e;
            }
            F = u.return;
          }
        }
        if (le = o, En(), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
          Dt.onPostCommitFiberRoot(ll, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      fe = n, xt.transition = t;
    }
  }
  return !1;
}
function Nd(e, t, n) {
  t = xr(n, t), t = dh(e, t, 1), e = pn(e, t, 1), t = Qe(), e !== null && (bo(e, 1, t), ot(e, t));
}
function Ie(e, t, n) {
  if (e.tag === 3) Nd(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Nd(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (hn === null || !hn.has(r))) {
        e = xr(n, e), e = fh(t, e, 1), t = pn(t, e, 1), e = Qe(), t !== null && (bo(t, 1, e), ot(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function q0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qe(), e.pingedLanes |= e.suspendedLanes & n, Oe === e && (Le & n) === n && (Pe === 4 || Pe === 3 && (Le & 130023424) === Le && 500 > be() - Na ? jn(e, 0) : Oa |= n), ot(e, t);
}
function Rh(e, t) {
  t === 0 && (e.mode & 1 ? (t = Lo, Lo <<= 1, !(Lo & 130023424) && (Lo = 4194304)) : t = 1);
  var n = Qe();
  e = Yt(e, t), e !== null && (bo(e, t, n), ot(e, n));
}
function J0(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Rh(e, n);
}
function e1(e, t) {
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
      throw Error(A(314));
  }
  r !== null && r.delete(t), Rh(e, n);
}
var Ah;
Ah = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || nt.current) tt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return tt = !1, B0(e, t, n);
    tt = !!(e.flags & 131072);
  }
  else tt = !1, we && t.flags & 1048576 && Dp(t, Ti, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      di(e, t), e = t.pendingProps;
      var o = vr(t, We.current);
      dr(t, n), o = _a(null, t, r, e, o, n);
      var i = Ta();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, rt(r) ? (i = !0, bi(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ca(t), o.updater = pl, t.stateNode = o, o._reactInternals = t, fs(t, r, e, n), t = vs(null, t, r, !0, i, n)) : (t.tag = 0, we && i && ga(t), Ge(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (di(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = n1(r), e = $t(r, e), o) {
          case 0:
            t = hs(null, t, r, e, n);
            break e;
          case 1:
            t = $d(null, t, r, e, n);
            break e;
          case 11:
            t = Cd(null, t, r, e, n);
            break e;
          case 14:
            t = Ed(null, t, r, $t(r.type, e), n);
            break e;
        }
        throw Error(A(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : $t(r, o), hs(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : $t(r, o), $d(e, t, r, o, n);
    case 3:
      e: {
        if (gh(t), e === null) throw Error(A(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Vp(e, t), Ri(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = xr(Error(A(423)), t), t = Id(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = xr(Error(A(424)), t), t = Id(e, t, r, n, o);
          break e;
        } else for (ut = fn(t.stateNode.containerInfo.firstChild), at = t, we = !0, _t = null, n = Bp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (gr(), r === o) {
            t = Xt(e, t, n);
            break e;
          }
          Ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Up(t), e === null && as(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, os(r, o) ? l = null : i !== null && os(r, i) && (t.flags |= 32), vh(e, t), Ge(e, t, l, n), t.child;
    case 6:
      return e === null && as(t), null;
    case 13:
      return mh(e, t, n);
    case 4:
      return Ea(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mr(t, null, r, n) : Ge(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : $t(r, o), Cd(e, t, r, o, n);
    case 7:
      return Ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, ge(Pi, r._currentValue), r._currentValue = l, i !== null) if (At(i.value, l)) {
          if (i.children === o.children && !nt.current) {
            t = Xt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            l = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = Wt(-1, n & -n), s.tag = 2;
                  var a = i.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var c = a.pending;
                    c === null ? s.next = s : (s.next = c.next, c.next = s), a.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), cs(
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
            if (l = i.return, l === null) throw Error(A(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), cs(l, n, t), l = i.sibling;
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
        Ge(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, dr(t, n), o = St(o), r = r(o), t.flags |= 1, Ge(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = $t(r, t.pendingProps), o = $t(r.type, o), Ed(e, t, r, o, n);
    case 15:
      return ph(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : $t(r, o), di(e, t), t.tag = 1, rt(r) ? (e = !0, bi(t)) : e = !1, dr(t, n), ch(t, r, o), fs(t, r, o, n), vs(null, t, r, !0, e, n);
    case 19:
      return yh(e, t, n);
    case 22:
      return hh(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Oh(e, t) {
  return up(e, t);
}
function t1(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function yt(e, t, n, r) {
  return new t1(e, t, n, r);
}
function za(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function n1(e) {
  if (typeof e == "function") return za(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === oa) return 11;
    if (e === ia) return 14;
  }
  return 2;
}
function gn(e, t) {
  var n = e.alternate;
  return n === null ? (n = yt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function hi(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") za(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Gn:
      return Rn(n.children, o, i, t);
    case ra:
      l = 8, o |= 8;
      break;
    case Mu:
      return e = yt(12, n, t, o | 2), e.elementType = Mu, e.lanes = i, e;
    case Du:
      return e = yt(13, n, t, o), e.elementType = Du, e.lanes = i, e;
    case Lu:
      return e = yt(19, n, t, o), e.elementType = Lu, e.lanes = i, e;
    case Uf:
      return gl(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Hf:
          l = 10;
          break e;
        case Vf:
          l = 9;
          break e;
        case oa:
          l = 11;
          break e;
        case ia:
          l = 14;
          break e;
        case nn:
          l = 16, r = null;
          break e;
      }
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = yt(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Rn(e, t, n, r) {
  return e = yt(7, e, r, t), e.lanes = n, e;
}
function gl(e, t, n, r) {
  return e = yt(22, e, r, t), e.elementType = Uf, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ku(e, t, n) {
  return e = yt(6, e, null, t), e.lanes = n, e;
}
function Cu(e, t, n) {
  return t = yt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function r1(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ru(0), this.expirationTimes = ru(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ru(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Fa(e, t, n, r, o, i, l, u, s) {
  return e = new r1(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = yt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ca(i), e;
}
function o1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Kn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Nh(e) {
  if (!e) return wn;
  e = e._reactInternals;
  e: {
    if (Vn(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (rt(n)) return Np(e, n, t);
  }
  return t;
}
function Mh(e, t, n, r, o, i, l, u, s) {
  return e = Fa(n, r, !0, e, o, i, l, u, s), e.context = Nh(null), n = e.current, r = Qe(), o = vn(n), i = Wt(r, o), i.callback = t ?? null, pn(n, i, o), e.current.lanes = o, bo(e, o, r), ot(e, r), e;
}
function ml(e, t, n, r) {
  var o = t.current, i = Qe(), l = vn(o);
  return n = Nh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Wt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = pn(o, t, l), e !== null && (Rt(e, o, l, i), si(e, o, l)), l;
}
function Fi(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Md(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ba(e, t) {
  Md(e, t), (e = e.alternate) && Md(e, t);
}
function i1() {
  return null;
}
var Dh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ha(e) {
  this._internalRoot = e;
}
yl.prototype.render = Ha.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  ml(e, t, null, null);
};
yl.prototype.unmount = Ha.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zn(function() {
      ml(null, e, null, null);
    }), t[Qt] = null;
  }
};
function yl(e) {
  this._internalRoot = e;
}
yl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = hp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < on.length && t !== 0 && t < on[n].priority; n++) ;
    on.splice(n, 0, e), n === 0 && gp(e);
  }
};
function Va(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function xl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Dd() {
}
function l1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = Fi(l);
        i.call(a);
      };
    }
    var l = Mh(t, r, e, 0, null, !1, !1, "", Dd);
    return e._reactRootContainer = l, e[Qt] = l.current, po(e.nodeType === 8 ? e.parentNode : e), zn(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Fi(s);
      u.call(a);
    };
  }
  var s = Fa(e, 0, !1, null, null, !1, !1, "", Dd);
  return e._reactRootContainer = s, e[Qt] = s.current, po(e.nodeType === 8 ? e.parentNode : e), zn(function() {
    ml(t, s, n, r);
  }), s;
}
function wl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var s = Fi(l);
        u.call(s);
      };
    }
    ml(t, l, e, o);
  } else l = l1(n, t, e, o, r);
  return Fi(l);
}
fp = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vr(t.pendingLanes);
        n !== 0 && (sa(t, n | 1), ot(t, be()), !(le & 6) && (wr = be() + 500, En()));
      }
      break;
    case 13:
      zn(function() {
        var r = Yt(e, 1);
        if (r !== null) {
          var o = Qe();
          Rt(r, e, 1, o);
        }
      }), Ba(e, 1);
  }
};
aa = function(e) {
  if (e.tag === 13) {
    var t = Yt(e, 134217728);
    if (t !== null) {
      var n = Qe();
      Rt(t, e, 134217728, n);
    }
    Ba(e, 134217728);
  }
};
pp = function(e) {
  if (e.tag === 13) {
    var t = vn(e), n = Yt(e, t);
    if (n !== null) {
      var r = Qe();
      Rt(n, e, t, r);
    }
    Ba(e, t);
  }
};
hp = function() {
  return fe;
};
vp = function(e, t) {
  var n = fe;
  try {
    return fe = e, t();
  } finally {
    fe = n;
  }
};
Qu = function(e, t, n) {
  switch (t) {
    case "input":
      if (Bu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = cl(r);
            if (!o) throw Error(A(90));
            Kf(r), Bu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Qf(e, n);
      break;
    case "select":
      t = n.value, t != null && ur(e, !!n.multiple, t, !1);
  }
};
tp = Ma;
np = zn;
var u1 = { usingClientEntryPoint: !1, Events: [To, Zn, cl, Jf, ep, Ma] }, Lr = { findFiberByHostInstance: _n, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, s1 = { bundleType: Lr.bundleType, version: Lr.version, rendererPackageName: Lr.rendererPackageName, rendererConfig: Lr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: qt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ip(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Lr.findFiberByHostInstance || i1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yo.isDisabled && Yo.supportsFiber) try {
    ll = Yo.inject(s1), Dt = Yo;
  } catch {
  }
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u1;
pt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Va(t)) throw Error(A(200));
  return o1(e, t, null, n);
};
pt.createRoot = function(e, t) {
  if (!Va(e)) throw Error(A(299));
  var n = !1, r = "", o = Dh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Fa(e, 1, !1, null, null, n, !1, r, o), e[Qt] = t.current, po(e.nodeType === 8 ? e.parentNode : e), new Ha(t);
};
pt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = ip(t), e = e === null ? null : e.stateNode, e;
};
pt.flushSync = function(e) {
  return zn(e);
};
pt.hydrate = function(e, t, n) {
  if (!xl(t)) throw Error(A(200));
  return wl(null, e, t, !0, n);
};
pt.hydrateRoot = function(e, t, n) {
  if (!Va(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = Dh;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Mh(t, null, e, 1, n ?? null, o, !1, i, l), e[Qt] = t.current, po(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new yl(t);
};
pt.render = function(e, t, n) {
  if (!xl(t)) throw Error(A(200));
  return wl(null, e, t, !1, n);
};
pt.unmountComponentAtNode = function(e) {
  if (!xl(e)) throw Error(A(40));
  return e._reactRootContainer ? (zn(function() {
    wl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Qt] = null;
    });
  }), !0) : !1;
};
pt.unstable_batchedUpdates = Ma;
pt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!xl(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return wl(e, t, n, !1, r);
};
pt.version = "18.3.1-next-f1338f8080-20240426";
function Lh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lh);
    } catch (e) {
      console.error(e);
    }
}
Lh(), Lf.exports = pt;
var zh = Lf.exports, Fh, Ld = zh;
Fh = Ld.createRoot, Ld.hydrateRoot;
var Bh = { exports: {} }, Hh = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo = b;
function a1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var c1 = typeof Object.is == "function" ? Object.is : a1, d1 = jo.useSyncExternalStore, f1 = jo.useRef, p1 = jo.useEffect, h1 = jo.useMemo, v1 = jo.useDebugValue;
Hh.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = f1(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else l = i.current;
  i = h1(function() {
    function s(k) {
      if (!a) {
        if (a = !0, c = k, k = r(k), o !== void 0 && l.hasValue) {
          var y = l.value;
          if (o(y, k)) return f = y;
        }
        return f = k;
      }
      if (y = f, c1(c, k)) return y;
      var $ = r(k);
      return o !== void 0 && o(y, $) ? y : (c = k, f = $);
    }
    var a = !1, c, f, g = n === void 0 ? null : n;
    return [function() {
      return s(t());
    }, g === null ? void 0 : function() {
      return s(g());
    }];
  }, [t, n, r, o]);
  var u = d1(e, i[0], i[1]);
  return p1(function() {
    l.hasValue = !0, l.value = u;
  }, [u]), v1(u), u;
};
Bh.exports = Hh;
var g1 = Bh.exports, st = (
  // prettier-ignore
  // @ts-ignore
  "default" in Ou ? Se : Ou
), zd = Symbol.for("react-redux-context"), Fd = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function m1() {
  if (!st.createContext)
    return {};
  const e = Fd[zd] ?? (Fd[zd] = /* @__PURE__ */ new Map());
  let t = e.get(st.createContext);
  return t || (t = st.createContext(
    null
  ), e.set(st.createContext, t)), t;
}
var Sn = /* @__PURE__ */ m1(), y1 = () => {
  throw new Error("uSES not initialized!");
};
function Ua(e = Sn) {
  return function() {
    return st.useContext(e);
  };
}
var Vh = /* @__PURE__ */ Ua(), Uh = y1, x1 = (e) => {
  Uh = e;
}, w1 = (e, t) => e === t;
function S1(e = Sn) {
  const t = e === Sn ? Vh : Ua(e), n = (r, o = {}) => {
    const { equalityFn: i = w1, devModeChecks: l = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: u,
      subscription: s,
      getServerState: a,
      stabilityCheck: c,
      identityFunctionCheck: f
    } = t();
    st.useRef(!0);
    const g = st.useCallback(
      {
        [r.name](y) {
          return r(y);
        }
      }[r.name],
      [r, c, l.stabilityCheck]
    ), k = Uh(
      s.addNestedSub,
      u.getState,
      a || u.getState,
      g,
      i
    );
    return st.useDebugValue(k), k;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Wa = /* @__PURE__ */ S1();
function k1(e) {
  e();
}
function C1() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      k1(() => {
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
var Bd = {
  notify() {
  },
  get: () => []
};
function E1(e, t) {
  let n, r = Bd, o = 0, i = !1;
  function l($) {
    c();
    const _ = r.subscribe($);
    let h = !1;
    return () => {
      h || (h = !0, _(), f());
    };
  }
  function u() {
    r.notify();
  }
  function s() {
    y.onStateChange && y.onStateChange();
  }
  function a() {
    return i;
  }
  function c() {
    o++, n || (n = e.subscribe(s), r = C1());
  }
  function f() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Bd);
  }
  function g() {
    i || (i = !0, c());
  }
  function k() {
    i && (i = !1, f());
  }
  const y = {
    addNestedSub: l,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: g,
    tryUnsubscribe: k,
    getListeners: () => r
  };
  return y;
}
var $1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", I1 = typeof navigator < "u" && navigator.product === "ReactNative", b1 = $1 || I1 ? st.useLayoutEffect : st.useEffect;
function _1({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const l = st.useMemo(() => {
    const a = E1(e);
    return {
      store: e,
      subscription: a,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), u = st.useMemo(() => e.getState(), [e]);
  b1(() => {
    const { subscription: a } = l;
    return a.onStateChange = a.notifyNestedSubs, a.trySubscribe(), u !== e.getState() && a.notifyNestedSubs(), () => {
      a.tryUnsubscribe(), a.onStateChange = void 0;
    };
  }, [l, u]);
  const s = t || Sn;
  return /* @__PURE__ */ st.createElement(s.Provider, { value: l }, n);
}
var T1 = _1;
function Wh(e = Sn) {
  const t = e === Sn ? Vh : (
    // @ts-ignore
    Ua(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var P1 = /* @__PURE__ */ Wh();
function j1(e = Sn) {
  const t = e === Sn ? P1 : Wh(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var R1 = /* @__PURE__ */ j1();
x1(g1.useSyncExternalStoreWithSelector);
function Me(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var A1 = typeof Symbol == "function" && Symbol.observable || "@@observable", Hd = A1, Eu = () => Math.random().toString(36).substring(7).split("").join("."), O1 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Eu()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Eu()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Eu()}`
}, Bi = O1;
function Ka(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Kh(e, t, n) {
  if (typeof e != "function")
    throw new Error(Me(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Me(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Me(1));
    return n(Kh)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), l = i, u = 0, s = !1;
  function a() {
    l === i && (l = /* @__PURE__ */ new Map(), i.forEach((_, h) => {
      l.set(h, _);
    }));
  }
  function c() {
    if (s)
      throw new Error(Me(3));
    return o;
  }
  function f(_) {
    if (typeof _ != "function")
      throw new Error(Me(4));
    if (s)
      throw new Error(Me(5));
    let h = !0;
    a();
    const d = u++;
    return l.set(d, _), function() {
      if (h) {
        if (s)
          throw new Error(Me(6));
        h = !1, a(), l.delete(d), i = null;
      }
    };
  }
  function g(_) {
    if (!Ka(_))
      throw new Error(Me(7));
    if (typeof _.type > "u")
      throw new Error(Me(8));
    if (typeof _.type != "string")
      throw new Error(Me(17));
    if (s)
      throw new Error(Me(9));
    try {
      s = !0, o = r(o, _);
    } finally {
      s = !1;
    }
    return (i = l).forEach((d) => {
      d();
    }), _;
  }
  function k(_) {
    if (typeof _ != "function")
      throw new Error(Me(10));
    r = _, g({
      type: Bi.REPLACE
    });
  }
  function y() {
    const _ = f;
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
          throw new Error(Me(11));
        function d() {
          const E = h;
          E.next && E.next(c());
        }
        return d(), {
          unsubscribe: _(d)
        };
      },
      [Hd]() {
        return this;
      }
    };
  }
  return g({
    type: Bi.INIT
  }), {
    dispatch: g,
    subscribe: f,
    getState: c,
    replaceReducer: k,
    [Hd]: y
  };
}
function N1(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Bi.INIT
    }) > "u")
      throw new Error(Me(12));
    if (typeof n(void 0, {
      type: Bi.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Me(13));
  });
}
function M1(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const l = t[i];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  const r = Object.keys(n);
  let o;
  try {
    N1(n);
  } catch (i) {
    o = i;
  }
  return function(l = {}, u) {
    if (o)
      throw o;
    let s = !1;
    const a = {};
    for (let c = 0; c < r.length; c++) {
      const f = r[c], g = n[f], k = l[f], y = g(k, u);
      if (typeof y > "u")
        throw u && u.type, new Error(Me(14));
      a[f] = y, s = s || y !== k;
    }
    return s = s || r.length !== Object.keys(l).length, s ? a : l;
  };
}
function Hi(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function D1(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(Me(15));
    };
    const l = {
      getState: o.getState,
      dispatch: (s, ...a) => i(s, ...a)
    }, u = e.map((s) => s(l));
    return i = Hi(...u)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function Gh(e) {
  return Ka(e) && "type" in e && typeof e.type == "string";
}
var Qh = Symbol.for("immer-nothing"), Vd = Symbol.for("immer-draftable"), dt = Symbol.for("immer-state");
function Tt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Sr = Object.getPrototypeOf;
function Fn(e) {
  return !!e && !!e[dt];
}
function Zt(e) {
  var t;
  return e ? Yh(e) || Array.isArray(e) || !!e[Vd] || !!((t = e.constructor) != null && t[Vd]) || kl(e) || Cl(e) : !1;
}
var L1 = Object.prototype.constructor.toString();
function Yh(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Sr(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === L1;
}
function Vi(e, t) {
  Sl(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Sl(e) {
  const t = e[dt];
  return t ? t.type_ : Array.isArray(e) ? 1 : kl(e) ? 2 : Cl(e) ? 3 : 0;
}
function bs(e, t) {
  return Sl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Xh(e, t, n) {
  const r = Sl(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function z1(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function kl(e) {
  return e instanceof Map;
}
function Cl(e) {
  return e instanceof Set;
}
function bn(e) {
  return e.copy_ || e.base_;
}
function _s(e, t) {
  if (kl(e))
    return new Map(e);
  if (Cl(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Yh(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[dt];
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
    return Object.create(Sr(e), r);
  } else {
    const r = Sr(e);
    if (r !== null && n)
      return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function Ga(e, t = !1) {
  return El(e) || Fn(e) || !Zt(e) || (Sl(e) > 1 && (e.set = e.add = e.clear = e.delete = F1), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Ga(r, !0))), e;
}
function F1() {
  Tt(2);
}
function El(e) {
  return Object.isFrozen(e);
}
var B1 = {};
function Bn(e) {
  const t = B1[e];
  return t || Tt(0, e), t;
}
var ko;
function Zh() {
  return ko;
}
function H1(e, t) {
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
function Ud(e, t) {
  t && (Bn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ts(e) {
  Ps(e), e.drafts_.forEach(V1), e.drafts_ = null;
}
function Ps(e) {
  e === ko && (ko = e.parent_);
}
function Wd(e) {
  return ko = H1(ko, e);
}
function V1(e) {
  const t = e[dt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Kd(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[dt].modified_ && (Ts(t), Tt(4)), Zt(e) && (e = Ui(t, e), t.parent_ || Wi(t, e)), t.patches_ && Bn("Patches").generateReplacementPatches_(
    n[dt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Ui(t, n, []), Ts(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Qh ? e : void 0;
}
function Ui(e, t, n) {
  if (El(t))
    return t;
  const r = t[dt];
  if (!r)
    return Vi(
      t,
      (o, i) => Gd(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Wi(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, l = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), l = !0), Vi(
      i,
      (u, s) => Gd(e, r, o, u, s, n, l)
    ), Wi(e, o, !1), n && e.patches_ && Bn("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Gd(e, t, n, r, o, i, l) {
  if (Fn(o)) {
    const u = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !bs(t.assigned_, r) ? i.concat(r) : void 0, s = Ui(e, o, u);
    if (Xh(n, r, s), Fn(s))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else l && n.add(o);
  if (Zt(o) && !El(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Ui(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Wi(e, o);
  }
}
function Wi(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ga(t, n);
}
function U1(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Zh(),
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
  let o = r, i = Qa;
  n && (o = [r], i = Co);
  const { revoke: l, proxy: u } = Proxy.revocable(o, i);
  return r.draft_ = u, r.revoke_ = l, u;
}
var Qa = {
  get(e, t) {
    if (t === dt)
      return e;
    const n = bn(e);
    if (!bs(n, t))
      return W1(e, n, t);
    const r = n[t];
    return e.finalized_ || !Zt(r) ? r : r === $u(e.base_, t) ? (Iu(e), e.copy_[t] = Rs(r, e)) : r;
  },
  has(e, t) {
    return t in bn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(bn(e));
  },
  set(e, t, n) {
    const r = qh(bn(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = $u(bn(e), t), i = o == null ? void 0 : o[dt];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (z1(n, o) && (n !== void 0 || bs(e.base_, t)))
        return !0;
      Iu(e), js(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return $u(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Iu(e), js(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = bn(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    Tt(11);
  },
  getPrototypeOf(e) {
    return Sr(e.base_);
  },
  setPrototypeOf() {
    Tt(12);
  }
}, Co = {};
Vi(Qa, (e, t) => {
  Co[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Co.deleteProperty = function(e, t) {
  return Co.set.call(this, e, t, void 0);
};
Co.set = function(e, t, n) {
  return Qa.set.call(this, e[0], t, n, e[0]);
};
function $u(e, t) {
  const n = e[dt];
  return (n ? bn(n) : e)[t];
}
function W1(e, t, n) {
  var o;
  const r = qh(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function qh(e, t) {
  if (!(t in e))
    return;
  let n = Sr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = Sr(n);
  }
}
function js(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && js(e.parent_));
}
function Iu(e) {
  e.copy_ || (e.copy_ = _s(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var K1 = class {
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
      typeof n != "function" && Tt(6), r !== void 0 && typeof r != "function" && Tt(7);
      let o;
      if (Zt(t)) {
        const i = Wd(this), l = Rs(t, void 0);
        let u = !0;
        try {
          o = n(l), u = !1;
        } finally {
          u ? Ts(i) : Ps(i);
        }
        return Ud(i, r), Kd(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Qh && (o = void 0), this.autoFreeze_ && Ga(o, !0), r) {
          const i = [], l = [];
          Bn("Patches").generateReplacementPatches_(t, o, i, l), r(i, l);
        }
        return o;
      } else
        Tt(1, t);
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
    Zt(e) || Tt(8), Fn(e) && (e = G1(e));
    const t = Wd(this), n = Rs(e, void 0);
    return n[dt].isManual_ = !0, Ps(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[dt];
    (!n || !n.isManual_) && Tt(9);
    const { scope_: r } = n;
    return Ud(r, t), Kd(void 0, r);
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
    const r = Bn("Patches").applyPatches_;
    return Fn(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function Rs(e, t) {
  const n = kl(e) ? Bn("MapSet").proxyMap_(e, t) : Cl(e) ? Bn("MapSet").proxySet_(e, t) : U1(e, t);
  return (t ? t.scope_ : Zh()).drafts_.push(n), n;
}
function G1(e) {
  return Fn(e) || Tt(10, e), Jh(e);
}
function Jh(e) {
  if (!Zt(e) || El(e))
    return e;
  const t = e[dt];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = _s(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = _s(e, !0);
  return Vi(n, (r, o) => {
    Xh(n, r, Jh(o));
  }), t && (t.finalized_ = !1), n;
}
var ft = new K1(), ev = ft.produce;
ft.produceWithPatches.bind(
  ft
);
ft.setAutoFreeze.bind(ft);
ft.setUseStrictShallowCopy.bind(ft);
ft.applyPatches.bind(ft);
ft.createDraft.bind(ft);
ft.finishDraft.bind(ft);
function Q1(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Y1(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function X1(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Qd = (e) => Array.isArray(e) ? e : [e];
function Z1(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return X1(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function q1(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var J1 = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, ey = typeof WeakRef < "u" ? WeakRef : J1, ty = 0, Yd = 1;
function Xo() {
  return {
    s: ty,
    v: void 0,
    o: null,
    p: null
  };
}
function tv(e, t = {}) {
  let n = Xo();
  const { resultEqualityCheck: r } = t;
  let o, i = 0;
  function l() {
    var f;
    let u = n;
    const { length: s } = arguments;
    for (let g = 0, k = s; g < k; g++) {
      const y = arguments[g];
      if (typeof y == "function" || typeof y == "object" && y !== null) {
        let $ = u.o;
        $ === null && (u.o = $ = /* @__PURE__ */ new WeakMap());
        const _ = $.get(y);
        _ === void 0 ? (u = Xo(), $.set(y, u)) : u = _;
      } else {
        let $ = u.p;
        $ === null && (u.p = $ = /* @__PURE__ */ new Map());
        const _ = $.get(y);
        _ === void 0 ? (u = Xo(), $.set(y, u)) : u = _;
      }
    }
    const a = u;
    let c;
    if (u.s === Yd)
      c = u.v;
    else if (c = e.apply(null, arguments), i++, r) {
      const g = ((f = o == null ? void 0 : o.deref) == null ? void 0 : f.call(o)) ?? o;
      g != null && r(g, c) && (c = g, i !== 0 && i--), o = typeof c == "object" && c !== null || typeof c == "function" ? new ey(c) : c;
    }
    return a.s = Yd, a.v = c, c;
  }
  return l.clearCache = () => {
    n = Xo(), l.resetResultsCount();
  }, l.resultsCount = () => i, l.resetResultsCount = () => {
    i = 0;
  }, l;
}
function ny(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, l = 0, u, s = {}, a = o.pop();
    typeof a == "object" && (s = a, a = o.pop()), Q1(
      a,
      `createSelector expects an output function after the inputs, but received: [${typeof a}]`
    );
    const c = {
      ...n,
      ...s
    }, {
      memoize: f,
      memoizeOptions: g = [],
      argsMemoize: k = tv,
      argsMemoizeOptions: y = [],
      devModeChecks: $ = {}
    } = c, _ = Qd(g), h = Qd(y), d = Z1(o), v = f(function() {
      return i++, a.apply(
        null,
        arguments
      );
    }, ..._), E = k(function() {
      l++;
      const j = q1(
        d,
        arguments
      );
      return u = v.apply(null, j), u;
    }, ...h);
    return Object.assign(E, {
      resultFunc: a,
      memoizedResultFunc: v,
      dependencies: d,
      dependencyRecomputations: () => l,
      resetDependencyRecomputations: () => {
        l = 0;
      },
      lastResult: () => u,
      recomputations: () => i,
      resetRecomputations: () => {
        i = 0;
      },
      memoize: f,
      argsMemoize: k
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var ry = /* @__PURE__ */ ny(tv), oy = Object.assign(
  (e, t = ry) => {
    Y1(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), r = n.map(
      (i) => e[i]
    );
    return t(
      r,
      (...i) => i.reduce((l, u, s) => (l[n[s]] = u, l), {})
    );
  },
  { withTypes: () => oy }
);
function nv(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var iy = nv(), ly = nv, uy = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Hi : Hi.apply(null, arguments);
}, sy = (e) => e && typeof e.match == "function";
function kr(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(Ye(0));
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => Gh(r) && r.type === e, n;
}
function Xd(e, t) {
  for (const n of e)
    if (t(n))
      return n;
}
var rv = class Wr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Wr.prototype);
  }
  static get [Symbol.species]() {
    return Wr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Wr(...t[0].concat(this)) : new Wr(...t.concat(this));
  }
};
function Zd(e) {
  return Zt(e) ? ev(e, () => {
  }) : e;
}
function qd(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(Ye(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function ay(e) {
  return typeof e == "boolean";
}
var cy = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let l = new rv();
  return n && (ay(n) ? l.push(iy) : l.push(ly(n.extraArgument))), l;
}, dy = "RTK_autoBatch", ov = (e) => (t) => {
  setTimeout(t, e);
}, fy = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : ov(10), py = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, l = !1;
  const u = /* @__PURE__ */ new Set(), s = e.type === "tick" ? queueMicrotask : e.type === "raf" ? fy : e.type === "callback" ? e.queueNotification : ov(e.timeout), a = () => {
    l = !1, i && (i = !1, u.forEach((c) => c()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(c) {
      const f = () => o && c(), g = r.subscribe(f);
      return u.add(c), () => {
        g(), u.delete(c);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(c) {
      var f;
      try {
        return o = !((f = c == null ? void 0 : c.meta) != null && f[dy]), i = !o, i && (l || (l = !0, s(a))), r.dispatch(c);
      } finally {
        o = !0;
      }
    }
  });
}, hy = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new rv(e);
  return r && o.push(py(typeof r == "object" ? r : void 0)), o;
};
function vy(e) {
  const t = cy(), {
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
    u = M1(n);
  else
    throw new Error(Ye(1));
  let s;
  typeof r == "function" ? s = r(t) : s = t();
  let a = Hi;
  o && (a = uy({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof o == "object" && o
  }));
  const c = D1(...s), f = hy(c);
  let g = typeof l == "function" ? l(f) : f();
  const k = a(...g);
  return Kh(u, i, k);
}
function iv(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, l) {
      const u = typeof i == "string" ? i : i.type;
      if (!u)
        throw new Error(Ye(28));
      if (u in t)
        throw new Error(Ye(29));
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
function gy(e) {
  return typeof e == "function";
}
function my(e, t) {
  let [n, r, o] = iv(t), i;
  if (gy(e))
    i = () => Zd(e());
  else {
    const u = Zd(e);
    i = () => u;
  }
  function l(u = i(), s) {
    let a = [n[s.type], ...r.filter(({
      matcher: c
    }) => c(s)).map(({
      reducer: c
    }) => c)];
    return a.filter((c) => !!c).length === 0 && (a = [o]), a.reduce((c, f) => {
      if (f)
        if (Fn(c)) {
          const k = f(c, s);
          return k === void 0 ? c : k;
        } else {
          if (Zt(c))
            return ev(c, (g) => f(g, s));
          {
            const g = f(c, s);
            if (g === void 0) {
              if (c === null)
                return c;
              throw new Error(Ye(9));
            }
            return g;
          }
        }
      return c;
    }, u);
  }
  return l.getInitialState = i, l;
}
var yy = (e, t) => sy(e) ? e.match(t) : e(t);
function xy(...e) {
  return (t) => e.some((n) => yy(n, t));
}
var wy = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Sy = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += wy[Math.random() * 64 | 0];
  return t;
}, ky = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Cy(e, t) {
  return `${e}/${t}`;
}
function Ey({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[ky];
  return function(o) {
    const {
      name: i,
      reducerPath: l = i
    } = o;
    if (!i)
      throw new Error(Ye(11));
    typeof process < "u";
    const u = (typeof o.reducers == "function" ? o.reducers(Iy()) : o.reducers) || {}, s = Object.keys(u), a = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, c = {
      addCase(v, E) {
        const T = typeof v == "string" ? v : v.type;
        if (!T)
          throw new Error(Ye(12));
        if (T in a.sliceCaseReducersByType)
          throw new Error(Ye(13));
        return a.sliceCaseReducersByType[T] = E, c;
      },
      addMatcher(v, E) {
        return a.sliceMatchers.push({
          matcher: v,
          reducer: E
        }), c;
      },
      exposeAction(v, E) {
        return a.actionCreators[v] = E, c;
      },
      exposeCaseReducer(v, E) {
        return a.sliceCaseReducersByName[v] = E, c;
      }
    };
    s.forEach((v) => {
      const E = u[v], T = {
        reducerName: v,
        type: Cy(i, v),
        createNotation: typeof o.reducers == "function"
      };
      _y(E) ? Py(T, E, c, t) : by(T, E, c);
    });
    function f() {
      const [v = {}, E = [], T = void 0] = typeof o.extraReducers == "function" ? iv(o.extraReducers) : [o.extraReducers], j = {
        ...v,
        ...a.sliceCaseReducersByType
      };
      return my(o.initialState, (M) => {
        for (let R in j)
          M.addCase(R, j[R]);
        for (let R of a.sliceMatchers)
          M.addMatcher(R.matcher, R.reducer);
        for (let R of E)
          M.addMatcher(R.matcher, R.reducer);
        T && M.addDefaultCase(T);
      });
    }
    const g = (v) => v, k = /* @__PURE__ */ new Map();
    let y;
    function $(v, E) {
      return y || (y = f()), y(v, E);
    }
    function _() {
      return y || (y = f()), y.getInitialState();
    }
    function h(v, E = !1) {
      function T(M) {
        let R = M[v];
        return typeof R > "u" && E && (R = _()), R;
      }
      function j(M = g) {
        const R = qd(k, E, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return qd(R, M, {
          insert: () => {
            const X = {};
            for (const [B, se] of Object.entries(o.selectors ?? {}))
              X[B] = $y(se, M, _, E);
            return X;
          }
        });
      }
      return {
        reducerPath: v,
        getSelectors: j,
        get selectors() {
          return j(T);
        },
        selectSlice: T
      };
    }
    const d = {
      name: i,
      reducer: $,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: _,
      ...h(l),
      injectInto(v, {
        reducerPath: E,
        ...T
      } = {}) {
        const j = E ?? l;
        return v.inject({
          reducerPath: j,
          reducer: $
        }, T), {
          ...d,
          ...h(j, !0)
        };
      }
    };
    return d;
  };
}
function $y(e, t, n, r) {
  function o(i, ...l) {
    let u = t(i);
    return typeof u > "u" && r && (u = n()), e(u, ...l);
  }
  return o.unwrapped = e, o;
}
var Ya = /* @__PURE__ */ Ey();
function Iy() {
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
function by({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, l;
  if ("reducer" in r) {
    if (n && !Ty(r))
      throw new Error(Ye(17));
    i = r.reducer, l = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, l ? kr(e, l) : kr(e));
}
function _y(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Ty(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Py({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(Ye(18));
  const {
    payloadCreator: i,
    fulfilled: l,
    pending: u,
    rejected: s,
    settled: a,
    options: c
  } = n, f = o(e, i, c);
  r.exposeAction(t, f), l && r.addCase(f.fulfilled, l), u && r.addCase(f.pending, u), s && r.addCase(f.rejected, s), a && r.addMatcher(f.settled, a), r.exposeCaseReducer(t, {
    fulfilled: l || Zo,
    pending: u || Zo,
    rejected: s || Zo,
    settled: a || Zo
  });
}
function Zo() {
}
var jy = "task", lv = "listener", uv = "completed", Xa = "cancelled", Ry = `task-${Xa}`, Ay = `task-${uv}`, As = `${lv}-${Xa}`, Oy = `${lv}-${uv}`, $l = class {
  constructor(e) {
    Zl(this, "name", "TaskAbortError");
    Zl(this, "message");
    this.code = e, this.message = `${jy} ${Xa} (reason: ${e})`;
  }
}, Za = (e, t) => {
  if (typeof e != "function")
    throw new Error(Ye(32));
}, Ki = () => {
}, sv = (e, t = Ki) => (e.catch(t), e), av = (e, t) => (e.addEventListener("abort", t, {
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
    throw new $l(t);
  }
};
function cv(e, t) {
  let n = Ki;
  return new Promise((r, o) => {
    const i = () => o(new $l(e.reason));
    if (e.aborted) {
      i();
      return;
    }
    n = av(e, i), t.finally(() => n()).then(r, o);
  }).finally(() => {
    n = Ki;
  });
}
var Ny = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (n) {
    return {
      status: n instanceof $l ? "cancelled" : "rejected",
      error: n
    };
  } finally {
    t == null || t();
  }
}, Gi = (e) => (t) => sv(cv(e, t).then((n) => (On(e), n))), dv = (e) => {
  const t = Gi(e);
  return (n) => t(new Promise((r) => setTimeout(r, n)));
}, {
  assign: pr
} = Object, Jd = {}, Il = "listenerMiddleware", My = (e, t) => {
  const n = (r) => av(e, () => An(r, e.reason));
  return (r, o) => {
    Za(r);
    const i = new AbortController();
    n(i);
    const l = Ny(async () => {
      On(e), On(i.signal);
      const u = await r({
        pause: Gi(i.signal),
        delay: dv(i.signal),
        signal: i.signal
      });
      return On(i.signal), u;
    }, () => An(i, Ay));
    return o != null && o.autoJoin && t.push(l.catch(Ki)), {
      result: Gi(e)(l),
      cancel() {
        An(i, Ry);
      }
    };
  };
}, Dy = (e, t) => {
  const n = async (r, o) => {
    On(t);
    let i = () => {
    };
    const u = [new Promise((s, a) => {
      let c = e({
        predicate: r,
        effect: (f, g) => {
          g.unsubscribe(), s([f, g.getState(), g.getOriginalState()]);
        }
      });
      i = () => {
        c(), a();
      };
    })];
    o != null && u.push(new Promise((s) => setTimeout(s, o, null)));
    try {
      const s = await cv(t, Promise.race(u));
      return On(t), s;
    } finally {
      i();
    }
  };
  return (r, o) => sv(n(r, o));
}, fv = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = kr(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o) throw new Error(Ye(21));
  return Za(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, pv = /* @__PURE__ */ pr((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = fv(e);
  return {
    id: Sy(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Ye(22));
    }
  };
}, {
  withTypes: () => pv
}), Os = (e) => {
  e.pending.forEach((t) => {
    An(t, As);
  });
}, Ly = (e) => () => {
  e.forEach(Os), e.clear();
}, ef = (e, t, n) => {
  try {
    e(t, n);
  } catch (r) {
    setTimeout(() => {
      throw r;
    }, 0);
  }
}, hv = /* @__PURE__ */ pr(/* @__PURE__ */ kr(`${Il}/add`), {
  withTypes: () => hv
}), zy = /* @__PURE__ */ kr(`${Il}/removeAll`), vv = /* @__PURE__ */ pr(/* @__PURE__ */ kr(`${Il}/remove`), {
  withTypes: () => vv
}), Fy = (...e) => {
  console.error(`${Il}/error`, ...e);
}, By = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), {
    extra: n,
    onError: r = Fy
  } = e;
  Za(r);
  const o = (c) => (c.unsubscribe = () => t.delete(c.id), t.set(c.id, c), (f) => {
    c.unsubscribe(), f != null && f.cancelActive && Os(c);
  }), i = (c) => {
    let f = Xd(Array.from(t.values()), (g) => g.effect === c.effect);
    return f || (f = pv(c)), o(f);
  };
  pr(i, {
    withTypes: () => i
  });
  const l = (c) => {
    const {
      type: f,
      effect: g,
      predicate: k
    } = fv(c), y = Xd(Array.from(t.values()), ($) => (typeof f == "string" ? $.type === f : $.predicate === k) && $.effect === g);
    return y && (y.unsubscribe(), c.cancelActive && Os(y)), !!y;
  };
  pr(l, {
    withTypes: () => l
  });
  const u = async (c, f, g, k) => {
    const y = new AbortController(), $ = Dy(i, y.signal), _ = [];
    try {
      c.pending.add(y), await Promise.resolve(c.effect(
        f,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        pr({}, g, {
          getOriginalState: k,
          condition: (h, d) => $(h, d).then(Boolean),
          take: $,
          delay: dv(y.signal),
          pause: Gi(y.signal),
          extra: n,
          signal: y.signal,
          fork: My(y.signal, _),
          unsubscribe: c.unsubscribe,
          subscribe: () => {
            t.set(c.id, c);
          },
          cancelActiveListeners: () => {
            c.pending.forEach((h, d, v) => {
              h !== y && (An(h, As), v.delete(h));
            });
          },
          cancel: () => {
            An(y, As), c.pending.delete(y);
          },
          throwIfCancelled: () => {
            On(y.signal);
          }
        })
      ));
    } catch (h) {
      h instanceof $l || ef(r, h, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(_), An(y, Oy), c.pending.delete(y);
    }
  }, s = Ly(t);
  return {
    middleware: (c) => (f) => (g) => {
      if (!Gh(g))
        return f(g);
      if (hv.match(g))
        return i(g.payload);
      if (zy.match(g)) {
        s();
        return;
      }
      if (vv.match(g))
        return l(g.payload);
      let k = c.getState();
      const y = () => {
        if (k === Jd)
          throw new Error(Ye(23));
        return k;
      };
      let $;
      try {
        if ($ = f(g), t.size > 0) {
          const _ = c.getState(), h = Array.from(t.values());
          for (const d of h) {
            let v = !1;
            try {
              v = d.predicate(g, _, k);
            } catch (E) {
              v = !1, ef(r, E, {
                raisedBy: "predicate"
              });
            }
            v && u(d, g, c, y);
          }
        }
      } finally {
        k = Jd;
      }
      return $;
    },
    startListening: i,
    stopListening: l,
    clearListeners: s
  };
};
function Ye(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ns = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(t);
  })(Pr, function(n) {
    function r(S, w) {
      S.super_ = w, S.prototype = Object.create(w.prototype, { constructor: { value: S, enumerable: !1, writable: !0, configurable: !0 } });
    }
    function o(S, w) {
      Object.defineProperty(this, "kind", { value: S, enumerable: !0 }), w && w.length && Object.defineProperty(this, "path", { value: w, enumerable: !0 });
    }
    function i(S, w, m) {
      i.super_.call(this, "E", S), Object.defineProperty(this, "lhs", { value: w, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: m, enumerable: !0 });
    }
    function l(S, w) {
      l.super_.call(this, "N", S), Object.defineProperty(this, "rhs", { value: w, enumerable: !0 });
    }
    function u(S, w) {
      u.super_.call(this, "D", S), Object.defineProperty(this, "lhs", { value: w, enumerable: !0 });
    }
    function s(S, w, m) {
      s.super_.call(this, "A", S), Object.defineProperty(this, "index", { value: w, enumerable: !0 }), Object.defineProperty(this, "item", { value: m, enumerable: !0 });
    }
    function a(S, w, m) {
      var C = S.slice(w + 1 || S.length);
      return S.length = w < 0 ? S.length + w : w, S.push.apply(S, C), S;
    }
    function c(S) {
      var w = typeof S > "u" ? "undefined" : ce(S);
      return w !== "object" ? w : S === Math ? "math" : S === null ? "null" : Array.isArray(S) ? "array" : Object.prototype.toString.call(S) === "[object Date]" ? "date" : typeof S.toString == "function" && /^\/.*\//.test(S.toString()) ? "regexp" : "object";
    }
    function f(S, w, m, C, I, x, D) {
      I = I || [], D = D || [];
      var P = I.slice(0);
      if (typeof x < "u") {
        if (C) {
          if (typeof C == "function" && C(P, x)) return;
          if ((typeof C > "u" ? "undefined" : ce(C)) === "object") {
            if (C.prefilter && C.prefilter(P, x)) return;
            if (C.normalize) {
              var Q = C.normalize(P, x, S, w);
              Q && (S = Q[0], w = Q[1]);
            }
          }
        }
        P.push(x);
      }
      c(S) === "regexp" && c(w) === "regexp" && (S = S.toString(), w = w.toString());
      var H = typeof S > "u" ? "undefined" : ce(S), U = typeof w > "u" ? "undefined" : ce(w), z = H !== "undefined" || D && D[D.length - 1].lhs && D[D.length - 1].lhs.hasOwnProperty(x), ee = U !== "undefined" || D && D[D.length - 1].rhs && D[D.length - 1].rhs.hasOwnProperty(x);
      if (!z && ee) m(new l(P, w));
      else if (!ee && z) m(new u(P, S));
      else if (c(S) !== c(w)) m(new i(P, S, w));
      else if (c(S) === "date" && S - w !== 0) m(new i(P, S, w));
      else if (H === "object" && S !== null && w !== null) if (D.filter(function(W) {
        return W.lhs === S;
      }).length) S !== w && m(new i(P, S, w));
      else {
        if (D.push({ lhs: S, rhs: w }), Array.isArray(S)) {
          var Y;
          for (S.length, Y = 0; Y < S.length; Y++) Y >= w.length ? m(new s(P, Y, new u(void 0, S[Y]))) : f(S[Y], w[Y], m, C, P, Y, D);
          for (; Y < w.length; ) m(new s(P, Y, new l(void 0, w[Y++])));
        } else {
          var Z = Object.keys(S), oe = Object.keys(w);
          Z.forEach(function(W, de) {
            var je = oe.indexOf(W);
            je >= 0 ? (f(S[W], w[W], m, C, P, W, D), oe = a(oe, je)) : f(S[W], void 0, m, C, P, W, D);
          }), oe.forEach(function(W) {
            f(void 0, w[W], m, C, P, W, D);
          });
        }
        D.length = D.length - 1;
      }
      else S !== w && (H === "number" && isNaN(S) && isNaN(w) || m(new i(P, S, w)));
    }
    function g(S, w, m, C) {
      return C = C || [], f(S, w, function(I) {
        I && C.push(I);
      }, m), C.length ? C : void 0;
    }
    function k(S, w, m) {
      if (m.path && m.path.length) {
        var C, I = S[w], x = m.path.length - 1;
        for (C = 0; C < x; C++) I = I[m.path[C]];
        switch (m.kind) {
          case "A":
            k(I[m.path[C]], m.index, m.item);
            break;
          case "D":
            delete I[m.path[C]];
            break;
          case "E":
          case "N":
            I[m.path[C]] = m.rhs;
        }
      } else switch (m.kind) {
        case "A":
          k(S[w], m.index, m.item);
          break;
        case "D":
          S = a(S, w);
          break;
        case "E":
        case "N":
          S[w] = m.rhs;
      }
      return S;
    }
    function y(S, w, m) {
      if (S && w && m && m.kind) {
        for (var C = S, I = -1, x = m.path ? m.path.length - 1 : 0; ++I < x; ) typeof C[m.path[I]] > "u" && (C[m.path[I]] = typeof m.path[I] == "number" ? [] : {}), C = C[m.path[I]];
        switch (m.kind) {
          case "A":
            k(m.path ? C[m.path[I]] : C, m.index, m.item);
            break;
          case "D":
            delete C[m.path[I]];
            break;
          case "E":
          case "N":
            C[m.path[I]] = m.rhs;
        }
      }
    }
    function $(S, w, m) {
      if (m.path && m.path.length) {
        var C, I = S[w], x = m.path.length - 1;
        for (C = 0; C < x; C++) I = I[m.path[C]];
        switch (m.kind) {
          case "A":
            $(I[m.path[C]], m.index, m.item);
            break;
          case "D":
            I[m.path[C]] = m.lhs;
            break;
          case "E":
            I[m.path[C]] = m.lhs;
            break;
          case "N":
            delete I[m.path[C]];
        }
      } else switch (m.kind) {
        case "A":
          $(S[w], m.index, m.item);
          break;
        case "D":
          S[w] = m.lhs;
          break;
        case "E":
          S[w] = m.lhs;
          break;
        case "N":
          S = a(S, w);
      }
      return S;
    }
    function _(S, w, m) {
      if (S && w && m && m.kind) {
        var C, I, x = S;
        for (I = m.path.length - 1, C = 0; C < I; C++) typeof x[m.path[C]] > "u" && (x[m.path[C]] = {}), x = x[m.path[C]];
        switch (m.kind) {
          case "A":
            $(x[m.path[C]], m.index, m.item);
            break;
          case "D":
            x[m.path[C]] = m.lhs;
            break;
          case "E":
            x[m.path[C]] = m.lhs;
            break;
          case "N":
            delete x[m.path[C]];
        }
      }
    }
    function h(S, w, m) {
      if (S && w) {
        var C = function(I) {
          m && !m(S, w, I) || y(S, w, I);
        };
        f(S, w, C);
      }
    }
    function d(S) {
      return "color: " + N[S].color + "; font-weight: bold";
    }
    function v(S) {
      var w = S.kind, m = S.path, C = S.lhs, I = S.rhs, x = S.index, D = S.item;
      switch (w) {
        case "E":
          return [m.join("."), C, "→", I];
        case "N":
          return [m.join("."), I];
        case "D":
          return [m.join(".")];
        case "A":
          return [m.join(".") + "[" + x + "]", D];
        default:
          return [];
      }
    }
    function E(S, w, m, C) {
      var I = g(S, w);
      try {
        C ? m.groupCollapsed("diff") : m.group("diff");
      } catch {
        m.log("diff");
      }
      I ? I.forEach(function(x) {
        var D = x.kind, P = v(x);
        m.log.apply(m, ["%c " + N[D].text, d(D)].concat($e(P)));
      }) : m.log("—— no diff ——");
      try {
        m.groupEnd();
      } catch {
        m.log("—— diff end —— ");
      }
    }
    function T(S, w, m, C) {
      switch (typeof S > "u" ? "undefined" : ce(S)) {
        case "object":
          return typeof S[C] == "function" ? S[C].apply(S, $e(m)) : S[C];
        case "function":
          return S(w);
        default:
          return S;
      }
    }
    function j(S) {
      var w = S.timestamp, m = S.duration;
      return function(C, I, x) {
        var D = ["action"];
        return D.push("%c" + String(C.type)), w && D.push("%c@ " + I), m && D.push("%c(in " + x.toFixed(2) + " ms)"), D.join(" ");
      };
    }
    function M(S, w) {
      var m = w.logger, C = w.actionTransformer, I = w.titleFormatter, x = I === void 0 ? j(w) : I, D = w.collapsed, P = w.colors, Q = w.level, H = w.diff, U = typeof w.titleFormatter > "u";
      S.forEach(function(z, ee) {
        var Y = z.started, Z = z.startedTime, oe = z.action, W = z.prevState, de = z.error, je = z.took, ie = z.nextState, Re = S[ee + 1];
        Re && (ie = Re.prevState, je = Re.started - Y);
        var ve = C(oe), Be = typeof D == "function" ? D(function() {
          return ie;
        }, oe, z) : D, q = te(Z), me = P.title ? "color: " + P.title(ve) + ";" : "", qe = ["color: gray; font-weight: lighter;"];
        qe.push(me), w.timestamp && qe.push("color: gray; font-weight: lighter;"), w.duration && qe.push("color: gray; font-weight: lighter;");
        var Ke = x(ve, q, je);
        try {
          Be ? P.title && U ? m.groupCollapsed.apply(m, ["%c " + Ke].concat(qe)) : m.groupCollapsed(Ke) : P.title && U ? m.group.apply(m, ["%c " + Ke].concat(qe)) : m.group(Ke);
        } catch {
          m.log(Ke);
        }
        var Je = T(Q, ve, [W], "prevState"), Ql = T(Q, ve, [ve], "action"), Yl = T(Q, ve, [de, W], "error"), Xl = T(Q, ve, [ie], "nextState");
        if (Je) if (P.prevState) {
          var Pg = "color: " + P.prevState(W) + "; font-weight: bold";
          m[Je]("%c prev state", Pg, W);
        } else m[Je]("prev state", W);
        if (Ql) if (P.action) {
          var jg = "color: " + P.action(ve) + "; font-weight: bold";
          m[Ql]("%c action    ", jg, ve);
        } else m[Ql]("action    ", ve);
        if (de && Yl) if (P.error) {
          var Rg = "color: " + P.error(de, W) + "; font-weight: bold;";
          m[Yl]("%c error     ", Rg, de);
        } else m[Yl]("error     ", de);
        if (Xl) if (P.nextState) {
          var Ag = "color: " + P.nextState(ie) + "; font-weight: bold";
          m[Xl]("%c next state", Ag, ie);
        } else m[Xl]("next state", ie);
        H && E(W, ie, m, Be);
        try {
          m.groupEnd();
        } catch {
          m.log("—— log end ——");
        }
      });
    }
    function R() {
      var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, w = Object.assign({}, V, S), m = w.logger, C = w.stateTransformer, I = w.errorTransformer, x = w.predicate, D = w.logErrors, P = w.diffPredicate;
      if (typeof m > "u") return function() {
        return function(H) {
          return function(U) {
            return H(U);
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
        return function(H) {
          return function(U) {
            return H(U);
          };
        };
      };
      var Q = [];
      return function(H) {
        var U = H.getState;
        return function(z) {
          return function(ee) {
            if (typeof x == "function" && !x(U, ee)) return z(ee);
            var Y = {};
            Q.push(Y), Y.started = ae.now(), Y.startedTime = /* @__PURE__ */ new Date(), Y.prevState = C(U()), Y.action = ee;
            var Z = void 0;
            if (D) try {
              Z = z(ee);
            } catch (W) {
              Y.error = I(W);
            }
            else Z = z(ee);
            Y.took = ae.now() - Y.started, Y.nextState = C(U());
            var oe = w.diff && typeof P == "function" ? P(U, ee) : w.diff;
            if (M(Q, Object.assign({}, w, { diff: oe })), Q.length = 0, Y.error) throw Y.error;
            return Z;
          };
        };
      };
    }
    var X, B, se = function(S, w) {
      return new Array(w + 1).join(S);
    }, ue = function(S, w) {
      return se("0", w - S.toString().length) + S;
    }, te = function(S) {
      return ue(S.getHours(), 2) + ":" + ue(S.getMinutes(), 2) + ":" + ue(S.getSeconds(), 2) + "." + ue(S.getMilliseconds(), 3);
    }, ae = typeof performance < "u" && performance !== null && typeof performance.now == "function" ? performance : Date, ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
      return typeof S;
    } : function(S) {
      return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
    }, $e = function(S) {
      if (Array.isArray(S)) {
        for (var w = 0, m = Array(S.length); w < S.length; w++) m[w] = S[w];
        return m;
      }
      return Array.from(S);
    }, J = [];
    X = (typeof Pr > "u" ? "undefined" : ce(Pr)) === "object" && Pr ? Pr : typeof window < "u" ? window : {}, B = X.DeepDiff, B && J.push(function() {
      typeof B < "u" && X.DeepDiff === g && (X.DeepDiff = B, B = void 0);
    }), r(i, o), r(l, o), r(u, o), r(s, o), Object.defineProperties(g, { diff: { value: g, enumerable: !0 }, observableDiff: { value: f, enumerable: !0 }, applyDiff: { value: h, enumerable: !0 }, applyChange: { value: y, enumerable: !0 }, revertChange: { value: _, enumerable: !0 }, isConflict: { value: function() {
      return typeof B < "u";
    }, enumerable: !0 }, noConflict: { value: function() {
      return J && (J.forEach(function(S) {
        S();
      }), J = null), g;
    }, enumerable: !0 } });
    var N = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } }, V = { level: "log", logger: console, logErrors: !0, collapsed: void 0, predicate: void 0, duration: !1, timestamp: !0, stateTransformer: function(S) {
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
    } }, diff: !1, diffPredicate: void 0, transformer: void 0 }, K = function() {
      var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, w = S.dispatch, m = S.getState;
      return typeof w == "function" || typeof m == "function" ? R()({ dispatch: w, getState: m }) : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
    };
    n.defaults = V, n.createLogger = R, n.logger = K, n.default = K, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(Ns, Ns.exports);
var Hy = Ns.exports;
const Vy = /* @__PURE__ */ ol(Hy), Uy = {
  theme: void 0,
  kind: void 0
}, gv = Ya({
  name: "theme",
  initialState: Uy,
  reducers: {
    changeTheme: (e, t) => {
      e.kind = t.payload.kind, e.theme = { ...e.theme, ...t.payload.theme ?? {} }, e.kind === "light" ? (e.theme.computedOne = "rgba(0, 0, 0, 0.05)", e.theme.computedTwo = "rgba(0, 0, 0, 0.1)") : e.kind === "dark" ? (e.theme.computedOne = "rgba(255, 255, 255, 0.05)", e.theme.computedTwo = "rgba(255, 255, 255, 0.1)") : (e.theme.computedOne = "transparent", e.theme.computedTwo = "transparent");
    }
  }
}), Wy = Wa, { changeTheme: Ky } = gv.actions, Gy = gv.reducer, Qy = {
  current: ["starting"],
  history: []
}, mv = Ya({
  name: "router",
  initialState: Qy,
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
}), { goTo: Yy, goBack: bC, openLink: _C } = mv.actions, Xy = Wa, Zy = mv.reducer, Ms = ["info", "low", "medium", "high", "critical"], Pt = {
  Info: 1,
  Low: 2,
  Medium: 3,
  High: 4,
  Critical: 5
}, qy = {
  [Pt.Info]: "info",
  [Pt.Low]: "low",
  [Pt.Medium]: "medium",
  [Pt.High]: "high",
  [Pt.Critical]: "critical"
}, yv = {
  [Pt.Info]: "Info",
  [Pt.Low]: "Low",
  [Pt.Medium]: "Medium",
  [Pt.High]: "High",
  [Pt.Critical]: "Critical"
}, Jy = {
  audit: {
    filename: "",
    files: {},
    issues: {},
    minimalReport: !1,
    valid: !0,
    openapiState: "",
    summary: {
      documentUri: "",
      subdocumentUris: [],
      errors: !1,
      invalid: !1,
      all: 0,
      datavalidation: { max: 0, value: 0 },
      security: { max: 0, value: 0 },
      oasconformance: { max: 0, value: 0 }
    }
  },
  tab: "priority",
  issues: [],
  filtered: [],
  stats: {
    byIssue: [],
    byGroup: wv([])
  },
  kdb: {},
  issueTitles: [],
  filter: {},
  sqgTodo: !1
}, xv = Ya({
  name: "audit",
  initialState: Jy,
  reducers: {
    startAudit: (e, t) => {
    },
    cancelAudit: (e, t) => {
    },
    showFullReport: (e, { payload: t }) => {
      e.audit.filename !== t.filename && (e.tab = "priority", e.filter = {}, e.sqgTodo = !1), (t.compliance === void 0 || t.compliance.acceptance === "yes") && (e.sqgTodo = !1), e.audit = t, zr(e);
    },
    showPartialReport: (e, {
      payload: { report: t, uri: n, ids: r }
    }) => {
      e.audit = t, e.filter = { ids: r }, e.tab = "issues", e.sqgTodo = !1, zr(e);
    },
    loadKdb: (e, { payload: t }) => {
      e.kdb = t, zr(e);
    },
    changeTab: (e, t) => {
      e.tab = t.payload;
    },
    changeFilter: (e, { payload: t }) => {
      e.filter = t, zr(e);
    },
    setSqgTodo: (e, { payload: t }) => {
      e.sqgTodo = t, e.filter = {}, zr(e);
    },
    showNoReport: (e) => {
    },
    goToLine: (e, t) => {
    },
    copyIssueId: (e, t) => {
    },
    openLink: (e, t) => {
    }
  }
});
function zr(e) {
  const { issues: t, filtered: n, stats: r, titles: o } = ex(
    e.sqgTodo ? e.audit.todo : e.audit.issues,
    e.audit.files,
    e.kdb,
    e.filter
  );
  e.issues = t, e.filtered = n, e.stats = r, e.issueTitles = o;
}
function ex(e, t, n, r) {
  const o = nx(e, t, n), i = rx(o, n), l = ox(i), u = tx(o, r);
  return { issues: o, filtered: u, stats: i, titles: l };
}
function tx(e, t) {
  const n = (s, a) => t.ids === void 0 || t.ids.includes(a), r = (s) => t.domain === void 0 || s.domain === (t == null ? void 0 : t.domain), o = (s) => t.group === void 0 || s.group === (t == null ? void 0 : t.group), i = (s) => (t == null ? void 0 : t.rule) === void 0 || s.id === t.rule, l = t.severity !== void 0 ? Ms.indexOf(t.severity) + 1 : 0, u = (s) => t.severity === void 0 || s.criticality >= l;
  return e.filter((s, a) => n(s, a) && r(s) && o(s) && i(s) && u(s));
}
function nx(e, t, n) {
  return Object.entries(e).map(([o, i]) => i.map((l, u) => ({
    ...l,
    domain: n[l.id].group,
    group: n[l.id].subgroup,
    filename: t[l.documentUri].relative
  }))).reduce((o, i) => o.concat(i), []);
}
function rx(e, t) {
  const n = {};
  for (const i of e)
    n[i.id] || (n[i.id] = []), n[i.id].push(i);
  const r = Object.keys(n).map((i) => ({
    id: i,
    kdb: t[i] || lx,
    title: t[i].title.text.replace(/^<h1>|<\/h1>$/g, ""),
    domain: n[i][0].domain,
    score: n[i].reduce((l, u) => l + u.score, 0),
    criticality: Math.max(...n[i].map((l) => l.criticality)),
    displayScore: ix(n[i].reduce((l, u) => l + u.score, 0)),
    count: n[i].length,
    important: n[i].some((l) => l.criticality >= Pt.Low)
  })), o = wv(e);
  return { byIssue: r, byGroup: o };
}
function wv(e) {
  var r, o;
  const t = { info: 0, low: 0, medium: 0, high: 0, critical: 0 }, n = {
    oasconformance: {
      validation: { ...t },
      semantics: { ...t },
      bestpractices: { ...t }
    },
    datavalidation: {
      parameters: { ...t },
      paths: { ...t },
      schema: { ...t },
      responseheader: { ...t },
      responsedefinition: { ...t }
    },
    security: {
      authentication: { ...t },
      authorization: { ...t },
      transport: { ...t }
    }
  };
  for (const i of e) {
    const l = i.domain, u = i.group, s = qy[i.criticality];
    l !== void 0 && u !== void 0 && //@ts-ignore
    ((o = (r = n[l]) == null ? void 0 : r[u]) == null ? void 0 : o[s]) !== void 0 && n[l][u][s]++;
  }
  return n;
}
function ox(e) {
  return e.byIssue.map((t) => ({ value: t.id, label: t.title })).sort((t, n) => {
    const r = t.value.toLowerCase(), o = n.value.toLowerCase();
    return r < o ? -1 : r > o ? 1 : 0;
  });
}
function ix(e) {
  const t = Math.abs(Math.round(e));
  return e === 0 ? "0" : t >= 1 ? t.toString() : "less than 1";
}
const lx = {
  title: {
    text: "<h1>Article not found</h1>"
  },
  description: {
    text: `<p>Whoops! Looks like there has been an oversight and we are missing a page for this issue.</p>
           <p><a href="https://apisecurity.io/contact-us/">Let us know</a> the title of the issue, and we make sure to add it to the encyclopedia.</p>`
  }
}, {
  startAudit: Sv,
  cancelAudit: kv,
  showFullReport: qa,
  showPartialReport: Ja,
  showNoReport: ec,
  loadKdb: ux,
  goToLine: tc,
  copyIssueId: nc,
  openLink: Qi,
  changeTab: mn,
  changeFilter: ze,
  setSqgTodo: sx
} = xv.actions, ax = xv.reducer, cx = {
  audit: ax,
  theme: Gy,
  router: Zy
}, dx = (e, t) => vy({
  reducer: cx,
  middleware: (n) => n().prepend(e.middleware).concat(Vy),
  preloadedState: {
    theme: t
  }
}), it = () => R1(), wt = Wa;
var Cv = { exports: {} }, pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc = Symbol.for("react.element"), oc = Symbol.for("react.portal"), bl = Symbol.for("react.fragment"), _l = Symbol.for("react.strict_mode"), Tl = Symbol.for("react.profiler"), Pl = Symbol.for("react.provider"), jl = Symbol.for("react.context"), fx = Symbol.for("react.server_context"), Rl = Symbol.for("react.forward_ref"), Al = Symbol.for("react.suspense"), Ol = Symbol.for("react.suspense_list"), Nl = Symbol.for("react.memo"), Ml = Symbol.for("react.lazy"), px = Symbol.for("react.offscreen"), Ev;
Ev = Symbol.for("react.module.reference");
function Ct(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case rc:
        switch (e = e.type, e) {
          case bl:
          case Tl:
          case _l:
          case Al:
          case Ol:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case fx:
              case jl:
              case Rl:
              case Ml:
              case Nl:
              case Pl:
                return e;
              default:
                return t;
            }
        }
      case oc:
        return t;
    }
  }
}
pe.ContextConsumer = jl;
pe.ContextProvider = Pl;
pe.Element = rc;
pe.ForwardRef = Rl;
pe.Fragment = bl;
pe.Lazy = Ml;
pe.Memo = Nl;
pe.Portal = oc;
pe.Profiler = Tl;
pe.StrictMode = _l;
pe.Suspense = Al;
pe.SuspenseList = Ol;
pe.isAsyncMode = function() {
  return !1;
};
pe.isConcurrentMode = function() {
  return !1;
};
pe.isContextConsumer = function(e) {
  return Ct(e) === jl;
};
pe.isContextProvider = function(e) {
  return Ct(e) === Pl;
};
pe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === rc;
};
pe.isForwardRef = function(e) {
  return Ct(e) === Rl;
};
pe.isFragment = function(e) {
  return Ct(e) === bl;
};
pe.isLazy = function(e) {
  return Ct(e) === Ml;
};
pe.isMemo = function(e) {
  return Ct(e) === Nl;
};
pe.isPortal = function(e) {
  return Ct(e) === oc;
};
pe.isProfiler = function(e) {
  return Ct(e) === Tl;
};
pe.isStrictMode = function(e) {
  return Ct(e) === _l;
};
pe.isSuspense = function(e) {
  return Ct(e) === Al;
};
pe.isSuspenseList = function(e) {
  return Ct(e) === Ol;
};
pe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === bl || e === Tl || e === _l || e === Al || e === Ol || e === px || typeof e == "object" && e !== null && (e.$$typeof === Ml || e.$$typeof === Nl || e.$$typeof === Pl || e.$$typeof === jl || e.$$typeof === Rl || e.$$typeof === Ev || e.getModuleId !== void 0);
};
pe.typeOf = Ct;
Cv.exports = pe;
var $v = Cv.exports;
function hx(e) {
  function t(w, m, C, I, x) {
    for (var D = 0, P = 0, Q = 0, H = 0, U, z, ee = 0, Y = 0, Z, oe = Z = U = 0, W = 0, de = 0, je = 0, ie = 0, Re = C.length, ve = Re - 1, Be, q = "", me = "", qe = "", Ke = "", Je; W < Re; ) {
      if (z = C.charCodeAt(W), W === ve && P + H + Q + D !== 0 && (P !== 0 && (z = P === 47 ? 10 : 47), H = Q = D = 0, Re++, ve++), P + H + Q + D === 0) {
        if (W === ve && (0 < de && (q = q.replace(g, "")), 0 < q.trim().length)) {
          switch (z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              q += C.charAt(W);
          }
          z = 59;
        }
        switch (z) {
          case 123:
            for (q = q.trim(), U = q.charCodeAt(0), Z = 1, ie = ++W; W < Re; ) {
              switch (z = C.charCodeAt(W)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (z = C.charCodeAt(W + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (oe = W + 1; oe < ve; ++oe)
                          switch (C.charCodeAt(oe)) {
                            case 47:
                              if (z === 42 && C.charCodeAt(oe - 1) === 42 && W + 2 !== oe) {
                                W = oe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (z === 47) {
                                W = oe + 1;
                                break e;
                              }
                          }
                        W = oe;
                      }
                  }
                  break;
                case 91:
                  z++;
                case 40:
                  z++;
                case 34:
                case 39:
                  for (; W++ < ve && C.charCodeAt(W) !== z; )
                    ;
              }
              if (Z === 0) break;
              W++;
            }
            switch (Z = C.substring(ie, W), U === 0 && (U = (q = q.replace(f, "").trim()).charCodeAt(0)), U) {
              case 64:
                switch (0 < de && (q = q.replace(g, "")), z = q.charCodeAt(1), z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    de = m;
                    break;
                  default:
                    de = $e;
                }
                if (Z = t(m, de, Z, z, x + 1), ie = Z.length, 0 < N && (de = n($e, q, je), Je = u(3, Z, de, m, te, ue, ie, z, x, I), q = de.join(""), Je !== void 0 && (ie = (Z = Je.trim()).length) === 0 && (z = 0, Z = "")), 0 < ie) switch (z) {
                  case 115:
                    q = q.replace(j, l);
                  case 100:
                  case 109:
                  case 45:
                    Z = q + "{" + Z + "}";
                    break;
                  case 107:
                    q = q.replace(d, "$1 $2"), Z = q + "{" + Z + "}", Z = ce === 1 || ce === 2 && i("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                    break;
                  default:
                    Z = q + Z, I === 112 && (Z = (me += Z, ""));
                }
                else Z = "";
                break;
              default:
                Z = t(m, n(m, q, je), Z, I, x + 1);
            }
            qe += Z, Z = je = de = oe = U = 0, q = "", z = C.charCodeAt(++W);
            break;
          case 125:
          case 59:
            if (q = (0 < de ? q.replace(g, "") : q).trim(), 1 < (ie = q.length)) switch (oe === 0 && (U = q.charCodeAt(0), U === 45 || 96 < U && 123 > U) && (ie = (q = q.replace(" ", ":")).length), 0 < N && (Je = u(1, q, m, w, te, ue, me.length, I, x, I)) !== void 0 && (ie = (q = Je.trim()).length) === 0 && (q = "\0\0"), U = q.charCodeAt(0), z = q.charCodeAt(1), U) {
              case 0:
                break;
              case 64:
                if (z === 105 || z === 99) {
                  Ke += q + C.charAt(W);
                  break;
                }
              default:
                q.charCodeAt(ie - 1) !== 58 && (me += o(q, U, z, q.charCodeAt(2)));
            }
            je = de = oe = U = 0, q = "", z = C.charCodeAt(++W);
        }
      }
      switch (z) {
        case 13:
        case 10:
          P === 47 ? P = 0 : 1 + U === 0 && I !== 107 && 0 < q.length && (de = 1, q += "\0"), 0 < N * K && u(0, q, m, w, te, ue, me.length, I, x, I), ue = 1, te++;
          break;
        case 59:
        case 125:
          if (P + H + Q + D === 0) {
            ue++;
            break;
          }
        default:
          switch (ue++, Be = C.charAt(W), z) {
            case 9:
            case 32:
              if (H + D + P === 0) switch (ee) {
                case 44:
                case 58:
                case 9:
                case 32:
                  Be = "";
                  break;
                default:
                  z !== 32 && (Be = " ");
              }
              break;
            case 0:
              Be = "\\0";
              break;
            case 12:
              Be = "\\f";
              break;
            case 11:
              Be = "\\v";
              break;
            case 38:
              H + P + D === 0 && (de = je = 1, Be = "\f" + Be);
              break;
            case 108:
              if (H + P + D + ae === 0 && 0 < oe) switch (W - oe) {
                case 2:
                  ee === 112 && C.charCodeAt(W - 3) === 58 && (ae = ee);
                case 8:
                  Y === 111 && (ae = Y);
              }
              break;
            case 58:
              H + P + D === 0 && (oe = W);
              break;
            case 44:
              P + Q + H + D === 0 && (de = 1, Be += "\r");
              break;
            case 34:
            case 39:
              P === 0 && (H = H === z ? 0 : H === 0 ? z : H);
              break;
            case 91:
              H + P + Q === 0 && D++;
              break;
            case 93:
              H + P + Q === 0 && D--;
              break;
            case 41:
              H + P + D === 0 && Q--;
              break;
            case 40:
              if (H + P + D === 0) {
                if (U === 0) switch (2 * ee + 3 * Y) {
                  case 533:
                    break;
                  default:
                    U = 1;
                }
                Q++;
              }
              break;
            case 64:
              P + Q + H + D + oe + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < H + D + Q)) switch (P) {
                case 0:
                  switch (2 * z + 3 * C.charCodeAt(W + 1)) {
                    case 235:
                      P = 47;
                      break;
                    case 220:
                      ie = W, P = 42;
                  }
                  break;
                case 42:
                  z === 47 && ee === 42 && ie + 2 !== W && (C.charCodeAt(ie + 2) === 33 && (me += C.substring(ie, W + 1)), Be = "", P = 0);
              }
          }
          P === 0 && (q += Be);
      }
      Y = ee, ee = z, W++;
    }
    if (ie = me.length, 0 < ie) {
      if (de = m, 0 < N && (Je = u(2, me, de, w, te, ue, ie, I, x, I), Je !== void 0 && (me = Je).length === 0)) return Ke + me + qe;
      if (me = de.join(",") + "{" + me + "}", ce * ae !== 0) {
        switch (ce !== 2 || i(me, 2) || (ae = 0), ae) {
          case 111:
            me = me.replace(E, ":-moz-$1") + me;
            break;
          case 112:
            me = me.replace(v, "::-webkit-input-$1") + me.replace(v, "::-moz-$1") + me.replace(v, ":-ms-input-$1") + me;
        }
        ae = 0;
      }
    }
    return Ke + me + qe;
  }
  function n(w, m, C) {
    var I = m.trim().split(_);
    m = I;
    var x = I.length, D = w.length;
    switch (D) {
      case 0:
      case 1:
        var P = 0;
        for (w = D === 0 ? "" : w[0] + " "; P < x; ++P)
          m[P] = r(w, m[P], C).trim();
        break;
      default:
        var Q = P = 0;
        for (m = []; P < x; ++P)
          for (var H = 0; H < D; ++H)
            m[Q++] = r(w[H] + " ", I[P], C).trim();
    }
    return m;
  }
  function r(w, m, C) {
    var I = m.charCodeAt(0);
    switch (33 > I && (I = (m = m.trim()).charCodeAt(0)), I) {
      case 38:
        return m.replace(h, "$1" + w.trim());
      case 58:
        return w.trim() + m.replace(h, "$1" + w.trim());
      default:
        if (0 < 1 * C && 0 < m.indexOf("\f")) return m.replace(h, (w.charCodeAt(0) === 58 ? "" : "$1") + w.trim());
    }
    return w + m;
  }
  function o(w, m, C, I) {
    var x = w + ";", D = 2 * m + 3 * C + 4 * I;
    if (D === 944) {
      w = x.indexOf(":", 9) + 1;
      var P = x.substring(w, x.length - 1).trim();
      return P = x.substring(0, w).trim() + P + ";", ce === 1 || ce === 2 && i(P, 1) ? "-webkit-" + P + P : P;
    }
    if (ce === 0 || ce === 2 && !i(x, 1)) return x;
    switch (D) {
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
        if (0 < x.indexOf("image-set(", 11)) return x.replace(se, "$1-webkit-$2") + x;
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
        return P = x.substring(x.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + P + "-webkit-" + x + "-ms-flex-pack" + P + x;
      case 1005:
        return y.test(x) ? x.replace(k, ":-webkit-") + x.replace(k, ":-moz-") + x : x;
      case 1e3:
        switch (P = x.substring(13).trim(), m = P.indexOf("-") + 1, P.charCodeAt(0) + P.charCodeAt(m)) {
          case 226:
            P = x.replace(T, "tb");
            break;
          case 232:
            P = x.replace(T, "tb-rl");
            break;
          case 220:
            P = x.replace(T, "lr");
            break;
          default:
            return x;
        }
        return "-webkit-" + x + "-ms-" + P + x;
      case 1017:
        if (x.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (m = (x = w).length - 10, P = (x.charCodeAt(m) === 33 ? x.substring(0, m) : x).substring(w.indexOf(":", 7) + 1).trim(), D = P.charCodeAt(0) + (P.charCodeAt(7) | 0)) {
          case 203:
            if (111 > P.charCodeAt(8)) break;
          case 115:
            x = x.replace(P, "-webkit-" + P) + ";" + x;
            break;
          case 207:
          case 102:
            x = x.replace(P, "-webkit-" + (102 < D ? "inline-" : "") + "box") + ";" + x.replace(P, "-webkit-" + P) + ";" + x.replace(P, "-ms-" + P + "box") + ";" + x;
        }
        return x + ";";
      case 938:
        if (x.charCodeAt(5) === 45) switch (x.charCodeAt(6)) {
          case 105:
            return P = x.replace("-items", ""), "-webkit-" + x + "-webkit-box-" + P + "-ms-flex-" + P + x;
          case 115:
            return "-webkit-" + x + "-ms-flex-item-" + x.replace(R, "") + x;
          default:
            return "-webkit-" + x + "-ms-flex-line-pack" + x.replace("align-content", "").replace(R, "") + x;
        }
        break;
      case 973:
      case 989:
        if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (B.test(w) === !0) return (P = w.substring(w.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(w.replace("stretch", "fill-available"), m, C, I).replace(":fill-available", ":stretch") : x.replace(P, "-webkit-" + P) + x.replace(P, "-moz-" + P.replace("fill-", "")) + x;
        break;
      case 962:
        if (x = "-webkit-" + x + (x.charCodeAt(5) === 102 ? "-ms-" + x : "") + x, C + I === 211 && x.charCodeAt(13) === 105 && 0 < x.indexOf("transform", 10)) return x.substring(0, x.indexOf(";", 27) + 1).replace($, "$1-webkit-$2") + x;
    }
    return x;
  }
  function i(w, m) {
    var C = w.indexOf(m === 1 ? ":" : "{"), I = w.substring(0, m !== 3 ? C : 10);
    return C = w.substring(C + 1, w.length - 1), V(m !== 2 ? I : I.replace(X, "$1"), C, m);
  }
  function l(w, m) {
    var C = o(m, m.charCodeAt(0), m.charCodeAt(1), m.charCodeAt(2));
    return C !== m + ";" ? C.replace(M, " or ($1)").substring(4) : "(" + m + ")";
  }
  function u(w, m, C, I, x, D, P, Q, H, U) {
    for (var z = 0, ee = m, Y; z < N; ++z)
      switch (Y = J[z].call(c, w, ee, C, I, x, D, P, Q, H, U)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ee = Y;
      }
    if (ee !== m) return ee;
  }
  function s(w) {
    switch (w) {
      case void 0:
      case null:
        N = J.length = 0;
        break;
      default:
        if (typeof w == "function") J[N++] = w;
        else if (typeof w == "object") for (var m = 0, C = w.length; m < C; ++m)
          s(w[m]);
        else K = !!w | 0;
    }
    return s;
  }
  function a(w) {
    return w = w.prefix, w !== void 0 && (V = null, w ? typeof w != "function" ? ce = 1 : (ce = 2, V = w) : ce = 0), a;
  }
  function c(w, m) {
    var C = w;
    if (33 > C.charCodeAt(0) && (C = C.trim()), S = C, C = [S], 0 < N) {
      var I = u(-1, m, C, C, te, ue, 0, 0, 0, 0);
      I !== void 0 && typeof I == "string" && (m = I);
    }
    var x = t($e, C, m, 0, 0);
    return 0 < N && (I = u(-2, x, C, C, te, ue, x.length, 0, 0, 0), I !== void 0 && (x = I)), S = "", ae = 0, ue = te = 1, x;
  }
  var f = /^\0+/g, g = /[\0\r\f]/g, k = /: */g, y = /zoo|gra/, $ = /([,: ])(transform)/g, _ = /,\r+?/g, h = /([\t\r\n ])*\f?&/g, d = /@(k\w+)\s*(\S*)\s*/, v = /::(place)/g, E = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, j = /\(\s*(.*)\s*\)/g, M = /([\s\S]*?);/g, R = /-self|flex-/g, X = /[^]*?(:[rp][el]a[\w-]+)[^]*/, B = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, ue = 1, te = 1, ae = 0, ce = 1, $e = [], J = [], N = 0, V = null, K = 0, S = "";
  return c.use = s, c.set = a, e !== void 0 && a(e), c;
}
var vx = {
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
function gx(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var mx = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, tf = /* @__PURE__ */ gx(
  function(e) {
    return mx.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Iv = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne = typeof Symbol == "function" && Symbol.for, ic = Ne ? Symbol.for("react.element") : 60103, lc = Ne ? Symbol.for("react.portal") : 60106, Dl = Ne ? Symbol.for("react.fragment") : 60107, Ll = Ne ? Symbol.for("react.strict_mode") : 60108, zl = Ne ? Symbol.for("react.profiler") : 60114, Fl = Ne ? Symbol.for("react.provider") : 60109, Bl = Ne ? Symbol.for("react.context") : 60110, uc = Ne ? Symbol.for("react.async_mode") : 60111, Hl = Ne ? Symbol.for("react.concurrent_mode") : 60111, Vl = Ne ? Symbol.for("react.forward_ref") : 60112, Ul = Ne ? Symbol.for("react.suspense") : 60113, yx = Ne ? Symbol.for("react.suspense_list") : 60120, Wl = Ne ? Symbol.for("react.memo") : 60115, Kl = Ne ? Symbol.for("react.lazy") : 60116, xx = Ne ? Symbol.for("react.block") : 60121, wx = Ne ? Symbol.for("react.fundamental") : 60117, Sx = Ne ? Symbol.for("react.responder") : 60118, kx = Ne ? Symbol.for("react.scope") : 60119;
function vt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ic:
        switch (e = e.type, e) {
          case uc:
          case Hl:
          case Dl:
          case zl:
          case Ll:
          case Ul:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Bl:
              case Vl:
              case Kl:
              case Wl:
              case Fl:
                return e;
              default:
                return t;
            }
        }
      case lc:
        return t;
    }
  }
}
function bv(e) {
  return vt(e) === Hl;
}
he.AsyncMode = uc;
he.ConcurrentMode = Hl;
he.ContextConsumer = Bl;
he.ContextProvider = Fl;
he.Element = ic;
he.ForwardRef = Vl;
he.Fragment = Dl;
he.Lazy = Kl;
he.Memo = Wl;
he.Portal = lc;
he.Profiler = zl;
he.StrictMode = Ll;
he.Suspense = Ul;
he.isAsyncMode = function(e) {
  return bv(e) || vt(e) === uc;
};
he.isConcurrentMode = bv;
he.isContextConsumer = function(e) {
  return vt(e) === Bl;
};
he.isContextProvider = function(e) {
  return vt(e) === Fl;
};
he.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ic;
};
he.isForwardRef = function(e) {
  return vt(e) === Vl;
};
he.isFragment = function(e) {
  return vt(e) === Dl;
};
he.isLazy = function(e) {
  return vt(e) === Kl;
};
he.isMemo = function(e) {
  return vt(e) === Wl;
};
he.isPortal = function(e) {
  return vt(e) === lc;
};
he.isProfiler = function(e) {
  return vt(e) === zl;
};
he.isStrictMode = function(e) {
  return vt(e) === Ll;
};
he.isSuspense = function(e) {
  return vt(e) === Ul;
};
he.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Dl || e === Hl || e === zl || e === Ll || e === Ul || e === yx || typeof e == "object" && e !== null && (e.$$typeof === Kl || e.$$typeof === Wl || e.$$typeof === Fl || e.$$typeof === Bl || e.$$typeof === Vl || e.$$typeof === wx || e.$$typeof === Sx || e.$$typeof === kx || e.$$typeof === xx);
};
he.typeOf = vt;
Iv.exports = he;
var Cx = Iv.exports, sc = Cx, Ex = {
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
}, $x = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ix = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, _v = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ac = {};
ac[sc.ForwardRef] = Ix;
ac[sc.Memo] = _v;
function nf(e) {
  return sc.isMemo(e) ? _v : ac[e.$$typeof] || Ex;
}
var bx = Object.defineProperty, _x = Object.getOwnPropertyNames, rf = Object.getOwnPropertySymbols, Tx = Object.getOwnPropertyDescriptor, Px = Object.getPrototypeOf, of = Object.prototype;
function Tv(e, t, n) {
  if (typeof t != "string") {
    if (of) {
      var r = Px(t);
      r && r !== of && Tv(e, r, n);
    }
    var o = _x(t);
    rf && (o = o.concat(rf(t)));
    for (var i = nf(e), l = nf(t), u = 0; u < o.length; ++u) {
      var s = o[u];
      if (!$x[s] && !(n && n[s]) && !(l && l[s]) && !(i && i[s])) {
        var a = Tx(t, s);
        try {
          bx(e, s, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var jx = Tv;
const Rx = /* @__PURE__ */ ol(jx);
function Vt() {
  return (Vt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var lf = function(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}, Ds = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !$v.typeOf(e);
}, Yi = Object.freeze([]), yn = Object.freeze({});
function Eo(e) {
  return typeof e == "function";
}
function uf(e) {
  return e.displayName || e.name || "Component";
}
function cc(e) {
  return e && typeof e.styledComponentId == "string";
}
var Cr = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", dc = typeof window < "u" && "HTMLElement" in window, Ax = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY));
function Ro(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
}
var Ox = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(n) {
    for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
    return r;
  }, t.insertRules = function(n, r) {
    if (n >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, l = i; n >= l; ) (l <<= 1) < 0 && Ro(16, "" + n);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(o), this.length = l;
      for (var u = i; u < l; u++) this.groupSizes[u] = 0;
    }
    for (var s = this.indexOfGroup(n + 1), a = 0, c = r.length; a < c; a++) this.tag.insertRule(s, r[a]) && (this.groupSizes[n]++, s++);
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
}(), vi = /* @__PURE__ */ new Map(), Xi = /* @__PURE__ */ new Map(), ro = 1, qo = function(e) {
  if (vi.has(e)) return vi.get(e);
  for (; Xi.has(ro); ) ro++;
  var t = ro++;
  return vi.set(e, t), Xi.set(t, e), t;
}, Nx = function(e) {
  return Xi.get(e);
}, Mx = function(e, t) {
  t >= ro && (ro = t + 1), vi.set(e, t), Xi.set(t, e);
}, Dx = "style[" + Cr + '][data-styled-version="5.3.11"]', Lx = new RegExp("^" + Cr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), zx = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, l = o.length; i < l; i++) (r = o[i]) && e.registerName(t, r);
}, Fx = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = n.length; o < i; o++) {
    var l = n[o].trim();
    if (l) {
      var u = l.match(Lx);
      if (u) {
        var s = 0 | parseInt(u[1], 10), a = u[2];
        s !== 0 && (Mx(a, s), zx(e, a, u[3]), e.getTag().insertRules(s, r)), r.length = 0;
      } else r.push(l);
    }
  }
}, Bx = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Pv = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(u) {
    for (var s = u.childNodes, a = s.length; a >= 0; a--) {
      var c = s[a];
      if (c && c.nodeType === 1 && c.hasAttribute(Cr)) return c;
    }
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Cr, "active"), r.setAttribute("data-styled-version", "5.3.11");
  var l = Bx();
  return l && r.setAttribute("nonce", l), n.insertBefore(r, i), r;
}, Hx = function() {
  function e(n) {
    var r = this.element = Pv(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var i = document.styleSheets, l = 0, u = i.length; l < u; l++) {
        var s = i[l];
        if (s.ownerNode === o) return s;
      }
      Ro(17);
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
}(), Vx = function() {
  function e(n) {
    var r = this.element = Pv(n);
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
}(), Ux = function() {
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
}(), sf = dc, Wx = { isServer: !dc, useCSSOMInjection: !Ax }, jv = function() {
  function e(n, r, o) {
    n === void 0 && (n = yn), r === void 0 && (r = {}), this.options = Vt({}, Wx, {}, n), this.gs = r, this.names = new Map(o), this.server = !!n.isServer, !this.server && dc && sf && (sf = !1, function(i) {
      for (var l = document.querySelectorAll(Dx), u = 0, s = l.length; u < s; u++) {
        var a = l[u];
        a && a.getAttribute(Cr) !== "active" && (Fx(i, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(n) {
    return qo(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(Vt({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, l = r.target, n = o ? new Ux(l) : i ? new Hx(l) : new Vx(l), new Ox(n)));
    var n, r, o, i, l;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (qo(n), this.names.has(n)) this.names.get(n).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(n, o);
    }
  }, t.insertRules = function(n, r, o) {
    this.registerName(n, r), this.getTag().insertRules(qo(n), o);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(qo(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), o = r.length, i = "", l = 0; l < o; l++) {
        var u = Nx(l);
        if (u !== void 0) {
          var s = n.names.get(u), a = r.getGroup(l);
          if (s && a && s.size) {
            var c = Cr + ".g" + l + '[id="' + u + '"]', f = "";
            s !== void 0 && s.forEach(function(g) {
              g.length > 0 && (f += g + ",");
            }), i += "" + a + c + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), Kx = /(a)(d)/gi, af = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ls(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = af(t % 52) + n;
  return (af(t % 52) + n).replace(Kx, "$1-$2");
}
var or = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Rv = function(e) {
  return or(5381, e);
};
function Gx(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Eo(n) && !cc(n)) return !1;
  }
  return !0;
}
var Qx = Rv("5.3.11"), Yx = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && Gx(t), this.componentId = n, this.baseHash = or(Qx, n), this.baseStyle = r, jv.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var l = Er(this.rules, t, n, r).join(""), u = Ls(or(this.baseHash, l) >>> 0);
      if (!n.hasNameForId(o, u)) {
        var s = r(l, "." + u, void 0, o);
        n.insertRules(o, u, s);
      }
      i.push(u), this.staticRulesId = u;
    }
    else {
      for (var a = this.rules.length, c = or(this.baseHash, r.hash), f = "", g = 0; g < a; g++) {
        var k = this.rules[g];
        if (typeof k == "string") f += k;
        else if (k) {
          var y = Er(k, t, n, r), $ = Array.isArray(y) ? y.join("") : y;
          c = or(c, $ + g), f += $;
        }
      }
      if (f) {
        var _ = Ls(c >>> 0);
        if (!n.hasNameForId(o, _)) {
          var h = r(f, "." + _, void 0, o);
          n.insertRules(o, _, h);
        }
        i.push(_);
      }
    }
    return i.join(" ");
  }, e;
}(), Xx = /^\s*\/\/.*$/gm, Zx = [":", "[", ".", "#"];
function qx(e) {
  var t, n, r, o, i = yn, l = i.options, u = l === void 0 ? yn : l, s = i.plugins, a = s === void 0 ? Yi : s, c = new hx(u), f = [], g = /* @__PURE__ */ function($) {
    function _(h) {
      if (h) try {
        $(h + "}");
      } catch {
      }
    }
    return function(h, d, v, E, T, j, M, R, X, B) {
      switch (h) {
        case 1:
          if (X === 0 && d.charCodeAt(0) === 64) return $(d + ";"), "";
          break;
        case 2:
          if (R === 0) return d + "/*|*/";
          break;
        case 3:
          switch (R) {
            case 102:
            case 112:
              return $(v[0] + d), "";
            default:
              return d + (B === 0 ? "/*|*/" : "");
          }
        case -2:
          d.split("/*|*/}").forEach(_);
      }
    };
  }(function($) {
    f.push($);
  }), k = function($, _, h) {
    return _ === 0 && Zx.indexOf(h[n.length]) !== -1 || h.match(o) ? $ : "." + t;
  };
  function y($, _, h, d) {
    d === void 0 && (d = "&");
    var v = $.replace(Xx, ""), E = _ && h ? h + " " + _ + " { " + v + " }" : v;
    return t = d, n = _, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), c(h || !_ ? "" : _, E);
  }
  return c.use([].concat(a, [function($, _, h) {
    $ === 2 && h.length && h[0].lastIndexOf(n) > 0 && (h[0] = h[0].replace(r, k));
  }, g, function($) {
    if ($ === -2) {
      var _ = f;
      return f = [], _;
    }
  }])), y.hash = a.length ? a.reduce(function($, _) {
    return _.name || Ro(15), or($, _.name);
  }, 5381).toString() : "", y;
}
var Av = Se.createContext();
Av.Consumer;
var Ov = Se.createContext(), Jx = (Ov.Consumer, new jv()), zs = qx();
function ew() {
  return b.useContext(Av) || Jx;
}
function tw() {
  return b.useContext(Ov) || zs;
}
var Nv = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = zs);
      var l = r.name + i.hash;
      o.hasNameForId(r.id, l) || o.insertRules(r.id, l, i(r.rules, l, "@keyframes"));
    }, this.toString = function() {
      return Ro(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = zs), this.name + t.hash;
  }, e;
}(), nw = /([A-Z])/, rw = /([A-Z])/g, ow = /^ms-/, iw = function(e) {
  return "-" + e.toLowerCase();
};
function cf(e) {
  return nw.test(e) ? e.replace(rw, iw).replace(ow, "-ms-") : e;
}
var df = function(e) {
  return e == null || e === !1 || e === "";
};
function Er(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], l = 0, u = e.length; l < u; l += 1) (o = Er(e[l], t, n, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (df(e)) return "";
  if (cc(e)) return "." + e.styledComponentId;
  if (Eo(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !t) return e;
    var s = e(t);
    return Er(s, t, n, r);
  }
  var a;
  return e instanceof Nv ? n ? (e.inject(n, r), e.getName(r)) : e : Ds(e) ? function c(f, g) {
    var k, y, $ = [];
    for (var _ in f) f.hasOwnProperty(_) && !df(f[_]) && (Array.isArray(f[_]) && f[_].isCss || Eo(f[_]) ? $.push(cf(_) + ":", f[_], ";") : Ds(f[_]) ? $.push.apply($, c(f[_], _)) : $.push(cf(_) + ": " + (k = _, (y = f[_]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || k in vx || k.startsWith("--") ? String(y).trim() : y + "px") + ";"));
    return g ? [g + " {"].concat($, ["}"]) : $;
  }(e) : e.toString();
}
var ff = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Mv(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return Eo(e) || Ds(e) ? ff(Er(lf(Yi, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ff(Er(lf(e, n)));
}
var lw = function(e, t, n) {
  return n === void 0 && (n = yn), e.theme !== n.theme && e.theme || t || n.theme;
}, uw = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, sw = /(^-|-$)/g;
function bu(e) {
  return e.replace(uw, "-").replace(sw, "");
}
var Dv = function(e) {
  return Ls(Rv(e) >>> 0);
};
function Jo(e) {
  return typeof e == "string" && !0;
}
var Fs = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, aw = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function cw(e, t, n) {
  var r = e[n];
  Fs(t) && Fs(r) ? Lv(r, t) : e[n] = t;
}
function Lv(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var l = i[o];
    if (Fs(l)) for (var u in l) aw(u) && cw(e, l[u], u);
  }
  return e;
}
var zv = Se.createContext();
zv.Consumer;
var _u = {};
function Fv(e, t, n) {
  var r = cc(e), o = !Jo(e), i = t.attrs, l = i === void 0 ? Yi : i, u = t.componentId, s = u === void 0 ? function(d, v) {
    var E = typeof d != "string" ? "sc" : bu(d);
    _u[E] = (_u[E] || 0) + 1;
    var T = E + "-" + Dv("5.3.11" + E + _u[E]);
    return v ? v + "-" + T : T;
  }(t.displayName, t.parentComponentId) : u, a = t.displayName, c = a === void 0 ? function(d) {
    return Jo(d) ? "styled." + d : "Styled(" + uf(d) + ")";
  }(e) : a, f = t.displayName && t.componentId ? bu(t.displayName) + "-" + t.componentId : t.componentId || s, g = r && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, k = t.shouldForwardProp;
  r && e.shouldForwardProp && (k = t.shouldForwardProp ? function(d, v, E) {
    return e.shouldForwardProp(d, v, E) && t.shouldForwardProp(d, v, E);
  } : e.shouldForwardProp);
  var y, $ = new Yx(n, f, r ? e.componentStyle : void 0), _ = $.isStatic && l.length === 0, h = function(d, v) {
    return function(E, T, j, M) {
      var R = E.attrs, X = E.componentStyle, B = E.defaultProps, se = E.foldedComponentIds, ue = E.shouldForwardProp, te = E.styledComponentId, ae = E.target, ce = function(I, x, D) {
        I === void 0 && (I = yn);
        var P = Vt({}, x, { theme: I }), Q = {};
        return D.forEach(function(H) {
          var U, z, ee, Y = H;
          for (U in Eo(Y) && (Y = Y(P)), Y) P[U] = Q[U] = U === "className" ? (z = Q[U], ee = Y[U], z && ee ? z + " " + ee : z || ee) : Y[U];
        }), [P, Q];
      }(lw(T, b.useContext(zv), B) || yn, T, R), $e = ce[0], J = ce[1], N = function(I, x, D, P) {
        var Q = ew(), H = tw(), U = x ? I.generateAndInjectStyles(yn, Q, H) : I.generateAndInjectStyles(D, Q, H);
        return U;
      }(X, M, $e), V = j, K = J.$as || T.$as || J.as || T.as || ae, S = Jo(K), w = J !== T ? Vt({}, T, {}, J) : T, m = {};
      for (var C in w) C[0] !== "$" && C !== "as" && (C === "forwardedAs" ? m.as = w[C] : (ue ? ue(C, tf, K) : !S || tf(C)) && (m[C] = w[C]));
      return T.style && J.style !== T.style && (m.style = Vt({}, T.style, {}, J.style)), m.className = Array.prototype.concat(se, te, N !== te ? N : null, T.className, J.className).filter(Boolean).join(" "), m.ref = V, b.createElement(K, m);
    }(y, d, v, _);
  };
  return h.displayName = c, (y = Se.forwardRef(h)).attrs = g, y.componentStyle = $, y.displayName = c, y.shouldForwardProp = k, y.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Yi, y.styledComponentId = f, y.target = r ? e.target : e, y.withComponent = function(d) {
    var v = t.componentId, E = function(j, M) {
      if (j == null) return {};
      var R, X, B = {}, se = Object.keys(j);
      for (X = 0; X < se.length; X++) R = se[X], M.indexOf(R) >= 0 || (B[R] = j[R]);
      return B;
    }(t, ["componentId"]), T = v && v + "-" + (Jo(d) ? d : bu(uf(d)));
    return Fv(d, Vt({}, E, { attrs: g, componentId: T }), n);
  }, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(d) {
    this._foldedDefaultProps = r ? Lv({}, e.defaultProps, d) : d;
  } }), Object.defineProperty(y, "toString", { value: function() {
    return "." + y.styledComponentId;
  } }), o && Rx(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y;
}
var L = function(e) {
  return function t(n, r, o) {
    if (o === void 0 && (o = yn), !$v.isValidElementType(r)) return Ro(1, String(r));
    var i = function() {
      return n(r, o, Mv.apply(void 0, arguments));
    };
    return i.withConfig = function(l) {
      return t(n, r, Vt({}, o, {}, l));
    }, i.attrs = function(l) {
      return t(n, r, Vt({}, o, { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
    }, i;
  }(Fv, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  L[e] = L(e);
});
function dw(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var o = Mv.apply(void 0, [e].concat(n)).join(""), i = Dv(o);
  return new Nv(i, o);
}
const fw = [
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
], O = {
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
function pw() {
  const e = Wy((t) => t.theme);
  return /* @__PURE__ */ p.jsxs("style", { children: [
    vw(e.theme),
    hw()
  ] });
}
function hw() {
  return `
  body {
    padding: 0;
    margin: 0;
    background-color: var(--xliic-background);
    color: var(--xliic-foreground);
    }`;
}
function vw(e) {
  const t = [];
  if (e !== void 0)
    for (const n of fw)
      e[n] && t.push(`${O[n]}: ${e[n]};`);
  return `:root {
    ${t.join(`
`)}
  }`;
}
const Bv = Se.createContext([
  {
    id: "starting",
    title: "Starting",
    element: Se.createElement("div", {}, "Empty starting route")
  }
]);
function Hv(e, t) {
  if (t.length === 0)
    return;
  const [n, ...r] = t;
  for (const o of e)
    if (o.id === n)
      return r.length === 0 ? o : o.children ? Hv(o.children, r) : void 0;
}
function gw() {
  return /* @__PURE__ */ p.jsx(Bv.Consumer, { children: (e) => /* @__PURE__ */ p.jsx(mw, { routes: e }) });
}
function mw({ routes: e }) {
  const t = Xy((r) => r.router.current), n = Hv(e, t);
  return !n || n.link ? /* @__PURE__ */ p.jsx("div", {}) : n.element;
}
L.nav`
  height: 28px;
  display: flex;
  padding: 0px 16px;
  padding-top: 6px;
  justify-content: space-between;
  font-size: 14px;
  border-bottom: 1px solid var(${O.border});
`;
L.div`
  height: 35px;
  display: flex;
  padding: 0px 16px;
  border-bottom: 1px solid var(${O.border});
`;
L.div`
  padding: 0 1em;
  display: flex;
  align-items: center;
  ${(e) => e.active ? `border-bottom: 3px solid var(${O.buttonBackground});` : "opacity: 0.7; border-bottom: 3px solid transparent; cursor: pointer;"};
  > div {
    border: ${(e) => e.active && O.contrastActiveBorder ? `1px solid var(${O.contrastActiveBorder})` : "none"};
  }
`;
L.div`
  place-self: center;
  font-size: 16px;
  font-weight: 500;
  display: flex;
`;
function yw(e, t) {
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
function xw(e) {
  const t = Object.keys(e);
  for (const n of t)
    e[n] ? (console.log("starting listener for: ", n), e[n]()) : console.log("skipping listener for: ", n);
}
L.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 35px;
`;
L.div`
  position: fixed;
  top: 35px;
  left: 0;
  right: 0;
  bottom: 0;
`;
function Vv(e, t, n = []) {
  for (const r of t)
    r.when && e({
      actionCreator: r.when,
      effect: async (o, i) => {
        const l = n.map((u) => u.id);
        i.dispatch(Yy([...l, r.id]));
      }
    }), r.children && Vv(e, r.children, [...n, r]);
}
const Uv = By(), Fr = Uv.startListening;
function ww(e, t) {
  const n = {
    goToLine: () => Fr({
      actionCreator: tc,
      effect: async (r, o) => {
        e.postMessage({
          command: "goToLine",
          payload: r.payload
        });
      }
    }),
    copyIssueId: () => Fr({
      actionCreator: nc,
      effect: async (r, o) => {
        e.postMessage({
          command: "copyIssueId",
          payload: r.payload
        });
      }
    }),
    openLink: () => Fr({
      actionCreator: Qi,
      effect: async (r, o) => {
        e.postMessage({
          command: "openLink",
          payload: r.payload
        });
      }
    })
  };
  return Fr({
    matcher: xy(qa, Ja, ec),
    effect: async (r, o) => {
      window.scrollTo(0, 0);
    }
  }), Vv(Fr, t), xw(n), Uv;
}
function re() {
  return re = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, re.apply(null, arguments);
}
function Kt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o);
  };
}
function fc(e, t = []) {
  let n = [];
  function r(i, l) {
    const u = /* @__PURE__ */ b.createContext(l), s = n.length;
    n = [
      ...n,
      l
    ];
    function a(f) {
      const { scope: g, children: k, ...y } = f, $ = (g == null ? void 0 : g[e][s]) || u, _ = b.useMemo(
        () => y,
        Object.values(y)
      );
      return /* @__PURE__ */ b.createElement($.Provider, {
        value: _
      }, k);
    }
    function c(f, g) {
      const k = (g == null ? void 0 : g[e][s]) || u, y = b.useContext(k);
      if (y) return y;
      if (l !== void 0) return l;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return a.displayName = i + "Provider", [
      a,
      c
    ];
  }
  const o = () => {
    const i = n.map((l) => /* @__PURE__ */ b.createContext(l));
    return function(u) {
      const s = (u == null ? void 0 : u[e]) || i;
      return b.useMemo(
        () => ({
          [`__scope${e}`]: {
            ...u,
            [e]: s
          }
        }),
        [
          u,
          s
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    Sw(o, ...t)
  ];
}
function Sw(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(i) {
      const l = r.reduce((u, { useScope: s, scopeName: a }) => {
        const f = s(i)[`__scope${a}`];
        return {
          ...u,
          ...f
        };
      }, {});
      return b.useMemo(
        () => ({
          [`__scope${t.scopeName}`]: l
        }),
        [
          l
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function kw(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Wv(...e) {
  return (t) => e.forEach(
    (n) => kw(n, t)
  );
}
function Zi(...e) {
  return b.useCallback(Wv(...e), e);
}
const qi = /* @__PURE__ */ b.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = b.Children.toArray(n), i = o.find(Ew);
  if (i) {
    const l = i.props.children, u = o.map((s) => s === i ? b.Children.count(l) > 1 ? b.Children.only(null) : /* @__PURE__ */ b.isValidElement(l) ? l.props.children : null : s);
    return /* @__PURE__ */ b.createElement(Bs, re({}, r, {
      ref: t
    }), /* @__PURE__ */ b.isValidElement(l) ? /* @__PURE__ */ b.cloneElement(l, void 0, u) : null);
  }
  return /* @__PURE__ */ b.createElement(Bs, re({}, r, {
    ref: t
  }), n);
});
qi.displayName = "Slot";
const Bs = /* @__PURE__ */ b.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ b.isValidElement(n) ? /* @__PURE__ */ b.cloneElement(n, {
    ...$w(r, n.props),
    ref: Wv(t, n.ref)
  }) : b.Children.count(n) > 1 ? b.Children.only(null) : null;
});
Bs.displayName = "SlotClone";
const Cw = ({ children: e }) => /* @__PURE__ */ b.createElement(b.Fragment, null, e);
function Ew(e) {
  return /* @__PURE__ */ b.isValidElement(e) && e.type === Cw;
}
function $w(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? n[r] = (...u) => {
      i == null || i(...u), o == null || o(...u);
    } : r === "style" ? n[r] = {
      ...o,
      ...i
    } : r === "className" && (n[r] = [
      o,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function Iw(e) {
  const t = e + "CollectionProvider", [n, r] = fc(t), [o, i] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), l = (k) => {
    const { scope: y, children: $ } = k, _ = Se.useRef(null), h = Se.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ Se.createElement(o, {
      scope: y,
      itemMap: h,
      collectionRef: _
    }, $);
  }, u = e + "CollectionSlot", s = /* @__PURE__ */ Se.forwardRef((k, y) => {
    const { scope: $, children: _ } = k, h = i(u, $), d = Zi(y, h.collectionRef);
    return /* @__PURE__ */ Se.createElement(qi, {
      ref: d
    }, _);
  }), a = e + "CollectionItemSlot", c = "data-radix-collection-item", f = /* @__PURE__ */ Se.forwardRef((k, y) => {
    const { scope: $, children: _, ...h } = k, d = Se.useRef(null), v = Zi(y, d), E = i(a, $);
    return Se.useEffect(() => (E.itemMap.set(d, {
      ref: d,
      ...h
    }), () => void E.itemMap.delete(d))), /* @__PURE__ */ Se.createElement(qi, {
      [c]: "",
      ref: v
    }, _);
  });
  function g(k) {
    const y = i(e + "CollectionConsumer", k);
    return Se.useCallback(() => {
      const _ = y.collectionRef.current;
      if (!_) return [];
      const h = Array.from(_.querySelectorAll(`[${c}]`));
      return Array.from(y.itemMap.values()).sort(
        (E, T) => h.indexOf(E.ref.current) - h.indexOf(T.ref.current)
      );
    }, [
      y.collectionRef,
      y.itemMap
    ]);
  }
  return [
    {
      Provider: l,
      Slot: s,
      ItemSlot: f
    },
    g,
    r
  ];
}
const Hs = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {
}, bw = Ou.useId || (() => {
});
let _w = 0;
function Kv(e) {
  const [t, n] = b.useState(bw());
  return Hs(() => {
    n(
      (r) => r ?? String(_w++)
    );
  }, [
    e
  ]), t ? `radix-${t}` : "";
}
const Tw = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Tr = Tw.reduce((e, t) => {
  const n = /* @__PURE__ */ b.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, u = i ? qi : t;
    return b.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ b.createElement(u, re({}, l, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function pc(e) {
  const t = b.useRef(e);
  return b.useEffect(() => {
    t.current = e;
  }), b.useMemo(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Gv({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Pw({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : r, u = pc(n), s = b.useCallback((a) => {
    if (i) {
      const f = typeof a == "function" ? a(e) : a;
      f !== e && u(f);
    } else o(a);
  }, [
    i,
    e,
    o,
    u
  ]);
  return [
    l,
    s
  ];
}
function Pw({ defaultProp: e, onChange: t }) {
  const n = b.useState(e), [r] = n, o = b.useRef(r), i = pc(t);
  return b.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
const jw = /* @__PURE__ */ b.createContext(void 0);
function Qv(e) {
  const t = b.useContext(jw);
  return e || t || "ltr";
}
const Tu = "rovingFocusGroup.onEntryFocus", Rw = {
  bubbles: !1,
  cancelable: !0
}, hc = "RovingFocusGroup", [Vs, Yv, Aw] = Iw(hc), [Ow, Xv] = fc(hc, [
  Aw
]), [Nw, Mw] = Ow(hc), Dw = /* @__PURE__ */ b.forwardRef((e, t) => /* @__PURE__ */ b.createElement(Vs.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ b.createElement(Vs.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ b.createElement(Lw, re({}, e, {
  ref: t
}))))), Lw = /* @__PURE__ */ b.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: i, currentTabStopId: l, defaultCurrentTabStopId: u, onCurrentTabStopIdChange: s, onEntryFocus: a, ...c } = e, f = b.useRef(null), g = Zi(t, f), k = Qv(i), [y = null, $] = Gv({
    prop: l,
    defaultProp: u,
    onChange: s
  }), [_, h] = b.useState(!1), d = pc(a), v = Yv(n), E = b.useRef(!1);
  return b.useEffect(() => {
    const T = f.current;
    if (T)
      return T.addEventListener(Tu, d), () => T.removeEventListener(Tu, d);
  }, [
    d
  ]), /* @__PURE__ */ b.createElement(Nw, {
    scope: n,
    orientation: r,
    dir: k,
    loop: o,
    currentTabStopId: y,
    onItemFocus: b.useCallback(
      (T) => $(T),
      [
        $
      ]
    ),
    onItemShiftTab: b.useCallback(
      () => h(!0),
      []
    )
  }, /* @__PURE__ */ b.createElement(Tr.div, re({
    tabIndex: _ ? -1 : 0,
    "data-orientation": r
  }, c, {
    ref: g,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: Kt(e.onMouseDown, () => {
      E.current = !0;
    }),
    onFocus: Kt(e.onFocus, (T) => {
      const j = !E.current;
      if (T.target === T.currentTarget && j && !_) {
        const M = new CustomEvent(Tu, Rw);
        if (T.currentTarget.dispatchEvent(M), !M.defaultPrevented) {
          const R = v().filter(
            (te) => te.focusable
          ), X = R.find(
            (te) => te.active
          ), B = R.find(
            (te) => te.id === y
          ), ue = [
            X,
            B,
            ...R
          ].filter(Boolean).map(
            (te) => te.ref.current
          );
          Zv(ue);
        }
      }
      E.current = !1;
    }),
    onBlur: Kt(
      e.onBlur,
      () => h(!1)
    )
  })));
}), zw = "RovingFocusGroupItem", Fw = /* @__PURE__ */ b.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, ...i } = e, l = Kv(), u = Mw(zw, n), s = u.currentTabStopId === l, a = Yv(n);
  return /* @__PURE__ */ b.createElement(Vs.ItemSlot, {
    scope: n,
    id: l,
    focusable: r,
    active: o
  }, /* @__PURE__ */ b.createElement(Tr.span, re({
    tabIndex: s ? 0 : -1,
    "data-orientation": u.orientation
  }, i, {
    ref: t,
    onMouseDown: Kt(e.onMouseDown, (c) => {
      r ? u.onItemFocus(l) : c.preventDefault();
    }),
    onFocus: Kt(
      e.onFocus,
      () => u.onItemFocus(l)
    ),
    onKeyDown: Kt(e.onKeyDown, (c) => {
      if (c.key === "Tab" && c.shiftKey) {
        u.onItemShiftTab();
        return;
      }
      if (c.target !== c.currentTarget) return;
      const f = Vw(c, u.orientation, u.dir);
      if (f !== void 0) {
        c.preventDefault();
        let k = a().filter(
          (y) => y.focusable
        ).map(
          (y) => y.ref.current
        );
        if (f === "last") k.reverse();
        else if (f === "prev" || f === "next") {
          f === "prev" && k.reverse();
          const y = k.indexOf(c.currentTarget);
          k = u.loop ? Uw(k, y + 1) : k.slice(y + 1);
        }
        setTimeout(
          () => Zv(k)
        );
      }
    })
  })));
}), Bw = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Hw(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Vw(e, t, n) {
  const r = Hw(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return Bw[r];
}
function Zv(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Uw(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Ww = Dw, Kw = Fw;
function Gw(e, t) {
  return b.useReducer((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const qv = (e) => {
  const { present: t, children: n } = e, r = Qw(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : b.Children.only(n), i = Zi(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ b.cloneElement(o, {
    ref: i
  }) : null;
};
qv.displayName = "Presence";
function Qw(e) {
  const [t, n] = b.useState(), r = b.useRef({}), o = b.useRef(e), i = b.useRef("none"), l = e ? "mounted" : "unmounted", [u, s] = Gw(l, {
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
  return b.useEffect(() => {
    const a = ei(r.current);
    i.current = u === "mounted" ? a : "none";
  }, [
    u
  ]), Hs(() => {
    const a = r.current, c = o.current;
    if (c !== e) {
      const g = i.current, k = ei(a);
      e ? s("MOUNT") : k === "none" || (a == null ? void 0 : a.display) === "none" ? s("UNMOUNT") : s(c && g !== k ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    s
  ]), Hs(() => {
    if (t) {
      const a = (f) => {
        const k = ei(r.current).includes(f.animationName);
        f.target === t && k && zh.flushSync(
          () => s("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = ei(r.current));
      };
      return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
        t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a);
      };
    } else
      s("ANIMATION_END");
  }, [
    t,
    s
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(u),
    ref: b.useCallback((a) => {
      a && (r.current = getComputedStyle(a)), n(a);
    }, [])
  };
}
function ei(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const Jv = "Tabs", [Yw, TC] = fc(Jv, [
  Xv
]), eg = Xv(), [Xw, vc] = Yw(Jv), Zw = /* @__PURE__ */ b.forwardRef((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: i, orientation: l = "horizontal", dir: u, activationMode: s = "automatic", ...a } = e, c = Qv(u), [f, g] = Gv({
    prop: r,
    onChange: o,
    defaultProp: i
  });
  return /* @__PURE__ */ b.createElement(Xw, {
    scope: n,
    baseId: Kv(),
    value: f,
    onValueChange: g,
    orientation: l,
    dir: c,
    activationMode: s
  }, /* @__PURE__ */ b.createElement(Tr.div, re({
    dir: c,
    "data-orientation": l
  }, a, {
    ref: t
  })));
}), qw = "TabsList", Jw = /* @__PURE__ */ b.forwardRef((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, i = vc(qw, n), l = eg(n);
  return /* @__PURE__ */ b.createElement(Ww, re({
    asChild: !0
  }, l, {
    orientation: i.orientation,
    dir: i.dir,
    loop: r
  }), /* @__PURE__ */ b.createElement(Tr.div, re({
    role: "tablist",
    "aria-orientation": i.orientation
  }, o, {
    ref: t
  })));
}), eS = "TabsTrigger", tS = /* @__PURE__ */ b.forwardRef((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...i } = e, l = vc(eS, n), u = eg(n), s = tg(l.baseId, r), a = ng(l.baseId, r), c = r === l.value;
  return /* @__PURE__ */ b.createElement(Kw, re({
    asChild: !0
  }, u, {
    focusable: !o,
    active: c
  }), /* @__PURE__ */ b.createElement(Tr.button, re({
    type: "button",
    role: "tab",
    "aria-selected": c,
    "aria-controls": a,
    "data-state": c ? "active" : "inactive",
    "data-disabled": o ? "" : void 0,
    disabled: o,
    id: s
  }, i, {
    ref: t,
    onMouseDown: Kt(e.onMouseDown, (f) => {
      !o && f.button === 0 && f.ctrlKey === !1 ? l.onValueChange(r) : f.preventDefault();
    }),
    onKeyDown: Kt(e.onKeyDown, (f) => {
      [
        " ",
        "Enter"
      ].includes(f.key) && l.onValueChange(r);
    }),
    onFocus: Kt(e.onFocus, () => {
      const f = l.activationMode !== "manual";
      !c && !o && f && l.onValueChange(r);
    })
  })));
}), nS = "TabsContent", rS = /* @__PURE__ */ b.forwardRef((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: i, ...l } = e, u = vc(nS, n), s = tg(u.baseId, r), a = ng(u.baseId, r), c = r === u.value, f = b.useRef(c);
  return b.useEffect(() => {
    const g = requestAnimationFrame(
      () => f.current = !1
    );
    return () => cancelAnimationFrame(g);
  }, []), /* @__PURE__ */ b.createElement(
    qv,
    {
      present: o || c
    },
    ({ present: g }) => /* @__PURE__ */ b.createElement(Tr.div, re({
      "data-state": c ? "active" : "inactive",
      "data-orientation": u.orientation,
      role: "tabpanel",
      "aria-labelledby": s,
      hidden: !g,
      id: a,
      tabIndex: 0
    }, l, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: f.current ? "0s" : void 0
      }
    }), g && i)
  );
});
function tg(e, t) {
  return `${e}-trigger-${t}`;
}
function ng(e, t) {
  return `${e}-content-${t}`;
}
const oS = Zw, iS = Jw, rg = tS, lS = rS, gc = (e) => /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ p.jsx("path", { d: "M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" }) }), og = (e) => /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ p.jsx("path", { d: "M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3 54.6 342.7c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25-6.2 6.2-14.4 9.3-22.6 9.3z" }) }), ig = (e) => /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ p.jsx("path", { d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm40-128h-16v-88c0-13.2-10.7-24-24-24h-32c-13.2 0-24 10.8-24 24s10.8 24 24 24h8v64h-16c-13.2 0-24 10.8-24 24s10.8 24 24 24h80c13.25 0 24-10.75 24-24s-10.7-24-24-24zm-40-144c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.3-32 32 14.3 32 32 32z" }) }), lg = (e) => /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ p.jsx("path", { d: "M64 464h224c8.8 0 16-7.2 16-16v-64h48v64c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V224c0-35.3 28.65-64 64-64h64v48H64c-8.84 0-16 7.2-16 16v224c0 8.8 7.16 16 16 16zm96-400c0-35.35 28.7-64 64-64h224c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V64zm64 240h224c8.8 0 16-7.2 16-16V64c0-8.84-7.2-16-16-16H224c-8.8 0-16 7.16-16 16v224c0 8.8 7.2 16 16 16z" }) }), $o = (e) => /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ p.jsx("path", { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm42-104c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42zm-81.37-211.401 6.8 136c.319 6.387 5.591 11.401 11.985 11.401h41.17c6.394 0 11.666-5.014 11.985-11.401l6.8-136c.343-6.854-5.122-12.599-11.985-12.599h-54.77c-6.863 0-12.328 5.745-11.985 12.599z" }) }), uS = (e) => /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ p.jsx("path", { d: "M0 73.7C0 50.67 18.67 32 41.7 32h428.6c23 0 41.7 18.67 41.7 41.7 0 9.6-3.3 18.9-9.4 26.3L336 304.5v143.2c0 17.8-14.5 32.3-32.3 32.3-7.3 0-14.4-2.5-20.1-7.9l-92.5-72.5c-9.5-7.6-15.1-19.1-15.1-31.3v-63.8L9.373 100A41.503 41.503 0 0 1 0 73.7zM54.96 80 218.6 280.8c3.5 4.3 5.4 9.7 5.4 15.2v68.4l64 50.8V296c0-5.5 1.9-10.9 5.4-15.2L457 80H54.96z" }) }), Us = (e) => /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ p.jsx("path", { d: "M476.3 0c-6.365 0-13.01 1.35-19.34 4.233-45.69 20.86-79.56 27.94-107.8 27.94-59.96 0-94.81-31.86-163.9-31.87-34.63 0-77.87 8.003-137.2 32.05V24C48 10.75 37.25 0 24 0S0 10.75 0 24v464c0 13.3 10.75 24 24 24s24-10.75 24-24V384c53.59-23.86 96.02-31.81 132.8-31.81 73.63 0 124.9 31.78 198.6 31.78 31.91 0 68.02-5.971 111.1-23.09 13.6-4.98 21.5-16.48 21.5-28.78V30.73C512 11.1 495.3 0 476.3 0zM464 319.8c-30.31 10.82-58.08 16.1-84.6 16.1-30.8 0-58.31-7-87.44-14.41-32.01-8.141-68.29-17.37-111.1-17.37-42.35 0-85.99 9.09-132.8 27.73V84.14l18.03-7.301c47.39-19.2 86.38-28.54 119.2-28.54 28.24.004 49.12 6.711 73.31 14.48 25.38 8.148 54.13 17.39 90.58 17.39 35.43 0 72.24-8.496 114.9-26.61V319.8z" }) }), Ji = (e) => /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ p.jsx("path", { d: "M173 131.5c56.2-56.23 147.3-56.23 203.5 0C430 185 432.9 270.9 383 327.9l-5.3 6.1c-8.8 10-23.9 11-33.9 2.3s-11-23.9-2.3-33.9l5.4-6.1c33.2-38 31.3-95.2-4.4-130.9-37.4-38.3-98.1-38.3-136.4 0L93.63 278.7c-37.44 37.5-37.44 98.2 0 135.6 35.67 34.8 92.97 37.6 130.87 4.4l6.2-5.4c9.9-8.7 25.1-7.7 33.8 2.3 8.8 9.9 7.7 25.1-2.2 33.8l-6.2 5.4c-57 49.8-142.9 47-196.41-6.6-56.185-56.1-56.185-148.1 0-203.4L173 131.5zm294 249c-56.2 56.2-147.3 56.2-203.5 0-54.4-54.4-56.4-139.4-6.6-196.4l4.7-5.4c8.7-10 23.9-11 33.9-2.3s11 23.9 2.3 33.9l-4.7 5.4c-33.3 38-31.3 95.2 4.3 130.9 37.5 37.4 98.2 37.4 135.7 0l113.3-113.3c37.4-37.5 37.4-98.2 0-135.6-35.7-35.68-93-37.59-130.9-4.35l-6.2 5.35c-9.9 8.7-25.1 7.7-33.8-2.26-8.8-9.97-7.7-25.14 2.2-33.86l6.2-5.36c57-49.872 142.9-47.01 196.4 6.54 56.2 56.14 56.2 147.24 0 203.44L467 380.5z" }) }), sS = (e) => /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ p.jsx("path", { d: "M506.3 417 293 53c-8.2-14-22.6-21-37-21-14.4 0-28.8 7-37.9 21L4.9 417c-15.49 27.9 4.951 63 37.84 63h426.6c32.76 0 53.26-35 36.96-63zM52.58 432 255.1 84.8 459.4 432H52.58zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44s14.11 31.44 31.48 31.44 31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1zM232 184v96c0 13.3 10.8 24 24 24s24-10.75 24-24v-96c0-13.2-10.7-24-24-24s-24 10.8-24 24z" }) }), ug = (e) => /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ p.jsx("path", { d: "M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256 7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256l118.2 119z" }) });
function aS({
  tabs: e,
  activeTab: t,
  setActiveTab: n,
  menu: r,
  round: o
}) {
  return n !== void 0 ? /* @__PURE__ */ p.jsx(
    sg,
    {
      tabs: e,
      activeTab: t,
      setActiveTab: n,
      menu: r,
      round: o
    }
  ) : /* @__PURE__ */ p.jsx(cS, { tabs: e, menu: r, round: o });
}
function cS({
  tabs: e,
  menu: t,
  round: n
}) {
  var i, l;
  const [r, o] = b.useState((l = (i = e.filter((u) => !u.disabled)) == null ? void 0 : i[0]) == null ? void 0 : l.id);
  return b.useEffect(() => {
    var u, s;
    e.filter((a) => a.id === r).length === 0 && o((s = (u = e.filter((a) => !a.disabled)) == null ? void 0 : u[0]) == null ? void 0 : s.id);
  }, [e]), r === void 0 ? null : /* @__PURE__ */ p.jsx(
    sg,
    {
      tabs: e,
      activeTab: r,
      setActiveTab: o,
      menu: t,
      round: n
    }
  );
}
function sg({
  tabs: e,
  activeTab: t,
  setActiveTab: n,
  menu: r,
  round: o
}) {
  const i = e.filter((l) => !l.disabled);
  return /* @__PURE__ */ p.jsxs(oS, { value: t, onValueChange: n, children: [
    /* @__PURE__ */ p.jsxs(fS, { children: [
      i.map((l) => {
        const u = o ? hS : pS;
        return /* @__PURE__ */ p.jsxs(u, { value: l.id, children: [
          /* @__PURE__ */ p.jsx("span", { className: "title", children: l.title }),
          dS(l),
          l.menu && /* @__PURE__ */ p.jsx(yS, { className: "menu", children: l.menu })
        ] }, l.id);
      }),
      r && /* @__PURE__ */ p.jsx(mS, { children: r })
    ] }),
    i.map((l) => /* @__PURE__ */ p.jsx(lS, { value: l.id, children: l.content }, l.id))
  ] });
}
function dS(e) {
  return e.counter ? e.counterKind === "error" ? /* @__PURE__ */ p.jsxs(gS, { children: [
    e.counter,
    /* @__PURE__ */ p.jsx(sS, {})
  ] }) : /* @__PURE__ */ p.jsx(vS, { children: e.counter }) : null;
}
const fS = L(iS)`
  display: flex;
  border-bottom: 1px solid var(${O.tabBorder});
  padding-left: 15px;
`, pS = L(rg)`
  border: none;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 16px;
  color: var(${O.tabInactiveForeground});
  background: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &[data-state="active"] {
    color: var(${O.tabActiveForeground});
    border-bottom: 3px solid var(${O.buttonBackground});
    cursor: inherit;
  }

  &[data-state="active"] > span.title {
    border: 1px solid var(${O.contrastActiveBorder});
  }

  &[data-state="active"] > span.menu {
    visibility: visible;
  }
`, hS = L(rg)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  border-bottom: 3px solid transparent;
  padding: 0;
  background-color: transparent;

  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 16px;

  > span.title {
    border-radius: 8px;
    padding: 4px 16px;

    color: var(${O.tabInactiveForeground});
    background-color: var(${O.computedOne});
    cursor: pointer;
  }

  &[data-state="active"] > span.title {
    border: 1px solid var(${O.contrastActiveBorder});
  }

  &[data-state="active"] > span.title {
    color: var(${O.tabActiveForeground});
    cursor: inherit;
  }

  &[data-state="active"] {
    color: var(${O.tabActiveForeground});
    border-bottom: 3px solid var(${O.buttonBackground});
    cursor: inherit;
  }

  &[data-state="active"] > span.menu {
    visibility: visible;
  }
`, vS = L.span`
  background-color: var(${O.badgeBackground});
  color: var(${O.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
`, gS = L.span`
  background-color: var(${O.errorBackground});
  color: var(${O.errorForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
  gap: 3px;
  & > svg {
    fill: var(${O.errorForeground});
    width: 10px;
    height: 10px;
  }
`, mS = L.div`
  flex: 1;
  display: flex;
  justify-content: end;
`, yS = L.span`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  cursor: pointer;
  position: relative;
  left: 20px;
  top: 0px;
  > svg {
    width: 14px;
    height: 14px;
    fill: var(${O.foreground});
  }
`;
function Ws({
  children: e,
  defaultCollapsed: t
}) {
  const [n, r] = b.useState(t ?? !0), o = e.slice(0, e.length - 1), i = e[e.length - 1];
  return /* @__PURE__ */ p.jsxs(xS, { children: [
    /* @__PURE__ */ p.jsxs(
      wS,
      {
        collapsed: n,
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), r(!n);
        },
        children: [
          /* @__PURE__ */ p.jsx("div", { children: n ? /* @__PURE__ */ p.jsx(gc, {}) : /* @__PURE__ */ p.jsx(og, {}) }),
          /* @__PURE__ */ p.jsxs("div", { children: [
            ...o
          ] })
        ]
      }
    ),
    !n && /* @__PURE__ */ p.jsx(SS, { children: i })
  ] });
}
const xS = L.div`
  margin: 8px;
  border: 1px solid var(${O.border});
  //background-color: var(${O.computedOne});
`, wS = L.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  //background-color: var(${O.computedOne});
  align-items: stretch;
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    display: flex;
    justify-content: center;
    > svg {
      fill: var(${O.foreground});
    }
  }
  & > div:nth-child(2) {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  & > div:nth-child(3) {
    display: flex;
    align-items: center;
  }

  border-left: 5px solid transparent;
  ${({ collapsed: e }) => !e && `border-bottom: 1px solid var(${O.border});
    border-left: 5px solid var(${O.badgeBackground});`}
`, Ks = L.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 600;
`, ir = L.div`
  //margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, bt = L.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${O.foreground});
  }
`, SS = L.div`
  //background-color: var(${O.computedOne});
`;
function Gs({
  article: e,
  lang: t,
  openLink: n
}) {
  const r = (l) => {
    l.stopPropagation(), l.preventDefault(), n(l.target.href);
  }, o = b.useRef(null);
  b.useEffect(() => {
    const l = o.current.querySelectorAll("a");
    return l.forEach((u) => {
      u.addEventListener("click", r);
    }), () => {
      l.forEach((u) => {
        u.removeEventListener("click", r);
      });
    };
  });
  const i = [
    e ? e.description.text : "",
    Pu(e.example, t),
    Pu(e.exploit, t),
    Pu(e.remediation, t)
  ].join("");
  return /* @__PURE__ */ p.jsx(kS, { ref: o, dangerouslySetInnerHTML: { __html: i } });
}
function Pu(e, t) {
  return !e || !e.sections ? "" : e.sections.map((n) => {
    if (n.text)
      return n.text;
    if (n.code)
      return `<pre>${n.code[t]}</pre>`;
  }).join("");
}
const kS = L.div`
  padding: 8px;
  weight: 500;
  font-size: var(${O.fontSize});

  > h2 {
    margin: 0;
    font-weight: 700;
    font-size: var(${O.fontSize});
  }

  & code {
    color: var(${O.foreground});
    font-family: monospace;
  }

  > pre {
    background-color: var(${O.computedOne});
    padding: 8px 4px;
    white-space: pre-wrap;
    word-break: break-all;
  }
`;
function CS({
  filters: e,
  onClick: t
}) {
  return /* @__PURE__ */ p.jsx(
    ES,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), t();
      },
      children: /* @__PURE__ */ p.jsxs(IS, { children: [
        /* @__PURE__ */ p.jsx(uS, {}),
        e !== 0 && /* @__PURE__ */ p.jsx($S, { children: e })
      ] })
    }
  );
}
const ES = L.div`
  width: 34px;
  height: 26px;
  position: relative;
`, $S = L.div`
  position: absolute;
  left: 18px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 16px;
  height: 16px;
  color: var(${O.buttonForeground});
  background-color: var(${O.buttonBackground});
  font-size: 12px;
`, IS = L.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: var(${O.buttonForeground});
  border: none;
  ${({ waiting: e }) => e && "gap: 8px;"}

  > span {
    flex: 1;
  }
  > svg {
    height: 16px;
    width: 16px;
    fill: var(${O.foreground});
  }
`;
function Kr(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
var ag = { exports: {} }, bS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", _S = bS, TS = _S;
function cg() {
}
function dg() {
}
dg.resetWarningCache = cg;
var PS = function() {
  function e(r, o, i, l, u, s) {
    if (s !== TS) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw a.name = "Invariant Violation", a;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: dg,
    resetWarningCache: cg
  };
  return n.PropTypes = n, n;
};
ag.exports = PS();
var jS = ag.exports;
const G = /* @__PURE__ */ ol(jS), pf = (e) => typeof e == "object" && e != null && e.nodeType === 1, hf = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", ju = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return hf(n.overflowY, t) || hf(n.overflowX, t) || ((r) => {
      const o = ((i) => {
        if (!i.ownerDocument || !i.ownerDocument.defaultView) return null;
        try {
          return i.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(r);
      return !!o && (o.clientHeight < r.scrollHeight || o.clientWidth < r.scrollWidth);
    })(e);
  }
  return !1;
}, ti = (e, t, n, r, o, i, l, u) => i < e && l > t || i > e && l < t ? 0 : i <= e && u <= n || l >= t && u >= n ? i - e - r : l > t && u < n || i < e && u > n ? l - t + o : 0, RS = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, AS = (e, t) => {
  var n, r, o, i;
  if (typeof document > "u") return [];
  const { scrollMode: l, block: u, inline: s, boundary: a, skipOverflowHiddenElements: c } = t, f = typeof a == "function" ? a : ($e) => $e !== a;
  if (!pf(e)) throw new TypeError("Invalid target");
  const g = document.scrollingElement || document.documentElement, k = [];
  let y = e;
  for (; pf(y) && f(y); ) {
    if (y = RS(y), y === g) {
      k.push(y);
      break;
    }
    y != null && y === document.body && ju(y) && !ju(document.documentElement) || y != null && ju(y, c) && k.push(y);
  }
  const $ = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, _ = (i = (o = window.visualViewport) == null ? void 0 : o.height) != null ? i : innerHeight, { scrollX: h, scrollY: d } = window, { height: v, width: E, top: T, right: j, bottom: M, left: R } = e.getBoundingClientRect(), { top: X, right: B, bottom: se, left: ue } = (($e) => {
    const J = window.getComputedStyle($e);
    return { top: parseFloat(J.scrollMarginTop) || 0, right: parseFloat(J.scrollMarginRight) || 0, bottom: parseFloat(J.scrollMarginBottom) || 0, left: parseFloat(J.scrollMarginLeft) || 0 };
  })(e);
  let te = u === "start" || u === "nearest" ? T - X : u === "end" ? M + se : T + v / 2 - X + se, ae = s === "center" ? R + E / 2 - ue + B : s === "end" ? j + B : R - ue;
  const ce = [];
  for (let $e = 0; $e < k.length; $e++) {
    const J = k[$e], { height: N, width: V, top: K, right: S, bottom: w, left: m } = J.getBoundingClientRect();
    if (l === "if-needed" && T >= 0 && R >= 0 && M <= _ && j <= $ && T >= K && M <= w && R >= m && j <= S) return ce;
    const C = getComputedStyle(J), I = parseInt(C.borderLeftWidth, 10), x = parseInt(C.borderTopWidth, 10), D = parseInt(C.borderRightWidth, 10), P = parseInt(C.borderBottomWidth, 10);
    let Q = 0, H = 0;
    const U = "offsetWidth" in J ? J.offsetWidth - J.clientWidth - I - D : 0, z = "offsetHeight" in J ? J.offsetHeight - J.clientHeight - x - P : 0, ee = "offsetWidth" in J ? J.offsetWidth === 0 ? 0 : V / J.offsetWidth : 0, Y = "offsetHeight" in J ? J.offsetHeight === 0 ? 0 : N / J.offsetHeight : 0;
    if (g === J) Q = u === "start" ? te : u === "end" ? te - _ : u === "nearest" ? ti(d, d + _, _, x, P, d + te, d + te + v, v) : te - _ / 2, H = s === "start" ? ae : s === "center" ? ae - $ / 2 : s === "end" ? ae - $ : ti(h, h + $, $, I, D, h + ae, h + ae + E, E), Q = Math.max(0, Q + d), H = Math.max(0, H + h);
    else {
      Q = u === "start" ? te - K - x : u === "end" ? te - w + P + z : u === "nearest" ? ti(K, w, N, x, P + z, te, te + v, v) : te - (K + N / 2) + z / 2, H = s === "start" ? ae - m - I : s === "center" ? ae - (m + V / 2) + U / 2 : s === "end" ? ae - S + D + U : ti(m, S, V, I, D + U, ae, ae + E, E);
      const { scrollLeft: Z, scrollTop: oe } = J;
      Q = Y === 0 ? 0 : Math.max(0, Math.min(oe + Q / Y, J.scrollHeight - N / Y + z)), H = ee === 0 ? 0 : Math.max(0, Math.min(Z + H / ee, J.scrollWidth - V / ee + U)), te += oe - Q, ae += Z - H;
    }
    ce.push({ el: J, top: Q, left: H });
  }
  return ce;
};
var $r = function() {
  return $r = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, $r.apply(this, arguments);
};
var OS = 0;
function fg() {
}
function NS(e, t) {
  if (e) {
    var n = AS(e, {
      boundary: t,
      block: "nearest",
      scrollMode: "if-needed"
    });
    n.forEach(function(r) {
      var o = r.el, i = r.top, l = r.left;
      o.scrollTop = i, o.scrollLeft = l;
    });
  }
}
function vf(e, t, n) {
  var r = e === t || t instanceof n.Node && e.contains && e.contains(t);
  return r;
}
function mc(e, t) {
  var n;
  function r() {
    n && clearTimeout(n);
  }
  function o() {
    for (var i = arguments.length, l = new Array(i), u = 0; u < i; u++)
      l[u] = arguments[u];
    r(), n = setTimeout(function() {
      n = null, e.apply(void 0, l);
    }, t);
  }
  return o.cancel = r, o;
}
function en() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
      i[l - 1] = arguments[l];
    return t.some(function(u) {
      return u && u.apply(void 0, [r].concat(i)), r.preventDownshiftDefault || r.hasOwnProperty("nativeEvent") && r.nativeEvent.preventDownshiftDefault;
    });
  };
}
function Ru() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    t.forEach(function(o) {
      typeof o == "function" ? o(r) : o && (o.current = r);
    });
  };
}
function MS() {
  return String(OS++);
}
function DS(e) {
  var t = e.isOpen, n = e.resultCount, r = e.previousResultCount;
  return t ? n ? n !== r ? n + " result" + (n === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function Qs(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(n, r) {
    return n[r] = LS(t, r) ? t[r] : e[r], n;
  }, {});
}
function LS(e, t) {
  return e[t] !== void 0;
}
function zS(e) {
  var t = e.key, n = e.keyCode;
  return n >= 37 && n <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
function ni(e, t, n, r, o) {
  o === void 0 && (o = !1);
  var i = n.length;
  if (i === 0)
    return -1;
  var l = i - 1;
  (typeof e != "number" || e < 0 || e > l) && (e = t > 0 ? -1 : l + 1);
  var u = e + t;
  u < 0 ? u = o ? l : 0 : u > l && (u = o ? 0 : l);
  var s = el(u, t < 0, n, r, o);
  return s === -1 ? e >= i ? -1 : e : s;
}
function el(e, t, n, r, o) {
  o === void 0 && (o = !1);
  var i = n.length;
  if (t) {
    for (var l = e; l >= 0; l--)
      if (!r(n[l], l))
        return l;
  } else
    for (var u = e; u < i; u++)
      if (!r(n[u], u))
        return u;
  return o ? el(t ? i - 1 : 0, t, n, r) : -1;
}
function gf(e, t, n, r) {
  return r === void 0 && (r = !0), n && t.some(function(o) {
    return o && (vf(o, e, n) || r && vf(o, n.document.activeElement, n));
  });
}
var FS = mc(function(e) {
  pg(e).textContent = "";
}, 500);
function pg(e) {
  var t = e.getElementById("a11y-status-message");
  return t || (t = e.createElement("div"), t.setAttribute("id", "a11y-status-message"), t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-relevant", "additions text"), Object.assign(t.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  }), e.body.appendChild(t), t);
}
function BS(e, t) {
  if (!(!e || !t)) {
    var n = pg(t);
    n.textContent = e, FS(t);
  }
}
var HS = ["highlightedIndex", "items", "environment"], hg = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function VS(e, t, n) {
  var r = e.props, o = e.type, i = {};
  Object.keys(t).forEach(function(l) {
    US(l, e, t, n), n[l] !== t[l] && (i[l] = n[l]);
  }), r.onStateChange && Object.keys(i).length && r.onStateChange(re({
    type: o
  }, i));
}
function US(e, t, n, r) {
  var o = t.props, i = t.type, l = "on" + yc(e) + "Change";
  o[l] && r[e] !== void 0 && r[e] !== n[e] && o[l](re({
    type: i
  }, r));
}
function WS(e, t) {
  return t.changes;
}
function KS(e) {
  var t = e.selectedItem, n = e.itemToString;
  return t ? n(t) + " has been selected." : "";
}
var GS = mc(function(e, t) {
  BS(e(), t);
}, 200), QS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? b.useLayoutEffect : b.useEffect, YS = "useId" in Se ? function(t) {
  var n = t.id, r = t.labelId, o = t.menuId, i = t.getItemId, l = t.toggleButtonId, u = t.inputId, s = "downshift-" + Se.useId();
  n || (n = s);
  var a = b.useRef({
    labelId: r || n + "-label",
    menuId: o || n + "-menu",
    getItemId: i || function(c) {
      return n + "-item-" + c;
    },
    toggleButtonId: l || n + "-toggle-button",
    inputId: u || n + "-input"
  });
  return a.current;
} : function(t) {
  var n = t.id, r = n === void 0 ? "downshift-" + MS() : n, o = t.labelId, i = t.menuId, l = t.getItemId, u = t.toggleButtonId, s = t.inputId, a = b.useRef({
    labelId: o || r + "-label",
    menuId: i || r + "-menu",
    getItemId: l || function(c) {
      return r + "-item-" + c;
    },
    toggleButtonId: u || r + "-toggle-button",
    inputId: s || r + "-input"
  });
  return a.current;
};
function XS(e, t, n, r) {
  var o, i;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(r);
    o = n[t], i = t;
  } else
    i = t === void 0 ? n.indexOf(e) : t, o = e;
  return [o, i];
}
function ZS(e) {
  return /^\S{1}$/.test(e);
}
function yc(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function vg(e) {
  var t = b.useRef(e);
  return t.current = e, t;
}
function qS(e, t, n, r) {
  var o = b.useRef(), i = b.useRef(), l = b.useCallback(function(k, y) {
    i.current = y, k = Qs(k, y.props);
    var $ = e(k, y), _ = y.props.stateReducer(k, re({}, y, {
      changes: $
    }));
    return _;
  }, [e]), u = b.useReducer(l, t, n), s = u[0], a = u[1], c = vg(t), f = b.useCallback(function(k) {
    return a(re({
      props: c.current
    }, k));
  }, [c]), g = i.current;
  return b.useEffect(function() {
    var k = Qs(o.current, g == null ? void 0 : g.props), y = g && o.current && !r(k, s);
    y && VS(g, k, s), o.current = s;
  }, [s, g, r]), [s, f];
}
function JS(e, t, n, r) {
  var o = qS(e, t, n, r), i = o[0], l = o[1];
  return [Qs(i, t), l];
}
var lr = {
  itemToString: function(t) {
    return t ? String(t) : "";
  },
  itemToKey: function(t) {
    return t;
  },
  stateReducer: WS,
  getA11ySelectionMessage: KS,
  scrollIntoView: NS,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function Ut(e, t, n) {
  n === void 0 && (n = hg);
  var r = e["default" + yc(t)];
  return r !== void 0 ? r : n[t];
}
function Gr(e, t, n) {
  n === void 0 && (n = hg);
  var r = e[t];
  if (r !== void 0)
    return r;
  var o = e["initial" + yc(t)];
  return o !== void 0 ? o : Ut(e, t, n);
}
function ek(e) {
  var t = Gr(e, "selectedItem"), n = Gr(e, "isOpen"), r = Gr(e, "highlightedIndex"), o = Gr(e, "inputValue");
  return {
    highlightedIndex: r < 0 && t && n ? e.items.findIndex(function(i) {
      return e.itemToKey(i) === e.itemToKey(t);
    }) : r,
    isOpen: n,
    selectedItem: t,
    inputValue: o
  };
}
function tl(e, t, n) {
  var r = e.items, o = e.initialHighlightedIndex, i = e.defaultHighlightedIndex, l = e.itemToKey, u = t.selectedItem, s = t.highlightedIndex;
  return r.length === 0 ? -1 : o !== void 0 && s === o ? o : i !== void 0 ? i : u ? r.findIndex(function(a) {
    return l(u) === l(a);
  }) : n === 0 ? -1 : n < 0 ? r.length - 1 : 0;
}
function tk(e, t, n) {
  var r = b.useRef({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return b.useEffect(function() {
    if (!e)
      return fg;
    var o = t.map(function(c) {
      return c.current;
    });
    function i() {
      r.current.isTouchEnd = !1, r.current.isMouseDown = !0;
    }
    function l(c) {
      r.current.isMouseDown = !1, gf(c.target, o, e) || n();
    }
    function u() {
      r.current.isTouchEnd = !1, r.current.isTouchMove = !1;
    }
    function s() {
      r.current.isTouchMove = !0;
    }
    function a(c) {
      r.current.isTouchEnd = !0, !r.current.isTouchMove && !gf(c.target, o, e, !1) && n();
    }
    return e.addEventListener("mousedown", i), e.addEventListener("mouseup", l), e.addEventListener("touchstart", u), e.addEventListener("touchmove", s), e.addEventListener("touchend", a), function() {
      e.removeEventListener("mousedown", i), e.removeEventListener("mouseup", l), e.removeEventListener("touchstart", u), e.removeEventListener("touchmove", s), e.removeEventListener("touchend", a);
    };
  }, [e, n]), r.current;
}
var nk = function() {
  return fg;
};
function mf(e, t, n) {
  var r = n.highlightedIndex, o = n.items, i = n.environment, l = Kr(n, HS), u = gg();
  b.useEffect(function() {
    u || !(i != null && i.document) || GS(function() {
      return e(re({
        highlightedIndex: r,
        highlightedItem: o[r],
        resultCount: o.length
      }, l));
    }, i.document);
  }, t);
}
function rk(e) {
  var t = e.highlightedIndex, n = e.isOpen, r = e.itemRefs, o = e.getItemNodeFromIndex, i = e.menuElement, l = e.scrollIntoView, u = b.useRef(!0);
  return QS(function() {
    t < 0 || !n || !Object.keys(r.current).length || (u.current === !1 ? u.current = !0 : l(o(t), i));
  }, [t]), u;
}
function yf(e, t, n) {
  var r, o = ((r = e.items) == null ? void 0 : r.length) && t >= 0;
  return re({
    isOpen: !1,
    highlightedIndex: -1
  }, o && re({
    selectedItem: e.items[t],
    isOpen: Ut(e, "isOpen"),
    highlightedIndex: Ut(e, "highlightedIndex")
  }, n));
}
function ok(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
function gg() {
  var e = Se.useRef(!0);
  return Se.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
var mg = {
  environment: G.shape({
    addEventListener: G.func.isRequired,
    removeEventListener: G.func.isRequired,
    document: G.shape({
      createElement: G.func.isRequired,
      getElementById: G.func.isRequired,
      activeElement: G.any.isRequired,
      body: G.any.isRequired
    }).isRequired,
    Node: G.func.isRequired
  }),
  itemToString: G.func,
  itemToKey: G.func,
  stateReducer: G.func
}, yg = re({}, mg, {
  getA11yStatusMessage: G.func,
  highlightedIndex: G.number,
  defaultHighlightedIndex: G.number,
  initialHighlightedIndex: G.number,
  isOpen: G.bool,
  defaultIsOpen: G.bool,
  initialIsOpen: G.bool,
  selectedItem: G.any,
  initialSelectedItem: G.any,
  defaultSelectedItem: G.any,
  id: G.string,
  labelId: G.string,
  menuId: G.string,
  getItemId: G.func,
  toggleButtonId: G.string,
  onSelectedItemChange: G.func,
  onHighlightedIndexChange: G.func,
  onStateChange: G.func,
  onIsOpenChange: G.func,
  scrollIntoView: G.func
});
function ik(e, t, n) {
  var r = t.type, o = t.props, i;
  switch (r) {
    case n.ItemMouseMove:
      i = {
        highlightedIndex: t.disabled ? -1 : t.index
      };
      break;
    case n.MenuMouseLeave:
      i = {
        highlightedIndex: -1
      };
      break;
    case n.ToggleButtonClick:
    case n.FunctionToggleMenu:
      i = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : tl(o, e, 0)
      };
      break;
    case n.FunctionOpenMenu:
      i = {
        isOpen: !0,
        highlightedIndex: tl(o, e, 0)
      };
      break;
    case n.FunctionCloseMenu:
      i = {
        isOpen: !1
      };
      break;
    case n.FunctionSetHighlightedIndex:
      i = {
        highlightedIndex: t.highlightedIndex
      };
      break;
    case n.FunctionSetInputValue:
      i = {
        inputValue: t.inputValue
      };
      break;
    case n.FunctionReset:
      i = {
        highlightedIndex: Ut(o, "highlightedIndex"),
        isOpen: Ut(o, "isOpen"),
        selectedItem: Ut(o, "selectedItem"),
        inputValue: Ut(o, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return re({}, e, i);
}
function lk(e) {
  for (var t = e.keysSoFar, n = e.highlightedIndex, r = e.items, o = e.itemToString, i = e.isItemDisabled, l = t.toLowerCase(), u = 0; u < r.length; u++) {
    var s = (u + n + (t.length < 2 ? 1 : 0)) % r.length, a = r[s];
    if (a !== void 0 && o(a).toLowerCase().startsWith(l) && !i(a, s))
      return s;
  }
  return n;
}
$r($r({}, yg), { items: G.array.isRequired, isItemDisabled: G.func, getA11ySelectionMessage: G.func });
function uk(e) {
  var t = e.isOpen, n = e.resultCount, r = e.previousResultCount;
  return t ? n ? n !== r ? "".concat(n, " result").concat(n === 1 ? " is" : "s are", " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.") : "" : "No results are available." : "";
}
var sk = $r($r({}, lr), { getA11yStatusMessage: uk, isItemDisabled: function() {
  return !1;
} }), gi = 0, xc = 1, wc = 2, nl = 3, Sc = 4, kc = 5, Cc = 6, Ec = 7, $c = 8, Ic = 9, bc = 10, rl = 11, xg = 12, wg = 13, _c = 14, Sg = 15, kg = 16, Cg = 17, Eg = 18, Tc = 19, Ys = 20, $g = 21, Ig = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: gi,
  ToggleButtonKeyDownArrowDown: xc,
  ToggleButtonKeyDownArrowUp: wc,
  ToggleButtonKeyDownCharacter: nl,
  ToggleButtonKeyDownEscape: Sc,
  ToggleButtonKeyDownHome: kc,
  ToggleButtonKeyDownEnd: Cc,
  ToggleButtonKeyDownEnter: Ec,
  ToggleButtonKeyDownSpaceButton: $c,
  ToggleButtonKeyDownPageUp: Ic,
  ToggleButtonKeyDownPageDown: bc,
  ToggleButtonBlur: rl,
  MenuMouseLeave: xg,
  ItemMouseMove: wg,
  ItemClick: _c,
  FunctionToggleMenu: Sg,
  FunctionOpenMenu: kg,
  FunctionCloseMenu: Cg,
  FunctionSetHighlightedIndex: Eg,
  FunctionSelectItem: Tc,
  FunctionSetInputValue: Ys,
  FunctionReset: $g
});
function ak(e, t) {
  var n, r = t.type, o = t.props, i = t.altKey, l;
  switch (r) {
    case _c:
      l = {
        isOpen: Ut(o, "isOpen"),
        highlightedIndex: Ut(o, "highlightedIndex"),
        selectedItem: o.items[t.index]
      };
      break;
    case nl:
      {
        var u = t.key, s = "" + e.inputValue + u, a = !e.isOpen && e.selectedItem ? o.items.findIndex(function(k) {
          return o.itemToKey(k) === o.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, c = lk({
          keysSoFar: s,
          highlightedIndex: a,
          items: o.items,
          itemToString: o.itemToString,
          isItemDisabled: o.isItemDisabled
        });
        l = {
          inputValue: s,
          highlightedIndex: c,
          isOpen: !0
        };
      }
      break;
    case xc:
      {
        var f = e.isOpen ? ni(e.highlightedIndex, 1, o.items, o.isItemDisabled) : i && e.selectedItem == null ? -1 : tl(o, e, 1);
        l = {
          highlightedIndex: f,
          isOpen: !0
        };
      }
      break;
    case wc:
      if (e.isOpen && i)
        l = yf(o, e.highlightedIndex, !1);
      else {
        var g = e.isOpen ? ni(e.highlightedIndex, -1, o.items, o.isItemDisabled) : tl(o, e, -1);
        l = {
          highlightedIndex: g,
          isOpen: !0
        };
      }
      break;
    case Ec:
    case $c:
      l = yf(o, e.highlightedIndex, !1);
      break;
    case kc:
      l = {
        highlightedIndex: el(0, !1, o.items, o.isItemDisabled),
        isOpen: !0
      };
      break;
    case Cc:
      l = {
        highlightedIndex: el(o.items.length - 1, !0, o.items, o.isItemDisabled),
        isOpen: !0
      };
      break;
    case Ic:
      l = {
        highlightedIndex: ni(e.highlightedIndex, -10, o.items, o.isItemDisabled)
      };
      break;
    case bc:
      l = {
        highlightedIndex: ni(e.highlightedIndex, 10, o.items, o.isItemDisabled)
      };
      break;
    case Sc:
      l = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case rl:
      l = re({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((n = o.items) == null ? void 0 : n.length) && {
        selectedItem: o.items[e.highlightedIndex]
      });
      break;
    case Tc:
      l = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return ik(e, t, Ig);
  }
  return re({}, e, l);
}
var ck = ["onClick"], dk = ["onMouseLeave", "refKey", "ref"], fk = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], pk = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
bg.stateChangeTypes = Ig;
function bg(e) {
  e === void 0 && (e = {});
  var t = re({}, sk, e), n = t.items, r = t.scrollIntoView, o = t.environment, i = t.itemToString, l = t.getA11ySelectionMessage, u = t.getA11yStatusMessage, s = JS(ak, t, ek, ok), a = s[0], c = s[1], f = a.isOpen, g = a.highlightedIndex, k = a.selectedItem, y = a.inputValue, $ = b.useRef(null), _ = b.useRef(null), h = b.useRef({}), d = b.useRef(null), v = YS(t), E = b.useRef(), T = gg(), j = vg({
    state: a,
    props: t
  }), M = b.useCallback(function(m) {
    return h.current[v.getItemId(m)];
  }, [v]);
  mf(u, [f, g, y, n], re({
    previousResultCount: E.current,
    items: n,
    environment: o,
    itemToString: i
  }, a)), mf(l, [k], re({
    previousResultCount: E.current,
    items: n,
    environment: o,
    itemToString: i
  }, a));
  var R = rk({
    menuElement: _.current,
    highlightedIndex: g,
    isOpen: f,
    itemRefs: h,
    scrollIntoView: r,
    getItemNodeFromIndex: M
  });
  b.useEffect(function() {
    return d.current = mc(function(m) {
      m({
        type: Ys,
        inputValue: ""
      });
    }, 500), function() {
      d.current.cancel();
    };
  }, []), b.useEffect(function() {
    y && d.current(c);
  }, [c, y]), b.useEffect(function() {
    T || (E.current = n.length);
  }), b.useEffect(function() {
    var m = Gr(t, "isOpen");
    m && $.current && $.current.focus();
  }, []);
  var X = tk(o, [$, _], b.useCallback(function() {
    j.current.state.isOpen && c({
      type: rl
    });
  }, [c, j])), B = nk();
  b.useEffect(function() {
    f || (h.current = {});
  }, [f]);
  var se = b.useMemo(function() {
    return {
      ArrowDown: function(C) {
        C.preventDefault(), c({
          type: xc,
          altKey: C.altKey
        });
      },
      ArrowUp: function(C) {
        C.preventDefault(), c({
          type: wc,
          altKey: C.altKey
        });
      },
      Home: function(C) {
        C.preventDefault(), c({
          type: kc
        });
      },
      End: function(C) {
        C.preventDefault(), c({
          type: Cc
        });
      },
      Escape: function() {
        j.current.state.isOpen && c({
          type: Sc
        });
      },
      Enter: function(C) {
        C.preventDefault(), c({
          type: j.current.state.isOpen ? Ec : gi
        });
      },
      PageUp: function(C) {
        j.current.state.isOpen && (C.preventDefault(), c({
          type: Ic
        }));
      },
      PageDown: function(C) {
        j.current.state.isOpen && (C.preventDefault(), c({
          type: bc
        }));
      },
      " ": function(C) {
        C.preventDefault();
        var I = j.current.state;
        if (!I.isOpen) {
          c({
            type: gi
          });
          return;
        }
        I.inputValue ? c({
          type: nl,
          key: " "
        }) : c({
          type: $c
        });
      }
    };
  }, [c, j]), ue = b.useCallback(function() {
    c({
      type: Sg
    });
  }, [c]), te = b.useCallback(function() {
    c({
      type: Cg
    });
  }, [c]), ae = b.useCallback(function() {
    c({
      type: kg
    });
  }, [c]), ce = b.useCallback(function(m) {
    c({
      type: Eg,
      highlightedIndex: m
    });
  }, [c]), $e = b.useCallback(function(m) {
    c({
      type: Tc,
      selectedItem: m
    });
  }, [c]), J = b.useCallback(function() {
    c({
      type: $g
    });
  }, [c]), N = b.useCallback(function(m) {
    c({
      type: Ys,
      inputValue: m
    });
  }, [c]), V = b.useCallback(function(m) {
    var C = m === void 0 ? {} : m, I = C.onClick, x = Kr(C, ck), D = function() {
      var Q;
      (Q = $.current) == null || Q.focus();
    };
    return re({
      id: v.labelId,
      htmlFor: v.toggleButtonId,
      onClick: en(I, D)
    }, x);
  }, [v]), K = b.useCallback(function(m, C) {
    var I, x = m === void 0 ? {} : m, D = x.onMouseLeave, P = x.refKey, Q = P === void 0 ? "ref" : P, H = x.ref, U = Kr(x, dk), z = C === void 0 ? {} : C;
    z.suppressRefError;
    var ee = function() {
      c({
        type: xg
      });
    };
    return re((I = {}, I[Q] = Ru(H, function(Y) {
      _.current = Y;
    }), I.id = v.menuId, I.role = "listbox", I["aria-labelledby"] = U && U["aria-label"] ? void 0 : "" + v.labelId, I.onMouseLeave = en(D, ee), I), U);
  }, [c, B, v]), S = b.useCallback(function(m, C) {
    var I, x = m === void 0 ? {} : m, D = x.onBlur, P = x.onClick;
    x.onPress;
    var Q = x.onKeyDown, H = x.refKey, U = H === void 0 ? "ref" : H, z = x.ref, ee = Kr(x, fk), Y = C === void 0 ? {} : C;
    Y.suppressRefError;
    var Z = j.current.state, oe = function() {
      c({
        type: gi
      });
    }, W = function() {
      Z.isOpen && !X.isMouseDown && c({
        type: rl
      });
    }, de = function(Re) {
      var ve = zS(Re);
      ve && se[ve] ? se[ve](Re) : ZS(ve) && c({
        type: nl,
        key: ve
      });
    }, je = re((I = {}, I[U] = Ru(z, function(ie) {
      $.current = ie;
    }), I["aria-activedescendant"] = Z.isOpen && Z.highlightedIndex > -1 ? v.getItemId(Z.highlightedIndex) : "", I["aria-controls"] = v.menuId, I["aria-expanded"] = j.current.state.isOpen, I["aria-haspopup"] = "listbox", I["aria-labelledby"] = ee && ee["aria-label"] ? void 0 : "" + v.labelId, I.id = v.toggleButtonId, I.role = "combobox", I.tabIndex = 0, I.onBlur = en(D, W), I), ee);
    return ee.disabled || (je.onClick = en(P, oe), je.onKeyDown = en(Q, de)), je;
  }, [c, v, j, X, B, se]), w = b.useCallback(function(m) {
    var C, I = m === void 0 ? {} : m, x = I.item, D = I.index, P = I.onMouseMove, Q = I.onClick, H = I.onMouseDown;
    I.onPress;
    var U = I.refKey, z = U === void 0 ? "ref" : U, ee = I.disabled, Y = I.ref, Z = Kr(I, pk);
    ee !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var oe = j.current, W = oe.state, de = oe.props, je = XS(x, D, de.items, "Pass either item or index to getItemProps!"), ie = je[0], Re = je[1], ve = de.isItemDisabled(ie, Re), Be = function() {
      X.isTouchEnd || Re === W.highlightedIndex || (R.current = !1, c({
        type: wg,
        index: Re,
        disabled: ve
      }));
    }, q = function() {
      c({
        type: _c,
        index: Re
      });
    }, me = function(Je) {
      return Je.preventDefault();
    }, qe = re((C = {}, C[z] = Ru(Y, function(Ke) {
      Ke && (h.current[v.getItemId(Re)] = Ke);
    }), C["aria-disabled"] = ve, C["aria-selected"] = "" + (ie === W.selectedItem), C.id = v.getItemId(Re), C.role = "option", C), Z);
    return ve || (qe.onClick = en(Q, q)), qe.onMouseMove = en(P, Be), qe.onMouseDown = en(H, me), qe;
  }, [j, v, X, R, c]);
  return {
    // prop getters.
    getToggleButtonProps: S,
    getLabelProps: V,
    getMenuProps: K,
    getItemProps: w,
    // actions.
    toggleMenu: ue,
    openMenu: ae,
    closeMenu: te,
    setHighlightedIndex: ce,
    selectItem: $e,
    reset: J,
    setInputValue: N,
    // state.
    highlightedIndex: g,
    isOpen: f,
    selectedItem: k,
    inputValue: y
  };
}
re({}, yg, {
  items: G.array.isRequired,
  isItemDisabled: G.func,
  selectedItemChanged: G.func,
  getA11ySelectionMessage: G.func,
  inputValue: G.string,
  defaultInputValue: G.string,
  initialInputValue: G.string,
  inputId: G.string,
  onInputValueChange: G.func
});
re({}, lr, {
  getA11yStatusMessage: DS,
  isItemDisabled: function() {
    return !1;
  }
});
function hk(e) {
  var t = e.removedSelectedItem, n = e.itemToString;
  return n(t) + " has been removed.";
}
re({}, mg, {
  selectedItems: G.array,
  initialSelectedItems: G.array,
  defaultSelectedItems: G.array,
  getA11yRemovalMessage: G.func,
  activeIndex: G.number,
  initialActiveIndex: G.number,
  defaultActiveIndex: G.number,
  onActiveIndexChange: G.func,
  onSelectedItemsChange: G.func,
  keyNavigationNext: G.string,
  keyNavigationPrevious: G.string
});
lr.itemToString, lr.itemToKey, lr.stateReducer, lr.environment;
function vk(e) {
  return e ? e.label : "";
}
function Gl({
  options: e,
  placeholder: t,
  label: n,
  selected: r,
  onSelectedItemChange: o
}) {
  var c;
  const i = (c = e.filter((f) => f.value === r)) == null ? void 0 : c[0], { isOpen: l, getToggleButtonProps: u, getMenuProps: s, getItemProps: a } = bg({
    items: e,
    itemToString: vk,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: f }) => {
      o(f);
    }
  });
  return /* @__PURE__ */ p.jsxs(gk, { children: [
    /* @__PURE__ */ p.jsxs(mk, { children: [
      n !== void 0 && /* @__PURE__ */ p.jsx("div", { children: n }),
      /* @__PURE__ */ p.jsxs(yk, { ...u(), children: [
        /* @__PURE__ */ p.jsx("span", { children: i ? i.label : t ?? "" }),
        /* @__PURE__ */ p.jsx(gc, {})
      ] })
    ] }),
    /* @__PURE__ */ p.jsx(xk, { ...s(), isOpen: l, children: l && e.map((f, g) => /* @__PURE__ */ p.jsx("li", { ...a({ item: f, index: g }), children: /* @__PURE__ */ p.jsx("span", { children: f.label }) }, `${f.value}${g}`)) })
  ] });
}
const gk = L.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, mk = L.div`
  height: 40px;
  background-color: var(${O.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${O.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${O.focusBorder});
  }
  > div:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${O.inputPlaceholderForeground});
  }
`, yk = L.div`
  display: flex;
  color: var(${O.foreground});
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  > span {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > svg {
    fill: var(${O.foreground});
  }
`, xk = L.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${O.dropdownBackground});
  color: var(${O.dropdownForeground});
  ${({ isOpen: e }) => e && `
    border: 1px solid var(${O.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${O.listHoverBackground});
  }
`;
function wk() {
  const e = wt((r) => r.audit.filter), t = it(), n = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ p.jsx(Sk, { children: /* @__PURE__ */ p.jsx(
    Gl,
    {
      label: "Severity",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? t(ze({ ...e, severity: r == null ? void 0 : r.value })) : t(ze({ ...e, severity: void 0 }));
      },
      selected: (e == null ? void 0 : e.severity) || "all"
    }
  ) });
}
const Sk = L.div`
  width: 264px;
`;
function kk() {
  const e = it();
  return /* @__PURE__ */ p.jsxs(
    Ck,
    {
      onClick: (t) => {
        e(ze({})), t.preventDefault(), t.stopPropagation();
      },
      children: [
        /* @__PURE__ */ p.jsx(ug, {}),
        " ",
        /* @__PURE__ */ p.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const Ck = L.div`
  width: 264px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  > svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
function Ek() {
  const { issueTitles: e, filter: t } = wt((r) => r.audit), n = it();
  return /* @__PURE__ */ p.jsx($k, { children: /* @__PURE__ */ p.jsx(
    Gl,
    {
      label: "Rules",
      options: [{ label: "All", value: "all" }, ...e],
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? n(ze({ ...t, rule: r == null ? void 0 : r.value })) : n(ze({ ...t, rule: void 0 }));
      },
      selected: (t == null ? void 0 : t.severity) || "all"
    }
  ) });
}
const $k = L.div`
  width: 264px;
`;
function Ik() {
  const e = wt((r) => r.audit.filter), t = it(), n = [
    { label: "All", value: "all" },
    { label: "Security", value: "security" },
    { label: "Data validation", value: "datavalidation" },
    { label: "OpenAPI format requirements", value: "oasconformance" }
  ];
  return /* @__PURE__ */ p.jsx(bk, { children: /* @__PURE__ */ p.jsx(
    Gl,
    {
      label: "Category",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? t(ze({ ...e, domain: r == null ? void 0 : r.value })) : t(ze({ ...e, domain: void 0 }));
      },
      selected: (e == null ? void 0 : e.domain) || "all"
    }
  ) });
}
const bk = L.div`
  width: 264px;
`, _k = {
  security: [
    { label: "All", value: "all" },
    { label: "Authentication", value: "authentication" },
    { label: "Authorization", value: "authorization" },
    { label: "Transport", value: "transport" }
  ],
  oasconformance: [
    { label: "All", value: "all" },
    { label: "Structure", value: "validation" },
    { label: "Semantic", value: "semantics" },
    { label: "Best practices", value: "bestpractices" }
  ],
  datavalidation: [
    { label: "All", value: "all" },
    { label: "Parameters", value: "parameters" },
    { label: "Paths", value: "paths" },
    { label: "Schema", value: "schema" },
    { label: "Response headers", value: "responseheader" },
    { label: "Response definition", value: "responsedefinition" }
  ]
};
function Tk() {
  const e = wt((r) => r.audit.filter), t = it(), n = e.domain !== void 0 ? _k[e.domain] : [];
  return /* @__PURE__ */ p.jsx(Pk, { children: /* @__PURE__ */ p.jsx(
    Gl,
    {
      label: "Group",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? t(ze({ ...e, group: r == null ? void 0 : r.value })) : t(ze({ ...e, group: void 0 }));
      },
      selected: (e == null ? void 0 : e.group) || "all"
    }
  ) });
}
const Pk = L.div`
  width: 264px;
`;
function jk() {
  const { filtered: e, filter: t } = wt((u) => u.audit), n = it(), [r, o] = b.useState(!0), l = ["rule", "domain", "group", "severity"].filter((u) => t && t[u] !== void 0).length;
  return /* @__PURE__ */ p.jsxs(Rk, { children: [
    t.ids !== void 0 && /* @__PURE__ */ p.jsxs(xf, { children: [
      /* @__PURE__ */ p.jsxs("div", { children: [
        e.length,
        " issues"
      ] }),
      /* @__PURE__ */ p.jsxs(
        Ok,
        {
          onClick: (u) => {
            n(ze({})), u.preventDefault(), u.stopPropagation();
          },
          children: [
            /* @__PURE__ */ p.jsx(ug, {}),
            " ",
            /* @__PURE__ */ p.jsx("span", { children: "Reset filters" })
          ]
        }
      )
    ] }),
    t.ids === void 0 && /* @__PURE__ */ p.jsxs(xf, { children: [
      /* @__PURE__ */ p.jsxs("div", { children: [
        e.length,
        " issues"
      ] }),
      /* @__PURE__ */ p.jsx(CS, { filters: l, onClick: () => o(!r) })
    ] }),
    !r && /* @__PURE__ */ p.jsxs(Ak, { children: [
      /* @__PURE__ */ p.jsx(Ik, {}),
      /* @__PURE__ */ p.jsx(Tk, {}),
      /* @__PURE__ */ p.jsx(wk, {}),
      /* @__PURE__ */ p.jsx(Ek, {}),
      /* @__PURE__ */ p.jsx(kk, {})
    ] })
  ] });
}
const Rk = L.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, xf = L.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, Ak = L.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`, Ok = L.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
function Nk() {
  const {
    kdb: e,
    filtered: t,
    audit: { filename: n }
  } = wt((o) => o.audit), r = it();
  return /* @__PURE__ */ p.jsxs(Mk, { children: [
    /* @__PURE__ */ p.jsx(jk, {}),
    t.map((o, i) => /* @__PURE__ */ p.jsxs(Ws, { children: [
      /* @__PURE__ */ p.jsx(Ks, { children: o.description }),
      /* @__PURE__ */ p.jsx(ir, { children: /* @__PURE__ */ p.jsxs(ir, { children: [
        /* @__PURE__ */ p.jsxs(bt, { children: [
          /* @__PURE__ */ p.jsx($o, {}),
          " ",
          yv[o.criticality]
        ] }),
        /* @__PURE__ */ p.jsxs(bt, { children: [
          /* @__PURE__ */ p.jsx(Us, {}),
          " Score Impact ",
          o.displayScore
        ] }),
        /* @__PURE__ */ p.jsxs(bt, { children: [
          /* @__PURE__ */ p.jsx(Ji, {}),
          /* @__PURE__ */ p.jsxs(
            "a",
            {
              href: "#",
              onClick: (l) => {
                l.preventDefault(), l.stopPropagation(), r(
                  tc({
                    uri: o.documentUri,
                    line: o.lineNo,
                    pointer: o.pointer
                  })
                );
              },
              children: [
                o.filename,
                ":",
                o.lineNo + 1
              ]
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs(bt, { children: [
          /* @__PURE__ */ p.jsx(lg, {}),
          /* @__PURE__ */ p.jsx(
            "a",
            {
              href: "#",
              onClick: (l) => {
                l.preventDefault(), l.stopPropagation(), r(nc(o.id));
              },
              children: "Issue ID"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ p.jsx(
        Gs,
        {
          lang: n.toLowerCase().endsWith("json") ? "json" : "yaml",
          article: e[o.id],
          openLink: (l) => {
            r(Qi(l));
          }
        }
      )
    ] }, `issue-${i}`))
  ] });
}
const Mk = L.div``;
function Dk({ onShowIssues: e }) {
  return /* @__PURE__ */ p.jsx(
    Lk,
    {
      onClick: (t) => {
        t.preventDefault(), t.stopPropagation(), e();
      },
      children: /* @__PURE__ */ p.jsxs(zk, { children: [
        /* @__PURE__ */ p.jsx($o, {}),
        /* @__PURE__ */ p.jsxs("div", { children: [
          "Your API has structural or semantic issues in its OpenAPI format. Fix these issues first and run Security Audit again to get the full audit report. Click ",
          /* @__PURE__ */ p.jsx("a", { href: "#", children: "here" }),
          " to display the issues."
        ] })
      ] })
    }
  );
}
const Lk = L.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${O.errorBorder});
  background-color: var(${O.errorBackground});
  color: var(${O.errorForeground});
  cursor: pointer;
`, zk = L.div`
  display: flex;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  > svg {
    fill: var(${O.errorForeground});
  }
  > div:nth-child(2) {
    flex: 1;
  }
`;
function wf({ issueId: e, issues: t }) {
  const n = it(), [r, o] = b.useState(!1), i = t.filter((s) => s.id === e), l = r ? i.length : 4, u = i.slice(0, l);
  return u.sort((s, a) => {
    const c = s.filename.localeCompare(a.filename);
    return c === 0 ? s.lineNo - a.lineNo : c;
  }), /* @__PURE__ */ p.jsxs(Fk, { children: [
    /* @__PURE__ */ p.jsxs("h2", { children: [
      i.length,
      " results with this issue"
    ] }),
    /* @__PURE__ */ p.jsx("div", { children: u.map((s) => /* @__PURE__ */ p.jsxs(Bk, { children: [
      /* @__PURE__ */ p.jsx(Ji, {}),
      /* @__PURE__ */ p.jsxs(
        "a",
        {
          href: "#",
          onClick: (a) => {
            a.preventDefault(), a.stopPropagation(), n(
              tc({
                uri: s.documentUri,
                line: s.lineNo,
                pointer: s.pointer
              })
            );
          },
          children: [
            s.filename,
            ":",
            s.lineNo + 1
          ]
        }
      )
    ] }, `${s.filename}:${s.lineNo}`)) }),
    !r && i.length > u.length && /* @__PURE__ */ p.jsxs(
      "a",
      {
        href: "#",
        onClick: (s) => {
          s.preventDefault(), s.stopPropagation(), o(!0);
        },
        children: [
          "Show ",
          i.length - u.length,
          " more"
        ]
      }
    ),
    r && /* @__PURE__ */ p.jsx(
      "a",
      {
        href: "#",
        onClick: (s) => {
          s.preventDefault(), s.stopPropagation(), o(!1);
        },
        children: "Show less"
      }
    )
  ] });
}
const Fk = L.div`
  padding-top: 8px;
  padding-left: 8px;
  > h2 {
    margin: 0;
    font-weight: 700;
    font-size: var(${O.fontSize});
  }
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`, Bk = L.div`
  display: flex;
  align-items: center;
  margin: 4px;
  gap: 4px;
  > svg {
    fill: var(${O.foreground});
  }
`;
function Hk() {
  const {
    stats: e,
    issues: t,
    audit: { filename: n }
  } = wt((l) => l.audit), r = it(), o = e.byIssue.filter((l) => l.important).slice().sort((l, u) => u.count - l.count).slice(0, 4), i = e.byIssue.filter((l) => l.important).slice().sort((l, u) => u.score - l.score).slice(0, 4);
  return /* @__PURE__ */ p.jsxs(Vk, { children: [
    /* @__PURE__ */ p.jsx(Sf, { children: "Most common issues" }),
    o.map((l, u) => /* @__PURE__ */ p.jsxs(Ws, { children: [
      /* @__PURE__ */ p.jsx(Ks, { children: l.title }),
      /* @__PURE__ */ p.jsx(ir, { children: /* @__PURE__ */ p.jsxs(ir, { children: [
        /* @__PURE__ */ p.jsxs(bt, { children: [
          /* @__PURE__ */ p.jsx($o, {}),
          " ",
          yv[l.criticality]
        ] }),
        /* @__PURE__ */ p.jsxs(bt, { children: [
          /* @__PURE__ */ p.jsx(Us, {}),
          " Score impact: ",
          l.displayScore
        ] }),
        /* @__PURE__ */ p.jsxs(bt, { children: [
          /* @__PURE__ */ p.jsx(Ji, {}),
          " ",
          l.count,
          " result(s)"
        ] }),
        /* @__PURE__ */ p.jsxs(bt, { children: [
          /* @__PURE__ */ p.jsx(lg, {}),
          " ",
          /* @__PURE__ */ p.jsx(
            "a",
            {
              href: "#",
              onClick: (s) => {
                s.preventDefault(), s.stopPropagation(), r(nc(l.id));
              },
              children: "Issue ID"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx(wf, { issueId: l.id, issues: t }),
        /* @__PURE__ */ p.jsx(
          Gs,
          {
            lang: n.toLowerCase().endsWith("json") ? "json" : "yaml",
            article: l.kdb,
            openLink: (s) => r(Qi(s))
          }
        )
      ] })
    ] }, `issue-${u}`)),
    /* @__PURE__ */ p.jsx(Sf, { children: "Opportunities" }),
    i.map((l, u) => /* @__PURE__ */ p.jsxs(Ws, { children: [
      /* @__PURE__ */ p.jsx(Ks, { children: l.title }),
      /* @__PURE__ */ p.jsx(ir, { children: /* @__PURE__ */ p.jsxs(ir, { children: [
        /* @__PURE__ */ p.jsxs(bt, { children: [
          /* @__PURE__ */ p.jsx($o, {}),
          " Count ",
          l.count
        ] }),
        /* @__PURE__ */ p.jsxs(bt, { children: [
          /* @__PURE__ */ p.jsx(Us, {}),
          " Score impact: ",
          l.displayScore
        ] }),
        /* @__PURE__ */ p.jsxs(bt, { children: [
          /* @__PURE__ */ p.jsx(Ji, {}),
          " ",
          l.count,
          " result(s)"
        ] })
      ] }) }),
      /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx(wf, { issueId: l.id, issues: t }),
        /* @__PURE__ */ p.jsx(
          Gs,
          {
            lang: n.toLowerCase().endsWith("json") ? "json" : "yaml",
            article: l.kdb,
            openLink: (s) => r(Qi(s))
          }
        )
      ] })
    ] }, `issue-${u}`))
  ] });
}
const Vk = L.div`
  position: relative;
`, Sf = L.div`
  margin: 14px;
  font-size: 12px;
  font-weight: 500;
`;
function Uk({
  value: e,
  onChange: t
}) {
  return /* @__PURE__ */ p.jsx(
    Wk,
    {
      active: e,
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), t(!e);
      },
      children: /* @__PURE__ */ p.jsx(Kk, { active: e })
    }
  );
}
const Wk = L.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 34px;
  height: 17px;
  border-radius: 30px;
  border: 1px solid var(${O.border});
  ${({ active: e }) => e ? `background-color: var(${O.buttonBackground}); justify-content: end;` : `background-color: var(${O.background}); justify-content: start;`}
`, Kk = L.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  margin-right: 2px;
  margin-left: 2px;
  ${({ active: e }) => e ? `background-color: var(${O.buttonForeground}); border: 1px solid var(${O.buttonForeground});` : `background-color: var(${O.border}); border: 1px solid var(${O.border});`}
`;
function Gk({
  isOpen: e,
  style: t,
  onClick: n
}) {
  return e ? /* @__PURE__ */ p.jsx(
    og,
    {
      onClick: n,
      style: {
        cursor: "pointer",
        fill: `var(${O.foreground})`,
        ...t
      }
    }
  ) : /* @__PURE__ */ p.jsx(
    gc,
    {
      onClick: n,
      style: {
        cursor: "pointer",
        fill: `var(${O.foreground})`,
        ...t
      }
    }
  );
}
function Qk({
  sqgs: e,
  selected: t,
  onSelect: n
}) {
  return /* @__PURE__ */ p.jsx(Yk, { children: e.map((r, o) => /* @__PURE__ */ p.jsx(
    Xk,
    {
      selected: r.id === t,
      onClick: (i) => {
        i.preventDefault(), i.stopPropagation(), t !== r.id && n(o);
      },
      children: r.name
    },
    r.id
  )) });
}
const Yk = L.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`, Xk = L.div`
  display: flex;
  height: 28px;
  min-width: 100px;
  border-radius: 16px;
  margin-left: 4px;
  margin-right: 4px;
  padding-left: 4px;
  padding-right: 4px;
  border: 1px solid var(${O.border});
  color: var(${O.foreground});
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${({ selected: e }) => e ? `background-color: var(${O.computedTwo});` : `background-color: var(${O.computedOne});`}
`;
function Zk({ sqg: e, summary: t }) {
  const n = e.directives.minimumAssessmentScores;
  return e.directives.subcategoryRules, e.directives.issueRules, /* @__PURE__ */ p.jsxs(qk, { children: [
    /* @__PURE__ */ p.jsx("h4", { children: "Minimum acceptable score" }),
    /* @__PURE__ */ p.jsxs(Jk, { children: [
      /* @__PURE__ */ p.jsx("div", { children: "Score" }),
      /* @__PURE__ */ p.jsx("div", { children: "current" }),
      /* @__PURE__ */ p.jsx("div", { children: "Minimum acceptable" })
    ] }),
    /* @__PURE__ */ p.jsxs(Au, { children: [
      /* @__PURE__ */ p.jsx("div", { children: "Global score" }),
      /* @__PURE__ */ p.jsx(Wn, { highlight: t.all < n.global, children: t.all }),
      /* @__PURE__ */ p.jsx(Wn, { children: n.global })
    ] }),
    /* @__PURE__ */ p.jsxs(Au, { children: [
      /* @__PURE__ */ p.jsx("div", { children: "Security score" }),
      /* @__PURE__ */ p.jsx(Wn, { highlight: t.security.value < n.security, children: t.security.value }),
      /* @__PURE__ */ p.jsx(Wn, { children: n.security })
    ] }),
    /* @__PURE__ */ p.jsxs(Au, { children: [
      /* @__PURE__ */ p.jsx("div", { children: "Data validation score" }),
      /* @__PURE__ */ p.jsx(Wn, { highlight: t.datavalidation.value < n.dataValidation, children: t.datavalidation.value }),
      /* @__PURE__ */ p.jsx(Wn, { children: n.dataValidation })
    ] })
  ] });
}
const qk = L.div``, Jk = L.div`
  display: flex;
  background-color: var(${O.computedTwo});
  border-radius: 2px;
  padding: 8px;
  > div {
    flex: 1;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }
`, Au = L.div`
  display: flex;
  > div {
    flex: 1;
    margin: 8px;
  }
`, Wn = L.div`
  ${({ highlight: e }) => e && "font-weight: 700;"}
`;
function eC({ sqg: e, stats: t }) {
  const n = it(), r = e.directives.subcategoryRules, o = t.byGroup, i = {
    security: [
      {
        name: "Authentication",
        domain: "security",
        group: "authentication",
        level: r.security.authentication,
        violations: tn(r.security.authentication, o.security.authentication)
      },
      {
        name: "Authorization",
        domain: "security",
        group: "authorization",
        level: r.security.authorization,
        violations: tn(r.security.authorization, o.security.authorization)
      },
      {
        name: "Transport",
        domain: "security",
        group: "transport",
        level: r.security.transport,
        violations: tn(r.security.transport, o.security.transport)
      }
    ],
    data: [
      {
        name: "Paths",
        domain: "datavalidation",
        group: "paths",
        level: r.dataValidation.paths,
        violations: tn(r.dataValidation.paths, o.datavalidation.paths)
      },
      {
        name: "Parameters",
        domain: "datavalidation",
        group: "parameters",
        level: r.dataValidation.parameters,
        violations: tn(
          r.dataValidation.parameters,
          t.byGroup.datavalidation.parameters
        )
      },
      {
        name: "Schema",
        domain: "datavalidation",
        group: "schema",
        level: r.dataValidation.schema,
        violations: tn(r.dataValidation.schema, o.datavalidation.schema)
      },
      {
        name: "Response Definition",
        domain: "datavalidation",
        group: "responsedefinition",
        level: r.dataValidation.responseDefinition,
        violations: tn(
          r.dataValidation.responseDefinition,
          o.datavalidation.responsedefinition
        )
      },
      {
        name: "Response Headers",
        domain: "datavalidation",
        group: "responseheader",
        level: r.dataValidation.responseHeaders,
        violations: tn(
          r.dataValidation.responseHeaders,
          o.datavalidation.responseheader
        )
      }
    ]
  };
  return /* @__PURE__ */ p.jsxs(tC, { children: [
    /* @__PURE__ */ p.jsx("h4", { children: "Allowed issue security levels" }),
    /* @__PURE__ */ p.jsxs(nC, { children: [
      /* @__PURE__ */ p.jsx("div", { children: "Category" }),
      /* @__PURE__ */ p.jsx("div", { children: "threshold" }),
      /* @__PURE__ */ p.jsx("div", { children: "issues found" })
    ] }),
    /* @__PURE__ */ p.jsx(kf, { children: "Security" }),
    i.security.filter((l) => l.violations.length > 0).map((l, u) => /* @__PURE__ */ p.jsxs(Cf, { children: [
      /* @__PURE__ */ p.jsx("div", { children: l.name }),
      /* @__PURE__ */ p.jsx("div", { children: Ef(l.level) }),
      /* @__PURE__ */ p.jsx(
        "a",
        {
          href: "#",
          onClick: (s) => {
            s.stopPropagation(), s.preventDefault(), n(mn("issues")), n(
              ze({
                severity: l.violations[0].level,
                domain: l.domain,
                group: l.group
              })
            );
          },
          children: l.violations.map((s) => `${s.level} ${s.count}`).join(", ")
        }
      )
    ] }, u)),
    /* @__PURE__ */ p.jsx(kf, { children: "Data validation" }),
    i.data.filter((l) => l.violations.length > 0).map((l, u) => /* @__PURE__ */ p.jsxs(Cf, { children: [
      /* @__PURE__ */ p.jsx("div", { children: l.name }),
      /* @__PURE__ */ p.jsx("div", { children: Ef(l.level) }),
      /* @__PURE__ */ p.jsx(
        "a",
        {
          href: "#",
          onClick: (s) => {
            s.stopPropagation(), s.preventDefault(), n(mn("issues")), n(
              ze({
                severity: l.violations[0].level,
                domain: l.domain,
                group: l.group
              })
            );
          },
          children: l.violations.map((s) => `${s.level} ${s.count}`).join(", ")
        }
      )
    ] }, u))
  ] });
}
const tC = L.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`, nC = L.div`
  display: flex;
  background-color: var(${O.computedTwo});
  border-radius: 2px;
  padding: 8px;
  > div {
    flex: 1;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }
`, kf = L.div`
  display: flex;
  background-color: var(${O.computedOne});
  border-radius: 2px;
  padding: 8px;
`, Cf = L.div`
  display: flex;
  > a {
    flex: 1;
    text-transform: capitalize;
    margin: 8px;
  }
  > div {
    flex: 1;
    margin: 8px;
  }
`;
function tn(e, t) {
  if (e === "none")
    return [];
  const n = Ms.indexOf(e), r = [];
  for (const o of Ms.slice(n))
    t[o] > 0 && r.push({ level: o, count: t[o] });
  return r;
}
const rC = {
  info: "All issues are rejected",
  low: "Issues up to level Info allowed, levels Low to Critical rejected",
  medium: "Issues up to level Low allowed, levels Medium to Critical rejected",
  high: "Issues up to level Medium allowed, levels High to Critical rejected",
  critical: "Only Critical issues are rejected",
  none: "No restrictions"
};
function Ef(e) {
  return rC[e];
}
function oC({ sqg: e, stats: t }) {
  const n = it(), r = e.directives.issueRules, i = t.byIssue.filter((l) => r.includes(l.id));
  return i.length === 0 ? null : /* @__PURE__ */ p.jsxs(iC, { children: [
    /* @__PURE__ */ p.jsx("h4", { children: "Forbidden issues with problem found" }),
    i.map((l) => /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx(
      "a",
      {
        href: "#",
        onClick: (u) => {
          u.preventDefault(), u.stopPropagation(), n(mn("issues")), n(ze({ rule: l.id }));
        },
        children: l.title
      }
    ) }))
  ] });
}
const iC = L.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
function lC({
  compliance: e,
  summary: t,
  stats: n
}) {
  const [r, o] = b.useState(0), i = e.sqgsDetail[r];
  return /* @__PURE__ */ p.jsxs(uC, { children: [
    /* @__PURE__ */ p.jsx(
      Qk,
      {
        sqgs: e.sqgsDetail,
        onSelect: o,
        selected: e.sqgsDetail[r].id
      }
    ),
    /* @__PURE__ */ p.jsx(Zk, { sqg: i, summary: t }),
    /* @__PURE__ */ p.jsx(eC, { sqg: i, stats: n }),
    /* @__PURE__ */ p.jsx(oC, { sqg: i, stats: n })
  ] });
}
const uC = L.div`
  padding: 8px;
  color: var(${O.foreground});
  background-color: var(${O.background});
  border-top: 1px solid var(${O.errorBorder});
`;
function sC({ message: e }) {
  return /* @__PURE__ */ p.jsx(_g, { children: /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx(ig, {}) }),
    /* @__PURE__ */ p.jsx("span", { children: e })
  ] }) });
}
const _g = L.div`
  display: flex;
  flex-direction: column;
  > div:first-child {
    display: flex;
    align-items: center;
    gap: 8px;
    > div {
      display: flex;
      align-items: center;
    }
    > div > svg {
      fill: var(${O.foreground});
    }
  }
  border: 1px solid var(${O.border});
  border-radius: 2px;
  color: var(${O.foreground});
  padding: 8px;
  gap: 8px;
`;
L(_g)`
  border: 1px solid var(${O.errorBorder});
  background-color: var(${O.errorBackground});
  color: var(${O.errorForeground});
  > div:first-child {
    > div {
      display: flex;
      align-items: center;
    }
    > div > svg {
      fill: var(${O.errorForeground});
    }
  }
`;
function aC() {
  const { compliance: e, summary: t } = wt((s) => s.audit.audit), n = wt((s) => s.audit.stats), r = wt((s) => s.audit.sqgTodo), o = it(), i = (s) => {
    o(sx(s));
  }, [l, u] = b.useState(!1);
  return e === void 0 ? null : e.acceptance === "yes" ? /* @__PURE__ */ p.jsx(fC, { children: /* @__PURE__ */ p.jsx(sC, { message: "Security quality gates passed" }) }) : /* @__PURE__ */ p.jsxs(cC, { children: [
    /* @__PURE__ */ p.jsxs(dC, { children: [
      /* @__PURE__ */ p.jsx($o, {}),
      /* @__PURE__ */ p.jsx("div", { children: "Security quality gates failed" }),
      /* @__PURE__ */ p.jsx(Uk, { value: r, onChange: i }),
      "Show only SQG to-do list",
      /* @__PURE__ */ p.jsx(
        Gk,
        {
          isOpen: l,
          onClick: () => u(!l),
          style: { width: 14, height: 14 }
        }
      )
    ] }),
    l && /* @__PURE__ */ p.jsx(lC, { compliance: e, summary: t, stats: n })
  ] });
}
const cC = L.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${O.errorBorder});
  background-color: var(${O.errorBackground});
  color: var(${O.errorForeground});
`, dC = L.div`
  display: flex;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  > svg {
    fill: var(${O.errorForeground});
  }
  > div:nth-child(2) {
    flex: 1;
  }
`, fC = L.div`
  margin: 8px;
`;
function pC() {
  const e = wt((n) => n.audit.audit.summary), t = it();
  return /* @__PURE__ */ p.jsx(hC, { children: /* @__PURE__ */ p.jsxs(vC, { children: [
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        onClick: (n) => {
          n.preventDefault(), n.stopPropagation(), t(mn("issues")), t(ze({}));
        },
        children: [
          /* @__PURE__ */ p.jsx("div", { children: "Global score" }),
          /* @__PURE__ */ p.jsxs("div", { children: [
            e.all,
            "/100"
          ] }),
          /* @__PURE__ */ p.jsx("div", {})
        ]
      }
    ),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        onClick: (n) => {
          n.preventDefault(), n.stopPropagation(), t(mn("issues")), t(ze({ domain: "security" }));
        },
        children: [
          /* @__PURE__ */ p.jsx("div", { children: "Security score" }),
          /* @__PURE__ */ p.jsxs("div", { children: [
            e.security.value,
            "/",
            e.security.max
          ] }),
          /* @__PURE__ */ p.jsx("div", {})
        ]
      }
    ),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        onClick: (n) => {
          n.preventDefault(), n.stopPropagation(), t(mn("issues")), t(ze({ domain: "datavalidation" }));
        },
        children: [
          /* @__PURE__ */ p.jsx("div", { children: "Data validation score" }),
          /* @__PURE__ */ p.jsxs("div", { children: [
            e.datavalidation.value,
            "/",
            e.datavalidation.max
          ] }),
          /* @__PURE__ */ p.jsx("div", {})
        ]
      }
    )
  ] }) });
}
const hC = L.div`
  margin: 8px;
`, vC = L.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 8px;
    border: 1px solid var(${O.border});
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      background-color: var(${O.computedOne});
    }
    & > div:nth-child(1) {
      font-weight: 700;
      font-size: 12px;
    }
    & > div:nth-child(2) {
      font-size: 16px;
      font-weight: 700;
    }
    & > div:nth-child(3) {
      font-size: 12px;
    }
  }
`;
function $f() {
  const e = it(), { tab: t, audit: n } = wt((r) => r.audit);
  return /* @__PURE__ */ p.jsxs(gC, { children: [
    n.valid === !1 && /* @__PURE__ */ p.jsx(
      Dk,
      {
        onShowIssues: () => {
          e(mn("issues")), e(ze({ domain: "oasconformance", severity: "critical" }));
        }
      }
    ),
    /* @__PURE__ */ p.jsx(pC, {}),
    /* @__PURE__ */ p.jsx(aC, {}),
    /* @__PURE__ */ p.jsx(
      aS,
      {
        activeTab: t,
        setActiveTab: (r) => e(mn(r)),
        tabs: [
          {
            id: "priority",
            title: "Priority",
            content: /* @__PURE__ */ p.jsx(Hk, {})
          },
          { id: "issues", title: "Issues", content: /* @__PURE__ */ p.jsx(Nk, {}) }
        ]
      }
    )
  ] });
}
const gC = L.div``;
function mC() {
  return /* @__PURE__ */ p.jsxs(yC, { children: [
    /* @__PURE__ */ p.jsx(ig, {}),
    "There is no Security Audit report available for this file"
  ] });
}
const yC = L.div`
  display: flex;
  margin: 8px;
  padding: 8px;
  gap: 8px;
  align-items: center;
  border: 1px solid var(${O.border});
  font-size: 14px;
  > svg {
    color: var(${O.foreground});
  }
`;
function xC() {
  return /* @__PURE__ */ p.jsxs(wC, { children: [
    /* @__PURE__ */ p.jsxs(SC, { children: [
      /* @__PURE__ */ p.jsx("div", {}),
      /* @__PURE__ */ p.jsx("div", {}),
      /* @__PURE__ */ p.jsx("div", {})
    ] }),
    /* @__PURE__ */ p.jsx(kC, {})
  ] });
}
const wC = L.div`
  padding: 8px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`, Tg = dw`
  0% {
    background-color: var(${O.computedOne});
  }
  100% {
    background-color: var(${O.computedTwo});
  }
`, SC = L.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  & > div {
    flex: 1;
    display: flex;
    height: 100px;
    flex-direction: column;
    border: 1px solid var(${O.border});
    animation: ${Tg} 1s linear infinite alternate;
  }
`, kC = L.div`
  border: 1px solid var(${O.border});
  height: 15rem;
  animation: ${Tg} 1s linear infinite alternate;
`, If = [
  { id: "starting", title: "Starting", element: /* @__PURE__ */ p.jsx("div", {}) },
  { id: "blank", title: "Blank", element: /* @__PURE__ */ p.jsx("div", {}), when: kv },
  {
    id: "start-audit",
    title: "Audit is starting",
    element: /* @__PURE__ */ p.jsx(xC, {}),
    when: Sv
  },
  {
    id: "no-report",
    title: "No Audit Report",
    element: /* @__PURE__ */ p.jsx(mC, {}),
    when: ec
  },
  {
    id: "audit-report",
    title: "Security Audit",
    element: /* @__PURE__ */ p.jsx($f, {}),
    when: qa
  },
  {
    id: "audit-report",
    title: "Security Audit",
    element: /* @__PURE__ */ p.jsx($f, {}),
    when: Ja
  }
], CC = {
  startAudit: Sv,
  cancelAudit: kv,
  showFullReport: qa,
  showPartialReport: Ja,
  showNoReport: ec,
  loadKdb: ux,
  changeTheme: Ky
};
function EC() {
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(pw, {}),
    /* @__PURE__ */ p.jsx(gw, {})
  ] });
}
function $C(e, t) {
  const n = dx(ww(e, If), t);
  Fh(document.getElementById("root")).render(
    /* @__PURE__ */ p.jsx(Se.StrictMode, { children: /* @__PURE__ */ p.jsx(T1, { store: n, children: /* @__PURE__ */ p.jsx(Bv.Provider, { value: If, children: /* @__PURE__ */ p.jsx(EC, {}) }) }) })
  ), window.addEventListener("message", yw(n, CC));
}
window.renderWebView = $C;
