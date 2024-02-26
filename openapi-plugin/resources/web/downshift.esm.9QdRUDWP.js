import { o as Zt, _ as I, e as c, R as st } from "./extends.lDO40HzL.js";
function ie(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), n, u;
  for (u = 0; u < i.length; u++)
    n = i[u], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
var ht = { exports: {} }, en = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", tn = en, nn = tn;
function vt() {
}
function pt() {
}
pt.resetWarningCache = vt;
var rn = function() {
  function e(i, n, u, o, d, v) {
    if (v !== nn) {
      var p = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw p.name = "Invariant Violation", p;
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
    checkPropTypes: pt,
    resetWarningCache: vt
  };
  return r.PropTypes = r, r;
};
ht.exports = rn();
var on = ht.exports;
const g = /* @__PURE__ */ Zt(on), dt = (e) => typeof e == "object" && e != null && e.nodeType === 1, ct = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Pe = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const r = getComputedStyle(e, null);
    return ct(r.overflowY, t) || ct(r.overflowX, t) || ((i) => {
      const n = ((u) => {
        if (!u.ownerDocument || !u.ownerDocument.defaultView)
          return null;
        try {
          return u.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(i);
      return !!n && (n.clientHeight < i.scrollHeight || n.clientWidth < i.scrollWidth);
    })(e);
  }
  return !1;
}, Oe = (e, t, r, i, n, u, o, d) => u < e && o > t || u > e && o < t ? 0 : u <= e && d <= r || o >= t && d >= r ? u - e - i : o > t && d < r || u < e && d > r ? o - t + n : 0, un = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, an = (e, t) => {
  var r, i, n, u;
  if (typeof document > "u")
    return [];
  const { scrollMode: o, block: d, inline: v, boundary: p, skipOverflowHiddenElements: a } = t, O = typeof p == "function" ? p : (J) => J !== p;
  if (!dt(e))
    throw new TypeError("Invalid target");
  const R = document.scrollingElement || document.documentElement, K = [];
  let C = e;
  for (; dt(C) && O(C); ) {
    if (C = un(C), C === R) {
      K.push(C);
      break;
    }
    C != null && C === document.body && Pe(C) && !Pe(document.documentElement) || C != null && Pe(C, a) && K.push(C);
  }
  const B = (i = (r = window.visualViewport) == null ? void 0 : r.width) != null ? i : innerWidth, A = (u = (n = window.visualViewport) == null ? void 0 : n.height) != null ? u : innerHeight, { scrollX: P, scrollY: z } = window, { height: y, width: b, top: F, right: x, bottom: ge, left: ee } = e.getBoundingClientRect(), { top: oe, right: ue, bottom: te, left: ye } = ((J) => {
    const w = window.getComputedStyle(J);
    return { top: parseFloat(w.scrollMarginTop) || 0, right: parseFloat(w.scrollMarginRight) || 0, bottom: parseFloat(w.scrollMarginBottom) || 0, left: parseFloat(w.scrollMarginLeft) || 0 };
  })(e);
  let $ = d === "start" || d === "nearest" ? F - oe : d === "end" ? ge + te : F + y / 2 - oe + te, L = v === "center" ? ee + b / 2 - ye + ue : v === "end" ? x + ue : ee - ye;
  const he = [];
  for (let J = 0; J < K.length; J++) {
    const w = K[J], { height: ae, width: le, top: se, right: ve, bottom: pe, left: m } = w.getBoundingClientRect();
    if (o === "if-needed" && F >= 0 && ee >= 0 && ge <= A && x <= B && F >= se && ge <= pe && ee >= m && x <= ve)
      return he;
    const s = getComputedStyle(w), l = parseInt(s.borderLeftWidth, 10), f = parseInt(s.borderTopWidth, 10), h = parseInt(s.borderRightWidth, 10), S = parseInt(s.borderBottomWidth, 10);
    let M = 0, D = 0;
    const k = "offsetWidth" in w ? w.offsetWidth - w.clientWidth - l - h : 0, T = "offsetHeight" in w ? w.offsetHeight - w.clientHeight - f - S : 0, E = "offsetWidth" in w ? w.offsetWidth === 0 ? 0 : le / w.offsetWidth : 0, H = "offsetHeight" in w ? w.offsetHeight === 0 ? 0 : ae / w.offsetHeight : 0;
    if (R === w)
      M = d === "start" ? $ : d === "end" ? $ - A : d === "nearest" ? Oe(z, z + A, A, f, S, z + $, z + $ + y, y) : $ - A / 2, D = v === "start" ? L : v === "center" ? L - B / 2 : v === "end" ? L - B : Oe(P, P + B, B, l, h, P + L, P + L + b, b), M = Math.max(0, M + z), D = Math.max(0, D + P);
    else {
      M = d === "start" ? $ - se - f : d === "end" ? $ - pe + S + T : d === "nearest" ? Oe(se, pe, ae, f, S + T, $, $ + y, y) : $ - (se + ae / 2) + T / 2, D = v === "start" ? L - m - l : v === "center" ? L - (m + le / 2) + k / 2 : v === "end" ? L - ve + h + k : Oe(m, ve, le, l, h + k, L, L + b, b);
      const { scrollLeft: _, scrollTop: W } = w;
      M = H === 0 ? 0 : Math.max(0, Math.min(W + M / H, w.scrollHeight - ae / H + T)), D = E === 0 ? 0 : Math.max(0, Math.min(_ + D / E, w.scrollWidth - le / E + k)), $ += W - M, L += _ - D;
    }
    he.push({ el: w, top: M, left: D });
  }
  return he;
};
var xe = function() {
  return xe = Object.assign || function(t) {
    for (var r, i = 1, n = arguments.length; i < n; i++) {
      r = arguments[i];
      for (var u in r)
        Object.prototype.hasOwnProperty.call(r, u) && (t[u] = r[u]);
    }
    return t;
  }, xe.apply(this, arguments);
};
function _n(e, t) {
  var r = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)
      t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
  return r;
}
function qn(e, t, r) {
  if (r || arguments.length === 2)
    for (var i = 0, n = t.length, u; i < n; i++)
      (u || !(i in t)) && (u || (u = Array.prototype.slice.call(t, 0, i)), u[i] = t[i]);
  return e.concat(u || Array.prototype.slice.call(t));
}
var ln = 0;
function Be() {
}
function sn(e, t) {
  if (e) {
    var r = an(e, {
      boundary: t,
      block: "nearest",
      scrollMode: "if-needed"
    });
    r.forEach(function(i) {
      var n = i.el, u = i.top, o = i.left;
      n.scrollTop = u, n.scrollLeft = o;
    });
  }
}
function ft(e, t, r) {
  var i = e === t || t instanceof r.Node && e.contains && e.contains(t);
  return i;
}
function Ve(e, t) {
  var r;
  function i() {
    r && clearTimeout(r);
  }
  function n() {
    for (var u = arguments.length, o = new Array(u), d = 0; d < u; d++)
      o[d] = arguments[d];
    i(), r = setTimeout(function() {
      r = null, e.apply(void 0, o);
    }, t);
  }
  return n.cancel = i, n;
}
function V() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(i) {
    for (var n = arguments.length, u = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      u[o - 1] = arguments[o];
    return t.some(function(d) {
      return d && d.apply(void 0, [i].concat(u)), i.preventDownshiftDefault || i.hasOwnProperty("nativeEvent") && i.nativeEvent.preventDownshiftDefault;
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
function dn() {
  return String(ln++);
}
function cn(e) {
  var t = e.isOpen, r = e.resultCount, i = e.previousResultCount;
  return t ? r ? r !== i ? r + " result" + (r === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function ke(e, t) {
  return Object.keys(e).reduce(function(r, i) {
    return r[i] = mt(t, i) ? t[i] : e[i], r;
  }, {});
}
function mt(e, t) {
  return e[t] !== void 0;
}
function It(e) {
  var t = e.key, r = e.keyCode;
  return r >= 37 && r <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
function fe(e, t, r, i, n) {
  n === void 0 && (n = !1);
  var u = r.length;
  if (u === 0)
    return -1;
  var o = u - 1;
  (typeof e != "number" || e < 0 || e > o) && (e = t > 0 ? -1 : o + 1);
  var d = e + t;
  d < 0 ? d = n ? o : 0 : d > o && (d = n ? 0 : o);
  var v = we(d, t < 0, r, i, n);
  return v === -1 ? e >= u ? -1 : e : v;
}
function we(e, t, r, i, n) {
  n === void 0 && (n = !1);
  var u = r.length;
  if (t) {
    for (var o = e; o >= 0; o--)
      if (!i(r[o], o))
        return o;
  } else
    for (var d = e; d < u; d++)
      if (!i(r[d], d))
        return d;
  return n ? we(t ? u - 1 : 0, t, r, i) : -1;
}
function gt(e, t, r, i) {
  return i === void 0 && (i = !0), r && t.some(function(n) {
    return n && (ft(n, e, r) || i && ft(n, r.document.activeElement, r));
  });
}
var fn = Ve(function(e) {
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
function gn(e, t) {
  if (!(!e || !t)) {
    var r = yt(t);
    r.textContent = e, fn(t);
  }
}
var hn = ["isInitialMount", "highlightedIndex", "items", "environment"], bt = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function vn(e, t, r) {
  var i = e.props, n = e.type, u = {};
  Object.keys(t).forEach(function(o) {
    pn(o, e, t, r), r[o] !== t[o] && (u[o] = r[o]);
  }), i.onStateChange && Object.keys(u).length && i.onStateChange(I({
    type: n
  }, u));
}
function pn(e, t, r, i) {
  var n = t.props, u = t.type, o = "on" + Ae(e) + "Change";
  n[o] && i[e] !== void 0 && i[e] !== r[e] && n[o](I({
    type: u
  }, i));
}
function mn(e, t) {
  return t.changes;
}
function In(e) {
  var t = e.selectedItem, r = e.itemToString;
  return t ? r(t) + " has been selected." : "";
}
var yn = Ve(function(e, t) {
  gn(e(), t);
}, 200), bn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? c.useLayoutEffect : c.useEffect, xt = "useId" in st ? function(t) {
  var r = t.id, i = t.labelId, n = t.menuId, u = t.getItemId, o = t.toggleButtonId, d = t.inputId, v = "downshift-" + st.useId();
  r || (r = v);
  var p = c.useRef({
    labelId: i || r + "-label",
    menuId: n || r + "-menu",
    getItemId: u || function(a) {
      return r + "-item-" + a;
    },
    toggleButtonId: o || r + "-toggle-button",
    inputId: d || r + "-input"
  });
  return p.current;
} : function(t) {
  var r = t.id, i = r === void 0 ? "downshift-" + dn() : r, n = t.labelId, u = t.menuId, o = t.getItemId, d = t.toggleButtonId, v = t.inputId, p = c.useRef({
    labelId: n || i + "-label",
    menuId: u || i + "-menu",
    getItemId: o || function(a) {
      return i + "-item-" + a;
    },
    toggleButtonId: d || i + "-toggle-button",
    inputId: v || i + "-input"
  });
  return p.current;
};
function wt(e, t, r, i) {
  var n, u;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(i);
    n = r[t], u = t;
  } else
    u = t === void 0 ? r.indexOf(e) : t, n = e;
  return [n, u];
}
function xn(e) {
  return e ? String(e) : "";
}
function wn(e) {
  return /^\S{1}$/.test(e);
}
function Ae(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function Fe(e) {
  var t = c.useRef(e);
  return t.current = e, t;
}
function Ct(e, t, r, i) {
  var n = c.useRef(), u = c.useRef(), o = c.useCallback(function(K, C) {
    u.current = C, K = ke(K, C.props);
    var B = e(K, C), A = C.props.stateReducer(K, I({}, C, {
      changes: B
    }));
    return A;
  }, [e]), d = c.useReducer(o, t, r), v = d[0], p = d[1], a = Fe(t), O = c.useCallback(function(K) {
    return p(I({
      props: a.current
    }, K));
  }, [a]), R = u.current;
  return c.useEffect(function() {
    var K = R && n.current && !i(n.current, v);
    K && vn(R, ke(n.current, R.props), v), n.current = v;
  }, [v, R, i]), [v, O];
}
function Cn(e, t, r, i) {
  var n = Ct(e, t, r, i), u = n[0], o = n[1];
  return [ke(u, t), o];
}
var Me = {
  itemToString: xn,
  stateReducer: mn,
  getA11ySelectionMessage: In,
  scrollIntoView: sn,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function Y(e, t, r) {
  r === void 0 && (r = bt);
  var i = e["default" + Ae(t)];
  return i !== void 0 ? i : r[t];
}
function be(e, t, r) {
  r === void 0 && (r = bt);
  var i = e[t];
  if (i !== void 0)
    return i;
  var n = e["initial" + Ae(t)];
  return n !== void 0 ? n : Y(e, t, r);
}
function Mt(e) {
  var t = be(e, "selectedItem"), r = be(e, "isOpen"), i = be(e, "highlightedIndex"), n = be(e, "inputValue");
  return {
    highlightedIndex: i < 0 && t && r ? e.items.indexOf(t) : i,
    isOpen: r,
    selectedItem: t,
    inputValue: n
  };
}
function Ie(e, t, r) {
  var i = e.items, n = e.initialHighlightedIndex, u = e.defaultHighlightedIndex, o = t.selectedItem, d = t.highlightedIndex;
  return i.length === 0 ? -1 : n !== void 0 && d === n ? n : u !== void 0 ? u : o ? i.indexOf(o) : r === 0 ? -1 : r < 0 ? i.length - 1 : 0;
}
function Ot(e, t, r, i) {
  var n = c.useRef({
    isMouseDown: !1,
    isTouchMove: !1
  });
  return c.useEffect(function() {
    if (r) {
      var u = function() {
        n.current.isMouseDown = !0;
      }, o = function(O) {
        n.current.isMouseDown = !1, e && !gt(O.target, t.map(function(R) {
          return R.current;
        }), r) && i();
      }, d = function() {
        n.current.isTouchMove = !1;
      }, v = function() {
        n.current.isTouchMove = !0;
      }, p = function(O) {
        e && !n.current.isTouchMove && !gt(O.target, t.map(function(R) {
          return R.current;
        }), r, !1) && i();
      };
      return r.addEventListener("mousedown", u), r.addEventListener("mouseup", o), r.addEventListener("touchstart", d), r.addEventListener("touchmove", v), r.addEventListener("touchend", p), function() {
        r.removeEventListener("mousedown", u), r.removeEventListener("mouseup", o), r.removeEventListener("touchstart", d), r.removeEventListener("touchmove", v), r.removeEventListener("touchend", p);
      };
    }
  }, [e, r]), n;
}
var Dt = function() {
  return Be;
};
function Re(e, t, r) {
  var i = r.isInitialMount, n = r.highlightedIndex, u = r.items, o = r.environment, d = ie(r, hn);
  c.useEffect(function() {
    i || !(o != null && o.document) || yn(function() {
      return e(I({
        highlightedIndex: n,
        highlightedItem: u[n],
        resultCount: u.length
      }, d));
    }, o.document);
  }, t);
}
function kt(e) {
  var t = e.highlightedIndex, r = e.isOpen, i = e.itemRefs, n = e.getItemNodeFromIndex, u = e.menuElement, o = e.scrollIntoView, d = c.useRef(!0);
  return bn(function() {
    t < 0 || !r || !Object.keys(i.current).length || (d.current === !1 ? d.current = !0 : o(n(t), u));
  }, [t]), d;
}
var Rt = Be;
function Se(e, t, r) {
  var i;
  r === void 0 && (r = !0);
  var n = ((i = e.items) == null ? void 0 : i.length) && t >= 0;
  return I({
    isOpen: !1,
    highlightedIndex: -1
  }, n && I({
    selectedItem: e.items[t],
    isOpen: Y(e, "isOpen"),
    highlightedIndex: Y(e, "highlightedIndex")
  }, r && {
    inputValue: e.itemToString(e.items[t])
  }));
}
function St(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
var Et = {
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
}, Tt = I({}, Et, {
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
function Kt(e, t, r) {
  var i = t.type, n = t.props, u;
  switch (i) {
    case r.ItemMouseMove:
      u = {
        highlightedIndex: t.disabled ? -1 : t.index
      };
      break;
    case r.MenuMouseLeave:
      u = {
        highlightedIndex: -1
      };
      break;
    case r.ToggleButtonClick:
    case r.FunctionToggleMenu:
      u = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Ie(n, e, 0)
      };
      break;
    case r.FunctionOpenMenu:
      u = {
        isOpen: !0,
        highlightedIndex: Ie(n, e, 0)
      };
      break;
    case r.FunctionCloseMenu:
      u = {
        isOpen: !1
      };
      break;
    case r.FunctionSetHighlightedIndex:
      u = {
        highlightedIndex: t.highlightedIndex
      };
      break;
    case r.FunctionSetInputValue:
      u = {
        inputValue: t.inputValue
      };
      break;
    case r.FunctionReset:
      u = {
        highlightedIndex: Y(n, "highlightedIndex"),
        isOpen: Y(n, "isOpen"),
        selectedItem: Y(n, "selectedItem"),
        inputValue: Y(n, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return I({}, e, u);
}
function Mn(e) {
  for (var t = e.keysSoFar, r = e.highlightedIndex, i = e.items, n = e.itemToString, u = e.isItemDisabled, o = t.toLowerCase(), d = 0; d < i.length; d++) {
    var v = (d + r + (t.length < 2 ? 1 : 0)) % i.length, p = i[v];
    if (p !== void 0 && n(p).toLowerCase().startsWith(o) && !u(p, v))
      return v;
  }
  return r;
}
xe(xe({}, Tt), { items: g.array.isRequired, isItemDisabled: g.func, getA11ySelectionMessage: g.func });
function On(e) {
  var t = e.isOpen, r = e.resultCount, i = e.previousResultCount;
  return t ? r ? r !== i ? "".concat(r, " result").concat(r === 1 ? " is" : "s are", " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.") : "" : "No results are available." : "";
}
var Dn = xe(xe({}, Me), { getA11yStatusMessage: On, isItemDisabled: function() {
  return !1;
} }), De = 0, $e = 1, Le = 2, Ee = 3, We = 4, je = 5, Ue = 6, Ne = 7, _e = 8, qe = 9, ze = 10, Te = 11, Pt = 12, Ht = 13, Ge = 14, Bt = 15, Vt = 16, At = 17, Ft = 18, Xe = 19, He = 20, $t = 21, Lt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: De,
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
  MenuMouseLeave: Pt,
  ItemMouseMove: Ht,
  ItemClick: Ge,
  FunctionToggleMenu: Bt,
  FunctionOpenMenu: Vt,
  FunctionCloseMenu: At,
  FunctionSetHighlightedIndex: Ft,
  FunctionSelectItem: Xe,
  FunctionSetInputValue: He,
  FunctionReset: $t
});
function kn(e, t) {
  var r, i = t.type, n = t.props, u = t.altKey, o;
  switch (i) {
    case Ge:
      o = {
        isOpen: Y(n, "isOpen"),
        highlightedIndex: Y(n, "highlightedIndex"),
        selectedItem: n.items[t.index]
      };
      break;
    case Ee:
      {
        var d = t.key, v = "" + e.inputValue + d, p = !e.isOpen && e.selectedItem ? n.items.indexOf(e.selectedItem) : e.highlightedIndex, a = Mn({
          keysSoFar: v,
          highlightedIndex: p,
          items: n.items,
          itemToString: n.itemToString,
          isItemDisabled: n.isItemDisabled
        });
        o = {
          inputValue: v,
          highlightedIndex: a,
          isOpen: !0
        };
      }
      break;
    case $e:
      {
        var O = e.isOpen ? fe(e.highlightedIndex, 1, n.items, n.isItemDisabled) : u && e.selectedItem == null ? -1 : Ie(n, e, 1);
        o = {
          highlightedIndex: O,
          isOpen: !0
        };
      }
      break;
    case Le:
      if (e.isOpen && u)
        o = Se(n, e.highlightedIndex, !1);
      else {
        var R = e.isOpen ? fe(e.highlightedIndex, -1, n.items, n.isItemDisabled) : Ie(n, e, -1);
        o = {
          highlightedIndex: R,
          isOpen: !0
        };
      }
      break;
    case Ne:
    case _e:
      o = Se(n, e.highlightedIndex, !1);
      break;
    case je:
      o = {
        highlightedIndex: we(0, !1, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case Ue:
      o = {
        highlightedIndex: we(n.items.length - 1, !0, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case qe:
      o = {
        highlightedIndex: fe(e.highlightedIndex, -10, n.items, n.isItemDisabled)
      };
      break;
    case ze:
      o = {
        highlightedIndex: fe(e.highlightedIndex, 10, n.items, n.isItemDisabled)
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
      }, e.highlightedIndex >= 0 && ((r = n.items) == null ? void 0 : r.length) && {
        selectedItem: n.items[e.highlightedIndex]
      });
      break;
    case Xe:
      o = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return Kt(e, t, Lt);
  }
  return I({}, e, o);
}
var Rn = ["onClick"], Sn = ["onMouseLeave", "refKey", "ref"], En = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], Tn = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
Kn.stateChangeTypes = Lt;
function Kn(e) {
  e === void 0 && (e = {});
  var t = I({}, Dn, e), r = t.items, i = t.scrollIntoView, n = t.environment, u = t.itemToString, o = t.getA11ySelectionMessage, d = t.getA11yStatusMessage, v = Cn(kn, t, Mt, St), p = v[0], a = v[1], O = p.isOpen, R = p.highlightedIndex, K = p.selectedItem, C = p.inputValue, B = c.useRef(null), A = c.useRef(null), P = c.useRef({}), z = c.useRef(null), y = xt(t), b = c.useRef(), F = c.useRef(!0), x = Fe({
    state: p,
    props: t
  }), ge = c.useCallback(function(m) {
    return P.current[y.getItemId(m)];
  }, [y]);
  Re(d, [O, R, C, r], I({
    isInitialMount: F.current,
    previousResultCount: b.current,
    items: r,
    environment: n,
    itemToString: u
  }, p)), Re(o, [K], I({
    isInitialMount: F.current,
    previousResultCount: b.current,
    items: r,
    environment: n,
    itemToString: u
  }, p));
  var ee = kt({
    menuElement: A.current,
    highlightedIndex: R,
    isOpen: O,
    itemRefs: P,
    scrollIntoView: i,
    getItemNodeFromIndex: ge
  });
  c.useEffect(function() {
    return z.current = Ve(function(m) {
      m({
        type: He,
        inputValue: ""
      });
    }, 500), function() {
      z.current.cancel();
    };
  }, []), c.useEffect(function() {
    C && z.current(a);
  }, [a, C]), Rt({
    isInitialMount: F.current,
    props: t,
    state: p
  }), c.useEffect(function() {
    F.current || (b.current = r.length);
  }), c.useEffect(function() {
    var m = be(t, "isOpen");
    m && B.current && B.current.focus();
  }, []);
  var oe = Ot(O, [A, B], n, function() {
    a({
      type: Te
    });
  }), ue = Dt();
  c.useEffect(function() {
    return F.current = !1, function() {
      F.current = !0;
    };
  }, []), c.useEffect(function() {
    O || (P.current = {});
  }, [O]);
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
          type: x.current.state.isOpen ? Ne : De
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
            type: De
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
      type: Bt
    });
  }, [a]), $ = c.useCallback(function() {
    a({
      type: At
    });
  }, [a]), L = c.useCallback(function() {
    a({
      type: Vt
    });
  }, [a]), he = c.useCallback(function(m) {
    a({
      type: Ft,
      highlightedIndex: m
    });
  }, [a]), J = c.useCallback(function(m) {
    a({
      type: Xe,
      selectedItem: m
    });
  }, [a]), w = c.useCallback(function() {
    a({
      type: $t
    });
  }, [a]), ae = c.useCallback(function(m) {
    a({
      type: He,
      inputValue: m
    });
  }, [a]), le = c.useCallback(function(m) {
    var s = m === void 0 ? {} : m, l = s.onClick, f = ie(s, Rn), h = function() {
      var M;
      (M = B.current) == null || M.focus();
    };
    return I({
      id: y.labelId,
      htmlFor: y.toggleButtonId,
      onClick: V(l, h)
    }, f);
  }, [y]), se = c.useCallback(function(m, s) {
    var l, f = m === void 0 ? {} : m, h = f.onMouseLeave, S = f.refKey, M = S === void 0 ? "ref" : S, D = f.ref, k = ie(f, Sn), T = s === void 0 ? {} : s;
    T.suppressRefError;
    var E = function() {
      a({
        type: Pt
      });
    };
    return I((l = {}, l[M] = me(D, function(H) {
      A.current = H;
    }), l.id = y.menuId, l.role = "listbox", l["aria-labelledby"] = k && k["aria-label"] ? void 0 : "" + y.labelId, l.onMouseLeave = V(h, E), l), k);
  }, [a, ue, y]), ve = c.useCallback(function(m, s) {
    var l, f = m === void 0 ? {} : m, h = f.onBlur, S = f.onClick;
    f.onPress;
    var M = f.onKeyDown, D = f.refKey, k = D === void 0 ? "ref" : D, T = f.ref, E = ie(f, En), H = s === void 0 ? {} : s;
    H.suppressRefError;
    var _ = x.current.state, W = function() {
      a({
        type: De
      });
    }, de = function() {
      _.isOpen && !oe.current.isMouseDown && a({
        type: Te
      });
    }, j = function(U) {
      var q = It(U);
      q && te[q] ? te[q](U) : wn(q) && a({
        type: Ee,
        key: q
      });
    }, Q = I((l = {}, l[k] = me(T, function(G) {
      B.current = G;
    }), l["aria-activedescendant"] = _.isOpen && _.highlightedIndex > -1 ? y.getItemId(_.highlightedIndex) : "", l["aria-controls"] = y.menuId, l["aria-expanded"] = x.current.state.isOpen, l["aria-haspopup"] = "listbox", l["aria-labelledby"] = E && E["aria-label"] ? void 0 : "" + y.labelId, l.id = y.toggleButtonId, l.role = "combobox", l.tabIndex = 0, l.onBlur = V(h, de), l), E);
    return E.disabled || (Q.onClick = V(S, W), Q.onKeyDown = V(M, j)), Q;
  }, [x, y, ue, a, oe, te]), pe = c.useCallback(function(m) {
    var s, l = m === void 0 ? {} : m, f = l.item, h = l.index, S = l.onMouseMove, M = l.onClick, D = l.onMouseDown;
    l.onPress;
    var k = l.refKey, T = k === void 0 ? "ref" : k, E = l.disabled, H = l.ref, _ = ie(l, Tn);
    E !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var W = x.current, de = W.state, j = W.props, Q = wt(f, h, j.items, "Pass either item or index to getItemProps!"), G = Q[0], U = Q[1], q = j.isItemDisabled(G, U), Z = function() {
      U !== de.highlightedIndex && (ee.current = !1, a({
        type: Ht,
        index: U,
        disabled: q
      }));
    }, ce = function() {
      a({
        type: Ge,
        index: U
      });
    }, ne = function(re) {
      return re.preventDefault();
    }, X = I((s = {}, s[T] = me(H, function(N) {
      N && (P.current[y.getItemId(U)] = N);
    }), s["aria-disabled"] = q, s["aria-selected"] = "" + (G === de.selectedItem), s.id = y.getItemId(U), s.role = "option", s), _);
    return q || (X.onClick = V(M, ce)), X.onMouseMove = V(S, Z), X.onMouseDown = V(D, ne), X;
  }, [x, y, ee, a]);
  return {
    // prop getters.
    getToggleButtonProps: ve,
    getLabelProps: le,
    getMenuProps: se,
    getItemProps: pe,
    // actions.
    toggleMenu: ye,
    openMenu: L,
    closeMenu: $,
    setHighlightedIndex: he,
    selectItem: J,
    reset: w,
    setInputValue: ae,
    // state.
    highlightedIndex: R,
    isOpen: O,
    selectedItem: K,
    inputValue: C
  };
}
var Ye = 0, Je = 1, Qe = 2, Ze = 3, et = 4, tt = 5, nt = 6, rt = 7, it = 8, Ke = 9, ot = 10, Wt = 11, jt = 12, ut = 13, Ut = 14, Nt = 15, _t = 16, qt = 17, zt = 18, at = 19, Gt = 20, Xt = 21, lt = 22, Yt = /* @__PURE__ */ Object.freeze({
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
  MenuMouseLeave: Wt,
  ItemMouseMove: jt,
  ItemClick: ut,
  ToggleButtonClick: Ut,
  FunctionToggleMenu: Nt,
  FunctionOpenMenu: _t,
  FunctionCloseMenu: qt,
  FunctionSetHighlightedIndex: zt,
  FunctionSelectItem: at,
  FunctionSetInputValue: Gt,
  FunctionReset: Xt,
  ControlledPropUpdatedSelectedItem: lt
});
function Pn(e) {
  var t = Mt(e), r = t.selectedItem, i = t.inputValue;
  return i === "" && r && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (i = e.itemToString(r)), I({}, t, {
    inputValue: i
  });
}
I({}, Tt, {
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
function Hn(e, t, r, i) {
  var n = c.useRef(), u = Ct(e, t, r, i), o = u[0], d = u[1];
  return c.useEffect(function() {
    mt(t, "selectedItem") && (t.selectedItemChanged(n.current, t.selectedItem) && d({
      type: lt,
      inputValue: t.itemToString(t.selectedItem)
    }), n.current = o.selectedItem === n.current ? t.selectedItem : o.selectedItem);
  }, [o.selectedItem, t.selectedItem]), [ke(o, t), d];
}
var Bn = Be, Vn = I({}, Me, {
  selectedItemChanged: function(t, r) {
    return t !== r;
  },
  getA11yStatusMessage: cn,
  isItemDisabled: function() {
    return !1;
  }
});
function An(e, t) {
  var r, i = t.type, n = t.props, u = t.altKey, o;
  switch (i) {
    case ut:
      o = {
        isOpen: Y(n, "isOpen"),
        highlightedIndex: Y(n, "highlightedIndex"),
        selectedItem: n.items[t.index],
        inputValue: n.itemToString(n.items[t.index])
      };
      break;
    case Ye:
      e.isOpen ? o = {
        highlightedIndex: fe(e.highlightedIndex, 1, n.items, n.isItemDisabled, !0)
      } : o = {
        highlightedIndex: u && e.selectedItem == null ? -1 : Ie(n, e, 1),
        isOpen: n.items.length >= 0
      };
      break;
    case Je:
      e.isOpen ? u ? o = Se(n, e.highlightedIndex) : o = {
        highlightedIndex: fe(e.highlightedIndex, -1, n.items, n.isItemDisabled, !0)
      } : o = {
        highlightedIndex: Ie(n, e, -1),
        isOpen: n.items.length >= 0
      };
      break;
    case rt:
      o = Se(n, e.highlightedIndex);
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
        highlightedIndex: fe(e.highlightedIndex, -10, n.items, n.isItemDisabled, !0)
      };
      break;
    case nt:
      o = {
        highlightedIndex: fe(e.highlightedIndex, 10, n.items, n.isItemDisabled, !0)
      };
      break;
    case Ze:
      o = {
        highlightedIndex: we(0, !1, n.items, n.isItemDisabled)
      };
      break;
    case et:
      o = {
        highlightedIndex: we(n.items.length - 1, !0, n.items, n.isItemDisabled)
      };
      break;
    case Ke:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((r = n.items) == null ? void 0 : r.length) && t.selectItem && {
        selectedItem: n.items[e.highlightedIndex],
        inputValue: n.itemToString(n.items[e.highlightedIndex])
      });
      break;
    case it:
      o = {
        isOpen: !0,
        highlightedIndex: Y(n, "highlightedIndex"),
        inputValue: t.inputValue
      };
      break;
    case ot:
      o = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Ie(n, e, 0)
      };
      break;
    case at:
      o = {
        selectedItem: t.selectedItem,
        inputValue: n.itemToString(t.selectedItem)
      };
      break;
    case lt:
      o = {
        inputValue: t.inputValue
      };
      break;
    default:
      return Kt(e, t, Yt);
  }
  return I({}, e, o);
}
var Fn = ["onMouseLeave", "refKey", "ref"], $n = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "disabled"], Ln = ["onClick", "onPress", "refKey", "ref"], Wn = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKey", "ref"];
jn.stateChangeTypes = Yt;
function jn(e) {
  e === void 0 && (e = {}), Bn();
  var t = I({}, Vn, e), r = t.items, i = t.scrollIntoView, n = t.environment, u = t.getA11yStatusMessage, o = t.getA11ySelectionMessage, d = t.itemToString, v = Hn(An, t, Pn, St), p = v[0], a = v[1], O = p.isOpen, R = p.highlightedIndex, K = p.selectedItem, C = p.inputValue, B = c.useRef(null), A = c.useRef({}), P = c.useRef(null), z = c.useRef(null), y = c.useRef(!0), b = xt(t), F = c.useRef(), x = Fe({
    state: p,
    props: t
  }), ge = c.useCallback(function(s) {
    return A.current[b.getItemId(s)];
  }, [b]);
  Re(u, [O, R, C, r], I({
    isInitialMount: y.current,
    previousResultCount: F.current,
    items: r,
    environment: n,
    itemToString: d
  }, p)), Re(o, [K], I({
    isInitialMount: y.current,
    previousResultCount: F.current,
    items: r,
    environment: n,
    itemToString: d
  }, p));
  var ee = kt({
    menuElement: B.current,
    highlightedIndex: R,
    isOpen: O,
    itemRefs: A,
    scrollIntoView: i,
    getItemNodeFromIndex: ge
  });
  Rt({
    isInitialMount: y.current,
    props: t,
    state: p
  }), c.useEffect(function() {
    var s = be(t, "isOpen");
    s && P.current && P.current.focus();
  }, []), c.useEffect(function() {
    y.current || (F.current = r.length);
  });
  var oe = Ot(O, [P, B, z], n, function() {
    a({
      type: Ke,
      selectItem: !1
    });
  }), ue = Dt();
  c.useEffect(function() {
    return y.current = !1, function() {
      y.current = !0;
    };
  }, []), c.useEffect(function() {
    O || (A.current = {});
  }, [O]), c.useEffect(function() {
    var s;
    !O || !(n != null && n.document) || !(P != null && (s = P.current) != null && s.focus) || n.document.activeElement !== P.current && P.current.focus();
  }, [O, n]);
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
  }, [b]), $ = c.useCallback(function(s, l) {
    var f, h = s === void 0 ? {} : s, S = h.onMouseLeave, M = h.refKey, D = M === void 0 ? "ref" : M, k = h.ref, T = ie(h, Fn), E = l === void 0 ? {} : l;
    return E.suppressRefError, I((f = {}, f[D] = me(k, function(H) {
      B.current = H;
    }), f.id = b.menuId, f.role = "listbox", f["aria-labelledby"] = T && T["aria-label"] ? void 0 : "" + b.labelId, f.onMouseLeave = V(S, function() {
      a({
        type: Wt
      });
    }), f), T);
  }, [a, ue, b]), L = c.useCallback(function(s) {
    var l, f, h = s === void 0 ? {} : s, S = h.item, M = h.index, D = h.refKey, k = D === void 0 ? "ref" : D, T = h.ref, E = h.onMouseMove, H = h.onMouseDown, _ = h.onClick;
    h.onPress;
    var W = h.disabled, de = ie(h, $n);
    W !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');
    var j = x.current, Q = j.props, G = j.state, U = wt(S, M, Q.items, "Pass either item or index to getItemProps!"), q = U[0], Z = U[1], ce = Q.isItemDisabled(q, Z), ne = "onClick", X = _, N = function() {
      Z !== G.highlightedIndex && (ee.current = !1, a({
        type: jt,
        index: Z,
        disabled: ce
      }));
    }, re = function() {
      a({
        type: ut,
        index: Z
      });
    }, Jt = function(Qt) {
      return Qt.preventDefault();
    };
    return I((l = {}, l[k] = me(T, function(Ce) {
      Ce && (A.current[b.getItemId(Z)] = Ce);
    }), l["aria-disabled"] = ce, l["aria-selected"] = "" + (Z === G.highlightedIndex), l.id = b.getItemId(Z), l.role = "option", l), !ce && (f = {}, f[ne] = V(X, re), f), {
      onMouseMove: V(E, N),
      onMouseDown: V(H, Jt)
    }, de);
  }, [a, x, ee, b]), he = c.useCallback(function(s) {
    var l, f = s === void 0 ? {} : s, h = f.onClick;
    f.onPress;
    var S = f.refKey, M = S === void 0 ? "ref" : S, D = f.ref, k = ie(f, Ln), T = x.current.state, E = function() {
      a({
        type: Ut
      });
    };
    return I((l = {}, l[M] = me(D, function(H) {
      z.current = H;
    }), l["aria-controls"] = b.menuId, l["aria-expanded"] = T.isOpen, l.id = b.toggleButtonId, l.tabIndex = -1, l), !k.disabled && I({}, {
      onClick: V(h, E)
    }), k);
  }, [a, x, b]), J = c.useCallback(function(s, l) {
    var f, h = s === void 0 ? {} : s, S = h.onKeyDown, M = h.onChange, D = h.onInput, k = h.onBlur;
    h.onChangeText;
    var T = h.onClick, E = h.refKey, H = E === void 0 ? "ref" : E, _ = h.ref, W = ie(h, Wn), de = l === void 0 ? {} : l;
    de.suppressRefError;
    var j = x.current.state, Q = function(N) {
      var re = It(N);
      re && te[re] && te[re](N);
    }, G = function(N) {
      a({
        type: it,
        inputValue: N.target.value
      });
    }, U = function(N) {
      if (n != null && n.document && j.isOpen && !oe.current.isMouseDown) {
        var re = N.relatedTarget === null && n.document.activeElement !== n.document.body;
        a({
          type: Ke,
          selectItem: !re
        });
      }
    }, q = function() {
      a({
        type: ot
      });
    }, Z = "onChange", ce = {};
    if (!W.disabled) {
      var ne;
      ce = (ne = {}, ne[Z] = V(M, D, G), ne.onKeyDown = V(S, Q), ne.onBlur = V(k, U), ne.onClick = V(T, q), ne);
    }
    return I((f = {}, f[H] = me(_, function(X) {
      P.current = X;
    }), f["aria-activedescendant"] = j.isOpen && j.highlightedIndex > -1 ? b.getItemId(j.highlightedIndex) : "", f["aria-autocomplete"] = "list", f["aria-controls"] = b.menuId, f["aria-expanded"] = j.isOpen, f["aria-labelledby"] = W && W["aria-label"] ? void 0 : b.labelId, f.autoComplete = "off", f.id = b.inputId, f.role = "combobox", f.value = j.inputValue, f), ce, W);
  }, [ue, x, b, te, a, oe, n]), w = c.useCallback(function() {
    a({
      type: Nt
    });
  }, [a]), ae = c.useCallback(function() {
    a({
      type: qt
    });
  }, [a]), le = c.useCallback(function() {
    a({
      type: _t
    });
  }, [a]), se = c.useCallback(function(s) {
    a({
      type: zt,
      highlightedIndex: s
    });
  }, [a]), ve = c.useCallback(function(s) {
    a({
      type: at,
      selectedItem: s
    });
  }, [a]), pe = c.useCallback(function(s) {
    a({
      type: Gt,
      inputValue: s
    });
  }, [a]), m = c.useCallback(function() {
    a({
      type: Xt
    });
  }, [a]);
  return {
    // prop getters.
    getItemProps: L,
    getLabelProps: ye,
    getMenuProps: $,
    getInputProps: J,
    getToggleButtonProps: he,
    // actions.
    toggleMenu: w,
    openMenu: le,
    closeMenu: ae,
    setHighlightedIndex: se,
    setInputValue: pe,
    selectItem: ve,
    reset: m,
    // state.
    highlightedIndex: R,
    isOpen: O,
    selectedItem: K,
    inputValue: C
  };
}
function Un(e) {
  var t = e.removedSelectedItem, r = e.itemToString;
  return r(t) + " has been removed.";
}
I({}, Et, {
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
  Kn as a,
  _n as b,
  qn as c,
  jn as u
};
