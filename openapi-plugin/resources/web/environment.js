import { a as j, l as y, t as $, b as w, s as E, T as d, j as e, r as S, d as C, R as F, P as k, m as T, e as L, f as V } from "./ThemeStyles.c0d84d2f.js";
import { e as A, c as x, S as R, u as M, d as P, $ as D, T as N, a as W, b as B, l as H } from "./TrashCan.5b3df73f.js";
import { s as o } from "./styled-components.browser.esm.5667ec00.js";
import { a as K, c as p, u as O, d as I, F as q } from "./index.esm.97fc0c41.js";
import { S as z } from "./ExclamationCircle.a44a5fc9.js";
import "./useDispatch.43a2a81a.js";
const G = {
  theme: $,
  env: A
}, J = (r, t) => j({
  reducer: G,
  middleware: (n) => n().prepend(r.middleware).concat(y),
  preloadedState: {
    theme: t
  }
}), f = w(), Q = f.startListening;
function U(r) {
  return E({
    saveEnv: () => Q({
      actionCreator: x,
      effect: async (n, a) => {
        r.postMessage({
          command: "saveEnv",
          payload: n.payload
        });
      }
    })
  }), f;
}
function X({ name: r, remove: t }) {
  const { control: n } = K(), {
    field: a,
    fieldState: { error: i }
  } = p({
    name: `${r}.key`,
    control: n,
    rules: {
      pattern: {
        value: /^\w+$/,
        message: "Only the alphanumeric characters or the underscore"
      }
    }
  }), { field: s } = p({
    name: `${r}.value`,
    control: n
  });
  return /* @__PURE__ */ e.jsxs(Y, { children: [
    /* @__PURE__ */ e.jsxs(Z, { children: [
      /* @__PURE__ */ e.jsx(_, { type: "text", ...a }),
      /* @__PURE__ */ e.jsx(ee, { type: "text", ...s }),
      /* @__PURE__ */ e.jsx(
        re,
        {
          onClick: (c) => {
            c.preventDefault(), c.stopPropagation(), t();
          },
          children: /* @__PURE__ */ e.jsx(R, {})
        }
      )
    ] }),
    i && /* @__PURE__ */ e.jsxs(ne, { children: [
      /* @__PURE__ */ e.jsx(z, {}),
      "  ",
      i.message
    ] })
  ] });
}
const Y = o.div`
  margin-bottom: 10px;
`, Z = o.div`
  display: flex;
  &:hover > :last-child {
    visibility: visible;
  }
`, _ = o.input`
  flex: 1;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${d.border});
  color: var(${d.foreground});
  margin-right: 10px;
`, ee = o.input`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${d.border});
  color: var(${d.foreground});
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
    fill: var(${d.foreground});
  }
`, ne = o.div`
  padding: 4px;
  display: flex;
`;
function te({ append: r }) {
  return /* @__PURE__ */ e.jsxs(se, { children: [
    /* @__PURE__ */ e.jsx(
      oe,
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
const se = o.div`
  display: flex;
`, oe = o.input`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${d.border});
  color: var(${d.foreground});
  margin-right: 10px;
`, ae = o.div`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${d.border});
  margin-right: 1.5em;
`;
function ie({
  name: r,
  data: t
}) {
  const n = M(), a = ce(t), i = O({
    defaultValues: a,
    mode: "onChange"
  }), { handleSubmit: s, control: c } = i;
  function m(u) {
    const l = le(u);
    n(x({ name: r, environment: l }));
  }
  const { fields: h, append: b, remove: g } = I({
    control: c,
    name: "values"
  });
  return /* @__PURE__ */ e.jsx(q, { ...i, children: /* @__PURE__ */ e.jsxs(de, { onChange: s(m), children: [
    h.map((u, l) => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
      X,
      {
        name: `values.${l}`,
        remove: () => {
          g(l), s(m)();
        }
      }
    ) }, u.id)),
    /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(te, { append: b }) })
  ] }) });
}
const de = o.form`
  padding: 8px;
`;
function ce(r) {
  return { values: Object.entries(r).map(([n, a]) => ({ key: n, value: a })) };
}
function le(r) {
  const t = {};
  for (const n of r.values)
    t[n.key] = n.value;
  return t;
}
function ue() {
  const { data: r, ready: t } = P((s) => s.env), [n, a] = S.useState("default"), i = [
    {
      id: "default",
      title: "Default",
      secret: !1
    },
    {
      id: "secrets",
      title: "Secrets",
      secret: !0
    }
  ];
  return t ? /* @__PURE__ */ e.jsx(v, { children: /* @__PURE__ */ e.jsxs(D, { value: n, onValueChange: a, children: [
    /* @__PURE__ */ e.jsx(N, { children: i.map((s) => /* @__PURE__ */ e.jsx(W, { value: s.id, children: s.title }, s.id)) }),
    i.map((s) => /* @__PURE__ */ e.jsx(B, { value: s.id, children: /* @__PURE__ */ e.jsx(ie, { name: s.id, data: r[s.id] }) }, s.id))
  ] }) }) : /* @__PURE__ */ e.jsx(v, { children: "Loading environment data..." });
}
const v = o.div`
  margin: 4px;
`, me = {
  changeTheme: V,
  loadEnv: H
};
function pe() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(L, {}),
    /* @__PURE__ */ e.jsx(ue, {})
  ] });
}
function ve(r, t) {
  const n = J(U(r), t);
  C(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(F.StrictMode, { children: /* @__PURE__ */ e.jsx(k, { store: n, children: /* @__PURE__ */ e.jsx(pe, {}) }) })
  ), window.addEventListener("message", T(n, me));
}
window.renderWebView = ve;
