var Wm = Object.defineProperty;
var bm = (e, t, n) => t in e ? Wm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Cr = (e, t, n) => bm(e, typeof t != "symbol" ? t + "" : t, n);
function Vm(e, t) {
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
var qS = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ek(e) {
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
var Xf = { exports: {} }, Gi = {}, Zf = { exports: {} }, W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go = Symbol.for("react.element"), Hm = Symbol.for("react.portal"), Qm = Symbol.for("react.fragment"), Km = Symbol.for("react.strict_mode"), Ym = Symbol.for("react.profiler"), Gm = Symbol.for("react.provider"), Xm = Symbol.for("react.context"), Zm = Symbol.for("react.forward_ref"), Jm = Symbol.for("react.suspense"), qm = Symbol.for("react.memo"), ev = Symbol.for("react.lazy"), tc = Symbol.iterator;
function tv(e) {
  return e === null || typeof e != "object" ? null : (e = tc && e[tc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Jf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, qf = Object.assign, ed = {};
function yr(e, t, n) {
  this.props = e, this.context = t, this.refs = ed, this.updater = n || Jf;
}
yr.prototype.isReactComponent = {};
yr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
yr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function td() {
}
td.prototype = yr.prototype;
function Fs(e, t, n) {
  this.props = e, this.context = t, this.refs = ed, this.updater = n || Jf;
}
var js = Fs.prototype = new td();
js.constructor = Fs;
qf(js, yr.prototype);
js.isPureReactComponent = !0;
var nc = Array.isArray, nd = Object.prototype.hasOwnProperty, Bs = { current: null }, rd = { key: !0, ref: !0, __self: !0, __source: !0 };
function od(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) nd.call(t, r) && !rd.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: go, type: e, key: i, ref: l, props: o, _owner: Bs.current };
}
function nv(e, t) {
  return { $$typeof: go, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Us(e) {
  return typeof e == "object" && e !== null && e.$$typeof === go;
}
function rv(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var rc = /\/+/g;
function Bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? rv("" + e.key) : t.toString(36);
}
function ei(e, t, n, r, o) {
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
        case go:
        case Hm:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + Bl(l, 0) : r, nc(o) ? (n = "", e != null && (n = e.replace(rc, "$&/") + "/"), ei(o, t, n, "", function(a) {
    return a;
  })) : o != null && (Us(o) && (o = nv(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(rc, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", nc(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Bl(i, u);
    l += ei(i, t, n, s, o);
  }
  else if (s = tv(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Bl(i, u++), l += ei(i, t, n, s, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function To(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return ei(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function ov(e) {
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
var Fe = { current: null }, ti = { transition: null }, iv = { ReactCurrentDispatcher: Fe, ReactCurrentBatchConfig: ti, ReactCurrentOwner: Bs };
function id() {
  throw Error("act(...) is not supported in production builds of React.");
}
W.Children = { map: To, forEach: function(e, t, n) {
  To(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return To(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return To(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Us(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
W.Component = yr;
W.Fragment = Qm;
W.Profiler = Ym;
W.PureComponent = Fs;
W.StrictMode = Km;
W.Suspense = Jm;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iv;
W.act = id;
W.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = qf({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Bs.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) nd.call(t, s) && !rd.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: go, type: e.type, key: o, ref: i, props: r, _owner: l };
};
W.createContext = function(e) {
  return e = { $$typeof: Xm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Gm, _context: e }, e.Consumer = e;
};
W.createElement = od;
W.createFactory = function(e) {
  var t = od.bind(null, e);
  return t.type = e, t;
};
W.createRef = function() {
  return { current: null };
};
W.forwardRef = function(e) {
  return { $$typeof: Zm, render: e };
};
W.isValidElement = Us;
W.lazy = function(e) {
  return { $$typeof: ev, _payload: { _status: -1, _result: e }, _init: ov };
};
W.memo = function(e, t) {
  return { $$typeof: qm, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function(e) {
  var t = ti.transition;
  ti.transition = {};
  try {
    e();
  } finally {
    ti.transition = t;
  }
};
W.unstable_act = id;
W.useCallback = function(e, t) {
  return Fe.current.useCallback(e, t);
};
W.useContext = function(e) {
  return Fe.current.useContext(e);
};
W.useDebugValue = function() {
};
W.useDeferredValue = function(e) {
  return Fe.current.useDeferredValue(e);
};
W.useEffect = function(e, t) {
  return Fe.current.useEffect(e, t);
};
W.useId = function() {
  return Fe.current.useId();
};
W.useImperativeHandle = function(e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function(e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function(e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
W.useMemo = function(e, t) {
  return Fe.current.useMemo(e, t);
};
W.useReducer = function(e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
W.useRef = function(e) {
  return Fe.current.useRef(e);
};
W.useState = function(e) {
  return Fe.current.useState(e);
};
W.useSyncExternalStore = function(e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function() {
  return Fe.current.useTransition();
};
W.version = "18.3.1";
Zf.exports = W;
var k = Zf.exports;
const sn = /* @__PURE__ */ zs(k), Ru = /* @__PURE__ */ Vm({
  __proto__: null,
  default: sn
}, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lv = k, uv = Symbol.for("react.element"), sv = Symbol.for("react.fragment"), av = Object.prototype.hasOwnProperty, cv = lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, fv = { key: !0, ref: !0, __self: !0, __source: !0 };
function ld(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) av.call(t, r) && !fv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: uv, type: e, key: i, ref: l, props: o, _owner: cv.current };
}
Gi.Fragment = sv;
Gi.jsx = ld;
Gi.jsxs = ld;
Xf.exports = Gi;
var L = Xf.exports, ud = { exports: {} }, et = {}, sd = { exports: {} }, ad = {};
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
  function t(R, z) {
    var F = R.length;
    R.push(z);
    e: for (; 0 < F; ) {
      var J = F - 1 >>> 1, O = R[J];
      if (0 < o(O, z)) R[J] = z, R[F] = O, F = J;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var z = R[0], F = R.pop();
    if (F !== z) {
      R[0] = F;
      e: for (var J = 0, O = R.length, A = O >>> 1; J < A; ) {
        var D = 2 * (J + 1) - 1, j = R[D], E = D + 1, b = R[E];
        if (0 > o(j, F)) E < O && 0 > o(b, j) ? (R[J] = b, R[E] = F, J = E) : (R[J] = j, R[D] = F, J = D);
        else if (E < O && 0 > o(b, F)) R[J] = b, R[E] = F, J = E;
        else break e;
      }
    }
    return z;
  }
  function o(R, z) {
    var F = R.sortIndex - z.sortIndex;
    return F !== 0 ? F : R.id - z.id;
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
  var s = [], a = [], f = 1, m = null, p = 3, w = !1, g = !1, v = !1, S = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(R) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= R) r(a), z.sortIndex = z.expirationTime, t(s, z);
      else break;
      z = n(a);
    }
  }
  function y(R) {
    if (v = !1, h(R), !g) if (n(s) !== null) g = !0, Nt(C);
    else {
      var z = n(a);
      z !== null && Le(y, z.startTime - R);
    }
  }
  function C(R, z) {
    g = !1, v && (v = !1, d(P), P = -1), w = !0;
    var F = p;
    try {
      for (h(z), m = n(s); m !== null && (!(m.expirationTime > z) || R && !ce()); ) {
        var J = m.callback;
        if (typeof J == "function") {
          m.callback = null, p = m.priorityLevel;
          var O = J(m.expirationTime <= z);
          z = e.unstable_now(), typeof O == "function" ? m.callback = O : m === n(s) && r(s), h(z);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var A = !0;
      else {
        var D = n(a);
        D !== null && Le(y, D.startTime - z), A = !1;
      }
      return A;
    } finally {
      m = null, p = F, w = !1;
    }
  }
  var _ = !1, x = null, P = -1, I = 5, M = -1;
  function ce() {
    return !(e.unstable_now() - M < I);
  }
  function de() {
    if (x !== null) {
      var R = e.unstable_now();
      M = R;
      var z = !0;
      try {
        z = x(!0, R);
      } finally {
        z ? ye() : (_ = !1, x = null);
      }
    } else _ = !1;
  }
  var ye;
  if (typeof c == "function") ye = function() {
    c(de);
  };
  else if (typeof MessageChannel < "u") {
    var Ke = new MessageChannel(), Re = Ke.port2;
    Ke.port1.onmessage = de, ye = function() {
      Re.postMessage(null);
    };
  } else ye = function() {
    S(de, 0);
  };
  function Nt(R) {
    x = R, _ || (_ = !0, ye());
  }
  function Le(R, z) {
    P = S(function() {
      R(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    g || w || (g = !0, Nt(C));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(R) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = p;
    }
    var F = p;
    p = z;
    try {
      return R();
    } finally {
      p = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, z) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var F = p;
    p = R;
    try {
      return z();
    } finally {
      p = F;
    }
  }, e.unstable_scheduleCallback = function(R, z, F) {
    var J = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? J + F : J) : F = J, R) {
      case 1:
        var O = -1;
        break;
      case 2:
        O = 250;
        break;
      case 5:
        O = 1073741823;
        break;
      case 4:
        O = 1e4;
        break;
      default:
        O = 5e3;
    }
    return O = F + O, R = { id: f++, callback: z, priorityLevel: R, startTime: F, expirationTime: O, sortIndex: -1 }, F > J ? (R.sortIndex = F, t(a, R), n(s) === null && R === n(a) && (v ? (d(P), P = -1) : v = !0, Le(y, F - J))) : (R.sortIndex = O, t(s, R), g || w || (g = !0, Nt(C))), R;
  }, e.unstable_shouldYield = ce, e.unstable_wrapCallback = function(R) {
    var z = p;
    return function() {
      var F = p;
      p = z;
      try {
        return R.apply(this, arguments);
      } finally {
        p = F;
      }
    };
  };
})(ad);
sd.exports = ad;
var dv = sd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pv = k, Je = dv;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var cd = /* @__PURE__ */ new Set(), Yr = {};
function Mn(e, t) {
  ar(e, t), ar(e + "Capture", t);
}
function ar(e, t) {
  for (Yr[e] = t, e = 0; e < t.length; e++) cd.add(t[e]);
}
var Mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Tu = Object.prototype.hasOwnProperty, hv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, oc = {}, ic = {};
function mv(e) {
  return Tu.call(ic, e) ? !0 : Tu.call(oc, e) ? !1 : hv.test(e) ? ic[e] = !0 : (oc[e] = !0, !1);
}
function vv(e, t, n, r) {
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
function gv(e, t, n, r) {
  if (t === null || typeof t > "u" || vv(e, t, n, r)) return !0;
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
function je(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ne[e] = new je(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ne[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ne[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ne[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ne[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ne[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ne[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ne[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ne[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ws = /[\-:]([a-z])/g;
function bs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ws,
    bs
  );
  Ne[t] = new je(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ws, bs);
  Ne[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ws, bs);
  Ne[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ne[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ne[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Vs(e, t, n, r) {
  var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (gv(t, n, o, r) && (n = null), r || o === null ? mv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Bt = pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oo = Symbol.for("react.element"), Wn = Symbol.for("react.portal"), bn = Symbol.for("react.fragment"), Hs = Symbol.for("react.strict_mode"), Ou = Symbol.for("react.profiler"), fd = Symbol.for("react.provider"), dd = Symbol.for("react.context"), Qs = Symbol.for("react.forward_ref"), Au = Symbol.for("react.suspense"), Du = Symbol.for("react.suspense_list"), Ks = Symbol.for("react.memo"), Ht = Symbol.for("react.lazy"), pd = Symbol.for("react.offscreen"), lc = Symbol.iterator;
function xr(e) {
  return e === null || typeof e != "object" ? null : (e = lc && e[lc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ie = Object.assign, Ul;
function Dr(e) {
  if (Ul === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ul = t && t[1] || "";
  }
  return `
` + Ul + e;
}
var Wl = !1;
function bl(e, t) {
  if (!e || Wl) return "";
  Wl = !0;
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
    Wl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Dr(e) : "";
}
function yv(e) {
  switch (e.tag) {
    case 5:
      return Dr(e.type);
    case 16:
      return Dr("Lazy");
    case 13:
      return Dr("Suspense");
    case 19:
      return Dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = bl(e.type, !1), e;
    case 11:
      return e = bl(e.type.render, !1), e;
    case 1:
      return e = bl(e.type, !0), e;
    default:
      return "";
  }
}
function $u(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bn:
      return "Fragment";
    case Wn:
      return "Portal";
    case Ou:
      return "Profiler";
    case Hs:
      return "StrictMode";
    case Au:
      return "Suspense";
    case Du:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case dd:
      return (e.displayName || "Context") + ".Consumer";
    case fd:
      return (e._context.displayName || "Context") + ".Provider";
    case Qs:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ks:
      return t = e.displayName || null, t !== null ? t : $u(e.type) || "Memo";
    case Ht:
      t = e._payload, e = e._init;
      try {
        return $u(e(t));
      } catch {
      }
  }
  return null;
}
function wv(e) {
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
      return $u(t);
    case 8:
      return t === Hs ? "StrictMode" : "Mode";
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
function an(e) {
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
function hd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Sv(e) {
  var t = hd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ao(e) {
  e._valueTracker || (e._valueTracker = Sv(e));
}
function md(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = hd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function mi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Lu(e, t) {
  var n = t.checked;
  return ie({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function uc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = an(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vd(e, t) {
  t = t.checked, t != null && Vs(e, "checked", t, !1);
}
function Mu(e, t) {
  vd(e, t);
  var n = an(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Iu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Iu(e, t.type, an(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function sc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Iu(e, t, n) {
  (t !== "number" || mi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $r = Array.isArray;
function tr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + an(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function zu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ie({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ac(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(N(92));
      if ($r(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: an(n) };
}
function gd(e, t) {
  var n = an(t.value), r = an(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function cc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? yd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Do, wd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Do = Do || document.createElement("div"), Do.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Do.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Gr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
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
}, kv = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function(e) {
  kv.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), zr[t] = zr[e];
  });
});
function Sd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zr.hasOwnProperty(e) && zr[e] ? ("" + t).trim() : t + "px";
}
function kd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Sd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Ev = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ju(e, t) {
  if (t) {
    if (Ev[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Bu(e, t) {
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
var Uu = null;
function Ys(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Wu = null, nr = null, rr = null;
function fc(e) {
  if (e = So(e)) {
    if (typeof Wu != "function") throw Error(N(280));
    var t = e.stateNode;
    t && (t = el(t), Wu(e.stateNode, e.type, t));
  }
}
function Ed(e) {
  nr ? rr ? rr.push(e) : rr = [e] : nr = e;
}
function Cd() {
  if (nr) {
    var e = nr, t = rr;
    if (rr = nr = null, fc(e), t) for (e = 0; e < t.length; e++) fc(t[e]);
  }
}
function xd(e, t) {
  return e(t);
}
function _d() {
}
var Vl = !1;
function Pd(e, t, n) {
  if (Vl) return e(t, n);
  Vl = !0;
  try {
    return xd(e, t, n);
  } finally {
    Vl = !1, (nr !== null || rr !== null) && (_d(), Cd());
  }
}
function Xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = el(n);
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var bu = !1;
if (Mt) try {
  var _r = {};
  Object.defineProperty(_r, "passive", { get: function() {
    bu = !0;
  } }), window.addEventListener("test", _r, _r), window.removeEventListener("test", _r, _r);
} catch {
  bu = !1;
}
function Cv(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (f) {
    this.onError(f);
  }
}
var Fr = !1, vi = null, gi = !1, Vu = null, xv = { onError: function(e) {
  Fr = !0, vi = e;
} };
function _v(e, t, n, r, o, i, l, u, s) {
  Fr = !1, vi = null, Cv.apply(xv, arguments);
}
function Pv(e, t, n, r, o, i, l, u, s) {
  if (_v.apply(this, arguments), Fr) {
    if (Fr) {
      var a = vi;
      Fr = !1, vi = null;
    } else throw Error(N(198));
    gi || (gi = !0, Vu = a);
  }
}
function In(e) {
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
function Nd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function dc(e) {
  if (In(e) !== e) throw Error(N(188));
}
function Nv(e) {
  var t = e.alternate;
  if (!t) {
    if (t = In(e), t === null) throw Error(N(188));
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
        if (i === n) return dc(o), e;
        if (i === r) return dc(o), t;
        i = i.sibling;
      }
      throw Error(N(188));
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
        if (!l) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Rd(e) {
  return e = Nv(e), e !== null ? Td(e) : null;
}
function Td(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Td(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Od = Je.unstable_scheduleCallback, pc = Je.unstable_cancelCallback, Rv = Je.unstable_shouldYield, Tv = Je.unstable_requestPaint, ae = Je.unstable_now, Ov = Je.unstable_getCurrentPriorityLevel, Gs = Je.unstable_ImmediatePriority, Ad = Je.unstable_UserBlockingPriority, yi = Je.unstable_NormalPriority, Av = Je.unstable_LowPriority, Dd = Je.unstable_IdlePriority, Xi = null, xt = null;
function Dv(e) {
  if (xt && typeof xt.onCommitFiberRoot == "function") try {
    xt.onCommitFiberRoot(Xi, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var vt = Math.clz32 ? Math.clz32 : Mv, $v = Math.log, Lv = Math.LN2;
function Mv(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - ($v(e) / Lv | 0) | 0;
}
var $o = 64, Lo = 4194304;
function Lr(e) {
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
function wi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? r = Lr(u) : (i &= l, i !== 0 && (r = Lr(i)));
  } else l = n & ~o, l !== 0 ? r = Lr(l) : i !== 0 && (r = Lr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - vt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Iv(e, t) {
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
function zv(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - vt(i), u = 1 << l, s = o[l];
    s === -1 ? (!(u & n) || u & r) && (o[l] = Iv(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Hu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function $d() {
  var e = $o;
  return $o <<= 1, !($o & 4194240) && ($o = 64), e;
}
function Hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function yo(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vt(t), e[t] = n;
}
function Fv(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - vt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Xs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - vt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var G = 0;
function Ld(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Md, Zs, Id, zd, Fd, Qu = !1, Mo = [], Zt = null, Jt = null, qt = null, Zr = /* @__PURE__ */ new Map(), Jr = /* @__PURE__ */ new Map(), Kt = [], jv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function hc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zt = null;
      break;
    case "dragenter":
    case "dragleave":
      Jt = null;
      break;
    case "mouseover":
    case "mouseout":
      qt = null;
      break;
    case "pointerover":
    case "pointerout":
      Zr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jr.delete(t.pointerId);
  }
}
function Pr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = So(t), t !== null && Zs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Bv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Zt = Pr(Zt, e, t, n, r, o), !0;
    case "dragenter":
      return Jt = Pr(Jt, e, t, n, r, o), !0;
    case "mouseover":
      return qt = Pr(qt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Zr.set(i, Pr(Zr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Jr.set(i, Pr(Jr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function jd(e) {
  var t = yn(e.target);
  if (t !== null) {
    var n = In(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Nd(n), t !== null) {
          e.blockedOn = t, Fd(e.priority, function() {
            Id(n);
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
function ni(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ku(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Uu = r, n.target.dispatchEvent(r), Uu = null;
    } else return t = So(n), t !== null && Zs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function mc(e, t, n) {
  ni(e) && n.delete(t);
}
function Uv() {
  Qu = !1, Zt !== null && ni(Zt) && (Zt = null), Jt !== null && ni(Jt) && (Jt = null), qt !== null && ni(qt) && (qt = null), Zr.forEach(mc), Jr.forEach(mc);
}
function Nr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Qu || (Qu = !0, Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Uv)));
}
function qr(e) {
  function t(o) {
    return Nr(o, e);
  }
  if (0 < Mo.length) {
    Nr(Mo[0], e);
    for (var n = 1; n < Mo.length; n++) {
      var r = Mo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Zt !== null && Nr(Zt, e), Jt !== null && Nr(Jt, e), qt !== null && Nr(qt, e), Zr.forEach(t), Jr.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) jd(n), n.blockedOn === null && Kt.shift();
}
var or = Bt.ReactCurrentBatchConfig, Si = !0;
function Wv(e, t, n, r) {
  var o = G, i = or.transition;
  or.transition = null;
  try {
    G = 1, Js(e, t, n, r);
  } finally {
    G = o, or.transition = i;
  }
}
function bv(e, t, n, r) {
  var o = G, i = or.transition;
  or.transition = null;
  try {
    G = 4, Js(e, t, n, r);
  } finally {
    G = o, or.transition = i;
  }
}
function Js(e, t, n, r) {
  if (Si) {
    var o = Ku(e, t, n, r);
    if (o === null) tu(e, t, r, ki, n), hc(e, r);
    else if (Bv(o, e, t, n, r)) r.stopPropagation();
    else if (hc(e, r), t & 4 && -1 < jv.indexOf(e)) {
      for (; o !== null; ) {
        var i = So(o);
        if (i !== null && Md(i), i = Ku(e, t, n, r), i === null && tu(e, t, r, ki, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else tu(e, t, r, null, n);
  }
}
var ki = null;
function Ku(e, t, n, r) {
  if (ki = null, e = Ys(r), e = yn(e), e !== null) if (t = In(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Nd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ki = e, null;
}
function Bd(e) {
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
      switch (Ov()) {
        case Gs:
          return 1;
        case Ad:
          return 4;
        case yi:
        case Av:
          return 16;
        case Dd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gt = null, qs = null, ri = null;
function Ud() {
  if (ri) return ri;
  var e, t = qs, n = t.length, r, o = "value" in Gt ? Gt.value : Gt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return ri = o.slice(e, 1 < r ? 1 - r : void 0);
}
function oi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Io() {
  return !0;
}
function vc() {
  return !1;
}
function tt(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Io : vc, this.isPropagationStopped = vc, this;
  }
  return ie(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Io);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Io);
  }, persist: function() {
  }, isPersistent: Io }), t;
}
var wr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ea = tt(wr), wo = ie({}, wr, { view: 0, detail: 0 }), Vv = tt(wo), Ql, Kl, Rr, Zi = ie({}, wo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ta, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Rr && (Rr && e.type === "mousemove" ? (Ql = e.screenX - Rr.screenX, Kl = e.screenY - Rr.screenY) : Kl = Ql = 0, Rr = e), Ql);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Kl;
} }), gc = tt(Zi), Hv = ie({}, Zi, { dataTransfer: 0 }), Qv = tt(Hv), Kv = ie({}, wo, { relatedTarget: 0 }), Yl = tt(Kv), Yv = ie({}, wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gv = tt(Yv), Xv = ie({}, wr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Zv = tt(Xv), Jv = ie({}, wr, { data: 0 }), yc = tt(Jv), qv = {
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
}, eg = {
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
}, tg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ng(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tg[e]) ? !!t[e] : !1;
}
function ta() {
  return ng;
}
var rg = ie({}, wo, { key: function(e) {
  if (e.key) {
    var t = qv[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? eg[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ta, charCode: function(e) {
  return e.type === "keypress" ? oi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), og = tt(rg), ig = ie({}, Zi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wc = tt(ig), lg = ie({}, wo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ta }), ug = tt(lg), sg = ie({}, wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ag = tt(sg), cg = ie({}, Zi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), fg = tt(cg), dg = [9, 13, 27, 32], na = Mt && "CompositionEvent" in window, jr = null;
Mt && "documentMode" in document && (jr = document.documentMode);
var pg = Mt && "TextEvent" in window && !jr, Wd = Mt && (!na || jr && 8 < jr && 11 >= jr), Sc = " ", kc = !1;
function bd(e, t) {
  switch (e) {
    case "keyup":
      return dg.indexOf(t.keyCode) !== -1;
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
function Vd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Vn = !1;
function hg(e, t) {
  switch (e) {
    case "compositionend":
      return Vd(t);
    case "keypress":
      return t.which !== 32 ? null : (kc = !0, Sc);
    case "textInput":
      return e = t.data, e === Sc && kc ? null : e;
    default:
      return null;
  }
}
function mg(e, t) {
  if (Vn) return e === "compositionend" || !na && bd(e, t) ? (e = Ud(), ri = qs = Gt = null, Vn = !1, e) : null;
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
      return Wd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ec(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vg[e.type] : t === "textarea";
}
function Hd(e, t, n, r) {
  Ed(r), t = Ei(t, "onChange"), 0 < t.length && (n = new ea("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Br = null, eo = null;
function gg(e) {
  np(e, 0);
}
function Ji(e) {
  var t = Kn(e);
  if (md(t)) return e;
}
function yg(e, t) {
  if (e === "change") return t;
}
var Qd = !1;
if (Mt) {
  var Gl;
  if (Mt) {
    var Xl = "oninput" in document;
    if (!Xl) {
      var Cc = document.createElement("div");
      Cc.setAttribute("oninput", "return;"), Xl = typeof Cc.oninput == "function";
    }
    Gl = Xl;
  } else Gl = !1;
  Qd = Gl && (!document.documentMode || 9 < document.documentMode);
}
function xc() {
  Br && (Br.detachEvent("onpropertychange", Kd), eo = Br = null);
}
function Kd(e) {
  if (e.propertyName === "value" && Ji(eo)) {
    var t = [];
    Hd(t, eo, e, Ys(e)), Pd(gg, t);
  }
}
function wg(e, t, n) {
  e === "focusin" ? (xc(), Br = t, eo = n, Br.attachEvent("onpropertychange", Kd)) : e === "focusout" && xc();
}
function Sg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ji(eo);
}
function kg(e, t) {
  if (e === "click") return Ji(t);
}
function Eg(e, t) {
  if (e === "input" || e === "change") return Ji(t);
}
function Cg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var yt = typeof Object.is == "function" ? Object.is : Cg;
function to(e, t) {
  if (yt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Tu.call(t, o) || !yt(e[o], t[o])) return !1;
  }
  return !0;
}
function _c(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Pc(e, t) {
  var n = _c(e);
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
    n = _c(n);
  }
}
function Yd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Gd() {
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
function ra(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function xg(e) {
  var t = Gd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Yd(n.ownerDocument.documentElement, n)) {
    if (r !== null && ra(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Pc(n, i);
        var l = Pc(
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
var _g = Mt && "documentMode" in document && 11 >= document.documentMode, Hn = null, Yu = null, Ur = null, Gu = !1;
function Nc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gu || Hn == null || Hn !== mi(r) || (r = Hn, "selectionStart" in r && ra(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ur && to(Ur, r) || (Ur = r, r = Ei(Yu, "onSelect"), 0 < r.length && (t = new ea("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Hn)));
}
function zo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Qn = { animationend: zo("Animation", "AnimationEnd"), animationiteration: zo("Animation", "AnimationIteration"), animationstart: zo("Animation", "AnimationStart"), transitionend: zo("Transition", "TransitionEnd") }, Zl = {}, Xd = {};
Mt && (Xd = document.createElement("div").style, "AnimationEvent" in window || (delete Qn.animationend.animation, delete Qn.animationiteration.animation, delete Qn.animationstart.animation), "TransitionEvent" in window || delete Qn.transitionend.transition);
function qi(e) {
  if (Zl[e]) return Zl[e];
  if (!Qn[e]) return e;
  var t = Qn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xd) return Zl[e] = t[n];
  return e;
}
var Zd = qi("animationend"), Jd = qi("animationiteration"), qd = qi("animationstart"), ep = qi("transitionend"), tp = /* @__PURE__ */ new Map(), Rc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function dn(e, t) {
  tp.set(e, t), Mn(t, [e]);
}
for (var Jl = 0; Jl < Rc.length; Jl++) {
  var ql = Rc[Jl], Pg = ql.toLowerCase(), Ng = ql[0].toUpperCase() + ql.slice(1);
  dn(Pg, "on" + Ng);
}
dn(Zd, "onAnimationEnd");
dn(Jd, "onAnimationIteration");
dn(qd, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(ep, "onTransitionEnd");
ar("onMouseEnter", ["mouseout", "mouseover"]);
ar("onMouseLeave", ["mouseout", "mouseover"]);
ar("onPointerEnter", ["pointerout", "pointerover"]);
ar("onPointerLeave", ["pointerout", "pointerover"]);
Mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));
function Tc(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Pv(r, t, void 0, e), e.currentTarget = null;
}
function np(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, a = u.currentTarget;
        if (u = u.listener, s !== i && o.isPropagationStopped()) break e;
        Tc(o, u, a), i = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== i && o.isPropagationStopped()) break e;
        Tc(o, u, a), i = s;
      }
    }
  }
  if (gi) throw e = Vu, gi = !1, Vu = null, e;
}
function ee(e, t) {
  var n = t[es];
  n === void 0 && (n = t[es] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (rp(t, e, 2, !1), n.add(r));
}
function eu(e, t, n) {
  var r = 0;
  t && (r |= 4), rp(n, e, r, t);
}
var Fo = "_reactListening" + Math.random().toString(36).slice(2);
function no(e) {
  if (!e[Fo]) {
    e[Fo] = !0, cd.forEach(function(n) {
      n !== "selectionchange" && (Rg.has(n) || eu(n, !1, e), eu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fo] || (t[Fo] = !0, eu("selectionchange", !1, t));
  }
}
function rp(e, t, n, r) {
  switch (Bd(t)) {
    case 1:
      var o = Wv;
      break;
    case 4:
      o = bv;
      break;
    default:
      o = Js;
  }
  n = o.bind(null, t, n, e), o = void 0, !bu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function tu(e, t, n, r, o) {
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
  Pd(function() {
    var a = i, f = Ys(n), m = [];
    e: {
      var p = tp.get(e);
      if (p !== void 0) {
        var w = ea, g = e;
        switch (e) {
          case "keypress":
            if (oi(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = og;
            break;
          case "focusin":
            g = "focus", w = Yl;
            break;
          case "focusout":
            g = "blur", w = Yl;
            break;
          case "beforeblur":
          case "afterblur":
            w = Yl;
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
            w = gc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Qv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = ug;
            break;
          case Zd:
          case Jd:
          case qd:
            w = Gv;
            break;
          case ep:
            w = ag;
            break;
          case "scroll":
            w = Vv;
            break;
          case "wheel":
            w = fg;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Zv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = wc;
        }
        var v = (t & 4) !== 0, S = !v && e === "scroll", d = v ? p !== null ? p + "Capture" : null : p;
        v = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var y = h.stateNode;
          if (h.tag === 5 && y !== null && (h = y, d !== null && (y = Xr(c, d), y != null && v.push(ro(c, y, h)))), S) break;
          c = c.return;
        }
        0 < v.length && (p = new w(p, g, null, n, f), m.push({ event: p, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && n !== Uu && (g = n.relatedTarget || n.fromElement) && (yn(g) || g[It])) break e;
        if ((w || p) && (p = f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (g = n.relatedTarget || n.toElement, w = a, g = g ? yn(g) : null, g !== null && (S = In(g), g !== S || g.tag !== 5 && g.tag !== 6) && (g = null)) : (w = null, g = a), w !== g)) {
          if (v = gc, y = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (v = wc, y = "onPointerLeave", d = "onPointerEnter", c = "pointer"), S = w == null ? p : Kn(w), h = g == null ? p : Kn(g), p = new v(y, c + "leave", w, n, f), p.target = S, p.relatedTarget = h, y = null, yn(f) === a && (v = new v(d, c + "enter", g, n, f), v.target = h, v.relatedTarget = S, y = v), S = y, w && g) t: {
            for (v = w, d = g, c = 0, h = v; h; h = Fn(h)) c++;
            for (h = 0, y = d; y; y = Fn(y)) h++;
            for (; 0 < c - h; ) v = Fn(v), c--;
            for (; 0 < h - c; ) d = Fn(d), h--;
            for (; c--; ) {
              if (v === d || d !== null && v === d.alternate) break t;
              v = Fn(v), d = Fn(d);
            }
            v = null;
          }
          else v = null;
          w !== null && Oc(m, p, w, v, !1), g !== null && S !== null && Oc(m, S, g, v, !0);
        }
      }
      e: {
        if (p = a ? Kn(a) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file") var C = yg;
        else if (Ec(p)) if (Qd) C = Eg;
        else {
          C = Sg;
          var _ = wg;
        }
        else (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = kg);
        if (C && (C = C(e, a))) {
          Hd(m, C, n, f);
          break e;
        }
        _ && _(e, p, a), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && Iu(p, "number", p.value);
      }
      switch (_ = a ? Kn(a) : window, e) {
        case "focusin":
          (Ec(_) || _.contentEditable === "true") && (Hn = _, Yu = a, Ur = null);
          break;
        case "focusout":
          Ur = Yu = Hn = null;
          break;
        case "mousedown":
          Gu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Gu = !1, Nc(m, n, f);
          break;
        case "selectionchange":
          if (_g) break;
        case "keydown":
        case "keyup":
          Nc(m, n, f);
      }
      var x;
      if (na) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Vn ? bd(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Wd && n.locale !== "ko" && (Vn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Vn && (x = Ud()) : (Gt = f, qs = "value" in Gt ? Gt.value : Gt.textContent, Vn = !0)), _ = Ei(a, P), 0 < _.length && (P = new yc(P, e, null, n, f), m.push({ event: P, listeners: _ }), x ? P.data = x : (x = Vd(n), x !== null && (P.data = x)))), (x = pg ? hg(e, n) : mg(e, n)) && (a = Ei(a, "onBeforeInput"), 0 < a.length && (f = new yc("onBeforeInput", "beforeinput", null, n, f), m.push({ event: f, listeners: a }), f.data = x));
    }
    np(m, t);
  });
}
function ro(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ei(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Xr(e, n), i != null && r.unshift(ro(e, i, o)), i = Xr(e, t), i != null && r.push(ro(e, i, o))), e = e.return;
  }
  return r;
}
function Fn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Oc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && a !== null && (u = a, o ? (s = Xr(n, i), s != null && l.unshift(ro(n, s, u))) : o || (s = Xr(n, i), s != null && l.push(ro(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Tg = /\r\n?/g, Og = /\u0000|\uFFFD/g;
function Ac(e) {
  return (typeof e == "string" ? e : "" + e).replace(Tg, `
`).replace(Og, "");
}
function jo(e, t, n) {
  if (t = Ac(t), Ac(e) !== t && n) throw Error(N(425));
}
function Ci() {
}
var Xu = null, Zu = null;
function Ju(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var qu = typeof setTimeout == "function" ? setTimeout : void 0, Ag = typeof clearTimeout == "function" ? clearTimeout : void 0, Dc = typeof Promise == "function" ? Promise : void 0, Dg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dc < "u" ? function(e) {
  return Dc.resolve(null).then(e).catch($g);
} : qu;
function $g(e) {
  setTimeout(function() {
    throw e;
  });
}
function nu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), qr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  qr(t);
}
function en(e) {
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
function $c(e) {
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
var Sr = Math.random().toString(36).slice(2), Et = "__reactFiber$" + Sr, oo = "__reactProps$" + Sr, It = "__reactContainer$" + Sr, es = "__reactEvents$" + Sr, Lg = "__reactListeners$" + Sr, Mg = "__reactHandles$" + Sr;
function yn(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[It] || n[Et]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = $c(e); e !== null; ) {
        if (n = e[Et]) return n;
        e = $c(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function So(e) {
  return e = e[Et] || e[It], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function el(e) {
  return e[oo] || null;
}
var ts = [], Yn = -1;
function pn(e) {
  return { current: e };
}
function te(e) {
  0 > Yn || (e.current = ts[Yn], ts[Yn] = null, Yn--);
}
function q(e, t) {
  Yn++, ts[Yn] = e.current, e.current = t;
}
var cn = {}, $e = pn(cn), be = pn(!1), _n = cn;
function cr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ve(e) {
  return e = e.childContextTypes, e != null;
}
function xi() {
  te(be), te($e);
}
function Lc(e, t, n) {
  if ($e.current !== cn) throw Error(N(168));
  q($e, t), q(be, n);
}
function op(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, wv(e) || "Unknown", o));
  return ie({}, n, r);
}
function _i(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn, _n = $e.current, q($e, e), q(be, be.current), !0;
}
function Mc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n ? (e = op(e, t, _n), r.__reactInternalMemoizedMergedChildContext = e, te(be), te($e), q($e, e)) : te(be), q(be, n);
}
var Tt = null, tl = !1, ru = !1;
function ip(e) {
  Tt === null ? Tt = [e] : Tt.push(e);
}
function Ig(e) {
  tl = !0, ip(e);
}
function hn() {
  if (!ru && Tt !== null) {
    ru = !0;
    var e = 0, t = G;
    try {
      var n = Tt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Tt = null, tl = !1;
    } catch (o) {
      throw Tt !== null && (Tt = Tt.slice(e + 1)), Od(Gs, hn), o;
    } finally {
      G = t, ru = !1;
    }
  }
  return null;
}
var Gn = [], Xn = 0, Pi = null, Ni = 0, rt = [], ot = 0, Pn = null, Ot = 1, At = "";
function mn(e, t) {
  Gn[Xn++] = Ni, Gn[Xn++] = Pi, Pi = e, Ni = t;
}
function lp(e, t, n) {
  rt[ot++] = Ot, rt[ot++] = At, rt[ot++] = Pn, Pn = e;
  var r = Ot;
  e = At;
  var o = 32 - vt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - vt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Ot = 1 << 32 - vt(t) + o | n << o | r, At = i + e;
  } else Ot = 1 << i | n << o | r, At = e;
}
function oa(e) {
  e.return !== null && (mn(e, 1), lp(e, 1, 0));
}
function ia(e) {
  for (; e === Pi; ) Pi = Gn[--Xn], Gn[Xn] = null, Ni = Gn[--Xn], Gn[Xn] = null;
  for (; e === Pn; ) Pn = rt[--ot], rt[ot] = null, At = rt[--ot], rt[ot] = null, Ot = rt[--ot], rt[ot] = null;
}
var Ze = null, Ge = null, ne = !1, mt = null;
function up(e, t) {
  var n = it(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ic(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ze = e, Ge = en(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ze = e, Ge = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Pn !== null ? { id: Ot, overflow: At } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = it(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ze = e, Ge = null, !0) : !1;
    default:
      return !1;
  }
}
function ns(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rs(e) {
  if (ne) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!Ic(e, t)) {
        if (ns(e)) throw Error(N(418));
        t = en(n.nextSibling);
        var r = Ze;
        t && Ic(e, t) ? up(r, n) : (e.flags = e.flags & -4097 | 2, ne = !1, Ze = e);
      }
    } else {
      if (ns(e)) throw Error(N(418));
      e.flags = e.flags & -4097 | 2, ne = !1, Ze = e;
    }
  }
}
function zc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ze = e;
}
function Bo(e) {
  if (e !== Ze) return !1;
  if (!ne) return zc(e), ne = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ju(e.type, e.memoizedProps)), t && (t = Ge)) {
    if (ns(e)) throw sp(), Error(N(418));
    for (; t; ) up(e, t), t = en(t.nextSibling);
  }
  if (zc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = en(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Ze ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function sp() {
  for (var e = Ge; e; ) e = en(e.nextSibling);
}
function fr() {
  Ge = Ze = null, ne = !1;
}
function la(e) {
  mt === null ? mt = [e] : mt.push(e);
}
var zg = Bt.ReactCurrentBatchConfig;
function Tr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var u = o.refs;
        l === null ? delete u[i] : u[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Uo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Fc(e) {
  var t = e._init;
  return t(e._payload);
}
function ap(e) {
  function t(d, c) {
    if (e) {
      var h = d.deletions;
      h === null ? (d.deletions = [c], d.flags |= 16) : h.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function o(d, c) {
    return d = on(d, c), d.index = 0, d.sibling = null, d;
  }
  function i(d, c, h) {
    return d.index = h, e ? (h = d.alternate, h !== null ? (h = h.index, h < c ? (d.flags |= 2, c) : h) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, h, y) {
    return c === null || c.tag !== 6 ? (c = cu(h, d.mode, y), c.return = d, c) : (c = o(c, h), c.return = d, c);
  }
  function s(d, c, h, y) {
    var C = h.type;
    return C === bn ? f(d, c, h.props.children, y, h.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Ht && Fc(C) === c.type) ? (y = o(c, h.props), y.ref = Tr(d, c, h), y.return = d, y) : (y = fi(h.type, h.key, h.props, null, d.mode, y), y.ref = Tr(d, c, h), y.return = d, y);
  }
  function a(d, c, h, y) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = fu(h, d.mode, y), c.return = d, c) : (c = o(c, h.children || []), c.return = d, c);
  }
  function f(d, c, h, y, C) {
    return c === null || c.tag !== 7 ? (c = En(h, d.mode, y, C), c.return = d, c) : (c = o(c, h), c.return = d, c);
  }
  function m(d, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = cu("" + c, d.mode, h), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Oo:
          return h = fi(c.type, c.key, c.props, null, d.mode, h), h.ref = Tr(d, null, c), h.return = d, h;
        case Wn:
          return c = fu(c, d.mode, h), c.return = d, c;
        case Ht:
          var y = c._init;
          return m(d, y(c._payload), h);
      }
      if ($r(c) || xr(c)) return c = En(c, d.mode, h, null), c.return = d, c;
      Uo(d, c);
    }
    return null;
  }
  function p(d, c, h, y) {
    var C = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return C !== null ? null : u(d, c, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Oo:
          return h.key === C ? s(d, c, h, y) : null;
        case Wn:
          return h.key === C ? a(d, c, h, y) : null;
        case Ht:
          return C = h._init, p(
            d,
            c,
            C(h._payload),
            y
          );
      }
      if ($r(h) || xr(h)) return C !== null ? null : f(d, c, h, y, null);
      Uo(d, h);
    }
    return null;
  }
  function w(d, c, h, y, C) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return d = d.get(h) || null, u(c, d, "" + y, C);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Oo:
          return d = d.get(y.key === null ? h : y.key) || null, s(c, d, y, C);
        case Wn:
          return d = d.get(y.key === null ? h : y.key) || null, a(c, d, y, C);
        case Ht:
          var _ = y._init;
          return w(d, c, h, _(y._payload), C);
      }
      if ($r(y) || xr(y)) return d = d.get(h) || null, f(c, d, y, C, null);
      Uo(c, y);
    }
    return null;
  }
  function g(d, c, h, y) {
    for (var C = null, _ = null, x = c, P = c = 0, I = null; x !== null && P < h.length; P++) {
      x.index > P ? (I = x, x = null) : I = x.sibling;
      var M = p(d, x, h[P], y);
      if (M === null) {
        x === null && (x = I);
        break;
      }
      e && x && M.alternate === null && t(d, x), c = i(M, c, P), _ === null ? C = M : _.sibling = M, _ = M, x = I;
    }
    if (P === h.length) return n(d, x), ne && mn(d, P), C;
    if (x === null) {
      for (; P < h.length; P++) x = m(d, h[P], y), x !== null && (c = i(x, c, P), _ === null ? C = x : _.sibling = x, _ = x);
      return ne && mn(d, P), C;
    }
    for (x = r(d, x); P < h.length; P++) I = w(x, d, P, h[P], y), I !== null && (e && I.alternate !== null && x.delete(I.key === null ? P : I.key), c = i(I, c, P), _ === null ? C = I : _.sibling = I, _ = I);
    return e && x.forEach(function(ce) {
      return t(d, ce);
    }), ne && mn(d, P), C;
  }
  function v(d, c, h, y) {
    var C = xr(h);
    if (typeof C != "function") throw Error(N(150));
    if (h = C.call(h), h == null) throw Error(N(151));
    for (var _ = C = null, x = c, P = c = 0, I = null, M = h.next(); x !== null && !M.done; P++, M = h.next()) {
      x.index > P ? (I = x, x = null) : I = x.sibling;
      var ce = p(d, x, M.value, y);
      if (ce === null) {
        x === null && (x = I);
        break;
      }
      e && x && ce.alternate === null && t(d, x), c = i(ce, c, P), _ === null ? C = ce : _.sibling = ce, _ = ce, x = I;
    }
    if (M.done) return n(
      d,
      x
    ), ne && mn(d, P), C;
    if (x === null) {
      for (; !M.done; P++, M = h.next()) M = m(d, M.value, y), M !== null && (c = i(M, c, P), _ === null ? C = M : _.sibling = M, _ = M);
      return ne && mn(d, P), C;
    }
    for (x = r(d, x); !M.done; P++, M = h.next()) M = w(x, d, P, M.value, y), M !== null && (e && M.alternate !== null && x.delete(M.key === null ? P : M.key), c = i(M, c, P), _ === null ? C = M : _.sibling = M, _ = M);
    return e && x.forEach(function(de) {
      return t(d, de);
    }), ne && mn(d, P), C;
  }
  function S(d, c, h, y) {
    if (typeof h == "object" && h !== null && h.type === bn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Oo:
          e: {
            for (var C = h.key, _ = c; _ !== null; ) {
              if (_.key === C) {
                if (C = h.type, C === bn) {
                  if (_.tag === 7) {
                    n(d, _.sibling), c = o(_, h.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (_.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Ht && Fc(C) === _.type) {
                  n(d, _.sibling), c = o(_, h.props), c.ref = Tr(d, _, h), c.return = d, d = c;
                  break e;
                }
                n(d, _);
                break;
              } else t(d, _);
              _ = _.sibling;
            }
            h.type === bn ? (c = En(h.props.children, d.mode, y, h.key), c.return = d, d = c) : (y = fi(h.type, h.key, h.props, null, d.mode, y), y.ref = Tr(d, c, h), y.return = d, d = y);
          }
          return l(d);
        case Wn:
          e: {
            for (_ = h.key; c !== null; ) {
              if (c.key === _) if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                n(d, c.sibling), c = o(c, h.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = fu(h, d.mode, y), c.return = d, d = c;
          }
          return l(d);
        case Ht:
          return _ = h._init, S(d, c, _(h._payload), y);
      }
      if ($r(h)) return g(d, c, h, y);
      if (xr(h)) return v(d, c, h, y);
      Uo(d, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(d, c.sibling), c = o(c, h), c.return = d, d = c) : (n(d, c), c = cu(h, d.mode, y), c.return = d, d = c), l(d)) : n(d, c);
  }
  return S;
}
var dr = ap(!0), cp = ap(!1), Ri = pn(null), Ti = null, Zn = null, ua = null;
function sa() {
  ua = Zn = Ti = null;
}
function aa(e) {
  var t = Ri.current;
  te(Ri), e._currentValue = t;
}
function os(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ir(e, t) {
  Ti = e, ua = Zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (We = !0), e.firstContext = null);
}
function ut(e) {
  var t = e._currentValue;
  if (ua !== e) if (e = { context: e, memoizedValue: t, next: null }, Zn === null) {
    if (Ti === null) throw Error(N(308));
    Zn = e, Ti.dependencies = { lanes: 0, firstContext: e };
  } else Zn = Zn.next = e;
  return t;
}
var wn = null;
function ca(e) {
  wn === null ? wn = [e] : wn.push(e);
}
function fp(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ca(t)) : (n.next = o.next, o.next = n), t.interleaved = n, zt(e, r);
}
function zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Qt = !1;
function fa(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function dp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function $t(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, V & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, zt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, ca(r)) : (t.next = o.next, o.next = t), r.interleaved = t, zt(e, n);
}
function ii(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Xs(e, n);
  }
}
function jc(e, t) {
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
function Oi(e, t, n, r) {
  var o = e.updateQueue;
  Qt = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, l === null ? i = a : l.next = a, l = s;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, u = f.lastBaseUpdate, u !== l && (u === null ? f.firstBaseUpdate = a : u.next = a, f.lastBaseUpdate = s));
  }
  if (i !== null) {
    var m = o.baseState;
    l = 0, f = a = s = null, u = i;
    do {
      var p = u.lane, w = u.eventTime;
      if ((r & p) === p) {
        f !== null && (f = f.next = {
          eventTime: w,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var g = e, v = u;
          switch (p = t, w = n, v.tag) {
            case 1:
              if (g = v.payload, typeof g == "function") {
                m = g.call(w, m, p);
                break e;
              }
              m = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = v.payload, p = typeof g == "function" ? g.call(w, m, p) : g, p == null) break e;
              m = ie({}, m, p);
              break e;
            case 2:
              Qt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [u] : p.push(u));
      } else w = { eventTime: w, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, f === null ? (a = f = w, s = m) : f = f.next = w, l |= p;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
      }
    } while (!0);
    if (f === null && (s = m), o.baseState = s, o.firstBaseUpdate = a, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Rn |= l, e.lanes = l, e.memoizedState = m;
  }
}
function Bc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(N(191, o));
      o.call(r);
    }
  }
}
var ko = {}, _t = pn(ko), io = pn(ko), lo = pn(ko);
function Sn(e) {
  if (e === ko) throw Error(N(174));
  return e;
}
function da(e, t) {
  switch (q(lo, t), q(io, e), q(_t, ko), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fu(t, e);
  }
  te(_t), q(_t, t);
}
function pr() {
  te(_t), te(io), te(lo);
}
function pp(e) {
  Sn(lo.current);
  var t = Sn(_t.current), n = Fu(t, e.type);
  t !== n && (q(io, e), q(_t, n));
}
function pa(e) {
  io.current === e && (te(_t), te(io));
}
var re = pn(0);
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
var ou = [];
function ha() {
  for (var e = 0; e < ou.length; e++) ou[e]._workInProgressVersionPrimary = null;
  ou.length = 0;
}
var li = Bt.ReactCurrentDispatcher, iu = Bt.ReactCurrentBatchConfig, Nn = 0, oe = null, pe = null, me = null, Di = !1, Wr = !1, uo = 0, Fg = 0;
function Oe() {
  throw Error(N(321));
}
function ma(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!yt(e[n], t[n])) return !1;
  return !0;
}
function va(e, t, n, r, o, i) {
  if (Nn = i, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, li.current = e === null || e.memoizedState === null ? Wg : bg, e = n(r, o), Wr) {
    i = 0;
    do {
      if (Wr = !1, uo = 0, 25 <= i) throw Error(N(301));
      i += 1, me = pe = null, t.updateQueue = null, li.current = Vg, e = n(r, o);
    } while (Wr);
  }
  if (li.current = $i, t = pe !== null && pe.next !== null, Nn = 0, me = pe = oe = null, Di = !1, t) throw Error(N(300));
  return e;
}
function ga() {
  var e = uo !== 0;
  return uo = 0, e;
}
function kt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? oe.memoizedState = me = e : me = me.next = e, me;
}
function st() {
  if (pe === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = me === null ? oe.memoizedState : me.next;
  if (t !== null) me = t, pe = e;
  else {
    if (e === null) throw Error(N(310));
    pe = e, e = { memoizedState: pe.memoizedState, baseState: pe.baseState, baseQueue: pe.baseQueue, queue: pe.queue, next: null }, me === null ? oe.memoizedState = me = e : me = me.next = e;
  }
  return me;
}
function so(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function lu(e) {
  var t = st(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = pe, o = r.baseQueue, i = n.pending;
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
      var f = a.lane;
      if ((Nn & f) === f) s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var m = {
          lane: f,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = m, l = r) : s = s.next = m, oe.lanes |= f, Rn |= f;
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? l = r : s.next = u, yt(r, t.memoizedState) || (We = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, oe.lanes |= i, Rn |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function uu(e) {
  var t = st(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    yt(i, t.memoizedState) || (We = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function hp() {
}
function mp(e, t) {
  var n = oe, r = st(), o = t(), i = !yt(r.memoizedState, o);
  if (i && (r.memoizedState = o, We = !0), r = r.queue, ya(yp.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || me !== null && me.memoizedState.tag & 1) {
    if (n.flags |= 2048, ao(9, gp.bind(null, n, r, o, t), void 0, null), ve === null) throw Error(N(349));
    Nn & 30 || vp(n, t, o);
  }
  return o;
}
function vp(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function gp(e, t, n, r) {
  t.value = n, t.getSnapshot = r, wp(t) && Sp(e);
}
function yp(e, t, n) {
  return n(function() {
    wp(t) && Sp(e);
  });
}
function wp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yt(e, n);
  } catch {
    return !0;
  }
}
function Sp(e) {
  var t = zt(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function Uc(e) {
  var t = kt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: so, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ug.bind(null, oe, e), [t.memoizedState, e];
}
function ao(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function kp() {
  return st().memoizedState;
}
function ui(e, t, n, r) {
  var o = kt();
  oe.flags |= e, o.memoizedState = ao(1 | t, n, void 0, r === void 0 ? null : r);
}
function nl(e, t, n, r) {
  var o = st();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (pe !== null) {
    var l = pe.memoizedState;
    if (i = l.destroy, r !== null && ma(r, l.deps)) {
      o.memoizedState = ao(t, n, i, r);
      return;
    }
  }
  oe.flags |= e, o.memoizedState = ao(1 | t, n, i, r);
}
function Wc(e, t) {
  return ui(8390656, 8, e, t);
}
function ya(e, t) {
  return nl(2048, 8, e, t);
}
function Ep(e, t) {
  return nl(4, 2, e, t);
}
function Cp(e, t) {
  return nl(4, 4, e, t);
}
function xp(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function _p(e, t, n) {
  return n = n != null ? n.concat([e]) : null, nl(4, 4, xp.bind(null, t, e), n);
}
function wa() {
}
function Pp(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ma(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Np(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ma(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Rp(e, t, n) {
  return Nn & 21 ? (yt(n, t) || (n = $d(), oe.lanes |= n, Rn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, We = !0), e.memoizedState = n);
}
function jg(e, t) {
  var n = G;
  G = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = iu.transition;
  iu.transition = {};
  try {
    e(!1), t();
  } finally {
    G = n, iu.transition = r;
  }
}
function Tp() {
  return st().memoizedState;
}
function Bg(e, t, n) {
  var r = rn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Op(e)) Ap(t, n);
  else if (n = fp(e, t, n, r), n !== null) {
    var o = Ie();
    gt(n, e, r, o), Dp(n, t, r);
  }
}
function Ug(e, t, n) {
  var r = rn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Op(e)) Ap(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, u = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = u, yt(u, l)) {
        var s = t.interleaved;
        s === null ? (o.next = o, ca(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = fp(e, t, o, r), n !== null && (o = Ie(), gt(n, e, r, o), Dp(n, t, r));
  }
}
function Op(e) {
  var t = e.alternate;
  return e === oe || t !== null && t === oe;
}
function Ap(e, t) {
  Wr = Di = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Dp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Xs(e, n);
  }
}
var $i = { readContext: ut, useCallback: Oe, useContext: Oe, useEffect: Oe, useImperativeHandle: Oe, useInsertionEffect: Oe, useLayoutEffect: Oe, useMemo: Oe, useReducer: Oe, useRef: Oe, useState: Oe, useDebugValue: Oe, useDeferredValue: Oe, useTransition: Oe, useMutableSource: Oe, useSyncExternalStore: Oe, useId: Oe, unstable_isNewReconciler: !1 }, Wg = { readContext: ut, useCallback: function(e, t) {
  return kt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ut, useEffect: Wc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ui(
    4194308,
    4,
    xp.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ui(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ui(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = kt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = kt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Bg.bind(null, oe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = kt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Uc, useDebugValue: wa, useDeferredValue: function(e) {
  return kt().memoizedState = e;
}, useTransition: function() {
  var e = Uc(!1), t = e[0];
  return e = jg.bind(null, e[1]), kt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = oe, o = kt();
  if (ne) {
    if (n === void 0) throw Error(N(407));
    n = n();
  } else {
    if (n = t(), ve === null) throw Error(N(349));
    Nn & 30 || vp(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Wc(yp.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ao(9, gp.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = kt(), t = ve.identifierPrefix;
  if (ne) {
    var n = At, r = Ot;
    n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = uo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Fg++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, bg = {
  readContext: ut,
  useCallback: Pp,
  useContext: ut,
  useEffect: ya,
  useImperativeHandle: _p,
  useInsertionEffect: Ep,
  useLayoutEffect: Cp,
  useMemo: Np,
  useReducer: lu,
  useRef: kp,
  useState: function() {
    return lu(so);
  },
  useDebugValue: wa,
  useDeferredValue: function(e) {
    var t = st();
    return Rp(t, pe.memoizedState, e);
  },
  useTransition: function() {
    var e = lu(so)[0], t = st().memoizedState;
    return [e, t];
  },
  useMutableSource: hp,
  useSyncExternalStore: mp,
  useId: Tp,
  unstable_isNewReconciler: !1
}, Vg = { readContext: ut, useCallback: Pp, useContext: ut, useEffect: ya, useImperativeHandle: _p, useInsertionEffect: Ep, useLayoutEffect: Cp, useMemo: Np, useReducer: uu, useRef: kp, useState: function() {
  return uu(so);
}, useDebugValue: wa, useDeferredValue: function(e) {
  var t = st();
  return pe === null ? t.memoizedState = e : Rp(t, pe.memoizedState, e);
}, useTransition: function() {
  var e = uu(so)[0], t = st().memoizedState;
  return [e, t];
}, useMutableSource: hp, useSyncExternalStore: mp, useId: Tp, unstable_isNewReconciler: !1 };
function pt(e, t) {
  if (e && e.defaultProps) {
    t = ie({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function is(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ie({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var rl = { isMounted: function(e) {
  return (e = e._reactInternals) ? In(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ie(), o = rn(e), i = $t(r, o);
  i.payload = t, n != null && (i.callback = n), t = tn(e, i, o), t !== null && (gt(t, e, o, r), ii(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ie(), o = rn(e), i = $t(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = tn(e, i, o), t !== null && (gt(t, e, o, r), ii(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ie(), r = rn(e), o = $t(n, r);
  o.tag = 2, t != null && (o.callback = t), t = tn(e, o, r), t !== null && (gt(t, e, r, n), ii(t, e, r));
} };
function bc(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !to(n, r) || !to(o, i) : !0;
}
function $p(e, t, n) {
  var r = !1, o = cn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ut(i) : (o = Ve(t) ? _n : $e.current, r = t.contextTypes, i = (r = r != null) ? cr(e, o) : cn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = rl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Vc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && rl.enqueueReplaceState(t, t.state, null);
}
function ls(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, fa(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = ut(i) : (i = Ve(t) ? _n : $e.current, o.context = cr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (is(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && rl.enqueueReplaceState(o, o.state, null), Oi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function hr(e, t) {
  try {
    var n = "", r = t;
    do
      n += yv(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function su(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function us(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Hg = typeof WeakMap == "function" ? WeakMap : Map;
function Lp(e, t, n) {
  n = $t(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Mi || (Mi = !0, gs = r), us(e, t);
  }, n;
}
function Mp(e, t, n) {
  n = $t(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      us(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    us(e, t), typeof r != "function" && (nn === null ? nn = /* @__PURE__ */ new Set([this]) : nn.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Hc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Hg();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = iy.bind(null, e, t, n), t.then(e, e));
}
function Qc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Kc(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1), t.tag = 2, tn(n, t, 1))), n.lanes |= 1), e);
}
var Qg = Bt.ReactCurrentOwner, We = !1;
function Me(e, t, n, r) {
  t.child = e === null ? cp(t, null, n, r) : dr(t, e.child, n, r);
}
function Yc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ir(t, o), r = va(e, t, n, r, i, o), n = ga(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ft(e, t, o)) : (ne && n && oa(t), t.flags |= 1, Me(e, t, r, o), t.child);
}
function Gc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Na(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ip(e, t, i, r, o)) : (e = fi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : to, n(l, r) && e.ref === t.ref) return Ft(e, t, o);
  }
  return t.flags |= 1, e = on(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ip(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (to(i, r) && e.ref === t.ref) if (We = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (We = !0);
    else return t.lanes = e.lanes, Ft(e, t, o);
  }
  return ss(e, t, n, r, o);
}
function zp(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, q(qn, Ye), Ye |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, q(qn, Ye), Ye |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, q(qn, Ye), Ye |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, q(qn, Ye), Ye |= r;
  return Me(e, t, o, n), t.child;
}
function Fp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ss(e, t, n, r, o) {
  var i = Ve(n) ? _n : $e.current;
  return i = cr(t, i), ir(t, o), n = va(e, t, n, r, i, o), r = ga(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ft(e, t, o)) : (ne && r && oa(t), t.flags |= 1, Me(e, t, n, o), t.child);
}
function Xc(e, t, n, r, o) {
  if (Ve(n)) {
    var i = !0;
    _i(t);
  } else i = !1;
  if (ir(t, o), t.stateNode === null) si(e, t), $p(t, n, r), ls(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = ut(a) : (a = Ve(n) ? _n : $e.current, a = cr(t, a));
    var f = n.getDerivedStateFromProps, m = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && Vc(t, l, r, a), Qt = !1;
    var p = t.memoizedState;
    l.state = p, Oi(t, r, l, o), s = t.memoizedState, u !== r || p !== s || be.current || Qt ? (typeof f == "function" && (is(t, n, f, r), s = t.memoizedState), (u = Qt || bc(t, n, u, r, p, s, a)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, dp(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : pt(t.type, u), l.props = a, m = t.pendingProps, p = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = ut(s) : (s = Ve(n) ? _n : $e.current, s = cr(t, s));
    var w = n.getDerivedStateFromProps;
    (f = typeof w == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== m || p !== s) && Vc(t, l, r, s), Qt = !1, p = t.memoizedState, l.state = p, Oi(t, r, l, o);
    var g = t.memoizedState;
    u !== m || p !== g || be.current || Qt ? (typeof w == "function" && (is(t, n, w, r), g = t.memoizedState), (a = Qt || bc(t, n, a, r, p, g, s) || !1) ? (f || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), l.props = r, l.state = g, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return as(e, t, n, r, i, o);
}
function as(e, t, n, r, o, i) {
  Fp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Mc(t, n, !1), Ft(e, t, i);
  r = t.stateNode, Qg.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = dr(t, e.child, null, i), t.child = dr(t, null, u, i)) : Me(e, t, u, i), t.memoizedState = r.state, o && Mc(t, n, !0), t.child;
}
function jp(e) {
  var t = e.stateNode;
  t.pendingContext ? Lc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lc(e, t.context, !1), da(e, t.containerInfo);
}
function Zc(e, t, n, r, o) {
  return fr(), la(o), t.flags |= 256, Me(e, t, n, r), t.child;
}
var cs = { dehydrated: null, treeContext: null, retryLane: 0 };
function fs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Bp(e, t, n) {
  var r = t.pendingProps, o = re.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), q(re, o & 1), e === null)
    return rs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = ll(l, r, 0, null), e = En(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = fs(n), t.memoizedState = cs, e) : Sa(t, l));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null)) return Kg(e, t, l, r, u, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = on(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? i = on(u, i) : (i = En(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? fs(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = cs, r;
  }
  return i = e.child, e = i.sibling, r = on(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Sa(e, t) {
  return t = ll({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Wo(e, t, n, r) {
  return r !== null && la(r), dr(t, e.child, null, n), e = Sa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Kg(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = su(Error(N(422))), Wo(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ll({ mode: "visible", children: r.children }, o, 0, null), i = En(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && dr(t, e.child, null, l), t.child.memoizedState = fs(l), t.memoizedState = cs, i);
  if (!(t.mode & 1)) return Wo(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(N(419)), r = su(i, r, void 0), Wo(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, We || u) {
    if (r = ve, r !== null) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, zt(e, o), gt(r, e, o, -1));
    }
    return Pa(), r = su(Error(N(421))), Wo(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ly.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ge = en(o.nextSibling), Ze = t, ne = !0, mt = null, e !== null && (rt[ot++] = Ot, rt[ot++] = At, rt[ot++] = Pn, Ot = e.id, At = e.overflow, Pn = t), t = Sa(t, r.children), t.flags |= 4096, t);
}
function Jc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), os(e.return, t, n);
}
function au(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Up(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Me(e, t, r.children, n), r = re.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Jc(e, n, t);
      else if (e.tag === 19) Jc(e, n, t);
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
  if (q(re, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ai(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), au(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ai(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      au(t, !0, n, null, i);
      break;
    case "together":
      au(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function si(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ft(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Rn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = on(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Yg(e, t, n) {
  switch (t.tag) {
    case 3:
      jp(t), fr();
      break;
    case 5:
      pp(t);
      break;
    case 1:
      Ve(t.type) && _i(t);
      break;
    case 4:
      da(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      q(Ri, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (q(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Bp(e, t, n) : (q(re, re.current & 1), e = Ft(e, t, n), e !== null ? e.sibling : null);
      q(re, re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Up(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), q(re, re.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, zp(e, t, n);
  }
  return Ft(e, t, n);
}
var Wp, ds, bp, Vp;
Wp = function(e, t) {
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
ds = function() {
};
bp = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Sn(_t.current);
    var i = null;
    switch (n) {
      case "input":
        o = Lu(e, o), r = Lu(e, r), i = [];
        break;
      case "select":
        o = ie({}, o, { value: void 0 }), r = ie({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = zu(e, o), r = zu(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ci);
    }
    ju(n, r);
    var l;
    n = null;
    for (a in o) if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
      var u = o[a];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Yr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = o != null ? o[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (i || (i = []), i.push(
        a,
        n
      )), n = s;
      else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Yr.hasOwnProperty(a) ? (s != null && a === "onScroll" && ee("scroll", e), i || u === s || (i = [])) : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Vp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Or(e, t) {
  if (!ne) switch (e.tailMode) {
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
function Ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Gg(e, t, n) {
  var r = t.pendingProps;
  switch (ia(t), t.tag) {
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
      return Ae(t), null;
    case 1:
      return Ve(t.type) && xi(), Ae(t), null;
    case 3:
      return r = t.stateNode, pr(), te(be), te($e), ha(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Bo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, mt !== null && (Ss(mt), mt = null))), ds(e, t), Ae(t), null;
    case 5:
      pa(t);
      var o = Sn(lo.current);
      if (n = t.type, e !== null && t.stateNode != null) bp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Ae(t), null;
        }
        if (e = Sn(_t.current), Bo(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Et] = t, r[oo] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Mr.length; o++) ee(Mr[o], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee(
                "error",
                r
              ), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              uc(r, i), ee("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ee("invalid", r);
              break;
            case "textarea":
              ac(r, i), ee("invalid", r);
          }
          ju(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var u = i[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && jo(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && jo(
              r.textContent,
              u,
              e
            ), o = ["children", "" + u]) : Yr.hasOwnProperty(l) && u != null && l === "onScroll" && ee("scroll", r);
          }
          switch (n) {
            case "input":
              Ao(r), sc(r, i, !0);
              break;
            case "textarea":
              Ao(r), cc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ci);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = yd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Et] = t, e[oo] = r, Wp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Bu(n, r), n) {
              case "dialog":
                ee("cancel", e), ee("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Mr.length; o++) ee(Mr[o], e);
                o = r;
                break;
              case "source":
                ee("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ee(
                  "error",
                  e
                ), ee("load", e), o = r;
                break;
              case "details":
                ee("toggle", e), o = r;
                break;
              case "input":
                uc(e, r), o = Lu(e, r), ee("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ie({}, r, { value: void 0 }), ee("invalid", e);
                break;
              case "textarea":
                ac(e, r), o = zu(e, r), ee("invalid", e);
                break;
              default:
                o = r;
            }
            ju(n, o), u = o;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? kd(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && wd(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Gr(e, s) : typeof s == "number" && Gr(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Yr.hasOwnProperty(i) ? s != null && i === "onScroll" && ee("scroll", e) : s != null && Vs(e, i, s, l));
            }
            switch (n) {
              case "input":
                Ao(e), sc(e, r, !1);
                break;
              case "textarea":
                Ao(e), cc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + an(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? tr(e, !!r.multiple, i, !1) : r.defaultValue != null && tr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ci);
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
      return Ae(t), null;
    case 6:
      if (e && t.stateNode != null) Vp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (n = Sn(lo.current), Sn(_t.current), Bo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Et] = t, (i = r.nodeValue !== n) && (e = Ze, e !== null)) switch (e.tag) {
            case 3:
              jo(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && jo(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Et] = t, t.stateNode = r;
      }
      return Ae(t), null;
    case 13:
      if (te(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ne && Ge !== null && t.mode & 1 && !(t.flags & 128)) sp(), fr(), t.flags |= 98560, i = !1;
        else if (i = Bo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(N(317));
            i[Et] = t;
          } else fr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ae(t), i = !1;
        } else mt !== null && (Ss(mt), mt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? he === 0 && (he = 3) : Pa())), t.updateQueue !== null && (t.flags |= 4), Ae(t), null);
    case 4:
      return pr(), ds(e, t), e === null && no(t.stateNode.containerInfo), Ae(t), null;
    case 10:
      return aa(t.type._context), Ae(t), null;
    case 17:
      return Ve(t.type) && xi(), Ae(t), null;
    case 19:
      if (te(re), i = t.memoizedState, i === null) return Ae(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) Or(i, !1);
      else {
        if (he !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Ai(e), l !== null) {
            for (t.flags |= 128, Or(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return q(re, re.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ae() > mr && (t.flags |= 128, r = !0, Or(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ai(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Or(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !ne) return Ae(t), null;
        } else 2 * ae() - i.renderingStartTime > mr && n !== 1073741824 && (t.flags |= 128, r = !0, Or(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ae(), t.sibling = null, n = re.current, q(re, r ? n & 1 | 2 : n & 1), t) : (Ae(t), null);
    case 22:
    case 23:
      return _a(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ye & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ae(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Xg(e, t) {
  switch (ia(t), t.tag) {
    case 1:
      return Ve(t.type) && xi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return pr(), te(be), te($e), ha(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return pa(t), null;
    case 13:
      if (te(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(N(340));
        fr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return te(re), null;
    case 4:
      return pr(), null;
    case 10:
      return aa(t.type._context), null;
    case 22:
    case 23:
      return _a(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bo = !1, De = !1, Zg = typeof WeakSet == "function" ? WeakSet : Set, $ = null;
function Jn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ue(e, t, r);
  }
  else n.current = null;
}
function ps(e, t, n) {
  try {
    n();
  } catch (r) {
    ue(e, t, r);
  }
}
var qc = !1;
function Jg(e, t) {
  if (Xu = Si, e = Gd(), ra(e)) {
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
        var l = 0, u = -1, s = -1, a = 0, f = 0, m = e, p = null;
        t: for (; ; ) {
          for (var w; m !== n || o !== 0 && m.nodeType !== 3 || (u = l + o), m !== i || r !== 0 && m.nodeType !== 3 || (s = l + r), m.nodeType === 3 && (l += m.nodeValue.length), (w = m.firstChild) !== null; )
            p = m, m = w;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++a === o && (u = l), p === i && ++f === r && (s = l), (w = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = w;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zu = { focusedElem: e, selectionRange: n }, Si = !1, $ = t; $ !== null; ) if (t = $, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, $ = e;
  else for (; $ !== null; ) {
    t = $;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var v = g.memoizedProps, S = g.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? v : pt(t.type, v), S);
            d.__reactInternalSnapshotBeforeUpdate = c;
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
    } catch (y) {
      ue(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, $ = e;
      break;
    }
    $ = t.return;
  }
  return g = qc, qc = !1, g;
}
function br(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && ps(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ol(e, t) {
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
function hs(e) {
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
function Hp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Hp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Et], delete t[oo], delete t[es], delete t[Lg], delete t[Mg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Qp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ef(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ms(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ci));
  else if (r !== 4 && (e = e.child, e !== null)) for (ms(e, t, n), e = e.sibling; e !== null; ) ms(e, t, n), e = e.sibling;
}
function vs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (vs(e, t, n), e = e.sibling; e !== null; ) vs(e, t, n), e = e.sibling;
}
var Ce = null, ht = !1;
function bt(e, t, n) {
  for (n = n.child; n !== null; ) Kp(e, t, n), n = n.sibling;
}
function Kp(e, t, n) {
  if (xt && typeof xt.onCommitFiberUnmount == "function") try {
    xt.onCommitFiberUnmount(Xi, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      De || Jn(n, t);
    case 6:
      var r = Ce, o = ht;
      Ce = null, bt(e, t, n), Ce = r, ht = o, Ce !== null && (ht ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null && (ht ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? nu(e.parentNode, n) : e.nodeType === 1 && nu(e, n), qr(e)) : nu(Ce, n.stateNode));
      break;
    case 4:
      r = Ce, o = ht, Ce = n.stateNode.containerInfo, ht = !0, bt(e, t, n), Ce = r, ht = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!De && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && ps(n, t, l), o = o.next;
        } while (o !== r);
      }
      bt(e, t, n);
      break;
    case 1:
      if (!De && (Jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        ue(n, t, u);
      }
      bt(e, t, n);
      break;
    case 21:
      bt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (De = (r = De) || n.memoizedState !== null, bt(e, t, n), De = r) : bt(e, t, n);
      break;
    default:
      bt(e, t, n);
  }
}
function tf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Zg()), t.forEach(function(r) {
      var o = uy.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function dt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            Ce = u.stateNode, ht = !1;
            break e;
          case 3:
            Ce = u.stateNode.containerInfo, ht = !0;
            break e;
          case 4:
            Ce = u.stateNode.containerInfo, ht = !0;
            break e;
        }
        u = u.return;
      }
      if (Ce === null) throw Error(N(160));
      Kp(i, l, o), Ce = null, ht = !1;
      var s = o.alternate;
      s !== null && (s.return = null), o.return = null;
    } catch (a) {
      ue(o, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Yp(t, e), t = t.sibling;
}
function Yp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (dt(t, e), St(e), r & 4) {
        try {
          br(3, e, e.return), ol(3, e);
        } catch (v) {
          ue(e, e.return, v);
        }
        try {
          br(5, e, e.return);
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      break;
    case 1:
      dt(t, e), St(e), r & 512 && n !== null && Jn(n, n.return);
      break;
    case 5:
      if (dt(t, e), St(e), r & 512 && n !== null && Jn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Gr(o, "");
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && vd(o, i), Bu(u, l);
          var a = Bu(u, i);
          for (l = 0; l < s.length; l += 2) {
            var f = s[l], m = s[l + 1];
            f === "style" ? kd(o, m) : f === "dangerouslySetInnerHTML" ? wd(o, m) : f === "children" ? Gr(o, m) : Vs(o, f, m, a);
          }
          switch (u) {
            case "input":
              Mu(o, i);
              break;
            case "textarea":
              gd(o, i);
              break;
            case "select":
              var p = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var w = i.value;
              w != null ? tr(o, !!i.multiple, w, !1) : p !== !!i.multiple && (i.defaultValue != null ? tr(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : tr(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[oo] = i;
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      break;
    case 6:
      if (dt(t, e), St(e), r & 4) {
        if (e.stateNode === null) throw Error(N(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      break;
    case 3:
      if (dt(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        qr(t.containerInfo);
      } catch (v) {
        ue(e, e.return, v);
      }
      break;
    case 4:
      dt(t, e), St(e);
      break;
    case 13:
      dt(t, e), St(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ca = ae())), r & 4 && tf(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (De = (a = De) || f, dt(t, e), De = a) : dt(t, e), St(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !f && e.mode & 1) for ($ = e, f = e.child; f !== null; ) {
          for (m = $ = f; $ !== null; ) {
            switch (p = $, w = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                br(4, p, p.return);
                break;
              case 1:
                Jn(p, p.return);
                var g = p.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (v) {
                    ue(r, n, v);
                  }
                }
                break;
              case 5:
                Jn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  rf(m);
                  continue;
                }
            }
            w !== null ? (w.return = p, $ = w) : rf(m);
          }
          f = f.sibling;
        }
        e: for (f = null, m = e; ; ) {
          if (m.tag === 5) {
            if (f === null) {
              f = m;
              try {
                o = m.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Sd("display", l));
              } catch (v) {
                ue(e, e.return, v);
              }
            }
          } else if (m.tag === 6) {
            if (f === null) try {
              m.stateNode.nodeValue = a ? "" : m.memoizedProps;
            } catch (v) {
              ue(e, e.return, v);
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
      dt(t, e), St(e), r & 4 && tf(e);
      break;
    case 21:
      break;
    default:
      dt(
        t,
        e
      ), St(e);
  }
}
function St(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qp(n)) {
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
          r.flags & 32 && (Gr(o, ""), r.flags &= -33);
          var i = ef(e);
          vs(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = ef(e);
          ms(e, u, l);
          break;
        default:
          throw Error(N(161));
      }
    } catch (s) {
      ue(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function qg(e, t, n) {
  $ = e, Gp(e);
}
function Gp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var o = $, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || bo;
      if (!l) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || De;
        u = bo;
        var a = De;
        if (bo = l, (De = s) && !a) for ($ = o; $ !== null; ) l = $, s = l.child, l.tag === 22 && l.memoizedState !== null ? of(o) : s !== null ? (s.return = l, $ = s) : of(o);
        for (; i !== null; ) $ = i, Gp(i), i = i.sibling;
        $ = o, bo = u, De = a;
      }
      nf(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, $ = i) : nf(e);
  }
}
function nf(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            De || ol(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !De) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Bc(t, i, r);
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
              Bc(t, l, n);
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
                var f = a.memoizedState;
                if (f !== null) {
                  var m = f.dehydrated;
                  m !== null && qr(m);
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
        De || t.flags & 512 && hs(t);
      } catch (p) {
        ue(t, t.return, p);
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
function rf(e) {
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
function of(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ol(4, t);
          } catch (s) {
            ue(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ue(t, o, s);
            }
          }
          var i = t.return;
          try {
            hs(t);
          } catch (s) {
            ue(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            hs(t);
          } catch (s) {
            ue(t, l, s);
          }
      }
    } catch (s) {
      ue(t, t.return, s);
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
var ey = Math.ceil, Li = Bt.ReactCurrentDispatcher, ka = Bt.ReactCurrentOwner, lt = Bt.ReactCurrentBatchConfig, V = 0, ve = null, fe = null, Pe = 0, Ye = 0, qn = pn(0), he = 0, co = null, Rn = 0, il = 0, Ea = 0, Vr = null, Ue = null, Ca = 0, mr = 1 / 0, Rt = null, Mi = !1, gs = null, nn = null, Vo = !1, Xt = null, Ii = 0, Hr = 0, ys = null, ai = -1, ci = 0;
function Ie() {
  return V & 6 ? ae() : ai !== -1 ? ai : ai = ae();
}
function rn(e) {
  return e.mode & 1 ? V & 2 && Pe !== 0 ? Pe & -Pe : zg.transition !== null ? (ci === 0 && (ci = $d()), ci) : (e = G, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Bd(e.type)), e) : 1;
}
function gt(e, t, n, r) {
  if (50 < Hr) throw Hr = 0, ys = null, Error(N(185));
  yo(e, n, r), (!(V & 2) || e !== ve) && (e === ve && (!(V & 2) && (il |= n), he === 4 && Yt(e, Pe)), He(e, r), n === 1 && V === 0 && !(t.mode & 1) && (mr = ae() + 500, tl && hn()));
}
function He(e, t) {
  var n = e.callbackNode;
  zv(e, t);
  var r = wi(e, e === ve ? Pe : 0);
  if (r === 0) n !== null && pc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && pc(n), t === 1) e.tag === 0 ? Ig(lf.bind(null, e)) : ip(lf.bind(null, e)), Dg(function() {
      !(V & 6) && hn();
    }), n = null;
    else {
      switch (Ld(r)) {
        case 1:
          n = Gs;
          break;
        case 4:
          n = Ad;
          break;
        case 16:
          n = yi;
          break;
        case 536870912:
          n = Dd;
          break;
        default:
          n = yi;
      }
      n = rh(n, Xp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Xp(e, t) {
  if (ai = -1, ci = 0, V & 6) throw Error(N(327));
  var n = e.callbackNode;
  if (lr() && e.callbackNode !== n) return null;
  var r = wi(e, e === ve ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zi(e, r);
  else {
    t = r;
    var o = V;
    V |= 2;
    var i = Jp();
    (ve !== e || Pe !== t) && (Rt = null, mr = ae() + 500, kn(e, t));
    do
      try {
        ry();
        break;
      } catch (u) {
        Zp(e, u);
      }
    while (!0);
    sa(), Li.current = i, V = o, fe !== null ? t = 0 : (ve = null, Pe = 0, t = he);
  }
  if (t !== 0) {
    if (t === 2 && (o = Hu(e), o !== 0 && (r = o, t = ws(e, o))), t === 1) throw n = co, kn(e, 0), Yt(e, r), He(e, ae()), n;
    if (t === 6) Yt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !ty(o) && (t = zi(e, r), t === 2 && (i = Hu(e), i !== 0 && (r = i, t = ws(e, i))), t === 1)) throw n = co, kn(e, 0), Yt(e, r), He(e, ae()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          vn(e, Ue, Rt);
          break;
        case 3:
          if (Yt(e, r), (r & 130023424) === r && (t = Ca + 500 - ae(), 10 < t)) {
            if (wi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ie(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = qu(vn.bind(null, e, Ue, Rt), t);
            break;
          }
          vn(e, Ue, Rt);
          break;
        case 4:
          if (Yt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - vt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ey(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = qu(vn.bind(null, e, Ue, Rt), r);
            break;
          }
          vn(e, Ue, Rt);
          break;
        case 5:
          vn(e, Ue, Rt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return He(e, ae()), e.callbackNode === n ? Xp.bind(null, e) : null;
}
function ws(e, t) {
  var n = Vr;
  return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256), e = zi(e, t), e !== 2 && (t = Ue, Ue = n, t !== null && Ss(t)), e;
}
function Ss(e) {
  Ue === null ? Ue = e : Ue.push.apply(Ue, e);
}
function ty(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!yt(i(), o)) return !1;
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
function Yt(e, t) {
  for (t &= ~Ea, t &= ~il, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - vt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function lf(e) {
  if (V & 6) throw Error(N(327));
  lr();
  var t = wi(e, 0);
  if (!(t & 1)) return He(e, ae()), null;
  var n = zi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hu(e);
    r !== 0 && (t = r, n = ws(e, r));
  }
  if (n === 1) throw n = co, kn(e, 0), Yt(e, t), He(e, ae()), n;
  if (n === 6) throw Error(N(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, vn(e, Ue, Rt), He(e, ae()), null;
}
function xa(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    V = n, V === 0 && (mr = ae() + 500, tl && hn());
  }
}
function Tn(e) {
  Xt !== null && Xt.tag === 0 && !(V & 6) && lr();
  var t = V;
  V |= 1;
  var n = lt.transition, r = G;
  try {
    if (lt.transition = null, G = 1, e) return e();
  } finally {
    G = r, lt.transition = n, V = t, !(V & 6) && hn();
  }
}
function _a() {
  Ye = qn.current, te(qn);
}
function kn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Ag(n)), fe !== null) for (n = fe.return; n !== null; ) {
    var r = n;
    switch (ia(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && xi();
        break;
      case 3:
        pr(), te(be), te($e), ha();
        break;
      case 5:
        pa(r);
        break;
      case 4:
        pr();
        break;
      case 13:
        te(re);
        break;
      case 19:
        te(re);
        break;
      case 10:
        aa(r.type._context);
        break;
      case 22:
      case 23:
        _a();
    }
    n = n.return;
  }
  if (ve = e, fe = e = on(e.current, null), Pe = Ye = t, he = 0, co = null, Ea = il = Rn = 0, Ue = Vr = null, wn !== null) {
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
function Zp(e, t) {
  do {
    var n = fe;
    try {
      if (sa(), li.current = $i, Di) {
        for (var r = oe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Di = !1;
      }
      if (Nn = 0, me = pe = oe = null, Wr = !1, uo = 0, ka.current = null, n === null || n.return === null) {
        he = 1, co = t, fe = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = Pe, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, f = u, m = f.tag;
          if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = f.alternate;
            p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var w = Qc(l);
          if (w !== null) {
            w.flags &= -257, Kc(w, l, u, i, t), w.mode & 1 && Hc(i, a, t), t = w, s = a;
            var g = t.updateQueue;
            if (g === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(s), t.updateQueue = v;
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Hc(i, a, t), Pa();
              break e;
            }
            s = Error(N(426));
          }
        } else if (ne && u.mode & 1) {
          var S = Qc(l);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Kc(S, l, u, i, t), la(hr(s, u));
            break e;
          }
        }
        i = s = hr(s, u), he !== 4 && (he = 2), Vr === null ? Vr = [i] : Vr.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Lp(i, s, t);
              jc(i, d);
              break e;
            case 1:
              u = s;
              var c = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (nn === null || !nn.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = Mp(i, u, t);
                jc(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      eh(n);
    } catch (C) {
      t = C, fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Jp() {
  var e = Li.current;
  return Li.current = $i, e === null ? $i : e;
}
function Pa() {
  (he === 0 || he === 3 || he === 2) && (he = 4), ve === null || !(Rn & 268435455) && !(il & 268435455) || Yt(ve, Pe);
}
function zi(e, t) {
  var n = V;
  V |= 2;
  var r = Jp();
  (ve !== e || Pe !== t) && (Rt = null, kn(e, t));
  do
    try {
      ny();
      break;
    } catch (o) {
      Zp(e, o);
    }
  while (!0);
  if (sa(), V = n, Li.current = r, fe !== null) throw Error(N(261));
  return ve = null, Pe = 0, he;
}
function ny() {
  for (; fe !== null; ) qp(fe);
}
function ry() {
  for (; fe !== null && !Rv(); ) qp(fe);
}
function qp(e) {
  var t = nh(e.alternate, e, Ye);
  e.memoizedProps = e.pendingProps, t === null ? eh(e) : fe = t, ka.current = null;
}
function eh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Xg(n, t), n !== null) {
        n.flags &= 32767, fe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        he = 6, fe = null;
        return;
      }
    } else if (n = Gg(n, t, Ye), n !== null) {
      fe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function vn(e, t, n) {
  var r = G, o = lt.transition;
  try {
    lt.transition = null, G = 1, oy(e, t, n, r);
  } finally {
    lt.transition = o, G = r;
  }
  return null;
}
function oy(e, t, n, r) {
  do
    lr();
  while (Xt !== null);
  if (V & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Fv(e, i), e === ve && (fe = ve = null, Pe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Vo || (Vo = !0, rh(yi, function() {
    return lr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = lt.transition, lt.transition = null;
    var l = G;
    G = 1;
    var u = V;
    V |= 4, ka.current = null, Jg(e, n), Yp(n, e), xg(Zu), Si = !!Xu, Zu = Xu = null, e.current = n, qg(n), Tv(), V = u, G = l, lt.transition = i;
  } else e.current = n;
  if (Vo && (Vo = !1, Xt = e, Ii = o), i = e.pendingLanes, i === 0 && (nn = null), Dv(n.stateNode), He(e, ae()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Mi) throw Mi = !1, e = gs, gs = null, e;
  return Ii & 1 && e.tag !== 0 && lr(), i = e.pendingLanes, i & 1 ? e === ys ? Hr++ : (Hr = 0, ys = e) : Hr = 0, hn(), null;
}
function lr() {
  if (Xt !== null) {
    var e = Ld(Ii), t = lt.transition, n = G;
    try {
      if (lt.transition = null, G = 16 > e ? 16 : e, Xt === null) var r = !1;
      else {
        if (e = Xt, Xt = null, Ii = 0, V & 6) throw Error(N(331));
        var o = V;
        for (V |= 4, $ = e.current; $ !== null; ) {
          var i = $, l = i.child;
          if ($.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for ($ = a; $ !== null; ) {
                  var f = $;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(8, f, i);
                  }
                  var m = f.child;
                  if (m !== null) m.return = f, $ = m;
                  else for (; $ !== null; ) {
                    f = $;
                    var p = f.sibling, w = f.return;
                    if (Hp(f), f === a) {
                      $ = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = w, $ = p;
                      break;
                    }
                    $ = w;
                  }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var S = v.sibling;
                    v.sibling = null, v = S;
                  } while (v !== null);
                }
              }
              $ = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, $ = l;
          else e: for (; $ !== null; ) {
            if (i = $, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                br(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, $ = d;
              break e;
            }
            $ = i.return;
          }
        }
        var c = e.current;
        for ($ = c; $ !== null; ) {
          l = $;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) h.return = l, $ = h;
          else e: for (l = c; $ !== null; ) {
            if (u = $, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  ol(9, u);
              }
            } catch (C) {
              ue(u, u.return, C);
            }
            if (u === l) {
              $ = null;
              break e;
            }
            var y = u.sibling;
            if (y !== null) {
              y.return = u.return, $ = y;
              break e;
            }
            $ = u.return;
          }
        }
        if (V = o, hn(), xt && typeof xt.onPostCommitFiberRoot == "function") try {
          xt.onPostCommitFiberRoot(Xi, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      G = n, lt.transition = t;
    }
  }
  return !1;
}
function uf(e, t, n) {
  t = hr(n, t), t = Lp(e, t, 1), e = tn(e, t, 1), t = Ie(), e !== null && (yo(e, 1, t), He(e, t));
}
function ue(e, t, n) {
  if (e.tag === 3) uf(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      uf(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
        e = hr(n, e), e = Mp(t, e, 1), t = tn(t, e, 1), e = Ie(), t !== null && (yo(t, 1, e), He(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function iy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ie(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (Pe & n) === n && (he === 4 || he === 3 && (Pe & 130023424) === Pe && 500 > ae() - Ca ? kn(e, 0) : Ea |= n), He(e, t);
}
function th(e, t) {
  t === 0 && (e.mode & 1 ? (t = Lo, Lo <<= 1, !(Lo & 130023424) && (Lo = 4194304)) : t = 1);
  var n = Ie();
  e = zt(e, t), e !== null && (yo(e, t, n), He(e, n));
}
function ly(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), th(e, n);
}
function uy(e, t) {
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
  r !== null && r.delete(t), th(e, n);
}
var nh;
nh = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || be.current) We = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return We = !1, Yg(e, t, n);
    We = !!(e.flags & 131072);
  }
  else We = !1, ne && t.flags & 1048576 && lp(t, Ni, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      si(e, t), e = t.pendingProps;
      var o = cr(t, $e.current);
      ir(t, n), o = va(null, t, r, e, o, n);
      var i = ga();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ve(r) ? (i = !0, _i(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, fa(t), o.updater = rl, t.stateNode = o, o._reactInternals = t, ls(t, r, e, n), t = as(null, t, r, !0, i, n)) : (t.tag = 0, ne && i && oa(t), Me(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (si(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = ay(r), e = pt(r, e), o) {
          case 0:
            t = ss(null, t, r, e, n);
            break e;
          case 1:
            t = Xc(null, t, r, e, n);
            break e;
          case 11:
            t = Yc(null, t, r, e, n);
            break e;
          case 14:
            t = Gc(null, t, r, pt(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), ss(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), Xc(e, t, r, o, n);
    case 3:
      e: {
        if (jp(t), e === null) throw Error(N(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, dp(e, t), Oi(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = hr(Error(N(423)), t), t = Zc(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = hr(Error(N(424)), t), t = Zc(e, t, r, n, o);
          break e;
        } else for (Ge = en(t.stateNode.containerInfo.firstChild), Ze = t, ne = !0, mt = null, n = cp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (fr(), r === o) {
            t = Ft(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return pp(t), e === null && rs(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Ju(r, o) ? l = null : i !== null && Ju(r, i) && (t.flags |= 32), Fp(e, t), Me(e, t, l, n), t.child;
    case 6:
      return e === null && rs(t), null;
    case 13:
      return Bp(e, t, n);
    case 4:
      return da(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = dr(t, null, r, n) : Me(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), Yc(e, t, r, o, n);
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, q(Ri, r._currentValue), r._currentValue = l, i !== null) if (yt(i.value, l)) {
          if (i.children === o.children && !be.current) {
            t = Ft(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            l = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = $t(-1, n & -n), s.tag = 2;
                  var a = i.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var f = a.pending;
                    f === null ? s.next = s : (s.next = f.next, f.next = s), a.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), os(
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
            if (l = i.return, l === null) throw Error(N(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), os(l, n, t), l = i.sibling;
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
        Me(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, ir(t, n), o = ut(o), r = r(o), t.flags |= 1, Me(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = pt(r, t.pendingProps), o = pt(r.type, o), Gc(e, t, r, o, n);
    case 15:
      return Ip(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), si(e, t), t.tag = 1, Ve(r) ? (e = !0, _i(t)) : e = !1, ir(t, n), $p(t, r, o), ls(t, r, o, n), as(null, t, r, !0, e, n);
    case 19:
      return Up(e, t, n);
    case 22:
      return zp(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function rh(e, t) {
  return Od(e, t);
}
function sy(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function it(e, t, n, r) {
  return new sy(e, t, n, r);
}
function Na(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function ay(e) {
  if (typeof e == "function") return Na(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Qs) return 11;
    if (e === Ks) return 14;
  }
  return 2;
}
function on(e, t) {
  var n = e.alternate;
  return n === null ? (n = it(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function fi(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") Na(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case bn:
      return En(n.children, o, i, t);
    case Hs:
      l = 8, o |= 8;
      break;
    case Ou:
      return e = it(12, n, t, o | 2), e.elementType = Ou, e.lanes = i, e;
    case Au:
      return e = it(13, n, t, o), e.elementType = Au, e.lanes = i, e;
    case Du:
      return e = it(19, n, t, o), e.elementType = Du, e.lanes = i, e;
    case pd:
      return ll(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case fd:
          l = 10;
          break e;
        case dd:
          l = 9;
          break e;
        case Qs:
          l = 11;
          break e;
        case Ks:
          l = 14;
          break e;
        case Ht:
          l = 16, r = null;
          break e;
      }
      throw Error(N(130, e == null ? e : typeof e, ""));
  }
  return t = it(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function En(e, t, n, r) {
  return e = it(7, e, r, t), e.lanes = n, e;
}
function ll(e, t, n, r) {
  return e = it(22, e, r, t), e.elementType = pd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function cu(e, t, n) {
  return e = it(6, e, null, t), e.lanes = n, e;
}
function fu(e, t, n) {
  return t = it(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function cy(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hl(0), this.expirationTimes = Hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Ra(e, t, n, r, o, i, l, u, s) {
  return e = new cy(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = it(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fa(i), e;
}
function fy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Wn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function oh(e) {
  if (!e) return cn;
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
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
    if (Ve(n)) return op(e, n, t);
  }
  return t;
}
function ih(e, t, n, r, o, i, l, u, s) {
  return e = Ra(n, r, !0, e, o, i, l, u, s), e.context = oh(null), n = e.current, r = Ie(), o = rn(n), i = $t(r, o), i.callback = t ?? null, tn(n, i, o), e.current.lanes = o, yo(e, o, r), He(e, r), e;
}
function ul(e, t, n, r) {
  var o = t.current, i = Ie(), l = rn(o);
  return n = oh(n), t.context === null ? t.context = n : t.pendingContext = n, t = $t(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(o, t, l), e !== null && (gt(e, o, l, i), ii(e, o, l)), l;
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
function sf(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ta(e, t) {
  sf(e, t), (e = e.alternate) && sf(e, t);
}
function dy() {
  return null;
}
var lh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Oa(e) {
  this._internalRoot = e;
}
sl.prototype.render = Oa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  ul(e, t, null, null);
};
sl.prototype.unmount = Oa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function() {
      ul(null, e, null, null);
    }), t[It] = null;
  }
};
function sl(e) {
  this._internalRoot = e;
}
sl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = zd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && jd(e);
  }
};
function Aa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function al(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function af() {
}
function py(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = Fi(l);
        i.call(a);
      };
    }
    var l = ih(t, r, e, 0, null, !1, !1, "", af);
    return e._reactRootContainer = l, e[It] = l.current, no(e.nodeType === 8 ? e.parentNode : e), Tn(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Fi(s);
      u.call(a);
    };
  }
  var s = Ra(e, 0, !1, null, null, !1, !1, "", af);
  return e._reactRootContainer = s, e[It] = s.current, no(e.nodeType === 8 ? e.parentNode : e), Tn(function() {
    ul(t, s, n, r);
  }), s;
}
function cl(e, t, n, r, o) {
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
    ul(t, l, e, o);
  } else l = py(n, t, e, o, r);
  return Fi(l);
}
Md = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lr(t.pendingLanes);
        n !== 0 && (Xs(t, n | 1), He(t, ae()), !(V & 6) && (mr = ae() + 500, hn()));
      }
      break;
    case 13:
      Tn(function() {
        var r = zt(e, 1);
        if (r !== null) {
          var o = Ie();
          gt(r, e, 1, o);
        }
      }), Ta(e, 1);
  }
};
Zs = function(e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = Ie();
      gt(t, e, 134217728, n);
    }
    Ta(e, 134217728);
  }
};
Id = function(e) {
  if (e.tag === 13) {
    var t = rn(e), n = zt(e, t);
    if (n !== null) {
      var r = Ie();
      gt(n, e, t, r);
    }
    Ta(e, t);
  }
};
zd = function() {
  return G;
};
Fd = function(e, t) {
  var n = G;
  try {
    return G = e, t();
  } finally {
    G = n;
  }
};
Wu = function(e, t, n) {
  switch (t) {
    case "input":
      if (Mu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = el(r);
            if (!o) throw Error(N(90));
            md(r), Mu(r, o);
          }
        }
      }
      break;
    case "textarea":
      gd(e, n);
      break;
    case "select":
      t = n.value, t != null && tr(e, !!n.multiple, t, !1);
  }
};
xd = xa;
_d = Tn;
var hy = { usingClientEntryPoint: !1, Events: [So, Kn, el, Ed, Cd, xa] }, Ar = { findFiberByHostInstance: yn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, my = { bundleType: Ar.bundleType, version: Ar.version, rendererPackageName: Ar.rendererPackageName, rendererConfig: Ar.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Bt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Rd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ar.findFiberByHostInstance || dy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ho.isDisabled && Ho.supportsFiber) try {
    Xi = Ho.inject(my), xt = Ho;
  } catch {
  }
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hy;
et.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Aa(t)) throw Error(N(200));
  return fy(e, t, null, n);
};
et.createRoot = function(e, t) {
  if (!Aa(e)) throw Error(N(299));
  var n = !1, r = "", o = lh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ra(e, 1, !1, null, null, n, !1, r, o), e[It] = t.current, no(e.nodeType === 8 ? e.parentNode : e), new Oa(t);
};
et.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
  return e = Rd(t), e = e === null ? null : e.stateNode, e;
};
et.flushSync = function(e) {
  return Tn(e);
};
et.hydrate = function(e, t, n) {
  if (!al(t)) throw Error(N(200));
  return cl(null, e, t, !0, n);
};
et.hydrateRoot = function(e, t, n) {
  if (!Aa(e)) throw Error(N(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = lh;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = ih(t, null, e, 1, n ?? null, o, !1, i, l), e[It] = t.current, no(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new sl(t);
};
et.render = function(e, t, n) {
  if (!al(t)) throw Error(N(200));
  return cl(null, e, t, !1, n);
};
et.unmountComponentAtNode = function(e) {
  if (!al(e)) throw Error(N(40));
  return e._reactRootContainer ? (Tn(function() {
    cl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[It] = null;
    });
  }), !0) : !1;
};
et.unstable_batchedUpdates = xa;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!al(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return cl(e, t, n, !1, r);
};
et.version = "18.3.1-next-f1338f8080-20240426";
function uh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uh);
    } catch (e) {
      console.error(e);
    }
}
uh(), ud.exports = et;
var fl = ud.exports;
const vy = /* @__PURE__ */ zs(fl);
var gy, cf = fl;
gy = cf.createRoot, cf.hydrateRoot;
var sh = { exports: {} }, ah = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo = k;
function yy(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var wy = typeof Object.is == "function" ? Object.is : yy, Sy = Eo.useSyncExternalStore, ky = Eo.useRef, Ey = Eo.useEffect, Cy = Eo.useMemo, xy = Eo.useDebugValue;
ah.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = ky(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else l = i.current;
  i = Cy(function() {
    function s(w) {
      if (!a) {
        if (a = !0, f = w, w = r(w), o !== void 0 && l.hasValue) {
          var g = l.value;
          if (o(g, w)) return m = g;
        }
        return m = w;
      }
      if (g = m, wy(f, w)) return g;
      var v = r(w);
      return o !== void 0 && o(g, v) ? g : (f = w, m = v);
    }
    var a = !1, f, m, p = n === void 0 ? null : n;
    return [function() {
      return s(t());
    }, p === null ? void 0 : function() {
      return s(p());
    }];
  }, [t, n, r, o]);
  var u = Sy(e, i[0], i[1]);
  return Ey(function() {
    l.hasValue = !0, l.value = u;
  }, [u]), xy(u), u;
};
sh.exports = ah;
var _y = sh.exports, Xe = (
  // prettier-ignore
  // @ts-ignore
  "default" in Ru ? sn : Ru
), ff = Symbol.for("react-redux-context"), df = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Py() {
  if (!Xe.createContext)
    return {};
  const e = df[ff] ?? (df[ff] = /* @__PURE__ */ new Map());
  let t = e.get(Xe.createContext);
  return t || (t = Xe.createContext(
    null
  ), e.set(Xe.createContext, t)), t;
}
var fn = /* @__PURE__ */ Py(), Ny = () => {
  throw new Error("uSES not initialized!");
};
function Da(e = fn) {
  return function() {
    return Xe.useContext(e);
  };
}
var ch = /* @__PURE__ */ Da(), fh = Ny, Ry = (e) => {
  fh = e;
}, Ty = (e, t) => e === t;
function Oy(e = fn) {
  const t = e === fn ? ch : Da(e), n = (r, o = {}) => {
    const { equalityFn: i = Ty, devModeChecks: l = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: u,
      subscription: s,
      getServerState: a,
      stabilityCheck: f,
      identityFunctionCheck: m
    } = t();
    Xe.useRef(!0);
    const p = Xe.useCallback(
      {
        [r.name](g) {
          return r(g);
        }
      }[r.name],
      [r, f, l.stabilityCheck]
    ), w = fh(
      s.addNestedSub,
      u.getState,
      a || u.getState,
      p,
      i
    );
    return Xe.useDebugValue(w), w;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var $a = /* @__PURE__ */ Oy();
function dh(e) {
  e();
}
function Ay() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      dh(() => {
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
var pf = {
  notify() {
  },
  get: () => []
};
function Dy(e, t) {
  let n, r = pf, o = 0, i = !1;
  function l(v) {
    f();
    const S = r.subscribe(v);
    let d = !1;
    return () => {
      d || (d = !0, S(), m());
    };
  }
  function u() {
    r.notify();
  }
  function s() {
    g.onStateChange && g.onStateChange();
  }
  function a() {
    return i;
  }
  function f() {
    o++, n || (n = e.subscribe(s), r = Ay());
  }
  function m() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = pf);
  }
  function p() {
    i || (i = !0, f());
  }
  function w() {
    i && (i = !1, m());
  }
  const g = {
    addNestedSub: l,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: p,
    tryUnsubscribe: w,
    getListeners: () => r
  };
  return g;
}
var $y = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ly = typeof navigator < "u" && navigator.product === "ReactNative", My = $y || Ly ? Xe.useLayoutEffect : Xe.useEffect;
function hf(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function tk(e, t) {
  if (hf(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !hf(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
function Iy({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const l = Xe.useMemo(() => {
    const a = Dy(e);
    return {
      store: e,
      subscription: a,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), u = Xe.useMemo(() => e.getState(), [e]);
  My(() => {
    const { subscription: a } = l;
    return a.onStateChange = a.notifyNestedSubs, a.trySubscribe(), u !== e.getState() && a.notifyNestedSubs(), () => {
      a.tryUnsubscribe(), a.onStateChange = void 0;
    };
  }, [l, u]);
  const s = t || fn;
  return /* @__PURE__ */ Xe.createElement(s.Provider, { value: l }, n);
}
var nk = Iy;
function ph(e = fn) {
  const t = e === fn ? ch : (
    // @ts-ignore
    Da(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var zy = /* @__PURE__ */ ph();
function Fy(e = fn) {
  const t = e === fn ? zy : ph(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var hh = /* @__PURE__ */ Fy(), rk = dh;
Ry(_y.useSyncExternalStoreWithSelector);
function Ee(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var jy = typeof Symbol == "function" && Symbol.observable || "@@observable", mf = jy, du = () => Math.random().toString(36).substring(7).split("").join("."), By = {
  INIT: `@@redux/INIT${/* @__PURE__ */ du()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ du()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${du()}`
}, ji = By;
function La(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function mh(e, t, n) {
  if (typeof e != "function")
    throw new Error(Ee(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Ee(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Ee(1));
    return n(mh)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), l = i, u = 0, s = !1;
  function a() {
    l === i && (l = /* @__PURE__ */ new Map(), i.forEach((S, d) => {
      l.set(d, S);
    }));
  }
  function f() {
    if (s)
      throw new Error(Ee(3));
    return o;
  }
  function m(S) {
    if (typeof S != "function")
      throw new Error(Ee(4));
    if (s)
      throw new Error(Ee(5));
    let d = !0;
    a();
    const c = u++;
    return l.set(c, S), function() {
      if (d) {
        if (s)
          throw new Error(Ee(6));
        d = !1, a(), l.delete(c), i = null;
      }
    };
  }
  function p(S) {
    if (!La(S))
      throw new Error(Ee(7));
    if (typeof S.type > "u")
      throw new Error(Ee(8));
    if (typeof S.type != "string")
      throw new Error(Ee(17));
    if (s)
      throw new Error(Ee(9));
    try {
      s = !0, o = r(o, S);
    } finally {
      s = !1;
    }
    return (i = l).forEach((c) => {
      c();
    }), S;
  }
  function w(S) {
    if (typeof S != "function")
      throw new Error(Ee(10));
    r = S, p({
      type: ji.REPLACE
    });
  }
  function g() {
    const S = m;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(d) {
        if (typeof d != "object" || d === null)
          throw new Error(Ee(11));
        function c() {
          const y = d;
          y.next && y.next(f());
        }
        return c(), {
          unsubscribe: S(c)
        };
      },
      [mf]() {
        return this;
      }
    };
  }
  return p({
    type: ji.INIT
  }), {
    dispatch: p,
    subscribe: m,
    getState: f,
    replaceReducer: w,
    [mf]: g
  };
}
function Uy(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: ji.INIT
    }) > "u")
      throw new Error(Ee(12));
    if (typeof n(void 0, {
      type: ji.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Ee(13));
  });
}
function Wy(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const l = t[i];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  const r = Object.keys(n);
  let o;
  try {
    Uy(n);
  } catch (i) {
    o = i;
  }
  return function(l = {}, u) {
    if (o)
      throw o;
    let s = !1;
    const a = {};
    for (let f = 0; f < r.length; f++) {
      const m = r[f], p = n[m], w = l[m], g = p(w, u);
      if (typeof g > "u")
        throw u && u.type, new Error(Ee(14));
      a[m] = g, s = s || g !== w;
    }
    return s = s || r.length !== Object.keys(l).length, s ? a : l;
  };
}
function Bi(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function by(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(Ee(15));
    };
    const l = {
      getState: o.getState,
      dispatch: (s, ...a) => i(s, ...a)
    }, u = e.map((s) => s(l));
    return i = Bi(...u)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function vh(e) {
  return La(e) && "type" in e && typeof e.type == "string";
}
var Ma = Symbol.for("immer-nothing"), Qr = Symbol.for("immer-draftable"), Qe = Symbol.for("immer-state");
function xe(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var On = Object.getPrototypeOf;
function jt(e) {
  return !!e && !!e[Qe];
}
function Pt(e) {
  var t;
  return e ? gh(e) || Array.isArray(e) || !!e[Qr] || !!((t = e.constructor) != null && t[Qr]) || Co(e) || xo(e) : !1;
}
var Vy = Object.prototype.constructor.toString();
function gh(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = On(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Vy;
}
function ok(e) {
  return jt(e) || xe(15, e), e[Qe].base_;
}
function fo(e, t) {
  An(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function An(e) {
  const t = e[Qe];
  return t ? t.type_ : Array.isArray(e) ? 1 : Co(e) ? 2 : xo(e) ? 3 : 0;
}
function po(e, t) {
  return An(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function pu(e, t) {
  return An(e) === 2 ? e.get(t) : e[t];
}
function yh(e, t, n) {
  const r = An(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function Hy(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Co(e) {
  return e instanceof Map;
}
function xo(e) {
  return e instanceof Set;
}
function gn(e) {
  return e.copy_ || e.base_;
}
function ks(e, t) {
  if (Co(e))
    return new Map(e);
  if (xo(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = gh(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Qe];
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
    return Object.create(On(e), r);
  } else {
    const r = On(e);
    if (r !== null && n)
      return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function Ia(e, t = !1) {
  return dl(e) || jt(e) || !Pt(e) || (An(e) > 1 && (e.set = e.add = e.clear = e.delete = Qy), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Ia(r, !0))), e;
}
function Qy() {
  xe(2);
}
function dl(e) {
  return Object.isFrozen(e);
}
var Es = {};
function Dn(e) {
  const t = Es[e];
  return t || xe(0, e), t;
}
function Ky(e, t) {
  Es[e] || (Es[e] = t);
}
var ho;
function wh() {
  return ho;
}
function Yy(e, t) {
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
function vf(e, t) {
  t && (Dn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Cs(e) {
  xs(e), e.drafts_.forEach(Gy), e.drafts_ = null;
}
function xs(e) {
  e === ho && (ho = e.parent_);
}
function gf(e) {
  return ho = Yy(ho, e);
}
function Gy(e) {
  const t = e[Qe];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function yf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Qe].modified_ && (Cs(t), xe(4)), Pt(e) && (e = Ui(t, e), t.parent_ || Wi(t, e)), t.patches_ && Dn("Patches").generateReplacementPatches_(
    n[Qe].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Ui(t, n, []), Cs(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Ma ? e : void 0;
}
function Ui(e, t, n) {
  if (dl(t))
    return t;
  const r = t[Qe];
  if (!r)
    return fo(
      t,
      (o, i) => wf(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Wi(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, l = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), l = !0), fo(
      i,
      (u, s) => wf(e, r, o, u, s, n, l)
    ), Wi(e, o, !1), n && e.patches_ && Dn("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function wf(e, t, n, r, o, i, l) {
  if (jt(o)) {
    const u = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !po(t.assigned_, r) ? i.concat(r) : void 0, s = Ui(e, o, u);
    if (yh(n, r, s), jt(s))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else l && n.add(o);
  if (Pt(o) && !dl(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Ui(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Wi(e, o);
  }
}
function Wi(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ia(t, n);
}
function Xy(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : wh(),
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
  let o = r, i = za;
  n && (o = [r], i = mo);
  const { revoke: l, proxy: u } = Proxy.revocable(o, i);
  return r.draft_ = u, r.revoke_ = l, u;
}
var za = {
  get(e, t) {
    if (t === Qe)
      return e;
    const n = gn(e);
    if (!po(n, t))
      return Zy(e, n, t);
    const r = n[t];
    return e.finalized_ || !Pt(r) ? r : r === hu(e.base_, t) ? (mu(e), e.copy_[t] = Ps(r, e)) : r;
  },
  has(e, t) {
    return t in gn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(gn(e));
  },
  set(e, t, n) {
    const r = Sh(gn(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = hu(gn(e), t), i = o == null ? void 0 : o[Qe];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (Hy(n, o) && (n !== void 0 || po(e.base_, t)))
        return !0;
      mu(e), _s(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return hu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, mu(e), _s(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
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
    xe(11);
  },
  getPrototypeOf(e) {
    return On(e.base_);
  },
  setPrototypeOf() {
    xe(12);
  }
}, mo = {};
fo(za, (e, t) => {
  mo[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
mo.deleteProperty = function(e, t) {
  return mo.set.call(this, e, t, void 0);
};
mo.set = function(e, t, n) {
  return za.set.call(this, e[0], t, n, e[0]);
};
function hu(e, t) {
  const n = e[Qe];
  return (n ? gn(n) : e)[t];
}
function Zy(e, t, n) {
  var o;
  const r = Sh(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Sh(e, t) {
  if (!(t in e))
    return;
  let n = On(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = On(n);
  }
}
function _s(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && _s(e.parent_));
}
function mu(e) {
  e.copy_ || (e.copy_ = ks(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Jy = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const l = this;
        return function(s = i, ...a) {
          return l.produce(s, (f) => n.call(this, f, ...a));
        };
      }
      typeof n != "function" && xe(6), r !== void 0 && typeof r != "function" && xe(7);
      let o;
      if (Pt(t)) {
        const i = gf(this), l = Ps(t, void 0);
        let u = !0;
        try {
          o = n(l), u = !1;
        } finally {
          u ? Cs(i) : xs(i);
        }
        return vf(i, r), yf(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Ma && (o = void 0), this.autoFreeze_ && Ia(o, !0), r) {
          const i = [], l = [];
          Dn("Patches").generateReplacementPatches_(t, o, i, l), r(i, l);
        }
        return o;
      } else
        xe(1, t);
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
    Pt(e) || xe(8), jt(e) && (e = qy(e));
    const t = gf(this), n = Ps(e, void 0);
    return n[Qe].isManual_ = !0, xs(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Qe];
    (!n || !n.isManual_) && xe(9);
    const { scope_: r } = n;
    return vf(r, t), yf(void 0, r);
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
    const r = Dn("Patches").applyPatches_;
    return jt(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function Ps(e, t) {
  const n = Co(e) ? Dn("MapSet").proxyMap_(e, t) : xo(e) ? Dn("MapSet").proxySet_(e, t) : Xy(e, t);
  return (t ? t.scope_ : wh()).drafts_.push(n), n;
}
function qy(e) {
  return jt(e) || xe(10, e), kh(e);
}
function kh(e) {
  if (!Pt(e) || dl(e))
    return e;
  const t = e[Qe];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = ks(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = ks(e, !0);
  return fo(n, (r, o) => {
    yh(n, r, kh(o));
  }), t && (t.finalized_ = !1), n;
}
function ik() {
  const t = "replace", n = "add", r = "remove";
  function o(p, w, g, v) {
    switch (p.type_) {
      case 0:
      case 2:
        return l(
          p,
          w,
          g,
          v
        );
      case 1:
        return i(p, w, g, v);
      case 3:
        return u(
          p,
          w,
          g,
          v
        );
    }
  }
  function i(p, w, g, v) {
    let { base_: S, assigned_: d } = p, c = p.copy_;
    c.length < S.length && ([S, c] = [c, S], [g, v] = [v, g]);
    for (let h = 0; h < S.length; h++)
      if (d[h] && c[h] !== S[h]) {
        const y = w.concat([h]);
        g.push({
          op: t,
          path: y,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: m(c[h])
        }), v.push({
          op: t,
          path: y,
          value: m(S[h])
        });
      }
    for (let h = S.length; h < c.length; h++) {
      const y = w.concat([h]);
      g.push({
        op: n,
        path: y,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: m(c[h])
      });
    }
    for (let h = c.length - 1; S.length <= h; --h) {
      const y = w.concat([h]);
      v.push({
        op: r,
        path: y
      });
    }
  }
  function l(p, w, g, v) {
    const { base_: S, copy_: d } = p;
    fo(p.assigned_, (c, h) => {
      const y = pu(S, c), C = pu(d, c), _ = h ? po(S, c) ? t : n : r;
      if (y === C && _ === t)
        return;
      const x = w.concat(c);
      g.push(_ === r ? { op: _, path: x } : { op: _, path: x, value: C }), v.push(
        _ === n ? { op: r, path: x } : _ === r ? { op: n, path: x, value: m(y) } : { op: t, path: x, value: m(y) }
      );
    });
  }
  function u(p, w, g, v) {
    let { base_: S, copy_: d } = p, c = 0;
    S.forEach((h) => {
      if (!d.has(h)) {
        const y = w.concat([c]);
        g.push({
          op: r,
          path: y,
          value: h
        }), v.unshift({
          op: n,
          path: y,
          value: h
        });
      }
      c++;
    }), c = 0, d.forEach((h) => {
      if (!S.has(h)) {
        const y = w.concat([c]);
        g.push({
          op: n,
          path: y,
          value: h
        }), v.unshift({
          op: r,
          path: y,
          value: h
        });
      }
      c++;
    });
  }
  function s(p, w, g, v) {
    g.push({
      op: t,
      path: [],
      value: w === Ma ? void 0 : w
    }), v.push({
      op: t,
      path: [],
      value: p
    });
  }
  function a(p, w) {
    return w.forEach((g) => {
      const { path: v, op: S } = g;
      let d = p;
      for (let C = 0; C < v.length - 1; C++) {
        const _ = An(d);
        let x = v[C];
        typeof x != "string" && typeof x != "number" && (x = "" + x), (_ === 0 || _ === 1) && (x === "__proto__" || x === "constructor") && xe(19), typeof d == "function" && x === "prototype" && xe(19), d = pu(d, x), typeof d != "object" && xe(18, v.join("/"));
      }
      const c = An(d), h = f(g.value), y = v[v.length - 1];
      switch (S) {
        case t:
          switch (c) {
            case 2:
              return d.set(y, h);
            case 3:
              xe(16);
            default:
              return d[y] = h;
          }
        case n:
          switch (c) {
            case 1:
              return y === "-" ? d.push(h) : d.splice(y, 0, h);
            case 2:
              return d.set(y, h);
            case 3:
              return d.add(h);
            default:
              return d[y] = h;
          }
        case r:
          switch (c) {
            case 1:
              return d.splice(y, 1);
            case 2:
              return d.delete(y);
            case 3:
              return d.delete(g.value);
            default:
              return delete d[y];
          }
        default:
          xe(17, S);
      }
    }), p;
  }
  function f(p) {
    if (!Pt(p))
      return p;
    if (Array.isArray(p))
      return p.map(f);
    if (Co(p))
      return new Map(
        Array.from(p.entries()).map(([g, v]) => [g, f(v)])
      );
    if (xo(p))
      return new Set(Array.from(p).map(f));
    const w = Object.create(On(p));
    for (const g in p)
      w[g] = f(p[g]);
    return po(p, Qr) && (w[Qr] = p[Qr]), w;
  }
  function m(p) {
    return jt(p) ? f(p) : p;
  }
  Ky("Patches", {
    applyPatches_: a,
    generatePatches_: o,
    generateReplacementPatches_: s
  });
}
var qe = new Jy(), Eh = qe.produce, lk = qe.produceWithPatches.bind(
  qe
);
qe.setAutoFreeze.bind(qe);
qe.setUseStrictShallowCopy.bind(qe);
var uk = qe.applyPatches.bind(qe);
qe.createDraft.bind(qe);
qe.finishDraft.bind(qe);
function Ch(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var e0 = Ch(), t0 = Ch, n0 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Bi : Bi.apply(null, arguments);
}, r0 = (e) => e && typeof e.match == "function";
function Lt(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(ze(0));
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => vh(r) && r.type === e, n;
}
function Sf(e, t) {
  for (const n of e)
    if (t(n))
      return n;
}
var xh = class Ir extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ir.prototype);
  }
  static get [Symbol.species]() {
    return Ir;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Ir(...t[0].concat(this)) : new Ir(...t.concat(this));
  }
};
function kf(e) {
  return Pt(e) ? Eh(e, () => {
  }) : e;
}
function Ef(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(ze(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function o0(e) {
  return typeof e == "boolean";
}
var i0 = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let l = new xh();
  return n && (o0(n) ? l.push(e0) : l.push(t0(n.extraArgument))), l;
}, _h = "RTK_autoBatch", sk = () => (e) => ({
  payload: e,
  meta: {
    [_h]: !0
  }
}), Ph = (e) => (t) => {
  setTimeout(t, e);
}, l0 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Ph(10), u0 = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, l = !1;
  const u = /* @__PURE__ */ new Set(), s = e.type === "tick" ? queueMicrotask : e.type === "raf" ? l0 : e.type === "callback" ? e.queueNotification : Ph(e.timeout), a = () => {
    l = !1, i && (i = !1, u.forEach((f) => f()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(f) {
      const m = () => o && f(), p = r.subscribe(m);
      return u.add(f), () => {
        p(), u.delete(f);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(f) {
      var m;
      try {
        return o = !((m = f == null ? void 0 : f.meta) != null && m[_h]), i = !o, i && (l || (l = !0, s(a))), r.dispatch(f);
      } finally {
        o = !0;
      }
    }
  });
}, s0 = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new xh(e);
  return r && o.push(u0(typeof r == "object" ? r : void 0)), o;
};
function ak(e) {
  const t = i0(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: l = void 0
  } = e || {};
  let u;
  if (typeof n == "function")
    u = n;
  else if (La(n))
    u = Wy(n);
  else
    throw new Error(ze(1));
  let s;
  typeof r == "function" ? s = r(t) : s = t();
  let a = Bi;
  o && (a = n0({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof o == "object" && o
  }));
  const f = by(...s), m = s0(f);
  let p = typeof l == "function" ? l(m) : m();
  const w = a(...p);
  return mh(u, i, w);
}
function Nh(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, l) {
      const u = typeof i == "string" ? i : i.type;
      if (!u)
        throw new Error(ze(28));
      if (u in t)
        throw new Error(ze(29));
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
function a0(e) {
  return typeof e == "function";
}
function c0(e, t) {
  let [n, r, o] = Nh(t), i;
  if (a0(e))
    i = () => kf(e());
  else {
    const u = kf(e);
    i = () => u;
  }
  function l(u = i(), s) {
    let a = [n[s.type], ...r.filter(({
      matcher: f
    }) => f(s)).map(({
      reducer: f
    }) => f)];
    return a.filter((f) => !!f).length === 0 && (a = [o]), a.reduce((f, m) => {
      if (m)
        if (jt(f)) {
          const w = m(f, s);
          return w === void 0 ? f : w;
        } else {
          if (Pt(f))
            return Eh(f, (p) => m(p, s));
          {
            const p = m(f, s);
            if (p === void 0) {
              if (f === null)
                return f;
              throw new Error(ze(9));
            }
            return p;
          }
        }
      return f;
    }, u);
  }
  return l.getInitialState = i, l;
}
var Rh = (e, t) => r0(e) ? e.match(t) : e(t);
function _o(...e) {
  return (t) => e.some((n) => Rh(n, t));
}
function Cf(...e) {
  return (t) => e.every((n) => Rh(n, t));
}
function pl(e, t) {
  if (!e || !e.meta) return !1;
  const n = typeof e.meta.requestId == "string", r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function Po(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function f0(...e) {
  return e.length === 0 ? (t) => pl(t, ["pending"]) : Po(e) ? _o(...e.map((t) => t.pending)) : f0()(e[0]);
}
function Ns(...e) {
  return e.length === 0 ? (t) => pl(t, ["rejected"]) : Po(e) ? _o(...e.map((t) => t.rejected)) : Ns()(e[0]);
}
function d0(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0 ? Cf(Ns(...e), t) : Po(e) ? Cf(Ns(...e), t) : d0()(e[0]);
}
function p0(...e) {
  return e.length === 0 ? (t) => pl(t, ["fulfilled"]) : Po(e) ? _o(...e.map((t) => t.fulfilled)) : p0()(e[0]);
}
function h0(...e) {
  return e.length === 0 ? (t) => pl(t, ["pending", "fulfilled", "rejected"]) : Po(e) ? _o(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : h0()(e[0]);
}
var m0 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Th = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += m0[Math.random() * 64 | 0];
  return t;
}, v0 = ["name", "message", "stack", "code"], vu = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Cr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, xf = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Cr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, g0 = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of v0)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, ck = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = Lt(t + "/fulfilled", (s, a, f, m) => ({
      payload: s,
      meta: {
        ...m || {},
        arg: f,
        requestId: a,
        requestStatus: "fulfilled"
      }
    })), i = Lt(t + "/pending", (s, a, f) => ({
      payload: void 0,
      meta: {
        ...f || {},
        arg: a,
        requestId: s,
        requestStatus: "pending"
      }
    })), l = Lt(t + "/rejected", (s, a, f, m, p) => ({
      payload: m,
      error: (r && r.serializeError || g0)(s || "Rejected"),
      meta: {
        ...p || {},
        arg: f,
        requestId: a,
        rejectedWithValue: !!m,
        requestStatus: "rejected",
        aborted: (s == null ? void 0 : s.name) === "AbortError",
        condition: (s == null ? void 0 : s.name) === "ConditionError"
      }
    }));
    function u(s) {
      return (a, f, m) => {
        const p = r != null && r.idGenerator ? r.idGenerator(s) : Th(), w = new AbortController();
        let g, v;
        function S(c) {
          v = c, w.abort();
        }
        const d = async function() {
          var y, C;
          let c;
          try {
            let _ = (y = r == null ? void 0 : r.condition) == null ? void 0 : y.call(r, s, {
              getState: f,
              extra: m
            });
            if (w0(_) && (_ = await _), _ === !1 || w.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const x = new Promise((P, I) => {
              g = () => {
                I({
                  name: "AbortError",
                  message: v || "Aborted"
                });
              }, w.signal.addEventListener("abort", g);
            });
            a(i(p, s, (C = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : C.call(r, {
              requestId: p,
              arg: s
            }, {
              getState: f,
              extra: m
            }))), c = await Promise.race([x, Promise.resolve(n(s, {
              dispatch: a,
              getState: f,
              extra: m,
              requestId: p,
              signal: w.signal,
              abort: S,
              rejectWithValue: (P, I) => new vu(P, I),
              fulfillWithValue: (P, I) => new xf(P, I)
            })).then((P) => {
              if (P instanceof vu)
                throw P;
              return P instanceof xf ? o(P.payload, p, s, P.meta) : o(P, p, s);
            })]);
          } catch (_) {
            c = _ instanceof vu ? l(null, p, s, _.payload, _.meta) : l(_, p, s);
          } finally {
            g && w.signal.removeEventListener("abort", g);
          }
          return r && !r.dispatchConditionRejection && l.match(c) && c.meta.condition || a(c), c;
        }();
        return Object.assign(d, {
          abort: S,
          requestId: p,
          arg: s,
          unwrap() {
            return d.then(y0);
          }
        });
      };
    }
    return Object.assign(u, {
      pending: i,
      rejected: l,
      fulfilled: o,
      settled: _o(l, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function y0(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function w0(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var S0 = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function k0(e, t) {
  return `${e}/${t}`;
}
function E0({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[S0];
  return function(o) {
    const {
      name: i,
      reducerPath: l = i
    } = o;
    if (!i)
      throw new Error(ze(11));
    typeof process < "u";
    const u = (typeof o.reducers == "function" ? o.reducers(x0()) : o.reducers) || {}, s = Object.keys(u), a = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(h, y) {
        const C = typeof h == "string" ? h : h.type;
        if (!C)
          throw new Error(ze(12));
        if (C in a.sliceCaseReducersByType)
          throw new Error(ze(13));
        return a.sliceCaseReducersByType[C] = y, f;
      },
      addMatcher(h, y) {
        return a.sliceMatchers.push({
          matcher: h,
          reducer: y
        }), f;
      },
      exposeAction(h, y) {
        return a.actionCreators[h] = y, f;
      },
      exposeCaseReducer(h, y) {
        return a.sliceCaseReducersByName[h] = y, f;
      }
    };
    s.forEach((h) => {
      const y = u[h], C = {
        reducerName: h,
        type: k0(i, h),
        createNotation: typeof o.reducers == "function"
      };
      P0(y) ? R0(C, y, f, t) : _0(C, y, f);
    });
    function m() {
      const [h = {}, y = [], C = void 0] = typeof o.extraReducers == "function" ? Nh(o.extraReducers) : [o.extraReducers], _ = {
        ...h,
        ...a.sliceCaseReducersByType
      };
      return c0(o.initialState, (x) => {
        for (let P in _)
          x.addCase(P, _[P]);
        for (let P of a.sliceMatchers)
          x.addMatcher(P.matcher, P.reducer);
        for (let P of y)
          x.addMatcher(P.matcher, P.reducer);
        C && x.addDefaultCase(C);
      });
    }
    const p = (h) => h, w = /* @__PURE__ */ new Map();
    let g;
    function v(h, y) {
      return g || (g = m()), g(h, y);
    }
    function S() {
      return g || (g = m()), g.getInitialState();
    }
    function d(h, y = !1) {
      function C(x) {
        let P = x[h];
        return typeof P > "u" && y && (P = S()), P;
      }
      function _(x = p) {
        const P = Ef(w, y, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Ef(P, x, {
          insert: () => {
            const I = {};
            for (const [M, ce] of Object.entries(o.selectors ?? {}))
              I[M] = C0(ce, x, S, y);
            return I;
          }
        });
      }
      return {
        reducerPath: h,
        getSelectors: _,
        get selectors() {
          return _(C);
        },
        selectSlice: C
      };
    }
    const c = {
      name: i,
      reducer: v,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: S,
      ...d(l),
      injectInto(h, {
        reducerPath: y,
        ...C
      } = {}) {
        const _ = y ?? l;
        return h.inject({
          reducerPath: _,
          reducer: v
        }, C), {
          ...c,
          ...d(_, !0)
        };
      }
    };
    return c;
  };
}
function C0(e, t, n, r) {
  function o(i, ...l) {
    let u = t(i);
    return typeof u > "u" && r && (u = n()), e(u, ...l);
  }
  return o.unwrapped = e, o;
}
var Fa = /* @__PURE__ */ E0();
function x0() {
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
function _0({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, l;
  if ("reducer" in r) {
    if (n && !N0(r))
      throw new Error(ze(17));
    i = r.reducer, l = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, l ? Lt(e, l) : Lt(e));
}
function P0(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function N0(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function R0({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(ze(18));
  const {
    payloadCreator: i,
    fulfilled: l,
    pending: u,
    rejected: s,
    settled: a,
    options: f
  } = n, m = o(e, i, f);
  r.exposeAction(t, m), l && r.addCase(m.fulfilled, l), u && r.addCase(m.pending, u), s && r.addCase(m.rejected, s), a && r.addMatcher(m.settled, a), r.exposeCaseReducer(t, {
    fulfilled: l || Qo,
    pending: u || Qo,
    rejected: s || Qo,
    settled: a || Qo
  });
}
function Qo() {
}
var T0 = "task", Oh = "listener", Ah = "completed", ja = "cancelled", O0 = `task-${ja}`, A0 = `task-${Ah}`, Rs = `${Oh}-${ja}`, D0 = `${Oh}-${Ah}`, hl = class {
  constructor(e) {
    Cr(this, "name", "TaskAbortError");
    Cr(this, "message");
    this.code = e, this.message = `${T0} ${ja} (reason: ${e})`;
  }
}, Ba = (e, t) => {
  if (typeof e != "function")
    throw new Error(ze(32));
}, bi = () => {
}, Dh = (e, t = bi) => (e.catch(t), e), $h = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), Cn = (e, t) => {
  const n = e.signal;
  n.aborted || ("reason" in n || Object.defineProperty(n, "reason", {
    enumerable: !0,
    value: t,
    configurable: !0,
    writable: !0
  }), e.abort(t));
}, xn = (e) => {
  if (e.aborted) {
    const {
      reason: t
    } = e;
    throw new hl(t);
  }
};
function Lh(e, t) {
  let n = bi;
  return new Promise((r, o) => {
    const i = () => o(new hl(e.reason));
    if (e.aborted) {
      i();
      return;
    }
    n = $h(e, i), t.finally(() => n()).then(r, o);
  }).finally(() => {
    n = bi;
  });
}
var $0 = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (n) {
    return {
      status: n instanceof hl ? "cancelled" : "rejected",
      error: n
    };
  } finally {
    t == null || t();
  }
}, Vi = (e) => (t) => Dh(Lh(e, t).then((n) => (xn(e), n))), Mh = (e) => {
  const t = Vi(e);
  return (n) => t(new Promise((r) => setTimeout(r, n)));
}, {
  assign: ur
} = Object, _f = {}, ml = "listenerMiddleware", L0 = (e, t) => {
  const n = (r) => $h(e, () => Cn(r, e.reason));
  return (r, o) => {
    Ba(r);
    const i = new AbortController();
    n(i);
    const l = $0(async () => {
      xn(e), xn(i.signal);
      const u = await r({
        pause: Vi(i.signal),
        delay: Mh(i.signal),
        signal: i.signal
      });
      return xn(i.signal), u;
    }, () => Cn(i, A0));
    return o != null && o.autoJoin && t.push(l.catch(bi)), {
      result: Vi(e)(l),
      cancel() {
        Cn(i, O0);
      }
    };
  };
}, M0 = (e, t) => {
  const n = async (r, o) => {
    xn(t);
    let i = () => {
    };
    const u = [new Promise((s, a) => {
      let f = e({
        predicate: r,
        effect: (m, p) => {
          p.unsubscribe(), s([m, p.getState(), p.getOriginalState()]);
        }
      });
      i = () => {
        f(), a();
      };
    })];
    o != null && u.push(new Promise((s) => setTimeout(s, o, null)));
    try {
      const s = await Lh(t, Promise.race(u));
      return xn(t), s;
    } finally {
      i();
    }
  };
  return (r, o) => Dh(n(r, o));
}, Ih = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = Lt(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o) throw new Error(ze(21));
  return Ba(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, zh = /* @__PURE__ */ ur((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = Ih(e);
  return {
    id: Th(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(ze(22));
    }
  };
}, {
  withTypes: () => zh
}), Ts = (e) => {
  e.pending.forEach((t) => {
    Cn(t, Rs);
  });
}, I0 = (e) => () => {
  e.forEach(Ts), e.clear();
}, Pf = (e, t, n) => {
  try {
    e(t, n);
  } catch (r) {
    setTimeout(() => {
      throw r;
    }, 0);
  }
}, Fh = /* @__PURE__ */ ur(/* @__PURE__ */ Lt(`${ml}/add`), {
  withTypes: () => Fh
}), z0 = /* @__PURE__ */ Lt(`${ml}/removeAll`), jh = /* @__PURE__ */ ur(/* @__PURE__ */ Lt(`${ml}/remove`), {
  withTypes: () => jh
}), F0 = (...e) => {
  console.error(`${ml}/error`, ...e);
}, fk = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), {
    extra: n,
    onError: r = F0
  } = e;
  Ba(r);
  const o = (f) => (f.unsubscribe = () => t.delete(f.id), t.set(f.id, f), (m) => {
    f.unsubscribe(), m != null && m.cancelActive && Ts(f);
  }), i = (f) => {
    let m = Sf(Array.from(t.values()), (p) => p.effect === f.effect);
    return m || (m = zh(f)), o(m);
  };
  ur(i, {
    withTypes: () => i
  });
  const l = (f) => {
    const {
      type: m,
      effect: p,
      predicate: w
    } = Ih(f), g = Sf(Array.from(t.values()), (v) => (typeof m == "string" ? v.type === m : v.predicate === w) && v.effect === p);
    return g && (g.unsubscribe(), f.cancelActive && Ts(g)), !!g;
  };
  ur(l, {
    withTypes: () => l
  });
  const u = async (f, m, p, w) => {
    const g = new AbortController(), v = M0(i, g.signal), S = [];
    try {
      f.pending.add(g), await Promise.resolve(f.effect(
        m,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        ur({}, p, {
          getOriginalState: w,
          condition: (d, c) => v(d, c).then(Boolean),
          take: v,
          delay: Mh(g.signal),
          pause: Vi(g.signal),
          extra: n,
          signal: g.signal,
          fork: L0(g.signal, S),
          unsubscribe: f.unsubscribe,
          subscribe: () => {
            t.set(f.id, f);
          },
          cancelActiveListeners: () => {
            f.pending.forEach((d, c, h) => {
              d !== g && (Cn(d, Rs), h.delete(d));
            });
          },
          cancel: () => {
            Cn(g, Rs), f.pending.delete(g);
          },
          throwIfCancelled: () => {
            xn(g.signal);
          }
        })
      ));
    } catch (d) {
      d instanceof hl || Pf(r, d, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(S), Cn(g, D0), f.pending.delete(g);
    }
  }, s = I0(t);
  return {
    middleware: (f) => (m) => (p) => {
      if (!vh(p))
        return m(p);
      if (Fh.match(p))
        return i(p.payload);
      if (z0.match(p)) {
        s();
        return;
      }
      if (jh.match(p))
        return l(p.payload);
      let w = f.getState();
      const g = () => {
        if (w === _f)
          throw new Error(ze(23));
        return w;
      };
      let v;
      try {
        if (v = m(p), t.size > 0) {
          const S = f.getState(), d = Array.from(t.values());
          for (const c of d) {
            let h = !1;
            try {
              h = c.predicate(p, S, w);
            } catch (y) {
              h = !1, Pf(r, y, {
                raisedBy: "predicate"
              });
            }
            h && u(c, p, f, g);
          }
        }
      } finally {
        w = _f;
      }
      return v;
    },
    startListening: i,
    stopListening: l,
    clearListeners: s
  };
};
function ze(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const j0 = {
  theme: void 0,
  kind: void 0
}, Bh = Fa({
  name: "theme",
  initialState: j0,
  reducers: {
    changeTheme: (e, t) => {
      e.kind = t.payload.kind, e.theme = { ...e.theme, ...t.payload.theme ?? {} }, e.kind === "light" ? (e.theme.computedOne = "rgba(0, 0, 0, 0.05)", e.theme.computedTwo = "rgba(0, 0, 0, 0.1)") : e.kind === "dark" ? (e.theme.computedOne = "rgba(255, 255, 255, 0.05)", e.theme.computedTwo = "rgba(255, 255, 255, 0.1)") : (e.theme.computedOne = "transparent", e.theme.computedTwo = "transparent");
    }
  }
}), B0 = $a, { changeTheme: dk } = Bh.actions, pk = Bh.reducer, U0 = {
  current: ["starting"],
  history: []
}, Uh = Fa({
  name: "router",
  initialState: U0,
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
}), { goTo: W0, goBack: hk, openLink: b0 } = Uh.actions, V0 = hh, Wh = $a, mk = Uh.reducer;
var bh = { exports: {} }, X = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ua = Symbol.for("react.element"), Wa = Symbol.for("react.portal"), vl = Symbol.for("react.fragment"), gl = Symbol.for("react.strict_mode"), yl = Symbol.for("react.profiler"), wl = Symbol.for("react.provider"), Sl = Symbol.for("react.context"), H0 = Symbol.for("react.server_context"), kl = Symbol.for("react.forward_ref"), El = Symbol.for("react.suspense"), Cl = Symbol.for("react.suspense_list"), xl = Symbol.for("react.memo"), _l = Symbol.for("react.lazy"), Q0 = Symbol.for("react.offscreen"), Vh;
Vh = Symbol.for("react.module.reference");
function ct(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ua:
        switch (e = e.type, e) {
          case vl:
          case yl:
          case gl:
          case El:
          case Cl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case H0:
              case Sl:
              case kl:
              case _l:
              case xl:
              case wl:
                return e;
              default:
                return t;
            }
        }
      case Wa:
        return t;
    }
  }
}
X.ContextConsumer = Sl;
X.ContextProvider = wl;
X.Element = Ua;
X.ForwardRef = kl;
X.Fragment = vl;
X.Lazy = _l;
X.Memo = xl;
X.Portal = Wa;
X.Profiler = yl;
X.StrictMode = gl;
X.Suspense = El;
X.SuspenseList = Cl;
X.isAsyncMode = function() {
  return !1;
};
X.isConcurrentMode = function() {
  return !1;
};
X.isContextConsumer = function(e) {
  return ct(e) === Sl;
};
X.isContextProvider = function(e) {
  return ct(e) === wl;
};
X.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ua;
};
X.isForwardRef = function(e) {
  return ct(e) === kl;
};
X.isFragment = function(e) {
  return ct(e) === vl;
};
X.isLazy = function(e) {
  return ct(e) === _l;
};
X.isMemo = function(e) {
  return ct(e) === xl;
};
X.isPortal = function(e) {
  return ct(e) === Wa;
};
X.isProfiler = function(e) {
  return ct(e) === yl;
};
X.isStrictMode = function(e) {
  return ct(e) === gl;
};
X.isSuspense = function(e) {
  return ct(e) === El;
};
X.isSuspenseList = function(e) {
  return ct(e) === Cl;
};
X.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === vl || e === yl || e === gl || e === El || e === Cl || e === Q0 || typeof e == "object" && e !== null && (e.$$typeof === _l || e.$$typeof === xl || e.$$typeof === wl || e.$$typeof === Sl || e.$$typeof === kl || e.$$typeof === Vh || e.getModuleId !== void 0);
};
X.typeOf = ct;
bh.exports = X;
var Hh = bh.exports;
function K0(e) {
  function t(O, A, D, j, E) {
    for (var b = 0, T = 0, le = 0, Q = 0, Y, U, we = 0, Be = 0, H, Te = H = Y = 0, K = 0, Se = 0, kr = 0, ke = 0, Ro = D.length, Er = Ro - 1, ft, B = "", se = "", Fl = "", jl = "", Wt; K < Ro; ) {
      if (U = D.charCodeAt(K), K === Er && T + Q + le + b !== 0 && (T !== 0 && (U = T === 47 ? 10 : 47), Q = le = b = 0, Ro++, Er++), T + Q + le + b === 0) {
        if (K === Er && (0 < Se && (B = B.replace(p, "")), 0 < B.trim().length)) {
          switch (U) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              B += D.charAt(K);
          }
          U = 59;
        }
        switch (U) {
          case 123:
            for (B = B.trim(), Y = B.charCodeAt(0), H = 1, ke = ++K; K < Ro; ) {
              switch (U = D.charCodeAt(K)) {
                case 123:
                  H++;
                  break;
                case 125:
                  H--;
                  break;
                case 47:
                  switch (U = D.charCodeAt(K + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Te = K + 1; Te < Er; ++Te)
                          switch (D.charCodeAt(Te)) {
                            case 47:
                              if (U === 42 && D.charCodeAt(Te - 1) === 42 && K + 2 !== Te) {
                                K = Te + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (U === 47) {
                                K = Te + 1;
                                break e;
                              }
                          }
                        K = Te;
                      }
                  }
                  break;
                case 91:
                  U++;
                case 40:
                  U++;
                case 34:
                case 39:
                  for (; K++ < Er && D.charCodeAt(K) !== U; )
                    ;
              }
              if (H === 0) break;
              K++;
            }
            switch (H = D.substring(ke, K), Y === 0 && (Y = (B = B.replace(m, "").trim()).charCodeAt(0)), Y) {
              case 64:
                switch (0 < Se && (B = B.replace(p, "")), U = B.charCodeAt(1), U) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Se = A;
                    break;
                  default:
                    Se = Nt;
                }
                if (H = t(A, Se, H, U, E + 1), ke = H.length, 0 < R && (Se = n(Nt, B, kr), Wt = u(3, H, Se, A, ye, de, ke, U, E, j), B = Se.join(""), Wt !== void 0 && (ke = (H = Wt.trim()).length) === 0 && (U = 0, H = "")), 0 < ke) switch (U) {
                  case 115:
                    B = B.replace(_, l);
                  case 100:
                  case 109:
                  case 45:
                    H = B + "{" + H + "}";
                    break;
                  case 107:
                    B = B.replace(c, "$1 $2"), H = B + "{" + H + "}", H = Re === 1 || Re === 2 && i("@" + H, 3) ? "@-webkit-" + H + "@" + H : "@" + H;
                    break;
                  default:
                    H = B + H, j === 112 && (H = (se += H, ""));
                }
                else H = "";
                break;
              default:
                H = t(A, n(A, B, kr), H, j, E + 1);
            }
            Fl += H, H = kr = Se = Te = Y = 0, B = "", U = D.charCodeAt(++K);
            break;
          case 125:
          case 59:
            if (B = (0 < Se ? B.replace(p, "") : B).trim(), 1 < (ke = B.length)) switch (Te === 0 && (Y = B.charCodeAt(0), Y === 45 || 96 < Y && 123 > Y) && (ke = (B = B.replace(" ", ":")).length), 0 < R && (Wt = u(1, B, A, O, ye, de, se.length, j, E, j)) !== void 0 && (ke = (B = Wt.trim()).length) === 0 && (B = "\0\0"), Y = B.charCodeAt(0), U = B.charCodeAt(1), Y) {
              case 0:
                break;
              case 64:
                if (U === 105 || U === 99) {
                  jl += B + D.charAt(K);
                  break;
                }
              default:
                B.charCodeAt(ke - 1) !== 58 && (se += o(B, Y, U, B.charCodeAt(2)));
            }
            kr = Se = Te = Y = 0, B = "", U = D.charCodeAt(++K);
        }
      }
      switch (U) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + Y === 0 && j !== 107 && 0 < B.length && (Se = 1, B += "\0"), 0 < R * F && u(0, B, A, O, ye, de, se.length, j, E, j), de = 1, ye++;
          break;
        case 59:
        case 125:
          if (T + Q + le + b === 0) {
            de++;
            break;
          }
        default:
          switch (de++, ft = D.charAt(K), U) {
            case 9:
            case 32:
              if (Q + b + T === 0) switch (we) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ft = "";
                  break;
                default:
                  U !== 32 && (ft = " ");
              }
              break;
            case 0:
              ft = "\\0";
              break;
            case 12:
              ft = "\\f";
              break;
            case 11:
              ft = "\\v";
              break;
            case 38:
              Q + T + b === 0 && (Se = kr = 1, ft = "\f" + ft);
              break;
            case 108:
              if (Q + T + b + Ke === 0 && 0 < Te) switch (K - Te) {
                case 2:
                  we === 112 && D.charCodeAt(K - 3) === 58 && (Ke = we);
                case 8:
                  Be === 111 && (Ke = Be);
              }
              break;
            case 58:
              Q + T + b === 0 && (Te = K);
              break;
            case 44:
              T + le + Q + b === 0 && (Se = 1, ft += "\r");
              break;
            case 34:
            case 39:
              T === 0 && (Q = Q === U ? 0 : Q === 0 ? U : Q);
              break;
            case 91:
              Q + T + le === 0 && b++;
              break;
            case 93:
              Q + T + le === 0 && b--;
              break;
            case 41:
              Q + T + b === 0 && le--;
              break;
            case 40:
              if (Q + T + b === 0) {
                if (Y === 0) switch (2 * we + 3 * Be) {
                  case 533:
                    break;
                  default:
                    Y = 1;
                }
                le++;
              }
              break;
            case 64:
              T + le + Q + b + Te + H === 0 && (H = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + b + le)) switch (T) {
                case 0:
                  switch (2 * U + 3 * D.charCodeAt(K + 1)) {
                    case 235:
                      T = 47;
                      break;
                    case 220:
                      ke = K, T = 42;
                  }
                  break;
                case 42:
                  U === 47 && we === 42 && ke + 2 !== K && (D.charCodeAt(ke + 2) === 33 && (se += D.substring(ke, K + 1)), ft = "", T = 0);
              }
          }
          T === 0 && (B += ft);
      }
      Be = we, we = U, K++;
    }
    if (ke = se.length, 0 < ke) {
      if (Se = A, 0 < R && (Wt = u(2, se, Se, O, ye, de, ke, j, E, j), Wt !== void 0 && (se = Wt).length === 0)) return jl + se + Fl;
      if (se = Se.join(",") + "{" + se + "}", Re * Ke !== 0) {
        switch (Re !== 2 || i(se, 2) || (Ke = 0), Ke) {
          case 111:
            se = se.replace(y, ":-moz-$1") + se;
            break;
          case 112:
            se = se.replace(h, "::-webkit-input-$1") + se.replace(h, "::-moz-$1") + se.replace(h, ":-ms-input-$1") + se;
        }
        Ke = 0;
      }
    }
    return jl + se + Fl;
  }
  function n(O, A, D) {
    var j = A.trim().split(S);
    A = j;
    var E = j.length, b = O.length;
    switch (b) {
      case 0:
      case 1:
        var T = 0;
        for (O = b === 0 ? "" : O[0] + " "; T < E; ++T)
          A[T] = r(O, A[T], D).trim();
        break;
      default:
        var le = T = 0;
        for (A = []; T < E; ++T)
          for (var Q = 0; Q < b; ++Q)
            A[le++] = r(O[Q] + " ", j[T], D).trim();
    }
    return A;
  }
  function r(O, A, D) {
    var j = A.charCodeAt(0);
    switch (33 > j && (j = (A = A.trim()).charCodeAt(0)), j) {
      case 38:
        return A.replace(d, "$1" + O.trim());
      case 58:
        return O.trim() + A.replace(d, "$1" + O.trim());
      default:
        if (0 < 1 * D && 0 < A.indexOf("\f")) return A.replace(d, (O.charCodeAt(0) === 58 ? "" : "$1") + O.trim());
    }
    return O + A;
  }
  function o(O, A, D, j) {
    var E = O + ";", b = 2 * A + 3 * D + 4 * j;
    if (b === 944) {
      O = E.indexOf(":", 9) + 1;
      var T = E.substring(O, E.length - 1).trim();
      return T = E.substring(0, O).trim() + T + ";", Re === 1 || Re === 2 && i(T, 1) ? "-webkit-" + T + T : T;
    }
    if (Re === 0 || Re === 2 && !i(E, 1)) return E;
    switch (b) {
      case 1015:
        return E.charCodeAt(10) === 97 ? "-webkit-" + E + E : E;
      case 951:
        return E.charCodeAt(3) === 116 ? "-webkit-" + E + E : E;
      case 963:
        return E.charCodeAt(5) === 110 ? "-webkit-" + E + E : E;
      case 1009:
        if (E.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + E + E;
      case 978:
        return "-webkit-" + E + "-moz-" + E + E;
      case 1019:
      case 983:
        return "-webkit-" + E + "-moz-" + E + "-ms-" + E + E;
      case 883:
        if (E.charCodeAt(8) === 45) return "-webkit-" + E + E;
        if (0 < E.indexOf("image-set(", 11)) return E.replace(ce, "$1-webkit-$2") + E;
        break;
      case 932:
        if (E.charCodeAt(4) === 45) switch (E.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + E.replace("-grow", "") + "-webkit-" + E + "-ms-" + E.replace("grow", "positive") + E;
          case 115:
            return "-webkit-" + E + "-ms-" + E.replace("shrink", "negative") + E;
          case 98:
            return "-webkit-" + E + "-ms-" + E.replace("basis", "preferred-size") + E;
        }
        return "-webkit-" + E + "-ms-" + E + E;
      case 964:
        return "-webkit-" + E + "-ms-flex-" + E + E;
      case 1023:
        if (E.charCodeAt(8) !== 99) break;
        return T = E.substring(E.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + T + "-webkit-" + E + "-ms-flex-pack" + T + E;
      case 1005:
        return g.test(E) ? E.replace(w, ":-webkit-") + E.replace(w, ":-moz-") + E : E;
      case 1e3:
        switch (T = E.substring(13).trim(), A = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt(A)) {
          case 226:
            T = E.replace(C, "tb");
            break;
          case 232:
            T = E.replace(C, "tb-rl");
            break;
          case 220:
            T = E.replace(C, "lr");
            break;
          default:
            return E;
        }
        return "-webkit-" + E + "-ms-" + T + E;
      case 1017:
        if (E.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (A = (E = O).length - 10, T = (E.charCodeAt(A) === 33 ? E.substring(0, A) : E).substring(O.indexOf(":", 7) + 1).trim(), b = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
          case 203:
            if (111 > T.charCodeAt(8)) break;
          case 115:
            E = E.replace(T, "-webkit-" + T) + ";" + E;
            break;
          case 207:
          case 102:
            E = E.replace(T, "-webkit-" + (102 < b ? "inline-" : "") + "box") + ";" + E.replace(T, "-webkit-" + T) + ";" + E.replace(T, "-ms-" + T + "box") + ";" + E;
        }
        return E + ";";
      case 938:
        if (E.charCodeAt(5) === 45) switch (E.charCodeAt(6)) {
          case 105:
            return T = E.replace("-items", ""), "-webkit-" + E + "-webkit-box-" + T + "-ms-flex-" + T + E;
          case 115:
            return "-webkit-" + E + "-ms-flex-item-" + E.replace(P, "") + E;
          default:
            return "-webkit-" + E + "-ms-flex-line-pack" + E.replace("align-content", "").replace(P, "") + E;
        }
        break;
      case 973:
      case 989:
        if (E.charCodeAt(3) !== 45 || E.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (M.test(O) === !0) return (T = O.substring(O.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(O.replace("stretch", "fill-available"), A, D, j).replace(":fill-available", ":stretch") : E.replace(T, "-webkit-" + T) + E.replace(T, "-moz-" + T.replace("fill-", "")) + E;
        break;
      case 962:
        if (E = "-webkit-" + E + (E.charCodeAt(5) === 102 ? "-ms-" + E : "") + E, D + j === 211 && E.charCodeAt(13) === 105 && 0 < E.indexOf("transform", 10)) return E.substring(0, E.indexOf(";", 27) + 1).replace(v, "$1-webkit-$2") + E;
    }
    return E;
  }
  function i(O, A) {
    var D = O.indexOf(A === 1 ? ":" : "{"), j = O.substring(0, A !== 3 ? D : 10);
    return D = O.substring(D + 1, O.length - 1), z(A !== 2 ? j : j.replace(I, "$1"), D, A);
  }
  function l(O, A) {
    var D = o(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return D !== A + ";" ? D.replace(x, " or ($1)").substring(4) : "(" + A + ")";
  }
  function u(O, A, D, j, E, b, T, le, Q, Y) {
    for (var U = 0, we = A, Be; U < R; ++U)
      switch (Be = Le[U].call(f, O, we, D, j, E, b, T, le, Q, Y)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          we = Be;
      }
    if (we !== A) return we;
  }
  function s(O) {
    switch (O) {
      case void 0:
      case null:
        R = Le.length = 0;
        break;
      default:
        if (typeof O == "function") Le[R++] = O;
        else if (typeof O == "object") for (var A = 0, D = O.length; A < D; ++A)
          s(O[A]);
        else F = !!O | 0;
    }
    return s;
  }
  function a(O) {
    return O = O.prefix, O !== void 0 && (z = null, O ? typeof O != "function" ? Re = 1 : (Re = 2, z = O) : Re = 0), a;
  }
  function f(O, A) {
    var D = O;
    if (33 > D.charCodeAt(0) && (D = D.trim()), J = D, D = [J], 0 < R) {
      var j = u(-1, A, D, D, ye, de, 0, 0, 0, 0);
      j !== void 0 && typeof j == "string" && (A = j);
    }
    var E = t(Nt, D, A, 0, 0);
    return 0 < R && (j = u(-2, E, D, D, ye, de, E.length, 0, 0, 0), j !== void 0 && (E = j)), J = "", Ke = 0, de = ye = 1, E;
  }
  var m = /^\0+/g, p = /[\0\r\f]/g, w = /: */g, g = /zoo|gra/, v = /([,: ])(transform)/g, S = /,\r+?/g, d = /([\t\r\n ])*\f?&/g, c = /@(k\w+)\s*(\S*)\s*/, h = /::(place)/g, y = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, _ = /\(\s*(.*)\s*\)/g, x = /([\s\S]*?);/g, P = /-self|flex-/g, I = /[^]*?(:[rp][el]a[\w-]+)[^]*/, M = /stretch|:\s*\w+\-(?:conte|avail)/, ce = /([^-])(image-set\()/, de = 1, ye = 1, Ke = 0, Re = 1, Nt = [], Le = [], R = 0, z = null, F = 0, J = "";
  return f.use = s, f.set = a, e !== void 0 && a(e), f;
}
var Y0 = {
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
function G0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var X0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Nf = /* @__PURE__ */ G0(
  function(e) {
    return X0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Qh = { exports: {} }, Z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge = typeof Symbol == "function" && Symbol.for, ba = ge ? Symbol.for("react.element") : 60103, Va = ge ? Symbol.for("react.portal") : 60106, Pl = ge ? Symbol.for("react.fragment") : 60107, Nl = ge ? Symbol.for("react.strict_mode") : 60108, Rl = ge ? Symbol.for("react.profiler") : 60114, Tl = ge ? Symbol.for("react.provider") : 60109, Ol = ge ? Symbol.for("react.context") : 60110, Ha = ge ? Symbol.for("react.async_mode") : 60111, Al = ge ? Symbol.for("react.concurrent_mode") : 60111, Dl = ge ? Symbol.for("react.forward_ref") : 60112, $l = ge ? Symbol.for("react.suspense") : 60113, Z0 = ge ? Symbol.for("react.suspense_list") : 60120, Ll = ge ? Symbol.for("react.memo") : 60115, Ml = ge ? Symbol.for("react.lazy") : 60116, J0 = ge ? Symbol.for("react.block") : 60121, q0 = ge ? Symbol.for("react.fundamental") : 60117, e1 = ge ? Symbol.for("react.responder") : 60118, t1 = ge ? Symbol.for("react.scope") : 60119;
function nt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ba:
        switch (e = e.type, e) {
          case Ha:
          case Al:
          case Pl:
          case Rl:
          case Nl:
          case $l:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ol:
              case Dl:
              case Ml:
              case Ll:
              case Tl:
                return e;
              default:
                return t;
            }
        }
      case Va:
        return t;
    }
  }
}
function Kh(e) {
  return nt(e) === Al;
}
Z.AsyncMode = Ha;
Z.ConcurrentMode = Al;
Z.ContextConsumer = Ol;
Z.ContextProvider = Tl;
Z.Element = ba;
Z.ForwardRef = Dl;
Z.Fragment = Pl;
Z.Lazy = Ml;
Z.Memo = Ll;
Z.Portal = Va;
Z.Profiler = Rl;
Z.StrictMode = Nl;
Z.Suspense = $l;
Z.isAsyncMode = function(e) {
  return Kh(e) || nt(e) === Ha;
};
Z.isConcurrentMode = Kh;
Z.isContextConsumer = function(e) {
  return nt(e) === Ol;
};
Z.isContextProvider = function(e) {
  return nt(e) === Tl;
};
Z.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ba;
};
Z.isForwardRef = function(e) {
  return nt(e) === Dl;
};
Z.isFragment = function(e) {
  return nt(e) === Pl;
};
Z.isLazy = function(e) {
  return nt(e) === Ml;
};
Z.isMemo = function(e) {
  return nt(e) === Ll;
};
Z.isPortal = function(e) {
  return nt(e) === Va;
};
Z.isProfiler = function(e) {
  return nt(e) === Rl;
};
Z.isStrictMode = function(e) {
  return nt(e) === Nl;
};
Z.isSuspense = function(e) {
  return nt(e) === $l;
};
Z.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Pl || e === Al || e === Rl || e === Nl || e === $l || e === Z0 || typeof e == "object" && e !== null && (e.$$typeof === Ml || e.$$typeof === Ll || e.$$typeof === Tl || e.$$typeof === Ol || e.$$typeof === Dl || e.$$typeof === q0 || e.$$typeof === e1 || e.$$typeof === t1 || e.$$typeof === J0);
};
Z.typeOf = nt;
Qh.exports = Z;
var n1 = Qh.exports, Qa = n1, r1 = {
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
}, o1 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, i1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Yh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ka = {};
Ka[Qa.ForwardRef] = i1;
Ka[Qa.Memo] = Yh;
function Rf(e) {
  return Qa.isMemo(e) ? Yh : Ka[e.$$typeof] || r1;
}
var l1 = Object.defineProperty, u1 = Object.getOwnPropertyNames, Tf = Object.getOwnPropertySymbols, s1 = Object.getOwnPropertyDescriptor, a1 = Object.getPrototypeOf, Of = Object.prototype;
function Gh(e, t, n) {
  if (typeof t != "string") {
    if (Of) {
      var r = a1(t);
      r && r !== Of && Gh(e, r, n);
    }
    var o = u1(t);
    Tf && (o = o.concat(Tf(t)));
    for (var i = Rf(e), l = Rf(t), u = 0; u < o.length; ++u) {
      var s = o[u];
      if (!o1[s] && !(n && n[s]) && !(l && l[s]) && !(i && i[s])) {
        var a = s1(t, s);
        try {
          l1(e, s, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var c1 = Gh;
const f1 = /* @__PURE__ */ zs(c1);
function Dt() {
  return (Dt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Af = function(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}, Os = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Hh.typeOf(e);
}, Hi = Object.freeze([]), ln = Object.freeze({});
function vo(e) {
  return typeof e == "function";
}
function Df(e) {
  return e.displayName || e.name || "Component";
}
function Ya(e) {
  return e && typeof e.styledComponentId == "string";
}
var vr = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ga = typeof window < "u" && "HTMLElement" in window, d1 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY));
function No(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
}
var p1 = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(n) {
    for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
    return r;
  }, t.insertRules = function(n, r) {
    if (n >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, l = i; n >= l; ) (l <<= 1) < 0 && No(16, "" + n);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(o), this.length = l;
      for (var u = i; u < l; u++) this.groupSizes[u] = 0;
    }
    for (var s = this.indexOfGroup(n + 1), a = 0, f = r.length; a < f; a++) this.tag.insertRule(s, r[a]) && (this.groupSizes[n]++, s++);
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
}(), di = /* @__PURE__ */ new Map(), Qi = /* @__PURE__ */ new Map(), Kr = 1, Ko = function(e) {
  if (di.has(e)) return di.get(e);
  for (; Qi.has(Kr); ) Kr++;
  var t = Kr++;
  return di.set(e, t), Qi.set(t, e), t;
}, h1 = function(e) {
  return Qi.get(e);
}, m1 = function(e, t) {
  t >= Kr && (Kr = t + 1), di.set(e, t), Qi.set(t, e);
}, v1 = "style[" + vr + '][data-styled-version="5.3.11"]', g1 = new RegExp("^" + vr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), y1 = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, l = o.length; i < l; i++) (r = o[i]) && e.registerName(t, r);
}, w1 = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = n.length; o < i; o++) {
    var l = n[o].trim();
    if (l) {
      var u = l.match(g1);
      if (u) {
        var s = 0 | parseInt(u[1], 10), a = u[2];
        s !== 0 && (m1(a, s), y1(e, a, u[3]), e.getTag().insertRules(s, r)), r.length = 0;
      } else r.push(l);
    }
  }
}, S1 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Xh = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(u) {
    for (var s = u.childNodes, a = s.length; a >= 0; a--) {
      var f = s[a];
      if (f && f.nodeType === 1 && f.hasAttribute(vr)) return f;
    }
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(vr, "active"), r.setAttribute("data-styled-version", "5.3.11");
  var l = S1();
  return l && r.setAttribute("nonce", l), n.insertBefore(r, i), r;
}, k1 = function() {
  function e(n) {
    var r = this.element = Xh(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var i = document.styleSheets, l = 0, u = i.length; l < u; l++) {
        var s = i[l];
        if (s.ownerNode === o) return s;
      }
      No(17);
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
}(), E1 = function() {
  function e(n) {
    var r = this.element = Xh(n);
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
}(), C1 = function() {
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
}(), $f = Ga, x1 = { isServer: !Ga, useCSSOMInjection: !d1 }, Zh = function() {
  function e(n, r, o) {
    n === void 0 && (n = ln), r === void 0 && (r = {}), this.options = Dt({}, x1, {}, n), this.gs = r, this.names = new Map(o), this.server = !!n.isServer, !this.server && Ga && $f && ($f = !1, function(i) {
      for (var l = document.querySelectorAll(v1), u = 0, s = l.length; u < s; u++) {
        var a = l[u];
        a && a.getAttribute(vr) !== "active" && (w1(i, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(n) {
    return Ko(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(Dt({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, l = r.target, n = o ? new C1(l) : i ? new k1(l) : new E1(l), new p1(n)));
    var n, r, o, i, l;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (Ko(n), this.names.has(n)) this.names.get(n).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(n, o);
    }
  }, t.insertRules = function(n, r, o) {
    this.registerName(n, r), this.getTag().insertRules(Ko(n), o);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(Ko(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), o = r.length, i = "", l = 0; l < o; l++) {
        var u = h1(l);
        if (u !== void 0) {
          var s = n.names.get(u), a = r.getGroup(l);
          if (s && a && s.size) {
            var f = vr + ".g" + l + '[id="' + u + '"]', m = "";
            s !== void 0 && s.forEach(function(p) {
              p.length > 0 && (m += p + ",");
            }), i += "" + a + f + '{content:"' + m + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), _1 = /(a)(d)/gi, Lf = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function As(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Lf(t % 52) + n;
  return (Lf(t % 52) + n).replace(_1, "$1-$2");
}
var er = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Jh = function(e) {
  return er(5381, e);
};
function P1(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (vo(n) && !Ya(n)) return !1;
  }
  return !0;
}
var N1 = Jh("5.3.11"), R1 = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && P1(t), this.componentId = n, this.baseHash = er(N1, n), this.baseStyle = r, Zh.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var l = gr(this.rules, t, n, r).join(""), u = As(er(this.baseHash, l) >>> 0);
      if (!n.hasNameForId(o, u)) {
        var s = r(l, "." + u, void 0, o);
        n.insertRules(o, u, s);
      }
      i.push(u), this.staticRulesId = u;
    }
    else {
      for (var a = this.rules.length, f = er(this.baseHash, r.hash), m = "", p = 0; p < a; p++) {
        var w = this.rules[p];
        if (typeof w == "string") m += w;
        else if (w) {
          var g = gr(w, t, n, r), v = Array.isArray(g) ? g.join("") : g;
          f = er(f, v + p), m += v;
        }
      }
      if (m) {
        var S = As(f >>> 0);
        if (!n.hasNameForId(o, S)) {
          var d = r(m, "." + S, void 0, o);
          n.insertRules(o, S, d);
        }
        i.push(S);
      }
    }
    return i.join(" ");
  }, e;
}(), T1 = /^\s*\/\/.*$/gm, O1 = [":", "[", ".", "#"];
function A1(e) {
  var t, n, r, o, i = ln, l = i.options, u = l === void 0 ? ln : l, s = i.plugins, a = s === void 0 ? Hi : s, f = new K0(u), m = [], p = /* @__PURE__ */ function(v) {
    function S(d) {
      if (d) try {
        v(d + "}");
      } catch {
      }
    }
    return function(d, c, h, y, C, _, x, P, I, M) {
      switch (d) {
        case 1:
          if (I === 0 && c.charCodeAt(0) === 64) return v(c + ";"), "";
          break;
        case 2:
          if (P === 0) return c + "/*|*/";
          break;
        case 3:
          switch (P) {
            case 102:
            case 112:
              return v(h[0] + c), "";
            default:
              return c + (M === 0 ? "/*|*/" : "");
          }
        case -2:
          c.split("/*|*/}").forEach(S);
      }
    };
  }(function(v) {
    m.push(v);
  }), w = function(v, S, d) {
    return S === 0 && O1.indexOf(d[n.length]) !== -1 || d.match(o) ? v : "." + t;
  };
  function g(v, S, d, c) {
    c === void 0 && (c = "&");
    var h = v.replace(T1, ""), y = S && d ? d + " " + S + " { " + h + " }" : h;
    return t = c, n = S, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), f(d || !S ? "" : S, y);
  }
  return f.use([].concat(a, [function(v, S, d) {
    v === 2 && d.length && d[0].lastIndexOf(n) > 0 && (d[0] = d[0].replace(r, w));
  }, p, function(v) {
    if (v === -2) {
      var S = m;
      return m = [], S;
    }
  }])), g.hash = a.length ? a.reduce(function(v, S) {
    return S.name || No(15), er(v, S.name);
  }, 5381).toString() : "", g;
}
var qh = sn.createContext();
qh.Consumer;
var em = sn.createContext(), D1 = (em.Consumer, new Zh()), Ds = A1();
function $1() {
  return k.useContext(qh) || D1;
}
function L1() {
  return k.useContext(em) || Ds;
}
var tm = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Ds);
      var l = r.name + i.hash;
      o.hasNameForId(r.id, l) || o.insertRules(r.id, l, i(r.rules, l, "@keyframes"));
    }, this.toString = function() {
      return No(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ds), this.name + t.hash;
  }, e;
}(), M1 = /([A-Z])/, I1 = /([A-Z])/g, z1 = /^ms-/, F1 = function(e) {
  return "-" + e.toLowerCase();
};
function Mf(e) {
  return M1.test(e) ? e.replace(I1, F1).replace(z1, "-ms-") : e;
}
var If = function(e) {
  return e == null || e === !1 || e === "";
};
function gr(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], l = 0, u = e.length; l < u; l += 1) (o = gr(e[l], t, n, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (If(e)) return "";
  if (Ya(e)) return "." + e.styledComponentId;
  if (vo(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !t) return e;
    var s = e(t);
    return gr(s, t, n, r);
  }
  var a;
  return e instanceof tm ? n ? (e.inject(n, r), e.getName(r)) : e : Os(e) ? function f(m, p) {
    var w, g, v = [];
    for (var S in m) m.hasOwnProperty(S) && !If(m[S]) && (Array.isArray(m[S]) && m[S].isCss || vo(m[S]) ? v.push(Mf(S) + ":", m[S], ";") : Os(m[S]) ? v.push.apply(v, f(m[S], S)) : v.push(Mf(S) + ": " + (w = S, (g = m[S]) == null || typeof g == "boolean" || g === "" ? "" : typeof g != "number" || g === 0 || w in Y0 || w.startsWith("--") ? String(g).trim() : g + "px") + ";"));
    return p ? [p + " {"].concat(v, ["}"]) : v;
  }(e) : e.toString();
}
var zf = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function nm(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return vo(e) || Os(e) ? zf(gr(Af(Hi, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : zf(gr(Af(e, n)));
}
var j1 = function(e, t, n) {
  return n === void 0 && (n = ln), e.theme !== n.theme && e.theme || t || n.theme;
}, B1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, U1 = /(^-|-$)/g;
function gu(e) {
  return e.replace(B1, "-").replace(U1, "");
}
var rm = function(e) {
  return As(Jh(e) >>> 0);
};
function Yo(e) {
  return typeof e == "string" && !0;
}
var $s = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, W1 = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function b1(e, t, n) {
  var r = e[n];
  $s(t) && $s(r) ? om(r, t) : e[n] = t;
}
function om(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var l = i[o];
    if ($s(l)) for (var u in l) W1(u) && b1(e, l[u], u);
  }
  return e;
}
var im = sn.createContext();
im.Consumer;
var yu = {};
function lm(e, t, n) {
  var r = Ya(e), o = !Yo(e), i = t.attrs, l = i === void 0 ? Hi : i, u = t.componentId, s = u === void 0 ? function(c, h) {
    var y = typeof c != "string" ? "sc" : gu(c);
    yu[y] = (yu[y] || 0) + 1;
    var C = y + "-" + rm("5.3.11" + y + yu[y]);
    return h ? h + "-" + C : C;
  }(t.displayName, t.parentComponentId) : u, a = t.displayName, f = a === void 0 ? function(c) {
    return Yo(c) ? "styled." + c : "Styled(" + Df(c) + ")";
  }(e) : a, m = t.displayName && t.componentId ? gu(t.displayName) + "-" + t.componentId : t.componentId || s, p = r && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, w = t.shouldForwardProp;
  r && e.shouldForwardProp && (w = t.shouldForwardProp ? function(c, h, y) {
    return e.shouldForwardProp(c, h, y) && t.shouldForwardProp(c, h, y);
  } : e.shouldForwardProp);
  var g, v = new R1(n, m, r ? e.componentStyle : void 0), S = v.isStatic && l.length === 0, d = function(c, h) {
    return function(y, C, _, x) {
      var P = y.attrs, I = y.componentStyle, M = y.defaultProps, ce = y.foldedComponentIds, de = y.shouldForwardProp, ye = y.styledComponentId, Ke = y.target, Re = function(j, E, b) {
        j === void 0 && (j = ln);
        var T = Dt({}, E, { theme: j }), le = {};
        return b.forEach(function(Q) {
          var Y, U, we, Be = Q;
          for (Y in vo(Be) && (Be = Be(T)), Be) T[Y] = le[Y] = Y === "className" ? (U = le[Y], we = Be[Y], U && we ? U + " " + we : U || we) : Be[Y];
        }), [T, le];
      }(j1(C, k.useContext(im), M) || ln, C, P), Nt = Re[0], Le = Re[1], R = function(j, E, b, T) {
        var le = $1(), Q = L1(), Y = E ? j.generateAndInjectStyles(ln, le, Q) : j.generateAndInjectStyles(b, le, Q);
        return Y;
      }(I, x, Nt), z = _, F = Le.$as || C.$as || Le.as || C.as || Ke, J = Yo(F), O = Le !== C ? Dt({}, C, {}, Le) : C, A = {};
      for (var D in O) D[0] !== "$" && D !== "as" && (D === "forwardedAs" ? A.as = O[D] : (de ? de(D, Nf, F) : !J || Nf(D)) && (A[D] = O[D]));
      return C.style && Le.style !== C.style && (A.style = Dt({}, C.style, {}, Le.style)), A.className = Array.prototype.concat(ce, ye, R !== ye ? R : null, C.className, Le.className).filter(Boolean).join(" "), A.ref = z, k.createElement(F, A);
    }(g, c, h, S);
  };
  return d.displayName = f, (g = sn.forwardRef(d)).attrs = p, g.componentStyle = v, g.displayName = f, g.shouldForwardProp = w, g.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Hi, g.styledComponentId = m, g.target = r ? e.target : e, g.withComponent = function(c) {
    var h = t.componentId, y = function(_, x) {
      if (_ == null) return {};
      var P, I, M = {}, ce = Object.keys(_);
      for (I = 0; I < ce.length; I++) P = ce[I], x.indexOf(P) >= 0 || (M[P] = _[P]);
      return M;
    }(t, ["componentId"]), C = h && h + "-" + (Yo(c) ? c : gu(Df(c)));
    return lm(c, Dt({}, y, { attrs: p, componentId: C }), n);
  }, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(c) {
    this._foldedDefaultProps = r ? om({}, e.defaultProps, c) : c;
  } }), Object.defineProperty(g, "toString", { value: function() {
    return "." + g.styledComponentId;
  } }), o && f1(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), g;
}
var at = function(e) {
  return function t(n, r, o) {
    if (o === void 0 && (o = ln), !Hh.isValidElementType(r)) return No(1, String(r));
    var i = function() {
      return n(r, o, nm.apply(void 0, arguments));
    };
    return i.withConfig = function(l) {
      return t(n, r, Dt({}, o, {}, l));
    }, i.attrs = function(l) {
      return t(n, r, Dt({}, o, { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
    }, i;
  }(lm, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  at[e] = at(e);
});
function vk(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var o = nm.apply(void 0, [e].concat(n)).join(""), i = rm(o);
  return new tm(i, o);
}
const V1 = k.createContext(null), wu = {
  didCatch: !1,
  error: null
};
class H1 extends k.Component {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = wu;
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
      }), this.setState(wu);
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
    if (r && n.error !== null && Q1(t.resetKeys, o)) {
      var i, l;
      (i = (l = this.props).onReset) === null || i === void 0 || i.call(l, {
        next: o,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState(wu);
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
        u = k.createElement(r, s);
      else if (o === null || k.isValidElement(o))
        u = o;
      else
        throw l;
    }
    return k.createElement(V1.Provider, {
      value: {
        didCatch: i,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, u);
  }
}
function Q1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((n, r) => !Object.is(n, t[r]));
}
const K1 = [
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
], _e = {
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
function Y1() {
  const e = B0((t) => t.theme);
  return /* @__PURE__ */ L.jsxs("style", { children: [
    X1(e.theme),
    G1()
  ] });
}
function G1() {
  return `
  body {
    padding: 0;
    margin: 0;
    background-color: var(--xliic-background);
    color: var(--xliic-foreground);
    }`;
}
function X1(e) {
  const t = [];
  if (e !== void 0)
    for (const n of K1)
      e[n] && t.push(`${_e[n]}: ${e[n]};`);
  return `:root {
    ${t.join(`
`)}
  }`;
}
const um = sn.createContext([
  {
    id: "starting",
    title: "Starting",
    element: sn.createElement("div", {}, "Empty starting route")
  }
]);
function sm(e, t) {
  if (t.length === 0)
    return;
  const [n, ...r] = t;
  for (const o of e)
    if (o.id === n)
      return r.length === 0 ? o : o.children ? sm(o.children, r) : void 0;
}
function Z1() {
  return /* @__PURE__ */ L.jsx(um.Consumer, { children: (e) => /* @__PURE__ */ L.jsx(J1, { routes: e }) });
}
function J1({ routes: e }) {
  const t = Wh((r) => r.router.current), n = sm(e, t);
  return !n || n.link ? /* @__PURE__ */ L.jsx("div", {}) : n.element;
}
function q1() {
  return /* @__PURE__ */ L.jsx(um.Consumer, { children: (e) => /* @__PURE__ */ L.jsx(ew, { routes: e }) });
}
function ew({ routes: e }) {
  var u;
  const t = V0(), r = Wh((s) => s.router.current).slice(0, 2), o = r.slice(0, 1), i = r.length > 1 ? (u = e.find((s) => s.id === r[0])) == null ? void 0 : u.children : e, l = i == null ? void 0 : i.find((s) => s.id === r[r.length - 1]);
  return i ? (l == null ? void 0 : l.navigation) === !1 ? l.title !== "" ? /* @__PURE__ */ L.jsx(nw, { children: /* @__PURE__ */ L.jsx(ow, { children: l.title }) }) : null : /* @__PURE__ */ L.jsx(tw, { children: i.map(({ id: s, title: a, link: f }) => /* @__PURE__ */ L.jsx(
    rw,
    {
      active: s === r[r.length - 1],
      onClick: () => {
        t(f ? b0(f) : W0([...o, s]));
      },
      children: typeof a == "string" ? /* @__PURE__ */ L.jsx("div", { children: a }) : a
    },
    s
  )) }) : null;
}
const tw = at.nav`
  height: 28px;
  display: flex;
  padding: 0px 16px;
  padding-top: 6px;
  justify-content: space-between;
  font-size: 14px;
  border-bottom: 1px solid var(${_e.border});
`, nw = at.div`
  height: 35px;
  display: flex;
  padding: 0px 16px;
  border-bottom: 1px solid var(${_e.border});
`, rw = at.div`
  padding: 0 1em;
  display: flex;
  align-items: center;
  ${(e) => e.active ? `border-bottom: 3px solid var(${_e.buttonBackground});` : "opacity: 0.7; border-bottom: 3px solid transparent; cursor: pointer;"};
  > div {
    border: ${(e) => e.active && _e.contrastActiveBorder ? `1px solid var(${_e.contrastActiveBorder})` : "none"};
  }
`, ow = at.div`
  place-self: center;
  font-size: 16px;
  font-weight: 500;
  display: flex;
`;
function un(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function iw(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function am(...e) {
  return (t) => e.forEach((n) => iw(n, t));
}
function zn(...e) {
  return k.useCallback(am(...e), e);
}
function lw(e, t) {
  const n = k.createContext(t);
  function r(i) {
    const { children: l, ...u } = i, s = k.useMemo(() => u, Object.values(u));
    return /* @__PURE__ */ L.jsx(n.Provider, { value: s, children: l });
  }
  function o(i) {
    const l = k.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [r, o];
}
function uw(e, t = []) {
  let n = [];
  function r(i, l) {
    const u = k.createContext(l), s = n.length;
    n = [...n, l];
    function a(m) {
      const { scope: p, children: w, ...g } = m, v = (p == null ? void 0 : p[e][s]) || u, S = k.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ L.jsx(v.Provider, { value: S, children: w });
    }
    function f(m, p) {
      const w = (p == null ? void 0 : p[e][s]) || u, g = k.useContext(w);
      if (g) return g;
      if (l !== void 0) return l;
      throw new Error(`\`${m}\` must be used within \`${i}\``);
    }
    return a.displayName = i + "Provider", [a, f];
  }
  const o = () => {
    const i = n.map((l) => k.createContext(l));
    return function(u) {
      const s = (u == null ? void 0 : u[e]) || i;
      return k.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: s } }),
        [u, s]
      );
    };
  };
  return o.scopeName = e, [r, sw(o, ...t)];
}
function sw(...e) {
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
      return k.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Ki = globalThis != null && globalThis.document ? k.useLayoutEffect : () => {
}, aw = Ru.useId || (() => {
}), cw = 0;
function Su(e) {
  const [t, n] = k.useState(aw());
  return Ki(() => {
    n((r) => r ?? String(cw++));
  }, [e]), t ? `radix-${t}` : "";
}
function $n(e) {
  const t = k.useRef(e);
  return k.useEffect(() => {
    t.current = e;
  }), k.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function fw({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = dw({ defaultProp: t, onChange: n }), i = e !== void 0, l = i ? e : r, u = $n(n), s = k.useCallback(
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
function dw({
  defaultProp: e,
  onChange: t
}) {
  const n = k.useState(e), [r] = n, o = k.useRef(r), i = $n(t);
  return k.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
var Xa = k.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = k.Children.toArray(n), i = o.find(hw);
  if (i) {
    const l = i.props.children, u = o.map((s) => s === i ? k.Children.count(l) > 1 ? k.Children.only(null) : k.isValidElement(l) ? l.props.children : null : s);
    return /* @__PURE__ */ L.jsx(Ls, { ...r, ref: t, children: k.isValidElement(l) ? k.cloneElement(l, void 0, u) : null });
  }
  return /* @__PURE__ */ L.jsx(Ls, { ...r, ref: t, children: n });
});
Xa.displayName = "Slot";
var Ls = k.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (k.isValidElement(n)) {
    const o = vw(n);
    return k.cloneElement(n, {
      ...mw(r, n.props),
      // @ts-ignore
      ref: t ? am(t, o) : o
    });
  }
  return k.Children.count(n) > 1 ? k.Children.only(null) : null;
});
Ls.displayName = "SlotClone";
var pw = ({ children: e }) => /* @__PURE__ */ L.jsx(L.Fragment, { children: e });
function hw(e) {
  return k.isValidElement(e) && e.type === pw;
}
function mw(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...u) => {
      i(...u), o(...u);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function vw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var gw = [
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
], Ut = gw.reduce((e, t) => {
  const n = k.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, u = i ? Xa : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ L.jsx(u, { ...l, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function yw(e, t) {
  e && fl.flushSync(() => e.dispatchEvent(t));
}
function ww(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = $n(e);
  k.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Sw = "DismissableLayer", Ms = "dismissableLayer.update", kw = "dismissableLayer.pointerDownOutside", Ew = "dismissableLayer.focusOutside", Ff, cm = k.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), fm = k.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: l,
      onDismiss: u,
      ...s
    } = e, a = k.useContext(cm), [f, m] = k.useState(null), p = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = k.useState({}), g = zn(t, (x) => m(x)), v = Array.from(a.layers), [S] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1), d = v.indexOf(S), c = f ? v.indexOf(f) : -1, h = a.layersWithOutsidePointerEventsDisabled.size > 0, y = c >= d, C = _w((x) => {
      const P = x.target, I = [...a.branches].some((M) => M.contains(P));
      !y || I || (o == null || o(x), l == null || l(x), x.defaultPrevented || u == null || u());
    }, p), _ = Pw((x) => {
      const P = x.target;
      [...a.branches].some((M) => M.contains(P)) || (i == null || i(x), l == null || l(x), x.defaultPrevented || u == null || u());
    }, p);
    return ww((x) => {
      c === a.layers.size - 1 && (r == null || r(x), !x.defaultPrevented && u && (x.preventDefault(), u()));
    }, p), k.useEffect(() => {
      if (f)
        return n && (a.layersWithOutsidePointerEventsDisabled.size === 0 && (Ff = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), a.layersWithOutsidePointerEventsDisabled.add(f)), a.layers.add(f), jf(), () => {
          n && a.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Ff);
        };
    }, [f, p, n, a]), k.useEffect(() => () => {
      f && (a.layers.delete(f), a.layersWithOutsidePointerEventsDisabled.delete(f), jf());
    }, [f, a]), k.useEffect(() => {
      const x = () => w({});
      return document.addEventListener(Ms, x), () => document.removeEventListener(Ms, x);
    }, []), /* @__PURE__ */ L.jsx(
      Ut.div,
      {
        ...s,
        ref: g,
        style: {
          pointerEvents: h ? y ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: un(e.onFocusCapture, _.onFocusCapture),
        onBlurCapture: un(e.onBlurCapture, _.onBlurCapture),
        onPointerDownCapture: un(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
fm.displayName = Sw;
var Cw = "DismissableLayerBranch", xw = k.forwardRef((e, t) => {
  const n = k.useContext(cm), r = k.useRef(null), o = zn(t, r);
  return k.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ L.jsx(Ut.div, { ...e, ref: o });
});
xw.displayName = Cw;
function _w(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = $n(e), r = k.useRef(!1), o = k.useRef(() => {
  });
  return k.useEffect(() => {
    const i = (u) => {
      if (u.target && !r.current) {
        let s = function() {
          dm(
            kw,
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
function Pw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = $n(e), r = k.useRef(!1);
  return k.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && dm(Ew, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function jf() {
  const e = new CustomEvent(Ms);
  document.dispatchEvent(e);
}
function dm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? yw(o, i) : o.dispatchEvent(i);
}
var ku = "focusScope.autoFocusOnMount", Eu = "focusScope.autoFocusOnUnmount", Bf = { bubbles: !1, cancelable: !0 }, Nw = "FocusScope", pm = k.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...l
  } = e, [u, s] = k.useState(null), a = $n(o), f = $n(i), m = k.useRef(null), p = zn(t, (v) => s(v)), w = k.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  k.useEffect(() => {
    if (r) {
      let v = function(h) {
        if (w.paused || !u) return;
        const y = h.target;
        u.contains(y) ? m.current = y : Vt(m.current, { select: !0 });
      }, S = function(h) {
        if (w.paused || !u) return;
        const y = h.relatedTarget;
        y !== null && (u.contains(y) || Vt(m.current, { select: !0 }));
      }, d = function(h) {
        if (document.activeElement === document.body)
          for (const C of h)
            C.removedNodes.length > 0 && Vt(u);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", S);
      const c = new MutationObserver(d);
      return u && c.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", S), c.disconnect();
      };
    }
  }, [r, u, w.paused]), k.useEffect(() => {
    if (u) {
      Wf.add(w);
      const v = document.activeElement;
      if (!u.contains(v)) {
        const d = new CustomEvent(ku, Bf);
        u.addEventListener(ku, a), u.dispatchEvent(d), d.defaultPrevented || (Rw($w(hm(u)), { select: !0 }), document.activeElement === v && Vt(u));
      }
      return () => {
        u.removeEventListener(ku, a), setTimeout(() => {
          const d = new CustomEvent(Eu, Bf);
          u.addEventListener(Eu, f), u.dispatchEvent(d), d.defaultPrevented || Vt(v ?? document.body, { select: !0 }), u.removeEventListener(Eu, f), Wf.remove(w);
        }, 0);
      };
    }
  }, [u, a, f, w]);
  const g = k.useCallback(
    (v) => {
      if (!n && !r || w.paused) return;
      const S = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, d = document.activeElement;
      if (S && d) {
        const c = v.currentTarget, [h, y] = Tw(c);
        h && y ? !v.shiftKey && d === y ? (v.preventDefault(), n && Vt(h, { select: !0 })) : v.shiftKey && d === h && (v.preventDefault(), n && Vt(y, { select: !0 })) : d === c && v.preventDefault();
      }
    },
    [n, r, w.paused]
  );
  return /* @__PURE__ */ L.jsx(Ut.div, { tabIndex: -1, ...l, ref: p, onKeyDown: g });
});
pm.displayName = Nw;
function Rw(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Vt(r, { select: t }), document.activeElement !== n) return;
}
function Tw(e) {
  const t = hm(e), n = Uf(t, e), r = Uf(t.reverse(), e);
  return [n, r];
}
function hm(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Uf(e, t) {
  for (const n of e)
    if (!Ow(n, { upTo: t })) return n;
}
function Ow(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Aw(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Vt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Aw(e) && t && e.select();
  }
}
var Wf = Dw();
function Dw() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = bf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = bf(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function bf(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function $w(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Lw = "Portal", mm = k.forwardRef((e, t) => {
  var u;
  const { container: n, ...r } = e, [o, i] = k.useState(!1);
  Ki(() => i(!0), []);
  const l = n || o && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? vy.createPortal(/* @__PURE__ */ L.jsx(Ut.div, { ...r, ref: t }), l) : null;
});
mm.displayName = Lw;
function Mw(e, t) {
  return k.useReducer((n, r) => t[n][r] ?? n, e);
}
var Il = (e) => {
  const { present: t, children: n } = e, r = Iw(t), o = typeof n == "function" ? n({ present: r.isPresent }) : k.Children.only(n), i = zn(r.ref, zw(o));
  return typeof n == "function" || r.isPresent ? k.cloneElement(o, { ref: i }) : null;
};
Il.displayName = "Presence";
function Iw(e) {
  const [t, n] = k.useState(), r = k.useRef({}), o = k.useRef(e), i = k.useRef("none"), l = e ? "mounted" : "unmounted", [u, s] = Mw(l, {
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
  return k.useEffect(() => {
    const a = Go(r.current);
    i.current = u === "mounted" ? a : "none";
  }, [u]), Ki(() => {
    const a = r.current, f = o.current;
    if (f !== e) {
      const p = i.current, w = Go(a);
      e ? s("MOUNT") : w === "none" || (a == null ? void 0 : a.display) === "none" ? s("UNMOUNT") : s(f && p !== w ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, s]), Ki(() => {
    if (t) {
      const a = (m) => {
        const w = Go(r.current).includes(m.animationName);
        m.target === t && w && fl.flushSync(() => s("ANIMATION_END"));
      }, f = (m) => {
        m.target === t && (i.current = Go(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
        t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a);
      };
    } else
      s("ANIMATION_END");
  }, [t, s]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: k.useCallback((a) => {
      a && (r.current = getComputedStyle(a)), n(a);
    }, [])
  };
}
function Go(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function zw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Cu = 0;
function Fw() {
  k.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Vf()), document.body.insertAdjacentElement("beforeend", e[1] ?? Vf()), Cu++, () => {
      Cu === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Cu--;
    };
  }, []);
}
function Vf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Ct = function() {
  return Ct = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ct.apply(this, arguments);
};
function vm(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function jw(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var pi = "right-scroll-bar-position", hi = "width-before-scroll-bar", Bw = "with-scroll-bars-hidden", Uw = "--removed-body-scroll-bar-size";
function xu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ww(e, t) {
  var n = k.useState(function() {
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
var bw = typeof window < "u" ? k.useLayoutEffect : k.useEffect, Hf = /* @__PURE__ */ new WeakMap();
function Vw(e, t) {
  var n = Ww(null, function(r) {
    return e.forEach(function(o) {
      return xu(o, r);
    });
  });
  return bw(function() {
    var r = Hf.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), l = n.current;
      o.forEach(function(u) {
        i.has(u) || xu(u, null);
      }), i.forEach(function(u) {
        o.has(u) || xu(u, l);
      });
    }
    Hf.set(n, e);
  }, [e]), n;
}
function Hw(e) {
  return e;
}
function Qw(e, t) {
  t === void 0 && (t = Hw);
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
        var f = l;
        l = [], f.forEach(i);
      }, a = function() {
        return Promise.resolve().then(s);
      };
      a(), n = {
        push: function(f) {
          l.push(f), a();
        },
        filter: function(f) {
          return l = l.filter(f), n;
        }
      };
    }
  };
  return o;
}
function Kw(e) {
  e === void 0 && (e = {});
  var t = Qw(null);
  return t.options = Ct({ async: !0, ssr: !1 }, e), t;
}
var gm = function(e) {
  var t = e.sideCar, n = vm(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return k.createElement(r, Ct({}, n));
};
gm.isSideCarExport = !0;
function Yw(e, t) {
  return e.useMedium(t), gm;
}
var ym = Kw(), _u = function() {
}, zl = k.forwardRef(function(e, t) {
  var n = k.useRef(null), r = k.useState({
    onScrollCapture: _u,
    onWheelCapture: _u,
    onTouchMoveCapture: _u
  }), o = r[0], i = r[1], l = e.forwardProps, u = e.children, s = e.className, a = e.removeScrollBar, f = e.enabled, m = e.shards, p = e.sideCar, w = e.noIsolation, g = e.inert, v = e.allowPinchZoom, S = e.as, d = S === void 0 ? "div" : S, c = e.gapMode, h = vm(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), y = p, C = Vw([n, t]), _ = Ct(Ct({}, h), o);
  return k.createElement(
    k.Fragment,
    null,
    f && k.createElement(y, { sideCar: ym, removeScrollBar: a, shards: m, noIsolation: w, inert: g, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: c }),
    l ? k.cloneElement(k.Children.only(u), Ct(Ct({}, _), { ref: C })) : k.createElement(d, Ct({}, _, { className: s, ref: C }), u)
  );
});
zl.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
zl.classNames = {
  fullWidth: hi,
  zeroRight: pi
};
var Gw = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Xw() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Gw();
  return t && e.setAttribute("nonce", t), e;
}
function Zw(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Jw(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var qw = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Xw()) && (Zw(t, n), Jw(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, eS = function() {
  var e = qw();
  return function(t, n) {
    k.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, wm = function() {
  var e = eS(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, tS = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Pu = function(e) {
  return parseInt(e || "", 10) || 0;
}, nS = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Pu(n), Pu(r), Pu(o)];
}, rS = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return tS;
  var t = nS(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, oS = wm(), sr = "data-scroll-locked", iS = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Bw, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(u, "px ").concat(r, `;
  }
  body[`).concat(sr, `] {
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
  
  .`).concat(pi, ` {
    right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(hi, ` {
    margin-right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(pi, " .").concat(pi, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(hi, " .").concat(hi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(sr, `] {
    `).concat(Uw, ": ").concat(u, `px;
  }
`);
}, Qf = function() {
  var e = parseInt(document.body.getAttribute(sr) || "0", 10);
  return isFinite(e) ? e : 0;
}, lS = function() {
  k.useEffect(function() {
    return document.body.setAttribute(sr, (Qf() + 1).toString()), function() {
      var e = Qf() - 1;
      e <= 0 ? document.body.removeAttribute(sr) : document.body.setAttribute(sr, e.toString());
    };
  }, []);
}, uS = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  lS();
  var i = k.useMemo(function() {
    return rS(o);
  }, [o]);
  return k.createElement(oS, { styles: iS(i, !t, o, n ? "" : "!important") });
}, Is = !1;
if (typeof window < "u")
  try {
    var Xo = Object.defineProperty({}, "passive", {
      get: function() {
        return Is = !0, !0;
      }
    });
    window.addEventListener("test", Xo, Xo), window.removeEventListener("test", Xo, Xo);
  } catch {
    Is = !1;
  }
var jn = Is ? { passive: !1 } : !1, sS = function(e) {
  return e.tagName === "TEXTAREA";
}, Sm = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !sS(e) && n[t] === "visible")
  );
}, aS = function(e) {
  return Sm(e, "overflowY");
}, cS = function(e) {
  return Sm(e, "overflowX");
}, Kf = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = km(e, r);
    if (o) {
      var i = Em(e, r), l = i[1], u = i[2];
      if (l > u)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, fS = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, dS = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, km = function(e, t) {
  return e === "v" ? aS(t) : cS(t);
}, Em = function(e, t) {
  return e === "v" ? fS(t) : dS(t);
}, pS = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, hS = function(e, t, n, r, o) {
  var i = pS(e, window.getComputedStyle(t).direction), l = i * r, u = n.target, s = t.contains(u), a = !1, f = l > 0, m = 0, p = 0;
  do {
    var w = Em(e, u), g = w[0], v = w[1], S = w[2], d = v - S - i * g;
    (g || d) && km(e, u) && (m += d, p += g), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !s && u !== document.body || // self content
    s && (t.contains(u) || t === u)
  );
  return (f && (Math.abs(m) < 1 || !o) || !f && (Math.abs(p) < 1 || !o)) && (a = !0), a;
}, Zo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Yf = function(e) {
  return [e.deltaX, e.deltaY];
}, Gf = function(e) {
  return e && "current" in e ? e.current : e;
}, mS = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, vS = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, gS = 0, Bn = [];
function yS(e) {
  var t = k.useRef([]), n = k.useRef([0, 0]), r = k.useRef(), o = k.useState(gS++)[0], i = k.useState(wm)[0], l = k.useRef(e);
  k.useEffect(function() {
    l.current = e;
  }, [e]), k.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = jw([e.lockRef.current], (e.shards || []).map(Gf), !0).filter(Boolean);
      return v.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = k.useCallback(function(v, S) {
    if ("touches" in v && v.touches.length === 2)
      return !l.current.allowPinchZoom;
    var d = Zo(v), c = n.current, h = "deltaX" in v ? v.deltaX : c[0] - d[0], y = "deltaY" in v ? v.deltaY : c[1] - d[1], C, _ = v.target, x = Math.abs(h) > Math.abs(y) ? "h" : "v";
    if ("touches" in v && x === "h" && _.type === "range")
      return !1;
    var P = Kf(x, _);
    if (!P)
      return !0;
    if (P ? C = x : (C = x === "v" ? "h" : "v", P = Kf(x, _)), !P)
      return !1;
    if (!r.current && "changedTouches" in v && (h || y) && (r.current = C), !C)
      return !0;
    var I = r.current || C;
    return hS(I, S, v, I === "h" ? h : y, !0);
  }, []), s = k.useCallback(function(v) {
    var S = v;
    if (!(!Bn.length || Bn[Bn.length - 1] !== i)) {
      var d = "deltaY" in S ? Yf(S) : Zo(S), c = t.current.filter(function(C) {
        return C.name === S.type && (C.target === S.target || S.target === C.shadowParent) && mS(C.delta, d);
      })[0];
      if (c && c.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!c) {
        var h = (l.current.shards || []).map(Gf).filter(Boolean).filter(function(C) {
          return C.contains(S.target);
        }), y = h.length > 0 ? u(S, h[0]) : !l.current.noIsolation;
        y && S.cancelable && S.preventDefault();
      }
    }
  }, []), a = k.useCallback(function(v, S, d, c) {
    var h = { name: v, delta: S, target: d, should: c, shadowParent: wS(d) };
    t.current.push(h), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== h;
      });
    }, 1);
  }, []), f = k.useCallback(function(v) {
    n.current = Zo(v), r.current = void 0;
  }, []), m = k.useCallback(function(v) {
    a(v.type, Yf(v), v.target, u(v, e.lockRef.current));
  }, []), p = k.useCallback(function(v) {
    a(v.type, Zo(v), v.target, u(v, e.lockRef.current));
  }, []);
  k.useEffect(function() {
    return Bn.push(i), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", s, jn), document.addEventListener("touchmove", s, jn), document.addEventListener("touchstart", f, jn), function() {
      Bn = Bn.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", s, jn), document.removeEventListener("touchmove", s, jn), document.removeEventListener("touchstart", f, jn);
    };
  }, []);
  var w = e.removeScrollBar, g = e.inert;
  return k.createElement(
    k.Fragment,
    null,
    g ? k.createElement(i, { styles: vS(o) }) : null,
    w ? k.createElement(uS, { gapMode: e.gapMode }) : null
  );
}
function wS(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const SS = Yw(ym, yS);
var Cm = k.forwardRef(function(e, t) {
  return k.createElement(zl, Ct({}, e, { ref: t, sideCar: SS }));
});
Cm.classNames = zl.classNames;
var kS = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Un = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), qo = {}, Nu = 0, xm = function(e) {
  return e && (e.host || xm(e.parentNode));
}, ES = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = xm(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, CS = function(e, t, n, r) {
  var o = ES(t, Array.isArray(e) ? e : [e]);
  qo[n] || (qo[n] = /* @__PURE__ */ new WeakMap());
  var i = qo[n], l = [], u = /* @__PURE__ */ new Set(), s = new Set(o), a = function(m) {
    !m || u.has(m) || (u.add(m), a(m.parentNode));
  };
  o.forEach(a);
  var f = function(m) {
    !m || s.has(m) || Array.prototype.forEach.call(m.children, function(p) {
      if (u.has(p))
        f(p);
      else
        try {
          var w = p.getAttribute(r), g = w !== null && w !== "false", v = (Un.get(p) || 0) + 1, S = (i.get(p) || 0) + 1;
          Un.set(p, v), i.set(p, S), l.push(p), v === 1 && g && Jo.set(p, !0), S === 1 && p.setAttribute(n, "true"), g || p.setAttribute(r, "true");
        } catch (d) {
          console.error("aria-hidden: cannot operate on ", p, d);
        }
    });
  };
  return f(t), u.clear(), Nu++, function() {
    l.forEach(function(m) {
      var p = Un.get(m) - 1, w = i.get(m) - 1;
      Un.set(m, p), i.set(m, w), p || (Jo.has(m) || m.removeAttribute(r), Jo.delete(m)), w || m.removeAttribute(n);
    }), Nu--, Nu || (Un = /* @__PURE__ */ new WeakMap(), Un = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), qo = {});
  };
}, xS = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = kS(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), CS(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Za = "Dialog", [_m, gk] = uw(Za), [_S, wt] = _m(Za), Pm = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: l = !0
  } = e, u = k.useRef(null), s = k.useRef(null), [a = !1, f] = fw({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ L.jsx(
    _S,
    {
      scope: t,
      triggerRef: u,
      contentRef: s,
      contentId: Su(),
      titleId: Su(),
      descriptionId: Su(),
      open: a,
      onOpenChange: f,
      onOpenToggle: k.useCallback(() => f((m) => !m), [f]),
      modal: l,
      children: n
    }
  );
};
Pm.displayName = Za;
var Nm = "DialogTrigger", Rm = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = wt(Nm, n), i = zn(t, o.triggerRef);
    return /* @__PURE__ */ L.jsx(
      Ut.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ec(o.open),
        ...r,
        ref: i,
        onClick: un(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Rm.displayName = Nm;
var Ja = "DialogPortal", [PS, Tm] = _m(Ja, {
  forceMount: void 0
}), Om = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = wt(Ja, t);
  return /* @__PURE__ */ L.jsx(PS, { scope: t, forceMount: n, children: k.Children.map(r, (l) => /* @__PURE__ */ L.jsx(Il, { present: n || i.open, children: /* @__PURE__ */ L.jsx(mm, { asChild: !0, container: o, children: l }) })) });
};
Om.displayName = Ja;
var Yi = "DialogOverlay", Am = k.forwardRef(
  (e, t) => {
    const n = Tm(Yi, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = wt(Yi, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ L.jsx(Il, { present: r || i.open, children: /* @__PURE__ */ L.jsx(NS, { ...o, ref: t }) }) : null;
  }
);
Am.displayName = Yi;
var NS = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = wt(Yi, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ L.jsx(Cm, { as: Xa, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ L.jsx(
        Ut.div,
        {
          "data-state": ec(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Ln = "DialogContent", Dm = k.forwardRef(
  (e, t) => {
    const n = Tm(Ln, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = wt(Ln, e.__scopeDialog);
    return /* @__PURE__ */ L.jsx(Il, { present: r || i.open, children: i.modal ? /* @__PURE__ */ L.jsx(RS, { ...o, ref: t }) : /* @__PURE__ */ L.jsx(TS, { ...o, ref: t }) });
  }
);
Dm.displayName = Ln;
var RS = k.forwardRef(
  (e, t) => {
    const n = wt(Ln, e.__scopeDialog), r = k.useRef(null), o = zn(t, n.contentRef, r);
    return k.useEffect(() => {
      const i = r.current;
      if (i) return xS(i);
    }, []), /* @__PURE__ */ L.jsx(
      $m,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: un(e.onCloseAutoFocus, (i) => {
          var l;
          i.preventDefault(), (l = n.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: un(e.onPointerDownOutside, (i) => {
          const l = i.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || u) && i.preventDefault();
        }),
        onFocusOutside: un(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), TS = k.forwardRef(
  (e, t) => {
    const n = wt(Ln, e.__scopeDialog), r = k.useRef(!1), o = k.useRef(!1);
    return /* @__PURE__ */ L.jsx(
      $m,
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
), $m = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, u = wt(Ln, n), s = k.useRef(null), a = zn(t, s);
    return Fw(), /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
      /* @__PURE__ */ L.jsx(
        pm,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ L.jsx(
            fm,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": ec(u.open),
              ...l,
              ref: a,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
        /* @__PURE__ */ L.jsx(OS, { titleId: u.titleId }),
        /* @__PURE__ */ L.jsx(DS, { contentRef: s, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), qa = "DialogTitle", Lm = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = wt(qa, n);
    return /* @__PURE__ */ L.jsx(Ut.h2, { id: o.titleId, ...r, ref: t });
  }
);
Lm.displayName = qa;
var Mm = "DialogDescription", Im = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = wt(Mm, n);
    return /* @__PURE__ */ L.jsx(Ut.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Im.displayName = Mm;
var zm = "DialogClose", Fm = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = wt(zm, n);
    return /* @__PURE__ */ L.jsx(
      Ut.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: un(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Fm.displayName = zm;
function ec(e) {
  return e ? "open" : "closed";
}
var jm = "DialogTitleWarning", [yk, Bm] = lw(jm, {
  contentName: Ln,
  titleName: qa,
  docsSlug: "dialog"
}), OS = ({ titleId: e }) => {
  const t = Bm(jm), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return k.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, AS = "DialogDescriptionWarning", DS = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Bm(AS).contentName}}.`;
  return k.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, $S = Pm, wk = Rm, LS = Om, MS = Am, IS = Dm, zS = Lm, FS = Im, Sk = Fm;
const jS = at.button`
  cursor: pointer;
  background-color: var(${_e.buttonSecondaryBackground});
  color: var(${_e.buttonSecondaryForeground});
  border: 1px solid var(${_e.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    background-color: var(${_e.buttonSecondaryHoverBackground});
  }
`, BS = at.button`
  cursor: pointer;
  background-color: var(${_e.buttonBackground});
  color: var(${_e.buttonForeground});
  border: 1px solid var(${_e.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${_e.focusBorder});
  }
`, US = {
  open: !1,
  title: "",
  message: "",
  actions: []
}, Um = Fa({
  name: "confirmationDialog",
  initialState: US,
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
}), { requestConfirmation: kk, accept: WS, reject: bS } = Um.actions, VS = hh, HS = $a, Ek = Um.reducer;
function QS() {
  const e = VS(), t = () => e(WS()), n = () => e(bS()), { open: r, title: o, message: i } = HS((l) => l.confirmationDialog);
  return /* @__PURE__ */ L.jsx($S, { open: r, children: /* @__PURE__ */ L.jsxs(LS, { children: [
    /* @__PURE__ */ L.jsx(KS, {}),
    /* @__PURE__ */ L.jsxs(YS, { onEscapeKeyDown: n, children: [
      /* @__PURE__ */ L.jsx(zS, { children: o }),
      /* @__PURE__ */ L.jsx(FS, { children: i }),
      /* @__PURE__ */ L.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
        /* @__PURE__ */ L.jsx(jS, { onClick: n, children: "Cancel" }),
        /* @__PURE__ */ L.jsx(BS, { onClick: t, children: "Confirm" })
      ] })
    ] })
  ] }) });
}
const KS = at(MS)`
  background-color: var(${_e.computedTwo});
  position: fixed;
  inset: 0;
`, YS = at(IS)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  background-color: var(${_e.background});
  color: var(${_e.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;
function Ck(e, t) {
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
function xk(e) {
  const t = Object.keys(e);
  for (const n of t)
    e[n] ? (console.log("starting listener for: ", n), e[n]()) : console.log("skipping listener for: ", n);
}
function GS({ error: e }) {
  return /* @__PURE__ */ L.jsxs("div", { children: [
    /* @__PURE__ */ L.jsx("p", { children: "Unexpected error:" }),
    /* @__PURE__ */ L.jsx("pre", { children: e.message })
  ] });
}
function _k() {
  return /* @__PURE__ */ L.jsxs(H1, { FallbackComponent: GS, children: [
    /* @__PURE__ */ L.jsx(Y1, {}),
    /* @__PURE__ */ L.jsx(QS, {}),
    /* @__PURE__ */ L.jsx(XS, { children: /* @__PURE__ */ L.jsx(q1, {}) }),
    /* @__PURE__ */ L.jsx(ZS, { children: /* @__PURE__ */ L.jsx(Z1, {}) })
  ] });
}
const XS = at.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 35px;
`, ZS = at.div`
  position: fixed;
  top: 35px;
  left: 0;
  right: 0;
  bottom: 0;
`;
export {
  am as $,
  wk as A,
  BS as B,
  IS as C,
  LS as D,
  zS as E,
  FS as F,
  Sk as G,
  jS as H,
  fl as I,
  W0 as J,
  WS as K,
  ek as L,
  qS as M,
  kk as N,
  MS as O,
  nk as P,
  b0 as Q,
  sn as R,
  _k as S,
  _e as T,
  Il as U,
  zn as V,
  vk as W,
  xS as X,
  Fw as Y,
  pm as Z,
  fm as _,
  ak as a,
  Cm as a0,
  Xa as a1,
  yw as a2,
  mm as a3,
  fw as a4,
  Su as a5,
  Ru as a6,
  rk as a7,
  zy as a8,
  tk as a9,
  ze as aa,
  La as ab,
  Ct as ac,
  pw as ad,
  Ki as ae,
  Th as af,
  ck as ag,
  _h as ah,
  sk as ai,
  d0 as aj,
  p0 as ak,
  uk as al,
  Wy as am,
  ik as an,
  Pt as ao,
  lk as ap,
  Cf as aq,
  f0 as ar,
  Ns as as,
  Eh as at,
  jt as au,
  ok as av,
  vh as aw,
  h0 as ax,
  $a as b,
  Fa as c,
  fk as d,
  k as e,
  gy as f,
  um as g,
  Y1 as h,
  _o as i,
  L as j,
  Z1 as k,
  dk as l,
  Ck as m,
  zs as n,
  Lt as o,
  Ek as p,
  at as q,
  mk as r,
  xk as s,
  pk as t,
  hh as u,
  uw as v,
  Ut as w,
  un as x,
  $n as y,
  $S as z
};
