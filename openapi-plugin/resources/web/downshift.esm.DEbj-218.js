import { _ as I } from "./index.esm.sdnuanpO.js";
import { o as Zt, e as c, R as De } from "./TriangleExclamation.uZuTZ4qX.js";
function oe(e, t) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (t.indexOf(i) >= 0) continue;
    r[i] = e[i];
  }
  return r;
}
var vt = { exports: {} }, en = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", tn = en, nn = tn;
function pt() {
}
function mt() {
}
mt.resetWarningCache = pt;
var rn = function() {
  function e(i, n, u, o, d, h) {
    if (h !== nn) {
      var v = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw v.name = "Invariant Violation", v;
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
    checkPropTypes: mt,
    resetWarningCache: pt
  };
  return r.PropTypes = r, r;
};
vt.exports = rn();
var on = vt.exports;
const g = /* @__PURE__ */ Zt(on), ct = (e) => typeof e == "object" && e != null && e.nodeType === 1, ft = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Be = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const r = getComputedStyle(e, null);
    return ft(r.overflowY, t) || ft(r.overflowX, t) || ((i) => {
      const n = ((u) => {
        if (!u.ownerDocument || !u.ownerDocument.defaultView) return null;
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
  if (typeof document > "u") return [];
  const { scrollMode: o, block: d, inline: h, boundary: v, skipOverflowHiddenElements: a } = t, E = typeof v == "function" ? v : (J) => J !== v;
  if (!ct(e)) throw new TypeError("Invalid target");
  const H = document.scrollingElement || document.documentElement, k = [];
  let x = e;
  for (; ct(x) && E(x); ) {
    if (x = un(x), x === H) {
      k.push(x);
      break;
    }
    x != null && x === document.body && Be(x) && !Be(document.documentElement) || x != null && Be(x, a) && k.push(x);
  }
  const B = (i = (r = window.visualViewport) == null ? void 0 : r.width) != null ? i : innerWidth, A = (u = (n = window.visualViewport) == null ? void 0 : n.height) != null ? u : innerHeight, { scrollX: K, scrollY: q } = window, { height: M, width: b, top: ee, right: y, bottom: ge, left: te } = e.getBoundingClientRect(), { top: z, right: ue, bottom: ne, left: ye } = ((J) => {
    const w = window.getComputedStyle(J);
    return { top: parseFloat(w.scrollMarginTop) || 0, right: parseFloat(w.scrollMarginRight) || 0, bottom: parseFloat(w.scrollMarginBottom) || 0, left: parseFloat(w.scrollMarginLeft) || 0 };
  })(e);
  let F = d === "start" || d === "nearest" ? ee - z : d === "end" ? ge + ne : ee + M / 2 - z + ne, $ = h === "center" ? te + b / 2 - ye + ue : h === "end" ? y + ue : te - ye;
  const he = [];
  for (let J = 0; J < k.length; J++) {
    const w = k[J], { height: ae, width: le, top: se, right: ve, bottom: pe, left: p } = w.getBoundingClientRect();
    if (o === "if-needed" && ee >= 0 && te >= 0 && ge <= A && y <= B && ee >= se && ge <= pe && te >= p && y <= ve) return he;
    const s = getComputedStyle(w), l = parseInt(s.borderLeftWidth, 10), f = parseInt(s.borderTopWidth, 10), m = parseInt(s.borderRightWidth, 10), R = parseInt(s.borderBottomWidth, 10);
    let C = 0, O = 0;
    const D = "offsetWidth" in w ? w.offsetWidth - w.clientWidth - l - m : 0, S = "offsetHeight" in w ? w.offsetHeight - w.clientHeight - f - R : 0, T = "offsetWidth" in w ? w.offsetWidth === 0 ? 0 : le / w.offsetWidth : 0, P = "offsetHeight" in w ? w.offsetHeight === 0 ? 0 : ae / w.offsetHeight : 0;
    if (H === w) C = d === "start" ? F : d === "end" ? F - A : d === "nearest" ? Oe(q, q + A, A, f, R, q + F, q + F + M, M) : F - A / 2, O = h === "start" ? $ : h === "center" ? $ - B / 2 : h === "end" ? $ - B : Oe(K, K + B, B, l, m, K + $, K + $ + b, b), C = Math.max(0, C + q), O = Math.max(0, O + K);
    else {
      C = d === "start" ? F - se - f : d === "end" ? F - pe + R + S : d === "nearest" ? Oe(se, pe, ae, f, R + S, F, F + M, M) : F - (se + ae / 2) + S / 2, O = h === "start" ? $ - p - l : h === "center" ? $ - (p + le / 2) + D / 2 : h === "end" ? $ - ve + m + D : Oe(p, ve, le, l, m + D, $, $ + b, b);
      const { scrollLeft: N, scrollTop: L } = w;
      C = P === 0 ? 0 : Math.max(0, Math.min(L + C / P, w.scrollHeight - ae / P + S)), O = T === 0 ? 0 : Math.max(0, Math.min(N + O / T, w.scrollWidth - le / T + D)), F += L - C, $ += N - O;
    }
    he.push({ el: w, top: C, left: O });
  }
  return he;
};
var we = function() {
  return we = Object.assign || function(t) {
    for (var r, i = 1, n = arguments.length; i < n; i++) {
      r = arguments[i];
      for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && (t[u] = r[u]);
    }
    return t;
  }, we.apply(this, arguments);
};
function _n(e, t) {
  var r = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)
      t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
  return r;
}
function qn(e, t, r) {
  if (r || arguments.length === 2) for (var i = 0, n = t.length, u; i < n; i++)
    (u || !(i in t)) && (u || (u = Array.prototype.slice.call(t, 0, i)), u[i] = t[i]);
  return e.concat(u || Array.prototype.slice.call(t));
}
var ln = 0;
function Ae() {
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
function gt(e, t, r) {
  var i = e === t || t instanceof r.Node && e.contains && e.contains(t);
  return i;
}
function Fe(e, t) {
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
function Re(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(r, i) {
    return r[i] = It(t, i) ? t[i] : e[i], r;
  }, {});
}
function It(e, t) {
  return e[t] !== void 0;
}
function yt(e) {
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
  var h = Ce(d, t < 0, r, i, n);
  return h === -1 ? e >= u ? -1 : e : h;
}
function Ce(e, t, r, i, n) {
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
  return n ? Ce(t ? u - 1 : 0, t, r, i) : -1;
}
function ht(e, t, r, i) {
  return i === void 0 && (i = !0), r && t.some(function(n) {
    return n && (gt(n, e, r) || i && gt(n, r.document.activeElement, r));
  });
}
var fn = Fe(function(e) {
  bt(e).textContent = "";
}, 500);
function bt(e) {
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
    var r = bt(t);
    r.textContent = e, fn(t);
  }
}
var hn = ["highlightedIndex", "items", "environment"], xt = {
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
  var n = t.props, u = t.type, o = "on" + $e(e) + "Change";
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
var yn = Fe(function(e, t) {
  gn(e(), t);
}, 200), bn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? c.useLayoutEffect : c.useEffect, wt = "useId" in De ? function(t) {
  var r = t.id, i = t.labelId, n = t.menuId, u = t.getItemId, o = t.toggleButtonId, d = t.inputId, h = "downshift-" + De.useId();
  r || (r = h);
  var v = c.useRef({
    labelId: i || r + "-label",
    menuId: n || r + "-menu",
    getItemId: u || function(a) {
      return r + "-item-" + a;
    },
    toggleButtonId: o || r + "-toggle-button",
    inputId: d || r + "-input"
  });
  return v.current;
} : function(t) {
  var r = t.id, i = r === void 0 ? "downshift-" + dn() : r, n = t.labelId, u = t.menuId, o = t.getItemId, d = t.toggleButtonId, h = t.inputId, v = c.useRef({
    labelId: n || i + "-label",
    menuId: u || i + "-menu",
    getItemId: o || function(a) {
      return i + "-item-" + a;
    },
    toggleButtonId: d || i + "-toggle-button",
    inputId: h || i + "-input"
  });
  return v.current;
};
function Ct(e, t, r, i) {
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
  return /^\S{1}$/.test(e);
}
function $e(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function Le(e) {
  var t = c.useRef(e);
  return t.current = e, t;
}
function Mt(e, t, r, i) {
  var n = c.useRef(), u = c.useRef(), o = c.useCallback(function(k, x) {
    u.current = x, k = Re(k, x.props);
    var B = e(k, x), A = x.props.stateReducer(k, I({}, x, {
      changes: B
    }));
    return A;
  }, [e]), d = c.useReducer(o, t, r), h = d[0], v = d[1], a = Le(t), E = c.useCallback(function(k) {
    return v(I({
      props: a.current
    }, k));
  }, [a]), H = u.current;
  return c.useEffect(function() {
    var k = Re(n.current, H == null ? void 0 : H.props), x = H && n.current && !i(k, h);
    x && vn(H, k, h), n.current = h;
  }, [h, H, i]), [h, E];
}
function wn(e, t, r, i) {
  var n = Mt(e, t, r, i), u = n[0], o = n[1];
  return [Re(u, t), o];
}
var be = {
  itemToString: function(t) {
    return t ? String(t) : "";
  },
  itemToKey: function(t) {
    return t;
  },
  stateReducer: mn,
  getA11ySelectionMessage: In,
  scrollIntoView: sn,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function Y(e, t, r) {
  r === void 0 && (r = xt);
  var i = e["default" + $e(t)];
  return i !== void 0 ? i : r[t];
}
function xe(e, t, r) {
  r === void 0 && (r = xt);
  var i = e[t];
  if (i !== void 0)
    return i;
  var n = e["initial" + $e(t)];
  return n !== void 0 ? n : Y(e, t, r);
}
function Ot(e) {
  var t = xe(e, "selectedItem"), r = xe(e, "isOpen"), i = xe(e, "highlightedIndex"), n = xe(e, "inputValue");
  return {
    highlightedIndex: i < 0 && t && r ? e.items.findIndex(function(u) {
      return e.itemToKey(u) === e.itemToKey(t);
    }) : i,
    isOpen: r,
    selectedItem: t,
    inputValue: n
  };
}
function Ie(e, t, r) {
  var i = e.items, n = e.initialHighlightedIndex, u = e.defaultHighlightedIndex, o = e.itemToKey, d = t.selectedItem, h = t.highlightedIndex;
  return i.length === 0 ? -1 : n !== void 0 && h === n ? n : u !== void 0 ? u : d ? i.findIndex(function(v) {
    return o(d) === o(v);
  }) : r === 0 ? -1 : r < 0 ? i.length - 1 : 0;
}
function kt(e, t, r) {
  var i = c.useRef({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return c.useEffect(function() {
    if (!e)
      return Ae;
    var n = t.map(function(a) {
      return a.current;
    });
    function u() {
      i.current.isTouchEnd = !1, i.current.isMouseDown = !0;
    }
    function o(a) {
      i.current.isMouseDown = !1, ht(a.target, n, e) || r();
    }
    function d() {
      i.current.isTouchEnd = !1, i.current.isTouchMove = !1;
    }
    function h() {
      i.current.isTouchMove = !0;
    }
    function v(a) {
      i.current.isTouchEnd = !0, !i.current.isTouchMove && !ht(a.target, n, e, !1) && r();
    }
    return e.addEventListener("mousedown", u), e.addEventListener("mouseup", o), e.addEventListener("touchstart", d), e.addEventListener("touchmove", h), e.addEventListener("touchend", v), function() {
      e.removeEventListener("mousedown", u), e.removeEventListener("mouseup", o), e.removeEventListener("touchstart", d), e.removeEventListener("touchmove", h), e.removeEventListener("touchend", v);
    };
  }, [e, r]), i.current;
}
var Dt = function() {
  return Ae;
};
function Te(e, t, r) {
  var i = r.highlightedIndex, n = r.items, u = r.environment, o = oe(r, hn), d = He();
  c.useEffect(function() {
    d || !(u != null && u.document) || yn(function() {
      return e(I({
        highlightedIndex: i,
        highlightedItem: n[i],
        resultCount: n.length
      }, o));
    }, u.document);
  }, t);
}
function Rt(e) {
  var t = e.highlightedIndex, r = e.isOpen, i = e.itemRefs, n = e.getItemNodeFromIndex, u = e.menuElement, o = e.scrollIntoView, d = c.useRef(!0);
  return bn(function() {
    t < 0 || !r || !Object.keys(i.current).length || (d.current === !1 ? d.current = !0 : o(n(t), u));
  }, [t]), d;
}
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
function Tt(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
function He() {
  var e = De.useRef(!0);
  return De.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
var St = {
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
  itemToKey: g.func,
  stateReducer: g.func
}, Et = I({}, St, {
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
function Cn(e) {
  for (var t = e.keysSoFar, r = e.highlightedIndex, i = e.items, n = e.itemToString, u = e.isItemDisabled, o = t.toLowerCase(), d = 0; d < i.length; d++) {
    var h = (d + r + (t.length < 2 ? 1 : 0)) % i.length, v = i[h];
    if (v !== void 0 && n(v).toLowerCase().startsWith(o) && !u(v, h))
      return h;
  }
  return r;
}
we(we({}, Et), { items: g.array.isRequired, isItemDisabled: g.func, getA11ySelectionMessage: g.func });
function Mn(e) {
  var t = e.isOpen, r = e.resultCount, i = e.previousResultCount;
  return t ? r ? r !== i ? "".concat(r, " result").concat(r === 1 ? " is" : "s are", " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.") : "" : "No results are available." : "";
}
var On = we(we({}, be), { getA11yStatusMessage: Mn, isItemDisabled: function() {
  return !1;
} }), kn = Ae, ke = 0, We = 1, je = 2, Ee = 3, Ue = 4, Ne = 5, _e = 6, qe = 7, ze = 8, Ge = 9, Xe = 10, Ke = 11, Pt = 12, Ht = 13, Ye = 14, Bt = 15, Vt = 16, At = 17, Ft = 18, Je = 19, Ve = 20, $t = 21, Lt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: ke,
  ToggleButtonKeyDownArrowDown: We,
  ToggleButtonKeyDownArrowUp: je,
  ToggleButtonKeyDownCharacter: Ee,
  ToggleButtonKeyDownEscape: Ue,
  ToggleButtonKeyDownHome: Ne,
  ToggleButtonKeyDownEnd: _e,
  ToggleButtonKeyDownEnter: qe,
  ToggleButtonKeyDownSpaceButton: ze,
  ToggleButtonKeyDownPageUp: Ge,
  ToggleButtonKeyDownPageDown: Xe,
  ToggleButtonBlur: Ke,
  MenuMouseLeave: Pt,
  ItemMouseMove: Ht,
  ItemClick: Ye,
  FunctionToggleMenu: Bt,
  FunctionOpenMenu: Vt,
  FunctionCloseMenu: At,
  FunctionSetHighlightedIndex: Ft,
  FunctionSelectItem: Je,
  FunctionSetInputValue: Ve,
  FunctionReset: $t
});
function Dn(e, t) {
  var r, i = t.type, n = t.props, u = t.altKey, o;
  switch (i) {
    case Ye:
      o = {
        isOpen: Y(n, "isOpen"),
        highlightedIndex: Y(n, "highlightedIndex"),
        selectedItem: n.items[t.index]
      };
      break;
    case Ee:
      {
        var d = t.key, h = "" + e.inputValue + d, v = !e.isOpen && e.selectedItem ? n.items.findIndex(function(k) {
          return n.itemToKey(k) === n.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, a = Cn({
          keysSoFar: h,
          highlightedIndex: v,
          items: n.items,
          itemToString: n.itemToString,
          isItemDisabled: n.isItemDisabled
        });
        o = {
          inputValue: h,
          highlightedIndex: a,
          isOpen: !0
        };
      }
      break;
    case We:
      {
        var E = e.isOpen ? fe(e.highlightedIndex, 1, n.items, n.isItemDisabled) : u && e.selectedItem == null ? -1 : Ie(n, e, 1);
        o = {
          highlightedIndex: E,
          isOpen: !0
        };
      }
      break;
    case je:
      if (e.isOpen && u)
        o = Se(n, e.highlightedIndex, !1);
      else {
        var H = e.isOpen ? fe(e.highlightedIndex, -1, n.items, n.isItemDisabled) : Ie(n, e, -1);
        o = {
          highlightedIndex: H,
          isOpen: !0
        };
      }
      break;
    case qe:
    case ze:
      o = Se(n, e.highlightedIndex, !1);
      break;
    case Ne:
      o = {
        highlightedIndex: Ce(0, !1, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case _e:
      o = {
        highlightedIndex: Ce(n.items.length - 1, !0, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case Ge:
      o = {
        highlightedIndex: fe(e.highlightedIndex, -10, n.items, n.isItemDisabled)
      };
      break;
    case Xe:
      o = {
        highlightedIndex: fe(e.highlightedIndex, 10, n.items, n.isItemDisabled)
      };
      break;
    case Ue:
      o = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case Ke:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((r = n.items) == null ? void 0 : r.length) && {
        selectedItem: n.items[e.highlightedIndex]
      });
      break;
    case Je:
      o = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return Kt(e, t, Lt);
  }
  return I({}, e, o);
}
var Rn = ["onClick"], Tn = ["onMouseLeave", "refKey", "ref"], Sn = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], En = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
Kn.stateChangeTypes = Lt;
function Kn(e) {
  e === void 0 && (e = {}), kn();
  var t = I({}, On, e), r = t.items, i = t.scrollIntoView, n = t.environment, u = t.itemToString, o = t.getA11ySelectionMessage, d = t.getA11yStatusMessage, h = wn(Dn, t, Ot, Tt), v = h[0], a = h[1], E = v.isOpen, H = v.highlightedIndex, k = v.selectedItem, x = v.inputValue, B = c.useRef(null), A = c.useRef(null), K = c.useRef({}), q = c.useRef(null), M = wt(t), b = c.useRef(), ee = He(), y = Le({
    state: v,
    props: t
  }), ge = c.useCallback(function(p) {
    return K.current[M.getItemId(p)];
  }, [M]);
  Te(d, [E, H, x, r], I({
    previousResultCount: b.current,
    items: r,
    environment: n,
    itemToString: u
  }, v)), Te(o, [k], I({
    previousResultCount: b.current,
    items: r,
    environment: n,
    itemToString: u
  }, v));
  var te = Rt({
    menuElement: A.current,
    highlightedIndex: H,
    isOpen: E,
    itemRefs: K,
    scrollIntoView: i,
    getItemNodeFromIndex: ge
  });
  c.useEffect(function() {
    return q.current = Fe(function(p) {
      p({
        type: Ve,
        inputValue: ""
      });
    }, 500), function() {
      q.current.cancel();
    };
  }, []), c.useEffect(function() {
    x && q.current(a);
  }, [a, x]), c.useEffect(function() {
    ee || (b.current = r.length);
  }), c.useEffect(function() {
    var p = xe(t, "isOpen");
    p && B.current && B.current.focus();
  }, []);
  var z = kt(n, [B, A], c.useCallback(function() {
    y.current.state.isOpen && a({
      type: Ke
    });
  }, [a, y])), ue = Dt();
  c.useEffect(function() {
    E || (K.current = {});
  }, [E]);
  var ne = c.useMemo(function() {
    return {
      ArrowDown: function(s) {
        s.preventDefault(), a({
          type: We,
          altKey: s.altKey
        });
      },
      ArrowUp: function(s) {
        s.preventDefault(), a({
          type: je,
          altKey: s.altKey
        });
      },
      Home: function(s) {
        s.preventDefault(), a({
          type: Ne
        });
      },
      End: function(s) {
        s.preventDefault(), a({
          type: _e
        });
      },
      Escape: function() {
        y.current.state.isOpen && a({
          type: Ue
        });
      },
      Enter: function(s) {
        s.preventDefault(), a({
          type: y.current.state.isOpen ? qe : ke
        });
      },
      PageUp: function(s) {
        y.current.state.isOpen && (s.preventDefault(), a({
          type: Ge
        }));
      },
      PageDown: function(s) {
        y.current.state.isOpen && (s.preventDefault(), a({
          type: Xe
        }));
      },
      " ": function(s) {
        s.preventDefault();
        var l = y.current.state;
        if (!l.isOpen) {
          a({
            type: ke
          });
          return;
        }
        l.inputValue ? a({
          type: Ee,
          key: " "
        }) : a({
          type: ze
        });
      }
    };
  }, [a, y]), ye = c.useCallback(function() {
    a({
      type: Bt
    });
  }, [a]), F = c.useCallback(function() {
    a({
      type: At
    });
  }, [a]), $ = c.useCallback(function() {
    a({
      type: Vt
    });
  }, [a]), he = c.useCallback(function(p) {
    a({
      type: Ft,
      highlightedIndex: p
    });
  }, [a]), J = c.useCallback(function(p) {
    a({
      type: Je,
      selectedItem: p
    });
  }, [a]), w = c.useCallback(function() {
    a({
      type: $t
    });
  }, [a]), ae = c.useCallback(function(p) {
    a({
      type: Ve,
      inputValue: p
    });
  }, [a]), le = c.useCallback(function(p) {
    var s = p === void 0 ? {} : p, l = s.onClick, f = oe(s, Rn), m = function() {
      var C;
      (C = B.current) == null || C.focus();
    };
    return I({
      id: M.labelId,
      htmlFor: M.toggleButtonId,
      onClick: V(l, m)
    }, f);
  }, [M]), se = c.useCallback(function(p, s) {
    var l, f = p === void 0 ? {} : p, m = f.onMouseLeave, R = f.refKey, C = R === void 0 ? "ref" : R, O = f.ref, D = oe(f, Tn), S = s === void 0 ? {} : s;
    S.suppressRefError;
    var T = function() {
      a({
        type: Pt
      });
    };
    return I((l = {}, l[C] = me(O, function(P) {
      A.current = P;
    }), l.id = M.menuId, l.role = "listbox", l["aria-labelledby"] = D && D["aria-label"] ? void 0 : "" + M.labelId, l.onMouseLeave = V(m, T), l), D);
  }, [a, ue, M]), ve = c.useCallback(function(p, s) {
    var l, f = p === void 0 ? {} : p, m = f.onBlur, R = f.onClick;
    f.onPress;
    var C = f.onKeyDown, O = f.refKey, D = O === void 0 ? "ref" : O, S = f.ref, T = oe(f, Sn), P = s === void 0 ? {} : s;
    P.suppressRefError;
    var N = y.current.state, L = function() {
      a({
        type: ke
      });
    }, de = function() {
      N.isOpen && !z.isMouseDown && a({
        type: Ke
      });
    }, W = function(j) {
      var _ = yt(j);
      _ && ne[_] ? ne[_](j) : xn(_) && a({
        type: Ee,
        key: _
      });
    }, Q = I((l = {}, l[D] = me(S, function(G) {
      B.current = G;
    }), l["aria-activedescendant"] = N.isOpen && N.highlightedIndex > -1 ? M.getItemId(N.highlightedIndex) : "", l["aria-controls"] = M.menuId, l["aria-expanded"] = y.current.state.isOpen, l["aria-haspopup"] = "listbox", l["aria-labelledby"] = T && T["aria-label"] ? void 0 : "" + M.labelId, l.id = M.toggleButtonId, l.role = "combobox", l.tabIndex = 0, l.onBlur = V(m, de), l), T);
    return T.disabled || (Q.onClick = V(R, L), Q.onKeyDown = V(C, W)), Q;
  }, [a, M, y, z, ue, ne]), pe = c.useCallback(function(p) {
    var s, l = p === void 0 ? {} : p, f = l.item, m = l.index, R = l.onMouseMove, C = l.onClick, O = l.onMouseDown;
    l.onPress;
    var D = l.refKey, S = D === void 0 ? "ref" : D, T = l.disabled, P = l.ref, N = oe(l, En);
    T !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var L = y.current, de = L.state, W = L.props, Q = Ct(f, m, W.items, "Pass either item or index to getItemProps!"), G = Q[0], j = Q[1], _ = W.isItemDisabled(G, j), Z = function() {
      z.isTouchEnd || j === de.highlightedIndex || (te.current = !1, a({
        type: Ht,
        index: j,
        disabled: _
      }));
    }, ce = function() {
      a({
        type: Ye,
        index: j
      });
    }, re = function(ie) {
      return ie.preventDefault();
    }, X = I((s = {}, s[S] = me(P, function(U) {
      U && (K.current[M.getItemId(j)] = U);
    }), s["aria-disabled"] = _, s["aria-selected"] = "" + (G === de.selectedItem), s.id = M.getItemId(j), s.role = "option", s), N);
    return _ || (X.onClick = V(C, ce)), X.onMouseMove = V(R, Z), X.onMouseDown = V(O, re), X;
  }, [y, M, z, te, a]);
  return {
    // prop getters.
    getToggleButtonProps: ve,
    getLabelProps: le,
    getMenuProps: se,
    getItemProps: pe,
    // actions.
    toggleMenu: ye,
    openMenu: $,
    closeMenu: F,
    setHighlightedIndex: he,
    selectItem: J,
    reset: w,
    setInputValue: ae,
    // state.
    highlightedIndex: H,
    isOpen: E,
    selectedItem: k,
    inputValue: x
  };
}
var Qe = 0, Ze = 1, et = 2, tt = 3, nt = 4, rt = 5, it = 6, ot = 7, ut = 8, Pe = 9, at = 10, Wt = 11, jt = 12, lt = 13, Ut = 14, Nt = 15, _t = 16, qt = 17, zt = 18, st = 19, Gt = 20, Xt = 21, dt = 22, Yt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: Qe,
  InputKeyDownArrowUp: Ze,
  InputKeyDownEscape: et,
  InputKeyDownHome: tt,
  InputKeyDownEnd: nt,
  InputKeyDownPageUp: rt,
  InputKeyDownPageDown: it,
  InputKeyDownEnter: ot,
  InputChange: ut,
  InputBlur: Pe,
  InputClick: at,
  MenuMouseLeave: Wt,
  ItemMouseMove: jt,
  ItemClick: lt,
  ToggleButtonClick: Ut,
  FunctionToggleMenu: Nt,
  FunctionOpenMenu: _t,
  FunctionCloseMenu: qt,
  FunctionSetHighlightedIndex: zt,
  FunctionSelectItem: st,
  FunctionSetInputValue: Gt,
  FunctionReset: Xt,
  ControlledPropUpdatedSelectedItem: dt
});
function Pn(e) {
  var t = Ot(e), r = t.selectedItem, i = t.inputValue;
  return i === "" && r && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (i = e.itemToString(r)), I({}, t, {
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
function Hn(e, t, r, i) {
  var n = c.useRef(), u = Mt(e, t, r, i), o = u[0], d = u[1], h = He();
  return c.useEffect(function() {
    if (It(t, "selectedItem")) {
      if (!h) {
        var v;
        t.selectedItemChanged === void 0 ? v = t.itemToKey(t.selectedItem) !== t.itemToKey(n.current) : (console.warn('The "selectedItemChanged" is deprecated. Please use "itemToKey instead". https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#selecteditemchanged'), v = t.selectedItemChanged(n.current, t.selectedItem)), v && d({
          type: dt,
          inputValue: t.itemToString(t.selectedItem)
        });
      }
      n.current = o.selectedItem === n.current ? t.selectedItem : o.selectedItem;
    }
  }, [o.selectedItem, t.selectedItem]), [Re(o, t), d];
}
var Bn = I({}, be, {
  getA11yStatusMessage: cn,
  isItemDisabled: function() {
    return !1;
  }
});
function Vn(e, t) {
  var r, i = t.type, n = t.props, u = t.altKey, o;
  switch (i) {
    case lt:
      o = {
        isOpen: Y(n, "isOpen"),
        highlightedIndex: Y(n, "highlightedIndex"),
        selectedItem: n.items[t.index],
        inputValue: n.itemToString(n.items[t.index])
      };
      break;
    case Qe:
      e.isOpen ? o = {
        highlightedIndex: fe(e.highlightedIndex, 1, n.items, n.isItemDisabled, !0)
      } : o = {
        highlightedIndex: u && e.selectedItem == null ? -1 : Ie(n, e, 1),
        isOpen: n.items.length >= 0
      };
      break;
    case Ze:
      e.isOpen ? u ? o = Se(n, e.highlightedIndex) : o = {
        highlightedIndex: fe(e.highlightedIndex, -1, n.items, n.isItemDisabled, !0)
      } : o = {
        highlightedIndex: Ie(n, e, -1),
        isOpen: n.items.length >= 0
      };
      break;
    case ot:
      o = Se(n, e.highlightedIndex);
      break;
    case et:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case rt:
      o = {
        highlightedIndex: fe(e.highlightedIndex, -10, n.items, n.isItemDisabled, !0)
      };
      break;
    case it:
      o = {
        highlightedIndex: fe(e.highlightedIndex, 10, n.items, n.isItemDisabled, !0)
      };
      break;
    case tt:
      o = {
        highlightedIndex: Ce(0, !1, n.items, n.isItemDisabled)
      };
      break;
    case nt:
      o = {
        highlightedIndex: Ce(n.items.length - 1, !0, n.items, n.isItemDisabled)
      };
      break;
    case Pe:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((r = n.items) == null ? void 0 : r.length) && t.selectItem && {
        selectedItem: n.items[e.highlightedIndex],
        inputValue: n.itemToString(n.items[e.highlightedIndex])
      });
      break;
    case ut:
      o = {
        isOpen: !0,
        highlightedIndex: Y(n, "highlightedIndex"),
        inputValue: t.inputValue
      };
      break;
    case at:
      o = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Ie(n, e, 0)
      };
      break;
    case st:
      o = {
        selectedItem: t.selectedItem,
        inputValue: n.itemToString(t.selectedItem)
      };
      break;
    case dt:
      o = {
        inputValue: t.inputValue
      };
      break;
    default:
      return Kt(e, t, Yt);
  }
  return I({}, e, o);
}
var An = ["onMouseLeave", "refKey", "ref"], Fn = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "disabled"], $n = ["onClick", "onPress", "refKey", "ref"], Ln = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKey", "ref"];
Wn.stateChangeTypes = Yt;
function Wn(e) {
  e === void 0 && (e = {});
  var t = I({}, Bn, e), r = t.items, i = t.scrollIntoView, n = t.environment, u = t.getA11yStatusMessage, o = t.getA11ySelectionMessage, d = t.itemToString, h = Hn(Vn, t, Pn, Tt), v = h[0], a = h[1], E = v.isOpen, H = v.highlightedIndex, k = v.selectedItem, x = v.inputValue, B = c.useRef(null), A = c.useRef({}), K = c.useRef(null), q = c.useRef(null), M = He(), b = wt(t), ee = c.useRef(), y = Le({
    state: v,
    props: t
  }), ge = c.useCallback(function(s) {
    return A.current[b.getItemId(s)];
  }, [b]);
  Te(u, [E, H, x, r], I({
    previousResultCount: ee.current,
    items: r,
    environment: n,
    itemToString: d
  }, v)), Te(o, [k], I({
    previousResultCount: ee.current,
    items: r,
    environment: n,
    itemToString: d
  }, v));
  var te = Rt({
    menuElement: B.current,
    highlightedIndex: H,
    isOpen: E,
    itemRefs: A,
    scrollIntoView: i,
    getItemNodeFromIndex: ge
  });
  c.useEffect(function() {
    var s = xe(t, "isOpen");
    s && K.current && K.current.focus();
  }, []), c.useEffect(function() {
    M || (ee.current = r.length);
  });
  var z = kt(n, [q, B, K], c.useCallback(function() {
    y.current.state.isOpen && a({
      type: Pe,
      selectItem: !1
    });
  }, [a, y])), ue = Dt();
  c.useEffect(function() {
    E || (A.current = {});
  }, [E]), c.useEffect(function() {
    var s;
    !E || !(n != null && n.document) || !(K != null && (s = K.current) != null && s.focus) || n.document.activeElement !== K.current && K.current.focus();
  }, [E, n]);
  var ne = c.useMemo(function() {
    return {
      ArrowDown: function(l) {
        l.preventDefault(), a({
          type: Qe,
          altKey: l.altKey
        });
      },
      ArrowUp: function(l) {
        l.preventDefault(), a({
          type: Ze,
          altKey: l.altKey
        });
      },
      Home: function(l) {
        y.current.state.isOpen && (l.preventDefault(), a({
          type: tt
        }));
      },
      End: function(l) {
        y.current.state.isOpen && (l.preventDefault(), a({
          type: nt
        }));
      },
      Escape: function(l) {
        var f = y.current.state;
        (f.isOpen || f.inputValue || f.selectedItem || f.highlightedIndex > -1) && (l.preventDefault(), a({
          type: et
        }));
      },
      Enter: function(l) {
        var f = y.current.state;
        !f.isOpen || l.which === 229 || (l.preventDefault(), a({
          type: ot
        }));
      },
      PageUp: function(l) {
        y.current.state.isOpen && (l.preventDefault(), a({
          type: rt
        }));
      },
      PageDown: function(l) {
        y.current.state.isOpen && (l.preventDefault(), a({
          type: it
        }));
      }
    };
  }, [a, y]), ye = c.useCallback(function(s) {
    return I({
      id: b.labelId,
      htmlFor: b.inputId
    }, s);
  }, [b]), F = c.useCallback(function(s, l) {
    var f, m = s === void 0 ? {} : s, R = m.onMouseLeave, C = m.refKey, O = C === void 0 ? "ref" : C, D = m.ref, S = oe(m, An), T = l === void 0 ? {} : l;
    return T.suppressRefError, I((f = {}, f[O] = me(D, function(P) {
      B.current = P;
    }), f.id = b.menuId, f.role = "listbox", f["aria-labelledby"] = S && S["aria-label"] ? void 0 : "" + b.labelId, f.onMouseLeave = V(R, function() {
      a({
        type: Wt
      });
    }), f), S);
  }, [a, ue, b]), $ = c.useCallback(function(s) {
    var l, f, m = s === void 0 ? {} : s, R = m.item, C = m.index, O = m.refKey, D = O === void 0 ? "ref" : O, S = m.ref, T = m.onMouseMove, P = m.onMouseDown, N = m.onClick;
    m.onPress;
    var L = m.disabled, de = oe(m, Fn);
    L !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');
    var W = y.current, Q = W.props, G = W.state, j = Ct(R, C, Q.items, "Pass either item or index to getItemProps!"), _ = j[0], Z = j[1], ce = Q.isItemDisabled(_, Z), re = "onClick", X = N, U = function() {
      z.isTouchEnd || Z === G.highlightedIndex || (te.current = !1, a({
        type: jt,
        index: Z,
        disabled: ce
      }));
    }, ie = function() {
      a({
        type: lt,
        index: Z
      });
    }, Jt = function(Qt) {
      return Qt.preventDefault();
    };
    return I((l = {}, l[D] = me(S, function(Me) {
      Me && (A.current[b.getItemId(Z)] = Me);
    }), l["aria-disabled"] = ce, l["aria-selected"] = "" + (Z === G.highlightedIndex), l.id = b.getItemId(Z), l.role = "option", l), !ce && (f = {}, f[re] = V(X, ie), f), {
      onMouseMove: V(T, U),
      onMouseDown: V(P, Jt)
    }, de);
  }, [a, b, y, z, te]), he = c.useCallback(function(s) {
    var l, f = s === void 0 ? {} : s, m = f.onClick;
    f.onPress;
    var R = f.refKey, C = R === void 0 ? "ref" : R, O = f.ref, D = oe(f, $n), S = y.current.state, T = function() {
      a({
        type: Ut
      });
    };
    return I((l = {}, l[C] = me(O, function(P) {
      q.current = P;
    }), l["aria-controls"] = b.menuId, l["aria-expanded"] = S.isOpen, l.id = b.toggleButtonId, l.tabIndex = -1, l), !D.disabled && I({}, {
      onClick: V(m, T)
    }), D);
  }, [a, y, b]), J = c.useCallback(function(s, l) {
    var f, m = s === void 0 ? {} : s, R = m.onKeyDown, C = m.onChange, O = m.onInput, D = m.onBlur;
    m.onChangeText;
    var S = m.onClick, T = m.refKey, P = T === void 0 ? "ref" : T, N = m.ref, L = oe(m, Ln), de = l === void 0 ? {} : l;
    de.suppressRefError;
    var W = y.current.state, Q = function(U) {
      var ie = yt(U);
      ie && ne[ie] && ne[ie](U);
    }, G = function(U) {
      a({
        type: ut,
        inputValue: U.target.value
      });
    }, j = function(U) {
      if (n != null && n.document && W.isOpen && !z.isMouseDown) {
        var ie = U.relatedTarget === null && n.document.activeElement !== n.document.body;
        a({
          type: Pe,
          selectItem: !ie
        });
      }
    }, _ = function() {
      a({
        type: at
      });
    }, Z = "onChange", ce = {};
    if (!L.disabled) {
      var re;
      ce = (re = {}, re[Z] = V(C, O, G), re.onKeyDown = V(R, Q), re.onBlur = V(D, j), re.onClick = V(S, _), re);
    }
    return I((f = {}, f[P] = me(N, function(X) {
      K.current = X;
    }), f["aria-activedescendant"] = W.isOpen && W.highlightedIndex > -1 ? b.getItemId(W.highlightedIndex) : "", f["aria-autocomplete"] = "list", f["aria-controls"] = b.menuId, f["aria-expanded"] = W.isOpen, f["aria-labelledby"] = L && L["aria-label"] ? void 0 : b.labelId, f.autoComplete = "off", f.id = b.inputId, f.role = "combobox", f.value = W.inputValue, f), ce, L);
  }, [a, b, n, ne, y, z, ue]), w = c.useCallback(function() {
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
      type: st,
      selectedItem: s
    });
  }, [a]), pe = c.useCallback(function(s) {
    a({
      type: Gt,
      inputValue: s
    });
  }, [a]), p = c.useCallback(function() {
    a({
      type: Xt
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
    toggleMenu: w,
    openMenu: le,
    closeMenu: ae,
    setHighlightedIndex: se,
    setInputValue: pe,
    selectItem: ve,
    reset: p,
    // state.
    highlightedIndex: H,
    isOpen: E,
    selectedItem: k,
    inputValue: x
  };
}
function jn(e) {
  var t = e.removedSelectedItem, r = e.itemToString;
  return r(t) + " has been removed.";
}
I({}, St, {
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
be.itemToString, be.itemToKey, be.stateReducer, be.environment;
export {
  we as _,
  Kn as a,
  _n as b,
  qn as c,
  Wn as u
};
