import { e as n, T as o, j as e } from "./webapp.yF4PwBss.js";
function c({
  value: r,
  onChange: a
}) {
  return /* @__PURE__ */ e.jsx(
    i,
    {
      active: r,
      onClick: (t) => {
        t.preventDefault(), t.stopPropagation(), a(!r);
      },
      children: /* @__PURE__ */ e.jsx(d, { active: r })
    }
  );
}
const i = n.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 34px;
  height: 17px;
  border-radius: 30px;
  border: 1px solid var(${o.border});
  ${({ active: r }) => r ? `background-color: var(${o.buttonBackground}); justify-content: end;` : `background-color: var(${o.background}); justify-content: start;`}
`, d = n.div`
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
