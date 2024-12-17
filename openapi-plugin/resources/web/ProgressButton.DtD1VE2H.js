import { j as o, W as p, q as c, T as s, e as i } from "./TriangleExclamation.Bx9Cjic4.js";
const m = (t) => /* @__PURE__ */ o.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ o.jsx("path", { d: "M288 32c0 17.67-14.3 32-32 32s-32-14.33-32-32 14.3-32 32-32 32 14.33 32 32zm0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm192-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM32 288c-17.67 0-32-14.3-32-32s14.33-32 32-32 32 14.3 32 32-14.33 32-32 32zm42.98 103.8c12.5-12.5 32.72-12.5 45.22 0s12.5 32.7 0 45.2-32.72 12.5-45.22 0-12.5-32.7 0-45.2zM391.8 437c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0 12.5 32.7 0 45.2-32.7 12.5-45.2 0zM120.2 74.98c12.5 12.5 12.5 32.72 0 45.22s-32.72 12.5-45.22 0-12.5-32.72 0-45.22c12.5-12.49 32.72-12.49 45.22 0z" }) });
function x({
  label: t,
  disabled: d,
  waiting: r,
  onClick: u,
  className: l
}) {
  const [e, n] = i.useState(r);
  return i.useEffect(() => {
    let a;
    return r ? n(!0) : a = setTimeout(() => {
      n(!1);
    }, 300), () => {
      clearTimeout(a);
    };
  }, [r]), /* @__PURE__ */ o.jsxs(
    f,
    {
      className: l,
      onClick: u,
      disabled: d || e,
      waiting: e,
      children: [
        /* @__PURE__ */ o.jsx("span", { children: t }),
        /* @__PURE__ */ o.jsx(m, {})
      ]
    }
  );
}
const g = p`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, f = c.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  background-color: var(${s.buttonBackground});
  color: var(${s.buttonForeground});
  border: 1px solid var(${s.buttonBorder});
  ${({ waiting: t }) => t && "gap: 8px;"}
  > span {
    flex: 1;
  }
  > svg {
    fill: var(${s.buttonForeground});
    animation: ${g} 2s infinite linear;
    transition: width 0.2s linear;
    ${({ waiting: t }) => !t && "width: 0;"}
  }
  &:disabled {
    opacity: .4;
  }
`, h = c(x)`
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${s.focusBorder});
  }
`;
export {
  h as N,
  x as P,
  m as S
};
