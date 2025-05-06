import { e as r, T as e, f as h, j as o } from "./TriangleExclamation.D70Relru.js";
import { R as s, I as p } from "./index.DqymPi7Y.js";
import { S as b } from "./Check.XbYs6jvK.js";
import { D as m } from "./DescriptionTooltip.ukxJpRs8.js";
function R({
  label: n,
  value: a,
  description: t,
  onChange: d,
  size: l
}) {
  const i = h.useId(), x = l === "medium" ? u : g;
  return /* @__PURE__ */ o.jsxs(f, { children: [
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
const f = r.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, u = r(s)`
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
  u as M,
  f as a
};
