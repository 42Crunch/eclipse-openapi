import { o as Zt, _ as I, e as c, R as ke } from "./TriangleExclamation.C66B3qS3.js";
function oe(e, t) {
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
  function e(i, n, u, o, d, h) {
    if (h !== nn) {
      var m = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw m.name = "Invariant Violation", m;
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
const g = /* @__PURE__ */ Zt(on), dt = (e) => typeof e == "object" && e != null && e.nodeType === 1, ct = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Be = (e, t) => {
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
  const { scrollMode: o, block: d, inline: h, boundary: m, skipOverflowHiddenElements: a } = t, M = typeof m == "function" ? m : (J) => J !== m;
  if (!dt(e))
    throw new TypeError("Invalid target");
  const k = document.scrollingElement || document.documentElement, T = [];
  let x = e;
  for (; dt(x) && M(x); ) {
    if (x = un(x), x === k) {
      T.push(x);
      break;
    }
    x != null && x === document.body && Be(x) && !Be(document.documentElement) || x != null && Be(x, a) && T.push(x);
  }
  const B = (i = (r = window.visualViewport) == null ? void 0 : r.width) != null ? i : innerWidth, A = (u = (n = window.visualViewport) == null ? void 0 : n.height) != null ? u : innerHeight, { scrollX: P, scrollY: q } = window, { height: O, width: y, top: ee, right: b, bottom: ge, left: te } = e.getBoundingClientRect(), { top: z, right: ue, bottom: ne, left: ye } = ((J) => {
    const w = window.getComputedStyle(J);
    return { top: parseFloat(w.scrollMarginTop) || 0, right: parseFloat(w.scrollMarginRight) || 0, bottom: parseFloat(w.scrollMarginBottom) || 0, left: parseFloat(w.scrollMarginLeft) || 0 };
  })(e);
  let F = d === "start" || d === "nearest" ? ee - z : d === "end" ? ge + ne : ee + O / 2 - z + ne, $ = h === "center" ? te + y / 2 - ye + ue : h === "end" ? b + ue : te - ye;
  const he = [];
  for (let J = 0; J < T.length; J++) {
    const w = T[J], { height: ae, width: le, top: se, right: ve, bottom: pe, left: p } = w.getBoundingClientRect();
    if (o === "if-needed" && ee >= 0 && te >= 0 && ge <= A && b <= B && ee >= se && ge <= pe && te >= p && b <= ve)
      return he;
    const s = getComputedStyle(w), l = parseInt(s.borderLeftWidth, 10), f = parseInt(s.borderTopWidth, 10), v = parseInt(s.borderRightWidth, 10), S = parseInt(s.borderBottomWidth, 10);
    let C = 0, D = 0;
    const R = "offsetWidth" in w ? w.offsetWidth - w.clientWidth - l - v : 0, K = "offsetHeight" in w ? w.offsetHeight - w.clientHeight - f - S : 0, E = "offsetWidth" in w ? w.offsetWidth === 0 ? 0 : le / w.offsetWidth : 0, H = "offsetHeight" in w ? w.offsetHeight === 0 ? 0 : ae / w.offsetHeight : 0;
    if (k === w)
      C = d === "start" ? F : d === "end" ? F - A : d === "nearest" ? Oe(q, q + A, A, f, S, q + F, q + F + O, O) : F - A / 2, D = h === "start" ? $ : h === "center" ? $ - B / 2 : h === "end" ? $ - B : Oe(P, P + B, B, l, v, P + $, P + $ + y, y), C = Math.max(0, C + q), D = Math.max(0, D + P);
    else {
      C = d === "start" ? F - se - f : d === "end" ? F - pe + S + K : d === "nearest" ? Oe(se, pe, ae, f, S + K, F, F + O, O) : F - (se + ae / 2) + K / 2, D = h === "start" ? $ - p - l : h === "center" ? $ - (p + le / 2) + R / 2 : h === "end" ? $ - ve + v + R : Oe(p, ve, le, l, v + R, $, $ + y, y);
      const { scrollLeft: N, scrollTop: L } = w;
      C = H === 0 ? 0 : Math.max(0, Math.min(L + C / H, w.scrollHeight - ae / H + K)), D = E === 0 ? 0 : Math.max(0, Math.min(N + D / E, w.scrollWidth - le / E + R)), F += L - C, $ += N - D;
    }
    he.push({ el: w, top: C, left: D });
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
function mt() {
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
function Ae(e, t) {
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
  var h = we(d, t < 0, r, i, n);
  return h === -1 ? e >= u ? -1 : e : h;
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
var fn = Ae(function(e) {
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
  var n = t.props, u = t.type, o = "on" + Fe(e) + "Change";
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
var yn = Ae(function(e, t) {
  gn(e(), t);
}, 200), bn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? c.useLayoutEffect : c.useEffect, wt = "useId" in ke ? function(t) {
  var r = t.id, i = t.labelId, n = t.menuId, u = t.getItemId, o = t.toggleButtonId, d = t.inputId, h = "downshift-" + ke.useId();
  r || (r = h);
  var m = c.useRef({
    labelId: i || r + "-label",
    menuId: n || r + "-menu",
    getItemId: u || function(a) {
      return r + "-item-" + a;
    },
    toggleButtonId: o || r + "-toggle-button",
    inputId: d || r + "-input"
  });
  return m.current;
} : function(t) {
  var r = t.id, i = r === void 0 ? "downshift-" + dn() : r, n = t.labelId, u = t.menuId, o = t.getItemId, d = t.toggleButtonId, h = t.inputId, m = c.useRef({
    labelId: n || i + "-label",
    menuId: u || i + "-menu",
    getItemId: o || function(a) {
      return i + "-item-" + a;
    },
    toggleButtonId: d || i + "-toggle-button",
    inputId: h || i + "-input"
  });
  return m.current;
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
  return e ? String(e) : "";
}
function wn(e) {
  return /^\S{1}$/.test(e);
}
function Fe(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function $e(e) {
  var t = c.useRef(e);
  return t.current = e, t;
}
function Mt(e, t, r, i) {
  var n = c.useRef(), u = c.useRef(), o = c.useCallback(function(T, x) {
    u.current = x, T = Re(T, x.props);
    var B = e(T, x), A = x.props.stateReducer(T, I({}, x, {
      changes: B
    }));
    return A;
  }, [e]), d = c.useReducer(o, t, r), h = d[0], m = d[1], a = $e(t), M = c.useCallback(function(T) {
    return m(I({
      props: a.current
    }, T));
  }, [a]), k = u.current;
  return c.useEffect(function() {
    var T = Re(n.current, k == null ? void 0 : k.props), x = k && n.current && !i(T, h);
    x && vn(k, T, h), n.current = h;
  }, [h, k, i]), [h, M];
}
function Cn(e, t, r, i) {
  var n = Mt(e, t, r, i), u = n[0], o = n[1];
  return [Re(u, t), o];
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
  r === void 0 && (r = xt);
  var i = e["default" + Fe(t)];
  return i !== void 0 ? i : r[t];
}
function be(e, t, r) {
  r === void 0 && (r = xt);
  var i = e[t];
  if (i !== void 0)
    return i;
  var n = e["initial" + Fe(t)];
  return n !== void 0 ? n : Y(e, t, r);
}
function Ot(e) {
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
function Dt(e, t, r, i) {
  var n = c.useRef({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return c.useEffect(function() {
    if (r) {
      var u = function() {
        n.current.isTouchEnd = !1, n.current.isMouseDown = !0;
      }, o = function(M) {
        n.current.isMouseDown = !1, e && !gt(M.target, t.map(function(k) {
          return k.current;
        }), r) && i();
      }, d = function() {
        n.current.isTouchEnd = !1, n.current.isTouchMove = !1;
      }, h = function() {
        n.current.isTouchMove = !0;
      }, m = function(M) {
        n.current.isTouchEnd = !0, e && !n.current.isTouchMove && !gt(M.target, t.map(function(k) {
          return k.current;
        }), r, !1) && i();
      };
      return r.addEventListener("mousedown", u), r.addEventListener("mouseup", o), r.addEventListener("touchstart", d), r.addEventListener("touchmove", h), r.addEventListener("touchend", m), function() {
        r.removeEventListener("mousedown", u), r.removeEventListener("mouseup", o), r.removeEventListener("touchstart", d), r.removeEventListener("touchmove", h), r.removeEventListener("touchend", m);
      };
    }
  }, [e, r]), n;
}
var kt = function() {
  return mt;
};
function Se(e, t, r) {
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
function Ee(e, t, r) {
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
function He() {
  var e = ke.useRef(!0);
  return ke.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
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
    var h = (d + r + (t.length < 2 ? 1 : 0)) % i.length, m = i[h];
    if (m !== void 0 && n(m).toLowerCase().startsWith(o) && !u(m, h))
      return h;
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
} }), kn = mt, De = 0, Le = 1, We = 2, Te = 3, je = 4, Ue = 5, Ne = 6, _e = 7, qe = 8, ze = 9, Ge = 10, Ke = 11, Pt = 12, Ht = 13, Xe = 14, Bt = 15, Vt = 16, At = 17, Ft = 18, Ye = 19, Ve = 20, $t = 21, Lt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: De,
  ToggleButtonKeyDownArrowDown: Le,
  ToggleButtonKeyDownArrowUp: We,
  ToggleButtonKeyDownCharacter: Te,
  ToggleButtonKeyDownEscape: je,
  ToggleButtonKeyDownHome: Ue,
  ToggleButtonKeyDownEnd: Ne,
  ToggleButtonKeyDownEnter: _e,
  ToggleButtonKeyDownSpaceButton: qe,
  ToggleButtonKeyDownPageUp: ze,
  ToggleButtonKeyDownPageDown: Ge,
  ToggleButtonBlur: Ke,
  MenuMouseLeave: Pt,
  ItemMouseMove: Ht,
  ItemClick: Xe,
  FunctionToggleMenu: Bt,
  FunctionOpenMenu: Vt,
  FunctionCloseMenu: At,
  FunctionSetHighlightedIndex: Ft,
  FunctionSelectItem: Ye,
  FunctionSetInputValue: Ve,
  FunctionReset: $t
});
function Rn(e, t) {
  var r, i = t.type, n = t.props, u = t.altKey, o;
  switch (i) {
    case Xe:
      o = {
        isOpen: Y(n, "isOpen"),
        highlightedIndex: Y(n, "highlightedIndex"),
        selectedItem: n.items[t.index]
      };
      break;
    case Te:
      {
        var d = t.key, h = "" + e.inputValue + d, m = !e.isOpen && e.selectedItem ? n.items.indexOf(e.selectedItem) : e.highlightedIndex, a = Mn({
          keysSoFar: h,
          highlightedIndex: m,
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
    case Le:
      {
        var M = e.isOpen ? fe(e.highlightedIndex, 1, n.items, n.isItemDisabled) : u && e.selectedItem == null ? -1 : Ie(n, e, 1);
        o = {
          highlightedIndex: M,
          isOpen: !0
        };
      }
      break;
    case We:
      if (e.isOpen && u)
        o = Ee(n, e.highlightedIndex, !1);
      else {
        var k = e.isOpen ? fe(e.highlightedIndex, -1, n.items, n.isItemDisabled) : Ie(n, e, -1);
        o = {
          highlightedIndex: k,
          isOpen: !0
        };
      }
      break;
    case _e:
    case qe:
      o = Ee(n, e.highlightedIndex, !1);
      break;
    case Ue:
      o = {
        highlightedIndex: we(0, !1, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case Ne:
      o = {
        highlightedIndex: we(n.items.length - 1, !0, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case ze:
      o = {
        highlightedIndex: fe(e.highlightedIndex, -10, n.items, n.isItemDisabled)
      };
      break;
    case Ge:
      o = {
        highlightedIndex: fe(e.highlightedIndex, 10, n.items, n.isItemDisabled)
      };
      break;
    case je:
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
    case Ye:
      o = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return Kt(e, t, Lt);
  }
  return I({}, e, o);
}
var Sn = ["onClick"], En = ["onMouseLeave", "refKey", "ref"], Tn = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], Kn = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
Pn.stateChangeTypes = Lt;
function Pn(e) {
  e === void 0 && (e = {}), kn();
  var t = I({}, Dn, e), r = t.items, i = t.scrollIntoView, n = t.environment, u = t.itemToString, o = t.getA11ySelectionMessage, d = t.getA11yStatusMessage, h = Cn(Rn, t, Ot, St), m = h[0], a = h[1], M = m.isOpen, k = m.highlightedIndex, T = m.selectedItem, x = m.inputValue, B = c.useRef(null), A = c.useRef(null), P = c.useRef({}), q = c.useRef(null), O = wt(t), y = c.useRef(), ee = He(), b = $e({
    state: m,
    props: t
  }), ge = c.useCallback(function(p) {
    return P.current[O.getItemId(p)];
  }, [O]);
  Se(d, [M, k, x, r], I({
    previousResultCount: y.current,
    items: r,
    environment: n,
    itemToString: u
  }, m)), Se(o, [T], I({
    previousResultCount: y.current,
    items: r,
    environment: n,
    itemToString: u
  }, m));
  var te = Rt({
    menuElement: A.current,
    highlightedIndex: k,
    isOpen: M,
    itemRefs: P,
    scrollIntoView: i,
    getItemNodeFromIndex: ge
  });
  c.useEffect(function() {
    return q.current = Ae(function(p) {
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
    ee || (y.current = r.length);
  }), c.useEffect(function() {
    var p = be(t, "isOpen");
    p && B.current && B.current.focus();
  }, []);
  var z = Dt(M, [A, B], n, function() {
    a({
      type: Ke
    });
  }), ue = kt();
  c.useEffect(function() {
    M || (P.current = {});
  }, [M]);
  var ne = c.useMemo(function() {
    return {
      ArrowDown: function(s) {
        s.preventDefault(), a({
          type: Le,
          altKey: s.altKey
        });
      },
      ArrowUp: function(s) {
        s.preventDefault(), a({
          type: We,
          altKey: s.altKey
        });
      },
      Home: function(s) {
        s.preventDefault(), a({
          type: Ue
        });
      },
      End: function(s) {
        s.preventDefault(), a({
          type: Ne
        });
      },
      Escape: function() {
        b.current.state.isOpen && a({
          type: je
        });
      },
      Enter: function(s) {
        s.preventDefault(), a({
          type: b.current.state.isOpen ? _e : De
        });
      },
      PageUp: function(s) {
        b.current.state.isOpen && (s.preventDefault(), a({
          type: ze
        }));
      },
      PageDown: function(s) {
        b.current.state.isOpen && (s.preventDefault(), a({
          type: Ge
        }));
      },
      " ": function(s) {
        s.preventDefault();
        var l = b.current.state;
        if (!l.isOpen) {
          a({
            type: De
          });
          return;
        }
        l.inputValue ? a({
          type: Te,
          key: " "
        }) : a({
          type: qe
        });
      }
    };
  }, [a, b]), ye = c.useCallback(function() {
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
      type: Ye,
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
    var s = p === void 0 ? {} : p, l = s.onClick, f = oe(s, Sn), v = function() {
      var C;
      (C = B.current) == null || C.focus();
    };
    return I({
      id: O.labelId,
      htmlFor: O.toggleButtonId,
      onClick: V(l, v)
    }, f);
  }, [O]), se = c.useCallback(function(p, s) {
    var l, f = p === void 0 ? {} : p, v = f.onMouseLeave, S = f.refKey, C = S === void 0 ? "ref" : S, D = f.ref, R = oe(f, En), K = s === void 0 ? {} : s;
    K.suppressRefError;
    var E = function() {
      a({
        type: Pt
      });
    };
    return I((l = {}, l[C] = me(D, function(H) {
      A.current = H;
    }), l.id = O.menuId, l.role = "listbox", l["aria-labelledby"] = R && R["aria-label"] ? void 0 : "" + O.labelId, l.onMouseLeave = V(v, E), l), R);
  }, [a, ue, O]), ve = c.useCallback(function(p, s) {
    var l, f = p === void 0 ? {} : p, v = f.onBlur, S = f.onClick;
    f.onPress;
    var C = f.onKeyDown, D = f.refKey, R = D === void 0 ? "ref" : D, K = f.ref, E = oe(f, Tn), H = s === void 0 ? {} : s;
    H.suppressRefError;
    var N = b.current.state, L = function() {
      a({
        type: De
      });
    }, de = function() {
      N.isOpen && !z.current.isMouseDown && a({
        type: Ke
      });
    }, W = function(j) {
      var _ = yt(j);
      _ && ne[_] ? ne[_](j) : wn(_) && a({
        type: Te,
        key: _
      });
    }, Q = I((l = {}, l[R] = me(K, function(G) {
      B.current = G;
    }), l["aria-activedescendant"] = N.isOpen && N.highlightedIndex > -1 ? O.getItemId(N.highlightedIndex) : "", l["aria-controls"] = O.menuId, l["aria-expanded"] = b.current.state.isOpen, l["aria-haspopup"] = "listbox", l["aria-labelledby"] = E && E["aria-label"] ? void 0 : "" + O.labelId, l.id = O.toggleButtonId, l.role = "combobox", l.tabIndex = 0, l.onBlur = V(v, de), l), E);
    return E.disabled || (Q.onClick = V(S, L), Q.onKeyDown = V(C, W)), Q;
  }, [b, O, ue, a, z, ne]), pe = c.useCallback(function(p) {
    var s, l = p === void 0 ? {} : p, f = l.item, v = l.index, S = l.onMouseMove, C = l.onClick, D = l.onMouseDown;
    l.onPress;
    var R = l.refKey, K = R === void 0 ? "ref" : R, E = l.disabled, H = l.ref, N = oe(l, Kn);
    E !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var L = b.current, de = L.state, W = L.props, Q = Ct(f, v, W.items, "Pass either item or index to getItemProps!"), G = Q[0], j = Q[1], _ = W.isItemDisabled(G, j), Z = function() {
      z.current.isTouchEnd || j === de.highlightedIndex || (te.current = !1, a({
        type: Ht,
        index: j,
        disabled: _
      }));
    }, ce = function() {
      a({
        type: Xe,
        index: j
      });
    }, re = function(ie) {
      return ie.preventDefault();
    }, X = I((s = {}, s[K] = me(H, function(U) {
      U && (P.current[O.getItemId(j)] = U);
    }), s["aria-disabled"] = _, s["aria-selected"] = "" + (G === de.selectedItem), s.id = O.getItemId(j), s.role = "option", s), N);
    return _ || (X.onClick = V(C, ce)), X.onMouseMove = V(S, Z), X.onMouseDown = V(D, re), X;
  }, [b, O, z, te, a]);
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
    highlightedIndex: k,
    isOpen: M,
    selectedItem: T,
    inputValue: x
  };
}
var Je = 0, Qe = 1, Ze = 2, et = 3, tt = 4, nt = 5, rt = 6, it = 7, ot = 8, Pe = 9, ut = 10, Wt = 11, jt = 12, at = 13, Ut = 14, Nt = 15, _t = 16, qt = 17, zt = 18, lt = 19, Gt = 20, Xt = 21, st = 22, Yt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: Je,
  InputKeyDownArrowUp: Qe,
  InputKeyDownEscape: Ze,
  InputKeyDownHome: et,
  InputKeyDownEnd: tt,
  InputKeyDownPageUp: nt,
  InputKeyDownPageDown: rt,
  InputKeyDownEnter: it,
  InputChange: ot,
  InputBlur: Pe,
  InputClick: ut,
  MenuMouseLeave: Wt,
  ItemMouseMove: jt,
  ItemClick: at,
  ToggleButtonClick: Ut,
  FunctionToggleMenu: Nt,
  FunctionOpenMenu: _t,
  FunctionCloseMenu: qt,
  FunctionSetHighlightedIndex: zt,
  FunctionSelectItem: lt,
  FunctionSetInputValue: Gt,
  FunctionReset: Xt,
  ControlledPropUpdatedSelectedItem: st
});
function Hn(e) {
  var t = Ot(e), r = t.selectedItem, i = t.inputValue;
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
function Bn(e, t, r, i) {
  var n = c.useRef(), u = Mt(e, t, r, i), o = u[0], d = u[1], h = He();
  return c.useEffect(function() {
    It(t, "selectedItem") && (!h && // on first mount we already have the proper inputValue for a initial selected item.
    t.selectedItemChanged(n.current, t.selectedItem) && d({
      type: st,
      inputValue: t.itemToString(t.selectedItem)
    }), n.current = o.selectedItem === n.current ? t.selectedItem : o.selectedItem);
  }, [o.selectedItem, t.selectedItem]), [Re(o, t), d];
}
var Vn = I({}, Me, {
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
    case at:
      o = {
        isOpen: Y(n, "isOpen"),
        highlightedIndex: Y(n, "highlightedIndex"),
        selectedItem: n.items[t.index],
        inputValue: n.itemToString(n.items[t.index])
      };
      break;
    case Je:
      e.isOpen ? o = {
        highlightedIndex: fe(e.highlightedIndex, 1, n.items, n.isItemDisabled, !0)
      } : o = {
        highlightedIndex: u && e.selectedItem == null ? -1 : Ie(n, e, 1),
        isOpen: n.items.length >= 0
      };
      break;
    case Qe:
      e.isOpen ? u ? o = Ee(n, e.highlightedIndex) : o = {
        highlightedIndex: fe(e.highlightedIndex, -1, n.items, n.isItemDisabled, !0)
      } : o = {
        highlightedIndex: Ie(n, e, -1),
        isOpen: n.items.length >= 0
      };
      break;
    case it:
      o = Ee(n, e.highlightedIndex);
      break;
    case Ze:
      o = I({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case nt:
      o = {
        highlightedIndex: fe(e.highlightedIndex, -10, n.items, n.isItemDisabled, !0)
      };
      break;
    case rt:
      o = {
        highlightedIndex: fe(e.highlightedIndex, 10, n.items, n.isItemDisabled, !0)
      };
      break;
    case et:
      o = {
        highlightedIndex: we(0, !1, n.items, n.isItemDisabled)
      };
      break;
    case tt:
      o = {
        highlightedIndex: we(n.items.length - 1, !0, n.items, n.isItemDisabled)
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
    case ot:
      o = {
        isOpen: !0,
        highlightedIndex: Y(n, "highlightedIndex"),
        inputValue: t.inputValue
      };
      break;
    case ut:
      o = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Ie(n, e, 0)
      };
      break;
    case lt:
      o = {
        selectedItem: t.selectedItem,
        inputValue: n.itemToString(t.selectedItem)
      };
      break;
    case st:
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
  e === void 0 && (e = {});
  var t = I({}, Vn, e), r = t.items, i = t.scrollIntoView, n = t.environment, u = t.getA11yStatusMessage, o = t.getA11ySelectionMessage, d = t.itemToString, h = Bn(An, t, Hn, St), m = h[0], a = h[1], M = m.isOpen, k = m.highlightedIndex, T = m.selectedItem, x = m.inputValue, B = c.useRef(null), A = c.useRef({}), P = c.useRef(null), q = c.useRef(null), O = He(), y = wt(t), ee = c.useRef(), b = $e({
    state: m,
    props: t
  }), ge = c.useCallback(function(s) {
    return A.current[y.getItemId(s)];
  }, [y]);
  Se(u, [M, k, x, r], I({
    previousResultCount: ee.current,
    items: r,
    environment: n,
    itemToString: d
  }, m)), Se(o, [T], I({
    previousResultCount: ee.current,
    items: r,
    environment: n,
    itemToString: d
  }, m));
  var te = Rt({
    menuElement: B.current,
    highlightedIndex: k,
    isOpen: M,
    itemRefs: A,
    scrollIntoView: i,
    getItemNodeFromIndex: ge
  });
  c.useEffect(function() {
    var s = be(t, "isOpen");
    s && P.current && P.current.focus();
  }, []), c.useEffect(function() {
    O || (ee.current = r.length);
  });
  var z = Dt(M, [P, B, q], n, function() {
    a({
      type: Pe,
      selectItem: !1
    });
  }), ue = kt();
  c.useEffect(function() {
    M || (A.current = {});
  }, [M]), c.useEffect(function() {
    var s;
    !M || !(n != null && n.document) || !(P != null && (s = P.current) != null && s.focus) || n.document.activeElement !== P.current && P.current.focus();
  }, [M, n]);
  var ne = c.useMemo(function() {
    return {
      ArrowDown: function(l) {
        l.preventDefault(), a({
          type: Je,
          altKey: l.altKey
        });
      },
      ArrowUp: function(l) {
        l.preventDefault(), a({
          type: Qe,
          altKey: l.altKey
        });
      },
      Home: function(l) {
        b.current.state.isOpen && (l.preventDefault(), a({
          type: et
        }));
      },
      End: function(l) {
        b.current.state.isOpen && (l.preventDefault(), a({
          type: tt
        }));
      },
      Escape: function(l) {
        var f = b.current.state;
        (f.isOpen || f.inputValue || f.selectedItem || f.highlightedIndex > -1) && (l.preventDefault(), a({
          type: Ze
        }));
      },
      Enter: function(l) {
        var f = b.current.state;
        !f.isOpen || l.which === 229 || (l.preventDefault(), a({
          type: it
        }));
      },
      PageUp: function(l) {
        b.current.state.isOpen && (l.preventDefault(), a({
          type: nt
        }));
      },
      PageDown: function(l) {
        b.current.state.isOpen && (l.preventDefault(), a({
          type: rt
        }));
      }
    };
  }, [a, b]), ye = c.useCallback(function(s) {
    return I({
      id: y.labelId,
      htmlFor: y.inputId
    }, s);
  }, [y]), F = c.useCallback(function(s, l) {
    var f, v = s === void 0 ? {} : s, S = v.onMouseLeave, C = v.refKey, D = C === void 0 ? "ref" : C, R = v.ref, K = oe(v, Fn), E = l === void 0 ? {} : l;
    return E.suppressRefError, I((f = {}, f[D] = me(R, function(H) {
      B.current = H;
    }), f.id = y.menuId, f.role = "listbox", f["aria-labelledby"] = K && K["aria-label"] ? void 0 : "" + y.labelId, f.onMouseLeave = V(S, function() {
      a({
        type: Wt
      });
    }), f), K);
  }, [a, ue, y]), $ = c.useCallback(function(s) {
    var l, f, v = s === void 0 ? {} : s, S = v.item, C = v.index, D = v.refKey, R = D === void 0 ? "ref" : D, K = v.ref, E = v.onMouseMove, H = v.onMouseDown, N = v.onClick;
    v.onPress;
    var L = v.disabled, de = oe(v, $n);
    L !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');
    var W = b.current, Q = W.props, G = W.state, j = Ct(S, C, Q.items, "Pass either item or index to getItemProps!"), _ = j[0], Z = j[1], ce = Q.isItemDisabled(_, Z), re = "onClick", X = N, U = function() {
      z.current.isTouchEnd || Z === G.highlightedIndex || (te.current = !1, a({
        type: jt,
        index: Z,
        disabled: ce
      }));
    }, ie = function() {
      a({
        type: at,
        index: Z
      });
    }, Jt = function(Qt) {
      return Qt.preventDefault();
    };
    return I((l = {}, l[R] = me(K, function(Ce) {
      Ce && (A.current[y.getItemId(Z)] = Ce);
    }), l["aria-disabled"] = ce, l["aria-selected"] = "" + (Z === G.highlightedIndex), l.id = y.getItemId(Z), l.role = "option", l), !ce && (f = {}, f[re] = V(X, ie), f), {
      onMouseMove: V(E, U),
      onMouseDown: V(H, Jt)
    }, de);
  }, [a, y, b, z, te]), he = c.useCallback(function(s) {
    var l, f = s === void 0 ? {} : s, v = f.onClick;
    f.onPress;
    var S = f.refKey, C = S === void 0 ? "ref" : S, D = f.ref, R = oe(f, Ln), K = b.current.state, E = function() {
      a({
        type: Ut
      });
    };
    return I((l = {}, l[C] = me(D, function(H) {
      q.current = H;
    }), l["aria-controls"] = y.menuId, l["aria-expanded"] = K.isOpen, l.id = y.toggleButtonId, l.tabIndex = -1, l), !R.disabled && I({}, {
      onClick: V(v, E)
    }), R);
  }, [a, b, y]), J = c.useCallback(function(s, l) {
    var f, v = s === void 0 ? {} : s, S = v.onKeyDown, C = v.onChange, D = v.onInput, R = v.onBlur;
    v.onChangeText;
    var K = v.onClick, E = v.refKey, H = E === void 0 ? "ref" : E, N = v.ref, L = oe(v, Wn), de = l === void 0 ? {} : l;
    de.suppressRefError;
    var W = b.current.state, Q = function(U) {
      var ie = yt(U);
      ie && ne[ie] && ne[ie](U);
    }, G = function(U) {
      a({
        type: ot,
        inputValue: U.target.value
      });
    }, j = function(U) {
      if (n != null && n.document && W.isOpen && !z.current.isMouseDown) {
        var ie = U.relatedTarget === null && n.document.activeElement !== n.document.body;
        a({
          type: Pe,
          selectItem: !ie
        });
      }
    }, _ = function() {
      a({
        type: ut
      });
    }, Z = "onChange", ce = {};
    if (!L.disabled) {
      var re;
      ce = (re = {}, re[Z] = V(C, D, G), re.onKeyDown = V(S, Q), re.onBlur = V(R, j), re.onClick = V(K, _), re);
    }
    return I((f = {}, f[H] = me(N, function(X) {
      P.current = X;
    }), f["aria-activedescendant"] = W.isOpen && W.highlightedIndex > -1 ? y.getItemId(W.highlightedIndex) : "", f["aria-autocomplete"] = "list", f["aria-controls"] = y.menuId, f["aria-expanded"] = W.isOpen, f["aria-labelledby"] = L && L["aria-label"] ? void 0 : y.labelId, f.autoComplete = "off", f.id = y.inputId, f.role = "combobox", f.value = W.inputValue, f), ce, L);
  }, [ue, b, y, ne, a, z, n]), w = c.useCallback(function() {
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
      type: lt,
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
    highlightedIndex: k,
    isOpen: M,
    selectedItem: T,
    inputValue: x
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
  Pn as a,
  _n as b,
  qn as c,
  jn as u
};
