import { e as a, T as r, j as o } from "./TriangleExclamation.DrtDYmuA.js";
import { a as f } from "./downshift.esm.B74gIEnU.js";
import { a as v } from "./index.esm.B9REA_Vl.js";
import { S as h } from "./AngleDown.mnq0UxQI.js";
function m(e) {
  return e ? e.label : "";
}
function P({
  name: e,
  options: l,
  placeholder: t,
  label: c
}) {
  const { field: s } = v({
    name: e,
    rules: { required: !0 }
  }), i = w(l, s.value), d = (p) => {
    s.onChange(p?.value);
  };
  return /* @__PURE__ */ o.jsx(
    $,
    {
      options: l,
      placeholder: t,
      label: c,
      selected: i?.value,
      onSelectedItemChange: d
    }
  );
}
function $({
  options: e,
  placeholder: l,
  label: t,
  selected: c,
  onSelectedItemChange: s
}) {
  const i = e.filter((n) => n.value === c)?.[0], { isOpen: d, getToggleButtonProps: p, getMenuProps: x, getItemProps: g } = f({
    items: e,
    itemToString: m,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: n }) => {
      s(n);
    }
  });
  return /* @__PURE__ */ o.jsxs(b, { children: [
    /* @__PURE__ */ o.jsxs(j, { children: [
      t !== void 0 && /* @__PURE__ */ o.jsx("div", { children: t }),
      /* @__PURE__ */ o.jsxs(S, { ...p(), children: [
        /* @__PURE__ */ o.jsx("span", { children: i ? i.label : l ?? "" }),
        /* @__PURE__ */ o.jsx(h, {})
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(y, { ...x(), $isOpen: d, children: d && e.map((n, u) => /* @__PURE__ */ o.jsx("li", { ...g({ item: n, index: u }), children: /* @__PURE__ */ o.jsx("span", { children: n.label }) }, `${n.value}${u}`)) })
  ] });
}
function w(e, l) {
  return e.filter((t) => t.value === l)?.[0];
}
const b = a.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, j = a.div`
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
`, S = a.div`
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
`, y = a.ul`
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
  $ as P,
  P as S
};
