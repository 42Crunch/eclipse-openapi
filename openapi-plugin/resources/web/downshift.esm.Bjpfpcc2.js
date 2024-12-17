import { _ as I } from "./extends.hS2Bh-Yp.js";
import { o as yn, ax as Se, e as d, R as Ke } from "./TriangleExclamation.Bx9Cjic4.js";
function ce(e, t) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (t.includes(i)) continue;
    r[i] = e[i];
  }
  return r;
}
var Ht = { exports: {} }, bn = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", xn = bn, wn = xn;
function Pt() {
}
function Bt() {
}
Bt.resetWarningCache = Pt;
var Cn = function() {
  function e(i, n, a, o, l, v) {
    if (v !== wn) {
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
    checkPropTypes: Bt,
    resetWarningCache: Pt
  };
  return r.PropTypes = r, r;
};
Ht.exports = Cn();
var kn = Ht.exports;
const h = /* @__PURE__ */ yn(kn), Mt = (e) => typeof e == "object" && e != null && e.nodeType === 1, St = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Ae = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const r = getComputedStyle(e, null);
    return St(r.overflowY, t) || St(r.overflowX, t) || ((i) => {
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
}, De = (e, t, r, i, n, a, o, l) => a < e && o > t || a > e && o < t ? 0 : a <= e && l <= r || o >= t && l >= r ? a - e - i : o > t && l < r || a < e && l > r ? o - t + n : 0, Dn = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, Mn = (e, t) => {
  var r, i, n, a;
  if (typeof document > "u") return [];
  const { scrollMode: o, block: l, inline: v, boundary: f, skipOverflowHiddenElements: u } = t, w = typeof f == "function" ? f : (_) => _ !== f;
  if (!Mt(e)) throw new TypeError("Invalid target");
  const E = document.scrollingElement || document.documentElement, K = [];
  let x = e;
  for (; Mt(x) && w(x); ) {
    if (x = Dn(x), x === E) {
      K.push(x);
      break;
    }
    x != null && x === document.body && Ae(x) && !Ae(document.documentElement) || x != null && Ae(x, u) && K.push(x);
  }
  const P = (i = (r = window.visualViewport) == null ? void 0 : r.width) != null ? i : innerWidth, L = (a = (n = window.visualViewport) == null ? void 0 : n.height) != null ? a : innerHeight, { scrollX: V, scrollY: N } = window, { height: R, width: k, top: Z, right: b, bottom: ge, left: ee } = e.getBoundingClientRect(), { top: U, right: de, bottom: y, left: H } = ((_) => {
    const C = window.getComputedStyle(_);
    return { top: parseFloat(C.scrollMarginTop) || 0, right: parseFloat(C.scrollMarginRight) || 0, bottom: parseFloat(C.scrollMarginBottom) || 0, left: parseFloat(C.scrollMarginLeft) || 0 };
  })(e);
  let D = l === "start" || l === "nearest" ? Z - U : l === "end" ? ge + y : Z + R / 2 - U + y, O = v === "center" ? ee + k / 2 - H + de : v === "end" ? b + de : ee - H;
  const te = [];
  for (let _ = 0; _ < K.length; _++) {
    const C = K[_], { height: ne, width: re, top: X, right: ae, bottom: ie, left: m } = C.getBoundingClientRect();
    if (o === "if-needed" && Z >= 0 && ee >= 0 && ge <= L && b <= P && Z >= X && ge <= ie && ee >= m && b <= ae) return te;
    const c = getComputedStyle(C), s = parseInt(c.borderLeftWidth, 10), g = parseInt(c.borderTopWidth, 10), p = parseInt(c.borderRightWidth, 10), M = parseInt(c.borderBottomWidth, 10);
    let S = 0, T = 0;
    const B = "offsetWidth" in C ? C.offsetWidth - C.clientWidth - s - p : 0, $ = "offsetHeight" in C ? C.offsetHeight - C.clientHeight - g - M : 0, A = "offsetWidth" in C ? C.offsetWidth === 0 ? 0 : re / C.offsetWidth : 0, W = "offsetHeight" in C ? C.offsetHeight === 0 ? 0 : ne / C.offsetHeight : 0;
    if (E === C) S = l === "start" ? D : l === "end" ? D - L : l === "nearest" ? De(N, N + L, L, g, M, N + D, N + D + R, R) : D - L / 2, T = v === "start" ? O : v === "center" ? O - P / 2 : v === "end" ? O - P : De(V, V + P, P, s, p, V + O, V + O + k, k), S = Math.max(0, S + N), T = Math.max(0, T + V);
    else {
      S = l === "start" ? D - X - g : l === "end" ? D - ie + M + $ : l === "nearest" ? De(X, ie, ne, g, M + $, D, D + R, R) : D - (X + ne / 2) + $ / 2, T = v === "start" ? O - m - s : v === "center" ? O - (m + re / 2) + B / 2 : v === "end" ? O - ae + p + B : De(m, ae, re, s, p + B, O, O + k, k);
      const { scrollLeft: Y, scrollTop: j } = C;
      S = W === 0 ? 0 : Math.max(0, Math.min(j + S / W, C.scrollHeight - ne / W + $)), T = A === 0 ? 0 : Math.max(0, Math.min(Y + T / A, C.scrollWidth - re / A + B)), D += j - S, O += Y - T;
    }
    te.push({ el: C, top: S, left: T });
  }
  return te;
};
var Sn = 0;
function Vt() {
}
function Kn(e, t) {
  if (e) {
    var r = Mn(e, {
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
function Kt(e, t, r) {
  var i = e === t || t instanceof r.Node && e.contains && e.contains(t);
  return i;
}
function $e(e, t) {
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
function he() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(i) {
    t.forEach(function(n) {
      typeof n == "function" ? n(i) : n && (n.current = i);
    });
  };
}
function Rn() {
  return String(Sn++);
}
function Tn(e) {
  var t = e.isOpen, r = e.resultCount, i = e.previousResultCount;
  return t ? r ? r !== i ? r + " result" + (r === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function Re(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(r, i) {
    return r[i] = At(t, i) ? t[i] : e[i], r;
  }, {});
}
function At(e, t) {
  return e[t] !== void 0;
}
function Te(e) {
  var t = e.key, r = e.keyCode;
  return r >= 37 && r <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
function Ie(e, t, r, i, n) {
  n === void 0 && (n = !1);
  var a = r.length;
  if (a === 0)
    return -1;
  var o = a - 1;
  (typeof e != "number" || e < 0 || e > o) && (e = t > 0 ? -1 : o + 1);
  var l = e + t;
  l < 0 ? l = n ? o : 0 : l > o && (l = n ? 0 : o);
  var v = we(l, t < 0, r, i, n);
  return v === -1 ? e >= a ? -1 : e : v;
}
function we(e, t, r, i, n) {
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
  return n ? we(t ? a - 1 : 0, t, r, i) : -1;
}
function Rt(e, t, r, i) {
  return i === void 0 && (i = !0), r && t.some(function(n) {
    return n && (Kt(n, e, r) || i && Kt(n, r.document.activeElement, r));
  });
}
var On = $e(function(e) {
  Ft(e).textContent = "";
}, 500);
function Ft(e) {
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
function $t(e, t) {
  if (!(!e || !t)) {
    var r = Ft(t);
    r.textContent = e, On(t);
  }
}
var En = ["highlightedIndex", "items", "environment"], Lt = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function Hn(e, t, r) {
  var i = e.props, n = e.type, a = {};
  Object.keys(t).forEach(function(o) {
    Pn(o, e, t, r), r[o] !== t[o] && (a[o] = r[o]);
  }), i.onStateChange && Object.keys(a).length && i.onStateChange(I({
    type: n
  }, a));
}
function Pn(e, t, r, i) {
  var n = t.props, a = t.type, o = "on" + We(e) + "Change";
  n[o] && i[e] !== void 0 && i[e] !== r[e] && n[o](I({
    type: a
  }, i));
}
function Bn(e, t) {
  return t.changes;
}
function Vn(e) {
  var t = e.selectedItem, r = e.itemToString;
  return t ? r(t) + " has been selected." : "";
}
var An = $e(function(e, t) {
  $t(e(), t);
}, 200), Fn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? d.useLayoutEffect : d.useEffect, Wt = "useId" in Ke ? function(t) {
  var r = t.id, i = t.labelId, n = t.menuId, a = t.getItemId, o = t.toggleButtonId, l = t.inputId, v = "downshift-" + Ke.useId();
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
  var r = t.id, i = r === void 0 ? "downshift-" + Rn() : r, n = t.labelId, a = t.menuId, o = t.getItemId, l = t.toggleButtonId, v = t.inputId, f = d.useRef({
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
function Le(e, t, r, i) {
  var n, a;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(i);
    n = r[t], a = t;
  } else
    a = t === void 0 ? r.indexOf(e) : t, n = e;
  return [n, a];
}
function $n(e) {
  return /^\S{1}$/.test(e);
}
function We(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function Ve(e) {
  var t = d.useRef(e);
  return t.current = e, t;
}
function Nt(e, t, r, i) {
  var n = d.useRef(), a = d.useRef(), o = d.useCallback(function(K, x) {
    a.current = x, K = Re(K, x.props);
    var P = e(K, x), L = x.props.stateReducer(K, I({}, x, {
      changes: P
    }));
    return L;
  }, [e]), l = d.useReducer(o, t, r), v = l[0], f = l[1], u = Ve(t), w = d.useCallback(function(K) {
    return f(I({
      props: u.current
    }, K));
  }, [u]), E = a.current;
  return d.useEffect(function() {
    var K = Re(n.current, E == null ? void 0 : E.props), x = E && n.current && !i(K, v);
    x && Hn(E, K, v), n.current = v;
  }, [v, E, i]), [v, w];
}
function _t(e, t, r, i) {
  var n = Nt(e, t, r, i), a = n[0], o = n[1];
  return [Re(a, t), o];
}
var xe = {
  itemToString: function(t) {
    return t ? String(t) : "";
  },
  itemToKey: function(t) {
    return t;
  },
  stateReducer: Bn,
  getA11ySelectionMessage: Vn,
  scrollIntoView: Kn,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function Q(e, t, r) {
  r === void 0 && (r = Lt);
  var i = e["default" + We(t)];
  return i !== void 0 ? i : r[t];
}
function ye(e, t, r) {
  r === void 0 && (r = Lt);
  var i = e[t];
  if (i !== void 0)
    return i;
  var n = e["initial" + We(t)];
  return n !== void 0 ? n : Q(e, t, r);
}
function Ut(e) {
  var t = ye(e, "selectedItem"), r = ye(e, "isOpen"), i = ye(e, "highlightedIndex"), n = ye(e, "inputValue");
  return {
    highlightedIndex: i < 0 && t && r ? e.items.findIndex(function(a) {
      return e.itemToKey(a) === e.itemToKey(t);
    }) : i,
    isOpen: r,
    selectedItem: t,
    inputValue: n
  };
}
function be(e, t, r) {
  var i = e.items, n = e.initialHighlightedIndex, a = e.defaultHighlightedIndex, o = e.itemToKey, l = t.selectedItem, v = t.highlightedIndex;
  return i.length === 0 ? -1 : n !== void 0 && v === n ? n : a !== void 0 ? a : l ? i.findIndex(function(f) {
    return o(l) === o(f);
  }) : r === 0 ? -1 : r < 0 ? i.length - 1 : 0;
}
function jt(e, t, r) {
  var i = d.useRef({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return d.useEffect(function() {
    if (!e)
      return Vt;
    var n = t.map(function(u) {
      return u.current;
    });
    function a() {
      i.current.isTouchEnd = !1, i.current.isMouseDown = !0;
    }
    function o(u) {
      i.current.isMouseDown = !1, Rt(u.target, n, e) || r();
    }
    function l() {
      i.current.isTouchEnd = !1, i.current.isTouchMove = !1;
    }
    function v() {
      i.current.isTouchMove = !0;
    }
    function f(u) {
      i.current.isTouchEnd = !0, !i.current.isTouchMove && !Rt(u.target, n, e, !1) && r();
    }
    return e.addEventListener("mousedown", a), e.addEventListener("mouseup", o), e.addEventListener("touchstart", l), e.addEventListener("touchmove", v), e.addEventListener("touchend", f), function() {
      e.removeEventListener("mousedown", a), e.removeEventListener("mouseup", o), e.removeEventListener("touchstart", l), e.removeEventListener("touchmove", v), e.removeEventListener("touchend", f);
    };
  }, [e, r]), i.current;
}
var Ne = function() {
  return Vt;
};
function Oe(e, t, r) {
  var i = r.highlightedIndex, n = r.items, a = r.environment, o = ce(r, En), l = ke();
  d.useEffect(function() {
    l || !(a != null && a.document) || An(function() {
      return e(I({
        highlightedIndex: i,
        highlightedItem: n[i],
        resultCount: n.length
      }, o));
    }, a.document);
  }, t);
}
function qt(e) {
  var t = e.highlightedIndex, r = e.isOpen, i = e.itemRefs, n = e.getItemNodeFromIndex, a = e.menuElement, o = e.scrollIntoView, l = d.useRef(!0);
  return Fn(function() {
    t < 0 || !r || !Object.keys(i.current).length || (l.current === !1 ? l.current = !0 : o(n(t), a));
  }, [t]), l;
}
function Ee(e, t, r) {
  var i;
  r === void 0 && (r = !0);
  var n = ((i = e.items) == null ? void 0 : i.length) && t >= 0;
  return I({
    isOpen: !1,
    highlightedIndex: -1
  }, n && I({
    selectedItem: e.items[t],
    isOpen: Q(e, "isOpen"),
    highlightedIndex: Q(e, "highlightedIndex")
  }, r && {
    inputValue: e.itemToString(e.items[t])
  }));
}
function zt(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
function ke() {
  var e = Ke.useRef(!0);
  return Ke.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
var Gt = {
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
}, Xt = I({}, Gt, {
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
function Yt(e, t, r) {
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
        highlightedIndex: e.isOpen ? -1 : be(n, e, 0)
      };
      break;
    case r.FunctionOpenMenu:
      a = {
        isOpen: !0,
        highlightedIndex: be(n, e, 0)
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
        highlightedIndex: Q(n, "highlightedIndex"),
        isOpen: Q(n, "isOpen"),
        selectedItem: Q(n, "selectedItem"),
        inputValue: Q(n, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return I({}, e, a);
}
function Ln(e) {
  for (var t = e.keysSoFar, r = e.highlightedIndex, i = e.items, n = e.itemToString, a = e.isItemDisabled, o = t.toLowerCase(), l = 0; l < i.length; l++) {
    var v = (l + r + (t.length < 2 ? 1 : 0)) % i.length, f = i[v];
    if (f !== void 0 && n(f).toLowerCase().startsWith(o) && !a(f, v))
      return v;
  }
  return r;
}
Se(Se({}, Xt), { items: h.array.isRequired, isItemDisabled: h.func, getA11ySelectionMessage: h.func });
function Wn(e) {
  var t = e.isOpen, r = e.resultCount, i = e.previousResultCount;
  return t ? r ? r !== i ? "".concat(r, " result").concat(r === 1 ? " is" : "s are", " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.") : "" : "No results are available." : "";
}
var Nn = Se(Se({}, xe), { getA11yStatusMessage: Wn, isItemDisabled: function() {
  return !1;
} }), Me = 0, _e = 1, Ue = 2, He = 3, je = 4, qe = 5, ze = 6, Ge = 7, Xe = 8, Ye = 9, Je = 10, Pe = 11, Jt = 12, Qt = 13, Qe = 14, Zt = 15, en = 16, tn = 17, nn = 18, Ze = 19, Fe = 20, rn = 21, on = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: Me,
  ToggleButtonKeyDownArrowDown: _e,
  ToggleButtonKeyDownArrowUp: Ue,
  ToggleButtonKeyDownCharacter: He,
  ToggleButtonKeyDownEscape: je,
  ToggleButtonKeyDownHome: qe,
  ToggleButtonKeyDownEnd: ze,
  ToggleButtonKeyDownEnter: Ge,
  ToggleButtonKeyDownSpaceButton: Xe,
  ToggleButtonKeyDownPageUp: Ye,
  ToggleButtonKeyDownPageDown: Je,
  ToggleButtonBlur: Pe,
  MenuMouseLeave: Jt,
  ItemMouseMove: Qt,
  ItemClick: Qe,
  FunctionToggleMenu: Zt,
  FunctionOpenMenu: en,
  FunctionCloseMenu: tn,
  FunctionSetHighlightedIndex: nn,
  FunctionSelectItem: Ze,
  FunctionSetInputValue: Fe,
  FunctionReset: rn
});
function _n(e, t) {
  var r, i = t.type, n = t.props, a = t.altKey, o;
  switch (i) {
    case Qe:
      o = {
        isOpen: Q(n, "isOpen"),
        highlightedIndex: Q(n, "highlightedIndex"),
        selectedItem: n.items[t.index]
      };
      break;
    case He:
      {
        var l = t.key, v = "" + e.inputValue + l, f = !e.isOpen && e.selectedItem ? n.items.findIndex(function(K) {
          return n.itemToKey(K) === n.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, u = Ln({
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
    case _e:
      {
        var w = e.isOpen ? Ie(e.highlightedIndex, 1, n.items, n.isItemDisabled) : a && e.selectedItem == null ? -1 : be(n, e, 1);
        o = {
          highlightedIndex: w,
          isOpen: !0
        };
      }
      break;
    case Ue:
      if (e.isOpen && a)
        o = Ee(n, e.highlightedIndex, !1);
      else {
        var E = e.isOpen ? Ie(e.highlightedIndex, -1, n.items, n.isItemDisabled) : be(n, e, -1);
        o = {
          highlightedIndex: E,
          isOpen: !0
        };
      }
      break;
    case Ge:
    case Xe:
      o = Ee(n, e.highlightedIndex, !1);
      break;
    case qe:
      o = {
        highlightedIndex: we(0, !1, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case ze:
      o = {
        highlightedIndex: we(n.items.length - 1, !0, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case Ye:
      o = {
        highlightedIndex: Ie(e.highlightedIndex, -10, n.items, n.isItemDisabled)
      };
      break;
    case Je:
      o = {
        highlightedIndex: Ie(e.highlightedIndex, 10, n.items, n.isItemDisabled)
      };
      break;
    case je:
      o = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case Pe:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((r = n.items) == null ? void 0 : r.length) && {
        selectedItem: n.items[e.highlightedIndex]
      });
      break;
    case Ze:
      o = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return Yt(e, t, on);
  }
  return I({}, e, o);
}
var Un = ["onClick"], jn = ["onMouseLeave", "refKey", "ref"], qn = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], zn = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
Gn.stateChangeTypes = on;
function Gn(e) {
  e === void 0 && (e = {});
  var t = I({}, Nn, e), r = t.items, i = t.scrollIntoView, n = t.environment, a = t.itemToString, o = t.getA11ySelectionMessage, l = t.getA11yStatusMessage, v = _t(_n, t, Ut, zt), f = v[0], u = v[1], w = f.isOpen, E = f.highlightedIndex, K = f.selectedItem, x = f.inputValue, P = d.useRef(null), L = d.useRef(null), V = d.useRef({}), N = d.useRef(null), R = Wt(t), k = d.useRef(), Z = ke(), b = Ve({
    state: f,
    props: t
  }), ge = d.useCallback(function(m) {
    return V.current[R.getItemId(m)];
  }, [R]);
  Oe(l, [w, E, x, r], I({
    previousResultCount: k.current,
    items: r,
    environment: n,
    itemToString: a
  }, f)), Oe(o, [K], I({
    previousResultCount: k.current,
    items: r,
    environment: n,
    itemToString: a
  }, f));
  var ee = qt({
    menuElement: L.current,
    highlightedIndex: E,
    isOpen: w,
    itemRefs: V,
    scrollIntoView: i,
    getItemNodeFromIndex: ge
  });
  d.useEffect(function() {
    return N.current = $e(function(m) {
      m({
        type: Fe,
        inputValue: ""
      });
    }, 500), function() {
      N.current.cancel();
    };
  }, []), d.useEffect(function() {
    x && N.current(u);
  }, [u, x]), d.useEffect(function() {
    Z || (k.current = r.length);
  }), d.useEffect(function() {
    var m = ye(t, "isOpen");
    m && P.current && P.current.focus();
  }, []);
  var U = jt(n, [P, L], d.useCallback(function() {
    b.current.state.isOpen && u({
      type: Pe
    });
  }, [u, b])), de = Ne();
  d.useEffect(function() {
    w || (V.current = {});
  }, [w]);
  var y = d.useMemo(function() {
    return {
      ArrowDown: function(c) {
        c.preventDefault(), u({
          type: _e,
          altKey: c.altKey
        });
      },
      ArrowUp: function(c) {
        c.preventDefault(), u({
          type: Ue,
          altKey: c.altKey
        });
      },
      Home: function(c) {
        c.preventDefault(), u({
          type: qe
        });
      },
      End: function(c) {
        c.preventDefault(), u({
          type: ze
        });
      },
      Escape: function() {
        b.current.state.isOpen && u({
          type: je
        });
      },
      Enter: function(c) {
        c.preventDefault(), u({
          type: b.current.state.isOpen ? Ge : Me
        });
      },
      PageUp: function(c) {
        b.current.state.isOpen && (c.preventDefault(), u({
          type: Ye
        }));
      },
      PageDown: function(c) {
        b.current.state.isOpen && (c.preventDefault(), u({
          type: Je
        }));
      },
      " ": function(c) {
        c.preventDefault();
        var s = b.current.state;
        if (!s.isOpen) {
          u({
            type: Me
          });
          return;
        }
        s.inputValue ? u({
          type: He,
          key: " "
        }) : u({
          type: Xe
        });
      }
    };
  }, [u, b]), H = d.useCallback(function() {
    u({
      type: Zt
    });
  }, [u]), D = d.useCallback(function() {
    u({
      type: tn
    });
  }, [u]), O = d.useCallback(function() {
    u({
      type: en
    });
  }, [u]), te = d.useCallback(function(m) {
    u({
      type: nn,
      highlightedIndex: m
    });
  }, [u]), _ = d.useCallback(function(m) {
    u({
      type: Ze,
      selectedItem: m
    });
  }, [u]), C = d.useCallback(function() {
    u({
      type: rn
    });
  }, [u]), ne = d.useCallback(function(m) {
    u({
      type: Fe,
      inputValue: m
    });
  }, [u]), re = d.useCallback(function(m) {
    var c = m === void 0 ? {} : m, s = c.onClick, g = ce(c, Un), p = function() {
      var S;
      (S = P.current) == null || S.focus();
    };
    return I({
      id: R.labelId,
      htmlFor: R.toggleButtonId,
      onClick: F(s, p)
    }, g);
  }, [R]), X = d.useCallback(function(m, c) {
    var s, g = m === void 0 ? {} : m, p = g.onMouseLeave, M = g.refKey, S = M === void 0 ? "ref" : M, T = g.ref, B = ce(g, jn), $ = c === void 0 ? {} : c;
    $.suppressRefError;
    var A = function() {
      u({
        type: Jt
      });
    };
    return I((s = {}, s[S] = he(T, function(W) {
      L.current = W;
    }), s.id = R.menuId, s.role = "listbox", s["aria-labelledby"] = B && B["aria-label"] ? void 0 : "" + R.labelId, s.onMouseLeave = F(p, A), s), B);
  }, [u, de, R]), ae = d.useCallback(function(m, c) {
    var s, g = m === void 0 ? {} : m, p = g.onBlur, M = g.onClick;
    g.onPress;
    var S = g.onKeyDown, T = g.refKey, B = T === void 0 ? "ref" : T, $ = g.ref, A = ce(g, qn), W = c === void 0 ? {} : c;
    W.suppressRefError;
    var Y = b.current.state, j = function() {
      u({
        type: Me
      });
    }, pe = function() {
      Y.isOpen && !U.isMouseDown && u({
        type: Pe
      });
    }, q = function(z) {
      var J = Te(z);
      J && y[J] ? y[J](z) : $n(J) && u({
        type: He,
        key: J
      });
    }, le = I((s = {}, s[B] = he($, function(oe) {
      P.current = oe;
    }), s["aria-activedescendant"] = Y.isOpen && Y.highlightedIndex > -1 ? R.getItemId(Y.highlightedIndex) : "", s["aria-controls"] = R.menuId, s["aria-expanded"] = b.current.state.isOpen, s["aria-haspopup"] = "listbox", s["aria-labelledby"] = A && A["aria-label"] ? void 0 : "" + R.labelId, s.id = R.toggleButtonId, s.role = "combobox", s.tabIndex = 0, s.onBlur = F(p, pe), s), A);
    return A.disabled || (le.onClick = F(M, j), le.onKeyDown = F(S, q)), le;
  }, [u, R, b, U, de, y]), ie = d.useCallback(function(m) {
    var c, s = m === void 0 ? {} : m, g = s.item, p = s.index, M = s.onMouseMove, S = s.onClick, T = s.onMouseDown;
    s.onPress;
    var B = s.refKey, $ = B === void 0 ? "ref" : B, A = s.disabled, W = s.ref, Y = ce(s, zn);
    A !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var j = b.current, pe = j.state, q = j.props, le = Le(g, p, q.items, "Pass either item or index to getItemProps!"), oe = le[0], z = le[1], J = q.isItemDisabled(oe, z), se = function() {
      U.isTouchEnd || z === pe.highlightedIndex || (ee.current = !1, u({
        type: Qt,
        index: z,
        disabled: J
      }));
    }, me = function() {
      u({
        type: Qe,
        index: z
      });
    }, fe = function(ve) {
      return ve.preventDefault();
    }, ue = I((c = {}, c[$] = he(W, function(G) {
      G && (V.current[R.getItemId(z)] = G);
    }), c["aria-disabled"] = J, c["aria-selected"] = "" + (oe === pe.selectedItem), c.id = R.getItemId(z), c.role = "option", c), Y);
    return J || (ue.onClick = F(S, me)), ue.onMouseMove = F(M, se), ue.onMouseDown = F(T, fe), ue;
  }, [b, R, U, ee, u]);
  return {
    // prop getters.
    getToggleButtonProps: ae,
    getLabelProps: re,
    getMenuProps: X,
    getItemProps: ie,
    // actions.
    toggleMenu: H,
    openMenu: O,
    closeMenu: D,
    setHighlightedIndex: te,
    selectItem: _,
    reset: C,
    setInputValue: ne,
    // state.
    highlightedIndex: E,
    isOpen: w,
    selectedItem: K,
    inputValue: x
  };
}
var et = 0, tt = 1, nt = 2, rt = 3, it = 4, ot = 5, ut = 6, at = 7, lt = 8, Be = 9, st = 10, un = 11, an = 12, ct = 13, ln = 14, sn = 15, cn = 16, dn = 17, fn = 18, dt = 19, gn = 20, vn = 21, ft = 22, hn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: et,
  InputKeyDownArrowUp: tt,
  InputKeyDownEscape: nt,
  InputKeyDownHome: rt,
  InputKeyDownEnd: it,
  InputKeyDownPageUp: ot,
  InputKeyDownPageDown: ut,
  InputKeyDownEnter: at,
  InputChange: lt,
  InputBlur: Be,
  InputClick: st,
  MenuMouseLeave: un,
  ItemMouseMove: an,
  ItemClick: ct,
  ToggleButtonClick: ln,
  FunctionToggleMenu: sn,
  FunctionOpenMenu: cn,
  FunctionCloseMenu: dn,
  FunctionSetHighlightedIndex: fn,
  FunctionSelectItem: dt,
  FunctionSetInputValue: gn,
  FunctionReset: vn,
  ControlledPropUpdatedSelectedItem: ft
});
function Xn(e) {
  var t = Ut(e), r = t.selectedItem, i = t.inputValue;
  return i === "" && r && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (i = e.itemToString(r)), I({}, t, {
    inputValue: i
  });
}
I({}, Xt, {
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
function Yn(e, t, r, i) {
  var n = d.useRef(), a = Nt(e, t, r, i), o = a[0], l = a[1], v = ke();
  return d.useEffect(function() {
    if (At(t, "selectedItem")) {
      if (!v) {
        var f;
        t.selectedItemChanged === void 0 ? f = t.itemToKey(t.selectedItem) !== t.itemToKey(n.current) : (console.warn('The "selectedItemChanged" is deprecated. Please use "itemToKey instead". https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#selecteditemchanged'), f = t.selectedItemChanged(n.current, t.selectedItem)), f && l({
          type: ft,
          inputValue: t.itemToString(t.selectedItem)
        });
      }
      n.current = o.selectedItem === n.current ? t.selectedItem : o.selectedItem;
    }
  }, [o.selectedItem, t.selectedItem]), [Re(o, t), l];
}
var Jn = I({}, xe, {
  getA11yStatusMessage: Tn,
  isItemDisabled: function() {
    return !1;
  }
});
function Qn(e, t) {
  var r, i = t.type, n = t.props, a = t.altKey, o;
  switch (i) {
    case ct:
      o = {
        isOpen: Q(n, "isOpen"),
        highlightedIndex: Q(n, "highlightedIndex"),
        selectedItem: n.items[t.index],
        inputValue: n.itemToString(n.items[t.index])
      };
      break;
    case et:
      e.isOpen ? o = {
        highlightedIndex: Ie(e.highlightedIndex, 1, n.items, n.isItemDisabled, !0)
      } : o = {
        highlightedIndex: a && e.selectedItem == null ? -1 : be(n, e, 1),
        isOpen: n.items.length >= 0
      };
      break;
    case tt:
      e.isOpen ? a ? o = Ee(n, e.highlightedIndex) : o = {
        highlightedIndex: Ie(e.highlightedIndex, -1, n.items, n.isItemDisabled, !0)
      } : o = {
        highlightedIndex: be(n, e, -1),
        isOpen: n.items.length >= 0
      };
      break;
    case at:
      o = Ee(n, e.highlightedIndex);
      break;
    case nt:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case ot:
      o = {
        highlightedIndex: Ie(e.highlightedIndex, -10, n.items, n.isItemDisabled, !0)
      };
      break;
    case ut:
      o = {
        highlightedIndex: Ie(e.highlightedIndex, 10, n.items, n.isItemDisabled, !0)
      };
      break;
    case rt:
      o = {
        highlightedIndex: we(0, !1, n.items, n.isItemDisabled)
      };
      break;
    case it:
      o = {
        highlightedIndex: we(n.items.length - 1, !0, n.items, n.isItemDisabled)
      };
      break;
    case Be:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((r = n.items) == null ? void 0 : r.length) && t.selectItem && {
        selectedItem: n.items[e.highlightedIndex],
        inputValue: n.itemToString(n.items[e.highlightedIndex])
      });
      break;
    case lt:
      o = {
        isOpen: !0,
        highlightedIndex: Q(n, "highlightedIndex"),
        inputValue: t.inputValue
      };
      break;
    case st:
      o = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : be(n, e, 0)
      };
      break;
    case dt:
      o = {
        selectedItem: t.selectedItem,
        inputValue: n.itemToString(t.selectedItem)
      };
      break;
    case ft:
      o = {
        inputValue: t.inputValue
      };
      break;
    default:
      return Yt(e, t, hn);
  }
  return I({}, e, o);
}
var Zn = ["onMouseLeave", "refKey", "ref"], er = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "disabled"], tr = ["onClick", "onPress", "refKey", "ref"], nr = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKey", "ref"];
rr.stateChangeTypes = hn;
function rr(e) {
  e === void 0 && (e = {});
  var t = I({}, Jn, e), r = t.items, i = t.scrollIntoView, n = t.environment, a = t.getA11yStatusMessage, o = t.getA11ySelectionMessage, l = t.itemToString, v = Yn(Qn, t, Xn, zt), f = v[0], u = v[1], w = f.isOpen, E = f.highlightedIndex, K = f.selectedItem, x = f.inputValue, P = d.useRef(null), L = d.useRef({}), V = d.useRef(null), N = d.useRef(null), R = ke(), k = Wt(t), Z = d.useRef(), b = Ve({
    state: f,
    props: t
  }), ge = d.useCallback(function(c) {
    return L.current[k.getItemId(c)];
  }, [k]);
  Oe(a, [w, E, x, r], I({
    previousResultCount: Z.current,
    items: r,
    environment: n,
    itemToString: l
  }, f)), Oe(o, [K], I({
    previousResultCount: Z.current,
    items: r,
    environment: n,
    itemToString: l
  }, f));
  var ee = qt({
    menuElement: P.current,
    highlightedIndex: E,
    isOpen: w,
    itemRefs: L,
    scrollIntoView: i,
    getItemNodeFromIndex: ge
  });
  d.useEffect(function() {
    var c = ye(t, "isOpen");
    c && V.current && V.current.focus();
  }, []), d.useEffect(function() {
    R || (Z.current = r.length);
  });
  var U = jt(n, [N, P, V], d.useCallback(function() {
    b.current.state.isOpen && u({
      type: Be,
      selectItem: !1
    });
  }, [u, b])), de = Ne();
  d.useEffect(function() {
    w || (L.current = {});
  }, [w]), d.useEffect(function() {
    var c;
    !w || !(n != null && n.document) || !(V != null && (c = V.current) != null && c.focus) || n.document.activeElement !== V.current && V.current.focus();
  }, [w, n]);
  var y = d.useMemo(function() {
    return {
      ArrowDown: function(s) {
        s.preventDefault(), u({
          type: et,
          altKey: s.altKey
        });
      },
      ArrowUp: function(s) {
        s.preventDefault(), u({
          type: tt,
          altKey: s.altKey
        });
      },
      Home: function(s) {
        b.current.state.isOpen && (s.preventDefault(), u({
          type: rt
        }));
      },
      End: function(s) {
        b.current.state.isOpen && (s.preventDefault(), u({
          type: it
        }));
      },
      Escape: function(s) {
        var g = b.current.state;
        (g.isOpen || g.inputValue || g.selectedItem || g.highlightedIndex > -1) && (s.preventDefault(), u({
          type: nt
        }));
      },
      Enter: function(s) {
        var g = b.current.state;
        !g.isOpen || s.which === 229 || (s.preventDefault(), u({
          type: at
        }));
      },
      PageUp: function(s) {
        b.current.state.isOpen && (s.preventDefault(), u({
          type: ot
        }));
      },
      PageDown: function(s) {
        b.current.state.isOpen && (s.preventDefault(), u({
          type: ut
        }));
      }
    };
  }, [u, b]), H = d.useCallback(function(c) {
    return I({
      id: k.labelId,
      htmlFor: k.inputId
    }, c);
  }, [k]), D = d.useCallback(function(c, s) {
    var g, p = c === void 0 ? {} : c, M = p.onMouseLeave, S = p.refKey, T = S === void 0 ? "ref" : S, B = p.ref, $ = ce(p, Zn), A = s === void 0 ? {} : s;
    return A.suppressRefError, I((g = {}, g[T] = he(B, function(W) {
      P.current = W;
    }), g.id = k.menuId, g.role = "listbox", g["aria-labelledby"] = $ && $["aria-label"] ? void 0 : "" + k.labelId, g.onMouseLeave = F(M, function() {
      u({
        type: un
      });
    }), g), $);
  }, [u, de, k]), O = d.useCallback(function(c) {
    var s, g, p = c === void 0 ? {} : c, M = p.item, S = p.index, T = p.refKey, B = T === void 0 ? "ref" : T, $ = p.ref, A = p.onMouseMove, W = p.onMouseDown, Y = p.onClick;
    p.onPress;
    var j = p.disabled, pe = ce(p, er);
    j !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');
    var q = b.current, le = q.props, oe = q.state, z = Le(M, S, le.items, "Pass either item or index to getItemProps!"), J = z[0], se = z[1], me = le.isItemDisabled(J, se), fe = "onClick", ue = Y, G = function() {
      U.isTouchEnd || se === oe.highlightedIndex || (ee.current = !1, u({
        type: an,
        index: se,
        disabled: me
      }));
    }, ve = function() {
      u({
        type: ct,
        index: se
      });
    }, mn = function(In) {
      return In.preventDefault();
    };
    return I((s = {}, s[B] = he($, function(Ce) {
      Ce && (L.current[k.getItemId(se)] = Ce);
    }), s["aria-disabled"] = me, s["aria-selected"] = "" + (se === oe.highlightedIndex), s.id = k.getItemId(se), s.role = "option", s), !me && (g = {}, g[fe] = F(ue, ve), g), {
      onMouseMove: F(A, G),
      onMouseDown: F(W, mn)
    }, pe);
  }, [u, k, b, U, ee]), te = d.useCallback(function(c) {
    var s, g = c === void 0 ? {} : c, p = g.onClick;
    g.onPress;
    var M = g.refKey, S = M === void 0 ? "ref" : M, T = g.ref, B = ce(g, tr), $ = b.current.state, A = function() {
      u({
        type: ln
      });
    };
    return I((s = {}, s[S] = he(T, function(W) {
      N.current = W;
    }), s["aria-controls"] = k.menuId, s["aria-expanded"] = $.isOpen, s.id = k.toggleButtonId, s.tabIndex = -1, s), !B.disabled && I({}, {
      onClick: F(p, A)
    }), B);
  }, [u, b, k]), _ = d.useCallback(function(c, s) {
    var g, p = c === void 0 ? {} : c, M = p.onKeyDown, S = p.onChange, T = p.onInput, B = p.onBlur;
    p.onChangeText;
    var $ = p.onClick, A = p.refKey, W = A === void 0 ? "ref" : A, Y = p.ref, j = ce(p, nr), pe = s === void 0 ? {} : s;
    pe.suppressRefError;
    var q = b.current.state, le = function(G) {
      var ve = Te(G);
      ve && y[ve] && y[ve](G);
    }, oe = function(G) {
      u({
        type: lt,
        inputValue: G.target.value
      });
    }, z = function(G) {
      if (n != null && n.document && q.isOpen && !U.isMouseDown) {
        var ve = G.relatedTarget === null && n.document.activeElement !== n.document.body;
        u({
          type: Be,
          selectItem: !ve
        });
      }
    }, J = function() {
      u({
        type: st
      });
    }, se = "onChange", me = {};
    if (!j.disabled) {
      var fe;
      me = (fe = {}, fe[se] = F(S, T, oe), fe.onKeyDown = F(M, le), fe.onBlur = F(B, z), fe.onClick = F($, J), fe);
    }
    return I((g = {}, g[W] = he(Y, function(ue) {
      V.current = ue;
    }), g["aria-activedescendant"] = q.isOpen && q.highlightedIndex > -1 ? k.getItemId(q.highlightedIndex) : "", g["aria-autocomplete"] = "list", g["aria-controls"] = k.menuId, g["aria-expanded"] = q.isOpen, g["aria-labelledby"] = j && j["aria-label"] ? void 0 : k.labelId, g.autoComplete = "off", g.id = k.inputId, g.role = "combobox", g.value = q.inputValue, g), me, j);
  }, [u, k, n, y, b, U, de]), C = d.useCallback(function() {
    u({
      type: sn
    });
  }, [u]), ne = d.useCallback(function() {
    u({
      type: dn
    });
  }, [u]), re = d.useCallback(function() {
    u({
      type: cn
    });
  }, [u]), X = d.useCallback(function(c) {
    u({
      type: fn,
      highlightedIndex: c
    });
  }, [u]), ae = d.useCallback(function(c) {
    u({
      type: dt,
      selectedItem: c
    });
  }, [u]), ie = d.useCallback(function(c) {
    u({
      type: gn,
      inputValue: c
    });
  }, [u]), m = d.useCallback(function() {
    u({
      type: vn
    });
  }, [u]);
  return {
    // prop getters.
    getItemProps: O,
    getLabelProps: H,
    getMenuProps: D,
    getInputProps: _,
    getToggleButtonProps: te,
    // actions.
    toggleMenu: C,
    openMenu: re,
    closeMenu: ne,
    setHighlightedIndex: X,
    setInputValue: ie,
    selectItem: ae,
    reset: m,
    // state.
    highlightedIndex: E,
    isOpen: w,
    selectedItem: K,
    inputValue: x
  };
}
var pn = {
  activeIndex: -1,
  selectedItems: []
};
function Tt(e, t) {
  return ye(e, t, pn);
}
function Ot(e, t) {
  return Q(e, t, pn);
}
function ir(e) {
  var t = Tt(e, "activeIndex"), r = Tt(e, "selectedItems");
  return {
    activeIndex: t,
    selectedItems: r
  };
}
function Et(e) {
  if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)
    return !1;
  var t = e.target;
  return !(t instanceof HTMLInputElement && // if element is a text input
  t.value !== "" && // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  (t.selectionStart !== 0 || t.selectionEnd !== 0));
}
function or(e) {
  var t = e.removedSelectedItem, r = e.itemToString;
  return r(t) + " has been removed.";
}
function ur(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
I({}, Gt, {
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
var ar = {
  itemToString: xe.itemToString,
  itemToKey: xe.itemToKey,
  stateReducer: xe.stateReducer,
  environment: xe.environment,
  getA11yRemovalMessage: or,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, gt = 0, vt = 1, ht = 2, pt = 3, mt = 4, It = 5, yt = 6, bt = 7, xt = 8, wt = 9, Ct = 10, kt = 11, Dt = 12, lr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  SelectedItemClick: gt,
  SelectedItemKeyDownDelete: vt,
  SelectedItemKeyDownBackspace: ht,
  SelectedItemKeyDownNavigationNext: pt,
  SelectedItemKeyDownNavigationPrevious: mt,
  DropdownKeyDownNavigationPrevious: It,
  DropdownKeyDownBackspace: yt,
  DropdownClick: bt,
  FunctionAddSelectedItem: xt,
  FunctionRemoveSelectedItem: wt,
  FunctionSetSelectedItems: Ct,
  FunctionSetActiveIndex: kt,
  FunctionReset: Dt
});
function sr(e, t) {
  var r = t.type, i = t.index, n = t.props, a = t.selectedItem, o = e.activeIndex, l = e.selectedItems, v;
  switch (r) {
    case gt:
      v = {
        activeIndex: i
      };
      break;
    case mt:
      v = {
        activeIndex: o - 1 < 0 ? 0 : o - 1
      };
      break;
    case pt:
      v = {
        activeIndex: o + 1 >= l.length ? -1 : o + 1
      };
      break;
    case ht:
    case vt: {
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
    case It:
      v = {
        activeIndex: l.length - 1
      };
      break;
    case yt:
      v = {
        selectedItems: l.slice(0, l.length - 1)
      };
      break;
    case xt:
      v = {
        selectedItems: [].concat(l, [a])
      };
      break;
    case bt:
      v = {
        activeIndex: -1
      };
      break;
    case wt: {
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
    case Ct: {
      var E = t.selectedItems;
      v = {
        selectedItems: E
      };
      break;
    }
    case kt: {
      var K = t.activeIndex;
      v = {
        activeIndex: K
      };
      break;
    }
    case Dt:
      v = {
        activeIndex: Ot(n, "activeIndex"),
        selectedItems: Ot(n, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return I({}, e, v);
}
var cr = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], dr = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"];
fr.stateChangeTypes = lr;
function fr(e) {
  e === void 0 && (e = {});
  var t = I({}, ar, e), r = t.getA11yRemovalMessage, i = t.itemToString, n = t.environment, a = t.keyNavigationNext, o = t.keyNavigationPrevious, l = _t(sr, t, ir, ur), v = l[0], f = l[1], u = v.activeIndex, w = v.selectedItems, E = ke(), K = d.useRef(null), x = d.useRef(w), P = d.useRef();
  P.current = [];
  var L = Ve({
    state: v,
    props: t
  });
  d.useEffect(function() {
    if (!(E || !(n != null && n.document))) {
      if (w.length < x.current.length) {
        var y = x.current.find(function(H) {
          return w.findIndex(function(D) {
            return t.itemToKey(D) === t.itemToKey(H);
          }) < 0;
        });
        $t(r({
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
    E || (u === -1 && K.current ? K.current.focus() : P.current[u] && P.current[u].focus());
  }, [u]);
  var V = Ne(), N = d.useMemo(function() {
    var y;
    return y = {}, y[o] = function() {
      f({
        type: mt
      });
    }, y[a] = function() {
      f({
        type: pt
      });
    }, y.Delete = function() {
      f({
        type: vt
      });
    }, y.Backspace = function() {
      f({
        type: ht
      });
    }, y;
  }, [f, a, o]), R = d.useMemo(function() {
    var y;
    return y = {}, y[o] = function(H) {
      Et(H) && f({
        type: It
      });
    }, y.Backspace = function(D) {
      Et(D) && f({
        type: yt
      });
    }, y;
  }, [f, o]), k = d.useCallback(function(y) {
    var H, D = y === void 0 ? {} : y, O = D.refKey, te = O === void 0 ? "ref" : O, _ = D.ref, C = D.onClick, ne = D.onKeyDown, re = D.selectedItem, X = D.index, ae = ce(D, cr), ie = L.current.state, m = Le(re, X, ie.selectedItems, "Pass either item or index to getSelectedItemProps!"), c = m[1], s = c > -1 && c === ie.activeIndex, g = function() {
      f({
        type: gt,
        index: c
      });
    }, p = function(S) {
      var T = Te(S);
      T && N[T] && N[T](S);
    };
    return I((H = {}, H[te] = he(_, function(M) {
      M && P.current.push(M);
    }), H.tabIndex = s ? 0 : -1, H.onClick = F(C, g), H.onKeyDown = F(ne, p), H), ae);
  }, [f, L, N]), Z = d.useCallback(function(y, H) {
    var D, O = y === void 0 ? {} : y, te = O.refKey, _ = te === void 0 ? "ref" : te, C = O.ref, ne = O.onKeyDown, re = O.onClick, X = O.preventKeyAction, ae = X === void 0 ? !1 : X, ie = ce(O, dr), m = H === void 0 ? {} : H;
    m.suppressRefError;
    var c = function(p) {
      var M = Te(p);
      M && R[M] && R[M](p);
    }, s = function() {
      f({
        type: bt
      });
    };
    return I((D = {}, D[_] = he(C, function(g) {
      g && (K.current = g);
    }), D), !ae && {
      onKeyDown: F(ne, c),
      onClick: F(re, s)
    }, ie);
  }, [f, R, V]), b = d.useCallback(function(y) {
    f({
      type: xt,
      selectedItem: y
    });
  }, [f]), ge = d.useCallback(function(y) {
    f({
      type: wt,
      selectedItem: y
    });
  }, [f]), ee = d.useCallback(function(y) {
    f({
      type: Ct,
      selectedItems: y
    });
  }, [f]), U = d.useCallback(function(y) {
    f({
      type: kt,
      activeIndex: y
    });
  }, [f]), de = d.useCallback(function() {
    f({
      type: Dt
    });
  }, [f]);
  return {
    getSelectedItemProps: k,
    getDropdownProps: Z,
    addSelectedItem: b,
    removeSelectedItem: ge,
    setSelectedItems: ee,
    setActiveIndex: U,
    reset: de,
    selectedItems: w,
    activeIndex: u
  };
}
export {
  Gn as a,
  fr as b,
  rr as u
};
