import { v as Dn, aw as Ke, f as c, R as Se } from "./TriangleExclamation.D0e1MsJn.js";
function ue(e, t) {
  if (e == null) return {};
  var i = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    i[r] = e[r];
  }
  return i;
}
function D() {
  return D = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var r in i) ({}).hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }
    return e;
  }, D.apply(null, arguments);
}
var Fe = { exports: {} }, Ae, Tt;
function Mn() {
  if (Tt) return Ae;
  Tt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ae = e, Ae;
}
var Le, Et;
function Kn() {
  if (Et) return Le;
  Et = 1;
  var e = /* @__PURE__ */ Mn();
  function t() {
  }
  function i() {
  }
  return i.resetWarningCache = t, Le = function() {
    function r(o, u, a, h, x, S) {
      if (S !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    r.isRequired = r;
    function n() {
      return r;
    }
    var l = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: n,
      element: r,
      elementType: r,
      instanceOf: n,
      node: r,
      objectOf: n,
      oneOf: n,
      oneOfType: n,
      shape: n,
      exact: n,
      checkPropTypes: i,
      resetWarningCache: t
    };
    return l.PropTypes = l, l;
  }, Le;
}
var Pt;
function Sn() {
  return Pt || (Pt = 1, Fe.exports = /* @__PURE__ */ Kn()()), Fe.exports;
}
var Rn = /* @__PURE__ */ Sn();
const v = /* @__PURE__ */ Dn(Rn);
var _e = { exports: {} }, R = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function On() {
  if (Ht) return R;
  Ht = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.server_context"), a = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), O;
  O = Symbol.for("react.module.reference");
  function C(s) {
    if (typeof s == "object" && s !== null) {
      var P = s.$$typeof;
      switch (P) {
        case e:
          switch (s = s.type, s) {
            case i:
            case n:
            case r:
            case h:
            case x:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case u:
                case o:
                case a:
                case m:
                case S:
                case l:
                  return s;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return R.ContextConsumer = o, R.ContextProvider = l, R.Element = e, R.ForwardRef = a, R.Fragment = i, R.Lazy = m, R.Memo = S, R.Portal = t, R.Profiler = n, R.StrictMode = r, R.Suspense = h, R.SuspenseList = x, R.isAsyncMode = function() {
    return !1;
  }, R.isConcurrentMode = function() {
    return !1;
  }, R.isContextConsumer = function(s) {
    return C(s) === o;
  }, R.isContextProvider = function(s) {
    return C(s) === l;
  }, R.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }, R.isForwardRef = function(s) {
    return C(s) === a;
  }, R.isFragment = function(s) {
    return C(s) === i;
  }, R.isLazy = function(s) {
    return C(s) === m;
  }, R.isMemo = function(s) {
    return C(s) === S;
  }, R.isPortal = function(s) {
    return C(s) === t;
  }, R.isProfiler = function(s) {
    return C(s) === n;
  }, R.isStrictMode = function(s) {
    return C(s) === r;
  }, R.isSuspense = function(s) {
    return C(s) === h;
  }, R.isSuspenseList = function(s) {
    return C(s) === x;
  }, R.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === i || s === n || s === r || s === h || s === x || s === w || typeof s == "object" && s !== null && (s.$$typeof === m || s.$$typeof === S || s.$$typeof === l || s.$$typeof === o || s.$$typeof === a || s.$$typeof === O || s.getModuleId !== void 0);
  }, R.typeOf = C, R;
}
var Bt;
function Tn() {
  return Bt || (Bt = 1, _e.exports = On()), _e.exports;
}
Tn();
const Vt = (e) => typeof e == "object" && e != null && e.nodeType === 1, $t = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Ce = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const i = getComputedStyle(e, null);
    return $t(i.overflowY, t) || $t(i.overflowX, t) || ((r) => {
      const n = ((l) => {
        if (!l.ownerDocument || !l.ownerDocument.defaultView) return null;
        try {
          return l.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(r);
      return !!n && (n.clientHeight < r.scrollHeight || n.clientWidth < r.scrollWidth);
    })(e);
  }
  return !1;
}, ke = (e, t, i, r, n, l, o, u) => l < e && o > t || l > e && o < t ? 0 : l <= e && u <= i || o >= t && u >= i ? l - e - r : o > t && u < i || l < e && u > i ? o - t + n : 0, En = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, Pn = (e, t) => {
  var i, r, n, l;
  if (typeof document > "u") return [];
  const { inline: o, boundary: u, skipOverflowHiddenElements: a } = t, h = typeof u == "function" ? u : (j) => j !== u;
  if (!Vt(e)) throw new TypeError("Invalid target");
  const x = document.scrollingElement || document.documentElement, S = [];
  let m = e;
  for (; Vt(m) && h(m); ) {
    if (m = En(m), m === x) {
      S.push(m);
      break;
    }
    m != null && m === document.body && Ce(m) && !Ce(document.documentElement) || m != null && Ce(m, a) && S.push(m);
  }
  const w = (r = (i = window.visualViewport) == null ? void 0 : i.width) != null ? r : innerWidth, O = (l = (n = window.visualViewport) == null ? void 0 : n.height) != null ? l : innerHeight, { scrollX: C, scrollY: s } = window, { height: P, width: T, top: ne, right: B, bottom: le, left: Y } = e.getBoundingClientRect(), { top: re, right: se, left: M } = ((j) => {
    const K = window.getComputedStyle(j);
    return { top: parseFloat(K.scrollMarginTop) || 0, right: parseFloat(K.scrollMarginRight) || 0, bottom: parseFloat(K.scrollMarginBottom) || 0, left: parseFloat(K.scrollMarginLeft) || 0 };
  })(e);
  let F = ne - re, E = o === "center" ? Y + T / 2 - M + se : o === "end" ? B + se : Y - M;
  const q = [];
  for (let j = 0; j < S.length; j++) {
    const K = S[j], { height: Z, width: J, top: ie, right: I, bottom: y, left: p } = K.getBoundingClientRect();
    if (ne >= 0 && Y >= 0 && le <= O && B <= w && (K === x && !Ce(K) || ne >= ie && le <= y && Y >= p && B <= I)) return q;
    const H = getComputedStyle(K), g = parseInt(H.borderLeftWidth, 10), f = parseInt(H.borderTopWidth, 10), d = parseInt(H.borderRightWidth, 10), b = parseInt(H.borderBottomWidth, 10);
    let k = 0, V = 0;
    const $ = "offsetWidth" in K ? K.offsetWidth - K.clientWidth - g - d : 0, W = "offsetHeight" in K ? K.offsetHeight - K.clientHeight - f - b : 0, L = "offsetWidth" in K ? K.offsetWidth === 0 ? 0 : J / K.offsetWidth : 0, N = "offsetHeight" in K ? K.offsetHeight === 0 ? 0 : Z / K.offsetHeight : 0;
    if (x === K) k = ke(s, s + O, O, f, b, s + F, s + F + P, P), V = o === "start" ? E : o === "center" ? E - w / 2 : o === "end" ? E - w : ke(C, C + w, w, g, d, C + E, C + E + T, T), k = Math.max(0, k + s), V = Math.max(0, V + C);
    else {
      k = ke(ie, y, Z, f, b + W, F, F + P, P), V = o === "start" ? E - p - g : o === "center" ? E - (p + J / 2) + $ / 2 : o === "end" ? E - I + d + $ : ke(p, I, J, g, d + $, E, E + T, T);
      const { scrollLeft: U, scrollTop: ee } = K;
      k = N === 0 ? 0 : Math.max(0, Math.min(ee + k / N, K.scrollHeight - Z / N + W)), V = L === 0 ? 0 : Math.max(0, Math.min(U + V / L, K.scrollWidth - J / L + $)), F += ee - k, E += U - V;
    }
    q.push({ el: K, top: k, left: V });
  }
  return q;
};
var Hn = 0;
function Nt() {
}
function Bn(e, t) {
  if (e) {
    var i = Pn(e, {
      boundary: t
    });
    i.forEach(function(r) {
      var n = r.el, l = r.top, o = r.left;
      n.scrollTop = l, n.scrollLeft = o;
    });
  }
}
function Ft(e, t, i) {
  var r = e === t || t instanceof i.Node && e.contains && e.contains(t);
  return r;
}
function qe(e, t) {
  var i;
  function r() {
    i && clearTimeout(i);
  }
  function n() {
    for (var l = arguments.length, o = new Array(l), u = 0; u < l; u++)
      o[u] = arguments[u];
    r(), i = setTimeout(function() {
      i = null, e.apply(void 0, o);
    }, t);
  }
  return n.cancel = r, n;
}
function A() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  return function(r) {
    for (var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      l[o - 1] = arguments[o];
    return t.some(function(u) {
      return u && u.apply(void 0, [r].concat(l)), r.preventDownshiftDefault || r.hasOwnProperty("nativeEvent") && r.nativeEvent.preventDownshiftDefault;
    });
  };
}
function ce() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  return function(r) {
    t.forEach(function(n) {
      typeof n == "function" ? n(r) : n && (n.current = r);
    });
  };
}
function Vn() {
  return String(Hn++);
}
function Re(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(i, r) {
    return i[r] = jt(t, r) ? t[r] : e[r], i;
  }, {});
}
function jt(e, t) {
  return e[t] !== void 0;
}
function Oe(e) {
  var t = e.key, i = e.keyCode;
  return i >= 37 && i <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
function fe(e, t, i, r, n) {
  n === void 0 && (n = !1);
  var l = i.length;
  if (l === 0)
    return -1;
  var o = l - 1;
  (typeof e != "number" || e < 0 || e > o) && (e = t > 0 ? -1 : o + 1);
  var u = e + t;
  u < 0 ? u = n ? o : 0 : u > o && (u = n ? 0 : o);
  var a = ye(u, t < 0, i, r, n);
  return a === -1 ? e >= l ? -1 : e : a;
}
function ye(e, t, i, r, n) {
  n === void 0 && (n = !1);
  var l = i.length;
  if (t) {
    for (var o = e; o >= 0; o--)
      if (!r(i[o], o))
        return o;
  } else
    for (var u = e; u < l; u++)
      if (!r(i[u], u))
        return u;
  return n ? ye(t ? l - 1 : 0, t, i, r) : -1;
}
function At(e, t, i, r) {
  return r === void 0 && (r = !0), i && t.some(function(n) {
    return n && (Ft(n, e, i) || r && Ft(n, i.document.activeElement, i));
  });
}
var $n = qe(function(e) {
  Ut(e).textContent = "";
}, 500);
function Ut(e) {
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
function Fn(e, t) {
  if (!(!e || !t)) {
    var i = Ut(t);
    i.textContent = e, $n(t);
  }
}
function An(e) {
  var t = e == null ? void 0 : e.getElementById("a11y-status-message");
  t && t.remove();
}
var zt = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function Ln(e, t, i) {
  var r = e.props, n = e.type, l = {};
  Object.keys(t).forEach(function(o) {
    _n(o, e, t, i), i[o] !== t[o] && (l[o] = i[o]);
  }), r.onStateChange && Object.keys(l).length && r.onStateChange(D({
    type: n
  }, l));
}
function _n(e, t, i, r) {
  var n = t.props, l = t.type, o = "on" + je(e) + "Change";
  n[o] && r[e] !== void 0 && r[e] !== i[e] && n[o](D({
    type: l
  }, r));
}
function Wn(e, t) {
  return t.changes;
}
var Lt = qe(function(e, t) {
  Fn(e, t);
}, 200), qn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? c.useLayoutEffect : c.useEffect, Gt = "useId" in Se ? function(t) {
  var i = t.id, r = t.labelId, n = t.menuId, l = t.getItemId, o = t.toggleButtonId, u = t.inputId, a = "downshift-" + Se.useId();
  i || (i = a);
  var h = c.useRef({
    labelId: r || i + "-label",
    menuId: n || i + "-menu",
    getItemId: l || function(x) {
      return i + "-item-" + x;
    },
    toggleButtonId: o || i + "-toggle-button",
    inputId: u || i + "-input"
  });
  return h.current;
} : function(t) {
  var i = t.id, r = i === void 0 ? "downshift-" + Vn() : i, n = t.labelId, l = t.menuId, o = t.getItemId, u = t.toggleButtonId, a = t.inputId, h = c.useRef({
    labelId: n || r + "-label",
    menuId: l || r + "-menu",
    getItemId: o || function(x) {
      return r + "-item-" + x;
    },
    toggleButtonId: u || r + "-toggle-button",
    inputId: a || r + "-input"
  });
  return h.current;
};
function Ne(e, t, i, r) {
  var n, l;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(r);
    n = i[t], l = t;
  } else
    l = t === void 0 ? i.indexOf(e) : t, n = e;
  return [n, l];
}
function Nn(e) {
  return /^\S{1}$/.test(e);
}
function je(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function Ve(e) {
  var t = c.useRef(e);
  return t.current = e, t;
}
function Yt(e, t, i, r) {
  var n = c.useRef(), l = c.useRef(), o = c.useCallback(function(w, O) {
    l.current = O, w = Re(w, O.props);
    var C = e(w, O), s = O.props.stateReducer(w, D({}, O, {
      changes: C
    }));
    return s;
  }, [e]), u = c.useReducer(o, t, i), a = u[0], h = u[1], x = Ve(t), S = c.useCallback(function(w) {
    return h(D({
      props: x.current
    }, w));
  }, [x]), m = l.current;
  return c.useEffect(function() {
    var w = Re(n.current, m == null ? void 0 : m.props), O = m && n.current && !r(w, a);
    O && Ln(m, w, a), n.current = a;
  }, [a, m, r]), [a, S];
}
function Xt(e, t, i, r) {
  var n = Yt(e, t, i, r), l = n[0], o = n[1];
  return [Re(l, t), o];
}
var we = {
  itemToString: function(t) {
    return t ? String(t) : "";
  },
  itemToKey: function(t) {
    return t;
  },
  stateReducer: Wn,
  scrollIntoView: Bn,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function ae(e, t, i) {
  i === void 0 && (i = zt);
  var r = e["default" + je(t)];
  return r !== void 0 ? r : i[t];
}
function he(e, t, i) {
  i === void 0 && (i = zt);
  var r = e[t];
  if (r !== void 0)
    return r;
  var n = e["initial" + je(t)];
  return n !== void 0 ? n : ae(e, t, i);
}
function Jt(e) {
  var t = he(e, "selectedItem"), i = he(e, "isOpen"), r = jn(e), n = he(e, "inputValue");
  return {
    highlightedIndex: r < 0 && t && i ? e.items.findIndex(function(l) {
      return e.itemToKey(l) === e.itemToKey(t);
    }) : r,
    isOpen: i,
    selectedItem: t,
    inputValue: n
  };
}
function pe(e, t, i) {
  var r = e.items, n = e.initialHighlightedIndex, l = e.defaultHighlightedIndex, o = e.isItemDisabled, u = e.itemToKey, a = t.selectedItem, h = t.highlightedIndex;
  return r.length === 0 ? -1 : n !== void 0 && h === n && !o(r[n], n) ? n : l !== void 0 && !o(r[l], l) ? l : a ? r.findIndex(function(x) {
    return u(a) === u(x);
  }) : i < 0 && !o(r[r.length - 1], r.length - 1) ? r.length - 1 : i > 0 && !o(r[0], 0) ? 0 : -1;
}
function Qt(e, t, i) {
  var r = c.useRef({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return c.useEffect(function() {
    if (!e)
      return Nt;
    var n = i.map(function(x) {
      return x.current;
    });
    function l() {
      r.current.isTouchEnd = !1, r.current.isMouseDown = !0;
    }
    function o(x) {
      r.current.isMouseDown = !1, At(x.target, n, e) || t();
    }
    function u() {
      r.current.isTouchEnd = !1, r.current.isTouchMove = !1;
    }
    function a() {
      r.current.isTouchMove = !0;
    }
    function h(x) {
      r.current.isTouchEnd = !0, !r.current.isTouchMove && !At(x.target, n, e, !1) && t();
    }
    return e.addEventListener("mousedown", l), e.addEventListener("mouseup", o), e.addEventListener("touchstart", u), e.addEventListener("touchmove", a), e.addEventListener("touchend", h), function() {
      e.removeEventListener("mousedown", l), e.removeEventListener("mouseup", o), e.removeEventListener("touchstart", u), e.removeEventListener("touchmove", a), e.removeEventListener("touchend", h);
    };
  }, [i, e, t]), r.current;
}
var Ue = function() {
  return Nt;
};
function ze(e, t, i, r) {
  r === void 0 && (r = {});
  var n = r.document, l = $e();
  c.useEffect(function() {
    if (!(!e || l || !n)) {
      var o = e(t);
      Lt(o, n);
    }
  }, i), c.useEffect(function() {
    return function() {
      Lt.cancel(), An(n);
    };
  }, [n]);
}
function Zt(e) {
  var t = e.highlightedIndex, i = e.isOpen, r = e.itemRefs, n = e.getItemNodeFromIndex, l = e.menuElement, o = e.scrollIntoView, u = c.useRef(!0);
  return qn(function() {
    t < 0 || !i || !Object.keys(r.current).length || (u.current === !1 ? u.current = !0 : o(n(t), l));
  }, [t]), u;
}
function Te(e, t, i) {
  var r;
  i === void 0 && (i = !0);
  var n = ((r = e.items) == null ? void 0 : r.length) && t >= 0;
  return D({
    isOpen: !1,
    highlightedIndex: -1
  }, n && D({
    selectedItem: e.items[t],
    isOpen: ae(e, "isOpen"),
    highlightedIndex: ae(e, "highlightedIndex")
  }, i && {
    inputValue: e.itemToString(e.items[t])
  }));
}
function en(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
function $e() {
  var e = Se.useRef(!0);
  return Se.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
function Ee(e) {
  var t = ae(e, "highlightedIndex");
  return t > -1 && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
function jn(e) {
  var t = he(e, "highlightedIndex");
  return t > -1 && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
var De = {
  environment: v.shape({
    addEventListener: v.func.isRequired,
    removeEventListener: v.func.isRequired,
    document: v.shape({
      createElement: v.func.isRequired,
      getElementById: v.func.isRequired,
      activeElement: v.any.isRequired,
      body: v.any.isRequired
    }).isRequired,
    Node: v.func.isRequired
  }),
  itemToString: v.func,
  itemToKey: v.func,
  stateReducer: v.func
}, tn = D({}, De, {
  getA11yStatusMessage: v.func,
  highlightedIndex: v.number,
  defaultHighlightedIndex: v.number,
  initialHighlightedIndex: v.number,
  isOpen: v.bool,
  defaultIsOpen: v.bool,
  initialIsOpen: v.bool,
  selectedItem: v.any,
  initialSelectedItem: v.any,
  defaultSelectedItem: v.any,
  id: v.string,
  labelId: v.string,
  menuId: v.string,
  getItemId: v.func,
  toggleButtonId: v.string,
  onSelectedItemChange: v.func,
  onHighlightedIndexChange: v.func,
  onStateChange: v.func,
  onIsOpenChange: v.func,
  scrollIntoView: v.func
});
function nn(e, t, i) {
  var r = t.type, n = t.props, l;
  switch (r) {
    case i.ItemMouseMove:
      l = {
        highlightedIndex: t.disabled ? -1 : t.index
      };
      break;
    case i.MenuMouseLeave:
      l = {
        highlightedIndex: -1
      };
      break;
    case i.ToggleButtonClick:
    case i.FunctionToggleMenu:
      l = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : pe(n, e, 0)
      };
      break;
    case i.FunctionOpenMenu:
      l = {
        isOpen: !0,
        highlightedIndex: pe(n, e, 0)
      };
      break;
    case i.FunctionCloseMenu:
      l = {
        isOpen: !1
      };
      break;
    case i.FunctionSetHighlightedIndex:
      l = {
        highlightedIndex: n.isItemDisabled(n.items[t.highlightedIndex], t.highlightedIndex) ? -1 : t.highlightedIndex
      };
      break;
    case i.FunctionSetInputValue:
      l = {
        inputValue: t.inputValue
      };
      break;
    case i.FunctionReset:
      l = {
        highlightedIndex: Ee(n),
        isOpen: ae(n, "isOpen"),
        selectedItem: ae(n, "selectedItem"),
        inputValue: ae(n, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return D({}, e, l);
}
function Un(e) {
  for (var t = e.keysSoFar, i = e.highlightedIndex, r = e.items, n = e.itemToString, l = e.isItemDisabled, o = t.toLowerCase(), u = 0; u < r.length; u++) {
    var a = (u + i + (t.length < 2 ? 1 : 0)) % r.length, h = r[a];
    if (h !== void 0 && n(h).toLowerCase().startsWith(o) && !l(h, a))
      return a;
  }
  return i;
}
Ke(Ke({}, tn), { items: v.array.isRequired, isItemDisabled: v.func });
var zn = Ke(Ke({}, we), { isItemDisabled: function() {
  return !1;
} }), Me = 0, Ge = 1, Ye = 2, Pe = 3, Xe = 4, Je = 5, Qe = 6, Ze = 7, et = 8, tt = 9, nt = 10, He = 11, rn = 12, on = 13, rt = 14, un = 15, an = 16, ln = 17, sn = 18, it = 19, We = 20, cn = 21, dn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  FunctionCloseMenu: ln,
  FunctionOpenMenu: an,
  FunctionReset: cn,
  FunctionSelectItem: it,
  FunctionSetHighlightedIndex: sn,
  FunctionSetInputValue: We,
  FunctionToggleMenu: un,
  ItemClick: rt,
  ItemMouseMove: on,
  MenuMouseLeave: rn,
  ToggleButtonBlur: He,
  ToggleButtonClick: Me,
  ToggleButtonKeyDownArrowDown: Ge,
  ToggleButtonKeyDownArrowUp: Ye,
  ToggleButtonKeyDownCharacter: Pe,
  ToggleButtonKeyDownEnd: Qe,
  ToggleButtonKeyDownEnter: Ze,
  ToggleButtonKeyDownEscape: Xe,
  ToggleButtonKeyDownHome: Je,
  ToggleButtonKeyDownPageDown: nt,
  ToggleButtonKeyDownPageUp: tt,
  ToggleButtonKeyDownSpaceButton: et
});
function Gn(e, t) {
  var i, r = t.type, n = t.props, l = t.altKey, o;
  switch (r) {
    case rt:
      o = {
        isOpen: ae(n, "isOpen"),
        highlightedIndex: Ee(n),
        selectedItem: n.items[t.index]
      };
      break;
    case Pe:
      {
        var u = t.key, a = "" + e.inputValue + u, h = !e.isOpen && e.selectedItem ? n.items.findIndex(function(w) {
          return n.itemToKey(w) === n.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, x = Un({
          keysSoFar: a,
          highlightedIndex: h,
          items: n.items,
          itemToString: n.itemToString,
          isItemDisabled: n.isItemDisabled
        });
        o = {
          inputValue: a,
          highlightedIndex: x,
          isOpen: !0
        };
      }
      break;
    case Ge:
      {
        var S = e.isOpen ? fe(e.highlightedIndex, 1, n.items, n.isItemDisabled) : l && e.selectedItem == null ? -1 : pe(n, e, 1);
        o = {
          highlightedIndex: S,
          isOpen: !0
        };
      }
      break;
    case Ye:
      if (e.isOpen && l)
        o = Te(n, e.highlightedIndex, !1);
      else {
        var m = e.isOpen ? fe(e.highlightedIndex, -1, n.items, n.isItemDisabled) : pe(n, e, -1);
        o = {
          highlightedIndex: m,
          isOpen: !0
        };
      }
      break;
    // only triggered when menu is open.
    case Ze:
    case et:
      o = Te(n, e.highlightedIndex, !1);
      break;
    case Je:
      o = {
        highlightedIndex: ye(0, !1, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case Qe:
      o = {
        highlightedIndex: ye(n.items.length - 1, !0, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case tt:
      o = {
        highlightedIndex: fe(e.highlightedIndex, -10, n.items, n.isItemDisabled)
      };
      break;
    case nt:
      o = {
        highlightedIndex: fe(e.highlightedIndex, 10, n.items, n.isItemDisabled)
      };
      break;
    case Xe:
      o = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case He:
      o = D({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((i = n.items) == null ? void 0 : i.length) && {
        selectedItem: n.items[e.highlightedIndex]
      });
      break;
    case it:
      o = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return nn(e, t, dn);
  }
  return D({}, e, o);
}
var Yn = ["onClick"], Xn = ["onMouseLeave", "refKey", "ref"], Jn = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], Qn = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
Zn.stateChangeTypes = dn;
function Zn(e) {
  e === void 0 && (e = {});
  var t = D({}, zn, e), i = t.scrollIntoView, r = t.environment, n = t.getA11yStatusMessage, l = Xt(Gn, t, Jt, en), o = l[0], u = l[1], a = o.isOpen, h = o.highlightedIndex, x = o.selectedItem, S = o.inputValue, m = c.useRef(null), w = c.useRef(null), O = c.useRef({}), C = c.useRef(null), s = Gt(t), P = Ve({
    state: o,
    props: t
  }), T = c.useCallback(function(I) {
    return O.current[s.getItemId(I)];
  }, [s]);
  ze(n, o, [a, h, x, S], r);
  var ne = Zt({
    menuElement: w.current,
    highlightedIndex: h,
    isOpen: a,
    itemRefs: O,
    scrollIntoView: i,
    getItemNodeFromIndex: T
  });
  c.useEffect(function() {
    return C.current = qe(function(I) {
      I({
        type: We,
        inputValue: ""
      });
    }, 500), function() {
      C.current.cancel();
    };
  }, []), c.useEffect(function() {
    S && C.current(u);
  }, [u, S]), c.useEffect(function() {
    var I = he(t, "isOpen");
    I && m.current && m.current.focus();
  }, []);
  var B = Qt(r, c.useCallback(function() {
    P.current.state.isOpen && u({
      type: He
    });
  }, [u, P]), c.useMemo(function() {
    return [w, m];
  }, [w.current, m.current])), le = Ue();
  c.useEffect(function() {
    a || (O.current = {});
  }, [a]);
  var Y = c.useMemo(function() {
    return {
      ArrowDown: function(y) {
        y.preventDefault(), u({
          type: Ge,
          altKey: y.altKey
        });
      },
      ArrowUp: function(y) {
        y.preventDefault(), u({
          type: Ye,
          altKey: y.altKey
        });
      },
      Home: function(y) {
        y.preventDefault(), u({
          type: Je
        });
      },
      End: function(y) {
        y.preventDefault(), u({
          type: Qe
        });
      },
      Escape: function() {
        P.current.state.isOpen && u({
          type: Xe
        });
      },
      Enter: function(y) {
        y.preventDefault(), u({
          type: P.current.state.isOpen ? Ze : Me
        });
      },
      PageUp: function(y) {
        P.current.state.isOpen && (y.preventDefault(), u({
          type: tt
        }));
      },
      PageDown: function(y) {
        P.current.state.isOpen && (y.preventDefault(), u({
          type: nt
        }));
      },
      " ": function(y) {
        y.preventDefault();
        var p = P.current.state;
        if (!p.isOpen) {
          u({
            type: Me
          });
          return;
        }
        p.inputValue ? u({
          type: Pe,
          key: " "
        }) : u({
          type: et
        });
      }
    };
  }, [u, P]), re = c.useCallback(function() {
    u({
      type: un
    });
  }, [u]), se = c.useCallback(function() {
    u({
      type: ln
    });
  }, [u]), M = c.useCallback(function() {
    u({
      type: an
    });
  }, [u]), F = c.useCallback(function(I) {
    u({
      type: sn,
      highlightedIndex: I
    });
  }, [u]), E = c.useCallback(function(I) {
    u({
      type: it,
      selectedItem: I
    });
  }, [u]), q = c.useCallback(function() {
    u({
      type: cn
    });
  }, [u]), j = c.useCallback(function(I) {
    u({
      type: We,
      inputValue: I
    });
  }, [u]), K = c.useCallback(function(I) {
    var y = I === void 0 ? {} : I, p = y.onClick, H = ue(y, Yn), g = function() {
      var d;
      (d = m.current) == null || d.focus();
    };
    return D({
      id: s.labelId,
      htmlFor: s.toggleButtonId,
      onClick: A(p, g)
    }, H);
  }, [s]), Z = c.useCallback(function(I, y) {
    var p, H = I === void 0 ? {} : I, g = H.onMouseLeave, f = H.refKey, d = f === void 0 ? "ref" : f, b = H.ref, k = ue(H, Xn), V = y === void 0 ? {} : y;
    V.suppressRefError;
    var $ = function() {
      u({
        type: rn
      });
    };
    return D((p = {}, p[d] = ce(b, function(W) {
      w.current = W;
    }), p.id = s.menuId, p.role = "listbox", p["aria-labelledby"] = k && k["aria-label"] ? void 0 : "" + s.labelId, p.onMouseLeave = A(g, $), p), k);
  }, [u, le, s]), J = c.useCallback(function(I, y) {
    var p, H = I === void 0 ? {} : I, g = H.onBlur, f = H.onClick;
    H.onPress;
    var d = H.onKeyDown, b = H.refKey, k = b === void 0 ? "ref" : b, V = H.ref, $ = ue(H, Jn), W = y === void 0 ? {} : y;
    W.suppressRefError;
    var L = P.current.state, N = function() {
      u({
        type: Me
      });
    }, U = function() {
      L.isOpen && !B.isMouseDown && u({
        type: He
      });
    }, ee = function(_) {
      var z = Oe(_);
      z && Y[z] ? Y[z](_) : Nn(z) && u({
        type: Pe,
        key: z
      });
    }, X = D((p = {}, p[k] = ce(V, function(te) {
      m.current = te;
    }), p["aria-activedescendant"] = L.isOpen && L.highlightedIndex > -1 ? s.getItemId(L.highlightedIndex) : "", p["aria-controls"] = s.menuId, p["aria-expanded"] = P.current.state.isOpen, p["aria-haspopup"] = "listbox", p["aria-labelledby"] = $ && $["aria-label"] ? void 0 : "" + s.labelId, p.id = s.toggleButtonId, p.role = "combobox", p.tabIndex = 0, p.onBlur = A(g, U), p), $);
    return $.disabled || (X.onClick = A(f, N), X.onKeyDown = A(d, ee)), X;
  }, [u, s, P, B, le, Y]), ie = c.useCallback(function(I) {
    var y, p = I === void 0 ? {} : I, H = p.item, g = p.index, f = p.onMouseMove, d = p.onClick, b = p.onMouseDown;
    p.onPress;
    var k = p.refKey, V = k === void 0 ? "ref" : k, $ = p.disabled, W = p.ref, L = ue(p, Qn);
    $ !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var N = P.current, U = N.state, ee = N.props, X = Ne(H, g, ee.items, "Pass either item or index to getItemProps!"), te = X[0], _ = X[1], z = ee.isItemDisabled(te, _), me = function() {
      B.isTouchEnd || _ === U.highlightedIndex || (ne.current = !1, u({
        type: on,
        index: _,
        disabled: z
      }));
    }, Ie = function() {
      u({
        type: rt,
        index: _
      });
    }, be = function(oe) {
      return oe.preventDefault();
    }, G = D((y = {}, y[V] = ce(W, function(Q) {
      Q && (O.current[s.getItemId(_)] = Q);
    }), y["aria-disabled"] = z, y["aria-selected"] = te === U.selectedItem, y.id = s.getItemId(_), y.role = "option", y), L);
    return z || (G.onClick = A(d, Ie)), G.onMouseMove = A(f, me), G.onMouseDown = A(b, be), G;
  }, [P, s, B, ne, u]);
  return {
    // prop getters.
    getToggleButtonProps: J,
    getLabelProps: K,
    getMenuProps: Z,
    getItemProps: ie,
    // actions.
    toggleMenu: re,
    openMenu: M,
    closeMenu: se,
    setHighlightedIndex: F,
    selectItem: E,
    reset: q,
    setInputValue: j,
    // state.
    highlightedIndex: h,
    isOpen: a,
    selectedItem: x,
    inputValue: S
  };
}
var ot = 0, ut = 1, at = 2, lt = 3, st = 4, ct = 5, dt = 6, ft = 7, gt = 8, Be = 9, vt = 10, fn = 11, gn = 12, ht = 13, vn = 14, hn = 15, pn = 16, mn = 17, In = 18, pt = 19, yn = 20, bn = 21, mt = 22, xn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ControlledPropUpdatedSelectedItem: mt,
  FunctionCloseMenu: mn,
  FunctionOpenMenu: pn,
  FunctionReset: bn,
  FunctionSelectItem: pt,
  FunctionSetHighlightedIndex: In,
  FunctionSetInputValue: yn,
  FunctionToggleMenu: hn,
  InputBlur: Be,
  InputChange: gt,
  InputClick: vt,
  InputKeyDownArrowDown: ot,
  InputKeyDownArrowUp: ut,
  InputKeyDownEnd: st,
  InputKeyDownEnter: ft,
  InputKeyDownEscape: at,
  InputKeyDownHome: lt,
  InputKeyDownPageDown: dt,
  InputKeyDownPageUp: ct,
  ItemClick: ht,
  ItemMouseMove: gn,
  MenuMouseLeave: fn,
  ToggleButtonClick: vn
});
function er(e) {
  var t = Jt(e), i = t.selectedItem, r = t.inputValue;
  return r === "" && i && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (r = e.itemToString(i)), D({}, t, {
    inputValue: r
  });
}
D({}, tn, {
  items: v.array.isRequired,
  isItemDisabled: v.func,
  inputValue: v.string,
  defaultInputValue: v.string,
  initialInputValue: v.string,
  inputId: v.string,
  onInputValueChange: v.func
});
function tr(e, t, i, r) {
  var n = c.useRef(), l = Yt(e, t, i, r), o = l[0], u = l[1], a = $e();
  return c.useEffect(function() {
    if (jt(t, "selectedItem")) {
      if (!a) {
        var h = t.itemToKey(t.selectedItem) !== t.itemToKey(n.current);
        h && u({
          type: mt,
          inputValue: t.itemToString(t.selectedItem)
        });
      }
      n.current = o.selectedItem === n.current ? t.selectedItem : o.selectedItem;
    }
  }, [o.selectedItem, t.selectedItem]), [Re(o, t), u];
}
var nr = D({}, we, {
  isItemDisabled: function() {
    return !1;
  }
});
function rr(e, t) {
  var i, r = t.type, n = t.props, l = t.altKey, o;
  switch (r) {
    case ht:
      o = {
        isOpen: ae(n, "isOpen"),
        highlightedIndex: Ee(n),
        selectedItem: n.items[t.index],
        inputValue: n.itemToString(n.items[t.index])
      };
      break;
    case ot:
      e.isOpen ? o = {
        highlightedIndex: fe(e.highlightedIndex, 1, n.items, n.isItemDisabled, !0)
      } : o = {
        highlightedIndex: l && e.selectedItem == null ? -1 : pe(n, e, 1),
        isOpen: n.items.length >= 0
      };
      break;
    case ut:
      e.isOpen ? l ? o = Te(n, e.highlightedIndex) : o = {
        highlightedIndex: fe(e.highlightedIndex, -1, n.items, n.isItemDisabled, !0)
      } : o = {
        highlightedIndex: pe(n, e, -1),
        isOpen: n.items.length >= 0
      };
      break;
    case ft:
      o = Te(n, e.highlightedIndex);
      break;
    case at:
      o = D({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case ct:
      o = {
        highlightedIndex: fe(e.highlightedIndex, -10, n.items, n.isItemDisabled, !0)
      };
      break;
    case dt:
      o = {
        highlightedIndex: fe(e.highlightedIndex, 10, n.items, n.isItemDisabled, !0)
      };
      break;
    case lt:
      o = {
        highlightedIndex: ye(0, !1, n.items, n.isItemDisabled)
      };
      break;
    case st:
      o = {
        highlightedIndex: ye(n.items.length - 1, !0, n.items, n.isItemDisabled)
      };
      break;
    case Be:
      o = D({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((i = n.items) == null ? void 0 : i.length) && t.selectItem && {
        selectedItem: n.items[e.highlightedIndex],
        inputValue: n.itemToString(n.items[e.highlightedIndex])
      });
      break;
    case gt:
      o = {
        isOpen: !0,
        highlightedIndex: Ee(n),
        inputValue: t.inputValue
      };
      break;
    case vt:
      o = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : pe(n, e, 0)
      };
      break;
    case pt:
      o = {
        selectedItem: t.selectedItem,
        inputValue: n.itemToString(t.selectedItem)
      };
      break;
    case mt:
      o = {
        inputValue: t.inputValue
      };
      break;
    default:
      return nn(e, t, xn);
  }
  return D({}, e, o);
}
var ir = ["onMouseLeave", "refKey", "ref"], or = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "disabled"], ur = ["onClick", "onPress", "refKey", "ref"], ar = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKey", "ref"];
lr.stateChangeTypes = xn;
function lr(e) {
  e === void 0 && (e = {});
  var t = D({}, nr, e), i = t.items, r = t.scrollIntoView, n = t.environment, l = t.getA11yStatusMessage, o = tr(rr, t, er, en), u = o[0], a = o[1], h = u.isOpen, x = u.highlightedIndex, S = u.selectedItem, m = u.inputValue, w = c.useRef(null), O = c.useRef({}), C = c.useRef(null), s = c.useRef(null), P = $e(), T = Gt(t), ne = c.useRef(), B = Ve({
    state: u,
    props: t
  }), le = c.useCallback(function(g) {
    return O.current[T.getItemId(g)];
  }, [T]);
  ze(l, u, [h, x, S, m], n);
  var Y = Zt({
    menuElement: w.current,
    highlightedIndex: x,
    isOpen: h,
    itemRefs: O,
    scrollIntoView: r,
    getItemNodeFromIndex: le
  });
  c.useEffect(function() {
    var g = he(t, "isOpen");
    g && C.current && C.current.focus();
  }, []), c.useEffect(function() {
    P || (ne.current = i.length);
  });
  var re = Qt(n, c.useCallback(function() {
    B.current.state.isOpen && a({
      type: Be,
      selectItem: !1
    });
  }, [a, B]), c.useMemo(function() {
    return [w, s, C];
  }, [w.current, s.current, C.current])), se = Ue();
  c.useEffect(function() {
    h || (O.current = {});
  }, [h]), c.useEffect(function() {
    var g;
    !h || !(n != null && n.document) || !(C != null && (g = C.current) != null && g.focus) || n.document.activeElement !== C.current && C.current.focus();
  }, [h, n]);
  var M = c.useMemo(function() {
    return {
      ArrowDown: function(f) {
        f.preventDefault(), a({
          type: ot,
          altKey: f.altKey
        });
      },
      ArrowUp: function(f) {
        f.preventDefault(), a({
          type: ut,
          altKey: f.altKey
        });
      },
      Home: function(f) {
        B.current.state.isOpen && (f.preventDefault(), a({
          type: lt
        }));
      },
      End: function(f) {
        B.current.state.isOpen && (f.preventDefault(), a({
          type: st
        }));
      },
      Escape: function(f) {
        var d = B.current.state;
        (d.isOpen || d.inputValue || d.selectedItem || d.highlightedIndex > -1) && (f.preventDefault(), a({
          type: at
        }));
      },
      Enter: function(f) {
        var d = B.current.state;
        !d.isOpen || f.which === 229 || (f.preventDefault(), a({
          type: ft
        }));
      },
      PageUp: function(f) {
        B.current.state.isOpen && (f.preventDefault(), a({
          type: ct
        }));
      },
      PageDown: function(f) {
        B.current.state.isOpen && (f.preventDefault(), a({
          type: dt
        }));
      }
    };
  }, [a, B]), F = c.useCallback(function(g) {
    return D({
      id: T.labelId,
      htmlFor: T.inputId
    }, g);
  }, [T]), E = c.useCallback(function(g, f) {
    var d, b = g === void 0 ? {} : g, k = b.onMouseLeave, V = b.refKey, $ = V === void 0 ? "ref" : V, W = b.ref, L = ue(b, ir), N = f === void 0 ? {} : f;
    return N.suppressRefError, D((d = {}, d[$] = ce(W, function(U) {
      w.current = U;
    }), d.id = T.menuId, d.role = "listbox", d["aria-labelledby"] = L && L["aria-label"] ? void 0 : "" + T.labelId, d.onMouseLeave = A(k, function() {
      a({
        type: fn
      });
    }), d), L);
  }, [a, se, T]), q = c.useCallback(function(g) {
    var f, d, b = g === void 0 ? {} : g, k = b.item, V = b.index, $ = b.refKey, W = $ === void 0 ? "ref" : $, L = b.ref, N = b.onMouseMove, U = b.onMouseDown, ee = b.onClick;
    b.onPress;
    var X = b.disabled, te = ue(b, or);
    X !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');
    var _ = B.current, z = _.props, me = _.state, Ie = Ne(k, V, z.items, "Pass either item or index to getItemProps!"), be = Ie[0], G = Ie[1], Q = z.isItemDisabled(be, G), oe = "onClick", ge = ee, de = function() {
      re.isTouchEnd || G === me.highlightedIndex || (Y.current = !1, a({
        type: gn,
        index: G,
        disabled: Q
      }));
    }, ve = function() {
      a({
        type: ht,
        index: G
      });
    }, Cn = function(kn) {
      return kn.preventDefault();
    };
    return D((f = {}, f[W] = ce(L, function(xe) {
      xe && (O.current[T.getItemId(G)] = xe);
    }), f["aria-disabled"] = Q, f["aria-selected"] = G === me.highlightedIndex, f.id = T.getItemId(G), f.role = "option", f), !Q && (d = {}, d[oe] = A(ge, ve), d), {
      onMouseMove: A(N, de),
      onMouseDown: A(U, Cn)
    }, te);
  }, [a, T, B, re, Y]), j = c.useCallback(function(g) {
    var f, d = g === void 0 ? {} : g, b = d.onClick;
    d.onPress;
    var k = d.refKey, V = k === void 0 ? "ref" : k, $ = d.ref, W = ue(d, ur), L = B.current.state, N = function() {
      a({
        type: vn
      });
    };
    return D((f = {}, f[V] = ce($, function(U) {
      s.current = U;
    }), f["aria-controls"] = T.menuId, f["aria-expanded"] = L.isOpen, f.id = T.toggleButtonId, f.tabIndex = -1, f), !W.disabled && D({}, {
      onClick: A(b, N)
    }), W);
  }, [a, B, T]), K = c.useCallback(function(g, f) {
    var d, b = g === void 0 ? {} : g, k = b.onKeyDown, V = b.onChange, $ = b.onInput, W = b.onBlur;
    b.onChangeText;
    var L = b.onClick, N = b.refKey, U = N === void 0 ? "ref" : N, ee = b.ref, X = ue(b, ar), te = f === void 0 ? {} : f;
    te.suppressRefError;
    var _ = B.current.state, z = function(de) {
      var ve = Oe(de);
      ve && M[ve] && M[ve](de);
    }, me = function(de) {
      a({
        type: gt,
        inputValue: de.target.value
      });
    }, Ie = function(de) {
      if (n != null && n.document && _.isOpen && !re.isMouseDown) {
        var ve = de.relatedTarget === null && n.document.activeElement !== n.document.body;
        a({
          type: Be,
          selectItem: !ve
        });
      }
    }, be = function() {
      a({
        type: vt
      });
    }, G = "onChange", Q = {};
    if (!X.disabled) {
      var oe;
      Q = (oe = {}, oe[G] = A(V, $, me), oe.onKeyDown = A(k, z), oe.onBlur = A(W, Ie), oe.onClick = A(L, be), oe);
    }
    return D((d = {}, d[U] = ce(ee, function(ge) {
      C.current = ge;
    }), d["aria-activedescendant"] = _.isOpen && _.highlightedIndex > -1 ? T.getItemId(_.highlightedIndex) : "", d["aria-autocomplete"] = "list", d["aria-controls"] = T.menuId, d["aria-expanded"] = _.isOpen, d["aria-labelledby"] = X && X["aria-label"] ? void 0 : T.labelId, d.autoComplete = "off", d.id = T.inputId, d.role = "combobox", d.value = _.inputValue, d), Q, X);
  }, [a, T, n, M, B, re, se]), Z = c.useCallback(function() {
    a({
      type: hn
    });
  }, [a]), J = c.useCallback(function() {
    a({
      type: mn
    });
  }, [a]), ie = c.useCallback(function() {
    a({
      type: pn
    });
  }, [a]), I = c.useCallback(function(g) {
    a({
      type: In,
      highlightedIndex: g
    });
  }, [a]), y = c.useCallback(function(g) {
    a({
      type: pt,
      selectedItem: g
    });
  }, [a]), p = c.useCallback(function(g) {
    a({
      type: yn,
      inputValue: g
    });
  }, [a]), H = c.useCallback(function() {
    a({
      type: bn
    });
  }, [a]);
  return {
    // prop getters.
    getItemProps: q,
    getLabelProps: F,
    getMenuProps: E,
    getInputProps: K,
    getToggleButtonProps: j,
    // actions.
    toggleMenu: Z,
    openMenu: ie,
    closeMenu: J,
    setHighlightedIndex: I,
    setInputValue: p,
    selectItem: y,
    reset: H,
    // state.
    highlightedIndex: x,
    isOpen: h,
    selectedItem: S,
    inputValue: m
  };
}
var wn = {
  activeIndex: -1,
  selectedItems: []
};
function _t(e, t) {
  return he(e, t, wn);
}
function Wt(e, t) {
  return ae(e, t, wn);
}
function sr(e) {
  var t = _t(e, "activeIndex"), i = _t(e, "selectedItems");
  return {
    activeIndex: t,
    selectedItems: i
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
function cr(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
De.stateReducer, De.itemToKey, De.environment, v.array, v.array, v.array, v.func, v.number, v.number, v.number, v.func, v.func, v.string, v.string;
var dr = {
  itemToKey: we.itemToKey,
  stateReducer: we.stateReducer,
  environment: we.environment,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, It = 0, yt = 1, bt = 2, xt = 3, wt = 4, Ct = 5, kt = 6, Dt = 7, Mt = 8, Kt = 9, St = 10, Rt = 11, Ot = 12, fr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DropdownClick: Dt,
  DropdownKeyDownBackspace: kt,
  DropdownKeyDownNavigationPrevious: Ct,
  FunctionAddSelectedItem: Mt,
  FunctionRemoveSelectedItem: Kt,
  FunctionReset: Ot,
  FunctionSetActiveIndex: Rt,
  FunctionSetSelectedItems: St,
  SelectedItemClick: It,
  SelectedItemKeyDownBackspace: bt,
  SelectedItemKeyDownDelete: yt,
  SelectedItemKeyDownNavigationNext: xt,
  SelectedItemKeyDownNavigationPrevious: wt
});
function gr(e, t) {
  var i = t.type, r = t.index, n = t.props, l = t.selectedItem, o = e.activeIndex, u = e.selectedItems, a;
  switch (i) {
    case It:
      a = {
        activeIndex: r
      };
      break;
    case wt:
      a = {
        activeIndex: o - 1 < 0 ? 0 : o - 1
      };
      break;
    case xt:
      a = {
        activeIndex: o + 1 >= u.length ? -1 : o + 1
      };
      break;
    case bt:
    case yt: {
      if (o < 0)
        break;
      var h = o;
      u.length === 1 ? h = -1 : o === u.length - 1 && (h = u.length - 2), a = D({
        selectedItems: [].concat(u.slice(0, o), u.slice(o + 1))
      }, {
        activeIndex: h
      });
      break;
    }
    case Ct:
      a = {
        activeIndex: u.length - 1
      };
      break;
    case kt:
      a = {
        selectedItems: u.slice(0, u.length - 1)
      };
      break;
    case Mt:
      a = {
        selectedItems: [].concat(u, [l])
      };
      break;
    case Dt:
      a = {
        activeIndex: -1
      };
      break;
    case Kt: {
      var x = o, S = u.findIndex(function(O) {
        return n.itemToKey(O) === n.itemToKey(l);
      });
      if (S < 0)
        break;
      u.length === 1 ? x = -1 : S === u.length - 1 && (x = u.length - 2), a = {
        selectedItems: [].concat(u.slice(0, S), u.slice(S + 1)),
        activeIndex: x
      };
      break;
    }
    case St: {
      var m = t.selectedItems;
      a = {
        selectedItems: m
      };
      break;
    }
    case Rt: {
      var w = t.activeIndex;
      a = {
        activeIndex: w
      };
      break;
    }
    case Ot:
      a = {
        activeIndex: Wt(n, "activeIndex"),
        selectedItems: Wt(n, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return D({}, e, a);
}
var vr = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], hr = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"];
pr.stateChangeTypes = fr;
function pr(e) {
  e === void 0 && (e = {});
  var t = D({}, dr, e), i = t.getA11yStatusMessage, r = t.environment, n = t.keyNavigationNext, l = t.keyNavigationPrevious, o = Xt(gr, t, sr, cr), u = o[0], a = o[1], h = u.activeIndex, x = u.selectedItems, S = $e(), m = c.useRef(null), w = c.useRef();
  w.current = [];
  var O = Ve({
    state: u,
    props: t
  });
  ze(i, u, [h, x], r), c.useEffect(function() {
    S || (h === -1 && m.current ? m.current.focus() : w.current[h] && w.current[h].focus());
  }, [h]);
  var C = Ue(), s = c.useMemo(function() {
    var M;
    return M = {}, M[l] = function() {
      a({
        type: wt
      });
    }, M[n] = function() {
      a({
        type: xt
      });
    }, M.Delete = function() {
      a({
        type: yt
      });
    }, M.Backspace = function() {
      a({
        type: bt
      });
    }, M;
  }, [a, n, l]), P = c.useMemo(function() {
    var M;
    return M = {}, M[l] = function(F) {
      qt(F) && a({
        type: Ct
      });
    }, M.Backspace = function(E) {
      qt(E) && a({
        type: kt
      });
    }, M;
  }, [a, l]), T = c.useCallback(function(M) {
    var F, E = M === void 0 ? {} : M, q = E.refKey, j = q === void 0 ? "ref" : q, K = E.ref, Z = E.onClick, J = E.onKeyDown, ie = E.selectedItem, I = E.index, y = ue(E, vr), p = O.current.state, H = Ne(ie, I, p.selectedItems, "Pass either item or index to getSelectedItemProps!"), g = H[1], f = g > -1 && g === p.activeIndex, d = function() {
      a({
        type: It,
        index: g
      });
    }, b = function(V) {
      var $ = Oe(V);
      $ && s[$] && s[$](V);
    };
    return D((F = {}, F[j] = ce(K, function(k) {
      k && w.current.push(k);
    }), F.tabIndex = f ? 0 : -1, F.onClick = A(Z, d), F.onKeyDown = A(J, b), F), y);
  }, [a, O, s]), ne = c.useCallback(function(M, F) {
    var E, q = M === void 0 ? {} : M, j = q.refKey, K = j === void 0 ? "ref" : j, Z = q.ref, J = q.onKeyDown, ie = q.onClick, I = q.preventKeyAction, y = I === void 0 ? !1 : I, p = ue(q, hr), H = F === void 0 ? {} : F;
    H.suppressRefError;
    var g = function(b) {
      var k = Oe(b);
      k && P[k] && P[k](b);
    }, f = function() {
      a({
        type: Dt
      });
    };
    return D((E = {}, E[K] = ce(Z, function(d) {
      d && (m.current = d);
    }), E), !y && {
      onKeyDown: A(J, g),
      onClick: A(ie, f)
    }, p);
  }, [a, P, C]), B = c.useCallback(function(M) {
    a({
      type: Mt,
      selectedItem: M
    });
  }, [a]), le = c.useCallback(function(M) {
    a({
      type: Kt,
      selectedItem: M
    });
  }, [a]), Y = c.useCallback(function(M) {
    a({
      type: St,
      selectedItems: M
    });
  }, [a]), re = c.useCallback(function(M) {
    a({
      type: Rt,
      activeIndex: M
    });
  }, [a]), se = c.useCallback(function() {
    a({
      type: Ot
    });
  }, [a]);
  return {
    getSelectedItemProps: T,
    getDropdownProps: ne,
    addSelectedItem: B,
    removeSelectedItem: le,
    setSelectedItems: Y,
    setActiveIndex: re,
    reset: se,
    selectedItems: x,
    activeIndex: h
  };
}
export {
  Zn as a,
  pr as b,
  lr as u
};
