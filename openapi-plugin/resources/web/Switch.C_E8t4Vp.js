import { q as e, T as o, j as n } from "./extends.lDO40HzL.js";
function c({
  value: r,
  onChange: a
}) {
  return /* @__PURE__ */ n.jsx(
    i,
    {
      active: r,
      onClick: (t) => {
        t.preventDefault(), t.stopPropagation(), a(!r);
      },
      children: /* @__PURE__ */ n.jsx(d, { active: r })
    }
  );
}
const i = e.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 34px;
  height: 17px;
  border-radius: 30px;
  border: 1px solid var(${o.border});
  ${({ active: r }) => r ? `background-color: var(${o.buttonBackground}); justify-content: end;` : `background-color: var(${o.background}); justify-content: start;`}
`, d = e.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  margin-right: 2px;
  margin-left: 2px;
  ${({ active: r }) => r ? `background-color: var(${o.buttonForeground}); border: 1px solid var(${o.buttonForeground});` : `background-color: var(${o.border}); border: 1px solid var(${o.border});`}
`;
export {
  c as S
};
