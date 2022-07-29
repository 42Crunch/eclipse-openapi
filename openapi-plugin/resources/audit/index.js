var react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i2 = 0; i2 < 10; i2++) {
      test2["_" + String.fromCharCode(i2)] = i2;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s2 = 1; s2 < arguments.length; s2++) {
    from = Object(arguments[s2]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i2 = 0; i2 < symbols.length; i2++) {
        if (propIsEnumerable.call(from, symbols[i2])) {
          to[symbols[i2]] = from[symbols[i2]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$3 = objectAssign, n$4 = 60103, p$4 = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q$4 = 60109, r$4 = 60110, t$2 = 60112;
react_production_min.Suspense = 60113;
var u$2 = 60115, v$3 = 60116;
if ("function" === typeof Symbol && Symbol.for) {
  var w$3 = Symbol.for;
  n$4 = w$3("react.element");
  p$4 = w$3("react.portal");
  react_production_min.Fragment = w$3("react.fragment");
  react_production_min.StrictMode = w$3("react.strict_mode");
  react_production_min.Profiler = w$3("react.profiler");
  q$4 = w$3("react.provider");
  r$4 = w$3("react.context");
  t$2 = w$3("react.forward_ref");
  react_production_min.Suspense = w$3("react.suspense");
  u$2 = w$3("react.memo");
  v$3 = w$3("react.lazy");
}
var x$3 = "function" === typeof Symbol && Symbol.iterator;
function y$4(a2) {
  if (null === a2 || "object" !== typeof a2)
    return null;
  a2 = x$3 && a2[x$3] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
function z$3(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A$3 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B$3 = {};
function C$1(a2, b2, c2) {
  this.props = a2;
  this.context = b2;
  this.refs = B$3;
  this.updater = c2 || A$3;
}
C$1.prototype.isReactComponent = {};
C$1.prototype.setState = function(a2, b2) {
  if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2)
    throw Error(z$3(85));
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
C$1.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function D$3() {
}
D$3.prototype = C$1.prototype;
function E$3(a2, b2, c2) {
  this.props = a2;
  this.context = b2;
  this.refs = B$3;
  this.updater = c2 || A$3;
}
var F$3 = E$3.prototype = new D$3();
F$3.constructor = E$3;
l$3(F$3, C$1.prototype);
F$3.isPureReactComponent = true;
var G$3 = { current: null }, H$3 = Object.prototype.hasOwnProperty, I$3 = { key: true, ref: true, __self: true, __source: true };
function J(a2, b2, c2) {
  var e2, d2 = {}, k2 = null, h2 = null;
  if (null != b2)
    for (e2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
      H$3.call(b2, e2) && !I$3.hasOwnProperty(e2) && (d2[e2] = b2[e2]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    d2.children = c2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    d2.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (e2 in g2 = a2.defaultProps, g2)
      void 0 === d2[e2] && (d2[e2] = g2[e2]);
  return { $$typeof: n$4, type: a2, key: k2, ref: h2, props: d2, _owner: G$3.current };
}
function K(a2, b2) {
  return { $$typeof: n$4, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function L$1(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === n$4;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var M$2 = /\/+/g;
function N$2(a2, b2) {
  return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
}
function O$2(a2, b2, c2, e2, d2) {
  var k2 = typeof a2;
  if ("undefined" === k2 || "boolean" === k2)
    a2 = null;
  var h2 = false;
  if (null === a2)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case n$4:
          case p$4:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, d2 = d2(h2), a2 = "" === e2 ? "." + N$2(h2, 0) : e2, Array.isArray(d2) ? (c2 = "", null != a2 && (c2 = a2.replace(M$2, "$&/") + "/"), O$2(d2, b2, c2, "", function(a3) {
      return a3;
    })) : null != d2 && (L$1(d2) && (d2 = K(d2, c2 + (!d2.key || h2 && h2.key === d2.key ? "" : ("" + d2.key).replace(M$2, "$&/") + "/") + a2)), b2.push(d2)), 1;
  h2 = 0;
  e2 = "" === e2 ? "." : e2 + ":";
  if (Array.isArray(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = e2 + N$2(k2, g2);
      h2 += O$2(k2, b2, c2, f2, d2);
    }
  else if (f2 = y$4(a2), "function" === typeof f2)
    for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
      k2 = k2.value, f2 = e2 + N$2(k2, g2++), h2 += O$2(k2, b2, c2, f2, d2);
  else if ("object" === k2)
    throw b2 = "" + a2, Error(z$3(31, "[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2));
  return h2;
}
function P$2(a2, b2, c2) {
  if (null == a2)
    return a2;
  var e2 = [], d2 = 0;
  O$2(a2, e2, "", "", function(a3) {
    return b2.call(c2, a3, d2++);
  });
  return e2;
}
function Q$1(a2) {
  if (-1 === a2._status) {
    var b2 = a2._result;
    b2 = b2();
    a2._status = 0;
    a2._result = b2;
    b2.then(function(b3) {
      0 === a2._status && (b3 = b3.default, a2._status = 1, a2._result = b3);
    }, function(b3) {
      0 === a2._status && (a2._status = 2, a2._result = b3);
    });
  }
  if (1 === a2._status)
    return a2._result;
  throw a2._result;
}
var R$2 = { current: null };
function S$2() {
  var a2 = R$2.current;
  if (null === a2)
    throw Error(z$3(321));
  return a2;
}
var T$1 = { ReactCurrentDispatcher: R$2, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G$3, IsSomeRendererActing: { current: false }, assign: l$3 };
react_production_min.Children = { map: P$2, forEach: function(a2, b2, c2) {
  P$2(a2, function() {
    b2.apply(this, arguments);
  }, c2);
}, count: function(a2) {
  var b2 = 0;
  P$2(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return P$2(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!L$1(a2))
    throw Error(z$3(143));
  return a2;
} };
react_production_min.Component = C$1;
react_production_min.PureComponent = E$3;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
react_production_min.cloneElement = function(a2, b2, c2) {
  if (null === a2 || void 0 === a2)
    throw Error(z$3(267, a2));
  var e2 = l$3({}, a2.props), d2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = G$3.current);
    void 0 !== b2.key && (d2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g2 = a2.type.defaultProps;
    for (f2 in b2)
      H$3.call(b2, f2) && !I$3.hasOwnProperty(f2) && (e2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    e2.children = c2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    e2.children = g2;
  }
  return {
    $$typeof: n$4,
    type: a2.type,
    key: d2,
    ref: k2,
    props: e2,
    _owner: h2
  };
};
react_production_min.createContext = function(a2, b2) {
  void 0 === b2 && (b2 = null);
  a2 = { $$typeof: r$4, _calculateChangedBits: b2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null };
  a2.Provider = { $$typeof: q$4, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a2) {
  var b2 = J.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: t$2, render: a2 };
};
react_production_min.isValidElement = L$1;
react_production_min.lazy = function(a2) {
  return { $$typeof: v$3, _payload: { _status: -1, _result: a2 }, _init: Q$1 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: u$2, type: a2, compare: void 0 === b2 ? null : b2 };
};
react_production_min.useCallback = function(a2, b2) {
  return S$2().useCallback(a2, b2);
};
react_production_min.useContext = function(a2, b2) {
  return S$2().useContext(a2, b2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a2, b2) {
  return S$2().useEffect(a2, b2);
};
react_production_min.useImperativeHandle = function(a2, b2, c2) {
  return S$2().useImperativeHandle(a2, b2, c2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return S$2().useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return S$2().useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, c2) {
  return S$2().useReducer(a2, b2, c2);
};
react_production_min.useRef = function(a2) {
  return S$2().useRef(a2);
};
react_production_min.useState = function(a2) {
  return S$2().useState(a2);
};
react_production_min.version = "17.0.2";
{
  react.exports = react_production_min;
}
var React = react.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f2, g2, h2, k2;
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
    var t2 = null, u2 = null, w2 = function() {
      if (null !== t2)
        try {
          var a2 = exports.unstable_now();
          t2(true, a2);
          t2 = null;
        } catch (b2) {
          throw setTimeout(w2, 0), b2;
        }
    };
    f2 = function(a2) {
      null !== t2 ? setTimeout(f2, 0, a2) : (t2 = a2, setTimeout(w2, 0));
    };
    g2 = function(a2, b2) {
      u2 = setTimeout(a2, b2);
    };
    h2 = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k2 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x2 = window.setTimeout, y2 = window.clearTimeout;
    if ("undefined" !== typeof console) {
      var z2 = window.cancelAnimationFrame;
      "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      "function" !== typeof z2 && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B2 = null, C2 = -1, D2 = 5, E2 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E2;
    };
    k2 = function() {
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (null !== B2) {
        var a2 = exports.unstable_now();
        E2 = a2 + D2;
        try {
          B2(true, a2) ? G2.postMessage(null) : (A2 = false, B2 = null);
        } catch (b2) {
          throw G2.postMessage(null), b2;
        }
      } else
        A2 = false;
    };
    f2 = function(a2) {
      B2 = a2;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g2 = function(a2, b2) {
      C2 = x2(function() {
        a2(exports.unstable_now());
      }, b2);
    };
    h2 = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; ; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (void 0 !== e2 && 0 < I2(e2, b2))
          a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function J2(a2) {
    a2 = a2[0];
    return void 0 === a2 ? null : a2;
  }
  function K2(a2) {
    var b2 = a2[0];
    if (void 0 !== b2) {
      var c2 = a2.pop();
      if (c2 !== b2) {
        a2[0] = c2;
        a:
          for (var d2 = 0, e2 = a2.length; d2 < e2; ) {
            var m2 = 2 * (d2 + 1) - 1, n2 = a2[m2], v2 = m2 + 1, r2 = a2[v2];
            if (void 0 !== n2 && 0 > I2(n2, c2))
              void 0 !== r2 && 0 > I2(r2, n2) ? (a2[d2] = r2, a2[v2] = c2, d2 = v2) : (a2[d2] = n2, a2[m2] = c2, d2 = m2);
            else if (void 0 !== r2 && 0 > I2(r2, c2))
              a2[d2] = r2, a2[v2] = c2, d2 = v2;
            else
              break a;
          }
      }
      return b2;
    }
    return null;
  }
  function I2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a2.id - b2.id;
  }
  var L2 = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q2 = false, R2 = false, S2 = false;
  function T2(a2) {
    for (var b2 = J2(M2); null !== b2; ) {
      if (null === b2.callback)
        K2(M2);
      else if (b2.startTime <= a2)
        K2(M2), b2.sortIndex = b2.expirationTime, H2(L2, b2);
      else
        break;
      b2 = J2(M2);
    }
  }
  function U2(a2) {
    S2 = false;
    T2(a2);
    if (!R2)
      if (null !== J2(L2))
        R2 = true, f2(V2);
      else {
        var b2 = J2(M2);
        null !== b2 && g2(U2, b2.startTime - a2);
      }
  }
  function V2(a2, b2) {
    R2 = false;
    S2 && (S2 = false, h2());
    Q2 = true;
    var c2 = P2;
    try {
      T2(b2);
      for (O2 = J2(L2); null !== O2 && (!(O2.expirationTime > b2) || a2 && !exports.unstable_shouldYield()); ) {
        var d2 = O2.callback;
        if ("function" === typeof d2) {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e2 = d2(O2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? O2.callback = e2 : O2 === J2(L2) && K2(L2);
          T2(b2);
        } else
          K2(L2);
        O2 = J2(L2);
      }
      if (null !== O2)
        var m2 = true;
      else {
        var n2 = J2(M2);
        null !== n2 && g2(U2, n2.startTime - b2);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c2, Q2 = false;
    }
  }
  var W2 = k2;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q2 || (R2 = true, f2(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports.unstable_next = function(a2) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = P2;
    }
    var c2 = P2;
    P2 = b2;
    try {
      return a2();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = P2;
    P2 = a2;
    try {
      return b2();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: N2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, H2(M2, a2), null === J2(L2) && a2 === J2(M2) && (S2 ? h2() : S2 = true, g2(U2, c2 - d2))) : (a2.sortIndex = e2, H2(L2, a2), R2 || Q2 || (R2 = true, f2(V2)));
    return a2;
  };
  exports.unstable_wrapCallback = function(a2) {
    var b2 = P2;
    return function() {
      var c2 = P2;
      P2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        P2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, m$4 = objectAssign, r$3 = scheduler.exports;
function y$3(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y$3(227));
var ba = /* @__PURE__ */ new Set(), ca = {};
function da(a2, b2) {
  ea(a2, b2);
  ea(a2 + "Capture", b2);
}
function ea(a2, b2) {
  ca[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    ba.add(b2[a2]);
}
var fa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
function la(a2) {
  if (ia.call(ka, a2))
    return true;
  if (ia.call(ja, a2))
    return false;
  if (ha.test(a2))
    return ka[a2] = true;
  ja[a2] = true;
  return false;
}
function ma(a2, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (null !== c2)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return "data-" !== a2 && "aria-" !== a2;
    default:
      return false;
  }
}
function na(a2, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || ma(a2, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (null !== c2)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function B$2(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var D$2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  D$2[a2] = new B$2(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  D$2[b2] = new B$2(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  D$2[a2] = new B$2(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  D$2[a2] = new B$2(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  D$2[a2] = new B$2(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  D$2[a2] = new B$2(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  D$2[a2] = new B$2(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  D$2[a2] = new B$2(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  D$2[a2] = new B$2(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(
    oa,
    pa
  );
  D$2[b2] = new B$2(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D$2[b2] = new B$2(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D$2[b2] = new B$2(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  D$2[a2] = new B$2(a2, 1, false, a2.toLowerCase(), null, false, false);
});
D$2.xlinkHref = new B$2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  D$2[a2] = new B$2(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function qa(a2, b2, c2, d2) {
  var e2 = D$2.hasOwnProperty(b2) ? D$2[b2] : null;
  var f2 = null !== e2 ? 0 === e2.type : d2 ? false : !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1] ? false : true;
  f2 || (na(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? la(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if ("function" === typeof Symbol && Symbol.for) {
  var E$2 = Symbol.for;
  sa = E$2("react.element");
  ta = E$2("react.portal");
  ua = E$2("react.fragment");
  wa = E$2("react.strict_mode");
  xa = E$2("react.profiler");
  ya = E$2("react.provider");
  za = E$2("react.context");
  Aa = E$2("react.forward_ref");
  Ba = E$2("react.suspense");
  Ca = E$2("react.suspense_list");
  Da = E$2("react.memo");
  Ea = E$2("react.lazy");
  Fa = E$2("react.block");
  E$2("react.scope");
  Ga = E$2("react.opaque.id");
  Ha = E$2("react.debug_trace_mode");
  Ia = E$2("react.offscreen");
  Ja = E$2("react.legacy_hidden");
}
var Ka = "function" === typeof Symbol && Symbol.iterator;
function La(a2) {
  if (null === a2 || "object" !== typeof a2)
    return null;
  a2 = Ka && a2[Ka] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var Ma;
function Na(a2) {
  if (void 0 === Ma)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ma = b2 && b2[1] || "";
    }
  return "\n" + Ma + a2;
}
var Oa = false;
function Pa(a2, b2) {
  if (!a2 || Oa)
    return "";
  Oa = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (k2) {
          var d2 = k2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (k2) {
          d2 = k2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k2) {
        d2 = k2;
      }
      a2();
    }
  } catch (k2) {
    if (k2 && d2 && "string" === typeof k2.stack) {
      for (var e2 = k2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2])
                return "\n" + e2[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Na(a2) : "";
}
function Qa(a2) {
  switch (a2.tag) {
    case 5:
      return Na(a2.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Pa(a2.type, false), a2;
    case 11:
      return a2 = Pa(a2.type.render, false), a2;
    case 22:
      return a2 = Pa(a2.type._render, false), a2;
    case 1:
      return a2 = Pa(a2.type, true), a2;
    default:
      return "";
  }
}
function Ra(a2) {
  if (null == a2)
    return null;
  if ("function" === typeof a2)
    return a2.displayName || a2.name || null;
  if ("string" === typeof a2)
    return a2;
  switch (a2) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if ("object" === typeof a2)
    switch (a2.$$typeof) {
      case za:
        return (a2.displayName || "Context") + ".Consumer";
      case ya:
        return (a2._context.displayName || "Context") + ".Provider";
      case Aa:
        var b2 = a2.render;
        b2 = b2.displayName || b2.name || "";
        return a2.displayName || ("" !== b2 ? "ForwardRef(" + b2 + ")" : "ForwardRef");
      case Da:
        return Ra(a2.type);
      case Fa:
        return Ra(a2._render);
      case Ea:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Ra(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a2)
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c2 = b2.checked;
  return m$4({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
}
function Za(a2, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function $a(a2, b2) {
  b2 = b2.checked;
  null != b2 && qa(a2, "checked", b2, false);
}
function ab(a2, b2) {
  $a(a2, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2)
    if ("number" === d2) {
      if (0 === c2 && "" === a2.value || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
}
function cb(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  "" !== c2 && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  "" !== c2 && (a2.name = c2);
}
function bb(a2, b2, c2) {
  if ("number" !== b2 || Xa(a2.ownerDocument) !== a2)
    null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
function db(a2) {
  var b2 = "";
  aa.Children.forEach(a2, function(a3) {
    null != a3 && (b2 += a3);
  });
  return b2;
}
function eb(a2, b2) {
  a2 = m$4({ children: void 0 }, b2);
  if (b2 = db(b2.children))
    a2.children = b2;
  return a2;
}
function fb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (null != b2.dangerouslySetInnerHTML)
    throw Error(y$3(91));
  return m$4({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2)
        throw Error(y$3(92));
      if (Array.isArray(c2)) {
        if (!(1 >= c2.length))
          throw Error(y$3(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa(c2) };
}
function ib(a2, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  null != d2 && (a2.defaultValue = "" + d2);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a2, b2) {
  return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? lb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
}
var nb, ob = function(a2) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if (a2.namespaceURI !== kb.svg || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = nb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function pb(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a2) {
  rb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    qb[b2] = qb[a2];
  });
});
function sb(a2, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || qb.hasOwnProperty(a2) && qb[a2] ? ("" + b2).trim() : b2 + "px";
}
function tb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = sb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
}
var ub = m$4({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a2, b2) {
  if (b2) {
    if (ub[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
      throw Error(y$3(137, a2));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children)
        throw Error(y$3(60));
      if (!("object" === typeof b2.dangerouslySetInnerHTML && "__html" in b2.dangerouslySetInnerHTML))
        throw Error(y$3(61));
    }
    if (null != b2.style && "object" !== typeof b2.style)
      throw Error(y$3(62));
  }
}
function wb(a2, b2) {
  if (-1 === a2.indexOf("-"))
    return "string" === typeof b2.is;
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return 3 === a2.nodeType ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if ("function" !== typeof yb)
      throw Error(y$3(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb(a2, b2, c2, d2, e2) {
  return a2(b2, c2, d2, e2);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (null !== zb || null !== Ab)
    Ib(), Fb();
}
function Nb(a2, b2, c2) {
  if (Lb)
    return a2(b2, c2);
  Lb = true;
  try {
    return Jb(a2, b2, c2);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a2, b2) {
  var c2 = a2.stateNode;
  if (null === c2)
    return null;
  var d2 = Db(c2);
  if (null === d2)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
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
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && "function" !== typeof c2)
    throw Error(y$3(231, b2, typeof c2));
  return c2;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a2) {
    Pb = false;
  }
function Rb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a2) {
  Sb = true;
  Tb = a2;
} };
function Xb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y$3(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, 0 !== (b2.flags & 1026) && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return 3 === b2.tag ? c2 : null;
}
function $b(a2) {
  if (13 === a2.tag) {
    var b2 = a2.memoizedState;
    null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
    if (null !== b2)
      return b2.dehydrated;
  }
  return null;
}
function ac(a2) {
  if (Zb(a2) !== a2)
    throw Error(y$3(188));
}
function bc(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Zb(a2);
    if (null === b2)
      throw Error(y$3(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return ac(e2), a2;
        if (f2 === d2)
          return ac(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(y$3(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(y$3(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(y$3(190));
  }
  if (3 !== c2.tag)
    throw Error(y$3(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function cc(a2) {
  a2 = bc(a2);
  if (!a2)
    return null;
  for (var b2 = a2; ; ) {
    if (5 === b2.tag || 6 === b2.tag)
      return b2;
    if (b2.child)
      b2.child.return = b2, b2 = b2.child;
    else {
      if (b2 === a2)
        break;
      for (; !b2.sibling; ) {
        if (!b2.return || b2.return === a2)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return null;
}
function dc(a2, b2) {
  for (var c2 = a2.alternate; null !== b2; ) {
    if (b2 === a2 || b2 === c2)
      return true;
    b2 = b2.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = /* @__PURE__ */ new Map(), oc = /* @__PURE__ */ new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a2, b2, c2, d2, e2) {
  return { blockedOn: a2, domEventName: b2, eventSystemFlags: c2 | 16, nativeEvent: e2, targetContainers: [d2] };
}
function sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b2.pointerId);
  }
}
function tc(a2, b2, c2, d2, e2, f2) {
  if (null === a2 || a2.nativeEvent !== f2)
    return a2 = rc(b2, c2, d2, e2, f2), null !== b2 && (b2 = Cb(b2), null !== b2 && fc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a2;
}
function uc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return kc = tc(kc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return lc = tc(lc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return mc = tc(mc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, oc.set(f2, tc(oc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function vc(a2) {
  var b2 = wc(a2.target);
  if (null !== b2) {
    var c2 = Zb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = $b(c2), null !== b2) {
          a2.blockedOn = b2;
          hc(a2.lanePriority, function() {
            r$3.unstable_runWithPriority(a2.priority, function() {
              gc(c2);
            });
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.hydrate) {
        a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function xc(a2) {
  if (null !== a2.blockedOn)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (null !== c2)
      return b2 = Cb(c2), null !== b2 && fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function zc(a2, b2, c2) {
  xc(a2) && c2.delete(b2);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a2 = jc[0];
    if (null !== a2.blockedOn) {
      a2 = Cb(a2.blockedOn);
      null !== a2 && ec(a2);
      break;
    }
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c2 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (null !== c2) {
        a2.blockedOn = c2;
        break;
      }
      b2.shift();
    }
    null === a2.blockedOn && jc.shift();
  }
  null !== kc && xc(kc) && (kc = null);
  null !== lc && xc(lc) && (lc = null);
  null !== mc && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, ic || (ic = true, r$3.unstable_scheduleCallback(r$3.unstable_NormalPriority, Ac)));
}
function Cc(a2) {
  function b2(b3) {
    return Bc(b3, a2);
  }
  if (0 < jc.length) {
    Bc(jc[0], a2);
    for (var c2 = 1; c2 < jc.length; c2++) {
      var d2 = jc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  null !== kc && Bc(kc, a2);
  null !== lc && Bc(lc, a2);
  null !== mc && Bc(mc, a2);
  nc.forEach(b2);
  oc.forEach(b2);
  for (c2 = 0; c2 < pc.length; c2++)
    d2 = pc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < pc.length && (c2 = pc[0], null === c2.blockedOn); )
    vc(c2), null === c2.blockedOn && pc.shift();
}
function Dc(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a2) {
  if (Fc[a2])
    return Fc[a2];
  if (!Ec[a2])
    return a2;
  var b2 = Ec[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Gc)
      return Fc[a2] = b2[c2];
  return a2;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = /* @__PURE__ */ new Map(), Nc = /* @__PURE__ */ new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a2, b2) {
  for (var c2 = 0; c2 < a2.length; c2 += 2) {
    var d2 = a2[c2], e2 = a2[c2 + 1];
    e2 = "on" + (e2[0].toUpperCase() + e2.slice(1));
    Nc.set(d2, b2);
    Mc.set(d2, e2);
    da(e2, [d2]);
  }
}
var Qc = r$3.unstable_now;
Qc();
var F$2 = 8;
function Rc(a2) {
  if (0 !== (1 & a2))
    return F$2 = 15, 1;
  if (0 !== (2 & a2))
    return F$2 = 14, 2;
  if (0 !== (4 & a2))
    return F$2 = 13, 4;
  var b2 = 24 & a2;
  if (0 !== b2)
    return F$2 = 12, b2;
  if (0 !== (a2 & 32))
    return F$2 = 11, 32;
  b2 = 192 & a2;
  if (0 !== b2)
    return F$2 = 10, b2;
  if (0 !== (a2 & 256))
    return F$2 = 9, 256;
  b2 = 3584 & a2;
  if (0 !== b2)
    return F$2 = 8, b2;
  if (0 !== (a2 & 4096))
    return F$2 = 7, 4096;
  b2 = 4186112 & a2;
  if (0 !== b2)
    return F$2 = 6, b2;
  b2 = 62914560 & a2;
  if (0 !== b2)
    return F$2 = 5, b2;
  if (a2 & 67108864)
    return F$2 = 4, 67108864;
  if (0 !== (a2 & 134217728))
    return F$2 = 3, 134217728;
  b2 = 805306368 & a2;
  if (0 !== b2)
    return F$2 = 2, b2;
  if (0 !== (1073741824 & a2))
    return F$2 = 1, 1073741824;
  F$2 = 8;
  return a2;
}
function Sc(a2) {
  switch (a2) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a2) {
  switch (a2) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y$3(358, a2));
  }
}
function Uc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (0 === c2)
    return F$2 = 0;
  var d2 = 0, e2 = 0, f2 = a2.expiredLanes, g2 = a2.suspendedLanes, h2 = a2.pingedLanes;
  if (0 !== f2)
    d2 = f2, e2 = F$2 = 15;
  else if (f2 = c2 & 134217727, 0 !== f2) {
    var k2 = f2 & ~g2;
    0 !== k2 ? (d2 = Rc(k2), e2 = F$2) : (h2 &= f2, 0 !== h2 && (d2 = Rc(h2), e2 = F$2));
  } else
    f2 = c2 & ~g2, 0 !== f2 ? (d2 = Rc(f2), e2 = F$2) : 0 !== h2 && (d2 = Rc(h2), e2 = F$2);
  if (0 === d2)
    return 0;
  d2 = 31 - Vc(d2);
  d2 = c2 & ((0 > d2 ? 0 : 1 << d2) << 1) - 1;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & g2)) {
    Rc(b2);
    if (e2 <= F$2)
      return b2;
    F$2 = e2;
  }
  b2 = a2.entangledLanes;
  if (0 !== b2)
    for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - Vc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function Wc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function Xc(a2, b2) {
  switch (a2) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a2 = Yc(24 & ~b2), 0 === a2 ? Xc(10, b2) : a2;
    case 10:
      return a2 = Yc(192 & ~b2), 0 === a2 ? Xc(8, b2) : a2;
    case 8:
      return a2 = Yc(3584 & ~b2), 0 === a2 && (a2 = Yc(4186112 & ~b2), 0 === a2 && (a2 = 512)), a2;
    case 2:
      return b2 = Yc(805306368 & ~b2), 0 === b2 && (b2 = 268435456), b2;
  }
  throw Error(y$3(358, a2));
}
function Yc(a2) {
  return a2 & -a2;
}
function Zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function $c(a2, b2, c2) {
  a2.pendingLanes |= b2;
  var d2 = b2 - 1;
  a2.suspendedLanes &= d2;
  a2.pingedLanes &= d2;
  a2 = a2.eventTimes;
  b2 = 31 - Vc(b2);
  a2[b2] = c2;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a2) {
  return 0 === a2 ? 32 : 31 - (bd(a2) / cd | 0) | 0;
}
var dd = r$3.unstable_UserBlockingPriority, ed = r$3.unstable_runWithPriority, fd = true;
function gd(a2, b2, c2, d2) {
  Kb || Ib();
  var e2 = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e2, a2, b2, c2, d2);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id(a2, b2, c2, d2) {
  ed(dd, hd.bind(null, a2, b2, c2, d2));
}
function hd(a2, b2, c2, d2) {
  if (fd) {
    var e2;
    if ((e2 = 0 === (b2 & 4)) && 0 < jc.length && -1 < qc.indexOf(a2))
      a2 = rc(null, a2, b2, c2, d2), jc.push(a2);
    else {
      var f2 = yc(a2, b2, c2, d2);
      if (null === f2)
        e2 && sc(a2, d2);
      else {
        if (e2) {
          if (-1 < qc.indexOf(a2)) {
            a2 = rc(f2, a2, b2, c2, d2);
            jc.push(a2);
            return;
          }
          if (uc(f2, a2, b2, c2, d2))
            return;
          sc(a2, d2);
        }
        jd(a2, b2, d2, null, c2);
      }
    }
  }
}
function yc(a2, b2, c2, d2) {
  var e2 = xb(d2);
  e2 = wc(e2);
  if (null !== e2) {
    var f2 = Zb(e2);
    if (null === f2)
      e2 = null;
    else {
      var g2 = f2.tag;
      if (13 === g2) {
        e2 = $b(f2);
        if (null !== e2)
          return e2;
        e2 = null;
      } else if (3 === g2) {
        if (f2.stateNode.hydrate)
          return 3 === f2.tag ? f2.stateNode.containerInfo : null;
        e2 = null;
      } else
        f2 !== e2 && (e2 = null);
    }
  }
  jd(a2, b2, d2, e2, c2);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
  10 === a2 && (a2 = 13);
  return 32 <= a2 || 13 === a2 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m$4(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m$4({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m$4({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = m$4({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m$4({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m$4({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m$4({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m$4({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
}, Nd = {
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
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = m$4({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if ("Unidentified" !== b2)
      return b2;
  }
  return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return "keypress" === a2.type ? od(a2) : 0;
}, keyCode: function(a2) {
  return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
}, which: function(a2) {
  return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = m$4({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m$4({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m$4({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m$4({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a2, b2) {
  switch (a2) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a2) {
  a2 = a2.detail;
  return "object" === typeof a2 && "data" in a2 ? a2.data : null;
}
var ie = false;
function je(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (32 !== b2.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a2 = b2.data, a2 === ee && fe ? null : a2;
    default:
      return null;
  }
}
function ke(a2, b2) {
  if (ie)
    return "compositionend" === a2 || !ae && ge(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return "input" === b2 ? !!le[a2.type] : "textarea" === b2 ? true : false;
}
function ne(a2, b2, c2, d2) {
  Eb(d2);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re(a2) {
  se(a2, 0);
}
function te(a2) {
  var b2 = ue(a2);
  if (Wa(b2))
    return a2;
}
function ve(a2, b2) {
  if ("change" === a2)
    return b2;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a2) {
  if ("value" === a2.propertyName && te(qe)) {
    var b2 = [];
    ne(b2, qe, a2, xb(a2));
    a2 = re;
    if (Kb)
      a2(b2);
    else {
      Kb = true;
      try {
        Gb(a2, b2);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a2, b2, c2) {
  "focusin" === a2 ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a2 && Ae();
}
function De(a2) {
  if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2)
    return te(qe);
}
function Ee(a2, b2) {
  if ("click" === a2)
    return te(b2);
}
function Fe(a2, b2) {
  if ("input" === a2 || "change" === a2)
    return te(b2);
}
function Ge(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He = "function" === typeof Object.is ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a2, b2) {
  if (He(a2, b2))
    return true;
  if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2)
    return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++)
    if (!Ie.call(b2, c2[d2]) || !He(a2[c2[d2]], b2[c2[d2]]))
      return false;
  return true;
}
function Ke(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Le(a2, b2) {
  var c2 = Ke(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ke(c2);
  }
}
function Me(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Me(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Ne() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Oe(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Oe(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Je(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
Pc(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
  0
);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Yb(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function se(a2, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Ub)
    throw a2 = Vb, Ub = false, Vb = null, a2;
}
function G$2(a2, b2) {
  var c2 = $e(b2), d2 = a2 + "__bubble";
  c2.has(d2) || (af(b2, a2, 2, false), c2.add(d2));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a2) {
  a2[bf] || (a2[bf] = true, ba.forEach(function(b2) {
    Ye.has(b2) || df(b2, false, a2, null);
    df(b2, true, a2, null);
  }));
}
function df(a2, b2, c2, d2) {
  var e2 = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, f2 = c2;
  "selectionchange" === a2 && 9 !== c2.nodeType && (f2 = c2.ownerDocument);
  if (null !== d2 && !b2 && Ye.has(a2)) {
    if ("scroll" !== a2)
      return;
    e2 |= 2;
    f2 = d2;
  }
  var g2 = $e(f2), h2 = a2 + "__" + (b2 ? "capture" : "bubble");
  g2.has(h2) || (b2 && (e2 |= 4), af(f2, a2, e2, b2), g2.add(h2));
}
function af(a2, b2, c2, d2) {
  var e2 = Nc.get(b2);
  switch (void 0 === e2 ? 2 : e2) {
    case 0:
      e2 = gd;
      break;
    case 1:
      e2 = id;
      break;
    default:
      e2 = hd;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Pb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function jd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
    a:
      for (; ; ) {
        if (null === d2)
          return;
        var g2 = d2.tag;
        if (3 === g2 || 4 === g2) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g2)
            for (g2 = d2.return; null !== g2; ) {
              var k2 = g2.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; null !== h2; ) {
            g2 = wc(h2);
            if (null === g2)
              return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Nb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = Mc.get(a2);
      if (void 0 !== h3) {
        var k3 = td, x2 = a2;
        switch (a2) {
          case "keypress":
            if (0 === od(c2))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            x2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            x2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k3 = Hd;
            break;
          case Lc:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var w2 = 0 !== (b2 & 4), z2 = !w2 && "scroll" === a2, u2 = w2 ? null !== h3 ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t2 = d3, q2; null !== t2; ) {
          q2 = t2;
          var v2 = q2.stateNode;
          5 === q2.tag && null !== v2 && (q2 = v2, null !== u2 && (v2 = Ob(t2, u2), null != v2 && w2.push(ef(t2, v2, q2))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w2.length && (h3 = new k3(h3, x2, null, c2, e3), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a2 || "pointerover" === a2;
        k3 = "mouseout" === a2 || "pointerout" === a2;
        if (h3 && 0 === (b2 & 16) && (x2 = c2.relatedTarget || c2.fromElement) && (wc(x2) || x2[ff]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (x2 = c2.relatedTarget || c2.toElement, k3 = d3, x2 = x2 ? wc(x2) : null, null !== x2 && (z2 = Zb(x2), x2 !== z2 || 5 !== x2.tag && 6 !== x2.tag))
              x2 = null;
          } else
            k3 = null, x2 = d3;
          if (k3 !== x2) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if ("pointerout" === a2 || "pointerover" === a2)
              w2 = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = null == k3 ? h3 : ue(k3);
            q2 = null == x2 ? h3 : ue(x2);
            h3 = new w2(v2, t2 + "leave", k3, c2, e3);
            h3.target = z2;
            h3.relatedTarget = q2;
            v2 = null;
            wc(e3) === d3 && (w2 = new w2(u2, t2 + "enter", x2, c2, e3), w2.target = q2, w2.relatedTarget = z2, v2 = w2);
            z2 = v2;
            if (k3 && x2)
              b: {
                w2 = k3;
                u2 = x2;
                t2 = 0;
                for (q2 = w2; q2; q2 = gf(q2))
                  t2++;
                q2 = 0;
                for (v2 = u2; v2; v2 = gf(v2))
                  q2++;
                for (; 0 < t2 - q2; )
                  w2 = gf(w2), t2--;
                for (; 0 < q2 - t2; )
                  u2 = gf(u2), q2--;
                for (; t2--; ) {
                  if (w2 === u2 || null !== u2 && w2 === u2.alternate)
                    break b;
                  w2 = gf(w2);
                  u2 = gf(u2);
                }
                w2 = null;
              }
            else
              w2 = null;
            null !== k3 && hf(g3, h3, k3, w2, false);
            null !== x2 && null !== z2 && hf(g3, z2, x2, w2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var J2 = ve;
        else if (me(h3))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (J2 = Ee);
        if (J2 && (J2 = J2(a2, d3))) {
          ne(g3, J2, c2, e3);
          break a;
        }
        K2 && K2(a2, h3, d3);
        "focusout" === a2 && (K2 = h3._wrapperState) && K2.controlled && "number" === h3.type && bb(h3, "number", h3.value);
      }
      K2 = d3 ? ue(d3) : window;
      switch (a2) {
        case "focusin":
          if (me(K2) || "true" === K2.contentEditable)
            Qe = K2, Re = d3, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var Q2;
      if (ae)
        b: {
          switch (a2) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a2, c2) && (L2 = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (L2 = "onCompositionStart");
      L2 && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== L2 ? "onCompositionEnd" === L2 && ie && (Q2 = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d3, L2), 0 < K2.length && (L2 = new Ld(L2, a2, null, c2, e3), g3.push({ event: L2, listeners: K2 }), Q2 ? L2.data = Q2 : (Q2 = he(c2), null !== Q2 && (L2.data = Q2))));
      if (Q2 = ce ? je(a2, c2) : ke(a2, c2))
        d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld(
          "onBeforeInput",
          "beforeinput",
          null,
          c2,
          e3
        ), g3.push({ event: e3, listeners: d3 }), e3.data = Q2);
    }
    se(g3, b2);
  });
}
function ef(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
    var e2 = a2, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Ob(a2, c2), null != f2 && d2.unshift(ef(a2, f2, e2)), f2 = Ob(a2, b2), null != f2 && d2.push(ef(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function gf(a2) {
  if (null === a2)
    return null;
  do
    a2 = a2.return;
  while (a2 && 5 !== a2.tag);
  return a2 ? a2 : null;
}
function hf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2)
      break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Ob(c2, f2), null != k2 && g2.unshift(ef(c2, k2, h2))) : e2 || (k2 = Ob(c2, f2), null != k2 && g2.push(ef(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a2.push({ event: b2, listeners: g2 });
}
function jf() {
}
var kf = null, lf = null;
function mf(a2, b2) {
  switch (a2) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b2.autoFocus;
  }
  return false;
}
function nf(a2, b2) {
  return "textarea" === a2 || "option" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var of = "function" === typeof setTimeout ? setTimeout : void 0, pf = "function" === typeof clearTimeout ? clearTimeout : void 0;
function qf(a2) {
  1 === a2.nodeType ? a2.textContent = "" : 9 === a2.nodeType && (a2 = a2.body, null != a2 && (a2.textContent = ""));
}
function rf(a2) {
  for (; null != a2; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (1 === b2 || 3 === b2)
      break;
  }
  return a2;
}
function sf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (8 === a2.nodeType) {
      var c2 = a2.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2)
          return a2;
        b2--;
      } else
        "/$" === c2 && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a2) {
  return { $$typeof: Ga, toString: a2, valueOf: a2 };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a2) {
  var b2 = a2[wf];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[ff] || c2[wf]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child)
        for (a2 = sf(a2); null !== a2; ) {
          if (c2 = a2[wf])
            return c2;
          a2 = sf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[wf] || a2[ff];
  return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
}
function ue(a2) {
  if (5 === a2.tag || 6 === a2.tag)
    return a2.stateNode;
  throw Error(y$3(33));
}
function Db(a2) {
  return a2[xf] || null;
}
function $e(a2) {
  var b2 = a2[yf];
  void 0 === b2 && (b2 = a2[yf] = /* @__PURE__ */ new Set());
  return b2;
}
var zf = [], Af = -1;
function Bf(a2) {
  return { current: a2 };
}
function H$2(a2) {
  0 > Af || (a2.current = zf[Af], zf[Af] = null, Af--);
}
function I$2(a2, b2) {
  Af++;
  zf[Af] = a2.current;
  a2.current = b2;
}
var Cf = {}, M$1 = Bf(Cf), N$1 = Bf(false), Df = Cf;
function Ef(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Cf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Ff(a2) {
  a2 = a2.childContextTypes;
  return null !== a2 && void 0 !== a2;
}
function Gf() {
  H$2(N$1);
  H$2(M$1);
}
function Hf(a2, b2, c2) {
  if (M$1.current !== Cf)
    throw Error(y$3(168));
  I$2(M$1, b2);
  I$2(N$1, c2);
}
function If(a2, b2, c2) {
  var d2 = a2.stateNode;
  a2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext)
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in a2))
      throw Error(y$3(108, Ra(b2) || "Unknown", e2));
  return m$4({}, c2, d2);
}
function Jf(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M$1.current;
  I$2(M$1, a2);
  I$2(N$1, N$1.current);
  return true;
}
function Kf(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(y$3(169));
  c2 ? (a2 = If(a2, b2, Df), d2.__reactInternalMemoizedMergedChildContext = a2, H$2(N$1), H$2(M$1), I$2(M$1, a2)) : H$2(N$1);
  I$2(N$1, c2);
}
var Lf = null, Mf = null, Nf = r$3.unstable_runWithPriority, Of = r$3.unstable_scheduleCallback, Pf = r$3.unstable_cancelCallback, Qf = r$3.unstable_shouldYield, Rf = r$3.unstable_requestPaint, Sf = r$3.unstable_now, Tf = r$3.unstable_getCurrentPriorityLevel, Uf = r$3.unstable_ImmediatePriority, Vf = r$3.unstable_UserBlockingPriority, Wf = r$3.unstable_NormalPriority, Xf = r$3.unstable_LowPriority, Yf = r$3.unstable_IdlePriority, Zf = {}, $f = void 0 !== Rf ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O$1 = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y$3(332));
  }
}
function fg(a2) {
  switch (a2) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y$3(332));
  }
}
function gg(a2, b2) {
  a2 = fg(a2);
  return Nf(a2, b2);
}
function hg(a2, b2, c2) {
  a2 = fg(a2);
  return Of(a2, b2, c2);
}
function ig() {
  if (null !== bg) {
    var a2 = bg;
    bg = null;
    Pf(a2);
  }
  jg();
}
function jg() {
  if (!cg && null !== ag) {
    cg = true;
    var a2 = 0;
    try {
      var b2 = ag;
      gg(99, function() {
        for (; a2 < b2.length; a2++) {
          var c2 = b2[a2];
          do
            c2 = c2(true);
          while (null !== c2);
        }
      });
      ag = null;
    } catch (c2) {
      throw null !== ag && (ag = ag.slice(a2 + 1)), Of(Uf, ig), c2;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = m$4({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      void 0 === b2[c2] && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a2) {
  var b2 = mg.current;
  H$2(mg);
  a2.type._context._currentValue = b2;
}
function sg(a2, b2) {
  for (; null !== a2; ) {
    var c2 = a2.alternate;
    if ((a2.childLanes & b2) === b2)
      if (null === c2 || (c2.childLanes & b2) === b2)
        break;
      else
        c2.childLanes |= b2;
    else
      a2.childLanes |= b2, null !== c2 && (c2.childLanes |= b2);
    a2 = a2.return;
  }
}
function tg(a2, b2) {
  ng = a2;
  pg = og = null;
  a2 = a2.dependencies;
  null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (ug = true), a2.firstContext = null);
}
function vg(a2, b2) {
  if (pg !== a2 && false !== b2 && 0 !== b2) {
    if ("number" !== typeof b2 || 1073741823 === b2)
      pg = a2, b2 = 1073741823;
    b2 = { context: a2, observedBits: b2, next: null };
    if (null === og) {
      if (null === ng)
        throw Error(y$3(308));
      og = b2;
      ng.dependencies = { lanes: 0, firstContext: b2, responders: null };
    } else
      og = og.next = b2;
  }
  return a2._currentValue;
}
var wg = false;
function xg(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function zg(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a2, b2) {
  a2 = a2.updateQueue;
  if (null !== a2) {
    a2 = a2.shared;
    var c2 = a2.pending;
    null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a2.pending = b2;
  }
}
function Bg(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function Cg(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  wg = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var n2 = a2.alternate;
    if (null !== n2) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g2 && (null === A2 ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k2);
    }
  }
  if (null !== f2) {
    A2 = e2.baseState;
    g2 = 0;
    n2 = l2 = k2 = null;
    do {
      h2 = f2.lane;
      var p2 = f2.eventTime;
      if ((d2 & h2) === h2) {
        null !== n2 && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C2 = a2, x2 = f2;
          h2 = b2;
          p2 = c2;
          switch (x2.tag) {
            case 1:
              C2 = x2.payload;
              if ("function" === typeof C2) {
                A2 = C2.call(p2, A2, h2);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x2.payload;
              h2 = "function" === typeof C2 ? C2.call(p2, A2, h2) : C2;
              if (null === h2 || void 0 === h2)
                break a;
              A2 = m$4({}, A2, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        null !== f2.callback && (a2.flags |= 32, h2 = e2.effects, null === h2 ? e2.effects = [f2] : h2.push(f2));
      } else
        p2 = { eventTime: p2, lane: h2, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null }, null === n2 ? (l2 = n2 = p2, k2 = A2) : n2 = n2.next = p2, g2 |= h2;
      f2 = f2.next;
      if (null === f2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          f2 = h2.next, h2.next = null, e2.lastBaseUpdate = h2, e2.shared.pending = null;
    } while (1);
    null === n2 && (k2 = A2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = n2;
    Dg |= g2;
    a2.lanes = g2;
    a2.memoizedState = A2;
  }
}
function Eg(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (null !== a2)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2)
          throw Error(y$3(191, e2));
        e2.call(d2);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : m$4({}, b2, c2);
  a2.memoizedState = c2;
  0 === a2.lanes && (a2.updateQueue.baseState = c2);
}
var Kg = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Zb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Hg(), e2 = Ig(a2), f2 = zg(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  Ag(a2, f2);
  Jg(a2, e2, d2);
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Hg(), e2 = Ig(a2), f2 = zg(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  Ag(a2, f2);
  Jg(a2, e2, d2);
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = Hg(), d2 = Ig(a2), e2 = zg(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  Ag(a2, e2);
  Jg(a2, d2, c2);
} };
function Lg(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Je(c2, d2) || !Je(e2, f2) : true;
}
function Mg(a2, b2, c2) {
  var d2 = false, e2 = Cf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = vg(f2) : (e2 = Ff(b2) ? Df : M$1.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Ef(a2, e2) : Cf);
  b2 = new b2(c2, f2);
  a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = Kg;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Ng(a2, b2, c2, d2) {
  a2 = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && Kg.enqueueReplaceState(b2, b2.state, null);
}
function Og(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = Fg;
  xg(a2);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = vg(f2) : (f2 = Ff(b2) ? Df : M$1.current, e2.context = Ef(a2, f2));
  Cg(a2, c2, e2, d2);
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (Gg(a2, b2, f2, c2), e2.state = a2.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Kg.enqueueReplaceState(e2, e2.state, null), Cg(a2, c2, e2, d2), e2.state = a2.memoizedState);
  "function" === typeof e2.componentDidMount && (a2.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a2, b2, c2) {
  a2 = c2.ref;
  if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag)
          throw Error(y$3(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(y$3(147, a2));
      var e2 = "" + a2;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === e2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = d2.refs;
        b3 === Fg && (b3 = d2.refs = {});
        null === a3 ? delete b3[e2] : b3[e2] = a3;
      };
      b2._stringRef = e2;
      return b2;
    }
    if ("string" !== typeof a2)
      throw Error(y$3(284));
    if (!c2._owner)
      throw Error(y$3(290, a2));
  }
  return a2;
}
function Rg(a2, b2) {
  if ("textarea" !== a2.type)
    throw Error(y$3(31, "[object Object]" === Object.prototype.toString.call(b2) ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
}
function Sg(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.lastEffect;
      null !== d3 ? (d3.nextEffect = c3, b3.lastEffect = c3) : b3.firstEffect = b3.lastEffect = c3;
      c3.nextEffect = null;
      c3.flags = 8;
    }
  }
  function c2(c3, d3) {
    if (!a2)
      return null;
    for (; null !== d3; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); null !== b3; )
      null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = Tg(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2)
      return c3;
    d3 = b3.alternate;
    if (null !== d3)
      return d3 = d3.index, d3 < c3 ? (b3.flags = 2, c3) : d3;
    b3.flags = 2;
    return c3;
  }
  function g2(b3) {
    a2 && null === b3.alternate && (b3.flags = 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag)
      return b3 = Ug(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    if (null !== b3 && b3.elementType === c3.type)
      return d3 = e2(b3, c3.props), d3.ref = Qg(a3, b3, c3), d3.return = a3, d3;
    d3 = Vg(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = Qg(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = Wg(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function n2(a3, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag)
      return b3 = Xg(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function A2(a3, b3, c3) {
    if ("string" === typeof b3 || "number" === typeof b3)
      return b3 = Ug("" + b3, a3.mode, c3), b3.return = a3, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case sa:
          return c3 = Vg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Qg(a3, null, b3), c3.return = a3, c3;
        case ta:
          return b3 = Wg(b3, a3.mode, c3), b3.return = a3, b3;
      }
      if (Pg(b3) || La(b3))
        return b3 = Xg(
          b3,
          a3.mode,
          c3,
          null
        ), b3.return = a3, b3;
      Rg(a3, b3);
    }
    return null;
  }
  function p2(a3, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 || "number" === typeof c3)
      return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case sa:
          return c3.key === e3 ? c3.type === ua ? n2(a3, b3, c3.props.children, d3, e3) : k2(a3, b3, c3, d3) : null;
        case ta:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
      }
      if (Pg(c3) || La(c3))
        return null !== e3 ? null : n2(a3, b3, c3, d3, null);
      Rg(a3, c3);
    }
    return null;
  }
  function C2(a3, b3, c3, d3, e3) {
    if ("string" === typeof d3 || "number" === typeof d3)
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case sa:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, d3.type === ua ? n2(b3, a3, d3.props.children, e3, d3.key) : k2(b3, a3, d3, e3);
        case ta:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
      }
      if (Pg(d3) || La(d3))
        return a3 = a3.get(c3) || null, n2(b3, a3, d3, e3, null);
      Rg(b3, d3);
    }
    return null;
  }
  function x2(e3, g3, h3, k3) {
    for (var l3 = null, t2 = null, u2 = g3, z2 = g3 = 0, q2 = null; null !== u2 && z2 < h3.length; z2++) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n3 = p2(e3, u2, h3[z2], k3);
      if (null === n3) {
        null === u2 && (u2 = q2);
        break;
      }
      a2 && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, z2);
      null === t2 ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q2;
    }
    if (z2 === h3.length)
      return c2(e3, u2), l3;
    if (null === u2) {
      for (; z2 < h3.length; z2++)
        u2 = A2(e3, h3[z2], k3), null !== u2 && (g3 = f2(u2, g3, z2), null === t2 ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d2(e3, u2); z2 < h3.length; z2++)
      q2 = C2(u2, e3, z2, h3[z2], k3), null !== q2 && (a2 && null !== q2.alternate && u2.delete(null === q2.key ? z2 : q2.key), g3 = f2(q2, g3, z2), null === t2 ? l3 = q2 : t2.sibling = q2, t2 = q2);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    return l3;
  }
  function w2(e3, g3, h3, k3) {
    var l3 = La(h3);
    if ("function" !== typeof l3)
      throw Error(y$3(150));
    h3 = l3.call(h3);
    if (null == h3)
      throw Error(y$3(151));
    for (var t2 = l3 = null, u2 = g3, z2 = g3 = 0, q2 = null, n3 = h3.next(); null !== u2 && !n3.done; z2++, n3 = h3.next()) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w3 = p2(e3, u2, n3.value, k3);
      if (null === w3) {
        null === u2 && (u2 = q2);
        break;
      }
      a2 && u2 && null === w3.alternate && b2(e3, u2);
      g3 = f2(w3, g3, z2);
      null === t2 ? l3 = w3 : t2.sibling = w3;
      t2 = w3;
      u2 = q2;
    }
    if (n3.done)
      return c2(e3, u2), l3;
    if (null === u2) {
      for (; !n3.done; z2++, n3 = h3.next())
        n3 = A2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, z2), null === t2 ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d2(e3, u2); !n3.done; z2++, n3 = h3.next())
      n3 = C2(u2, e3, z2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && u2.delete(null === n3.key ? z2 : n3.key), g3 = f2(n3, g3, z2), null === t2 ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    return l3;
  }
  return function(a3, d3, f3, h3) {
    var k3 = "object" === typeof f3 && null !== f3 && f3.type === ua && null === f3.key;
    k3 && (f3 = f3.props.children);
    var l3 = "object" === typeof f3 && null !== f3;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k3 = d3; null !== k3; ) {
              if (k3.key === l3) {
                switch (k3.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c2(a3, k3.sibling);
                      d3 = e2(k3, f3.props.children);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                    break;
                  default:
                    if (k3.elementType === f3.type) {
                      c2(a3, k3.sibling);
                      d3 = e2(k3, f3.props);
                      d3.ref = Qg(a3, k3, f3);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                }
                c2(a3, k3);
                break;
              } else
                b2(a3, k3);
              k3 = k3.sibling;
            }
            f3.type === ua ? (d3 = Xg(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = Vg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Qg(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case ta:
          a: {
            for (k3 = f3.key; null !== d3; ) {
              if (d3.key === k3)
                if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
              else
                b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = Wg(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
      }
    if ("string" === typeof f3 || "number" === typeof f3)
      return f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Ug(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3);
    if (Pg(f3))
      return x2(a3, d3, f3, h3);
    if (La(f3))
      return w2(a3, d3, f3, h3);
    l3 && Rg(a3, f3);
    if ("undefined" === typeof f3 && !k3)
      switch (a3.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y$3(152, Ra(a3.type) || "Component"));
      }
    return c2(a3, d3);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a2) {
  if (a2 === $g)
    throw Error(y$3(174));
  return a2;
}
function eh(a2, b2) {
  I$2(ch, b2);
  I$2(bh, a2);
  I$2(ah, $g);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : mb(null, "");
      break;
    default:
      a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = mb(b2, a2);
  }
  H$2(ah);
  I$2(ah, b2);
}
function fh() {
  H$2(ah);
  H$2(bh);
  H$2(ch);
}
function gh(a2) {
  dh(ch.current);
  var b2 = dh(ah.current);
  var c2 = mb(b2, a2.type);
  b2 !== c2 && (I$2(bh, a2), I$2(ah, c2));
}
function hh(a2) {
  bh.current === a2 && (H$2(ah), H$2(bh));
}
var P$1 = Bf(0);
function ih(a2) {
  for (var b2 = a2; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
        return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 64))
        return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a2, b2) {
  var c2 = nh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.type = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  c2.flags = 8;
  null !== a2.lastEffect ? (a2.lastEffect.nextEffect = c2, a2.lastEffect = c2) : a2.firstEffect = a2.lastEffect = c2;
}
function oh(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a2.stateNode = b2, true) : false;
    case 6:
      return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a2) {
  if (lh) {
    var b2 = kh;
    if (b2) {
      var c2 = b2;
      if (!oh(a2, b2)) {
        b2 = rf(c2.nextSibling);
        if (!b2 || !oh(a2, b2)) {
          a2.flags = a2.flags & -1025 | 2;
          lh = false;
          jh = a2;
          return;
        }
        mh(jh, c2);
      }
      jh = a2;
      kh = rf(b2.firstChild);
    } else
      a2.flags = a2.flags & -1025 | 2, lh = false, jh = a2;
  }
}
function qh(a2) {
  for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; )
    a2 = a2.return;
  jh = a2;
}
function rh(a2) {
  if (a2 !== jh)
    return false;
  if (!lh)
    return qh(a2), lh = true, false;
  var b2 = a2.type;
  if (5 !== a2.tag || "head" !== b2 && "body" !== b2 && !nf(b2, a2.memoizedProps))
    for (b2 = kh; b2; )
      mh(a2, b2), b2 = rf(b2.nextSibling);
  qh(a2);
  if (13 === a2.tag) {
    a2 = a2.memoizedState;
    a2 = null !== a2 ? a2.dehydrated : null;
    if (!a2)
      throw Error(y$3(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (8 === a2.nodeType) {
          var c2 = a2.data;
          if ("/$" === c2) {
            if (0 === b2) {
              kh = rf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a2 = a2.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a2.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a2 = 0; a2 < th.length; a2++)
    th[a2]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R$1 = null, S$1 = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y$3(321));
}
function Bh(a2, b2) {
  if (null === b2)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!He(a2[c2], b2[c2]))
      return false;
  return true;
}
function Ch(a2, b2, c2, d2, e2, f2) {
  xh = f2;
  R$1 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  vh.current = null === a2 || null === a2.memoizedState ? Dh : Eh;
  a2 = c2(d2, e2);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y$3(301));
      f2 += 1;
      T = S$1 = null;
      b2.updateQueue = null;
      vh.current = Fh;
      a2 = c2(d2, e2);
    } while (zh);
  }
  vh.current = Gh;
  b2 = null !== S$1 && null !== S$1.next;
  xh = 0;
  T = S$1 = R$1 = null;
  yh = false;
  if (b2)
    throw Error(y$3(300));
  return a2;
}
function Hh() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === T ? R$1.memoizedState = T = a2 : T = T.next = a2;
  return T;
}
function Ih() {
  if (null === S$1) {
    var a2 = R$1.alternate;
    a2 = null !== a2 ? a2.memoizedState : null;
  } else
    a2 = S$1.next;
  var b2 = null === T ? R$1.memoizedState : T.next;
  if (null !== b2)
    T = b2, S$1 = a2;
  else {
    if (null === a2)
      throw Error(y$3(310));
    S$1 = a2;
    a2 = { memoizedState: S$1.memoizedState, baseState: S$1.baseState, baseQueue: S$1.baseQueue, queue: S$1.queue, next: null };
    null === T ? R$1.memoizedState = T = a2 : T = T.next = a2;
  }
  return T;
}
function Jh(a2, b2) {
  return "function" === typeof b2 ? b2(a2) : b2;
}
function Kh(a2) {
  var b2 = Ih(), c2 = b2.queue;
  if (null === c2)
    throw Error(y$3(311));
  c2.lastRenderedReducer = a2;
  var d2 = S$1, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    e2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = f2 = null, k2 = e2;
    do {
      var l2 = k2.lane;
      if ((xh & l2) === l2)
        null !== h2 && (h2 = h2.next = { lane: 0, action: k2.action, eagerReducer: k2.eagerReducer, eagerState: k2.eagerState, next: null }), d2 = k2.eagerReducer === a2 ? k2.eagerState : a2(d2, k2.action);
      else {
        var n2 = {
          lane: l2,
          action: k2.action,
          eagerReducer: k2.eagerReducer,
          eagerState: k2.eagerState,
          next: null
        };
        null === h2 ? (g2 = h2 = n2, f2 = d2) : h2 = h2.next = n2;
        R$1.lanes |= l2;
        Dg |= l2;
      }
      k2 = k2.next;
    } while (null !== k2 && k2 !== e2);
    null === h2 ? f2 = d2 : h2.next = g2;
    He(d2, b2.memoizedState) || (ug = true);
    b2.memoizedState = d2;
    b2.baseState = f2;
    b2.baseQueue = h2;
    c2.lastRenderedState = d2;
  }
  return [b2.memoizedState, c2.dispatch];
}
function Lh(a2) {
  var b2 = Ih(), c2 = b2.queue;
  if (null === c2)
    throw Error(y$3(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He(f2, b2.memoizedState) || (ug = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Mh(a2, b2, c2) {
  var d2 = b2._getVersion;
  d2 = d2(b2._source);
  var e2 = b2._workInProgressVersionPrimary;
  if (null !== e2)
    a2 = e2 === d2;
  else if (a2 = a2.mutableReadLanes, a2 = (xh & a2) === a2)
    b2._workInProgressVersionPrimary = d2, th.push(b2);
  if (a2)
    return c2(b2._source);
  th.push(b2);
  throw Error(y$3(350));
}
function Nh(a2, b2, c2, d2) {
  var e2 = U$1;
  if (null === e2)
    throw Error(y$3(349));
  var f2 = b2._getVersion, g2 = f2(b2._source), h2 = vh.current, k2 = h2.useState(function() {
    return Mh(e2, b2, c2);
  }), l2 = k2[1], n2 = k2[0];
  k2 = T;
  var A2 = a2.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x2 = A2.source;
  A2 = A2.subscribe;
  var w2 = R$1;
  a2.memoizedState = { refs: p2, source: b2, subscribe: d2 };
  h2.useEffect(function() {
    p2.getSnapshot = c2;
    p2.setSnapshot = l2;
    var a3 = f2(b2._source);
    if (!He(g2, a3)) {
      a3 = c2(b2._source);
      He(n2, a3) || (l2(a3), a3 = Ig(w2), e2.mutableReadLanes |= a3 & e2.pendingLanes);
      a3 = e2.mutableReadLanes;
      e2.entangledLanes |= a3;
      for (var d3 = e2.entanglements, h3 = a3; 0 < h3; ) {
        var k3 = 31 - Vc(h3), v2 = 1 << k3;
        d3[k3] |= a3;
        h3 &= ~v2;
      }
    }
  }, [c2, b2, d2]);
  h2.useEffect(function() {
    return d2(b2._source, function() {
      var a3 = p2.getSnapshot, c3 = p2.setSnapshot;
      try {
        c3(a3(b2._source));
        var d3 = Ig(w2);
        e2.mutableReadLanes |= d3 & e2.pendingLanes;
      } catch (q2) {
        c3(function() {
          throw q2;
        });
      }
    });
  }, [b2, d2]);
  He(C2, c2) && He(x2, b2) && He(A2, d2) || (a2 = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a2.dispatch = l2 = Oh.bind(null, R$1, a2), k2.queue = a2, k2.baseQueue = null, n2 = Mh(e2, b2, c2), k2.memoizedState = k2.baseState = n2);
  return n2;
}
function Ph(a2, b2, c2) {
  var d2 = Ih();
  return Nh(d2, a2, b2, c2);
}
function Qh(a2) {
  var b2 = Hh();
  "function" === typeof a2 && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = b2.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a2 };
  a2 = a2.dispatch = Oh.bind(null, R$1, a2);
  return [b2.memoizedState, a2];
}
function Rh(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = R$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null }, R$1.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function Sh(a2) {
  var b2 = Hh();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a2, b2, c2, d2) {
  var e2 = Hh();
  R$1.flags |= a2;
  e2.memoizedState = Rh(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function Vh(a2, b2, c2, d2) {
  var e2 = Ih();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== S$1) {
    var g2 = S$1.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Bh(d2, g2.deps)) {
      Rh(b2, c2, f2, d2);
      return;
    }
  }
  R$1.flags |= a2;
  e2.memoizedState = Rh(1 | b2, c2, f2, d2);
}
function Wh(a2, b2) {
  return Uh(516, 4, a2, b2);
}
function Xh(a2, b2) {
  return Vh(516, 4, a2, b2);
}
function Yh(a2, b2) {
  return Vh(4, 2, a2, b2);
}
function Zh(a2, b2) {
  if ("function" === typeof b2)
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (null !== b2 && void 0 !== b2)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function $h(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return Vh(4, 2, Zh.bind(null, b2, a2), c2);
}
function ai() {
}
function bi(a2, b2) {
  var c2 = Ih();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Bh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function ci(a2, b2) {
  var c2 = Ih();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Bh(b2, d2[1]))
    return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function di(a2, b2) {
  var c2 = eg();
  gg(98 > c2 ? 98 : c2, function() {
    a2(true);
  });
  gg(97 < c2 ? 97 : c2, function() {
    var c3 = wh.transition;
    wh.transition = 1;
    try {
      a2(false), b2();
    } finally {
      wh.transition = c3;
    }
  });
}
function Oh(a2, b2, c2) {
  var d2 = Hg(), e2 = Ig(a2), f2 = { lane: e2, action: c2, eagerReducer: null, eagerState: null, next: null }, g2 = b2.pending;
  null === g2 ? f2.next = f2 : (f2.next = g2.next, g2.next = f2);
  b2.pending = f2;
  g2 = a2.alternate;
  if (a2 === R$1 || null !== g2 && g2 === R$1)
    zh = yh = true;
  else {
    if (0 === a2.lanes && (null === g2 || 0 === g2.lanes) && (g2 = b2.lastRenderedReducer, null !== g2))
      try {
        var h2 = b2.lastRenderedState, k2 = g2(h2, c2);
        f2.eagerReducer = g2;
        f2.eagerState = k2;
        if (He(k2, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a2, e2, d2);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a2, b2) {
  Hh().memoizedState = [a2, void 0 === b2 ? null : b2];
  return a2;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return Uh(4, 2, Zh.bind(
    null,
    b2,
    a2
  ), c2);
}, useLayoutEffect: function(a2, b2) {
  return Uh(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = Hh();
  b2 = void 0 === b2 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = Hh();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = d2.queue = { pending: null, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  a2 = a2.dispatch = Oh.bind(null, R$1, a2);
  return [d2.memoizedState, a2];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Qh(a2), c2 = b2[0], d2 = b2[1];
  Wh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c2;
}, useTransition: function() {
  var a2 = Qh(false), b2 = a2[0];
  a2 = di.bind(null, a2[1]);
  Sh(a2);
  return [a2, b2];
}, useMutableSource: function(a2, b2, c2) {
  var d2 = Hh();
  d2.memoizedState = { refs: { getSnapshot: b2, setSnapshot: null }, source: a2, subscribe: c2 };
  return Nh(d2, a2, b2, c2);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a2 = false, b2 = uf(function() {
      a2 || (a2 = true, c2("r:" + (tf++).toString(36)));
      throw Error(y$3(355));
    }), c2 = Qh(b2)[1];
    0 === (R$1.mode & 2) && (R$1.flags |= 516, Rh(
      5,
      function() {
        c2("r:" + (tf++).toString(36));
      },
      void 0,
      null
    ));
    return b2;
  }
  b2 = "r:" + (tf++).toString(36);
  Qh(b2);
  return b2;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Kh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c2;
}, useTransition: function() {
  var a2 = Kh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Lh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c2;
}, useTransition: function() {
  var a2 = Lh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a2, b2, c2, d2) {
  b2.child = null === a2 ? Zg(b2, null, c2, d2) : Yg(b2, a2.child, c2, d2);
}
function gi(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  tg(b2, e2);
  d2 = Ch(a2, b2, c2, d2, f2, e2);
  if (null !== a2 && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e2, hi(a2, b2, e2);
  b2.flags |= 1;
  fi(a2, b2, d2, e2);
  return b2.child;
}
function ii(a2, b2, c2, d2, e2, f2) {
  if (null === a2) {
    var g2 = c2.type;
    if ("function" === typeof g2 && !ji(g2) && void 0 === g2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
      return b2.tag = 15, b2.type = g2, ki(a2, b2, g2, d2, e2, f2);
    a2 = Vg(c2.type, null, d2, b2, b2.mode, f2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  g2 = a2.child;
  if (0 === (e2 & f2) && (e2 = g2.memoizedProps, c2 = c2.compare, c2 = null !== c2 ? c2 : Je, c2(e2, d2) && a2.ref === b2.ref))
    return hi(a2, b2, f2);
  b2.flags |= 1;
  a2 = Tg(g2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function ki(a2, b2, c2, d2, e2, f2) {
  if (null !== a2 && Je(a2.memoizedProps, d2) && a2.ref === b2.ref)
    if (ug = false, 0 !== (f2 & e2))
      0 !== (a2.flags & 16384) && (ug = true);
    else
      return b2.lanes = a2.lanes, hi(a2, b2, f2);
  return li(a2, b2, c2, d2, f2);
}
function mi(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
  if ("hidden" === d2.mode || "unstable-defer-without-hiding" === d2.mode)
    if (0 === (b2.mode & 4))
      b2.memoizedState = { baseLanes: 0 }, ni(b2, c2);
    else if (0 !== (c2 & 1073741824))
      b2.memoizedState = { baseLanes: 0 }, ni(b2, null !== f2 ? f2.baseLanes : c2);
    else
      return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2 }, ni(b2, a2), null;
  else
    null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, ni(b2, d2);
  fi(a2, b2, e2, c2);
  return b2.child;
}
function oi(a2, b2) {
  var c2 = b2.ref;
  if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2)
    b2.flags |= 128;
}
function li(a2, b2, c2, d2, e2) {
  var f2 = Ff(c2) ? Df : M$1.current;
  f2 = Ef(b2, f2);
  tg(b2, e2);
  c2 = Ch(a2, b2, c2, d2, f2, e2);
  if (null !== a2 && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e2, hi(a2, b2, e2);
  b2.flags |= 1;
  fi(a2, b2, c2, e2);
  return b2.child;
}
function pi(a2, b2, c2, d2, e2) {
  if (Ff(c2)) {
    var f2 = true;
    Jf(b2);
  } else
    f2 = false;
  tg(b2, e2);
  if (null === b2.stateNode)
    null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Mg(b2, c2, d2), Og(b2, c2, d2, e2), d2 = true;
  else if (null === a2) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = vg(l2) : (l2 = Ff(c2) ? Df : M$1.current, l2 = Ef(b2, l2));
    var n2 = c2.getDerivedStateFromProps, A2 = "function" === typeof n2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    A2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Ng(b2, g2, d2, l2);
    wg = false;
    var p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || p2 !== k2 || N$1.current || wg ? ("function" === typeof n2 && (Gg(b2, c2, n2, d2), k2 = b2.memoizedState), (h2 = wg || Lg(b2, c2, h2, d2, p2, k2, l2)) ? (A2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4), d2 = false);
  } else {
    g2 = b2.stateNode;
    yg(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : lg(b2.type, h2);
    g2.props = l2;
    A2 = b2.pendingProps;
    p2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = vg(k2) : (k2 = Ff(c2) ? Df : M$1.current, k2 = Ef(b2, k2));
    var C2 = c2.getDerivedStateFromProps;
    (n2 = "function" === typeof C2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== A2 || p2 !== k2) && Ng(b2, g2, d2, k2);
    wg = false;
    p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    var x2 = b2.memoizedState;
    h2 !== A2 || p2 !== x2 || N$1.current || wg ? ("function" === typeof C2 && (Gg(b2, c2, C2, d2), x2 = b2.memoizedState), (l2 = wg || Lg(b2, c2, l2, d2, p2, x2, k2)) ? (n2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(
      d2,
      x2,
      k2
    ), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, x2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 256)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 256), b2.memoizedProps = d2, b2.memoizedState = x2), g2.props = d2, g2.state = x2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 256), d2 = false);
  }
  return qi(a2, b2, c2, d2, f2, e2);
}
function qi(a2, b2, c2, d2, e2, f2) {
  oi(a2, b2);
  var g2 = 0 !== (b2.flags & 64);
  if (!d2 && !g2)
    return e2 && Kf(b2, c2, false), hi(a2, b2, f2);
  d2 = b2.stateNode;
  ei.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a2 && g2 ? (b2.child = Yg(b2, a2.child, null, f2), b2.child = Yg(b2, null, h2, f2)) : fi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && Kf(b2, c2, true);
  return b2.child;
}
function ri(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? Hf(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Hf(a2, b2.context, false);
  eh(a2, b2.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = P$1.current, f2 = false, g2;
  (g2 = 0 !== (b2.flags & 64)) || (g2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
  g2 ? (f2 = true, b2.flags &= -65) : null !== a2 && null === a2.memoizedState || void 0 === d2.fallback || true === d2.unstable_avoidThisFallback || (e2 |= 1);
  I$2(P$1, e2 & 1);
  if (null === a2) {
    void 0 !== d2.fallback && ph(b2);
    a2 = d2.children;
    e2 = d2.fallback;
    if (f2)
      return a2 = ui(b2, a2, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, a2;
    if ("number" === typeof d2.unstable_expectedLoadTime)
      return a2 = ui(b2, a2, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, b2.lanes = 33554432, a2;
    c2 = vi({ mode: "visible", children: a2 }, b2.mode, c2, null);
    c2.return = b2;
    return b2.child = c2;
  }
  if (null !== a2.memoizedState) {
    if (f2)
      return d2 = wi(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = null === e2 ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = si, d2;
    c2 = xi(a2, b2, d2.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d2 = wi(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = null === e2 ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = si, d2;
  c2 = xi(a2, b2, d2.children, c2);
  b2.memoizedState = null;
  return c2;
}
function ui(a2, b2, c2, d2) {
  var e2 = a2.mode, f2 = a2.child;
  b2 = { mode: "hidden", children: b2 };
  0 === (e2 & 2) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = b2) : f2 = vi(b2, e2, 0, null);
  c2 = Xg(c2, e2, d2, null);
  f2.return = a2;
  c2.return = a2;
  f2.sibling = c2;
  a2.child = f2;
  return c2;
}
function xi(a2, b2, c2, d2) {
  var e2 = a2.child;
  a2 = e2.sibling;
  c2 = Tg(e2, { mode: "visible", children: c2 });
  0 === (b2.mode & 2) && (c2.lanes = d2);
  c2.return = b2;
  c2.sibling = null;
  null !== a2 && (a2.nextEffect = null, a2.flags = 8, b2.firstEffect = b2.lastEffect = a2);
  return b2.child = c2;
}
function wi(a2, b2, c2, d2, e2) {
  var f2 = b2.mode, g2 = a2.child;
  a2 = g2.sibling;
  var h2 = { mode: "hidden", children: c2 };
  0 === (f2 & 2) && b2.child !== g2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, g2 = c2.lastEffect, null !== g2 ? (b2.firstEffect = c2.firstEffect, b2.lastEffect = g2, g2.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c2 = Tg(g2, h2);
  null !== a2 ? d2 = Tg(a2, d2) : (d2 = Xg(d2, f2, e2, null), d2.flags |= 2);
  d2.return = b2;
  c2.return = b2;
  c2.sibling = d2;
  b2.child = c2;
  return d2;
}
function yi(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  null !== c2 && (c2.lanes |= b2);
  sg(a2.return, b2);
}
function zi(a2, b2, c2, d2, e2, f2) {
  var g2 = a2.memoizedState;
  null === g2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2, lastEffect: f2 } : (g2.isBackwards = b2, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d2, g2.tail = c2, g2.tailMode = e2, g2.lastEffect = f2);
}
function Ai(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  fi(a2, b2, d2.children, c2);
  d2 = P$1.current;
  if (0 !== (d2 & 2))
    d2 = d2 & 1 | 2, b2.flags |= 64;
  else {
    if (null !== a2 && 0 !== (a2.flags & 64))
      a:
        for (a2 = b2.child; null !== a2; ) {
          if (13 === a2.tag)
            null !== a2.memoizedState && yi(a2, c2);
          else if (19 === a2.tag)
            yi(a2, c2);
          else if (null !== a2.child) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; null === a2.sibling; ) {
            if (null === a2.return || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d2 &= 1;
  }
  I$2(P$1, d2);
  if (0 === (b2.mode & 2))
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; )
          a2 = c2.alternate, null !== a2 && null === ih(a2) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        zi(b2, false, e2, c2, f2, b2.lastEffect);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a2 = e2.alternate;
          if (null !== a2 && null === ih(a2)) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        zi(b2, true, c2, null, f2, b2.lastEffect);
        break;
      case "together":
        zi(b2, false, null, null, void 0, b2.lastEffect);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function hi(a2, b2, c2) {
  null !== a2 && (b2.dependencies = a2.dependencies);
  Dg |= b2.lanes;
  if (0 !== (c2 & b2.childLanes)) {
    if (null !== a2 && b2.child !== a2.child)
      throw Error(y$3(153));
    if (null !== b2.child) {
      a2 = b2.child;
      c2 = Tg(a2, a2.pendingProps);
      b2.child = c2;
      for (c2.return = b2; null !== a2.sibling; )
        a2 = a2.sibling, c2 = c2.sibling = Tg(a2, a2.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a2, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag)
      a2.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Ci = function() {
};
Di = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a2, e2);
        d2 = Ya(a2, d2);
        f2 = [];
        break;
      case "option":
        e2 = eb(a2, e2);
        d2 = eb(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = m$4({}, e2, { value: void 0 });
        d2 = m$4({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d2 = gb(a2, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = jf);
    }
    vb(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
        if ("style" === l2) {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l2)
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l2, c2)), c2 = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ca.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && G$2("scroll", a2), f2 || h2 === k2 || (f2 = [])) : "object" === typeof k2 && null !== k2 && k2.$$typeof === Ga ? k2.toString() : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push(
      "style",
      c2
    );
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Ei = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Fi(a2, b2) {
  if (!lh)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; null !== b2; )
          null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; null !== c2; )
          null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
}
function Gi(a2, b2, c2) {
  var d2 = b2.pendingProps;
  switch (b2.tag) {
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
      return null;
    case 1:
      return Ff(b2.type) && Gf(), null;
    case 3:
      fh();
      H$2(N$1);
      H$2(M$1);
      uh();
      d2 = b2.stateNode;
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a2 || null === a2.child)
        rh(b2) ? b2.flags |= 4 : d2.hydrate || (b2.flags |= 256);
      Ci(b2);
      return null;
    case 5:
      hh(b2);
      var e2 = dh(ch.current);
      c2 = b2.type;
      if (null !== a2 && null != b2.stateNode)
        Di(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 128);
      else {
        if (!d2) {
          if (null === b2.stateNode)
            throw Error(y$3(166));
          return null;
        }
        a2 = dh(ah.current);
        if (rh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[wf] = b2;
          d2[xf] = f2;
          switch (c2) {
            case "dialog":
              G$2("cancel", d2);
              G$2("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              G$2("load", d2);
              break;
            case "video":
            case "audio":
              for (a2 = 0; a2 < Xe.length; a2++)
                G$2(Xe[a2], d2);
              break;
            case "source":
              G$2("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              G$2("error", d2);
              G$2("load", d2);
              break;
            case "details":
              G$2("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              G$2("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              G$2("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), G$2("invalid", d2);
          }
          vb(c2, f2);
          a2 = null;
          for (var g2 in f2)
            f2.hasOwnProperty(g2) && (e2 = f2[g2], "children" === g2 ? "string" === typeof e2 ? d2.textContent !== e2 && (a2 = ["children", e2]) : "number" === typeof e2 && d2.textContent !== "" + e2 && (a2 = ["children", "" + e2]) : ca.hasOwnProperty(g2) && null != e2 && "onScroll" === g2 && G$2("scroll", d2));
          switch (c2) {
            case "input":
              Va(d2);
              cb(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = jf);
          }
          d2 = a2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          a2 === kb.html && (a2 = lb(c2));
          a2 === kb.html ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[wf] = b2;
          a2[xf] = d2;
          Bi(a2, b2, false, false);
          b2.stateNode = a2;
          g2 = wb(c2, d2);
          switch (c2) {
            case "dialog":
              G$2("cancel", a2);
              G$2("close", a2);
              e2 = d2;
              break;
            case "iframe":
            case "object":
            case "embed":
              G$2("load", a2);
              e2 = d2;
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < Xe.length; e2++)
                G$2(Xe[e2], a2);
              e2 = d2;
              break;
            case "source":
              G$2("error", a2);
              e2 = d2;
              break;
            case "img":
            case "image":
            case "link":
              G$2("error", a2);
              G$2("load", a2);
              e2 = d2;
              break;
            case "details":
              G$2("toggle", a2);
              e2 = d2;
              break;
            case "input":
              Za(a2, d2);
              e2 = Ya(a2, d2);
              G$2("invalid", a2);
              break;
            case "option":
              e2 = eb(a2, d2);
              break;
            case "select":
              a2._wrapperState = { wasMultiple: !!d2.multiple };
              e2 = m$4({}, d2, { value: void 0 });
              G$2("invalid", a2);
              break;
            case "textarea":
              hb(a2, d2);
              e2 = gb(a2, d2);
              G$2("invalid", a2);
              break;
            default:
              e2 = d2;
          }
          vb(c2, e2);
          var h2 = e2;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              "style" === f2 ? tb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && ob(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && pb(a2, k2) : "number" === typeof k2 && pb(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ca.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && G$2("scroll", a2) : null != k2 && qa(a2, f2, k2, g2));
            }
          switch (c2) {
            case "input":
              Va(a2);
              cb(a2, d2, false);
              break;
            case "textarea":
              Va(a2);
              jb(a2);
              break;
            case "option":
              null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
              break;
            case "select":
              a2.multiple = !!d2.multiple;
              f2 = d2.value;
              null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(a2, !!d2.multiple, d2.defaultValue, true);
              break;
            default:
              "function" === typeof e2.onClick && (a2.onclick = jf);
          }
          mf(c2, d2) && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 128);
      }
      return null;
    case 6:
      if (a2 && null != b2.stateNode)
        Ei(a2, b2, a2.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode)
          throw Error(y$3(166));
        c2 = dh(ch.current);
        dh(ah.current);
        rh(b2) ? (d2 = b2.stateNode, c2 = b2.memoizedProps, d2[wf] = b2, d2.nodeValue !== c2 && (b2.flags |= 4)) : (d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[wf] = b2, b2.stateNode = d2);
      }
      return null;
    case 13:
      H$2(P$1);
      d2 = b2.memoizedState;
      if (0 !== (b2.flags & 64))
        return b2.lanes = c2, b2;
      d2 = null !== d2;
      c2 = false;
      null === a2 ? void 0 !== b2.memoizedProps.fallback && rh(b2) : c2 = null !== a2.memoizedState;
      if (d2 && !c2 && 0 !== (b2.mode & 2))
        if (null === a2 && true !== b2.memoizedProps.unstable_avoidThisFallback || 0 !== (P$1.current & 1))
          0 === V && (V = 3);
        else {
          if (0 === V || 3 === V)
            V = 4;
          null === U$1 || 0 === (Dg & 134217727) && 0 === (Hi & 134217727) || Ii(U$1, W$1);
        }
      if (d2 || c2)
        b2.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b2), null === a2 && cf(b2.stateNode.containerInfo), null;
    case 10:
      return rg(b2), null;
    case 17:
      return Ff(b2.type) && Gf(), null;
    case 19:
      H$2(P$1);
      d2 = b2.memoizedState;
      if (null === d2)
        return null;
      f2 = 0 !== (b2.flags & 64);
      g2 = d2.rendering;
      if (null === g2)
        if (f2)
          Fi(d2, false);
        else {
          if (0 !== V || null !== a2 && 0 !== (a2.flags & 64))
            for (a2 = b2.child; null !== a2; ) {
              g2 = ih(a2);
              if (null !== g2) {
                b2.flags |= 64;
                Fi(d2, false);
                f2 = g2.updateQueue;
                null !== f2 && (b2.updateQueue = f2, b2.flags |= 4);
                null === d2.lastEffect && (b2.firstEffect = null);
                b2.lastEffect = d2.lastEffect;
                d2 = c2;
                for (c2 = b2.child; null !== c2; )
                  f2 = c2, a2 = d2, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                I$2(P$1, P$1.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          null !== d2.tail && O$1() > Ji && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a2 = ih(g2), null !== a2) {
            if (b2.flags |= 64, f2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Fi(d2, true), null === d2.tail && "hidden" === d2.tailMode && !g2.alternate && !lh)
              return b2 = b2.lastEffect = d2.lastEffect, null !== b2 && (b2.nextEffect = null), null;
          } else
            2 * O$1() - d2.renderingStartTime > Ji && 1073741824 !== c2 && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        d2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = d2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, d2.last = g2);
      }
      return null !== d2.tail ? (c2 = d2.tail, d2.rendering = c2, d2.tail = c2.sibling, d2.lastEffect = b2.lastEffect, d2.renderingStartTime = O$1(), c2.sibling = null, b2 = P$1.current, I$2(P$1, f2 ? b2 & 1 | 2 : b2 & 1), c2) : null;
    case 23:
    case 24:
      return Ki(), null !== a2 && null !== a2.memoizedState !== (null !== b2.memoizedState) && "unstable-defer-without-hiding" !== d2.mode && (b2.flags |= 4), null;
  }
  throw Error(y$3(156, b2.tag));
}
function Li(a2) {
  switch (a2.tag) {
    case 1:
      Ff(a2.type) && Gf();
      var b2 = a2.flags;
      return b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 3:
      fh();
      H$2(N$1);
      H$2(M$1);
      uh();
      b2 = a2.flags;
      if (0 !== (b2 & 64))
        throw Error(y$3(285));
      a2.flags = b2 & -4097 | 64;
      return a2;
    case 5:
      return hh(a2), null;
    case 13:
      return H$2(P$1), b2 = a2.flags, b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 19:
      return H$2(P$1), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a2), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Qa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2 };
}
function Ni(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Oi = "function" === typeof WeakMap ? WeakMap : Map;
function Pi(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Qi || (Qi = true, Ri = d2);
    Ni(a2, b2);
  };
  return c2;
}
function Si(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      Ni(a2, b2);
      return d2(e2);
    };
  }
  var f2 = a2.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    "function" !== typeof d2 && (null === Ti ? Ti = /* @__PURE__ */ new Set([this]) : Ti.add(this), Ni(a2, b2));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
var Ui = "function" === typeof WeakSet ? WeakSet : Set;
function Vi(a2) {
  var b2 = a2.ref;
  if (null !== b2)
    if ("function" === typeof b2)
      try {
        b2(null);
      } catch (c2) {
        Wi(a2, c2);
      }
    else
      b2.current = null;
}
function Xi(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b2.flags & 256 && null !== a2) {
        var c2 = a2.memoizedProps, d2 = a2.memoizedState;
        a2 = b2.stateNode;
        b2 = a2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c2 : lg(b2.type, c2), d2);
        a2.__reactInternalSnapshotBeforeUpdate = b2;
      }
      return;
    case 3:
      b2.flags & 256 && qf(b2.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y$3(163));
}
function Yi(a2, b2, c2) {
  switch (c2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b2 = c2.updateQueue;
      b2 = null !== b2 ? b2.lastEffect : null;
      if (null !== b2) {
        a2 = b2 = b2.next;
        do {
          if (3 === (a2.tag & 3)) {
            var d2 = a2.create;
            a2.destroy = d2();
          }
          a2 = a2.next;
        } while (a2 !== b2);
      }
      b2 = c2.updateQueue;
      b2 = null !== b2 ? b2.lastEffect : null;
      if (null !== b2) {
        a2 = b2 = b2.next;
        do {
          var e2 = a2;
          d2 = e2.next;
          e2 = e2.tag;
          0 !== (e2 & 4) && 0 !== (e2 & 1) && (Zi(c2, a2), $i(c2, a2));
          a2 = d2;
        } while (a2 !== b2);
      }
      return;
    case 1:
      a2 = c2.stateNode;
      c2.flags & 4 && (null === b2 ? a2.componentDidMount() : (d2 = c2.elementType === c2.type ? b2.memoizedProps : lg(c2.type, b2.memoizedProps), a2.componentDidUpdate(
        d2,
        b2.memoizedState,
        a2.__reactInternalSnapshotBeforeUpdate
      )));
      b2 = c2.updateQueue;
      null !== b2 && Eg(c2, b2, a2);
      return;
    case 3:
      b2 = c2.updateQueue;
      if (null !== b2) {
        a2 = null;
        if (null !== c2.child)
          switch (c2.child.tag) {
            case 5:
              a2 = c2.child.stateNode;
              break;
            case 1:
              a2 = c2.child.stateNode;
          }
        Eg(c2, b2, a2);
      }
      return;
    case 5:
      a2 = c2.stateNode;
      null === b2 && c2.flags & 4 && mf(c2.type, c2.memoizedProps) && a2.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      null === c2.memoizedState && (c2 = c2.alternate, null !== c2 && (c2 = c2.memoizedState, null !== c2 && (c2 = c2.dehydrated, null !== c2 && Cc(c2))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y$3(163));
}
function aj(a2, b2) {
  for (var c2 = a2; ; ) {
    if (5 === c2.tag) {
      var d2 = c2.stateNode;
      if (b2)
        d2 = d2.style, "function" === typeof d2.setProperty ? d2.setProperty("display", "none", "important") : d2.display = "none";
      else {
        d2 = c2.stateNode;
        var e2 = c2.memoizedProps.style;
        e2 = void 0 !== e2 && null !== e2 && e2.hasOwnProperty("display") ? e2.display : null;
        d2.style.display = sb("display", e2);
      }
    } else if (6 === c2.tag)
      c2.stateNode.nodeValue = b2 ? "" : c2.memoizedProps;
    else if ((23 !== c2.tag && 24 !== c2.tag || null === c2.memoizedState || c2 === a2) && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === a2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === a2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function bj(a2, b2) {
  if (Mf && "function" === typeof Mf.onCommitFiberUnmount)
    try {
      Mf.onCommitFiberUnmount(Lf, b2);
    } catch (f2) {
    }
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a2 = b2.updateQueue;
      if (null !== a2 && (a2 = a2.lastEffect, null !== a2)) {
        var c2 = a2 = a2.next;
        do {
          var d2 = c2, e2 = d2.destroy;
          d2 = d2.tag;
          if (void 0 !== e2)
            if (0 !== (d2 & 4))
              Zi(b2, c2);
            else {
              d2 = b2;
              try {
                e2();
              } catch (f2) {
                Wi(d2, f2);
              }
            }
          c2 = c2.next;
        } while (c2 !== a2);
      }
      break;
    case 1:
      Vi(b2);
      a2 = b2.stateNode;
      if ("function" === typeof a2.componentWillUnmount)
        try {
          a2.props = b2.memoizedProps, a2.state = b2.memoizedState, a2.componentWillUnmount();
        } catch (f2) {
          Wi(
            b2,
            f2
          );
        }
      break;
    case 5:
      Vi(b2);
      break;
    case 4:
      cj(a2, b2);
  }
}
function dj(a2) {
  a2.alternate = null;
  a2.child = null;
  a2.dependencies = null;
  a2.firstEffect = null;
  a2.lastEffect = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.return = null;
  a2.updateQueue = null;
}
function ej(a2) {
  return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
}
function fj(a2) {
  a: {
    for (var b2 = a2.return; null !== b2; ) {
      if (ej(b2))
        break a;
      b2 = b2.return;
    }
    throw Error(y$3(160));
  }
  var c2 = b2;
  b2 = c2.stateNode;
  switch (c2.tag) {
    case 5:
      var d2 = false;
      break;
    case 3:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    case 4:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    default:
      throw Error(y$3(161));
  }
  c2.flags & 16 && (pb(b2, ""), c2.flags &= -17);
  a:
    b:
      for (c2 = a2; ; ) {
        for (; null === c2.sibling; ) {
          if (null === c2.return || ej(c2.return)) {
            c2 = null;
            break a;
          }
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        for (c2 = c2.sibling; 5 !== c2.tag && 6 !== c2.tag && 18 !== c2.tag; ) {
          if (c2.flags & 2)
            continue b;
          if (null === c2.child || 4 === c2.tag)
            continue b;
          else
            c2.child.return = c2, c2 = c2.child;
        }
        if (!(c2.flags & 2)) {
          c2 = c2.stateNode;
          break a;
        }
      }
  d2 ? gj(a2, c2, b2) : hj(a2, c2, b2);
}
function gj(a2, b2, c2) {
  var d2 = a2.tag, e2 = 5 === d2 || 6 === d2;
  if (e2)
    a2 = e2 ? a2.stateNode : a2.stateNode.instance, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = jf));
  else if (4 !== d2 && (a2 = a2.child, null !== a2))
    for (gj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
      gj(a2, b2, c2), a2 = a2.sibling;
}
function hj(a2, b2, c2) {
  var d2 = a2.tag, e2 = 5 === d2 || 6 === d2;
  if (e2)
    a2 = e2 ? a2.stateNode : a2.stateNode.instance, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (4 !== d2 && (a2 = a2.child, null !== a2))
    for (hj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
      hj(a2, b2, c2), a2 = a2.sibling;
}
function cj(a2, b2) {
  for (var c2 = b2, d2 = false, e2, f2; ; ) {
    if (!d2) {
      d2 = c2.return;
      a:
        for (; ; ) {
          if (null === d2)
            throw Error(y$3(160));
          e2 = d2.stateNode;
          switch (d2.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
            case 4:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
          }
          d2 = d2.return;
        }
      d2 = true;
    }
    if (5 === c2.tag || 6 === c2.tag) {
      a:
        for (var g2 = a2, h2 = c2, k2 = h2; ; )
          if (bj(g2, k2), null !== k2.child && 4 !== k2.tag)
            k2.child.return = k2, k2 = k2.child;
          else {
            if (k2 === h2)
              break a;
            for (; null === k2.sibling; ) {
              if (null === k2.return || k2.return === h2)
                break a;
              k2 = k2.return;
            }
            k2.sibling.return = k2.return;
            k2 = k2.sibling;
          }
      f2 ? (g2 = e2, h2 = c2.stateNode, 8 === g2.nodeType ? g2.parentNode.removeChild(h2) : g2.removeChild(h2)) : e2.removeChild(c2.stateNode);
    } else if (4 === c2.tag) {
      if (null !== c2.child) {
        e2 = c2.stateNode.containerInfo;
        f2 = true;
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
    } else if (bj(a2, c2), null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
      4 === c2.tag && (d2 = false);
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function ij(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c2 = b2.updateQueue;
      c2 = null !== c2 ? c2.lastEffect : null;
      if (null !== c2) {
        var d2 = c2 = c2.next;
        do
          3 === (d2.tag & 3) && (a2 = d2.destroy, d2.destroy = void 0, void 0 !== a2 && a2()), d2 = d2.next;
        while (d2 !== c2);
      }
      return;
    case 1:
      return;
    case 5:
      c2 = b2.stateNode;
      if (null != c2) {
        d2 = b2.memoizedProps;
        var e2 = null !== a2 ? a2.memoizedProps : d2;
        a2 = b2.type;
        var f2 = b2.updateQueue;
        b2.updateQueue = null;
        if (null !== f2) {
          c2[xf] = d2;
          "input" === a2 && "radio" === d2.type && null != d2.name && $a(c2, d2);
          wb(a2, e2);
          b2 = wb(a2, d2);
          for (e2 = 0; e2 < f2.length; e2 += 2) {
            var g2 = f2[e2], h2 = f2[e2 + 1];
            "style" === g2 ? tb(c2, h2) : "dangerouslySetInnerHTML" === g2 ? ob(c2, h2) : "children" === g2 ? pb(c2, h2) : qa(c2, g2, h2, b2);
          }
          switch (a2) {
            case "input":
              ab(c2, d2);
              break;
            case "textarea":
              ib(c2, d2);
              break;
            case "select":
              a2 = c2._wrapperState.wasMultiple, c2._wrapperState.wasMultiple = !!d2.multiple, f2 = d2.value, null != f2 ? fb(c2, !!d2.multiple, f2, false) : a2 !== !!d2.multiple && (null != d2.defaultValue ? fb(c2, !!d2.multiple, d2.defaultValue, true) : fb(c2, !!d2.multiple, d2.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (null === b2.stateNode)
        throw Error(y$3(162));
      b2.stateNode.nodeValue = b2.memoizedProps;
      return;
    case 3:
      c2 = b2.stateNode;
      c2.hydrate && (c2.hydrate = false, Cc(c2.containerInfo));
      return;
    case 12:
      return;
    case 13:
      null !== b2.memoizedState && (jj = O$1(), aj(b2.child, true));
      kj(b2);
      return;
    case 19:
      kj(b2);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b2, null !== b2.memoizedState);
      return;
  }
  throw Error(y$3(163));
}
function kj(a2) {
  var b2 = a2.updateQueue;
  if (null !== b2) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    null === c2 && (c2 = a2.stateNode = new Ui());
    b2.forEach(function(b3) {
      var d2 = lj.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function mj(a2, b2) {
  return null !== a2 && (a2 = a2.memoizedState, null === a2 || null !== a2.dehydrated) ? (b2 = b2.memoizedState, null !== b2 && null === b2.dehydrated) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X$1 = 0, U$1 = null, Y = null, W$1 = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O$1() + 500;
}
var Z$1 = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return 0 !== (X$1 & 48) ? O$1() : -1 !== Fj ? Fj : Fj = O$1();
}
function Ig(a2) {
  a2 = a2.mode;
  if (0 === (a2 & 2))
    return 1;
  if (0 === (a2 & 4))
    return 99 === eg() ? 1 : 2;
  0 === Gj && (Gj = tj);
  if (0 !== kg.transition) {
    0 !== Hj && (Hj = null !== vj ? vj.pendingLanes : 0);
    a2 = Gj;
    var b2 = 4186112 & ~Hj;
    b2 &= -b2;
    0 === b2 && (a2 = 4186112 & ~a2, b2 = a2 & -a2, 0 === b2 && (b2 = 8192));
    return b2;
  }
  a2 = eg();
  0 !== (X$1 & 4) && 98 === a2 ? a2 = Xc(12, Gj) : (a2 = Sc(a2), a2 = Xc(a2, Gj));
  return a2;
}
function Jg(a2, b2, c2) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y$3(185));
  a2 = Kj(a2, b2);
  if (null === a2)
    return null;
  $c(a2, b2, c2);
  a2 === U$1 && (Hi |= b2, 4 === V && Ii(a2, W$1));
  var d2 = eg();
  1 === b2 ? 0 !== (X$1 & 8) && 0 === (X$1 & 48) ? Lj(a2) : (Mj(a2, c2), 0 === X$1 && (wj(), ig())) : (0 === (X$1 & 4) || 98 !== d2 && 99 !== d2 || (null === Cj ? Cj = /* @__PURE__ */ new Set([a2]) : Cj.add(a2)), Mj(a2, c2));
  vj = a2;
}
function Kj(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; null !== a2; )
    a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
function Mj(a2, b2) {
  for (var c2 = a2.callbackNode, d2 = a2.suspendedLanes, e2 = a2.pingedLanes, f2 = a2.expirationTimes, g2 = a2.pendingLanes; 0 < g2; ) {
    var h2 = 31 - Vc(g2), k2 = 1 << h2, l2 = f2[h2];
    if (-1 === l2) {
      if (0 === (k2 & d2) || 0 !== (k2 & e2)) {
        l2 = b2;
        Rc(k2);
        var n2 = F$2;
        f2[h2] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b2 && (a2.expiredLanes |= k2);
    g2 &= ~k2;
  }
  d2 = Uc(a2, a2 === U$1 ? W$1 : 0);
  b2 = F$2;
  if (0 === d2)
    null !== c2 && (c2 !== Zf && Pf(c2), a2.callbackNode = null, a2.callbackPriority = 0);
  else {
    if (null !== c2) {
      if (a2.callbackPriority === b2)
        return;
      c2 !== Zf && Pf(c2);
    }
    15 === b2 ? (c2 = Lj.bind(null, a2), null === ag ? (ag = [c2], bg = Of(Uf, jg)) : ag.push(c2), c2 = Zf) : 14 === b2 ? c2 = hg(99, Lj.bind(null, a2)) : (c2 = Tc(b2), c2 = hg(c2, Nj.bind(null, a2)));
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Nj(a2) {
  Fj = -1;
  Hj = Gj = 0;
  if (0 !== (X$1 & 48))
    throw Error(y$3(327));
  var b2 = a2.callbackNode;
  if (Oj() && a2.callbackNode !== b2)
    return null;
  var c2 = Uc(a2, a2 === U$1 ? W$1 : 0);
  if (0 === c2)
    return null;
  var d2 = c2;
  var e2 = X$1;
  X$1 |= 16;
  var f2 = Pj();
  if (U$1 !== a2 || W$1 !== d2)
    wj(), Qj(a2, d2);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a2, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X$1 = e2;
  null !== Y ? d2 = 0 : (U$1 = null, W$1 = 0, d2 = V);
  if (0 !== (tj & Hi))
    Qj(a2, 0);
  else if (0 !== d2) {
    2 === d2 && (X$1 |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), c2 = Wc(a2), 0 !== c2 && (d2 = Tj(a2, c2)));
    if (1 === d2)
      throw b2 = sj, Qj(a2, 0), Ii(a2, c2), Mj(a2, O$1()), b2;
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = c2;
    switch (d2) {
      case 0:
      case 1:
        throw Error(y$3(345));
      case 2:
        Uj(a2);
        break;
      case 3:
        Ii(a2, c2);
        if ((c2 & 62914560) === c2 && (d2 = jj + 500 - O$1(), 10 < d2)) {
          if (0 !== Uc(a2, 0))
            break;
          e2 = a2.suspendedLanes;
          if ((e2 & c2) !== c2) {
            Hg();
            a2.pingedLanes |= a2.suspendedLanes & e2;
            break;
          }
          a2.timeoutHandle = of(Uj.bind(null, a2), d2);
          break;
        }
        Uj(a2);
        break;
      case 4:
        Ii(a2, c2);
        if ((c2 & 4186112) === c2)
          break;
        d2 = a2.eventTimes;
        for (e2 = -1; 0 < c2; ) {
          var g2 = 31 - Vc(c2);
          f2 = 1 << g2;
          g2 = d2[g2];
          g2 > e2 && (e2 = g2);
          c2 &= ~f2;
        }
        c2 = e2;
        c2 = O$1() - c2;
        c2 = (120 > c2 ? 120 : 480 > c2 ? 480 : 1080 > c2 ? 1080 : 1920 > c2 ? 1920 : 3e3 > c2 ? 3e3 : 4320 > c2 ? 4320 : 1960 * nj(c2 / 1960)) - c2;
        if (10 < c2) {
          a2.timeoutHandle = of(Uj.bind(null, a2), c2);
          break;
        }
        Uj(a2);
        break;
      case 5:
        Uj(a2);
        break;
      default:
        throw Error(y$3(329));
    }
  }
  Mj(a2, O$1());
  return a2.callbackNode === b2 ? Nj.bind(null, a2) : null;
}
function Ii(a2, b2) {
  b2 &= ~uj;
  b2 &= ~Hi;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - Vc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Lj(a2) {
  if (0 !== (X$1 & 48))
    throw Error(y$3(327));
  Oj();
  if (a2 === U$1 && 0 !== (a2.expiredLanes & W$1)) {
    var b2 = W$1;
    var c2 = Tj(a2, b2);
    0 !== (tj & Hi) && (b2 = Uc(a2, b2), c2 = Tj(a2, b2));
  } else
    b2 = Uc(a2, 0), c2 = Tj(a2, b2);
  0 !== a2.tag && 2 === c2 && (X$1 |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), b2 = Wc(a2), 0 !== b2 && (c2 = Tj(a2, b2)));
  if (1 === c2)
    throw c2 = sj, Qj(a2, 0), Ii(a2, b2), Mj(a2, O$1()), c2;
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Uj(a2);
  Mj(a2, O$1());
  return null;
}
function Vj() {
  if (null !== Cj) {
    var a2 = Cj;
    Cj = null;
    a2.forEach(function(a3) {
      a3.expiredLanes |= 24 & a3.pendingLanes;
      Mj(a3, O$1());
    });
  }
  ig();
}
function Wj(a2, b2) {
  var c2 = X$1;
  X$1 |= 1;
  try {
    return a2(b2);
  } finally {
    X$1 = c2, 0 === X$1 && (wj(), ig());
  }
}
function Xj(a2, b2) {
  var c2 = X$1;
  X$1 &= -2;
  X$1 |= 8;
  try {
    return a2(b2);
  } finally {
    X$1 = c2, 0 === X$1 && (wj(), ig());
  }
}
function ni(a2, b2) {
  I$2(rj, qj);
  qj |= b2;
  tj |= b2;
}
function Ki() {
  qj = rj.current;
  H$2(rj);
}
function Qj(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  -1 !== c2 && (a2.timeoutHandle = -1, pf(c2));
  if (null !== Y)
    for (c2 = Y.return; null !== c2; ) {
      var d2 = c2;
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && Gf();
          break;
        case 3:
          fh();
          H$2(N$1);
          H$2(M$1);
          uh();
          break;
        case 5:
          hh(d2);
          break;
        case 4:
          fh();
          break;
        case 13:
          H$2(P$1);
          break;
        case 19:
          H$2(P$1);
          break;
        case 10:
          rg(d2);
          break;
        case 23:
        case 24:
          Ki();
      }
      c2 = c2.return;
    }
  U$1 = a2;
  Y = Tg(a2.current, null);
  W$1 = qj = tj = b2;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a2, b2) {
  do {
    var c2 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d2 = R$1.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        yh = false;
      }
      xh = 0;
      T = S$1 = R$1 = null;
      zh = false;
      pj.current = null;
      if (null === c2 || null === c2.return) {
        V = 1;
        sj = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = W$1;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2;
          if (0 === (h2.mode & 2)) {
            var n2 = h2.alternate;
            n2 ? (h2.updateQueue = n2.updateQueue, h2.memoizedState = n2.memoizedState, h2.lanes = n2.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A2 = 0 !== (P$1.current & 1), p2 = g2;
          do {
            var C2;
            if (C2 = 13 === p2.tag) {
              var x2 = p2.memoizedState;
              if (null !== x2)
                C2 = null !== x2.dehydrated ? true : false;
              else {
                var w2 = p2.memoizedProps;
                C2 = void 0 === w2.fallback ? false : true !== w2.unstable_avoidThisFallback ? true : A2 ? false : true;
              }
            }
            if (C2) {
              var z2 = p2.updateQueue;
              if (null === z2) {
                var u2 = /* @__PURE__ */ new Set();
                u2.add(l2);
                p2.updateQueue = u2;
              } else
                z2.add(l2);
              if (0 === (p2.mode & 2)) {
                p2.flags |= 64;
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (1 === h2.tag)
                  if (null === h2.alternate)
                    h2.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h2, t2);
                  }
                h2.lanes |= 1;
                break a;
              }
              k2 = void 0;
              h2 = b2;
              var q2 = f2.pingCache;
              null === q2 ? (q2 = f2.pingCache = new Oi(), k2 = /* @__PURE__ */ new Set(), q2.set(l2, k2)) : (k2 = q2.get(l2), void 0 === k2 && (k2 = /* @__PURE__ */ new Set(), q2.set(l2, k2)));
              if (!k2.has(h2)) {
                k2.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b2;
              break a;
            }
            p2 = p2.return;
          } while (null !== p2);
          k2 = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        5 !== V && (V = 2);
        k2 = Mi(k2, h2);
        p2 = g2;
        do {
          switch (p2.tag) {
            case 3:
              f2 = k2;
              p2.flags |= 4096;
              b2 &= -b2;
              p2.lanes |= b2;
              var J2 = Pi(p2, f2, b2);
              Bg(p2, J2);
              break a;
            case 1:
              f2 = k2;
              var K2 = p2.type, Q2 = p2.stateNode;
              if (0 === (p2.flags & 64) && ("function" === typeof K2.getDerivedStateFromError || null !== Q2 && "function" === typeof Q2.componentDidCatch && (null === Ti || !Ti.has(Q2)))) {
                p2.flags |= 4096;
                b2 &= -b2;
                p2.lanes |= b2;
                var L2 = Si(p2, f2, b2);
                Bg(p2, L2);
                break a;
              }
          }
          p2 = p2.return;
        } while (null !== p2);
      }
      Zj(c2);
    } catch (va) {
      b2 = va;
      Y === c2 && null !== c2 && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a2 = oj.current;
  oj.current = Gh;
  return null === a2 ? Gh : a2;
}
function Tj(a2, b2) {
  var c2 = X$1;
  X$1 |= 16;
  var d2 = Pj();
  U$1 === a2 && W$1 === b2 || Qj(a2, b2);
  do
    try {
      ak();
      break;
    } catch (e2) {
      Sj(a2, e2);
    }
  while (1);
  qg();
  X$1 = c2;
  oj.current = d2;
  if (null !== Y)
    throw Error(y$3(261));
  U$1 = null;
  W$1 = 0;
  return V;
}
function ak() {
  for (; null !== Y; )
    bk(Y);
}
function Rj() {
  for (; null !== Y && !Qf(); )
    bk(Y);
}
function bk(a2) {
  var b2 = ck(a2.alternate, a2, qj);
  a2.memoizedProps = a2.pendingProps;
  null === b2 ? Zj(a2) : Y = b2;
  pj.current = null;
}
function Zj(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if (0 === (b2.flags & 2048)) {
      c2 = Gi(c2, b2, qj);
      if (null !== c2) {
        Y = c2;
        return;
      }
      c2 = b2;
      if (24 !== c2.tag && 23 !== c2.tag || null === c2.memoizedState || 0 !== (qj & 1073741824) || 0 === (c2.mode & 4)) {
        for (var d2 = 0, e2 = c2.child; null !== e2; )
          d2 |= e2.lanes | e2.childLanes, e2 = e2.sibling;
        c2.childLanes = d2;
      }
      null !== a2 && 0 === (a2.flags & 2048) && (null === a2.firstEffect && (a2.firstEffect = b2.firstEffect), null !== b2.lastEffect && (null !== a2.lastEffect && (a2.lastEffect.nextEffect = b2.firstEffect), a2.lastEffect = b2.lastEffect), 1 < b2.flags && (null !== a2.lastEffect ? a2.lastEffect.nextEffect = b2 : a2.firstEffect = b2, a2.lastEffect = b2));
    } else {
      c2 = Li(b2);
      if (null !== c2) {
        c2.flags &= 2047;
        Y = c2;
        return;
      }
      null !== a2 && (a2.firstEffect = a2.lastEffect = null, a2.flags |= 2048);
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y = b2;
      return;
    }
    Y = b2 = a2;
  } while (null !== b2);
  0 === V && (V = 5);
}
function Uj(a2) {
  var b2 = eg();
  gg(99, dk.bind(null, a2, b2));
  return null;
}
function dk(a2, b2) {
  do
    Oj();
  while (null !== yj);
  if (0 !== (X$1 & 48))
    throw Error(y$3(327));
  var c2 = a2.finishedWork;
  if (null === c2)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current)
    throw Error(y$3(177));
  a2.callbackNode = null;
  var d2 = c2.lanes | c2.childLanes, e2 = d2, f2 = a2.pendingLanes & ~e2;
  a2.pendingLanes = e2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= e2;
  a2.mutableReadLanes &= e2;
  a2.entangledLanes &= e2;
  e2 = a2.entanglements;
  for (var g2 = a2.eventTimes, h2 = a2.expirationTimes; 0 < f2; ) {
    var k2 = 31 - Vc(f2), l2 = 1 << k2;
    e2[k2] = 0;
    g2[k2] = -1;
    h2[k2] = -1;
    f2 &= ~l2;
  }
  null !== Cj && 0 === (d2 & 24) && Cj.has(a2) && Cj.delete(a2);
  a2 === U$1 && (Y = U$1 = null, W$1 = 0);
  1 < c2.flags ? null !== c2.lastEffect ? (c2.lastEffect.nextEffect = c2, d2 = c2.firstEffect) : d2 = c2 : d2 = c2.firstEffect;
  if (null !== d2) {
    e2 = X$1;
    X$1 |= 32;
    pj.current = null;
    kf = fd;
    g2 = Ne();
    if (Oe(g2)) {
      if ("selectionStart" in g2)
        h2 = { start: g2.selectionStart, end: g2.selectionEnd };
      else
        a:
          if (h2 = (h2 = g2.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && 0 !== l2.rangeCount) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k2 = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k2.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x2 = 0, w2 = g2, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w2 !== h2 || 0 !== f2 && 3 !== w2.nodeType || (A2 = n2 + f2);
                  w2 !== k2 || 0 !== l2 && 3 !== w2.nodeType || (p2 = n2 + l2);
                  3 === w2.nodeType && (n2 += w2.nodeValue.length);
                  if (null === (u2 = w2.firstChild))
                    break;
                  z2 = w2;
                  w2 = u2;
                }
                for (; ; ) {
                  if (w2 === g2)
                    break b;
                  z2 === h2 && ++C2 === f2 && (A2 = n2);
                  z2 === k2 && ++x2 === l2 && (p2 = n2);
                  if (null !== (u2 = w2.nextSibling))
                    break;
                  w2 = z2;
                  z2 = w2.parentNode;
                }
                w2 = u2;
              }
            h2 = -1 === A2 || -1 === p2 ? null : { start: A2, end: p2 };
          } else
            h2 = null;
      h2 = h2 || { start: 0, end: 0 };
    } else
      h2 = null;
    lf = { focusedElem: g2, selectionRange: h2 };
    fd = false;
    Ij = null;
    Jj = false;
    Z$1 = d2;
    do
      try {
        ek();
      } catch (va) {
        if (null === Z$1)
          throw Error(y$3(330));
        Wi(Z$1, va);
        Z$1 = Z$1.nextEffect;
      }
    while (null !== Z$1);
    Ij = null;
    Z$1 = d2;
    do
      try {
        for (g2 = a2; null !== Z$1; ) {
          var t2 = Z$1.flags;
          t2 & 16 && pb(Z$1.stateNode, "");
          if (t2 & 128) {
            var q2 = Z$1.alternate;
            if (null !== q2) {
              var v2 = q2.ref;
              null !== v2 && ("function" === typeof v2 ? v2(null) : v2.current = null);
            }
          }
          switch (t2 & 1038) {
            case 2:
              fj(Z$1);
              Z$1.flags &= -3;
              break;
            case 6:
              fj(Z$1);
              Z$1.flags &= -3;
              ij(Z$1.alternate, Z$1);
              break;
            case 1024:
              Z$1.flags &= -1025;
              break;
            case 1028:
              Z$1.flags &= -1025;
              ij(Z$1.alternate, Z$1);
              break;
            case 4:
              ij(Z$1.alternate, Z$1);
              break;
            case 8:
              h2 = Z$1;
              cj(g2, h2);
              var J2 = h2.alternate;
              dj(h2);
              null !== J2 && dj(J2);
          }
          Z$1 = Z$1.nextEffect;
        }
      } catch (va) {
        if (null === Z$1)
          throw Error(y$3(330));
        Wi(Z$1, va);
        Z$1 = Z$1.nextEffect;
      }
    while (null !== Z$1);
    v2 = lf;
    q2 = Ne();
    t2 = v2.focusedElem;
    g2 = v2.selectionRange;
    if (q2 !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      null !== g2 && Oe(t2) && (q2 = g2.start, v2 = g2.end, void 0 === v2 && (v2 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t2.textContent.length, J2 = Math.min(g2.start, h2), g2 = void 0 === g2.end ? J2 : Math.min(g2.end, h2), !v2.extend && J2 > g2 && (h2 = g2, g2 = J2, J2 = h2), h2 = Le(t2, J2), f2 = Le(t2, g2), h2 && f2 && (1 !== v2.rangeCount || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q2 = q2.createRange(), q2.setStart(h2.node, h2.offset), v2.removeAllRanges(), J2 > g2 ? (v2.addRange(q2), v2.extend(f2.node, f2.offset)) : (q2.setEnd(f2.node, f2.offset), v2.addRange(q2))))));
      q2 = [];
      for (v2 = t2; v2 = v2.parentNode; )
        1 === v2.nodeType && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      "function" === typeof t2.focus && t2.focus();
      for (t2 = 0; t2 < q2.length; t2++)
        v2 = q2[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a2.current = c2;
    Z$1 = d2;
    do
      try {
        for (t2 = a2; null !== Z$1; ) {
          var K2 = Z$1.flags;
          K2 & 36 && Yi(t2, Z$1.alternate, Z$1);
          if (K2 & 128) {
            q2 = void 0;
            var Q2 = Z$1.ref;
            if (null !== Q2) {
              var L2 = Z$1.stateNode;
              switch (Z$1.tag) {
                case 5:
                  q2 = L2;
                  break;
                default:
                  q2 = L2;
              }
              "function" === typeof Q2 ? Q2(q2) : Q2.current = q2;
            }
          }
          Z$1 = Z$1.nextEffect;
        }
      } catch (va) {
        if (null === Z$1)
          throw Error(y$3(330));
        Wi(Z$1, va);
        Z$1 = Z$1.nextEffect;
      }
    while (null !== Z$1);
    Z$1 = null;
    $f();
    X$1 = e2;
  } else
    a2.current = c2;
  if (xj)
    xj = false, yj = a2, zj = b2;
  else
    for (Z$1 = d2; null !== Z$1; )
      b2 = Z$1.nextEffect, Z$1.nextEffect = null, Z$1.flags & 8 && (K2 = Z$1, K2.sibling = null, K2.stateNode = null), Z$1 = b2;
  d2 = a2.pendingLanes;
  0 === d2 && (Ti = null);
  1 === d2 ? a2 === Ej ? Dj++ : (Dj = 0, Ej = a2) : Dj = 0;
  c2 = c2.stateNode;
  if (Mf && "function" === typeof Mf.onCommitFiberRoot)
    try {
      Mf.onCommitFiberRoot(Lf, c2, void 0, 64 === (c2.current.flags & 64));
    } catch (va) {
    }
  Mj(a2, O$1());
  if (Qi)
    throw Qi = false, a2 = Ri, Ri = null, a2;
  if (0 !== (X$1 & 8))
    return null;
  ig();
  return null;
}
function ek() {
  for (; null !== Z$1; ) {
    var a2 = Z$1.alternate;
    Jj || null === Ij || (0 !== (Z$1.flags & 8) ? dc(Z$1, Ij) && (Jj = true) : 13 === Z$1.tag && mj(a2, Z$1) && dc(Z$1, Ij) && (Jj = true));
    var b2 = Z$1.flags;
    0 !== (b2 & 256) && Xi(a2, Z$1);
    0 === (b2 & 512) || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z$1 = Z$1.nextEffect;
  }
}
function Oj() {
  if (90 !== zj) {
    var a2 = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a2, fk);
  }
  return false;
}
function $i(a2, b2) {
  Aj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a2, b2) {
  Bj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (null === yj)
    return false;
  var a2 = yj;
  yj = null;
  if (0 !== (X$1 & 48))
    throw Error(y$3(331));
  var b2 = X$1;
  X$1 |= 32;
  var c2 = Bj;
  Bj = [];
  for (var d2 = 0; d2 < c2.length; d2 += 2) {
    var e2 = c2[d2], f2 = c2[d2 + 1], g2 = e2.destroy;
    e2.destroy = void 0;
    if ("function" === typeof g2)
      try {
        g2();
      } catch (k2) {
        if (null === f2)
          throw Error(y$3(330));
        Wi(f2, k2);
      }
  }
  c2 = Aj;
  Aj = [];
  for (d2 = 0; d2 < c2.length; d2 += 2) {
    e2 = c2[d2];
    f2 = c2[d2 + 1];
    try {
      var h2 = e2.create;
      e2.destroy = h2();
    } catch (k2) {
      if (null === f2)
        throw Error(y$3(330));
      Wi(f2, k2);
    }
  }
  for (h2 = a2.current.firstEffect; null !== h2; )
    a2 = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a2;
  X$1 = b2;
  ig();
  return true;
}
function gk(a2, b2, c2) {
  b2 = Mi(c2, b2);
  b2 = Pi(a2, b2, 1);
  Ag(a2, b2);
  b2 = Hg();
  a2 = Kj(a2, 1);
  null !== a2 && ($c(a2, 1, b2), Mj(a2, b2));
}
function Wi(a2, b2) {
  if (3 === a2.tag)
    gk(a2, a2, b2);
  else
    for (var c2 = a2.return; null !== c2; ) {
      if (3 === c2.tag) {
        gk(c2, a2, b2);
        break;
      } else if (1 === c2.tag) {
        var d2 = c2.stateNode;
        if ("function" === typeof c2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ti || !Ti.has(d2))) {
          a2 = Mi(b2, a2);
          var e2 = Si(c2, a2, 1);
          Ag(c2, e2);
          e2 = Hg();
          c2 = Kj(c2, 1);
          if (null !== c2)
            $c(c2, 1, e2), Mj(c2, e2);
          else if ("function" === typeof d2.componentDidCatch && (null === Ti || !Ti.has(d2)))
            try {
              d2.componentDidCatch(b2, a2);
            } catch (f2) {
            }
          break;
        }
      }
      c2 = c2.return;
    }
}
function Yj(a2, b2, c2) {
  var d2 = a2.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = Hg();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  U$1 === a2 && (W$1 & c2) === c2 && (4 === V || 3 === V && (W$1 & 62914560) === W$1 && 500 > O$1() - jj ? Qj(a2, 0) : uj |= c2);
  Mj(a2, b2);
}
function lj(a2, b2) {
  var c2 = a2.stateNode;
  null !== c2 && c2.delete(b2);
  b2 = 0;
  0 === b2 && (b2 = a2.mode, 0 === (b2 & 2) ? b2 = 1 : 0 === (b2 & 4) ? b2 = 99 === eg() ? 1 : 2 : (0 === Gj && (Gj = tj), b2 = Yc(62914560 & ~Gj), 0 === b2 && (b2 = 4194304)));
  c2 = Hg();
  a2 = Kj(a2, b2);
  null !== a2 && ($c(a2, b2, c2), Mj(a2, c2));
}
var ck;
ck = function(a2, b2, c2) {
  var d2 = b2.lanes;
  if (null !== a2)
    if (a2.memoizedProps !== b2.pendingProps || N$1.current)
      ug = true;
    else if (0 !== (c2 & d2))
      ug = 0 !== (a2.flags & 16384) ? true : false;
    else {
      ug = false;
      switch (b2.tag) {
        case 3:
          ri(b2);
          sh();
          break;
        case 5:
          gh(b2);
          break;
        case 1:
          Ff(b2.type) && Jf(b2);
          break;
        case 4:
          eh(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          d2 = b2.memoizedProps.value;
          var e2 = b2.type._context;
          I$2(mg, e2._currentValue);
          e2._currentValue = d2;
          break;
        case 13:
          if (null !== b2.memoizedState) {
            if (0 !== (c2 & b2.child.childLanes))
              return ti(a2, b2, c2);
            I$2(P$1, P$1.current & 1);
            b2 = hi(a2, b2, c2);
            return null !== b2 ? b2.sibling : null;
          }
          I$2(P$1, P$1.current & 1);
          break;
        case 19:
          d2 = 0 !== (c2 & b2.childLanes);
          if (0 !== (a2.flags & 64)) {
            if (d2)
              return Ai(a2, b2, c2);
            b2.flags |= 64;
          }
          e2 = b2.memoizedState;
          null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
          I$2(P$1, P$1.current);
          if (d2)
            break;
          else
            return null;
        case 23:
        case 24:
          return b2.lanes = 0, mi(a2, b2, c2);
      }
      return hi(a2, b2, c2);
    }
  else
    ug = false;
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      d2 = b2.type;
      null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
      a2 = b2.pendingProps;
      e2 = Ef(b2, M$1.current);
      tg(b2, c2);
      e2 = Ch(null, b2, d2, a2, e2, c2);
      b2.flags |= 1;
      if ("object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof) {
        b2.tag = 1;
        b2.memoizedState = null;
        b2.updateQueue = null;
        if (Ff(d2)) {
          var f2 = true;
          Jf(b2);
        } else
          f2 = false;
        b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null;
        xg(b2);
        var g2 = d2.getDerivedStateFromProps;
        "function" === typeof g2 && Gg(b2, d2, g2, a2);
        e2.updater = Kg;
        b2.stateNode = e2;
        e2._reactInternals = b2;
        Og(b2, d2, a2, c2);
        b2 = qi(null, b2, d2, true, f2, c2);
      } else
        b2.tag = 0, fi(null, b2, e2, c2), b2 = b2.child;
      return b2;
    case 16:
      e2 = b2.elementType;
      a: {
        null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        f2 = e2._init;
        e2 = f2(e2._payload);
        b2.type = e2;
        f2 = b2.tag = hk(e2);
        a2 = lg(e2, a2);
        switch (f2) {
          case 0:
            b2 = li(null, b2, e2, a2, c2);
            break a;
          case 1:
            b2 = pi(null, b2, e2, a2, c2);
            break a;
          case 11:
            b2 = gi(null, b2, e2, a2, c2);
            break a;
          case 14:
            b2 = ii(null, b2, e2, lg(e2.type, a2), d2, c2);
            break a;
        }
        throw Error(y$3(306, e2, ""));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), li(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), pi(a2, b2, d2, e2, c2);
    case 3:
      ri(b2);
      d2 = b2.updateQueue;
      if (null === a2 || null === d2)
        throw Error(y$3(282));
      d2 = b2.pendingProps;
      e2 = b2.memoizedState;
      e2 = null !== e2 ? e2.element : null;
      yg(a2, b2);
      Cg(b2, d2, null, c2);
      d2 = b2.memoizedState.element;
      if (d2 === e2)
        sh(), b2 = hi(a2, b2, c2);
      else {
        e2 = b2.stateNode;
        if (f2 = e2.hydrate)
          kh = rf(b2.stateNode.containerInfo.firstChild), jh = b2, f2 = lh = true;
        if (f2) {
          a2 = e2.mutableSourceEagerHydrationData;
          if (null != a2)
            for (e2 = 0; e2 < a2.length; e2 += 2)
              f2 = a2[e2], f2._workInProgressVersionPrimary = a2[e2 + 1], th.push(f2);
          c2 = Zg(b2, null, d2, c2);
          for (b2.child = c2; c2; )
            c2.flags = c2.flags & -3 | 1024, c2 = c2.sibling;
        } else
          fi(a2, b2, d2, c2), sh();
        b2 = b2.child;
      }
      return b2;
    case 5:
      return gh(b2), null === a2 && ph(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, nf(d2, e2) ? g2 = null : null !== f2 && nf(d2, f2) && (b2.flags |= 16), oi(a2, b2), fi(a2, b2, g2, c2), b2.child;
    case 6:
      return null === a2 && ph(b2), null;
    case 13:
      return ti(a2, b2, c2);
    case 4:
      return eh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Yg(b2, null, d2, c2) : fi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), gi(a2, b2, d2, e2, c2);
    case 7:
      return fi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return fi(
        a2,
        b2,
        b2.pendingProps.children,
        c2
      ), b2.child;
    case 12:
      return fi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        g2 = b2.memoizedProps;
        f2 = e2.value;
        var h2 = b2.type._context;
        I$2(mg, h2._currentValue);
        h2._currentValue = f2;
        if (null !== g2)
          if (h2 = g2.value, f2 = He(h2, f2) ? 0 : ("function" === typeof d2._calculateChangedBits ? d2._calculateChangedBits(h2, f2) : 1073741823) | 0, 0 === f2) {
            if (g2.children === e2.children && !N$1.current) {
              b2 = hi(a2, b2, c2);
              break a;
            }
          } else
            for (h2 = b2.child, null !== h2 && (h2.return = b2); null !== h2; ) {
              var k2 = h2.dependencies;
              if (null !== k2) {
                g2 = h2.child;
                for (var l2 = k2.firstContext; null !== l2; ) {
                  if (l2.context === d2 && 0 !== (l2.observedBits & f2)) {
                    1 === h2.tag && (l2 = zg(-1, c2 & -c2), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c2;
                    l2 = h2.alternate;
                    null !== l2 && (l2.lanes |= c2);
                    sg(h2.return, c2);
                    k2.lanes |= c2;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g2 = 10 === h2.tag ? h2.type === b2.type ? null : h2.child : h2.child;
              if (null !== g2)
                g2.return = h2;
              else
                for (g2 = h2; null !== g2; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  h2 = g2.sibling;
                  if (null !== h2) {
                    h2.return = g2.return;
                    g2 = h2;
                    break;
                  }
                  g2 = g2.return;
                }
              h2 = g2;
            }
        fi(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, f2 = b2.pendingProps, d2 = f2.children, tg(b2, c2), e2 = vg(
        e2,
        f2.unstable_observedBits
      ), d2 = d2(e2), b2.flags |= 1, fi(a2, b2, d2, c2), b2.child;
    case 14:
      return e2 = b2.type, f2 = lg(e2, b2.pendingProps), f2 = lg(e2.type, f2), ii(a2, b2, e2, f2, d2, c2);
    case 15:
      return ki(a2, b2, b2.type, b2.pendingProps, d2, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Ff(d2) ? (a2 = true, Jf(b2)) : a2 = false, tg(b2, c2), Mg(b2, d2, e2), Og(b2, d2, e2, c2), qi(null, b2, d2, true, a2, c2);
    case 19:
      return Ai(a2, b2, c2);
    case 23:
      return mi(a2, b2, c2);
    case 24:
      return mi(a2, b2, c2);
  }
  throw Error(y$3(156, b2.tag));
};
function ik(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a2, b2, c2, d2) {
  return new ik(a2, b2, c2, d2);
}
function ji(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function hk(a2) {
  if ("function" === typeof a2)
    return ji(a2) ? 1 : 0;
  if (void 0 !== a2 && null !== a2) {
    a2 = a2.$$typeof;
    if (a2 === Aa)
      return 11;
    if (a2 === Da)
      return 14;
  }
  return 2;
}
function Tg(a2, b2) {
  var c2 = a2.alternate;
  null === c2 ? (c2 = nh(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.nextEffect = null, c2.firstEffect = null, c2.lastEffect = null);
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function Vg(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if ("function" === typeof a2)
    ji(a2) && (g2 = 1);
  else if ("string" === typeof a2)
    g2 = 5;
  else
    a:
      switch (a2) {
        case ua:
          return Xg(c2.children, e2, f2, b2);
        case Ha:
          g2 = 8;
          e2 |= 16;
          break;
        case wa:
          g2 = 8;
          e2 |= 1;
          break;
        case xa:
          return a2 = nh(12, c2, b2, e2 | 8), a2.elementType = xa, a2.type = xa, a2.lanes = f2, a2;
        case Ba:
          return a2 = nh(13, c2, b2, e2), a2.type = Ba, a2.elementType = Ba, a2.lanes = f2, a2;
        case Ca:
          return a2 = nh(19, c2, b2, e2), a2.elementType = Ca, a2.lanes = f2, a2;
        case Ia:
          return vi(c2, e2, f2, b2);
        case Ja:
          return a2 = nh(24, c2, b2, e2), a2.elementType = Ja, a2.lanes = f2, a2;
        default:
          if ("object" === typeof a2 && null !== a2)
            switch (a2.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case za:
                g2 = 9;
                break a;
              case Aa:
                g2 = 11;
                break a;
              case Da:
                g2 = 14;
                break a;
              case Ea:
                g2 = 16;
                d2 = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y$3(130, null == a2 ? a2 : typeof a2, ""));
      }
  b2 = nh(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Xg(a2, b2, c2, d2) {
  a2 = nh(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function vi(a2, b2, c2, d2) {
  a2 = nh(23, a2, d2, b2);
  a2.elementType = Ia;
  a2.lanes = c2;
  return a2;
}
function Ug(a2, b2, c2) {
  a2 = nh(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function Wg(a2, b2, c2) {
  b2 = nh(4, null !== a2.children ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function jk(a2, b2, c2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c2;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a2, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: ta, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function lk(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = Hg(), g2 = Ig(e2);
  a:
    if (c2) {
      c2 = c2._reactInternals;
      b: {
        if (Zb(c2) !== c2 || 1 !== c2.tag)
          throw Error(y$3(170));
        var h2 = c2;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (null !== h2);
        throw Error(y$3(171));
      }
      if (1 === c2.tag) {
        var k2 = c2.type;
        if (Ff(k2)) {
          c2 = If(c2, k2, h2);
          break a;
        }
      }
      c2 = h2;
    } else
      c2 = Cf;
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = zg(f2, g2);
  b2.payload = { element: a2 };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  Ag(e2, b2);
  Jg(e2, g2, f2);
  return g2;
}
function mk(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function nk(a2, b2) {
  a2 = a2.memoizedState;
  if (null !== a2 && null !== a2.dehydrated) {
    var c2 = a2.retryLane;
    a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function ok(a2, b2) {
  nk(a2, b2);
  (a2 = a2.alternate) && nk(a2, b2);
}
function pk() {
  return null;
}
function qk(a2, b2, c2) {
  var d2 = null != c2 && null != c2.hydrationOptions && c2.hydrationOptions.mutableSources || null;
  c2 = new jk(a2, b2, null != c2 && true === c2.hydrate);
  b2 = nh(3, null, null, 2 === b2 ? 7 : 1 === b2 ? 3 : 0);
  c2.current = b2;
  b2.stateNode = c2;
  xg(b2);
  a2[ff] = c2.current;
  cf(8 === a2.nodeType ? a2.parentNode : a2);
  if (d2)
    for (a2 = 0; a2 < d2.length; a2++) {
      b2 = d2[a2];
      var e2 = b2._getVersion;
      e2 = e2(b2._source);
      null == c2.mutableSourceEagerHydrationData ? c2.mutableSourceEagerHydrationData = [b2, e2] : c2.mutableSourceEagerHydrationData.push(b2, e2);
    }
  this._internalRoot = c2;
}
qk.prototype.render = function(a2) {
  lk(a2, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a2 = this._internalRoot, b2 = a2.containerInfo;
  lk(null, a2, null, function() {
    b2[ff] = null;
  });
};
function rk(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
}
function sk(a2, b2) {
  b2 || (b2 = a2 ? 9 === a2.nodeType ? a2.documentElement : a2.firstChild : null, b2 = !(!b2 || 1 !== b2.nodeType || !b2.hasAttribute("data-reactroot")));
  if (!b2)
    for (var c2; c2 = a2.lastChild; )
      a2.removeChild(c2);
  return new qk(a2, 0, b2 ? { hydrate: true } : void 0);
}
function tk(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2._internalRoot;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a3 = mk(g2);
        h2.call(a3);
      };
    }
    lk(b2, g2, a2, e2);
  } else {
    f2 = c2._reactRootContainer = sk(c2, d2);
    g2 = f2._internalRoot;
    if ("function" === typeof e2) {
      var k2 = e2;
      e2 = function() {
        var a3 = mk(g2);
        k2.call(a3);
      };
    }
    Xj(function() {
      lk(b2, g2, a2, e2);
    });
  }
  return mk(g2);
}
ec = function(a2) {
  if (13 === a2.tag) {
    var b2 = Hg();
    Jg(a2, 4, b2);
    ok(a2, 4);
  }
};
fc = function(a2) {
  if (13 === a2.tag) {
    var b2 = Hg();
    Jg(a2, 67108864, b2);
    ok(a2, 67108864);
  }
};
gc = function(a2) {
  if (13 === a2.tag) {
    var b2 = Hg(), c2 = Ig(a2);
    Jg(a2, c2, b2);
    ok(a2, c2);
  }
};
hc = function(a2, b2) {
  return b2();
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      ab(a2, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(y$3(90));
            Wa(d2);
            ab(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Wj;
Hb = function(a2, b2, c2, d2, e2) {
  var f2 = X$1;
  X$1 |= 4;
  try {
    return gg(98, a2.bind(null, b2, c2, d2, e2));
  } finally {
    X$1 = f2, 0 === X$1 && (wj(), ig());
  }
};
Ib = function() {
  0 === (X$1 & 49) && (Vj(), Oj());
};
Jb = function(a2, b2) {
  var c2 = X$1;
  X$1 |= 2;
  try {
    return a2(b2);
  } finally {
    X$1 = c2, 0 === X$1 && (wj(), ig());
  }
};
function uk(a2, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!rk(b2))
    throw Error(y$3(200));
  return kk(a2, b2, null, c2);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = cc(a2);
  return null === a2 ? null : a2.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a2) {
  if (null == a2)
    return null;
  if (1 === a2.nodeType)
    return a2;
  var b2 = a2._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a2.render)
      throw Error(y$3(188));
    throw Error(y$3(268, Object.keys(a2)));
  }
  a2 = cc(b2);
  a2 = null === a2 ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2, b2) {
  var c2 = X$1;
  if (0 !== (c2 & 48))
    return a2(b2);
  X$1 |= 1;
  try {
    if (a2)
      return gg(99, a2.bind(null, b2));
  } finally {
    X$1 = c2, ig();
  }
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!rk(b2))
    throw Error(y$3(200));
  return tk(null, a2, b2, true, c2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!rk(b2))
    throw Error(y$3(200));
  return tk(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!rk(a2))
    throw Error(y$3(40));
  return a2._reactRootContainer ? (Xj(function() {
    tk(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a2, b2) {
  return uk(a2, b2, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!rk(c2))
    throw Error(y$3(200));
  if (null == a2 || void 0 === a2._reactInternals)
    throw Error(y$3(38));
  return tk(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
var ReactReduxContext = /* @__PURE__ */ React.createContext(null);
function defaultNoopBatch(callback) {
  callback();
}
var batch = defaultNoopBatch;
var setBatch = function setBatch2(newBatch) {
  return batch = newBatch;
};
var getBatch = function getBatch2() {
  return batch;
};
function createListenerCollection() {
  var batch2 = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify2() {
      batch2(function() {
        var listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get2() {
      var listeners = [];
      var listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify: function notify() {
  },
  get: function get() {
    return [];
  }
};
function createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  var subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? react.exports.useLayoutEffect : react.exports.useEffect;
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$3 = react.exports, g$3 = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if ("function" === typeof Symbol && Symbol.for) {
  var h$3 = Symbol.for;
  g$3 = h$3("react.element");
  reactJsxRuntime_production_min.Fragment = h$3("react.fragment");
}
var m$3 = f$3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n$3 = Object.prototype.hasOwnProperty, p$3 = { key: true, ref: true, __self: true, __source: true };
function q$3(c2, a2, k2) {
  var b2, d2 = {}, e2 = null, l2 = null;
  void 0 !== k2 && (e2 = "" + k2);
  void 0 !== a2.key && (e2 = "" + a2.key);
  void 0 !== a2.ref && (l2 = a2.ref);
  for (b2 in a2)
    n$3.call(a2, b2) && !p$3.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a2 = c2.defaultProps, a2)
      void 0 === d2[b2] && (d2[b2] = a2[b2]);
  return { $$typeof: g$3, type: c2, key: e2, ref: l2, props: d2, _owner: m$3.current };
}
reactJsxRuntime_production_min.jsx = q$3;
reactJsxRuntime_production_min.jsxs = q$3;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
function Provider(_ref) {
  var store = _ref.store, context = _ref.context, children = _ref.children;
  var contextValue = react.exports.useMemo(function() {
    var subscription = createSubscription(store);
    return {
      store,
      subscription
    };
  }, [store]);
  var previousState = react.exports.useMemo(function() {
    return store.getState();
  }, [store]);
  useIsomorphicLayoutEffect(function() {
    var subscription = contextValue.subscription;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return function() {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return /* @__PURE__ */ jsx(Context.Provider, {
    value: contextValue,
    children
  });
}
var reactIs$1 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$2 = "function" === typeof Symbol && Symbol.for, c$2 = b$2 ? Symbol.for("react.element") : 60103, d$2 = b$2 ? Symbol.for("react.portal") : 60106, e$1 = b$2 ? Symbol.for("react.fragment") : 60107, f$2 = b$2 ? Symbol.for("react.strict_mode") : 60108, g$2 = b$2 ? Symbol.for("react.profiler") : 60114, h$2 = b$2 ? Symbol.for("react.provider") : 60109, k$2 = b$2 ? Symbol.for("react.context") : 60110, l$2 = b$2 ? Symbol.for("react.async_mode") : 60111, m$2 = b$2 ? Symbol.for("react.concurrent_mode") : 60111, n$2 = b$2 ? Symbol.for("react.forward_ref") : 60112, p$2 = b$2 ? Symbol.for("react.suspense") : 60113, q$2 = b$2 ? Symbol.for("react.suspense_list") : 60120, r$2 = b$2 ? Symbol.for("react.memo") : 60115, t$1 = b$2 ? Symbol.for("react.lazy") : 60116, v$2 = b$2 ? Symbol.for("react.block") : 60121, w$2 = b$2 ? Symbol.for("react.fundamental") : 60117, x$2 = b$2 ? Symbol.for("react.responder") : 60118, y$2 = b$2 ? Symbol.for("react.scope") : 60119;
function z$2(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c$2:
        switch (a2 = a2.type, a2) {
          case l$2:
          case m$2:
          case e$1:
          case g$2:
          case f$2:
          case p$2:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$2:
              case n$2:
              case t$1:
              case r$2:
              case h$2:
                return a2;
              default:
                return u2;
            }
        }
      case d$2:
        return u2;
    }
  }
}
function A$2(a2) {
  return z$2(a2) === m$2;
}
reactIs_production_min$1.AsyncMode = l$2;
reactIs_production_min$1.ConcurrentMode = m$2;
reactIs_production_min$1.ContextConsumer = k$2;
reactIs_production_min$1.ContextProvider = h$2;
reactIs_production_min$1.Element = c$2;
reactIs_production_min$1.ForwardRef = n$2;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t$1;
reactIs_production_min$1.Memo = r$2;
reactIs_production_min$1.Portal = d$2;
reactIs_production_min$1.Profiler = g$2;
reactIs_production_min$1.StrictMode = f$2;
reactIs_production_min$1.Suspense = p$2;
reactIs_production_min$1.isAsyncMode = function(a2) {
  return A$2(a2) || z$2(a2) === l$2;
};
reactIs_production_min$1.isConcurrentMode = A$2;
reactIs_production_min$1.isContextConsumer = function(a2) {
  return z$2(a2) === k$2;
};
reactIs_production_min$1.isContextProvider = function(a2) {
  return z$2(a2) === h$2;
};
reactIs_production_min$1.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === c$2;
};
reactIs_production_min$1.isForwardRef = function(a2) {
  return z$2(a2) === n$2;
};
reactIs_production_min$1.isFragment = function(a2) {
  return z$2(a2) === e$1;
};
reactIs_production_min$1.isLazy = function(a2) {
  return z$2(a2) === t$1;
};
reactIs_production_min$1.isMemo = function(a2) {
  return z$2(a2) === r$2;
};
reactIs_production_min$1.isPortal = function(a2) {
  return z$2(a2) === d$2;
};
reactIs_production_min$1.isProfiler = function(a2) {
  return z$2(a2) === g$2;
};
reactIs_production_min$1.isStrictMode = function(a2) {
  return z$2(a2) === f$2;
};
reactIs_production_min$1.isSuspense = function(a2) {
  return z$2(a2) === p$2;
};
reactIs_production_min$1.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === e$1 || a2 === m$2 || a2 === g$2 || a2 === f$2 || a2 === p$2 || a2 === q$2 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t$1 || a2.$$typeof === r$2 || a2.$$typeof === h$2 || a2.$$typeof === k$2 || a2.$$typeof === n$2 || a2.$$typeof === w$2 || a2.$$typeof === x$2 || a2.$$typeof === y$2 || a2.$$typeof === v$2);
};
reactIs_production_min$1.typeOf = z$2;
{
  reactIs$1.exports = reactIs_production_min$1;
}
var reactIs = reactIs$1.exports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var reactIs_production_min = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = 60103, c$1 = 60106, d$1 = 60107, e = 60108, f$1 = 60114, g$1 = 60109, h$1 = 60110, k$1 = 60112, l$1 = 60113, m$1 = 60120, n$1 = 60115, p$1 = 60116, q$1 = 60121, r$1 = 60122, u$1 = 60117, v$1 = 60129, w$1 = 60131;
if ("function" === typeof Symbol && Symbol.for) {
  var x$1 = Symbol.for;
  b$1 = x$1("react.element");
  c$1 = x$1("react.portal");
  d$1 = x$1("react.fragment");
  e = x$1("react.strict_mode");
  f$1 = x$1("react.profiler");
  g$1 = x$1("react.provider");
  h$1 = x$1("react.context");
  k$1 = x$1("react.forward_ref");
  l$1 = x$1("react.suspense");
  m$1 = x$1("react.suspense_list");
  n$1 = x$1("react.memo");
  p$1 = x$1("react.lazy");
  q$1 = x$1("react.block");
  r$1 = x$1("react.server.block");
  u$1 = x$1("react.fundamental");
  v$1 = x$1("react.debug_trace_mode");
  w$1 = x$1("react.legacy_hidden");
}
function y$1(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var t2 = a2.$$typeof;
    switch (t2) {
      case b$1:
        switch (a2 = a2.type, a2) {
          case d$1:
          case f$1:
          case e:
          case l$1:
          case m$1:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case h$1:
              case k$1:
              case p$1:
              case n$1:
              case g$1:
                return a2;
              default:
                return t2;
            }
        }
      case c$1:
        return t2;
    }
  }
}
var z$1 = g$1, A$1 = b$1, B$1 = k$1, C = d$1, D$1 = p$1, E$1 = n$1, F$1 = c$1, G$1 = f$1, H$1 = e, I$1 = l$1;
reactIs_production_min.ContextConsumer = h$1;
reactIs_production_min.ContextProvider = z$1;
reactIs_production_min.Element = A$1;
reactIs_production_min.ForwardRef = B$1;
reactIs_production_min.Fragment = C;
reactIs_production_min.Lazy = D$1;
reactIs_production_min.Memo = E$1;
reactIs_production_min.Portal = F$1;
reactIs_production_min.Profiler = G$1;
reactIs_production_min.StrictMode = H$1;
reactIs_production_min.Suspense = I$1;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a2) {
  return y$1(a2) === h$1;
};
reactIs_production_min.isContextProvider = function(a2) {
  return y$1(a2) === g$1;
};
reactIs_production_min.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === b$1;
};
reactIs_production_min.isForwardRef = function(a2) {
  return y$1(a2) === k$1;
};
reactIs_production_min.isFragment = function(a2) {
  return y$1(a2) === d$1;
};
reactIs_production_min.isLazy = function(a2) {
  return y$1(a2) === p$1;
};
reactIs_production_min.isMemo = function(a2) {
  return y$1(a2) === n$1;
};
reactIs_production_min.isPortal = function(a2) {
  return y$1(a2) === c$1;
};
reactIs_production_min.isProfiler = function(a2) {
  return y$1(a2) === f$1;
};
reactIs_production_min.isStrictMode = function(a2) {
  return y$1(a2) === e;
};
reactIs_production_min.isSuspense = function(a2) {
  return y$1(a2) === l$1;
};
reactIs_production_min.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === d$1 || a2 === f$1 || a2 === v$1 || a2 === e || a2 === l$1 || a2 === m$1 || a2 === w$1 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === p$1 || a2.$$typeof === n$1 || a2.$$typeof === g$1 || a2.$$typeof === h$1 || a2.$$typeof === k$1 || a2.$$typeof === u$1 || a2.$$typeof === q$1 || a2[0] === r$1) ? true : false;
};
reactIs_production_min.typeOf = y$1;
function useReduxContext() {
  var contextValue = react.exports.useContext(ReactReduxContext);
  return contextValue;
}
function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function() {
    return react.exports.useContext(context);
  };
  return function useStore2() {
    var _useReduxContext = useReduxContext$1(), store = _useReduxContext.store;
    return store;
  };
}
var useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useStore$1 = context === ReactReduxContext ? useStore : createStoreHook(context);
  return function useDispatch2() {
    var store = useStore$1();
    return store.dispatch;
  };
}
var useDispatch = /* @__PURE__ */ createDispatchHook();
var refEquality = function refEquality2(a2, b2) {
  return a2 === b2;
};
function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = react.exports.useReducer(function(s2) {
    return s2 + 1;
  }, 0), forceRender = _useReducer[1];
  var subscription = react.exports.useMemo(function() {
    return createSubscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = react.exports.useRef();
  var latestSelector = react.exports.useRef();
  var latestStoreState = react.exports.useRef();
  var latestSelectedState = react.exports.useRef();
  var storeState = store.getState();
  var selectedState;
  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      var newSelectedState = selector(storeState);
      if (latestSelectedState.current === void 0 || !equalityFn(newSelectedState, latestSelectedState.current)) {
        selectedState = newSelectedState;
      } else {
        selectedState = latestSelectedState.current;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }
    throw err;
  }
  useIsomorphicLayoutEffect(function() {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = void 0;
  });
  useIsomorphicLayoutEffect(function() {
    function checkForUpdates() {
      try {
        var newStoreState = store.getState();
        if (newStoreState === latestStoreState.current) {
          return;
        }
        var _newSelectedState = latestSelector.current(newStoreState);
        if (equalityFn(_newSelectedState, latestSelectedState.current)) {
          return;
        }
        latestSelectedState.current = _newSelectedState;
        latestStoreState.current = newStoreState;
      } catch (err) {
        latestSubscriptionCallbackError.current = err;
      }
      forceRender();
    }
    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function() {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function() {
    return react.exports.useContext(context);
  };
  return function useSelector2(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }
    var _useReduxContext = useReduxContext$1(), store = _useReduxContext.store, contextSub = _useReduxContext.subscription;
    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    react.exports.useDebugValue(selectedState);
    return selectedState;
  };
}
var useSelector = /* @__PURE__ */ createSelectorHook();
setBatch(reactDom.exports.unstable_batchedUpdates);
function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
    t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n2) {
  return !!n2 && !!n2[Q];
}
function t(n2) {
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3)
      return false;
    var r2 = Object.getPrototypeOf(n3);
    if (null === r2)
      return true;
    var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
}
function i(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e2) {
    t2 && "symbol" == typeof e2 || r2(e2, n2[e2], n2);
  }) : n2.forEach(function(t3, e2) {
    return r2(e2, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, r2) {
  return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return 2 === o(n2) ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e2 = o(n2);
  2 === e2 ? n2.set(r2, t2) : 3 === e2 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];
  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o2 = r2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e2) {
  return void 0 === e2 && (e2 = false), y(n2) || r(n2) || !t(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e2 && i(n2, function(n3, r2) {
    return d(r2, true);
  }, true), n2);
}
function h() {
  n(2);
}
function y(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function m(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _() {
  return U;
}
function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}
function g(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var r2 = n2[Q];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.O = true;
}
function P(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = void 0 !== r2 && r2 !== i2;
  return e2.h.g || b("ES5").S(e2, r2, o2), o2 ? (i2[Q].P && (O(e2), n(4)), t(r2) && (r2 = M(e2, r2), e2.l || x(e2, r2)), e2.u && b("Patches").M(i2[Q].t, r2, e2.u, e2.s)) : r2 = M(e2, i2, []), O(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H ? r2 : void 0;
}
function M(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e2 = r2[Q];
  if (!e2)
    return i(r2, function(i2, o3) {
      return A(n2, e2, r2, i2, o3, t2);
    }, true), r2;
  if (e2.A !== n2)
    return r2;
  if (!e2.P)
    return x(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = 4 === e2.i || 5 === e2.i ? e2.o = l(e2.k) : e2.o;
    i(3 === e2.i ? new Set(o2) : o2, function(r3, i2) {
      return A(n2, e2, o2, r3, i2, t2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").R(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A(e2, i2, o2, a2, c2, s2) {
  if (r(c2)) {
    var v2 = M(e2, c2, s2 && i2 && 3 !== i2.i && !u(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, v2), !r(v2))
      return;
    e2.m = false;
  }
  if (t(c2) && !y(c2)) {
    if (!e2.h.F && e2._ < 1)
      return;
    M(e2, c2), i2 && i2.A.l || x(e2, c2);
  }
}
function x(n2, r2, t2) {
  void 0 === t2 && (t2 = false), n2.h.F && n2.m && d(r2, t2);
}
function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}
function I(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e2 = Object.getOwnPropertyDescriptor(t2, r2);
      if (e2)
        return e2;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function R(n2, r2, t2) {
  var e2 = s(r2) ? b("MapSet").N(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e2), e2;
}
function D(e2) {
  return r(e2) || n(22, e2), function n2(r2) {
    if (!t(r2))
      return r2;
    var e3, u2 = r2[Q], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = F(r2, c2), u2.I = false;
    } else
      e3 = F(r2, c2);
    return i(e3, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e3, r3, n2(t2));
    }), 3 === c2 ? new Set(e3) : e3;
  }(e2);
}
function F(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
function N() {
  function t2(n2, r2) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r2 : s2[n2] = t3 = { configurable: true, enumerable: r2, get: function() {
      var r3 = this[Q];
      return en.get(r3, n2);
    }, set: function(r3) {
      var t4 = this[Q];
      en.set(t4, n2, r3);
    } }, t3;
  }
  function e2(n2) {
    for (var r2 = n2.length - 1; r2 >= 0; r2--) {
      var t3 = n2[r2][Q];
      if (!t3.P)
        switch (t3.i) {
          case 5:
            a2(t3) && k(t3);
            break;
          case 4:
            o2(t3) && k(t3);
        }
    }
  }
  function o2(n2) {
    for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
      var o3 = e3[i2];
      if (o3 !== Q) {
        var a3 = r2[o3];
        if (void 0 === a3 && !u(r2, o3))
          return true;
        var f2 = t3[o3], s3 = f2 && f2[Q];
        if (s3 ? s3.t !== a3 : !c(f2, a3))
          return true;
      }
    }
    var v2 = !!r2[Q];
    return e3.length !== nn(r2).length + (v2 ? 0 : 1);
  }
  function a2(n2) {
    var r2 = n2.k;
    if (r2.length !== n2.t.length)
      return true;
    var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
    if (t3 && !t3.get)
      return true;
    for (var e3 = 0; e3 < r2.length; e3++)
      if (!r2.hasOwnProperty(e3))
        return true;
    return false;
  }
  var s2 = {};
  m("ES5", { J: function(n2, r2) {
    var e3 = Array.isArray(n2), i2 = function(n3, r3) {
      if (n3) {
        for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++)
          Object.defineProperty(e4, "" + i3, t2(i3, true));
        return e4;
      }
      var o4 = rn(r3);
      delete o4[Q];
      for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
        var f2 = u2[a3];
        o4[f2] = t2(f2, n3 || !!o4[f2].enumerable);
      }
      return Object.create(Object.getPrototypeOf(r3), o4);
    }(e3, n2), o3 = { i: e3 ? 5 : 4, A: r2 ? r2.A : _(), P: false, I: false, D: {}, l: r2, t: n2, k: i2, o: null, O: false, C: false };
    return Object.defineProperty(i2, Q, { value: o3, writable: true }), i2;
  }, S: function(n2, t3, o3) {
    o3 ? r(t3) && t3[Q].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
      if (r2 && "object" == typeof r2) {
        var t4 = r2[Q];
        if (t4) {
          var e3 = t4.t, o4 = t4.k, f2 = t4.D, c2 = t4.i;
          if (4 === c2)
            i(o4, function(r3) {
              r3 !== Q && (void 0 !== e3[r3] || u(e3, r3) ? f2[r3] || n3(o4[r3]) : (f2[r3] = true, k(t4)));
            }), i(e3, function(n4) {
              void 0 !== o4[n4] || u(o4, n4) || (f2[n4] = false, k(t4));
            });
          else if (5 === c2) {
            if (a2(t4) && (k(t4), f2.length = true), o4.length < e3.length)
              for (var s3 = o4.length; s3 < e3.length; s3++)
                f2[s3] = false;
            else
              for (var v2 = e3.length; v2 < o4.length; v2++)
                f2[v2] = true;
            for (var p2 = Math.min(o4.length, e3.length), l2 = 0; l2 < p2; l2++)
              o4.hasOwnProperty(l2) || (f2[l2] = true), void 0 === f2[l2] && n3(o4[l2]);
          }
        }
      }
    }(n2.p[0]), e2(n2.p));
  }, K: function(n2) {
    return 4 === n2.i ? o2(n2) : a2(n2);
  } });
}
var G, U, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X = "undefined" != typeof Map, q = "undefined" != typeof Set, B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state", Z = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q)
    return n2;
  var e2 = p(n2);
  if (!u(e2, r2))
    return function(n3, r3, t2) {
      var e3, i3 = I(r3, t2);
      return i3 ? "value" in i3 ? i3.value : null === (e3 = i3.get) || void 0 === e3 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = R(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, r2, t2) {
  var e2 = I(p(n2), r2);
  if (null == e2 ? void 0 : e2.set)
    return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p(n2), r2), o2 = null == i2 ? void 0 : i2[Q];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.D[r2] = false, true;
    if (c(t2, i2) && (void 0 !== t2 || u(n2.t, r2)))
      return true;
    E(n2), k(n2);
  }
  return n2.o[r2] === t2 && "number" != typeof t2 && (void 0 !== t2 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
}, deleteProperty: function(n2, r2) {
  return void 0 !== z(n2.t, r2) || r2 in n2.t ? (n2.D[r2] = false, E(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} }, on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e2) {
  return en.set.call(this, r2[0], t2, e2, r2[0]);
};
var un = function() {
  function e2(r2) {
    var e3 = this;
    this.g = B, this.F = true, this.produce = function(r3, i3, o2) {
      if ("function" == typeof r3 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }
      var f2;
      if ("function" != typeof i3 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), t(r3)) {
        var c2 = w(e3), s2 = R(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw O(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r3 || "object" != typeof r3) {
        if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H && (f2 = void 0), e3.F && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if ("function" == typeof n2)
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e3.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e3.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t(e3) || n(8), r(e3) && (e3 = D(e3));
    var i3 = w(this), o2 = R(this, e3, void 0);
    return o2[Q].C = true, g(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q];
    var i3 = e3.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.F = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n(20), this.g = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e2;
}(), an = new un(), fn = an.produce;
an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject$1(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore(reducer2, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer2, preloadedState);
  }
  if (typeof reducer2 !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer2;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject$1(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i2 = 0; i2 < listeners.length; i2++) {
      var listener = listeners[i2];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function(key) {
    var reducer2 = reducers[key];
    var initialState2 = reducer2(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState2 === "undefined") {
      throw new Error(formatProdErrorMessage(12));
    }
    if (typeof reducer2(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage(13));
    }
  });
}
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i2 = 0; i2 < reducerKeys.length; i2++) {
    var key = reducerKeys[i2];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e2) {
    shapeAssertionError = e2;
  }
  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer2 = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer2(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        action && action.type;
        throw new Error(formatProdErrorMessage(14));
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a2, b2) {
    return function() {
      return a2(b2.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      };
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
function createThunkMiddleware(extraArgument) {
  var middleware = function middleware2(_ref) {
    var dispatch = _ref.dispatch, getState = _ref.getState;
    return function(next) {
      return function(action) {
        if (typeof action === "function") {
          return action(dispatch, getState, extraArgument);
        }
        return next(action);
      };
    };
  };
  return middleware;
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
var thunkMiddleware = thunk;
var __extends = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __generator = globalThis && globalThis.__generator || function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray = globalThis && globalThis.__spreadArray || function(to, from) {
  for (var i2 = 0, il = from.length, j2 = to.length; i2 < il; i2++, j2++)
    to[j2] = from[i2];
  return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
  return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var _i = 0, _c = __getOwnPropSymbols(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = function(a2, b2) {
  return __defProps(a2, __getOwnPropDescs(b2));
};
var __async = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose;
  return compose.apply(null, arguments);
};
function isPlainObject(value) {
  if (typeof value !== "object" || value === null)
    return false;
  var proto = Object.getPrototypeOf(value);
  if (proto === null)
    return true;
  var baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}
var MiddlewareArray = function(_super) {
  __extends(MiddlewareArray2, _super);
  function MiddlewareArray2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var _this = _super.apply(this, args) || this;
    Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
    return _this;
  }
  Object.defineProperty(MiddlewareArray2, Symbol.species, {
    get: function() {
      return MiddlewareArray2;
    },
    enumerable: false,
    configurable: true
  });
  MiddlewareArray2.prototype.concat = function() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }
    return _super.prototype.concat.apply(this, arr);
  };
  MiddlewareArray2.prototype.prepend = function() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }
    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr[0].concat(this))))();
    }
    return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr.concat(this))))();
  };
  return MiddlewareArray2;
}(Array);
function freezeDraftable(val) {
  return t(val) ? fn(val, function() {
  }) : val;
}
function isBoolean(x2) {
  return typeof x2 === "boolean";
}
function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  var _c = options.thunk, thunk2 = _c === void 0 ? true : _c;
  options.immutableCheck;
  options.serializableCheck;
  var middlewareArray = new MiddlewareArray();
  if (thunk2) {
    if (isBoolean(thunk2)) {
      middlewareArray.push(thunkMiddleware);
    } else {
      middlewareArray.push(thunkMiddleware.withExtraArgument(thunk2.extraArgument));
    }
  }
  return middlewareArray;
}
var IS_PRODUCTION = true;
function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
  var _c = options || {}, _d = _c.reducer, reducer2 = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
  var rootReducer;
  if (typeof reducer2 === "function") {
    rootReducer = reducer2;
  } else if (isPlainObject(reducer2)) {
    rootReducer = combineReducers(reducer2);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }
  var finalMiddleware = middleware;
  if (typeof finalMiddleware === "function") {
    finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
  }
  var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
  var finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools(__spreadValues({
      trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
  }
  var storeEnhancers = [middlewareEnhancer];
  if (Array.isArray(enhancers)) {
    storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
  } else if (typeof enhancers === "function") {
    storeEnhancers = enhancers(storeEnhancers);
  }
  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);
      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }
      return __spreadValues(__spreadValues({
        type,
        payload: prepared.payload
      }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
    }
    return { type, payload: args[0] };
  }
  actionCreator.toString = function() {
    return "" + type;
  };
  actionCreator.type = type;
  actionCreator.match = function(action) {
    return action.type === type;
  };
  return actionCreator;
}
function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function(typeOrActionCreator, reducer2) {
      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (type in actionsMap) {
        throw new Error("addCase cannot be called with two reducers for the same action type");
      }
      actionsMap[type] = reducer2;
      return builder;
    },
    addMatcher: function(matcher, reducer2) {
      actionMatchers.push({ matcher, reducer: reducer2 });
      return builder;
    },
    addDefaultCase: function(reducer2) {
      defaultCaseReducer = reducer2;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x2) {
  return typeof x2 === "function";
}
function createReducer(initialState2, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }
  var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
  var getInitialState;
  if (isStateFunction(initialState2)) {
    getInitialState = function() {
      return freezeDraftable(initialState2());
    };
  } else {
    var frozenInitialState_1 = freezeDraftable(initialState2);
    getInitialState = function() {
      return frozenInitialState_1;
    };
  }
  function reducer2(state, action) {
    if (state === void 0) {
      state = getInitialState();
    }
    var caseReducers = __spreadArray([
      actionsMap[action.type]
    ], finalActionMatchers.filter(function(_c2) {
      var matcher = _c2.matcher;
      return matcher(action);
    }).map(function(_c2) {
      var reducer22 = _c2.reducer;
      return reducer22;
    }));
    if (caseReducers.filter(function(cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce(function(previousState, caseReducer) {
      if (caseReducer) {
        if (r(previousState)) {
          var draft = previousState;
          var result = caseReducer(draft, action);
          if (typeof result === "undefined") {
            return previousState;
          }
          return result;
        } else if (!t(previousState)) {
          var result = caseReducer(previousState, action);
          if (typeof result === "undefined") {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return fn(previousState, function(draft2) {
            return caseReducer(draft2, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer2.getInitialState = getInitialState;
  return reducer2;
}
function getType2(slice, actionKey) {
  return slice + "/" + actionKey;
}
function createSlice(options) {
  var name = options.name;
  if (!name) {
    throw new Error("`name` is a required option for createSlice");
  }
  if (typeof process !== "undefined" && false) {
    if (options.initialState === void 0) {
      console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    }
  }
  var initialState2 = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
  var reducers = options.reducers || {};
  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function(reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType2(name, reducerName);
    var caseReducer;
    var prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }
    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });
  function buildReducer() {
    var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
    var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
    return createReducer(initialState2, finalCaseReducers, actionMatchers, defaultCaseReducer);
  }
  var _reducer;
  return {
    name,
    reducer: function(state, action) {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer(state, action);
    },
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName,
    getInitialState: function() {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer.getInitialState();
    }
  };
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function(size) {
  if (size === void 0) {
    size = 21;
  }
  var id2 = "";
  var i2 = size;
  while (i2--) {
    id2 += urlAlphabet[Math.random() * 64 | 0];
  }
  return id2;
};
var commonProperties = [
  "name",
  "message",
  "stack",
  "code"
];
var RejectWithValue = function() {
  function RejectWithValue2(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  return RejectWithValue2;
}();
var FulfillWithMeta = function() {
  function FulfillWithMeta2(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  return FulfillWithMeta2;
}();
var miniSerializeError = function(value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};
    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return { message: String(value) };
};
function createAsyncThunk(typePrefix, payloadCreator, options) {
  var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
    return {
      payload,
      meta: __spreadProps(__spreadValues({}, meta || {}), {
        arg,
        requestId,
        requestStatus: "fulfilled"
      })
    };
  });
  var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
    return {
      payload: void 0,
      meta: __spreadProps(__spreadValues({}, meta || {}), {
        arg,
        requestId,
        requestStatus: "pending"
      })
    };
  });
  var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
    return {
      payload,
      error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
      meta: __spreadProps(__spreadValues({}, meta || {}), {
        arg,
        requestId,
        rejectedWithValue: !!payload,
        requestStatus: "rejected",
        aborted: (error == null ? void 0 : error.name) === "AbortError",
        condition: (error == null ? void 0 : error.name) === "ConditionError"
      })
    };
  });
  var AC = typeof AbortController !== "undefined" ? AbortController : function() {
    function class_1() {
      this.signal = {
        aborted: false,
        addEventListener: function() {
        },
        dispatchEvent: function() {
          return false;
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
    class_1.prototype.abort = function() {
    };
    return class_1;
  }();
  function actionCreator(arg) {
    return function(dispatch, getState, extra) {
      var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
      var abortController = new AC();
      var abortReason;
      var abortedPromise = new Promise(function(_2, reject) {
        return abortController.signal.addEventListener("abort", function() {
          return reject({ name: "AbortError", message: abortReason || "Aborted" });
        });
      });
      var started = false;
      function abort(reason) {
        if (started) {
          abortReason = reason;
          abortController.abort();
        }
      }
      var promise = function() {
        return __async(this, null, function() {
          var _a, _b, finalAction, conditionResult, err_1, skipDispatch;
          return __generator(this, function(_c) {
            switch (_c.label) {
              case 0:
                _c.trys.push([0, 4, , 5]);
                conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState, extra });
                if (!isThenable(conditionResult))
                  return [3, 2];
                return [4, conditionResult];
              case 1:
                conditionResult = _c.sent();
                _c.label = 2;
              case 2:
                if (conditionResult === false) {
                  throw {
                    name: "ConditionError",
                    message: "Aborted due to condition callback returning false."
                  };
                }
                started = true;
                dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId, arg }, { getState, extra })));
                return [4, Promise.race([
                  abortedPromise,
                  Promise.resolve(payloadCreator(arg, {
                    dispatch,
                    getState,
                    extra,
                    requestId,
                    signal: abortController.signal,
                    rejectWithValue: function(value, meta) {
                      return new RejectWithValue(value, meta);
                    },
                    fulfillWithValue: function(value, meta) {
                      return new FulfillWithMeta(value, meta);
                    }
                  })).then(function(result) {
                    if (result instanceof RejectWithValue) {
                      throw result;
                    }
                    if (result instanceof FulfillWithMeta) {
                      return fulfilled(result.payload, requestId, arg, result.meta);
                    }
                    return fulfilled(result, requestId, arg);
                  })
                ])];
              case 3:
                finalAction = _c.sent();
                return [3, 5];
              case 4:
                err_1 = _c.sent();
                finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                return [3, 5];
              case 5:
                skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                if (!skipDispatch) {
                  dispatch(finalAction);
                }
                return [2, finalAction];
            }
          });
        });
      }();
      return Object.assign(promise, {
        abort,
        requestId,
        arg,
        unwrap: function() {
          return promise.then(unwrapResult);
        }
      });
    };
  }
  return Object.assign(actionCreator, {
    pending,
    rejected,
    fulfilled,
    typePrefix
  });
}
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var alm = "listenerMiddleware";
createAction(alm + "/add");
createAction(alm + "/removeAll");
createAction(alm + "/remove");
N();
const initialState$2 = {};
const reportSlice$1 = createSlice({
  name: "kdb",
  initialState: initialState$2,
  reducers: {}
});
var kdbReducer = reportSlice$1.reducer;
const initialState$1 = {
  display: "loading",
  summary: {
    documentUri: "",
    subdocumentUris: [],
    errors: false,
    invalid: false,
    all: 0,
    datavalidation: { max: 0, value: 0 },
    security: { max: 0, value: 0 },
    oasconformance: { max: 0, value: 0 }
  },
  all: [],
  selected: []
};
function flattenIssues(audit) {
  const issues = Object.entries(audit.issues).map(([uri, issues2]) => {
    return issues2.map((issue, idx) => ({
      ...issue,
      key: `${uri}-${idx}`,
      filename: audit.files[issue.documentUri].relative
    }));
  }).reduce((acc, val) => acc.concat(val), []);
  return issues;
}
const reportSlice = createSlice({
  name: "report",
  initialState: initialState$1,
  reducers: {
    showFullReport: (state, action) => {
      state.display = "full";
      state.summary = action.payload.summary;
      state.all = state.selected = flattenIssues(action.payload);
    },
    showPartialReport: (state, action) => {
      const issues = flattenIssues(action.payload.report);
      const ids = action.payload.ids.map((id2) => `${action.payload.uri}-${id2}`);
      state.display = "partial";
      state.summary = action.payload.report.summary;
      state.all = issues;
      state.selected = issues.filter((issue) => ids.includes(issue.key));
    },
    goToFullReport: (state) => {
      state.display = "full";
      state.selected = state.all;
    },
    showNoReport: (state) => {
      state.display = "no-report";
      state.summary = initialState$1.summary;
      state.all = [];
      state.selected = [];
    }
  }
});
const { showFullReport, showPartialReport, showNoReport, goToFullReport } = reportSlice.actions;
var reportReducer = reportSlice.reducer;
const initialState = {
  kind: "light"
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.kind = action.payload.kind;
      if (action.payload.foreground !== void 0) {
        state.foreground = action.payload.foreground;
      }
      if (action.payload.background !== void 0) {
        state.background = action.payload.background;
      }
    }
  }
});
const { changeTheme } = themeSlice.actions;
var themeReducer = themeSlice.reducer;
const reducer = {
  report: reportReducer,
  kdb: kdbReducer,
  theme: themeReducer
};
const initStore = (hostApplication, kdb, theme) => configureStore({
  reducer,
  middleware: (getDefaultMiddleware2) => getDefaultMiddleware2({
    thunk: {
      extraArgument: hostApplication
    }
  }),
  preloadedState: {
    kdb,
    theme
  }
});
var logo$1 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1NjYuOTMgMTkyLjIyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NjYuOTMgMTkyLjIyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMkQyRDJEO30NCgkuc3Qxe2ZpbGw6IzdGNDg4RTt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNjMuMjIsOTYuMTRjMC0xMi44Nyw0LjA3LTIyLjcsMTIuMi0yOS40OWM4LjEzLTYuOCwxNy43MS0xMC4xOSwyOC43Mi0xMC4xOWM4Ljg1LDAsMTYuNDcsMS45MSwyMi44NSw1LjcxDQoJVjc3LjNjLTUuNzctNC4xMi0xMi42MS02LjE4LTIwLjU0LTYuMThjLTcuMzEsMC0xMy41NCwyLjAzLTE4LjY4LDYuMWMtNS4xNSw0LjA3LTcuNzIsMTAuMTctNy43MiwxOC4zDQoJYzAsNy45MywyLjU1LDEzLjk4LDcuNjQsMTguMTRjNS4xLDQuMTcsMTEuMjUsNi4yNSwxOC40NSw2LjI1YzcuODIsMCwxNS4wMy0xLjksMjEuNjItNS43MXYxNS4yOWMtNy4xLDMuNC0xNS4yOSw1LjEtMjQuNTUsNS4xDQoJYy0xMC44MSwwLTIwLjE4LTMuMzItMjguMS05Ljk2QzE2Ny4xOCwxMTcuOTksMTYzLjIyLDEwOC40OSwxNjMuMjIsOTYuMTR6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjQ2LjE0LDcwLjY2YzIuODgtNC42Myw3LjE1LTguMjMsMTIuODItMTAuODFjNS42Ni0yLjU3LDExLjc5LTMuNTUsMTguMzgtMi45M3YxNi4yMQ0KCWMtNi41OS0wLjkzLTEyLjU2LTAuMDUtMTcuOTEsMi42MmMtNS4zNSwyLjY4LTkuMTYsNi42NC0xMS40MywxMS44OXY0NC45NGgtMTYuNTJWNTguNDZoMTQuNjdWNzAuNjZ6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE2LjgxLDU3Ljg4aDE2LjUydjc0LjEyaC0xNC42N3YtMTAuMTljLTYuNzksOC4xMy0xNS4zOSwxMi4yLTI1Ljc5LDEyLjJjLTkuNTcsMC0xNy4wNi0yLjc4LTIyLjQ3LTguMzQNCgljLTUuNC01LjU2LTguMTEtMTIuODctOC4xMS0yMS45M1Y1Ny44OGgxNi41MnY0My43YzAsMTEuODQsNS43NiwxNy43NiwxNy4yOSwxNy43NmM4LjEzLDAsMTUuMDMtNC4xMiwyMC42OS0xMi4zNVY1Ny44OHoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNTIuMjMsNjguMDhjNi44LTguMTMsMTUuMzktMTIuMiwyNS43OS0xMi4yYzkuMjcsMCwxNi42OCwyLjgxLDIyLjI0LDguNDJjNS41Niw1LjYxLDguMzQsMTIuODksOC4zNCwyMS44NQ0KCXY0NS44NmgtMTYuNTJ2LTQzLjdjMC01Ljc2LTEuNi0xMC4xNy00Ljc5LTEzLjJjLTMuMTktMy4wNC03LjM2LTQuNTYtMTIuNTEtNC41NmMtOC4xMywwLTE1LjAzLDQuMTItMjAuNjksMTIuMzV2NDkuMTFoLTE2LjUyDQoJVjU3Ljg4aDE0LjY3VjY4LjA4eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQxMS4zNyw5NS41NmMwLTEyLjg3LDQuMDctMjIuNywxMi4yLTI5LjQ5YzguMTMtNi44LDE3LjcxLTEwLjE5LDI4LjcyLTEwLjE5YzguODUsMCwxNi40NywxLjkxLDIyLjg1LDUuNzENCgl2MTUuMTNjLTUuNzctNC4xMi0xMi42MS02LjE4LTIwLjU0LTYuMThjLTcuMzEsMC0xMy41NCwyLjAzLTE4LjY4LDYuMWMtNS4xNSw0LjA3LTcuNzIsMTAuMTctNy43MiwxOC4zDQoJYzAsNy45MywyLjU1LDEzLjk4LDcuNjQsMTguMTRzMTEuMjUsNi4yNSwxOC40NSw2LjI1YzcuODIsMCwxNS4wMy0xLjksMjEuNjItNS43MXYxNS4yOWMtNy4xLDMuNC0xNS4yOSw1LjEtMjQuNTUsNS4xDQoJYy0xMC44MSwwLTIwLjE4LTMuMzItMjguMTEtOS45NkM0MTUuMzMsMTE3LjQxLDQxMS4zNywxMDcuOTIsNDExLjM3LDk1LjU2eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ3OS42MiwyMy45MWgxNi41MnY0Mi4xNmM2LjU5LTYuOCwxNC41Ny0xMC4xOSwyMy45NC0xMC4xOWM5LjI3LDAsMTYuNjgsMi44MSwyMi4yNCw4LjQyDQoJYzUuNTYsNS42MSw4LjM0LDEyLjg5LDguMzQsMjEuODV2NDUuODZoLTE2LjUydi00My43YzAtNS43Ni0xLjYtMTAuMTctNC43OS0xMy4yYy0zLjE5LTMuMDQtNy4zNi00LjU2LTEyLjUxLTQuNTYNCgljLTguMTMsMC0xNS4wMyw0LjEyLTIwLjY5LDEyLjM1djQ5LjExaC0xNi41MlYyMy45MXoiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTU0Ljk0LDEzNi43MSAxNTQuOTQsNTMuMjYgODIuNjcsMTEuNTQgMTAuNCw1My4yNiAxMC40LDEzNi43MSA4Mi42NywxNzguNDQgIi8+DQo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNzEuMDIsNzcuMDRoMTEuNjF2NDMuODhoMC4xNHY5LjgzaC0wLjE0djEzLjhINzEuNzJ2LTEzLjhIMzUuMDl2LTkuNjNMNzEuMDIsNzcuMDR6IE03MS43MiwxMjAuOTFWOTEuNDINCglsLTI0LjA0LDI5LjQ5SDcxLjcyeiIvPg0KPHBhdGggY2xhc3M9InN0MiIgZD0iTTgyLjA2LDU3LjFjNi42OC00LjU3LDE0LjE2LTYuODUsMjIuNDQtNi44NWM3LjA4LDAsMTIuODEsMS42NCwxNy4xNyw0LjkxYzQuMzcsMy4yOCw2LjU1LDcuOTYsNi41NSwxNC4wNQ0KCWMwLDUuMDUtMS42OCw5LjM2LTUuMDUsMTIuOTNjLTMuMzcsMy41Ny03Ljk1LDcuMDctMTMuNzUsMTAuNDdjLTAuNDUsMC4yOC0xLjI5LDAuNzktMi41LDEuNTRjLTEuMjIsMC43NS0yLjA4LDEuMjgtMi41OSwxLjU5DQoJYy0wLjUxLDAuMzEtMS4yOSwwLjc5LTIuMzMsMS40M2MtMS4wNSwwLjY0LTEuODIsMS4xMi0yLjMzLDEuNDNjLTAuNTEsMC4zMS0xLjE3LDAuNzktMiwxLjQzYy0wLjgyLDAuNjQtMS40MywxLjE4LTEuODIsMS42Mg0KCWMtMC4zOSwwLjQ0LTAuODUsMC45OC0xLjM4LDEuNjJjLTAuNTMsMC42NC0wLjksMS4yMy0xLjEzLDEuNzdjLTAuMjMsMC41NC0wLjQ0LDEuMTUtMC42NCwxLjgzYy0wLjIsMC42OC0wLjMsMS4zNS0wLjMsMi4wMw0KCWwzNi4xOS0wLjF2MTAuMjNoLTQ4Ljh2LTUuMTZjMC04LjYsMy42NC0xNS43NSwxMC45Mi0yMS40NGMyLjAzLTEuNTMsNS44NC0zLjk5LDExLjQxLTcuMzljNS42MS0zLjIyLDkuMjItNS41NiwxMC44My03LjAxDQoJYzIuNjUtMi41OCwzLjk3LTUuNDYsMy45Ny04LjY0YzAtMi45MS0xLjE4LTUuMTMtMy41Mi02LjY1Yy0yLjM1LTEuNTItNS42NC0yLjI4LTkuODgtMi4yOGMtNy4zNSwwLTE0LjQ5LDIuNTItMjEuNDQsNy41NFY1Ny4xeiIvPg0KPC9zdmc+DQo=";
var logoDark = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnDQogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iDQogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIg0KICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIg0KICAgdmVyc2lvbj0iMS4xIg0KICAgaWQ9IkxheWVyXzEiDQogICB4PSIwcHgiDQogICB5PSIwcHgiDQogICB2aWV3Qm94PSIwIDAgNTY2LjkzIDE5Mi4yMiINCiAgIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ni45MyAxOTIuMjI7Ig0KICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImxvZ28uc3ZnIg0KICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSIvVXNlcnMvYW50b24vRG93bmxvYWRzLzQyY19zdGFuZGFyZC5wbmciDQogICBpbmtzY2FwZTpleHBvcnQteGRwaT0iMjQuODc5OTk5Ig0KICAgaW5rc2NhcGU6ZXhwb3J0LXlkcGk9IjI0Ljg3OTk5OSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yIChlODZjODcwOCwgMjAyMS0wMS0xNSkiPjxtZXRhZGF0YQ0KICAgaWQ9Im1ldGFkYXRhMTQzIj48cmRmOlJERj48Y2M6V29yaw0KICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQ0KICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMNCiAgIGlkPSJkZWZzMTQxIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiINCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgYm9yZGVyb3BhY2l0eT0iMSINCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiDQogICBncmlkdG9sZXJhbmNlPSIxMCINCiAgIGd1aWRldG9sZXJhbmNlPSIxMCINCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIg0KICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiINCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTQ0MCINCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg1NSINCiAgIGlkPSJuYW1lZHZpZXcxMzkiDQogICBzaG93Z3JpZD0iZmFsc2UiDQogICBpbmtzY2FwZTp6b29tPSIwLjk2NzQ5MTU4Ig0KICAgaW5rc2NhcGU6Y3g9IjExNy41NzIwOCINCiAgIGlua3NjYXBlOmN5PSI5My4wMDkxOTgiDQogICBpbmtzY2FwZTp3aW5kb3cteD0iMCINCiAgIGlua3NjYXBlOndpbmRvdy15PSIyMyINCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiAvPg0KPHN0eWxlDQogICB0eXBlPSJ0ZXh0L2NzcyINCiAgIGlkPSJzdHlsZTExOCI+DQoJLnN0MHtmaWxsOiMyRDJEMkQ7fQ0KCS5zdDF7ZmlsbDojN0Y0ODhFO30NCgkuc3Qye2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPHBhdGgNCiAgIGNsYXNzPSJzdDAiDQogICBkPSJNMTYzLjIyLDk2LjE0YzAtMTIuODcsNC4wNy0yMi43LDEyLjItMjkuNDljOC4xMy02LjgsMTcuNzEtMTAuMTksMjguNzItMTAuMTljOC44NSwwLDE2LjQ3LDEuOTEsMjIuODUsNS43MSAgVjc3LjNjLTUuNzctNC4xMi0xMi42MS02LjE4LTIwLjU0LTYuMThjLTcuMzEsMC0xMy41NCwyLjAzLTE4LjY4LDYuMWMtNS4xNSw0LjA3LTcuNzIsMTAuMTctNy43MiwxOC4zICBjMCw3LjkzLDIuNTUsMTMuOTgsNy42NCwxOC4xNGM1LjEsNC4xNywxMS4yNSw2LjI1LDE4LjQ1LDYuMjVjNy44MiwwLDE1LjAzLTEuOSwyMS42Mi01LjcxdjE1LjI5Yy03LjEsMy40LTE1LjI5LDUuMS0yNC41NSw1LjEgIGMtMTAuODEsMC0yMC4xOC0zLjMyLTI4LjEtOS45NkMxNjcuMTgsMTE3Ljk5LDE2My4yMiwxMDguNDksMTYzLjIyLDk2LjE0eiINCiAgIGlkPSJwYXRoMTIwIg0KICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4NCjxwYXRoDQogICBjbGFzcz0ic3QwIg0KICAgZD0iTTI0Ni4xNCw3MC42NmMyLjg4LTQuNjMsNy4xNS04LjIzLDEyLjgyLTEwLjgxYzUuNjYtMi41NywxMS43OS0zLjU1LDE4LjM4LTIuOTN2MTYuMjEgIGMtNi41OS0wLjkzLTEyLjU2LTAuMDUtMTcuOTEsMi42MmMtNS4zNSwyLjY4LTkuMTYsNi42NC0xMS40MywxMS44OXY0NC45NGgtMTYuNTJWNTguNDZoMTQuNjdWNzAuNjZ6Ig0KICAgaWQ9InBhdGgxMjIiDQogICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAvPg0KPHBhdGgNCiAgIGNsYXNzPSJzdDAiDQogICBkPSJNMzE2LjgxLDU3Ljg4aDE2LjUydjc0LjEyaC0xNC42N3YtMTAuMTljLTYuNzksOC4xMy0xNS4zOSwxMi4yLTI1Ljc5LDEyLjJjLTkuNTcsMC0xNy4wNi0yLjc4LTIyLjQ3LTguMzQgIGMtNS40LTUuNTYtOC4xMS0xMi44Ny04LjExLTIxLjkzVjU3Ljg4aDE2LjUydjQzLjdjMCwxMS44NCw1Ljc2LDE3Ljc2LDE3LjI5LDE3Ljc2YzguMTMsMCwxNS4wMy00LjEyLDIwLjY5LTEyLjM1VjU3Ljg4eiINCiAgIGlkPSJwYXRoMTI0Ig0KICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4NCjxwYXRoDQogICBjbGFzcz0ic3QwIg0KICAgZD0iTTM1Mi4yMyw2OC4wOGM2LjgtOC4xMywxNS4zOS0xMi4yLDI1Ljc5LTEyLjJjOS4yNywwLDE2LjY4LDIuODEsMjIuMjQsOC40MmM1LjU2LDUuNjEsOC4zNCwxMi44OSw4LjM0LDIxLjg1ICB2NDUuODZoLTE2LjUydi00My43YzAtNS43Ni0xLjYtMTAuMTctNC43OS0xMy4yYy0zLjE5LTMuMDQtNy4zNi00LjU2LTEyLjUxLTQuNTZjLTguMTMsMC0xNS4wMyw0LjEyLTIwLjY5LDEyLjM1djQ5LjExaC0xNi41MiAgVjU3Ljg4aDE0LjY3VjY4LjA4eiINCiAgIGlkPSJwYXRoMTI2Ig0KICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4NCjxwYXRoDQogICBjbGFzcz0ic3QwIg0KICAgZD0iTTQxMS4zNyw5NS41NmMwLTEyLjg3LDQuMDctMjIuNywxMi4yLTI5LjQ5YzguMTMtNi44LDE3LjcxLTEwLjE5LDI4LjcyLTEwLjE5YzguODUsMCwxNi40NywxLjkxLDIyLjg1LDUuNzEgIHYxNS4xM2MtNS43Ny00LjEyLTEyLjYxLTYuMTgtMjAuNTQtNi4xOGMtNy4zMSwwLTEzLjU0LDIuMDMtMTguNjgsNi4xYy01LjE1LDQuMDctNy43MiwxMC4xNy03LjcyLDE4LjMgIGMwLDcuOTMsMi41NSwxMy45OCw3LjY0LDE4LjE0czExLjI1LDYuMjUsMTguNDUsNi4yNWM3LjgyLDAsMTUuMDMtMS45LDIxLjYyLTUuNzF2MTUuMjljLTcuMSwzLjQtMTUuMjksNS4xLTI0LjU1LDUuMSAgYy0xMC44MSwwLTIwLjE4LTMuMzItMjguMTEtOS45NkM0MTUuMzMsMTE3LjQxLDQxMS4zNywxMDcuOTIsNDExLjM3LDk1LjU2eiINCiAgIGlkPSJwYXRoMTI4Ig0KICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4NCjxwYXRoDQogICBjbGFzcz0ic3QwIg0KICAgZD0iTTQ3OS42MiwyMy45MWgxNi41MnY0Mi4xNmM2LjU5LTYuOCwxNC41Ny0xMC4xOSwyMy45NC0xMC4xOWM5LjI3LDAsMTYuNjgsMi44MSwyMi4yNCw4LjQyICBjNS41Niw1LjYxLDguMzQsMTIuODksOC4zNCwyMS44NXY0NS44NmgtMTYuNTJ2LTQzLjdjMC01Ljc2LTEuNi0xMC4xNy00Ljc5LTEzLjJjLTMuMTktMy4wNC03LjM2LTQuNTYtMTIuNTEtNC41NiAgYy04LjEzLDAtMTUuMDMsNC4xMi0yMC42OSwxMi4zNXY0OS4xMWgtMTYuNTJWMjMuOTF6Ig0KICAgaWQ9InBhdGgxMzAiDQogICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAvPg0KPHBvbHlnb24NCiAgIGNsYXNzPSJzdDEiDQogICBwb2ludHM9IjE1NC45NCwxMzYuNzEgMTU0Ljk0LDUzLjI2IDgyLjY3LDExLjU0IDEwLjQsNTMuMjYgMTAuNCwxMzYuNzEgODIuNjcsMTc4LjQ0ICINCiAgIGlkPSJwb2x5Z29uMTMyIiAvPg0KPHBhdGgNCiAgIGNsYXNzPSJzdDIiDQogICBkPSJNNzEuMDIsNzcuMDRoMTEuNjF2NDMuODhoMC4xNHY5LjgzaC0wLjE0djEzLjhINzEuNzJ2LTEzLjhIMzUuMDl2LTkuNjNMNzEuMDIsNzcuMDR6IE03MS43MiwxMjAuOTFWOTEuNDIgIGwtMjQuMDQsMjkuNDlINzEuNzJ6Ig0KICAgaWQ9InBhdGgxMzQiIC8+DQo8cGF0aA0KICAgY2xhc3M9InN0MiINCiAgIGQ9Ik04Mi4wNiw1Ny4xYzYuNjgtNC41NywxNC4xNi02Ljg1LDIyLjQ0LTYuODVjNy4wOCwwLDEyLjgxLDEuNjQsMTcuMTcsNC45MWM0LjM3LDMuMjgsNi41NSw3Ljk2LDYuNTUsMTQuMDUgIGMwLDUuMDUtMS42OCw5LjM2LTUuMDUsMTIuOTNjLTMuMzcsMy41Ny03Ljk1LDcuMDctMTMuNzUsMTAuNDdjLTAuNDUsMC4yOC0xLjI5LDAuNzktMi41LDEuNTRjLTEuMjIsMC43NS0yLjA4LDEuMjgtMi41OSwxLjU5ICBjLTAuNTEsMC4zMS0xLjI5LDAuNzktMi4zMywxLjQzYy0xLjA1LDAuNjQtMS44MiwxLjEyLTIuMzMsMS40M2MtMC41MSwwLjMxLTEuMTcsMC43OS0yLDEuNDNjLTAuODIsMC42NC0xLjQzLDEuMTgtMS44MiwxLjYyICBjLTAuMzksMC40NC0wLjg1LDAuOTgtMS4zOCwxLjYyYy0wLjUzLDAuNjQtMC45LDEuMjMtMS4xMywxLjc3Yy0wLjIzLDAuNTQtMC40NCwxLjE1LTAuNjQsMS44M2MtMC4yLDAuNjgtMC4zLDEuMzUtMC4zLDIuMDMgIGwzNi4xOS0wLjF2MTAuMjNoLTQ4Ljh2LTUuMTZjMC04LjYsMy42NC0xNS43NSwxMC45Mi0yMS40NGMyLjAzLTEuNTMsNS44NC0zLjk5LDExLjQxLTcuMzljNS42MS0zLjIyLDkuMjItNS41NiwxMC44My03LjAxICBjMi42NS0yLjU4LDMuOTctNS40NiwzLjk3LTguNjRjMC0yLjkxLTEuMTgtNS4xMy0zLjUyLTYuNjVjLTIuMzUtMS41Mi01LjY0LTIuMjgtOS44OC0yLjI4Yy03LjM1LDAtMTQuNDksMi41Mi0yMS40NCw3LjU0VjU3LjF6Ig0KICAgaWQ9InBhdGgxMzYiIC8+DQo8L3N2Zz4NCg==";
function Header({
  openLink: openLink2,
  themeKind
}) {
  const [isOpen, setOpen] = react.exports.useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };
  const open = (e2) => {
    openLink2(e2.currentTarget.href);
    e2.preventDefault();
    e2.stopPropagation();
  };
  return /* @__PURE__ */ jsx("div", {
    className: "c_header",
    children: /* @__PURE__ */ jsxs("div", {
      className: "d-flex justify-content-between",
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("span", {
          className: "font-weight-bold",
          style: {
            display: "inline-block",
            verticalAlign: "middle",
            height: "100%"
          },
          children: "Powered by"
        }), /* @__PURE__ */ jsx("span", {
          children: /* @__PURE__ */ jsx("a", {
            href: "https://www.42crunch.com",
            onClick: open,
            children: /* @__PURE__ */ jsx("img", {
              src: themeKind === "light" ? logo$1 : logoDark
            })
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsxs("div", {
          className: "dropdown",
          children: [/* @__PURE__ */ jsx("button", {
            className: "dropbtn",
            onClick: toggleOpen,
            children: "Learn More"
          }), /* @__PURE__ */ jsxs("div", {
            className: isOpen ? "dropdown-content show" : "dropdown-content",
            children: [/* @__PURE__ */ jsx("a", {
              href: "https://42crunch.com/api-security-audit/",
              onClick: open,
              children: "API Contract Security Audit"
            }), /* @__PURE__ */ jsx("a", {
              href: "https://42crunch.com/api-conformance-scan/",
              onClick: open,
              children: "API Contract Conformance Scan"
            }), /* @__PURE__ */ jsx("a", {
              href: "https://42crunch.com/micro-api-firewall-protection/",
              onClick: open,
              children: "API Protection"
            })]
          })]
        })
      })]
    })
  });
}
function Summary({
  openLink: openLink2
}) {
  const open = (e2) => {
    openLink2(e2.currentTarget.href);
    e2.preventDefault();
    e2.stopPropagation();
  };
  const summary = useSelector((state) => state.report.summary);
  if (summary.all === 0 && summary.invalid) {
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx("h1", {
        children: "Failed to perform security audit, the OpenAPI file is invalid or too large."
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsxs("small", {
          children: ["Please submit your feedback for the security audit", " ", /* @__PURE__ */ jsx("a", {
            onClick: open,
            href: "https://github.com/42Crunch/vscode-openapi/issues",
            children: "here"
          })]
        })
      })]
    });
  }
  return /* @__PURE__ */ jsxs("div", {
    className: "c_roundedbox",
    children: [/* @__PURE__ */ jsxs("h1", {
      children: ["Security audit score: ", /* @__PURE__ */ jsxs("span", {
        children: [summary.all, "\xA0/\xA0100"]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "progress-bar-holder",
      children: /* @__PURE__ */ jsx("div", {
        className: "progress-bar bar-red",
        style: {
          width: summary.all
        }
      })
    }), /* @__PURE__ */ jsxs("h3", {
      children: ["Security:", " ", /* @__PURE__ */ jsxs("span", {
        children: [summary.security.value, " / ", summary.security.max]
      })]
    }), /* @__PURE__ */ jsxs("h3", {
      children: ["Data validation:", " ", /* @__PURE__ */ jsxs("span", {
        children: [summary.datavalidation.value, " / ", summary.datavalidation.max]
      })]
    }), /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsxs("small", {
        children: ["Please submit your feedback for the security audit", " ", /* @__PURE__ */ jsx("a", {
          onClick: open,
          href: "https://github.com/42Crunch/vscode-openapi/issues",
          children: "here"
        })]
      })
    })]
  });
}
function Footer({
  openLink: openLink2,
  themeKind
}) {
  const [isOpen, setOpen] = react.exports.useState(false);
  const open = (e2) => {
    openLink2(e2.currentTarget.href);
    e2.preventDefault();
    e2.stopPropagation();
  };
  const toggleOpen = () => {
    setOpen(!isOpen);
  };
  return /* @__PURE__ */ jsx("div", {
    className: "c_footer",
    children: /* @__PURE__ */ jsxs("div", {
      className: "d-flex justify-content-between",
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("span", {
          className: "font-weight-bold",
          style: {
            display: "inline-block",
            verticalAlign: "middle",
            height: "100%"
          },
          children: "Powered by"
        }), /* @__PURE__ */ jsx("span", {
          children: /* @__PURE__ */ jsx("a", {
            href: "https://www.42crunch.com",
            onClick: open,
            children: /* @__PURE__ */ jsx("img", {
              src: themeKind === "light" ? logo$1 : logoDark
            })
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsxs("div", {
          className: "dropdown",
          children: [/* @__PURE__ */ jsx("button", {
            className: "dropbtn",
            onClick: toggleOpen,
            children: "Learn More"
          }), /* @__PURE__ */ jsxs("div", {
            className: isOpen ? "dropdown-content show" : "dropdown-content",
            children: [/* @__PURE__ */ jsx("a", {
              href: "https://42crunch.com/api-security-audit/",
              onClick: open,
              children: "API Contract Security Audit"
            }), /* @__PURE__ */ jsx("a", {
              href: "https://42crunch.com/api-conformance-scan/",
              onClick: open,
              children: "API Contract Conformance Scan"
            }), /* @__PURE__ */ jsx("a", {
              href: "https://42crunch.com/micro-api-firewall-protection/",
              onClick: open,
              children: "API Protection"
            })]
          })]
        })
      })]
    })
  });
}
function Article({
  articleId,
  kdb,
  lang,
  openLink: openLink2
}) {
  const onLinkClick = (e2) => {
    e2.stopPropagation();
    e2.preventDefault();
    openLink2(e2.target.href);
  };
  const ref = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const links = ref.current.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", onLinkClick);
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", onLinkClick);
      });
    };
  });
  const article = kdb[articleId] || fallbackArticle;
  const html = [article ? article.description.text : "", partToText(article.example, lang), partToText(article.exploit, lang), partToText(article.remediation, lang)].join("");
  return /* @__PURE__ */ jsx("div", {
    ref,
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}
function partToText(part, lang) {
  if (!part || !part.sections) {
    return "";
  }
  return part.sections.map((section) => {
    if (section.text) {
      return section.text;
    }
    if (section.code) {
      const code = section.code[lang];
      return `<pre>${code}</pre>`;
    }
  }).join("");
}
const fallbackArticle = {
  description: {
    text: `<p>Whoops! Looks like there has been an oversight and we are missing a page for this issue.</p>
           <p><a href="https://apisecurity.io/contact-us/">Let us know</a> the title of the issue, and we make sure to add it to the encyclopedia.</p>`
  }
};
const ReactComponent$1 = (props) => /* @__PURE__ */ react.exports.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512",
  width: "1em",
  height: "1em",
  ...props
}, /* @__PURE__ */ react.exports.createElement("path", {
  d: "M6.101 359.293L25.9 379.092c4.686 4.686 12.284 4.686 16.971 0L224 198.393l181.13 180.698c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 132.908c-4.686-4.686-12.284-4.686-16.971 0L6.101 342.322c-4.687 4.687-4.687 12.285 0 16.971z"
}));
const ReactComponent = (props) => /* @__PURE__ */ react.exports.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512",
  width: "1em",
  height: "1em",
  ...props
}, /* @__PURE__ */ react.exports.createElement("path", {
  d: "M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
}));
function Issue({
  kdb,
  issue,
  goToLine: goToLine2,
  copyIssueId: copyIssueId2,
  openLink: openLink2
}) {
  const [isOpen, setIsOpen] = react.exports.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const scoreImpact = issue.displayScore !== "0" ? `Score impact: ${issue.displayScore}` : "";
  const lang = issue.filename.toLowerCase().endsWith(".yaml") || issue.filename.toLowerCase().endsWith("yml") ? "yaml" : "json";
  return /* @__PURE__ */ jsxs("div", {
    className: "c_roundedbox_section",
    children: [/* @__PURE__ */ jsxs("h1", {
      onClick: toggle,
      style: {
        cursor: "pointer"
      },
      children: [isOpen ? /* @__PURE__ */ jsx(ReactComponent$1, {
        style: {
          width: 24,
          height: 24,
          marginRight: 8,
          fill: "var(--audit-foreground)"
        }
      }) : /* @__PURE__ */ jsx(ReactComponent, {
        style: {
          width: 24,
          height: 24,
          marginRight: 8,
          fill: "var(--audit-foreground)"
        }
      }), issue.description]
    }), /* @__PURE__ */ jsx("p", {
      children: /* @__PURE__ */ jsxs("small", {
        children: ["Issue ID:", " ", /* @__PURE__ */ jsx("span", {
          className: "issue-id",
          onClick: (e2) => {
            copyIssueId2(issue.id);
          },
          children: issue.id
        })]
      })
    }), /* @__PURE__ */ jsx("p", {
      children: /* @__PURE__ */ jsxs("small", {
        children: [/* @__PURE__ */ jsxs("a", {
          className: "focus-line",
          href: "#",
          onClick: (e2) => {
            goToLine2(issue.documentUri, issue.lineNo, issue.pointer);
            e2.preventDefault();
            e2.stopPropagation();
          },
          children: [issue.filename, ":", issue.lineNo]
        }), ". Severity: ", criticalityNames[issue.criticality], ". ", scoreImpact]
      })
    }), isOpen && /* @__PURE__ */ jsx(Article, {
      kdb,
      articleId: issue.id,
      lang,
      openLink: openLink2
    })]
  });
}
const criticalityNames = {
  5: "Critical",
  4: "High",
  3: "Medium",
  2: "Low",
  1: "Info"
};
function GoToFullReport({
  goToFullReport: goToFullReport2
}) {
  return /* @__PURE__ */ jsx("h4", {
    children: /* @__PURE__ */ jsx("a", {
      className: "go-full-report",
      href: "#",
      onClick: (e2) => {
        goToFullReport2();
        e2.preventDefault();
        e2.stopPropagation();
      },
      children: "Go back to full report"
    })
  });
}
var logo = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnDQogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iDQogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIg0KICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIg0KICAgaWQ9IkxheWVyXzEiDQogICBkYXRhLW5hbWU9IkxheWVyIDEiDQogICB2aWV3Qm94PSIwIDAgMTYgMTYiDQogICB2ZXJzaW9uPSIxLjEiDQogICBzb2RpcG9kaTpkb2NuYW1lPSI0MmNydW5jaF9pY29uLnN2ZyINCiAgIHdpZHRoPSIxNiINCiAgIGhlaWdodD0iMTYiDQogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjByYzEgKDA5OTYwZDYsIDIwMjAtMDQtMDkpIj4NCiAgPG1ldGFkYXRhDQogICAgIGlkPSJtZXRhZGF0YTI1Ij4NCiAgICA8cmRmOlJERj4NCiAgICAgIDxjYzpXb3JrDQogICAgICAgICByZGY6YWJvdXQ9IiI+DQogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0Pg0KICAgICAgICA8ZGM6dHlwZQ0KICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPg0KICAgICAgICA8ZGM6dGl0bGU+bG9nb19pY29uPC9kYzp0aXRsZT4NCiAgICAgIDwvY2M6V29yaz4NCiAgICA8L3JkZjpSREY+DQogIDwvbWV0YWRhdGE+DQogIDxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtcm90YXRpb249IjAiDQogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiINCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiDQogICAgIGJvcmRlcm9wYWNpdHk9IjEiDQogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiDQogICAgIGdyaWR0b2xlcmFuY2U9IjEwIg0KICAgICBndWlkZXRvbGVyYW5jZT0iMTAiDQogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIg0KICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE0NDAiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg1NSINCiAgICAgaWQ9Im5hbWVkdmlldzIzIg0KICAgICBzaG93Z3JpZD0iZmFsc2UiDQogICAgIGlua3NjYXBlOnpvb209IjE2Ig0KICAgICBpbmtzY2FwZTpjeD0iMi43Mjc1OTMyIg0KICAgICBpbmtzY2FwZTpjeT0iMTMuNDAzNzQyIg0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjIzIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiAvPg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczEyIj4NCiAgICA8c3R5bGUNCiAgICAgICBpZD0ic3R5bGUxMCI+LmNscy0xe2ZpbGw6IzdlNDg4Zjt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4NCiAgPC9kZWZzPg0KICA8dGl0bGUNCiAgICAgaWQ9InRpdGxlMTQiPmxvZ29faWNvbjwvdGl0bGU+DQogIDxwb2x5Z29uDQogICAgIGNsYXNzPSJjbHMtMSINCiAgICAgcG9pbnRzPSIwLDIwNC44OSA3MC4yLDI0NS40MiAxNDAuNCwyMDQuODkgMTQwLjQsMTIzLjgzIDcwLjIsODMuMyAwLDEyMy44MyAiDQogICAgIGlkPSJwb2x5Z29uMTYiDQogICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMDk3OTgyMDgsMCwwLDAuMDk3OTgyMDgsMS4xMjE2NTgsLTguMTA0MzM0NykiIC8+DQogIDx0ZXh0DQogICAgIHg9Ii0yMjYuMTg5OTkiDQogICAgIHk9Ii0yOTcuOTI0MDEiDQogICAgIGlkPSJ0ZXh0MTgiIC8+DQogIDxwYXRoDQogICAgIHN0eWxlPSJzdHJva2Utd2lkdGg6MC4wOTQ1Ig0KICAgICBjbGFzcz0iY2xzLTIiDQogICAgIGQ9Ik0gMTAuODc2NTgsMTEuNDQzMTMgQSAxLjc4MzIxNSwxLjc4MzIxNSAwIDAgMSAxMC4zNDQ1NDUsMTEuMzYzNzUgMS41NjMwMywxLjU2MzAzIDAgMCAxIDkuODgwNTUsMTEuMTMxMjggMS4wNzI1NzUsMS4wNzI1NzUgMCAwIDEgOS41NDg4NTUsMTAuNzIzMDQgMS4zMjg2NywxLjMyODY3IDAgMCAxIDkuNDI1MDYsMTAuMTM4MDg1IHEgMCwtMC42OTM2MzEgMC40MjYxOTUsLTEuMDQ4OTUxIGEgMS41NDc5MSwxLjU0NzkxIDAgMCAxIDEuMDI1MzI1LC0wLjM1NTMyIDEuNjI4MjM1LDEuNjI4MjM1IDAgMCAxIDEuMDI5MTA1LDAuMzI0MTM1IFYgOC4yMTc4NDQgYSAyLjU4NDU3NSwyLjU4NDU3NSAwIDAgMCAtMS4xNTg1NywtMC4yNjM2NTUgdiAwIGwgLTIuNTg3NDEsMC4wMDc1NiBhIDAuNTEzMTM1LDAuNTEzMTM1IDAgMCAxIDAuMDIwNzksLTAuMTQ1NTMgMS4xODU5NzUsMS4xODU5NzUgMCAwIDEgMC4wNDUzNiwtMC4xMzA0MSAwLjU0MjQzLDAuNTQyNDMgMCAwIDEgMC4wODEyNywtMC4xMjY2MyBxIDAuMDU2NywtMC4wNjg5ODUgMC4wOTQ1LC0wLjExNjIzNSBBIDEuMDM5NSwxLjAzOTUgMCAwIDEgOC41MzIwMzUsNy4zMjY3MDkgMS42NzczNzUsMS42NzczNzUgMCAwIDEgOC42NzQ3Myw3LjIyNDY0OSBsIDAuMTY3MjY1LC0wLjEwMjA2IDAuMTY2MzIsLTAuMTAyMDYgMC4xODksLTAuMTEzNCAwLjE3ODYwNSwtMC4xMDk2MiBhIDQuNDMxMTA1LDQuNDMxMTA1IDAgMCAwIDAuOTgzNzQ1LC0wLjc0OTM4NSAxLjMwMDMyLDEuMzAwMzIgMCAwIDAgMC4zNjA5OSwtMC45MjUxNTUgcSAwLC0wLjY1Mjk5NSAtMC40NzI1LC0xLjAwNDUzNSAtMC40NzI1LC0wLjM1MTU0IC0xLjIyODUsLTAuMzUxNTQgYSAyLjc3OTI0NSwyLjc3OTI0NSAwIDAgMCAtMS42MDY1LDAuNDg5NTEgdiAwLjc3Njc5IFEgOC4xNTg3Niw0LjQ5MzU5OSA4Ljk0NTk0NSw0LjQ5MzU5OSBhIDEuMjk0NjUsMS4yOTQ2NSAwIDAgMSAwLjcwNTkxNSwwLjE2MzQ4NSAwLjUzMjAzNSwwLjUzMjAzNSAwIDAgMSAwLjI1MjMxNSwwLjQ3MjUgMC44NTA1LDAuODUwNSAwIDAgMSAtMC4yODM1LDAuNjE3MDg1IDUuMzk5NzMsNS4zOTk3MyAwIDAgMSAtMC43NzM5NTUsMC41MDA4NSBRIDguMjQ4NTM1LDYuNjExMzQ0IDguMDMxMTg1LDYuNzc1Nzc0IEEgMi4wNzksMi4wNzkgMCAwIDAgNy40NTQ3MzUsNy40NDc2NjkgViA1LjY3OTU3NCBIIDYuNjI0MDggTCA0LjA2MjE4NSw4LjgzMTE0OSB2IDAuNjg4OTA1IGggMi42MTc2NSB2IDAuOTg2NTgxIGggMC43ODQzNSBWIDkuNTE5MTA5IEggNy40NzQ1OCBWIDguODEzMTk0IEggNy40NjQxODUgViA4LjY3OTk0OSBoIDEuNTQ3OTEgYSAxLjk5MjA2LDEuOTkyMDYgMCAwIDAgLTAuMjk2NzMsMC40ODM4NCAyLjM3OTUxLDIuMzc5NTEgMCAwIDAgLTAuMTg5LDAuOTcyNDA2IDIuMTczNSwyLjE3MzUgMCAwIDAgMC4xODksMC45Mjc5OSAxLjczMTI0LDEuNzMxMjQgMCAwIDAgMC41MTEyNDUsMC42NjE1IDIuMzg0MjM1LDIuMzg0MjM1IDAgMCAwIDAuNzA3ODA1LDAuMzc4IDIuNTUxNSwyLjU1MTUgMCAwIDAgMC44MTA4MSwwLjEyOTQ2NSAyLjcwMDgxLDIuNzAwODEgMCAwIDAgMS4xOTI1OSwtMC4yNjQ2IHYgLTAuODYzNzMgcSAtMC4zNzk4OSwwLjMzODMxIC0xLjA2MTIzNSwwLjMzODMxIHogTSA2LjY3OTgzNSw4LjgxMzE5NCBIIDQuOTYwODggTCA2LjY3OTgzNSw2LjcwNDg5OSBaIg0KICAgICBpZD0icGF0aDIwIg0KICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPg0KPC9zdmc+DQo=";
function NoReport() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("h1", {
      children: "No security audit report available for this file"
    }), /* @__PURE__ */ jsxs("p", {
      children: ["Please click the ", /* @__PURE__ */ jsx("img", {
        src: logo,
        style: {
          width: 16,
          height: 16
        }
      }), " button to run OpenAPI Security Audit"]
    })]
  });
}
const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;
const goToLine = createAsyncThunk("host/goToLine", async ({
  uri,
  line,
  pointer
}, thunkAPI) => {
  const host = thunkAPI.extra;
  host.postMessage({
    command: "goToLine",
    uri,
    line,
    pointer
  });
});
const copyIssueId = createAsyncThunk("host/copyIssueId", async (id2, thunkAPI) => {
  const host = thunkAPI.extra;
  host.postMessage({
    command: "copyIssueId",
    id: id2
  });
});
const openLink = createAsyncThunk("host/openLink", async (href, thunkAPI) => {
  const host = thunkAPI.extra;
  host.postMessage({
    command: "openLink",
    href
  });
});
function Loading() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("h1", {
      children: "Loading security audit report..."
    })
  });
}
function App() {
  const kdb = useAppSelector((state) => state.kdb);
  const display = useAppSelector((state) => state.report.display);
  const issues = useAppSelector((state) => state.report.selected);
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const hostGoToLine = (uri, line, pointer) => dispatch(goToLine({
    uri,
    line,
    pointer
  }));
  const hostCopyIssueId = (id2) => dispatch(copyIssueId(id2));
  const hostOpenLink = (href) => dispatch(openLink(href));
  const cssVars = [];
  if (theme.foreground !== void 0) {
    cssVars.push(`--audit-custom-foreground: ${theme.foreground};`);
  }
  if (theme.background !== void 0) {
    cssVars.push(`--audit-custom-background: ${theme.background};`);
  }
  const style2 = `:root { ${cssVars.join("\n")} }
   body {
     background-color: var(--audit-background);
     color: var(--audit-foreground);
     }
  `;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("style", {
      children: style2
    }), /* @__PURE__ */ jsxs("div", {
      className: theme.kind === "dark" ? "vscode-dark" : "",
      children: [display !== "no-report" && /* @__PURE__ */ jsx(Header, {
        openLink: hostOpenLink,
        themeKind: theme.kind
      }), display === "full" && /* @__PURE__ */ jsx(Summary, {
        openLink: hostOpenLink
      }), display === "no-report" && /* @__PURE__ */ jsx(NoReport, {}), display === "loading" && /* @__PURE__ */ jsx(Loading, {}), issues.map((issue) => /* @__PURE__ */ jsx(Issue, {
        kdb,
        issue,
        goToLine: hostGoToLine,
        copyIssueId: hostCopyIssueId,
        openLink: hostOpenLink
      }, issue.key)), display === "full" && issues.length === 0 && /* @__PURE__ */ jsx("h3", {
        children: "No issues found in this file"
      }), display === "partial" && /* @__PURE__ */ jsx(GoToFullReport, {
        goToFullReport: () => dispatch(goToFullReport())
      }), display !== "no-report" && /* @__PURE__ */ jsx(Footer, {
        openLink: hostOpenLink,
        themeKind: theme.kind
      })]
    })]
  });
}
var bootstrap_min = "";
var style = "";
function renderAuditReport(host, kdb, theme) {
  const store = initStore(host, kdb, theme);
  ReactDOM.render(/* @__PURE__ */ jsx(React.StrictMode, {
    children: /* @__PURE__ */ jsx(Provider, {
      store,
      children: /* @__PURE__ */ jsx(App, {})
    })
  }), document.getElementById("root"));
  window.addEventListener("message", (event) => {
    const message = event.data;
    switch (message.command) {
      case "showFullReport":
        window.scrollTo(0, 0);
        store.dispatch(showFullReport(message.report));
        break;
      case "showPartialReport":
        window.scrollTo(0, 0);
        store.dispatch(showPartialReport({
          report: message.report,
          ids: message.ids,
          uri: message.uri
        }));
        break;
      case "showNoReport":
        window.scrollTo(0, 0);
        store.dispatch(showNoReport());
        break;
      case "changeTheme":
        store.dispatch(changeTheme({
          kind: message.kind,
          foreground: message.foreground,
          background: message.background
        }));
        break;
    }
  });
}
window.renderAuditReport = renderAuditReport;
