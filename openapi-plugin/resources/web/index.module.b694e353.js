import { i as _, r as n, _ as v } from "./styled-components.browser.esm.b4077a0f.js";
import { d as R, a as I, r as w, t as O, f as q, g as D } from "./ProgressButton.26aa5f1e.js";
import { $ as T, a as A, e as B, d as y, f as x, i as H, q as K } from "./index.module.827db8cc.js";
function W(e, t) {
  return () => e({
    matcher: _(R, I, w),
    effect: async (o, a) => {
      const {
        config: { data: c, hasErrors: r }
      } = a.getState();
      r ? console.log("not saving config, has errors") : t.postMessage({ command: "saveConfig", payload: c });
    }
  });
}
function Y(e, t) {
  return () => e({
    actionCreator: O,
    effect: async (o, a) => {
      const c = a.getState();
      t.postMessage({
        command: "saveConfig",
        payload: c.config.data
      }), t.postMessage({
        command: "testPlatformConnection",
        payload: void 0
      });
    }
  });
}
function Z(e, t) {
  return () => e({
    actionCreator: q,
    effect: async (o, a) => {
      const c = a.getState();
      t.postMessage({
        command: "saveConfig",
        payload: c.config.data
      }), t.postMessage({
        command: "testOverlordConnection",
        payload: void 0
      });
    }
  });
}
function ee(e, t) {
  return () => e({
    actionCreator: D,
    effect: async (o, a) => {
      const c = a.getState();
      t.postMessage({
        command: "saveConfig",
        payload: c.config.data
      }), t.postMessage({
        command: "testScandManagerConnection",
        payload: void 0
      });
    }
  });
}
function L(e) {
  const t = n.useRef({
    value: e,
    previous: e
  });
  return n.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const E = "Checkbox", [N, te] = T(E), [X, j] = N(E), z = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeCheckbox: o, name: a, checked: c, defaultChecked: r, required: p, disabled: f, value: u = "on", onCheckedChange: b, ...h } = e, [d, m] = n.useState(null), S = A(
    t,
    (s) => m(s)
  ), C = n.useRef(!1), k = d ? !!d.closest("form") : !0, [l = !1, g] = B({
    prop: c,
    defaultProp: r,
    onChange: b
  }), P = n.useRef(l);
  return n.useEffect(() => {
    const s = d == null ? void 0 : d.form;
    if (s) {
      const $ = () => g(P.current);
      return s.addEventListener("reset", $), () => s.removeEventListener("reset", $);
    }
  }, [
    d,
    g
  ]), /* @__PURE__ */ n.createElement(X, {
    scope: o,
    state: l,
    disabled: f
  }, /* @__PURE__ */ n.createElement(y.button, v({
    type: "button",
    role: "checkbox",
    "aria-checked": i(l) ? "mixed" : l,
    "aria-required": p,
    "data-state": M(l),
    "data-disabled": f ? "" : void 0,
    disabled: f,
    value: u
  }, h, {
    ref: S,
    onKeyDown: x(e.onKeyDown, (s) => {
      s.key === "Enter" && s.preventDefault();
    }),
    onClick: x(e.onClick, (s) => {
      g(
        ($) => i($) ? !0 : !$
      ), k && (C.current = s.isPropagationStopped(), C.current || s.stopPropagation());
    })
  })), k && /* @__PURE__ */ n.createElement(J, {
    control: d,
    bubbles: !C.current,
    name: a,
    value: u,
    checked: l,
    required: p,
    disabled: f,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), F = "CheckboxIndicator", G = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeCheckbox: o, forceMount: a, ...c } = e, r = j(F, o);
  return /* @__PURE__ */ n.createElement(H, {
    present: a || i(r.state) || r.state === !0
  }, /* @__PURE__ */ n.createElement(y.span, v({
    "data-state": M(r.state),
    "data-disabled": r.disabled ? "" : void 0
  }, c, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), J = (e) => {
  const { control: t, checked: o, bubbles: a = !0, ...c } = e, r = n.useRef(null), p = L(o), f = K(t);
  return n.useEffect(() => {
    const u = r.current, b = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(b, "checked").set;
    if (p !== o && d) {
      const m = new Event("click", {
        bubbles: a
      });
      u.indeterminate = i(o), d.call(u, i(o) ? !1 : o), u.dispatchEvent(m);
    }
  }, [
    p,
    o,
    a
  ]), /* @__PURE__ */ n.createElement("input", v({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: i(o) ? !1 : o
  }, c, {
    tabIndex: -1,
    ref: r,
    style: {
      ...e.style,
      ...f,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function i(e) {
  return e === "indeterminate";
}
function M(e) {
  return i(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const oe = z, ne = G;
export {
  oe as $,
  ne as a,
  Z as b,
  ee as c,
  Y as d,
  W as o
};
