import { K as L, R as g, _ as D, j as m, a5 as G, f as i, X as J, J as X, L as j, M as w, Y as $ } from "./TriangleExclamation.BLKAXJ8l.js";
function Q(e) {
  const o = e + "CollectionProvider", [u, r] = L(o), [A, v] = u(
    o,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), I = (f) => {
    const { scope: t, children: a } = f, d = g.useRef(null), n = g.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m.jsx(A, { scope: t, itemMap: n, collectionRef: d, children: a });
  };
  I.displayName = o;
  const R = e + "CollectionSlot", _ = G(R), p = g.forwardRef(
    (f, t) => {
      const { scope: a, children: d } = f, n = v(R, a), c = D(t, n.collectionRef);
      return /* @__PURE__ */ m.jsx(_, { ref: c, children: d });
    }
  );
  p.displayName = R;
  const s = e + "CollectionItemSlot", C = "data-radix-collection-item", E = G(s), b = g.forwardRef(
    (f, t) => {
      const { scope: a, children: d, ...n } = f, c = g.useRef(null), x = D(t, c), T = v(s, a);
      return g.useEffect(() => (T.itemMap.set(c, { ref: c, ...n }), () => {
        T.itemMap.delete(c);
      })), /* @__PURE__ */ m.jsx(E, { [C]: "", ref: x, children: d });
    }
  );
  b.displayName = s;
  function F(f) {
    const t = v(e + "CollectionConsumer", f);
    return g.useCallback(() => {
      const d = t.collectionRef.current;
      if (!d) return [];
      const n = Array.from(d.querySelectorAll(`[${C}]`));
      return Array.from(t.itemMap.values()).sort(
        (T, y) => n.indexOf(T.ref.current) - n.indexOf(y.ref.current)
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
function Z(e) {
  const o = i.useContext(W);
  return e || o || "ltr";
}
var N = "rovingFocusGroup.onEntryFocus", ee = { bubbles: !1, cancelable: !0 }, h = "RovingFocusGroup", [O, K, te] = Q(h), [oe, de] = L(
  h,
  [te]
), [ne, re] = oe(h), k = i.forwardRef(
  (e, o) => /* @__PURE__ */ m.jsx(O.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m.jsx(O.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m.jsx(ce, { ...e, ref: o }) }) })
);
k.displayName = h;
var ce = i.forwardRef((e, o) => {
  const {
    __scopeRovingFocusGroup: u,
    orientation: r,
    loop: A = !1,
    dir: v,
    currentTabStopId: I,
    defaultCurrentTabStopId: R,
    onCurrentTabStopIdChange: _,
    onEntryFocus: p,
    preventScrollOnEntryFocus: s = !1,
    ...C
  } = e, E = i.useRef(null), b = D(o, E), F = Z(v), [f, t] = J({
    prop: I,
    defaultProp: R ?? null,
    onChange: _,
    caller: h
  }), [a, d] = i.useState(!1), n = X(p), c = K(u), x = i.useRef(!1), [T, y] = i.useState(0);
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
        () => y((l) => l + 1),
        []
      ),
      onFocusableItemRemove: i.useCallback(
        () => y((l) => l - 1),
        []
      ),
      children: /* @__PURE__ */ m.jsx(
        j.div,
        {
          tabIndex: a || T === 0 ? -1 : 0,
          "data-orientation": r,
          ...C,
          ref: b,
          style: { outline: "none", ...e.style },
          onMouseDown: w(e.onMouseDown, () => {
            x.current = !0;
          }),
          onFocus: w(e.onFocus, (l) => {
            const V = !x.current;
            if (l.target === l.currentTarget && V && !a) {
              const P = new CustomEvent(N, ee);
              if (l.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
                const M = c().filter((S) => S.focusable), H = M.find((S) => S.active), q = M.find((S) => S.id === f), z = [H, q, ...M].filter(
                  Boolean
                ).map((S) => S.ref.current);
                Y(z, s);
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
      ...R
    } = e, _ = $(), p = v || _, s = re(U, u), C = s.currentTabStopId === p, E = K(u), { onFocusableItemAdd: b, onFocusableItemRemove: F, currentTabStopId: f } = s;
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
          j.span,
          {
            tabIndex: C ? 0 : -1,
            "data-orientation": s.orientation,
            ...R,
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
                setTimeout(() => Y(n));
              }
            }),
            children: typeof I == "function" ? I({ isCurrentTabStop: C, hasTabStop: f != null }) : I
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
function Y(e, o = !1) {
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
  Q as a,
  de as c,
  Z as u
};
