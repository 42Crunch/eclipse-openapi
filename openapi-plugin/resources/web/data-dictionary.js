import { c as m, a as v, t as g, l as j, b, f as h, T as l, e as o, j as e, g as f, R as y, P as S, k as $, p as w, n as I } from "./TriangleExclamation.DrtDYmuA.js";
import { D as p } from "./luxon.Cq8Fd8vq.js";
import { S as D } from "./AngleDown.mnq0UxQI.js";
import { S as O } from "./AngleUp.BzadahNt.js";
import { S as E } from "./SearchSidebar.Ci4kBDjT.js";
const M = {
  dictionaries: [],
  formats: []
}, x = m({
  name: "formats",
  initialState: M,
  reducers: {
    showDictionary: (i, t) => {
      const r = [], d = [];
      for (const a of t.payload) {
        r.push({
          id: a.id,
          name: a.name,
          description: a.description
        });
        for (const s of Object.values(a.formats))
          d.push({
            ...s,
            dictionaryId: a.id
          });
      }
      i.dictionaries = r, i.formats = d;
    }
  }
}), { showDictionary: F } = x.actions, T = x.reducer, k = {
  theme: g,
  formats: T
}, P = (i) => v({
  reducer: k,
  middleware: (t) => t().prepend().concat(j),
  preloadedState: {
    theme: i
  }
}), u = b;
function C(i = !1) {
  const [t, r] = h.useState(i);
  return [t, () => r(!t)];
}
function L({ format: i }) {
  const [t, r] = C();
  return /* @__PURE__ */ e.jsxs(H, { children: [
    /* @__PURE__ */ e.jsxs(N, { $collapsed: !t, onClick: r, children: [
      /* @__PURE__ */ e.jsx("div", { children: t ? /* @__PURE__ */ e.jsx(O, {}) : /* @__PURE__ */ e.jsx(D, {}) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(U, { children: i.name }),
        /* @__PURE__ */ e.jsxs(V, { children: [
          "Last updated on",
          " ",
          p.fromSeconds(parseInt(i.lastUpdate, 10)).toLocaleString(
            p.DATETIME_MED
          )
        ] })
      ] })
    ] }),
    t && /* @__PURE__ */ e.jsxs(_, { children: [
      /* @__PURE__ */ e.jsx(G, { children: i.description }),
      A(i),
      R(i)
    ] })
  ] }, `${i.dictionaryId}-${i.name}`);
}
function A(i) {
  const r = {
    1: "Not Sensitive",
    2: "Low",
    3: "Medium",
    4: "High",
    5: "Critical"
  }[i.sensitivity] || "Unknown";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(n, { label: "Name", value: i.name }),
    /* @__PURE__ */ e.jsx(n, { label: "Type", value: i.type }),
    i.format && /* @__PURE__ */ e.jsx(n, { label: "Format", value: i.format }),
    /* @__PURE__ */ e.jsx(n, { label: "Read only", value: `${i.readOnly}` }),
    /* @__PURE__ */ e.jsx(n, { label: "Write only", value: `${i.writeOnly}` }),
    /* @__PURE__ */ e.jsx(n, { label: "Nullable", value: `${i.writeOnly}` }),
    /* @__PURE__ */ e.jsx(n, { label: "GDPR-PII", value: i.pii }),
    /* @__PURE__ */ e.jsx(n, { label: "Object Identifier", value: i.objectIdentifier }),
    /* @__PURE__ */ e.jsx(n, { label: "Sensitivity", value: r }),
    /* @__PURE__ */ e.jsx(n, { label: "Example", value: `${i.example}` })
  ] });
}
function R(i) {
  return i.type === "integer" ? /* @__PURE__ */ e.jsx(B, { format: i }) : "enum" in i ? /* @__PURE__ */ e.jsx(z, { format: i }) : /* @__PURE__ */ e.jsx(W, { format: i });
}
function W({ format: i }) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(n, { label: "Pattern", value: i.pattern }),
    /* @__PURE__ */ e.jsx(n, { label: "Min length", value: `${i.minLength}` }),
    /* @__PURE__ */ e.jsx(n, { label: "Max length", value: `${i.maxLength}` })
  ] });
}
function z({ format: i }) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(n, { label: "Enum", value: i.enum.join(", ") }),
    /* @__PURE__ */ e.jsx(n, { label: "Default", value: i.default })
  ] });
}
function B({ format: i }) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(n, { label: "Minimum", value: i.minimum }),
    /* @__PURE__ */ e.jsx(n, { label: "Maximum", value: i.maximum }),
    /* @__PURE__ */ e.jsx(n, { label: "Exclusive minimum", value: `${i.exclusiveMinimum}` }),
    /* @__PURE__ */ e.jsx(n, { label: "Exclusive maximum", value: `${i.exclusiveMaximum}` }),
    /* @__PURE__ */ e.jsx(n, { label: "Multiple Of", value: `${i.multipleOf}` })
  ] });
}
function n({ label: i, value: t }) {
  return /* @__PURE__ */ e.jsxs(q, { children: [
    /* @__PURE__ */ e.jsx("div", { children: i }),
    /* @__PURE__ */ e.jsx("div", { children: t })
  ] });
}
const H = o.div`
  margin: 8px;
  border: 1px solid var(${l.border});
`, N = o.div`
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
  ${({ $collapsed: i }) => !i && `border-bottom: 1px solid var(${l.border});
    border-left: 5px solid var(${l.badgeBackground});`}
`, U = o.div`
  font-weight: 600;
`, V = o.div`
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
`, q = o.div`
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
function J() {
  const i = u((s) => s.formats.formats), t = u((s) => s.formats.dictionaries);
  if (t?.[0]?.id === void 0)
    return null;
  const r = t.filter((s) => s.id === "standard").map((s) => ({ ...s, label: s.name })), d = t.filter((s) => s.id !== "standard").map((s) => ({ ...s, label: s.name })), a = [
    { id: "standard", title: "Organization standard dictionary", items: r },
    { id: "named", title: "Organization named dictionaries", items: d }
  ];
  return /* @__PURE__ */ e.jsx(
    E,
    {
      sections: a,
      render: (s) => i.filter((c) => c.dictionaryId === s.itemId).map((c) => /* @__PURE__ */ e.jsx(L, { format: c }, `${c.dictionaryId}-${c.name}`))
    }
  );
}
const K = {
  changeTheme: w,
  showDictionary: F
};
function Q() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(I, {}),
    /* @__PURE__ */ e.jsx(J, {})
  ] });
}
function X(i, t) {
  const r = P(t);
  f.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(y.StrictMode, { children: /* @__PURE__ */ e.jsx(S, { store: r, children: /* @__PURE__ */ e.jsx(Q, {}) }) })
  ), window.addEventListener("message", $(r, K));
}
window.renderWebView = X;
