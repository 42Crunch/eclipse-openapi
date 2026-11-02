import { At as e, Dt as t, Ot as n } from "./icons.ODuw_IC-.js";
//#region src/components/Switch.tsx
var r = t();
function i({ value: e, onChange: t }) {
	return /* @__PURE__ */ (0, r.jsx)(a, {
		$active: e,
		onClick: (n) => {
			n.preventDefault(), n.stopPropagation(), t(!e);
		},
		children: /* @__PURE__ */ (0, r.jsx)(o, { $active: e })
	});
}
var a = e.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 34px;
  height: 17px;
  border-radius: 30px;
  border: 1px solid var(${n.border});
  ${({ $active: e }) => e ? `background-color: var(${n.buttonBackground}); justify-content: end;` : `background-color: var(${n.background}); justify-content: start;`}
`, o = e.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  margin-right: 2px;
  margin-left: 2px;
  ${({ $active: e }) => e ? `background-color: var(${n.buttonForeground}); border: 1px solid var(${n.buttonForeground});` : `background-color: var(${n.border}); border: 1px solid var(${n.border});`}
`;
//#endregion
export { i as t };
