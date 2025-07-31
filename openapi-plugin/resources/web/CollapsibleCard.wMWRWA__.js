import { T as s, e as i, f as p, j as t } from "./TriangleExclamation.D0e1MsJn.js";
import { S as c } from "./AngleDown.CaeaMDqj.js";
import { S as x } from "./AngleUp.COZ6HPtA.js";
function u({
  children: e,
  defaultCollapsed: l
}) {
  const [o, a] = p.useState(l ?? !0), r = e.slice(0, e.length - 1), d = e[e.length - 1];
  return /* @__PURE__ */ t.jsxs(g, { children: [
    /* @__PURE__ */ t.jsxs(
      f,
      {
        $thin: r.length === 1,
        $collapsed: o,
        onClick: (n) => {
          n.preventDefault(), n.stopPropagation(), a(!o);
        },
        children: [
          /* @__PURE__ */ t.jsx("div", { children: o ? /* @__PURE__ */ t.jsx(c, {}) : /* @__PURE__ */ t.jsx(x, {}) }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            ...r
          ] })
        ]
      }
    ),
    !o && /* @__PURE__ */ t.jsx(v, { children: d })
  ] });
}
const g = i.div`
  border: 1px solid var(${s.border});
`, f = i.div`
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
      fill: var(${s.foreground});
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
  ${({ $collapsed: e }) => !e && `border-bottom: 1px solid var(${s.border});
    border-left: 5px solid var(${s.badgeBackground});`}
`, y = i.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 600;
`, j = i.div`
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, $ = i.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  gap: 4px;
  & > svg {
    fill: var(${s.foreground});
  }
`, v = i.div``;
export {
  j as B,
  u as C,
  y as T,
  $ as a
};
