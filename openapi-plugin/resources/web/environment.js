import { a as j, l as y, t as $, b as w, s as E, d as a, T as d, j as e, r as S, e as C, R as F, P as k, m as T, f as L, g as V } from "./styled-components.browser.esm.b4077a0f.js";
import { e as A, a as x, S as R, u as M, b as P, l as D } from "./slice.9806eb76.js";
import { $ as N, T as W, a as B, b as H } from "./Tabs.d6340d43.js";
import { b as K, d as p, a as O, e as I, F as q } from "./index.esm.2e24c5a3.js";
import { S as z } from "./ExclamationCircle.20b20ea3.js";
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
      effect: async (n, o) => {
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
    field: o,
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
      /* @__PURE__ */ e.jsx(_, { type: "text", ...o }),
      /* @__PURE__ */ e.jsx(ee, { type: "text", ...s }),
      /* @__PURE__ */ e.jsx(
        re,
        {
          onClick: (l) => {
            l.preventDefault(), l.stopPropagation(), t();
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
const Y = a.div`
  margin-bottom: 10px;
`, Z = a.div`
  display: flex;
  &:hover > :last-child {
    visibility: visible;
  }
`, _ = a.input`
  flex: 1;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${d.border});
  color: var(${d.foreground});
  margin-right: 10px;
`, ee = a.input`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${d.border});
  color: var(${d.foreground});
`, re = a.button`
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
`, ne = a.div`
  padding: 4px;
  display: flex;
`;
function te({ append: r }) {
  return /* @__PURE__ */ e.jsxs(se, { children: [
    /* @__PURE__ */ e.jsx(
      ae,
      {
        placeholder: "name",
        value: "",
        onChange: (t) => {
          r({ key: t.target.value, value: "" }, { shouldFocus: !0 });
        }
      }
    ),
    /* @__PURE__ */ e.jsx(oe, {})
  ] });
}
const se = a.div`
  display: flex;
`, ae = a.input`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${d.border});
  color: var(${d.foreground});
  margin-right: 10px;
`, oe = a.div`
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
  const n = M(), o = le(t), i = O({
    defaultValues: o,
    mode: "onChange"
  }), { handleSubmit: s, control: l } = i;
  function m(u) {
    const c = ce(u);
    n(x({ name: r, environment: c }));
  }
  const { fields: b, append: h, remove: g } = I({
    control: l,
    name: "values"
  });
  return /* @__PURE__ */ e.jsx(q, { ...i, children: /* @__PURE__ */ e.jsxs(de, { onChange: s(m), children: [
    b.map((u, c) => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
      X,
      {
        name: `values.${c}`,
        remove: () => {
          g(c), s(m)();
        }
      }
    ) }, u.id)),
    /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(te, { append: h }) })
  ] }) });
}
const de = a.form`
  padding: 8px;
`;
function le(r) {
  return { values: Object.entries(r).map(([n, o]) => ({ key: n, value: o })) };
}
function ce(r) {
  const t = {};
  for (const n of r.values)
    t[n.key] = n.value;
  return t;
}
function ue() {
  const { data: r, ready: t } = P((s) => s.env), [n, o] = S.useState("default"), i = [
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
  return t ? /* @__PURE__ */ e.jsx(v, { children: /* @__PURE__ */ e.jsxs(N, { value: n, onValueChange: o, children: [
    /* @__PURE__ */ e.jsx(W, { children: i.map((s) => /* @__PURE__ */ e.jsx(B, { value: s.id, children: s.title }, s.id)) }),
    i.map((s) => /* @__PURE__ */ e.jsx(H, { value: s.id, children: /* @__PURE__ */ e.jsx(ie, { name: s.id, data: r[s.id] }) }, s.id))
  ] }) }) : /* @__PURE__ */ e.jsx(v, { children: "Loading environment data..." });
}
const v = a.div`
  margin: 4px;
`, me = {
  changeTheme: V,
  loadEnv: D
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
