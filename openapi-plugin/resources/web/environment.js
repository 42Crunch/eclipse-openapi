import { a as y, l as w, t as S, d as C, s as $, q as o, T as s, j as e, f as F, R as k, P as V, m as A, h as R, n as M } from "./TriangleExclamation.nXQi8F2Q.js";
import { e as _, h as g, u as L, j as N, l as T } from "./slice.ClxfPkCJ.js";
import { T as P } from "./Tabs.BbfVcI6x.js";
import { u as D, a as v, d as G, b as W, F as q } from "./index.esm.lNJZawDO.js";
import { S as H } from "./ExclamationCircle.B-zBfie-.js";
import { S as K } from "./TrashCan.BMVjN8By.js";
import { l as X, m as B } from "./variables.DQFyen7Y.js";
const I = {
  theme: S,
  env: _
}, O = (r, t) => y({
  reducer: I,
  middleware: (n) => n().prepend(r.middleware).concat(w),
  preloadedState: {
    theme: t
  }
}), h = C(), z = h.startListening;
function J(r) {
  return $({
    saveEnv: () => z({
      actionCreator: g,
      effect: async (n, a) => {
        r.postMessage({
          command: "saveEnv",
          payload: n.payload
        });
      }
    })
  }), h;
}
function Q({
  name: r,
  remove: t,
  password: n
}) {
  const { control: a } = D(), {
    field: m,
    fieldState: { error: i }
  } = v({
    name: `${r}.key`,
    control: a,
    rules: {
      pattern: {
        value: X(),
        message: B
      }
    }
  }), { field: d } = v({
    name: `${r}.value`,
    control: a
  });
  return /* @__PURE__ */ e.jsxs(U, { children: [
    /* @__PURE__ */ e.jsxs(Y, { children: [
      /* @__PURE__ */ e.jsx(Z, { type: "text", ...m }),
      /* @__PURE__ */ e.jsx(ee, { type: n ? "password" : "text", ...d }),
      /* @__PURE__ */ e.jsx(
        re,
        {
          onClick: (l) => {
            l.preventDefault(), l.stopPropagation(), t();
          },
          children: /* @__PURE__ */ e.jsx(K, {})
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
const U = o.div`
  margin-bottom: 10px;
`, Y = o.div`
  display: flex;
  &:hover > :last-child {
    visibility: visible;
  }
`, Z = o.input`
  flex: 1;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${s.border});
  color: var(${s.foreground});
  margin-right: 10px;
`, ee = o.input`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${s.border});
  color: var(${s.foreground});
`, re = o.button`
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
function te({ append: r }) {
  return /* @__PURE__ */ e.jsxs(oe, { children: [
    /* @__PURE__ */ e.jsx(
      se,
      {
        placeholder: "name",
        value: "",
        onChange: (t) => {
          r({ key: t.target.value, value: "" }, { shouldFocus: !0 });
        }
      }
    ),
    /* @__PURE__ */ e.jsx(ae, {})
  ] });
}
const oe = o.div`
  display: flex;
`, se = o.input`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${s.border});
  color: var(${s.foreground});
  margin-right: 10px;
`, ae = o.div`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${s.border});
  margin-right: 1.5em;
`;
function x({
  name: r,
  data: t,
  password: n
}) {
  const a = L(), m = de(t), i = G({
    defaultValues: m,
    mode: "onChange"
  }), { handleSubmit: d, control: l } = i;
  function p(u) {
    const c = le(u);
    a(g({ name: r, environment: c }));
  }
  const { fields: b, append: j, remove: E } = W({
    control: l,
    name: "values"
  });
  return /* @__PURE__ */ e.jsx(q, { ...i, children: /* @__PURE__ */ e.jsxs(ie, { onChange: d(p), children: [
    b.map((u, c) => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
      Q,
      {
        name: `values.${c}`,
        remove: () => {
          E(c), d(p)();
        },
        password: n
      }
    ) }, u.id)),
    /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(te, { append: j }) })
  ] }) });
}
const ie = o.form`
  padding: 8px;
`;
function de(r) {
  return { values: Object.entries(r).map(([n, a]) => ({ key: n, value: a })) };
}
function le(r) {
  const t = {};
  for (const n of r.values)
    t[n.key] = n.value;
  return t;
}
function ce() {
  const { data: r, ready: t } = N((n) => n.env);
  return t ? /* @__PURE__ */ e.jsx(f, { children: /* @__PURE__ */ e.jsx(
    P,
    {
      tabs: [
        {
          id: "secrets",
          title: "Secrets",
          content: /* @__PURE__ */ e.jsx(x, { name: "secrets", data: r.secrets, password: !0 })
        },
        {
          id: "default",
          title: "Default",
          content: /* @__PURE__ */ e.jsx(x, { name: "default", data: r.default })
        }
      ]
    }
  ) }) : /* @__PURE__ */ e.jsx(f, { children: "Loading environment data..." });
}
const f = o.div`
  margin: 4px;
`, me = {
  changeTheme: M,
  loadEnv: T
};
function ue() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(R, {}),
    /* @__PURE__ */ e.jsx(ce, {})
  ] });
}
function pe(r, t) {
  const n = O(J(r), t);
  F(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(k.StrictMode, { children: /* @__PURE__ */ e.jsx(V, { store: n, children: /* @__PURE__ */ e.jsx(ue, {}) }) })
  ), window.addEventListener("message", A(n, me));
}
window.renderWebView = pe;
