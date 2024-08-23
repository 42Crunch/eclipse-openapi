import { a as y, l as w, t as S, d as C, s as $, q as o, T as s, j as e, f as F, R as k, P as V, m as A, h as R, n as M } from "./TriangleExclamation.uZuTZ4qX.js";
import { e as _, h as g, u as L, j as N, l as T } from "./slice.rpQlsDPQ.js";
import { T as P } from "./Tabs.B72_LD5z.js";
import { u as D, a as v, d as G, b as W, F as q } from "./index.esm.FeZvylQh.js";
import { S as H } from "./ExclamationCircle.22G5W2jO.js";
import { l as K, m as X, S as B } from "./variables.Be9HaoCL.js";
const I = {
  theme: S,
  env: _
}, O = (n, t) => y({
  reducer: I,
  middleware: (r) => r().prepend(n.middleware).concat(w),
  preloadedState: {
    theme: t
  }
}), h = C(), z = h.startListening;
function J(n) {
  return $({
    saveEnv: () => z({
      actionCreator: g,
      effect: async (r, a) => {
        n.postMessage({
          command: "saveEnv",
          payload: r.payload
        });
      }
    })
  }), h;
}
function Q({
  name: n,
  remove: t,
  password: r
}) {
  const { control: a } = D(), {
    field: u,
    fieldState: { error: i }
  } = v({
    name: `${n}.key`,
    control: a,
    rules: {
      pattern: {
        value: K(),
        message: X
      }
    }
  }), { field: d } = v({
    name: `${n}.value`,
    control: a
  });
  return /* @__PURE__ */ e.jsxs(U, { children: [
    /* @__PURE__ */ e.jsxs(Y, { children: [
      /* @__PURE__ */ e.jsx(Z, { type: "text", ...u }),
      /* @__PURE__ */ e.jsx(ee, { type: r ? "password" : "text", ...d }),
      /* @__PURE__ */ e.jsx(
        ne,
        {
          onClick: (l) => {
            l.preventDefault(), l.stopPropagation(), t();
          },
          children: /* @__PURE__ */ e.jsx(B, {})
        }
      )
    ] }),
    i && /* @__PURE__ */ e.jsxs(re, { children: [
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
`, ne = o.button`
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
`, re = o.div`
  padding: 4px;
  display: flex;
`;
function te({ append: n }) {
  return /* @__PURE__ */ e.jsxs(oe, { children: [
    /* @__PURE__ */ e.jsx(
      se,
      {
        placeholder: "name",
        value: "",
        onChange: (t) => {
          n({ key: t.target.value, value: "" }, { shouldFocus: !0 });
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
  name: n,
  data: t,
  password: r
}) {
  const a = L(), u = de(t), i = G({
    defaultValues: u,
    mode: "onChange"
  }), { handleSubmit: d, control: l } = i;
  function p(m) {
    const c = le(m);
    a(g({ name: n, environment: c }));
  }
  const { fields: b, append: j, remove: E } = W({
    control: l,
    name: "values"
  });
  return /* @__PURE__ */ e.jsx(q, { ...i, children: /* @__PURE__ */ e.jsxs(ie, { onChange: d(p), children: [
    b.map((m, c) => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
      Q,
      {
        name: `values.${c}`,
        remove: () => {
          E(c), d(p)();
        },
        password: r
      }
    ) }, m.id)),
    /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(te, { append: j }) })
  ] }) });
}
const ie = o.form`
  padding: 8px;
`;
function de(n) {
  return { values: Object.entries(n).map(([r, a]) => ({ key: r, value: a })) };
}
function le(n) {
  const t = {};
  for (const r of n.values)
    t[r.key] = r.value;
  return t;
}
function ce() {
  const { data: n, ready: t } = N((r) => r.env);
  return t ? /* @__PURE__ */ e.jsx(f, { children: /* @__PURE__ */ e.jsx(
    P,
    {
      tabs: [
        {
          id: "secrets",
          title: "Secrets",
          content: /* @__PURE__ */ e.jsx(x, { name: "secrets", data: n.secrets, password: !0 })
        },
        {
          id: "default",
          title: "Default",
          content: /* @__PURE__ */ e.jsx(x, { name: "default", data: n.default })
        }
      ]
    }
  ) }) : /* @__PURE__ */ e.jsx(f, { children: "Loading environment data..." });
}
const f = o.div`
  margin: 4px;
`, ue = {
  changeTheme: M,
  loadEnv: T
};
function me() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(R, {}),
    /* @__PURE__ */ e.jsx(ce, {})
  ] });
}
function pe(n, t) {
  const r = O(J(n), t);
  F(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(k.StrictMode, { children: /* @__PURE__ */ e.jsx(V, { store: r, children: /* @__PURE__ */ e.jsx(me, {}) }) })
  ), window.addEventListener("message", A(r, ue));
}
window.renderWebView = pe;
