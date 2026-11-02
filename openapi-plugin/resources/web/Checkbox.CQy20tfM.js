import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, Dt as n, M as r, Ot as i, vn as a } from "./icons.ODuw_IC-.js";
import { n as o, t as s } from "./dist.Brt3vwZ_.js";
import { t as c } from "./DescriptionTooltip.CPc6ZBTd.js";
//#region src/new-components/Checkbox.tsx
var l = /* @__PURE__ */ e(a(), 1), u = n();
function d({ label: e, value: t, description: n, onChange: i, size: a }) {
	let o = (0, l.useId)();
	return /* @__PURE__ */ (0, u.jsxs)(f, { children: [
		/* @__PURE__ */ (0, u.jsx)(a === "medium" ? p : m, {
			checked: t,
			onCheckedChange: (e) => {
				typeof e == "boolean" && i(e);
			},
			id: o,
			children: /* @__PURE__ */ (0, u.jsx)(h, { children: /* @__PURE__ */ (0, u.jsx)(r, {}) })
		}),
		/* @__PURE__ */ (0, u.jsx)("label", {
			htmlFor: o,
			children: e
		}),
		n !== void 0 && /* @__PURE__ */ (0, u.jsx)(c, { children: n })
	] });
}
var f = t.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, p = t(s)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${i.checkboxBackground});
  border-radius: 4px;
  border-color: var(${i.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, m = t(s)`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${i.checkboxBackground});
  border-radius: 3px;
  border-color: var(${i.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, h = t(o)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${i.checkboxForeground});
  width: 10px;
  height: 10px;
`;
//#endregion
export { p as i, f as n, h as r, d as t };
