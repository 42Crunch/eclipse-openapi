function kh(e, t) {
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
var vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function H0(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
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
var rf = { exports: {} }, Ai = {}, of = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo = Symbol.for("react.element"), xh = Symbol.for("react.portal"), Eh = Symbol.for("react.fragment"), Ch = Symbol.for("react.strict_mode"), Ph = Symbol.for("react.profiler"), _h = Symbol.for("react.provider"), Oh = Symbol.for("react.context"), Ah = Symbol.for("react.forward_ref"), Nh = Symbol.for("react.suspense"), $h = Symbol.for("react.memo"), Th = Symbol.for("react.lazy"), ms = Symbol.iterator;
function jh(e) {
  return e === null || typeof e != "object" ? null : (e = ms && e[ms] || e["@@iterator"], typeof e == "function" ? e : null);
}
var lf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, uf = Object.assign, af = {};
function cr(e, t, n) {
  this.props = e, this.context = t, this.refs = af, this.updater = n || lf;
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
cr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sf() {
}
sf.prototype = cr.prototype;
function ra(e, t, n) {
  this.props = e, this.context = t, this.refs = af, this.updater = n || lf;
}
var oa = ra.prototype = new sf();
oa.constructor = ra;
uf(oa, cr.prototype);
oa.isPureReactComponent = !0;
var gs = Array.isArray, cf = Object.prototype.hasOwnProperty, ia = { current: null }, ff = { key: !0, ref: !0, __self: !0, __source: !0 };
function df(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      cf.call(t, r) && !ff.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: uo, type: e, key: i, ref: l, props: o, _owner: ia.current };
}
function Rh(e, t) {
  return { $$typeof: uo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function la(e) {
  return typeof e == "object" && e !== null && e.$$typeof === uo;
}
function zh(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ys = /\/+/g;
function ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? zh("" + e.key) : t.toString(36);
}
function Io(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null)
    l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case uo:
          case xh:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + ml(l, 0) : r, gs(o) ? (n = "", e != null && (n = e.replace(ys, "$&/") + "/"), Io(o, t, n, "", function(s) {
      return s;
    })) : o != null && (la(o) && (o = Rh(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(ys, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", gs(e))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + ml(i, u);
      l += Io(i, t, n, a, o);
    }
  else if (a = jh(e), typeof a == "function")
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      i = i.value, a = r + ml(i, u++), l += Io(i, t, n, a, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function go(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Io(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Lh(e) {
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
var Fe = { current: null }, Do = { transition: null }, Ih = { ReactCurrentDispatcher: Fe, ReactCurrentBatchConfig: Do, ReactCurrentOwner: ia };
K.Children = { map: go, forEach: function(e, t, n) {
  go(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return go(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return go(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!la(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
K.Component = cr;
K.Fragment = Eh;
K.Profiler = Ph;
K.PureComponent = ra;
K.StrictMode = Ch;
K.Suspense = Nh;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ih;
K.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = uf({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = ia.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (a in t)
      cf.call(t, a) && !ff.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
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
  return { $$typeof: uo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
K.createContext = function(e) {
  return e = { $$typeof: Oh, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: _h, _context: e }, e.Consumer = e;
};
K.createElement = df;
K.createFactory = function(e) {
  var t = df.bind(null, e);
  return t.type = e, t;
};
K.createRef = function() {
  return { current: null };
};
K.forwardRef = function(e) {
  return { $$typeof: Ah, render: e };
};
K.isValidElement = la;
K.lazy = function(e) {
  return { $$typeof: Th, _payload: { _status: -1, _result: e }, _init: Lh };
};
K.memo = function(e, t) {
  return { $$typeof: $h, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function(e) {
  var t = Do.transition;
  Do.transition = {};
  try {
    e();
  } finally {
    Do.transition = t;
  }
};
K.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
K.useCallback = function(e, t) {
  return Fe.current.useCallback(e, t);
};
K.useContext = function(e) {
  return Fe.current.useContext(e);
};
K.useDebugValue = function() {
};
K.useDeferredValue = function(e) {
  return Fe.current.useDeferredValue(e);
};
K.useEffect = function(e, t) {
  return Fe.current.useEffect(e, t);
};
K.useId = function() {
  return Fe.current.useId();
};
K.useImperativeHandle = function(e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function(e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function(e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
K.useMemo = function(e, t) {
  return Fe.current.useMemo(e, t);
};
K.useReducer = function(e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
K.useRef = function(e) {
  return Fe.current.useRef(e);
};
K.useState = function(e) {
  return Fe.current.useState(e);
};
K.useSyncExternalStore = function(e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function() {
  return Fe.current.useTransition();
};
K.version = "18.2.0";
of.exports = K;
var pe = of.exports;
const fr = /* @__PURE__ */ Oi(pe), W0 = /* @__PURE__ */ kh({
  __proto__: null,
  default: fr
}, [pe]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dh = pe, Mh = Symbol.for("react.element"), Fh = Symbol.for("react.fragment"), Bh = Object.prototype.hasOwnProperty, Uh = Dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, bh = { key: !0, ref: !0, __self: !0, __source: !0 };
function pf(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    Bh.call(t, r) && !bh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Mh, type: e, key: i, ref: l, props: o, _owner: Uh.current };
}
Ai.Fragment = Fh;
Ai.jsx = pf;
Ai.jsxs = pf;
rf.exports = Ai;
var ze = rf.exports, hf = { exports: {} }, Je = {}, vf = { exports: {} }, mf = {};
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
  function t(T, F) {
    var B = T.length;
    T.push(F);
    e:
      for (; 0 < B; ) {
        var k = B - 1 >>> 1, w = T[k];
        if (0 < o(w, F))
          T[k] = F, T[B] = w, B = k;
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
    var F = T[0], B = T.pop();
    if (B !== F) {
      T[0] = B;
      e:
        for (var k = 0, w = T.length, m = w >>> 1; k < m; ) {
          var C = 2 * (k + 1) - 1, A = T[C], x = C + 1, z = T[x];
          if (0 > o(A, B))
            x < w && 0 > o(z, A) ? (T[k] = z, T[x] = B, k = x) : (T[k] = A, T[C] = B, k = C);
          else if (x < w && 0 > o(z, B))
            T[k] = z, T[x] = B, k = x;
          else
            break e;
        }
    }
    return F;
  }
  function o(T, F) {
    var B = T.sortIndex - F.sortIndex;
    return B !== 0 ? B : T.id - F.id;
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
  var a = [], s = [], d = 1, v = null, p = 3, y = !1, g = !1, S = !1, _ = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(T) {
    for (var F = n(s); F !== null; ) {
      if (F.callback === null)
        r(s);
      else if (F.startTime <= T)
        r(s), F.sortIndex = F.expirationTime, t(a, F);
      else
        break;
      F = n(s);
    }
  }
  function E(T) {
    if (S = !1, h(T), !g)
      if (n(a) !== null)
        g = !0, tt(P);
      else {
        var F = n(s);
        F !== null && ye(E, F.startTime - T);
      }
  }
  function P(T, F) {
    g = !1, S && (S = !1, f(R), R = -1), y = !0;
    var B = p;
    try {
      for (h(F), v = n(a); v !== null && (!(v.expirationTime > F) || T && !ee()); ) {
        var k = v.callback;
        if (typeof k == "function") {
          v.callback = null, p = v.priorityLevel;
          var w = k(v.expirationTime <= F);
          F = e.unstable_now(), typeof w == "function" ? v.callback = w : v === n(a) && r(a), h(F);
        } else
          r(a);
        v = n(a);
      }
      if (v !== null)
        var m = !0;
      else {
        var C = n(s);
        C !== null && ye(E, C.startTime - F), m = !1;
      }
      return m;
    } finally {
      v = null, p = B, y = !1;
    }
  }
  var $ = !1, j = null, R = -1, U = 5, I = -1;
  function ee() {
    return !(e.unstable_now() - I < U);
  }
  function le() {
    if (j !== null) {
      var T = e.unstable_now();
      I = T;
      var F = !0;
      try {
        F = j(!0, T);
      } finally {
        F ? Se() : ($ = !1, j = null);
      }
    } else
      $ = !1;
  }
  var Se;
  if (typeof c == "function")
    Se = function() {
      c(le);
    };
  else if (typeof MessageChannel < "u") {
    var Ne = new MessageChannel(), ce = Ne.port2;
    Ne.port1.onmessage = le, Se = function() {
      ce.postMessage(null);
    };
  } else
    Se = function() {
      _(le, 0);
    };
  function tt(T) {
    j = T, $ || ($ = !0, Se());
  }
  function ye(T, F) {
    R = _(function() {
      T(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    g || y || (g = !0, tt(P));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(T) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = p;
    }
    var B = p;
    p = F;
    try {
      return T();
    } finally {
      p = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, F) {
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
    var B = p;
    p = T;
    try {
      return F();
    } finally {
      p = B;
    }
  }, e.unstable_scheduleCallback = function(T, F, B) {
    var k = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? k + B : k) : B = k, T) {
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
    return w = B + w, T = { id: d++, callback: F, priorityLevel: T, startTime: B, expirationTime: w, sortIndex: -1 }, B > k ? (T.sortIndex = B, t(s, T), n(a) === null && T === n(s) && (S ? (f(R), R = -1) : S = !0, ye(E, B - k))) : (T.sortIndex = w, t(a, T), g || y || (g = !0, tt(P))), T;
  }, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(T) {
    var F = p;
    return function() {
      var B = p;
      p = F;
      try {
        return T.apply(this, arguments);
      } finally {
        p = B;
      }
    };
  };
})(mf);
vf.exports = mf;
var Vh = vf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gf = pe, Xe = Vh;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var yf = /* @__PURE__ */ new Set(), Br = {};
function An(e, t) {
  er(e, t), er(e + "Capture", t);
}
function er(e, t) {
  for (Br[e] = t, e = 0; e < t.length; e++)
    yf.add(t[e]);
}
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jl = Object.prototype.hasOwnProperty, Hh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ws = {}, Ss = {};
function Wh(e) {
  return Jl.call(Ss, e) ? !0 : Jl.call(ws, e) ? !1 : Hh.test(e) ? Ss[e] = !0 : (ws[e] = !0, !1);
}
function Qh(e, t, n, r) {
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
function Kh(e, t, n, r) {
  if (t === null || typeof t > "u" || Qh(e, t, n, r))
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
function Be(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ae[e] = new Be(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ae[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ae[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ae[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ae[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ae[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ae[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ae[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ae[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ua = /[\-:]([a-z])/g;
function aa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ua,
    aa
  );
  Ae[t] = new Be(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ua, aa);
  Ae[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ua, aa);
  Ae[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ae[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new Be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ae[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function sa(e, t, n, r) {
  var o = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Kh(t, n, o, r) && (n = null), r || o === null ? Wh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, yo = Symbol.for("react.element"), Tn = Symbol.for("react.portal"), jn = Symbol.for("react.fragment"), ca = Symbol.for("react.strict_mode"), ql = Symbol.for("react.profiler"), wf = Symbol.for("react.provider"), Sf = Symbol.for("react.context"), fa = Symbol.for("react.forward_ref"), eu = Symbol.for("react.suspense"), tu = Symbol.for("react.suspense_list"), da = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), kf = Symbol.for("react.offscreen"), ks = Symbol.iterator;
function mr(e) {
  return e === null || typeof e != "object" ? null : (e = ks && e[ks] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ve = Object.assign, gl;
function Cr(e) {
  if (gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      gl = t && t[1] || "";
    }
  return `
` + gl + e;
}
var yl = !1;
function wl(e, t) {
  if (!e || yl)
    return "";
  yl = !0;
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
`), i = r.stack.split(`
`), l = o.length - 1, u = i.length - 1; 1 <= l && 0 <= u && o[l] !== i[u]; )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (o[l] !== i[u]) {
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
    yl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Cr(e) : "";
}
function Yh(e) {
  switch (e.tag) {
    case 5:
      return Cr(e.type);
    case 16:
      return Cr("Lazy");
    case 13:
      return Cr("Suspense");
    case 19:
      return Cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = wl(e.type, !1), e;
    case 11:
      return e = wl(e.type.render, !1), e;
    case 1:
      return e = wl(e.type, !0), e;
    default:
      return "";
  }
}
function nu(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case jn:
      return "Fragment";
    case Tn:
      return "Portal";
    case ql:
      return "Profiler";
    case ca:
      return "StrictMode";
    case eu:
      return "Suspense";
    case tu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Sf:
        return (e.displayName || "Context") + ".Consumer";
      case wf:
        return (e._context.displayName || "Context") + ".Provider";
      case fa:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case da:
        return t = e.displayName || null, t !== null ? t : nu(e.type) || "Memo";
      case bt:
        t = e._payload, e = e._init;
        try {
          return nu(e(t));
        } catch {
        }
    }
  return null;
}
function Gh(e) {
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
      return nu(t);
    case 8:
      return t === ca ? "StrictMode" : "Mode";
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
function xf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Xh(e) {
  var t = xf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function wo(e) {
  e._valueTracker || (e._valueTracker = Xh(e));
}
function Ef(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = xf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Go(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ru(e, t) {
  var n = t.checked;
  return ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function xs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ln(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Cf(e, t) {
  t = t.checked, t != null && sa(e, "checked", t, !1);
}
function ou(e, t) {
  Cf(e, t);
  var n = ln(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? iu(e, t.type, n) : t.hasOwnProperty("defaultValue") && iu(e, t.type, ln(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Es(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function iu(e, t, n) {
  (t !== "number" || Go(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pr = Array.isArray;
function Hn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
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
function lu(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(N(91));
  return ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Cs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(N(92));
      if (Pr(n)) {
        if (1 < n.length)
          throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ln(n) };
}
function Pf(e, t) {
  var n = ln(t.value), r = ln(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ps(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _f(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function uu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? _f(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var So, Of = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (So = So || document.createElement("div"), So.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = So.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Ur(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nr = {
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
}, Zh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nr).forEach(function(e) {
  Zh.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Nr[t] = Nr[e];
  });
});
function Af(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nr.hasOwnProperty(e) && Nr[e] ? ("" + t).trim() : t + "px";
}
function Nf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Af(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var Jh = ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function au(e, t) {
  if (t) {
    if (Jh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(N(62));
  }
}
function su(e, t) {
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
var cu = null;
function pa(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var fu = null, Wn = null, Qn = null;
function _s(e) {
  if (e = co(e)) {
    if (typeof fu != "function")
      throw Error(N(280));
    var t = e.stateNode;
    t && (t = Ri(t), fu(e.stateNode, e.type, t));
  }
}
function $f(e) {
  Wn ? Qn ? Qn.push(e) : Qn = [e] : Wn = e;
}
function Tf() {
  if (Wn) {
    var e = Wn, t = Qn;
    if (Qn = Wn = null, _s(e), t)
      for (e = 0; e < t.length; e++)
        _s(t[e]);
  }
}
function jf(e, t) {
  return e(t);
}
function Rf() {
}
var Sl = !1;
function zf(e, t, n) {
  if (Sl)
    return e(t, n);
  Sl = !0;
  try {
    return jf(e, t, n);
  } finally {
    Sl = !1, (Wn !== null || Qn !== null) && (Rf(), Tf());
  }
}
function br(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Ri(n);
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
    throw Error(N(231, t, typeof n));
  return n;
}
var du = !1;
if (zt)
  try {
    var gr = {};
    Object.defineProperty(gr, "passive", { get: function() {
      du = !0;
    } }), window.addEventListener("test", gr, gr), window.removeEventListener("test", gr, gr);
  } catch {
    du = !1;
  }
function qh(e, t, n, r, o, i, l, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (d) {
    this.onError(d);
  }
}
var $r = !1, Xo = null, Zo = !1, pu = null, ev = { onError: function(e) {
  $r = !0, Xo = e;
} };
function tv(e, t, n, r, o, i, l, u, a) {
  $r = !1, Xo = null, qh.apply(ev, arguments);
}
function nv(e, t, n, r, o, i, l, u, a) {
  if (tv.apply(this, arguments), $r) {
    if ($r) {
      var s = Xo;
      $r = !1, Xo = null;
    } else
      throw Error(N(198));
    Zo || (Zo = !0, pu = s);
  }
}
function Nn(e) {
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
function Lf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Os(e) {
  if (Nn(e) !== e)
    throw Error(N(188));
}
function rv(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Nn(e), t === null)
      throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
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
        if (i === n)
          return Os(o), e;
        if (i === r)
          return Os(o), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
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
        if (!l)
          throw Error(N(189));
      }
    }
    if (n.alternate !== r)
      throw Error(N(190));
  }
  if (n.tag !== 3)
    throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function If(e) {
  return e = rv(e), e !== null ? Df(e) : null;
}
function Df(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Df(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Mf = Xe.unstable_scheduleCallback, As = Xe.unstable_cancelCallback, ov = Xe.unstable_shouldYield, iv = Xe.unstable_requestPaint, ge = Xe.unstable_now, lv = Xe.unstable_getCurrentPriorityLevel, ha = Xe.unstable_ImmediatePriority, Ff = Xe.unstable_UserBlockingPriority, Jo = Xe.unstable_NormalPriority, uv = Xe.unstable_LowPriority, Bf = Xe.unstable_IdlePriority, Ni = null, xt = null;
function av(e) {
  if (xt && typeof xt.onCommitFiberRoot == "function")
    try {
      xt.onCommitFiberRoot(Ni, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var mt = Math.clz32 ? Math.clz32 : fv, sv = Math.log, cv = Math.LN2;
function fv(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (sv(e) / cv | 0) | 0;
}
var ko = 64, xo = 4194304;
function _r(e) {
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
function qo(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? r = _r(u) : (i &= l, i !== 0 && (r = _r(i)));
  } else
    l = n & ~o, l !== 0 ? r = _r(l) : i !== 0 && (r = _r(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - mt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function dv(e, t) {
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
function pv(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - mt(i), u = 1 << l, a = o[l];
    a === -1 ? (!(u & n) || u & r) && (o[l] = dv(u, t)) : a <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function hu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Uf() {
  var e = ko;
  return ko <<= 1, !(ko & 4194240) && (ko = 64), e;
}
function kl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function ao(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - mt(t), e[t] = n;
}
function hv(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - mt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function va(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Z = 0;
function bf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Vf, ma, Hf, Wf, Qf, vu = !1, Eo = [], Gt = null, Xt = null, Zt = null, Vr = /* @__PURE__ */ new Map(), Hr = /* @__PURE__ */ new Map(), Ht = [], vv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ns(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gt = null;
      break;
    case "dragenter":
    case "dragleave":
      Xt = null;
      break;
    case "mouseover":
    case "mouseout":
      Zt = null;
      break;
    case "pointerover":
    case "pointerout":
      Vr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hr.delete(t.pointerId);
  }
}
function yr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = co(t), t !== null && ma(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function mv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Gt = yr(Gt, e, t, n, r, o), !0;
    case "dragenter":
      return Xt = yr(Xt, e, t, n, r, o), !0;
    case "mouseover":
      return Zt = yr(Zt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Vr.set(i, yr(Vr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Hr.set(i, yr(Hr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Kf(e) {
  var t = mn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Lf(n), t !== null) {
          e.blockedOn = t, Qf(e.priority, function() {
            Hf(n);
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
function Mo(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = mu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      cu = r, n.target.dispatchEvent(r), cu = null;
    } else
      return t = co(n), t !== null && ma(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function $s(e, t, n) {
  Mo(e) && n.delete(t);
}
function gv() {
  vu = !1, Gt !== null && Mo(Gt) && (Gt = null), Xt !== null && Mo(Xt) && (Xt = null), Zt !== null && Mo(Zt) && (Zt = null), Vr.forEach($s), Hr.forEach($s);
}
function wr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vu || (vu = !0, Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, gv)));
}
function Wr(e) {
  function t(o) {
    return wr(o, e);
  }
  if (0 < Eo.length) {
    wr(Eo[0], e);
    for (var n = 1; n < Eo.length; n++) {
      var r = Eo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Gt !== null && wr(Gt, e), Xt !== null && wr(Xt, e), Zt !== null && wr(Zt, e), Vr.forEach(t), Hr.forEach(t), n = 0; n < Ht.length; n++)
    r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && (n = Ht[0], n.blockedOn === null); )
    Kf(n), n.blockedOn === null && Ht.shift();
}
var Kn = Ft.ReactCurrentBatchConfig, ei = !0;
function yv(e, t, n, r) {
  var o = Z, i = Kn.transition;
  Kn.transition = null;
  try {
    Z = 1, ga(e, t, n, r);
  } finally {
    Z = o, Kn.transition = i;
  }
}
function wv(e, t, n, r) {
  var o = Z, i = Kn.transition;
  Kn.transition = null;
  try {
    Z = 4, ga(e, t, n, r);
  } finally {
    Z = o, Kn.transition = i;
  }
}
function ga(e, t, n, r) {
  if (ei) {
    var o = mu(e, t, n, r);
    if (o === null)
      Tl(e, t, r, ti, n), Ns(e, r);
    else if (mv(o, e, t, n, r))
      r.stopPropagation();
    else if (Ns(e, r), t & 4 && -1 < vv.indexOf(e)) {
      for (; o !== null; ) {
        var i = co(o);
        if (i !== null && Vf(i), i = mu(e, t, n, r), i === null && Tl(e, t, r, ti, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Tl(e, t, r, null, n);
  }
}
var ti = null;
function mu(e, t, n, r) {
  if (ti = null, e = pa(r), e = mn(e), e !== null)
    if (t = Nn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Lf(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return ti = e, null;
}
function Yf(e) {
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
      switch (lv()) {
        case ha:
          return 1;
        case Ff:
          return 4;
        case Jo:
        case uv:
          return 16;
        case Bf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kt = null, ya = null, Fo = null;
function Gf() {
  if (Fo)
    return Fo;
  var e, t = ya, n = t.length, r, o = "value" in Kt ? Kt.value : Kt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return Fo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Bo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Co() {
  return !0;
}
function Ts() {
  return !1;
}
function qe(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Co : Ts, this.isPropagationStopped = Ts, this;
  }
  return ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Co);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Co);
  }, persist: function() {
  }, isPersistent: Co }), t;
}
var dr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, wa = qe(dr), so = ve({}, dr, { view: 0, detail: 0 }), Sv = qe(so), xl, El, Sr, $i = ve({}, so, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Sa, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (xl = e.screenX - Sr.screenX, El = e.screenY - Sr.screenY) : El = xl = 0, Sr = e), xl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : El;
} }), js = qe($i), kv = ve({}, $i, { dataTransfer: 0 }), xv = qe(kv), Ev = ve({}, so, { relatedTarget: 0 }), Cl = qe(Ev), Cv = ve({}, dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Pv = qe(Cv), _v = ve({}, dr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ov = qe(_v), Av = ve({}, dr, { data: 0 }), Rs = qe(Av), Nv = {
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
}, $v = {
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
}, Tv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function jv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tv[e]) ? !!t[e] : !1;
}
function Sa() {
  return jv;
}
var Rv = ve({}, so, { key: function(e) {
  if (e.key) {
    var t = Nv[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Bo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $v[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Sa, charCode: function(e) {
  return e.type === "keypress" ? Bo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Bo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), zv = qe(Rv), Lv = ve({}, $i, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zs = qe(Lv), Iv = ve({}, so, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Sa }), Dv = qe(Iv), Mv = ve({}, dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Fv = qe(Mv), Bv = ve({}, $i, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Uv = qe(Bv), bv = [9, 13, 27, 32], ka = zt && "CompositionEvent" in window, Tr = null;
zt && "documentMode" in document && (Tr = document.documentMode);
var Vv = zt && "TextEvent" in window && !Tr, Xf = zt && (!ka || Tr && 8 < Tr && 11 >= Tr), Ls = " ", Is = !1;
function Zf(e, t) {
  switch (e) {
    case "keyup":
      return bv.indexOf(t.keyCode) !== -1;
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
function Jf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Rn = !1;
function Hv(e, t) {
  switch (e) {
    case "compositionend":
      return Jf(t);
    case "keypress":
      return t.which !== 32 ? null : (Is = !0, Ls);
    case "textInput":
      return e = t.data, e === Ls && Is ? null : e;
    default:
      return null;
  }
}
function Wv(e, t) {
  if (Rn)
    return e === "compositionend" || !ka && Zf(e, t) ? (e = Gf(), Fo = ya = Kt = null, Rn = !1, e) : null;
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
      return Xf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qv[e.type] : t === "textarea";
}
function qf(e, t, n, r) {
  $f(r), t = ni(t, "onChange"), 0 < t.length && (n = new wa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var jr = null, Qr = null;
function Kv(e) {
  cd(e, 0);
}
function Ti(e) {
  var t = In(e);
  if (Ef(t))
    return e;
}
function Yv(e, t) {
  if (e === "change")
    return t;
}
var ed = !1;
if (zt) {
  var Pl;
  if (zt) {
    var _l = "oninput" in document;
    if (!_l) {
      var Ms = document.createElement("div");
      Ms.setAttribute("oninput", "return;"), _l = typeof Ms.oninput == "function";
    }
    Pl = _l;
  } else
    Pl = !1;
  ed = Pl && (!document.documentMode || 9 < document.documentMode);
}
function Fs() {
  jr && (jr.detachEvent("onpropertychange", td), Qr = jr = null);
}
function td(e) {
  if (e.propertyName === "value" && Ti(Qr)) {
    var t = [];
    qf(t, Qr, e, pa(e)), zf(Kv, t);
  }
}
function Gv(e, t, n) {
  e === "focusin" ? (Fs(), jr = t, Qr = n, jr.attachEvent("onpropertychange", td)) : e === "focusout" && Fs();
}
function Xv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ti(Qr);
}
function Zv(e, t) {
  if (e === "click")
    return Ti(t);
}
function Jv(e, t) {
  if (e === "input" || e === "change")
    return Ti(t);
}
function qv(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var yt = typeof Object.is == "function" ? Object.is : qv;
function Kr(e, t) {
  if (yt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Jl.call(t, o) || !yt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Bs(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Us(e, t) {
  var n = Bs(e);
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
    n = Bs(n);
  }
}
function nd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function rd() {
  for (var e = window, t = Go(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Go(e.document);
  }
  return t;
}
function xa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function em(e) {
  var t = rd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && nd(n.ownerDocument.documentElement, n)) {
    if (r !== null && xa(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Us(n, i);
        var l = Us(
          n,
          r
        );
        o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var tm = zt && "documentMode" in document && 11 >= document.documentMode, zn = null, gu = null, Rr = null, yu = !1;
function bs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yu || zn == null || zn !== Go(r) || (r = zn, "selectionStart" in r && xa(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Rr && Kr(Rr, r) || (Rr = r, r = ni(gu, "onSelect"), 0 < r.length && (t = new wa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = zn)));
}
function Po(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ln = { animationend: Po("Animation", "AnimationEnd"), animationiteration: Po("Animation", "AnimationIteration"), animationstart: Po("Animation", "AnimationStart"), transitionend: Po("Transition", "TransitionEnd") }, Ol = {}, od = {};
zt && (od = document.createElement("div").style, "AnimationEvent" in window || (delete Ln.animationend.animation, delete Ln.animationiteration.animation, delete Ln.animationstart.animation), "TransitionEvent" in window || delete Ln.transitionend.transition);
function ji(e) {
  if (Ol[e])
    return Ol[e];
  if (!Ln[e])
    return e;
  var t = Ln[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in od)
      return Ol[e] = t[n];
  return e;
}
var id = ji("animationend"), ld = ji("animationiteration"), ud = ji("animationstart"), ad = ji("transitionend"), sd = /* @__PURE__ */ new Map(), Vs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cn(e, t) {
  sd.set(e, t), An(t, [e]);
}
for (var Al = 0; Al < Vs.length; Al++) {
  var Nl = Vs[Al], nm = Nl.toLowerCase(), rm = Nl[0].toUpperCase() + Nl.slice(1);
  cn(nm, "on" + rm);
}
cn(id, "onAnimationEnd");
cn(ld, "onAnimationIteration");
cn(ud, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(ad, "onTransitionEnd");
er("onMouseEnter", ["mouseout", "mouseover"]);
er("onMouseLeave", ["mouseout", "mouseover"]);
er("onPointerEnter", ["pointerout", "pointerover"]);
er("onPointerLeave", ["pointerout", "pointerover"]);
An("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
An("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
An("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
An("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
An("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
An("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), om = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));
function Hs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, nv(r, t, void 0, e), e.currentTarget = null;
}
function cd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l], a = u.instance, s = u.currentTarget;
          if (u = u.listener, a !== i && o.isPropagationStopped())
            break e;
          Hs(o, u, s), i = a;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (u = r[l], a = u.instance, s = u.currentTarget, u = u.listener, a !== i && o.isPropagationStopped())
            break e;
          Hs(o, u, s), i = a;
        }
    }
  }
  if (Zo)
    throw e = pu, Zo = !1, pu = null, e;
}
function oe(e, t) {
  var n = t[Eu];
  n === void 0 && (n = t[Eu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (fd(t, e, 2, !1), n.add(r));
}
function $l(e, t, n) {
  var r = 0;
  t && (r |= 4), fd(n, e, r, t);
}
var _o = "_reactListening" + Math.random().toString(36).slice(2);
function Yr(e) {
  if (!e[_o]) {
    e[_o] = !0, yf.forEach(function(n) {
      n !== "selectionchange" && (om.has(n) || $l(n, !1, e), $l(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_o] || (t[_o] = !0, $l("selectionchange", !1, t));
  }
}
function fd(e, t, n, r) {
  switch (Yf(t)) {
    case 1:
      var o = yv;
      break;
    case 4:
      o = wv;
      break;
    default:
      o = ga;
  }
  n = o.bind(null, t, n, e), o = void 0, !du || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Tl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var l = r.tag;
        if (l === 3 || l === 4) {
          var u = r.stateNode.containerInfo;
          if (u === o || u.nodeType === 8 && u.parentNode === o)
            break;
          if (l === 4)
            for (l = r.return; l !== null; ) {
              var a = l.tag;
              if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o))
                return;
              l = l.return;
            }
          for (; u !== null; ) {
            if (l = mn(u), l === null)
              return;
            if (a = l.tag, a === 5 || a === 6) {
              r = i = l;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  zf(function() {
    var s = i, d = pa(n), v = [];
    e: {
      var p = sd.get(e);
      if (p !== void 0) {
        var y = wa, g = e;
        switch (e) {
          case "keypress":
            if (Bo(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = zv;
            break;
          case "focusin":
            g = "focus", y = Cl;
            break;
          case "focusout":
            g = "blur", y = Cl;
            break;
          case "beforeblur":
          case "afterblur":
            y = Cl;
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
            y = js;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = xv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Dv;
            break;
          case id:
          case ld:
          case ud:
            y = Pv;
            break;
          case ad:
            y = Fv;
            break;
          case "scroll":
            y = Sv;
            break;
          case "wheel":
            y = Uv;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Ov;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = zs;
        }
        var S = (t & 4) !== 0, _ = !S && e === "scroll", f = S ? p !== null ? p + "Capture" : null : p;
        S = [];
        for (var c = s, h; c !== null; ) {
          h = c;
          var E = h.stateNode;
          if (h.tag === 5 && E !== null && (h = E, f !== null && (E = br(c, f), E != null && S.push(Gr(c, E, h)))), _)
            break;
          c = c.return;
        }
        0 < S.length && (p = new y(p, g, null, n, d), v.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", p && n !== cu && (g = n.relatedTarget || n.fromElement) && (mn(g) || g[Lt]))
          break e;
        if ((y || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = s, g = g ? mn(g) : null, g !== null && (_ = Nn(g), g !== _ || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = s), y !== g)) {
          if (S = js, E = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (S = zs, E = "onPointerLeave", f = "onPointerEnter", c = "pointer"), _ = y == null ? p : In(y), h = g == null ? p : In(g), p = new S(E, c + "leave", y, n, d), p.target = _, p.relatedTarget = h, E = null, mn(d) === s && (S = new S(f, c + "enter", g, n, d), S.target = h, S.relatedTarget = _, E = S), _ = E, y && g)
            t: {
              for (S = y, f = g, c = 0, h = S; h; h = $n(h))
                c++;
              for (h = 0, E = f; E; E = $n(E))
                h++;
              for (; 0 < c - h; )
                S = $n(S), c--;
              for (; 0 < h - c; )
                f = $n(f), h--;
              for (; c--; ) {
                if (S === f || f !== null && S === f.alternate)
                  break t;
                S = $n(S), f = $n(f);
              }
              S = null;
            }
          else
            S = null;
          y !== null && Ws(v, p, y, S, !1), g !== null && _ !== null && Ws(v, _, g, S, !0);
        }
      }
      e: {
        if (p = s ? In(s) : window, y = p.nodeName && p.nodeName.toLowerCase(), y === "select" || y === "input" && p.type === "file")
          var P = Yv;
        else if (Ds(p))
          if (ed)
            P = Jv;
          else {
            P = Xv;
            var $ = Gv;
          }
        else
          (y = p.nodeName) && y.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (P = Zv);
        if (P && (P = P(e, s))) {
          qf(v, P, n, d);
          break e;
        }
        $ && $(e, p, s), e === "focusout" && ($ = p._wrapperState) && $.controlled && p.type === "number" && iu(p, "number", p.value);
      }
      switch ($ = s ? In(s) : window, e) {
        case "focusin":
          (Ds($) || $.contentEditable === "true") && (zn = $, gu = s, Rr = null);
          break;
        case "focusout":
          Rr = gu = zn = null;
          break;
        case "mousedown":
          yu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          yu = !1, bs(v, n, d);
          break;
        case "selectionchange":
          if (tm)
            break;
        case "keydown":
        case "keyup":
          bs(v, n, d);
      }
      var j;
      if (ka)
        e: {
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
      else
        Rn ? Zf(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (Xf && n.locale !== "ko" && (Rn || R !== "onCompositionStart" ? R === "onCompositionEnd" && Rn && (j = Gf()) : (Kt = d, ya = "value" in Kt ? Kt.value : Kt.textContent, Rn = !0)), $ = ni(s, R), 0 < $.length && (R = new Rs(R, e, null, n, d), v.push({ event: R, listeners: $ }), j ? R.data = j : (j = Jf(n), j !== null && (R.data = j)))), (j = Vv ? Hv(e, n) : Wv(e, n)) && (s = ni(s, "onBeforeInput"), 0 < s.length && (d = new Rs("onBeforeInput", "beforeinput", null, n, d), v.push({ event: d, listeners: s }), d.data = j));
    }
    cd(v, t);
  });
}
function Gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ni(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = br(e, n), i != null && r.unshift(Gr(e, i, o)), i = br(e, t), i != null && r.push(Gr(e, i, o))), e = e.return;
  }
  return r;
}
function $n(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ws(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, s = u.stateNode;
    if (a !== null && a === r)
      break;
    u.tag === 5 && s !== null && (u = s, o ? (a = br(n, i), a != null && l.unshift(Gr(n, a, u))) : o || (a = br(n, i), a != null && l.push(Gr(n, a, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var im = /\r\n?/g, lm = /\u0000|\uFFFD/g;
function Qs(e) {
  return (typeof e == "string" ? e : "" + e).replace(im, `
`).replace(lm, "");
}
function Oo(e, t, n) {
  if (t = Qs(t), Qs(e) !== t && n)
    throw Error(N(425));
}
function ri() {
}
var wu = null, Su = null;
function ku(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var xu = typeof setTimeout == "function" ? setTimeout : void 0, um = typeof clearTimeout == "function" ? clearTimeout : void 0, Ks = typeof Promise == "function" ? Promise : void 0, am = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ks < "u" ? function(e) {
  return Ks.resolve(null).then(e).catch(sm);
} : xu;
function sm(e) {
  setTimeout(function() {
    throw e;
  });
}
function jl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Wr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Wr(t);
}
function Jt(e) {
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
function Ys(e) {
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
var pr = Math.random().toString(36).slice(2), kt = "__reactFiber$" + pr, Xr = "__reactProps$" + pr, Lt = "__reactContainer$" + pr, Eu = "__reactEvents$" + pr, cm = "__reactListeners$" + pr, fm = "__reactHandles$" + pr;
function mn(e) {
  var t = e[kt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Lt] || n[kt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Ys(e); e !== null; ) {
          if (n = e[kt])
            return n;
          e = Ys(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function co(e) {
  return e = e[kt] || e[Lt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function In(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(N(33));
}
function Ri(e) {
  return e[Xr] || null;
}
var Cu = [], Dn = -1;
function fn(e) {
  return { current: e };
}
function ie(e) {
  0 > Dn || (e.current = Cu[Dn], Cu[Dn] = null, Dn--);
}
function ne(e, t) {
  Dn++, Cu[Dn] = e.current, e.current = t;
}
var un = {}, Ie = fn(un), He = fn(!1), kn = un;
function tr(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function We(e) {
  return e = e.childContextTypes, e != null;
}
function oi() {
  ie(He), ie(Ie);
}
function Gs(e, t, n) {
  if (Ie.current !== un)
    throw Error(N(168));
  ne(Ie, t), ne(He, n);
}
function dd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(N(108, Gh(e) || "Unknown", o));
  return ve({}, n, r);
}
function ii(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, kn = Ie.current, ne(Ie, e), ne(He, He.current), !0;
}
function Xs(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(N(169));
  n ? (e = dd(e, t, kn), r.__reactInternalMemoizedMergedChildContext = e, ie(He), ie(Ie), ne(Ie, e)) : ie(He), ne(He, n);
}
var At = null, zi = !1, Rl = !1;
function pd(e) {
  At === null ? At = [e] : At.push(e);
}
function dm(e) {
  zi = !0, pd(e);
}
function dn() {
  if (!Rl && At !== null) {
    Rl = !0;
    var e = 0, t = Z;
    try {
      var n = At;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      At = null, zi = !1;
    } catch (o) {
      throw At !== null && (At = At.slice(e + 1)), Mf(ha, dn), o;
    } finally {
      Z = t, Rl = !1;
    }
  }
  return null;
}
var Mn = [], Fn = 0, li = null, ui = 0, rt = [], ot = 0, xn = null, Nt = 1, $t = "";
function pn(e, t) {
  Mn[Fn++] = ui, Mn[Fn++] = li, li = e, ui = t;
}
function hd(e, t, n) {
  rt[ot++] = Nt, rt[ot++] = $t, rt[ot++] = xn, xn = e;
  var r = Nt;
  e = $t;
  var o = 32 - mt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - mt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Nt = 1 << 32 - mt(t) + o | n << o | r, $t = i + e;
  } else
    Nt = 1 << i | n << o | r, $t = e;
}
function Ea(e) {
  e.return !== null && (pn(e, 1), hd(e, 1, 0));
}
function Ca(e) {
  for (; e === li; )
    li = Mn[--Fn], Mn[Fn] = null, ui = Mn[--Fn], Mn[Fn] = null;
  for (; e === xn; )
    xn = rt[--ot], rt[ot] = null, $t = rt[--ot], rt[ot] = null, Nt = rt[--ot], rt[ot] = null;
}
var Ge = null, Ye = null, se = !1, ht = null;
function vd(e, t) {
  var n = it(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Zs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ge = e, Ye = Jt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ge = e, Ye = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = xn !== null ? { id: Nt, overflow: $t } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = it(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ge = e, Ye = null, !0) : !1;
    default:
      return !1;
  }
}
function Pu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _u(e) {
  if (se) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!Zs(e, t)) {
        if (Pu(e))
          throw Error(N(418));
        t = Jt(n.nextSibling);
        var r = Ge;
        t && Zs(e, t) ? vd(r, n) : (e.flags = e.flags & -4097 | 2, se = !1, Ge = e);
      }
    } else {
      if (Pu(e))
        throw Error(N(418));
      e.flags = e.flags & -4097 | 2, se = !1, Ge = e;
    }
  }
}
function Js(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ge = e;
}
function Ao(e) {
  if (e !== Ge)
    return !1;
  if (!se)
    return Js(e), se = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ku(e.type, e.memoizedProps)), t && (t = Ye)) {
    if (Pu(e))
      throw md(), Error(N(418));
    for (; t; )
      vd(e, t), t = Jt(t.nextSibling);
  }
  if (Js(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = Jt(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else
    Ye = Ge ? Jt(e.stateNode.nextSibling) : null;
  return !0;
}
function md() {
  for (var e = Ye; e; )
    e = Jt(e.nextSibling);
}
function nr() {
  Ye = Ge = null, se = !1;
}
function Pa(e) {
  ht === null ? ht = [e] : ht.push(e);
}
var pm = Ft.ReactCurrentBatchConfig;
function dt(e, t) {
  if (e && e.defaultProps) {
    t = ve({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ai = fn(null), si = null, Bn = null, _a = null;
function Oa() {
  _a = Bn = si = null;
}
function Aa(e) {
  var t = ai.current;
  ie(ai), e._currentValue = t;
}
function Ou(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Yn(e, t) {
  si = e, _a = Bn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0), e.firstContext = null);
}
function ut(e) {
  var t = e._currentValue;
  if (_a !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Bn === null) {
      if (si === null)
        throw Error(N(308));
      Bn = e, si.dependencies = { lanes: 0, firstContext: e };
    } else
      Bn = Bn.next = e;
  return t;
}
var gn = null;
function Na(e) {
  gn === null ? gn = [e] : gn.push(e);
}
function gd(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Na(t)) : (n.next = o.next, o.next = n), t.interleaved = n, It(e, r);
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function $a(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function yd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function jt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, G & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, It(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Na(r)) : (t.next = o.next, o.next = t), r.interleaved = t, It(e, n);
}
function Uo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, va(e, n);
  }
}
function qs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ci(e, t, n, r) {
  var o = e.updateQueue;
  Vt = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var a = u, s = a.next;
    a.next = null, l === null ? i = s : l.next = s, l = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, u = d.lastBaseUpdate, u !== l && (u === null ? d.firstBaseUpdate = s : u.next = s, d.lastBaseUpdate = a));
  }
  if (i !== null) {
    var v = o.baseState;
    l = 0, d = s = a = null, u = i;
    do {
      var p = u.lane, y = u.eventTime;
      if ((r & p) === p) {
        d !== null && (d = d.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var g = e, S = u;
          switch (p = t, y = n, S.tag) {
            case 1:
              if (g = S.payload, typeof g == "function") {
                v = g.call(y, v, p);
                break e;
              }
              v = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = S.payload, p = typeof g == "function" ? g.call(y, v, p) : g, p == null)
                break e;
              v = ve({}, v, p);
              break e;
            case 2:
              Vt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [u] : p.push(u));
      } else
        y = { eventTime: y, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, d === null ? (s = d = y, a = v) : d = d.next = y, l |= p;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null)
          break;
        p = u, u = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (a = v), o.baseState = a, o.firstBaseUpdate = s, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    Cn |= l, e.lanes = l, e.memoizedState = v;
  }
}
function ec(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(N(191, o));
        o.call(r);
      }
    }
}
var wd = new gf.Component().refs;
function Au(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Li = { isMounted: function(e) {
  return (e = e._reactInternals) ? Nn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Me(), o = tn(e), i = jt(r, o);
  i.payload = t, n != null && (i.callback = n), t = qt(e, i, o), t !== null && (gt(t, e, o, r), Uo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Me(), o = tn(e), i = jt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = qt(e, i, o), t !== null && (gt(t, e, o, r), Uo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Me(), r = tn(e), o = jt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = qt(e, o, r), t !== null && (gt(t, e, r, n), Uo(t, e, r));
} };
function tc(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Kr(n, r) || !Kr(o, i) : !0;
}
function Sd(e, t, n) {
  var r = !1, o = un, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ut(i) : (o = We(t) ? kn : Ie.current, r = t.contextTypes, i = (r = r != null) ? tr(e, o) : un), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Li, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function nc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Li.enqueueReplaceState(t, t.state, null);
}
function Nu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = wd, $a(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = ut(i) : (i = We(t) ? kn : Ie.current, o.context = tr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Au(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Li.enqueueReplaceState(o, o.state, null), ci(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function kr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(N(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var u = o.refs;
        u === wd && (u = o.refs = {}), l === null ? delete u[i] : u[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(N(284));
    if (!n._owner)
      throw Error(N(290, e));
  }
  return e;
}
function No(e, t) {
  throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function rc(e) {
  var t = e._init;
  return t(e._payload);
}
function kd(e) {
  function t(f, c) {
    if (e) {
      var h = f.deletions;
      h === null ? (f.deletions = [c], f.flags |= 16) : h.push(c);
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
    return f = nn(f, c), f.index = 0, f.sibling = null, f;
  }
  function i(f, c, h) {
    return f.index = h, e ? (h = f.alternate, h !== null ? (h = h.index, h < c ? (f.flags |= 2, c) : h) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, h, E) {
    return c === null || c.tag !== 6 ? (c = Bl(h, f.mode, E), c.return = f, c) : (c = o(c, h), c.return = f, c);
  }
  function a(f, c, h, E) {
    var P = h.type;
    return P === jn ? d(f, c, h.props.children, E, h.key) : c !== null && (c.elementType === P || typeof P == "object" && P !== null && P.$$typeof === bt && rc(P) === c.type) ? (E = o(c, h.props), E.ref = kr(f, c, h), E.return = f, E) : (E = Ko(h.type, h.key, h.props, null, f.mode, E), E.ref = kr(f, c, h), E.return = f, E);
  }
  function s(f, c, h, E) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = Ul(h, f.mode, E), c.return = f, c) : (c = o(c, h.children || []), c.return = f, c);
  }
  function d(f, c, h, E, P) {
    return c === null || c.tag !== 7 ? (c = Sn(h, f.mode, E, P), c.return = f, c) : (c = o(c, h), c.return = f, c);
  }
  function v(f, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = Bl("" + c, f.mode, h), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case yo:
          return h = Ko(c.type, c.key, c.props, null, f.mode, h), h.ref = kr(f, null, c), h.return = f, h;
        case Tn:
          return c = Ul(c, f.mode, h), c.return = f, c;
        case bt:
          var E = c._init;
          return v(f, E(c._payload), h);
      }
      if (Pr(c) || mr(c))
        return c = Sn(c, f.mode, h, null), c.return = f, c;
      No(f, c);
    }
    return null;
  }
  function p(f, c, h, E) {
    var P = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return P !== null ? null : u(f, c, "" + h, E);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case yo:
          return h.key === P ? a(f, c, h, E) : null;
        case Tn:
          return h.key === P ? s(f, c, h, E) : null;
        case bt:
          return P = h._init, p(
            f,
            c,
            P(h._payload),
            E
          );
      }
      if (Pr(h) || mr(h))
        return P !== null ? null : d(f, c, h, E, null);
      No(f, h);
    }
    return null;
  }
  function y(f, c, h, E, P) {
    if (typeof E == "string" && E !== "" || typeof E == "number")
      return f = f.get(h) || null, u(c, f, "" + E, P);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case yo:
          return f = f.get(E.key === null ? h : E.key) || null, a(c, f, E, P);
        case Tn:
          return f = f.get(E.key === null ? h : E.key) || null, s(c, f, E, P);
        case bt:
          var $ = E._init;
          return y(f, c, h, $(E._payload), P);
      }
      if (Pr(E) || mr(E))
        return f = f.get(h) || null, d(c, f, E, P, null);
      No(c, E);
    }
    return null;
  }
  function g(f, c, h, E) {
    for (var P = null, $ = null, j = c, R = c = 0, U = null; j !== null && R < h.length; R++) {
      j.index > R ? (U = j, j = null) : U = j.sibling;
      var I = p(f, j, h[R], E);
      if (I === null) {
        j === null && (j = U);
        break;
      }
      e && j && I.alternate === null && t(f, j), c = i(I, c, R), $ === null ? P = I : $.sibling = I, $ = I, j = U;
    }
    if (R === h.length)
      return n(f, j), se && pn(f, R), P;
    if (j === null) {
      for (; R < h.length; R++)
        j = v(f, h[R], E), j !== null && (c = i(j, c, R), $ === null ? P = j : $.sibling = j, $ = j);
      return se && pn(f, R), P;
    }
    for (j = r(f, j); R < h.length; R++)
      U = y(j, f, R, h[R], E), U !== null && (e && U.alternate !== null && j.delete(U.key === null ? R : U.key), c = i(U, c, R), $ === null ? P = U : $.sibling = U, $ = U);
    return e && j.forEach(function(ee) {
      return t(f, ee);
    }), se && pn(f, R), P;
  }
  function S(f, c, h, E) {
    var P = mr(h);
    if (typeof P != "function")
      throw Error(N(150));
    if (h = P.call(h), h == null)
      throw Error(N(151));
    for (var $ = P = null, j = c, R = c = 0, U = null, I = h.next(); j !== null && !I.done; R++, I = h.next()) {
      j.index > R ? (U = j, j = null) : U = j.sibling;
      var ee = p(f, j, I.value, E);
      if (ee === null) {
        j === null && (j = U);
        break;
      }
      e && j && ee.alternate === null && t(f, j), c = i(ee, c, R), $ === null ? P = ee : $.sibling = ee, $ = ee, j = U;
    }
    if (I.done)
      return n(
        f,
        j
      ), se && pn(f, R), P;
    if (j === null) {
      for (; !I.done; R++, I = h.next())
        I = v(f, I.value, E), I !== null && (c = i(I, c, R), $ === null ? P = I : $.sibling = I, $ = I);
      return se && pn(f, R), P;
    }
    for (j = r(f, j); !I.done; R++, I = h.next())
      I = y(j, f, R, I.value, E), I !== null && (e && I.alternate !== null && j.delete(I.key === null ? R : I.key), c = i(I, c, R), $ === null ? P = I : $.sibling = I, $ = I);
    return e && j.forEach(function(le) {
      return t(f, le);
    }), se && pn(f, R), P;
  }
  function _(f, c, h, E) {
    if (typeof h == "object" && h !== null && h.type === jn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case yo:
          e: {
            for (var P = h.key, $ = c; $ !== null; ) {
              if ($.key === P) {
                if (P = h.type, P === jn) {
                  if ($.tag === 7) {
                    n(f, $.sibling), c = o($, h.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if ($.elementType === P || typeof P == "object" && P !== null && P.$$typeof === bt && rc(P) === $.type) {
                  n(f, $.sibling), c = o($, h.props), c.ref = kr(f, $, h), c.return = f, f = c;
                  break e;
                }
                n(f, $);
                break;
              } else
                t(f, $);
              $ = $.sibling;
            }
            h.type === jn ? (c = Sn(h.props.children, f.mode, E, h.key), c.return = f, f = c) : (E = Ko(h.type, h.key, h.props, null, f.mode, E), E.ref = kr(f, c, h), E.return = f, f = E);
          }
          return l(f);
        case Tn:
          e: {
            for ($ = h.key; c !== null; ) {
              if (c.key === $)
                if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                  n(f, c.sibling), c = o(c, h.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else
                t(f, c);
              c = c.sibling;
            }
            c = Ul(h, f.mode, E), c.return = f, f = c;
          }
          return l(f);
        case bt:
          return $ = h._init, _(f, c, $(h._payload), E);
      }
      if (Pr(h))
        return g(f, c, h, E);
      if (mr(h))
        return S(f, c, h, E);
      No(f, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, h), c.return = f, f = c) : (n(f, c), c = Bl(h, f.mode, E), c.return = f, f = c), l(f)) : n(f, c);
  }
  return _;
}
var rr = kd(!0), xd = kd(!1), fo = {}, Et = fn(fo), Zr = fn(fo), Jr = fn(fo);
function yn(e) {
  if (e === fo)
    throw Error(N(174));
  return e;
}
function Ta(e, t) {
  switch (ne(Jr, t), ne(Zr, e), ne(Et, fo), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = uu(t, e);
  }
  ie(Et), ne(Et, t);
}
function or() {
  ie(Et), ie(Zr), ie(Jr);
}
function Ed(e) {
  yn(Jr.current);
  var t = yn(Et.current), n = uu(t, e.type);
  t !== n && (ne(Zr, e), ne(Et, n));
}
function ja(e) {
  Zr.current === e && (ie(Et), ie(Zr));
}
var de = fn(0);
function fi(e) {
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
var zl = [];
function Ra() {
  for (var e = 0; e < zl.length; e++)
    zl[e]._workInProgressVersionPrimary = null;
  zl.length = 0;
}
var bo = Ft.ReactCurrentDispatcher, Ll = Ft.ReactCurrentBatchConfig, En = 0, he = null, ke = null, Ee = null, di = !1, zr = !1, qr = 0, hm = 0;
function Te() {
  throw Error(N(321));
}
function za(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!yt(e[n], t[n]))
      return !1;
  return !0;
}
function La(e, t, n, r, o, i) {
  if (En = i, he = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, bo.current = e === null || e.memoizedState === null ? ym : wm, e = n(r, o), zr) {
    i = 0;
    do {
      if (zr = !1, qr = 0, 25 <= i)
        throw Error(N(301));
      i += 1, Ee = ke = null, t.updateQueue = null, bo.current = Sm, e = n(r, o);
    } while (zr);
  }
  if (bo.current = pi, t = ke !== null && ke.next !== null, En = 0, Ee = ke = he = null, di = !1, t)
    throw Error(N(300));
  return e;
}
function Ia() {
  var e = qr !== 0;
  return qr = 0, e;
}
function St() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ee === null ? he.memoizedState = Ee = e : Ee = Ee.next = e, Ee;
}
function at() {
  if (ke === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = ke.next;
  var t = Ee === null ? he.memoizedState : Ee.next;
  if (t !== null)
    Ee = t, ke = e;
  else {
    if (e === null)
      throw Error(N(310));
    ke = e, e = { memoizedState: ke.memoizedState, baseState: ke.baseState, baseQueue: ke.baseQueue, queue: ke.queue, next: null }, Ee === null ? he.memoizedState = Ee = e : Ee = Ee.next = e;
  }
  return Ee;
}
function eo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Il(e) {
  var t = at(), n = t.queue;
  if (n === null)
    throw Error(N(311));
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
      var d = s.lane;
      if ((En & d) === d)
        a !== null && (a = a.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var v = {
          lane: d,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        a === null ? (u = a = v, l = r) : a = a.next = v, he.lanes |= d, Cn |= d;
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? l = r : a.next = u, yt(r, t.memoizedState) || (Ve = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, he.lanes |= i, Cn |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Dl(e) {
  var t = at(), n = t.queue;
  if (n === null)
    throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    yt(i, t.memoizedState) || (Ve = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Cd() {
}
function Pd(e, t) {
  var n = he, r = at(), o = t(), i = !yt(r.memoizedState, o);
  if (i && (r.memoizedState = o, Ve = !0), r = r.queue, Da(Ad.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ee !== null && Ee.memoizedState.tag & 1) {
    if (n.flags |= 2048, to(9, Od.bind(null, n, r, o, t), void 0, null), Ce === null)
      throw Error(N(349));
    En & 30 || _d(n, t, o);
  }
  return o;
}
function _d(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Od(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Nd(t) && $d(e);
}
function Ad(e, t, n) {
  return n(function() {
    Nd(t) && $d(e);
  });
}
function Nd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yt(e, n);
  } catch {
    return !0;
  }
}
function $d(e) {
  var t = It(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function oc(e) {
  var t = St();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: eo, lastRenderedState: e }, t.queue = e, e = e.dispatch = gm.bind(null, he, e), [t.memoizedState, e];
}
function to(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Td() {
  return at().memoizedState;
}
function Vo(e, t, n, r) {
  var o = St();
  he.flags |= e, o.memoizedState = to(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ii(e, t, n, r) {
  var o = at();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ke !== null) {
    var l = ke.memoizedState;
    if (i = l.destroy, r !== null && za(r, l.deps)) {
      o.memoizedState = to(t, n, i, r);
      return;
    }
  }
  he.flags |= e, o.memoizedState = to(1 | t, n, i, r);
}
function ic(e, t) {
  return Vo(8390656, 8, e, t);
}
function Da(e, t) {
  return Ii(2048, 8, e, t);
}
function jd(e, t) {
  return Ii(4, 2, e, t);
}
function Rd(e, t) {
  return Ii(4, 4, e, t);
}
function zd(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Ld(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ii(4, 4, zd.bind(null, t, e), n);
}
function Ma() {
}
function Id(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && za(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Dd(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && za(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Md(e, t, n) {
  return En & 21 ? (yt(n, t) || (n = Uf(), he.lanes |= n, Cn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ve = !0), e.memoizedState = n);
}
function vm(e, t) {
  var n = Z;
  Z = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ll.transition;
  Ll.transition = {};
  try {
    e(!1), t();
  } finally {
    Z = n, Ll.transition = r;
  }
}
function Fd() {
  return at().memoizedState;
}
function mm(e, t, n) {
  var r = tn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Bd(e))
    Ud(t, n);
  else if (n = gd(e, t, n, r), n !== null) {
    var o = Me();
    gt(n, e, r, o), bd(n, t, r);
  }
}
function gm(e, t, n) {
  var r = tn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bd(e))
    Ud(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, u = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = u, yt(u, l)) {
          var a = t.interleaved;
          a === null ? (o.next = o, Na(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = gd(e, t, o, r), n !== null && (o = Me(), gt(n, e, r, o), bd(n, t, r));
  }
}
function Bd(e) {
  var t = e.alternate;
  return e === he || t !== null && t === he;
}
function Ud(e, t) {
  zr = di = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function bd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, va(e, n);
  }
}
var pi = { readContext: ut, useCallback: Te, useContext: Te, useEffect: Te, useImperativeHandle: Te, useInsertionEffect: Te, useLayoutEffect: Te, useMemo: Te, useReducer: Te, useRef: Te, useState: Te, useDebugValue: Te, useDeferredValue: Te, useTransition: Te, useMutableSource: Te, useSyncExternalStore: Te, useId: Te, unstable_isNewReconciler: !1 }, ym = { readContext: ut, useCallback: function(e, t) {
  return St().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ut, useEffect: ic, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vo(
    4194308,
    4,
    zd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Vo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Vo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = St();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = St();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = mm.bind(null, he, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = St();
  return e = { current: e }, t.memoizedState = e;
}, useState: oc, useDebugValue: Ma, useDeferredValue: function(e) {
  return St().memoizedState = e;
}, useTransition: function() {
  var e = oc(!1), t = e[0];
  return e = vm.bind(null, e[1]), St().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = he, o = St();
  if (se) {
    if (n === void 0)
      throw Error(N(407));
    n = n();
  } else {
    if (n = t(), Ce === null)
      throw Error(N(349));
    En & 30 || _d(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, ic(Ad.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, to(9, Od.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = St(), t = Ce.identifierPrefix;
  if (se) {
    var n = $t, r = Nt;
    n = (r & ~(1 << 32 - mt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = hm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, wm = {
  readContext: ut,
  useCallback: Id,
  useContext: ut,
  useEffect: Da,
  useImperativeHandle: Ld,
  useInsertionEffect: jd,
  useLayoutEffect: Rd,
  useMemo: Dd,
  useReducer: Il,
  useRef: Td,
  useState: function() {
    return Il(eo);
  },
  useDebugValue: Ma,
  useDeferredValue: function(e) {
    var t = at();
    return Md(t, ke.memoizedState, e);
  },
  useTransition: function() {
    var e = Il(eo)[0], t = at().memoizedState;
    return [e, t];
  },
  useMutableSource: Cd,
  useSyncExternalStore: Pd,
  useId: Fd,
  unstable_isNewReconciler: !1
}, Sm = { readContext: ut, useCallback: Id, useContext: ut, useEffect: Da, useImperativeHandle: Ld, useInsertionEffect: jd, useLayoutEffect: Rd, useMemo: Dd, useReducer: Dl, useRef: Td, useState: function() {
  return Dl(eo);
}, useDebugValue: Ma, useDeferredValue: function(e) {
  var t = at();
  return ke === null ? t.memoizedState = e : Md(t, ke.memoizedState, e);
}, useTransition: function() {
  var e = Dl(eo)[0], t = at().memoizedState;
  return [e, t];
}, useMutableSource: Cd, useSyncExternalStore: Pd, useId: Fd, unstable_isNewReconciler: !1 };
function ir(e, t) {
  try {
    var n = "", r = t;
    do
      n += Yh(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ml(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $u(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var km = typeof WeakMap == "function" ? WeakMap : Map;
function Vd(e, t, n) {
  n = jt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    vi || (vi = !0, Bu = r), $u(e, t);
  }, n;
}
function Hd(e, t, n) {
  n = jt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      $u(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    $u(e, t), typeof r != "function" && (en === null ? en = /* @__PURE__ */ new Set([this]) : en.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function lc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new km();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Lm.bind(null, e, t, n), t.then(e, e));
}
function uc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ac(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jt(-1, 1), t.tag = 2, qt(n, t, 1))), n.lanes |= 1), e);
}
var xm = Ft.ReactCurrentOwner, Ve = !1;
function De(e, t, n, r) {
  t.child = e === null ? xd(t, null, n, r) : rr(t, e.child, n, r);
}
function sc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Yn(t, o), r = La(e, t, n, r, i, o), n = Ia(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Dt(e, t, o)) : (se && n && Ea(t), t.flags |= 1, De(e, t, r, o), t.child);
}
function cc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Qa(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Wd(e, t, i, r, o)) : (e = Ko(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Kr, n(l, r) && e.ref === t.ref)
      return Dt(e, t, o);
  }
  return t.flags |= 1, e = nn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Wd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Kr(i, r) && e.ref === t.ref)
      if (Ve = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (Ve = !0);
      else
        return t.lanes = e.lanes, Dt(e, t, o);
  }
  return Tu(e, t, n, r, o);
}
function Qd(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ne(bn, Ke), Ke |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ne(bn, Ke), Ke |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ne(bn, Ke), Ke |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ne(bn, Ke), Ke |= r;
  return De(e, t, o, n), t.child;
}
function Kd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Tu(e, t, n, r, o) {
  var i = We(n) ? kn : Ie.current;
  return i = tr(t, i), Yn(t, o), n = La(e, t, n, r, i, o), r = Ia(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Dt(e, t, o)) : (se && r && Ea(t), t.flags |= 1, De(e, t, n, o), t.child);
}
function fc(e, t, n, r, o) {
  if (We(n)) {
    var i = !0;
    ii(t);
  } else
    i = !1;
  if (Yn(t, o), t.stateNode === null)
    Ho(e, t), Sd(t, n, r), Nu(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var a = l.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = ut(s) : (s = We(n) ? kn : Ie.current, s = tr(t, s));
    var d = n.getDerivedStateFromProps, v = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    v || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || a !== s) && nc(t, l, r, s), Vt = !1;
    var p = t.memoizedState;
    l.state = p, ci(t, r, l, o), a = t.memoizedState, u !== r || p !== a || He.current || Vt ? (typeof d == "function" && (Au(t, n, d, r), a = t.memoizedState), (u = Vt || tc(t, n, u, r, p, a, s)) ? (v || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = s, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, yd(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : dt(t.type, u), l.props = s, v = t.pendingProps, p = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = ut(a) : (a = We(n) ? kn : Ie.current, a = tr(t, a));
    var y = n.getDerivedStateFromProps;
    (d = typeof y == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== v || p !== a) && nc(t, l, r, a), Vt = !1, p = t.memoizedState, l.state = p, ci(t, r, l, o);
    var g = t.memoizedState;
    u !== v || p !== g || He.current || Vt ? (typeof y == "function" && (Au(t, n, y, r), g = t.memoizedState), (s = Vt || tc(t, n, s, r, p, g, a) || !1) ? (d || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), l.props = r, l.state = g, l.context = a, r = s) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ju(e, t, n, r, i, o);
}
function ju(e, t, n, r, o, i) {
  Kd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && Xs(t, n, !1), Dt(e, t, i);
  r = t.stateNode, xm.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = rr(t, e.child, null, i), t.child = rr(t, null, u, i)) : De(e, t, u, i), t.memoizedState = r.state, o && Xs(t, n, !0), t.child;
}
function Yd(e) {
  var t = e.stateNode;
  t.pendingContext ? Gs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gs(e, t.context, !1), Ta(e, t.containerInfo);
}
function dc(e, t, n, r, o) {
  return nr(), Pa(o), t.flags |= 256, De(e, t, n, r), t.child;
}
var Ru = { dehydrated: null, treeContext: null, retryLane: 0 };
function zu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gd(e, t, n) {
  var r = t.pendingProps, o = de.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ne(de, o & 1), e === null)
    return _u(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Fi(l, r, 0, null), e = Sn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = zu(n), t.memoizedState = Ru, e) : Fa(t, l));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null))
    return Em(e, t, l, r, u, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, u = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = nn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? i = nn(u, i) : (i = Sn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? zu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Ru, r;
  }
  return i = e.child, e = i.sibling, r = nn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Fa(e, t) {
  return t = Fi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function $o(e, t, n, r) {
  return r !== null && Pa(r), rr(t, e.child, null, n), e = Fa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Em(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ml(Error(N(422))), $o(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Fi({ mode: "visible", children: r.children }, o, 0, null), i = Sn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && rr(t, e.child, null, l), t.child.memoizedState = zu(l), t.memoizedState = Ru, i);
  if (!(t.mode & 1))
    return $o(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, i = Error(N(419)), r = Ml(i, r, void 0), $o(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, Ve || u) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, It(e, o), gt(r, e, o, -1));
    }
    return Wa(), r = Ml(Error(N(421))), $o(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Im.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ye = Jt(o.nextSibling), Ge = t, se = !0, ht = null, e !== null && (rt[ot++] = Nt, rt[ot++] = $t, rt[ot++] = xn, Nt = e.id, $t = e.overflow, xn = t), t = Fa(t, r.children), t.flags |= 4096, t);
}
function pc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ou(e.return, t, n);
}
function Fl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Xd(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (De(e, t, r.children, n), r = de.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && pc(e, n, t);
          else if (e.tag === 19)
            pc(e, n, t);
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
  if (ne(de, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && fi(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Fl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && fi(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Fl(t, !0, n, null, i);
        break;
      case "together":
        Fl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ho(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Cn |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = nn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Cm(e, t, n) {
  switch (t.tag) {
    case 3:
      Yd(t), nr();
      break;
    case 5:
      Ed(t);
      break;
    case 1:
      We(t.type) && ii(t);
      break;
    case 4:
      Ta(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ne(ai, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ne(de, de.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gd(e, t, n) : (ne(de, de.current & 1), e = Dt(e, t, n), e !== null ? e.sibling : null);
      ne(de, de.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Xd(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ne(de, de.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Qd(e, t, n);
  }
  return Dt(e, t, n);
}
var Zd, Lu, Jd, qd;
Zd = function(e, t) {
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
Lu = function() {
};
Jd = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, yn(Et.current);
    var i = null;
    switch (n) {
      case "input":
        o = ru(e, o), r = ru(e, r), i = [];
        break;
      case "select":
        o = ve({}, o, { value: void 0 }), r = ve({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = lu(e, o), r = lu(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ri);
    }
    au(n, r);
    var l;
    n = null;
    for (s in o)
      if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
        if (s === "style") {
          var u = o[s];
          for (l in u)
            u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Br.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (u = o != null ? o[s] : void 0, r.hasOwnProperty(s) && a !== u && (a != null || u != null))
        if (s === "style")
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
            for (l in a)
              a.hasOwnProperty(l) && u[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
          } else
            n || (i || (i = []), i.push(
              s,
              n
            )), n = a;
        else
          s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Br.hasOwnProperty(s) ? (a != null && s === "onScroll" && oe("scroll", e), i || u === a || (i = [])) : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
qd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xr(e, t) {
  if (!se)
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
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Pm(e, t, n) {
  var r = t.pendingProps;
  switch (Ca(t), t.tag) {
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
      return je(t), null;
    case 1:
      return We(t.type) && oi(), je(t), null;
    case 3:
      return r = t.stateNode, or(), ie(He), ie(Ie), Ra(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ao(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ht !== null && (Vu(ht), ht = null))), Lu(e, t), je(t), null;
    case 5:
      ja(t);
      var o = yn(Jr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Jd(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(N(166));
          return je(t), null;
        }
        if (e = yn(Et.current), Ao(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[kt] = t, r[Xr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Or.length; o++)
                oe(Or[o], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe(
                "error",
                r
              ), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              xs(r, i), oe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, oe("invalid", r);
              break;
            case "textarea":
              Cs(r, i), oe("invalid", r);
          }
          au(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Oo(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Oo(
                r.textContent,
                u,
                e
              ), o = ["children", "" + u]) : Br.hasOwnProperty(l) && u != null && l === "onScroll" && oe("scroll", r);
            }
          switch (n) {
            case "input":
              wo(r), Es(r, i, !0);
              break;
            case "textarea":
              wo(r), Ps(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ri);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _f(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[kt] = t, e[Xr] = r, Zd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = su(n, r), n) {
              case "dialog":
                oe("cancel", e), oe("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Or.length; o++)
                  oe(Or[o], e);
                o = r;
                break;
              case "source":
                oe("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                oe(
                  "error",
                  e
                ), oe("load", e), o = r;
                break;
              case "details":
                oe("toggle", e), o = r;
                break;
              case "input":
                xs(e, r), o = ru(e, r), oe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ve({}, r, { value: void 0 }), oe("invalid", e);
                break;
              case "textarea":
                Cs(e, r), o = lu(e, r), oe("invalid", e);
                break;
              default:
                o = r;
            }
            au(n, o), u = o;
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style" ? Nf(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Of(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ur(e, a) : typeof a == "number" && Ur(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Br.hasOwnProperty(i) ? a != null && i === "onScroll" && oe("scroll", e) : a != null && sa(e, i, a, l));
              }
            switch (n) {
              case "input":
                wo(e), Es(e, r, !1);
                break;
              case "textarea":
                wo(e), Ps(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ln(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Hn(e, !!r.multiple, i, !1) : r.defaultValue != null && Hn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ri);
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
      return je(t), null;
    case 6:
      if (e && t.stateNode != null)
        qd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(N(166));
        if (n = yn(Jr.current), yn(Et.current), Ao(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[kt] = t, (i = r.nodeValue !== n) && (e = Ge, e !== null))
            switch (e.tag) {
              case 3:
                Oo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Oo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kt] = t, t.stateNode = r;
      }
      return je(t), null;
    case 13:
      if (ie(de), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (se && Ye !== null && t.mode & 1 && !(t.flags & 128))
          md(), nr(), t.flags |= 98560, i = !1;
        else if (i = Ao(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(N(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(N(317));
            i[kt] = t;
          } else
            nr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          je(t), i = !1;
        } else
          ht !== null && (Vu(ht), ht = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || de.current & 1 ? xe === 0 && (xe = 3) : Wa())), t.updateQueue !== null && (t.flags |= 4), je(t), null);
    case 4:
      return or(), Lu(e, t), e === null && Yr(t.stateNode.containerInfo), je(t), null;
    case 10:
      return Aa(t.type._context), je(t), null;
    case 17:
      return We(t.type) && oi(), je(t), null;
    case 19:
      if (ie(de), i = t.memoizedState, i === null)
        return je(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          xr(i, !1);
        else {
          if (xe !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (l = fi(e), l !== null) {
                for (t.flags |= 128, xr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return ne(de, de.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && ge() > lr && (t.flags |= 128, r = !0, xr(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = fi(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !se)
              return je(t), null;
          } else
            2 * ge() - i.renderingStartTime > lr && n !== 1073741824 && (t.flags |= 128, r = !0, xr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ge(), t.sibling = null, n = de.current, ne(de, r ? n & 1 | 2 : n & 1), t) : (je(t), null);
    case 22:
    case 23:
      return Ha(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ke & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function _m(e, t) {
  switch (Ca(t), t.tag) {
    case 1:
      return We(t.type) && oi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return or(), ie(He), ie(Ie), Ra(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ja(t), null;
    case 13:
      if (ie(de), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(N(340));
        nr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ie(de), null;
    case 4:
      return or(), null;
    case 10:
      return Aa(t.type._context), null;
    case 22:
    case 23:
      return Ha(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var To = !1, Le = !1, Om = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function Un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else
      n.current = null;
}
function Iu(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var hc = !1;
function Am(e, t) {
  if (wu = ei, e = rd(), xa(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
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
          var l = 0, u = -1, a = -1, s = 0, d = 0, v = e, p = null;
          t:
            for (; ; ) {
              for (var y; v !== n || o !== 0 && v.nodeType !== 3 || (u = l + o), v !== i || r !== 0 && v.nodeType !== 3 || (a = l + r), v.nodeType === 3 && (l += v.nodeValue.length), (y = v.firstChild) !== null; )
                p = v, v = y;
              for (; ; ) {
                if (v === e)
                  break t;
                if (p === n && ++s === o && (u = l), p === i && ++d === r && (a = l), (y = v.nextSibling) !== null)
                  break;
                v = p, p = v.parentNode;
              }
              v = y;
            }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Su = { focusedElem: e, selectionRange: n }, ei = !1, L = t; L !== null; )
    if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, L = e;
    else
      for (; L !== null; ) {
        t = L;
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
                  var S = g.memoizedProps, _ = g.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? S : dt(t.type, S), _);
                  f.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(N(163));
            }
        } catch (E) {
          me(t, t.return, E);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, L = e;
          break;
        }
        L = t.return;
      }
  return g = hc, hc = !1, g;
}
function Lr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Iu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Di(e, t) {
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
function Du(e) {
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
function ep(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ep(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kt], delete t[Xr], delete t[Eu], delete t[cm], delete t[fm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function tp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vc(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || tp(e.return))
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
function Mu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ri));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Mu(e, t, n), e = e.sibling; e !== null; )
      Mu(e, t, n), e = e.sibling;
}
function Fu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Fu(e, t, n), e = e.sibling; e !== null; )
      Fu(e, t, n), e = e.sibling;
}
var _e = null, pt = !1;
function Ut(e, t, n) {
  for (n = n.child; n !== null; )
    np(e, t, n), n = n.sibling;
}
function np(e, t, n) {
  if (xt && typeof xt.onCommitFiberUnmount == "function")
    try {
      xt.onCommitFiberUnmount(Ni, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Le || Un(n, t);
    case 6:
      var r = _e, o = pt;
      _e = null, Ut(e, t, n), _e = r, pt = o, _e !== null && (pt ? (e = _e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null && (pt ? (e = _e, n = n.stateNode, e.nodeType === 8 ? jl(e.parentNode, n) : e.nodeType === 1 && jl(e, n), Wr(e)) : jl(_e, n.stateNode));
      break;
    case 4:
      r = _e, o = pt, _e = n.stateNode.containerInfo, pt = !0, Ut(e, t, n), _e = r, pt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && Iu(n, t, l), o = o.next;
        } while (o !== r);
      }
      Ut(e, t, n);
      break;
    case 1:
      if (!Le && (Un(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          me(n, t, u);
        }
      Ut(e, t, n);
      break;
    case 21:
      Ut(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Le = (r = Le) || n.memoizedState !== null, Ut(e, t, n), Le = r) : Ut(e, t, n);
      break;
    default:
      Ut(e, t, n);
  }
}
function mc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Om()), t.forEach(function(r) {
      var o = Dm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, l = t, u = l;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                _e = u.stateNode, pt = !1;
                break e;
              case 3:
                _e = u.stateNode.containerInfo, pt = !0;
                break e;
              case 4:
                _e = u.stateNode.containerInfo, pt = !0;
                break e;
            }
            u = u.return;
          }
        if (_e === null)
          throw Error(N(160));
        np(i, l, o), _e = null, pt = !1;
        var a = o.alternate;
        a !== null && (a.return = null), o.return = null;
      } catch (s) {
        me(o, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      rp(t, e), t = t.sibling;
}
function rp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ft(t, e), wt(e), r & 4) {
        try {
          Lr(3, e, e.return), Di(3, e);
        } catch (S) {
          me(e, e.return, S);
        }
        try {
          Lr(5, e, e.return);
        } catch (S) {
          me(e, e.return, S);
        }
      }
      break;
    case 1:
      ft(t, e), wt(e), r & 512 && n !== null && Un(n, n.return);
      break;
    case 5:
      if (ft(t, e), wt(e), r & 512 && n !== null && Un(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ur(o, "");
        } catch (S) {
          me(e, e.return, S);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            u === "input" && i.type === "radio" && i.name != null && Cf(o, i), su(u, l);
            var s = su(u, i);
            for (l = 0; l < a.length; l += 2) {
              var d = a[l], v = a[l + 1];
              d === "style" ? Nf(o, v) : d === "dangerouslySetInnerHTML" ? Of(o, v) : d === "children" ? Ur(o, v) : sa(o, d, v, s);
            }
            switch (u) {
              case "input":
                ou(o, i);
                break;
              case "textarea":
                Pf(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null ? Hn(o, !!i.multiple, y, !1) : p !== !!i.multiple && (i.defaultValue != null ? Hn(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Hn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Xr] = i;
          } catch (S) {
            me(e, e.return, S);
          }
      }
      break;
    case 6:
      if (ft(t, e), wt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(N(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (S) {
          me(e, e.return, S);
        }
      }
      break;
    case 3:
      if (ft(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Wr(t.containerInfo);
        } catch (S) {
          me(e, e.return, S);
        }
      break;
    case 4:
      ft(t, e), wt(e);
      break;
    case 13:
      ft(t, e), wt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (ba = ge())), r & 4 && mc(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Le = (s = Le) || d, ft(t, e), Le = s) : ft(t, e), wt(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !d && e.mode & 1)
          for (L = e, d = e.child; d !== null; ) {
            for (v = L = d; L !== null; ) {
              switch (p = L, y = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lr(4, p, p.return);
                  break;
                case 1:
                  Un(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (S) {
                      me(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Un(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    yc(v);
                    continue;
                  }
              }
              y !== null ? (y.return = p, L = y) : yc(v);
            }
            d = d.sibling;
          }
        e:
          for (d = null, v = e; ; ) {
            if (v.tag === 5) {
              if (d === null) {
                d = v;
                try {
                  o = v.stateNode, s ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = v.stateNode, a = v.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Af("display", l));
                } catch (S) {
                  me(e, e.return, S);
                }
              }
            } else if (v.tag === 6) {
              if (d === null)
                try {
                  v.stateNode.nodeValue = s ? "" : v.memoizedProps;
                } catch (S) {
                  me(e, e.return, S);
                }
            } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
              v.child.return = v, v = v.child;
              continue;
            }
            if (v === e)
              break e;
            for (; v.sibling === null; ) {
              if (v.return === null || v.return === e)
                break e;
              d === v && (d = null), v = v.return;
            }
            d === v && (d = null), v.sibling.return = v.return, v = v.sibling;
          }
      }
      break;
    case 19:
      ft(t, e), wt(e), r & 4 && mc(e);
      break;
    case 21:
      break;
    default:
      ft(
        t,
        e
      ), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (tp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ur(o, ""), r.flags &= -33);
          var i = vc(e);
          Fu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = vc(e);
          Mu(e, u, l);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      me(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Nm(e, t, n) {
  L = e, op(e);
}
function op(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || To;
      if (!l) {
        var u = o.alternate, a = u !== null && u.memoizedState !== null || Le;
        u = To;
        var s = Le;
        if (To = l, (Le = a) && !s)
          for (L = o; L !== null; )
            l = L, a = l.child, l.tag === 22 && l.memoizedState !== null ? wc(o) : a !== null ? (a.return = l, L = a) : wc(o);
        for (; i !== null; )
          L = i, op(i), i = i.sibling;
        L = o, To = u, Le = s;
      }
      gc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, L = i) : gc(e);
  }
}
function gc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || Di(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : dt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && ec(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ec(t, l, n);
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
                    var v = d.dehydrated;
                    v !== null && Wr(v);
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
              throw Error(N(163));
          }
        Le || t.flags & 512 && Du(t);
      } catch (p) {
        me(t, t.return, p);
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
function yc(e) {
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
function wc(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Di(4, t);
          } catch (a) {
            me(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              me(t, o, a);
            }
          }
          var i = t.return;
          try {
            Du(t);
          } catch (a) {
            me(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Du(t);
          } catch (a) {
            me(t, l, a);
          }
      }
    } catch (a) {
      me(t, t.return, a);
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
var $m = Math.ceil, hi = Ft.ReactCurrentDispatcher, Ba = Ft.ReactCurrentOwner, lt = Ft.ReactCurrentBatchConfig, G = 0, Ce = null, we = null, Oe = 0, Ke = 0, bn = fn(0), xe = 0, no = null, Cn = 0, Mi = 0, Ua = 0, Ir = null, be = null, ba = 0, lr = 1 / 0, Ot = null, vi = !1, Bu = null, en = null, jo = !1, Yt = null, mi = 0, Dr = 0, Uu = null, Wo = -1, Qo = 0;
function Me() {
  return G & 6 ? ge() : Wo !== -1 ? Wo : Wo = ge();
}
function tn(e) {
  return e.mode & 1 ? G & 2 && Oe !== 0 ? Oe & -Oe : pm.transition !== null ? (Qo === 0 && (Qo = Uf()), Qo) : (e = Z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Yf(e.type)), e) : 1;
}
function gt(e, t, n, r) {
  if (50 < Dr)
    throw Dr = 0, Uu = null, Error(N(185));
  ao(e, n, r), (!(G & 2) || e !== Ce) && (e === Ce && (!(G & 2) && (Mi |= n), xe === 4 && Wt(e, Oe)), Qe(e, r), n === 1 && G === 0 && !(t.mode & 1) && (lr = ge() + 500, zi && dn()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  pv(e, t);
  var r = qo(e, e === Ce ? Oe : 0);
  if (r === 0)
    n !== null && As(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && As(n), t === 1)
      e.tag === 0 ? dm(Sc.bind(null, e)) : pd(Sc.bind(null, e)), am(function() {
        !(G & 6) && dn();
      }), n = null;
    else {
      switch (bf(r)) {
        case 1:
          n = ha;
          break;
        case 4:
          n = Ff;
          break;
        case 16:
          n = Jo;
          break;
        case 536870912:
          n = Bf;
          break;
        default:
          n = Jo;
      }
      n = dp(n, ip.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ip(e, t) {
  if (Wo = -1, Qo = 0, G & 6)
    throw Error(N(327));
  var n = e.callbackNode;
  if (Gn() && e.callbackNode !== n)
    return null;
  var r = qo(e, e === Ce ? Oe : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = gi(e, r);
  else {
    t = r;
    var o = G;
    G |= 2;
    var i = up();
    (Ce !== e || Oe !== t) && (Ot = null, lr = ge() + 500, wn(e, t));
    do
      try {
        Rm();
        break;
      } catch (u) {
        lp(e, u);
      }
    while (!0);
    Oa(), hi.current = i, G = o, we !== null ? t = 0 : (Ce = null, Oe = 0, t = xe);
  }
  if (t !== 0) {
    if (t === 2 && (o = hu(e), o !== 0 && (r = o, t = bu(e, o))), t === 1)
      throw n = no, wn(e, 0), Wt(e, r), Qe(e, ge()), n;
    if (t === 6)
      Wt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Tm(o) && (t = gi(e, r), t === 2 && (i = hu(e), i !== 0 && (r = i, t = bu(e, i))), t === 1))
        throw n = no, wn(e, 0), Wt(e, r), Qe(e, ge()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          hn(e, be, Ot);
          break;
        case 3:
          if (Wt(e, r), (r & 130023424) === r && (t = ba + 500 - ge(), 10 < t)) {
            if (qo(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Me(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = xu(hn.bind(null, e, be, Ot), t);
            break;
          }
          hn(e, be, Ot);
          break;
        case 4:
          if (Wt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - mt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $m(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = xu(hn.bind(null, e, be, Ot), r);
            break;
          }
          hn(e, be, Ot);
          break;
        case 5:
          hn(e, be, Ot);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Qe(e, ge()), e.callbackNode === n ? ip.bind(null, e) : null;
}
function bu(e, t) {
  var n = Ir;
  return e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256), e = gi(e, t), e !== 2 && (t = be, be = n, t !== null && Vu(t)), e;
}
function Vu(e) {
  be === null ? be = e : be.push.apply(be, e);
}
function Tm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!yt(i(), o))
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
function Wt(e, t) {
  for (t &= ~Ua, t &= ~Mi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - mt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Sc(e) {
  if (G & 6)
    throw Error(N(327));
  Gn();
  var t = qo(e, 0);
  if (!(t & 1))
    return Qe(e, ge()), null;
  var n = gi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hu(e);
    r !== 0 && (t = r, n = bu(e, r));
  }
  if (n === 1)
    throw n = no, wn(e, 0), Wt(e, t), Qe(e, ge()), n;
  if (n === 6)
    throw Error(N(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, hn(e, be, Ot), Qe(e, ge()), null;
}
function Va(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    G = n, G === 0 && (lr = ge() + 500, zi && dn());
  }
}
function Pn(e) {
  Yt !== null && Yt.tag === 0 && !(G & 6) && Gn();
  var t = G;
  G |= 1;
  var n = lt.transition, r = Z;
  try {
    if (lt.transition = null, Z = 1, e)
      return e();
  } finally {
    Z = r, lt.transition = n, G = t, !(G & 6) && dn();
  }
}
function Ha() {
  Ke = bn.current, ie(bn);
}
function wn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, um(n)), we !== null)
    for (n = we.return; n !== null; ) {
      var r = n;
      switch (Ca(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && oi();
          break;
        case 3:
          or(), ie(He), ie(Ie), Ra();
          break;
        case 5:
          ja(r);
          break;
        case 4:
          or();
          break;
        case 13:
          ie(de);
          break;
        case 19:
          ie(de);
          break;
        case 10:
          Aa(r.type._context);
          break;
        case 22:
        case 23:
          Ha();
      }
      n = n.return;
    }
  if (Ce = e, we = e = nn(e.current, null), Oe = Ke = t, xe = 0, no = null, Ua = Mi = Cn = 0, be = Ir = null, gn !== null) {
    for (t = 0; t < gn.length; t++)
      if (n = gn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var l = i.next;
          i.next = o, r.next = l;
        }
        n.pending = r;
      }
    gn = null;
  }
  return e;
}
function lp(e, t) {
  do {
    var n = we;
    try {
      if (Oa(), bo.current = pi, di) {
        for (var r = he.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        di = !1;
      }
      if (En = 0, Ee = ke = he = null, zr = !1, qr = 0, Ba.current = null, n === null || n.return === null) {
        xe = 1, no = t, we = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, a = t;
        if (t = Oe, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var s = a, d = u, v = d.tag;
          if (!(d.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var p = d.alternate;
            p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var y = uc(l);
          if (y !== null) {
            y.flags &= -257, ac(y, l, u, i, t), y.mode & 1 && lc(i, s, t), t = y, a = s;
            var g = t.updateQueue;
            if (g === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(a), t.updateQueue = S;
            } else
              g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              lc(i, s, t), Wa();
              break e;
            }
            a = Error(N(426));
          }
        } else if (se && u.mode & 1) {
          var _ = uc(l);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), ac(_, l, u, i, t), Pa(ir(a, u));
            break e;
          }
        }
        i = a = ir(a, u), xe !== 4 && (xe = 2), Ir === null ? Ir = [i] : Ir.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = Vd(i, a, t);
              qs(i, f);
              break e;
            case 1:
              u = a;
              var c = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (en === null || !en.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var E = Hd(i, u, t);
                qs(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      sp(n);
    } catch (P) {
      t = P, we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function up() {
  var e = hi.current;
  return hi.current = pi, e === null ? pi : e;
}
function Wa() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4), Ce === null || !(Cn & 268435455) && !(Mi & 268435455) || Wt(Ce, Oe);
}
function gi(e, t) {
  var n = G;
  G |= 2;
  var r = up();
  (Ce !== e || Oe !== t) && (Ot = null, wn(e, t));
  do
    try {
      jm();
      break;
    } catch (o) {
      lp(e, o);
    }
  while (!0);
  if (Oa(), G = n, hi.current = r, we !== null)
    throw Error(N(261));
  return Ce = null, Oe = 0, xe;
}
function jm() {
  for (; we !== null; )
    ap(we);
}
function Rm() {
  for (; we !== null && !ov(); )
    ap(we);
}
function ap(e) {
  var t = fp(e.alternate, e, Ke);
  e.memoizedProps = e.pendingProps, t === null ? sp(e) : we = t, Ba.current = null;
}
function sp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = _m(n, t), n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        xe = 6, we = null;
        return;
      }
    } else if (n = Pm(n, t, Ke), n !== null) {
      we = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function hn(e, t, n) {
  var r = Z, o = lt.transition;
  try {
    lt.transition = null, Z = 1, zm(e, t, n, r);
  } finally {
    lt.transition = o, Z = r;
  }
  return null;
}
function zm(e, t, n, r) {
  do
    Gn();
  while (Yt !== null);
  if (G & 6)
    throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(N(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (hv(e, i), e === Ce && (we = Ce = null, Oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jo || (jo = !0, dp(Jo, function() {
    return Gn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = lt.transition, lt.transition = null;
    var l = Z;
    Z = 1;
    var u = G;
    G |= 4, Ba.current = null, Am(e, n), rp(n, e), em(Su), ei = !!wu, Su = wu = null, e.current = n, Nm(n), iv(), G = u, Z = l, lt.transition = i;
  } else
    e.current = n;
  if (jo && (jo = !1, Yt = e, mi = o), i = e.pendingLanes, i === 0 && (en = null), av(n.stateNode), Qe(e, ge()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (vi)
    throw vi = !1, e = Bu, Bu = null, e;
  return mi & 1 && e.tag !== 0 && Gn(), i = e.pendingLanes, i & 1 ? e === Uu ? Dr++ : (Dr = 0, Uu = e) : Dr = 0, dn(), null;
}
function Gn() {
  if (Yt !== null) {
    var e = bf(mi), t = lt.transition, n = Z;
    try {
      if (lt.transition = null, Z = 16 > e ? 16 : e, Yt === null)
        var r = !1;
      else {
        if (e = Yt, Yt = null, mi = 0, G & 6)
          throw Error(N(331));
        var o = G;
        for (G |= 4, L = e.current; L !== null; ) {
          var i = L, l = i.child;
          if (L.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (L = s; L !== null; ) {
                  var d = L;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(8, d, i);
                  }
                  var v = d.child;
                  if (v !== null)
                    v.return = d, L = v;
                  else
                    for (; L !== null; ) {
                      d = L;
                      var p = d.sibling, y = d.return;
                      if (ep(d), d === s) {
                        L = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = y, L = p;
                        break;
                      }
                      L = y;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var S = g.child;
                if (S !== null) {
                  g.child = null;
                  do {
                    var _ = S.sibling;
                    S.sibling = null, S = _;
                  } while (S !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null)
            l.return = i, L = l;
          else
            e:
              for (; L !== null; ) {
                if (i = L, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  f.return = i.return, L = f;
                  break e;
                }
                L = i.return;
              }
        }
        var c = e.current;
        for (L = c; L !== null; ) {
          l = L;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null)
            h.return = l, L = h;
          else
            e:
              for (l = c; L !== null; ) {
                if (u = L, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Di(9, u);
                    }
                  } catch (P) {
                    me(u, u.return, P);
                  }
                if (u === l) {
                  L = null;
                  break e;
                }
                var E = u.sibling;
                if (E !== null) {
                  E.return = u.return, L = E;
                  break e;
                }
                L = u.return;
              }
        }
        if (G = o, dn(), xt && typeof xt.onPostCommitFiberRoot == "function")
          try {
            xt.onPostCommitFiberRoot(Ni, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      Z = n, lt.transition = t;
    }
  }
  return !1;
}
function kc(e, t, n) {
  t = ir(n, t), t = Vd(e, t, 1), e = qt(e, t, 1), t = Me(), e !== null && (ao(e, 1, t), Qe(e, t));
}
function me(e, t, n) {
  if (e.tag === 3)
    kc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
          e = ir(n, e), e = Hd(t, e, 1), t = qt(t, e, 1), e = Me(), t !== null && (ao(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Lm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (Oe & n) === n && (xe === 4 || xe === 3 && (Oe & 130023424) === Oe && 500 > ge() - ba ? wn(e, 0) : Ua |= n), Qe(e, t);
}
function cp(e, t) {
  t === 0 && (e.mode & 1 ? (t = xo, xo <<= 1, !(xo & 130023424) && (xo = 4194304)) : t = 1);
  var n = Me();
  e = It(e, t), e !== null && (ao(e, t, n), Qe(e, n));
}
function Im(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), cp(e, n);
}
function Dm(e, t) {
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
      throw Error(N(314));
  }
  r !== null && r.delete(t), cp(e, n);
}
var fp;
fp = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || He.current)
      Ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ve = !1, Cm(e, t, n);
      Ve = !!(e.flags & 131072);
    }
  else
    Ve = !1, se && t.flags & 1048576 && hd(t, ui, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ho(e, t), e = t.pendingProps;
      var o = tr(t, Ie.current);
      Yn(t, n), o = La(null, t, r, e, o, n);
      var i = Ia();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, We(r) ? (i = !0, ii(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, $a(t), o.updater = Li, t.stateNode = o, o._reactInternals = t, Nu(t, r, e, n), t = ju(null, t, r, !0, i, n)) : (t.tag = 0, se && i && Ea(t), De(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ho(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Fm(r), e = dt(r, e), o) {
          case 0:
            t = Tu(null, t, r, e, n);
            break e;
          case 1:
            t = fc(null, t, r, e, n);
            break e;
          case 11:
            t = sc(null, t, r, e, n);
            break e;
          case 14:
            t = cc(null, t, r, dt(r.type, e), n);
            break e;
        }
        throw Error(N(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : dt(r, o), Tu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : dt(r, o), fc(e, t, r, o, n);
    case 3:
      e: {
        if (Yd(t), e === null)
          throw Error(N(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, yd(e, t), ci(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = ir(Error(N(423)), t), t = dc(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = ir(Error(N(424)), t), t = dc(e, t, r, n, o);
            break e;
          } else
            for (Ye = Jt(t.stateNode.containerInfo.firstChild), Ge = t, se = !0, ht = null, n = xd(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (nr(), r === o) {
            t = Dt(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ed(t), e === null && _u(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, ku(r, o) ? l = null : i !== null && ku(r, i) && (t.flags |= 32), Kd(e, t), De(e, t, l, n), t.child;
    case 6:
      return e === null && _u(t), null;
    case 13:
      return Gd(e, t, n);
    case 4:
      return Ta(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = rr(t, null, r, n) : De(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : dt(r, o), sc(e, t, r, o, n);
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, ne(ai, r._currentValue), r._currentValue = l, i !== null)
          if (yt(i.value, l)) {
            if (i.children === o.children && !He.current) {
              t = Dt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                l = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      a = jt(-1, n & -n), a.tag = 2;
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var d = s.pending;
                        d === null ? a.next = a : (a.next = d.next, d.next = a), s.pending = a;
                      }
                    }
                    i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Ou(
                      i.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10)
                l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (l = i.return, l === null)
                  throw Error(N(341));
                l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Ou(l, n, t), l = i.sibling;
              } else
                l = i.child;
              if (l !== null)
                l.return = i;
              else
                for (l = i; l !== null; ) {
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
        De(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Yn(t, n), o = ut(o), r = r(o), t.flags |= 1, De(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = dt(r, t.pendingProps), o = dt(r.type, o), cc(e, t, r, o, n);
    case 15:
      return Wd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : dt(r, o), Ho(e, t), t.tag = 1, We(r) ? (e = !0, ii(t)) : e = !1, Yn(t, n), Sd(t, r, o), Nu(t, r, o, n), ju(null, t, r, !0, e, n);
    case 19:
      return Xd(e, t, n);
    case 22:
      return Qd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function dp(e, t) {
  return Mf(e, t);
}
function Mm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function it(e, t, n, r) {
  return new Mm(e, t, n, r);
}
function Qa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Fm(e) {
  if (typeof e == "function")
    return Qa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === fa)
      return 11;
    if (e === da)
      return 14;
  }
  return 2;
}
function nn(e, t) {
  var n = e.alternate;
  return n === null ? (n = it(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ko(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    Qa(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case jn:
          return Sn(n.children, o, i, t);
        case ca:
          l = 8, o |= 8;
          break;
        case ql:
          return e = it(12, n, t, o | 2), e.elementType = ql, e.lanes = i, e;
        case eu:
          return e = it(13, n, t, o), e.elementType = eu, e.lanes = i, e;
        case tu:
          return e = it(19, n, t, o), e.elementType = tu, e.lanes = i, e;
        case kf:
          return Fi(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case wf:
                l = 10;
                break e;
              case Sf:
                l = 9;
                break e;
              case fa:
                l = 11;
                break e;
              case da:
                l = 14;
                break e;
              case bt:
                l = 16, r = null;
                break e;
            }
          throw Error(N(130, e == null ? e : typeof e, ""));
      }
  return t = it(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Sn(e, t, n, r) {
  return e = it(7, e, r, t), e.lanes = n, e;
}
function Fi(e, t, n, r) {
  return e = it(22, e, r, t), e.elementType = kf, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Bl(e, t, n) {
  return e = it(6, e, null, t), e.lanes = n, e;
}
function Ul(e, t, n) {
  return t = it(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Bm(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = kl(0), this.expirationTimes = kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Ka(e, t, n, r, o, i, l, u, a) {
  return e = new Bm(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = it(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $a(i), e;
}
function Um(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Tn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function pp(e) {
  if (!e)
    return un;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1)
      throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n))
      return dd(e, n, t);
  }
  return t;
}
function hp(e, t, n, r, o, i, l, u, a) {
  return e = Ka(n, r, !0, e, o, i, l, u, a), e.context = pp(null), n = e.current, r = Me(), o = tn(n), i = jt(r, o), i.callback = t ?? null, qt(n, i, o), e.current.lanes = o, ao(e, o, r), Qe(e, r), e;
}
function Bi(e, t, n, r) {
  var o = t.current, i = Me(), l = tn(o);
  return n = pp(n), t.context === null ? t.context = n : t.pendingContext = n, t = jt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = qt(o, t, l), e !== null && (gt(e, o, l, i), Uo(e, o, l)), l;
}
function yi(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ya(e, t) {
  xc(e, t), (e = e.alternate) && xc(e, t);
}
function bm() {
  return null;
}
var vp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ga(e) {
  this._internalRoot = e;
}
Ui.prototype.render = Ga.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(N(409));
  Bi(e, t, null, null);
};
Ui.prototype.unmount = Ga.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Pn(function() {
      Bi(null, e, null, null);
    }), t[Lt] = null;
  }
};
function Ui(e) {
  this._internalRoot = e;
}
Ui.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Wf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++)
      ;
    Ht.splice(n, 0, e), n === 0 && Kf(e);
  }
};
function Xa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function bi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ec() {
}
function Vm(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var s = yi(l);
        i.call(s);
      };
    }
    var l = hp(t, r, e, 0, null, !1, !1, "", Ec);
    return e._reactRootContainer = l, e[Lt] = l.current, Yr(e.nodeType === 8 ? e.parentNode : e), Pn(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var s = yi(a);
      u.call(s);
    };
  }
  var a = Ka(e, 0, !1, null, null, !1, !1, "", Ec);
  return e._reactRootContainer = a, e[Lt] = a.current, Yr(e.nodeType === 8 ? e.parentNode : e), Pn(function() {
    Bi(t, a, n, r);
  }), a;
}
function Vi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var a = yi(l);
        u.call(a);
      };
    }
    Bi(t, l, e, o);
  } else
    l = Vm(n, t, e, o, r);
  return yi(l);
}
Vf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 && (va(t, n | 1), Qe(t, ge()), !(G & 6) && (lr = ge() + 500, dn()));
      }
      break;
    case 13:
      Pn(function() {
        var r = It(e, 1);
        if (r !== null) {
          var o = Me();
          gt(r, e, 1, o);
        }
      }), Ya(e, 1);
  }
};
ma = function(e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = Me();
      gt(t, e, 134217728, n);
    }
    Ya(e, 134217728);
  }
};
Hf = function(e) {
  if (e.tag === 13) {
    var t = tn(e), n = It(e, t);
    if (n !== null) {
      var r = Me();
      gt(n, e, t, r);
    }
    Ya(e, t);
  }
};
Wf = function() {
  return Z;
};
Qf = function(e, t) {
  var n = Z;
  try {
    return Z = e, t();
  } finally {
    Z = n;
  }
};
fu = function(e, t, n) {
  switch (t) {
    case "input":
      if (ou(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ri(r);
            if (!o)
              throw Error(N(90));
            Ef(r), ou(r, o);
          }
        }
      }
      break;
    case "textarea":
      Pf(e, n);
      break;
    case "select":
      t = n.value, t != null && Hn(e, !!n.multiple, t, !1);
  }
};
jf = Va;
Rf = Pn;
var Hm = { usingClientEntryPoint: !1, Events: [co, In, Ri, $f, Tf, Va] }, Er = { findFiberByHostInstance: mn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Wm = { bundleType: Er.bundleType, version: Er.version, rendererPackageName: Er.rendererPackageName, rendererConfig: Er.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = If(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Er.findFiberByHostInstance || bm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ro.isDisabled && Ro.supportsFiber)
    try {
      Ni = Ro.inject(Wm), xt = Ro;
    } catch {
    }
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hm;
Je.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xa(t))
    throw Error(N(200));
  return Um(e, t, null, n);
};
Je.createRoot = function(e, t) {
  if (!Xa(e))
    throw Error(N(299));
  var n = !1, r = "", o = vp;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ka(e, 1, !1, null, null, n, !1, r, o), e[Lt] = t.current, Yr(e.nodeType === 8 ? e.parentNode : e), new Ga(t);
};
Je.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
  return e = If(t), e = e === null ? null : e.stateNode, e;
};
Je.flushSync = function(e) {
  return Pn(e);
};
Je.hydrate = function(e, t, n) {
  if (!bi(t))
    throw Error(N(200));
  return Vi(null, e, t, !0, n);
};
Je.hydrateRoot = function(e, t, n) {
  if (!Xa(e))
    throw Error(N(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = vp;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = hp(t, null, e, 1, n ?? null, o, !1, i, l), e[Lt] = t.current, Yr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Ui(t);
};
Je.render = function(e, t, n) {
  if (!bi(t))
    throw Error(N(200));
  return Vi(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function(e) {
  if (!bi(e))
    throw Error(N(40));
  return e._reactRootContainer ? (Pn(function() {
    Vi(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Lt] = null;
    });
  }), !0) : !1;
};
Je.unstable_batchedUpdates = Va;
Je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!bi(n))
    throw Error(N(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(N(38));
  return Vi(e, t, n, !1, r);
};
Je.version = "18.2.0-next-9e3b772b8-20220608";
function mp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mp);
    } catch (e) {
      console.error(e);
    }
}
mp(), hf.exports = Je;
var Za = hf.exports;
const Q0 = /* @__PURE__ */ Oi(Za);
var Qm, Cc = Za;
Qm = Cc.createRoot, Cc.hydrateRoot;
var gp = { exports: {} }, yp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur = pe;
function Km(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ym = typeof Object.is == "function" ? Object.is : Km, Gm = ur.useState, Xm = ur.useEffect, Zm = ur.useLayoutEffect, Jm = ur.useDebugValue;
function qm(e, t) {
  var n = t(), r = Gm({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return Zm(function() {
    o.value = n, o.getSnapshot = t, bl(o) && i({ inst: o });
  }, [e, n, t]), Xm(function() {
    return bl(o) && i({ inst: o }), e(function() {
      bl(o) && i({ inst: o });
    });
  }, [e]), Jm(n), n;
}
function bl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ym(e, n);
  } catch {
    return !0;
  }
}
function eg(e, t) {
  return t();
}
var tg = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? eg : qm;
yp.useSyncExternalStore = ur.useSyncExternalStore !== void 0 ? ur.useSyncExternalStore : tg;
gp.exports = yp;
var ng = gp.exports, wp = { exports: {} }, Sp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hi = pe, rg = ng;
function og(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ig = typeof Object.is == "function" ? Object.is : og, lg = rg.useSyncExternalStore, ug = Hi.useRef, ag = Hi.useEffect, sg = Hi.useMemo, cg = Hi.useDebugValue;
Sp.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = ug(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else
    l = i.current;
  i = sg(function() {
    function a(y) {
      if (!s) {
        if (s = !0, d = y, y = r(y), o !== void 0 && l.hasValue) {
          var g = l.value;
          if (o(g, y))
            return v = g;
        }
        return v = y;
      }
      if (g = v, ig(d, y))
        return g;
      var S = r(y);
      return o !== void 0 && o(g, S) ? g : (d = y, v = S);
    }
    var s = !1, d, v, p = n === void 0 ? null : n;
    return [function() {
      return a(t());
    }, p === null ? void 0 : function() {
      return a(p());
    }];
  }, [t, n, r, o]);
  var u = lg(e, i[0], i[1]);
  return ag(function() {
    l.hasValue = !0, l.value = u;
  }, [u]), cg(u), u;
};
wp.exports = Sp;
var fg = wp.exports;
function dg(e) {
  e();
}
let kp = dg;
const pg = (e) => kp = e, hg = () => kp, Pc = Symbol.for("react-redux-context"), _c = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function vg() {
  var e;
  if (!pe.createContext)
    return {};
  const t = (e = _c[Pc]) != null ? e : _c[Pc] = /* @__PURE__ */ new Map();
  let n = t.get(pe.createContext);
  return n || (n = pe.createContext(null), t.set(pe.createContext, n)), n;
}
const an = /* @__PURE__ */ vg();
function Ja(e = an) {
  return function() {
    return pe.useContext(e);
  };
}
const xp = /* @__PURE__ */ Ja(), mg = () => {
  throw new Error("uSES not initialized!");
};
let Ep = mg;
const gg = (e) => {
  Ep = e;
}, yg = (e, t) => e === t;
function wg(e = an) {
  const t = e === an ? xp : Ja(e);
  return function(r, o = {}) {
    const {
      equalityFn: i = yg,
      stabilityCheck: l = void 0,
      noopCheck: u = void 0
    } = typeof o == "function" ? {
      equalityFn: o
    } : o, {
      store: a,
      subscription: s,
      getServerState: d,
      stabilityCheck: v,
      noopCheck: p
    } = t();
    pe.useRef(!0);
    const y = pe.useCallback({
      [r.name](S) {
        return r(S);
      }
    }[r.name], [r, v, l]), g = Ep(s.addNestedSub, a.getState, d || a.getState, y, i);
    return pe.useDebugValue(g), g;
  };
}
const Cp = /* @__PURE__ */ wg();
function Oc() {
  return Oc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Oc.apply(this, arguments);
}
var Pp = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe = typeof Symbol == "function" && Symbol.for, qa = Pe ? Symbol.for("react.element") : 60103, es = Pe ? Symbol.for("react.portal") : 60106, Wi = Pe ? Symbol.for("react.fragment") : 60107, Qi = Pe ? Symbol.for("react.strict_mode") : 60108, Ki = Pe ? Symbol.for("react.profiler") : 60114, Yi = Pe ? Symbol.for("react.provider") : 60109, Gi = Pe ? Symbol.for("react.context") : 60110, ts = Pe ? Symbol.for("react.async_mode") : 60111, Xi = Pe ? Symbol.for("react.concurrent_mode") : 60111, Zi = Pe ? Symbol.for("react.forward_ref") : 60112, Ji = Pe ? Symbol.for("react.suspense") : 60113, Sg = Pe ? Symbol.for("react.suspense_list") : 60120, qi = Pe ? Symbol.for("react.memo") : 60115, el = Pe ? Symbol.for("react.lazy") : 60116, kg = Pe ? Symbol.for("react.block") : 60121, xg = Pe ? Symbol.for("react.fundamental") : 60117, Eg = Pe ? Symbol.for("react.responder") : 60118, Cg = Pe ? Symbol.for("react.scope") : 60119;
function et(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case qa:
        switch (e = e.type, e) {
          case ts:
          case Xi:
          case Wi:
          case Ki:
          case Qi:
          case Ji:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Gi:
              case Zi:
              case el:
              case qi:
              case Yi:
                return e;
              default:
                return t;
            }
        }
      case es:
        return t;
    }
  }
}
function _p(e) {
  return et(e) === Xi;
}
J.AsyncMode = ts;
J.ConcurrentMode = Xi;
J.ContextConsumer = Gi;
J.ContextProvider = Yi;
J.Element = qa;
J.ForwardRef = Zi;
J.Fragment = Wi;
J.Lazy = el;
J.Memo = qi;
J.Portal = es;
J.Profiler = Ki;
J.StrictMode = Qi;
J.Suspense = Ji;
J.isAsyncMode = function(e) {
  return _p(e) || et(e) === ts;
};
J.isConcurrentMode = _p;
J.isContextConsumer = function(e) {
  return et(e) === Gi;
};
J.isContextProvider = function(e) {
  return et(e) === Yi;
};
J.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qa;
};
J.isForwardRef = function(e) {
  return et(e) === Zi;
};
J.isFragment = function(e) {
  return et(e) === Wi;
};
J.isLazy = function(e) {
  return et(e) === el;
};
J.isMemo = function(e) {
  return et(e) === qi;
};
J.isPortal = function(e) {
  return et(e) === es;
};
J.isProfiler = function(e) {
  return et(e) === Ki;
};
J.isStrictMode = function(e) {
  return et(e) === Qi;
};
J.isSuspense = function(e) {
  return et(e) === Ji;
};
J.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Wi || e === Xi || e === Ki || e === Qi || e === Ji || e === Sg || typeof e == "object" && e !== null && (e.$$typeof === el || e.$$typeof === qi || e.$$typeof === Yi || e.$$typeof === Gi || e.$$typeof === Zi || e.$$typeof === xg || e.$$typeof === Eg || e.$$typeof === Cg || e.$$typeof === kg);
};
J.typeOf = et;
Pp.exports = J;
var Pg = Pp.exports, ns = Pg, _g = {
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
}, Og = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ag = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Op = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, rs = {};
rs[ns.ForwardRef] = Ag;
rs[ns.Memo] = Op;
function Ac(e) {
  return ns.isMemo(e) ? Op : rs[e.$$typeof] || _g;
}
var Ng = Object.defineProperty, $g = Object.getOwnPropertyNames, Nc = Object.getOwnPropertySymbols, Tg = Object.getOwnPropertyDescriptor, jg = Object.getPrototypeOf, $c = Object.prototype;
function Ap(e, t, n) {
  if (typeof t != "string") {
    if ($c) {
      var r = jg(t);
      r && r !== $c && Ap(e, r, n);
    }
    var o = $g(t);
    Nc && (o = o.concat(Nc(t)));
    for (var i = Ac(e), l = Ac(t), u = 0; u < o.length; ++u) {
      var a = o[u];
      if (!Og[a] && !(n && n[a]) && !(l && l[a]) && !(i && i[a])) {
        var s = Tg(t, a);
        try {
          Ng(e, a, s);
        } catch {
        }
      }
    }
  }
  return e;
}
var Rg = Ap;
const zg = /* @__PURE__ */ Oi(Rg);
var Np = { exports: {} }, q = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var os = Symbol.for("react.element"), is = Symbol.for("react.portal"), tl = Symbol.for("react.fragment"), nl = Symbol.for("react.strict_mode"), rl = Symbol.for("react.profiler"), ol = Symbol.for("react.provider"), il = Symbol.for("react.context"), Lg = Symbol.for("react.server_context"), ll = Symbol.for("react.forward_ref"), ul = Symbol.for("react.suspense"), al = Symbol.for("react.suspense_list"), sl = Symbol.for("react.memo"), cl = Symbol.for("react.lazy"), Ig = Symbol.for("react.offscreen"), $p;
$p = Symbol.for("react.module.reference");
function st(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case os:
        switch (e = e.type, e) {
          case tl:
          case rl:
          case nl:
          case ul:
          case al:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Lg:
              case il:
              case ll:
              case cl:
              case sl:
              case ol:
                return e;
              default:
                return t;
            }
        }
      case is:
        return t;
    }
  }
}
q.ContextConsumer = il;
q.ContextProvider = ol;
q.Element = os;
q.ForwardRef = ll;
q.Fragment = tl;
q.Lazy = cl;
q.Memo = sl;
q.Portal = is;
q.Profiler = rl;
q.StrictMode = nl;
q.Suspense = ul;
q.SuspenseList = al;
q.isAsyncMode = function() {
  return !1;
};
q.isConcurrentMode = function() {
  return !1;
};
q.isContextConsumer = function(e) {
  return st(e) === il;
};
q.isContextProvider = function(e) {
  return st(e) === ol;
};
q.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === os;
};
q.isForwardRef = function(e) {
  return st(e) === ll;
};
q.isFragment = function(e) {
  return st(e) === tl;
};
q.isLazy = function(e) {
  return st(e) === cl;
};
q.isMemo = function(e) {
  return st(e) === sl;
};
q.isPortal = function(e) {
  return st(e) === is;
};
q.isProfiler = function(e) {
  return st(e) === rl;
};
q.isStrictMode = function(e) {
  return st(e) === nl;
};
q.isSuspense = function(e) {
  return st(e) === ul;
};
q.isSuspenseList = function(e) {
  return st(e) === al;
};
q.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === tl || e === rl || e === nl || e === ul || e === al || e === Ig || typeof e == "object" && e !== null && (e.$$typeof === cl || e.$$typeof === sl || e.$$typeof === ol || e.$$typeof === il || e.$$typeof === ll || e.$$typeof === $p || e.getModuleId !== void 0);
};
q.typeOf = st;
Np.exports = q;
var Tp = Np.exports;
function Dg() {
  const e = hg();
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
      let o = !0, i = n = {
        callback: r,
        next: null,
        prev: n
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !o || t === null || (o = !1, i.next ? i.next.prev = i.prev : n = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const Tc = {
  notify() {
  },
  get: () => []
};
function Mg(e, t) {
  let n, r = Tc, o = 0, i = !1;
  function l(S) {
    d();
    const _ = r.subscribe(S);
    let f = !1;
    return () => {
      f || (f = !0, _(), v());
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
  function d() {
    o++, n || (n = t ? t.addNestedSub(a) : e.subscribe(a), r = Dg());
  }
  function v() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Tc);
  }
  function p() {
    i || (i = !0, d());
  }
  function y() {
    i && (i = !1, v());
  }
  const g = {
    addNestedSub: l,
    notifyNestedSubs: u,
    handleChangeWrapper: a,
    isSubscribed: s,
    trySubscribe: p,
    tryUnsubscribe: y,
    getListeners: () => r
  };
  return g;
}
const Fg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Bg = Fg ? pe.useLayoutEffect : pe.useEffect;
function K0({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const l = pe.useMemo(() => {
    const s = Mg(e);
    return {
      store: e,
      subscription: s,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), u = pe.useMemo(() => e.getState(), [e]);
  Bg(() => {
    const {
      subscription: s
    } = l;
    return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), u !== e.getState() && s.notifyNestedSubs(), () => {
      s.tryUnsubscribe(), s.onStateChange = void 0;
    };
  }, [l, u]);
  const a = t || an;
  return /* @__PURE__ */ pe.createElement(a.Provider, {
    value: l
  }, n);
}
function jp(e = an) {
  const t = (
    // @ts-ignore
    e === an ? xp : (
      // @ts-ignore
      Ja(e)
    )
  );
  return function() {
    const {
      store: r
    } = t();
    return r;
  };
}
const Ug = /* @__PURE__ */ jp();
function bg(e = an) {
  const t = (
    // @ts-ignore
    e === an ? Ug : jp(e)
  );
  return function() {
    return t().dispatch;
  };
}
const Vg = /* @__PURE__ */ bg();
gg(fg.useSyncExternalStoreWithSelector);
pg(Za.unstable_batchedUpdates);
function vt(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(o) {
    return "'" + o + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function sn(e) {
  return !!e && !!e[ae];
}
function Mt(e) {
  var t;
  return !!e && (function(n) {
    if (!n || typeof n != "object")
      return !1;
    var r = Object.getPrototypeOf(n);
    if (r === null)
      return !0;
    var o = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
    return o === Object || typeof o == "function" && Function.toString.call(o) === Jg;
  }(e) || Array.isArray(e) || !!e[Mc] || !!(!((t = e.constructor) === null || t === void 0) && t[Mc]) || ls(e) || us(e));
}
function _n(e, t, n) {
  n === void 0 && (n = !1), hr(e) === 0 ? (n ? Object.keys : Zn)(e).forEach(function(r) {
    n && typeof r == "symbol" || t(r, e[r], e);
  }) : e.forEach(function(r, o) {
    return t(o, r, e);
  });
}
function hr(e) {
  var t = e[ae];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : ls(e) ? 2 : us(e) ? 3 : 0;
}
function Xn(e, t) {
  return hr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Hg(e, t) {
  return hr(e) === 2 ? e.get(t) : e[t];
}
function Rp(e, t, n) {
  var r = hr(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function zp(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function ls(e) {
  return Xg && e instanceof Map;
}
function us(e) {
  return Zg && e instanceof Set;
}
function vn(e) {
  return e.o || e.t;
}
function as(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = Ip(e);
  delete t[ae];
  for (var n = Zn(t), r = 0; r < n.length; r++) {
    var o = n[r], i = t[o];
    i.writable === !1 && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (t[o] = { configurable: !0, writable: !0, enumerable: i.enumerable, value: e[o] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function ss(e, t) {
  return t === void 0 && (t = !1), cs(e) || sn(e) || !Mt(e) || (hr(e) > 1 && (e.set = e.add = e.clear = e.delete = Wg), Object.freeze(e), t && _n(e, function(n, r) {
    return ss(r, !0);
  }, !0)), e;
}
function Wg() {
  vt(2);
}
function cs(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Ct(e) {
  var t = Ku[e];
  return t || vt(18, e), t;
}
function Qg(e, t) {
  Ku[e] || (Ku[e] = t);
}
function Hu() {
  return ro;
}
function Vl(e, t) {
  t && (Ct("Patches"), e.u = [], e.s = [], e.v = t);
}
function wi(e) {
  Wu(e), e.p.forEach(Kg), e.p = null;
}
function Wu(e) {
  e === ro && (ro = e.l);
}
function jc(e) {
  return ro = { p: [], l: ro, h: e, m: !0, _: 0 };
}
function Kg(e) {
  var t = e[ae];
  t.i === 0 || t.i === 1 ? t.j() : t.g = !0;
}
function Hl(e, t) {
  t._ = t.p.length;
  var n = t.p[0], r = e !== void 0 && e !== n;
  return t.h.O || Ct("ES5").S(t, e, r), r ? (n[ae].P && (wi(t), vt(4)), Mt(e) && (e = Si(t, e), t.l || ki(t, e)), t.u && Ct("Patches").M(n[ae].t, e, t.u, t.s)) : e = Si(t, n, []), wi(t), t.u && t.v(t.u, t.s), e !== Lp ? e : void 0;
}
function Si(e, t, n) {
  if (cs(t))
    return t;
  var r = t[ae];
  if (!r)
    return _n(t, function(u, a) {
      return Rc(e, r, t, u, a, n);
    }, !0), t;
  if (r.A !== e)
    return t;
  if (!r.P)
    return ki(e, r.t, !0), r.t;
  if (!r.I) {
    r.I = !0, r.A._--;
    var o = r.i === 4 || r.i === 5 ? r.o = as(r.k) : r.o, i = o, l = !1;
    r.i === 3 && (i = new Set(o), o.clear(), l = !0), _n(i, function(u, a) {
      return Rc(e, r, o, u, a, n, l);
    }), ki(e, o, !1), n && e.u && Ct("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function Rc(e, t, n, r, o, i, l) {
  if (sn(o)) {
    var u = Si(e, o, i && t && t.i !== 3 && !Xn(t.R, r) ? i.concat(r) : void 0);
    if (Rp(n, r, u), !sn(u))
      return;
    e.m = !1;
  } else
    l && n.add(o);
  if (Mt(o) && !cs(o)) {
    if (!e.h.D && e._ < 1)
      return;
    Si(e, o), t && t.A.l || ki(e, o);
  }
}
function ki(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && ss(t, n);
}
function Wl(e, t) {
  var n = e[ae];
  return (n ? vn(n) : e)[t];
}
function zc(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r)
        return r;
      n = Object.getPrototypeOf(n);
    }
}
function Qt(e) {
  e.P || (e.P = !0, e.l && Qt(e.l));
}
function Ql(e) {
  e.o || (e.o = as(e.t));
}
function Qu(e, t, n) {
  var r = ls(t) ? Ct("MapSet").F(t, n) : us(t) ? Ct("MapSet").T(t, n) : e.O ? function(o, i) {
    var l = Array.isArray(o), u = { i: l ? 1 : 0, A: i ? i.A : Hu(), P: !1, I: !1, R: {}, l: i, t: o, k: null, o: null, j: null, C: !1 }, a = u, s = oo;
    l && (a = [u], s = Ar);
    var d = Proxy.revocable(a, s), v = d.revoke, p = d.proxy;
    return u.k = p, u.j = v, p;
  }(t, n) : Ct("ES5").J(t, n);
  return (n ? n.A : Hu()).p.push(r), r;
}
function Yg(e) {
  return sn(e) || vt(22, e), function t(n) {
    if (!Mt(n))
      return n;
    var r, o = n[ae], i = hr(n);
    if (o) {
      if (!o.P && (o.i < 4 || !Ct("ES5").K(o)))
        return o.t;
      o.I = !0, r = Lc(n, i), o.I = !1;
    } else
      r = Lc(n, i);
    return _n(r, function(l, u) {
      o && Hg(o.t, l) === u || Rp(r, l, t(u));
    }), i === 3 ? new Set(r) : r;
  }(e);
}
function Lc(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return as(e);
}
function Gg() {
  function e(i, l) {
    var u = o[i];
    return u ? u.enumerable = l : o[i] = u = { configurable: !0, enumerable: l, get: function() {
      var a = this[ae];
      return oo.get(a, i);
    }, set: function(a) {
      var s = this[ae];
      oo.set(s, i, a);
    } }, u;
  }
  function t(i) {
    for (var l = i.length - 1; l >= 0; l--) {
      var u = i[l][ae];
      if (!u.P)
        switch (u.i) {
          case 5:
            r(u) && Qt(u);
            break;
          case 4:
            n(u) && Qt(u);
        }
    }
  }
  function n(i) {
    for (var l = i.t, u = i.k, a = Zn(u), s = a.length - 1; s >= 0; s--) {
      var d = a[s];
      if (d !== ae) {
        var v = l[d];
        if (v === void 0 && !Xn(l, d))
          return !0;
        var p = u[d], y = p && p[ae];
        if (y ? y.t !== v : !zp(p, v))
          return !0;
      }
    }
    var g = !!l[ae];
    return a.length !== Zn(l).length + (g ? 0 : 1);
  }
  function r(i) {
    var l = i.k;
    if (l.length !== i.t.length)
      return !0;
    var u = Object.getOwnPropertyDescriptor(l, l.length - 1);
    if (u && !u.get)
      return !0;
    for (var a = 0; a < l.length; a++)
      if (!l.hasOwnProperty(a))
        return !0;
    return !1;
  }
  var o = {};
  Qg("ES5", { J: function(i, l) {
    var u = Array.isArray(i), a = function(d, v) {
      if (d) {
        for (var p = Array(v.length), y = 0; y < v.length; y++)
          Object.defineProperty(p, "" + y, e(y, !0));
        return p;
      }
      var g = Ip(v);
      delete g[ae];
      for (var S = Zn(g), _ = 0; _ < S.length; _++) {
        var f = S[_];
        g[f] = e(f, d || !!g[f].enumerable);
      }
      return Object.create(Object.getPrototypeOf(v), g);
    }(u, i), s = { i: u ? 5 : 4, A: l ? l.A : Hu(), P: !1, I: !1, R: {}, l, t: i, k: a, o: null, g: !1, C: !1 };
    return Object.defineProperty(a, ae, { value: s, writable: !0 }), a;
  }, S: function(i, l, u) {
    u ? sn(l) && l[ae].A === i && t(i.p) : (i.u && function a(s) {
      if (s && typeof s == "object") {
        var d = s[ae];
        if (d) {
          var v = d.t, p = d.k, y = d.R, g = d.i;
          if (g === 4)
            _n(p, function(h) {
              h !== ae && (v[h] !== void 0 || Xn(v, h) ? y[h] || a(p[h]) : (y[h] = !0, Qt(d)));
            }), _n(v, function(h) {
              p[h] !== void 0 || Xn(p, h) || (y[h] = !1, Qt(d));
            });
          else if (g === 5) {
            if (r(d) && (Qt(d), y.length = !0), p.length < v.length)
              for (var S = p.length; S < v.length; S++)
                y[S] = !1;
            else
              for (var _ = v.length; _ < p.length; _++)
                y[_] = !0;
            for (var f = Math.min(p.length, v.length), c = 0; c < f; c++)
              p.hasOwnProperty(c) || (y[c] = !0), y[c] === void 0 && a(p[c]);
          }
        }
      }
    }(i.p[0]), t(i.p));
  }, K: function(i) {
    return i.i === 4 ? n(i) : r(i);
  } });
}
var Ic, ro, fs = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Xg = typeof Map < "u", Zg = typeof Set < "u", Dc = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Lp = fs ? Symbol.for("immer-nothing") : ((Ic = {})["immer-nothing"] = !0, Ic), Mc = fs ? Symbol.for("immer-draftable") : "__$immer_draftable", ae = fs ? Symbol.for("immer-state") : "__$immer_state", Jg = "" + Object.prototype.constructor, Zn = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, Ip = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return Zn(e).forEach(function(n) {
    t[n] = Object.getOwnPropertyDescriptor(e, n);
  }), t;
}, Ku = {}, oo = { get: function(e, t) {
  if (t === ae)
    return e;
  var n = vn(e);
  if (!Xn(n, t))
    return function(o, i, l) {
      var u, a = zc(i, l);
      return a ? "value" in a ? a.value : (u = a.get) === null || u === void 0 ? void 0 : u.call(o.k) : void 0;
    }(e, n, t);
  var r = n[t];
  return e.I || !Mt(r) ? r : r === Wl(e.t, t) ? (Ql(e), e.o[t] = Qu(e.A.h, r, e)) : r;
}, has: function(e, t) {
  return t in vn(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(vn(e));
}, set: function(e, t, n) {
  var r = zc(vn(e), t);
  if (r != null && r.set)
    return r.set.call(e.k, n), !0;
  if (!e.P) {
    var o = Wl(vn(e), t), i = o == null ? void 0 : o[ae];
    if (i && i.t === n)
      return e.o[t] = n, e.R[t] = !1, !0;
    if (zp(n, o) && (n !== void 0 || Xn(e.t, t)))
      return !0;
    Ql(e), Qt(e);
  }
  return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return Wl(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, Ql(e), Qt(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var n = vn(e), r = Reflect.getOwnPropertyDescriptor(n, t);
  return r && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: r.enumerable, value: n[t] };
}, defineProperty: function() {
  vt(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  vt(12);
} }, Ar = {};
_n(oo, function(e, t) {
  Ar[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Ar.deleteProperty = function(e, t) {
  return Ar.set.call(this, e, t, void 0);
}, Ar.set = function(e, t, n) {
  return oo.set.call(this, e[0], t, n, e[0]);
};
var qg = function() {
  function e(n) {
    var r = this;
    this.O = Dc, this.D = !0, this.produce = function(o, i, l) {
      if (typeof o == "function" && typeof i != "function") {
        var u = i;
        i = o;
        var a = r;
        return function(S) {
          var _ = this;
          S === void 0 && (S = u);
          for (var f = arguments.length, c = Array(f > 1 ? f - 1 : 0), h = 1; h < f; h++)
            c[h - 1] = arguments[h];
          return a.produce(S, function(E) {
            var P;
            return (P = i).call.apply(P, [_, E].concat(c));
          });
        };
      }
      var s;
      if (typeof i != "function" && vt(6), l !== void 0 && typeof l != "function" && vt(7), Mt(o)) {
        var d = jc(r), v = Qu(r, o, void 0), p = !0;
        try {
          s = i(v), p = !1;
        } finally {
          p ? wi(d) : Wu(d);
        }
        return typeof Promise < "u" && s instanceof Promise ? s.then(function(S) {
          return Vl(d, l), Hl(S, d);
        }, function(S) {
          throw wi(d), S;
        }) : (Vl(d, l), Hl(s, d));
      }
      if (!o || typeof o != "object") {
        if ((s = i(o)) === void 0 && (s = o), s === Lp && (s = void 0), r.D && ss(s, !0), l) {
          var y = [], g = [];
          Ct("Patches").M(o, s, y, g), l(y, g);
        }
        return s;
      }
      vt(21, o);
    }, this.produceWithPatches = function(o, i) {
      if (typeof o == "function")
        return function(s) {
          for (var d = arguments.length, v = Array(d > 1 ? d - 1 : 0), p = 1; p < d; p++)
            v[p - 1] = arguments[p];
          return r.produceWithPatches(s, function(y) {
            return o.apply(void 0, [y].concat(v));
          });
        };
      var l, u, a = r.produce(o, i, function(s, d) {
        l = s, u = d;
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then(function(s) {
        return [s, l, u];
      }) : [a, l, u];
    }, typeof (n == null ? void 0 : n.useProxies) == "boolean" && this.setUseProxies(n.useProxies), typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(n) {
    Mt(n) || vt(8), sn(n) && (n = Yg(n));
    var r = jc(this), o = Qu(this, n, void 0);
    return o[ae].C = !0, Wu(r), o;
  }, t.finishDraft = function(n, r) {
    var o = n && n[ae], i = o.A;
    return Vl(i, r), Hl(void 0, i);
  }, t.setAutoFreeze = function(n) {
    this.D = n;
  }, t.setUseProxies = function(n) {
    n && !Dc && vt(20), this.O = n;
  }, t.applyPatches = function(n, r) {
    var o;
    for (o = r.length - 1; o >= 0; o--) {
      var i = r[o];
      if (i.path.length === 0 && i.op === "replace") {
        n = i.value;
        break;
      }
    }
    o > -1 && (r = r.slice(o + 1));
    var l = Ct("Patches").$;
    return sn(n) ? l(n, r) : this.produce(n, function(u) {
      return l(u, r);
    });
  }, e;
}(), Ze = new qg(), Dp = Ze.produce;
Ze.produceWithPatches.bind(Ze);
Ze.setAutoFreeze.bind(Ze);
Ze.setUseProxies.bind(Ze);
Ze.applyPatches.bind(Ze);
Ze.createDraft.bind(Ze);
Ze.finishDraft.bind(Ze);
function io(e) {
  "@babel/helpers - typeof";
  return io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, io(e);
}
function ey(e, t) {
  if (io(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (io(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ty(e) {
  var t = ey(e, "string");
  return io(t) == "symbol" ? t : String(t);
}
function ny(e, t, n) {
  return t = ty(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Fc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Bc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fc(Object(n), !0).forEach(function(r) {
      ny(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Re(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Uc = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Kl = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, xi = {
  INIT: "@@redux/INIT" + Kl(),
  REPLACE: "@@redux/REPLACE" + Kl(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Kl();
  }
};
function ry(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Mp(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Re(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Re(1));
    return n(Mp)(e, t);
  }
  if (typeof e != "function")
    throw new Error(Re(2));
  var o = e, i = t, l = [], u = l, a = !1;
  function s() {
    u === l && (u = l.slice());
  }
  function d() {
    if (a)
      throw new Error(Re(3));
    return i;
  }
  function v(S) {
    if (typeof S != "function")
      throw new Error(Re(4));
    if (a)
      throw new Error(Re(5));
    var _ = !0;
    return s(), u.push(S), function() {
      if (_) {
        if (a)
          throw new Error(Re(6));
        _ = !1, s();
        var c = u.indexOf(S);
        u.splice(c, 1), l = null;
      }
    };
  }
  function p(S) {
    if (!ry(S))
      throw new Error(Re(7));
    if (typeof S.type > "u")
      throw new Error(Re(8));
    if (a)
      throw new Error(Re(9));
    try {
      a = !0, i = o(i, S);
    } finally {
      a = !1;
    }
    for (var _ = l = u, f = 0; f < _.length; f++) {
      var c = _[f];
      c();
    }
    return S;
  }
  function y(S) {
    if (typeof S != "function")
      throw new Error(Re(10));
    o = S, p({
      type: xi.REPLACE
    });
  }
  function g() {
    var S, _ = v;
    return S = {
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
          throw new Error(Re(11));
        function h() {
          c.next && c.next(d());
        }
        h();
        var E = _(h);
        return {
          unsubscribe: E
        };
      }
    }, S[Uc] = function() {
      return this;
    }, S;
  }
  return p({
    type: xi.INIT
  }), r = {
    dispatch: p,
    subscribe: v,
    getState: d,
    replaceReducer: y
  }, r[Uc] = g, r;
}
function oy(e) {
  Object.keys(e).forEach(function(t) {
    var n = e[t], r = n(void 0, {
      type: xi.INIT
    });
    if (typeof r > "u")
      throw new Error(Re(12));
    if (typeof n(void 0, {
      type: xi.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Re(13));
  });
}
function iy(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  var i = Object.keys(n), l;
  try {
    oy(n);
  } catch (u) {
    l = u;
  }
  return function(a, s) {
    if (a === void 0 && (a = {}), l)
      throw l;
    for (var d = !1, v = {}, p = 0; p < i.length; p++) {
      var y = i[p], g = n[y], S = a[y], _ = g(S, s);
      if (typeof _ > "u")
        throw s && s.type, new Error(Re(14));
      v[y] = _, d = d || _ !== S;
    }
    return d = d || i.length !== Object.keys(a).length, d ? v : a;
  };
}
function Ei() {
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
function ly() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), i = function() {
        throw new Error(Re(15));
      }, l = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, u = t.map(function(a) {
        return a(l);
      });
      return i = Ei.apply(void 0, u)(o.dispatch), Bc(Bc({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function Fp(e) {
  var t = function(r) {
    var o = r.dispatch, i = r.getState;
    return function(l) {
      return function(u) {
        return typeof u == "function" ? u(o, i, e) : l(u);
      };
    };
  };
  return t;
}
var Bp = Fp();
Bp.withExtraArgument = Fp;
const bc = Bp;
var Up = /* @__PURE__ */ function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
      r.__proto__ = o;
    } || function(r, o) {
      for (var i in o)
        Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
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
}(), po = function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, l;
  return l = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
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
        if (r = 1, o && (i = s[0] & 2 ? o.return : s[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, s[1])).done)
          return i;
        switch (o = 0, i && (s = [s[0] & 2, i.value]), s[0]) {
          case 0:
          case 1:
            i = s;
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
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              n = 0;
              continue;
            }
            if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
              n.label = s[1];
              break;
            }
            if (s[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = s;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(s);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        s = t.call(e, n);
      } catch (d) {
        s = [6, d], o = 0;
      } finally {
        r = i = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, On = function(e, t) {
  for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
    e[o] = t[n];
  return e;
}, uy = Object.defineProperty, ay = Object.defineProperties, sy = Object.getOwnPropertyDescriptors, Vc = Object.getOwnPropertySymbols, cy = Object.prototype.hasOwnProperty, fy = Object.prototype.propertyIsEnumerable, Hc = function(e, t, n) {
  return t in e ? uy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
}, rn = function(e, t) {
  for (var n in t || (t = {}))
    cy.call(t, n) && Hc(e, n, t[n]);
  if (Vc)
    for (var r = 0, o = Vc(t); r < o.length; r++) {
      var n = o[r];
      fy.call(t, n) && Hc(e, n, t[n]);
    }
  return e;
}, Yl = function(e, t) {
  return ay(e, sy(t));
}, ho = function(e, t, n) {
  return new Promise(function(r, o) {
    var i = function(a) {
      try {
        u(n.next(a));
      } catch (s) {
        o(s);
      }
    }, l = function(a) {
      try {
        u(n.throw(a));
      } catch (s) {
        o(s);
      }
    }, u = function(a) {
      return a.done ? r(a.value) : Promise.resolve(a.value).then(i, l);
    };
    u((n = n.apply(e, t)).next());
  });
}, dy = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ei : Ei.apply(null, arguments);
};
function bp(e) {
  if (typeof e != "object" || e === null)
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null)
    return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var py = function(e) {
  return e && typeof e.match == "function";
};
function Rt(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++)
      r[o] = arguments[o];
    if (t) {
      var i = t.apply(void 0, r);
      if (!i)
        throw new Error("prepareAction did not return an object");
      return rn(rn({
        type: e,
        payload: i.payload
      }, "meta" in i && { meta: i.meta }), "error" in i && { error: i.error });
    }
    return { type: e, payload: r[0] };
  }
  return n.toString = function() {
    return "" + e;
  }, n.type = e, n.match = function(r) {
    return r.type === e;
  }, n;
}
function hy(e) {
  return bp(e) && "type" in e;
}
var vy = (
  /** @class */
  function(e) {
    Up(t, e);
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
      return n.length === 1 && Array.isArray(n[0]) ? new (t.bind.apply(t, On([void 0], n[0].concat(this))))() : new (t.bind.apply(t, On([void 0], n.concat(this))))();
    }, t;
  }(Array)
), my = (
  /** @class */
  function(e) {
    Up(t, e);
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
      return n.length === 1 && Array.isArray(n[0]) ? new (t.bind.apply(t, On([void 0], n[0].concat(this))))() : new (t.bind.apply(t, On([void 0], n.concat(this))))();
    }, t;
  }(Array)
);
function Yu(e) {
  return Mt(e) ? Dp(e, function() {
  }) : e;
}
function gy(e) {
  return typeof e == "boolean";
}
function yy() {
  return function(t) {
    return wy(t);
  };
}
function wy(e) {
  e === void 0 && (e = {});
  var t = e.thunk, n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
  var r = new vy();
  return n && (gy(n) ? r.push(bc) : r.push(bc.withExtraArgument(n.extraArgument))), r;
}
var Sy = !0;
function Y0(e) {
  var t = yy(), n = e || {}, r = n.reducer, o = r === void 0 ? void 0 : r, i = n.middleware, l = i === void 0 ? t() : i, u = n.devTools, a = u === void 0 ? !0 : u, s = n.preloadedState, d = s === void 0 ? void 0 : s, v = n.enhancers, p = v === void 0 ? void 0 : v, y;
  if (typeof o == "function")
    y = o;
  else if (bp(o))
    y = iy(o);
  else
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  var g = l;
  typeof g == "function" && (g = g(t));
  var S = ly.apply(void 0, g), _ = Ei;
  a && (_ = dy(rn({
    trace: !Sy
  }, typeof a == "object" && a)));
  var f = new my(S), c = f;
  Array.isArray(p) ? c = On([S], p) : typeof p == "function" && (c = p(f));
  var h = _.apply(void 0, c);
  return Mp(y, d, h);
}
function Vp(e) {
  var t = {}, n = [], r, o = {
    addCase: function(i, l) {
      var u = typeof i == "string" ? i : i.type;
      if (!u)
        throw new Error("`builder.addCase` cannot be called with an empty action type");
      if (u in t)
        throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
      return t[u] = l, o;
    },
    addMatcher: function(i, l) {
      return n.push({ matcher: i, reducer: l }), o;
    },
    addDefaultCase: function(i) {
      return r = i, o;
    }
  };
  return e(o), [t, n, r];
}
function ky(e) {
  return typeof e == "function";
}
function xy(e, t, n, r) {
  n === void 0 && (n = []);
  var o = typeof t == "function" ? Vp(t) : [t, n, r], i = o[0], l = o[1], u = o[2], a;
  if (ky(e))
    a = function() {
      return Yu(e());
    };
  else {
    var s = Yu(e);
    a = function() {
      return s;
    };
  }
  function d(v, p) {
    v === void 0 && (v = a());
    var y = On([
      i[p.type]
    ], l.filter(function(g) {
      var S = g.matcher;
      return S(p);
    }).map(function(g) {
      var S = g.reducer;
      return S;
    }));
    return y.filter(function(g) {
      return !!g;
    }).length === 0 && (y = [u]), y.reduce(function(g, S) {
      if (S)
        if (sn(g)) {
          var _ = g, f = S(_, p);
          return f === void 0 ? g : f;
        } else {
          if (Mt(g))
            return Dp(g, function(c) {
              return S(c, p);
            });
          var f = S(g, p);
          if (f === void 0) {
            if (g === null)
              return g;
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return f;
        }
      return g;
    }, v);
  }
  return d.getInitialState = a, d;
}
function Ey(e, t) {
  return e + "/" + t;
}
function Hp(e) {
  var t = e.name;
  if (!t)
    throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n = typeof e.initialState == "function" ? e.initialState : Yu(e.initialState), r = e.reducers || {}, o = Object.keys(r), i = {}, l = {}, u = {};
  o.forEach(function(d) {
    var v = r[d], p = Ey(t, d), y, g;
    "reducer" in v ? (y = v.reducer, g = v.prepare) : y = v, i[d] = y, l[p] = y, u[d] = g ? Rt(p, g) : Rt(p);
  });
  function a() {
    var d = typeof e.extraReducers == "function" ? Vp(e.extraReducers) : [e.extraReducers], v = d[0], p = v === void 0 ? {} : v, y = d[1], g = y === void 0 ? [] : y, S = d[2], _ = S === void 0 ? void 0 : S, f = rn(rn({}, p), l);
    return xy(n, function(c) {
      for (var h in f)
        c.addCase(h, f[h]);
      for (var E = 0, P = g; E < P.length; E++) {
        var $ = P[E];
        c.addMatcher($.matcher, $.reducer);
      }
      _ && c.addDefaultCase(_);
    });
  }
  var s;
  return {
    name: t,
    reducer: function(d, v) {
      return s || (s = a()), s(d, v);
    },
    actions: u,
    caseReducers: i,
    getInitialState: function() {
      return s || (s = a()), s.getInitialState();
    }
  };
}
var Cy = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Wp = function(e) {
  e === void 0 && (e = 21);
  for (var t = "", n = e; n--; )
    t += Cy[Math.random() * 64 | 0];
  return t;
}, Py = [
  "name",
  "message",
  "stack",
  "code"
], Gl = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      this.payload = t, this.meta = n;
    }
    return e;
  }()
), Wc = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      this.payload = t, this.meta = n;
    }
    return e;
  }()
), _y = function(e) {
  if (typeof e == "object" && e !== null) {
    for (var t = {}, n = 0, r = Py; n < r.length; n++) {
      var o = r[n];
      typeof e[o] == "string" && (t[o] = e[o]);
    }
    return t;
  }
  return { message: String(e) };
};
(function() {
  function e(t, n, r) {
    var o = Rt(t + "/fulfilled", function(s, d, v, p) {
      return {
        payload: s,
        meta: Yl(rn({}, p || {}), {
          arg: v,
          requestId: d,
          requestStatus: "fulfilled"
        })
      };
    }), i = Rt(t + "/pending", function(s, d, v) {
      return {
        payload: void 0,
        meta: Yl(rn({}, v || {}), {
          arg: d,
          requestId: s,
          requestStatus: "pending"
        })
      };
    }), l = Rt(t + "/rejected", function(s, d, v, p, y) {
      return {
        payload: p,
        error: (r && r.serializeError || _y)(s || "Rejected"),
        meta: Yl(rn({}, y || {}), {
          arg: v,
          requestId: d,
          rejectedWithValue: !!p,
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
      return function(d, v, p) {
        var y = r != null && r.idGenerator ? r.idGenerator(s) : Wp(), g = new u(), S;
        function _(c) {
          S = c, g.abort();
        }
        var f = function() {
          return ho(this, null, function() {
            var c, h, E, P, $, j, R;
            return po(this, function(U) {
              switch (U.label) {
                case 0:
                  return U.trys.push([0, 4, , 5]), P = (c = r == null ? void 0 : r.condition) == null ? void 0 : c.call(r, s, { getState: v, extra: p }), Ay(P) ? [4, P] : [3, 2];
                case 1:
                  P = U.sent(), U.label = 2;
                case 2:
                  if (P === !1 || g.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  return $ = new Promise(function(I, ee) {
                    return g.signal.addEventListener("abort", function() {
                      return ee({
                        name: "AbortError",
                        message: S || "Aborted"
                      });
                    });
                  }), d(i(y, s, (h = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : h.call(r, { requestId: y, arg: s }, { getState: v, extra: p }))), [4, Promise.race([
                    $,
                    Promise.resolve(n(s, {
                      dispatch: d,
                      getState: v,
                      extra: p,
                      requestId: y,
                      signal: g.signal,
                      abort: _,
                      rejectWithValue: function(I, ee) {
                        return new Gl(I, ee);
                      },
                      fulfillWithValue: function(I, ee) {
                        return new Wc(I, ee);
                      }
                    })).then(function(I) {
                      if (I instanceof Gl)
                        throw I;
                      return I instanceof Wc ? o(I.payload, y, s, I.meta) : o(I, y, s);
                    })
                  ])];
                case 3:
                  return E = U.sent(), [3, 5];
                case 4:
                  return j = U.sent(), E = j instanceof Gl ? l(null, y, s, j.payload, j.meta) : l(j, y, s), [3, 5];
                case 5:
                  return R = r && !r.dispatchConditionRejection && l.match(E) && E.meta.condition, R || d(E), [2, E];
              }
            });
          });
        }();
        return Object.assign(f, {
          abort: _,
          requestId: y,
          arg: s,
          unwrap: function() {
            return f.then(Oy);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: i,
      rejected: l,
      fulfilled: o,
      typePrefix: t
    });
  }
  return e.withTypes = function() {
    return e;
  }, e;
})();
function Oy(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Ay(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Ny = function(e, t) {
  return py(e) ? e.match(t) : e(t);
};
function G0() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(n) {
    return e.some(function(r) {
      return Ny(r, n);
    });
  };
}
var ds = function(e, t) {
  if (typeof e != "function")
    throw new TypeError(t + " is not a function");
}, Gu = function() {
}, Qp = function(e, t) {
  return t === void 0 && (t = Gu), e.catch(t), e;
}, Kp = function(e, t) {
  return e.addEventListener("abort", t, { once: !0 }), function() {
    return e.removeEventListener("abort", t);
  };
}, Jn = function(e, t) {
  var n = e.signal;
  n.aborted || ("reason" in n || Object.defineProperty(n, "reason", {
    enumerable: !0,
    value: t,
    configurable: !0,
    writable: !0
  }), e.abort(t));
}, $y = "task", Yp = "listener", Gp = "completed", ps = "cancelled", Ty = "task-" + ps, jy = "task-" + Gp, Xp = Yp + "-" + ps, Ry = Yp + "-" + Gp, fl = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.code = t, this.name = "TaskAbortError", this.message = $y + " " + ps + " (reason: " + t + ")";
    }
    return e;
  }()
), qn = function(e) {
  if (e.aborted)
    throw new fl(e.reason);
};
function Zp(e, t) {
  var n = Gu;
  return new Promise(function(r, o) {
    var i = function() {
      return o(new fl(e.reason));
    };
    if (e.aborted) {
      i();
      return;
    }
    n = Kp(e, i), t.finally(function() {
      return n();
    }).then(r, o);
  }).finally(function() {
    n = Gu;
  });
}
var zy = function(e, t) {
  return ho(void 0, null, function() {
    var n, r;
    return po(this, function(o) {
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
            status: r instanceof fl ? "cancelled" : "rejected",
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
}, Ci = function(e) {
  return function(t) {
    return Qp(Zp(e, t).then(function(n) {
      return qn(e), n;
    }));
  };
}, Jp = function(e) {
  var t = Ci(e);
  return function(n) {
    return t(new Promise(function(r) {
      return setTimeout(r, n);
    }));
  };
}, Ly = Object.assign, Qc = {}, vo = "listenerMiddleware", Iy = function(e, t) {
  var n = function(r) {
    return Kp(e, function() {
      return Jn(r, e.reason);
    });
  };
  return function(r, o) {
    ds(r, "taskExecutor");
    var i = new AbortController();
    n(i);
    var l = zy(function() {
      return ho(void 0, null, function() {
        var u;
        return po(this, function(a) {
          switch (a.label) {
            case 0:
              return qn(e), qn(i.signal), [4, r({
                pause: Ci(i.signal),
                delay: Jp(i.signal),
                signal: i.signal
              })];
            case 1:
              return u = a.sent(), qn(i.signal), [2, u];
          }
        });
      });
    }, function() {
      return Jn(i, jy);
    });
    return o != null && o.autoJoin && t.push(l), {
      result: Ci(e)(l),
      cancel: function() {
        Jn(i, Ty);
      }
    };
  };
}, Dy = function(e, t) {
  var n = function(r, o) {
    return ho(void 0, null, function() {
      var i, l, u, a;
      return po(this, function(s) {
        switch (s.label) {
          case 0:
            qn(t), i = function() {
            }, l = new Promise(function(d, v) {
              var p = e({
                predicate: r,
                effect: function(y, g) {
                  g.unsubscribe(), d([
                    y,
                    g.getState(),
                    g.getOriginalState()
                  ]);
                }
              });
              i = function() {
                p(), v();
              };
            }), u = [
              l
            ], o != null && u.push(new Promise(function(d) {
              return setTimeout(d, o, null);
            })), s.label = 1;
          case 1:
            return s.trys.push([1, , 3, 4]), [4, Zp(t, Promise.race(u))];
          case 2:
            return a = s.sent(), qn(t), [2, a];
          case 3:
            return i(), [
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
    return Qp(n(r, o));
  };
}, qp = function(e) {
  var t = e.type, n = e.actionCreator, r = e.matcher, o = e.predicate, i = e.effect;
  if (t)
    o = Rt(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error("Creating or removing a listener requires one of the known fields for matching an action");
  return ds(i, "options.listener"), { predicate: o, type: t, effect: i };
}, My = function(e) {
  var t = qp(e), n = t.type, r = t.predicate, o = t.effect, i = Wp(), l = {
    id: i,
    effect: o,
    type: n,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: function() {
      throw new Error("Unsubscribe not initialized");
    }
  };
  return l;
}, Xu = function(e) {
  e.pending.forEach(function(t) {
    Jn(t, Xp);
  });
}, Fy = function(e) {
  return function() {
    e.forEach(Xu), e.clear();
  };
}, Kc = function(e, t, n) {
  try {
    e(t, n);
  } catch (r) {
    setTimeout(function() {
      throw r;
    }, 0);
  }
}, By = Rt(vo + "/add"), Uy = Rt(vo + "/removeAll"), by = Rt(vo + "/remove"), Vy = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  console.error.apply(console, On([vo + "/error"], e));
};
function X0(e) {
  var t = this;
  e === void 0 && (e = {});
  var n = /* @__PURE__ */ new Map(), r = e.extra, o = e.onError, i = o === void 0 ? Vy : o;
  ds(i, "onError");
  var l = function(y) {
    return y.unsubscribe = function() {
      return n.delete(y.id);
    }, n.set(y.id, y), function(g) {
      y.unsubscribe(), g != null && g.cancelActive && Xu(y);
    };
  }, u = function(y) {
    for (var g = 0, S = Array.from(n.values()); g < S.length; g++) {
      var _ = S[g];
      if (y(_))
        return _;
    }
  }, a = function(y) {
    var g = u(function(S) {
      return S.effect === y.effect;
    });
    return g || (g = My(y)), l(g);
  }, s = function(y) {
    var g = qp(y), S = g.type, _ = g.effect, f = g.predicate, c = u(function(h) {
      var E = typeof S == "string" ? h.type === S : h.predicate === f;
      return E && h.effect === _;
    });
    return c && (c.unsubscribe(), y.cancelActive && Xu(c)), !!c;
  }, d = function(y, g, S, _) {
    return ho(t, null, function() {
      var f, c, h, E;
      return po(this, function(P) {
        switch (P.label) {
          case 0:
            f = new AbortController(), c = Dy(a, f.signal), h = [], P.label = 1;
          case 1:
            return P.trys.push([1, 3, 4, 6]), y.pending.add(f), [4, Promise.resolve(y.effect(g, Ly({}, S, {
              getOriginalState: _,
              condition: function($, j) {
                return c($, j).then(Boolean);
              },
              take: c,
              delay: Jp(f.signal),
              pause: Ci(f.signal),
              extra: r,
              signal: f.signal,
              fork: Iy(f.signal, h),
              unsubscribe: y.unsubscribe,
              subscribe: function() {
                n.set(y.id, y);
              },
              cancelActiveListeners: function() {
                y.pending.forEach(function($, j, R) {
                  $ !== f && (Jn($, Xp), R.delete($));
                });
              }
            })))];
          case 2:
            return P.sent(), [3, 6];
          case 3:
            return E = P.sent(), E instanceof fl || Kc(i, E, {
              raisedBy: "effect"
            }), [3, 6];
          case 4:
            return [4, Promise.allSettled(h)];
          case 5:
            return P.sent(), Jn(f, Ry), y.pending.delete(f), [
              7
              /*endfinally*/
            ];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, v = Fy(n), p = function(y) {
    return function(g) {
      return function(S) {
        if (!hy(S))
          return g(S);
        if (By.match(S))
          return a(S.payload);
        if (Uy.match(S)) {
          v();
          return;
        }
        if (by.match(S))
          return s(S.payload);
        var _ = y.getState(), f = function() {
          if (_ === Qc)
            throw new Error(vo + ": getOriginalState can only be called synchronously");
          return _;
        }, c;
        try {
          if (c = g(S), n.size > 0)
            for (var h = y.getState(), E = Array.from(n.values()), P = 0, $ = E; P < $.length; P++) {
              var j = $[P], R = !1;
              try {
                R = j.predicate(S, h, _);
              } catch (U) {
                R = !1, Kc(i, U, {
                  raisedBy: "predicate"
                });
              }
              R && d(j, S, y, f);
            }
        } finally {
          _ = Qc;
        }
        return c;
      };
    };
  };
  return {
    middleware: p,
    startListening: a,
    stopListening: s,
    clearListeners: v
  };
}
var Yc;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
Gg();
var Zu = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(t);
  })(vr, function(n) {
    function r(k, w) {
      k.super_ = w, k.prototype = Object.create(w.prototype, { constructor: { value: k, enumerable: !1, writable: !0, configurable: !0 } });
    }
    function o(k, w) {
      Object.defineProperty(this, "kind", { value: k, enumerable: !0 }), w && w.length && Object.defineProperty(this, "path", { value: w, enumerable: !0 });
    }
    function i(k, w, m) {
      i.super_.call(this, "E", k), Object.defineProperty(this, "lhs", { value: w, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: m, enumerable: !0 });
    }
    function l(k, w) {
      l.super_.call(this, "N", k), Object.defineProperty(this, "rhs", { value: w, enumerable: !0 });
    }
    function u(k, w) {
      u.super_.call(this, "D", k), Object.defineProperty(this, "lhs", { value: w, enumerable: !0 });
    }
    function a(k, w, m) {
      a.super_.call(this, "A", k), Object.defineProperty(this, "index", { value: w, enumerable: !0 }), Object.defineProperty(this, "item", { value: m, enumerable: !0 });
    }
    function s(k, w, m) {
      var C = k.slice((m || w) + 1 || k.length);
      return k.length = w < 0 ? k.length + w : w, k.push.apply(k, C), k;
    }
    function d(k) {
      var w = typeof k > "u" ? "undefined" : ce(k);
      return w !== "object" ? w : k === Math ? "math" : k === null ? "null" : Array.isArray(k) ? "array" : Object.prototype.toString.call(k) === "[object Date]" ? "date" : typeof k.toString == "function" && /^\/.*\//.test(k.toString()) ? "regexp" : "object";
    }
    function v(k, w, m, C, A, x, z) {
      A = A || [], z = z || [];
      var O = A.slice(0);
      if (typeof x < "u") {
        if (C) {
          if (typeof C == "function" && C(O, x))
            return;
          if ((typeof C > "u" ? "undefined" : ce(C)) === "object") {
            if (C.prefilter && C.prefilter(O, x))
              return;
            if (C.normalize) {
              var Y = C.normalize(O, x, k, w);
              Y && (k = Y[0], w = Y[1]);
            }
          }
        }
        O.push(x);
      }
      d(k) === "regexp" && d(w) === "regexp" && (k = k.toString(), w = w.toString());
      var H = typeof k > "u" ? "undefined" : ce(k), V = typeof w > "u" ? "undefined" : ce(w), D = H !== "undefined" || z && z[z.length - 1].lhs && z[z.length - 1].lhs.hasOwnProperty(x), X = V !== "undefined" || z && z[z.length - 1].rhs && z[z.length - 1].rhs.hasOwnProperty(x);
      if (!D && X)
        m(new l(O, w));
      else if (!X && D)
        m(new u(O, k));
      else if (d(k) !== d(w))
        m(new i(O, k, w));
      else if (d(k) === "date" && k - w !== 0)
        m(new i(O, k, w));
      else if (H === "object" && k !== null && w !== null)
        if (z.filter(function(M) {
          return M.lhs === k;
        }).length)
          k !== w && m(new i(O, k, w));
        else {
          if (z.push({ lhs: k, rhs: w }), Array.isArray(k)) {
            var W;
            for (k.length, W = 0; W < k.length; W++)
              W >= w.length ? m(new a(O, W, new u(void 0, k[W]))) : v(k[W], w[W], m, C, O, W, z);
            for (; W < w.length; )
              m(new a(O, W, new l(void 0, w[W++])));
          } else {
            var Q = Object.keys(k), te = Object.keys(w);
            Q.forEach(function(M, ue) {
              var ct = te.indexOf(M);
              ct >= 0 ? (v(k[M], w[M], m, C, O, M, z), te = s(te, ct)) : v(k[M], void 0, m, C, O, M, z);
            }), te.forEach(function(M) {
              v(void 0, w[M], m, C, O, M, z);
            });
          }
          z.length = z.length - 1;
        }
      else
        k !== w && (H === "number" && isNaN(k) && isNaN(w) || m(new i(O, k, w)));
    }
    function p(k, w, m, C) {
      return C = C || [], v(k, w, function(A) {
        A && C.push(A);
      }, m), C.length ? C : void 0;
    }
    function y(k, w, m) {
      if (m.path && m.path.length) {
        var C, A = k[w], x = m.path.length - 1;
        for (C = 0; C < x; C++)
          A = A[m.path[C]];
        switch (m.kind) {
          case "A":
            y(A[m.path[C]], m.index, m.item);
            break;
          case "D":
            delete A[m.path[C]];
            break;
          case "E":
          case "N":
            A[m.path[C]] = m.rhs;
        }
      } else
        switch (m.kind) {
          case "A":
            y(k[w], m.index, m.item);
            break;
          case "D":
            k = s(k, w);
            break;
          case "E":
          case "N":
            k[w] = m.rhs;
        }
      return k;
    }
    function g(k, w, m) {
      if (k && w && m && m.kind) {
        for (var C = k, A = -1, x = m.path ? m.path.length - 1 : 0; ++A < x; )
          typeof C[m.path[A]] > "u" && (C[m.path[A]] = typeof m.path[A] == "number" ? [] : {}), C = C[m.path[A]];
        switch (m.kind) {
          case "A":
            y(m.path ? C[m.path[A]] : C, m.index, m.item);
            break;
          case "D":
            delete C[m.path[A]];
            break;
          case "E":
          case "N":
            C[m.path[A]] = m.rhs;
        }
      }
    }
    function S(k, w, m) {
      if (m.path && m.path.length) {
        var C, A = k[w], x = m.path.length - 1;
        for (C = 0; C < x; C++)
          A = A[m.path[C]];
        switch (m.kind) {
          case "A":
            S(A[m.path[C]], m.index, m.item);
            break;
          case "D":
            A[m.path[C]] = m.lhs;
            break;
          case "E":
            A[m.path[C]] = m.lhs;
            break;
          case "N":
            delete A[m.path[C]];
        }
      } else
        switch (m.kind) {
          case "A":
            S(k[w], m.index, m.item);
            break;
          case "D":
            k[w] = m.lhs;
            break;
          case "E":
            k[w] = m.lhs;
            break;
          case "N":
            k = s(k, w);
        }
      return k;
    }
    function _(k, w, m) {
      if (k && w && m && m.kind) {
        var C, A, x = k;
        for (A = m.path.length - 1, C = 0; C < A; C++)
          typeof x[m.path[C]] > "u" && (x[m.path[C]] = {}), x = x[m.path[C]];
        switch (m.kind) {
          case "A":
            S(x[m.path[C]], m.index, m.item);
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
    function f(k, w, m) {
      if (k && w) {
        var C = function(A) {
          m && !m(k, w, A) || g(k, w, A);
        };
        v(k, w, C);
      }
    }
    function c(k) {
      return "color: " + T[k].color + "; font-weight: bold";
    }
    function h(k) {
      var w = k.kind, m = k.path, C = k.lhs, A = k.rhs, x = k.index, z = k.item;
      switch (w) {
        case "E":
          return [m.join("."), C, "→", A];
        case "N":
          return [m.join("."), A];
        case "D":
          return [m.join(".")];
        case "A":
          return [m.join(".") + "[" + x + "]", z];
        default:
          return [];
      }
    }
    function E(k, w, m, C) {
      var A = p(k, w);
      try {
        C ? m.groupCollapsed("diff") : m.group("diff");
      } catch {
        m.log("diff");
      }
      A ? A.forEach(function(x) {
        var z = x.kind, O = h(x);
        m.log.apply(m, ["%c " + T[z].text, c(z)].concat(tt(O)));
      }) : m.log("—— no diff ——");
      try {
        m.groupEnd();
      } catch {
        m.log("—— diff end —— ");
      }
    }
    function P(k, w, m, C) {
      switch (typeof k > "u" ? "undefined" : ce(k)) {
        case "object":
          return typeof k[C] == "function" ? k[C].apply(k, tt(m)) : k[C];
        case "function":
          return k(w);
        default:
          return k;
      }
    }
    function $(k) {
      var w = k.timestamp, m = k.duration;
      return function(C, A, x) {
        var z = ["action"];
        return z.push("%c" + String(C.type)), w && z.push("%c@ " + A), m && z.push("%c(in " + x.toFixed(2) + " ms)"), z.join(" ");
      };
    }
    function j(k, w) {
      var m = w.logger, C = w.actionTransformer, A = w.titleFormatter, x = A === void 0 ? $(w) : A, z = w.collapsed, O = w.colors, Y = w.level, H = w.diff, V = typeof w.titleFormatter > "u";
      k.forEach(function(D, X) {
        var W = D.started, Q = D.startedTime, te = D.action, M = D.prevState, ue = D.error, ct = D.took, re = D.nextState, Bt = k[X + 1];
        Bt && (re = Bt.prevState, ct = Bt.started - W);
        var $e = C(te), Ue = typeof z == "function" ? z(function() {
          return re;
        }, te, D) : z, b = Se(Q), fe = O.title ? "color: " + O.title($e) + ";" : "", Pt = ["color: gray; font-weight: lighter;"];
        Pt.push(fe), w.timestamp && Pt.push("color: gray; font-weight: lighter;"), w.duration && Pt.push("color: gray; font-weight: lighter;");
        var _t = x($e, b, ct);
        try {
          Ue ? O.title && V ? m.groupCollapsed.apply(m, ["%c " + _t].concat(Pt)) : m.groupCollapsed(_t) : O.title && V ? m.group.apply(m, ["%c " + _t].concat(Pt)) : m.group(_t);
        } catch {
          m.log(_t);
        }
        var nt = P(Y, $e, [M], "prevState"), pl = P(Y, $e, [$e], "action"), hl = P(Y, $e, [ue, M], "error"), vl = P(Y, $e, [re], "nextState");
        if (nt)
          if (O.prevState) {
            var mh = "color: " + O.prevState(M) + "; font-weight: bold";
            m[nt]("%c prev state", mh, M);
          } else
            m[nt]("prev state", M);
        if (pl)
          if (O.action) {
            var gh = "color: " + O.action($e) + "; font-weight: bold";
            m[pl]("%c action    ", gh, $e);
          } else
            m[pl]("action    ", $e);
        if (ue && hl)
          if (O.error) {
            var yh = "color: " + O.error(ue, M) + "; font-weight: bold;";
            m[hl]("%c error     ", yh, ue);
          } else
            m[hl]("error     ", ue);
        if (vl)
          if (O.nextState) {
            var wh = "color: " + O.nextState(re) + "; font-weight: bold";
            m[vl]("%c next state", wh, re);
          } else
            m[vl]("next state", re);
        H && E(M, re, m, Ue);
        try {
          m.groupEnd();
        } catch {
          m.log("—— log end ——");
        }
      });
    }
    function R() {
      var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, w = Object.assign({}, F, k), m = w.logger, C = w.stateTransformer, A = w.errorTransformer, x = w.predicate, z = w.logErrors, O = w.diffPredicate;
      if (typeof m > "u")
        return function() {
          return function(H) {
            return function(V) {
              return H(V);
            };
          };
        };
      if (k.getState && k.dispatch)
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
          return function(H) {
            return function(V) {
              return H(V);
            };
          };
        };
      var Y = [];
      return function(H) {
        var V = H.getState;
        return function(D) {
          return function(X) {
            if (typeof x == "function" && !x(V, X))
              return D(X);
            var W = {};
            Y.push(W), W.started = Ne.now(), W.startedTime = /* @__PURE__ */ new Date(), W.prevState = C(V()), W.action = X;
            var Q = void 0;
            if (z)
              try {
                Q = D(X);
              } catch (M) {
                W.error = A(M);
              }
            else
              Q = D(X);
            W.took = Ne.now() - W.started, W.nextState = C(V());
            var te = w.diff && typeof O == "function" ? O(V, X) : w.diff;
            if (j(Y, Object.assign({}, w, { diff: te })), Y.length = 0, W.error)
              throw W.error;
            return Q;
          };
        };
      };
    }
    var U, I, ee = function(k, w) {
      return new Array(w + 1).join(k);
    }, le = function(k, w) {
      return ee("0", w - k.toString().length) + k;
    }, Se = function(k) {
      return le(k.getHours(), 2) + ":" + le(k.getMinutes(), 2) + ":" + le(k.getSeconds(), 2) + "." + le(k.getMilliseconds(), 3);
    }, Ne = typeof performance < "u" && performance !== null && typeof performance.now == "function" ? performance : Date, ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(k) {
      return typeof k;
    } : function(k) {
      return k && typeof Symbol == "function" && k.constructor === Symbol && k !== Symbol.prototype ? "symbol" : typeof k;
    }, tt = function(k) {
      if (Array.isArray(k)) {
        for (var w = 0, m = Array(k.length); w < k.length; w++)
          m[w] = k[w];
        return m;
      }
      return Array.from(k);
    }, ye = [];
    U = (typeof vr > "u" ? "undefined" : ce(vr)) === "object" && vr ? vr : typeof window < "u" ? window : {}, I = U.DeepDiff, I && ye.push(function() {
      typeof I < "u" && U.DeepDiff === p && (U.DeepDiff = I, I = void 0);
    }), r(i, o), r(l, o), r(u, o), r(a, o), Object.defineProperties(p, { diff: { value: p, enumerable: !0 }, observableDiff: { value: v, enumerable: !0 }, applyDiff: { value: f, enumerable: !0 }, applyChange: { value: g, enumerable: !0 }, revertChange: { value: _, enumerable: !0 }, isConflict: { value: function() {
      return typeof I < "u";
    }, enumerable: !0 }, noConflict: { value: function() {
      return ye && (ye.forEach(function(k) {
        k();
      }), ye = null), p;
    }, enumerable: !0 } });
    var T = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } }, F = { level: "log", logger: console, logErrors: !0, collapsed: void 0, predicate: void 0, duration: !1, timestamp: !0, stateTransformer: function(k) {
      return k;
    }, actionTransformer: function(k) {
      return k;
    }, errorTransformer: function(k) {
      return k;
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
    } }, diff: !1, diffPredicate: void 0, transformer: void 0 }, B = function() {
      var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, w = k.dispatch, m = k.getState;
      return typeof w == "function" || typeof m == "function" ? R()({ dispatch: w, getState: m }) : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
    };
    n.defaults = F, n.createLogger = R, n.logger = B, n.default = B, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(Zu, Zu.exports);
var Hy = Zu.exports;
const Z0 = /* @__PURE__ */ Oi(Hy), Wy = {
  theme: void 0,
  kind: void 0
}, eh = Hp({
  name: "theme",
  initialState: Wy,
  reducers: {
    changeTheme: (e, t) => {
      e.kind = t.payload.kind, e.theme = { ...e.theme, ...t.payload.theme ?? {} }, e.kind === "light" ? (e.theme.computedOne = "rgba(0, 0, 0, 0.05)", e.theme.computedTwo = "rgba(0, 0, 0, 0.1)") : e.kind === "dark" ? (e.theme.computedOne = "rgba(255, 255, 255, 0.05)", e.theme.computedTwo = "rgba(255, 255, 255, 0.1)") : (e.theme.computedOne = "transparent", e.theme.computedTwo = "transparent");
    }
  }
}), Qy = Cp, { changeTheme: J0 } = eh.actions, q0 = eh.reducer, Ky = {
  current: ["starting"],
  history: []
}, th = Hp({
  name: "router",
  initialState: Ky,
  reducers: {
    goTo: (e, t) => {
      e.history.push(e.current), e.current = t.payload;
    },
    goBack: (e) => {
      e.history.length > 0 && (e.current = e.history.pop());
    }
  }
}), { goTo: Yy, goBack: e1 } = th.actions, Gy = Vg, nh = Cp, t1 = th.reducer, Xy = [
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
], Mr = {
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
function Zy() {
  const e = Qy((t) => t.theme);
  return /* @__PURE__ */ ze.jsxs("style", { children: [
    qy(e.theme),
    Jy()
  ] });
}
function Jy() {
  return `
  body {
    padding: 0;
    margin: 0;
    background-color: var(--xliic-background);
    color: var(--xliic-foreground);
    }`;
}
function qy(e) {
  const t = [];
  if (e !== void 0)
    for (const n of Xy)
      e[n] && t.push(`${Mr[n]}: ${e[n]};`);
  return `:root {
    ${t.join(`
`)}
  }`;
}
const rh = fr.createContext([]);
function e0() {
  return /* @__PURE__ */ ze.jsx(rh.Consumer, { children: (e) => /* @__PURE__ */ ze.jsx(t0, { routes: e }) });
}
function t0({ routes: e }) {
  const t = nh((r) => r.router.current), n = oh(e, t);
  return n ? n.element : /* @__PURE__ */ ze.jsx("div", {});
}
function oh(e, t) {
  if (t.length === 0)
    return;
  const [n, ...r] = t;
  for (const o of e)
    if (o.id === n)
      return r.length === 0 ? o : o.children ? oh(o.children, r) : void 0;
}
function n0(e) {
  function t(w, m, C, A, x) {
    for (var z = 0, O = 0, Y = 0, H = 0, V, D, X = 0, W = 0, Q, te = Q = V = 0, M = 0, ue = 0, ct = 0, re = 0, Bt = C.length, $e = Bt - 1, Ue, b = "", fe = "", Pt = "", _t = "", nt; M < Bt; ) {
      if (D = C.charCodeAt(M), M === $e && O + H + Y + z !== 0 && (O !== 0 && (D = O === 47 ? 10 : 47), H = Y = z = 0, Bt++, $e++), O + H + Y + z === 0) {
        if (M === $e && (0 < ue && (b = b.replace(p, "")), 0 < b.trim().length)) {
          switch (D) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              b += C.charAt(M);
          }
          D = 59;
        }
        switch (D) {
          case 123:
            for (b = b.trim(), V = b.charCodeAt(0), Q = 1, re = ++M; M < Bt; ) {
              switch (D = C.charCodeAt(M)) {
                case 123:
                  Q++;
                  break;
                case 125:
                  Q--;
                  break;
                case 47:
                  switch (D = C.charCodeAt(M + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (te = M + 1; te < $e; ++te)
                          switch (C.charCodeAt(te)) {
                            case 47:
                              if (D === 42 && C.charCodeAt(te - 1) === 42 && M + 2 !== te) {
                                M = te + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (D === 47) {
                                M = te + 1;
                                break e;
                              }
                          }
                        M = te;
                      }
                  }
                  break;
                case 91:
                  D++;
                case 40:
                  D++;
                case 34:
                case 39:
                  for (; M++ < $e && C.charCodeAt(M) !== D; )
                    ;
              }
              if (Q === 0)
                break;
              M++;
            }
            switch (Q = C.substring(re, M), V === 0 && (V = (b = b.replace(v, "").trim()).charCodeAt(0)), V) {
              case 64:
                switch (0 < ue && (b = b.replace(p, "")), D = b.charCodeAt(1), D) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ue = m;
                    break;
                  default:
                    ue = tt;
                }
                if (Q = t(m, ue, Q, D, x + 1), re = Q.length, 0 < T && (ue = n(tt, b, ct), nt = u(3, Q, ue, m, Se, le, re, D, x, A), b = ue.join(""), nt !== void 0 && (re = (Q = nt.trim()).length) === 0 && (D = 0, Q = "")), 0 < re)
                  switch (D) {
                    case 115:
                      b = b.replace($, l);
                    case 100:
                    case 109:
                    case 45:
                      Q = b + "{" + Q + "}";
                      break;
                    case 107:
                      b = b.replace(c, "$1 $2"), Q = b + "{" + Q + "}", Q = ce === 1 || ce === 2 && i("@" + Q, 3) ? "@-webkit-" + Q + "@" + Q : "@" + Q;
                      break;
                    default:
                      Q = b + Q, A === 112 && (Q = (fe += Q, ""));
                  }
                else
                  Q = "";
                break;
              default:
                Q = t(m, n(m, b, ct), Q, A, x + 1);
            }
            Pt += Q, Q = ct = ue = te = V = 0, b = "", D = C.charCodeAt(++M);
            break;
          case 125:
          case 59:
            if (b = (0 < ue ? b.replace(p, "") : b).trim(), 1 < (re = b.length))
              switch (te === 0 && (V = b.charCodeAt(0), V === 45 || 96 < V && 123 > V) && (re = (b = b.replace(" ", ":")).length), 0 < T && (nt = u(1, b, m, w, Se, le, fe.length, A, x, A)) !== void 0 && (re = (b = nt.trim()).length) === 0 && (b = "\0\0"), V = b.charCodeAt(0), D = b.charCodeAt(1), V) {
                case 0:
                  break;
                case 64:
                  if (D === 105 || D === 99) {
                    _t += b + C.charAt(M);
                    break;
                  }
                default:
                  b.charCodeAt(re - 1) !== 58 && (fe += o(b, V, D, b.charCodeAt(2)));
              }
            ct = ue = te = V = 0, b = "", D = C.charCodeAt(++M);
        }
      }
      switch (D) {
        case 13:
        case 10:
          O === 47 ? O = 0 : 1 + V === 0 && A !== 107 && 0 < b.length && (ue = 1, b += "\0"), 0 < T * B && u(0, b, m, w, Se, le, fe.length, A, x, A), le = 1, Se++;
          break;
        case 59:
        case 125:
          if (O + H + Y + z === 0) {
            le++;
            break;
          }
        default:
          switch (le++, Ue = C.charAt(M), D) {
            case 9:
            case 32:
              if (H + z + O === 0)
                switch (X) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ue = "";
                    break;
                  default:
                    D !== 32 && (Ue = " ");
                }
              break;
            case 0:
              Ue = "\\0";
              break;
            case 12:
              Ue = "\\f";
              break;
            case 11:
              Ue = "\\v";
              break;
            case 38:
              H + O + z === 0 && (ue = ct = 1, Ue = "\f" + Ue);
              break;
            case 108:
              if (H + O + z + Ne === 0 && 0 < te)
                switch (M - te) {
                  case 2:
                    X === 112 && C.charCodeAt(M - 3) === 58 && (Ne = X);
                  case 8:
                    W === 111 && (Ne = W);
                }
              break;
            case 58:
              H + O + z === 0 && (te = M);
              break;
            case 44:
              O + Y + H + z === 0 && (ue = 1, Ue += "\r");
              break;
            case 34:
            case 39:
              O === 0 && (H = H === D ? 0 : H === 0 ? D : H);
              break;
            case 91:
              H + O + Y === 0 && z++;
              break;
            case 93:
              H + O + Y === 0 && z--;
              break;
            case 41:
              H + O + z === 0 && Y--;
              break;
            case 40:
              if (H + O + z === 0) {
                if (V === 0)
                  switch (2 * X + 3 * W) {
                    case 533:
                      break;
                    default:
                      V = 1;
                  }
                Y++;
              }
              break;
            case 64:
              O + Y + H + z + te + Q === 0 && (Q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < H + z + Y))
                switch (O) {
                  case 0:
                    switch (2 * D + 3 * C.charCodeAt(M + 1)) {
                      case 235:
                        O = 47;
                        break;
                      case 220:
                        re = M, O = 42;
                    }
                    break;
                  case 42:
                    D === 47 && X === 42 && re + 2 !== M && (C.charCodeAt(re + 2) === 33 && (fe += C.substring(re, M + 1)), Ue = "", O = 0);
                }
          }
          O === 0 && (b += Ue);
      }
      W = X, X = D, M++;
    }
    if (re = fe.length, 0 < re) {
      if (ue = m, 0 < T && (nt = u(2, fe, ue, w, Se, le, re, A, x, A), nt !== void 0 && (fe = nt).length === 0))
        return _t + fe + Pt;
      if (fe = ue.join(",") + "{" + fe + "}", ce * Ne !== 0) {
        switch (ce !== 2 || i(fe, 2) || (Ne = 0), Ne) {
          case 111:
            fe = fe.replace(E, ":-moz-$1") + fe;
            break;
          case 112:
            fe = fe.replace(h, "::-webkit-input-$1") + fe.replace(h, "::-moz-$1") + fe.replace(h, ":-ms-input-$1") + fe;
        }
        Ne = 0;
      }
    }
    return _t + fe + Pt;
  }
  function n(w, m, C) {
    var A = m.trim().split(_);
    m = A;
    var x = A.length, z = w.length;
    switch (z) {
      case 0:
      case 1:
        var O = 0;
        for (w = z === 0 ? "" : w[0] + " "; O < x; ++O)
          m[O] = r(w, m[O], C).trim();
        break;
      default:
        var Y = O = 0;
        for (m = []; O < x; ++O)
          for (var H = 0; H < z; ++H)
            m[Y++] = r(w[H] + " ", A[O], C).trim();
    }
    return m;
  }
  function r(w, m, C) {
    var A = m.charCodeAt(0);
    switch (33 > A && (A = (m = m.trim()).charCodeAt(0)), A) {
      case 38:
        return m.replace(f, "$1" + w.trim());
      case 58:
        return w.trim() + m.replace(f, "$1" + w.trim());
      default:
        if (0 < 1 * C && 0 < m.indexOf("\f"))
          return m.replace(f, (w.charCodeAt(0) === 58 ? "" : "$1") + w.trim());
    }
    return w + m;
  }
  function o(w, m, C, A) {
    var x = w + ";", z = 2 * m + 3 * C + 4 * A;
    if (z === 944) {
      w = x.indexOf(":", 9) + 1;
      var O = x.substring(w, x.length - 1).trim();
      return O = x.substring(0, w).trim() + O + ";", ce === 1 || ce === 2 && i(O, 1) ? "-webkit-" + O + O : O;
    }
    if (ce === 0 || ce === 2 && !i(x, 1))
      return x;
    switch (z) {
      case 1015:
        return x.charCodeAt(10) === 97 ? "-webkit-" + x + x : x;
      case 951:
        return x.charCodeAt(3) === 116 ? "-webkit-" + x + x : x;
      case 963:
        return x.charCodeAt(5) === 110 ? "-webkit-" + x + x : x;
      case 1009:
        if (x.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + x + x;
      case 978:
        return "-webkit-" + x + "-moz-" + x + x;
      case 1019:
      case 983:
        return "-webkit-" + x + "-moz-" + x + "-ms-" + x + x;
      case 883:
        if (x.charCodeAt(8) === 45)
          return "-webkit-" + x + x;
        if (0 < x.indexOf("image-set(", 11))
          return x.replace(ee, "$1-webkit-$2") + x;
        break;
      case 932:
        if (x.charCodeAt(4) === 45)
          switch (x.charCodeAt(5)) {
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
        if (x.charCodeAt(8) !== 99)
          break;
        return O = x.substring(x.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + O + "-webkit-" + x + "-ms-flex-pack" + O + x;
      case 1005:
        return g.test(x) ? x.replace(y, ":-webkit-") + x.replace(y, ":-moz-") + x : x;
      case 1e3:
        switch (O = x.substring(13).trim(), m = O.indexOf("-") + 1, O.charCodeAt(0) + O.charCodeAt(m)) {
          case 226:
            O = x.replace(P, "tb");
            break;
          case 232:
            O = x.replace(P, "tb-rl");
            break;
          case 220:
            O = x.replace(P, "lr");
            break;
          default:
            return x;
        }
        return "-webkit-" + x + "-ms-" + O + x;
      case 1017:
        if (x.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (m = (x = w).length - 10, O = (x.charCodeAt(m) === 33 ? x.substring(0, m) : x).substring(w.indexOf(":", 7) + 1).trim(), z = O.charCodeAt(0) + (O.charCodeAt(7) | 0)) {
          case 203:
            if (111 > O.charCodeAt(8))
              break;
          case 115:
            x = x.replace(O, "-webkit-" + O) + ";" + x;
            break;
          case 207:
          case 102:
            x = x.replace(O, "-webkit-" + (102 < z ? "inline-" : "") + "box") + ";" + x.replace(O, "-webkit-" + O) + ";" + x.replace(O, "-ms-" + O + "box") + ";" + x;
        }
        return x + ";";
      case 938:
        if (x.charCodeAt(5) === 45)
          switch (x.charCodeAt(6)) {
            case 105:
              return O = x.replace("-items", ""), "-webkit-" + x + "-webkit-box-" + O + "-ms-flex-" + O + x;
            case 115:
              return "-webkit-" + x + "-ms-flex-item-" + x.replace(R, "") + x;
            default:
              return "-webkit-" + x + "-ms-flex-line-pack" + x.replace("align-content", "").replace(R, "") + x;
          }
        break;
      case 973:
      case 989:
        if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (I.test(w) === !0)
          return (O = w.substring(w.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(w.replace("stretch", "fill-available"), m, C, A).replace(":fill-available", ":stretch") : x.replace(O, "-webkit-" + O) + x.replace(O, "-moz-" + O.replace("fill-", "")) + x;
        break;
      case 962:
        if (x = "-webkit-" + x + (x.charCodeAt(5) === 102 ? "-ms-" + x : "") + x, C + A === 211 && x.charCodeAt(13) === 105 && 0 < x.indexOf("transform", 10))
          return x.substring(0, x.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + x;
    }
    return x;
  }
  function i(w, m) {
    var C = w.indexOf(m === 1 ? ":" : "{"), A = w.substring(0, m !== 3 ? C : 10);
    return C = w.substring(C + 1, w.length - 1), F(m !== 2 ? A : A.replace(U, "$1"), C, m);
  }
  function l(w, m) {
    var C = o(m, m.charCodeAt(0), m.charCodeAt(1), m.charCodeAt(2));
    return C !== m + ";" ? C.replace(j, " or ($1)").substring(4) : "(" + m + ")";
  }
  function u(w, m, C, A, x, z, O, Y, H, V) {
    for (var D = 0, X = m, W; D < T; ++D)
      switch (W = ye[D].call(d, w, X, C, A, x, z, O, Y, H, V)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          X = W;
      }
    if (X !== m)
      return X;
  }
  function a(w) {
    switch (w) {
      case void 0:
      case null:
        T = ye.length = 0;
        break;
      default:
        if (typeof w == "function")
          ye[T++] = w;
        else if (typeof w == "object")
          for (var m = 0, C = w.length; m < C; ++m)
            a(w[m]);
        else
          B = !!w | 0;
    }
    return a;
  }
  function s(w) {
    return w = w.prefix, w !== void 0 && (F = null, w ? typeof w != "function" ? ce = 1 : (ce = 2, F = w) : ce = 0), s;
  }
  function d(w, m) {
    var C = w;
    if (33 > C.charCodeAt(0) && (C = C.trim()), k = C, C = [k], 0 < T) {
      var A = u(-1, m, C, C, Se, le, 0, 0, 0, 0);
      A !== void 0 && typeof A == "string" && (m = A);
    }
    var x = t(tt, C, m, 0, 0);
    return 0 < T && (A = u(-2, x, C, C, Se, le, x.length, 0, 0, 0), A !== void 0 && (x = A)), k = "", Ne = 0, le = Se = 1, x;
  }
  var v = /^\0+/g, p = /[\0\r\f]/g, y = /: */g, g = /zoo|gra/, S = /([,: ])(transform)/g, _ = /,\r+?/g, f = /([\t\r\n ])*\f?&/g, c = /@(k\w+)\s*(\S*)\s*/, h = /::(place)/g, E = /:(read-only)/g, P = /[svh]\w+-[tblr]{2}/, $ = /\(\s*(.*)\s*\)/g, j = /([\s\S]*?);/g, R = /-self|flex-/g, U = /[^]*?(:[rp][el]a[\w-]+)[^]*/, I = /stretch|:\s*\w+\-(?:conte|avail)/, ee = /([^-])(image-set\()/, le = 1, Se = 1, Ne = 0, ce = 1, tt = [], ye = [], T = 0, F = null, B = 0, k = "";
  return d.use = a, d.set = s, e !== void 0 && s(e), d;
}
var r0 = {
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
function o0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var i0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Gc = /* @__PURE__ */ o0(
  function(e) {
    return i0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Tt() {
  return (Tt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Xc = function(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}, Ju = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Tp.typeOf(e);
}, Pi = Object.freeze([]), on = Object.freeze({});
function lo(e) {
  return typeof e == "function";
}
function Zc(e) {
  return e.displayName || e.name || "Component";
}
function hs(e) {
  return e && typeof e.styledComponentId == "string";
}
var ar = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", vs = typeof window < "u" && "HTMLElement" in window, l0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY));
function mo(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
}
var u0 = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(n) {
    for (var r = 0, o = 0; o < n; o++)
      r += this.groupSizes[o];
    return r;
  }, t.insertRules = function(n, r) {
    if (n >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, l = i; n >= l; )
        (l <<= 1) < 0 && mo(16, "" + n);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(o), this.length = l;
      for (var u = i; u < l; u++)
        this.groupSizes[u] = 0;
    }
    for (var a = this.indexOfGroup(n + 1), s = 0, d = r.length; s < d; s++)
      this.tag.insertRule(a, r[s]) && (this.groupSizes[n]++, a++);
  }, t.clearGroup = function(n) {
    if (n < this.length) {
      var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r;
      this.groupSizes[n] = 0;
      for (var l = o; l < i; l++)
        this.tag.deleteRule(o);
    }
  }, t.getGroup = function(n) {
    var r = "";
    if (n >= this.length || this.groupSizes[n] === 0)
      return r;
    for (var o = this.groupSizes[n], i = this.indexOfGroup(n), l = i + o, u = i; u < l; u++)
      r += this.tag.getRule(u) + `/*!sc*/
`;
    return r;
  }, e;
}(), Yo = /* @__PURE__ */ new Map(), _i = /* @__PURE__ */ new Map(), Fr = 1, zo = function(e) {
  if (Yo.has(e))
    return Yo.get(e);
  for (; _i.has(Fr); )
    Fr++;
  var t = Fr++;
  return Yo.set(e, t), _i.set(t, e), t;
}, a0 = function(e) {
  return _i.get(e);
}, s0 = function(e, t) {
  t >= Fr && (Fr = t + 1), Yo.set(e, t), _i.set(t, e);
}, c0 = "style[" + ar + '][data-styled-version="5.3.11"]', f0 = new RegExp("^" + ar + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), d0 = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, l = o.length; i < l; i++)
    (r = o[i]) && e.registerName(t, r);
}, p0 = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = n.length; o < i; o++) {
    var l = n[o].trim();
    if (l) {
      var u = l.match(f0);
      if (u) {
        var a = 0 | parseInt(u[1], 10), s = u[2];
        a !== 0 && (s0(s, a), d0(e, s, u[3]), e.getTag().insertRules(a, r)), r.length = 0;
      } else
        r.push(l);
    }
  }
}, h0 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ih = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(u) {
    for (var a = u.childNodes, s = a.length; s >= 0; s--) {
      var d = a[s];
      if (d && d.nodeType === 1 && d.hasAttribute(ar))
        return d;
    }
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ar, "active"), r.setAttribute("data-styled-version", "5.3.11");
  var l = h0();
  return l && r.setAttribute("nonce", l), n.insertBefore(r, i), r;
}, v0 = function() {
  function e(n) {
    var r = this.element = ih(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, l = 0, u = i.length; l < u; l++) {
        var a = i[l];
        if (a.ownerNode === o)
          return a;
      }
      mo(17);
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
}(), m0 = function() {
  function e(n) {
    var r = this.element = ih(n);
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
}(), g0 = function() {
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
}(), Jc = vs, y0 = { isServer: !vs, useCSSOMInjection: !l0 }, lh = function() {
  function e(n, r, o) {
    n === void 0 && (n = on), r === void 0 && (r = {}), this.options = Tt({}, y0, {}, n), this.gs = r, this.names = new Map(o), this.server = !!n.isServer, !this.server && vs && Jc && (Jc = !1, function(i) {
      for (var l = document.querySelectorAll(c0), u = 0, a = l.length; u < a; u++) {
        var s = l[u];
        s && s.getAttribute(ar) !== "active" && (p0(i, s), s.parentNode && s.parentNode.removeChild(s));
      }
    }(this));
  }
  e.registerId = function(n) {
    return zo(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(Tt({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, l = r.target, n = o ? new g0(l) : i ? new v0(l) : new m0(l), new u0(n)));
    var n, r, o, i, l;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (zo(n), this.names.has(n))
      this.names.get(n).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(n, o);
    }
  }, t.insertRules = function(n, r, o) {
    this.registerName(n, r), this.getTag().insertRules(zo(n), o);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(zo(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), o = r.length, i = "", l = 0; l < o; l++) {
        var u = a0(l);
        if (u !== void 0) {
          var a = n.names.get(u), s = r.getGroup(l);
          if (a && s && a.size) {
            var d = ar + ".g" + l + '[id="' + u + '"]', v = "";
            a !== void 0 && a.forEach(function(p) {
              p.length > 0 && (v += p + ",");
            }), i += "" + s + d + '{content:"' + v + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), w0 = /(a)(d)/gi, qc = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function qu(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = qc(t % 52) + n;
  return (qc(t % 52) + n).replace(w0, "$1-$2");
}
var Vn = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, uh = function(e) {
  return Vn(5381, e);
};
function S0(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (lo(n) && !hs(n))
      return !1;
  }
  return !0;
}
var k0 = uh("5.3.11"), x0 = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && S0(t), this.componentId = n, this.baseHash = Vn(k0, n), this.baseStyle = r, lh.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var l = sr(this.rules, t, n, r).join(""), u = qu(Vn(this.baseHash, l) >>> 0);
        if (!n.hasNameForId(o, u)) {
          var a = r(l, "." + u, void 0, o);
          n.insertRules(o, u, a);
        }
        i.push(u), this.staticRulesId = u;
      }
    else {
      for (var s = this.rules.length, d = Vn(this.baseHash, r.hash), v = "", p = 0; p < s; p++) {
        var y = this.rules[p];
        if (typeof y == "string")
          v += y;
        else if (y) {
          var g = sr(y, t, n, r), S = Array.isArray(g) ? g.join("") : g;
          d = Vn(d, S + p), v += S;
        }
      }
      if (v) {
        var _ = qu(d >>> 0);
        if (!n.hasNameForId(o, _)) {
          var f = r(v, "." + _, void 0, o);
          n.insertRules(o, _, f);
        }
        i.push(_);
      }
    }
    return i.join(" ");
  }, e;
}(), E0 = /^\s*\/\/.*$/gm, C0 = [":", "[", ".", "#"];
function P0(e) {
  var t, n, r, o, i = e === void 0 ? on : e, l = i.options, u = l === void 0 ? on : l, a = i.plugins, s = a === void 0 ? Pi : a, d = new n0(u), v = [], p = /* @__PURE__ */ function(S) {
    function _(f) {
      if (f)
        try {
          S(f + "}");
        } catch {
        }
    }
    return function(f, c, h, E, P, $, j, R, U, I) {
      switch (f) {
        case 1:
          if (U === 0 && c.charCodeAt(0) === 64)
            return S(c + ";"), "";
          break;
        case 2:
          if (R === 0)
            return c + "/*|*/";
          break;
        case 3:
          switch (R) {
            case 102:
            case 112:
              return S(h[0] + c), "";
            default:
              return c + (I === 0 ? "/*|*/" : "");
          }
        case -2:
          c.split("/*|*/}").forEach(_);
      }
    };
  }(function(S) {
    v.push(S);
  }), y = function(S, _, f) {
    return _ === 0 && C0.indexOf(f[n.length]) !== -1 || f.match(o) ? S : "." + t;
  };
  function g(S, _, f, c) {
    c === void 0 && (c = "&");
    var h = S.replace(E0, ""), E = _ && f ? f + " " + _ + " { " + h + " }" : h;
    return t = c, n = _, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), d(f || !_ ? "" : _, E);
  }
  return d.use([].concat(s, [function(S, _, f) {
    S === 2 && f.length && f[0].lastIndexOf(n) > 0 && (f[0] = f[0].replace(r, y));
  }, p, function(S) {
    if (S === -2) {
      var _ = v;
      return v = [], _;
    }
  }])), g.hash = s.length ? s.reduce(function(S, _) {
    return _.name || mo(15), Vn(S, _.name);
  }, 5381).toString() : "", g;
}
var ah = fr.createContext();
ah.Consumer;
var sh = fr.createContext(), _0 = (sh.Consumer, new lh()), ea = P0();
function O0() {
  return pe.useContext(ah) || _0;
}
function A0() {
  return pe.useContext(sh) || ea;
}
var ch = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = ea);
      var l = r.name + i.hash;
      o.hasNameForId(r.id, l) || o.insertRules(r.id, l, i(r.rules, l, "@keyframes"));
    }, this.toString = function() {
      return mo(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ea), this.name + t.hash;
  }, e;
}(), N0 = /([A-Z])/, $0 = /([A-Z])/g, T0 = /^ms-/, j0 = function(e) {
  return "-" + e.toLowerCase();
};
function ef(e) {
  return N0.test(e) ? e.replace($0, j0).replace(T0, "-ms-") : e;
}
var tf = function(e) {
  return e == null || e === !1 || e === "";
};
function sr(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], l = 0, u = e.length; l < u; l += 1)
      (o = sr(e[l], t, n, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (tf(e))
    return "";
  if (hs(e))
    return "." + e.styledComponentId;
  if (lo(e)) {
    if (typeof (s = e) != "function" || s.prototype && s.prototype.isReactComponent || !t)
      return e;
    var a = e(t);
    return sr(a, t, n, r);
  }
  var s;
  return e instanceof ch ? n ? (e.inject(n, r), e.getName(r)) : e : Ju(e) ? function d(v, p) {
    var y, g, S = [];
    for (var _ in v)
      v.hasOwnProperty(_) && !tf(v[_]) && (Array.isArray(v[_]) && v[_].isCss || lo(v[_]) ? S.push(ef(_) + ":", v[_], ";") : Ju(v[_]) ? S.push.apply(S, d(v[_], _)) : S.push(ef(_) + ": " + (y = _, (g = v[_]) == null || typeof g == "boolean" || g === "" ? "" : typeof g != "number" || g === 0 || y in r0 || y.startsWith("--") ? String(g).trim() : g + "px") + ";"));
    return p ? [p + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var nf = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function fh(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return lo(e) || Ju(e) ? nf(sr(Xc(Pi, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : nf(sr(Xc(e, n)));
}
var R0 = function(e, t, n) {
  return n === void 0 && (n = on), e.theme !== n.theme && e.theme || t || n.theme;
}, z0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, L0 = /(^-|-$)/g;
function Xl(e) {
  return e.replace(z0, "-").replace(L0, "");
}
var dh = function(e) {
  return qu(uh(e) >>> 0);
};
function Lo(e) {
  return typeof e == "string" && !0;
}
var ta = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, I0 = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function D0(e, t, n) {
  var r = e[n];
  ta(t) && ta(r) ? ph(r, t) : e[n] = t;
}
function ph(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var l = i[o];
    if (ta(l))
      for (var u in l)
        I0(u) && D0(e, l[u], u);
  }
  return e;
}
var hh = fr.createContext();
hh.Consumer;
var Zl = {};
function vh(e, t, n) {
  var r = hs(e), o = !Lo(e), i = t.attrs, l = i === void 0 ? Pi : i, u = t.componentId, a = u === void 0 ? function(c, h) {
    var E = typeof c != "string" ? "sc" : Xl(c);
    Zl[E] = (Zl[E] || 0) + 1;
    var P = E + "-" + dh("5.3.11" + E + Zl[E]);
    return h ? h + "-" + P : P;
  }(t.displayName, t.parentComponentId) : u, s = t.displayName, d = s === void 0 ? function(c) {
    return Lo(c) ? "styled." + c : "Styled(" + Zc(c) + ")";
  }(e) : s, v = t.displayName && t.componentId ? Xl(t.displayName) + "-" + t.componentId : t.componentId || a, p = r && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, y = t.shouldForwardProp;
  r && e.shouldForwardProp && (y = t.shouldForwardProp ? function(c, h, E) {
    return e.shouldForwardProp(c, h, E) && t.shouldForwardProp(c, h, E);
  } : e.shouldForwardProp);
  var g, S = new x0(n, v, r ? e.componentStyle : void 0), _ = S.isStatic && l.length === 0, f = function(c, h) {
    return function(E, P, $, j) {
      var R = E.attrs, U = E.componentStyle, I = E.defaultProps, ee = E.foldedComponentIds, le = E.shouldForwardProp, Se = E.styledComponentId, Ne = E.target, ce = function(A, x, z) {
        A === void 0 && (A = on);
        var O = Tt({}, x, { theme: A }), Y = {};
        return z.forEach(function(H) {
          var V, D, X, W = H;
          for (V in lo(W) && (W = W(O)), W)
            O[V] = Y[V] = V === "className" ? (D = Y[V], X = W[V], D && X ? D + " " + X : D || X) : W[V];
        }), [O, Y];
      }(R0(P, pe.useContext(hh), I) || on, P, R), tt = ce[0], ye = ce[1], T = function(A, x, z, O) {
        var Y = O0(), H = A0(), V = x ? A.generateAndInjectStyles(on, Y, H) : A.generateAndInjectStyles(z, Y, H);
        return V;
      }(U, j, tt), F = $, B = ye.$as || P.$as || ye.as || P.as || Ne, k = Lo(B), w = ye !== P ? Tt({}, P, {}, ye) : P, m = {};
      for (var C in w)
        C[0] !== "$" && C !== "as" && (C === "forwardedAs" ? m.as = w[C] : (le ? le(C, Gc, B) : !k || Gc(C)) && (m[C] = w[C]));
      return P.style && ye.style !== P.style && (m.style = Tt({}, P.style, {}, ye.style)), m.className = Array.prototype.concat(ee, Se, T !== Se ? T : null, P.className, ye.className).filter(Boolean).join(" "), m.ref = F, pe.createElement(B, m);
    }(g, c, h, _);
  };
  return f.displayName = d, (g = fr.forwardRef(f)).attrs = p, g.componentStyle = S, g.displayName = d, g.shouldForwardProp = y, g.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Pi, g.styledComponentId = v, g.target = r ? e.target : e, g.withComponent = function(c) {
    var h = t.componentId, E = function($, j) {
      if ($ == null)
        return {};
      var R, U, I = {}, ee = Object.keys($);
      for (U = 0; U < ee.length; U++)
        R = ee[U], j.indexOf(R) >= 0 || (I[R] = $[R]);
      return I;
    }(t, ["componentId"]), P = h && h + "-" + (Lo(c) ? c : Xl(Zc(c)));
    return vh(c, Tt({}, E, { attrs: p, componentId: P }), n);
  }, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(c) {
    this._foldedDefaultProps = r ? ph({}, e.defaultProps, c) : c;
  } }), Object.defineProperty(g, "toString", { value: function() {
    return "." + g.styledComponentId;
  } }), o && zg(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), g;
}
var na = function(e) {
  return function t(n, r, o) {
    if (o === void 0 && (o = on), !Tp.isValidElementType(r))
      return mo(1, String(r));
    var i = function() {
      return n(r, o, fh.apply(void 0, arguments));
    };
    return i.withConfig = function(l) {
      return t(n, r, Tt({}, o, {}, l));
    }, i.attrs = function(l) {
      return t(n, r, Tt({}, o, { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
    }, i;
  }(vh, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  na[e] = na(e);
});
function n1(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = fh.apply(void 0, [e].concat(n)).join(""), i = dh(o);
  return new ch(i, o);
}
const dl = na;
function M0() {
  return /* @__PURE__ */ ze.jsx(rh.Consumer, { children: (e) => /* @__PURE__ */ ze.jsx(F0, { routes: e }) });
}
function F0({ routes: e }) {
  const t = Gy(), n = nh((r) => r.router.current);
  return /* @__PURE__ */ ze.jsx(B0, { children: e.map(({ id: r, title: o }) => /* @__PURE__ */ ze.jsx(U0, { active: r === n[0], onClick: () => t(Yy([r])), children: typeof o == "string" ? /* @__PURE__ */ ze.jsx("div", { children: o }) : o }, r)) });
}
const B0 = dl.nav`
  height: 28px;
  display: flex;
  padding: 0px 16px;
  padding-top: 6px;
  gap: 24px;
  //font-weight: 500;
  font-size: 14px;
  border-bottom: 1px solid var(${Mr.border});
`, U0 = dl.div`
  padding: 0 1em;
  ${(e) => e.active ? `border-bottom: 3px solid var(${Mr.buttonBackground});` : "opacity: 0.7; border-bottom: 3px solid transparent; cursor: pointer;"};
  > div {
    padding: 0.125em;
    border: ${(e) => e.active && Mr.contrastActiveBorder ? `1px solid var(${Mr.contrastActiveBorder})` : "none"};
  }
`;
function r1(e, t) {
  return function(r) {
    const { command: o, payload: i } = r.data;
    if (o) {
      const l = t[o];
      l ? e.dispatch(l(i)) : console.error(`Unable to find handler for command: ${o}`);
    } else
      console.error("Received message with unknown command", r.data);
  };
}
function o1(e) {
  const t = Object.keys(e);
  for (const n of t)
    console.log("starting listener for: ", n), e[n]();
}
function i1() {
  return /* @__PURE__ */ ze.jsxs(ze.Fragment, { children: [
    /* @__PURE__ */ ze.jsx(Zy, {}),
    /* @__PURE__ */ ze.jsx(b0, { children: /* @__PURE__ */ ze.jsx(M0, {}) }),
    /* @__PURE__ */ ze.jsx(V0, { children: /* @__PURE__ */ ze.jsx(e0, {}) })
  ] });
}
const b0 = dl.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 35px;
`, V0 = dl.div`
  position: fixed;
  top: 35px;
  left: 0;
  right: 0;
  bottom: 0;
`;
export {
  W0 as $,
  Q0 as A,
  i1 as N,
  K0 as P,
  fr as R,
  Mr as T,
  n1 as W,
  Oc as _,
  Y0 as a,
  Cp as b,
  Hp as c,
  X0 as d,
  dl as e,
  pe as f,
  Qm as g,
  rh as h,
  G0 as i,
  ze as j,
  Zy as k,
  Z0 as l,
  r1 as m,
  e0 as n,
  J0 as o,
  Mp as p,
  Oi as q,
  t1 as r,
  o1 as s,
  q0 as t,
  Vg as u,
  Rt as v,
  Za as w,
  H0 as x,
  vr as y,
  Yy as z
};
