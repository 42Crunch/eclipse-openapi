import { At as e, Dt as t, Ot as n, z as r } from "./icons.ODuw_IC-.js";
import { r as i } from "./downshift.esm.CXezHbY6.js";
import { a } from "./index.esm.BTfY3KsF.js";
//#region src/components/Select.tsx
var o = t();
function s(e) {
	return e ? e.label : "";
}
function c({ name: e, options: t, placeholder: n, label: r }) {
	let { field: i } = a({
		name: e,
		rules: { required: !0 }
	}), s = u(t, i.value);
	return /* @__PURE__ */ (0, o.jsx)(l, {
		options: t,
		placeholder: n,
		label: r,
		selected: s?.value,
		onSelectedItemChange: (e) => {
			i.onChange(e?.value);
		}
	});
}
function l({ options: e, placeholder: t, label: n, selected: a, onSelectedItemChange: c }) {
	let l = e.filter((e) => e.value === a)?.[0], { isOpen: u, getToggleButtonProps: h, getMenuProps: g, getItemProps: _ } = i({
		items: e,
		itemToString: s,
		selectedItem: l || null,
		onSelectedItemChange: ({ selectedItem: e }) => {
			c(e);
		}
	});
	return /* @__PURE__ */ (0, o.jsxs)(d, { children: [/* @__PURE__ */ (0, o.jsxs)(f, { children: [n !== void 0 && /* @__PURE__ */ (0, o.jsx)("div", { children: n }), /* @__PURE__ */ (0, o.jsxs)(p, {
		...h(),
		children: [/* @__PURE__ */ (0, o.jsx)("span", { children: l ? l.label : t ?? "" }), /* @__PURE__ */ (0, o.jsx)(r, {})]
	})] }), /* @__PURE__ */ (0, o.jsx)(m, {
		...g(),
		$isOpen: u,
		children: u && e.map((e, t) => /* @__PURE__ */ (0, o.jsx)("li", {
			..._({
				item: e,
				index: t
			}),
			children: /* @__PURE__ */ (0, o.jsx)("span", { children: e.label })
		}, `${e.value}${t}`))
	})] });
}
function u(e, t) {
	return e.filter((e) => e.value === t)?.[0];
}
var d = e.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, f = e.div`
  height: 40px;
  background-color: var(${n.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${n.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${n.focusBorder});
  }
  > div:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${n.inputPlaceholderForeground});
  }
`, p = e.div`
  display: flex;
  color: var(${n.foreground});
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
    fill: var(${n.foreground});
  }
`, m = e.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${n.dropdownBackground});
  color: var(${n.dropdownForeground});
  ${({ $isOpen: e }) => e && `
    border: 1px solid var(${n.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${n.listHoverBackground});
  }
`;
//#endregion
export { c as n, l as t };
