import { j as e, d as a, T as o, r as h, R as v } from "./styled-components.browser.esm.b4077a0f.js";
import { $ as b, b as $, c as j, d as m, e as w } from "./index.module.be22a077.js";
import { a as S } from "./TriangleExclamation.3c1770d3.js";
const k = (d) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...d, children: /* @__PURE__ */ e.jsx("path", { d: "m504.1 471-134-134c29-35.5 45-80.2 45-129 0-114.9-93.13-208-208-208S0 93.13 0 208s93.12 208 207.1 208c48.79 0 93.55-16.91 129-45.04l134 134c5.6 4.74 11.8 7.04 17.9 7.04s12.28-2.344 16.97-7.031c9.33-9.369 9.33-24.569-.87-33.969zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160-71.78 160-160 160S48 296.2 48 208z" }) });
function y({
  items: d,
  selected: n,
  setSelected: c,
  filter: l,
  errors: i
}) {
  return /* @__PURE__ */ e.jsx(C, { children: d.filter(
    (r) => l === void 0 || r.label.toLowerCase().includes(l.toLowerCase())
  ).map((r) => r.id === n ? /* @__PURE__ */ e.jsxs(B, { children: [
    /* @__PURE__ */ e.jsx("span", { children: r.label }),
    (i == null ? void 0 : i[r.id]) !== void 0 && /* @__PURE__ */ e.jsx(g, { message: i[r.id] })
  ] }, r.id) : /* @__PURE__ */ e.jsxs(u, { onClick: () => c(r.id), children: [
    /* @__PURE__ */ e.jsx("span", { children: r.label }),
    (i == null ? void 0 : i[r.id]) !== void 0 && /* @__PURE__ */ e.jsx(g, { message: i[r.id] })
  ] }, r.id)) });
}
function g({ message: d }) {
  return /* @__PURE__ */ e.jsx($, { children: /* @__PURE__ */ e.jsxs(j, { children: [
    /* @__PURE__ */ e.jsx(m, { asChild: !0, children: /* @__PURE__ */ e.jsx(F, { children: /* @__PURE__ */ e.jsx(S, {}) }) }),
    /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsx(T, { children: d }) })
  ] }) });
}
const C = a.ul`
  padding: 0;
  margin: 0;
`, u = a.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 36px;
  border-bottom: 1px solid var(${o.border});
  cursor: pointer;
  padding: 0 8px;
  overflow: hidden;
  > span {
    flex: 1;
  }
`, B = a(u)`
  background-color: var(${o.listActiveSelectionBackground});
  color: var(${o.listActiveSelectionForeground});
  border-radius: 2px;
`, F = a.div`
  > svg {
    fill: var(${o.errorForeground});
  }
`, T = a(b)`
  color: var(${o.notificationsForeground});
  background-color: var(${o.notificationsBackground});
  border: 1px solid var(${o.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`;
function O({
  render: d,
  sections: n,
  errors: c,
  defaultSelection: l
}) {
  var x, p;
  const [i, r] = h.useState(l || ((p = (x = n == null ? void 0 : n[0]) == null ? void 0 : x.items) == null ? void 0 : p[0].id) || ""), [s, f] = h.useState("");
  return /* @__PURE__ */ e.jsxs(z, { children: [
    /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsxs(M, { children: [
        /* @__PURE__ */ e.jsx("input", { placeholder: "Search", value: s, onChange: (t) => f(t.target.value) }),
        /* @__PURE__ */ e.jsx(k, {})
      ] }),
      n.map((t) => /* @__PURE__ */ e.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ e.jsx(L, { children: t.title }),
        /* @__PURE__ */ e.jsx(
          y,
          {
            selected: i,
            setSelected: r,
            items: t.items,
            errors: c,
            filter: s.trim()
          }
        )
      ] }, t.title))
    ] }),
    /* @__PURE__ */ e.jsx(E, { children: d(i) })
  ] });
}
const z = a.div`
  display: flex;
  background-color: var(${o.background});
  height: 100vh;
  overflow: hidden;
  > :first-child {
    width: 240px;
    overflow-y: auto;
  }
  > :last-child {
    flex: 1;
    overflow-y: auto;
  }
`, E = a.div`
  background-color: var(${o.computedOne});
  padding: 16px;
`, I = a.div`
  padding: 16px;
`, L = a.div`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(${o.disabledForeground});
`, M = a.div`
  display: flex;
  height: 40px;
  align-items: center;
  background-color: var(${o.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${o.border});

  > input {
    flex: 1;
    margin-left: 8px;
    background-color: transparent;
    border: none;
    color: var(${o.foreground});
    padding: 4px;

    &::placeholder {
      color: var(${o.inputPlaceholderForeground});
      font-size: 14px;
    }

    &:focus {
      outline: none;
      // outline: 1px solid var(${o.focusBorder});
    }
  }

  > svg {
    width: 16px;
    height: 16px;
    fill: var(${o.foreground});
    margin: 8px;
  }

  &:focus-within {
    border: 1px solid var(${o.focusBorder});
  }
`;
export {
  O as S
};
