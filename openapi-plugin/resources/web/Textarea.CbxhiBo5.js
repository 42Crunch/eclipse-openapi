import { q as i, T as e, j as r } from "./webapp.CeAUXIIl.js";
import { a as c } from "./index.esm.B6e3vWVZ.js";
import { D as p } from "./DescriptionTooltip.By3IfDRj.js";
function m({
  label: n,
  name: l,
  disabled: t,
  description: a
}) {
  const {
    field: s,
    fieldState: { error: o, invalid: d }
  } = c({
    name: l
  });
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(x, { invalid: d, children: [
      /* @__PURE__ */ r.jsxs(h, { children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("span", { children: n }),
          " ",
          t && /* @__PURE__ */ r.jsx("span", { children: "(read only)" })
        ] }),
        a && /* @__PURE__ */ r.jsx(p, { children: a })
      ] }),
      /* @__PURE__ */ r.jsx("textarea", { ...s, disabled: t })
    ] }),
    o && /* @__PURE__ */ r.jsx(u, { children: o == null ? void 0 : o.message })
  ] });
}
const x = i.div`
  height: 240px;
  background-color: var(${e.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: n }) => n ? `border: 1px solid var(${e.errorBorder});` : `border: 1px solid var(${e.border});
         &:focus-within {
           border: 1px solid var(${e.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${e.inputPlaceholderForeground});
  }
  > textarea {
    flex: 1;
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
  }
`, h = i.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${e.inputPlaceholderForeground});
`, u = i.div`
  color: var(${e.errorForeground});
`;
export {
  m as T
};
