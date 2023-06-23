import { r as n, _ as v, R as h, $ as ce, o as se, d as B, T as N } from "./styled-components.browser.esm.b4077a0f.js";
function x(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(c) {
    if (e == null || e(c), r === !1 || !c.defaultPrevented)
      return t == null ? void 0 : t(c);
  };
}
function L(e, t = []) {
  let r = [];
  function o(s, a) {
    const i = /* @__PURE__ */ n.createContext(a), l = r.length;
    r = [
      ...r,
      a
    ];
    function d(u) {
      const { scope: p, children: $, ...b } = u, E = (p == null ? void 0 : p[e][l]) || i, m = n.useMemo(
        () => b,
        Object.values(b)
      );
      return /* @__PURE__ */ n.createElement(E.Provider, {
        value: m
      }, $);
    }
    function f(u, p) {
      const $ = (p == null ? void 0 : p[e][l]) || i, b = n.useContext($);
      if (b)
        return b;
      if (a !== void 0)
        return a;
      throw new Error(`\`${u}\` must be used within \`${s}\``);
    }
    return d.displayName = s + "Provider", [
      d,
      f
    ];
  }
  const c = () => {
    const s = r.map((a) => /* @__PURE__ */ n.createContext(a));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || s;
      return n.useMemo(
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
    o,
    ae(c, ...t)
  ];
}
function ae(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const r = () => {
    const o = e.map(
      (c) => ({
        useScope: c(),
        scopeName: c.scopeName
      })
    );
    return function(s) {
      const a = o.reduce((i, { useScope: l, scopeName: d }) => {
        const u = l(s)[`__scope${d}`];
        return {
          ...i,
          ...u
        };
      }, {});
      return n.useMemo(
        () => ({
          [`__scope${t.scopeName}`]: a
        }),
        [
          a
        ]
      );
    };
  };
  return r.scopeName = t.scopeName, r;
}
function ie(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function K(...e) {
  return (t) => e.forEach(
    (r) => ie(r, t)
  );
}
function M(...e) {
  return n.useCallback(K(...e), e);
}
const P = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { children: r, ...o } = e, c = n.Children.toArray(r), s = c.find(de);
  if (s) {
    const a = s.props.children, i = c.map((l) => l === s ? n.Children.count(a) > 1 ? n.Children.only(null) : /* @__PURE__ */ n.isValidElement(a) ? a.props.children : null : l);
    return /* @__PURE__ */ n.createElement(F, v({}, o, {
      ref: t
    }), /* @__PURE__ */ n.isValidElement(a) ? /* @__PURE__ */ n.cloneElement(a, void 0, i) : null);
  }
  return /* @__PURE__ */ n.createElement(F, v({}, o, {
    ref: t
  }), r);
});
P.displayName = "Slot";
const F = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { children: r, ...o } = e;
  return /* @__PURE__ */ n.isValidElement(r) ? /* @__PURE__ */ n.cloneElement(r, {
    ...fe(o, r.props),
    ref: K(t, r.ref)
  }) : n.Children.count(r) > 1 ? n.Children.only(null) : null;
});
F.displayName = "SlotClone";
const ue = ({ children: e }) => /* @__PURE__ */ n.createElement(n.Fragment, null, e);
function de(e) {
  return /* @__PURE__ */ n.isValidElement(e) && e.type === ue;
}
function fe(e, t) {
  const r = {
    ...t
  };
  for (const o in t) {
    const c = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r[o] = (...i) => {
      s == null || s(...i), c == null || c(...i);
    } : o === "style" ? r[o] = {
      ...c,
      ...s
    } : o === "className" && (r[o] = [
      c,
      s
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
function le(e) {
  const t = e + "CollectionProvider", [r, o] = L(t), [c, s] = r(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), a = ($) => {
    const { scope: b, children: E } = $, m = h.useRef(null), C = h.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ h.createElement(c, {
      scope: b,
      itemMap: C,
      collectionRef: m
    }, E);
  }, i = e + "CollectionSlot", l = /* @__PURE__ */ h.forwardRef(($, b) => {
    const { scope: E, children: m } = $, C = s(i, E), g = M(b, C.collectionRef);
    return /* @__PURE__ */ h.createElement(P, {
      ref: g
    }, m);
  }), d = e + "CollectionItemSlot", f = "data-radix-collection-item", u = /* @__PURE__ */ h.forwardRef(($, b) => {
    const { scope: E, children: m, ...C } = $, g = h.useRef(null), A = M(b, g), I = s(d, E);
    return h.useEffect(() => (I.itemMap.set(g, {
      ref: g,
      ...C
    }), () => void I.itemMap.delete(g))), /* @__PURE__ */ h.createElement(P, {
      [f]: "",
      ref: A
    }, m);
  });
  function p($) {
    const b = s(e + "CollectionConsumer", $);
    return h.useCallback(() => {
      const m = b.collectionRef.current;
      if (!m)
        return [];
      const C = Array.from(m.querySelectorAll(`[${f}]`));
      return Array.from(b.itemMap.values()).sort(
        (I, T) => C.indexOf(I.ref.current) - C.indexOf(T.ref.current)
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
    p,
    o
  ];
}
const O = globalThis != null && globalThis.document ? n.useLayoutEffect : () => {
}, be = ce["useId".toString()] || (() => {
});
let $e = 0;
function Y(e) {
  const [t, r] = n.useState(be());
  return O(() => {
    e || r(
      (o) => o ?? String($e++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const pe = [
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
], R = pe.reduce((e, t) => {
  const r = /* @__PURE__ */ n.forwardRef((o, c) => {
    const { asChild: s, ...a } = o, i = s ? P : t;
    return n.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ n.createElement(i, v({}, a, {
      ref: c
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {});
function U(e) {
  const t = n.useRef(e);
  return n.useEffect(() => {
    t.current = e;
  }), n.useMemo(
    () => (...r) => {
      var o;
      return (o = t.current) === null || o === void 0 ? void 0 : o.call(t, ...r);
    },
    []
  );
}
function j({ prop: e, defaultProp: t, onChange: r = () => {
} }) {
  const [o, c] = me({
    defaultProp: t,
    onChange: r
  }), s = e !== void 0, a = s ? e : o, i = U(r), l = n.useCallback((d) => {
    if (s) {
      const u = typeof d == "function" ? d(e) : d;
      u !== e && i(u);
    } else
      c(d);
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
function me({ defaultProp: e, onChange: t }) {
  const r = n.useState(e), [o] = r, c = n.useRef(o), s = U(t);
  return n.useEffect(() => {
    c.current !== o && (s(o), c.current = o);
  }, [
    o,
    c,
    s
  ]), r;
}
const ve = /* @__PURE__ */ n.createContext(void 0);
function q(e) {
  const t = n.useContext(ve);
  return e || t || "ltr";
}
const y = "rovingFocusGroup.onEntryFocus", Ee = {
  bubbles: !1,
  cancelable: !0
}, V = "RovingFocusGroup", [D, z, Ce] = le(V), [ge, Z] = L(V, [
  Ce
]), [Te, he] = ge(V), xe = /* @__PURE__ */ n.forwardRef((e, t) => /* @__PURE__ */ n.createElement(D.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ n.createElement(D.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ n.createElement(Ie, v({}, e, {
  ref: t
}))))), Ie = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: r, orientation: o, loop: c = !1, dir: s, currentTabStopId: a, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: l, onEntryFocus: d, ...f } = e, u = n.useRef(null), p = M(t, u), $ = q(s), [b = null, E] = j({
    prop: a,
    defaultProp: i,
    onChange: l
  }), [m, C] = n.useState(!1), g = U(d), A = z(r), I = n.useRef(!1);
  return n.useEffect(() => {
    const T = u.current;
    if (T)
      return T.addEventListener(y, g), () => T.removeEventListener(y, g);
  }, [
    g
  ]), /* @__PURE__ */ n.createElement(Te, {
    scope: r,
    orientation: o,
    dir: $,
    loop: c,
    currentTabStopId: b,
    onItemFocus: n.useCallback(
      (T) => E(T),
      [
        E
      ]
    ),
    onItemShiftTab: n.useCallback(
      () => C(!0),
      []
    )
  }, /* @__PURE__ */ n.createElement(R.div, v({
    tabIndex: m ? -1 : 0,
    "data-orientation": o
  }, f, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: x(e.onMouseDown, () => {
      I.current = !0;
    }),
    onFocus: x(e.onFocus, (T) => {
      const te = !I.current;
      if (T.target === T.currentTarget && te && !m) {
        const G = new CustomEvent(y, Ee);
        if (T.currentTarget.dispatchEvent(G), !G.defaultPrevented) {
          const w = A().filter(
            (S) => S.focusable
          ), ne = w.find(
            (S) => S.active
          ), oe = w.find(
            (S) => S.id === b
          ), re = [
            ne,
            oe,
            ...w
          ].filter(Boolean).map(
            (S) => S.ref.current
          );
          H(re);
        }
      }
      I.current = !1;
    }),
    onBlur: x(
      e.onBlur,
      () => C(!1)
    )
  })));
}), Se = "RovingFocusGroupItem", Re = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: r, focusable: o = !0, active: c = !1, ...s } = e, a = Y(), i = he(Se, r), l = i.currentTabStopId === a, d = z(r);
  return /* @__PURE__ */ n.createElement(D.ItemSlot, {
    scope: r,
    id: a,
    focusable: o,
    active: c
  }, /* @__PURE__ */ n.createElement(R.span, v({
    tabIndex: l ? 0 : -1,
    "data-orientation": i.orientation
  }, s, {
    ref: t,
    onMouseDown: x(e.onMouseDown, (f) => {
      o ? i.onItemFocus(a) : f.preventDefault();
    }),
    onFocus: x(
      e.onFocus,
      () => i.onItemFocus(a)
    ),
    onKeyDown: x(e.onKeyDown, (f) => {
      if (f.key === "Tab" && f.shiftKey) {
        i.onItemShiftTab();
        return;
      }
      if (f.target !== f.currentTarget)
        return;
      const u = Ne(f, i.orientation, i.dir);
      if (u !== void 0) {
        f.preventDefault();
        let $ = d().filter(
          (b) => b.focusable
        ).map(
          (b) => b.ref.current
        );
        if (u === "last")
          $.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && $.reverse();
          const b = $.indexOf(f.currentTarget);
          $ = i.loop ? Me($, b + 1) : $.slice(b + 1);
        }
        setTimeout(
          () => H($)
        );
      }
    })
  })));
}), Ae = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function _e(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ne(e, t, r) {
  const o = _e(e.key, r);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(o)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(o)))
    return Ae[o];
}
function H(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t))
      return;
}
function Me(e, t) {
  return e.map(
    (r, o) => e[(t + o) % e.length]
  );
}
const Pe = xe, we = Re;
function ye(e, t) {
  return n.useReducer((r, o) => {
    const c = t[r][o];
    return c ?? r;
  }, e);
}
const J = (e) => {
  const { present: t, children: r } = e, o = Fe(t), c = typeof r == "function" ? r({
    present: o.isPresent
  }) : n.Children.only(r), s = M(o.ref, c.ref);
  return typeof r == "function" || o.isPresent ? /* @__PURE__ */ n.cloneElement(c, {
    ref: s
  }) : null;
};
J.displayName = "Presence";
function Fe(e) {
  const [t, r] = n.useState(), o = n.useRef({}), c = n.useRef(e), s = n.useRef("none"), a = e ? "mounted" : "unmounted", [i, l] = ye(a, {
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
  return n.useEffect(() => {
    const d = _(o.current);
    s.current = i === "mounted" ? d : "none";
  }, [
    i
  ]), O(() => {
    const d = o.current, f = c.current;
    if (f !== e) {
      const p = s.current, $ = _(d);
      e ? l("MOUNT") : $ === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && p !== $ ? "ANIMATION_OUT" : "UNMOUNT"), c.current = e;
    }
  }, [
    e,
    l
  ]), O(() => {
    if (t) {
      const d = (u) => {
        const $ = _(o.current).includes(u.animationName);
        u.target === t && $ && se.flushSync(
          () => l("ANIMATION_END")
        );
      }, f = (u) => {
        u.target === t && (s.current = _(o.current));
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
    ref: n.useCallback((d) => {
      d && (o.current = getComputedStyle(d)), r(d);
    }, [])
  };
}
function _(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const Q = "Tabs", [Oe, Ze] = L(Q, [
  Z
]), W = Z(), [De, k] = Oe(Q), Le = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeTabs: r, value: o, onValueChange: c, defaultValue: s, orientation: a = "horizontal", dir: i, activationMode: l = "automatic", ...d } = e, f = q(i), [u, p] = j({
    prop: o,
    onChange: c,
    defaultProp: s
  });
  return /* @__PURE__ */ n.createElement(De, {
    scope: r,
    baseId: Y(),
    value: u,
    onValueChange: p,
    orientation: a,
    dir: f,
    activationMode: l
  }, /* @__PURE__ */ n.createElement(R.div, v({
    dir: f,
    "data-orientation": a
  }, d, {
    ref: t
  })));
}), Ue = "TabsList", Ve = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeTabs: r, loop: o = !0, ...c } = e, s = k(Ue, r), a = W(r);
  return /* @__PURE__ */ n.createElement(Pe, v({
    asChild: !0
  }, a, {
    orientation: s.orientation,
    dir: s.dir,
    loop: o
  }), /* @__PURE__ */ n.createElement(R.div, v({
    role: "tablist",
    "aria-orientation": s.orientation
  }, c, {
    ref: t
  })));
}), ke = "TabsTrigger", Ge = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeTabs: r, value: o, disabled: c = !1, ...s } = e, a = k(ke, r), i = W(r), l = X(a.baseId, o), d = ee(a.baseId, o), f = o === a.value;
  return /* @__PURE__ */ n.createElement(we, v({
    asChild: !0
  }, i, {
    focusable: !c,
    active: f
  }), /* @__PURE__ */ n.createElement(R.button, v({
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
    onMouseDown: x(e.onMouseDown, (u) => {
      !c && u.button === 0 && u.ctrlKey === !1 ? a.onValueChange(o) : u.preventDefault();
    }),
    onKeyDown: x(e.onKeyDown, (u) => {
      [
        " ",
        "Enter"
      ].includes(u.key) && a.onValueChange(o);
    }),
    onFocus: x(e.onFocus, () => {
      const u = a.activationMode !== "manual";
      !f && !c && u && a.onValueChange(o);
    })
  })));
}), Be = "TabsContent", Ke = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeTabs: r, value: o, forceMount: c, children: s, ...a } = e, i = k(Be, r), l = X(i.baseId, o), d = ee(i.baseId, o), f = o === i.value, u = n.useRef(f);
  return n.useEffect(() => {
    const p = requestAnimationFrame(
      () => u.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ n.createElement(
    J,
    {
      present: c || f
    },
    ({ present: p }) => /* @__PURE__ */ n.createElement(R.div, v({
      "data-state": f ? "active" : "inactive",
      "data-orientation": i.orientation,
      role: "tabpanel",
      "aria-labelledby": l,
      hidden: !p,
      id: d,
      tabIndex: 0
    }, a, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: u.current ? "0s" : void 0
      }
    }), p && s)
  );
});
function X(e, t) {
  return `${e}-trigger-${t}`;
}
function ee(e, t) {
  return `${e}-content-${t}`;
}
const He = Le, Ye = Ve, je = Ge, Je = Ke, Qe = B(Ye)`
  display: flex;
  border-bottom: 1px solid var(${N.tabBorder});
  padding-left: 15px;
`, We = B(je)`
  border: none;
  padding: 0.25rem 1rem;
  color: var(${N.tabInactiveForeground});
  background: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;

  &[data-state="active"] {
    color: var(${N.tabActiveForeground});
    border-bottom: 3px solid var(${N.buttonBackground});
    cursor: inherit;
  }
`;
export {
  He as $,
  Qe as T,
  We as a,
  Je as b
};
