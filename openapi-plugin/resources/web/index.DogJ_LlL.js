import { f as n, j as d, z as F, X as L, A as P, a6 as O, Z as j, C as S } from "./TriangleExclamation.D0e1MsJn.js";
import { u as z } from "./index.BqwrZKA9.js";
function H(e) {
  const r = n.useRef({ value: e, previous: e });
  return n.useMemo(() => (r.current.value !== e && (r.current.previous = r.current.value, r.current.value = e), r.current.previous), [e]);
}
var R = "Checkbox", [X, W] = F(R), [G, g] = X(R);
function K(e) {
  const {
    __scopeCheckbox: r,
    checked: a,
    children: l,
    defaultChecked: s,
    disabled: t,
    form: p,
    name: h,
    onCheckedChange: i,
    required: C,
    value: k = "on",
    // @ts-expect-error
    internal_do_not_use_render: u
  } = e, [f, v] = O({
    prop: a,
    defaultProp: s ?? !1,
    onChange: i,
    caller: R
  }), [m, x] = n.useState(null), [E, o] = n.useState(null), c = n.useRef(!1), _ = m ? !!p || !!m.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), I = {
    checked: f,
    disabled: t,
    setChecked: v,
    control: m,
    setControl: x,
    name: h,
    form: p,
    value: k,
    hasConsumerStoppedPropagationRef: c,
    required: C,
    defaultChecked: b(s) ? !1 : s,
    isFormControl: _,
    bubbleInput: E,
    setBubbleInput: o
  };
  return /* @__PURE__ */ d.jsx(
    G,
    {
      scope: r,
      ...I,
      children: J(u) ? u(I) : l
    }
  );
}
var N = "CheckboxTrigger", w = n.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: r, onClick: a, ...l }, s) => {
    const {
      control: t,
      value: p,
      disabled: h,
      checked: i,
      required: C,
      setControl: k,
      setChecked: u,
      hasConsumerStoppedPropagationRef: f,
      isFormControl: v,
      bubbleInput: m
    } = g(N, e), x = j(s, k), E = n.useRef(i);
    return n.useEffect(() => {
      const o = t == null ? void 0 : t.form;
      if (o) {
        const c = () => u(E.current);
        return o.addEventListener("reset", c), () => o.removeEventListener("reset", c);
      }
    }, [t, u]), /* @__PURE__ */ d.jsx(
      P.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": b(i) ? "mixed" : i,
        "aria-required": C,
        "data-state": T(i),
        "data-disabled": h ? "" : void 0,
        disabled: h,
        value: p,
        ...l,
        ref: x,
        onKeyDown: S(r, (o) => {
          o.key === "Enter" && o.preventDefault();
        }),
        onClick: S(a, (o) => {
          u((c) => b(c) ? !0 : !c), m && v && (f.current = o.isPropagationStopped(), f.current || o.stopPropagation());
        })
      }
    );
  }
);
w.displayName = N;
var U = n.forwardRef(
  (e, r) => {
    const {
      __scopeCheckbox: a,
      name: l,
      checked: s,
      defaultChecked: t,
      required: p,
      disabled: h,
      value: i,
      onCheckedChange: C,
      form: k,
      ...u
    } = e;
    return /* @__PURE__ */ d.jsx(
      K,
      {
        __scopeCheckbox: a,
        checked: s,
        defaultChecked: t,
        disabled: h,
        required: p,
        onCheckedChange: C,
        name: l,
        form: k,
        value: i,
        internal_do_not_use_render: ({ isFormControl: f }) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            w,
            {
              ...u,
              ref: r,
              __scopeCheckbox: a
            }
          ),
          f && /* @__PURE__ */ d.jsx(
            A,
            {
              __scopeCheckbox: a
            }
          )
        ] })
      }
    );
  }
);
U.displayName = R;
var B = "CheckboxIndicator", Z = n.forwardRef(
  (e, r) => {
    const { __scopeCheckbox: a, forceMount: l, ...s } = e, t = g(B, a);
    return /* @__PURE__ */ d.jsx(
      L,
      {
        present: l || b(t.checked) || t.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          P.span,
          {
            "data-state": T(t.checked),
            "data-disabled": t.disabled ? "" : void 0,
            ...s,
            ref: r,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Z.displayName = B;
var M = "CheckboxBubbleInput", A = n.forwardRef(
  ({ __scopeCheckbox: e, ...r }, a) => {
    const {
      control: l,
      hasConsumerStoppedPropagationRef: s,
      checked: t,
      defaultChecked: p,
      required: h,
      disabled: i,
      name: C,
      value: k,
      form: u,
      bubbleInput: f,
      setBubbleInput: v
    } = g(M, e), m = j(a, v), x = H(t), E = z(l);
    n.useEffect(() => {
      const c = f;
      if (!c) return;
      const _ = window.HTMLInputElement.prototype, y = Object.getOwnPropertyDescriptor(
        _,
        "checked"
      ).set, q = !s.current;
      if (x !== t && y) {
        const D = new Event("click", { bubbles: q });
        c.indeterminate = b(t), y.call(c, b(t) ? !1 : t), c.dispatchEvent(D);
      }
    }, [f, x, t, s]);
    const o = n.useRef(b(t) ? !1 : t);
    return /* @__PURE__ */ d.jsx(
      P.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: p ?? o.current,
        required: h,
        disabled: i,
        name: C,
        value: k,
        form: u,
        ...r,
        tabIndex: -1,
        ref: m,
        style: {
          ...r.style,
          ...E,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
A.displayName = M;
function J(e) {
  return typeof e == "function";
}
function b(e) {
  return e === "indeterminate";
}
function T(e) {
  return b(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
export {
  U as C,
  Z as a,
  H as u
};
