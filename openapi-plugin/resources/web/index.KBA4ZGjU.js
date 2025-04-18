import { f as s, x as D, Y as M, a6 as N, j as p, y as R, z as P, X as B } from "./TriangleExclamation.pAuQxBo5.js";
import { u as O } from "./index.DCZAKVNa.js";
function z(e) {
  const o = s.useRef({ value: e, previous: e });
  return s.useMemo(() => (o.current.value !== e && (o.current.previous = o.current.value, o.current.value = e), o.current.previous), [e]);
}
var v = "Checkbox", [A, T] = D(v), [H, K] = A(v), I = s.forwardRef(
  (e, o) => {
    const {
      __scopeCheckbox: t,
      name: i,
      checked: f,
      defaultChecked: c,
      required: h,
      disabled: u,
      value: d = "on",
      onCheckedChange: k,
      ...y
    } = e, [n, x] = s.useState(null), w = M(o, (r) => x(r)), C = s.useRef(!1), E = n ? !!n.closest("form") : !0, [l = !1, m] = N({
      prop: f,
      defaultProp: c,
      onChange: k
    }), _ = s.useRef(l);
    return s.useEffect(() => {
      const r = n == null ? void 0 : n.form;
      if (r) {
        const b = () => m(_.current);
        return r.addEventListener("reset", b), () => r.removeEventListener("reset", b);
      }
    }, [n, m]), /* @__PURE__ */ p.jsxs(H, { scope: t, state: l, disabled: u, children: [
      /* @__PURE__ */ p.jsx(
        R.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": a(l) ? "mixed" : l,
          "aria-required": h,
          "data-state": g(l),
          "data-disabled": u ? "" : void 0,
          disabled: u,
          value: d,
          ...y,
          ref: w,
          onKeyDown: P(e.onKeyDown, (r) => {
            r.key === "Enter" && r.preventDefault();
          }),
          onClick: P(e.onClick, (r) => {
            m((b) => a(b) ? !0 : !b), E && (C.current = r.isPropagationStopped(), C.current || r.stopPropagation());
          })
        }
      ),
      E && /* @__PURE__ */ p.jsx(
        L,
        {
          control: n,
          bubbles: !C.current,
          name: i,
          value: d,
          checked: l,
          required: h,
          disabled: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
I.displayName = v;
var S = "CheckboxIndicator", j = s.forwardRef(
  (e, o) => {
    const { __scopeCheckbox: t, forceMount: i, ...f } = e, c = K(S, t);
    return /* @__PURE__ */ p.jsx(B, { present: i || a(c.state) || c.state === !0, children: /* @__PURE__ */ p.jsx(
      R.span,
      {
        "data-state": g(c.state),
        "data-disabled": c.disabled ? "" : void 0,
        ...f,
        ref: o,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
j.displayName = S;
var L = (e) => {
  const { control: o, checked: t, bubbles: i = !0, ...f } = e, c = s.useRef(null), h = z(t), u = O(o);
  return s.useEffect(() => {
    const d = c.current, k = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(k, "checked").set;
    if (h !== t && n) {
      const x = new Event("click", { bubbles: i });
      d.indeterminate = a(t), n.call(d, a(t) ? !1 : t), d.dispatchEvent(x);
    }
  }, [h, t, i]), /* @__PURE__ */ p.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: a(t) ? !1 : t,
      ...f,
      tabIndex: -1,
      ref: c,
      style: {
        ...e.style,
        ...u,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function a(e) {
  return e === "indeterminate";
}
function g(e) {
  return a(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var F = I, Y = j;
export {
  Y as I,
  F as R,
  z as u
};
