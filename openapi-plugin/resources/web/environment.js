import { a as y, t as w, l as S, d as C, s as $, e as o, T as s, j as e, g as F, R as k, P as V, k as A, p as R, n as M } from "./TriangleExclamation.D0e1MsJn.js";
import { e as _, a as g, u as L, b as N, l as T } from "./index.B9X4ewit.js";
import { T as P } from "./Tabs.Ir0F6yfI.js";
import { u as D, a as v, d as G, b as W, F as H } from "./index.esm.B-IUgjj6.js";
import { S as K } from "./ExclamationCircle.Cal4AUVQ.js";
import { S as X } from "./TrashCan.C6TcXDL5.js";
import { r as B, t as I } from "./variables.pW_DOBkM.js";
const O = {
  theme: w,
  env: _
}, q = (r, t) => y({
  reducer: O,
  middleware: (n) => n().prepend(r.middleware).concat(S),
  preloadedState: {
    theme: t
  }
}), b = C(), z = b.startListening;
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
  }), b;
}
function Q({
  name: r,
  remove: t,
  password: n
}) {
  const { control: a } = D(), {
    field: u,
    fieldState: { error: i }
  } = v({
    name: `${r}.key`,
    control: a,
    rules: {
      pattern: {
        value: I(),
        message: B
      }
    }
  }), { field: d } = v({
    name: `${r}.value`,
    control: a
  });
  return /* @__PURE__ */ e.jsxs(U, { children: [
    /* @__PURE__ */ e.jsxs(Y, { children: [
      /* @__PURE__ */ e.jsx(Z, { type: "text", ...u }),
      /* @__PURE__ */ e.jsx(ee, { type: n ? "password" : "text", ...d }),
      /* @__PURE__ */ e.jsx(
        re,
        {
          onClick: (l) => {
            l.preventDefault(), l.stopPropagation(), t();
          },
          children: /* @__PURE__ */ e.jsx(X, {})
        }
      )
    ] }),
    i && /* @__PURE__ */ e.jsxs(ne, { children: [
      /* @__PURE__ */ e.jsx(K, {}),
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
  const a = L(), u = de(t), i = G({
    defaultValues: u,
    mode: "onChange"
  }), { handleSubmit: d, control: l } = i;
  function p(m) {
    const c = le(m);
    a(g({ name: r, environment: c }));
  }
  const { fields: h, append: j, remove: E } = W({
    control: l,
    name: "values"
  });
  return /* @__PURE__ */ e.jsx(H, { ...i, children: /* @__PURE__ */ e.jsxs(ie, { onChange: d(p), children: [
    h.map((m, c) => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
      Q,
      {
        name: `values.${c}`,
        remove: () => {
          E(c), d(p)();
        },
        password: n
      }
    ) }, m.id)),
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
`, ue = {
  changeTheme: R,
  loadEnv: T
};
function me() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(M, {}),
    /* @__PURE__ */ e.jsx(ce, {})
  ] });
}
function pe(r, t) {
  const n = q(J(r), t);
  F.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(k.StrictMode, { children: /* @__PURE__ */ e.jsx(V, { store: n, children: /* @__PURE__ */ e.jsx(me, {}) }) })
  ), window.addEventListener("message", A(n, ue));
}
window.renderWebView = pe;
