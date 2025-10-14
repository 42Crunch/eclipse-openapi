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
var au = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Da(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function lS(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var o = n.default;
  if (typeof o == "function") {
    var u = function s() {
      var c = !1;
      try {
        c = this instanceof s;
      } catch {
      }
      return c ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
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
var Us = { exports: {} }, Lo = {}, Ws = { exports: {} }, fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld;
function kg() {
  if (Ld) return fe;
  Ld = 1;
  var n = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), x = Symbol.iterator;
  function k(p) {
    return p === null || typeof p != "object" ? null : (p = x && p[x] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var T = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, L = Object.assign, P = {};
  function I(p, y, C) {
    this.props = p, this.context = y, this.refs = P, this.updater = C || T;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(p, y) {
    if (typeof p != "object" && typeof p != "function" && p != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, y, "setState");
  }, I.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function M() {
  }
  M.prototype = I.prototype;
  function B(p, y, C) {
    this.props = p, this.context = y, this.refs = P, this.updater = C || T;
  }
  var A = B.prototype = new M();
  A.constructor = B, L(A, I.prototype), A.isPureReactComponent = !0;
  var j = Array.isArray, W = Object.prototype.hasOwnProperty, Q = { current: null }, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ie(p, y, C) {
    var z, H = {}, G = null, J = null;
    if (y != null) for (z in y.ref !== void 0 && (J = y.ref), y.key !== void 0 && (G = "" + y.key), y) W.call(y, z) && !F.hasOwnProperty(z) && (H[z] = y[z]);
    var q = arguments.length - 2;
    if (q === 1) H.children = C;
    else if (1 < q) {
      for (var ae = Array(q), ge = 0; ge < q; ge++) ae[ge] = arguments[ge + 2];
      H.children = ae;
    }
    if (p && p.defaultProps) for (z in q = p.defaultProps, q) H[z] === void 0 && (H[z] = q[z]);
    return { $$typeof: n, type: p, key: G, ref: J, props: H, _owner: Q.current };
  }
  function we(p, y) {
    return { $$typeof: n, type: p.type, key: y, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function Pe(p) {
    return typeof p == "object" && p !== null && p.$$typeof === n;
  }
  function ht(p) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(C) {
      return y[C];
    });
  }
  var Ve = /\/+/g;
  function He(p, y) {
    return typeof p == "object" && p !== null && p.key != null ? ht("" + p.key) : y.toString(36);
  }
  function qe(p, y, C, z, H) {
    var G = typeof p;
    (G === "undefined" || G === "boolean") && (p = null);
    var J = !1;
    if (p === null) J = !0;
    else switch (G) {
      case "string":
      case "number":
        J = !0;
        break;
      case "object":
        switch (p.$$typeof) {
          case n:
          case o:
            J = !0;
        }
    }
    if (J) return J = p, H = H(J), p = z === "" ? "." + He(J, 0) : z, j(H) ? (C = "", p != null && (C = p.replace(Ve, "$&/") + "/"), qe(H, y, C, "", function(ge) {
      return ge;
    })) : H != null && (Pe(H) && (H = we(H, C + (!H.key || J && J.key === H.key ? "" : ("" + H.key).replace(Ve, "$&/") + "/") + p)), y.push(H)), 1;
    if (J = 0, z = z === "" ? "." : z + ":", j(p)) for (var q = 0; q < p.length; q++) {
      G = p[q];
      var ae = z + He(G, q);
      J += qe(G, y, C, ae, H);
    }
    else if (ae = k(p), typeof ae == "function") for (p = ae.call(p), q = 0; !(G = p.next()).done; ) G = G.value, ae = z + He(G, q++), J += qe(G, y, C, ae, H);
    else if (G === "object") throw y = String(p), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return J;
  }
  function je(p, y, C) {
    if (p == null) return p;
    var z = [], H = 0;
    return qe(p, z, "", "", function(G) {
      return y.call(C, G, H++);
    }), z;
  }
  function Fe(p) {
    if (p._status === -1) {
      var y = p._result;
      y = y(), y.then(function(C) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = C);
      }, function(C) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = C);
      }), p._status === -1 && (p._status = 0, p._result = y);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var he = { current: null }, K = { transition: null }, ne = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: K, ReactCurrentOwner: Q };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return fe.Children = { map: je, forEach: function(p, y, C) {
    je(p, function() {
      y.apply(this, arguments);
    }, C);
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
    if (!Pe(p)) throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } }, fe.Component = I, fe.Fragment = u, fe.Profiler = c, fe.PureComponent = B, fe.StrictMode = s, fe.Suspense = g, fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne, fe.act = Y, fe.cloneElement = function(p, y, C) {
    if (p == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + p + ".");
    var z = L({}, p.props), H = p.key, G = p.ref, J = p._owner;
    if (y != null) {
      if (y.ref !== void 0 && (G = y.ref, J = Q.current), y.key !== void 0 && (H = "" + y.key), p.type && p.type.defaultProps) var q = p.type.defaultProps;
      for (ae in y) W.call(y, ae) && !F.hasOwnProperty(ae) && (z[ae] = y[ae] === void 0 && q !== void 0 ? q[ae] : y[ae]);
    }
    var ae = arguments.length - 2;
    if (ae === 1) z.children = C;
    else if (1 < ae) {
      q = Array(ae);
      for (var ge = 0; ge < ae; ge++) q[ge] = arguments[ge + 2];
      z.children = q;
    }
    return { $$typeof: n, type: p.type, key: H, ref: G, props: z, _owner: J };
  }, fe.createContext = function(p) {
    return p = { $$typeof: h, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, p.Provider = { $$typeof: f, _context: p }, p.Consumer = p;
  }, fe.createElement = ie, fe.createFactory = function(p) {
    var y = ie.bind(null, p);
    return y.type = p, y;
  }, fe.createRef = function() {
    return { current: null };
  }, fe.forwardRef = function(p) {
    return { $$typeof: m, render: p };
  }, fe.isValidElement = Pe, fe.lazy = function(p) {
    return { $$typeof: S, _payload: { _status: -1, _result: p }, _init: Fe };
  }, fe.memo = function(p, y) {
    return { $$typeof: _, type: p, compare: y === void 0 ? null : y };
  }, fe.startTransition = function(p) {
    var y = K.transition;
    K.transition = {};
    try {
      p();
    } finally {
      K.transition = y;
    }
  }, fe.unstable_act = Y, fe.useCallback = function(p, y) {
    return he.current.useCallback(p, y);
  }, fe.useContext = function(p) {
    return he.current.useContext(p);
  }, fe.useDebugValue = function() {
  }, fe.useDeferredValue = function(p) {
    return he.current.useDeferredValue(p);
  }, fe.useEffect = function(p, y) {
    return he.current.useEffect(p, y);
  }, fe.useId = function() {
    return he.current.useId();
  }, fe.useImperativeHandle = function(p, y, C) {
    return he.current.useImperativeHandle(p, y, C);
  }, fe.useInsertionEffect = function(p, y) {
    return he.current.useInsertionEffect(p, y);
  }, fe.useLayoutEffect = function(p, y) {
    return he.current.useLayoutEffect(p, y);
  }, fe.useMemo = function(p, y) {
    return he.current.useMemo(p, y);
  }, fe.useReducer = function(p, y, C) {
    return he.current.useReducer(p, y, C);
  }, fe.useRef = function(p) {
    return he.current.useRef(p);
  }, fe.useState = function(p) {
    return he.current.useState(p);
  }, fe.useSyncExternalStore = function(p, y, C) {
    return he.current.useSyncExternalStore(p, y, C);
  }, fe.useTransition = function() {
    return he.current.useTransition();
  }, fe.version = "18.3.1", fe;
}
var Id;
function zu() {
  return Id || (Id = 1, Ws.exports = kg()), Ws.exports;
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
var Md;
function xg() {
  if (Md) return Lo;
  Md = 1;
  var n = zu(), o = Symbol.for("react.element"), u = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(m, g, _) {
    var S, x = {}, k = null, T = null;
    _ !== void 0 && (k = "" + _), g.key !== void 0 && (k = "" + g.key), g.ref !== void 0 && (T = g.ref);
    for (S in g) s.call(g, S) && !f.hasOwnProperty(S) && (x[S] = g[S]);
    if (m && m.defaultProps) for (S in g = m.defaultProps, g) x[S] === void 0 && (x[S] = g[S]);
    return { $$typeof: o, type: m, key: k, ref: T, props: x, _owner: c.current };
  }
  return Lo.Fragment = u, Lo.jsx = h, Lo.jsxs = h, Lo;
}
var jd;
function Cg() {
  return jd || (jd = 1, Us.exports = xg()), Us.exports;
}
var X = Cg(), O = zu();
const Fn = /* @__PURE__ */ Da(O), Lp = /* @__PURE__ */ Eg({
  __proto__: null,
  default: Fn
}, [O]);
var cu = {}, bs = { exports: {} }, ft = {}, Vs = { exports: {} }, Hs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fd;
function _g() {
  return Fd || (Fd = 1, (function(n) {
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
        e: for (var p = 0, y = K.length, C = y >>> 1; p < C; ) {
          var z = 2 * (p + 1) - 1, H = K[z], G = z + 1, J = K[G];
          if (0 > c(H, Y)) G < y && 0 > c(J, H) ? (K[p] = J, K[G] = Y, p = G) : (K[p] = H, K[z] = Y, p = z);
          else if (G < y && 0 > c(J, Y)) K[p] = J, K[G] = Y, p = G;
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
    var g = [], _ = [], S = 1, x = null, k = 3, T = !1, L = !1, P = !1, I = typeof setTimeout == "function" ? setTimeout : null, M = typeof clearTimeout == "function" ? clearTimeout : null, B = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function A(K) {
      for (var ne = u(_); ne !== null; ) {
        if (ne.callback === null) s(_);
        else if (ne.startTime <= K) s(_), ne.sortIndex = ne.expirationTime, o(g, ne);
        else break;
        ne = u(_);
      }
    }
    function j(K) {
      if (P = !1, A(K), !L) if (u(g) !== null) L = !0, Fe(W);
      else {
        var ne = u(_);
        ne !== null && he(j, ne.startTime - K);
      }
    }
    function W(K, ne) {
      L = !1, P && (P = !1, M(ie), ie = -1), T = !0;
      var Y = k;
      try {
        for (A(ne), x = u(g); x !== null && (!(x.expirationTime > ne) || K && !ht()); ) {
          var p = x.callback;
          if (typeof p == "function") {
            x.callback = null, k = x.priorityLevel;
            var y = p(x.expirationTime <= ne);
            ne = n.unstable_now(), typeof y == "function" ? x.callback = y : x === u(g) && s(g), A(ne);
          } else s(g);
          x = u(g);
        }
        if (x !== null) var C = !0;
        else {
          var z = u(_);
          z !== null && he(j, z.startTime - ne), C = !1;
        }
        return C;
      } finally {
        x = null, k = Y, T = !1;
      }
    }
    var Q = !1, F = null, ie = -1, we = 5, Pe = -1;
    function ht() {
      return !(n.unstable_now() - Pe < we);
    }
    function Ve() {
      if (F !== null) {
        var K = n.unstable_now();
        Pe = K;
        var ne = !0;
        try {
          ne = F(!0, K);
        } finally {
          ne ? He() : (Q = !1, F = null);
        }
      } else Q = !1;
    }
    var He;
    if (typeof B == "function") He = function() {
      B(Ve);
    };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), je = qe.port2;
      qe.port1.onmessage = Ve, He = function() {
        je.postMessage(null);
      };
    } else He = function() {
      I(Ve, 0);
    };
    function Fe(K) {
      F = K, Q || (Q = !0, He());
    }
    function he(K, ne) {
      ie = I(function() {
        K(n.unstable_now());
      }, ne);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(K) {
      K.callback = null;
    }, n.unstable_continueExecution = function() {
      L || T || (L = !0, Fe(W));
    }, n.unstable_forceFrameRate = function(K) {
      0 > K || 125 < K ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : we = 0 < K ? Math.floor(1e3 / K) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, n.unstable_getFirstCallbackNode = function() {
      return u(g);
    }, n.unstable_next = function(K) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = k;
      }
      var Y = k;
      k = ne;
      try {
        return K();
      } finally {
        k = Y;
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
      var Y = k;
      k = K;
      try {
        return ne();
      } finally {
        k = Y;
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
      return y = Y + y, K = { id: S++, callback: ne, priorityLevel: K, startTime: Y, expirationTime: y, sortIndex: -1 }, Y > p ? (K.sortIndex = Y, o(_, K), u(g) === null && K === u(_) && (P ? (M(ie), ie = -1) : P = !0, he(j, Y - p))) : (K.sortIndex = y, o(g, K), L || T || (L = !0, Fe(W))), K;
    }, n.unstable_shouldYield = ht, n.unstable_wrapCallback = function(K) {
      var ne = k;
      return function() {
        var Y = k;
        k = ne;
        try {
          return K.apply(this, arguments);
        } finally {
          k = Y;
        }
      };
    };
  })(Hs)), Hs;
}
var zd;
function Pg() {
  return zd || (zd = 1, Vs.exports = _g()), Vs.exports;
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
var Bd;
function Rg() {
  if (Bd) return ft;
  Bd = 1;
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
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, S = {}, x = {};
  function k(e) {
    return g.call(x, e) ? !0 : g.call(S, e) ? !1 : _.test(e) ? x[e] = !0 : (S[e] = !0, !1);
  }
  function T(e, t, r, i) {
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
    if (t === null || typeof t > "u" || T(e, t, r, i)) return !0;
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
  var I = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    I[e] = new P(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    I[t] = new P(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    I[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    I[e] = new P(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    I[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    I[e] = new P(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    I[e] = new P(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    I[e] = new P(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    I[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var M = /[\-:]([a-z])/g;
  function B(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      M,
      B
    );
    I[t] = new P(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(M, B);
    I[t] = new P(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(M, B);
    I[t] = new P(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    I[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), I.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    I[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function A(e, t, r, i) {
    var l = I.hasOwnProperty(t) ? I[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (L(t, r, l, i) && (r = null), i || l === null ? k(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : l.mustUseProperty ? e[l.propertyName] = r === null ? l.type === 3 ? !1 : "" : r : (t = l.attributeName, i = l.attributeNamespace, r === null ? e.removeAttribute(t) : (l = l.type, r = l === 3 || l === 4 && r === !0 ? "" : "" + r, i ? e.setAttributeNS(i, t, r) : e.setAttribute(t, r))));
  }
  var j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, W = Symbol.for("react.element"), Q = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), we = Symbol.for("react.profiler"), Pe = Symbol.for("react.provider"), ht = Symbol.for("react.context"), Ve = Symbol.for("react.forward_ref"), He = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), je = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), he = Symbol.for("react.offscreen"), K = Symbol.iterator;
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
  var C = !1;
  function z(e, t) {
    if (!e || C) return "";
    C = !0;
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
        } catch (D) {
          var i = D;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (D) {
          i = D;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (D) {
          i = D;
        }
        e();
      }
    } catch (D) {
      if (D && i && typeof D.stack == "string") {
        for (var l = D.stack.split(`
`), a = i.stack.split(`
`), d = l.length - 1, v = a.length - 1; 1 <= d && 0 <= v && l[d] !== a[v]; ) v--;
        for (; 1 <= d && 0 <= v; d--, v--) if (l[d] !== a[v]) {
          if (d !== 1 || v !== 1)
            do
              if (d--, v--, 0 > v || l[d] !== a[v]) {
                var w = `
` + l[d].replace(" at new ", " at ");
                return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
              }
            while (1 <= d && 0 <= v);
          break;
        }
      }
    } finally {
      C = !1, Error.prepareStackTrace = r;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function H(e) {
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
      case F:
        return "Fragment";
      case Q:
        return "Portal";
      case we:
        return "Profiler";
      case ie:
        return "StrictMode";
      case He:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ht:
        return (e.displayName || "Context") + ".Consumer";
      case Pe:
        return (e._context.displayName || "Context") + ".Provider";
      case Ve:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case je:
        return t = e.displayName || null, t !== null ? t : G(e.type) || "Memo";
      case Fe:
        t = e._payload, e = e._init;
        try {
          return G(e(t));
        } catch {
        }
    }
    return null;
  }
  function J(e) {
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
        return t === ie ? "StrictMode" : "Mode";
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
  function q(e) {
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
  function ae(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ge(e) {
    var t = ae(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
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
  function Ne(e) {
    e._valueTracker || (e._valueTracker = ge(e));
  }
  function Se(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), i = "";
    return e && (i = ae(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== r ? (t.setValue(e), !0) : !1;
  }
  function Ze(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function me(e, t) {
    var r = t.checked;
    return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
  }
  function Bt(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    r = q(t.value != null ? t.value : r), e._wrapperState = { initialChecked: i, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Et(e, t) {
    t = t.checked, t != null && A(e, "checked", t, !1);
  }
  function ke(e, t) {
    Et(e, t);
    var r = q(t.value), i = t.type;
    if (r != null) i === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Xt(e, t.type, r) : t.hasOwnProperty("defaultValue") && Xt(e, t.type, q(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Yt(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
  }
  function Xt(e, t, r) {
    (t !== "number" || Ze(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var mt = Array.isArray;
  function $t(e, t, r, i) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
      for (r = 0; r < e.length; r++) l = t.hasOwnProperty("$" + e[r].value), e[r].selected !== l && (e[r].selected = l), l && i && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + q(r), t = null, l = 0; l < e.length; l++) {
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
    e._wrapperState = { initialValue: q(r) };
  }
  function Zo(e, t) {
    var r = q(t.value), i = q(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), i != null && (e.defaultValue = "" + i);
  }
  function Jo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function pn(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function qt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? pn(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var hn, ar = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, i, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, r, i, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (hn = hn || document.createElement("div"), hn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = hn.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Zt(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Jt = {
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
  Object.keys(Jt).forEach(function(e) {
    Zu.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Jt[t] = Jt[e];
    });
  });
  function ei(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Jt.hasOwnProperty(e) && Jt[e] ? ("" + t).trim() : t + "px";
  }
  function ti(e, t) {
    e = e.style;
    for (var r in t) if (t.hasOwnProperty(r)) {
      var i = r.indexOf("--") === 0, l = ei(r, t[r], i);
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
  var rl = null, cr = null, fr = null;
  function Ya(e) {
    if (e = yo(e)) {
      if (typeof rl != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = Ci(t), rl(e.stateNode, e.type, t));
    }
  }
  function Xa(e) {
    cr ? fr ? fr.push(e) : fr = [e] : cr = e;
  }
  function qa() {
    if (cr) {
      var e = cr, t = fr;
      if (fr = cr = null, Ya(e), t) for (e = 0; e < t.length; e++) Ya(t[e]);
    }
  }
  function Za(e, t) {
    return e(t);
  }
  function Ja() {
  }
  var ol = !1;
  function ec(e, t, r) {
    if (ol) return e(t, r);
    ol = !0;
    try {
      return Za(e, t, r);
    } finally {
      ol = !1, (cr !== null || fr !== null) && (Ja(), qa());
    }
  }
  function Xr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var i = Ci(r);
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
  function Rm(e, t, r, i, l, a, d, v, w) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, D);
    } catch (U) {
      this.onError(U);
    }
  }
  var Zr = !1, ni = null, ri = !1, ul = null, Nm = { onError: function(e) {
    Zr = !0, ni = e;
  } };
  function Om(e, t, r, i, l, a, d, v, w) {
    Zr = !1, ni = null, Rm.apply(Nm, arguments);
  }
  function Tm(e, t, r, i, l, a, d, v, w) {
    if (Om.apply(this, arguments), Zr) {
      if (Zr) {
        var D = ni;
        Zr = !1, ni = null;
      } else throw Error(u(198));
      ri || (ri = !0, ul = D);
    }
  }
  function Bn(e) {
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
  function tc(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function nc(e) {
    if (Bn(e) !== e) throw Error(u(188));
  }
  function Dm(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Bn(e), t === null) throw Error(u(188));
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
          if (a === r) return nc(l), e;
          if (a === i) return nc(l), t;
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
  function rc(e) {
    return e = Dm(e), e !== null ? oc(e) : null;
  }
  function oc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = oc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ic = o.unstable_scheduleCallback, uc = o.unstable_cancelCallback, Am = o.unstable_shouldYield, Lm = o.unstable_requestPaint, Ae = o.unstable_now, Im = o.unstable_getCurrentPriorityLevel, ll = o.unstable_ImmediatePriority, lc = o.unstable_UserBlockingPriority, oi = o.unstable_NormalPriority, Mm = o.unstable_LowPriority, sc = o.unstable_IdlePriority, ii = null, Ut = null;
  function jm(e) {
    if (Ut && typeof Ut.onCommitFiberRoot == "function") try {
      Ut.onCommitFiberRoot(ii, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ot = Math.clz32 ? Math.clz32 : Bm, Fm = Math.log, zm = Math.LN2;
  function Bm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Fm(e) / zm | 0) | 0;
  }
  var ui = 64, li = 4194304;
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
  function si(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var i = 0, l = e.suspendedLanes, a = e.pingedLanes, d = r & 268435455;
    if (d !== 0) {
      var v = d & ~l;
      v !== 0 ? i = Jr(v) : (a &= d, a !== 0 && (i = Jr(a)));
    } else d = r & ~l, d !== 0 ? i = Jr(d) : a !== 0 && (i = Jr(a));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) r = 31 - Ot(t), l = 1 << r, i |= e[r], t &= ~l;
    return i;
  }
  function $m(e, t) {
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
  function Um(e, t) {
    for (var r = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
      var d = 31 - Ot(a), v = 1 << d, w = l[d];
      w === -1 ? ((v & r) === 0 || (v & i) !== 0) && (l[d] = $m(v, t)) : w <= t && (e.expiredLanes |= v), a &= ~v;
    }
  }
  function sl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ac() {
    var e = ui;
    return ui <<= 1, (ui & 4194240) === 0 && (ui = 64), e;
  }
  function al(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function eo(e, t, r) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ot(t), e[t] = r;
  }
  function Wm(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var l = 31 - Ot(r), a = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, r &= ~a;
    }
  }
  function cl(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var i = 31 - Ot(r), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), r &= ~l;
    }
  }
  var ye = 0;
  function cc(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var fc, fl, dc, pc, hc, dl = !1, ai = [], mn = null, vn = null, gn = null, to = /* @__PURE__ */ new Map(), no = /* @__PURE__ */ new Map(), yn = [], bm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function mc(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        mn = null;
        break;
      case "dragenter":
      case "dragleave":
        vn = null;
        break;
      case "mouseover":
      case "mouseout":
        gn = null;
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
  function Vm(e, t, r, i, l) {
    switch (t) {
      case "focusin":
        return mn = ro(mn, e, t, r, i, l), !0;
      case "dragenter":
        return vn = ro(vn, e, t, r, i, l), !0;
      case "mouseover":
        return gn = ro(gn, e, t, r, i, l), !0;
      case "pointerover":
        var a = l.pointerId;
        return to.set(a, ro(to.get(a) || null, e, t, r, i, l)), !0;
      case "gotpointercapture":
        return a = l.pointerId, no.set(a, ro(no.get(a) || null, e, t, r, i, l)), !0;
    }
    return !1;
  }
  function vc(e) {
    var t = $n(e.target);
    if (t !== null) {
      var r = Bn(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = tc(r), t !== null) {
            e.blockedOn = t, hc(e.priority, function() {
              dc(r);
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
  function ci(e) {
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
  function gc(e, t, r) {
    ci(e) && r.delete(t);
  }
  function Hm() {
    dl = !1, mn !== null && ci(mn) && (mn = null), vn !== null && ci(vn) && (vn = null), gn !== null && ci(gn) && (gn = null), to.forEach(gc), no.forEach(gc);
  }
  function oo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, dl || (dl = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Hm)));
  }
  function io(e) {
    function t(l) {
      return oo(l, e);
    }
    if (0 < ai.length) {
      oo(ai[0], e);
      for (var r = 1; r < ai.length; r++) {
        var i = ai[r];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (mn !== null && oo(mn, e), vn !== null && oo(vn, e), gn !== null && oo(gn, e), to.forEach(t), no.forEach(t), r = 0; r < yn.length; r++) i = yn[r], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < yn.length && (r = yn[0], r.blockedOn === null); ) vc(r), r.blockedOn === null && yn.shift();
  }
  var dr = j.ReactCurrentBatchConfig, fi = !0;
  function Qm(e, t, r, i) {
    var l = ye, a = dr.transition;
    dr.transition = null;
    try {
      ye = 1, pl(e, t, r, i);
    } finally {
      ye = l, dr.transition = a;
    }
  }
  function Km(e, t, r, i) {
    var l = ye, a = dr.transition;
    dr.transition = null;
    try {
      ye = 4, pl(e, t, r, i);
    } finally {
      ye = l, dr.transition = a;
    }
  }
  function pl(e, t, r, i) {
    if (fi) {
      var l = hl(e, t, r, i);
      if (l === null) Dl(e, t, i, di, r), mc(e, i);
      else if (Vm(l, e, t, r, i)) i.stopPropagation();
      else if (mc(e, i), t & 4 && -1 < bm.indexOf(e)) {
        for (; l !== null; ) {
          var a = yo(l);
          if (a !== null && fc(a), a = hl(e, t, r, i), a === null && Dl(e, t, i, di, r), a === l) break;
          l = a;
        }
        l !== null && i.stopPropagation();
      } else Dl(e, t, i, null, r);
    }
  }
  var di = null;
  function hl(e, t, r, i) {
    if (di = null, e = nl(i), e = $n(e), e !== null) if (t = Bn(e), t === null) e = null;
    else if (r = t.tag, r === 13) {
      if (e = tc(t), e !== null) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return di = e, null;
  }
  function yc(e) {
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
        switch (Im()) {
          case ll:
            return 1;
          case lc:
            return 4;
          case oi:
          case Mm:
            return 16;
          case sc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var wn = null, ml = null, pi = null;
  function wc() {
    if (pi) return pi;
    var e, t = ml, r = t.length, i, l = "value" in wn ? wn.value : wn.textContent, a = l.length;
    for (e = 0; e < r && t[e] === l[e]; e++) ;
    var d = r - e;
    for (i = 1; i <= d && t[r - i] === l[a - i]; i++) ;
    return pi = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function hi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function mi() {
    return !0;
  }
  function Sc() {
    return !1;
  }
  function vt(e) {
    function t(r, i, l, a, d) {
      this._reactName = r, this._targetInst = l, this.type = i, this.nativeEvent = a, this.target = d, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (r = e[v], this[v] = r ? r(a) : a[v]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? mi : Sc, this.isPropagationStopped = Sc, this;
    }
    return Y(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var r = this.nativeEvent;
      r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = mi);
    }, stopPropagation: function() {
      var r = this.nativeEvent;
      r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = mi);
    }, persist: function() {
    }, isPersistent: mi }), t;
  }
  var pr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, vl = vt(pr), uo = Y({}, pr, { view: 0, detail: 0 }), Gm = vt(uo), gl, yl, lo, vi = Y({}, uo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Sl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== lo && (lo && e.type === "mousemove" ? (gl = e.screenX - lo.screenX, yl = e.screenY - lo.screenY) : yl = gl = 0, lo = e), gl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : yl;
  } }), Ec = vt(vi), Ym = Y({}, vi, { dataTransfer: 0 }), Xm = vt(Ym), qm = Y({}, uo, { relatedTarget: 0 }), wl = vt(qm), Zm = Y({}, pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jm = vt(Zm), ev = Y({}, pr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), tv = vt(ev), nv = Y({}, pr, { data: 0 }), kc = vt(nv), rv = {
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
  }, ov = {
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
  }, iv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function uv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = iv[e]) ? !!t[e] : !1;
  }
  function Sl() {
    return uv;
  }
  var lv = Y({}, uo, { key: function(e) {
    if (e.key) {
      var t = rv[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = hi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ov[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Sl, charCode: function(e) {
    return e.type === "keypress" ? hi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? hi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), sv = vt(lv), av = Y({}, vi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), xc = vt(av), cv = Y({}, uo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Sl }), fv = vt(cv), dv = Y({}, pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pv = vt(dv), hv = Y({}, vi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), mv = vt(hv), vv = [9, 13, 27, 32], El = m && "CompositionEvent" in window, so = null;
  m && "documentMode" in document && (so = document.documentMode);
  var gv = m && "TextEvent" in window && !so, Cc = m && (!El || so && 8 < so && 11 >= so), _c = " ", Pc = !1;
  function Rc(e, t) {
    switch (e) {
      case "keyup":
        return vv.indexOf(t.keyCode) !== -1;
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
  function Nc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var hr = !1;
  function yv(e, t) {
    switch (e) {
      case "compositionend":
        return Nc(t);
      case "keypress":
        return t.which !== 32 ? null : (Pc = !0, _c);
      case "textInput":
        return e = t.data, e === _c && Pc ? null : e;
      default:
        return null;
    }
  }
  function wv(e, t) {
    if (hr) return e === "compositionend" || !El && Rc(e, t) ? (e = wc(), pi = ml = wn = null, hr = !1, e) : null;
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
        return Cc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Sv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Oc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Sv[e.type] : t === "textarea";
  }
  function Tc(e, t, r, i) {
    Xa(i), t = Ei(t, "onChange"), 0 < t.length && (r = new vl("onChange", "change", null, r, i), e.push({ event: r, listeners: t }));
  }
  var ao = null, co = null;
  function Ev(e) {
    Gc(e, 0);
  }
  function gi(e) {
    var t = wr(e);
    if (Se(t)) return e;
  }
  function kv(e, t) {
    if (e === "change") return t;
  }
  var Dc = !1;
  if (m) {
    var kl;
    if (m) {
      var xl = "oninput" in document;
      if (!xl) {
        var Ac = document.createElement("div");
        Ac.setAttribute("oninput", "return;"), xl = typeof Ac.oninput == "function";
      }
      kl = xl;
    } else kl = !1;
    Dc = kl && (!document.documentMode || 9 < document.documentMode);
  }
  function Lc() {
    ao && (ao.detachEvent("onpropertychange", Ic), co = ao = null);
  }
  function Ic(e) {
    if (e.propertyName === "value" && gi(co)) {
      var t = [];
      Tc(t, co, e, nl(e)), ec(Ev, t);
    }
  }
  function xv(e, t, r) {
    e === "focusin" ? (Lc(), ao = t, co = r, ao.attachEvent("onpropertychange", Ic)) : e === "focusout" && Lc();
  }
  function Cv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return gi(co);
  }
  function _v(e, t) {
    if (e === "click") return gi(t);
  }
  function Pv(e, t) {
    if (e === "input" || e === "change") return gi(t);
  }
  function Rv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Tt = typeof Object.is == "function" ? Object.is : Rv;
  function fo(e, t) {
    if (Tt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e), i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var l = r[i];
      if (!g.call(t, l) || !Tt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Mc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function jc(e, t) {
    var r = Mc(e);
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
      r = Mc(r);
    }
  }
  function Fc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function zc() {
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
  function Nv(e) {
    var t = zc(), r = e.focusedElem, i = e.selectionRange;
    if (t !== r && r && r.ownerDocument && Fc(r.ownerDocument.documentElement, r)) {
      if (i !== null && Cl(r)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
        else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = r.textContent.length, a = Math.min(i.start, l);
          i = i.end === void 0 ? a : Math.min(i.end, l), !e.extend && a > i && (l = i, i = a, a = l), l = jc(r, a);
          var d = jc(
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
  var Ov = m && "documentMode" in document && 11 >= document.documentMode, mr = null, _l = null, po = null, Pl = !1;
  function Bc(e, t, r) {
    var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Pl || mr == null || mr !== Ze(i) || (i = mr, "selectionStart" in i && Cl(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), po && fo(po, i) || (po = i, i = Ei(_l, "onSelect"), 0 < i.length && (t = new vl("onSelect", "select", null, t, r), e.push({ event: t, listeners: i }), t.target = mr)));
  }
  function yi(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var vr = { animationend: yi("Animation", "AnimationEnd"), animationiteration: yi("Animation", "AnimationIteration"), animationstart: yi("Animation", "AnimationStart"), transitionend: yi("Transition", "TransitionEnd") }, Rl = {}, $c = {};
  m && ($c = document.createElement("div").style, "AnimationEvent" in window || (delete vr.animationend.animation, delete vr.animationiteration.animation, delete vr.animationstart.animation), "TransitionEvent" in window || delete vr.transitionend.transition);
  function wi(e) {
    if (Rl[e]) return Rl[e];
    if (!vr[e]) return e;
    var t = vr[e], r;
    for (r in t) if (t.hasOwnProperty(r) && r in $c) return Rl[e] = t[r];
    return e;
  }
  var Uc = wi("animationend"), Wc = wi("animationiteration"), bc = wi("animationstart"), Vc = wi("transitionend"), Hc = /* @__PURE__ */ new Map(), Qc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Sn(e, t) {
    Hc.set(e, t), f(t, [e]);
  }
  for (var Nl = 0; Nl < Qc.length; Nl++) {
    var Ol = Qc[Nl], Tv = Ol.toLowerCase(), Dv = Ol[0].toUpperCase() + Ol.slice(1);
    Sn(Tv, "on" + Dv);
  }
  Sn(Uc, "onAnimationEnd"), Sn(Wc, "onAnimationIteration"), Sn(bc, "onAnimationStart"), Sn("dblclick", "onDoubleClick"), Sn("focusin", "onFocus"), Sn("focusout", "onBlur"), Sn(Vc, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ho = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Av = new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));
  function Kc(e, t, r) {
    var i = e.type || "unknown-event";
    e.currentTarget = r, Tm(i, t, void 0, e), e.currentTarget = null;
  }
  function Gc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r], l = i.event;
      i = i.listeners;
      e: {
        var a = void 0;
        if (t) for (var d = i.length - 1; 0 <= d; d--) {
          var v = i[d], w = v.instance, D = v.currentTarget;
          if (v = v.listener, w !== a && l.isPropagationStopped()) break e;
          Kc(l, v, D), a = w;
        }
        else for (d = 0; d < i.length; d++) {
          if (v = i[d], w = v.instance, D = v.currentTarget, v = v.listener, w !== a && l.isPropagationStopped()) break e;
          Kc(l, v, D), a = w;
        }
      }
    }
    if (ri) throw e = ul, ri = !1, ul = null, e;
  }
  function xe(e, t) {
    var r = t[Fl];
    r === void 0 && (r = t[Fl] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    r.has(i) || (Yc(t, e, 2, !1), r.add(i));
  }
  function Tl(e, t, r) {
    var i = 0;
    t && (i |= 4), Yc(r, e, i, t);
  }
  var Si = "_reactListening" + Math.random().toString(36).slice(2);
  function mo(e) {
    if (!e[Si]) {
      e[Si] = !0, s.forEach(function(r) {
        r !== "selectionchange" && (Av.has(r) || Tl(r, !1, e), Tl(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Si] || (t[Si] = !0, Tl("selectionchange", !1, t));
    }
  }
  function Yc(e, t, r, i) {
    switch (yc(t)) {
      case 1:
        var l = Qm;
        break;
      case 4:
        l = Km;
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
          var w = d.tag;
          if ((w === 3 || w === 4) && (w = d.stateNode.containerInfo, w === l || w.nodeType === 8 && w.parentNode === l)) return;
          d = d.return;
        }
        for (; v !== null; ) {
          if (d = $n(v), d === null) return;
          if (w = d.tag, w === 5 || w === 6) {
            i = a = d;
            continue e;
          }
          v = v.parentNode;
        }
      }
      i = i.return;
    }
    ec(function() {
      var D = a, U = nl(r), b = [];
      e: {
        var $ = Hc.get(e);
        if ($ !== void 0) {
          var Z = vl, te = e;
          switch (e) {
            case "keypress":
              if (hi(r) === 0) break e;
            case "keydown":
            case "keyup":
              Z = sv;
              break;
            case "focusin":
              te = "focus", Z = wl;
              break;
            case "focusout":
              te = "blur", Z = wl;
              break;
            case "beforeblur":
            case "afterblur":
              Z = wl;
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
              Z = Ec;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Xm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = fv;
              break;
            case Uc:
            case Wc:
            case bc:
              Z = Jm;
              break;
            case Vc:
              Z = pv;
              break;
            case "scroll":
              Z = Gm;
              break;
            case "wheel":
              Z = mv;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = tv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = xc;
          }
          var re = (t & 4) !== 0, Le = !re && e === "scroll", R = re ? $ !== null ? $ + "Capture" : null : $;
          re = [];
          for (var E = D, N; E !== null; ) {
            N = E;
            var V = N.stateNode;
            if (N.tag === 5 && V !== null && (N = V, R !== null && (V = Xr(E, R), V != null && re.push(vo(E, V, N)))), Le) break;
            E = E.return;
          }
          0 < re.length && ($ = new Z($, te, null, r, U), b.push({ event: $, listeners: re }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if ($ = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", $ && r !== tl && (te = r.relatedTarget || r.fromElement) && ($n(te) || te[en])) break e;
          if ((Z || $) && ($ = U.window === U ? U : ($ = U.ownerDocument) ? $.defaultView || $.parentWindow : window, Z ? (te = r.relatedTarget || r.toElement, Z = D, te = te ? $n(te) : null, te !== null && (Le = Bn(te), te !== Le || te.tag !== 5 && te.tag !== 6) && (te = null)) : (Z = null, te = D), Z !== te)) {
            if (re = Ec, V = "onMouseLeave", R = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (re = xc, V = "onPointerLeave", R = "onPointerEnter", E = "pointer"), Le = Z == null ? $ : wr(Z), N = te == null ? $ : wr(te), $ = new re(V, E + "leave", Z, r, U), $.target = Le, $.relatedTarget = N, V = null, $n(U) === D && (re = new re(R, E + "enter", te, r, U), re.target = N, re.relatedTarget = Le, V = re), Le = V, Z && te) t: {
              for (re = Z, R = te, E = 0, N = re; N; N = gr(N)) E++;
              for (N = 0, V = R; V; V = gr(V)) N++;
              for (; 0 < E - N; ) re = gr(re), E--;
              for (; 0 < N - E; ) R = gr(R), N--;
              for (; E--; ) {
                if (re === R || R !== null && re === R.alternate) break t;
                re = gr(re), R = gr(R);
              }
              re = null;
            }
            else re = null;
            Z !== null && Xc(b, $, Z, re, !1), te !== null && Le !== null && Xc(b, Le, te, re, !0);
          }
        }
        e: {
          if ($ = D ? wr(D) : window, Z = $.nodeName && $.nodeName.toLowerCase(), Z === "select" || Z === "input" && $.type === "file") var oe = kv;
          else if (Oc($)) if (Dc) oe = Pv;
          else {
            oe = Cv;
            var ue = xv;
          }
          else (Z = $.nodeName) && Z.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (oe = _v);
          if (oe && (oe = oe(e, D))) {
            Tc(b, oe, r, U);
            break e;
          }
          ue && ue(e, $, D), e === "focusout" && (ue = $._wrapperState) && ue.controlled && $.type === "number" && Xt($, "number", $.value);
        }
        switch (ue = D ? wr(D) : window, e) {
          case "focusin":
            (Oc(ue) || ue.contentEditable === "true") && (mr = ue, _l = D, po = null);
            break;
          case "focusout":
            po = _l = mr = null;
            break;
          case "mousedown":
            Pl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pl = !1, Bc(b, r, U);
            break;
          case "selectionchange":
            if (Ov) break;
          case "keydown":
          case "keyup":
            Bc(b, r, U);
        }
        var le;
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
        else hr ? Rc(e, r) && (se = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (se = "onCompositionStart");
        se && (Cc && r.locale !== "ko" && (hr || se !== "onCompositionStart" ? se === "onCompositionEnd" && hr && (le = wc()) : (wn = U, ml = "value" in wn ? wn.value : wn.textContent, hr = !0)), ue = Ei(D, se), 0 < ue.length && (se = new kc(se, e, null, r, U), b.push({ event: se, listeners: ue }), le ? se.data = le : (le = Nc(r), le !== null && (se.data = le)))), (le = gv ? yv(e, r) : wv(e, r)) && (D = Ei(D, "onBeforeInput"), 0 < D.length && (U = new kc("onBeforeInput", "beforeinput", null, r, U), b.push({ event: U, listeners: D }), U.data = le));
      }
      Gc(b, t);
    });
  }
  function vo(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Ei(e, t) {
    for (var r = t + "Capture", i = []; e !== null; ) {
      var l = e, a = l.stateNode;
      l.tag === 5 && a !== null && (l = a, a = Xr(e, r), a != null && i.unshift(vo(e, a, l)), a = Xr(e, t), a != null && i.push(vo(e, a, l))), e = e.return;
    }
    return i;
  }
  function gr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Xc(e, t, r, i, l) {
    for (var a = t._reactName, d = []; r !== null && r !== i; ) {
      var v = r, w = v.alternate, D = v.stateNode;
      if (w !== null && w === i) break;
      v.tag === 5 && D !== null && (v = D, l ? (w = Xr(r, a), w != null && d.unshift(vo(r, w, v))) : l || (w = Xr(r, a), w != null && d.push(vo(r, w, v)))), r = r.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Lv = /\r\n?/g, Iv = /\u0000|\uFFFD/g;
  function qc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Lv, `
`).replace(Iv, "");
  }
  function ki(e, t, r) {
    if (t = qc(t), qc(e) !== t && r) throw Error(u(425));
  }
  function xi() {
  }
  var Al = null, Ll = null;
  function Il(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ml = typeof setTimeout == "function" ? setTimeout : void 0, Mv = typeof clearTimeout == "function" ? clearTimeout : void 0, Zc = typeof Promise == "function" ? Promise : void 0, jv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zc < "u" ? function(e) {
    return Zc.resolve(null).then(e).catch(Fv);
  } : Ml;
  function Fv(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function jl(e, t) {
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
  function En(e) {
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
  function Jc(e) {
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
  var yr = Math.random().toString(36).slice(2), Wt = "__reactFiber$" + yr, go = "__reactProps$" + yr, en = "__reactContainer$" + yr, Fl = "__reactEvents$" + yr, zv = "__reactListeners$" + yr, Bv = "__reactHandles$" + yr;
  function $n(e) {
    var t = e[Wt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[en] || r[Wt]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Jc(e); e !== null; ) {
          if (r = e[Wt]) return r;
          e = Jc(e);
        }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function yo(e) {
    return e = e[Wt] || e[en], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function wr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Ci(e) {
    return e[go] || null;
  }
  var zl = [], Sr = -1;
  function kn(e) {
    return { current: e };
  }
  function Ce(e) {
    0 > Sr || (e.current = zl[Sr], zl[Sr] = null, Sr--);
  }
  function Ee(e, t) {
    Sr++, zl[Sr] = e.current, e.current = t;
  }
  var xn = {}, Je = kn(xn), ut = kn(!1), Un = xn;
  function Er(e, t) {
    var r = e.type.contextTypes;
    if (!r) return xn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, a;
    for (a in r) l[a] = t[a];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function lt(e) {
    return e = e.childContextTypes, e != null;
  }
  function _i() {
    Ce(ut), Ce(Je);
  }
  function ef(e, t, r) {
    if (Je.current !== xn) throw Error(u(168));
    Ee(Je, t), Ee(ut, r);
  }
  function tf(e, t, r) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return r;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(u(108, J(e) || "Unknown", l));
    return Y({}, r, i);
  }
  function Pi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn, Un = Je.current, Ee(Je, e), Ee(ut, ut.current), !0;
  }
  function nf(e, t, r) {
    var i = e.stateNode;
    if (!i) throw Error(u(169));
    r ? (e = tf(e, t, Un), i.__reactInternalMemoizedMergedChildContext = e, Ce(ut), Ce(Je), Ee(Je, e)) : Ce(ut), Ee(ut, r);
  }
  var tn = null, Ri = !1, Bl = !1;
  function rf(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  function $v(e) {
    Ri = !0, rf(e);
  }
  function Cn() {
    if (!Bl && tn !== null) {
      Bl = !0;
      var e = 0, t = ye;
      try {
        var r = tn;
        for (ye = 1; e < r.length; e++) {
          var i = r[e];
          do
            i = i(!0);
          while (i !== null);
        }
        tn = null, Ri = !1;
      } catch (l) {
        throw tn !== null && (tn = tn.slice(e + 1)), ic(ll, Cn), l;
      } finally {
        ye = t, Bl = !1;
      }
    }
    return null;
  }
  var kr = [], xr = 0, Ni = null, Oi = 0, kt = [], xt = 0, Wn = null, nn = 1, rn = "";
  function bn(e, t) {
    kr[xr++] = Oi, kr[xr++] = Ni, Ni = e, Oi = t;
  }
  function of(e, t, r) {
    kt[xt++] = nn, kt[xt++] = rn, kt[xt++] = Wn, Wn = e;
    var i = nn;
    e = rn;
    var l = 32 - Ot(i) - 1;
    i &= ~(1 << l), r += 1;
    var a = 32 - Ot(t) + l;
    if (30 < a) {
      var d = l - l % 5;
      a = (i & (1 << d) - 1).toString(32), i >>= d, l -= d, nn = 1 << 32 - Ot(t) + l | r << l | i, rn = a + e;
    } else nn = 1 << a | r << l | i, rn = e;
  }
  function $l(e) {
    e.return !== null && (bn(e, 1), of(e, 1, 0));
  }
  function Ul(e) {
    for (; e === Ni; ) Ni = kr[--xr], kr[xr] = null, Oi = kr[--xr], kr[xr] = null;
    for (; e === Wn; ) Wn = kt[--xt], kt[xt] = null, rn = kt[--xt], kt[xt] = null, nn = kt[--xt], kt[xt] = null;
  }
  var gt = null, yt = null, Re = !1, Dt = null;
  function uf(e, t) {
    var r = Rt(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
  }
  function lf(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, gt = e, yt = En(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, gt = e, yt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Wn !== null ? { id: nn, overflow: rn } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Rt(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, gt = e, yt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Wl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function bl(e) {
    if (Re) {
      var t = yt;
      if (t) {
        var r = t;
        if (!lf(e, t)) {
          if (Wl(e)) throw Error(u(418));
          t = En(r.nextSibling);
          var i = gt;
          t && lf(e, t) ? uf(i, r) : (e.flags = e.flags & -4097 | 2, Re = !1, gt = e);
        }
      } else {
        if (Wl(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, Re = !1, gt = e;
      }
    }
  }
  function sf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    gt = e;
  }
  function Ti(e) {
    if (e !== gt) return !1;
    if (!Re) return sf(e), Re = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Il(e.type, e.memoizedProps)), t && (t = yt)) {
      if (Wl(e)) throw af(), Error(u(418));
      for (; t; ) uf(e, t), t = En(t.nextSibling);
    }
    if (sf(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                yt = En(e.nextSibling);
                break e;
              }
              t--;
            } else r !== "$" && r !== "$!" && r !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        yt = null;
      }
    } else yt = gt ? En(e.stateNode.nextSibling) : null;
    return !0;
  }
  function af() {
    for (var e = yt; e; ) e = En(e.nextSibling);
  }
  function Cr() {
    yt = gt = null, Re = !1;
  }
  function Vl(e) {
    Dt === null ? Dt = [e] : Dt.push(e);
  }
  var Uv = j.ReactCurrentBatchConfig;
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
  function Di(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function cf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ff(e) {
    function t(R, E) {
      if (e) {
        var N = R.deletions;
        N === null ? (R.deletions = [E], R.flags |= 16) : N.push(E);
      }
    }
    function r(R, E) {
      if (!e) return null;
      for (; E !== null; ) t(R, E), E = E.sibling;
      return null;
    }
    function i(R, E) {
      for (R = /* @__PURE__ */ new Map(); E !== null; ) E.key !== null ? R.set(E.key, E) : R.set(E.index, E), E = E.sibling;
      return R;
    }
    function l(R, E) {
      return R = An(R, E), R.index = 0, R.sibling = null, R;
    }
    function a(R, E, N) {
      return R.index = N, e ? (N = R.alternate, N !== null ? (N = N.index, N < E ? (R.flags |= 2, E) : N) : (R.flags |= 2, E)) : (R.flags |= 1048576, E);
    }
    function d(R) {
      return e && R.alternate === null && (R.flags |= 2), R;
    }
    function v(R, E, N, V) {
      return E === null || E.tag !== 6 ? (E = Ms(N, R.mode, V), E.return = R, E) : (E = l(E, N), E.return = R, E);
    }
    function w(R, E, N, V) {
      var oe = N.type;
      return oe === F ? U(R, E, N.props.children, V, N.key) : E !== null && (E.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Fe && cf(oe) === E.type) ? (V = l(E, N.props), V.ref = wo(R, E, N), V.return = R, V) : (V = tu(N.type, N.key, N.props, null, R.mode, V), V.ref = wo(R, E, N), V.return = R, V);
    }
    function D(R, E, N, V) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== N.containerInfo || E.stateNode.implementation !== N.implementation ? (E = js(N, R.mode, V), E.return = R, E) : (E = l(E, N.children || []), E.return = R, E);
    }
    function U(R, E, N, V, oe) {
      return E === null || E.tag !== 7 ? (E = qn(N, R.mode, V, oe), E.return = R, E) : (E = l(E, N), E.return = R, E);
    }
    function b(R, E, N) {
      if (typeof E == "string" && E !== "" || typeof E == "number") return E = Ms("" + E, R.mode, N), E.return = R, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case W:
            return N = tu(E.type, E.key, E.props, null, R.mode, N), N.ref = wo(R, null, E), N.return = R, N;
          case Q:
            return E = js(E, R.mode, N), E.return = R, E;
          case Fe:
            var V = E._init;
            return b(R, V(E._payload), N);
        }
        if (mt(E) || ne(E)) return E = qn(E, R.mode, N, null), E.return = R, E;
        Di(R, E);
      }
      return null;
    }
    function $(R, E, N, V) {
      var oe = E !== null ? E.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return oe !== null ? null : v(R, E, "" + N, V);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case W:
            return N.key === oe ? w(R, E, N, V) : null;
          case Q:
            return N.key === oe ? D(R, E, N, V) : null;
          case Fe:
            return oe = N._init, $(
              R,
              E,
              oe(N._payload),
              V
            );
        }
        if (mt(N) || ne(N)) return oe !== null ? null : U(R, E, N, V, null);
        Di(R, N);
      }
      return null;
    }
    function Z(R, E, N, V, oe) {
      if (typeof V == "string" && V !== "" || typeof V == "number") return R = R.get(N) || null, v(E, R, "" + V, oe);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case W:
            return R = R.get(V.key === null ? N : V.key) || null, w(E, R, V, oe);
          case Q:
            return R = R.get(V.key === null ? N : V.key) || null, D(E, R, V, oe);
          case Fe:
            var ue = V._init;
            return Z(R, E, N, ue(V._payload), oe);
        }
        if (mt(V) || ne(V)) return R = R.get(N) || null, U(E, R, V, oe, null);
        Di(E, V);
      }
      return null;
    }
    function te(R, E, N, V) {
      for (var oe = null, ue = null, le = E, se = E = 0, We = null; le !== null && se < N.length; se++) {
        le.index > se ? (We = le, le = null) : We = le.sibling;
        var pe = $(R, le, N[se], V);
        if (pe === null) {
          le === null && (le = We);
          break;
        }
        e && le && pe.alternate === null && t(R, le), E = a(pe, E, se), ue === null ? oe = pe : ue.sibling = pe, ue = pe, le = We;
      }
      if (se === N.length) return r(R, le), Re && bn(R, se), oe;
      if (le === null) {
        for (; se < N.length; se++) le = b(R, N[se], V), le !== null && (E = a(le, E, se), ue === null ? oe = le : ue.sibling = le, ue = le);
        return Re && bn(R, se), oe;
      }
      for (le = i(R, le); se < N.length; se++) We = Z(le, R, se, N[se], V), We !== null && (e && We.alternate !== null && le.delete(We.key === null ? se : We.key), E = a(We, E, se), ue === null ? oe = We : ue.sibling = We, ue = We);
      return e && le.forEach(function(Ln) {
        return t(R, Ln);
      }), Re && bn(R, se), oe;
    }
    function re(R, E, N, V) {
      var oe = ne(N);
      if (typeof oe != "function") throw Error(u(150));
      if (N = oe.call(N), N == null) throw Error(u(151));
      for (var ue = oe = null, le = E, se = E = 0, We = null, pe = N.next(); le !== null && !pe.done; se++, pe = N.next()) {
        le.index > se ? (We = le, le = null) : We = le.sibling;
        var Ln = $(R, le, pe.value, V);
        if (Ln === null) {
          le === null && (le = We);
          break;
        }
        e && le && Ln.alternate === null && t(R, le), E = a(Ln, E, se), ue === null ? oe = Ln : ue.sibling = Ln, ue = Ln, le = We;
      }
      if (pe.done) return r(
        R,
        le
      ), Re && bn(R, se), oe;
      if (le === null) {
        for (; !pe.done; se++, pe = N.next()) pe = b(R, pe.value, V), pe !== null && (E = a(pe, E, se), ue === null ? oe = pe : ue.sibling = pe, ue = pe);
        return Re && bn(R, se), oe;
      }
      for (le = i(R, le); !pe.done; se++, pe = N.next()) pe = Z(le, R, se, pe.value, V), pe !== null && (e && pe.alternate !== null && le.delete(pe.key === null ? se : pe.key), E = a(pe, E, se), ue === null ? oe = pe : ue.sibling = pe, ue = pe);
      return e && le.forEach(function(Sg) {
        return t(R, Sg);
      }), Re && bn(R, se), oe;
    }
    function Le(R, E, N, V) {
      if (typeof N == "object" && N !== null && N.type === F && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case W:
            e: {
              for (var oe = N.key, ue = E; ue !== null; ) {
                if (ue.key === oe) {
                  if (oe = N.type, oe === F) {
                    if (ue.tag === 7) {
                      r(R, ue.sibling), E = l(ue, N.props.children), E.return = R, R = E;
                      break e;
                    }
                  } else if (ue.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Fe && cf(oe) === ue.type) {
                    r(R, ue.sibling), E = l(ue, N.props), E.ref = wo(R, ue, N), E.return = R, R = E;
                    break e;
                  }
                  r(R, ue);
                  break;
                } else t(R, ue);
                ue = ue.sibling;
              }
              N.type === F ? (E = qn(N.props.children, R.mode, V, N.key), E.return = R, R = E) : (V = tu(N.type, N.key, N.props, null, R.mode, V), V.ref = wo(R, E, N), V.return = R, R = V);
            }
            return d(R);
          case Q:
            e: {
              for (ue = N.key; E !== null; ) {
                if (E.key === ue) if (E.tag === 4 && E.stateNode.containerInfo === N.containerInfo && E.stateNode.implementation === N.implementation) {
                  r(R, E.sibling), E = l(E, N.children || []), E.return = R, R = E;
                  break e;
                } else {
                  r(R, E);
                  break;
                }
                else t(R, E);
                E = E.sibling;
              }
              E = js(N, R.mode, V), E.return = R, R = E;
            }
            return d(R);
          case Fe:
            return ue = N._init, Le(R, E, ue(N._payload), V);
        }
        if (mt(N)) return te(R, E, N, V);
        if (ne(N)) return re(R, E, N, V);
        Di(R, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, E !== null && E.tag === 6 ? (r(R, E.sibling), E = l(E, N), E.return = R, R = E) : (r(R, E), E = Ms(N, R.mode, V), E.return = R, R = E), d(R)) : r(R, E);
    }
    return Le;
  }
  var _r = ff(!0), df = ff(!1), Ai = kn(null), Li = null, Pr = null, Hl = null;
  function Ql() {
    Hl = Pr = Li = null;
  }
  function Kl(e) {
    var t = Ai.current;
    Ce(Ai), e._currentValue = t;
  }
  function Gl(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function Rr(e, t) {
    Li = e, Hl = Pr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (st = !0), e.firstContext = null);
  }
  function Ct(e) {
    var t = e._currentValue;
    if (Hl !== e) if (e = { context: e, memoizedValue: t, next: null }, Pr === null) {
      if (Li === null) throw Error(u(308));
      Pr = e, Li.dependencies = { lanes: 0, firstContext: e };
    } else Pr = Pr.next = e;
    return t;
  }
  var Vn = null;
  function Yl(e) {
    Vn === null ? Vn = [e] : Vn.push(e);
  }
  function pf(e, t, r, i) {
    var l = t.interleaved;
    return l === null ? (r.next = r, Yl(t)) : (r.next = l.next, l.next = r), t.interleaved = r, on(e, i);
  }
  function on(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null;
  }
  var _n = !1;
  function Xl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function hf(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function un(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Pn(e, t, r) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (de & 2) !== 0) {
      var l = i.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, on(e, r);
    }
    return l = i.interleaved, l === null ? (t.next = t, Yl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, on(e, r);
  }
  function Ii(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, cl(e, r);
    }
  }
  function mf(e, t) {
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
  function Mi(e, t, r, i) {
    var l = e.updateQueue;
    _n = !1;
    var a = l.firstBaseUpdate, d = l.lastBaseUpdate, v = l.shared.pending;
    if (v !== null) {
      l.shared.pending = null;
      var w = v, D = w.next;
      w.next = null, d === null ? a = D : d.next = D, d = w;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, v = U.lastBaseUpdate, v !== d && (v === null ? U.firstBaseUpdate = D : v.next = D, U.lastBaseUpdate = w));
    }
    if (a !== null) {
      var b = l.baseState;
      d = 0, U = D = w = null, v = a;
      do {
        var $ = v.lane, Z = v.eventTime;
        if ((i & $) === $) {
          U !== null && (U = U.next = {
            eventTime: Z,
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          });
          e: {
            var te = e, re = v;
            switch ($ = t, Z = r, re.tag) {
              case 1:
                if (te = re.payload, typeof te == "function") {
                  b = te.call(Z, b, $);
                  break e;
                }
                b = te;
                break e;
              case 3:
                te.flags = te.flags & -65537 | 128;
              case 0:
                if (te = re.payload, $ = typeof te == "function" ? te.call(Z, b, $) : te, $ == null) break e;
                b = Y({}, b, $);
                break e;
              case 2:
                _n = !0;
            }
          }
          v.callback !== null && v.lane !== 0 && (e.flags |= 64, $ = l.effects, $ === null ? l.effects = [v] : $.push(v));
        } else Z = { eventTime: Z, lane: $, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, U === null ? (D = U = Z, w = b) : U = U.next = Z, d |= $;
        if (v = v.next, v === null) {
          if (v = l.shared.pending, v === null) break;
          $ = v, v = $.next, $.next = null, l.lastBaseUpdate = $, l.shared.pending = null;
        }
      } while (!0);
      if (U === null && (w = b), l.baseState = w, l.firstBaseUpdate = D, l.lastBaseUpdate = U, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          d |= l.lane, l = l.next;
        while (l !== t);
      } else a === null && (l.shared.lanes = 0);
      Kn |= d, e.lanes = d, e.memoizedState = b;
    }
  }
  function vf(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], l = i.callback;
      if (l !== null) {
        if (i.callback = null, i = r, typeof l != "function") throw Error(u(191, l));
        l.call(i);
      }
    }
  }
  var So = {}, bt = kn(So), Eo = kn(So), ko = kn(So);
  function Hn(e) {
    if (e === So) throw Error(u(174));
    return e;
  }
  function ql(e, t) {
    switch (Ee(ko, t), Ee(Eo, e), Ee(bt, So), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : qt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = qt(t, e);
    }
    Ce(bt), Ee(bt, t);
  }
  function Nr() {
    Ce(bt), Ce(Eo), Ce(ko);
  }
  function gf(e) {
    Hn(ko.current);
    var t = Hn(bt.current), r = qt(t, e.type);
    t !== r && (Ee(Eo, e), Ee(bt, r));
  }
  function Zl(e) {
    Eo.current === e && (Ce(bt), Ce(Eo));
  }
  var Oe = kn(0);
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
  var Fi = j.ReactCurrentDispatcher, ts = j.ReactCurrentBatchConfig, Qn = 0, Te = null, ze = null, $e = null, zi = !1, xo = !1, Co = 0, Wv = 0;
  function et() {
    throw Error(u(321));
  }
  function ns(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Tt(e[r], t[r])) return !1;
    return !0;
  }
  function rs(e, t, r, i, l, a) {
    if (Qn = a, Te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fi.current = e === null || e.memoizedState === null ? Qv : Kv, e = r(i, l), xo) {
      a = 0;
      do {
        if (xo = !1, Co = 0, 25 <= a) throw Error(u(301));
        a += 1, $e = ze = null, t.updateQueue = null, Fi.current = Gv, e = r(i, l);
      } while (xo);
    }
    if (Fi.current = Ui, t = ze !== null && ze.next !== null, Qn = 0, $e = ze = Te = null, zi = !1, t) throw Error(u(300));
    return e;
  }
  function os() {
    var e = Co !== 0;
    return Co = 0, e;
  }
  function Vt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return $e === null ? Te.memoizedState = $e = e : $e = $e.next = e, $e;
  }
  function _t() {
    if (ze === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = $e === null ? Te.memoizedState : $e.next;
    if (t !== null) $e = t, ze = e;
    else {
      if (e === null) throw Error(u(310));
      ze = e, e = { memoizedState: ze.memoizedState, baseState: ze.baseState, baseQueue: ze.baseQueue, queue: ze.queue, next: null }, $e === null ? Te.memoizedState = $e = e : $e = $e.next = e;
    }
    return $e;
  }
  function _o(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function is(e) {
    var t = _t(), r = t.queue;
    if (r === null) throw Error(u(311));
    r.lastRenderedReducer = e;
    var i = ze, l = i.baseQueue, a = r.pending;
    if (a !== null) {
      if (l !== null) {
        var d = l.next;
        l.next = a.next, a.next = d;
      }
      i.baseQueue = l = a, r.pending = null;
    }
    if (l !== null) {
      a = l.next, i = i.baseState;
      var v = d = null, w = null, D = a;
      do {
        var U = D.lane;
        if ((Qn & U) === U) w !== null && (w = w.next = { lane: 0, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), i = D.hasEagerState ? D.eagerState : e(i, D.action);
        else {
          var b = {
            lane: U,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          };
          w === null ? (v = w = b, d = i) : w = w.next = b, Te.lanes |= U, Kn |= U;
        }
        D = D.next;
      } while (D !== null && D !== a);
      w === null ? d = i : w.next = v, Tt(i, t.memoizedState) || (st = !0), t.memoizedState = i, t.baseState = d, t.baseQueue = w, r.lastRenderedState = i;
    }
    if (e = r.interleaved, e !== null) {
      l = e;
      do
        a = l.lane, Te.lanes |= a, Kn |= a, l = l.next;
      while (l !== e);
    } else l === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function us(e) {
    var t = _t(), r = t.queue;
    if (r === null) throw Error(u(311));
    r.lastRenderedReducer = e;
    var i = r.dispatch, l = r.pending, a = t.memoizedState;
    if (l !== null) {
      r.pending = null;
      var d = l = l.next;
      do
        a = e(a, d.action), d = d.next;
      while (d !== l);
      Tt(a, t.memoizedState) || (st = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), r.lastRenderedState = a;
    }
    return [a, i];
  }
  function yf() {
  }
  function wf(e, t) {
    var r = Te, i = _t(), l = t(), a = !Tt(i.memoizedState, l);
    if (a && (i.memoizedState = l, st = !0), i = i.queue, ls(kf.bind(null, r, i, e), [e]), i.getSnapshot !== t || a || $e !== null && $e.memoizedState.tag & 1) {
      if (r.flags |= 2048, Po(9, Ef.bind(null, r, i, l, t), void 0, null), Ue === null) throw Error(u(349));
      (Qn & 30) !== 0 || Sf(r, t, l);
    }
    return l;
  }
  function Sf(e, t, r) {
    e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Te.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function Ef(e, t, r, i) {
    t.value = r, t.getSnapshot = i, xf(t) && Cf(e);
  }
  function kf(e, t, r) {
    return r(function() {
      xf(t) && Cf(e);
    });
  }
  function xf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Tt(e, r);
    } catch {
      return !0;
    }
  }
  function Cf(e) {
    var t = on(e, 1);
    t !== null && Mt(t, e, 1, -1);
  }
  function _f(e) {
    var t = Vt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _o, lastRenderedState: e }, t.queue = e, e = e.dispatch = Hv.bind(null, Te, e), [t.memoizedState, e];
  }
  function Po(e, t, r, i) {
    return e = { tag: e, create: t, destroy: r, deps: i, next: null }, t = Te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Te.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (i = r.next, r.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function Pf() {
    return _t().memoizedState;
  }
  function Bi(e, t, r, i) {
    var l = Vt();
    Te.flags |= e, l.memoizedState = Po(1 | t, r, void 0, i === void 0 ? null : i);
  }
  function $i(e, t, r, i) {
    var l = _t();
    i = i === void 0 ? null : i;
    var a = void 0;
    if (ze !== null) {
      var d = ze.memoizedState;
      if (a = d.destroy, i !== null && ns(i, d.deps)) {
        l.memoizedState = Po(t, r, a, i);
        return;
      }
    }
    Te.flags |= e, l.memoizedState = Po(1 | t, r, a, i);
  }
  function Rf(e, t) {
    return Bi(8390656, 8, e, t);
  }
  function ls(e, t) {
    return $i(2048, 8, e, t);
  }
  function Nf(e, t) {
    return $i(4, 2, e, t);
  }
  function Of(e, t) {
    return $i(4, 4, e, t);
  }
  function Tf(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Df(e, t, r) {
    return r = r != null ? r.concat([e]) : null, $i(4, 4, Tf.bind(null, t, e), r);
  }
  function ss() {
  }
  function Af(e, t) {
    var r = _t();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && ns(t, i[1]) ? i[0] : (r.memoizedState = [e, t], e);
  }
  function Lf(e, t) {
    var r = _t();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && ns(t, i[1]) ? i[0] : (e = e(), r.memoizedState = [e, t], e);
  }
  function If(e, t, r) {
    return (Qn & 21) === 0 ? (e.baseState && (e.baseState = !1, st = !0), e.memoizedState = r) : (Tt(r, t) || (r = ac(), Te.lanes |= r, Kn |= r, e.baseState = !0), t);
  }
  function bv(e, t) {
    var r = ye;
    ye = r !== 0 && 4 > r ? r : 4, e(!0);
    var i = ts.transition;
    ts.transition = {};
    try {
      e(!1), t();
    } finally {
      ye = r, ts.transition = i;
    }
  }
  function Mf() {
    return _t().memoizedState;
  }
  function Vv(e, t, r) {
    var i = Tn(e);
    if (r = { lane: i, action: r, hasEagerState: !1, eagerState: null, next: null }, jf(e)) Ff(t, r);
    else if (r = pf(e, t, r, i), r !== null) {
      var l = ot();
      Mt(r, e, i, l), zf(r, t, i);
    }
  }
  function Hv(e, t, r) {
    var i = Tn(e), l = { lane: i, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (jf(e)) Ff(t, l);
    else {
      var a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
        var d = t.lastRenderedState, v = a(d, r);
        if (l.hasEagerState = !0, l.eagerState = v, Tt(v, d)) {
          var w = t.interleaved;
          w === null ? (l.next = l, Yl(t)) : (l.next = w.next, w.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      r = pf(e, t, l, i), r !== null && (l = ot(), Mt(r, e, i, l), zf(r, t, i));
    }
  }
  function jf(e) {
    var t = e.alternate;
    return e === Te || t !== null && t === Te;
  }
  function Ff(e, t) {
    xo = zi = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function zf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, cl(e, r);
    }
  }
  var Ui = { readContext: Ct, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useInsertionEffect: et, useLayoutEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useMutableSource: et, useSyncExternalStore: et, useId: et, unstable_isNewReconciler: !1 }, Qv = { readContext: Ct, useCallback: function(e, t) {
    return Vt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Ct, useEffect: Rf, useImperativeHandle: function(e, t, r) {
    return r = r != null ? r.concat([e]) : null, Bi(
      4194308,
      4,
      Tf.bind(null, t, e),
      r
    );
  }, useLayoutEffect: function(e, t) {
    return Bi(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Bi(4, 2, e, t);
  }, useMemo: function(e, t) {
    var r = Vt();
    return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
  }, useReducer: function(e, t, r) {
    var i = Vt();
    return t = r !== void 0 ? r(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = Vv.bind(null, Te, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = Vt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: _f, useDebugValue: ss, useDeferredValue: function(e) {
    return Vt().memoizedState = e;
  }, useTransition: function() {
    var e = _f(!1), t = e[0];
    return e = bv.bind(null, e[1]), Vt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, r) {
    var i = Te, l = Vt();
    if (Re) {
      if (r === void 0) throw Error(u(407));
      r = r();
    } else {
      if (r = t(), Ue === null) throw Error(u(349));
      (Qn & 30) !== 0 || Sf(i, t, r);
    }
    l.memoizedState = r;
    var a = { value: r, getSnapshot: t };
    return l.queue = a, Rf(kf.bind(
      null,
      i,
      a,
      e
    ), [e]), i.flags |= 2048, Po(9, Ef.bind(null, i, a, r, t), void 0, null), r;
  }, useId: function() {
    var e = Vt(), t = Ue.identifierPrefix;
    if (Re) {
      var r = rn, i = nn;
      r = (i & ~(1 << 32 - Ot(i) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Co++, 0 < r && (t += "H" + r.toString(32)), t += ":";
    } else r = Wv++, t = ":" + t + "r" + r.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Kv = {
    readContext: Ct,
    useCallback: Af,
    useContext: Ct,
    useEffect: ls,
    useImperativeHandle: Df,
    useInsertionEffect: Nf,
    useLayoutEffect: Of,
    useMemo: Lf,
    useReducer: is,
    useRef: Pf,
    useState: function() {
      return is(_o);
    },
    useDebugValue: ss,
    useDeferredValue: function(e) {
      var t = _t();
      return If(t, ze.memoizedState, e);
    },
    useTransition: function() {
      var e = is(_o)[0], t = _t().memoizedState;
      return [e, t];
    },
    useMutableSource: yf,
    useSyncExternalStore: wf,
    useId: Mf,
    unstable_isNewReconciler: !1
  }, Gv = { readContext: Ct, useCallback: Af, useContext: Ct, useEffect: ls, useImperativeHandle: Df, useInsertionEffect: Nf, useLayoutEffect: Of, useMemo: Lf, useReducer: us, useRef: Pf, useState: function() {
    return us(_o);
  }, useDebugValue: ss, useDeferredValue: function(e) {
    var t = _t();
    return ze === null ? t.memoizedState = e : If(t, ze.memoizedState, e);
  }, useTransition: function() {
    var e = us(_o)[0], t = _t().memoizedState;
    return [e, t];
  }, useMutableSource: yf, useSyncExternalStore: wf, useId: Mf, unstable_isNewReconciler: !1 };
  function At(e, t) {
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
  var Wi = { isMounted: function(e) {
    return (e = e._reactInternals) ? Bn(e) === e : !1;
  }, enqueueSetState: function(e, t, r) {
    e = e._reactInternals;
    var i = ot(), l = Tn(e), a = un(i, l);
    a.payload = t, r != null && (a.callback = r), t = Pn(e, a, l), t !== null && (Mt(t, e, l, i), Ii(t, e, l));
  }, enqueueReplaceState: function(e, t, r) {
    e = e._reactInternals;
    var i = ot(), l = Tn(e), a = un(i, l);
    a.tag = 1, a.payload = t, r != null && (a.callback = r), t = Pn(e, a, l), t !== null && (Mt(t, e, l, i), Ii(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var r = ot(), i = Tn(e), l = un(r, i);
    l.tag = 2, t != null && (l.callback = t), t = Pn(e, l, i), t !== null && (Mt(t, e, i, r), Ii(t, e, i));
  } };
  function Bf(e, t, r, i, l, a, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, a, d) : t.prototype && t.prototype.isPureReactComponent ? !fo(r, i) || !fo(l, a) : !0;
  }
  function $f(e, t, r) {
    var i = !1, l = xn, a = t.contextType;
    return typeof a == "object" && a !== null ? a = Ct(a) : (l = lt(t) ? Un : Je.current, i = t.contextTypes, a = (i = i != null) ? Er(e, l) : xn), t = new t(r, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Wi, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
  }
  function Uf(e, t, r, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== e && Wi.enqueueReplaceState(t, t.state, null);
  }
  function cs(e, t, r, i) {
    var l = e.stateNode;
    l.props = r, l.state = e.memoizedState, l.refs = {}, Xl(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? l.context = Ct(a) : (a = lt(t) ? Un : Je.current, l.context = Er(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (as(e, t, a, r), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Wi.enqueueReplaceState(l, l.state, null), Mi(e, r, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Or(e, t) {
    try {
      var r = "", i = t;
      do
        r += H(i), i = i.return;
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
  var Yv = typeof WeakMap == "function" ? WeakMap : Map;
  function Wf(e, t, r) {
    r = un(-1, r), r.tag = 3, r.payload = { element: null };
    var i = t.value;
    return r.callback = function() {
      Yi || (Yi = !0, Rs = i), ds(e, t);
    }, r;
  }
  function bf(e, t, r) {
    r = un(-1, r), r.tag = 3;
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
      ds(e, t), typeof i != "function" && (Nn === null ? Nn = /* @__PURE__ */ new Set([this]) : Nn.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), r;
  }
  function Vf(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Yv();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(r) || (l.add(r), e = ag.bind(null, e, t, r), t.then(e, e));
  }
  function Hf(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Qf(e, t, r, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = un(-1, 1), t.tag = 2, Pn(r, t, 1))), r.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Xv = j.ReactCurrentOwner, st = !1;
  function rt(e, t, r, i) {
    t.child = e === null ? df(t, null, r, i) : _r(t, e.child, r, i);
  }
  function Kf(e, t, r, i, l) {
    r = r.render;
    var a = t.ref;
    return Rr(t, l), i = rs(e, t, r, i, a, l), r = os(), e !== null && !st ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ln(e, t, l)) : (Re && r && $l(t), t.flags |= 1, rt(e, t, i, l), t.child);
  }
  function Gf(e, t, r, i, l) {
    if (e === null) {
      var a = r.type;
      return typeof a == "function" && !Is(a) && a.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = a, Yf(e, t, a, i, l)) : (e = tu(r.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (a = e.child, (e.lanes & l) === 0) {
      var d = a.memoizedProps;
      if (r = r.compare, r = r !== null ? r : fo, r(d, i) && e.ref === t.ref) return ln(e, t, l);
    }
    return t.flags |= 1, e = An(a, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Yf(e, t, r, i, l) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (fo(a, i) && e.ref === t.ref) if (st = !1, t.pendingProps = i = a, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (st = !0);
      else return t.lanes = e.lanes, ln(e, t, l);
    }
    return ps(e, t, r, i, l);
  }
  function Xf(e, t, r) {
    var i = t.pendingProps, l = i.children, a = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ee(Dr, wt), wt |= r;
    else {
      if ((r & 1073741824) === 0) return e = a !== null ? a.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ee(Dr, wt), wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = a !== null ? a.baseLanes : r, Ee(Dr, wt), wt |= i;
    }
    else a !== null ? (i = a.baseLanes | r, t.memoizedState = null) : i = r, Ee(Dr, wt), wt |= i;
    return rt(e, t, l, r), t.child;
  }
  function qf(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ps(e, t, r, i, l) {
    var a = lt(r) ? Un : Je.current;
    return a = Er(t, a), Rr(t, l), r = rs(e, t, r, i, a, l), i = os(), e !== null && !st ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ln(e, t, l)) : (Re && i && $l(t), t.flags |= 1, rt(e, t, r, l), t.child);
  }
  function Zf(e, t, r, i, l) {
    if (lt(r)) {
      var a = !0;
      Pi(t);
    } else a = !1;
    if (Rr(t, l), t.stateNode === null) Vi(e, t), $f(t, r, i), cs(t, r, i, l), i = !0;
    else if (e === null) {
      var d = t.stateNode, v = t.memoizedProps;
      d.props = v;
      var w = d.context, D = r.contextType;
      typeof D == "object" && D !== null ? D = Ct(D) : (D = lt(r) ? Un : Je.current, D = Er(t, D));
      var U = r.getDerivedStateFromProps, b = typeof U == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      b || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== i || w !== D) && Uf(t, d, i, D), _n = !1;
      var $ = t.memoizedState;
      d.state = $, Mi(t, i, d, l), w = t.memoizedState, v !== i || $ !== w || ut.current || _n ? (typeof U == "function" && (as(t, r, U, i), w = t.memoizedState), (v = _n || Bf(t, r, v, i, $, w, D)) ? (b || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = w), d.props = i, d.state = w, d.context = D, i = v) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      d = t.stateNode, hf(e, t), v = t.memoizedProps, D = t.type === t.elementType ? v : At(t.type, v), d.props = D, b = t.pendingProps, $ = d.context, w = r.contextType, typeof w == "object" && w !== null ? w = Ct(w) : (w = lt(r) ? Un : Je.current, w = Er(t, w));
      var Z = r.getDerivedStateFromProps;
      (U = typeof Z == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== b || $ !== w) && Uf(t, d, i, w), _n = !1, $ = t.memoizedState, d.state = $, Mi(t, i, d, l);
      var te = t.memoizedState;
      v !== b || $ !== te || ut.current || _n ? (typeof Z == "function" && (as(t, r, Z, i), te = t.memoizedState), (D = _n || Bf(t, r, D, i, $, te, w) || !1) ? (U || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(i, te, w), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(i, te, w)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || v === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = te), d.props = i, d.state = te, d.context = w, i = D) : (typeof d.componentDidUpdate != "function" || v === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return hs(e, t, r, i, a, l);
  }
  function hs(e, t, r, i, l, a) {
    qf(e, t);
    var d = (t.flags & 128) !== 0;
    if (!i && !d) return l && nf(t, r, !1), ln(e, t, a);
    i = t.stateNode, Xv.current = t;
    var v = d && typeof r.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && d ? (t.child = _r(t, e.child, null, a), t.child = _r(t, null, v, a)) : rt(e, t, v, a), t.memoizedState = i.state, l && nf(t, r, !0), t.child;
  }
  function Jf(e) {
    var t = e.stateNode;
    t.pendingContext ? ef(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ef(e, t.context, !1), ql(e, t.containerInfo);
  }
  function ed(e, t, r, i, l) {
    return Cr(), Vl(l), t.flags |= 256, rt(e, t, r, i), t.child;
  }
  var ms = { dehydrated: null, treeContext: null, retryLane: 0 };
  function vs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function td(e, t, r) {
    var i = t.pendingProps, l = Oe.current, a = !1, d = (t.flags & 128) !== 0, v;
    if ((v = d) || (v = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), v ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Ee(Oe, l & 1), e === null)
      return bl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = i.children, e = i.fallback, a ? (i = t.mode, a = t.child, d = { mode: "hidden", children: d }, (i & 1) === 0 && a !== null ? (a.childLanes = 0, a.pendingProps = d) : a = nu(d, i, 0, null), e = qn(e, i, r, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = vs(r), t.memoizedState = ms, e) : gs(t, d));
    if (l = e.memoizedState, l !== null && (v = l.dehydrated, v !== null)) return qv(e, t, d, i, v, l, r);
    if (a) {
      a = i.fallback, d = t.mode, l = e.child, v = l.sibling;
      var w = { mode: "hidden", children: i.children };
      return (d & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = w, t.deletions = null) : (i = An(l, w), i.subtreeFlags = l.subtreeFlags & 14680064), v !== null ? a = An(v, a) : (a = qn(a, d, r, null), a.flags |= 2), a.return = t, i.return = t, i.sibling = a, t.child = i, i = a, a = t.child, d = e.child.memoizedState, d = d === null ? vs(r) : { baseLanes: d.baseLanes | r, cachePool: null, transitions: d.transitions }, a.memoizedState = d, a.childLanes = e.childLanes & ~r, t.memoizedState = ms, i;
    }
    return a = e.child, e = a.sibling, i = An(a, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = r), i.return = t, i.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function gs(e, t) {
    return t = nu({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function bi(e, t, r, i) {
    return i !== null && Vl(i), _r(t, e.child, null, r), e = gs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function qv(e, t, r, i, l, a, d) {
    if (r)
      return t.flags & 256 ? (t.flags &= -257, i = fs(Error(u(422))), bi(e, t, d, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = i.fallback, l = t.mode, i = nu({ mode: "visible", children: i.children }, l, 0, null), a = qn(a, l, d, null), a.flags |= 2, i.return = t, a.return = t, i.sibling = a, t.child = i, (t.mode & 1) !== 0 && _r(t, e.child, null, d), t.child.memoizedState = vs(d), t.memoizedState = ms, a);
    if ((t.mode & 1) === 0) return bi(e, t, d, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var v = i.dgst;
      return i = v, a = Error(u(419)), i = fs(a, i, void 0), bi(e, t, d, i);
    }
    if (v = (d & e.childLanes) !== 0, st || v) {
      if (i = Ue, i !== null) {
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
        l = (l & (i.suspendedLanes | d)) !== 0 ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, on(e, l), Mt(i, e, l, -1));
      }
      return Ls(), i = fs(Error(u(421))), bi(e, t, d, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cg.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, yt = En(l.nextSibling), gt = t, Re = !0, Dt = null, e !== null && (kt[xt++] = nn, kt[xt++] = rn, kt[xt++] = Wn, nn = e.id, rn = e.overflow, Wn = t), t = gs(t, i.children), t.flags |= 4096, t);
  }
  function nd(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Gl(e.return, t, r);
  }
  function ys(e, t, r, i, l) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: r, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = i, a.tail = r, a.tailMode = l);
  }
  function rd(e, t, r) {
    var i = t.pendingProps, l = i.revealOrder, a = i.tail;
    if (rt(e, t, i.children, r), i = Oe.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && nd(e, r, t);
        else if (e.tag === 19) nd(e, r, t);
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
    if (Ee(Oe, i), (t.mode & 1) === 0) t.memoizedState = null;
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
  function Vi(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function ln(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), Kn |= t.lanes, (r & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, r = An(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = An(e, e.pendingProps), r.return = t;
      r.sibling = null;
    }
    return t.child;
  }
  function Zv(e, t, r) {
    switch (t.tag) {
      case 3:
        Jf(t), Cr();
        break;
      case 5:
        gf(t);
        break;
      case 1:
        lt(t.type) && Pi(t);
        break;
      case 4:
        ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        Ee(Ai, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (Ee(Oe, Oe.current & 1), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? td(e, t, r) : (Ee(Oe, Oe.current & 1), e = ln(e, t, r), e !== null ? e.sibling : null);
        Ee(Oe, Oe.current & 1);
        break;
      case 19:
        if (i = (r & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return rd(e, t, r);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ee(Oe, Oe.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Xf(e, t, r);
    }
    return ln(e, t, r);
  }
  var od, ws, id, ud;
  od = function(e, t) {
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
  }, id = function(e, t, r, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, Hn(bt.current);
      var a = null;
      switch (r) {
        case "input":
          l = me(e, l), i = me(e, i), a = [];
          break;
        case "select":
          l = Y({}, l, { value: void 0 }), i = Y({}, i, { value: void 0 }), a = [];
          break;
        case "textarea":
          l = it(e, l), i = it(e, i), a = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = xi);
      }
      Yr(r, i);
      var d;
      r = null;
      for (D in l) if (!i.hasOwnProperty(D) && l.hasOwnProperty(D) && l[D] != null) if (D === "style") {
        var v = l[D];
        for (d in v) v.hasOwnProperty(d) && (r || (r = {}), r[d] = "");
      } else D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (c.hasOwnProperty(D) ? a || (a = []) : (a = a || []).push(D, null));
      for (D in i) {
        var w = i[D];
        if (v = l?.[D], i.hasOwnProperty(D) && w !== v && (w != null || v != null)) if (D === "style") if (v) {
          for (d in v) !v.hasOwnProperty(d) || w && w.hasOwnProperty(d) || (r || (r = {}), r[d] = "");
          for (d in w) w.hasOwnProperty(d) && v[d] !== w[d] && (r || (r = {}), r[d] = w[d]);
        } else r || (a || (a = []), a.push(
          D,
          r
        )), r = w;
        else D === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, v = v ? v.__html : void 0, w != null && v !== w && (a = a || []).push(D, w)) : D === "children" ? typeof w != "string" && typeof w != "number" || (a = a || []).push(D, "" + w) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (c.hasOwnProperty(D) ? (w != null && D === "onScroll" && xe("scroll", e), a || v === w || (a = [])) : (a = a || []).push(D, w));
      }
      r && (a = a || []).push("style", r);
      var D = a;
      (t.updateQueue = D) && (t.flags |= 4);
    }
  }, ud = function(e, t, r, i) {
    r !== i && (t.flags |= 4);
  };
  function Ro(e, t) {
    if (!Re) switch (e.tailMode) {
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
  function Jv(e, t, r) {
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
        return lt(t.type) && _i(), tt(t), null;
      case 3:
        return i = t.stateNode, Nr(), Ce(ut), Ce(Je), es(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Ti(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Dt !== null && (Ts(Dt), Dt = null))), ws(e, t), tt(t), null;
      case 5:
        Zl(t);
        var l = Hn(ko.current);
        if (r = t.type, e !== null && t.stateNode != null) id(e, t, r, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(u(166));
            return tt(t), null;
          }
          if (e = Hn(bt.current), Ti(t)) {
            i = t.stateNode, r = t.type;
            var a = t.memoizedProps;
            switch (i[Wt] = t, i[go] = a, e = (t.mode & 1) !== 0, r) {
              case "dialog":
                xe("cancel", i), xe("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ho.length; l++) xe(ho[l], i);
                break;
              case "source":
                xe("error", i);
                break;
              case "img":
              case "image":
              case "link":
                xe(
                  "error",
                  i
                ), xe("load", i);
                break;
              case "details":
                xe("toggle", i);
                break;
              case "input":
                Bt(i, a), xe("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!a.multiple }, xe("invalid", i);
                break;
              case "textarea":
                Gr(i, a), xe("invalid", i);
            }
            Yr(r, a), l = null;
            for (var d in a) if (a.hasOwnProperty(d)) {
              var v = a[d];
              d === "children" ? typeof v == "string" ? i.textContent !== v && (a.suppressHydrationWarning !== !0 && ki(i.textContent, v, e), l = ["children", v]) : typeof v == "number" && i.textContent !== "" + v && (a.suppressHydrationWarning !== !0 && ki(
                i.textContent,
                v,
                e
              ), l = ["children", "" + v]) : c.hasOwnProperty(d) && v != null && d === "onScroll" && xe("scroll", i);
            }
            switch (r) {
              case "input":
                Ne(i), Yt(i, a, !0);
                break;
              case "textarea":
                Ne(i), Jo(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (i.onclick = xi);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            d = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = pn(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = d.createElement(r, { is: i.is }) : (e = d.createElement(r), r === "select" && (d = e, i.multiple ? d.multiple = !0 : i.size && (d.size = i.size))) : e = d.createElementNS(e, r), e[Wt] = t, e[go] = i, od(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = el(r, i), r) {
                case "dialog":
                  xe("cancel", e), xe("close", e), l = i;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  xe("load", e), l = i;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ho.length; l++) xe(ho[l], e);
                  l = i;
                  break;
                case "source":
                  xe("error", e), l = i;
                  break;
                case "img":
                case "image":
                case "link":
                  xe(
                    "error",
                    e
                  ), xe("load", e), l = i;
                  break;
                case "details":
                  xe("toggle", e), l = i;
                  break;
                case "input":
                  Bt(e, i), l = me(e, i), xe("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = Y({}, i, { value: void 0 }), xe("invalid", e);
                  break;
                case "textarea":
                  Gr(e, i), l = it(e, i), xe("invalid", e);
                  break;
                default:
                  l = i;
              }
              Yr(r, l), v = l;
              for (a in v) if (v.hasOwnProperty(a)) {
                var w = v[a];
                a === "style" ? ti(e, w) : a === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && ar(e, w)) : a === "children" ? typeof w == "string" ? (r !== "textarea" || w !== "") && Zt(e, w) : typeof w == "number" && Zt(e, "" + w) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (c.hasOwnProperty(a) ? w != null && a === "onScroll" && xe("scroll", e) : w != null && A(e, a, w, d));
              }
              switch (r) {
                case "input":
                  Ne(e), Yt(e, i, !1);
                  break;
                case "textarea":
                  Ne(e), Jo(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + q(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, a = i.value, a != null ? $t(e, !!i.multiple, a, !1) : i.defaultValue != null && $t(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = xi);
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
        if (e && t.stateNode != null) ud(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(u(166));
          if (r = Hn(ko.current), Hn(bt.current), Ti(t)) {
            if (i = t.stateNode, r = t.memoizedProps, i[Wt] = t, (a = i.nodeValue !== r) && (e = gt, e !== null)) switch (e.tag) {
              case 3:
                ki(i.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ki(i.nodeValue, r, (e.mode & 1) !== 0);
            }
            a && (t.flags |= 4);
          } else i = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(i), i[Wt] = t, t.stateNode = i;
        }
        return tt(t), null;
      case 13:
        if (Ce(Oe), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Re && yt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) af(), Cr(), t.flags |= 98560, a = !1;
          else if (a = Ti(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(u(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(u(317));
              a[Wt] = t;
            } else Cr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            tt(t), a = !1;
          } else Dt !== null && (Ts(Dt), Dt = null), a = !0;
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = r, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Oe.current & 1) !== 0 ? Be === 0 && (Be = 3) : Ls())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
      case 4:
        return Nr(), ws(e, t), e === null && mo(t.stateNode.containerInfo), tt(t), null;
      case 10:
        return Kl(t.type._context), tt(t), null;
      case 17:
        return lt(t.type) && _i(), tt(t), null;
      case 19:
        if (Ce(Oe), a = t.memoizedState, a === null) return tt(t), null;
        if (i = (t.flags & 128) !== 0, d = a.rendering, d === null) if (i) Ro(a, !1);
        else {
          if (Be !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = ji(e), d !== null) {
              for (t.flags |= 128, Ro(a, !1), i = d.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = r, r = t.child; r !== null; ) a = r, e = i, a.flags &= 14680066, d = a.alternate, d === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = d.childLanes, a.lanes = d.lanes, a.child = d.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = d.memoizedProps, a.memoizedState = d.memoizedState, a.updateQueue = d.updateQueue, a.type = d.type, e = d.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
              return Ee(Oe, Oe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          a.tail !== null && Ae() > Ar && (t.flags |= 128, i = !0, Ro(a, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = ji(d), e !== null) {
            if (t.flags |= 128, i = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Ro(a, !0), a.tail === null && a.tailMode === "hidden" && !d.alternate && !Re) return tt(t), null;
          } else 2 * Ae() - a.renderingStartTime > Ar && r !== 1073741824 && (t.flags |= 128, i = !0, Ro(a, !1), t.lanes = 4194304);
          a.isBackwards ? (d.sibling = t.child, t.child = d) : (r = a.last, r !== null ? r.sibling = d : t.child = d, a.last = d);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ae(), t.sibling = null, r = Oe.current, Ee(Oe, i ? r & 1 | 2 : r & 1), t) : (tt(t), null);
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
  function eg(e, t) {
    switch (Ul(t), t.tag) {
      case 1:
        return lt(t.type) && _i(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Nr(), Ce(ut), Ce(Je), es(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Zl(t), null;
      case 13:
        if (Ce(Oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          Cr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ce(Oe), null;
      case 4:
        return Nr(), null;
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
  var Hi = !1, nt = !1, tg = typeof WeakSet == "function" ? WeakSet : Set, ee = null;
  function Tr(e, t) {
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
  var ld = !1;
  function ng(e, t) {
    if (Al = fi, e = zc(), Cl(e)) {
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
          var d = 0, v = -1, w = -1, D = 0, U = 0, b = e, $ = null;
          t: for (; ; ) {
            for (var Z; b !== r || l !== 0 && b.nodeType !== 3 || (v = d + l), b !== a || i !== 0 && b.nodeType !== 3 || (w = d + i), b.nodeType === 3 && (d += b.nodeValue.length), (Z = b.firstChild) !== null; )
              $ = b, b = Z;
            for (; ; ) {
              if (b === e) break t;
              if ($ === r && ++D === l && (v = d), $ === a && ++U === i && (w = d), (Z = b.nextSibling) !== null) break;
              b = $, $ = b.parentNode;
            }
            b = Z;
          }
          r = v === -1 || w === -1 ? null : { start: v, end: w };
        } else r = null;
      }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Ll = { focusedElem: e, selectionRange: r }, fi = !1, ee = t; ee !== null; ) if (t = ee, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ee = e;
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
              var re = te.memoizedProps, Le = te.memoizedState, R = t.stateNode, E = R.getSnapshotBeforeUpdate(t.elementType === t.type ? re : At(t.type, re), Le);
              R.__reactInternalSnapshotBeforeUpdate = E;
            }
            break;
          case 3:
            var N = t.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (V) {
        De(t, t.return, V);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ee = e;
        break;
      }
      ee = t.return;
    }
    return te = ld, ld = !1, te;
  }
  function No(e, t, r) {
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
  function Qi(e, t) {
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
  function sd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, sd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Wt], delete t[go], delete t[Fl], delete t[zv], delete t[Bv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ad(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function cd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ad(e.return)) return null;
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
    if (i === 5 || i === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = xi));
    else if (i !== 4 && (e = e.child, e !== null)) for (ks(e, t, r), e = e.sibling; e !== null; ) ks(e, t, r), e = e.sibling;
  }
  function xs(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (xs(e, t, r), e = e.sibling; e !== null; ) xs(e, t, r), e = e.sibling;
  }
  var Qe = null, Lt = !1;
  function Rn(e, t, r) {
    for (r = r.child; r !== null; ) fd(e, t, r), r = r.sibling;
  }
  function fd(e, t, r) {
    if (Ut && typeof Ut.onCommitFiberUnmount == "function") try {
      Ut.onCommitFiberUnmount(ii, r);
    } catch {
    }
    switch (r.tag) {
      case 5:
        nt || Tr(r, t);
      case 6:
        var i = Qe, l = Lt;
        Qe = null, Rn(e, t, r), Qe = i, Lt = l, Qe !== null && (Lt ? (e = Qe, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Qe.removeChild(r.stateNode));
        break;
      case 18:
        Qe !== null && (Lt ? (e = Qe, r = r.stateNode, e.nodeType === 8 ? jl(e.parentNode, r) : e.nodeType === 1 && jl(e, r), io(e)) : jl(Qe, r.stateNode));
        break;
      case 4:
        i = Qe, l = Lt, Qe = r.stateNode.containerInfo, Lt = !0, Rn(e, t, r), Qe = i, Lt = l;
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
        if (!nt && (Tr(r, t), i = r.stateNode, typeof i.componentWillUnmount == "function")) try {
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
  function dd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new tg()), t.forEach(function(i) {
        var l = fg.bind(null, e, i);
        r.has(i) || (r.add(i), i.then(l, l));
      });
    }
  }
  function It(e, t) {
    var r = t.deletions;
    if (r !== null) for (var i = 0; i < r.length; i++) {
      var l = r[i];
      try {
        var a = e, d = t, v = d;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 5:
              Qe = v.stateNode, Lt = !1;
              break e;
            case 3:
              Qe = v.stateNode.containerInfo, Lt = !0;
              break e;
            case 4:
              Qe = v.stateNode.containerInfo, Lt = !0;
              break e;
          }
          v = v.return;
        }
        if (Qe === null) throw Error(u(160));
        fd(a, d, l), Qe = null, Lt = !1;
        var w = l.alternate;
        w !== null && (w.return = null), l.return = null;
      } catch (D) {
        De(l, t, D);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) pd(t, e), t = t.sibling;
  }
  function pd(e, t) {
    var r = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (It(t, e), Ht(e), i & 4) {
          try {
            No(3, e, e.return), Qi(3, e);
          } catch (re) {
            De(e, e.return, re);
          }
          try {
            No(5, e, e.return);
          } catch (re) {
            De(e, e.return, re);
          }
        }
        break;
      case 1:
        It(t, e), Ht(e), i & 512 && r !== null && Tr(r, r.return);
        break;
      case 5:
        if (It(t, e), Ht(e), i & 512 && r !== null && Tr(r, r.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Zt(l, "");
          } catch (re) {
            De(e, e.return, re);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var a = e.memoizedProps, d = r !== null ? r.memoizedProps : a, v = e.type, w = e.updateQueue;
          if (e.updateQueue = null, w !== null) try {
            v === "input" && a.type === "radio" && a.name != null && Et(l, a), el(v, d);
            var D = el(v, a);
            for (d = 0; d < w.length; d += 2) {
              var U = w[d], b = w[d + 1];
              U === "style" ? ti(l, b) : U === "dangerouslySetInnerHTML" ? ar(l, b) : U === "children" ? Zt(l, b) : A(l, U, b, D);
            }
            switch (v) {
              case "input":
                ke(l, a);
                break;
              case "textarea":
                Zo(l, a);
                break;
              case "select":
                var $ = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!a.multiple;
                var Z = a.value;
                Z != null ? $t(l, !!a.multiple, Z, !1) : $ !== !!a.multiple && (a.defaultValue != null ? $t(
                  l,
                  !!a.multiple,
                  a.defaultValue,
                  !0
                ) : $t(l, !!a.multiple, a.multiple ? [] : "", !1));
            }
            l[go] = a;
          } catch (re) {
            De(e, e.return, re);
          }
        }
        break;
      case 6:
        if (It(t, e), Ht(e), i & 4) {
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
        if (It(t, e), Ht(e), i & 4 && r !== null && r.memoizedState.isDehydrated) try {
          io(t.containerInfo);
        } catch (re) {
          De(e, e.return, re);
        }
        break;
      case 4:
        It(t, e), Ht(e);
        break;
      case 13:
        It(t, e), Ht(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (Ps = Ae())), i & 4 && dd(e);
        break;
      case 22:
        if (U = r !== null && r.memoizedState !== null, e.mode & 1 ? (nt = (D = nt) || U, It(t, e), nt = D) : It(t, e), Ht(e), i & 8192) {
          if (D = e.memoizedState !== null, (e.stateNode.isHidden = D) && !U && (e.mode & 1) !== 0) for (ee = e, U = e.child; U !== null; ) {
            for (b = ee = U; ee !== null; ) {
              switch ($ = ee, Z = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  No(4, $, $.return);
                  break;
                case 1:
                  Tr($, $.return);
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
                  Tr($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    vd(b);
                    continue;
                  }
              }
              Z !== null ? (Z.return = $, ee = Z) : vd(b);
            }
            U = U.sibling;
          }
          e: for (U = null, b = e; ; ) {
            if (b.tag === 5) {
              if (U === null) {
                U = b;
                try {
                  l = b.stateNode, D ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (v = b.stateNode, w = b.memoizedProps.style, d = w != null && w.hasOwnProperty("display") ? w.display : null, v.style.display = ei("display", d));
                } catch (re) {
                  De(e, e.return, re);
                }
              }
            } else if (b.tag === 6) {
              if (U === null) try {
                b.stateNode.nodeValue = D ? "" : b.memoizedProps;
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
        It(t, e), Ht(e), i & 4 && dd(e);
        break;
      case 21:
        break;
      default:
        It(
          t,
          e
        ), Ht(e);
    }
  }
  function Ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (ad(r)) {
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
            i.flags & 32 && (Zt(l, ""), i.flags &= -33);
            var a = cd(e);
            xs(e, a, l);
            break;
          case 3:
          case 4:
            var d = i.stateNode.containerInfo, v = cd(e);
            ks(e, v, d);
            break;
          default:
            throw Error(u(161));
        }
      } catch (w) {
        De(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function rg(e, t, r) {
    ee = e, hd(e);
  }
  function hd(e, t, r) {
    for (var i = (e.mode & 1) !== 0; ee !== null; ) {
      var l = ee, a = l.child;
      if (l.tag === 22 && i) {
        var d = l.memoizedState !== null || Hi;
        if (!d) {
          var v = l.alternate, w = v !== null && v.memoizedState !== null || nt;
          v = Hi;
          var D = nt;
          if (Hi = d, (nt = w) && !D) for (ee = l; ee !== null; ) d = ee, w = d.child, d.tag === 22 && d.memoizedState !== null ? gd(l) : w !== null ? (w.return = d, ee = w) : gd(l);
          for (; a !== null; ) ee = a, hd(a), a = a.sibling;
          ee = l, Hi = v, nt = D;
        }
        md(e);
      } else (l.subtreeFlags & 8772) !== 0 && a !== null ? (a.return = l, ee = a) : md(e);
    }
  }
  function md(e) {
    for (; ee !== null; ) {
      var t = ee;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              nt || Qi(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !nt) if (r === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? r.memoizedProps : At(t.type, r.memoizedProps);
                i.componentDidUpdate(l, r.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var a = t.updateQueue;
              a !== null && vf(t, a, i);
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
                vf(t, d, r);
              }
              break;
            case 5:
              var v = t.stateNode;
              if (r === null && t.flags & 4) {
                r = v;
                var w = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    w.autoFocus && r.focus();
                    break;
                  case "img":
                    w.src && (r.src = w.src);
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
                var D = t.alternate;
                if (D !== null) {
                  var U = D.memoizedState;
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
  function vd(e) {
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
  function gd(e) {
    for (; ee !== null; ) {
      var t = ee;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Qi(4, t);
            } catch (w) {
              De(t, r, w);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (w) {
                De(t, l, w);
              }
            }
            var a = t.return;
            try {
              Es(t);
            } catch (w) {
              De(t, a, w);
            }
            break;
          case 5:
            var d = t.return;
            try {
              Es(t);
            } catch (w) {
              De(t, d, w);
            }
        }
      } catch (w) {
        De(t, t.return, w);
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
  var og = Math.ceil, Ki = j.ReactCurrentDispatcher, Cs = j.ReactCurrentOwner, Pt = j.ReactCurrentBatchConfig, de = 0, Ue = null, Ie = null, Ke = 0, wt = 0, Dr = kn(0), Be = 0, Oo = null, Kn = 0, Gi = 0, _s = 0, To = null, at = null, Ps = 0, Ar = 1 / 0, sn = null, Yi = !1, Rs = null, Nn = null, Xi = !1, On = null, qi = 0, Do = 0, Ns = null, Zi = -1, Ji = 0;
  function ot() {
    return (de & 6) !== 0 ? Ae() : Zi !== -1 ? Zi : Zi = Ae();
  }
  function Tn(e) {
    return (e.mode & 1) === 0 ? 1 : (de & 2) !== 0 && Ke !== 0 ? Ke & -Ke : Uv.transition !== null ? (Ji === 0 && (Ji = ac()), Ji) : (e = ye, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yc(e.type)), e);
  }
  function Mt(e, t, r, i) {
    if (50 < Do) throw Do = 0, Ns = null, Error(u(185));
    eo(e, r, i), ((de & 2) === 0 || e !== Ue) && (e === Ue && ((de & 2) === 0 && (Gi |= r), Be === 4 && Dn(e, Ke)), ct(e, i), r === 1 && de === 0 && (t.mode & 1) === 0 && (Ar = Ae() + 500, Ri && Cn()));
  }
  function ct(e, t) {
    var r = e.callbackNode;
    Um(e, t);
    var i = si(e, e === Ue ? Ke : 0);
    if (i === 0) r !== null && uc(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (r != null && uc(r), t === 1) e.tag === 0 ? $v(wd.bind(null, e)) : rf(wd.bind(null, e)), jv(function() {
        (de & 6) === 0 && Cn();
      }), r = null;
      else {
        switch (cc(i)) {
          case 1:
            r = ll;
            break;
          case 4:
            r = lc;
            break;
          case 16:
            r = oi;
            break;
          case 536870912:
            r = sc;
            break;
          default:
            r = oi;
        }
        r = Rd(r, yd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = r;
    }
  }
  function yd(e, t) {
    if (Zi = -1, Ji = 0, (de & 6) !== 0) throw Error(u(327));
    var r = e.callbackNode;
    if (Lr() && e.callbackNode !== r) return null;
    var i = si(e, e === Ue ? Ke : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = eu(e, i);
    else {
      t = i;
      var l = de;
      de |= 2;
      var a = Ed();
      (Ue !== e || Ke !== t) && (sn = null, Ar = Ae() + 500, Yn(e, t));
      do
        try {
          lg();
          break;
        } catch (v) {
          Sd(e, v);
        }
      while (!0);
      Ql(), Ki.current = a, de = l, Ie !== null ? t = 0 : (Ue = null, Ke = 0, t = Be);
    }
    if (t !== 0) {
      if (t === 2 && (l = sl(e), l !== 0 && (i = l, t = Os(e, l))), t === 1) throw r = Oo, Yn(e, 0), Dn(e, i), ct(e, Ae()), r;
      if (t === 6) Dn(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !ig(l) && (t = eu(e, i), t === 2 && (a = sl(e), a !== 0 && (i = a, t = Os(e, a))), t === 1)) throw r = Oo, Yn(e, 0), Dn(e, i), ct(e, Ae()), r;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            Xn(e, at, sn);
            break;
          case 3:
            if (Dn(e, i), (i & 130023424) === i && (t = Ps + 500 - Ae(), 10 < t)) {
              if (si(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                ot(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Ml(Xn.bind(null, e, at, sn), t);
              break;
            }
            Xn(e, at, sn);
            break;
          case 4:
            if (Dn(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var d = 31 - Ot(i);
              a = 1 << d, d = t[d], d > l && (l = d), i &= ~a;
            }
            if (i = l, i = Ae() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * og(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = Ml(Xn.bind(null, e, at, sn), i);
              break;
            }
            Xn(e, at, sn);
            break;
          case 5:
            Xn(e, at, sn);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return ct(e, Ae()), e.callbackNode === r ? yd.bind(null, e) : null;
  }
  function Os(e, t) {
    var r = To;
    return e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256), e = eu(e, t), e !== 2 && (t = at, at = r, t !== null && Ts(t)), e;
  }
  function Ts(e) {
    at === null ? at = e : at.push.apply(at, e);
  }
  function ig(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && (r = r.stores, r !== null)) for (var i = 0; i < r.length; i++) {
          var l = r[i], a = l.getSnapshot;
          l = l.value;
          try {
            if (!Tt(a(), l)) return !1;
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
  function Dn(e, t) {
    for (t &= ~_s, t &= ~Gi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var r = 31 - Ot(t), i = 1 << r;
      e[r] = -1, t &= ~i;
    }
  }
  function wd(e) {
    if ((de & 6) !== 0) throw Error(u(327));
    Lr();
    var t = si(e, 0);
    if ((t & 1) === 0) return ct(e, Ae()), null;
    var r = eu(e, t);
    if (e.tag !== 0 && r === 2) {
      var i = sl(e);
      i !== 0 && (t = i, r = Os(e, i));
    }
    if (r === 1) throw r = Oo, Yn(e, 0), Dn(e, t), ct(e, Ae()), r;
    if (r === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Xn(e, at, sn), ct(e, Ae()), null;
  }
  function Ds(e, t) {
    var r = de;
    de |= 1;
    try {
      return e(t);
    } finally {
      de = r, de === 0 && (Ar = Ae() + 500, Ri && Cn());
    }
  }
  function Gn(e) {
    On !== null && On.tag === 0 && (de & 6) === 0 && Lr();
    var t = de;
    de |= 1;
    var r = Pt.transition, i = ye;
    try {
      if (Pt.transition = null, ye = 1, e) return e();
    } finally {
      ye = i, Pt.transition = r, de = t, (de & 6) === 0 && Cn();
    }
  }
  function As() {
    wt = Dr.current, Ce(Dr);
  }
  function Yn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, Mv(r)), Ie !== null) for (r = Ie.return; r !== null; ) {
      var i = r;
      switch (Ul(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && _i();
          break;
        case 3:
          Nr(), Ce(ut), Ce(Je), es();
          break;
        case 5:
          Zl(i);
          break;
        case 4:
          Nr();
          break;
        case 13:
          Ce(Oe);
          break;
        case 19:
          Ce(Oe);
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
    if (Ue = e, Ie = e = An(e.current, null), Ke = wt = t, Be = 0, Oo = null, _s = Gi = Kn = 0, at = To = null, Vn !== null) {
      for (t = 0; t < Vn.length; t++) if (r = Vn[t], i = r.interleaved, i !== null) {
        r.interleaved = null;
        var l = i.next, a = r.pending;
        if (a !== null) {
          var d = a.next;
          a.next = l, i.next = d;
        }
        r.pending = i;
      }
      Vn = null;
    }
    return e;
  }
  function Sd(e, t) {
    do {
      var r = Ie;
      try {
        if (Ql(), Fi.current = Ui, zi) {
          for (var i = Te.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          zi = !1;
        }
        if (Qn = 0, $e = ze = Te = null, xo = !1, Co = 0, Cs.current = null, r === null || r.return === null) {
          Be = 1, Oo = t, Ie = null;
          break;
        }
        e: {
          var a = e, d = r.return, v = r, w = t;
          if (t = Ke, v.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var D = w, U = v, b = U.tag;
            if ((U.mode & 1) === 0 && (b === 0 || b === 11 || b === 15)) {
              var $ = U.alternate;
              $ ? (U.updateQueue = $.updateQueue, U.memoizedState = $.memoizedState, U.lanes = $.lanes) : (U.updateQueue = null, U.memoizedState = null);
            }
            var Z = Hf(d);
            if (Z !== null) {
              Z.flags &= -257, Qf(Z, d, v, a, t), Z.mode & 1 && Vf(a, D, t), t = Z, w = D;
              var te = t.updateQueue;
              if (te === null) {
                var re = /* @__PURE__ */ new Set();
                re.add(w), t.updateQueue = re;
              } else te.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                Vf(a, D, t), Ls();
                break e;
              }
              w = Error(u(426));
            }
          } else if (Re && v.mode & 1) {
            var Le = Hf(d);
            if (Le !== null) {
              (Le.flags & 65536) === 0 && (Le.flags |= 256), Qf(Le, d, v, a, t), Vl(Or(w, v));
              break e;
            }
          }
          a = w = Or(w, v), Be !== 4 && (Be = 2), To === null ? To = [a] : To.push(a), a = d;
          do {
            switch (a.tag) {
              case 3:
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var R = Wf(a, w, t);
                mf(a, R);
                break e;
              case 1:
                v = w;
                var E = a.type, N = a.stateNode;
                if ((a.flags & 128) === 0 && (typeof E.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Nn === null || !Nn.has(N)))) {
                  a.flags |= 65536, t &= -t, a.lanes |= t;
                  var V = bf(a, v, t);
                  mf(a, V);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        xd(r);
      } catch (oe) {
        t = oe, Ie === r && r !== null && (Ie = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ed() {
    var e = Ki.current;
    return Ki.current = Ui, e === null ? Ui : e;
  }
  function Ls() {
    (Be === 0 || Be === 3 || Be === 2) && (Be = 4), Ue === null || (Kn & 268435455) === 0 && (Gi & 268435455) === 0 || Dn(Ue, Ke);
  }
  function eu(e, t) {
    var r = de;
    de |= 2;
    var i = Ed();
    (Ue !== e || Ke !== t) && (sn = null, Yn(e, t));
    do
      try {
        ug();
        break;
      } catch (l) {
        Sd(e, l);
      }
    while (!0);
    if (Ql(), de = r, Ki.current = i, Ie !== null) throw Error(u(261));
    return Ue = null, Ke = 0, Be;
  }
  function ug() {
    for (; Ie !== null; ) kd(Ie);
  }
  function lg() {
    for (; Ie !== null && !Am(); ) kd(Ie);
  }
  function kd(e) {
    var t = Pd(e.alternate, e, wt);
    e.memoizedProps = e.pendingProps, t === null ? xd(e) : Ie = t, Cs.current = null;
  }
  function xd(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (r = Jv(r, t, wt), r !== null) {
          Ie = r;
          return;
        }
      } else {
        if (r = eg(r, t), r !== null) {
          r.flags &= 32767, Ie = r;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Be = 6, Ie = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function Xn(e, t, r) {
    var i = ye, l = Pt.transition;
    try {
      Pt.transition = null, ye = 1, sg(e, t, r, i);
    } finally {
      Pt.transition = l, ye = i;
    }
    return null;
  }
  function sg(e, t, r, i) {
    do
      Lr();
    while (On !== null);
    if ((de & 6) !== 0) throw Error(u(327));
    r = e.finishedWork;
    var l = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var a = r.lanes | r.childLanes;
    if (Wm(e, a), e === Ue && (Ie = Ue = null, Ke = 0), (r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0 || Xi || (Xi = !0, Rd(oi, function() {
      return Lr(), null;
    })), a = (r.flags & 15990) !== 0, (r.subtreeFlags & 15990) !== 0 || a) {
      a = Pt.transition, Pt.transition = null;
      var d = ye;
      ye = 1;
      var v = de;
      de |= 4, Cs.current = null, ng(e, r), pd(r, e), Nv(Ll), fi = !!Al, Ll = Al = null, e.current = r, rg(r), Lm(), de = v, ye = d, Pt.transition = a;
    } else e.current = r;
    if (Xi && (Xi = !1, On = e, qi = l), a = e.pendingLanes, a === 0 && (Nn = null), jm(r.stateNode), ct(e, Ae()), t !== null) for (i = e.onRecoverableError, r = 0; r < t.length; r++) l = t[r], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (Yi) throw Yi = !1, e = Rs, Rs = null, e;
    return (qi & 1) !== 0 && e.tag !== 0 && Lr(), a = e.pendingLanes, (a & 1) !== 0 ? e === Ns ? Do++ : (Do = 0, Ns = e) : Do = 0, Cn(), null;
  }
  function Lr() {
    if (On !== null) {
      var e = cc(qi), t = Pt.transition, r = ye;
      try {
        if (Pt.transition = null, ye = 16 > e ? 16 : e, On === null) var i = !1;
        else {
          if (e = On, On = null, qi = 0, (de & 6) !== 0) throw Error(u(331));
          var l = de;
          for (de |= 4, ee = e.current; ee !== null; ) {
            var a = ee, d = a.child;
            if ((ee.flags & 16) !== 0) {
              var v = a.deletions;
              if (v !== null) {
                for (var w = 0; w < v.length; w++) {
                  var D = v[w];
                  for (ee = D; ee !== null; ) {
                    var U = ee;
                    switch (U.tag) {
                      case 0:
                      case 11:
                      case 15:
                        No(8, U, a);
                    }
                    var b = U.child;
                    if (b !== null) b.return = U, ee = b;
                    else for (; ee !== null; ) {
                      U = ee;
                      var $ = U.sibling, Z = U.return;
                      if (sd(U), U === D) {
                        ee = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = Z, ee = $;
                        break;
                      }
                      ee = Z;
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
                  No(9, a, a.return);
              }
              var R = a.sibling;
              if (R !== null) {
                R.return = a.return, ee = R;
                break e;
              }
              ee = a.return;
            }
          }
          var E = e.current;
          for (ee = E; ee !== null; ) {
            d = ee;
            var N = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && N !== null) N.return = d, ee = N;
            else e: for (d = E; ee !== null; ) {
              if (v = ee, (v.flags & 2048) !== 0) try {
                switch (v.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qi(9, v);
                }
              } catch (oe) {
                De(v, v.return, oe);
              }
              if (v === d) {
                ee = null;
                break e;
              }
              var V = v.sibling;
              if (V !== null) {
                V.return = v.return, ee = V;
                break e;
              }
              ee = v.return;
            }
          }
          if (de = l, Cn(), Ut && typeof Ut.onPostCommitFiberRoot == "function") try {
            Ut.onPostCommitFiberRoot(ii, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        ye = r, Pt.transition = t;
      }
    }
    return !1;
  }
  function Cd(e, t, r) {
    t = Or(r, t), t = Wf(e, t, 1), e = Pn(e, t, 1), t = ot(), e !== null && (eo(e, 1, t), ct(e, t));
  }
  function De(e, t, r) {
    if (e.tag === 3) Cd(e, e, r);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Cd(t, e, r);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Nn === null || !Nn.has(i))) {
          e = Or(r, e), e = bf(t, e, 1), t = Pn(t, e, 1), e = ot(), t !== null && (eo(t, 1, e), ct(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function ag(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = ot(), e.pingedLanes |= e.suspendedLanes & r, Ue === e && (Ke & r) === r && (Be === 4 || Be === 3 && (Ke & 130023424) === Ke && 500 > Ae() - Ps ? Yn(e, 0) : _s |= r), ct(e, t);
  }
  function _d(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = li, li <<= 1, (li & 130023424) === 0 && (li = 4194304)));
    var r = ot();
    e = on(e, t), e !== null && (eo(e, t, r), ct(e, r));
  }
  function cg(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), _d(e, r);
  }
  function fg(e, t) {
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
    i !== null && i.delete(t), _d(e, r);
  }
  var Pd;
  Pd = function(e, t, r) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || ut.current) st = !0;
    else {
      if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return st = !1, Zv(e, t, r);
      st = (e.flags & 131072) !== 0;
    }
    else st = !1, Re && (t.flags & 1048576) !== 0 && of(t, Oi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Vi(e, t), e = t.pendingProps;
        var l = Er(t, Je.current);
        Rr(t, r), l = rs(null, t, i, e, l, r);
        var a = os();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, lt(i) ? (a = !0, Pi(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Xl(t), l.updater = Wi, t.stateNode = l, l._reactInternals = t, cs(t, i, e, r), t = hs(null, t, i, !0, a, r)) : (t.tag = 0, Re && a && $l(t), rt(null, t, l, r), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Vi(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = pg(i), e = At(i, e), l) {
            case 0:
              t = ps(null, t, i, e, r);
              break e;
            case 1:
              t = Zf(null, t, i, e, r);
              break e;
            case 11:
              t = Kf(null, t, i, e, r);
              break e;
            case 14:
              t = Gf(null, t, i, At(i.type, e), r);
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
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : At(i, l), ps(e, t, i, l, r);
      case 1:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : At(i, l), Zf(e, t, i, l, r);
      case 3:
        e: {
          if (Jf(t), e === null) throw Error(u(387));
          i = t.pendingProps, a = t.memoizedState, l = a.element, hf(e, t), Mi(t, i, null, r);
          var d = t.memoizedState;
          if (i = d.element, a.isDehydrated) if (a = { element: i, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
            l = Or(Error(u(423)), t), t = ed(e, t, i, r, l);
            break e;
          } else if (i !== l) {
            l = Or(Error(u(424)), t), t = ed(e, t, i, r, l);
            break e;
          } else for (yt = En(t.stateNode.containerInfo.firstChild), gt = t, Re = !0, Dt = null, r = df(t, null, i, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (Cr(), i === l) {
              t = ln(e, t, r);
              break e;
            }
            rt(e, t, i, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return gf(t), e === null && bl(t), i = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, d = l.children, Il(i, l) ? d = null : a !== null && Il(i, a) && (t.flags |= 32), qf(e, t), rt(e, t, d, r), t.child;
      case 6:
        return e === null && bl(t), null;
      case 13:
        return td(e, t, r);
      case 4:
        return ql(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = _r(t, null, i, r) : rt(e, t, i, r), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : At(i, l), Kf(e, t, i, l, r);
      case 7:
        return rt(e, t, t.pendingProps, r), t.child;
      case 8:
        return rt(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return rt(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, a = t.memoizedProps, d = l.value, Ee(Ai, i._currentValue), i._currentValue = d, a !== null) if (Tt(a.value, d)) {
            if (a.children === l.children && !ut.current) {
              t = ln(e, t, r);
              break e;
            }
          } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
            var v = a.dependencies;
            if (v !== null) {
              d = a.child;
              for (var w = v.firstContext; w !== null; ) {
                if (w.context === i) {
                  if (a.tag === 1) {
                    w = un(-1, r & -r), w.tag = 2;
                    var D = a.updateQueue;
                    if (D !== null) {
                      D = D.shared;
                      var U = D.pending;
                      U === null ? w.next = w : (w.next = U.next, U.next = w), D.pending = w;
                    }
                  }
                  a.lanes |= r, w = a.alternate, w !== null && (w.lanes |= r), Gl(
                    a.return,
                    r,
                    t
                  ), v.lanes |= r;
                  break;
                }
                w = w.next;
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
        return l = t.type, i = t.pendingProps.children, Rr(t, r), l = Ct(l), i = i(l), t.flags |= 1, rt(e, t, i, r), t.child;
      case 14:
        return i = t.type, l = At(i, t.pendingProps), l = At(i.type, l), Gf(e, t, i, l, r);
      case 15:
        return Yf(e, t, t.type, t.pendingProps, r);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : At(i, l), Vi(e, t), t.tag = 1, lt(i) ? (e = !0, Pi(t)) : e = !1, Rr(t, r), $f(t, i, l), cs(t, i, l, r), hs(null, t, i, !0, e, r);
      case 19:
        return rd(e, t, r);
      case 22:
        return Xf(e, t, r);
    }
    throw Error(u(156, t.tag));
  };
  function Rd(e, t) {
    return ic(e, t);
  }
  function dg(e, t, r, i) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Rt(e, t, r, i) {
    return new dg(e, t, r, i);
  }
  function Is(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function pg(e) {
    if (typeof e == "function") return Is(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ve) return 11;
      if (e === je) return 14;
    }
    return 2;
  }
  function An(e, t) {
    var r = e.alternate;
    return r === null ? (r = Rt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
  }
  function tu(e, t, r, i, l, a) {
    var d = 2;
    if (i = e, typeof e == "function") Is(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case F:
        return qn(r.children, l, a, t);
      case ie:
        d = 8, l |= 8;
        break;
      case we:
        return e = Rt(12, r, t, l | 2), e.elementType = we, e.lanes = a, e;
      case He:
        return e = Rt(13, r, t, l), e.elementType = He, e.lanes = a, e;
      case qe:
        return e = Rt(19, r, t, l), e.elementType = qe, e.lanes = a, e;
      case he:
        return nu(r, l, a, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Pe:
            d = 10;
            break e;
          case ht:
            d = 9;
            break e;
          case Ve:
            d = 11;
            break e;
          case je:
            d = 14;
            break e;
          case Fe:
            d = 16, i = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = Rt(d, r, t, l), t.elementType = e, t.type = i, t.lanes = a, t;
  }
  function qn(e, t, r, i) {
    return e = Rt(7, e, i, t), e.lanes = r, e;
  }
  function nu(e, t, r, i) {
    return e = Rt(22, e, i, t), e.elementType = he, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
  }
  function Ms(e, t, r) {
    return e = Rt(6, e, null, t), e.lanes = r, e;
  }
  function js(e, t, r) {
    return t = Rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function hg(e, t, r, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = al(0), this.expirationTimes = al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = al(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Fs(e, t, r, i, l, a, d, v, w) {
    return e = new hg(e, t, r, v, w), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = Rt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: i, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xl(a), e;
  }
  function mg(e, t, r) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Q, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: r };
  }
  function Nd(e) {
    if (!e) return xn;
    e = e._reactInternals;
    e: {
      if (Bn(e) !== e || e.tag !== 1) throw Error(u(170));
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
      if (lt(r)) return tf(e, r, t);
    }
    return t;
  }
  function Od(e, t, r, i, l, a, d, v, w) {
    return e = Fs(r, i, !0, e, l, a, d, v, w), e.context = Nd(null), r = e.current, i = ot(), l = Tn(r), a = un(i, l), a.callback = t ?? null, Pn(r, a, l), e.current.lanes = l, eo(e, l, i), ct(e, i), e;
  }
  function ru(e, t, r, i) {
    var l = t.current, a = ot(), d = Tn(l);
    return r = Nd(r), t.context === null ? t.context = r : t.pendingContext = r, t = un(a, d), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = Pn(l, t, d), e !== null && (Mt(e, l, d, a), Ii(e, l, d)), d;
  }
  function ou(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Td(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function zs(e, t) {
    Td(e, t), (e = e.alternate) && Td(e, t);
  }
  function vg() {
    return null;
  }
  var Dd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Bs(e) {
    this._internalRoot = e;
  }
  iu.prototype.render = Bs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    ru(e, t, null, null);
  }, iu.prototype.unmount = Bs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Gn(function() {
        ru(null, e, null, null);
      }), t[en] = null;
    }
  };
  function iu(e) {
    this._internalRoot = e;
  }
  iu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = pc();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < yn.length && t !== 0 && t < yn[r].priority; r++) ;
      yn.splice(r, 0, e), r === 0 && vc(e);
    }
  };
  function $s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function uu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ad() {
  }
  function gg(e, t, r, i, l) {
    if (l) {
      if (typeof i == "function") {
        var a = i;
        i = function() {
          var D = ou(d);
          a.call(D);
        };
      }
      var d = Od(t, i, e, 0, null, !1, !1, "", Ad);
      return e._reactRootContainer = d, e[en] = d.current, mo(e.nodeType === 8 ? e.parentNode : e), Gn(), d;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var v = i;
      i = function() {
        var D = ou(w);
        v.call(D);
      };
    }
    var w = Fs(e, 0, !1, null, null, !1, !1, "", Ad);
    return e._reactRootContainer = w, e[en] = w.current, mo(e.nodeType === 8 ? e.parentNode : e), Gn(function() {
      ru(t, w, r, i);
    }), w;
  }
  function lu(e, t, r, i, l) {
    var a = r._reactRootContainer;
    if (a) {
      var d = a;
      if (typeof l == "function") {
        var v = l;
        l = function() {
          var w = ou(d);
          v.call(w);
        };
      }
      ru(t, d, e, l);
    } else d = gg(r, t, e, l, i);
    return ou(d);
  }
  fc = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Jr(t.pendingLanes);
          r !== 0 && (cl(t, r | 1), ct(t, Ae()), (de & 6) === 0 && (Ar = Ae() + 500, Cn()));
        }
        break;
      case 13:
        Gn(function() {
          var i = on(e, 1);
          if (i !== null) {
            var l = ot();
            Mt(i, e, 1, l);
          }
        }), zs(e, 1);
    }
  }, fl = function(e) {
    if (e.tag === 13) {
      var t = on(e, 134217728);
      if (t !== null) {
        var r = ot();
        Mt(t, e, 134217728, r);
      }
      zs(e, 134217728);
    }
  }, dc = function(e) {
    if (e.tag === 13) {
      var t = Tn(e), r = on(e, t);
      if (r !== null) {
        var i = ot();
        Mt(r, e, t, i);
      }
      zs(e, t);
    }
  }, pc = function() {
    return ye;
  }, hc = function(e, t) {
    var r = ye;
    try {
      return ye = e, t();
    } finally {
      ye = r;
    }
  }, rl = function(e, t, r) {
    switch (t) {
      case "input":
        if (ke(e, r), t = r.name, r.type === "radio" && t != null) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
            var i = r[t];
            if (i !== e && i.form === e.form) {
              var l = Ci(i);
              if (!l) throw Error(u(90));
              Se(i), ke(i, l);
            }
          }
        }
        break;
      case "textarea":
        Zo(e, r);
        break;
      case "select":
        t = r.value, t != null && $t(e, !!r.multiple, t, !1);
    }
  }, Za = Ds, Ja = Gn;
  var yg = { usingClientEntryPoint: !1, Events: [yo, wr, Ci, Xa, qa, Ds] }, Ao = { findFiberByHostInstance: $n, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wg = { bundleType: Ao.bundleType, version: Ao.version, rendererPackageName: Ao.rendererPackageName, rendererConfig: Ao.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: j.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = rc(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ao.findFiberByHostInstance || vg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!su.isDisabled && su.supportsFiber) try {
      ii = su.inject(wg), Ut = su;
    } catch {
    }
  }
  return ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yg, ft.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$s(t)) throw Error(u(200));
    return mg(e, t, null, r);
  }, ft.createRoot = function(e, t) {
    if (!$s(e)) throw Error(u(299));
    var r = !1, i = "", l = Dd;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Fs(e, 1, !1, null, null, r, !1, i, l), e[en] = t.current, mo(e.nodeType === 8 ? e.parentNode : e), new Bs(t);
  }, ft.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = rc(t), e = e === null ? null : e.stateNode, e;
  }, ft.flushSync = function(e) {
    return Gn(e);
  }, ft.hydrate = function(e, t, r) {
    if (!uu(t)) throw Error(u(200));
    return lu(null, e, t, !0, r);
  }, ft.hydrateRoot = function(e, t, r) {
    if (!$s(e)) throw Error(u(405));
    var i = r != null && r.hydratedSources || null, l = !1, a = "", d = Dd;
    if (r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (a = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), t = Od(t, null, e, 1, r ?? null, l, !1, a, d), e[en] = t.current, mo(e), i) for (e = 0; e < i.length; e++) r = i[e], l = r._getVersion, l = l(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, l] : t.mutableSourceEagerHydrationData.push(
      r,
      l
    );
    return new iu(t);
  }, ft.render = function(e, t, r) {
    if (!uu(t)) throw Error(u(200));
    return lu(null, e, t, !1, r);
  }, ft.unmountComponentAtNode = function(e) {
    if (!uu(e)) throw Error(u(40));
    return e._reactRootContainer ? (Gn(function() {
      lu(null, null, e, !1, function() {
        e._reactRootContainer = null, e[en] = null;
      });
    }), !0) : !1;
  }, ft.unstable_batchedUpdates = Ds, ft.unstable_renderSubtreeIntoContainer = function(e, t, r, i) {
    if (!uu(r)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return lu(e, t, r, !1, i);
  }, ft.version = "18.3.1-next-f1338f8080-20240426", ft;
}
var $d;
function Ip() {
  if ($d) return bs.exports;
  $d = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
  }
  return n(), bs.exports = Rg(), bs.exports;
}
var Ud;
function Ng() {
  if (Ud) return cu;
  Ud = 1;
  var n = Ip();
  return cu.createRoot = n.createRoot, cu.hydrateRoot = n.hydrateRoot, cu;
}
var sS = Ng(), Qs = { exports: {} }, Ks = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wd;
function Og() {
  if (Wd) return Ks;
  Wd = 1;
  var n = zu();
  function o(g, _) {
    return g === _ && (g !== 0 || 1 / g === 1 / _) || g !== g && _ !== _;
  }
  var u = typeof Object.is == "function" ? Object.is : o, s = n.useSyncExternalStore, c = n.useRef, f = n.useEffect, h = n.useMemo, m = n.useDebugValue;
  return Ks.useSyncExternalStoreWithSelector = function(g, _, S, x, k) {
    var T = c(null);
    if (T.current === null) {
      var L = { hasValue: !1, value: null };
      T.current = L;
    } else L = T.current;
    T = h(
      function() {
        function I(W) {
          if (!M) {
            if (M = !0, B = W, W = x(W), k !== void 0 && L.hasValue) {
              var Q = L.value;
              if (k(Q, W))
                return A = Q;
            }
            return A = W;
          }
          if (Q = A, u(B, W)) return Q;
          var F = x(W);
          return k !== void 0 && k(Q, F) ? (B = W, Q) : (B = W, A = F);
        }
        var M = !1, B, A, j = S === void 0 ? null : S;
        return [
          function() {
            return I(_());
          },
          j === null ? void 0 : function() {
            return I(j());
          }
        ];
      },
      [_, S, x, k]
    );
    var P = s(g, T[0], T[1]);
    return f(
      function() {
        L.hasValue = !0, L.value = P;
      },
      [P]
    ), m(P), P;
  }, Ks;
}
var bd;
function Tg() {
  return bd || (bd = 1, Qs.exports = Og()), Qs.exports;
}
var Dg = Tg();
function Mp(n) {
  n();
}
function Ag() {
  let n = null, o = null;
  return {
    clear() {
      n = null, o = null;
    },
    notify() {
      Mp(() => {
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
var Vd = {
  notify() {
  },
  get: () => []
};
function Lg(n, o) {
  let u, s = Vd, c = 0, f = !1;
  function h(P) {
    S();
    const I = s.subscribe(P);
    let M = !1;
    return () => {
      M || (M = !0, I(), x());
    };
  }
  function m() {
    s.notify();
  }
  function g() {
    L.onStateChange && L.onStateChange();
  }
  function _() {
    return f;
  }
  function S() {
    c++, u || (u = n.subscribe(g), s = Ag());
  }
  function x() {
    c--, u && c === 0 && (u(), u = void 0, s.clear(), s = Vd);
  }
  function k() {
    f || (f = !0, S());
  }
  function T() {
    f && (f = !1, x());
  }
  const L = {
    addNestedSub: h,
    notifyNestedSubs: m,
    handleChangeWrapper: g,
    isSubscribed: _,
    trySubscribe: k,
    tryUnsubscribe: T,
    getListeners: () => s
  };
  return L;
}
var Ig = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Mg = /* @__PURE__ */ Ig(), jg = () => typeof navigator < "u" && navigator.product === "ReactNative", Fg = /* @__PURE__ */ jg(), zg = () => Mg || Fg ? O.useLayoutEffect : O.useEffect, Bg = /* @__PURE__ */ zg();
function Hd(n, o) {
  return n === o ? n !== 0 || o !== 0 || 1 / n === 1 / o : n !== n && o !== o;
}
function aS(n, o) {
  if (Hd(n, o)) return !0;
  if (typeof n != "object" || n === null || typeof o != "object" || o === null)
    return !1;
  const u = Object.keys(n), s = Object.keys(o);
  if (u.length !== s.length) return !1;
  for (let c = 0; c < u.length; c++)
    if (!Object.prototype.hasOwnProperty.call(o, u[c]) || !Hd(n[u[c]], o[u[c]]))
      return !1;
  return !0;
}
var $g = /* @__PURE__ */ Symbol.for("react-redux-context"), Ug = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Wg() {
  if (!O.createContext) return {};
  const n = Ug[$g] ??= /* @__PURE__ */ new Map();
  let o = n.get(O.createContext);
  return o || (o = O.createContext(
    null
  ), n.set(O.createContext, o)), o;
}
var zn = /* @__PURE__ */ Wg();
function bg(n) {
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
  const m = u || zn;
  return /* @__PURE__ */ O.createElement(m.Provider, { value: f }, o);
}
var cS = bg;
function Aa(n = zn) {
  return function() {
    return O.useContext(n);
  };
}
var jp = /* @__PURE__ */ Aa();
function Fp(n = zn) {
  const o = n === zn ? jp : (
    // @ts-ignore
    Aa(n)
  ), u = () => {
    const { store: s } = o();
    return s;
  };
  return Object.assign(u, {
    withTypes: () => u
  }), u;
}
var Vg = /* @__PURE__ */ Fp();
function Hg(n = zn) {
  const o = n === zn ? Vg : Fp(n), u = () => o().dispatch;
  return Object.assign(u, {
    withTypes: () => u
  }), u;
}
var zp = /* @__PURE__ */ Hg(), Qg = (n, o) => n === o;
function Kg(n = zn) {
  const o = n === zn ? jp : Aa(n), u = (s, c = {}) => {
    const { equalityFn: f = Qg } = typeof c == "function" ? { equalityFn: c } : c, h = o(), { store: m, subscription: g, getServerState: _ } = h;
    O.useRef(!0);
    const S = O.useCallback(
      {
        [s.name](k) {
          return s(k);
        }
      }[s.name],
      [s]
    ), x = Dg.useSyncExternalStoreWithSelector(
      g.addNestedSub,
      m.getState,
      _ || m.getState,
      S,
      f
    );
    return O.useDebugValue(x), x;
  };
  return Object.assign(u, {
    withTypes: () => u
  }), u;
}
var La = /* @__PURE__ */ Kg(), fS = Mp;
function Ge(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var Gg = typeof Symbol == "function" && Symbol.observable || "@@observable", Qd = Gg, Gs = () => Math.random().toString(36).substring(7).split("").join("."), Yg = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Gs()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Gs()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Gs()}`
}, Nu = Yg;
function Ia(n) {
  if (typeof n != "object" || n === null)
    return !1;
  let o = n;
  for (; Object.getPrototypeOf(o) !== null; )
    o = Object.getPrototypeOf(o);
  return Object.getPrototypeOf(n) === o || Object.getPrototypeOf(n) === null;
}
function Bp(n, o, u) {
  if (typeof n != "function")
    throw new Error(Ge(2));
  if (typeof o == "function" && typeof u == "function" || typeof u == "function" && typeof arguments[3] == "function")
    throw new Error(Ge(0));
  if (typeof o == "function" && typeof u > "u" && (u = o, o = void 0), typeof u < "u") {
    if (typeof u != "function")
      throw new Error(Ge(1));
    return u(Bp)(n, o);
  }
  let s = n, c = o, f = /* @__PURE__ */ new Map(), h = f, m = 0, g = !1;
  function _() {
    h === f && (h = /* @__PURE__ */ new Map(), f.forEach((I, M) => {
      h.set(M, I);
    }));
  }
  function S() {
    if (g)
      throw new Error(Ge(3));
    return c;
  }
  function x(I) {
    if (typeof I != "function")
      throw new Error(Ge(4));
    if (g)
      throw new Error(Ge(5));
    let M = !0;
    _();
    const B = m++;
    return h.set(B, I), function() {
      if (M) {
        if (g)
          throw new Error(Ge(6));
        M = !1, _(), h.delete(B), f = null;
      }
    };
  }
  function k(I) {
    if (!Ia(I))
      throw new Error(Ge(7));
    if (typeof I.type > "u")
      throw new Error(Ge(8));
    if (typeof I.type != "string")
      throw new Error(Ge(17));
    if (g)
      throw new Error(Ge(9));
    try {
      g = !0, c = s(c, I);
    } finally {
      g = !1;
    }
    return (f = h).forEach((B) => {
      B();
    }), I;
  }
  function T(I) {
    if (typeof I != "function")
      throw new Error(Ge(10));
    s = I, k({
      type: Nu.REPLACE
    });
  }
  function L() {
    const I = x;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(M) {
        if (typeof M != "object" || M === null)
          throw new Error(Ge(11));
        function B() {
          const j = M;
          j.next && j.next(S());
        }
        return B(), {
          unsubscribe: I(B)
        };
      },
      [Qd]() {
        return this;
      }
    };
  }
  return k({
    type: Nu.INIT
  }), {
    dispatch: k,
    subscribe: x,
    getState: S,
    replaceReducer: T,
    [Qd]: L
  };
}
function Xg(n) {
  Object.keys(n).forEach((o) => {
    const u = n[o];
    if (typeof u(void 0, {
      type: Nu.INIT
    }) > "u")
      throw new Error(Ge(12));
    if (typeof u(void 0, {
      type: Nu.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Ge(13));
  });
}
function qg(n) {
  const o = Object.keys(n), u = {};
  for (let f = 0; f < o.length; f++) {
    const h = o[f];
    typeof n[h] == "function" && (u[h] = n[h]);
  }
  const s = Object.keys(u);
  let c;
  try {
    Xg(u);
  } catch (f) {
    c = f;
  }
  return function(h = {}, m) {
    if (c)
      throw c;
    let g = !1;
    const _ = {};
    for (let S = 0; S < s.length; S++) {
      const x = s[S], k = u[x], T = h[x], L = k(T, m);
      if (typeof L > "u")
        throw m && m.type, new Error(Ge(14));
      _[x] = L, g = g || L !== T;
    }
    return g = g || s.length !== Object.keys(h).length, g ? _ : h;
  };
}
function Ou(...n) {
  return n.length === 0 ? (o) => o : n.length === 1 ? n[0] : n.reduce((o, u) => (...s) => o(u(...s)));
}
function Zg(...n) {
  return (o) => (u, s) => {
    const c = o(u, s);
    let f = () => {
      throw new Error(Ge(15));
    };
    const h = {
      getState: c.getState,
      dispatch: (g, ..._) => f(g, ..._)
    }, m = n.map((g) => g(h));
    return f = Ou(...m)(c.dispatch), {
      ...c,
      dispatch: f
    };
  };
}
function $p(n) {
  return Ia(n) && "type" in n && typeof n.type == "string";
}
var Ma = Symbol.for("immer-nothing"), Fo = Symbol.for("immer-draftable"), pt = Symbol.for("immer-state");
function Ye(n, ...o) {
  throw new Error(
    `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var or = Object.getPrototypeOf;
function fn(n) {
  return !!n && !!n[pt];
}
function Gt(n) {
  return n ? Up(n) || Array.isArray(n) || !!n[Fo] || !!n.constructor?.[Fo] || Qr(n) || Go(n) : !1;
}
var Jg = Object.prototype.constructor.toString();
function Up(n) {
  if (!n || typeof n != "object")
    return !1;
  const o = or(n);
  if (o === null)
    return !0;
  const u = Object.hasOwnProperty.call(o, "constructor") && o.constructor;
  return u === Object ? !0 : typeof u == "function" && Function.toString.call(u) === Jg;
}
function dS(n) {
  return fn(n) || Ye(15, n), n[pt].base_;
}
function Bo(n, o) {
  ir(n) === 0 ? Reflect.ownKeys(n).forEach((u) => {
    o(u, n[u], n);
  }) : n.forEach((u, s) => o(s, u, n));
}
function ir(n) {
  const o = n[pt];
  return o ? o.type_ : Array.isArray(n) ? 1 : Qr(n) ? 2 : Go(n) ? 3 : 0;
}
function $o(n, o) {
  return ir(n) === 2 ? n.has(o) : Object.prototype.hasOwnProperty.call(n, o);
}
function Ys(n, o) {
  return ir(n) === 2 ? n.get(o) : n[o];
}
function Wp(n, o, u) {
  const s = ir(n);
  s === 2 ? n.set(o, u) : s === 3 ? n.add(u) : n[o] = u;
}
function ey(n, o) {
  return n === o ? n !== 0 || 1 / n === 1 / o : n !== n && o !== o;
}
function Qr(n) {
  return n instanceof Map;
}
function Go(n) {
  return n instanceof Set;
}
function Zn(n) {
  return n.copy_ || n.base_;
}
function da(n, o) {
  if (Qr(n))
    return new Map(n);
  if (Go(n))
    return new Set(n);
  if (Array.isArray(n))
    return Array.prototype.slice.call(n);
  const u = Up(n);
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
    return Object.create(or(n), s);
  } else {
    const s = or(n);
    if (s !== null && u)
      return { ...n };
    const c = Object.create(s);
    return Object.assign(c, n);
  }
}
function ja(n, o = !1) {
  return Bu(n) || fn(n) || !Gt(n) || (ir(n) > 1 && Object.defineProperties(n, {
    set: { value: fu },
    add: { value: fu },
    clear: { value: fu },
    delete: { value: fu }
  }), Object.freeze(n), o && Object.values(n).forEach((u) => ja(u, !0))), n;
}
function fu() {
  Ye(2);
}
function Bu(n) {
  return Object.isFrozen(n);
}
var pa = {};
function ur(n) {
  const o = pa[n];
  return o || Ye(0, n), o;
}
function ty(n, o) {
  pa[n] || (pa[n] = o);
}
var Uo;
function bp() {
  return Uo;
}
function ny(n, o) {
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
function Kd(n, o) {
  o && (ur("Patches"), n.patches_ = [], n.inversePatches_ = [], n.patchListener_ = o);
}
function ha(n) {
  ma(n), n.drafts_.forEach(ry), n.drafts_ = null;
}
function ma(n) {
  n === Uo && (Uo = n.parent_);
}
function Gd(n) {
  return Uo = ny(Uo, n);
}
function ry(n) {
  const o = n[pt];
  o.type_ === 0 || o.type_ === 1 ? o.revoke_() : o.revoked_ = !0;
}
function Yd(n, o) {
  o.unfinalizedDrafts_ = o.drafts_.length;
  const u = o.drafts_[0];
  return n !== void 0 && n !== u ? (u[pt].modified_ && (ha(o), Ye(4)), Gt(n) && (n = Tu(o, n), o.parent_ || Du(o, n)), o.patches_ && ur("Patches").generateReplacementPatches_(
    u[pt].base_,
    n,
    o.patches_,
    o.inversePatches_
  )) : n = Tu(o, u, []), ha(o), o.patches_ && o.patchListener_(o.patches_, o.inversePatches_), n !== Ma ? n : void 0;
}
function Tu(n, o, u) {
  if (Bu(o))
    return o;
  const s = o[pt];
  if (!s)
    return Bo(
      o,
      (c, f) => Xd(n, s, o, c, f, u)
    ), o;
  if (s.scope_ !== n)
    return o;
  if (!s.modified_)
    return Du(n, s.base_, !0), s.base_;
  if (!s.finalized_) {
    s.finalized_ = !0, s.scope_.unfinalizedDrafts_--;
    const c = s.copy_;
    let f = c, h = !1;
    s.type_ === 3 && (f = new Set(c), c.clear(), h = !0), Bo(
      f,
      (m, g) => Xd(n, s, c, m, g, u, h)
    ), Du(n, c, !1), u && n.patches_ && ur("Patches").generatePatches_(
      s,
      u,
      n.patches_,
      n.inversePatches_
    );
  }
  return s.copy_;
}
function Xd(n, o, u, s, c, f, h) {
  if (fn(c)) {
    const m = f && o && o.type_ !== 3 && // Set objects are atomic since they have no keys.
    !$o(o.assigned_, s) ? f.concat(s) : void 0, g = Tu(n, c, m);
    if (Wp(u, s, g), fn(g))
      n.canAutoFreeze_ = !1;
    else
      return;
  } else h && u.add(c);
  if (Gt(c) && !Bu(c)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1)
      return;
    Tu(n, c), (!o || !o.scope_.parent_) && typeof s != "symbol" && (Qr(u) ? u.has(s) : Object.prototype.propertyIsEnumerable.call(u, s)) && Du(n, c);
  }
}
function Du(n, o, u = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && ja(o, u);
}
function oy(n, o) {
  const u = Array.isArray(n), s = {
    type_: u ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: o ? o.scope_ : bp(),
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
  let c = s, f = Fa;
  u && (c = [s], f = Wo);
  const { revoke: h, proxy: m } = Proxy.revocable(c, f);
  return s.draft_ = m, s.revoke_ = h, m;
}
var Fa = {
  get(n, o) {
    if (o === pt)
      return n;
    const u = Zn(n);
    if (!$o(u, o))
      return iy(n, u, o);
    const s = u[o];
    return n.finalized_ || !Gt(s) ? s : s === Xs(n.base_, o) ? (qs(n), n.copy_[o] = ga(s, n)) : s;
  },
  has(n, o) {
    return o in Zn(n);
  },
  ownKeys(n) {
    return Reflect.ownKeys(Zn(n));
  },
  set(n, o, u) {
    const s = Vp(Zn(n), o);
    if (s?.set)
      return s.set.call(n.draft_, u), !0;
    if (!n.modified_) {
      const c = Xs(Zn(n), o), f = c?.[pt];
      if (f && f.base_ === u)
        return n.copy_[o] = u, n.assigned_[o] = !1, !0;
      if (ey(u, c) && (u !== void 0 || $o(n.base_, o)))
        return !0;
      qs(n), va(n);
    }
    return n.copy_[o] === u && // special case: handle new props with value 'undefined'
    (u !== void 0 || o in n.copy_) || // special case: NaN
    Number.isNaN(u) && Number.isNaN(n.copy_[o]) || (n.copy_[o] = u, n.assigned_[o] = !0), !0;
  },
  deleteProperty(n, o) {
    return Xs(n.base_, o) !== void 0 || o in n.base_ ? (n.assigned_[o] = !1, qs(n), va(n)) : delete n.assigned_[o], n.copy_ && delete n.copy_[o], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(n, o) {
    const u = Zn(n), s = Reflect.getOwnPropertyDescriptor(u, o);
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
    return or(n.base_);
  },
  setPrototypeOf() {
    Ye(12);
  }
}, Wo = {};
Bo(Fa, (n, o) => {
  Wo[n] = function() {
    return arguments[0] = arguments[0][0], o.apply(this, arguments);
  };
});
Wo.deleteProperty = function(n, o) {
  return Wo.set.call(this, n, o, void 0);
};
Wo.set = function(n, o, u) {
  return Fa.set.call(this, n[0], o, u, n[0]);
};
function Xs(n, o) {
  const u = n[pt];
  return (u ? Zn(u) : n)[o];
}
function iy(n, o, u) {
  const s = Vp(o, u);
  return s ? "value" in s ? s.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    s.get?.call(n.draft_)
  ) : void 0;
}
function Vp(n, o) {
  if (!(o in n))
    return;
  let u = or(n);
  for (; u; ) {
    const s = Object.getOwnPropertyDescriptor(u, o);
    if (s)
      return s;
    u = or(u);
  }
}
function va(n) {
  n.modified_ || (n.modified_ = !0, n.parent_ && va(n.parent_));
}
function qs(n) {
  n.copy_ || (n.copy_ = da(
    n.base_,
    n.scope_.immer_.useStrictShallowCopy_
  ));
}
var uy = class {
  constructor(n) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (o, u, s) => {
      if (typeof o == "function" && typeof u != "function") {
        const f = u;
        u = o;
        const h = this;
        return function(g = f, ..._) {
          return h.produce(g, (S) => u.call(this, S, ..._));
        };
      }
      typeof u != "function" && Ye(6), s !== void 0 && typeof s != "function" && Ye(7);
      let c;
      if (Gt(o)) {
        const f = Gd(this), h = ga(o, void 0);
        let m = !0;
        try {
          c = u(h), m = !1;
        } finally {
          m ? ha(f) : ma(f);
        }
        return Kd(f, s), Yd(c, f);
      } else if (!o || typeof o != "object") {
        if (c = u(o), c === void 0 && (c = o), c === Ma && (c = void 0), this.autoFreeze_ && ja(c, !0), s) {
          const f = [], h = [];
          ur("Patches").generateReplacementPatches_(o, c, f, h), s(f, h);
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
    }, typeof n?.autoFreeze == "boolean" && this.setAutoFreeze(n.autoFreeze), typeof n?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(n.useStrictShallowCopy);
  }
  createDraft(n) {
    Gt(n) || Ye(8), fn(n) && (n = ly(n));
    const o = Gd(this), u = ga(n, void 0);
    return u[pt].isManual_ = !0, ma(o), u;
  }
  finishDraft(n, o) {
    const u = n && n[pt];
    (!u || !u.isManual_) && Ye(9);
    const { scope_: s } = u;
    return Kd(s, o), Yd(void 0, s);
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
    const s = ur("Patches").applyPatches_;
    return fn(n) ? s(n, o) : this.produce(
      n,
      (c) => s(c, o)
    );
  }
};
function ga(n, o) {
  const u = Qr(n) ? ur("MapSet").proxyMap_(n, o) : Go(n) ? ur("MapSet").proxySet_(n, o) : oy(n, o);
  return (o ? o.scope_ : bp()).drafts_.push(u), u;
}
function ly(n) {
  return fn(n) || Ye(10, n), Hp(n);
}
function Hp(n) {
  if (!Gt(n) || Bu(n))
    return n;
  const o = n[pt];
  let u;
  if (o) {
    if (!o.modified_)
      return o.base_;
    o.finalized_ = !0, u = da(n, o.scope_.immer_.useStrictShallowCopy_);
  } else
    u = da(n, !0);
  return Bo(u, (s, c) => {
    Wp(u, s, Hp(c));
  }), o && (o.finalized_ = !1), u;
}
function pS() {
  const o = "replace", s = "remove";
  function c(k, T, L, P) {
    switch (k.type_) {
      case 0:
      case 2:
        return h(
          k,
          T,
          L,
          P
        );
      case 1:
        return f(k, T, L, P);
      case 3:
        return m(
          k,
          T,
          L,
          P
        );
    }
  }
  function f(k, T, L, P) {
    let { base_: I, assigned_: M } = k, B = k.copy_;
    B.length < I.length && ([I, B] = [B, I], [L, P] = [P, L]);
    for (let A = 0; A < I.length; A++)
      if (M[A] && B[A] !== I[A]) {
        const j = T.concat([A]);
        L.push({
          op: o,
          path: j,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: x(B[A])
        }), P.push({
          op: o,
          path: j,
          value: x(I[A])
        });
      }
    for (let A = I.length; A < B.length; A++) {
      const j = T.concat([A]);
      L.push({
        op: "add",
        path: j,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: x(B[A])
      });
    }
    for (let A = B.length - 1; I.length <= A; --A) {
      const j = T.concat([A]);
      P.push({
        op: s,
        path: j
      });
    }
  }
  function h(k, T, L, P) {
    const { base_: I, copy_: M } = k;
    Bo(k.assigned_, (B, A) => {
      const j = Ys(I, B), W = Ys(M, B), Q = A ? $o(I, B) ? o : "add" : s;
      if (j === W && Q === o)
        return;
      const F = T.concat(B);
      L.push(Q === s ? { op: Q, path: F } : { op: Q, path: F, value: W }), P.push(
        Q === "add" ? { op: s, path: F } : Q === s ? { op: "add", path: F, value: x(j) } : { op: o, path: F, value: x(j) }
      );
    });
  }
  function m(k, T, L, P) {
    let { base_: I, copy_: M } = k, B = 0;
    I.forEach((A) => {
      if (!M.has(A)) {
        const j = T.concat([B]);
        L.push({
          op: s,
          path: j,
          value: A
        }), P.unshift({
          op: "add",
          path: j,
          value: A
        });
      }
      B++;
    }), B = 0, M.forEach((A) => {
      if (!I.has(A)) {
        const j = T.concat([B]);
        L.push({
          op: "add",
          path: j,
          value: A
        }), P.unshift({
          op: s,
          path: j,
          value: A
        });
      }
      B++;
    });
  }
  function g(k, T, L, P) {
    L.push({
      op: o,
      path: [],
      value: T === Ma ? void 0 : T
    }), P.push({
      op: o,
      path: [],
      value: k
    });
  }
  function _(k, T) {
    return T.forEach((L) => {
      const { path: P, op: I } = L;
      let M = k;
      for (let W = 0; W < P.length - 1; W++) {
        const Q = ir(M);
        let F = P[W];
        typeof F != "string" && typeof F != "number" && (F = "" + F), (Q === 0 || Q === 1) && (F === "__proto__" || F === "constructor") && Ye(19), typeof M == "function" && F === "prototype" && Ye(19), M = Ys(M, F), typeof M != "object" && Ye(18, P.join("/"));
      }
      const B = ir(M), A = S(L.value), j = P[P.length - 1];
      switch (I) {
        case o:
          switch (B) {
            case 2:
              return M.set(j, A);
            case 3:
              Ye(16);
            default:
              return M[j] = A;
          }
        case "add":
          switch (B) {
            case 1:
              return j === "-" ? M.push(A) : M.splice(j, 0, A);
            case 2:
              return M.set(j, A);
            case 3:
              return M.add(A);
            default:
              return M[j] = A;
          }
        case s:
          switch (B) {
            case 1:
              return M.splice(j, 1);
            case 2:
              return M.delete(j);
            case 3:
              return M.delete(L.value);
            default:
              return delete M[j];
          }
        default:
          Ye(17, I);
      }
    }), k;
  }
  function S(k) {
    if (!Gt(k))
      return k;
    if (Array.isArray(k))
      return k.map(S);
    if (Qr(k))
      return new Map(
        Array.from(k.entries()).map(([L, P]) => [L, S(P)])
      );
    if (Go(k))
      return new Set(Array.from(k).map(S));
    const T = Object.create(or(k));
    for (const L in k)
      T[L] = S(k[L]);
    return $o(k, Fo) && (T[Fo] = k[Fo]), T;
  }
  function x(k) {
    return fn(k) ? S(k) : k;
  }
  ty("Patches", {
    applyPatches_: _,
    generatePatches_: c,
    generateReplacementPatches_: g
  });
}
var bo = new uy(), Qp = bo.produce, hS = /* @__PURE__ */ bo.produceWithPatches.bind(
  bo
), mS = /* @__PURE__ */ bo.applyPatches.bind(bo);
function Kp(n) {
  return ({ dispatch: u, getState: s }) => (c) => (f) => typeof f == "function" ? f(u, s, n) : c(f);
}
var sy = Kp(), ay = Kp, cy = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ou : Ou.apply(null, arguments);
}, fy = (n) => n && typeof n.match == "function";
function cn(n, o) {
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
  return u.toString = () => `${n}`, u.type = n, u.match = (s) => $p(s) && s.type === n, u;
}
var Gp = class Io extends Array {
  constructor(...o) {
    super(...o), Object.setPrototypeOf(this, Io.prototype);
  }
  static get [Symbol.species]() {
    return Io;
  }
  concat(...o) {
    return super.concat.apply(this, o);
  }
  prepend(...o) {
    return o.length === 1 && Array.isArray(o[0]) ? new Io(...o[0].concat(this)) : new Io(...o.concat(this));
  }
};
function qd(n) {
  return Gt(n) ? Qp(n, () => {
  }) : n;
}
function du(n, o, u) {
  return n.has(o) ? n.get(o) : n.set(o, u(o)).get(o);
}
function dy(n) {
  return typeof n == "boolean";
}
var py = () => function(o) {
  const {
    thunk: u = !0,
    immutableCheck: s = !0,
    serializableCheck: c = !0,
    actionCreatorCheck: f = !0
  } = o ?? {};
  let h = new Gp();
  return u && (dy(u) ? h.push(sy) : h.push(ay(u.extraArgument))), h;
}, Yp = "RTK_autoBatch", vS = () => (n) => ({
  payload: n,
  meta: {
    [Yp]: !0
  }
}), Zd = (n) => (o) => {
  setTimeout(o, n);
}, hy = (n = {
  type: "raf"
}) => (o) => (...u) => {
  const s = o(...u);
  let c = !0, f = !1, h = !1;
  const m = /* @__PURE__ */ new Set(), g = n.type === "tick" ? queueMicrotask : n.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Zd(10)
  ) : n.type === "callback" ? n.queueNotification : Zd(n.timeout), _ = () => {
    h = !1, f && (f = !1, m.forEach((S) => S()));
  };
  return Object.assign({}, s, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(S) {
      const x = () => c && S(), k = s.subscribe(x);
      return m.add(S), () => {
        k(), m.delete(S);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(S) {
      try {
        return c = !S?.meta?.[Yp], f = !c, f && (h || (h = !0, g(_))), s.dispatch(S);
      } finally {
        c = !0;
      }
    }
  });
}, my = (n) => function(u) {
  const {
    autoBatch: s = !0
  } = u ?? {};
  let c = new Gp(n);
  return s && c.push(hy(typeof s == "object" ? s : void 0)), c;
};
function gS(n) {
  const o = py(), {
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
  else if (Ia(u))
    g = qg(u);
  else
    throw new Error(St(1));
  let _;
  typeof s == "function" ? _ = s(o) : _ = o();
  let S = Ou;
  c && (S = cy({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof c == "object" && c
  }));
  const x = Zg(..._), k = my(x);
  let T = typeof m == "function" ? m(k) : k();
  const L = S(...T);
  return Bp(g, h, L);
}
function Xp(n) {
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
    addAsyncThunk(f, h) {
      return h.pending && (o[f.pending.type] = h.pending), h.rejected && (o[f.rejected.type] = h.rejected), h.fulfilled && (o[f.fulfilled.type] = h.fulfilled), h.settled && u.push({
        matcher: f.settled,
        reducer: h.settled
      }), c;
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
function vy(n) {
  return typeof n == "function";
}
function gy(n, o) {
  let [u, s, c] = Xp(o), f;
  if (vy(n))
    f = () => qd(n());
  else {
    const m = qd(n);
    f = () => m;
  }
  function h(m = f(), g) {
    let _ = [u[g.type], ...s.filter(({
      matcher: S
    }) => S(g)).map(({
      reducer: S
    }) => S)];
    return _.filter((S) => !!S).length === 0 && (_ = [c]), _.reduce((S, x) => {
      if (x)
        if (fn(S)) {
          const T = x(S, g);
          return T === void 0 ? S : T;
        } else {
          if (Gt(S))
            return Qp(S, (k) => x(k, g));
          {
            const k = x(S, g);
            if (k === void 0) {
              if (S === null)
                return S;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return k;
          }
        }
      return S;
    }, m);
  }
  return h.getInitialState = f, h;
}
var qp = (n, o) => fy(n) ? n.match(o) : n(o);
function Yo(...n) {
  return (o) => n.some((u) => qp(u, o));
}
function Jd(...n) {
  return (o) => n.every((u) => qp(u, o));
}
function $u(n, o) {
  if (!n || !n.meta) return !1;
  const u = typeof n.meta.requestId == "string", s = o.indexOf(n.meta.requestStatus) > -1;
  return u && s;
}
function Xo(n) {
  return typeof n[0] == "function" && "pending" in n[0] && "fulfilled" in n[0] && "rejected" in n[0];
}
function yy(...n) {
  return n.length === 0 ? (o) => $u(o, ["pending"]) : Xo(n) ? Yo(...n.map((o) => o.pending)) : yy()(n[0]);
}
function ya(...n) {
  return n.length === 0 ? (o) => $u(o, ["rejected"]) : Xo(n) ? Yo(...n.map((o) => o.rejected)) : ya()(n[0]);
}
function wy(...n) {
  const o = (u) => u && u.meta && u.meta.rejectedWithValue;
  return n.length === 0 ? Jd(ya(...n), o) : Xo(n) ? Jd(ya(...n), o) : wy()(n[0]);
}
function Sy(...n) {
  return n.length === 0 ? (o) => $u(o, ["fulfilled"]) : Xo(n) ? Yo(...n.map((o) => o.fulfilled)) : Sy()(n[0]);
}
function Ey(...n) {
  return n.length === 0 ? (o) => $u(o, ["pending", "fulfilled", "rejected"]) : Xo(n) ? Yo(...n.flatMap((o) => [o.pending, o.rejected, o.fulfilled])) : Ey()(n[0]);
}
var ky = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Zp = (n = 21) => {
  let o = "", u = n;
  for (; u--; )
    o += ky[Math.random() * 64 | 0];
  return o;
}, xy = ["name", "message", "stack", "code"], Zs = class {
  constructor(n, o) {
    this.payload = n, this.meta = o;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, ep = class {
  constructor(n, o) {
    this.payload = n, this.meta = o;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, Cy = (n) => {
  if (typeof n == "object" && n !== null) {
    const o = {};
    for (const u of xy)
      typeof n[u] == "string" && (o[u] = n[u]);
    return o;
  }
  return {
    message: String(n)
  };
}, tp = "External signal was aborted", yS = /* @__PURE__ */ (() => {
  function n(o, u, s) {
    const c = cn(o + "/fulfilled", (g, _, S, x) => ({
      payload: g,
      meta: {
        ...x || {},
        arg: S,
        requestId: _,
        requestStatus: "fulfilled"
      }
    })), f = cn(o + "/pending", (g, _, S) => ({
      payload: void 0,
      meta: {
        ...S || {},
        arg: _,
        requestId: g,
        requestStatus: "pending"
      }
    })), h = cn(o + "/rejected", (g, _, S, x, k) => ({
      payload: x,
      error: (s && s.serializeError || Cy)(g || "Rejected"),
      meta: {
        ...k || {},
        arg: S,
        requestId: _,
        rejectedWithValue: !!x,
        requestStatus: "rejected",
        aborted: g?.name === "AbortError",
        condition: g?.name === "ConditionError"
      }
    }));
    function m(g, {
      signal: _
    } = {}) {
      return (S, x, k) => {
        const T = s?.idGenerator ? s.idGenerator(g) : Zp(), L = new AbortController();
        let P, I;
        function M(A) {
          I = A, L.abort();
        }
        _ && (_.aborted ? M(tp) : _.addEventListener("abort", () => M(tp), {
          once: !0
        }));
        const B = (async function() {
          let A;
          try {
            let W = s?.condition?.(g, {
              getState: x,
              extra: k
            });
            if (Py(W) && (W = await W), W === !1 || L.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const Q = new Promise((F, ie) => {
              P = () => {
                ie({
                  name: "AbortError",
                  message: I || "Aborted"
                });
              }, L.signal.addEventListener("abort", P);
            });
            S(f(T, g, s?.getPendingMeta?.({
              requestId: T,
              arg: g
            }, {
              getState: x,
              extra: k
            }))), A = await Promise.race([Q, Promise.resolve(u(g, {
              dispatch: S,
              getState: x,
              extra: k,
              requestId: T,
              signal: L.signal,
              abort: M,
              rejectWithValue: (F, ie) => new Zs(F, ie),
              fulfillWithValue: (F, ie) => new ep(F, ie)
            })).then((F) => {
              if (F instanceof Zs)
                throw F;
              return F instanceof ep ? c(F.payload, T, g, F.meta) : c(F, T, g);
            })]);
          } catch (W) {
            A = W instanceof Zs ? h(null, T, g, W.payload, W.meta) : h(W, T, g);
          } finally {
            P && L.signal.removeEventListener("abort", P);
          }
          return s && !s.dispatchConditionRejection && h.match(A) && A.meta.condition || S(A), A;
        })();
        return Object.assign(B, {
          abort: M,
          requestId: T,
          arg: g,
          unwrap() {
            return B.then(_y);
          }
        });
      };
    }
    return Object.assign(m, {
      pending: f,
      rejected: h,
      fulfilled: c,
      settled: Yo(h, c),
      typePrefix: o
    });
  }
  return n.withTypes = () => n, n;
})();
function _y(n) {
  if (n.meta && n.meta.rejectedWithValue)
    throw n.payload;
  if (n.error)
    throw n.error;
  return n.payload;
}
function Py(n) {
  return n !== null && typeof n == "object" && typeof n.then == "function";
}
var Ry = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Ny(n, o) {
  return `${n}/${o}`;
}
function Oy({
  creators: n
} = {}) {
  const o = n?.asyncThunk?.[Ry];
  return function(s) {
    const {
      name: c,
      reducerPath: f = c
    } = s;
    if (!c)
      throw new Error(St(11));
    const h = (typeof s.reducers == "function" ? s.reducers(Dy()) : s.reducers) || {}, m = Object.keys(h), g = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, _ = {
      addCase(A, j) {
        const W = typeof A == "string" ? A : A.type;
        if (!W)
          throw new Error(St(12));
        if (W in g.sliceCaseReducersByType)
          throw new Error(St(13));
        return g.sliceCaseReducersByType[W] = j, _;
      },
      addMatcher(A, j) {
        return g.sliceMatchers.push({
          matcher: A,
          reducer: j
        }), _;
      },
      exposeAction(A, j) {
        return g.actionCreators[A] = j, _;
      },
      exposeCaseReducer(A, j) {
        return g.sliceCaseReducersByName[A] = j, _;
      }
    };
    m.forEach((A) => {
      const j = h[A], W = {
        reducerName: A,
        type: Ny(c, A),
        createNotation: typeof s.reducers == "function"
      };
      Ly(j) ? My(W, j, _, o) : Ay(W, j, _);
    });
    function S() {
      const [A = {}, j = [], W = void 0] = typeof s.extraReducers == "function" ? Xp(s.extraReducers) : [s.extraReducers], Q = {
        ...A,
        ...g.sliceCaseReducersByType
      };
      return gy(s.initialState, (F) => {
        for (let ie in Q)
          F.addCase(ie, Q[ie]);
        for (let ie of g.sliceMatchers)
          F.addMatcher(ie.matcher, ie.reducer);
        for (let ie of j)
          F.addMatcher(ie.matcher, ie.reducer);
        W && F.addDefaultCase(W);
      });
    }
    const x = (A) => A, k = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new WeakMap();
    let L;
    function P(A, j) {
      return L || (L = S()), L(A, j);
    }
    function I() {
      return L || (L = S()), L.getInitialState();
    }
    function M(A, j = !1) {
      function W(F) {
        let ie = F[A];
        return typeof ie > "u" && j && (ie = du(T, W, I)), ie;
      }
      function Q(F = x) {
        const ie = du(k, j, () => /* @__PURE__ */ new WeakMap());
        return du(ie, F, () => {
          const we = {};
          for (const [Pe, ht] of Object.entries(s.selectors ?? {}))
            we[Pe] = Ty(ht, F, () => du(T, F, I), j);
          return we;
        });
      }
      return {
        reducerPath: A,
        getSelectors: Q,
        get selectors() {
          return Q(W);
        },
        selectSlice: W
      };
    }
    const B = {
      name: c,
      reducer: P,
      actions: g.actionCreators,
      caseReducers: g.sliceCaseReducersByName,
      getInitialState: I,
      ...M(f),
      injectInto(A, {
        reducerPath: j,
        ...W
      } = {}) {
        const Q = j ?? f;
        return A.inject({
          reducerPath: Q,
          reducer: P
        }, W), {
          ...B,
          ...M(Q, !0)
        };
      }
    };
    return B;
  };
}
function Ty(n, o, u, s) {
  function c(f, ...h) {
    let m = o(f);
    return typeof m > "u" && s && (m = u()), n(m, ...h);
  }
  return c.unwrapped = n, c;
}
var za = /* @__PURE__ */ Oy();
function Dy() {
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
function Ay({
  type: n,
  reducerName: o,
  createNotation: u
}, s, c) {
  let f, h;
  if ("reducer" in s) {
    if (u && !Iy(s))
      throw new Error(St(17));
    f = s.reducer, h = s.prepare;
  } else
    f = s;
  c.addCase(n, f).exposeCaseReducer(o, f).exposeAction(o, h ? cn(n, h) : cn(n));
}
function Ly(n) {
  return n._reducerDefinitionType === "asyncThunk";
}
function Iy(n) {
  return n._reducerDefinitionType === "reducerWithPrepare";
}
function My({
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
    settled: _,
    options: S
  } = u, x = c(n, f, S);
  s.exposeAction(o, x), h && s.addCase(x.fulfilled, h), m && s.addCase(x.pending, m), g && s.addCase(x.rejected, g), _ && s.addMatcher(x.settled, _), s.exposeCaseReducer(o, {
    fulfilled: h || pu,
    pending: m || pu,
    rejected: g || pu,
    settled: _ || pu
  });
}
function pu() {
}
var jy = "task", Jp = "listener", eh = "completed", Ba = "cancelled", Fy = `task-${Ba}`, zy = `task-${eh}`, wa = `${Jp}-${Ba}`, By = `${Jp}-${eh}`, Uu = class {
  constructor(n) {
    this.code = n, this.message = `${jy} ${Ba} (reason: ${n})`;
  }
  name = "TaskAbortError";
  message;
}, $a = (n, o) => {
  if (typeof n != "function")
    throw new TypeError(St(32));
}, Au = () => {
}, th = (n, o = Au) => (n.catch(o), n), nh = (n, o) => (n.addEventListener("abort", o, {
  once: !0
}), () => n.removeEventListener("abort", o)), er = (n, o) => {
  const u = n.signal;
  u.aborted || ("reason" in u || Object.defineProperty(u, "reason", {
    enumerable: !0,
    value: o,
    configurable: !0,
    writable: !0
  }), n.abort(o));
}, tr = (n) => {
  if (n.aborted) {
    const {
      reason: o
    } = n;
    throw new Uu(o);
  }
};
function rh(n, o) {
  let u = Au;
  return new Promise((s, c) => {
    const f = () => c(new Uu(n.reason));
    if (n.aborted) {
      f();
      return;
    }
    u = nh(n, f), o.finally(() => u()).then(s, c);
  }).finally(() => {
    u = Au;
  });
}
var $y = async (n, o) => {
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
    o?.();
  }
}, Lu = (n) => (o) => th(rh(n, o).then((u) => (tr(n), u))), oh = (n) => {
  const o = Lu(n);
  return (u) => o(new Promise((s) => setTimeout(s, u)));
}, {
  assign: Br
} = Object, np = {}, Wu = "listenerMiddleware", Uy = (n, o) => {
  const u = (s) => nh(n, () => er(s, n.reason));
  return (s, c) => {
    $a(s);
    const f = new AbortController();
    u(f);
    const h = $y(async () => {
      tr(n), tr(f.signal);
      const m = await s({
        pause: Lu(f.signal),
        delay: oh(f.signal),
        signal: f.signal
      });
      return tr(f.signal), m;
    }, () => er(f, zy));
    return c?.autoJoin && o.push(h.catch(Au)), {
      result: Lu(n)(h),
      cancel() {
        er(f, Fy);
      }
    };
  };
}, Wy = (n, o) => {
  const u = async (s, c) => {
    tr(o);
    let f = () => {
    };
    const m = [new Promise((g, _) => {
      let S = n({
        predicate: s,
        effect: (x, k) => {
          k.unsubscribe(), g([x, k.getState(), k.getOriginalState()]);
        }
      });
      f = () => {
        S(), _();
      };
    })];
    c != null && m.push(new Promise((g) => setTimeout(g, c, null)));
    try {
      const g = await rh(o, Promise.race(m));
      return tr(o), g;
    } finally {
      f();
    }
  };
  return (s, c) => th(u(s, c));
}, ih = (n) => {
  let {
    type: o,
    actionCreator: u,
    matcher: s,
    predicate: c,
    effect: f
  } = n;
  if (o)
    c = cn(o).match;
  else if (u)
    o = u.type, c = u.match;
  else if (s)
    c = s;
  else if (!c) throw new Error(St(21));
  return $a(f), {
    predicate: c,
    type: o,
    effect: f
  };
}, uh = /* @__PURE__ */ Br((n) => {
  const {
    type: o,
    predicate: u,
    effect: s
  } = ih(n);
  return {
    id: Zp(),
    effect: s,
    type: o,
    predicate: u,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(St(22));
    }
  };
}, {
  withTypes: () => uh
}), rp = (n, o) => {
  const {
    type: u,
    effect: s,
    predicate: c
  } = ih(o);
  return Array.from(n.values()).find((f) => (typeof u == "string" ? f.type === u : f.predicate === c) && f.effect === s);
}, Sa = (n) => {
  n.pending.forEach((o) => {
    er(o, wa);
  });
}, by = (n) => () => {
  n.forEach(Sa), n.clear();
}, op = (n, o, u) => {
  try {
    n(o, u);
  } catch (s) {
    setTimeout(() => {
      throw s;
    }, 0);
  }
}, lh = /* @__PURE__ */ Br(/* @__PURE__ */ cn(`${Wu}/add`), {
  withTypes: () => lh
}), Vy = /* @__PURE__ */ cn(`${Wu}/removeAll`), sh = /* @__PURE__ */ Br(/* @__PURE__ */ cn(`${Wu}/remove`), {
  withTypes: () => sh
}), Hy = (...n) => {
  console.error(`${Wu}/error`, ...n);
}, wS = (n = {}) => {
  const o = /* @__PURE__ */ new Map(), {
    extra: u,
    onError: s = Hy
  } = n;
  $a(s);
  const c = (S) => (S.unsubscribe = () => o.delete(S.id), o.set(S.id, S), (x) => {
    S.unsubscribe(), x?.cancelActive && Sa(S);
  }), f = (S) => {
    const x = rp(o, S) ?? uh(S);
    return c(x);
  };
  Br(f, {
    withTypes: () => f
  });
  const h = (S) => {
    const x = rp(o, S);
    return x && (x.unsubscribe(), S.cancelActive && Sa(x)), !!x;
  };
  Br(h, {
    withTypes: () => h
  });
  const m = async (S, x, k, T) => {
    const L = new AbortController(), P = Wy(f, L.signal), I = [];
    try {
      S.pending.add(L), await Promise.resolve(S.effect(
        x,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        Br({}, k, {
          getOriginalState: T,
          condition: (M, B) => P(M, B).then(Boolean),
          take: P,
          delay: oh(L.signal),
          pause: Lu(L.signal),
          extra: u,
          signal: L.signal,
          fork: Uy(L.signal, I),
          unsubscribe: S.unsubscribe,
          subscribe: () => {
            o.set(S.id, S);
          },
          cancelActiveListeners: () => {
            S.pending.forEach((M, B, A) => {
              M !== L && (er(M, wa), A.delete(M));
            });
          },
          cancel: () => {
            er(L, wa), S.pending.delete(L);
          },
          throwIfCancelled: () => {
            tr(L.signal);
          }
        })
      ));
    } catch (M) {
      M instanceof Uu || op(s, M, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(I), er(L, By), S.pending.delete(L);
    }
  }, g = by(o);
  return {
    middleware: (S) => (x) => (k) => {
      if (!$p(k))
        return x(k);
      if (lh.match(k))
        return f(k.payload);
      if (Vy.match(k)) {
        g();
        return;
      }
      if (sh.match(k))
        return h(k.payload);
      let T = S.getState();
      const L = () => {
        if (T === np)
          throw new Error(St(23));
        return T;
      };
      let P;
      try {
        if (P = x(k), o.size > 0) {
          const I = S.getState(), M = Array.from(o.values());
          for (const B of M) {
            let A = !1;
            try {
              A = B.predicate(k, I, T);
            } catch (j) {
              A = !1, op(s, j, {
                raisedBy: "predicate"
              });
            }
            A && m(B, k, S, L);
          }
        }
      } finally {
        T = np;
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
var Mo = { exports: {} }, Qy = Mo.exports, ip;
function Ky() {
  return ip || (ip = 1, (function(n, o) {
    (function(u, s) {
      s(o);
    })(Qy, function(u) {
      function s(p, y) {
        p.super_ = y, p.prototype = Object.create(y.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } });
      }
      function c(p, y) {
        Object.defineProperty(this, "kind", { value: p, enumerable: !0 }), y && y.length && Object.defineProperty(this, "path", { value: y, enumerable: !0 });
      }
      function f(p, y, C) {
        f.super_.call(this, "E", p), Object.defineProperty(this, "lhs", { value: y, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: C, enumerable: !0 });
      }
      function h(p, y) {
        h.super_.call(this, "N", p), Object.defineProperty(this, "rhs", { value: y, enumerable: !0 });
      }
      function m(p, y) {
        m.super_.call(this, "D", p), Object.defineProperty(this, "lhs", { value: y, enumerable: !0 });
      }
      function g(p, y, C) {
        g.super_.call(this, "A", p), Object.defineProperty(this, "index", { value: y, enumerable: !0 }), Object.defineProperty(this, "item", { value: C, enumerable: !0 });
      }
      function _(p, y, C) {
        var z = p.slice(y + 1 || p.length);
        return p.length = y < 0 ? p.length + y : y, p.push.apply(p, z), p;
      }
      function S(p) {
        var y = typeof p > "u" ? "undefined" : je(p);
        return y !== "object" ? y : p === Math ? "math" : p === null ? "null" : Array.isArray(p) ? "array" : Object.prototype.toString.call(p) === "[object Date]" ? "date" : typeof p.toString == "function" && /^\/.*\//.test(p.toString()) ? "regexp" : "object";
      }
      function x(p, y, C, z, H, G, J) {
        H = H || [], J = J || [];
        var q = H.slice(0);
        if (typeof G < "u") {
          if (z) {
            if (typeof z == "function" && z(q, G)) return;
            if ((typeof z > "u" ? "undefined" : je(z)) === "object") {
              if (z.prefilter && z.prefilter(q, G)) return;
              if (z.normalize) {
                var ae = z.normalize(q, G, p, y);
                ae && (p = ae[0], y = ae[1]);
              }
            }
          }
          q.push(G);
        }
        S(p) === "regexp" && S(y) === "regexp" && (p = p.toString(), y = y.toString());
        var ge = typeof p > "u" ? "undefined" : je(p), Ne = typeof y > "u" ? "undefined" : je(y), Se = ge !== "undefined" || J && J[J.length - 1].lhs && J[J.length - 1].lhs.hasOwnProperty(G), Ze = Ne !== "undefined" || J && J[J.length - 1].rhs && J[J.length - 1].rhs.hasOwnProperty(G);
        if (!Se && Ze) C(new h(q, y));
        else if (!Ze && Se) C(new m(q, p));
        else if (S(p) !== S(y)) C(new f(q, p, y));
        else if (S(p) === "date" && p - y !== 0) C(new f(q, p, y));
        else if (ge === "object" && p !== null && y !== null) if (J.filter(function(ke) {
          return ke.lhs === p;
        }).length) p !== y && C(new f(q, p, y));
        else {
          if (J.push({ lhs: p, rhs: y }), Array.isArray(p)) {
            var me;
            for (p.length, me = 0; me < p.length; me++) me >= y.length ? C(new g(q, me, new m(void 0, p[me]))) : x(p[me], y[me], C, z, q, me, J);
            for (; me < y.length; ) C(new g(q, me, new h(void 0, y[me++])));
          } else {
            var Bt = Object.keys(p), Et = Object.keys(y);
            Bt.forEach(function(ke, Yt) {
              var Xt = Et.indexOf(ke);
              Xt >= 0 ? (x(p[ke], y[ke], C, z, q, ke, J), Et = _(Et, Xt)) : x(p[ke], void 0, C, z, q, ke, J);
            }), Et.forEach(function(ke) {
              x(void 0, y[ke], C, z, q, ke, J);
            });
          }
          J.length = J.length - 1;
        }
        else p !== y && (ge === "number" && isNaN(p) && isNaN(y) || C(new f(q, p, y)));
      }
      function k(p, y, C, z) {
        return z = z || [], x(p, y, function(H) {
          H && z.push(H);
        }, C), z.length ? z : void 0;
      }
      function T(p, y, C) {
        if (C.path && C.path.length) {
          var z, H = p[y], G = C.path.length - 1;
          for (z = 0; z < G; z++) H = H[C.path[z]];
          switch (C.kind) {
            case "A":
              T(H[C.path[z]], C.index, C.item);
              break;
            case "D":
              delete H[C.path[z]];
              break;
            case "E":
            case "N":
              H[C.path[z]] = C.rhs;
          }
        } else switch (C.kind) {
          case "A":
            T(p[y], C.index, C.item);
            break;
          case "D":
            p = _(p, y);
            break;
          case "E":
          case "N":
            p[y] = C.rhs;
        }
        return p;
      }
      function L(p, y, C) {
        if (p && y && C && C.kind) {
          for (var z = p, H = -1, G = C.path ? C.path.length - 1 : 0; ++H < G; ) typeof z[C.path[H]] > "u" && (z[C.path[H]] = typeof C.path[H] == "number" ? [] : {}), z = z[C.path[H]];
          switch (C.kind) {
            case "A":
              T(C.path ? z[C.path[H]] : z, C.index, C.item);
              break;
            case "D":
              delete z[C.path[H]];
              break;
            case "E":
            case "N":
              z[C.path[H]] = C.rhs;
          }
        }
      }
      function P(p, y, C) {
        if (C.path && C.path.length) {
          var z, H = p[y], G = C.path.length - 1;
          for (z = 0; z < G; z++) H = H[C.path[z]];
          switch (C.kind) {
            case "A":
              P(H[C.path[z]], C.index, C.item);
              break;
            case "D":
              H[C.path[z]] = C.lhs;
              break;
            case "E":
              H[C.path[z]] = C.lhs;
              break;
            case "N":
              delete H[C.path[z]];
          }
        } else switch (C.kind) {
          case "A":
            P(p[y], C.index, C.item);
            break;
          case "D":
            p[y] = C.lhs;
            break;
          case "E":
            p[y] = C.lhs;
            break;
          case "N":
            p = _(p, y);
        }
        return p;
      }
      function I(p, y, C) {
        if (p && y && C && C.kind) {
          var z, H, G = p;
          for (H = C.path.length - 1, z = 0; z < H; z++) typeof G[C.path[z]] > "u" && (G[C.path[z]] = {}), G = G[C.path[z]];
          switch (C.kind) {
            case "A":
              P(G[C.path[z]], C.index, C.item);
              break;
            case "D":
              G[C.path[z]] = C.lhs;
              break;
            case "E":
              G[C.path[z]] = C.lhs;
              break;
            case "N":
              delete G[C.path[z]];
          }
        }
      }
      function M(p, y, C) {
        if (p && y) {
          var z = function(H) {
            C && !C(p, y, H) || L(p, y, H);
          };
          x(p, y, z);
        }
      }
      function B(p) {
        return "color: " + K[p].color + "; font-weight: bold";
      }
      function A(p) {
        var y = p.kind, C = p.path, z = p.lhs, H = p.rhs, G = p.index, J = p.item;
        switch (y) {
          case "E":
            return [C.join("."), z, "→", H];
          case "N":
            return [C.join("."), H];
          case "D":
            return [C.join(".")];
          case "A":
            return [C.join(".") + "[" + G + "]", J];
          default:
            return [];
        }
      }
      function j(p, y, C, z) {
        var H = k(p, y);
        try {
          z ? C.groupCollapsed("diff") : C.group("diff");
        } catch {
          C.log("diff");
        }
        H ? H.forEach(function(G) {
          var J = G.kind, q = A(G);
          C.log.apply(C, ["%c " + K[J].text, B(J)].concat(Fe(q)));
        }) : C.log("—— no diff ——");
        try {
          C.groupEnd();
        } catch {
          C.log("—— diff end —— ");
        }
      }
      function W(p, y, C, z) {
        switch (typeof p > "u" ? "undefined" : je(p)) {
          case "object":
            return typeof p[z] == "function" ? p[z].apply(p, Fe(C)) : p[z];
          case "function":
            return p(y);
          default:
            return p;
        }
      }
      function Q(p) {
        var y = p.timestamp, C = p.duration;
        return function(z, H, G) {
          var J = ["action"];
          return J.push("%c" + String(z.type)), y && J.push("%c@ " + H), C && J.push("%c(in " + G.toFixed(2) + " ms)"), J.join(" ");
        };
      }
      function F(p, y) {
        var C = y.logger, z = y.actionTransformer, H = y.titleFormatter, G = H === void 0 ? Q(y) : H, J = y.collapsed, q = y.colors, ae = y.level, ge = y.diff, Ne = typeof y.titleFormatter > "u";
        p.forEach(function(Se, Ze) {
          var me = Se.started, Bt = Se.startedTime, Et = Se.action, ke = Se.prevState, Yt = Se.error, Xt = Se.took, mt = Se.nextState, $t = p[Ze + 1];
          $t && (mt = $t.prevState, Xt = $t.started - me);
          var it = z(Et), Gr = typeof J == "function" ? J(function() {
            return mt;
          }, Et, Se) : J, Zo = He(Bt), Jo = q.title ? "color: " + q.title(it) + ";" : "", pn = ["color: gray; font-weight: lighter;"];
          pn.push(Jo), y.timestamp && pn.push("color: gray; font-weight: lighter;"), y.duration && pn.push("color: gray; font-weight: lighter;");
          var qt = G(it, Zo, Xt);
          try {
            Gr ? q.title && Ne ? C.groupCollapsed.apply(C, ["%c " + qt].concat(pn)) : C.groupCollapsed(qt) : q.title && Ne ? C.group.apply(C, ["%c " + qt].concat(pn)) : C.group(qt);
          } catch {
            C.log(qt);
          }
          var hn = W(ae, it, [ke], "prevState"), ar = W(ae, it, [it], "action"), Zt = W(ae, it, [Yt, ke], "error"), Jt = W(ae, it, [mt], "nextState");
          if (hn) if (q.prevState) {
            var Zu = "color: " + q.prevState(ke) + "; font-weight: bold";
            C[hn]("%c prev state", Zu, ke);
          } else C[hn]("prev state", ke);
          if (ar) if (q.action) {
            var ei = "color: " + q.action(it) + "; font-weight: bold";
            C[ar]("%c action    ", ei, it);
          } else C[ar]("action    ", it);
          if (Yt && Zt) if (q.error) {
            var ti = "color: " + q.error(Yt, ke) + "; font-weight: bold;";
            C[Zt]("%c error     ", ti, Yt);
          } else C[Zt]("error     ", Yt);
          if (Jt) if (q.nextState) {
            var Ju = "color: " + q.nextState(mt) + "; font-weight: bold";
            C[Jt]("%c next state", Ju, mt);
          } else C[Jt]("next state", mt);
          ge && j(ke, mt, C, Gr);
          try {
            C.groupEnd();
          } catch {
            C.log("—— log end ——");
          }
        });
      }
      function ie() {
        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = Object.assign({}, ne, p), C = y.logger, z = y.stateTransformer, H = y.errorTransformer, G = y.predicate, J = y.logErrors, q = y.diffPredicate;
        if (typeof C > "u") return function() {
          return function(ge) {
            return function(Ne) {
              return ge(Ne);
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
          return function(ge) {
            return function(Ne) {
              return ge(Ne);
            };
          };
        };
        var ae = [];
        return function(ge) {
          var Ne = ge.getState;
          return function(Se) {
            return function(Ze) {
              if (typeof G == "function" && !G(Ne, Ze)) return Se(Ze);
              var me = {};
              ae.push(me), me.started = qe.now(), me.startedTime = /* @__PURE__ */ new Date(), me.prevState = z(Ne()), me.action = Ze;
              var Bt = void 0;
              if (J) try {
                Bt = Se(Ze);
              } catch (ke) {
                me.error = H(ke);
              }
              else Bt = Se(Ze);
              me.took = qe.now() - me.started, me.nextState = z(Ne());
              var Et = y.diff && typeof q == "function" ? q(Ne, Ze) : y.diff;
              if (F(ae, Object.assign({}, y, { diff: Et })), ae.length = 0, me.error) throw me.error;
              return Bt;
            };
          };
        };
      }
      var we, Pe, ht = function(p, y) {
        return new Array(y + 1).join(p);
      }, Ve = function(p, y) {
        return ht("0", y - p.toString().length) + p;
      }, He = function(p) {
        return Ve(p.getHours(), 2) + ":" + Ve(p.getMinutes(), 2) + ":" + Ve(p.getSeconds(), 2) + "." + Ve(p.getMilliseconds(), 3);
      }, qe = typeof performance < "u" && performance !== null && typeof performance.now == "function" ? performance : Date, je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
        return typeof p;
      } : function(p) {
        return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
      }, Fe = function(p) {
        if (Array.isArray(p)) {
          for (var y = 0, C = Array(p.length); y < p.length; y++) C[y] = p[y];
          return C;
        }
        return Array.from(p);
      }, he = [];
      we = (typeof au > "u" ? "undefined" : je(au)) === "object" && au ? au : typeof window < "u" ? window : {}, Pe = we.DeepDiff, Pe && he.push(function() {
        typeof Pe < "u" && we.DeepDiff === k && (we.DeepDiff = Pe, Pe = void 0);
      }), s(f, c), s(h, c), s(m, c), s(g, c), Object.defineProperties(k, { diff: { value: k, enumerable: !0 }, observableDiff: { value: x, enumerable: !0 }, applyDiff: { value: M, enumerable: !0 }, applyChange: { value: L, enumerable: !0 }, revertChange: { value: I, enumerable: !0 }, isConflict: { value: function() {
        return typeof Pe < "u";
      }, enumerable: !0 }, noConflict: { value: function() {
        return he && (he.forEach(function(p) {
          p();
        }), he = null), k;
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
        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = p.dispatch, C = p.getState;
        return typeof y == "function" || typeof C == "function" ? ie()({ dispatch: y, getState: C }) : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
      };
      u.defaults = ne, u.createLogger = ie, u.logger = Y, u.default = Y, Object.defineProperty(u, "__esModule", { value: !0 });
    });
  })(Mo, Mo.exports)), Mo.exports;
}
var Gy = Ky();
const SS = /* @__PURE__ */ Da(Gy), Yy = {
  theme: void 0,
  kind: void 0
}, ah = za({
  name: "theme",
  initialState: Yy,
  reducers: {
    changeTheme: (n, o) => {
      n.kind = o.payload.kind, n.theme = { ...n.theme, ...o.payload.theme ?? {} }, n.kind === "light" ? (n.theme.computedOne = "rgba(0, 0, 0, 0.05)", n.theme.computedTwo = "rgba(0, 0, 0, 0.1)") : n.kind === "dark" ? (n.theme.computedOne = "rgba(255, 255, 255, 0.05)", n.theme.computedTwo = "rgba(255, 255, 255, 0.1)") : (n.theme.computedOne = "transparent", n.theme.computedTwo = "transparent");
    }
  }
}), Xy = La, { changeTheme: ES } = ah.actions, kS = ah.reducer, qy = {
  current: ["starting"],
  history: []
}, ch = za({
  name: "router",
  initialState: qy,
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
}), { goTo: Zy, goBack: xS, openLink: Jy } = ch.actions, e0 = zp, fh = La, CS = ch.reducer;
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
var _e = "-ms-", zo = "-moz-", ve = "-webkit-", dh = "comm", bu = "rule", Ua = "decl", t0 = "@import", ph = "@keyframes", n0 = "@layer", hh = Math.abs, Wa = String.fromCharCode, Ea = Object.assign;
function r0(n, o) {
  return be(n, 0) ^ 45 ? (((o << 2 ^ be(n, 0)) << 2 ^ be(n, 1)) << 2 ^ be(n, 2)) << 2 ^ be(n, 3) : 0;
}
function mh(n) {
  return n.trim();
}
function an(n, o) {
  return (n = o.exec(n)) ? n[0] : n;
}
function ce(n, o, u) {
  return n.replace(o, u);
}
function Eu(n, o, u) {
  return n.indexOf(o, u);
}
function be(n, o) {
  return n.charCodeAt(o) | 0;
}
function Ur(n, o, u) {
  return n.slice(o, u);
}
function Qt(n) {
  return n.length;
}
function vh(n) {
  return n.length;
}
function jo(n, o) {
  return o.push(n), n;
}
function o0(n, o) {
  return n.map(o).join("");
}
function up(n, o) {
  return n.filter(function(u) {
    return !an(u, o);
  });
}
var Vu = 1, Wr = 1, gh = 0, Nt = 0, Me = 0, Kr = "";
function Hu(n, o, u, s, c, f, h, m) {
  return { value: n, root: o, parent: u, type: s, props: c, children: f, line: Vu, column: Wr, length: h, return: "", siblings: m };
}
function In(n, o) {
  return Ea(Hu("", null, null, "", null, null, 0, n.siblings), n, { length: -n.length }, o);
}
function Ir(n) {
  for (; n.root; )
    n = In(n.root, { children: [n] });
  jo(n, n.siblings);
}
function i0() {
  return Me;
}
function u0() {
  return Me = Nt > 0 ? be(Kr, --Nt) : 0, Wr--, Me === 10 && (Wr = 1, Vu--), Me;
}
function jt() {
  return Me = Nt < gh ? be(Kr, Nt++) : 0, Wr++, Me === 10 && (Wr = 1, Vu++), Me;
}
function nr() {
  return be(Kr, Nt);
}
function ku() {
  return Nt;
}
function Qu(n, o) {
  return Ur(Kr, n, o);
}
function ka(n) {
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
function l0(n) {
  return Vu = Wr = 1, gh = Qt(Kr = n), Nt = 0, [];
}
function s0(n) {
  return Kr = "", n;
}
function Js(n) {
  return mh(Qu(Nt - 1, xa(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function a0(n) {
  for (; (Me = nr()) && Me < 33; )
    jt();
  return ka(n) > 2 || ka(Me) > 3 ? "" : " ";
}
function c0(n, o) {
  for (; --o && jt() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); )
    ;
  return Qu(n, ku() + (o < 6 && nr() == 32 && jt() == 32));
}
function xa(n) {
  for (; jt(); )
    switch (Me) {
      // ] ) " '
      case n:
        return Nt;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && xa(Me);
        break;
      // (
      case 40:
        n === 41 && xa(n);
        break;
      // \
      case 92:
        jt();
        break;
    }
  return Nt;
}
function f0(n, o) {
  for (; jt() && n + Me !== 57; )
    if (n + Me === 84 && nr() === 47)
      break;
  return "/*" + Qu(o, Nt - 1) + "*" + Wa(n === 47 ? n : jt());
}
function d0(n) {
  for (; !ka(nr()); )
    jt();
  return Qu(n, Nt);
}
function p0(n) {
  return s0(xu("", null, null, null, [""], n = l0(n), 0, [0], n));
}
function xu(n, o, u, s, c, f, h, m, g) {
  for (var _ = 0, S = 0, x = h, k = 0, T = 0, L = 0, P = 1, I = 1, M = 1, B = 0, A = "", j = c, W = f, Q = s, F = A; I; )
    switch (L = B, B = jt()) {
      // (
      case 40:
        if (L != 108 && be(F, x - 1) == 58) {
          Eu(F += ce(Js(B), "&", "&\f"), "&\f", hh(_ ? m[_ - 1] : 0)) != -1 && (M = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        F += Js(B);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        F += a0(L);
        break;
      // \
      case 92:
        F += c0(ku() - 1, 7);
        continue;
      // /
      case 47:
        switch (nr()) {
          case 42:
          case 47:
            jo(h0(f0(jt(), ku()), o, u, g), g);
            break;
          default:
            F += "/";
        }
        break;
      // {
      case 123 * P:
        m[_++] = Qt(F) * M;
      // } ; \0
      case 125 * P:
      case 59:
      case 0:
        switch (B) {
          // \0 }
          case 0:
          case 125:
            I = 0;
          // ;
          case 59 + S:
            M == -1 && (F = ce(F, /\f/g, "")), T > 0 && Qt(F) - x && jo(T > 32 ? sp(F + ";", s, u, x - 1, g) : sp(ce(F, " ", "") + ";", s, u, x - 2, g), g);
            break;
          // @ ;
          case 59:
            F += ";";
          // { rule/at-rule
          default:
            if (jo(Q = lp(F, o, u, _, S, c, m, A, j = [], W = [], x, f), f), B === 123)
              if (S === 0)
                xu(F, o, Q, Q, j, f, x, m, W);
              else
                switch (k === 99 && be(F, 3) === 110 ? 100 : k) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    xu(n, Q, Q, s && jo(lp(n, Q, Q, 0, 0, c, m, A, c, j = [], x, W), W), c, W, x, m, s ? j : W);
                    break;
                  default:
                    xu(F, Q, Q, Q, [""], W, 0, m, W);
                }
        }
        _ = S = T = 0, P = M = 1, A = F = "", x = h;
        break;
      // :
      case 58:
        x = 1 + Qt(F), T = L;
      default:
        if (P < 1) {
          if (B == 123)
            --P;
          else if (B == 125 && P++ == 0 && u0() == 125)
            continue;
        }
        switch (F += Wa(B), B * P) {
          // &
          case 38:
            M = S > 0 ? 1 : (F += "\f", -1);
            break;
          // ,
          case 44:
            m[_++] = (Qt(F) - 1) * M, M = 1;
            break;
          // @
          case 64:
            nr() === 45 && (F += Js(jt())), k = nr(), S = x = Qt(A = F += d0(ku())), B++;
            break;
          // -
          case 45:
            L === 45 && Qt(F) == 2 && (P = 0);
        }
    }
  return f;
}
function lp(n, o, u, s, c, f, h, m, g, _, S, x) {
  for (var k = c - 1, T = c === 0 ? f : [""], L = vh(T), P = 0, I = 0, M = 0; P < s; ++P)
    for (var B = 0, A = Ur(n, k + 1, k = hh(I = h[P])), j = n; B < L; ++B)
      (j = mh(I > 0 ? T[B] + " " + A : ce(A, /&\f/g, T[B]))) && (g[M++] = j);
  return Hu(n, o, u, c === 0 ? bu : m, g, _, S, x);
}
function h0(n, o, u, s) {
  return Hu(n, o, u, dh, Wa(i0()), Ur(n, 2, -2), 0, s);
}
function sp(n, o, u, s, c) {
  return Hu(n, o, u, Ua, Ur(n, 0, s), Ur(n, s + 1, -1), s, c);
}
function yh(n, o, u) {
  switch (r0(n, o)) {
    // color-adjust
    case 5103:
      return ve + "print-" + n + n;
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
      return ve + n + n;
    // tab-size
    case 4789:
      return zo + n + n;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ve + n + zo + n + _e + n + n;
    // writing-mode
    case 5936:
      switch (be(n, o + 11)) {
        // vertical-l(r)
        case 114:
          return ve + n + _e + ce(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        // vertical-r(l)
        case 108:
          return ve + n + _e + ce(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        // horizontal(-)tb
        case 45:
          return ve + n + _e + ce(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return ve + n + _e + n + n;
    // order
    case 6165:
      return ve + n + _e + "flex-" + n + n;
    // align-items
    case 5187:
      return ve + n + ce(n, /(\w+).+(:[^]+)/, ve + "box-$1$2" + _e + "flex-$1$2") + n;
    // align-self
    case 5443:
      return ve + n + _e + "flex-item-" + ce(n, /flex-|-self/g, "") + (an(n, /flex-|baseline/) ? "" : _e + "grid-row-" + ce(n, /flex-|-self/g, "")) + n;
    // align-content
    case 4675:
      return ve + n + _e + "flex-line-pack" + ce(n, /align-content|flex-|-self/g, "") + n;
    // flex-shrink
    case 5548:
      return ve + n + _e + ce(n, "shrink", "negative") + n;
    // flex-basis
    case 5292:
      return ve + n + _e + ce(n, "basis", "preferred-size") + n;
    // flex-grow
    case 6060:
      return ve + "box-" + ce(n, "-grow", "") + ve + n + _e + ce(n, "grow", "positive") + n;
    // transition
    case 4554:
      return ve + ce(n, /([^-])(transform)/g, "$1" + ve + "$2") + n;
    // cursor
    case 6187:
      return ce(ce(ce(n, /(zoom-|grab)/, ve + "$1"), /(image-set)/, ve + "$1"), n, "") + n;
    // background, background-image
    case 5495:
    case 3959:
      return ce(n, /(image-set\([^]*)/, ve + "$1$`$1");
    // justify-content
    case 4968:
      return ce(ce(n, /(.+:)(flex-)?(.*)/, ve + "box-pack:$3" + _e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ve + n + n;
    // justify-self
    case 4200:
      if (!an(n, /flex-|baseline/)) return _e + "grid-column-align" + Ur(n, o) + n;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return _e + ce(n, "template-", "") + n;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return u && u.some(function(s, c) {
        return o = c, an(s.props, /grid-\w+-end/);
      }) ? ~Eu(n + (u = u[o].value), "span", 0) ? n : _e + ce(n, "-start", "") + n + _e + "grid-row-span:" + (~Eu(u, "span", 0) ? an(u, /\d+/) : +an(u, /\d+/) - +an(n, /\d+/)) + ";" : _e + ce(n, "-start", "") + n;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return u && u.some(function(s) {
        return an(s.props, /grid-\w+-start/);
      }) ? n : _e + ce(ce(n, "-end", "-span"), "span ", "") + n;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ce(n, /(.+)-inline(.+)/, ve + "$1$2") + n;
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
      if (Qt(n) - 1 - o > 6)
        switch (be(n, o + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (be(n, o + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return ce(n, /(.+:)(.+)-([^]+)/, "$1" + ve + "$2-$3$1" + zo + (be(n, o + 3) == 108 ? "$3" : "$2-$3")) + n;
          // (s)tretch
          case 115:
            return ~Eu(n, "stretch", 0) ? yh(ce(n, "stretch", "fill-available"), o, u) + n : n;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return ce(n, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(s, c, f, h, m, g, _) {
        return _e + c + ":" + f + _ + (h ? _e + c + "-span:" + (m ? g : +g - +f) + _ : "") + n;
      });
    // position: sticky
    case 4949:
      if (be(n, o + 6) === 121)
        return ce(n, ":", ":" + ve) + n;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (be(n, be(n, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return ce(n, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ve + (be(n, 14) === 45 ? "inline-" : "") + "box$3$1" + ve + "$2$3$1" + _e + "$2box$3") + n;
        // (inline-)?gri(d)
        case 100:
          return ce(n, ":", ":" + _e) + n;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ce(n, "scroll-", "scroll-snap-") + n;
  }
  return n;
}
function Iu(n, o) {
  for (var u = "", s = 0; s < n.length; s++)
    u += o(n[s], s, n, o) || "";
  return u;
}
function m0(n, o, u, s) {
  switch (n.type) {
    case n0:
      if (n.children.length) break;
    case t0:
    case Ua:
      return n.return = n.return || n.value;
    case dh:
      return "";
    case ph:
      return n.return = n.value + "{" + Iu(n.children, s) + "}";
    case bu:
      if (!Qt(n.value = n.props.join(","))) return "";
  }
  return Qt(u = Iu(n.children, s)) ? n.return = n.value + "{" + u + "}" : "";
}
function v0(n) {
  var o = vh(n);
  return function(u, s, c, f) {
    for (var h = "", m = 0; m < o; m++)
      h += n[m](u, s, c, f) || "";
    return h;
  };
}
function g0(n) {
  return function(o) {
    o.root || (o = o.return) && n(o);
  };
}
function y0(n, o, u, s) {
  if (n.length > -1 && !n.return)
    switch (n.type) {
      case Ua:
        n.return = yh(n.value, n.length, u);
        return;
      case ph:
        return Iu([In(n, { value: ce(n.value, "@", "@" + ve) })], s);
      case bu:
        if (n.length)
          return o0(u = n.props, function(c) {
            switch (an(c, s = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ir(In(n, { props: [ce(c, /:(read-\w+)/, ":" + zo + "$1")] })), Ir(In(n, { props: [c] })), Ea(n, { props: up(u, s) });
                break;
              // :placeholder
              case "::placeholder":
                Ir(In(n, { props: [ce(c, /:(plac\w+)/, ":" + ve + "input-$1")] })), Ir(In(n, { props: [ce(c, /:(plac\w+)/, ":" + zo + "$1")] })), Ir(In(n, { props: [ce(c, /:(plac\w+)/, _e + "input-$1")] })), Ir(In(n, { props: [c] })), Ea(n, { props: up(u, s) });
                break;
            }
            return "";
          });
    }
}
var w0 = {
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
}, br = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", wh = "active", Sh = "data-styled-version", Ku = "6.1.19", ba = `/*!sc*/
`, Mu = typeof window < "u" && typeof document < "u", S0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Gu = Object.freeze([]), Vr = Object.freeze({});
function E0(n, o, u) {
  return u === void 0 && (u = Vr), n.theme !== u.theme && n.theme || o || u.theme;
}
var Eh = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), k0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, x0 = /(^-|-$)/g;
function ap(n) {
  return n.replace(k0, "-").replace(x0, "");
}
var C0 = /(a)(d)/gi, hu = 52, cp = function(n) {
  return String.fromCharCode(n + (n > 25 ? 39 : 97));
};
function Ca(n) {
  var o, u = "";
  for (o = Math.abs(n); o > hu; o = o / hu | 0) u = cp(o % hu) + u;
  return (cp(o % hu) + u).replace(C0, "$1-$2");
}
var ea, kh = 5381, zr = function(n, o) {
  for (var u = o.length; u; ) n = 33 * n ^ o.charCodeAt(--u);
  return n;
}, xh = function(n) {
  return zr(kh, n);
};
function Ch(n) {
  return Ca(xh(n) >>> 0);
}
function _0(n) {
  return n.displayName || n.name || "Component";
}
function ta(n) {
  return typeof n == "string" && !0;
}
var _h = typeof Symbol == "function" && Symbol.for, Ph = _h ? Symbol.for("react.memo") : 60115, P0 = _h ? Symbol.for("react.forward_ref") : 60112, R0 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, N0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Rh = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, O0 = ((ea = {})[P0] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ea[Ph] = Rh, ea);
function fp(n) {
  return ("type" in (o = n) && o.type.$$typeof) === Ph ? Rh : "$$typeof" in n ? O0[n.$$typeof] : R0;
  var o;
}
var T0 = Object.defineProperty, D0 = Object.getOwnPropertyNames, dp = Object.getOwnPropertySymbols, A0 = Object.getOwnPropertyDescriptor, L0 = Object.getPrototypeOf, pp = Object.prototype;
function Nh(n, o, u) {
  if (typeof o != "string") {
    if (pp) {
      var s = L0(o);
      s && s !== pp && Nh(n, s, u);
    }
    var c = D0(o);
    dp && (c = c.concat(dp(o)));
    for (var f = fp(n), h = fp(o), m = 0; m < c.length; ++m) {
      var g = c[m];
      if (!(g in N0 || u && u[g] || h && g in h || f && g in f)) {
        var _ = A0(o, g);
        try {
          T0(n, g, _);
        } catch {
        }
      }
    }
  }
  return n;
}
function Hr(n) {
  return typeof n == "function";
}
function Va(n) {
  return typeof n == "object" && "styledComponentId" in n;
}
function Jn(n, o) {
  return n && o ? "".concat(n, " ").concat(o) : n || o || "";
}
function _a(n, o) {
  if (n.length === 0) return "";
  for (var u = n[0], s = 1; s < n.length; s++) u += n[s];
  return u;
}
function Ho(n) {
  return n !== null && typeof n == "object" && n.constructor.name === Object.name && !("props" in n && n.$$typeof);
}
function Pa(n, o, u) {
  if (u === void 0 && (u = !1), !u && !Ho(n) && !Array.isArray(n)) return o;
  if (Array.isArray(o)) for (var s = 0; s < o.length; s++) n[s] = Pa(n[s], o[s]);
  else if (Ho(o)) for (var s in o) n[s] = Pa(n[s], o[s]);
  return n;
}
function Ha(n, o) {
  Object.defineProperty(n, "toString", { value: o });
}
function qo(n) {
  for (var o = [], u = 1; u < arguments.length; u++) o[u - 1] = arguments[u];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n, " for more information.").concat(o.length > 0 ? " Args: ".concat(o.join(", ")) : ""));
}
var I0 = (function() {
  function n(o) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = o;
  }
  return n.prototype.indexOfGroup = function(o) {
    for (var u = 0, s = 0; s < o; s++) u += this.groupSizes[s];
    return u;
  }, n.prototype.insertRules = function(o, u) {
    if (o >= this.groupSizes.length) {
      for (var s = this.groupSizes, c = s.length, f = c; o >= f; ) if ((f <<= 1) < 0) throw qo(16, "".concat(o));
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
    for (var s = this.groupSizes[o], c = this.indexOfGroup(o), f = c + s, h = c; h < f; h++) u += "".concat(this.tag.getRule(h)).concat(ba);
    return u;
  }, n;
})(), Cu = /* @__PURE__ */ new Map(), ju = /* @__PURE__ */ new Map(), _u = 1, mu = function(n) {
  if (Cu.has(n)) return Cu.get(n);
  for (; ju.has(_u); ) _u++;
  var o = _u++;
  return Cu.set(n, o), ju.set(o, n), o;
}, M0 = function(n, o) {
  _u = o + 1, Cu.set(n, o), ju.set(o, n);
}, j0 = "style[".concat(br, "][").concat(Sh, '="').concat(Ku, '"]'), F0 = new RegExp("^".concat(br, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), z0 = function(n, o, u) {
  for (var s, c = u.split(","), f = 0, h = c.length; f < h; f++) (s = c[f]) && n.registerName(o, s);
}, B0 = function(n, o) {
  for (var u, s = ((u = o.textContent) !== null && u !== void 0 ? u : "").split(ba), c = [], f = 0, h = s.length; f < h; f++) {
    var m = s[f].trim();
    if (m) {
      var g = m.match(F0);
      if (g) {
        var _ = 0 | parseInt(g[1], 10), S = g[2];
        _ !== 0 && (M0(S, _), z0(n, S, g[3]), n.getTag().insertRules(_, c)), c.length = 0;
      } else c.push(m);
    }
  }
}, hp = function(n) {
  for (var o = document.querySelectorAll(j0), u = 0, s = o.length; u < s; u++) {
    var c = o[u];
    c && c.getAttribute(br) !== wh && (B0(n, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
function $0() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Oh = function(n) {
  var o = document.head, u = n || o, s = document.createElement("style"), c = (function(m) {
    var g = Array.from(m.querySelectorAll("style[".concat(br, "]")));
    return g[g.length - 1];
  })(u), f = c !== void 0 ? c.nextSibling : null;
  s.setAttribute(br, wh), s.setAttribute(Sh, Ku);
  var h = $0();
  return h && s.setAttribute("nonce", h), u.insertBefore(s, f), s;
}, U0 = (function() {
  function n(o) {
    this.element = Oh(o), this.element.appendChild(document.createTextNode("")), this.sheet = (function(u) {
      if (u.sheet) return u.sheet;
      for (var s = document.styleSheets, c = 0, f = s.length; c < f; c++) {
        var h = s[c];
        if (h.ownerNode === u) return h;
      }
      throw qo(17);
    })(this.element), this.length = 0;
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
})(), W0 = (function() {
  function n(o) {
    this.element = Oh(o), this.nodes = this.element.childNodes, this.length = 0;
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
})(), b0 = (function() {
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
})(), mp = Mu, V0 = { isServer: !Mu, useCSSOMInjection: !S0 }, Th = (function() {
  function n(o, u, s) {
    o === void 0 && (o = Vr), u === void 0 && (u = {});
    var c = this;
    this.options = dt(dt({}, V0), o), this.gs = u, this.names = new Map(s), this.server = !!o.isServer, !this.server && Mu && mp && (mp = !1, hp(this)), Ha(this, function() {
      return (function(f) {
        for (var h = f.getTag(), m = h.length, g = "", _ = function(x) {
          var k = (function(M) {
            return ju.get(M);
          })(x);
          if (k === void 0) return "continue";
          var T = f.names.get(k), L = h.getGroup(x);
          if (T === void 0 || !T.size || L.length === 0) return "continue";
          var P = "".concat(br, ".g").concat(x, '[id="').concat(k, '"]'), I = "";
          T !== void 0 && T.forEach(function(M) {
            M.length > 0 && (I += "".concat(M, ","));
          }), g += "".concat(L).concat(P, '{content:"').concat(I, '"}').concat(ba);
        }, S = 0; S < m; S++) _(S);
        return g;
      })(c);
    });
  }
  return n.registerId = function(o) {
    return mu(o);
  }, n.prototype.rehydrate = function() {
    !this.server && Mu && hp(this);
  }, n.prototype.reconstructWithOptions = function(o, u) {
    return u === void 0 && (u = !0), new n(dt(dt({}, this.options), o), this.gs, u && this.names || void 0);
  }, n.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }, n.prototype.getTag = function() {
    return this.tag || (this.tag = (o = (function(u) {
      var s = u.useCSSOMInjection, c = u.target;
      return u.isServer ? new b0(c) : s ? new U0(c) : new W0(c);
    })(this.options), new I0(o)));
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
})(), H0 = /&/g, Q0 = /^\s*\/\/.*$/gm;
function Dh(n, o) {
  return n.map(function(u) {
    return u.type === "rule" && (u.value = "".concat(o, " ").concat(u.value), u.value = u.value.replaceAll(",", ",".concat(o, " ")), u.props = u.props.map(function(s) {
      return "".concat(o, " ").concat(s);
    })), Array.isArray(u.children) && u.type !== "@keyframes" && (u.children = Dh(u.children, o)), u;
  });
}
function K0(n) {
  var o, u, s, c = Vr, f = c.options, h = f === void 0 ? Vr : f, m = c.plugins, g = m === void 0 ? Gu : m, _ = function(k, T, L) {
    return L.startsWith(u) && L.endsWith(u) && L.replaceAll(u, "").length > 0 ? ".".concat(o) : k;
  }, S = g.slice();
  S.push(function(k) {
    k.type === bu && k.value.includes("&") && (k.props[0] = k.props[0].replace(H0, u).replace(s, _));
  }), h.prefix && S.push(y0), S.push(m0);
  var x = function(k, T, L, P) {
    T === void 0 && (T = ""), L === void 0 && (L = ""), P === void 0 && (P = "&"), o = P, u = T, s = new RegExp("\\".concat(u, "\\b"), "g");
    var I = k.replace(Q0, ""), M = p0(L || T ? "".concat(L, " ").concat(T, " { ").concat(I, " }") : I);
    h.namespace && (M = Dh(M, h.namespace));
    var B = [];
    return Iu(M, v0(S.concat(g0(function(A) {
      return B.push(A);
    })))), B;
  };
  return x.hash = g.length ? g.reduce(function(k, T) {
    return T.name || qo(15), zr(k, T.name);
  }, kh).toString() : "", x;
}
var G0 = new Th(), Ra = K0(), Ah = Fn.createContext({ shouldForwardProp: void 0, styleSheet: G0, stylis: Ra });
Ah.Consumer;
Fn.createContext(void 0);
function vp() {
  return O.useContext(Ah);
}
var Lh = (function() {
  function n(o, u) {
    var s = this;
    this.inject = function(c, f) {
      f === void 0 && (f = Ra);
      var h = s.name + f.hash;
      c.hasNameForId(s.id, h) || c.insertRules(s.id, h, f(s.rules, h, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = u, Ha(this, function() {
      throw qo(12, String(s.name));
    });
  }
  return n.prototype.getName = function(o) {
    return o === void 0 && (o = Ra), this.name + o.hash;
  }, n;
})(), Y0 = function(n) {
  return n >= "A" && n <= "Z";
};
function gp(n) {
  for (var o = "", u = 0; u < n.length; u++) {
    var s = n[u];
    if (u === 1 && s === "-" && n[0] === "-") return n;
    Y0(s) ? o += "-" + s.toLowerCase() : o += s;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Ih = function(n) {
  return n == null || n === !1 || n === "";
}, Mh = function(n) {
  var o, u, s = [];
  for (var c in n) {
    var f = n[c];
    n.hasOwnProperty(c) && !Ih(f) && (Array.isArray(f) && f.isCss || Hr(f) ? s.push("".concat(gp(c), ":"), f, ";") : Ho(f) ? s.push.apply(s, Vo(Vo(["".concat(c, " {")], Mh(f), !1), ["}"], !1)) : s.push("".concat(gp(c), ": ").concat((o = c, (u = f) == null || typeof u == "boolean" || u === "" ? "" : typeof u != "number" || u === 0 || o in w0 || o.startsWith("--") ? String(u).trim() : "".concat(u, "px")), ";")));
  }
  return s;
};
function rr(n, o, u, s) {
  if (Ih(n)) return [];
  if (Va(n)) return [".".concat(n.styledComponentId)];
  if (Hr(n)) {
    if (!Hr(f = n) || f.prototype && f.prototype.isReactComponent || !o) return [n];
    var c = n(o);
    return rr(c, o, u, s);
  }
  var f;
  return n instanceof Lh ? u ? (n.inject(u, s), [n.getName(s)]) : [n] : Ho(n) ? Mh(n) : Array.isArray(n) ? Array.prototype.concat.apply(Gu, n.map(function(h) {
    return rr(h, o, u, s);
  })) : [n.toString()];
}
function X0(n) {
  for (var o = 0; o < n.length; o += 1) {
    var u = n[o];
    if (Hr(u) && !Va(u)) return !1;
  }
  return !0;
}
var q0 = xh(Ku), Z0 = (function() {
  function n(o, u, s) {
    this.rules = o, this.staticRulesId = "", this.isStatic = (s === void 0 || s.isStatic) && X0(o), this.componentId = u, this.baseHash = zr(q0, u), this.baseStyle = s, Th.registerId(u);
  }
  return n.prototype.generateAndInjectStyles = function(o, u, s) {
    var c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, u, s) : "";
    if (this.isStatic && !s.hash) if (this.staticRulesId && u.hasNameForId(this.componentId, this.staticRulesId)) c = Jn(c, this.staticRulesId);
    else {
      var f = _a(rr(this.rules, o, u, s)), h = Ca(zr(this.baseHash, f) >>> 0);
      if (!u.hasNameForId(this.componentId, h)) {
        var m = s(f, ".".concat(h), void 0, this.componentId);
        u.insertRules(this.componentId, h, m);
      }
      c = Jn(c, h), this.staticRulesId = h;
    }
    else {
      for (var g = zr(this.baseHash, s.hash), _ = "", S = 0; S < this.rules.length; S++) {
        var x = this.rules[S];
        if (typeof x == "string") _ += x;
        else if (x) {
          var k = _a(rr(x, o, u, s));
          g = zr(g, k + S), _ += k;
        }
      }
      if (_) {
        var T = Ca(g >>> 0);
        u.hasNameForId(this.componentId, T) || u.insertRules(this.componentId, T, s(_, ".".concat(T), void 0, this.componentId)), c = Jn(c, T);
      }
    }
    return c;
  }, n;
})(), jh = Fn.createContext(void 0);
jh.Consumer;
var na = {};
function J0(n, o, u) {
  var s = Va(n), c = n, f = !ta(n), h = o.attrs, m = h === void 0 ? Gu : h, g = o.componentId, _ = g === void 0 ? (function(j, W) {
    var Q = typeof j != "string" ? "sc" : ap(j);
    na[Q] = (na[Q] || 0) + 1;
    var F = "".concat(Q, "-").concat(Ch(Ku + Q + na[Q]));
    return W ? "".concat(W, "-").concat(F) : F;
  })(o.displayName, o.parentComponentId) : g, S = o.displayName, x = S === void 0 ? (function(j) {
    return ta(j) ? "styled.".concat(j) : "Styled(".concat(_0(j), ")");
  })(n) : S, k = o.displayName && o.componentId ? "".concat(ap(o.displayName), "-").concat(o.componentId) : o.componentId || _, T = s && c.attrs ? c.attrs.concat(m).filter(Boolean) : m, L = o.shouldForwardProp;
  if (s && c.shouldForwardProp) {
    var P = c.shouldForwardProp;
    if (o.shouldForwardProp) {
      var I = o.shouldForwardProp;
      L = function(j, W) {
        return P(j, W) && I(j, W);
      };
    } else L = P;
  }
  var M = new Z0(u, k, s ? c.componentStyle : void 0);
  function B(j, W) {
    return (function(Q, F, ie) {
      var we = Q.attrs, Pe = Q.componentStyle, ht = Q.defaultProps, Ve = Q.foldedComponentIds, He = Q.styledComponentId, qe = Q.target, je = Fn.useContext(jh), Fe = vp(), he = Q.shouldForwardProp || Fe.shouldForwardProp, K = E0(F, je, ht) || Vr, ne = (function(H, G, J) {
        for (var q, ae = dt(dt({}, G), { className: void 0, theme: J }), ge = 0; ge < H.length; ge += 1) {
          var Ne = Hr(q = H[ge]) ? q(ae) : q;
          for (var Se in Ne) ae[Se] = Se === "className" ? Jn(ae[Se], Ne[Se]) : Se === "style" ? dt(dt({}, ae[Se]), Ne[Se]) : Ne[Se];
        }
        return G.className && (ae.className = Jn(ae.className, G.className)), ae;
      })(we, F, K), Y = ne.as || qe, p = {};
      for (var y in ne) ne[y] === void 0 || y[0] === "$" || y === "as" || y === "theme" && ne.theme === K || (y === "forwardedAs" ? p.as = ne.forwardedAs : he && !he(y, Y) || (p[y] = ne[y]));
      var C = (function(H, G) {
        var J = vp(), q = H.generateAndInjectStyles(G, J.styleSheet, J.stylis);
        return q;
      })(Pe, ne), z = Jn(Ve, He);
      return C && (z += " " + C), ne.className && (z += " " + ne.className), p[ta(Y) && !Eh.has(Y) ? "class" : "className"] = z, ie && (p.ref = ie), O.createElement(Y, p);
    })(A, j, W);
  }
  B.displayName = x;
  var A = Fn.forwardRef(B);
  return A.attrs = T, A.componentStyle = M, A.displayName = x, A.shouldForwardProp = L, A.foldedComponentIds = s ? Jn(c.foldedComponentIds, c.styledComponentId) : "", A.styledComponentId = k, A.target = s ? c.target : n, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(j) {
    this._foldedDefaultProps = s ? (function(W) {
      for (var Q = [], F = 1; F < arguments.length; F++) Q[F - 1] = arguments[F];
      for (var ie = 0, we = Q; ie < we.length; ie++) Pa(W, we[ie], !0);
      return W;
    })({}, c.defaultProps, j) : j;
  } }), Ha(A, function() {
    return ".".concat(A.styledComponentId);
  }), f && Nh(A, n, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), A;
}
function yp(n, o) {
  for (var u = [n[0]], s = 0, c = o.length; s < c; s += 1) u.push(o[s], n[s + 1]);
  return u;
}
var wp = function(n) {
  return Object.assign(n, { isCss: !0 });
};
function Fh(n) {
  for (var o = [], u = 1; u < arguments.length; u++) o[u - 1] = arguments[u];
  if (Hr(n) || Ho(n)) return wp(rr(yp(Gu, Vo([n], o, !0))));
  var s = n;
  return o.length === 0 && s.length === 1 && typeof s[0] == "string" ? rr(s) : wp(rr(yp(s, o)));
}
function Na(n, o, u) {
  if (u === void 0 && (u = Vr), !o) throw qo(1, o);
  var s = function(c) {
    for (var f = [], h = 1; h < arguments.length; h++) f[h - 1] = arguments[h];
    return n(o, u, Fh.apply(void 0, Vo([c], f, !1)));
  };
  return s.attrs = function(c) {
    return Na(n, o, dt(dt({}, u), { attrs: Array.prototype.concat(u.attrs, c).filter(Boolean) }));
  }, s.withConfig = function(c) {
    return Na(n, o, dt(dt({}, u), c));
  }, s;
}
var zh = function(n) {
  return Na(J0, n);
}, Ft = zh;
Eh.forEach(function(n) {
  Ft[n] = zh(n);
});
function _S(n) {
  for (var o = [], u = 1; u < arguments.length; u++) o[u - 1] = arguments[u];
  var s = _a(Fh.apply(void 0, Vo([n], o, !1))), c = Ch(s);
  return new Lh(c, s);
}
const e1 = O.createContext(null), ra = {
  didCatch: !1,
  error: null
};
class Bh extends O.Component {
  constructor(o) {
    super(o), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = ra;
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
      }), this.setState(ra);
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
      }), this.setState(ra);
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
    return O.createElement(e1.Provider, {
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
function $h() {
  const n = Xy((o) => o.theme);
  return /* @__PURE__ */ X.jsxs("style", { children: [
    o1(n.theme),
    r1()
  ] });
}
function r1() {
  return `
  body {
    padding: 0;
    margin: 0;
    background-color: var(--xliic-background);
    color: var(--xliic-foreground);
    }`;
}
function o1(n) {
  const o = [];
  if (n !== void 0)
    for (const u of n1)
      n[u] && o.push(`${Xe[u]}: ${n[u]};`);
  return `:root {
    ${o.join(`
`)}
  }`;
}
const Uh = Fn.createContext([
  {
    id: "starting",
    title: "Starting",
    element: Fn.createElement("div", {}, "Empty starting route")
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
function bh() {
  return /* @__PURE__ */ X.jsx(Uh.Consumer, { children: (n) => /* @__PURE__ */ X.jsx(i1, { routes: n }) });
}
function i1({ routes: n }) {
  const o = fh((s) => s.router.current), u = Wh(n, o);
  return !u || u.link ? /* @__PURE__ */ X.jsx("div", {}) : u.element;
}
function u1() {
  return /* @__PURE__ */ X.jsx(Uh.Consumer, { children: (n) => /* @__PURE__ */ X.jsx(l1, { routes: n }) });
}
function l1({ routes: n }) {
  const o = e0(), s = fh((m) => m.router.current).slice(0, 2), c = s.slice(0, 1), f = s.length > 1 ? n.find((m) => m.id === s[0])?.children : n, h = f?.find((m) => m.id === s[s.length - 1]);
  return f ? h?.navigation === !1 ? h.title !== "" ? /* @__PURE__ */ X.jsx(a1, { children: /* @__PURE__ */ X.jsx(f1, { children: h.title }) }) : null : /* @__PURE__ */ X.jsx(s1, { children: f.map(({ id: m, title: g, link: _ }) => /* @__PURE__ */ X.jsx(
    c1,
    {
      $active: m === s[s.length - 1],
      onClick: () => {
        o(_ ? Jy(_) : Zy([...c, m]));
      },
      children: typeof g == "string" ? /* @__PURE__ */ X.jsx("div", { children: g }) : g
    },
    m
  )) }) : null;
}
const s1 = Ft.nav`
  height: 28px;
  display: flex;
  padding: 0px 16px;
  padding-top: 6px;
  justify-content: space-between;
  font-size: 14px;
  border-bottom: 1px solid var(${Xe.border});
`, a1 = Ft.div`
  height: 35px;
  display: flex;
  padding: 0px 16px;
  border-bottom: 1px solid var(${Xe.border});
`, c1 = Ft.div`
  padding: 0 1em;
  display: flex;
  align-items: center;
  ${({ $active: n }) => n ? `border-bottom: 3px solid var(${Xe.buttonBackground});` : "opacity: 0.7; border-bottom: 3px solid transparent; cursor: pointer;"};
  > div {
    border: ${({ $active: n }) => n && Xe.contrastActiveBorder ? `1px solid var(${Xe.contrastActiveBorder})` : "none"};
  }
`, f1 = Ft.div`
  place-self: center;
  font-size: 16px;
  font-weight: 500;
  display: flex;
`;
function jn(n, o, { checkForDefaultPrevented: u = !0 } = {}) {
  return function(c) {
    if (n?.(c), u === !1 || !c.defaultPrevented)
      return o?.(c);
  };
}
function Sp(n, o) {
  if (typeof n == "function")
    return n(o);
  n != null && (n.current = o);
}
function Vh(...n) {
  return (o) => {
    let u = !1;
    const s = n.map((c) => {
      const f = Sp(c, o);
      return !u && typeof f == "function" && (u = !0), f;
    });
    if (u)
      return () => {
        for (let c = 0; c < s.length; c++) {
          const f = s[c];
          typeof f == "function" ? f() : Sp(n[c], null);
        }
      };
  };
}
function sr(...n) {
  return O.useCallback(Vh(...n), n);
}
function d1(n, o) {
  const u = O.createContext(o), s = (f) => {
    const { children: h, ...m } = f, g = O.useMemo(() => m, Object.values(m));
    return /* @__PURE__ */ X.jsx(u.Provider, { value: g, children: h });
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
function p1(n, o = []) {
  let u = [];
  function s(f, h) {
    const m = O.createContext(h), g = u.length;
    u = [...u, h];
    const _ = (x) => {
      const { scope: k, children: T, ...L } = x, P = k?.[n]?.[g] || m, I = O.useMemo(() => L, Object.values(L));
      return /* @__PURE__ */ X.jsx(P.Provider, { value: I, children: T });
    };
    _.displayName = f + "Provider";
    function S(x, k) {
      const T = k?.[n]?.[g] || m, L = O.useContext(T);
      if (L) return L;
      if (h !== void 0) return h;
      throw new Error(`\`${x}\` must be used within \`${f}\``);
    }
    return [_, S];
  }
  const c = () => {
    const f = u.map((h) => O.createContext(h));
    return function(m) {
      const g = m?.[n] || f;
      return O.useMemo(
        () => ({ [`__scope${n}`]: { ...m, [n]: g } }),
        [m, g]
      );
    };
  };
  return c.scopeName = n, [s, h1(c, ...o)];
}
function h1(...n) {
  const o = n[0];
  if (n.length === 1) return o;
  const u = () => {
    const s = n.map((c) => ({
      useScope: c(),
      scopeName: c.scopeName
    }));
    return function(f) {
      const h = s.reduce((m, { useScope: g, scopeName: _ }) => {
        const x = g(f)[`__scope${_}`];
        return { ...m, ...x };
      }, {});
      return O.useMemo(() => ({ [`__scope${o.scopeName}`]: h }), [h]);
    };
  };
  return u.scopeName = o.scopeName, u;
}
var Qo = globalThis?.document ? O.useLayoutEffect : () => {
}, m1 = Lp[" useId ".trim().toString()] || (() => {
}), v1 = 0;
function oa(n) {
  const [o, u] = O.useState(m1());
  return Qo(() => {
    u((s) => s ?? String(v1++));
  }, [n]), n || (o ? `radix-${o}` : "");
}
var g1 = Lp[" useInsertionEffect ".trim().toString()] || Qo;
function y1({
  prop: n,
  defaultProp: o,
  onChange: u = () => {
  },
  caller: s
}) {
  const [c, f, h] = w1({
    defaultProp: o,
    onChange: u
  }), m = n !== void 0, g = m ? n : c;
  {
    const S = O.useRef(n !== void 0);
    O.useEffect(() => {
      const x = S.current;
      x !== m && console.warn(
        `${s} is changing from ${x ? "controlled" : "uncontrolled"} to ${m ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), S.current = m;
    }, [m, s]);
  }
  const _ = O.useCallback(
    (S) => {
      if (m) {
        const x = S1(S) ? S(n) : S;
        x !== n && h.current?.(x);
      } else
        f(S);
    },
    [m, n, f, h]
  );
  return [g, _];
}
function w1({
  defaultProp: n,
  onChange: o
}) {
  const [u, s] = O.useState(n), c = O.useRef(u), f = O.useRef(o);
  return g1(() => {
    f.current = o;
  }, [o]), O.useEffect(() => {
    c.current !== u && (f.current?.(u), c.current = u);
  }, [u, c]), [u, s, f];
}
function S1(n) {
  return typeof n == "function";
}
var Hh = Ip();
const E1 = /* @__PURE__ */ Da(Hh);
// @__NO_SIDE_EFFECTS__
function Qh(n) {
  const o = /* @__PURE__ */ k1(n), u = O.forwardRef((s, c) => {
    const { children: f, ...h } = s, m = O.Children.toArray(f), g = m.find(x1);
    if (g) {
      const _ = g.props.children, S = m.map((x) => x === g ? O.Children.count(_) > 1 ? O.Children.only(null) : O.isValidElement(_) ? _.props.children : null : x);
      return /* @__PURE__ */ X.jsx(o, { ...h, ref: c, children: O.isValidElement(_) ? O.cloneElement(_, void 0, S) : null });
    }
    return /* @__PURE__ */ X.jsx(o, { ...h, ref: c, children: f });
  });
  return u.displayName = `${n}.Slot`, u;
}
// @__NO_SIDE_EFFECTS__
function k1(n) {
  const o = O.forwardRef((u, s) => {
    const { children: c, ...f } = u;
    if (O.isValidElement(c)) {
      const h = _1(c), m = C1(f, c.props);
      return c.type !== O.Fragment && (m.ref = s ? Vh(s, h) : h), O.cloneElement(c, m);
    }
    return O.Children.count(c) > 1 ? O.Children.only(null) : null;
  });
  return o.displayName = `${n}.SlotClone`, o;
}
var Kh = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function PS(n) {
  const o = ({ children: u }) => /* @__PURE__ */ X.jsx(X.Fragment, { children: u });
  return o.displayName = `${n}.Slottable`, o.__radixId = Kh, o;
}
function x1(n) {
  return O.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === Kh;
}
function C1(n, o) {
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
function _1(n) {
  let o = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, u = o && "isReactWarning" in o && o.isReactWarning;
  return u ? n.ref : (o = Object.getOwnPropertyDescriptor(n, "ref")?.get, u = o && "isReactWarning" in o && o.isReactWarning, u ? n.props.ref : n.props.ref || n.ref);
}
var P1 = [
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
], dn = P1.reduce((n, o) => {
  const u = /* @__PURE__ */ Qh(`Primitive.${o}`), s = O.forwardRef((c, f) => {
    const { asChild: h, ...m } = c, g = h ? u : o;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ X.jsx(g, { ...m, ref: f });
  });
  return s.displayName = `Primitive.${o}`, { ...n, [o]: s };
}, {});
function R1(n, o) {
  n && Hh.flushSync(() => n.dispatchEvent(o));
}
function Ko(n) {
  const o = O.useRef(n);
  return O.useEffect(() => {
    o.current = n;
  }), O.useMemo(() => (...u) => o.current?.(...u), []);
}
function N1(n, o = globalThis?.document) {
  const u = Ko(n);
  O.useEffect(() => {
    const s = (c) => {
      c.key === "Escape" && u(c);
    };
    return o.addEventListener("keydown", s, { capture: !0 }), () => o.removeEventListener("keydown", s, { capture: !0 });
  }, [u, o]);
}
var O1 = "DismissableLayer", Oa = "dismissableLayer.update", T1 = "dismissableLayer.pointerDownOutside", D1 = "dismissableLayer.focusOutside", Ep, Gh = O.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Yh = O.forwardRef(
  (n, o) => {
    const {
      disableOutsidePointerEvents: u = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      onFocusOutside: f,
      onInteractOutside: h,
      onDismiss: m,
      ...g
    } = n, _ = O.useContext(Gh), [S, x] = O.useState(null), k = S?.ownerDocument ?? globalThis?.document, [, T] = O.useState({}), L = sr(o, (F) => x(F)), P = Array.from(_.layers), [I] = [..._.layersWithOutsidePointerEventsDisabled].slice(-1), M = P.indexOf(I), B = S ? P.indexOf(S) : -1, A = _.layersWithOutsidePointerEventsDisabled.size > 0, j = B >= M, W = I1((F) => {
      const ie = F.target, we = [..._.branches].some((Pe) => Pe.contains(ie));
      !j || we || (c?.(F), h?.(F), F.defaultPrevented || m?.());
    }, k), Q = M1((F) => {
      const ie = F.target;
      [..._.branches].some((Pe) => Pe.contains(ie)) || (f?.(F), h?.(F), F.defaultPrevented || m?.());
    }, k);
    return N1((F) => {
      B === _.layers.size - 1 && (s?.(F), !F.defaultPrevented && m && (F.preventDefault(), m()));
    }, k), O.useEffect(() => {
      if (S)
        return u && (_.layersWithOutsidePointerEventsDisabled.size === 0 && (Ep = k.body.style.pointerEvents, k.body.style.pointerEvents = "none"), _.layersWithOutsidePointerEventsDisabled.add(S)), _.layers.add(S), kp(), () => {
          u && _.layersWithOutsidePointerEventsDisabled.size === 1 && (k.body.style.pointerEvents = Ep);
        };
    }, [S, k, u, _]), O.useEffect(() => () => {
      S && (_.layers.delete(S), _.layersWithOutsidePointerEventsDisabled.delete(S), kp());
    }, [S, _]), O.useEffect(() => {
      const F = () => T({});
      return document.addEventListener(Oa, F), () => document.removeEventListener(Oa, F);
    }, []), /* @__PURE__ */ X.jsx(
      dn.div,
      {
        ...g,
        ref: L,
        style: {
          pointerEvents: A ? j ? "auto" : "none" : void 0,
          ...n.style
        },
        onFocusCapture: jn(n.onFocusCapture, Q.onFocusCapture),
        onBlurCapture: jn(n.onBlurCapture, Q.onBlurCapture),
        onPointerDownCapture: jn(
          n.onPointerDownCapture,
          W.onPointerDownCapture
        )
      }
    );
  }
);
Yh.displayName = O1;
var A1 = "DismissableLayerBranch", L1 = O.forwardRef((n, o) => {
  const u = O.useContext(Gh), s = O.useRef(null), c = sr(o, s);
  return O.useEffect(() => {
    const f = s.current;
    if (f)
      return u.branches.add(f), () => {
        u.branches.delete(f);
      };
  }, [u.branches]), /* @__PURE__ */ X.jsx(dn.div, { ...n, ref: c });
});
L1.displayName = A1;
function I1(n, o = globalThis?.document) {
  const u = Ko(n), s = O.useRef(!1), c = O.useRef(() => {
  });
  return O.useEffect(() => {
    const f = (m) => {
      if (m.target && !s.current) {
        let g = function() {
          Xh(
            T1,
            u,
            _,
            { discrete: !0 }
          );
        };
        const _ = { originalEvent: m };
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
function M1(n, o = globalThis?.document) {
  const u = Ko(n), s = O.useRef(!1);
  return O.useEffect(() => {
    const c = (f) => {
      f.target && !s.current && Xh(D1, u, { originalEvent: f }, {
        discrete: !1
      });
    };
    return o.addEventListener("focusin", c), () => o.removeEventListener("focusin", c);
  }, [o, u]), {
    onFocusCapture: () => s.current = !0,
    onBlurCapture: () => s.current = !1
  };
}
function kp() {
  const n = new CustomEvent(Oa);
  document.dispatchEvent(n);
}
function Xh(n, o, u, { discrete: s }) {
  const c = u.originalEvent.target, f = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: u });
  o && c.addEventListener(n, o, { once: !0 }), s ? R1(c, f) : c.dispatchEvent(f);
}
var ia = "focusScope.autoFocusOnMount", ua = "focusScope.autoFocusOnUnmount", xp = { bubbles: !1, cancelable: !0 }, j1 = "FocusScope", qh = O.forwardRef((n, o) => {
  const {
    loop: u = !1,
    trapped: s = !1,
    onMountAutoFocus: c,
    onUnmountAutoFocus: f,
    ...h
  } = n, [m, g] = O.useState(null), _ = Ko(c), S = Ko(f), x = O.useRef(null), k = sr(o, (P) => g(P)), T = O.useRef({
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
      let P = function(A) {
        if (T.paused || !m) return;
        const j = A.target;
        m.contains(j) ? x.current = j : Mn(x.current, { select: !0 });
      }, I = function(A) {
        if (T.paused || !m) return;
        const j = A.relatedTarget;
        j !== null && (m.contains(j) || Mn(x.current, { select: !0 }));
      }, M = function(A) {
        if (document.activeElement === document.body)
          for (const W of A)
            W.removedNodes.length > 0 && Mn(m);
      };
      document.addEventListener("focusin", P), document.addEventListener("focusout", I);
      const B = new MutationObserver(M);
      return m && B.observe(m, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", P), document.removeEventListener("focusout", I), B.disconnect();
      };
    }
  }, [s, m, T.paused]), O.useEffect(() => {
    if (m) {
      _p.add(T);
      const P = document.activeElement;
      if (!m.contains(P)) {
        const M = new CustomEvent(ia, xp);
        m.addEventListener(ia, _), m.dispatchEvent(M), M.defaultPrevented || (F1(W1(Zh(m)), { select: !0 }), document.activeElement === P && Mn(m));
      }
      return () => {
        m.removeEventListener(ia, _), setTimeout(() => {
          const M = new CustomEvent(ua, xp);
          m.addEventListener(ua, S), m.dispatchEvent(M), M.defaultPrevented || Mn(P ?? document.body, { select: !0 }), m.removeEventListener(ua, S), _p.remove(T);
        }, 0);
      };
    }
  }, [m, _, S, T]);
  const L = O.useCallback(
    (P) => {
      if (!u && !s || T.paused) return;
      const I = P.key === "Tab" && !P.altKey && !P.ctrlKey && !P.metaKey, M = document.activeElement;
      if (I && M) {
        const B = P.currentTarget, [A, j] = z1(B);
        A && j ? !P.shiftKey && M === j ? (P.preventDefault(), u && Mn(A, { select: !0 })) : P.shiftKey && M === A && (P.preventDefault(), u && Mn(j, { select: !0 })) : M === B && P.preventDefault();
      }
    },
    [u, s, T.paused]
  );
  return /* @__PURE__ */ X.jsx(dn.div, { tabIndex: -1, ...h, ref: k, onKeyDown: L });
});
qh.displayName = j1;
function F1(n, { select: o = !1 } = {}) {
  const u = document.activeElement;
  for (const s of n)
    if (Mn(s, { select: o }), document.activeElement !== u) return;
}
function z1(n) {
  const o = Zh(n), u = Cp(o, n), s = Cp(o.reverse(), n);
  return [u, s];
}
function Zh(n) {
  const o = [], u = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (s) => {
      const c = s.tagName === "INPUT" && s.type === "hidden";
      return s.disabled || s.hidden || c ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; u.nextNode(); ) o.push(u.currentNode);
  return o;
}
function Cp(n, o) {
  for (const u of n)
    if (!B1(u, { upTo: o })) return u;
}
function B1(n, { upTo: o }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (o !== void 0 && n === o) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
function $1(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function Mn(n, { select: o = !1 } = {}) {
  if (n && n.focus) {
    const u = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== u && $1(n) && o && n.select();
  }
}
var _p = U1();
function U1() {
  let n = [];
  return {
    add(o) {
      const u = n[0];
      o !== u && u?.pause(), n = Pp(n, o), n.unshift(o);
    },
    remove(o) {
      n = Pp(n, o), n[0]?.resume();
    }
  };
}
function Pp(n, o) {
  const u = [...n], s = u.indexOf(o);
  return s !== -1 && u.splice(s, 1), u;
}
function W1(n) {
  return n.filter((o) => o.tagName !== "A");
}
var b1 = "Portal", Jh = O.forwardRef((n, o) => {
  const { container: u, ...s } = n, [c, f] = O.useState(!1);
  Qo(() => f(!0), []);
  const h = u || c && globalThis?.document?.body;
  return h ? E1.createPortal(/* @__PURE__ */ X.jsx(dn.div, { ...s, ref: o }), h) : null;
});
Jh.displayName = b1;
function V1(n, o) {
  return O.useReducer((u, s) => o[u][s] ?? u, n);
}
var Yu = (n) => {
  const { present: o, children: u } = n, s = H1(o), c = typeof u == "function" ? u({ present: s.isPresent }) : O.Children.only(u), f = sr(s.ref, Q1(c));
  return typeof u == "function" || s.isPresent ? O.cloneElement(c, { ref: f }) : null;
};
Yu.displayName = "Presence";
function H1(n) {
  const [o, u] = O.useState(), s = O.useRef(null), c = O.useRef(n), f = O.useRef("none"), h = n ? "mounted" : "unmounted", [m, g] = V1(h, {
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
    const _ = vu(s.current);
    f.current = m === "mounted" ? _ : "none";
  }, [m]), Qo(() => {
    const _ = s.current, S = c.current;
    if (S !== n) {
      const k = f.current, T = vu(_);
      n ? g("MOUNT") : T === "none" || _?.display === "none" ? g("UNMOUNT") : g(S && k !== T ? "ANIMATION_OUT" : "UNMOUNT"), c.current = n;
    }
  }, [n, g]), Qo(() => {
    if (o) {
      let _;
      const S = o.ownerDocument.defaultView ?? window, x = (T) => {
        const P = vu(s.current).includes(CSS.escape(T.animationName));
        if (T.target === o && P && (g("ANIMATION_END"), !c.current)) {
          const I = o.style.animationFillMode;
          o.style.animationFillMode = "forwards", _ = S.setTimeout(() => {
            o.style.animationFillMode === "forwards" && (o.style.animationFillMode = I);
          });
        }
      }, k = (T) => {
        T.target === o && (f.current = vu(s.current));
      };
      return o.addEventListener("animationstart", k), o.addEventListener("animationcancel", x), o.addEventListener("animationend", x), () => {
        S.clearTimeout(_), o.removeEventListener("animationstart", k), o.removeEventListener("animationcancel", x), o.removeEventListener("animationend", x);
      };
    } else
      g("ANIMATION_END");
  }, [o, g]), {
    isPresent: ["mounted", "unmountSuspended"].includes(m),
    ref: O.useCallback((_) => {
      s.current = _ ? getComputedStyle(_) : null, u(_);
    }, [])
  };
}
function vu(n) {
  return n?.animationName || "none";
}
function Q1(n) {
  let o = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, u = o && "isReactWarning" in o && o.isReactWarning;
  return u ? n.ref : (o = Object.getOwnPropertyDescriptor(n, "ref")?.get, u = o && "isReactWarning" in o && o.isReactWarning, u ? n.props.ref : n.props.ref || n.ref);
}
var la = 0;
function K1() {
  O.useEffect(() => {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", n[0] ?? Rp()), document.body.insertAdjacentElement("beforeend", n[1] ?? Rp()), la++, () => {
      la === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o) => o.remove()), la--;
    };
  }, []);
}
function Rp() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
var Kt = function() {
  return Kt = Object.assign || function(o) {
    for (var u, s = 1, c = arguments.length; s < c; s++) {
      u = arguments[s];
      for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (o[f] = u[f]);
    }
    return o;
  }, Kt.apply(this, arguments);
};
function em(n, o) {
  var u = {};
  for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && o.indexOf(s) < 0 && (u[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, s = Object.getOwnPropertySymbols(n); c < s.length; c++)
      o.indexOf(s[c]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[c]) && (u[s[c]] = n[s[c]]);
  return u;
}
function G1(n, o, u) {
  if (u || arguments.length === 2) for (var s = 0, c = o.length, f; s < c; s++)
    (f || !(s in o)) && (f || (f = Array.prototype.slice.call(o, 0, s)), f[s] = o[s]);
  return n.concat(f || Array.prototype.slice.call(o));
}
var Pu = "right-scroll-bar-position", Ru = "width-before-scroll-bar", Y1 = "with-scroll-bars-hidden", X1 = "--removed-body-scroll-bar-size";
function sa(n, o) {
  return typeof n == "function" ? n(o) : n && (n.current = o), n;
}
function q1(n, o) {
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
var Z1 = typeof window < "u" ? O.useLayoutEffect : O.useEffect, Np = /* @__PURE__ */ new WeakMap();
function J1(n, o) {
  var u = q1(null, function(s) {
    return n.forEach(function(c) {
      return sa(c, s);
    });
  });
  return Z1(function() {
    var s = Np.get(u);
    if (s) {
      var c = new Set(s), f = new Set(n), h = u.current;
      c.forEach(function(m) {
        f.has(m) || sa(m, null);
      }), f.forEach(function(m) {
        c.has(m) || sa(m, h);
      });
    }
    Np.set(u, n);
  }, [n]), u;
}
function ew(n) {
  return n;
}
function tw(n, o) {
  o === void 0 && (o = ew);
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
        var S = h;
        h = [], S.forEach(f);
      }, _ = function() {
        return Promise.resolve().then(g);
      };
      _(), u = {
        push: function(S) {
          h.push(S), _();
        },
        filter: function(S) {
          return h = h.filter(S), u;
        }
      };
    }
  };
  return c;
}
function nw(n) {
  n === void 0 && (n = {});
  var o = tw(null);
  return o.options = Kt({ async: !0, ssr: !1 }, n), o;
}
var tm = function(n) {
  var o = n.sideCar, u = em(n, ["sideCar"]);
  if (!o)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var s = o.read();
  if (!s)
    throw new Error("Sidecar medium not found");
  return O.createElement(s, Kt({}, u));
};
tm.isSideCarExport = !0;
function rw(n, o) {
  return n.useMedium(o), tm;
}
var nm = nw(), aa = function() {
}, Xu = O.forwardRef(function(n, o) {
  var u = O.useRef(null), s = O.useState({
    onScrollCapture: aa,
    onWheelCapture: aa,
    onTouchMoveCapture: aa
  }), c = s[0], f = s[1], h = n.forwardProps, m = n.children, g = n.className, _ = n.removeScrollBar, S = n.enabled, x = n.shards, k = n.sideCar, T = n.noRelative, L = n.noIsolation, P = n.inert, I = n.allowPinchZoom, M = n.as, B = M === void 0 ? "div" : M, A = n.gapMode, j = em(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), W = k, Q = J1([u, o]), F = Kt(Kt({}, j), c);
  return O.createElement(
    O.Fragment,
    null,
    S && O.createElement(W, { sideCar: nm, removeScrollBar: _, shards: x, noRelative: T, noIsolation: L, inert: P, setCallbacks: f, allowPinchZoom: !!I, lockRef: u, gapMode: A }),
    h ? O.cloneElement(O.Children.only(m), Kt(Kt({}, F), { ref: Q })) : O.createElement(B, Kt({}, F, { className: g, ref: Q }), m)
  );
});
Xu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Xu.classNames = {
  fullWidth: Ru,
  zeroRight: Pu
};
var ow = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function iw() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var o = ow();
  return o && n.setAttribute("nonce", o), n;
}
function uw(n, o) {
  n.styleSheet ? n.styleSheet.cssText = o : n.appendChild(document.createTextNode(o));
}
function lw(n) {
  var o = document.head || document.getElementsByTagName("head")[0];
  o.appendChild(n);
}
var sw = function() {
  var n = 0, o = null;
  return {
    add: function(u) {
      n == 0 && (o = iw()) && (uw(o, u), lw(o)), n++;
    },
    remove: function() {
      n--, !n && o && (o.parentNode && o.parentNode.removeChild(o), o = null);
    }
  };
}, aw = function() {
  var n = sw();
  return function(o, u) {
    O.useEffect(function() {
      return n.add(o), function() {
        n.remove();
      };
    }, [o && u]);
  };
}, rm = function() {
  var n = aw(), o = function(u) {
    var s = u.styles, c = u.dynamic;
    return n(s, c), null;
  };
  return o;
}, cw = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ca = function(n) {
  return parseInt(n || "", 10) || 0;
}, fw = function(n) {
  var o = window.getComputedStyle(document.body), u = o[n === "padding" ? "paddingLeft" : "marginLeft"], s = o[n === "padding" ? "paddingTop" : "marginTop"], c = o[n === "padding" ? "paddingRight" : "marginRight"];
  return [ca(u), ca(s), ca(c)];
}, dw = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return cw;
  var o = fw(n), u = document.documentElement.clientWidth, s = window.innerWidth;
  return {
    left: o[0],
    top: o[1],
    right: o[2],
    gap: Math.max(0, s - u + o[2] - o[0])
  };
}, pw = rm(), $r = "data-scroll-locked", hw = function(n, o, u, s) {
  var c = n.left, f = n.top, h = n.right, m = n.gap;
  return u === void 0 && (u = "margin"), `
  .`.concat(Y1, ` {
   overflow: hidden `).concat(s, `;
   padding-right: `).concat(m, "px ").concat(s, `;
  }
  body[`).concat($r, `] {
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
  
  .`).concat(Ru, ` {
    margin-right: `).concat(m, "px ").concat(s, `;
  }
  
  .`).concat(Pu, " .").concat(Pu, ` {
    right: 0 `).concat(s, `;
  }
  
  .`).concat(Ru, " .").concat(Ru, ` {
    margin-right: 0 `).concat(s, `;
  }
  
  body[`).concat($r, `] {
    `).concat(X1, ": ").concat(m, `px;
  }
`);
}, Op = function() {
  var n = parseInt(document.body.getAttribute($r) || "0", 10);
  return isFinite(n) ? n : 0;
}, mw = function() {
  O.useEffect(function() {
    return document.body.setAttribute($r, (Op() + 1).toString()), function() {
      var n = Op() - 1;
      n <= 0 ? document.body.removeAttribute($r) : document.body.setAttribute($r, n.toString());
    };
  }, []);
}, vw = function(n) {
  var o = n.noRelative, u = n.noImportant, s = n.gapMode, c = s === void 0 ? "margin" : s;
  mw();
  var f = O.useMemo(function() {
    return dw(c);
  }, [c]);
  return O.createElement(pw, { styles: hw(f, !o, c, u ? "" : "!important") });
}, Ta = !1;
if (typeof window < "u")
  try {
    var gu = Object.defineProperty({}, "passive", {
      get: function() {
        return Ta = !0, !0;
      }
    });
    window.addEventListener("test", gu, gu), window.removeEventListener("test", gu, gu);
  } catch {
    Ta = !1;
  }
var Mr = Ta ? { passive: !1 } : !1, gw = function(n) {
  return n.tagName === "TEXTAREA";
}, om = function(n, o) {
  if (!(n instanceof Element))
    return !1;
  var u = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    u[o] !== "hidden" && // contains scroll inside self
    !(u.overflowY === u.overflowX && !gw(n) && u[o] === "visible")
  );
}, yw = function(n) {
  return om(n, "overflowY");
}, ww = function(n) {
  return om(n, "overflowX");
}, Tp = function(n, o) {
  var u = o.ownerDocument, s = o;
  do {
    typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
    var c = im(n, s);
    if (c) {
      var f = um(n, s), h = f[1], m = f[2];
      if (h > m)
        return !0;
    }
    s = s.parentNode;
  } while (s && s !== u.body);
  return !1;
}, Sw = function(n) {
  var o = n.scrollTop, u = n.scrollHeight, s = n.clientHeight;
  return [
    o,
    u,
    s
  ];
}, Ew = function(n) {
  var o = n.scrollLeft, u = n.scrollWidth, s = n.clientWidth;
  return [
    o,
    u,
    s
  ];
}, im = function(n, o) {
  return n === "v" ? yw(o) : ww(o);
}, um = function(n, o) {
  return n === "v" ? Sw(o) : Ew(o);
}, kw = function(n, o) {
  return n === "h" && o === "rtl" ? -1 : 1;
}, xw = function(n, o, u, s, c) {
  var f = kw(n, window.getComputedStyle(o).direction), h = f * s, m = u.target, g = o.contains(m), _ = !1, S = h > 0, x = 0, k = 0;
  do {
    if (!m)
      break;
    var T = um(n, m), L = T[0], P = T[1], I = T[2], M = P - I - f * L;
    (L || M) && im(n, m) && (x += M, k += L);
    var B = m.parentNode;
    m = B && B.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? B.host : B;
  } while (
    // portaled content
    !g && m !== document.body || // self content
    g && (o.contains(m) || o === m)
  );
  return (S && Math.abs(x) < 1 || !S && Math.abs(k) < 1) && (_ = !0), _;
}, yu = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, Dp = function(n) {
  return [n.deltaX, n.deltaY];
}, Ap = function(n) {
  return n && "current" in n ? n.current : n;
}, Cw = function(n, o) {
  return n[0] === o[0] && n[1] === o[1];
}, _w = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, Pw = 0, jr = [];
function Rw(n) {
  var o = O.useRef([]), u = O.useRef([0, 0]), s = O.useRef(), c = O.useState(Pw++)[0], f = O.useState(rm)[0], h = O.useRef(n);
  O.useEffect(function() {
    h.current = n;
  }, [n]), O.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(c));
      var P = G1([n.lockRef.current], (n.shards || []).map(Ap), !0).filter(Boolean);
      return P.forEach(function(I) {
        return I.classList.add("allow-interactivity-".concat(c));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(c)), P.forEach(function(I) {
          return I.classList.remove("allow-interactivity-".concat(c));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var m = O.useCallback(function(P, I) {
    if ("touches" in P && P.touches.length === 2 || P.type === "wheel" && P.ctrlKey)
      return !h.current.allowPinchZoom;
    var M = yu(P), B = u.current, A = "deltaX" in P ? P.deltaX : B[0] - M[0], j = "deltaY" in P ? P.deltaY : B[1] - M[1], W, Q = P.target, F = Math.abs(A) > Math.abs(j) ? "h" : "v";
    if ("touches" in P && F === "h" && Q.type === "range")
      return !1;
    var ie = Tp(F, Q);
    if (!ie)
      return !0;
    if (ie ? W = F : (W = F === "v" ? "h" : "v", ie = Tp(F, Q)), !ie)
      return !1;
    if (!s.current && "changedTouches" in P && (A || j) && (s.current = W), !W)
      return !0;
    var we = s.current || W;
    return xw(we, I, P, we === "h" ? A : j);
  }, []), g = O.useCallback(function(P) {
    var I = P;
    if (!(!jr.length || jr[jr.length - 1] !== f)) {
      var M = "deltaY" in I ? Dp(I) : yu(I), B = o.current.filter(function(W) {
        return W.name === I.type && (W.target === I.target || I.target === W.shadowParent) && Cw(W.delta, M);
      })[0];
      if (B && B.should) {
        I.cancelable && I.preventDefault();
        return;
      }
      if (!B) {
        var A = (h.current.shards || []).map(Ap).filter(Boolean).filter(function(W) {
          return W.contains(I.target);
        }), j = A.length > 0 ? m(I, A[0]) : !h.current.noIsolation;
        j && I.cancelable && I.preventDefault();
      }
    }
  }, []), _ = O.useCallback(function(P, I, M, B) {
    var A = { name: P, delta: I, target: M, should: B, shadowParent: Nw(M) };
    o.current.push(A), setTimeout(function() {
      o.current = o.current.filter(function(j) {
        return j !== A;
      });
    }, 1);
  }, []), S = O.useCallback(function(P) {
    u.current = yu(P), s.current = void 0;
  }, []), x = O.useCallback(function(P) {
    _(P.type, Dp(P), P.target, m(P, n.lockRef.current));
  }, []), k = O.useCallback(function(P) {
    _(P.type, yu(P), P.target, m(P, n.lockRef.current));
  }, []);
  O.useEffect(function() {
    return jr.push(f), n.setCallbacks({
      onScrollCapture: x,
      onWheelCapture: x,
      onTouchMoveCapture: k
    }), document.addEventListener("wheel", g, Mr), document.addEventListener("touchmove", g, Mr), document.addEventListener("touchstart", S, Mr), function() {
      jr = jr.filter(function(P) {
        return P !== f;
      }), document.removeEventListener("wheel", g, Mr), document.removeEventListener("touchmove", g, Mr), document.removeEventListener("touchstart", S, Mr);
    };
  }, []);
  var T = n.removeScrollBar, L = n.inert;
  return O.createElement(
    O.Fragment,
    null,
    L ? O.createElement(f, { styles: _w(c) }) : null,
    T ? O.createElement(vw, { noRelative: n.noRelative, gapMode: n.gapMode }) : null
  );
}
function Nw(n) {
  for (var o = null; n !== null; )
    n instanceof ShadowRoot && (o = n.host, n = n.host), n = n.parentNode;
  return o;
}
const Ow = rw(nm, Rw);
var lm = O.forwardRef(function(n, o) {
  return O.createElement(Xu, Kt({}, n, { ref: o, sideCar: Ow }));
});
lm.classNames = Xu.classNames;
var Tw = function(n) {
  if (typeof document > "u")
    return null;
  var o = Array.isArray(n) ? n[0] : n;
  return o.ownerDocument.body;
}, Fr = /* @__PURE__ */ new WeakMap(), wu = /* @__PURE__ */ new WeakMap(), Su = {}, fa = 0, sm = function(n) {
  return n && (n.host || sm(n.parentNode));
}, Dw = function(n, o) {
  return o.map(function(u) {
    if (n.contains(u))
      return u;
    var s = sm(u);
    return s && n.contains(s) ? s : (console.error("aria-hidden", u, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(u) {
    return !!u;
  });
}, Aw = function(n, o, u, s) {
  var c = Dw(o, Array.isArray(n) ? n : [n]);
  Su[u] || (Su[u] = /* @__PURE__ */ new WeakMap());
  var f = Su[u], h = [], m = /* @__PURE__ */ new Set(), g = new Set(c), _ = function(x) {
    !x || m.has(x) || (m.add(x), _(x.parentNode));
  };
  c.forEach(_);
  var S = function(x) {
    !x || g.has(x) || Array.prototype.forEach.call(x.children, function(k) {
      if (m.has(k))
        S(k);
      else
        try {
          var T = k.getAttribute(s), L = T !== null && T !== "false", P = (Fr.get(k) || 0) + 1, I = (f.get(k) || 0) + 1;
          Fr.set(k, P), f.set(k, I), h.push(k), P === 1 && L && wu.set(k, !0), I === 1 && k.setAttribute(u, "true"), L || k.setAttribute(s, "true");
        } catch (M) {
          console.error("aria-hidden: cannot operate on ", k, M);
        }
    });
  };
  return S(o), m.clear(), fa++, function() {
    h.forEach(function(x) {
      var k = Fr.get(x) - 1, T = f.get(x) - 1;
      Fr.set(x, k), f.set(x, T), k || (wu.has(x) || x.removeAttribute(s), wu.delete(x)), T || x.removeAttribute(u);
    }), fa--, fa || (Fr = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), wu = /* @__PURE__ */ new WeakMap(), Su = {});
  };
}, Lw = function(n, o, u) {
  u === void 0 && (u = "data-aria-hidden");
  var s = Array.from(Array.isArray(n) ? n : [n]), c = Tw(n);
  return c ? (s.push.apply(s, Array.from(c.querySelectorAll("[aria-live], script"))), Aw(s, c, u, "aria-hidden")) : function() {
    return null;
  };
}, qu = "Dialog", [am] = p1(qu), [Iw, zt] = am(qu), cm = (n) => {
  const {
    __scopeDialog: o,
    children: u,
    open: s,
    defaultOpen: c,
    onOpenChange: f,
    modal: h = !0
  } = n, m = O.useRef(null), g = O.useRef(null), [_, S] = y1({
    prop: s,
    defaultProp: c ?? !1,
    onChange: f,
    caller: qu
  });
  return /* @__PURE__ */ X.jsx(
    Iw,
    {
      scope: o,
      triggerRef: m,
      contentRef: g,
      contentId: oa(),
      titleId: oa(),
      descriptionId: oa(),
      open: _,
      onOpenChange: S,
      onOpenToggle: O.useCallback(() => S((x) => !x), [S]),
      modal: h,
      children: u
    }
  );
};
cm.displayName = qu;
var fm = "DialogTrigger", dm = O.forwardRef(
  (n, o) => {
    const { __scopeDialog: u, ...s } = n, c = zt(fm, u), f = sr(o, c.triggerRef);
    return /* @__PURE__ */ X.jsx(
      dn.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": c.open,
        "aria-controls": c.contentId,
        "data-state": Ga(c.open),
        ...s,
        ref: f,
        onClick: jn(n.onClick, c.onOpenToggle)
      }
    );
  }
);
dm.displayName = fm;
var Qa = "DialogPortal", [Mw, pm] = am(Qa, {
  forceMount: void 0
}), hm = (n) => {
  const { __scopeDialog: o, forceMount: u, children: s, container: c } = n, f = zt(Qa, o);
  return /* @__PURE__ */ X.jsx(Mw, { scope: o, forceMount: u, children: O.Children.map(s, (h) => /* @__PURE__ */ X.jsx(Yu, { present: u || f.open, children: /* @__PURE__ */ X.jsx(Jh, { asChild: !0, container: c, children: h }) })) });
};
hm.displayName = Qa;
var Fu = "DialogOverlay", mm = O.forwardRef(
  (n, o) => {
    const u = pm(Fu, n.__scopeDialog), { forceMount: s = u.forceMount, ...c } = n, f = zt(Fu, n.__scopeDialog);
    return f.modal ? /* @__PURE__ */ X.jsx(Yu, { present: s || f.open, children: /* @__PURE__ */ X.jsx(Fw, { ...c, ref: o }) }) : null;
  }
);
mm.displayName = Fu;
var jw = /* @__PURE__ */ Qh("DialogOverlay.RemoveScroll"), Fw = O.forwardRef(
  (n, o) => {
    const { __scopeDialog: u, ...s } = n, c = zt(Fu, u);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ X.jsx(lm, { as: jw, allowPinchZoom: !0, shards: [c.contentRef], children: /* @__PURE__ */ X.jsx(
        dn.div,
        {
          "data-state": Ga(c.open),
          ...s,
          ref: o,
          style: { pointerEvents: "auto", ...s.style }
        }
      ) })
    );
  }
), lr = "DialogContent", vm = O.forwardRef(
  (n, o) => {
    const u = pm(lr, n.__scopeDialog), { forceMount: s = u.forceMount, ...c } = n, f = zt(lr, n.__scopeDialog);
    return /* @__PURE__ */ X.jsx(Yu, { present: s || f.open, children: f.modal ? /* @__PURE__ */ X.jsx(zw, { ...c, ref: o }) : /* @__PURE__ */ X.jsx(Bw, { ...c, ref: o }) });
  }
);
vm.displayName = lr;
var zw = O.forwardRef(
  (n, o) => {
    const u = zt(lr, n.__scopeDialog), s = O.useRef(null), c = sr(o, u.contentRef, s);
    return O.useEffect(() => {
      const f = s.current;
      if (f) return Lw(f);
    }, []), /* @__PURE__ */ X.jsx(
      gm,
      {
        ...n,
        ref: c,
        trapFocus: u.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: jn(n.onCloseAutoFocus, (f) => {
          f.preventDefault(), u.triggerRef.current?.focus();
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
), Bw = O.forwardRef(
  (n, o) => {
    const u = zt(lr, n.__scopeDialog), s = O.useRef(!1), c = O.useRef(!1);
    return /* @__PURE__ */ X.jsx(
      gm,
      {
        ...n,
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (f) => {
          n.onCloseAutoFocus?.(f), f.defaultPrevented || (s.current || u.triggerRef.current?.focus(), f.preventDefault()), s.current = !1, c.current = !1;
        },
        onInteractOutside: (f) => {
          n.onInteractOutside?.(f), f.defaultPrevented || (s.current = !0, f.detail.originalEvent.type === "pointerdown" && (c.current = !0));
          const h = f.target;
          u.triggerRef.current?.contains(h) && f.preventDefault(), f.detail.originalEvent.type === "focusin" && c.current && f.preventDefault();
        }
      }
    );
  }
), gm = O.forwardRef(
  (n, o) => {
    const { __scopeDialog: u, trapFocus: s, onOpenAutoFocus: c, onCloseAutoFocus: f, ...h } = n, m = zt(lr, u), g = O.useRef(null), _ = sr(o, g);
    return K1(), /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
      /* @__PURE__ */ X.jsx(
        qh,
        {
          asChild: !0,
          loop: !0,
          trapped: s,
          onMountAutoFocus: c,
          onUnmountAutoFocus: f,
          children: /* @__PURE__ */ X.jsx(
            Yh,
            {
              role: "dialog",
              id: m.contentId,
              "aria-describedby": m.descriptionId,
              "aria-labelledby": m.titleId,
              "data-state": Ga(m.open),
              ...h,
              ref: _,
              onDismiss: () => m.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
        /* @__PURE__ */ X.jsx($w, { titleId: m.titleId }),
        /* @__PURE__ */ X.jsx(Ww, { contentRef: g, descriptionId: m.descriptionId })
      ] })
    ] });
  }
), Ka = "DialogTitle", ym = O.forwardRef(
  (n, o) => {
    const { __scopeDialog: u, ...s } = n, c = zt(Ka, u);
    return /* @__PURE__ */ X.jsx(dn.h2, { id: c.titleId, ...s, ref: o });
  }
);
ym.displayName = Ka;
var wm = "DialogDescription", Sm = O.forwardRef(
  (n, o) => {
    const { __scopeDialog: u, ...s } = n, c = zt(wm, u);
    return /* @__PURE__ */ X.jsx(dn.p, { id: c.descriptionId, ...s, ref: o });
  }
);
Sm.displayName = wm;
var Em = "DialogClose", km = O.forwardRef(
  (n, o) => {
    const { __scopeDialog: u, ...s } = n, c = zt(Em, u);
    return /* @__PURE__ */ X.jsx(
      dn.button,
      {
        type: "button",
        ...s,
        ref: o,
        onClick: jn(n.onClick, () => c.onOpenChange(!1))
      }
    );
  }
);
km.displayName = Em;
function Ga(n) {
  return n ? "open" : "closed";
}
var xm = "DialogTitleWarning", [RS, Cm] = d1(xm, {
  contentName: lr,
  titleName: Ka,
  docsSlug: "dialog"
}), $w = ({ titleId: n }) => {
  const o = Cm(xm), u = `\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;
  return O.useEffect(() => {
    n && (document.getElementById(n) || console.error(u));
  }, [u, n]), null;
}, Uw = "DialogDescriptionWarning", Ww = ({ contentRef: n, descriptionId: o }) => {
  const s = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Cm(Uw).contentName}}.`;
  return O.useEffect(() => {
    const c = n.current?.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(s));
  }, [s, n, o]), null;
}, bw = cm, NS = dm, Vw = hm, Hw = mm, Qw = vm, Kw = ym, Gw = Sm, OS = km;
const Yw = Ft.button`
  cursor: pointer;
  background-color: var(${Xe.buttonSecondaryBackground});
  color: var(${Xe.buttonSecondaryForeground});
  border: 1px solid var(${Xe.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    background-color: var(${Xe.buttonSecondaryHoverBackground});
  }
`, Xw = Ft.button`
  cursor: pointer;
  background-color: var(${Xe.buttonBackground});
  color: var(${Xe.buttonForeground});
  border: 1px solid var(${Xe.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${Xe.focusBorder});
  }
`, qw = {
  open: !1,
  title: "",
  message: "",
  actions: []
}, _m = za({
  name: "confirmationDialog",
  initialState: qw,
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
}), { requestConfirmation: TS, accept: Zw, reject: Jw } = _m.actions, eS = zp, tS = La, DS = _m.reducer;
function nS() {
  const n = eS(), o = () => n(Zw()), u = () => n(Jw()), { open: s, title: c, message: f } = tS((h) => h.confirmationDialog);
  return /* @__PURE__ */ X.jsx(bw, { open: s, children: /* @__PURE__ */ X.jsxs(Vw, { children: [
    /* @__PURE__ */ X.jsx(rS, {}),
    /* @__PURE__ */ X.jsxs(oS, { onEscapeKeyDown: u, children: [
      /* @__PURE__ */ X.jsx(Kw, { children: c }),
      /* @__PURE__ */ X.jsx(Gw, { children: f }),
      /* @__PURE__ */ X.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
        /* @__PURE__ */ X.jsx(Yw, { onClick: u, children: "Cancel" }),
        /* @__PURE__ */ X.jsx(Xw, { onClick: o, children: "Confirm" })
      ] })
    ] })
  ] }) });
}
const rS = Ft(Hw)`
  background-color: var(${Xe.computedTwo});
  position: fixed;
  inset: 0;
`, oS = Ft(Qw)`
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
function AS(n, o) {
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
function LS(n) {
  const o = Object.keys(n);
  for (const u of o)
    n[u] ? (console.log("starting listener for: ", u), n[u]()) : console.log("skipping listener for: ", u);
}
function Pm({ error: n }) {
  return /* @__PURE__ */ X.jsxs("div", { children: [
    /* @__PURE__ */ X.jsx("p", { children: "Unexpected error:" }),
    /* @__PURE__ */ X.jsx("pre", { children: n.message })
  ] });
}
function IS() {
  return /* @__PURE__ */ X.jsxs(Bh, { FallbackComponent: Pm, children: [
    /* @__PURE__ */ X.jsx($h, {}),
    /* @__PURE__ */ X.jsx(bh, {})
  ] });
}
function MS() {
  return /* @__PURE__ */ X.jsxs(Bh, { FallbackComponent: Pm, children: [
    /* @__PURE__ */ X.jsx($h, {}),
    /* @__PURE__ */ X.jsx(nS, {}),
    /* @__PURE__ */ X.jsx(iS, { children: /* @__PURE__ */ X.jsx(u1, {}) }),
    /* @__PURE__ */ X.jsx(uS, { children: /* @__PURE__ */ X.jsx(bh, {}) })
  ] });
}
const iS = Ft.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 35px;
`, uS = Ft.div`
  position: fixed;
  top: 35px;
  left: 0;
  right: 0;
  bottom: 0;
`, jS = (n) => /* @__PURE__ */ X.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ X.jsx("path", { d: "M506.3 417 293 53c-8.2-14-22.6-21-37-21s-28.8 7-37.9 21L4.9 417c-15.49 27.9 4.951 63 37.84 63h426.6c32.76 0 53.26-35 36.96-63M52.58 432 255.1 84.8 459.4 432zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44s14.11 31.44 31.48 31.44 31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1M232 184v96c0 13.3 10.8 24 24 24s24-10.75 24-24v-96c0-13.2-10.7-24-24-24s-24 10.8-24 24" }) });
export {
  Kt as $,
  dn as A,
  Xw as B,
  jn as C,
  bw as D,
  NS as E,
  Vw as F,
  Kw as G,
  Gw as H,
  OS as I,
  Yw as J,
  Qw as K,
  Hh as L,
  Zy as M,
  Zw as N,
  Hw as O,
  cS as P,
  lS as Q,
  Fn as R,
  jS as S,
  Xe as T,
  TS as U,
  Jy as V,
  MS as W,
  y1 as X,
  oa as Y,
  Yu as Z,
  sr as _,
  gS as a,
  IS as a0,
  Jh as a1,
  Lw as a2,
  K1 as a3,
  lm as a4,
  Qh as a5,
  qh as a6,
  Yh as a7,
  Vh as a8,
  R1 as a9,
  Zp as aa,
  St as ab,
  pS as ac,
  Qp as ad,
  yS as ae,
  vS as af,
  wy as ag,
  Sy as ah,
  mS as ai,
  qg as aj,
  Ia as ak,
  Yp as al,
  Jd as am,
  ya as an,
  yy as ao,
  Gt as ap,
  hS as aq,
  $p as ar,
  Ey as as,
  dS as at,
  fn as au,
  fS as av,
  Vg as aw,
  aS as ax,
  PS as ay,
  Qo as az,
  La as b,
  za as c,
  wS as d,
  Ft as e,
  O as f,
  sS as g,
  Uh as h,
  Yo as i,
  X as j,
  AS as k,
  SS as l,
  _S as m,
  $h as n,
  bh as o,
  ES as p,
  au as q,
  CS as r,
  LS as s,
  kS as t,
  zp as u,
  Da as v,
  cn as w,
  DS as x,
  Ko as y,
  p1 as z
};
