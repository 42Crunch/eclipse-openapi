import { e as r, R as I, a8 as ie, J as de, q as N, T as v, j as x, S as ue } from "./TriangleExclamation.Bx9Cjic4.js";
import { _ as g } from "./extends.hS2Bh-Yp.js";
function S(e, t, { checkForDefaultPrevented: o = !0 } = {}) {
  return function(c) {
    if (e == null || e(c), o === !1 || !c.defaultPrevented) return t == null ? void 0 : t(c);
  };
}
function L(e, t = []) {
  let o = [];
  function n(s, a) {
    const i = /* @__PURE__ */ r.createContext(a), l = o.length;
    o = [
      ...o,
      a
    ];
    function d(u) {
      const { scope: $, children: p, ...b } = u, h = ($ == null ? void 0 : $[e][l]) || i, m = r.useMemo(
        () => b,
        Object.values(b)
      );
      return /* @__PURE__ */ r.createElement(h.Provider, {
        value: m
      }, p);
    }
    function f(u, $) {
      const p = ($ == null ? void 0 : $[e][l]) || i, b = r.useContext(p);
      if (b) return b;
      if (a !== void 0) return a;
      throw new Error(`\`${u}\` must be used within \`${s}\``);
    }
    return d.displayName = s + "Provider", [
      d,
      f
    ];
  }
  const c = () => {
    const s = o.map((a) => /* @__PURE__ */ r.createContext(a));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || s;
      return r.useMemo(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: l
          }
        }),
        [
          i,
          l
        ]
      );
    };
  };
  return c.scopeName = e, [
    n,
    le(c, ...t)
  ];
}
function le(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const o = () => {
    const n = e.map(
      (c) => ({
        useScope: c(),
        scopeName: c.scopeName
      })
    );
    return function(s) {
      const a = n.reduce((i, { useScope: l, scopeName: d }) => {
        const u = l(s)[`__scope${d}`];
        return {
          ...i,
          ...u
        };
      }, {});
      return r.useMemo(
        () => ({
          [`__scope${t.scopeName}`]: a
        }),
        [
          a
        ]
      );
    };
  };
  return o.scopeName = t.scopeName, o;
}
function fe(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function K(...e) {
  return (t) => e.forEach(
    (o) => fe(o, t)
  );
}
function P(...e) {
  return r.useCallback(K(...e), e);
}
const w = /* @__PURE__ */ r.forwardRef((e, t) => {
  const { children: o, ...n } = e, c = r.Children.toArray(o), s = c.find(pe);
  if (s) {
    const a = s.props.children, i = c.map((l) => l === s ? r.Children.count(a) > 1 ? r.Children.only(null) : /* @__PURE__ */ r.isValidElement(a) ? a.props.children : null : l);
    return /* @__PURE__ */ r.createElement(D, g({}, n, {
      ref: t
    }), /* @__PURE__ */ r.isValidElement(a) ? /* @__PURE__ */ r.cloneElement(a, void 0, i) : null);
  }
  return /* @__PURE__ */ r.createElement(D, g({}, n, {
    ref: t
  }), o);
});
w.displayName = "Slot";
const D = /* @__PURE__ */ r.forwardRef((e, t) => {
  const { children: o, ...n } = e;
  return /* @__PURE__ */ r.isValidElement(o) ? /* @__PURE__ */ r.cloneElement(o, {
    ...$e(n, o.props),
    ref: K(t, o.ref)
  }) : r.Children.count(o) > 1 ? r.Children.only(null) : null;
});
D.displayName = "SlotClone";
const be = ({ children: e }) => /* @__PURE__ */ r.createElement(r.Fragment, null, e);
function pe(e) {
  return /* @__PURE__ */ r.isValidElement(e) && e.type === be;
}
function $e(e, t) {
  const o = {
    ...t
  };
  for (const n in t) {
    const c = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o[n] = (...i) => {
      s == null || s(...i), c == null || c(...i);
    } : n === "style" ? o[n] = {
      ...c,
      ...s
    } : n === "className" && (o[n] = [
      c,
      s
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...o
  };
}
function ve(e) {
  const t = e + "CollectionProvider", [o, n] = L(t), [c, s] = o(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), a = (p) => {
    const { scope: b, children: h } = p, m = I.useRef(null), C = I.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ I.createElement(c, {
      scope: b,
      itemMap: C,
      collectionRef: m
    }, h);
  }, i = e + "CollectionSlot", l = /* @__PURE__ */ I.forwardRef((p, b) => {
    const { scope: h, children: m } = p, C = s(i, h), E = P(b, C.collectionRef);
    return /* @__PURE__ */ I.createElement(w, {
      ref: E
    }, m);
  }), d = e + "CollectionItemSlot", f = "data-radix-collection-item", u = /* @__PURE__ */ I.forwardRef((p, b) => {
    const { scope: h, children: m, ...C } = p, E = I.useRef(null), y = P(b, E), R = s(d, h);
    return I.useEffect(() => (R.itemMap.set(E, {
      ref: E,
      ...C
    }), () => void R.itemMap.delete(E))), /* @__PURE__ */ I.createElement(w, {
      [f]: "",
      ref: y
    }, m);
  });
  function $(p) {
    const b = s(e + "CollectionConsumer", p);
    return I.useCallback(() => {
      const m = b.collectionRef.current;
      if (!m) return [];
      const C = Array.from(m.querySelectorAll(`[${f}]`));
      return Array.from(b.itemMap.values()).sort(
        (R, T) => C.indexOf(R.ref.current) - C.indexOf(T.ref.current)
      );
    }, [
      b.collectionRef,
      b.itemMap
    ]);
  }
  return [
    {
      Provider: a,
      Slot: l,
      ItemSlot: u
    },
    $,
    n
  ];
}
const k = globalThis != null && globalThis.document ? r.useLayoutEffect : () => {
}, me = ie.useId || (() => {
});
let xe = 0;
function q(e) {
  const [t, o] = r.useState(me());
  return k(() => {
    o(
      (n) => n ?? String(xe++)
    );
  }, [
    e
  ]), t ? `radix-${t}` : "";
}
const ge = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], _ = ge.reduce((e, t) => {
  const o = /* @__PURE__ */ r.forwardRef((n, c) => {
    const { asChild: s, ...a } = n, i = s ? w : t;
    return r.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ r.createElement(i, g({}, a, {
      ref: c
    }));
  });
  return o.displayName = `Primitive.${t}`, {
    ...e,
    [t]: o
  };
}, {});
function U(e) {
  const t = r.useRef(e);
  return r.useEffect(() => {
    t.current = e;
  }), r.useMemo(
    () => (...o) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...o);
    },
    []
  );
}
function z({ prop: e, defaultProp: t, onChange: o = () => {
} }) {
  const [n, c] = he({
    defaultProp: t,
    onChange: o
  }), s = e !== void 0, a = s ? e : n, i = U(o), l = r.useCallback((d) => {
    if (s) {
      const u = typeof d == "function" ? d(e) : d;
      u !== e && i(u);
    } else c(d);
  }, [
    s,
    e,
    c,
    i
  ]);
  return [
    a,
    l
  ];
}
function he({ defaultProp: e, onChange: t }) {
  const o = r.useState(e), [n] = o, c = r.useRef(n), s = U(t);
  return r.useEffect(() => {
    c.current !== n && (s(n), c.current = n);
  }, [
    n,
    c,
    s
  ]), o;
}
const Ce = /* @__PURE__ */ r.createContext(void 0);
function Y(e) {
  const t = r.useContext(Ce);
  return e || t || "ltr";
}
const O = "rovingFocusGroup.onEntryFocus", Ee = {
  bubbles: !1,
  cancelable: !0
}, B = "RovingFocusGroup", [j, J, Te] = ve(B), [Ie, Z] = L(B, [
  Te
]), [Se, Re] = Ie(B), Ae = /* @__PURE__ */ r.forwardRef((e, t) => /* @__PURE__ */ r.createElement(j.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ r.createElement(j.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ r.createElement(Ne, g({}, e, {
  ref: t
}))))), Ne = /* @__PURE__ */ r.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: o, orientation: n, loop: c = !1, dir: s, currentTabStopId: a, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: l, onEntryFocus: d, ...f } = e, u = r.useRef(null), $ = P(t, u), p = Y(s), [b = null, h] = z({
    prop: a,
    defaultProp: i,
    onChange: l
  }), [m, C] = r.useState(!1), E = U(d), y = J(o), R = r.useRef(!1);
  return r.useEffect(() => {
    const T = u.current;
    if (T)
      return T.addEventListener(O, E), () => T.removeEventListener(O, E);
  }, [
    E
  ]), /* @__PURE__ */ r.createElement(Se, {
    scope: o,
    orientation: n,
    dir: p,
    loop: c,
    currentTabStopId: b,
    onItemFocus: r.useCallback(
      (T) => h(T),
      [
        h
      ]
    ),
    onItemShiftTab: r.useCallback(
      () => C(!0),
      []
    )
  }, /* @__PURE__ */ r.createElement(_.div, g({
    tabIndex: m ? -1 : 0,
    "data-orientation": n
  }, f, {
    ref: $,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: S(e.onMouseDown, () => {
      R.current = !0;
    }),
    onFocus: S(e.onFocus, (T) => {
      const re = !R.current;
      if (T.target === T.currentTarget && re && !m) {
        const G = new CustomEvent(O, Ee);
        if (T.currentTarget.dispatchEvent(G), !G.defaultPrevented) {
          const F = y().filter(
            (A) => A.focusable
          ), ce = F.find(
            (A) => A.active
          ), ae = F.find(
            (A) => A.id === b
          ), se = [
            ce,
            ae,
            ...F
          ].filter(Boolean).map(
            (A) => A.ref.current
          );
          H(se);
        }
      }
      R.current = !1;
    }),
    onBlur: S(
      e.onBlur,
      () => C(!1)
    )
  })));
}), _e = "RovingFocusGroupItem", ye = /* @__PURE__ */ r.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: o, focusable: n = !0, active: c = !1, ...s } = e, a = q(), i = Re(_e, o), l = i.currentTabStopId === a, d = J(o);
  return /* @__PURE__ */ r.createElement(j.ItemSlot, {
    scope: o,
    id: a,
    focusable: n,
    active: c
  }, /* @__PURE__ */ r.createElement(_.span, g({
    tabIndex: l ? 0 : -1,
    "data-orientation": i.orientation
  }, s, {
    ref: t,
    onMouseDown: S(e.onMouseDown, (f) => {
      n ? i.onItemFocus(a) : f.preventDefault();
    }),
    onFocus: S(
      e.onFocus,
      () => i.onItemFocus(a)
    ),
    onKeyDown: S(e.onKeyDown, (f) => {
      if (f.key === "Tab" && f.shiftKey) {
        i.onItemShiftTab();
        return;
      }
      if (f.target !== f.currentTarget) return;
      const u = we(f, i.orientation, i.dir);
      if (u !== void 0) {
        f.preventDefault();
        let p = d().filter(
          (b) => b.focusable
        ).map(
          (b) => b.ref.current
        );
        if (u === "last") p.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && p.reverse();
          const b = p.indexOf(f.currentTarget);
          p = i.loop ? Fe(p, b + 1) : p.slice(b + 1);
        }
        setTimeout(
          () => H(p)
        );
      }
    })
  })));
}), Me = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Pe(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function we(e, t, o) {
  const n = Pe(e.key, o);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(n)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(n)))
    return Me[n];
}
function H(e) {
  const t = document.activeElement;
  for (const o of e)
    if (o === t || (o.focus(), document.activeElement !== t)) return;
}
function Fe(e, t) {
  return e.map(
    (o, n) => e[(t + n) % e.length]
  );
}
const Oe = Ae, De = ye;
function ke(e, t) {
  return r.useReducer((o, n) => {
    const c = t[o][n];
    return c ?? o;
  }, e);
}
const Q = (e) => {
  const { present: t, children: o } = e, n = je(t), c = typeof o == "function" ? o({
    present: n.isPresent
  }) : r.Children.only(o), s = P(n.ref, c.ref);
  return typeof o == "function" || n.isPresent ? /* @__PURE__ */ r.cloneElement(c, {
    ref: s
  }) : null;
};
Q.displayName = "Presence";
function je(e) {
  const [t, o] = r.useState(), n = r.useRef({}), c = r.useRef(e), s = r.useRef("none"), a = e ? "mounted" : "unmounted", [i, l] = ke(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return r.useEffect(() => {
    const d = M(n.current);
    s.current = i === "mounted" ? d : "none";
  }, [
    i
  ]), k(() => {
    const d = n.current, f = c.current;
    if (f !== e) {
      const $ = s.current, p = M(d);
      e ? l("MOUNT") : p === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && $ !== p ? "ANIMATION_OUT" : "UNMOUNT"), c.current = e;
    }
  }, [
    e,
    l
  ]), k(() => {
    if (t) {
      const d = (u) => {
        const p = M(n.current).includes(u.animationName);
        u.target === t && p && de.flushSync(
          () => l("ANIMATION_END")
        );
      }, f = (u) => {
        u.target === t && (s.current = M(n.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [
    t,
    l
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(i),
    ref: r.useCallback((d) => {
      d && (n.current = getComputedStyle(d)), o(d);
    }, [])
  };
}
function M(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const W = "Tabs", [Le, dt] = L(W, [
  Z
]), X = Z(), [Ue, V] = Le(W), Be = /* @__PURE__ */ r.forwardRef((e, t) => {
  const { __scopeTabs: o, value: n, onValueChange: c, defaultValue: s, orientation: a = "horizontal", dir: i, activationMode: l = "automatic", ...d } = e, f = Y(i), [u, $] = z({
    prop: n,
    onChange: c,
    defaultProp: s
  });
  return /* @__PURE__ */ r.createElement(Ue, {
    scope: o,
    baseId: q(),
    value: u,
    onValueChange: $,
    orientation: a,
    dir: f,
    activationMode: l
  }, /* @__PURE__ */ r.createElement(_.div, g({
    dir: f,
    "data-orientation": a
  }, d, {
    ref: t
  })));
}), Ve = "TabsList", Ge = /* @__PURE__ */ r.forwardRef((e, t) => {
  const { __scopeTabs: o, loop: n = !0, ...c } = e, s = V(Ve, o), a = X(o);
  return /* @__PURE__ */ r.createElement(Oe, g({
    asChild: !0
  }, a, {
    orientation: s.orientation,
    dir: s.dir,
    loop: n
  }), /* @__PURE__ */ r.createElement(_.div, g({
    role: "tablist",
    "aria-orientation": s.orientation
  }, c, {
    ref: t
  })));
}), Ke = "TabsTrigger", qe = /* @__PURE__ */ r.forwardRef((e, t) => {
  const { __scopeTabs: o, value: n, disabled: c = !1, ...s } = e, a = V(Ke, o), i = X(o), l = ee(a.baseId, n), d = te(a.baseId, n), f = n === a.value;
  return /* @__PURE__ */ r.createElement(De, g({
    asChild: !0
  }, i, {
    focusable: !c,
    active: f
  }), /* @__PURE__ */ r.createElement(_.button, g({
    type: "button",
    role: "tab",
    "aria-selected": f,
    "aria-controls": d,
    "data-state": f ? "active" : "inactive",
    "data-disabled": c ? "" : void 0,
    disabled: c,
    id: l
  }, s, {
    ref: t,
    onMouseDown: S(e.onMouseDown, (u) => {
      !c && u.button === 0 && u.ctrlKey === !1 ? a.onValueChange(n) : u.preventDefault();
    }),
    onKeyDown: S(e.onKeyDown, (u) => {
      [
        " ",
        "Enter"
      ].includes(u.key) && a.onValueChange(n);
    }),
    onFocus: S(e.onFocus, () => {
      const u = a.activationMode !== "manual";
      !f && !c && u && a.onValueChange(n);
    })
  })));
}), ze = "TabsContent", Ye = /* @__PURE__ */ r.forwardRef((e, t) => {
  const { __scopeTabs: o, value: n, forceMount: c, children: s, ...a } = e, i = V(ze, o), l = ee(i.baseId, n), d = te(i.baseId, n), f = n === i.value, u = r.useRef(f);
  return r.useEffect(() => {
    const $ = requestAnimationFrame(
      () => u.current = !1
    );
    return () => cancelAnimationFrame($);
  }, []), /* @__PURE__ */ r.createElement(
    Q,
    {
      present: c || f
    },
    ({ present: $ }) => /* @__PURE__ */ r.createElement(_.div, g({
      "data-state": f ? "active" : "inactive",
      "data-orientation": i.orientation,
      role: "tabpanel",
      "aria-labelledby": l,
      hidden: !$,
      id: d,
      tabIndex: 0
    }, a, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: u.current ? "0s" : void 0
      }
    }), $ && s)
  );
});
function ee(e, t) {
  return `${e}-trigger-${t}`;
}
function te(e, t) {
  return `${e}-content-${t}`;
}
const Je = Be, Ze = Ge, ne = qe, He = Ye;
function ut({
  tabs: e,
  activeTab: t,
  setActiveTab: o,
  menu: n,
  round: c
}) {
  return o !== void 0 ? /* @__PURE__ */ x.jsx(
    oe,
    {
      tabs: e,
      activeTab: t,
      setActiveTab: o,
      menu: n,
      round: c
    }
  ) : /* @__PURE__ */ x.jsx(Qe, { tabs: e, menu: n, round: c });
}
function Qe({
  tabs: e,
  menu: t,
  round: o
}) {
  var s, a;
  const [n, c] = r.useState((a = (s = e.filter((i) => !i.disabled)) == null ? void 0 : s[0]) == null ? void 0 : a.id);
  return r.useEffect(() => {
    var i, l;
    e.filter((d) => d.id === n).length === 0 && c((l = (i = e.filter((d) => !d.disabled)) == null ? void 0 : i[0]) == null ? void 0 : l.id);
  }, [e]), n === void 0 ? null : /* @__PURE__ */ x.jsx(
    oe,
    {
      tabs: e,
      activeTab: n,
      setActiveTab: c,
      menu: t,
      round: o
    }
  );
}
function oe({
  tabs: e,
  activeTab: t,
  setActiveTab: o,
  menu: n,
  round: c
}) {
  const s = e.filter((a) => !a.disabled);
  return /* @__PURE__ */ x.jsxs(Je, { value: t, onValueChange: o, children: [
    /* @__PURE__ */ x.jsxs(Xe, { children: [
      s.map((a) => {
        const i = c ? tt : et;
        return /* @__PURE__ */ x.jsxs(i, { value: a.id, children: [
          /* @__PURE__ */ x.jsx("span", { className: "title", children: a.title }),
          We(a),
          a.menu && /* @__PURE__ */ x.jsx(ct, { className: "menu", children: a.menu })
        ] }, a.id);
      }),
      n && /* @__PURE__ */ x.jsx(rt, { children: n })
    ] }),
    s.map((a) => /* @__PURE__ */ x.jsx(He, { value: a.id, children: a.content }, a.id))
  ] });
}
function We(e) {
  return e.counter ? e.counterKind === "error" ? /* @__PURE__ */ x.jsxs(ot, { children: [
    e.counter,
    /* @__PURE__ */ x.jsx(ue, {})
  ] }) : /* @__PURE__ */ x.jsx(nt, { children: e.counter }) : null;
}
const Xe = N(Ze)`
  display: flex;
  border-bottom: 1px solid var(${v.tabBorder});
  padding-left: 15px;
`, et = N(ne)`
  border: none;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 16px;
  color: var(${v.tabInactiveForeground});
  background: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &[data-state="active"] {
    color: var(${v.tabActiveForeground});
    border-bottom: 3px solid var(${v.buttonBackground});
    cursor: inherit;
  }

  &[data-state="active"] > span.title {
    border: 1px solid var(${v.contrastActiveBorder});
  }

  &[data-state="active"] > span.menu {
    visibility: visible;
  }
`, tt = N(ne)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  border-bottom: 3px solid transparent;
  padding: 0;
  background-color: transparent;

  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 16px;

  > span.title {
    border-radius: 8px;
    padding: 4px 16px;

    color: var(${v.tabInactiveForeground});
    background-color: var(${v.computedOne});
    cursor: pointer;
  }

  &[data-state="active"] > span.title {
    border: 1px solid var(${v.contrastActiveBorder});
  }

  &[data-state="active"] > span.title {
    color: var(${v.tabActiveForeground});
    cursor: inherit;
  }

  &[data-state="active"] {
    color: var(${v.tabActiveForeground});
    border-bottom: 3px solid var(${v.buttonBackground});
    cursor: inherit;
  }

  &[data-state="active"] > span.menu {
    visibility: visible;
  }
`, nt = N.span`
  background-color: var(${v.badgeBackground});
  color: var(${v.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
`, ot = N.span`
  background-color: var(${v.errorBackground});
  color: var(${v.errorForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
  gap: 3px;
  & > svg {
    fill: var(${v.errorForeground});
    width: 10px;
    height: 10px;
  }
`, rt = N.div`
  flex: 1;
  display: flex;
  justify-content: end;
`, ct = N.span`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  cursor: pointer;
  position: relative;
  left: 20px;
  top: 0px;
  > svg {
    width: 14px;
    height: 14px;
    fill: var(${v.foreground});
  }
`;
export {
  He as $,
  ut as T
};
