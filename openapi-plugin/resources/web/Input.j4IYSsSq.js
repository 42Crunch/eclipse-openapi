import { e as o, T as e, j as r } from "./TriangleExclamation.D0e1MsJn.js";
import { a as p } from "./index.esm.B-IUgjj6.js";
import { D as x } from "./DescriptionTooltip.Cq977ZHq.js";
function b({
  label: i,
  name: s,
  disabled: t,
  password: l,
  description: d
}) {
  const {
    field: a,
    fieldState: { error: n, invalid: c }
  } = p({
    name: s
  });
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(u, { children: /* @__PURE__ */ r.jsxs(f, { $invalid: c, children: [
      /* @__PURE__ */ r.jsxs(g, { children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("span", { children: i }),
          " ",
          t && /* @__PURE__ */ r.jsx("span", { children: "(read only)" })
        ] }),
        d && /* @__PURE__ */ r.jsx(x, { children: d })
      ] }),
      /* @__PURE__ */ r.jsx(h, { ...a, disabled: t, type: l ? "password" : "text" })
    ] }) }),
    n && /* @__PURE__ */ r.jsx(v, { children: n == null ? void 0 : n.message })
  ] });
}
const u = o.div`
  display: flex;
  flow-direction: column;
  gap: 4px;
  > div:first-child {
    flex: 1;
  }
  > div.description {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`, f = o.div`
  height: 40px;
  background-color: var(${e.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ $invalid: i }) => i ? `border: 1px solid var(${e.errorBorder});` : `border: 1px solid var(${e.border});
         &:focus-within {
           border: 1px solid var(${e.focusBorder});
         }
      `}
`, h = o.input`
  background: transparent;
  line-height: 20px;
  border: none;
  padding: 0;
  color: var(${e.foreground});
  &::placeholder {
    color: var(${e.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, g = o.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${e.inputPlaceholderForeground});
`, v = o.div`
  color: var(${e.errorForeground});
`;
export {
  b as I
};
