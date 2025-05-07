import { _ as I } from "./extends.hS2Bh-Yp.js";
import { q as Hn, ax as Ke, f as d, R as Te } from "./TriangleExclamation.pAuQxBo5.js";
function fe(e, t) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (t.includes(i)) continue;
    r[i] = e[i];
  }
  return r;
}
var zt = { exports: {} }, $n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Bn = $n, Vn = Bn;
function Gt() {
}
function Xt() {
}
Xt.resetWarningCache = Gt;
var An = function() {
  function e(i, n, a, o, l, v) {
    if (v !== Vn) {
      var f = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw f.name = "Invariant Violation", f;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
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
    checkPropTypes: Xt,
    resetWarningCache: Gt
  };
  return r.PropTypes = r, r;
};
zt.exports = An();
var Fn = zt.exports;
const h = /* @__PURE__ */ Hn(Fn);
var O = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je = Symbol.for("react.element"), Qe = Symbol.for("react.portal"), Ae = Symbol.for("react.fragment"), Fe = Symbol.for("react.strict_mode"), Le = Symbol.for("react.profiler"), _e = Symbol.for("react.provider"), We = Symbol.for("react.context"), Ln = Symbol.for("react.server_context"), Ne = Symbol.for("react.forward_ref"), Ue = Symbol.for("react.suspense"), je = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), _n = Symbol.for("react.offscreen"), Yt;
Yt = Symbol.for("react.module.reference");
function le(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Je:
        switch (e = e.type, e) {
          case Ae:
          case Le:
          case Fe:
          case Ue:
          case je:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ln:
              case We:
              case Ne:
              case ze:
              case qe:
              case _e:
                return e;
              default:
                return t;
            }
        }
      case Qe:
        return t;
    }
  }
}
O.ContextConsumer = We;
O.ContextProvider = _e;
O.Element = Je;
O.ForwardRef = Ne;
O.Fragment = Ae;
O.Lazy = ze;
O.Memo = qe;
O.Portal = Qe;
O.Profiler = Le;
O.StrictMode = Fe;
O.Suspense = Ue;
O.SuspenseList = je;
O.isAsyncMode = function() {
  return !1;
};
O.isConcurrentMode = function() {
  return !1;
};
O.isContextConsumer = function(e) {
  return le(e) === We;
};
O.isContextProvider = function(e) {
  return le(e) === _e;
};
O.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Je;
};
O.isForwardRef = function(e) {
  return le(e) === Ne;
};
O.isFragment = function(e) {
  return le(e) === Ae;
};
O.isLazy = function(e) {
  return le(e) === ze;
};
O.isMemo = function(e) {
  return le(e) === qe;
};
O.isPortal = function(e) {
  return le(e) === Qe;
};
O.isProfiler = function(e) {
  return le(e) === Le;
};
O.isStrictMode = function(e) {
  return le(e) === Fe;
};
O.isSuspense = function(e) {
  return le(e) === Ue;
};
O.isSuspenseList = function(e) {
  return le(e) === je;
};
O.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ae || e === Le || e === Fe || e === Ue || e === je || e === _n || typeof e == "object" && e !== null && (e.$$typeof === ze || e.$$typeof === qe || e.$$typeof === _e || e.$$typeof === We || e.$$typeof === Ne || e.$$typeof === Yt || e.getModuleId !== void 0);
};
O.typeOf = le;
const Lt = (e) => typeof e == "object" && e != null && e.nodeType === 1, _t = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Xe = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const r = getComputedStyle(e, null);
    return _t(r.overflowY, t) || _t(r.overflowX, t) || ((i) => {
      const n = ((a) => {
        if (!a.ownerDocument || !a.ownerDocument.defaultView) return null;
        try {
          return a.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(i);
      return !!n && (n.clientHeight < i.scrollHeight || n.clientWidth < i.scrollWidth);
    })(e);
  }
  return !1;
}, Me = (e, t, r, i, n, a, o, l) => a < e && o > t || a > e && o < t ? 0 : a <= e && l <= r || o >= t && l >= r ? a - e - i : o > t && l < r || a < e && l > r ? o - t + n : 0, Wn = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, Nn = (e, t) => {
  var r, i, n, a;
  if (typeof document > "u") return [];
  const { scrollMode: o, block: l, inline: v, boundary: f, skipOverflowHiddenElements: u } = t, w = typeof f == "function" ? f : (U) => U !== f;
  if (!Lt(e)) throw new TypeError("Invalid target");
  const P = document.scrollingElement || document.documentElement, R = [];
  let x = e;
  for (; Lt(x) && w(x); ) {
    if (x = Wn(x), x === P) {
      R.push(x);
      break;
    }
    x != null && x === document.body && Xe(x) && !Xe(document.documentElement) || x != null && Xe(x, u) && R.push(x);
  }
  const $ = (i = (r = window.visualViewport) == null ? void 0 : r.width) != null ? i : innerWidth, _ = (a = (n = window.visualViewport) == null ? void 0 : n.height) != null ? a : innerHeight, { scrollX: V, scrollY: N } = window, { height: K, width: k, top: ee, right: b, bottom: he, left: te } = e.getBoundingClientRect(), { top: j, right: ge, bottom: y, left: H } = ((U) => {
    const C = window.getComputedStyle(U);
    return { top: parseFloat(C.scrollMarginTop) || 0, right: parseFloat(C.scrollMarginRight) || 0, bottom: parseFloat(C.scrollMarginBottom) || 0, left: parseFloat(C.scrollMarginLeft) || 0 };
  })(e);
  let S = l === "start" || l === "nearest" ? ee - j : l === "end" ? he + y : ee + K / 2 - j + y, E = v === "center" ? te + k / 2 - H + ge : v === "end" ? b + ge : te - H;
  const ne = [];
  for (let U = 0; U < R.length; U++) {
    const C = R[U], { height: re, width: ie, top: Y, right: se, bottom: oe, left: m } = C.getBoundingClientRect();
    if (o === "if-needed" && ee >= 0 && te >= 0 && he <= _ && b <= $ && ee >= Y && he <= oe && te >= m && b <= se) return ne;
    const c = getComputedStyle(C), s = parseInt(c.borderLeftWidth, 10), g = parseInt(c.borderTopWidth, 10), p = parseInt(c.borderRightWidth, 10), D = parseInt(c.borderBottomWidth, 10);
    let M = 0, T = 0;
    const B = "offsetWidth" in C ? C.offsetWidth - C.clientWidth - s - p : 0, L = "offsetHeight" in C ? C.offsetHeight - C.clientHeight - g - D : 0, A = "offsetWidth" in C ? C.offsetWidth === 0 ? 0 : ie / C.offsetWidth : 0, W = "offsetHeight" in C ? C.offsetHeight === 0 ? 0 : re / C.offsetHeight : 0;
    if (P === C) M = l === "start" ? S : l === "end" ? S - _ : l === "nearest" ? Me(N, N + _, _, g, D, N + S, N + S + K, K) : S - _ / 2, T = v === "start" ? E : v === "center" ? E - $ / 2 : v === "end" ? E - $ : Me(V, V + $, $, s, p, V + E, V + E + k, k), M = Math.max(0, M + N), T = Math.max(0, T + V);
    else {
      M = l === "start" ? S - Y - g : l === "end" ? S - oe + D + L : l === "nearest" ? Me(Y, oe, re, g, D + L, S, S + K, K) : S - (Y + re / 2) + L / 2, T = v === "start" ? E - m - s : v === "center" ? E - (m + ie / 2) + B / 2 : v === "end" ? E - se + p + B : Me(m, se, ie, s, p + B, E, E + k, k);
      const { scrollLeft: J, scrollTop: q } = C;
      M = W === 0 ? 0 : Math.max(0, Math.min(q + M / W, C.scrollHeight - re / W + L)), T = A === 0 ? 0 : Math.max(0, Math.min(J + T / A, C.scrollWidth - ie / A + B)), S += q - M, E += J - T;
    }
    ne.push({ el: C, top: M, left: T });
  }
  return ne;
};
var Un = 0;
function Jt() {
}
function jn(e, t) {
  if (e) {
    var r = Nn(e, {
      boundary: t,
      block: "nearest",
      scrollMode: "if-needed"
    });
    r.forEach(function(i) {
      var n = i.el, a = i.top, o = i.left;
      n.scrollTop = a, n.scrollLeft = o;
    });
  }
}
function Wt(e, t, r) {
  var i = e === t || t instanceof r.Node && e.contains && e.contains(t);
  return i;
}
function Ze(e, t) {
  var r;
  function i() {
    r && clearTimeout(r);
  }
  function n() {
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    i(), r = setTimeout(function() {
      r = null, e.apply(void 0, o);
    }, t);
  }
  return n.cancel = i, n;
}
function F() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(i) {
    for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      a[o - 1] = arguments[o];
    return t.some(function(l) {
      return l && l.apply(void 0, [i].concat(a)), i.preventDownshiftDefault || i.hasOwnProperty("nativeEvent") && i.nativeEvent.preventDownshiftDefault;
    });
  };
}
function me() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(i) {
    t.forEach(function(n) {
      typeof n == "function" ? n(i) : n && (n.current = i);
    });
  };
}
function qn() {
  return String(Un++);
}
function zn(e) {
  var t = e.isOpen, r = e.resultCount, i = e.previousResultCount;
  return t ? r ? r !== i ? r + " result" + (r === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function Oe(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(r, i) {
    return r[i] = Qt(t, i) ? t[i] : e[i], r;
  }, {});
}
function Qt(e, t) {
  return e[t] !== void 0;
}
function Ee(e) {
  var t = e.key, r = e.keyCode;
  return r >= 37 && r <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
function be(e, t, r, i, n) {
  n === void 0 && (n = !1);
  var a = r.length;
  if (a === 0)
    return -1;
  var o = a - 1;
  (typeof e != "number" || e < 0 || e > o) && (e = t > 0 ? -1 : o + 1);
  var l = e + t;
  l < 0 ? l = n ? o : 0 : l > o && (l = n ? 0 : o);
  var v = ke(l, t < 0, r, i, n);
  return v === -1 ? e >= a ? -1 : e : v;
}
function ke(e, t, r, i, n) {
  n === void 0 && (n = !1);
  var a = r.length;
  if (t) {
    for (var o = e; o >= 0; o--)
      if (!i(r[o], o))
        return o;
  } else
    for (var l = e; l < a; l++)
      if (!i(r[l], l))
        return l;
  return n ? ke(t ? a - 1 : 0, t, r, i) : -1;
}
function Nt(e, t, r, i) {
  return i === void 0 && (i = !0), r && t.some(function(n) {
    return n && (Wt(n, e, r) || i && Wt(n, r.document.activeElement, r));
  });
}
var Gn = Ze(function(e) {
  Zt(e).textContent = "";
}, 500);
function Zt(e) {
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
function en(e, t) {
  if (!(!e || !t)) {
    var r = Zt(t);
    r.textContent = e, Gn(t);
  }
}
var Xn = ["highlightedIndex", "items", "environment"], tn = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function Yn(e, t, r) {
  var i = e.props, n = e.type, a = {};
  Object.keys(t).forEach(function(o) {
    Jn(o, e, t, r), r[o] !== t[o] && (a[o] = r[o]);
  }), i.onStateChange && Object.keys(a).length && i.onStateChange(I({
    type: n
  }, a));
}
function Jn(e, t, r, i) {
  var n = t.props, a = t.type, o = "on" + tt(e) + "Change";
  n[o] && i[e] !== void 0 && i[e] !== r[e] && n[o](I({
    type: a
  }, i));
}
function Qn(e, t) {
  return t.changes;
}
function Zn(e) {
  var t = e.selectedItem, r = e.itemToString;
  return t ? r(t) + " has been selected." : "";
}
var er = Ze(function(e, t) {
  en(e(), t);
}, 200), tr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? d.useLayoutEffect : d.useEffect, nn = "useId" in Te ? function(t) {
  var r = t.id, i = t.labelId, n = t.menuId, a = t.getItemId, o = t.toggleButtonId, l = t.inputId, v = "downshift-" + Te.useId();
  r || (r = v);
  var f = d.useRef({
    labelId: i || r + "-label",
    menuId: n || r + "-menu",
    getItemId: a || function(u) {
      return r + "-item-" + u;
    },
    toggleButtonId: o || r + "-toggle-button",
    inputId: l || r + "-input"
  });
  return f.current;
} : function(t) {
  var r = t.id, i = r === void 0 ? "downshift-" + qn() : r, n = t.labelId, a = t.menuId, o = t.getItemId, l = t.toggleButtonId, v = t.inputId, f = d.useRef({
    labelId: n || i + "-label",
    menuId: a || i + "-menu",
    getItemId: o || function(u) {
      return i + "-item-" + u;
    },
    toggleButtonId: l || i + "-toggle-button",
    inputId: v || i + "-input"
  });
  return f.current;
};
function et(e, t, r, i) {
  var n, a;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(i);
    n = r[t], a = t;
  } else
    a = t === void 0 ? r.indexOf(e) : t, n = e;
  return [n, a];
}
function nr(e) {
  return /^\S{1}$/.test(e);
}
function tt(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function Ge(e) {
  var t = d.useRef(e);
  return t.current = e, t;
}
function rn(e, t, r, i) {
  var n = d.useRef(), a = d.useRef(), o = d.useCallback(function(R, x) {
    a.current = x, R = Oe(R, x.props);
    var $ = e(R, x), _ = x.props.stateReducer(R, I({}, x, {
      changes: $
    }));
    return _;
  }, [e]), l = d.useReducer(o, t, r), v = l[0], f = l[1], u = Ge(t), w = d.useCallback(function(R) {
    return f(I({
      props: u.current
    }, R));
  }, [u]), P = a.current;
  return d.useEffect(function() {
    var R = Oe(n.current, P == null ? void 0 : P.props), x = P && n.current && !i(R, v);
    x && Yn(P, R, v), n.current = v;
  }, [v, P, i]), [v, w];
}
function on(e, t, r, i) {
  var n = rn(e, t, r, i), a = n[0], o = n[1];
  return [Oe(a, t), o];
}
var Ce = {
  itemToString: function(t) {
    return t ? String(t) : "";
  },
  itemToKey: function(t) {
    return t;
  },
  stateReducer: Qn,
  getA11ySelectionMessage: Zn,
  scrollIntoView: jn,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function Z(e, t, r) {
  r === void 0 && (r = tn);
  var i = e["default" + tt(t)];
  return i !== void 0 ? i : r[t];
}
function xe(e, t, r) {
  r === void 0 && (r = tn);
  var i = e[t];
  if (i !== void 0)
    return i;
  var n = e["initial" + tt(t)];
  return n !== void 0 ? n : Z(e, t, r);
}
function un(e) {
  var t = xe(e, "selectedItem"), r = xe(e, "isOpen"), i = xe(e, "highlightedIndex"), n = xe(e, "inputValue");
  return {
    highlightedIndex: i < 0 && t && r ? e.items.findIndex(function(a) {
      return e.itemToKey(a) === e.itemToKey(t);
    }) : i,
    isOpen: r,
    selectedItem: t,
    inputValue: n
  };
}
function we(e, t, r) {
  var i = e.items, n = e.initialHighlightedIndex, a = e.defaultHighlightedIndex, o = e.itemToKey, l = t.selectedItem, v = t.highlightedIndex;
  return i.length === 0 ? -1 : n !== void 0 && v === n ? n : a !== void 0 ? a : l ? i.findIndex(function(f) {
    return o(l) === o(f);
  }) : r === 0 ? -1 : r < 0 ? i.length - 1 : 0;
}
function an(e, t, r) {
  var i = d.useRef({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return d.useEffect(function() {
    if (!e)
      return Jt;
    var n = t.map(function(u) {
      return u.current;
    });
    function a() {
      i.current.isTouchEnd = !1, i.current.isMouseDown = !0;
    }
    function o(u) {
      i.current.isMouseDown = !1, Nt(u.target, n, e) || r();
    }
    function l() {
      i.current.isTouchEnd = !1, i.current.isTouchMove = !1;
    }
    function v() {
      i.current.isTouchMove = !0;
    }
    function f(u) {
      i.current.isTouchEnd = !0, !i.current.isTouchMove && !Nt(u.target, n, e, !1) && r();
    }
    return e.addEventListener("mousedown", a), e.addEventListener("mouseup", o), e.addEventListener("touchstart", l), e.addEventListener("touchmove", v), e.addEventListener("touchend", f), function() {
      e.removeEventListener("mousedown", a), e.removeEventListener("mouseup", o), e.removeEventListener("touchstart", l), e.removeEventListener("touchmove", v), e.removeEventListener("touchend", f);
    };
  }, [e, r]), i.current;
}
var nt = function() {
  return Jt;
};
function Pe(e, t, r) {
  var i = r.highlightedIndex, n = r.items, a = r.environment, o = fe(r, Xn), l = De();
  d.useEffect(function() {
    l || !(a != null && a.document) || er(function() {
      return e(I({
        highlightedIndex: i,
        highlightedItem: n[i],
        resultCount: n.length
      }, o));
    }, a.document);
  }, t);
}
function ln(e) {
  var t = e.highlightedIndex, r = e.isOpen, i = e.itemRefs, n = e.getItemNodeFromIndex, a = e.menuElement, o = e.scrollIntoView, l = d.useRef(!0);
  return tr(function() {
    t < 0 || !r || !Object.keys(i.current).length || (l.current === !1 ? l.current = !0 : o(n(t), a));
  }, [t]), l;
}
function He(e, t, r) {
  var i;
  r === void 0 && (r = !0);
  var n = ((i = e.items) == null ? void 0 : i.length) && t >= 0;
  return I({
    isOpen: !1,
    highlightedIndex: -1
  }, n && I({
    selectedItem: e.items[t],
    isOpen: Z(e, "isOpen"),
    highlightedIndex: Z(e, "highlightedIndex")
  }, r && {
    inputValue: e.itemToString(e.items[t])
  }));
}
function sn(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
function De() {
  var e = Te.useRef(!0);
  return Te.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
var cn = {
  environment: h.shape({
    addEventListener: h.func.isRequired,
    removeEventListener: h.func.isRequired,
    document: h.shape({
      createElement: h.func.isRequired,
      getElementById: h.func.isRequired,
      activeElement: h.any.isRequired,
      body: h.any.isRequired
    }).isRequired,
    Node: h.func.isRequired
  }),
  itemToString: h.func,
  itemToKey: h.func,
  stateReducer: h.func
}, dn = I({}, cn, {
  getA11yStatusMessage: h.func,
  highlightedIndex: h.number,
  defaultHighlightedIndex: h.number,
  initialHighlightedIndex: h.number,
  isOpen: h.bool,
  defaultIsOpen: h.bool,
  initialIsOpen: h.bool,
  selectedItem: h.any,
  initialSelectedItem: h.any,
  defaultSelectedItem: h.any,
  id: h.string,
  labelId: h.string,
  menuId: h.string,
  getItemId: h.func,
  toggleButtonId: h.string,
  onSelectedItemChange: h.func,
  onHighlightedIndexChange: h.func,
  onStateChange: h.func,
  onIsOpenChange: h.func,
  scrollIntoView: h.func
});
function fn(e, t, r) {
  var i = t.type, n = t.props, a;
  switch (i) {
    case r.ItemMouseMove:
      a = {
        highlightedIndex: t.disabled ? -1 : t.index
      };
      break;
    case r.MenuMouseLeave:
      a = {
        highlightedIndex: -1
      };
      break;
    case r.ToggleButtonClick:
    case r.FunctionToggleMenu:
      a = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : we(n, e, 0)
      };
      break;
    case r.FunctionOpenMenu:
      a = {
        isOpen: !0,
        highlightedIndex: we(n, e, 0)
      };
      break;
    case r.FunctionCloseMenu:
      a = {
        isOpen: !1
      };
      break;
    case r.FunctionSetHighlightedIndex:
      a = {
        highlightedIndex: t.highlightedIndex
      };
      break;
    case r.FunctionSetInputValue:
      a = {
        inputValue: t.inputValue
      };
      break;
    case r.FunctionReset:
      a = {
        highlightedIndex: Z(n, "highlightedIndex"),
        isOpen: Z(n, "isOpen"),
        selectedItem: Z(n, "selectedItem"),
        inputValue: Z(n, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return I({}, e, a);
}
function rr(e) {
  for (var t = e.keysSoFar, r = e.highlightedIndex, i = e.items, n = e.itemToString, a = e.isItemDisabled, o = t.toLowerCase(), l = 0; l < i.length; l++) {
    var v = (l + r + (t.length < 2 ? 1 : 0)) % i.length, f = i[v];
    if (f !== void 0 && n(f).toLowerCase().startsWith(o) && !a(f, v))
      return v;
  }
  return r;
}
Ke(Ke({}, dn), { items: h.array.isRequired, isItemDisabled: h.func, getA11ySelectionMessage: h.func });
function ir(e) {
  var t = e.isOpen, r = e.resultCount, i = e.previousResultCount;
  return t ? r ? r !== i ? "".concat(r, " result").concat(r === 1 ? " is" : "s are", " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.") : "" : "No results are available." : "";
}
var or = Ke(Ke({}, Ce), { getA11yStatusMessage: ir, isItemDisabled: function() {
  return !1;
} }), Re = 0, rt = 1, it = 2, $e = 3, ot = 4, ut = 5, at = 6, lt = 7, st = 8, ct = 9, dt = 10, Be = 11, gn = 12, vn = 13, ft = 14, hn = 15, pn = 16, mn = 17, In = 18, gt = 19, Ye = 20, yn = 21, bn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: Re,
  ToggleButtonKeyDownArrowDown: rt,
  ToggleButtonKeyDownArrowUp: it,
  ToggleButtonKeyDownCharacter: $e,
  ToggleButtonKeyDownEscape: ot,
  ToggleButtonKeyDownHome: ut,
  ToggleButtonKeyDownEnd: at,
  ToggleButtonKeyDownEnter: lt,
  ToggleButtonKeyDownSpaceButton: st,
  ToggleButtonKeyDownPageUp: ct,
  ToggleButtonKeyDownPageDown: dt,
  ToggleButtonBlur: Be,
  MenuMouseLeave: gn,
  ItemMouseMove: vn,
  ItemClick: ft,
  FunctionToggleMenu: hn,
  FunctionOpenMenu: pn,
  FunctionCloseMenu: mn,
  FunctionSetHighlightedIndex: In,
  FunctionSelectItem: gt,
  FunctionSetInputValue: Ye,
  FunctionReset: yn
});
function ur(e, t) {
  var r, i = t.type, n = t.props, a = t.altKey, o;
  switch (i) {
    case ft:
      o = {
        isOpen: Z(n, "isOpen"),
        highlightedIndex: Z(n, "highlightedIndex"),
        selectedItem: n.items[t.index]
      };
      break;
    case $e:
      {
        var l = t.key, v = "" + e.inputValue + l, f = !e.isOpen && e.selectedItem ? n.items.findIndex(function(R) {
          return n.itemToKey(R) === n.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, u = rr({
          keysSoFar: v,
          highlightedIndex: f,
          items: n.items,
          itemToString: n.itemToString,
          isItemDisabled: n.isItemDisabled
        });
        o = {
          inputValue: v,
          highlightedIndex: u,
          isOpen: !0
        };
      }
      break;
    case rt:
      {
        var w = e.isOpen ? be(e.highlightedIndex, 1, n.items, n.isItemDisabled) : a && e.selectedItem == null ? -1 : we(n, e, 1);
        o = {
          highlightedIndex: w,
          isOpen: !0
        };
      }
      break;
    case it:
      if (e.isOpen && a)
        o = He(n, e.highlightedIndex, !1);
      else {
        var P = e.isOpen ? be(e.highlightedIndex, -1, n.items, n.isItemDisabled) : we(n, e, -1);
        o = {
          highlightedIndex: P,
          isOpen: !0
        };
      }
      break;
    case lt:
    case st:
      o = He(n, e.highlightedIndex, !1);
      break;
    case ut:
      o = {
        highlightedIndex: ke(0, !1, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case at:
      o = {
        highlightedIndex: ke(n.items.length - 1, !0, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case ct:
      o = {
        highlightedIndex: be(e.highlightedIndex, -10, n.items, n.isItemDisabled)
      };
      break;
    case dt:
      o = {
        highlightedIndex: be(e.highlightedIndex, 10, n.items, n.isItemDisabled)
      };
      break;
    case ot:
      o = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case Be:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((r = n.items) == null ? void 0 : r.length) && {
        selectedItem: n.items[e.highlightedIndex]
      });
      break;
    case gt:
      o = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return fn(e, t, bn);
  }
  return I({}, e, o);
}
var ar = ["onClick"], lr = ["onMouseLeave", "refKey", "ref"], sr = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], cr = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
dr.stateChangeTypes = bn;
function dr(e) {
  e === void 0 && (e = {});
  var t = I({}, or, e), r = t.items, i = t.scrollIntoView, n = t.environment, a = t.itemToString, o = t.getA11ySelectionMessage, l = t.getA11yStatusMessage, v = on(ur, t, un, sn), f = v[0], u = v[1], w = f.isOpen, P = f.highlightedIndex, R = f.selectedItem, x = f.inputValue, $ = d.useRef(null), _ = d.useRef(null), V = d.useRef({}), N = d.useRef(null), K = nn(t), k = d.useRef(), ee = De(), b = Ge({
    state: f,
    props: t
  }), he = d.useCallback(function(m) {
    return V.current[K.getItemId(m)];
  }, [K]);
  Pe(l, [w, P, x, r], I({
    previousResultCount: k.current,
    items: r,
    environment: n,
    itemToString: a
  }, f)), Pe(o, [R], I({
    previousResultCount: k.current,
    items: r,
    environment: n,
    itemToString: a
  }, f));
  var te = ln({
    menuElement: _.current,
    highlightedIndex: P,
    isOpen: w,
    itemRefs: V,
    scrollIntoView: i,
    getItemNodeFromIndex: he
  });
  d.useEffect(function() {
    return N.current = Ze(function(m) {
      m({
        type: Ye,
        inputValue: ""
      });
    }, 500), function() {
      N.current.cancel();
    };
  }, []), d.useEffect(function() {
    x && N.current(u);
  }, [u, x]), d.useEffect(function() {
    ee || (k.current = r.length);
  }), d.useEffect(function() {
    var m = xe(t, "isOpen");
    m && $.current && $.current.focus();
  }, []);
  var j = an(n, [$, _], d.useCallback(function() {
    b.current.state.isOpen && u({
      type: Be
    });
  }, [u, b])), ge = nt();
  d.useEffect(function() {
    w || (V.current = {});
  }, [w]);
  var y = d.useMemo(function() {
    return {
      ArrowDown: function(c) {
        c.preventDefault(), u({
          type: rt,
          altKey: c.altKey
        });
      },
      ArrowUp: function(c) {
        c.preventDefault(), u({
          type: it,
          altKey: c.altKey
        });
      },
      Home: function(c) {
        c.preventDefault(), u({
          type: ut
        });
      },
      End: function(c) {
        c.preventDefault(), u({
          type: at
        });
      },
      Escape: function() {
        b.current.state.isOpen && u({
          type: ot
        });
      },
      Enter: function(c) {
        c.preventDefault(), u({
          type: b.current.state.isOpen ? lt : Re
        });
      },
      PageUp: function(c) {
        b.current.state.isOpen && (c.preventDefault(), u({
          type: ct
        }));
      },
      PageDown: function(c) {
        b.current.state.isOpen && (c.preventDefault(), u({
          type: dt
        }));
      },
      " ": function(c) {
        c.preventDefault();
        var s = b.current.state;
        if (!s.isOpen) {
          u({
            type: Re
          });
          return;
        }
        s.inputValue ? u({
          type: $e,
          key: " "
        }) : u({
          type: st
        });
      }
    };
  }, [u, b]), H = d.useCallback(function() {
    u({
      type: hn
    });
  }, [u]), S = d.useCallback(function() {
    u({
      type: mn
    });
  }, [u]), E = d.useCallback(function() {
    u({
      type: pn
    });
  }, [u]), ne = d.useCallback(function(m) {
    u({
      type: In,
      highlightedIndex: m
    });
  }, [u]), U = d.useCallback(function(m) {
    u({
      type: gt,
      selectedItem: m
    });
  }, [u]), C = d.useCallback(function() {
    u({
      type: yn
    });
  }, [u]), re = d.useCallback(function(m) {
    u({
      type: Ye,
      inputValue: m
    });
  }, [u]), ie = d.useCallback(function(m) {
    var c = m === void 0 ? {} : m, s = c.onClick, g = fe(c, ar), p = function() {
      var M;
      (M = $.current) == null || M.focus();
    };
    return I({
      id: K.labelId,
      htmlFor: K.toggleButtonId,
      onClick: F(s, p)
    }, g);
  }, [K]), Y = d.useCallback(function(m, c) {
    var s, g = m === void 0 ? {} : m, p = g.onMouseLeave, D = g.refKey, M = D === void 0 ? "ref" : D, T = g.ref, B = fe(g, lr), L = c === void 0 ? {} : c;
    L.suppressRefError;
    var A = function() {
      u({
        type: gn
      });
    };
    return I((s = {}, s[M] = me(T, function(W) {
      _.current = W;
    }), s.id = K.menuId, s.role = "listbox", s["aria-labelledby"] = B && B["aria-label"] ? void 0 : "" + K.labelId, s.onMouseLeave = F(p, A), s), B);
  }, [u, ge, K]), se = d.useCallback(function(m, c) {
    var s, g = m === void 0 ? {} : m, p = g.onBlur, D = g.onClick;
    g.onPress;
    var M = g.onKeyDown, T = g.refKey, B = T === void 0 ? "ref" : T, L = g.ref, A = fe(g, sr), W = c === void 0 ? {} : c;
    W.suppressRefError;
    var J = b.current.state, q = function() {
      u({
        type: Re
      });
    }, Ie = function() {
      J.isOpen && !j.isMouseDown && u({
        type: Be
      });
    }, z = function(G) {
      var Q = Ee(G);
      Q && y[Q] ? y[Q](G) : nr(Q) && u({
        type: $e,
        key: Q
      });
    }, ce = I((s = {}, s[B] = me(L, function(ue) {
      $.current = ue;
    }), s["aria-activedescendant"] = J.isOpen && J.highlightedIndex > -1 ? K.getItemId(J.highlightedIndex) : "", s["aria-controls"] = K.menuId, s["aria-expanded"] = b.current.state.isOpen, s["aria-haspopup"] = "listbox", s["aria-labelledby"] = A && A["aria-label"] ? void 0 : "" + K.labelId, s.id = K.toggleButtonId, s.role = "combobox", s.tabIndex = 0, s.onBlur = F(p, Ie), s), A);
    return A.disabled || (ce.onClick = F(D, q), ce.onKeyDown = F(M, z)), ce;
  }, [u, K, b, j, ge, y]), oe = d.useCallback(function(m) {
    var c, s = m === void 0 ? {} : m, g = s.item, p = s.index, D = s.onMouseMove, M = s.onClick, T = s.onMouseDown;
    s.onPress;
    var B = s.refKey, L = B === void 0 ? "ref" : B, A = s.disabled, W = s.ref, J = fe(s, cr);
    A !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var q = b.current, Ie = q.state, z = q.props, ce = et(g, p, z.items, "Pass either item or index to getItemProps!"), ue = ce[0], G = ce[1], Q = z.isItemDisabled(ue, G), de = function() {
      j.isTouchEnd || G === Ie.highlightedIndex || (te.current = !1, u({
        type: vn,
        index: G,
        disabled: Q
      }));
    }, ye = function() {
      u({
        type: ft,
        index: G
      });
    }, ve = function(pe) {
      return pe.preventDefault();
    }, ae = I((c = {}, c[L] = me(W, function(X) {
      X && (V.current[K.getItemId(G)] = X);
    }), c["aria-disabled"] = Q, c["aria-selected"] = "" + (ue === Ie.selectedItem), c.id = K.getItemId(G), c.role = "option", c), J);
    return Q || (ae.onClick = F(M, ye)), ae.onMouseMove = F(D, de), ae.onMouseDown = F(T, ve), ae;
  }, [b, K, j, te, u]);
  return {
    // prop getters.
    getToggleButtonProps: se,
    getLabelProps: ie,
    getMenuProps: Y,
    getItemProps: oe,
    // actions.
    toggleMenu: H,
    openMenu: E,
    closeMenu: S,
    setHighlightedIndex: ne,
    selectItem: U,
    reset: C,
    setInputValue: re,
    // state.
    highlightedIndex: P,
    isOpen: w,
    selectedItem: R,
    inputValue: x
  };
}
var vt = 0, ht = 1, pt = 2, mt = 3, It = 4, yt = 5, bt = 6, xt = 7, wt = 8, Ve = 9, Ct = 10, xn = 11, wn = 12, kt = 13, Cn = 14, kn = 15, Sn = 16, Dn = 17, Mn = 18, St = 19, Rn = 20, Kn = 21, Dt = 22, Tn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: vt,
  InputKeyDownArrowUp: ht,
  InputKeyDownEscape: pt,
  InputKeyDownHome: mt,
  InputKeyDownEnd: It,
  InputKeyDownPageUp: yt,
  InputKeyDownPageDown: bt,
  InputKeyDownEnter: xt,
  InputChange: wt,
  InputBlur: Ve,
  InputClick: Ct,
  MenuMouseLeave: xn,
  ItemMouseMove: wn,
  ItemClick: kt,
  ToggleButtonClick: Cn,
  FunctionToggleMenu: kn,
  FunctionOpenMenu: Sn,
  FunctionCloseMenu: Dn,
  FunctionSetHighlightedIndex: Mn,
  FunctionSelectItem: St,
  FunctionSetInputValue: Rn,
  FunctionReset: Kn,
  ControlledPropUpdatedSelectedItem: Dt
});
function fr(e) {
  var t = un(e), r = t.selectedItem, i = t.inputValue;
  return i === "" && r && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (i = e.itemToString(r)), I({}, t, {
    inputValue: i
  });
}
I({}, dn, {
  items: h.array.isRequired,
  isItemDisabled: h.func,
  selectedItemChanged: h.func,
  getA11ySelectionMessage: h.func,
  inputValue: h.string,
  defaultInputValue: h.string,
  initialInputValue: h.string,
  inputId: h.string,
  onInputValueChange: h.func
});
function gr(e, t, r, i) {
  var n = d.useRef(), a = rn(e, t, r, i), o = a[0], l = a[1], v = De();
  return d.useEffect(function() {
    if (Qt(t, "selectedItem")) {
      if (!v) {
        var f;
        t.selectedItemChanged === void 0 ? f = t.itemToKey(t.selectedItem) !== t.itemToKey(n.current) : (console.warn('The "selectedItemChanged" is deprecated. Please use "itemToKey instead". https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#selecteditemchanged'), f = t.selectedItemChanged(n.current, t.selectedItem)), f && l({
          type: Dt,
          inputValue: t.itemToString(t.selectedItem)
        });
      }
      n.current = o.selectedItem === n.current ? t.selectedItem : o.selectedItem;
    }
  }, [o.selectedItem, t.selectedItem]), [Oe(o, t), l];
}
var vr = I({}, Ce, {
  getA11yStatusMessage: zn,
  isItemDisabled: function() {
    return !1;
  }
});
function hr(e, t) {
  var r, i = t.type, n = t.props, a = t.altKey, o;
  switch (i) {
    case kt:
      o = {
        isOpen: Z(n, "isOpen"),
        highlightedIndex: Z(n, "highlightedIndex"),
        selectedItem: n.items[t.index],
        inputValue: n.itemToString(n.items[t.index])
      };
      break;
    case vt:
      e.isOpen ? o = {
        highlightedIndex: be(e.highlightedIndex, 1, n.items, n.isItemDisabled, !0)
      } : o = {
        highlightedIndex: a && e.selectedItem == null ? -1 : we(n, e, 1),
        isOpen: n.items.length >= 0
      };
      break;
    case ht:
      e.isOpen ? a ? o = He(n, e.highlightedIndex) : o = {
        highlightedIndex: be(e.highlightedIndex, -1, n.items, n.isItemDisabled, !0)
      } : o = {
        highlightedIndex: we(n, e, -1),
        isOpen: n.items.length >= 0
      };
      break;
    case xt:
      o = He(n, e.highlightedIndex);
      break;
    case pt:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case yt:
      o = {
        highlightedIndex: be(e.highlightedIndex, -10, n.items, n.isItemDisabled, !0)
      };
      break;
    case bt:
      o = {
        highlightedIndex: be(e.highlightedIndex, 10, n.items, n.isItemDisabled, !0)
      };
      break;
    case mt:
      o = {
        highlightedIndex: ke(0, !1, n.items, n.isItemDisabled)
      };
      break;
    case It:
      o = {
        highlightedIndex: ke(n.items.length - 1, !0, n.items, n.isItemDisabled)
      };
      break;
    case Ve:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((r = n.items) == null ? void 0 : r.length) && t.selectItem && {
        selectedItem: n.items[e.highlightedIndex],
        inputValue: n.itemToString(n.items[e.highlightedIndex])
      });
      break;
    case wt:
      o = {
        isOpen: !0,
        highlightedIndex: Z(n, "highlightedIndex"),
        inputValue: t.inputValue
      };
      break;
    case Ct:
      o = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : we(n, e, 0)
      };
      break;
    case St:
      o = {
        selectedItem: t.selectedItem,
        inputValue: n.itemToString(t.selectedItem)
      };
      break;
    case Dt:
      o = {
        inputValue: t.inputValue
      };
      break;
    default:
      return fn(e, t, Tn);
  }
  return I({}, e, o);
}
var pr = ["onMouseLeave", "refKey", "ref"], mr = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "disabled"], Ir = ["onClick", "onPress", "refKey", "ref"], yr = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKey", "ref"];
br.stateChangeTypes = Tn;
function br(e) {
  e === void 0 && (e = {});
  var t = I({}, vr, e), r = t.items, i = t.scrollIntoView, n = t.environment, a = t.getA11yStatusMessage, o = t.getA11ySelectionMessage, l = t.itemToString, v = gr(hr, t, fr, sn), f = v[0], u = v[1], w = f.isOpen, P = f.highlightedIndex, R = f.selectedItem, x = f.inputValue, $ = d.useRef(null), _ = d.useRef({}), V = d.useRef(null), N = d.useRef(null), K = De(), k = nn(t), ee = d.useRef(), b = Ge({
    state: f,
    props: t
  }), he = d.useCallback(function(c) {
    return _.current[k.getItemId(c)];
  }, [k]);
  Pe(a, [w, P, x, r], I({
    previousResultCount: ee.current,
    items: r,
    environment: n,
    itemToString: l
  }, f)), Pe(o, [R], I({
    previousResultCount: ee.current,
    items: r,
    environment: n,
    itemToString: l
  }, f));
  var te = ln({
    menuElement: $.current,
    highlightedIndex: P,
    isOpen: w,
    itemRefs: _,
    scrollIntoView: i,
    getItemNodeFromIndex: he
  });
  d.useEffect(function() {
    var c = xe(t, "isOpen");
    c && V.current && V.current.focus();
  }, []), d.useEffect(function() {
    K || (ee.current = r.length);
  });
  var j = an(n, [N, $, V], d.useCallback(function() {
    b.current.state.isOpen && u({
      type: Ve,
      selectItem: !1
    });
  }, [u, b])), ge = nt();
  d.useEffect(function() {
    w || (_.current = {});
  }, [w]), d.useEffect(function() {
    var c;
    !w || !(n != null && n.document) || !(V != null && (c = V.current) != null && c.focus) || n.document.activeElement !== V.current && V.current.focus();
  }, [w, n]);
  var y = d.useMemo(function() {
    return {
      ArrowDown: function(s) {
        s.preventDefault(), u({
          type: vt,
          altKey: s.altKey
        });
      },
      ArrowUp: function(s) {
        s.preventDefault(), u({
          type: ht,
          altKey: s.altKey
        });
      },
      Home: function(s) {
        b.current.state.isOpen && (s.preventDefault(), u({
          type: mt
        }));
      },
      End: function(s) {
        b.current.state.isOpen && (s.preventDefault(), u({
          type: It
        }));
      },
      Escape: function(s) {
        var g = b.current.state;
        (g.isOpen || g.inputValue || g.selectedItem || g.highlightedIndex > -1) && (s.preventDefault(), u({
          type: pt
        }));
      },
      Enter: function(s) {
        var g = b.current.state;
        !g.isOpen || s.which === 229 || (s.preventDefault(), u({
          type: xt
        }));
      },
      PageUp: function(s) {
        b.current.state.isOpen && (s.preventDefault(), u({
          type: yt
        }));
      },
      PageDown: function(s) {
        b.current.state.isOpen && (s.preventDefault(), u({
          type: bt
        }));
      }
    };
  }, [u, b]), H = d.useCallback(function(c) {
    return I({
      id: k.labelId,
      htmlFor: k.inputId
    }, c);
  }, [k]), S = d.useCallback(function(c, s) {
    var g, p = c === void 0 ? {} : c, D = p.onMouseLeave, M = p.refKey, T = M === void 0 ? "ref" : M, B = p.ref, L = fe(p, pr), A = s === void 0 ? {} : s;
    return A.suppressRefError, I((g = {}, g[T] = me(B, function(W) {
      $.current = W;
    }), g.id = k.menuId, g.role = "listbox", g["aria-labelledby"] = L && L["aria-label"] ? void 0 : "" + k.labelId, g.onMouseLeave = F(D, function() {
      u({
        type: xn
      });
    }), g), L);
  }, [u, ge, k]), E = d.useCallback(function(c) {
    var s, g, p = c === void 0 ? {} : c, D = p.item, M = p.index, T = p.refKey, B = T === void 0 ? "ref" : T, L = p.ref, A = p.onMouseMove, W = p.onMouseDown, J = p.onClick;
    p.onPress;
    var q = p.disabled, Ie = fe(p, mr);
    q !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');
    var z = b.current, ce = z.props, ue = z.state, G = et(D, M, ce.items, "Pass either item or index to getItemProps!"), Q = G[0], de = G[1], ye = ce.isItemDisabled(Q, de), ve = "onClick", ae = J, X = function() {
      j.isTouchEnd || de === ue.highlightedIndex || (te.current = !1, u({
        type: wn,
        index: de,
        disabled: ye
      }));
    }, pe = function() {
      u({
        type: kt,
        index: de
      });
    }, En = function(Pn) {
      return Pn.preventDefault();
    };
    return I((s = {}, s[B] = me(L, function(Se) {
      Se && (_.current[k.getItemId(de)] = Se);
    }), s["aria-disabled"] = ye, s["aria-selected"] = "" + (de === ue.highlightedIndex), s.id = k.getItemId(de), s.role = "option", s), !ye && (g = {}, g[ve] = F(ae, pe), g), {
      onMouseMove: F(A, X),
      onMouseDown: F(W, En)
    }, Ie);
  }, [u, k, b, j, te]), ne = d.useCallback(function(c) {
    var s, g = c === void 0 ? {} : c, p = g.onClick;
    g.onPress;
    var D = g.refKey, M = D === void 0 ? "ref" : D, T = g.ref, B = fe(g, Ir), L = b.current.state, A = function() {
      u({
        type: Cn
      });
    };
    return I((s = {}, s[M] = me(T, function(W) {
      N.current = W;
    }), s["aria-controls"] = k.menuId, s["aria-expanded"] = L.isOpen, s.id = k.toggleButtonId, s.tabIndex = -1, s), !B.disabled && I({}, {
      onClick: F(p, A)
    }), B);
  }, [u, b, k]), U = d.useCallback(function(c, s) {
    var g, p = c === void 0 ? {} : c, D = p.onKeyDown, M = p.onChange, T = p.onInput, B = p.onBlur;
    p.onChangeText;
    var L = p.onClick, A = p.refKey, W = A === void 0 ? "ref" : A, J = p.ref, q = fe(p, yr), Ie = s === void 0 ? {} : s;
    Ie.suppressRefError;
    var z = b.current.state, ce = function(X) {
      var pe = Ee(X);
      pe && y[pe] && y[pe](X);
    }, ue = function(X) {
      u({
        type: wt,
        inputValue: X.target.value
      });
    }, G = function(X) {
      if (n != null && n.document && z.isOpen && !j.isMouseDown) {
        var pe = X.relatedTarget === null && n.document.activeElement !== n.document.body;
        u({
          type: Ve,
          selectItem: !pe
        });
      }
    }, Q = function() {
      u({
        type: Ct
      });
    }, de = "onChange", ye = {};
    if (!q.disabled) {
      var ve;
      ye = (ve = {}, ve[de] = F(M, T, ue), ve.onKeyDown = F(D, ce), ve.onBlur = F(B, G), ve.onClick = F(L, Q), ve);
    }
    return I((g = {}, g[W] = me(J, function(ae) {
      V.current = ae;
    }), g["aria-activedescendant"] = z.isOpen && z.highlightedIndex > -1 ? k.getItemId(z.highlightedIndex) : "", g["aria-autocomplete"] = "list", g["aria-controls"] = k.menuId, g["aria-expanded"] = z.isOpen, g["aria-labelledby"] = q && q["aria-label"] ? void 0 : k.labelId, g.autoComplete = "off", g.id = k.inputId, g.role = "combobox", g.value = z.inputValue, g), ye, q);
  }, [u, k, n, y, b, j, ge]), C = d.useCallback(function() {
    u({
      type: kn
    });
  }, [u]), re = d.useCallback(function() {
    u({
      type: Dn
    });
  }, [u]), ie = d.useCallback(function() {
    u({
      type: Sn
    });
  }, [u]), Y = d.useCallback(function(c) {
    u({
      type: Mn,
      highlightedIndex: c
    });
  }, [u]), se = d.useCallback(function(c) {
    u({
      type: St,
      selectedItem: c
    });
  }, [u]), oe = d.useCallback(function(c) {
    u({
      type: Rn,
      inputValue: c
    });
  }, [u]), m = d.useCallback(function() {
    u({
      type: Kn
    });
  }, [u]);
  return {
    // prop getters.
    getItemProps: E,
    getLabelProps: H,
    getMenuProps: S,
    getInputProps: U,
    getToggleButtonProps: ne,
    // actions.
    toggleMenu: C,
    openMenu: ie,
    closeMenu: re,
    setHighlightedIndex: Y,
    setInputValue: oe,
    selectItem: se,
    reset: m,
    // state.
    highlightedIndex: P,
    isOpen: w,
    selectedItem: R,
    inputValue: x
  };
}
var On = {
  activeIndex: -1,
  selectedItems: []
};
function Ut(e, t) {
  return xe(e, t, On);
}
function jt(e, t) {
  return Z(e, t, On);
}
function xr(e) {
  var t = Ut(e, "activeIndex"), r = Ut(e, "selectedItems");
  return {
    activeIndex: t,
    selectedItems: r
  };
}
function qt(e) {
  if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)
    return !1;
  var t = e.target;
  return !(t instanceof HTMLInputElement && // if element is a text input
  t.value !== "" && // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  (t.selectionStart !== 0 || t.selectionEnd !== 0));
}
function wr(e) {
  var t = e.removedSelectedItem, r = e.itemToString;
  return r(t) + " has been removed.";
}
function Cr(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
I({}, cn, {
  selectedItems: h.array,
  initialSelectedItems: h.array,
  defaultSelectedItems: h.array,
  getA11yRemovalMessage: h.func,
  activeIndex: h.number,
  initialActiveIndex: h.number,
  defaultActiveIndex: h.number,
  onActiveIndexChange: h.func,
  onSelectedItemsChange: h.func,
  keyNavigationNext: h.string,
  keyNavigationPrevious: h.string
});
var kr = {
  itemToString: Ce.itemToString,
  itemToKey: Ce.itemToKey,
  stateReducer: Ce.stateReducer,
  environment: Ce.environment,
  getA11yRemovalMessage: wr,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, Mt = 0, Rt = 1, Kt = 2, Tt = 3, Ot = 4, Et = 5, Pt = 6, Ht = 7, $t = 8, Bt = 9, Vt = 10, At = 11, Ft = 12, Sr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  SelectedItemClick: Mt,
  SelectedItemKeyDownDelete: Rt,
  SelectedItemKeyDownBackspace: Kt,
  SelectedItemKeyDownNavigationNext: Tt,
  SelectedItemKeyDownNavigationPrevious: Ot,
  DropdownKeyDownNavigationPrevious: Et,
  DropdownKeyDownBackspace: Pt,
  DropdownClick: Ht,
  FunctionAddSelectedItem: $t,
  FunctionRemoveSelectedItem: Bt,
  FunctionSetSelectedItems: Vt,
  FunctionSetActiveIndex: At,
  FunctionReset: Ft
});
function Dr(e, t) {
  var r = t.type, i = t.index, n = t.props, a = t.selectedItem, o = e.activeIndex, l = e.selectedItems, v;
  switch (r) {
    case Mt:
      v = {
        activeIndex: i
      };
      break;
    case Ot:
      v = {
        activeIndex: o - 1 < 0 ? 0 : o - 1
      };
      break;
    case Tt:
      v = {
        activeIndex: o + 1 >= l.length ? -1 : o + 1
      };
      break;
    case Kt:
    case Rt: {
      if (o < 0)
        break;
      var f = o;
      l.length === 1 ? f = -1 : o === l.length - 1 && (f = l.length - 2), v = I({
        selectedItems: [].concat(l.slice(0, o), l.slice(o + 1))
      }, {
        activeIndex: f
      });
      break;
    }
    case Et:
      v = {
        activeIndex: l.length - 1
      };
      break;
    case Pt:
      v = {
        selectedItems: l.slice(0, l.length - 1)
      };
      break;
    case $t:
      v = {
        selectedItems: [].concat(l, [a])
      };
      break;
    case Ht:
      v = {
        activeIndex: -1
      };
      break;
    case Bt: {
      var u = o, w = l.findIndex(function(x) {
        return n.itemToKey(x) === n.itemToKey(a);
      });
      if (w < 0)
        break;
      l.length === 1 ? u = -1 : w === l.length - 1 && (u = l.length - 2), v = {
        selectedItems: [].concat(l.slice(0, w), l.slice(w + 1)),
        activeIndex: u
      };
      break;
    }
    case Vt: {
      var P = t.selectedItems;
      v = {
        selectedItems: P
      };
      break;
    }
    case At: {
      var R = t.activeIndex;
      v = {
        activeIndex: R
      };
      break;
    }
    case Ft:
      v = {
        activeIndex: jt(n, "activeIndex"),
        selectedItems: jt(n, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return I({}, e, v);
}
var Mr = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], Rr = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"];
Kr.stateChangeTypes = Sr;
function Kr(e) {
  e === void 0 && (e = {});
  var t = I({}, kr, e), r = t.getA11yRemovalMessage, i = t.itemToString, n = t.environment, a = t.keyNavigationNext, o = t.keyNavigationPrevious, l = on(Dr, t, xr, Cr), v = l[0], f = l[1], u = v.activeIndex, w = v.selectedItems, P = De(), R = d.useRef(null), x = d.useRef(w), $ = d.useRef();
  $.current = [];
  var _ = Ge({
    state: v,
    props: t
  });
  d.useEffect(function() {
    if (!(P || !(n != null && n.document))) {
      if (w.length < x.current.length) {
        var y = x.current.find(function(H) {
          return w.findIndex(function(S) {
            return t.itemToKey(S) === t.itemToKey(H);
          }) < 0;
        });
        en(r({
          itemToString: i,
          resultCount: w.length,
          removedSelectedItem: y,
          activeIndex: u,
          activeSelectedItem: w[u]
        }), n.document);
      }
      x.current = w;
    }
  }, [w.length]), d.useEffect(function() {
    P || (u === -1 && R.current ? R.current.focus() : $.current[u] && $.current[u].focus());
  }, [u]);
  var V = nt(), N = d.useMemo(function() {
    var y;
    return y = {}, y[o] = function() {
      f({
        type: Ot
      });
    }, y[a] = function() {
      f({
        type: Tt
      });
    }, y.Delete = function() {
      f({
        type: Rt
      });
    }, y.Backspace = function() {
      f({
        type: Kt
      });
    }, y;
  }, [f, a, o]), K = d.useMemo(function() {
    var y;
    return y = {}, y[o] = function(H) {
      qt(H) && f({
        type: Et
      });
    }, y.Backspace = function(S) {
      qt(S) && f({
        type: Pt
      });
    }, y;
  }, [f, o]), k = d.useCallback(function(y) {
    var H, S = y === void 0 ? {} : y, E = S.refKey, ne = E === void 0 ? "ref" : E, U = S.ref, C = S.onClick, re = S.onKeyDown, ie = S.selectedItem, Y = S.index, se = fe(S, Mr), oe = _.current.state, m = et(ie, Y, oe.selectedItems, "Pass either item or index to getSelectedItemProps!"), c = m[1], s = c > -1 && c === oe.activeIndex, g = function() {
      f({
        type: Mt,
        index: c
      });
    }, p = function(M) {
      var T = Ee(M);
      T && N[T] && N[T](M);
    };
    return I((H = {}, H[ne] = me(U, function(D) {
      D && $.current.push(D);
    }), H.tabIndex = s ? 0 : -1, H.onClick = F(C, g), H.onKeyDown = F(re, p), H), se);
  }, [f, _, N]), ee = d.useCallback(function(y, H) {
    var S, E = y === void 0 ? {} : y, ne = E.refKey, U = ne === void 0 ? "ref" : ne, C = E.ref, re = E.onKeyDown, ie = E.onClick, Y = E.preventKeyAction, se = Y === void 0 ? !1 : Y, oe = fe(E, Rr), m = H === void 0 ? {} : H;
    m.suppressRefError;
    var c = function(p) {
      var D = Ee(p);
      D && K[D] && K[D](p);
    }, s = function() {
      f({
        type: Ht
      });
    };
    return I((S = {}, S[U] = me(C, function(g) {
      g && (R.current = g);
    }), S), !se && {
      onKeyDown: F(re, c),
      onClick: F(ie, s)
    }, oe);
  }, [f, K, V]), b = d.useCallback(function(y) {
    f({
      type: $t,
      selectedItem: y
    });
  }, [f]), he = d.useCallback(function(y) {
    f({
      type: Bt,
      selectedItem: y
    });
  }, [f]), te = d.useCallback(function(y) {
    f({
      type: Vt,
      selectedItems: y
    });
  }, [f]), j = d.useCallback(function(y) {
    f({
      type: At,
      activeIndex: y
    });
  }, [f]), ge = d.useCallback(function() {
    f({
      type: Ft
    });
  }, [f]);
  return {
    getSelectedItemProps: k,
    getDropdownProps: ee,
    addSelectedItem: b,
    removeSelectedItem: he,
    setSelectedItems: te,
    setActiveIndex: j,
    reset: ge,
    selectedItems: w,
    activeIndex: u
  };
}
export {
  dr as a,
  Kr as b,
  br as u
};
