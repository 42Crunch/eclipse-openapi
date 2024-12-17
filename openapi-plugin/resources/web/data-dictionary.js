import { c as v, a as j, l as g, b, t as h, e as f, q as o, T as l, j as e, f as y, R as S, P as $, m as w, h as I, n as D } from "./TriangleExclamation.Bx9Cjic4.js";
import { D as p } from "./datetime.DlW1FQ29.js";
import { S as O } from "./AngleDown.BXHrY2zc.js";
import { S as E } from "./AngleUp.BT-LmYBc.js";
import { S as M } from "./SearchSidebar.BqSlxpwA.js";
const F = {
  dictionaries: [],
  formats: []
}, m = v({
  name: "formats",
  initialState: F,
  reducers: {
    showDictionary: (i, n) => {
      const r = [], d = [];
      for (const a of n.payload) {
        r.push({
          id: a.id,
          name: a.name,
          description: a.description
        });
        for (const u of Object.values(a.formats))
          d.push({
            ...u,
            dictionaryId: a.id
          });
      }
      i.dictionaries = r, i.formats = d;
    }
  }
}), { showDictionary: T } = m.actions, P = m.reducer, k = {
  theme: h,
  formats: P
}, C = (i) => j({
  reducer: k,
  middleware: (n) => n().prepend().concat(g),
  preloadedState: {
    theme: i
  }
}), x = b;
function L(i = !1) {
  const [n, r] = f.useState(i);
  return [n, () => r(!n)];
}
function A({ format: i }) {
  const [n, r] = L();
  return /* @__PURE__ */ e.jsxs(N, { children: [
    /* @__PURE__ */ e.jsxs(U, { collapsed: !n, onClick: r, children: [
      /* @__PURE__ */ e.jsx("div", { children: n ? /* @__PURE__ */ e.jsx(E, {}) : /* @__PURE__ */ e.jsx(O, {}) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(V, { children: i.name }),
        /* @__PURE__ */ e.jsxs(q, { children: [
          "Last updated on",
          " ",
          p.fromSeconds(parseInt(i.lastUpdate, 10)).toLocaleString(
            p.DATETIME_MED
          )
        ] })
      ] })
    ] }),
    n && /* @__PURE__ */ e.jsxs(_, { children: [
      /* @__PURE__ */ e.jsx(G, { children: i.description }),
      R(i),
      W(i)
    ] })
  ] }, `${i.dictionaryId}-${i.name}`);
}
function R(i) {
  const r = {
    1: "Not Sensitive",
    2: "Low",
    3: "Medium",
    4: "High",
    5: "Critical"
  }[i.sensitivity] || "Unknown";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(t, { label: "Name", value: i.name }),
    /* @__PURE__ */ e.jsx(t, { label: "Type", value: i.type }),
    i.format && /* @__PURE__ */ e.jsx(t, { label: "Format", value: i.format }),
    /* @__PURE__ */ e.jsx(t, { label: "Read only", value: `${i.readOnly}` }),
    /* @__PURE__ */ e.jsx(t, { label: "Write only", value: `${i.writeOnly}` }),
    /* @__PURE__ */ e.jsx(t, { label: "Nullable", value: `${i.writeOnly}` }),
    /* @__PURE__ */ e.jsx(t, { label: "GDPR-PII", value: i.pii }),
    /* @__PURE__ */ e.jsx(t, { label: "Object Identifier", value: i.objectIdentifier }),
    /* @__PURE__ */ e.jsx(t, { label: "Sensitivity", value: r }),
    /* @__PURE__ */ e.jsx(t, { label: "Example", value: `${i.example}` })
  ] });
}
function W(i) {
  return i.type === "integer" ? /* @__PURE__ */ e.jsx(H, { format: i }) : "enum" in i ? /* @__PURE__ */ e.jsx(B, { format: i }) : /* @__PURE__ */ e.jsx(z, { format: i });
}
function z({ format: i }) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(t, { label: "Pattern", value: i.pattern }),
    /* @__PURE__ */ e.jsx(t, { label: "Min length", value: `${i.minLength}` }),
    /* @__PURE__ */ e.jsx(t, { label: "Max length", value: `${i.maxLength}` })
  ] });
}
function B({ format: i }) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(t, { label: "Enum", value: i.enum.join(", ") }),
    /* @__PURE__ */ e.jsx(t, { label: "Default", value: i.default })
  ] });
}
function H({ format: i }) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(t, { label: "Minimum", value: i.minimum }),
    /* @__PURE__ */ e.jsx(t, { label: "Maximum", value: i.maximum }),
    /* @__PURE__ */ e.jsx(t, { label: "Exclusive minimum", value: `${i.exclusiveMinimum}` }),
    /* @__PURE__ */ e.jsx(t, { label: "Exclusive maximum", value: `${i.exclusiveMaximum}` }),
    /* @__PURE__ */ e.jsx(t, { label: "Multiple Of", value: `${i.multipleOf}` })
  ] });
}
function t({ label: i, value: n }) {
  return /* @__PURE__ */ e.jsxs(J, { children: [
    /* @__PURE__ */ e.jsx("div", { children: i }),
    /* @__PURE__ */ e.jsx("div", { children: n })
  ] });
}
const N = o.div`
  margin: 8px;
  border: 1px solid var(${l.border});
`, U = o.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  background-color: var(${l.computedOne});
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    > svg {
      fill: var(${l.foreground});
    }
  }
  border-left: 5px solid transparent;
  ${({ collapsed: i }) => !i && `border-bottom: 1px solid var(${l.border});
    border-left: 5px solid var(${l.badgeBackground});`}
`, V = o.div`
  font-weight: 600;
`, q = o.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, _ = o.div`
  background-color: var(${l.computedOne});
  padding: 16px;
`, G = o.div`
  padding-bottom: 16px;
  border-bottom: 1px solid var(${l.border});
`, J = o.div`
  display: flex;
  padding: 8px 0;
  gap: 8px;
  & > div:first-child {
    flex: 1;
    opacity: 0.8;
  }
  & > div:last-child {
    line-break: anywhere;
    flex: 3;
  }
`;
function K() {
  var u;
  const i = x((s) => s.formats.formats), n = x((s) => s.formats.dictionaries);
  if (((u = n == null ? void 0 : n[0]) == null ? void 0 : u.id) === void 0)
    return null;
  const r = n.filter((s) => s.id === "standard").map((s) => ({ ...s, label: s.name })), d = n.filter((s) => s.id !== "standard").map((s) => ({ ...s, label: s.name })), a = [
    { id: "standard", title: "Organization standard dictionary", items: r },
    { id: "named", title: "Organization named dictionaries", items: d }
  ];
  return /* @__PURE__ */ e.jsx(
    M,
    {
      sections: a,
      render: (s) => i.filter((c) => c.dictionaryId === s.itemId).map((c) => /* @__PURE__ */ e.jsx(A, { format: c }, `${c.dictionaryId}-${c.name}`))
    }
  );
}
const Q = {
  changeTheme: D,
  showDictionary: T
};
function X() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(I, {}),
    /* @__PURE__ */ e.jsx(K, {})
  ] });
}
function Y(i, n) {
  const r = C(n);
  y(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(S.StrictMode, { children: /* @__PURE__ */ e.jsx($, { store: r, children: /* @__PURE__ */ e.jsx(X, {}) }) })
  ), window.addEventListener("message", w(r, Q));
}
window.renderWebView = Y;
