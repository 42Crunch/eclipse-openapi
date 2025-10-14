import { f as p, X as M, j as o, z as N, Y as w, A as f, Z as P, C as h, T as s, e as v, S as V } from "./TriangleExclamation.BpqlFGl9.js";
import { u as D, c as j, R as G, I as L } from "./index.YHl66Cu1.js";
var m = "Tabs", [z] = N(m, [
  j
]), y = j(), [K, T] = z(m), C = p.forwardRef(
  (e, i) => {
    const {
      __scopeTabs: d,
      value: r,
      onValueChange: n,
      defaultValue: a,
      orientation: t = "horizontal",
      dir: u,
      activationMode: x = "automatic",
      ...b
    } = e, l = D(u), [c, g] = M({
      prop: r,
      onChange: n,
      defaultProp: a ?? "",
      caller: m
    });
    return /* @__PURE__ */ o.jsx(
      K,
      {
        scope: d,
        baseId: w(),
        value: c,
        onValueChange: g,
        orientation: t,
        dir: l,
        activationMode: x,
        children: /* @__PURE__ */ o.jsx(
          f.div,
          {
            dir: l,
            "data-orientation": t,
            ...b,
            ref: i
          }
        )
      }
    );
  }
);
C.displayName = m;
var $ = "TabsList", I = p.forwardRef(
  (e, i) => {
    const { __scopeTabs: d, loop: r = !0, ...n } = e, a = T($, d), t = y(d);
    return /* @__PURE__ */ o.jsx(
      G,
      {
        asChild: !0,
        ...t,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ o.jsx(
          f.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...n,
            ref: i
          }
        )
      }
    );
  }
);
I.displayName = $;
var A = "TabsTrigger", F = p.forwardRef(
  (e, i) => {
    const { __scopeTabs: d, value: r, disabled: n = !1, ...a } = e, t = T(A, d), u = y(d), x = S(t.baseId, r), b = _(t.baseId, r), l = r === t.value;
    return /* @__PURE__ */ o.jsx(
      L,
      {
        asChild: !0,
        ...u,
        focusable: !n,
        active: l,
        children: /* @__PURE__ */ o.jsx(
          f.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": l,
            "aria-controls": b,
            "data-state": l ? "active" : "inactive",
            "data-disabled": n ? "" : void 0,
            disabled: n,
            id: x,
            ...a,
            ref: i,
            onMouseDown: h(e.onMouseDown, (c) => {
              !n && c.button === 0 && c.ctrlKey === !1 ? t.onValueChange(r) : c.preventDefault();
            }),
            onKeyDown: h(e.onKeyDown, (c) => {
              [" ", "Enter"].includes(c.key) && t.onValueChange(r);
            }),
            onFocus: h(e.onFocus, () => {
              const c = t.activationMode !== "manual";
              !l && !n && c && t.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
F.displayName = A;
var R = "TabsContent", E = p.forwardRef(
  (e, i) => {
    const { __scopeTabs: d, value: r, forceMount: n, children: a, ...t } = e, u = T(R, d), x = S(u.baseId, r), b = _(u.baseId, r), l = r === u.value, c = p.useRef(l);
    return p.useEffect(() => {
      const g = requestAnimationFrame(() => c.current = !1);
      return () => cancelAnimationFrame(g);
    }, []), /* @__PURE__ */ o.jsx(P, { present: n || l, children: ({ present: g }) => /* @__PURE__ */ o.jsx(
      f.div,
      {
        "data-state": l ? "active" : "inactive",
        "data-orientation": u.orientation,
        role: "tabpanel",
        "aria-labelledby": x,
        hidden: !g,
        id: b,
        tabIndex: 0,
        ...t,
        ref: i,
        style: {
          ...e.style,
          animationDuration: c.current ? "0s" : void 0
        },
        children: g && a
      }
    ) });
  }
);
E.displayName = R;
function S(e, i) {
  return `${e}-trigger-${i}`;
}
function _(e, i) {
  return `${e}-content-${i}`;
}
var O = C, q = I, k = F, H = E;
function ne({
  tabs: e,
  activeTab: i,
  setActiveTab: d,
  menu: r,
  round: n
}) {
  return d !== void 0 ? /* @__PURE__ */ o.jsx(
    B,
    {
      tabs: e,
      activeTab: i,
      setActiveTab: d,
      menu: r,
      round: n
    }
  ) : /* @__PURE__ */ o.jsx(U, { tabs: e, menu: r, round: n });
}
function U({
  tabs: e,
  menu: i,
  round: d
}) {
  const [r, n] = p.useState(e.filter((a) => !a.disabled)?.[0]?.id);
  return p.useEffect(() => {
    e.filter((a) => a.id === r).length === 0 && n(e.filter((a) => !a.disabled)?.[0]?.id);
  }, [e]), r === void 0 ? null : /* @__PURE__ */ o.jsx(
    B,
    {
      tabs: e,
      activeTab: r,
      setActiveTab: n,
      menu: i,
      round: d
    }
  );
}
function B({
  tabs: e,
  activeTab: i,
  setActiveTab: d,
  menu: r,
  round: n
}) {
  const a = e.filter((t) => !t.disabled);
  return /* @__PURE__ */ o.jsxs(O, { value: i, onValueChange: d, children: [
    /* @__PURE__ */ o.jsxs(Y, { children: [
      a.map((t) => {
        const u = n ? J : Z;
        return /* @__PURE__ */ o.jsxs(u, { value: t.id, children: [
          /* @__PURE__ */ o.jsx("span", { className: "title", children: t.title }),
          X(t),
          t.menu && /* @__PURE__ */ o.jsx(te, { className: "menu", children: t.menu })
        ] }, t.id);
      }),
      r && /* @__PURE__ */ o.jsx(ee, { children: r })
    ] }),
    a.map((t) => /* @__PURE__ */ o.jsx(H, { value: t.id, children: t.content }, t.id))
  ] });
}
function X(e) {
  return e.counter ? e.counterKind === "error" ? /* @__PURE__ */ o.jsxs(W, { children: [
    e.counter,
    /* @__PURE__ */ o.jsx(V, {})
  ] }) : /* @__PURE__ */ o.jsx(Q, { children: e.counter }) : null;
}
const Y = v(q)`
  display: flex;
  border-bottom: 1px solid var(${s.tabBorder});
  padding-left: 15px;
`, Z = v(k)`
  border: none;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 16px;
  color: var(${s.tabInactiveForeground});
  background: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &[data-state="active"] {
    color: var(${s.tabActiveForeground});
    border-bottom: 3px solid var(${s.buttonBackground});
    cursor: inherit;
  }

  &[data-state="active"] > span.title {
    border: 1px solid var(${s.contrastActiveBorder});
  }

  &[data-state="active"] > span.menu {
    visibility: visible;
  }
`, J = v(k)`
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

    color: var(${s.tabInactiveForeground});
    background-color: var(${s.computedOne});
    cursor: pointer;
  }

  &[data-state="active"] > span.title {
    border: 1px solid var(${s.contrastActiveBorder});
  }

  &[data-state="active"] > span.title {
    color: var(${s.tabActiveForeground});
    cursor: inherit;
  }

  &[data-state="active"] {
    color: var(${s.tabActiveForeground});
    border-bottom: 3px solid var(${s.buttonBackground});
    cursor: inherit;
  }

  &[data-state="active"] > span.menu {
    visibility: visible;
  }
`, Q = v.span`
  background-color: var(${s.badgeBackground});
  color: var(${s.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
`, W = v.span`
  background-color: var(${s.errorBackground});
  color: var(${s.errorForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
  gap: 3px;
  & > svg {
    fill: var(${s.errorForeground});
    width: 10px;
    height: 10px;
  }
`, ee = v.div`
  flex: 1;
  display: flex;
  justify-content: end;
`, te = v.span`
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
    fill: var(${s.foreground});
  }
`;
export {
  H as C,
  ne as T
};
