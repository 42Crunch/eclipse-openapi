import { T as r, e as i, j as o } from "./TriangleExclamation.BpqlFGl9.js";
import { a as p } from "./index.esm.BK0U62pm.js";
import { D as c } from "./DescriptionTooltip.ChnkXcZ4.js";
function j({
  label: e,
  name: l,
  disabled: d,
  password: t
}) {
  const {
    field: a,
    fieldState: { error: n, invalid: s }
  } = p({
    name: l
  });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs(x, { $invalid: s, children: [
      /* @__PURE__ */ o.jsx("div", { children: e }),
      /* @__PURE__ */ o.jsx("input", { ...a, disabled: d, type: t ? "password" : "text" })
    ] }),
    n && /* @__PURE__ */ o.jsx(u, { children: n?.message })
  ] });
}
const x = i.div`
  height: 40px;
  background-color: var(${r.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ $invalid: e }) => e ? `border: 1px solid var(${r.errorBorder});` : `border: 1px solid var(${r.border});
         &:focus-within {
           border: 1px solid var(${r.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${r.inputPlaceholderForeground});
  }
  > input {
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${r.foreground});
    &::placeholder {
      color: var(${r.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, u = i.div`
  color: var(${r.errorForeground});
`;
function m({
  label: e,
  name: l,
  disabled: d,
  description: t
}) {
  const {
    field: a,
    fieldState: { error: n, invalid: s }
  } = p({
    name: l
  });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs(h, { $invalid: s, children: [
      /* @__PURE__ */ o.jsxs(g, { children: [
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("span", { children: e }),
          " ",
          d && /* @__PURE__ */ o.jsx("span", { children: "(read only)" })
        ] }),
        t && /* @__PURE__ */ o.jsx(c, { children: t })
      ] }),
      /* @__PURE__ */ o.jsx("textarea", { ...a, disabled: d })
    ] }),
    n && /* @__PURE__ */ o.jsx(f, { children: n?.message })
  ] });
}
const h = i.div`
  height: 240px;
  background-color: var(${r.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ $invalid: e }) => e ? `border: 1px solid var(${r.errorBorder});` : `border: 1px solid var(${r.border});
         &:focus-within {
           border: 1px solid var(${r.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${r.inputPlaceholderForeground});
  }
  > textarea {
    flex: 1;
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${r.foreground});
    &::placeholder {
      color: var(${r.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, g = i.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${r.inputPlaceholderForeground});
`, f = i.div`
  color: var(${r.errorForeground});
`;
export {
  j as I,
  m as T
};
