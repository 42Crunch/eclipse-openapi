import { At as e, Dt as t, Ot as n } from "./icons.ODuw_IC-.js";
import { a as r } from "./index.esm.BTfY3KsF.js";
import { g as i, r as a } from "./Textarea.CAL1_A19.js";
import { t as o } from "./DescriptionTooltip.CPc6ZBTd.js";
//#region ../node_modules/zod/v4/classic/coerce.js
function s(e) {
	return i(a, e);
}
//#endregion
//#region src/new-components/fat-fields/Input.tsx
var c = t();
function l({ label: e, name: t, disabled: n, password: i, description: a }) {
	let { field: s, fieldState: { error: l, invalid: h } } = r({ name: t });
	return /* @__PURE__ */ (0, c.jsxs)(c.Fragment, { children: [/* @__PURE__ */ (0, c.jsx)(u, { children: /* @__PURE__ */ (0, c.jsxs)(d, {
		$invalid: h,
		children: [/* @__PURE__ */ (0, c.jsxs)(p, { children: [/* @__PURE__ */ (0, c.jsxs)("div", { children: [
			/* @__PURE__ */ (0, c.jsx)("span", { children: e }),
			" ",
			n && /* @__PURE__ */ (0, c.jsx)("span", { children: "(read only)" })
		] }), a && /* @__PURE__ */ (0, c.jsx)(o, { children: a })] }), /* @__PURE__ */ (0, c.jsx)(f, {
			...s,
			disabled: n,
			type: i ? "password" : "text"
		})]
	}) }), l && /* @__PURE__ */ (0, c.jsx)(m, { children: l?.message })] });
}
var u = e.div`
  display: flex;
  flow-direction: column;
  gap: 4px;
  > div:first-child {
    flex: 1;
  }
  > div.description {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`, d = e.div`
  height: 40px;
  background-color: var(${n.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ $invalid: e }) => e ? `border: 1px solid var(${n.errorBorder});` : `border: 1px solid var(${n.border});
         &:focus-within {
           border: 1px solid var(${n.focusBorder});
         }
      `}
`, f = e.input`
  background: transparent;
  line-height: 20px;
  border: none;
  padding: 0;
  color: var(${n.foreground});
  &::placeholder {
    color: var(${n.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, p = e.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${n.inputPlaceholderForeground});
`, m = e.div`
  color: var(${n.errorForeground});
`;
//#endregion
export { s as n, l as t };
