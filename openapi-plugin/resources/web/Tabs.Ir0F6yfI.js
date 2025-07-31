import { f as g, a6 as M, j as o, z as N, a7 as w, A as f, X as P, C as h, T as i, e as x, S as V } from "./TriangleExclamation.D0e1MsJn.js";
import { u as D, a as j, R as G, I as L } from "./index.D6bFBn1G.js";
var m = "Tabs", [z, ne] = N(m, [
  j
]), y = j(), [K, T] = z(m), C = g.forwardRef(
  (e, a) => {
    const {
      __scopeTabs: s,
      value: r,
      onValueChange: n,
      defaultValue: d,
      orientation: t = "horizontal",
      dir: c,
      activationMode: v = "automatic",
      ...p
    } = e, u = D(c), [l, b] = M({
      prop: r,
      onChange: n,
      defaultProp: d ?? "",
      caller: m
    });
    return /* @__PURE__ */ o.jsx(
      K,
      {
        scope: s,
        baseId: w(),
        value: l,
        onValueChange: b,
        orientation: t,
        dir: u,
        activationMode: v,
        children: /* @__PURE__ */ o.jsx(
          f.div,
          {
            dir: u,
            "data-orientation": t,
            ...p,
            ref: a
          }
        )
      }
    );
  }
);
C.displayName = m;
var $ = "TabsList", I = g.forwardRef(
  (e, a) => {
    const { __scopeTabs: s, loop: r = !0, ...n } = e, d = T($, s), t = y(s);
    return /* @__PURE__ */ o.jsx(
      G,
      {
        asChild: !0,
        ...t,
        orientation: d.orientation,
        dir: d.dir,
        loop: r,
        children: /* @__PURE__ */ o.jsx(
          f.div,
          {
            role: "tablist",
            "aria-orientation": d.orientation,
            ...n,
            ref: a
          }
        )
      }
    );
  }
);
I.displayName = $;
var A = "TabsTrigger", F = g.forwardRef(
  (e, a) => {
    const { __scopeTabs: s, value: r, disabled: n = !1, ...d } = e, t = T(A, s), c = y(s), v = S(t.baseId, r), p = _(t.baseId, r), u = r === t.value;
    return /* @__PURE__ */ o.jsx(
      L,
      {
        asChild: !0,
        ...c,
        focusable: !n,
        active: u,
        children: /* @__PURE__ */ o.jsx(
          f.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": u,
            "aria-controls": p,
            "data-state": u ? "active" : "inactive",
            "data-disabled": n ? "" : void 0,
            disabled: n,
            id: v,
            ...d,
            ref: a,
            onMouseDown: h(e.onMouseDown, (l) => {
              !n && l.button === 0 && l.ctrlKey === !1 ? t.onValueChange(r) : l.preventDefault();
            }),
            onKeyDown: h(e.onKeyDown, (l) => {
              [" ", "Enter"].includes(l.key) && t.onValueChange(r);
            }),
            onFocus: h(e.onFocus, () => {
              const l = t.activationMode !== "manual";
              !u && !n && l && t.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
F.displayName = A;
var R = "TabsContent", E = g.forwardRef(
  (e, a) => {
    const { __scopeTabs: s, value: r, forceMount: n, children: d, ...t } = e, c = T(R, s), v = S(c.baseId, r), p = _(c.baseId, r), u = r === c.value, l = g.useRef(u);
    return g.useEffect(() => {
      const b = requestAnimationFrame(() => l.current = !1);
      return () => cancelAnimationFrame(b);
    }, []), /* @__PURE__ */ o.jsx(P, { present: n || u, children: ({ present: b }) => /* @__PURE__ */ o.jsx(
      f.div,
      {
        "data-state": u ? "active" : "inactive",
        "data-orientation": c.orientation,
        role: "tabpanel",
        "aria-labelledby": v,
        hidden: !b,
        id: p,
        tabIndex: 0,
        ...t,
        ref: a,
        style: {
          ...e.style,
          animationDuration: l.current ? "0s" : void 0
        },
        children: b && d
      }
    ) });
  }
);
E.displayName = R;
function S(e, a) {
  return `${e}-trigger-${a}`;
}
function _(e, a) {
  return `${e}-content-${a}`;
}
var O = C, q = I, k = F, H = E;
function ae({
  tabs: e,
  activeTab: a,
  setActiveTab: s,
  menu: r,
  round: n
}) {
  return s !== void 0 ? /* @__PURE__ */ o.jsx(
    B,
    {
      tabs: e,
      activeTab: a,
      setActiveTab: s,
      menu: r,
      round: n
    }
  ) : /* @__PURE__ */ o.jsx(U, { tabs: e, menu: r, round: n });
}
function U({
  tabs: e,
  menu: a,
  round: s
}) {
  var d, t;
  const [r, n] = g.useState((t = (d = e.filter((c) => !c.disabled)) == null ? void 0 : d[0]) == null ? void 0 : t.id);
  return g.useEffect(() => {
    var c, v;
    e.filter((p) => p.id === r).length === 0 && n((v = (c = e.filter((p) => !p.disabled)) == null ? void 0 : c[0]) == null ? void 0 : v.id);
  }, [e]), r === void 0 ? null : /* @__PURE__ */ o.jsx(
    B,
    {
      tabs: e,
      activeTab: r,
      setActiveTab: n,
      menu: a,
      round: s
    }
  );
}
function B({
  tabs: e,
  activeTab: a,
  setActiveTab: s,
  menu: r,
  round: n
}) {
  const d = e.filter((t) => !t.disabled);
  return /* @__PURE__ */ o.jsxs(O, { value: a, onValueChange: s, children: [
    /* @__PURE__ */ o.jsxs(J, { children: [
      d.map((t) => {
        const c = n ? W : Q;
        return /* @__PURE__ */ o.jsxs(c, { value: t.id, children: [
          /* @__PURE__ */ o.jsx("span", { className: "title", children: t.title }),
          X(t),
          t.menu && /* @__PURE__ */ o.jsx(te, { className: "menu", children: t.menu })
        ] }, t.id);
      }),
      r && /* @__PURE__ */ o.jsx(ee, { children: r })
    ] }),
    d.map((t) => /* @__PURE__ */ o.jsx(H, { value: t.id, children: t.content }, t.id))
  ] });
}
function X(e) {
  return e.counter ? e.counterKind === "error" ? /* @__PURE__ */ o.jsxs(Z, { children: [
    e.counter,
    /* @__PURE__ */ o.jsx(V, {})
  ] }) : /* @__PURE__ */ o.jsx(Y, { children: e.counter }) : null;
}
const J = x(q)`
  display: flex;
  border-bottom: 1px solid var(${i.tabBorder});
  padding-left: 15px;
`, Q = x(k)`
  border: none;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 16px;
  color: var(${i.tabInactiveForeground});
  background: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &[data-state="active"] {
    color: var(${i.tabActiveForeground});
    border-bottom: 3px solid var(${i.buttonBackground});
    cursor: inherit;
  }

  &[data-state="active"] > span.title {
    border: 1px solid var(${i.contrastActiveBorder});
  }

  &[data-state="active"] > span.menu {
    visibility: visible;
  }
`, W = x(k)`
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

    color: var(${i.tabInactiveForeground});
    background-color: var(${i.computedOne});
    cursor: pointer;
  }

  &[data-state="active"] > span.title {
    border: 1px solid var(${i.contrastActiveBorder});
  }

  &[data-state="active"] > span.title {
    color: var(${i.tabActiveForeground});
    cursor: inherit;
  }

  &[data-state="active"] {
    color: var(${i.tabActiveForeground});
    border-bottom: 3px solid var(${i.buttonBackground});
    cursor: inherit;
  }

  &[data-state="active"] > span.menu {
    visibility: visible;
  }
`, Y = x.span`
  background-color: var(${i.badgeBackground});
  color: var(${i.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
`, Z = x.span`
  background-color: var(${i.errorBackground});
  color: var(${i.errorForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
  gap: 3px;
  & > svg {
    fill: var(${i.errorForeground});
    width: 10px;
    height: 10px;
  }
`, ee = x.div`
  flex: 1;
  display: flex;
  justify-content: end;
`, te = x.span`
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
    fill: var(${i.foreground});
  }
`;
export {
  H as C,
  ae as T
};
