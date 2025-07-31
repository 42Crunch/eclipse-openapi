import { e as p, T as r, j as o } from "./TriangleExclamation.D0e1MsJn.js";
import { a as v } from "./downshift.esm.Qr9p8HjF.js";
import { a as h } from "./index.esm.B-IUgjj6.js";
import { S as m } from "./AngleDown.CaeaMDqj.js";
function $(e) {
  return e ? e.label : "";
}
function T({
  name: e,
  options: i,
  placeholder: n,
  label: s
}) {
  const { field: a } = h({
    name: e,
    rules: { required: !0 }
  }), l = b(i, a.value), c = (d) => {
    a.onChange(d == null ? void 0 : d.value);
  };
  return /* @__PURE__ */ o.jsx(
    w,
    {
      options: i,
      placeholder: n,
      label: s,
      selected: l == null ? void 0 : l.value,
      onSelectedItemChange: c
    }
  );
}
function w({
  options: e,
  placeholder: i,
  label: n,
  selected: s,
  onSelectedItemChange: a
}) {
  var u;
  const l = (u = e.filter((t) => t.value === s)) == null ? void 0 : u[0], { isOpen: c, getToggleButtonProps: d, getMenuProps: g, getItemProps: f } = v({
    items: e,
    itemToString: $,
    selectedItem: l || null,
    onSelectedItemChange: ({ selectedItem: t }) => {
      a(t);
    }
  });
  return /* @__PURE__ */ o.jsxs(j, { children: [
    /* @__PURE__ */ o.jsxs(S, { children: [
      n !== void 0 && /* @__PURE__ */ o.jsx("div", { children: n }),
      /* @__PURE__ */ o.jsxs(y, { ...d(), children: [
        /* @__PURE__ */ o.jsx("span", { children: l ? l.label : i ?? "" }),
        /* @__PURE__ */ o.jsx(m, {})
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(B, { ...g(), $isOpen: c, children: c && e.map((t, x) => /* @__PURE__ */ o.jsx("li", { ...f({ item: t, index: x }), children: /* @__PURE__ */ o.jsx("span", { children: t.label }) }, `${t.value}${x}`)) })
  ] });
}
function b(e, i) {
  var n;
  return (n = e.filter((s) => s.value === i)) == null ? void 0 : n[0];
}
const j = p.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, S = p.div`
  height: 40px;
  background-color: var(${r.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${r.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${r.focusBorder});
  }
  > div:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${r.inputPlaceholderForeground});
  }
`, y = p.div`
  display: flex;
  color: var(${r.foreground});
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
    fill: var(${r.foreground});
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
  background-color: var(${r.dropdownBackground});
  color: var(${r.dropdownForeground});
  ${({ $isOpen: e }) => e && `
    border: 1px solid var(${r.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${r.listHoverBackground});
  }
`;
export {
  w as P,
  T as S
};
