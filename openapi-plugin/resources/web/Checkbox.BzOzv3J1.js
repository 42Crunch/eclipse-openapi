import { q as r, T as e, e as h, j as o } from "./TriangleExclamation.Bx9Cjic4.js";
import { R as s, I as p } from "./index.CFGjXlHc.js";
import { S as b } from "./Check.BYlFq-hF.js";
import { D as m } from "./DescriptionTooltip.C5xxvOjw.js";
function R({
  label: n,
  value: a,
  description: t,
  onChange: d,
  size: l
}) {
  const i = h.useId(), x = l === "medium" ? f : g;
  return /* @__PURE__ */ o.jsxs(u, { children: [
    /* @__PURE__ */ o.jsx(
      x,
      {
        checked: a,
        onCheckedChange: (c) => {
          typeof c == "boolean" && d(c);
        },
        id: i,
        children: /* @__PURE__ */ o.jsx(k, { children: /* @__PURE__ */ o.jsx(b, {}) })
      }
    ),
    /* @__PURE__ */ o.jsx("label", { htmlFor: i, children: n }),
    t !== void 0 && /* @__PURE__ */ o.jsx(m, { children: t })
  ] });
}
const u = r.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, f = r(s)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${e.checkboxBackground});
  border-radius: 4px;
  border-color: var(${e.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, g = r(s)`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${e.checkboxBackground});
  border-radius: 3px;
  border-color: var(${e.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, k = r(p)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${e.checkboxForeground});
  width: 10px;
  height: 10px;
`;
export {
  R as C,
  k as I,
  f as M,
  u as a
};
