import { j as Ae, c as St, u as wt, b as Ct, R as T, f as o, _ as R } from "./webapp.dStGtxDE.js";
import { $ as se, a as K, g as Se, k as ae, c as q, b as He, d as x, i as we, l as Xe, e as je, h as yt, m as xt, n as Rt, o as Mt, j as It, p as _t, q as Tt } from "./index.hzKdP6cc.js";
import { _ as N, b as ze, c as Pt } from "./downshift.esm.WyR76k9W.js";
const Pr = (e) => /* @__PURE__ */ Ae.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ Ae.jsx("path", { d: "M272 64c-8.8 0-16-7.16-16-16s7.2-16 16-16h160c8.8 0 16 7.16 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V86.63L187.3 315.3c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6L393.4 64H272zM0 112c0-26.51 21.49-48 48-48h128c8.8 0 16 7.16 16 16s-7.2 16-16 16H48c-8.84 0-16 7.2-16 16v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V112z" }) }), Ft = {
  security: {},
  scanServer: "",
  tryitServer: ""
}, qe = St({
  name: "prefs",
  initialState: Ft,
  reducers: {
    loadPrefs: (e, t) => {
      e.security = t.payload.security, e.scanServer = t.payload.scanServer, e.tryitServer = t.payload.tryitServer;
    },
    setScanServer: (e, t) => {
      e.scanServer = t.payload;
    },
    setTryitServer: (e, t) => {
      e.tryitServer = t.payload;
    },
    setSecretForSecurity: (e, t) => {
      e.security[t.payload.scheme] = t.payload.secret;
    }
  }
}), { loadPrefs: Fr, setScanServer: Dr, setTryitServer: Ar, setSecretForSecurity: Or } = qe.actions, kr = wt, Nr = Ct, Lr = qe.reducer;
function Ze(e) {
  const t = e + "CollectionProvider", [n, r] = se(t), [a, u] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), i = (h) => {
    const { scope: f, children: s } = h, m = T.useRef(null), $ = T.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ T.createElement(a, {
      scope: f,
      itemMap: $,
      collectionRef: m
    }, s);
  }, c = e + "CollectionSlot", p = /* @__PURE__ */ T.forwardRef((h, f) => {
    const { scope: s, children: m } = h, $ = u(c, s), E = K(f, $.collectionRef);
    return /* @__PURE__ */ T.createElement(Se, {
      ref: E
    }, m);
  }), d = e + "CollectionItemSlot", b = "data-radix-collection-item", l = /* @__PURE__ */ T.forwardRef((h, f) => {
    const { scope: s, children: m, ...$ } = h, E = T.useRef(null), w = K(f, E), S = u(d, s);
    return T.useEffect(() => (S.itemMap.set(E, {
      ref: E,
      ...$
    }), () => void S.itemMap.delete(E))), /* @__PURE__ */ T.createElement(Se, {
      [b]: "",
      ref: w
    }, m);
  });
  function v(h) {
    const f = u(e + "CollectionConsumer", h);
    return T.useCallback(() => {
      const m = f.collectionRef.current;
      if (!m)
        return [];
      const $ = Array.from(m.querySelectorAll(`[${b}]`));
      return Array.from(f.itemMap.values()).sort(
        (S, y) => $.indexOf(S.ref.current) - $.indexOf(y.ref.current)
      );
    }, [
      f.collectionRef,
      f.itemMap
    ]);
  }
  return [
    {
      Provider: i,
      Slot: p,
      ItemSlot: l
    },
    v,
    r
  ];
}
const Dt = /* @__PURE__ */ o.createContext(void 0);
function Qe(e) {
  const t = o.useContext(Dt);
  return e || t || "ltr";
}
let ve = 0;
function At() {
  o.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Oe()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Oe()), ve++, () => {
      ve === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), ve--;
    };
  }, []);
}
function Oe() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const pe = "focusScope.autoFocusOnMount", me = "focusScope.autoFocusOnUnmount", ke = {
  bubbles: !1,
  cancelable: !0
}, Ot = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: a, onUnmountAutoFocus: u, ...i } = e, [c, p] = o.useState(null), d = ae(a), b = ae(u), l = o.useRef(null), v = K(
    t,
    (s) => p(s)
  ), h = o.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  o.useEffect(() => {
    if (r) {
      let s = function(w) {
        if (h.paused || !c)
          return;
        const S = w.target;
        c.contains(S) ? l.current = S : k(l.current, {
          select: !0
        });
      }, m = function(w) {
        if (h.paused || !c)
          return;
        const S = w.relatedTarget;
        S !== null && (c.contains(S) || k(l.current, {
          select: !0
        }));
      }, $ = function(w) {
        if (document.activeElement === document.body)
          for (const y of w)
            y.removedNodes.length > 0 && k(c);
      };
      document.addEventListener("focusin", s), document.addEventListener("focusout", m);
      const E = new MutationObserver($);
      return c && E.observe(c, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", s), document.removeEventListener("focusout", m), E.disconnect();
      };
    }
  }, [
    r,
    c,
    h.paused
  ]), o.useEffect(() => {
    if (c) {
      Le.add(h);
      const s = document.activeElement;
      if (!c.contains(s)) {
        const $ = new CustomEvent(pe, ke);
        c.addEventListener(pe, d), c.dispatchEvent($), $.defaultPrevented || (kt(Gt(Je(c)), {
          select: !0
        }), document.activeElement === s && k(c));
      }
      return () => {
        c.removeEventListener(pe, d), setTimeout(() => {
          const $ = new CustomEvent(me, ke);
          c.addEventListener(me, b), c.dispatchEvent($), $.defaultPrevented || k(s ?? document.body, {
            select: !0
          }), c.removeEventListener(me, b), Le.remove(h);
        }, 0);
      };
    }
  }, [
    c,
    d,
    b,
    h
  ]);
  const f = o.useCallback((s) => {
    if (!n && !r || h.paused)
      return;
    const m = s.key === "Tab" && !s.altKey && !s.ctrlKey && !s.metaKey, $ = document.activeElement;
    if (m && $) {
      const E = s.currentTarget, [w, S] = Nt(E);
      w && S ? !s.shiftKey && $ === S ? (s.preventDefault(), n && k(w, {
        select: !0
      })) : s.shiftKey && $ === w && (s.preventDefault(), n && k(S, {
        select: !0
      })) : $ === E && s.preventDefault();
    }
  }, [
    n,
    r,
    h.paused
  ]);
  return /* @__PURE__ */ o.createElement(q.div, R({
    tabIndex: -1
  }, i, {
    ref: v,
    onKeyDown: f
  }));
});
function kt(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (k(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Nt(e) {
  const t = Je(e), n = Ne(t, e), r = Ne(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Je(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Ne(e, t) {
  for (const n of e)
    if (!Lt(n, {
      upTo: t
    }))
      return n;
}
function Lt(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function Kt(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function k(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Kt(e) && t && e.select();
  }
}
const Le = Ut();
function Ut() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ke(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ke(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Ke(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Gt(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const $e = "rovingFocusGroup.onEntryFocus", Bt = {
  bubbles: !1,
  cancelable: !0
}, Ie = "RovingFocusGroup", [Ce, et, Wt] = Ze(Ie), [Vt, tt] = se(Ie, [
  Wt
]), [Yt, Ht] = Vt(Ie), Xt = /* @__PURE__ */ o.forwardRef((e, t) => /* @__PURE__ */ o.createElement(Ce.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ o.createElement(Ce.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ o.createElement(jt, R({}, e, {
  ref: t
}))))), jt = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: a = !1, dir: u, currentTabStopId: i, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: p, onEntryFocus: d, ...b } = e, l = o.useRef(null), v = K(t, l), h = Qe(u), [f = null, s] = He({
    prop: i,
    defaultProp: c,
    onChange: p
  }), [m, $] = o.useState(!1), E = ae(d), w = et(n), S = o.useRef(!1), [y, P] = o.useState(0);
  return o.useEffect(() => {
    const C = l.current;
    if (C)
      return C.addEventListener($e, E), () => C.removeEventListener($e, E);
  }, [
    E
  ]), /* @__PURE__ */ o.createElement(Yt, {
    scope: n,
    orientation: r,
    dir: h,
    loop: a,
    currentTabStopId: f,
    onItemFocus: o.useCallback(
      (C) => s(C),
      [
        s
      ]
    ),
    onItemShiftTab: o.useCallback(
      () => $(!0),
      []
    ),
    onFocusableItemAdd: o.useCallback(
      () => P(
        (C) => C + 1
      ),
      []
    ),
    onFocusableItemRemove: o.useCallback(
      () => P(
        (C) => C - 1
      ),
      []
    )
  }, /* @__PURE__ */ o.createElement(q.div, R({
    tabIndex: m || y === 0 ? -1 : 0,
    "data-orientation": r
  }, b, {
    ref: v,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: x(e.onMouseDown, () => {
      S.current = !0;
    }),
    onFocus: x(e.onFocus, (C) => {
      const A = !S.current;
      if (C.target === C.currentTarget && A && !m) {
        const _ = new CustomEvent($e, Bt);
        if (C.currentTarget.dispatchEvent(_), !_.defaultPrevented) {
          const O = w().filter(
            (F) => F.focusable
          ), le = O.find(
            (F) => F.active
          ), H = O.find(
            (F) => F.id === f
          ), X = [
            le,
            H,
            ...O
          ].filter(Boolean).map(
            (F) => F.ref.current
          );
          nt(X);
        }
      }
      S.current = !1;
    }),
    onBlur: x(
      e.onBlur,
      () => $(!1)
    )
  })));
}), zt = "RovingFocusGroupItem", qt = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: a = !1, tabStopId: u, ...i } = e, c = we(), p = u || c, d = Ht(zt, n), b = d.currentTabStopId === p, l = et(n), { onFocusableItemAdd: v, onFocusableItemRemove: h } = d;
  return o.useEffect(() => {
    if (r)
      return v(), () => h();
  }, [
    r,
    v,
    h
  ]), /* @__PURE__ */ o.createElement(Ce.ItemSlot, {
    scope: n,
    id: p,
    focusable: r,
    active: a
  }, /* @__PURE__ */ o.createElement(q.span, R({
    tabIndex: b ? 0 : -1,
    "data-orientation": d.orientation
  }, i, {
    ref: t,
    onMouseDown: x(e.onMouseDown, (f) => {
      r ? d.onItemFocus(p) : f.preventDefault();
    }),
    onFocus: x(
      e.onFocus,
      () => d.onItemFocus(p)
    ),
    onKeyDown: x(e.onKeyDown, (f) => {
      if (f.key === "Tab" && f.shiftKey) {
        d.onItemShiftTab();
        return;
      }
      if (f.target !== f.currentTarget)
        return;
      const s = Jt(f, d.orientation, d.dir);
      if (s !== void 0) {
        f.preventDefault();
        let $ = l().filter(
          (E) => E.focusable
        ).map(
          (E) => E.ref.current
        );
        if (s === "last")
          $.reverse();
        else if (s === "prev" || s === "next") {
          s === "prev" && $.reverse();
          const E = $.indexOf(f.currentTarget);
          $ = d.loop ? en($, E + 1) : $.slice(E + 1);
        }
        setTimeout(
          () => nt($)
        );
      }
    })
  })));
}), Zt = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Qt(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Jt(e, t, n) {
  const r = Qt(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return Zt[r];
}
function nt(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function en(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const tn = Xt, nn = qt;
var rn = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, W = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), te = {}, be = 0, rt = function(e) {
  return e && (e.host || rt(e.parentNode));
}, on = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = rt(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, cn = function(e, t, n, r) {
  var a = on(t, Array.isArray(e) ? e : [e]);
  te[n] || (te[n] = /* @__PURE__ */ new WeakMap());
  var u = te[n], i = [], c = /* @__PURE__ */ new Set(), p = new Set(a), d = function(l) {
    !l || c.has(l) || (c.add(l), d(l.parentNode));
  };
  a.forEach(d);
  var b = function(l) {
    !l || p.has(l) || Array.prototype.forEach.call(l.children, function(v) {
      if (c.has(v))
        b(v);
      else {
        var h = v.getAttribute(r), f = h !== null && h !== "false", s = (W.get(v) || 0) + 1, m = (u.get(v) || 0) + 1;
        W.set(v, s), u.set(v, m), i.push(v), s === 1 && f && ee.set(v, !0), m === 1 && v.setAttribute(n, "true"), f || v.setAttribute(r, "true");
      }
    });
  };
  return b(t), c.clear(), be++, function() {
    i.forEach(function(l) {
      var v = W.get(l) - 1, h = u.get(l) - 1;
      W.set(l, v), u.set(l, h), v || (ee.has(l) || l.removeAttribute(r), ee.delete(l)), h || l.removeAttribute(n);
    }), be--, be || (W = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), te = {});
  };
}, an = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = t || rn(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), cn(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, oe = "right-scroll-bar-position", ce = "width-before-scroll-bar", sn = "with-scroll-bars-hidden", un = "--removed-body-scroll-bar-size";
function he(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ln(e, t) {
  var n = o.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var a = n.value;
          a !== r && (n.value = r, n.callback(r, a));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Ue = /* @__PURE__ */ new WeakMap();
function dn(e, t) {
  var n = ln(t || null, function(r) {
    return e.forEach(function(a) {
      return he(a, r);
    });
  });
  return o.useLayoutEffect(function() {
    var r = Ue.get(n);
    if (r) {
      var a = new Set(r), u = new Set(e), i = n.current;
      a.forEach(function(c) {
        u.has(c) || he(c, null);
      }), u.forEach(function(c) {
        a.has(c) || he(c, i);
      });
    }
    Ue.set(n, e);
  }, [e]), n;
}
function fn(e) {
  return e;
}
function vn(e, t) {
  t === void 0 && (t = fn);
  var n = [], r = !1, a = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(u) {
      var i = t(u, r);
      return n.push(i), function() {
        n = n.filter(function(c) {
          return c !== i;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(u);
      }
      n = {
        push: function(c) {
          return u(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(u) {
      r = !0;
      var i = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(u), i = n;
      }
      var p = function() {
        var b = i;
        i = [], b.forEach(u);
      }, d = function() {
        return Promise.resolve().then(p);
      };
      d(), n = {
        push: function(b) {
          i.push(b), d();
        },
        filter: function(b) {
          return i = i.filter(b), n;
        }
      };
    }
  };
  return a;
}
function pn(e) {
  e === void 0 && (e = {});
  var t = vn(null);
  return t.options = N({ async: !0, ssr: !1 }, e), t;
}
var ot = function(e) {
  var t = e.sideCar, n = ze(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return o.createElement(r, N({}, n));
};
ot.isSideCarExport = !0;
function mn(e, t) {
  return e.useMedium(t), ot;
}
var ct = pn(), ge = function() {
}, ue = o.forwardRef(function(e, t) {
  var n = o.useRef(null), r = o.useState({
    onScrollCapture: ge,
    onWheelCapture: ge,
    onTouchMoveCapture: ge
  }), a = r[0], u = r[1], i = e.forwardProps, c = e.children, p = e.className, d = e.removeScrollBar, b = e.enabled, l = e.shards, v = e.sideCar, h = e.noIsolation, f = e.inert, s = e.allowPinchZoom, m = e.as, $ = m === void 0 ? "div" : m, E = ze(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), w = v, S = dn([n, t]), y = N(N({}, E), a);
  return o.createElement(
    o.Fragment,
    null,
    b && o.createElement(w, { sideCar: ct, removeScrollBar: d, shards: l, noIsolation: h, inert: f, setCallbacks: u, allowPinchZoom: !!s, lockRef: n }),
    i ? o.cloneElement(o.Children.only(c), N(N({}, y), { ref: S })) : o.createElement($, N({}, y, { className: p, ref: S }), c)
  );
});
ue.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ue.classNames = {
  fullWidth: ce,
  zeroRight: oe
};
var Ge, $n = function() {
  if (Ge)
    return Ge;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function bn() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = $n();
  return t && e.setAttribute("nonce", t), e;
}
function hn(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function gn(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var En = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = bn()) && (hn(t, n), gn(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Sn = function() {
  var e = En();
  return function(t, n) {
    o.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, at = function() {
  var e = Sn(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, wn = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ee = function(e) {
  return parseInt(e || "", 10) || 0;
}, Cn = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ee(n), Ee(r), Ee(a)];
}, yn = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return wn;
  var t = Cn(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, xn = at(), Rn = function(e, t, n, r) {
  var a = e.left, u = e.top, i = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(sn, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(oe, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(ce, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(oe, " .").concat(oe, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ce, " .").concat(ce, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(un, ": ").concat(c, `px;
  }
`);
}, Mn = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r, u = o.useMemo(function() {
    return yn(a);
  }, [a]);
  return o.createElement(xn, { styles: Rn(u, !t, a, n ? "" : "!important") });
}, ye = !1;
if (typeof window < "u")
  try {
    var ne = Object.defineProperty({}, "passive", {
      get: function() {
        return ye = !0, !0;
      }
    });
    window.addEventListener("test", ne, ne), window.removeEventListener("test", ne, ne);
  } catch {
    ye = !1;
  }
var V = ye ? { passive: !1 } : !1, In = function(e) {
  return e.tagName === "TEXTAREA";
}, st = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !In(e) && n[t] === "visible")
  );
}, _n = function(e) {
  return st(e, "overflowY");
}, Tn = function(e) {
  return st(e, "overflowX");
}, Be = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = ut(e, n);
    if (r) {
      var a = it(e, n), u = a[1], i = a[2];
      if (u > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, Pn = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Fn = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ut = function(e, t) {
  return e === "v" ? _n(t) : Tn(t);
}, it = function(e, t) {
  return e === "v" ? Pn(t) : Fn(t);
}, Dn = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, An = function(e, t, n, r, a) {
  var u = Dn(e, window.getComputedStyle(t).direction), i = u * r, c = n.target, p = t.contains(c), d = !1, b = i > 0, l = 0, v = 0;
  do {
    var h = it(e, c), f = h[0], s = h[1], m = h[2], $ = s - m - u * f;
    (f || $) && ut(e, c) && (l += $, v += f), c = c.parentNode;
  } while (
    // portaled content
    !p && c !== document.body || // self content
    p && (t.contains(c) || t === c)
  );
  return (b && (a && l === 0 || !a && i > l) || !b && (a && v === 0 || !a && -i > v)) && (d = !0), d;
}, re = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, We = function(e) {
  return [e.deltaX, e.deltaY];
}, Ve = function(e) {
  return e && "current" in e ? e.current : e;
}, On = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, kn = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Nn = 0, Y = [];
function Ln(e) {
  var t = o.useRef([]), n = o.useRef([0, 0]), r = o.useRef(), a = o.useState(Nn++)[0], u = o.useState(function() {
    return at();
  })[0], i = o.useRef(e);
  o.useEffect(function() {
    i.current = e;
  }, [e]), o.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var s = Pt([e.lockRef.current], (e.shards || []).map(Ve), !0).filter(Boolean);
      return s.forEach(function(m) {
        return m.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), s.forEach(function(m) {
          return m.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = o.useCallback(function(s, m) {
    if ("touches" in s && s.touches.length === 2)
      return !i.current.allowPinchZoom;
    var $ = re(s), E = n.current, w = "deltaX" in s ? s.deltaX : E[0] - $[0], S = "deltaY" in s ? s.deltaY : E[1] - $[1], y, P = s.target, C = Math.abs(w) > Math.abs(S) ? "h" : "v";
    if ("touches" in s && C === "h" && P.type === "range")
      return !1;
    var A = Be(C, P);
    if (!A)
      return !0;
    if (A ? y = C : (y = C === "v" ? "h" : "v", A = Be(C, P)), !A)
      return !1;
    if (!r.current && "changedTouches" in s && (w || S) && (r.current = y), !y)
      return !0;
    var _ = r.current || y;
    return An(_, m, s, _ === "h" ? w : S, !0);
  }, []), p = o.useCallback(function(s) {
    var m = s;
    if (!(!Y.length || Y[Y.length - 1] !== u)) {
      var $ = "deltaY" in m ? We(m) : re(m), E = t.current.filter(function(y) {
        return y.name === m.type && y.target === m.target && On(y.delta, $);
      })[0];
      if (E && E.should) {
        m.cancelable && m.preventDefault();
        return;
      }
      if (!E) {
        var w = (i.current.shards || []).map(Ve).filter(Boolean).filter(function(y) {
          return y.contains(m.target);
        }), S = w.length > 0 ? c(m, w[0]) : !i.current.noIsolation;
        S && m.cancelable && m.preventDefault();
      }
    }
  }, []), d = o.useCallback(function(s, m, $, E) {
    var w = { name: s, delta: m, target: $, should: E };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== w;
      });
    }, 1);
  }, []), b = o.useCallback(function(s) {
    n.current = re(s), r.current = void 0;
  }, []), l = o.useCallback(function(s) {
    d(s.type, We(s), s.target, c(s, e.lockRef.current));
  }, []), v = o.useCallback(function(s) {
    d(s.type, re(s), s.target, c(s, e.lockRef.current));
  }, []);
  o.useEffect(function() {
    return Y.push(u), e.setCallbacks({
      onScrollCapture: l,
      onWheelCapture: l,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", p, V), document.addEventListener("touchmove", p, V), document.addEventListener("touchstart", b, V), function() {
      Y = Y.filter(function(s) {
        return s !== u;
      }), document.removeEventListener("wheel", p, V), document.removeEventListener("touchmove", p, V), document.removeEventListener("touchstart", b, V);
    };
  }, []);
  var h = e.removeScrollBar, f = e.inert;
  return o.createElement(
    o.Fragment,
    null,
    f ? o.createElement(u, { styles: kn(a) }) : null,
    h ? o.createElement(Mn, { gapMode: "margin" }) : null
  );
}
const Kn = mn(ct, Ln);
var lt = o.forwardRef(function(e, t) {
  return o.createElement(ue, N({}, e, { ref: t, sideCar: Kn }));
});
lt.classNames = ue.classNames;
const Un = lt, Gn = [
  "Enter",
  " "
], Bn = [
  "ArrowDown",
  "PageUp",
  "Home"
], dt = [
  "ArrowUp",
  "PageDown",
  "End"
], Wn = [
  ...Bn,
  ...dt
], ie = "Menu", [xe, Vn, Yn] = Ze(ie), [G, ft] = se(ie, [
  Yn,
  Xe,
  tt
]), _e = Xe(), vt = tt(), [Hn, Z] = G(ie), [Xn, Te] = G(ie), jn = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: a, onOpenChange: u, modal: i = !0 } = e, c = _e(t), [p, d] = o.useState(null), b = o.useRef(!1), l = ae(u), v = Qe(a);
  return o.useEffect(() => {
    const h = () => {
      b.current = !0, document.addEventListener("pointerdown", f, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", f, {
        capture: !0,
        once: !0
      });
    }, f = () => b.current = !1;
    return document.addEventListener("keydown", h, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", h, {
        capture: !0
      }), document.removeEventListener("pointerdown", f, {
        capture: !0
      }), document.removeEventListener("pointermove", f, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ o.createElement(Rt, c, /* @__PURE__ */ o.createElement(Hn, {
    scope: t,
    open: n,
    onOpenChange: l,
    content: p,
    onContentChange: d
  }, /* @__PURE__ */ o.createElement(Xn, {
    scope: t,
    onClose: o.useCallback(
      () => l(!1),
      [
        l
      ]
    ),
    isUsingKeyboardRef: b,
    dir: v,
    modal: i
  }, r)));
}, zn = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e, a = _e(n);
  return /* @__PURE__ */ o.createElement(Mt, R({}, a, r, {
    ref: t
  }));
}), pt = "MenuPortal", [qn, Zn] = G(pt, {
  forceMount: void 0
}), Qn = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: a } = e, u = Z(pt, t);
  return /* @__PURE__ */ o.createElement(qn, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ o.createElement(je, {
    present: n || u.open
  }, /* @__PURE__ */ o.createElement(It, {
    asChild: !0,
    container: a
  }, r)));
}, L = "MenuContent", [Jn, mt] = G(L), er = /* @__PURE__ */ o.forwardRef((e, t) => {
  const n = Zn(L, e.__scopeMenu), { forceMount: r = n.forceMount, ...a } = e, u = Z(L, e.__scopeMenu), i = Te(L, e.__scopeMenu);
  return /* @__PURE__ */ o.createElement(xe.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ o.createElement(je, {
    present: r || u.open
  }, /* @__PURE__ */ o.createElement(xe.Slot, {
    scope: e.__scopeMenu
  }, i.modal ? /* @__PURE__ */ o.createElement(tr, R({}, a, {
    ref: t
  })) : /* @__PURE__ */ o.createElement(nr, R({}, a, {
    ref: t
  })))));
}), tr = /* @__PURE__ */ o.forwardRef((e, t) => {
  const n = Z(L, e.__scopeMenu), r = o.useRef(null), a = K(t, r);
  return o.useEffect(() => {
    const u = r.current;
    if (u)
      return an(u);
  }, []), /* @__PURE__ */ o.createElement($t, R({}, e, {
    ref: a,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: x(
      e.onFocusOutside,
      (u) => u.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), nr = /* @__PURE__ */ o.forwardRef((e, t) => {
  const n = Z(L, e.__scopeMenu);
  return /* @__PURE__ */ o.createElement($t, R({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), $t = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: a, onOpenAutoFocus: u, onCloseAutoFocus: i, disableOutsidePointerEvents: c, onEntryFocus: p, onEscapeKeyDown: d, onPointerDownOutside: b, onFocusOutside: l, onInteractOutside: v, onDismiss: h, disableOutsideScroll: f, ...s } = e, m = Z(L, n), $ = Te(L, n), E = _e(n), w = vt(n), S = Vn(n), [y, P] = o.useState(null), C = o.useRef(null), A = K(t, C, m.onContentChange), _ = o.useRef(0), O = o.useRef(""), le = o.useRef(0), H = o.useRef(null), de = o.useRef("right"), X = o.useRef(0), F = f ? Un : o.Fragment, gt = f ? {
    as: Se,
    allowPinchZoom: !0
  } : void 0, Et = (g) => {
    var M, I;
    const U = O.current + g, j = S().filter(
      (D) => !D.disabled
    ), fe = document.activeElement, Pe = (M = j.find(
      (D) => D.ref.current === fe
    )) === null || M === void 0 ? void 0 : M.textValue, J = j.map(
      (D) => D.textValue
    ), z = dr(J, U, Pe), Fe = (I = j.find(
      (D) => D.textValue === z
    )) === null || I === void 0 ? void 0 : I.ref.current;
    (function D(De) {
      O.current = De, window.clearTimeout(_.current), De !== "" && (_.current = window.setTimeout(
        () => D(""),
        1e3
      ));
    })(U), Fe && setTimeout(
      () => Fe.focus()
    );
  };
  o.useEffect(() => () => window.clearTimeout(_.current), []), At();
  const B = o.useCallback((g) => {
    var M, I;
    return de.current === ((M = H.current) === null || M === void 0 ? void 0 : M.side) && vr(g, (I = H.current) === null || I === void 0 ? void 0 : I.area);
  }, []);
  return /* @__PURE__ */ o.createElement(Jn, {
    scope: n,
    searchRef: O,
    onItemEnter: o.useCallback((g) => {
      B(g) && g.preventDefault();
    }, [
      B
    ]),
    onItemLeave: o.useCallback((g) => {
      var M;
      B(g) || ((M = C.current) === null || M === void 0 || M.focus(), P(null));
    }, [
      B
    ]),
    onTriggerLeave: o.useCallback((g) => {
      B(g) && g.preventDefault();
    }, [
      B
    ]),
    pointerGraceTimerRef: le,
    onPointerGraceIntentChange: o.useCallback((g) => {
      H.current = g;
    }, [])
  }, /* @__PURE__ */ o.createElement(F, gt, /* @__PURE__ */ o.createElement(Ot, {
    asChild: !0,
    trapped: a,
    onMountAutoFocus: x(u, (g) => {
      var M;
      g.preventDefault(), (M = C.current) === null || M === void 0 || M.focus();
    }),
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ o.createElement(yt, {
    asChild: !0,
    disableOutsidePointerEvents: c,
    onEscapeKeyDown: d,
    onPointerDownOutside: b,
    onFocusOutside: l,
    onInteractOutside: v,
    onDismiss: h
  }, /* @__PURE__ */ o.createElement(tn, R({
    asChild: !0
  }, w, {
    dir: $.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: y,
    onCurrentTabStopIdChange: P,
    onEntryFocus: x(p, (g) => {
      $.isUsingKeyboardRef.current || g.preventDefault();
    })
  }), /* @__PURE__ */ o.createElement(xt, R({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": ur(m.open),
    "data-radix-menu-content": "",
    dir: $.dir
  }, E, s, {
    ref: A,
    style: {
      outline: "none",
      ...s.style
    },
    onKeyDown: x(s.onKeyDown, (g) => {
      const I = g.target.closest("[data-radix-menu-content]") === g.currentTarget, U = g.ctrlKey || g.altKey || g.metaKey, j = g.key.length === 1;
      I && (g.key === "Tab" && g.preventDefault(), !U && j && Et(g.key));
      const fe = C.current;
      if (g.target !== fe || !Wn.includes(g.key))
        return;
      g.preventDefault();
      const J = S().filter(
        (z) => !z.disabled
      ).map(
        (z) => z.ref.current
      );
      dt.includes(g.key) && J.reverse(), ir(J);
    }),
    onBlur: x(e.onBlur, (g) => {
      g.currentTarget.contains(g.target) || (window.clearTimeout(_.current), O.current = "");
    }),
    onPointerMove: x(e.onPointerMove, Me((g) => {
      const M = g.target, I = X.current !== g.clientX;
      if (g.currentTarget.contains(M) && I) {
        const U = g.clientX > X.current ? "right" : "left";
        de.current = U, X.current = g.clientX;
      }
    }))
  })))))));
}), Re = "MenuItem", Ye = "menu.itemSelect", rr = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { disabled: n = !1, onSelect: r, ...a } = e, u = o.useRef(null), i = Te(Re, e.__scopeMenu), c = mt(Re, e.__scopeMenu), p = K(t, u), d = o.useRef(!1), b = () => {
    const l = u.current;
    if (!n && l) {
      const v = new CustomEvent(Ye, {
        bubbles: !0,
        cancelable: !0
      });
      l.addEventListener(
        Ye,
        (h) => r == null ? void 0 : r(h),
        {
          once: !0
        }
      ), _t(l, v), v.defaultPrevented ? d.current = !1 : i.onClose();
    }
  };
  return /* @__PURE__ */ o.createElement(or, R({}, a, {
    ref: p,
    disabled: n,
    onClick: x(e.onClick, b),
    onPointerDown: (l) => {
      var v;
      (v = e.onPointerDown) === null || v === void 0 || v.call(e, l), d.current = !0;
    },
    onPointerUp: x(e.onPointerUp, (l) => {
      var v;
      d.current || (v = l.currentTarget) === null || v === void 0 || v.click();
    }),
    onKeyDown: x(e.onKeyDown, (l) => {
      const v = c.searchRef.current !== "";
      n || v && l.key === " " || Gn.includes(l.key) && (l.currentTarget.click(), l.preventDefault());
    })
  }));
}), or = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: a, ...u } = e, i = mt(Re, n), c = vt(n), p = o.useRef(null), d = K(t, p), [b, l] = o.useState(!1), [v, h] = o.useState("");
  return o.useEffect(() => {
    const f = p.current;
    if (f) {
      var s;
      h(((s = f.textContent) !== null && s !== void 0 ? s : "").trim());
    }
  }, [
    u.children
  ]), /* @__PURE__ */ o.createElement(xe.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: a ?? v
  }, /* @__PURE__ */ o.createElement(nn, R({
    asChild: !0
  }, c, {
    focusable: !r
  }), /* @__PURE__ */ o.createElement(q.div, R({
    role: "menuitem",
    "data-highlighted": b ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, u, {
    ref: d,
    onPointerMove: x(e.onPointerMove, Me((f) => {
      r ? i.onItemLeave(f) : (i.onItemEnter(f), f.defaultPrevented || f.currentTarget.focus());
    })),
    onPointerLeave: x(e.onPointerLeave, Me(
      (f) => i.onItemLeave(f)
    )),
    onFocus: x(
      e.onFocus,
      () => l(!0)
    ),
    onBlur: x(
      e.onBlur,
      () => l(!1)
    )
  }))));
}), cr = "MenuRadioGroup";
G(cr, {
  value: void 0,
  onValueChange: () => {
  }
});
const ar = "MenuItemIndicator";
G(ar, {
  checked: !1
});
const sr = "MenuSub";
G(sr);
function ur(e) {
  return e ? "open" : "closed";
}
function ir(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function lr(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function dr(e, t, n) {
  const a = t.length > 1 && Array.from(t).every(
    (d) => d === t[0]
  ) ? t[0] : t, u = n ? e.indexOf(n) : -1;
  let i = lr(e, Math.max(u, 0));
  a.length === 1 && (i = i.filter(
    (d) => d !== n
  ));
  const p = i.find(
    (d) => d.toLowerCase().startsWith(a.toLowerCase())
  );
  return p !== n ? p : void 0;
}
function fr(e, t) {
  const { x: n, y: r } = e;
  let a = !1;
  for (let u = 0, i = t.length - 1; u < t.length; i = u++) {
    const c = t[u].x, p = t[u].y, d = t[i].x, b = t[i].y;
    p > r != b > r && n < (d - c) * (r - p) / (b - p) + c && (a = !a);
  }
  return a;
}
function vr(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return fr(n, t);
}
function Me(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const pr = jn, mr = zn, $r = Qn, br = er, hr = rr, bt = "DropdownMenu", [gr, Kr] = se(bt, [
  ft
]), Q = ft(), [Er, ht] = gr(bt), Sr = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: a, defaultOpen: u, onOpenChange: i, modal: c = !0 } = e, p = Q(t), d = o.useRef(null), [b = !1, l] = He({
    prop: a,
    defaultProp: u,
    onChange: i
  });
  return /* @__PURE__ */ o.createElement(Er, {
    scope: t,
    triggerId: we(),
    triggerRef: d,
    contentId: we(),
    open: b,
    onOpenChange: l,
    onOpenToggle: o.useCallback(
      () => l(
        (v) => !v
      ),
      [
        l
      ]
    ),
    modal: c
  }, /* @__PURE__ */ o.createElement(pr, R({}, p, {
    open: b,
    onOpenChange: l,
    dir: r,
    modal: c
  }), n));
}, wr = "DropdownMenuTrigger", Cr = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...a } = e, u = ht(wr, n), i = Q(n);
  return /* @__PURE__ */ o.createElement(mr, R({
    asChild: !0
  }, i), /* @__PURE__ */ o.createElement(q.button, R({
    type: "button",
    id: u.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": u.open,
    "aria-controls": u.open ? u.contentId : void 0,
    "data-state": u.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, a, {
    ref: Tt(t, u.triggerRef),
    onPointerDown: x(e.onPointerDown, (c) => {
      !r && c.button === 0 && c.ctrlKey === !1 && (u.onOpenToggle(), u.open || c.preventDefault());
    }),
    onKeyDown: x(e.onKeyDown, (c) => {
      r || ([
        "Enter",
        " "
      ].includes(c.key) && u.onOpenToggle(), c.key === "ArrowDown" && u.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(c.key) && c.preventDefault());
    })
  })));
}), yr = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Q(t);
  return /* @__PURE__ */ o.createElement($r, R({}, r, n));
}, xr = "DropdownMenuContent", Rr = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ht(xr, n), u = Q(n), i = o.useRef(!1);
  return /* @__PURE__ */ o.createElement(br, R({
    id: a.contentId,
    "aria-labelledby": a.triggerId
  }, u, r, {
    ref: t,
    onCloseAutoFocus: x(e.onCloseAutoFocus, (c) => {
      var p;
      i.current || (p = a.triggerRef.current) === null || p === void 0 || p.focus(), i.current = !1, c.preventDefault();
    }),
    onInteractOutside: x(e.onInteractOutside, (c) => {
      const p = c.detail.originalEvent, d = p.button === 0 && p.ctrlKey === !0, b = p.button === 2 || d;
      (!a.modal || b) && (i.current = !0);
    }),
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), Mr = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = Q(n);
  return /* @__PURE__ */ o.createElement(hr, R({}, a, r, {
    ref: t
  }));
}), Ur = Sr, Gr = Cr, Br = yr, Wr = Rr, Vr = Mr;
export {
  Wr as $,
  Pr as S,
  Or as a,
  Ar as b,
  Vr as c,
  Ur as d,
  Gr as e,
  Br as f,
  Un as g,
  an as h,
  At as i,
  Ot as j,
  Nr as k,
  Fr as l,
  Lr as p,
  Dr as s,
  kr as u
};
