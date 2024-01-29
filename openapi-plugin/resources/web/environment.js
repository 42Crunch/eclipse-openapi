import { a as E, l as y, t as w, d as S, s as C, e as o, T as s, j as e, g as $, R as F, P as k, m as V, k as A, o as R } from "./webapp.yF4PwBss.js";
import { e as M, f, u as L, h as N, l as T } from "./index.lcFuHH3z.js";
import { T as _ } from "./Tabs.fwjiQaQD.js";
import { u as P, a as p, d as D, b as G, F as W } from "./index.esm.Shro8ov1.js";
import { S as H } from "./ExclamationCircle.i2K0Pqn4.js";
import { m as K, n as X, S as B } from "./variables.uoOWHIbL.js";
const I = {
  theme: w,
  env: M
}, O = (n, t) => E({
  reducer: I,
  middleware: (r) => r().prepend(n.middleware).concat(y),
  preloadedState: {
    theme: t
  }
}), g = S(), q = g.startListening;
function z(n) {
  return C({
    saveEnv: () => q({
      actionCreator: f,
      effect: async (r, a) => {
        n.postMessage({
          command: "saveEnv",
          payload: r.payload
        });
      }
    })
  }), g;
}
function J({ name: n, remove: t }) {
  const { control: r } = P(), {
    field: a,
    fieldState: { error: i }
  } = p({
    name: `${n}.key`,
    control: r,
    rules: {
      pattern: {
        value: K(),
        message: X
      }
    }
  }), { field: d } = p({
    name: `${n}.value`,
    control: r
  });
  return /* @__PURE__ */ e.jsxs(Q, { children: [
    /* @__PURE__ */ e.jsxs(U, { children: [
      /* @__PURE__ */ e.jsx(Y, { type: "text", ...a }),
      /* @__PURE__ */ e.jsx(Z, { type: "text", ...d }),
      /* @__PURE__ */ e.jsx(
        ee,
        {
          onClick: (l) => {
            l.preventDefault(), l.stopPropagation(), t();
          },
          children: /* @__PURE__ */ e.jsx(B, {})
        }
      )
    ] }),
    i && /* @__PURE__ */ e.jsxs(ne, { children: [
      /* @__PURE__ */ e.jsx(H, {}),
      "  ",
      i.message
    ] })
  ] });
}
const Q = o.div`
  margin-bottom: 10px;
`, U = o.div`
  display: flex;
  &:hover > :last-child {
    visibility: visible;
  }
`, Y = o.input`
  flex: 1;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${s.border});
  color: var(${s.foreground});
  margin-right: 10px;
`, Z = o.input`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${s.border});
  color: var(${s.foreground});
`, ee = o.button`
  background: none;
  border: none;
  padding: 0;
  width: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  > svg {
    fill: var(${s.foreground});
  }
`, ne = o.div`
  padding: 4px;
  display: flex;
`;
function re({ append: n }) {
  return /* @__PURE__ */ e.jsxs(te, { children: [
    /* @__PURE__ */ e.jsx(
      oe,
      {
        placeholder: "name",
        value: "",
        onChange: (t) => {
          n({ key: t.target.value, value: "" }, { shouldFocus: !0 });
        }
      }
    ),
    /* @__PURE__ */ e.jsx(se, {})
  ] });
}
const te = o.div`
  display: flex;
`, oe = o.input`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${s.border});
  color: var(${s.foreground});
  margin-right: 10px;
`, se = o.div`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${s.border});
  margin-right: 1.5em;
`;
function v({
  name: n,
  data: t
}) {
  const r = L(), a = ie(t), i = D({
    defaultValues: a,
    mode: "onChange"
  }), { handleSubmit: d, control: l } = i;
  function u(m) {
    const c = de(m);
    r(f({ name: n, environment: c }));
  }
  const { fields: h, append: b, remove: j } = G({
    control: l,
    name: "values"
  });
  return /* @__PURE__ */ e.jsx(W, { ...i, children: /* @__PURE__ */ e.jsxs(ae, { onChange: d(u), children: [
    h.map((m, c) => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
      J,
      {
        name: `values.${c}`,
        remove: () => {
          j(c), d(u)();
        }
      }
    ) }, m.id)),
    /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(re, { append: b }) })
  ] }) });
}
const ae = o.form`
  padding: 8px;
`;
function ie(n) {
  return { values: Object.entries(n).map(([r, a]) => ({ key: r, value: a })) };
}
function de(n) {
  const t = {};
  for (const r of n.values)
    t[r.key] = r.value;
  return t;
}
function le() {
  const { data: n, ready: t } = N((r) => r.env);
  return t ? /* @__PURE__ */ e.jsx(x, { children: /* @__PURE__ */ e.jsx(
    _,
    {
      tabs: [
        {
          id: "default",
          title: "Default",
          content: /* @__PURE__ */ e.jsx(v, { name: "default", data: n.default })
        },
        {
          id: "secrets",
          title: "Secrets",
          content: /* @__PURE__ */ e.jsx(v, { name: "secrets", data: n.secrets })
        }
      ]
    }
  ) }) : /* @__PURE__ */ e.jsx(x, { children: "Loading environment data..." });
}
const x = o.div`
  margin: 4px;
`, ce = {
  changeTheme: R,
  loadEnv: T
};
function me() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, {}),
    /* @__PURE__ */ e.jsx(le, {})
  ] });
}
function ue(n, t) {
  const r = O(z(n), t);
  $(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(F.StrictMode, { children: /* @__PURE__ */ e.jsx(k, { store: r, children: /* @__PURE__ */ e.jsx(me, {}) }) })
  ), window.addEventListener("message", V(r, ce));
}
window.renderWebView = ue;
