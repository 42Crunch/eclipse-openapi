import { e as r, T as e, f as h, j as o } from "./TriangleExclamation.D0e1MsJn.js";
import { C as s, a as p } from "./index.DogJ_LlL.js";
import { S as b } from "./Check.ChIlL3ks.js";
import { D as m } from "./DescriptionTooltip.Cq977ZHq.js";
function $({
  label: a,
  value: n,
  description: t,
  onChange: d,
  size: l
}) {
  const c = h.useId(), x = l === "medium" ? f : u;
  return /* @__PURE__ */ o.jsxs(k, { children: [
    /* @__PURE__ */ o.jsx(
      x,
      {
        checked: n,
        onCheckedChange: (i) => {
          typeof i == "boolean" && d(i);
        },
        id: c,
        children: /* @__PURE__ */ o.jsx(g, { children: /* @__PURE__ */ o.jsx(b, {}) })
      }
    ),
    /* @__PURE__ */ o.jsx("label", { htmlFor: c, children: a }),
    t !== void 0 && /* @__PURE__ */ o.jsx(m, { children: t })
  ] });
}
const k = r.div`
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
`, u = r(s)`
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
`, g = r(p)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${e.checkboxForeground});
  width: 10px;
  height: 10px;
`;
export {
  $ as C,
  g as I,
  f as M,
  k as a
};
