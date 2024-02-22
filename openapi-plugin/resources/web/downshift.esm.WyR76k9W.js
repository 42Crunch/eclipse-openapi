import { q as Qt, _ as I, f as c, R as st } from "./webapp.dStGtxDE.js";
function ce(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), r, u;
  for (u = 0; u < i.length; u++)
    r = i[u], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var ht = { exports: {} }, Zt = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", en = Zt, tn = en;
function vt() {
}
function pt() {
}
pt.resetWarningCache = vt;
var nn = function() {
  function e(i, r, u, o, d, m) {
    if (m !== tn) {
      var h = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw h.name = "Invariant Violation", h;
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
    checkPropTypes: pt,
    resetWarningCache: vt
  };
  return n.PropTypes = n, n;
};
ht.exports = nn();
var rn = ht.exports;
const g = /* @__PURE__ */ Qt(rn), dt = (e) => typeof e == "object" && e != null && e.nodeType === 1, ct = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", He = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return ct(n.overflowY, t) || ct(n.overflowX, t) || ((i) => {
      const r = ((u) => {
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
}, De = (e, t, n, i, r, u, o, d) => u < e && o > t || u > e && o < t ? 0 : u <= e && d <= n || o >= t && d >= n ? u - e - i : o > t && d < n || u < e && d > n ? o - t + r : 0, on = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, un = (e, t) => {
  var n, i, r, u;
  if (typeof document > "u")
    return [];
  const { scrollMode: o, block: d, inline: m, boundary: h, skipOverflowHiddenElements: a } = t, w = typeof h == "function" ? h : (J) => J !== h;
  if (!dt(e))
    throw new TypeError("Invalid target");
  const D = document.scrollingElement || document.documentElement, H = [];
  let R = e;
  for (; dt(R) && w(R); ) {
    if (R = on(R), R === D) {
      H.push(R);
      break;
    }
    R != null && R === document.body && He(R) && !He(document.documentElement) || R != null && He(R, a) && H.push(R);
  }
  const B = (i = (n = window.visualViewport) == null ? void 0 : n.width) != null ? i : innerWidth, L = (u = (r = window.visualViewport) == null ? void 0 : r.height) != null ? u : innerHeight, { scrollX: K, scrollY: z } = window, { height: y, width: b, top: A, right: x, bottom: ge, left: ee } = e.getBoundingClientRect(), { top: ie, right: oe, bottom: te, left: ye } = ((J) => {
    const C = window.getComputedStyle(J);
    return { top: parseFloat(C.scrollMarginTop) || 0, right: parseFloat(C.scrollMarginRight) || 0, bottom: parseFloat(C.scrollMarginBottom) || 0, left: parseFloat(C.scrollMarginLeft) || 0 };
  })(e);
  let F = d === "start" || d === "nearest" ? A - ie : d === "end" ? ge + te : A + y / 2 - ie + te, $ = m === "center" ? ee + b / 2 - ye + oe : m === "end" ? x + oe : ee - ye;
  const he = [];
  for (let J = 0; J < H.length; J++) {
    const C = H[J], { height: ue, width: ae, top: le, right: ve, bottom: pe, left: v } = C.getBoundingClientRect();
    if (o === "if-needed" && A >= 0 && ee >= 0 && ge <= L && x <= B && A >= le && ge <= pe && ee >= v && x <= ve)
      return he;
    const s = getComputedStyle(C), l = parseInt(s.borderLeftWidth, 10), f = parseInt(s.borderTopWidth, 10), p = parseInt(s.borderRightWidth, 10), E = parseInt(s.borderBottomWidth, 10);
    let O = 0, M = 0;
    const S = "offsetWidth" in C ? C.offsetWidth - C.clientWidth - l - p : 0, T = "offsetHeight" in C ? C.offsetHeight - C.clientHeight - f - E : 0, k = "offsetWidth" in C ? C.offsetWidth === 0 ? 0 : ae / C.offsetWidth : 0, P = "offsetHeight" in C ? C.offsetHeight === 0 ? 0 : ue / C.offsetHeight : 0;
    if (D === C)
      O = d === "start" ? F : d === "end" ? F - L : d === "nearest" ? De(z, z + L, L, f, E, z + F, z + F + y, y) : F - L / 2, M = m === "start" ? $ : m === "center" ? $ - B / 2 : m === "end" ? $ - B : De(K, K + B, B, l, p, K + $, K + $ + b, b), O = Math.max(0, O + z), M = Math.max(0, M + K);
    else {
      O = d === "start" ? F - le - f : d === "end" ? F - pe + E + T : d === "nearest" ? De(le, pe, ue, f, E + T, F, F + y, y) : F - (le + ue / 2) + T / 2, M = m === "start" ? $ - v - l : m === "center" ? $ - (v + ae / 2) + S / 2 : m === "end" ? $ - ve + p + S : De(v, ve, ae, l, p + S, $, $ + b, b);
      const { scrollLeft: _, scrollTop: W } = C;
      O = P === 0 ? 0 : Math.max(0, Math.min(W + O / P, C.scrollHeight - ue / P + T)), M = k === 0 ? 0 : Math.max(0, Math.min(_ + M / k, C.scrollWidth - ae / k + S)), F += W - O, $ += _ - M;
    }
    he.push({ el: C, top: O, left: M });
  }
  return he;
};
var xe = function() {
  return xe = Object.assign || function(t) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var u in n)
        Object.prototype.hasOwnProperty.call(n, u) && (t[u] = n[u]);
    }
    return t;
  }, xe.apply(this, arguments);
};
function Nn(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
      t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
  return n;
}
function _n(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = t.length, u; i < r; i++)
      (u || !(i in t)) && (u || (u = Array.prototype.slice.call(t, 0, i)), u[i] = t[i]);
  return e.concat(u || Array.prototype.slice.call(t));
}
var an = 0;
function Pe() {
}
function ln(e, t) {
  if (e) {
    var n = un(e, {
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
function ft(e, t, n) {
  var i = e === t || t instanceof n.Node && e.contains && e.contains(t);
  return i;
}
function Ve(e, t) {
  var n;
  function i() {
    n && clearTimeout(n);
  }
  function r() {
    for (var u = arguments.length, o = new Array(u), d = 0; d < u; d++)
      o[d] = arguments[d];
    i(), n = setTimeout(function() {
      n = null, e.apply(void 0, o);
    }, t);
  }
  return r.cancel = i, r;
}
function V() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(i) {
    for (var r = arguments.length, u = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      u[o - 1] = arguments[o];
    return t.some(function(d) {
      return d && d.apply(void 0, [i].concat(u)), i.preventDownshiftDefault || i.hasOwnProperty("nativeEvent") && i.nativeEvent.preventDownshiftDefault;
    });
  };
}
function me() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(i) {
    t.forEach(function(r) {
      typeof r == "function" ? r(i) : r && (r.current = i);
    });
  };
}
function sn() {
  return String(an++);
}
function dn(e) {
  var t = e.isOpen, n = e.resultCount, i = e.previousResultCount;
  return t ? n ? n !== i ? n + " result" + (n === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function Re(e, t) {
  return Object.keys(e).reduce(function(n, i) {
    return n[i] = mt(t, i) ? t[i] : e[i], n;
  }, {});
}
function mt(e, t) {
  return e[t] !== void 0;
}
function It(e) {
  var t = e.key, n = e.keyCode;
  return n >= 37 && n <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
function fe(e, t, n, i, r) {
  r === void 0 && (r = !1);
  var u = n.length;
  if (u === 0)
    return -1;
  var o = u - 1;
  (typeof e != "number" || e < 0 || e > o) && (e = t > 0 ? -1 : o + 1);
  var d = e + t;
  d < 0 ? d = r ? o : 0 : d > o && (d = r ? 0 : o);
  var m = we(d, t < 0, n, i, r);
  return m === -1 ? e >= u ? -1 : e : m;
}
function we(e, t, n, i, r) {
  r === void 0 && (r = !1);
  var u = n.length;
  if (t) {
    for (var o = e; o >= 0; o--)
      if (!i(n[o], o))
        return o;
  } else
    for (var d = e; d < u; d++)
      if (!i(n[d], d))
        return d;
  return r ? we(t ? u - 1 : 0, t, n, i) : -1;
}
function gt(e, t, n, i) {
  return i === void 0 && (i = !0), n && t.some(function(r) {
    return r && (ft(r, e, n) || i && ft(r, n.document.activeElement, n));
  });
}
var cn = Ve(function(e) {
  yt(e).textContent = "";
}, 500);
function yt(e) {
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
function fn(e, t) {
  if (!(!e || !t)) {
    var n = yt(t);
    n.textContent = e, cn(t);
  }
}
var gn = ["isInitialMount", "highlightedIndex", "items", "environment"], bt = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function hn(e, t, n) {
  var i = e.props, r = e.type, u = {};
  Object.keys(t).forEach(function(o) {
    vn(o, e, t, n), n[o] !== t[o] && (u[o] = n[o]);
  }), i.onStateChange && Object.keys(u).length && i.onStateChange(I({
    type: r
  }, u));
}
function vn(e, t, n, i) {
  var r = t.props, u = t.type, o = "on" + Ae(e) + "Change";
  r[o] && i[e] !== void 0 && i[e] !== n[e] && r[o](I({
    type: u
  }, i));
}
function pn(e, t) {
  return t.changes;
}
function mn(e) {
  var t = e.selectedItem, n = e.itemToString;
  return t ? n(t) + " has been selected." : "";
}
var In = Ve(function(e, t) {
  fn(e(), t);
}, 200), yn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? c.useLayoutEffect : c.useEffect, xt = "useId" in st ? function(t) {
  var n = t.id, i = t.labelId, r = t.menuId, u = t.getItemId, o = t.toggleButtonId, d = t.inputId, m = "downshift-" + st.useId();
  n || (n = m);
  var h = c.useRef({
    labelId: i || n + "-label",
    menuId: r || n + "-menu",
    getItemId: u || function(a) {
      return n + "-item-" + a;
    },
    toggleButtonId: o || n + "-toggle-button",
    inputId: d || n + "-input"
  });
  return h.current;
} : function(t) {
  var n = t.id, i = n === void 0 ? "downshift-" + sn() : n, r = t.labelId, u = t.menuId, o = t.getItemId, d = t.toggleButtonId, m = t.inputId, h = c.useRef({
    labelId: r || i + "-label",
    menuId: u || i + "-menu",
    getItemId: o || function(a) {
      return i + "-item-" + a;
    },
    toggleButtonId: d || i + "-toggle-button",
    inputId: m || i + "-input"
  });
  return h.current;
};
function wt(e, t, n, i) {
  var r, u;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(i);
    r = n[t], u = t;
  } else
    u = t === void 0 ? n.indexOf(e) : t, r = e;
  return [r, u];
}
function bn(e) {
  return e ? String(e) : "";
}
function xn(e) {
  return /^\S{1}$/.test(e);
}
function Ae(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function Fe(e) {
  var t = c.useRef(e);
  return t.current = e, t;
}
function Ct(e, t, n) {
  var i = c.useRef(), r = c.useRef(), u = c.useCallback(function(D, H) {
    r.current = H, D = Re(D, H.props);
    var R = e(D, H), B = H.props.stateReducer(D, I({}, H, {
      changes: R
    }));
    return B;
  }, [e]), o = c.useReducer(u, t, n), d = o[0], m = o[1], h = Fe(t), a = c.useCallback(function(D) {
    return m(I({
      props: h.current
    }, D));
  }, [h]), w = r.current;
  return c.useEffect(function() {
    w && i.current && i.current !== d && hn(w, Re(i.current, w.props), d), i.current = d;
  }, [d, t, w]), [d, a];
}
function wn(e, t, n) {
  var i = Ct(e, t, n), r = i[0], u = i[1];
  return [Re(r, t), u];
}
var Me = {
  itemToString: bn,
  stateReducer: pn,
  getA11ySelectionMessage: mn,
  scrollIntoView: ln,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function Y(e, t, n) {
  n === void 0 && (n = bt);
  var i = e["default" + Ae(t)];
  return i !== void 0 ? i : n[t];
}
function be(e, t, n) {
  n === void 0 && (n = bt);
  var i = e[t];
  if (i !== void 0)
    return i;
  var r = e["initial" + Ae(t)];
  return r !== void 0 ? r : Y(e, t, n);
}
function Mt(e) {
  var t = be(e, "selectedItem"), n = be(e, "isOpen"), i = be(e, "highlightedIndex"), r = be(e, "inputValue");
  return {
    highlightedIndex: i < 0 && t && n ? e.items.indexOf(t) : i,
    isOpen: n,
    selectedItem: t,
    inputValue: r
  };
}
function Ie(e, t, n) {
  var i = e.items, r = e.initialHighlightedIndex, u = e.defaultHighlightedIndex, o = t.selectedItem, d = t.highlightedIndex;
  return i.length === 0 ? -1 : r !== void 0 && d === r ? r : u !== void 0 ? u : o ? i.indexOf(o) : n === 0 ? -1 : n < 0 ? i.length - 1 : 0;
}
function Dt(e, t, n, i) {
  var r = c.useRef({
    isMouseDown: !1,
    isTouchMove: !1
  });
  return c.useEffect(function() {
    if (n) {
      var u = function() {
        r.current.isMouseDown = !0;
      }, o = function(w) {
        r.current.isMouseDown = !1, e && !gt(w.target, t.map(function(D) {
          return D.current;
        }), n) && i();
      }, d = function() {
        r.current.isTouchMove = !1;
      }, m = function() {
        r.current.isTouchMove = !0;
      }, h = function(w) {
        e && !r.current.isTouchMove && !gt(w.target, t.map(function(D) {
          return D.current;
        }), n, !1) && i();
      };
      return n.addEventListener("mousedown", u), n.addEventListener("mouseup", o), n.addEventListener("touchstart", d), n.addEventListener("touchmove", m), n.addEventListener("touchend", h), function() {
        n.removeEventListener("mousedown", u), n.removeEventListener("mouseup", o), n.removeEventListener("touchstart", d), n.removeEventListener("touchmove", m), n.removeEventListener("touchend", h);
      };
    }
  }, [e, n]), r;
}
var Ot = function() {
  return Pe;
};
function Se(e, t, n) {
  var i = n.isInitialMount, r = n.highlightedIndex, u = n.items, o = n.environment, d = ce(n, gn);
  c.useEffect(function() {
    i || !(o != null && o.document) || In(function() {
      return e(I({
        highlightedIndex: r,
        highlightedItem: u[r],
        resultCount: u.length
      }, d));
    }, o.document);
  }, t);
}
function Rt(e) {
  var t = e.highlightedIndex, n = e.isOpen, i = e.itemRefs, r = e.getItemNodeFromIndex, u = e.menuElement, o = e.scrollIntoView, d = c.useRef(!0);
  return yn(function() {
    t < 0 || !n || !Object.keys(i.current).length || (d.current === !1 ? d.current = !0 : o(r(t), u));
  }, [t]), d;
}
var St = Pe;
function ke(e, t, n) {
  var i;
  n === void 0 && (n = !0);
  var r = ((i = e.items) == null ? void 0 : i.length) && t >= 0;
  return I({
    isOpen: !1,
    highlightedIndex: -1
  }, r && I({
    selectedItem: e.items[t],
    isOpen: Y(e, "isOpen"),
    highlightedIndex: Y(e, "highlightedIndex")
  }, n && {
    inputValue: e.itemToString(e.items[t])
  }));
}
var kt = {
  environment: g.shape({
    addEventListener: g.func.isRequired,
    removeEventListener: g.func.isRequired,
    document: g.shape({
      createElement: g.func.isRequired,
      getElementById: g.func.isRequired,
      activeElement: g.any.isRequired,
      body: g.any.isRequired
    }).isRequired,
    Node: g.func.isRequired
  }),
  itemToString: g.func,
  stateReducer: g.func
}, Et = I({}, kt, {
  getA11yStatusMessage: g.func,
  highlightedIndex: g.number,
  defaultHighlightedIndex: g.number,
  initialHighlightedIndex: g.number,
  isOpen: g.bool,
  defaultIsOpen: g.bool,
  initialIsOpen: g.bool,
  selectedItem: g.any,
  initialSelectedItem: g.any,
  defaultSelectedItem: g.any,
  id: g.string,
  labelId: g.string,
  menuId: g.string,
  getItemId: g.func,
  toggleButtonId: g.string,
  onSelectedItemChange: g.func,
  onHighlightedIndexChange: g.func,
  onStateChange: g.func,
  onIsOpenChange: g.func,
  scrollIntoView: g.func
});
function Tt(e, t, n) {
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
        highlightedIndex: e.isOpen ? -1 : Ie(r, e, 0)
      };
      break;
    case n.FunctionOpenMenu:
      u = {
        isOpen: !0,
        highlightedIndex: Ie(r, e, 0)
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
        highlightedIndex: Y(r, "highlightedIndex"),
        isOpen: Y(r, "isOpen"),
        selectedItem: Y(r, "selectedItem"),
        inputValue: Y(r, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return I({}, e, u);
}
function Cn(e) {
  for (var t = e.keysSoFar, n = e.highlightedIndex, i = e.items, r = e.itemToString, u = e.isItemDisabled, o = t.toLowerCase(), d = 0; d < i.length; d++) {
    var m = (d + n + (t.length < 2 ? 1 : 0)) % i.length, h = i[m];
    if (h !== void 0 && r(h).toLowerCase().startsWith(o) && !u(h, m))
      return m;
  }
  return n;
}
xe(xe({}, Et), { items: g.array.isRequired, isItemDisabled: g.func, getA11ySelectionMessage: g.func });
function Mn(e) {
  var t = e.isOpen, n = e.resultCount, i = e.previousResultCount;
  return t ? n ? n !== i ? "".concat(n, " result").concat(n === 1 ? " is" : "s are", " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.") : "" : "No results are available." : "";
}
var Dn = xe(xe({}, Me), { getA11yStatusMessage: Mn, isItemDisabled: function() {
  return !1;
} }), On = Pe, Oe = 0, $e = 1, Le = 2, Ee = 3, We = 4, je = 5, Ue = 6, Ne = 7, _e = 8, qe = 9, ze = 10, Te = 11, Kt = 12, Pt = 13, Ge = 14, Ht = 15, Bt = 16, Vt = 17, At = 18, Xe = 19, Be = 20, Ft = 21, $t = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: Oe,
  ToggleButtonKeyDownArrowDown: $e,
  ToggleButtonKeyDownArrowUp: Le,
  ToggleButtonKeyDownCharacter: Ee,
  ToggleButtonKeyDownEscape: We,
  ToggleButtonKeyDownHome: je,
  ToggleButtonKeyDownEnd: Ue,
  ToggleButtonKeyDownEnter: Ne,
  ToggleButtonKeyDownSpaceButton: _e,
  ToggleButtonKeyDownPageUp: qe,
  ToggleButtonKeyDownPageDown: ze,
  ToggleButtonBlur: Te,
  MenuMouseLeave: Kt,
  ItemMouseMove: Pt,
  ItemClick: Ge,
  FunctionToggleMenu: Ht,
  FunctionOpenMenu: Bt,
  FunctionCloseMenu: Vt,
  FunctionSetHighlightedIndex: At,
  FunctionSelectItem: Xe,
  FunctionSetInputValue: Be,
  FunctionReset: Ft
});
function Rn(e, t) {
  var n, i = t.type, r = t.props, u = t.altKey, o;
  switch (i) {
    case Ge:
      o = {
        isOpen: Y(r, "isOpen"),
        highlightedIndex: Y(r, "highlightedIndex"),
        selectedItem: r.items[t.index]
      };
      break;
    case Ee:
      {
        var d = t.key, m = "" + e.inputValue + d, h = !e.isOpen && e.selectedItem ? r.items.indexOf(e.selectedItem) : e.highlightedIndex, a = Cn({
          keysSoFar: m,
          highlightedIndex: h,
          items: r.items,
          itemToString: r.itemToString,
          isItemDisabled: r.isItemDisabled
        });
        o = {
          inputValue: m,
          highlightedIndex: a,
          isOpen: !0
        };
      }
      break;
    case $e:
      {
        var w = e.isOpen ? fe(e.highlightedIndex, 1, r.items, r.isItemDisabled) : u && e.selectedItem == null ? -1 : Ie(r, e, 1);
        o = {
          highlightedIndex: w,
          isOpen: !0
        };
      }
      break;
    case Le:
      if (e.isOpen && u)
        o = ke(r, e.highlightedIndex, !1);
      else {
        var D = e.isOpen ? fe(e.highlightedIndex, -1, r.items, r.isItemDisabled) : Ie(r, e, -1);
        o = {
          highlightedIndex: D,
          isOpen: !0
        };
      }
      break;
    case Ne:
    case _e:
      o = ke(r, e.highlightedIndex, !1);
      break;
    case je:
      o = {
        highlightedIndex: we(0, !1, r.items, r.isItemDisabled),
        isOpen: !0
      };
      break;
    case Ue:
      o = {
        highlightedIndex: we(r.items.length - 1, !0, r.items, r.isItemDisabled),
        isOpen: !0
      };
      break;
    case qe:
      o = {
        highlightedIndex: fe(e.highlightedIndex, -10, r.items, r.isItemDisabled)
      };
      break;
    case ze:
      o = {
        highlightedIndex: fe(e.highlightedIndex, 10, r.items, r.isItemDisabled)
      };
      break;
    case We:
      o = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case Te:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((n = r.items) == null ? void 0 : n.length) && {
        selectedItem: r.items[e.highlightedIndex]
      });
      break;
    case Xe:
      o = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return Tt(e, t, $t);
  }
  return I({}, e, o);
}
var Sn = ["onMouseLeave", "refKey", "ref"], kn = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], En = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
Tn.stateChangeTypes = $t;
function Tn(e) {
  e === void 0 && (e = {}), On();
  var t = I({}, Dn, e), n = t.items, i = t.scrollIntoView, r = t.environment, u = t.itemToString, o = t.getA11ySelectionMessage, d = t.getA11yStatusMessage, m = wn(Rn, t, Mt), h = m[0], a = m[1], w = h.isOpen, D = h.highlightedIndex, H = h.selectedItem, R = h.inputValue, B = c.useRef(null), L = c.useRef(null), K = c.useRef({}), z = c.useRef(null), y = xt(t), b = c.useRef(), A = c.useRef(!0), x = Fe({
    state: h,
    props: t
  }), ge = c.useCallback(function(v) {
    return K.current[y.getItemId(v)];
  }, [y]);
  Se(d, [w, D, R, n], I({
    isInitialMount: A.current,
    previousResultCount: b.current,
    items: n,
    environment: r,
    itemToString: u
  }, h)), Se(o, [H], I({
    isInitialMount: A.current,
    previousResultCount: b.current,
    items: n,
    environment: r,
    itemToString: u
  }, h));
  var ee = Rt({
    menuElement: L.current,
    highlightedIndex: D,
    isOpen: w,
    itemRefs: K,
    scrollIntoView: i,
    getItemNodeFromIndex: ge
  });
  c.useEffect(function() {
    return z.current = Ve(function(v) {
      v({
        type: Be,
        inputValue: ""
      });
    }, 500), function() {
      z.current.cancel();
    };
  }, []), c.useEffect(function() {
    R && z.current(a);
  }, [a, R]), St({
    isInitialMount: A.current,
    props: t,
    state: h
  }), c.useEffect(function() {
    A.current || (b.current = n.length);
  }), c.useEffect(function() {
    var v = be(t, "isOpen");
    v && B.current && B.current.focus();
  }, []);
  var ie = Dt(w, [L, B], r, function() {
    a({
      type: Te
    });
  }), oe = Ot();
  c.useEffect(function() {
    return A.current = !1, function() {
      A.current = !0;
    };
  }, []), c.useEffect(function() {
    w || (K.current = {});
  }, [w]);
  var te = c.useMemo(function() {
    return {
      ArrowDown: function(s) {
        s.preventDefault(), a({
          type: $e,
          altKey: s.altKey
        });
      },
      ArrowUp: function(s) {
        s.preventDefault(), a({
          type: Le,
          altKey: s.altKey
        });
      },
      Home: function(s) {
        s.preventDefault(), a({
          type: je
        });
      },
      End: function(s) {
        s.preventDefault(), a({
          type: Ue
        });
      },
      Escape: function() {
        x.current.state.isOpen && a({
          type: We
        });
      },
      Enter: function(s) {
        s.preventDefault(), a({
          type: x.current.state.isOpen ? Ne : Oe
        });
      },
      PageUp: function(s) {
        x.current.state.isOpen && (s.preventDefault(), a({
          type: qe
        }));
      },
      PageDown: function(s) {
        x.current.state.isOpen && (s.preventDefault(), a({
          type: ze
        }));
      },
      " ": function(s) {
        s.preventDefault();
        var l = x.current.state;
        if (!l.isOpen) {
          a({
            type: Oe
          });
          return;
        }
        l.inputValue ? a({
          type: Ee,
          key: " "
        }) : a({
          type: _e
        });
      }
    };
  }, [a, x]), ye = c.useCallback(function() {
    a({
      type: Ht
    });
  }, [a]), F = c.useCallback(function() {
    a({
      type: Vt
    });
  }, [a]), $ = c.useCallback(function() {
    a({
      type: Bt
    });
  }, [a]), he = c.useCallback(function(v) {
    a({
      type: At,
      highlightedIndex: v
    });
  }, [a]), J = c.useCallback(function(v) {
    a({
      type: Xe,
      selectedItem: v
    });
  }, [a]), C = c.useCallback(function() {
    a({
      type: Ft
    });
  }, [a]), ue = c.useCallback(function(v) {
    a({
      type: Be,
      inputValue: v
    });
  }, [a]), ae = c.useCallback(function(v) {
    return I({
      id: y.labelId,
      htmlFor: y.toggleButtonId
    }, v);
  }, [y]), le = c.useCallback(function(v, s) {
    var l, f = v === void 0 ? {} : v, p = f.onMouseLeave, E = f.refKey, O = E === void 0 ? "ref" : E, M = f.ref, S = ce(f, Sn), T = s === void 0 ? {} : s;
    T.suppressRefError;
    var k = function() {
      a({
        type: Kt
      });
    };
    return I((l = {}, l[O] = me(M, function(P) {
      L.current = P;
    }), l.id = y.menuId, l.role = "listbox", l["aria-labelledby"] = S && S["aria-label"] ? void 0 : "" + y.labelId, l.onMouseLeave = V(p, k), l), S);
  }, [a, oe, y]), ve = c.useCallback(function(v, s) {
    var l, f = v === void 0 ? {} : v, p = f.onBlur, E = f.onClick;
    f.onPress;
    var O = f.onKeyDown, M = f.refKey, S = M === void 0 ? "ref" : M, T = f.ref, k = ce(f, kn), P = s === void 0 ? {} : s;
    P.suppressRefError;
    var _ = x.current.state, W = function() {
      a({
        type: Oe
      });
    }, se = function() {
      _.isOpen && !ie.current.isMouseDown && a({
        type: Te
      });
    }, j = function(U) {
      var q = It(U);
      q && te[q] ? te[q](U) : xn(q) && a({
        type: Ee,
        key: q
      });
    }, Q = I((l = {}, l[S] = me(T, function(G) {
      B.current = G;
    }), l["aria-activedescendant"] = _.isOpen && _.highlightedIndex > -1 ? y.getItemId(_.highlightedIndex) : "", l["aria-controls"] = y.menuId, l["aria-expanded"] = x.current.state.isOpen, l["aria-haspopup"] = "listbox", l["aria-labelledby"] = k && k["aria-label"] ? void 0 : "" + y.labelId, l.id = y.toggleButtonId, l.role = "combobox", l.tabIndex = 0, l.onBlur = V(p, se), l), k);
    return k.disabled || (Q.onClick = V(E, W), Q.onKeyDown = V(O, j)), Q;
  }, [x, y, oe, a, ie, te]), pe = c.useCallback(function(v) {
    var s, l = v === void 0 ? {} : v, f = l.item, p = l.index, E = l.onMouseMove, O = l.onClick, M = l.onMouseDown;
    l.onPress;
    var S = l.refKey, T = S === void 0 ? "ref" : S, k = l.disabled, P = l.ref, _ = ce(l, En);
    k !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var W = x.current, se = W.state, j = W.props, Q = wt(f, p, j.items, "Pass either item or index to getItemProps!"), G = Q[0], U = Q[1], q = j.isItemDisabled(G, U), Z = function() {
      U !== se.highlightedIndex && (ee.current = !1, a({
        type: Pt,
        index: U,
        disabled: q
      }));
    }, de = function() {
      a({
        type: Ge,
        index: U
      });
    }, ne = function(re) {
      return re.preventDefault();
    }, X = I((s = {}, s[T] = me(P, function(N) {
      N && (K.current[y.getItemId(U)] = N);
    }), s["aria-disabled"] = q, s["aria-selected"] = "" + (G === se.selectedItem), s.id = y.getItemId(U), s.role = "option", s), _);
    return q || (X.onClick = V(O, de)), X.onMouseMove = V(E, Z), X.onMouseDown = V(M, ne), X;
  }, [x, y, ee, a]);
  return {
    // prop getters.
    getToggleButtonProps: ve,
    getLabelProps: ae,
    getMenuProps: le,
    getItemProps: pe,
    // actions.
    toggleMenu: ye,
    openMenu: $,
    closeMenu: F,
    setHighlightedIndex: he,
    selectItem: J,
    reset: C,
    setInputValue: ue,
    // state.
    highlightedIndex: D,
    isOpen: w,
    selectedItem: H,
    inputValue: R
  };
}
var Ye = 0, Je = 1, Qe = 2, Ze = 3, et = 4, tt = 5, nt = 6, rt = 7, it = 8, Ke = 9, ot = 10, Lt = 11, Wt = 12, ut = 13, jt = 14, Ut = 15, Nt = 16, _t = 17, qt = 18, at = 19, zt = 20, Gt = 21, lt = 22, Xt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: Ye,
  InputKeyDownArrowUp: Je,
  InputKeyDownEscape: Qe,
  InputKeyDownHome: Ze,
  InputKeyDownEnd: et,
  InputKeyDownPageUp: tt,
  InputKeyDownPageDown: nt,
  InputKeyDownEnter: rt,
  InputChange: it,
  InputBlur: Ke,
  InputClick: ot,
  MenuMouseLeave: Lt,
  ItemMouseMove: Wt,
  ItemClick: ut,
  ToggleButtonClick: jt,
  FunctionToggleMenu: Ut,
  FunctionOpenMenu: Nt,
  FunctionCloseMenu: _t,
  FunctionSetHighlightedIndex: qt,
  FunctionSelectItem: at,
  FunctionSetInputValue: zt,
  FunctionReset: Gt,
  ControlledPropUpdatedSelectedItem: lt
});
function Kn(e) {
  var t = Mt(e), n = t.selectedItem, i = t.inputValue;
  return i === "" && n && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (i = e.itemToString(n)), I({}, t, {
    inputValue: i
  });
}
I({}, Et, {
  items: g.array.isRequired,
  isItemDisabled: g.func,
  selectedItemChanged: g.func,
  getA11ySelectionMessage: g.func,
  inputValue: g.string,
  defaultInputValue: g.string,
  initialInputValue: g.string,
  inputId: g.string,
  onInputValueChange: g.func
});
function Pn(e, t, n) {
  var i = c.useRef(), r = Ct(e, t, n), u = r[0], o = r[1];
  return c.useEffect(function() {
    mt(t, "selectedItem") && (t.selectedItemChanged(i.current, t.selectedItem) && o({
      type: lt,
      inputValue: t.itemToString(t.selectedItem)
    }), i.current = u.selectedItem === i.current ? t.selectedItem : u.selectedItem);
  }, [u.selectedItem, t.selectedItem]), [Re(u, t), o];
}
var Hn = Pe, Bn = I({}, Me, {
  selectedItemChanged: function(t, n) {
    return t !== n;
  },
  getA11yStatusMessage: dn,
  isItemDisabled: function() {
    return !1;
  }
});
function Vn(e, t) {
  var n, i = t.type, r = t.props, u = t.altKey, o;
  switch (i) {
    case ut:
      o = {
        isOpen: Y(r, "isOpen"),
        highlightedIndex: Y(r, "highlightedIndex"),
        selectedItem: r.items[t.index],
        inputValue: r.itemToString(r.items[t.index])
      };
      break;
    case Ye:
      e.isOpen ? o = {
        highlightedIndex: fe(e.highlightedIndex, 1, r.items, r.isItemDisabled, !0)
      } : o = {
        highlightedIndex: u && e.selectedItem == null ? -1 : Ie(r, e, 1),
        isOpen: r.items.length >= 0
      };
      break;
    case Je:
      e.isOpen ? u ? o = ke(r, e.highlightedIndex) : o = {
        highlightedIndex: fe(e.highlightedIndex, -1, r.items, r.isItemDisabled, !0)
      } : o = {
        highlightedIndex: Ie(r, e, -1),
        isOpen: r.items.length >= 0
      };
      break;
    case rt:
      o = ke(r, e.highlightedIndex);
      break;
    case Qe:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case tt:
      o = {
        highlightedIndex: fe(e.highlightedIndex, -10, r.items, r.isItemDisabled, !0)
      };
      break;
    case nt:
      o = {
        highlightedIndex: fe(e.highlightedIndex, 10, r.items, r.isItemDisabled, !0)
      };
      break;
    case Ze:
      o = {
        highlightedIndex: we(0, !1, r.items, r.isItemDisabled)
      };
      break;
    case et:
      o = {
        highlightedIndex: we(r.items.length - 1, !0, r.items, r.isItemDisabled)
      };
      break;
    case Ke:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((n = r.items) == null ? void 0 : n.length) && t.selectItem && {
        selectedItem: r.items[e.highlightedIndex],
        inputValue: r.itemToString(r.items[e.highlightedIndex])
      });
      break;
    case it:
      o = {
        isOpen: !0,
        highlightedIndex: Y(r, "highlightedIndex"),
        inputValue: t.inputValue
      };
      break;
    case ot:
      o = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Ie(r, e, 0)
      };
      break;
    case at:
      o = {
        selectedItem: t.selectedItem,
        inputValue: r.itemToString(t.selectedItem)
      };
      break;
    case lt:
      o = {
        inputValue: t.inputValue
      };
      break;
    default:
      return Tt(e, t, Xt);
  }
  return I({}, e, o);
}
var An = ["onMouseLeave", "refKey", "ref"], Fn = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "disabled"], $n = ["onClick", "onPress", "refKey", "ref"], Ln = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKey", "ref"];
Wn.stateChangeTypes = Xt;
function Wn(e) {
  e === void 0 && (e = {}), Hn();
  var t = I({}, Bn, e), n = t.items, i = t.scrollIntoView, r = t.environment, u = t.getA11yStatusMessage, o = t.getA11ySelectionMessage, d = t.itemToString, m = Pn(Vn, t, Kn), h = m[0], a = m[1], w = h.isOpen, D = h.highlightedIndex, H = h.selectedItem, R = h.inputValue, B = c.useRef(null), L = c.useRef({}), K = c.useRef(null), z = c.useRef(null), y = c.useRef(!0), b = xt(t), A = c.useRef(), x = Fe({
    state: h,
    props: t
  }), ge = c.useCallback(function(s) {
    return L.current[b.getItemId(s)];
  }, [b]);
  Se(u, [w, D, R, n], I({
    isInitialMount: y.current,
    previousResultCount: A.current,
    items: n,
    environment: r,
    itemToString: d
  }, h)), Se(o, [H], I({
    isInitialMount: y.current,
    previousResultCount: A.current,
    items: n,
    environment: r,
    itemToString: d
  }, h));
  var ee = Rt({
    menuElement: B.current,
    highlightedIndex: D,
    isOpen: w,
    itemRefs: L,
    scrollIntoView: i,
    getItemNodeFromIndex: ge
  });
  St({
    isInitialMount: y.current,
    props: t,
    state: h
  }), c.useEffect(function() {
    var s = be(t, "isOpen");
    s && K.current && K.current.focus();
  }, []), c.useEffect(function() {
    y.current || (A.current = n.length);
  });
  var ie = Dt(w, [K, B, z], r, function() {
    a({
      type: Ke,
      selectItem: !1
    });
  }), oe = Ot();
  c.useEffect(function() {
    return y.current = !1, function() {
      y.current = !0;
    };
  }, []), c.useEffect(function() {
    w || (L.current = {});
  }, [w]), c.useEffect(function() {
    var s;
    !w || !(r != null && r.document) || !(K != null && (s = K.current) != null && s.focus) || r.document.activeElement !== K.current && K.current.focus();
  }, [w, r]);
  var te = c.useMemo(function() {
    return {
      ArrowDown: function(l) {
        l.preventDefault(), a({
          type: Ye,
          altKey: l.altKey
        });
      },
      ArrowUp: function(l) {
        l.preventDefault(), a({
          type: Je,
          altKey: l.altKey
        });
      },
      Home: function(l) {
        x.current.state.isOpen && (l.preventDefault(), a({
          type: Ze
        }));
      },
      End: function(l) {
        x.current.state.isOpen && (l.preventDefault(), a({
          type: et
        }));
      },
      Escape: function(l) {
        var f = x.current.state;
        (f.isOpen || f.inputValue || f.selectedItem || f.highlightedIndex > -1) && (l.preventDefault(), a({
          type: Qe
        }));
      },
      Enter: function(l) {
        var f = x.current.state;
        !f.isOpen || l.which === 229 || (l.preventDefault(), a({
          type: rt
        }));
      },
      PageUp: function(l) {
        x.current.state.isOpen && (l.preventDefault(), a({
          type: tt
        }));
      },
      PageDown: function(l) {
        x.current.state.isOpen && (l.preventDefault(), a({
          type: nt
        }));
      }
    };
  }, [a, x]), ye = c.useCallback(function(s) {
    return I({
      id: b.labelId,
      htmlFor: b.inputId
    }, s);
  }, [b]), F = c.useCallback(function(s, l) {
    var f, p = s === void 0 ? {} : s, E = p.onMouseLeave, O = p.refKey, M = O === void 0 ? "ref" : O, S = p.ref, T = ce(p, An), k = l === void 0 ? {} : l;
    return k.suppressRefError, I((f = {}, f[M] = me(S, function(P) {
      B.current = P;
    }), f.id = b.menuId, f.role = "listbox", f["aria-labelledby"] = T && T["aria-label"] ? void 0 : "" + b.labelId, f.onMouseLeave = V(E, function() {
      a({
        type: Lt
      });
    }), f), T);
  }, [a, oe, b]), $ = c.useCallback(function(s) {
    var l, f, p = s === void 0 ? {} : s, E = p.item, O = p.index, M = p.refKey, S = M === void 0 ? "ref" : M, T = p.ref, k = p.onMouseMove, P = p.onMouseDown, _ = p.onClick;
    p.onPress;
    var W = p.disabled, se = ce(p, Fn);
    W !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');
    var j = x.current, Q = j.props, G = j.state, U = wt(E, O, Q.items, "Pass either item or index to getItemProps!"), q = U[0], Z = U[1], de = Q.isItemDisabled(q, Z), ne = "onClick", X = _, N = function() {
      Z !== G.highlightedIndex && (ee.current = !1, a({
        type: Wt,
        index: Z,
        disabled: de
      }));
    }, re = function() {
      a({
        type: ut,
        index: Z
      });
    }, Yt = function(Jt) {
      return Jt.preventDefault();
    };
    return I((l = {}, l[S] = me(T, function(Ce) {
      Ce && (L.current[b.getItemId(Z)] = Ce);
    }), l["aria-disabled"] = de, l["aria-selected"] = "" + (Z === G.highlightedIndex), l.id = b.getItemId(Z), l.role = "option", l), !de && (f = {}, f[ne] = V(X, re), f), {
      onMouseMove: V(k, N),
      onMouseDown: V(P, Yt)
    }, se);
  }, [a, x, ee, b]), he = c.useCallback(function(s) {
    var l, f = s === void 0 ? {} : s, p = f.onClick;
    f.onPress;
    var E = f.refKey, O = E === void 0 ? "ref" : E, M = f.ref, S = ce(f, $n), T = x.current.state, k = function() {
      a({
        type: jt
      });
    };
    return I((l = {}, l[O] = me(M, function(P) {
      z.current = P;
    }), l["aria-controls"] = b.menuId, l["aria-expanded"] = T.isOpen, l.id = b.toggleButtonId, l.tabIndex = -1, l), !S.disabled && I({}, {
      onClick: V(p, k)
    }), S);
  }, [a, x, b]), J = c.useCallback(function(s, l) {
    var f, p = s === void 0 ? {} : s, E = p.onKeyDown, O = p.onChange, M = p.onInput, S = p.onBlur;
    p.onChangeText;
    var T = p.onClick, k = p.refKey, P = k === void 0 ? "ref" : k, _ = p.ref, W = ce(p, Ln), se = l === void 0 ? {} : l;
    se.suppressRefError;
    var j = x.current.state, Q = function(N) {
      var re = It(N);
      re && te[re] && te[re](N);
    }, G = function(N) {
      a({
        type: it,
        inputValue: N.target.value
      });
    }, U = function(N) {
      if (r != null && r.document && j.isOpen && !ie.current.isMouseDown) {
        var re = N.relatedTarget === null && r.document.activeElement !== r.document.body;
        a({
          type: Ke,
          selectItem: !re
        });
      }
    }, q = function() {
      a({
        type: ot
      });
    }, Z = "onChange", de = {};
    if (!W.disabled) {
      var ne;
      de = (ne = {}, ne[Z] = V(O, M, G), ne.onKeyDown = V(E, Q), ne.onBlur = V(S, U), ne.onClick = V(T, q), ne);
    }
    return I((f = {}, f[P] = me(_, function(X) {
      K.current = X;
    }), f["aria-activedescendant"] = j.isOpen && j.highlightedIndex > -1 ? b.getItemId(j.highlightedIndex) : "", f["aria-autocomplete"] = "list", f["aria-controls"] = b.menuId, f["aria-expanded"] = j.isOpen, f["aria-labelledby"] = W && W["aria-label"] ? void 0 : b.labelId, f.autoComplete = "off", f.id = b.inputId, f.role = "combobox", f.value = j.inputValue, f), de, W);
  }, [oe, x, b, te, a, ie, r]), C = c.useCallback(function() {
    a({
      type: Ut
    });
  }, [a]), ue = c.useCallback(function() {
    a({
      type: _t
    });
  }, [a]), ae = c.useCallback(function() {
    a({
      type: Nt
    });
  }, [a]), le = c.useCallback(function(s) {
    a({
      type: qt,
      highlightedIndex: s
    });
  }, [a]), ve = c.useCallback(function(s) {
    a({
      type: at,
      selectedItem: s
    });
  }, [a]), pe = c.useCallback(function(s) {
    a({
      type: zt,
      inputValue: s
    });
  }, [a]), v = c.useCallback(function() {
    a({
      type: Gt
    });
  }, [a]);
  return {
    // prop getters.
    getItemProps: $,
    getLabelProps: ye,
    getMenuProps: F,
    getInputProps: J,
    getToggleButtonProps: he,
    // actions.
    toggleMenu: C,
    openMenu: ae,
    closeMenu: ue,
    setHighlightedIndex: le,
    setInputValue: pe,
    selectItem: ve,
    reset: v,
    // state.
    highlightedIndex: D,
    isOpen: w,
    selectedItem: H,
    inputValue: R
  };
}
function jn(e) {
  var t = e.removedSelectedItem, n = e.itemToString;
  return n(t) + " has been removed.";
}
I({}, kt, {
  selectedItems: g.array,
  initialSelectedItems: g.array,
  defaultSelectedItems: g.array,
  getA11yRemovalMessage: g.func,
  activeIndex: g.number,
  initialActiveIndex: g.number,
  defaultActiveIndex: g.number,
  onActiveIndexChange: g.func,
  onSelectedItemsChange: g.func,
  keyNavigationNext: g.string,
  keyNavigationPrevious: g.string
});
Me.itemToString, Me.stateReducer, Me.environment;
export {
  xe as _,
  Tn as a,
  Nn as b,
  _n as c,
  Wn as u
};
