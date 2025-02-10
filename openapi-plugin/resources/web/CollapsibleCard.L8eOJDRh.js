import { q as r, T as e, e as p, j as o } from "./webapp.CeAUXIIl.js";
import { S as c } from "./AngleDown.Cf8-HIFo.js";
import { S as x } from "./AngleUp.4zhx5nPt.js";
function b({
  children: t,
  defaultCollapsed: n
}) {
  const [i, a] = p.useState(n ?? !0), l = t.slice(0, t.length - 1), d = t[t.length - 1];
  return /* @__PURE__ */ o.jsxs(g, { children: [
    /* @__PURE__ */ o.jsxs(
      f,
      {
        collapsed: i,
        onClick: (s) => {
          s.preventDefault(), s.stopPropagation(), a(!i);
        },
        children: [
          /* @__PURE__ */ o.jsx("div", { children: i ? /* @__PURE__ */ o.jsx(c, {}) : /* @__PURE__ */ o.jsx(x, {}) }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            ...l
          ] })
        ]
      }
    ),
    !i && /* @__PURE__ */ o.jsx(m, { children: d })
  ] });
}
const g = r.div`
  margin: 8px;
  border: 1px solid var(${e.border});
  //background-color: var(${e.computedOne});
`, f = r.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  //background-color: var(${e.computedOne});
  align-items: stretch;
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    display: flex;
    justify-content: center;
    > svg {
      fill: var(${e.foreground});
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
  ${({ collapsed: t }) => !t && `border-bottom: 1px solid var(${e.border});
    border-left: 5px solid var(${e.badgeBackground});`}
`, j = r.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 600;
`, y = r.div`
  //margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, $ = r.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${e.foreground});
  }
`, m = r.div`
  //background-color: var(${e.computedOne});
`;
export {
  y as B,
  b as C,
  j as T,
  $ as a
};
