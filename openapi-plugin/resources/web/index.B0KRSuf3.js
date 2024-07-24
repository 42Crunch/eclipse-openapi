import { i as O, e as i, j as p } from "./TriangleExclamation.uZuTZ4qX.js";
import { r as D, a as L, k as T, t as _, f as A, g as H, i as N, h as B, v as K } from "./index.DPw-_6Pf.js";
import { c as q, u as z, e as X, P as M, a as S, b as F, d as G } from "./index.DWATSeOz.js";
function ee(e, t) {
  return () => e({
    matcher: O(T, L, D),
    effect: async (o, n) => {
      const {
        config: { data: a, hasErrors: s }
      } = n.getState();
      s ? console.log("not saving config, has errors") : t.postMessage({ command: "saveConfig", payload: a });
    }
  });
}
function te(e, t) {
  return () => e({
    actionCreator: _,
    effect: async (o, n) => {
      const a = n.getState();
      t.postMessage({
        command: "saveConfig",
        payload: a.config.data
      }), t.postMessage({
        command: "testPlatformConnection",
        payload: void 0
      });
    }
  });
}
function oe(e, t) {
  return () => e({
    actionCreator: A,
    effect: async (o, n) => {
      const a = n.getState();
      t.postMessage({
        command: "saveConfig",
        payload: a.config.data
      }), t.postMessage({
        command: "testOverlordConnection",
        payload: void 0
      });
    }
  });
}
function ne(e, t) {
  return () => e({
    actionCreator: H,
    effect: async (o, n) => {
      const a = n.getState();
      t.postMessage({
        command: "saveConfig",
        payload: a.config.data
      }), t.postMessage({
        command: "testScandManagerConnection",
        payload: void 0
      });
    }
  });
}
function ae(e, t) {
  return () => e({
    actionCreator: N,
    effect: async (o, n) => {
      const a = n.getState();
      t.postMessage({
        command: "saveConfig",
        payload: a.config.data
      }), t.postMessage({
        command: "testCli",
        payload: void 0
      });
    }
  });
}
function se(e, t) {
  return () => e({
    actionCreator: B,
    effect: async (o, n) => {
      const a = n.getState();
      t.postMessage({
        command: "saveConfig",
        payload: a.config.data
      }), t.postMessage({
        command: "downloadCli",
        payload: void 0
      });
    }
  });
}
function re(e, t) {
  return () => e({
    actionCreator: K,
    effect: async (o, n) => {
      t.postMessage({
        command: "openLink",
        payload: o.payload
      });
    }
  });
}
function J(e) {
  const t = i.useRef({ value: e, previous: e });
  return i.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var h = "Checkbox", [Q, ce] = q(h), [U, V] = Q(h), P = i.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: o,
      name: n,
      checked: a,
      defaultChecked: s,
      required: m,
      disabled: f,
      value: u = "on",
      onCheckedChange: g,
      ...b
    } = e, [c, v] = i.useState(null), w = z(t, (r) => v(r)), y = i.useRef(!1), x = c ? !!c.closest("form") : !0, [l = !1, k] = X({
      prop: a,
      defaultProp: s,
      onChange: g
    }), j = i.useRef(l);
    return i.useEffect(() => {
      const r = c == null ? void 0 : c.form;
      if (r) {
        const C = () => k(j.current);
        return r.addEventListener("reset", C), () => r.removeEventListener("reset", C);
      }
    }, [c, k]), /* @__PURE__ */ p.jsxs(U, { scope: o, state: l, disabled: f, children: [
      /* @__PURE__ */ p.jsx(
        M.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": d(l) ? "mixed" : l,
          "aria-required": m,
          "data-state": I(l),
          "data-disabled": f ? "" : void 0,
          disabled: f,
          value: u,
          ...b,
          ref: w,
          onKeyDown: S(e.onKeyDown, (r) => {
            r.key === "Enter" && r.preventDefault();
          }),
          onClick: S(e.onClick, (r) => {
            k((C) => d(C) ? !0 : !C), x && (y.current = r.isPropagationStopped(), y.current || r.stopPropagation());
          })
        }
      ),
      x && /* @__PURE__ */ p.jsx(
        W,
        {
          control: c,
          bubbles: !y.current,
          name: n,
          value: u,
          checked: l,
          required: m,
          disabled: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
P.displayName = h;
var E = "CheckboxIndicator", R = i.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: o, forceMount: n, ...a } = e, s = V(E, o);
    return /* @__PURE__ */ p.jsx(F, { present: n || d(s.state) || s.state === !0, children: /* @__PURE__ */ p.jsx(
      M.span,
      {
        "data-state": I(s.state),
        "data-disabled": s.disabled ? "" : void 0,
        ...a,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
R.displayName = E;
var W = (e) => {
  const { control: t, checked: o, bubbles: n = !0, ...a } = e, s = i.useRef(null), m = J(o), f = G(t);
  return i.useEffect(() => {
    const u = s.current, g = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(g, "checked").set;
    if (m !== o && c) {
      const v = new Event("click", { bubbles: n });
      u.indeterminate = d(o), c.call(u, d(o) ? !1 : o), u.dispatchEvent(v);
    }
  }, [m, o, n]), /* @__PURE__ */ p.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: d(o) ? !1 : o,
      ...a,
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
    }
  );
};
function d(e) {
  return e === "indeterminate";
}
function I(e) {
  return d(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var ie = P, de = R;
export {
  de as I,
  ie as R,
  oe as a,
  ne as b,
  te as c,
  ae as d,
  se as e,
  re as f,
  ee as o,
  J as u
};
