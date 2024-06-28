import { i as w, e as c, _ as v } from "./TriangleExclamation.C66B3qS3.js";
import { r as _, a as R, m as I, t as O, g as D, h as L, i as T, j as A, w as q } from "./index.D4Zh1vk8.js";
import { $ as B, c as H, a as K, b as x, d as y, e as N, f as j } from "./index.D2z-X8Fl.js";
function ee(e, t) {
  return () => e({
    matcher: w(I, R, _),
    effect: async (o, a) => {
      const {
        config: { data: n, hasErrors: s }
      } = a.getState();
      s ? console.log("not saving config, has errors") : t.postMessage({ command: "saveConfig", payload: n });
    }
  });
}
function te(e, t) {
  return () => e({
    actionCreator: O,
    effect: async (o, a) => {
      const n = a.getState();
      t.postMessage({
        command: "saveConfig",
        payload: n.config.data
      }), t.postMessage({
        command: "testPlatformConnection",
        payload: void 0
      });
    }
  });
}
function oe(e, t) {
  return () => e({
    actionCreator: D,
    effect: async (o, a) => {
      const n = a.getState();
      t.postMessage({
        command: "saveConfig",
        payload: n.config.data
      }), t.postMessage({
        command: "testOverlordConnection",
        payload: void 0
      });
    }
  });
}
function ae(e, t) {
  return () => e({
    actionCreator: L,
    effect: async (o, a) => {
      const n = a.getState();
      t.postMessage({
        command: "saveConfig",
        payload: n.config.data
      }), t.postMessage({
        command: "testScandManagerConnection",
        payload: void 0
      });
    }
  });
}
function ne(e, t) {
  return () => e({
    actionCreator: T,
    effect: async (o, a) => {
      const n = a.getState();
      t.postMessage({
        command: "saveConfig",
        payload: n.config.data
      }), t.postMessage({
        command: "testCli",
        payload: void 0
      });
    }
  });
}
function ce(e, t) {
  return () => e({
    actionCreator: A,
    effect: async (o, a) => {
      const n = a.getState();
      t.postMessage({
        command: "saveConfig",
        payload: n.config.data
      }), t.postMessage({
        command: "downloadCli",
        payload: void 0
      });
    }
  });
}
function se(e, t) {
  return () => e({
    actionCreator: q,
    effect: async (o, a) => {
      t.postMessage({
        command: "openLink",
        payload: o.payload
      });
    }
  });
}
function X(e) {
  const t = c.useRef({
    value: e,
    previous: e
  });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const E = "Checkbox", [z, re] = B(E), [F, G] = z(E), J = /* @__PURE__ */ c.forwardRef((e, t) => {
  const { __scopeCheckbox: o, name: a, checked: n, defaultChecked: s, required: p, disabled: f, value: l = "on", onCheckedChange: $, ...h } = e, [d, m] = c.useState(null), S = H(
    t,
    (r) => m(r)
  ), C = c.useRef(!1), k = d ? !!d.closest("form") : !0, [u = !1, g] = K({
    prop: n,
    defaultProp: s,
    onChange: $
  }), P = c.useRef(u);
  return c.useEffect(() => {
    const r = d == null ? void 0 : d.form;
    if (r) {
      const b = () => g(P.current);
      return r.addEventListener("reset", b), () => r.removeEventListener("reset", b);
    }
  }, [
    d,
    g
  ]), /* @__PURE__ */ c.createElement(F, {
    scope: o,
    state: u,
    disabled: f
  }, /* @__PURE__ */ c.createElement(x.button, v({
    type: "button",
    role: "checkbox",
    "aria-checked": i(u) ? "mixed" : u,
    "aria-required": p,
    "data-state": M(u),
    "data-disabled": f ? "" : void 0,
    disabled: f,
    value: l
  }, h, {
    ref: S,
    onKeyDown: y(e.onKeyDown, (r) => {
      r.key === "Enter" && r.preventDefault();
    }),
    onClick: y(e.onClick, (r) => {
      g(
        (b) => i(b) ? !0 : !b
      ), k && (C.current = r.isPropagationStopped(), C.current || r.stopPropagation());
    })
  })), k && /* @__PURE__ */ c.createElement(V, {
    control: d,
    bubbles: !C.current,
    name: a,
    value: l,
    checked: u,
    required: p,
    disabled: f,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), Q = "CheckboxIndicator", U = /* @__PURE__ */ c.forwardRef((e, t) => {
  const { __scopeCheckbox: o, forceMount: a, ...n } = e, s = G(Q, o);
  return /* @__PURE__ */ c.createElement(N, {
    present: a || i(s.state) || s.state === !0
  }, /* @__PURE__ */ c.createElement(x.span, v({
    "data-state": M(s.state),
    "data-disabled": s.disabled ? "" : void 0
  }, n, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), V = (e) => {
  const { control: t, checked: o, bubbles: a = !0, ...n } = e, s = c.useRef(null), p = X(o), f = j(t);
  return c.useEffect(() => {
    const l = s.current, $ = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor($, "checked").set;
    if (p !== o && d) {
      const m = new Event("click", {
        bubbles: a
      });
      l.indeterminate = i(o), d.call(l, i(o) ? !1 : o), l.dispatchEvent(m);
    }
  }, [
    p,
    o,
    a
  ]), /* @__PURE__ */ c.createElement("input", v({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: i(o) ? !1 : o
  }, n, {
    tabIndex: -1,
    ref: s,
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
const de = J, ie = U;
export {
  de as $,
  ie as a,
  X as b,
  oe as c,
  ae as d,
  te as e,
  ne as f,
  ce as g,
  se as h,
  ee as o
};
