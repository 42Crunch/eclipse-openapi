import { k as mn, _ as w, r as l } from "./styled-components.browser.esm.b4077a0f.js";
function pe(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), r, u;
  for (u = 0; u < i.length; u++)
    r = i[u], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var Tt = { exports: {} }, In = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", yn = In, bn = yn;
function Rt() {
}
function Kt() {
}
Kt.resetWarningCache = Rt;
var xn = function() {
  function e(i, r, u, o, f, k) {
    if (k !== bn) {
      var x = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw x.name = "Invariant Violation", x;
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
    checkPropTypes: Kt,
    resetWarningCache: Rt
  };
  return n.PropTypes = n, n;
};
Tt.exports = xn();
var wn = Tt.exports;
const a = /* @__PURE__ */ mn(wn);
var O = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze = 60103, Ge = 60106, Se = 60107, ke = 60108, De = 60114, Ee = 60109, Te = 60110, Re = 60112, Ke = 60113, Je = 60120, Fe = 60115, Be = 60116, Ft = 60121, Bt = 60122, Pt = 60117, Ht = 60129, At = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var N = Symbol.for;
  ze = N("react.element"), Ge = N("react.portal"), Se = N("react.fragment"), ke = N("react.strict_mode"), De = N("react.profiler"), Ee = N("react.provider"), Te = N("react.context"), Re = N("react.forward_ref"), Ke = N("react.suspense"), Je = N("react.suspense_list"), Fe = N("react.memo"), Be = N("react.lazy"), Ft = N("react.block"), Bt = N("react.server.block"), Pt = N("react.fundamental"), Ht = N("react.debug_trace_mode"), At = N("react.legacy_hidden");
}
function ne(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ze:
        switch (e = e.type, e) {
          case Se:
          case De:
          case ke:
          case Ke:
          case Je:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Te:
              case Re:
              case Be:
              case Fe:
              case Ee:
                return e;
              default:
                return t;
            }
        }
      case Ge:
        return t;
    }
  }
}
var Mn = Ee, Cn = ze, On = Re, Sn = Se, kn = Be, Dn = Fe, En = Ge, Tn = De, Rn = ke, Kn = Ke;
O.ContextConsumer = Te;
O.ContextProvider = Mn;
O.Element = Cn;
O.ForwardRef = On;
O.Fragment = Sn;
O.Lazy = kn;
O.Memo = Dn;
O.Portal = En;
O.Profiler = Tn;
O.StrictMode = Rn;
O.Suspense = Kn;
O.isAsyncMode = function() {
  return !1;
};
O.isConcurrentMode = function() {
  return !1;
};
O.isContextConsumer = function(e) {
  return ne(e) === Te;
};
O.isContextProvider = function(e) {
  return ne(e) === Ee;
};
O.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ze;
};
O.isForwardRef = function(e) {
  return ne(e) === Re;
};
O.isFragment = function(e) {
  return ne(e) === Se;
};
O.isLazy = function(e) {
  return ne(e) === Be;
};
O.isMemo = function(e) {
  return ne(e) === Fe;
};
O.isPortal = function(e) {
  return ne(e) === Ge;
};
O.isProfiler = function(e) {
  return ne(e) === De;
};
O.isStrictMode = function(e) {
  return ne(e) === ke;
};
O.isSuspense = function(e) {
  return ne(e) === Ke;
};
O.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Se || e === De || e === Ht || e === ke || e === Ke || e === Je || e === At || typeof e == "object" && e !== null && (e.$$typeof === Be || e.$$typeof === Fe || e.$$typeof === Ee || e.$$typeof === Te || e.$$typeof === Re || e.$$typeof === Pt || e.$$typeof === Ft || e[0] === Bt);
};
O.typeOf = ne;
let St = (e) => typeof e == "object" && e != null && e.nodeType === 1, kt = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", qe = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    let n = getComputedStyle(e, null);
    return kt(n.overflowY, t) || kt(n.overflowX, t) || ((i) => {
      let r = ((u) => {
        if (!u.ownerDocument || !u.ownerDocument.defaultView)
          return null;
        try {
          return u.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(i);
      return !!r && (r.clientHeight < i.scrollHeight || r.clientWidth < i.scrollWidth);
    })(e);
  }
  return !1;
}, He = (e, t, n, i, r, u, o, f) => u < e && o > t || u > e && o < t ? 0 : u <= e && f <= n || o >= t && f >= n ? u - e - i : o > t && f < n || u < e && f > n ? o - t + r : 0, Fn = (e) => {
  let t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
};
var Bn = (e, t) => {
  var n, i, r, u, o, f;
  if (typeof document > "u")
    return [];
  let { scrollMode: k, block: x, inline: b, boundary: c, skipOverflowHiddenElements: M } = t, h = typeof c == "function" ? c : (ee) => ee !== c;
  if (!St(e))
    throw new TypeError("Invalid target");
  let H = document.scrollingElement || document.documentElement, _ = [], B = e;
  for (; St(B) && h(B); ) {
    if (B = Fn(B), B === H) {
      _.push(B);
      break;
    }
    B != null && B === document.body && qe(B) && !qe(document.documentElement) || B != null && qe(B, M) && _.push(B);
  }
  let q = (i = (n = window.visualViewport) == null ? void 0 : n.width) != null ? i : innerWidth, j = (u = (r = window.visualViewport) == null ? void 0 : r.height) != null ? u : innerHeight, z = (o = window.scrollX) != null ? o : pageXOffset, C = (f = window.scrollY) != null ? f : pageYOffset, { height: X, width: R, top: m, right: K, bottom: E, left: A } = e.getBoundingClientRect(), V = x === "start" || x === "nearest" ? m : x === "end" ? E : m + X / 2, P = b === "center" ? A + R / 2 : b === "end" ? K : A, oe = [];
  for (let ee = 0; ee < _.length; ee++) {
    let S = _[ee], { height: ue, width: ae, top: le, right: me, bottom: Ie, left: se } = S.getBoundingClientRect();
    if (k === "if-needed" && m >= 0 && A >= 0 && E <= j && K <= q && m >= le && E <= Ie && A >= se && K <= me)
      return oe;
    let de = getComputedStyle(S), ce = parseInt(de.borderLeftWidth, 10), I = parseInt(de.borderTopWidth, 10), y = parseInt(de.borderRightWidth, 10), p = parseInt(de.borderBottomWidth, 10), s = 0, d = 0, g = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - ce - y : 0, v = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - I - p : 0, F = "offsetWidth" in S ? S.offsetWidth === 0 ? 0 : ae / S.offsetWidth : 0, $ = "offsetHeight" in S ? S.offsetHeight === 0 ? 0 : ue / S.offsetHeight : 0;
    if (H === S)
      s = x === "start" ? V : x === "end" ? V - j : x === "nearest" ? He(C, C + j, j, I, p, C + V, C + V + X, X) : V - j / 2, d = b === "start" ? P : b === "center" ? P - q / 2 : b === "end" ? P - q : He(z, z + q, q, ce, y, z + P, z + P + R, R), s = Math.max(0, s + C), d = Math.max(0, d + z);
    else {
      s = x === "start" ? V - le - I : x === "end" ? V - Ie + p + v : x === "nearest" ? He(le, Ie, ue, I, p + v, V, V + X, X) : V - (le + ue / 2) + v / 2, d = b === "start" ? P - se - ce : b === "center" ? P - (se + ae / 2) + g / 2 : b === "end" ? P - me + y + g : He(se, me, ae, ce, y + g, P, P + R, R);
      let { scrollLeft: L, scrollTop: T } = S;
      s = Math.max(0, Math.min(T + s / $, S.scrollHeight - ue / $ + v)), d = Math.max(0, Math.min(L + d / F, S.scrollWidth - ae / F + g)), V += T - s, P += L - d;
    }
    oe.push({ el: S, top: s, left: d });
  }
  return oe;
}, $e = function() {
  return $e = Object.assign || function(t) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var u in n)
        Object.prototype.hasOwnProperty.call(n, u) && (t[u] = n[u]);
    }
    return t;
  }, $e.apply(this, arguments);
};
function mr(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
      t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
  return n;
}
function Ir(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = t.length, u; i < r; i++)
      (u || !(i in t)) && (u || (u = Array.prototype.slice.call(t, 0, i)), u[i] = t[i]);
  return e.concat(u || Array.prototype.slice.call(t));
}
var Pn = 0;
function Qe() {
}
function Hn(e, t) {
  if (e) {
    var n = Bn(e, {
      boundary: t,
      block: "nearest",
      scrollMode: "if-needed"
    });
    n.forEach(function(i) {
      var r = i.el, u = i.top, o = i.left;
      r.scrollTop = u, r.scrollLeft = o;
    });
  }
}
function Dt(e, t, n) {
  var i = e === t || t instanceof n.Node && e.contains && e.contains(t);
  return i;
}
function Ze(e, t) {
  var n;
  function i() {
    n && clearTimeout(n);
  }
  function r() {
    for (var u = arguments.length, o = new Array(u), f = 0; f < u; f++)
      o[f] = arguments[f];
    i(), n = setTimeout(function() {
      n = null, e.apply(void 0, o);
    }, t);
  }
  return r.cancel = i, r;
}
function U() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(i) {
    for (var r = arguments.length, u = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      u[o - 1] = arguments[o];
    return t.some(function(f) {
      return f && f.apply(void 0, [i].concat(u)), i.preventDownshiftDefault || i.hasOwnProperty("nativeEvent") && i.nativeEvent.preventDownshiftDefault;
    });
  };
}
function we() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(i) {
    t.forEach(function(r) {
      typeof r == "function" ? r(i) : r && (r.current = i);
    });
  };
}
function An() {
  return String(Pn++);
}
function Vn(e) {
  var t = e.isOpen, n = e.resultCount, i = e.previousResultCount;
  return t ? n ? n !== i ? n + " result" + (n === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function Le(e, t) {
  return Object.keys(e).reduce(function(n, i) {
    return n[i] = Vt(t, i) ? t[i] : e[i], n;
  }, {});
}
function Vt(e, t) {
  return e[t] !== void 0;
}
function $t(e) {
  var t = e.key, n = e.keyCode;
  return n >= 37 && n <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
function ve(e, t, n, i, r) {
  if (r === void 0 && (r = !0), n === 0)
    return -1;
  var u = n - 1;
  (typeof t != "number" || t < 0 || t >= n) && (t = e > 0 ? -1 : u + 1);
  var o = t + e;
  o < 0 ? o = r ? u : 0 : o > u && (o = r ? 0 : u);
  var f = Ce(e, o, n, i, r);
  return f === -1 ? t >= n ? -1 : t : f;
}
function Ce(e, t, n, i, r) {
  var u = i(t);
  if (!u || !u.hasAttribute("disabled"))
    return t;
  if (e > 0) {
    for (var o = t + 1; o < n; o++)
      if (!i(o).hasAttribute("disabled"))
        return o;
  } else
    for (var f = t - 1; f >= 0; f--)
      if (!i(f).hasAttribute("disabled"))
        return f;
  return r ? e > 0 ? Ce(1, 0, n, i, !1) : Ce(-1, n - 1, n, i, !1) : -1;
}
function Et(e, t, n, i) {
  return i === void 0 && (i = !0), t.some(function(r) {
    return r && (Dt(r, e, n) || i && Dt(r, n.document.activeElement, n));
  });
}
var $n = Ze(function(e) {
  Lt(e).textContent = "";
}, 500);
function Ln(e, t) {
  var n = Lt(t);
  e && (n.textContent = e, $n(t));
}
function Lt(e) {
  e === void 0 && (e = document);
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
var Nn = ["isInitialMount", "highlightedIndex", "items", "environment"], Nt = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function Wn(e, t, n) {
  var i = e.props, r = e.type, u = {};
  Object.keys(t).forEach(function(o) {
    _n(o, e, t, n), n[o] !== t[o] && (u[o] = n[o]);
  }), i.onStateChange && Object.keys(u).length && i.onStateChange(w({
    type: r
  }, u));
}
function _n(e, t, n, i) {
  var r = t.props, u = t.type, o = "on" + et(e) + "Change";
  r[o] && i[e] !== void 0 && i[e] !== n[e] && r[o](w({
    type: u
  }, i));
}
function Un(e, t) {
  return t.changes;
}
function jn(e) {
  var t = e.selectedItem, n = e.itemToString;
  return t ? n(t) + " has been selected." : "";
}
var zn = Ze(function(e, t) {
  Ln(e(), t);
}, 200), Gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? l.useLayoutEffect : l.useEffect;
function Wt(e) {
  var t = e.id, n = t === void 0 ? "downshift-" + An() : t, i = e.labelId, r = e.menuId, u = e.getItemId, o = e.toggleButtonId, f = e.inputId, k = l.useRef({
    labelId: i || n + "-label",
    menuId: r || n + "-menu",
    getItemId: u || function(x) {
      return n + "-item-" + x;
    },
    toggleButtonId: o || n + "-toggle-button",
    inputId: f || n + "-input"
  });
  return k.current;
}
function _t(e, t, n, i) {
  var r, u;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(i);
    r = n[t], u = t;
  } else
    u = t === void 0 ? n.indexOf(e) : t, r = e;
  return [r, u];
}
function Yn(e) {
  return e ? String(e) : "";
}
function qn(e) {
  return /^\S{1}$/.test(e);
}
function et(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function tt(e) {
  var t = l.useRef(e);
  return t.current = e, t;
}
function Ut(e, t, n) {
  var i = l.useRef(), r = l.useRef(), u = l.useCallback(function(M, h) {
    r.current = h, M = Le(M, h.props);
    var H = e(M, h), _ = h.props.stateReducer(M, w({}, h, {
      changes: H
    }));
    return _;
  }, [e]), o = l.useReducer(u, t), f = o[0], k = o[1], x = tt(n), b = l.useCallback(function(M) {
    return k(w({
      props: x.current
    }, M));
  }, [x]), c = r.current;
  return l.useEffect(function() {
    c && i.current && i.current !== f && Wn(c, Le(i.current, c.props), f), i.current = f;
  }, [f, n, c]), [f, b];
}
function Xn(e, t, n) {
  var i = Ut(e, t, n), r = i[0], u = i[1];
  return [Le(r, n), u];
}
var Oe = {
  itemToString: Yn,
  stateReducer: Un,
  getA11ySelectionMessage: jn,
  scrollIntoView: Hn,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? {} : window
  )
};
function Z(e, t, n) {
  n === void 0 && (n = Nt);
  var i = e["default" + et(t)];
  return i !== void 0 ? i : n[t];
}
function Ae(e, t, n) {
  n === void 0 && (n = Nt);
  var i = e[t];
  if (i !== void 0)
    return i;
  var r = e["initial" + et(t)];
  return r !== void 0 ? r : Z(e, t, n);
}
function jt(e) {
  var t = Ae(e, "selectedItem"), n = Ae(e, "isOpen"), i = Ae(e, "highlightedIndex"), r = Ae(e, "inputValue");
  return {
    highlightedIndex: i < 0 && t && n ? e.items.indexOf(t) : i,
    isOpen: n,
    selectedItem: t,
    inputValue: r
  };
}
function Me(e, t, n) {
  var i = e.items, r = e.initialHighlightedIndex, u = e.defaultHighlightedIndex, o = t.selectedItem, f = t.highlightedIndex;
  return i.length === 0 ? -1 : r !== void 0 && f === r ? r : u !== void 0 ? u : o ? i.indexOf(o) : n === 0 ? -1 : n < 0 ? i.length - 1 : 0;
}
function zt(e, t, n, i) {
  var r = l.useRef({
    isMouseDown: !1,
    isTouchMove: !1
  });
  return l.useEffect(function() {
    if ((n == null ? void 0 : n.addEventListener) != null) {
      var u = function() {
        r.current.isMouseDown = !0;
      }, o = function(c) {
        r.current.isMouseDown = !1, e && !Et(c.target, t.map(function(M) {
          return M.current;
        }), n) && i();
      }, f = function() {
        r.current.isTouchMove = !1;
      }, k = function() {
        r.current.isTouchMove = !0;
      }, x = function(c) {
        e && !r.current.isTouchMove && !Et(c.target, t.map(function(M) {
          return M.current;
        }), n, !1) && i();
      };
      return n.addEventListener("mousedown", u), n.addEventListener("mouseup", o), n.addEventListener("touchstart", f), n.addEventListener("touchmove", k), n.addEventListener("touchend", x), function() {
        n.removeEventListener("mousedown", u), n.removeEventListener("mouseup", o), n.removeEventListener("touchstart", f), n.removeEventListener("touchmove", k), n.removeEventListener("touchend", x);
      };
    }
  }, [e, n]), r;
}
var Gt = function() {
  return Qe;
};
function Ne(e, t, n) {
  var i = n.isInitialMount, r = n.highlightedIndex, u = n.items, o = n.environment, f = pe(n, Nn);
  l.useEffect(function() {
    i || zn(function() {
      return e(w({
        highlightedIndex: r,
        highlightedItem: u[r],
        resultCount: u.length
      }, f));
    }, o.document);
  }, t);
}
function Yt(e) {
  var t = e.highlightedIndex, n = e.isOpen, i = e.itemRefs, r = e.getItemNodeFromIndex, u = e.menuElement, o = e.scrollIntoView, f = l.useRef(!0);
  return Gn(function() {
    t < 0 || !n || !Object.keys(i.current).length || (f.current === !1 ? f.current = !0 : o(r(t), u));
  }, [t]), f;
}
var qt = Qe;
function We(e, t, n) {
  var i;
  n === void 0 && (n = !0);
  var r = ((i = e.items) == null ? void 0 : i.length) && t >= 0;
  return w({
    isOpen: !1,
    highlightedIndex: -1
  }, r && w({
    selectedItem: e.items[t],
    isOpen: Z(e, "isOpen"),
    highlightedIndex: Z(e, "highlightedIndex")
  }, n && {
    inputValue: e.itemToString(e.items[t])
  }));
}
function Xt(e, t, n) {
  var i = t.type, r = t.props, u;
  switch (i) {
    case n.ItemMouseMove:
      u = {
        highlightedIndex: t.disabled ? -1 : t.index
      };
      break;
    case n.MenuMouseLeave:
      u = {
        highlightedIndex: -1
      };
      break;
    case n.ToggleButtonClick:
    case n.FunctionToggleMenu:
      u = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Me(r, e, 0)
      };
      break;
    case n.FunctionOpenMenu:
      u = {
        isOpen: !0,
        highlightedIndex: Me(r, e, 0)
      };
      break;
    case n.FunctionCloseMenu:
      u = {
        isOpen: !1
      };
      break;
    case n.FunctionSetHighlightedIndex:
      u = {
        highlightedIndex: t.highlightedIndex
      };
      break;
    case n.FunctionSetInputValue:
      u = {
        inputValue: t.inputValue
      };
      break;
    case n.FunctionReset:
      u = {
        highlightedIndex: Z(r, "highlightedIndex"),
        isOpen: Z(r, "isOpen"),
        selectedItem: Z(r, "selectedItem"),
        inputValue: Z(r, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return w({}, e, u);
}
function Jn(e) {
  for (var t = e.keysSoFar, n = e.highlightedIndex, i = e.items, r = e.itemToString, u = e.getItemNodeFromIndex, o = t.toLowerCase(), f = 0; f < i.length; f++) {
    var k = (f + n + (t.length < 2 ? 1 : 0)) % i.length, x = i[k];
    if (x !== void 0 && r(x).toLowerCase().startsWith(o)) {
      var b = u(k);
      if (!(b != null && b.hasAttribute("disabled")))
        return k;
    }
  }
  return n;
}
a.array.isRequired, a.func, a.func, a.func, a.number, a.number, a.number, a.bool, a.bool, a.bool, a.any, a.any, a.any, a.string, a.string, a.string, a.func, a.string, a.func, a.func, a.func, a.func, a.func, a.shape({
  addEventListener: a.func,
  removeEventListener: a.func,
  document: a.shape({
    getElementById: a.func,
    activeElement: a.any,
    body: a.any
  })
});
function Qn(e) {
  var t = e.isOpen, n = e.resultCount, i = e.previousResultCount;
  return t ? n ? n !== i ? "".concat(n, " result").concat(n === 1 ? " is" : "s are", " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.") : "" : "No results are available." : "";
}
var Zn = $e($e({}, Oe), { getA11yStatusMessage: Qn }), er = Qe, Ve = 0, nt = 1, rt = 2, _e = 3, it = 4, ot = 5, ut = 6, at = 7, lt = 8, st = 9, dt = 10, Ue = 11, Jt = 12, Qt = 13, ct = 14, Zt = 15, en = 16, tn = 17, nn = 18, ft = 19, Xe = 20, rn = 21, on = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: Ve,
  ToggleButtonKeyDownArrowDown: nt,
  ToggleButtonKeyDownArrowUp: rt,
  ToggleButtonKeyDownCharacter: _e,
  ToggleButtonKeyDownEscape: it,
  ToggleButtonKeyDownHome: ot,
  ToggleButtonKeyDownEnd: ut,
  ToggleButtonKeyDownEnter: at,
  ToggleButtonKeyDownSpaceButton: lt,
  ToggleButtonKeyDownPageUp: st,
  ToggleButtonKeyDownPageDown: dt,
  ToggleButtonBlur: Ue,
  MenuMouseLeave: Jt,
  ItemMouseMove: Qt,
  ItemClick: ct,
  FunctionToggleMenu: Zt,
  FunctionOpenMenu: en,
  FunctionCloseMenu: tn,
  FunctionSetHighlightedIndex: nn,
  FunctionSelectItem: ft,
  FunctionSetInputValue: Xe,
  FunctionReset: rn
});
function tr(e, t) {
  var n, i = t.type, r = t.props, u = t.altKey, o;
  switch (i) {
    case ct:
      o = {
        isOpen: Z(r, "isOpen"),
        highlightedIndex: Z(r, "highlightedIndex"),
        selectedItem: r.items[t.index]
      };
      break;
    case _e:
      {
        var f = t.key, k = "" + e.inputValue + f, x = !e.isOpen && e.selectedItem ? r.items.indexOf(e.selectedItem) : e.highlightedIndex, b = Jn({
          keysSoFar: k,
          highlightedIndex: x,
          items: r.items,
          itemToString: r.itemToString,
          getItemNodeFromIndex: t.getItemNodeFromIndex
        });
        o = {
          inputValue: k,
          highlightedIndex: b,
          isOpen: !0
        };
      }
      break;
    case nt:
      {
        var c = e.isOpen ? ve(1, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !1) : u && e.selectedItem == null ? -1 : Me(r, e, 1);
        o = {
          highlightedIndex: c,
          isOpen: !0
        };
      }
      break;
    case rt:
      if (e.isOpen && u)
        o = We(r, e.highlightedIndex, !1);
      else {
        var M = e.isOpen ? ve(-1, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !1) : Me(r, e, -1);
        o = {
          highlightedIndex: M,
          isOpen: !0
        };
      }
      break;
    case at:
    case lt:
      o = We(r, e.highlightedIndex, !1);
      break;
    case ot:
      o = {
        highlightedIndex: Ce(1, 0, r.items.length, t.getItemNodeFromIndex, !1),
        isOpen: !0
      };
      break;
    case ut:
      o = {
        highlightedIndex: Ce(-1, r.items.length - 1, r.items.length, t.getItemNodeFromIndex, !1),
        isOpen: !0
      };
      break;
    case st:
      o = {
        highlightedIndex: ve(-10, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !1)
      };
      break;
    case dt:
      o = {
        highlightedIndex: ve(10, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !1)
      };
      break;
    case it:
      o = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case Ue:
      o = w({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((n = r.items) == null ? void 0 : n.length) && {
        selectedItem: r.items[e.highlightedIndex]
      });
      break;
    case ft:
      o = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return Xt(e, t, on);
  }
  return w({}, e, o);
}
var nr = ["onMouseLeave", "refKey", "onKeyDown", "onBlur", "ref"], rr = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], ir = ["item", "index", "onMouseMove", "onClick", "onPress", "refKey", "ref", "disabled"];
or.stateChangeTypes = on;
function or(e) {
  e === void 0 && (e = {}), er();
  var t = w({}, Zn, e), n = t.items, i = t.scrollIntoView, r = t.environment, u = t.itemToString, o = t.getA11ySelectionMessage, f = t.getA11yStatusMessage, k = jt(t), x = Xn(tr, k, t), b = x[0], c = x[1], M = b.isOpen, h = b.highlightedIndex, H = b.selectedItem, _ = b.inputValue, B = l.useRef(null), q = l.useRef(null), j = l.useRef({}), z = l.useRef(null), C = Wt(t), X = l.useRef(), R = l.useRef(!0), m = tt({
    state: b,
    props: t
  }), K = l.useCallback(function(I) {
    return j.current[C.getItemId(I)];
  }, [C]);
  Ne(f, [M, h, _, n], w({
    isInitialMount: R.current,
    previousResultCount: X.current,
    items: n,
    environment: r,
    itemToString: u
  }, b)), Ne(o, [H], w({
    isInitialMount: R.current,
    previousResultCount: X.current,
    items: n,
    environment: r,
    itemToString: u
  }, b));
  var E = Yt({
    menuElement: q.current,
    highlightedIndex: h,
    isOpen: M,
    itemRefs: j,
    scrollIntoView: i,
    getItemNodeFromIndex: K
  });
  l.useEffect(function() {
    return z.current = Ze(function(I) {
      I({
        type: Xe,
        inputValue: ""
      });
    }, 500), function() {
      z.current.cancel();
    };
  }, []), l.useEffect(function() {
    _ && z.current(c);
  }, [c, _]), qt({
    isInitialMount: R.current,
    props: t,
    state: b
  }), l.useEffect(function() {
    R.current || (X.current = n.length);
  });
  var A = zt(M, [q, B], r, function() {
    c({
      type: Ue
    });
  }), V = Gt();
  l.useEffect(function() {
    return R.current = !1, function() {
      R.current = !0;
    };
  }, []), l.useEffect(function() {
    M || (j.current = {});
  }, [M]);
  var P = l.useMemo(function() {
    return {
      ArrowDown: function(y) {
        y.preventDefault(), c({
          type: nt,
          getItemNodeFromIndex: K,
          altKey: y.altKey
        });
      },
      ArrowUp: function(y) {
        y.preventDefault(), c({
          type: rt,
          getItemNodeFromIndex: K,
          altKey: y.altKey
        });
      },
      Home: function(y) {
        y.preventDefault(), c({
          type: ot,
          getItemNodeFromIndex: K
        });
      },
      End: function(y) {
        y.preventDefault(), c({
          type: ut,
          getItemNodeFromIndex: K
        });
      },
      Escape: function() {
        m.current.state.isOpen && c({
          type: it
        });
      },
      Enter: function(y) {
        y.preventDefault(), c({
          type: m.current.state.isOpen ? at : Ve
        });
      },
      PageUp: function(y) {
        m.current.state.isOpen && (y.preventDefault(), c({
          type: st,
          getItemNodeFromIndex: K
        }));
      },
      PageDown: function(y) {
        m.current.state.isOpen && (y.preventDefault(), c({
          type: dt,
          getItemNodeFromIndex: K
        }));
      },
      " ": function(y) {
        y.preventDefault();
        var p = m.current.state;
        if (!p.isOpen) {
          c({
            type: Ve
          });
          return;
        }
        p.inputValue ? c({
          type: _e,
          key: " ",
          getItemNodeFromIndex: K
        }) : c({
          type: lt
        });
      }
    };
  }, [c, K, m]), oe = l.useCallback(function() {
    c({
      type: Zt
    });
  }, [c]), ee = l.useCallback(function() {
    c({
      type: tn
    });
  }, [c]), S = l.useCallback(function() {
    c({
      type: en
    });
  }, [c]), ue = l.useCallback(function(I) {
    c({
      type: nn,
      highlightedIndex: I
    });
  }, [c]), ae = l.useCallback(function(I) {
    c({
      type: ft,
      selectedItem: I
    });
  }, [c]), le = l.useCallback(function() {
    c({
      type: rn
    });
  }, [c]), me = l.useCallback(function(I) {
    c({
      type: Xe,
      inputValue: I
    });
  }, [c]), Ie = l.useCallback(function(I) {
    return w({
      id: C.labelId,
      htmlFor: C.toggleButtonId
    }, I);
  }, [C]), se = l.useCallback(function(I, y) {
    var p, s = I === void 0 ? {} : I, d = s.onMouseLeave, g = s.refKey, v = g === void 0 ? "ref" : g;
    s.onKeyDown, s.onBlur;
    var F = s.ref, $ = pe(s, nr), L = y === void 0 ? {} : y;
    L.suppressRefError;
    var T = function() {
      c({
        type: Jt
      });
    };
    return w((p = {}, p[v] = we(F, function(G) {
      q.current = G;
    }), p.id = C.menuId, p.role = "listbox", p["aria-labelledby"] = C.labelId, p.tabIndex = -1, p.onMouseLeave = U(d, T), p), $);
  }, [c, V, C]), de = l.useCallback(function(I, y) {
    var p, s = I === void 0 ? {} : I, d = s.onBlur, g = s.onClick;
    s.onPress;
    var v = s.onKeyDown, F = s.refKey, $ = F === void 0 ? "ref" : F, L = s.ref, T = pe(s, rr), G = y === void 0 ? {} : y;
    G.suppressRefError;
    var W = m.current.state, J = function() {
      c({
        type: Ve
      });
    }, ye = function() {
      W.isOpen && !A.current.isMouseDown && c({
        type: Ue
      });
    }, te = function(fe) {
      var Q = $t(fe);
      Q && P[Q] ? P[Q](fe) : qn(Q) && c({
        type: _e,
        key: Q,
        getItemNodeFromIndex: K
      });
    }, re = w((p = {}, p[$] = we(L, function(D) {
      B.current = D;
    }), p["aria-activedescendant"] = W.isOpen && W.highlightedIndex > -1 ? C.getItemId(W.highlightedIndex) : "", p["aria-controls"] = C.menuId, p["aria-expanded"] = m.current.state.isOpen, p["aria-haspopup"] = "listbox", p["aria-labelledby"] = "" + C.labelId, p.id = C.toggleButtonId, p.role = "combobox", p.tabIndex = 0, p.onBlur = U(d, ye), p), T);
    return T.disabled || (re.onClick = U(g, J), re.onKeyDown = U(v, te)), re;
  }, [m, C, V, c, A, P, K]), ce = l.useCallback(function(I) {
    var y, p = I === void 0 ? {} : I, s = p.item, d = p.index, g = p.onMouseMove, v = p.onClick;
    p.onPress;
    var F = p.refKey, $ = F === void 0 ? "ref" : F, L = p.ref, T = p.disabled, G = pe(p, ir), W = m.current, J = W.state, ye = W.props, te = _t(s, d, ye.items, "Pass either item or index to getItemProps!"), re = te[0], D = te[1], fe = function() {
      D !== J.highlightedIndex && (E.current = !1, c({
        type: Qt,
        index: D,
        disabled: T
      }));
    }, Q = function() {
      c({
        type: ct,
        index: D
      });
    }, be = w((y = {
      disabled: T,
      role: "option",
      "aria-selected": "" + (re === H),
      id: C.getItemId(D)
    }, y[$] = we(L, function(Y) {
      Y && (j.current[C.getItemId(D)] = Y);
    }), y), G);
    return T || (be.onClick = U(v, Q)), be.onMouseMove = U(g, fe), be;
  }, [m, H, C, E, c]);
  return {
    // prop getters.
    getToggleButtonProps: de,
    getLabelProps: Ie,
    getMenuProps: se,
    getItemProps: ce,
    // actions.
    toggleMenu: oe,
    openMenu: S,
    closeMenu: ee,
    setHighlightedIndex: ue,
    selectItem: ae,
    reset: le,
    setInputValue: me,
    // state.
    highlightedIndex: h,
    isOpen: M,
    selectedItem: H,
    inputValue: _
  };
}
var gt = 0, ht = 1, pt = 2, vt = 3, mt = 4, It = 5, yt = 6, bt = 7, xt = 8, je = 9, wt = 10, un = 11, an = 12, Mt = 13, ln = 14, sn = 15, dn = 16, cn = 17, fn = 18, Ct = 19, gn = 20, hn = 21, Ot = 22, pn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: gt,
  InputKeyDownArrowUp: ht,
  InputKeyDownEscape: pt,
  InputKeyDownHome: vt,
  InputKeyDownEnd: mt,
  InputKeyDownPageUp: It,
  InputKeyDownPageDown: yt,
  InputKeyDownEnter: bt,
  InputChange: xt,
  InputBlur: je,
  InputFocus: wt,
  MenuMouseLeave: un,
  ItemMouseMove: an,
  ItemClick: Mt,
  ToggleButtonClick: ln,
  FunctionToggleMenu: sn,
  FunctionOpenMenu: dn,
  FunctionCloseMenu: cn,
  FunctionSetHighlightedIndex: fn,
  FunctionSelectItem: Ct,
  FunctionSetInputValue: gn,
  FunctionReset: hn,
  ControlledPropUpdatedSelectedItem: Ot
});
function ur(e) {
  var t = jt(e), n = t.selectedItem, i = t.inputValue;
  return i === "" && n && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (i = e.itemToString(n)), w({}, t, {
    inputValue: i
  });
}
a.array.isRequired, a.func, a.func, a.func, a.func, a.number, a.number, a.number, a.bool, a.bool, a.bool, a.any, a.any, a.any, a.string, a.string, a.string, a.string, a.string, a.string, a.func, a.string, a.string, a.func, a.func, a.func, a.func, a.func, a.func, a.shape({
  addEventListener: a.func,
  removeEventListener: a.func,
  document: a.shape({
    getElementById: a.func,
    activeElement: a.any,
    body: a.any
  })
});
function ar(e, t, n) {
  var i = l.useRef(), r = Ut(e, t, n), u = r[0], o = r[1];
  return l.useEffect(function() {
    Vt(n, "selectedItem") && (n.selectedItemChanged(i.current, n.selectedItem) && o({
      type: Ot,
      inputValue: n.itemToString(n.selectedItem)
    }), i.current = u.selectedItem === i.current ? n.selectedItem : u.selectedItem);
  }, [u.selectedItem, n.selectedItem]), [Le(u, n), o];
}
var lr = w({}, Oe, {
  selectedItemChanged: function(t, n) {
    return t !== n;
  },
  getA11yStatusMessage: Vn
});
function sr(e, t) {
  var n, i = t.type, r = t.props, u = t.altKey, o;
  switch (i) {
    case Mt:
      o = {
        isOpen: Z(r, "isOpen"),
        highlightedIndex: Z(r, "highlightedIndex"),
        selectedItem: r.items[t.index],
        inputValue: r.itemToString(r.items[t.index])
      };
      break;
    case gt:
      e.isOpen ? o = {
        highlightedIndex: ve(1, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !0)
      } : o = {
        highlightedIndex: u && e.selectedItem == null ? -1 : Me(r, e, 1, t.getItemNodeFromIndex),
        isOpen: r.items.length >= 0
      };
      break;
    case ht:
      e.isOpen ? u ? o = We(r, e.highlightedIndex) : o = {
        highlightedIndex: ve(-1, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !0)
      } : o = {
        highlightedIndex: Me(r, e, -1, t.getItemNodeFromIndex),
        isOpen: r.items.length >= 0
      };
      break;
    case bt:
      o = We(r, e.highlightedIndex);
      break;
    case pt:
      o = w({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case It:
      o = {
        highlightedIndex: ve(-10, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !1)
      };
      break;
    case yt:
      o = {
        highlightedIndex: ve(10, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !1)
      };
      break;
    case vt:
      o = {
        highlightedIndex: Ce(1, 0, r.items.length, t.getItemNodeFromIndex, !1)
      };
      break;
    case mt:
      o = {
        highlightedIndex: Ce(-1, r.items.length - 1, r.items.length, t.getItemNodeFromIndex, !1)
      };
      break;
    case je:
      o = w({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((n = r.items) == null ? void 0 : n.length) && t.selectItem && {
        selectedItem: r.items[e.highlightedIndex],
        inputValue: r.itemToString(r.items[e.highlightedIndex])
      });
      break;
    case xt:
      o = {
        isOpen: !0,
        highlightedIndex: Z(r, "highlightedIndex"),
        inputValue: t.inputValue
      };
      break;
    case wt:
      o = {
        isOpen: !0,
        highlightedIndex: Me(r, e, 0)
      };
      break;
    case Ct:
      o = {
        selectedItem: t.selectedItem,
        inputValue: r.itemToString(t.selectedItem)
      };
      break;
    case Ot:
      o = {
        inputValue: t.inputValue
      };
      break;
    default:
      return Xt(e, t, pn);
  }
  return w({}, e, o);
}
var dr = ["onMouseLeave", "refKey", "ref"], cr = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "disabled"], fr = ["onClick", "onPress", "refKey", "ref"], gr = ["onKeyDown", "onChange", "onInput", "onFocus", "onBlur", "onChangeText", "refKey", "ref"];
hr.stateChangeTypes = pn;
function hr(e) {
  e === void 0 && (e = {});
  var t = w({}, lr, e), n = t.initialIsOpen, i = t.defaultIsOpen, r = t.items, u = t.scrollIntoView, o = t.environment, f = t.getA11yStatusMessage, k = t.getA11ySelectionMessage, x = t.itemToString, b = ur(t), c = ar(sr, b, t), M = c[0], h = c[1], H = M.isOpen, _ = M.highlightedIndex, B = M.selectedItem, q = M.inputValue, j = l.useRef(null), z = l.useRef({}), C = l.useRef(null), X = l.useRef(null), R = l.useRef(!0), m = Wt(t), K = l.useRef(), E = tt({
    state: M,
    props: t
  }), A = l.useCallback(function(s) {
    return z.current[m.getItemId(s)];
  }, [m]);
  Ne(f, [H, _, q, r], w({
    isInitialMount: R.current,
    previousResultCount: K.current,
    items: r,
    environment: o,
    itemToString: x
  }, M)), Ne(k, [B], w({
    isInitialMount: R.current,
    previousResultCount: K.current,
    items: r,
    environment: o,
    itemToString: x
  }, M));
  var V = Yt({
    menuElement: j.current,
    highlightedIndex: _,
    isOpen: H,
    itemRefs: z,
    scrollIntoView: u,
    getItemNodeFromIndex: A
  });
  qt({
    isInitialMount: R.current,
    props: t,
    state: M
  }), l.useEffect(function() {
    var s = n || i || H;
    s && C.current && C.current.focus();
  }, []), l.useEffect(function() {
    R.current || (K.current = r.length);
  });
  var P = zt(H, [C, j, X], o, function() {
    h({
      type: je,
      selectItem: !1
    });
  }), oe = Gt();
  l.useEffect(function() {
    return R.current = !1, function() {
      R.current = !0;
    };
  }, []), l.useEffect(function() {
    var s;
    if (!H)
      z.current = {};
    else if (((s = o.document) == null ? void 0 : s.activeElement) !== C.current) {
      var d;
      C == null || (d = C.current) == null || d.focus();
    }
  }, [H, o]);
  var ee = l.useMemo(function() {
    return {
      ArrowDown: function(d) {
        d.preventDefault(), h({
          type: gt,
          altKey: d.altKey,
          getItemNodeFromIndex: A
        });
      },
      ArrowUp: function(d) {
        d.preventDefault(), h({
          type: ht,
          altKey: d.altKey,
          getItemNodeFromIndex: A
        });
      },
      Home: function(d) {
        E.current.state.isOpen && (d.preventDefault(), h({
          type: vt,
          getItemNodeFromIndex: A
        }));
      },
      End: function(d) {
        E.current.state.isOpen && (d.preventDefault(), h({
          type: mt,
          getItemNodeFromIndex: A
        }));
      },
      Escape: function(d) {
        var g = E.current.state;
        (g.isOpen || g.inputValue || g.selectedItem || g.highlightedIndex > -1) && (d.preventDefault(), h({
          type: pt
        }));
      },
      Enter: function(d) {
        var g = E.current.state;
        !g.isOpen || d.which === 229 || (d.preventDefault(), h({
          type: bt,
          getItemNodeFromIndex: A
        }));
      },
      PageUp: function(d) {
        E.current.state.isOpen && (d.preventDefault(), h({
          type: It,
          getItemNodeFromIndex: A
        }));
      },
      PageDown: function(d) {
        E.current.state.isOpen && (d.preventDefault(), h({
          type: yt,
          getItemNodeFromIndex: A
        }));
      }
    };
  }, [h, E, A]), S = l.useCallback(function(s) {
    return w({
      id: m.labelId,
      htmlFor: m.inputId
    }, s);
  }, [m]), ue = l.useCallback(function(s, d) {
    var g, v = s === void 0 ? {} : s, F = v.onMouseLeave, $ = v.refKey, L = $ === void 0 ? "ref" : $, T = v.ref, G = pe(v, dr), W = d === void 0 ? {} : d;
    return W.suppressRefError, w((g = {}, g[L] = we(T, function(J) {
      j.current = J;
    }), g.id = m.menuId, g.role = "listbox", g["aria-labelledby"] = m.labelId, g.onMouseLeave = U(F, function() {
      h({
        type: un
      });
    }), g), G);
  }, [h, oe, m]), ae = l.useCallback(function(s) {
    var d, g, v = s === void 0 ? {} : s, F = v.item, $ = v.index, L = v.refKey, T = L === void 0 ? "ref" : L, G = v.ref, W = v.onMouseMove, J = v.onMouseDown, ye = v.onClick;
    v.onPress;
    var te = v.disabled, re = pe(v, cr), D = E.current, fe = D.props, Q = D.state, be = _t(F, $, fe.items, "Pass either item or index to getItemProps!"), Y = be[1], Ye = "onClick", Pe = ye, ge = function() {
      Y !== Q.highlightedIndex && (V.current = !1, h({
        type: an,
        index: Y,
        disabled: te
      }));
    }, xe = function() {
      h({
        type: Mt,
        index: Y
      });
    }, he = function(vn) {
      return vn.preventDefault();
    };
    return w((d = {}, d[T] = we(G, function(ie) {
      ie && (z.current[m.getItemId(Y)] = ie);
    }), d.disabled = te, d.role = "option", d["aria-selected"] = "" + (Y === Q.highlightedIndex), d.id = m.getItemId(Y), d), !te && (g = {}, g[Ye] = U(Pe, xe), g), {
      onMouseMove: U(W, ge),
      onMouseDown: U(J, he)
    }, re);
  }, [h, E, V, m]), le = l.useCallback(function(s) {
    var d, g = s === void 0 ? {} : s, v = g.onClick;
    g.onPress;
    var F = g.refKey, $ = F === void 0 ? "ref" : F, L = g.ref, T = pe(g, fr), G = E.current.state, W = function() {
      h({
        type: ln
      });
    };
    return w((d = {}, d[$] = we(L, function(J) {
      X.current = J;
    }), d["aria-controls"] = m.menuId, d["aria-expanded"] = G.isOpen, d.id = m.toggleButtonId, d.tabIndex = -1, d), !T.disabled && w({}, {
      onClick: U(v, W)
    }), T);
  }, [h, E, m]), me = l.useCallback(function(s, d) {
    var g, v = s === void 0 ? {} : s, F = v.onKeyDown, $ = v.onChange, L = v.onInput, T = v.onFocus, G = v.onBlur;
    v.onChangeText;
    var W = v.refKey, J = W === void 0 ? "ref" : W, ye = v.ref, te = pe(v, gr), re = d === void 0 ? {} : d;
    re.suppressRefError;
    var D = E.current.state, fe = function(he) {
      var ie = $t(he);
      ie && ee[ie] && ee[ie](he);
    }, Q = function(he) {
      h({
        type: xt,
        inputValue: he.target.value
      });
    }, be = function(he) {
      D.isOpen && !P.current.isMouseDown && h({
        type: je,
        selectItem: he.relatedTarget !== null
      });
    }, Y = function() {
      D.isOpen || h({
        type: wt
      });
    }, Ye = "onChange", Pe = {};
    if (!te.disabled) {
      var ge;
      Pe = (ge = {}, ge[Ye] = U($, L, Q), ge.onKeyDown = U(F, fe), ge.onBlur = U(G, be), ge.onFocus = U(T, Y), ge);
    }
    return w((g = {}, g[J] = we(ye, function(xe) {
      C.current = xe;
    }), g["aria-activedescendant"] = D.isOpen && D.highlightedIndex > -1 ? m.getItemId(D.highlightedIndex) : "", g["aria-autocomplete"] = "list", g["aria-controls"] = m.menuId, g["aria-expanded"] = D.isOpen, g["aria-labelledby"] = m.labelId, g.autoComplete = "off", g.id = m.inputId, g.role = "combobox", g.value = D.inputValue, g), Pe, te);
  }, [h, ee, E, P, oe, m]), Ie = l.useCallback(function() {
    h({
      type: sn
    });
  }, [h]), se = l.useCallback(function() {
    h({
      type: cn
    });
  }, [h]), de = l.useCallback(function() {
    h({
      type: dn
    });
  }, [h]), ce = l.useCallback(function(s) {
    h({
      type: fn,
      highlightedIndex: s
    });
  }, [h]), I = l.useCallback(function(s) {
    h({
      type: Ct,
      selectedItem: s
    });
  }, [h]), y = l.useCallback(function(s) {
    h({
      type: gn,
      inputValue: s
    });
  }, [h]), p = l.useCallback(function() {
    h({
      type: hn
    });
  }, [h]);
  return {
    // prop getters.
    getItemProps: ae,
    getLabelProps: S,
    getMenuProps: ue,
    getInputProps: me,
    getToggleButtonProps: le,
    // actions.
    toggleMenu: Ie,
    openMenu: de,
    closeMenu: se,
    setHighlightedIndex: ce,
    setInputValue: y,
    selectItem: I,
    reset: p,
    // state.
    highlightedIndex: _,
    isOpen: H,
    selectedItem: B,
    inputValue: q
  };
}
function pr(e) {
  var t = e.removedSelectedItem, n = e.itemToString;
  return n(t) + " has been removed.";
}
a.array, a.array, a.array, a.func, a.func, a.func, a.number, a.number, a.number, a.func, a.func, a.string, a.string, a.shape({
  addEventListener: a.func,
  removeEventListener: a.func,
  document: a.shape({
    getElementById: a.func,
    activeElement: a.any,
    body: a.any
  })
});
Oe.itemToString, Oe.stateReducer, Oe.environment;
export {
  $e as _,
  mr as a,
  Ir as b,
  or as c,
  hr as u
};
