import { At as e, D as t, Dt as n, Ot as r, T as i } from "./icons.ODuw_IC-.js";
import { a, i as o, o as s, r as c, t as l } from "./dist.NjuSfjX-.js";
//#region src/new-components/DescriptionTooltip.tsx
var u = n();
function d({ icon: e, children: n }) {
	return /* @__PURE__ */ (0, u.jsx)(a, { children: /* @__PURE__ */ (0, u.jsxs)(l, { children: [/* @__PURE__ */ (0, u.jsx)(s, {
		asChild: !0,
		children: /* @__PURE__ */ (0, u.jsx)(f, { children: e === "exclamation" ? /* @__PURE__ */ (0, u.jsx)(t, {}) : /* @__PURE__ */ (0, u.jsx)(i, {}) })
	}), /* @__PURE__ */ (0, u.jsx)(o, { children: /* @__PURE__ */ (0, u.jsx)(p, { children: n }) })] }) });
}
var f = e.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  & > svg {
    fill: var(${r.foreground});
  }
`, p = e(c)`
  color: var(${r.notificationsForeground});
  background-color: var(${r.notificationsBackground});
  border: 1px solid var(${r.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
  max-width: 500px;
  box-shadow: 0 10px 38px var(${r.computedTwo});
`;
//#endregion
export { d as t };
