import { i as _, r as n } from "./ThemeStyles.c0d84d2f.js";
import { A as R, i as w, r as I, w as O, y as A, z as D, a as T, d as q, f as B, $ as y, g as x, b as H, o as K } from "./index.module.a5a23f10.js";
import { _ as g } from "./index.esm.97fc0c41.js";
function W(e, t) {
  return () => e({
    matcher: _(R, w, I),
    effect: async (o, a) => {
      const {
        config: { data: c }
      } = a.getState();
      t.postMessage({ command: "saveConfig", payload: c });
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
    actionCreator: A,
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
const E = "Checkbox", [N, te] = T(E), [z, X] = N(E), j = /* @__PURE__ */ n.forwardRef((e, t) => {
  const { __scopeCheckbox: o, name: a, checked: c, defaultChecked: d, required: p, disabled: f, value: u = "on", onCheckedChange: $, ...h } = e, [s, m] = n.useState(null), S = q(
    t,
    (r) => m(r)
  ), C = n.useRef(!1), k = s ? !!s.closest("form") : !0, [l = !1, v] = B({
    prop: c,
    defaultProp: d,
    onChange: $
  }), P = n.useRef(l);
  return n.useEffect(() => {
    const r = s == null ? void 0 : s.form;
    if (r) {
      const b = () => v(P.current);
      return r.addEventListener("reset", b), () => r.removeEventListener("reset", b);
    }
  }, [
    s,
    v
  ]), /* @__PURE__ */ n.createElement(z, {
    scope: o,
    state: l,
    disabled: f
  }, /* @__PURE__ */ n.createElement(y.button, g({
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
    onKeyDown: x(e.onKeyDown, (r) => {
      r.key === "Enter" && r.preventDefault();
    }),
    onClick: x(e.onClick, (r) => {
      v(
        (b) => i(b) ? !0 : !b
      ), k && (C.current = r.isPropagationStopped(), C.current || r.stopPropagation());
    })
  })), k && /* @__PURE__ */ n.createElement(J, {
    control: s,
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
  const { __scopeCheckbox: o, forceMount: a, ...c } = e, d = X(F, o);
  return /* @__PURE__ */ n.createElement(H, {
    present: a || i(d.state) || d.state === !0
  }, /* @__PURE__ */ n.createElement(y.span, g({
    "data-state": M(d.state),
    "data-disabled": d.disabled ? "" : void 0
  }, c, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), J = (e) => {
  const { control: t, checked: o, bubbles: a = !0, ...c } = e, d = n.useRef(null), p = L(o), f = K(t);
  return n.useEffect(() => {
    const u = d.current, $ = window.HTMLInputElement.prototype, s = Object.getOwnPropertyDescriptor($, "checked").set;
    if (p !== o && s) {
      const m = new Event("click", {
        bubbles: a
      });
      u.indeterminate = i(o), s.call(u, i(o) ? !1 : o), u.dispatchEvent(m);
    }
  }, [
    p,
    o,
    a
  ]), /* @__PURE__ */ n.createElement("input", g({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: i(o) ? !1 : o
  }, c, {
    tabIndex: -1,
    ref: d,
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
const oe = j, ne = G;
export {
  oe as $,
  ne as a,
  Z as b,
  ee as c,
  Y as d,
  W as o
};
