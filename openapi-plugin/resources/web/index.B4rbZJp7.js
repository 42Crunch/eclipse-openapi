import { i as R, W as B, q as M, T as b, e as s, j as x, _ as h } from "./TriangleExclamation.C9TIeFdu.js";
import { r as T, a as O, m as j, t as q, g as D, h as L, i as A, j as N, o as H } from "./index.B4v_rV4O.js";
import { S as W } from "./Spinner.X2Q_jB0C.js";
import { $ as F, c as K, a as X, b as S, d as E, e as z, f as V } from "./index.DA5DQXjg.js";
function de(e, t) {
  return () => e({
    matcher: R(j, O, T),
    effect: async (o, n) => {
      const {
        config: { data: a, hasErrors: r }
      } = n.getState();
      r ? console.log("not saving config, has errors") : t.postMessage({ command: "saveConfig", payload: a });
    }
  });
}
function fe(e, t) {
  return () => e({
    actionCreator: q,
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
function ue(e, t) {
  return () => e({
    actionCreator: D,
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
function le(e, t) {
  return () => e({
    actionCreator: L,
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
function pe(e, t) {
  return () => e({
    actionCreator: A,
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
function me(e, t) {
  return () => e({
    actionCreator: N,
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
function be(e, t) {
  return () => e({
    actionCreator: H,
    effect: async (o, n) => {
      t.postMessage({
        command: "openLink",
        payload: o.payload
      });
    }
  });
}
function G({
  label: e,
  disabled: t,
  waiting: o,
  onClick: n,
  className: a
}) {
  const [r, f] = s.useState(o);
  return s.useEffect(() => {
    let d;
    return o ? f(!0) : d = setTimeout(() => {
      f(!1);
    }, 300), () => {
      clearTimeout(d);
    };
  }, [o]), /* @__PURE__ */ x.jsxs(
    Q,
    {
      className: a,
      onClick: n,
      disabled: t || r,
      waiting: r,
      children: [
        /* @__PURE__ */ x.jsx("span", { children: e }),
        /* @__PURE__ */ x.jsx(W, {})
      ]
    }
  );
}
const J = B`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, Q = M.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  background-color: var(${b.buttonBackground});
  color: var(${b.buttonForeground});
  border: 1px solid var(${b.buttonBorder});
  ${({ waiting: e }) => e && "gap: 8px;"}

  > span {
    flex: 1;
  }
  > svg {
    fill: var(${b.buttonForeground});
    animation: ${J} 2s infinite linear;
    transition: width 0.2s linear;
    ${({ waiting: e }) => !e && "width: 0;"}
  }
`, $e = M(G)`
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${b.focusBorder});
  }
`;
function U(e) {
  const t = s.useRef({
    value: e,
    previous: e
  });
  return s.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const P = "Checkbox", [Y, ge] = F(P), [Z, ee] = Y(P), te = /* @__PURE__ */ s.forwardRef((e, t) => {
  const { __scopeCheckbox: o, name: n, checked: a, defaultChecked: r, required: f, disabled: d, value: l = "on", onCheckedChange: $, ...k } = e, [i, g] = s.useState(null), _ = K(
    t,
    (c) => g(c)
  ), C = s.useRef(!1), y = i ? !!i.closest("form") : !0, [p = !1, v] = X({
    prop: a,
    defaultProp: r,
    onChange: $
  }), I = s.useRef(p);
  return s.useEffect(() => {
    const c = i == null ? void 0 : i.form;
    if (c) {
      const m = () => v(I.current);
      return c.addEventListener("reset", m), () => c.removeEventListener("reset", m);
    }
  }, [
    i,
    v
  ]), /* @__PURE__ */ s.createElement(Z, {
    scope: o,
    state: p,
    disabled: d
  }, /* @__PURE__ */ s.createElement(S.button, h({
    type: "button",
    role: "checkbox",
    "aria-checked": u(p) ? "mixed" : p,
    "aria-required": f,
    "data-state": w(p),
    "data-disabled": d ? "" : void 0,
    disabled: d,
    value: l
  }, k, {
    ref: _,
    onKeyDown: E(e.onKeyDown, (c) => {
      c.key === "Enter" && c.preventDefault();
    }),
    onClick: E(e.onClick, (c) => {
      v(
        (m) => u(m) ? !0 : !m
      ), y && (C.current = c.isPropagationStopped(), C.current || c.stopPropagation());
    })
  })), y && /* @__PURE__ */ s.createElement(ae, {
    control: i,
    bubbles: !C.current,
    name: n,
    value: l,
    checked: p,
    required: f,
    disabled: d,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), oe = "CheckboxIndicator", ne = /* @__PURE__ */ s.forwardRef((e, t) => {
  const { __scopeCheckbox: o, forceMount: n, ...a } = e, r = ee(oe, o);
  return /* @__PURE__ */ s.createElement(z, {
    present: n || u(r.state) || r.state === !0
  }, /* @__PURE__ */ s.createElement(S.span, h({
    "data-state": w(r.state),
    "data-disabled": r.disabled ? "" : void 0
  }, a, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), ae = (e) => {
  const { control: t, checked: o, bubbles: n = !0, ...a } = e, r = s.useRef(null), f = U(o), d = V(t);
  return s.useEffect(() => {
    const l = r.current, $ = window.HTMLInputElement.prototype, i = Object.getOwnPropertyDescriptor($, "checked").set;
    if (f !== o && i) {
      const g = new Event("click", {
        bubbles: n
      });
      l.indeterminate = u(o), i.call(l, u(o) ? !1 : o), l.dispatchEvent(g);
    }
  }, [
    f,
    o,
    n
  ]), /* @__PURE__ */ s.createElement("input", h({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: u(o) ? !1 : o
  }, a, {
    tabIndex: -1,
    ref: r,
    style: {
      ...e.style,
      ...d,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function u(e) {
  return e === "indeterminate";
}
function w(e) {
  return u(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Ce = te, ve = ne;
export {
  Ce as $,
  $e as N,
  G as P,
  ve as a,
  U as b,
  ue as c,
  le as d,
  fe as e,
  pe as f,
  me as g,
  be as h,
  de as o
};
