var wg = Object.defineProperty;
var Sg = (n, o, u) => o in n ? wg(n, o, { enumerable: !0, configurable: !0, writable: !0, value: u }) : n[o] = u;
var Lo = (n, o, u) => Sg(n, typeof o != "symbol" ? o + "" : o, u);
function Eg(n, o) {
  for (var u = 0; u < o.length; u++) {
    const s = o[u];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const c in s)
        if (c !== "default" && !(c in n)) {
          const f = Object.getOwnPropertyDescriptor(s, c);
          f && Object.defineProperty(n, c, f.get ? f : {
            enumerable: !0,
            get: () => s[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var cu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function La(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function fS(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var o = n.default;
  if (typeof o == "function") {
    var u = function s() {
      return this instanceof s ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    u.prototype = o.prototype;
  } else u = {};
  return Object.defineProperty(u, "__esModule", { value: !0 }), Object.keys(n).forEach(function(s) {
    var c = Object.getOwnPropertyDescriptor(n, s);
    Object.defineProperty(u, s, c.get ? c : {
      enumerable: !0,
      get: function() {
        return n[s];
      }
    });
  }), u;
}
var Us = { exports: {} }, Io = {}, Ws = { exports: {} }, de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Md;
function kg() {
  if (Md) return de;
  Md = 1;
  var n = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), x = Symbol.iterator;
  function E(p) {
    return p === null || typeof p != "object" ? null : (p = x && p[x] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var D = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, L = Object.assign, P = {};
  function A(p, y, _) {
    this.props = p, this.context = y, this.refs = P, this.updater = _ || D;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(p, y) {
    if (typeof p != "object" && typeof p != "function" && p != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, y, "setState");
  }, A.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function I() {
  }
  I.prototype = A.prototype;
  function B(p, y, _) {
    this.props = p, this.context = y, this.refs = P, this.updater = _ || D;
  }
  var F = B.prototype = new I();
  F.constructor = B, L(F, A.prototype), F.isPureReactComponent = !0;
  var M = Array.isArray, W = Object.prototype.hasOwnProperty, V = { current: null }, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(p, y, _) {
    var z, Q = {}, G = null, Z = null;
    if (y != null) for (z in y.ref !== void 0 && (Z = y.ref), y.key !== void 0 && (G = "" + y.key), y) W.call(y, z) && !j.hasOwnProperty(z) && (Q[z] = y[z]);
    var X = arguments.length - 2;
    if (X === 1) Q.children = _;
    else if (1 < X) {
      for (var ce = Array(X), we = 0; we < X; we++) ce[we] = arguments[we + 2];
      Q.children = ce;
    }
    if (p && p.defaultProps) for (z in X = p.defaultProps, X) Q[z] === void 0 && (Q[z] = X[z]);
    return { $$typeof: n, type: p, key: G, ref: Z, props: Q, _owner: V.current };
  }
  function le(p, y) {
    return { $$typeof: n, type: p.type, key: y, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function me(p) {
    return typeof p == "object" && p !== null && p.$$typeof === n;
  }
  function ht(p) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(_) {
      return y[_];
    });
  }
  var Fe = /\/+/g;
  function He(p, y) {
    return typeof p == "object" && p !== null && p.key != null ? ht("" + p.key) : y.toString(36);
  }
  function qe(p, y, _, z, Q) {
    var G = typeof p;
    (G === "undefined" || G === "boolean") && (p = null);
    var Z = !1;
    if (p === null) Z = !0;
    else switch (G) {
      case "string":
      case "number":
        Z = !0;
        break;
      case "object":
        switch (p.$$typeof) {
          case n:
          case o:
            Z = !0;
        }
    }
    if (Z) return Z = p, Q = Q(Z), p = z === "" ? "." + He(Z, 0) : z, M(Q) ? (_ = "", p != null && (_ = p.replace(Fe, "$&/") + "/"), qe(Q, y, _, "", function(we) {
      return we;
    })) : Q != null && (me(Q) && (Q = le(Q, _ + (!Q.key || Z && Z.key === Q.key ? "" : ("" + Q.key).replace(Fe, "$&/") + "/") + p)), y.push(Q)), 1;
    if (Z = 0, z = z === "" ? "." : z + ":", M(p)) for (var X = 0; X < p.length; X++) {
      G = p[X];
      var ce = z + He(G, X);
      Z += qe(G, y, _, ce, Q);
    }
    else if (ce = E(p), typeof ce == "function") for (p = ce.call(p), X = 0; !(G = p.next()).done; ) G = G.value, ce = z + He(G, X++), Z += qe(G, y, _, ce, Q);
    else if (G === "object") throw y = String(p), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return Z;
  }
  function je(p, y, _) {
    if (p == null) return p;
    var z = [], Q = 0;
    return qe(p, z, "", "", function(G) {
      return y.call(_, G, Q++);
    }), z;
  }
  function ze(p) {
    if (p._status === -1) {
      var y = p._result;
      y = y(), y.then(function(_) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = _);
      }, function(_) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = _);
      }), p._status === -1 && (p._status = 0, p._result = y);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var ve = { current: null }, K = { transition: null }, ne = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: K, ReactCurrentOwner: V };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return de.Children = { map: je, forEach: function(p, y, _) {
    je(p, function() {
      y.apply(this, arguments);
    }, _);
  }, count: function(p) {
    var y = 0;
    return je(p, function() {
      y++;
    }), y;
  }, toArray: function(p) {
    return je(p, function(y) {
      return y;
    }) || [];
  }, only: function(p) {
    if (!me(p)) throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } }, de.Component = A, de.Fragment = u, de.Profiler = c, de.PureComponent = B, de.StrictMode = s, de.Suspense = g, de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne, de.act = Y, de.cloneElement = function(p, y, _) {
    if (p == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + p + ".");
    var z = L({}, p.props), Q = p.key, G = p.ref, Z = p._owner;
    if (y != null) {
      if (y.ref !== void 0 && (G = y.ref, Z = V.current), y.key !== void 0 && (Q = "" + y.key), p.type && p.type.defaultProps) var X = p.type.defaultProps;
      for (ce in y) W.call(y, ce) && !j.hasOwnProperty(ce) && (z[ce] = y[ce] === void 0 && X !== void 0 ? X[ce] : y[ce]);
    }
    var ce = arguments.length - 2;
    if (ce === 1) z.children = _;
    else if (1 < ce) {
      X = Array(ce);
      for (var we = 0; we < ce; we++) X[we] = arguments[we + 2];
      z.children = X;
    }
    return { $$typeof: n, type: p.type, key: Q, ref: G, props: z, _owner: Z };
  }, de.createContext = function(p) {
    return p = { $$typeof: h, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, p.Provider = { $$typeof: f, _context: p }, p.Consumer = p;
  }, de.createElement = ae, de.createFactory = function(p) {
    var y = ae.bind(null, p);
    return y.type = p, y;
  }, de.createRef = function() {
    return { current: null };
  }, de.forwardRef = function(p) {
    return { $$typeof: m, render: p };
  }, de.isValidElement = me, de.lazy = function(p) {
    return { $$typeof: w, _payload: { _status: -1, _result: p }, _init: ze };
  }, de.memo = function(p, y) {
    return { $$typeof: C, type: p, compare: y === void 0 ? null : y };
  }, de.startTransition = function(p) {
    var y = K.transition;
    K.transition = {};
    try {
      p();
    } finally {
      K.transition = y;
    }
  }, de.unstable_act = Y, de.useCallback = function(p, y) {
    return ve.current.useCallback(p, y);
  }, de.useContext = function(p) {
    return ve.current.useContext(p);
  }, de.useDebugValue = function() {
  }, de.useDeferredValue = function(p) {
    return ve.current.useDeferredValue(p);
  }, de.useEffect = function(p, y) {
    return ve.current.useEffect(p, y);
  }, de.useId = function() {
    return ve.current.useId();
  }, de.useImperativeHandle = function(p, y, _) {
    return ve.current.useImperativeHandle(p, y, _);
  }, de.useInsertionEffect = function(p, y) {
    return ve.current.useInsertionEffect(p, y);
  }, de.useLayoutEffect = function(p, y) {
    return ve.current.useLayoutEffect(p, y);
  }, de.useMemo = function(p, y) {
    return ve.current.useMemo(p, y);
  }, de.useReducer = function(p, y, _) {
    return ve.current.useReducer(p, y, _);
  }, de.useRef = function(p) {
    return ve.current.useRef(p);
  }, de.useState = function(p) {
    return ve.current.useState(p);
  }, de.useSyncExternalStore = function(p, y, _) {
    return ve.current.useSyncExternalStore(p, y, _);
  }, de.useTransition = function() {
    return ve.current.useTransition();
  }, de.version = "18.3.1", de;
}
var Fd;
function zu() {
  return Fd || (Fd = 1, Ws.exports = kg()), Ws.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd;
function xg() {
  if (jd) return Io;
  jd = 1;
  var n = zu(), o = Symbol.for("react.element"), u = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(m, g, C) {
    var w, x = {}, E = null, D = null;
    C !== void 0 && (E = "" + C), g.key !== void 0 && (E = "" + g.key), g.ref !== void 0 && (D = g.ref);
    for (w in g) s.call(g, w) && !f.hasOwnProperty(w) && (x[w] = g[w]);
    if (m && m.defaultProps) for (w in g = m.defaultProps, g) x[w] === void 0 && (x[w] = g[w]);
    return { $$typeof: o, type: m, key: E, ref: D, props: x, _owner: c.current };
  }
  return Io.Fragment = u, Io.jsx = h, Io.jsxs = h, Io;
}
var zd;
function Cg() {
  return zd || (zd = 1, Us.exports = xg()), Us.exports;
}
var J = Cg(), O = zu();
const zn = /* @__PURE__ */ La(O), Mp = /* @__PURE__ */ Eg({
  __proto__: null,
  default: zn
}, [O]);
var fu = {}, bs = { exports: {} }, ft = {}, Vs = { exports: {} }, Hs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bd;
function _g() {
  return Bd || (Bd = 1, function(n) {
    function o(K, ne) {
      var Y = K.length;
      K.push(ne);
      e: for (; 0 < Y; ) {
        var p = Y - 1 >>> 1, y = K[p];
        if (0 < c(y, ne)) K[p] = ne, K[Y] = y, Y = p;
        else break e;
      }
    }
    function u(K) {
      return K.length === 0 ? null : K[0];
    }
    function s(K) {
      if (K.length === 0) return null;
      var ne = K[0], Y = K.pop();
      if (Y !== ne) {
        K[0] = Y;
        e: for (var p = 0, y = K.length, _ = y >>> 1; p < _; ) {
          var z = 2 * (p + 1) - 1, Q = K[z], G = z + 1, Z = K[G];
          if (0 > c(Q, Y)) G < y && 0 > c(Z, Q) ? (K[p] = Z, K[G] = Y, p = G) : (K[p] = Q, K[z] = Y, p = z);
          else if (G < y && 0 > c(Z, Y)) K[p] = Z, K[G] = Y, p = G;
          else break e;
        }
      }
      return ne;
    }
    function c(K, ne) {
      var Y = K.sortIndex - ne.sortIndex;
      return Y !== 0 ? Y : K.id - ne.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      n.unstable_now = function() {
        return f.now();
      };
    } else {
      var h = Date, m = h.now();
      n.unstable_now = function() {
        return h.now() - m;
      };
    }
    var g = [], C = [], w = 1, x = null, E = 3, D = !1, L = !1, P = !1, A = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, B = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function F(K) {
      for (var ne = u(C); ne !== null; ) {
        if (ne.callback === null) s(C);
        else if (ne.startTime <= K) s(C), ne.sortIndex = ne.expirationTime, o(g, ne);
        else break;
        ne = u(C);
      }
    }
    function M(K) {
      if (P = !1, F(K), !L) if (u(g) !== null) L = !0, ze(W);
      else {
        var ne = u(C);
        ne !== null && ve(M, ne.startTime - K);
      }
    }
    function W(K, ne) {
      L = !1, P && (P = !1, I(ae), ae = -1), D = !0;
      var Y = E;
      try {
        for (F(ne), x = u(g); x !== null && (!(x.expirationTime > ne) || K && !ht()); ) {
          var p = x.callback;
          if (typeof p == "function") {
            x.callback = null, E = x.priorityLevel;
            var y = p(x.expirationTime <= ne);
            ne = n.unstable_now(), typeof y == "function" ? x.callback = y : x === u(g) && s(g), F(ne);
          } else s(g);
          x = u(g);
        }
        if (x !== null) var _ = !0;
        else {
          var z = u(C);
          z !== null && ve(M, z.startTime - ne), _ = !1;
        }
        return _;
      } finally {
        x = null, E = Y, D = !1;
      }
    }
    var V = !1, j = null, ae = -1, le = 5, me = -1;
    function ht() {
      return !(n.unstable_now() - me < le);
    }
    function Fe() {
      if (j !== null) {
        var K = n.unstable_now();
        me = K;
        var ne = !0;
        try {
          ne = j(!0, K);
        } finally {
          ne ? He() : (V = !1, j = null);
        }
      } else V = !1;
    }
    var He;
    if (typeof B == "function") He = function() {
      B(Fe);
    };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), je = qe.port2;
      qe.port1.onmessage = Fe, He = function() {
        je.postMessage(null);
      };
    } else He = function() {
      A(Fe, 0);
    };
    function ze(K) {
      j = K, V || (V = !0, He());
    }
    function ve(K, ne) {
      ae = A(function() {
        K(n.unstable_now());
      }, ne);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(K) {
      K.callback = null;
    }, n.unstable_continueExecution = function() {
      L || D || (L = !0, ze(W));
    }, n.unstable_forceFrameRate = function(K) {
      0 > K || 125 < K ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : le = 0 < K ? Math.floor(1e3 / K) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, n.unstable_getFirstCallbackNode = function() {
      return u(g);
    }, n.unstable_next = function(K) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = E;
      }
      var Y = E;
      E = ne;
      try {
        return K();
      } finally {
        E = Y;
      }
    }, n.unstable_pauseExecution = function() {
    }, n.unstable_requestPaint = function() {
    }, n.unstable_runWithPriority = function(K, ne) {
      switch (K) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          K = 3;
      }
      var Y = E;
      E = K;
      try {
        return ne();
      } finally {
        E = Y;
      }
    }, n.unstable_scheduleCallback = function(K, ne, Y) {
      var p = n.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? p + Y : p) : Y = p, K) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return y = Y + y, K = { id: w++, callback: ne, priorityLevel: K, startTime: Y, expirationTime: y, sortIndex: -1 }, Y > p ? (K.sortIndex = Y, o(C, K), u(g) === null && K === u(C) && (P ? (I(ae), ae = -1) : P = !0, ve(M, Y - p))) : (K.sortIndex = y, o(g, K), L || D || (L = !0, ze(W))), K;
    }, n.unstable_shouldYield = ht, n.unstable_wrapCallback = function(K) {
      var ne = E;
      return function() {
        var Y = E;
        E = ne;
        try {
          return K.apply(this, arguments);
        } finally {
          E = Y;
        }
      };
    };
  }(Hs)), Hs;
}
var $d;
function Pg() {
  return $d || ($d = 1, Vs.exports = _g()), Vs.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ud;
function Ng() {
  if (Ud) return ft;
  Ud = 1;
  var n = zu(), o = Pg();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var s = /* @__PURE__ */ new Set(), c = {};
  function f(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, w = {}, x = {};
  function E(e) {
    return g.call(x, e) ? !0 : g.call(w, e) ? !1 : C.test(e) ? x[e] = !0 : (w[e] = !0, !1);
  }
  function D(e, t, r, i) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function L(e, t, r, i) {
    if (t === null || typeof t > "u" || D(e, t, r, i)) return !0;
    if (i) return !1;
    if (r !== null) switch (r.type) {
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
  function P(e, t, r, i, l, a, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = d;
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    A[e] = new P(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    A[t] = new P(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    A[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    A[e] = new P(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    A[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    A[e] = new P(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    A[e] = new P(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    A[e] = new P(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    A[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var I = /[\-:]([a-z])/g;
  function B(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      I,
      B
    );
    A[t] = new P(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(I, B);
    A[t] = new P(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(I, B);
    A[t] = new P(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    A[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), A.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    A[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function F(e, t, r, i) {
    var l = A.hasOwnProperty(t) ? A[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (L(t, r, l, i) && (r = null), i || l === null ? E(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : l.mustUseProperty ? e[l.propertyName] = r === null ? l.type === 3 ? !1 : "" : r : (t = l.attributeName, i = l.attributeNamespace, r === null ? e.removeAttribute(t) : (l = l.type, r = l === 3 || l === 4 && r === !0 ? "" : "" + r, i ? e.setAttributeNS(i, t, r) : e.setAttribute(t, r))));
  }
  var M = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, W = Symbol.for("react.element"), V = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), ht = Symbol.for("react.context"), Fe = Symbol.for("react.forward_ref"), He = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), je = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), ve = Symbol.for("react.offscreen"), K = Symbol.iterator;
  function ne(e) {
    return e === null || typeof e != "object" ? null : (e = K && e[K] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Object.assign, p;
  function y(e) {
    if (p === void 0) try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      p = t && t[1] || "";
    }
    return `
` + p + e;
  }
  var _ = !1;
  function z(e, t) {
    if (!e || _) return "";
    _ = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (T) {
          var i = T;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (T) {
          i = T;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (T) {
          i = T;
        }
        e();
      }
    } catch (T) {
      if (T && i && typeof T.stack == "string") {
        for (var l = T.stack.split(`
`), a = i.stack.split(`
`), d = l.length - 1, v = a.length - 1; 1 <= d && 0 <= v && l[d] !== a[v]; ) v--;
        for (; 1 <= d && 0 <= v; d--, v--) if (l[d] !== a[v]) {
          if (d !== 1 || v !== 1)
            do
              if (d--, v--, 0 > v || l[d] !== a[v]) {
                var S = `
` + l[d].replace(" at new ", " at ");
                return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), S;
              }
            while (1 <= d && 0 <= v);
          break;
        }
      }
    } finally {
      _ = !1, Error.prepareStackTrace = r;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function Q(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = z(e.type, !1), e;
      case 11:
        return e = z(e.type.render, !1), e;
      case 1:
        return e = z(e.type, !0), e;
      default:
        return "";
    }
  }
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case j:
        return "Fragment";
      case V:
        return "Portal";
      case le:
        return "Profiler";
      case ae:
        return "StrictMode";
      case He:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ht:
        return (e.displayName || "Context") + ".Consumer";
      case me:
        return (e._context.displayName || "Context") + ".Provider";
      case Fe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case je:
        return t = e.displayName || null, t !== null ? t : G(e.type) || "Memo";
      case ze:
        t = e._payload, e = e._init;
        try {
          return G(e(t));
        } catch {
        }
    }
    return null;
  }
  function Z(e) {
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
        return G(t);
      case 8:
        return t === ae ? "StrictMode" : "Mode";
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
  function X(e) {
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
  function ce(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function we(e) {
    var t = ce(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var l = r.get, a = r.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(d) {
        i = "" + d, a.call(this, d);
      } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
        return i;
      }, setValue: function(d) {
        i = "" + d;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Re(e) {
    e._valueTracker || (e._valueTracker = we(e));
  }
  function Ee(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), i = "";
    return e && (i = ce(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== r ? (t.setValue(e), !0) : !1;
  }
  function Ze(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ge(e, t) {
    var r = t.checked;
    return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
  }
  function $t(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    r = X(t.value != null ? t.value : r), e._wrapperState = { initialChecked: i, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function kt(e, t) {
    t = t.checked, t != null && F(e, "checked", t, !1);
  }
  function xe(e, t) {
    kt(e, t);
    var r = X(t.value), i = t.type;
    if (r != null) i === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? qt(e, t.type, r) : t.hasOwnProperty("defaultValue") && qt(e, t.type, X(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Xt(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
  }
  function qt(e, t, r) {
    (t !== "number" || Ze(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var mt = Array.isArray;
  function Ut(e, t, r, i) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
      for (r = 0; r < e.length; r++) l = t.hasOwnProperty("$" + e[r].value), e[r].selected !== l && (e[r].selected = l), l && i && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + X(r), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === r) {
          e[l].selected = !0, i && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function it(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Gr(e, t) {
    var r = t.value;
    if (r == null) {
      if (r = t.children, t = t.defaultValue, r != null) {
        if (t != null) throw Error(u(92));
        if (mt(r)) {
          if (1 < r.length) throw Error(u(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), r = t;
    }
    e._wrapperState = { initialValue: X(r) };
  }
  function Jo(e, t) {
    var r = X(t.value), i = X(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), i != null && (e.defaultValue = "" + i);
  }
  function ei(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function hn(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Zt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? hn(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var mn, cr = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, i, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, r, i, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (mn = mn || document.createElement("div"), mn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mn.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Jt(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var en = {
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
  }, Zu = ["Webkit", "ms", "Moz", "O"];
  Object.keys(en).forEach(function(e) {
    Zu.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), en[t] = en[e];
    });
  });
  function ti(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || en.hasOwnProperty(e) && en[e] ? ("" + t).trim() : t + "px";
  }
  function ni(e, t) {
    e = e.style;
    for (var r in t) if (t.hasOwnProperty(r)) {
      var i = r.indexOf("--") === 0, l = ti(r, t[r], i);
      r === "float" && (r = "cssFloat"), i ? e.setProperty(r, l) : e[r] = l;
    }
  }
  var Ju = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Yr(e, t) {
    if (t) {
      if (Ju[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function el(e, t) {
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
  var tl = null;
  function nl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var rl = null, fr = null, dr = null;
  function qa(e) {
    if (e = yo(e)) {
      if (typeof rl != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = _i(t), rl(e.stateNode, e.type, t));
    }
  }
  function Za(e) {
    fr ? dr ? dr.push(e) : dr = [e] : fr = e;
  }
  function Ja() {
    if (fr) {
      var e = fr, t = dr;
      if (dr = fr = null, qa(e), t) for (e = 0; e < t.length; e++) qa(t[e]);
    }
  }
  function ec(e, t) {
    return e(t);
  }
  function tc() {
  }
  var ol = !1;
  function nc(e, t, r) {
    if (ol) return e(t, r);
    ol = !0;
    try {
      return ec(e, t, r);
    } finally {
      ol = !1, (fr !== null || dr !== null) && (tc(), Ja());
    }
  }
  function Xr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var i = _i(r);
    if (i === null) return null;
    r = i[t];
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
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(u(231, t, typeof r));
    return r;
  }
  var il = !1;
  if (m) try {
    var qr = {};
    Object.defineProperty(qr, "passive", { get: function() {
      il = !0;
    } }), window.addEventListener("test", qr, qr), window.removeEventListener("test", qr, qr);
  } catch {
    il = !1;
  }
  function _m(e, t, r, i, l, a, d, v, S) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, T);
    } catch (U) {
      this.onError(U);
    }
  }
  var Zr = !1, ri = null, oi = !1, ul = null, Pm = { onError: function(e) {
    Zr = !0, ri = e;
  } };
  function Nm(e, t, r, i, l, a, d, v, S) {
    Zr = !1, ri = null, _m.apply(Pm, arguments);
  }
  function Rm(e, t, r, i, l, a, d, v, S) {
    if (Nm.apply(this, arguments), Zr) {
      if (Zr) {
        var T = ri;
        Zr = !1, ri = null;
      } else throw Error(u(198));
      oi || (oi = !0, ul = T);
    }
  }
  function $n(e) {
    var t = e, r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (r = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function rc(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function oc(e) {
    if ($n(e) !== e) throw Error(u(188));
  }
  function Om(e) {
    var t = e.alternate;
    if (!t) {
      if (t = $n(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var r = e, i = t; ; ) {
      var l = r.return;
      if (l === null) break;
      var a = l.alternate;
      if (a === null) {
        if (i = l.return, i !== null) {
          r = i;
          continue;
        }
        break;
      }
      if (l.child === a.child) {
        for (a = l.child; a; ) {
          if (a === r) return oc(l), e;
          if (a === i) return oc(l), t;
          a = a.sibling;
        }
        throw Error(u(188));
      }
      if (r.return !== i.return) r = l, i = a;
      else {
        for (var d = !1, v = l.child; v; ) {
          if (v === r) {
            d = !0, r = l, i = a;
            break;
          }
          if (v === i) {
            d = !0, i = l, r = a;
            break;
          }
          v = v.sibling;
        }
        if (!d) {
          for (v = a.child; v; ) {
            if (v === r) {
              d = !0, r = a, i = l;
              break;
            }
            if (v === i) {
              d = !0, i = a, r = l;
              break;
            }
            v = v.sibling;
          }
          if (!d) throw Error(u(189));
        }
      }
      if (r.alternate !== i) throw Error(u(190));
    }
    if (r.tag !== 3) throw Error(u(188));
    return r.stateNode.current === r ? e : t;
  }
  function ic(e) {
    return e = Om(e), e !== null ? uc(e) : null;
  }
  function uc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = uc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var lc = o.unstable_scheduleCallback, sc = o.unstable_cancelCallback, Tm = o.unstable_shouldYield, Dm = o.unstable_requestPaint, Ae = o.unstable_now, Am = o.unstable_getCurrentPriorityLevel, ll = o.unstable_ImmediatePriority, ac = o.unstable_UserBlockingPriority, ii = o.unstable_NormalPriority, Lm = o.unstable_LowPriority, cc = o.unstable_IdlePriority, ui = null, Wt = null;
  function Im(e) {
    if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
      Wt.onCommitFiberRoot(ui, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Tt = Math.clz32 ? Math.clz32 : jm, Mm = Math.log, Fm = Math.LN2;
  function jm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Mm(e) / Fm | 0) | 0;
  }
  var li = 64, si = 4194304;
  function Jr(e) {
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
  function ai(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var i = 0, l = e.suspendedLanes, a = e.pingedLanes, d = r & 268435455;
    if (d !== 0) {
      var v = d & ~l;
      v !== 0 ? i = Jr(v) : (a &= d, a !== 0 && (i = Jr(a)));
    } else d = r & ~l, d !== 0 ? i = Jr(d) : a !== 0 && (i = Jr(a));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) r = 31 - Tt(t), l = 1 << r, i |= e[r], t &= ~l;
    return i;
  }
  function zm(e, t) {
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
  function Bm(e, t) {
    for (var r = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
      var d = 31 - Tt(a), v = 1 << d, S = l[d];
      S === -1 ? ((v & r) === 0 || (v & i) !== 0) && (l[d] = zm(v, t)) : S <= t && (e.expiredLanes |= v), a &= ~v;
    }
  }
  function sl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function fc() {
    var e = li;
    return li <<= 1, (li & 4194240) === 0 && (li = 64), e;
  }
  function al(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function eo(e, t, r) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Tt(t), e[t] = r;
  }
  function $m(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var l = 31 - Tt(r), a = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, r &= ~a;
    }
  }
  function cl(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var i = 31 - Tt(r), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), r &= ~l;
    }
  }
  var Se = 0;
  function dc(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var pc, fl, hc, mc, vc, dl = !1, ci = [], vn = null, gn = null, yn = null, to = /* @__PURE__ */ new Map(), no = /* @__PURE__ */ new Map(), wn = [], Um = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function gc(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        vn = null;
        break;
      case "dragenter":
      case "dragleave":
        gn = null;
        break;
      case "mouseover":
      case "mouseout":
        yn = null;
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
  function ro(e, t, r, i, l, a) {
    return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: i, nativeEvent: a, targetContainers: [l] }, t !== null && (t = yo(t), t !== null && fl(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Wm(e, t, r, i, l) {
    switch (t) {
      case "focusin":
        return vn = ro(vn, e, t, r, i, l), !0;
      case "dragenter":
        return gn = ro(gn, e, t, r, i, l), !0;
      case "mouseover":
        return yn = ro(yn, e, t, r, i, l), !0;
      case "pointerover":
        var a = l.pointerId;
        return to.set(a, ro(to.get(a) || null, e, t, r, i, l)), !0;
      case "gotpointercapture":
        return a = l.pointerId, no.set(a, ro(no.get(a) || null, e, t, r, i, l)), !0;
    }
    return !1;
  }
  function yc(e) {
    var t = Un(e.target);
    if (t !== null) {
      var r = $n(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = rc(r), t !== null) {
            e.blockedOn = t, vc(e.priority, function() {
              hc(r);
            });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function fi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = hl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(r.type, r);
        tl = i, r.target.dispatchEvent(i), tl = null;
      } else return t = yo(r), t !== null && fl(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function wc(e, t, r) {
    fi(e) && r.delete(t);
  }
  function bm() {
    dl = !1, vn !== null && fi(vn) && (vn = null), gn !== null && fi(gn) && (gn = null), yn !== null && fi(yn) && (yn = null), to.forEach(wc), no.forEach(wc);
  }
  function oo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, dl || (dl = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, bm)));
  }
  function io(e) {
    function t(l) {
      return oo(l, e);
    }
    if (0 < ci.length) {
      oo(ci[0], e);
      for (var r = 1; r < ci.length; r++) {
        var i = ci[r];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (vn !== null && oo(vn, e), gn !== null && oo(gn, e), yn !== null && oo(yn, e), to.forEach(t), no.forEach(t), r = 0; r < wn.length; r++) i = wn[r], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < wn.length && (r = wn[0], r.blockedOn === null); ) yc(r), r.blockedOn === null && wn.shift();
  }
  var pr = M.ReactCurrentBatchConfig, di = !0;
  function Vm(e, t, r, i) {
    var l = Se, a = pr.transition;
    pr.transition = null;
    try {
      Se = 1, pl(e, t, r, i);
    } finally {
      Se = l, pr.transition = a;
    }
  }
  function Hm(e, t, r, i) {
    var l = Se, a = pr.transition;
    pr.transition = null;
    try {
      Se = 4, pl(e, t, r, i);
    } finally {
      Se = l, pr.transition = a;
    }
  }
  function pl(e, t, r, i) {
    if (di) {
      var l = hl(e, t, r, i);
      if (l === null) Dl(e, t, i, pi, r), gc(e, i);
      else if (Wm(l, e, t, r, i)) i.stopPropagation();
      else if (gc(e, i), t & 4 && -1 < Um.indexOf(e)) {
        for (; l !== null; ) {
          var a = yo(l);
          if (a !== null && pc(a), a = hl(e, t, r, i), a === null && Dl(e, t, i, pi, r), a === l) break;
          l = a;
        }
        l !== null && i.stopPropagation();
      } else Dl(e, t, i, null, r);
    }
  }
  var pi = null;
  function hl(e, t, r, i) {
    if (pi = null, e = nl(i), e = Un(e), e !== null) if (t = $n(e), t === null) e = null;
    else if (r = t.tag, r === 13) {
      if (e = rc(t), e !== null) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return pi = e, null;
  }
  function Sc(e) {
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
        switch (Am()) {
          case ll:
            return 1;
          case ac:
            return 4;
          case ii:
          case Lm:
            return 16;
          case cc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Sn = null, ml = null, hi = null;
  function Ec() {
    if (hi) return hi;
    var e, t = ml, r = t.length, i, l = "value" in Sn ? Sn.value : Sn.textContent, a = l.length;
    for (e = 0; e < r && t[e] === l[e]; e++) ;
    var d = r - e;
    for (i = 1; i <= d && t[r - i] === l[a - i]; i++) ;
    return hi = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function mi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vi() {
    return !0;
  }
  function kc() {
    return !1;
  }
  function vt(e) {
    function t(r, i, l, a, d) {
      this._reactName = r, this._targetInst = l, this.type = i, this.nativeEvent = a, this.target = d, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (r = e[v], this[v] = r ? r(a) : a[v]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? vi : kc, this.isPropagationStopped = kc, this;
    }
    return Y(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var r = this.nativeEvent;
      r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = vi);
    }, stopPropagation: function() {
      var r = this.nativeEvent;
      r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = vi);
    }, persist: function() {
    }, isPersistent: vi }), t;
  }
  var hr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, vl = vt(hr), uo = Y({}, hr, { view: 0, detail: 0 }), Qm = vt(uo), gl, yl, lo, gi = Y({}, uo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Sl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== lo && (lo && e.type === "mousemove" ? (gl = e.screenX - lo.screenX, yl = e.screenY - lo.screenY) : yl = gl = 0, lo = e), gl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : yl;
  } }), xc = vt(gi), Km = Y({}, gi, { dataTransfer: 0 }), Gm = vt(Km), Ym = Y({}, uo, { relatedTarget: 0 }), wl = vt(Ym), Xm = Y({}, hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qm = vt(Xm), Zm = Y({}, hr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Jm = vt(Zm), ev = Y({}, hr, { data: 0 }), Cc = vt(ev), tv = {
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
  }, nv = {
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
  }, rv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ov(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = rv[e]) ? !!t[e] : !1;
  }
  function Sl() {
    return ov;
  }
  var iv = Y({}, uo, { key: function(e) {
    if (e.key) {
      var t = tv[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = mi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? nv[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Sl, charCode: function(e) {
    return e.type === "keypress" ? mi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), uv = vt(iv), lv = Y({}, gi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), _c = vt(lv), sv = Y({}, uo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Sl }), av = vt(sv), cv = Y({}, hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), fv = vt(cv), dv = Y({}, gi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pv = vt(dv), hv = [9, 13, 27, 32], El = m && "CompositionEvent" in window, so = null;
  m && "documentMode" in document && (so = document.documentMode);
  var mv = m && "TextEvent" in window && !so, Pc = m && (!El || so && 8 < so && 11 >= so), Nc = " ", Rc = !1;
  function Oc(e, t) {
    switch (e) {
      case "keyup":
        return hv.indexOf(t.keyCode) !== -1;
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
  function Tc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var mr = !1;
  function vv(e, t) {
    switch (e) {
      case "compositionend":
        return Tc(t);
      case "keypress":
        return t.which !== 32 ? null : (Rc = !0, Nc);
      case "textInput":
        return e = t.data, e === Nc && Rc ? null : e;
      default:
        return null;
    }
  }
  function gv(e, t) {
    if (mr) return e === "compositionend" || !El && Oc(e, t) ? (e = Ec(), hi = ml = Sn = null, mr = !1, e) : null;
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
        return Pc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var yv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Dc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!yv[e.type] : t === "textarea";
  }
  function Ac(e, t, r, i) {
    Za(i), t = ki(t, "onChange"), 0 < t.length && (r = new vl("onChange", "change", null, r, i), e.push({ event: r, listeners: t }));
  }
  var ao = null, co = null;
  function wv(e) {
    Xc(e, 0);
  }
  function yi(e) {
    var t = Sr(e);
    if (Ee(t)) return e;
  }
  function Sv(e, t) {
    if (e === "change") return t;
  }
  var Lc = !1;
  if (m) {
    var kl;
    if (m) {
      var xl = "oninput" in document;
      if (!xl) {
        var Ic = document.createElement("div");
        Ic.setAttribute("oninput", "return;"), xl = typeof Ic.oninput == "function";
      }
      kl = xl;
    } else kl = !1;
    Lc = kl && (!document.documentMode || 9 < document.documentMode);
  }
  function Mc() {
    ao && (ao.detachEvent("onpropertychange", Fc), co = ao = null);
  }
  function Fc(e) {
    if (e.propertyName === "value" && yi(co)) {
      var t = [];
      Ac(t, co, e, nl(e)), nc(wv, t);
    }
  }
  function Ev(e, t, r) {
    e === "focusin" ? (Mc(), ao = t, co = r, ao.attachEvent("onpropertychange", Fc)) : e === "focusout" && Mc();
  }
  function kv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return yi(co);
  }
  function xv(e, t) {
    if (e === "click") return yi(t);
  }
  function Cv(e, t) {
    if (e === "input" || e === "change") return yi(t);
  }
  function _v(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Dt = typeof Object.is == "function" ? Object.is : _v;
  function fo(e, t) {
    if (Dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e), i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var l = r[i];
      if (!g.call(t, l) || !Dt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function jc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function zc(e, t) {
    var r = jc(e);
    e = 0;
    for (var i; r; ) {
      if (r.nodeType === 3) {
        if (i = e + r.textContent.length, e <= t && i >= t) return { node: r, offset: t - e };
        e = i;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = jc(r);
    }
  }
  function Bc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function $c() {
    for (var e = window, t = Ze(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Ze(e.document);
    }
    return t;
  }
  function Cl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Pv(e) {
    var t = $c(), r = e.focusedElem, i = e.selectionRange;
    if (t !== r && r && r.ownerDocument && Bc(r.ownerDocument.documentElement, r)) {
      if (i !== null && Cl(r)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
        else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = r.textContent.length, a = Math.min(i.start, l);
          i = i.end === void 0 ? a : Math.min(i.end, l), !e.extend && a > i && (l = i, i = a, a = l), l = zc(r, a);
          var d = zc(
            r,
            i
          );
          l && d && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), a > i ? (e.addRange(t), e.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Nv = m && "documentMode" in document && 11 >= document.documentMode, vr = null, _l = null, po = null, Pl = !1;
  function Uc(e, t, r) {
    var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Pl || vr == null || vr !== Ze(i) || (i = vr, "selectionStart" in i && Cl(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), po && fo(po, i) || (po = i, i = ki(_l, "onSelect"), 0 < i.length && (t = new vl("onSelect", "select", null, t, r), e.push({ event: t, listeners: i }), t.target = vr)));
  }
  function wi(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var gr = { animationend: wi("Animation", "AnimationEnd"), animationiteration: wi("Animation", "AnimationIteration"), animationstart: wi("Animation", "AnimationStart"), transitionend: wi("Transition", "TransitionEnd") }, Nl = {}, Wc = {};
  m && (Wc = document.createElement("div").style, "AnimationEvent" in window || (delete gr.animationend.animation, delete gr.animationiteration.animation, delete gr.animationstart.animation), "TransitionEvent" in window || delete gr.transitionend.transition);
  function Si(e) {
    if (Nl[e]) return Nl[e];
    if (!gr[e]) return e;
    var t = gr[e], r;
    for (r in t) if (t.hasOwnProperty(r) && r in Wc) return Nl[e] = t[r];
    return e;
  }
  var bc = Si("animationend"), Vc = Si("animationiteration"), Hc = Si("animationstart"), Qc = Si("transitionend"), Kc = /* @__PURE__ */ new Map(), Gc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function En(e, t) {
    Kc.set(e, t), f(t, [e]);
  }
  for (var Rl = 0; Rl < Gc.length; Rl++) {
    var Ol = Gc[Rl], Rv = Ol.toLowerCase(), Ov = Ol[0].toUpperCase() + Ol.slice(1);
    En(Rv, "on" + Ov);
  }
  En(bc, "onAnimationEnd"), En(Vc, "onAnimationIteration"), En(Hc, "onAnimationStart"), En("dblclick", "onDoubleClick"), En("focusin", "onFocus"), En("focusout", "onBlur"), En(Qc, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ho = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Tv = new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));
  function Yc(e, t, r) {
    var i = e.type || "unknown-event";
    e.currentTarget = r, Rm(i, t, void 0, e), e.currentTarget = null;
  }
  function Xc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r], l = i.event;
      i = i.listeners;
      e: {
        var a = void 0;
        if (t) for (var d = i.length - 1; 0 <= d; d--) {
          var v = i[d], S = v.instance, T = v.currentTarget;
          if (v = v.listener, S !== a && l.isPropagationStopped()) break e;
          Yc(l, v, T), a = S;
        }
        else for (d = 0; d < i.length; d++) {
          if (v = i[d], S = v.instance, T = v.currentTarget, v = v.listener, S !== a && l.isPropagationStopped()) break e;
          Yc(l, v, T), a = S;
        }
      }
    }
    if (oi) throw e = ul, oi = !1, ul = null, e;
  }
  function Ce(e, t) {
    var r = t[jl];
    r === void 0 && (r = t[jl] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    r.has(i) || (qc(t, e, 2, !1), r.add(i));
  }
  function Tl(e, t, r) {
    var i = 0;
    t && (i |= 4), qc(r, e, i, t);
  }
  var Ei = "_reactListening" + Math.random().toString(36).slice(2);
  function mo(e) {
    if (!e[Ei]) {
      e[Ei] = !0, s.forEach(function(r) {
        r !== "selectionchange" && (Tv.has(r) || Tl(r, !1, e), Tl(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ei] || (t[Ei] = !0, Tl("selectionchange", !1, t));
    }
  }
  function qc(e, t, r, i) {
    switch (Sc(t)) {
      case 1:
        var l = Vm;
        break;
      case 4:
        l = Hm;
        break;
      default:
        l = pl;
    }
    r = l.bind(null, t, r, e), l = void 0, !il || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: l }) : e.addEventListener(t, r, !0) : l !== void 0 ? e.addEventListener(t, r, { passive: l }) : e.addEventListener(t, r, !1);
  }
  function Dl(e, t, r, i, l) {
    var a = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null) e: for (; ; ) {
      if (i === null) return;
      var d = i.tag;
      if (d === 3 || d === 4) {
        var v = i.stateNode.containerInfo;
        if (v === l || v.nodeType === 8 && v.parentNode === l) break;
        if (d === 4) for (d = i.return; d !== null; ) {
          var S = d.tag;
          if ((S === 3 || S === 4) && (S = d.stateNode.containerInfo, S === l || S.nodeType === 8 && S.parentNode === l)) return;
          d = d.return;
        }
        for (; v !== null; ) {
          if (d = Un(v), d === null) return;
          if (S = d.tag, S === 5 || S === 6) {
            i = a = d;
            continue e;
          }
          v = v.parentNode;
        }
      }
      i = i.return;
    }
    nc(function() {
      var T = a, U = nl(r), b = [];
      e: {
        var $ = Kc.get(e);
        if ($ !== void 0) {
          var q = vl, te = e;
          switch (e) {
            case "keypress":
              if (mi(r) === 0) break e;
            case "keydown":
            case "keyup":
              q = uv;
              break;
            case "focusin":
              te = "focus", q = wl;
              break;
            case "focusout":
              te = "blur", q = wl;
              break;
            case "beforeblur":
            case "afterblur":
              q = wl;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = xc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = Gm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = av;
              break;
            case bc:
            case Vc:
            case Hc:
              q = qm;
              break;
            case Qc:
              q = fv;
              break;
            case "scroll":
              q = Qm;
              break;
            case "wheel":
              q = pv;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = Jm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = _c;
          }
          var re = (t & 4) !== 0, Le = !re && e === "scroll", N = re ? $ !== null ? $ + "Capture" : null : $;
          re = [];
          for (var k = T, R; k !== null; ) {
            R = k;
            var H = R.stateNode;
            if (R.tag === 5 && H !== null && (R = H, N !== null && (H = Xr(k, N), H != null && re.push(vo(k, H, R)))), Le) break;
            k = k.return;
          }
          0 < re.length && ($ = new q($, te, null, r, U), b.push({ event: $, listeners: re }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if ($ = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", $ && r !== tl && (te = r.relatedTarget || r.fromElement) && (Un(te) || te[tn])) break e;
          if ((q || $) && ($ = U.window === U ? U : ($ = U.ownerDocument) ? $.defaultView || $.parentWindow : window, q ? (te = r.relatedTarget || r.toElement, q = T, te = te ? Un(te) : null, te !== null && (Le = $n(te), te !== Le || te.tag !== 5 && te.tag !== 6) && (te = null)) : (q = null, te = T), q !== te)) {
            if (re = xc, H = "onMouseLeave", N = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (re = _c, H = "onPointerLeave", N = "onPointerEnter", k = "pointer"), Le = q == null ? $ : Sr(q), R = te == null ? $ : Sr(te), $ = new re(H, k + "leave", q, r, U), $.target = Le, $.relatedTarget = R, H = null, Un(U) === T && (re = new re(N, k + "enter", te, r, U), re.target = R, re.relatedTarget = Le, H = re), Le = H, q && te) t: {
              for (re = q, N = te, k = 0, R = re; R; R = yr(R)) k++;
              for (R = 0, H = N; H; H = yr(H)) R++;
              for (; 0 < k - R; ) re = yr(re), k--;
              for (; 0 < R - k; ) N = yr(N), R--;
              for (; k--; ) {
                if (re === N || N !== null && re === N.alternate) break t;
                re = yr(re), N = yr(N);
              }
              re = null;
            }
            else re = null;
            q !== null && Zc(b, $, q, re, !1), te !== null && Le !== null && Zc(b, Le, te, re, !0);
          }
        }
        e: {
          if ($ = T ? Sr(T) : window, q = $.nodeName && $.nodeName.toLowerCase(), q === "select" || q === "input" && $.type === "file") var oe = Sv;
          else if (Dc($)) if (Lc) oe = Cv;
          else {
            oe = kv;
            var ie = Ev;
          }
          else (q = $.nodeName) && q.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (oe = xv);
          if (oe && (oe = oe(e, T))) {
            Ac(b, oe, r, U);
            break e;
          }
          ie && ie(e, $, T), e === "focusout" && (ie = $._wrapperState) && ie.controlled && $.type === "number" && qt($, "number", $.value);
        }
        switch (ie = T ? Sr(T) : window, e) {
          case "focusin":
            (Dc(ie) || ie.contentEditable === "true") && (vr = ie, _l = T, po = null);
            break;
          case "focusout":
            po = _l = vr = null;
            break;
          case "mousedown":
            Pl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pl = !1, Uc(b, r, U);
            break;
          case "selectionchange":
            if (Nv) break;
          case "keydown":
          case "keyup":
            Uc(b, r, U);
        }
        var ue;
        if (El) e: {
          switch (e) {
            case "compositionstart":
              var se = "onCompositionStart";
              break e;
            case "compositionend":
              se = "onCompositionEnd";
              break e;
            case "compositionupdate":
              se = "onCompositionUpdate";
              break e;
          }
          se = void 0;
        }
        else mr ? Oc(e, r) && (se = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (se = "onCompositionStart");
        se && (Pc && r.locale !== "ko" && (mr || se !== "onCompositionStart" ? se === "onCompositionEnd" && mr && (ue = Ec()) : (Sn = U, ml = "value" in Sn ? Sn.value : Sn.textContent, mr = !0)), ie = ki(T, se), 0 < ie.length && (se = new Cc(se, e, null, r, U), b.push({ event: se, listeners: ie }), ue ? se.data = ue : (ue = Tc(r), ue !== null && (se.data = ue)))), (ue = mv ? vv(e, r) : gv(e, r)) && (T = ki(T, "onBeforeInput"), 0 < T.length && (U = new Cc("onBeforeInput", "beforeinput", null, r, U), b.push({ event: U, listeners: T }), U.data = ue));
      }
      Xc(b, t);
    });
  }
  function vo(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function ki(e, t) {
    for (var r = t + "Capture", i = []; e !== null; ) {
      var l = e, a = l.stateNode;
      l.tag === 5 && a !== null && (l = a, a = Xr(e, r), a != null && i.unshift(vo(e, a, l)), a = Xr(e, t), a != null && i.push(vo(e, a, l))), e = e.return;
    }
    return i;
  }
  function yr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Zc(e, t, r, i, l) {
    for (var a = t._reactName, d = []; r !== null && r !== i; ) {
      var v = r, S = v.alternate, T = v.stateNode;
      if (S !== null && S === i) break;
      v.tag === 5 && T !== null && (v = T, l ? (S = Xr(r, a), S != null && d.unshift(vo(r, S, v))) : l || (S = Xr(r, a), S != null && d.push(vo(r, S, v)))), r = r.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Dv = /\r\n?/g, Av = /\u0000|\uFFFD/g;
  function Jc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Dv, `
`).replace(Av, "");
  }
  function xi(e, t, r) {
    if (t = Jc(t), Jc(e) !== t && r) throw Error(u(425));
  }
  function Ci() {
  }
  var Al = null, Ll = null;
  function Il(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ml = typeof setTimeout == "function" ? setTimeout : void 0, Lv = typeof clearTimeout == "function" ? clearTimeout : void 0, ef = typeof Promise == "function" ? Promise : void 0, Iv = typeof queueMicrotask == "function" ? queueMicrotask : typeof ef < "u" ? function(e) {
    return ef.resolve(null).then(e).catch(Mv);
  } : Ml;
  function Mv(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fl(e, t) {
    var r = t, i = 0;
    do {
      var l = r.nextSibling;
      if (e.removeChild(r), l && l.nodeType === 8) if (r = l.data, r === "/$") {
        if (i === 0) {
          e.removeChild(l), io(t);
          return;
        }
        i--;
      } else r !== "$" && r !== "$?" && r !== "$!" || i++;
      r = l;
    } while (r);
    io(t);
  }
  function kn(e) {
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
  function tf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var wr = Math.random().toString(36).slice(2), bt = "__reactFiber$" + wr, go = "__reactProps$" + wr, tn = "__reactContainer$" + wr, jl = "__reactEvents$" + wr, Fv = "__reactListeners$" + wr, jv = "__reactHandles$" + wr;
  function Un(e) {
    var t = e[bt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[tn] || r[bt]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = tf(e); e !== null; ) {
          if (r = e[bt]) return r;
          e = tf(e);
        }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function yo(e) {
    return e = e[bt] || e[tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Sr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function _i(e) {
    return e[go] || null;
  }
  var zl = [], Er = -1;
  function xn(e) {
    return { current: e };
  }
  function _e(e) {
    0 > Er || (e.current = zl[Er], zl[Er] = null, Er--);
  }
  function ke(e, t) {
    Er++, zl[Er] = e.current, e.current = t;
  }
  var Cn = {}, Je = xn(Cn), ut = xn(!1), Wn = Cn;
  function kr(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Cn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, a;
    for (a in r) l[a] = t[a];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function lt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Pi() {
    _e(ut), _e(Je);
  }
  function nf(e, t, r) {
    if (Je.current !== Cn) throw Error(u(168));
    ke(Je, t), ke(ut, r);
  }
  function rf(e, t, r) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return r;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(u(108, Z(e) || "Unknown", l));
    return Y({}, r, i);
  }
  function Ni(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Cn, Wn = Je.current, ke(Je, e), ke(ut, ut.current), !0;
  }
  function of(e, t, r) {
    var i = e.stateNode;
    if (!i) throw Error(u(169));
    r ? (e = rf(e, t, Wn), i.__reactInternalMemoizedMergedChildContext = e, _e(ut), _e(Je), ke(Je, e)) : _e(ut), ke(ut, r);
  }
  var nn = null, Ri = !1, Bl = !1;
  function uf(e) {
    nn === null ? nn = [e] : nn.push(e);
  }
  function zv(e) {
    Ri = !0, uf(e);
  }
  function _n() {
    if (!Bl && nn !== null) {
      Bl = !0;
      var e = 0, t = Se;
      try {
        var r = nn;
        for (Se = 1; e < r.length; e++) {
          var i = r[e];
          do
            i = i(!0);
          while (i !== null);
        }
        nn = null, Ri = !1;
      } catch (l) {
        throw nn !== null && (nn = nn.slice(e + 1)), lc(ll, _n), l;
      } finally {
        Se = t, Bl = !1;
      }
    }
    return null;
  }
  var xr = [], Cr = 0, Oi = null, Ti = 0, xt = [], Ct = 0, bn = null, rn = 1, on = "";
  function Vn(e, t) {
    xr[Cr++] = Ti, xr[Cr++] = Oi, Oi = e, Ti = t;
  }
  function lf(e, t, r) {
    xt[Ct++] = rn, xt[Ct++] = on, xt[Ct++] = bn, bn = e;
    var i = rn;
    e = on;
    var l = 32 - Tt(i) - 1;
    i &= ~(1 << l), r += 1;
    var a = 32 - Tt(t) + l;
    if (30 < a) {
      var d = l - l % 5;
      a = (i & (1 << d) - 1).toString(32), i >>= d, l -= d, rn = 1 << 32 - Tt(t) + l | r << l | i, on = a + e;
    } else rn = 1 << a | r << l | i, on = e;
  }
  function $l(e) {
    e.return !== null && (Vn(e, 1), lf(e, 1, 0));
  }
  function Ul(e) {
    for (; e === Oi; ) Oi = xr[--Cr], xr[Cr] = null, Ti = xr[--Cr], xr[Cr] = null;
    for (; e === bn; ) bn = xt[--Ct], xt[Ct] = null, on = xt[--Ct], xt[Ct] = null, rn = xt[--Ct], xt[Ct] = null;
  }
  var gt = null, yt = null, Ne = !1, At = null;
  function sf(e, t) {
    var r = Rt(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
  }
  function af(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, gt = e, yt = kn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, gt = e, yt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (r = bn !== null ? { id: rn, overflow: on } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Rt(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, gt = e, yt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Wl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function bl(e) {
    if (Ne) {
      var t = yt;
      if (t) {
        var r = t;
        if (!af(e, t)) {
          if (Wl(e)) throw Error(u(418));
          t = kn(r.nextSibling);
          var i = gt;
          t && af(e, t) ? sf(i, r) : (e.flags = e.flags & -4097 | 2, Ne = !1, gt = e);
        }
      } else {
        if (Wl(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, Ne = !1, gt = e;
      }
    }
  }
  function cf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    gt = e;
  }
  function Di(e) {
    if (e !== gt) return !1;
    if (!Ne) return cf(e), Ne = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Il(e.type, e.memoizedProps)), t && (t = yt)) {
      if (Wl(e)) throw ff(), Error(u(418));
      for (; t; ) sf(e, t), t = kn(t.nextSibling);
    }
    if (cf(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                yt = kn(e.nextSibling);
                break e;
              }
              t--;
            } else r !== "$" && r !== "$!" && r !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        yt = null;
      }
    } else yt = gt ? kn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ff() {
    for (var e = yt; e; ) e = kn(e.nextSibling);
  }
  function _r() {
    yt = gt = null, Ne = !1;
  }
  function Vl(e) {
    At === null ? At = [e] : At.push(e);
  }
  var Bv = M.ReactCurrentBatchConfig;
  function wo(e, t, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (r._owner) {
        if (r = r._owner, r) {
          if (r.tag !== 1) throw Error(u(309));
          var i = r.stateNode;
        }
        if (!i) throw Error(u(147, e));
        var l = i, a = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(d) {
          var v = l.refs;
          d === null ? delete v[a] : v[a] = d;
        }, t._stringRef = a, t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!r._owner) throw Error(u(290, e));
    }
    return e;
  }
  function Ai(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function df(e) {
    var t = e._init;
    return t(e._payload);
  }
  function pf(e) {
    function t(N, k) {
      if (e) {
        var R = N.deletions;
        R === null ? (N.deletions = [k], N.flags |= 16) : R.push(k);
      }
    }
    function r(N, k) {
      if (!e) return null;
      for (; k !== null; ) t(N, k), k = k.sibling;
      return null;
    }
    function i(N, k) {
      for (N = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? N.set(k.key, k) : N.set(k.index, k), k = k.sibling;
      return N;
    }
    function l(N, k) {
      return N = Ln(N, k), N.index = 0, N.sibling = null, N;
    }
    function a(N, k, R) {
      return N.index = R, e ? (R = N.alternate, R !== null ? (R = R.index, R < k ? (N.flags |= 2, k) : R) : (N.flags |= 2, k)) : (N.flags |= 1048576, k);
    }
    function d(N) {
      return e && N.alternate === null && (N.flags |= 2), N;
    }
    function v(N, k, R, H) {
      return k === null || k.tag !== 6 ? (k = Ms(R, N.mode, H), k.return = N, k) : (k = l(k, R), k.return = N, k);
    }
    function S(N, k, R, H) {
      var oe = R.type;
      return oe === j ? U(N, k, R.props.children, H, R.key) : k !== null && (k.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === ze && df(oe) === k.type) ? (H = l(k, R.props), H.ref = wo(N, k, R), H.return = N, H) : (H = nu(R.type, R.key, R.props, null, N.mode, H), H.ref = wo(N, k, R), H.return = N, H);
    }
    function T(N, k, R, H) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== R.containerInfo || k.stateNode.implementation !== R.implementation ? (k = Fs(R, N.mode, H), k.return = N, k) : (k = l(k, R.children || []), k.return = N, k);
    }
    function U(N, k, R, H, oe) {
      return k === null || k.tag !== 7 ? (k = Zn(R, N.mode, H, oe), k.return = N, k) : (k = l(k, R), k.return = N, k);
    }
    function b(N, k, R) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Ms("" + k, N.mode, R), k.return = N, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case W:
            return R = nu(k.type, k.key, k.props, null, N.mode, R), R.ref = wo(N, null, k), R.return = N, R;
          case V:
            return k = Fs(k, N.mode, R), k.return = N, k;
          case ze:
            var H = k._init;
            return b(N, H(k._payload), R);
        }
        if (mt(k) || ne(k)) return k = Zn(k, N.mode, R, null), k.return = N, k;
        Ai(N, k);
      }
      return null;
    }
    function $(N, k, R, H) {
      var oe = k !== null ? k.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return oe !== null ? null : v(N, k, "" + R, H);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case W:
            return R.key === oe ? S(N, k, R, H) : null;
          case V:
            return R.key === oe ? T(N, k, R, H) : null;
          case ze:
            return oe = R._init, $(
              N,
              k,
              oe(R._payload),
              H
            );
        }
        if (mt(R) || ne(R)) return oe !== null ? null : U(N, k, R, H, null);
        Ai(N, R);
      }
      return null;
    }
    function q(N, k, R, H, oe) {
      if (typeof H == "string" && H !== "" || typeof H == "number") return N = N.get(R) || null, v(k, N, "" + H, oe);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case W:
            return N = N.get(H.key === null ? R : H.key) || null, S(k, N, H, oe);
          case V:
            return N = N.get(H.key === null ? R : H.key) || null, T(k, N, H, oe);
          case ze:
            var ie = H._init;
            return q(N, k, R, ie(H._payload), oe);
        }
        if (mt(H) || ne(H)) return N = N.get(R) || null, U(k, N, H, oe, null);
        Ai(k, H);
      }
      return null;
    }
    function te(N, k, R, H) {
      for (var oe = null, ie = null, ue = k, se = k = 0, be = null; ue !== null && se < R.length; se++) {
        ue.index > se ? (be = ue, ue = null) : be = ue.sibling;
        var he = $(N, ue, R[se], H);
        if (he === null) {
          ue === null && (ue = be);
          break;
        }
        e && ue && he.alternate === null && t(N, ue), k = a(he, k, se), ie === null ? oe = he : ie.sibling = he, ie = he, ue = be;
      }
      if (se === R.length) return r(N, ue), Ne && Vn(N, se), oe;
      if (ue === null) {
        for (; se < R.length; se++) ue = b(N, R[se], H), ue !== null && (k = a(ue, k, se), ie === null ? oe = ue : ie.sibling = ue, ie = ue);
        return Ne && Vn(N, se), oe;
      }
      for (ue = i(N, ue); se < R.length; se++) be = q(ue, N, se, R[se], H), be !== null && (e && be.alternate !== null && ue.delete(be.key === null ? se : be.key), k = a(be, k, se), ie === null ? oe = be : ie.sibling = be, ie = be);
      return e && ue.forEach(function(In) {
        return t(N, In);
      }), Ne && Vn(N, se), oe;
    }
    function re(N, k, R, H) {
      var oe = ne(R);
      if (typeof oe != "function") throw Error(u(150));
      if (R = oe.call(R), R == null) throw Error(u(151));
      for (var ie = oe = null, ue = k, se = k = 0, be = null, he = R.next(); ue !== null && !he.done; se++, he = R.next()) {
        ue.index > se ? (be = ue, ue = null) : be = ue.sibling;
        var In = $(N, ue, he.value, H);
        if (In === null) {
          ue === null && (ue = be);
          break;
        }
        e && ue && In.alternate === null && t(N, ue), k = a(In, k, se), ie === null ? oe = In : ie.sibling = In, ie = In, ue = be;
      }
      if (he.done) return r(
        N,
        ue
      ), Ne && Vn(N, se), oe;
      if (ue === null) {
        for (; !he.done; se++, he = R.next()) he = b(N, he.value, H), he !== null && (k = a(he, k, se), ie === null ? oe = he : ie.sibling = he, ie = he);
        return Ne && Vn(N, se), oe;
      }
      for (ue = i(N, ue); !he.done; se++, he = R.next()) he = q(ue, N, se, he.value, H), he !== null && (e && he.alternate !== null && ue.delete(he.key === null ? se : he.key), k = a(he, k, se), ie === null ? oe = he : ie.sibling = he, ie = he);
      return e && ue.forEach(function(yg) {
        return t(N, yg);
      }), Ne && Vn(N, se), oe;
    }
    function Le(N, k, R, H) {
      if (typeof R == "object" && R !== null && R.type === j && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case W:
            e: {
              for (var oe = R.key, ie = k; ie !== null; ) {
                if (ie.key === oe) {
                  if (oe = R.type, oe === j) {
                    if (ie.tag === 7) {
                      r(N, ie.sibling), k = l(ie, R.props.children), k.return = N, N = k;
                      break e;
                    }
                  } else if (ie.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === ze && df(oe) === ie.type) {
                    r(N, ie.sibling), k = l(ie, R.props), k.ref = wo(N, ie, R), k.return = N, N = k;
                    break e;
                  }
                  r(N, ie);
                  break;
                } else t(N, ie);
                ie = ie.sibling;
              }
              R.type === j ? (k = Zn(R.props.children, N.mode, H, R.key), k.return = N, N = k) : (H = nu(R.type, R.key, R.props, null, N.mode, H), H.ref = wo(N, k, R), H.return = N, N = H);
            }
            return d(N);
          case V:
            e: {
              for (ie = R.key; k !== null; ) {
                if (k.key === ie) if (k.tag === 4 && k.stateNode.containerInfo === R.containerInfo && k.stateNode.implementation === R.implementation) {
                  r(N, k.sibling), k = l(k, R.children || []), k.return = N, N = k;
                  break e;
                } else {
                  r(N, k);
                  break;
                }
                else t(N, k);
                k = k.sibling;
              }
              k = Fs(R, N.mode, H), k.return = N, N = k;
            }
            return d(N);
          case ze:
            return ie = R._init, Le(N, k, ie(R._payload), H);
        }
        if (mt(R)) return te(N, k, R, H);
        if (ne(R)) return re(N, k, R, H);
        Ai(N, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, k !== null && k.tag === 6 ? (r(N, k.sibling), k = l(k, R), k.return = N, N = k) : (r(N, k), k = Ms(R, N.mode, H), k.return = N, N = k), d(N)) : r(N, k);
    }
    return Le;
  }
  var Pr = pf(!0), hf = pf(!1), Li = xn(null), Ii = null, Nr = null, Hl = null;
  function Ql() {
    Hl = Nr = Ii = null;
  }
  function Kl(e) {
    var t = Li.current;
    _e(Li), e._currentValue = t;
  }
  function Gl(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function Rr(e, t) {
    Ii = e, Hl = Nr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (st = !0), e.firstContext = null);
  }
  function _t(e) {
    var t = e._currentValue;
    if (Hl !== e) if (e = { context: e, memoizedValue: t, next: null }, Nr === null) {
      if (Ii === null) throw Error(u(308));
      Nr = e, Ii.dependencies = { lanes: 0, firstContext: e };
    } else Nr = Nr.next = e;
    return t;
  }
  var Hn = null;
  function Yl(e) {
    Hn === null ? Hn = [e] : Hn.push(e);
  }
  function mf(e, t, r, i) {
    var l = t.interleaved;
    return l === null ? (r.next = r, Yl(t)) : (r.next = l.next, l.next = r), t.interleaved = r, un(e, i);
  }
  function un(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null;
  }
  var Pn = !1;
  function Xl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function vf(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function ln(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Nn(e, t, r) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (pe & 2) !== 0) {
      var l = i.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, un(e, r);
    }
    return l = i.interleaved, l === null ? (t.next = t, Yl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, un(e, r);
  }
  function Mi(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, cl(e, r);
    }
  }
  function gf(e, t) {
    var r = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, r === i)) {
      var l = null, a = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var d = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
          a === null ? l = a = d : a = a.next = d, r = r.next;
        } while (r !== null);
        a === null ? l = a = t : a = a.next = t;
      } else l = a = t;
      r = { baseState: i.baseState, firstBaseUpdate: l, lastBaseUpdate: a, shared: i.shared, effects: i.effects }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
  }
  function Fi(e, t, r, i) {
    var l = e.updateQueue;
    Pn = !1;
    var a = l.firstBaseUpdate, d = l.lastBaseUpdate, v = l.shared.pending;
    if (v !== null) {
      l.shared.pending = null;
      var S = v, T = S.next;
      S.next = null, d === null ? a = T : d.next = T, d = S;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, v = U.lastBaseUpdate, v !== d && (v === null ? U.firstBaseUpdate = T : v.next = T, U.lastBaseUpdate = S));
    }
    if (a !== null) {
      var b = l.baseState;
      d = 0, U = T = S = null, v = a;
      do {
        var $ = v.lane, q = v.eventTime;
        if ((i & $) === $) {
          U !== null && (U = U.next = {
            eventTime: q,
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          });
          e: {
            var te = e, re = v;
            switch ($ = t, q = r, re.tag) {
              case 1:
                if (te = re.payload, typeof te == "function") {
                  b = te.call(q, b, $);
                  break e;
                }
                b = te;
                break e;
              case 3:
                te.flags = te.flags & -65537 | 128;
              case 0:
                if (te = re.payload, $ = typeof te == "function" ? te.call(q, b, $) : te, $ == null) break e;
                b = Y({}, b, $);
                break e;
              case 2:
                Pn = !0;
            }
          }
          v.callback !== null && v.lane !== 0 && (e.flags |= 64, $ = l.effects, $ === null ? l.effects = [v] : $.push(v));
        } else q = { eventTime: q, lane: $, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, U === null ? (T = U = q, S = b) : U = U.next = q, d |= $;
        if (v = v.next, v === null) {
          if (v = l.shared.pending, v === null) break;
          $ = v, v = $.next, $.next = null, l.lastBaseUpdate = $, l.shared.pending = null;
        }
      } while (!0);
      if (U === null && (S = b), l.baseState = S, l.firstBaseUpdate = T, l.lastBaseUpdate = U, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          d |= l.lane, l = l.next;
        while (l !== t);
      } else a === null && (l.shared.lanes = 0);
      Gn |= d, e.lanes = d, e.memoizedState = b;
    }
  }
  function yf(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], l = i.callback;
      if (l !== null) {
        if (i.callback = null, i = r, typeof l != "function") throw Error(u(191, l));
        l.call(i);
      }
    }
  }
  var So = {}, Vt = xn(So), Eo = xn(So), ko = xn(So);
  function Qn(e) {
    if (e === So) throw Error(u(174));
    return e;
  }
  function ql(e, t) {
    switch (ke(ko, t), ke(Eo, e), ke(Vt, So), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Zt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Zt(t, e);
    }
    _e(Vt), ke(Vt, t);
  }
  function Or() {
    _e(Vt), _e(Eo), _e(ko);
  }
  function wf(e) {
    Qn(ko.current);
    var t = Qn(Vt.current), r = Zt(t, e.type);
    t !== r && (ke(Eo, e), ke(Vt, r));
  }
  function Zl(e) {
    Eo.current === e && (_e(Vt), _e(Eo));
  }
  var Oe = xn(0);
  function ji(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
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
  var Jl = [];
  function es() {
    for (var e = 0; e < Jl.length; e++) Jl[e]._workInProgressVersionPrimary = null;
    Jl.length = 0;
  }
  var zi = M.ReactCurrentDispatcher, ts = M.ReactCurrentBatchConfig, Kn = 0, Te = null, Be = null, Ue = null, Bi = !1, xo = !1, Co = 0, $v = 0;
  function et() {
    throw Error(u(321));
  }
  function ns(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Dt(e[r], t[r])) return !1;
    return !0;
  }
  function rs(e, t, r, i, l, a) {
    if (Kn = a, Te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zi.current = e === null || e.memoizedState === null ? Vv : Hv, e = r(i, l), xo) {
      a = 0;
      do {
        if (xo = !1, Co = 0, 25 <= a) throw Error(u(301));
        a += 1, Ue = Be = null, t.updateQueue = null, zi.current = Qv, e = r(i, l);
      } while (xo);
    }
    if (zi.current = Wi, t = Be !== null && Be.next !== null, Kn = 0, Ue = Be = Te = null, Bi = !1, t) throw Error(u(300));
    return e;
  }
  function os() {
    var e = Co !== 0;
    return Co = 0, e;
  }
  function Ht() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? Te.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function Pt() {
    if (Be === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = Ue === null ? Te.memoizedState : Ue.next;
    if (t !== null) Ue = t, Be = e;
    else {
      if (e === null) throw Error(u(310));
      Be = e, e = { memoizedState: Be.memoizedState, baseState: Be.baseState, baseQueue: Be.baseQueue, queue: Be.queue, next: null }, Ue === null ? Te.memoizedState = Ue = e : Ue = Ue.next = e;
    }
    return Ue;
  }
  function _o(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function is(e) {
    var t = Pt(), r = t.queue;
    if (r === null) throw Error(u(311));
    r.lastRenderedReducer = e;
    var i = Be, l = i.baseQueue, a = r.pending;
    if (a !== null) {
      if (l !== null) {
        var d = l.next;
        l.next = a.next, a.next = d;
      }
      i.baseQueue = l = a, r.pending = null;
    }
    if (l !== null) {
      a = l.next, i = i.baseState;
      var v = d = null, S = null, T = a;
      do {
        var U = T.lane;
        if ((Kn & U) === U) S !== null && (S = S.next = { lane: 0, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null }), i = T.hasEagerState ? T.eagerState : e(i, T.action);
        else {
          var b = {
            lane: U,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          };
          S === null ? (v = S = b, d = i) : S = S.next = b, Te.lanes |= U, Gn |= U;
        }
        T = T.next;
      } while (T !== null && T !== a);
      S === null ? d = i : S.next = v, Dt(i, t.memoizedState) || (st = !0), t.memoizedState = i, t.baseState = d, t.baseQueue = S, r.lastRenderedState = i;
    }
    if (e = r.interleaved, e !== null) {
      l = e;
      do
        a = l.lane, Te.lanes |= a, Gn |= a, l = l.next;
      while (l !== e);
    } else l === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function us(e) {
    var t = Pt(), r = t.queue;
    if (r === null) throw Error(u(311));
    r.lastRenderedReducer = e;
    var i = r.dispatch, l = r.pending, a = t.memoizedState;
    if (l !== null) {
      r.pending = null;
      var d = l = l.next;
      do
        a = e(a, d.action), d = d.next;
      while (d !== l);
      Dt(a, t.memoizedState) || (st = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), r.lastRenderedState = a;
    }
    return [a, i];
  }
  function Sf() {
  }
  function Ef(e, t) {
    var r = Te, i = Pt(), l = t(), a = !Dt(i.memoizedState, l);
    if (a && (i.memoizedState = l, st = !0), i = i.queue, ls(Cf.bind(null, r, i, e), [e]), i.getSnapshot !== t || a || Ue !== null && Ue.memoizedState.tag & 1) {
      if (r.flags |= 2048, Po(9, xf.bind(null, r, i, l, t), void 0, null), We === null) throw Error(u(349));
      (Kn & 30) !== 0 || kf(r, t, l);
    }
    return l;
  }
  function kf(e, t, r) {
    e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Te.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function xf(e, t, r, i) {
    t.value = r, t.getSnapshot = i, _f(t) && Pf(e);
  }
  function Cf(e, t, r) {
    return r(function() {
      _f(t) && Pf(e);
    });
  }
  function _f(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Dt(e, r);
    } catch {
      return !0;
    }
  }
  function Pf(e) {
    var t = un(e, 1);
    t !== null && Ft(t, e, 1, -1);
  }
  function Nf(e) {
    var t = Ht();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _o, lastRenderedState: e }, t.queue = e, e = e.dispatch = bv.bind(null, Te, e), [t.memoizedState, e];
  }
  function Po(e, t, r, i) {
    return e = { tag: e, create: t, destroy: r, deps: i, next: null }, t = Te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Te.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (i = r.next, r.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function Rf() {
    return Pt().memoizedState;
  }
  function $i(e, t, r, i) {
    var l = Ht();
    Te.flags |= e, l.memoizedState = Po(1 | t, r, void 0, i === void 0 ? null : i);
  }
  function Ui(e, t, r, i) {
    var l = Pt();
    i = i === void 0 ? null : i;
    var a = void 0;
    if (Be !== null) {
      var d = Be.memoizedState;
      if (a = d.destroy, i !== null && ns(i, d.deps)) {
        l.memoizedState = Po(t, r, a, i);
        return;
      }
    }
    Te.flags |= e, l.memoizedState = Po(1 | t, r, a, i);
  }
  function Of(e, t) {
    return $i(8390656, 8, e, t);
  }
  function ls(e, t) {
    return Ui(2048, 8, e, t);
  }
  function Tf(e, t) {
    return Ui(4, 2, e, t);
  }
  function Df(e, t) {
    return Ui(4, 4, e, t);
  }
  function Af(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Lf(e, t, r) {
    return r = r != null ? r.concat([e]) : null, Ui(4, 4, Af.bind(null, t, e), r);
  }
  function ss() {
  }
  function If(e, t) {
    var r = Pt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && ns(t, i[1]) ? i[0] : (r.memoizedState = [e, t], e);
  }
  function Mf(e, t) {
    var r = Pt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && ns(t, i[1]) ? i[0] : (e = e(), r.memoizedState = [e, t], e);
  }
  function Ff(e, t, r) {
    return (Kn & 21) === 0 ? (e.baseState && (e.baseState = !1, st = !0), e.memoizedState = r) : (Dt(r, t) || (r = fc(), Te.lanes |= r, Gn |= r, e.baseState = !0), t);
  }
  function Uv(e, t) {
    var r = Se;
    Se = r !== 0 && 4 > r ? r : 4, e(!0);
    var i = ts.transition;
    ts.transition = {};
    try {
      e(!1), t();
    } finally {
      Se = r, ts.transition = i;
    }
  }
  function jf() {
    return Pt().memoizedState;
  }
  function Wv(e, t, r) {
    var i = Dn(e);
    if (r = { lane: i, action: r, hasEagerState: !1, eagerState: null, next: null }, zf(e)) Bf(t, r);
    else if (r = mf(e, t, r, i), r !== null) {
      var l = ot();
      Ft(r, e, i, l), $f(r, t, i);
    }
  }
  function bv(e, t, r) {
    var i = Dn(e), l = { lane: i, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (zf(e)) Bf(t, l);
    else {
      var a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
        var d = t.lastRenderedState, v = a(d, r);
        if (l.hasEagerState = !0, l.eagerState = v, Dt(v, d)) {
          var S = t.interleaved;
          S === null ? (l.next = l, Yl(t)) : (l.next = S.next, S.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      r = mf(e, t, l, i), r !== null && (l = ot(), Ft(r, e, i, l), $f(r, t, i));
    }
  }
  function zf(e) {
    var t = e.alternate;
    return e === Te || t !== null && t === Te;
  }
  function Bf(e, t) {
    xo = Bi = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function $f(e, t, r) {
    if ((r & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, cl(e, r);
    }
  }
  var Wi = { readContext: _t, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useInsertionEffect: et, useLayoutEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useMutableSource: et, useSyncExternalStore: et, useId: et, unstable_isNewReconciler: !1 }, Vv = { readContext: _t, useCallback: function(e, t) {
    return Ht().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: _t, useEffect: Of, useImperativeHandle: function(e, t, r) {
    return r = r != null ? r.concat([e]) : null, $i(
      4194308,
      4,
      Af.bind(null, t, e),
      r
    );
  }, useLayoutEffect: function(e, t) {
    return $i(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return $i(4, 2, e, t);
  }, useMemo: function(e, t) {
    var r = Ht();
    return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
  }, useReducer: function(e, t, r) {
    var i = Ht();
    return t = r !== void 0 ? r(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = Wv.bind(null, Te, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = Ht();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Nf, useDebugValue: ss, useDeferredValue: function(e) {
    return Ht().memoizedState = e;
  }, useTransition: function() {
    var e = Nf(!1), t = e[0];
    return e = Uv.bind(null, e[1]), Ht().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, r) {
    var i = Te, l = Ht();
    if (Ne) {
      if (r === void 0) throw Error(u(407));
      r = r();
    } else {
      if (r = t(), We === null) throw Error(u(349));
      (Kn & 30) !== 0 || kf(i, t, r);
    }
    l.memoizedState = r;
    var a = { value: r, getSnapshot: t };
    return l.queue = a, Of(Cf.bind(
      null,
      i,
      a,
      e
    ), [e]), i.flags |= 2048, Po(9, xf.bind(null, i, a, r, t), void 0, null), r;
  }, useId: function() {
    var e = Ht(), t = We.identifierPrefix;
    if (Ne) {
      var r = on, i = rn;
      r = (i & ~(1 << 32 - Tt(i) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Co++, 0 < r && (t += "H" + r.toString(32)), t += ":";
    } else r = $v++, t = ":" + t + "r" + r.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Hv = {
    readContext: _t,
    useCallback: If,
    useContext: _t,
    useEffect: ls,
    useImperativeHandle: Lf,
    useInsertionEffect: Tf,
    useLayoutEffect: Df,
    useMemo: Mf,
    useReducer: is,
    useRef: Rf,
    useState: function() {
      return is(_o);
    },
    useDebugValue: ss,
    useDeferredValue: function(e) {
      var t = Pt();
      return Ff(t, Be.memoizedState, e);
    },
    useTransition: function() {
      var e = is(_o)[0], t = Pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Sf,
    useSyncExternalStore: Ef,
    useId: jf,
    unstable_isNewReconciler: !1
  }, Qv = { readContext: _t, useCallback: If, useContext: _t, useEffect: ls, useImperativeHandle: Lf, useInsertionEffect: Tf, useLayoutEffect: Df, useMemo: Mf, useReducer: us, useRef: Rf, useState: function() {
    return us(_o);
  }, useDebugValue: ss, useDeferredValue: function(e) {
    var t = Pt();
    return Be === null ? t.memoizedState = e : Ff(t, Be.memoizedState, e);
  }, useTransition: function() {
    var e = us(_o)[0], t = Pt().memoizedState;
    return [e, t];
  }, useMutableSource: Sf, useSyncExternalStore: Ef, useId: jf, unstable_isNewReconciler: !1 };
  function Lt(e, t) {
    if (e && e.defaultProps) {
      t = Y({}, t), e = e.defaultProps;
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function as(e, t, r, i) {
    t = e.memoizedState, r = r(i, t), r = r == null ? t : Y({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var bi = { isMounted: function(e) {
    return (e = e._reactInternals) ? $n(e) === e : !1;
  }, enqueueSetState: function(e, t, r) {
    e = e._reactInternals;
    var i = ot(), l = Dn(e), a = ln(i, l);
    a.payload = t, r != null && (a.callback = r), t = Nn(e, a, l), t !== null && (Ft(t, e, l, i), Mi(t, e, l));
  }, enqueueReplaceState: function(e, t, r) {
    e = e._reactInternals;
    var i = ot(), l = Dn(e), a = ln(i, l);
    a.tag = 1, a.payload = t, r != null && (a.callback = r), t = Nn(e, a, l), t !== null && (Ft(t, e, l, i), Mi(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var r = ot(), i = Dn(e), l = ln(r, i);
    l.tag = 2, t != null && (l.callback = t), t = Nn(e, l, i), t !== null && (Ft(t, e, i, r), Mi(t, e, i));
  } };
  function Uf(e, t, r, i, l, a, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, a, d) : t.prototype && t.prototype.isPureReactComponent ? !fo(r, i) || !fo(l, a) : !0;
  }
  function Wf(e, t, r) {
    var i = !1, l = Cn, a = t.contextType;
    return typeof a == "object" && a !== null ? a = _t(a) : (l = lt(t) ? Wn : Je.current, i = t.contextTypes, a = (i = i != null) ? kr(e, l) : Cn), t = new t(r, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bi, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
  }
  function bf(e, t, r, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== e && bi.enqueueReplaceState(t, t.state, null);
  }
  function cs(e, t, r, i) {
    var l = e.stateNode;
    l.props = r, l.state = e.memoizedState, l.refs = {}, Xl(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? l.context = _t(a) : (a = lt(t) ? Wn : Je.current, l.context = kr(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (as(e, t, a, r), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && bi.enqueueReplaceState(l, l.state, null), Fi(e, r, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Tr(e, t) {
    try {
      var r = "", i = t;
      do
        r += Q(i), i = i.return;
      while (i);
      var l = r;
    } catch (a) {
      l = `
Error generating stack: ` + a.message + `
` + a.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function fs(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function ds(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  var Kv = typeof WeakMap == "function" ? WeakMap : Map;
  function Vf(e, t, r) {
    r = ln(-1, r), r.tag = 3, r.payload = { element: null };
    var i = t.value;
    return r.callback = function() {
      Xi || (Xi = !0, Ns = i), ds(e, t);
    }, r;
  }
  function Hf(e, t, r) {
    r = ln(-1, r), r.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      r.payload = function() {
        return i(l);
      }, r.callback = function() {
        ds(e, t);
      };
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (r.callback = function() {
      ds(e, t), typeof i != "function" && (On === null ? On = /* @__PURE__ */ new Set([this]) : On.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), r;
  }
  function Qf(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Kv();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(r) || (l.add(r), e = lg.bind(null, e, t, r), t.then(e, e));
  }
  function Kf(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Gf(e, t, r, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = ln(-1, 1), t.tag = 2, Nn(r, t, 1))), r.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Gv = M.ReactCurrentOwner, st = !1;
  function rt(e, t, r, i) {
    t.child = e === null ? hf(t, null, r, i) : Pr(t, e.child, r, i);
  }
  function Yf(e, t, r, i, l) {
    r = r.render;
    var a = t.ref;
    return Rr(t, l), i = rs(e, t, r, i, a, l), r = os(), e !== null && !st ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, sn(e, t, l)) : (Ne && r && $l(t), t.flags |= 1, rt(e, t, i, l), t.child);
  }
  function Xf(e, t, r, i, l) {
    if (e === null) {
      var a = r.type;
      return typeof a == "function" && !Is(a) && a.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = a, qf(e, t, a, i, l)) : (e = nu(r.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (a = e.child, (e.lanes & l) === 0) {
      var d = a.memoizedProps;
      if (r = r.compare, r = r !== null ? r : fo, r(d, i) && e.ref === t.ref) return sn(e, t, l);
    }
    return t.flags |= 1, e = Ln(a, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function qf(e, t, r, i, l) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (fo(a, i) && e.ref === t.ref) if (st = !1, t.pendingProps = i = a, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (st = !0);
      else return t.lanes = e.lanes, sn(e, t, l);
    }
    return ps(e, t, r, i, l);
  }
  function Zf(e, t, r) {
    var i = t.pendingProps, l = i.children, a = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ke(Ar, wt), wt |= r;
    else {
      if ((r & 1073741824) === 0) return e = a !== null ? a.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ke(Ar, wt), wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = a !== null ? a.baseLanes : r, ke(Ar, wt), wt |= i;
    }
    else a !== null ? (i = a.baseLanes | r, t.memoizedState = null) : i = r, ke(Ar, wt), wt |= i;
    return rt(e, t, l, r), t.child;
  }
  function Jf(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ps(e, t, r, i, l) {
    var a = lt(r) ? Wn : Je.current;
    return a = kr(t, a), Rr(t, l), r = rs(e, t, r, i, a, l), i = os(), e !== null && !st ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, sn(e, t, l)) : (Ne && i && $l(t), t.flags |= 1, rt(e, t, r, l), t.child);
  }
  function ed(e, t, r, i, l) {
    if (lt(r)) {
      var a = !0;
      Ni(t);
    } else a = !1;
    if (Rr(t, l), t.stateNode === null) Hi(e, t), Wf(t, r, i), cs(t, r, i, l), i = !0;
    else if (e === null) {
      var d = t.stateNode, v = t.memoizedProps;
      d.props = v;
      var S = d.context, T = r.contextType;
      typeof T == "object" && T !== null ? T = _t(T) : (T = lt(r) ? Wn : Je.current, T = kr(t, T));
      var U = r.getDerivedStateFromProps, b = typeof U == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      b || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== i || S !== T) && bf(t, d, i, T), Pn = !1;
      var $ = t.memoizedState;
      d.state = $, Fi(t, i, d, l), S = t.memoizedState, v !== i || $ !== S || ut.current || Pn ? (typeof U == "function" && (as(t, r, U, i), S = t.memoizedState), (v = Pn || Uf(t, r, v, i, $, S, T)) ? (b || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = S), d.props = i, d.state = S, d.context = T, i = v) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      d = t.stateNode, vf(e, t), v = t.memoizedProps, T = t.type === t.elementType ? v : Lt(t.type, v), d.props = T, b = t.pendingProps, $ = d.context, S = r.contextType, typeof S == "object" && S !== null ? S = _t(S) : (S = lt(r) ? Wn : Je.current, S = kr(t, S));
      var q = r.getDerivedStateFromProps;
      (U = typeof q == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== b || $ !== S) && bf(t, d, i, S), Pn = !1, $ = t.memoizedState, d.state = $, Fi(t, i, d, l);
      var te = t.memoizedState;
      v !== b || $ !== te || ut.current || Pn ? (typeof q == "function" && (as(t, r, q, i), te = t.memoizedState), (T = Pn || Uf(t, r, T, i, $, te, S) || !1) ? (U || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(i, te, S), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(i, te, S)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || v === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = te), d.props = i, d.state = te, d.context = S, i = T) : (typeof d.componentDidUpdate != "function" || v === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return hs(e, t, r, i, a, l);
  }
  function hs(e, t, r, i, l, a) {
    Jf(e, t);
    var d = (t.flags & 128) !== 0;
    if (!i && !d) return l && of(t, r, !1), sn(e, t, a);
    i = t.stateNode, Gv.current = t;
    var v = d && typeof r.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && d ? (t.child = Pr(t, e.child, null, a), t.child = Pr(t, null, v, a)) : rt(e, t, v, a), t.memoizedState = i.state, l && of(t, r, !0), t.child;
  }
  function td(e) {
    var t = e.stateNode;
    t.pendingContext ? nf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nf(e, t.context, !1), ql(e, t.containerInfo);
  }
  function nd(e, t, r, i, l) {
    return _r(), Vl(l), t.flags |= 256, rt(e, t, r, i), t.child;
  }
  var ms = { dehydrated: null, treeContext: null, retryLane: 0 };
  function vs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function rd(e, t, r) {
    var i = t.pendingProps, l = Oe.current, a = !1, d = (t.flags & 128) !== 0, v;
    if ((v = d) || (v = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), v ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ke(Oe, l & 1), e === null)
      return bl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = i.children, e = i.fallback, a ? (i = t.mode, a = t.child, d = { mode: "hidden", children: d }, (i & 1) === 0 && a !== null ? (a.childLanes = 0, a.pendingProps = d) : a = ru(d, i, 0, null), e = Zn(e, i, r, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = vs(r), t.memoizedState = ms, e) : gs(t, d));
    if (l = e.memoizedState, l !== null && (v = l.dehydrated, v !== null)) return Yv(e, t, d, i, v, l, r);
    if (a) {
      a = i.fallback, d = t.mode, l = e.child, v = l.sibling;
      var S = { mode: "hidden", children: i.children };
      return (d & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = S, t.deletions = null) : (i = Ln(l, S), i.subtreeFlags = l.subtreeFlags & 14680064), v !== null ? a = Ln(v, a) : (a = Zn(a, d, r, null), a.flags |= 2), a.return = t, i.return = t, i.sibling = a, t.child = i, i = a, a = t.child, d = e.child.memoizedState, d = d === null ? vs(r) : { baseLanes: d.baseLanes | r, cachePool: null, transitions: d.transitions }, a.memoizedState = d, a.childLanes = e.childLanes & ~r, t.memoizedState = ms, i;
    }
    return a = e.child, e = a.sibling, i = Ln(a, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = r), i.return = t, i.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function gs(e, t) {
    return t = ru({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Vi(e, t, r, i) {
    return i !== null && Vl(i), Pr(t, e.child, null, r), e = gs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Yv(e, t, r, i, l, a, d) {
    if (r)
      return t.flags & 256 ? (t.flags &= -257, i = fs(Error(u(422))), Vi(e, t, d, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = i.fallback, l = t.mode, i = ru({ mode: "visible", children: i.children }, l, 0, null), a = Zn(a, l, d, null), a.flags |= 2, i.return = t, a.return = t, i.sibling = a, t.child = i, (t.mode & 1) !== 0 && Pr(t, e.child, null, d), t.child.memoizedState = vs(d), t.memoizedState = ms, a);
    if ((t.mode & 1) === 0) return Vi(e, t, d, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var v = i.dgst;
      return i = v, a = Error(u(419)), i = fs(a, i, void 0), Vi(e, t, d, i);
    }
    if (v = (d & e.childLanes) !== 0, st || v) {
      if (i = We, i !== null) {
        switch (d & -d) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (i.suspendedLanes | d)) !== 0 ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, un(e, l), Ft(i, e, l, -1));
      }
      return Ls(), i = fs(Error(u(421))), Vi(e, t, d, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sg.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, yt = kn(l.nextSibling), gt = t, Ne = !0, At = null, e !== null && (xt[Ct++] = rn, xt[Ct++] = on, xt[Ct++] = bn, rn = e.id, on = e.overflow, bn = t), t = gs(t, i.children), t.flags |= 4096, t);
  }
  function od(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Gl(e.return, t, r);
  }
  function ys(e, t, r, i, l) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: r, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = i, a.tail = r, a.tailMode = l);
  }
  function id(e, t, r) {
    var i = t.pendingProps, l = i.revealOrder, a = i.tail;
    if (rt(e, t, i.children, r), i = Oe.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && od(e, r, t);
        else if (e.tag === 19) od(e, r, t);
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
      i &= 1;
    }
    if (ke(Oe, i), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (r = t.child, l = null; r !== null; ) e = r.alternate, e !== null && ji(e) === null && (l = r), r = r.sibling;
        r = l, r === null ? (l = t.child, t.child = null) : (l = r.sibling, r.sibling = null), ys(t, !1, l, r, a);
        break;
      case "backwards":
        for (r = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && ji(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = r, r = l, l = e;
        }
        ys(t, !0, r, null, a);
        break;
      case "together":
        ys(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Hi(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function sn(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), Gn |= t.lanes, (r & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, r = Ln(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = Ln(e, e.pendingProps), r.return = t;
      r.sibling = null;
    }
    return t.child;
  }
  function Xv(e, t, r) {
    switch (t.tag) {
      case 3:
        td(t), _r();
        break;
      case 5:
        wf(t);
        break;
      case 1:
        lt(t.type) && Ni(t);
        break;
      case 4:
        ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        ke(Li, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (ke(Oe, Oe.current & 1), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? rd(e, t, r) : (ke(Oe, Oe.current & 1), e = sn(e, t, r), e !== null ? e.sibling : null);
        ke(Oe, Oe.current & 1);
        break;
      case 19:
        if (i = (r & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return id(e, t, r);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ke(Oe, Oe.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Zf(e, t, r);
    }
    return sn(e, t, r);
  }
  var ud, ws, ld, sd;
  ud = function(e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }, ws = function() {
  }, ld = function(e, t, r, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, Qn(Vt.current);
      var a = null;
      switch (r) {
        case "input":
          l = ge(e, l), i = ge(e, i), a = [];
          break;
        case "select":
          l = Y({}, l, { value: void 0 }), i = Y({}, i, { value: void 0 }), a = [];
          break;
        case "textarea":
          l = it(e, l), i = it(e, i), a = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Ci);
      }
      Yr(r, i);
      var d;
      r = null;
      for (T in l) if (!i.hasOwnProperty(T) && l.hasOwnProperty(T) && l[T] != null) if (T === "style") {
        var v = l[T];
        for (d in v) v.hasOwnProperty(d) && (r || (r = {}), r[d] = "");
      } else T !== "dangerouslySetInnerHTML" && T !== "children" && T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && T !== "autoFocus" && (c.hasOwnProperty(T) ? a || (a = []) : (a = a || []).push(T, null));
      for (T in i) {
        var S = i[T];
        if (v = l != null ? l[T] : void 0, i.hasOwnProperty(T) && S !== v && (S != null || v != null)) if (T === "style") if (v) {
          for (d in v) !v.hasOwnProperty(d) || S && S.hasOwnProperty(d) || (r || (r = {}), r[d] = "");
          for (d in S) S.hasOwnProperty(d) && v[d] !== S[d] && (r || (r = {}), r[d] = S[d]);
        } else r || (a || (a = []), a.push(
          T,
          r
        )), r = S;
        else T === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, v = v ? v.__html : void 0, S != null && v !== S && (a = a || []).push(T, S)) : T === "children" ? typeof S != "string" && typeof S != "number" || (a = a || []).push(T, "" + S) : T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && (c.hasOwnProperty(T) ? (S != null && T === "onScroll" && Ce("scroll", e), a || v === S || (a = [])) : (a = a || []).push(T, S));
      }
      r && (a = a || []).push("style", r);
      var T = a;
      (t.updateQueue = T) && (t.flags |= 4);
    }
  }, sd = function(e, t, r, i) {
    r !== i && (t.flags |= 4);
  };
  function No(e, t) {
    if (!Ne) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? e.tail = null : r.sibling = null;
        break;
      case "collapsed":
        r = e.tail;
        for (var i = null; r !== null; ) r.alternate !== null && (i = r), r = r.sibling;
        i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
    }
  }
  function tt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, r = 0, i = 0;
    if (t) for (var l = e.child; l !== null; ) r |= l.lanes | l.childLanes, i |= l.subtreeFlags & 14680064, i |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) r |= l.lanes | l.childLanes, i |= l.subtreeFlags, i |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= i, e.childLanes = r, t;
  }
  function qv(e, t, r) {
    var i = t.pendingProps;
    switch (Ul(t), t.tag) {
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
        return tt(t), null;
      case 1:
        return lt(t.type) && Pi(), tt(t), null;
      case 3:
        return i = t.stateNode, Or(), _e(ut), _e(Je), es(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Di(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, At !== null && (Ts(At), At = null))), ws(e, t), tt(t), null;
      case 5:
        Zl(t);
        var l = Qn(ko.current);
        if (r = t.type, e !== null && t.stateNode != null) ld(e, t, r, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(u(166));
            return tt(t), null;
          }
          if (e = Qn(Vt.current), Di(t)) {
            i = t.stateNode, r = t.type;
            var a = t.memoizedProps;
            switch (i[bt] = t, i[go] = a, e = (t.mode & 1) !== 0, r) {
              case "dialog":
                Ce("cancel", i), Ce("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ce("load", i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ho.length; l++) Ce(ho[l], i);
                break;
              case "source":
                Ce("error", i);
                break;
              case "img":
              case "image":
              case "link":
                Ce(
                  "error",
                  i
                ), Ce("load", i);
                break;
              case "details":
                Ce("toggle", i);
                break;
              case "input":
                $t(i, a), Ce("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!a.multiple }, Ce("invalid", i);
                break;
              case "textarea":
                Gr(i, a), Ce("invalid", i);
            }
            Yr(r, a), l = null;
            for (var d in a) if (a.hasOwnProperty(d)) {
              var v = a[d];
              d === "children" ? typeof v == "string" ? i.textContent !== v && (a.suppressHydrationWarning !== !0 && xi(i.textContent, v, e), l = ["children", v]) : typeof v == "number" && i.textContent !== "" + v && (a.suppressHydrationWarning !== !0 && xi(
                i.textContent,
                v,
                e
              ), l = ["children", "" + v]) : c.hasOwnProperty(d) && v != null && d === "onScroll" && Ce("scroll", i);
            }
            switch (r) {
              case "input":
                Re(i), Xt(i, a, !0);
                break;
              case "textarea":
                Re(i), ei(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (i.onclick = Ci);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            d = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = hn(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = d.createElement(r, { is: i.is }) : (e = d.createElement(r), r === "select" && (d = e, i.multiple ? d.multiple = !0 : i.size && (d.size = i.size))) : e = d.createElementNS(e, r), e[bt] = t, e[go] = i, ud(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = el(r, i), r) {
                case "dialog":
                  Ce("cancel", e), Ce("close", e), l = i;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ce("load", e), l = i;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ho.length; l++) Ce(ho[l], e);
                  l = i;
                  break;
                case "source":
                  Ce("error", e), l = i;
                  break;
                case "img":
                case "image":
                case "link":
                  Ce(
                    "error",
                    e
                  ), Ce("load", e), l = i;
                  break;
                case "details":
                  Ce("toggle", e), l = i;
                  break;
                case "input":
                  $t(e, i), l = ge(e, i), Ce("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = Y({}, i, { value: void 0 }), Ce("invalid", e);
                  break;
                case "textarea":
                  Gr(e, i), l = it(e, i), Ce("invalid", e);
                  break;
                default:
                  l = i;
              }
              Yr(r, l), v = l;
              for (a in v) if (v.hasOwnProperty(a)) {
                var S = v[a];
                a === "style" ? ni(e, S) : a === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, S != null && cr(e, S)) : a === "children" ? typeof S == "string" ? (r !== "textarea" || S !== "") && Jt(e, S) : typeof S == "number" && Jt(e, "" + S) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (c.hasOwnProperty(a) ? S != null && a === "onScroll" && Ce("scroll", e) : S != null && F(e, a, S, d));
              }
              switch (r) {
                case "input":
                  Re(e), Xt(e, i, !1);
                  break;
                case "textarea":
                  Re(e), ei(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + X(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, a = i.value, a != null ? Ut(e, !!i.multiple, a, !1) : i.defaultValue != null && Ut(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ci);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return tt(t), null;
      case 6:
        if (e && t.stateNode != null) sd(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(u(166));
          if (r = Qn(ko.current), Qn(Vt.current), Di(t)) {
            if (i = t.stateNode, r = t.memoizedProps, i[bt] = t, (a = i.nodeValue !== r) && (e = gt, e !== null)) switch (e.tag) {
              case 3:
                xi(i.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && xi(i.nodeValue, r, (e.mode & 1) !== 0);
            }
            a && (t.flags |= 4);
          } else i = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(i), i[bt] = t, t.stateNode = i;
        }
        return tt(t), null;
      case 13:
        if (_e(Oe), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ne && yt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ff(), _r(), t.flags |= 98560, a = !1;
          else if (a = Di(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(u(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(u(317));
              a[bt] = t;
            } else _r(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            tt(t), a = !1;
          } else At !== null && (Ts(At), At = null), a = !0;
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = r, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Oe.current & 1) !== 0 ? $e === 0 && ($e = 3) : Ls())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
      case 4:
        return Or(), ws(e, t), e === null && mo(t.stateNode.containerInfo), tt(t), null;
      case 10:
        return Kl(t.type._context), tt(t), null;
      case 17:
        return lt(t.type) && Pi(), tt(t), null;
      case 19:
        if (_e(Oe), a = t.memoizedState, a === null) return tt(t), null;
        if (i = (t.flags & 128) !== 0, d = a.rendering, d === null) if (i) No(a, !1);
        else {
          if ($e !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = ji(e), d !== null) {
              for (t.flags |= 128, No(a, !1), i = d.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = r, r = t.child; r !== null; ) a = r, e = i, a.flags &= 14680066, d = a.alternate, d === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = d.childLanes, a.lanes = d.lanes, a.child = d.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = d.memoizedProps, a.memoizedState = d.memoizedState, a.updateQueue = d.updateQueue, a.type = d.type, e = d.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
              return ke(Oe, Oe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          a.tail !== null && Ae() > Lr && (t.flags |= 128, i = !0, No(a, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = ji(d), e !== null) {
            if (t.flags |= 128, i = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), No(a, !0), a.tail === null && a.tailMode === "hidden" && !d.alternate && !Ne) return tt(t), null;
          } else 2 * Ae() - a.renderingStartTime > Lr && r !== 1073741824 && (t.flags |= 128, i = !0, No(a, !1), t.lanes = 4194304);
          a.isBackwards ? (d.sibling = t.child, t.child = d) : (r = a.last, r !== null ? r.sibling = d : t.child = d, a.last = d);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ae(), t.sibling = null, r = Oe.current, ke(Oe, i ? r & 1 | 2 : r & 1), t) : (tt(t), null);
      case 22:
      case 23:
        return As(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (wt & 1073741824) !== 0 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Zv(e, t) {
    switch (Ul(t), t.tag) {
      case 1:
        return lt(t.type) && Pi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Or(), _e(ut), _e(Je), es(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Zl(t), null;
      case 13:
        if (_e(Oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          _r();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return _e(Oe), null;
      case 4:
        return Or(), null;
      case 10:
        return Kl(t.type._context), null;
      case 22:
      case 23:
        return As(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Qi = !1, nt = !1, Jv = typeof WeakSet == "function" ? WeakSet : Set, ee = null;
  function Dr(e, t) {
    var r = e.ref;
    if (r !== null) if (typeof r == "function") try {
      r(null);
    } catch (i) {
      De(e, t, i);
    }
    else r.current = null;
  }
  function Ss(e, t, r) {
    try {
      r();
    } catch (i) {
      De(e, t, i);
    }
  }
  var ad = !1;
  function eg(e, t) {
    if (Al = di, e = $c(), Cl(e)) {
      if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        r = (r = e.ownerDocument) && r.defaultView || window;
        var i = r.getSelection && r.getSelection();
        if (i && i.rangeCount !== 0) {
          r = i.anchorNode;
          var l = i.anchorOffset, a = i.focusNode;
          i = i.focusOffset;
          try {
            r.nodeType, a.nodeType;
          } catch {
            r = null;
            break e;
          }
          var d = 0, v = -1, S = -1, T = 0, U = 0, b = e, $ = null;
          t: for (; ; ) {
            for (var q; b !== r || l !== 0 && b.nodeType !== 3 || (v = d + l), b !== a || i !== 0 && b.nodeType !== 3 || (S = d + i), b.nodeType === 3 && (d += b.nodeValue.length), (q = b.firstChild) !== null; )
              $ = b, b = q;
            for (; ; ) {
              if (b === e) break t;
              if ($ === r && ++T === l && (v = d), $ === a && ++U === i && (S = d), (q = b.nextSibling) !== null) break;
              b = $, $ = b.parentNode;
            }
            b = q;
          }
          r = v === -1 || S === -1 ? null : { start: v, end: S };
        } else r = null;
      }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Ll = { focusedElem: e, selectionRange: r }, di = !1, ee = t; ee !== null; ) if (t = ee, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ee = e;
    else for (; ee !== null; ) {
      t = ee;
      try {
        var te = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (te !== null) {
              var re = te.memoizedProps, Le = te.memoizedState, N = t.stateNode, k = N.getSnapshotBeforeUpdate(t.elementType === t.type ? re : Lt(t.type, re), Le);
              N.__reactInternalSnapshotBeforeUpdate = k;
            }
            break;
          case 3:
            var R = t.stateNode.containerInfo;
            R.nodeType === 1 ? R.textContent = "" : R.nodeType === 9 && R.documentElement && R.removeChild(R.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (H) {
        De(t, t.return, H);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ee = e;
        break;
      }
      ee = t.return;
    }
    return te = ad, ad = !1, te;
  }
  function Ro(e, t, r) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var l = i = i.next;
      do {
        if ((l.tag & e) === e) {
          var a = l.destroy;
          l.destroy = void 0, a !== void 0 && Ss(t, r, a);
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function Ki(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var r = t = t.next;
      do {
        if ((r.tag & e) === e) {
          var i = r.create;
          r.destroy = i();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Es(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function cd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, cd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[bt], delete t[go], delete t[jl], delete t[Fv], delete t[jv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function fd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function dd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || fd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ks(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Ci));
    else if (i !== 4 && (e = e.child, e !== null)) for (ks(e, t, r), e = e.sibling; e !== null; ) ks(e, t, r), e = e.sibling;
  }
  function xs(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (xs(e, t, r), e = e.sibling; e !== null; ) xs(e, t, r), e = e.sibling;
  }
  var Qe = null, It = !1;
  function Rn(e, t, r) {
    for (r = r.child; r !== null; ) pd(e, t, r), r = r.sibling;
  }
  function pd(e, t, r) {
    if (Wt && typeof Wt.onCommitFiberUnmount == "function") try {
      Wt.onCommitFiberUnmount(ui, r);
    } catch {
    }
    switch (r.tag) {
      case 5:
        nt || Dr(r, t);
      case 6:
        var i = Qe, l = It;
        Qe = null, Rn(e, t, r), Qe = i, It = l, Qe !== null && (It ? (e = Qe, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Qe.removeChild(r.stateNode));
        break;
      case 18:
        Qe !== null && (It ? (e = Qe, r = r.stateNode, e.nodeType === 8 ? Fl(e.parentNode, r) : e.nodeType === 1 && Fl(e, r), io(e)) : Fl(Qe, r.stateNode));
        break;
      case 4:
        i = Qe, l = It, Qe = r.stateNode.containerInfo, It = !0, Rn(e, t, r), Qe = i, It = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!nt && (i = r.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var a = l, d = a.destroy;
            a = a.tag, d !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && Ss(r, t, d), l = l.next;
          } while (l !== i);
        }
        Rn(e, t, r);
        break;
      case 1:
        if (!nt && (Dr(r, t), i = r.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = r.memoizedProps, i.state = r.memoizedState, i.componentWillUnmount();
        } catch (v) {
          De(r, t, v);
        }
        Rn(e, t, r);
        break;
      case 21:
        Rn(e, t, r);
        break;
      case 22:
        r.mode & 1 ? (nt = (i = nt) || r.memoizedState !== null, Rn(e, t, r), nt = i) : Rn(e, t, r);
        break;
      default:
        Rn(e, t, r);
    }
  }
  function hd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Jv()), t.forEach(function(i) {
        var l = ag.bind(null, e, i);
        r.has(i) || (r.add(i), i.then(l, l));
      });
    }
  }
  function Mt(e, t) {
    var r = t.deletions;
    if (r !== null) for (var i = 0; i < r.length; i++) {
      var l = r[i];
      try {
        var a = e, d = t, v = d;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 5:
              Qe = v.stateNode, It = !1;
              break e;
            case 3:
              Qe = v.stateNode.containerInfo, It = !0;
              break e;
            case 4:
              Qe = v.stateNode.containerInfo, It = !0;
              break e;
          }
          v = v.return;
        }
        if (Qe === null) throw Error(u(160));
        pd(a, d, l), Qe = null, It = !1;
        var S = l.alternate;
        S !== null && (S.return = null), l.return = null;
      } catch (T) {
        De(l, t, T);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) md(t, e), t = t.sibling;
  }
  function md(e, t) {
    var r = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Mt(t, e), Qt(e), i & 4) {
          try {
            Ro(3, e, e.return), Ki(3, e);
          } catch (re) {
            De(e, e.return, re);
          }
          try {
            Ro(5, e, e.return);
          } catch (re) {
            De(e, e.return, re);
          }
        }
        break;
      case 1:
        Mt(t, e), Qt(e), i & 512 && r !== null && Dr(r, r.return);
        break;
      case 5:
        if (Mt(t, e), Qt(e), i & 512 && r !== null && Dr(r, r.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Jt(l, "");
          } catch (re) {
            De(e, e.return, re);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var a = e.memoizedProps, d = r !== null ? r.memoizedProps : a, v = e.type, S = e.updateQueue;
          if (e.updateQueue = null, S !== null) try {
            v === "input" && a.type === "radio" && a.name != null && kt(l, a), el(v, d);
            var T = el(v, a);
            for (d = 0; d < S.length; d += 2) {
              var U = S[d], b = S[d + 1];
              U === "style" ? ni(l, b) : U === "dangerouslySetInnerHTML" ? cr(l, b) : U === "children" ? Jt(l, b) : F(l, U, b, T);
            }
            switch (v) {
              case "input":
                xe(l, a);
                break;
              case "textarea":
                Jo(l, a);
                break;
              case "select":
                var $ = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!a.multiple;
                var q = a.value;
                q != null ? Ut(l, !!a.multiple, q, !1) : $ !== !!a.multiple && (a.defaultValue != null ? Ut(
                  l,
                  !!a.multiple,
                  a.defaultValue,
                  !0
                ) : Ut(l, !!a.multiple, a.multiple ? [] : "", !1));
            }
            l[go] = a;
          } catch (re) {
            De(e, e.return, re);
          }
        }
        break;
      case 6:
        if (Mt(t, e), Qt(e), i & 4) {
          if (e.stateNode === null) throw Error(u(162));
          l = e.stateNode, a = e.memoizedProps;
          try {
            l.nodeValue = a;
          } catch (re) {
            De(e, e.return, re);
          }
        }
        break;
      case 3:
        if (Mt(t, e), Qt(e), i & 4 && r !== null && r.memoizedState.isDehydrated) try {
          io(t.containerInfo);
        } catch (re) {
          De(e, e.return, re);
        }
        break;
      case 4:
        Mt(t, e), Qt(e);
        break;
      case 13:
        Mt(t, e), Qt(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (Ps = Ae())), i & 4 && hd(e);
        break;
      case 22:
        if (U = r !== null && r.memoizedState !== null, e.mode & 1 ? (nt = (T = nt) || U, Mt(t, e), nt = T) : Mt(t, e), Qt(e), i & 8192) {
          if (T = e.memoizedState !== null, (e.stateNode.isHidden = T) && !U && (e.mode & 1) !== 0) for (ee = e, U = e.child; U !== null; ) {
            for (b = ee = U; ee !== null; ) {
              switch ($ = ee, q = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ro(4, $, $.return);
                  break;
                case 1:
                  Dr($, $.return);
                  var te = $.stateNode;
                  if (typeof te.componentWillUnmount == "function") {
                    i = $, r = $.return;
                    try {
                      t = i, te.props = t.memoizedProps, te.state = t.memoizedState, te.componentWillUnmount();
                    } catch (re) {
                      De(i, r, re);
                    }
                  }
                  break;
                case 5:
                  Dr($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    yd(b);
                    continue;
                  }
              }
              q !== null ? (q.return = $, ee = q) : yd(b);
            }
            U = U.sibling;
          }
          e: for (U = null, b = e; ; ) {
            if (b.tag === 5) {
              if (U === null) {
                U = b;
                try {
                  l = b.stateNode, T ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (v = b.stateNode, S = b.memoizedProps.style, d = S != null && S.hasOwnProperty("display") ? S.display : null, v.style.display = ti("display", d));
                } catch (re) {
                  De(e, e.return, re);
                }
              }
            } else if (b.tag === 6) {
              if (U === null) try {
                b.stateNode.nodeValue = T ? "" : b.memoizedProps;
              } catch (re) {
                De(e, e.return, re);
              }
            } else if ((b.tag !== 22 && b.tag !== 23 || b.memoizedState === null || b === e) && b.child !== null) {
              b.child.return = b, b = b.child;
              continue;
            }
            if (b === e) break e;
            for (; b.sibling === null; ) {
              if (b.return === null || b.return === e) break e;
              U === b && (U = null), b = b.return;
            }
            U === b && (U = null), b.sibling.return = b.return, b = b.sibling;
          }
        }
        break;
      case 19:
        Mt(t, e), Qt(e), i & 4 && hd(e);
        break;
      case 21:
        break;
      default:
        Mt(
          t,
          e
        ), Qt(e);
    }
  }
  function Qt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (fd(r)) {
              var i = r;
              break e;
            }
            r = r.return;
          }
          throw Error(u(160));
        }
        switch (i.tag) {
          case 5:
            var l = i.stateNode;
            i.flags & 32 && (Jt(l, ""), i.flags &= -33);
            var a = dd(e);
            xs(e, a, l);
            break;
          case 3:
          case 4:
            var d = i.stateNode.containerInfo, v = dd(e);
            ks(e, v, d);
            break;
          default:
            throw Error(u(161));
        }
      } catch (S) {
        De(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function tg(e, t, r) {
    ee = e, vd(e);
  }
  function vd(e, t, r) {
    for (var i = (e.mode & 1) !== 0; ee !== null; ) {
      var l = ee, a = l.child;
      if (l.tag === 22 && i) {
        var d = l.memoizedState !== null || Qi;
        if (!d) {
          var v = l.alternate, S = v !== null && v.memoizedState !== null || nt;
          v = Qi;
          var T = nt;
          if (Qi = d, (nt = S) && !T) for (ee = l; ee !== null; ) d = ee, S = d.child, d.tag === 22 && d.memoizedState !== null ? wd(l) : S !== null ? (S.return = d, ee = S) : wd(l);
          for (; a !== null; ) ee = a, vd(a), a = a.sibling;
          ee = l, Qi = v, nt = T;
        }
        gd(e);
      } else (l.subtreeFlags & 8772) !== 0 && a !== null ? (a.return = l, ee = a) : gd(e);
    }
  }
  function gd(e) {
    for (; ee !== null; ) {
      var t = ee;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              nt || Ki(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !nt) if (r === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? r.memoizedProps : Lt(t.type, r.memoizedProps);
                i.componentDidUpdate(l, r.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var a = t.updateQueue;
              a !== null && yf(t, a, i);
              break;
            case 3:
              var d = t.updateQueue;
              if (d !== null) {
                if (r = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    r = t.child.stateNode;
                    break;
                  case 1:
                    r = t.child.stateNode;
                }
                yf(t, d, r);
              }
              break;
            case 5:
              var v = t.stateNode;
              if (r === null && t.flags & 4) {
                r = v;
                var S = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    S.autoFocus && r.focus();
                    break;
                  case "img":
                    S.src && (r.src = S.src);
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
                var T = t.alternate;
                if (T !== null) {
                  var U = T.memoizedState;
                  if (U !== null) {
                    var b = U.dehydrated;
                    b !== null && io(b);
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
              throw Error(u(163));
          }
          nt || t.flags & 512 && Es(t);
        } catch ($) {
          De(t, t.return, $);
        }
      }
      if (t === e) {
        ee = null;
        break;
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, ee = r;
        break;
      }
      ee = t.return;
    }
  }
  function yd(e) {
    for (; ee !== null; ) {
      var t = ee;
      if (t === e) {
        ee = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        r.return = t.return, ee = r;
        break;
      }
      ee = t.return;
    }
  }
  function wd(e) {
    for (; ee !== null; ) {
      var t = ee;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Ki(4, t);
            } catch (S) {
              De(t, r, S);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (S) {
                De(t, l, S);
              }
            }
            var a = t.return;
            try {
              Es(t);
            } catch (S) {
              De(t, a, S);
            }
            break;
          case 5:
            var d = t.return;
            try {
              Es(t);
            } catch (S) {
              De(t, d, S);
            }
        }
      } catch (S) {
        De(t, t.return, S);
      }
      if (t === e) {
        ee = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        v.return = t.return, ee = v;
        break;
      }
      ee = t.return;
    }
  }
  var ng = Math.ceil, Gi = M.ReactCurrentDispatcher, Cs = M.ReactCurrentOwner, Nt = M.ReactCurrentBatchConfig, pe = 0, We = null, Ie = null, Ke = 0, wt = 0, Ar = xn(0), $e = 0, Oo = null, Gn = 0, Yi = 0, _s = 0, To = null, at = null, Ps = 0, Lr = 1 / 0, an = null, Xi = !1, Ns = null, On = null, qi = !1, Tn = null, Zi = 0, Do = 0, Rs = null, Ji = -1, eu = 0;
  function ot() {
    return (pe & 6) !== 0 ? Ae() : Ji !== -1 ? Ji : Ji = Ae();
  }
  function Dn(e) {
    return (e.mode & 1) === 0 ? 1 : (pe & 2) !== 0 && Ke !== 0 ? Ke & -Ke : Bv.transition !== null ? (eu === 0 && (eu = fc()), eu) : (e = Se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Sc(e.type)), e);
  }
  function Ft(e, t, r, i) {
    if (50 < Do) throw Do = 0, Rs = null, Error(u(185));
    eo(e, r, i), ((pe & 2) === 0 || e !== We) && (e === We && ((pe & 2) === 0 && (Yi |= r), $e === 4 && An(e, Ke)), ct(e, i), r === 1 && pe === 0 && (t.mode & 1) === 0 && (Lr = Ae() + 500, Ri && _n()));
  }
  function ct(e, t) {
    var r = e.callbackNode;
    Bm(e, t);
    var i = ai(e, e === We ? Ke : 0);
    if (i === 0) r !== null && sc(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (r != null && sc(r), t === 1) e.tag === 0 ? zv(Ed.bind(null, e)) : uf(Ed.bind(null, e)), Iv(function() {
        (pe & 6) === 0 && _n();
      }), r = null;
      else {
        switch (dc(i)) {
          case 1:
            r = ll;
            break;
          case 4:
            r = ac;
            break;
          case 16:
            r = ii;
            break;
          case 536870912:
            r = cc;
            break;
          default:
            r = ii;
        }
        r = Od(r, Sd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = r;
    }
  }
  function Sd(e, t) {
    if (Ji = -1, eu = 0, (pe & 6) !== 0) throw Error(u(327));
    var r = e.callbackNode;
    if (Ir() && e.callbackNode !== r) return null;
    var i = ai(e, e === We ? Ke : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = tu(e, i);
    else {
      t = i;
      var l = pe;
      pe |= 2;
      var a = xd();
      (We !== e || Ke !== t) && (an = null, Lr = Ae() + 500, Xn(e, t));
      do
        try {
          ig();
          break;
        } catch (v) {
          kd(e, v);
        }
      while (!0);
      Ql(), Gi.current = a, pe = l, Ie !== null ? t = 0 : (We = null, Ke = 0, t = $e);
    }
    if (t !== 0) {
      if (t === 2 && (l = sl(e), l !== 0 && (i = l, t = Os(e, l))), t === 1) throw r = Oo, Xn(e, 0), An(e, i), ct(e, Ae()), r;
      if (t === 6) An(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !rg(l) && (t = tu(e, i), t === 2 && (a = sl(e), a !== 0 && (i = a, t = Os(e, a))), t === 1)) throw r = Oo, Xn(e, 0), An(e, i), ct(e, Ae()), r;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            qn(e, at, an);
            break;
          case 3:
            if (An(e, i), (i & 130023424) === i && (t = Ps + 500 - Ae(), 10 < t)) {
              if (ai(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                ot(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Ml(qn.bind(null, e, at, an), t);
              break;
            }
            qn(e, at, an);
            break;
          case 4:
            if (An(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var d = 31 - Tt(i);
              a = 1 << d, d = t[d], d > l && (l = d), i &= ~a;
            }
            if (i = l, i = Ae() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * ng(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = Ml(qn.bind(null, e, at, an), i);
              break;
            }
            qn(e, at, an);
            break;
          case 5:
            qn(e, at, an);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return ct(e, Ae()), e.callbackNode === r ? Sd.bind(null, e) : null;
  }
  function Os(e, t) {
    var r = To;
    return e.current.memoizedState.isDehydrated && (Xn(e, t).flags |= 256), e = tu(e, t), e !== 2 && (t = at, at = r, t !== null && Ts(t)), e;
  }
  function Ts(e) {
    at === null ? at = e : at.push.apply(at, e);
  }
  function rg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && (r = r.stores, r !== null)) for (var i = 0; i < r.length; i++) {
          var l = r[i], a = l.getSnapshot;
          l = l.value;
          try {
            if (!Dt(a(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
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
  function An(e, t) {
    for (t &= ~_s, t &= ~Yi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var r = 31 - Tt(t), i = 1 << r;
      e[r] = -1, t &= ~i;
    }
  }
  function Ed(e) {
    if ((pe & 6) !== 0) throw Error(u(327));
    Ir();
    var t = ai(e, 0);
    if ((t & 1) === 0) return ct(e, Ae()), null;
    var r = tu(e, t);
    if (e.tag !== 0 && r === 2) {
      var i = sl(e);
      i !== 0 && (t = i, r = Os(e, i));
    }
    if (r === 1) throw r = Oo, Xn(e, 0), An(e, t), ct(e, Ae()), r;
    if (r === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, qn(e, at, an), ct(e, Ae()), null;
  }
  function Ds(e, t) {
    var r = pe;
    pe |= 1;
    try {
      return e(t);
    } finally {
      pe = r, pe === 0 && (Lr = Ae() + 500, Ri && _n());
    }
  }
  function Yn(e) {
    Tn !== null && Tn.tag === 0 && (pe & 6) === 0 && Ir();
    var t = pe;
    pe |= 1;
    var r = Nt.transition, i = Se;
    try {
      if (Nt.transition = null, Se = 1, e) return e();
    } finally {
      Se = i, Nt.transition = r, pe = t, (pe & 6) === 0 && _n();
    }
  }
  function As() {
    wt = Ar.current, _e(Ar);
  }
  function Xn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, Lv(r)), Ie !== null) for (r = Ie.return; r !== null; ) {
      var i = r;
      switch (Ul(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Pi();
          break;
        case 3:
          Or(), _e(ut), _e(Je), es();
          break;
        case 5:
          Zl(i);
          break;
        case 4:
          Or();
          break;
        case 13:
          _e(Oe);
          break;
        case 19:
          _e(Oe);
          break;
        case 10:
          Kl(i.type._context);
          break;
        case 22:
        case 23:
          As();
      }
      r = r.return;
    }
    if (We = e, Ie = e = Ln(e.current, null), Ke = wt = t, $e = 0, Oo = null, _s = Yi = Gn = 0, at = To = null, Hn !== null) {
      for (t = 0; t < Hn.length; t++) if (r = Hn[t], i = r.interleaved, i !== null) {
        r.interleaved = null;
        var l = i.next, a = r.pending;
        if (a !== null) {
          var d = a.next;
          a.next = l, i.next = d;
        }
        r.pending = i;
      }
      Hn = null;
    }
    return e;
  }
  function kd(e, t) {
    do {
      var r = Ie;
      try {
        if (Ql(), zi.current = Wi, Bi) {
          for (var i = Te.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Bi = !1;
        }
        if (Kn = 0, Ue = Be = Te = null, xo = !1, Co = 0, Cs.current = null, r === null || r.return === null) {
          $e = 1, Oo = t, Ie = null;
          break;
        }
        e: {
          var a = e, d = r.return, v = r, S = t;
          if (t = Ke, v.flags |= 32768, S !== null && typeof S == "object" && typeof S.then == "function") {
            var T = S, U = v, b = U.tag;
            if ((U.mode & 1) === 0 && (b === 0 || b === 11 || b === 15)) {
              var $ = U.alternate;
              $ ? (U.updateQueue = $.updateQueue, U.memoizedState = $.memoizedState, U.lanes = $.lanes) : (U.updateQueue = null, U.memoizedState = null);
            }
            var q = Kf(d);
            if (q !== null) {
              q.flags &= -257, Gf(q, d, v, a, t), q.mode & 1 && Qf(a, T, t), t = q, S = T;
              var te = t.updateQueue;
              if (te === null) {
                var re = /* @__PURE__ */ new Set();
                re.add(S), t.updateQueue = re;
              } else te.add(S);
              break e;
            } else {
              if ((t & 1) === 0) {
                Qf(a, T, t), Ls();
                break e;
              }
              S = Error(u(426));
            }
          } else if (Ne && v.mode & 1) {
            var Le = Kf(d);
            if (Le !== null) {
              (Le.flags & 65536) === 0 && (Le.flags |= 256), Gf(Le, d, v, a, t), Vl(Tr(S, v));
              break e;
            }
          }
          a = S = Tr(S, v), $e !== 4 && ($e = 2), To === null ? To = [a] : To.push(a), a = d;
          do {
            switch (a.tag) {
              case 3:
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var N = Vf(a, S, t);
                gf(a, N);
                break e;
              case 1:
                v = S;
                var k = a.type, R = a.stateNode;
                if ((a.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (On === null || !On.has(R)))) {
                  a.flags |= 65536, t &= -t, a.lanes |= t;
                  var H = Hf(a, v, t);
                  gf(a, H);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        _d(r);
      } catch (oe) {
        t = oe, Ie === r && r !== null && (Ie = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function xd() {
    var e = Gi.current;
    return Gi.current = Wi, e === null ? Wi : e;
  }
  function Ls() {
    ($e === 0 || $e === 3 || $e === 2) && ($e = 4), We === null || (Gn & 268435455) === 0 && (Yi & 268435455) === 0 || An(We, Ke);
  }
  function tu(e, t) {
    var r = pe;
    pe |= 2;
    var i = xd();
    (We !== e || Ke !== t) && (an = null, Xn(e, t));
    do
      try {
        og();
        break;
      } catch (l) {
        kd(e, l);
      }
    while (!0);
    if (Ql(), pe = r, Gi.current = i, Ie !== null) throw Error(u(261));
    return We = null, Ke = 0, $e;
  }
  function og() {
    for (; Ie !== null; ) Cd(Ie);
  }
  function ig() {
    for (; Ie !== null && !Tm(); ) Cd(Ie);
  }
  function Cd(e) {
    var t = Rd(e.alternate, e, wt);
    e.memoizedProps = e.pendingProps, t === null ? _d(e) : Ie = t, Cs.current = null;
  }
  function _d(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (r = qv(r, t, wt), r !== null) {
          Ie = r;
          return;
        }
      } else {
        if (r = Zv(r, t), r !== null) {
          r.flags &= 32767, Ie = r;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          $e = 6, Ie = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function qn(e, t, r) {
    var i = Se, l = Nt.transition;
    try {
      Nt.transition = null, Se = 1, ug(e, t, r, i);
    } finally {
      Nt.transition = l, Se = i;
    }
    return null;
  }
  function ug(e, t, r, i) {
    do
      Ir();
    while (Tn !== null);
    if ((pe & 6) !== 0) throw Error(u(327));
    r = e.finishedWork;
    var l = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var a = r.lanes | r.childLanes;
    if ($m(e, a), e === We && (Ie = We = null, Ke = 0), (r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0 || qi || (qi = !0, Od(ii, function() {
      return Ir(), null;
    })), a = (r.flags & 15990) !== 0, (r.subtreeFlags & 15990) !== 0 || a) {
      a = Nt.transition, Nt.transition = null;
      var d = Se;
      Se = 1;
      var v = pe;
      pe |= 4, Cs.current = null, eg(e, r), md(r, e), Pv(Ll), di = !!Al, Ll = Al = null, e.current = r, tg(r), Dm(), pe = v, Se = d, Nt.transition = a;
    } else e.current = r;
    if (qi && (qi = !1, Tn = e, Zi = l), a = e.pendingLanes, a === 0 && (On = null), Im(r.stateNode), ct(e, Ae()), t !== null) for (i = e.onRecoverableError, r = 0; r < t.length; r++) l = t[r], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (Xi) throw Xi = !1, e = Ns, Ns = null, e;
    return (Zi & 1) !== 0 && e.tag !== 0 && Ir(), a = e.pendingLanes, (a & 1) !== 0 ? e === Rs ? Do++ : (Do = 0, Rs = e) : Do = 0, _n(), null;
  }
  function Ir() {
    if (Tn !== null) {
      var e = dc(Zi), t = Nt.transition, r = Se;
      try {
        if (Nt.transition = null, Se = 16 > e ? 16 : e, Tn === null) var i = !1;
        else {
          if (e = Tn, Tn = null, Zi = 0, (pe & 6) !== 0) throw Error(u(331));
          var l = pe;
          for (pe |= 4, ee = e.current; ee !== null; ) {
            var a = ee, d = a.child;
            if ((ee.flags & 16) !== 0) {
              var v = a.deletions;
              if (v !== null) {
                for (var S = 0; S < v.length; S++) {
                  var T = v[S];
                  for (ee = T; ee !== null; ) {
                    var U = ee;
                    switch (U.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ro(8, U, a);
                    }
                    var b = U.child;
                    if (b !== null) b.return = U, ee = b;
                    else for (; ee !== null; ) {
                      U = ee;
                      var $ = U.sibling, q = U.return;
                      if (cd(U), U === T) {
                        ee = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = q, ee = $;
                        break;
                      }
                      ee = q;
                    }
                  }
                }
                var te = a.alternate;
                if (te !== null) {
                  var re = te.child;
                  if (re !== null) {
                    te.child = null;
                    do {
                      var Le = re.sibling;
                      re.sibling = null, re = Le;
                    } while (re !== null);
                  }
                }
                ee = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && d !== null) d.return = a, ee = d;
            else e: for (; ee !== null; ) {
              if (a = ee, (a.flags & 2048) !== 0) switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Ro(9, a, a.return);
              }
              var N = a.sibling;
              if (N !== null) {
                N.return = a.return, ee = N;
                break e;
              }
              ee = a.return;
            }
          }
          var k = e.current;
          for (ee = k; ee !== null; ) {
            d = ee;
            var R = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && R !== null) R.return = d, ee = R;
            else e: for (d = k; ee !== null; ) {
              if (v = ee, (v.flags & 2048) !== 0) try {
                switch (v.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ki(9, v);
                }
              } catch (oe) {
                De(v, v.return, oe);
              }
              if (v === d) {
                ee = null;
                break e;
              }
              var H = v.sibling;
              if (H !== null) {
                H.return = v.return, ee = H;
                break e;
              }
              ee = v.return;
            }
          }
          if (pe = l, _n(), Wt && typeof Wt.onPostCommitFiberRoot == "function") try {
            Wt.onPostCommitFiberRoot(ui, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        Se = r, Nt.transition = t;
      }
    }
    return !1;
  }
  function Pd(e, t, r) {
    t = Tr(r, t), t = Vf(e, t, 1), e = Nn(e, t, 1), t = ot(), e !== null && (eo(e, 1, t), ct(e, t));
  }
  function De(e, t, r) {
    if (e.tag === 3) Pd(e, e, r);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Pd(t, e, r);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (On === null || !On.has(i))) {
          e = Tr(r, e), e = Hf(t, e, 1), t = Nn(t, e, 1), e = ot(), t !== null && (eo(t, 1, e), ct(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function lg(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = ot(), e.pingedLanes |= e.suspendedLanes & r, We === e && (Ke & r) === r && ($e === 4 || $e === 3 && (Ke & 130023424) === Ke && 500 > Ae() - Ps ? Xn(e, 0) : _s |= r), ct(e, t);
  }
  function Nd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = si, si <<= 1, (si & 130023424) === 0 && (si = 4194304)));
    var r = ot();
    e = un(e, t), e !== null && (eo(e, t, r), ct(e, r));
  }
  function sg(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), Nd(e, r);
  }
  function ag(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode, l = e.memoizedState;
        l !== null && (r = l.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    i !== null && i.delete(t), Nd(e, r);
  }
  var Rd;
  Rd = function(e, t, r) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || ut.current) st = !0;
    else {
      if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return st = !1, Xv(e, t, r);
      st = (e.flags & 131072) !== 0;
    }
    else st = !1, Ne && (t.flags & 1048576) !== 0 && lf(t, Ti, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Hi(e, t), e = t.pendingProps;
        var l = kr(t, Je.current);
        Rr(t, r), l = rs(null, t, i, e, l, r);
        var a = os();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, lt(i) ? (a = !0, Ni(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Xl(t), l.updater = bi, t.stateNode = l, l._reactInternals = t, cs(t, i, e, r), t = hs(null, t, i, !0, a, r)) : (t.tag = 0, Ne && a && $l(t), rt(null, t, l, r), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Hi(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = fg(i), e = Lt(i, e), l) {
            case 0:
              t = ps(null, t, i, e, r);
              break e;
            case 1:
              t = ed(null, t, i, e, r);
              break e;
            case 11:
              t = Yf(null, t, i, e, r);
              break e;
            case 14:
              t = Xf(null, t, i, Lt(i.type, e), r);
              break e;
          }
          throw Error(u(
            306,
            i,
            ""
          ));
        }
        return t;
      case 0:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : Lt(i, l), ps(e, t, i, l, r);
      case 1:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : Lt(i, l), ed(e, t, i, l, r);
      case 3:
        e: {
          if (td(t), e === null) throw Error(u(387));
          i = t.pendingProps, a = t.memoizedState, l = a.element, vf(e, t), Fi(t, i, null, r);
          var d = t.memoizedState;
          if (i = d.element, a.isDehydrated) if (a = { element: i, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
            l = Tr(Error(u(423)), t), t = nd(e, t, i, r, l);
            break e;
          } else if (i !== l) {
            l = Tr(Error(u(424)), t), t = nd(e, t, i, r, l);
            break e;
          } else for (yt = kn(t.stateNode.containerInfo.firstChild), gt = t, Ne = !0, At = null, r = hf(t, null, i, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (_r(), i === l) {
              t = sn(e, t, r);
              break e;
            }
            rt(e, t, i, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return wf(t), e === null && bl(t), i = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, d = l.children, Il(i, l) ? d = null : a !== null && Il(i, a) && (t.flags |= 32), Jf(e, t), rt(e, t, d, r), t.child;
      case 6:
        return e === null && bl(t), null;
      case 13:
        return rd(e, t, r);
      case 4:
        return ql(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Pr(t, null, i, r) : rt(e, t, i, r), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : Lt(i, l), Yf(e, t, i, l, r);
      case 7:
        return rt(e, t, t.pendingProps, r), t.child;
      case 8:
        return rt(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return rt(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, a = t.memoizedProps, d = l.value, ke(Li, i._currentValue), i._currentValue = d, a !== null) if (Dt(a.value, d)) {
            if (a.children === l.children && !ut.current) {
              t = sn(e, t, r);
              break e;
            }
          } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
            var v = a.dependencies;
            if (v !== null) {
              d = a.child;
              for (var S = v.firstContext; S !== null; ) {
                if (S.context === i) {
                  if (a.tag === 1) {
                    S = ln(-1, r & -r), S.tag = 2;
                    var T = a.updateQueue;
                    if (T !== null) {
                      T = T.shared;
                      var U = T.pending;
                      U === null ? S.next = S : (S.next = U.next, U.next = S), T.pending = S;
                    }
                  }
                  a.lanes |= r, S = a.alternate, S !== null && (S.lanes |= r), Gl(
                    a.return,
                    r,
                    t
                  ), v.lanes |= r;
                  break;
                }
                S = S.next;
              }
            } else if (a.tag === 10) d = a.type === t.type ? null : a.child;
            else if (a.tag === 18) {
              if (d = a.return, d === null) throw Error(u(341));
              d.lanes |= r, v = d.alternate, v !== null && (v.lanes |= r), Gl(d, r, t), d = a.sibling;
            } else d = a.child;
            if (d !== null) d.return = a;
            else for (d = a; d !== null; ) {
              if (d === t) {
                d = null;
                break;
              }
              if (a = d.sibling, a !== null) {
                a.return = d.return, d = a;
                break;
              }
              d = d.return;
            }
            a = d;
          }
          rt(e, t, l.children, r), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, i = t.pendingProps.children, Rr(t, r), l = _t(l), i = i(l), t.flags |= 1, rt(e, t, i, r), t.child;
      case 14:
        return i = t.type, l = Lt(i, t.pendingProps), l = Lt(i.type, l), Xf(e, t, i, l, r);
      case 15:
        return qf(e, t, t.type, t.pendingProps, r);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : Lt(i, l), Hi(e, t), t.tag = 1, lt(i) ? (e = !0, Ni(t)) : e = !1, Rr(t, r), Wf(t, i, l), cs(t, i, l, r), hs(null, t, i, !0, e, r);
      case 19:
        return id(e, t, r);
      case 22:
        return Zf(e, t, r);
    }
    throw Error(u(156, t.tag));
  };
  function Od(e, t) {
    return lc(e, t);
  }
  function cg(e, t, r, i) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Rt(e, t, r, i) {
    return new cg(e, t, r, i);
  }
  function Is(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function fg(e) {
    if (typeof e == "function") return Is(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Fe) return 11;
      if (e === je) return 14;
    }
    return 2;
  }
  function Ln(e, t) {
    var r = e.alternate;
    return r === null ? (r = Rt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
  }
  function nu(e, t, r, i, l, a) {
    var d = 2;
    if (i = e, typeof e == "function") Is(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case j:
        return Zn(r.children, l, a, t);
      case ae:
        d = 8, l |= 8;
        break;
      case le:
        return e = Rt(12, r, t, l | 2), e.elementType = le, e.lanes = a, e;
      case He:
        return e = Rt(13, r, t, l), e.elementType = He, e.lanes = a, e;
      case qe:
        return e = Rt(19, r, t, l), e.elementType = qe, e.lanes = a, e;
      case ve:
        return ru(r, l, a, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case me:
            d = 10;
            break e;
          case ht:
            d = 9;
            break e;
          case Fe:
            d = 11;
            break e;
          case je:
            d = 14;
            break e;
          case ze:
            d = 16, i = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = Rt(d, r, t, l), t.elementType = e, t.type = i, t.lanes = a, t;
  }
  function Zn(e, t, r, i) {
    return e = Rt(7, e, i, t), e.lanes = r, e;
  }
  function ru(e, t, r, i) {
    return e = Rt(22, e, i, t), e.elementType = ve, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
  }
  function Ms(e, t, r) {
    return e = Rt(6, e, null, t), e.lanes = r, e;
  }
  function Fs(e, t, r) {
    return t = Rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function dg(e, t, r, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = al(0), this.expirationTimes = al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = al(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function js(e, t, r, i, l, a, d, v, S) {
    return e = new dg(e, t, r, v, S), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = Rt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: i, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xl(a), e;
  }
  function pg(e, t, r) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: V, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: r };
  }
  function Td(e) {
    if (!e) return Cn;
    e = e._reactInternals;
    e: {
      if ($n(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (lt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (lt(r)) return rf(e, r, t);
    }
    return t;
  }
  function Dd(e, t, r, i, l, a, d, v, S) {
    return e = js(r, i, !0, e, l, a, d, v, S), e.context = Td(null), r = e.current, i = ot(), l = Dn(r), a = ln(i, l), a.callback = t ?? null, Nn(r, a, l), e.current.lanes = l, eo(e, l, i), ct(e, i), e;
  }
  function ou(e, t, r, i) {
    var l = t.current, a = ot(), d = Dn(l);
    return r = Td(r), t.context === null ? t.context = r : t.pendingContext = r, t = ln(a, d), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = Nn(l, t, d), e !== null && (Ft(e, l, d, a), Mi(e, l, d)), d;
  }
  function iu(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ad(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function zs(e, t) {
    Ad(e, t), (e = e.alternate) && Ad(e, t);
  }
  function hg() {
    return null;
  }
  var Ld = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Bs(e) {
    this._internalRoot = e;
  }
  uu.prototype.render = Bs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    ou(e, t, null, null);
  }, uu.prototype.unmount = Bs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Yn(function() {
        ou(null, e, null, null);
      }), t[tn] = null;
    }
  };
  function uu(e) {
    this._internalRoot = e;
  }
  uu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = mc();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < wn.length && t !== 0 && t < wn[r].priority; r++) ;
      wn.splice(r, 0, e), r === 0 && yc(e);
    }
  };
  function $s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function lu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Id() {
  }
  function mg(e, t, r, i, l) {
    if (l) {
      if (typeof i == "function") {
        var a = i;
        i = function() {
          var T = iu(d);
          a.call(T);
        };
      }
      var d = Dd(t, i, e, 0, null, !1, !1, "", Id);
      return e._reactRootContainer = d, e[tn] = d.current, mo(e.nodeType === 8 ? e.parentNode : e), Yn(), d;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var v = i;
      i = function() {
        var T = iu(S);
        v.call(T);
      };
    }
    var S = js(e, 0, !1, null, null, !1, !1, "", Id);
    return e._reactRootContainer = S, e[tn] = S.current, mo(e.nodeType === 8 ? e.parentNode : e), Yn(function() {
      ou(t, S, r, i);
    }), S;
  }
  function su(e, t, r, i, l) {
    var a = r._reactRootContainer;
    if (a) {
      var d = a;
      if (typeof l == "function") {
        var v = l;
        l = function() {
          var S = iu(d);
          v.call(S);
        };
      }
      ou(t, d, e, l);
    } else d = mg(r, t, e, l, i);
    return iu(d);
  }
  pc = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Jr(t.pendingLanes);
          r !== 0 && (cl(t, r | 1), ct(t, Ae()), (pe & 6) === 0 && (Lr = Ae() + 500, _n()));
        }
        break;
      case 13:
        Yn(function() {
          var i = un(e, 1);
          if (i !== null) {
            var l = ot();
            Ft(i, e, 1, l);
          }
        }), zs(e, 1);
    }
  }, fl = function(e) {
    if (e.tag === 13) {
      var t = un(e, 134217728);
      if (t !== null) {
        var r = ot();
        Ft(t, e, 134217728, r);
      }
      zs(e, 134217728);
    }
  }, hc = function(e) {
    if (e.tag === 13) {
      var t = Dn(e), r = un(e, t);
      if (r !== null) {
        var i = ot();
        Ft(r, e, t, i);
      }
      zs(e, t);
    }
  }, mc = function() {
    return Se;
  }, vc = function(e, t) {
    var r = Se;
    try {
      return Se = e, t();
    } finally {
      Se = r;
    }
  }, rl = function(e, t, r) {
    switch (t) {
      case "input":
        if (xe(e, r), t = r.name, r.type === "radio" && t != null) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
            var i = r[t];
            if (i !== e && i.form === e.form) {
              var l = _i(i);
              if (!l) throw Error(u(90));
              Ee(i), xe(i, l);
            }
          }
        }
        break;
      case "textarea":
        Jo(e, r);
        break;
      case "select":
        t = r.value, t != null && Ut(e, !!r.multiple, t, !1);
    }
  }, ec = Ds, tc = Yn;
  var vg = { usingClientEntryPoint: !1, Events: [yo, Sr, _i, Za, Ja, Ds] }, Ao = { findFiberByHostInstance: Un, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gg = { bundleType: Ao.bundleType, version: Ao.version, rendererPackageName: Ao.rendererPackageName, rendererConfig: Ao.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: M.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ic(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ao.findFiberByHostInstance || hg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!au.isDisabled && au.supportsFiber) try {
      ui = au.inject(gg), Wt = au;
    } catch {
    }
  }
  return ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vg, ft.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$s(t)) throw Error(u(200));
    return pg(e, t, null, r);
  }, ft.createRoot = function(e, t) {
    if (!$s(e)) throw Error(u(299));
    var r = !1, i = "", l = Ld;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = js(e, 1, !1, null, null, r, !1, i, l), e[tn] = t.current, mo(e.nodeType === 8 ? e.parentNode : e), new Bs(t);
  }, ft.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = ic(t), e = e === null ? null : e.stateNode, e;
  }, ft.flushSync = function(e) {
    return Yn(e);
  }, ft.hydrate = function(e, t, r) {
    if (!lu(t)) throw Error(u(200));
    return su(null, e, t, !0, r);
  }, ft.hydrateRoot = function(e, t, r) {
    if (!$s(e)) throw Error(u(405));
    var i = r != null && r.hydratedSources || null, l = !1, a = "", d = Ld;
    if (r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (a = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), t = Dd(t, null, e, 1, r ?? null, l, !1, a, d), e[tn] = t.current, mo(e), i) for (e = 0; e < i.length; e++) r = i[e], l = r._getVersion, l = l(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, l] : t.mutableSourceEagerHydrationData.push(
      r,
      l
    );
    return new uu(t);
  }, ft.render = function(e, t, r) {
    if (!lu(t)) throw Error(u(200));
    return su(null, e, t, !1, r);
  }, ft.unmountComponentAtNode = function(e) {
    if (!lu(e)) throw Error(u(40));
    return e._reactRootContainer ? (Yn(function() {
      su(null, null, e, !1, function() {
        e._reactRootContainer = null, e[tn] = null;
      });
    }), !0) : !1;
  }, ft.unstable_batchedUpdates = Ds, ft.unstable_renderSubtreeIntoContainer = function(e, t, r, i) {
    if (!lu(r)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return su(e, t, r, !1, i);
  }, ft.version = "18.3.1-next-f1338f8080-20240426", ft;
}
var Wd;
function Fp() {
  if (Wd) return bs.exports;
  Wd = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
  }
  return n(), bs.exports = Ng(), bs.exports;
}
var bd;
function Rg() {
  if (bd) return fu;
  bd = 1;
  var n = Fp();
  return fu.createRoot = n.createRoot, fu.hydrateRoot = n.hydrateRoot, fu;
}
var dS = Rg(), Qs = { exports: {} }, Ks = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vd;
function Og() {
  if (Vd) return Ks;
  Vd = 1;
  var n = zu();
  function o(g, C) {
    return g === C && (g !== 0 || 1 / g === 1 / C) || g !== g && C !== C;
  }
  var u = typeof Object.is == "function" ? Object.is : o, s = n.useSyncExternalStore, c = n.useRef, f = n.useEffect, h = n.useMemo, m = n.useDebugValue;
  return Ks.useSyncExternalStoreWithSelector = function(g, C, w, x, E) {
    var D = c(null);
    if (D.current === null) {
      var L = { hasValue: !1, value: null };
      D.current = L;
    } else L = D.current;
    D = h(
      function() {
        function A(W) {
          if (!I) {
            if (I = !0, B = W, W = x(W), E !== void 0 && L.hasValue) {
              var V = L.value;
              if (E(V, W))
                return F = V;
            }
            return F = W;
          }
          if (V = F, u(B, W)) return V;
          var j = x(W);
          return E !== void 0 && E(V, j) ? (B = W, V) : (B = W, F = j);
        }
        var I = !1, B, F, M = w === void 0 ? null : w;
        return [
          function() {
            return A(C());
          },
          M === null ? void 0 : function() {
            return A(M());
          }
        ];
      },
      [C, w, x, E]
    );
    var P = s(g, D[0], D[1]);
    return f(
      function() {
        L.hasValue = !0, L.value = P;
      },
      [P]
    ), m(P), P;
  }, Ks;
}
var Hd;
function Tg() {
  return Hd || (Hd = 1, Qs.exports = Og()), Qs.exports;
}
var Dg = Tg();
function jp(n) {
  n();
}
function Ag() {
  let n = null, o = null;
  return {
    clear() {
      n = null, o = null;
    },
    notify() {
      jp(() => {
        let u = n;
        for (; u; )
          u.callback(), u = u.next;
      });
    },
    get() {
      const u = [];
      let s = n;
      for (; s; )
        u.push(s), s = s.next;
      return u;
    },
    subscribe(u) {
      let s = !0;
      const c = o = {
        callback: u,
        next: null,
        prev: o
      };
      return c.prev ? c.prev.next = c : n = c, function() {
        !s || n === null || (s = !1, c.next ? c.next.prev = c.prev : o = c.prev, c.prev ? c.prev.next = c.next : n = c.next);
      };
    }
  };
}
var Qd = {
  notify() {
  },
  get: () => []
};
function Lg(n, o) {
  let u, s = Qd, c = 0, f = !1;
  function h(P) {
    w();
    const A = s.subscribe(P);
    let I = !1;
    return () => {
      I || (I = !0, A(), x());
    };
  }
  function m() {
    s.notify();
  }
  function g() {
    L.onStateChange && L.onStateChange();
  }
  function C() {
    return f;
  }
  function w() {
    c++, u || (u = n.subscribe(g), s = Ag());
  }
  function x() {
    c--, u && c === 0 && (u(), u = void 0, s.clear(), s = Qd);
  }
  function E() {
    f || (f = !0, w());
  }
  function D() {
    f && (f = !1, x());
  }
  const L = {
    addNestedSub: h,
    notifyNestedSubs: m,
    handleChangeWrapper: g,
    isSubscribed: C,
    trySubscribe: E,
    tryUnsubscribe: D,
    getListeners: () => s
  };
  return L;
}
var Ig = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Mg = /* @__PURE__ */ Ig(), Fg = () => typeof navigator < "u" && navigator.product === "ReactNative", jg = /* @__PURE__ */ Fg(), zg = () => Mg || jg ? O.useLayoutEffect : O.useEffect, Bg = /* @__PURE__ */ zg();
function Kd(n, o) {
  return n === o ? n !== 0 || o !== 0 || 1 / n === 1 / o : n !== n && o !== o;
}
function pS(n, o) {
  if (Kd(n, o)) return !0;
  if (typeof n != "object" || n === null || typeof o != "object" || o === null)
    return !1;
  const u = Object.keys(n), s = Object.keys(o);
  if (u.length !== s.length) return !1;
  for (let c = 0; c < u.length; c++)
    if (!Object.prototype.hasOwnProperty.call(o, u[c]) || !Kd(n[u[c]], o[u[c]]))
      return !1;
  return !0;
}
var Gs = /* @__PURE__ */ Symbol.for("react-redux-context"), Ys = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function $g() {
  if (!O.createContext) return {};
  const n = Ys[Gs] ?? (Ys[Gs] = /* @__PURE__ */ new Map());
  let o = n.get(O.createContext);
  return o || (o = O.createContext(
    null
  ), n.set(O.createContext, o)), o;
}
var Bn = /* @__PURE__ */ $g();
function Ug(n) {
  const { children: o, context: u, serverState: s, store: c } = n, f = O.useMemo(() => {
    const g = Lg(c);
    return {
      store: c,
      subscription: g,
      getServerState: s ? () => s : void 0
    };
  }, [c, s]), h = O.useMemo(() => c.getState(), [c]);
  Bg(() => {
    const { subscription: g } = f;
    return g.onStateChange = g.notifyNestedSubs, g.trySubscribe(), h !== c.getState() && g.notifyNestedSubs(), () => {
      g.tryUnsubscribe(), g.onStateChange = void 0;
    };
  }, [f, h]);
  const m = u || Bn;
  return /* @__PURE__ */ O.createElement(m.Provider, { value: f }, o);
}
var hS = Ug;
function Ia(n = Bn) {
  return function() {
    return O.useContext(n);
  };
}
var zp = /* @__PURE__ */ Ia();
function Bp(n = Bn) {
  const o = n === Bn ? zp : (
    // @ts-ignore
    Ia(n)
  ), u = () => {
    const { store: s } = o();
    return s;
  };
  return Object.assign(u, {
    withTypes: () => u
  }), u;
}
var Wg = /* @__PURE__ */ Bp();
function bg(n = Bn) {
  const o = n === Bn ? Wg : Bp(n), u = () => o().dispatch;
  return Object.assign(u, {
    withTypes: () => u
  }), u;
}
var $p = /* @__PURE__ */ bg(), Vg = (n, o) => n === o;
function Hg(n = Bn) {
  const o = n === Bn ? zp : Ia(n), u = (s, c = {}) => {
    const { equalityFn: f = Vg } = typeof c == "function" ? { equalityFn: c } : c, h = o(), { store: m, subscription: g, getServerState: C } = h;
    O.useRef(!0);
    const w = O.useCallback(
      {
        [s.name](E) {
          return s(E);
        }
      }[s.name],
      [s]
    ), x = Dg.useSyncExternalStoreWithSelector(
      g.addNestedSub,
      m.getState,
      C || m.getState,
      w,
      f
    );
    return O.useDebugValue(x), x;
  };
  return Object.assign(u, {
    withTypes: () => u
  }), u;
}
var Ma = /* @__PURE__ */ Hg(), mS = jp;
function Ge(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var Qg = typeof Symbol == "function" && Symbol.observable || "@@observable", Gd = Qg, Xs = () => Math.random().toString(36).substring(7).split("").join("."), Kg = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Xs()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Xs()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Xs()}`
}, Ru = Kg;
function Fa(n) {
  if (typeof n != "object" || n === null)
    return !1;
  let o = n;
  for (; Object.getPrototypeOf(o) !== null; )
    o = Object.getPrototypeOf(o);
  return Object.getPrototypeOf(n) === o || Object.getPrototypeOf(n) === null;
}
function Up(n, o, u) {
  if (typeof n != "function")
    throw new Error(Ge(2));
  if (typeof o == "function" && typeof u == "function" || typeof u == "function" && typeof arguments[3] == "function")
    throw new Error(Ge(0));
  if (typeof o == "function" && typeof u > "u" && (u = o, o = void 0), typeof u < "u") {
    if (typeof u != "function")
      throw new Error(Ge(1));
    return u(Up)(n, o);
  }
  let s = n, c = o, f = /* @__PURE__ */ new Map(), h = f, m = 0, g = !1;
  function C() {
    h === f && (h = /* @__PURE__ */ new Map(), f.forEach((A, I) => {
      h.set(I, A);
    }));
  }
  function w() {
    if (g)
      throw new Error(Ge(3));
    return c;
  }
  function x(A) {
    if (typeof A != "function")
      throw new Error(Ge(4));
    if (g)
      throw new Error(Ge(5));
    let I = !0;
    C();
    const B = m++;
    return h.set(B, A), function() {
      if (I) {
        if (g)
          throw new Error(Ge(6));
        I = !1, C(), h.delete(B), f = null;
      }
    };
  }
  function E(A) {
    if (!Fa(A))
      throw new Error(Ge(7));
    if (typeof A.type > "u")
      throw new Error(Ge(8));
    if (typeof A.type != "string")
      throw new Error(Ge(17));
    if (g)
      throw new Error(Ge(9));
    try {
      g = !0, c = s(c, A);
    } finally {
      g = !1;
    }
    return (f = h).forEach((B) => {
      B();
    }), A;
  }
  function D(A) {
    if (typeof A != "function")
      throw new Error(Ge(10));
    s = A, E({
      type: Ru.REPLACE
    });
  }
  function L() {
    const A = x;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(I) {
        if (typeof I != "object" || I === null)
          throw new Error(Ge(11));
        function B() {
          const M = I;
          M.next && M.next(w());
        }
        return B(), {
          unsubscribe: A(B)
        };
      },
      [Gd]() {
        return this;
      }
    };
  }
  return E({
    type: Ru.INIT
  }), {
    dispatch: E,
    subscribe: x,
    getState: w,
    replaceReducer: D,
    [Gd]: L
  };
}
function Gg(n) {
  Object.keys(n).forEach((o) => {
    const u = n[o];
    if (typeof u(void 0, {
      type: Ru.INIT
    }) > "u")
      throw new Error(Ge(12));
    if (typeof u(void 0, {
      type: Ru.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Ge(13));
  });
}
function Yg(n) {
  const o = Object.keys(n), u = {};
  for (let f = 0; f < o.length; f++) {
    const h = o[f];
    typeof n[h] == "function" && (u[h] = n[h]);
  }
  const s = Object.keys(u);
  let c;
  try {
    Gg(u);
  } catch (f) {
    c = f;
  }
  return function(h = {}, m) {
    if (c)
      throw c;
    let g = !1;
    const C = {};
    for (let w = 0; w < s.length; w++) {
      const x = s[w], E = u[x], D = h[x], L = E(D, m);
      if (typeof L > "u")
        throw m && m.type, new Error(Ge(14));
      C[x] = L, g = g || L !== D;
    }
    return g = g || s.length !== Object.keys(h).length, g ? C : h;
  };
}
function Ou(...n) {
  return n.length === 0 ? (o) => o : n.length === 1 ? n[0] : n.reduce((o, u) => (...s) => o(u(...s)));
}
function Xg(...n) {
  return (o) => (u, s) => {
    const c = o(u, s);
    let f = () => {
      throw new Error(Ge(15));
    };
    const h = {
      getState: c.getState,
      dispatch: (g, ...C) => f(g, ...C)
    }, m = n.map((g) => g(h));
    return f = Ou(...m)(c.dispatch), {
      ...c,
      dispatch: f
    };
  };
}
function Wp(n) {
  return Fa(n) && "type" in n && typeof n.type == "string";
}
var ja = Symbol.for("immer-nothing"), zo = Symbol.for("immer-draftable"), pt = Symbol.for("immer-state");
function Ye(n, ...o) {
  throw new Error(
    `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ir = Object.getPrototypeOf;
function dn(n) {
  return !!n && !!n[pt];
}
function Yt(n) {
  var o;
  return n ? bp(n) || Array.isArray(n) || !!n[zo] || !!((o = n.constructor) != null && o[zo]) || Go(n) || Yo(n) : !1;
}
var qg = Object.prototype.constructor.toString();
function bp(n) {
  if (!n || typeof n != "object")
    return !1;
  const o = ir(n);
  if (o === null)
    return !0;
  const u = Object.hasOwnProperty.call(o, "constructor") && o.constructor;
  return u === Object ? !0 : typeof u == "function" && Function.toString.call(u) === qg;
}
function vS(n) {
  return dn(n) || Ye(15, n), n[pt].base_;
}
function $o(n, o) {
  ur(n) === 0 ? Reflect.ownKeys(n).forEach((u) => {
    o(u, n[u], n);
  }) : n.forEach((u, s) => o(s, u, n));
}
function ur(n) {
  const o = n[pt];
  return o ? o.type_ : Array.isArray(n) ? 1 : Go(n) ? 2 : Yo(n) ? 3 : 0;
}
function Uo(n, o) {
  return ur(n) === 2 ? n.has(o) : Object.prototype.hasOwnProperty.call(n, o);
}
function qs(n, o) {
  return ur(n) === 2 ? n.get(o) : n[o];
}
function Vp(n, o, u) {
  const s = ur(n);
  s === 2 ? n.set(o, u) : s === 3 ? n.add(u) : n[o] = u;
}
function Zg(n, o) {
  return n === o ? n !== 0 || 1 / n === 1 / o : n !== n && o !== o;
}
function Go(n) {
  return n instanceof Map;
}
function Yo(n) {
  return n instanceof Set;
}
function Jn(n) {
  return n.copy_ || n.base_;
}
function ha(n, o) {
  if (Go(n))
    return new Map(n);
  if (Yo(n))
    return new Set(n);
  if (Array.isArray(n))
    return Array.prototype.slice.call(n);
  const u = bp(n);
  if (o === !0 || o === "class_only" && !u) {
    const s = Object.getOwnPropertyDescriptors(n);
    delete s[pt];
    let c = Reflect.ownKeys(s);
    for (let f = 0; f < c.length; f++) {
      const h = c[f], m = s[h];
      m.writable === !1 && (m.writable = !0, m.configurable = !0), (m.get || m.set) && (s[h] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: m.enumerable,
        value: n[h]
      });
    }
    return Object.create(ir(n), s);
  } else {
    const s = ir(n);
    if (s !== null && u)
      return { ...n };
    const c = Object.create(s);
    return Object.assign(c, n);
  }
}
function za(n, o = !1) {
  return Bu(n) || dn(n) || !Yt(n) || (ur(n) > 1 && (n.set = n.add = n.clear = n.delete = Jg), Object.freeze(n), o && Object.entries(n).forEach(([u, s]) => za(s, !0))), n;
}
function Jg() {
  Ye(2);
}
function Bu(n) {
  return Object.isFrozen(n);
}
var ma = {};
function lr(n) {
  const o = ma[n];
  return o || Ye(0, n), o;
}
function ey(n, o) {
  ma[n] || (ma[n] = o);
}
var Wo;
function Hp() {
  return Wo;
}
function ty(n, o) {
  return {
    drafts_: [],
    parent_: n,
    immer_: o,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Yd(n, o) {
  o && (lr("Patches"), n.patches_ = [], n.inversePatches_ = [], n.patchListener_ = o);
}
function va(n) {
  ga(n), n.drafts_.forEach(ny), n.drafts_ = null;
}
function ga(n) {
  n === Wo && (Wo = n.parent_);
}
function Xd(n) {
  return Wo = ty(Wo, n);
}
function ny(n) {
  const o = n[pt];
  o.type_ === 0 || o.type_ === 1 ? o.revoke_() : o.revoked_ = !0;
}
function qd(n, o) {
  o.unfinalizedDrafts_ = o.drafts_.length;
  const u = o.drafts_[0];
  return n !== void 0 && n !== u ? (u[pt].modified_ && (va(o), Ye(4)), Yt(n) && (n = Tu(o, n), o.parent_ || Du(o, n)), o.patches_ && lr("Patches").generateReplacementPatches_(
    u[pt].base_,
    n,
    o.patches_,
    o.inversePatches_
  )) : n = Tu(o, u, []), va(o), o.patches_ && o.patchListener_(o.patches_, o.inversePatches_), n !== ja ? n : void 0;
}
function Tu(n, o, u) {
  if (Bu(o))
    return o;
  const s = o[pt];
  if (!s)
    return $o(
      o,
      (c, f) => Zd(n, s, o, c, f, u)
    ), o;
  if (s.scope_ !== n)
    return o;
  if (!s.modified_)
    return Du(n, s.base_, !0), s.base_;
  if (!s.finalized_) {
    s.finalized_ = !0, s.scope_.unfinalizedDrafts_--;
    const c = s.copy_;
    let f = c, h = !1;
    s.type_ === 3 && (f = new Set(c), c.clear(), h = !0), $o(
      f,
      (m, g) => Zd(n, s, c, m, g, u, h)
    ), Du(n, c, !1), u && n.patches_ && lr("Patches").generatePatches_(
      s,
      u,
      n.patches_,
      n.inversePatches_
    );
  }
  return s.copy_;
}
function Zd(n, o, u, s, c, f, h) {
  if (dn(c)) {
    const m = f && o && o.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Uo(o.assigned_, s) ? f.concat(s) : void 0, g = Tu(n, c, m);
    if (Vp(u, s, g), dn(g))
      n.canAutoFreeze_ = !1;
    else
      return;
  } else h && u.add(c);
  if (Yt(c) && !Bu(c)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1)
      return;
    Tu(n, c), (!o || !o.scope_.parent_) && typeof s != "symbol" && Object.prototype.propertyIsEnumerable.call(u, s) && Du(n, c);
  }
}
function Du(n, o, u = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && za(o, u);
}
function ry(n, o) {
  const u = Array.isArray(n), s = {
    type_: u ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: o ? o.scope_ : Hp(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: o,
    // The base state.
    base_: n,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let c = s, f = Ba;
  u && (c = [s], f = bo);
  const { revoke: h, proxy: m } = Proxy.revocable(c, f);
  return s.draft_ = m, s.revoke_ = h, m;
}
var Ba = {
  get(n, o) {
    if (o === pt)
      return n;
    const u = Jn(n);
    if (!Uo(u, o))
      return oy(n, u, o);
    const s = u[o];
    return n.finalized_ || !Yt(s) ? s : s === Zs(n.base_, o) ? (Js(n), n.copy_[o] = wa(s, n)) : s;
  },
  has(n, o) {
    return o in Jn(n);
  },
  ownKeys(n) {
    return Reflect.ownKeys(Jn(n));
  },
  set(n, o, u) {
    const s = Qp(Jn(n), o);
    if (s != null && s.set)
      return s.set.call(n.draft_, u), !0;
    if (!n.modified_) {
      const c = Zs(Jn(n), o), f = c == null ? void 0 : c[pt];
      if (f && f.base_ === u)
        return n.copy_[o] = u, n.assigned_[o] = !1, !0;
      if (Zg(u, c) && (u !== void 0 || Uo(n.base_, o)))
        return !0;
      Js(n), ya(n);
    }
    return n.copy_[o] === u && // special case: handle new props with value 'undefined'
    (u !== void 0 || o in n.copy_) || // special case: NaN
    Number.isNaN(u) && Number.isNaN(n.copy_[o]) || (n.copy_[o] = u, n.assigned_[o] = !0), !0;
  },
  deleteProperty(n, o) {
    return Zs(n.base_, o) !== void 0 || o in n.base_ ? (n.assigned_[o] = !1, Js(n), ya(n)) : delete n.assigned_[o], n.copy_ && delete n.copy_[o], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(n, o) {
    const u = Jn(n), s = Reflect.getOwnPropertyDescriptor(u, o);
    return s && {
      writable: !0,
      configurable: n.type_ !== 1 || o !== "length",
      enumerable: s.enumerable,
      value: u[o]
    };
  },
  defineProperty() {
    Ye(11);
  },
  getPrototypeOf(n) {
    return ir(n.base_);
  },
  setPrototypeOf() {
    Ye(12);
  }
}, bo = {};
$o(Ba, (n, o) => {
  bo[n] = function() {
    return arguments[0] = arguments[0][0], o.apply(this, arguments);
  };
});
bo.deleteProperty = function(n, o) {
  return bo.set.call(this, n, o, void 0);
};
bo.set = function(n, o, u) {
  return Ba.set.call(this, n[0], o, u, n[0]);
};
function Zs(n, o) {
  const u = n[pt];
  return (u ? Jn(u) : n)[o];
}
function oy(n, o, u) {
  var c;
  const s = Qp(o, u);
  return s ? "value" in s ? s.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (c = s.get) == null ? void 0 : c.call(n.draft_)
  ) : void 0;
}
function Qp(n, o) {
  if (!(o in n))
    return;
  let u = ir(n);
  for (; u; ) {
    const s = Object.getOwnPropertyDescriptor(u, o);
    if (s)
      return s;
    u = ir(u);
  }
}
function ya(n) {
  n.modified_ || (n.modified_ = !0, n.parent_ && ya(n.parent_));
}
function Js(n) {
  n.copy_ || (n.copy_ = ha(
    n.base_,
    n.scope_.immer_.useStrictShallowCopy_
  ));
}
var iy = class {
  constructor(n) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (o, u, s) => {
      if (typeof o == "function" && typeof u != "function") {
        const f = u;
        u = o;
        const h = this;
        return function(g = f, ...C) {
          return h.produce(g, (w) => u.call(this, w, ...C));
        };
      }
      typeof u != "function" && Ye(6), s !== void 0 && typeof s != "function" && Ye(7);
      let c;
      if (Yt(o)) {
        const f = Xd(this), h = wa(o, void 0);
        let m = !0;
        try {
          c = u(h), m = !1;
        } finally {
          m ? va(f) : ga(f);
        }
        return Yd(f, s), qd(c, f);
      } else if (!o || typeof o != "object") {
        if (c = u(o), c === void 0 && (c = o), c === ja && (c = void 0), this.autoFreeze_ && za(c, !0), s) {
          const f = [], h = [];
          lr("Patches").generateReplacementPatches_(o, c, f, h), s(f, h);
        }
        return c;
      } else
        Ye(1, o);
    }, this.produceWithPatches = (o, u) => {
      if (typeof o == "function")
        return (h, ...m) => this.produceWithPatches(h, (g) => o(g, ...m));
      let s, c;
      return [this.produce(o, u, (h, m) => {
        s = h, c = m;
      }), s, c];
    }, typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze), typeof (n == null ? void 0 : n.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(n.useStrictShallowCopy);
  }
  createDraft(n) {
    Yt(n) || Ye(8), dn(n) && (n = uy(n));
    const o = Xd(this), u = wa(n, void 0);
    return u[pt].isManual_ = !0, ga(o), u;
  }
  finishDraft(n, o) {
    const u = n && n[pt];
    (!u || !u.isManual_) && Ye(9);
    const { scope_: s } = u;
    return Yd(s, o), qd(void 0, s);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(n) {
    this.autoFreeze_ = n;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(n) {
    this.useStrictShallowCopy_ = n;
  }
  applyPatches(n, o) {
    let u;
    for (u = o.length - 1; u >= 0; u--) {
      const c = o[u];
      if (c.path.length === 0 && c.op === "replace") {
        n = c.value;
        break;
      }
    }
    u > -1 && (o = o.slice(u + 1));
    const s = lr("Patches").applyPatches_;
    return dn(n) ? s(n, o) : this.produce(
      n,
      (c) => s(c, o)
    );
  }
};
function wa(n, o) {
  const u = Go(n) ? lr("MapSet").proxyMap_(n, o) : Yo(n) ? lr("MapSet").proxySet_(n, o) : ry(n, o);
  return (o ? o.scope_ : Hp()).drafts_.push(u), u;
}
function uy(n) {
  return dn(n) || Ye(10, n), Kp(n);
}
function Kp(n) {
  if (!Yt(n) || Bu(n))
    return n;
  const o = n[pt];
  let u;
  if (o) {
    if (!o.modified_)
      return o.base_;
    o.finalized_ = !0, u = ha(n, o.scope_.immer_.useStrictShallowCopy_);
  } else
    u = ha(n, !0);
  return $o(u, (s, c) => {
    Vp(u, s, Kp(c));
  }), o && (o.finalized_ = !1), u;
}
function gS() {
  const o = "replace", s = "remove";
  function c(E, D, L, P) {
    switch (E.type_) {
      case 0:
      case 2:
        return h(
          E,
          D,
          L,
          P
        );
      case 1:
        return f(E, D, L, P);
      case 3:
        return m(
          E,
          D,
          L,
          P
        );
    }
  }
  function f(E, D, L, P) {
    let { base_: A, assigned_: I } = E, B = E.copy_;
    B.length < A.length && ([A, B] = [B, A], [L, P] = [P, L]);
    for (let F = 0; F < A.length; F++)
      if (I[F] && B[F] !== A[F]) {
        const M = D.concat([F]);
        L.push({
          op: o,
          path: M,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: x(B[F])
        }), P.push({
          op: o,
          path: M,
          value: x(A[F])
        });
      }
    for (let F = A.length; F < B.length; F++) {
      const M = D.concat([F]);
      L.push({
        op: "add",
        path: M,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: x(B[F])
      });
    }
    for (let F = B.length - 1; A.length <= F; --F) {
      const M = D.concat([F]);
      P.push({
        op: s,
        path: M
      });
    }
  }
  function h(E, D, L, P) {
    const { base_: A, copy_: I } = E;
    $o(E.assigned_, (B, F) => {
      const M = qs(A, B), W = qs(I, B), V = F ? Uo(A, B) ? o : "add" : s;
      if (M === W && V === o)
        return;
      const j = D.concat(B);
      L.push(V === s ? { op: V, path: j } : { op: V, path: j, value: W }), P.push(
        V === "add" ? { op: s, path: j } : V === s ? { op: "add", path: j, value: x(M) } : { op: o, path: j, value: x(M) }
      );
    });
  }
  function m(E, D, L, P) {
    let { base_: A, copy_: I } = E, B = 0;
    A.forEach((F) => {
      if (!I.has(F)) {
        const M = D.concat([B]);
        L.push({
          op: s,
          path: M,
          value: F
        }), P.unshift({
          op: "add",
          path: M,
          value: F
        });
      }
      B++;
    }), B = 0, I.forEach((F) => {
      if (!A.has(F)) {
        const M = D.concat([B]);
        L.push({
          op: "add",
          path: M,
          value: F
        }), P.unshift({
          op: s,
          path: M,
          value: F
        });
      }
      B++;
    });
  }
  function g(E, D, L, P) {
    L.push({
      op: o,
      path: [],
      value: D === ja ? void 0 : D
    }), P.push({
      op: o,
      path: [],
      value: E
    });
  }
  function C(E, D) {
    return D.forEach((L) => {
      const { path: P, op: A } = L;
      let I = E;
      for (let W = 0; W < P.length - 1; W++) {
        const V = ur(I);
        let j = P[W];
        typeof j != "string" && typeof j != "number" && (j = "" + j), (V === 0 || V === 1) && (j === "__proto__" || j === "constructor") && Ye(19), typeof I == "function" && j === "prototype" && Ye(19), I = qs(I, j), typeof I != "object" && Ye(18, P.join("/"));
      }
      const B = ur(I), F = w(L.value), M = P[P.length - 1];
      switch (A) {
        case o:
          switch (B) {
            case 2:
              return I.set(M, F);
            case 3:
              Ye(16);
            default:
              return I[M] = F;
          }
        case "add":
          switch (B) {
            case 1:
              return M === "-" ? I.push(F) : I.splice(M, 0, F);
            case 2:
              return I.set(M, F);
            case 3:
              return I.add(F);
            default:
              return I[M] = F;
          }
        case s:
          switch (B) {
            case 1:
              return I.splice(M, 1);
            case 2:
              return I.delete(M);
            case 3:
              return I.delete(L.value);
            default:
              return delete I[M];
          }
        default:
          Ye(17, A);
      }
    }), E;
  }
  function w(E) {
    if (!Yt(E))
      return E;
    if (Array.isArray(E))
      return E.map(w);
    if (Go(E))
      return new Map(
        Array.from(E.entries()).map(([L, P]) => [L, w(P)])
      );
    if (Yo(E))
      return new Set(Array.from(E).map(w));
    const D = Object.create(ir(E));
    for (const L in E)
      D[L] = w(E[L]);
    return Uo(E, zo) && (D[zo] = E[zo]), D;
  }
  function x(E) {
    return dn(E) ? w(E) : E;
  }
  ey("Patches", {
    applyPatches_: C,
    generatePatches_: c,
    generateReplacementPatches_: g
  });
}
var Et = new iy(), Gp = Et.produce, yS = Et.produceWithPatches.bind(
  Et
);
Et.setAutoFreeze.bind(Et);
Et.setUseStrictShallowCopy.bind(Et);
var wS = Et.applyPatches.bind(Et);
Et.createDraft.bind(Et);
Et.finishDraft.bind(Et);
function Yp(n) {
  return ({ dispatch: u, getState: s }) => (c) => (f) => typeof f == "function" ? f(u, s, n) : c(f);
}
var ly = Yp(), sy = Yp, ay = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ou : Ou.apply(null, arguments);
}, cy = (n) => n && typeof n.match == "function";
function fn(n, o) {
  function u(...s) {
    if (o) {
      let c = o(...s);
      if (!c)
        throw new Error(St(0));
      return {
        type: n,
        payload: c.payload,
        ..."meta" in c && {
          meta: c.meta
        },
        ..."error" in c && {
          error: c.error
        }
      };
    }
    return {
      type: n,
      payload: s[0]
    };
  }
  return u.toString = () => `${n}`, u.type = n, u.match = (s) => Wp(s) && s.type === n, u;
}
var Xp = class Mo extends Array {
  constructor(...o) {
    super(...o), Object.setPrototypeOf(this, Mo.prototype);
  }
  static get [Symbol.species]() {
    return Mo;
  }
  concat(...o) {
    return super.concat.apply(this, o);
  }
  prepend(...o) {
    return o.length === 1 && Array.isArray(o[0]) ? new Mo(...o[0].concat(this)) : new Mo(...o.concat(this));
  }
};
function Jd(n) {
  return Yt(n) ? Gp(n, () => {
  }) : n;
}
function du(n, o, u) {
  return n.has(o) ? n.get(o) : n.set(o, u(o)).get(o);
}
function fy(n) {
  return typeof n == "boolean";
}
var dy = () => function(o) {
  const {
    thunk: u = !0,
    immutableCheck: s = !0,
    serializableCheck: c = !0,
    actionCreatorCheck: f = !0
  } = o ?? {};
  let h = new Xp();
  return u && (fy(u) ? h.push(ly) : h.push(sy(u.extraArgument))), h;
}, qp = "RTK_autoBatch", SS = () => (n) => ({
  payload: n,
  meta: {
    [qp]: !0
  }
}), ep = (n) => (o) => {
  setTimeout(o, n);
}, py = (n = {
  type: "raf"
}) => (o) => (...u) => {
  const s = o(...u);
  let c = !0, f = !1, h = !1;
  const m = /* @__PURE__ */ new Set(), g = n.type === "tick" ? queueMicrotask : n.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : ep(10)
  ) : n.type === "callback" ? n.queueNotification : ep(n.timeout), C = () => {
    h = !1, f && (f = !1, m.forEach((w) => w()));
  };
  return Object.assign({}, s, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(w) {
      const x = () => c && w(), E = s.subscribe(x);
      return m.add(w), () => {
        E(), m.delete(w);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(w) {
      var x;
      try {
        return c = !((x = w == null ? void 0 : w.meta) != null && x[qp]), f = !c, f && (h || (h = !0, g(C))), s.dispatch(w);
      } finally {
        c = !0;
      }
    }
  });
}, hy = (n) => function(u) {
  const {
    autoBatch: s = !0
  } = u ?? {};
  let c = new Xp(n);
  return s && c.push(py(typeof s == "object" ? s : void 0)), c;
};
function ES(n) {
  const o = dy(), {
    reducer: u = void 0,
    middleware: s,
    devTools: c = !0,
    duplicateMiddlewareCheck: f = !0,
    preloadedState: h = void 0,
    enhancers: m = void 0
  } = n || {};
  let g;
  if (typeof u == "function")
    g = u;
  else if (Fa(u))
    g = Yg(u);
  else
    throw new Error(St(1));
  let C;
  typeof s == "function" ? C = s(o) : C = o();
  let w = Ou;
  c && (w = ay({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof c == "object" && c
  }));
  const x = Xg(...C), E = hy(x);
  let D = typeof m == "function" ? m(E) : E();
  const L = w(...D);
  return Up(g, h, L);
}
function Zp(n) {
  const o = {}, u = [];
  let s;
  const c = {
    addCase(f, h) {
      const m = typeof f == "string" ? f : f.type;
      if (!m)
        throw new Error(St(28));
      if (m in o)
        throw new Error(St(29));
      return o[m] = h, c;
    },
    addMatcher(f, h) {
      return u.push({
        matcher: f,
        reducer: h
      }), c;
    },
    addDefaultCase(f) {
      return s = f, c;
    }
  };
  return n(c), [o, u, s];
}
function my(n) {
  return typeof n == "function";
}
function vy(n, o) {
  let [u, s, c] = Zp(o), f;
  if (my(n))
    f = () => Jd(n());
  else {
    const m = Jd(n);
    f = () => m;
  }
  function h(m = f(), g) {
    let C = [u[g.type], ...s.filter(({
      matcher: w
    }) => w(g)).map(({
      reducer: w
    }) => w)];
    return C.filter((w) => !!w).length === 0 && (C = [c]), C.reduce((w, x) => {
      if (x)
        if (dn(w)) {
          const D = x(w, g);
          return D === void 0 ? w : D;
        } else {
          if (Yt(w))
            return Gp(w, (E) => x(E, g));
          {
            const E = x(w, g);
            if (E === void 0) {
              if (w === null)
                return w;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return E;
          }
        }
      return w;
    }, m);
  }
  return h.getInitialState = f, h;
}
var Jp = (n, o) => cy(n) ? n.match(o) : n(o);
function Xo(...n) {
  return (o) => n.some((u) => Jp(u, o));
}
function tp(...n) {
  return (o) => n.every((u) => Jp(u, o));
}
function $u(n, o) {
  if (!n || !n.meta) return !1;
  const u = typeof n.meta.requestId == "string", s = o.indexOf(n.meta.requestStatus) > -1;
  return u && s;
}
function qo(n) {
  return typeof n[0] == "function" && "pending" in n[0] && "fulfilled" in n[0] && "rejected" in n[0];
}
function gy(...n) {
  return n.length === 0 ? (o) => $u(o, ["pending"]) : qo(n) ? Xo(...n.map((o) => o.pending)) : gy()(n[0]);
}
function Sa(...n) {
  return n.length === 0 ? (o) => $u(o, ["rejected"]) : qo(n) ? Xo(...n.map((o) => o.rejected)) : Sa()(n[0]);
}
function yy(...n) {
  const o = (u) => u && u.meta && u.meta.rejectedWithValue;
  return n.length === 0 ? tp(Sa(...n), o) : qo(n) ? tp(Sa(...n), o) : yy()(n[0]);
}
function wy(...n) {
  return n.length === 0 ? (o) => $u(o, ["fulfilled"]) : qo(n) ? Xo(...n.map((o) => o.fulfilled)) : wy()(n[0]);
}
function Sy(...n) {
  return n.length === 0 ? (o) => $u(o, ["pending", "fulfilled", "rejected"]) : qo(n) ? Xo(...n.flatMap((o) => [o.pending, o.rejected, o.fulfilled])) : Sy()(n[0]);
}
var Ey = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", eh = (n = 21) => {
  let o = "", u = n;
  for (; u--; )
    o += Ey[Math.random() * 64 | 0];
  return o;
}, ky = ["name", "message", "stack", "code"], ea = class {
  constructor(n, o) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Lo(this, "_type");
    this.payload = n, this.meta = o;
  }
}, np = class {
  constructor(n, o) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Lo(this, "_type");
    this.payload = n, this.meta = o;
  }
}, xy = (n) => {
  if (typeof n == "object" && n !== null) {
    const o = {};
    for (const u of ky)
      typeof n[u] == "string" && (o[u] = n[u]);
    return o;
  }
  return {
    message: String(n)
  };
}, rp = "External signal was aborted", kS = /* @__PURE__ */ (() => {
  function n(o, u, s) {
    const c = fn(o + "/fulfilled", (g, C, w, x) => ({
      payload: g,
      meta: {
        ...x || {},
        arg: w,
        requestId: C,
        requestStatus: "fulfilled"
      }
    })), f = fn(o + "/pending", (g, C, w) => ({
      payload: void 0,
      meta: {
        ...w || {},
        arg: C,
        requestId: g,
        requestStatus: "pending"
      }
    })), h = fn(o + "/rejected", (g, C, w, x, E) => ({
      payload: x,
      error: (s && s.serializeError || xy)(g || "Rejected"),
      meta: {
        ...E || {},
        arg: w,
        requestId: C,
        rejectedWithValue: !!x,
        requestStatus: "rejected",
        aborted: (g == null ? void 0 : g.name) === "AbortError",
        condition: (g == null ? void 0 : g.name) === "ConditionError"
      }
    }));
    function m(g, {
      signal: C
    } = {}) {
      return (w, x, E) => {
        const D = s != null && s.idGenerator ? s.idGenerator(g) : eh(), L = new AbortController();
        let P, A;
        function I(F) {
          A = F, L.abort();
        }
        C && (C.aborted ? I(rp) : C.addEventListener("abort", () => I(rp), {
          once: !0
        }));
        const B = async function() {
          var W, V;
          let F;
          try {
            let j = (W = s == null ? void 0 : s.condition) == null ? void 0 : W.call(s, g, {
              getState: x,
              extra: E
            });
            if (_y(j) && (j = await j), j === !1 || L.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const ae = new Promise((le, me) => {
              P = () => {
                me({
                  name: "AbortError",
                  message: A || "Aborted"
                });
              }, L.signal.addEventListener("abort", P);
            });
            w(f(D, g, (V = s == null ? void 0 : s.getPendingMeta) == null ? void 0 : V.call(s, {
              requestId: D,
              arg: g
            }, {
              getState: x,
              extra: E
            }))), F = await Promise.race([ae, Promise.resolve(u(g, {
              dispatch: w,
              getState: x,
              extra: E,
              requestId: D,
              signal: L.signal,
              abort: I,
              rejectWithValue: (le, me) => new ea(le, me),
              fulfillWithValue: (le, me) => new np(le, me)
            })).then((le) => {
              if (le instanceof ea)
                throw le;
              return le instanceof np ? c(le.payload, D, g, le.meta) : c(le, D, g);
            })]);
          } catch (j) {
            F = j instanceof ea ? h(null, D, g, j.payload, j.meta) : h(j, D, g);
          } finally {
            P && L.signal.removeEventListener("abort", P);
          }
          return s && !s.dispatchConditionRejection && h.match(F) && F.meta.condition || w(F), F;
        }();
        return Object.assign(B, {
          abort: I,
          requestId: D,
          arg: g,
          unwrap() {
            return B.then(Cy);
          }
        });
      };
    }
    return Object.assign(m, {
      pending: f,
      rejected: h,
      fulfilled: c,
      settled: Xo(h, c),
      typePrefix: o
    });
  }
  return n.withTypes = () => n, n;
})();
function Cy(n) {
  if (n.meta && n.meta.rejectedWithValue)
    throw n.payload;
  if (n.error)
    throw n.error;
  return n.payload;
}
function _y(n) {
  return n !== null && typeof n == "object" && typeof n.then == "function";
}
var Py = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Ny(n, o) {
  return `${n}/${o}`;
}
function Ry({
  creators: n
} = {}) {
  var u;
  const o = (u = n == null ? void 0 : n.asyncThunk) == null ? void 0 : u[Py];
  return function(c) {
    const {
      name: f,
      reducerPath: h = f
    } = c;
    if (!f)
      throw new Error(St(11));
    const m = (typeof c.reducers == "function" ? c.reducers(Ty()) : c.reducers) || {}, g = Object.keys(m), C = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, w = {
      addCase(M, W) {
        const V = typeof M == "string" ? M : M.type;
        if (!V)
          throw new Error(St(12));
        if (V in C.sliceCaseReducersByType)
          throw new Error(St(13));
        return C.sliceCaseReducersByType[V] = W, w;
      },
      addMatcher(M, W) {
        return C.sliceMatchers.push({
          matcher: M,
          reducer: W
        }), w;
      },
      exposeAction(M, W) {
        return C.actionCreators[M] = W, w;
      },
      exposeCaseReducer(M, W) {
        return C.sliceCaseReducersByName[M] = W, w;
      }
    };
    g.forEach((M) => {
      const W = m[M], V = {
        reducerName: M,
        type: Ny(f, M),
        createNotation: typeof c.reducers == "function"
      };
      Ay(W) ? Iy(V, W, w, o) : Dy(V, W, w);
    });
    function x() {
      const [M = {}, W = [], V = void 0] = typeof c.extraReducers == "function" ? Zp(c.extraReducers) : [c.extraReducers], j = {
        ...M,
        ...C.sliceCaseReducersByType
      };
      return vy(c.initialState, (ae) => {
        for (let le in j)
          ae.addCase(le, j[le]);
        for (let le of C.sliceMatchers)
          ae.addMatcher(le.matcher, le.reducer);
        for (let le of W)
          ae.addMatcher(le.matcher, le.reducer);
        V && ae.addDefaultCase(V);
      });
    }
    const E = (M) => M, D = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new WeakMap();
    let P;
    function A(M, W) {
      return P || (P = x()), P(M, W);
    }
    function I() {
      return P || (P = x()), P.getInitialState();
    }
    function B(M, W = !1) {
      function V(ae) {
        let le = ae[M];
        return typeof le > "u" && W && (le = du(L, V, I)), le;
      }
      function j(ae = E) {
        const le = du(D, W, () => /* @__PURE__ */ new WeakMap());
        return du(le, ae, () => {
          const me = {};
          for (const [ht, Fe] of Object.entries(c.selectors ?? {}))
            me[ht] = Oy(Fe, ae, () => du(L, ae, I), W);
          return me;
        });
      }
      return {
        reducerPath: M,
        getSelectors: j,
        get selectors() {
          return j(V);
        },
        selectSlice: V
      };
    }
    const F = {
      name: f,
      reducer: A,
      actions: C.actionCreators,
      caseReducers: C.sliceCaseReducersByName,
      getInitialState: I,
      ...B(h),
      injectInto(M, {
        reducerPath: W,
        ...V
      } = {}) {
        const j = W ?? h;
        return M.inject({
          reducerPath: j,
          reducer: A
        }, V), {
          ...F,
          ...B(j, !0)
        };
      }
    };
    return F;
  };
}
function Oy(n, o, u, s) {
  function c(f, ...h) {
    let m = o(f);
    return typeof m > "u" && s && (m = u()), n(m, ...h);
  }
  return c.unwrapped = n, c;
}
var $a = /* @__PURE__ */ Ry();
function Ty() {
  function n(o, u) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: o,
      ...u
    };
  }
  return n.withTypes = () => n, {
    reducer(o) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [o.name](...u) {
          return o(...u);
        }
      }[o.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(o, u) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: o,
        reducer: u
      };
    },
    asyncThunk: n
  };
}
function Dy({
  type: n,
  reducerName: o,
  createNotation: u
}, s, c) {
  let f, h;
  if ("reducer" in s) {
    if (u && !Ly(s))
      throw new Error(St(17));
    f = s.reducer, h = s.prepare;
  } else
    f = s;
  c.addCase(n, f).exposeCaseReducer(o, f).exposeAction(o, h ? fn(n, h) : fn(n));
}
function Ay(n) {
  return n._reducerDefinitionType === "asyncThunk";
}
function Ly(n) {
  return n._reducerDefinitionType === "reducerWithPrepare";
}
function Iy({
  type: n,
  reducerName: o
}, u, s, c) {
  if (!c)
    throw new Error(St(18));
  const {
    payloadCreator: f,
    fulfilled: h,
    pending: m,
    rejected: g,
    settled: C,
    options: w
  } = u, x = c(n, f, w);
  s.exposeAction(o, x), h && s.addCase(x.fulfilled, h), m && s.addCase(x.pending, m), g && s.addCase(x.rejected, g), C && s.addMatcher(x.settled, C), s.exposeCaseReducer(o, {
    fulfilled: h || pu,
    pending: m || pu,
    rejected: g || pu,
    settled: C || pu
  });
}
function pu() {
}
var My = "task", th = "listener", nh = "completed", Ua = "cancelled", Fy = `task-${Ua}`, jy = `task-${nh}`, Ea = `${th}-${Ua}`, zy = `${th}-${nh}`, Uu = class {
  constructor(n) {
    Lo(this, "name", "TaskAbortError");
    Lo(this, "message");
    this.code = n, this.message = `${My} ${Ua} (reason: ${n})`;
  }
}, Wa = (n, o) => {
  if (typeof n != "function")
    throw new TypeError(St(32));
}, Au = () => {
}, rh = (n, o = Au) => (n.catch(o), n), oh = (n, o) => (n.addEventListener("abort", o, {
  once: !0
}), () => n.removeEventListener("abort", o)), tr = (n, o) => {
  const u = n.signal;
  u.aborted || ("reason" in u || Object.defineProperty(u, "reason", {
    enumerable: !0,
    value: o,
    configurable: !0,
    writable: !0
  }), n.abort(o));
}, nr = (n) => {
  if (n.aborted) {
    const {
      reason: o
    } = n;
    throw new Uu(o);
  }
};
function ih(n, o) {
  let u = Au;
  return new Promise((s, c) => {
    const f = () => c(new Uu(n.reason));
    if (n.aborted) {
      f();
      return;
    }
    u = oh(n, f), o.finally(() => u()).then(s, c);
  }).finally(() => {
    u = Au;
  });
}
var By = async (n, o) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await n()
    };
  } catch (u) {
    return {
      status: u instanceof Uu ? "cancelled" : "rejected",
      error: u
    };
  } finally {
    o == null || o();
  }
}, Lu = (n) => (o) => rh(ih(n, o).then((u) => (nr(n), u))), uh = (n) => {
  const o = Lu(n);
  return (u) => o(new Promise((s) => setTimeout(s, u)));
}, {
  assign: $r
} = Object, op = {}, Wu = "listenerMiddleware", $y = (n, o) => {
  const u = (s) => oh(n, () => tr(s, n.reason));
  return (s, c) => {
    Wa(s);
    const f = new AbortController();
    u(f);
    const h = By(async () => {
      nr(n), nr(f.signal);
      const m = await s({
        pause: Lu(f.signal),
        delay: uh(f.signal),
        signal: f.signal
      });
      return nr(f.signal), m;
    }, () => tr(f, jy));
    return c != null && c.autoJoin && o.push(h.catch(Au)), {
      result: Lu(n)(h),
      cancel() {
        tr(f, Fy);
      }
    };
  };
}, Uy = (n, o) => {
  const u = async (s, c) => {
    nr(o);
    let f = () => {
    };
    const m = [new Promise((g, C) => {
      let w = n({
        predicate: s,
        effect: (x, E) => {
          E.unsubscribe(), g([x, E.getState(), E.getOriginalState()]);
        }
      });
      f = () => {
        w(), C();
      };
    })];
    c != null && m.push(new Promise((g) => setTimeout(g, c, null)));
    try {
      const g = await ih(o, Promise.race(m));
      return nr(o), g;
    } finally {
      f();
    }
  };
  return (s, c) => rh(u(s, c));
}, lh = (n) => {
  let {
    type: o,
    actionCreator: u,
    matcher: s,
    predicate: c,
    effect: f
  } = n;
  if (o)
    c = fn(o).match;
  else if (u)
    o = u.type, c = u.match;
  else if (s)
    c = s;
  else if (!c) throw new Error(St(21));
  return Wa(f), {
    predicate: c,
    type: o,
    effect: f
  };
}, sh = /* @__PURE__ */ $r((n) => {
  const {
    type: o,
    predicate: u,
    effect: s
  } = lh(n);
  return {
    id: eh(),
    effect: s,
    type: o,
    predicate: u,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(St(22));
    }
  };
}, {
  withTypes: () => sh
}), ip = (n, o) => {
  const {
    type: u,
    effect: s,
    predicate: c
  } = lh(o);
  return Array.from(n.values()).find((f) => (typeof u == "string" ? f.type === u : f.predicate === c) && f.effect === s);
}, ka = (n) => {
  n.pending.forEach((o) => {
    tr(o, Ea);
  });
}, Wy = (n) => () => {
  n.forEach(ka), n.clear();
}, up = (n, o, u) => {
  try {
    n(o, u);
  } catch (s) {
    setTimeout(() => {
      throw s;
    }, 0);
  }
}, ah = /* @__PURE__ */ $r(/* @__PURE__ */ fn(`${Wu}/add`), {
  withTypes: () => ah
}), by = /* @__PURE__ */ fn(`${Wu}/removeAll`), ch = /* @__PURE__ */ $r(/* @__PURE__ */ fn(`${Wu}/remove`), {
  withTypes: () => ch
}), Vy = (...n) => {
  console.error(`${Wu}/error`, ...n);
}, xS = (n = {}) => {
  const o = /* @__PURE__ */ new Map(), {
    extra: u,
    onError: s = Vy
  } = n;
  Wa(s);
  const c = (w) => (w.unsubscribe = () => o.delete(w.id), o.set(w.id, w), (x) => {
    w.unsubscribe(), x != null && x.cancelActive && ka(w);
  }), f = (w) => {
    const x = ip(o, w) ?? sh(w);
    return c(x);
  };
  $r(f, {
    withTypes: () => f
  });
  const h = (w) => {
    const x = ip(o, w);
    return x && (x.unsubscribe(), w.cancelActive && ka(x)), !!x;
  };
  $r(h, {
    withTypes: () => h
  });
  const m = async (w, x, E, D) => {
    const L = new AbortController(), P = Uy(f, L.signal), A = [];
    try {
      w.pending.add(L), await Promise.resolve(w.effect(
        x,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        $r({}, E, {
          getOriginalState: D,
          condition: (I, B) => P(I, B).then(Boolean),
          take: P,
          delay: uh(L.signal),
          pause: Lu(L.signal),
          extra: u,
          signal: L.signal,
          fork: $y(L.signal, A),
          unsubscribe: w.unsubscribe,
          subscribe: () => {
            o.set(w.id, w);
          },
          cancelActiveListeners: () => {
            w.pending.forEach((I, B, F) => {
              I !== L && (tr(I, Ea), F.delete(I));
            });
          },
          cancel: () => {
            tr(L, Ea), w.pending.delete(L);
          },
          throwIfCancelled: () => {
            nr(L.signal);
          }
        })
      ));
    } catch (I) {
      I instanceof Uu || up(s, I, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(A), tr(L, zy), w.pending.delete(L);
    }
  }, g = Wy(o);
  return {
    middleware: (w) => (x) => (E) => {
      if (!Wp(E))
        return x(E);
      if (ah.match(E))
        return f(E.payload);
      if (by.match(E)) {
        g();
        return;
      }
      if (ch.match(E))
        return h(E.payload);
      let D = w.getState();
      const L = () => {
        if (D === op)
          throw new Error(St(23));
        return D;
      };
      let P;
      try {
        if (P = x(E), o.size > 0) {
          const A = w.getState(), I = Array.from(o.values());
          for (const B of I) {
            let F = !1;
            try {
              F = B.predicate(E, A, D);
            } catch (M) {
              F = !1, up(s, M, {
                raisedBy: "predicate"
              });
            }
            F && m(B, E, w, L);
          }
        }
      } finally {
        D = op;
      }
      return P;
    },
    startListening: f,
    stopListening: h,
    clearListeners: g
  };
};
function St(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var Fo = { exports: {} }, Hy = Fo.exports, lp;
function Qy() {
  return lp || (lp = 1, function(n, o) {
    (function(u, s) {
      s(o);
    })(Hy, function(u) {
      function s(p, y) {
        p.super_ = y, p.prototype = Object.create(y.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } });
      }
      function c(p, y) {
        Object.defineProperty(this, "kind", { value: p, enumerable: !0 }), y && y.length && Object.defineProperty(this, "path", { value: y, enumerable: !0 });
      }
      function f(p, y, _) {
        f.super_.call(this, "E", p), Object.defineProperty(this, "lhs", { value: y, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: _, enumerable: !0 });
      }
      function h(p, y) {
        h.super_.call(this, "N", p), Object.defineProperty(this, "rhs", { value: y, enumerable: !0 });
      }
      function m(p, y) {
        m.super_.call(this, "D", p), Object.defineProperty(this, "lhs", { value: y, enumerable: !0 });
      }
      function g(p, y, _) {
        g.super_.call(this, "A", p), Object.defineProperty(this, "index", { value: y, enumerable: !0 }), Object.defineProperty(this, "item", { value: _, enumerable: !0 });
      }
      function C(p, y, _) {
        var z = p.slice(y + 1 || p.length);
        return p.length = y < 0 ? p.length + y : y, p.push.apply(p, z), p;
      }
      function w(p) {
        var y = typeof p > "u" ? "undefined" : je(p);
        return y !== "object" ? y : p === Math ? "math" : p === null ? "null" : Array.isArray(p) ? "array" : Object.prototype.toString.call(p) === "[object Date]" ? "date" : typeof p.toString == "function" && /^\/.*\//.test(p.toString()) ? "regexp" : "object";
      }
      function x(p, y, _, z, Q, G, Z) {
        Q = Q || [], Z = Z || [];
        var X = Q.slice(0);
        if (typeof G < "u") {
          if (z) {
            if (typeof z == "function" && z(X, G)) return;
            if ((typeof z > "u" ? "undefined" : je(z)) === "object") {
              if (z.prefilter && z.prefilter(X, G)) return;
              if (z.normalize) {
                var ce = z.normalize(X, G, p, y);
                ce && (p = ce[0], y = ce[1]);
              }
            }
          }
          X.push(G);
        }
        w(p) === "regexp" && w(y) === "regexp" && (p = p.toString(), y = y.toString());
        var we = typeof p > "u" ? "undefined" : je(p), Re = typeof y > "u" ? "undefined" : je(y), Ee = we !== "undefined" || Z && Z[Z.length - 1].lhs && Z[Z.length - 1].lhs.hasOwnProperty(G), Ze = Re !== "undefined" || Z && Z[Z.length - 1].rhs && Z[Z.length - 1].rhs.hasOwnProperty(G);
        if (!Ee && Ze) _(new h(X, y));
        else if (!Ze && Ee) _(new m(X, p));
        else if (w(p) !== w(y)) _(new f(X, p, y));
        else if (w(p) === "date" && p - y !== 0) _(new f(X, p, y));
        else if (we === "object" && p !== null && y !== null) if (Z.filter(function(xe) {
          return xe.lhs === p;
        }).length) p !== y && _(new f(X, p, y));
        else {
          if (Z.push({ lhs: p, rhs: y }), Array.isArray(p)) {
            var ge;
            for (p.length, ge = 0; ge < p.length; ge++) ge >= y.length ? _(new g(X, ge, new m(void 0, p[ge]))) : x(p[ge], y[ge], _, z, X, ge, Z);
            for (; ge < y.length; ) _(new g(X, ge, new h(void 0, y[ge++])));
          } else {
            var $t = Object.keys(p), kt = Object.keys(y);
            $t.forEach(function(xe, Xt) {
              var qt = kt.indexOf(xe);
              qt >= 0 ? (x(p[xe], y[xe], _, z, X, xe, Z), kt = C(kt, qt)) : x(p[xe], void 0, _, z, X, xe, Z);
            }), kt.forEach(function(xe) {
              x(void 0, y[xe], _, z, X, xe, Z);
            });
          }
          Z.length = Z.length - 1;
        }
        else p !== y && (we === "number" && isNaN(p) && isNaN(y) || _(new f(X, p, y)));
      }
      function E(p, y, _, z) {
        return z = z || [], x(p, y, function(Q) {
          Q && z.push(Q);
        }, _), z.length ? z : void 0;
      }
      function D(p, y, _) {
        if (_.path && _.path.length) {
          var z, Q = p[y], G = _.path.length - 1;
          for (z = 0; z < G; z++) Q = Q[_.path[z]];
          switch (_.kind) {
            case "A":
              D(Q[_.path[z]], _.index, _.item);
              break;
            case "D":
              delete Q[_.path[z]];
              break;
            case "E":
            case "N":
              Q[_.path[z]] = _.rhs;
          }
        } else switch (_.kind) {
          case "A":
            D(p[y], _.index, _.item);
            break;
          case "D":
            p = C(p, y);
            break;
          case "E":
          case "N":
            p[y] = _.rhs;
        }
        return p;
      }
      function L(p, y, _) {
        if (p && y && _ && _.kind) {
          for (var z = p, Q = -1, G = _.path ? _.path.length - 1 : 0; ++Q < G; ) typeof z[_.path[Q]] > "u" && (z[_.path[Q]] = typeof _.path[Q] == "number" ? [] : {}), z = z[_.path[Q]];
          switch (_.kind) {
            case "A":
              D(_.path ? z[_.path[Q]] : z, _.index, _.item);
              break;
            case "D":
              delete z[_.path[Q]];
              break;
            case "E":
            case "N":
              z[_.path[Q]] = _.rhs;
          }
        }
      }
      function P(p, y, _) {
        if (_.path && _.path.length) {
          var z, Q = p[y], G = _.path.length - 1;
          for (z = 0; z < G; z++) Q = Q[_.path[z]];
          switch (_.kind) {
            case "A":
              P(Q[_.path[z]], _.index, _.item);
              break;
            case "D":
              Q[_.path[z]] = _.lhs;
              break;
            case "E":
              Q[_.path[z]] = _.lhs;
              break;
            case "N":
              delete Q[_.path[z]];
          }
        } else switch (_.kind) {
          case "A":
            P(p[y], _.index, _.item);
            break;
          case "D":
            p[y] = _.lhs;
            break;
          case "E":
            p[y] = _.lhs;
            break;
          case "N":
            p = C(p, y);
        }
        return p;
      }
      function A(p, y, _) {
        if (p && y && _ && _.kind) {
          var z, Q, G = p;
          for (Q = _.path.length - 1, z = 0; z < Q; z++) typeof G[_.path[z]] > "u" && (G[_.path[z]] = {}), G = G[_.path[z]];
          switch (_.kind) {
            case "A":
              P(G[_.path[z]], _.index, _.item);
              break;
            case "D":
              G[_.path[z]] = _.lhs;
              break;
            case "E":
              G[_.path[z]] = _.lhs;
              break;
            case "N":
              delete G[_.path[z]];
          }
        }
      }
      function I(p, y, _) {
        if (p && y) {
          var z = function(Q) {
            _ && !_(p, y, Q) || L(p, y, Q);
          };
          x(p, y, z);
        }
      }
      function B(p) {
        return "color: " + K[p].color + "; font-weight: bold";
      }
      function F(p) {
        var y = p.kind, _ = p.path, z = p.lhs, Q = p.rhs, G = p.index, Z = p.item;
        switch (y) {
          case "E":
            return [_.join("."), z, "→", Q];
          case "N":
            return [_.join("."), Q];
          case "D":
            return [_.join(".")];
          case "A":
            return [_.join(".") + "[" + G + "]", Z];
          default:
            return [];
        }
      }
      function M(p, y, _, z) {
        var Q = E(p, y);
        try {
          z ? _.groupCollapsed("diff") : _.group("diff");
        } catch {
          _.log("diff");
        }
        Q ? Q.forEach(function(G) {
          var Z = G.kind, X = F(G);
          _.log.apply(_, ["%c " + K[Z].text, B(Z)].concat(ze(X)));
        }) : _.log("—— no diff ——");
        try {
          _.groupEnd();
        } catch {
          _.log("—— diff end —— ");
        }
      }
      function W(p, y, _, z) {
        switch (typeof p > "u" ? "undefined" : je(p)) {
          case "object":
            return typeof p[z] == "function" ? p[z].apply(p, ze(_)) : p[z];
          case "function":
            return p(y);
          default:
            return p;
        }
      }
      function V(p) {
        var y = p.timestamp, _ = p.duration;
        return function(z, Q, G) {
          var Z = ["action"];
          return Z.push("%c" + String(z.type)), y && Z.push("%c@ " + Q), _ && Z.push("%c(in " + G.toFixed(2) + " ms)"), Z.join(" ");
        };
      }
      function j(p, y) {
        var _ = y.logger, z = y.actionTransformer, Q = y.titleFormatter, G = Q === void 0 ? V(y) : Q, Z = y.collapsed, X = y.colors, ce = y.level, we = y.diff, Re = typeof y.titleFormatter > "u";
        p.forEach(function(Ee, Ze) {
          var ge = Ee.started, $t = Ee.startedTime, kt = Ee.action, xe = Ee.prevState, Xt = Ee.error, qt = Ee.took, mt = Ee.nextState, Ut = p[Ze + 1];
          Ut && (mt = Ut.prevState, qt = Ut.started - ge);
          var it = z(kt), Gr = typeof Z == "function" ? Z(function() {
            return mt;
          }, kt, Ee) : Z, Jo = He($t), ei = X.title ? "color: " + X.title(it) + ";" : "", hn = ["color: gray; font-weight: lighter;"];
          hn.push(ei), y.timestamp && hn.push("color: gray; font-weight: lighter;"), y.duration && hn.push("color: gray; font-weight: lighter;");
          var Zt = G(it, Jo, qt);
          try {
            Gr ? X.title && Re ? _.groupCollapsed.apply(_, ["%c " + Zt].concat(hn)) : _.groupCollapsed(Zt) : X.title && Re ? _.group.apply(_, ["%c " + Zt].concat(hn)) : _.group(Zt);
          } catch {
            _.log(Zt);
          }
          var mn = W(ce, it, [xe], "prevState"), cr = W(ce, it, [it], "action"), Jt = W(ce, it, [Xt, xe], "error"), en = W(ce, it, [mt], "nextState");
          if (mn) if (X.prevState) {
            var Zu = "color: " + X.prevState(xe) + "; font-weight: bold";
            _[mn]("%c prev state", Zu, xe);
          } else _[mn]("prev state", xe);
          if (cr) if (X.action) {
            var ti = "color: " + X.action(it) + "; font-weight: bold";
            _[cr]("%c action    ", ti, it);
          } else _[cr]("action    ", it);
          if (Xt && Jt) if (X.error) {
            var ni = "color: " + X.error(Xt, xe) + "; font-weight: bold;";
            _[Jt]("%c error     ", ni, Xt);
          } else _[Jt]("error     ", Xt);
          if (en) if (X.nextState) {
            var Ju = "color: " + X.nextState(mt) + "; font-weight: bold";
            _[en]("%c next state", Ju, mt);
          } else _[en]("next state", mt);
          we && M(xe, mt, _, Gr);
          try {
            _.groupEnd();
          } catch {
            _.log("—— log end ——");
          }
        });
      }
      function ae() {
        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = Object.assign({}, ne, p), _ = y.logger, z = y.stateTransformer, Q = y.errorTransformer, G = y.predicate, Z = y.logErrors, X = y.diffPredicate;
        if (typeof _ > "u") return function() {
          return function(we) {
            return function(Re) {
              return we(Re);
            };
          };
        };
        if (p.getState && p.dispatch) return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
          return function(we) {
            return function(Re) {
              return we(Re);
            };
          };
        };
        var ce = [];
        return function(we) {
          var Re = we.getState;
          return function(Ee) {
            return function(Ze) {
              if (typeof G == "function" && !G(Re, Ze)) return Ee(Ze);
              var ge = {};
              ce.push(ge), ge.started = qe.now(), ge.startedTime = /* @__PURE__ */ new Date(), ge.prevState = z(Re()), ge.action = Ze;
              var $t = void 0;
              if (Z) try {
                $t = Ee(Ze);
              } catch (xe) {
                ge.error = Q(xe);
              }
              else $t = Ee(Ze);
              ge.took = qe.now() - ge.started, ge.nextState = z(Re());
              var kt = y.diff && typeof X == "function" ? X(Re, Ze) : y.diff;
              if (j(ce, Object.assign({}, y, { diff: kt })), ce.length = 0, ge.error) throw ge.error;
              return $t;
            };
          };
        };
      }
      var le, me, ht = function(p, y) {
        return new Array(y + 1).join(p);
      }, Fe = function(p, y) {
        return ht("0", y - p.toString().length) + p;
      }, He = function(p) {
        return Fe(p.getHours(), 2) + ":" + Fe(p.getMinutes(), 2) + ":" + Fe(p.getSeconds(), 2) + "." + Fe(p.getMilliseconds(), 3);
      }, qe = typeof performance < "u" && performance !== null && typeof performance.now == "function" ? performance : Date, je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
        return typeof p;
      } : function(p) {
        return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
      }, ze = function(p) {
        if (Array.isArray(p)) {
          for (var y = 0, _ = Array(p.length); y < p.length; y++) _[y] = p[y];
          return _;
        }
        return Array.from(p);
      }, ve = [];
      le = (typeof cu > "u" ? "undefined" : je(cu)) === "object" && cu ? cu : typeof window < "u" ? window : {}, me = le.DeepDiff, me && ve.push(function() {
        typeof me < "u" && le.DeepDiff === E && (le.DeepDiff = me, me = void 0);
      }), s(f, c), s(h, c), s(m, c), s(g, c), Object.defineProperties(E, { diff: { value: E, enumerable: !0 }, observableDiff: { value: x, enumerable: !0 }, applyDiff: { value: I, enumerable: !0 }, applyChange: { value: L, enumerable: !0 }, revertChange: { value: A, enumerable: !0 }, isConflict: { value: function() {
        return typeof me < "u";
      }, enumerable: !0 }, noConflict: { value: function() {
        return ve && (ve.forEach(function(p) {
          p();
        }), ve = null), E;
      }, enumerable: !0 } });
      var K = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } }, ne = { level: "log", logger: console, logErrors: !0, collapsed: void 0, predicate: void 0, duration: !1, timestamp: !0, stateTransformer: function(p) {
        return p;
      }, actionTransformer: function(p) {
        return p;
      }, errorTransformer: function(p) {
        return p;
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
      } }, diff: !1, diffPredicate: void 0, transformer: void 0 }, Y = function() {
        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = p.dispatch, _ = p.getState;
        return typeof y == "function" || typeof _ == "function" ? ae()({ dispatch: y, getState: _ }) : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
      };
      u.defaults = ne, u.createLogger = ae, u.logger = Y, u.default = Y, Object.defineProperty(u, "__esModule", { value: !0 });
    });
  }(Fo, Fo.exports)), Fo.exports;
}
var Ky = Qy();
const CS = /* @__PURE__ */ La(Ky), Gy = {
  theme: void 0,
  kind: void 0
}, fh = $a({
  name: "theme",
  initialState: Gy,
  reducers: {
    changeTheme: (n, o) => {
      n.kind = o.payload.kind, n.theme = { ...n.theme, ...o.payload.theme ?? {} }, n.kind === "light" ? (n.theme.computedOne = "rgba(0, 0, 0, 0.05)", n.theme.computedTwo = "rgba(0, 0, 0, 0.1)") : n.kind === "dark" ? (n.theme.computedOne = "rgba(255, 255, 255, 0.05)", n.theme.computedTwo = "rgba(255, 255, 255, 0.1)") : (n.theme.computedOne = "transparent", n.theme.computedTwo = "transparent");
    }
  }
}), Yy = Ma, { changeTheme: _S } = fh.actions, PS = fh.reducer, Xy = {
  current: ["starting"],
  history: []
}, dh = $a({
  name: "router",
  initialState: Xy,
  reducers: {
    goTo: (n, o) => {
      n.history.push(n.current), n.current = o.payload;
    },
    openLink: (n, o) => {
    },
    goBack: (n) => {
      n.history.length > 0 && (n.current = n.history.pop());
    }
  }
}), { goTo: qy, goBack: NS, openLink: Zy } = dh.actions, Jy = $p, ph = Ma, RS = dh.reducer;
var dt = function() {
  return dt = Object.assign || function(o) {
    for (var u, s = 1, c = arguments.length; s < c; s++) {
      u = arguments[s];
      for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (o[f] = u[f]);
    }
    return o;
  }, dt.apply(this, arguments);
};
function Vo(n, o, u) {
  if (u || arguments.length === 2) for (var s = 0, c = o.length, f; s < c; s++)
    (f || !(s in o)) && (f || (f = Array.prototype.slice.call(o, 0, s)), f[s] = o[s]);
  return n.concat(f || Array.prototype.slice.call(o));
}
var Pe = "-ms-", Bo = "-moz-", ye = "-webkit-", hh = "comm", bu = "rule", ba = "decl", e0 = "@import", mh = "@keyframes", t0 = "@layer", vh = Math.abs, Va = String.fromCharCode, xa = Object.assign;
function n0(n, o) {
  return Ve(n, 0) ^ 45 ? (((o << 2 ^ Ve(n, 0)) << 2 ^ Ve(n, 1)) << 2 ^ Ve(n, 2)) << 2 ^ Ve(n, 3) : 0;
}
function gh(n) {
  return n.trim();
}
function cn(n, o) {
  return (n = o.exec(n)) ? n[0] : n;
}
function fe(n, o, u) {
  return n.replace(o, u);
}
function Eu(n, o, u) {
  return n.indexOf(o, u);
}
function Ve(n, o) {
  return n.charCodeAt(o) | 0;
}
function Wr(n, o, u) {
  return n.slice(o, u);
}
function Kt(n) {
  return n.length;
}
function yh(n) {
  return n.length;
}
function jo(n, o) {
  return o.push(n), n;
}
function r0(n, o) {
  return n.map(o).join("");
}
function sp(n, o) {
  return n.filter(function(u) {
    return !cn(u, o);
  });
}
var Vu = 1, br = 1, wh = 0, Ot = 0, Me = 0, Kr = "";
function Hu(n, o, u, s, c, f, h, m) {
  return { value: n, root: o, parent: u, type: s, props: c, children: f, line: Vu, column: br, length: h, return: "", siblings: m };
}
function Mn(n, o) {
  return xa(Hu("", null, null, "", null, null, 0, n.siblings), n, { length: -n.length }, o);
}
function Mr(n) {
  for (; n.root; )
    n = Mn(n.root, { children: [n] });
  jo(n, n.siblings);
}
function o0() {
  return Me;
}
function i0() {
  return Me = Ot > 0 ? Ve(Kr, --Ot) : 0, br--, Me === 10 && (br = 1, Vu--), Me;
}
function jt() {
  return Me = Ot < wh ? Ve(Kr, Ot++) : 0, br++, Me === 10 && (br = 1, Vu++), Me;
}
function rr() {
  return Ve(Kr, Ot);
}
function ku() {
  return Ot;
}
function Qu(n, o) {
  return Wr(Kr, n, o);
}
function Ca(n) {
  switch (n) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function u0(n) {
  return Vu = br = 1, wh = Kt(Kr = n), Ot = 0, [];
}
function l0(n) {
  return Kr = "", n;
}
function ta(n) {
  return gh(Qu(Ot - 1, _a(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function s0(n) {
  for (; (Me = rr()) && Me < 33; )
    jt();
  return Ca(n) > 2 || Ca(Me) > 3 ? "" : " ";
}
function a0(n, o) {
  for (; --o && jt() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); )
    ;
  return Qu(n, ku() + (o < 6 && rr() == 32 && jt() == 32));
}
function _a(n) {
  for (; jt(); )
    switch (Me) {
      // ] ) " '
      case n:
        return Ot;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && _a(Me);
        break;
      // (
      case 40:
        n === 41 && _a(n);
        break;
      // \
      case 92:
        jt();
        break;
    }
  return Ot;
}
function c0(n, o) {
  for (; jt() && n + Me !== 57; )
    if (n + Me === 84 && rr() === 47)
      break;
  return "/*" + Qu(o, Ot - 1) + "*" + Va(n === 47 ? n : jt());
}
function f0(n) {
  for (; !Ca(rr()); )
    jt();
  return Qu(n, Ot);
}
function d0(n) {
  return l0(xu("", null, null, null, [""], n = u0(n), 0, [0], n));
}
function xu(n, o, u, s, c, f, h, m, g) {
  for (var C = 0, w = 0, x = h, E = 0, D = 0, L = 0, P = 1, A = 1, I = 1, B = 0, F = "", M = c, W = f, V = s, j = F; A; )
    switch (L = B, B = jt()) {
      // (
      case 40:
        if (L != 108 && Ve(j, x - 1) == 58) {
          Eu(j += fe(ta(B), "&", "&\f"), "&\f", vh(C ? m[C - 1] : 0)) != -1 && (I = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        j += ta(B);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        j += s0(L);
        break;
      // \
      case 92:
        j += a0(ku() - 1, 7);
        continue;
      // /
      case 47:
        switch (rr()) {
          case 42:
          case 47:
            jo(p0(c0(jt(), ku()), o, u, g), g);
            break;
          default:
            j += "/";
        }
        break;
      // {
      case 123 * P:
        m[C++] = Kt(j) * I;
      // } ; \0
      case 125 * P:
      case 59:
      case 0:
        switch (B) {
          // \0 }
          case 0:
          case 125:
            A = 0;
          // ;
          case 59 + w:
            I == -1 && (j = fe(j, /\f/g, "")), D > 0 && Kt(j) - x && jo(D > 32 ? cp(j + ";", s, u, x - 1, g) : cp(fe(j, " ", "") + ";", s, u, x - 2, g), g);
            break;
          // @ ;
          case 59:
            j += ";";
          // { rule/at-rule
          default:
            if (jo(V = ap(j, o, u, C, w, c, m, F, M = [], W = [], x, f), f), B === 123)
              if (w === 0)
                xu(j, o, V, V, M, f, x, m, W);
              else
                switch (E === 99 && Ve(j, 3) === 110 ? 100 : E) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    xu(n, V, V, s && jo(ap(n, V, V, 0, 0, c, m, F, c, M = [], x, W), W), c, W, x, m, s ? M : W);
                    break;
                  default:
                    xu(j, V, V, V, [""], W, 0, m, W);
                }
        }
        C = w = D = 0, P = I = 1, F = j = "", x = h;
        break;
      // :
      case 58:
        x = 1 + Kt(j), D = L;
      default:
        if (P < 1) {
          if (B == 123)
            --P;
          else if (B == 125 && P++ == 0 && i0() == 125)
            continue;
        }
        switch (j += Va(B), B * P) {
          // &
          case 38:
            I = w > 0 ? 1 : (j += "\f", -1);
            break;
          // ,
          case 44:
            m[C++] = (Kt(j) - 1) * I, I = 1;
            break;
          // @
          case 64:
            rr() === 45 && (j += ta(jt())), E = rr(), w = x = Kt(F = j += f0(ku())), B++;
            break;
          // -
          case 45:
            L === 45 && Kt(j) == 2 && (P = 0);
        }
    }
  return f;
}
function ap(n, o, u, s, c, f, h, m, g, C, w, x) {
  for (var E = c - 1, D = c === 0 ? f : [""], L = yh(D), P = 0, A = 0, I = 0; P < s; ++P)
    for (var B = 0, F = Wr(n, E + 1, E = vh(A = h[P])), M = n; B < L; ++B)
      (M = gh(A > 0 ? D[B] + " " + F : fe(F, /&\f/g, D[B]))) && (g[I++] = M);
  return Hu(n, o, u, c === 0 ? bu : m, g, C, w, x);
}
function p0(n, o, u, s) {
  return Hu(n, o, u, hh, Va(o0()), Wr(n, 2, -2), 0, s);
}
function cp(n, o, u, s, c) {
  return Hu(n, o, u, ba, Wr(n, 0, s), Wr(n, s + 1, -1), s, c);
}
function Sh(n, o, u) {
  switch (n0(n, o)) {
    // color-adjust
    case 5103:
      return ye + "print-" + n + n;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ye + n + n;
    // tab-size
    case 4789:
      return Bo + n + n;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ye + n + Bo + n + Pe + n + n;
    // writing-mode
    case 5936:
      switch (Ve(n, o + 11)) {
        // vertical-l(r)
        case 114:
          return ye + n + Pe + fe(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        // vertical-r(l)
        case 108:
          return ye + n + Pe + fe(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        // horizontal(-)tb
        case 45:
          return ye + n + Pe + fe(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return ye + n + Pe + n + n;
    // order
    case 6165:
      return ye + n + Pe + "flex-" + n + n;
    // align-items
    case 5187:
      return ye + n + fe(n, /(\w+).+(:[^]+)/, ye + "box-$1$2" + Pe + "flex-$1$2") + n;
    // align-self
    case 5443:
      return ye + n + Pe + "flex-item-" + fe(n, /flex-|-self/g, "") + (cn(n, /flex-|baseline/) ? "" : Pe + "grid-row-" + fe(n, /flex-|-self/g, "")) + n;
    // align-content
    case 4675:
      return ye + n + Pe + "flex-line-pack" + fe(n, /align-content|flex-|-self/g, "") + n;
    // flex-shrink
    case 5548:
      return ye + n + Pe + fe(n, "shrink", "negative") + n;
    // flex-basis
    case 5292:
      return ye + n + Pe + fe(n, "basis", "preferred-size") + n;
    // flex-grow
    case 6060:
      return ye + "box-" + fe(n, "-grow", "") + ye + n + Pe + fe(n, "grow", "positive") + n;
    // transition
    case 4554:
      return ye + fe(n, /([^-])(transform)/g, "$1" + ye + "$2") + n;
    // cursor
    case 6187:
      return fe(fe(fe(n, /(zoom-|grab)/, ye + "$1"), /(image-set)/, ye + "$1"), n, "") + n;
    // background, background-image
    case 5495:
    case 3959:
      return fe(n, /(image-set\([^]*)/, ye + "$1$`$1");
    // justify-content
    case 4968:
      return fe(fe(n, /(.+:)(flex-)?(.*)/, ye + "box-pack:$3" + Pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ye + n + n;
    // justify-self
    case 4200:
      if (!cn(n, /flex-|baseline/)) return Pe + "grid-column-align" + Wr(n, o) + n;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Pe + fe(n, "template-", "") + n;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return u && u.some(function(s, c) {
        return o = c, cn(s.props, /grid-\w+-end/);
      }) ? ~Eu(n + (u = u[o].value), "span", 0) ? n : Pe + fe(n, "-start", "") + n + Pe + "grid-row-span:" + (~Eu(u, "span", 0) ? cn(u, /\d+/) : +cn(u, /\d+/) - +cn(n, /\d+/)) + ";" : Pe + fe(n, "-start", "") + n;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return u && u.some(function(s) {
        return cn(s.props, /grid-\w+-start/);
      }) ? n : Pe + fe(fe(n, "-end", "-span"), "span ", "") + n;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return fe(n, /(.+)-inline(.+)/, ye + "$1$2") + n;
    // (min|max)?(width|height|inline-size|block-size)
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
      if (Kt(n) - 1 - o > 6)
        switch (Ve(n, o + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Ve(n, o + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return fe(n, /(.+:)(.+)-([^]+)/, "$1" + ye + "$2-$3$1" + Bo + (Ve(n, o + 3) == 108 ? "$3" : "$2-$3")) + n;
          // (s)tretch
          case 115:
            return ~Eu(n, "stretch", 0) ? Sh(fe(n, "stretch", "fill-available"), o, u) + n : n;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return fe(n, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(s, c, f, h, m, g, C) {
        return Pe + c + ":" + f + C + (h ? Pe + c + "-span:" + (m ? g : +g - +f) + C : "") + n;
      });
    // position: sticky
    case 4949:
      if (Ve(n, o + 6) === 121)
        return fe(n, ":", ":" + ye) + n;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Ve(n, Ve(n, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return fe(n, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ye + (Ve(n, 14) === 45 ? "inline-" : "") + "box$3$1" + ye + "$2$3$1" + Pe + "$2box$3") + n;
        // (inline-)?gri(d)
        case 100:
          return fe(n, ":", ":" + Pe) + n;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return fe(n, "scroll-", "scroll-snap-") + n;
  }
  return n;
}
function Iu(n, o) {
  for (var u = "", s = 0; s < n.length; s++)
    u += o(n[s], s, n, o) || "";
  return u;
}
function h0(n, o, u, s) {
  switch (n.type) {
    case t0:
      if (n.children.length) break;
    case e0:
    case ba:
      return n.return = n.return || n.value;
    case hh:
      return "";
    case mh:
      return n.return = n.value + "{" + Iu(n.children, s) + "}";
    case bu:
      if (!Kt(n.value = n.props.join(","))) return "";
  }
  return Kt(u = Iu(n.children, s)) ? n.return = n.value + "{" + u + "}" : "";
}
function m0(n) {
  var o = yh(n);
  return function(u, s, c, f) {
    for (var h = "", m = 0; m < o; m++)
      h += n[m](u, s, c, f) || "";
    return h;
  };
}
function v0(n) {
  return function(o) {
    o.root || (o = o.return) && n(o);
  };
}
function g0(n, o, u, s) {
  if (n.length > -1 && !n.return)
    switch (n.type) {
      case ba:
        n.return = Sh(n.value, n.length, u);
        return;
      case mh:
        return Iu([Mn(n, { value: fe(n.value, "@", "@" + ye) })], s);
      case bu:
        if (n.length)
          return r0(u = n.props, function(c) {
            switch (cn(c, s = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Mr(Mn(n, { props: [fe(c, /:(read-\w+)/, ":" + Bo + "$1")] })), Mr(Mn(n, { props: [c] })), xa(n, { props: sp(u, s) });
                break;
              // :placeholder
              case "::placeholder":
                Mr(Mn(n, { props: [fe(c, /:(plac\w+)/, ":" + ye + "input-$1")] })), Mr(Mn(n, { props: [fe(c, /:(plac\w+)/, ":" + Bo + "$1")] })), Mr(Mn(n, { props: [fe(c, /:(plac\w+)/, Pe + "input-$1")] })), Mr(Mn(n, { props: [c] })), xa(n, { props: sp(u, s) });
                break;
            }
            return "";
          });
    }
}
var y0 = {
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
}, Vr = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Eh = "active", kh = "data-styled-version", Ku = "6.1.19", Ha = `/*!sc*/
`, Mu = typeof window < "u" && typeof document < "u", w0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Gu = Object.freeze([]), Hr = Object.freeze({});
function S0(n, o, u) {
  return u === void 0 && (u = Hr), n.theme !== u.theme && n.theme || o || u.theme;
}
var xh = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), E0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, k0 = /(^-|-$)/g;
function fp(n) {
  return n.replace(E0, "-").replace(k0, "");
}
var x0 = /(a)(d)/gi, hu = 52, dp = function(n) {
  return String.fromCharCode(n + (n > 25 ? 39 : 97));
};
function Pa(n) {
  var o, u = "";
  for (o = Math.abs(n); o > hu; o = o / hu | 0) u = dp(o % hu) + u;
  return (dp(o % hu) + u).replace(x0, "$1-$2");
}
var na, Ch = 5381, Br = function(n, o) {
  for (var u = o.length; u; ) n = 33 * n ^ o.charCodeAt(--u);
  return n;
}, _h = function(n) {
  return Br(Ch, n);
};
function Ph(n) {
  return Pa(_h(n) >>> 0);
}
function C0(n) {
  return n.displayName || n.name || "Component";
}
function ra(n) {
  return typeof n == "string" && !0;
}
var Nh = typeof Symbol == "function" && Symbol.for, Rh = Nh ? Symbol.for("react.memo") : 60115, _0 = Nh ? Symbol.for("react.forward_ref") : 60112, P0 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, N0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Oh = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, R0 = ((na = {})[_0] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, na[Rh] = Oh, na);
function pp(n) {
  return ("type" in (o = n) && o.type.$$typeof) === Rh ? Oh : "$$typeof" in n ? R0[n.$$typeof] : P0;
  var o;
}
var O0 = Object.defineProperty, T0 = Object.getOwnPropertyNames, hp = Object.getOwnPropertySymbols, D0 = Object.getOwnPropertyDescriptor, A0 = Object.getPrototypeOf, mp = Object.prototype;
function Th(n, o, u) {
  if (typeof o != "string") {
    if (mp) {
      var s = A0(o);
      s && s !== mp && Th(n, s, u);
    }
    var c = T0(o);
    hp && (c = c.concat(hp(o)));
    for (var f = pp(n), h = pp(o), m = 0; m < c.length; ++m) {
      var g = c[m];
      if (!(g in N0 || u && u[g] || h && g in h || f && g in f)) {
        var C = D0(o, g);
        try {
          O0(n, g, C);
        } catch {
        }
      }
    }
  }
  return n;
}
function Qr(n) {
  return typeof n == "function";
}
function Qa(n) {
  return typeof n == "object" && "styledComponentId" in n;
}
function er(n, o) {
  return n && o ? "".concat(n, " ").concat(o) : n || o || "";
}
function Na(n, o) {
  if (n.length === 0) return "";
  for (var u = n[0], s = 1; s < n.length; s++) u += n[s];
  return u;
}
function Ho(n) {
  return n !== null && typeof n == "object" && n.constructor.name === Object.name && !("props" in n && n.$$typeof);
}
function Ra(n, o, u) {
  if (u === void 0 && (u = !1), !u && !Ho(n) && !Array.isArray(n)) return o;
  if (Array.isArray(o)) for (var s = 0; s < o.length; s++) n[s] = Ra(n[s], o[s]);
  else if (Ho(o)) for (var s in o) n[s] = Ra(n[s], o[s]);
  return n;
}
function Ka(n, o) {
  Object.defineProperty(n, "toString", { value: o });
}
function Zo(n) {
  for (var o = [], u = 1; u < arguments.length; u++) o[u - 1] = arguments[u];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n, " for more information.").concat(o.length > 0 ? " Args: ".concat(o.join(", ")) : ""));
}
var L0 = function() {
  function n(o) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = o;
  }
  return n.prototype.indexOfGroup = function(o) {
    for (var u = 0, s = 0; s < o; s++) u += this.groupSizes[s];
    return u;
  }, n.prototype.insertRules = function(o, u) {
    if (o >= this.groupSizes.length) {
      for (var s = this.groupSizes, c = s.length, f = c; o >= f; ) if ((f <<= 1) < 0) throw Zo(16, "".concat(o));
      this.groupSizes = new Uint32Array(f), this.groupSizes.set(s), this.length = f;
      for (var h = c; h < f; h++) this.groupSizes[h] = 0;
    }
    for (var m = this.indexOfGroup(o + 1), g = (h = 0, u.length); h < g; h++) this.tag.insertRule(m, u[h]) && (this.groupSizes[o]++, m++);
  }, n.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var u = this.groupSizes[o], s = this.indexOfGroup(o), c = s + u;
      this.groupSizes[o] = 0;
      for (var f = s; f < c; f++) this.tag.deleteRule(s);
    }
  }, n.prototype.getGroup = function(o) {
    var u = "";
    if (o >= this.length || this.groupSizes[o] === 0) return u;
    for (var s = this.groupSizes[o], c = this.indexOfGroup(o), f = c + s, h = c; h < f; h++) u += "".concat(this.tag.getRule(h)).concat(Ha);
    return u;
  }, n;
}(), Cu = /* @__PURE__ */ new Map(), Fu = /* @__PURE__ */ new Map(), _u = 1, mu = function(n) {
  if (Cu.has(n)) return Cu.get(n);
  for (; Fu.has(_u); ) _u++;
  var o = _u++;
  return Cu.set(n, o), Fu.set(o, n), o;
}, I0 = function(n, o) {
  _u = o + 1, Cu.set(n, o), Fu.set(o, n);
}, M0 = "style[".concat(Vr, "][").concat(kh, '="').concat(Ku, '"]'), F0 = new RegExp("^".concat(Vr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), j0 = function(n, o, u) {
  for (var s, c = u.split(","), f = 0, h = c.length; f < h; f++) (s = c[f]) && n.registerName(o, s);
}, z0 = function(n, o) {
  for (var u, s = ((u = o.textContent) !== null && u !== void 0 ? u : "").split(Ha), c = [], f = 0, h = s.length; f < h; f++) {
    var m = s[f].trim();
    if (m) {
      var g = m.match(F0);
      if (g) {
        var C = 0 | parseInt(g[1], 10), w = g[2];
        C !== 0 && (I0(w, C), j0(n, w, g[3]), n.getTag().insertRules(C, c)), c.length = 0;
      } else c.push(m);
    }
  }
}, vp = function(n) {
  for (var o = document.querySelectorAll(M0), u = 0, s = o.length; u < s; u++) {
    var c = o[u];
    c && c.getAttribute(Vr) !== Eh && (z0(n, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
function B0() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Dh = function(n) {
  var o = document.head, u = n || o, s = document.createElement("style"), c = function(m) {
    var g = Array.from(m.querySelectorAll("style[".concat(Vr, "]")));
    return g[g.length - 1];
  }(u), f = c !== void 0 ? c.nextSibling : null;
  s.setAttribute(Vr, Eh), s.setAttribute(kh, Ku);
  var h = B0();
  return h && s.setAttribute("nonce", h), u.insertBefore(s, f), s;
}, $0 = function() {
  function n(o) {
    this.element = Dh(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(u) {
      if (u.sheet) return u.sheet;
      for (var s = document.styleSheets, c = 0, f = s.length; c < f; c++) {
        var h = s[c];
        if (h.ownerNode === u) return h;
      }
      throw Zo(17);
    }(this.element), this.length = 0;
  }
  return n.prototype.insertRule = function(o, u) {
    try {
      return this.sheet.insertRule(u, o), this.length++, !0;
    } catch {
      return !1;
    }
  }, n.prototype.deleteRule = function(o) {
    this.sheet.deleteRule(o), this.length--;
  }, n.prototype.getRule = function(o) {
    var u = this.sheet.cssRules[o];
    return u && u.cssText ? u.cssText : "";
  }, n;
}(), U0 = function() {
  function n(o) {
    this.element = Dh(o), this.nodes = this.element.childNodes, this.length = 0;
  }
  return n.prototype.insertRule = function(o, u) {
    if (o <= this.length && o >= 0) {
      var s = document.createTextNode(u);
      return this.element.insertBefore(s, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, n.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, n.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, n;
}(), W0 = function() {
  function n(o) {
    this.rules = [], this.length = 0;
  }
  return n.prototype.insertRule = function(o, u) {
    return o <= this.length && (this.rules.splice(o, 0, u), this.length++, !0);
  }, n.prototype.deleteRule = function(o) {
    this.rules.splice(o, 1), this.length--;
  }, n.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, n;
}(), gp = Mu, b0 = { isServer: !Mu, useCSSOMInjection: !w0 }, Ah = function() {
  function n(o, u, s) {
    o === void 0 && (o = Hr), u === void 0 && (u = {});
    var c = this;
    this.options = dt(dt({}, b0), o), this.gs = u, this.names = new Map(s), this.server = !!o.isServer, !this.server && Mu && gp && (gp = !1, vp(this)), Ka(this, function() {
      return function(f) {
        for (var h = f.getTag(), m = h.length, g = "", C = function(x) {
          var E = function(I) {
            return Fu.get(I);
          }(x);
          if (E === void 0) return "continue";
          var D = f.names.get(E), L = h.getGroup(x);
          if (D === void 0 || !D.size || L.length === 0) return "continue";
          var P = "".concat(Vr, ".g").concat(x, '[id="').concat(E, '"]'), A = "";
          D !== void 0 && D.forEach(function(I) {
            I.length > 0 && (A += "".concat(I, ","));
          }), g += "".concat(L).concat(P, '{content:"').concat(A, '"}').concat(Ha);
        }, w = 0; w < m; w++) C(w);
        return g;
      }(c);
    });
  }
  return n.registerId = function(o) {
    return mu(o);
  }, n.prototype.rehydrate = function() {
    !this.server && Mu && vp(this);
  }, n.prototype.reconstructWithOptions = function(o, u) {
    return u === void 0 && (u = !0), new n(dt(dt({}, this.options), o), this.gs, u && this.names || void 0);
  }, n.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }, n.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(u) {
      var s = u.useCSSOMInjection, c = u.target;
      return u.isServer ? new W0(c) : s ? new $0(c) : new U0(c);
    }(this.options), new L0(o)));
    var o;
  }, n.prototype.hasNameForId = function(o, u) {
    return this.names.has(o) && this.names.get(o).has(u);
  }, n.prototype.registerName = function(o, u) {
    if (mu(o), this.names.has(o)) this.names.get(o).add(u);
    else {
      var s = /* @__PURE__ */ new Set();
      s.add(u), this.names.set(o, s);
    }
  }, n.prototype.insertRules = function(o, u, s) {
    this.registerName(o, u), this.getTag().insertRules(mu(o), s);
  }, n.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, n.prototype.clearRules = function(o) {
    this.getTag().clearGroup(mu(o)), this.clearNames(o);
  }, n.prototype.clearTag = function() {
    this.tag = void 0;
  }, n;
}(), V0 = /&/g, H0 = /^\s*\/\/.*$/gm;
function Lh(n, o) {
  return n.map(function(u) {
    return u.type === "rule" && (u.value = "".concat(o, " ").concat(u.value), u.value = u.value.replaceAll(",", ",".concat(o, " ")), u.props = u.props.map(function(s) {
      return "".concat(o, " ").concat(s);
    })), Array.isArray(u.children) && u.type !== "@keyframes" && (u.children = Lh(u.children, o)), u;
  });
}
function Q0(n) {
  var o, u, s, c = Hr, f = c.options, h = f === void 0 ? Hr : f, m = c.plugins, g = m === void 0 ? Gu : m, C = function(E, D, L) {
    return L.startsWith(u) && L.endsWith(u) && L.replaceAll(u, "").length > 0 ? ".".concat(o) : E;
  }, w = g.slice();
  w.push(function(E) {
    E.type === bu && E.value.includes("&") && (E.props[0] = E.props[0].replace(V0, u).replace(s, C));
  }), h.prefix && w.push(g0), w.push(h0);
  var x = function(E, D, L, P) {
    D === void 0 && (D = ""), L === void 0 && (L = ""), P === void 0 && (P = "&"), o = P, u = D, s = new RegExp("\\".concat(u, "\\b"), "g");
    var A = E.replace(H0, ""), I = d0(L || D ? "".concat(L, " ").concat(D, " { ").concat(A, " }") : A);
    h.namespace && (I = Lh(I, h.namespace));
    var B = [];
    return Iu(I, m0(w.concat(v0(function(F) {
      return B.push(F);
    })))), B;
  };
  return x.hash = g.length ? g.reduce(function(E, D) {
    return D.name || Zo(15), Br(E, D.name);
  }, Ch).toString() : "", x;
}
var K0 = new Ah(), Oa = Q0(), Ih = zn.createContext({ shouldForwardProp: void 0, styleSheet: K0, stylis: Oa });
Ih.Consumer;
zn.createContext(void 0);
function yp() {
  return O.useContext(Ih);
}
var Mh = function() {
  function n(o, u) {
    var s = this;
    this.inject = function(c, f) {
      f === void 0 && (f = Oa);
      var h = s.name + f.hash;
      c.hasNameForId(s.id, h) || c.insertRules(s.id, h, f(s.rules, h, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = u, Ka(this, function() {
      throw Zo(12, String(s.name));
    });
  }
  return n.prototype.getName = function(o) {
    return o === void 0 && (o = Oa), this.name + o.hash;
  }, n;
}(), G0 = function(n) {
  return n >= "A" && n <= "Z";
};
function wp(n) {
  for (var o = "", u = 0; u < n.length; u++) {
    var s = n[u];
    if (u === 1 && s === "-" && n[0] === "-") return n;
    G0(s) ? o += "-" + s.toLowerCase() : o += s;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Fh = function(n) {
  return n == null || n === !1 || n === "";
}, jh = function(n) {
  var o, u, s = [];
  for (var c in n) {
    var f = n[c];
    n.hasOwnProperty(c) && !Fh(f) && (Array.isArray(f) && f.isCss || Qr(f) ? s.push("".concat(wp(c), ":"), f, ";") : Ho(f) ? s.push.apply(s, Vo(Vo(["".concat(c, " {")], jh(f), !1), ["}"], !1)) : s.push("".concat(wp(c), ": ").concat((o = c, (u = f) == null || typeof u == "boolean" || u === "" ? "" : typeof u != "number" || u === 0 || o in y0 || o.startsWith("--") ? String(u).trim() : "".concat(u, "px")), ";")));
  }
  return s;
};
function or(n, o, u, s) {
  if (Fh(n)) return [];
  if (Qa(n)) return [".".concat(n.styledComponentId)];
  if (Qr(n)) {
    if (!Qr(f = n) || f.prototype && f.prototype.isReactComponent || !o) return [n];
    var c = n(o);
    return or(c, o, u, s);
  }
  var f;
  return n instanceof Mh ? u ? (n.inject(u, s), [n.getName(s)]) : [n] : Ho(n) ? jh(n) : Array.isArray(n) ? Array.prototype.concat.apply(Gu, n.map(function(h) {
    return or(h, o, u, s);
  })) : [n.toString()];
}
function Y0(n) {
  for (var o = 0; o < n.length; o += 1) {
    var u = n[o];
    if (Qr(u) && !Qa(u)) return !1;
  }
  return !0;
}
var X0 = _h(Ku), q0 = function() {
  function n(o, u, s) {
    this.rules = o, this.staticRulesId = "", this.isStatic = (s === void 0 || s.isStatic) && Y0(o), this.componentId = u, this.baseHash = Br(X0, u), this.baseStyle = s, Ah.registerId(u);
  }
  return n.prototype.generateAndInjectStyles = function(o, u, s) {
    var c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, u, s) : "";
    if (this.isStatic && !s.hash) if (this.staticRulesId && u.hasNameForId(this.componentId, this.staticRulesId)) c = er(c, this.staticRulesId);
    else {
      var f = Na(or(this.rules, o, u, s)), h = Pa(Br(this.baseHash, f) >>> 0);
      if (!u.hasNameForId(this.componentId, h)) {
        var m = s(f, ".".concat(h), void 0, this.componentId);
        u.insertRules(this.componentId, h, m);
      }
      c = er(c, h), this.staticRulesId = h;
    }
    else {
      for (var g = Br(this.baseHash, s.hash), C = "", w = 0; w < this.rules.length; w++) {
        var x = this.rules[w];
        if (typeof x == "string") C += x;
        else if (x) {
          var E = Na(or(x, o, u, s));
          g = Br(g, E + w), C += E;
        }
      }
      if (C) {
        var D = Pa(g >>> 0);
        u.hasNameForId(this.componentId, D) || u.insertRules(this.componentId, D, s(C, ".".concat(D), void 0, this.componentId)), c = er(c, D);
      }
    }
    return c;
  }, n;
}(), zh = zn.createContext(void 0);
zh.Consumer;
var oa = {};
function Z0(n, o, u) {
  var s = Qa(n), c = n, f = !ra(n), h = o.attrs, m = h === void 0 ? Gu : h, g = o.componentId, C = g === void 0 ? function(M, W) {
    var V = typeof M != "string" ? "sc" : fp(M);
    oa[V] = (oa[V] || 0) + 1;
    var j = "".concat(V, "-").concat(Ph(Ku + V + oa[V]));
    return W ? "".concat(W, "-").concat(j) : j;
  }(o.displayName, o.parentComponentId) : g, w = o.displayName, x = w === void 0 ? function(M) {
    return ra(M) ? "styled.".concat(M) : "Styled(".concat(C0(M), ")");
  }(n) : w, E = o.displayName && o.componentId ? "".concat(fp(o.displayName), "-").concat(o.componentId) : o.componentId || C, D = s && c.attrs ? c.attrs.concat(m).filter(Boolean) : m, L = o.shouldForwardProp;
  if (s && c.shouldForwardProp) {
    var P = c.shouldForwardProp;
    if (o.shouldForwardProp) {
      var A = o.shouldForwardProp;
      L = function(M, W) {
        return P(M, W) && A(M, W);
      };
    } else L = P;
  }
  var I = new q0(u, E, s ? c.componentStyle : void 0);
  function B(M, W) {
    return function(V, j, ae) {
      var le = V.attrs, me = V.componentStyle, ht = V.defaultProps, Fe = V.foldedComponentIds, He = V.styledComponentId, qe = V.target, je = zn.useContext(zh), ze = yp(), ve = V.shouldForwardProp || ze.shouldForwardProp, K = S0(j, je, ht) || Hr, ne = function(Q, G, Z) {
        for (var X, ce = dt(dt({}, G), { className: void 0, theme: Z }), we = 0; we < Q.length; we += 1) {
          var Re = Qr(X = Q[we]) ? X(ce) : X;
          for (var Ee in Re) ce[Ee] = Ee === "className" ? er(ce[Ee], Re[Ee]) : Ee === "style" ? dt(dt({}, ce[Ee]), Re[Ee]) : Re[Ee];
        }
        return G.className && (ce.className = er(ce.className, G.className)), ce;
      }(le, j, K), Y = ne.as || qe, p = {};
      for (var y in ne) ne[y] === void 0 || y[0] === "$" || y === "as" || y === "theme" && ne.theme === K || (y === "forwardedAs" ? p.as = ne.forwardedAs : ve && !ve(y, Y) || (p[y] = ne[y]));
      var _ = function(Q, G) {
        var Z = yp(), X = Q.generateAndInjectStyles(G, Z.styleSheet, Z.stylis);
        return X;
      }(me, ne), z = er(Fe, He);
      return _ && (z += " " + _), ne.className && (z += " " + ne.className), p[ra(Y) && !xh.has(Y) ? "class" : "className"] = z, ae && (p.ref = ae), O.createElement(Y, p);
    }(F, M, W);
  }
  B.displayName = x;
  var F = zn.forwardRef(B);
  return F.attrs = D, F.componentStyle = I, F.displayName = x, F.shouldForwardProp = L, F.foldedComponentIds = s ? er(c.foldedComponentIds, c.styledComponentId) : "", F.styledComponentId = E, F.target = s ? c.target : n, Object.defineProperty(F, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = s ? function(W) {
      for (var V = [], j = 1; j < arguments.length; j++) V[j - 1] = arguments[j];
      for (var ae = 0, le = V; ae < le.length; ae++) Ra(W, le[ae], !0);
      return W;
    }({}, c.defaultProps, M) : M;
  } }), Ka(F, function() {
    return ".".concat(F.styledComponentId);
  }), f && Th(F, n, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), F;
}
function Sp(n, o) {
  for (var u = [n[0]], s = 0, c = o.length; s < c; s += 1) u.push(o[s], n[s + 1]);
  return u;
}
var Ep = function(n) {
  return Object.assign(n, { isCss: !0 });
};
function Bh(n) {
  for (var o = [], u = 1; u < arguments.length; u++) o[u - 1] = arguments[u];
  if (Qr(n) || Ho(n)) return Ep(or(Sp(Gu, Vo([n], o, !0))));
  var s = n;
  return o.length === 0 && s.length === 1 && typeof s[0] == "string" ? or(s) : Ep(or(Sp(s, o)));
}
function Ta(n, o, u) {
  if (u === void 0 && (u = Hr), !o) throw Zo(1, o);
  var s = function(c) {
    for (var f = [], h = 1; h < arguments.length; h++) f[h - 1] = arguments[h];
    return n(o, u, Bh.apply(void 0, Vo([c], f, !1)));
  };
  return s.attrs = function(c) {
    return Ta(n, o, dt(dt({}, u), { attrs: Array.prototype.concat(u.attrs, c).filter(Boolean) }));
  }, s.withConfig = function(c) {
    return Ta(n, o, dt(dt({}, u), c));
  }, s;
}
var $h = function(n) {
  return Ta(Z0, n);
}, zt = $h;
xh.forEach(function(n) {
  zt[n] = $h(n);
});
function OS(n) {
  for (var o = [], u = 1; u < arguments.length; u++) o[u - 1] = arguments[u];
  var s = Na(Bh.apply(void 0, Vo([n], o, !1))), c = Ph(s);
  return new Mh(c, s);
}
const J0 = O.createContext(null), ia = {
  didCatch: !1,
  error: null
};
class e1 extends O.Component {
  constructor(o) {
    super(o), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = ia;
  }
  static getDerivedStateFromError(o) {
    return {
      didCatch: !0,
      error: o
    };
  }
  resetErrorBoundary() {
    const {
      error: o
    } = this.state;
    if (o !== null) {
      for (var u, s, c = arguments.length, f = new Array(c), h = 0; h < c; h++)
        f[h] = arguments[h];
      (u = (s = this.props).onReset) === null || u === void 0 || u.call(s, {
        args: f,
        reason: "imperative-api"
      }), this.setState(ia);
    }
  }
  componentDidCatch(o, u) {
    var s, c;
    (s = (c = this.props).onError) === null || s === void 0 || s.call(c, o, u);
  }
  componentDidUpdate(o, u) {
    const {
      didCatch: s
    } = this.state, {
      resetKeys: c
    } = this.props;
    if (s && u.error !== null && t1(o.resetKeys, c)) {
      var f, h;
      (f = (h = this.props).onReset) === null || f === void 0 || f.call(h, {
        next: c,
        prev: o.resetKeys,
        reason: "keys"
      }), this.setState(ia);
    }
  }
  render() {
    const {
      children: o,
      fallbackRender: u,
      FallbackComponent: s,
      fallback: c
    } = this.props, {
      didCatch: f,
      error: h
    } = this.state;
    let m = o;
    if (f) {
      const g = {
        error: h,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof u == "function")
        m = u(g);
      else if (s)
        m = O.createElement(s, g);
      else if (c !== void 0)
        m = c;
      else
        throw h;
    }
    return O.createElement(J0.Provider, {
      value: {
        didCatch: f,
        error: h,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, m);
  }
}
function t1() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return n.length !== o.length || n.some((u, s) => !Object.is(u, o[s]));
}
const n1 = [
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
  "fontSize",
  "scrollbarTrackBackground",
  "scrollbarThumbBackground"
], Xe = {
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
  fontSize: "--xliic-fontSize",
  scrollbarTrackBackground: "--xliic-scrollbarTrackBackground",
  scrollbarThumbBackground: "--xliic-scrollbarThumbBackground"
};
function r1() {
  const n = Yy((o) => o.theme);
  return /* @__PURE__ */ J.jsxs("style", { children: [
    i1(n.theme),
    o1()
  ] });
}
function o1() {
  return `
  body {
    padding: 0;
    margin: 0;
    background-color: var(--xliic-background);
    color: var(--xliic-foreground);
    }`;
}
function i1(n) {
  const o = [];
  if (n !== void 0)
    for (const u of n1)
      n[u] && o.push(`${Xe[u]}: ${n[u]};`);
  return `:root {
    ${o.join(`
`)}
  }`;
}
const Uh = zn.createContext([
  {
    id: "starting",
    title: "Starting",
    element: zn.createElement("div", {}, "Empty starting route")
  }
]);
function Wh(n, o) {
  if (o.length === 0)
    return;
  const [u, ...s] = o;
  for (const c of n)
    if (c.id === u)
      return s.length === 0 ? c : c.children ? Wh(c.children, s) : void 0;
}
function u1() {
  return /* @__PURE__ */ J.jsx(Uh.Consumer, { children: (n) => /* @__PURE__ */ J.jsx(l1, { routes: n }) });
}
function l1({ routes: n }) {
  const o = ph((s) => s.router.current), u = Wh(n, o);
  return !u || u.link ? /* @__PURE__ */ J.jsx("div", {}) : u.element;
}
function s1() {
  return /* @__PURE__ */ J.jsx(Uh.Consumer, { children: (n) => /* @__PURE__ */ J.jsx(a1, { routes: n }) });
}
function a1({ routes: n }) {
  var m;
  const o = Jy(), s = ph((g) => g.router.current).slice(0, 2), c = s.slice(0, 1), f = s.length > 1 ? (m = n.find((g) => g.id === s[0])) == null ? void 0 : m.children : n, h = f == null ? void 0 : f.find((g) => g.id === s[s.length - 1]);
  return f ? (h == null ? void 0 : h.navigation) === !1 ? h.title !== "" ? /* @__PURE__ */ J.jsx(f1, { children: /* @__PURE__ */ J.jsx(p1, { children: h.title }) }) : null : /* @__PURE__ */ J.jsx(c1, { children: f.map(({ id: g, title: C, link: w }) => /* @__PURE__ */ J.jsx(
    d1,
    {
      $active: g === s[s.length - 1],
      onClick: () => {
        o(w ? Zy(w) : qy([...c, g]));
      },
      children: typeof C == "string" ? /* @__PURE__ */ J.jsx("div", { children: C }) : C
    },
    g
  )) }) : null;
}
const c1 = zt.nav`
  height: 28px;
  display: flex;
  padding: 0px 16px;
  padding-top: 6px;
  justify-content: space-between;
  font-size: 14px;
  border-bottom: 1px solid var(${Xe.border});
`, f1 = zt.div`
  height: 35px;
  display: flex;
  padding: 0px 16px;
  border-bottom: 1px solid var(${Xe.border});
`, d1 = zt.div`
  padding: 0 1em;
  display: flex;
  align-items: center;
  ${({ $active: n }) => n ? `border-bottom: 3px solid var(${Xe.buttonBackground});` : "opacity: 0.7; border-bottom: 3px solid transparent; cursor: pointer;"};
  > div {
    border: ${({ $active: n }) => n && Xe.contrastActiveBorder ? `1px solid var(${Xe.contrastActiveBorder})` : "none"};
  }
`, p1 = zt.div`
  place-self: center;
  font-size: 16px;
  font-weight: 500;
  display: flex;
`;
function jn(n, o, { checkForDefaultPrevented: u = !0 } = {}) {
  return function(c) {
    if (n == null || n(c), u === !1 || !c.defaultPrevented)
      return o == null ? void 0 : o(c);
  };
}
function kp(n, o) {
  if (typeof n == "function")
    return n(o);
  n != null && (n.current = o);
}
function bh(...n) {
  return (o) => {
    let u = !1;
    const s = n.map((c) => {
      const f = kp(c, o);
      return !u && typeof f == "function" && (u = !0), f;
    });
    if (u)
      return () => {
        for (let c = 0; c < s.length; c++) {
          const f = s[c];
          typeof f == "function" ? f() : kp(n[c], null);
        }
      };
  };
}
function ar(...n) {
  return O.useCallback(bh(...n), n);
}
function h1(n, o) {
  const u = O.createContext(o), s = (f) => {
    const { children: h, ...m } = f, g = O.useMemo(() => m, Object.values(m));
    return /* @__PURE__ */ J.jsx(u.Provider, { value: g, children: h });
  };
  s.displayName = n + "Provider";
  function c(f) {
    const h = O.useContext(u);
    if (h) return h;
    if (o !== void 0) return o;
    throw new Error(`\`${f}\` must be used within \`${n}\``);
  }
  return [s, c];
}
function m1(n, o = []) {
  let u = [];
  function s(f, h) {
    const m = O.createContext(h), g = u.length;
    u = [...u, h];
    const C = (x) => {
      var I;
      const { scope: E, children: D, ...L } = x, P = ((I = E == null ? void 0 : E[n]) == null ? void 0 : I[g]) || m, A = O.useMemo(() => L, Object.values(L));
      return /* @__PURE__ */ J.jsx(P.Provider, { value: A, children: D });
    };
    C.displayName = f + "Provider";
    function w(x, E) {
      var P;
      const D = ((P = E == null ? void 0 : E[n]) == null ? void 0 : P[g]) || m, L = O.useContext(D);
      if (L) return L;
      if (h !== void 0) return h;
      throw new Error(`\`${x}\` must be used within \`${f}\``);
    }
    return [C, w];
  }
  const c = () => {
    const f = u.map((h) => O.createContext(h));
    return function(m) {
      const g = (m == null ? void 0 : m[n]) || f;
      return O.useMemo(
        () => ({ [`__scope${n}`]: { ...m, [n]: g } }),
        [m, g]
      );
    };
  };
  return c.scopeName = n, [s, v1(c, ...o)];
}
function v1(...n) {
  const o = n[0];
  if (n.length === 1) return o;
  const u = () => {
    const s = n.map((c) => ({
      useScope: c(),
      scopeName: c.scopeName
    }));
    return function(f) {
      const h = s.reduce((m, { useScope: g, scopeName: C }) => {
        const x = g(f)[`__scope${C}`];
        return { ...m, ...x };
      }, {});
      return O.useMemo(() => ({ [`__scope${o.scopeName}`]: h }), [h]);
    };
  };
  return u.scopeName = o.scopeName, u;
}
var Qo = globalThis != null && globalThis.document ? O.useLayoutEffect : () => {
}, g1 = Mp[" useId ".trim().toString()] || (() => {
}), y1 = 0;
function ua(n) {
  const [o, u] = O.useState(g1());
  return Qo(() => {
    u((s) => s ?? String(y1++));
  }, [n]), n || (o ? `radix-${o}` : "");
}
var w1 = Mp[" useInsertionEffect ".trim().toString()] || Qo;
function S1({
  prop: n,
  defaultProp: o,
  onChange: u = () => {
  },
  caller: s
}) {
  const [c, f, h] = E1({
    defaultProp: o,
    onChange: u
  }), m = n !== void 0, g = m ? n : c;
  {
    const w = O.useRef(n !== void 0);
    O.useEffect(() => {
      const x = w.current;
      x !== m && console.warn(
        `${s} is changing from ${x ? "controlled" : "uncontrolled"} to ${m ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), w.current = m;
    }, [m, s]);
  }
  const C = O.useCallback(
    (w) => {
      var x;
      if (m) {
        const E = k1(w) ? w(n) : w;
        E !== n && ((x = h.current) == null || x.call(h, E));
      } else
        f(w);
    },
    [m, n, f, h]
  );
  return [g, C];
}
function E1({
  defaultProp: n,
  onChange: o
}) {
  const [u, s] = O.useState(n), c = O.useRef(u), f = O.useRef(o);
  return w1(() => {
    f.current = o;
  }, [o]), O.useEffect(() => {
    var h;
    c.current !== u && ((h = f.current) == null || h.call(f, u), c.current = u);
  }, [u, c]), [u, s, f];
}
function k1(n) {
  return typeof n == "function";
}
var Vh = Fp();
const x1 = /* @__PURE__ */ La(Vh);
// @__NO_SIDE_EFFECTS__
function Hh(n) {
  const o = /* @__PURE__ */ C1(n), u = O.forwardRef((s, c) => {
    const { children: f, ...h } = s, m = O.Children.toArray(f), g = m.find(_1);
    if (g) {
      const C = g.props.children, w = m.map((x) => x === g ? O.Children.count(C) > 1 ? O.Children.only(null) : O.isValidElement(C) ? C.props.children : null : x);
      return /* @__PURE__ */ J.jsx(o, { ...h, ref: c, children: O.isValidElement(C) ? O.cloneElement(C, void 0, w) : null });
    }
    return /* @__PURE__ */ J.jsx(o, { ...h, ref: c, children: f });
  });
  return u.displayName = `${n}.Slot`, u;
}
// @__NO_SIDE_EFFECTS__
function C1(n) {
  const o = O.forwardRef((u, s) => {
    const { children: c, ...f } = u;
    if (O.isValidElement(c)) {
      const h = N1(c), m = P1(f, c.props);
      return c.type !== O.Fragment && (m.ref = s ? bh(s, h) : h), O.cloneElement(c, m);
    }
    return O.Children.count(c) > 1 ? O.Children.only(null) : null;
  });
  return o.displayName = `${n}.SlotClone`, o;
}
var Qh = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function TS(n) {
  const o = ({ children: u }) => /* @__PURE__ */ J.jsx(J.Fragment, { children: u });
  return o.displayName = `${n}.Slottable`, o.__radixId = Qh, o;
}
function _1(n) {
  return O.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === Qh;
}
function P1(n, o) {
  const u = { ...o };
  for (const s in o) {
    const c = n[s], f = o[s];
    /^on[A-Z]/.test(s) ? c && f ? u[s] = (...m) => {
      const g = f(...m);
      return c(...m), g;
    } : c && (u[s] = c) : s === "style" ? u[s] = { ...c, ...f } : s === "className" && (u[s] = [c, f].filter(Boolean).join(" "));
  }
  return { ...n, ...u };
}
function N1(n) {
  var s, c;
  let o = (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : s.get, u = o && "isReactWarning" in o && o.isReactWarning;
  return u ? n.ref : (o = (c = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : c.get, u = o && "isReactWarning" in o && o.isReactWarning, u ? n.props.ref : n.props.ref || n.ref);
}
var R1 = [
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
  "select",
  "span",
  "svg",
  "ul"
], pn = R1.reduce((n, o) => {
  const u = /* @__PURE__ */ Hh(`Primitive.${o}`), s = O.forwardRef((c, f) => {
    const { asChild: h, ...m } = c, g = h ? u : o;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ J.jsx(g, { ...m, ref: f });
  });
  return s.displayName = `Primitive.${o}`, { ...n, [o]: s };
}, {});
function O1(n, o) {
  n && Vh.flushSync(() => n.dispatchEvent(o));
}
function Ko(n) {
  const o = O.useRef(n);
  return O.useEffect(() => {
    o.current = n;
  }), O.useMemo(() => (...u) => {
    var s;
    return (s = o.current) == null ? void 0 : s.call(o, ...u);
  }, []);
}
function T1(n, o = globalThis == null ? void 0 : globalThis.document) {
  const u = Ko(n);
  O.useEffect(() => {
    const s = (c) => {
      c.key === "Escape" && u(c);
    };
    return o.addEventListener("keydown", s, { capture: !0 }), () => o.removeEventListener("keydown", s, { capture: !0 });
  }, [u, o]);
}
var D1 = "DismissableLayer", Da = "dismissableLayer.update", A1 = "dismissableLayer.pointerDownOutside", L1 = "dismissableLayer.focusOutside", xp, Kh = O.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Gh = O.forwardRef(
  (n, o) => {
    const {
      disableOutsidePointerEvents: u = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      onFocusOutside: f,
      onInteractOutside: h,
      onDismiss: m,
      ...g
    } = n, C = O.useContext(Kh), [w, x] = O.useState(null), E = (w == null ? void 0 : w.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, D] = O.useState({}), L = ar(o, (j) => x(j)), P = Array.from(C.layers), [A] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1), I = P.indexOf(A), B = w ? P.indexOf(w) : -1, F = C.layersWithOutsidePointerEventsDisabled.size > 0, M = B >= I, W = F1((j) => {
      const ae = j.target, le = [...C.branches].some((me) => me.contains(ae));
      !M || le || (c == null || c(j), h == null || h(j), j.defaultPrevented || m == null || m());
    }, E), V = j1((j) => {
      const ae = j.target;
      [...C.branches].some((me) => me.contains(ae)) || (f == null || f(j), h == null || h(j), j.defaultPrevented || m == null || m());
    }, E);
    return T1((j) => {
      B === C.layers.size - 1 && (s == null || s(j), !j.defaultPrevented && m && (j.preventDefault(), m()));
    }, E), O.useEffect(() => {
      if (w)
        return u && (C.layersWithOutsidePointerEventsDisabled.size === 0 && (xp = E.body.style.pointerEvents, E.body.style.pointerEvents = "none"), C.layersWithOutsidePointerEventsDisabled.add(w)), C.layers.add(w), Cp(), () => {
          u && C.layersWithOutsidePointerEventsDisabled.size === 1 && (E.body.style.pointerEvents = xp);
        };
    }, [w, E, u, C]), O.useEffect(() => () => {
      w && (C.layers.delete(w), C.layersWithOutsidePointerEventsDisabled.delete(w), Cp());
    }, [w, C]), O.useEffect(() => {
      const j = () => D({});
      return document.addEventListener(Da, j), () => document.removeEventListener(Da, j);
    }, []), /* @__PURE__ */ J.jsx(
      pn.div,
      {
        ...g,
        ref: L,
        style: {
          pointerEvents: F ? M ? "auto" : "none" : void 0,
          ...n.style
        },
        onFocusCapture: jn(n.onFocusCapture, V.onFocusCapture),
        onBlurCapture: jn(n.onBlurCapture, V.onBlurCapture),
        onPointerDownCapture: jn(
          n.onPointerDownCapture,
          W.onPointerDownCapture
        )
      }
    );
  }
);
Gh.displayName = D1;
var I1 = "DismissableLayerBranch", M1 = O.forwardRef((n, o) => {
  const u = O.useContext(Kh), s = O.useRef(null), c = ar(o, s);
  return O.useEffect(() => {
    const f = s.current;
    if (f)
      return u.branches.add(f), () => {
        u.branches.delete(f);
      };
  }, [u.branches]), /* @__PURE__ */ J.jsx(pn.div, { ...n, ref: c });
});
M1.displayName = I1;
function F1(n, o = globalThis == null ? void 0 : globalThis.document) {
  const u = Ko(n), s = O.useRef(!1), c = O.useRef(() => {
  });
  return O.useEffect(() => {
    const f = (m) => {
      if (m.target && !s.current) {
        let g = function() {
          Yh(
            A1,
            u,
            C,
            { discrete: !0 }
          );
        };
        const C = { originalEvent: m };
        m.pointerType === "touch" ? (o.removeEventListener("click", c.current), c.current = g, o.addEventListener("click", c.current, { once: !0 })) : g();
      } else
        o.removeEventListener("click", c.current);
      s.current = !1;
    }, h = window.setTimeout(() => {
      o.addEventListener("pointerdown", f);
    }, 0);
    return () => {
      window.clearTimeout(h), o.removeEventListener("pointerdown", f), o.removeEventListener("click", c.current);
    };
  }, [o, u]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => s.current = !0
  };
}
function j1(n, o = globalThis == null ? void 0 : globalThis.document) {
  const u = Ko(n), s = O.useRef(!1);
  return O.useEffect(() => {
    const c = (f) => {
      f.target && !s.current && Yh(L1, u, { originalEvent: f }, {
        discrete: !1
      });
    };
    return o.addEventListener("focusin", c), () => o.removeEventListener("focusin", c);
  }, [o, u]), {
    onFocusCapture: () => s.current = !0,
    onBlurCapture: () => s.current = !1
  };
}
function Cp() {
  const n = new CustomEvent(Da);
  document.dispatchEvent(n);
}
function Yh(n, o, u, { discrete: s }) {
  const c = u.originalEvent.target, f = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: u });
  o && c.addEventListener(n, o, { once: !0 }), s ? O1(c, f) : c.dispatchEvent(f);
}
var la = "focusScope.autoFocusOnMount", sa = "focusScope.autoFocusOnUnmount", _p = { bubbles: !1, cancelable: !0 }, z1 = "FocusScope", Xh = O.forwardRef((n, o) => {
  const {
    loop: u = !1,
    trapped: s = !1,
    onMountAutoFocus: c,
    onUnmountAutoFocus: f,
    ...h
  } = n, [m, g] = O.useState(null), C = Ko(c), w = Ko(f), x = O.useRef(null), E = ar(o, (P) => g(P)), D = O.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  O.useEffect(() => {
    if (s) {
      let P = function(F) {
        if (D.paused || !m) return;
        const M = F.target;
        m.contains(M) ? x.current = M : Fn(x.current, { select: !0 });
      }, A = function(F) {
        if (D.paused || !m) return;
        const M = F.relatedTarget;
        M !== null && (m.contains(M) || Fn(x.current, { select: !0 }));
      }, I = function(F) {
        if (document.activeElement === document.body)
          for (const W of F)
            W.removedNodes.length > 0 && Fn(m);
      };
      document.addEventListener("focusin", P), document.addEventListener("focusout", A);
      const B = new MutationObserver(I);
      return m && B.observe(m, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", P), document.removeEventListener("focusout", A), B.disconnect();
      };
    }
  }, [s, m, D.paused]), O.useEffect(() => {
    if (m) {
      Np.add(D);
      const P = document.activeElement;
      if (!m.contains(P)) {
        const I = new CustomEvent(la, _p);
        m.addEventListener(la, C), m.dispatchEvent(I), I.defaultPrevented || (B1(V1(qh(m)), { select: !0 }), document.activeElement === P && Fn(m));
      }
      return () => {
        m.removeEventListener(la, C), setTimeout(() => {
          const I = new CustomEvent(sa, _p);
          m.addEventListener(sa, w), m.dispatchEvent(I), I.defaultPrevented || Fn(P ?? document.body, { select: !0 }), m.removeEventListener(sa, w), Np.remove(D);
        }, 0);
      };
    }
  }, [m, C, w, D]);
  const L = O.useCallback(
    (P) => {
      if (!u && !s || D.paused) return;
      const A = P.key === "Tab" && !P.altKey && !P.ctrlKey && !P.metaKey, I = document.activeElement;
      if (A && I) {
        const B = P.currentTarget, [F, M] = $1(B);
        F && M ? !P.shiftKey && I === M ? (P.preventDefault(), u && Fn(F, { select: !0 })) : P.shiftKey && I === F && (P.preventDefault(), u && Fn(M, { select: !0 })) : I === B && P.preventDefault();
      }
    },
    [u, s, D.paused]
  );
  return /* @__PURE__ */ J.jsx(pn.div, { tabIndex: -1, ...h, ref: E, onKeyDown: L });
});
Xh.displayName = z1;
function B1(n, { select: o = !1 } = {}) {
  const u = document.activeElement;
  for (const s of n)
    if (Fn(s, { select: o }), document.activeElement !== u) return;
}
function $1(n) {
  const o = qh(n), u = Pp(o, n), s = Pp(o.reverse(), n);
  return [u, s];
}
function qh(n) {
  const o = [], u = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (s) => {
      const c = s.tagName === "INPUT" && s.type === "hidden";
      return s.disabled || s.hidden || c ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; u.nextNode(); ) o.push(u.currentNode);
  return o;
}
function Pp(n, o) {
  for (const u of n)
    if (!U1(u, { upTo: o })) return u;
}
function U1(n, { upTo: o }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (o !== void 0 && n === o) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
function W1(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function Fn(n, { select: o = !1 } = {}) {
  if (n && n.focus) {
    const u = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== u && W1(n) && o && n.select();
  }
}
var Np = b1();
function b1() {
  let n = [];
  return {
    add(o) {
      const u = n[0];
      o !== u && (u == null || u.pause()), n = Rp(n, o), n.unshift(o);
    },
    remove(o) {
      var u;
      n = Rp(n, o), (u = n[0]) == null || u.resume();
    }
  };
}
function Rp(n, o) {
  const u = [...n], s = u.indexOf(o);
  return s !== -1 && u.splice(s, 1), u;
}
function V1(n) {
  return n.filter((o) => o.tagName !== "A");
}
var H1 = "Portal", Zh = O.forwardRef((n, o) => {
  var m;
  const { container: u, ...s } = n, [c, f] = O.useState(!1);
  Qo(() => f(!0), []);
  const h = u || c && ((m = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : m.body);
  return h ? x1.createPortal(/* @__PURE__ */ J.jsx(pn.div, { ...s, ref: o }), h) : null;
});
Zh.displayName = H1;
function Q1(n, o) {
  return O.useReducer((u, s) => o[u][s] ?? u, n);
}
var Yu = (n) => {
  const { present: o, children: u } = n, s = K1(o), c = typeof u == "function" ? u({ present: s.isPresent }) : O.Children.only(u), f = ar(s.ref, G1(c));
  return typeof u == "function" || s.isPresent ? O.cloneElement(c, { ref: f }) : null;
};
Yu.displayName = "Presence";
function K1(n) {
  const [o, u] = O.useState(), s = O.useRef(null), c = O.useRef(n), f = O.useRef("none"), h = n ? "mounted" : "unmounted", [m, g] = Q1(h, {
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
  return O.useEffect(() => {
    const C = vu(s.current);
    f.current = m === "mounted" ? C : "none";
  }, [m]), Qo(() => {
    const C = s.current, w = c.current;
    if (w !== n) {
      const E = f.current, D = vu(C);
      n ? g("MOUNT") : D === "none" || (C == null ? void 0 : C.display) === "none" ? g("UNMOUNT") : g(w && E !== D ? "ANIMATION_OUT" : "UNMOUNT"), c.current = n;
    }
  }, [n, g]), Qo(() => {
    if (o) {
      let C;
      const w = o.ownerDocument.defaultView ?? window, x = (D) => {
        const P = vu(s.current).includes(D.animationName);
        if (D.target === o && P && (g("ANIMATION_END"), !c.current)) {
          const A = o.style.animationFillMode;
          o.style.animationFillMode = "forwards", C = w.setTimeout(() => {
            o.style.animationFillMode === "forwards" && (o.style.animationFillMode = A);
          });
        }
      }, E = (D) => {
        D.target === o && (f.current = vu(s.current));
      };
      return o.addEventListener("animationstart", E), o.addEventListener("animationcancel", x), o.addEventListener("animationend", x), () => {
        w.clearTimeout(C), o.removeEventListener("animationstart", E), o.removeEventListener("animationcancel", x), o.removeEventListener("animationend", x);
      };
    } else
      g("ANIMATION_END");
  }, [o, g]), {
    isPresent: ["mounted", "unmountSuspended"].includes(m),
    ref: O.useCallback((C) => {
      s.current = C ? getComputedStyle(C) : null, u(C);
    }, [])
  };
}
function vu(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
function G1(n) {
  var s, c;
  let o = (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : s.get, u = o && "isReactWarning" in o && o.isReactWarning;
  return u ? n.ref : (o = (c = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : c.get, u = o && "isReactWarning" in o && o.isReactWarning, u ? n.props.ref : n.props.ref || n.ref);
}
var aa = 0;
function Y1() {
  O.useEffect(() => {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", n[0] ?? Op()), document.body.insertAdjacentElement("beforeend", n[1] ?? Op()), aa++, () => {
      aa === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o) => o.remove()), aa--;
    };
  }, []);
}
function Op() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
var Gt = function() {
  return Gt = Object.assign || function(o) {
    for (var u, s = 1, c = arguments.length; s < c; s++) {
      u = arguments[s];
      for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (o[f] = u[f]);
    }
    return o;
  }, Gt.apply(this, arguments);
};
function Jh(n, o) {
  var u = {};
  for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && o.indexOf(s) < 0 && (u[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, s = Object.getOwnPropertySymbols(n); c < s.length; c++)
      o.indexOf(s[c]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[c]) && (u[s[c]] = n[s[c]]);
  return u;
}
function X1(n, o, u) {
  if (u || arguments.length === 2) for (var s = 0, c = o.length, f; s < c; s++)
    (f || !(s in o)) && (f || (f = Array.prototype.slice.call(o, 0, s)), f[s] = o[s]);
  return n.concat(f || Array.prototype.slice.call(o));
}
var Pu = "right-scroll-bar-position", Nu = "width-before-scroll-bar", q1 = "with-scroll-bars-hidden", Z1 = "--removed-body-scroll-bar-size";
function ca(n, o) {
  return typeof n == "function" ? n(o) : n && (n.current = o), n;
}
function J1(n, o) {
  var u = O.useState(function() {
    return {
      // value
      value: n,
      // last callback
      callback: o,
      // "memoized" public interface
      facade: {
        get current() {
          return u.value;
        },
        set current(s) {
          var c = u.value;
          c !== s && (u.value = s, u.callback(s, c));
        }
      }
    };
  })[0];
  return u.callback = o, u.facade;
}
var ew = typeof window < "u" ? O.useLayoutEffect : O.useEffect, Tp = /* @__PURE__ */ new WeakMap();
function tw(n, o) {
  var u = J1(null, function(s) {
    return n.forEach(function(c) {
      return ca(c, s);
    });
  });
  return ew(function() {
    var s = Tp.get(u);
    if (s) {
      var c = new Set(s), f = new Set(n), h = u.current;
      c.forEach(function(m) {
        f.has(m) || ca(m, null);
      }), f.forEach(function(m) {
        c.has(m) || ca(m, h);
      });
    }
    Tp.set(u, n);
  }, [n]), u;
}
function nw(n) {
  return n;
}
function rw(n, o) {
  o === void 0 && (o = nw);
  var u = [], s = !1, c = {
    read: function() {
      if (s)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return u.length ? u[u.length - 1] : n;
    },
    useMedium: function(f) {
      var h = o(f, s);
      return u.push(h), function() {
        u = u.filter(function(m) {
          return m !== h;
        });
      };
    },
    assignSyncMedium: function(f) {
      for (s = !0; u.length; ) {
        var h = u;
        u = [], h.forEach(f);
      }
      u = {
        push: function(m) {
          return f(m);
        },
        filter: function() {
          return u;
        }
      };
    },
    assignMedium: function(f) {
      s = !0;
      var h = [];
      if (u.length) {
        var m = u;
        u = [], m.forEach(f), h = u;
      }
      var g = function() {
        var w = h;
        h = [], w.forEach(f);
      }, C = function() {
        return Promise.resolve().then(g);
      };
      C(), u = {
        push: function(w) {
          h.push(w), C();
        },
        filter: function(w) {
          return h = h.filter(w), u;
        }
      };
    }
  };
  return c;
}
function ow(n) {
  n === void 0 && (n = {});
  var o = rw(null);
  return o.options = Gt({ async: !0, ssr: !1 }, n), o;
}
var em = function(n) {
  var o = n.sideCar, u = Jh(n, ["sideCar"]);
  if (!o)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var s = o.read();
  if (!s)
    throw new Error("Sidecar medium not found");
  return O.createElement(s, Gt({}, u));
};
em.isSideCarExport = !0;
function iw(n, o) {
  return n.useMedium(o), em;
}
var tm = ow(), fa = function() {
}, Xu = O.forwardRef(function(n, o) {
  var u = O.useRef(null), s = O.useState({
    onScrollCapture: fa,
    onWheelCapture: fa,
    onTouchMoveCapture: fa
  }), c = s[0], f = s[1], h = n.forwardProps, m = n.children, g = n.className, C = n.removeScrollBar, w = n.enabled, x = n.shards, E = n.sideCar, D = n.noRelative, L = n.noIsolation, P = n.inert, A = n.allowPinchZoom, I = n.as, B = I === void 0 ? "div" : I, F = n.gapMode, M = Jh(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), W = E, V = tw([u, o]), j = Gt(Gt({}, M), c);
  return O.createElement(
    O.Fragment,
    null,
    w && O.createElement(W, { sideCar: tm, removeScrollBar: C, shards: x, noRelative: D, noIsolation: L, inert: P, setCallbacks: f, allowPinchZoom: !!A, lockRef: u, gapMode: F }),
    h ? O.cloneElement(O.Children.only(m), Gt(Gt({}, j), { ref: V })) : O.createElement(B, Gt({}, j, { className: g, ref: V }), m)
  );
});
Xu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Xu.classNames = {
  fullWidth: Nu,
  zeroRight: Pu
};
var uw = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function lw() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var o = uw();
  return o && n.setAttribute("nonce", o), n;
}
function sw(n, o) {
  n.styleSheet ? n.styleSheet.cssText = o : n.appendChild(document.createTextNode(o));
}
function aw(n) {
  var o = document.head || document.getElementsByTagName("head")[0];
  o.appendChild(n);
}
var cw = function() {
  var n = 0, o = null;
  return {
    add: function(u) {
      n == 0 && (o = lw()) && (sw(o, u), aw(o)), n++;
    },
    remove: function() {
      n--, !n && o && (o.parentNode && o.parentNode.removeChild(o), o = null);
    }
  };
}, fw = function() {
  var n = cw();
  return function(o, u) {
    O.useEffect(function() {
      return n.add(o), function() {
        n.remove();
      };
    }, [o && u]);
  };
}, nm = function() {
  var n = fw(), o = function(u) {
    var s = u.styles, c = u.dynamic;
    return n(s, c), null;
  };
  return o;
}, dw = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, da = function(n) {
  return parseInt(n || "", 10) || 0;
}, pw = function(n) {
  var o = window.getComputedStyle(document.body), u = o[n === "padding" ? "paddingLeft" : "marginLeft"], s = o[n === "padding" ? "paddingTop" : "marginTop"], c = o[n === "padding" ? "paddingRight" : "marginRight"];
  return [da(u), da(s), da(c)];
}, hw = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return dw;
  var o = pw(n), u = document.documentElement.clientWidth, s = window.innerWidth;
  return {
    left: o[0],
    top: o[1],
    right: o[2],
    gap: Math.max(0, s - u + o[2] - o[0])
  };
}, mw = nm(), Ur = "data-scroll-locked", vw = function(n, o, u, s) {
  var c = n.left, f = n.top, h = n.right, m = n.gap;
  return u === void 0 && (u = "margin"), `
  .`.concat(q1, ` {
   overflow: hidden `).concat(s, `;
   padding-right: `).concat(m, "px ").concat(s, `;
  }
  body[`).concat(Ur, `] {
    overflow: hidden `).concat(s, `;
    overscroll-behavior: contain;
    `).concat([
    o && "position: relative ".concat(s, ";"),
    u === "margin" && `
    padding-left: `.concat(c, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(h, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(m, "px ").concat(s, `;
    `),
    u === "padding" && "padding-right: ".concat(m, "px ").concat(s, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Pu, ` {
    right: `).concat(m, "px ").concat(s, `;
  }
  
  .`).concat(Nu, ` {
    margin-right: `).concat(m, "px ").concat(s, `;
  }
  
  .`).concat(Pu, " .").concat(Pu, ` {
    right: 0 `).concat(s, `;
  }
  
  .`).concat(Nu, " .").concat(Nu, ` {
    margin-right: 0 `).concat(s, `;
  }
  
  body[`).concat(Ur, `] {
    `).concat(Z1, ": ").concat(m, `px;
  }
`);
}, Dp = function() {
  var n = parseInt(document.body.getAttribute(Ur) || "0", 10);
  return isFinite(n) ? n : 0;
}, gw = function() {
  O.useEffect(function() {
    return document.body.setAttribute(Ur, (Dp() + 1).toString()), function() {
      var n = Dp() - 1;
      n <= 0 ? document.body.removeAttribute(Ur) : document.body.setAttribute(Ur, n.toString());
    };
  }, []);
}, yw = function(n) {
  var o = n.noRelative, u = n.noImportant, s = n.gapMode, c = s === void 0 ? "margin" : s;
  gw();
  var f = O.useMemo(function() {
    return hw(c);
  }, [c]);
  return O.createElement(mw, { styles: vw(f, !o, c, u ? "" : "!important") });
}, Aa = !1;
if (typeof window < "u")
  try {
    var gu = Object.defineProperty({}, "passive", {
      get: function() {
        return Aa = !0, !0;
      }
    });
    window.addEventListener("test", gu, gu), window.removeEventListener("test", gu, gu);
  } catch {
    Aa = !1;
  }
var Fr = Aa ? { passive: !1 } : !1, ww = function(n) {
  return n.tagName === "TEXTAREA";
}, rm = function(n, o) {
  if (!(n instanceof Element))
    return !1;
  var u = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    u[o] !== "hidden" && // contains scroll inside self
    !(u.overflowY === u.overflowX && !ww(n) && u[o] === "visible")
  );
}, Sw = function(n) {
  return rm(n, "overflowY");
}, Ew = function(n) {
  return rm(n, "overflowX");
}, Ap = function(n, o) {
  var u = o.ownerDocument, s = o;
  do {
    typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
    var c = om(n, s);
    if (c) {
      var f = im(n, s), h = f[1], m = f[2];
      if (h > m)
        return !0;
    }
    s = s.parentNode;
  } while (s && s !== u.body);
  return !1;
}, kw = function(n) {
  var o = n.scrollTop, u = n.scrollHeight, s = n.clientHeight;
  return [
    o,
    u,
    s
  ];
}, xw = function(n) {
  var o = n.scrollLeft, u = n.scrollWidth, s = n.clientWidth;
  return [
    o,
    u,
    s
  ];
}, om = function(n, o) {
  return n === "v" ? Sw(o) : Ew(o);
}, im = function(n, o) {
  return n === "v" ? kw(o) : xw(o);
}, Cw = function(n, o) {
  return n === "h" && o === "rtl" ? -1 : 1;
}, _w = function(n, o, u, s, c) {
  var f = Cw(n, window.getComputedStyle(o).direction), h = f * s, m = u.target, g = o.contains(m), C = !1, w = h > 0, x = 0, E = 0;
  do {
    if (!m)
      break;
    var D = im(n, m), L = D[0], P = D[1], A = D[2], I = P - A - f * L;
    (L || I) && om(n, m) && (x += I, E += L);
    var B = m.parentNode;
    m = B && B.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? B.host : B;
  } while (
    // portaled content
    !g && m !== document.body || // self content
    g && (o.contains(m) || o === m)
  );
  return (w && Math.abs(x) < 1 || !w && Math.abs(E) < 1) && (C = !0), C;
}, yu = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, Lp = function(n) {
  return [n.deltaX, n.deltaY];
}, Ip = function(n) {
  return n && "current" in n ? n.current : n;
}, Pw = function(n, o) {
  return n[0] === o[0] && n[1] === o[1];
}, Nw = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, Rw = 0, jr = [];
function Ow(n) {
  var o = O.useRef([]), u = O.useRef([0, 0]), s = O.useRef(), c = O.useState(Rw++)[0], f = O.useState(nm)[0], h = O.useRef(n);
  O.useEffect(function() {
    h.current = n;
  }, [n]), O.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(c));
      var P = X1([n.lockRef.current], (n.shards || []).map(Ip), !0).filter(Boolean);
      return P.forEach(function(A) {
        return A.classList.add("allow-interactivity-".concat(c));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(c)), P.forEach(function(A) {
          return A.classList.remove("allow-interactivity-".concat(c));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var m = O.useCallback(function(P, A) {
    if ("touches" in P && P.touches.length === 2 || P.type === "wheel" && P.ctrlKey)
      return !h.current.allowPinchZoom;
    var I = yu(P), B = u.current, F = "deltaX" in P ? P.deltaX : B[0] - I[0], M = "deltaY" in P ? P.deltaY : B[1] - I[1], W, V = P.target, j = Math.abs(F) > Math.abs(M) ? "h" : "v";
    if ("touches" in P && j === "h" && V.type === "range")
      return !1;
    var ae = Ap(j, V);
    if (!ae)
      return !0;
    if (ae ? W = j : (W = j === "v" ? "h" : "v", ae = Ap(j, V)), !ae)
      return !1;
    if (!s.current && "changedTouches" in P && (F || M) && (s.current = W), !W)
      return !0;
    var le = s.current || W;
    return _w(le, A, P, le === "h" ? F : M);
  }, []), g = O.useCallback(function(P) {
    var A = P;
    if (!(!jr.length || jr[jr.length - 1] !== f)) {
      var I = "deltaY" in A ? Lp(A) : yu(A), B = o.current.filter(function(W) {
        return W.name === A.type && (W.target === A.target || A.target === W.shadowParent) && Pw(W.delta, I);
      })[0];
      if (B && B.should) {
        A.cancelable && A.preventDefault();
        return;
      }
      if (!B) {
        var F = (h.current.shards || []).map(Ip).filter(Boolean).filter(function(W) {
          return W.contains(A.target);
        }), M = F.length > 0 ? m(A, F[0]) : !h.current.noIsolation;
        M && A.cancelable && A.preventDefault();
      }
    }
  }, []), C = O.useCallback(function(P, A, I, B) {
    var F = { name: P, delta: A, target: I, should: B, shadowParent: Tw(I) };
    o.current.push(F), setTimeout(function() {
      o.current = o.current.filter(function(M) {
        return M !== F;
      });
    }, 1);
  }, []), w = O.useCallback(function(P) {
    u.current = yu(P), s.current = void 0;
  }, []), x = O.useCallback(function(P) {
    C(P.type, Lp(P), P.target, m(P, n.lockRef.current));
  }, []), E = O.useCallback(function(P) {
    C(P.type, yu(P), P.target, m(P, n.lockRef.current));
  }, []);
  O.useEffect(function() {
    return jr.push(f), n.setCallbacks({
      onScrollCapture: x,
      onWheelCapture: x,
      onTouchMoveCapture: E
    }), document.addEventListener("wheel", g, Fr), document.addEventListener("touchmove", g, Fr), document.addEventListener("touchstart", w, Fr), function() {
      jr = jr.filter(function(P) {
        return P !== f;
      }), document.removeEventListener("wheel", g, Fr), document.removeEventListener("touchmove", g, Fr), document.removeEventListener("touchstart", w, Fr);
    };
  }, []);
  var D = n.removeScrollBar, L = n.inert;
  return O.createElement(
    O.Fragment,
    null,
    L ? O.createElement(f, { styles: Nw(c) }) : null,
    D ? O.createElement(yw, { noRelative: n.noRelative, gapMode: n.gapMode }) : null
  );
}
function Tw(n) {
  for (var o = null; n !== null; )
    n instanceof ShadowRoot && (o = n.host, n = n.host), n = n.parentNode;
  return o;
}
const Dw = iw(tm, Ow);
var um = O.forwardRef(function(n, o) {
  return O.createElement(Xu, Gt({}, n, { ref: o, sideCar: Dw }));
});
um.classNames = Xu.classNames;
var Aw = function(n) {
  if (typeof document > "u")
    return null;
  var o = Array.isArray(n) ? n[0] : n;
  return o.ownerDocument.body;
}, zr = /* @__PURE__ */ new WeakMap(), wu = /* @__PURE__ */ new WeakMap(), Su = {}, pa = 0, lm = function(n) {
  return n && (n.host || lm(n.parentNode));
}, Lw = function(n, o) {
  return o.map(function(u) {
    if (n.contains(u))
      return u;
    var s = lm(u);
    return s && n.contains(s) ? s : (console.error("aria-hidden", u, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(u) {
    return !!u;
  });
}, Iw = function(n, o, u, s) {
  var c = Lw(o, Array.isArray(n) ? n : [n]);
  Su[u] || (Su[u] = /* @__PURE__ */ new WeakMap());
  var f = Su[u], h = [], m = /* @__PURE__ */ new Set(), g = new Set(c), C = function(x) {
    !x || m.has(x) || (m.add(x), C(x.parentNode));
  };
  c.forEach(C);
  var w = function(x) {
    !x || g.has(x) || Array.prototype.forEach.call(x.children, function(E) {
      if (m.has(E))
        w(E);
      else
        try {
          var D = E.getAttribute(s), L = D !== null && D !== "false", P = (zr.get(E) || 0) + 1, A = (f.get(E) || 0) + 1;
          zr.set(E, P), f.set(E, A), h.push(E), P === 1 && L && wu.set(E, !0), A === 1 && E.setAttribute(u, "true"), L || E.setAttribute(s, "true");
        } catch (I) {
          console.error("aria-hidden: cannot operate on ", E, I);
        }
    });
  };
  return w(o), m.clear(), pa++, function() {
    h.forEach(function(x) {
      var E = zr.get(x) - 1, D = f.get(x) - 1;
      zr.set(x, E), f.set(x, D), E || (wu.has(x) || x.removeAttribute(s), wu.delete(x)), D || x.removeAttribute(u);
    }), pa--, pa || (zr = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), wu = /* @__PURE__ */ new WeakMap(), Su = {});
  };
}, Mw = function(n, o, u) {
  u === void 0 && (u = "data-aria-hidden");
  var s = Array.from(Array.isArray(n) ? n : [n]), c = Aw(n);
  return c ? (s.push.apply(s, Array.from(c.querySelectorAll("[aria-live], script"))), Iw(s, c, u, "aria-hidden")) : function() {
    return null;
  };
}, qu = "Dialog", [sm, DS] = m1(qu), [Fw, Bt] = sm(qu), am = (n) => {
  const {
    __scopeDialog: o,
    children: u,
    open: s,
    defaultOpen: c,
    onOpenChange: f,
    modal: h = !0
  } = n, m = O.useRef(null), g = O.useRef(null), [C, w] = S1({
    prop: s,
    defaultProp: c ?? !1,
    onChange: f,
    caller: qu
  });
  return /* @__PURE__ */ J.jsx(
    Fw,
    {
      scope: o,
      triggerRef: m,
      contentRef: g,
      contentId: ua(),
      titleId: ua(),
      descriptionId: ua(),
      open: C,
      onOpenChange: w,
      onOpenToggle: O.useCallback(() => w((x) => !x), [w]),
      modal: h,
      children: u
    }
  );
};
am.displayName = qu;
var cm = "DialogTrigger", fm = O.forwardRef(
  (n, o) => {
    const { __scopeDialog: u, ...s } = n, c = Bt(cm, u), f = ar(o, c.triggerRef);
    return /* @__PURE__ */ J.jsx(
      pn.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": c.open,
        "aria-controls": c.contentId,
        "data-state": Xa(c.open),
        ...s,
        ref: f,
        onClick: jn(n.onClick, c.onOpenToggle)
      }
    );
  }
);
fm.displayName = cm;
var Ga = "DialogPortal", [jw, dm] = sm(Ga, {
  forceMount: void 0
}), pm = (n) => {
  const { __scopeDialog: o, forceMount: u, children: s, container: c } = n, f = Bt(Ga, o);
  return /* @__PURE__ */ J.jsx(jw, { scope: o, forceMount: u, children: O.Children.map(s, (h) => /* @__PURE__ */ J.jsx(Yu, { present: u || f.open, children: /* @__PURE__ */ J.jsx(Zh, { asChild: !0, container: c, children: h }) })) });
};
pm.displayName = Ga;
var ju = "DialogOverlay", hm = O.forwardRef(
  (n, o) => {
    const u = dm(ju, n.__scopeDialog), { forceMount: s = u.forceMount, ...c } = n, f = Bt(ju, n.__scopeDialog);
    return f.modal ? /* @__PURE__ */ J.jsx(Yu, { present: s || f.open, children: /* @__PURE__ */ J.jsx(Bw, { ...c, ref: o }) }) : null;
  }
);
hm.displayName = ju;
var zw = /* @__PURE__ */ Hh("DialogOverlay.RemoveScroll"), Bw = O.forwardRef(
  (n, o) => {
    const { __scopeDialog: u, ...s } = n, c = Bt(ju, u);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ J.jsx(um, { as: zw, allowPinchZoom: !0, shards: [c.contentRef], children: /* @__PURE__ */ J.jsx(
        pn.div,
        {
          "data-state": Xa(c.open),
          ...s,
          ref: o,
          style: { pointerEvents: "auto", ...s.style }
        }
      ) })
    );
  }
), sr = "DialogContent", mm = O.forwardRef(
  (n, o) => {
    const u = dm(sr, n.__scopeDialog), { forceMount: s = u.forceMount, ...c } = n, f = Bt(sr, n.__scopeDialog);
    return /* @__PURE__ */ J.jsx(Yu, { present: s || f.open, children: f.modal ? /* @__PURE__ */ J.jsx($w, { ...c, ref: o }) : /* @__PURE__ */ J.jsx(Uw, { ...c, ref: o }) });
  }
);
mm.displayName = sr;
var $w = O.forwardRef(
  (n, o) => {
    const u = Bt(sr, n.__scopeDialog), s = O.useRef(null), c = ar(o, u.contentRef, s);
    return O.useEffect(() => {
      const f = s.current;
      if (f) return Mw(f);
    }, []), /* @__PURE__ */ J.jsx(
      vm,
      {
        ...n,
        ref: c,
        trapFocus: u.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: jn(n.onCloseAutoFocus, (f) => {
          var h;
          f.preventDefault(), (h = u.triggerRef.current) == null || h.focus();
        }),
        onPointerDownOutside: jn(n.onPointerDownOutside, (f) => {
          const h = f.detail.originalEvent, m = h.button === 0 && h.ctrlKey === !0;
          (h.button === 2 || m) && f.preventDefault();
        }),
        onFocusOutside: jn(
          n.onFocusOutside,
          (f) => f.preventDefault()
        )
      }
    );
  }
), Uw = O.forwardRef(
  (n, o) => {
    const u = Bt(sr, n.__scopeDialog), s = O.useRef(!1), c = O.useRef(!1);
    return /* @__PURE__ */ J.jsx(
      vm,
      {
        ...n,
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (f) => {
          var h, m;
          (h = n.onCloseAutoFocus) == null || h.call(n, f), f.defaultPrevented || (s.current || (m = u.triggerRef.current) == null || m.focus(), f.preventDefault()), s.current = !1, c.current = !1;
        },
        onInteractOutside: (f) => {
          var g, C;
          (g = n.onInteractOutside) == null || g.call(n, f), f.defaultPrevented || (s.current = !0, f.detail.originalEvent.type === "pointerdown" && (c.current = !0));
          const h = f.target;
          ((C = u.triggerRef.current) == null ? void 0 : C.contains(h)) && f.preventDefault(), f.detail.originalEvent.type === "focusin" && c.current && f.preventDefault();
        }
      }
    );
  }
), vm = O.forwardRef(
  (n, o) => {
    const { __scopeDialog: u, trapFocus: s, onOpenAutoFocus: c, onCloseAutoFocus: f, ...h } = n, m = Bt(sr, u), g = O.useRef(null), C = ar(o, g);
    return Y1(), /* @__PURE__ */ J.jsxs(J.Fragment, { children: [
      /* @__PURE__ */ J.jsx(
        Xh,
        {
          asChild: !0,
          loop: !0,
          trapped: s,
          onMountAutoFocus: c,
          onUnmountAutoFocus: f,
          children: /* @__PURE__ */ J.jsx(
            Gh,
            {
              role: "dialog",
              id: m.contentId,
              "aria-describedby": m.descriptionId,
              "aria-labelledby": m.titleId,
              "data-state": Xa(m.open),
              ...h,
              ref: C,
              onDismiss: () => m.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ J.jsxs(J.Fragment, { children: [
        /* @__PURE__ */ J.jsx(Ww, { titleId: m.titleId }),
        /* @__PURE__ */ J.jsx(Vw, { contentRef: g, descriptionId: m.descriptionId })
      ] })
    ] });
  }
), Ya = "DialogTitle", gm = O.forwardRef(
  (n, o) => {
    const { __scopeDialog: u, ...s } = n, c = Bt(Ya, u);
    return /* @__PURE__ */ J.jsx(pn.h2, { id: c.titleId, ...s, ref: o });
  }
);
gm.displayName = Ya;
var ym = "DialogDescription", wm = O.forwardRef(
  (n, o) => {
    const { __scopeDialog: u, ...s } = n, c = Bt(ym, u);
    return /* @__PURE__ */ J.jsx(pn.p, { id: c.descriptionId, ...s, ref: o });
  }
);
wm.displayName = ym;
var Sm = "DialogClose", Em = O.forwardRef(
  (n, o) => {
    const { __scopeDialog: u, ...s } = n, c = Bt(Sm, u);
    return /* @__PURE__ */ J.jsx(
      pn.button,
      {
        type: "button",
        ...s,
        ref: o,
        onClick: jn(n.onClick, () => c.onOpenChange(!1))
      }
    );
  }
);
Em.displayName = Sm;
function Xa(n) {
  return n ? "open" : "closed";
}
var km = "DialogTitleWarning", [AS, xm] = h1(km, {
  contentName: sr,
  titleName: Ya,
  docsSlug: "dialog"
}), Ww = ({ titleId: n }) => {
  const o = xm(km), u = `\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;
  return O.useEffect(() => {
    n && (document.getElementById(n) || console.error(u));
  }, [u, n]), null;
}, bw = "DialogDescriptionWarning", Vw = ({ contentRef: n, descriptionId: o }) => {
  const s = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${xm(bw).contentName}}.`;
  return O.useEffect(() => {
    var f;
    const c = (f = n.current) == null ? void 0 : f.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(s));
  }, [s, n, o]), null;
}, Hw = am, LS = fm, Qw = pm, Kw = hm, Gw = mm, Yw = gm, Xw = wm, IS = Em;
const qw = zt.button`
  cursor: pointer;
  background-color: var(${Xe.buttonSecondaryBackground});
  color: var(${Xe.buttonSecondaryForeground});
  border: 1px solid var(${Xe.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    background-color: var(${Xe.buttonSecondaryHoverBackground});
  }
`, Zw = zt.button`
  cursor: pointer;
  background-color: var(${Xe.buttonBackground});
  color: var(${Xe.buttonForeground});
  border: 1px solid var(${Xe.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${Xe.focusBorder});
  }
`, Jw = {
  open: !1,
  title: "",
  message: "",
  actions: []
}, Cm = $a({
  name: "confirmationDialog",
  initialState: Jw,
  reducers: {
    requestConfirmation: (n, {
      payload: { title: o, message: u, actions: s }
    }) => {
      n.open = !0, n.message = u, n.title = o, n.actions = s;
    },
    accept: (n) => {
      n.open = !1, n.title = "", n.message = "", n.actions = [];
    },
    reject: (n) => {
      n.open = !1, n.title = "", n.message = "", n.actions = [];
    }
  }
}), { requestConfirmation: MS, accept: eS, reject: tS } = Cm.actions, nS = $p, rS = Ma, FS = Cm.reducer;
function oS() {
  const n = nS(), o = () => n(eS()), u = () => n(tS()), { open: s, title: c, message: f } = rS((h) => h.confirmationDialog);
  return /* @__PURE__ */ J.jsx(Hw, { open: s, children: /* @__PURE__ */ J.jsxs(Qw, { children: [
    /* @__PURE__ */ J.jsx(iS, {}),
    /* @__PURE__ */ J.jsxs(uS, { onEscapeKeyDown: u, children: [
      /* @__PURE__ */ J.jsx(Yw, { children: c }),
      /* @__PURE__ */ J.jsx(Xw, { children: f }),
      /* @__PURE__ */ J.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
        /* @__PURE__ */ J.jsx(qw, { onClick: u, children: "Cancel" }),
        /* @__PURE__ */ J.jsx(Zw, { onClick: o, children: "Confirm" })
      ] })
    ] })
  ] }) });
}
const iS = zt(Kw)`
  background-color: var(${Xe.computedTwo});
  position: fixed;
  inset: 0;
`, uS = zt(Gw)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  background-color: var(${Xe.background});
  color: var(${Xe.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;
function jS(n, o) {
  return function(s) {
    const { command: c, payload: f } = s.data;
    if (c) {
      const h = o[c];
      if (h) {
        const m = h(f);
        m ? n.dispatch(m) : console.log(`Skipping dispatch for command: ${c}`);
      } else
        console.error(`Unable to find handler for command: ${c}`);
    } else
      console.error("Received message with unknown command", s.data);
  };
}
function zS(n) {
  const o = Object.keys(n);
  for (const u of o)
    n[u] ? (console.log("starting listener for: ", u), n[u]()) : console.log("skipping listener for: ", u);
}
function lS({ error: n }) {
  return /* @__PURE__ */ J.jsxs("div", { children: [
    /* @__PURE__ */ J.jsx("p", { children: "Unexpected error:" }),
    /* @__PURE__ */ J.jsx("pre", { children: n.message })
  ] });
}
function BS() {
  return /* @__PURE__ */ J.jsxs(e1, { FallbackComponent: lS, children: [
    /* @__PURE__ */ J.jsx(r1, {}),
    /* @__PURE__ */ J.jsx(oS, {}),
    /* @__PURE__ */ J.jsx(sS, { children: /* @__PURE__ */ J.jsx(s1, {}) }),
    /* @__PURE__ */ J.jsx(aS, { children: /* @__PURE__ */ J.jsx(u1, {}) })
  ] });
}
const sS = zt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 35px;
`, aS = zt.div`
  position: fixed;
  top: 35px;
  left: 0;
  right: 0;
  bottom: 0;
`, $S = (n) => /* @__PURE__ */ J.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ J.jsx("path", { d: "M506.3 417 293 53c-8.2-14-22.6-21-37-21s-28.8 7-37.9 21L4.9 417c-15.49 27.9 4.951 63 37.84 63h426.6c32.76 0 53.26-35 36.96-63M52.58 432 255.1 84.8 459.4 432zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44s14.11 31.44 31.48 31.44 31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1M232 184v96c0 13.3 10.8 24 24 24s24-10.75 24-24v-96c0-13.2-10.7-24-24-24s-24 10.8-24 24" }) });
export {
  Y1 as $,
  pn as A,
  Zw as B,
  jn as C,
  Hw as D,
  LS as E,
  Qw as F,
  Yw as G,
  Xw as H,
  IS as I,
  qw as J,
  Gw as K,
  Vh as L,
  qy as M,
  eS as N,
  Kw as O,
  hS as P,
  fS as Q,
  zn as R,
  $S as S,
  Xe as T,
  MS as U,
  Zy as V,
  BS as W,
  Yu as X,
  Zh as Y,
  ar as Z,
  Mw as _,
  ES as a,
  um as a0,
  Hh as a1,
  Xh as a2,
  Gh as a3,
  bh as a4,
  O1 as a5,
  S1 as a6,
  ua as a7,
  eh as a8,
  St as a9,
  gS as aa,
  Gp as ab,
  kS as ac,
  SS as ad,
  yy as ae,
  wy as af,
  wS as ag,
  Yg as ah,
  Fa as ai,
  qp as aj,
  tp as ak,
  Sa as al,
  gy as am,
  Yt as an,
  yS as ao,
  Wp as ap,
  Sy as aq,
  dn as ar,
  vS as as,
  mS as at,
  Wg as au,
  pS as av,
  Gt as aw,
  TS as ax,
  Qo as ay,
  Ma as b,
  $a as c,
  xS as d,
  zt as e,
  O as f,
  dS as g,
  Uh as h,
  Xo as i,
  J as j,
  jS as k,
  CS as l,
  OS as m,
  r1 as n,
  u1 as o,
  _S as p,
  cu as q,
  RS as r,
  zS as s,
  PS as t,
  $p as u,
  La as v,
  fn as w,
  FS as x,
  Ko as y,
  m1 as z
};
