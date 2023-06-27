import { d as p, T as o, j as r } from "./styled-components.browser.esm.b4077a0f.js";
import { c as v } from "./downshift.esm.c45abd85.js";
import { d as h } from "./index.esm.2e24c5a3.js";
import { S as m } from "./TriangleExclamation.3c1770d3.js";
function b(e) {
  return e ? e.label : "";
}
function T({
  name: e,
  options: t,
  placeholder: i,
  label: s
}) {
  const { field: a } = h({
    name: e,
    rules: { required: !0 }
  }), n = $(t, a.value), c = (d) => {
    a.onChange(d == null ? void 0 : d.value);
  };
  return /* @__PURE__ */ r.jsx(
    w,
    {
      options: t,
      placeholder: i,
      label: s,
      selected: n == null ? void 0 : n.value,
      onSelectedItemChange: c
    }
  );
}
function w({
  options: e,
  placeholder: t,
  label: i,
  selected: s,
  onSelectedItemChange: a
}) {
  var u;
  const n = (u = e.filter((l) => l.value === s)) == null ? void 0 : u[0], { isOpen: c, getToggleButtonProps: d, getMenuProps: g, getItemProps: f } = v({
    items: e,
    itemToString: b,
    selectedItem: n || null,
    onSelectedItemChange: ({ selectedItem: l }) => {
      a(l);
    }
  });
  return /* @__PURE__ */ r.jsxs(j, { children: [
    /* @__PURE__ */ r.jsxs(S, { children: [
      /* @__PURE__ */ r.jsx("div", { children: i }),
      /* @__PURE__ */ r.jsxs(y, { ...d(), children: [
        /* @__PURE__ */ r.jsx("span", { children: n ? n.label : t ?? "" }),
        /* @__PURE__ */ r.jsx(m, {})
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(B, { ...g(), isOpen: c, children: c && e.map((l, x) => /* @__PURE__ */ r.jsx("li", { ...f({ item: l, index: x }), children: /* @__PURE__ */ r.jsx("span", { children: l.label }) }, `${l.value}${x}`)) })
  ] });
}
function $(e, t) {
  var i;
  return (i = e.filter((s) => s.value === t)) == null ? void 0 : i[0];
}
const j = p.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, S = p.div`
  height: 40px;
  background-color: var(${o.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${o.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${o.focusBorder});
  }
  > div:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${o.inputPlaceholderForeground});
  }
`, y = p.div`
  display: flex;
  color: var(${o.foreground});
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  > span {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > svg {
    fill: var(${o.foreground});
  }
`, B = p.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${o.dropdownBackground});
  color: var(${o.dropdownForeground});
  ${({ isOpen: e }) => e && `
    border: 1px solid var(${o.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${o.listHoverBackground});
  }
`;
export {
  w as P,
  T as S
};
