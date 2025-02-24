import { a as y, t as w, d as S, s as C, q as o, T as s, j as e, f as $, R as F, P as k, m as V, h as A, l as R } from "./webapp.CeAUXIIl.js";
import { l as M } from "./TriangleExclamation.CgvJ-nl0.js";
import { e as _, h as g, u as L, j as N, l as T } from "./slice.BcUHZN3X.js";
import { T as P } from "./Tabs.ao5WcNUe.js";
import { u as D, a as v, d as G, b as W, F as q } from "./index.esm.B6e3vWVZ.js";
import { S as H } from "./ExclamationCircle.BBSMtR_9.js";
import { S as K } from "./TrashCan.CcZ5QY-i.js";
import { l as X, m as B } from "./variables.B_WTOoYj.js";
const I = {
  theme: w,
  env: _
}, O = (r, t) => y({
  reducer: I,
  middleware: (n) => n().prepend(r.middleware).concat(M),
  preloadedState: {
    theme: t
  }
}), h = S(), z = h.startListening;
function J(r) {
  return C({
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
function f({
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
  return t ? /* @__PURE__ */ e.jsx(x, { children: /* @__PURE__ */ e.jsx(
    P,
    {
      tabs: [
        {
          id: "secrets",
          title: "Secrets",
          content: /* @__PURE__ */ e.jsx(f, { name: "secrets", data: r.secrets, password: !0 })
        },
        {
          id: "default",
          title: "Default",
          content: /* @__PURE__ */ e.jsx(f, { name: "default", data: r.default })
        }
      ]
    }
  ) }) : /* @__PURE__ */ e.jsx(x, { children: "Loading environment data..." });
}
const x = o.div`
  margin: 4px;
`, me = {
  changeTheme: R,
  loadEnv: T
};
function ue() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, {}),
    /* @__PURE__ */ e.jsx(ce, {})
  ] });
}
function pe(r, t) {
  const n = O(J(r), t);
  $(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(F.StrictMode, { children: /* @__PURE__ */ e.jsx(k, { store: n, children: /* @__PURE__ */ e.jsx(ue, {}) }) })
  ), window.addEventListener("message", V(n, me));
}
window.renderWebView = pe;
