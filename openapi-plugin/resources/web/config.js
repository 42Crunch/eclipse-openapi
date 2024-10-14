var Xx = Object.defineProperty;
var Jx = (e, t, n) => t in e ? Xx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var fi = (e, t, n) => Jx(e, typeof t != "symbol" ? t + "" : t, n);
function eS(e, t) {
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
var pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function As(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _v = { exports: {} }, Xl = {}, Cv = { exports: {} }, be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps = Symbol.for("react.element"), tS = Symbol.for("react.portal"), nS = Symbol.for("react.fragment"), rS = Symbol.for("react.strict_mode"), oS = Symbol.for("react.profiler"), iS = Symbol.for("react.provider"), sS = Symbol.for("react.context"), aS = Symbol.for("react.forward_ref"), lS = Symbol.for("react.suspense"), uS = Symbol.for("react.memo"), cS = Symbol.for("react.lazy"), Qh = Symbol.iterator;
function dS(e) {
  return e === null || typeof e != "object" ? null : (e = Qh && e[Qh] || e["@@iterator"], typeof e == "function" ? e : null);
}
var bv = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ev = Object.assign, Tv = {};
function ni(e, t, n) {
  this.props = e, this.context = t, this.refs = Tv, this.updater = n || bv;
}
ni.prototype.isReactComponent = {};
ni.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ni.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Rv() {
}
Rv.prototype = ni.prototype;
function Qf(e, t, n) {
  this.props = e, this.context = t, this.refs = Tv, this.updater = n || bv;
}
var Kf = Qf.prototype = new Rv();
Kf.constructor = Qf;
Ev(Kf, ni.prototype);
Kf.isPureReactComponent = !0;
var Kh = Array.isArray, Av = Object.prototype.hasOwnProperty, Zf = { current: null }, Pv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Iv(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Av.call(t, r) && !Pv.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: Ps, type: e, key: i, ref: s, props: o, _owner: Zf.current };
}
function fS(e, t) {
  return { $$typeof: Ps, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function qf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ps;
}
function pS(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Zh = /\/+/g;
function tc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? pS("" + e.key) : t.toString(36);
}
function Ta(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Ps:
        case tS:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + tc(s, 0) : r, Kh(o) ? (n = "", e != null && (n = e.replace(Zh, "$&/") + "/"), Ta(o, t, n, "", function(u) {
    return u;
  })) : o != null && (qf(o) && (o = fS(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Zh, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Kh(e)) for (var a = 0; a < e.length; a++) {
    i = e[a];
    var l = r + tc(i, a);
    s += Ta(i, t, n, l, o);
  }
  else if (l = dS(e), typeof l == "function") for (e = l.call(e), a = 0; !(i = e.next()).done; ) i = i.value, l = r + tc(i, a++), s += Ta(i, t, n, l, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Ys(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Ta(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function hS(e) {
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
var wt = { current: null }, Ra = { transition: null }, mS = { ReactCurrentDispatcher: wt, ReactCurrentBatchConfig: Ra, ReactCurrentOwner: Zf };
function Ov() {
  throw Error("act(...) is not supported in production builds of React.");
}
be.Children = { map: Ys, forEach: function(e, t, n) {
  Ys(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ys(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ys(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!qf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
be.Component = ni;
be.Fragment = nS;
be.Profiler = oS;
be.PureComponent = Qf;
be.StrictMode = rS;
be.Suspense = lS;
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mS;
be.act = Ov;
be.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ev({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Zf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Av.call(t, l) && !Pv.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ps, type: e.type, key: o, ref: i, props: r, _owner: s };
};
be.createContext = function(e) {
  return e = { $$typeof: sS, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: iS, _context: e }, e.Consumer = e;
};
be.createElement = Iv;
be.createFactory = function(e) {
  var t = Iv.bind(null, e);
  return t.type = e, t;
};
be.createRef = function() {
  return { current: null };
};
be.forwardRef = function(e) {
  return { $$typeof: aS, render: e };
};
be.isValidElement = qf;
be.lazy = function(e) {
  return { $$typeof: cS, _payload: { _status: -1, _result: e }, _init: hS };
};
be.memo = function(e, t) {
  return { $$typeof: uS, type: e, compare: t === void 0 ? null : t };
};
be.startTransition = function(e) {
  var t = Ra.transition;
  Ra.transition = {};
  try {
    e();
  } finally {
    Ra.transition = t;
  }
};
be.unstable_act = Ov;
be.useCallback = function(e, t) {
  return wt.current.useCallback(e, t);
};
be.useContext = function(e) {
  return wt.current.useContext(e);
};
be.useDebugValue = function() {
};
be.useDeferredValue = function(e) {
  return wt.current.useDeferredValue(e);
};
be.useEffect = function(e, t) {
  return wt.current.useEffect(e, t);
};
be.useId = function() {
  return wt.current.useId();
};
be.useImperativeHandle = function(e, t, n) {
  return wt.current.useImperativeHandle(e, t, n);
};
be.useInsertionEffect = function(e, t) {
  return wt.current.useInsertionEffect(e, t);
};
be.useLayoutEffect = function(e, t) {
  return wt.current.useLayoutEffect(e, t);
};
be.useMemo = function(e, t) {
  return wt.current.useMemo(e, t);
};
be.useReducer = function(e, t, n) {
  return wt.current.useReducer(e, t, n);
};
be.useRef = function(e) {
  return wt.current.useRef(e);
};
be.useState = function(e) {
  return wt.current.useState(e);
};
be.useSyncExternalStore = function(e, t, n) {
  return wt.current.useSyncExternalStore(e, t, n);
};
be.useTransition = function() {
  return wt.current.useTransition();
};
be.version = "18.3.1";
Cv.exports = be;
var E = Cv.exports;
const ue = /* @__PURE__ */ As(E), dd = /* @__PURE__ */ eS({
  __proto__: null,
  default: ue
}, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gS = E, vS = Symbol.for("react.element"), yS = Symbol.for("react.fragment"), wS = Object.prototype.hasOwnProperty, xS = gS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, SS = { key: !0, ref: !0, __self: !0, __source: !0 };
function jv(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) wS.call(t, r) && !SS.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: vS, type: e, key: i, ref: s, props: o, _owner: xS.current };
}
Xl.Fragment = yS;
Xl.jsx = jv;
Xl.jsxs = jv;
_v.exports = Xl;
var k = _v.exports, Mv = { exports: {} }, Bt = {}, Dv = { exports: {} }, Nv = {};
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
  function t(N, Q) {
    var W = N.length;
    N.push(Q);
    e: for (; 0 < W; ) {
      var P = W - 1 >>> 1, A = N[P];
      if (0 < o(A, Q)) N[P] = Q, N[W] = A, W = P;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var Q = N[0], W = N.pop();
    if (W !== Q) {
      N[0] = W;
      e: for (var P = 0, A = N.length, b = A >>> 1; P < b; ) {
        var O = 2 * (P + 1) - 1, $ = N[O], I = O + 1, Y = N[I];
        if (0 > o($, W)) I < A && 0 > o(Y, $) ? (N[P] = Y, N[I] = W, P = I) : (N[P] = $, N[O] = W, P = O);
        else if (I < A && 0 > o(Y, W)) N[P] = Y, N[I] = W, P = I;
        else break e;
      }
    }
    return Q;
  }
  function o(N, Q) {
    var W = N.sortIndex - Q.sortIndex;
    return W !== 0 ? W : N.id - Q.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, a = s.now();
    e.unstable_now = function() {
      return s.now() - a;
    };
  }
  var l = [], u = [], c = 1, p = null, d = 3, m = !1, g = !1, w = !1, x = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(N) {
    for (var Q = n(u); Q !== null; ) {
      if (Q.callback === null) r(u);
      else if (Q.startTime <= N) r(u), Q.sortIndex = Q.expirationTime, t(l, Q);
      else break;
      Q = n(u);
    }
  }
  function y(N) {
    if (w = !1, h(N), !g) if (n(l) !== null) g = !0, te(S);
    else {
      var Q = n(u);
      Q !== null && ee(y, Q.startTime - N);
    }
  }
  function S(N, Q) {
    g = !1, w && (w = !1, v(T), T = -1), m = !0;
    var W = d;
    try {
      for (h(Q), p = n(l); p !== null && (!(p.expirationTime > Q) || N && !U()); ) {
        var P = p.callback;
        if (typeof P == "function") {
          p.callback = null, d = p.priorityLevel;
          var A = P(p.expirationTime <= Q);
          Q = e.unstable_now(), typeof A == "function" ? p.callback = A : p === n(l) && r(l), h(Q);
        } else r(l);
        p = n(l);
      }
      if (p !== null) var b = !0;
      else {
        var O = n(u);
        O !== null && ee(y, O.startTime - Q), b = !1;
      }
      return b;
    } finally {
      p = null, d = W, m = !1;
    }
  }
  var _ = !1, C = null, T = -1, M = 5, j = -1;
  function U() {
    return !(e.unstable_now() - j < M);
  }
  function B() {
    if (C !== null) {
      var N = e.unstable_now();
      j = N;
      var Q = !0;
      try {
        Q = C(!0, N);
      } finally {
        Q ? L() : (_ = !1, C = null);
      }
    } else _ = !1;
  }
  var L;
  if (typeof f == "function") L = function() {
    f(B);
  };
  else if (typeof MessageChannel < "u") {
    var H = new MessageChannel(), J = H.port2;
    H.port1.onmessage = B, L = function() {
      J.postMessage(null);
    };
  } else L = function() {
    x(B, 0);
  };
  function te(N) {
    C = N, _ || (_ = !0, L());
  }
  function ee(N, Q) {
    T = x(function() {
      N(e.unstable_now());
    }, Q);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    g || m || (g = !0, te(S));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(N) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var Q = 3;
        break;
      default:
        Q = d;
    }
    var W = d;
    d = Q;
    try {
      return N();
    } finally {
      d = W;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, Q) {
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
    var W = d;
    d = N;
    try {
      return Q();
    } finally {
      d = W;
    }
  }, e.unstable_scheduleCallback = function(N, Q, W) {
    var P = e.unstable_now();
    switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? P + W : P) : W = P, N) {
      case 1:
        var A = -1;
        break;
      case 2:
        A = 250;
        break;
      case 5:
        A = 1073741823;
        break;
      case 4:
        A = 1e4;
        break;
      default:
        A = 5e3;
    }
    return A = W + A, N = { id: c++, callback: Q, priorityLevel: N, startTime: W, expirationTime: A, sortIndex: -1 }, W > P ? (N.sortIndex = W, t(u, N), n(l) === null && N === n(u) && (w ? (v(T), T = -1) : w = !0, ee(y, W - P))) : (N.sortIndex = A, t(l, N), g || m || (g = !0, te(S))), N;
  }, e.unstable_shouldYield = U, e.unstable_wrapCallback = function(N) {
    var Q = d;
    return function() {
      var W = d;
      d = Q;
      try {
        return N.apply(this, arguments);
      } finally {
        d = W;
      }
    };
  };
})(Nv);
Dv.exports = Nv;
var kS = Dv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _S = E, Ft = kS;
function G(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var $v = /* @__PURE__ */ new Set(), ts = {};
function ro(e, t) {
  Bo(e, t), Bo(e + "Capture", t);
}
function Bo(e, t) {
  for (ts[e] = t, e = 0; e < t.length; e++) $v.add(t[e]);
}
var $n = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fd = Object.prototype.hasOwnProperty, CS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, qh = {}, Gh = {};
function bS(e) {
  return fd.call(Gh, e) ? !0 : fd.call(qh, e) ? !1 : CS.test(e) ? Gh[e] = !0 : (qh[e] = !0, !1);
}
function ES(e, t, n, r) {
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
function TS(e, t, n, r) {
  if (t === null || typeof t > "u" || ES(e, t, n, r)) return !0;
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
function xt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var ut = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ut[e] = new xt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ut[t] = new xt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ut[e] = new xt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ut[e] = new xt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ut[e] = new xt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ut[e] = new xt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ut[e] = new xt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ut[e] = new xt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ut[e] = new xt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gf = /[\-:]([a-z])/g;
function Yf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Gf,
    Yf
  );
  ut[t] = new xt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Gf, Yf);
  ut[t] = new xt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Gf, Yf);
  ut[t] = new xt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ut[e] = new xt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ut.xlinkHref = new xt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ut[e] = new xt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xf(e, t, n, r) {
  var o = ut.hasOwnProperty(t) ? ut[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (TS(t, n, o, r) && (n = null), r || o === null ? bS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Wn = _S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Xs = Symbol.for("react.element"), po = Symbol.for("react.portal"), ho = Symbol.for("react.fragment"), Jf = Symbol.for("react.strict_mode"), pd = Symbol.for("react.profiler"), Fv = Symbol.for("react.provider"), Lv = Symbol.for("react.context"), ep = Symbol.for("react.forward_ref"), hd = Symbol.for("react.suspense"), md = Symbol.for("react.suspense_list"), tp = Symbol.for("react.memo"), Yn = Symbol.for("react.lazy"), zv = Symbol.for("react.offscreen"), Yh = Symbol.iterator;
function hi(e) {
  return e === null || typeof e != "object" ? null : (e = Yh && e[Yh] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ue = Object.assign, nc;
function bi(e) {
  if (nc === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    nc = t && t[1] || "";
  }
  return `
` + nc + e;
}
var rc = !1;
function oc(e, t) {
  if (!e || rc) return "";
  rc = !0;
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
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a]; ) a--;
      for (; 1 <= s && 0 <= a; s--, a--) if (o[s] !== i[a]) {
        if (s !== 1 || a !== 1)
          do
            if (s--, a--, 0 > a || o[s] !== i[a]) {
              var l = `
` + o[s].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= s && 0 <= a);
        break;
      }
    }
  } finally {
    rc = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? bi(e) : "";
}
function RS(e) {
  switch (e.tag) {
    case 5:
      return bi(e.type);
    case 16:
      return bi("Lazy");
    case 13:
      return bi("Suspense");
    case 19:
      return bi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = oc(e.type, !1), e;
    case 11:
      return e = oc(e.type.render, !1), e;
    case 1:
      return e = oc(e.type, !0), e;
    default:
      return "";
  }
}
function gd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ho:
      return "Fragment";
    case po:
      return "Portal";
    case pd:
      return "Profiler";
    case Jf:
      return "StrictMode";
    case hd:
      return "Suspense";
    case md:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Lv:
      return (e.displayName || "Context") + ".Consumer";
    case Fv:
      return (e._context.displayName || "Context") + ".Provider";
    case ep:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case tp:
      return t = e.displayName || null, t !== null ? t : gd(e.type) || "Memo";
    case Yn:
      t = e._payload, e = e._init;
      try {
        return gd(e(t));
      } catch {
      }
  }
  return null;
}
function AS(e) {
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
      return gd(t);
    case 8:
      return t === Jf ? "StrictMode" : "Mode";
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
function hr(e) {
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
function Bv(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function PS(e) {
  var t = Bv(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Js(e) {
  e._valueTracker || (e._valueTracker = PS(e));
}
function Vv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Bv(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ua(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vd(e, t) {
  var n = t.checked;
  return Ue({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Xh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = hr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Uv(e, t) {
  t = t.checked, t != null && Xf(e, "checked", t, !1);
}
function yd(e, t) {
  Uv(e, t);
  var n = hr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? wd(e, t.type, n) : t.hasOwnProperty("defaultValue") && wd(e, t.type, hr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Jh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function wd(e, t, n) {
  (t !== "number" || Ua(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ei = Array.isArray;
function Ao(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + hr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function xd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(G(91));
  return Ue({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function em(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(G(92));
      if (Ei(n)) {
        if (1 < n.length) throw Error(G(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: hr(n) };
}
function Hv(e, t) {
  var n = hr(t.value), r = hr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function tm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Wv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Sd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Wv(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ea, Qv = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ea = ea || document.createElement("div"), ea.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ea.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ns(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fi = {
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
}, IS = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fi).forEach(function(e) {
  IS.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Fi[t] = Fi[e];
  });
});
function Kv(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Fi.hasOwnProperty(e) && Fi[e] ? ("" + t).trim() : t + "px";
}
function Zv(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Kv(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var OS = Ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function kd(e, t) {
  if (t) {
    if (OS[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(G(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(G(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(G(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(G(62));
  }
}
function _d(e, t) {
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
var Cd = null;
function np(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var bd = null, Po = null, Io = null;
function nm(e) {
  if (e = js(e)) {
    if (typeof bd != "function") throw Error(G(280));
    var t = e.stateNode;
    t && (t = ru(t), bd(e.stateNode, e.type, t));
  }
}
function qv(e) {
  Po ? Io ? Io.push(e) : Io = [e] : Po = e;
}
function Gv() {
  if (Po) {
    var e = Po, t = Io;
    if (Io = Po = null, nm(e), t) for (e = 0; e < t.length; e++) nm(t[e]);
  }
}
function Yv(e, t) {
  return e(t);
}
function Xv() {
}
var ic = !1;
function Jv(e, t, n) {
  if (ic) return e(t, n);
  ic = !0;
  try {
    return Yv(e, t, n);
  } finally {
    ic = !1, (Po !== null || Io !== null) && (Xv(), Gv());
  }
}
function rs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ru(n);
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
  if (n && typeof n != "function") throw Error(G(231, t, typeof n));
  return n;
}
var Ed = !1;
if ($n) try {
  var mi = {};
  Object.defineProperty(mi, "passive", { get: function() {
    Ed = !0;
  } }), window.addEventListener("test", mi, mi), window.removeEventListener("test", mi, mi);
} catch {
  Ed = !1;
}
function jS(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Li = !1, Ha = null, Wa = !1, Td = null, MS = { onError: function(e) {
  Li = !0, Ha = e;
} };
function DS(e, t, n, r, o, i, s, a, l) {
  Li = !1, Ha = null, jS.apply(MS, arguments);
}
function NS(e, t, n, r, o, i, s, a, l) {
  if (DS.apply(this, arguments), Li) {
    if (Li) {
      var u = Ha;
      Li = !1, Ha = null;
    } else throw Error(G(198));
    Wa || (Wa = !0, Td = u);
  }
}
function oo(e) {
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
function ey(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function rm(e) {
  if (oo(e) !== e) throw Error(G(188));
}
function $S(e) {
  var t = e.alternate;
  if (!t) {
    if (t = oo(e), t === null) throw Error(G(188));
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
        if (i === n) return rm(o), e;
        if (i === r) return rm(o), t;
        i = i.sibling;
      }
      throw Error(G(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          s = !0, n = o, r = i;
          break;
        }
        if (a === r) {
          s = !0, r = o, n = i;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (a === r) {
            s = !0, r = i, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(G(189));
      }
    }
    if (n.alternate !== r) throw Error(G(190));
  }
  if (n.tag !== 3) throw Error(G(188));
  return n.stateNode.current === n ? e : t;
}
function ty(e) {
  return e = $S(e), e !== null ? ny(e) : null;
}
function ny(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ny(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ry = Ft.unstable_scheduleCallback, om = Ft.unstable_cancelCallback, FS = Ft.unstable_shouldYield, LS = Ft.unstable_requestPaint, Qe = Ft.unstable_now, zS = Ft.unstable_getCurrentPriorityLevel, rp = Ft.unstable_ImmediatePriority, oy = Ft.unstable_UserBlockingPriority, Qa = Ft.unstable_NormalPriority, BS = Ft.unstable_LowPriority, iy = Ft.unstable_IdlePriority, Jl = null, yn = null;
function VS(e) {
  if (yn && typeof yn.onCommitFiberRoot == "function") try {
    yn.onCommitFiberRoot(Jl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var on = Math.clz32 ? Math.clz32 : WS, US = Math.log, HS = Math.LN2;
function WS(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (US(e) / HS | 0) | 0;
}
var ta = 64, na = 4194304;
function Ti(e) {
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
function Ka(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = Ti(a) : (i &= s, i !== 0 && (r = Ti(i)));
  } else s = n & ~o, s !== 0 ? r = Ti(s) : i !== 0 && (r = Ti(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - on(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function QS(e, t) {
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
function KS(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - on(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = QS(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function Rd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function sy() {
  var e = ta;
  return ta <<= 1, !(ta & 4194240) && (ta = 64), e;
}
function sc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Is(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - on(t), e[t] = n;
}
function ZS(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - on(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function op(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - on(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Pe = 0;
function ay(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ly, ip, uy, cy, dy, Ad = !1, ra = [], or = null, ir = null, sr = null, os = /* @__PURE__ */ new Map(), is = /* @__PURE__ */ new Map(), Jn = [], qS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function im(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      or = null;
      break;
    case "dragenter":
    case "dragleave":
      ir = null;
      break;
    case "mouseover":
    case "mouseout":
      sr = null;
      break;
    case "pointerover":
    case "pointerout":
      os.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      is.delete(t.pointerId);
  }
}
function gi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = js(t), t !== null && ip(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function GS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return or = gi(or, e, t, n, r, o), !0;
    case "dragenter":
      return ir = gi(ir, e, t, n, r, o), !0;
    case "mouseover":
      return sr = gi(sr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return os.set(i, gi(os.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, is.set(i, gi(is.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function fy(e) {
  var t = jr(e.target);
  if (t !== null) {
    var n = oo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ey(n), t !== null) {
          e.blockedOn = t, dy(e.priority, function() {
            uy(n);
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
function Aa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Pd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Cd = r, n.target.dispatchEvent(r), Cd = null;
    } else return t = js(n), t !== null && ip(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function sm(e, t, n) {
  Aa(e) && n.delete(t);
}
function YS() {
  Ad = !1, or !== null && Aa(or) && (or = null), ir !== null && Aa(ir) && (ir = null), sr !== null && Aa(sr) && (sr = null), os.forEach(sm), is.forEach(sm);
}
function vi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ad || (Ad = !0, Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority, YS)));
}
function ss(e) {
  function t(o) {
    return vi(o, e);
  }
  if (0 < ra.length) {
    vi(ra[0], e);
    for (var n = 1; n < ra.length; n++) {
      var r = ra[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (or !== null && vi(or, e), ir !== null && vi(ir, e), sr !== null && vi(sr, e), os.forEach(t), is.forEach(t), n = 0; n < Jn.length; n++) r = Jn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Jn.length && (n = Jn[0], n.blockedOn === null); ) fy(n), n.blockedOn === null && Jn.shift();
}
var Oo = Wn.ReactCurrentBatchConfig, Za = !0;
function XS(e, t, n, r) {
  var o = Pe, i = Oo.transition;
  Oo.transition = null;
  try {
    Pe = 1, sp(e, t, n, r);
  } finally {
    Pe = o, Oo.transition = i;
  }
}
function JS(e, t, n, r) {
  var o = Pe, i = Oo.transition;
  Oo.transition = null;
  try {
    Pe = 4, sp(e, t, n, r);
  } finally {
    Pe = o, Oo.transition = i;
  }
}
function sp(e, t, n, r) {
  if (Za) {
    var o = Pd(e, t, n, r);
    if (o === null) gc(e, t, r, qa, n), im(e, r);
    else if (GS(o, e, t, n, r)) r.stopPropagation();
    else if (im(e, r), t & 4 && -1 < qS.indexOf(e)) {
      for (; o !== null; ) {
        var i = js(o);
        if (i !== null && ly(i), i = Pd(e, t, n, r), i === null && gc(e, t, r, qa, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else gc(e, t, r, null, n);
  }
}
var qa = null;
function Pd(e, t, n, r) {
  if (qa = null, e = np(r), e = jr(e), e !== null) if (t = oo(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ey(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return qa = e, null;
}
function py(e) {
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
      switch (zS()) {
        case rp:
          return 1;
        case oy:
          return 4;
        case Qa:
        case BS:
          return 16;
        case iy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tr = null, ap = null, Pa = null;
function hy() {
  if (Pa) return Pa;
  var e, t = ap, n = t.length, r, o = "value" in tr ? tr.value : tr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Pa = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ia(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function oa() {
  return !0;
}
function am() {
  return !1;
}
function Vt(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? oa : am, this.isPropagationStopped = am, this;
  }
  return Ue(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = oa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = oa);
  }, persist: function() {
  }, isPersistent: oa }), t;
}
var ri = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, lp = Vt(ri), Os = Ue({}, ri, { view: 0, detail: 0 }), ek = Vt(Os), ac, lc, yi, eu = Ue({}, Os, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: up, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== yi && (yi && e.type === "mousemove" ? (ac = e.screenX - yi.screenX, lc = e.screenY - yi.screenY) : lc = ac = 0, yi = e), ac);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : lc;
} }), lm = Vt(eu), tk = Ue({}, eu, { dataTransfer: 0 }), nk = Vt(tk), rk = Ue({}, Os, { relatedTarget: 0 }), uc = Vt(rk), ok = Ue({}, ri, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ik = Vt(ok), sk = Ue({}, ri, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ak = Vt(sk), lk = Ue({}, ri, { data: 0 }), um = Vt(lk), uk = {
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
}, ck = {
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
}, dk = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function fk(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dk[e]) ? !!t[e] : !1;
}
function up() {
  return fk;
}
var pk = Ue({}, Os, { key: function(e) {
  if (e.key) {
    var t = uk[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ia(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ck[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: up, charCode: function(e) {
  return e.type === "keypress" ? Ia(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ia(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), hk = Vt(pk), mk = Ue({}, eu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cm = Vt(mk), gk = Ue({}, Os, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: up }), vk = Vt(gk), yk = Ue({}, ri, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wk = Vt(yk), xk = Ue({}, eu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Sk = Vt(xk), kk = [9, 13, 27, 32], cp = $n && "CompositionEvent" in window, zi = null;
$n && "documentMode" in document && (zi = document.documentMode);
var _k = $n && "TextEvent" in window && !zi, my = $n && (!cp || zi && 8 < zi && 11 >= zi), dm = " ", fm = !1;
function gy(e, t) {
  switch (e) {
    case "keyup":
      return kk.indexOf(t.keyCode) !== -1;
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
function vy(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var mo = !1;
function Ck(e, t) {
  switch (e) {
    case "compositionend":
      return vy(t);
    case "keypress":
      return t.which !== 32 ? null : (fm = !0, dm);
    case "textInput":
      return e = t.data, e === dm && fm ? null : e;
    default:
      return null;
  }
}
function bk(e, t) {
  if (mo) return e === "compositionend" || !cp && gy(e, t) ? (e = hy(), Pa = ap = tr = null, mo = !1, e) : null;
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
      return my && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ek = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function pm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ek[e.type] : t === "textarea";
}
function yy(e, t, n, r) {
  qv(r), t = Ga(t, "onChange"), 0 < t.length && (n = new lp("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Bi = null, as = null;
function Tk(e) {
  Ay(e, 0);
}
function tu(e) {
  var t = yo(e);
  if (Vv(t)) return e;
}
function Rk(e, t) {
  if (e === "change") return t;
}
var wy = !1;
if ($n) {
  var cc;
  if ($n) {
    var dc = "oninput" in document;
    if (!dc) {
      var hm = document.createElement("div");
      hm.setAttribute("oninput", "return;"), dc = typeof hm.oninput == "function";
    }
    cc = dc;
  } else cc = !1;
  wy = cc && (!document.documentMode || 9 < document.documentMode);
}
function mm() {
  Bi && (Bi.detachEvent("onpropertychange", xy), as = Bi = null);
}
function xy(e) {
  if (e.propertyName === "value" && tu(as)) {
    var t = [];
    yy(t, as, e, np(e)), Jv(Tk, t);
  }
}
function Ak(e, t, n) {
  e === "focusin" ? (mm(), Bi = t, as = n, Bi.attachEvent("onpropertychange", xy)) : e === "focusout" && mm();
}
function Pk(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return tu(as);
}
function Ik(e, t) {
  if (e === "click") return tu(t);
}
function Ok(e, t) {
  if (e === "input" || e === "change") return tu(t);
}
function jk(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var an = typeof Object.is == "function" ? Object.is : jk;
function ls(e, t) {
  if (an(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!fd.call(t, o) || !an(e[o], t[o])) return !1;
  }
  return !0;
}
function gm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function vm(e, t) {
  var n = gm(e);
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
    n = gm(n);
  }
}
function Sy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Sy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ky() {
  for (var e = window, t = Ua(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ua(e.document);
  }
  return t;
}
function dp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Mk(e) {
  var t = ky(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Sy(n.ownerDocument.documentElement, n)) {
    if (r !== null && dp(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = vm(n, i);
        var s = vm(
          n,
          r
        );
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Dk = $n && "documentMode" in document && 11 >= document.documentMode, go = null, Id = null, Vi = null, Od = !1;
function ym(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Od || go == null || go !== Ua(r) || (r = go, "selectionStart" in r && dp(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Vi && ls(Vi, r) || (Vi = r, r = Ga(Id, "onSelect"), 0 < r.length && (t = new lp("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = go)));
}
function ia(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var vo = { animationend: ia("Animation", "AnimationEnd"), animationiteration: ia("Animation", "AnimationIteration"), animationstart: ia("Animation", "AnimationStart"), transitionend: ia("Transition", "TransitionEnd") }, fc = {}, _y = {};
$n && (_y = document.createElement("div").style, "AnimationEvent" in window || (delete vo.animationend.animation, delete vo.animationiteration.animation, delete vo.animationstart.animation), "TransitionEvent" in window || delete vo.transitionend.transition);
function nu(e) {
  if (fc[e]) return fc[e];
  if (!vo[e]) return e;
  var t = vo[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in _y) return fc[e] = t[n];
  return e;
}
var Cy = nu("animationend"), by = nu("animationiteration"), Ey = nu("animationstart"), Ty = nu("transitionend"), Ry = /* @__PURE__ */ new Map(), wm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function br(e, t) {
  Ry.set(e, t), ro(t, [e]);
}
for (var pc = 0; pc < wm.length; pc++) {
  var hc = wm[pc], Nk = hc.toLowerCase(), $k = hc[0].toUpperCase() + hc.slice(1);
  br(Nk, "on" + $k);
}
br(Cy, "onAnimationEnd");
br(by, "onAnimationIteration");
br(Ey, "onAnimationStart");
br("dblclick", "onDoubleClick");
br("focusin", "onFocus");
br("focusout", "onBlur");
br(Ty, "onTransitionEnd");
Bo("onMouseEnter", ["mouseout", "mouseover"]);
Bo("onMouseLeave", ["mouseout", "mouseover"]);
Bo("onPointerEnter", ["pointerout", "pointerover"]);
Bo("onPointerLeave", ["pointerout", "pointerover"]);
ro("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ro("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ro("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ro("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ro("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ro("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ri = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fk = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));
function xm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, NS(r, t, void 0, e), e.currentTarget = null;
}
function Ay(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== i && o.isPropagationStopped()) break e;
        xm(o, a, u), i = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped()) break e;
        xm(o, a, u), i = l;
      }
    }
  }
  if (Wa) throw e = Td, Wa = !1, Td = null, e;
}
function $e(e, t) {
  var n = t[$d];
  n === void 0 && (n = t[$d] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Py(t, e, 2, !1), n.add(r));
}
function mc(e, t, n) {
  var r = 0;
  t && (r |= 4), Py(n, e, r, t);
}
var sa = "_reactListening" + Math.random().toString(36).slice(2);
function us(e) {
  if (!e[sa]) {
    e[sa] = !0, $v.forEach(function(n) {
      n !== "selectionchange" && (Fk.has(n) || mc(n, !1, e), mc(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[sa] || (t[sa] = !0, mc("selectionchange", !1, t));
  }
}
function Py(e, t, n, r) {
  switch (py(t)) {
    case 1:
      var o = XS;
      break;
    case 4:
      o = JS;
      break;
    default:
      o = sp;
  }
  n = o.bind(null, t, n, e), o = void 0, !Ed || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function gc(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === o || a.nodeType === 8 && a.parentNode === o) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var l = s.tag;
        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
        s = s.return;
      }
      for (; a !== null; ) {
        if (s = jr(a), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = i = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Jv(function() {
    var u = i, c = np(n), p = [];
    e: {
      var d = Ry.get(e);
      if (d !== void 0) {
        var m = lp, g = e;
        switch (e) {
          case "keypress":
            if (Ia(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = hk;
            break;
          case "focusin":
            g = "focus", m = uc;
            break;
          case "focusout":
            g = "blur", m = uc;
            break;
          case "beforeblur":
          case "afterblur":
            m = uc;
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
            m = lm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = nk;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = vk;
            break;
          case Cy:
          case by:
          case Ey:
            m = ik;
            break;
          case Ty:
            m = wk;
            break;
          case "scroll":
            m = ek;
            break;
          case "wheel":
            m = Sk;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = ak;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = cm;
        }
        var w = (t & 4) !== 0, x = !w && e === "scroll", v = w ? d !== null ? d + "Capture" : null : d;
        w = [];
        for (var f = u, h; f !== null; ) {
          h = f;
          var y = h.stateNode;
          if (h.tag === 5 && y !== null && (h = y, v !== null && (y = rs(f, v), y != null && w.push(cs(f, y, h)))), x) break;
          f = f.return;
        }
        0 < w.length && (d = new m(d, g, null, n, c), p.push({ event: d, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", d && n !== Cd && (g = n.relatedTarget || n.fromElement) && (jr(g) || g[Fn])) break e;
        if ((m || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, m ? (g = n.relatedTarget || n.toElement, m = u, g = g ? jr(g) : null, g !== null && (x = oo(g), g !== x || g.tag !== 5 && g.tag !== 6) && (g = null)) : (m = null, g = u), m !== g)) {
          if (w = lm, y = "onMouseLeave", v = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (w = cm, y = "onPointerLeave", v = "onPointerEnter", f = "pointer"), x = m == null ? d : yo(m), h = g == null ? d : yo(g), d = new w(y, f + "leave", m, n, c), d.target = x, d.relatedTarget = h, y = null, jr(c) === u && (w = new w(v, f + "enter", g, n, c), w.target = h, w.relatedTarget = x, y = w), x = y, m && g) t: {
            for (w = m, v = g, f = 0, h = w; h; h = ao(h)) f++;
            for (h = 0, y = v; y; y = ao(y)) h++;
            for (; 0 < f - h; ) w = ao(w), f--;
            for (; 0 < h - f; ) v = ao(v), h--;
            for (; f--; ) {
              if (w === v || v !== null && w === v.alternate) break t;
              w = ao(w), v = ao(v);
            }
            w = null;
          }
          else w = null;
          m !== null && Sm(p, d, m, w, !1), g !== null && x !== null && Sm(p, x, g, w, !0);
        }
      }
      e: {
        if (d = u ? yo(u) : window, m = d.nodeName && d.nodeName.toLowerCase(), m === "select" || m === "input" && d.type === "file") var S = Rk;
        else if (pm(d)) if (wy) S = Ok;
        else {
          S = Pk;
          var _ = Ak;
        }
        else (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = Ik);
        if (S && (S = S(e, u))) {
          yy(p, S, n, c);
          break e;
        }
        _ && _(e, d, u), e === "focusout" && (_ = d._wrapperState) && _.controlled && d.type === "number" && wd(d, "number", d.value);
      }
      switch (_ = u ? yo(u) : window, e) {
        case "focusin":
          (pm(_) || _.contentEditable === "true") && (go = _, Id = u, Vi = null);
          break;
        case "focusout":
          Vi = Id = go = null;
          break;
        case "mousedown":
          Od = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Od = !1, ym(p, n, c);
          break;
        case "selectionchange":
          if (Dk) break;
        case "keydown":
        case "keyup":
          ym(p, n, c);
      }
      var C;
      if (cp) e: {
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
      else mo ? gy(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (my && n.locale !== "ko" && (mo || T !== "onCompositionStart" ? T === "onCompositionEnd" && mo && (C = hy()) : (tr = c, ap = "value" in tr ? tr.value : tr.textContent, mo = !0)), _ = Ga(u, T), 0 < _.length && (T = new um(T, e, null, n, c), p.push({ event: T, listeners: _ }), C ? T.data = C : (C = vy(n), C !== null && (T.data = C)))), (C = _k ? Ck(e, n) : bk(e, n)) && (u = Ga(u, "onBeforeInput"), 0 < u.length && (c = new um("onBeforeInput", "beforeinput", null, n, c), p.push({ event: c, listeners: u }), c.data = C));
    }
    Ay(p, t);
  });
}
function cs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ga(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = rs(e, n), i != null && r.unshift(cs(e, i, o)), i = rs(e, t), i != null && r.push(cs(e, i, o))), e = e.return;
  }
  return r;
}
function ao(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Sm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, o ? (l = rs(n, i), l != null && s.unshift(cs(n, l, a))) : o || (l = rs(n, i), l != null && s.push(cs(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Lk = /\r\n?/g, zk = /\u0000|\uFFFD/g;
function km(e) {
  return (typeof e == "string" ? e : "" + e).replace(Lk, `
`).replace(zk, "");
}
function aa(e, t, n) {
  if (t = km(t), km(e) !== t && n) throw Error(G(425));
}
function Ya() {
}
var jd = null, Md = null;
function Dd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Nd = typeof setTimeout == "function" ? setTimeout : void 0, Bk = typeof clearTimeout == "function" ? clearTimeout : void 0, _m = typeof Promise == "function" ? Promise : void 0, Vk = typeof queueMicrotask == "function" ? queueMicrotask : typeof _m < "u" ? function(e) {
  return _m.resolve(null).then(e).catch(Uk);
} : Nd;
function Uk(e) {
  setTimeout(function() {
    throw e;
  });
}
function vc(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), ss(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ss(t);
}
function ar(e) {
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
function Cm(e) {
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
var oi = Math.random().toString(36).slice(2), mn = "__reactFiber$" + oi, ds = "__reactProps$" + oi, Fn = "__reactContainer$" + oi, $d = "__reactEvents$" + oi, Hk = "__reactListeners$" + oi, Wk = "__reactHandles$" + oi;
function jr(e) {
  var t = e[mn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Fn] || n[mn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Cm(e); e !== null; ) {
        if (n = e[mn]) return n;
        e = Cm(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function js(e) {
  return e = e[mn] || e[Fn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function yo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(G(33));
}
function ru(e) {
  return e[ds] || null;
}
var Fd = [], wo = -1;
function Er(e) {
  return { current: e };
}
function Fe(e) {
  0 > wo || (e.current = Fd[wo], Fd[wo] = null, wo--);
}
function De(e, t) {
  wo++, Fd[wo] = e.current, e.current = t;
}
var mr = {}, pt = Er(mr), Ct = Er(!1), Ur = mr;
function Vo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function bt(e) {
  return e = e.childContextTypes, e != null;
}
function Xa() {
  Fe(Ct), Fe(pt);
}
function bm(e, t, n) {
  if (pt.current !== mr) throw Error(G(168));
  De(pt, t), De(Ct, n);
}
function Iy(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(G(108, AS(e) || "Unknown", o));
  return Ue({}, n, r);
}
function Ja(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mr, Ur = pt.current, De(pt, e), De(Ct, Ct.current), !0;
}
function Em(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(G(169));
  n ? (e = Iy(e, t, Ur), r.__reactInternalMemoizedMergedChildContext = e, Fe(Ct), Fe(pt), De(pt, e)) : Fe(Ct), De(Ct, n);
}
var An = null, ou = !1, yc = !1;
function Oy(e) {
  An === null ? An = [e] : An.push(e);
}
function Qk(e) {
  ou = !0, Oy(e);
}
function Tr() {
  if (!yc && An !== null) {
    yc = !0;
    var e = 0, t = Pe;
    try {
      var n = An;
      for (Pe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      An = null, ou = !1;
    } catch (o) {
      throw An !== null && (An = An.slice(e + 1)), ry(rp, Tr), o;
    } finally {
      Pe = t, yc = !1;
    }
  }
  return null;
}
var xo = [], So = 0, el = null, tl = 0, Ht = [], Wt = 0, Hr = null, Pn = 1, In = "";
function Ar(e, t) {
  xo[So++] = tl, xo[So++] = el, el = e, tl = t;
}
function jy(e, t, n) {
  Ht[Wt++] = Pn, Ht[Wt++] = In, Ht[Wt++] = Hr, Hr = e;
  var r = Pn;
  e = In;
  var o = 32 - on(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - on(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Pn = 1 << 32 - on(t) + o | n << o | r, In = i + e;
  } else Pn = 1 << i | n << o | r, In = e;
}
function fp(e) {
  e.return !== null && (Ar(e, 1), jy(e, 1, 0));
}
function pp(e) {
  for (; e === el; ) el = xo[--So], xo[So] = null, tl = xo[--So], xo[So] = null;
  for (; e === Hr; ) Hr = Ht[--Wt], Ht[Wt] = null, In = Ht[--Wt], Ht[Wt] = null, Pn = Ht[--Wt], Ht[Wt] = null;
}
var Nt = null, jt = null, Le = !1, nn = null;
function My(e, t) {
  var n = Kt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Tm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Nt = e, jt = ar(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Nt = e, jt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Hr !== null ? { id: Pn, overflow: In } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Kt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Nt = e, jt = null, !0) : !1;
    default:
      return !1;
  }
}
function Ld(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zd(e) {
  if (Le) {
    var t = jt;
    if (t) {
      var n = t;
      if (!Tm(e, t)) {
        if (Ld(e)) throw Error(G(418));
        t = ar(n.nextSibling);
        var r = Nt;
        t && Tm(e, t) ? My(r, n) : (e.flags = e.flags & -4097 | 2, Le = !1, Nt = e);
      }
    } else {
      if (Ld(e)) throw Error(G(418));
      e.flags = e.flags & -4097 | 2, Le = !1, Nt = e;
    }
  }
}
function Rm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Nt = e;
}
function la(e) {
  if (e !== Nt) return !1;
  if (!Le) return Rm(e), Le = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Dd(e.type, e.memoizedProps)), t && (t = jt)) {
    if (Ld(e)) throw Dy(), Error(G(418));
    for (; t; ) My(e, t), t = ar(t.nextSibling);
  }
  if (Rm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(G(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              jt = ar(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      jt = null;
    }
  } else jt = Nt ? ar(e.stateNode.nextSibling) : null;
  return !0;
}
function Dy() {
  for (var e = jt; e; ) e = ar(e.nextSibling);
}
function Uo() {
  jt = Nt = null, Le = !1;
}
function hp(e) {
  nn === null ? nn = [e] : nn.push(e);
}
var Kk = Wn.ReactCurrentBatchConfig;
function wi(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(G(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(G(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = o.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(G(284));
    if (!n._owner) throw Error(G(290, e));
  }
  return e;
}
function ua(e, t) {
  throw e = Object.prototype.toString.call(t), Error(G(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Am(e) {
  var t = e._init;
  return t(e._payload);
}
function Ny(e) {
  function t(v, f) {
    if (e) {
      var h = v.deletions;
      h === null ? (v.deletions = [f], v.flags |= 16) : h.push(f);
    }
  }
  function n(v, f) {
    if (!e) return null;
    for (; f !== null; ) t(v, f), f = f.sibling;
    return null;
  }
  function r(v, f) {
    for (v = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? v.set(f.key, f) : v.set(f.index, f), f = f.sibling;
    return v;
  }
  function o(v, f) {
    return v = dr(v, f), v.index = 0, v.sibling = null, v;
  }
  function i(v, f, h) {
    return v.index = h, e ? (h = v.alternate, h !== null ? (h = h.index, h < f ? (v.flags |= 2, f) : h) : (v.flags |= 2, f)) : (v.flags |= 1048576, f);
  }
  function s(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function a(v, f, h, y) {
    return f === null || f.tag !== 6 ? (f = bc(h, v.mode, y), f.return = v, f) : (f = o(f, h), f.return = v, f);
  }
  function l(v, f, h, y) {
    var S = h.type;
    return S === ho ? c(v, f, h.props.children, y, h.key) : f !== null && (f.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Yn && Am(S) === f.type) ? (y = o(f, h.props), y.ref = wi(v, f, h), y.return = v, y) : (y = Fa(h.type, h.key, h.props, null, v.mode, y), y.ref = wi(v, f, h), y.return = v, y);
  }
  function u(v, f, h, y) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== h.containerInfo || f.stateNode.implementation !== h.implementation ? (f = Ec(h, v.mode, y), f.return = v, f) : (f = o(f, h.children || []), f.return = v, f);
  }
  function c(v, f, h, y, S) {
    return f === null || f.tag !== 7 ? (f = Lr(h, v.mode, y, S), f.return = v, f) : (f = o(f, h), f.return = v, f);
  }
  function p(v, f, h) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = bc("" + f, v.mode, h), f.return = v, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Xs:
          return h = Fa(f.type, f.key, f.props, null, v.mode, h), h.ref = wi(v, null, f), h.return = v, h;
        case po:
          return f = Ec(f, v.mode, h), f.return = v, f;
        case Yn:
          var y = f._init;
          return p(v, y(f._payload), h);
      }
      if (Ei(f) || hi(f)) return f = Lr(f, v.mode, h, null), f.return = v, f;
      ua(v, f);
    }
    return null;
  }
  function d(v, f, h, y) {
    var S = f !== null ? f.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return S !== null ? null : a(v, f, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Xs:
          return h.key === S ? l(v, f, h, y) : null;
        case po:
          return h.key === S ? u(v, f, h, y) : null;
        case Yn:
          return S = h._init, d(
            v,
            f,
            S(h._payload),
            y
          );
      }
      if (Ei(h) || hi(h)) return S !== null ? null : c(v, f, h, y, null);
      ua(v, h);
    }
    return null;
  }
  function m(v, f, h, y, S) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return v = v.get(h) || null, a(f, v, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Xs:
          return v = v.get(y.key === null ? h : y.key) || null, l(f, v, y, S);
        case po:
          return v = v.get(y.key === null ? h : y.key) || null, u(f, v, y, S);
        case Yn:
          var _ = y._init;
          return m(v, f, h, _(y._payload), S);
      }
      if (Ei(y) || hi(y)) return v = v.get(h) || null, c(f, v, y, S, null);
      ua(f, y);
    }
    return null;
  }
  function g(v, f, h, y) {
    for (var S = null, _ = null, C = f, T = f = 0, M = null; C !== null && T < h.length; T++) {
      C.index > T ? (M = C, C = null) : M = C.sibling;
      var j = d(v, C, h[T], y);
      if (j === null) {
        C === null && (C = M);
        break;
      }
      e && C && j.alternate === null && t(v, C), f = i(j, f, T), _ === null ? S = j : _.sibling = j, _ = j, C = M;
    }
    if (T === h.length) return n(v, C), Le && Ar(v, T), S;
    if (C === null) {
      for (; T < h.length; T++) C = p(v, h[T], y), C !== null && (f = i(C, f, T), _ === null ? S = C : _.sibling = C, _ = C);
      return Le && Ar(v, T), S;
    }
    for (C = r(v, C); T < h.length; T++) M = m(C, v, T, h[T], y), M !== null && (e && M.alternate !== null && C.delete(M.key === null ? T : M.key), f = i(M, f, T), _ === null ? S = M : _.sibling = M, _ = M);
    return e && C.forEach(function(U) {
      return t(v, U);
    }), Le && Ar(v, T), S;
  }
  function w(v, f, h, y) {
    var S = hi(h);
    if (typeof S != "function") throw Error(G(150));
    if (h = S.call(h), h == null) throw Error(G(151));
    for (var _ = S = null, C = f, T = f = 0, M = null, j = h.next(); C !== null && !j.done; T++, j = h.next()) {
      C.index > T ? (M = C, C = null) : M = C.sibling;
      var U = d(v, C, j.value, y);
      if (U === null) {
        C === null && (C = M);
        break;
      }
      e && C && U.alternate === null && t(v, C), f = i(U, f, T), _ === null ? S = U : _.sibling = U, _ = U, C = M;
    }
    if (j.done) return n(
      v,
      C
    ), Le && Ar(v, T), S;
    if (C === null) {
      for (; !j.done; T++, j = h.next()) j = p(v, j.value, y), j !== null && (f = i(j, f, T), _ === null ? S = j : _.sibling = j, _ = j);
      return Le && Ar(v, T), S;
    }
    for (C = r(v, C); !j.done; T++, j = h.next()) j = m(C, v, T, j.value, y), j !== null && (e && j.alternate !== null && C.delete(j.key === null ? T : j.key), f = i(j, f, T), _ === null ? S = j : _.sibling = j, _ = j);
    return e && C.forEach(function(B) {
      return t(v, B);
    }), Le && Ar(v, T), S;
  }
  function x(v, f, h, y) {
    if (typeof h == "object" && h !== null && h.type === ho && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Xs:
          e: {
            for (var S = h.key, _ = f; _ !== null; ) {
              if (_.key === S) {
                if (S = h.type, S === ho) {
                  if (_.tag === 7) {
                    n(v, _.sibling), f = o(_, h.props.children), f.return = v, v = f;
                    break e;
                  }
                } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Yn && Am(S) === _.type) {
                  n(v, _.sibling), f = o(_, h.props), f.ref = wi(v, _, h), f.return = v, v = f;
                  break e;
                }
                n(v, _);
                break;
              } else t(v, _);
              _ = _.sibling;
            }
            h.type === ho ? (f = Lr(h.props.children, v.mode, y, h.key), f.return = v, v = f) : (y = Fa(h.type, h.key, h.props, null, v.mode, y), y.ref = wi(v, f, h), y.return = v, v = y);
          }
          return s(v);
        case po:
          e: {
            for (_ = h.key; f !== null; ) {
              if (f.key === _) if (f.tag === 4 && f.stateNode.containerInfo === h.containerInfo && f.stateNode.implementation === h.implementation) {
                n(v, f.sibling), f = o(f, h.children || []), f.return = v, v = f;
                break e;
              } else {
                n(v, f);
                break;
              }
              else t(v, f);
              f = f.sibling;
            }
            f = Ec(h, v.mode, y), f.return = v, v = f;
          }
          return s(v);
        case Yn:
          return _ = h._init, x(v, f, _(h._payload), y);
      }
      if (Ei(h)) return g(v, f, h, y);
      if (hi(h)) return w(v, f, h, y);
      ua(v, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, f !== null && f.tag === 6 ? (n(v, f.sibling), f = o(f, h), f.return = v, v = f) : (n(v, f), f = bc(h, v.mode, y), f.return = v, v = f), s(v)) : n(v, f);
  }
  return x;
}
var Ho = Ny(!0), $y = Ny(!1), nl = Er(null), rl = null, ko = null, mp = null;
function gp() {
  mp = ko = rl = null;
}
function vp(e) {
  var t = nl.current;
  Fe(nl), e._currentValue = t;
}
function Bd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function jo(e, t) {
  rl = e, mp = ko = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_t = !0), e.firstContext = null);
}
function Gt(e) {
  var t = e._currentValue;
  if (mp !== e) if (e = { context: e, memoizedValue: t, next: null }, ko === null) {
    if (rl === null) throw Error(G(308));
    ko = e, rl.dependencies = { lanes: 0, firstContext: e };
  } else ko = ko.next = e;
  return t;
}
var Mr = null;
function yp(e) {
  Mr === null ? Mr = [e] : Mr.push(e);
}
function Fy(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, yp(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ln(e, r);
}
function Ln(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Xn = !1;
function wp(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ly(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Mn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function lr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Re & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ln(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, yp(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ln(e, n);
}
function Oa(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, op(e, n);
  }
}
function Pm(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ol(e, t, n, r) {
  var o = e.updateQueue;
  Xn = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, s === null ? i = u : s.next = u, s = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
  }
  if (i !== null) {
    var p = o.baseState;
    s = 0, c = u = l = null, a = i;
    do {
      var d = a.lane, m = a.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: m,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var g = e, w = a;
          switch (d = t, m = n, w.tag) {
            case 1:
              if (g = w.payload, typeof g == "function") {
                p = g.call(m, p, d);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = w.payload, d = typeof g == "function" ? g.call(m, p, d) : g, d == null) break e;
              p = Ue({}, p, d);
              break e;
            case 2:
              Xn = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [a] : d.push(a));
      } else m = { eventTime: m, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = m, l = p) : c = c.next = m, s |= d;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null) break;
        d = a, a = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = p), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Qr |= s, e.lanes = s, e.memoizedState = p;
  }
}
function Im(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(G(191, o));
      o.call(r);
    }
  }
}
var Ms = {}, wn = Er(Ms), fs = Er(Ms), ps = Er(Ms);
function Dr(e) {
  if (e === Ms) throw Error(G(174));
  return e;
}
function xp(e, t) {
  switch (De(ps, t), De(fs, e), De(wn, Ms), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Sd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Sd(t, e);
  }
  Fe(wn), De(wn, t);
}
function Wo() {
  Fe(wn), Fe(fs), Fe(ps);
}
function zy(e) {
  Dr(ps.current);
  var t = Dr(wn.current), n = Sd(t, e.type);
  t !== n && (De(fs, e), De(wn, n));
}
function Sp(e) {
  fs.current === e && (Fe(wn), Fe(fs));
}
var ze = Er(0);
function il(e) {
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
var wc = [];
function kp() {
  for (var e = 0; e < wc.length; e++) wc[e]._workInProgressVersionPrimary = null;
  wc.length = 0;
}
var ja = Wn.ReactCurrentDispatcher, xc = Wn.ReactCurrentBatchConfig, Wr = 0, Ve = null, Ge = null, et = null, sl = !1, Ui = !1, hs = 0, Zk = 0;
function ct() {
  throw Error(G(321));
}
function _p(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!an(e[n], t[n])) return !1;
  return !0;
}
function Cp(e, t, n, r, o, i) {
  if (Wr = i, Ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ja.current = e === null || e.memoizedState === null ? Xk : Jk, e = n(r, o), Ui) {
    i = 0;
    do {
      if (Ui = !1, hs = 0, 25 <= i) throw Error(G(301));
      i += 1, et = Ge = null, t.updateQueue = null, ja.current = e_, e = n(r, o);
    } while (Ui);
  }
  if (ja.current = al, t = Ge !== null && Ge.next !== null, Wr = 0, et = Ge = Ve = null, sl = !1, t) throw Error(G(300));
  return e;
}
function bp() {
  var e = hs !== 0;
  return hs = 0, e;
}
function pn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return et === null ? Ve.memoizedState = et = e : et = et.next = e, et;
}
function Yt() {
  if (Ge === null) {
    var e = Ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ge.next;
  var t = et === null ? Ve.memoizedState : et.next;
  if (t !== null) et = t, Ge = e;
  else {
    if (e === null) throw Error(G(310));
    Ge = e, e = { memoizedState: Ge.memoizedState, baseState: Ge.baseState, baseQueue: Ge.baseQueue, queue: Ge.queue, next: null }, et === null ? Ve.memoizedState = et = e : et = et.next = e;
  }
  return et;
}
function ms(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Sc(e) {
  var t = Yt(), n = t.queue;
  if (n === null) throw Error(G(311));
  n.lastRenderedReducer = e;
  var r = Ge, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var a = s = null, l = null, u = i;
    do {
      var c = u.lane;
      if ((Wr & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = p, s = r) : l = l.next = p, Ve.lanes |= c, Qr |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? s = r : l.next = a, an(r, t.memoizedState) || (_t = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ve.lanes |= i, Qr |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function kc(e) {
  var t = Yt(), n = t.queue;
  if (n === null) throw Error(G(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    an(i, t.memoizedState) || (_t = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function By() {
}
function Vy(e, t) {
  var n = Ve, r = Yt(), o = t(), i = !an(r.memoizedState, o);
  if (i && (r.memoizedState = o, _t = !0), r = r.queue, Ep(Wy.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || et !== null && et.memoizedState.tag & 1) {
    if (n.flags |= 2048, gs(9, Hy.bind(null, n, r, o, t), void 0, null), tt === null) throw Error(G(349));
    Wr & 30 || Uy(n, t, o);
  }
  return o;
}
function Uy(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Hy(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Qy(t) && Ky(e);
}
function Wy(e, t, n) {
  return n(function() {
    Qy(t) && Ky(e);
  });
}
function Qy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !an(e, n);
  } catch {
    return !0;
  }
}
function Ky(e) {
  var t = Ln(e, 1);
  t !== null && sn(t, e, 1, -1);
}
function Om(e) {
  var t = pn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ms, lastRenderedState: e }, t.queue = e, e = e.dispatch = Yk.bind(null, Ve, e), [t.memoizedState, e];
}
function gs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ve.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Zy() {
  return Yt().memoizedState;
}
function Ma(e, t, n, r) {
  var o = pn();
  Ve.flags |= e, o.memoizedState = gs(1 | t, n, void 0, r === void 0 ? null : r);
}
function iu(e, t, n, r) {
  var o = Yt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ge !== null) {
    var s = Ge.memoizedState;
    if (i = s.destroy, r !== null && _p(r, s.deps)) {
      o.memoizedState = gs(t, n, i, r);
      return;
    }
  }
  Ve.flags |= e, o.memoizedState = gs(1 | t, n, i, r);
}
function jm(e, t) {
  return Ma(8390656, 8, e, t);
}
function Ep(e, t) {
  return iu(2048, 8, e, t);
}
function qy(e, t) {
  return iu(4, 2, e, t);
}
function Gy(e, t) {
  return iu(4, 4, e, t);
}
function Yy(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Xy(e, t, n) {
  return n = n != null ? n.concat([e]) : null, iu(4, 4, Yy.bind(null, t, e), n);
}
function Tp() {
}
function Jy(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _p(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function e0(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _p(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function t0(e, t, n) {
  return Wr & 21 ? (an(n, t) || (n = sy(), Ve.lanes |= n, Qr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _t = !0), e.memoizedState = n);
}
function qk(e, t) {
  var n = Pe;
  Pe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = xc.transition;
  xc.transition = {};
  try {
    e(!1), t();
  } finally {
    Pe = n, xc.transition = r;
  }
}
function n0() {
  return Yt().memoizedState;
}
function Gk(e, t, n) {
  var r = cr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, r0(e)) o0(t, n);
  else if (n = Fy(e, t, n, r), n !== null) {
    var o = gt();
    sn(n, e, r, o), i0(n, t, r);
  }
}
function Yk(e, t, n) {
  var r = cr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (r0(e)) o0(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, a = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = a, an(a, s)) {
        var l = t.interleaved;
        l === null ? (o.next = o, yp(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Fy(e, t, o, r), n !== null && (o = gt(), sn(n, e, r, o), i0(n, t, r));
  }
}
function r0(e) {
  var t = e.alternate;
  return e === Ve || t !== null && t === Ve;
}
function o0(e, t) {
  Ui = sl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function i0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, op(e, n);
  }
}
var al = { readContext: Gt, useCallback: ct, useContext: ct, useEffect: ct, useImperativeHandle: ct, useInsertionEffect: ct, useLayoutEffect: ct, useMemo: ct, useReducer: ct, useRef: ct, useState: ct, useDebugValue: ct, useDeferredValue: ct, useTransition: ct, useMutableSource: ct, useSyncExternalStore: ct, useId: ct, unstable_isNewReconciler: !1 }, Xk = { readContext: Gt, useCallback: function(e, t) {
  return pn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Gt, useEffect: jm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ma(
    4194308,
    4,
    Yy.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ma(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ma(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = pn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = pn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Gk.bind(null, Ve, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = pn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Om, useDebugValue: Tp, useDeferredValue: function(e) {
  return pn().memoizedState = e;
}, useTransition: function() {
  var e = Om(!1), t = e[0];
  return e = qk.bind(null, e[1]), pn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ve, o = pn();
  if (Le) {
    if (n === void 0) throw Error(G(407));
    n = n();
  } else {
    if (n = t(), tt === null) throw Error(G(349));
    Wr & 30 || Uy(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, jm(Wy.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, gs(9, Hy.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = pn(), t = tt.identifierPrefix;
  if (Le) {
    var n = In, r = Pn;
    n = (r & ~(1 << 32 - on(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = hs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Zk++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Jk = {
  readContext: Gt,
  useCallback: Jy,
  useContext: Gt,
  useEffect: Ep,
  useImperativeHandle: Xy,
  useInsertionEffect: qy,
  useLayoutEffect: Gy,
  useMemo: e0,
  useReducer: Sc,
  useRef: Zy,
  useState: function() {
    return Sc(ms);
  },
  useDebugValue: Tp,
  useDeferredValue: function(e) {
    var t = Yt();
    return t0(t, Ge.memoizedState, e);
  },
  useTransition: function() {
    var e = Sc(ms)[0], t = Yt().memoizedState;
    return [e, t];
  },
  useMutableSource: By,
  useSyncExternalStore: Vy,
  useId: n0,
  unstable_isNewReconciler: !1
}, e_ = { readContext: Gt, useCallback: Jy, useContext: Gt, useEffect: Ep, useImperativeHandle: Xy, useInsertionEffect: qy, useLayoutEffect: Gy, useMemo: e0, useReducer: kc, useRef: Zy, useState: function() {
  return kc(ms);
}, useDebugValue: Tp, useDeferredValue: function(e) {
  var t = Yt();
  return Ge === null ? t.memoizedState = e : t0(t, Ge.memoizedState, e);
}, useTransition: function() {
  var e = kc(ms)[0], t = Yt().memoizedState;
  return [e, t];
}, useMutableSource: By, useSyncExternalStore: Vy, useId: n0, unstable_isNewReconciler: !1 };
function en(e, t) {
  if (e && e.defaultProps) {
    t = Ue({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Vd(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var su = { isMounted: function(e) {
  return (e = e._reactInternals) ? oo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = gt(), o = cr(e), i = Mn(r, o);
  i.payload = t, n != null && (i.callback = n), t = lr(e, i, o), t !== null && (sn(t, e, o, r), Oa(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = gt(), o = cr(e), i = Mn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = lr(e, i, o), t !== null && (sn(t, e, o, r), Oa(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = gt(), r = cr(e), o = Mn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = lr(e, o, r), t !== null && (sn(t, e, r, n), Oa(t, e, r));
} };
function Mm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ls(n, r) || !ls(o, i) : !0;
}
function s0(e, t, n) {
  var r = !1, o = mr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Gt(i) : (o = bt(t) ? Ur : pt.current, r = t.contextTypes, i = (r = r != null) ? Vo(e, o) : mr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = su, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Dm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && su.enqueueReplaceState(t, t.state, null);
}
function Ud(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, wp(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Gt(i) : (i = bt(t) ? Ur : pt.current, o.context = Vo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Vd(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && su.enqueueReplaceState(o, o.state, null), ol(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Qo(e, t) {
  try {
    var n = "", r = t;
    do
      n += RS(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function _c(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Hd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var t_ = typeof WeakMap == "function" ? WeakMap : Map;
function a0(e, t, n) {
  n = Mn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ul || (ul = !0, ef = r), Hd(e, t);
  }, n;
}
function l0(e, t, n) {
  n = Mn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Hd(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Hd(e, t), typeof r != "function" && (ur === null ? ur = /* @__PURE__ */ new Set([this]) : ur.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Nm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new t_();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = m_.bind(null, e, t, n), t.then(e, e));
}
function $m(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Mn(-1, 1), t.tag = 2, lr(n, t, 1))), n.lanes |= 1), e);
}
var n_ = Wn.ReactCurrentOwner, _t = !1;
function ht(e, t, n, r) {
  t.child = e === null ? $y(t, null, n, r) : Ho(t, e.child, n, r);
}
function Lm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return jo(t, o), r = Cp(e, t, n, r, i, o), n = bp(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, zn(e, t, o)) : (Le && n && fp(t), t.flags |= 1, ht(e, t, r, o), t.child);
}
function zm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Dp(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, u0(e, t, i, r, o)) : (e = Fa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ls, n(s, r) && e.ref === t.ref) return zn(e, t, o);
  }
  return t.flags |= 1, e = dr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function u0(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ls(i, r) && e.ref === t.ref) if (_t = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (_t = !0);
    else return t.lanes = e.lanes, zn(e, t, o);
  }
  return Wd(e, t, n, r, o);
}
function c0(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, De(Co, At), At |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, De(Co, At), At |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, De(Co, At), At |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, De(Co, At), At |= r;
  return ht(e, t, o, n), t.child;
}
function d0(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Wd(e, t, n, r, o) {
  var i = bt(n) ? Ur : pt.current;
  return i = Vo(t, i), jo(t, o), n = Cp(e, t, n, r, i, o), r = bp(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, zn(e, t, o)) : (Le && r && fp(t), t.flags |= 1, ht(e, t, n, o), t.child);
}
function Bm(e, t, n, r, o) {
  if (bt(n)) {
    var i = !0;
    Ja(t);
  } else i = !1;
  if (jo(t, o), t.stateNode === null) Da(e, t), s0(t, n, r), Ud(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Gt(u) : (u = bt(n) ? Ur : pt.current, u = Vo(t, u));
    var c = n.getDerivedStateFromProps, p = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Dm(t, s, r, u), Xn = !1;
    var d = t.memoizedState;
    s.state = d, ol(t, r, s, o), l = t.memoizedState, a !== r || d !== l || Ct.current || Xn ? (typeof c == "function" && (Vd(t, n, c, r), l = t.memoizedState), (a = Xn || Mm(t, n, a, r, d, l, u)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Ly(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : en(t.type, a), s.props = u, p = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Gt(l) : (l = bt(n) ? Ur : pt.current, l = Vo(t, l));
    var m = n.getDerivedStateFromProps;
    (c = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== p || d !== l) && Dm(t, s, r, l), Xn = !1, d = t.memoizedState, s.state = d, ol(t, r, s, o);
    var g = t.memoizedState;
    a !== p || d !== g || Ct.current || Xn ? (typeof m == "function" && (Vd(t, n, m, r), g = t.memoizedState), (u = Xn || Mm(t, n, u, r, d, g, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Qd(e, t, n, r, i, o);
}
function Qd(e, t, n, r, o, i) {
  d0(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Em(t, n, !1), zn(e, t, i);
  r = t.stateNode, n_.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Ho(t, e.child, null, i), t.child = Ho(t, null, a, i)) : ht(e, t, a, i), t.memoizedState = r.state, o && Em(t, n, !0), t.child;
}
function f0(e) {
  var t = e.stateNode;
  t.pendingContext ? bm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bm(e, t.context, !1), xp(e, t.containerInfo);
}
function Vm(e, t, n, r, o) {
  return Uo(), hp(o), t.flags |= 256, ht(e, t, n, r), t.child;
}
var Kd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function p0(e, t, n) {
  var r = t.pendingProps, o = ze.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), De(ze, o & 1), e === null)
    return zd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = uu(s, r, 0, null), e = Lr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Zd(n), t.memoizedState = Kd, e) : Rp(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return r_(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = dr(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = dr(a, i) : (i = Lr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Zd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Kd, r;
  }
  return i = e.child, e = i.sibling, r = dr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Rp(e, t) {
  return t = uu({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ca(e, t, n, r) {
  return r !== null && hp(r), Ho(t, e.child, null, n), e = Rp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function r_(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = _c(Error(G(422))), ca(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = uu({ mode: "visible", children: r.children }, o, 0, null), i = Lr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Ho(t, e.child, null, s), t.child.memoizedState = Zd(s), t.memoizedState = Kd, i);
  if (!(t.mode & 1)) return ca(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(G(419)), r = _c(i, r, void 0), ca(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, _t || a) {
    if (r = tt, r !== null) {
      switch (s & -s) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Ln(e, o), sn(r, e, o, -1));
    }
    return Mp(), r = _c(Error(G(421))), ca(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = g_.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, jt = ar(o.nextSibling), Nt = t, Le = !0, nn = null, e !== null && (Ht[Wt++] = Pn, Ht[Wt++] = In, Ht[Wt++] = Hr, Pn = e.id, In = e.overflow, Hr = t), t = Rp(t, r.children), t.flags |= 4096, t);
}
function Um(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bd(e.return, t, n);
}
function Cc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function h0(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ht(e, t, r.children, n), r = ze.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Um(e, n, t);
      else if (e.tag === 19) Um(e, n, t);
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
  if (De(ze, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && il(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Cc(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && il(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Cc(t, !0, n, null, i);
      break;
    case "together":
      Cc(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Da(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function zn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Qr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(G(153));
  if (t.child !== null) {
    for (e = t.child, n = dr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = dr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function o_(e, t, n) {
  switch (t.tag) {
    case 3:
      f0(t), Uo();
      break;
    case 5:
      zy(t);
      break;
    case 1:
      bt(t.type) && Ja(t);
      break;
    case 4:
      xp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      De(nl, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (De(ze, ze.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? p0(e, t, n) : (De(ze, ze.current & 1), e = zn(e, t, n), e !== null ? e.sibling : null);
      De(ze, ze.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return h0(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), De(ze, ze.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, c0(e, t, n);
  }
  return zn(e, t, n);
}
var m0, qd, g0, v0;
m0 = function(e, t) {
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
qd = function() {
};
g0 = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Dr(wn.current);
    var i = null;
    switch (n) {
      case "input":
        o = vd(e, o), r = vd(e, r), i = [];
        break;
      case "select":
        o = Ue({}, o, { value: void 0 }), r = Ue({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = xd(e, o), r = xd(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ya);
    }
    kd(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var a = o[u];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ts.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ts.hasOwnProperty(u) ? (l != null && u === "onScroll" && $e("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
v0 = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xi(e, t) {
  if (!Le) switch (e.tailMode) {
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
function dt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function i_(e, t, n) {
  var r = t.pendingProps;
  switch (pp(t), t.tag) {
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
      return dt(t), null;
    case 1:
      return bt(t.type) && Xa(), dt(t), null;
    case 3:
      return r = t.stateNode, Wo(), Fe(Ct), Fe(pt), kp(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (la(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, nn !== null && (rf(nn), nn = null))), qd(e, t), dt(t), null;
    case 5:
      Sp(t);
      var o = Dr(ps.current);
      if (n = t.type, e !== null && t.stateNode != null) g0(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(G(166));
          return dt(t), null;
        }
        if (e = Dr(wn.current), la(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[mn] = t, r[ds] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              $e("cancel", r), $e("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $e("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ri.length; o++) $e(Ri[o], r);
              break;
            case "source":
              $e("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $e(
                "error",
                r
              ), $e("load", r);
              break;
            case "details":
              $e("toggle", r);
              break;
            case "input":
              Xh(r, i), $e("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, $e("invalid", r);
              break;
            case "textarea":
              em(r, i), $e("invalid", r);
          }
          kd(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var a = i[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && aa(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && aa(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : ts.hasOwnProperty(s) && a != null && s === "onScroll" && $e("scroll", r);
          }
          switch (n) {
            case "input":
              Js(r), Jh(r, i, !0);
              break;
            case "textarea":
              Js(r), tm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ya);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Wv(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[mn] = t, e[ds] = r, m0(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = _d(n, r), n) {
              case "dialog":
                $e("cancel", e), $e("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                $e("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ri.length; o++) $e(Ri[o], e);
                o = r;
                break;
              case "source":
                $e("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                $e(
                  "error",
                  e
                ), $e("load", e), o = r;
                break;
              case "details":
                $e("toggle", e), o = r;
                break;
              case "input":
                Xh(e, r), o = vd(e, r), $e("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ue({}, r, { value: void 0 }), $e("invalid", e);
                break;
              case "textarea":
                em(e, r), o = xd(e, r), $e("invalid", e);
                break;
              default:
                o = r;
            }
            kd(n, o), a = o;
            for (i in a) if (a.hasOwnProperty(i)) {
              var l = a[i];
              i === "style" ? Zv(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Qv(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ns(e, l) : typeof l == "number" && ns(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ts.hasOwnProperty(i) ? l != null && i === "onScroll" && $e("scroll", e) : l != null && Xf(e, i, l, s));
            }
            switch (n) {
              case "input":
                Js(e), Jh(e, r, !1);
                break;
              case "textarea":
                Js(e), tm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Ao(e, !!r.multiple, i, !1) : r.defaultValue != null && Ao(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ya);
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
      return dt(t), null;
    case 6:
      if (e && t.stateNode != null) v0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(G(166));
        if (n = Dr(ps.current), Dr(wn.current), la(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[mn] = t, (i = r.nodeValue !== n) && (e = Nt, e !== null)) switch (e.tag) {
            case 3:
              aa(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && aa(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[mn] = t, t.stateNode = r;
      }
      return dt(t), null;
    case 13:
      if (Fe(ze), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Le && jt !== null && t.mode & 1 && !(t.flags & 128)) Dy(), Uo(), t.flags |= 98560, i = !1;
        else if (i = la(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(G(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(G(317));
            i[mn] = t;
          } else Uo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          dt(t), i = !1;
        } else nn !== null && (rf(nn), nn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ze.current & 1 ? Ye === 0 && (Ye = 3) : Mp())), t.updateQueue !== null && (t.flags |= 4), dt(t), null);
    case 4:
      return Wo(), qd(e, t), e === null && us(t.stateNode.containerInfo), dt(t), null;
    case 10:
      return vp(t.type._context), dt(t), null;
    case 17:
      return bt(t.type) && Xa(), dt(t), null;
    case 19:
      if (Fe(ze), i = t.memoizedState, i === null) return dt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) xi(i, !1);
      else {
        if (Ye !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = il(e), s !== null) {
            for (t.flags |= 128, xi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return De(ze, ze.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Qe() > Ko && (t.flags |= 128, r = !0, xi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = il(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Le) return dt(t), null;
        } else 2 * Qe() - i.renderingStartTime > Ko && n !== 1073741824 && (t.flags |= 128, r = !0, xi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Qe(), t.sibling = null, n = ze.current, De(ze, r ? n & 1 | 2 : n & 1), t) : (dt(t), null);
    case 22:
    case 23:
      return jp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? At & 1073741824 && (dt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(G(156, t.tag));
}
function s_(e, t) {
  switch (pp(t), t.tag) {
    case 1:
      return bt(t.type) && Xa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Wo(), Fe(Ct), Fe(pt), kp(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Sp(t), null;
    case 13:
      if (Fe(ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(G(340));
        Uo();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Fe(ze), null;
    case 4:
      return Wo(), null;
    case 10:
      return vp(t.type._context), null;
    case 22:
    case 23:
      return jp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var da = !1, ft = !1, a_ = typeof WeakSet == "function" ? WeakSet : Set, le = null;
function _o(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    We(e, t, r);
  }
  else n.current = null;
}
function Gd(e, t, n) {
  try {
    n();
  } catch (r) {
    We(e, t, r);
  }
}
var Hm = !1;
function l_(e, t) {
  if (jd = Za, e = ky(), dp(e)) {
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
        var s = 0, a = -1, l = -1, u = 0, c = 0, p = e, d = null;
        t: for (; ; ) {
          for (var m; p !== n || o !== 0 && p.nodeType !== 3 || (a = s + o), p !== i || r !== 0 && p.nodeType !== 3 || (l = s + r), p.nodeType === 3 && (s += p.nodeValue.length), (m = p.firstChild) !== null; )
            d = p, p = m;
          for (; ; ) {
            if (p === e) break t;
            if (d === n && ++u === o && (a = s), d === i && ++c === r && (l = s), (m = p.nextSibling) !== null) break;
            p = d, d = p.parentNode;
          }
          p = m;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Md = { focusedElem: e, selectionRange: n }, Za = !1, le = t; le !== null; ) if (t = le, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, le = e;
  else for (; le !== null; ) {
    t = le;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var w = g.memoizedProps, x = g.memoizedState, v = t.stateNode, f = v.getSnapshotBeforeUpdate(t.elementType === t.type ? w : en(t.type, w), x);
            v.__reactInternalSnapshotBeforeUpdate = f;
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
          throw Error(G(163));
      }
    } catch (y) {
      We(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, le = e;
      break;
    }
    le = t.return;
  }
  return g = Hm, Hm = !1, g;
}
function Hi(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Gd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function au(e, t) {
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
function Yd(e) {
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
function y0(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, y0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mn], delete t[ds], delete t[$d], delete t[Hk], delete t[Wk])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function w0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wm(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || w0(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Xd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ya));
  else if (r !== 4 && (e = e.child, e !== null)) for (Xd(e, t, n), e = e.sibling; e !== null; ) Xd(e, t, n), e = e.sibling;
}
function Jd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Jd(e, t, n), e = e.sibling; e !== null; ) Jd(e, t, n), e = e.sibling;
}
var it = null, tn = !1;
function Qn(e, t, n) {
  for (n = n.child; n !== null; ) x0(e, t, n), n = n.sibling;
}
function x0(e, t, n) {
  if (yn && typeof yn.onCommitFiberUnmount == "function") try {
    yn.onCommitFiberUnmount(Jl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ft || _o(n, t);
    case 6:
      var r = it, o = tn;
      it = null, Qn(e, t, n), it = r, tn = o, it !== null && (tn ? (e = it, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : it.removeChild(n.stateNode));
      break;
    case 18:
      it !== null && (tn ? (e = it, n = n.stateNode, e.nodeType === 8 ? vc(e.parentNode, n) : e.nodeType === 1 && vc(e, n), ss(e)) : vc(it, n.stateNode));
      break;
    case 4:
      r = it, o = tn, it = n.stateNode.containerInfo, tn = !0, Qn(e, t, n), it = r, tn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ft && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Gd(n, t, s), o = o.next;
        } while (o !== r);
      }
      Qn(e, t, n);
      break;
    case 1:
      if (!ft && (_o(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        We(n, t, a);
      }
      Qn(e, t, n);
      break;
    case 21:
      Qn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ft = (r = ft) || n.memoizedState !== null, Qn(e, t, n), ft = r) : Qn(e, t, n);
      break;
    default:
      Qn(e, t, n);
  }
}
function Qm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new a_()), t.forEach(function(r) {
      var o = v_.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Jt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, a = s;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            it = a.stateNode, tn = !1;
            break e;
          case 3:
            it = a.stateNode.containerInfo, tn = !0;
            break e;
          case 4:
            it = a.stateNode.containerInfo, tn = !0;
            break e;
        }
        a = a.return;
      }
      if (it === null) throw Error(G(160));
      x0(i, s, o), it = null, tn = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (u) {
      We(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) S0(t, e), t = t.sibling;
}
function S0(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Jt(t, e), fn(e), r & 4) {
        try {
          Hi(3, e, e.return), au(3, e);
        } catch (w) {
          We(e, e.return, w);
        }
        try {
          Hi(5, e, e.return);
        } catch (w) {
          We(e, e.return, w);
        }
      }
      break;
    case 1:
      Jt(t, e), fn(e), r & 512 && n !== null && _o(n, n.return);
      break;
    case 5:
      if (Jt(t, e), fn(e), r & 512 && n !== null && _o(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ns(o, "");
        } catch (w) {
          We(e, e.return, w);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && i.type === "radio" && i.name != null && Uv(o, i), _d(a, s);
          var u = _d(a, i);
          for (s = 0; s < l.length; s += 2) {
            var c = l[s], p = l[s + 1];
            c === "style" ? Zv(o, p) : c === "dangerouslySetInnerHTML" ? Qv(o, p) : c === "children" ? ns(o, p) : Xf(o, c, p, u);
          }
          switch (a) {
            case "input":
              yd(o, i);
              break;
            case "textarea":
              Hv(o, i);
              break;
            case "select":
              var d = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var m = i.value;
              m != null ? Ao(o, !!i.multiple, m, !1) : d !== !!i.multiple && (i.defaultValue != null ? Ao(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Ao(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[ds] = i;
        } catch (w) {
          We(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Jt(t, e), fn(e), r & 4) {
        if (e.stateNode === null) throw Error(G(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (w) {
          We(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Jt(t, e), fn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ss(t.containerInfo);
      } catch (w) {
        We(e, e.return, w);
      }
      break;
    case 4:
      Jt(t, e), fn(e);
      break;
    case 13:
      Jt(t, e), fn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ip = Qe())), r & 4 && Qm(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ft = (u = ft) || c, Jt(t, e), ft = u) : Jt(t, e), fn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (le = e, c = e.child; c !== null; ) {
          for (p = le = c; le !== null; ) {
            switch (d = le, m = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Hi(4, d, d.return);
                break;
              case 1:
                _o(d, d.return);
                var g = d.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (w) {
                    We(r, n, w);
                  }
                }
                break;
              case 5:
                _o(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  Zm(p);
                  continue;
                }
            }
            m !== null ? (m.return = d, le = m) : Zm(p);
          }
          c = c.sibling;
        }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                o = p.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = p.stateNode, l = p.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Kv("display", s));
              } catch (w) {
                We(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (c === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (w) {
              We(e, e.return, w);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), p = p.return;
          }
          c === p && (c = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      Jt(t, e), fn(e), r & 4 && Qm(e);
      break;
    case 21:
      break;
    default:
      Jt(
        t,
        e
      ), fn(e);
  }
}
function fn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (w0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(G(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ns(o, ""), r.flags &= -33);
          var i = Wm(e);
          Jd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = Wm(e);
          Xd(e, a, s);
          break;
        default:
          throw Error(G(161));
      }
    } catch (l) {
      We(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function u_(e, t, n) {
  le = e, k0(e);
}
function k0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; le !== null; ) {
    var o = le, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || da;
      if (!s) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || ft;
        a = da;
        var u = ft;
        if (da = s, (ft = l) && !u) for (le = o; le !== null; ) s = le, l = s.child, s.tag === 22 && s.memoizedState !== null ? qm(o) : l !== null ? (l.return = s, le = l) : qm(o);
        for (; i !== null; ) le = i, k0(i), i = i.sibling;
        le = o, da = a, ft = u;
      }
      Km(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, le = i) : Km(e);
  }
}
function Km(e) {
  for (; le !== null; ) {
    var t = le;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ft || au(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ft) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : en(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Im(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Im(t, s, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
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
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var p = c.dehydrated;
                  p !== null && ss(p);
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
            throw Error(G(163));
        }
        ft || t.flags & 512 && Yd(t);
      } catch (d) {
        We(t, t.return, d);
      }
    }
    if (t === e) {
      le = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, le = n;
      break;
    }
    le = t.return;
  }
}
function Zm(e) {
  for (; le !== null; ) {
    var t = le;
    if (t === e) {
      le = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, le = n;
      break;
    }
    le = t.return;
  }
}
function qm(e) {
  for (; le !== null; ) {
    var t = le;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            au(4, t);
          } catch (l) {
            We(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              We(t, o, l);
            }
          }
          var i = t.return;
          try {
            Yd(t);
          } catch (l) {
            We(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Yd(t);
          } catch (l) {
            We(t, s, l);
          }
      }
    } catch (l) {
      We(t, t.return, l);
    }
    if (t === e) {
      le = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, le = a;
      break;
    }
    le = t.return;
  }
}
var c_ = Math.ceil, ll = Wn.ReactCurrentDispatcher, Ap = Wn.ReactCurrentOwner, Zt = Wn.ReactCurrentBatchConfig, Re = 0, tt = null, Ze = null, at = 0, At = 0, Co = Er(0), Ye = 0, vs = null, Qr = 0, lu = 0, Pp = 0, Wi = null, kt = null, Ip = 0, Ko = 1 / 0, Rn = null, ul = !1, ef = null, ur = null, fa = !1, nr = null, cl = 0, Qi = 0, tf = null, Na = -1, $a = 0;
function gt() {
  return Re & 6 ? Qe() : Na !== -1 ? Na : Na = Qe();
}
function cr(e) {
  return e.mode & 1 ? Re & 2 && at !== 0 ? at & -at : Kk.transition !== null ? ($a === 0 && ($a = sy()), $a) : (e = Pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : py(e.type)), e) : 1;
}
function sn(e, t, n, r) {
  if (50 < Qi) throw Qi = 0, tf = null, Error(G(185));
  Is(e, n, r), (!(Re & 2) || e !== tt) && (e === tt && (!(Re & 2) && (lu |= n), Ye === 4 && er(e, at)), Et(e, r), n === 1 && Re === 0 && !(t.mode & 1) && (Ko = Qe() + 500, ou && Tr()));
}
function Et(e, t) {
  var n = e.callbackNode;
  KS(e, t);
  var r = Ka(e, e === tt ? at : 0);
  if (r === 0) n !== null && om(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && om(n), t === 1) e.tag === 0 ? Qk(Gm.bind(null, e)) : Oy(Gm.bind(null, e)), Vk(function() {
      !(Re & 6) && Tr();
    }), n = null;
    else {
      switch (ay(r)) {
        case 1:
          n = rp;
          break;
        case 4:
          n = oy;
          break;
        case 16:
          n = Qa;
          break;
        case 536870912:
          n = iy;
          break;
        default:
          n = Qa;
      }
      n = P0(n, _0.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function _0(e, t) {
  if (Na = -1, $a = 0, Re & 6) throw Error(G(327));
  var n = e.callbackNode;
  if (Mo() && e.callbackNode !== n) return null;
  var r = Ka(e, e === tt ? at : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = dl(e, r);
  else {
    t = r;
    var o = Re;
    Re |= 2;
    var i = b0();
    (tt !== e || at !== t) && (Rn = null, Ko = Qe() + 500, Fr(e, t));
    do
      try {
        p_();
        break;
      } catch (a) {
        C0(e, a);
      }
    while (!0);
    gp(), ll.current = i, Re = o, Ze !== null ? t = 0 : (tt = null, at = 0, t = Ye);
  }
  if (t !== 0) {
    if (t === 2 && (o = Rd(e), o !== 0 && (r = o, t = nf(e, o))), t === 1) throw n = vs, Fr(e, 0), er(e, r), Et(e, Qe()), n;
    if (t === 6) er(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !d_(o) && (t = dl(e, r), t === 2 && (i = Rd(e), i !== 0 && (r = i, t = nf(e, i))), t === 1)) throw n = vs, Fr(e, 0), er(e, r), Et(e, Qe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(G(345));
        case 2:
          Pr(e, kt, Rn);
          break;
        case 3:
          if (er(e, r), (r & 130023424) === r && (t = Ip + 500 - Qe(), 10 < t)) {
            if (Ka(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              gt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Nd(Pr.bind(null, e, kt, Rn), t);
            break;
          }
          Pr(e, kt, Rn);
          break;
        case 4:
          if (er(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - on(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Qe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * c_(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Nd(Pr.bind(null, e, kt, Rn), r);
            break;
          }
          Pr(e, kt, Rn);
          break;
        case 5:
          Pr(e, kt, Rn);
          break;
        default:
          throw Error(G(329));
      }
    }
  }
  return Et(e, Qe()), e.callbackNode === n ? _0.bind(null, e) : null;
}
function nf(e, t) {
  var n = Wi;
  return e.current.memoizedState.isDehydrated && (Fr(e, t).flags |= 256), e = dl(e, t), e !== 2 && (t = kt, kt = n, t !== null && rf(t)), e;
}
function rf(e) {
  kt === null ? kt = e : kt.push.apply(kt, e);
}
function d_(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!an(i(), o)) return !1;
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
function er(e, t) {
  for (t &= ~Pp, t &= ~lu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - on(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Gm(e) {
  if (Re & 6) throw Error(G(327));
  Mo();
  var t = Ka(e, 0);
  if (!(t & 1)) return Et(e, Qe()), null;
  var n = dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Rd(e);
    r !== 0 && (t = r, n = nf(e, r));
  }
  if (n === 1) throw n = vs, Fr(e, 0), er(e, t), Et(e, Qe()), n;
  if (n === 6) throw Error(G(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Pr(e, kt, Rn), Et(e, Qe()), null;
}
function Op(e, t) {
  var n = Re;
  Re |= 1;
  try {
    return e(t);
  } finally {
    Re = n, Re === 0 && (Ko = Qe() + 500, ou && Tr());
  }
}
function Kr(e) {
  nr !== null && nr.tag === 0 && !(Re & 6) && Mo();
  var t = Re;
  Re |= 1;
  var n = Zt.transition, r = Pe;
  try {
    if (Zt.transition = null, Pe = 1, e) return e();
  } finally {
    Pe = r, Zt.transition = n, Re = t, !(Re & 6) && Tr();
  }
}
function jp() {
  At = Co.current, Fe(Co);
}
function Fr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Bk(n)), Ze !== null) for (n = Ze.return; n !== null; ) {
    var r = n;
    switch (pp(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Xa();
        break;
      case 3:
        Wo(), Fe(Ct), Fe(pt), kp();
        break;
      case 5:
        Sp(r);
        break;
      case 4:
        Wo();
        break;
      case 13:
        Fe(ze);
        break;
      case 19:
        Fe(ze);
        break;
      case 10:
        vp(r.type._context);
        break;
      case 22:
      case 23:
        jp();
    }
    n = n.return;
  }
  if (tt = e, Ze = e = dr(e.current, null), at = At = t, Ye = 0, vs = null, Pp = lu = Qr = 0, kt = Wi = null, Mr !== null) {
    for (t = 0; t < Mr.length; t++) if (n = Mr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    Mr = null;
  }
  return e;
}
function C0(e, t) {
  do {
    var n = Ze;
    try {
      if (gp(), ja.current = al, sl) {
        for (var r = Ve.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        sl = !1;
      }
      if (Wr = 0, et = Ge = Ve = null, Ui = !1, hs = 0, Ap.current = null, n === null || n.return === null) {
        Ye = 1, vs = t, Ze = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, l = t;
        if (t = at, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var m = $m(s);
          if (m !== null) {
            m.flags &= -257, Fm(m, s, a, i, t), m.mode & 1 && Nm(i, u, t), t = m, l = u;
            var g = t.updateQueue;
            if (g === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(l), t.updateQueue = w;
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Nm(i, u, t), Mp();
              break e;
            }
            l = Error(G(426));
          }
        } else if (Le && a.mode & 1) {
          var x = $m(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Fm(x, s, a, i, t), hp(Qo(l, a));
            break e;
          }
        }
        i = l = Qo(l, a), Ye !== 4 && (Ye = 2), Wi === null ? Wi = [i] : Wi.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var v = a0(i, l, t);
              Pm(i, v);
              break e;
            case 1:
              a = l;
              var f = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (ur === null || !ur.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = l0(i, a, t);
                Pm(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      T0(n);
    } catch (S) {
      t = S, Ze === n && n !== null && (Ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function b0() {
  var e = ll.current;
  return ll.current = al, e === null ? al : e;
}
function Mp() {
  (Ye === 0 || Ye === 3 || Ye === 2) && (Ye = 4), tt === null || !(Qr & 268435455) && !(lu & 268435455) || er(tt, at);
}
function dl(e, t) {
  var n = Re;
  Re |= 2;
  var r = b0();
  (tt !== e || at !== t) && (Rn = null, Fr(e, t));
  do
    try {
      f_();
      break;
    } catch (o) {
      C0(e, o);
    }
  while (!0);
  if (gp(), Re = n, ll.current = r, Ze !== null) throw Error(G(261));
  return tt = null, at = 0, Ye;
}
function f_() {
  for (; Ze !== null; ) E0(Ze);
}
function p_() {
  for (; Ze !== null && !FS(); ) E0(Ze);
}
function E0(e) {
  var t = A0(e.alternate, e, At);
  e.memoizedProps = e.pendingProps, t === null ? T0(e) : Ze = t, Ap.current = null;
}
function T0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = s_(n, t), n !== null) {
        n.flags &= 32767, Ze = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ye = 6, Ze = null;
        return;
      }
    } else if (n = i_(n, t, At), n !== null) {
      Ze = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ze = t;
      return;
    }
    Ze = t = e;
  } while (t !== null);
  Ye === 0 && (Ye = 5);
}
function Pr(e, t, n) {
  var r = Pe, o = Zt.transition;
  try {
    Zt.transition = null, Pe = 1, h_(e, t, n, r);
  } finally {
    Zt.transition = o, Pe = r;
  }
  return null;
}
function h_(e, t, n, r) {
  do
    Mo();
  while (nr !== null);
  if (Re & 6) throw Error(G(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(G(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (ZS(e, i), e === tt && (Ze = tt = null, at = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || fa || (fa = !0, P0(Qa, function() {
    return Mo(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Zt.transition, Zt.transition = null;
    var s = Pe;
    Pe = 1;
    var a = Re;
    Re |= 4, Ap.current = null, l_(e, n), S0(n, e), Mk(Md), Za = !!jd, Md = jd = null, e.current = n, u_(n), LS(), Re = a, Pe = s, Zt.transition = i;
  } else e.current = n;
  if (fa && (fa = !1, nr = e, cl = o), i = e.pendingLanes, i === 0 && (ur = null), VS(n.stateNode), Et(e, Qe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ul) throw ul = !1, e = ef, ef = null, e;
  return cl & 1 && e.tag !== 0 && Mo(), i = e.pendingLanes, i & 1 ? e === tf ? Qi++ : (Qi = 0, tf = e) : Qi = 0, Tr(), null;
}
function Mo() {
  if (nr !== null) {
    var e = ay(cl), t = Zt.transition, n = Pe;
    try {
      if (Zt.transition = null, Pe = 16 > e ? 16 : e, nr === null) var r = !1;
      else {
        if (e = nr, nr = null, cl = 0, Re & 6) throw Error(G(331));
        var o = Re;
        for (Re |= 4, le = e.current; le !== null; ) {
          var i = le, s = i.child;
          if (le.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (le = u; le !== null; ) {
                  var c = le;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hi(8, c, i);
                  }
                  var p = c.child;
                  if (p !== null) p.return = c, le = p;
                  else for (; le !== null; ) {
                    c = le;
                    var d = c.sibling, m = c.return;
                    if (y0(c), c === u) {
                      le = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = m, le = d;
                      break;
                    }
                    le = m;
                  }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var x = w.sibling;
                    w.sibling = null, w = x;
                  } while (w !== null);
                }
              }
              le = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, le = s;
          else e: for (; le !== null; ) {
            if (i = le, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Hi(9, i, i.return);
            }
            var v = i.sibling;
            if (v !== null) {
              v.return = i.return, le = v;
              break e;
            }
            le = i.return;
          }
        }
        var f = e.current;
        for (le = f; le !== null; ) {
          s = le;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) h.return = s, le = h;
          else e: for (s = f; le !== null; ) {
            if (a = le, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  au(9, a);
              }
            } catch (S) {
              We(a, a.return, S);
            }
            if (a === s) {
              le = null;
              break e;
            }
            var y = a.sibling;
            if (y !== null) {
              y.return = a.return, le = y;
              break e;
            }
            le = a.return;
          }
        }
        if (Re = o, Tr(), yn && typeof yn.onPostCommitFiberRoot == "function") try {
          yn.onPostCommitFiberRoot(Jl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Pe = n, Zt.transition = t;
    }
  }
  return !1;
}
function Ym(e, t, n) {
  t = Qo(n, t), t = a0(e, t, 1), e = lr(e, t, 1), t = gt(), e !== null && (Is(e, 1, t), Et(e, t));
}
function We(e, t, n) {
  if (e.tag === 3) Ym(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ym(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ur === null || !ur.has(r))) {
        e = Qo(n, e), e = l0(t, e, 1), t = lr(t, e, 1), e = gt(), t !== null && (Is(t, 1, e), Et(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function m_(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = gt(), e.pingedLanes |= e.suspendedLanes & n, tt === e && (at & n) === n && (Ye === 4 || Ye === 3 && (at & 130023424) === at && 500 > Qe() - Ip ? Fr(e, 0) : Pp |= n), Et(e, t);
}
function R0(e, t) {
  t === 0 && (e.mode & 1 ? (t = na, na <<= 1, !(na & 130023424) && (na = 4194304)) : t = 1);
  var n = gt();
  e = Ln(e, t), e !== null && (Is(e, t, n), Et(e, n));
}
function g_(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), R0(e, n);
}
function v_(e, t) {
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
      throw Error(G(314));
  }
  r !== null && r.delete(t), R0(e, n);
}
var A0;
A0 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ct.current) _t = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return _t = !1, o_(e, t, n);
    _t = !!(e.flags & 131072);
  }
  else _t = !1, Le && t.flags & 1048576 && jy(t, tl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Da(e, t), e = t.pendingProps;
      var o = Vo(t, pt.current);
      jo(t, n), o = Cp(null, t, r, e, o, n);
      var i = bp();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, bt(r) ? (i = !0, Ja(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, wp(t), o.updater = su, t.stateNode = o, o._reactInternals = t, Ud(t, r, e, n), t = Qd(null, t, r, !0, i, n)) : (t.tag = 0, Le && i && fp(t), ht(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Da(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = w_(r), e = en(r, e), o) {
          case 0:
            t = Wd(null, t, r, e, n);
            break e;
          case 1:
            t = Bm(null, t, r, e, n);
            break e;
          case 11:
            t = Lm(null, t, r, e, n);
            break e;
          case 14:
            t = zm(null, t, r, en(r.type, e), n);
            break e;
        }
        throw Error(G(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), Wd(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), Bm(e, t, r, o, n);
    case 3:
      e: {
        if (f0(t), e === null) throw Error(G(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Ly(e, t), ol(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Qo(Error(G(423)), t), t = Vm(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Qo(Error(G(424)), t), t = Vm(e, t, r, n, o);
          break e;
        } else for (jt = ar(t.stateNode.containerInfo.firstChild), Nt = t, Le = !0, nn = null, n = $y(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Uo(), r === o) {
            t = zn(e, t, n);
            break e;
          }
          ht(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return zy(t), e === null && zd(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Dd(r, o) ? s = null : i !== null && Dd(r, i) && (t.flags |= 32), d0(e, t), ht(e, t, s, n), t.child;
    case 6:
      return e === null && zd(t), null;
    case 13:
      return p0(e, t, n);
    case 4:
      return xp(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ho(t, null, r, n) : ht(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), Lm(e, t, r, o, n);
    case 7:
      return ht(e, t, t.pendingProps, n), t.child;
    case 8:
      return ht(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ht(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, De(nl, r._currentValue), r._currentValue = s, i !== null) if (an(i.value, s)) {
          if (i.children === o.children && !Ct.current) {
            t = zn(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var a = i.dependencies;
          if (a !== null) {
            s = i.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (i.tag === 1) {
                  l = Mn(-1, n & -n), l.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Bd(
                  i.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(G(341));
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Bd(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        ht(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, jo(t, n), o = Gt(o), r = r(o), t.flags |= 1, ht(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = en(r, t.pendingProps), o = en(r.type, o), zm(e, t, r, o, n);
    case 15:
      return u0(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), Da(e, t), t.tag = 1, bt(r) ? (e = !0, Ja(t)) : e = !1, jo(t, n), s0(t, r, o), Ud(t, r, o, n), Qd(null, t, r, !0, e, n);
    case 19:
      return h0(e, t, n);
    case 22:
      return c0(e, t, n);
  }
  throw Error(G(156, t.tag));
};
function P0(e, t) {
  return ry(e, t);
}
function y_(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Kt(e, t, n, r) {
  return new y_(e, t, n, r);
}
function Dp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function w_(e) {
  if (typeof e == "function") return Dp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ep) return 11;
    if (e === tp) return 14;
  }
  return 2;
}
function dr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Kt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Fa(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") Dp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case ho:
      return Lr(n.children, o, i, t);
    case Jf:
      s = 8, o |= 8;
      break;
    case pd:
      return e = Kt(12, n, t, o | 2), e.elementType = pd, e.lanes = i, e;
    case hd:
      return e = Kt(13, n, t, o), e.elementType = hd, e.lanes = i, e;
    case md:
      return e = Kt(19, n, t, o), e.elementType = md, e.lanes = i, e;
    case zv:
      return uu(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Fv:
          s = 10;
          break e;
        case Lv:
          s = 9;
          break e;
        case ep:
          s = 11;
          break e;
        case tp:
          s = 14;
          break e;
        case Yn:
          s = 16, r = null;
          break e;
      }
      throw Error(G(130, e == null ? e : typeof e, ""));
  }
  return t = Kt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Lr(e, t, n, r) {
  return e = Kt(7, e, r, t), e.lanes = n, e;
}
function uu(e, t, n, r) {
  return e = Kt(22, e, r, t), e.elementType = zv, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function bc(e, t, n) {
  return e = Kt(6, e, null, t), e.lanes = n, e;
}
function Ec(e, t, n) {
  return t = Kt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function x_(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = sc(0), this.expirationTimes = sc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = sc(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Np(e, t, n, r, o, i, s, a, l) {
  return e = new x_(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Kt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wp(i), e;
}
function S_(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: po, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function I0(e) {
  if (!e) return mr;
  e = e._reactInternals;
  e: {
    if (oo(e) !== e || e.tag !== 1) throw Error(G(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (bt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(G(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (bt(n)) return Iy(e, n, t);
  }
  return t;
}
function O0(e, t, n, r, o, i, s, a, l) {
  return e = Np(n, r, !0, e, o, i, s, a, l), e.context = I0(null), n = e.current, r = gt(), o = cr(n), i = Mn(r, o), i.callback = t ?? null, lr(n, i, o), e.current.lanes = o, Is(e, o, r), Et(e, r), e;
}
function cu(e, t, n, r) {
  var o = t.current, i = gt(), s = cr(o);
  return n = I0(n), t.context === null ? t.context = n : t.pendingContext = n, t = Mn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = lr(o, t, s), e !== null && (sn(e, o, s, i), Oa(e, o, s)), s;
}
function fl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xm(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $p(e, t) {
  Xm(e, t), (e = e.alternate) && Xm(e, t);
}
function k_() {
  return null;
}
var j0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Fp(e) {
  this._internalRoot = e;
}
du.prototype.render = Fp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(G(409));
  cu(e, t, null, null);
};
du.prototype.unmount = Fp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kr(function() {
      cu(null, e, null, null);
    }), t[Fn] = null;
  }
};
function du(e) {
  this._internalRoot = e;
}
du.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = cy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Jn.length && t !== 0 && t < Jn[n].priority; n++) ;
    Jn.splice(n, 0, e), n === 0 && fy(e);
  }
};
function Lp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function fu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Jm() {
}
function __(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = fl(s);
        i.call(u);
      };
    }
    var s = O0(t, r, e, 0, null, !1, !1, "", Jm);
    return e._reactRootContainer = s, e[Fn] = s.current, us(e.nodeType === 8 ? e.parentNode : e), Kr(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = fl(l);
      a.call(u);
    };
  }
  var l = Np(e, 0, !1, null, null, !1, !1, "", Jm);
  return e._reactRootContainer = l, e[Fn] = l.current, us(e.nodeType === 8 ? e.parentNode : e), Kr(function() {
    cu(t, l, n, r);
  }), l;
}
function pu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = fl(s);
        a.call(l);
      };
    }
    cu(t, s, e, o);
  } else s = __(n, t, e, o, r);
  return fl(s);
}
ly = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ti(t.pendingLanes);
        n !== 0 && (op(t, n | 1), Et(t, Qe()), !(Re & 6) && (Ko = Qe() + 500, Tr()));
      }
      break;
    case 13:
      Kr(function() {
        var r = Ln(e, 1);
        if (r !== null) {
          var o = gt();
          sn(r, e, 1, o);
        }
      }), $p(e, 1);
  }
};
ip = function(e) {
  if (e.tag === 13) {
    var t = Ln(e, 134217728);
    if (t !== null) {
      var n = gt();
      sn(t, e, 134217728, n);
    }
    $p(e, 134217728);
  }
};
uy = function(e) {
  if (e.tag === 13) {
    var t = cr(e), n = Ln(e, t);
    if (n !== null) {
      var r = gt();
      sn(n, e, t, r);
    }
    $p(e, t);
  }
};
cy = function() {
  return Pe;
};
dy = function(e, t) {
  var n = Pe;
  try {
    return Pe = e, t();
  } finally {
    Pe = n;
  }
};
bd = function(e, t, n) {
  switch (t) {
    case "input":
      if (yd(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ru(r);
            if (!o) throw Error(G(90));
            Vv(r), yd(r, o);
          }
        }
      }
      break;
    case "textarea":
      Hv(e, n);
      break;
    case "select":
      t = n.value, t != null && Ao(e, !!n.multiple, t, !1);
  }
};
Yv = Op;
Xv = Kr;
var C_ = { usingClientEntryPoint: !1, Events: [js, yo, ru, qv, Gv, Op] }, Si = { findFiberByHostInstance: jr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, b_ = { bundleType: Si.bundleType, version: Si.version, rendererPackageName: Si.rendererPackageName, rendererConfig: Si.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Wn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ty(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Si.findFiberByHostInstance || k_, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var pa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!pa.isDisabled && pa.supportsFiber) try {
    Jl = pa.inject(b_), yn = pa;
  } catch {
  }
}
Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C_;
Bt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lp(t)) throw Error(G(200));
  return S_(e, t, null, n);
};
Bt.createRoot = function(e, t) {
  if (!Lp(e)) throw Error(G(299));
  var n = !1, r = "", o = j0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Np(e, 1, !1, null, null, n, !1, r, o), e[Fn] = t.current, us(e.nodeType === 8 ? e.parentNode : e), new Fp(t);
};
Bt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(G(188)) : (e = Object.keys(e).join(","), Error(G(268, e)));
  return e = ty(t), e = e === null ? null : e.stateNode, e;
};
Bt.flushSync = function(e) {
  return Kr(e);
};
Bt.hydrate = function(e, t, n) {
  if (!fu(t)) throw Error(G(200));
  return pu(null, e, t, !0, n);
};
Bt.hydrateRoot = function(e, t, n) {
  if (!Lp(e)) throw Error(G(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = j0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = O0(t, null, e, 1, n ?? null, o, !1, i, s), e[Fn] = t.current, us(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new du(t);
};
Bt.render = function(e, t, n) {
  if (!fu(t)) throw Error(G(200));
  return pu(null, e, t, !1, n);
};
Bt.unmountComponentAtNode = function(e) {
  if (!fu(e)) throw Error(G(40));
  return e._reactRootContainer ? (Kr(function() {
    pu(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Fn] = null;
    });
  }), !0) : !1;
};
Bt.unstable_batchedUpdates = Op;
Bt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!fu(n)) throw Error(G(200));
  if (e == null || e._reactInternals === void 0) throw Error(G(38));
  return pu(e, t, n, !1, r);
};
Bt.version = "18.3.1-next-f1338f8080-20240426";
function M0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M0);
    } catch (e) {
      console.error(e);
    }
}
M0(), Mv.exports = Bt;
var Ds = Mv.exports;
const E_ = /* @__PURE__ */ As(Ds);
var D0, eg = Ds;
D0 = eg.createRoot, eg.hydrateRoot;
var N0 = { exports: {} }, $0 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ns = E;
function T_(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var R_ = typeof Object.is == "function" ? Object.is : T_, A_ = Ns.useSyncExternalStore, P_ = Ns.useRef, I_ = Ns.useEffect, O_ = Ns.useMemo, j_ = Ns.useDebugValue;
$0.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = P_(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = O_(function() {
    function l(m) {
      if (!u) {
        if (u = !0, c = m, m = r(m), o !== void 0 && s.hasValue) {
          var g = s.value;
          if (o(g, m)) return p = g;
        }
        return p = m;
      }
      if (g = p, R_(c, m)) return g;
      var w = r(m);
      return o !== void 0 && o(g, w) ? g : (c = m, p = w);
    }
    var u = !1, c, p, d = n === void 0 ? null : n;
    return [function() {
      return l(t());
    }, d === null ? void 0 : function() {
      return l(d());
    }];
  }, [t, n, r, o]);
  var a = A_(e, i[0], i[1]);
  return I_(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), j_(a), a;
};
N0.exports = $0;
var M_ = N0.exports, Mt = (
  // prettier-ignore
  // @ts-ignore
  "default" in dd ? ue : dd
), tg = Symbol.for("react-redux-context"), ng = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function D_() {
  if (!Mt.createContext)
    return {};
  const e = ng[tg] ?? (ng[tg] = /* @__PURE__ */ new Map());
  let t = e.get(Mt.createContext);
  return t || (t = Mt.createContext(
    null
  ), e.set(Mt.createContext, t)), t;
}
var gr = /* @__PURE__ */ D_(), N_ = () => {
  throw new Error("uSES not initialized!");
};
function zp(e = gr) {
  return function() {
    return Mt.useContext(e);
  };
}
var F0 = /* @__PURE__ */ zp(), L0 = N_, $_ = (e) => {
  L0 = e;
}, F_ = (e, t) => e === t;
function L_(e = gr) {
  const t = e === gr ? F0 : zp(e), n = (r, o = {}) => {
    const { equalityFn: i = F_, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: a,
      subscription: l,
      getServerState: u,
      stabilityCheck: c,
      identityFunctionCheck: p
    } = t();
    Mt.useRef(!0);
    const d = Mt.useCallback(
      {
        [r.name](g) {
          return r(g);
        }
      }[r.name],
      [r, c, s.stabilityCheck]
    ), m = L0(
      l.addNestedSub,
      a.getState,
      u || a.getState,
      d,
      i
    );
    return Mt.useDebugValue(m), m;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Bp = /* @__PURE__ */ L_();
function z0(e) {
  e();
}
function z_() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      z0(() => {
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
var rg = {
  notify() {
  },
  get: () => []
};
function B_(e, t) {
  let n, r = rg, o = 0, i = !1;
  function s(w) {
    c();
    const x = r.subscribe(w);
    let v = !1;
    return () => {
      v || (v = !0, x(), p());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    g.onStateChange && g.onStateChange();
  }
  function u() {
    return i;
  }
  function c() {
    o++, n || (n = e.subscribe(l), r = z_());
  }
  function p() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = rg);
  }
  function d() {
    i || (i = !0, c());
  }
  function m() {
    i && (i = !1, p());
  }
  const g = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: m,
    getListeners: () => r
  };
  return g;
}
var V_ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", U_ = typeof navigator < "u" && navigator.product === "ReactNative", H_ = V_ || U_ ? Mt.useLayoutEffect : Mt.useEffect;
function og(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ki(e, t) {
  if (og(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !og(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
function W_({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const s = Mt.useMemo(() => {
    const u = B_(e);
    return {
      store: e,
      subscription: u,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), a = Mt.useMemo(() => e.getState(), [e]);
  H_(() => {
    const { subscription: u } = s;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), a !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [s, a]);
  const l = t || gr;
  return /* @__PURE__ */ Mt.createElement(l.Provider, { value: s }, n);
}
var Q_ = W_;
function B0(e = gr) {
  const t = e === gr ? F0 : (
    // @ts-ignore
    zp(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var V0 = /* @__PURE__ */ B0();
function K_(e = gr) {
  const t = e === gr ? V0 : B0(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Vp = /* @__PURE__ */ K_(), Z_ = z0;
$_(M_.useSyncExternalStoreWithSelector);
const q_ = [
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
], q = {
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
function ot(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var G_ = typeof Symbol == "function" && Symbol.observable || "@@observable", ig = G_, Tc = () => Math.random().toString(36).substring(7).split("").join("."), Y_ = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Tc()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Tc()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Tc()}`
}, pl = Y_;
function vr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function U0(e, t, n) {
  if (typeof e != "function")
    throw new Error(ot(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(ot(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(ot(1));
    return n(U0)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), s = i, a = 0, l = !1;
  function u() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((x, v) => {
      s.set(v, x);
    }));
  }
  function c() {
    if (l)
      throw new Error(ot(3));
    return o;
  }
  function p(x) {
    if (typeof x != "function")
      throw new Error(ot(4));
    if (l)
      throw new Error(ot(5));
    let v = !0;
    u();
    const f = a++;
    return s.set(f, x), function() {
      if (v) {
        if (l)
          throw new Error(ot(6));
        v = !1, u(), s.delete(f), i = null;
      }
    };
  }
  function d(x) {
    if (!vr(x))
      throw new Error(ot(7));
    if (typeof x.type > "u")
      throw new Error(ot(8));
    if (typeof x.type != "string")
      throw new Error(ot(17));
    if (l)
      throw new Error(ot(9));
    try {
      l = !0, o = r(o, x);
    } finally {
      l = !1;
    }
    return (i = s).forEach((f) => {
      f();
    }), x;
  }
  function m(x) {
    if (typeof x != "function")
      throw new Error(ot(10));
    r = x, d({
      type: pl.REPLACE
    });
  }
  function g() {
    const x = p;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(v) {
        if (typeof v != "object" || v === null)
          throw new Error(ot(11));
        function f() {
          const y = v;
          y.next && y.next(c());
        }
        return f(), {
          unsubscribe: x(f)
        };
      },
      [ig]() {
        return this;
      }
    };
  }
  return d({
    type: pl.INIT
  }), {
    dispatch: d,
    subscribe: p,
    getState: c,
    replaceReducer: m,
    [ig]: g
  };
}
function X_(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: pl.INIT
    }) > "u")
      throw new Error(ot(12));
    if (typeof n(void 0, {
      type: pl.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ot(13));
  });
}
function H0(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    X_(n);
  } catch (i) {
    o = i;
  }
  return function(s = {}, a) {
    if (o)
      throw o;
    let l = !1;
    const u = {};
    for (let c = 0; c < r.length; c++) {
      const p = r[c], d = n[p], m = s[p], g = d(m, a);
      if (typeof g > "u")
        throw a && a.type, new Error(ot(14));
      u[p] = g, l = l || g !== m;
    }
    return l = l || r.length !== Object.keys(s).length, l ? u : s;
  };
}
function hl(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function J_(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(ot(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (l, ...u) => i(l, ...u)
    }, a = e.map((l) => l(s));
    return i = hl(...a)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function Up(e) {
  return vr(e) && "type" in e && typeof e.type == "string";
}
var Hp = Symbol.for("immer-nothing"), Zi = Symbol.for("immer-draftable"), Tt = Symbol.for("immer-state");
function st(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Zr = Object.getPrototypeOf;
function Sn(e) {
  return !!e && !!e[Tt];
}
function ln(e) {
  var t;
  return e ? W0(e) || Array.isArray(e) || !!e[Zi] || !!((t = e.constructor) != null && t[Zi]) || $s(e) || Fs(e) : !1;
}
var eC = Object.prototype.constructor.toString();
function W0(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Zr(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === eC;
}
function tC(e) {
  return Sn(e) || st(15, e), e[Tt].base_;
}
function ys(e, t) {
  qr(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function qr(e) {
  const t = e[Tt];
  return t ? t.type_ : Array.isArray(e) ? 1 : $s(e) ? 2 : Fs(e) ? 3 : 0;
}
function ws(e, t) {
  return qr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Rc(e, t) {
  return qr(e) === 2 ? e.get(t) : e[t];
}
function Q0(e, t, n) {
  const r = qr(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function nC(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function $s(e) {
  return e instanceof Map;
}
function Fs(e) {
  return e instanceof Set;
}
function Ir(e) {
  return e.copy_ || e.base_;
}
function of(e, t) {
  if ($s(e))
    return new Map(e);
  if (Fs(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = W0(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Tt];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const s = o[i], a = r[s];
      a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (r[s] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: a.enumerable,
        value: e[s]
      });
    }
    return Object.create(Zr(e), r);
  } else {
    const r = Zr(e);
    if (r !== null && n)
      return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function Wp(e, t = !1) {
  return hu(e) || Sn(e) || !ln(e) || (qr(e) > 1 && (e.set = e.add = e.clear = e.delete = rC), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Wp(r, !0))), e;
}
function rC() {
  st(2);
}
function hu(e) {
  return Object.isFrozen(e);
}
var sf = {};
function Gr(e) {
  const t = sf[e];
  return t || st(0, e), t;
}
function oC(e, t) {
  sf[e] || (sf[e] = t);
}
var xs;
function K0() {
  return xs;
}
function iC(e, t) {
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
function sg(e, t) {
  t && (Gr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function af(e) {
  lf(e), e.drafts_.forEach(sC), e.drafts_ = null;
}
function lf(e) {
  e === xs && (xs = e.parent_);
}
function ag(e) {
  return xs = iC(xs, e);
}
function sC(e) {
  const t = e[Tt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function lg(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Tt].modified_ && (af(t), st(4)), ln(e) && (e = ml(t, e), t.parent_ || gl(t, e)), t.patches_ && Gr("Patches").generateReplacementPatches_(
    n[Tt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = ml(t, n, []), af(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Hp ? e : void 0;
}
function ml(e, t, n) {
  if (hu(t))
    return t;
  const r = t[Tt];
  if (!r)
    return ys(
      t,
      (o, i) => ug(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return gl(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, s = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), ys(
      i,
      (a, l) => ug(e, r, o, a, l, n, s)
    ), gl(e, o, !1), n && e.patches_ && Gr("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function ug(e, t, n, r, o, i, s) {
  if (Sn(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ws(t.assigned_, r) ? i.concat(r) : void 0, l = ml(e, o, a);
    if (Q0(n, r, l), Sn(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else s && n.add(o);
  if (ln(o) && !hu(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    ml(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && gl(e, o);
  }
}
function gl(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Wp(t, n);
}
function aC(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : K0(),
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
  let o = r, i = Qp;
  n && (o = [r], i = Ss);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return r.draft_ = a, r.revoke_ = s, a;
}
var Qp = {
  get(e, t) {
    if (t === Tt)
      return e;
    const n = Ir(e);
    if (!ws(n, t))
      return lC(e, n, t);
    const r = n[t];
    return e.finalized_ || !ln(r) ? r : r === Ac(e.base_, t) ? (Pc(e), e.copy_[t] = cf(r, e)) : r;
  },
  has(e, t) {
    return t in Ir(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Ir(e));
  },
  set(e, t, n) {
    const r = Z0(Ir(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Ac(Ir(e), t), i = o == null ? void 0 : o[Tt];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (nC(n, o) && (n !== void 0 || ws(e.base_, t)))
        return !0;
      Pc(e), uf(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ac(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Pc(e), uf(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Ir(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    st(11);
  },
  getPrototypeOf(e) {
    return Zr(e.base_);
  },
  setPrototypeOf() {
    st(12);
  }
}, Ss = {};
ys(Qp, (e, t) => {
  Ss[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Ss.deleteProperty = function(e, t) {
  return Ss.set.call(this, e, t, void 0);
};
Ss.set = function(e, t, n) {
  return Qp.set.call(this, e[0], t, n, e[0]);
};
function Ac(e, t) {
  const n = e[Tt];
  return (n ? Ir(n) : e)[t];
}
function lC(e, t, n) {
  var o;
  const r = Z0(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Z0(e, t) {
  if (!(t in e))
    return;
  let n = Zr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = Zr(n);
  }
}
function uf(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && uf(e.parent_));
}
function Pc(e) {
  e.copy_ || (e.copy_ = of(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var uC = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const s = this;
        return function(l = i, ...u) {
          return s.produce(l, (c) => n.call(this, c, ...u));
        };
      }
      typeof n != "function" && st(6), r !== void 0 && typeof r != "function" && st(7);
      let o;
      if (ln(t)) {
        const i = ag(this), s = cf(t, void 0);
        let a = !0;
        try {
          o = n(s), a = !1;
        } finally {
          a ? af(i) : lf(i);
        }
        return sg(i, r), lg(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Hp && (o = void 0), this.autoFreeze_ && Wp(o, !0), r) {
          const i = [], s = [];
          Gr("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
        }
        return o;
      } else
        st(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (s, ...a) => this.produceWithPatches(s, (l) => t(l, ...a));
      let r, o;
      return [this.produce(t, n, (s, a) => {
        r = s, o = a;
      }), r, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ln(e) || st(8), Sn(e) && (e = cC(e));
    const t = ag(this), n = cf(e, void 0);
    return n[Tt].isManual_ = !0, lf(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Tt];
    (!n || !n.isManual_) && st(9);
    const { scope_: r } = n;
    return sg(r, t), lg(void 0, r);
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
    const r = Gr("Patches").applyPatches_;
    return Sn(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function cf(e, t) {
  const n = $s(e) ? Gr("MapSet").proxyMap_(e, t) : Fs(e) ? Gr("MapSet").proxySet_(e, t) : aC(e, t);
  return (t ? t.scope_ : K0()).drafts_.push(n), n;
}
function cC(e) {
  return Sn(e) || st(10, e), q0(e);
}
function q0(e) {
  if (!ln(e) || hu(e))
    return e;
  const t = e[Tt];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = of(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = of(e, !0);
  return ys(n, (r, o) => {
    Q0(n, r, q0(o));
  }), t && (t.finalized_ = !1), n;
}
function dC() {
  const t = "replace", n = "add", r = "remove";
  function o(d, m, g, w) {
    switch (d.type_) {
      case 0:
      case 2:
        return s(
          d,
          m,
          g,
          w
        );
      case 1:
        return i(d, m, g, w);
      case 3:
        return a(
          d,
          m,
          g,
          w
        );
    }
  }
  function i(d, m, g, w) {
    let { base_: x, assigned_: v } = d, f = d.copy_;
    f.length < x.length && ([x, f] = [f, x], [g, w] = [w, g]);
    for (let h = 0; h < x.length; h++)
      if (v[h] && f[h] !== x[h]) {
        const y = m.concat([h]);
        g.push({
          op: t,
          path: y,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: p(f[h])
        }), w.push({
          op: t,
          path: y,
          value: p(x[h])
        });
      }
    for (let h = x.length; h < f.length; h++) {
      const y = m.concat([h]);
      g.push({
        op: n,
        path: y,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: p(f[h])
      });
    }
    for (let h = f.length - 1; x.length <= h; --h) {
      const y = m.concat([h]);
      w.push({
        op: r,
        path: y
      });
    }
  }
  function s(d, m, g, w) {
    const { base_: x, copy_: v } = d;
    ys(d.assigned_, (f, h) => {
      const y = Rc(x, f), S = Rc(v, f), _ = h ? ws(x, f) ? t : n : r;
      if (y === S && _ === t)
        return;
      const C = m.concat(f);
      g.push(_ === r ? { op: _, path: C } : { op: _, path: C, value: S }), w.push(
        _ === n ? { op: r, path: C } : _ === r ? { op: n, path: C, value: p(y) } : { op: t, path: C, value: p(y) }
      );
    });
  }
  function a(d, m, g, w) {
    let { base_: x, copy_: v } = d, f = 0;
    x.forEach((h) => {
      if (!v.has(h)) {
        const y = m.concat([f]);
        g.push({
          op: r,
          path: y,
          value: h
        }), w.unshift({
          op: n,
          path: y,
          value: h
        });
      }
      f++;
    }), f = 0, v.forEach((h) => {
      if (!x.has(h)) {
        const y = m.concat([f]);
        g.push({
          op: n,
          path: y,
          value: h
        }), w.unshift({
          op: r,
          path: y,
          value: h
        });
      }
      f++;
    });
  }
  function l(d, m, g, w) {
    g.push({
      op: t,
      path: [],
      value: m === Hp ? void 0 : m
    }), w.push({
      op: t,
      path: [],
      value: d
    });
  }
  function u(d, m) {
    return m.forEach((g) => {
      const { path: w, op: x } = g;
      let v = d;
      for (let S = 0; S < w.length - 1; S++) {
        const _ = qr(v);
        let C = w[S];
        typeof C != "string" && typeof C != "number" && (C = "" + C), (_ === 0 || _ === 1) && (C === "__proto__" || C === "constructor") && st(19), typeof v == "function" && C === "prototype" && st(19), v = Rc(v, C), typeof v != "object" && st(18, w.join("/"));
      }
      const f = qr(v), h = c(g.value), y = w[w.length - 1];
      switch (x) {
        case t:
          switch (f) {
            case 2:
              return v.set(y, h);
            case 3:
              st(16);
            default:
              return v[y] = h;
          }
        case n:
          switch (f) {
            case 1:
              return y === "-" ? v.push(h) : v.splice(y, 0, h);
            case 2:
              return v.set(y, h);
            case 3:
              return v.add(h);
            default:
              return v[y] = h;
          }
        case r:
          switch (f) {
            case 1:
              return v.splice(y, 1);
            case 2:
              return v.delete(y);
            case 3:
              return v.delete(g.value);
            default:
              return delete v[y];
          }
        default:
          st(17, x);
      }
    }), d;
  }
  function c(d) {
    if (!ln(d))
      return d;
    if (Array.isArray(d))
      return d.map(c);
    if ($s(d))
      return new Map(
        Array.from(d.entries()).map(([g, w]) => [g, c(w)])
      );
    if (Fs(d))
      return new Set(Array.from(d).map(c));
    const m = Object.create(Zr(d));
    for (const g in d)
      m[g] = c(d[g]);
    return ws(d, Zi) && (m[Zi] = d[Zi]), m;
  }
  function p(d) {
    return Sn(d) ? c(d) : d;
  }
  oC("Patches", {
    applyPatches_: u,
    generatePatches_: o,
    generateReplacementPatches_: l
  });
}
var Lt = new uC(), Ls = Lt.produce, G0 = Lt.produceWithPatches.bind(
  Lt
);
Lt.setAutoFreeze.bind(Lt);
Lt.setUseStrictShallowCopy.bind(Lt);
var cg = Lt.applyPatches.bind(Lt);
Lt.createDraft.bind(Lt);
Lt.finishDraft.bind(Lt);
function fC(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function pC(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function hC(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var dg = (e) => Array.isArray(e) ? e : [e];
function mC(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return hC(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function gC(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var vC = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, yC = typeof WeakRef < "u" ? WeakRef : vC, wC = 0, fg = 1;
function ha() {
  return {
    s: wC,
    v: void 0,
    o: null,
    p: null
  };
}
function vl(e, t = {}) {
  let n = ha();
  const { resultEqualityCheck: r } = t;
  let o, i = 0;
  function s() {
    var p;
    let a = n;
    const { length: l } = arguments;
    for (let d = 0, m = l; d < m; d++) {
      const g = arguments[d];
      if (typeof g == "function" || typeof g == "object" && g !== null) {
        let w = a.o;
        w === null && (a.o = w = /* @__PURE__ */ new WeakMap());
        const x = w.get(g);
        x === void 0 ? (a = ha(), w.set(g, a)) : a = x;
      } else {
        let w = a.p;
        w === null && (a.p = w = /* @__PURE__ */ new Map());
        const x = w.get(g);
        x === void 0 ? (a = ha(), w.set(g, a)) : a = x;
      }
    }
    const u = a;
    let c;
    if (a.s === fg)
      c = a.v;
    else if (c = e.apply(null, arguments), i++, r) {
      const d = ((p = o == null ? void 0 : o.deref) == null ? void 0 : p.call(o)) ?? o;
      d != null && r(d, c) && (c = d, i !== 0 && i--), o = typeof c == "object" && c !== null || typeof c == "function" ? new yC(c) : c;
    }
    return u.s = fg, u.v = c, c;
  }
  return s.clearCache = () => {
    n = ha(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function xC(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, l = {}, u = o.pop();
    typeof u == "object" && (l = u, u = o.pop()), fC(
      u,
      `createSelector expects an output function after the inputs, but received: [${typeof u}]`
    );
    const c = {
      ...n,
      ...l
    }, {
      memoize: p,
      memoizeOptions: d = [],
      argsMemoize: m = vl,
      argsMemoizeOptions: g = [],
      devModeChecks: w = {}
    } = c, x = dg(d), v = dg(g), f = mC(o), h = p(function() {
      return i++, u.apply(
        null,
        arguments
      );
    }, ...x), y = m(function() {
      s++;
      const _ = gC(
        f,
        arguments
      );
      return a = h.apply(null, _), a;
    }, ...v);
    return Object.assign(y, {
      resultFunc: u,
      memoizedResultFunc: h,
      dependencies: f,
      dependencyRecomputations: () => s,
      resetDependencyRecomputations: () => {
        s = 0;
      },
      lastResult: () => a,
      recomputations: () => i,
      resetRecomputations: () => {
        i = 0;
      },
      memoize: p,
      argsMemoize: m
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Kp = /* @__PURE__ */ xC(vl), SC = Object.assign(
  (e, t = Kp) => {
    pC(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), r = n.map(
      (i) => e[i]
    );
    return t(
      r,
      (...i) => i.reduce((s, a, l) => (s[n[l]] = a, s), {})
    );
  },
  { withTypes: () => SC }
);
function Y0(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var kC = Y0(), _C = Y0, CC = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? hl : hl.apply(null, arguments);
}, bC = (e) => e && typeof e.match == "function";
function vt(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(lt(0));
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => Up(r) && r.type === e, n;
}
function pg(e, t) {
  for (const n of e)
    if (t(n))
      return n;
}
var X0 = class Ai extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ai.prototype);
  }
  static get [Symbol.species]() {
    return Ai;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Ai(...t[0].concat(this)) : new Ai(...t.concat(this));
  }
};
function hg(e) {
  return ln(e) ? Ls(e, () => {
  }) : e;
}
function mg(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(lt(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function EC(e) {
  return typeof e == "boolean";
}
var TC = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new X0();
  return n && (EC(n) ? s.push(kC) : s.push(_C(n.extraArgument))), s;
}, bo = "RTK_autoBatch", ki = () => (e) => ({
  payload: e,
  meta: {
    [bo]: !0
  }
}), J0 = (e) => (t) => {
  setTimeout(t, e);
}, RC = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : J0(10), AC = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), l = e.type === "tick" ? queueMicrotask : e.type === "raf" ? RC : e.type === "callback" ? e.queueNotification : J0(e.timeout), u = () => {
    s = !1, i && (i = !1, a.forEach((c) => c()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(c) {
      const p = () => o && c(), d = r.subscribe(p);
      return a.add(c), () => {
        d(), a.delete(c);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(c) {
      var p;
      try {
        return o = !((p = c == null ? void 0 : c.meta) != null && p[bo]), i = !o, i && (s || (s = !0, l(u))), r.dispatch(c);
      } finally {
        o = !0;
      }
    }
  });
}, PC = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new X0(e);
  return r && o.push(AC(typeof r == "object" ? r : void 0)), o;
};
function IC(e) {
  const t = TC(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let a;
  if (typeof n == "function")
    a = n;
  else if (vr(n))
    a = H0(n);
  else
    throw new Error(lt(1));
  let l;
  typeof r == "function" ? l = r(t) : l = t();
  let u = hl;
  o && (u = CC({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof o == "object" && o
  }));
  const c = J_(...l), p = PC(c);
  let d = typeof s == "function" ? s(p) : p();
  const m = u(...d);
  return U0(a, i, m);
}
function e1(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, s) {
      const a = typeof i == "string" ? i : i.type;
      if (!a)
        throw new Error(lt(28));
      if (a in t)
        throw new Error(lt(29));
      return t[a] = s, o;
    },
    addMatcher(i, s) {
      return n.push({
        matcher: i,
        reducer: s
      }), o;
    },
    addDefaultCase(i) {
      return r = i, o;
    }
  };
  return e(o), [t, n, r];
}
function OC(e) {
  return typeof e == "function";
}
function jC(e, t) {
  let [n, r, o] = e1(t), i;
  if (OC(e))
    i = () => hg(e());
  else {
    const a = hg(e);
    i = () => a;
  }
  function s(a = i(), l) {
    let u = [n[l.type], ...r.filter(({
      matcher: c
    }) => c(l)).map(({
      reducer: c
    }) => c)];
    return u.filter((c) => !!c).length === 0 && (u = [o]), u.reduce((c, p) => {
      if (p)
        if (Sn(c)) {
          const m = p(c, l);
          return m === void 0 ? c : m;
        } else {
          if (ln(c))
            return Ls(c, (d) => p(d, l));
          {
            const d = p(c, l);
            if (d === void 0) {
              if (c === null)
                return c;
              throw new Error(lt(9));
            }
            return d;
          }
        }
      return c;
    }, a);
  }
  return s.getInitialState = i, s;
}
var t1 = (e, t) => bC(e) ? e.match(t) : e(t);
function kn(...e) {
  return (t) => e.some((n) => t1(n, t));
}
function qi(...e) {
  return (t) => e.every((n) => t1(n, t));
}
function mu(e, t) {
  if (!e || !e.meta) return !1;
  const n = typeof e.meta.requestId == "string", r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function zs(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function Zp(...e) {
  return e.length === 0 ? (t) => mu(t, ["pending"]) : zs(e) ? kn(...e.map((t) => t.pending)) : Zp()(e[0]);
}
function Zo(...e) {
  return e.length === 0 ? (t) => mu(t, ["rejected"]) : zs(e) ? kn(...e.map((t) => t.rejected)) : Zo()(e[0]);
}
function gu(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0 ? qi(Zo(...e), t) : zs(e) ? qi(Zo(...e), t) : gu()(e[0]);
}
function yr(...e) {
  return e.length === 0 ? (t) => mu(t, ["fulfilled"]) : zs(e) ? kn(...e.map((t) => t.fulfilled)) : yr()(e[0]);
}
function df(...e) {
  return e.length === 0 ? (t) => mu(t, ["pending", "fulfilled", "rejected"]) : zs(e) ? kn(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : df()(e[0]);
}
var MC = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", qp = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += MC[Math.random() * 64 | 0];
  return t;
}, DC = ["name", "message", "stack", "code"], Ic = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    fi(this, "_type");
    this.payload = e, this.meta = t;
  }
}, gg = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    fi(this, "_type");
    this.payload = e, this.meta = t;
  }
}, NC = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of DC)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, vg = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = vt(t + "/fulfilled", (l, u, c, p) => ({
      payload: l,
      meta: {
        ...p || {},
        arg: c,
        requestId: u,
        requestStatus: "fulfilled"
      }
    })), i = vt(t + "/pending", (l, u, c) => ({
      payload: void 0,
      meta: {
        ...c || {},
        arg: u,
        requestId: l,
        requestStatus: "pending"
      }
    })), s = vt(t + "/rejected", (l, u, c, p, d) => ({
      payload: p,
      error: (r && r.serializeError || NC)(l || "Rejected"),
      meta: {
        ...d || {},
        arg: c,
        requestId: u,
        rejectedWithValue: !!p,
        requestStatus: "rejected",
        aborted: (l == null ? void 0 : l.name) === "AbortError",
        condition: (l == null ? void 0 : l.name) === "ConditionError"
      }
    }));
    function a(l) {
      return (u, c, p) => {
        const d = r != null && r.idGenerator ? r.idGenerator(l) : qp(), m = new AbortController();
        let g, w;
        function x(f) {
          w = f, m.abort();
        }
        const v = async function() {
          var y, S;
          let f;
          try {
            let _ = (y = r == null ? void 0 : r.condition) == null ? void 0 : y.call(r, l, {
              getState: c,
              extra: p
            });
            if (FC(_) && (_ = await _), _ === !1 || m.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const C = new Promise((T, M) => {
              g = () => {
                M({
                  name: "AbortError",
                  message: w || "Aborted"
                });
              }, m.signal.addEventListener("abort", g);
            });
            u(i(d, l, (S = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : S.call(r, {
              requestId: d,
              arg: l
            }, {
              getState: c,
              extra: p
            }))), f = await Promise.race([C, Promise.resolve(n(l, {
              dispatch: u,
              getState: c,
              extra: p,
              requestId: d,
              signal: m.signal,
              abort: x,
              rejectWithValue: (T, M) => new Ic(T, M),
              fulfillWithValue: (T, M) => new gg(T, M)
            })).then((T) => {
              if (T instanceof Ic)
                throw T;
              return T instanceof gg ? o(T.payload, d, l, T.meta) : o(T, d, l);
            })]);
          } catch (_) {
            f = _ instanceof Ic ? s(null, d, l, _.payload, _.meta) : s(_, d, l);
          } finally {
            g && m.signal.removeEventListener("abort", g);
          }
          return r && !r.dispatchConditionRejection && s.match(f) && f.meta.condition || u(f), f;
        }();
        return Object.assign(v, {
          abort: x,
          requestId: d,
          arg: l,
          unwrap() {
            return v.then($C);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: i,
      rejected: s,
      fulfilled: o,
      settled: kn(s, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function $C(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function FC(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var LC = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function zC(e, t) {
  return `${e}/${t}`;
}
function BC({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[LC];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(lt(11));
    typeof process < "u";
    const a = (typeof o.reducers == "function" ? o.reducers(UC()) : o.reducers) || {}, l = Object.keys(a), u = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, c = {
      addCase(h, y) {
        const S = typeof h == "string" ? h : h.type;
        if (!S)
          throw new Error(lt(12));
        if (S in u.sliceCaseReducersByType)
          throw new Error(lt(13));
        return u.sliceCaseReducersByType[S] = y, c;
      },
      addMatcher(h, y) {
        return u.sliceMatchers.push({
          matcher: h,
          reducer: y
        }), c;
      },
      exposeAction(h, y) {
        return u.actionCreators[h] = y, c;
      },
      exposeCaseReducer(h, y) {
        return u.sliceCaseReducersByName[h] = y, c;
      }
    };
    l.forEach((h) => {
      const y = a[h], S = {
        reducerName: h,
        type: zC(i, h),
        createNotation: typeof o.reducers == "function"
      };
      WC(y) ? KC(S, y, c, t) : HC(S, y, c);
    });
    function p() {
      const [h = {}, y = [], S = void 0] = typeof o.extraReducers == "function" ? e1(o.extraReducers) : [o.extraReducers], _ = {
        ...h,
        ...u.sliceCaseReducersByType
      };
      return jC(o.initialState, (C) => {
        for (let T in _)
          C.addCase(T, _[T]);
        for (let T of u.sliceMatchers)
          C.addMatcher(T.matcher, T.reducer);
        for (let T of y)
          C.addMatcher(T.matcher, T.reducer);
        S && C.addDefaultCase(S);
      });
    }
    const d = (h) => h, m = /* @__PURE__ */ new Map();
    let g;
    function w(h, y) {
      return g || (g = p()), g(h, y);
    }
    function x() {
      return g || (g = p()), g.getInitialState();
    }
    function v(h, y = !1) {
      function S(C) {
        let T = C[h];
        return typeof T > "u" && y && (T = x()), T;
      }
      function _(C = d) {
        const T = mg(m, y, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return mg(T, C, {
          insert: () => {
            const M = {};
            for (const [j, U] of Object.entries(o.selectors ?? {}))
              M[j] = VC(U, C, x, y);
            return M;
          }
        });
      }
      return {
        reducerPath: h,
        getSelectors: _,
        get selectors() {
          return _(S);
        },
        selectSlice: S
      };
    }
    const f = {
      name: i,
      reducer: w,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: x,
      ...v(s),
      injectInto(h, {
        reducerPath: y,
        ...S
      } = {}) {
        const _ = y ?? s;
        return h.inject({
          reducerPath: _,
          reducer: w
        }, S), {
          ...f,
          ...v(_, !0)
        };
      }
    };
    return f;
  };
}
function VC(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    return typeof a > "u" && r && (a = n()), e(a, ...s);
  }
  return o.unwrapped = e, o;
}
var hn = /* @__PURE__ */ BC();
function UC() {
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
function HC({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !QC(r))
      throw new Error(lt(17));
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? vt(e, s) : vt(e));
}
function WC(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function QC(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function KC({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(lt(18));
  const {
    payloadCreator: i,
    fulfilled: s,
    pending: a,
    rejected: l,
    settled: u,
    options: c
  } = n, p = o(e, i, c);
  r.exposeAction(t, p), s && r.addCase(p.fulfilled, s), a && r.addCase(p.pending, a), l && r.addCase(p.rejected, l), u && r.addMatcher(p.settled, u), r.exposeCaseReducer(t, {
    fulfilled: s || ma,
    pending: a || ma,
    rejected: l || ma,
    settled: u || ma
  });
}
function ma() {
}
var ZC = "task", n1 = "listener", r1 = "completed", Gp = "cancelled", qC = `task-${Gp}`, GC = `task-${r1}`, ff = `${n1}-${Gp}`, YC = `${n1}-${r1}`, vu = class {
  constructor(e) {
    fi(this, "name", "TaskAbortError");
    fi(this, "message");
    this.code = e, this.message = `${ZC} ${Gp} (reason: ${e})`;
  }
}, Yp = (e, t) => {
  if (typeof e != "function")
    throw new Error(lt(32));
}, yl = () => {
}, o1 = (e, t = yl) => (e.catch(t), e), i1 = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), zr = (e, t) => {
  const n = e.signal;
  n.aborted || ("reason" in n || Object.defineProperty(n, "reason", {
    enumerable: !0,
    value: t,
    configurable: !0,
    writable: !0
  }), e.abort(t));
}, Br = (e) => {
  if (e.aborted) {
    const {
      reason: t
    } = e;
    throw new vu(t);
  }
};
function s1(e, t) {
  let n = yl;
  return new Promise((r, o) => {
    const i = () => o(new vu(e.reason));
    if (e.aborted) {
      i();
      return;
    }
    n = i1(e, i), t.finally(() => n()).then(r, o);
  }).finally(() => {
    n = yl;
  });
}
var XC = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (n) {
    return {
      status: n instanceof vu ? "cancelled" : "rejected",
      error: n
    };
  } finally {
    t == null || t();
  }
}, wl = (e) => (t) => o1(s1(e, t).then((n) => (Br(e), n))), a1 = (e) => {
  const t = wl(e);
  return (n) => t(new Promise((r) => setTimeout(r, n)));
}, {
  assign: Do
} = Object, yg = {}, yu = "listenerMiddleware", JC = (e, t) => {
  const n = (r) => i1(e, () => zr(r, e.reason));
  return (r, o) => {
    Yp(r);
    const i = new AbortController();
    n(i);
    const s = XC(async () => {
      Br(e), Br(i.signal);
      const a = await r({
        pause: wl(i.signal),
        delay: a1(i.signal),
        signal: i.signal
      });
      return Br(i.signal), a;
    }, () => zr(i, GC));
    return o != null && o.autoJoin && t.push(s.catch(yl)), {
      result: wl(e)(s),
      cancel() {
        zr(i, qC);
      }
    };
  };
}, eb = (e, t) => {
  const n = async (r, o) => {
    Br(t);
    let i = () => {
    };
    const a = [new Promise((l, u) => {
      let c = e({
        predicate: r,
        effect: (p, d) => {
          d.unsubscribe(), l([p, d.getState(), d.getOriginalState()]);
        }
      });
      i = () => {
        c(), u();
      };
    })];
    o != null && a.push(new Promise((l) => setTimeout(l, o, null)));
    try {
      const l = await s1(t, Promise.race(a));
      return Br(t), l;
    } finally {
      i();
    }
  };
  return (r, o) => o1(n(r, o));
}, l1 = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = vt(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o) throw new Error(lt(21));
  return Yp(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, u1 = /* @__PURE__ */ Do((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = l1(e);
  return {
    id: qp(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(lt(22));
    }
  };
}, {
  withTypes: () => u1
}), pf = (e) => {
  e.pending.forEach((t) => {
    zr(t, ff);
  });
}, tb = (e) => () => {
  e.forEach(pf), e.clear();
}, wg = (e, t, n) => {
  try {
    e(t, n);
  } catch (r) {
    setTimeout(() => {
      throw r;
    }, 0);
  }
}, c1 = /* @__PURE__ */ Do(/* @__PURE__ */ vt(`${yu}/add`), {
  withTypes: () => c1
}), nb = /* @__PURE__ */ vt(`${yu}/removeAll`), d1 = /* @__PURE__ */ Do(/* @__PURE__ */ vt(`${yu}/remove`), {
  withTypes: () => d1
}), rb = (...e) => {
  console.error(`${yu}/error`, ...e);
}, ob = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), {
    extra: n,
    onError: r = rb
  } = e;
  Yp(r);
  const o = (c) => (c.unsubscribe = () => t.delete(c.id), t.set(c.id, c), (p) => {
    c.unsubscribe(), p != null && p.cancelActive && pf(c);
  }), i = (c) => {
    let p = pg(Array.from(t.values()), (d) => d.effect === c.effect);
    return p || (p = u1(c)), o(p);
  };
  Do(i, {
    withTypes: () => i
  });
  const s = (c) => {
    const {
      type: p,
      effect: d,
      predicate: m
    } = l1(c), g = pg(Array.from(t.values()), (w) => (typeof p == "string" ? w.type === p : w.predicate === m) && w.effect === d);
    return g && (g.unsubscribe(), c.cancelActive && pf(g)), !!g;
  };
  Do(s, {
    withTypes: () => s
  });
  const a = async (c, p, d, m) => {
    const g = new AbortController(), w = eb(i, g.signal), x = [];
    try {
      c.pending.add(g), await Promise.resolve(c.effect(
        p,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        Do({}, d, {
          getOriginalState: m,
          condition: (v, f) => w(v, f).then(Boolean),
          take: w,
          delay: a1(g.signal),
          pause: wl(g.signal),
          extra: n,
          signal: g.signal,
          fork: JC(g.signal, x),
          unsubscribe: c.unsubscribe,
          subscribe: () => {
            t.set(c.id, c);
          },
          cancelActiveListeners: () => {
            c.pending.forEach((v, f, h) => {
              v !== g && (zr(v, ff), h.delete(v));
            });
          },
          cancel: () => {
            zr(g, ff), c.pending.delete(g);
          },
          throwIfCancelled: () => {
            Br(g.signal);
          }
        })
      ));
    } catch (v) {
      v instanceof vu || wg(r, v, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(x), zr(g, YC), c.pending.delete(g);
    }
  }, l = tb(t);
  return {
    middleware: (c) => (p) => (d) => {
      if (!Up(d))
        return p(d);
      if (c1.match(d))
        return i(d.payload);
      if (nb.match(d)) {
        l();
        return;
      }
      if (d1.match(d))
        return s(d.payload);
      let m = c.getState();
      const g = () => {
        if (m === yg)
          throw new Error(lt(23));
        return m;
      };
      let w;
      try {
        if (w = p(d), t.size > 0) {
          const x = c.getState(), v = Array.from(t.values());
          for (const f of v) {
            let h = !1;
            try {
              h = f.predicate(d, x, m);
            } catch (y) {
              h = !1, wg(r, y, {
                raisedBy: "predicate"
              });
            }
            h && a(f, d, c, g);
          }
        }
      } finally {
        m = yg;
      }
      return w;
    },
    startListening: i,
    stopListening: s,
    clearListeners: l
  };
};
function lt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const ib = {
  theme: void 0,
  kind: void 0
}, f1 = hn({
  name: "theme",
  initialState: ib,
  reducers: {
    changeTheme: (e, t) => {
      e.kind = t.payload.kind, e.theme = { ...e.theme, ...t.payload.theme ?? {} }, e.kind === "light" ? (e.theme.computedOne = "rgba(0, 0, 0, 0.05)", e.theme.computedTwo = "rgba(0, 0, 0, 0.1)") : e.kind === "dark" ? (e.theme.computedOne = "rgba(255, 255, 255, 0.05)", e.theme.computedTwo = "rgba(255, 255, 255, 0.1)") : (e.theme.computedOne = "transparent", e.theme.computedTwo = "transparent");
    }
  }
}), sb = Bp, { changeTheme: ab } = f1.actions, lb = f1.reducer;
function ub() {
  const e = sb((t) => t.theme);
  return /* @__PURE__ */ k.jsxs("style", { children: [
    db(e.theme),
    cb()
  ] });
}
function cb() {
  return `
  body {
    padding: 0;
    margin: 0;
    background-color: var(--xliic-background);
    color: var(--xliic-foreground);
    }`;
}
function db(e) {
  const t = [];
  if (e !== void 0)
    for (const n of q_)
      e[n] && t.push(`${q[n]}: ${e[n]};`);
  return `:root {
    ${t.join(`
`)}
  }`;
}
var p1 = { exports: {} }, Ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xp = Symbol.for("react.element"), Jp = Symbol.for("react.portal"), wu = Symbol.for("react.fragment"), xu = Symbol.for("react.strict_mode"), Su = Symbol.for("react.profiler"), ku = Symbol.for("react.provider"), _u = Symbol.for("react.context"), fb = Symbol.for("react.server_context"), Cu = Symbol.for("react.forward_ref"), bu = Symbol.for("react.suspense"), Eu = Symbol.for("react.suspense_list"), Tu = Symbol.for("react.memo"), Ru = Symbol.for("react.lazy"), pb = Symbol.for("react.offscreen"), h1;
h1 = Symbol.for("react.module.reference");
function Xt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Xp:
        switch (e = e.type, e) {
          case wu:
          case Su:
          case xu:
          case bu:
          case Eu:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case fb:
              case _u:
              case Cu:
              case Ru:
              case Tu:
              case ku:
                return e;
              default:
                return t;
            }
        }
      case Jp:
        return t;
    }
  }
}
Ie.ContextConsumer = _u;
Ie.ContextProvider = ku;
Ie.Element = Xp;
Ie.ForwardRef = Cu;
Ie.Fragment = wu;
Ie.Lazy = Ru;
Ie.Memo = Tu;
Ie.Portal = Jp;
Ie.Profiler = Su;
Ie.StrictMode = xu;
Ie.Suspense = bu;
Ie.SuspenseList = Eu;
Ie.isAsyncMode = function() {
  return !1;
};
Ie.isConcurrentMode = function() {
  return !1;
};
Ie.isContextConsumer = function(e) {
  return Xt(e) === _u;
};
Ie.isContextProvider = function(e) {
  return Xt(e) === ku;
};
Ie.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xp;
};
Ie.isForwardRef = function(e) {
  return Xt(e) === Cu;
};
Ie.isFragment = function(e) {
  return Xt(e) === wu;
};
Ie.isLazy = function(e) {
  return Xt(e) === Ru;
};
Ie.isMemo = function(e) {
  return Xt(e) === Tu;
};
Ie.isPortal = function(e) {
  return Xt(e) === Jp;
};
Ie.isProfiler = function(e) {
  return Xt(e) === Su;
};
Ie.isStrictMode = function(e) {
  return Xt(e) === xu;
};
Ie.isSuspense = function(e) {
  return Xt(e) === bu;
};
Ie.isSuspenseList = function(e) {
  return Xt(e) === Eu;
};
Ie.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === wu || e === Su || e === xu || e === bu || e === Eu || e === pb || typeof e == "object" && e !== null && (e.$$typeof === Ru || e.$$typeof === Tu || e.$$typeof === ku || e.$$typeof === _u || e.$$typeof === Cu || e.$$typeof === h1 || e.getModuleId !== void 0);
};
Ie.typeOf = Xt;
p1.exports = Ie;
var m1 = p1.exports;
function hb(e) {
  function t(A, b, O, $, I) {
    for (var Y = 0, V = 0, fe = 0, ce = 0, de, oe, ye = 0, he = 0, ge, _e = ge = de = 0, pe = 0, Ae = 0, R = 0, D = 0, z = O.length, Z = z - 1, K, F = "", re = "", ke = "", Ee = "", Ne; pe < z; ) {
      if (oe = O.charCodeAt(pe), pe === Z && V + ce + fe + Y !== 0 && (V !== 0 && (oe = V === 47 ? 10 : 47), ce = fe = Y = 0, z++, Z++), V + ce + fe + Y === 0) {
        if (pe === Z && (0 < Ae && (F = F.replace(d, "")), 0 < F.trim().length)) {
          switch (oe) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              F += O.charAt(pe);
          }
          oe = 59;
        }
        switch (oe) {
          case 123:
            for (F = F.trim(), de = F.charCodeAt(0), ge = 1, D = ++pe; pe < z; ) {
              switch (oe = O.charCodeAt(pe)) {
                case 123:
                  ge++;
                  break;
                case 125:
                  ge--;
                  break;
                case 47:
                  switch (oe = O.charCodeAt(pe + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (_e = pe + 1; _e < Z; ++_e)
                          switch (O.charCodeAt(_e)) {
                            case 47:
                              if (oe === 42 && O.charCodeAt(_e - 1) === 42 && pe + 2 !== _e) {
                                pe = _e + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (oe === 47) {
                                pe = _e + 1;
                                break e;
                              }
                          }
                        pe = _e;
                      }
                  }
                  break;
                case 91:
                  oe++;
                case 40:
                  oe++;
                case 34:
                case 39:
                  for (; pe++ < Z && O.charCodeAt(pe) !== oe; )
                    ;
              }
              if (ge === 0) break;
              pe++;
            }
            switch (ge = O.substring(D, pe), de === 0 && (de = (F = F.replace(p, "").trim()).charCodeAt(0)), de) {
              case 64:
                switch (0 < Ae && (F = F.replace(d, "")), oe = F.charCodeAt(1), oe) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ae = b;
                    break;
                  default:
                    Ae = te;
                }
                if (ge = t(b, Ae, ge, oe, I + 1), D = ge.length, 0 < N && (Ae = n(te, F, R), Ne = a(3, ge, Ae, b, L, B, D, oe, I, $), F = Ae.join(""), Ne !== void 0 && (D = (ge = Ne.trim()).length) === 0 && (oe = 0, ge = "")), 0 < D) switch (oe) {
                  case 115:
                    F = F.replace(_, s);
                  case 100:
                  case 109:
                  case 45:
                    ge = F + "{" + ge + "}";
                    break;
                  case 107:
                    F = F.replace(f, "$1 $2"), ge = F + "{" + ge + "}", ge = J === 1 || J === 2 && i("@" + ge, 3) ? "@-webkit-" + ge + "@" + ge : "@" + ge;
                    break;
                  default:
                    ge = F + ge, $ === 112 && (ge = (re += ge, ""));
                }
                else ge = "";
                break;
              default:
                ge = t(b, n(b, F, R), ge, $, I + 1);
            }
            ke += ge, ge = R = Ae = _e = de = 0, F = "", oe = O.charCodeAt(++pe);
            break;
          case 125:
          case 59:
            if (F = (0 < Ae ? F.replace(d, "") : F).trim(), 1 < (D = F.length)) switch (_e === 0 && (de = F.charCodeAt(0), de === 45 || 96 < de && 123 > de) && (D = (F = F.replace(" ", ":")).length), 0 < N && (Ne = a(1, F, b, A, L, B, re.length, $, I, $)) !== void 0 && (D = (F = Ne.trim()).length) === 0 && (F = "\0\0"), de = F.charCodeAt(0), oe = F.charCodeAt(1), de) {
              case 0:
                break;
              case 64:
                if (oe === 105 || oe === 99) {
                  Ee += F + O.charAt(pe);
                  break;
                }
              default:
                F.charCodeAt(D - 1) !== 58 && (re += o(F, de, oe, F.charCodeAt(2)));
            }
            R = Ae = _e = de = 0, F = "", oe = O.charCodeAt(++pe);
        }
      }
      switch (oe) {
        case 13:
        case 10:
          V === 47 ? V = 0 : 1 + de === 0 && $ !== 107 && 0 < F.length && (Ae = 1, F += "\0"), 0 < N * W && a(0, F, b, A, L, B, re.length, $, I, $), B = 1, L++;
          break;
        case 59:
        case 125:
          if (V + ce + fe + Y === 0) {
            B++;
            break;
          }
        default:
          switch (B++, K = O.charAt(pe), oe) {
            case 9:
            case 32:
              if (ce + Y + V === 0) switch (ye) {
                case 44:
                case 58:
                case 9:
                case 32:
                  K = "";
                  break;
                default:
                  oe !== 32 && (K = " ");
              }
              break;
            case 0:
              K = "\\0";
              break;
            case 12:
              K = "\\f";
              break;
            case 11:
              K = "\\v";
              break;
            case 38:
              ce + V + Y === 0 && (Ae = R = 1, K = "\f" + K);
              break;
            case 108:
              if (ce + V + Y + H === 0 && 0 < _e) switch (pe - _e) {
                case 2:
                  ye === 112 && O.charCodeAt(pe - 3) === 58 && (H = ye);
                case 8:
                  he === 111 && (H = he);
              }
              break;
            case 58:
              ce + V + Y === 0 && (_e = pe);
              break;
            case 44:
              V + fe + ce + Y === 0 && (Ae = 1, K += "\r");
              break;
            case 34:
            case 39:
              V === 0 && (ce = ce === oe ? 0 : ce === 0 ? oe : ce);
              break;
            case 91:
              ce + V + fe === 0 && Y++;
              break;
            case 93:
              ce + V + fe === 0 && Y--;
              break;
            case 41:
              ce + V + Y === 0 && fe--;
              break;
            case 40:
              if (ce + V + Y === 0) {
                if (de === 0) switch (2 * ye + 3 * he) {
                  case 533:
                    break;
                  default:
                    de = 1;
                }
                fe++;
              }
              break;
            case 64:
              V + fe + ce + Y + _e + ge === 0 && (ge = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ce + Y + fe)) switch (V) {
                case 0:
                  switch (2 * oe + 3 * O.charCodeAt(pe + 1)) {
                    case 235:
                      V = 47;
                      break;
                    case 220:
                      D = pe, V = 42;
                  }
                  break;
                case 42:
                  oe === 47 && ye === 42 && D + 2 !== pe && (O.charCodeAt(D + 2) === 33 && (re += O.substring(D, pe + 1)), K = "", V = 0);
              }
          }
          V === 0 && (F += K);
      }
      he = ye, ye = oe, pe++;
    }
    if (D = re.length, 0 < D) {
      if (Ae = b, 0 < N && (Ne = a(2, re, Ae, A, L, B, D, $, I, $), Ne !== void 0 && (re = Ne).length === 0)) return Ee + re + ke;
      if (re = Ae.join(",") + "{" + re + "}", J * H !== 0) {
        switch (J !== 2 || i(re, 2) || (H = 0), H) {
          case 111:
            re = re.replace(y, ":-moz-$1") + re;
            break;
          case 112:
            re = re.replace(h, "::-webkit-input-$1") + re.replace(h, "::-moz-$1") + re.replace(h, ":-ms-input-$1") + re;
        }
        H = 0;
      }
    }
    return Ee + re + ke;
  }
  function n(A, b, O) {
    var $ = b.trim().split(x);
    b = $;
    var I = $.length, Y = A.length;
    switch (Y) {
      case 0:
      case 1:
        var V = 0;
        for (A = Y === 0 ? "" : A[0] + " "; V < I; ++V)
          b[V] = r(A, b[V], O).trim();
        break;
      default:
        var fe = V = 0;
        for (b = []; V < I; ++V)
          for (var ce = 0; ce < Y; ++ce)
            b[fe++] = r(A[ce] + " ", $[V], O).trim();
    }
    return b;
  }
  function r(A, b, O) {
    var $ = b.charCodeAt(0);
    switch (33 > $ && ($ = (b = b.trim()).charCodeAt(0)), $) {
      case 38:
        return b.replace(v, "$1" + A.trim());
      case 58:
        return A.trim() + b.replace(v, "$1" + A.trim());
      default:
        if (0 < 1 * O && 0 < b.indexOf("\f")) return b.replace(v, (A.charCodeAt(0) === 58 ? "" : "$1") + A.trim());
    }
    return A + b;
  }
  function o(A, b, O, $) {
    var I = A + ";", Y = 2 * b + 3 * O + 4 * $;
    if (Y === 944) {
      A = I.indexOf(":", 9) + 1;
      var V = I.substring(A, I.length - 1).trim();
      return V = I.substring(0, A).trim() + V + ";", J === 1 || J === 2 && i(V, 1) ? "-webkit-" + V + V : V;
    }
    if (J === 0 || J === 2 && !i(I, 1)) return I;
    switch (Y) {
      case 1015:
        return I.charCodeAt(10) === 97 ? "-webkit-" + I + I : I;
      case 951:
        return I.charCodeAt(3) === 116 ? "-webkit-" + I + I : I;
      case 963:
        return I.charCodeAt(5) === 110 ? "-webkit-" + I + I : I;
      case 1009:
        if (I.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + I + I;
      case 978:
        return "-webkit-" + I + "-moz-" + I + I;
      case 1019:
      case 983:
        return "-webkit-" + I + "-moz-" + I + "-ms-" + I + I;
      case 883:
        if (I.charCodeAt(8) === 45) return "-webkit-" + I + I;
        if (0 < I.indexOf("image-set(", 11)) return I.replace(U, "$1-webkit-$2") + I;
        break;
      case 932:
        if (I.charCodeAt(4) === 45) switch (I.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + I.replace("-grow", "") + "-webkit-" + I + "-ms-" + I.replace("grow", "positive") + I;
          case 115:
            return "-webkit-" + I + "-ms-" + I.replace("shrink", "negative") + I;
          case 98:
            return "-webkit-" + I + "-ms-" + I.replace("basis", "preferred-size") + I;
        }
        return "-webkit-" + I + "-ms-" + I + I;
      case 964:
        return "-webkit-" + I + "-ms-flex-" + I + I;
      case 1023:
        if (I.charCodeAt(8) !== 99) break;
        return V = I.substring(I.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + V + "-webkit-" + I + "-ms-flex-pack" + V + I;
      case 1005:
        return g.test(I) ? I.replace(m, ":-webkit-") + I.replace(m, ":-moz-") + I : I;
      case 1e3:
        switch (V = I.substring(13).trim(), b = V.indexOf("-") + 1, V.charCodeAt(0) + V.charCodeAt(b)) {
          case 226:
            V = I.replace(S, "tb");
            break;
          case 232:
            V = I.replace(S, "tb-rl");
            break;
          case 220:
            V = I.replace(S, "lr");
            break;
          default:
            return I;
        }
        return "-webkit-" + I + "-ms-" + V + I;
      case 1017:
        if (I.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (b = (I = A).length - 10, V = (I.charCodeAt(b) === 33 ? I.substring(0, b) : I).substring(A.indexOf(":", 7) + 1).trim(), Y = V.charCodeAt(0) + (V.charCodeAt(7) | 0)) {
          case 203:
            if (111 > V.charCodeAt(8)) break;
          case 115:
            I = I.replace(V, "-webkit-" + V) + ";" + I;
            break;
          case 207:
          case 102:
            I = I.replace(V, "-webkit-" + (102 < Y ? "inline-" : "") + "box") + ";" + I.replace(V, "-webkit-" + V) + ";" + I.replace(V, "-ms-" + V + "box") + ";" + I;
        }
        return I + ";";
      case 938:
        if (I.charCodeAt(5) === 45) switch (I.charCodeAt(6)) {
          case 105:
            return V = I.replace("-items", ""), "-webkit-" + I + "-webkit-box-" + V + "-ms-flex-" + V + I;
          case 115:
            return "-webkit-" + I + "-ms-flex-item-" + I.replace(T, "") + I;
          default:
            return "-webkit-" + I + "-ms-flex-line-pack" + I.replace("align-content", "").replace(T, "") + I;
        }
        break;
      case 973:
      case 989:
        if (I.charCodeAt(3) !== 45 || I.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (j.test(A) === !0) return (V = A.substring(A.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(A.replace("stretch", "fill-available"), b, O, $).replace(":fill-available", ":stretch") : I.replace(V, "-webkit-" + V) + I.replace(V, "-moz-" + V.replace("fill-", "")) + I;
        break;
      case 962:
        if (I = "-webkit-" + I + (I.charCodeAt(5) === 102 ? "-ms-" + I : "") + I, O + $ === 211 && I.charCodeAt(13) === 105 && 0 < I.indexOf("transform", 10)) return I.substring(0, I.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + I;
    }
    return I;
  }
  function i(A, b) {
    var O = A.indexOf(b === 1 ? ":" : "{"), $ = A.substring(0, b !== 3 ? O : 10);
    return O = A.substring(O + 1, A.length - 1), Q(b !== 2 ? $ : $.replace(M, "$1"), O, b);
  }
  function s(A, b) {
    var O = o(b, b.charCodeAt(0), b.charCodeAt(1), b.charCodeAt(2));
    return O !== b + ";" ? O.replace(C, " or ($1)").substring(4) : "(" + b + ")";
  }
  function a(A, b, O, $, I, Y, V, fe, ce, de) {
    for (var oe = 0, ye = b, he; oe < N; ++oe)
      switch (he = ee[oe].call(c, A, ye, O, $, I, Y, V, fe, ce, de)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ye = he;
      }
    if (ye !== b) return ye;
  }
  function l(A) {
    switch (A) {
      case void 0:
      case null:
        N = ee.length = 0;
        break;
      default:
        if (typeof A == "function") ee[N++] = A;
        else if (typeof A == "object") for (var b = 0, O = A.length; b < O; ++b)
          l(A[b]);
        else W = !!A | 0;
    }
    return l;
  }
  function u(A) {
    return A = A.prefix, A !== void 0 && (Q = null, A ? typeof A != "function" ? J = 1 : (J = 2, Q = A) : J = 0), u;
  }
  function c(A, b) {
    var O = A;
    if (33 > O.charCodeAt(0) && (O = O.trim()), P = O, O = [P], 0 < N) {
      var $ = a(-1, b, O, O, L, B, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (b = $);
    }
    var I = t(te, O, b, 0, 0);
    return 0 < N && ($ = a(-2, I, O, O, L, B, I.length, 0, 0, 0), $ !== void 0 && (I = $)), P = "", H = 0, B = L = 1, I;
  }
  var p = /^\0+/g, d = /[\0\r\f]/g, m = /: */g, g = /zoo|gra/, w = /([,: ])(transform)/g, x = /,\r+?/g, v = /([\t\r\n ])*\f?&/g, f = /@(k\w+)\s*(\S*)\s*/, h = /::(place)/g, y = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, _ = /\(\s*(.*)\s*\)/g, C = /([\s\S]*?);/g, T = /-self|flex-/g, M = /[^]*?(:[rp][el]a[\w-]+)[^]*/, j = /stretch|:\s*\w+\-(?:conte|avail)/, U = /([^-])(image-set\()/, B = 1, L = 1, H = 0, J = 1, te = [], ee = [], N = 0, Q = null, W = 0, P = "";
  return c.use = l, c.set = u, e !== void 0 && u(e), c;
}
var mb = {
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
function gb(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var vb = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xg = /* @__PURE__ */ gb(
  function(e) {
    return vb.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), g1 = { exports: {} }, Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt = typeof Symbol == "function" && Symbol.for, eh = nt ? Symbol.for("react.element") : 60103, th = nt ? Symbol.for("react.portal") : 60106, Au = nt ? Symbol.for("react.fragment") : 60107, Pu = nt ? Symbol.for("react.strict_mode") : 60108, Iu = nt ? Symbol.for("react.profiler") : 60114, Ou = nt ? Symbol.for("react.provider") : 60109, ju = nt ? Symbol.for("react.context") : 60110, nh = nt ? Symbol.for("react.async_mode") : 60111, Mu = nt ? Symbol.for("react.concurrent_mode") : 60111, Du = nt ? Symbol.for("react.forward_ref") : 60112, Nu = nt ? Symbol.for("react.suspense") : 60113, yb = nt ? Symbol.for("react.suspense_list") : 60120, $u = nt ? Symbol.for("react.memo") : 60115, Fu = nt ? Symbol.for("react.lazy") : 60116, wb = nt ? Symbol.for("react.block") : 60121, xb = nt ? Symbol.for("react.fundamental") : 60117, Sb = nt ? Symbol.for("react.responder") : 60118, kb = nt ? Symbol.for("react.scope") : 60119;
function Ut(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case eh:
        switch (e = e.type, e) {
          case nh:
          case Mu:
          case Au:
          case Iu:
          case Pu:
          case Nu:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ju:
              case Du:
              case Fu:
              case $u:
              case Ou:
                return e;
              default:
                return t;
            }
        }
      case th:
        return t;
    }
  }
}
function v1(e) {
  return Ut(e) === Mu;
}
Oe.AsyncMode = nh;
Oe.ConcurrentMode = Mu;
Oe.ContextConsumer = ju;
Oe.ContextProvider = Ou;
Oe.Element = eh;
Oe.ForwardRef = Du;
Oe.Fragment = Au;
Oe.Lazy = Fu;
Oe.Memo = $u;
Oe.Portal = th;
Oe.Profiler = Iu;
Oe.StrictMode = Pu;
Oe.Suspense = Nu;
Oe.isAsyncMode = function(e) {
  return v1(e) || Ut(e) === nh;
};
Oe.isConcurrentMode = v1;
Oe.isContextConsumer = function(e) {
  return Ut(e) === ju;
};
Oe.isContextProvider = function(e) {
  return Ut(e) === Ou;
};
Oe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === eh;
};
Oe.isForwardRef = function(e) {
  return Ut(e) === Du;
};
Oe.isFragment = function(e) {
  return Ut(e) === Au;
};
Oe.isLazy = function(e) {
  return Ut(e) === Fu;
};
Oe.isMemo = function(e) {
  return Ut(e) === $u;
};
Oe.isPortal = function(e) {
  return Ut(e) === th;
};
Oe.isProfiler = function(e) {
  return Ut(e) === Iu;
};
Oe.isStrictMode = function(e) {
  return Ut(e) === Pu;
};
Oe.isSuspense = function(e) {
  return Ut(e) === Nu;
};
Oe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Au || e === Mu || e === Iu || e === Pu || e === Nu || e === yb || typeof e == "object" && e !== null && (e.$$typeof === Fu || e.$$typeof === $u || e.$$typeof === Ou || e.$$typeof === ju || e.$$typeof === Du || e.$$typeof === xb || e.$$typeof === Sb || e.$$typeof === kb || e.$$typeof === wb);
};
Oe.typeOf = Ut;
g1.exports = Oe;
var _b = g1.exports, rh = _b, Cb = {
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
}, bb = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Eb = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, y1 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, oh = {};
oh[rh.ForwardRef] = Eb;
oh[rh.Memo] = y1;
function Sg(e) {
  return rh.isMemo(e) ? y1 : oh[e.$$typeof] || Cb;
}
var Tb = Object.defineProperty, Rb = Object.getOwnPropertyNames, kg = Object.getOwnPropertySymbols, Ab = Object.getOwnPropertyDescriptor, Pb = Object.getPrototypeOf, _g = Object.prototype;
function w1(e, t, n) {
  if (typeof t != "string") {
    if (_g) {
      var r = Pb(t);
      r && r !== _g && w1(e, r, n);
    }
    var o = Rb(t);
    kg && (o = o.concat(kg(t)));
    for (var i = Sg(e), s = Sg(t), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!bb[l] && !(n && n[l]) && !(s && s[l]) && !(i && i[l])) {
        var u = Ab(t, l);
        try {
          Tb(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ib = w1;
const Ob = /* @__PURE__ */ As(Ib);
function On() {
  return (On = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Cg = function(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}, hf = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !m1.typeOf(e);
}, xl = Object.freeze([]), fr = Object.freeze({});
function ks(e) {
  return typeof e == "function";
}
function bg(e) {
  return e.displayName || e.name || "Component";
}
function ih(e) {
  return e && typeof e.styledComponentId == "string";
}
var qo = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", sh = typeof window < "u" && "HTMLElement" in window, jb = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY));
function Bs(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
}
var Mb = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(n) {
    for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
    return r;
  }, t.insertRules = function(n, r) {
    if (n >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, s = i; n >= s; ) (s <<= 1) < 0 && Bs(16, "" + n);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var a = i; a < s; a++) this.groupSizes[a] = 0;
    }
    for (var l = this.indexOfGroup(n + 1), u = 0, c = r.length; u < c; u++) this.tag.insertRule(l, r[u]) && (this.groupSizes[n]++, l++);
  }, t.clearGroup = function(n) {
    if (n < this.length) {
      var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r;
      this.groupSizes[n] = 0;
      for (var s = o; s < i; s++) this.tag.deleteRule(o);
    }
  }, t.getGroup = function(n) {
    var r = "";
    if (n >= this.length || this.groupSizes[n] === 0) return r;
    for (var o = this.groupSizes[n], i = this.indexOfGroup(n), s = i + o, a = i; a < s; a++) r += this.tag.getRule(a) + `/*!sc*/
`;
    return r;
  }, e;
}(), La = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), Gi = 1, ga = function(e) {
  if (La.has(e)) return La.get(e);
  for (; Sl.has(Gi); ) Gi++;
  var t = Gi++;
  return La.set(e, t), Sl.set(t, e), t;
}, Db = function(e) {
  return Sl.get(e);
}, Nb = function(e, t) {
  t >= Gi && (Gi = t + 1), La.set(e, t), Sl.set(t, e);
}, $b = "style[" + qo + '][data-styled-version="5.3.11"]', Fb = new RegExp("^" + qo + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Lb = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, zb = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = n.length; o < i; o++) {
    var s = n[o].trim();
    if (s) {
      var a = s.match(Fb);
      if (a) {
        var l = 0 | parseInt(a[1], 10), u = a[2];
        l !== 0 && (Nb(u, l), Lb(e, u, a[3]), e.getTag().insertRules(l, r)), r.length = 0;
      } else r.push(s);
    }
  }
}, Bb = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, x1 = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(a) {
    for (var l = a.childNodes, u = l.length; u >= 0; u--) {
      var c = l[u];
      if (c && c.nodeType === 1 && c.hasAttribute(qo)) return c;
    }
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(qo, "active"), r.setAttribute("data-styled-version", "5.3.11");
  var s = Bb();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, Vb = function() {
  function e(n) {
    var r = this.element = x1(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var i = document.styleSheets, s = 0, a = i.length; s < a; s++) {
        var l = i[s];
        if (l.ownerNode === o) return l;
      }
      Bs(17);
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
}(), Ub = function() {
  function e(n) {
    var r = this.element = x1(n);
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
}(), Hb = function() {
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
}(), Eg = sh, Wb = { isServer: !sh, useCSSOMInjection: !jb }, S1 = function() {
  function e(n, r, o) {
    n === void 0 && (n = fr), r === void 0 && (r = {}), this.options = On({}, Wb, {}, n), this.gs = r, this.names = new Map(o), this.server = !!n.isServer, !this.server && sh && Eg && (Eg = !1, function(i) {
      for (var s = document.querySelectorAll($b), a = 0, l = s.length; a < l; a++) {
        var u = s[a];
        u && u.getAttribute(qo) !== "active" && (zb(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this));
  }
  e.registerId = function(n) {
    return ga(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(On({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, s = r.target, n = o ? new Hb(s) : i ? new Vb(s) : new Ub(s), new Mb(n)));
    var n, r, o, i, s;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (ga(n), this.names.has(n)) this.names.get(n).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(n, o);
    }
  }, t.insertRules = function(n, r, o) {
    this.registerName(n, r), this.getTag().insertRules(ga(n), o);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(ga(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), o = r.length, i = "", s = 0; s < o; s++) {
        var a = Db(s);
        if (a !== void 0) {
          var l = n.names.get(a), u = r.getGroup(s);
          if (l && u && l.size) {
            var c = qo + ".g" + s + '[id="' + a + '"]', p = "";
            l !== void 0 && l.forEach(function(d) {
              d.length > 0 && (p += d + ",");
            }), i += "" + u + c + '{content:"' + p + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), Qb = /(a)(d)/gi, Tg = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function mf(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Tg(t % 52) + n;
  return (Tg(t % 52) + n).replace(Qb, "$1-$2");
}
var Eo = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, k1 = function(e) {
  return Eo(5381, e);
};
function Kb(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ks(n) && !ih(n)) return !1;
  }
  return !0;
}
var Zb = k1("5.3.11"), qb = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && Kb(t), this.componentId = n, this.baseHash = Eo(Zb, n), this.baseStyle = r, S1.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var s = Go(this.rules, t, n, r).join(""), a = mf(Eo(this.baseHash, s) >>> 0);
      if (!n.hasNameForId(o, a)) {
        var l = r(s, "." + a, void 0, o);
        n.insertRules(o, a, l);
      }
      i.push(a), this.staticRulesId = a;
    }
    else {
      for (var u = this.rules.length, c = Eo(this.baseHash, r.hash), p = "", d = 0; d < u; d++) {
        var m = this.rules[d];
        if (typeof m == "string") p += m;
        else if (m) {
          var g = Go(m, t, n, r), w = Array.isArray(g) ? g.join("") : g;
          c = Eo(c, w + d), p += w;
        }
      }
      if (p) {
        var x = mf(c >>> 0);
        if (!n.hasNameForId(o, x)) {
          var v = r(p, "." + x, void 0, o);
          n.insertRules(o, x, v);
        }
        i.push(x);
      }
    }
    return i.join(" ");
  }, e;
}(), Gb = /^\s*\/\/.*$/gm, Yb = [":", "[", ".", "#"];
function Xb(e) {
  var t, n, r, o, i = fr, s = i.options, a = s === void 0 ? fr : s, l = i.plugins, u = l === void 0 ? xl : l, c = new hb(a), p = [], d = /* @__PURE__ */ function(w) {
    function x(v) {
      if (v) try {
        w(v + "}");
      } catch {
      }
    }
    return function(v, f, h, y, S, _, C, T, M, j) {
      switch (v) {
        case 1:
          if (M === 0 && f.charCodeAt(0) === 64) return w(f + ";"), "";
          break;
        case 2:
          if (T === 0) return f + "/*|*/";
          break;
        case 3:
          switch (T) {
            case 102:
            case 112:
              return w(h[0] + f), "";
            default:
              return f + (j === 0 ? "/*|*/" : "");
          }
        case -2:
          f.split("/*|*/}").forEach(x);
      }
    };
  }(function(w) {
    p.push(w);
  }), m = function(w, x, v) {
    return x === 0 && Yb.indexOf(v[n.length]) !== -1 || v.match(o) ? w : "." + t;
  };
  function g(w, x, v, f) {
    f === void 0 && (f = "&");
    var h = w.replace(Gb, ""), y = x && v ? v + " " + x + " { " + h + " }" : h;
    return t = f, n = x, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), c(v || !x ? "" : x, y);
  }
  return c.use([].concat(u, [function(w, x, v) {
    w === 2 && v.length && v[0].lastIndexOf(n) > 0 && (v[0] = v[0].replace(r, m));
  }, d, function(w) {
    if (w === -2) {
      var x = p;
      return p = [], x;
    }
  }])), g.hash = u.length ? u.reduce(function(w, x) {
    return x.name || Bs(15), Eo(w, x.name);
  }, 5381).toString() : "", g;
}
var _1 = ue.createContext();
_1.Consumer;
var C1 = ue.createContext(), Jb = (C1.Consumer, new S1()), gf = Xb();
function eE() {
  return E.useContext(_1) || Jb;
}
function tE() {
  return E.useContext(C1) || gf;
}
var b1 = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = gf);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.toString = function() {
      return Bs(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = gf), this.name + t.hash;
  }, e;
}(), nE = /([A-Z])/, rE = /([A-Z])/g, oE = /^ms-/, iE = function(e) {
  return "-" + e.toLowerCase();
};
function Rg(e) {
  return nE.test(e) ? e.replace(rE, iE).replace(oE, "-ms-") : e;
}
var Ag = function(e) {
  return e == null || e === !1 || e === "";
};
function Go(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], s = 0, a = e.length; s < a; s += 1) (o = Go(e[s], t, n, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Ag(e)) return "";
  if (ih(e)) return "." + e.styledComponentId;
  if (ks(e)) {
    if (typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !t) return e;
    var l = e(t);
    return Go(l, t, n, r);
  }
  var u;
  return e instanceof b1 ? n ? (e.inject(n, r), e.getName(r)) : e : hf(e) ? function c(p, d) {
    var m, g, w = [];
    for (var x in p) p.hasOwnProperty(x) && !Ag(p[x]) && (Array.isArray(p[x]) && p[x].isCss || ks(p[x]) ? w.push(Rg(x) + ":", p[x], ";") : hf(p[x]) ? w.push.apply(w, c(p[x], x)) : w.push(Rg(x) + ": " + (m = x, (g = p[x]) == null || typeof g == "boolean" || g === "" ? "" : typeof g != "number" || g === 0 || m in mb || m.startsWith("--") ? String(g).trim() : g + "px") + ";"));
    return d ? [d + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var Pg = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function E1(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return ks(e) || hf(e) ? Pg(Go(Cg(xl, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Pg(Go(Cg(e, n)));
}
var sE = function(e, t, n) {
  return n === void 0 && (n = fr), e.theme !== n.theme && e.theme || t || n.theme;
}, aE = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, lE = /(^-|-$)/g;
function Oc(e) {
  return e.replace(aE, "-").replace(lE, "");
}
var T1 = function(e) {
  return mf(k1(e) >>> 0);
};
function va(e) {
  return typeof e == "string" && !0;
}
var vf = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, uE = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function cE(e, t, n) {
  var r = e[n];
  vf(t) && vf(r) ? R1(r, t) : e[n] = t;
}
function R1(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var s = i[o];
    if (vf(s)) for (var a in s) uE(a) && cE(e, s[a], a);
  }
  return e;
}
var A1 = ue.createContext();
A1.Consumer;
var jc = {};
function P1(e, t, n) {
  var r = ih(e), o = !va(e), i = t.attrs, s = i === void 0 ? xl : i, a = t.componentId, l = a === void 0 ? function(f, h) {
    var y = typeof f != "string" ? "sc" : Oc(f);
    jc[y] = (jc[y] || 0) + 1;
    var S = y + "-" + T1("5.3.11" + y + jc[y]);
    return h ? h + "-" + S : S;
  }(t.displayName, t.parentComponentId) : a, u = t.displayName, c = u === void 0 ? function(f) {
    return va(f) ? "styled." + f : "Styled(" + bg(f) + ")";
  }(e) : u, p = t.displayName && t.componentId ? Oc(t.displayName) + "-" + t.componentId : t.componentId || l, d = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, m = t.shouldForwardProp;
  r && e.shouldForwardProp && (m = t.shouldForwardProp ? function(f, h, y) {
    return e.shouldForwardProp(f, h, y) && t.shouldForwardProp(f, h, y);
  } : e.shouldForwardProp);
  var g, w = new qb(n, p, r ? e.componentStyle : void 0), x = w.isStatic && s.length === 0, v = function(f, h) {
    return function(y, S, _, C) {
      var T = y.attrs, M = y.componentStyle, j = y.defaultProps, U = y.foldedComponentIds, B = y.shouldForwardProp, L = y.styledComponentId, H = y.target, J = function($, I, Y) {
        $ === void 0 && ($ = fr);
        var V = On({}, I, { theme: $ }), fe = {};
        return Y.forEach(function(ce) {
          var de, oe, ye, he = ce;
          for (de in ks(he) && (he = he(V)), he) V[de] = fe[de] = de === "className" ? (oe = fe[de], ye = he[de], oe && ye ? oe + " " + ye : oe || ye) : he[de];
        }), [V, fe];
      }(sE(S, E.useContext(A1), j) || fr, S, T), te = J[0], ee = J[1], N = function($, I, Y, V) {
        var fe = eE(), ce = tE(), de = I ? $.generateAndInjectStyles(fr, fe, ce) : $.generateAndInjectStyles(Y, fe, ce);
        return de;
      }(M, C, te), Q = _, W = ee.$as || S.$as || ee.as || S.as || H, P = va(W), A = ee !== S ? On({}, S, {}, ee) : S, b = {};
      for (var O in A) O[0] !== "$" && O !== "as" && (O === "forwardedAs" ? b.as = A[O] : (B ? B(O, xg, W) : !P || xg(O)) && (b[O] = A[O]));
      return S.style && ee.style !== S.style && (b.style = On({}, S.style, {}, ee.style)), b.className = Array.prototype.concat(U, L, N !== L ? N : null, S.className, ee.className).filter(Boolean).join(" "), b.ref = Q, E.createElement(W, b);
    }(g, f, h, x);
  };
  return v.displayName = c, (g = ue.forwardRef(v)).attrs = d, g.componentStyle = w, g.displayName = c, g.shouldForwardProp = m, g.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : xl, g.styledComponentId = p, g.target = r ? e.target : e, g.withComponent = function(f) {
    var h = t.componentId, y = function(_, C) {
      if (_ == null) return {};
      var T, M, j = {}, U = Object.keys(_);
      for (M = 0; M < U.length; M++) T = U[M], C.indexOf(T) >= 0 || (j[T] = _[T]);
      return j;
    }(t, ["componentId"]), S = h && h + "-" + (va(f) ? f : Oc(bg(f)));
    return P1(f, On({}, y, { attrs: d, componentId: S }), n);
  }, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(f) {
    this._foldedDefaultProps = r ? R1({}, e.defaultProps, f) : f;
  } }), Object.defineProperty(g, "toString", { value: function() {
    return "." + g.styledComponentId;
  } }), o && Ob(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), g;
}
var ae = function(e) {
  return function t(n, r, o) {
    if (o === void 0 && (o = fr), !m1.isValidElementType(r)) return Bs(1, String(r));
    var i = function() {
      return n(r, o, E1.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return t(n, r, On({}, o, {}, s));
    }, i.attrs = function(s) {
      return t(n, r, On({}, o, { attrs: Array.prototype.concat(o.attrs, s).filter(Boolean) }));
    }, i;
  }(P1, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ae[e] = ae(e);
});
function dE(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var o = E1.apply(void 0, [e].concat(n)).join(""), i = T1(o);
  return new b1(i, o);
}
ue.createContext([
  {
    id: "starting",
    title: "Starting",
    element: ue.createElement("div", {}, "Empty starting route")
  }
]);
const fE = {
  current: ["starting"],
  history: []
};
hn({
  name: "router",
  initialState: fE,
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
});
ae.nav`
  height: 28px;
  display: flex;
  padding: 0px 16px;
  padding-top: 6px;
  justify-content: space-between;
  font-size: 14px;
  border-bottom: 1px solid var(${q.border});
`;
ae.div`
  height: 35px;
  display: flex;
  padding: 0px 16px;
  border-bottom: 1px solid var(${q.border});
`;
ae.div`
  padding: 0 1em;
  display: flex;
  align-items: center;
  ${(e) => e.active ? `border-bottom: 3px solid var(${q.buttonBackground});` : "opacity: 0.7; border-bottom: 3px solid transparent; cursor: pointer;"};
  > div {
    border: ${(e) => e.active && q.contrastActiveBorder ? `1px solid var(${q.contrastActiveBorder})` : "none"};
  }
`;
ae.div`
  place-self: center;
  font-size: 16px;
  font-weight: 500;
  display: flex;
`;
function pE(e, t) {
  return function(r) {
    const { command: o, payload: i } = r.data;
    if (o) {
      const s = t[o];
      if (s) {
        const a = s(i);
        a ? e.dispatch(a) : console.log(`Skipping dispatch for command: ${o}`);
      } else
        console.error(`Unable to find handler for command: ${o}`);
    } else
      console.error("Received message with unknown command", r.data);
  };
}
function hE(e) {
  const t = Object.keys(e);
  for (const n of t)
    e[n] ? (console.log("starting listener for: ", n), e[n]()) : console.log("skipping listener for: ", n);
}
ae.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 35px;
`;
ae.div`
  position: fixed;
  top: 35px;
  left: 0;
  right: 0;
  bottom: 0;
`;
var Vs = (e) => e.type === "checkbox", To = (e) => e instanceof Date, mt = (e) => e == null;
const I1 = (e) => typeof e == "object";
var Xe = (e) => !mt(e) && !Array.isArray(e) && I1(e) && !To(e), O1 = (e) => Xe(e) && e.target ? Vs(e.target) ? e.target.checked : e.target.value : e, mE = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, j1 = (e, t) => e.has(mE(t)), gE = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Xe(t) && t.hasOwnProperty("isPrototypeOf");
}, ah = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function qe(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(ah && (e instanceof Blob || e instanceof FileList)) && (n || Xe(e)))
    if (t = n ? [] : {}, !n && !gE(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = qe(e[r]));
  else
    return e;
  return t;
}
var ii = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Me = (e) => e === void 0, ne = (e, t, n) => {
  if (!t || !Xe(e))
    return n;
  const r = ii(t.split(/[,[\].]+?/)).reduce((o, i) => mt(o) ? o : o[i], e);
  return Me(r) || r === e ? Me(e[t]) ? n : e[t] : r;
}, rn = (e) => typeof e == "boolean";
const kl = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Qt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, En = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, M1 = ue.createContext(null), si = () => ue.useContext(M1), vE = (e) => {
  const { children: t, ...n } = e;
  return ue.createElement(M1.Provider, { value: n }, t);
};
var D1 = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(o, i, {
      get: () => {
        const s = i;
        return t._proxyFormState[s] !== Qt.all && (t._proxyFormState[s] = !r || Qt.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Pt = (e) => Xe(e) && !Object.keys(e).length, N1 = (e, t, n, r) => {
  n(e);
  const { name: o, ...i } = e;
  return Pt(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((s) => t[s] === (!r || Qt.all));
}, Dt = (e) => Array.isArray(e) ? e : [e], $1 = (e, t, n) => !e || !t || e === t || Dt(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Lu(e) {
  const t = ue.useRef(e);
  t.current = e, ue.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function yE(e) {
  const t = si(), { control: n = t.control, disabled: r, name: o, exact: i } = e || {}, [s, a] = ue.useState(n._formState), l = ue.useRef(!0), u = ue.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), c = ue.useRef(o);
  return c.current = o, Lu({
    disabled: r,
    next: (p) => l.current && $1(c.current, p.name, i) && N1(p, u.current, n._updateFormState) && a({
      ...n._formState,
      ...p
    }),
    subject: n._subjects.state
  }), ue.useEffect(() => (l.current = !0, u.current.isValid && n._updateValid(!0), () => {
    l.current = !1;
  }), [n]), D1(s, n, u.current, !1);
}
var gn = (e) => typeof e == "string", F1 = (e, t, n, r, o) => gn(e) ? (r && t.watch.add(e), ne(n, e, o)) : Array.isArray(e) ? e.map((i) => (r && t.watch.add(i), ne(n, i))) : (r && (t.watchAll = !0), n);
function pr(e) {
  const t = si(), { control: n = t.control, name: r, defaultValue: o, disabled: i, exact: s } = e || {}, a = ue.useRef(r);
  a.current = r, Lu({
    disabled: i,
    subject: n._subjects.values,
    next: (c) => {
      $1(a.current, c.name, s) && u(qe(F1(a.current, n._names, c.values || n._formValues, !1, o)));
    }
  });
  const [l, u] = ue.useState(n._getWatch(r, o));
  return ue.useEffect(() => n._removeUnmounted()), l;
}
var lh = (e) => /^\w*$/.test(e), L1 = (e) => ii(e.replace(/["|']|\]/g, "").split(/\.|\[/)), je = (e, t, n) => {
  let r = -1;
  const o = lh(t) ? [t] : L1(t), i = o.length, s = i - 1;
  for (; ++r < i; ) {
    const a = o[r];
    let l = n;
    if (r !== s) {
      const u = e[a];
      l = Xe(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
    }
    e[a] = l, e = e[a];
  }
  return e;
};
function ai(e) {
  const t = si(), { name: n, disabled: r, control: o = t.control, shouldUnregister: i } = e, s = j1(o._names.array, n), a = pr({
    control: o,
    name: n,
    defaultValue: ne(o._formValues, n, ne(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = yE({
    control: o,
    name: n
  }), u = ue.useRef(o.register(n, {
    ...e.rules,
    value: a,
    ...rn(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return ue.useEffect(() => {
    const c = o._options.shouldUnregister || i, p = (d, m) => {
      const g = ne(o._fields, d);
      g && (g._f.mount = m);
    };
    if (p(n, !0), c) {
      const d = qe(ne(o._options.defaultValues, n));
      je(o._defaultValues, n, d), Me(ne(o._formValues, n)) && je(o._formValues, n, d);
    }
    return () => {
      (s ? c && !o._state.action : c) ? o.unregister(n) : p(n, !1);
    };
  }, [n, o, s, i]), ue.useEffect(() => {
    ne(o._fields, n) && o._updateDisabledField({
      disabled: r,
      fields: o._fields,
      name: n,
      value: ne(o._fields, n)._f.value
    });
  }, [r, n, o]), {
    field: {
      name: n,
      value: a,
      ...rn(r) || l.disabled ? { disabled: l.disabled || r } : {},
      onChange: ue.useCallback((c) => u.current.onChange({
        target: {
          value: O1(c),
          name: n
        },
        type: kl.CHANGE
      }), [n]),
      onBlur: ue.useCallback(() => u.current.onBlur({
        target: {
          value: ne(o._formValues, n),
          name: n
        },
        type: kl.BLUR
      }), [n, o]),
      ref: (c) => {
        const p = ne(o._fields, n);
        p && c && (p._f.ref = {
          focus: () => c.focus(),
          select: () => c.select(),
          setCustomValidity: (d) => c.setCustomValidity(d),
          reportValidity: () => c.reportValidity()
        });
      }
    },
    formState: l,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!ne(l.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!ne(l.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!ne(l.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => ne(l.errors, n)
      }
    })
  };
}
var z1 = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, Kn = () => {
  const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    const n = (Math.random() * 16 + e) % 16 | 0;
    return (t == "x" ? n : n & 3 | 8).toString(16);
  });
}, Mc = (e, t, n = {}) => n.shouldFocus || Me(n.shouldFocus) ? n.focusName || `${e}.${Me(n.focusIndex) ? t : n.focusIndex}.` : "", Yi = (e) => ({
  isOnSubmit: !e || e === Qt.onSubmit,
  isOnBlur: e === Qt.onBlur,
  isOnChange: e === Qt.onChange,
  isOnAll: e === Qt.all,
  isOnTouch: e === Qt.onTouched
}), yf = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const No = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const i = ne(e, o);
    if (i) {
      const { _f: s, ...a } = i;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], o) && !r)
          break;
        if (s.ref && t(s.ref, s.name) && !r)
          break;
        No(a, t);
      } else Xe(a) && No(a, t);
    }
  }
};
var B1 = (e, t, n) => {
  const r = ii(ne(e, n));
  return je(r, "root", t[n]), je(e, n, r), e;
}, uh = (e) => e.type === "file", rr = (e) => typeof e == "function", _l = (e) => {
  if (!ah)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, za = (e) => gn(e), ch = (e) => e.type === "radio", Cl = (e) => e instanceof RegExp;
const Ig = {
  value: !1,
  isValid: !1
}, Og = { value: !0, isValid: !0 };
var V1 = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Me(e[0].attributes.value) ? Me(e[0].value) || e[0].value === "" ? Og : { value: e[0].value, isValid: !0 } : Og
    ) : Ig;
  }
  return Ig;
};
const jg = {
  isValid: !1,
  value: null
};
var U1 = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, jg) : jg;
function Mg(e, t, n = "validate") {
  if (za(e) || Array.isArray(e) && e.every(za) || rn(e) && !e)
    return {
      type: n,
      message: za(e) ? e : "",
      ref: t
    };
}
var lo = (e) => Xe(e) && !Cl(e) ? e : {
  value: e,
  message: ""
}, wf = async (e, t, n, r, o) => {
  const { ref: i, refs: s, required: a, maxLength: l, minLength: u, min: c, max: p, pattern: d, validate: m, name: g, valueAsNumber: w, mount: x, disabled: v } = e._f, f = ne(t, g);
  if (!x || v)
    return {};
  const h = s ? s[0] : i, y = (B) => {
    r && h.reportValidity && (h.setCustomValidity(rn(B) ? "" : B || ""), h.reportValidity());
  }, S = {}, _ = ch(i), C = Vs(i), T = _ || C, M = (w || uh(i)) && Me(i.value) && Me(f) || _l(i) && i.value === "" || f === "" || Array.isArray(f) && !f.length, j = z1.bind(null, g, n, S), U = (B, L, H, J = En.maxLength, te = En.minLength) => {
    const ee = B ? L : H;
    S[g] = {
      type: B ? J : te,
      message: ee,
      ref: i,
      ...j(B ? J : te, ee)
    };
  };
  if (o ? !Array.isArray(f) || !f.length : a && (!T && (M || mt(f)) || rn(f) && !f || C && !V1(s).isValid || _ && !U1(s).isValid)) {
    const { value: B, message: L } = za(a) ? { value: !!a, message: a } : lo(a);
    if (B && (S[g] = {
      type: En.required,
      message: L,
      ref: h,
      ...j(En.required, L)
    }, !n))
      return y(L), S;
  }
  if (!M && (!mt(c) || !mt(p))) {
    let B, L;
    const H = lo(p), J = lo(c);
    if (!mt(f) && !isNaN(f)) {
      const te = i.valueAsNumber || f && +f;
      mt(H.value) || (B = te > H.value), mt(J.value) || (L = te < J.value);
    } else {
      const te = i.valueAsDate || new Date(f), ee = (W) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + W), N = i.type == "time", Q = i.type == "week";
      gn(H.value) && f && (B = N ? ee(f) > ee(H.value) : Q ? f > H.value : te > new Date(H.value)), gn(J.value) && f && (L = N ? ee(f) < ee(J.value) : Q ? f < J.value : te < new Date(J.value));
    }
    if ((B || L) && (U(!!B, H.message, J.message, En.max, En.min), !n))
      return y(S[g].message), S;
  }
  if ((l || u) && !M && (gn(f) || o && Array.isArray(f))) {
    const B = lo(l), L = lo(u), H = !mt(B.value) && f.length > +B.value, J = !mt(L.value) && f.length < +L.value;
    if ((H || J) && (U(H, B.message, L.message), !n))
      return y(S[g].message), S;
  }
  if (d && !M && gn(f)) {
    const { value: B, message: L } = lo(d);
    if (Cl(B) && !f.match(B) && (S[g] = {
      type: En.pattern,
      message: L,
      ref: i,
      ...j(En.pattern, L)
    }, !n))
      return y(L), S;
  }
  if (m) {
    if (rr(m)) {
      const B = await m(f, t), L = Mg(B, h);
      if (L && (S[g] = {
        ...L,
        ...j(En.validate, L.message)
      }, !n))
        return y(L.message), S;
    } else if (Xe(m)) {
      let B = {};
      for (const L in m) {
        if (!Pt(B) && !n)
          break;
        const H = Mg(await m[L](f, t), h, L);
        H && (B = {
          ...H,
          ...j(L, H.message)
        }, y(H.message), n && (S[g] = B));
      }
      if (!Pt(B) && (S[g] = {
        ref: h,
        ...B
      }, !n))
        return S;
    }
  }
  return y(!0), S;
}, Dc = (e, t) => [
  ...e,
  ...Dt(t)
], Nc = (e) => Array.isArray(e) ? e.map(() => {
}) : void 0;
function $c(e, t, n) {
  return [
    ...e.slice(0, t),
    ...Dt(n),
    ...e.slice(t)
  ];
}
var Fc = (e, t, n) => Array.isArray(e) ? (Me(e[n]) && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]), e) : [], Lc = (e, t) => [
  ...Dt(t),
  ...Dt(e)
];
function wE(e, t) {
  let n = 0;
  const r = [...e];
  for (const o of t)
    r.splice(o - n, 1), n++;
  return ii(r).length ? r : [];
}
var zc = (e, t) => Me(t) ? [] : wE(e, Dt(t).sort((n, r) => n - r)), Bc = (e, t, n) => {
  [e[t], e[n]] = [e[n], e[t]];
};
function xE(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = Me(e) ? r++ : e[t[r++]];
  return e;
}
function SE(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Me(e[t]))
      return !1;
  return !0;
}
function Je(e, t) {
  const n = Array.isArray(t) ? t : lh(t) ? [t] : L1(t), r = n.length === 1 ? e : xE(e, n), o = n.length - 1, i = n[o];
  return r && delete r[i], o !== 0 && (Xe(r) && Pt(r) || Array.isArray(r) && SE(r)) && Je(e, n.slice(0, -1)), e;
}
var Dg = (e, t, n) => (e[t] = n, e);
function kE(e) {
  const t = si(), { control: n = t.control, name: r, keyName: o = "id", shouldUnregister: i } = e, [s, a] = ue.useState(n._getFieldArray(r)), l = ue.useRef(n._getFieldArray(r).map(Kn)), u = ue.useRef(s), c = ue.useRef(r), p = ue.useRef(!1);
  c.current = r, u.current = s, n._names.array.add(r), e.rules && n.register(r, e.rules), Lu({
    next: ({ values: S, name: _ }) => {
      if (_ === c.current || !_) {
        const C = ne(S, c.current);
        Array.isArray(C) && (a(C), l.current = C.map(Kn));
      }
    },
    subject: n._subjects.array
  });
  const d = ue.useCallback((S) => {
    p.current = !0, n._updateFieldArray(r, S);
  }, [n, r]), m = (S, _) => {
    const C = Dt(qe(S)), T = Dc(n._getFieldArray(r), C);
    n._names.focus = Mc(r, T.length - 1, _), l.current = Dc(l.current, C.map(Kn)), d(T), a(T), n._updateFieldArray(r, T, Dc, {
      argA: Nc(S)
    });
  }, g = (S, _) => {
    const C = Dt(qe(S)), T = Lc(n._getFieldArray(r), C);
    n._names.focus = Mc(r, 0, _), l.current = Lc(l.current, C.map(Kn)), d(T), a(T), n._updateFieldArray(r, T, Lc, {
      argA: Nc(S)
    });
  }, w = (S) => {
    const _ = zc(n._getFieldArray(r), S);
    l.current = zc(l.current, S), d(_), a(_), n._updateFieldArray(r, _, zc, {
      argA: S
    });
  }, x = (S, _, C) => {
    const T = Dt(qe(_)), M = $c(n._getFieldArray(r), S, T);
    n._names.focus = Mc(r, S, C), l.current = $c(l.current, S, T.map(Kn)), d(M), a(M), n._updateFieldArray(r, M, $c, {
      argA: S,
      argB: Nc(_)
    });
  }, v = (S, _) => {
    const C = n._getFieldArray(r);
    Bc(C, S, _), Bc(l.current, S, _), d(C), a(C), n._updateFieldArray(r, C, Bc, {
      argA: S,
      argB: _
    }, !1);
  }, f = (S, _) => {
    const C = n._getFieldArray(r);
    Fc(C, S, _), Fc(l.current, S, _), d(C), a(C), n._updateFieldArray(r, C, Fc, {
      argA: S,
      argB: _
    }, !1);
  }, h = (S, _) => {
    const C = qe(_), T = Dg(n._getFieldArray(r), S, C);
    l.current = [...T].map((M, j) => !M || j === S ? Kn() : l.current[j]), d(T), a([...T]), n._updateFieldArray(r, T, Dg, {
      argA: S,
      argB: C
    }, !0, !1);
  }, y = (S) => {
    const _ = Dt(qe(S));
    l.current = _.map(Kn), d([..._]), a([..._]), n._updateFieldArray(r, [..._], (C) => C, {}, !0, !1);
  };
  return ue.useEffect(() => {
    if (n._state.action = !1, yf(r, n._names) && n._subjects.state.next({
      ...n._formState
    }), p.current && (!Yi(n._options.mode).isOnSubmit || n._formState.isSubmitted))
      if (n._options.resolver)
        n._executeSchema([r]).then((S) => {
          const _ = ne(S.errors, r), C = ne(n._formState.errors, r);
          (C ? !_ && C.type || _ && (C.type !== _.type || C.message !== _.message) : _ && _.type) && (_ ? je(n._formState.errors, r, _) : Je(n._formState.errors, r), n._subjects.state.next({
            errors: n._formState.errors
          }));
        });
      else {
        const S = ne(n._fields, r);
        S && S._f && !(Yi(n._options.reValidateMode).isOnSubmit && Yi(n._options.mode).isOnSubmit) && wf(S, n._formValues, n._options.criteriaMode === Qt.all, n._options.shouldUseNativeValidation, !0).then((_) => !Pt(_) && n._subjects.state.next({
          errors: B1(n._formState.errors, _, r)
        }));
      }
    n._subjects.values.next({
      name: r,
      values: { ...n._formValues }
    }), n._names.focus && No(n._fields, (S, _) => {
      if (n._names.focus && _.startsWith(n._names.focus) && S.focus)
        return S.focus(), 1;
    }), n._names.focus = "", n._updateValid(), p.current = !1;
  }, [s, r, n]), ue.useEffect(() => (!ne(n._formValues, r) && n._updateFieldArray(r), () => {
    (n._options.shouldUnregister || i) && n.unregister(r);
  }), [r, n, o, i]), {
    swap: ue.useCallback(v, [d, r, n]),
    move: ue.useCallback(f, [d, r, n]),
    prepend: ue.useCallback(g, [d, r, n]),
    append: ue.useCallback(m, [d, r, n]),
    remove: ue.useCallback(w, [d, r, n]),
    insert: ue.useCallback(x, [d, r, n]),
    update: ue.useCallback(h, [d, r, n]),
    replace: ue.useCallback(y, [d, r, n]),
    fields: ue.useMemo(() => s.map((S, _) => ({
      ...S,
      [o]: l.current[_] || Kn()
    })), [s, o])
  };
}
var Vc = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (o) => {
      for (const i of e)
        i.next && i.next(o);
    },
    subscribe: (o) => (e.push(o), {
      unsubscribe: () => {
        e = e.filter((i) => i !== o);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, bl = (e) => mt(e) || !I1(e);
function Nr(e, t) {
  if (bl(e) || bl(t))
    return e === t;
  if (To(e) && To(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const o of n) {
    const i = e[o];
    if (!r.includes(o))
      return !1;
    if (o !== "ref") {
      const s = t[o];
      if (To(i) && To(s) || Xe(i) && Xe(s) || Array.isArray(i) && Array.isArray(s) ? !Nr(i, s) : i !== s)
        return !1;
    }
  }
  return !0;
}
var H1 = (e) => e.type === "select-multiple", _E = (e) => ch(e) || Vs(e), Uc = (e) => _l(e) && e.isConnected, W1 = (e) => {
  for (const t in e)
    if (rr(e[t]))
      return !0;
  return !1;
};
function El(e, t = {}) {
  const n = Array.isArray(e);
  if (Xe(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || Xe(e[r]) && !W1(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, El(e[r], t[r])) : mt(e[r]) || (t[r] = !0);
  return t;
}
function Q1(e, t, n) {
  const r = Array.isArray(e);
  if (Xe(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || Xe(e[o]) && !W1(e[o]) ? Me(t) || bl(n[o]) ? n[o] = Array.isArray(e[o]) ? El(e[o], []) : { ...El(e[o]) } : Q1(e[o], mt(t) ? {} : t[o], n[o]) : n[o] = !Nr(e[o], t[o]);
  return n;
}
var ya = (e, t) => Q1(e, t, El(t)), K1 = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => Me(e) ? e : t ? e === "" ? NaN : e && +e : n && gn(e) ? new Date(e) : r ? r(e) : e;
function Hc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return uh(t) ? t.files : ch(t) ? U1(e.refs).value : H1(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Vs(t) ? V1(e.refs).value : K1(Me(t.value) ? e.ref.value : t.value, e);
}
var CE = (e, t, n, r) => {
  const o = {};
  for (const i of e) {
    const s = ne(t, i);
    s && je(o, i, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, _i = (e) => Me(e) ? e : Cl(e) ? e.source : Xe(e) ? Cl(e.value) ? e.value.source : e.value : e, bE = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Ng(e, t, n) {
  const r = ne(e, n);
  if (r || lh(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const i = o.join("."), s = ne(t, i), a = ne(e, i);
    if (s && !Array.isArray(s) && n !== i)
      return { name: n };
    if (a && a.type)
      return {
        name: i,
        error: a
      };
    o.pop();
  }
  return {
    name: n
  };
}
var EE = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, TE = (e, t) => !ii(ne(e, t)).length && Je(e, t);
const RE = {
  mode: Qt.onSubmit,
  reValidateMode: Qt.onChange,
  shouldFocusError: !0
};
function AE(e = {}, t) {
  let n = {
    ...RE,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: rr(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: n.errors || {},
    disabled: n.disabled || !1
  }, o = {}, i = Xe(n.values) || Xe(n.defaultValues) ? qe(n.values || n.defaultValues) || {} : {}, s = n.shouldUnregister ? {} : qe(i), a = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, u, c = 0;
  const p = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, d = {
    values: Vc(),
    array: Vc(),
    state: Vc()
  }, m = Yi(n.mode), g = Yi(n.reValidateMode), w = n.criteriaMode === Qt.all, x = (R) => (D) => {
    clearTimeout(c), c = setTimeout(R, D);
  }, v = async (R) => {
    if (p.isValid || R) {
      const D = n.resolver ? Pt((await M()).errors) : await U(o, !0);
      D !== r.isValid && d.state.next({
        isValid: D
      });
    }
  }, f = (R) => p.isValidating && d.state.next({
    isValidating: R
  }), h = (R, D = [], z, Z, K = !0, F = !0) => {
    if (Z && z) {
      if (a.action = !0, F && Array.isArray(ne(o, R))) {
        const re = z(ne(o, R), Z.argA, Z.argB);
        K && je(o, R, re);
      }
      if (F && Array.isArray(ne(r.errors, R))) {
        const re = z(ne(r.errors, R), Z.argA, Z.argB);
        K && je(r.errors, R, re), TE(r.errors, R);
      }
      if (p.touchedFields && F && Array.isArray(ne(r.touchedFields, R))) {
        const re = z(ne(r.touchedFields, R), Z.argA, Z.argB);
        K && je(r.touchedFields, R, re);
      }
      p.dirtyFields && (r.dirtyFields = ya(i, s)), d.state.next({
        name: R,
        isDirty: L(R, D),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      je(s, R, D);
  }, y = (R, D) => {
    je(r.errors, R, D), d.state.next({
      errors: r.errors
    });
  }, S = (R) => {
    r.errors = R, d.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, _ = (R, D, z, Z) => {
    const K = ne(o, R);
    if (K) {
      const F = ne(s, R, Me(z) ? ne(i, R) : z);
      Me(F) || Z && Z.defaultChecked || D ? je(s, R, D ? F : Hc(K._f)) : te(R, F), a.mount && v();
    }
  }, C = (R, D, z, Z, K) => {
    let F = !1, re = !1;
    const ke = {
      name: R
    }, Ee = !!(ne(o, R) && ne(o, R)._f.disabled);
    if (!z || Z) {
      p.isDirty && (re = r.isDirty, r.isDirty = ke.isDirty = L(), F = re !== ke.isDirty);
      const Ne = Ee || Nr(ne(i, R), D);
      re = !!(!Ee && ne(r.dirtyFields, R)), Ne || Ee ? Je(r.dirtyFields, R) : je(r.dirtyFields, R, !0), ke.dirtyFields = r.dirtyFields, F = F || p.dirtyFields && re !== !Ne;
    }
    if (z) {
      const Ne = ne(r.touchedFields, R);
      Ne || (je(r.touchedFields, R, z), ke.touchedFields = r.touchedFields, F = F || p.touchedFields && Ne !== z);
    }
    return F && K && d.state.next(ke), F ? ke : {};
  }, T = (R, D, z, Z) => {
    const K = ne(r.errors, R), F = p.isValid && rn(D) && r.isValid !== D;
    if (e.delayError && z ? (u = x(() => y(R, z)), u(e.delayError)) : (clearTimeout(c), u = null, z ? je(r.errors, R, z) : Je(r.errors, R)), (z ? !Nr(K, z) : K) || !Pt(Z) || F) {
      const re = {
        ...Z,
        ...F && rn(D) ? { isValid: D } : {},
        errors: r.errors,
        name: R
      };
      r = {
        ...r,
        ...re
      }, d.state.next(re);
    }
    f(!1);
  }, M = async (R) => n.resolver(s, n.context, CE(R || l.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), j = async (R) => {
    const { errors: D } = await M(R);
    if (R)
      for (const z of R) {
        const Z = ne(D, z);
        Z ? je(r.errors, z, Z) : Je(r.errors, z);
      }
    else
      r.errors = D;
    return D;
  }, U = async (R, D, z = {
    valid: !0
  }) => {
    for (const Z in R) {
      const K = R[Z];
      if (K) {
        const { _f: F, ...re } = K;
        if (F) {
          const ke = l.array.has(F.name), Ee = await wf(K, s, w, n.shouldUseNativeValidation && !D, ke);
          if (Ee[F.name] && (z.valid = !1, D))
            break;
          !D && (ne(Ee, F.name) ? ke ? B1(r.errors, Ee, F.name) : je(r.errors, F.name, Ee[F.name]) : Je(r.errors, F.name));
        }
        re && await U(re, D, z);
      }
    }
    return z.valid;
  }, B = () => {
    for (const R of l.unMount) {
      const D = ne(o, R);
      D && (D._f.refs ? D._f.refs.every((z) => !Uc(z)) : !Uc(D._f.ref)) && Y(R);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, L = (R, D) => (R && D && je(s, R, D), !Nr(A(), i)), H = (R, D, z) => F1(R, l, {
    ...a.mount ? s : Me(D) ? i : gn(R) ? { [R]: D } : D
  }, z, D), J = (R) => ii(ne(a.mount ? s : i, R, e.shouldUnregister ? ne(i, R, []) : [])), te = (R, D, z = {}) => {
    const Z = ne(o, R);
    let K = D;
    if (Z) {
      const F = Z._f;
      F && (!F.disabled && je(s, R, K1(D, F)), K = _l(F.ref) && mt(D) ? "" : D, H1(F.ref) ? [...F.ref.options].forEach((re) => re.selected = K.includes(re.value)) : F.refs ? Vs(F.ref) ? F.refs.length > 1 ? F.refs.forEach((re) => (!re.defaultChecked || !re.disabled) && (re.checked = Array.isArray(K) ? !!K.find((ke) => ke === re.value) : K === re.value)) : F.refs[0] && (F.refs[0].checked = !!K) : F.refs.forEach((re) => re.checked = re.value === K) : uh(F.ref) ? F.ref.value = "" : (F.ref.value = K, F.ref.type || d.values.next({
        name: R,
        values: { ...s }
      })));
    }
    (z.shouldDirty || z.shouldTouch) && C(R, K, z.shouldTouch, z.shouldDirty, !0), z.shouldValidate && P(R);
  }, ee = (R, D, z) => {
    for (const Z in D) {
      const K = D[Z], F = `${R}.${Z}`, re = ne(o, F);
      (l.array.has(R) || !bl(K) || re && !re._f) && !To(K) ? ee(F, K, z) : te(F, K, z);
    }
  }, N = (R, D, z = {}) => {
    const Z = ne(o, R), K = l.array.has(R), F = qe(D);
    je(s, R, F), K ? (d.array.next({
      name: R,
      values: { ...s }
    }), (p.isDirty || p.dirtyFields) && z.shouldDirty && d.state.next({
      name: R,
      dirtyFields: ya(i, s),
      isDirty: L(R, F)
    })) : Z && !Z._f && !mt(F) ? ee(R, F, z) : te(R, F, z), yf(R, l) && d.state.next({ ...r }), d.values.next({
      name: R,
      values: { ...s }
    }), !a.mount && t();
  }, Q = async (R) => {
    const D = R.target;
    let z = D.name, Z = !0;
    const K = ne(o, z), F = () => D.type ? Hc(K._f) : O1(R), re = (ke) => {
      Z = Number.isNaN(ke) || ke === ne(s, z, ke);
    };
    if (K) {
      let ke, Ee;
      const Ne = F(), dn = R.type === kl.BLUR || R.type === kl.FOCUS_OUT, ci = !bE(K._f) && !n.resolver && !ne(r.errors, z) && !K._f.deps || EE(dn, ne(r.touchedFields, z), r.isSubmitted, g, m), Rr = yf(z, l, dn);
      je(s, z, Ne), dn ? (K._f.onBlur && K._f.onBlur(R), u && u(0)) : K._f.onChange && K._f.onChange(R);
      const di = C(z, Ne, dn, !1), Ju = !Pt(di) || Rr;
      if (!dn && d.values.next({
        name: z,
        type: R.type,
        values: { ...s }
      }), ci)
        return p.isValid && v(), Ju && d.state.next({ name: z, ...Rr ? {} : di });
      if (!dn && Rr && d.state.next({ ...r }), f(!0), n.resolver) {
        const { errors: qs } = await M([z]);
        if (re(Ne), Z) {
          const ec = Ng(r.errors, o, z), Gs = Ng(qs, o, ec.name || z);
          ke = Gs.error, z = Gs.name, Ee = Pt(qs);
        }
      } else
        ke = (await wf(K, s, w, n.shouldUseNativeValidation))[z], re(Ne), Z && (ke ? Ee = !1 : p.isValid && (Ee = await U(o, !0)));
      Z && (K._f.deps && P(K._f.deps), T(z, Ee, ke, di));
    }
  }, W = (R, D) => {
    if (ne(r.errors, D) && R.focus)
      return R.focus(), 1;
  }, P = async (R, D = {}) => {
    let z, Z;
    const K = Dt(R);
    if (f(!0), n.resolver) {
      const F = await j(Me(R) ? R : K);
      z = Pt(F), Z = R ? !K.some((re) => ne(F, re)) : z;
    } else R ? (Z = (await Promise.all(K.map(async (F) => {
      const re = ne(o, F);
      return await U(re && re._f ? { [F]: re } : re);
    }))).every(Boolean), !(!Z && !r.isValid) && v()) : Z = z = await U(o);
    return d.state.next({
      ...!gn(R) || p.isValid && z !== r.isValid ? {} : { name: R },
      ...n.resolver || !R ? { isValid: z } : {},
      errors: r.errors,
      isValidating: !1
    }), D.shouldFocus && !Z && No(o, W, R ? K : l.mount), Z;
  }, A = (R) => {
    const D = {
      ...i,
      ...a.mount ? s : {}
    };
    return Me(R) ? D : gn(R) ? ne(D, R) : R.map((z) => ne(D, z));
  }, b = (R, D) => ({
    invalid: !!ne((D || r).errors, R),
    isDirty: !!ne((D || r).dirtyFields, R),
    isTouched: !!ne((D || r).touchedFields, R),
    error: ne((D || r).errors, R)
  }), O = (R) => {
    R && Dt(R).forEach((D) => Je(r.errors, D)), d.state.next({
      errors: R ? r.errors : {}
    });
  }, $ = (R, D, z) => {
    const Z = (ne(o, R, { _f: {} })._f || {}).ref;
    je(r.errors, R, {
      ...D,
      ref: Z
    }), d.state.next({
      name: R,
      errors: r.errors,
      isValid: !1
    }), z && z.shouldFocus && Z && Z.focus && Z.focus();
  }, I = (R, D) => rr(R) ? d.values.subscribe({
    next: (z) => R(H(void 0, D), z)
  }) : H(R, D, !0), Y = (R, D = {}) => {
    for (const z of R ? Dt(R) : l.mount)
      l.mount.delete(z), l.array.delete(z), D.keepValue || (Je(o, z), Je(s, z)), !D.keepError && Je(r.errors, z), !D.keepDirty && Je(r.dirtyFields, z), !D.keepTouched && Je(r.touchedFields, z), !n.shouldUnregister && !D.keepDefaultValue && Je(i, z);
    d.values.next({
      values: { ...s }
    }), d.state.next({
      ...r,
      ...D.keepDirty ? { isDirty: L() } : {}
    }), !D.keepIsValid && v();
  }, V = ({ disabled: R, name: D, field: z, fields: Z, value: K }) => {
    if (rn(R)) {
      const F = R ? void 0 : Me(K) ? Hc(z ? z._f : ne(Z, D)._f) : K;
      je(s, D, F), C(D, F, !1, !1, !0);
    }
  }, fe = (R, D = {}) => {
    let z = ne(o, R);
    const Z = rn(D.disabled);
    return je(o, R, {
      ...z || {},
      _f: {
        ...z && z._f ? z._f : { ref: { name: R } },
        name: R,
        mount: !0,
        ...D
      }
    }), l.mount.add(R), z ? V({
      field: z,
      disabled: D.disabled,
      name: R,
      value: D.value
    }) : _(R, !0, D.value), {
      ...Z ? { disabled: D.disabled } : {},
      ...n.progressive ? {
        required: !!D.required,
        min: _i(D.min),
        max: _i(D.max),
        minLength: _i(D.minLength),
        maxLength: _i(D.maxLength),
        pattern: _i(D.pattern)
      } : {},
      name: R,
      onChange: Q,
      onBlur: Q,
      ref: (K) => {
        if (K) {
          fe(R, D), z = ne(o, R);
          const F = Me(K.value) && K.querySelectorAll && K.querySelectorAll("input,select,textarea")[0] || K, re = _E(F), ke = z._f.refs || [];
          if (re ? ke.find((Ee) => Ee === F) : F === z._f.ref)
            return;
          je(o, R, {
            _f: {
              ...z._f,
              ...re ? {
                refs: [
                  ...ke.filter(Uc),
                  F,
                  ...Array.isArray(ne(i, R)) ? [{}] : []
                ],
                ref: { type: F.type, name: R }
              } : { ref: F }
            }
          }), _(R, !1, void 0, F);
        } else
          z = ne(o, R, {}), z._f && (z._f.mount = !1), (n.shouldUnregister || D.shouldUnregister) && !(j1(l.array, R) && a.action) && l.unMount.add(R);
      }
    };
  }, ce = () => n.shouldFocusError && No(o, W, l.mount), de = (R) => {
    rn(R) && (d.state.next({ disabled: R }), No(o, (D, z) => {
      let Z = R;
      const K = ne(o, z);
      K && rn(K._f.disabled) && (Z || (Z = K._f.disabled)), D.disabled = Z;
    }, 0, !1));
  }, oe = (R, D) => async (z) => {
    let Z;
    z && (z.preventDefault && z.preventDefault(), z.persist && z.persist());
    let K = qe(s);
    if (d.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: F, values: re } = await M();
      r.errors = F, K = re;
    } else
      await U(o);
    if (Je(r.errors, "root"), Pt(r.errors)) {
      d.state.next({
        errors: {}
      });
      try {
        await R(K, z);
      } catch (F) {
        Z = F;
      }
    } else
      D && await D({ ...r.errors }, z), ce(), setTimeout(ce);
    if (d.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Pt(r.errors) && !Z,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), Z)
      throw Z;
  }, ye = (R, D = {}) => {
    ne(o, R) && (Me(D.defaultValue) ? N(R, qe(ne(i, R))) : (N(R, D.defaultValue), je(i, R, qe(D.defaultValue))), D.keepTouched || Je(r.touchedFields, R), D.keepDirty || (Je(r.dirtyFields, R), r.isDirty = D.defaultValue ? L(R, qe(ne(i, R))) : L()), D.keepError || (Je(r.errors, R), p.isValid && v()), d.state.next({ ...r }));
  }, he = (R, D = {}) => {
    const z = R ? qe(R) : i, Z = qe(z), K = R && !Pt(R) ? Z : i;
    if (D.keepDefaultValues || (i = z), !D.keepValues) {
      if (D.keepDirtyValues)
        for (const F of l.mount)
          ne(r.dirtyFields, F) ? je(K, F, ne(s, F)) : N(F, ne(K, F));
      else {
        if (ah && Me(R))
          for (const F of l.mount) {
            const re = ne(o, F);
            if (re && re._f) {
              const ke = Array.isArray(re._f.refs) ? re._f.refs[0] : re._f.ref;
              if (_l(ke)) {
                const Ee = ke.closest("form");
                if (Ee) {
                  Ee.reset();
                  break;
                }
              }
            }
          }
        o = {};
      }
      s = e.shouldUnregister ? D.keepDefaultValues ? qe(i) : {} : qe(K), d.array.next({
        values: { ...K }
      }), d.values.next({
        values: { ...K }
      });
    }
    l = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !a.mount && t(), a.mount = !p.isValid || !!D.keepIsValid || !!D.keepDirtyValues, a.watch = !!e.shouldUnregister, d.state.next({
      submitCount: D.keepSubmitCount ? r.submitCount : 0,
      isDirty: D.keepDirty ? r.isDirty : !!(D.keepDefaultValues && !Nr(R, i)),
      isSubmitted: D.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: D.keepDirtyValues ? D.keepDefaultValues && s ? ya(i, s) : r.dirtyFields : D.keepDefaultValues && R ? ya(i, R) : {},
      touchedFields: D.keepTouched ? r.touchedFields : {},
      errors: D.keepErrors ? r.errors : {},
      isSubmitSuccessful: D.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, ge = (R, D) => he(rr(R) ? R(s) : R, D);
  return {
    control: {
      register: fe,
      unregister: Y,
      getFieldState: b,
      handleSubmit: oe,
      setError: $,
      _executeSchema: M,
      _getWatch: H,
      _getDirty: L,
      _updateValid: v,
      _removeUnmounted: B,
      _updateFieldArray: h,
      _updateDisabledField: V,
      _getFieldArray: J,
      _reset: he,
      _resetDefaultValues: () => rr(n.defaultValues) && n.defaultValues().then((R) => {
        ge(R, n.resetOptions), d.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (R) => {
        r = {
          ...r,
          ...R
        };
      },
      _disableForm: de,
      _subjects: d,
      _proxyFormState: p,
      _setErrors: S,
      get _fields() {
        return o;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return a;
      },
      set _state(R) {
        a = R;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return l;
      },
      set _names(R) {
        l = R;
      },
      get _formState() {
        return r;
      },
      set _formState(R) {
        r = R;
      },
      get _options() {
        return n;
      },
      set _options(R) {
        n = {
          ...n,
          ...R
        };
      }
    },
    trigger: P,
    register: fe,
    handleSubmit: oe,
    watch: I,
    setValue: N,
    getValues: A,
    reset: ge,
    resetField: ye,
    clearErrors: O,
    unregister: Y,
    setError: $,
    setFocus: (R, D = {}) => {
      const z = ne(o, R), Z = z && z._f;
      if (Z) {
        const K = Z.refs ? Z.refs[0] : Z.ref;
        K.focus && (K.focus(), D.shouldSelect && K.select());
      }
    },
    getFieldState: b
  };
}
function PE(e = {}) {
  const t = ue.useRef(), n = ue.useRef(), [r, o] = ue.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: rr(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: rr(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...AE(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const i = t.current.control;
  return i._options = e, Lu({
    subject: i._subjects.state,
    next: (s) => {
      N1(s, i._proxyFormState, i._updateFormState, !0) && o({ ...i._formState });
    }
  }), ue.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]), ue.useEffect(() => {
    if (i._proxyFormState.isDirty) {
      const s = i._getDirty();
      s !== r.isDirty && i._subjects.state.next({
        isDirty: s
      });
    }
  }, [i, r.isDirty]), ue.useEffect(() => {
    e.values && !Nr(e.values, n.current) ? (i._reset(e.values, i._options.resetOptions), n.current = e.values, o((s) => ({ ...s }))) : i._resetDefaultValues();
  }, [e.values, i]), ue.useEffect(() => {
    e.errors && i._setErrors(e.errors);
  }, [e.errors, i]), ue.useEffect(() => {
    i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
  }), ue.useEffect(() => {
    e.shouldUnregister && i._subjects.values.next({
      values: i._getWatch()
    });
  }, [e.shouldUnregister, i]), t.current.formState = D1(r, i), t.current;
}
const IE = (e) => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ k.jsx("path", { d: "M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" }) }), OE = (e) => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ k.jsx("path", { d: "M48.03 424V88c0-13.25-10.76-24-24.02-24S0 74.75 0 88v336c0 13.3 10.76 24 24.02 24s24.01-10.7 24.01-24zm224.27-57.5-92-86.5h243.6c13.3 0 24.1-10.7 24.1-24s-10.76-23.1-24.02-23.1H180.3l91.98-86.53c5.035-4.719 7.568-11.09 7.568-17.47 0-5.906-2.158-11.81-6.536-16.44-9.069-9.656-24.27-10.12-33.93-1.031l-136.1 128c-9.694 9.062-9.694 25.87 0 34.94l136.1 128c9.663 9.094 24.86 8.625 33.93-1.031C282.5 390.8 282 375.6 272.3 366.5z" }) }), jE = (e) => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ k.jsx("path", { d: "M399.1 88v336c0 13.25 10.76 24 24.02 24 14.08 0 24.88-10.7 24.88-24V88c0-13.25-10.8-24-24.9-24-12.4 0-24 10.75-24 24zm-223.4 57.5 91.98 86.53H24.08C10.76 232 0 242.8 0 256s10.76 24 24.02 24h243.6l-91.98 86.53c-5.04 4.77-7.54 11.07-7.54 17.47 0 5.906 2.158 11.81 6.536 16.44 9.069 9.656 24.27 10.12 33.93 1.031l136.1-128c9.694-9.062 9.694-25.87 0-34.94l-136.1-128C198.9 101.4 183.7 101.9 174.6 111.6c-9.1 9.6-9.5 24.8 1.1 33.9z" }) }), ME = (e) => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ k.jsx("path", { d: "M435.848 83.466 172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z" }) }), DE = (e) => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ k.jsx("path", { d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm0-160c13.25 0 24-10.75 24-24V152c0-13.2-10.7-24-24-24s-24 10.8-24 24v128c0 13.3 10.8 24 24 24zm0 33.1c-17.36 0-31.44 14.08-31.44 31.44C224.6 385.9 238.6 400 256 400s31.44-14.08 31.44-31.44C287.4 351.2 273.4 337.1 256 337.1z" }) }), NE = (e) => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ k.jsx("path", { d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm40-128h-16v-88c0-13.2-10.7-24-24-24h-32c-13.2 0-24 10.8-24 24s10.8 24 24 24h8v64h-16c-13.2 0-24 10.8-24 24s10.8 24 24 24h80c13.25 0 24-10.75 24-24s-10.7-24-24-24zm-40-144c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.3-32 32 14.3 32 32 32z" }) }), $E = (e) => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ k.jsx("path", { d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm0-128c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32s-14.9-32-32-32zm33.1-208H238c-39 0-70 31-70 70 0 13 11 24 24 24s24-11 24-24c0-12 9.1-22 21.1-22h51.1c12.9 0 23.8 10 23.8 22 0 8-4 14.1-11 18.1L244 251c-8 5-12 13-12 21v16c0 13 11 24 24 24s24-11 24-24v-2l45.1-28c21-13 34-36 34-60 .9-39-30.1-70-70-70z" }) }), FE = (e) => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ k.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512z" }) }), LE = (e) => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ k.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z" }) }), zE = (e) => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ k.jsx("path", { d: "m504.1 471-134-134c29-35.5 45-80.2 45-129 0-114.9-93.13-208-208-208S0 93.13 0 208s93.12 208 207.1 208c48.79 0 93.55-16.91 129-45.04l134 134c5.6 4.74 11.8 7.04 17.9 7.04s12.28-2.344 16.97-7.031c9.33-9.369 9.33-24.569-.87-33.969zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160-71.78 160-160 160S48 296.2 48 208z" }) }), BE = (e) => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ k.jsx("path", { d: "M288 32c0 17.67-14.3 32-32 32s-32-14.33-32-32 14.3-32 32-32 32 14.33 32 32zm0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm192-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM32 288c-17.67 0-32-14.3-32-32s14.33-32 32-32 32 14.3 32 32-14.33 32-32 32zm42.98 103.8c12.5-12.5 32.72-12.5 45.22 0s12.5 32.7 0 45.2-32.72 12.5-45.22 0-12.5-32.7 0-45.2zM391.8 437c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0 12.5 32.7 0 45.2-32.7 12.5-45.2 0zM120.2 74.98c12.5 12.5 12.5 32.72 0 45.22s-32.72 12.5-45.22 0-12.5-32.72 0-45.22c12.5-12.49 32.72-12.49 45.22 0z" }) }), Z1 = (e) => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ k.jsx("path", { d: "M506.3 417 293 53c-8.2-14-22.6-21-37-21-14.4 0-28.8 7-37.9 21L4.9 417c-15.49 27.9 4.951 63 37.84 63h426.6c32.76 0 53.26-35 36.96-63zM52.58 432 255.1 84.8 459.4 432H52.58zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44s14.11 31.44 31.48 31.44 31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1zM232 184v96c0 13.3 10.8 24 24 24s24-10.75 24-24v-96c0-13.2-10.7-24-24-24s-24 10.8-24 24z" }) });
function Ke(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function VE(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function q1(...e) {
  return (t) => e.forEach((n) => VE(n, t));
}
function zt(...e) {
  return E.useCallback(q1(...e), e);
}
function io(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = E.createContext(s), l = n.length;
    n = [...n, s];
    function u(p) {
      const { scope: d, children: m, ...g } = p, w = (d == null ? void 0 : d[e][l]) || a, x = E.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ k.jsx(w.Provider, { value: x, children: m });
    }
    function c(p, d) {
      const m = (d == null ? void 0 : d[e][l]) || a, g = E.useContext(m);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return u.displayName = i + "Provider", [u, c];
  }
  const o = () => {
    const i = n.map((s) => E.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return E.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, UE(o, ...t)];
}
function UE(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const p = l(i)[`__scope${u}`];
        return { ...a, ...p };
      }, {});
      return E.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Tl = E.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = E.Children.toArray(n), i = o.find(HE);
  if (i) {
    const s = i.props.children, a = o.map((l) => l === i ? E.Children.count(s) > 1 ? E.Children.only(null) : E.isValidElement(s) ? s.props.children : null : l);
    return /* @__PURE__ */ k.jsx(xf, { ...r, ref: t, children: E.isValidElement(s) ? E.cloneElement(s, void 0, a) : null });
  }
  return /* @__PURE__ */ k.jsx(xf, { ...r, ref: t, children: n });
});
Tl.displayName = "Slot";
var xf = E.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (E.isValidElement(n)) {
    const o = QE(n);
    return E.cloneElement(n, {
      ...WE(r, n.props),
      // @ts-ignore
      ref: t ? q1(t, o) : o
    });
  }
  return E.Children.count(n) > 1 ? E.Children.only(null) : null;
});
xf.displayName = "SlotClone";
var G1 = ({ children: e }) => /* @__PURE__ */ k.jsx(k.Fragment, { children: e });
function HE(e) {
  return E.isValidElement(e) && e.type === G1;
}
function WE(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      i(...a), o(...a);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function QE(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var KE = [
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
], St = KE.reduce((e, t) => {
  const n = E.forwardRef((r, o) => {
    const { asChild: i, ...s } = r, a = i ? Tl : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ k.jsx(a, { ...s, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function ZE(e, t) {
  e && Ds.flushSync(() => e.dispatchEvent(t));
}
function so(e) {
  const t = E.useRef(e);
  return E.useEffect(() => {
    t.current = e;
  }), E.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function qE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = so(e);
  E.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var GE = "DismissableLayer", Sf = "dismissableLayer.update", YE = "dismissableLayer.pointerDownOutside", XE = "dismissableLayer.focusOutside", $g, Y1 = E.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), X1 = E.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, u = E.useContext(Y1), [c, p] = E.useState(null), d = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = E.useState({}), g = zt(t, (C) => p(C)), w = Array.from(u.layers), [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = w.indexOf(x), f = c ? w.indexOf(c) : -1, h = u.layersWithOutsidePointerEventsDisabled.size > 0, y = f >= v, S = t2((C) => {
      const T = C.target, M = [...u.branches].some((j) => j.contains(T));
      !y || M || (o == null || o(C), s == null || s(C), C.defaultPrevented || a == null || a());
    }, d), _ = n2((C) => {
      const T = C.target;
      [...u.branches].some((j) => j.contains(T)) || (i == null || i(C), s == null || s(C), C.defaultPrevented || a == null || a());
    }, d);
    return qE((C) => {
      f === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && a && (C.preventDefault(), a()));
    }, d), E.useEffect(() => {
      if (c)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && ($g = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Fg(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = $g);
        };
    }, [c, d, n, u]), E.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Fg());
    }, [c, u]), E.useEffect(() => {
      const C = () => m({});
      return document.addEventListener(Sf, C), () => document.removeEventListener(Sf, C);
    }, []), /* @__PURE__ */ k.jsx(
      St.div,
      {
        ...l,
        ref: g,
        style: {
          pointerEvents: h ? y ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Ke(e.onFocusCapture, _.onFocusCapture),
        onBlurCapture: Ke(e.onBlurCapture, _.onBlurCapture),
        onPointerDownCapture: Ke(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
X1.displayName = GE;
var JE = "DismissableLayerBranch", e2 = E.forwardRef((e, t) => {
  const n = E.useContext(Y1), r = E.useRef(null), o = zt(t, r);
  return E.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ k.jsx(St.div, { ...e, ref: o });
});
e2.displayName = JE;
function t2(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = so(e), r = E.useRef(!1), o = E.useRef(() => {
  });
  return E.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          J1(
            YE,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function n2(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = so(e), r = E.useRef(!1);
  return E.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && J1(XE, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Fg() {
  const e = new CustomEvent(Sf);
  document.dispatchEvent(e);
}
function J1(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? ZE(o, i) : o.dispatchEvent(i);
}
var Yr = globalThis != null && globalThis.document ? E.useLayoutEffect : () => {
}, r2 = dd.useId || (() => {
}), o2 = 0;
function ew(e) {
  const [t, n] = E.useState(r2());
  return Yr(() => {
    n((r) => r ?? String(o2++));
  }, [e]), t ? `radix-${t}` : "";
}
const i2 = ["top", "right", "bottom", "left"], wr = Math.min, Ot = Math.max, Rl = Math.round, wa = Math.floor, xr = (e) => ({
  x: e,
  y: e
}), s2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, a2 = {
  start: "end",
  end: "start"
};
function kf(e, t, n) {
  return Ot(e, wr(t, n));
}
function Bn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vn(e) {
  return e.split("-")[0];
}
function li(e) {
  return e.split("-")[1];
}
function dh(e) {
  return e === "x" ? "y" : "x";
}
function fh(e) {
  return e === "y" ? "height" : "width";
}
function Sr(e) {
  return ["top", "bottom"].includes(Vn(e)) ? "y" : "x";
}
function ph(e) {
  return dh(Sr(e));
}
function l2(e, t, n) {
  n === void 0 && (n = !1);
  const r = li(e), o = ph(e), i = fh(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Al(s)), [s, Al(s)];
}
function u2(e) {
  const t = Al(e);
  return [_f(e), t, _f(t)];
}
function _f(e) {
  return e.replace(/start|end/g, (t) => a2[t]);
}
function c2(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function d2(e, t, n, r) {
  const o = li(e);
  let i = c2(Vn(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(_f)))), i;
}
function Al(e) {
  return e.replace(/left|right|bottom|top/g, (t) => s2[t]);
}
function f2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function tw(e) {
  return typeof e != "number" ? f2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Pl(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Lg(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Sr(t), s = ph(t), a = fh(s), l = Vn(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (li(t)) {
    case "start":
      m[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      m[s] += d * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const p2 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: p
  } = Lg(u, r, l), d = r, m = {}, g = 0;
  for (let w = 0; w < a.length; w++) {
    const {
      name: x,
      fn: v
    } = a[w], {
      x: f,
      y: h,
      data: y,
      reset: S
    } = await v({
      x: c,
      y: p,
      initialPlacement: r,
      placement: d,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = f ?? c, p = h ?? p, m = {
      ...m,
      [x]: {
        ...m[x],
        ...y
      }
    }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (u = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: c,
      y: p
    } = Lg(u, d, l)), w = -1);
  }
  return {
    x: c,
    y: p,
    placement: d,
    strategy: o,
    middlewareData: m
  };
};
async function _s(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: d = !1,
    padding: m = 0
  } = Bn(t, e), g = tw(m), x = a[d ? p === "floating" ? "reference" : "floating" : p], v = Pl(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), f = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, h = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), y = await (i.isElement == null ? void 0 : i.isElement(h)) ? await (i.getScale == null ? void 0 : i.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Pl(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: f,
    offsetParent: h,
    strategy: l
  }) : f);
  return {
    top: (v.top - S.top + g.top) / y.y,
    bottom: (S.bottom - v.bottom + g.bottom) / y.y,
    left: (v.left - S.left + g.left) / y.x,
    right: (S.right - v.right + g.right) / y.x
  };
}
const h2 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: c = 0
    } = Bn(e, t) || {};
    if (u == null)
      return {};
    const p = tw(c), d = {
      x: n,
      y: r
    }, m = ph(o), g = fh(m), w = await s.getDimensions(u), x = m === "y", v = x ? "top" : "left", f = x ? "bottom" : "right", h = x ? "clientHeight" : "clientWidth", y = i.reference[g] + i.reference[m] - d[m] - i.floating[g], S = d[m] - i.reference[m], _ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let C = _ ? _[h] : 0;
    (!C || !await (s.isElement == null ? void 0 : s.isElement(_))) && (C = a.floating[h] || i.floating[g]);
    const T = y / 2 - S / 2, M = C / 2 - w[g] / 2 - 1, j = wr(p[v], M), U = wr(p[f], M), B = j, L = C - w[g] - U, H = C / 2 - w[g] / 2 + T, J = kf(B, H, L), te = !l.arrow && li(o) != null && H !== J && i.reference[g] / 2 - (H < B ? j : U) - w[g] / 2 < 0, ee = te ? H < B ? H - B : H - L : 0;
    return {
      [m]: d[m] + ee,
      data: {
        [m]: J,
        centerOffset: H - J - ee,
        ...te && {
          alignmentOffset: ee
        }
      },
      reset: te
    };
  }
}), m2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: d,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: w = !0,
        ...x
      } = Bn(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const v = Vn(o), f = Sr(a), h = Vn(a) === a, y = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), S = d || (h || !w ? [Al(a)] : u2(a)), _ = g !== "none";
      !d && _ && S.push(...d2(a, w, g, y));
      const C = [a, ...S], T = await _s(t, x), M = [];
      let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && M.push(T[v]), p) {
        const H = l2(o, s, y);
        M.push(T[H[0]], T[H[1]]);
      }
      if (j = [...j, {
        placement: o,
        overflows: M
      }], !M.every((H) => H <= 0)) {
        var U, B;
        const H = (((U = i.flip) == null ? void 0 : U.index) || 0) + 1, J = C[H];
        if (J)
          return {
            data: {
              index: H,
              overflows: j
            },
            reset: {
              placement: J
            }
          };
        let te = (B = j.filter((ee) => ee.overflows[0] <= 0).sort((ee, N) => ee.overflows[1] - N.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!te)
          switch (m) {
            case "bestFit": {
              var L;
              const ee = (L = j.filter((N) => {
                if (_) {
                  const Q = Sr(N.placement);
                  return Q === f || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Q === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((Q) => Q > 0).reduce((Q, W) => Q + W, 0)]).sort((N, Q) => N[1] - Q[1])[0]) == null ? void 0 : L[0];
              ee && (te = ee);
              break;
            }
            case "initialPlacement":
              te = a;
              break;
          }
        if (o !== te)
          return {
            reset: {
              placement: te
            }
          };
      }
      return {};
    }
  };
};
function zg(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Bg(e) {
  return i2.some((t) => e[t] >= 0);
}
const g2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Bn(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await _s(t, {
            ...o,
            elementContext: "reference"
          }), s = zg(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Bg(s)
            }
          };
        }
        case "escaped": {
          const i = await _s(t, {
            ...o,
            altBoundary: !0
          }), s = zg(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Bg(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function v2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Vn(n), a = li(n), l = Sr(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, p = Bn(t, e);
  let {
    mainAxis: d,
    crossAxis: m,
    alignmentAxis: g
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof g == "number" && (m = a === "end" ? g * -1 : g), l ? {
    x: m * c,
    y: d * u
  } : {
    x: d * u,
    y: m * c
  };
}
const y2 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await v2(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, w2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (x) => {
            let {
              x: v,
              y: f
            } = x;
            return {
              x: v,
              y: f
            };
          }
        },
        ...l
      } = Bn(e, t), u = {
        x: n,
        y: r
      }, c = await _s(t, l), p = Sr(Vn(o)), d = dh(p);
      let m = u[d], g = u[p];
      if (i) {
        const x = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", f = m + c[x], h = m - c[v];
        m = kf(f, m, h);
      }
      if (s) {
        const x = p === "y" ? "top" : "left", v = p === "y" ? "bottom" : "right", f = g + c[x], h = g - c[v];
        g = kf(f, g, h);
      }
      const w = a.fn({
        ...t,
        [d]: m,
        [p]: g
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [d]: i,
            [p]: s
          }
        }
      };
    }
  };
}, x2 = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = Bn(e, t), c = {
        x: n,
        y: r
      }, p = Sr(o), d = dh(p);
      let m = c[d], g = c[p];
      const w = Bn(a, t), x = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...w
      };
      if (l) {
        const h = d === "y" ? "height" : "width", y = i.reference[d] - i.floating[h] + x.mainAxis, S = i.reference[d] + i.reference[h] - x.mainAxis;
        m < y ? m = y : m > S && (m = S);
      }
      if (u) {
        var v, f;
        const h = d === "y" ? "width" : "height", y = ["top", "left"].includes(Vn(o)), S = i.reference[p] - i.floating[h] + (y && ((v = s.offset) == null ? void 0 : v[p]) || 0) + (y ? 0 : x.crossAxis), _ = i.reference[p] + i.reference[h] + (y ? 0 : ((f = s.offset) == null ? void 0 : f[p]) || 0) - (y ? x.crossAxis : 0);
        g < S ? g = S : g > _ && (g = _);
      }
      return {
        [d]: m,
        [p]: g
      };
    }
  };
}, S2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...u
      } = Bn(e, t), c = await _s(t, u), p = Vn(o), d = li(o), m = Sr(o) === "y", {
        width: g,
        height: w
      } = i.floating;
      let x, v;
      p === "top" || p === "bottom" ? (x = p, v = d === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = p, x = d === "end" ? "top" : "bottom");
      const f = w - c.top - c.bottom, h = g - c.left - c.right, y = wr(w - c[x], f), S = wr(g - c[v], h), _ = !t.middlewareData.shift;
      let C = y, T = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = h), (r = t.middlewareData.shift) != null && r.enabled.y && (C = f), _ && !d) {
        const j = Ot(c.left, 0), U = Ot(c.right, 0), B = Ot(c.top, 0), L = Ot(c.bottom, 0);
        m ? T = g - 2 * (j !== 0 || U !== 0 ? j + U : Ot(c.left, c.right)) : C = w - 2 * (B !== 0 || L !== 0 ? B + L : Ot(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: C
      });
      const M = await s.getDimensions(a.floating);
      return g !== M.width || w !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function zu() {
  return typeof window < "u";
}
function ui(e) {
  return nw(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function bn(e) {
  var t;
  return (t = (nw(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function nw(e) {
  return zu() ? e instanceof Node || e instanceof $t(e).Node : !1;
}
function un(e) {
  return zu() ? e instanceof Element || e instanceof $t(e).Element : !1;
}
function _n(e) {
  return zu() ? e instanceof HTMLElement || e instanceof $t(e).HTMLElement : !1;
}
function Vg(e) {
  return !zu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $t(e).ShadowRoot;
}
function Us(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = cn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function k2(e) {
  return ["table", "td", "th"].includes(ui(e));
}
function Bu(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function hh(e) {
  const t = mh(), n = un(e) ? cn(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function _2(e) {
  let t = kr(e);
  for (; _n(t) && !Yo(t); ) {
    if (hh(t))
      return t;
    if (Bu(t))
      return null;
    t = kr(t);
  }
  return null;
}
function mh() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Yo(e) {
  return ["html", "body", "#document"].includes(ui(e));
}
function cn(e) {
  return $t(e).getComputedStyle(e);
}
function Vu(e) {
  return un(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function kr(e) {
  if (ui(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Vg(e) && e.host || // Fallback.
    bn(e)
  );
  return Vg(t) ? t.host : t;
}
function rw(e) {
  const t = kr(e);
  return Yo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _n(t) && Us(t) ? t : rw(t);
}
function Cs(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = rw(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = $t(o);
  if (i) {
    const a = Cf(s);
    return t.concat(s, s.visualViewport || [], Us(o) ? o : [], a && n ? Cs(a) : []);
  }
  return t.concat(o, Cs(o, [], n));
}
function Cf(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ow(e) {
  const t = cn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _n(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Rl(n) !== i || Rl(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function gh(e) {
  return un(e) ? e : e.contextElement;
}
function $o(e) {
  const t = gh(e);
  if (!_n(t))
    return xr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ow(t);
  let s = (i ? Rl(n.width) : n.width) / r, a = (i ? Rl(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const C2 = /* @__PURE__ */ xr(0);
function iw(e) {
  const t = $t(e);
  return !mh() || !t.visualViewport ? C2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function b2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== $t(e) ? !1 : t;
}
function Xr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = gh(e);
  let s = xr(1);
  t && (r ? un(r) && (s = $o(r)) : s = $o(e));
  const a = b2(i, n, r) ? iw(i) : xr(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, p = o.height / s.y;
  if (i) {
    const d = $t(i), m = r && un(r) ? $t(r) : r;
    let g = d, w = Cf(g);
    for (; w && r && m !== g; ) {
      const x = $o(w), v = w.getBoundingClientRect(), f = cn(w), h = v.left + (w.clientLeft + parseFloat(f.paddingLeft)) * x.x, y = v.top + (w.clientTop + parseFloat(f.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, p *= x.y, l += h, u += y, g = $t(w), w = Cf(g);
    }
  }
  return Pl({
    width: c,
    height: p,
    x: l,
    y: u
  });
}
function E2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = bn(r), a = t ? Bu(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = xr(1);
  const c = xr(0), p = _n(r);
  if ((p || !p && !i) && ((ui(r) !== "body" || Us(s)) && (l = Vu(r)), _n(r))) {
    const d = Xr(r);
    u = $o(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y
  };
}
function T2(e) {
  return Array.from(e.getClientRects());
}
function bf(e, t) {
  const n = Vu(e).scrollLeft;
  return t ? t.left + n : Xr(bn(e)).left + n;
}
function R2(e) {
  const t = bn(e), n = Vu(e), r = e.ownerDocument.body, o = Ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + bf(e);
  const a = -n.scrollTop;
  return cn(r).direction === "rtl" && (s += Ot(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function A2(e, t) {
  const n = $t(e), r = bn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = mh();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function P2(e, t) {
  const n = Xr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = _n(e) ? $o(e) : xr(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Ug(e, t, n) {
  let r;
  if (t === "viewport")
    r = A2(e, n);
  else if (t === "document")
    r = R2(bn(e));
  else if (un(t))
    r = P2(t, n);
  else {
    const o = iw(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Pl(r);
}
function sw(e, t) {
  const n = kr(e);
  return n === t || !un(n) || Yo(n) ? !1 : cn(n).position === "fixed" || sw(n, t);
}
function I2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Cs(e, [], !1).filter((a) => un(a) && ui(a) !== "body"), o = null;
  const i = cn(e).position === "fixed";
  let s = i ? kr(e) : e;
  for (; un(s) && !Yo(s); ) {
    const a = cn(s), l = hh(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Us(s) && !l && sw(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = kr(s);
  }
  return t.set(e, r), r;
}
function O2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Bu(t) ? [] : I2(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const p = Ug(t, c, o);
    return u.top = Ot(p.top, u.top), u.right = wr(p.right, u.right), u.bottom = wr(p.bottom, u.bottom), u.left = Ot(p.left, u.left), u;
  }, Ug(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function j2(e) {
  const {
    width: t,
    height: n
  } = ow(e);
  return {
    width: t,
    height: n
  };
}
function M2(e, t, n) {
  const r = _n(t), o = bn(t), i = n === "fixed", s = Xr(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = xr(0);
  if (r || !r && !i)
    if ((ui(t) !== "body" || Us(o)) && (a = Vu(t)), r) {
      const m = Xr(t, !0, i, t);
      l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
    } else o && (l.x = bf(o));
  let u = 0, c = 0;
  if (o && !r && !i) {
    const m = o.getBoundingClientRect();
    c = m.top + a.scrollTop, u = m.left + a.scrollLeft - // RTL <body> scrollbar.
    bf(o, m);
  }
  const p = s.left + a.scrollLeft - l.x - u, d = s.top + a.scrollTop - l.y - c;
  return {
    x: p,
    y: d,
    width: s.width,
    height: s.height
  };
}
function Wc(e) {
  return cn(e).position === "static";
}
function Hg(e, t) {
  if (!_n(e) || cn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return bn(e) === n && (n = n.ownerDocument.body), n;
}
function aw(e, t) {
  const n = $t(e);
  if (Bu(e))
    return n;
  if (!_n(e)) {
    let o = kr(e);
    for (; o && !Yo(o); ) {
      if (un(o) && !Wc(o))
        return o;
      o = kr(o);
    }
    return n;
  }
  let r = Hg(e, t);
  for (; r && k2(r) && Wc(r); )
    r = Hg(r, t);
  return r && Yo(r) && Wc(r) && !hh(r) ? n : r || _2(e) || n;
}
const D2 = async function(e) {
  const t = this.getOffsetParent || aw, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: M2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function N2(e) {
  return cn(e).direction === "rtl";
}
const $2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: E2,
  getDocumentElement: bn,
  getClippingRect: O2,
  getOffsetParent: aw,
  getElementRects: D2,
  getClientRects: T2,
  getDimensions: j2,
  getScale: $o,
  isElement: un,
  isRTL: N2
};
function F2(e, t) {
  let n = null, r;
  const o = bn(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const {
      left: u,
      top: c,
      width: p,
      height: d
    } = e.getBoundingClientRect();
    if (a || t(), !p || !d)
      return;
    const m = wa(c), g = wa(o.clientWidth - (u + p)), w = wa(o.clientHeight - (c + d)), x = wa(u), f = {
      rootMargin: -m + "px " + -g + "px " + -w + "px " + -x + "px",
      threshold: Ot(0, wr(1, l)) || 1
    };
    let h = !0;
    function y(S) {
      const _ = S[0].intersectionRatio;
      if (_ !== l) {
        if (!h)
          return s();
        _ ? s(!1, _) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      h = !1;
    }
    try {
      n = new IntersectionObserver(y, {
        ...f,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(y, f);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function L2(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = gh(e), c = o || i ? [...u ? Cs(u) : [], ...Cs(t)] : [];
  c.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const p = u && a ? F2(u, n) : null;
  let d = -1, m = null;
  s && (m = new ResizeObserver((v) => {
    let [f] = v;
    f && f.target === u && m && (m.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var h;
      (h = m) == null || h.observe(t);
    })), n();
  }), u && !l && m.observe(u), m.observe(t));
  let g, w = l ? Xr(e) : null;
  l && x();
  function x() {
    const v = Xr(e);
    w && (v.x !== w.x || v.y !== w.y || v.width !== w.width || v.height !== w.height) && n(), w = v, g = requestAnimationFrame(x);
  }
  return n(), () => {
    var v;
    c.forEach((f) => {
      o && f.removeEventListener("scroll", n), i && f.removeEventListener("resize", n);
    }), p == null || p(), (v = m) == null || v.disconnect(), m = null, l && cancelAnimationFrame(g);
  };
}
const z2 = y2, B2 = w2, V2 = m2, U2 = S2, H2 = g2, Wg = h2, W2 = x2, Q2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: $2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return p2(e, t, {
    ...o,
    platform: i
  });
};
var Ba = typeof document < "u" ? E.useLayoutEffect : E.useEffect;
function Il(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Il(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Il(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function lw(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qg(e, t) {
  const n = lw(e);
  return Math.round(t * n) / n;
}
function Qc(e) {
  const t = E.useRef(e);
  return Ba(() => {
    t.current = e;
  }), t;
}
function K2(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: u
  } = e, [c, p] = E.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, m] = E.useState(r);
  Il(d, r) || m(r);
  const [g, w] = E.useState(null), [x, v] = E.useState(null), f = E.useCallback((N) => {
    N !== _.current && (_.current = N, w(N));
  }, []), h = E.useCallback((N) => {
    N !== C.current && (C.current = N, v(N));
  }, []), y = i || g, S = s || x, _ = E.useRef(null), C = E.useRef(null), T = E.useRef(c), M = l != null, j = Qc(l), U = Qc(o), B = Qc(u), L = E.useCallback(() => {
    if (!_.current || !C.current)
      return;
    const N = {
      placement: t,
      strategy: n,
      middleware: d
    };
    U.current && (N.platform = U.current), Q2(_.current, C.current, N).then((Q) => {
      const W = {
        ...Q,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: B.current !== !1
      };
      H.current && !Il(T.current, W) && (T.current = W, Ds.flushSync(() => {
        p(W);
      }));
    });
  }, [d, t, n, U, B]);
  Ba(() => {
    u === !1 && T.current.isPositioned && (T.current.isPositioned = !1, p((N) => ({
      ...N,
      isPositioned: !1
    })));
  }, [u]);
  const H = E.useRef(!1);
  Ba(() => (H.current = !0, () => {
    H.current = !1;
  }), []), Ba(() => {
    if (y && (_.current = y), S && (C.current = S), y && S) {
      if (j.current)
        return j.current(y, S, L);
      L();
    }
  }, [y, S, L, j, M]);
  const J = E.useMemo(() => ({
    reference: _,
    floating: C,
    setReference: f,
    setFloating: h
  }), [f, h]), te = E.useMemo(() => ({
    reference: y,
    floating: S
  }), [y, S]), ee = E.useMemo(() => {
    const N = {
      position: n,
      left: 0,
      top: 0
    };
    if (!te.floating)
      return N;
    const Q = Qg(te.floating, c.x), W = Qg(te.floating, c.y);
    return a ? {
      ...N,
      transform: "translate(" + Q + "px, " + W + "px)",
      ...lw(te.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: Q,
      top: W
    };
  }, [n, a, te.floating, c.x, c.y]);
  return E.useMemo(() => ({
    ...c,
    update: L,
    refs: J,
    elements: te,
    floatingStyles: ee
  }), [c, L, J, te, ee]);
}
const Z2 = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Wg({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Wg({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, q2 = (e, t) => ({
  ...z2(e),
  options: [e, t]
}), G2 = (e, t) => ({
  ...B2(e),
  options: [e, t]
}), Y2 = (e, t) => ({
  ...W2(e),
  options: [e, t]
}), X2 = (e, t) => ({
  ...V2(e),
  options: [e, t]
}), J2 = (e, t) => ({
  ...U2(e),
  options: [e, t]
}), eT = (e, t) => ({
  ...H2(e),
  options: [e, t]
}), tT = (e, t) => ({
  ...Z2(e),
  options: [e, t]
});
var nT = "Arrow", uw = E.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ k.jsx(
    St.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ k.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
uw.displayName = nT;
var rT = uw;
function vh(e) {
  const [t, n] = E.useState(void 0);
  return Yr(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          s = u.inlineSize, a = u.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var yh = "Popper", [cw, dw] = io(yh), [oT, fw] = cw(yh), pw = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = E.useState(null);
  return /* @__PURE__ */ k.jsx(oT, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
pw.displayName = yh;
var hw = "PopperAnchor", mw = E.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = fw(hw, n), s = E.useRef(null), a = zt(t, s);
    return E.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
    }), r ? null : /* @__PURE__ */ k.jsx(St.div, { ...o, ref: a });
  }
);
mw.displayName = hw;
var wh = "PopperContent", [iT, sT] = cw(wh), gw = E.forwardRef(
  (e, t) => {
    var Y, V, fe, ce, de, oe;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: c = 0,
      sticky: p = "partial",
      hideWhenDetached: d = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: g,
      ...w
    } = e, x = fw(wh, n), [v, f] = E.useState(null), h = zt(t, (ye) => f(ye)), [y, S] = E.useState(null), _ = vh(y), C = (_ == null ? void 0 : _.width) ?? 0, T = (_ == null ? void 0 : _.height) ?? 0, M = r + (i !== "center" ? "-" + i : ""), j = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c }, U = Array.isArray(u) ? u : [u], B = U.length > 0, L = {
      padding: j,
      boundary: U.filter(lT),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: H, floatingStyles: J, placement: te, isPositioned: ee, middlewareData: N } = K2({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: M,
      whileElementsMounted: (...ye) => L2(...ye, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        q2({ mainAxis: o + T, alignmentAxis: s }),
        l && G2({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? Y2() : void 0,
          ...L
        }),
        l && X2({ ...L }),
        J2({
          ...L,
          apply: ({ elements: ye, rects: he, availableWidth: ge, availableHeight: _e }) => {
            const { width: pe, height: Ae } = he.reference, R = ye.floating.style;
            R.setProperty("--radix-popper-available-width", `${ge}px`), R.setProperty("--radix-popper-available-height", `${_e}px`), R.setProperty("--radix-popper-anchor-width", `${pe}px`), R.setProperty("--radix-popper-anchor-height", `${Ae}px`);
          }
        }),
        y && tT({ element: y, padding: a }),
        uT({ arrowWidth: C, arrowHeight: T }),
        d && eT({ strategy: "referenceHidden", ...L })
      ]
    }), [Q, W] = ww(te), P = so(g);
    Yr(() => {
      ee && (P == null || P());
    }, [ee, P]);
    const A = (Y = N.arrow) == null ? void 0 : Y.x, b = (V = N.arrow) == null ? void 0 : V.y, O = ((fe = N.arrow) == null ? void 0 : fe.centerOffset) !== 0, [$, I] = E.useState();
    return Yr(() => {
      v && I(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ k.jsx(
      "div",
      {
        ref: H.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...J,
          transform: ee ? J.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: $,
          "--radix-popper-transform-origin": [
            (ce = N.transformOrigin) == null ? void 0 : ce.x,
            (de = N.transformOrigin) == null ? void 0 : de.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((oe = N.hide) == null ? void 0 : oe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ k.jsx(
          iT,
          {
            scope: n,
            placedSide: Q,
            onArrowChange: S,
            arrowX: A,
            arrowY: b,
            shouldHideArrow: O,
            children: /* @__PURE__ */ k.jsx(
              St.div,
              {
                "data-side": Q,
                "data-align": W,
                ...w,
                ref: h,
                style: {
                  ...w.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: ee ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
gw.displayName = wh;
var vw = "PopperArrow", aT = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, yw = E.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = sT(vw, r), s = aT[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ k.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ k.jsx(
          rT,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
yw.displayName = vw;
function lT(e) {
  return e !== null;
}
var uT = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, v, f;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [u, c] = ww(n), p = { start: "0%", center: "50%", end: "100%" }[c], d = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2, m = (((f = o.arrow) == null ? void 0 : f.y) ?? 0) + l / 2;
    let g = "", w = "";
    return u === "bottom" ? (g = s ? p : `${d}px`, w = `${-l}px`) : u === "top" ? (g = s ? p : `${d}px`, w = `${r.floating.height + l}px`) : u === "right" ? (g = `${-l}px`, w = s ? p : `${m}px`) : u === "left" && (g = `${r.floating.width + l}px`, w = s ? p : `${m}px`), { data: { x: g, y: w } };
  }
});
function ww(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var cT = pw, dT = mw, fT = gw, pT = yw, hT = "Portal", xw = E.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = E.useState(!1);
  Yr(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? E_.createPortal(/* @__PURE__ */ k.jsx(St.div, { ...r, ref: t }), s) : null;
});
xw.displayName = hT;
function mT(e, t) {
  return E.useReducer((n, r) => t[n][r] ?? n, e);
}
var Hs = (e) => {
  const { present: t, children: n } = e, r = gT(t), o = typeof n == "function" ? n({ present: r.isPresent }) : E.Children.only(n), i = zt(r.ref, vT(o));
  return typeof n == "function" || r.isPresent ? E.cloneElement(o, { ref: i }) : null;
};
Hs.displayName = "Presence";
function gT(e) {
  const [t, n] = E.useState(), r = E.useRef({}), o = E.useRef(e), i = E.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = mT(s, {
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
  return E.useEffect(() => {
    const u = xa(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [a]), Yr(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, m = xa(u);
      e ? l("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && d !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Yr(() => {
    if (t) {
      const u = (p) => {
        const m = xa(r.current).includes(p.animationName);
        p.target === t && m && Ds.flushSync(() => l("ANIMATION_END"));
      }, c = (p) => {
        p.target === t && (i.current = xa(r.current));
      };
      return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: E.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function xa(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function vT(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Uu({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = yT({ defaultProp: t, onChange: n }), i = e !== void 0, s = i ? e : r, a = so(n), l = E.useCallback(
    (u) => {
      if (i) {
        const p = typeof u == "function" ? u(e) : u;
        p !== e && a(p);
      } else
        o(u);
    },
    [i, e, o, a]
  );
  return [s, l];
}
function yT({
  defaultProp: e,
  onChange: t
}) {
  const n = E.useState(e), [r] = n, o = E.useRef(r), i = so(t);
  return E.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
var wT = "VisuallyHidden", Sw = E.forwardRef(
  (e, t) => /* @__PURE__ */ k.jsx(
    St.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
Sw.displayName = wT;
var xT = Sw, [Hu, bO] = io("Tooltip", [
  dw
]), Wu = dw(), kw = "TooltipProvider", ST = 700, Ef = "tooltip.open", [kT, xh] = Hu(kw), _w = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = ST,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, [s, a] = E.useState(!0), l = E.useRef(!1), u = E.useRef(0);
  return E.useEffect(() => {
    const c = u.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ k.jsx(
    kT,
    {
      scope: t,
      isOpenDelayed: s,
      delayDuration: n,
      onOpen: E.useCallback(() => {
        window.clearTimeout(u.current), a(!1);
      }, []),
      onClose: E.useCallback(() => {
        window.clearTimeout(u.current), u.current = window.setTimeout(
          () => a(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: E.useCallback((c) => {
        l.current = c;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
};
_w.displayName = kw;
var Qu = "Tooltip", [_T, Ws] = Hu(Qu), Cw = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o = !1,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: a
  } = e, l = xh(Qu, e.__scopeTooltip), u = Wu(t), [c, p] = E.useState(null), d = ew(), m = E.useRef(0), g = s ?? l.disableHoverableContent, w = a ?? l.delayDuration, x = E.useRef(!1), [v = !1, f] = Uu({
    prop: r,
    defaultProp: o,
    onChange: (C) => {
      C ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ef))) : l.onClose(), i == null || i(C);
    }
  }), h = E.useMemo(() => v ? x.current ? "delayed-open" : "instant-open" : "closed", [v]), y = E.useCallback(() => {
    window.clearTimeout(m.current), x.current = !1, f(!0);
  }, [f]), S = E.useCallback(() => {
    window.clearTimeout(m.current), f(!1);
  }, [f]), _ = E.useCallback(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      x.current = !0, f(!0);
    }, w);
  }, [w, f]);
  return E.useEffect(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ k.jsx(cT, { ...u, children: /* @__PURE__ */ k.jsx(
    _T,
    {
      scope: t,
      contentId: d,
      open: v,
      stateAttribute: h,
      trigger: c,
      onTriggerChange: p,
      onTriggerEnter: E.useCallback(() => {
        l.isOpenDelayed ? _() : y();
      }, [l.isOpenDelayed, _, y]),
      onTriggerLeave: E.useCallback(() => {
        g ? S() : window.clearTimeout(m.current);
      }, [S, g]),
      onOpen: y,
      onClose: S,
      disableHoverableContent: g,
      children: n
    }
  ) });
};
Cw.displayName = Qu;
var Tf = "TooltipTrigger", bw = E.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Ws(Tf, n), i = xh(Tf, n), s = Wu(n), a = E.useRef(null), l = zt(t, a, o.onTriggerChange), u = E.useRef(!1), c = E.useRef(!1), p = E.useCallback(() => u.current = !1, []);
    return E.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ k.jsx(dT, { asChild: !0, ...s, children: /* @__PURE__ */ k.jsx(
      St.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: Ke(e.onPointerMove, (d) => {
          d.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), c.current = !0);
        }),
        onPointerLeave: Ke(e.onPointerLeave, () => {
          o.onTriggerLeave(), c.current = !1;
        }),
        onPointerDown: Ke(e.onPointerDown, () => {
          u.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: Ke(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: Ke(e.onBlur, o.onClose),
        onClick: Ke(e.onClick, o.onClose)
      }
    ) });
  }
);
bw.displayName = Tf;
var Sh = "TooltipPortal", [CT, bT] = Hu(Sh, {
  forceMount: void 0
}), Ew = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, i = Ws(Sh, t);
  return /* @__PURE__ */ k.jsx(CT, { scope: t, forceMount: n, children: /* @__PURE__ */ k.jsx(Hs, { present: n || i.open, children: /* @__PURE__ */ k.jsx(xw, { asChild: !0, container: o, children: r }) }) });
};
Ew.displayName = Sh;
var Xo = "TooltipContent", Tw = E.forwardRef(
  (e, t) => {
    const n = bT(Xo, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, s = Ws(Xo, e.__scopeTooltip);
    return /* @__PURE__ */ k.jsx(Hs, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ k.jsx(Rw, { side: o, ...i, ref: t }) : /* @__PURE__ */ k.jsx(ET, { side: o, ...i, ref: t }) });
  }
), ET = E.forwardRef((e, t) => {
  const n = Ws(Xo, e.__scopeTooltip), r = xh(Xo, e.__scopeTooltip), o = E.useRef(null), i = zt(t, o), [s, a] = E.useState(null), { trigger: l, onClose: u } = n, c = o.current, { onPointerInTransitChange: p } = r, d = E.useCallback(() => {
    a(null), p(!1);
  }, [p]), m = E.useCallback(
    (g, w) => {
      const x = g.currentTarget, v = { x: g.clientX, y: g.clientY }, f = PT(v, x.getBoundingClientRect()), h = IT(v, f), y = OT(w.getBoundingClientRect()), S = MT([...h, ...y]);
      a(S), p(!0);
    },
    [p]
  );
  return E.useEffect(() => () => d(), [d]), E.useEffect(() => {
    if (l && c) {
      const g = (x) => m(x, c), w = (x) => m(x, l);
      return l.addEventListener("pointerleave", g), c.addEventListener("pointerleave", w), () => {
        l.removeEventListener("pointerleave", g), c.removeEventListener("pointerleave", w);
      };
    }
  }, [l, c, m, d]), E.useEffect(() => {
    if (s) {
      const g = (w) => {
        const x = w.target, v = { x: w.clientX, y: w.clientY }, f = (l == null ? void 0 : l.contains(x)) || (c == null ? void 0 : c.contains(x)), h = !jT(v, s);
        f ? d() : h && (d(), u());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [l, c, s, u, d]), /* @__PURE__ */ k.jsx(Rw, { ...e, ref: i });
}), [TT, RT] = Hu(Qu, { isInside: !1 }), Rw = E.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      ...a
    } = e, l = Ws(Xo, n), u = Wu(n), { onClose: c } = l;
    return E.useEffect(() => (document.addEventListener(Ef, c), () => document.removeEventListener(Ef, c)), [c]), E.useEffect(() => {
      if (l.trigger) {
        const p = (d) => {
          const m = d.target;
          m != null && m.contains(l.trigger) && c();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [l.trigger, c]), /* @__PURE__ */ k.jsx(
      X1,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: c,
        children: /* @__PURE__ */ k.jsxs(
          fT,
          {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
              ...a.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ k.jsx(G1, { children: r }),
              /* @__PURE__ */ k.jsx(TT, { scope: n, isInside: !0, children: /* @__PURE__ */ k.jsx(xT, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Tw.displayName = Xo;
var Aw = "TooltipArrow", AT = E.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Wu(n);
    return RT(
      Aw,
      n
    ).isInside ? null : /* @__PURE__ */ k.jsx(pT, { ...o, ...r, ref: t });
  }
);
AT.displayName = Aw;
function PT(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function IT(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function OT(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function jT(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, l = t[i].y, u = t[s].x, c = t[s].y;
    l > r != c > r && n < (u - a) * (r - l) / (c - l) + a && (o = !o);
  }
  return o;
}
function MT(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), DT(t);
}
function DT(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Pw = _w, Iw = Cw, Ow = bw, jw = Ew, Mw = Tw;
function NT({
  items: e,
  selected: t,
  setSelected: n,
  filter: r,
  errors: o
}) {
  return /* @__PURE__ */ k.jsx($T, { children: e.filter(
    (i) => r === void 0 || i.label.toLowerCase().includes(r.toLowerCase())
  ).map((i) => i.id === t ? /* @__PURE__ */ k.jsxs(FT, { children: [
    /* @__PURE__ */ k.jsx("span", { className: "label", children: i.label }),
    (o == null ? void 0 : o[i.id]) !== void 0 && /* @__PURE__ */ k.jsx(Kg, { message: o[i.id] }),
    i.menu && /* @__PURE__ */ k.jsx("span", { className: "menu", children: i.menu })
  ] }, i.id) : /* @__PURE__ */ k.jsxs(Dw, { onClick: () => n(i.id), children: [
    /* @__PURE__ */ k.jsx("span", { className: "label", children: i.label }),
    (o == null ? void 0 : o[i.id]) !== void 0 && /* @__PURE__ */ k.jsx(Kg, { message: o[i.id] }),
    i.menu && /* @__PURE__ */ k.jsx("span", { className: "menu", children: i.menu })
  ] }, i.id)) });
}
function Kg({ message: e }) {
  return /* @__PURE__ */ k.jsx(Pw, { children: /* @__PURE__ */ k.jsxs(Iw, { children: [
    /* @__PURE__ */ k.jsx(Ow, { asChild: !0, children: /* @__PURE__ */ k.jsx(LT, { children: /* @__PURE__ */ k.jsx(Z1, {}) }) }),
    /* @__PURE__ */ k.jsx(jw, { children: /* @__PURE__ */ k.jsx(zT, { children: e }) })
  ] }) });
}
const $T = ae.ul`
  padding: 0;
  margin: 0;
`, Dw = ae.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 36px;
  border-bottom: 1px solid var(${q.border});
  cursor: pointer;
  padding: 4px 8px;
  overflow: hidden;
  > span.label {
    flex: 1;
  }
`, FT = ae(Dw)`
  background-color: var(${q.listActiveSelectionBackground});
  color: var(${q.listActiveSelectionForeground});
  border-radius: 2px;
`, LT = ae.div`
  > svg {
    fill: var(${q.errorForeground});
  }
`, zT = ae(Mw)`
  color: var(${q.notificationsForeground});
  background-color: var(${q.notificationsBackground});
  border: 1px solid var(${q.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`;
function BT(e) {
  var r, o, i, s, a, l;
  const [t, n] = E.useState(
    e.defaultSelection || {
      sectionId: (o = (r = e.sections) == null ? void 0 : r[0]) == null ? void 0 : o.id,
      itemId: (l = (a = (s = (i = e.sections) == null ? void 0 : i[0]) == null ? void 0 : s.items) == null ? void 0 : a[0]) == null ? void 0 : l.id
    }
  );
  return /* @__PURE__ */ k.jsx(VT, { ...e, selected: t, onSelected: n });
}
function VT({
  render: e,
  renderButtons: t,
  renderEmpty: n,
  sections: r,
  errors: o,
  defaultSelection: i,
  noSectionTitles: s,
  selected: a,
  onSelected: l,
  title: u,
  hideEmptySections: c
}) {
  const [p, d] = E.useState(""), [m, g] = E.useState(!0), w = r.map((x) => x.items).flat().length;
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    !m && /* @__PURE__ */ k.jsx(HT, { children: /* @__PURE__ */ k.jsx(
      Zg,
      {
        onClick: (x) => {
          x.preventDefault(), x.stopPropagation(), g(!m);
        },
        children: /* @__PURE__ */ k.jsx(jE, {})
      }
    ) }),
    m && /* @__PURE__ */ k.jsxs(UT, { children: [
      /* @__PURE__ */ k.jsxs(GT, { children: [
        /* @__PURE__ */ k.jsxs("span", { children: [
          w,
          " ",
          u || "items"
        ] }),
        /* @__PURE__ */ k.jsx(
          Zg,
          {
            onClick: (x) => {
              x.preventDefault(), x.stopPropagation(), g(!m);
            },
            children: /* @__PURE__ */ k.jsx(OE, {})
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs(YT, { children: [
        /* @__PURE__ */ k.jsx(
          "input",
          {
            placeholder: "Search",
            value: p,
            onChange: (x) => d(x.target.value)
          }
        ),
        /* @__PURE__ */ k.jsx(zE, {})
      ] }),
      /* @__PURE__ */ k.jsx(QT, { children: r.map((x) => x.items.length === 0 && c && x.menu === void 0 ? null : /* @__PURE__ */ k.jsxs(ue.Fragment, { children: [
        !s && /* @__PURE__ */ k.jsxs(ZT, { children: [
          /* @__PURE__ */ k.jsx("span", { children: x.title }),
          x.menu && /* @__PURE__ */ k.jsx(qT, { children: x.menu })
        ] }),
        /* @__PURE__ */ k.jsx(
          NT,
          {
            selected: (a == null ? void 0 : a.sectionId) == x.id ? a.itemId : void 0,
            setSelected: (v) => l && l({ sectionId: x.id, itemId: v }),
            items: x.items,
            errors: o,
            filter: p.trim()
          }
        )
      ] }, x.title)) }),
      t && /* @__PURE__ */ k.jsx(KT, { children: t() })
    ] }),
    /* @__PURE__ */ k.jsx(WT, { expanded: m, children: a !== void 0 ? e(a) : n == null ? void 0 : n() })
  ] });
}
const UT = ae.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 288px;
  overflow-y: scroll;
  bottom: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: var(${q.background});
`, HT = ae.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  overflow-y: scroll;
  bottom: 0;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: var(${q.background});
`, WT = ae.div`
  position: absolute;
  ${({ expanded: e }) => e ? "left: 320px;" : "left: 40px;"}
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(${q.computedOne});
  padding: 16px;
  overflow-y: auto;
`, QT = ae.div`
  flex: 1;
  overflow-y: auto;
  > ul {
    > li {
      > .menu {
        opacity: 0;
      }
    }
    > li:hover {
      > .menu {
        opacity: 1;
      }
    }
  }
`, KT = ae.div``, ZT = ae.div`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.4;
`, qT = ae.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`, GT = ae.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > span:first-child {
    flex: 1;
    font-weight: 600;
  }
`, Zg = ae.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  > svg {
    height: 16px;
    width: 16px;
    fill: var(${q.foreground});
  }
`, YT = ae.div`
  display: flex;
  height: 40px;
  align-items: center;
  background-color: var(${q.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${q.border});

  > input {
    flex: 1;
    margin-left: 8px;
    background-color: transparent;
    border: none;
    color: var(${q.foreground});
    padding: 4px;

    &::placeholder {
      color: var(${q.inputPlaceholderForeground});
      font-size: 14px;
    }

    &:focus {
      outline: none;
      // outline: 1px solid var(${q.focusBorder});
    }
  }

  > svg {
    width: 16px;
    height: 16px;
    fill: var(${q.foreground});
    margin: 8px;
  }

  &:focus-within {
    border: 1px solid var(${q.focusBorder});
  }
`, XT = {
  ready: !1,
  data: {
    insecureSslHostnames: [],
    platformUrl: "https://platform.42crunch.com",
    platformAuthType: "anond-token",
    platformApiToken: "",
    anondToken: "",
    platformServices: {
      source: "auto",
      manual: void 0,
      auto: "services.42crunch.com:8001"
    },
    scandManager: {
      url: "",
      auth: "none",
      timeout: 300,
      header: {
        name: "",
        value: ""
      }
    },
    scanRuntime: "docker",
    scanImage: "",
    docker: {
      replaceLocalhost: !0,
      useHostNetwork: !0
    },
    platform: "",
    cli: { found: !1, location: "" },
    cliDirectoryOverride: "",
    repository: "",
    platformTemporaryCollectionName: "",
    platformMandatoryTags: "",
    approvedHosts: []
  },
  platformConnectionTestResult: void 0,
  waitingForPlatformConnectionTest: !1,
  overlordConnectionTestResult: void 0,
  waitingForOverlordConnectionTest: !1,
  scandManagerConnectionTestResult: void 0,
  waitingForScandManagerConnectionTest: !1,
  cliTestResult: void 0,
  waitingForCliTest: !1,
  waitingForCliDownload: !1,
  cliDownloadPercent: 0,
  errors: {
    "platform-connection": void 0,
    "platform-services": void 0,
    "temporary-collection": void 0,
    "mandatory-tags": void 0,
    "scan-image": void 0,
    "scan-runtime": void 0,
    "openapi-external-refs": void 0
  },
  hasErrors: !1
}, Nw = hn({
  name: "config",
  initialState: XT,
  reducers: {
    loadConfig: (e, t) => {
      e.ready ? e.data.cli = t.payload.cli : (e.ready = !0, e.data = t.payload);
    },
    saveConfig: (e, t) => {
      e.data = { ...e.data, ...t.payload }, e.data.platformServices.auto = JT(e.data.platformUrl), e.platformConnectionTestResult = void 0, e.overlordConnectionTestResult = void 0, e.scandManagerConnectionTestResult = void 0, e.cliDownloadError = void 0, e.cliTestResult = void 0;
    },
    setError: (e, t) => {
      const { screen: n, error: r } = t.payload;
      e.errors[n] = r, e.hasErrors = Object.values(e.errors).some((o) => o !== void 0);
    },
    clearError: (e, t) => {
      e.errors[t.payload] = void 0, e.hasErrors = Object.values(e.errors).some((n) => n !== void 0);
    },
    addInsecureSslHostname: (e, t) => {
      e.data.insecureSslHostnames.push(t.payload);
    },
    removeInsecureSslHostname: (e, t) => {
      e.data.insecureSslHostnames = e.data.insecureSslHostnames.filter(
        (n) => n !== t.payload
      );
    },
    testPlatformConnection: (e, t) => {
      e.waitingForPlatformConnectionTest = !0, e.platformConnectionTestResult = void 0;
    },
    showPlatformConnectionTest: (e, t) => {
      e.platformConnectionTestResult = t.payload, e.waitingForPlatformConnectionTest = !1;
    },
    testOverlordConnection: (e, t) => {
      e.waitingForOverlordConnectionTest = !0, e.overlordConnectionTestResult = void 0;
    },
    showOverlordConnectionTest: (e, t) => {
      e.overlordConnectionTestResult = t.payload, e.waitingForOverlordConnectionTest = !1;
    },
    testScandManagerConnection: (e, t) => {
      e.waitingForScandManagerConnectionTest = !0, e.scandManagerConnectionTestResult = void 0;
    },
    showScandManagerConnectionTest: (e, t) => {
      e.scandManagerConnectionTestResult = t.payload, e.waitingForScandManagerConnectionTest = !1;
    },
    showConfigWindow: (e, t) => {
    },
    testCli: (e, t) => {
      e.waitingForCliTest = !0, e.cliTestResult = void 0;
    },
    showCliTest: (e, t) => {
      e.cliTestResult = t.payload, e.waitingForCliTest = !1;
    },
    downloadCli: (e, t) => {
      e.waitingForCliDownload = !0, e.cliTestResult = void 0, e.cliDownloadError = void 0;
    },
    showCliDownload: (e, t) => {
      e.cliTestResult = void 0, t.payload.completed ? (e.waitingForCliDownload = !1, e.cliDownloadPercent = 0, t.payload.success ? (e.data.cli.location = t.payload.location, e.data.cli.found = !0) : (e.data.cli.found = !1, e.cliDownloadError = t.payload.error)) : (e.waitingForCliDownload = !0, e.cliDownloadPercent = t.payload.progress.percent);
    },
    openLink: (e, t) => {
    }
  }
});
function JT(e) {
  try {
    const n = new URL(e).hostname;
    return n.toLowerCase().startsWith("platform") ? n.replace(/^platform/i, "services") + ":8001" : "services." + n + ":8001";
  } catch {
    return "";
  }
}
const {
  loadConfig: eR,
  saveConfig: $w,
  showConfigWindow: EO,
  setError: Fw,
  clearError: Lw,
  testPlatformConnection: zw,
  showPlatformConnectionTest: tR,
  testOverlordConnection: Bw,
  showOverlordConnectionTest: nR,
  testScandManagerConnection: Vw,
  showScandManagerConnectionTest: rR,
  addInsecureSslHostname: oR,
  removeInsecureSslHostname: iR,
  testCli: Uw,
  showCliTest: sR,
  downloadCli: Hw,
  showCliDownload: aR,
  openLink: Rf
} = Nw.actions, Qs = Vp, Ku = Bp, lR = Nw.reducer, uR = { Date: !0, RegExp: !0, String: !0, Number: !0 };
function Ww(e, t, n = { cyclesFix: !0 }, r = []) {
  var a, l;
  let o = [];
  const i = Array.isArray(e);
  for (const u in e) {
    const c = e[u], p = i ? +u : u;
    if (!(u in t)) {
      o.push({
        type: "REMOVE",
        path: [p],
        oldValue: e[u]
      });
      continue;
    }
    const d = t[u], m = typeof c == "object" && typeof d == "object" && Array.isArray(c) === Array.isArray(d);
    if (c && d && m && !uR[(l = (a = Object.getPrototypeOf(c)) == null ? void 0 : a.constructor) == null ? void 0 : l.name] && (!n.cyclesFix || !r.includes(c))) {
      const g = Ww(c, d, n, n.cyclesFix ? r.concat([c]) : []);
      o.push.apply(o, g.map((w) => (w.path.unshift(p), w)));
    } else c !== d && // treat NaN values as equivalent
    !(Number.isNaN(c) && Number.isNaN(d)) && !(m && (isNaN(c) ? c + "" == d + "" : +c == +d)) && o.push({
      path: [p],
      type: "CHANGE",
      value: d,
      oldValue: c
    });
  }
  const s = Array.isArray(t);
  for (const u in t)
    u in e || o.push({
      type: "CREATE",
      path: [s ? +u : u],
      value: t[u]
    });
  return o;
}
var qg = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = ne(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, Qw = function(e, t) {
  var n = function(o) {
    var i = t.fields[o];
    i && i.ref && "reportValidity" in i.ref ? qg(i.ref, o, e) : i.refs && i.refs.forEach(function(s) {
      return qg(s, o, e);
    });
  };
  for (var r in t.fields) n(r);
}, cR = function(e) {
  return e instanceof Date;
}, dR = function(e) {
  return e == null;
}, fR = function(e) {
  return typeof e == "object";
}, pR = function(e) {
  return !dR(e) && !Array.isArray(e) && fR(e) && !cR(e);
}, hR = function(e) {
  return /^\w*$/.test(e);
}, Kc = function(e, t, n) {
  for (var r = -1, o = hR(t) ? [t] : function(c) {
    return p = c.replace(/["|']|\]/g, "").split(/\.|\[/), Array.isArray(p) ? p.filter(Boolean) : [];
    var p;
  }(t), i = o.length, s = i - 1; ++r < i; ) {
    var a = o[r], l = n;
    if (r !== s) {
      var u = e[a];
      l = pR(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
    }
    e[a] = l, e = e[a];
  }
  return e;
}, mR = function(e, t) {
  t.shouldUseNativeValidation && Qw(e, t);
  var n = {};
  for (var r in e) {
    var o = ne(t.fields, r), i = Object.assign(e[r] || {}, { ref: o && o.ref });
    if (gR(t.names || Object.keys(e), r)) {
      var s = Object.assign({}, ne(n, r));
      Kc(s, "root", i), Kc(n, r, s);
    } else Kc(n, r, i);
  }
  return n;
}, gR = function(e, t) {
  return e.some(function(n) {
    return n.startsWith(t + ".");
  });
}, vR = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], o = r.code, i = r.message, s = r.path.join(".");
    if (!n[s]) if ("unionErrors" in r) {
      var a = r.unionErrors[0].errors[0];
      n[s] = { message: a.message, type: a.code };
    } else n[s] = { message: i, type: o };
    if ("unionErrors" in r && r.unionErrors.forEach(function(c) {
      return c.errors.forEach(function(p) {
        return e.push(p);
      });
    }), t) {
      var l = n[s].types, u = l && l[r.code];
      n[s] = z1(s, t, n, o, u ? [].concat(u, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, yR = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, i) {
    try {
      return Promise.resolve(function(s, a) {
        try {
          var l = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(u) {
            return i.shouldUseNativeValidation && Qw({}, i), { errors: {}, values: n.raw ? r : u };
          });
        } catch (u) {
          return a(u);
        }
        return l && l.then ? l.then(void 0, a) : l;
      }(0, function(s) {
        if (function(a) {
          return Array.isArray(a == null ? void 0 : a.errors);
        }(s)) return { values: {}, errors: mR(vR(s.errors, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
};
function wR({
  data: e,
  saveData: t,
  wrapFormData: n,
  unwrapFormData: r,
  schema: o,
  children: i,
  useFormMode: s
}) {
  const a = E.useRef(null), l = E.useRef(e), u = PE({
    defaultValues: n(e),
    mode: s || "all",
    resolver: o !== void 0 ? yR(o) : void 0
  }), { formState: c, handleSubmit: p, reset: d } = u;
  return E.useEffect(() => {
    Ww(l.current, e).length > 0 && (l.current = e, d(n(e), { keepDirtyValues: !0 }));
  }, [e, l]), E.useEffect(() => {
    const { isDirty: m, isValid: g, isValidating: w, dirtyFields: x } = c;
    a.current && clearTimeout(a.current), m && g && !w && Object.keys(x).length > 0 && (a.current = setTimeout(() => {
      p((v) => {
        const f = r(v);
        l.current = f, d(v, { keepValues: !0 }), t(f);
      })();
    }, 250));
  }, [c, l]), /* @__PURE__ */ k.jsx(vE, { ...u, children: i });
}
var Te;
(function(e) {
  e.assertEqual = (o) => o;
  function t(o) {
  }
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (o) => {
    const i = {};
    for (const s of o)
      i[s] = s;
    return i;
  }, e.getValidEnumValues = (o) => {
    const i = e.objectKeys(o).filter((a) => typeof o[o[a]] != "number"), s = {};
    for (const a of i)
      s[a] = o[a];
    return e.objectValues(s);
  }, e.objectValues = (o) => e.objectKeys(o).map(function(i) {
    return o[i];
  }), e.objectKeys = typeof Object.keys == "function" ? (o) => Object.keys(o) : (o) => {
    const i = [];
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && i.push(s);
    return i;
  }, e.find = (o, i) => {
    for (const s of o)
      if (i(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (o) => Number.isInteger(o) : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  function r(o, i = " | ") {
    return o.map((s) => typeof s == "string" ? `'${s}'` : s).join(i);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (o, i) => typeof i == "bigint" ? i.toString() : i;
})(Te || (Te = {}));
var Gg;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Gg || (Gg = {}));
const se = Te.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Or = (e) => {
  switch (typeof e) {
    case "undefined":
      return se.undefined;
    case "string":
      return se.string;
    case "number":
      return isNaN(e) ? se.nan : se.number;
    case "boolean":
      return se.boolean;
    case "function":
      return se.function;
    case "bigint":
      return se.bigint;
    case "symbol":
      return se.symbol;
    case "object":
      return Array.isArray(e) ? se.array : e === null ? se.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? se.promise : typeof Map < "u" && e instanceof Map ? se.map : typeof Set < "u" && e instanceof Set ? se.set : typeof Date < "u" && e instanceof Date ? se.date : se.object;
    default:
      return se.unknown;
  }
}, X = Te.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class qt extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n = t || function(i) {
      return i.message;
    }, r = { _errors: [] }, o = (i) => {
      for (const s of i.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(o);
        else if (s.code === "invalid_return_type")
          o(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          o(s.argumentsError);
        else if (s.path.length === 0)
          r._errors.push(n(s));
        else {
          let a = r, l = 0;
          for (; l < s.path.length; ) {
            const u = s.path[l];
            l === s.path.length - 1 ? (a[u] = a[u] || { _errors: [] }, a[u]._errors.push(n(s))) : a[u] = a[u] || { _errors: [] }, a = a[u], l++;
          }
        }
    };
    return o(this), r;
  }
  static assert(t) {
    if (!(t instanceof qt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Te.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const o of this.issues)
      o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
qt.create = (e) => new qt(e);
const bs = (e, t) => {
  let n;
  switch (e.code) {
    case X.invalid_type:
      e.received === se.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case X.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Te.jsonStringifyReplacer)}`;
      break;
    case X.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Te.joinValues(e.keys, ", ")}`;
      break;
    case X.invalid_union:
      n = "Invalid input";
      break;
    case X.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Te.joinValues(e.options)}`;
      break;
    case X.invalid_enum_value:
      n = `Invalid enum value. Expected ${Te.joinValues(e.options)}, received '${e.received}'`;
      break;
    case X.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case X.invalid_return_type:
      n = "Invalid function return type";
      break;
    case X.invalid_date:
      n = "Invalid date";
      break;
    case X.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Te.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case X.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case X.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case X.custom:
      n = "Invalid input";
      break;
    case X.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case X.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case X.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Te.assertNever(e);
  }
  return { message: n };
};
let xR = bs;
function Af() {
  return xR;
}
const Pf = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e, i = [...n, ...o.path || []], s = {
    ...o,
    path: i
  };
  if (o.message !== void 0)
    return {
      ...o,
      path: i,
      message: o.message
    };
  let a = "";
  const l = r.filter((u) => !!u).slice().reverse();
  for (const u of l)
    a = u(s, { data: t, defaultError: a }).message;
  return {
    ...o,
    path: i,
    message: a
  };
};
function ie(e, t) {
  const n = Af(), r = Pf({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === bs ? void 0 : bs
      // then global default map
    ].filter((o) => !!o)
  });
  e.common.issues.push(r);
}
class yt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const o of n) {
      if (o.status === "aborted")
        return xe;
      o.status === "dirty" && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n) {
      const i = await o.key, s = await o.value;
      r.push({
        key: i,
        value: s
      });
    }
    return yt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: i, value: s } = o;
      if (i.status === "aborted" || s.status === "aborted")
        return xe;
      i.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), i.value !== "__proto__" && (typeof s.value < "u" || o.alwaysSet) && (r[i.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const xe = Object.freeze({
  status: "aborted"
}), Pi = (e) => ({ status: "dirty", value: e }), Rt = (e) => ({ status: "valid", value: e }), Yg = (e) => e.status === "aborted", Xg = (e) => e.status === "dirty", Ol = (e) => e.status === "valid", jl = (e) => typeof Promise < "u" && e instanceof Promise;
function Ml(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function Kw(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var me;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(me || (me = {}));
var Ii, Oi;
class Cn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Jg = (e, t) => {
  if (Ol(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new qt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Se(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (s, a) => {
    var l, u;
    const { message: c } = e;
    return s.code === "invalid_enum_value" ? { message: c ?? a.defaultError } : typeof a.data > "u" ? { message: (l = c ?? r) !== null && l !== void 0 ? l : a.defaultError } : s.code !== "invalid_type" ? { message: a.defaultError } : { message: (u = c ?? n) !== null && u !== void 0 ? u : a.defaultError };
  }, description: o };
}
class Ce {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Or(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Or(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new yt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Or(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (jl(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const o = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Or(t)
    }, i = this._parseSync({ data: t, path: o.path, parent: o });
    return Jg(o, i);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Or(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), i = await (jl(o) ? o : Promise.resolve(o));
    return Jg(r, i);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, i) => {
      const s = t(o), a = () => i.addIssue({
        code: X.custom,
        ...r(o)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((l) => l ? !0 : (a(), !1)) : s ? !0 : (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new Hn({
      schema: this,
      typeName: we.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Dn.create(this, this._def);
  }
  nullable() {
    return no.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return xn.create(this, this._def);
  }
  promise() {
    return Es.create(this, this._def);
  }
  or(t) {
    return Fl.create([this, t], this._def);
  }
  and(t) {
    return Ll.create(this, t, this._def);
  }
  transform(t) {
    return new Hn({
      ...Se(this._def),
      schema: this,
      typeName: we.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Hl({
      ...Se(this._def),
      innerType: this,
      defaultValue: n,
      typeName: we.ZodDefault
    });
  }
  brand() {
    return new Yw({
      typeName: we.ZodBranded,
      type: this,
      ...Se(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Wl({
      ...Se(this._def),
      innerType: this,
      catchValue: n,
      typeName: we.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return Zu.create(this, t);
  }
  readonly() {
    return Ql.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const SR = /^c[^\s-]{8,}$/i, kR = /^[0-9a-z]+$/, _R = /^[0-9A-HJKMNP-TV-Z]{26}$/, CR = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, bR = /^[a-z0-9_-]{21}$/i, ER = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, TR = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, RR = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Zc;
const AR = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, PR = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, IR = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Zw = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", OR = new RegExp(`^${Zw}$`);
function qw(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function jR(e) {
  return new RegExp(`^${qw(e)}$`);
}
function MR(e) {
  let t = `${Zw}T${qw(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function DR(e, t) {
  return !!((t === "v4" || !t) && AR.test(e) || (t === "v6" || !t) && PR.test(e));
}
class vn extends Ce {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== se.string) {
      const i = this._getOrReturnCtx(t);
      return ie(i, {
        code: X.invalid_type,
        expected: se.string,
        received: i.parsedType
      }), xe;
    }
    const r = new yt();
    let o;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value && (o = this._getOrReturnCtx(t, o), ie(o, {
          code: X.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "max")
        t.data.length > i.value && (o = this._getOrReturnCtx(t, o), ie(o, {
          code: X.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "length") {
        const s = t.data.length > i.value, a = t.data.length < i.value;
        (s || a) && (o = this._getOrReturnCtx(t, o), s ? ie(o, {
          code: X.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : a && ie(o, {
          code: X.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), r.dirty());
      } else if (i.kind === "email")
        TR.test(t.data) || (o = this._getOrReturnCtx(t, o), ie(o, {
          validation: "email",
          code: X.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "emoji")
        Zc || (Zc = new RegExp(RR, "u")), Zc.test(t.data) || (o = this._getOrReturnCtx(t, o), ie(o, {
          validation: "emoji",
          code: X.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "uuid")
        CR.test(t.data) || (o = this._getOrReturnCtx(t, o), ie(o, {
          validation: "uuid",
          code: X.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "nanoid")
        bR.test(t.data) || (o = this._getOrReturnCtx(t, o), ie(o, {
          validation: "nanoid",
          code: X.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid")
        SR.test(t.data) || (o = this._getOrReturnCtx(t, o), ie(o, {
          validation: "cuid",
          code: X.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid2")
        kR.test(t.data) || (o = this._getOrReturnCtx(t, o), ie(o, {
          validation: "cuid2",
          code: X.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "ulid")
        _R.test(t.data) || (o = this._getOrReturnCtx(t, o), ie(o, {
          validation: "ulid",
          code: X.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), ie(o, {
            validation: "url",
            code: X.invalid_string,
            message: i.message
          }), r.dirty();
        }
      else i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), ie(o, {
        validation: "regex",
        code: X.invalid_string,
        message: i.message
      }), r.dirty())) : i.kind === "trim" ? t.data = t.data.trim() : i.kind === "includes" ? t.data.includes(i.value, i.position) || (o = this._getOrReturnCtx(t, o), ie(o, {
        code: X.invalid_string,
        validation: { includes: i.value, position: i.position },
        message: i.message
      }), r.dirty()) : i.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : i.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : i.kind === "startsWith" ? t.data.startsWith(i.value) || (o = this._getOrReturnCtx(t, o), ie(o, {
        code: X.invalid_string,
        validation: { startsWith: i.value },
        message: i.message
      }), r.dirty()) : i.kind === "endsWith" ? t.data.endsWith(i.value) || (o = this._getOrReturnCtx(t, o), ie(o, {
        code: X.invalid_string,
        validation: { endsWith: i.value },
        message: i.message
      }), r.dirty()) : i.kind === "datetime" ? MR(i).test(t.data) || (o = this._getOrReturnCtx(t, o), ie(o, {
        code: X.invalid_string,
        validation: "datetime",
        message: i.message
      }), r.dirty()) : i.kind === "date" ? OR.test(t.data) || (o = this._getOrReturnCtx(t, o), ie(o, {
        code: X.invalid_string,
        validation: "date",
        message: i.message
      }), r.dirty()) : i.kind === "time" ? jR(i).test(t.data) || (o = this._getOrReturnCtx(t, o), ie(o, {
        code: X.invalid_string,
        validation: "time",
        message: i.message
      }), r.dirty()) : i.kind === "duration" ? ER.test(t.data) || (o = this._getOrReturnCtx(t, o), ie(o, {
        validation: "duration",
        code: X.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "ip" ? DR(t.data, i.version) || (o = this._getOrReturnCtx(t, o), ie(o, {
        validation: "ip",
        code: X.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "base64" ? IR.test(t.data) || (o = this._getOrReturnCtx(t, o), ie(o, {
        validation: "base64",
        code: X.invalid_string,
        message: i.message
      }), r.dirty()) : Te.assertNever(i);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: X.invalid_string,
      ...me.errToObj(r)
    });
  }
  _addCheck(t) {
    return new vn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...me.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...me.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...me.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...me.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...me.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...me.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...me.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...me.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...me.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...me.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1,
      ...me.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...me.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...me.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...me.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...me.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...me.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...me.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...me.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...me.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...me.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, me.errToObj(t));
  }
  trim() {
    return new vn({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new vn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new vn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
vn.create = (e) => {
  var t;
  return new vn({
    checks: [],
    typeName: we.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Se(e)
  });
};
function NR(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, i = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return i % s / Math.pow(10, o);
}
class Jr extends Ce {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== se.number) {
      const i = this._getOrReturnCtx(t);
      return ie(i, {
        code: X.invalid_type,
        expected: se.number,
        received: i.parsedType
      }), xe;
    }
    let r;
    const o = new yt();
    for (const i of this._def.checks)
      i.kind === "int" ? Te.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ie(r, {
        code: X.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), o.dirty()) : i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (r = this._getOrReturnCtx(t, r), ie(r, {
        code: X.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), o.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (r = this._getOrReturnCtx(t, r), ie(r, {
        code: X.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), o.dirty()) : i.kind === "multipleOf" ? NR(t.data, i.value) !== 0 && (r = this._getOrReturnCtx(t, r), ie(r, {
        code: X.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), o.dirty()) : i.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ie(r, {
        code: X.not_finite,
        message: i.message
      }), o.dirty()) : Te.assertNever(i);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, me.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, me.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, me.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, me.toString(n));
  }
  setLimit(t, n, r, o) {
    return new Jr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: me.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Jr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: me.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: me.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: me.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: me.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: me.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: me.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: me.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: me.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: me.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Te.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
Jr.create = (e) => new Jr({
  checks: [],
  typeName: we.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Se(e)
});
class eo extends Ce {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== se.bigint) {
      const i = this._getOrReturnCtx(t);
      return ie(i, {
        code: X.invalid_type,
        expected: se.bigint,
        received: i.parsedType
      }), xe;
    }
    let r;
    const o = new yt();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (r = this._getOrReturnCtx(t, r), ie(r, {
        code: X.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), o.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (r = this._getOrReturnCtx(t, r), ie(r, {
        code: X.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), o.dirty()) : i.kind === "multipleOf" ? t.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), ie(r, {
        code: X.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), o.dirty()) : Te.assertNever(i);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, me.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, me.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, me.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, me.toString(n));
  }
  setLimit(t, n, r, o) {
    return new eo({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: me.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new eo({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: me.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: me.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: me.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: me.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: me.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
eo.create = (e) => {
  var t;
  return new eo({
    checks: [],
    typeName: we.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Se(e)
  });
};
class Dl extends Ce {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== se.boolean) {
      const r = this._getOrReturnCtx(t);
      return ie(r, {
        code: X.invalid_type,
        expected: se.boolean,
        received: r.parsedType
      }), xe;
    }
    return Rt(t.data);
  }
}
Dl.create = (e) => new Dl({
  typeName: we.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Se(e)
});
class Jo extends Ce {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== se.date) {
      const i = this._getOrReturnCtx(t);
      return ie(i, {
        code: X.invalid_type,
        expected: se.date,
        received: i.parsedType
      }), xe;
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return ie(i, {
        code: X.invalid_date
      }), xe;
    }
    const r = new yt();
    let o;
    for (const i of this._def.checks)
      i.kind === "min" ? t.data.getTime() < i.value && (o = this._getOrReturnCtx(t, o), ie(o, {
        code: X.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), r.dirty()) : i.kind === "max" ? t.data.getTime() > i.value && (o = this._getOrReturnCtx(t, o), ie(o, {
        code: X.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), r.dirty()) : Te.assertNever(i);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Jo({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: me.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: me.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
Jo.create = (e) => new Jo({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: we.ZodDate,
  ...Se(e)
});
class If extends Ce {
  _parse(t) {
    if (this._getType(t) !== se.symbol) {
      const r = this._getOrReturnCtx(t);
      return ie(r, {
        code: X.invalid_type,
        expected: se.symbol,
        received: r.parsedType
      }), xe;
    }
    return Rt(t.data);
  }
}
If.create = (e) => new If({
  typeName: we.ZodSymbol,
  ...Se(e)
});
class Nl extends Ce {
  _parse(t) {
    if (this._getType(t) !== se.undefined) {
      const r = this._getOrReturnCtx(t);
      return ie(r, {
        code: X.invalid_type,
        expected: se.undefined,
        received: r.parsedType
      }), xe;
    }
    return Rt(t.data);
  }
}
Nl.create = (e) => new Nl({
  typeName: we.ZodUndefined,
  ...Se(e)
});
class $l extends Ce {
  _parse(t) {
    if (this._getType(t) !== se.null) {
      const r = this._getOrReturnCtx(t);
      return ie(r, {
        code: X.invalid_type,
        expected: se.null,
        received: r.parsedType
      }), xe;
    }
    return Rt(t.data);
  }
}
$l.create = (e) => new $l({
  typeName: we.ZodNull,
  ...Se(e)
});
class Of extends Ce {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Rt(t.data);
  }
}
Of.create = (e) => new Of({
  typeName: we.ZodAny,
  ...Se(e)
});
class Fo extends Ce {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Rt(t.data);
  }
}
Fo.create = (e) => new Fo({
  typeName: we.ZodUnknown,
  ...Se(e)
});
class _r extends Ce {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ie(n, {
      code: X.invalid_type,
      expected: se.never,
      received: n.parsedType
    }), xe;
  }
}
_r.create = (e) => new _r({
  typeName: we.ZodNever,
  ...Se(e)
});
class jf extends Ce {
  _parse(t) {
    if (this._getType(t) !== se.undefined) {
      const r = this._getOrReturnCtx(t);
      return ie(r, {
        code: X.invalid_type,
        expected: se.void,
        received: r.parsedType
      }), xe;
    }
    return Rt(t.data);
  }
}
jf.create = (e) => new jf({
  typeName: we.ZodVoid,
  ...Se(e)
});
class xn extends Ce {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== se.array)
      return ie(n, {
        code: X.invalid_type,
        expected: se.array,
        received: n.parsedType
      }), xe;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, a = n.data.length < o.exactLength.value;
      (s || a) && (ie(n, {
        code: s ? X.too_big : X.too_small,
        minimum: a ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (ie(n, {
      code: X.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (ie(n, {
      code: X.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, a) => o.type._parseAsync(new Cn(n, s, n.path, a)))).then((s) => yt.mergeArray(r, s));
    const i = [...n.data].map((s, a) => o.type._parseSync(new Cn(n, s, n.path, a)));
    return yt.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new xn({
      ...this._def,
      minLength: { value: t, message: me.toString(n) }
    });
  }
  max(t, n) {
    return new xn({
      ...this._def,
      maxLength: { value: t, message: me.toString(n) }
    });
  }
  length(t, n) {
    return new xn({
      ...this._def,
      exactLength: { value: t, message: me.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
xn.create = (e, t) => new xn({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: we.ZodArray,
  ...Se(t)
});
function fo(e) {
  if (e instanceof He) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Dn.create(fo(r));
    }
    return new He({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof xn ? new xn({
    ...e._def,
    type: fo(e.element)
  }) : e instanceof Dn ? Dn.create(fo(e.unwrap())) : e instanceof no ? no.create(fo(e.unwrap())) : e instanceof Un ? Un.create(e.items.map((t) => fo(t))) : e;
}
class He extends Ce {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Te.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== se.object) {
      const u = this._getOrReturnCtx(t);
      return ie(u, {
        code: X.invalid_type,
        expected: se.object,
        received: u.parsedType
      }), xe;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: i, keys: s } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof _r && this._def.unknownKeys === "strip"))
      for (const u in o.data)
        s.includes(u) || a.push(u);
    const l = [];
    for (const u of s) {
      const c = i[u], p = o.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: c._parse(new Cn(o, p, o.path, u)),
        alwaysSet: u in o.data
      });
    }
    if (this._def.catchall instanceof _r) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const c of a)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: o.data[c] }
          });
      else if (u === "strict")
        a.length > 0 && (ie(o, {
          code: X.unrecognized_keys,
          keys: a
        }), r.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const c of a) {
        const p = o.data[c];
        l.push({
          key: { status: "valid", value: c },
          value: u._parse(
            new Cn(o, p, o.path, c)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: c in o.data
        });
      }
    }
    return o.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const c of l) {
        const p = await c.key, d = await c.value;
        u.push({
          key: p,
          value: d,
          alwaysSet: c.alwaysSet
        });
      }
      return u;
    }).then((u) => yt.mergeObjectSync(r, u)) : yt.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return me.errToObj, new He({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, i, s, a;
          const l = (s = (i = (o = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(o, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (a = me.errToObj(t).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new He({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new He({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new He({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new He({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: we.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new He({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return Te.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new He({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Te.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new He({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return fo(this);
  }
  partial(t) {
    const n = {};
    return Te.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new He({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Te.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let i = this.shape[r];
        for (; i instanceof Dn; )
          i = i._def.innerType;
        n[r] = i;
      }
    }), new He({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Gw(Te.objectKeys(this.shape));
  }
}
He.create = (e, t) => new He({
  shape: () => e,
  unknownKeys: "strip",
  catchall: _r.create(),
  typeName: we.ZodObject,
  ...Se(t)
});
He.strictCreate = (e, t) => new He({
  shape: () => e,
  unknownKeys: "strict",
  catchall: _r.create(),
  typeName: we.ZodObject,
  ...Se(t)
});
He.lazycreate = (e, t) => new He({
  shape: e,
  unknownKeys: "strip",
  catchall: _r.create(),
  typeName: we.ZodObject,
  ...Se(t)
});
class Fl extends Ce {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const s = i.map((a) => new qt(a.ctx.common.issues));
      return ie(n, {
        code: X.invalid_union,
        unionErrors: s
      }), xe;
    }
    if (n.common.async)
      return Promise.all(r.map(async (i) => {
        const s = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: n.data,
            path: n.path,
            parent: s
          }),
          ctx: s
        };
      })).then(o);
    {
      let i;
      const s = [];
      for (const l of r) {
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, c = l._parseSync({
          data: n.data,
          path: n.path,
          parent: u
        });
        if (c.status === "valid")
          return c;
        c.status === "dirty" && !i && (i = { result: c, ctx: u }), u.common.issues.length && s.push(u.common.issues);
      }
      if (i)
        return n.common.issues.push(...i.ctx.common.issues), i.result;
      const a = s.map((l) => new qt(l));
      return ie(n, {
        code: X.invalid_union,
        unionErrors: a
      }), xe;
    }
  }
  get options() {
    return this._def.options;
  }
}
Fl.create = (e, t) => new Fl({
  options: e,
  typeName: we.ZodUnion,
  ...Se(t)
});
const Tn = (e) => e instanceof Bl ? Tn(e.schema) : e instanceof Hn ? Tn(e.innerType()) : e instanceof Vl ? [e.value] : e instanceof to ? e.options : e instanceof Ul ? Te.objectValues(e.enum) : e instanceof Hl ? Tn(e._def.innerType) : e instanceof Nl ? [void 0] : e instanceof $l ? [null] : e instanceof Dn ? [void 0, ...Tn(e.unwrap())] : e instanceof no ? [null, ...Tn(e.unwrap())] : e instanceof Yw || e instanceof Ql ? Tn(e.unwrap()) : e instanceof Wl ? Tn(e._def.innerType) : [];
class kh extends Ce {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== se.object)
      return ie(n, {
        code: X.invalid_type,
        expected: se.object,
        received: n.parsedType
      }), xe;
    const r = this.discriminator, o = n.data[r], i = this.optionsMap.get(o);
    return i ? n.common.async ? i._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : i._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (ie(n, {
      code: X.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), xe);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, r) {
    const o = /* @__PURE__ */ new Map();
    for (const i of n) {
      const s = Tn(i.shape[t]);
      if (!s.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const a of s) {
        if (o.has(a))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
        o.set(a, i);
      }
    }
    return new kh({
      typeName: we.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Se(r)
    });
  }
}
function Mf(e, t) {
  const n = Or(e), r = Or(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === se.object && r === se.object) {
    const o = Te.objectKeys(t), i = Te.objectKeys(e).filter((a) => o.indexOf(a) !== -1), s = { ...e, ...t };
    for (const a of i) {
      const l = Mf(e[a], t[a]);
      if (!l.valid)
        return { valid: !1 };
      s[a] = l.data;
    }
    return { valid: !0, data: s };
  } else if (n === se.array && r === se.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let i = 0; i < e.length; i++) {
      const s = e[i], a = t[i], l = Mf(s, a);
      if (!l.valid)
        return { valid: !1 };
      o.push(l.data);
    }
    return { valid: !0, data: o };
  } else return n === se.date && r === se.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Ll extends Ce {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (i, s) => {
      if (Yg(i) || Yg(s))
        return xe;
      const a = Mf(i.value, s.value);
      return a.valid ? ((Xg(i) || Xg(s)) && n.dirty(), { status: n.value, value: a.data }) : (ie(r, {
        code: X.invalid_intersection_types
      }), xe);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([i, s]) => o(i, s)) : o(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
Ll.create = (e, t, n) => new Ll({
  left: e,
  right: t,
  typeName: we.ZodIntersection,
  ...Se(n)
});
class Un extends Ce {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== se.array)
      return ie(r, {
        code: X.invalid_type,
        expected: se.array,
        received: r.parsedType
      }), xe;
    if (r.data.length < this._def.items.length)
      return ie(r, {
        code: X.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), xe;
    !this._def.rest && r.data.length > this._def.items.length && (ie(r, {
      code: X.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const i = [...r.data].map((s, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new Cn(r, s, r.path, a)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(i).then((s) => yt.mergeArray(n, s)) : yt.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Un({
      ...this._def,
      rest: t
    });
  }
}
Un.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Un({
    items: e,
    typeName: we.ZodTuple,
    rest: null,
    ...Se(t)
  });
};
class zl extends Ce {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== se.object)
      return ie(r, {
        code: X.invalid_type,
        expected: se.object,
        received: r.parsedType
      }), xe;
    const o = [], i = this._def.keyType, s = this._def.valueType;
    for (const a in r.data)
      o.push({
        key: i._parse(new Cn(r, a, r.path, a)),
        value: s._parse(new Cn(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data
      });
    return r.common.async ? yt.mergeObjectAsync(n, o) : yt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof Ce ? new zl({
      keyType: t,
      valueType: n,
      typeName: we.ZodRecord,
      ...Se(r)
    }) : new zl({
      keyType: vn.create(),
      valueType: t,
      typeName: we.ZodRecord,
      ...Se(n)
    });
  }
}
class Df extends Ce {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== se.map)
      return ie(r, {
        code: X.invalid_type,
        expected: se.map,
        received: r.parsedType
      }), xe;
    const o = this._def.keyType, i = this._def.valueType, s = [...r.data.entries()].map(([a, l], u) => ({
      key: o._parse(new Cn(r, a, r.path, [u, "key"])),
      value: i._parse(new Cn(r, l, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of s) {
          const u = await l.key, c = await l.value;
          if (u.status === "aborted" || c.status === "aborted")
            return xe;
          (u.status === "dirty" || c.status === "dirty") && n.dirty(), a.set(u.value, c.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of s) {
        const u = l.key, c = l.value;
        if (u.status === "aborted" || c.status === "aborted")
          return xe;
        (u.status === "dirty" || c.status === "dirty") && n.dirty(), a.set(u.value, c.value);
      }
      return { status: n.value, value: a };
    }
  }
}
Df.create = (e, t, n) => new Df({
  valueType: t,
  keyType: e,
  typeName: we.ZodMap,
  ...Se(n)
});
class ei extends Ce {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== se.set)
      return ie(r, {
        code: X.invalid_type,
        expected: se.set,
        received: r.parsedType
      }), xe;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (ie(r, {
      code: X.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (ie(r, {
      code: X.too_big,
      maximum: o.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.maxSize.message
    }), n.dirty());
    const i = this._def.valueType;
    function s(l) {
      const u = /* @__PURE__ */ new Set();
      for (const c of l) {
        if (c.status === "aborted")
          return xe;
        c.status === "dirty" && n.dirty(), u.add(c.value);
      }
      return { status: n.value, value: u };
    }
    const a = [...r.data.values()].map((l, u) => i._parse(new Cn(r, l, r.path, u)));
    return r.common.async ? Promise.all(a).then((l) => s(l)) : s(a);
  }
  min(t, n) {
    return new ei({
      ...this._def,
      minSize: { value: t, message: me.toString(n) }
    });
  }
  max(t, n) {
    return new ei({
      ...this._def,
      maxSize: { value: t, message: me.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
ei.create = (e, t) => new ei({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: we.ZodSet,
  ...Se(t)
});
class Xi extends Ce {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== se.function)
      return ie(n, {
        code: X.invalid_type,
        expected: se.function,
        received: n.parsedType
      }), xe;
    function r(a, l) {
      return Pf({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Af(),
          bs
        ].filter((u) => !!u),
        issueData: {
          code: X.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function o(a, l) {
      return Pf({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Af(),
          bs
        ].filter((u) => !!u),
        issueData: {
          code: X.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const i = { errorMap: n.common.contextualErrorMap }, s = n.data;
    if (this._def.returns instanceof Es) {
      const a = this;
      return Rt(async function(...l) {
        const u = new qt([]), c = await a._def.args.parseAsync(l, i).catch((m) => {
          throw u.addIssue(r(l, m)), u;
        }), p = await Reflect.apply(s, this, c);
        return await a._def.returns._def.type.parseAsync(p, i).catch((m) => {
          throw u.addIssue(o(p, m)), u;
        });
      });
    } else {
      const a = this;
      return Rt(function(...l) {
        const u = a._def.args.safeParse(l, i);
        if (!u.success)
          throw new qt([r(l, u.error)]);
        const c = Reflect.apply(s, this, u.data), p = a._def.returns.safeParse(c, i);
        if (!p.success)
          throw new qt([o(c, p.error)]);
        return p.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Xi({
      ...this._def,
      args: Un.create(t).rest(Fo.create())
    });
  }
  returns(t) {
    return new Xi({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new Xi({
      args: t || Un.create([]).rest(Fo.create()),
      returns: n || Fo.create(),
      typeName: we.ZodFunction,
      ...Se(r)
    });
  }
}
class Bl extends Ce {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Bl.create = (e, t) => new Bl({
  getter: e,
  typeName: we.ZodLazy,
  ...Se(t)
});
class Vl extends Ce {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ie(n, {
        received: n.data,
        code: X.invalid_literal,
        expected: this._def.value
      }), xe;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Vl.create = (e, t) => new Vl({
  value: e,
  typeName: we.ZodLiteral,
  ...Se(t)
});
function Gw(e, t) {
  return new to({
    values: e,
    typeName: we.ZodEnum,
    ...Se(t)
  });
}
class to extends Ce {
  constructor() {
    super(...arguments), Ii.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ie(n, {
        expected: Te.joinValues(r),
        received: n.parsedType,
        code: X.invalid_type
      }), xe;
    }
    if (Ml(this, Ii) || Kw(this, Ii, new Set(this._def.values)), !Ml(this, Ii).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ie(n, {
        received: n.data,
        code: X.invalid_enum_value,
        options: r
      }), xe;
    }
    return Rt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return to.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return to.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Ii = /* @__PURE__ */ new WeakMap();
to.create = Gw;
class Ul extends Ce {
  constructor() {
    super(...arguments), Oi.set(this, void 0);
  }
  _parse(t) {
    const n = Te.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== se.string && r.parsedType !== se.number) {
      const o = Te.objectValues(n);
      return ie(r, {
        expected: Te.joinValues(o),
        received: r.parsedType,
        code: X.invalid_type
      }), xe;
    }
    if (Ml(this, Oi) || Kw(this, Oi, new Set(Te.getValidEnumValues(this._def.values))), !Ml(this, Oi).has(t.data)) {
      const o = Te.objectValues(n);
      return ie(r, {
        received: r.data,
        code: X.invalid_enum_value,
        options: o
      }), xe;
    }
    return Rt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Oi = /* @__PURE__ */ new WeakMap();
Ul.create = (e, t) => new Ul({
  values: e,
  typeName: we.ZodNativeEnum,
  ...Se(t)
});
class Es extends Ce {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== se.promise && n.common.async === !1)
      return ie(n, {
        code: X.invalid_type,
        expected: se.promise,
        received: n.parsedType
      }), xe;
    const r = n.parsedType === se.promise ? n.data : Promise.resolve(n.data);
    return Rt(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Es.create = (e, t) => new Es({
  type: e,
  typeName: we.ZodPromise,
  ...Se(t)
});
class Hn extends Ce {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === we.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null, i = {
      addIssue: (s) => {
        ie(r, s), s.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), o.type === "preprocess") {
      const s = o.transform(r.data, i);
      if (r.common.async)
        return Promise.resolve(s).then(async (a) => {
          if (n.value === "aborted")
            return xe;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? xe : l.status === "dirty" || n.value === "dirty" ? Pi(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return xe;
        const a = this._def.schema._parseSync({
          data: s,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? xe : a.status === "dirty" || n.value === "dirty" ? Pi(a.value) : a;
      }
    }
    if (o.type === "refinement") {
      const s = (a) => {
        const l = o.refinement(a, i);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? xe : (a.status === "dirty" && n.dirty(), s(a.value), { status: n.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => a.status === "aborted" ? xe : (a.status === "dirty" && n.dirty(), s(a.value).then(() => ({ status: n.value, value: a.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Ol(s))
          return s;
        const a = o.transform(s.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => Ol(s) ? Promise.resolve(o.transform(s.value, i)).then((a) => ({ status: n.value, value: a })) : s);
    Te.assertNever(o);
  }
}
Hn.create = (e, t, n) => new Hn({
  schema: e,
  typeName: we.ZodEffects,
  effect: t,
  ...Se(n)
});
Hn.createWithPreprocess = (e, t, n) => new Hn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: we.ZodEffects,
  ...Se(n)
});
class Dn extends Ce {
  _parse(t) {
    return this._getType(t) === se.undefined ? Rt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Dn.create = (e, t) => new Dn({
  innerType: e,
  typeName: we.ZodOptional,
  ...Se(t)
});
class no extends Ce {
  _parse(t) {
    return this._getType(t) === se.null ? Rt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
no.create = (e, t) => new no({
  innerType: e,
  typeName: we.ZodNullable,
  ...Se(t)
});
class Hl extends Ce {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === se.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Hl.create = (e, t) => new Hl({
  innerType: e,
  typeName: we.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Se(t)
});
class Wl extends Ce {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, o = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return jl(o) ? o.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new qt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new qt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Wl.create = (e, t) => new Wl({
  innerType: e,
  typeName: we.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Se(t)
});
class Nf extends Ce {
  _parse(t) {
    if (this._getType(t) !== se.nan) {
      const r = this._getOrReturnCtx(t);
      return ie(r, {
        code: X.invalid_type,
        expected: se.nan,
        received: r.parsedType
      }), xe;
    }
    return { status: "valid", value: t.data };
  }
}
Nf.create = (e) => new Nf({
  typeName: we.ZodNaN,
  ...Se(e)
});
class Yw extends Ce {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Zu extends Ce {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? xe : i.status === "dirty" ? (n.dirty(), Pi(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const o = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return o.status === "aborted" ? xe : o.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: o.value
      }) : this._def.out._parseSync({
        data: o.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new Zu({
      in: t,
      out: n,
      typeName: we.ZodPipeline
    });
  }
}
class Ql extends Ce {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (o) => (Ol(o) && (o.value = Object.freeze(o.value)), o);
    return jl(n) ? n.then((o) => r(o)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ql.create = (e, t) => new Ql({
  innerType: e,
  typeName: we.ZodReadonly,
  ...Se(t)
});
He.lazycreate;
var we;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(we || (we = {}));
const Nn = vn.create;
Jr.create;
Nf.create;
eo.create;
Dl.create;
Jo.create;
If.create;
Nl.create;
$l.create;
Of.create;
const _h = Fo.create;
_r.create;
jf.create;
const $R = xn.create, Cr = He.create;
He.strictCreate;
const FR = Fl.create;
kh.create;
const LR = Ll.create;
Un.create;
zl.create;
Df.create;
ei.create;
Xi.create;
Bl.create;
const Xw = Vl.create, Ch = to.create;
Ul.create;
Es.create;
Hn.create;
Dn.create;
no.create;
Hn.createWithPreprocess;
Zu.create;
const zR = {
  string: (e) => vn.create({ ...e, coerce: !0 }),
  number: (e) => Jr.create({ ...e, coerce: !0 }),
  boolean: (e) => Dl.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => eo.create({ ...e, coerce: !0 }),
  date: (e) => Jo.create({ ...e, coerce: !0 })
};
function It({
  label: e,
  name: t,
  disabled: n,
  password: r
}) {
  const {
    field: o,
    fieldState: { error: i, invalid: s }
  } = ai({
    name: t
  });
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsxs(BR, { invalid: s, children: [
      /* @__PURE__ */ k.jsx("div", { children: e }),
      /* @__PURE__ */ k.jsx("input", { ...o, disabled: n, type: r ? "password" : "text" })
    ] }),
    i && /* @__PURE__ */ k.jsx(VR, { children: i == null ? void 0 : i.message })
  ] });
}
const BR = ae.div`
  height: 40px;
  background-color: var(${q.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: e }) => e ? `border: 1px solid var(${q.errorBorder});` : `border: 1px solid var(${q.border});
         &:focus-within {
           border: 1px solid var(${q.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${q.inputPlaceholderForeground});
  }
  > input {
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${q.foreground});
    &::placeholder {
      color: var(${q.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, VR = ae.div`
  color: var(${q.errorForeground});
`;
function UR({
  label: e,
  disabled: t,
  waiting: n,
  onClick: r,
  className: o
}) {
  const [i, s] = E.useState(n);
  return E.useEffect(() => {
    let a;
    return n ? s(!0) : a = setTimeout(() => {
      s(!1);
    }, 300), () => {
      clearTimeout(a);
    };
  }, [n]), /* @__PURE__ */ k.jsxs(
    WR,
    {
      className: o,
      onClick: r,
      disabled: t || i,
      waiting: i,
      children: [
        /* @__PURE__ */ k.jsx("span", { children: e }),
        /* @__PURE__ */ k.jsx(BE, {})
      ]
    }
  );
}
const HR = dE`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, WR = ae.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  background-color: var(${q.buttonBackground});
  color: var(${q.buttonForeground});
  border: 1px solid var(${q.buttonBorder});
  ${({ waiting: e }) => e && "gap: 8px;"}
  > span {
    flex: 1;
  }
  > svg {
    fill: var(${q.buttonForeground});
    animation: ${HR} 2s infinite linear;
    transition: width 0.2s linear;
    ${({ waiting: e }) => !e && "width: 0;"}
  }
  &:disabled {
    opacity: .4;
  }
`, QR = ae(UR)`
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${q.focusBorder});
  }
`;
function Ji({
  label: e,
  waiting: t,
  onClick: n
}) {
  const {
    formState: { isValid: r }
  } = si();
  return /* @__PURE__ */ k.jsx(QR, { disabled: !r, label: e, waiting: t, onClick: n });
}
function Lo({ message: e }) {
  return /* @__PURE__ */ k.jsx(Jw, { children: /* @__PURE__ */ k.jsxs("div", { children: [
    /* @__PURE__ */ k.jsx("div", { children: /* @__PURE__ */ k.jsx(NE, {}) }),
    /* @__PURE__ */ k.jsx("span", { children: e })
  ] }) });
}
function qu({ message: e, children: t }) {
  return /* @__PURE__ */ k.jsxs(KR, { children: [
    /* @__PURE__ */ k.jsxs("div", { children: [
      /* @__PURE__ */ k.jsx("div", { children: /* @__PURE__ */ k.jsx(Z1, {}) }),
      /* @__PURE__ */ k.jsx("span", { children: e })
    ] }),
    t && /* @__PURE__ */ k.jsx("div", { children: t })
  ] });
}
const Jw = ae.div`
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
      fill: var(${q.foreground});
    }
  }
  border: 1px solid var(${q.border});
  border-radius: 2px;
  color: var(${q.foreground});
  padding: 8px;
  gap: 8px;
`, KR = ae(Jw)`
  border: 1px solid var(${q.errorBorder});
  background-color: var(${q.errorBackground});
  color: var(${q.errorForeground});
  > div:first-child {
    > div {
      display: flex;
      align-items: center;
    }
    > div > svg {
      fill: var(${q.errorForeground});
    }
  }
`;
function bh({ result: e }) {
  return e !== void 0 ? e.success ? /* @__PURE__ */ k.jsx(Lo, { message: "Successfully connected" }) : /* @__PURE__ */ k.jsx(qu, { message: "Failed to connect", children: e.message }) : null;
}
const Ks = ae.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, es = ae.div`
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  > button {
    height: 35px;
    align-self: flex-start;
  }
  > div:last-child {
    flex: 1;
  }
`, Zs = ae.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
function ZR(e) {
  const t = e + "CollectionProvider", [n, r] = io(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (m) => {
    const { scope: g, children: w } = m, x = ue.useRef(null), v = ue.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ k.jsx(o, { scope: g, itemMap: v, collectionRef: x, children: w });
  };
  s.displayName = t;
  const a = e + "CollectionSlot", l = ue.forwardRef(
    (m, g) => {
      const { scope: w, children: x } = m, v = i(a, w), f = zt(g, v.collectionRef);
      return /* @__PURE__ */ k.jsx(Tl, { ref: f, children: x });
    }
  );
  l.displayName = a;
  const u = e + "CollectionItemSlot", c = "data-radix-collection-item", p = ue.forwardRef(
    (m, g) => {
      const { scope: w, children: x, ...v } = m, f = ue.useRef(null), h = zt(g, f), y = i(u, w);
      return ue.useEffect(() => (y.itemMap.set(f, { ref: f, ...v }), () => void y.itemMap.delete(f))), /* @__PURE__ */ k.jsx(Tl, { [c]: "", ref: h, children: x });
    }
  );
  p.displayName = u;
  function d(m) {
    const g = i(e + "CollectionConsumer", m);
    return ue.useCallback(() => {
      const x = g.collectionRef.current;
      if (!x) return [];
      const v = Array.from(x.querySelectorAll(`[${c}]`));
      return Array.from(g.itemMap.values()).sort(
        (y, S) => v.indexOf(y.ref.current) - v.indexOf(S.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: l, ItemSlot: p },
    d,
    r
  ];
}
var qR = E.createContext(void 0);
function ex(e) {
  const t = E.useContext(qR);
  return e || t || "ltr";
}
var qc = "rovingFocusGroup.onEntryFocus", GR = { bubbles: !1, cancelable: !0 }, Gu = "RovingFocusGroup", [$f, tx, YR] = ZR(Gu), [XR, nx] = io(
  Gu,
  [YR]
), [JR, eA] = XR(Gu), rx = E.forwardRef(
  (e, t) => /* @__PURE__ */ k.jsx($f.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ k.jsx($f.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ k.jsx(tA, { ...e, ref: t }) }) })
);
rx.displayName = Gu;
var tA = E.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: s,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: c = !1,
    ...p
  } = e, d = E.useRef(null), m = zt(t, d), g = ex(i), [w = null, x] = Uu({
    prop: s,
    defaultProp: a,
    onChange: l
  }), [v, f] = E.useState(!1), h = so(u), y = tx(n), S = E.useRef(!1), [_, C] = E.useState(0);
  return E.useEffect(() => {
    const T = d.current;
    if (T)
      return T.addEventListener(qc, h), () => T.removeEventListener(qc, h);
  }, [h]), /* @__PURE__ */ k.jsx(
    JR,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: w,
      onItemFocus: E.useCallback(
        (T) => x(T),
        [x]
      ),
      onItemShiftTab: E.useCallback(() => f(!0), []),
      onFocusableItemAdd: E.useCallback(
        () => C((T) => T + 1),
        []
      ),
      onFocusableItemRemove: E.useCallback(
        () => C((T) => T - 1),
        []
      ),
      children: /* @__PURE__ */ k.jsx(
        St.div,
        {
          tabIndex: v || _ === 0 ? -1 : 0,
          "data-orientation": r,
          ...p,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: Ke(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: Ke(e.onFocus, (T) => {
            const M = !S.current;
            if (T.target === T.currentTarget && M && !v) {
              const j = new CustomEvent(qc, GR);
              if (T.currentTarget.dispatchEvent(j), !j.defaultPrevented) {
                const U = y().filter((te) => te.focusable), B = U.find((te) => te.active), L = U.find((te) => te.id === w), J = [B, L, ...U].filter(
                  Boolean
                ).map((te) => te.ref.current);
                sx(J, c);
              }
            }
            S.current = !1;
          }),
          onBlur: Ke(e.onBlur, () => f(!1))
        }
      )
    }
  );
}), ox = "RovingFocusGroupItem", ix = E.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      ...s
    } = e, a = ew(), l = i || a, u = eA(ox, n), c = u.currentTabStopId === l, p = tx(n), { onFocusableItemAdd: d, onFocusableItemRemove: m } = u;
    return E.useEffect(() => {
      if (r)
        return d(), () => m();
    }, [r, d, m]), /* @__PURE__ */ k.jsx(
      $f.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ k.jsx(
          St.span,
          {
            tabIndex: c ? 0 : -1,
            "data-orientation": u.orientation,
            ...s,
            ref: t,
            onMouseDown: Ke(e.onMouseDown, (g) => {
              r ? u.onItemFocus(l) : g.preventDefault();
            }),
            onFocus: Ke(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: Ke(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const w = oA(g, u.orientation, u.dir);
              if (w !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let v = p().filter((f) => f.focusable).map((f) => f.ref.current);
                if (w === "last") v.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && v.reverse();
                  const f = v.indexOf(g.currentTarget);
                  v = u.loop ? iA(v, f + 1) : v.slice(f + 1);
                }
                setTimeout(() => sx(v));
              }
            })
          }
        )
      }
    );
  }
);
ix.displayName = ox;
var nA = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function rA(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function oA(e, t, n) {
  const r = rA(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return nA[r];
}
function sx(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function iA(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var sA = rx, aA = ix;
function ax(e) {
  const t = E.useRef({ value: e, previous: e });
  return E.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Eh = "Radio", [lA, lx] = io(Eh), [uA, cA] = lA(Eh), ux = E.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: i,
      disabled: s,
      value: a = "on",
      onCheck: l,
      ...u
    } = e, [c, p] = E.useState(null), d = zt(t, (w) => p(w)), m = E.useRef(!1), g = c ? !!c.closest("form") : !0;
    return /* @__PURE__ */ k.jsxs(uA, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ k.jsx(
        St.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": fx(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: a,
          ...u,
          ref: d,
          onClick: Ke(e.onClick, (w) => {
            o || l == null || l(), g && (m.current = w.isPropagationStopped(), m.current || w.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ k.jsx(
        dA,
        {
          control: c,
          bubbles: !m.current,
          name: r,
          value: a,
          checked: o,
          required: i,
          disabled: s,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ux.displayName = Eh;
var cx = "RadioIndicator", dx = E.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, i = cA(cx, n);
    return /* @__PURE__ */ k.jsx(Hs, { present: r || i.checked, children: /* @__PURE__ */ k.jsx(
      St.span,
      {
        "data-state": fx(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
dx.displayName = cx;
var dA = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, i = E.useRef(null), s = ax(n), a = vh(t);
  return E.useEffect(() => {
    const l = i.current, u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (s !== n && p) {
      const d = new Event("click", { bubbles: r });
      p.call(l, n), l.dispatchEvent(d);
    }
  }, [s, n, r]), /* @__PURE__ */ k.jsx(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: i,
      style: {
        ...e.style,
        ...a,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function fx(e) {
  return e ? "checked" : "unchecked";
}
var fA = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Th = "RadioGroup", [pA, TO] = io(Th, [
  nx,
  lx
]), px = nx(), hx = lx(), [hA, mA] = pA(Th), mx = E.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: i,
      required: s = !1,
      disabled: a = !1,
      orientation: l,
      dir: u,
      loop: c = !0,
      onValueChange: p,
      ...d
    } = e, m = px(n), g = ex(u), [w, x] = Uu({
      prop: i,
      defaultProp: o,
      onChange: p
    });
    return /* @__PURE__ */ k.jsx(
      hA,
      {
        scope: n,
        name: r,
        required: s,
        disabled: a,
        value: w,
        onValueChange: x,
        children: /* @__PURE__ */ k.jsx(
          sA,
          {
            asChild: !0,
            ...m,
            orientation: l,
            dir: g,
            loop: c,
            children: /* @__PURE__ */ k.jsx(
              St.div,
              {
                role: "radiogroup",
                "aria-required": s,
                "aria-orientation": l,
                "data-disabled": a ? "" : void 0,
                dir: g,
                ...d,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
mx.displayName = Th;
var gx = "RadioGroupItem", vx = E.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, i = mA(gx, n), s = i.disabled || r, a = px(n), l = hx(n), u = E.useRef(null), c = zt(t, u), p = i.value === o.value, d = E.useRef(!1);
    return E.useEffect(() => {
      const m = (w) => {
        fA.includes(w.key) && (d.current = !0);
      }, g = () => d.current = !1;
      return document.addEventListener("keydown", m), document.addEventListener("keyup", g), () => {
        document.removeEventListener("keydown", m), document.removeEventListener("keyup", g);
      };
    }, []), /* @__PURE__ */ k.jsx(
      aA,
      {
        asChild: !0,
        ...a,
        focusable: !s,
        active: p,
        children: /* @__PURE__ */ k.jsx(
          ux,
          {
            disabled: s,
            required: i.required,
            checked: p,
            ...l,
            ...o,
            name: i.name,
            ref: c,
            onCheck: () => i.onValueChange(o.value),
            onKeyDown: Ke((m) => {
              m.key === "Enter" && m.preventDefault();
            }),
            onFocus: Ke(o.onFocus, () => {
              var m;
              d.current && ((m = u.current) == null || m.click());
            })
          }
        )
      }
    );
  }
);
vx.displayName = gx;
var gA = "RadioGroupIndicator", yx = E.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = hx(n);
    return /* @__PURE__ */ k.jsx(dx, { ...o, ...r, ref: t });
  }
);
yx.displayName = gA;
var vA = mx, yA = vx, wA = yx;
function xA({ name: e, options: t }) {
  const n = E.useId(), { field: r } = ai({
    name: e
  });
  return /* @__PURE__ */ k.jsx(SA, { value: r.value, onValueChange: (o) => r.onChange(o), children: t.map((o, i) => /* @__PURE__ */ k.jsxs(kA, { children: [
    /* @__PURE__ */ k.jsx(_A, { value: o.value, id: `${n}-${i}`, children: /* @__PURE__ */ k.jsx(CA, { children: /* @__PURE__ */ k.jsx(FE, {}) }) }),
    /* @__PURE__ */ k.jsx("label", { htmlFor: `${n}-${i}`, children: o.label })
  ] }, i)) });
}
const SA = ae(vA)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, kA = ae.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, _A = ae(yA)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(${q.checkboxBackground});
  border-color: var(${q.checkboxBorder});
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`, CA = ae(wA)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${q.checkboxForeground});
  }
`;
function bA({
  icon: e,
  children: t
}) {
  return /* @__PURE__ */ k.jsx(Pw, { children: /* @__PURE__ */ k.jsxs(Iw, { children: [
    /* @__PURE__ */ k.jsx(Ow, { asChild: !0, children: /* @__PURE__ */ k.jsx(EA, { children: e === "exclamation" ? /* @__PURE__ */ k.jsx(DE, {}) : /* @__PURE__ */ k.jsx($E, {}) }) }),
    /* @__PURE__ */ k.jsx(jw, { children: /* @__PURE__ */ k.jsx(TA, { children: t }) })
  ] }) });
}
const EA = ae.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  & > svg {
    fill: var(${q.foreground});
  }
`, TA = ae(Mw)`
  color: var(${q.notificationsForeground});
  background-color: var(${q.notificationsBackground});
  border: 1px solid var(${q.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
  max-width: 500px;
  box-shadow: 0 10px 38px var(${q.computedTwo});
`;
function wx({
  label: e,
  name: t,
  disabled: n,
  description: r
}) {
  const {
    field: o,
    fieldState: { error: i, invalid: s }
  } = ai({
    name: t
  });
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsxs(RA, { invalid: s, children: [
      /* @__PURE__ */ k.jsxs(AA, { children: [
        /* @__PURE__ */ k.jsxs("div", { children: [
          /* @__PURE__ */ k.jsx("span", { children: e }),
          " ",
          n && /* @__PURE__ */ k.jsx("span", { children: "(read only)" })
        ] }),
        r && /* @__PURE__ */ k.jsx(bA, { children: r })
      ] }),
      /* @__PURE__ */ k.jsx("textarea", { ...o, disabled: n })
    ] }),
    i && /* @__PURE__ */ k.jsx(PA, { children: i == null ? void 0 : i.message })
  ] });
}
const RA = ae.div`
  height: 240px;
  background-color: var(${q.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: e }) => e ? `border: 1px solid var(${q.errorBorder});` : `border: 1px solid var(${q.border});
         &:focus-within {
           border: 1px solid var(${q.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${q.inputPlaceholderForeground});
  }
  > textarea {
    flex: 1;
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${q.foreground});
    &::placeholder {
      color: var(${q.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, AA = ae.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${q.inputPlaceholderForeground});
`, PA = ae.div`
  color: var(${q.errorForeground});
`;
var xx = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(xx || {});
function IA(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var ev = vr;
function Sx(e, t) {
  if (e === t || !(ev(e) && ev(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const n = Object.keys(t), r = Object.keys(e);
  let o = n.length === r.length;
  const i = Array.isArray(t) ? [] : {};
  for (const s of n)
    i[s] = Sx(e[s], t[s]), o && (o = e[s] === i[s]);
  return o ? e : i;
}
function zo(e) {
  let t = 0;
  for (const n in e)
    t++;
  return t;
}
var tv = (e) => [].concat(...e);
function OA() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function nv(e) {
  return e != null;
}
function jA() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var rv = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, Yu = /* @__PURE__ */ vt("__rtkq/focused"), Rh = /* @__PURE__ */ vt("__rtkq/unfocused"), Xu = /* @__PURE__ */ vt("__rtkq/online"), Ah = /* @__PURE__ */ vt("__rtkq/offline"), Gc = !1;
function MA(e, t) {
  function n() {
    const r = () => e(Yu()), o = () => e(Rh()), i = () => e(Xu()), s = () => e(Ah()), a = () => {
      window.document.visibilityState === "visible" ? r() : o();
    };
    return Gc || typeof window < "u" && window.addEventListener && (window.addEventListener("visibilitychange", a, !1), window.addEventListener("focus", r, !1), window.addEventListener("online", i, !1), window.addEventListener("offline", s, !1), Gc = !0), () => {
      window.removeEventListener("focus", r), window.removeEventListener("visibilitychange", a), window.removeEventListener("online", i), window.removeEventListener("offline", s), Gc = !1;
    };
  }
  return n();
}
function kx(e) {
  return e.type === "query";
}
function DA(e) {
  return e.type === "mutation";
}
function Ph(e, t, n, r, o, i) {
  return NA(e) ? e(t, n, r, o).map(Ff).map(i) : Array.isArray(e) ? e.map(Ff).map(i) : [];
}
function NA(e) {
  return typeof e == "function";
}
function Ff(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function $A(e, t) {
  return e.catch(t);
}
var Ts = Symbol("forceQueryFn"), Lf = (e) => typeof e[Ts] == "function";
function FA({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: n,
  api: r,
  context: o
}) {
  const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: a,
    removeMutationResult: l,
    updateSubscriptionOptions: u
  } = r.internalActions;
  return {
    buildInitiateQuery: g,
    buildInitiateMutation: w,
    getRunningQueryThunk: c,
    getRunningMutationThunk: p,
    getRunningQueriesThunk: d,
    getRunningMutationsThunk: m
  };
  function c(x, v) {
    return (f) => {
      var S;
      const h = o.endpointDefinitions[x], y = e({
        queryArgs: v,
        endpointDefinition: h,
        endpointName: x
      });
      return (S = i.get(f)) == null ? void 0 : S[y];
    };
  }
  function p(x, v) {
    return (f) => {
      var h;
      return (h = s.get(f)) == null ? void 0 : h[v];
    };
  }
  function d() {
    return (x) => Object.values(i.get(x) || {}).filter(nv);
  }
  function m() {
    return (x) => Object.values(s.get(x) || {}).filter(nv);
  }
  function g(x, v) {
    const f = (h, {
      subscribe: y = !0,
      forceRefetch: S,
      subscriptionOptions: _,
      [Ts]: C,
      ...T
    } = {}) => (M, j) => {
      var A;
      const U = e({
        queryArgs: h,
        endpointDefinition: v,
        endpointName: x
      }), B = t({
        ...T,
        type: "query",
        subscribe: y,
        forceRefetch: S,
        subscriptionOptions: _,
        endpointName: x,
        originalArgs: h,
        queryCacheKey: U,
        [Ts]: C
      }), L = r.endpoints[x].select(h), H = M(B), J = L(j()), {
        requestId: te,
        abort: ee
      } = H, N = J.requestId !== te, Q = (A = i.get(M)) == null ? void 0 : A[U], W = () => L(j()), P = Object.assign(C ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        H.then(W)
      ) : N && !Q ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(J)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([Q, H]).then(W)
      ), {
        arg: h,
        requestId: te,
        subscriptionOptions: _,
        queryCacheKey: U,
        abort: ee,
        async unwrap() {
          const b = await P;
          if (b.isError)
            throw b.error;
          return b.data;
        },
        refetch: () => M(f(h, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          y && M(a({
            queryCacheKey: U,
            requestId: te
          }));
        },
        updateSubscriptionOptions(b) {
          P.subscriptionOptions = b, M(u({
            endpointName: x,
            requestId: te,
            queryCacheKey: U,
            options: b
          }));
        }
      });
      if (!Q && !N && !C) {
        const b = i.get(M) || {};
        b[U] = P, i.set(M, b), P.then(() => {
          delete b[U], zo(b) || i.delete(M);
        });
      }
      return P;
    };
    return f;
  }
  function w(x) {
    return (v, {
      track: f = !0,
      fixedCacheKey: h
    } = {}) => (y, S) => {
      const _ = n({
        type: "mutation",
        endpointName: x,
        originalArgs: v,
        track: f,
        fixedCacheKey: h
      }), C = y(_), {
        requestId: T,
        abort: M,
        unwrap: j
      } = C, U = $A(C.unwrap().then((J) => ({
        data: J
      })), (J) => ({
        error: J
      })), B = () => {
        y(l({
          requestId: T,
          fixedCacheKey: h
        }));
      }, L = Object.assign(U, {
        arg: C.arg,
        requestId: T,
        abort: M,
        unwrap: j,
        reset: B
      }), H = s.get(y) || {};
      return s.set(y, H), H[T] = L, L.then(() => {
        delete H[T], zo(H) || s.delete(y);
      }), h && (H[h] = L, L.then(() => {
        H[h] === L && (delete H[h], zo(H) || s.delete(y));
      })), L;
    };
  }
}
function ov(e) {
  return e;
}
function LA({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: n
  },
  serializeQueryArgs: r,
  api: o,
  assertTagType: i
}) {
  const s = (f, h, y, S) => (_, C) => {
    const T = n[f], M = r({
      queryArgs: h,
      endpointDefinition: T,
      endpointName: f
    });
    if (_(o.internalActions.queryResultPatched({
      queryCacheKey: M,
      patches: y
    })), !S)
      return;
    const j = o.endpoints[f].select(h)(
      // Work around TS 4.1 mismatch
      C()
    ), U = Ph(T.providesTags, j.data, void 0, h, {}, i);
    _(o.internalActions.updateProvidedBy({
      queryCacheKey: M,
      providedTags: U
    }));
  }, a = (f, h, y, S = !0) => (_, C) => {
    const M = o.endpoints[f].select(h)(
      // Work around TS 4.1 mismatch
      C()
    ), j = {
      patches: [],
      inversePatches: [],
      undo: () => _(o.util.patchQueryData(f, h, j.inversePatches, S))
    };
    if (M.status === "uninitialized")
      return j;
    let U;
    if ("data" in M)
      if (ln(M.data)) {
        const [B, L, H] = G0(M.data, y);
        j.patches.push(...L), j.inversePatches.push(...H), U = B;
      } else
        U = y(M.data), j.patches.push({
          op: "replace",
          path: [],
          value: U
        }), j.inversePatches.push({
          op: "replace",
          path: [],
          value: M.data
        });
    return j.patches.length === 0 || _(o.util.patchQueryData(f, h, j.patches, S)), j;
  }, l = (f, h, y) => (S) => S(o.endpoints[f].initiate(h, {
    subscribe: !1,
    forceRefetch: !0,
    [Ts]: () => ({
      data: y
    })
  })), u = async (f, {
    signal: h,
    abort: y,
    rejectWithValue: S,
    fulfillWithValue: _,
    dispatch: C,
    getState: T,
    extra: M
  }) => {
    const j = n[f.endpointName];
    try {
      let U = ov, B;
      const L = {
        signal: h,
        abort: y,
        dispatch: C,
        getState: T,
        extra: M,
        endpoint: f.endpointName,
        type: f.type,
        forced: f.type === "query" ? c(f, T()) : void 0
      }, H = f.type === "query" ? f[Ts] : void 0;
      if (H ? B = H() : j.query ? (B = await t(j.query(f.originalArgs), L, j.extraOptions), j.transformResponse && (U = j.transformResponse)) : B = await j.queryFn(f.originalArgs, L, j.extraOptions, (J) => t(J, L, j.extraOptions)), typeof process < "u", B.error) throw new rv(B.error, B.meta);
      return _(await U(B.data, B.meta, f.originalArgs), {
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: B.meta,
        [bo]: !0
      });
    } catch (U) {
      let B = U;
      if (B instanceof rv) {
        let L = ov;
        j.query && j.transformErrorResponse && (L = j.transformErrorResponse);
        try {
          return S(await L(B.value, B.meta, f.originalArgs), {
            baseQueryMeta: B.meta,
            [bo]: !0
          });
        } catch (H) {
          B = H;
        }
      }
      throw typeof process < "u", console.error(B), B;
    }
  };
  function c(f, h) {
    var T, M, j;
    const y = (M = (T = h[e]) == null ? void 0 : T.queries) == null ? void 0 : M[f.queryCacheKey], S = (j = h[e]) == null ? void 0 : j.config.refetchOnMountOrArgChange, _ = y == null ? void 0 : y.fulfilledTimeStamp, C = f.forceRefetch ?? (f.subscribe && S);
    return C ? C === !0 || (Number(/* @__PURE__ */ new Date()) - Number(_)) / 1e3 >= C : !1;
  }
  const p = vg(`${e}/executeQuery`, u, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [bo]: !0
      };
    },
    condition(f, {
      getState: h
    }) {
      var j, U, B;
      const y = h(), S = (U = (j = y[e]) == null ? void 0 : j.queries) == null ? void 0 : U[f.queryCacheKey], _ = S == null ? void 0 : S.fulfilledTimeStamp, C = f.originalArgs, T = S == null ? void 0 : S.originalArgs, M = n[f.endpointName];
      return Lf(f) ? !0 : (S == null ? void 0 : S.status) === "pending" ? !1 : c(f, y) || kx(M) && ((B = M == null ? void 0 : M.forceRefetch) != null && B.call(M, {
        currentArg: C,
        previousArg: T,
        endpointState: S,
        state: y
      })) ? !0 : !_;
    },
    dispatchConditionRejection: !0
  }), d = vg(`${e}/executeMutation`, u, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [bo]: !0
      };
    }
  }), m = (f) => "force" in f, g = (f) => "ifOlderThan" in f, w = (f, h, y) => (S, _) => {
    const C = m(y) && y.force, T = g(y) && y.ifOlderThan, M = (U = !0) => {
      const B = {
        forceRefetch: U,
        isPrefetch: !0
      };
      return o.endpoints[f].initiate(h, B);
    }, j = o.endpoints[f].select(h)(_());
    if (C)
      S(M());
    else if (T) {
      const U = j == null ? void 0 : j.fulfilledTimeStamp;
      if (!U) {
        S(M());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(U))) / 1e3 >= T && S(M());
    } else
      S(M(!1));
  };
  function x(f) {
    return (h) => {
      var y, S;
      return ((S = (y = h == null ? void 0 : h.meta) == null ? void 0 : y.arg) == null ? void 0 : S.endpointName) === f;
    };
  }
  function v(f, h) {
    return {
      matchPending: qi(Zp(f), x(h)),
      matchFulfilled: qi(yr(f), x(h)),
      matchRejected: qi(Zo(f), x(h))
    };
  }
  return {
    queryThunk: p,
    mutationThunk: d,
    prefetch: w,
    updateQueryData: a,
    upsertQueryData: l,
    patchQueryData: s,
    buildMatchThunkActions: v
  };
}
function _x(e, t, n, r) {
  return Ph(n[e.meta.arg.endpointName][t], yr(e) ? e.payload : void 0, gu(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, r);
}
function Sa(e, t, n) {
  const r = e[t];
  r && n(r);
}
function Rs(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function iv(e, t, n) {
  const r = e[Rs(t)];
  r && n(r);
}
var Ci = {};
function zA({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  context: {
    endpointDefinitions: r,
    apiUid: o,
    extractRehydrationInfo: i,
    hasRehydrationInfo: s
  },
  assertTagType: a,
  config: l
}) {
  const u = vt(`${e}/resetApiState`), c = hn({
    name: `${e}/queries`,
    initialState: Ci,
    reducers: {
      removeQueryResult: {
        reducer(h, {
          payload: {
            queryCacheKey: y
          }
        }) {
          delete h[y];
        },
        prepare: ki()
      },
      queryResultPatched: {
        reducer(h, {
          payload: {
            queryCacheKey: y,
            patches: S
          }
        }) {
          Sa(h, y, (_) => {
            _.data = cg(_.data, S.concat());
          });
        },
        prepare: ki()
      }
    },
    extraReducers(h) {
      h.addCase(t.pending, (y, {
        meta: S,
        meta: {
          arg: _
        }
      }) => {
        var T;
        const C = Lf(_);
        y[T = _.queryCacheKey] ?? (y[T] = {
          status: "uninitialized",
          endpointName: _.endpointName
        }), Sa(y, _.queryCacheKey, (M) => {
          M.status = "pending", M.requestId = C && M.requestId ? (
            // for `upsertQuery` **updates**, keep the current `requestId`
            M.requestId
          ) : (
            // for normal queries or `upsertQuery` **inserts** always update the `requestId`
            S.requestId
          ), _.originalArgs !== void 0 && (M.originalArgs = _.originalArgs), M.startedTimeStamp = S.startedTimeStamp;
        });
      }).addCase(t.fulfilled, (y, {
        meta: S,
        payload: _
      }) => {
        Sa(y, S.arg.queryCacheKey, (C) => {
          if (C.requestId !== S.requestId && !Lf(S.arg)) return;
          const {
            merge: T
          } = r[S.arg.endpointName];
          if (C.status = "fulfilled", T)
            if (C.data !== void 0) {
              const {
                fulfilledTimeStamp: M,
                arg: j,
                baseQueryMeta: U,
                requestId: B
              } = S;
              let L = Ls(C.data, (H) => T(H, _, {
                arg: j.originalArgs,
                baseQueryMeta: U,
                fulfilledTimeStamp: M,
                requestId: B
              }));
              C.data = L;
            } else
              C.data = _;
          else
            C.data = r[S.arg.endpointName].structuralSharing ?? !0 ? Sx(Sn(C.data) ? tC(C.data) : C.data, _) : _;
          delete C.error, C.fulfilledTimeStamp = S.fulfilledTimeStamp;
        });
      }).addCase(t.rejected, (y, {
        meta: {
          condition: S,
          arg: _,
          requestId: C
        },
        error: T,
        payload: M
      }) => {
        Sa(y, _.queryCacheKey, (j) => {
          if (!S) {
            if (j.requestId !== C) return;
            j.status = "rejected", j.error = M ?? T;
          }
        });
      }).addMatcher(s, (y, S) => {
        const {
          queries: _
        } = i(S);
        for (const [C, T] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((T == null ? void 0 : T.status) === "fulfilled" || (T == null ? void 0 : T.status) === "rejected") && (y[C] = T);
      });
    }
  }), p = hn({
    name: `${e}/mutations`,
    initialState: Ci,
    reducers: {
      removeMutationResult: {
        reducer(h, {
          payload: y
        }) {
          const S = Rs(y);
          S in h && delete h[S];
        },
        prepare: ki()
      }
    },
    extraReducers(h) {
      h.addCase(n.pending, (y, {
        meta: S,
        meta: {
          requestId: _,
          arg: C,
          startedTimeStamp: T
        }
      }) => {
        C.track && (y[Rs(S)] = {
          requestId: _,
          status: "pending",
          endpointName: C.endpointName,
          startedTimeStamp: T
        });
      }).addCase(n.fulfilled, (y, {
        payload: S,
        meta: _
      }) => {
        _.arg.track && iv(y, _, (C) => {
          C.requestId === _.requestId && (C.status = "fulfilled", C.data = S, C.fulfilledTimeStamp = _.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, (y, {
        payload: S,
        error: _,
        meta: C
      }) => {
        C.arg.track && iv(y, C, (T) => {
          T.requestId === C.requestId && (T.status = "rejected", T.error = S ?? _);
        });
      }).addMatcher(s, (y, S) => {
        const {
          mutations: _
        } = i(S);
        for (const [C, T] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((T == null ? void 0 : T.status) === "fulfilled" || (T == null ? void 0 : T.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          C !== (T == null ? void 0 : T.requestId) && (y[C] = T);
      });
    }
  }), d = hn({
    name: `${e}/invalidation`,
    initialState: Ci,
    reducers: {
      updateProvidedBy: {
        reducer(h, y) {
          var C, T;
          const {
            queryCacheKey: S,
            providedTags: _
          } = y.payload;
          for (const M of Object.values(h))
            for (const j of Object.values(M)) {
              const U = j.indexOf(S);
              U !== -1 && j.splice(U, 1);
            }
          for (const {
            type: M,
            id: j
          } of _) {
            const U = (C = h[M] ?? (h[M] = {}))[T = j || "__internal_without_id"] ?? (C[T] = []);
            U.includes(S) || U.push(S);
          }
        },
        prepare: ki()
      }
    },
    extraReducers(h) {
      h.addCase(c.actions.removeQueryResult, (y, {
        payload: {
          queryCacheKey: S
        }
      }) => {
        for (const _ of Object.values(y))
          for (const C of Object.values(_)) {
            const T = C.indexOf(S);
            T !== -1 && C.splice(T, 1);
          }
      }).addMatcher(s, (y, S) => {
        var C, T;
        const {
          provided: _
        } = i(S);
        for (const [M, j] of Object.entries(_))
          for (const [U, B] of Object.entries(j)) {
            const L = (C = y[M] ?? (y[M] = {}))[T = U || "__internal_without_id"] ?? (C[T] = []);
            for (const H of B)
              L.includes(H) || L.push(H);
          }
      }).addMatcher(kn(yr(t), gu(t)), (y, S) => {
        const _ = _x(S, "providesTags", r, a), {
          queryCacheKey: C
        } = S.meta.arg;
        d.caseReducers.updateProvidedBy(y, d.actions.updateProvidedBy({
          queryCacheKey: C,
          providedTags: _
        }));
      });
    }
  }), m = hn({
    name: `${e}/subscriptions`,
    initialState: Ci,
    reducers: {
      updateSubscriptionOptions(h, y) {
      },
      unsubscribeQueryResult(h, y) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), g = hn({
    name: `${e}/internalSubscriptions`,
    initialState: Ci,
    reducers: {
      subscriptionsUpdated: {
        reducer(h, y) {
          return cg(h, y.payload);
        },
        prepare: ki()
      }
    }
  }), w = hn({
    name: `${e}/config`,
    initialState: {
      online: jA(),
      focused: OA(),
      middlewareRegistered: !1,
      ...l
    },
    reducers: {
      middlewareRegistered(h, {
        payload: y
      }) {
        h.middlewareRegistered = h.middlewareRegistered === "conflict" || o !== y ? "conflict" : !0;
      }
    },
    extraReducers: (h) => {
      h.addCase(Xu, (y) => {
        y.online = !0;
      }).addCase(Ah, (y) => {
        y.online = !1;
      }).addCase(Yu, (y) => {
        y.focused = !0;
      }).addCase(Rh, (y) => {
        y.focused = !1;
      }).addMatcher(s, (y) => ({
        ...y
      }));
    }
  }), x = H0({
    queries: c.reducer,
    mutations: p.reducer,
    provided: d.reducer,
    subscriptions: g.reducer,
    config: w.reducer
  }), v = (h, y) => x(u.match(y) ? void 0 : h, y), f = {
    ...w.actions,
    ...c.actions,
    ...m.actions,
    ...g.actions,
    ...p.actions,
    ...d.actions,
    resetApiState: u
  };
  return {
    reducer: v,
    actions: f
  };
}
var $r = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), Cx = {
  status: "uninitialized"
  /* uninitialized */
}, sv = /* @__PURE__ */ Ls(Cx, () => {
}), av = /* @__PURE__ */ Ls(Cx, () => {
});
function BA({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: n
}) {
  const r = (p) => sv, o = (p) => av;
  return {
    buildQuerySelector: a,
    buildMutationSelector: l,
    selectInvalidatedBy: u,
    selectCachedArgsForQuery: c
  };
  function i(p) {
    return {
      ...p,
      ...IA(p.status)
    };
  }
  function s(p) {
    return p[t];
  }
  function a(p, d) {
    return (m) => {
      const g = e({
        queryArgs: m,
        endpointDefinition: d,
        endpointName: p
      });
      return n(m === $r ? r : (v) => {
        var f, h;
        return ((h = (f = s(v)) == null ? void 0 : f.queries) == null ? void 0 : h[g]) ?? sv;
      }, i);
    };
  }
  function l() {
    return (p) => {
      let d;
      return typeof p == "object" ? d = Rs(p) ?? $r : d = p, n(d === $r ? o : (w) => {
        var x, v;
        return ((v = (x = s(w)) == null ? void 0 : x.mutations) == null ? void 0 : v[d]) ?? av;
      }, i);
    };
  }
  function u(p, d) {
    const m = p[t], g = /* @__PURE__ */ new Set();
    for (const w of d.map(Ff)) {
      const x = m.provided[w.type];
      if (!x)
        continue;
      let v = (w.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        x[w.id]
      ) : (
        // no id: invalidate all queries that provide this type
        tv(Object.values(x))
      )) ?? [];
      for (const f of v)
        g.add(f);
    }
    return tv(Array.from(g.values()).map((w) => {
      const x = m.queries[w];
      return x ? [{
        queryCacheKey: w,
        endpointName: x.endpointName,
        originalArgs: x.originalArgs
      }] : [];
    }));
  }
  function c(p, d) {
    return Object.values(p[t].queries).filter(
      (m) => (m == null ? void 0 : m.endpointName) === d && m.status !== "uninitialized"
      /* uninitialized */
    ).map((m) => m.originalArgs);
  }
}
var uo = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, lv = ({
  endpointName: e,
  queryArgs: t
}) => {
  let n = "";
  const r = uo == null ? void 0 : uo.get(t);
  if (typeof r == "string")
    n = r;
  else {
    const o = JSON.stringify(t, (i, s) => (s = typeof s == "bigint" ? {
      $bigint: s.toString()
    } : s, s = vr(s) ? Object.keys(s).sort().reduce((a, l) => (a[l] = s[l], a), {}) : s, s));
    vr(t) && (uo == null || uo.set(t, o)), n = o;
  }
  return `${e}(${n})`;
};
function VA(...e) {
  return function(n) {
    const r = vl((u) => {
      var c;
      return (c = n.extractRehydrationInfo) == null ? void 0 : c.call(n, u, {
        reducerPath: n.reducerPath ?? "api"
      });
    }), o = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...n,
      extractRehydrationInfo: r,
      serializeQueryArgs(u) {
        let c = lv;
        if ("serializeQueryArgs" in u.endpointDefinition) {
          const p = u.endpointDefinition.serializeQueryArgs;
          c = (d) => {
            const m = p(d);
            return typeof m == "string" ? m : lv({
              ...d,
              queryArgs: m
            });
          };
        } else n.serializeQueryArgs && (c = n.serializeQueryArgs);
        return c(u);
      },
      tagTypes: [...n.tagTypes || []]
    }, i = {
      endpointDefinitions: {},
      batch(u) {
        u();
      },
      apiUid: qp(),
      extractRehydrationInfo: r,
      hasRehydrationInfo: vl((u) => r(u) != null)
    }, s = {
      injectEndpoints: l,
      enhanceEndpoints({
        addTagTypes: u,
        endpoints: c
      }) {
        if (u)
          for (const p of u)
            o.tagTypes.includes(p) || o.tagTypes.push(p);
        if (c)
          for (const [p, d] of Object.entries(c))
            typeof d == "function" ? d(i.endpointDefinitions[p]) : Object.assign(i.endpointDefinitions[p] || {}, d);
        return s;
      }
    }, a = e.map((u) => u.init(s, o, i));
    function l(u) {
      const c = u.endpoints({
        query: (p) => ({
          ...p,
          type: "query"
          /* query */
        }),
        mutation: (p) => ({
          ...p,
          type: "mutation"
          /* mutation */
        })
      });
      for (const [p, d] of Object.entries(c)) {
        if (u.overrideExisting !== !0 && p in i.endpointDefinitions) {
          if (u.overrideExisting === "throw")
            throw new Error(lt(39));
          typeof process < "u";
          continue;
        }
        i.endpointDefinitions[p] = d;
        for (const m of a)
          m.injectEndpoint(p, d);
      }
      return s;
    }
    return s.injectEndpoints({
      endpoints: n.endpoints
    });
  };
}
function Zn(e, ...t) {
  return Object.assign(e, ...t);
}
var UA = ({
  api: e,
  queryThunk: t,
  internalState: n
}) => {
  const r = `${e.reducerPath}/subscriptions`;
  let o = null, i = null;
  const {
    updateSubscriptionOptions: s,
    unsubscribeQueryResult: a
  } = e.internalActions, l = (m, g) => {
    var x, v, f;
    if (s.match(g)) {
      const {
        queryCacheKey: h,
        requestId: y,
        options: S
      } = g.payload;
      return (x = m == null ? void 0 : m[h]) != null && x[y] && (m[h][y] = S), !0;
    }
    if (a.match(g)) {
      const {
        queryCacheKey: h,
        requestId: y
      } = g.payload;
      return m[h] && delete m[h][y], !0;
    }
    if (e.internalActions.removeQueryResult.match(g))
      return delete m[g.payload.queryCacheKey], !0;
    if (t.pending.match(g)) {
      const {
        meta: {
          arg: h,
          requestId: y
        }
      } = g, S = m[v = h.queryCacheKey] ?? (m[v] = {});
      return S[`${y}_running`] = {}, h.subscribe && (S[y] = h.subscriptionOptions ?? S[y] ?? {}), !0;
    }
    let w = !1;
    if (t.fulfilled.match(g) || t.rejected.match(g)) {
      const h = m[g.meta.arg.queryCacheKey] || {}, y = `${g.meta.requestId}_running`;
      w || (w = !!h[y]), delete h[y];
    }
    if (t.rejected.match(g)) {
      const {
        meta: {
          condition: h,
          arg: y,
          requestId: S
        }
      } = g;
      if (h && y.subscribe) {
        const _ = m[f = y.queryCacheKey] ?? (m[f] = {});
        _[S] = y.subscriptionOptions ?? _[S] ?? {}, w = !0;
      }
    }
    return w;
  }, u = () => n.currentSubscriptions, d = {
    getSubscriptions: u,
    getSubscriptionCount: (m) => {
      const w = u()[m] ?? {};
      return zo(w);
    },
    isRequestSubscribed: (m, g) => {
      var x;
      const w = u();
      return !!((x = w == null ? void 0 : w[m]) != null && x[g]);
    }
  };
  return (m, g) => {
    if (o || (o = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(m))
      return o = n.currentSubscriptions = {}, i = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(m))
      return [!1, d];
    const w = l(n.currentSubscriptions, m);
    let x = !0;
    if (w) {
      i || (i = setTimeout(() => {
        const h = JSON.parse(JSON.stringify(n.currentSubscriptions)), [, y] = G0(o, () => h);
        g.next(e.internalActions.subscriptionsUpdated(y)), o = h, i = null;
      }, 500));
      const v = typeof m.type == "string" && !!m.type.startsWith(r), f = t.rejected.match(m) && m.meta.condition && !!m.meta.arg.subscribe;
      x = !v && !f;
    }
    return [x, !1];
  };
};
function HA(e) {
  for (const t in e)
    return !1;
  return !0;
}
var WA = 2147483647 / 1e3 - 1, QA = ({
  reducerPath: e,
  api: t,
  queryThunk: n,
  context: r,
  internalState: o
}) => {
  const {
    removeQueryResult: i,
    unsubscribeQueryResult: s
  } = t.internalActions, a = kn(s.match, n.fulfilled, n.rejected);
  function l(d) {
    const m = o.currentSubscriptions[d];
    return !!m && !HA(m);
  }
  const u = {}, c = (d, m, g) => {
    var w;
    if (a(d)) {
      const x = m.getState()[e], {
        queryCacheKey: v
      } = s.match(d) ? d.payload : d.meta.arg;
      p(v, (w = x.queries[v]) == null ? void 0 : w.endpointName, m, x.config);
    }
    if (t.util.resetApiState.match(d))
      for (const [x, v] of Object.entries(u))
        v && clearTimeout(v), delete u[x];
    if (r.hasRehydrationInfo(d)) {
      const x = m.getState()[e], {
        queries: v
      } = r.extractRehydrationInfo(d);
      for (const [f, h] of Object.entries(v))
        p(f, h == null ? void 0 : h.endpointName, m, x.config);
    }
  };
  function p(d, m, g, w) {
    const x = r.endpointDefinitions[m], v = (x == null ? void 0 : x.keepUnusedDataFor) ?? w.keepUnusedDataFor;
    if (v === 1 / 0)
      return;
    const f = Math.max(0, Math.min(v, WA));
    if (!l(d)) {
      const h = u[d];
      h && clearTimeout(h), u[d] = setTimeout(() => {
        l(d) || g.dispatch(i({
          queryCacheKey: d
        })), delete u[d];
      }, f * 1e3);
    }
  }
  return c;
}, uv = new Error("Promise never resolved before cacheEntryRemoved."), KA = ({
  api: e,
  reducerPath: t,
  context: n,
  queryThunk: r,
  mutationThunk: o,
  internalState: i
}) => {
  const s = df(r), a = df(o), l = yr(r, o), u = {}, c = (m, g, w) => {
    const x = p(m);
    if (r.pending.match(m)) {
      const v = w[t].queries[x], f = g.getState()[t].queries[x];
      !v && f && d(m.meta.arg.endpointName, m.meta.arg.originalArgs, x, g, m.meta.requestId);
    } else if (o.pending.match(m))
      g.getState()[t].mutations[x] && d(m.meta.arg.endpointName, m.meta.arg.originalArgs, x, g, m.meta.requestId);
    else if (l(m)) {
      const v = u[x];
      v != null && v.valueResolved && (v.valueResolved({
        data: m.payload,
        meta: m.meta.baseQueryMeta
      }), delete v.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(m) || e.internalActions.removeMutationResult.match(m)) {
      const v = u[x];
      v && (delete u[x], v.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(m))
      for (const [v, f] of Object.entries(u))
        delete u[v], f.cacheEntryRemoved();
  };
  function p(m) {
    return s(m) ? m.meta.arg.queryCacheKey : a(m) ? m.meta.arg.fixedCacheKey ?? m.meta.requestId : e.internalActions.removeQueryResult.match(m) ? m.payload.queryCacheKey : e.internalActions.removeMutationResult.match(m) ? Rs(m.payload) : "";
  }
  function d(m, g, w, x, v) {
    const f = n.endpointDefinitions[m], h = f == null ? void 0 : f.onCacheEntryAdded;
    if (!h) return;
    const y = {}, S = new Promise((U) => {
      y.cacheEntryRemoved = U;
    }), _ = Promise.race([new Promise((U) => {
      y.valueResolved = U;
    }), S.then(() => {
      throw uv;
    })]);
    _.catch(() => {
    }), u[w] = y;
    const C = e.endpoints[m].select(f.type === "query" ? g : w), T = x.dispatch((U, B, L) => L), M = {
      ...x,
      getCacheEntry: () => C(x.getState()),
      requestId: v,
      extra: T,
      updateCachedData: f.type === "query" ? (U) => x.dispatch(e.util.updateQueryData(m, g, U)) : void 0,
      cacheDataLoaded: _,
      cacheEntryRemoved: S
    }, j = h(g, M);
    Promise.resolve(j).catch((U) => {
      if (U !== uv)
        throw U;
    });
  }
  return c;
}, ZA = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: n
}) => (r, o) => {
  e.util.resetApiState.match(r) && o.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u";
}, qA = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: n
  },
  mutationThunk: r,
  queryThunk: o,
  api: i,
  assertTagType: s,
  refetchQuery: a,
  internalState: l
}) => {
  const {
    removeQueryResult: u
  } = i.internalActions, c = kn(yr(r), gu(r)), p = kn(yr(r, o), Zo(r, o));
  let d = [];
  const m = (x, v) => {
    c(x) ? w(_x(x, "invalidatesTags", n, s), v) : p(x) ? w([], v) : i.util.invalidateTags.match(x) && w(Ph(x.payload, void 0, void 0, void 0, void 0, s), v);
  };
  function g(x) {
    var v, f;
    for (const h in x.queries)
      if (((v = x.queries[h]) == null ? void 0 : v.status) === "pending") return !0;
    for (const h in x.mutations)
      if (((f = x.mutations[h]) == null ? void 0 : f.status) === "pending") return !0;
    return !1;
  }
  function w(x, v) {
    const f = v.getState(), h = f[e];
    if (d.push(...x), h.config.invalidationBehavior === "delayed" && g(h))
      return;
    const y = d;
    if (d = [], y.length === 0) return;
    const S = i.util.selectInvalidatedBy(f, y);
    t.batch(() => {
      const _ = Array.from(S.values());
      for (const {
        queryCacheKey: C
      } of _) {
        const T = h.queries[C], M = l.currentSubscriptions[C] ?? {};
        T && (zo(M) === 0 ? v.dispatch(u({
          queryCacheKey: C
        })) : T.status !== "uninitialized" && v.dispatch(a(T, C)));
      }
    });
  }
  return m;
}, GA = ({
  reducerPath: e,
  queryThunk: t,
  api: n,
  refetchQuery: r,
  internalState: o
}) => {
  const i = {}, s = (d, m) => {
    (n.internalActions.updateSubscriptionOptions.match(d) || n.internalActions.unsubscribeQueryResult.match(d)) && l(d.payload, m), (t.pending.match(d) || t.rejected.match(d) && d.meta.condition) && l(d.meta.arg, m), (t.fulfilled.match(d) || t.rejected.match(d) && !d.meta.condition) && a(d.meta.arg, m), n.util.resetApiState.match(d) && c();
  };
  function a({
    queryCacheKey: d
  }, m) {
    const g = m.getState()[e], w = g.queries[d], x = o.currentSubscriptions[d];
    if (!w || w.status === "uninitialized") return;
    const {
      lowestPollingInterval: v,
      skipPollingIfUnfocused: f
    } = p(x);
    if (!Number.isFinite(v)) return;
    const h = i[d];
    h != null && h.timeout && (clearTimeout(h.timeout), h.timeout = void 0);
    const y = Date.now() + v;
    i[d] = {
      nextPollTimestamp: y,
      pollingInterval: v,
      timeout: setTimeout(() => {
        (g.config.focused || !f) && m.dispatch(r(w, d)), a({
          queryCacheKey: d
        }, m);
      }, v)
    };
  }
  function l({
    queryCacheKey: d
  }, m) {
    const w = m.getState()[e].queries[d], x = o.currentSubscriptions[d];
    if (!w || w.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: v
    } = p(x);
    if (!Number.isFinite(v)) {
      u(d);
      return;
    }
    const f = i[d], h = Date.now() + v;
    (!f || h < f.nextPollTimestamp) && a({
      queryCacheKey: d
    }, m);
  }
  function u(d) {
    const m = i[d];
    m != null && m.timeout && clearTimeout(m.timeout), delete i[d];
  }
  function c() {
    for (const d of Object.keys(i))
      u(d);
  }
  function p(d = {}) {
    let m = !1, g = Number.POSITIVE_INFINITY;
    for (let w in d)
      d[w].pollingInterval && (g = Math.min(d[w].pollingInterval, g), m = d[w].skipPollingIfUnfocused || m);
    return {
      lowestPollingInterval: g,
      skipPollingIfUnfocused: m
    };
  }
  return s;
}, YA = ({
  api: e,
  context: t,
  queryThunk: n,
  mutationThunk: r
}) => {
  const o = Zp(n, r), i = Zo(n, r), s = yr(n, r), a = {};
  return (u, c) => {
    var p, d;
    if (o(u)) {
      const {
        requestId: m,
        arg: {
          endpointName: g,
          originalArgs: w
        }
      } = u.meta, x = t.endpointDefinitions[g], v = x == null ? void 0 : x.onQueryStarted;
      if (v) {
        const f = {}, h = new Promise((C, T) => {
          f.resolve = C, f.reject = T;
        });
        h.catch(() => {
        }), a[m] = f;
        const y = e.endpoints[g].select(x.type === "query" ? w : m), S = c.dispatch((C, T, M) => M), _ = {
          ...c,
          getCacheEntry: () => y(c.getState()),
          requestId: m,
          extra: S,
          updateCachedData: x.type === "query" ? (C) => c.dispatch(e.util.updateQueryData(g, w, C)) : void 0,
          queryFulfilled: h
        };
        v(w, _);
      }
    } else if (s(u)) {
      const {
        requestId: m,
        baseQueryMeta: g
      } = u.meta;
      (p = a[m]) == null || p.resolve({
        data: u.payload,
        meta: g
      }), delete a[m];
    } else if (i(u)) {
      const {
        requestId: m,
        rejectedWithValue: g,
        baseQueryMeta: w
      } = u.meta;
      (d = a[m]) == null || d.reject({
        error: u.payload ?? u.error,
        isUnhandledError: !g,
        meta: w
      }), delete a[m];
    }
  };
}, XA = ({
  reducerPath: e,
  context: t,
  api: n,
  refetchQuery: r,
  internalState: o
}) => {
  const {
    removeQueryResult: i
  } = n.internalActions, s = (l, u) => {
    Yu.match(l) && a(u, "refetchOnFocus"), Xu.match(l) && a(u, "refetchOnReconnect");
  };
  function a(l, u) {
    const c = l.getState()[e], p = c.queries, d = o.currentSubscriptions;
    t.batch(() => {
      for (const m of Object.keys(d)) {
        const g = p[m], w = d[m];
        if (!w || !g) continue;
        (Object.values(w).some((v) => v[u] === !0) || Object.values(w).every((v) => v[u] === void 0) && c.config[u]) && (zo(w) === 0 ? l.dispatch(i({
          queryCacheKey: m
        })) : g.status !== "uninitialized" && l.dispatch(r(g, m)));
      }
    });
  }
  return s;
};
function JA(e) {
  const {
    reducerPath: t,
    queryThunk: n,
    api: r,
    context: o
  } = e, {
    apiUid: i
  } = o, s = {
    invalidateTags: vt(`${t}/invalidateTags`)
  }, a = (p) => p.type.startsWith(`${t}/`), l = [ZA, QA, qA, GA, KA, YA];
  return {
    middleware: (p) => {
      let d = !1;
      const g = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: c,
        isThisApiSliceAction: a
      }, w = l.map((f) => f(g)), x = UA(g), v = XA(g);
      return (f) => (h) => {
        if (!Up(h))
          return f(h);
        d || (d = !0, p.dispatch(r.internalActions.middlewareRegistered(i)));
        const y = {
          ...p,
          next: f
        }, S = p.getState(), [_, C] = x(h, y, S);
        let T;
        if (_ ? T = f(h) : T = C, p.getState()[t] && (v(h, y, S), a(h) || o.hasRehydrationInfo(h)))
          for (const M of w)
            M(h, y, S);
        return T;
      };
    },
    actions: s
  };
  function c(p, d, m = {}) {
    return n({
      type: "query",
      endpointName: p.endpointName,
      originalArgs: p.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: d,
      ...m
    });
  }
}
var cv = /* @__PURE__ */ Symbol(), eP = ({
  createSelector: e = Kp
} = {}) => ({
  name: cv,
  init(t, {
    baseQuery: n,
    tagTypes: r,
    reducerPath: o,
    serializeQueryArgs: i,
    keepUnusedDataFor: s,
    refetchOnMountOrArgChange: a,
    refetchOnFocus: l,
    refetchOnReconnect: u,
    invalidationBehavior: c
  }, p) {
    dC();
    const d = (N) => (typeof process < "u", N);
    Object.assign(t, {
      reducerPath: o,
      endpoints: {},
      internalActions: {
        onOnline: Xu,
        onOffline: Ah,
        onFocus: Yu,
        onFocusLost: Rh
      },
      util: {}
    });
    const {
      queryThunk: m,
      mutationThunk: g,
      patchQueryData: w,
      updateQueryData: x,
      upsertQueryData: v,
      prefetch: f,
      buildMatchThunkActions: h
    } = LA({
      baseQuery: n,
      reducerPath: o,
      context: p,
      api: t,
      serializeQueryArgs: i,
      assertTagType: d
    }), {
      reducer: y,
      actions: S
    } = zA({
      context: p,
      queryThunk: m,
      mutationThunk: g,
      reducerPath: o,
      assertTagType: d,
      config: {
        refetchOnFocus: l,
        refetchOnReconnect: u,
        refetchOnMountOrArgChange: a,
        keepUnusedDataFor: s,
        reducerPath: o,
        invalidationBehavior: c
      }
    });
    Zn(t.util, {
      patchQueryData: w,
      updateQueryData: x,
      upsertQueryData: v,
      prefetch: f,
      resetApiState: S.resetApiState
    }), Zn(t.internalActions, S);
    const {
      middleware: _,
      actions: C
    } = JA({
      reducerPath: o,
      context: p,
      queryThunk: m,
      mutationThunk: g,
      api: t,
      assertTagType: d
    });
    Zn(t.util, C), Zn(t, {
      reducer: y,
      middleware: _
    });
    const {
      buildQuerySelector: T,
      buildMutationSelector: M,
      selectInvalidatedBy: j,
      selectCachedArgsForQuery: U
    } = BA({
      serializeQueryArgs: i,
      reducerPath: o,
      createSelector: e
    });
    Zn(t.util, {
      selectInvalidatedBy: j,
      selectCachedArgsForQuery: U
    });
    const {
      buildInitiateQuery: B,
      buildInitiateMutation: L,
      getRunningMutationThunk: H,
      getRunningMutationsThunk: J,
      getRunningQueriesThunk: te,
      getRunningQueryThunk: ee
    } = FA({
      queryThunk: m,
      mutationThunk: g,
      api: t,
      serializeQueryArgs: i,
      context: p
    });
    return Zn(t.util, {
      getRunningMutationThunk: H,
      getRunningMutationsThunk: J,
      getRunningQueryThunk: ee,
      getRunningQueriesThunk: te
    }), {
      name: cv,
      injectEndpoint(N, Q) {
        var P;
        const W = t;
        (P = W.endpoints)[N] ?? (P[N] = {}), kx(Q) ? Zn(W.endpoints[N], {
          name: N,
          select: T(N, Q),
          initiate: B(N, Q)
        }, h(m, N)) : DA(Q) && Zn(W.endpoints[N], {
          name: N,
          select: M(),
          initiate: L(N)
        }, h(g, N));
      }
    };
  }
});
function tP(e) {
  return e.type === "query";
}
function nP(e) {
  return e.type === "mutation";
}
function ka(e, ...t) {
  return Object.assign(e, ...t);
}
function Yc(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var co = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, rP = ({
  endpointName: e,
  queryArgs: t
}) => {
  let n = "";
  const r = co == null ? void 0 : co.get(t);
  if (typeof r == "string")
    n = r;
  else {
    const o = JSON.stringify(t, (i, s) => (s = typeof s == "bigint" ? {
      $bigint: s.toString()
    } : s, s = vr(s) ? Object.keys(s).sort().reduce((a, l) => (a[l] = s[l], a), {}) : s, s));
    vr(t) && (co == null || co.set(t, o)), n = o;
  }
  return `${e}(${n})`;
}, Xc = Symbol();
function dv(e, t, n, r) {
  const o = E.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: n,
      endpointName: r
    }) : e
  }), [e, t, n, r]), i = E.useRef(o);
  return E.useEffect(() => {
    i.current.serialized !== o.serialized && (i.current = o);
  }, [o]), i.current.serialized === o.serialized ? i.current.queryArgs : e;
}
function Jc(e) {
  const t = E.useRef(e);
  return E.useEffect(() => {
    Ki(t.current, e) || (t.current = e);
  }, [e]), Ki(t.current, e) ? t.current : e;
}
var oP = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", iP = /* @__PURE__ */ oP(), sP = () => typeof navigator < "u" && navigator.product === "ReactNative", aP = /* @__PURE__ */ sP(), lP = () => iP || aP ? E.useLayoutEffect : E.useEffect, uP = /* @__PURE__ */ lP(), cP = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: xx.pending
} : e;
function dP({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: n,
      useSelector: r,
      useStore: o
    },
    unstable__sideEffectsInRender: i,
    createSelector: s
  },
  serializeQueryArgs: a,
  context: l
}) {
  const u = i ? (g) => g() : E.useEffect;
  return {
    buildQueryHooks: d,
    buildMutationHook: m,
    usePrefetch: p
  };
  function c(g, w, x) {
    if (w != null && w.endpointName && g.isUninitialized) {
      const {
        endpointName: _
      } = w, C = l.endpointDefinitions[_];
      a({
        queryArgs: w.originalArgs,
        endpointDefinition: C,
        endpointName: _
      }) === a({
        queryArgs: x,
        endpointDefinition: C,
        endpointName: _
      }) && (w = void 0);
    }
    let v = g.isSuccess ? g.data : w == null ? void 0 : w.data;
    v === void 0 && (v = g.data);
    const f = v !== void 0, h = g.isLoading, y = (!w || w.isLoading || w.isUninitialized) && !f && h, S = g.isSuccess || h && f;
    return {
      ...g,
      data: v,
      currentData: g.data,
      isFetching: h,
      isLoading: y,
      isSuccess: S
    };
  }
  function p(g, w) {
    const x = n(), v = Jc(w);
    return E.useCallback((f, h) => x(e.util.prefetch(g, f, {
      ...v,
      ...h
    })), [g, x, v]);
  }
  function d(g) {
    const w = (f, {
      refetchOnReconnect: h,
      refetchOnFocus: y,
      refetchOnMountOrArgChange: S,
      skip: _ = !1,
      pollingInterval: C = 0,
      skipPollingIfUnfocused: T = !1
    } = {}) => {
      const {
        initiate: M
      } = e.endpoints[g], j = n(), U = E.useRef(void 0);
      if (!U.current) {
        const W = j(e.internalActions.internal_getRTKQSubscriptions());
        U.current = W;
      }
      const B = dv(
        _ ? $r : f,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        rP,
        l.endpointDefinitions[g],
        g
      ), L = Jc({
        refetchOnReconnect: h,
        refetchOnFocus: y,
        pollingInterval: C,
        skipPollingIfUnfocused: T
      }), H = E.useRef(!1), J = E.useRef(void 0);
      let {
        queryCacheKey: te,
        requestId: ee
      } = J.current || {}, N = !1;
      te && ee && (N = U.current.isRequestSubscribed(te, ee));
      const Q = !N && H.current;
      return u(() => {
        H.current = N;
      }), u(() => {
        Q && (J.current = void 0);
      }, [Q]), u(() => {
        var A;
        const W = J.current;
        if (typeof process < "u", B === $r) {
          W == null || W.unsubscribe(), J.current = void 0;
          return;
        }
        const P = (A = J.current) == null ? void 0 : A.subscriptionOptions;
        if (!W || W.arg !== B) {
          W == null || W.unsubscribe();
          const b = j(M(B, {
            subscriptionOptions: L,
            forceRefetch: S
          }));
          J.current = b;
        } else L !== P && W.updateSubscriptionOptions(L);
      }, [j, M, S, B, L, Q]), E.useEffect(() => () => {
        var W;
        (W = J.current) == null || W.unsubscribe(), J.current = void 0;
      }, []), E.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => {
          var W;
          if (!J.current) throw new Error(lt(38));
          return (W = J.current) == null ? void 0 : W.refetch();
        }
      }), []);
    }, x = ({
      refetchOnReconnect: f,
      refetchOnFocus: h,
      pollingInterval: y = 0,
      skipPollingIfUnfocused: S = !1
    } = {}) => {
      const {
        initiate: _
      } = e.endpoints[g], C = n(), [T, M] = E.useState(Xc), j = E.useRef(void 0), U = Jc({
        refetchOnReconnect: f,
        refetchOnFocus: h,
        pollingInterval: y,
        skipPollingIfUnfocused: S
      });
      u(() => {
        var J, te;
        const H = (J = j.current) == null ? void 0 : J.subscriptionOptions;
        U !== H && ((te = j.current) == null || te.updateSubscriptionOptions(U));
      }, [U]);
      const B = E.useRef(U);
      u(() => {
        B.current = U;
      }, [U]);
      const L = E.useCallback(function(H, J = !1) {
        let te;
        return t(() => {
          var ee;
          (ee = j.current) == null || ee.unsubscribe(), j.current = te = C(_(H, {
            subscriptionOptions: B.current,
            forceRefetch: !J
          })), M(H);
        }), te;
      }, [C, _]);
      return E.useEffect(() => () => {
        var H;
        (H = j == null ? void 0 : j.current) == null || H.unsubscribe();
      }, []), E.useEffect(() => {
        T !== Xc && !j.current && L(T, !0);
      }, [T, L]), E.useMemo(() => [L, T], [L, T]);
    }, v = (f, {
      skip: h = !1,
      selectFromResult: y
    } = {}) => {
      const {
        select: S
      } = e.endpoints[g], _ = dv(h ? $r : f, a, l.endpointDefinitions[g], g), C = E.useRef(void 0), T = E.useMemo(() => s([S(_), (L, H) => H, (L) => _], c, {
        memoizeOptions: {
          resultEqualityCheck: Ki
        }
      }), [S, _]), M = E.useMemo(() => y ? s([T], y, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : T, [T, y]), j = r((L) => M(L, C.current), Ki), U = o(), B = T(U.getState(), C.current);
      return uP(() => {
        C.current = B;
      }, [B]), j;
    };
    return {
      useQueryState: v,
      useQuerySubscription: w,
      useLazyQuerySubscription: x,
      useLazyQuery(f) {
        const [h, y] = x(f), S = v(y, {
          ...f,
          skip: y === Xc
        }), _ = E.useMemo(() => ({
          lastArg: y
        }), [y]);
        return E.useMemo(() => [h, S, _], [h, S, _]);
      },
      useQuery(f, h) {
        const y = w(f, h), S = v(f, {
          selectFromResult: f === $r || h != null && h.skip ? void 0 : cP,
          ...h
        }), {
          data: _,
          status: C,
          isLoading: T,
          isSuccess: M,
          isError: j,
          error: U
        } = S;
        return E.useDebugValue({
          data: _,
          status: C,
          isLoading: T,
          isSuccess: M,
          isError: j,
          error: U
        }), E.useMemo(() => ({
          ...S,
          ...y
        }), [S, y]);
      }
    };
  }
  function m(g) {
    return ({
      selectFromResult: w,
      fixedCacheKey: x
    } = {}) => {
      const {
        select: v,
        initiate: f
      } = e.endpoints[g], h = n(), [y, S] = E.useState();
      E.useEffect(() => () => {
        y != null && y.arg.fixedCacheKey || y == null || y.reset();
      }, [y]);
      const _ = E.useCallback(function(P) {
        const A = h(f(P, {
          fixedCacheKey: x
        }));
        return S(A), A;
      }, [h, f, x]), {
        requestId: C
      } = y || {}, T = E.useMemo(() => v({
        fixedCacheKey: x,
        requestId: y == null ? void 0 : y.requestId
      }), [x, y, v]), M = E.useMemo(() => w ? s([T], w) : T, [w, T]), j = r(M, Ki), U = x == null ? y == null ? void 0 : y.arg.originalArgs : void 0, B = E.useCallback(() => {
        t(() => {
          y && S(void 0), x && h(e.internalActions.removeMutationResult({
            requestId: C,
            fixedCacheKey: x
          }));
        });
      }, [h, x, y, C]), {
        endpointName: L,
        data: H,
        status: J,
        isLoading: te,
        isSuccess: ee,
        isError: N,
        error: Q
      } = j;
      E.useDebugValue({
        endpointName: L,
        data: H,
        status: J,
        isLoading: te,
        isSuccess: ee,
        isError: N,
        error: Q
      });
      const W = E.useMemo(() => ({
        ...j,
        originalArgs: U,
        reset: B
      }), [j, U, B]);
      return E.useMemo(() => [_, W], [_, W]);
    };
  }
}
var fP = /* @__PURE__ */ Symbol(), pP = ({
  batch: e = Z_,
  hooks: t = {
    useDispatch: Vp,
    useSelector: Bp,
    useStore: V0
  },
  createSelector: n = Kp,
  unstable__sideEffectsInRender: r = !1,
  ...o
} = {}) => ({
  name: fP,
  init(i, {
    serializeQueryArgs: s
  }, a) {
    const l = i, {
      buildQueryHooks: u,
      buildMutationHook: c,
      usePrefetch: p
    } = dP({
      api: i,
      moduleOptions: {
        batch: e,
        hooks: t,
        unstable__sideEffectsInRender: r,
        createSelector: n
      },
      serializeQueryArgs: s,
      context: a
    });
    return ka(l, {
      usePrefetch: p
    }), ka(a, {
      batch: e
    }), {
      injectEndpoint(d, m) {
        if (tP(m)) {
          const {
            useQuery: g,
            useLazyQuery: w,
            useLazyQuerySubscription: x,
            useQueryState: v,
            useQuerySubscription: f
          } = u(d);
          ka(l.endpoints[d], {
            useQuery: g,
            useLazyQuery: w,
            useLazyQuerySubscription: x,
            useQueryState: v,
            useQuerySubscription: f
          }), i[`use${Yc(d)}Query`] = g, i[`useLazy${Yc(d)}Query`] = w;
        } else if (nP(m)) {
          const g = c(d);
          ka(l.endpoints[d], {
            useMutation: g
          }), i[`use${Yc(d)}Mutation`] = g;
        }
      }
    };
  }
}), bx = /* @__PURE__ */ VA(eP(), pP()), rt = [];
for (var ed = 0; ed < 256; ++ed)
  rt.push((ed + 256).toString(16).slice(1));
function hP(e, t = 0) {
  return (rt[e[t + 0]] + rt[e[t + 1]] + rt[e[t + 2]] + rt[e[t + 3]] + "-" + rt[e[t + 4]] + rt[e[t + 5]] + "-" + rt[e[t + 6]] + rt[e[t + 7]] + "-" + rt[e[t + 8]] + rt[e[t + 9]] + "-" + rt[e[t + 10]] + rt[e[t + 11]] + rt[e[t + 12]] + rt[e[t + 13]] + rt[e[t + 14]] + rt[e[t + 15]]).toLowerCase();
}
var _a, mP = new Uint8Array(16);
function gP() {
  if (!_a && (_a = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !_a))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return _a(mP);
}
var vP = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const fv = {
  randomUUID: vP
};
function yP(e, t, n) {
  if (fv.randomUUID && !t && !e)
    return fv.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || gP)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, hP(r);
}
function Ex(e, t) {
  return async function(r) {
    const o = yP(), i = wP(o);
    return t(o, r, e), i;
  };
}
async function wP(e) {
  return new Promise((t, n) => {
    function r(o) {
      const { command: i, payload: s } = o.data;
      i === "showHttpResponse" && s.id === e ? (window.removeEventListener("message", r), t([s.response, void 0])) : i === "showHttpError" && s.id === e && (window.removeEventListener("message", r), t([void 0, s.error]));
    }
    window.addEventListener("message", r);
  });
}
const xP = {}, Tx = hn({
  name: "http-client",
  initialState: xP,
  reducers: {
    sendHttpRequest: (e, t) => {
    }
  }
}), { sendHttpRequest: Ih } = Tx.actions, SP = Tx.reducer, Kl = bx({
  reducerPath: "freemiumdApi",
  baseQuery: kP,
  endpoints: (e) => ({
    getSubscription: e.query({
      query: (t) => ({
        path: `subscription?token=${encodeURIComponent(t)}`
      })
    })
  })
});
async function kP(e, { signal: t, dispatch: n, getState: r }, o) {
  const i = `https://stateless.42crunch.com/api/v1/anon/${e.path}`, s = Ex(
    { https: { rejectUnauthorized: !0 } },
    (u, c, p) => n(Ih({ id: u, request: c, config: p }))
  ), [a, l] = await s({
    url: i,
    method: "get",
    headers: {
      Accept: "application/json"
    }
  });
  return l !== void 0 ? { error: l } : a.statusCode !== 200 ? { error: { message: a.body, code: a.statusCode } } : { data: JSON.parse(a.body) };
}
const { useGetSubscriptionQuery: _P } = Kl;
function zf({ progress: e, label: t }) {
  const n = Math.ceil(e * 100), r = t !== void 0 ? t : `${n}%`;
  return /* @__PURE__ */ k.jsxs(CP, { children: [
    /* @__PURE__ */ k.jsx(bP, { children: r }),
    /* @__PURE__ */ k.jsx(EP, { progress: e, children: r })
  ] });
}
const CP = ae.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${q.computedTwo});
  border: 1px solid var(${q.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, bP = ae.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${q.computedOne});
  color: var(${q.foreground});
  border-radius: 6px;
`, EP = ae.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(${q.buttonForeground});
  background-color: var(${q.buttonBackground});
  clip-path: inset(0 ${({ progress: e }) => 100 - e * 100}% 0 0);
  transition: clip-path 0.3s linear;
`, pv = ae.button`
  cursor: pointer;
  background-color: var(${q.buttonBackground});
  color: var(${q.buttonForeground});
  border: 1px solid var(${q.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${q.focusBorder});
  }
`;
var Bf = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(t);
  })(pi, function(n) {
    function r(P, A) {
      P.super_ = A, P.prototype = Object.create(A.prototype, { constructor: { value: P, enumerable: !1, writable: !0, configurable: !0 } });
    }
    function o(P, A) {
      Object.defineProperty(this, "kind", { value: P, enumerable: !0 }), A && A.length && Object.defineProperty(this, "path", { value: A, enumerable: !0 });
    }
    function i(P, A, b) {
      i.super_.call(this, "E", P), Object.defineProperty(this, "lhs", { value: A, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: b, enumerable: !0 });
    }
    function s(P, A) {
      s.super_.call(this, "N", P), Object.defineProperty(this, "rhs", { value: A, enumerable: !0 });
    }
    function a(P, A) {
      a.super_.call(this, "D", P), Object.defineProperty(this, "lhs", { value: A, enumerable: !0 });
    }
    function l(P, A, b) {
      l.super_.call(this, "A", P), Object.defineProperty(this, "index", { value: A, enumerable: !0 }), Object.defineProperty(this, "item", { value: b, enumerable: !0 });
    }
    function u(P, A, b) {
      var O = P.slice(A + 1 || P.length);
      return P.length = A < 0 ? P.length + A : A, P.push.apply(P, O), P;
    }
    function c(P) {
      var A = typeof P > "u" ? "undefined" : J(P);
      return A !== "object" ? A : P === Math ? "math" : P === null ? "null" : Array.isArray(P) ? "array" : Object.prototype.toString.call(P) === "[object Date]" ? "date" : typeof P.toString == "function" && /^\/.*\//.test(P.toString()) ? "regexp" : "object";
    }
    function p(P, A, b, O, $, I, Y) {
      $ = $ || [], Y = Y || [];
      var V = $.slice(0);
      if (typeof I < "u") {
        if (O) {
          if (typeof O == "function" && O(V, I)) return;
          if ((typeof O > "u" ? "undefined" : J(O)) === "object") {
            if (O.prefilter && O.prefilter(V, I)) return;
            if (O.normalize) {
              var fe = O.normalize(V, I, P, A);
              fe && (P = fe[0], A = fe[1]);
            }
          }
        }
        V.push(I);
      }
      c(P) === "regexp" && c(A) === "regexp" && (P = P.toString(), A = A.toString());
      var ce = typeof P > "u" ? "undefined" : J(P), de = typeof A > "u" ? "undefined" : J(A), oe = ce !== "undefined" || Y && Y[Y.length - 1].lhs && Y[Y.length - 1].lhs.hasOwnProperty(I), ye = de !== "undefined" || Y && Y[Y.length - 1].rhs && Y[Y.length - 1].rhs.hasOwnProperty(I);
      if (!oe && ye) b(new s(V, A));
      else if (!ye && oe) b(new a(V, P));
      else if (c(P) !== c(A)) b(new i(V, P, A));
      else if (c(P) === "date" && P - A !== 0) b(new i(V, P, A));
      else if (ce === "object" && P !== null && A !== null) if (Y.filter(function(pe) {
        return pe.lhs === P;
      }).length) P !== A && b(new i(V, P, A));
      else {
        if (Y.push({ lhs: P, rhs: A }), Array.isArray(P)) {
          var he;
          for (P.length, he = 0; he < P.length; he++) he >= A.length ? b(new l(V, he, new a(void 0, P[he]))) : p(P[he], A[he], b, O, V, he, Y);
          for (; he < A.length; ) b(new l(V, he, new s(void 0, A[he++])));
        } else {
          var ge = Object.keys(P), _e = Object.keys(A);
          ge.forEach(function(pe, Ae) {
            var R = _e.indexOf(pe);
            R >= 0 ? (p(P[pe], A[pe], b, O, V, pe, Y), _e = u(_e, R)) : p(P[pe], void 0, b, O, V, pe, Y);
          }), _e.forEach(function(pe) {
            p(void 0, A[pe], b, O, V, pe, Y);
          });
        }
        Y.length = Y.length - 1;
      }
      else P !== A && (ce === "number" && isNaN(P) && isNaN(A) || b(new i(V, P, A)));
    }
    function d(P, A, b, O) {
      return O = O || [], p(P, A, function($) {
        $ && O.push($);
      }, b), O.length ? O : void 0;
    }
    function m(P, A, b) {
      if (b.path && b.path.length) {
        var O, $ = P[A], I = b.path.length - 1;
        for (O = 0; O < I; O++) $ = $[b.path[O]];
        switch (b.kind) {
          case "A":
            m($[b.path[O]], b.index, b.item);
            break;
          case "D":
            delete $[b.path[O]];
            break;
          case "E":
          case "N":
            $[b.path[O]] = b.rhs;
        }
      } else switch (b.kind) {
        case "A":
          m(P[A], b.index, b.item);
          break;
        case "D":
          P = u(P, A);
          break;
        case "E":
        case "N":
          P[A] = b.rhs;
      }
      return P;
    }
    function g(P, A, b) {
      if (P && A && b && b.kind) {
        for (var O = P, $ = -1, I = b.path ? b.path.length - 1 : 0; ++$ < I; ) typeof O[b.path[$]] > "u" && (O[b.path[$]] = typeof b.path[$] == "number" ? [] : {}), O = O[b.path[$]];
        switch (b.kind) {
          case "A":
            m(b.path ? O[b.path[$]] : O, b.index, b.item);
            break;
          case "D":
            delete O[b.path[$]];
            break;
          case "E":
          case "N":
            O[b.path[$]] = b.rhs;
        }
      }
    }
    function w(P, A, b) {
      if (b.path && b.path.length) {
        var O, $ = P[A], I = b.path.length - 1;
        for (O = 0; O < I; O++) $ = $[b.path[O]];
        switch (b.kind) {
          case "A":
            w($[b.path[O]], b.index, b.item);
            break;
          case "D":
            $[b.path[O]] = b.lhs;
            break;
          case "E":
            $[b.path[O]] = b.lhs;
            break;
          case "N":
            delete $[b.path[O]];
        }
      } else switch (b.kind) {
        case "A":
          w(P[A], b.index, b.item);
          break;
        case "D":
          P[A] = b.lhs;
          break;
        case "E":
          P[A] = b.lhs;
          break;
        case "N":
          P = u(P, A);
      }
      return P;
    }
    function x(P, A, b) {
      if (P && A && b && b.kind) {
        var O, $, I = P;
        for ($ = b.path.length - 1, O = 0; O < $; O++) typeof I[b.path[O]] > "u" && (I[b.path[O]] = {}), I = I[b.path[O]];
        switch (b.kind) {
          case "A":
            w(I[b.path[O]], b.index, b.item);
            break;
          case "D":
            I[b.path[O]] = b.lhs;
            break;
          case "E":
            I[b.path[O]] = b.lhs;
            break;
          case "N":
            delete I[b.path[O]];
        }
      }
    }
    function v(P, A, b) {
      if (P && A) {
        var O = function($) {
          b && !b(P, A, $) || g(P, A, $);
        };
        p(P, A, O);
      }
    }
    function f(P) {
      return "color: " + N[P].color + "; font-weight: bold";
    }
    function h(P) {
      var A = P.kind, b = P.path, O = P.lhs, $ = P.rhs, I = P.index, Y = P.item;
      switch (A) {
        case "E":
          return [b.join("."), O, "→", $];
        case "N":
          return [b.join("."), $];
        case "D":
          return [b.join(".")];
        case "A":
          return [b.join(".") + "[" + I + "]", Y];
        default:
          return [];
      }
    }
    function y(P, A, b, O) {
      var $ = d(P, A);
      try {
        O ? b.groupCollapsed("diff") : b.group("diff");
      } catch {
        b.log("diff");
      }
      $ ? $.forEach(function(I) {
        var Y = I.kind, V = h(I);
        b.log.apply(b, ["%c " + N[Y].text, f(Y)].concat(te(V)));
      }) : b.log("—— no diff ——");
      try {
        b.groupEnd();
      } catch {
        b.log("—— diff end —— ");
      }
    }
    function S(P, A, b, O) {
      switch (typeof P > "u" ? "undefined" : J(P)) {
        case "object":
          return typeof P[O] == "function" ? P[O].apply(P, te(b)) : P[O];
        case "function":
          return P(A);
        default:
          return P;
      }
    }
    function _(P) {
      var A = P.timestamp, b = P.duration;
      return function(O, $, I) {
        var Y = ["action"];
        return Y.push("%c" + String(O.type)), A && Y.push("%c@ " + $), b && Y.push("%c(in " + I.toFixed(2) + " ms)"), Y.join(" ");
      };
    }
    function C(P, A) {
      var b = A.logger, O = A.actionTransformer, $ = A.titleFormatter, I = $ === void 0 ? _(A) : $, Y = A.collapsed, V = A.colors, fe = A.level, ce = A.diff, de = typeof A.titleFormatter > "u";
      P.forEach(function(oe, ye) {
        var he = oe.started, ge = oe.startedTime, _e = oe.action, pe = oe.prevState, Ae = oe.error, R = oe.took, D = oe.nextState, z = P[ye + 1];
        z && (D = z.prevState, R = z.started - he);
        var Z = O(_e), K = typeof Y == "function" ? Y(function() {
          return D;
        }, _e, oe) : Y, F = L(ge), re = V.title ? "color: " + V.title(Z) + ";" : "", ke = ["color: gray; font-weight: lighter;"];
        ke.push(re), A.timestamp && ke.push("color: gray; font-weight: lighter;"), A.duration && ke.push("color: gray; font-weight: lighter;");
        var Ee = I(Z, F, R);
        try {
          K ? V.title && de ? b.groupCollapsed.apply(b, ["%c " + Ee].concat(ke)) : b.groupCollapsed(Ee) : V.title && de ? b.group.apply(b, ["%c " + Ee].concat(ke)) : b.group(Ee);
        } catch {
          b.log(Ee);
        }
        var Ne = S(fe, Z, [pe], "prevState"), dn = S(fe, Z, [Z], "action"), ci = S(fe, Z, [Ae, pe], "error"), Rr = S(fe, Z, [D], "nextState");
        if (Ne) if (V.prevState) {
          var di = "color: " + V.prevState(pe) + "; font-weight: bold";
          b[Ne]("%c prev state", di, pe);
        } else b[Ne]("prev state", pe);
        if (dn) if (V.action) {
          var Ju = "color: " + V.action(Z) + "; font-weight: bold";
          b[dn]("%c action    ", Ju, Z);
        } else b[dn]("action    ", Z);
        if (Ae && ci) if (V.error) {
          var qs = "color: " + V.error(Ae, pe) + "; font-weight: bold;";
          b[ci]("%c error     ", qs, Ae);
        } else b[ci]("error     ", Ae);
        if (Rr) if (V.nextState) {
          var ec = "color: " + V.nextState(D) + "; font-weight: bold";
          b[Rr]("%c next state", ec, D);
        } else b[Rr]("next state", D);
        ce && y(pe, D, b, K);
        try {
          b.groupEnd();
        } catch {
          b.log("—— log end ——");
        }
      });
    }
    function T() {
      var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, A = Object.assign({}, Q, P), b = A.logger, O = A.stateTransformer, $ = A.errorTransformer, I = A.predicate, Y = A.logErrors, V = A.diffPredicate;
      if (typeof b > "u") return function() {
        return function(ce) {
          return function(de) {
            return ce(de);
          };
        };
      };
      if (P.getState && P.dispatch) return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
        return function(ce) {
          return function(de) {
            return ce(de);
          };
        };
      };
      var fe = [];
      return function(ce) {
        var de = ce.getState;
        return function(oe) {
          return function(ye) {
            if (typeof I == "function" && !I(de, ye)) return oe(ye);
            var he = {};
            fe.push(he), he.started = H.now(), he.startedTime = /* @__PURE__ */ new Date(), he.prevState = O(de()), he.action = ye;
            var ge = void 0;
            if (Y) try {
              ge = oe(ye);
            } catch (pe) {
              he.error = $(pe);
            }
            else ge = oe(ye);
            he.took = H.now() - he.started, he.nextState = O(de());
            var _e = A.diff && typeof V == "function" ? V(de, ye) : A.diff;
            if (C(fe, Object.assign({}, A, { diff: _e })), fe.length = 0, he.error) throw he.error;
            return ge;
          };
        };
      };
    }
    var M, j, U = function(P, A) {
      return new Array(A + 1).join(P);
    }, B = function(P, A) {
      return U("0", A - P.toString().length) + P;
    }, L = function(P) {
      return B(P.getHours(), 2) + ":" + B(P.getMinutes(), 2) + ":" + B(P.getSeconds(), 2) + "." + B(P.getMilliseconds(), 3);
    }, H = typeof performance < "u" && performance !== null && typeof performance.now == "function" ? performance : Date, J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(P) {
      return typeof P;
    } : function(P) {
      return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
    }, te = function(P) {
      if (Array.isArray(P)) {
        for (var A = 0, b = Array(P.length); A < P.length; A++) b[A] = P[A];
        return b;
      }
      return Array.from(P);
    }, ee = [];
    M = (typeof pi > "u" ? "undefined" : J(pi)) === "object" && pi ? pi : typeof window < "u" ? window : {}, j = M.DeepDiff, j && ee.push(function() {
      typeof j < "u" && M.DeepDiff === d && (M.DeepDiff = j, j = void 0);
    }), r(i, o), r(s, o), r(a, o), r(l, o), Object.defineProperties(d, { diff: { value: d, enumerable: !0 }, observableDiff: { value: p, enumerable: !0 }, applyDiff: { value: v, enumerable: !0 }, applyChange: { value: g, enumerable: !0 }, revertChange: { value: x, enumerable: !0 }, isConflict: { value: function() {
      return typeof j < "u";
    }, enumerable: !0 }, noConflict: { value: function() {
      return ee && (ee.forEach(function(P) {
        P();
      }), ee = null), d;
    }, enumerable: !0 } });
    var N = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } }, Q = { level: "log", logger: console, logErrors: !0, collapsed: void 0, predicate: void 0, duration: !1, timestamp: !0, stateTransformer: function(P) {
      return P;
    }, actionTransformer: function(P) {
      return P;
    }, errorTransformer: function(P) {
      return P;
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
      var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, A = P.dispatch, b = P.getState;
      return typeof A == "function" || typeof b == "function" ? T()({ dispatch: A, getState: b }) : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
    };
    n.defaults = Q, n.createLogger = T, n.logger = W, n.default = W, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(Bf, Bf.exports);
var TP = Bf.exports;
const RP = /* @__PURE__ */ As(TP), Vf = bx({
  reducerPath: "platformApi",
  baseQuery: AP,
  endpoints: (e) => ({
    getTags: e.query({
      query: () => "api/v2/tags"
    })
  })
});
async function AP(e, { signal: t, dispatch: n, getState: r }, o) {
  const { config: i } = r(), { platformUrl: s, platformApiToken: a } = i.data, l = Ex(
    { https: { rejectUnauthorized: !0 } },
    (p, d, m) => n(Ih({ id: p, request: d, config: m }))
  ), [u, c] = await l({
    url: `${s}/${e}`,
    method: "get",
    headers: {
      Accept: "application/json",
      "X-API-KEY": a,
      "X-42C-IDE": "true"
    }
  });
  return c !== void 0 ? { error: c } : { data: JSON.parse(u.body) };
}
const PP = {
  theme: lb,
  config: lR,
  client: SP,
  [Vf.reducerPath]: Vf.reducer,
  [Kl.reducerPath]: Kl.reducer
}, IP = {
  changeTheme: ab,
  loadConfig: eR,
  showPlatformConnectionTest: tR,
  showOverlordConnectionTest: nR,
  showScandManagerConnectionTest: rR,
  showCliTest: sR,
  showCliDownload: aR,
  showHttpError: () => null,
  showHttpResponse: () => null
}, OP = (e, t) => {
  const n = IC({
    reducer: PP,
    middleware: (r) => r().prepend(e.middleware).concat(RP, Vf.middleware, Kl.middleware),
    preloadedState: {
      theme: t
    }
  });
  return MA(n.dispatch), n;
}, jP = () => Vp();
function MP({ token: e }) {
  const { data: t, error: n, isLoading: r } = _P(e.trim(), {
    refetchOnFocus: !0,
    pollingInterval: 6e5
    // refresh every 10 minutes
  }), o = jP();
  return n ? /* @__PURE__ */ k.jsx(td, { children: /* @__PURE__ */ k.jsxs(qu, { message: "Failed to load subscription status", children: [
    n.code,
    " ",
    n.message
  ] }) }) : r || t === void 0 ? /* @__PURE__ */ k.jsx(td, { children: /* @__PURE__ */ k.jsx(Lo, { message: "Loading subscription status..." }) }) : /* @__PURE__ */ k.jsxs(td, { children: [
    /* @__PURE__ */ k.jsxs(Ca, { children: [
      /* @__PURE__ */ k.jsxs(ji, { children: [
        "Subscription type: ",
        t == null ? void 0 : t.subscriptionKind
      ] }),
      /* @__PURE__ */ k.jsx(Mi, { children: "Upgrade or manage your subscription plan" }),
      /* @__PURE__ */ k.jsxs(Di, { children: [
        t.subscriptionKind === "free" && /* @__PURE__ */ k.jsx(
          pv,
          {
            onClick: (i) => {
              i.preventDefault(), i.stopPropagation(), o(
                Rf(
                  `https://42crunch.com/single-user-pricing/?email=${encodeURIComponent(
                    t.userEmail
                  )}`
                )
              );
            },
            children: "Upgrade"
          }
        ),
        t.subscriptionKind !== "free" && /* @__PURE__ */ k.jsx(
          pv,
          {
            onClick: (i) => {
              i.preventDefault(), i.stopPropagation(), o(
                Rf(
                  `https://billing.stripe.com/p/login/3csaGd9xzf5k7n2aEE?prefilled_email=${encodeURIComponent(
                    t.userEmail
                  )}`
                )
              );
            },
            children: "Manage"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ k.jsxs(Ca, { children: [
      /* @__PURE__ */ k.jsx(ji, { children: "Subscription date" }),
      /* @__PURE__ */ k.jsx(Mi, { children: "Date when your monthly allowance started" }),
      /* @__PURE__ */ k.jsx(Di, { children: t.periodStart })
    ] }),
    /* @__PURE__ */ k.jsxs(Ca, { children: [
      /* @__PURE__ */ k.jsx(ji, { children: "Audit" }),
      /* @__PURE__ */ k.jsx(Mi, { children: "Monthly operation audits left" }),
      /* @__PURE__ */ k.jsxs(Di, { children: [
        t.monthlyAudit - t.currentAuditUsage,
        " / ",
        t.monthlyAudit
      ] }),
      /* @__PURE__ */ k.jsx(zf, { label: "", progress: 1 - t.currentAuditUsage / t.monthlyAudit })
    ] }),
    /* @__PURE__ */ k.jsxs(Ca, { children: [
      /* @__PURE__ */ k.jsx(ji, { children: "Scan" }),
      /* @__PURE__ */ k.jsx(Mi, { children: "Monthly operation scans left" }),
      /* @__PURE__ */ k.jsxs(Di, { children: [
        t.monthlyScan - t.currentScanUsage,
        " / ",
        t.monthlyScan
      ] }),
      /* @__PURE__ */ k.jsx(zf, { label: "", progress: 1 - t.currentScanUsage / t.monthlyScan })
    ] })
  ] });
}
const td = ae.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, ji = ae.div`
  font-weight: 700;
`, Mi = ae.div`
  font-weight: 400;
  font-size: 90%;
`, Di = ae.div`
  font-weight: 600;
  font-size: 110%;
  > div {
    font-size: 80%;
  }
`, Ca = ae.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 4px;
  padding-top: 8px;
  border-top: 1px solid var(${q.border});
  > ${ji} {
    grid-column: 1;
    grid-row: 1;
  }
  > ${Mi} {
    grid-column: 1;
    grid-row: 2;
  }
  > ${Di} {
    grid-column: 2;
    grid-row: span 2;
    align-self: center;
    justify-self: end;
  }
  > :nth-child(4) {
    grid-column: span 2;
    grid-row: 3;
  }
`;
function DP() {
  const e = Qs(), {
    platformConnectionTestResult: t,
    waitingForPlatformConnectionTest: n
  } = Ku((i) => i.config), r = pr({ name: "platformAuthType" }), o = pr({ name: "anondToken" });
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsx(Zs, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ k.jsxs(Ks, { children: [
      /* @__PURE__ */ k.jsx(
        xA,
        {
          name: "platformAuthType",
          options: [
            { value: "anond-token", label: "Freemium token" },
            { value: "api-token", label: "Platform IDE token" }
          ]
        }
      ),
      r === "anond-token" && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
        /* @__PURE__ */ k.jsx(wx, { label: "Freemium token", name: "anondToken" }),
        o !== "" && /* @__PURE__ */ k.jsx(MP, { token: o })
      ] }),
      r === "api-token" && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
        /* @__PURE__ */ k.jsx(It, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ k.jsx(It, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ k.jsxs(es, { children: [
          /* @__PURE__ */ k.jsx(
            Ji,
            {
              label: "Test connection",
              waiting: n,
              onClick: (i) => {
                e(zw()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ k.jsx(bh, { result: t })
        ] })
      ] })
    ] })
  ] });
}
const NP = Cr({
  platformAuthType: Ch(["anond-token", "api-token"]),
  platformUrl: Nn().url().startsWith("https://"),
  anondToken: Nn().trim(),
  platformApiToken: Nn().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(Xw(""))
}), nd = {
  id: "platform-connection",
  label: "Connection",
  schema: NP,
  form: DP
};
function Ni(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function Be() {
  return Be = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Be.apply(null, arguments);
}
var Rx = { exports: {} }, $P = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", FP = $P, LP = FP;
function Ax() {
}
function Px() {
}
Px.resetWarningCache = Ax;
var zP = function() {
  function e(r, o, i, s, a, l) {
    if (l !== LP) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw u.name = "Invariant Violation", u;
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
    checkPropTypes: Px,
    resetWarningCache: Ax
  };
  return n.PropTypes = n, n;
};
Rx.exports = zP();
var BP = Rx.exports;
const ve = /* @__PURE__ */ As(BP), hv = (e) => typeof e == "object" && e != null && e.nodeType === 1, mv = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", rd = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return mv(n.overflowY, t) || mv(n.overflowX, t) || ((r) => {
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
}, ba = (e, t, n, r, o, i, s, a) => i < e && s > t || i > e && s < t ? 0 : i <= e && a <= n || s >= t && a >= n ? i - e - r : s > t && a < n || i < e && a > n ? s - t + o : 0, VP = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, UP = (e, t) => {
  var n, r, o, i;
  if (typeof document > "u") return [];
  const { scrollMode: s, block: a, inline: l, boundary: u, skipOverflowHiddenElements: c } = t, p = typeof u == "function" ? u : (te) => te !== u;
  if (!hv(e)) throw new TypeError("Invalid target");
  const d = document.scrollingElement || document.documentElement, m = [];
  let g = e;
  for (; hv(g) && p(g); ) {
    if (g = VP(g), g === d) {
      m.push(g);
      break;
    }
    g != null && g === document.body && rd(g) && !rd(document.documentElement) || g != null && rd(g, c) && m.push(g);
  }
  const w = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, x = (i = (o = window.visualViewport) == null ? void 0 : o.height) != null ? i : innerHeight, { scrollX: v, scrollY: f } = window, { height: h, width: y, top: S, right: _, bottom: C, left: T } = e.getBoundingClientRect(), { top: M, right: j, bottom: U, left: B } = ((te) => {
    const ee = window.getComputedStyle(te);
    return { top: parseFloat(ee.scrollMarginTop) || 0, right: parseFloat(ee.scrollMarginRight) || 0, bottom: parseFloat(ee.scrollMarginBottom) || 0, left: parseFloat(ee.scrollMarginLeft) || 0 };
  })(e);
  let L = a === "start" || a === "nearest" ? S - M : a === "end" ? C + U : S + h / 2 - M + U, H = l === "center" ? T + y / 2 - B + j : l === "end" ? _ + j : T - B;
  const J = [];
  for (let te = 0; te < m.length; te++) {
    const ee = m[te], { height: N, width: Q, top: W, right: P, bottom: A, left: b } = ee.getBoundingClientRect();
    if (s === "if-needed" && S >= 0 && T >= 0 && C <= x && _ <= w && S >= W && C <= A && T >= b && _ <= P) return J;
    const O = getComputedStyle(ee), $ = parseInt(O.borderLeftWidth, 10), I = parseInt(O.borderTopWidth, 10), Y = parseInt(O.borderRightWidth, 10), V = parseInt(O.borderBottomWidth, 10);
    let fe = 0, ce = 0;
    const de = "offsetWidth" in ee ? ee.offsetWidth - ee.clientWidth - $ - Y : 0, oe = "offsetHeight" in ee ? ee.offsetHeight - ee.clientHeight - I - V : 0, ye = "offsetWidth" in ee ? ee.offsetWidth === 0 ? 0 : Q / ee.offsetWidth : 0, he = "offsetHeight" in ee ? ee.offsetHeight === 0 ? 0 : N / ee.offsetHeight : 0;
    if (d === ee) fe = a === "start" ? L : a === "end" ? L - x : a === "nearest" ? ba(f, f + x, x, I, V, f + L, f + L + h, h) : L - x / 2, ce = l === "start" ? H : l === "center" ? H - w / 2 : l === "end" ? H - w : ba(v, v + w, w, $, Y, v + H, v + H + y, y), fe = Math.max(0, fe + f), ce = Math.max(0, ce + v);
    else {
      fe = a === "start" ? L - W - I : a === "end" ? L - A + V + oe : a === "nearest" ? ba(W, A, N, I, V + oe, L, L + h, h) : L - (W + N / 2) + oe / 2, ce = l === "start" ? H - b - $ : l === "center" ? H - (b + Q / 2) + de / 2 : l === "end" ? H - P + Y + de : ba(b, P, Q, $, Y + de, H, H + y, y);
      const { scrollLeft: ge, scrollTop: _e } = ee;
      fe = he === 0 ? 0 : Math.max(0, Math.min(_e + fe / he, ee.scrollHeight - N / he + oe)), ce = ye === 0 ? 0 : Math.max(0, Math.min(ge + ce / ye, ee.scrollWidth - Q / ye + de)), L += _e - fe, H += ge - ce;
    }
    J.push({ el: ee, top: fe, left: ce });
  }
  return J;
};
var ti = function() {
  return ti = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, ti.apply(this, arguments);
};
var HP = 0;
function Ix() {
}
function WP(e, t) {
  if (e) {
    var n = UP(e, {
      boundary: t,
      block: "nearest",
      scrollMode: "if-needed"
    });
    n.forEach(function(r) {
      var o = r.el, i = r.top, s = r.left;
      o.scrollTop = i, o.scrollLeft = s;
    });
  }
}
function gv(e, t, n) {
  var r = e === t || t instanceof n.Node && e.contains && e.contains(t);
  return r;
}
function Oh(e, t) {
  var n;
  function r() {
    n && clearTimeout(n);
  }
  function o() {
    for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
      s[a] = arguments[a];
    r(), n = setTimeout(function() {
      n = null, e.apply(void 0, s);
    }, t);
  }
  return o.cancel = r, o;
}
function qn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
      i[s - 1] = arguments[s];
    return t.some(function(a) {
      return a && a.apply(void 0, [r].concat(i)), r.preventDownshiftDefault || r.hasOwnProperty("nativeEvent") && r.nativeEvent.preventDownshiftDefault;
    });
  };
}
function od() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    t.forEach(function(o) {
      typeof o == "function" ? o(r) : o && (o.current = r);
    });
  };
}
function QP() {
  return String(HP++);
}
function KP(e) {
  var t = e.isOpen, n = e.resultCount, r = e.previousResultCount;
  return t ? n ? n !== r ? n + " result" + (n === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function Uf(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(n, r) {
    return n[r] = ZP(t, r) ? t[r] : e[r], n;
  }, {});
}
function ZP(e, t) {
  return e[t] !== void 0;
}
function qP(e) {
  var t = e.key, n = e.keyCode;
  return n >= 37 && n <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
function Ea(e, t, n, r, o) {
  o === void 0 && (o = !1);
  var i = n.length;
  if (i === 0)
    return -1;
  var s = i - 1;
  (typeof e != "number" || e < 0 || e > s) && (e = t > 0 ? -1 : s + 1);
  var a = e + t;
  a < 0 ? a = o ? s : 0 : a > s && (a = o ? 0 : s);
  var l = Zl(a, t < 0, n, r, o);
  return l === -1 ? e >= i ? -1 : e : l;
}
function Zl(e, t, n, r, o) {
  o === void 0 && (o = !1);
  var i = n.length;
  if (t) {
    for (var s = e; s >= 0; s--)
      if (!r(n[s], s))
        return s;
  } else
    for (var a = e; a < i; a++)
      if (!r(n[a], a))
        return a;
  return o ? Zl(t ? i - 1 : 0, t, n, r) : -1;
}
function vv(e, t, n, r) {
  return r === void 0 && (r = !0), n && t.some(function(o) {
    return o && (gv(o, e, n) || r && gv(o, n.document.activeElement, n));
  });
}
var GP = Oh(function(e) {
  Ox(e).textContent = "";
}, 500);
function Ox(e) {
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
function YP(e, t) {
  if (!(!e || !t)) {
    var n = Ox(t);
    n.textContent = e, GP(t);
  }
}
var XP = ["highlightedIndex", "items", "environment"], jx = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function JP(e, t, n) {
  var r = e.props, o = e.type, i = {};
  Object.keys(t).forEach(function(s) {
    eI(s, e, t, n), n[s] !== t[s] && (i[s] = n[s]);
  }), r.onStateChange && Object.keys(i).length && r.onStateChange(Be({
    type: o
  }, i));
}
function eI(e, t, n, r) {
  var o = t.props, i = t.type, s = "on" + jh(e) + "Change";
  o[s] && r[e] !== void 0 && r[e] !== n[e] && o[s](Be({
    type: i
  }, r));
}
function tI(e, t) {
  return t.changes;
}
function nI(e) {
  var t = e.selectedItem, n = e.itemToString;
  return t ? n(t) + " has been selected." : "";
}
var rI = Oh(function(e, t) {
  YP(e(), t);
}, 200), oI = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? E.useLayoutEffect : E.useEffect, iI = "useId" in ue ? function(t) {
  var n = t.id, r = t.labelId, o = t.menuId, i = t.getItemId, s = t.toggleButtonId, a = t.inputId, l = "downshift-" + ue.useId();
  n || (n = l);
  var u = E.useRef({
    labelId: r || n + "-label",
    menuId: o || n + "-menu",
    getItemId: i || function(c) {
      return n + "-item-" + c;
    },
    toggleButtonId: s || n + "-toggle-button",
    inputId: a || n + "-input"
  });
  return u.current;
} : function(t) {
  var n = t.id, r = n === void 0 ? "downshift-" + QP() : n, o = t.labelId, i = t.menuId, s = t.getItemId, a = t.toggleButtonId, l = t.inputId, u = E.useRef({
    labelId: o || r + "-label",
    menuId: i || r + "-menu",
    getItemId: s || function(c) {
      return r + "-item-" + c;
    },
    toggleButtonId: a || r + "-toggle-button",
    inputId: l || r + "-input"
  });
  return u.current;
};
function sI(e, t, n, r) {
  var o, i;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(r);
    o = n[t], i = t;
  } else
    i = t === void 0 ? n.indexOf(e) : t, o = e;
  return [o, i];
}
function aI(e) {
  return /^\S{1}$/.test(e);
}
function jh(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function Mx(e) {
  var t = E.useRef(e);
  return t.current = e, t;
}
function lI(e, t, n, r) {
  var o = E.useRef(), i = E.useRef(), s = E.useCallback(function(m, g) {
    i.current = g, m = Uf(m, g.props);
    var w = e(m, g), x = g.props.stateReducer(m, Be({}, g, {
      changes: w
    }));
    return x;
  }, [e]), a = E.useReducer(s, t, n), l = a[0], u = a[1], c = Mx(t), p = E.useCallback(function(m) {
    return u(Be({
      props: c.current
    }, m));
  }, [c]), d = i.current;
  return E.useEffect(function() {
    var m = Uf(o.current, d == null ? void 0 : d.props), g = d && o.current && !r(m, l);
    g && JP(d, m, l), o.current = l;
  }, [l, d, r]), [l, p];
}
function uI(e, t, n, r) {
  var o = lI(e, t, n, r), i = o[0], s = o[1];
  return [Uf(i, t), s];
}
var Ro = {
  itemToString: function(t) {
    return t ? String(t) : "";
  },
  itemToKey: function(t) {
    return t;
  },
  stateReducer: tI,
  getA11ySelectionMessage: nI,
  scrollIntoView: WP,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function jn(e, t, n) {
  n === void 0 && (n = jx);
  var r = e["default" + jh(t)];
  return r !== void 0 ? r : n[t];
}
function $i(e, t, n) {
  n === void 0 && (n = jx);
  var r = e[t];
  if (r !== void 0)
    return r;
  var o = e["initial" + jh(t)];
  return o !== void 0 ? o : jn(e, t, n);
}
function cI(e) {
  var t = $i(e, "selectedItem"), n = $i(e, "isOpen"), r = $i(e, "highlightedIndex"), o = $i(e, "inputValue");
  return {
    highlightedIndex: r < 0 && t && n ? e.items.findIndex(function(i) {
      return e.itemToKey(i) === e.itemToKey(t);
    }) : r,
    isOpen: n,
    selectedItem: t,
    inputValue: o
  };
}
function ql(e, t, n) {
  var r = e.items, o = e.initialHighlightedIndex, i = e.defaultHighlightedIndex, s = e.itemToKey, a = t.selectedItem, l = t.highlightedIndex;
  return r.length === 0 ? -1 : o !== void 0 && l === o ? o : i !== void 0 ? i : a ? r.findIndex(function(u) {
    return s(a) === s(u);
  }) : n === 0 ? -1 : n < 0 ? r.length - 1 : 0;
}
function dI(e, t, n) {
  var r = E.useRef({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return E.useEffect(function() {
    if (!e)
      return Ix;
    var o = t.map(function(c) {
      return c.current;
    });
    function i() {
      r.current.isTouchEnd = !1, r.current.isMouseDown = !0;
    }
    function s(c) {
      r.current.isMouseDown = !1, vv(c.target, o, e) || n();
    }
    function a() {
      r.current.isTouchEnd = !1, r.current.isTouchMove = !1;
    }
    function l() {
      r.current.isTouchMove = !0;
    }
    function u(c) {
      r.current.isTouchEnd = !0, !r.current.isTouchMove && !vv(c.target, o, e, !1) && n();
    }
    return e.addEventListener("mousedown", i), e.addEventListener("mouseup", s), e.addEventListener("touchstart", a), e.addEventListener("touchmove", l), e.addEventListener("touchend", u), function() {
      e.removeEventListener("mousedown", i), e.removeEventListener("mouseup", s), e.removeEventListener("touchstart", a), e.removeEventListener("touchmove", l), e.removeEventListener("touchend", u);
    };
  }, [e, n]), r.current;
}
var fI = function() {
  return Ix;
};
function yv(e, t, n) {
  var r = n.highlightedIndex, o = n.items, i = n.environment, s = Ni(n, XP), a = Dx();
  E.useEffect(function() {
    a || !(i != null && i.document) || rI(function() {
      return e(Be({
        highlightedIndex: r,
        highlightedItem: o[r],
        resultCount: o.length
      }, s));
    }, i.document);
  }, t);
}
function pI(e) {
  var t = e.highlightedIndex, n = e.isOpen, r = e.itemRefs, o = e.getItemNodeFromIndex, i = e.menuElement, s = e.scrollIntoView, a = E.useRef(!0);
  return oI(function() {
    t < 0 || !n || !Object.keys(r.current).length || (a.current === !1 ? a.current = !0 : s(o(t), i));
  }, [t]), a;
}
function wv(e, t, n) {
  var r, o = ((r = e.items) == null ? void 0 : r.length) && t >= 0;
  return Be({
    isOpen: !1,
    highlightedIndex: -1
  }, o && Be({
    selectedItem: e.items[t],
    isOpen: jn(e, "isOpen"),
    highlightedIndex: jn(e, "highlightedIndex")
  }, n));
}
function hI(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
function Dx() {
  var e = ue.useRef(!0);
  return ue.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
var Nx = {
  environment: ve.shape({
    addEventListener: ve.func.isRequired,
    removeEventListener: ve.func.isRequired,
    document: ve.shape({
      createElement: ve.func.isRequired,
      getElementById: ve.func.isRequired,
      activeElement: ve.any.isRequired,
      body: ve.any.isRequired
    }).isRequired,
    Node: ve.func.isRequired
  }),
  itemToString: ve.func,
  itemToKey: ve.func,
  stateReducer: ve.func
}, $x = Be({}, Nx, {
  getA11yStatusMessage: ve.func,
  highlightedIndex: ve.number,
  defaultHighlightedIndex: ve.number,
  initialHighlightedIndex: ve.number,
  isOpen: ve.bool,
  defaultIsOpen: ve.bool,
  initialIsOpen: ve.bool,
  selectedItem: ve.any,
  initialSelectedItem: ve.any,
  defaultSelectedItem: ve.any,
  id: ve.string,
  labelId: ve.string,
  menuId: ve.string,
  getItemId: ve.func,
  toggleButtonId: ve.string,
  onSelectedItemChange: ve.func,
  onHighlightedIndexChange: ve.func,
  onStateChange: ve.func,
  onIsOpenChange: ve.func,
  scrollIntoView: ve.func
});
function mI(e, t, n) {
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
        highlightedIndex: e.isOpen ? -1 : ql(o, e, 0)
      };
      break;
    case n.FunctionOpenMenu:
      i = {
        isOpen: !0,
        highlightedIndex: ql(o, e, 0)
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
        highlightedIndex: jn(o, "highlightedIndex"),
        isOpen: jn(o, "isOpen"),
        selectedItem: jn(o, "selectedItem"),
        inputValue: jn(o, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return Be({}, e, i);
}
function gI(e) {
  for (var t = e.keysSoFar, n = e.highlightedIndex, r = e.items, o = e.itemToString, i = e.isItemDisabled, s = t.toLowerCase(), a = 0; a < r.length; a++) {
    var l = (a + n + (t.length < 2 ? 1 : 0)) % r.length, u = r[l];
    if (u !== void 0 && o(u).toLowerCase().startsWith(s) && !i(u, l))
      return l;
  }
  return n;
}
ti(ti({}, $x), { items: ve.array.isRequired, isItemDisabled: ve.func, getA11ySelectionMessage: ve.func });
function vI(e) {
  var t = e.isOpen, n = e.resultCount, r = e.previousResultCount;
  return t ? n ? n !== r ? "".concat(n, " result").concat(n === 1 ? " is" : "s are", " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.") : "" : "No results are available." : "";
}
var yI = ti(ti({}, Ro), { getA11yStatusMessage: vI, isItemDisabled: function() {
  return !1;
} }), Va = 0, Mh = 1, Dh = 2, Gl = 3, Nh = 4, $h = 5, Fh = 6, Lh = 7, zh = 8, Bh = 9, Vh = 10, Yl = 11, Fx = 12, Lx = 13, Uh = 14, zx = 15, Bx = 16, Vx = 17, Ux = 18, Hh = 19, Hf = 20, Hx = 21, Wx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: Va,
  ToggleButtonKeyDownArrowDown: Mh,
  ToggleButtonKeyDownArrowUp: Dh,
  ToggleButtonKeyDownCharacter: Gl,
  ToggleButtonKeyDownEscape: Nh,
  ToggleButtonKeyDownHome: $h,
  ToggleButtonKeyDownEnd: Fh,
  ToggleButtonKeyDownEnter: Lh,
  ToggleButtonKeyDownSpaceButton: zh,
  ToggleButtonKeyDownPageUp: Bh,
  ToggleButtonKeyDownPageDown: Vh,
  ToggleButtonBlur: Yl,
  MenuMouseLeave: Fx,
  ItemMouseMove: Lx,
  ItemClick: Uh,
  FunctionToggleMenu: zx,
  FunctionOpenMenu: Bx,
  FunctionCloseMenu: Vx,
  FunctionSetHighlightedIndex: Ux,
  FunctionSelectItem: Hh,
  FunctionSetInputValue: Hf,
  FunctionReset: Hx
});
function wI(e, t) {
  var n, r = t.type, o = t.props, i = t.altKey, s;
  switch (r) {
    case Uh:
      s = {
        isOpen: jn(o, "isOpen"),
        highlightedIndex: jn(o, "highlightedIndex"),
        selectedItem: o.items[t.index]
      };
      break;
    case Gl:
      {
        var a = t.key, l = "" + e.inputValue + a, u = !e.isOpen && e.selectedItem ? o.items.findIndex(function(m) {
          return o.itemToKey(m) === o.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, c = gI({
          keysSoFar: l,
          highlightedIndex: u,
          items: o.items,
          itemToString: o.itemToString,
          isItemDisabled: o.isItemDisabled
        });
        s = {
          inputValue: l,
          highlightedIndex: c,
          isOpen: !0
        };
      }
      break;
    case Mh:
      {
        var p = e.isOpen ? Ea(e.highlightedIndex, 1, o.items, o.isItemDisabled) : i && e.selectedItem == null ? -1 : ql(o, e, 1);
        s = {
          highlightedIndex: p,
          isOpen: !0
        };
      }
      break;
    case Dh:
      if (e.isOpen && i)
        s = wv(o, e.highlightedIndex, !1);
      else {
        var d = e.isOpen ? Ea(e.highlightedIndex, -1, o.items, o.isItemDisabled) : ql(o, e, -1);
        s = {
          highlightedIndex: d,
          isOpen: !0
        };
      }
      break;
    case Lh:
    case zh:
      s = wv(o, e.highlightedIndex, !1);
      break;
    case $h:
      s = {
        highlightedIndex: Zl(0, !1, o.items, o.isItemDisabled),
        isOpen: !0
      };
      break;
    case Fh:
      s = {
        highlightedIndex: Zl(o.items.length - 1, !0, o.items, o.isItemDisabled),
        isOpen: !0
      };
      break;
    case Bh:
      s = {
        highlightedIndex: Ea(e.highlightedIndex, -10, o.items, o.isItemDisabled)
      };
      break;
    case Vh:
      s = {
        highlightedIndex: Ea(e.highlightedIndex, 10, o.items, o.isItemDisabled)
      };
      break;
    case Nh:
      s = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case Yl:
      s = Be({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((n = o.items) == null ? void 0 : n.length) && {
        selectedItem: o.items[e.highlightedIndex]
      });
      break;
    case Hh:
      s = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return mI(e, t, Wx);
  }
  return Be({}, e, s);
}
var xI = ["onClick"], SI = ["onMouseLeave", "refKey", "ref"], kI = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], _I = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
Qx.stateChangeTypes = Wx;
function Qx(e) {
  e === void 0 && (e = {});
  var t = Be({}, yI, e), n = t.items, r = t.scrollIntoView, o = t.environment, i = t.itemToString, s = t.getA11ySelectionMessage, a = t.getA11yStatusMessage, l = uI(wI, t, cI, hI), u = l[0], c = l[1], p = u.isOpen, d = u.highlightedIndex, m = u.selectedItem, g = u.inputValue, w = E.useRef(null), x = E.useRef(null), v = E.useRef({}), f = E.useRef(null), h = iI(t), y = E.useRef(), S = Dx(), _ = Mx({
    state: u,
    props: t
  }), C = E.useCallback(function(b) {
    return v.current[h.getItemId(b)];
  }, [h]);
  yv(a, [p, d, g, n], Be({
    previousResultCount: y.current,
    items: n,
    environment: o,
    itemToString: i
  }, u)), yv(s, [m], Be({
    previousResultCount: y.current,
    items: n,
    environment: o,
    itemToString: i
  }, u));
  var T = pI({
    menuElement: x.current,
    highlightedIndex: d,
    isOpen: p,
    itemRefs: v,
    scrollIntoView: r,
    getItemNodeFromIndex: C
  });
  E.useEffect(function() {
    return f.current = Oh(function(b) {
      b({
        type: Hf,
        inputValue: ""
      });
    }, 500), function() {
      f.current.cancel();
    };
  }, []), E.useEffect(function() {
    g && f.current(c);
  }, [c, g]), E.useEffect(function() {
    S || (y.current = n.length);
  }), E.useEffect(function() {
    var b = $i(t, "isOpen");
    b && w.current && w.current.focus();
  }, []);
  var M = dI(o, [w, x], E.useCallback(function() {
    _.current.state.isOpen && c({
      type: Yl
    });
  }, [c, _])), j = fI();
  E.useEffect(function() {
    p || (v.current = {});
  }, [p]);
  var U = E.useMemo(function() {
    return {
      ArrowDown: function(O) {
        O.preventDefault(), c({
          type: Mh,
          altKey: O.altKey
        });
      },
      ArrowUp: function(O) {
        O.preventDefault(), c({
          type: Dh,
          altKey: O.altKey
        });
      },
      Home: function(O) {
        O.preventDefault(), c({
          type: $h
        });
      },
      End: function(O) {
        O.preventDefault(), c({
          type: Fh
        });
      },
      Escape: function() {
        _.current.state.isOpen && c({
          type: Nh
        });
      },
      Enter: function(O) {
        O.preventDefault(), c({
          type: _.current.state.isOpen ? Lh : Va
        });
      },
      PageUp: function(O) {
        _.current.state.isOpen && (O.preventDefault(), c({
          type: Bh
        }));
      },
      PageDown: function(O) {
        _.current.state.isOpen && (O.preventDefault(), c({
          type: Vh
        }));
      },
      " ": function(O) {
        O.preventDefault();
        var $ = _.current.state;
        if (!$.isOpen) {
          c({
            type: Va
          });
          return;
        }
        $.inputValue ? c({
          type: Gl,
          key: " "
        }) : c({
          type: zh
        });
      }
    };
  }, [c, _]), B = E.useCallback(function() {
    c({
      type: zx
    });
  }, [c]), L = E.useCallback(function() {
    c({
      type: Vx
    });
  }, [c]), H = E.useCallback(function() {
    c({
      type: Bx
    });
  }, [c]), J = E.useCallback(function(b) {
    c({
      type: Ux,
      highlightedIndex: b
    });
  }, [c]), te = E.useCallback(function(b) {
    c({
      type: Hh,
      selectedItem: b
    });
  }, [c]), ee = E.useCallback(function() {
    c({
      type: Hx
    });
  }, [c]), N = E.useCallback(function(b) {
    c({
      type: Hf,
      inputValue: b
    });
  }, [c]), Q = E.useCallback(function(b) {
    var O = b === void 0 ? {} : b, $ = O.onClick, I = Ni(O, xI), Y = function() {
      var fe;
      (fe = w.current) == null || fe.focus();
    };
    return Be({
      id: h.labelId,
      htmlFor: h.toggleButtonId,
      onClick: qn($, Y)
    }, I);
  }, [h]), W = E.useCallback(function(b, O) {
    var $, I = b === void 0 ? {} : b, Y = I.onMouseLeave, V = I.refKey, fe = V === void 0 ? "ref" : V, ce = I.ref, de = Ni(I, SI), oe = O === void 0 ? {} : O;
    oe.suppressRefError;
    var ye = function() {
      c({
        type: Fx
      });
    };
    return Be(($ = {}, $[fe] = od(ce, function(he) {
      x.current = he;
    }), $.id = h.menuId, $.role = "listbox", $["aria-labelledby"] = de && de["aria-label"] ? void 0 : "" + h.labelId, $.onMouseLeave = qn(Y, ye), $), de);
  }, [c, j, h]), P = E.useCallback(function(b, O) {
    var $, I = b === void 0 ? {} : b, Y = I.onBlur, V = I.onClick;
    I.onPress;
    var fe = I.onKeyDown, ce = I.refKey, de = ce === void 0 ? "ref" : ce, oe = I.ref, ye = Ni(I, kI), he = O === void 0 ? {} : O;
    he.suppressRefError;
    var ge = _.current.state, _e = function() {
      c({
        type: Va
      });
    }, pe = function() {
      ge.isOpen && !M.isMouseDown && c({
        type: Yl
      });
    }, Ae = function(z) {
      var Z = qP(z);
      Z && U[Z] ? U[Z](z) : aI(Z) && c({
        type: Gl,
        key: Z
      });
    }, R = Be(($ = {}, $[de] = od(oe, function(D) {
      w.current = D;
    }), $["aria-activedescendant"] = ge.isOpen && ge.highlightedIndex > -1 ? h.getItemId(ge.highlightedIndex) : "", $["aria-controls"] = h.menuId, $["aria-expanded"] = _.current.state.isOpen, $["aria-haspopup"] = "listbox", $["aria-labelledby"] = ye && ye["aria-label"] ? void 0 : "" + h.labelId, $.id = h.toggleButtonId, $.role = "combobox", $.tabIndex = 0, $.onBlur = qn(Y, pe), $), ye);
    return ye.disabled || (R.onClick = qn(V, _e), R.onKeyDown = qn(fe, Ae)), R;
  }, [c, h, _, M, j, U]), A = E.useCallback(function(b) {
    var O, $ = b === void 0 ? {} : b, I = $.item, Y = $.index, V = $.onMouseMove, fe = $.onClick, ce = $.onMouseDown;
    $.onPress;
    var de = $.refKey, oe = de === void 0 ? "ref" : de, ye = $.disabled, he = $.ref, ge = Ni($, _I);
    ye !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var _e = _.current, pe = _e.state, Ae = _e.props, R = sI(I, Y, Ae.items, "Pass either item or index to getItemProps!"), D = R[0], z = R[1], Z = Ae.isItemDisabled(D, z), K = function() {
      M.isTouchEnd || z === pe.highlightedIndex || (T.current = !1, c({
        type: Lx,
        index: z,
        disabled: Z
      }));
    }, F = function() {
      c({
        type: Uh,
        index: z
      });
    }, re = function(Ne) {
      return Ne.preventDefault();
    }, ke = Be((O = {}, O[oe] = od(he, function(Ee) {
      Ee && (v.current[h.getItemId(z)] = Ee);
    }), O["aria-disabled"] = Z, O["aria-selected"] = "" + (D === pe.selectedItem), O.id = h.getItemId(z), O.role = "option", O), ge);
    return Z || (ke.onClick = qn(fe, F)), ke.onMouseMove = qn(V, K), ke.onMouseDown = qn(ce, re), ke;
  }, [_, h, M, T, c]);
  return {
    // prop getters.
    getToggleButtonProps: P,
    getLabelProps: Q,
    getMenuProps: W,
    getItemProps: A,
    // actions.
    toggleMenu: B,
    openMenu: H,
    closeMenu: L,
    setHighlightedIndex: J,
    selectItem: te,
    reset: ee,
    setInputValue: N,
    // state.
    highlightedIndex: d,
    isOpen: p,
    selectedItem: m,
    inputValue: g
  };
}
Be({}, $x, {
  items: ve.array.isRequired,
  isItemDisabled: ve.func,
  selectedItemChanged: ve.func,
  getA11ySelectionMessage: ve.func,
  inputValue: ve.string,
  defaultInputValue: ve.string,
  initialInputValue: ve.string,
  inputId: ve.string,
  onInputValueChange: ve.func
});
Be({}, Ro, {
  getA11yStatusMessage: KP,
  isItemDisabled: function() {
    return !1;
  }
});
function CI(e) {
  var t = e.removedSelectedItem, n = e.itemToString;
  return n(t) + " has been removed.";
}
Be({}, Nx, {
  selectedItems: ve.array,
  initialSelectedItems: ve.array,
  defaultSelectedItems: ve.array,
  getA11yRemovalMessage: ve.func,
  activeIndex: ve.number,
  initialActiveIndex: ve.number,
  defaultActiveIndex: ve.number,
  onActiveIndexChange: ve.func,
  onSelectedItemsChange: ve.func,
  keyNavigationNext: ve.string,
  keyNavigationPrevious: ve.string
});
Ro.itemToString, Ro.itemToKey, Ro.stateReducer, Ro.environment;
function bI(e) {
  return e ? e.label : "";
}
function Wf({
  name: e,
  options: t,
  placeholder: n,
  label: r
}) {
  const { field: o } = ai({
    name: e,
    rules: { required: !0 }
  }), i = TI(t, o.value), s = (a) => {
    o.onChange(a == null ? void 0 : a.value);
  };
  return /* @__PURE__ */ k.jsx(
    EI,
    {
      options: t,
      placeholder: n,
      label: r,
      selected: i == null ? void 0 : i.value,
      onSelectedItemChange: s
    }
  );
}
function EI({
  options: e,
  placeholder: t,
  label: n,
  selected: r,
  onSelectedItemChange: o
}) {
  var c;
  const i = (c = e.filter((p) => p.value === r)) == null ? void 0 : c[0], { isOpen: s, getToggleButtonProps: a, getMenuProps: l, getItemProps: u } = Qx({
    items: e,
    itemToString: bI,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: p }) => {
      o(p);
    }
  });
  return /* @__PURE__ */ k.jsxs(RI, { children: [
    /* @__PURE__ */ k.jsxs(AI, { children: [
      n !== void 0 && /* @__PURE__ */ k.jsx("div", { children: n }),
      /* @__PURE__ */ k.jsxs(PI, { ...a(), children: [
        /* @__PURE__ */ k.jsx("span", { children: i ? i.label : t ?? "" }),
        /* @__PURE__ */ k.jsx(IE, {})
      ] })
    ] }),
    /* @__PURE__ */ k.jsx(II, { ...l(), isOpen: s, children: s && e.map((p, d) => /* @__PURE__ */ k.jsx("li", { ...u({ item: p, index: d }), children: /* @__PURE__ */ k.jsx("span", { children: p.label }) }, `${p.value}${d}`)) })
  ] });
}
function TI(e, t) {
  var n;
  return (n = e.filter((r) => r.value === t)) == null ? void 0 : n[0];
}
const RI = ae.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, AI = ae.div`
  height: 40px;
  background-color: var(${q.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${q.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${q.focusBorder});
  }
  > div:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${q.inputPlaceholderForeground});
  }
`, PI = ae.div`
  display: flex;
  color: var(${q.foreground});
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
    fill: var(${q.foreground});
  }
`, II = ae.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${q.dropdownBackground});
  color: var(${q.dropdownForeground});
  ${({ isOpen: e }) => e && `
    border: 1px solid var(${q.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${q.listHoverBackground});
  }
`;
function OI() {
  const e = Qs(), {
    overlordConnectionTestResult: t,
    waitingForOverlordConnectionTest: n
  } = Ku((o) => o.config), r = pr({ name: "platformServices.source" });
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsx(Zs, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ k.jsxs(Ks, { children: [
      /* @__PURE__ */ k.jsx(
        Wf,
        {
          label: "Platform services",
          name: "platformServices.source",
          options: [
            { value: "auto", label: "Detect the host automatically" },
            { value: "manual", label: "Specify the host manually" }
          ]
        }
      ),
      r == "manual" && /* @__PURE__ */ k.jsx(It, { label: "Host", name: "platformServices.manual" }),
      r == "auto" && /* @__PURE__ */ k.jsx(It, { label: "Host (automatic, read-only)", name: "platformServices.auto", disabled: !0 }),
      /* @__PURE__ */ k.jsxs(es, { children: [
        /* @__PURE__ */ k.jsx(
          Ji,
          {
            label: "Test connection",
            waiting: n,
            onClick: (o) => {
              e(Bw()), o.preventDefault(), o.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ k.jsx(bh, { result: t })
      ] })
    ] })
  ] });
}
const jI = Cr({
  platformServices: Cr({
    source: Ch(["auto", "manual"]),
    manual: Nn(),
    auto: _h()
  })
}), id = {
  id: "platform-services",
  label: "Services",
  schema: jI,
  form: OI
}, xv = "^[\\w _.\\/:-]{1,2048}$", MI = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function DI() {
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsx(Zs, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ k.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ k.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ k.jsx(Ks, { children: /* @__PURE__ */ k.jsx(It, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function NI(e) {
  const n = e || {
    pattern: ".*",
    example: "",
    description: "Any string"
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: Cr({
      platformTemporaryCollectionName: LR(
        Nn().regex(
          new RegExp(xv),
          `Collection name is invalid, must match default pattern: ${xv}`
        ),
        Nn().regex(
          new RegExp(n.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${n.example}`
        )
      )
    }),
    form: DI
  };
}
function $I() {
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsx(Zs, { children: "Mandatory Tags" }),
    /* @__PURE__ */ k.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ k.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ k.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ k.jsx(Ks, { children: /* @__PURE__ */ k.jsx(wx, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const FI = Cr({
  platformMandatoryTags: Nn().regex(
    new RegExp(MI),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
});
function LI() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: FI,
    form: $I
  };
}
var Wh = "Checkbox", [zI, RO] = io(Wh), [BI, VI] = zI(Wh), Kx = E.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: i,
      required: s,
      disabled: a,
      value: l = "on",
      onCheckedChange: u,
      ...c
    } = e, [p, d] = E.useState(null), m = zt(t, (h) => d(h)), g = E.useRef(!1), w = p ? !!p.closest("form") : !0, [x = !1, v] = Uu({
      prop: o,
      defaultProp: i,
      onChange: u
    }), f = E.useRef(x);
    return E.useEffect(() => {
      const h = p == null ? void 0 : p.form;
      if (h) {
        const y = () => v(f.current);
        return h.addEventListener("reset", y), () => h.removeEventListener("reset", y);
      }
    }, [p, v]), /* @__PURE__ */ k.jsxs(BI, { scope: n, state: x, disabled: a, children: [
      /* @__PURE__ */ k.jsx(
        St.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": Vr(x) ? "mixed" : x,
          "aria-required": s,
          "data-state": Gx(x),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...c,
          ref: m,
          onKeyDown: Ke(e.onKeyDown, (h) => {
            h.key === "Enter" && h.preventDefault();
          }),
          onClick: Ke(e.onClick, (h) => {
            v((y) => Vr(y) ? !0 : !y), w && (g.current = h.isPropagationStopped(), g.current || h.stopPropagation());
          })
        }
      ),
      w && /* @__PURE__ */ k.jsx(
        UI,
        {
          control: p,
          bubbles: !g.current,
          name: r,
          value: l,
          checked: x,
          required: s,
          disabled: a,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Kx.displayName = Wh;
var Zx = "CheckboxIndicator", qx = E.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, i = VI(Zx, n);
    return /* @__PURE__ */ k.jsx(Hs, { present: r || Vr(i.state) || i.state === !0, children: /* @__PURE__ */ k.jsx(
      St.span,
      {
        "data-state": Gx(i.state),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
qx.displayName = Zx;
var UI = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, i = E.useRef(null), s = ax(n), a = vh(t);
  return E.useEffect(() => {
    const l = i.current, u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (s !== n && p) {
      const d = new Event("click", { bubbles: r });
      l.indeterminate = Vr(n), p.call(l, Vr(n) ? !1 : n), l.dispatchEvent(d);
    }
  }, [s, n, r]), /* @__PURE__ */ k.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: Vr(n) ? !1 : n,
      ...o,
      tabIndex: -1,
      ref: i,
      style: {
        ...e.style,
        ...a,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function Vr(e) {
  return e === "indeterminate";
}
function Gx(e) {
  return Vr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var HI = Kx, WI = qx;
function Sv({ name: e, label: t }) {
  const n = E.useId(), { field: r } = ai({
    name: e
  });
  return /* @__PURE__ */ k.jsxs(QI, { children: [
    /* @__PURE__ */ k.jsx(
      KI,
      {
        checked: r.value,
        onCheckedChange: (o) => r.onChange(o),
        id: n,
        children: /* @__PURE__ */ k.jsx(ZI, { children: /* @__PURE__ */ k.jsx(ME, {}) })
      }
    ),
    /* @__PURE__ */ k.jsx("label", { htmlFor: n, children: t })
  ] });
}
const QI = ae.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, KI = ae(HI)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${q.checkboxBackground});
  border-radius: 4px;
  border-color: var(${q.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, ZI = ae(WI)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${q.checkboxForeground});
`;
function qI({ result: e }) {
  return e !== void 0 ? e.success ? /* @__PURE__ */ k.jsx(Lo, { message: e.version }) : /* @__PURE__ */ k.jsx(qu, { message: "Failed", children: e.message }) : null;
}
function GI() {
  const e = Qs(), {
    scandManagerConnectionTestResult: t,
    waitingForScandManagerConnectionTest: n,
    waitingForCliTest: r,
    cliTestResult: o,
    waitingForCliDownload: i,
    cliDownloadPercent: s,
    cliDownloadError: a,
    data: { cli: l }
  } = Ku((m) => m.config), u = pr({ name: "platformAuthType" }), c = pr({ name: "scandManager.auth" }), p = pr({ name: "scanRuntime" }), d = u === "api-token" ? p : "cli";
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsx(Zs, { children: "Runtime for API Conformance Scan" }),
    /* @__PURE__ */ k.jsxs(Ks, { children: [
      u === "api-token" && /* @__PURE__ */ k.jsx(
        Wf,
        {
          label: "Runtime",
          name: "scanRuntime",
          options: [
            { value: "docker", label: "Docker" },
            { value: "scand-manager", label: "Scand manager" },
            { value: "cli", label: "42Crunch API Security Testing Binary" }
          ]
        }
      ),
      d === "docker" && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
        /* @__PURE__ */ k.jsx(It, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ k.jsx(
          Sv,
          {
            name: "docker.replaceLocalhost",
            label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
          }
        ),
        /* @__PURE__ */ k.jsx(Sv, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
      ] }),
      d === "scand-manager" && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
        /* @__PURE__ */ k.jsx(It, { label: "Scand manager URL", name: "scandManager.url" }),
        /* @__PURE__ */ k.jsx(
          Wf,
          {
            label: "Authentication method",
            name: "scandManager.auth",
            options: [
              { value: "none", label: "None" },
              { value: "header", label: "HTTP header authentication" }
            ]
          }
        ),
        c === "header" && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
          /* @__PURE__ */ k.jsx(It, { label: "Header name", name: "scandManager.header.name" }),
          /* @__PURE__ */ k.jsx(It, { label: "Header value", name: "scandManager.header.value" })
        ] }),
        /* @__PURE__ */ k.jsx(It, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ k.jsx(
          It,
          {
            label: "Maximum amount of time to check on scan completion (seconds)",
            name: "scandManager.timeout"
          }
        ),
        /* @__PURE__ */ k.jsxs(es, { children: [
          /* @__PURE__ */ k.jsx(
            Ji,
            {
              label: "Test connection",
              waiting: n,
              onClick: (m) => {
                e(Vw()), m.preventDefault(), m.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ k.jsx(bh, { result: t })
        ] })
      ] }),
      d === "cli" && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
        /* @__PURE__ */ k.jsx(It, { label: "Download URL", name: "repository" }),
        /* @__PURE__ */ k.jsx(
          It,
          {
            label: "Custom binary location (optional, uses default directory if empty)",
            name: "cliDirectoryOverride"
          }
        )
      ] }),
      u === "anond-token" && /* @__PURE__ */ k.jsx(Lo, { message: "Scan runtime is set to use 42Crunch API Security Testing Binary" }),
      d === "cli" && (!l.found || (o == null ? void 0 : o.success) === !1 || i) && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
        /* @__PURE__ */ k.jsxs(es, { children: [
          /* @__PURE__ */ k.jsx(
            Ji,
            {
              label: "Download",
              waiting: i,
              onClick: (m) => {
                e(Hw()), m.preventDefault(), m.stopPropagation();
              }
            }
          ),
          i && /* @__PURE__ */ k.jsx(zf, { progress: s })
        ] }),
        /* @__PURE__ */ k.jsx(
          Lo,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${l.location}`
          }
        )
      ] }),
      d === "cli" && a !== void 0 && /* @__PURE__ */ k.jsx(qu, { message: a }),
      d === "cli" && l.found && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
        /* @__PURE__ */ k.jsx(Lo, { message: `Using 42Crunch API Security Testing Binary in ${l.location}` }),
        /* @__PURE__ */ k.jsxs(es, { children: [
          /* @__PURE__ */ k.jsx(
            Ji,
            {
              label: "Check",
              waiting: r,
              onClick: (m) => {
                e(Uw()), m.preventDefault(), m.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ k.jsx(qI, { result: o })
        ] })
      ] })
    ] })
  ] });
}
const YI = Cr({
  scanRuntime: Ch(["docker", "scand-manager", "cli"]),
  scandManager: Cr({
    timeout: zR.number().int().min(1).max(60 * 60 * 24)
    // 1 day
  }).catchall(_h()),
  repository: Nn().url(),
  cliDirectoryOverride: FR([
    Xw(""),
    Nn().regex(/^(\/.+|[A-Za-z]:\\.+)$/, {
      message: "Must be an absolute path (e.g. /home/username/42crunch-cli or C:\\Users\\username\\42crunch-cli)"
    })
  ])
}), sd = {
  id: "scan-runtime",
  label: "Runtime",
  schema: YI,
  form: GI
}, ad = {
  host: "",
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function ld(e) {
  const { name: t, children: n, ...r } = e, { field: o } = ai({ name: t });
  return /* @__PURE__ */ k.jsx(aO, { ...r, ...o, children: n });
}
function XI({ name: e }) {
  const t = pr({ name: e });
  return /* @__PURE__ */ k.jsx(sO, { children: t });
}
function JI({ name: e }) {
  const [t, n] = E.useState(!1);
  return /* @__PURE__ */ k.jsxs(iO, { children: [
    /* @__PURE__ */ k.jsx(ud, { children: /* @__PURE__ */ k.jsx(XI, { name: `${e}.host` }) }),
    /* @__PURE__ */ k.jsx(ud, { children: /* @__PURE__ */ k.jsx(ld, { type: "text", name: `${e}.header`, placeholder: ad.header }) }),
    /* @__PURE__ */ k.jsx(ud, { children: /* @__PURE__ */ k.jsx(ld, { type: "text", name: `${e}.prefix`, placeholder: ad.prefix }) }),
    /* @__PURE__ */ k.jsxs(lO, { children: [
      /* @__PURE__ */ k.jsx(
        ld,
        {
          type: t ? "text" : "password",
          name: `${e}.token`,
          placeholder: ad.token
        }
      ),
      /* @__PURE__ */ k.jsx(
        uO,
        {
          type: "button",
          title: `${t ? "Hide" : "Reveal"} token`,
          onClick: () => n(!t),
          children: /* @__PURE__ */ k.jsx(LE, {})
        }
      )
    ] })
  ] });
}
function eO() {
  const { fields: e } = kE({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ k.jsxs(tO, { children: [
    /* @__PURE__ */ k.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ k.jsxs(nO, { children: [
      /* @__PURE__ */ k.jsxs(rO, { children: [
        /* @__PURE__ */ k.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ k.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ k.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ k.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ k.jsx(oO, { children: e.map((t, n) => /* @__PURE__ */ k.jsx(JI, { name: `approvedHosts.${n}` }, t.id)) })
    ] })
  ] });
}
const tO = ae.div``, nO = ae.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, rO = ae.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${q.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, oO = ae.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${q.border});
  }
`, iO = ae.div`
  display: contents;
`, ud = ae.div`
  padding: 4px 8px;
`, sO = ae.span`
  line-height: 40px;
`, aO = ae.input`
  height: 40px;
  background: transparent;
  line-height: 20px;
  border: none;
  padding: 0;
  color: var(${q.foreground});
  &::placeholder {
    color: var(${q.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, lO = ae.div`
  padding: 4px 8px;
  display: flex;
  > input {
    flex: 1;
    margin-right: 4px;
  }
`, uO = ae.button`
  cursor: pointer;
  background: transparent;
  color: var(${q.foreground});
  border: 1px solid var(${q.buttonBorder});
  padding: 6px 0px;
  border-radius: 2px;
  width: 20px;
  &:focus {
    outline: 1px solid var(${q.focusBorder});
  }
  > svg {
    height: 14px;
    width: 14px;
    min-width: 14px;
    fill: var(${q.foreground});
  }
`, cO = Cr({
  approvedHosts: $R(_h())
}), cd = {
  id: "openapi-external-refs",
  label: "External References",
  schema: cO,
  form: eO
};
function kv(e) {
  const t = JSON.parse(JSON.stringify(e));
  return t.platformApiToken === void 0 && (t.platformApiToken = ""), t;
}
function dO(e) {
  return JSON.parse(JSON.stringify(e));
}
function fO() {
  const e = Qs(), { ready: t, errors: n, data: r } = Ku((l) => l.config), o = LI(), i = NI(r.platformCollectionNamingConvention), s = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [nd, id, i, o]
    },
    {
      id: "scan",
      title: "API Conformance Scan",
      items: [sd]
    },
    {
      id: "openapi",
      title: "OpenAPI",
      items: [cd]
    }
  ], a = {
    [nd.id]: nd,
    [id.id]: id,
    [sd.id]: sd,
    [i.id]: i,
    [o.id]: o,
    [cd.id]: cd
  };
  return E.useEffect(() => {
    const l = kv(r);
    for (const u of Object.keys(a)) {
      const { success: c } = a[u].schema.safeParse(l);
      e(c ? Lw(u) : Fw({
        screen: u,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [r]), t ? /* @__PURE__ */ k.jsx(
    BT,
    {
      sections: s,
      errors: n,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (l) => {
        const { id: u, form: c, schema: p } = a[l.itemId];
        return /* @__PURE__ */ k.jsxs(
          wR,
          {
            data: r,
            wrapFormData: kv,
            unwrapFormData: dO,
            saveData: (d) => e($w(d)),
            schema: p,
            children: [
              /* @__PURE__ */ k.jsx(c, {}),
              /* @__PURE__ */ k.jsx(pO, { id: u })
            ]
          }
        );
      }
    }
  ) : null;
}
function pO({ id: e }) {
  const t = Qs(), {
    trigger: n,
    formState: { isValid: r }
  } = si();
  return E.useEffect(() => {
    n();
  }, [e]), E.useEffect(() => {
    t(r ? Lw(e) : Fw({ screen: e, error: "Validation errors, configuration is not being saved" }));
  }, [e, r]), null;
}
function hO(e, t) {
  return () => e({
    matcher: kn($w, oR, iR),
    effect: async (n, r) => {
      const {
        config: { data: o, hasErrors: i }
      } = r.getState();
      i ? console.log("not saving config, has errors") : t.postMessage({ command: "saveConfig", payload: o });
    }
  });
}
function mO(e, t) {
  return () => e({
    actionCreator: zw,
    effect: async (n, r) => {
      const o = r.getState();
      t.postMessage({
        command: "saveConfig",
        payload: o.config.data
      }), t.postMessage({
        command: "testPlatformConnection",
        payload: void 0
      });
    }
  });
}
function gO(e, t) {
  return () => e({
    actionCreator: Bw,
    effect: async (n, r) => {
      const o = r.getState();
      t.postMessage({
        command: "saveConfig",
        payload: o.config.data
      }), t.postMessage({
        command: "testOverlordConnection",
        payload: void 0
      });
    }
  });
}
function vO(e, t) {
  return () => e({
    actionCreator: Vw,
    effect: async (n, r) => {
      const o = r.getState();
      t.postMessage({
        command: "saveConfig",
        payload: o.config.data
      }), t.postMessage({
        command: "testScandManagerConnection",
        payload: void 0
      });
    }
  });
}
function yO(e, t) {
  return () => e({
    actionCreator: Uw,
    effect: async (n, r) => {
      const o = r.getState();
      t.postMessage({
        command: "saveConfig",
        payload: o.config.data
      }), t.postMessage({
        command: "testCli",
        payload: void 0
      });
    }
  });
}
function wO(e, t) {
  return () => e({
    actionCreator: Hw,
    effect: async (n, r) => {
      const o = r.getState();
      t.postMessage({
        command: "saveConfig",
        payload: o.config.data
      }), t.postMessage({
        command: "downloadCli",
        payload: void 0
      });
    }
  });
}
function xO(e, t) {
  return () => e({
    actionCreator: Rf,
    effect: async (n, r) => {
      t.postMessage({
        command: "openLink",
        payload: n.payload
      });
    }
  });
}
function SO(e, t) {
  return () => e({
    actionCreator: Ih,
    effect: async ({ payload: { id: n, request: r, config: o } }, i) => {
      t.postMessage({
        command: "sendHttpRequest",
        payload: { id: n, request: r, config: o || { https: { rejectUnauthorized: !0 } } }
      });
    }
  });
}
const Yx = ob(), Gn = Yx.startListening;
function kO(e) {
  const t = {
    saveConfig: hO(Gn, e),
    testOverlordConnection: gO(Gn, e),
    testScandManagerConnection: vO(Gn, e),
    testPlatformConnection: mO(Gn, e),
    testCli: yO(Gn, e),
    downloadCli: wO(Gn, e),
    openLink: xO(Gn, e),
    sendHttpRequest: SO(Gn, e)
  };
  return hE(t), Yx;
}
function _O(e, t) {
  const n = OP(kO(e), t);
  D0(document.getElementById("root")).render(
    /* @__PURE__ */ k.jsx(ue.StrictMode, { children: /* @__PURE__ */ k.jsxs(Q_, { store: n, children: [
      /* @__PURE__ */ k.jsx(ub, {}),
      /* @__PURE__ */ k.jsx(fO, {})
    ] }) })
  ), window.addEventListener("message", pE(n, IP));
}
window.renderWebView = _O;
