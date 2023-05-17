import { j as e, T as r, r as x, R as g } from "./ThemeStyles.c0d84d2f.js";
import { s as i } from "./styled-components.browser.esm.5667ec00.js";
const v = (d) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...d, children: /* @__PURE__ */ e.jsx("path", { d: "m504.1 471-134-134c29-35.5 45-80.2 45-129 0-114.9-93.13-208-208-208S0 93.13 0 208s93.12 208 207.1 208c48.79 0 93.55-16.91 129-45.04l134 134c5.6 4.74 11.8 7.04 17.9 7.04s12.28-2.344 16.97-7.031c9.33-9.369 9.33-24.569-.87-33.969zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160-71.78 160-160 160S48 296.2 48 208z" }) });
function f({
  items: d,
  selected: t,
  setSelected: a,
  filter: l
}) {
  return /* @__PURE__ */ e.jsx(b, { children: d.filter(
    (o) => l === void 0 || o.label.toLowerCase().includes(l.toLowerCase())
  ).map((o) => o.id === t ? /* @__PURE__ */ e.jsx(m, { children: o.label }, o.id) : /* @__PURE__ */ e.jsx(h, { onClick: () => a(o.id), children: o.label }, o.id)) });
}
const b = i.ul`
  padding: 0;
  margin: 0;
`, h = i.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 36px;
  border-bottom: 1px solid var(${r.border});
  cursor: pointer;
  padding: 0 8px;
  overflow: hidden;
`, m = i(h)`
  background-color: var(${r.listActiveSelectionBackground});
  color: var(${r.listActiveSelectionForeground});
  border-radius: 2px;
`;
function B({
  render: d,
  sections: t,
  defaultSelection: a
}) {
  var c, p;
  const [l, o] = x.useState(a || ((p = (c = t == null ? void 0 : t[0]) == null ? void 0 : c.items) == null ? void 0 : p[0].id) || ""), [s, u] = x.useState("");
  return /* @__PURE__ */ e.jsxs(w, { children: [
    /* @__PURE__ */ e.jsxs(j, { children: [
      /* @__PURE__ */ e.jsxs(y, { children: [
        /* @__PURE__ */ e.jsx("input", { placeholder: "Search", value: s, onChange: (n) => u(n.target.value) }),
        /* @__PURE__ */ e.jsx(v, {})
      ] }),
      t.map((n) => /* @__PURE__ */ e.jsxs(g.Fragment, { children: [
        /* @__PURE__ */ e.jsx($, { children: n.title }),
        /* @__PURE__ */ e.jsx(
          f,
          {
            selected: l,
            setSelected: o,
            items: n.items,
            filter: s.trim()
          }
        )
      ] }, n.title))
    ] }),
    /* @__PURE__ */ e.jsx(S, { children: d(l) })
  ] });
}
const w = i.div`
  display: flex;
  background-color: var(${r.background});
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
`, S = i.div`
  background-color: var(${r.computedOne});
  padding: 16px;
`, j = i.div`
  padding: 16px;
`, $ = i.div`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(${r.disabledForeground});
`, y = i.div`
  display: flex;
  height: 40px;
  align-items: center;
  background-color: var(${r.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${r.border});

  > input {
    flex: 1;
    margin-left: 8px;
    background-color: transparent;
    border: none;
    color: var(${r.foreground});
    padding: 4px;

    &::placeholder {
      color: var(${r.inputPlaceholderForeground});
      font-size: 14px;
    }

    &:focus {
      outline: none;
      // outline: 1px solid var(${r.focusBorder});
    }
  }

  > svg {
    width: 16px;
    height: 16px;
    fill: var(${r.foreground});
    margin: 8px;
  }

  &:focus-within {
    border: 1px solid var(${r.focusBorder});
  }
`;
export {
  B as S
};
