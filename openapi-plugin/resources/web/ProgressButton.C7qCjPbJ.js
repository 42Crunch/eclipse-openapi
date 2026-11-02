import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, Dt as n, Ot as r, kt as i, o as a, vn as o } from "./icons.ODuw_IC-.js";
//#region src/new-components/ProgressButton.tsx
var s = /* @__PURE__ */ e(o(), 1), c = n();
function l({ label: e, disabled: t, waiting: n, onClick: r, className: i }) {
	let [o, l] = (0, s.useState)(n);
	return (0, s.useEffect)(() => {
		let e;
		return n ? l(!0) : e = setTimeout(() => {
			l(!1);
		}, 300), () => {
			clearTimeout(e);
		};
	}, [n]), /* @__PURE__ */ (0, c.jsxs)(d, {
		className: i,
		onClick: r,
		disabled: t || o,
		$waiting: o,
		children: [/* @__PURE__ */ (0, c.jsx)("span", { children: e }), /* @__PURE__ */ (0, c.jsx)(a, {})]
	});
}
var u = i`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, d = t.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  background-color: var(${r.buttonBackground});
  color: var(${r.buttonForeground});
  border: 1px solid var(${r.buttonBorder});
  ${({ $waiting: e }) => e && "gap: 8px;"}
  > span {
    flex: 1;
  }
  > svg {
    fill: var(${r.buttonForeground});
    animation: ${u} 2s infinite linear;
    transition: width 0.2s linear;
    ${({ $waiting: e }) => !e && "width: 0;"}
  }
  &:disabled {
    opacity: 0.4;
  }
`, f = t(l)`
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${r.focusBorder});
  }
`;
//#endregion
export { l as n, f as t };
