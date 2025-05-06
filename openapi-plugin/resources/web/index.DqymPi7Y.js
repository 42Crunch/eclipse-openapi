import { f as o, Z as _, a6 as A, j as l, y as D, z as P, A as S, X as L } from "./TriangleExclamation.D70Relru.js";
import { u as O } from "./index.aQ3B6zWx.js";
function z(e) {
  const n = o.useRef({ value: e, previous: e });
  return o.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
var v = "Checkbox", [H, F] = D(v), [K, T] = H(v), j = o.forwardRef(
  (e, n) => {
    const {
      __scopeCheckbox: t,
      name: u,
      checked: p,
      defaultChecked: s,
      required: x,
      disabled: i,
      value: h = "on",
      onCheckedChange: m,
      form: b,
      ...E
    } = e, [r, R] = o.useState(null), I = _(n, (a) => R(a)), d = o.useRef(!1), k = r ? b || !!r.closest("form") : !0, [f, y] = A({
      prop: p,
      defaultProp: s ?? !1,
      onChange: m,
      caller: v
    }), M = o.useRef(f);
    return o.useEffect(() => {
      const a = r == null ? void 0 : r.form;
      if (a) {
        const C = () => y(M.current);
        return a.addEventListener("reset", C), () => a.removeEventListener("reset", C);
      }
    }, [r, y]), /* @__PURE__ */ l.jsxs(K, { scope: t, state: f, disabled: i, children: [
      /* @__PURE__ */ l.jsx(
        P.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": c(f) ? "mixed" : f,
          "aria-required": x,
          "data-state": B(f),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: h,
          ...E,
          ref: I,
          onKeyDown: S(e.onKeyDown, (a) => {
            a.key === "Enter" && a.preventDefault();
          }),
          onClick: S(e.onClick, (a) => {
            y((C) => c(C) ? !0 : !C), k && (d.current = a.isPropagationStopped(), d.current || a.stopPropagation());
          })
        }
      ),
      k && /* @__PURE__ */ l.jsx(
        N,
        {
          control: r,
          bubbles: !d.current,
          name: u,
          value: h,
          checked: f,
          required: x,
          disabled: i,
          form: b,
          style: { transform: "translateX(-100%)" },
          defaultChecked: c(s) ? !1 : s
        }
      )
    ] });
  }
);
j.displayName = v;
var w = "CheckboxIndicator", g = o.forwardRef(
  (e, n) => {
    const { __scopeCheckbox: t, forceMount: u, ...p } = e, s = T(w, t);
    return /* @__PURE__ */ l.jsx(L, { present: u || c(s.state) || s.state === !0, children: /* @__PURE__ */ l.jsx(
      P.span,
      {
        "data-state": B(s.state),
        "data-disabled": s.disabled ? "" : void 0,
        ...p,
        ref: n,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
g.displayName = w;
var X = "CheckboxBubbleInput", N = o.forwardRef(
  ({
    __scopeCheckbox: e,
    control: n,
    checked: t,
    bubbles: u = !0,
    defaultChecked: p,
    ...s
  }, x) => {
    const i = o.useRef(null), h = _(i, x), m = z(t), b = O(n);
    o.useEffect(() => {
      const r = i.current;
      if (!r) return;
      const R = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(
        R,
        "checked"
      ).set;
      if (m !== t && d) {
        const k = new Event("click", { bubbles: u });
        r.indeterminate = c(t), d.call(r, c(t) ? !1 : t), r.dispatchEvent(k);
      }
    }, [m, t, u]);
    const E = o.useRef(c(t) ? !1 : t);
    return /* @__PURE__ */ l.jsx(
      P.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: p ?? E.current,
        ...s,
        tabIndex: -1,
        ref: h,
        style: {
          ...s.style,
          ...b,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
N.displayName = X;
function c(e) {
  return e === "indeterminate";
}
function B(e) {
  return c(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var Z = j, G = g;
export {
  G as I,
  Z as R,
  z as u
};
