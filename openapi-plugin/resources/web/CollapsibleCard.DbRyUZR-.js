import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, Dt as n, Ot as r, R as i, vn as a, z as o } from "./icons.ODuw_IC-.js";
//#region src/new-components/CollapsibleCard.tsx
var s = /* @__PURE__ */ e(a(), 1), c = n();
function l({ children: e, defaultCollapsed: t }) {
	let [n, r] = (0, s.useState)(t ?? !0), a = e.slice(0, e.length - 1), l = e[e.length - 1];
	return /* @__PURE__ */ (0, c.jsxs)(u, { children: [/* @__PURE__ */ (0, c.jsxs)(d, {
		$thin: a.length === 1,
		$collapsed: n,
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), r(!n);
		},
		children: [/* @__PURE__ */ (0, c.jsx)("div", { children: n ? /* @__PURE__ */ (0, c.jsx)(o, {}) : /* @__PURE__ */ (0, c.jsx)(i, {}) }), /* @__PURE__ */ (0, c.jsx)("div", { children: [...a] })]
	}), !n && /* @__PURE__ */ (0, c.jsx)(h, { children: l })] });
}
var u = t.div`
  border: 1px solid var(${r.border});
`, d = t.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  align-items: stretch;
  line-break: anywhere;
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    display: flex;
    justify-content: center;
    align-items: ${({ $thin: e }) => e ? "center" : "start"};
    > svg {
      fill: var(${r.foreground});
    }
  }
  & > div:nth-child(2) {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  & > div:nth-child(3) {
    display: flex;
    align-items: center;
  }

  border-left: 5px solid transparent;
  ${({ $collapsed: e }) => !e && `border-bottom: 1px solid var(${r.border});
    border-left: 5px solid var(${r.badgeBackground});`}
`, f = t.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 600;
`, p = t.div`
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, m = t.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  gap: 4px;
  & > svg {
    fill: var(${r.foreground});
  }
`, h = t.div``;
//#endregion
export { f as i, m as n, l as r, p as t };
