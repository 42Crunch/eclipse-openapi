var kh = Object.defineProperty;
var xh = (e, t, n) => t in e ? kh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var hr = (e, t, n) => xh(e, typeof t != "symbol" ? t + "" : t, n);
function Eh(e, t) {
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
var mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ri(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function V0(e) {
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
var ef = { exports: {} }, zi = {}, tf = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so = Symbol.for("react.element"), Ch = Symbol.for("react.portal"), _h = Symbol.for("react.fragment"), Ph = Symbol.for("react.strict_mode"), Nh = Symbol.for("react.profiler"), Ah = Symbol.for("react.provider"), Th = Symbol.for("react.context"), Oh = Symbol.for("react.forward_ref"), Rh = Symbol.for("react.suspense"), zh = Symbol.for("react.memo"), $h = Symbol.for("react.lazy"), ga = Symbol.iterator;
function Lh(e) {
  return e === null || typeof e != "object" ? null : (e = ga && e[ga] || e["@@iterator"], typeof e == "function" ? e : null);
}
var nf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, rf = Object.assign, of = {};
function fr(e, t, n) {
  this.props = e, this.context = t, this.refs = of, this.updater = n || nf;
}
fr.prototype.isReactComponent = {};
fr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
fr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lf() {
}
lf.prototype = fr.prototype;
function us(e, t, n) {
  this.props = e, this.context = t, this.refs = of, this.updater = n || nf;
}
var ss = us.prototype = new lf();
ss.constructor = us;
rf(ss, fr.prototype);
ss.isPureReactComponent = !0;
var va = Array.isArray, uf = Object.prototype.hasOwnProperty, as = { current: null }, sf = { key: !0, ref: !0, __self: !0, __source: !0 };
function af(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) uf.call(t, r) && !sf.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: so, type: e, key: i, ref: l, props: o, _owner: as.current };
}
function jh(e, t) {
  return { $$typeof: so, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function cs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === so;
}
function Dh(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var wa = /\/+/g;
function kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Dh("" + e.key) : t.toString(36);
}
function Bo(e, t, n, r, o) {
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
        case so:
        case Ch:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + kl(l, 0) : r, va(o) ? (n = "", e != null && (n = e.replace(wa, "$&/") + "/"), Bo(o, t, n, "", function(c) {
    return c;
  })) : o != null && (cs(o) && (o = jh(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(wa, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", va(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + kl(i, u);
    l += Bo(i, t, n, s, o);
  }
  else if (s = Lh(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + kl(i, u++), l += Bo(i, t, n, s, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function So(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Bo(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Fh(e) {
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
var Ie = { current: null }, Uo = { transition: null }, Mh = { ReactCurrentDispatcher: Ie, ReactCurrentBatchConfig: Uo, ReactCurrentOwner: as };
function cf() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = { map: So, forEach: function(e, t, n) {
  So(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return So(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return So(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!cs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Y.Component = fr;
Y.Fragment = _h;
Y.Profiler = Nh;
Y.PureComponent = us;
Y.StrictMode = Ph;
Y.Suspense = Rh;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mh;
Y.act = cf;
Y.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = rf({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = as.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) uf.call(t, s) && !sf.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: so, type: e.type, key: o, ref: i, props: r, _owner: l };
};
Y.createContext = function(e) {
  return e = { $$typeof: Th, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ah, _context: e }, e.Consumer = e;
};
Y.createElement = af;
Y.createFactory = function(e) {
  var t = af.bind(null, e);
  return t.type = e, t;
};
Y.createRef = function() {
  return { current: null };
};
Y.forwardRef = function(e) {
  return { $$typeof: Oh, render: e };
};
Y.isValidElement = cs;
Y.lazy = function(e) {
  return { $$typeof: $h, _payload: { _status: -1, _result: e }, _init: Fh };
};
Y.memo = function(e, t) {
  return { $$typeof: zh, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function(e) {
  var t = Uo.transition;
  Uo.transition = {};
  try {
    e();
  } finally {
    Uo.transition = t;
  }
};
Y.unstable_act = cf;
Y.useCallback = function(e, t) {
  return Ie.current.useCallback(e, t);
};
Y.useContext = function(e) {
  return Ie.current.useContext(e);
};
Y.useDebugValue = function() {
};
Y.useDeferredValue = function(e) {
  return Ie.current.useDeferredValue(e);
};
Y.useEffect = function(e, t) {
  return Ie.current.useEffect(e, t);
};
Y.useId = function() {
  return Ie.current.useId();
};
Y.useImperativeHandle = function(e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function(e, t) {
  return Ie.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function(e, t) {
  return Ie.current.useLayoutEffect(e, t);
};
Y.useMemo = function(e, t) {
  return Ie.current.useMemo(e, t);
};
Y.useReducer = function(e, t, n) {
  return Ie.current.useReducer(e, t, n);
};
Y.useRef = function(e) {
  return Ie.current.useRef(e);
};
Y.useState = function(e) {
  return Ie.current.useState(e);
};
Y.useSyncExternalStore = function(e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function() {
  return Ie.current.useTransition();
};
Y.version = "18.3.1";
tf.exports = Y;
var Ve = tf.exports;
const ln = /* @__PURE__ */ Ri(Ve), Sa = /* @__PURE__ */ Eh({
  __proto__: null,
  default: ln
}, [Ve]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ih = Ve, Bh = Symbol.for("react.element"), Uh = Symbol.for("react.fragment"), Hh = Object.prototype.hasOwnProperty, Vh = Ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Wh = { key: !0, ref: !0, __self: !0, __source: !0 };
function ff(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Hh.call(t, r) && !Wh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Bh, type: e, key: i, ref: l, props: o, _owner: Vh.current };
}
zi.Fragment = Uh;
zi.jsx = ff;
zi.jsxs = ff;
ef.exports = zi;
var me = ef.exports, df = { exports: {} }, tt = {}, pf = { exports: {} }, hf = {};
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
  function t($, I) {
    var B = $.length;
    $.push(I);
    e: for (; 0 < B; ) {
      var w = B - 1 >>> 1, g = $[w];
      if (0 < o(g, I)) $[w] = I, $[B] = g, B = w;
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var I = $[0], B = $.pop();
    if (B !== I) {
      $[0] = B;
      e: for (var w = 0, g = $.length, y = g >>> 1; w < y; ) {
        var C = 2 * (w + 1) - 1, R = $[C], k = C + 1, L = $[k];
        if (0 > o(R, B)) k < g && 0 > o(L, R) ? ($[w] = L, $[k] = B, w = k) : ($[w] = R, $[C] = B, w = C);
        else if (k < g && 0 > o(L, B)) $[w] = L, $[k] = B, w = k;
        else break e;
      }
    }
    return I;
  }
  function o($, I) {
    var B = $.sortIndex - I.sortIndex;
    return B !== 0 ? B : $.id - I.id;
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
  var s = [], c = [], p = 1, m = null, h = 3, x = !1, v = !1, E = !1, P = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f($) {
    for (var I = n(c); I !== null; ) {
      if (I.callback === null) r(c);
      else if (I.startTime <= $) r(c), I.sortIndex = I.expirationTime, t(s, I);
      else break;
      I = n(c);
    }
  }
  function S($) {
    if (E = !1, f($), !v) if (n(s) !== null) v = !0, ot(_);
    else {
      var I = n(c);
      I !== null && ge(S, I.startTime - $);
    }
  }
  function _($, I) {
    v = !1, E && (E = !1, d(T), T = -1), x = !0;
    var B = h;
    try {
      for (f(I), m = n(s); m !== null && (!(m.expirationTime > I) || $ && !pe()); ) {
        var w = m.callback;
        if (typeof w == "function") {
          m.callback = null, h = m.priorityLevel;
          var g = w(m.expirationTime <= I);
          I = e.unstable_now(), typeof g == "function" ? m.callback = g : m === n(s) && r(s), f(I);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var y = !0;
      else {
        var C = n(c);
        C !== null && ge(S, C.startTime - I), y = !1;
      }
      return y;
    } finally {
      m = null, h = B, x = !1;
    }
  }
  var A = !1, O = null, T = -1, U = 5, F = -1;
  function pe() {
    return !(e.unstable_now() - F < U);
  }
  function ie() {
    if (O !== null) {
      var $ = e.unstable_now();
      F = $;
      var I = !0;
      try {
        I = O(!0, $);
      } finally {
        I ? we() : (A = !1, O = null);
      }
    } else A = !1;
  }
  var we;
  if (typeof a == "function") we = function() {
    a(ie);
  };
  else if (typeof MessageChannel < "u") {
    var Oe = new MessageChannel(), se = Oe.port2;
    Oe.port1.onmessage = ie, we = function() {
      se.postMessage(null);
    };
  } else we = function() {
    P(ie, 0);
  };
  function ot($) {
    O = $, A || (A = !0, we());
  }
  function ge($, I) {
    T = P(function() {
      $(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null;
  }, e.unstable_continueExecution = function() {
    v || x || (v = !0, ot(_));
  }, e.unstable_forceFrameRate = function($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < $ ? Math.floor(1e3 / $) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function($) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = h;
    }
    var B = h;
    h = I;
    try {
      return $();
    } finally {
      h = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function($, I) {
    switch ($) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        $ = 3;
    }
    var B = h;
    h = $;
    try {
      return I();
    } finally {
      h = B;
    }
  }, e.unstable_scheduleCallback = function($, I, B) {
    var w = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? w + B : w) : B = w, $) {
      case 1:
        var g = -1;
        break;
      case 2:
        g = 250;
        break;
      case 5:
        g = 1073741823;
        break;
      case 4:
        g = 1e4;
        break;
      default:
        g = 5e3;
    }
    return g = B + g, $ = { id: p++, callback: I, priorityLevel: $, startTime: B, expirationTime: g, sortIndex: -1 }, B > w ? ($.sortIndex = B, t(c, $), n(s) === null && $ === n(c) && (E ? (d(T), T = -1) : E = !0, ge(S, B - w))) : ($.sortIndex = g, t(s, $), v || x || (v = !0, ot(_))), $;
  }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function($) {
    var I = h;
    return function() {
      var B = h;
      h = I;
      try {
        return $.apply(this, arguments);
      } finally {
        h = B;
      }
    };
  };
})(hf);
pf.exports = hf;
var Qh = pf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kh = Ve, qe = Qh;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var mf = /* @__PURE__ */ new Set(), Br = {};
function zn(e, t) {
  nr(e, t), nr(e + "Capture", t);
}
function nr(e, t) {
  for (Br[e] = t, e = 0; e < t.length; e++) mf.add(t[e]);
}
var Dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tu = Object.prototype.hasOwnProperty, Yh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ka = {}, xa = {};
function Gh(e) {
  return tu.call(xa, e) ? !0 : tu.call(ka, e) ? !1 : Yh.test(e) ? xa[e] = !0 : (ka[e] = !0, !1);
}
function Xh(e, t, n, r) {
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
function Zh(e, t, n, r) {
  if (t === null || typeof t > "u" || Xh(e, t, n, r)) return !0;
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
function Be(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Te[e] = new Be(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Te[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Te[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Te[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Te[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Te[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Te[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Te[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Te[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fs = /[\-:]([a-z])/g;
function ds(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    fs,
    ds
  );
  Te[t] = new Be(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(fs, ds);
  Te[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(fs, ds);
  Te[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Te[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new Be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Te[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ps(e, t, n, r) {
  var o = Te.hasOwnProperty(t) ? Te[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Zh(t, n, o, r) && (n = null), r || o === null ? Gh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ko = Symbol.for("react.element"), jn = Symbol.for("react.portal"), Dn = Symbol.for("react.fragment"), hs = Symbol.for("react.strict_mode"), nu = Symbol.for("react.profiler"), yf = Symbol.for("react.provider"), gf = Symbol.for("react.context"), ms = Symbol.for("react.forward_ref"), ru = Symbol.for("react.suspense"), ou = Symbol.for("react.suspense_list"), ys = Symbol.for("react.memo"), Wt = Symbol.for("react.lazy"), vf = Symbol.for("react.offscreen"), Ea = Symbol.iterator;
function yr(e) {
  return e === null || typeof e != "object" ? null : (e = Ea && e[Ea] || e["@@iterator"], typeof e == "function" ? e : null);
}
var de = Object.assign, xl;
function Cr(e) {
  if (xl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    xl = t && t[1] || "";
  }
  return `
` + xl + e;
}
var El = !1;
function Cl(e, t) {
  if (!e || El) return "";
  El = !0;
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
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var o = c.stack.split(`
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
    El = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Cr(e) : "";
}
function bh(e) {
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
      return e = Cl(e.type, !1), e;
    case 11:
      return e = Cl(e.type.render, !1), e;
    case 1:
      return e = Cl(e.type, !0), e;
    default:
      return "";
  }
}
function iu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dn:
      return "Fragment";
    case jn:
      return "Portal";
    case nu:
      return "Profiler";
    case hs:
      return "StrictMode";
    case ru:
      return "Suspense";
    case ou:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case gf:
      return (e.displayName || "Context") + ".Consumer";
    case yf:
      return (e._context.displayName || "Context") + ".Provider";
    case ms:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ys:
      return t = e.displayName || null, t !== null ? t : iu(e.type) || "Memo";
    case Wt:
      t = e._payload, e = e._init;
      try {
        return iu(e(t));
      } catch {
      }
  }
  return null;
}
function Jh(e) {
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
      return iu(t);
    case 8:
      return t === hs ? "StrictMode" : "Mode";
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
function un(e) {
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
function wf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function qh(e) {
  var t = wf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function xo(e) {
  e._valueTracker || (e._valueTracker = qh(e));
}
function Sf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = wf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function qo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function lu(e, t) {
  var n = t.checked;
  return de({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ca(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = un(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function kf(e, t) {
  t = t.checked, t != null && ps(e, "checked", t, !1);
}
function uu(e, t) {
  kf(e, t);
  var n = un(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? su(e, t.type, n) : t.hasOwnProperty("defaultValue") && su(e, t.type, un(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _a(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function su(e, t, n) {
  (t !== "number" || qo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _r = Array.isArray;
function Gn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + un(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function au(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return de({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Pa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(z(92));
      if (_r(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: un(n) };
}
function xf(e, t) {
  var n = un(t.value), r = un(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Na(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ef(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ef(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Eo, Cf = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Eo = Eo || document.createElement("div"), Eo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Eo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
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
var Tr = {
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
}, em = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tr).forEach(function(e) {
  em.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Tr[t] = Tr[e];
  });
});
function _f(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tr.hasOwnProperty(e) && Tr[e] ? ("" + t).trim() : t + "px";
}
function Pf(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = _f(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var tm = de({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function fu(e, t) {
  if (t) {
    if (tm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function du(e, t) {
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
var pu = null;
function gs(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var hu = null, Xn = null, Zn = null;
function Aa(e) {
  if (e = fo(e)) {
    if (typeof hu != "function") throw Error(z(280));
    var t = e.stateNode;
    t && (t = Fi(t), hu(e.stateNode, e.type, t));
  }
}
function Nf(e) {
  Xn ? Zn ? Zn.push(e) : Zn = [e] : Xn = e;
}
function Af() {
  if (Xn) {
    var e = Xn, t = Zn;
    if (Zn = Xn = null, Aa(e), t) for (e = 0; e < t.length; e++) Aa(t[e]);
  }
}
function Tf(e, t) {
  return e(t);
}
function Of() {
}
var _l = !1;
function Rf(e, t, n) {
  if (_l) return e(t, n);
  _l = !0;
  try {
    return Tf(e, t, n);
  } finally {
    _l = !1, (Xn !== null || Zn !== null) && (Of(), Af());
  }
}
function Hr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fi(n);
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
  if (n && typeof n != "function") throw Error(z(231, t, typeof n));
  return n;
}
var mu = !1;
if (Dt) try {
  var gr = {};
  Object.defineProperty(gr, "passive", { get: function() {
    mu = !0;
  } }), window.addEventListener("test", gr, gr), window.removeEventListener("test", gr, gr);
} catch {
  mu = !1;
}
function nm(e, t, n, r, o, i, l, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var Or = !1, ei = null, ti = !1, yu = null, rm = { onError: function(e) {
  Or = !0, ei = e;
} };
function om(e, t, n, r, o, i, l, u, s) {
  Or = !1, ei = null, nm.apply(rm, arguments);
}
function im(e, t, n, r, o, i, l, u, s) {
  if (om.apply(this, arguments), Or) {
    if (Or) {
      var c = ei;
      Or = !1, ei = null;
    } else throw Error(z(198));
    ti || (ti = !0, yu = c);
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
function zf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ta(e) {
  if ($n(e) !== e) throw Error(z(188));
}
function lm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $n(e), t === null) throw Error(z(188));
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
        if (i === n) return Ta(o), e;
        if (i === r) return Ta(o), t;
        i = i.sibling;
      }
      throw Error(z(188));
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
        if (!l) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function $f(e) {
  return e = lm(e), e !== null ? Lf(e) : null;
}
function Lf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var jf = qe.unstable_scheduleCallback, Oa = qe.unstable_cancelCallback, um = qe.unstable_shouldYield, sm = qe.unstable_requestPaint, ye = qe.unstable_now, am = qe.unstable_getCurrentPriorityLevel, vs = qe.unstable_ImmediatePriority, Df = qe.unstable_UserBlockingPriority, ni = qe.unstable_NormalPriority, cm = qe.unstable_LowPriority, Ff = qe.unstable_IdlePriority, $i = null, Ct = null;
function fm(e) {
  if (Ct && typeof Ct.onCommitFiberRoot == "function") try {
    Ct.onCommitFiberRoot($i, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var vt = Math.clz32 ? Math.clz32 : hm, dm = Math.log, pm = Math.LN2;
function hm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (dm(e) / pm | 0) | 0;
}
var Co = 64, _o = 4194304;
function Pr(e) {
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
function ri(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? r = Pr(u) : (i &= l, i !== 0 && (r = Pr(i)));
  } else l = n & ~o, l !== 0 ? r = Pr(l) : i !== 0 && (r = Pr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - vt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function mm(e, t) {
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
function ym(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - vt(i), u = 1 << l, s = o[l];
    s === -1 ? (!(u & n) || u & r) && (o[l] = mm(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function gu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Mf() {
  var e = Co;
  return Co <<= 1, !(Co & 4194240) && (Co = 64), e;
}
function Pl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ao(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vt(t), e[t] = n;
}
function gm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - vt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function ws(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - vt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var b = 0;
function If(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Bf, Ss, Uf, Hf, Vf, vu = !1, Po = [], Zt = null, bt = null, Jt = null, Vr = /* @__PURE__ */ new Map(), Wr = /* @__PURE__ */ new Map(), Kt = [], vm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ra(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zt = null;
      break;
    case "dragenter":
    case "dragleave":
      bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Vr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wr.delete(t.pointerId);
  }
}
function vr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = fo(t), t !== null && Ss(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function wm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Zt = vr(Zt, e, t, n, r, o), !0;
    case "dragenter":
      return bt = vr(bt, e, t, n, r, o), !0;
    case "mouseover":
      return Jt = vr(Jt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Vr.set(i, vr(Vr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Wr.set(i, vr(Wr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Wf(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = $n(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = zf(n), t !== null) {
          e.blockedOn = t, Vf(e.priority, function() {
            Uf(n);
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
function Ho(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = wu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      pu = r, n.target.dispatchEvent(r), pu = null;
    } else return t = fo(n), t !== null && Ss(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function za(e, t, n) {
  Ho(e) && n.delete(t);
}
function Sm() {
  vu = !1, Zt !== null && Ho(Zt) && (Zt = null), bt !== null && Ho(bt) && (bt = null), Jt !== null && Ho(Jt) && (Jt = null), Vr.forEach(za), Wr.forEach(za);
}
function wr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vu || (vu = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Sm)));
}
function Qr(e) {
  function t(o) {
    return wr(o, e);
  }
  if (0 < Po.length) {
    wr(Po[0], e);
    for (var n = 1; n < Po.length; n++) {
      var r = Po[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Zt !== null && wr(Zt, e), bt !== null && wr(bt, e), Jt !== null && wr(Jt, e), Vr.forEach(t), Wr.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) Wf(n), n.blockedOn === null && Kt.shift();
}
var bn = Ut.ReactCurrentBatchConfig, oi = !0;
function km(e, t, n, r) {
  var o = b, i = bn.transition;
  bn.transition = null;
  try {
    b = 1, ks(e, t, n, r);
  } finally {
    b = o, bn.transition = i;
  }
}
function xm(e, t, n, r) {
  var o = b, i = bn.transition;
  bn.transition = null;
  try {
    b = 4, ks(e, t, n, r);
  } finally {
    b = o, bn.transition = i;
  }
}
function ks(e, t, n, r) {
  if (oi) {
    var o = wu(e, t, n, r);
    if (o === null) Dl(e, t, r, ii, n), Ra(e, r);
    else if (wm(o, e, t, n, r)) r.stopPropagation();
    else if (Ra(e, r), t & 4 && -1 < vm.indexOf(e)) {
      for (; o !== null; ) {
        var i = fo(o);
        if (i !== null && Bf(i), i = wu(e, t, n, r), i === null && Dl(e, t, r, ii, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Dl(e, t, r, null, n);
  }
}
var ii = null;
function wu(e, t, n, r) {
  if (ii = null, e = gs(r), e = gn(e), e !== null) if (t = $n(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = zf(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ii = e, null;
}
function Qf(e) {
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
      switch (am()) {
        case vs:
          return 1;
        case Df:
          return 4;
        case ni:
        case cm:
          return 16;
        case Ff:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gt = null, xs = null, Vo = null;
function Kf() {
  if (Vo) return Vo;
  var e, t = xs, n = t.length, r, o = "value" in Gt ? Gt.value : Gt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return Vo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Wo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function No() {
  return !0;
}
function $a() {
  return !1;
}
function nt(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? No : $a, this.isPropagationStopped = $a, this;
  }
  return de(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = No);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = No);
  }, persist: function() {
  }, isPersistent: No }), t;
}
var dr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Es = nt(dr), co = de({}, dr, { view: 0, detail: 0 }), Em = nt(co), Nl, Al, Sr, Li = de({}, co, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (Nl = e.screenX - Sr.screenX, Al = e.screenY - Sr.screenY) : Al = Nl = 0, Sr = e), Nl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Al;
} }), La = nt(Li), Cm = de({}, Li, { dataTransfer: 0 }), _m = nt(Cm), Pm = de({}, co, { relatedTarget: 0 }), Tl = nt(Pm), Nm = de({}, dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Am = nt(Nm), Tm = de({}, dr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Om = nt(Tm), Rm = de({}, dr, { data: 0 }), ja = nt(Rm), zm = {
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
}, $m = {
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
}, Lm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function jm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lm[e]) ? !!t[e] : !1;
}
function Cs() {
  return jm;
}
var Dm = de({}, co, { key: function(e) {
  if (e.key) {
    var t = zm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Wo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $m[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cs, charCode: function(e) {
  return e.type === "keypress" ? Wo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Wo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Fm = nt(Dm), Mm = de({}, Li, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Da = nt(Mm), Im = de({}, co, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cs }), Bm = nt(Im), Um = de({}, dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Hm = nt(Um), Vm = de({}, Li, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Wm = nt(Vm), Qm = [9, 13, 27, 32], _s = Dt && "CompositionEvent" in window, Rr = null;
Dt && "documentMode" in document && (Rr = document.documentMode);
var Km = Dt && "TextEvent" in window && !Rr, Yf = Dt && (!_s || Rr && 8 < Rr && 11 >= Rr), Fa = " ", Ma = !1;
function Gf(e, t) {
  switch (e) {
    case "keyup":
      return Qm.indexOf(t.keyCode) !== -1;
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
function Xf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function Ym(e, t) {
  switch (e) {
    case "compositionend":
      return Xf(t);
    case "keypress":
      return t.which !== 32 ? null : (Ma = !0, Fa);
    case "textInput":
      return e = t.data, e === Fa && Ma ? null : e;
    default:
      return null;
  }
}
function Gm(e, t) {
  if (Fn) return e === "compositionend" || !_s && Gf(e, t) ? (e = Kf(), Vo = xs = Gt = null, Fn = !1, e) : null;
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
      return Yf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Xm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Xm[e.type] : t === "textarea";
}
function Zf(e, t, n, r) {
  Nf(r), t = li(t, "onChange"), 0 < t.length && (n = new Es("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var zr = null, Kr = null;
function Zm(e) {
  ud(e, 0);
}
function ji(e) {
  var t = Bn(e);
  if (Sf(t)) return e;
}
function bm(e, t) {
  if (e === "change") return t;
}
var bf = !1;
if (Dt) {
  var Ol;
  if (Dt) {
    var Rl = "oninput" in document;
    if (!Rl) {
      var Ba = document.createElement("div");
      Ba.setAttribute("oninput", "return;"), Rl = typeof Ba.oninput == "function";
    }
    Ol = Rl;
  } else Ol = !1;
  bf = Ol && (!document.documentMode || 9 < document.documentMode);
}
function Ua() {
  zr && (zr.detachEvent("onpropertychange", Jf), Kr = zr = null);
}
function Jf(e) {
  if (e.propertyName === "value" && ji(Kr)) {
    var t = [];
    Zf(t, Kr, e, gs(e)), Rf(Zm, t);
  }
}
function Jm(e, t, n) {
  e === "focusin" ? (Ua(), zr = t, Kr = n, zr.attachEvent("onpropertychange", Jf)) : e === "focusout" && Ua();
}
function qm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ji(Kr);
}
function ey(e, t) {
  if (e === "click") return ji(t);
}
function ty(e, t) {
  if (e === "input" || e === "change") return ji(t);
}
function ny(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var St = typeof Object.is == "function" ? Object.is : ny;
function Yr(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!tu.call(t, o) || !St(e[o], t[o])) return !1;
  }
  return !0;
}
function Ha(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Va(e, t) {
  var n = Ha(e);
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
    n = Ha(n);
  }
}
function qf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ed() {
  for (var e = window, t = qo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = qo(e.document);
  }
  return t;
}
function Ps(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ry(e) {
  var t = ed(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && qf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ps(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Va(n, i);
        var l = Va(
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
var oy = Dt && "documentMode" in document && 11 >= document.documentMode, Mn = null, Su = null, $r = null, ku = !1;
function Wa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ku || Mn == null || Mn !== qo(r) || (r = Mn, "selectionStart" in r && Ps(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), $r && Yr($r, r) || ($r = r, r = li(Su, "onSelect"), 0 < r.length && (t = new Es("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Mn)));
}
function Ao(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var In = { animationend: Ao("Animation", "AnimationEnd"), animationiteration: Ao("Animation", "AnimationIteration"), animationstart: Ao("Animation", "AnimationStart"), transitionend: Ao("Transition", "TransitionEnd") }, zl = {}, td = {};
Dt && (td = document.createElement("div").style, "AnimationEvent" in window || (delete In.animationend.animation, delete In.animationiteration.animation, delete In.animationstart.animation), "TransitionEvent" in window || delete In.transitionend.transition);
function Di(e) {
  if (zl[e]) return zl[e];
  if (!In[e]) return e;
  var t = In[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in td) return zl[e] = t[n];
  return e;
}
var nd = Di("animationend"), rd = Di("animationiteration"), od = Di("animationstart"), id = Di("transitionend"), ld = /* @__PURE__ */ new Map(), Qa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fn(e, t) {
  ld.set(e, t), zn(t, [e]);
}
for (var $l = 0; $l < Qa.length; $l++) {
  var Ll = Qa[$l], iy = Ll.toLowerCase(), ly = Ll[0].toUpperCase() + Ll.slice(1);
  fn(iy, "on" + ly);
}
fn(nd, "onAnimationEnd");
fn(rd, "onAnimationIteration");
fn(od, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(id, "onTransitionEnd");
nr("onMouseEnter", ["mouseout", "mouseover"]);
nr("onMouseLeave", ["mouseout", "mouseover"]);
nr("onPointerEnter", ["pointerout", "pointerover"]);
nr("onPointerLeave", ["pointerout", "pointerover"]);
zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), uy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));
function Ka(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, im(r, t, void 0, e), e.currentTarget = null;
}
function ud(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== i && o.isPropagationStopped()) break e;
        Ka(o, u, c), i = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, c = u.currentTarget, u = u.listener, s !== i && o.isPropagationStopped()) break e;
        Ka(o, u, c), i = s;
      }
    }
  }
  if (ti) throw e = yu, ti = !1, yu = null, e;
}
function re(e, t) {
  var n = t[Pu];
  n === void 0 && (n = t[Pu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (sd(t, e, 2, !1), n.add(r));
}
function jl(e, t, n) {
  var r = 0;
  t && (r |= 4), sd(n, e, r, t);
}
var To = "_reactListening" + Math.random().toString(36).slice(2);
function Gr(e) {
  if (!e[To]) {
    e[To] = !0, mf.forEach(function(n) {
      n !== "selectionchange" && (uy.has(n) || jl(n, !1, e), jl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[To] || (t[To] = !0, jl("selectionchange", !1, t));
  }
}
function sd(e, t, n, r) {
  switch (Qf(t)) {
    case 1:
      var o = km;
      break;
    case 4:
      o = xm;
      break;
    default:
      o = ks;
  }
  n = o.bind(null, t, n, e), o = void 0, !mu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Dl(e, t, n, r, o) {
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
        if (l = gn(u), l === null) return;
        if (s = l.tag, s === 5 || s === 6) {
          r = i = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Rf(function() {
    var c = i, p = gs(n), m = [];
    e: {
      var h = ld.get(e);
      if (h !== void 0) {
        var x = Es, v = e;
        switch (e) {
          case "keypress":
            if (Wo(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Fm;
            break;
          case "focusin":
            v = "focus", x = Tl;
            break;
          case "focusout":
            v = "blur", x = Tl;
            break;
          case "beforeblur":
          case "afterblur":
            x = Tl;
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
            x = La;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = _m;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Bm;
            break;
          case nd:
          case rd:
          case od:
            x = Am;
            break;
          case id:
            x = Hm;
            break;
          case "scroll":
            x = Em;
            break;
          case "wheel":
            x = Wm;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Om;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Da;
        }
        var E = (t & 4) !== 0, P = !E && e === "scroll", d = E ? h !== null ? h + "Capture" : null : h;
        E = [];
        for (var a = c, f; a !== null; ) {
          f = a;
          var S = f.stateNode;
          if (f.tag === 5 && S !== null && (f = S, d !== null && (S = Hr(a, d), S != null && E.push(Xr(a, S, f)))), P) break;
          a = a.return;
        }
        0 < E.length && (h = new x(h, v, null, n, p), m.push({ event: h, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", h && n !== pu && (v = n.relatedTarget || n.fromElement) && (gn(v) || v[Ft])) break e;
        if ((x || h) && (h = p.window === p ? p : (h = p.ownerDocument) ? h.defaultView || h.parentWindow : window, x ? (v = n.relatedTarget || n.toElement, x = c, v = v ? gn(v) : null, v !== null && (P = $n(v), v !== P || v.tag !== 5 && v.tag !== 6) && (v = null)) : (x = null, v = c), x !== v)) {
          if (E = La, S = "onMouseLeave", d = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (E = Da, S = "onPointerLeave", d = "onPointerEnter", a = "pointer"), P = x == null ? h : Bn(x), f = v == null ? h : Bn(v), h = new E(S, a + "leave", x, n, p), h.target = P, h.relatedTarget = f, S = null, gn(p) === c && (E = new E(d, a + "enter", v, n, p), E.target = f, E.relatedTarget = P, S = E), P = S, x && v) t: {
            for (E = x, d = v, a = 0, f = E; f; f = Ln(f)) a++;
            for (f = 0, S = d; S; S = Ln(S)) f++;
            for (; 0 < a - f; ) E = Ln(E), a--;
            for (; 0 < f - a; ) d = Ln(d), f--;
            for (; a--; ) {
              if (E === d || d !== null && E === d.alternate) break t;
              E = Ln(E), d = Ln(d);
            }
            E = null;
          }
          else E = null;
          x !== null && Ya(m, h, x, E, !1), v !== null && P !== null && Ya(m, P, v, E, !0);
        }
      }
      e: {
        if (h = c ? Bn(c) : window, x = h.nodeName && h.nodeName.toLowerCase(), x === "select" || x === "input" && h.type === "file") var _ = bm;
        else if (Ia(h)) if (bf) _ = ty;
        else {
          _ = qm;
          var A = Jm;
        }
        else (x = h.nodeName) && x.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (_ = ey);
        if (_ && (_ = _(e, c))) {
          Zf(m, _, n, p);
          break e;
        }
        A && A(e, h, c), e === "focusout" && (A = h._wrapperState) && A.controlled && h.type === "number" && su(h, "number", h.value);
      }
      switch (A = c ? Bn(c) : window, e) {
        case "focusin":
          (Ia(A) || A.contentEditable === "true") && (Mn = A, Su = c, $r = null);
          break;
        case "focusout":
          $r = Su = Mn = null;
          break;
        case "mousedown":
          ku = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ku = !1, Wa(m, n, p);
          break;
        case "selectionchange":
          if (oy) break;
        case "keydown":
        case "keyup":
          Wa(m, n, p);
      }
      var O;
      if (_s) e: {
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
      else Fn ? Gf(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Yf && n.locale !== "ko" && (Fn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Fn && (O = Kf()) : (Gt = p, xs = "value" in Gt ? Gt.value : Gt.textContent, Fn = !0)), A = li(c, T), 0 < A.length && (T = new ja(T, e, null, n, p), m.push({ event: T, listeners: A }), O ? T.data = O : (O = Xf(n), O !== null && (T.data = O)))), (O = Km ? Ym(e, n) : Gm(e, n)) && (c = li(c, "onBeforeInput"), 0 < c.length && (p = new ja("onBeforeInput", "beforeinput", null, n, p), m.push({ event: p, listeners: c }), p.data = O));
    }
    ud(m, t);
  });
}
function Xr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function li(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Hr(e, n), i != null && r.unshift(Xr(e, i, o)), i = Hr(e, t), i != null && r.push(Xr(e, i, o))), e = e.return;
  }
  return r;
}
function Ln(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ya(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, o ? (s = Hr(n, i), s != null && l.unshift(Xr(n, s, u))) : o || (s = Hr(n, i), s != null && l.push(Xr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var sy = /\r\n?/g, ay = /\u0000|\uFFFD/g;
function Ga(e) {
  return (typeof e == "string" ? e : "" + e).replace(sy, `
`).replace(ay, "");
}
function Oo(e, t, n) {
  if (t = Ga(t), Ga(e) !== t && n) throw Error(z(425));
}
function ui() {
}
var xu = null, Eu = null;
function Cu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _u = typeof setTimeout == "function" ? setTimeout : void 0, cy = typeof clearTimeout == "function" ? clearTimeout : void 0, Xa = typeof Promise == "function" ? Promise : void 0, fy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xa < "u" ? function(e) {
  return Xa.resolve(null).then(e).catch(dy);
} : _u;
function dy(e) {
  setTimeout(function() {
    throw e;
  });
}
function Fl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Qr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Qr(t);
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
function Za(e) {
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
var pr = Math.random().toString(36).slice(2), Et = "__reactFiber$" + pr, Zr = "__reactProps$" + pr, Ft = "__reactContainer$" + pr, Pu = "__reactEvents$" + pr, py = "__reactListeners$" + pr, hy = "__reactHandles$" + pr;
function gn(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ft] || n[Et]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Za(e); e !== null; ) {
        if (n = e[Et]) return n;
        e = Za(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function fo(e) {
  return e = e[Et] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function Fi(e) {
  return e[Zr] || null;
}
var Nu = [], Un = -1;
function dn(e) {
  return { current: e };
}
function oe(e) {
  0 > Un || (e.current = Nu[Un], Nu[Un] = null, Un--);
}
function te(e, t) {
  Un++, Nu[Un] = e.current, e.current = t;
}
var sn = {}, je = dn(sn), Qe = dn(!1), Cn = sn;
function rr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return sn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ke(e) {
  return e = e.childContextTypes, e != null;
}
function si() {
  oe(Qe), oe(je);
}
function ba(e, t, n) {
  if (je.current !== sn) throw Error(z(168));
  te(je, t), te(Qe, n);
}
function ad(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(z(108, Jh(e) || "Unknown", o));
  return de({}, n, r);
}
function ai(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn, Cn = je.current, te(je, e), te(Qe, Qe.current), !0;
}
function Ja(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n ? (e = ad(e, t, Cn), r.__reactInternalMemoizedMergedChildContext = e, oe(Qe), oe(je), te(je, e)) : oe(Qe), te(Qe, n);
}
var Ot = null, Mi = !1, Ml = !1;
function cd(e) {
  Ot === null ? Ot = [e] : Ot.push(e);
}
function my(e) {
  Mi = !0, cd(e);
}
function pn() {
  if (!Ml && Ot !== null) {
    Ml = !0;
    var e = 0, t = b;
    try {
      var n = Ot;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ot = null, Mi = !1;
    } catch (o) {
      throw Ot !== null && (Ot = Ot.slice(e + 1)), jf(vs, pn), o;
    } finally {
      b = t, Ml = !1;
    }
  }
  return null;
}
var Hn = [], Vn = 0, ci = null, fi = 0, lt = [], ut = 0, _n = null, Rt = 1, zt = "";
function hn(e, t) {
  Hn[Vn++] = fi, Hn[Vn++] = ci, ci = e, fi = t;
}
function fd(e, t, n) {
  lt[ut++] = Rt, lt[ut++] = zt, lt[ut++] = _n, _n = e;
  var r = Rt;
  e = zt;
  var o = 32 - vt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - vt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Rt = 1 << 32 - vt(t) + o | n << o | r, zt = i + e;
  } else Rt = 1 << i | n << o | r, zt = e;
}
function Ns(e) {
  e.return !== null && (hn(e, 1), fd(e, 1, 0));
}
function As(e) {
  for (; e === ci; ) ci = Hn[--Vn], Hn[Vn] = null, fi = Hn[--Vn], Hn[Vn] = null;
  for (; e === _n; ) _n = lt[--ut], lt[ut] = null, zt = lt[--ut], lt[ut] = null, Rt = lt[--ut], lt[ut] = null;
}
var Je = null, Ze = null, ue = !1, gt = null;
function dd(e, t) {
  var n = st(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function qa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Je = e, Ze = qt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Je = e, Ze = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = _n !== null ? { id: Rt, overflow: zt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = st(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Je = e, Ze = null, !0) : !1;
    default:
      return !1;
  }
}
function Au(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Tu(e) {
  if (ue) {
    var t = Ze;
    if (t) {
      var n = t;
      if (!qa(e, t)) {
        if (Au(e)) throw Error(z(418));
        t = qt(n.nextSibling);
        var r = Je;
        t && qa(e, t) ? dd(r, n) : (e.flags = e.flags & -4097 | 2, ue = !1, Je = e);
      }
    } else {
      if (Au(e)) throw Error(z(418));
      e.flags = e.flags & -4097 | 2, ue = !1, Je = e;
    }
  }
}
function ec(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Je = e;
}
function Ro(e) {
  if (e !== Je) return !1;
  if (!ue) return ec(e), ue = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Cu(e.type, e.memoizedProps)), t && (t = Ze)) {
    if (Au(e)) throw pd(), Error(z(418));
    for (; t; ) dd(e, t), t = qt(t.nextSibling);
  }
  if (ec(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ze = qt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ze = null;
    }
  } else Ze = Je ? qt(e.stateNode.nextSibling) : null;
  return !0;
}
function pd() {
  for (var e = Ze; e; ) e = qt(e.nextSibling);
}
function or() {
  Ze = Je = null, ue = !1;
}
function Ts(e) {
  gt === null ? gt = [e] : gt.push(e);
}
var yy = Ut.ReactCurrentBatchConfig;
function kr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var u = o.refs;
        l === null ? delete u[i] : u[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function zo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function tc(e) {
  var t = e._init;
  return t(e._payload);
}
function hd(e) {
  function t(d, a) {
    if (e) {
      var f = d.deletions;
      f === null ? (d.deletions = [a], d.flags |= 16) : f.push(a);
    }
  }
  function n(d, a) {
    if (!e) return null;
    for (; a !== null; ) t(d, a), a = a.sibling;
    return null;
  }
  function r(d, a) {
    for (d = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? d.set(a.key, a) : d.set(a.index, a), a = a.sibling;
    return d;
  }
  function o(d, a) {
    return d = rn(d, a), d.index = 0, d.sibling = null, d;
  }
  function i(d, a, f) {
    return d.index = f, e ? (f = d.alternate, f !== null ? (f = f.index, f < a ? (d.flags |= 2, a) : f) : (d.flags |= 2, a)) : (d.flags |= 1048576, a);
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, a, f, S) {
    return a === null || a.tag !== 6 ? (a = Ql(f, d.mode, S), a.return = d, a) : (a = o(a, f), a.return = d, a);
  }
  function s(d, a, f, S) {
    var _ = f.type;
    return _ === Dn ? p(d, a, f.props.children, S, f.key) : a !== null && (a.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Wt && tc(_) === a.type) ? (S = o(a, f.props), S.ref = kr(d, a, f), S.return = d, S) : (S = bo(f.type, f.key, f.props, null, d.mode, S), S.ref = kr(d, a, f), S.return = d, S);
  }
  function c(d, a, f, S) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== f.containerInfo || a.stateNode.implementation !== f.implementation ? (a = Kl(f, d.mode, S), a.return = d, a) : (a = o(a, f.children || []), a.return = d, a);
  }
  function p(d, a, f, S, _) {
    return a === null || a.tag !== 7 ? (a = kn(f, d.mode, S, _), a.return = d, a) : (a = o(a, f), a.return = d, a);
  }
  function m(d, a, f) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Ql("" + a, d.mode, f), a.return = d, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ko:
          return f = bo(a.type, a.key, a.props, null, d.mode, f), f.ref = kr(d, null, a), f.return = d, f;
        case jn:
          return a = Kl(a, d.mode, f), a.return = d, a;
        case Wt:
          var S = a._init;
          return m(d, S(a._payload), f);
      }
      if (_r(a) || yr(a)) return a = kn(a, d.mode, f, null), a.return = d, a;
      zo(d, a);
    }
    return null;
  }
  function h(d, a, f, S) {
    var _ = a !== null ? a.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return _ !== null ? null : u(d, a, "" + f, S);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ko:
          return f.key === _ ? s(d, a, f, S) : null;
        case jn:
          return f.key === _ ? c(d, a, f, S) : null;
        case Wt:
          return _ = f._init, h(
            d,
            a,
            _(f._payload),
            S
          );
      }
      if (_r(f) || yr(f)) return _ !== null ? null : p(d, a, f, S, null);
      zo(d, f);
    }
    return null;
  }
  function x(d, a, f, S, _) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return d = d.get(f) || null, u(a, d, "" + S, _);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ko:
          return d = d.get(S.key === null ? f : S.key) || null, s(a, d, S, _);
        case jn:
          return d = d.get(S.key === null ? f : S.key) || null, c(a, d, S, _);
        case Wt:
          var A = S._init;
          return x(d, a, f, A(S._payload), _);
      }
      if (_r(S) || yr(S)) return d = d.get(f) || null, p(a, d, S, _, null);
      zo(a, S);
    }
    return null;
  }
  function v(d, a, f, S) {
    for (var _ = null, A = null, O = a, T = a = 0, U = null; O !== null && T < f.length; T++) {
      O.index > T ? (U = O, O = null) : U = O.sibling;
      var F = h(d, O, f[T], S);
      if (F === null) {
        O === null && (O = U);
        break;
      }
      e && O && F.alternate === null && t(d, O), a = i(F, a, T), A === null ? _ = F : A.sibling = F, A = F, O = U;
    }
    if (T === f.length) return n(d, O), ue && hn(d, T), _;
    if (O === null) {
      for (; T < f.length; T++) O = m(d, f[T], S), O !== null && (a = i(O, a, T), A === null ? _ = O : A.sibling = O, A = O);
      return ue && hn(d, T), _;
    }
    for (O = r(d, O); T < f.length; T++) U = x(O, d, T, f[T], S), U !== null && (e && U.alternate !== null && O.delete(U.key === null ? T : U.key), a = i(U, a, T), A === null ? _ = U : A.sibling = U, A = U);
    return e && O.forEach(function(pe) {
      return t(d, pe);
    }), ue && hn(d, T), _;
  }
  function E(d, a, f, S) {
    var _ = yr(f);
    if (typeof _ != "function") throw Error(z(150));
    if (f = _.call(f), f == null) throw Error(z(151));
    for (var A = _ = null, O = a, T = a = 0, U = null, F = f.next(); O !== null && !F.done; T++, F = f.next()) {
      O.index > T ? (U = O, O = null) : U = O.sibling;
      var pe = h(d, O, F.value, S);
      if (pe === null) {
        O === null && (O = U);
        break;
      }
      e && O && pe.alternate === null && t(d, O), a = i(pe, a, T), A === null ? _ = pe : A.sibling = pe, A = pe, O = U;
    }
    if (F.done) return n(
      d,
      O
    ), ue && hn(d, T), _;
    if (O === null) {
      for (; !F.done; T++, F = f.next()) F = m(d, F.value, S), F !== null && (a = i(F, a, T), A === null ? _ = F : A.sibling = F, A = F);
      return ue && hn(d, T), _;
    }
    for (O = r(d, O); !F.done; T++, F = f.next()) F = x(O, d, T, F.value, S), F !== null && (e && F.alternate !== null && O.delete(F.key === null ? T : F.key), a = i(F, a, T), A === null ? _ = F : A.sibling = F, A = F);
    return e && O.forEach(function(ie) {
      return t(d, ie);
    }), ue && hn(d, T), _;
  }
  function P(d, a, f, S) {
    if (typeof f == "object" && f !== null && f.type === Dn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ko:
          e: {
            for (var _ = f.key, A = a; A !== null; ) {
              if (A.key === _) {
                if (_ = f.type, _ === Dn) {
                  if (A.tag === 7) {
                    n(d, A.sibling), a = o(A, f.props.children), a.return = d, d = a;
                    break e;
                  }
                } else if (A.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Wt && tc(_) === A.type) {
                  n(d, A.sibling), a = o(A, f.props), a.ref = kr(d, A, f), a.return = d, d = a;
                  break e;
                }
                n(d, A);
                break;
              } else t(d, A);
              A = A.sibling;
            }
            f.type === Dn ? (a = kn(f.props.children, d.mode, S, f.key), a.return = d, d = a) : (S = bo(f.type, f.key, f.props, null, d.mode, S), S.ref = kr(d, a, f), S.return = d, d = S);
          }
          return l(d);
        case jn:
          e: {
            for (A = f.key; a !== null; ) {
              if (a.key === A) if (a.tag === 4 && a.stateNode.containerInfo === f.containerInfo && a.stateNode.implementation === f.implementation) {
                n(d, a.sibling), a = o(a, f.children || []), a.return = d, d = a;
                break e;
              } else {
                n(d, a);
                break;
              }
              else t(d, a);
              a = a.sibling;
            }
            a = Kl(f, d.mode, S), a.return = d, d = a;
          }
          return l(d);
        case Wt:
          return A = f._init, P(d, a, A(f._payload), S);
      }
      if (_r(f)) return v(d, a, f, S);
      if (yr(f)) return E(d, a, f, S);
      zo(d, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, a !== null && a.tag === 6 ? (n(d, a.sibling), a = o(a, f), a.return = d, d = a) : (n(d, a), a = Ql(f, d.mode, S), a.return = d, d = a), l(d)) : n(d, a);
  }
  return P;
}
var ir = hd(!0), md = hd(!1), di = dn(null), pi = null, Wn = null, Os = null;
function Rs() {
  Os = Wn = pi = null;
}
function zs(e) {
  var t = di.current;
  oe(di), e._currentValue = t;
}
function Ou(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Jn(e, t) {
  pi = e, Os = Wn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (We = !0), e.firstContext = null);
}
function ct(e) {
  var t = e._currentValue;
  if (Os !== e) if (e = { context: e, memoizedValue: t, next: null }, Wn === null) {
    if (pi === null) throw Error(z(308));
    Wn = e, pi.dependencies = { lanes: 0, firstContext: e };
  } else Wn = Wn.next = e;
  return t;
}
var vn = null;
function $s(e) {
  vn === null ? vn = [e] : vn.push(e);
}
function yd(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, $s(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Mt(e, r);
}
function Mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Qt = !1;
function Ls(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function gd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Lt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function en(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, X & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Mt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, $s(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Mt(e, n);
}
function Qo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ws(e, n);
  }
}
function nc(e, t) {
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
function hi(e, t, n, r) {
  var o = e.updateQueue;
  Qt = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, l === null ? i = c : l.next = c, l = s;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, u = p.lastBaseUpdate, u !== l && (u === null ? p.firstBaseUpdate = c : u.next = c, p.lastBaseUpdate = s));
  }
  if (i !== null) {
    var m = o.baseState;
    l = 0, p = c = s = null, u = i;
    do {
      var h = u.lane, x = u.eventTime;
      if ((r & h) === h) {
        p !== null && (p = p.next = {
          eventTime: x,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var v = e, E = u;
          switch (h = t, x = n, E.tag) {
            case 1:
              if (v = E.payload, typeof v == "function") {
                m = v.call(x, m, h);
                break e;
              }
              m = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = E.payload, h = typeof v == "function" ? v.call(x, m, h) : v, h == null) break e;
              m = de({}, m, h);
              break e;
            case 2:
              Qt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [u] : h.push(u));
      } else x = { eventTime: x, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, p === null ? (c = p = x, s = m) : p = p.next = x, l |= h;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null) break;
        h = u, u = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
      }
    } while (!0);
    if (p === null && (s = m), o.baseState = s, o.firstBaseUpdate = c, o.lastBaseUpdate = p, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Nn |= l, e.lanes = l, e.memoizedState = m;
  }
}
function rc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(z(191, o));
      o.call(r);
    }
  }
}
var po = {}, _t = dn(po), br = dn(po), Jr = dn(po);
function wn(e) {
  if (e === po) throw Error(z(174));
  return e;
}
function js(e, t) {
  switch (te(Jr, t), te(br, e), te(_t, po), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = cu(t, e);
  }
  oe(_t), te(_t, t);
}
function lr() {
  oe(_t), oe(br), oe(Jr);
}
function vd(e) {
  wn(Jr.current);
  var t = wn(_t.current), n = cu(t, e.type);
  t !== n && (te(br, e), te(_t, n));
}
function Ds(e) {
  br.current === e && (oe(_t), oe(br));
}
var ce = dn(0);
function mi(e) {
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
var Il = [];
function Fs() {
  for (var e = 0; e < Il.length; e++) Il[e]._workInProgressVersionPrimary = null;
  Il.length = 0;
}
var Ko = Ut.ReactCurrentDispatcher, Bl = Ut.ReactCurrentBatchConfig, Pn = 0, fe = null, Se = null, xe = null, yi = !1, Lr = !1, qr = 0, gy = 0;
function ze() {
  throw Error(z(321));
}
function Ms(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
  return !0;
}
function Is(e, t, n, r, o, i) {
  if (Pn = i, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ko.current = e === null || e.memoizedState === null ? ky : xy, e = n(r, o), Lr) {
    i = 0;
    do {
      if (Lr = !1, qr = 0, 25 <= i) throw Error(z(301));
      i += 1, xe = Se = null, t.updateQueue = null, Ko.current = Ey, e = n(r, o);
    } while (Lr);
  }
  if (Ko.current = gi, t = Se !== null && Se.next !== null, Pn = 0, xe = Se = fe = null, yi = !1, t) throw Error(z(300));
  return e;
}
function Bs() {
  var e = qr !== 0;
  return qr = 0, e;
}
function xt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return xe === null ? fe.memoizedState = xe = e : xe = xe.next = e, xe;
}
function ft() {
  if (Se === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = xe === null ? fe.memoizedState : xe.next;
  if (t !== null) xe = t, Se = e;
  else {
    if (e === null) throw Error(z(310));
    Se = e, e = { memoizedState: Se.memoizedState, baseState: Se.baseState, baseQueue: Se.baseQueue, queue: Se.queue, next: null }, xe === null ? fe.memoizedState = xe = e : xe = xe.next = e;
  }
  return xe;
}
function eo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ul(e) {
  var t = ft(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = Se, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var u = l = null, s = null, c = i;
    do {
      var p = c.lane;
      if ((Pn & p) === p) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = m, l = r) : s = s.next = m, fe.lanes |= p, Nn |= p;
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? l = r : s.next = u, St(r, t.memoizedState) || (We = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, fe.lanes |= i, Nn |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hl(e) {
  var t = ft(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    St(i, t.memoizedState) || (We = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function wd() {
}
function Sd(e, t) {
  var n = fe, r = ft(), o = t(), i = !St(r.memoizedState, o);
  if (i && (r.memoizedState = o, We = !0), r = r.queue, Us(Ed.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || xe !== null && xe.memoizedState.tag & 1) {
    if (n.flags |= 2048, to(9, xd.bind(null, n, r, o, t), void 0, null), Ee === null) throw Error(z(349));
    Pn & 30 || kd(n, t, o);
  }
  return o;
}
function kd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function xd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Cd(t) && _d(e);
}
function Ed(e, t, n) {
  return n(function() {
    Cd(t) && _d(e);
  });
}
function Cd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function _d(e) {
  var t = Mt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function oc(e) {
  var t = xt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: eo, lastRenderedState: e }, t.queue = e, e = e.dispatch = Sy.bind(null, fe, e), [t.memoizedState, e];
}
function to(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Pd() {
  return ft().memoizedState;
}
function Yo(e, t, n, r) {
  var o = xt();
  fe.flags |= e, o.memoizedState = to(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ii(e, t, n, r) {
  var o = ft();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Se !== null) {
    var l = Se.memoizedState;
    if (i = l.destroy, r !== null && Ms(r, l.deps)) {
      o.memoizedState = to(t, n, i, r);
      return;
    }
  }
  fe.flags |= e, o.memoizedState = to(1 | t, n, i, r);
}
function ic(e, t) {
  return Yo(8390656, 8, e, t);
}
function Us(e, t) {
  return Ii(2048, 8, e, t);
}
function Nd(e, t) {
  return Ii(4, 2, e, t);
}
function Ad(e, t) {
  return Ii(4, 4, e, t);
}
function Td(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Od(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ii(4, 4, Td.bind(null, t, e), n);
}
function Hs() {
}
function Rd(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ms(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function zd(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ms(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function $d(e, t, n) {
  return Pn & 21 ? (St(n, t) || (n = Mf(), fe.lanes |= n, Nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, We = !0), e.memoizedState = n);
}
function vy(e, t) {
  var n = b;
  b = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Bl.transition;
  Bl.transition = {};
  try {
    e(!1), t();
  } finally {
    b = n, Bl.transition = r;
  }
}
function Ld() {
  return ft().memoizedState;
}
function wy(e, t, n) {
  var r = nn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, jd(e)) Dd(t, n);
  else if (n = yd(e, t, n, r), n !== null) {
    var o = Fe();
    wt(n, e, r, o), Fd(n, t, r);
  }
}
function Sy(e, t, n) {
  var r = nn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (jd(e)) Dd(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, u = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = u, St(u, l)) {
        var s = t.interleaved;
        s === null ? (o.next = o, $s(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = yd(e, t, o, r), n !== null && (o = Fe(), wt(n, e, r, o), Fd(n, t, r));
  }
}
function jd(e) {
  var t = e.alternate;
  return e === fe || t !== null && t === fe;
}
function Dd(e, t) {
  Lr = yi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Fd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ws(e, n);
  }
}
var gi = { readContext: ct, useCallback: ze, useContext: ze, useEffect: ze, useImperativeHandle: ze, useInsertionEffect: ze, useLayoutEffect: ze, useMemo: ze, useReducer: ze, useRef: ze, useState: ze, useDebugValue: ze, useDeferredValue: ze, useTransition: ze, useMutableSource: ze, useSyncExternalStore: ze, useId: ze, unstable_isNewReconciler: !1 }, ky = { readContext: ct, useCallback: function(e, t) {
  return xt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ct, useEffect: ic, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Yo(
    4194308,
    4,
    Td.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Yo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Yo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = xt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = xt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = wy.bind(null, fe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = xt();
  return e = { current: e }, t.memoizedState = e;
}, useState: oc, useDebugValue: Hs, useDeferredValue: function(e) {
  return xt().memoizedState = e;
}, useTransition: function() {
  var e = oc(!1), t = e[0];
  return e = vy.bind(null, e[1]), xt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = fe, o = xt();
  if (ue) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = t(), Ee === null) throw Error(z(349));
    Pn & 30 || kd(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, ic(Ed.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, to(9, xd.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = xt(), t = Ee.identifierPrefix;
  if (ue) {
    var n = zt, r = Rt;
    n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = gy++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, xy = {
  readContext: ct,
  useCallback: Rd,
  useContext: ct,
  useEffect: Us,
  useImperativeHandle: Od,
  useInsertionEffect: Nd,
  useLayoutEffect: Ad,
  useMemo: zd,
  useReducer: Ul,
  useRef: Pd,
  useState: function() {
    return Ul(eo);
  },
  useDebugValue: Hs,
  useDeferredValue: function(e) {
    var t = ft();
    return $d(t, Se.memoizedState, e);
  },
  useTransition: function() {
    var e = Ul(eo)[0], t = ft().memoizedState;
    return [e, t];
  },
  useMutableSource: wd,
  useSyncExternalStore: Sd,
  useId: Ld,
  unstable_isNewReconciler: !1
}, Ey = { readContext: ct, useCallback: Rd, useContext: ct, useEffect: Us, useImperativeHandle: Od, useInsertionEffect: Nd, useLayoutEffect: Ad, useMemo: zd, useReducer: Hl, useRef: Pd, useState: function() {
  return Hl(eo);
}, useDebugValue: Hs, useDeferredValue: function(e) {
  var t = ft();
  return Se === null ? t.memoizedState = e : $d(t, Se.memoizedState, e);
}, useTransition: function() {
  var e = Hl(eo)[0], t = ft().memoizedState;
  return [e, t];
}, useMutableSource: wd, useSyncExternalStore: Sd, useId: Ld, unstable_isNewReconciler: !1 };
function mt(e, t) {
  if (e && e.defaultProps) {
    t = de({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ru(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : de({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bi = { isMounted: function(e) {
  return (e = e._reactInternals) ? $n(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Fe(), o = nn(e), i = Lt(r, o);
  i.payload = t, n != null && (i.callback = n), t = en(e, i, o), t !== null && (wt(t, e, o, r), Qo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Fe(), o = nn(e), i = Lt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = en(e, i, o), t !== null && (wt(t, e, o, r), Qo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Fe(), r = nn(e), o = Lt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = en(e, o, r), t !== null && (wt(t, e, r, n), Qo(t, e, r));
} };
function lc(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Yr(n, r) || !Yr(o, i) : !0;
}
function Md(e, t, n) {
  var r = !1, o = sn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ct(i) : (o = Ke(t) ? Cn : je.current, r = t.contextTypes, i = (r = r != null) ? rr(e, o) : sn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function uc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bi.enqueueReplaceState(t, t.state, null);
}
function zu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Ls(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = ct(i) : (i = Ke(t) ? Cn : je.current, o.context = rr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ru(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Bi.enqueueReplaceState(o, o.state, null), hi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ur(e, t) {
  try {
    var n = "", r = t;
    do
      n += bh(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Vl(e, t, n) {
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
var Cy = typeof WeakMap == "function" ? WeakMap : Map;
function Id(e, t, n) {
  n = Lt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    wi || (wi = !0, Vu = r), $u(e, t);
  }, n;
}
function Bd(e, t, n) {
  n = Lt(-1, n), n.tag = 3;
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
    $u(e, t), typeof r != "function" && (tn === null ? tn = /* @__PURE__ */ new Set([this]) : tn.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function sc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Cy();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = My.bind(null, e, t, n), t.then(e, e));
}
function ac(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cc(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Lt(-1, 1), t.tag = 2, en(n, t, 1))), n.lanes |= 1), e);
}
var _y = Ut.ReactCurrentOwner, We = !1;
function De(e, t, n, r) {
  t.child = e === null ? md(t, null, n, r) : ir(t, e.child, n, r);
}
function fc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Jn(t, o), r = Is(e, t, n, r, i, o), n = Bs(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, It(e, t, o)) : (ue && n && Ns(t), t.flags |= 1, De(e, t, r, o), t.child);
}
function dc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Zs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ud(e, t, i, r, o)) : (e = bo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Yr, n(l, r) && e.ref === t.ref) return It(e, t, o);
  }
  return t.flags |= 1, e = rn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ud(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Yr(i, r) && e.ref === t.ref) if (We = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (We = !0);
    else return t.lanes = e.lanes, It(e, t, o);
  }
  return Lu(e, t, n, r, o);
}
function Hd(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, te(Kn, Xe), Xe |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, te(Kn, Xe), Xe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, te(Kn, Xe), Xe |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, te(Kn, Xe), Xe |= r;
  return De(e, t, o, n), t.child;
}
function Vd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Lu(e, t, n, r, o) {
  var i = Ke(n) ? Cn : je.current;
  return i = rr(t, i), Jn(t, o), n = Is(e, t, n, r, i, o), r = Bs(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, It(e, t, o)) : (ue && r && Ns(t), t.flags |= 1, De(e, t, n, o), t.child);
}
function pc(e, t, n, r, o) {
  if (Ke(n)) {
    var i = !0;
    ai(t);
  } else i = !1;
  if (Jn(t, o), t.stateNode === null) Go(e, t), Md(t, n, r), zu(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = ct(c) : (c = Ke(n) ? Cn : je.current, c = rr(t, c));
    var p = n.getDerivedStateFromProps, m = typeof p == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== c) && uc(t, l, r, c), Qt = !1;
    var h = t.memoizedState;
    l.state = h, hi(t, r, l, o), s = t.memoizedState, u !== r || h !== s || Qe.current || Qt ? (typeof p == "function" && (Ru(t, n, p, r), s = t.memoizedState), (u = Qt || lc(t, n, u, r, h, s, c)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = c, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, gd(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : mt(t.type, u), l.props = c, m = t.pendingProps, h = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = ct(s) : (s = Ke(n) ? Cn : je.current, s = rr(t, s));
    var x = n.getDerivedStateFromProps;
    (p = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== m || h !== s) && uc(t, l, r, s), Qt = !1, h = t.memoizedState, l.state = h, hi(t, r, l, o);
    var v = t.memoizedState;
    u !== m || h !== v || Qe.current || Qt ? (typeof x == "function" && (Ru(t, n, x, r), v = t.memoizedState), (c = Qt || lc(t, n, c, r, h, v, s) || !1) ? (p || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, v, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, v, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), l.props = r, l.state = v, l.context = s, r = c) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ju(e, t, n, r, i, o);
}
function ju(e, t, n, r, o, i) {
  Vd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Ja(t, n, !1), It(e, t, i);
  r = t.stateNode, _y.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = ir(t, e.child, null, i), t.child = ir(t, null, u, i)) : De(e, t, u, i), t.memoizedState = r.state, o && Ja(t, n, !0), t.child;
}
function Wd(e) {
  var t = e.stateNode;
  t.pendingContext ? ba(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ba(e, t.context, !1), js(e, t.containerInfo);
}
function hc(e, t, n, r, o) {
  return or(), Ts(o), t.flags |= 256, De(e, t, n, r), t.child;
}
var Du = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qd(e, t, n) {
  var r = t.pendingProps, o = ce.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), te(ce, o & 1), e === null)
    return Tu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Vi(l, r, 0, null), e = kn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Fu(n), t.memoizedState = Du, e) : Vs(t, l));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null)) return Py(e, t, l, r, u, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = rn(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? i = rn(u, i) : (i = kn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Fu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Du, r;
  }
  return i = e.child, e = i.sibling, r = rn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Vs(e, t) {
  return t = Vi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function $o(e, t, n, r) {
  return r !== null && Ts(r), ir(t, e.child, null, n), e = Vs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Py(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Vl(Error(z(422))), $o(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Vi({ mode: "visible", children: r.children }, o, 0, null), i = kn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ir(t, e.child, null, l), t.child.memoizedState = Fu(l), t.memoizedState = Du, i);
  if (!(t.mode & 1)) return $o(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(z(419)), r = Vl(i, r, void 0), $o(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, We || u) {
    if (r = Ee, r !== null) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Mt(e, o), wt(r, e, o, -1));
    }
    return Xs(), r = Vl(Error(z(421))), $o(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Iy.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ze = qt(o.nextSibling), Je = t, ue = !0, gt = null, e !== null && (lt[ut++] = Rt, lt[ut++] = zt, lt[ut++] = _n, Rt = e.id, zt = e.overflow, _n = t), t = Vs(t, r.children), t.flags |= 4096, t);
}
function mc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ou(e.return, t, n);
}
function Wl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Kd(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (De(e, t, r.children, n), r = ce.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && mc(e, n, t);
      else if (e.tag === 19) mc(e, n, t);
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
  if (te(ce, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && mi(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Wl(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && mi(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Wl(t, !0, n, null, i);
      break;
    case "together":
      Wl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Go(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function It(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Nn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = rn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ny(e, t, n) {
  switch (t.tag) {
    case 3:
      Wd(t), or();
      break;
    case 5:
      vd(t);
      break;
    case 1:
      Ke(t.type) && ai(t);
      break;
    case 4:
      js(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      te(di, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (te(ce, ce.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qd(e, t, n) : (te(ce, ce.current & 1), e = It(e, t, n), e !== null ? e.sibling : null);
      te(ce, ce.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Kd(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), te(ce, ce.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Hd(e, t, n);
  }
  return It(e, t, n);
}
var Yd, Mu, Gd, Xd;
Yd = function(e, t) {
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
Mu = function() {
};
Gd = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, wn(_t.current);
    var i = null;
    switch (n) {
      case "input":
        o = lu(e, o), r = lu(e, r), i = [];
        break;
      case "select":
        o = de({}, o, { value: void 0 }), r = de({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = au(e, o), r = au(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ui);
    }
    fu(n, r);
    var l;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var u = o[c];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Br.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = o != null ? o[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Br.hasOwnProperty(c) ? (s != null && c === "onScroll" && re("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Xd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xr(e, t) {
  if (!ue) switch (e.tailMode) {
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
function Ay(e, t, n) {
  var r = t.pendingProps;
  switch (As(t), t.tag) {
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
      return Ke(t.type) && si(), $e(t), null;
    case 3:
      return r = t.stateNode, lr(), oe(Qe), oe(je), Fs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ro(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, gt !== null && (Ku(gt), gt = null))), Mu(e, t), $e(t), null;
    case 5:
      Ds(t);
      var o = wn(Jr.current);
      if (n = t.type, e !== null && t.stateNode != null) Gd(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return $e(t), null;
        }
        if (e = wn(_t.current), Ro(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Et] = t, r[Zr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              re("cancel", r), re("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Nr.length; o++) re(Nr[o], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              re(
                "error",
                r
              ), re("load", r);
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              Ca(r, i), re("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, re("invalid", r);
              break;
            case "textarea":
              Pa(r, i), re("invalid", r);
          }
          fu(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var u = i[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Oo(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Oo(
              r.textContent,
              u,
              e
            ), o = ["children", "" + u]) : Br.hasOwnProperty(l) && u != null && l === "onScroll" && re("scroll", r);
          }
          switch (n) {
            case "input":
              xo(r), _a(r, i, !0);
              break;
            case "textarea":
              xo(r), Na(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ui);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ef(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Et] = t, e[Zr] = r, Yd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = du(n, r), n) {
              case "dialog":
                re("cancel", e), re("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Nr.length; o++) re(Nr[o], e);
                o = r;
                break;
              case "source":
                re("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                re(
                  "error",
                  e
                ), re("load", e), o = r;
                break;
              case "details":
                re("toggle", e), o = r;
                break;
              case "input":
                Ca(e, r), o = lu(e, r), re("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = de({}, r, { value: void 0 }), re("invalid", e);
                break;
              case "textarea":
                Pa(e, r), o = au(e, r), re("invalid", e);
                break;
              default:
                o = r;
            }
            fu(n, o), u = o;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? Pf(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Cf(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Ur(e, s) : typeof s == "number" && Ur(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Br.hasOwnProperty(i) ? s != null && i === "onScroll" && re("scroll", e) : s != null && ps(e, i, s, l));
            }
            switch (n) {
              case "input":
                xo(e), _a(e, r, !1);
                break;
              case "textarea":
                xo(e), Na(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + un(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Gn(e, !!r.multiple, i, !1) : r.defaultValue != null && Gn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ui);
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
      if (e && t.stateNode != null) Xd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (n = wn(Jr.current), wn(_t.current), Ro(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Et] = t, (i = r.nodeValue !== n) && (e = Je, e !== null)) switch (e.tag) {
            case 3:
              Oo(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Oo(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Et] = t, t.stateNode = r;
      }
      return $e(t), null;
    case 13:
      if (oe(ce), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ue && Ze !== null && t.mode & 1 && !(t.flags & 128)) pd(), or(), t.flags |= 98560, i = !1;
        else if (i = Ro(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(z(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(z(317));
            i[Et] = t;
          } else or(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), i = !1;
        } else gt !== null && (Ku(gt), gt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ce.current & 1 ? ke === 0 && (ke = 3) : Xs())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return lr(), Mu(e, t), e === null && Gr(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return zs(t.type._context), $e(t), null;
    case 17:
      return Ke(t.type) && si(), $e(t), null;
    case 19:
      if (oe(ce), i = t.memoizedState, i === null) return $e(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) xr(i, !1);
      else {
        if (ke !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = mi(e), l !== null) {
            for (t.flags |= 128, xr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return te(ce, ce.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ye() > sr && (t.flags |= 128, r = !0, xr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = mi(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !ue) return $e(t), null;
        } else 2 * ye() - i.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, xr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ye(), t.sibling = null, n = ce.current, te(ce, r ? n & 1 | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return Gs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Xe & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function Ty(e, t) {
  switch (As(t), t.tag) {
    case 1:
      return Ke(t.type) && si(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return lr(), oe(Qe), oe(je), Fs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ds(t), null;
    case 13:
      if (oe(ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(z(340));
        or();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return oe(ce), null;
    case 4:
      return lr(), null;
    case 10:
      return zs(t.type._context), null;
    case 22:
    case 23:
      return Gs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Lo = !1, Le = !1, Oy = typeof WeakSet == "function" ? WeakSet : Set, j = null;
function Qn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    he(e, t, r);
  }
  else n.current = null;
}
function Iu(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var yc = !1;
function Ry(e, t) {
  if (xu = oi, e = ed(), Ps(e)) {
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
        var l = 0, u = -1, s = -1, c = 0, p = 0, m = e, h = null;
        t: for (; ; ) {
          for (var x; m !== n || o !== 0 && m.nodeType !== 3 || (u = l + o), m !== i || r !== 0 && m.nodeType !== 3 || (s = l + r), m.nodeType === 3 && (l += m.nodeValue.length), (x = m.firstChild) !== null; )
            h = m, m = x;
          for (; ; ) {
            if (m === e) break t;
            if (h === n && ++c === o && (u = l), h === i && ++p === r && (s = l), (x = m.nextSibling) !== null) break;
            m = h, h = m.parentNode;
          }
          m = x;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Eu = { focusedElem: e, selectionRange: n }, oi = !1, j = t; j !== null; ) if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
  else for (; j !== null; ) {
    t = j;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var E = v.memoizedProps, P = v.memoizedState, d = t.stateNode, a = d.getSnapshotBeforeUpdate(t.elementType === t.type ? E : mt(t.type, E), P);
            d.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var f = t.stateNode.containerInfo;
          f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(z(163));
      }
    } catch (S) {
      he(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, j = e;
      break;
    }
    j = t.return;
  }
  return v = yc, yc = !1, v;
}
function jr(e, t, n) {
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
function Ui(e, t) {
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
function Bu(e) {
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
function Zd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Zd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Et], delete t[Zr], delete t[Pu], delete t[py], delete t[hy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function bd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || bd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Uu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ui));
  else if (r !== 4 && (e = e.child, e !== null)) for (Uu(e, t, n), e = e.sibling; e !== null; ) Uu(e, t, n), e = e.sibling;
}
function Hu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Hu(e, t, n), e = e.sibling; e !== null; ) Hu(e, t, n), e = e.sibling;
}
var Pe = null, yt = !1;
function Vt(e, t, n) {
  for (n = n.child; n !== null; ) Jd(e, t, n), n = n.sibling;
}
function Jd(e, t, n) {
  if (Ct && typeof Ct.onCommitFiberUnmount == "function") try {
    Ct.onCommitFiberUnmount($i, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Le || Qn(n, t);
    case 6:
      var r = Pe, o = yt;
      Pe = null, Vt(e, t, n), Pe = r, yt = o, Pe !== null && (yt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null && (yt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? Fl(e.parentNode, n) : e.nodeType === 1 && Fl(e, n), Qr(e)) : Fl(Pe, n.stateNode));
      break;
    case 4:
      r = Pe, o = yt, Pe = n.stateNode.containerInfo, yt = !0, Vt(e, t, n), Pe = r, yt = o;
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
      Vt(e, t, n);
      break;
    case 1:
      if (!Le && (Qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        he(n, t, u);
      }
      Vt(e, t, n);
      break;
    case 21:
      Vt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Le = (r = Le) || n.memoizedState !== null, Vt(e, t, n), Le = r) : Vt(e, t, n);
      break;
    default:
      Vt(e, t, n);
  }
}
function vc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Oy()), t.forEach(function(r) {
      var o = By.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            Pe = u.stateNode, yt = !1;
            break e;
          case 3:
            Pe = u.stateNode.containerInfo, yt = !0;
            break e;
          case 4:
            Pe = u.stateNode.containerInfo, yt = !0;
            break e;
        }
        u = u.return;
      }
      if (Pe === null) throw Error(z(160));
      Jd(i, l, o), Pe = null, yt = !1;
      var s = o.alternate;
      s !== null && (s.return = null), o.return = null;
    } catch (c) {
      he(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) qd(t, e), t = t.sibling;
}
function qd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ht(t, e), kt(e), r & 4) {
        try {
          jr(3, e, e.return), Ui(3, e);
        } catch (E) {
          he(e, e.return, E);
        }
        try {
          jr(5, e, e.return);
        } catch (E) {
          he(e, e.return, E);
        }
      }
      break;
    case 1:
      ht(t, e), kt(e), r & 512 && n !== null && Qn(n, n.return);
      break;
    case 5:
      if (ht(t, e), kt(e), r & 512 && n !== null && Qn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ur(o, "");
        } catch (E) {
          he(e, e.return, E);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && kf(o, i), du(u, l);
          var c = du(u, i);
          for (l = 0; l < s.length; l += 2) {
            var p = s[l], m = s[l + 1];
            p === "style" ? Pf(o, m) : p === "dangerouslySetInnerHTML" ? Cf(o, m) : p === "children" ? Ur(o, m) : ps(o, p, m, c);
          }
          switch (u) {
            case "input":
              uu(o, i);
              break;
            case "textarea":
              xf(o, i);
              break;
            case "select":
              var h = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var x = i.value;
              x != null ? Gn(o, !!i.multiple, x, !1) : h !== !!i.multiple && (i.defaultValue != null ? Gn(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Gn(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Zr] = i;
        } catch (E) {
          he(e, e.return, E);
        }
      }
      break;
    case 6:
      if (ht(t, e), kt(e), r & 4) {
        if (e.stateNode === null) throw Error(z(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (E) {
          he(e, e.return, E);
        }
      }
      break;
    case 3:
      if (ht(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Qr(t.containerInfo);
      } catch (E) {
        he(e, e.return, E);
      }
      break;
    case 4:
      ht(t, e), kt(e);
      break;
    case 13:
      ht(t, e), kt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ks = ye())), r & 4 && vc(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Le = (c = Le) || p, ht(t, e), Le = c) : ht(t, e), kt(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !p && e.mode & 1) for (j = e, p = e.child; p !== null; ) {
          for (m = j = p; j !== null; ) {
            switch (h = j, x = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                jr(4, h, h.return);
                break;
              case 1:
                Qn(h, h.return);
                var v = h.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (E) {
                    he(r, n, E);
                  }
                }
                break;
              case 5:
                Qn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  Sc(m);
                  continue;
                }
            }
            x !== null ? (x.return = h, j = x) : Sc(m);
          }
          p = p.sibling;
        }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                o = m.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = _f("display", l));
              } catch (E) {
                he(e, e.return, E);
              }
            }
          } else if (m.tag === 6) {
            if (p === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (E) {
              he(e, e.return, E);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), m = m.return;
          }
          p === m && (p = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      ht(t, e), kt(e), r & 4 && vc(e);
      break;
    case 21:
      break;
    default:
      ht(
        t,
        e
      ), kt(e);
  }
}
function kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ur(o, ""), r.flags &= -33);
          var i = gc(e);
          Hu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = gc(e);
          Uu(e, u, l);
          break;
        default:
          throw Error(z(161));
      }
    } catch (s) {
      he(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zy(e, t, n) {
  j = e, ep(e);
}
function ep(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Lo;
      if (!l) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || Le;
        u = Lo;
        var c = Le;
        if (Lo = l, (Le = s) && !c) for (j = o; j !== null; ) l = j, s = l.child, l.tag === 22 && l.memoizedState !== null ? kc(o) : s !== null ? (s.return = l, j = s) : kc(o);
        for (; i !== null; ) j = i, ep(i), i = i.sibling;
        j = o, Lo = u, Le = c;
      }
      wc(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, j = i) : wc(e);
  }
}
function wc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Le || Ui(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Le) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && rc(t, i, r);
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
              rc(t, l, n);
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
              var c = t.alternate;
              if (c !== null) {
                var p = c.memoizedState;
                if (p !== null) {
                  var m = p.dehydrated;
                  m !== null && Qr(m);
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
            throw Error(z(163));
        }
        Le || t.flags & 512 && Bu(t);
      } catch (h) {
        he(t, t.return, h);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function Sc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function kc(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ui(4, t);
          } catch (s) {
            he(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              he(t, o, s);
            }
          }
          var i = t.return;
          try {
            Bu(t);
          } catch (s) {
            he(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Bu(t);
          } catch (s) {
            he(t, l, s);
          }
      }
    } catch (s) {
      he(t, t.return, s);
    }
    if (t === e) {
      j = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, j = u;
      break;
    }
    j = t.return;
  }
}
var $y = Math.ceil, vi = Ut.ReactCurrentDispatcher, Ws = Ut.ReactCurrentOwner, at = Ut.ReactCurrentBatchConfig, X = 0, Ee = null, ve = null, Ae = 0, Xe = 0, Kn = dn(0), ke = 0, no = null, Nn = 0, Hi = 0, Qs = 0, Dr = null, He = null, Ks = 0, sr = 1 / 0, Tt = null, wi = !1, Vu = null, tn = null, jo = !1, Xt = null, Si = 0, Fr = 0, Wu = null, Xo = -1, Zo = 0;
function Fe() {
  return X & 6 ? ye() : Xo !== -1 ? Xo : Xo = ye();
}
function nn(e) {
  return e.mode & 1 ? X & 2 && Ae !== 0 ? Ae & -Ae : yy.transition !== null ? (Zo === 0 && (Zo = Mf()), Zo) : (e = b, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qf(e.type)), e) : 1;
}
function wt(e, t, n, r) {
  if (50 < Fr) throw Fr = 0, Wu = null, Error(z(185));
  ao(e, n, r), (!(X & 2) || e !== Ee) && (e === Ee && (!(X & 2) && (Hi |= n), ke === 4 && Yt(e, Ae)), Ye(e, r), n === 1 && X === 0 && !(t.mode & 1) && (sr = ye() + 500, Mi && pn()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  ym(e, t);
  var r = ri(e, e === Ee ? Ae : 0);
  if (r === 0) n !== null && Oa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Oa(n), t === 1) e.tag === 0 ? my(xc.bind(null, e)) : cd(xc.bind(null, e)), fy(function() {
      !(X & 6) && pn();
    }), n = null;
    else {
      switch (If(r)) {
        case 1:
          n = vs;
          break;
        case 4:
          n = Df;
          break;
        case 16:
          n = ni;
          break;
        case 536870912:
          n = Ff;
          break;
        default:
          n = ni;
      }
      n = sp(n, tp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function tp(e, t) {
  if (Xo = -1, Zo = 0, X & 6) throw Error(z(327));
  var n = e.callbackNode;
  if (qn() && e.callbackNode !== n) return null;
  var r = ri(e, e === Ee ? Ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ki(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var i = rp();
    (Ee !== e || Ae !== t) && (Tt = null, sr = ye() + 500, Sn(e, t));
    do
      try {
        Dy();
        break;
      } catch (u) {
        np(e, u);
      }
    while (!0);
    Rs(), vi.current = i, X = o, ve !== null ? t = 0 : (Ee = null, Ae = 0, t = ke);
  }
  if (t !== 0) {
    if (t === 2 && (o = gu(e), o !== 0 && (r = o, t = Qu(e, o))), t === 1) throw n = no, Sn(e, 0), Yt(e, r), Ye(e, ye()), n;
    if (t === 6) Yt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Ly(o) && (t = ki(e, r), t === 2 && (i = gu(e), i !== 0 && (r = i, t = Qu(e, i))), t === 1)) throw n = no, Sn(e, 0), Yt(e, r), Ye(e, ye()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          mn(e, He, Tt);
          break;
        case 3:
          if (Yt(e, r), (r & 130023424) === r && (t = Ks + 500 - ye(), 10 < t)) {
            if (ri(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Fe(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = _u(mn.bind(null, e, He, Tt), t);
            break;
          }
          mn(e, He, Tt);
          break;
        case 4:
          if (Yt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - vt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $y(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _u(mn.bind(null, e, He, Tt), r);
            break;
          }
          mn(e, He, Tt);
          break;
        case 5:
          mn(e, He, Tt);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Ye(e, ye()), e.callbackNode === n ? tp.bind(null, e) : null;
}
function Qu(e, t) {
  var n = Dr;
  return e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256), e = ki(e, t), e !== 2 && (t = He, He = n, t !== null && Ku(t)), e;
}
function Ku(e) {
  He === null ? He = e : He.push.apply(He, e);
}
function Ly(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!St(i(), o)) return !1;
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
  for (t &= ~Qs, t &= ~Hi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - vt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function xc(e) {
  if (X & 6) throw Error(z(327));
  qn();
  var t = ri(e, 0);
  if (!(t & 1)) return Ye(e, ye()), null;
  var n = ki(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gu(e);
    r !== 0 && (t = r, n = Qu(e, r));
  }
  if (n === 1) throw n = no, Sn(e, 0), Yt(e, t), Ye(e, ye()), n;
  if (n === 6) throw Error(z(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, mn(e, He, Tt), Ye(e, ye()), null;
}
function Ys(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    X = n, X === 0 && (sr = ye() + 500, Mi && pn());
  }
}
function An(e) {
  Xt !== null && Xt.tag === 0 && !(X & 6) && qn();
  var t = X;
  X |= 1;
  var n = at.transition, r = b;
  try {
    if (at.transition = null, b = 1, e) return e();
  } finally {
    b = r, at.transition = n, X = t, !(X & 6) && pn();
  }
}
function Gs() {
  Xe = Kn.current, oe(Kn);
}
function Sn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, cy(n)), ve !== null) for (n = ve.return; n !== null; ) {
    var r = n;
    switch (As(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && si();
        break;
      case 3:
        lr(), oe(Qe), oe(je), Fs();
        break;
      case 5:
        Ds(r);
        break;
      case 4:
        lr();
        break;
      case 13:
        oe(ce);
        break;
      case 19:
        oe(ce);
        break;
      case 10:
        zs(r.type._context);
        break;
      case 22:
      case 23:
        Gs();
    }
    n = n.return;
  }
  if (Ee = e, ve = e = rn(e.current, null), Ae = Xe = t, ke = 0, no = null, Qs = Hi = Nn = 0, He = Dr = null, vn !== null) {
    for (t = 0; t < vn.length; t++) if (n = vn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    vn = null;
  }
  return e;
}
function np(e, t) {
  do {
    var n = ve;
    try {
      if (Rs(), Ko.current = gi, yi) {
        for (var r = fe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        yi = !1;
      }
      if (Pn = 0, xe = Se = fe = null, Lr = !1, qr = 0, Ws.current = null, n === null || n.return === null) {
        ke = 1, no = t, ve = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = Ae, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, p = u, m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = p.alternate;
            h ? (p.updateQueue = h.updateQueue, p.memoizedState = h.memoizedState, p.lanes = h.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var x = ac(l);
          if (x !== null) {
            x.flags &= -257, cc(x, l, u, i, t), x.mode & 1 && sc(i, c, t), t = x, s = c;
            var v = t.updateQueue;
            if (v === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(s), t.updateQueue = E;
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              sc(i, c, t), Xs();
              break e;
            }
            s = Error(z(426));
          }
        } else if (ue && u.mode & 1) {
          var P = ac(l);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), cc(P, l, u, i, t), Ts(ur(s, u));
            break e;
          }
        }
        i = s = ur(s, u), ke !== 4 && (ke = 2), Dr === null ? Dr = [i] : Dr.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Id(i, s, t);
              nc(i, d);
              break e;
            case 1:
              u = s;
              var a = i.type, f = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (tn === null || !tn.has(f)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = Bd(i, u, t);
                nc(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ip(n);
    } catch (_) {
      t = _, ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function rp() {
  var e = vi.current;
  return vi.current = gi, e === null ? gi : e;
}
function Xs() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4), Ee === null || !(Nn & 268435455) && !(Hi & 268435455) || Yt(Ee, Ae);
}
function ki(e, t) {
  var n = X;
  X |= 2;
  var r = rp();
  (Ee !== e || Ae !== t) && (Tt = null, Sn(e, t));
  do
    try {
      jy();
      break;
    } catch (o) {
      np(e, o);
    }
  while (!0);
  if (Rs(), X = n, vi.current = r, ve !== null) throw Error(z(261));
  return Ee = null, Ae = 0, ke;
}
function jy() {
  for (; ve !== null; ) op(ve);
}
function Dy() {
  for (; ve !== null && !um(); ) op(ve);
}
function op(e) {
  var t = up(e.alternate, e, Xe);
  e.memoizedProps = e.pendingProps, t === null ? ip(e) : ve = t, Ws.current = null;
}
function ip(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ty(n, t), n !== null) {
        n.flags &= 32767, ve = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ke = 6, ve = null;
        return;
      }
    } else if (n = Ay(n, t, Xe), n !== null) {
      ve = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function mn(e, t, n) {
  var r = b, o = at.transition;
  try {
    at.transition = null, b = 1, Fy(e, t, n, r);
  } finally {
    at.transition = o, b = r;
  }
  return null;
}
function Fy(e, t, n, r) {
  do
    qn();
  while (Xt !== null);
  if (X & 6) throw Error(z(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (gm(e, i), e === Ee && (ve = Ee = null, Ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jo || (jo = !0, sp(ni, function() {
    return qn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = at.transition, at.transition = null;
    var l = b;
    b = 1;
    var u = X;
    X |= 4, Ws.current = null, Ry(e, n), qd(n, e), ry(Eu), oi = !!xu, Eu = xu = null, e.current = n, zy(n), sm(), X = u, b = l, at.transition = i;
  } else e.current = n;
  if (jo && (jo = !1, Xt = e, Si = o), i = e.pendingLanes, i === 0 && (tn = null), fm(n.stateNode), Ye(e, ye()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (wi) throw wi = !1, e = Vu, Vu = null, e;
  return Si & 1 && e.tag !== 0 && qn(), i = e.pendingLanes, i & 1 ? e === Wu ? Fr++ : (Fr = 0, Wu = e) : Fr = 0, pn(), null;
}
function qn() {
  if (Xt !== null) {
    var e = If(Si), t = at.transition, n = b;
    try {
      if (at.transition = null, b = 16 > e ? 16 : e, Xt === null) var r = !1;
      else {
        if (e = Xt, Xt = null, Si = 0, X & 6) throw Error(z(331));
        var o = X;
        for (X |= 4, j = e.current; j !== null; ) {
          var i = j, l = i.child;
          if (j.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (j = c; j !== null; ) {
                  var p = j;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(8, p, i);
                  }
                  var m = p.child;
                  if (m !== null) m.return = p, j = m;
                  else for (; j !== null; ) {
                    p = j;
                    var h = p.sibling, x = p.return;
                    if (Zd(p), p === c) {
                      j = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = x, j = h;
                      break;
                    }
                    j = x;
                  }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var E = v.child;
                if (E !== null) {
                  v.child = null;
                  do {
                    var P = E.sibling;
                    E.sibling = null, E = P;
                  } while (E !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, j = l;
          else e: for (; j !== null; ) {
            if (i = j, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                jr(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, j = d;
              break e;
            }
            j = i.return;
          }
        }
        var a = e.current;
        for (j = a; j !== null; ) {
          l = j;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) f.return = l, j = f;
          else e: for (l = a; j !== null; ) {
            if (u = j, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Ui(9, u);
              }
            } catch (_) {
              he(u, u.return, _);
            }
            if (u === l) {
              j = null;
              break e;
            }
            var S = u.sibling;
            if (S !== null) {
              S.return = u.return, j = S;
              break e;
            }
            j = u.return;
          }
        }
        if (X = o, pn(), Ct && typeof Ct.onPostCommitFiberRoot == "function") try {
          Ct.onPostCommitFiberRoot($i, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      b = n, at.transition = t;
    }
  }
  return !1;
}
function Ec(e, t, n) {
  t = ur(n, t), t = Id(e, t, 1), e = en(e, t, 1), t = Fe(), e !== null && (ao(e, 1, t), Ye(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) Ec(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ec(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tn === null || !tn.has(r))) {
        e = ur(n, e), e = Bd(t, e, 1), t = en(t, e, 1), e = Fe(), t !== null && (ao(t, 1, e), Ye(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function My(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Fe(), e.pingedLanes |= e.suspendedLanes & n, Ee === e && (Ae & n) === n && (ke === 4 || ke === 3 && (Ae & 130023424) === Ae && 500 > ye() - Ks ? Sn(e, 0) : Qs |= n), Ye(e, t);
}
function lp(e, t) {
  t === 0 && (e.mode & 1 ? (t = _o, _o <<= 1, !(_o & 130023424) && (_o = 4194304)) : t = 1);
  var n = Fe();
  e = Mt(e, t), e !== null && (ao(e, t, n), Ye(e, n));
}
function Iy(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), lp(e, n);
}
function By(e, t) {
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
      throw Error(z(314));
  }
  r !== null && r.delete(t), lp(e, n);
}
var up;
up = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Qe.current) We = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return We = !1, Ny(e, t, n);
    We = !!(e.flags & 131072);
  }
  else We = !1, ue && t.flags & 1048576 && fd(t, fi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Go(e, t), e = t.pendingProps;
      var o = rr(t, je.current);
      Jn(t, n), o = Is(null, t, r, e, o, n);
      var i = Bs();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (i = !0, ai(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ls(t), o.updater = Bi, t.stateNode = o, o._reactInternals = t, zu(t, r, e, n), t = ju(null, t, r, !0, i, n)) : (t.tag = 0, ue && i && Ns(t), De(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Go(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Hy(r), e = mt(r, e), o) {
          case 0:
            t = Lu(null, t, r, e, n);
            break e;
          case 1:
            t = pc(null, t, r, e, n);
            break e;
          case 11:
            t = fc(null, t, r, e, n);
            break e;
          case 14:
            t = dc(null, t, r, mt(r.type, e), n);
            break e;
        }
        throw Error(z(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), Lu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), pc(e, t, r, o, n);
    case 3:
      e: {
        if (Wd(t), e === null) throw Error(z(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, gd(e, t), hi(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = ur(Error(z(423)), t), t = hc(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = ur(Error(z(424)), t), t = hc(e, t, r, n, o);
          break e;
        } else for (Ze = qt(t.stateNode.containerInfo.firstChild), Je = t, ue = !0, gt = null, n = md(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (or(), r === o) {
            t = It(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return vd(t), e === null && Tu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Cu(r, o) ? l = null : i !== null && Cu(r, i) && (t.flags |= 32), Vd(e, t), De(e, t, l, n), t.child;
    case 6:
      return e === null && Tu(t), null;
    case 13:
      return Qd(e, t, n);
    case 4:
      return js(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ir(t, null, r, n) : De(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), fc(e, t, r, o, n);
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, te(di, r._currentValue), r._currentValue = l, i !== null) if (St(i.value, l)) {
          if (i.children === o.children && !Qe.current) {
            t = It(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            l = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = Lt(-1, n & -n), s.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var p = c.pending;
                    p === null ? s.next = s : (s.next = p.next, p.next = s), c.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Ou(
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
            if (l = i.return, l === null) throw Error(z(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Ou(l, n, t), l = i.sibling;
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
        De(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Jn(t, n), o = ct(o), r = r(o), t.flags |= 1, De(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = mt(r, t.pendingProps), o = mt(r.type, o), dc(e, t, r, o, n);
    case 15:
      return Ud(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), Go(e, t), t.tag = 1, Ke(r) ? (e = !0, ai(t)) : e = !1, Jn(t, n), Md(t, r, o), zu(t, r, o, n), ju(null, t, r, !0, e, n);
    case 19:
      return Kd(e, t, n);
    case 22:
      return Hd(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function sp(e, t) {
  return jf(e, t);
}
function Uy(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function st(e, t, n, r) {
  return new Uy(e, t, n, r);
}
function Zs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Hy(e) {
  if (typeof e == "function") return Zs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ms) return 11;
    if (e === ys) return 14;
  }
  return 2;
}
function rn(e, t) {
  var n = e.alternate;
  return n === null ? (n = st(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function bo(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") Zs(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Dn:
      return kn(n.children, o, i, t);
    case hs:
      l = 8, o |= 8;
      break;
    case nu:
      return e = st(12, n, t, o | 2), e.elementType = nu, e.lanes = i, e;
    case ru:
      return e = st(13, n, t, o), e.elementType = ru, e.lanes = i, e;
    case ou:
      return e = st(19, n, t, o), e.elementType = ou, e.lanes = i, e;
    case vf:
      return Vi(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case yf:
          l = 10;
          break e;
        case gf:
          l = 9;
          break e;
        case ms:
          l = 11;
          break e;
        case ys:
          l = 14;
          break e;
        case Wt:
          l = 16, r = null;
          break e;
      }
      throw Error(z(130, e == null ? e : typeof e, ""));
  }
  return t = st(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function kn(e, t, n, r) {
  return e = st(7, e, r, t), e.lanes = n, e;
}
function Vi(e, t, n, r) {
  return e = st(22, e, r, t), e.elementType = vf, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ql(e, t, n) {
  return e = st(6, e, null, t), e.lanes = n, e;
}
function Kl(e, t, n) {
  return t = st(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Vy(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pl(0), this.expirationTimes = Pl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function bs(e, t, n, r, o, i, l, u, s) {
  return e = new Vy(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = st(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ls(i), e;
}
function Wy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: jn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ap(e) {
  if (!e) return sn;
  e = e._reactInternals;
  e: {
    if ($n(e) !== e || e.tag !== 1) throw Error(z(170));
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
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n)) return ad(e, n, t);
  }
  return t;
}
function cp(e, t, n, r, o, i, l, u, s) {
  return e = bs(n, r, !0, e, o, i, l, u, s), e.context = ap(null), n = e.current, r = Fe(), o = nn(n), i = Lt(r, o), i.callback = t ?? null, en(n, i, o), e.current.lanes = o, ao(e, o, r), Ye(e, r), e;
}
function Wi(e, t, n, r) {
  var o = t.current, i = Fe(), l = nn(o);
  return n = ap(n), t.context === null ? t.context = n : t.pendingContext = n, t = Lt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = en(o, t, l), e !== null && (wt(e, o, l, i), Qo(e, o, l)), l;
}
function xi(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Js(e, t) {
  Cc(e, t), (e = e.alternate) && Cc(e, t);
}
function Qy() {
  return null;
}
var fp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function qs(e) {
  this._internalRoot = e;
}
Qi.prototype.render = qs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  Wi(e, t, null, null);
};
Qi.prototype.unmount = qs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    An(function() {
      Wi(null, e, null, null);
    }), t[Ft] = null;
  }
};
function Qi(e) {
  this._internalRoot = e;
}
Qi.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Hf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && Wf(e);
  }
};
function ea(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ki(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function _c() {
}
function Ky(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = xi(l);
        i.call(c);
      };
    }
    var l = cp(t, r, e, 0, null, !1, !1, "", _c);
    return e._reactRootContainer = l, e[Ft] = l.current, Gr(e.nodeType === 8 ? e.parentNode : e), An(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = xi(s);
      u.call(c);
    };
  }
  var s = bs(e, 0, !1, null, null, !1, !1, "", _c);
  return e._reactRootContainer = s, e[Ft] = s.current, Gr(e.nodeType === 8 ? e.parentNode : e), An(function() {
    Wi(t, s, n, r);
  }), s;
}
function Yi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var s = xi(l);
        u.call(s);
      };
    }
    Wi(t, l, e, o);
  } else l = Ky(n, t, e, o, r);
  return xi(l);
}
Bf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pr(t.pendingLanes);
        n !== 0 && (ws(t, n | 1), Ye(t, ye()), !(X & 6) && (sr = ye() + 500, pn()));
      }
      break;
    case 13:
      An(function() {
        var r = Mt(e, 1);
        if (r !== null) {
          var o = Fe();
          wt(r, e, 1, o);
        }
      }), Js(e, 1);
  }
};
Ss = function(e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728);
    if (t !== null) {
      var n = Fe();
      wt(t, e, 134217728, n);
    }
    Js(e, 134217728);
  }
};
Uf = function(e) {
  if (e.tag === 13) {
    var t = nn(e), n = Mt(e, t);
    if (n !== null) {
      var r = Fe();
      wt(n, e, t, r);
    }
    Js(e, t);
  }
};
Hf = function() {
  return b;
};
Vf = function(e, t) {
  var n = b;
  try {
    return b = e, t();
  } finally {
    b = n;
  }
};
hu = function(e, t, n) {
  switch (t) {
    case "input":
      if (uu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Fi(r);
            if (!o) throw Error(z(90));
            Sf(r), uu(r, o);
          }
        }
      }
      break;
    case "textarea":
      xf(e, n);
      break;
    case "select":
      t = n.value, t != null && Gn(e, !!n.multiple, t, !1);
  }
};
Tf = Ys;
Of = An;
var Yy = { usingClientEntryPoint: !1, Events: [fo, Bn, Fi, Nf, Af, Ys] }, Er = { findFiberByHostInstance: gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Gy = { bundleType: Er.bundleType, version: Er.version, rendererPackageName: Er.rendererPackageName, rendererConfig: Er.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = $f(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Er.findFiberByHostInstance || Qy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Do = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Do.isDisabled && Do.supportsFiber) try {
    $i = Do.inject(Gy), Ct = Do;
  } catch {
  }
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yy;
tt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ea(t)) throw Error(z(200));
  return Wy(e, t, null, n);
};
tt.createRoot = function(e, t) {
  if (!ea(e)) throw Error(z(299));
  var n = !1, r = "", o = fp;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = bs(e, 1, !1, null, null, n, !1, r, o), e[Ft] = t.current, Gr(e.nodeType === 8 ? e.parentNode : e), new qs(t);
};
tt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
  return e = $f(t), e = e === null ? null : e.stateNode, e;
};
tt.flushSync = function(e) {
  return An(e);
};
tt.hydrate = function(e, t, n) {
  if (!Ki(t)) throw Error(z(200));
  return Yi(null, e, t, !0, n);
};
tt.hydrateRoot = function(e, t, n) {
  if (!ea(e)) throw Error(z(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = fp;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = cp(t, null, e, 1, n ?? null, o, !1, i, l), e[Ft] = t.current, Gr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Qi(t);
};
tt.render = function(e, t, n) {
  if (!Ki(t)) throw Error(z(200));
  return Yi(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function(e) {
  if (!Ki(e)) throw Error(z(40));
  return e._reactRootContainer ? (An(function() {
    Yi(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ft] = null;
    });
  }), !0) : !1;
};
tt.unstable_batchedUpdates = Ys;
tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ki(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return Yi(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function dp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dp);
    } catch (e) {
      console.error(e);
    }
}
dp(), df.exports = tt;
var pp = df.exports;
const W0 = /* @__PURE__ */ Ri(pp);
var Xy, Pc = pp;
Xy = Pc.createRoot, Pc.hydrateRoot;
var hp = { exports: {} }, mp = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho = Ve;
function Zy(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var by = typeof Object.is == "function" ? Object.is : Zy, Jy = ho.useSyncExternalStore, qy = ho.useRef, eg = ho.useEffect, tg = ho.useMemo, ng = ho.useDebugValue;
mp.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = qy(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else l = i.current;
  i = tg(function() {
    function s(x) {
      if (!c) {
        if (c = !0, p = x, x = r(x), o !== void 0 && l.hasValue) {
          var v = l.value;
          if (o(v, x)) return m = v;
        }
        return m = x;
      }
      if (v = m, by(p, x)) return v;
      var E = r(x);
      return o !== void 0 && o(v, E) ? v : (p = x, m = E);
    }
    var c = !1, p, m, h = n === void 0 ? null : n;
    return [function() {
      return s(t());
    }, h === null ? void 0 : function() {
      return s(h());
    }];
  }, [t, n, r, o]);
  var u = Jy(e, i[0], i[1]);
  return eg(function() {
    l.hasValue = !0, l.value = u;
  }, [u]), ng(u), u;
};
hp.exports = mp;
var rg = hp.exports, be = (
  // prettier-ignore
  // @ts-ignore
  "default" in Sa ? ln : Sa
), Nc = Symbol.for("react-redux-context"), Ac = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function og() {
  if (!be.createContext)
    return {};
  const e = Ac[Nc] ?? (Ac[Nc] = /* @__PURE__ */ new Map());
  let t = e.get(be.createContext);
  return t || (t = be.createContext(
    null
  ), e.set(be.createContext, t)), t;
}
var an = /* @__PURE__ */ og(), ig = () => {
  throw new Error("uSES not initialized!");
};
function ta(e = an) {
  return function() {
    return be.useContext(e);
  };
}
var yp = /* @__PURE__ */ ta(), gp = ig, lg = (e) => {
  gp = e;
}, ug = (e, t) => e === t;
function sg(e = an) {
  const t = e === an ? yp : ta(e), n = (r, o = {}) => {
    const { equalityFn: i = ug, devModeChecks: l = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: u,
      subscription: s,
      getServerState: c,
      stabilityCheck: p,
      identityFunctionCheck: m
    } = t();
    be.useRef(!0);
    const h = be.useCallback(
      {
        [r.name](v) {
          return r(v);
        }
      }[r.name],
      [r, p, l.stabilityCheck]
    ), x = gp(
      s.addNestedSub,
      u.getState,
      c || u.getState,
      h,
      i
    );
    return be.useDebugValue(x), x;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var vp = /* @__PURE__ */ sg();
function wp(e) {
  e();
}
function ag() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      wp(() => {
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
var Tc = {
  notify() {
  },
  get: () => []
};
function cg(e, t) {
  let n, r = Tc, o = 0, i = !1;
  function l(E) {
    p();
    const P = r.subscribe(E);
    let d = !1;
    return () => {
      d || (d = !0, P(), m());
    };
  }
  function u() {
    r.notify();
  }
  function s() {
    v.onStateChange && v.onStateChange();
  }
  function c() {
    return i;
  }
  function p() {
    o++, n || (n = e.subscribe(s), r = ag());
  }
  function m() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Tc);
  }
  function h() {
    i || (i = !0, p());
  }
  function x() {
    i && (i = !1, m());
  }
  const v = {
    addNestedSub: l,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: c,
    trySubscribe: h,
    tryUnsubscribe: x,
    getListeners: () => r
  };
  return v;
}
var fg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", dg = typeof navigator < "u" && navigator.product === "ReactNative", pg = fg || dg ? be.useLayoutEffect : be.useEffect;
function Oc(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Q0(e, t) {
  if (Oc(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Oc(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
function hg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const l = be.useMemo(() => {
    const c = cg(e);
    return {
      store: e,
      subscription: c,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), u = be.useMemo(() => e.getState(), [e]);
  pg(() => {
    const { subscription: c } = l;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), u !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [l, u]);
  const s = t || an;
  return /* @__PURE__ */ be.createElement(s.Provider, { value: l }, n);
}
var K0 = hg;
function Sp(e = an) {
  const t = e === an ? yp : (
    // @ts-ignore
    ta(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var mg = /* @__PURE__ */ Sp();
function yg(e = an) {
  const t = e === an ? mg : Sp(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var gg = /* @__PURE__ */ yg(), Y0 = wp;
lg(rg.useSyncExternalStoreWithSelector);
function _e(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var vg = typeof Symbol == "function" && Symbol.observable || "@@observable", Rc = vg, Yl = () => Math.random().toString(36).substring(7).split("").join("."), wg = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Yl()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Yl()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Yl()}`
}, Ei = wg;
function na(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function kp(e, t, n) {
  if (typeof e != "function")
    throw new Error(_e(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(_e(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(_e(1));
    return n(kp)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), l = i, u = 0, s = !1;
  function c() {
    l === i && (l = /* @__PURE__ */ new Map(), i.forEach((P, d) => {
      l.set(d, P);
    }));
  }
  function p() {
    if (s)
      throw new Error(_e(3));
    return o;
  }
  function m(P) {
    if (typeof P != "function")
      throw new Error(_e(4));
    if (s)
      throw new Error(_e(5));
    let d = !0;
    c();
    const a = u++;
    return l.set(a, P), function() {
      if (d) {
        if (s)
          throw new Error(_e(6));
        d = !1, c(), l.delete(a), i = null;
      }
    };
  }
  function h(P) {
    if (!na(P))
      throw new Error(_e(7));
    if (typeof P.type > "u")
      throw new Error(_e(8));
    if (typeof P.type != "string")
      throw new Error(_e(17));
    if (s)
      throw new Error(_e(9));
    try {
      s = !0, o = r(o, P);
    } finally {
      s = !1;
    }
    return (i = l).forEach((a) => {
      a();
    }), P;
  }
  function x(P) {
    if (typeof P != "function")
      throw new Error(_e(10));
    r = P, h({
      type: Ei.REPLACE
    });
  }
  function v() {
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
      subscribe(d) {
        if (typeof d != "object" || d === null)
          throw new Error(_e(11));
        function a() {
          const S = d;
          S.next && S.next(p());
        }
        return a(), {
          unsubscribe: P(a)
        };
      },
      [Rc]() {
        return this;
      }
    };
  }
  return h({
    type: Ei.INIT
  }), {
    dispatch: h,
    subscribe: m,
    getState: p,
    replaceReducer: x,
    [Rc]: v
  };
}
function Sg(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Ei.INIT
    }) > "u")
      throw new Error(_e(12));
    if (typeof n(void 0, {
      type: Ei.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(_e(13));
  });
}
function kg(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const l = t[i];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  const r = Object.keys(n);
  let o;
  try {
    Sg(n);
  } catch (i) {
    o = i;
  }
  return function(l = {}, u) {
    if (o)
      throw o;
    let s = !1;
    const c = {};
    for (let p = 0; p < r.length; p++) {
      const m = r[p], h = n[m], x = l[m], v = h(x, u);
      if (typeof v > "u")
        throw u && u.type, new Error(_e(14));
      c[m] = v, s = s || v !== x;
    }
    return s = s || r.length !== Object.keys(l).length, s ? c : l;
  };
}
function Ci(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function xg(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(_e(15));
    };
    const l = {
      getState: o.getState,
      dispatch: (s, ...c) => i(s, ...c)
    }, u = e.map((s) => s(l));
    return i = Ci(...u)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function xp(e) {
  return na(e) && "type" in e && typeof e.type == "string";
}
var ra = Symbol.for("immer-nothing"), Mr = Symbol.for("immer-draftable"), Ge = Symbol.for("immer-state");
function Ne(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Tn = Object.getPrototypeOf;
function Bt(e) {
  return !!e && !!e[Ge];
}
function Pt(e) {
  var t;
  return e ? Ep(e) || Array.isArray(e) || !!e[Mr] || !!((t = e.constructor) != null && t[Mr]) || mo(e) || yo(e) : !1;
}
var Eg = Object.prototype.constructor.toString();
function Ep(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Tn(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Eg;
}
function G0(e) {
  return Bt(e) || Ne(15, e), e[Ge].base_;
}
function ro(e, t) {
  On(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function On(e) {
  const t = e[Ge];
  return t ? t.type_ : Array.isArray(e) ? 1 : mo(e) ? 2 : yo(e) ? 3 : 0;
}
function oo(e, t) {
  return On(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Gl(e, t) {
  return On(e) === 2 ? e.get(t) : e[t];
}
function Cp(e, t, n) {
  const r = On(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function Cg(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function mo(e) {
  return e instanceof Map;
}
function yo(e) {
  return e instanceof Set;
}
function yn(e) {
  return e.copy_ || e.base_;
}
function Yu(e, t) {
  if (mo(e))
    return new Map(e);
  if (yo(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Ep(e);
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
    return Object.create(Tn(e), r);
  } else {
    const r = Tn(e);
    if (r !== null && n)
      return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function oa(e, t = !1) {
  return Gi(e) || Bt(e) || !Pt(e) || (On(e) > 1 && (e.set = e.add = e.clear = e.delete = _g), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => oa(r, !0))), e;
}
function _g() {
  Ne(2);
}
function Gi(e) {
  return Object.isFrozen(e);
}
var Gu = {};
function Rn(e) {
  const t = Gu[e];
  return t || Ne(0, e), t;
}
function Pg(e, t) {
  Gu[e] || (Gu[e] = t);
}
var io;
function _p() {
  return io;
}
function Ng(e, t) {
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
function zc(e, t) {
  t && (Rn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Xu(e) {
  Zu(e), e.drafts_.forEach(Ag), e.drafts_ = null;
}
function Zu(e) {
  e === io && (io = e.parent_);
}
function $c(e) {
  return io = Ng(io, e);
}
function Ag(e) {
  const t = e[Ge];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Lc(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Ge].modified_ && (Xu(t), Ne(4)), Pt(e) && (e = _i(t, e), t.parent_ || Pi(t, e)), t.patches_ && Rn("Patches").generateReplacementPatches_(
    n[Ge].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = _i(t, n, []), Xu(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== ra ? e : void 0;
}
function _i(e, t, n) {
  if (Gi(t))
    return t;
  const r = t[Ge];
  if (!r)
    return ro(
      t,
      (o, i) => jc(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Pi(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, l = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), l = !0), ro(
      i,
      (u, s) => jc(e, r, o, u, s, n, l)
    ), Pi(e, o, !1), n && e.patches_ && Rn("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function jc(e, t, n, r, o, i, l) {
  if (Bt(o)) {
    const u = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !oo(t.assigned_, r) ? i.concat(r) : void 0, s = _i(e, o, u);
    if (Cp(n, r, s), Bt(s))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else l && n.add(o);
  if (Pt(o) && !Gi(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    _i(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Pi(e, o);
  }
}
function Pi(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && oa(t, n);
}
function Tg(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : _p(),
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
  let o = r, i = ia;
  n && (o = [r], i = lo);
  const { revoke: l, proxy: u } = Proxy.revocable(o, i);
  return r.draft_ = u, r.revoke_ = l, u;
}
var ia = {
  get(e, t) {
    if (t === Ge)
      return e;
    const n = yn(e);
    if (!oo(n, t))
      return Og(e, n, t);
    const r = n[t];
    return e.finalized_ || !Pt(r) ? r : r === Xl(e.base_, t) ? (Zl(e), e.copy_[t] = Ju(r, e)) : r;
  },
  has(e, t) {
    return t in yn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(yn(e));
  },
  set(e, t, n) {
    const r = Pp(yn(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Xl(yn(e), t), i = o == null ? void 0 : o[Ge];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (Cg(n, o) && (n !== void 0 || oo(e.base_, t)))
        return !0;
      Zl(e), bu(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Xl(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Zl(e), bu(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = yn(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    Ne(11);
  },
  getPrototypeOf(e) {
    return Tn(e.base_);
  },
  setPrototypeOf() {
    Ne(12);
  }
}, lo = {};
ro(ia, (e, t) => {
  lo[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
lo.deleteProperty = function(e, t) {
  return lo.set.call(this, e, t, void 0);
};
lo.set = function(e, t, n) {
  return ia.set.call(this, e[0], t, n, e[0]);
};
function Xl(e, t) {
  const n = e[Ge];
  return (n ? yn(n) : e)[t];
}
function Og(e, t, n) {
  var o;
  const r = Pp(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Pp(e, t) {
  if (!(t in e))
    return;
  let n = Tn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = Tn(n);
  }
}
function bu(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && bu(e.parent_));
}
function Zl(e) {
  e.copy_ || (e.copy_ = Yu(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Rg = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const l = this;
        return function(s = i, ...c) {
          return l.produce(s, (p) => n.call(this, p, ...c));
        };
      }
      typeof n != "function" && Ne(6), r !== void 0 && typeof r != "function" && Ne(7);
      let o;
      if (Pt(t)) {
        const i = $c(this), l = Ju(t, void 0);
        let u = !0;
        try {
          o = n(l), u = !1;
        } finally {
          u ? Xu(i) : Zu(i);
        }
        return zc(i, r), Lc(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === ra && (o = void 0), this.autoFreeze_ && oa(o, !0), r) {
          const i = [], l = [];
          Rn("Patches").generateReplacementPatches_(t, o, i, l), r(i, l);
        }
        return o;
      } else
        Ne(1, t);
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
    Pt(e) || Ne(8), Bt(e) && (e = zg(e));
    const t = $c(this), n = Ju(e, void 0);
    return n[Ge].isManual_ = !0, Zu(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ge];
    (!n || !n.isManual_) && Ne(9);
    const { scope_: r } = n;
    return zc(r, t), Lc(void 0, r);
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
    const r = Rn("Patches").applyPatches_;
    return Bt(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function Ju(e, t) {
  const n = mo(e) ? Rn("MapSet").proxyMap_(e, t) : yo(e) ? Rn("MapSet").proxySet_(e, t) : Tg(e, t);
  return (t ? t.scope_ : _p()).drafts_.push(n), n;
}
function zg(e) {
  return Bt(e) || Ne(10, e), Np(e);
}
function Np(e) {
  if (!Pt(e) || Gi(e))
    return e;
  const t = e[Ge];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Yu(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Yu(e, !0);
  return ro(n, (r, o) => {
    Cp(n, r, Np(o));
  }), t && (t.finalized_ = !1), n;
}
function X0() {
  const t = "replace", n = "add", r = "remove";
  function o(h, x, v, E) {
    switch (h.type_) {
      case 0:
      case 2:
        return l(
          h,
          x,
          v,
          E
        );
      case 1:
        return i(h, x, v, E);
      case 3:
        return u(
          h,
          x,
          v,
          E
        );
    }
  }
  function i(h, x, v, E) {
    let { base_: P, assigned_: d } = h, a = h.copy_;
    a.length < P.length && ([P, a] = [a, P], [v, E] = [E, v]);
    for (let f = 0; f < P.length; f++)
      if (d[f] && a[f] !== P[f]) {
        const S = x.concat([f]);
        v.push({
          op: t,
          path: S,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: m(a[f])
        }), E.push({
          op: t,
          path: S,
          value: m(P[f])
        });
      }
    for (let f = P.length; f < a.length; f++) {
      const S = x.concat([f]);
      v.push({
        op: n,
        path: S,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: m(a[f])
      });
    }
    for (let f = a.length - 1; P.length <= f; --f) {
      const S = x.concat([f]);
      E.push({
        op: r,
        path: S
      });
    }
  }
  function l(h, x, v, E) {
    const { base_: P, copy_: d } = h;
    ro(h.assigned_, (a, f) => {
      const S = Gl(P, a), _ = Gl(d, a), A = f ? oo(P, a) ? t : n : r;
      if (S === _ && A === t)
        return;
      const O = x.concat(a);
      v.push(A === r ? { op: A, path: O } : { op: A, path: O, value: _ }), E.push(
        A === n ? { op: r, path: O } : A === r ? { op: n, path: O, value: m(S) } : { op: t, path: O, value: m(S) }
      );
    });
  }
  function u(h, x, v, E) {
    let { base_: P, copy_: d } = h, a = 0;
    P.forEach((f) => {
      if (!d.has(f)) {
        const S = x.concat([a]);
        v.push({
          op: r,
          path: S,
          value: f
        }), E.unshift({
          op: n,
          path: S,
          value: f
        });
      }
      a++;
    }), a = 0, d.forEach((f) => {
      if (!P.has(f)) {
        const S = x.concat([a]);
        v.push({
          op: n,
          path: S,
          value: f
        }), E.unshift({
          op: r,
          path: S,
          value: f
        });
      }
      a++;
    });
  }
  function s(h, x, v, E) {
    v.push({
      op: t,
      path: [],
      value: x === ra ? void 0 : x
    }), E.push({
      op: t,
      path: [],
      value: h
    });
  }
  function c(h, x) {
    return x.forEach((v) => {
      const { path: E, op: P } = v;
      let d = h;
      for (let _ = 0; _ < E.length - 1; _++) {
        const A = On(d);
        let O = E[_];
        typeof O != "string" && typeof O != "number" && (O = "" + O), (A === 0 || A === 1) && (O === "__proto__" || O === "constructor") && Ne(19), typeof d == "function" && O === "prototype" && Ne(19), d = Gl(d, O), typeof d != "object" && Ne(18, E.join("/"));
      }
      const a = On(d), f = p(v.value), S = E[E.length - 1];
      switch (P) {
        case t:
          switch (a) {
            case 2:
              return d.set(S, f);
            case 3:
              Ne(16);
            default:
              return d[S] = f;
          }
        case n:
          switch (a) {
            case 1:
              return S === "-" ? d.push(f) : d.splice(S, 0, f);
            case 2:
              return d.set(S, f);
            case 3:
              return d.add(f);
            default:
              return d[S] = f;
          }
        case r:
          switch (a) {
            case 1:
              return d.splice(S, 1);
            case 2:
              return d.delete(S);
            case 3:
              return d.delete(v.value);
            default:
              return delete d[S];
          }
        default:
          Ne(17, P);
      }
    }), h;
  }
  function p(h) {
    if (!Pt(h))
      return h;
    if (Array.isArray(h))
      return h.map(p);
    if (mo(h))
      return new Map(
        Array.from(h.entries()).map(([v, E]) => [v, p(E)])
      );
    if (yo(h))
      return new Set(Array.from(h).map(p));
    const x = Object.create(Tn(h));
    for (const v in h)
      x[v] = p(h[v]);
    return oo(h, Mr) && (x[Mr] = h[Mr]), x;
  }
  function m(h) {
    return Bt(h) ? p(h) : h;
  }
  Pg("Patches", {
    applyPatches_: c,
    generatePatches_: o,
    generateReplacementPatches_: s
  });
}
var et = new Rg(), Ap = et.produce, Z0 = et.produceWithPatches.bind(
  et
);
et.setAutoFreeze.bind(et);
et.setUseStrictShallowCopy.bind(et);
var b0 = et.applyPatches.bind(et);
et.createDraft.bind(et);
et.finishDraft.bind(et);
function Tp(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var $g = Tp(), Lg = Tp, jg = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ci : Ci.apply(null, arguments);
}, Dg = (e) => e && typeof e.match == "function";
function jt(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(Me(0));
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => xp(r) && r.type === e, n;
}
function Dc(e, t) {
  for (const n of e)
    if (t(n))
      return n;
}
var Op = class Ar extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ar.prototype);
  }
  static get [Symbol.species]() {
    return Ar;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Ar(...t[0].concat(this)) : new Ar(...t.concat(this));
  }
};
function Fc(e) {
  return Pt(e) ? Ap(e, () => {
  }) : e;
}
function Mc(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(Me(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Fg(e) {
  return typeof e == "boolean";
}
var Mg = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let l = new Op();
  return n && (Fg(n) ? l.push($g) : l.push(Lg(n.extraArgument))), l;
}, Rp = "RTK_autoBatch", J0 = () => (e) => ({
  payload: e,
  meta: {
    [Rp]: !0
  }
}), zp = (e) => (t) => {
  setTimeout(t, e);
}, Ig = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : zp(10), Bg = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, l = !1;
  const u = /* @__PURE__ */ new Set(), s = e.type === "tick" ? queueMicrotask : e.type === "raf" ? Ig : e.type === "callback" ? e.queueNotification : zp(e.timeout), c = () => {
    l = !1, i && (i = !1, u.forEach((p) => p()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(p) {
      const m = () => o && p(), h = r.subscribe(m);
      return u.add(p), () => {
        h(), u.delete(p);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(p) {
      var m;
      try {
        return o = !((m = p == null ? void 0 : p.meta) != null && m[Rp]), i = !o, i && (l || (l = !0, s(c))), r.dispatch(p);
      } finally {
        o = !0;
      }
    }
  });
}, Ug = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Op(e);
  return r && o.push(Bg(typeof r == "object" ? r : void 0)), o;
};
function q0(e) {
  const t = Mg(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: l = void 0
  } = e || {};
  let u;
  if (typeof n == "function")
    u = n;
  else if (na(n))
    u = kg(n);
  else
    throw new Error(Me(1));
  let s;
  typeof r == "function" ? s = r(t) : s = t();
  let c = Ci;
  o && (c = jg({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof o == "object" && o
  }));
  const p = xg(...s), m = Ug(p);
  let h = typeof l == "function" ? l(m) : m();
  const x = c(...h);
  return kp(u, i, x);
}
function $p(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, l) {
      const u = typeof i == "string" ? i : i.type;
      if (!u)
        throw new Error(Me(28));
      if (u in t)
        throw new Error(Me(29));
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
function Hg(e) {
  return typeof e == "function";
}
function Vg(e, t) {
  let [n, r, o] = $p(t), i;
  if (Hg(e))
    i = () => Fc(e());
  else {
    const u = Fc(e);
    i = () => u;
  }
  function l(u = i(), s) {
    let c = [n[s.type], ...r.filter(({
      matcher: p
    }) => p(s)).map(({
      reducer: p
    }) => p)];
    return c.filter((p) => !!p).length === 0 && (c = [o]), c.reduce((p, m) => {
      if (m)
        if (Bt(p)) {
          const x = m(p, s);
          return x === void 0 ? p : x;
        } else {
          if (Pt(p))
            return Ap(p, (h) => m(h, s));
          {
            const h = m(p, s);
            if (h === void 0) {
              if (p === null)
                return p;
              throw new Error(Me(9));
            }
            return h;
          }
        }
      return p;
    }, u);
  }
  return l.getInitialState = i, l;
}
var Lp = (e, t) => Dg(e) ? e.match(t) : e(t);
function go(...e) {
  return (t) => e.some((n) => Lp(n, t));
}
function Ic(...e) {
  return (t) => e.every((n) => Lp(n, t));
}
function Xi(e, t) {
  if (!e || !e.meta) return !1;
  const n = typeof e.meta.requestId == "string", r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function vo(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function Wg(...e) {
  return e.length === 0 ? (t) => Xi(t, ["pending"]) : vo(e) ? go(...e.map((t) => t.pending)) : Wg()(e[0]);
}
function qu(...e) {
  return e.length === 0 ? (t) => Xi(t, ["rejected"]) : vo(e) ? go(...e.map((t) => t.rejected)) : qu()(e[0]);
}
function Qg(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0 ? Ic(qu(...e), t) : vo(e) ? Ic(qu(...e), t) : Qg()(e[0]);
}
function Kg(...e) {
  return e.length === 0 ? (t) => Xi(t, ["fulfilled"]) : vo(e) ? go(...e.map((t) => t.fulfilled)) : Kg()(e[0]);
}
function Yg(...e) {
  return e.length === 0 ? (t) => Xi(t, ["pending", "fulfilled", "rejected"]) : vo(e) ? go(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : Yg()(e[0]);
}
var Gg = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", jp = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Gg[Math.random() * 64 | 0];
  return t;
}, Xg = ["name", "message", "stack", "code"], bl = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    hr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Bc = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    hr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Zg = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of Xg)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, e1 = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = jt(t + "/fulfilled", (s, c, p, m) => ({
      payload: s,
      meta: {
        ...m || {},
        arg: p,
        requestId: c,
        requestStatus: "fulfilled"
      }
    })), i = jt(t + "/pending", (s, c, p) => ({
      payload: void 0,
      meta: {
        ...p || {},
        arg: c,
        requestId: s,
        requestStatus: "pending"
      }
    })), l = jt(t + "/rejected", (s, c, p, m, h) => ({
      payload: m,
      error: (r && r.serializeError || Zg)(s || "Rejected"),
      meta: {
        ...h || {},
        arg: p,
        requestId: c,
        rejectedWithValue: !!m,
        requestStatus: "rejected",
        aborted: (s == null ? void 0 : s.name) === "AbortError",
        condition: (s == null ? void 0 : s.name) === "ConditionError"
      }
    }));
    function u(s) {
      return (c, p, m) => {
        const h = r != null && r.idGenerator ? r.idGenerator(s) : jp(), x = new AbortController();
        let v, E;
        function P(a) {
          E = a, x.abort();
        }
        const d = async function() {
          var S, _;
          let a;
          try {
            let A = (S = r == null ? void 0 : r.condition) == null ? void 0 : S.call(r, s, {
              getState: p,
              extra: m
            });
            if (Jg(A) && (A = await A), A === !1 || x.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const O = new Promise((T, U) => {
              v = () => {
                U({
                  name: "AbortError",
                  message: E || "Aborted"
                });
              }, x.signal.addEventListener("abort", v);
            });
            c(i(h, s, (_ = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : _.call(r, {
              requestId: h,
              arg: s
            }, {
              getState: p,
              extra: m
            }))), a = await Promise.race([O, Promise.resolve(n(s, {
              dispatch: c,
              getState: p,
              extra: m,
              requestId: h,
              signal: x.signal,
              abort: P,
              rejectWithValue: (T, U) => new bl(T, U),
              fulfillWithValue: (T, U) => new Bc(T, U)
            })).then((T) => {
              if (T instanceof bl)
                throw T;
              return T instanceof Bc ? o(T.payload, h, s, T.meta) : o(T, h, s);
            })]);
          } catch (A) {
            a = A instanceof bl ? l(null, h, s, A.payload, A.meta) : l(A, h, s);
          } finally {
            v && x.signal.removeEventListener("abort", v);
          }
          return r && !r.dispatchConditionRejection && l.match(a) && a.meta.condition || c(a), a;
        }();
        return Object.assign(d, {
          abort: P,
          requestId: h,
          arg: s,
          unwrap() {
            return d.then(bg);
          }
        });
      };
    }
    return Object.assign(u, {
      pending: i,
      rejected: l,
      fulfilled: o,
      settled: go(l, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function bg(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Jg(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var qg = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function ev(e, t) {
  return `${e}/${t}`;
}
function tv({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[qg];
  return function(o) {
    const {
      name: i,
      reducerPath: l = i
    } = o;
    if (!i)
      throw new Error(Me(11));
    typeof process < "u";
    const u = (typeof o.reducers == "function" ? o.reducers(rv()) : o.reducers) || {}, s = Object.keys(u), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, p = {
      addCase(f, S) {
        const _ = typeof f == "string" ? f : f.type;
        if (!_)
          throw new Error(Me(12));
        if (_ in c.sliceCaseReducersByType)
          throw new Error(Me(13));
        return c.sliceCaseReducersByType[_] = S, p;
      },
      addMatcher(f, S) {
        return c.sliceMatchers.push({
          matcher: f,
          reducer: S
        }), p;
      },
      exposeAction(f, S) {
        return c.actionCreators[f] = S, p;
      },
      exposeCaseReducer(f, S) {
        return c.sliceCaseReducersByName[f] = S, p;
      }
    };
    s.forEach((f) => {
      const S = u[f], _ = {
        reducerName: f,
        type: ev(i, f),
        createNotation: typeof o.reducers == "function"
      };
      iv(S) ? uv(_, S, p, t) : ov(_, S, p);
    });
    function m() {
      const [f = {}, S = [], _ = void 0] = typeof o.extraReducers == "function" ? $p(o.extraReducers) : [o.extraReducers], A = {
        ...f,
        ...c.sliceCaseReducersByType
      };
      return Vg(o.initialState, (O) => {
        for (let T in A)
          O.addCase(T, A[T]);
        for (let T of c.sliceMatchers)
          O.addMatcher(T.matcher, T.reducer);
        for (let T of S)
          O.addMatcher(T.matcher, T.reducer);
        _ && O.addDefaultCase(_);
      });
    }
    const h = (f) => f, x = /* @__PURE__ */ new Map();
    let v;
    function E(f, S) {
      return v || (v = m()), v(f, S);
    }
    function P() {
      return v || (v = m()), v.getInitialState();
    }
    function d(f, S = !1) {
      function _(O) {
        let T = O[f];
        return typeof T > "u" && S && (T = P()), T;
      }
      function A(O = h) {
        const T = Mc(x, S, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Mc(T, O, {
          insert: () => {
            const U = {};
            for (const [F, pe] of Object.entries(o.selectors ?? {}))
              U[F] = nv(pe, O, P, S);
            return U;
          }
        });
      }
      return {
        reducerPath: f,
        getSelectors: A,
        get selectors() {
          return A(_);
        },
        selectSlice: _
      };
    }
    const a = {
      name: i,
      reducer: E,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: P,
      ...d(l),
      injectInto(f, {
        reducerPath: S,
        ..._
      } = {}) {
        const A = S ?? l;
        return f.inject({
          reducerPath: A,
          reducer: E
        }, _), {
          ...a,
          ...d(A, !0)
        };
      }
    };
    return a;
  };
}
function nv(e, t, n, r) {
  function o(i, ...l) {
    let u = t(i);
    return typeof u > "u" && r && (u = n()), e(u, ...l);
  }
  return o.unwrapped = e, o;
}
var Dp = /* @__PURE__ */ tv();
function rv() {
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
function ov({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, l;
  if ("reducer" in r) {
    if (n && !lv(r))
      throw new Error(Me(17));
    i = r.reducer, l = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, l ? jt(e, l) : jt(e));
}
function iv(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function lv(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function uv({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(Me(18));
  const {
    payloadCreator: i,
    fulfilled: l,
    pending: u,
    rejected: s,
    settled: c,
    options: p
  } = n, m = o(e, i, p);
  r.exposeAction(t, m), l && r.addCase(m.fulfilled, l), u && r.addCase(m.pending, u), s && r.addCase(m.rejected, s), c && r.addMatcher(m.settled, c), r.exposeCaseReducer(t, {
    fulfilled: l || Fo,
    pending: u || Fo,
    rejected: s || Fo,
    settled: c || Fo
  });
}
function Fo() {
}
var sv = "task", Fp = "listener", Mp = "completed", la = "cancelled", av = `task-${la}`, cv = `task-${Mp}`, es = `${Fp}-${la}`, fv = `${Fp}-${Mp}`, Zi = class {
  constructor(e) {
    hr(this, "name", "TaskAbortError");
    hr(this, "message");
    this.code = e, this.message = `${sv} ${la} (reason: ${e})`;
  }
}, ua = (e, t) => {
  if (typeof e != "function")
    throw new Error(Me(32));
}, Ni = () => {
}, Ip = (e, t = Ni) => (e.catch(t), e), Bp = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), xn = (e, t) => {
  const n = e.signal;
  n.aborted || ("reason" in n || Object.defineProperty(n, "reason", {
    enumerable: !0,
    value: t,
    configurable: !0,
    writable: !0
  }), e.abort(t));
}, En = (e) => {
  if (e.aborted) {
    const {
      reason: t
    } = e;
    throw new Zi(t);
  }
};
function Up(e, t) {
  let n = Ni;
  return new Promise((r, o) => {
    const i = () => o(new Zi(e.reason));
    if (e.aborted) {
      i();
      return;
    }
    n = Bp(e, i), t.finally(() => n()).then(r, o);
  }).finally(() => {
    n = Ni;
  });
}
var dv = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (n) {
    return {
      status: n instanceof Zi ? "cancelled" : "rejected",
      error: n
    };
  } finally {
    t == null || t();
  }
}, Ai = (e) => (t) => Ip(Up(e, t).then((n) => (En(e), n))), Hp = (e) => {
  const t = Ai(e);
  return (n) => t(new Promise((r) => setTimeout(r, n)));
}, {
  assign: er
} = Object, Uc = {}, bi = "listenerMiddleware", pv = (e, t) => {
  const n = (r) => Bp(e, () => xn(r, e.reason));
  return (r, o) => {
    ua(r);
    const i = new AbortController();
    n(i);
    const l = dv(async () => {
      En(e), En(i.signal);
      const u = await r({
        pause: Ai(i.signal),
        delay: Hp(i.signal),
        signal: i.signal
      });
      return En(i.signal), u;
    }, () => xn(i, cv));
    return o != null && o.autoJoin && t.push(l.catch(Ni)), {
      result: Ai(e)(l),
      cancel() {
        xn(i, av);
      }
    };
  };
}, hv = (e, t) => {
  const n = async (r, o) => {
    En(t);
    let i = () => {
    };
    const u = [new Promise((s, c) => {
      let p = e({
        predicate: r,
        effect: (m, h) => {
          h.unsubscribe(), s([m, h.getState(), h.getOriginalState()]);
        }
      });
      i = () => {
        p(), c();
      };
    })];
    o != null && u.push(new Promise((s) => setTimeout(s, o, null)));
    try {
      const s = await Up(t, Promise.race(u));
      return En(t), s;
    } finally {
      i();
    }
  };
  return (r, o) => Ip(n(r, o));
}, Vp = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = jt(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o) throw new Error(Me(21));
  return ua(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, Wp = /* @__PURE__ */ er((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = Vp(e);
  return {
    id: jp(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Me(22));
    }
  };
}, {
  withTypes: () => Wp
}), ts = (e) => {
  e.pending.forEach((t) => {
    xn(t, es);
  });
}, mv = (e) => () => {
  e.forEach(ts), e.clear();
}, Hc = (e, t, n) => {
  try {
    e(t, n);
  } catch (r) {
    setTimeout(() => {
      throw r;
    }, 0);
  }
}, Qp = /* @__PURE__ */ er(/* @__PURE__ */ jt(`${bi}/add`), {
  withTypes: () => Qp
}), yv = /* @__PURE__ */ jt(`${bi}/removeAll`), Kp = /* @__PURE__ */ er(/* @__PURE__ */ jt(`${bi}/remove`), {
  withTypes: () => Kp
}), gv = (...e) => {
  console.error(`${bi}/error`, ...e);
}, t1 = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), {
    extra: n,
    onError: r = gv
  } = e;
  ua(r);
  const o = (p) => (p.unsubscribe = () => t.delete(p.id), t.set(p.id, p), (m) => {
    p.unsubscribe(), m != null && m.cancelActive && ts(p);
  }), i = (p) => {
    let m = Dc(Array.from(t.values()), (h) => h.effect === p.effect);
    return m || (m = Wp(p)), o(m);
  };
  er(i, {
    withTypes: () => i
  });
  const l = (p) => {
    const {
      type: m,
      effect: h,
      predicate: x
    } = Vp(p), v = Dc(Array.from(t.values()), (E) => (typeof m == "string" ? E.type === m : E.predicate === x) && E.effect === h);
    return v && (v.unsubscribe(), p.cancelActive && ts(v)), !!v;
  };
  er(l, {
    withTypes: () => l
  });
  const u = async (p, m, h, x) => {
    const v = new AbortController(), E = hv(i, v.signal), P = [];
    try {
      p.pending.add(v), await Promise.resolve(p.effect(
        m,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        er({}, h, {
          getOriginalState: x,
          condition: (d, a) => E(d, a).then(Boolean),
          take: E,
          delay: Hp(v.signal),
          pause: Ai(v.signal),
          extra: n,
          signal: v.signal,
          fork: pv(v.signal, P),
          unsubscribe: p.unsubscribe,
          subscribe: () => {
            t.set(p.id, p);
          },
          cancelActiveListeners: () => {
            p.pending.forEach((d, a, f) => {
              d !== v && (xn(d, es), f.delete(d));
            });
          },
          cancel: () => {
            xn(v, es), p.pending.delete(v);
          },
          throwIfCancelled: () => {
            En(v.signal);
          }
        })
      ));
    } catch (d) {
      d instanceof Zi || Hc(r, d, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(P), xn(v, fv), p.pending.delete(v);
    }
  }, s = mv(t);
  return {
    middleware: (p) => (m) => (h) => {
      if (!xp(h))
        return m(h);
      if (Qp.match(h))
        return i(h.payload);
      if (yv.match(h)) {
        s();
        return;
      }
      if (Kp.match(h))
        return l(h.payload);
      let x = p.getState();
      const v = () => {
        if (x === Uc)
          throw new Error(Me(23));
        return x;
      };
      let E;
      try {
        if (E = m(h), t.size > 0) {
          const P = p.getState(), d = Array.from(t.values());
          for (const a of d) {
            let f = !1;
            try {
              f = a.predicate(h, P, x);
            } catch (S) {
              f = !1, Hc(r, S, {
                raisedBy: "predicate"
              });
            }
            f && u(a, h, p, v);
          }
        }
      } finally {
        x = Uc;
      }
      return E;
    },
    startListening: i,
    stopListening: l,
    clearListeners: s
  };
};
function Me(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var ns = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(t);
  })(mr, function(n) {
    function r(w, g) {
      w.super_ = g, w.prototype = Object.create(g.prototype, { constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 } });
    }
    function o(w, g) {
      Object.defineProperty(this, "kind", { value: w, enumerable: !0 }), g && g.length && Object.defineProperty(this, "path", { value: g, enumerable: !0 });
    }
    function i(w, g, y) {
      i.super_.call(this, "E", w), Object.defineProperty(this, "lhs", { value: g, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: y, enumerable: !0 });
    }
    function l(w, g) {
      l.super_.call(this, "N", w), Object.defineProperty(this, "rhs", { value: g, enumerable: !0 });
    }
    function u(w, g) {
      u.super_.call(this, "D", w), Object.defineProperty(this, "lhs", { value: g, enumerable: !0 });
    }
    function s(w, g, y) {
      s.super_.call(this, "A", w), Object.defineProperty(this, "index", { value: g, enumerable: !0 }), Object.defineProperty(this, "item", { value: y, enumerable: !0 });
    }
    function c(w, g, y) {
      var C = w.slice(g + 1 || w.length);
      return w.length = g < 0 ? w.length + g : g, w.push.apply(w, C), w;
    }
    function p(w) {
      var g = typeof w > "u" ? "undefined" : se(w);
      return g !== "object" ? g : w === Math ? "math" : w === null ? "null" : Array.isArray(w) ? "array" : Object.prototype.toString.call(w) === "[object Date]" ? "date" : typeof w.toString == "function" && /^\/.*\//.test(w.toString()) ? "regexp" : "object";
    }
    function m(w, g, y, C, R, k, L) {
      R = R || [], L = L || [];
      var N = R.slice(0);
      if (typeof k < "u") {
        if (C) {
          if (typeof C == "function" && C(N, k)) return;
          if ((typeof C > "u" ? "undefined" : se(C)) === "object") {
            if (C.prefilter && C.prefilter(N, k)) return;
            if (C.normalize) {
              var G = C.normalize(N, k, w, g);
              G && (w = G[0], g = G[1]);
            }
          }
        }
        N.push(k);
      }
      p(w) === "regexp" && p(g) === "regexp" && (w = w.toString(), g = g.toString());
      var W = typeof w > "u" ? "undefined" : se(w), V = typeof g > "u" ? "undefined" : se(g), D = W !== "undefined" || L && L[L.length - 1].lhs && L[L.length - 1].lhs.hasOwnProperty(k), Z = V !== "undefined" || L && L[L.length - 1].rhs && L[L.length - 1].rhs.hasOwnProperty(k);
      if (!D && Z) y(new l(N, g));
      else if (!Z && D) y(new u(N, w));
      else if (p(w) !== p(g)) y(new i(N, w, g));
      else if (p(w) === "date" && w - g !== 0) y(new i(N, w, g));
      else if (W === "object" && w !== null && g !== null) if (L.filter(function(M) {
        return M.lhs === w;
      }).length) w !== g && y(new i(N, w, g));
      else {
        if (L.push({ lhs: w, rhs: g }), Array.isArray(w)) {
          var Q;
          for (w.length, Q = 0; Q < w.length; Q++) Q >= g.length ? y(new s(N, Q, new u(void 0, w[Q]))) : m(w[Q], g[Q], y, C, N, Q, L);
          for (; Q < g.length; ) y(new s(N, Q, new l(void 0, g[Q++])));
        } else {
          var K = Object.keys(w), ee = Object.keys(g);
          K.forEach(function(M, le) {
            var pt = ee.indexOf(M);
            pt >= 0 ? (m(w[M], g[M], y, C, N, M, L), ee = c(ee, pt)) : m(w[M], void 0, y, C, N, M, L);
          }), ee.forEach(function(M) {
            m(void 0, g[M], y, C, N, M, L);
          });
        }
        L.length = L.length - 1;
      }
      else w !== g && (W === "number" && isNaN(w) && isNaN(g) || y(new i(N, w, g)));
    }
    function h(w, g, y, C) {
      return C = C || [], m(w, g, function(R) {
        R && C.push(R);
      }, y), C.length ? C : void 0;
    }
    function x(w, g, y) {
      if (y.path && y.path.length) {
        var C, R = w[g], k = y.path.length - 1;
        for (C = 0; C < k; C++) R = R[y.path[C]];
        switch (y.kind) {
          case "A":
            x(R[y.path[C]], y.index, y.item);
            break;
          case "D":
            delete R[y.path[C]];
            break;
          case "E":
          case "N":
            R[y.path[C]] = y.rhs;
        }
      } else switch (y.kind) {
        case "A":
          x(w[g], y.index, y.item);
          break;
        case "D":
          w = c(w, g);
          break;
        case "E":
        case "N":
          w[g] = y.rhs;
      }
      return w;
    }
    function v(w, g, y) {
      if (w && g && y && y.kind) {
        for (var C = w, R = -1, k = y.path ? y.path.length - 1 : 0; ++R < k; ) typeof C[y.path[R]] > "u" && (C[y.path[R]] = typeof y.path[R] == "number" ? [] : {}), C = C[y.path[R]];
        switch (y.kind) {
          case "A":
            x(y.path ? C[y.path[R]] : C, y.index, y.item);
            break;
          case "D":
            delete C[y.path[R]];
            break;
          case "E":
          case "N":
            C[y.path[R]] = y.rhs;
        }
      }
    }
    function E(w, g, y) {
      if (y.path && y.path.length) {
        var C, R = w[g], k = y.path.length - 1;
        for (C = 0; C < k; C++) R = R[y.path[C]];
        switch (y.kind) {
          case "A":
            E(R[y.path[C]], y.index, y.item);
            break;
          case "D":
            R[y.path[C]] = y.lhs;
            break;
          case "E":
            R[y.path[C]] = y.lhs;
            break;
          case "N":
            delete R[y.path[C]];
        }
      } else switch (y.kind) {
        case "A":
          E(w[g], y.index, y.item);
          break;
        case "D":
          w[g] = y.lhs;
          break;
        case "E":
          w[g] = y.lhs;
          break;
        case "N":
          w = c(w, g);
      }
      return w;
    }
    function P(w, g, y) {
      if (w && g && y && y.kind) {
        var C, R, k = w;
        for (R = y.path.length - 1, C = 0; C < R; C++) typeof k[y.path[C]] > "u" && (k[y.path[C]] = {}), k = k[y.path[C]];
        switch (y.kind) {
          case "A":
            E(k[y.path[C]], y.index, y.item);
            break;
          case "D":
            k[y.path[C]] = y.lhs;
            break;
          case "E":
            k[y.path[C]] = y.lhs;
            break;
          case "N":
            delete k[y.path[C]];
        }
      }
    }
    function d(w, g, y) {
      if (w && g) {
        var C = function(R) {
          y && !y(w, g, R) || v(w, g, R);
        };
        m(w, g, C);
      }
    }
    function a(w) {
      return "color: " + $[w].color + "; font-weight: bold";
    }
    function f(w) {
      var g = w.kind, y = w.path, C = w.lhs, R = w.rhs, k = w.index, L = w.item;
      switch (g) {
        case "E":
          return [y.join("."), C, "→", R];
        case "N":
          return [y.join("."), R];
        case "D":
          return [y.join(".")];
        case "A":
          return [y.join(".") + "[" + k + "]", L];
        default:
          return [];
      }
    }
    function S(w, g, y, C) {
      var R = h(w, g);
      try {
        C ? y.groupCollapsed("diff") : y.group("diff");
      } catch {
        y.log("diff");
      }
      R ? R.forEach(function(k) {
        var L = k.kind, N = f(k);
        y.log.apply(y, ["%c " + $[L].text, a(L)].concat(ot(N)));
      }) : y.log("—— no diff ——");
      try {
        y.groupEnd();
      } catch {
        y.log("—— diff end —— ");
      }
    }
    function _(w, g, y, C) {
      switch (typeof w > "u" ? "undefined" : se(w)) {
        case "object":
          return typeof w[C] == "function" ? w[C].apply(w, ot(y)) : w[C];
        case "function":
          return w(g);
        default:
          return w;
      }
    }
    function A(w) {
      var g = w.timestamp, y = w.duration;
      return function(C, R, k) {
        var L = ["action"];
        return L.push("%c" + String(C.type)), g && L.push("%c@ " + R), y && L.push("%c(in " + k.toFixed(2) + " ms)"), L.join(" ");
      };
    }
    function O(w, g) {
      var y = g.logger, C = g.actionTransformer, R = g.titleFormatter, k = R === void 0 ? A(g) : R, L = g.collapsed, N = g.colors, G = g.level, W = g.diff, V = typeof g.titleFormatter > "u";
      w.forEach(function(D, Z) {
        var Q = D.started, K = D.startedTime, ee = D.action, M = D.prevState, le = D.error, pt = D.took, ne = D.nextState, Ht = w[Z + 1];
        Ht && (ne = Ht.prevState, pt = Ht.started - Q);
        var Re = C(ee), Ue = typeof L == "function" ? L(function() {
          return ne;
        }, ee, D) : L, H = we(K), ae = N.title ? "color: " + N.title(Re) + ";" : "", Nt = ["color: gray; font-weight: lighter;"];
        Nt.push(ae), g.timestamp && Nt.push("color: gray; font-weight: lighter;"), g.duration && Nt.push("color: gray; font-weight: lighter;");
        var At = k(Re, H, pt);
        try {
          Ue ? N.title && V ? y.groupCollapsed.apply(y, ["%c " + At].concat(Nt)) : y.groupCollapsed(At) : N.title && V ? y.group.apply(y, ["%c " + At].concat(Nt)) : y.group(At);
        } catch {
          y.log(At);
        }
        var it = _(G, Re, [M], "prevState"), vl = _(G, Re, [Re], "action"), wl = _(G, Re, [le, M], "error"), Sl = _(G, Re, [ne], "nextState");
        if (it) if (N.prevState) {
          var yh = "color: " + N.prevState(M) + "; font-weight: bold";
          y[it]("%c prev state", yh, M);
        } else y[it]("prev state", M);
        if (vl) if (N.action) {
          var gh = "color: " + N.action(Re) + "; font-weight: bold";
          y[vl]("%c action    ", gh, Re);
        } else y[vl]("action    ", Re);
        if (le && wl) if (N.error) {
          var vh = "color: " + N.error(le, M) + "; font-weight: bold;";
          y[wl]("%c error     ", vh, le);
        } else y[wl]("error     ", le);
        if (Sl) if (N.nextState) {
          var wh = "color: " + N.nextState(ne) + "; font-weight: bold";
          y[Sl]("%c next state", wh, ne);
        } else y[Sl]("next state", ne);
        W && S(M, ne, y, Ue);
        try {
          y.groupEnd();
        } catch {
          y.log("—— log end ——");
        }
      });
    }
    function T() {
      var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = Object.assign({}, I, w), y = g.logger, C = g.stateTransformer, R = g.errorTransformer, k = g.predicate, L = g.logErrors, N = g.diffPredicate;
      if (typeof y > "u") return function() {
        return function(W) {
          return function(V) {
            return W(V);
          };
        };
      };
      if (w.getState && w.dispatch) return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
        return function(W) {
          return function(V) {
            return W(V);
          };
        };
      };
      var G = [];
      return function(W) {
        var V = W.getState;
        return function(D) {
          return function(Z) {
            if (typeof k == "function" && !k(V, Z)) return D(Z);
            var Q = {};
            G.push(Q), Q.started = Oe.now(), Q.startedTime = /* @__PURE__ */ new Date(), Q.prevState = C(V()), Q.action = Z;
            var K = void 0;
            if (L) try {
              K = D(Z);
            } catch (M) {
              Q.error = R(M);
            }
            else K = D(Z);
            Q.took = Oe.now() - Q.started, Q.nextState = C(V());
            var ee = g.diff && typeof N == "function" ? N(V, Z) : g.diff;
            if (O(G, Object.assign({}, g, { diff: ee })), G.length = 0, Q.error) throw Q.error;
            return K;
          };
        };
      };
    }
    var U, F, pe = function(w, g) {
      return new Array(g + 1).join(w);
    }, ie = function(w, g) {
      return pe("0", g - w.toString().length) + w;
    }, we = function(w) {
      return ie(w.getHours(), 2) + ":" + ie(w.getMinutes(), 2) + ":" + ie(w.getSeconds(), 2) + "." + ie(w.getMilliseconds(), 3);
    }, Oe = typeof performance < "u" && performance !== null && typeof performance.now == "function" ? performance : Date, se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
      return typeof w;
    } : function(w) {
      return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
    }, ot = function(w) {
      if (Array.isArray(w)) {
        for (var g = 0, y = Array(w.length); g < w.length; g++) y[g] = w[g];
        return y;
      }
      return Array.from(w);
    }, ge = [];
    U = (typeof mr > "u" ? "undefined" : se(mr)) === "object" && mr ? mr : typeof window < "u" ? window : {}, F = U.DeepDiff, F && ge.push(function() {
      typeof F < "u" && U.DeepDiff === h && (U.DeepDiff = F, F = void 0);
    }), r(i, o), r(l, o), r(u, o), r(s, o), Object.defineProperties(h, { diff: { value: h, enumerable: !0 }, observableDiff: { value: m, enumerable: !0 }, applyDiff: { value: d, enumerable: !0 }, applyChange: { value: v, enumerable: !0 }, revertChange: { value: P, enumerable: !0 }, isConflict: { value: function() {
      return typeof F < "u";
    }, enumerable: !0 }, noConflict: { value: function() {
      return ge && (ge.forEach(function(w) {
        w();
      }), ge = null), h;
    }, enumerable: !0 } });
    var $ = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } }, I = { level: "log", logger: console, logErrors: !0, collapsed: void 0, predicate: void 0, duration: !1, timestamp: !0, stateTransformer: function(w) {
      return w;
    }, actionTransformer: function(w) {
      return w;
    }, errorTransformer: function(w) {
      return w;
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
      var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = w.dispatch, y = w.getState;
      return typeof g == "function" || typeof y == "function" ? T()({ dispatch: g, getState: y }) : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
    };
    n.defaults = I, n.createLogger = T, n.logger = B, n.default = B, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(ns, ns.exports);
var vv = ns.exports;
const n1 = /* @__PURE__ */ Ri(vv), wv = {
  theme: void 0,
  kind: void 0
}, Yp = Dp({
  name: "theme",
  initialState: wv,
  reducers: {
    changeTheme: (e, t) => {
      e.kind = t.payload.kind, e.theme = { ...e.theme, ...t.payload.theme ?? {} }, e.kind === "light" ? (e.theme.computedOne = "rgba(0, 0, 0, 0.05)", e.theme.computedTwo = "rgba(0, 0, 0, 0.1)") : e.kind === "dark" ? (e.theme.computedOne = "rgba(255, 255, 255, 0.05)", e.theme.computedTwo = "rgba(255, 255, 255, 0.1)") : (e.theme.computedOne = "transparent", e.theme.computedTwo = "transparent");
    }
  }
}), Sv = vp, { changeTheme: r1 } = Yp.actions, o1 = Yp.reducer, kv = {
  current: ["starting"],
  history: []
}, Gp = Dp({
  name: "router",
  initialState: kv,
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
}), { goTo: xv, goBack: i1, openLink: Ev } = Gp.actions, Cv = gg, Xp = vp, l1 = Gp.reducer;
var Zp = { exports: {} }, J = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sa = Symbol.for("react.element"), aa = Symbol.for("react.portal"), Ji = Symbol.for("react.fragment"), qi = Symbol.for("react.strict_mode"), el = Symbol.for("react.profiler"), tl = Symbol.for("react.provider"), nl = Symbol.for("react.context"), _v = Symbol.for("react.server_context"), rl = Symbol.for("react.forward_ref"), ol = Symbol.for("react.suspense"), il = Symbol.for("react.suspense_list"), ll = Symbol.for("react.memo"), ul = Symbol.for("react.lazy"), Pv = Symbol.for("react.offscreen"), bp;
bp = Symbol.for("react.module.reference");
function dt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case sa:
        switch (e = e.type, e) {
          case Ji:
          case el:
          case qi:
          case ol:
          case il:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case _v:
              case nl:
              case rl:
              case ul:
              case ll:
              case tl:
                return e;
              default:
                return t;
            }
        }
      case aa:
        return t;
    }
  }
}
J.ContextConsumer = nl;
J.ContextProvider = tl;
J.Element = sa;
J.ForwardRef = rl;
J.Fragment = Ji;
J.Lazy = ul;
J.Memo = ll;
J.Portal = aa;
J.Profiler = el;
J.StrictMode = qi;
J.Suspense = ol;
J.SuspenseList = il;
J.isAsyncMode = function() {
  return !1;
};
J.isConcurrentMode = function() {
  return !1;
};
J.isContextConsumer = function(e) {
  return dt(e) === nl;
};
J.isContextProvider = function(e) {
  return dt(e) === tl;
};
J.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sa;
};
J.isForwardRef = function(e) {
  return dt(e) === rl;
};
J.isFragment = function(e) {
  return dt(e) === Ji;
};
J.isLazy = function(e) {
  return dt(e) === ul;
};
J.isMemo = function(e) {
  return dt(e) === ll;
};
J.isPortal = function(e) {
  return dt(e) === aa;
};
J.isProfiler = function(e) {
  return dt(e) === el;
};
J.isStrictMode = function(e) {
  return dt(e) === qi;
};
J.isSuspense = function(e) {
  return dt(e) === ol;
};
J.isSuspenseList = function(e) {
  return dt(e) === il;
};
J.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ji || e === el || e === qi || e === ol || e === il || e === Pv || typeof e == "object" && e !== null && (e.$$typeof === ul || e.$$typeof === ll || e.$$typeof === tl || e.$$typeof === nl || e.$$typeof === rl || e.$$typeof === bp || e.getModuleId !== void 0);
};
J.typeOf = dt;
Zp.exports = J;
var Jp = Zp.exports;
function Nv(e) {
  function t(g, y, C, R, k) {
    for (var L = 0, N = 0, G = 0, W = 0, V, D, Z = 0, Q = 0, K, ee = K = V = 0, M = 0, le = 0, pt = 0, ne = 0, Ht = C.length, Re = Ht - 1, Ue, H = "", ae = "", Nt = "", At = "", it; M < Ht; ) {
      if (D = C.charCodeAt(M), M === Re && N + W + G + L !== 0 && (N !== 0 && (D = N === 47 ? 10 : 47), W = G = L = 0, Ht++, Re++), N + W + G + L === 0) {
        if (M === Re && (0 < le && (H = H.replace(h, "")), 0 < H.trim().length)) {
          switch (D) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              H += C.charAt(M);
          }
          D = 59;
        }
        switch (D) {
          case 123:
            for (H = H.trim(), V = H.charCodeAt(0), K = 1, ne = ++M; M < Ht; ) {
              switch (D = C.charCodeAt(M)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (D = C.charCodeAt(M + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ee = M + 1; ee < Re; ++ee)
                          switch (C.charCodeAt(ee)) {
                            case 47:
                              if (D === 42 && C.charCodeAt(ee - 1) === 42 && M + 2 !== ee) {
                                M = ee + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (D === 47) {
                                M = ee + 1;
                                break e;
                              }
                          }
                        M = ee;
                      }
                  }
                  break;
                case 91:
                  D++;
                case 40:
                  D++;
                case 34:
                case 39:
                  for (; M++ < Re && C.charCodeAt(M) !== D; )
                    ;
              }
              if (K === 0) break;
              M++;
            }
            switch (K = C.substring(ne, M), V === 0 && (V = (H = H.replace(m, "").trim()).charCodeAt(0)), V) {
              case 64:
                switch (0 < le && (H = H.replace(h, "")), D = H.charCodeAt(1), D) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = y;
                    break;
                  default:
                    le = ot;
                }
                if (K = t(y, le, K, D, k + 1), ne = K.length, 0 < $ && (le = n(ot, H, pt), it = u(3, K, le, y, we, ie, ne, D, k, R), H = le.join(""), it !== void 0 && (ne = (K = it.trim()).length) === 0 && (D = 0, K = "")), 0 < ne) switch (D) {
                  case 115:
                    H = H.replace(A, l);
                  case 100:
                  case 109:
                  case 45:
                    K = H + "{" + K + "}";
                    break;
                  case 107:
                    H = H.replace(a, "$1 $2"), K = H + "{" + K + "}", K = se === 1 || se === 2 && i("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = H + K, R === 112 && (K = (ae += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(y, n(y, H, pt), K, R, k + 1);
            }
            Nt += K, K = pt = le = ee = V = 0, H = "", D = C.charCodeAt(++M);
            break;
          case 125:
          case 59:
            if (H = (0 < le ? H.replace(h, "") : H).trim(), 1 < (ne = H.length)) switch (ee === 0 && (V = H.charCodeAt(0), V === 45 || 96 < V && 123 > V) && (ne = (H = H.replace(" ", ":")).length), 0 < $ && (it = u(1, H, y, g, we, ie, ae.length, R, k, R)) !== void 0 && (ne = (H = it.trim()).length) === 0 && (H = "\0\0"), V = H.charCodeAt(0), D = H.charCodeAt(1), V) {
              case 0:
                break;
              case 64:
                if (D === 105 || D === 99) {
                  At += H + C.charAt(M);
                  break;
                }
              default:
                H.charCodeAt(ne - 1) !== 58 && (ae += o(H, V, D, H.charCodeAt(2)));
            }
            pt = le = ee = V = 0, H = "", D = C.charCodeAt(++M);
        }
      }
      switch (D) {
        case 13:
        case 10:
          N === 47 ? N = 0 : 1 + V === 0 && R !== 107 && 0 < H.length && (le = 1, H += "\0"), 0 < $ * B && u(0, H, y, g, we, ie, ae.length, R, k, R), ie = 1, we++;
          break;
        case 59:
        case 125:
          if (N + W + G + L === 0) {
            ie++;
            break;
          }
        default:
          switch (ie++, Ue = C.charAt(M), D) {
            case 9:
            case 32:
              if (W + L + N === 0) switch (Z) {
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
              W + N + L === 0 && (le = pt = 1, Ue = "\f" + Ue);
              break;
            case 108:
              if (W + N + L + Oe === 0 && 0 < ee) switch (M - ee) {
                case 2:
                  Z === 112 && C.charCodeAt(M - 3) === 58 && (Oe = Z);
                case 8:
                  Q === 111 && (Oe = Q);
              }
              break;
            case 58:
              W + N + L === 0 && (ee = M);
              break;
            case 44:
              N + G + W + L === 0 && (le = 1, Ue += "\r");
              break;
            case 34:
            case 39:
              N === 0 && (W = W === D ? 0 : W === 0 ? D : W);
              break;
            case 91:
              W + N + G === 0 && L++;
              break;
            case 93:
              W + N + G === 0 && L--;
              break;
            case 41:
              W + N + L === 0 && G--;
              break;
            case 40:
              if (W + N + L === 0) {
                if (V === 0) switch (2 * Z + 3 * Q) {
                  case 533:
                    break;
                  default:
                    V = 1;
                }
                G++;
              }
              break;
            case 64:
              N + G + W + L + ee + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < W + L + G)) switch (N) {
                case 0:
                  switch (2 * D + 3 * C.charCodeAt(M + 1)) {
                    case 235:
                      N = 47;
                      break;
                    case 220:
                      ne = M, N = 42;
                  }
                  break;
                case 42:
                  D === 47 && Z === 42 && ne + 2 !== M && (C.charCodeAt(ne + 2) === 33 && (ae += C.substring(ne, M + 1)), Ue = "", N = 0);
              }
          }
          N === 0 && (H += Ue);
      }
      Q = Z, Z = D, M++;
    }
    if (ne = ae.length, 0 < ne) {
      if (le = y, 0 < $ && (it = u(2, ae, le, g, we, ie, ne, R, k, R), it !== void 0 && (ae = it).length === 0)) return At + ae + Nt;
      if (ae = le.join(",") + "{" + ae + "}", se * Oe !== 0) {
        switch (se !== 2 || i(ae, 2) || (Oe = 0), Oe) {
          case 111:
            ae = ae.replace(S, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(f, "::-webkit-input-$1") + ae.replace(f, "::-moz-$1") + ae.replace(f, ":-ms-input-$1") + ae;
        }
        Oe = 0;
      }
    }
    return At + ae + Nt;
  }
  function n(g, y, C) {
    var R = y.trim().split(P);
    y = R;
    var k = R.length, L = g.length;
    switch (L) {
      case 0:
      case 1:
        var N = 0;
        for (g = L === 0 ? "" : g[0] + " "; N < k; ++N)
          y[N] = r(g, y[N], C).trim();
        break;
      default:
        var G = N = 0;
        for (y = []; N < k; ++N)
          for (var W = 0; W < L; ++W)
            y[G++] = r(g[W] + " ", R[N], C).trim();
    }
    return y;
  }
  function r(g, y, C) {
    var R = y.charCodeAt(0);
    switch (33 > R && (R = (y = y.trim()).charCodeAt(0)), R) {
      case 38:
        return y.replace(d, "$1" + g.trim());
      case 58:
        return g.trim() + y.replace(d, "$1" + g.trim());
      default:
        if (0 < 1 * C && 0 < y.indexOf("\f")) return y.replace(d, (g.charCodeAt(0) === 58 ? "" : "$1") + g.trim());
    }
    return g + y;
  }
  function o(g, y, C, R) {
    var k = g + ";", L = 2 * y + 3 * C + 4 * R;
    if (L === 944) {
      g = k.indexOf(":", 9) + 1;
      var N = k.substring(g, k.length - 1).trim();
      return N = k.substring(0, g).trim() + N + ";", se === 1 || se === 2 && i(N, 1) ? "-webkit-" + N + N : N;
    }
    if (se === 0 || se === 2 && !i(k, 1)) return k;
    switch (L) {
      case 1015:
        return k.charCodeAt(10) === 97 ? "-webkit-" + k + k : k;
      case 951:
        return k.charCodeAt(3) === 116 ? "-webkit-" + k + k : k;
      case 963:
        return k.charCodeAt(5) === 110 ? "-webkit-" + k + k : k;
      case 1009:
        if (k.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + k + k;
      case 978:
        return "-webkit-" + k + "-moz-" + k + k;
      case 1019:
      case 983:
        return "-webkit-" + k + "-moz-" + k + "-ms-" + k + k;
      case 883:
        if (k.charCodeAt(8) === 45) return "-webkit-" + k + k;
        if (0 < k.indexOf("image-set(", 11)) return k.replace(pe, "$1-webkit-$2") + k;
        break;
      case 932:
        if (k.charCodeAt(4) === 45) switch (k.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + k.replace("-grow", "") + "-webkit-" + k + "-ms-" + k.replace("grow", "positive") + k;
          case 115:
            return "-webkit-" + k + "-ms-" + k.replace("shrink", "negative") + k;
          case 98:
            return "-webkit-" + k + "-ms-" + k.replace("basis", "preferred-size") + k;
        }
        return "-webkit-" + k + "-ms-" + k + k;
      case 964:
        return "-webkit-" + k + "-ms-flex-" + k + k;
      case 1023:
        if (k.charCodeAt(8) !== 99) break;
        return N = k.substring(k.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + N + "-webkit-" + k + "-ms-flex-pack" + N + k;
      case 1005:
        return v.test(k) ? k.replace(x, ":-webkit-") + k.replace(x, ":-moz-") + k : k;
      case 1e3:
        switch (N = k.substring(13).trim(), y = N.indexOf("-") + 1, N.charCodeAt(0) + N.charCodeAt(y)) {
          case 226:
            N = k.replace(_, "tb");
            break;
          case 232:
            N = k.replace(_, "tb-rl");
            break;
          case 220:
            N = k.replace(_, "lr");
            break;
          default:
            return k;
        }
        return "-webkit-" + k + "-ms-" + N + k;
      case 1017:
        if (k.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (y = (k = g).length - 10, N = (k.charCodeAt(y) === 33 ? k.substring(0, y) : k).substring(g.indexOf(":", 7) + 1).trim(), L = N.charCodeAt(0) + (N.charCodeAt(7) | 0)) {
          case 203:
            if (111 > N.charCodeAt(8)) break;
          case 115:
            k = k.replace(N, "-webkit-" + N) + ";" + k;
            break;
          case 207:
          case 102:
            k = k.replace(N, "-webkit-" + (102 < L ? "inline-" : "") + "box") + ";" + k.replace(N, "-webkit-" + N) + ";" + k.replace(N, "-ms-" + N + "box") + ";" + k;
        }
        return k + ";";
      case 938:
        if (k.charCodeAt(5) === 45) switch (k.charCodeAt(6)) {
          case 105:
            return N = k.replace("-items", ""), "-webkit-" + k + "-webkit-box-" + N + "-ms-flex-" + N + k;
          case 115:
            return "-webkit-" + k + "-ms-flex-item-" + k.replace(T, "") + k;
          default:
            return "-webkit-" + k + "-ms-flex-line-pack" + k.replace("align-content", "").replace(T, "") + k;
        }
        break;
      case 973:
      case 989:
        if (k.charCodeAt(3) !== 45 || k.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (F.test(g) === !0) return (N = g.substring(g.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(g.replace("stretch", "fill-available"), y, C, R).replace(":fill-available", ":stretch") : k.replace(N, "-webkit-" + N) + k.replace(N, "-moz-" + N.replace("fill-", "")) + k;
        break;
      case 962:
        if (k = "-webkit-" + k + (k.charCodeAt(5) === 102 ? "-ms-" + k : "") + k, C + R === 211 && k.charCodeAt(13) === 105 && 0 < k.indexOf("transform", 10)) return k.substring(0, k.indexOf(";", 27) + 1).replace(E, "$1-webkit-$2") + k;
    }
    return k;
  }
  function i(g, y) {
    var C = g.indexOf(y === 1 ? ":" : "{"), R = g.substring(0, y !== 3 ? C : 10);
    return C = g.substring(C + 1, g.length - 1), I(y !== 2 ? R : R.replace(U, "$1"), C, y);
  }
  function l(g, y) {
    var C = o(y, y.charCodeAt(0), y.charCodeAt(1), y.charCodeAt(2));
    return C !== y + ";" ? C.replace(O, " or ($1)").substring(4) : "(" + y + ")";
  }
  function u(g, y, C, R, k, L, N, G, W, V) {
    for (var D = 0, Z = y, Q; D < $; ++D)
      switch (Q = ge[D].call(p, g, Z, C, R, k, L, N, G, W, V)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Z = Q;
      }
    if (Z !== y) return Z;
  }
  function s(g) {
    switch (g) {
      case void 0:
      case null:
        $ = ge.length = 0;
        break;
      default:
        if (typeof g == "function") ge[$++] = g;
        else if (typeof g == "object") for (var y = 0, C = g.length; y < C; ++y)
          s(g[y]);
        else B = !!g | 0;
    }
    return s;
  }
  function c(g) {
    return g = g.prefix, g !== void 0 && (I = null, g ? typeof g != "function" ? se = 1 : (se = 2, I = g) : se = 0), c;
  }
  function p(g, y) {
    var C = g;
    if (33 > C.charCodeAt(0) && (C = C.trim()), w = C, C = [w], 0 < $) {
      var R = u(-1, y, C, C, we, ie, 0, 0, 0, 0);
      R !== void 0 && typeof R == "string" && (y = R);
    }
    var k = t(ot, C, y, 0, 0);
    return 0 < $ && (R = u(-2, k, C, C, we, ie, k.length, 0, 0, 0), R !== void 0 && (k = R)), w = "", Oe = 0, ie = we = 1, k;
  }
  var m = /^\0+/g, h = /[\0\r\f]/g, x = /: */g, v = /zoo|gra/, E = /([,: ])(transform)/g, P = /,\r+?/g, d = /([\t\r\n ])*\f?&/g, a = /@(k\w+)\s*(\S*)\s*/, f = /::(place)/g, S = /:(read-only)/g, _ = /[svh]\w+-[tblr]{2}/, A = /\(\s*(.*)\s*\)/g, O = /([\s\S]*?);/g, T = /-self|flex-/g, U = /[^]*?(:[rp][el]a[\w-]+)[^]*/, F = /stretch|:\s*\w+\-(?:conte|avail)/, pe = /([^-])(image-set\()/, ie = 1, we = 1, Oe = 0, se = 1, ot = [], ge = [], $ = 0, I = null, B = 0, w = "";
  return p.use = s, p.set = c, e !== void 0 && c(e), p;
}
var Av = {
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
function Tv(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ov = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Vc = /* @__PURE__ */ Tv(
  function(e) {
    return Ov.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), qp = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce = typeof Symbol == "function" && Symbol.for, ca = Ce ? Symbol.for("react.element") : 60103, fa = Ce ? Symbol.for("react.portal") : 60106, sl = Ce ? Symbol.for("react.fragment") : 60107, al = Ce ? Symbol.for("react.strict_mode") : 60108, cl = Ce ? Symbol.for("react.profiler") : 60114, fl = Ce ? Symbol.for("react.provider") : 60109, dl = Ce ? Symbol.for("react.context") : 60110, da = Ce ? Symbol.for("react.async_mode") : 60111, pl = Ce ? Symbol.for("react.concurrent_mode") : 60111, hl = Ce ? Symbol.for("react.forward_ref") : 60112, ml = Ce ? Symbol.for("react.suspense") : 60113, Rv = Ce ? Symbol.for("react.suspense_list") : 60120, yl = Ce ? Symbol.for("react.memo") : 60115, gl = Ce ? Symbol.for("react.lazy") : 60116, zv = Ce ? Symbol.for("react.block") : 60121, $v = Ce ? Symbol.for("react.fundamental") : 60117, Lv = Ce ? Symbol.for("react.responder") : 60118, jv = Ce ? Symbol.for("react.scope") : 60119;
function rt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ca:
        switch (e = e.type, e) {
          case da:
          case pl:
          case sl:
          case cl:
          case al:
          case ml:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case dl:
              case hl:
              case gl:
              case yl:
              case fl:
                return e;
              default:
                return t;
            }
        }
      case fa:
        return t;
    }
  }
}
function eh(e) {
  return rt(e) === pl;
}
q.AsyncMode = da;
q.ConcurrentMode = pl;
q.ContextConsumer = dl;
q.ContextProvider = fl;
q.Element = ca;
q.ForwardRef = hl;
q.Fragment = sl;
q.Lazy = gl;
q.Memo = yl;
q.Portal = fa;
q.Profiler = cl;
q.StrictMode = al;
q.Suspense = ml;
q.isAsyncMode = function(e) {
  return eh(e) || rt(e) === da;
};
q.isConcurrentMode = eh;
q.isContextConsumer = function(e) {
  return rt(e) === dl;
};
q.isContextProvider = function(e) {
  return rt(e) === fl;
};
q.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ca;
};
q.isForwardRef = function(e) {
  return rt(e) === hl;
};
q.isFragment = function(e) {
  return rt(e) === sl;
};
q.isLazy = function(e) {
  return rt(e) === gl;
};
q.isMemo = function(e) {
  return rt(e) === yl;
};
q.isPortal = function(e) {
  return rt(e) === fa;
};
q.isProfiler = function(e) {
  return rt(e) === cl;
};
q.isStrictMode = function(e) {
  return rt(e) === al;
};
q.isSuspense = function(e) {
  return rt(e) === ml;
};
q.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === sl || e === pl || e === cl || e === al || e === ml || e === Rv || typeof e == "object" && e !== null && (e.$$typeof === gl || e.$$typeof === yl || e.$$typeof === fl || e.$$typeof === dl || e.$$typeof === hl || e.$$typeof === $v || e.$$typeof === Lv || e.$$typeof === jv || e.$$typeof === zv);
};
q.typeOf = rt;
qp.exports = q;
var Dv = qp.exports, pa = Dv, Fv = {
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
}, Mv = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Iv = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, th = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ha = {};
ha[pa.ForwardRef] = Iv;
ha[pa.Memo] = th;
function Wc(e) {
  return pa.isMemo(e) ? th : ha[e.$$typeof] || Fv;
}
var Bv = Object.defineProperty, Uv = Object.getOwnPropertyNames, Qc = Object.getOwnPropertySymbols, Hv = Object.getOwnPropertyDescriptor, Vv = Object.getPrototypeOf, Kc = Object.prototype;
function nh(e, t, n) {
  if (typeof t != "string") {
    if (Kc) {
      var r = Vv(t);
      r && r !== Kc && nh(e, r, n);
    }
    var o = Uv(t);
    Qc && (o = o.concat(Qc(t)));
    for (var i = Wc(e), l = Wc(t), u = 0; u < o.length; ++u) {
      var s = o[u];
      if (!Mv[s] && !(n && n[s]) && !(l && l[s]) && !(i && i[s])) {
        var c = Hv(t, s);
        try {
          Bv(e, s, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var Wv = nh;
const Qv = /* @__PURE__ */ Ri(Wv);
function $t() {
  return ($t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Yc = function(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}, rs = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Jp.typeOf(e);
}, Ti = Object.freeze([]), on = Object.freeze({});
function uo(e) {
  return typeof e == "function";
}
function Gc(e) {
  return e.displayName || e.name || "Component";
}
function ma(e) {
  return e && typeof e.styledComponentId == "string";
}
var ar = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ya = typeof window < "u" && "HTMLElement" in window, Kv = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY));
function wo(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
}
var Yv = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(n) {
    for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
    return r;
  }, t.insertRules = function(n, r) {
    if (n >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, l = i; n >= l; ) (l <<= 1) < 0 && wo(16, "" + n);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(o), this.length = l;
      for (var u = i; u < l; u++) this.groupSizes[u] = 0;
    }
    for (var s = this.indexOfGroup(n + 1), c = 0, p = r.length; c < p; c++) this.tag.insertRule(s, r[c]) && (this.groupSizes[n]++, s++);
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
}(), Jo = /* @__PURE__ */ new Map(), Oi = /* @__PURE__ */ new Map(), Ir = 1, Mo = function(e) {
  if (Jo.has(e)) return Jo.get(e);
  for (; Oi.has(Ir); ) Ir++;
  var t = Ir++;
  return Jo.set(e, t), Oi.set(t, e), t;
}, Gv = function(e) {
  return Oi.get(e);
}, Xv = function(e, t) {
  t >= Ir && (Ir = t + 1), Jo.set(e, t), Oi.set(t, e);
}, Zv = "style[" + ar + '][data-styled-version="5.3.11"]', bv = new RegExp("^" + ar + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Jv = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, l = o.length; i < l; i++) (r = o[i]) && e.registerName(t, r);
}, qv = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = n.length; o < i; o++) {
    var l = n[o].trim();
    if (l) {
      var u = l.match(bv);
      if (u) {
        var s = 0 | parseInt(u[1], 10), c = u[2];
        s !== 0 && (Xv(c, s), Jv(e, c, u[3]), e.getTag().insertRules(s, r)), r.length = 0;
      } else r.push(l);
    }
  }
}, e0 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, rh = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(u) {
    for (var s = u.childNodes, c = s.length; c >= 0; c--) {
      var p = s[c];
      if (p && p.nodeType === 1 && p.hasAttribute(ar)) return p;
    }
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ar, "active"), r.setAttribute("data-styled-version", "5.3.11");
  var l = e0();
  return l && r.setAttribute("nonce", l), n.insertBefore(r, i), r;
}, t0 = function() {
  function e(n) {
    var r = this.element = rh(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var i = document.styleSheets, l = 0, u = i.length; l < u; l++) {
        var s = i[l];
        if (s.ownerNode === o) return s;
      }
      wo(17);
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
}(), n0 = function() {
  function e(n) {
    var r = this.element = rh(n);
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
}(), r0 = function() {
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
}(), Xc = ya, o0 = { isServer: !ya, useCSSOMInjection: !Kv }, oh = function() {
  function e(n, r, o) {
    n === void 0 && (n = on), r === void 0 && (r = {}), this.options = $t({}, o0, {}, n), this.gs = r, this.names = new Map(o), this.server = !!n.isServer, !this.server && ya && Xc && (Xc = !1, function(i) {
      for (var l = document.querySelectorAll(Zv), u = 0, s = l.length; u < s; u++) {
        var c = l[u];
        c && c.getAttribute(ar) !== "active" && (qv(i, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(n) {
    return Mo(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e($t({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, l = r.target, n = o ? new r0(l) : i ? new t0(l) : new n0(l), new Yv(n)));
    var n, r, o, i, l;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (Mo(n), this.names.has(n)) this.names.get(n).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(n, o);
    }
  }, t.insertRules = function(n, r, o) {
    this.registerName(n, r), this.getTag().insertRules(Mo(n), o);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(Mo(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), o = r.length, i = "", l = 0; l < o; l++) {
        var u = Gv(l);
        if (u !== void 0) {
          var s = n.names.get(u), c = r.getGroup(l);
          if (s && c && s.size) {
            var p = ar + ".g" + l + '[id="' + u + '"]', m = "";
            s !== void 0 && s.forEach(function(h) {
              h.length > 0 && (m += h + ",");
            }), i += "" + c + p + '{content:"' + m + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), i0 = /(a)(d)/gi, Zc = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function os(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Zc(t % 52) + n;
  return (Zc(t % 52) + n).replace(i0, "$1-$2");
}
var Yn = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, ih = function(e) {
  return Yn(5381, e);
};
function l0(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (uo(n) && !ma(n)) return !1;
  }
  return !0;
}
var u0 = ih("5.3.11"), s0 = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && l0(t), this.componentId = n, this.baseHash = Yn(u0, n), this.baseStyle = r, oh.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var l = cr(this.rules, t, n, r).join(""), u = os(Yn(this.baseHash, l) >>> 0);
      if (!n.hasNameForId(o, u)) {
        var s = r(l, "." + u, void 0, o);
        n.insertRules(o, u, s);
      }
      i.push(u), this.staticRulesId = u;
    }
    else {
      for (var c = this.rules.length, p = Yn(this.baseHash, r.hash), m = "", h = 0; h < c; h++) {
        var x = this.rules[h];
        if (typeof x == "string") m += x;
        else if (x) {
          var v = cr(x, t, n, r), E = Array.isArray(v) ? v.join("") : v;
          p = Yn(p, E + h), m += E;
        }
      }
      if (m) {
        var P = os(p >>> 0);
        if (!n.hasNameForId(o, P)) {
          var d = r(m, "." + P, void 0, o);
          n.insertRules(o, P, d);
        }
        i.push(P);
      }
    }
    return i.join(" ");
  }, e;
}(), a0 = /^\s*\/\/.*$/gm, c0 = [":", "[", ".", "#"];
function f0(e) {
  var t, n, r, o, i = on, l = i.options, u = l === void 0 ? on : l, s = i.plugins, c = s === void 0 ? Ti : s, p = new Nv(u), m = [], h = /* @__PURE__ */ function(E) {
    function P(d) {
      if (d) try {
        E(d + "}");
      } catch {
      }
    }
    return function(d, a, f, S, _, A, O, T, U, F) {
      switch (d) {
        case 1:
          if (U === 0 && a.charCodeAt(0) === 64) return E(a + ";"), "";
          break;
        case 2:
          if (T === 0) return a + "/*|*/";
          break;
        case 3:
          switch (T) {
            case 102:
            case 112:
              return E(f[0] + a), "";
            default:
              return a + (F === 0 ? "/*|*/" : "");
          }
        case -2:
          a.split("/*|*/}").forEach(P);
      }
    };
  }(function(E) {
    m.push(E);
  }), x = function(E, P, d) {
    return P === 0 && c0.indexOf(d[n.length]) !== -1 || d.match(o) ? E : "." + t;
  };
  function v(E, P, d, a) {
    a === void 0 && (a = "&");
    var f = E.replace(a0, ""), S = P && d ? d + " " + P + " { " + f + " }" : f;
    return t = a, n = P, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), p(d || !P ? "" : P, S);
  }
  return p.use([].concat(c, [function(E, P, d) {
    E === 2 && d.length && d[0].lastIndexOf(n) > 0 && (d[0] = d[0].replace(r, x));
  }, h, function(E) {
    if (E === -2) {
      var P = m;
      return m = [], P;
    }
  }])), v.hash = c.length ? c.reduce(function(E, P) {
    return P.name || wo(15), Yn(E, P.name);
  }, 5381).toString() : "", v;
}
var lh = ln.createContext();
lh.Consumer;
var uh = ln.createContext(), d0 = (uh.Consumer, new oh()), is = f0();
function p0() {
  return Ve.useContext(lh) || d0;
}
function h0() {
  return Ve.useContext(uh) || is;
}
var sh = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = is);
      var l = r.name + i.hash;
      o.hasNameForId(r.id, l) || o.insertRules(r.id, l, i(r.rules, l, "@keyframes"));
    }, this.toString = function() {
      return wo(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = is), this.name + t.hash;
  }, e;
}(), m0 = /([A-Z])/, y0 = /([A-Z])/g, g0 = /^ms-/, v0 = function(e) {
  return "-" + e.toLowerCase();
};
function bc(e) {
  return m0.test(e) ? e.replace(y0, v0).replace(g0, "-ms-") : e;
}
var Jc = function(e) {
  return e == null || e === !1 || e === "";
};
function cr(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], l = 0, u = e.length; l < u; l += 1) (o = cr(e[l], t, n, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Jc(e)) return "";
  if (ma(e)) return "." + e.styledComponentId;
  if (uo(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !t) return e;
    var s = e(t);
    return cr(s, t, n, r);
  }
  var c;
  return e instanceof sh ? n ? (e.inject(n, r), e.getName(r)) : e : rs(e) ? function p(m, h) {
    var x, v, E = [];
    for (var P in m) m.hasOwnProperty(P) && !Jc(m[P]) && (Array.isArray(m[P]) && m[P].isCss || uo(m[P]) ? E.push(bc(P) + ":", m[P], ";") : rs(m[P]) ? E.push.apply(E, p(m[P], P)) : E.push(bc(P) + ": " + (x = P, (v = m[P]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || x in Av || x.startsWith("--") ? String(v).trim() : v + "px") + ";"));
    return h ? [h + " {"].concat(E, ["}"]) : E;
  }(e) : e.toString();
}
var qc = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function ah(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return uo(e) || rs(e) ? qc(cr(Yc(Ti, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : qc(cr(Yc(e, n)));
}
var w0 = function(e, t, n) {
  return n === void 0 && (n = on), e.theme !== n.theme && e.theme || t || n.theme;
}, S0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, k0 = /(^-|-$)/g;
function Jl(e) {
  return e.replace(S0, "-").replace(k0, "");
}
var ch = function(e) {
  return os(ih(e) >>> 0);
};
function Io(e) {
  return typeof e == "string" && !0;
}
var ls = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, x0 = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function E0(e, t, n) {
  var r = e[n];
  ls(t) && ls(r) ? fh(r, t) : e[n] = t;
}
function fh(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var l = i[o];
    if (ls(l)) for (var u in l) x0(u) && E0(e, l[u], u);
  }
  return e;
}
var dh = ln.createContext();
dh.Consumer;
var ql = {};
function ph(e, t, n) {
  var r = ma(e), o = !Io(e), i = t.attrs, l = i === void 0 ? Ti : i, u = t.componentId, s = u === void 0 ? function(a, f) {
    var S = typeof a != "string" ? "sc" : Jl(a);
    ql[S] = (ql[S] || 0) + 1;
    var _ = S + "-" + ch("5.3.11" + S + ql[S]);
    return f ? f + "-" + _ : _;
  }(t.displayName, t.parentComponentId) : u, c = t.displayName, p = c === void 0 ? function(a) {
    return Io(a) ? "styled." + a : "Styled(" + Gc(a) + ")";
  }(e) : c, m = t.displayName && t.componentId ? Jl(t.displayName) + "-" + t.componentId : t.componentId || s, h = r && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, x = t.shouldForwardProp;
  r && e.shouldForwardProp && (x = t.shouldForwardProp ? function(a, f, S) {
    return e.shouldForwardProp(a, f, S) && t.shouldForwardProp(a, f, S);
  } : e.shouldForwardProp);
  var v, E = new s0(n, m, r ? e.componentStyle : void 0), P = E.isStatic && l.length === 0, d = function(a, f) {
    return function(S, _, A, O) {
      var T = S.attrs, U = S.componentStyle, F = S.defaultProps, pe = S.foldedComponentIds, ie = S.shouldForwardProp, we = S.styledComponentId, Oe = S.target, se = function(R, k, L) {
        R === void 0 && (R = on);
        var N = $t({}, k, { theme: R }), G = {};
        return L.forEach(function(W) {
          var V, D, Z, Q = W;
          for (V in uo(Q) && (Q = Q(N)), Q) N[V] = G[V] = V === "className" ? (D = G[V], Z = Q[V], D && Z ? D + " " + Z : D || Z) : Q[V];
        }), [N, G];
      }(w0(_, Ve.useContext(dh), F) || on, _, T), ot = se[0], ge = se[1], $ = function(R, k, L, N) {
        var G = p0(), W = h0(), V = k ? R.generateAndInjectStyles(on, G, W) : R.generateAndInjectStyles(L, G, W);
        return V;
      }(U, O, ot), I = A, B = ge.$as || _.$as || ge.as || _.as || Oe, w = Io(B), g = ge !== _ ? $t({}, _, {}, ge) : _, y = {};
      for (var C in g) C[0] !== "$" && C !== "as" && (C === "forwardedAs" ? y.as = g[C] : (ie ? ie(C, Vc, B) : !w || Vc(C)) && (y[C] = g[C]));
      return _.style && ge.style !== _.style && (y.style = $t({}, _.style, {}, ge.style)), y.className = Array.prototype.concat(pe, we, $ !== we ? $ : null, _.className, ge.className).filter(Boolean).join(" "), y.ref = I, Ve.createElement(B, y);
    }(v, a, f, P);
  };
  return d.displayName = p, (v = ln.forwardRef(d)).attrs = h, v.componentStyle = E, v.displayName = p, v.shouldForwardProp = x, v.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ti, v.styledComponentId = m, v.target = r ? e.target : e, v.withComponent = function(a) {
    var f = t.componentId, S = function(A, O) {
      if (A == null) return {};
      var T, U, F = {}, pe = Object.keys(A);
      for (U = 0; U < pe.length; U++) T = pe[U], O.indexOf(T) >= 0 || (F[T] = A[T]);
      return F;
    }(t, ["componentId"]), _ = f && f + "-" + (Io(a) ? a : Jl(Gc(a)));
    return ph(a, $t({}, S, { attrs: h, componentId: _ }), n);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(a) {
    this._foldedDefaultProps = r ? fh({}, e.defaultProps, a) : a;
  } }), Object.defineProperty(v, "toString", { value: function() {
    return "." + v.styledComponentId;
  } }), o && Qv(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var cn = function(e) {
  return function t(n, r, o) {
    if (o === void 0 && (o = on), !Jp.isValidElementType(r)) return wo(1, String(r));
    var i = function() {
      return n(r, o, ah.apply(void 0, arguments));
    };
    return i.withConfig = function(l) {
      return t(n, r, $t({}, o, {}, l));
    }, i.attrs = function(l) {
      return t(n, r, $t({}, o, { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
    }, i;
  }(ph, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  cn[e] = cn(e);
});
function u1(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var o = ah.apply(void 0, [e].concat(n)).join(""), i = ch(o);
  return new sh(i, o);
}
const C0 = Ve.createContext(null), eu = {
  didCatch: !1,
  error: null
};
class _0 extends Ve.Component {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = eu;
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
      }), this.setState(eu);
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
    if (r && n.error !== null && P0(t.resetKeys, o)) {
      var i, l;
      (i = (l = this.props).onReset) === null || i === void 0 || i.call(l, {
        next: o,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState(eu);
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
        u = Ve.createElement(r, s);
      else if (o === null || Ve.isValidElement(o))
        u = o;
      else
        throw l;
    }
    return Ve.createElement(C0.Provider, {
      value: {
        didCatch: i,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, u);
  }
}
function P0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((n, r) => !Object.is(n, t[r]));
}
const N0 = [
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
], tr = {
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
function A0() {
  const e = Sv((t) => t.theme);
  return /* @__PURE__ */ me.jsxs("style", { children: [
    O0(e.theme),
    T0()
  ] });
}
function T0() {
  return `
  body {
    padding: 0;
    margin: 0;
    background-color: var(--xliic-background);
    color: var(--xliic-foreground);
    }`;
}
function O0(e) {
  const t = [];
  if (e !== void 0)
    for (const n of N0)
      e[n] && t.push(`${tr[n]}: ${e[n]};`);
  return `:root {
    ${t.join(`
`)}
  }`;
}
const hh = ln.createContext([
  {
    id: "starting",
    title: "Starting",
    element: ln.createElement("div", {}, "Empty starting route")
  }
]);
function mh(e, t) {
  if (t.length === 0)
    return;
  const [n, ...r] = t;
  for (const o of e)
    if (o.id === n)
      return r.length === 0 ? o : o.children ? mh(o.children, r) : void 0;
}
function R0() {
  return /* @__PURE__ */ me.jsx(hh.Consumer, { children: (e) => /* @__PURE__ */ me.jsx(z0, { routes: e }) });
}
function z0({ routes: e }) {
  const t = Xp((r) => r.router.current), n = mh(e, t);
  return !n || n.link ? /* @__PURE__ */ me.jsx("div", {}) : n.element;
}
function $0() {
  return /* @__PURE__ */ me.jsx(hh.Consumer, { children: (e) => /* @__PURE__ */ me.jsx(L0, { routes: e }) });
}
function L0({ routes: e }) {
  var u;
  const t = Cv(), r = Xp((s) => s.router.current).slice(0, 2), o = r.slice(0, 1), i = r.length > 1 ? (u = e.find((s) => s.id === r[0])) == null ? void 0 : u.children : e, l = i == null ? void 0 : i.find((s) => s.id === r[r.length - 1]);
  return i ? (l == null ? void 0 : l.navigation) === !1 ? l.title !== "" ? /* @__PURE__ */ me.jsx(D0, { children: /* @__PURE__ */ me.jsx(M0, { children: l.title }) }) : null : /* @__PURE__ */ me.jsx(j0, { children: i.map(({ id: s, title: c, link: p }) => /* @__PURE__ */ me.jsx(
    F0,
    {
      active: s === r[r.length - 1],
      onClick: () => {
        t(p ? Ev(p) : xv([...o, s]));
      },
      children: typeof c == "string" ? /* @__PURE__ */ me.jsx("div", { children: c }) : c
    },
    s
  )) }) : null;
}
const j0 = cn.nav`
  height: 28px;
  display: flex;
  padding: 0px 16px;
  padding-top: 6px;
  justify-content: space-between;
  font-size: 14px;
  border-bottom: 1px solid var(${tr.border});
`, D0 = cn.div`
  height: 35px;
  display: flex;
  padding: 0px 16px;
  border-bottom: 1px solid var(${tr.border});
`, F0 = cn.div`
  padding: 0 1em;
  display: flex;
  align-items: center;
  ${(e) => e.active ? `border-bottom: 3px solid var(${tr.buttonBackground});` : "opacity: 0.7; border-bottom: 3px solid transparent; cursor: pointer;"};
  > div {
    border: ${(e) => e.active && tr.contrastActiveBorder ? `1px solid var(${tr.contrastActiveBorder})` : "none"};
  }
`, M0 = cn.div`
  place-self: center;
  font-size: 16px;
  font-weight: 500;
  display: flex;
`;
function s1(e, t) {
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
function a1(e) {
  const t = Object.keys(e);
  for (const n of t)
    e[n] ? (console.log("starting listener for: ", n), e[n]()) : console.log("skipping listener for: ", n);
}
function I0({ error: e }) {
  return /* @__PURE__ */ me.jsxs("div", { children: [
    /* @__PURE__ */ me.jsx("p", { children: "Unexpected error:" }),
    /* @__PURE__ */ me.jsx("pre", { children: e.message })
  ] });
}
function c1() {
  return /* @__PURE__ */ me.jsxs(_0, { FallbackComponent: I0, children: [
    /* @__PURE__ */ me.jsx(A0, {}),
    /* @__PURE__ */ me.jsx(B0, { children: /* @__PURE__ */ me.jsx($0, {}) }),
    /* @__PURE__ */ me.jsx(U0, { children: /* @__PURE__ */ me.jsx(R0, {}) })
  ] });
}
const B0 = cn.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 35px;
`, U0 = cn.div`
  position: fixed;
  top: 35px;
  left: 0;
  right: 0;
  bottom: 0;
`, f1 = (e) => /* @__PURE__ */ me.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ me.jsx("path", { d: "M506.3 417 293 53c-8.2-14-22.6-21-37-21-14.4 0-28.8 7-37.9 21L4.9 417c-15.49 27.9 4.951 63 37.84 63h426.6c32.76 0 53.26-35 36.96-63zM52.58 432 255.1 84.8 459.4 432H52.58zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44s14.11 31.44 31.48 31.44 31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1zM232 184v96c0 13.3 10.8 24 24 24s24-10.75 24-24v-96c0-13.2-10.7-24-24-24s-24 10.8-24 24z" }) });
export {
  Yg as $,
  Sa as A,
  jp as B,
  Me as C,
  e1 as D,
  Rp as E,
  J0 as F,
  Qg as G,
  Kg as H,
  b0 as I,
  kg as J,
  na as K,
  X0 as L,
  Pt as M,
  c1 as N,
  Z0 as O,
  K0 as P,
  Ic as Q,
  ln as R,
  f1 as S,
  tr as T,
  Wg as U,
  qu as V,
  u1 as W,
  Ap as X,
  Bt as Y,
  G0 as Z,
  xp as _,
  q0 as a,
  Y0 as a0,
  mg as a1,
  Q0 as a2,
  W0 as a3,
  vp as b,
  Dp as c,
  t1 as d,
  Ve as e,
  Xy as f,
  hh as g,
  A0 as h,
  go as i,
  me as j,
  R0 as k,
  n1 as l,
  s1 as m,
  r1 as n,
  Ri as o,
  jt as p,
  cn as q,
  l1 as r,
  a1 as s,
  o1 as t,
  gg as u,
  mr as v,
  pp as w,
  xv as x,
  V0 as y,
  Ev as z
};
