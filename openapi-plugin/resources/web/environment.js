import { a as $, l as w, t as S, b as C, s as E, T as d, d as l, j as e, r as F, e as k, R as T, P as L, m as V, F as j, f as A, g as M } from "./ThemeStyles.913963d7.js";
import { e as P, i as h, c as R, f as v, S as D, h as N, u as W, g as B, F as H, j as K, $ as O, T as I, a as q, b as z, l as G } from "./TrashCan.1f959ccc.js";
import { s as o } from "./styled-components.browser.esm.f0e51c1d.js";
import { S as J } from "./ExclamationCircle.3bd1d8d7.js";
import "./useDispatch.091a853c.js";
const Q = {
  theme: S,
  env: P
}, U = (r, t) => $({
  reducer: Q,
  middleware: (n) => n().prepend(r.middleware).concat(w),
  preloadedState: {
    theme: t
  }
}), g = C(), X = g.startListening;
function Y(r) {
  return E({
    saveEnv: () => X({
      actionCreator: h,
      effect: async (n, s) => {
        r.postMessage({
          command: "saveEnv",
          payload: n.payload
        });
      }
    })
  }), g;
}
function Z({ name: r, remove: t }) {
  const { control: n } = R(), {
    field: s,
    fieldState: { error: i }
  } = v({
    name: `${r}.key`,
    control: n,
    rules: {
      pattern: {
        value: /^\w+$/,
        message: "Only the alphanumeric characters or the underscore"
      }
    }
  }), { field: a } = v({
    name: `${r}.value`,
    control: n
  });
  return /* @__PURE__ */ l(_, { children: [
    /* @__PURE__ */ l(ee, { children: [
      /* @__PURE__ */ e(re, { type: "text", ...s }),
      /* @__PURE__ */ e(ne, { type: "text", ...a }),
      /* @__PURE__ */ e(
        te,
        {
          onClick: (c) => {
            c.preventDefault(), c.stopPropagation(), t();
          },
          children: /* @__PURE__ */ e(D, {})
        }
      )
    ] }),
    i && /* @__PURE__ */ l(ae, { children: [
      /* @__PURE__ */ e(J, {}),
      "  ",
      i.message
    ] })
  ] });
}
const _ = o.div`
  margin-bottom: 10px;
`, ee = o.div`
  display: flex;
  &:hover > :last-child {
    visibility: visible;
  }
`, re = o.input`
  flex: 1;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${d.border});
  color: var(${d.foreground});
  margin-right: 10px;
`, ne = o.input`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${d.border});
  color: var(${d.foreground});
`, te = o.button`
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
`, ae = o.div`
  padding: 4px;
  display: flex;
`;
function oe({ append: r }) {
  return /* @__PURE__ */ l(se, { children: [
    /* @__PURE__ */ e(
      ie,
      {
        placeholder: "name",
        value: "",
        onChange: (t) => {
          r({ key: t.target.value, value: "" }, { shouldFocus: !0 });
        }
      }
    ),
    /* @__PURE__ */ e(de, {})
  ] });
}
const se = o.div`
  display: flex;
`, ie = o.input`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${d.border});
  color: var(${d.foreground});
  margin-right: 10px;
`, de = o.div`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${d.border});
  margin-right: 1.5em;
`;
function le({
  name: r,
  data: t
}) {
  const n = N(), s = ue(t), i = W({
    defaultValues: s,
    mode: "onChange"
  }), { handleSubmit: a, control: c } = i;
  function p(m) {
    const u = me(m);
    n(h({ name: r, environment: u }));
  }
  const { fields: b, append: x, remove: y } = B({
    control: c,
    name: "values"
  });
  return /* @__PURE__ */ e(H, { ...i, children: /* @__PURE__ */ l(ce, { onChange: a(p), children: [
    b.map((m, u) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      Z,
      {
        name: `values.${u}`,
        remove: () => {
          y(u), a(p)();
        }
      }
    ) }, m.id)),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(oe, { append: x }) })
  ] }) });
}
const ce = o.form`
  padding: 8px;
`;
function ue(r) {
  return { values: Object.entries(r).map(([n, s]) => ({ key: n, value: s })) };
}
function me(r) {
  const t = {};
  for (const n of r.values)
    t[n.key] = n.value;
  return t;
}
function pe() {
  const { data: r, ready: t } = K((a) => a.env), [n, s] = F.useState("default"), i = [
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
  return t ? /* @__PURE__ */ e(f, { children: /* @__PURE__ */ l(O, { value: n, onValueChange: s, children: [
    /* @__PURE__ */ e(I, { children: i.map((a) => /* @__PURE__ */ e(q, { value: a.id, children: a.title }, a.id)) }),
    i.map((a) => /* @__PURE__ */ e(z, { value: a.id, children: /* @__PURE__ */ e(le, { name: a.id, data: r[a.id] }) }, a.id))
  ] }) }) : /* @__PURE__ */ e(f, { children: "Loading environment data..." });
}
const f = o.div`
  margin: 4px;
`, ve = {
  changeTheme: M,
  loadEnv: G
};
function fe() {
  return /* @__PURE__ */ l(j, { children: [
    /* @__PURE__ */ e(A, {}),
    /* @__PURE__ */ e(pe, {})
  ] });
}
function he(r, t) {
  const n = U(Y(r), t);
  k(document.getElementById("root")).render(
    /* @__PURE__ */ e(T.StrictMode, { children: /* @__PURE__ */ e(L, { store: n, children: /* @__PURE__ */ e(fe, {}) }) })
  ), window.addEventListener("message", V(n, ve));
}
window.renderWebView = he;
