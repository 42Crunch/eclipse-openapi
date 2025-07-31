import { z as j, R as g, Z as D, j as m, a1 as G, f as i, a6 as Z, y as $, A as L, C as w, a7 as J } from "./TriangleExclamation.D0e1MsJn.js";
function Q(e) {
  const o = e + "CollectionProvider", [u, r] = j(o), [A, v] = u(
    o,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), I = (f) => {
    const { scope: t, children: a } = f, d = g.useRef(null), n = g.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m.jsx(A, { scope: t, itemMap: n, collectionRef: d, children: a });
  };
  I.displayName = o;
  const C = e + "CollectionSlot", _ = G(C), p = g.forwardRef(
    (f, t) => {
      const { scope: a, children: d } = f, n = v(C, a), c = D(t, n.collectionRef);
      return /* @__PURE__ */ m.jsx(_, { ref: c, children: d });
    }
  );
  p.displayName = C;
  const s = e + "CollectionItemSlot", R = "data-radix-collection-item", E = G(s), b = g.forwardRef(
    (f, t) => {
      const { scope: a, children: d, ...n } = f, c = g.useRef(null), x = D(t, c), T = v(s, a);
      return g.useEffect(() => (T.itemMap.set(c, { ref: c, ...n }), () => void T.itemMap.delete(c))), /* @__PURE__ */ m.jsx(E, { [R]: "", ref: x, children: d });
    }
  );
  b.displayName = s;
  function F(f) {
    const t = v(e + "CollectionConsumer", f);
    return g.useCallback(() => {
      const d = t.collectionRef.current;
      if (!d) return [];
      const n = Array.from(d.querySelectorAll(`[${R}]`));
      return Array.from(t.itemMap.values()).sort(
        (T, h) => n.indexOf(T.ref.current) - n.indexOf(h.ref.current)
      );
    }, [t.collectionRef, t.itemMap]);
  }
  return [
    { Provider: I, Slot: p, ItemSlot: b },
    F,
    r
  ];
}
var W = i.createContext(void 0);
function X(e) {
  const o = i.useContext(W);
  return e || o || "ltr";
}
var N = "rovingFocusGroup.onEntryFocus", ee = { bubbles: !1, cancelable: !0 }, y = "RovingFocusGroup", [O, K, te] = Q(y), [oe, de] = j(
  y,
  [te]
), [ne, re] = oe(y), k = i.forwardRef(
  (e, o) => /* @__PURE__ */ m.jsx(O.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m.jsx(O.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m.jsx(ce, { ...e, ref: o }) }) })
);
k.displayName = y;
var ce = i.forwardRef((e, o) => {
  const {
    __scopeRovingFocusGroup: u,
    orientation: r,
    loop: A = !1,
    dir: v,
    currentTabStopId: I,
    defaultCurrentTabStopId: C,
    onCurrentTabStopIdChange: _,
    onEntryFocus: p,
    preventScrollOnEntryFocus: s = !1,
    ...R
  } = e, E = i.useRef(null), b = D(o, E), F = X(v), [f, t] = Z({
    prop: I,
    defaultProp: C ?? null,
    onChange: _,
    caller: y
  }), [a, d] = i.useState(!1), n = $(p), c = K(u), x = i.useRef(!1), [T, h] = i.useState(0);
  return i.useEffect(() => {
    const l = E.current;
    if (l)
      return l.addEventListener(N, n), () => l.removeEventListener(N, n);
  }, [n]), /* @__PURE__ */ m.jsx(
    ne,
    {
      scope: u,
      orientation: r,
      dir: F,
      loop: A,
      currentTabStopId: f,
      onItemFocus: i.useCallback(
        (l) => t(l),
        [t]
      ),
      onItemShiftTab: i.useCallback(() => d(!0), []),
      onFocusableItemAdd: i.useCallback(
        () => h((l) => l + 1),
        []
      ),
      onFocusableItemRemove: i.useCallback(
        () => h((l) => l - 1),
        []
      ),
      children: /* @__PURE__ */ m.jsx(
        L.div,
        {
          tabIndex: a || T === 0 ? -1 : 0,
          "data-orientation": r,
          ...R,
          ref: b,
          style: { outline: "none", ...e.style },
          onMouseDown: w(e.onMouseDown, () => {
            x.current = !0;
          }),
          onFocus: w(e.onFocus, (l) => {
            const Y = !x.current;
            if (l.target === l.currentTarget && Y && !a) {
              const P = new CustomEvent(N, ee);
              if (l.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
                const M = c().filter((S) => S.focusable), z = M.find((S) => S.active), H = M.find((S) => S.id === f), q = [z, H, ...M].filter(
                  Boolean
                ).map((S) => S.ref.current);
                V(q, s);
              }
            }
            x.current = !1;
          }),
          onBlur: w(e.onBlur, () => d(!1))
        }
      )
    }
  );
}), U = "RovingFocusGroupItem", B = i.forwardRef(
  (e, o) => {
    const {
      __scopeRovingFocusGroup: u,
      focusable: r = !0,
      active: A = !1,
      tabStopId: v,
      children: I,
      ...C
    } = e, _ = J(), p = v || _, s = re(U, u), R = s.currentTabStopId === p, E = K(u), { onFocusableItemAdd: b, onFocusableItemRemove: F, currentTabStopId: f } = s;
    return i.useEffect(() => {
      if (r)
        return b(), () => F();
    }, [r, b, F]), /* @__PURE__ */ m.jsx(
      O.ItemSlot,
      {
        scope: u,
        id: p,
        focusable: r,
        active: A,
        children: /* @__PURE__ */ m.jsx(
          L.span,
          {
            tabIndex: R ? 0 : -1,
            "data-orientation": s.orientation,
            ...C,
            ref: o,
            onMouseDown: w(e.onMouseDown, (t) => {
              r ? s.onItemFocus(p) : t.preventDefault();
            }),
            onFocus: w(e.onFocus, () => s.onItemFocus(p)),
            onKeyDown: w(e.onKeyDown, (t) => {
              if (t.key === "Tab" && t.shiftKey) {
                s.onItemShiftTab();
                return;
              }
              if (t.target !== t.currentTarget) return;
              const a = ie(t, s.orientation, s.dir);
              if (a !== void 0) {
                if (t.metaKey || t.ctrlKey || t.altKey || t.shiftKey) return;
                t.preventDefault();
                let n = E().filter((c) => c.focusable).map((c) => c.ref.current);
                if (a === "last") n.reverse();
                else if (a === "prev" || a === "next") {
                  a === "prev" && n.reverse();
                  const c = n.indexOf(t.currentTarget);
                  n = s.loop ? ue(n, c + 1) : n.slice(c + 1);
                }
                setTimeout(() => V(n));
              }
            }),
            children: typeof I == "function" ? I({ isCurrentTabStop: R, hasTabStop: f != null }) : I
          }
        )
      }
    );
  }
);
B.displayName = U;
var se = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ae(e, o) {
  return o !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ie(e, o, u) {
  const r = ae(e.key, u);
  if (!(o === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(o === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return se[r];
}
function V(e, o = !1) {
  const u = document.activeElement;
  for (const r of e)
    if (r === u || (r.focus({ preventScroll: o }), document.activeElement !== u)) return;
}
function ue(e, o) {
  return e.map((u, r) => e[(o + r) % e.length]);
}
var me = k, pe = B;
export {
  pe as I,
  me as R,
  de as a,
  Q as c,
  X as u
};
