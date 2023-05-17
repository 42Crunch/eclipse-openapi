import { c as ae, u as ie, r as n, R as x, $ as de, n as ue, T as N, j as B } from "./ThemeStyles.c0d84d2f.js";
import { u as fe } from "./useDispatch.43a2a81a.js";
import { s as K } from "./styled-components.browser.esm.5667ec00.js";
import { _ as v } from "./index.esm.97fc0c41.js";
const le = {
  ready: !1,
  data: { default: {}, secrets: {} }
}, z = ae({
  name: "env",
  initialState: le,
  reducers: {
    loadEnv: (e, t) => {
      t.payload.default && (e.data.default = t.payload.default), t.payload.secrets && (e.data.secrets = t.payload.secrets), e.ready = !0;
    },
    saveEnv: (e, t) => {
      e.data[t.payload.name] = t.payload.environment;
    },
    showEnvWindow: (e, t) => {
    }
  }
}), { loadEnv: ot, saveEnv: rt, showEnvWindow: ct } = z.actions, st = fe, at = ie, it = z.reducer;
function T(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
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
    function u(d) {
      const { scope: p, children: $, ...b } = d, E = (p == null ? void 0 : p[e][l]) || i, m = n.useMemo(
        () => b,
        Object.values(b)
      );
      return /* @__PURE__ */ n.createElement(E.Provider, {
        value: m
      }, $);
    }
    function f(d, p) {
      const $ = (p == null ? void 0 : p[e][l]) || i, b = n.useContext($);
      if (b)
        return b;
      if (a !== void 0)
        return a;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return u.displayName = s + "Provider", [
      u,
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
    be(c, ...t)
  ];
}
function be(...e) {
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
      const a = o.reduce((i, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return {
          ...i,
          ...d
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
function $e(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function j(...e) {
  return (t) => e.forEach(
    (r) => $e(r, t)
  );
}
function w(...e) {
  return n.useCallback(j(...e), e);
}
const M = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { children: r, ...o } = e, c = n.Children.toArray(r), s = c.find(me);
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
M.displayName = "Slot";
const F = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { children: r, ...o } = e;
  return /* @__PURE__ */ n.isValidElement(r) ? /* @__PURE__ */ n.cloneElement(r, {
    ...ve(o, r.props),
    ref: j(t, r.ref)
  }) : n.Children.count(r) > 1 ? n.Children.only(null) : null;
});
F.displayName = "SlotClone";
const pe = ({ children: e }) => /* @__PURE__ */ n.createElement(n.Fragment, null, e);
function me(e) {
  return /* @__PURE__ */ n.isValidElement(e) && e.type === pe;
}
function ve(e, t) {
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
function Ee(e) {
  const t = e + "CollectionProvider", [r, o] = L(t), [c, s] = r(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), a = ($) => {
    const { scope: b, children: E } = $, m = x.useRef(null), h = x.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ x.createElement(c, {
      scope: b,
      itemMap: h,
      collectionRef: m
    }, E);
  }, i = e + "CollectionSlot", l = /* @__PURE__ */ x.forwardRef(($, b) => {
    const { scope: E, children: m } = $, h = s(i, E), g = w(b, h.collectionRef);
    return /* @__PURE__ */ x.createElement(M, {
      ref: g
    }, m);
  }), u = e + "CollectionItemSlot", f = "data-radix-collection-item", d = /* @__PURE__ */ x.forwardRef(($, b) => {
    const { scope: E, children: m, ...h } = $, g = x.useRef(null), A = w(b, g), S = s(u, E);
    return x.useEffect(() => (S.itemMap.set(g, {
      ref: g,
      ...h
    }), () => void S.itemMap.delete(g))), /* @__PURE__ */ x.createElement(M, {
      [f]: "",
      ref: A
    }, m);
  });
  function p($) {
    const b = s(e + "CollectionConsumer", $);
    return x.useCallback(() => {
      const m = b.collectionRef.current;
      if (!m)
        return [];
      const h = Array.from(m.querySelectorAll(`[${f}]`));
      return Array.from(b.itemMap.values()).sort(
        (S, C) => h.indexOf(S.ref.current) - h.indexOf(C.ref.current)
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
      ItemSlot: d
    },
    p,
    o
  ];
}
const O = globalThis != null && globalThis.document ? n.useLayoutEffect : () => {
}, he = de["useId".toString()] || (() => {
});
let ge = 0;
function H(e) {
  const [t, r] = n.useState(he());
  return O(() => {
    e || r(
      (o) => o ?? String(ge++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Ce = [
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
], R = Ce.reduce((e, t) => {
  const r = /* @__PURE__ */ n.forwardRef((o, c) => {
    const { asChild: s, ...a } = o, i = s ? M : t;
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
function V(e) {
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
function Y({ prop: e, defaultProp: t, onChange: r = () => {
} }) {
  const [o, c] = xe({
    defaultProp: t,
    onChange: r
  }), s = e !== void 0, a = s ? e : o, i = V(r), l = n.useCallback((u) => {
    if (s) {
      const d = typeof u == "function" ? u(e) : u;
      d !== e && i(d);
    } else
      c(u);
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
function xe({ defaultProp: e, onChange: t }) {
  const r = n.useState(e), [o] = r, c = n.useRef(o), s = V(t);
  return n.useEffect(() => {
    c.current !== o && (s(o), c.current = o);
  }, [
    o,
    c,
    s
  ]), r;
}
const Te = /* @__PURE__ */ n.createContext(void 0);
function q(e) {
  const t = n.useContext(Te);
  return e || t || "ltr";
}
const P = "rovingFocusGroup.onEntryFocus", Se = {
  bubbles: !1,
  cancelable: !0
}, U = "RovingFocusGroup", [D, W, Ie] = Ee(U), [Re, Z] = L(U, [
  Ie
]), [Ae, _e] = Re(U), Ne = /* @__PURE__ */ n.forwardRef((e, t) => /* @__PURE__ */ n.createElement(D.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ n.createElement(D.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ n.createElement(we, v({}, e, {
  ref: t
}))))), we = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: r, orientation: o, loop: c = !1, dir: s, currentTabStopId: a, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: l, onEntryFocus: u, ...f } = e, d = n.useRef(null), p = w(t, d), $ = q(s), [b = null, E] = Y({
    prop: a,
    defaultProp: i,
    onChange: l
  }), [m, h] = n.useState(!1), g = V(u), A = W(r), S = n.useRef(!1);
  return n.useEffect(() => {
    const C = d.current;
    if (C)
      return C.addEventListener(P, g), () => C.removeEventListener(P, g);
  }, [
    g
  ]), /* @__PURE__ */ n.createElement(Ae, {
    scope: r,
    orientation: o,
    dir: $,
    loop: c,
    currentTabStopId: b,
    onItemFocus: n.useCallback(
      (C) => E(C),
      [
        E
      ]
    ),
    onItemShiftTab: n.useCallback(
      () => h(!0),
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
    onMouseDown: T(e.onMouseDown, () => {
      S.current = !0;
    }),
    onFocus: T(e.onFocus, (C) => {
      const oe = !S.current;
      if (C.target === C.currentTarget && oe && !m) {
        const G = new CustomEvent(P, Se);
        if (C.currentTarget.dispatchEvent(G), !G.defaultPrevented) {
          const y = A().filter(
            (I) => I.focusable
          ), re = y.find(
            (I) => I.active
          ), ce = y.find(
            (I) => I.id === b
          ), se = [
            re,
            ce,
            ...y
          ].filter(Boolean).map(
            (I) => I.ref.current
          );
          J(se);
        }
      }
      S.current = !1;
    }),
    onBlur: T(
      e.onBlur,
      () => h(!1)
    )
  })));
}), Me = "RovingFocusGroupItem", ye = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: r, focusable: o = !0, active: c = !1, ...s } = e, a = H(), i = _e(Me, r), l = i.currentTabStopId === a, u = W(r);
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
    onMouseDown: T(e.onMouseDown, (f) => {
      o ? i.onItemFocus(a) : f.preventDefault();
    }),
    onFocus: T(
      e.onFocus,
      () => i.onItemFocus(a)
    ),
    onKeyDown: T(e.onKeyDown, (f) => {
      if (f.key === "Tab" && f.shiftKey) {
        i.onItemShiftTab();
        return;
      }
      if (f.target !== f.currentTarget)
        return;
      const d = Oe(f, i.orientation, i.dir);
      if (d !== void 0) {
        f.preventDefault();
        let $ = u().filter(
          (b) => b.focusable
        ).map(
          (b) => b.ref.current
        );
        if (d === "last")
          $.reverse();
        else if (d === "prev" || d === "next") {
          d === "prev" && $.reverse();
          const b = $.indexOf(f.currentTarget);
          $ = i.loop ? De($, b + 1) : $.slice(b + 1);
        }
        setTimeout(
          () => J($)
        );
      }
    })
  })));
}), Pe = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Fe(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Oe(e, t, r) {
  const o = Fe(e.key, r);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(o)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(o)))
    return Pe[o];
}
function J(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t))
      return;
}
function De(e, t) {
  return e.map(
    (r, o) => e[(t + o) % e.length]
  );
}
const Le = Ne, Ve = ye;
function Ue(e, t) {
  return n.useReducer((r, o) => {
    const c = t[r][o];
    return c ?? r;
  }, e);
}
const Q = (e) => {
  const { present: t, children: r } = e, o = ke(t), c = typeof r == "function" ? r({
    present: o.isPresent
  }) : n.Children.only(r), s = w(o.ref, c.ref);
  return typeof r == "function" || o.isPresent ? /* @__PURE__ */ n.cloneElement(c, {
    ref: s
  }) : null;
};
Q.displayName = "Presence";
function ke(e) {
  const [t, r] = n.useState(), o = n.useRef({}), c = n.useRef(e), s = n.useRef("none"), a = e ? "mounted" : "unmounted", [i, l] = Ue(a, {
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
    const u = _(o.current);
    s.current = i === "mounted" ? u : "none";
  }, [
    i
  ]), O(() => {
    const u = o.current, f = c.current;
    if (f !== e) {
      const p = s.current, $ = _(u);
      e ? l("MOUNT") : $ === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && p !== $ ? "ANIMATION_OUT" : "UNMOUNT"), c.current = e;
    }
  }, [
    e,
    l
  ]), O(() => {
    if (t) {
      const u = (d) => {
        const $ = _(o.current).includes(d.animationName);
        d.target === t && $ && ue.flushSync(
          () => l("ANIMATION_END")
        );
      }, f = (d) => {
        d.target === t && (s.current = _(o.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
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
    ref: n.useCallback((u) => {
      u && (o.current = getComputedStyle(u)), r(u);
    }, [])
  };
}
function _(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const X = "Tabs", [Ge, dt] = L(X, [
  Z
]), ee = Z(), [Be, k] = Ge(X), Ke = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeTabs: r, value: o, onValueChange: c, defaultValue: s, orientation: a = "horizontal", dir: i, activationMode: l = "automatic", ...u } = e, f = q(i), [d, p] = Y({
    prop: o,
    onChange: c,
    defaultProp: s
  });
  return /* @__PURE__ */ n.createElement(Be, {
    scope: r,
    baseId: H(),
    value: d,
    onValueChange: p,
    orientation: a,
    dir: f,
    activationMode: l
  }, /* @__PURE__ */ n.createElement(R.div, v({
    dir: f,
    "data-orientation": a
  }, u, {
    ref: t
  })));
}), ze = "TabsList", je = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeTabs: r, loop: o = !0, ...c } = e, s = k(ze, r), a = ee(r);
  return /* @__PURE__ */ n.createElement(Le, v({
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
}), He = "TabsTrigger", Ye = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeTabs: r, value: o, disabled: c = !1, ...s } = e, a = k(He, r), i = ee(r), l = te(a.baseId, o), u = ne(a.baseId, o), f = o === a.value;
  return /* @__PURE__ */ n.createElement(Ve, v({
    asChild: !0
  }, i, {
    focusable: !c,
    active: f
  }), /* @__PURE__ */ n.createElement(R.button, v({
    type: "button",
    role: "tab",
    "aria-selected": f,
    "aria-controls": u,
    "data-state": f ? "active" : "inactive",
    "data-disabled": c ? "" : void 0,
    disabled: c,
    id: l
  }, s, {
    ref: t,
    onMouseDown: T(e.onMouseDown, (d) => {
      !c && d.button === 0 && d.ctrlKey === !1 ? a.onValueChange(o) : d.preventDefault();
    }),
    onKeyDown: T(e.onKeyDown, (d) => {
      [
        " ",
        "Enter"
      ].includes(d.key) && a.onValueChange(o);
    }),
    onFocus: T(e.onFocus, () => {
      const d = a.activationMode !== "manual";
      !f && !c && d && a.onValueChange(o);
    })
  })));
}), qe = "TabsContent", We = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeTabs: r, value: o, forceMount: c, children: s, ...a } = e, i = k(qe, r), l = te(i.baseId, o), u = ne(i.baseId, o), f = o === i.value, d = n.useRef(f);
  return n.useEffect(() => {
    const p = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ n.createElement(
    Q,
    {
      present: c || f
    },
    ({ present: p }) => /* @__PURE__ */ n.createElement(R.div, v({
      "data-state": f ? "active" : "inactive",
      "data-orientation": i.orientation,
      role: "tabpanel",
      "aria-labelledby": l,
      hidden: !p,
      id: u,
      tabIndex: 0
    }, a, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: d.current ? "0s" : void 0
      }
    }), p && s)
  );
});
function te(e, t) {
  return `${e}-trigger-${t}`;
}
function ne(e, t) {
  return `${e}-content-${t}`;
}
const ut = Ke, Ze = je, Je = Ye, ft = We, lt = K(Ze)`
  display: flex;
  border-bottom: 1px solid var(${N.tabBorder});
  padding-left: 15px;
`, bt = K(Je)`
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
`, $t = (e) => /* @__PURE__ */ B.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ B.jsx("path", { d: "M144 400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v224zm96 0c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v224zm96 0c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v224zM310.1 22.56 336.9 64H432c8.8 0 16 7.16 16 16s-7.2 16-16 16h-16v336c0 44.2-35.8 80-80 80H112c-44.18 0-80-35.8-80-80V96H16C7.164 96 0 88.84 0 80s7.164-16 16-16h95.1L137 22.56C145.8 8.526 161.2 0 177.7 0h92.6c16.5 0 31.9 8.526 39.8 22.56zM148.9 64h150.2l-15.3-24.48c-2.9-4.68-8-7.52-13.5-7.52h-92.6c-5.5 0-10.6 2.84-13.5 7.52L148.9 64zM64 432c0 26.5 21.49 48 48 48h224c26.5 0 48-21.5 48-48V96H64v336z" }) });
export {
  ut as $,
  $t as S,
  lt as T,
  bt as a,
  ft as b,
  rt as c,
  at as d,
  it as e,
  ot as l,
  ct as s,
  st as u
};
