var Ph = Object.defineProperty;
var Nh = (e, t, n) => t in e ? Ph(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pr = (e, t, n) => Nh(e, typeof t != "symbol" ? t + "" : t, n);
function Th(e, t) {
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
var hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ri(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function l1(e) {
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
var rf = { exports: {} }, zi = {}, of = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo = Symbol.for("react.element"), Oh = Symbol.for("react.portal"), Ah = Symbol.for("react.fragment"), Rh = Symbol.for("react.strict_mode"), zh = Symbol.for("react.profiler"), $h = Symbol.for("react.provider"), jh = Symbol.for("react.context"), Dh = Symbol.for("react.forward_ref"), Mh = Symbol.for("react.suspense"), Lh = Symbol.for("react.memo"), Fh = Symbol.for("react.lazy"), va = Symbol.iterator;
function Ih(e) {
  return e === null || typeof e != "object" ? null : (e = va && e[va] || e["@@iterator"], typeof e == "function" ? e : null);
}
var lf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, uf = Object.assign, sf = {};
function cr(e, t, n) {
  this.props = e, this.context = t, this.refs = sf, this.updater = n || lf;
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
cr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function af() {
}
af.prototype = cr.prototype;
function us(e, t, n) {
  this.props = e, this.context = t, this.refs = sf, this.updater = n || lf;
}
var ss = us.prototype = new af();
ss.constructor = us;
uf(ss, cr.prototype);
ss.isPureReactComponent = !0;
var wa = Array.isArray, cf = Object.prototype.hasOwnProperty, as = { current: null }, ff = { key: !0, ref: !0, __self: !0, __source: !0 };
function df(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) cf.call(t, r) && !ff.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: uo, type: e, key: i, ref: l, props: o, _owner: as.current };
}
function Bh(e, t) {
  return { $$typeof: uo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function cs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === uo;
}
function Uh(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Sa = /\/+/g;
function kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Uh("" + e.key) : t.toString(36);
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
        case uo:
        case Oh:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + kl(l, 0) : r, wa(o) ? (n = "", e != null && (n = e.replace(Sa, "$&/") + "/"), Bo(o, t, n, "", function(a) {
    return a;
  })) : o != null && (cs(o) && (o = Bh(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Sa, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", wa(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + kl(i, u);
    l += Bo(i, t, n, s, o);
  }
  else if (s = Ih(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + kl(i, u++), l += Bo(i, t, n, s, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function wo(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Bo(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Hh(e) {
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
var Ie = { current: null }, Uo = { transition: null }, Wh = { ReactCurrentDispatcher: Ie, ReactCurrentBatchConfig: Uo, ReactCurrentOwner: as };
function pf() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = { map: wo, forEach: function(e, t, n) {
  wo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return wo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return wo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!cs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Y.Component = cr;
Y.Fragment = Ah;
Y.Profiler = zh;
Y.PureComponent = us;
Y.StrictMode = Rh;
Y.Suspense = Mh;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wh;
Y.act = pf;
Y.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = uf({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = as.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) cf.call(t, s) && !ff.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: uo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
Y.createContext = function(e) {
  return e = { $$typeof: jh, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: $h, _context: e }, e.Consumer = e;
};
Y.createElement = df;
Y.createFactory = function(e) {
  var t = df.bind(null, e);
  return t.type = e, t;
};
Y.createRef = function() {
  return { current: null };
};
Y.forwardRef = function(e) {
  return { $$typeof: Dh, render: e };
};
Y.isValidElement = cs;
Y.lazy = function(e) {
  return { $$typeof: Fh, _payload: { _status: -1, _result: e }, _init: Hh };
};
Y.memo = function(e, t) {
  return { $$typeof: Lh, type: e, compare: t === void 0 ? null : t };
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
Y.unstable_act = pf;
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
of.exports = Y;
var We = of.exports;
const ln = /* @__PURE__ */ Ri(We), ka = /* @__PURE__ */ Th({
  __proto__: null,
  default: ln
}, [We]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vh = We, Qh = Symbol.for("react.element"), Kh = Symbol.for("react.fragment"), Yh = Object.prototype.hasOwnProperty, Gh = Vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Xh = { key: !0, ref: !0, __self: !0, __source: !0 };
function hf(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Yh.call(t, r) && !Xh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Qh, type: e, key: i, ref: l, props: o, _owner: Gh.current };
}
zi.Fragment = Kh;
zi.jsx = hf;
zi.jsxs = hf;
rf.exports = zi;
var me = rf.exports, mf = { exports: {} }, tt = {}, yf = { exports: {} }, gf = {};
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
      var w = B - 1 >>> 1, v = $[w];
      if (0 < o(v, I)) $[w] = I, $[B] = v, B = w;
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
      e: for (var w = 0, v = $.length, y = v >>> 1; w < y; ) {
        var C = 2 * (w + 1) - 1, R = $[C], k = C + 1, j = $[k];
        if (0 > o(R, B)) k < v && 0 > o(j, R) ? ($[w] = j, $[k] = B, w = k) : ($[w] = R, $[C] = B, w = C);
        else if (k < v && 0 > o(j, B)) $[w] = j, $[k] = B, w = k;
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
  var s = [], a = [], d = 1, m = null, h = 3, x = !1, g = !1, E = !1, _ = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f($) {
    for (var I = n(a); I !== null; ) {
      if (I.callback === null) r(a);
      else if (I.startTime <= $) r(a), I.sortIndex = I.expirationTime, t(s, I);
      else break;
      I = n(a);
    }
  }
  function S($) {
    if (E = !1, f($), !g) if (n(s) !== null) g = !0, ot(P);
    else {
      var I = n(a);
      I !== null && ge(S, I.startTime - $);
    }
  }
  function P($, I) {
    g = !1, E && (E = !1, p(O), O = -1), x = !0;
    var B = h;
    try {
      for (f(I), m = n(s); m !== null && (!(m.expirationTime > I) || $ && !pe()); ) {
        var w = m.callback;
        if (typeof w == "function") {
          m.callback = null, h = m.priorityLevel;
          var v = w(m.expirationTime <= I);
          I = e.unstable_now(), typeof v == "function" ? m.callback = v : m === n(s) && r(s), f(I);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var y = !0;
      else {
        var C = n(a);
        C !== null && ge(S, C.startTime - I), y = !1;
      }
      return y;
    } finally {
      m = null, h = B, x = !1;
    }
  }
  var T = !1, A = null, O = -1, U = 5, L = -1;
  function pe() {
    return !(e.unstable_now() - L < U);
  }
  function ie() {
    if (A !== null) {
      var $ = e.unstable_now();
      L = $;
      var I = !0;
      try {
        I = A(!0, $);
      } finally {
        I ? we() : (T = !1, A = null);
      }
    } else T = !1;
  }
  var we;
  if (typeof c == "function") we = function() {
    c(ie);
  };
  else if (typeof MessageChannel < "u") {
    var Ae = new MessageChannel(), se = Ae.port2;
    Ae.port1.onmessage = ie, we = function() {
      se.postMessage(null);
    };
  } else we = function() {
    _(ie, 0);
  };
  function ot($) {
    A = $, T || (T = !0, we());
  }
  function ge($, I) {
    O = _(function() {
      $(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null;
  }, e.unstable_continueExecution = function() {
    g || x || (g = !0, ot(P));
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
        var v = -1;
        break;
      case 2:
        v = 250;
        break;
      case 5:
        v = 1073741823;
        break;
      case 4:
        v = 1e4;
        break;
      default:
        v = 5e3;
    }
    return v = B + v, $ = { id: d++, callback: I, priorityLevel: $, startTime: B, expirationTime: v, sortIndex: -1 }, B > w ? ($.sortIndex = B, t(a, $), n(s) === null && $ === n(a) && (E ? (p(O), O = -1) : E = !0, ge(S, B - w))) : ($.sortIndex = v, t(s, $), g || x || (g = !0, ot(P))), $;
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
})(gf);
yf.exports = gf;
var bh = yf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zh = We, qe = bh;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var vf = /* @__PURE__ */ new Set(), Ir = {};
function zn(e, t) {
  tr(e, t), tr(e + "Capture", t);
}
function tr(e, t) {
  for (Ir[e] = t, e = 0; e < t.length; e++) vf.add(t[e]);
}
var Lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tu = Object.prototype.hasOwnProperty, Jh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, xa = {}, Ea = {};
function qh(e) {
  return tu.call(Ea, e) ? !0 : tu.call(xa, e) ? !1 : Jh.test(e) ? Ea[e] = !0 : (xa[e] = !0, !1);
}
function em(e, t, n, r) {
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
function tm(e, t, n, r) {
  if (t === null || typeof t > "u" || em(e, t, n, r)) return !0;
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
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Oe[e] = new Be(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Oe[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Oe[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Oe[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Oe[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Oe[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Oe[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Oe[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Oe[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  Oe[t] = new Be(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(fs, ds);
  Oe[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(fs, ds);
  Oe[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Oe[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Oe[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ps(e, t, n, r) {
  var o = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (tm(t, n, o, r) && (n = null), r || o === null ? qh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Zh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, So = Symbol.for("react.element"), Dn = Symbol.for("react.portal"), Mn = Symbol.for("react.fragment"), hs = Symbol.for("react.strict_mode"), nu = Symbol.for("react.profiler"), wf = Symbol.for("react.provider"), Sf = Symbol.for("react.context"), ms = Symbol.for("react.forward_ref"), ru = Symbol.for("react.suspense"), ou = Symbol.for("react.suspense_list"), ys = Symbol.for("react.memo"), Vt = Symbol.for("react.lazy"), kf = Symbol.for("react.offscreen"), Ca = Symbol.iterator;
function mr(e) {
  return e === null || typeof e != "object" ? null : (e = Ca && e[Ca] || e["@@iterator"], typeof e == "function" ? e : null);
}
var de = Object.assign, xl;
function Er(e) {
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
    El = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Er(e) : "";
}
function nm(e) {
  switch (e.tag) {
    case 5:
      return Er(e.type);
    case 16:
      return Er("Lazy");
    case 13:
      return Er("Suspense");
    case 19:
      return Er("SuspenseList");
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
    case Mn:
      return "Fragment";
    case Dn:
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
    case Sf:
      return (e.displayName || "Context") + ".Consumer";
    case wf:
      return (e._context.displayName || "Context") + ".Provider";
    case ms:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ys:
      return t = e.displayName || null, t !== null ? t : iu(e.type) || "Memo";
    case Vt:
      t = e._payload, e = e._init;
      try {
        return iu(e(t));
      } catch {
      }
  }
  return null;
}
function rm(e) {
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
function xf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function om(e) {
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
function ko(e) {
  e._valueTracker || (e._valueTracker = om(e));
}
function Ef(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = xf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
function _a(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = un(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Cf(e, t) {
  t = t.checked, t != null && ps(e, "checked", t, !1);
}
function uu(e, t) {
  Cf(e, t);
  var n = un(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? su(e, t.type, n) : t.hasOwnProperty("defaultValue") && su(e, t.type, un(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Pa(e, t, n) {
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
var Cr = Array.isArray;
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
function Na(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(z(92));
      if (Cr(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: un(n) };
}
function _f(e, t) {
  var n = un(t.value), r = un(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ta(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pf(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Pf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xo, Nf = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (xo = xo || document.createElement("div"), xo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Br(e, t) {
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
}, im = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tr).forEach(function(e) {
  im.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Tr[t] = Tr[e];
  });
});
function Tf(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tr.hasOwnProperty(e) && Tr[e] ? ("" + t).trim() : t + "px";
}
function Of(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Tf(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var lm = de({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function fu(e, t) {
  if (t) {
    if (lm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
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
var hu = null, Xn = null, bn = null;
function Oa(e) {
  if (e = co(e)) {
    if (typeof hu != "function") throw Error(z(280));
    var t = e.stateNode;
    t && (t = Li(t), hu(e.stateNode, e.type, t));
  }
}
function Af(e) {
  Xn ? bn ? bn.push(e) : bn = [e] : Xn = e;
}
function Rf() {
  if (Xn) {
    var e = Xn, t = bn;
    if (bn = Xn = null, Oa(e), t) for (e = 0; e < t.length; e++) Oa(t[e]);
  }
}
function zf(e, t) {
  return e(t);
}
function $f() {
}
var _l = !1;
function jf(e, t, n) {
  if (_l) return e(t, n);
  _l = !0;
  try {
    return zf(e, t, n);
  } finally {
    _l = !1, (Xn !== null || bn !== null) && ($f(), Rf());
  }
}
function Ur(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Li(n);
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
if (Lt) try {
  var yr = {};
  Object.defineProperty(yr, "passive", { get: function() {
    mu = !0;
  } }), window.addEventListener("test", yr, yr), window.removeEventListener("test", yr, yr);
} catch {
  mu = !1;
}
function um(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Or = !1, ei = null, ti = !1, yu = null, sm = { onError: function(e) {
  Or = !0, ei = e;
} };
function am(e, t, n, r, o, i, l, u, s) {
  Or = !1, ei = null, um.apply(sm, arguments);
}
function cm(e, t, n, r, o, i, l, u, s) {
  if (am.apply(this, arguments), Or) {
    if (Or) {
      var a = ei;
      Or = !1, ei = null;
    } else throw Error(z(198));
    ti || (ti = !0, yu = a);
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
function Df(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Aa(e) {
  if ($n(e) !== e) throw Error(z(188));
}
function fm(e) {
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
        if (i === n) return Aa(o), e;
        if (i === r) return Aa(o), t;
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
function Mf(e) {
  return e = fm(e), e !== null ? Lf(e) : null;
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
var Ff = qe.unstable_scheduleCallback, Ra = qe.unstable_cancelCallback, dm = qe.unstable_shouldYield, pm = qe.unstable_requestPaint, ye = qe.unstable_now, hm = qe.unstable_getCurrentPriorityLevel, vs = qe.unstable_ImmediatePriority, If = qe.unstable_UserBlockingPriority, ni = qe.unstable_NormalPriority, mm = qe.unstable_LowPriority, Bf = qe.unstable_IdlePriority, $i = null, Ct = null;
function ym(e) {
  if (Ct && typeof Ct.onCommitFiberRoot == "function") try {
    Ct.onCommitFiberRoot($i, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var vt = Math.clz32 ? Math.clz32 : wm, gm = Math.log, vm = Math.LN2;
function wm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (gm(e) / vm | 0) | 0;
}
var Eo = 64, Co = 4194304;
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
function ri(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? r = _r(u) : (i &= l, i !== 0 && (r = _r(i)));
  } else l = n & ~o, l !== 0 ? r = _r(l) : i !== 0 && (r = _r(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - vt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Sm(e, t) {
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
function km(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - vt(i), u = 1 << l, s = o[l];
    s === -1 ? (!(u & n) || u & r) && (o[l] = Sm(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function gu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Uf() {
  var e = Eo;
  return Eo <<= 1, !(Eo & 4194240) && (Eo = 64), e;
}
function Pl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function so(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vt(t), e[t] = n;
}
function xm(e, t) {
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
var Z = 0;
function Hf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Wf, Ss, Vf, Qf, Kf, vu = !1, _o = [], bt = null, Zt = null, Jt = null, Hr = /* @__PURE__ */ new Map(), Wr = /* @__PURE__ */ new Map(), Kt = [], Em = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function za(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      bt = null;
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
      Hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wr.delete(t.pointerId);
  }
}
function gr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = co(t), t !== null && Ss(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Cm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return bt = gr(bt, e, t, n, r, o), !0;
    case "dragenter":
      return Zt = gr(Zt, e, t, n, r, o), !0;
    case "mouseover":
      return Jt = gr(Jt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Hr.set(i, gr(Hr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Wr.set(i, gr(Wr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Yf(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = $n(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Df(n), t !== null) {
          e.blockedOn = t, Kf(e.priority, function() {
            Vf(n);
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
    } else return t = co(n), t !== null && Ss(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function $a(e, t, n) {
  Ho(e) && n.delete(t);
}
function _m() {
  vu = !1, bt !== null && Ho(bt) && (bt = null), Zt !== null && Ho(Zt) && (Zt = null), Jt !== null && Ho(Jt) && (Jt = null), Hr.forEach($a), Wr.forEach($a);
}
function vr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vu || (vu = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, _m)));
}
function Vr(e) {
  function t(o) {
    return vr(o, e);
  }
  if (0 < _o.length) {
    vr(_o[0], e);
    for (var n = 1; n < _o.length; n++) {
      var r = _o[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (bt !== null && vr(bt, e), Zt !== null && vr(Zt, e), Jt !== null && vr(Jt, e), Hr.forEach(t), Wr.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) Yf(n), n.blockedOn === null && Kt.shift();
}
var Zn = Ut.ReactCurrentBatchConfig, oi = !0;
function Pm(e, t, n, r) {
  var o = Z, i = Zn.transition;
  Zn.transition = null;
  try {
    Z = 1, ks(e, t, n, r);
  } finally {
    Z = o, Zn.transition = i;
  }
}
function Nm(e, t, n, r) {
  var o = Z, i = Zn.transition;
  Zn.transition = null;
  try {
    Z = 4, ks(e, t, n, r);
  } finally {
    Z = o, Zn.transition = i;
  }
}
function ks(e, t, n, r) {
  if (oi) {
    var o = wu(e, t, n, r);
    if (o === null) Ml(e, t, r, ii, n), za(e, r);
    else if (Cm(o, e, t, n, r)) r.stopPropagation();
    else if (za(e, r), t & 4 && -1 < Em.indexOf(e)) {
      for (; o !== null; ) {
        var i = co(o);
        if (i !== null && Wf(i), i = wu(e, t, n, r), i === null && Ml(e, t, r, ii, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ml(e, t, r, null, n);
  }
}
var ii = null;
function wu(e, t, n, r) {
  if (ii = null, e = gs(r), e = gn(e), e !== null) if (t = $n(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Df(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ii = e, null;
}
function Gf(e) {
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
      switch (hm()) {
        case vs:
          return 1;
        case If:
          return 4;
        case ni:
        case mm:
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
var Gt = null, xs = null, Wo = null;
function Xf() {
  if (Wo) return Wo;
  var e, t = xs, n = t.length, r, o = "value" in Gt ? Gt.value : Gt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return Wo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Vo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Po() {
  return !0;
}
function ja() {
  return !1;
}
function nt(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Po : ja, this.isPropagationStopped = ja, this;
  }
  return de(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Po);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Po);
  }, persist: function() {
  }, isPersistent: Po }), t;
}
var fr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Es = nt(fr), ao = de({}, fr, { view: 0, detail: 0 }), Tm = nt(ao), Nl, Tl, wr, ji = de({}, ao, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== wr && (wr && e.type === "mousemove" ? (Nl = e.screenX - wr.screenX, Tl = e.screenY - wr.screenY) : Tl = Nl = 0, wr = e), Nl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Tl;
} }), Da = nt(ji), Om = de({}, ji, { dataTransfer: 0 }), Am = nt(Om), Rm = de({}, ao, { relatedTarget: 0 }), Ol = nt(Rm), zm = de({}, fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $m = nt(zm), jm = de({}, fr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Dm = nt(jm), Mm = de({}, fr, { data: 0 }), Ma = nt(Mm), Lm = {
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
}, Fm = {
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
}, Im = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Bm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Im[e]) ? !!t[e] : !1;
}
function Cs() {
  return Bm;
}
var Um = de({}, ao, { key: function(e) {
  if (e.key) {
    var t = Lm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Vo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Fm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cs, charCode: function(e) {
  return e.type === "keypress" ? Vo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Vo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Hm = nt(Um), Wm = de({}, ji, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), La = nt(Wm), Vm = de({}, ao, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cs }), Qm = nt(Vm), Km = de({}, fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ym = nt(Km), Gm = de({}, ji, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Xm = nt(Gm), bm = [9, 13, 27, 32], _s = Lt && "CompositionEvent" in window, Ar = null;
Lt && "documentMode" in document && (Ar = document.documentMode);
var Zm = Lt && "TextEvent" in window && !Ar, bf = Lt && (!_s || Ar && 8 < Ar && 11 >= Ar), Fa = " ", Ia = !1;
function Zf(e, t) {
  switch (e) {
    case "keyup":
      return bm.indexOf(t.keyCode) !== -1;
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
var Ln = !1;
function Jm(e, t) {
  switch (e) {
    case "compositionend":
      return Jf(t);
    case "keypress":
      return t.which !== 32 ? null : (Ia = !0, Fa);
    case "textInput":
      return e = t.data, e === Fa && Ia ? null : e;
    default:
      return null;
  }
}
function qm(e, t) {
  if (Ln) return e === "compositionend" || !_s && Zf(e, t) ? (e = Xf(), Wo = xs = Gt = null, Ln = !1, e) : null;
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
      return bf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ey = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ba(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ey[e.type] : t === "textarea";
}
function qf(e, t, n, r) {
  Af(r), t = li(t, "onChange"), 0 < t.length && (n = new Es("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Rr = null, Qr = null;
function ty(e) {
  cd(e, 0);
}
function Di(e) {
  var t = Bn(e);
  if (Ef(t)) return e;
}
function ny(e, t) {
  if (e === "change") return t;
}
var ed = !1;
if (Lt) {
  var Al;
  if (Lt) {
    var Rl = "oninput" in document;
    if (!Rl) {
      var Ua = document.createElement("div");
      Ua.setAttribute("oninput", "return;"), Rl = typeof Ua.oninput == "function";
    }
    Al = Rl;
  } else Al = !1;
  ed = Al && (!document.documentMode || 9 < document.documentMode);
}
function Ha() {
  Rr && (Rr.detachEvent("onpropertychange", td), Qr = Rr = null);
}
function td(e) {
  if (e.propertyName === "value" && Di(Qr)) {
    var t = [];
    qf(t, Qr, e, gs(e)), jf(ty, t);
  }
}
function ry(e, t, n) {
  e === "focusin" ? (Ha(), Rr = t, Qr = n, Rr.attachEvent("onpropertychange", td)) : e === "focusout" && Ha();
}
function oy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Di(Qr);
}
function iy(e, t) {
  if (e === "click") return Di(t);
}
function ly(e, t) {
  if (e === "input" || e === "change") return Di(t);
}
function uy(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var St = typeof Object.is == "function" ? Object.is : uy;
function Kr(e, t) {
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
function Wa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Va(e, t) {
  var n = Wa(e);
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
    n = Wa(n);
  }
}
function nd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function rd() {
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
function sy(e) {
  var t = rd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && nd(n.ownerDocument.documentElement, n)) {
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
var ay = Lt && "documentMode" in document && 11 >= document.documentMode, Fn = null, Su = null, zr = null, ku = !1;
function Qa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ku || Fn == null || Fn !== qo(r) || (r = Fn, "selectionStart" in r && Ps(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), zr && Kr(zr, r) || (zr = r, r = li(Su, "onSelect"), 0 < r.length && (t = new Es("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Fn)));
}
function No(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var In = { animationend: No("Animation", "AnimationEnd"), animationiteration: No("Animation", "AnimationIteration"), animationstart: No("Animation", "AnimationStart"), transitionend: No("Transition", "TransitionEnd") }, zl = {}, od = {};
Lt && (od = document.createElement("div").style, "AnimationEvent" in window || (delete In.animationend.animation, delete In.animationiteration.animation, delete In.animationstart.animation), "TransitionEvent" in window || delete In.transitionend.transition);
function Mi(e) {
  if (zl[e]) return zl[e];
  if (!In[e]) return e;
  var t = In[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in od) return zl[e] = t[n];
  return e;
}
var id = Mi("animationend"), ld = Mi("animationiteration"), ud = Mi("animationstart"), sd = Mi("transitionend"), ad = /* @__PURE__ */ new Map(), Ka = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fn(e, t) {
  ad.set(e, t), zn(t, [e]);
}
for (var $l = 0; $l < Ka.length; $l++) {
  var jl = Ka[$l], cy = jl.toLowerCase(), fy = jl[0].toUpperCase() + jl.slice(1);
  fn(cy, "on" + fy);
}
fn(id, "onAnimationEnd");
fn(ld, "onAnimationIteration");
fn(ud, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(sd, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));
function Ya(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, cm(r, t, void 0, e), e.currentTarget = null;
}
function cd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, a = u.currentTarget;
        if (u = u.listener, s !== i && o.isPropagationStopped()) break e;
        Ya(o, u, a), i = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== i && o.isPropagationStopped()) break e;
        Ya(o, u, a), i = s;
      }
    }
  }
  if (ti) throw e = yu, ti = !1, yu = null, e;
}
function re(e, t) {
  var n = t[Pu];
  n === void 0 && (n = t[Pu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (fd(t, e, 2, !1), n.add(r));
}
function Dl(e, t, n) {
  var r = 0;
  t && (r |= 4), fd(n, e, r, t);
}
var To = "_reactListening" + Math.random().toString(36).slice(2);
function Yr(e) {
  if (!e[To]) {
    e[To] = !0, vf.forEach(function(n) {
      n !== "selectionchange" && (dy.has(n) || Dl(n, !1, e), Dl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[To] || (t[To] = !0, Dl("selectionchange", !1, t));
  }
}
function fd(e, t, n, r) {
  switch (Gf(t)) {
    case 1:
      var o = Pm;
      break;
    case 4:
      o = Nm;
      break;
    default:
      o = ks;
  }
  n = o.bind(null, t, n, e), o = void 0, !mu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ml(e, t, n, r, o) {
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
  jf(function() {
    var a = i, d = gs(n), m = [];
    e: {
      var h = ad.get(e);
      if (h !== void 0) {
        var x = Es, g = e;
        switch (e) {
          case "keypress":
            if (Vo(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Hm;
            break;
          case "focusin":
            g = "focus", x = Ol;
            break;
          case "focusout":
            g = "blur", x = Ol;
            break;
          case "beforeblur":
          case "afterblur":
            x = Ol;
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
            x = Da;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Am;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Qm;
            break;
          case id:
          case ld:
          case ud:
            x = $m;
            break;
          case sd:
            x = Ym;
            break;
          case "scroll":
            x = Tm;
            break;
          case "wheel":
            x = Xm;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Dm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = La;
        }
        var E = (t & 4) !== 0, _ = !E && e === "scroll", p = E ? h !== null ? h + "Capture" : null : h;
        E = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var S = f.stateNode;
          if (f.tag === 5 && S !== null && (f = S, p !== null && (S = Ur(c, p), S != null && E.push(Gr(c, S, f)))), _) break;
          c = c.return;
        }
        0 < E.length && (h = new x(h, g, null, n, d), m.push({ event: h, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", h && n !== pu && (g = n.relatedTarget || n.fromElement) && (gn(g) || g[Ft])) break e;
        if ((x || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, x ? (g = n.relatedTarget || n.toElement, x = a, g = g ? gn(g) : null, g !== null && (_ = $n(g), g !== _ || g.tag !== 5 && g.tag !== 6) && (g = null)) : (x = null, g = a), x !== g)) {
          if (E = Da, S = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (E = La, S = "onPointerLeave", p = "onPointerEnter", c = "pointer"), _ = x == null ? h : Bn(x), f = g == null ? h : Bn(g), h = new E(S, c + "leave", x, n, d), h.target = _, h.relatedTarget = f, S = null, gn(d) === a && (E = new E(p, c + "enter", g, n, d), E.target = f, E.relatedTarget = _, S = E), _ = S, x && g) t: {
            for (E = x, p = g, c = 0, f = E; f; f = jn(f)) c++;
            for (f = 0, S = p; S; S = jn(S)) f++;
            for (; 0 < c - f; ) E = jn(E), c--;
            for (; 0 < f - c; ) p = jn(p), f--;
            for (; c--; ) {
              if (E === p || p !== null && E === p.alternate) break t;
              E = jn(E), p = jn(p);
            }
            E = null;
          }
          else E = null;
          x !== null && Ga(m, h, x, E, !1), g !== null && _ !== null && Ga(m, _, g, E, !0);
        }
      }
      e: {
        if (h = a ? Bn(a) : window, x = h.nodeName && h.nodeName.toLowerCase(), x === "select" || x === "input" && h.type === "file") var P = ny;
        else if (Ba(h)) if (ed) P = ly;
        else {
          P = oy;
          var T = ry;
        }
        else (x = h.nodeName) && x.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = iy);
        if (P && (P = P(e, a))) {
          qf(m, P, n, d);
          break e;
        }
        T && T(e, h, a), e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && su(h, "number", h.value);
      }
      switch (T = a ? Bn(a) : window, e) {
        case "focusin":
          (Ba(T) || T.contentEditable === "true") && (Fn = T, Su = a, zr = null);
          break;
        case "focusout":
          zr = Su = Fn = null;
          break;
        case "mousedown":
          ku = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ku = !1, Qa(m, n, d);
          break;
        case "selectionchange":
          if (ay) break;
        case "keydown":
        case "keyup":
          Qa(m, n, d);
      }
      var A;
      if (_s) e: {
        switch (e) {
          case "compositionstart":
            var O = "onCompositionStart";
            break e;
          case "compositionend":
            O = "onCompositionEnd";
            break e;
          case "compositionupdate":
            O = "onCompositionUpdate";
            break e;
        }
        O = void 0;
      }
      else Ln ? Zf(e, n) && (O = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O && (bf && n.locale !== "ko" && (Ln || O !== "onCompositionStart" ? O === "onCompositionEnd" && Ln && (A = Xf()) : (Gt = d, xs = "value" in Gt ? Gt.value : Gt.textContent, Ln = !0)), T = li(a, O), 0 < T.length && (O = new Ma(O, e, null, n, d), m.push({ event: O, listeners: T }), A ? O.data = A : (A = Jf(n), A !== null && (O.data = A)))), (A = Zm ? Jm(e, n) : qm(e, n)) && (a = li(a, "onBeforeInput"), 0 < a.length && (d = new Ma("onBeforeInput", "beforeinput", null, n, d), m.push({ event: d, listeners: a }), d.data = A));
    }
    cd(m, t);
  });
}
function Gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function li(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ur(e, n), i != null && r.unshift(Gr(e, i, o)), i = Ur(e, t), i != null && r.push(Gr(e, i, o))), e = e.return;
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ga(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && a !== null && (u = a, o ? (s = Ur(n, i), s != null && l.unshift(Gr(n, s, u))) : o || (s = Ur(n, i), s != null && l.push(Gr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var py = /\r\n?/g, hy = /\u0000|\uFFFD/g;
function Xa(e) {
  return (typeof e == "string" ? e : "" + e).replace(py, `
`).replace(hy, "");
}
function Oo(e, t, n) {
  if (t = Xa(t), Xa(e) !== t && n) throw Error(z(425));
}
function ui() {
}
var xu = null, Eu = null;
function Cu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _u = typeof setTimeout == "function" ? setTimeout : void 0, my = typeof clearTimeout == "function" ? clearTimeout : void 0, ba = typeof Promise == "function" ? Promise : void 0, yy = typeof queueMicrotask == "function" ? queueMicrotask : typeof ba < "u" ? function(e) {
  return ba.resolve(null).then(e).catch(gy);
} : _u;
function gy(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ll(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Vr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Vr(t);
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
var dr = Math.random().toString(36).slice(2), Et = "__reactFiber$" + dr, Xr = "__reactProps$" + dr, Ft = "__reactContainer$" + dr, Pu = "__reactEvents$" + dr, vy = "__reactListeners$" + dr, wy = "__reactHandles$" + dr;
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
function co(e) {
  return e = e[Et] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function Li(e) {
  return e[Xr] || null;
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
var sn = {}, De = dn(sn), Qe = dn(!1), Cn = sn;
function nr(e, t) {
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
  oe(Qe), oe(De);
}
function Ja(e, t, n) {
  if (De.current !== sn) throw Error(z(168));
  te(De, t), te(Qe, n);
}
function dd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(z(108, rm(e) || "Unknown", o));
  return de({}, n, r);
}
function ai(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn, Cn = De.current, te(De, e), te(Qe, Qe.current), !0;
}
function qa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n ? (e = dd(e, t, Cn), r.__reactInternalMemoizedMergedChildContext = e, oe(Qe), oe(De), te(De, e)) : oe(Qe), te(Qe, n);
}
var Rt = null, Fi = !1, Fl = !1;
function pd(e) {
  Rt === null ? Rt = [e] : Rt.push(e);
}
function Sy(e) {
  Fi = !0, pd(e);
}
function pn() {
  if (!Fl && Rt !== null) {
    Fl = !0;
    var e = 0, t = Z;
    try {
      var n = Rt;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Rt = null, Fi = !1;
    } catch (o) {
      throw Rt !== null && (Rt = Rt.slice(e + 1)), Ff(vs, pn), o;
    } finally {
      Z = t, Fl = !1;
    }
  }
  return null;
}
var Hn = [], Wn = 0, ci = null, fi = 0, lt = [], ut = 0, _n = null, zt = 1, $t = "";
function hn(e, t) {
  Hn[Wn++] = fi, Hn[Wn++] = ci, ci = e, fi = t;
}
function hd(e, t, n) {
  lt[ut++] = zt, lt[ut++] = $t, lt[ut++] = _n, _n = e;
  var r = zt;
  e = $t;
  var o = 32 - vt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - vt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, zt = 1 << 32 - vt(t) + o | n << o | r, $t = i + e;
  } else zt = 1 << i | n << o | r, $t = e;
}
function Ns(e) {
  e.return !== null && (hn(e, 1), hd(e, 1, 0));
}
function Ts(e) {
  for (; e === ci; ) ci = Hn[--Wn], Hn[Wn] = null, fi = Hn[--Wn], Hn[Wn] = null;
  for (; e === _n; ) _n = lt[--ut], lt[ut] = null, $t = lt[--ut], lt[ut] = null, zt = lt[--ut], lt[ut] = null;
}
var Je = null, be = null, ue = !1, gt = null;
function md(e, t) {
  var n = st(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ec(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Je = e, be = qt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Je = e, be = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = _n !== null ? { id: zt, overflow: $t } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = st(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Je = e, be = null, !0) : !1;
    default:
      return !1;
  }
}
function Tu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ou(e) {
  if (ue) {
    var t = be;
    if (t) {
      var n = t;
      if (!ec(e, t)) {
        if (Tu(e)) throw Error(z(418));
        t = qt(n.nextSibling);
        var r = Je;
        t && ec(e, t) ? md(r, n) : (e.flags = e.flags & -4097 | 2, ue = !1, Je = e);
      }
    } else {
      if (Tu(e)) throw Error(z(418));
      e.flags = e.flags & -4097 | 2, ue = !1, Je = e;
    }
  }
}
function tc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Je = e;
}
function Ao(e) {
  if (e !== Je) return !1;
  if (!ue) return tc(e), ue = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Cu(e.type, e.memoizedProps)), t && (t = be)) {
    if (Tu(e)) throw yd(), Error(z(418));
    for (; t; ) md(e, t), t = qt(t.nextSibling);
  }
  if (tc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              be = qt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      be = null;
    }
  } else be = Je ? qt(e.stateNode.nextSibling) : null;
  return !0;
}
function yd() {
  for (var e = be; e; ) e = qt(e.nextSibling);
}
function rr() {
  be = Je = null, ue = !1;
}
function Os(e) {
  gt === null ? gt = [e] : gt.push(e);
}
var ky = Ut.ReactCurrentBatchConfig;
function Sr(e, t, n) {
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
function Ro(e, t) {
  throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function nc(e) {
  var t = e._init;
  return t(e._payload);
}
function gd(e) {
  function t(p, c) {
    if (e) {
      var f = p.deletions;
      f === null ? (p.deletions = [c], p.flags |= 16) : f.push(c);
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
    return p = rn(p, c), p.index = 0, p.sibling = null, p;
  }
  function i(p, c, f) {
    return p.index = f, e ? (f = p.alternate, f !== null ? (f = f.index, f < c ? (p.flags |= 2, c) : f) : (p.flags |= 2, c)) : (p.flags |= 1048576, c);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, c, f, S) {
    return c === null || c.tag !== 6 ? (c = Ql(f, p.mode, S), c.return = p, c) : (c = o(c, f), c.return = p, c);
  }
  function s(p, c, f, S) {
    var P = f.type;
    return P === Mn ? d(p, c, f.props.children, S, f.key) : c !== null && (c.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Vt && nc(P) === c.type) ? (S = o(c, f.props), S.ref = Sr(p, c, f), S.return = p, S) : (S = Zo(f.type, f.key, f.props, null, p.mode, S), S.ref = Sr(p, c, f), S.return = p, S);
  }
  function a(p, c, f, S) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = Kl(f, p.mode, S), c.return = p, c) : (c = o(c, f.children || []), c.return = p, c);
  }
  function d(p, c, f, S, P) {
    return c === null || c.tag !== 7 ? (c = kn(f, p.mode, S, P), c.return = p, c) : (c = o(c, f), c.return = p, c);
  }
  function m(p, c, f) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Ql("" + c, p.mode, f), c.return = p, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case So:
          return f = Zo(c.type, c.key, c.props, null, p.mode, f), f.ref = Sr(p, null, c), f.return = p, f;
        case Dn:
          return c = Kl(c, p.mode, f), c.return = p, c;
        case Vt:
          var S = c._init;
          return m(p, S(c._payload), f);
      }
      if (Cr(c) || mr(c)) return c = kn(c, p.mode, f, null), c.return = p, c;
      Ro(p, c);
    }
    return null;
  }
  function h(p, c, f, S) {
    var P = c !== null ? c.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return P !== null ? null : u(p, c, "" + f, S);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case So:
          return f.key === P ? s(p, c, f, S) : null;
        case Dn:
          return f.key === P ? a(p, c, f, S) : null;
        case Vt:
          return P = f._init, h(
            p,
            c,
            P(f._payload),
            S
          );
      }
      if (Cr(f) || mr(f)) return P !== null ? null : d(p, c, f, S, null);
      Ro(p, f);
    }
    return null;
  }
  function x(p, c, f, S, P) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return p = p.get(f) || null, u(c, p, "" + S, P);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case So:
          return p = p.get(S.key === null ? f : S.key) || null, s(c, p, S, P);
        case Dn:
          return p = p.get(S.key === null ? f : S.key) || null, a(c, p, S, P);
        case Vt:
          var T = S._init;
          return x(p, c, f, T(S._payload), P);
      }
      if (Cr(S) || mr(S)) return p = p.get(f) || null, d(c, p, S, P, null);
      Ro(c, S);
    }
    return null;
  }
  function g(p, c, f, S) {
    for (var P = null, T = null, A = c, O = c = 0, U = null; A !== null && O < f.length; O++) {
      A.index > O ? (U = A, A = null) : U = A.sibling;
      var L = h(p, A, f[O], S);
      if (L === null) {
        A === null && (A = U);
        break;
      }
      e && A && L.alternate === null && t(p, A), c = i(L, c, O), T === null ? P = L : T.sibling = L, T = L, A = U;
    }
    if (O === f.length) return n(p, A), ue && hn(p, O), P;
    if (A === null) {
      for (; O < f.length; O++) A = m(p, f[O], S), A !== null && (c = i(A, c, O), T === null ? P = A : T.sibling = A, T = A);
      return ue && hn(p, O), P;
    }
    for (A = r(p, A); O < f.length; O++) U = x(A, p, O, f[O], S), U !== null && (e && U.alternate !== null && A.delete(U.key === null ? O : U.key), c = i(U, c, O), T === null ? P = U : T.sibling = U, T = U);
    return e && A.forEach(function(pe) {
      return t(p, pe);
    }), ue && hn(p, O), P;
  }
  function E(p, c, f, S) {
    var P = mr(f);
    if (typeof P != "function") throw Error(z(150));
    if (f = P.call(f), f == null) throw Error(z(151));
    for (var T = P = null, A = c, O = c = 0, U = null, L = f.next(); A !== null && !L.done; O++, L = f.next()) {
      A.index > O ? (U = A, A = null) : U = A.sibling;
      var pe = h(p, A, L.value, S);
      if (pe === null) {
        A === null && (A = U);
        break;
      }
      e && A && pe.alternate === null && t(p, A), c = i(pe, c, O), T === null ? P = pe : T.sibling = pe, T = pe, A = U;
    }
    if (L.done) return n(
      p,
      A
    ), ue && hn(p, O), P;
    if (A === null) {
      for (; !L.done; O++, L = f.next()) L = m(p, L.value, S), L !== null && (c = i(L, c, O), T === null ? P = L : T.sibling = L, T = L);
      return ue && hn(p, O), P;
    }
    for (A = r(p, A); !L.done; O++, L = f.next()) L = x(A, p, O, L.value, S), L !== null && (e && L.alternate !== null && A.delete(L.key === null ? O : L.key), c = i(L, c, O), T === null ? P = L : T.sibling = L, T = L);
    return e && A.forEach(function(ie) {
      return t(p, ie);
    }), ue && hn(p, O), P;
  }
  function _(p, c, f, S) {
    if (typeof f == "object" && f !== null && f.type === Mn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case So:
          e: {
            for (var P = f.key, T = c; T !== null; ) {
              if (T.key === P) {
                if (P = f.type, P === Mn) {
                  if (T.tag === 7) {
                    n(p, T.sibling), c = o(T, f.props.children), c.return = p, p = c;
                    break e;
                  }
                } else if (T.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Vt && nc(P) === T.type) {
                  n(p, T.sibling), c = o(T, f.props), c.ref = Sr(p, T, f), c.return = p, p = c;
                  break e;
                }
                n(p, T);
                break;
              } else t(p, T);
              T = T.sibling;
            }
            f.type === Mn ? (c = kn(f.props.children, p.mode, S, f.key), c.return = p, p = c) : (S = Zo(f.type, f.key, f.props, null, p.mode, S), S.ref = Sr(p, c, f), S.return = p, p = S);
          }
          return l(p);
        case Dn:
          e: {
            for (T = f.key; c !== null; ) {
              if (c.key === T) if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                n(p, c.sibling), c = o(c, f.children || []), c.return = p, p = c;
                break e;
              } else {
                n(p, c);
                break;
              }
              else t(p, c);
              c = c.sibling;
            }
            c = Kl(f, p.mode, S), c.return = p, p = c;
          }
          return l(p);
        case Vt:
          return T = f._init, _(p, c, T(f._payload), S);
      }
      if (Cr(f)) return g(p, c, f, S);
      if (mr(f)) return E(p, c, f, S);
      Ro(p, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(p, c.sibling), c = o(c, f), c.return = p, p = c) : (n(p, c), c = Ql(f, p.mode, S), c.return = p, p = c), l(p)) : n(p, c);
  }
  return _;
}
var or = gd(!0), vd = gd(!1), di = dn(null), pi = null, Vn = null, As = null;
function Rs() {
  As = Vn = pi = null;
}
function zs(e) {
  var t = di.current;
  oe(di), e._currentValue = t;
}
function Au(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Jn(e, t) {
  pi = e, As = Vn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0), e.firstContext = null);
}
function ct(e) {
  var t = e._currentValue;
  if (As !== e) if (e = { context: e, memoizedValue: t, next: null }, Vn === null) {
    if (pi === null) throw Error(z(308));
    Vn = e, pi.dependencies = { lanes: 0, firstContext: e };
  } else Vn = Vn.next = e;
  return t;
}
var vn = null;
function $s(e) {
  vn === null ? vn = [e] : vn.push(e);
}
function wd(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, $s(t)) : (n.next = o.next, o.next = n), t.interleaved = n, It(e, r);
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Qt = !1;
function js(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Sd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function en(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, X & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, It(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, $s(r)) : (t.next = o.next, o.next = t), r.interleaved = t, It(e, n);
}
function Qo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ws(e, n);
  }
}
function rc(e, t) {
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
    var s = u, a = s.next;
    s.next = null, l === null ? i = a : l.next = a, l = s;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, u = d.lastBaseUpdate, u !== l && (u === null ? d.firstBaseUpdate = a : u.next = a, d.lastBaseUpdate = s));
  }
  if (i !== null) {
    var m = o.baseState;
    l = 0, d = a = s = null, u = i;
    do {
      var h = u.lane, x = u.eventTime;
      if ((r & h) === h) {
        d !== null && (d = d.next = {
          eventTime: x,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var g = e, E = u;
          switch (h = t, x = n, E.tag) {
            case 1:
              if (g = E.payload, typeof g == "function") {
                m = g.call(x, m, h);
                break e;
              }
              m = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = E.payload, h = typeof g == "function" ? g.call(x, m, h) : g, h == null) break e;
              m = de({}, m, h);
              break e;
            case 2:
              Qt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [u] : h.push(u));
      } else x = { eventTime: x, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, d === null ? (a = d = x, s = m) : d = d.next = x, l |= h;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null) break;
        h = u, u = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (s = m), o.baseState = s, o.firstBaseUpdate = a, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Nn |= l, e.lanes = l, e.memoizedState = m;
  }
}
function oc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(z(191, o));
      o.call(r);
    }
  }
}
var fo = {}, _t = dn(fo), br = dn(fo), Zr = dn(fo);
function wn(e) {
  if (e === fo) throw Error(z(174));
  return e;
}
function Ds(e, t) {
  switch (te(Zr, t), te(br, e), te(_t, fo), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = cu(t, e);
  }
  oe(_t), te(_t, t);
}
function ir() {
  oe(_t), oe(br), oe(Zr);
}
function kd(e) {
  wn(Zr.current);
  var t = wn(_t.current), n = cu(t, e.type);
  t !== n && (te(br, e), te(_t, n));
}
function Ms(e) {
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
function Ls() {
  for (var e = 0; e < Il.length; e++) Il[e]._workInProgressVersionPrimary = null;
  Il.length = 0;
}
var Ko = Ut.ReactCurrentDispatcher, Bl = Ut.ReactCurrentBatchConfig, Pn = 0, fe = null, Se = null, xe = null, yi = !1, $r = !1, Jr = 0, xy = 0;
function ze() {
  throw Error(z(321));
}
function Fs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
  return !0;
}
function Is(e, t, n, r, o, i) {
  if (Pn = i, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ko.current = e === null || e.memoizedState === null ? Py : Ny, e = n(r, o), $r) {
    i = 0;
    do {
      if ($r = !1, Jr = 0, 25 <= i) throw Error(z(301));
      i += 1, xe = Se = null, t.updateQueue = null, Ko.current = Ty, e = n(r, o);
    } while ($r);
  }
  if (Ko.current = gi, t = Se !== null && Se.next !== null, Pn = 0, xe = Se = fe = null, yi = !1, t) throw Error(z(300));
  return e;
}
function Bs() {
  var e = Jr !== 0;
  return Jr = 0, e;
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
function qr(e, t) {
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
    var u = l = null, s = null, a = i;
    do {
      var d = a.lane;
      if ((Pn & d) === d) s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var m = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = m, l = r) : s = s.next = m, fe.lanes |= d, Nn |= d;
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? l = r : s.next = u, St(r, t.memoizedState) || (Ve = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
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
    St(i, t.memoizedState) || (Ve = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function xd() {
}
function Ed(e, t) {
  var n = fe, r = ft(), o = t(), i = !St(r.memoizedState, o);
  if (i && (r.memoizedState = o, Ve = !0), r = r.queue, Us(Pd.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || xe !== null && xe.memoizedState.tag & 1) {
    if (n.flags |= 2048, eo(9, _d.bind(null, n, r, o, t), void 0, null), Ee === null) throw Error(z(349));
    Pn & 30 || Cd(n, t, o);
  }
  return o;
}
function Cd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function _d(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Nd(t) && Td(e);
}
function Pd(e, t, n) {
  return n(function() {
    Nd(t) && Td(e);
  });
}
function Nd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function Td(e) {
  var t = It(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function ic(e) {
  var t = xt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qr, lastRenderedState: e }, t.queue = e, e = e.dispatch = _y.bind(null, fe, e), [t.memoizedState, e];
}
function eo(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Od() {
  return ft().memoizedState;
}
function Yo(e, t, n, r) {
  var o = xt();
  fe.flags |= e, o.memoizedState = eo(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ii(e, t, n, r) {
  var o = ft();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Se !== null) {
    var l = Se.memoizedState;
    if (i = l.destroy, r !== null && Fs(r, l.deps)) {
      o.memoizedState = eo(t, n, i, r);
      return;
    }
  }
  fe.flags |= e, o.memoizedState = eo(1 | t, n, i, r);
}
function lc(e, t) {
  return Yo(8390656, 8, e, t);
}
function Us(e, t) {
  return Ii(2048, 8, e, t);
}
function Ad(e, t) {
  return Ii(4, 2, e, t);
}
function Rd(e, t) {
  return Ii(4, 4, e, t);
}
function zd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function $d(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ii(4, 4, zd.bind(null, t, e), n);
}
function Hs() {
}
function jd(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Dd(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Md(e, t, n) {
  return Pn & 21 ? (St(n, t) || (n = Uf(), fe.lanes |= n, Nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ve = !0), e.memoizedState = n);
}
function Ey(e, t) {
  var n = Z;
  Z = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Bl.transition;
  Bl.transition = {};
  try {
    e(!1), t();
  } finally {
    Z = n, Bl.transition = r;
  }
}
function Ld() {
  return ft().memoizedState;
}
function Cy(e, t, n) {
  var r = nn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Fd(e)) Id(t, n);
  else if (n = wd(e, t, n, r), n !== null) {
    var o = Le();
    wt(n, e, r, o), Bd(n, t, r);
  }
}
function _y(e, t, n) {
  var r = nn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Fd(e)) Id(t, o);
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
    n = wd(e, t, o, r), n !== null && (o = Le(), wt(n, e, r, o), Bd(n, t, r));
  }
}
function Fd(e) {
  var t = e.alternate;
  return e === fe || t !== null && t === fe;
}
function Id(e, t) {
  $r = yi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Bd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ws(e, n);
  }
}
var gi = { readContext: ct, useCallback: ze, useContext: ze, useEffect: ze, useImperativeHandle: ze, useInsertionEffect: ze, useLayoutEffect: ze, useMemo: ze, useReducer: ze, useRef: ze, useState: ze, useDebugValue: ze, useDeferredValue: ze, useTransition: ze, useMutableSource: ze, useSyncExternalStore: ze, useId: ze, unstable_isNewReconciler: !1 }, Py = { readContext: ct, useCallback: function(e, t) {
  return xt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ct, useEffect: lc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Yo(
    4194308,
    4,
    zd.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Cy.bind(null, fe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = xt();
  return e = { current: e }, t.memoizedState = e;
}, useState: ic, useDebugValue: Hs, useDeferredValue: function(e) {
  return xt().memoizedState = e;
}, useTransition: function() {
  var e = ic(!1), t = e[0];
  return e = Ey.bind(null, e[1]), xt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = fe, o = xt();
  if (ue) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = t(), Ee === null) throw Error(z(349));
    Pn & 30 || Cd(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, lc(Pd.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, eo(9, _d.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = xt(), t = Ee.identifierPrefix;
  if (ue) {
    var n = $t, r = zt;
    n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = xy++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ny = {
  readContext: ct,
  useCallback: jd,
  useContext: ct,
  useEffect: Us,
  useImperativeHandle: $d,
  useInsertionEffect: Ad,
  useLayoutEffect: Rd,
  useMemo: Dd,
  useReducer: Ul,
  useRef: Od,
  useState: function() {
    return Ul(qr);
  },
  useDebugValue: Hs,
  useDeferredValue: function(e) {
    var t = ft();
    return Md(t, Se.memoizedState, e);
  },
  useTransition: function() {
    var e = Ul(qr)[0], t = ft().memoizedState;
    return [e, t];
  },
  useMutableSource: xd,
  useSyncExternalStore: Ed,
  useId: Ld,
  unstable_isNewReconciler: !1
}, Ty = { readContext: ct, useCallback: jd, useContext: ct, useEffect: Us, useImperativeHandle: $d, useInsertionEffect: Ad, useLayoutEffect: Rd, useMemo: Dd, useReducer: Hl, useRef: Od, useState: function() {
  return Hl(qr);
}, useDebugValue: Hs, useDeferredValue: function(e) {
  var t = ft();
  return Se === null ? t.memoizedState = e : Md(t, Se.memoizedState, e);
}, useTransition: function() {
  var e = Hl(qr)[0], t = ft().memoizedState;
  return [e, t];
}, useMutableSource: xd, useSyncExternalStore: Ed, useId: Ld, unstable_isNewReconciler: !1 };
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
  var r = Le(), o = nn(e), i = Dt(r, o);
  i.payload = t, n != null && (i.callback = n), t = en(e, i, o), t !== null && (wt(t, e, o, r), Qo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Le(), o = nn(e), i = Dt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = en(e, i, o), t !== null && (wt(t, e, o, r), Qo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Le(), r = nn(e), o = Dt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = en(e, o, r), t !== null && (wt(t, e, r, n), Qo(t, e, r));
} };
function uc(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Kr(n, r) || !Kr(o, i) : !0;
}
function Ud(e, t, n) {
  var r = !1, o = sn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ct(i) : (o = Ke(t) ? Cn : De.current, r = t.contextTypes, i = (r = r != null) ? nr(e, o) : sn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function sc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bi.enqueueReplaceState(t, t.state, null);
}
function zu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, js(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = ct(i) : (i = Ke(t) ? Cn : De.current, o.context = nr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ru(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Bi.enqueueReplaceState(o, o.state, null), hi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function lr(e, t) {
  try {
    var n = "", r = t;
    do
      n += nm(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Wl(e, t, n) {
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
var Oy = typeof WeakMap == "function" ? WeakMap : Map;
function Hd(e, t, n) {
  n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    wi || (wi = !0, Wu = r), $u(e, t);
  }, n;
}
function Wd(e, t, n) {
  n = Dt(-1, n), n.tag = 3;
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
function ac(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Oy();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Wy.bind(null, e, t, n), t.then(e, e));
}
function cc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function fc(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, en(n, t, 1))), n.lanes |= 1), e);
}
var Ay = Ut.ReactCurrentOwner, Ve = !1;
function Me(e, t, n, r) {
  t.child = e === null ? vd(t, null, n, r) : or(t, e.child, n, r);
}
function dc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Jn(t, o), r = Is(e, t, n, r, i, o), n = Bs(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Bt(e, t, o)) : (ue && n && Ns(t), t.flags |= 1, Me(e, t, r, o), t.child);
}
function pc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !bs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Vd(e, t, i, r, o)) : (e = Zo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Kr, n(l, r) && e.ref === t.ref) return Bt(e, t, o);
  }
  return t.flags |= 1, e = rn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Vd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Kr(i, r) && e.ref === t.ref) if (Ve = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Ve = !0);
    else return t.lanes = e.lanes, Bt(e, t, o);
  }
  return ju(e, t, n, r, o);
}
function Qd(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, te(Kn, Xe), Xe |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, te(Kn, Xe), Xe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, te(Kn, Xe), Xe |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, te(Kn, Xe), Xe |= r;
  return Me(e, t, o, n), t.child;
}
function Kd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ju(e, t, n, r, o) {
  var i = Ke(n) ? Cn : De.current;
  return i = nr(t, i), Jn(t, o), n = Is(e, t, n, r, i, o), r = Bs(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Bt(e, t, o)) : (ue && r && Ns(t), t.flags |= 1, Me(e, t, n, o), t.child);
}
function hc(e, t, n, r, o) {
  if (Ke(n)) {
    var i = !0;
    ai(t);
  } else i = !1;
  if (Jn(t, o), t.stateNode === null) Go(e, t), Ud(t, n, r), zu(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = ct(a) : (a = Ke(n) ? Cn : De.current, a = nr(t, a));
    var d = n.getDerivedStateFromProps, m = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && sc(t, l, r, a), Qt = !1;
    var h = t.memoizedState;
    l.state = h, hi(t, r, l, o), s = t.memoizedState, u !== r || h !== s || Qe.current || Qt ? (typeof d == "function" && (Ru(t, n, d, r), s = t.memoizedState), (u = Qt || uc(t, n, u, r, h, s, a)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Sd(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : mt(t.type, u), l.props = a, m = t.pendingProps, h = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = ct(s) : (s = Ke(n) ? Cn : De.current, s = nr(t, s));
    var x = n.getDerivedStateFromProps;
    (d = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== m || h !== s) && sc(t, l, r, s), Qt = !1, h = t.memoizedState, l.state = h, hi(t, r, l, o);
    var g = t.memoizedState;
    u !== m || h !== g || Qe.current || Qt ? (typeof x == "function" && (Ru(t, n, x, r), g = t.memoizedState), (a = Qt || uc(t, n, a, r, h, g, s) || !1) ? (d || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), l.props = r, l.state = g, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Du(e, t, n, r, i, o);
}
function Du(e, t, n, r, o, i) {
  Kd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && qa(t, n, !1), Bt(e, t, i);
  r = t.stateNode, Ay.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = or(t, e.child, null, i), t.child = or(t, null, u, i)) : Me(e, t, u, i), t.memoizedState = r.state, o && qa(t, n, !0), t.child;
}
function Yd(e) {
  var t = e.stateNode;
  t.pendingContext ? Ja(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ja(e, t.context, !1), Ds(e, t.containerInfo);
}
function mc(e, t, n, r, o) {
  return rr(), Os(o), t.flags |= 256, Me(e, t, n, r), t.child;
}
var Mu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gd(e, t, n) {
  var r = t.pendingProps, o = ce.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), te(ce, o & 1), e === null)
    return Ou(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Wi(l, r, 0, null), e = kn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Lu(n), t.memoizedState = Mu, e) : Ws(t, l));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null)) return Ry(e, t, l, r, u, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = rn(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? i = rn(u, i) : (i = kn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Lu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Mu, r;
  }
  return i = e.child, e = i.sibling, r = rn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ws(e, t) {
  return t = Wi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function zo(e, t, n, r) {
  return r !== null && Os(r), or(t, e.child, null, n), e = Ws(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Ry(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Wl(Error(z(422))), zo(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Wi({ mode: "visible", children: r.children }, o, 0, null), i = kn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && or(t, e.child, null, l), t.child.memoizedState = Lu(l), t.memoizedState = Mu, i);
  if (!(t.mode & 1)) return zo(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(z(419)), r = Wl(i, r, void 0), zo(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, Ve || u) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, It(e, o), wt(r, e, o, -1));
    }
    return Xs(), r = Wl(Error(z(421))), zo(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Vy.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, be = qt(o.nextSibling), Je = t, ue = !0, gt = null, e !== null && (lt[ut++] = zt, lt[ut++] = $t, lt[ut++] = _n, zt = e.id, $t = e.overflow, _n = t), t = Ws(t, r.children), t.flags |= 4096, t);
}
function yc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Au(e.return, t, n);
}
function Vl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Xd(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Me(e, t, r.children, n), r = ce.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && yc(e, n, t);
      else if (e.tag === 19) yc(e, n, t);
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
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Vl(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && mi(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Vl(t, !0, n, null, i);
      break;
    case "together":
      Vl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Go(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Bt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Nn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = rn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function zy(e, t, n) {
  switch (t.tag) {
    case 3:
      Yd(t), rr();
      break;
    case 5:
      kd(t);
      break;
    case 1:
      Ke(t.type) && ai(t);
      break;
    case 4:
      Ds(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      te(di, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (te(ce, ce.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gd(e, t, n) : (te(ce, ce.current & 1), e = Bt(e, t, n), e !== null ? e.sibling : null);
      te(ce, ce.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Xd(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), te(ce, ce.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Qd(e, t, n);
  }
  return Bt(e, t, n);
}
var bd, Fu, Zd, Jd;
bd = function(e, t) {
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
Fu = function() {
};
Zd = function(e, t, n, r) {
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
    for (a in o) if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
      var u = o[a];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Ir.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = o != null ? o[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (i || (i = []), i.push(
        a,
        n
      )), n = s;
      else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Ir.hasOwnProperty(a) ? (s != null && a === "onScroll" && re("scroll", e), i || u === s || (i = [])) : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Jd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kr(e, t) {
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
function $y(e, t, n) {
  var r = t.pendingProps;
  switch (Ts(t), t.tag) {
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
      return r = t.stateNode, ir(), oe(Qe), oe(De), Ls(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ao(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, gt !== null && (Ku(gt), gt = null))), Fu(e, t), $e(t), null;
    case 5:
      Ms(t);
      var o = wn(Zr.current);
      if (n = t.type, e !== null && t.stateNode != null) Zd(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return $e(t), null;
        }
        if (e = wn(_t.current), Ao(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Et] = t, r[Xr] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < Pr.length; o++) re(Pr[o], r);
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
              _a(r, i), re("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, re("invalid", r);
              break;
            case "textarea":
              Na(r, i), re("invalid", r);
          }
          fu(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var u = i[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Oo(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Oo(
              r.textContent,
              u,
              e
            ), o = ["children", "" + u]) : Ir.hasOwnProperty(l) && u != null && l === "onScroll" && re("scroll", r);
          }
          switch (n) {
            case "input":
              ko(r), Pa(r, i, !0);
              break;
            case "textarea":
              ko(r), Ta(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ui);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Pf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Et] = t, e[Xr] = r, bd(e, t, !1, !1), t.stateNode = e;
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
                for (o = 0; o < Pr.length; o++) re(Pr[o], e);
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
                _a(e, r), o = lu(e, r), re("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = de({}, r, { value: void 0 }), re("invalid", e);
                break;
              case "textarea":
                Na(e, r), o = au(e, r), re("invalid", e);
                break;
              default:
                o = r;
            }
            fu(n, o), u = o;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? Of(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Nf(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Br(e, s) : typeof s == "number" && Br(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ir.hasOwnProperty(i) ? s != null && i === "onScroll" && re("scroll", e) : s != null && ps(e, i, s, l));
            }
            switch (n) {
              case "input":
                ko(e), Pa(e, r, !1);
                break;
              case "textarea":
                ko(e), Ta(e);
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
      if (e && t.stateNode != null) Jd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (n = wn(Zr.current), wn(_t.current), Ao(t)) {
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
        if (ue && be !== null && t.mode & 1 && !(t.flags & 128)) yd(), rr(), t.flags |= 98560, i = !1;
        else if (i = Ao(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(z(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(z(317));
            i[Et] = t;
          } else rr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), i = !1;
        } else gt !== null && (Ku(gt), gt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ce.current & 1 ? ke === 0 && (ke = 3) : Xs())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return ir(), Fu(e, t), e === null && Yr(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return zs(t.type._context), $e(t), null;
    case 17:
      return Ke(t.type) && si(), $e(t), null;
    case 19:
      if (oe(ce), i = t.memoizedState, i === null) return $e(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) kr(i, !1);
      else {
        if (ke !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = mi(e), l !== null) {
            for (t.flags |= 128, kr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return te(ce, ce.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ye() > ur && (t.flags |= 128, r = !0, kr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = mi(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !ue) return $e(t), null;
        } else 2 * ye() - i.renderingStartTime > ur && n !== 1073741824 && (t.flags |= 128, r = !0, kr(i, !1), t.lanes = 4194304);
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
function jy(e, t) {
  switch (Ts(t), t.tag) {
    case 1:
      return Ke(t.type) && si(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ir(), oe(Qe), oe(De), Ls(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ms(t), null;
    case 13:
      if (oe(ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(z(340));
        rr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return oe(ce), null;
    case 4:
      return ir(), null;
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
var $o = !1, je = !1, Dy = typeof WeakSet == "function" ? WeakSet : Set, D = null;
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
var gc = !1;
function My(e, t) {
  if (xu = oi, e = rd(), Ps(e)) {
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
        var l = 0, u = -1, s = -1, a = 0, d = 0, m = e, h = null;
        t: for (; ; ) {
          for (var x; m !== n || o !== 0 && m.nodeType !== 3 || (u = l + o), m !== i || r !== 0 && m.nodeType !== 3 || (s = l + r), m.nodeType === 3 && (l += m.nodeValue.length), (x = m.firstChild) !== null; )
            h = m, m = x;
          for (; ; ) {
            if (m === e) break t;
            if (h === n && ++a === o && (u = l), h === i && ++d === r && (s = l), (x = m.nextSibling) !== null) break;
            m = h, h = m.parentNode;
          }
          m = x;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Eu = { focusedElem: e, selectionRange: n }, oi = !1, D = t; D !== null; ) if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, D = e;
  else for (; D !== null; ) {
    t = D;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var E = g.memoizedProps, _ = g.memoizedState, p = t.stateNode, c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? E : mt(t.type, E), _);
            p.__reactInternalSnapshotBeforeUpdate = c;
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
      e.return = t.return, D = e;
      break;
    }
    D = t.return;
  }
  return g = gc, gc = !1, g;
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
function qd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, qd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Et], delete t[Xr], delete t[Pu], delete t[vy], delete t[wy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ep(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ep(e.return)) return null;
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
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) tp(e, t, n), n = n.sibling;
}
function tp(e, t, n) {
  if (Ct && typeof Ct.onCommitFiberUnmount == "function") try {
    Ct.onCommitFiberUnmount($i, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      je || Qn(n, t);
    case 6:
      var r = Pe, o = yt;
      Pe = null, Wt(e, t, n), Pe = r, yt = o, Pe !== null && (yt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null && (yt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? Ll(e.parentNode, n) : e.nodeType === 1 && Ll(e, n), Vr(e)) : Ll(Pe, n.stateNode));
      break;
    case 4:
      r = Pe, o = yt, Pe = n.stateNode.containerInfo, yt = !0, Wt(e, t, n), Pe = r, yt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!je && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && Iu(n, t, l), o = o.next;
        } while (o !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (!je && (Qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        he(n, t, u);
      }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (je = (r = je) || n.memoizedState !== null, Wt(e, t, n), je = r) : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function wc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Dy()), t.forEach(function(r) {
      var o = Qy.bind(null, e, r);
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
      tp(i, l, o), Pe = null, yt = !1;
      var s = o.alternate;
      s !== null && (s.return = null), o.return = null;
    } catch (a) {
      he(o, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) np(t, e), t = t.sibling;
}
function np(e, t) {
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
          Br(o, "");
        } catch (E) {
          he(e, e.return, E);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && Cf(o, i), du(u, l);
          var a = du(u, i);
          for (l = 0; l < s.length; l += 2) {
            var d = s[l], m = s[l + 1];
            d === "style" ? Of(o, m) : d === "dangerouslySetInnerHTML" ? Nf(o, m) : d === "children" ? Br(o, m) : ps(o, d, m, a);
          }
          switch (u) {
            case "input":
              uu(o, i);
              break;
            case "textarea":
              _f(o, i);
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
          o[Xr] = i;
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
        Vr(t.containerInfo);
      } catch (E) {
        he(e, e.return, E);
      }
      break;
    case 4:
      ht(t, e), kt(e);
      break;
    case 13:
      ht(t, e), kt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ks = ye())), r & 4 && wc(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (je = (a = je) || d, ht(t, e), je = a) : ht(t, e), kt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !d && e.mode & 1) for (D = e, d = e.child; d !== null; ) {
          for (m = D = d; D !== null; ) {
            switch (h = D, x = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                jr(4, h, h.return);
                break;
              case 1:
                Qn(h, h.return);
                var g = h.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
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
                  kc(m);
                  continue;
                }
            }
            x !== null ? (x.return = h, D = x) : kc(m);
          }
          d = d.sibling;
        }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                o = m.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Tf("display", l));
              } catch (E) {
                he(e, e.return, E);
              }
            }
          } else if (m.tag === 6) {
            if (d === null) try {
              m.stateNode.nodeValue = a ? "" : m.memoizedProps;
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
            d === m && (d = null), m = m.return;
          }
          d === m && (d = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      ht(t, e), kt(e), r & 4 && wc(e);
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
          if (ep(n)) {
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
          r.flags & 32 && (Br(o, ""), r.flags &= -33);
          var i = vc(e);
          Hu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = vc(e);
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
function Ly(e, t, n) {
  D = e, rp(e);
}
function rp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var o = D, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || $o;
      if (!l) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || je;
        u = $o;
        var a = je;
        if ($o = l, (je = s) && !a) for (D = o; D !== null; ) l = D, s = l.child, l.tag === 22 && l.memoizedState !== null ? xc(o) : s !== null ? (s.return = l, D = s) : xc(o);
        for (; i !== null; ) D = i, rp(i), i = i.sibling;
        D = o, $o = u, je = a;
      }
      Sc(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, D = i) : Sc(e);
  }
}
function Sc(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            je || Ui(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !je) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && oc(t, i, r);
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
              oc(t, l, n);
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
                var d = a.memoizedState;
                if (d !== null) {
                  var m = d.dehydrated;
                  m !== null && Vr(m);
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
        je || t.flags & 512 && Bu(t);
      } catch (h) {
        he(t, t.return, h);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function kc(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function xc(e) {
  for (; D !== null; ) {
    var t = D;
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
      D = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, D = u;
      break;
    }
    D = t.return;
  }
}
var Fy = Math.ceil, vi = Ut.ReactCurrentDispatcher, Vs = Ut.ReactCurrentOwner, at = Ut.ReactCurrentBatchConfig, X = 0, Ee = null, ve = null, Te = 0, Xe = 0, Kn = dn(0), ke = 0, to = null, Nn = 0, Hi = 0, Qs = 0, Dr = null, He = null, Ks = 0, ur = 1 / 0, At = null, wi = !1, Wu = null, tn = null, jo = !1, Xt = null, Si = 0, Mr = 0, Vu = null, Xo = -1, bo = 0;
function Le() {
  return X & 6 ? ye() : Xo !== -1 ? Xo : Xo = ye();
}
function nn(e) {
  return e.mode & 1 ? X & 2 && Te !== 0 ? Te & -Te : ky.transition !== null ? (bo === 0 && (bo = Uf()), bo) : (e = Z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Gf(e.type)), e) : 1;
}
function wt(e, t, n, r) {
  if (50 < Mr) throw Mr = 0, Vu = null, Error(z(185));
  so(e, n, r), (!(X & 2) || e !== Ee) && (e === Ee && (!(X & 2) && (Hi |= n), ke === 4 && Yt(e, Te)), Ye(e, r), n === 1 && X === 0 && !(t.mode & 1) && (ur = ye() + 500, Fi && pn()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  km(e, t);
  var r = ri(e, e === Ee ? Te : 0);
  if (r === 0) n !== null && Ra(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ra(n), t === 1) e.tag === 0 ? Sy(Ec.bind(null, e)) : pd(Ec.bind(null, e)), yy(function() {
      !(X & 6) && pn();
    }), n = null;
    else {
      switch (Hf(r)) {
        case 1:
          n = vs;
          break;
        case 4:
          n = If;
          break;
        case 16:
          n = ni;
          break;
        case 536870912:
          n = Bf;
          break;
        default:
          n = ni;
      }
      n = fp(n, op.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function op(e, t) {
  if (Xo = -1, bo = 0, X & 6) throw Error(z(327));
  var n = e.callbackNode;
  if (qn() && e.callbackNode !== n) return null;
  var r = ri(e, e === Ee ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ki(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var i = lp();
    (Ee !== e || Te !== t) && (At = null, ur = ye() + 500, Sn(e, t));
    do
      try {
        Uy();
        break;
      } catch (u) {
        ip(e, u);
      }
    while (!0);
    Rs(), vi.current = i, X = o, ve !== null ? t = 0 : (Ee = null, Te = 0, t = ke);
  }
  if (t !== 0) {
    if (t === 2 && (o = gu(e), o !== 0 && (r = o, t = Qu(e, o))), t === 1) throw n = to, Sn(e, 0), Yt(e, r), Ye(e, ye()), n;
    if (t === 6) Yt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Iy(o) && (t = ki(e, r), t === 2 && (i = gu(e), i !== 0 && (r = i, t = Qu(e, i))), t === 1)) throw n = to, Sn(e, 0), Yt(e, r), Ye(e, ye()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          mn(e, He, At);
          break;
        case 3:
          if (Yt(e, r), (r & 130023424) === r && (t = Ks + 500 - ye(), 10 < t)) {
            if (ri(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Le(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = _u(mn.bind(null, e, He, At), t);
            break;
          }
          mn(e, He, At);
          break;
        case 4:
          if (Yt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - vt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Fy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _u(mn.bind(null, e, He, At), r);
            break;
          }
          mn(e, He, At);
          break;
        case 5:
          mn(e, He, At);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Ye(e, ye()), e.callbackNode === n ? op.bind(null, e) : null;
}
function Qu(e, t) {
  var n = Dr;
  return e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256), e = ki(e, t), e !== 2 && (t = He, He = n, t !== null && Ku(t)), e;
}
function Ku(e) {
  He === null ? He = e : He.push.apply(He, e);
}
function Iy(e) {
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
function Ec(e) {
  if (X & 6) throw Error(z(327));
  qn();
  var t = ri(e, 0);
  if (!(t & 1)) return Ye(e, ye()), null;
  var n = ki(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gu(e);
    r !== 0 && (t = r, n = Qu(e, r));
  }
  if (n === 1) throw n = to, Sn(e, 0), Yt(e, t), Ye(e, ye()), n;
  if (n === 6) throw Error(z(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, mn(e, He, At), Ye(e, ye()), null;
}
function Ys(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    X = n, X === 0 && (ur = ye() + 500, Fi && pn());
  }
}
function Tn(e) {
  Xt !== null && Xt.tag === 0 && !(X & 6) && qn();
  var t = X;
  X |= 1;
  var n = at.transition, r = Z;
  try {
    if (at.transition = null, Z = 1, e) return e();
  } finally {
    Z = r, at.transition = n, X = t, !(X & 6) && pn();
  }
}
function Gs() {
  Xe = Kn.current, oe(Kn);
}
function Sn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, my(n)), ve !== null) for (n = ve.return; n !== null; ) {
    var r = n;
    switch (Ts(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && si();
        break;
      case 3:
        ir(), oe(Qe), oe(De), Ls();
        break;
      case 5:
        Ms(r);
        break;
      case 4:
        ir();
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
  if (Ee = e, ve = e = rn(e.current, null), Te = Xe = t, ke = 0, to = null, Qs = Hi = Nn = 0, He = Dr = null, vn !== null) {
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
function ip(e, t) {
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
      if (Pn = 0, xe = Se = fe = null, $r = !1, Jr = 0, Vs.current = null, n === null || n.return === null) {
        ke = 1, to = t, ve = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = Te, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, d = u, m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = d.alternate;
            h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var x = cc(l);
          if (x !== null) {
            x.flags &= -257, fc(x, l, u, i, t), x.mode & 1 && ac(i, a, t), t = x, s = a;
            var g = t.updateQueue;
            if (g === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(s), t.updateQueue = E;
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ac(i, a, t), Xs();
              break e;
            }
            s = Error(z(426));
          }
        } else if (ue && u.mode & 1) {
          var _ = cc(l);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), fc(_, l, u, i, t), Os(lr(s, u));
            break e;
          }
        }
        i = s = lr(s, u), ke !== 4 && (ke = 2), Dr === null ? Dr = [i] : Dr.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = Hd(i, s, t);
              rc(i, p);
              break e;
            case 1:
              u = s;
              var c = i.type, f = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (tn === null || !tn.has(f)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = Wd(i, u, t);
                rc(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      sp(n);
    } catch (P) {
      t = P, ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function lp() {
  var e = vi.current;
  return vi.current = gi, e === null ? gi : e;
}
function Xs() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4), Ee === null || !(Nn & 268435455) && !(Hi & 268435455) || Yt(Ee, Te);
}
function ki(e, t) {
  var n = X;
  X |= 2;
  var r = lp();
  (Ee !== e || Te !== t) && (At = null, Sn(e, t));
  do
    try {
      By();
      break;
    } catch (o) {
      ip(e, o);
    }
  while (!0);
  if (Rs(), X = n, vi.current = r, ve !== null) throw Error(z(261));
  return Ee = null, Te = 0, ke;
}
function By() {
  for (; ve !== null; ) up(ve);
}
function Uy() {
  for (; ve !== null && !dm(); ) up(ve);
}
function up(e) {
  var t = cp(e.alternate, e, Xe);
  e.memoizedProps = e.pendingProps, t === null ? sp(e) : ve = t, Vs.current = null;
}
function sp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = jy(n, t), n !== null) {
        n.flags &= 32767, ve = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ke = 6, ve = null;
        return;
      }
    } else if (n = $y(n, t, Xe), n !== null) {
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
  var r = Z, o = at.transition;
  try {
    at.transition = null, Z = 1, Hy(e, t, n, r);
  } finally {
    at.transition = o, Z = r;
  }
  return null;
}
function Hy(e, t, n, r) {
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
  if (xm(e, i), e === Ee && (ve = Ee = null, Te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jo || (jo = !0, fp(ni, function() {
    return qn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = at.transition, at.transition = null;
    var l = Z;
    Z = 1;
    var u = X;
    X |= 4, Vs.current = null, My(e, n), np(n, e), sy(Eu), oi = !!xu, Eu = xu = null, e.current = n, Ly(n), pm(), X = u, Z = l, at.transition = i;
  } else e.current = n;
  if (jo && (jo = !1, Xt = e, Si = o), i = e.pendingLanes, i === 0 && (tn = null), ym(n.stateNode), Ye(e, ye()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (wi) throw wi = !1, e = Wu, Wu = null, e;
  return Si & 1 && e.tag !== 0 && qn(), i = e.pendingLanes, i & 1 ? e === Vu ? Mr++ : (Mr = 0, Vu = e) : Mr = 0, pn(), null;
}
function qn() {
  if (Xt !== null) {
    var e = Hf(Si), t = at.transition, n = Z;
    try {
      if (at.transition = null, Z = 16 > e ? 16 : e, Xt === null) var r = !1;
      else {
        if (e = Xt, Xt = null, Si = 0, X & 6) throw Error(z(331));
        var o = X;
        for (X |= 4, D = e.current; D !== null; ) {
          var i = D, l = i.child;
          if (D.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (D = a; D !== null; ) {
                  var d = D;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(8, d, i);
                  }
                  var m = d.child;
                  if (m !== null) m.return = d, D = m;
                  else for (; D !== null; ) {
                    d = D;
                    var h = d.sibling, x = d.return;
                    if (qd(d), d === a) {
                      D = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = x, D = h;
                      break;
                    }
                    D = x;
                  }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var E = g.child;
                if (E !== null) {
                  g.child = null;
                  do {
                    var _ = E.sibling;
                    E.sibling = null, E = _;
                  } while (E !== null);
                }
              }
              D = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, D = l;
          else e: for (; D !== null; ) {
            if (i = D, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                jr(9, i, i.return);
            }
            var p = i.sibling;
            if (p !== null) {
              p.return = i.return, D = p;
              break e;
            }
            D = i.return;
          }
        }
        var c = e.current;
        for (D = c; D !== null; ) {
          l = D;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) f.return = l, D = f;
          else e: for (l = c; D !== null; ) {
            if (u = D, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Ui(9, u);
              }
            } catch (P) {
              he(u, u.return, P);
            }
            if (u === l) {
              D = null;
              break e;
            }
            var S = u.sibling;
            if (S !== null) {
              S.return = u.return, D = S;
              break e;
            }
            D = u.return;
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
      Z = n, at.transition = t;
    }
  }
  return !1;
}
function Cc(e, t, n) {
  t = lr(n, t), t = Hd(e, t, 1), e = en(e, t, 1), t = Le(), e !== null && (so(e, 1, t), Ye(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) Cc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Cc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tn === null || !tn.has(r))) {
        e = lr(n, e), e = Wd(t, e, 1), t = en(t, e, 1), e = Le(), t !== null && (so(t, 1, e), Ye(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Wy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Le(), e.pingedLanes |= e.suspendedLanes & n, Ee === e && (Te & n) === n && (ke === 4 || ke === 3 && (Te & 130023424) === Te && 500 > ye() - Ks ? Sn(e, 0) : Qs |= n), Ye(e, t);
}
function ap(e, t) {
  t === 0 && (e.mode & 1 ? (t = Co, Co <<= 1, !(Co & 130023424) && (Co = 4194304)) : t = 1);
  var n = Le();
  e = It(e, t), e !== null && (so(e, t, n), Ye(e, n));
}
function Vy(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ap(e, n);
}
function Qy(e, t) {
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
  r !== null && r.delete(t), ap(e, n);
}
var cp;
cp = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Qe.current) Ve = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ve = !1, zy(e, t, n);
    Ve = !!(e.flags & 131072);
  }
  else Ve = !1, ue && t.flags & 1048576 && hd(t, fi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Go(e, t), e = t.pendingProps;
      var o = nr(t, De.current);
      Jn(t, n), o = Is(null, t, r, e, o, n);
      var i = Bs();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (i = !0, ai(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, js(t), o.updater = Bi, t.stateNode = o, o._reactInternals = t, zu(t, r, e, n), t = Du(null, t, r, !0, i, n)) : (t.tag = 0, ue && i && Ns(t), Me(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Go(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Yy(r), e = mt(r, e), o) {
          case 0:
            t = ju(null, t, r, e, n);
            break e;
          case 1:
            t = hc(null, t, r, e, n);
            break e;
          case 11:
            t = dc(null, t, r, e, n);
            break e;
          case 14:
            t = pc(null, t, r, mt(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), ju(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), hc(e, t, r, o, n);
    case 3:
      e: {
        if (Yd(t), e === null) throw Error(z(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Sd(e, t), hi(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = lr(Error(z(423)), t), t = mc(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = lr(Error(z(424)), t), t = mc(e, t, r, n, o);
          break e;
        } else for (be = qt(t.stateNode.containerInfo.firstChild), Je = t, ue = !0, gt = null, n = vd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (rr(), r === o) {
            t = Bt(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return kd(t), e === null && Ou(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Cu(r, o) ? l = null : i !== null && Cu(r, i) && (t.flags |= 32), Kd(e, t), Me(e, t, l, n), t.child;
    case 6:
      return e === null && Ou(t), null;
    case 13:
      return Gd(e, t, n);
    case 4:
      return Ds(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = or(t, null, r, n) : Me(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), dc(e, t, r, o, n);
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, te(di, r._currentValue), r._currentValue = l, i !== null) if (St(i.value, l)) {
          if (i.children === o.children && !Qe.current) {
            t = Bt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            l = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = Dt(-1, n & -n), s.tag = 2;
                  var a = i.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var d = a.pending;
                    d === null ? s.next = s : (s.next = d.next, d.next = s), a.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Au(
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
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Au(l, n, t), l = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, Jn(t, n), o = ct(o), r = r(o), t.flags |= 1, Me(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = mt(r, t.pendingProps), o = mt(r.type, o), pc(e, t, r, o, n);
    case 15:
      return Vd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), Go(e, t), t.tag = 1, Ke(r) ? (e = !0, ai(t)) : e = !1, Jn(t, n), Ud(t, r, o), zu(t, r, o, n), Du(null, t, r, !0, e, n);
    case 19:
      return Xd(e, t, n);
    case 22:
      return Qd(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function fp(e, t) {
  return Ff(e, t);
}
function Ky(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function st(e, t, n, r) {
  return new Ky(e, t, n, r);
}
function bs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Yy(e) {
  if (typeof e == "function") return bs(e) ? 1 : 0;
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
function Zo(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") bs(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Mn:
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
    case kf:
      return Wi(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case wf:
          l = 10;
          break e;
        case Sf:
          l = 9;
          break e;
        case ms:
          l = 11;
          break e;
        case ys:
          l = 14;
          break e;
        case Vt:
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
function Wi(e, t, n, r) {
  return e = st(22, e, r, t), e.elementType = kf, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ql(e, t, n) {
  return e = st(6, e, null, t), e.lanes = n, e;
}
function Kl(e, t, n) {
  return t = st(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Gy(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pl(0), this.expirationTimes = Pl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Zs(e, t, n, r, o, i, l, u, s) {
  return e = new Gy(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = st(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, js(i), e;
}
function Xy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Dn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function dp(e) {
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
    if (Ke(n)) return dd(e, n, t);
  }
  return t;
}
function pp(e, t, n, r, o, i, l, u, s) {
  return e = Zs(n, r, !0, e, o, i, l, u, s), e.context = dp(null), n = e.current, r = Le(), o = nn(n), i = Dt(r, o), i.callback = t ?? null, en(n, i, o), e.current.lanes = o, so(e, o, r), Ye(e, r), e;
}
function Vi(e, t, n, r) {
  var o = t.current, i = Le(), l = nn(o);
  return n = dp(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = en(o, t, l), e !== null && (wt(e, o, l, i), Qo(e, o, l)), l;
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
function _c(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Js(e, t) {
  _c(e, t), (e = e.alternate) && _c(e, t);
}
function by() {
  return null;
}
var hp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function qs(e) {
  this._internalRoot = e;
}
Qi.prototype.render = qs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  Vi(e, t, null, null);
};
Qi.prototype.unmount = qs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function() {
      Vi(null, e, null, null);
    }), t[Ft] = null;
  }
};
function Qi(e) {
  this._internalRoot = e;
}
Qi.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Qf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && Yf(e);
  }
};
function ea(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ki(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Pc() {
}
function Zy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = xi(l);
        i.call(a);
      };
    }
    var l = pp(t, r, e, 0, null, !1, !1, "", Pc);
    return e._reactRootContainer = l, e[Ft] = l.current, Yr(e.nodeType === 8 ? e.parentNode : e), Tn(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = xi(s);
      u.call(a);
    };
  }
  var s = Zs(e, 0, !1, null, null, !1, !1, "", Pc);
  return e._reactRootContainer = s, e[Ft] = s.current, Yr(e.nodeType === 8 ? e.parentNode : e), Tn(function() {
    Vi(t, s, n, r);
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
    Vi(t, l, e, o);
  } else l = Zy(n, t, e, o, r);
  return xi(l);
}
Wf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 && (ws(t, n | 1), Ye(t, ye()), !(X & 6) && (ur = ye() + 500, pn()));
      }
      break;
    case 13:
      Tn(function() {
        var r = It(e, 1);
        if (r !== null) {
          var o = Le();
          wt(r, e, 1, o);
        }
      }), Js(e, 1);
  }
};
Ss = function(e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = Le();
      wt(t, e, 134217728, n);
    }
    Js(e, 134217728);
  }
};
Vf = function(e) {
  if (e.tag === 13) {
    var t = nn(e), n = It(e, t);
    if (n !== null) {
      var r = Le();
      wt(n, e, t, r);
    }
    Js(e, t);
  }
};
Qf = function() {
  return Z;
};
Kf = function(e, t) {
  var n = Z;
  try {
    return Z = e, t();
  } finally {
    Z = n;
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
            var o = Li(r);
            if (!o) throw Error(z(90));
            Ef(r), uu(r, o);
          }
        }
      }
      break;
    case "textarea":
      _f(e, n);
      break;
    case "select":
      t = n.value, t != null && Gn(e, !!n.multiple, t, !1);
  }
};
zf = Ys;
$f = Tn;
var Jy = { usingClientEntryPoint: !1, Events: [co, Bn, Li, Af, Rf, Ys] }, xr = { findFiberByHostInstance: gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qy = { bundleType: xr.bundleType, version: xr.version, rendererPackageName: xr.rendererPackageName, rendererConfig: xr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Mf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xr.findFiberByHostInstance || by, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Do = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Do.isDisabled && Do.supportsFiber) try {
    $i = Do.inject(qy), Ct = Do;
  } catch {
  }
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jy;
tt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ea(t)) throw Error(z(200));
  return Xy(e, t, null, n);
};
tt.createRoot = function(e, t) {
  if (!ea(e)) throw Error(z(299));
  var n = !1, r = "", o = hp;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Zs(e, 1, !1, null, null, n, !1, r, o), e[Ft] = t.current, Yr(e.nodeType === 8 ? e.parentNode : e), new qs(t);
};
tt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
  return e = Mf(t), e = e === null ? null : e.stateNode, e;
};
tt.flushSync = function(e) {
  return Tn(e);
};
tt.hydrate = function(e, t, n) {
  if (!Ki(t)) throw Error(z(200));
  return Yi(null, e, t, !0, n);
};
tt.hydrateRoot = function(e, t, n) {
  if (!ea(e)) throw Error(z(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = hp;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = pp(t, null, e, 1, n ?? null, o, !1, i, l), e[Ft] = t.current, Yr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
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
  return e._reactRootContainer ? (Tn(function() {
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
function mp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mp);
    } catch (e) {
      console.error(e);
    }
}
mp(), mf.exports = tt;
var yp = mf.exports;
const u1 = /* @__PURE__ */ Ri(yp);
var eg, Nc = yp;
eg = Nc.createRoot, Nc.hydrateRoot;
var gp = { exports: {} }, vp = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var po = We;
function tg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ng = typeof Object.is == "function" ? Object.is : tg, rg = po.useSyncExternalStore, og = po.useRef, ig = po.useEffect, lg = po.useMemo, ug = po.useDebugValue;
vp.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = og(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else l = i.current;
  i = lg(function() {
    function s(x) {
      if (!a) {
        if (a = !0, d = x, x = r(x), o !== void 0 && l.hasValue) {
          var g = l.value;
          if (o(g, x)) return m = g;
        }
        return m = x;
      }
      if (g = m, ng(d, x)) return g;
      var E = r(x);
      return o !== void 0 && o(g, E) ? g : (d = x, m = E);
    }
    var a = !1, d, m, h = n === void 0 ? null : n;
    return [function() {
      return s(t());
    }, h === null ? void 0 : function() {
      return s(h());
    }];
  }, [t, n, r, o]);
  var u = rg(e, i[0], i[1]);
  return ig(function() {
    l.hasValue = !0, l.value = u;
  }, [u]), ug(u), u;
};
gp.exports = vp;
var sg = gp.exports, Ze = (
  // prettier-ignore
  // @ts-ignore
  "default" in ka ? ln : ka
), Tc = Symbol.for("react-redux-context"), Oc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ag() {
  if (!Ze.createContext)
    return {};
  const e = Oc[Tc] ?? (Oc[Tc] = /* @__PURE__ */ new Map());
  let t = e.get(Ze.createContext);
  return t || (t = Ze.createContext(
    null
  ), e.set(Ze.createContext, t)), t;
}
var an = /* @__PURE__ */ ag(), cg = () => {
  throw new Error("uSES not initialized!");
};
function ta(e = an) {
  return function() {
    return Ze.useContext(e);
  };
}
var wp = /* @__PURE__ */ ta(), Sp = cg, fg = (e) => {
  Sp = e;
}, dg = (e, t) => e === t;
function pg(e = an) {
  const t = e === an ? wp : ta(e), n = (r, o = {}) => {
    const { equalityFn: i = dg, devModeChecks: l = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: u,
      subscription: s,
      getServerState: a,
      stabilityCheck: d,
      identityFunctionCheck: m
    } = t();
    Ze.useRef(!0);
    const h = Ze.useCallback(
      {
        [r.name](g) {
          return r(g);
        }
      }[r.name],
      [r, d, l.stabilityCheck]
    ), x = Sp(
      s.addNestedSub,
      u.getState,
      a || u.getState,
      h,
      i
    );
    return Ze.useDebugValue(x), x;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var kp = /* @__PURE__ */ pg();
function xp(e) {
  e();
}
function hg() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      xp(() => {
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
var Ac = {
  notify() {
  },
  get: () => []
};
function mg(e, t) {
  let n, r = Ac, o = 0, i = !1;
  function l(E) {
    d();
    const _ = r.subscribe(E);
    let p = !1;
    return () => {
      p || (p = !0, _(), m());
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
  function d() {
    o++, n || (n = e.subscribe(s), r = hg());
  }
  function m() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Ac);
  }
  function h() {
    i || (i = !0, d());
  }
  function x() {
    i && (i = !1, m());
  }
  const g = {
    addNestedSub: l,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: h,
    tryUnsubscribe: x,
    getListeners: () => r
  };
  return g;
}
var yg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", gg = typeof navigator < "u" && navigator.product === "ReactNative", vg = yg || gg ? Ze.useLayoutEffect : Ze.useEffect;
function Rc(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function s1(e, t) {
  if (Rc(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Rc(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
function wg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const l = Ze.useMemo(() => {
    const a = mg(e);
    return {
      store: e,
      subscription: a,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), u = Ze.useMemo(() => e.getState(), [e]);
  vg(() => {
    const { subscription: a } = l;
    return a.onStateChange = a.notifyNestedSubs, a.trySubscribe(), u !== e.getState() && a.notifyNestedSubs(), () => {
      a.tryUnsubscribe(), a.onStateChange = void 0;
    };
  }, [l, u]);
  const s = t || an;
  return /* @__PURE__ */ Ze.createElement(s.Provider, { value: l }, n);
}
var a1 = wg;
function Ep(e = an) {
  const t = e === an ? wp : (
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
var Sg = /* @__PURE__ */ Ep();
function kg(e = an) {
  const t = e === an ? Sg : Ep(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var xg = /* @__PURE__ */ kg(), c1 = xp;
fg(sg.useSyncExternalStoreWithSelector);
function _e(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Eg = typeof Symbol == "function" && Symbol.observable || "@@observable", zc = Eg, Yl = () => Math.random().toString(36).substring(7).split("").join("."), Cg = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Yl()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Yl()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Yl()}`
}, Ei = Cg;
function na(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Cp(e, t, n) {
  if (typeof e != "function")
    throw new Error(_e(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(_e(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(_e(1));
    return n(Cp)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), l = i, u = 0, s = !1;
  function a() {
    l === i && (l = /* @__PURE__ */ new Map(), i.forEach((_, p) => {
      l.set(p, _);
    }));
  }
  function d() {
    if (s)
      throw new Error(_e(3));
    return o;
  }
  function m(_) {
    if (typeof _ != "function")
      throw new Error(_e(4));
    if (s)
      throw new Error(_e(5));
    let p = !0;
    a();
    const c = u++;
    return l.set(c, _), function() {
      if (p) {
        if (s)
          throw new Error(_e(6));
        p = !1, a(), l.delete(c), i = null;
      }
    };
  }
  function h(_) {
    if (!na(_))
      throw new Error(_e(7));
    if (typeof _.type > "u")
      throw new Error(_e(8));
    if (typeof _.type != "string")
      throw new Error(_e(17));
    if (s)
      throw new Error(_e(9));
    try {
      s = !0, o = r(o, _);
    } finally {
      s = !1;
    }
    return (i = l).forEach((c) => {
      c();
    }), _;
  }
  function x(_) {
    if (typeof _ != "function")
      throw new Error(_e(10));
    r = _, h({
      type: Ei.REPLACE
    });
  }
  function g() {
    const _ = m;
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
          throw new Error(_e(11));
        function c() {
          const S = p;
          S.next && S.next(d());
        }
        return c(), {
          unsubscribe: _(c)
        };
      },
      [zc]() {
        return this;
      }
    };
  }
  return h({
    type: Ei.INIT
  }), {
    dispatch: h,
    subscribe: m,
    getState: d,
    replaceReducer: x,
    [zc]: g
  };
}
function _g(e) {
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
function Pg(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const l = t[i];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  const r = Object.keys(n);
  let o;
  try {
    _g(n);
  } catch (i) {
    o = i;
  }
  return function(l = {}, u) {
    if (o)
      throw o;
    let s = !1;
    const a = {};
    for (let d = 0; d < r.length; d++) {
      const m = r[d], h = n[m], x = l[m], g = h(x, u);
      if (typeof g > "u")
        throw u && u.type, new Error(_e(14));
      a[m] = g, s = s || g !== x;
    }
    return s = s || r.length !== Object.keys(l).length, s ? a : l;
  };
}
function Ci(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function Ng(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(_e(15));
    };
    const l = {
      getState: o.getState,
      dispatch: (s, ...a) => i(s, ...a)
    }, u = e.map((s) => s(l));
    return i = Ci(...u)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function _p(e) {
  return na(e) && "type" in e && typeof e.type == "string";
}
var ra = Symbol.for("immer-nothing"), Lr = Symbol.for("immer-draftable"), Ge = Symbol.for("immer-state");
function Ne(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var On = Object.getPrototypeOf;
function Pt(e) {
  return !!e && !!e[Ge];
}
function Nt(e) {
  var t;
  return e ? Pp(e) || Array.isArray(e) || !!e[Lr] || !!((t = e.constructor) != null && t[Lr]) || ho(e) || mo(e) : !1;
}
var Tg = Object.prototype.constructor.toString();
function Pp(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = On(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Tg;
}
function f1(e) {
  return Pt(e) || Ne(15, e), e[Ge].base_;
}
function no(e, t) {
  An(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function An(e) {
  const t = e[Ge];
  return t ? t.type_ : Array.isArray(e) ? 1 : ho(e) ? 2 : mo(e) ? 3 : 0;
}
function ro(e, t) {
  return An(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Gl(e, t) {
  return An(e) === 2 ? e.get(t) : e[t];
}
function Np(e, t, n) {
  const r = An(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function Og(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ho(e) {
  return e instanceof Map;
}
function mo(e) {
  return e instanceof Set;
}
function yn(e) {
  return e.copy_ || e.base_;
}
function Yu(e, t) {
  if (ho(e))
    return new Map(e);
  if (mo(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Pp(e);
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
    return Object.create(On(e), r);
  } else {
    const r = On(e);
    if (r !== null && n)
      return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function oa(e, t = !1) {
  return Gi(e) || Pt(e) || !Nt(e) || (An(e) > 1 && (e.set = e.add = e.clear = e.delete = Ag), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => oa(r, !0))), e;
}
function Ag() {
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
function Rg(e, t) {
  Gu[e] || (Gu[e] = t);
}
var oo;
function Tp() {
  return oo;
}
function zg(e, t) {
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
function $c(e, t) {
  t && (Rn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Xu(e) {
  bu(e), e.drafts_.forEach($g), e.drafts_ = null;
}
function bu(e) {
  e === oo && (oo = e.parent_);
}
function jc(e) {
  return oo = zg(oo, e);
}
function $g(e) {
  const t = e[Ge];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Dc(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Ge].modified_ && (Xu(t), Ne(4)), Nt(e) && (e = _i(t, e), t.parent_ || Pi(t, e)), t.patches_ && Rn("Patches").generateReplacementPatches_(
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
    return no(
      t,
      (o, i) => Mc(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Pi(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, l = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), l = !0), no(
      i,
      (u, s) => Mc(e, r, o, u, s, n, l)
    ), Pi(e, o, !1), n && e.patches_ && Rn("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Mc(e, t, n, r, o, i, l) {
  if (Pt(o)) {
    const u = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ro(t.assigned_, r) ? i.concat(r) : void 0, s = _i(e, o, u);
    if (Np(n, r, s), Pt(s))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else l && n.add(o);
  if (Nt(o) && !Gi(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    _i(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Pi(e, o);
  }
}
function Pi(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && oa(t, n);
}
function jg(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Tp(),
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
  n && (o = [r], i = io);
  const { revoke: l, proxy: u } = Proxy.revocable(o, i);
  return r.draft_ = u, r.revoke_ = l, u;
}
var ia = {
  get(e, t) {
    if (t === Ge)
      return e;
    const n = yn(e);
    if (!ro(n, t))
      return Dg(e, n, t);
    const r = n[t];
    return e.finalized_ || !Nt(r) ? r : r === Xl(e.base_, t) ? (bl(e), e.copy_[t] = Ju(r, e)) : r;
  },
  has(e, t) {
    return t in yn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(yn(e));
  },
  set(e, t, n) {
    const r = Op(yn(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Xl(yn(e), t), i = o == null ? void 0 : o[Ge];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (Og(n, o) && (n !== void 0 || ro(e.base_, t)))
        return !0;
      bl(e), Zu(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Xl(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, bl(e), Zu(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
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
    return On(e.base_);
  },
  setPrototypeOf() {
    Ne(12);
  }
}, io = {};
no(ia, (e, t) => {
  io[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
io.deleteProperty = function(e, t) {
  return io.set.call(this, e, t, void 0);
};
io.set = function(e, t, n) {
  return ia.set.call(this, e[0], t, n, e[0]);
};
function Xl(e, t) {
  const n = e[Ge];
  return (n ? yn(n) : e)[t];
}
function Dg(e, t, n) {
  var o;
  const r = Op(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Op(e, t) {
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
function Zu(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Zu(e.parent_));
}
function bl(e) {
  e.copy_ || (e.copy_ = Yu(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Mg = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const l = this;
        return function(s = i, ...a) {
          return l.produce(s, (d) => n.call(this, d, ...a));
        };
      }
      typeof n != "function" && Ne(6), r !== void 0 && typeof r != "function" && Ne(7);
      let o;
      if (Nt(t)) {
        const i = jc(this), l = Ju(t, void 0);
        let u = !0;
        try {
          o = n(l), u = !1;
        } finally {
          u ? Xu(i) : bu(i);
        }
        return $c(i, r), Dc(o, i);
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
    Nt(e) || Ne(8), Pt(e) && (e = Ap(e));
    const t = jc(this), n = Ju(e, void 0);
    return n[Ge].isManual_ = !0, bu(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ge];
    (!n || !n.isManual_) && Ne(9);
    const { scope_: r } = n;
    return $c(r, t), Dc(void 0, r);
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
    return Pt(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function Ju(e, t) {
  const n = ho(e) ? Rn("MapSet").proxyMap_(e, t) : mo(e) ? Rn("MapSet").proxySet_(e, t) : jg(e, t);
  return (t ? t.scope_ : Tp()).drafts_.push(n), n;
}
function Ap(e) {
  return Pt(e) || Ne(10, e), Rp(e);
}
function Rp(e) {
  if (!Nt(e) || Gi(e))
    return e;
  const t = e[Ge];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Yu(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Yu(e, !0);
  return no(n, (r, o) => {
    Np(n, r, Rp(o));
  }), t && (t.finalized_ = !1), n;
}
function d1() {
  const t = "replace", n = "add", r = "remove";
  function o(h, x, g, E) {
    switch (h.type_) {
      case 0:
      case 2:
        return l(
          h,
          x,
          g,
          E
        );
      case 1:
        return i(h, x, g, E);
      case 3:
        return u(
          h,
          x,
          g,
          E
        );
    }
  }
  function i(h, x, g, E) {
    let { base_: _, assigned_: p } = h, c = h.copy_;
    c.length < _.length && ([_, c] = [c, _], [g, E] = [E, g]);
    for (let f = 0; f < _.length; f++)
      if (p[f] && c[f] !== _[f]) {
        const S = x.concat([f]);
        g.push({
          op: t,
          path: S,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: m(c[f])
        }), E.push({
          op: t,
          path: S,
          value: m(_[f])
        });
      }
    for (let f = _.length; f < c.length; f++) {
      const S = x.concat([f]);
      g.push({
        op: n,
        path: S,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: m(c[f])
      });
    }
    for (let f = c.length - 1; _.length <= f; --f) {
      const S = x.concat([f]);
      E.push({
        op: r,
        path: S
      });
    }
  }
  function l(h, x, g, E) {
    const { base_: _, copy_: p } = h;
    no(h.assigned_, (c, f) => {
      const S = Gl(_, c), P = Gl(p, c), T = f ? ro(_, c) ? t : n : r;
      if (S === P && T === t)
        return;
      const A = x.concat(c);
      g.push(T === r ? { op: T, path: A } : { op: T, path: A, value: P }), E.push(
        T === n ? { op: r, path: A } : T === r ? { op: n, path: A, value: m(S) } : { op: t, path: A, value: m(S) }
      );
    });
  }
  function u(h, x, g, E) {
    let { base_: _, copy_: p } = h, c = 0;
    _.forEach((f) => {
      if (!p.has(f)) {
        const S = x.concat([c]);
        g.push({
          op: r,
          path: S,
          value: f
        }), E.unshift({
          op: n,
          path: S,
          value: f
        });
      }
      c++;
    }), c = 0, p.forEach((f) => {
      if (!_.has(f)) {
        const S = x.concat([c]);
        g.push({
          op: n,
          path: S,
          value: f
        }), E.unshift({
          op: r,
          path: S,
          value: f
        });
      }
      c++;
    });
  }
  function s(h, x, g, E) {
    g.push({
      op: t,
      path: [],
      value: x === ra ? void 0 : x
    }), E.push({
      op: t,
      path: [],
      value: h
    });
  }
  function a(h, x) {
    return x.forEach((g) => {
      const { path: E, op: _ } = g;
      let p = h;
      for (let P = 0; P < E.length - 1; P++) {
        const T = An(p);
        let A = E[P];
        typeof A != "string" && typeof A != "number" && (A = "" + A), (T === 0 || T === 1) && (A === "__proto__" || A === "constructor") && Ne(19), typeof p == "function" && A === "prototype" && Ne(19), p = Gl(p, A), typeof p != "object" && Ne(18, E.join("/"));
      }
      const c = An(p), f = d(g.value), S = E[E.length - 1];
      switch (_) {
        case t:
          switch (c) {
            case 2:
              return p.set(S, f);
            case 3:
              Ne(16);
            default:
              return p[S] = f;
          }
        case n:
          switch (c) {
            case 1:
              return S === "-" ? p.push(f) : p.splice(S, 0, f);
            case 2:
              return p.set(S, f);
            case 3:
              return p.add(f);
            default:
              return p[S] = f;
          }
        case r:
          switch (c) {
            case 1:
              return p.splice(S, 1);
            case 2:
              return p.delete(S);
            case 3:
              return p.delete(g.value);
            default:
              return delete p[S];
          }
        default:
          Ne(17, _);
      }
    }), h;
  }
  function d(h) {
    if (!Nt(h))
      return h;
    if (Array.isArray(h))
      return h.map(d);
    if (ho(h))
      return new Map(
        Array.from(h.entries()).map(([g, E]) => [g, d(E)])
      );
    if (mo(h))
      return new Set(Array.from(h).map(d));
    const x = Object.create(On(h));
    for (const g in h)
      x[g] = d(h[g]);
    return ro(h, Lr) && (x[Lr] = h[Lr]), x;
  }
  function m(h) {
    return Pt(h) ? d(h) : h;
  }
  Rg("Patches", {
    applyPatches_: a,
    generatePatches_: o,
    generateReplacementPatches_: s
  });
}
var et = new Mg(), zp = et.produce, p1 = et.produceWithPatches.bind(
  et
);
et.setAutoFreeze.bind(et);
et.setUseStrictShallowCopy.bind(et);
var h1 = et.applyPatches.bind(et);
et.createDraft.bind(et);
et.finishDraft.bind(et);
function Lg(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Fg(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Ig(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Lc = (e) => Array.isArray(e) ? e : [e];
function Bg(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Ig(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Ug(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var Hg = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Wg = typeof WeakRef < "u" ? WeakRef : Hg, Vg = 0, Fc = 1;
function Mo() {
  return {
    s: Vg,
    v: void 0,
    o: null,
    p: null
  };
}
function la(e, t = {}) {
  let n = Mo();
  const { resultEqualityCheck: r } = t;
  let o, i = 0;
  function l() {
    var m;
    let u = n;
    const { length: s } = arguments;
    for (let h = 0, x = s; h < x; h++) {
      const g = arguments[h];
      if (typeof g == "function" || typeof g == "object" && g !== null) {
        let E = u.o;
        E === null && (u.o = E = /* @__PURE__ */ new WeakMap());
        const _ = E.get(g);
        _ === void 0 ? (u = Mo(), E.set(g, u)) : u = _;
      } else {
        let E = u.p;
        E === null && (u.p = E = /* @__PURE__ */ new Map());
        const _ = E.get(g);
        _ === void 0 ? (u = Mo(), E.set(g, u)) : u = _;
      }
    }
    const a = u;
    let d;
    if (u.s === Fc)
      d = u.v;
    else if (d = e.apply(null, arguments), i++, r) {
      const h = ((m = o == null ? void 0 : o.deref) == null ? void 0 : m.call(o)) ?? o;
      h != null && r(h, d) && (d = h, i !== 0 && i--), o = typeof d == "object" && d !== null || typeof d == "function" ? new Wg(d) : d;
    }
    return a.s = Fc, a.v = d, d;
  }
  return l.clearCache = () => {
    n = Mo(), l.resetResultsCount();
  }, l.resultsCount = () => i, l.resetResultsCount = () => {
    i = 0;
  }, l;
}
function $p(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, l = 0, u, s = {}, a = o.pop();
    typeof a == "object" && (s = a, a = o.pop()), Lg(
      a,
      `createSelector expects an output function after the inputs, but received: [${typeof a}]`
    );
    const d = {
      ...n,
      ...s
    }, {
      memoize: m,
      memoizeOptions: h = [],
      argsMemoize: x = la,
      argsMemoizeOptions: g = [],
      devModeChecks: E = {}
    } = d, _ = Lc(h), p = Lc(g), c = Bg(o), f = m(function() {
      return i++, a.apply(
        null,
        arguments
      );
    }, ..._), S = x(function() {
      l++;
      const T = Ug(
        c,
        arguments
      );
      return u = f.apply(null, T), u;
    }, ...p);
    return Object.assign(S, {
      resultFunc: a,
      memoizedResultFunc: f,
      dependencies: c,
      dependencyRecomputations: () => l,
      resetDependencyRecomputations: () => {
        l = 0;
      },
      lastResult: () => u,
      recomputations: () => i,
      resetRecomputations: () => {
        i = 0;
      },
      memoize: m,
      argsMemoize: x
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Qg = /* @__PURE__ */ $p(la), Kg = Object.assign(
  (e, t = Qg) => {
    Fg(
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
  { withTypes: () => Kg }
);
function jp(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var Yg = jp(), Gg = jp, Xg = (...e) => {
  const t = $p(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (l, ...u) => o(Pt(l) ? Ap(l) : l, ...u);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
Xg(la);
var bg = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ci : Ci.apply(null, arguments);
}, Zg = (e) => e && typeof e.match == "function";
function Mt(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(Fe(0));
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => _p(r) && r.type === e, n;
}
function Ic(e, t) {
  for (const n of e)
    if (t(n))
      return n;
}
var Dp = class Nr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Nr.prototype);
  }
  static get [Symbol.species]() {
    return Nr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Nr(...t[0].concat(this)) : new Nr(...t.concat(this));
  }
};
function Bc(e) {
  return Nt(e) ? zp(e, () => {
  }) : e;
}
function Uc(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(Fe(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Jg(e) {
  return typeof e == "boolean";
}
var qg = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let l = new Dp();
  return n && (Jg(n) ? l.push(Yg) : l.push(Gg(n.extraArgument))), l;
}, Mp = "RTK_autoBatch", m1 = () => (e) => ({
  payload: e,
  meta: {
    [Mp]: !0
  }
}), Lp = (e) => (t) => {
  setTimeout(t, e);
}, ev = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Lp(10), tv = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, l = !1;
  const u = /* @__PURE__ */ new Set(), s = e.type === "tick" ? queueMicrotask : e.type === "raf" ? ev : e.type === "callback" ? e.queueNotification : Lp(e.timeout), a = () => {
    l = !1, i && (i = !1, u.forEach((d) => d()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(d) {
      const m = () => o && d(), h = r.subscribe(m);
      return u.add(d), () => {
        h(), u.delete(d);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(d) {
      var m;
      try {
        return o = !((m = d == null ? void 0 : d.meta) != null && m[Mp]), i = !o, i && (l || (l = !0, s(a))), r.dispatch(d);
      } finally {
        o = !0;
      }
    }
  });
}, nv = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Dp(e);
  return r && o.push(tv(typeof r == "object" ? r : void 0)), o;
}, rv = !0;
function y1(e) {
  const t = qg(), {
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
    u = Pg(n);
  else
    throw new Error(Fe(1));
  let s;
  typeof r == "function" ? s = r(t) : s = t();
  let a = Ci;
  o && (a = bg({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !rv,
    ...typeof o == "object" && o
  }));
  const d = Ng(...s), m = nv(d);
  let h = typeof l == "function" ? l(m) : m();
  const x = a(...h);
  return Cp(u, i, x);
}
function Fp(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, l) {
      const u = typeof i == "string" ? i : i.type;
      if (!u)
        throw new Error(Fe(28));
      if (u in t)
        throw new Error(Fe(29));
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
function ov(e) {
  return typeof e == "function";
}
function iv(e, t) {
  let [n, r, o] = Fp(t), i;
  if (ov(e))
    i = () => Bc(e());
  else {
    const u = Bc(e);
    i = () => u;
  }
  function l(u = i(), s) {
    let a = [n[s.type], ...r.filter(({
      matcher: d
    }) => d(s)).map(({
      reducer: d
    }) => d)];
    return a.filter((d) => !!d).length === 0 && (a = [o]), a.reduce((d, m) => {
      if (m)
        if (Pt(d)) {
          const x = m(d, s);
          return x === void 0 ? d : x;
        } else {
          if (Nt(d))
            return zp(d, (h) => m(h, s));
          {
            const h = m(d, s);
            if (h === void 0) {
              if (d === null)
                return d;
              throw new Error(Fe(9));
            }
            return h;
          }
        }
      return d;
    }, u);
  }
  return l.getInitialState = i, l;
}
var lv = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Ip = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += lv[Math.random() * 64 | 0];
  return t;
}, Bp = (e, t) => Zg(e) ? e.match(t) : e(t);
function yo(...e) {
  return (t) => e.some((n) => Bp(n, t));
}
function Hc(...e) {
  return (t) => e.every((n) => Bp(n, t));
}
function Xi(e, t) {
  if (!e || !e.meta)
    return !1;
  const n = typeof e.meta.requestId == "string", r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function go(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function uv(...e) {
  return e.length === 0 ? (t) => Xi(t, ["pending"]) : go(e) ? yo(...e.map((t) => t.pending)) : uv()(e[0]);
}
function qu(...e) {
  return e.length === 0 ? (t) => Xi(t, ["rejected"]) : go(e) ? yo(...e.map((t) => t.rejected)) : qu()(e[0]);
}
function sv(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0 ? Hc(qu(...e), t) : go(e) ? Hc(qu(...e), t) : sv()(e[0]);
}
function av(...e) {
  return e.length === 0 ? (t) => Xi(t, ["fulfilled"]) : go(e) ? yo(...e.map((t) => t.fulfilled)) : av()(e[0]);
}
function cv(...e) {
  return e.length === 0 ? (t) => Xi(t, ["pending", "fulfilled", "rejected"]) : go(e) ? yo(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : cv()(e[0]);
}
var fv = ["name", "message", "stack", "code"], Zl = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    pr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Wc = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    pr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, dv = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of fv)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, g1 = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = Mt(t + "/fulfilled", (s, a, d, m) => ({
      payload: s,
      meta: {
        ...m || {},
        arg: d,
        requestId: a,
        requestStatus: "fulfilled"
      }
    })), i = Mt(t + "/pending", (s, a, d) => ({
      payload: void 0,
      meta: {
        ...d || {},
        arg: a,
        requestId: s,
        requestStatus: "pending"
      }
    })), l = Mt(t + "/rejected", (s, a, d, m, h) => ({
      payload: m,
      error: (r && r.serializeError || dv)(s || "Rejected"),
      meta: {
        ...h || {},
        arg: d,
        requestId: a,
        rejectedWithValue: !!m,
        requestStatus: "rejected",
        aborted: (s == null ? void 0 : s.name) === "AbortError",
        condition: (s == null ? void 0 : s.name) === "ConditionError"
      }
    }));
    function u(s) {
      return (a, d, m) => {
        const h = r != null && r.idGenerator ? r.idGenerator(s) : Ip(), x = new AbortController();
        let g, E;
        function _(c) {
          E = c, x.abort();
        }
        const p = async function() {
          var S, P;
          let c;
          try {
            let T = (S = r == null ? void 0 : r.condition) == null ? void 0 : S.call(r, s, {
              getState: d,
              extra: m
            });
            if (hv(T) && (T = await T), T === !1 || x.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const A = new Promise((O, U) => {
              g = () => {
                U({
                  name: "AbortError",
                  message: E || "Aborted"
                });
              }, x.signal.addEventListener("abort", g);
            });
            a(i(h, s, (P = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : P.call(r, {
              requestId: h,
              arg: s
            }, {
              getState: d,
              extra: m
            }))), c = await Promise.race([A, Promise.resolve(n(s, {
              dispatch: a,
              getState: d,
              extra: m,
              requestId: h,
              signal: x.signal,
              abort: _,
              rejectWithValue: (O, U) => new Zl(O, U),
              fulfillWithValue: (O, U) => new Wc(O, U)
            })).then((O) => {
              if (O instanceof Zl)
                throw O;
              return O instanceof Wc ? o(O.payload, h, s, O.meta) : o(O, h, s);
            })]);
          } catch (T) {
            c = T instanceof Zl ? l(null, h, s, T.payload, T.meta) : l(T, h, s);
          } finally {
            g && x.signal.removeEventListener("abort", g);
          }
          return r && !r.dispatchConditionRejection && l.match(c) && c.meta.condition || a(c), c;
        }();
        return Object.assign(p, {
          abort: _,
          requestId: h,
          arg: s,
          unwrap() {
            return p.then(pv);
          }
        });
      };
    }
    return Object.assign(u, {
      pending: i,
      rejected: l,
      fulfilled: o,
      settled: yo(l, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function pv(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function hv(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var mv = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function yv(e, t) {
  return `${e}/${t}`;
}
function gv({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[mv];
  return function(o) {
    const {
      name: i,
      reducerPath: l = i
    } = o;
    if (!i)
      throw new Error(Fe(11));
    typeof process < "u";
    const u = (typeof o.reducers == "function" ? o.reducers(wv()) : o.reducers) || {}, s = Object.keys(u), a = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, d = {
      addCase(f, S) {
        const P = typeof f == "string" ? f : f.type;
        if (!P)
          throw new Error(Fe(12));
        if (P in a.sliceCaseReducersByType)
          throw new Error(Fe(13));
        return a.sliceCaseReducersByType[P] = S, d;
      },
      addMatcher(f, S) {
        return a.sliceMatchers.push({
          matcher: f,
          reducer: S
        }), d;
      },
      exposeAction(f, S) {
        return a.actionCreators[f] = S, d;
      },
      exposeCaseReducer(f, S) {
        return a.sliceCaseReducersByName[f] = S, d;
      }
    };
    s.forEach((f) => {
      const S = u[f], P = {
        reducerName: f,
        type: yv(i, f),
        createNotation: typeof o.reducers == "function"
      };
      kv(S) ? Ev(P, S, d, t) : Sv(P, S, d);
    });
    function m() {
      const [f = {}, S = [], P = void 0] = typeof o.extraReducers == "function" ? Fp(o.extraReducers) : [o.extraReducers], T = {
        ...f,
        ...a.sliceCaseReducersByType
      };
      return iv(o.initialState, (A) => {
        for (let O in T)
          A.addCase(O, T[O]);
        for (let O of a.sliceMatchers)
          A.addMatcher(O.matcher, O.reducer);
        for (let O of S)
          A.addMatcher(O.matcher, O.reducer);
        P && A.addDefaultCase(P);
      });
    }
    const h = (f) => f, x = /* @__PURE__ */ new Map();
    let g;
    function E(f, S) {
      return g || (g = m()), g(f, S);
    }
    function _() {
      return g || (g = m()), g.getInitialState();
    }
    function p(f, S = !1) {
      function P(A) {
        let O = A[f];
        return typeof O > "u" && S && (O = _()), O;
      }
      function T(A = h) {
        const O = Uc(x, S, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Uc(O, A, {
          insert: () => {
            const U = {};
            for (const [L, pe] of Object.entries(o.selectors ?? {}))
              U[L] = vv(pe, A, _, S);
            return U;
          }
        });
      }
      return {
        reducerPath: f,
        getSelectors: T,
        get selectors() {
          return T(P);
        },
        selectSlice: P
      };
    }
    const c = {
      name: i,
      reducer: E,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: _,
      ...p(l),
      injectInto(f, {
        reducerPath: S,
        ...P
      } = {}) {
        const T = S ?? l;
        return f.inject({
          reducerPath: T,
          reducer: E
        }, P), {
          ...c,
          ...p(T, !0)
        };
      }
    };
    return c;
  };
}
function vv(e, t, n, r) {
  function o(i, ...l) {
    let u = t(i);
    return typeof u > "u" && r && (u = n()), e(u, ...l);
  }
  return o.unwrapped = e, o;
}
var Up = /* @__PURE__ */ gv();
function wv() {
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
function Sv({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, l;
  if ("reducer" in r) {
    if (n && !xv(r))
      throw new Error(Fe(17));
    i = r.reducer, l = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, l ? Mt(e, l) : Mt(e));
}
function kv(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function xv(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Ev({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(Fe(18));
  const {
    payloadCreator: i,
    fulfilled: l,
    pending: u,
    rejected: s,
    settled: a,
    options: d
  } = n, m = o(e, i, d);
  r.exposeAction(t, m), l && r.addCase(m.fulfilled, l), u && r.addCase(m.pending, u), s && r.addCase(m.rejected, s), a && r.addMatcher(m.settled, a), r.exposeCaseReducer(t, {
    fulfilled: l || Lo,
    pending: u || Lo,
    rejected: s || Lo,
    settled: a || Lo
  });
}
function Lo() {
}
var Cv = "task", Hp = "listener", Wp = "completed", ua = "cancelled", _v = `task-${ua}`, Pv = `task-${Wp}`, es = `${Hp}-${ua}`, Nv = `${Hp}-${Wp}`, bi = class {
  constructor(e) {
    pr(this, "name", "TaskAbortError");
    pr(this, "message");
    this.code = e, this.message = `${Cv} ${ua} (reason: ${e})`;
  }
}, sa = (e, t) => {
  if (typeof e != "function")
    throw new Error(Fe(32));
}, Ni = () => {
}, Vp = (e, t = Ni) => (e.catch(t), e), Qp = (e, t) => (e.addEventListener("abort", t, {
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
    throw new bi(t);
  }
};
function Kp(e, t) {
  let n = Ni;
  return new Promise((r, o) => {
    const i = () => o(new bi(e.reason));
    if (e.aborted) {
      i();
      return;
    }
    n = Qp(e, i), t.finally(() => n()).then(r, o);
  }).finally(() => {
    n = Ni;
  });
}
var Tv = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (n) {
    return {
      status: n instanceof bi ? "cancelled" : "rejected",
      error: n
    };
  } finally {
    t == null || t();
  }
}, Ti = (e) => (t) => Vp(Kp(e, t).then((n) => (En(e), n))), Yp = (e) => {
  const t = Ti(e);
  return (n) => t(new Promise((r) => setTimeout(r, n)));
}, {
  assign: Ov
} = Object, Vc = {}, Zi = "listenerMiddleware", Av = (e, t) => {
  const n = (r) => Qp(e, () => xn(r, e.reason));
  return (r, o) => {
    sa(r);
    const i = new AbortController();
    n(i);
    const l = Tv(async () => {
      En(e), En(i.signal);
      const u = await r({
        pause: Ti(i.signal),
        delay: Yp(i.signal),
        signal: i.signal
      });
      return En(i.signal), u;
    }, () => xn(i, Pv));
    return o != null && o.autoJoin && t.push(l.catch(Ni)), {
      result: Ti(e)(l),
      cancel() {
        xn(i, _v);
      }
    };
  };
}, Rv = (e, t) => {
  const n = async (r, o) => {
    En(t);
    let i = () => {
    };
    const u = [new Promise((s, a) => {
      let d = e({
        predicate: r,
        effect: (m, h) => {
          h.unsubscribe(), s([m, h.getState(), h.getOriginalState()]);
        }
      });
      i = () => {
        d(), a();
      };
    })];
    o != null && u.push(new Promise((s) => setTimeout(s, o, null)));
    try {
      const s = await Kp(t, Promise.race(u));
      return En(t), s;
    } finally {
      i();
    }
  };
  return (r, o) => Vp(n(r, o));
}, Gp = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = Mt(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o) throw new Error(Fe(21));
  return sa(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, Xp = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = Gp(e);
  return {
    id: Ip(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Fe(22));
    }
  };
}, {
  withTypes: () => Xp
}), ts = (e) => {
  e.pending.forEach((t) => {
    xn(t, es);
  });
}, zv = (e) => () => {
  e.forEach(ts), e.clear();
}, Qc = (e, t, n) => {
  try {
    e(t, n);
  } catch (r) {
    setTimeout(() => {
      throw r;
    }, 0);
  }
}, bp = Object.assign(Mt(`${Zi}/add`), {
  withTypes: () => bp
}), $v = Mt(`${Zi}/removeAll`), Zp = Object.assign(Mt(`${Zi}/remove`), {
  withTypes: () => Zp
}), jv = (...e) => {
  console.error(`${Zi}/error`, ...e);
}, v1 = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), {
    extra: n,
    onError: r = jv
  } = e;
  sa(r);
  const o = (d) => (d.unsubscribe = () => t.delete(d.id), t.set(d.id, d), (m) => {
    d.unsubscribe(), m != null && m.cancelActive && ts(d);
  }), i = (d) => {
    let m = Ic(Array.from(t.values()), (h) => h.effect === d.effect);
    return m || (m = Xp(d)), o(m);
  };
  Object.assign(i, {
    withTypes: () => i
  });
  const l = (d) => {
    const {
      type: m,
      effect: h,
      predicate: x
    } = Gp(d), g = Ic(Array.from(t.values()), (E) => (typeof m == "string" ? E.type === m : E.predicate === x) && E.effect === h);
    return g && (g.unsubscribe(), d.cancelActive && ts(g)), !!g;
  };
  Object.assign(l, {
    withTypes: () => l
  });
  const u = async (d, m, h, x) => {
    const g = new AbortController(), E = Rv(i, g.signal), _ = [];
    try {
      d.pending.add(g), await Promise.resolve(d.effect(
        m,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        Ov({}, h, {
          getOriginalState: x,
          condition: (p, c) => E(p, c).then(Boolean),
          take: E,
          delay: Yp(g.signal),
          pause: Ti(g.signal),
          extra: n,
          signal: g.signal,
          fork: Av(g.signal, _),
          unsubscribe: d.unsubscribe,
          subscribe: () => {
            t.set(d.id, d);
          },
          cancelActiveListeners: () => {
            d.pending.forEach((p, c, f) => {
              p !== g && (xn(p, es), f.delete(p));
            });
          },
          cancel: () => {
            xn(g, es), d.pending.delete(g);
          },
          throwIfCancelled: () => {
            En(g.signal);
          }
        })
      ));
    } catch (p) {
      p instanceof bi || Qc(r, p, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(_), xn(g, Nv), d.pending.delete(g);
    }
  }, s = zv(t);
  return {
    middleware: (d) => (m) => (h) => {
      if (!_p(h))
        return m(h);
      if (bp.match(h))
        return i(h.payload);
      if ($v.match(h)) {
        s();
        return;
      }
      if (Zp.match(h))
        return l(h.payload);
      let x = d.getState();
      const g = () => {
        if (x === Vc)
          throw new Error(Fe(23));
        return x;
      };
      let E;
      try {
        if (E = m(h), t.size > 0) {
          const _ = d.getState(), p = Array.from(t.values());
          for (const c of p) {
            let f = !1;
            try {
              f = c.predicate(h, _, x);
            } catch (S) {
              f = !1, Qc(r, S, {
                raisedBy: "predicate"
              });
            }
            f && u(c, h, d, g);
          }
        }
      } finally {
        x = Vc;
      }
      return E;
    },
    startListening: i,
    stopListening: l,
    clearListeners: s
  };
};
function Fe(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var ns = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(t);
  })(hr, function(n) {
    function r(w, v) {
      w.super_ = v, w.prototype = Object.create(v.prototype, { constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 } });
    }
    function o(w, v) {
      Object.defineProperty(this, "kind", { value: w, enumerable: !0 }), v && v.length && Object.defineProperty(this, "path", { value: v, enumerable: !0 });
    }
    function i(w, v, y) {
      i.super_.call(this, "E", w), Object.defineProperty(this, "lhs", { value: v, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: y, enumerable: !0 });
    }
    function l(w, v) {
      l.super_.call(this, "N", w), Object.defineProperty(this, "rhs", { value: v, enumerable: !0 });
    }
    function u(w, v) {
      u.super_.call(this, "D", w), Object.defineProperty(this, "lhs", { value: v, enumerable: !0 });
    }
    function s(w, v, y) {
      s.super_.call(this, "A", w), Object.defineProperty(this, "index", { value: v, enumerable: !0 }), Object.defineProperty(this, "item", { value: y, enumerable: !0 });
    }
    function a(w, v, y) {
      var C = w.slice(v + 1 || w.length);
      return w.length = v < 0 ? w.length + v : v, w.push.apply(w, C), w;
    }
    function d(w) {
      var v = typeof w > "u" ? "undefined" : se(w);
      return v !== "object" ? v : w === Math ? "math" : w === null ? "null" : Array.isArray(w) ? "array" : Object.prototype.toString.call(w) === "[object Date]" ? "date" : typeof w.toString == "function" && /^\/.*\//.test(w.toString()) ? "regexp" : "object";
    }
    function m(w, v, y, C, R, k, j) {
      R = R || [], j = j || [];
      var N = R.slice(0);
      if (typeof k < "u") {
        if (C) {
          if (typeof C == "function" && C(N, k)) return;
          if ((typeof C > "u" ? "undefined" : se(C)) === "object") {
            if (C.prefilter && C.prefilter(N, k)) return;
            if (C.normalize) {
              var G = C.normalize(N, k, w, v);
              G && (w = G[0], v = G[1]);
            }
          }
        }
        N.push(k);
      }
      d(w) === "regexp" && d(v) === "regexp" && (w = w.toString(), v = v.toString());
      var V = typeof w > "u" ? "undefined" : se(w), W = typeof v > "u" ? "undefined" : se(v), M = V !== "undefined" || j && j[j.length - 1].lhs && j[j.length - 1].lhs.hasOwnProperty(k), b = W !== "undefined" || j && j[j.length - 1].rhs && j[j.length - 1].rhs.hasOwnProperty(k);
      if (!M && b) y(new l(N, v));
      else if (!b && M) y(new u(N, w));
      else if (d(w) !== d(v)) y(new i(N, w, v));
      else if (d(w) === "date" && w - v !== 0) y(new i(N, w, v));
      else if (V === "object" && w !== null && v !== null) if (j.filter(function(F) {
        return F.lhs === w;
      }).length) w !== v && y(new i(N, w, v));
      else {
        if (j.push({ lhs: w, rhs: v }), Array.isArray(w)) {
          var Q;
          for (w.length, Q = 0; Q < w.length; Q++) Q >= v.length ? y(new s(N, Q, new u(void 0, w[Q]))) : m(w[Q], v[Q], y, C, N, Q, j);
          for (; Q < v.length; ) y(new s(N, Q, new l(void 0, v[Q++])));
        } else {
          var K = Object.keys(w), ee = Object.keys(v);
          K.forEach(function(F, le) {
            var pt = ee.indexOf(F);
            pt >= 0 ? (m(w[F], v[F], y, C, N, F, j), ee = a(ee, pt)) : m(w[F], void 0, y, C, N, F, j);
          }), ee.forEach(function(F) {
            m(void 0, v[F], y, C, N, F, j);
          });
        }
        j.length = j.length - 1;
      }
      else w !== v && (V === "number" && isNaN(w) && isNaN(v) || y(new i(N, w, v)));
    }
    function h(w, v, y, C) {
      return C = C || [], m(w, v, function(R) {
        R && C.push(R);
      }, y), C.length ? C : void 0;
    }
    function x(w, v, y) {
      if (y.path && y.path.length) {
        var C, R = w[v], k = y.path.length - 1;
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
          x(w[v], y.index, y.item);
          break;
        case "D":
          w = a(w, v);
          break;
        case "E":
        case "N":
          w[v] = y.rhs;
      }
      return w;
    }
    function g(w, v, y) {
      if (w && v && y && y.kind) {
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
    function E(w, v, y) {
      if (y.path && y.path.length) {
        var C, R = w[v], k = y.path.length - 1;
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
          E(w[v], y.index, y.item);
          break;
        case "D":
          w[v] = y.lhs;
          break;
        case "E":
          w[v] = y.lhs;
          break;
        case "N":
          w = a(w, v);
      }
      return w;
    }
    function _(w, v, y) {
      if (w && v && y && y.kind) {
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
    function p(w, v, y) {
      if (w && v) {
        var C = function(R) {
          y && !y(w, v, R) || g(w, v, R);
        };
        m(w, v, C);
      }
    }
    function c(w) {
      return "color: " + $[w].color + "; font-weight: bold";
    }
    function f(w) {
      var v = w.kind, y = w.path, C = w.lhs, R = w.rhs, k = w.index, j = w.item;
      switch (v) {
        case "E":
          return [y.join("."), C, "→", R];
        case "N":
          return [y.join("."), R];
        case "D":
          return [y.join(".")];
        case "A":
          return [y.join(".") + "[" + k + "]", j];
        default:
          return [];
      }
    }
    function S(w, v, y, C) {
      var R = h(w, v);
      try {
        C ? y.groupCollapsed("diff") : y.group("diff");
      } catch {
        y.log("diff");
      }
      R ? R.forEach(function(k) {
        var j = k.kind, N = f(k);
        y.log.apply(y, ["%c " + $[j].text, c(j)].concat(ot(N)));
      }) : y.log("—— no diff ——");
      try {
        y.groupEnd();
      } catch {
        y.log("—— diff end —— ");
      }
    }
    function P(w, v, y, C) {
      switch (typeof w > "u" ? "undefined" : se(w)) {
        case "object":
          return typeof w[C] == "function" ? w[C].apply(w, ot(y)) : w[C];
        case "function":
          return w(v);
        default:
          return w;
      }
    }
    function T(w) {
      var v = w.timestamp, y = w.duration;
      return function(C, R, k) {
        var j = ["action"];
        return j.push("%c" + String(C.type)), v && j.push("%c@ " + R), y && j.push("%c(in " + k.toFixed(2) + " ms)"), j.join(" ");
      };
    }
    function A(w, v) {
      var y = v.logger, C = v.actionTransformer, R = v.titleFormatter, k = R === void 0 ? T(v) : R, j = v.collapsed, N = v.colors, G = v.level, V = v.diff, W = typeof v.titleFormatter > "u";
      w.forEach(function(M, b) {
        var Q = M.started, K = M.startedTime, ee = M.action, F = M.prevState, le = M.error, pt = M.took, ne = M.nextState, Ht = w[b + 1];
        Ht && (ne = Ht.prevState, pt = Ht.started - Q);
        var Re = C(ee), Ue = typeof j == "function" ? j(function() {
          return ne;
        }, ee, M) : j, H = we(K), ae = N.title ? "color: " + N.title(Re) + ";" : "", Tt = ["color: gray; font-weight: lighter;"];
        Tt.push(ae), v.timestamp && Tt.push("color: gray; font-weight: lighter;"), v.duration && Tt.push("color: gray; font-weight: lighter;");
        var Ot = k(Re, H, pt);
        try {
          Ue ? N.title && W ? y.groupCollapsed.apply(y, ["%c " + Ot].concat(Tt)) : y.groupCollapsed(Ot) : N.title && W ? y.group.apply(y, ["%c " + Ot].concat(Tt)) : y.group(Ot);
        } catch {
          y.log(Ot);
        }
        var it = P(G, Re, [F], "prevState"), vl = P(G, Re, [Re], "action"), wl = P(G, Re, [le, F], "error"), Sl = P(G, Re, [ne], "nextState");
        if (it) if (N.prevState) {
          var kh = "color: " + N.prevState(F) + "; font-weight: bold";
          y[it]("%c prev state", kh, F);
        } else y[it]("prev state", F);
        if (vl) if (N.action) {
          var xh = "color: " + N.action(Re) + "; font-weight: bold";
          y[vl]("%c action    ", xh, Re);
        } else y[vl]("action    ", Re);
        if (le && wl) if (N.error) {
          var Eh = "color: " + N.error(le, F) + "; font-weight: bold;";
          y[wl]("%c error     ", Eh, le);
        } else y[wl]("error     ", le);
        if (Sl) if (N.nextState) {
          var Ch = "color: " + N.nextState(ne) + "; font-weight: bold";
          y[Sl]("%c next state", Ch, ne);
        } else y[Sl]("next state", ne);
        V && S(F, ne, y, Ue);
        try {
          y.groupEnd();
        } catch {
          y.log("—— log end ——");
        }
      });
    }
    function O() {
      var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = Object.assign({}, I, w), y = v.logger, C = v.stateTransformer, R = v.errorTransformer, k = v.predicate, j = v.logErrors, N = v.diffPredicate;
      if (typeof y > "u") return function() {
        return function(V) {
          return function(W) {
            return V(W);
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
        return function(V) {
          return function(W) {
            return V(W);
          };
        };
      };
      var G = [];
      return function(V) {
        var W = V.getState;
        return function(M) {
          return function(b) {
            if (typeof k == "function" && !k(W, b)) return M(b);
            var Q = {};
            G.push(Q), Q.started = Ae.now(), Q.startedTime = /* @__PURE__ */ new Date(), Q.prevState = C(W()), Q.action = b;
            var K = void 0;
            if (j) try {
              K = M(b);
            } catch (F) {
              Q.error = R(F);
            }
            else K = M(b);
            Q.took = Ae.now() - Q.started, Q.nextState = C(W());
            var ee = v.diff && typeof N == "function" ? N(W, b) : v.diff;
            if (A(G, Object.assign({}, v, { diff: ee })), G.length = 0, Q.error) throw Q.error;
            return K;
          };
        };
      };
    }
    var U, L, pe = function(w, v) {
      return new Array(v + 1).join(w);
    }, ie = function(w, v) {
      return pe("0", v - w.toString().length) + w;
    }, we = function(w) {
      return ie(w.getHours(), 2) + ":" + ie(w.getMinutes(), 2) + ":" + ie(w.getSeconds(), 2) + "." + ie(w.getMilliseconds(), 3);
    }, Ae = typeof performance < "u" && performance !== null && typeof performance.now == "function" ? performance : Date, se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
      return typeof w;
    } : function(w) {
      return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
    }, ot = function(w) {
      if (Array.isArray(w)) {
        for (var v = 0, y = Array(w.length); v < w.length; v++) y[v] = w[v];
        return y;
      }
      return Array.from(w);
    }, ge = [];
    U = (typeof hr > "u" ? "undefined" : se(hr)) === "object" && hr ? hr : typeof window < "u" ? window : {}, L = U.DeepDiff, L && ge.push(function() {
      typeof L < "u" && U.DeepDiff === h && (U.DeepDiff = L, L = void 0);
    }), r(i, o), r(l, o), r(u, o), r(s, o), Object.defineProperties(h, { diff: { value: h, enumerable: !0 }, observableDiff: { value: m, enumerable: !0 }, applyDiff: { value: p, enumerable: !0 }, applyChange: { value: g, enumerable: !0 }, revertChange: { value: _, enumerable: !0 }, isConflict: { value: function() {
      return typeof L < "u";
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
      var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = w.dispatch, y = w.getState;
      return typeof v == "function" || typeof y == "function" ? O()({ dispatch: v, getState: y }) : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
    };
    n.defaults = I, n.createLogger = O, n.logger = B, n.default = B, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(ns, ns.exports);
var Dv = ns.exports;
const w1 = /* @__PURE__ */ Ri(Dv), Mv = {
  theme: void 0,
  kind: void 0
}, Jp = Up({
  name: "theme",
  initialState: Mv,
  reducers: {
    changeTheme: (e, t) => {
      e.kind = t.payload.kind, e.theme = { ...e.theme, ...t.payload.theme ?? {} }, e.kind === "light" ? (e.theme.computedOne = "rgba(0, 0, 0, 0.05)", e.theme.computedTwo = "rgba(0, 0, 0, 0.1)") : e.kind === "dark" ? (e.theme.computedOne = "rgba(255, 255, 255, 0.05)", e.theme.computedTwo = "rgba(255, 255, 255, 0.1)") : (e.theme.computedOne = "transparent", e.theme.computedTwo = "transparent");
    }
  }
}), Lv = kp, { changeTheme: S1 } = Jp.actions, k1 = Jp.reducer, Fv = {
  current: ["starting"],
  history: []
}, qp = Up({
  name: "router",
  initialState: Fv,
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
}), { goTo: Iv, goBack: x1, openLink: Bv } = qp.actions, Uv = xg, eh = kp, E1 = qp.reducer;
var th = { exports: {} }, J = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = Symbol.for("react.element"), ca = Symbol.for("react.portal"), Ji = Symbol.for("react.fragment"), qi = Symbol.for("react.strict_mode"), el = Symbol.for("react.profiler"), tl = Symbol.for("react.provider"), nl = Symbol.for("react.context"), Hv = Symbol.for("react.server_context"), rl = Symbol.for("react.forward_ref"), ol = Symbol.for("react.suspense"), il = Symbol.for("react.suspense_list"), ll = Symbol.for("react.memo"), ul = Symbol.for("react.lazy"), Wv = Symbol.for("react.offscreen"), nh;
nh = Symbol.for("react.module.reference");
function dt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case aa:
        switch (e = e.type, e) {
          case Ji:
          case el:
          case qi:
          case ol:
          case il:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Hv:
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
      case ca:
        return t;
    }
  }
}
J.ContextConsumer = nl;
J.ContextProvider = tl;
J.Element = aa;
J.ForwardRef = rl;
J.Fragment = Ji;
J.Lazy = ul;
J.Memo = ll;
J.Portal = ca;
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
  return typeof e == "object" && e !== null && e.$$typeof === aa;
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
  return dt(e) === ca;
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
  return typeof e == "string" || typeof e == "function" || e === Ji || e === el || e === qi || e === ol || e === il || e === Wv || typeof e == "object" && e !== null && (e.$$typeof === ul || e.$$typeof === ll || e.$$typeof === tl || e.$$typeof === nl || e.$$typeof === rl || e.$$typeof === nh || e.getModuleId !== void 0);
};
J.typeOf = dt;
th.exports = J;
var rh = th.exports;
function Vv(e) {
  function t(v, y, C, R, k) {
    for (var j = 0, N = 0, G = 0, V = 0, W, M, b = 0, Q = 0, K, ee = K = W = 0, F = 0, le = 0, pt = 0, ne = 0, Ht = C.length, Re = Ht - 1, Ue, H = "", ae = "", Tt = "", Ot = "", it; F < Ht; ) {
      if (M = C.charCodeAt(F), F === Re && N + V + G + j !== 0 && (N !== 0 && (M = N === 47 ? 10 : 47), V = G = j = 0, Ht++, Re++), N + V + G + j === 0) {
        if (F === Re && (0 < le && (H = H.replace(h, "")), 0 < H.trim().length)) {
          switch (M) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              H += C.charAt(F);
          }
          M = 59;
        }
        switch (M) {
          case 123:
            for (H = H.trim(), W = H.charCodeAt(0), K = 1, ne = ++F; F < Ht; ) {
              switch (M = C.charCodeAt(F)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (M = C.charCodeAt(F + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ee = F + 1; ee < Re; ++ee)
                          switch (C.charCodeAt(ee)) {
                            case 47:
                              if (M === 42 && C.charCodeAt(ee - 1) === 42 && F + 2 !== ee) {
                                F = ee + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (M === 47) {
                                F = ee + 1;
                                break e;
                              }
                          }
                        F = ee;
                      }
                  }
                  break;
                case 91:
                  M++;
                case 40:
                  M++;
                case 34:
                case 39:
                  for (; F++ < Re && C.charCodeAt(F) !== M; )
                    ;
              }
              if (K === 0) break;
              F++;
            }
            switch (K = C.substring(ne, F), W === 0 && (W = (H = H.replace(m, "").trim()).charCodeAt(0)), W) {
              case 64:
                switch (0 < le && (H = H.replace(h, "")), M = H.charCodeAt(1), M) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = y;
                    break;
                  default:
                    le = ot;
                }
                if (K = t(y, le, K, M, k + 1), ne = K.length, 0 < $ && (le = n(ot, H, pt), it = u(3, K, le, y, we, ie, ne, M, k, R), H = le.join(""), it !== void 0 && (ne = (K = it.trim()).length) === 0 && (M = 0, K = "")), 0 < ne) switch (M) {
                  case 115:
                    H = H.replace(T, l);
                  case 100:
                  case 109:
                  case 45:
                    K = H + "{" + K + "}";
                    break;
                  case 107:
                    H = H.replace(c, "$1 $2"), K = H + "{" + K + "}", K = se === 1 || se === 2 && i("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = H + K, R === 112 && (K = (ae += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(y, n(y, H, pt), K, R, k + 1);
            }
            Tt += K, K = pt = le = ee = W = 0, H = "", M = C.charCodeAt(++F);
            break;
          case 125:
          case 59:
            if (H = (0 < le ? H.replace(h, "") : H).trim(), 1 < (ne = H.length)) switch (ee === 0 && (W = H.charCodeAt(0), W === 45 || 96 < W && 123 > W) && (ne = (H = H.replace(" ", ":")).length), 0 < $ && (it = u(1, H, y, v, we, ie, ae.length, R, k, R)) !== void 0 && (ne = (H = it.trim()).length) === 0 && (H = "\0\0"), W = H.charCodeAt(0), M = H.charCodeAt(1), W) {
              case 0:
                break;
              case 64:
                if (M === 105 || M === 99) {
                  Ot += H + C.charAt(F);
                  break;
                }
              default:
                H.charCodeAt(ne - 1) !== 58 && (ae += o(H, W, M, H.charCodeAt(2)));
            }
            pt = le = ee = W = 0, H = "", M = C.charCodeAt(++F);
        }
      }
      switch (M) {
        case 13:
        case 10:
          N === 47 ? N = 0 : 1 + W === 0 && R !== 107 && 0 < H.length && (le = 1, H += "\0"), 0 < $ * B && u(0, H, y, v, we, ie, ae.length, R, k, R), ie = 1, we++;
          break;
        case 59:
        case 125:
          if (N + V + G + j === 0) {
            ie++;
            break;
          }
        default:
          switch (ie++, Ue = C.charAt(F), M) {
            case 9:
            case 32:
              if (V + j + N === 0) switch (b) {
                case 44:
                case 58:
                case 9:
                case 32:
                  Ue = "";
                  break;
                default:
                  M !== 32 && (Ue = " ");
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
              V + N + j === 0 && (le = pt = 1, Ue = "\f" + Ue);
              break;
            case 108:
              if (V + N + j + Ae === 0 && 0 < ee) switch (F - ee) {
                case 2:
                  b === 112 && C.charCodeAt(F - 3) === 58 && (Ae = b);
                case 8:
                  Q === 111 && (Ae = Q);
              }
              break;
            case 58:
              V + N + j === 0 && (ee = F);
              break;
            case 44:
              N + G + V + j === 0 && (le = 1, Ue += "\r");
              break;
            case 34:
            case 39:
              N === 0 && (V = V === M ? 0 : V === 0 ? M : V);
              break;
            case 91:
              V + N + G === 0 && j++;
              break;
            case 93:
              V + N + G === 0 && j--;
              break;
            case 41:
              V + N + j === 0 && G--;
              break;
            case 40:
              if (V + N + j === 0) {
                if (W === 0) switch (2 * b + 3 * Q) {
                  case 533:
                    break;
                  default:
                    W = 1;
                }
                G++;
              }
              break;
            case 64:
              N + G + V + j + ee + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < V + j + G)) switch (N) {
                case 0:
                  switch (2 * M + 3 * C.charCodeAt(F + 1)) {
                    case 235:
                      N = 47;
                      break;
                    case 220:
                      ne = F, N = 42;
                  }
                  break;
                case 42:
                  M === 47 && b === 42 && ne + 2 !== F && (C.charCodeAt(ne + 2) === 33 && (ae += C.substring(ne, F + 1)), Ue = "", N = 0);
              }
          }
          N === 0 && (H += Ue);
      }
      Q = b, b = M, F++;
    }
    if (ne = ae.length, 0 < ne) {
      if (le = y, 0 < $ && (it = u(2, ae, le, v, we, ie, ne, R, k, R), it !== void 0 && (ae = it).length === 0)) return Ot + ae + Tt;
      if (ae = le.join(",") + "{" + ae + "}", se * Ae !== 0) {
        switch (se !== 2 || i(ae, 2) || (Ae = 0), Ae) {
          case 111:
            ae = ae.replace(S, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(f, "::-webkit-input-$1") + ae.replace(f, "::-moz-$1") + ae.replace(f, ":-ms-input-$1") + ae;
        }
        Ae = 0;
      }
    }
    return Ot + ae + Tt;
  }
  function n(v, y, C) {
    var R = y.trim().split(_);
    y = R;
    var k = R.length, j = v.length;
    switch (j) {
      case 0:
      case 1:
        var N = 0;
        for (v = j === 0 ? "" : v[0] + " "; N < k; ++N)
          y[N] = r(v, y[N], C).trim();
        break;
      default:
        var G = N = 0;
        for (y = []; N < k; ++N)
          for (var V = 0; V < j; ++V)
            y[G++] = r(v[V] + " ", R[N], C).trim();
    }
    return y;
  }
  function r(v, y, C) {
    var R = y.charCodeAt(0);
    switch (33 > R && (R = (y = y.trim()).charCodeAt(0)), R) {
      case 38:
        return y.replace(p, "$1" + v.trim());
      case 58:
        return v.trim() + y.replace(p, "$1" + v.trim());
      default:
        if (0 < 1 * C && 0 < y.indexOf("\f")) return y.replace(p, (v.charCodeAt(0) === 58 ? "" : "$1") + v.trim());
    }
    return v + y;
  }
  function o(v, y, C, R) {
    var k = v + ";", j = 2 * y + 3 * C + 4 * R;
    if (j === 944) {
      v = k.indexOf(":", 9) + 1;
      var N = k.substring(v, k.length - 1).trim();
      return N = k.substring(0, v).trim() + N + ";", se === 1 || se === 2 && i(N, 1) ? "-webkit-" + N + N : N;
    }
    if (se === 0 || se === 2 && !i(k, 1)) return k;
    switch (j) {
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
        return g.test(k) ? k.replace(x, ":-webkit-") + k.replace(x, ":-moz-") + k : k;
      case 1e3:
        switch (N = k.substring(13).trim(), y = N.indexOf("-") + 1, N.charCodeAt(0) + N.charCodeAt(y)) {
          case 226:
            N = k.replace(P, "tb");
            break;
          case 232:
            N = k.replace(P, "tb-rl");
            break;
          case 220:
            N = k.replace(P, "lr");
            break;
          default:
            return k;
        }
        return "-webkit-" + k + "-ms-" + N + k;
      case 1017:
        if (k.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (y = (k = v).length - 10, N = (k.charCodeAt(y) === 33 ? k.substring(0, y) : k).substring(v.indexOf(":", 7) + 1).trim(), j = N.charCodeAt(0) + (N.charCodeAt(7) | 0)) {
          case 203:
            if (111 > N.charCodeAt(8)) break;
          case 115:
            k = k.replace(N, "-webkit-" + N) + ";" + k;
            break;
          case 207:
          case 102:
            k = k.replace(N, "-webkit-" + (102 < j ? "inline-" : "") + "box") + ";" + k.replace(N, "-webkit-" + N) + ";" + k.replace(N, "-ms-" + N + "box") + ";" + k;
        }
        return k + ";";
      case 938:
        if (k.charCodeAt(5) === 45) switch (k.charCodeAt(6)) {
          case 105:
            return N = k.replace("-items", ""), "-webkit-" + k + "-webkit-box-" + N + "-ms-flex-" + N + k;
          case 115:
            return "-webkit-" + k + "-ms-flex-item-" + k.replace(O, "") + k;
          default:
            return "-webkit-" + k + "-ms-flex-line-pack" + k.replace("align-content", "").replace(O, "") + k;
        }
        break;
      case 973:
      case 989:
        if (k.charCodeAt(3) !== 45 || k.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (L.test(v) === !0) return (N = v.substring(v.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(v.replace("stretch", "fill-available"), y, C, R).replace(":fill-available", ":stretch") : k.replace(N, "-webkit-" + N) + k.replace(N, "-moz-" + N.replace("fill-", "")) + k;
        break;
      case 962:
        if (k = "-webkit-" + k + (k.charCodeAt(5) === 102 ? "-ms-" + k : "") + k, C + R === 211 && k.charCodeAt(13) === 105 && 0 < k.indexOf("transform", 10)) return k.substring(0, k.indexOf(";", 27) + 1).replace(E, "$1-webkit-$2") + k;
    }
    return k;
  }
  function i(v, y) {
    var C = v.indexOf(y === 1 ? ":" : "{"), R = v.substring(0, y !== 3 ? C : 10);
    return C = v.substring(C + 1, v.length - 1), I(y !== 2 ? R : R.replace(U, "$1"), C, y);
  }
  function l(v, y) {
    var C = o(y, y.charCodeAt(0), y.charCodeAt(1), y.charCodeAt(2));
    return C !== y + ";" ? C.replace(A, " or ($1)").substring(4) : "(" + y + ")";
  }
  function u(v, y, C, R, k, j, N, G, V, W) {
    for (var M = 0, b = y, Q; M < $; ++M)
      switch (Q = ge[M].call(d, v, b, C, R, k, j, N, G, V, W)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          b = Q;
      }
    if (b !== y) return b;
  }
  function s(v) {
    switch (v) {
      case void 0:
      case null:
        $ = ge.length = 0;
        break;
      default:
        if (typeof v == "function") ge[$++] = v;
        else if (typeof v == "object") for (var y = 0, C = v.length; y < C; ++y)
          s(v[y]);
        else B = !!v | 0;
    }
    return s;
  }
  function a(v) {
    return v = v.prefix, v !== void 0 && (I = null, v ? typeof v != "function" ? se = 1 : (se = 2, I = v) : se = 0), a;
  }
  function d(v, y) {
    var C = v;
    if (33 > C.charCodeAt(0) && (C = C.trim()), w = C, C = [w], 0 < $) {
      var R = u(-1, y, C, C, we, ie, 0, 0, 0, 0);
      R !== void 0 && typeof R == "string" && (y = R);
    }
    var k = t(ot, C, y, 0, 0);
    return 0 < $ && (R = u(-2, k, C, C, we, ie, k.length, 0, 0, 0), R !== void 0 && (k = R)), w = "", Ae = 0, ie = we = 1, k;
  }
  var m = /^\0+/g, h = /[\0\r\f]/g, x = /: */g, g = /zoo|gra/, E = /([,: ])(transform)/g, _ = /,\r+?/g, p = /([\t\r\n ])*\f?&/g, c = /@(k\w+)\s*(\S*)\s*/, f = /::(place)/g, S = /:(read-only)/g, P = /[svh]\w+-[tblr]{2}/, T = /\(\s*(.*)\s*\)/g, A = /([\s\S]*?);/g, O = /-self|flex-/g, U = /[^]*?(:[rp][el]a[\w-]+)[^]*/, L = /stretch|:\s*\w+\-(?:conte|avail)/, pe = /([^-])(image-set\()/, ie = 1, we = 1, Ae = 0, se = 1, ot = [], ge = [], $ = 0, I = null, B = 0, w = "";
  return d.use = s, d.set = a, e !== void 0 && a(e), d;
}
var Qv = {
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
function Kv(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Yv = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Kc = /* @__PURE__ */ Kv(
  function(e) {
    return Yv.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), oh = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce = typeof Symbol == "function" && Symbol.for, fa = Ce ? Symbol.for("react.element") : 60103, da = Ce ? Symbol.for("react.portal") : 60106, sl = Ce ? Symbol.for("react.fragment") : 60107, al = Ce ? Symbol.for("react.strict_mode") : 60108, cl = Ce ? Symbol.for("react.profiler") : 60114, fl = Ce ? Symbol.for("react.provider") : 60109, dl = Ce ? Symbol.for("react.context") : 60110, pa = Ce ? Symbol.for("react.async_mode") : 60111, pl = Ce ? Symbol.for("react.concurrent_mode") : 60111, hl = Ce ? Symbol.for("react.forward_ref") : 60112, ml = Ce ? Symbol.for("react.suspense") : 60113, Gv = Ce ? Symbol.for("react.suspense_list") : 60120, yl = Ce ? Symbol.for("react.memo") : 60115, gl = Ce ? Symbol.for("react.lazy") : 60116, Xv = Ce ? Symbol.for("react.block") : 60121, bv = Ce ? Symbol.for("react.fundamental") : 60117, Zv = Ce ? Symbol.for("react.responder") : 60118, Jv = Ce ? Symbol.for("react.scope") : 60119;
function rt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case fa:
        switch (e = e.type, e) {
          case pa:
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
      case da:
        return t;
    }
  }
}
function ih(e) {
  return rt(e) === pl;
}
q.AsyncMode = pa;
q.ConcurrentMode = pl;
q.ContextConsumer = dl;
q.ContextProvider = fl;
q.Element = fa;
q.ForwardRef = hl;
q.Fragment = sl;
q.Lazy = gl;
q.Memo = yl;
q.Portal = da;
q.Profiler = cl;
q.StrictMode = al;
q.Suspense = ml;
q.isAsyncMode = function(e) {
  return ih(e) || rt(e) === pa;
};
q.isConcurrentMode = ih;
q.isContextConsumer = function(e) {
  return rt(e) === dl;
};
q.isContextProvider = function(e) {
  return rt(e) === fl;
};
q.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fa;
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
  return rt(e) === da;
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
  return typeof e == "string" || typeof e == "function" || e === sl || e === pl || e === cl || e === al || e === ml || e === Gv || typeof e == "object" && e !== null && (e.$$typeof === gl || e.$$typeof === yl || e.$$typeof === fl || e.$$typeof === dl || e.$$typeof === hl || e.$$typeof === bv || e.$$typeof === Zv || e.$$typeof === Jv || e.$$typeof === Xv);
};
q.typeOf = rt;
oh.exports = q;
var qv = oh.exports, ha = qv, e0 = {
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
}, t0 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, n0 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, lh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ma = {};
ma[ha.ForwardRef] = n0;
ma[ha.Memo] = lh;
function Yc(e) {
  return ha.isMemo(e) ? lh : ma[e.$$typeof] || e0;
}
var r0 = Object.defineProperty, o0 = Object.getOwnPropertyNames, Gc = Object.getOwnPropertySymbols, i0 = Object.getOwnPropertyDescriptor, l0 = Object.getPrototypeOf, Xc = Object.prototype;
function uh(e, t, n) {
  if (typeof t != "string") {
    if (Xc) {
      var r = l0(t);
      r && r !== Xc && uh(e, r, n);
    }
    var o = o0(t);
    Gc && (o = o.concat(Gc(t)));
    for (var i = Yc(e), l = Yc(t), u = 0; u < o.length; ++u) {
      var s = o[u];
      if (!t0[s] && !(n && n[s]) && !(l && l[s]) && !(i && i[s])) {
        var a = i0(t, s);
        try {
          r0(e, s, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var u0 = uh;
const s0 = /* @__PURE__ */ Ri(u0);
function jt() {
  return (jt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var bc = function(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}, rs = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !rh.typeOf(e);
}, Oi = Object.freeze([]), on = Object.freeze({});
function lo(e) {
  return typeof e == "function";
}
function Zc(e) {
  return e.displayName || e.name || "Component";
}
function ya(e) {
  return e && typeof e.styledComponentId == "string";
}
var sr = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ga = typeof window < "u" && "HTMLElement" in window, a0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY));
function vo(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
}
var c0 = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(n) {
    for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
    return r;
  }, t.insertRules = function(n, r) {
    if (n >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, l = i; n >= l; ) (l <<= 1) < 0 && vo(16, "" + n);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(o), this.length = l;
      for (var u = i; u < l; u++) this.groupSizes[u] = 0;
    }
    for (var s = this.indexOfGroup(n + 1), a = 0, d = r.length; a < d; a++) this.tag.insertRule(s, r[a]) && (this.groupSizes[n]++, s++);
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
}(), Jo = /* @__PURE__ */ new Map(), Ai = /* @__PURE__ */ new Map(), Fr = 1, Fo = function(e) {
  if (Jo.has(e)) return Jo.get(e);
  for (; Ai.has(Fr); ) Fr++;
  var t = Fr++;
  return Jo.set(e, t), Ai.set(t, e), t;
}, f0 = function(e) {
  return Ai.get(e);
}, d0 = function(e, t) {
  t >= Fr && (Fr = t + 1), Jo.set(e, t), Ai.set(t, e);
}, p0 = "style[" + sr + '][data-styled-version="5.3.11"]', h0 = new RegExp("^" + sr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), m0 = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, l = o.length; i < l; i++) (r = o[i]) && e.registerName(t, r);
}, y0 = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = n.length; o < i; o++) {
    var l = n[o].trim();
    if (l) {
      var u = l.match(h0);
      if (u) {
        var s = 0 | parseInt(u[1], 10), a = u[2];
        s !== 0 && (d0(a, s), m0(e, a, u[3]), e.getTag().insertRules(s, r)), r.length = 0;
      } else r.push(l);
    }
  }
}, g0 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, sh = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(u) {
    for (var s = u.childNodes, a = s.length; a >= 0; a--) {
      var d = s[a];
      if (d && d.nodeType === 1 && d.hasAttribute(sr)) return d;
    }
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(sr, "active"), r.setAttribute("data-styled-version", "5.3.11");
  var l = g0();
  return l && r.setAttribute("nonce", l), n.insertBefore(r, i), r;
}, v0 = function() {
  function e(n) {
    var r = this.element = sh(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var i = document.styleSheets, l = 0, u = i.length; l < u; l++) {
        var s = i[l];
        if (s.ownerNode === o) return s;
      }
      vo(17);
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
}(), w0 = function() {
  function e(n) {
    var r = this.element = sh(n);
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
}(), S0 = function() {
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
}(), Jc = ga, k0 = { isServer: !ga, useCSSOMInjection: !a0 }, ah = function() {
  function e(n, r, o) {
    n === void 0 && (n = on), r === void 0 && (r = {}), this.options = jt({}, k0, {}, n), this.gs = r, this.names = new Map(o), this.server = !!n.isServer, !this.server && ga && Jc && (Jc = !1, function(i) {
      for (var l = document.querySelectorAll(p0), u = 0, s = l.length; u < s; u++) {
        var a = l[u];
        a && a.getAttribute(sr) !== "active" && (y0(i, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(n) {
    return Fo(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(jt({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, l = r.target, n = o ? new S0(l) : i ? new v0(l) : new w0(l), new c0(n)));
    var n, r, o, i, l;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (Fo(n), this.names.has(n)) this.names.get(n).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(n, o);
    }
  }, t.insertRules = function(n, r, o) {
    this.registerName(n, r), this.getTag().insertRules(Fo(n), o);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(Fo(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), o = r.length, i = "", l = 0; l < o; l++) {
        var u = f0(l);
        if (u !== void 0) {
          var s = n.names.get(u), a = r.getGroup(l);
          if (s && a && s.size) {
            var d = sr + ".g" + l + '[id="' + u + '"]', m = "";
            s !== void 0 && s.forEach(function(h) {
              h.length > 0 && (m += h + ",");
            }), i += "" + a + d + '{content:"' + m + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), x0 = /(a)(d)/gi, qc = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function os(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = qc(t % 52) + n;
  return (qc(t % 52) + n).replace(x0, "$1-$2");
}
var Yn = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, ch = function(e) {
  return Yn(5381, e);
};
function E0(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (lo(n) && !ya(n)) return !1;
  }
  return !0;
}
var C0 = ch("5.3.11"), _0 = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && E0(t), this.componentId = n, this.baseHash = Yn(C0, n), this.baseStyle = r, ah.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var l = ar(this.rules, t, n, r).join(""), u = os(Yn(this.baseHash, l) >>> 0);
      if (!n.hasNameForId(o, u)) {
        var s = r(l, "." + u, void 0, o);
        n.insertRules(o, u, s);
      }
      i.push(u), this.staticRulesId = u;
    }
    else {
      for (var a = this.rules.length, d = Yn(this.baseHash, r.hash), m = "", h = 0; h < a; h++) {
        var x = this.rules[h];
        if (typeof x == "string") m += x;
        else if (x) {
          var g = ar(x, t, n, r), E = Array.isArray(g) ? g.join("") : g;
          d = Yn(d, E + h), m += E;
        }
      }
      if (m) {
        var _ = os(d >>> 0);
        if (!n.hasNameForId(o, _)) {
          var p = r(m, "." + _, void 0, o);
          n.insertRules(o, _, p);
        }
        i.push(_);
      }
    }
    return i.join(" ");
  }, e;
}(), P0 = /^\s*\/\/.*$/gm, N0 = [":", "[", ".", "#"];
function T0(e) {
  var t, n, r, o, i = on, l = i.options, u = l === void 0 ? on : l, s = i.plugins, a = s === void 0 ? Oi : s, d = new Vv(u), m = [], h = /* @__PURE__ */ function(E) {
    function _(p) {
      if (p) try {
        E(p + "}");
      } catch {
      }
    }
    return function(p, c, f, S, P, T, A, O, U, L) {
      switch (p) {
        case 1:
          if (U === 0 && c.charCodeAt(0) === 64) return E(c + ";"), "";
          break;
        case 2:
          if (O === 0) return c + "/*|*/";
          break;
        case 3:
          switch (O) {
            case 102:
            case 112:
              return E(f[0] + c), "";
            default:
              return c + (L === 0 ? "/*|*/" : "");
          }
        case -2:
          c.split("/*|*/}").forEach(_);
      }
    };
  }(function(E) {
    m.push(E);
  }), x = function(E, _, p) {
    return _ === 0 && N0.indexOf(p[n.length]) !== -1 || p.match(o) ? E : "." + t;
  };
  function g(E, _, p, c) {
    c === void 0 && (c = "&");
    var f = E.replace(P0, ""), S = _ && p ? p + " " + _ + " { " + f + " }" : f;
    return t = c, n = _, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), d(p || !_ ? "" : _, S);
  }
  return d.use([].concat(a, [function(E, _, p) {
    E === 2 && p.length && p[0].lastIndexOf(n) > 0 && (p[0] = p[0].replace(r, x));
  }, h, function(E) {
    if (E === -2) {
      var _ = m;
      return m = [], _;
    }
  }])), g.hash = a.length ? a.reduce(function(E, _) {
    return _.name || vo(15), Yn(E, _.name);
  }, 5381).toString() : "", g;
}
var fh = ln.createContext();
fh.Consumer;
var dh = ln.createContext(), O0 = (dh.Consumer, new ah()), is = T0();
function A0() {
  return We.useContext(fh) || O0;
}
function R0() {
  return We.useContext(dh) || is;
}
var ph = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = is);
      var l = r.name + i.hash;
      o.hasNameForId(r.id, l) || o.insertRules(r.id, l, i(r.rules, l, "@keyframes"));
    }, this.toString = function() {
      return vo(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = is), this.name + t.hash;
  }, e;
}(), z0 = /([A-Z])/, $0 = /([A-Z])/g, j0 = /^ms-/, D0 = function(e) {
  return "-" + e.toLowerCase();
};
function ef(e) {
  return z0.test(e) ? e.replace($0, D0).replace(j0, "-ms-") : e;
}
var tf = function(e) {
  return e == null || e === !1 || e === "";
};
function ar(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], l = 0, u = e.length; l < u; l += 1) (o = ar(e[l], t, n, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (tf(e)) return "";
  if (ya(e)) return "." + e.styledComponentId;
  if (lo(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !t) return e;
    var s = e(t);
    return ar(s, t, n, r);
  }
  var a;
  return e instanceof ph ? n ? (e.inject(n, r), e.getName(r)) : e : rs(e) ? function d(m, h) {
    var x, g, E = [];
    for (var _ in m) m.hasOwnProperty(_) && !tf(m[_]) && (Array.isArray(m[_]) && m[_].isCss || lo(m[_]) ? E.push(ef(_) + ":", m[_], ";") : rs(m[_]) ? E.push.apply(E, d(m[_], _)) : E.push(ef(_) + ": " + (x = _, (g = m[_]) == null || typeof g == "boolean" || g === "" ? "" : typeof g != "number" || g === 0 || x in Qv || x.startsWith("--") ? String(g).trim() : g + "px") + ";"));
    return h ? [h + " {"].concat(E, ["}"]) : E;
  }(e) : e.toString();
}
var nf = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function hh(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return lo(e) || rs(e) ? nf(ar(bc(Oi, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : nf(ar(bc(e, n)));
}
var M0 = function(e, t, n) {
  return n === void 0 && (n = on), e.theme !== n.theme && e.theme || t || n.theme;
}, L0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, F0 = /(^-|-$)/g;
function Jl(e) {
  return e.replace(L0, "-").replace(F0, "");
}
var mh = function(e) {
  return os(ch(e) >>> 0);
};
function Io(e) {
  return typeof e == "string" && !0;
}
var ls = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, I0 = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function B0(e, t, n) {
  var r = e[n];
  ls(t) && ls(r) ? yh(r, t) : e[n] = t;
}
function yh(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var l = i[o];
    if (ls(l)) for (var u in l) I0(u) && B0(e, l[u], u);
  }
  return e;
}
var gh = ln.createContext();
gh.Consumer;
var ql = {};
function vh(e, t, n) {
  var r = ya(e), o = !Io(e), i = t.attrs, l = i === void 0 ? Oi : i, u = t.componentId, s = u === void 0 ? function(c, f) {
    var S = typeof c != "string" ? "sc" : Jl(c);
    ql[S] = (ql[S] || 0) + 1;
    var P = S + "-" + mh("5.3.11" + S + ql[S]);
    return f ? f + "-" + P : P;
  }(t.displayName, t.parentComponentId) : u, a = t.displayName, d = a === void 0 ? function(c) {
    return Io(c) ? "styled." + c : "Styled(" + Zc(c) + ")";
  }(e) : a, m = t.displayName && t.componentId ? Jl(t.displayName) + "-" + t.componentId : t.componentId || s, h = r && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, x = t.shouldForwardProp;
  r && e.shouldForwardProp && (x = t.shouldForwardProp ? function(c, f, S) {
    return e.shouldForwardProp(c, f, S) && t.shouldForwardProp(c, f, S);
  } : e.shouldForwardProp);
  var g, E = new _0(n, m, r ? e.componentStyle : void 0), _ = E.isStatic && l.length === 0, p = function(c, f) {
    return function(S, P, T, A) {
      var O = S.attrs, U = S.componentStyle, L = S.defaultProps, pe = S.foldedComponentIds, ie = S.shouldForwardProp, we = S.styledComponentId, Ae = S.target, se = function(R, k, j) {
        R === void 0 && (R = on);
        var N = jt({}, k, { theme: R }), G = {};
        return j.forEach(function(V) {
          var W, M, b, Q = V;
          for (W in lo(Q) && (Q = Q(N)), Q) N[W] = G[W] = W === "className" ? (M = G[W], b = Q[W], M && b ? M + " " + b : M || b) : Q[W];
        }), [N, G];
      }(M0(P, We.useContext(gh), L) || on, P, O), ot = se[0], ge = se[1], $ = function(R, k, j, N) {
        var G = A0(), V = R0(), W = k ? R.generateAndInjectStyles(on, G, V) : R.generateAndInjectStyles(j, G, V);
        return W;
      }(U, A, ot), I = T, B = ge.$as || P.$as || ge.as || P.as || Ae, w = Io(B), v = ge !== P ? jt({}, P, {}, ge) : P, y = {};
      for (var C in v) C[0] !== "$" && C !== "as" && (C === "forwardedAs" ? y.as = v[C] : (ie ? ie(C, Kc, B) : !w || Kc(C)) && (y[C] = v[C]));
      return P.style && ge.style !== P.style && (y.style = jt({}, P.style, {}, ge.style)), y.className = Array.prototype.concat(pe, we, $ !== we ? $ : null, P.className, ge.className).filter(Boolean).join(" "), y.ref = I, We.createElement(B, y);
    }(g, c, f, _);
  };
  return p.displayName = d, (g = ln.forwardRef(p)).attrs = h, g.componentStyle = E, g.displayName = d, g.shouldForwardProp = x, g.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Oi, g.styledComponentId = m, g.target = r ? e.target : e, g.withComponent = function(c) {
    var f = t.componentId, S = function(T, A) {
      if (T == null) return {};
      var O, U, L = {}, pe = Object.keys(T);
      for (U = 0; U < pe.length; U++) O = pe[U], A.indexOf(O) >= 0 || (L[O] = T[O]);
      return L;
    }(t, ["componentId"]), P = f && f + "-" + (Io(c) ? c : Jl(Zc(c)));
    return vh(c, jt({}, S, { attrs: h, componentId: P }), n);
  }, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(c) {
    this._foldedDefaultProps = r ? yh({}, e.defaultProps, c) : c;
  } }), Object.defineProperty(g, "toString", { value: function() {
    return "." + g.styledComponentId;
  } }), o && s0(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), g;
}
var cn = function(e) {
  return function t(n, r, o) {
    if (o === void 0 && (o = on), !rh.isValidElementType(r)) return vo(1, String(r));
    var i = function() {
      return n(r, o, hh.apply(void 0, arguments));
    };
    return i.withConfig = function(l) {
      return t(n, r, jt({}, o, {}, l));
    }, i.attrs = function(l) {
      return t(n, r, jt({}, o, { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
    }, i;
  }(vh, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  cn[e] = cn(e);
});
function C1(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var o = hh.apply(void 0, [e].concat(n)).join(""), i = mh(o);
  return new ph(i, o);
}
const U0 = We.createContext(null), eu = {
  didCatch: !1,
  error: null
};
class H0 extends We.Component {
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
    if (r && n.error !== null && W0(t.resetKeys, o)) {
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
        u = We.createElement(r, s);
      else if (o === null || We.isValidElement(o))
        u = o;
      else
        throw l;
    }
    return We.createElement(U0.Provider, {
      value: {
        didCatch: i,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, u);
  }
}
function W0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((n, r) => !Object.is(n, t[r]));
}
const V0 = [
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
], er = {
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
function Q0() {
  const e = Lv((t) => t.theme);
  return /* @__PURE__ */ me.jsxs("style", { children: [
    Y0(e.theme),
    K0()
  ] });
}
function K0() {
  return `
  body {
    padding: 0;
    margin: 0;
    background-color: var(--xliic-background);
    color: var(--xliic-foreground);
    }`;
}
function Y0(e) {
  const t = [];
  if (e !== void 0)
    for (const n of V0)
      e[n] && t.push(`${er[n]}: ${e[n]};`);
  return `:root {
    ${t.join(`
`)}
  }`;
}
const wh = ln.createContext([
  {
    id: "starting",
    title: "Starting",
    element: ln.createElement("div", {}, "Empty starting route")
  }
]);
function Sh(e, t) {
  if (t.length === 0)
    return;
  const [n, ...r] = t;
  for (const o of e)
    if (o.id === n)
      return r.length === 0 ? o : o.children ? Sh(o.children, r) : void 0;
}
function G0() {
  return /* @__PURE__ */ me.jsx(wh.Consumer, { children: (e) => /* @__PURE__ */ me.jsx(X0, { routes: e }) });
}
function X0({ routes: e }) {
  const t = eh((r) => r.router.current), n = Sh(e, t);
  return !n || n.link ? /* @__PURE__ */ me.jsx("div", {}) : n.element;
}
function b0() {
  return /* @__PURE__ */ me.jsx(wh.Consumer, { children: (e) => /* @__PURE__ */ me.jsx(Z0, { routes: e }) });
}
function Z0({ routes: e }) {
  var u;
  const t = Uv(), r = eh((s) => s.router.current).slice(0, 2), o = r.slice(0, 1), i = r.length > 1 ? (u = e.find((s) => s.id === r[0])) == null ? void 0 : u.children : e, l = i == null ? void 0 : i.find((s) => s.id === r[r.length - 1]);
  return i ? (l == null ? void 0 : l.navigation) === !1 ? l.title !== "" ? /* @__PURE__ */ me.jsx(q0, { children: /* @__PURE__ */ me.jsx(t1, { children: l.title }) }) : null : /* @__PURE__ */ me.jsx(J0, { children: i.map(({ id: s, title: a, link: d }) => /* @__PURE__ */ me.jsx(
    e1,
    {
      active: s === r[r.length - 1],
      onClick: () => {
        t(d ? Bv(d) : Iv([...o, s]));
      },
      children: typeof a == "string" ? /* @__PURE__ */ me.jsx("div", { children: a }) : a
    },
    s
  )) }) : null;
}
const J0 = cn.nav`
  height: 28px;
  display: flex;
  padding: 0px 16px;
  padding-top: 6px;
  justify-content: space-between;
  font-size: 14px;
  border-bottom: 1px solid var(${er.border});
`, q0 = cn.div`
  height: 35px;
  display: flex;
  padding: 0px 16px;
  border-bottom: 1px solid var(${er.border});
`, e1 = cn.div`
  padding: 0 1em;
  display: flex;
  align-items: center;
  ${(e) => e.active ? `border-bottom: 3px solid var(${er.buttonBackground});` : "opacity: 0.7; border-bottom: 3px solid transparent; cursor: pointer;"};
  > div {
    border: ${(e) => e.active && er.contrastActiveBorder ? `1px solid var(${er.contrastActiveBorder})` : "none"};
  }
`, t1 = cn.div`
  place-self: center;
  font-size: 16px;
  font-weight: 500;
  display: flex;
`;
function _1(e, t) {
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
function P1(e) {
  const t = Object.keys(e);
  for (const n of t)
    e[n] ? (console.log("starting listener for: ", n), e[n]()) : console.log("skipping listener for: ", n);
}
function n1({ error: e }) {
  return /* @__PURE__ */ me.jsxs("div", { children: [
    /* @__PURE__ */ me.jsx("p", { children: "Unexpected error:" }),
    /* @__PURE__ */ me.jsx("pre", { children: e.message })
  ] });
}
function N1() {
  return /* @__PURE__ */ me.jsxs(H0, { FallbackComponent: n1, children: [
    /* @__PURE__ */ me.jsx(Q0, {}),
    /* @__PURE__ */ me.jsx(r1, { children: /* @__PURE__ */ me.jsx(b0, {}) }),
    /* @__PURE__ */ me.jsx(o1, { children: /* @__PURE__ */ me.jsx(G0, {}) })
  ] });
}
const r1 = cn.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 35px;
`, o1 = cn.div`
  position: fixed;
  top: 35px;
  left: 0;
  right: 0;
  bottom: 0;
`, T1 = (e) => /* @__PURE__ */ me.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ me.jsx("path", { d: "M506.3 417 293 53c-8.2-14-22.6-21-37-21-14.4 0-28.8 7-37.9 21L4.9 417c-15.49 27.9 4.951 63 37.84 63h426.6c32.76 0 53.26-35 36.96-63zM52.58 432 255.1 84.8 459.4 432H52.58zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44s14.11 31.44 31.48 31.44 31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1zM232 184v96c0 13.3 10.8 24 24 24s24-10.75 24-24v-96c0-13.2-10.7-24-24-24s-24 10.8-24 24z" }) });
export {
  yp as $,
  Mp as A,
  m1 as B,
  sv as C,
  av as D,
  h1 as E,
  Pg as F,
  na as G,
  Nt as H,
  p1 as I,
  Hc as J,
  uv as K,
  qu as L,
  zp as M,
  Pt as N,
  f1 as O,
  a1 as P,
  _p as Q,
  ln as R,
  T1 as S,
  er as T,
  cv as U,
  c1 as V,
  C1 as W,
  Sg as X,
  s1 as Y,
  Ri as Z,
  hr as _,
  y1 as a,
  Iv as a0,
  l1 as a1,
  Bv as a2,
  N1 as a3,
  ka as a4,
  u1 as a5,
  kp as b,
  Up as c,
  v1 as d,
  We as e,
  eg as f,
  wh as g,
  Q0 as h,
  yo as i,
  me as j,
  G0 as k,
  w1 as l,
  _1 as m,
  S1 as n,
  Ip as o,
  Fe as p,
  cn as q,
  E1 as r,
  P1 as s,
  k1 as t,
  xg as u,
  d1 as v,
  la as w,
  Qg as x,
  Mt as y,
  g1 as z
};
